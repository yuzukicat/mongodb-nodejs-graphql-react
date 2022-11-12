
## mongodb nodejs graphql react

This article is going to build a full stack tool using mongodb, nodejs, graphql and react.
It is also a codegen tool to auto generating middlewares, so you do not need to manage complex database connections manually. It automatically infers possible database cruds, graphql operations, so that you can copy the operations and use them as graphql documents in the front-end (react).

## Install mongodb in arch linux

This readme will introduce How to install and use mongoDB on Arch Linux, using Prisma Schema Prototyping to sync mongoDB and auto generating graphQL Apollo Services.

## [① MongoDB Arch Linux (AUR)][1]   

> MongoDB has been removed from the official repositories due to its re-licensing issues.   

> **mongodb-bin** - prebuilt MongoDB binary extracted from **official MongoDB Ubuntu repository** packages. Compilation options used are unknown.   

## [② Install mongosh-bin (Dependency)][2]   

```sh
mkdir Package
cd Package
git clone https://aur.archlinux.org/mongosh-bin.git
cd mongosh-bin
```

> [View the contents of PKGBUILD.][Arch User Repository]   

```sh
less PKGBUILD
```

> Make the package. After manually confirming the contents of the files, run `makepkg` as a **normal user**. Some helpful flags:   

- `-i/--install` installs the package if it is built successfully. This lets you skip the next step that is usually done manually.   

```sh
makepkg -i
```

## [③ Install mongodb-bin][3]   

```
cd ..
sudo pacman -S chrpath
git clone https://aur.archlinux.org/mongodb-bin.git
cd mongodb-bin
less PKGBUILD
nano PKGBUILD
```

Alter the PKGBUILD file:   
```diff
- depends=(mongosh-bin curl openssl-1.1.1.q-1)
+ depends=(mongosh-bin curl openssl)
```

Build:   

```sh
makepkg -i
cd
```

## [④ Environment Configuration][4]   

> Create a directory where the MongoDB instance stores its data.   

```sh
sudo mkdir -p /var/lib/mongo
```

> Create a directory where the MongoDB instance stores its log.   

```sh
sudo mkdir -p /var/log/mongodb
```

> The user that starts the MongoDB process must have read and write permission to these directories.   

```sh
sudo chown `whoami` /var/lib/mongo
sudo chown `whoami` /var/log/mongodb
```

## ⑤ Run MongoDB with a Replica Set deployed and create the User Administrator    

> To run MongoDB, run the mongod process at the system prompt.   

```sh
mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork
```

> Start a `mongosh` session on the same host machine as the `mongod`. You can run `mongosh` without any command-line options to connect to a mongod that is running on your localhost with default port **27017**.   

- By default, MongoDB launches with `bindIp` set to 127.0.0.1, which binds to the localhost network interface. This means that the mongod can only accept connections from clients that are running on the same machine. Remote clients will not be able to connect to the mongod, and the mongod will not be able to initialize a replica set unless this value is set to a valid network interface.   
This value can be configured either:   
In the MongoDB configuration file with `bindIp`, or.   
Via the command-line argument `--bind_ip`.   

- Before binding to a non-localhost (e.g. publicly accessible) IP address, ensure you have secured your cluster from unauthorized access.   

```sh
mongosh
```

> Convert a Standalone to a Replica Set.   

- Shut down the **standalone** mongod instance.   
- Restart the instance. Use the --replSet option to specify the name of the new replica set.   
- The `rs.initiate()` method provides a wrapper around the replSetInitiate command. Initiates a replica set.   

```sh
db.shutdownServer()
sudo mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork --replSet rs0
rs.initiate()
```

> Use SCRAM to Authenticate Clients.   
- Start MongoDB without access control.   
- Connect to the instance.   
- Create the user administrator (root user).   
- Re-start the MongoDB instance.   

```sh
show dbs
use admin
db
db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(),
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
db.shutdownServer()
sudo mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork --replSet rs0
```

## [⑥ Prisma Schema Prototyping][6]    

> The MongoDB data source connector connects Prisma to a hosted MongoDB instance.   

- Create a project directory and navigate into it.   
- Create a **tsconfig.json** file and add configuration to it.   
- Invoke the Prisma CLI by prefixing it with npx.   
- Set up your Prisma project by creating your Prisma schema file.   
  - `prisma init` Creates a new directory called prisma that contains a file called **schema.prisma**, which contains the Prisma schema with your database connection variable and schema models.   
- Install **type-graphql** package, as well as **graphql** and **class-validator** which are **peer dependencies** of TypeGraphQL.   
- The **reflect-metadata** shim is required to make the type reflection work.   
  - We must ensure that it is imported at the top of our entry file (before we use/import type-graphql or our resolvers).   

```sh
mkdir mongodb-nodejs-graphql-react
cd mongodb-nodejs-graphql-react
npm init -y
npm install -g tslib
npm install typescript ts-node @types/node --save-dev

touch tsconfig.json

npm install prisma --save-dev
npx prisma init --datasource-provider mongodb

npm install graphql class-validator type-graphql
npm install reflect-metadata
npm install @prisma/client
npm install typegraphql-prisma --save-dev
npm install graphql-scalars
npm install graphql-fields @types/graphql-fields
npm install tslib
npm install apollo-server-core koa apollo-server-koa
touch main.ts
```

> TypeScript configuration.   

- It's important to set these options in the **tsconfig.json** file of our project.   
  - TypeGraphQL is designed to work with Node.js LTS (10.3+, 12+) and the latest stable releases. It uses features from ES2018 so we should set our tsconfig.json file appropriately.   
  - Due to using the graphql-subscription dependency that relies on an AsyncIterator, we may also have to provide the esnext.asynciterable to the lib option.   

```
{
    "compilerOptions": {
        "target": "es2020",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "dist",
        "strict": false,
        "lib": [
            "es2020",
            "esnext.asynciterable"
        ],
        "esModuleInterop": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

> To connect to a **MongoDB Server**, configure the datasource block in your Prisma schema file.   

```sh
use dataBase
show dbs
db
```

> Prisma Integration.   

- TypeGraphQL provides an integration with Prisma by the **typegraphql-prisma** package.   
  - It generates the type classes and CRUD resolvers based on the Prisma schema, so we can execute complex queries or mutations that corresponds to the Prisma actions, without having to write any code for that.   
  - To make use of the prisma integration, first we need to add a new generator to the **schema.prisma** file.   

```
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma-client-js"
}

generator typegraphql {
  provider = "typegraphql-prisma"
  output   = "../generated/type-graphql"
}

model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  profile Profile?
}

model Profile {
  id     String @id @default(auto()) @map("_id") @db.ObjectId
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId String @unique @db.ObjectId
}

enum Role {
  USER
  ADMIN
}

model collection {
  id   String @id @default(auto()) @map("_id") @db.ObjectId
  item String
  qty  Int
}
```

> The **.env** file in the **root directory** of the project, which is used for defining environment variables (such as your database connection).   

```
DATABASE_URL="mongodb://myUserAdmin:<passWord>@localhost:27017/<dataBase>?authSource=admin&replicaSet=rs0"
```

For example:

```
DATABASE_URL="mongodb://myUserAdmin:myUserAdmin@localhost:27017/dataBase?authSource=admin&replicaSet=rs0"
```

> Use `db push` to prototype a schema at the start of a project and initialize a migration history when you are happy with the first draft.   

> After running prisma generate we can import the generated resolvers classes and use them to build our graphQL schema.   

```sh
npx prisma db push --accept-data-loss
```

> MongoDB CRUD Operations.   

- Use `db.collection.remove()` to remove the existing documents and reuse the collection. Use this approach to avoid flushing the cache.   

```sh
show collections
db.collection.insertOne( { item: "card", qty: 15 } )
db.collection.find().pretty()
db.collection.remove
```

> Bootstrapping graphQL Apollo Server.   

- After creating our resolvers, type classes, and other business-related code, we need to make our app run. First we have to build the schema, then we can expose it with an HTTP server, WebSockets or even MQTT.   
  - Create Executable Schema.   
    - To create an executable schema from type and resolver definitions, we need to use the buildSchema function. It takes a configuration object as a parameter and returns a promise of a GraphQLSchema object.   
    - In the configuration object we must provide a resolvers property, which can be an array of resolver classes.   
  - To make await work, we need to declare it as an async function. Example of main.ts file.   
  - Create an HTTP GraphQL endpoint.   
    - In most cases, the GraphQL app is served by an HTTP server. After building the schema we can create the GraphQL endpoint with a variety of tools such as graphql-yoga or apollo-server. Here is an example using apollo-server.   
- main.ts file as follows:   

```
import "reflect-metadata";
import path from "path";
const util = require('util')
import { PrismaClient } from "./generated/prisma-client-js";
import { resolvers } from "./generated/type-graphql";
import { buildSchemaSync } from "type-graphql";
import { ApolloServer } from 'apollo-server-koa';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginDrainHttpServer,
} from "apollo-server-core";
import Koa from 'koa';
import http from 'http';
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4001;
async function bootstrap() {
  // ... Building schema here
  const schema = await buildSchemaSync({
    resolvers,
    dateScalarMode: "timestamp",
    emitSchemaFile: path.resolve(__dirname, "./graphql/shema.graphql"),
    validate: false,
  });
  // const { typeDefs, resolvers:any } = await buildTypeDefsAndResolvers({
  //   resolvers
  // });
  // const schema = makeExecutableSchema({ typeDefs, resolvers:any });
  // Create the GraphQL server
  const httpServer = http.createServer();
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    context: () => ({ prisma }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  // Start the server
  await server.start();
  const app = new Koa();
  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());
  await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
  return { server, app };
}
bootstrap(); // actually run the async function
```

- package.json file as follows:   

```
{
  "name": "mongodb-nodejs-graphql-react",
  "version": "1.0.0",
  "description": "This article is going to build a full stack tool using mongodb, nodejs, graphql and react. It is also a codegen tool to auto generating middlewares, so you do not need to manage complex database connections manually. It automatically infers possible database cruds, graphql operations, so that you can copy the operations and use them as graphql documents in the front-end (react).",
  "main": "main.ts",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^18.11.9",
    "prisma": "^4.6.1",
    "ts-node": "^10.9.1",
    "typegraphql-prisma": "^0.22.2",
    "typescript": "^4.8.4"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "@types/graphql-fields": "^1.3.4",
    "apollo-server-core": "^3.11.1",
    "apollo-server-koa": "^3.11.1",
    "class-validator": "^0.13.2",
    "graphql": "^15.8.0",
    "graphql-fields": "^2.0.3",
    "graphql-scalars": "^1.20.1",
    "koa": "^2.13.4",
    "reflect-metadata": "^0.1.13",
    "type-graphql": "^1.1.1"
  }
}
```

## Run the graphQL api server   

```
npx ts-node main.ts
```

To test quary:

```
query Collection {
  collections {
    id
    item
    qty
  }
}
```

## Use magidoc to infers possible graphql operations   

```
npm install @magidoc/cli --save-dev
touch magidoc.mjs
```

Create a Magidoc configuration file.   
The introspection configuration object determines how Magidoc fetches the introspection schema for your API. This can be accomplished either using a live endpoint or SDL files.   

```
export default {
  introspection: {
    type: 'url',
    url: 'http://localhost:4001/graphql',
  },
  website: {
    template: 'carbon-multi-page',
  },
}
```

To generate graphQL operations documents:   

```sh
npx magidoc generate
npx magidoc preview
```