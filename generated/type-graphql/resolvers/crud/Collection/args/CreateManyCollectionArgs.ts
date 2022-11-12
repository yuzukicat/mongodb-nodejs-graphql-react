import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCreateManyInput } from "../../../inputs/CollectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCollectionArgs {
  @TypeGraphQL.Field(_type => [CollectionCreateManyInput], {
    nullable: false
  })
  data!: CollectionCreateManyInput[];
}
