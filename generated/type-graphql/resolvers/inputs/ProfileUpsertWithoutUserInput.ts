import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateWithoutUserInput } from "../inputs/ProfileCreateWithoutUserInput";
import { ProfileUpdateWithoutUserInput } from "../inputs/ProfileUpdateWithoutUserInput";

@TypeGraphQL.InputType("ProfileUpsertWithoutUserInput", {
  isAbstract: true
})
export class ProfileUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => ProfileUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProfileUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProfileCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProfileCreateWithoutUserInput;
}
