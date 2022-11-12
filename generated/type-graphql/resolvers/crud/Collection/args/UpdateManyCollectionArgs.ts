import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionUpdateManyMutationInput } from "../../../inputs/CollectionUpdateManyMutationInput";
import { CollectionWhereInput } from "../../../inputs/CollectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: CollectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;
}
