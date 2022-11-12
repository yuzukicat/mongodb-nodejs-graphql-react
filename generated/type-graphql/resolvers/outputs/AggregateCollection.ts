import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { CollectionAvgAggregate } from "../outputs/CollectionAvgAggregate";
import { CollectionCountAggregate } from "../outputs/CollectionCountAggregate";
import { CollectionMaxAggregate } from "../outputs/CollectionMaxAggregate";
import { CollectionMinAggregate } from "../outputs/CollectionMinAggregate";
import { CollectionSumAggregate } from "../outputs/CollectionSumAggregate";

@TypeGraphQL.ObjectType("AggregateCollection", {
  isAbstract: true
})
export class AggregateCollection {
  @TypeGraphQL.Field(_type => CollectionCountAggregate, {
    nullable: true
  })
  _count!: CollectionCountAggregate | null;

  @TypeGraphQL.Field(_type => CollectionAvgAggregate, {
    nullable: true
  })
  _avg!: CollectionAvgAggregate | null;

  @TypeGraphQL.Field(_type => CollectionSumAggregate, {
    nullable: true
  })
  _sum!: CollectionSumAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMinAggregate, {
    nullable: true
  })
  _min!: CollectionMinAggregate | null;

  @TypeGraphQL.Field(_type => CollectionMaxAggregate, {
    nullable: true
  })
  _max!: CollectionMaxAggregate | null;
}
