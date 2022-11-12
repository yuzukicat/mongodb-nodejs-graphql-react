import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionOrderByWithAggregationInput } from "../../../inputs/CollectionOrderByWithAggregationInput";
import { CollectionScalarWhereWithAggregatesInput } from "../../../inputs/CollectionScalarWhereWithAggregatesInput";
import { CollectionWhereInput } from "../../../inputs/CollectionWhereInput";
import { CollectionScalarFieldEnum } from "../../../../enums/CollectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CollectionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "item" | "qty">;

  @TypeGraphQL.Field(_type => CollectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CollectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
