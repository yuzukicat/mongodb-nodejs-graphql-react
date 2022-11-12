import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { CollectionAvgOrderByAggregateInput } from "../inputs/CollectionAvgOrderByAggregateInput";
import { CollectionCountOrderByAggregateInput } from "../inputs/CollectionCountOrderByAggregateInput";
import { CollectionMaxOrderByAggregateInput } from "../inputs/CollectionMaxOrderByAggregateInput";
import { CollectionMinOrderByAggregateInput } from "../inputs/CollectionMinOrderByAggregateInput";
import { CollectionSumOrderByAggregateInput } from "../inputs/CollectionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CollectionOrderByWithAggregationInput", {
  isAbstract: true
})
export class CollectionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  qty?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CollectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CollectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CollectionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CollectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CollectionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CollectionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CollectionSumOrderByAggregateInput | undefined;
}
