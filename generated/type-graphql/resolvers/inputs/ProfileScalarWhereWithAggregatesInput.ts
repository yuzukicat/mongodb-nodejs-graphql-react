import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfileScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bio?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
