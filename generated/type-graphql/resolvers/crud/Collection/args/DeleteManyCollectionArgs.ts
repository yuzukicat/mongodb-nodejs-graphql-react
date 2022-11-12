import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionWhereInput } from "../../../inputs/CollectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;
}
