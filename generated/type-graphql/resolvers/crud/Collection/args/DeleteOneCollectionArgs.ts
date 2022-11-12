import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionWhereUniqueInput } from "../../../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;
}
