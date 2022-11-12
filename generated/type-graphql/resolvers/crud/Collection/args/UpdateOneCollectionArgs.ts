import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionUpdateInput } from "../../../inputs/CollectionUpdateInput";
import { CollectionWhereUniqueInput } from "../../../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionUpdateInput, {
    nullable: false
  })
  data!: CollectionUpdateInput;

  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;
}
