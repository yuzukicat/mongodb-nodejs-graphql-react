import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProfileInput } from "../inputs/UserCreateWithoutProfileInput";
import { UserUpdateWithoutProfileInput } from "../inputs/UserUpdateWithoutProfileInput";

@TypeGraphQL.InputType("UserUpsertWithoutProfileInput", {
  isAbstract: true
})
export class UserUpsertWithoutProfileInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProfileInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProfileInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProfileInput, {
    nullable: false
  })
  create!: UserCreateWithoutProfileInput;
}
