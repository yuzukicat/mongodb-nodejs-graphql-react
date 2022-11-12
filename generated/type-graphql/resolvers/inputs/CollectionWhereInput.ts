import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CollectionWhereInput", {
  isAbstract: true
})
export class CollectionWhereInput {
  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  AND?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  OR?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CollectionWhereInput], {
    nullable: true
  })
  NOT?: CollectionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  item?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  qty?: IntFilter | undefined;
}
