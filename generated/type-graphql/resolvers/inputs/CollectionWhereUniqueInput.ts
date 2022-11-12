import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CollectionWhereUniqueInput", {
  isAbstract: true
})
export class CollectionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
