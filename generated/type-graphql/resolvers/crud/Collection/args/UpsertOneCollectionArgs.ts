import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCreateInput } from "../../../inputs/CollectionCreateInput";
import { CollectionUpdateInput } from "../../../inputs/CollectionUpdateInput";
import { CollectionWhereUniqueInput } from "../../../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: false
  })
  where!: CollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => CollectionCreateInput, {
    nullable: false
  })
  create!: CollectionCreateInput;

  @TypeGraphQL.Field(_type => CollectionUpdateInput, {
    nullable: false
  })
  update!: CollectionUpdateInput;
}
