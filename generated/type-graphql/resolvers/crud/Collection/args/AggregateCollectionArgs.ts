import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CollectionOrderByWithRelationInput } from "../../../inputs/CollectionOrderByWithRelationInput";
import { CollectionWhereInput } from "../../../inputs/CollectionWhereInput";
import { CollectionWhereUniqueInput } from "../../../inputs/CollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCollectionArgs {
  @TypeGraphQL.Field(_type => CollectionWhereInput, {
    nullable: true
  })
  where?: CollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CollectionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CollectionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CollectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: CollectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
