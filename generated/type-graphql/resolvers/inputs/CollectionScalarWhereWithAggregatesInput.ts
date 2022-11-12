import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CollectionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CollectionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CollectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CollectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CollectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CollectionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  item?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  qty?: IntWithAggregatesFilter | undefined;
}
