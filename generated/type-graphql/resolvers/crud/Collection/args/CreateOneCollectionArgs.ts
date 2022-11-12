import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionCreateInput } from "../../../inputs/CollectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionCreateInput, {
    nullable: false
  })
  data!: CollectionCreateInput;
}
