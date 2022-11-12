import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProfileNestedInput";

@TypeGraphQL.InputType("ProfileUpdateInput", {
  isAbstract: true
})
export class ProfileUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProfileNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined;
}
