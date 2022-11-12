import * as TypeGraphQL from "type-graphql";

export enum CollectionScalarFieldEnum {
  id = "id",
  item = "item",
  qty = "qty"
}
TypeGraphQL.registerEnumType(CollectionScalarFieldEnum, {
  name: "CollectionScalarFieldEnum",
  description: undefined,
});
