import { GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import {
  makePrismaBindingClass,
  BasePrismaOptions,
  Options
} from "prisma-client-lib";
import { typeDefs } from "./graphql";
// Code generated by Prisma CLI (https://github.com/prisma/prisma). DO NOT EDIT.

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  cat: (where?: CatWhereInput) => Promise<boolean>;
  master: (where?: MasterWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $delegate: Delegate;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  cat: <T = Cat>(where: CatWhereUniqueInput, fragment?: string | Object) => T;
  cats: <T = Promise<Array<CatNode>>>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
  catsConnection: <T = CatConnection>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
  master: <T = Master>(
    where: MasterWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  masters: <T = Promise<Array<MasterNode>>>(
    args?: {
      where?: MasterWhereInput;
      orderBy?: MasterOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
  mastersConnection: <T = MasterConnection>(
    args?: {
      where?: MasterWhereInput;
      orderBy?: MasterOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
  node: <T = Node>(args: { id: ID_Output }, fragment?: string | Object) => T;

  /**
   * Mutations
   */

  createCat: <T = Cat>(data: CatCreateInput, fragment?: string | Object) => T;
  updateCat: <T = Cat>(
    args: { data: CatUpdateInput; where: CatWhereUniqueInput },
    fragment?: string | Object
  ) => T;
  updateManyCats: <T = BatchPayload>(
    args: { data: CatUpdateInput; where?: CatWhereInput },
    fragment?: string | Object
  ) => T;
  upsertCat: <T = Cat>(
    args: {
      where: CatWhereUniqueInput;
      create: CatCreateInput;
      update: CatUpdateInput;
    },
    fragment?: string | Object
  ) => T;
  deleteCat: <T = Cat>(
    where: CatWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  deleteManyCats: <T = BatchPayload>(
    where?: CatWhereInput,
    fragment?: string | Object
  ) => T;
  createMaster: <T = Master>(
    data: MasterCreateInput,
    fragment?: string | Object
  ) => T;
  updateMaster: <T = Master>(
    args: { data: MasterUpdateInput; where: MasterWhereUniqueInput },
    fragment?: string | Object
  ) => T;
  updateManyMasters: <T = BatchPayload>(
    args: { data: MasterUpdateInput; where?: MasterWhereInput },
    fragment?: string | Object
  ) => T;
  upsertMaster: <T = Master>(
    args: {
      where: MasterWhereUniqueInput;
      create: MasterCreateInput;
      update: MasterUpdateInput;
    },
    fragment?: string | Object
  ) => T;
  deleteMaster: <T = Master>(
    where: MasterWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  deleteManyMasters: <T = BatchPayload>(
    where?: MasterWhereInput,
    fragment?: string | Object
  ) => T;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cat: <T = CatSubscriptionPayloadSubscription>(
    where?: CatSubscriptionWhereInput,
    fragment?: string | Object
  ) => T;
  master: <T = MasterSubscriptionPayloadSubscription>(
    where?: MasterSubscriptionWhereInput,
    fragment?: string | Object
  ) => T;
}

export interface Delegate {
  (
    operation: "query" | "mutation",
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo,
    options?: Options
  ): Promise<any>;
  query: DelegateQuery;
  mutation: DelegateMutation;
  subscription: DelegateSubscription;
}

export interface DelegateQuery {
  cat: <T = Promise<Partial<CatNode | null>>>(
    where: CatWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  cats: <T = Promise<Array<CatNode>>>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  catsConnection: <T = Promise<Partial<CatConnectionNode>>>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  master: <T = Promise<Partial<MasterNode | null>>>(
    where: MasterWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  masters: <T = Promise<Array<MasterNode>>>(
    args?: {
      where?: MasterWhereInput;
      orderBy?: MasterOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  mastersConnection: <T = Promise<Partial<MasterConnectionNode>>>(
    args?: {
      where?: MasterWhereInput;
      orderBy?: MasterOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  node: <T = Promise<Partial<NodeNode | null>>>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
}

export interface DelegateMutation {
  createCat: <T = Promise<Partial<CatNode>>>(
    where: CatCreateInput,
    fragment?: string | Object
  ) => T;
  updateCat: <T = Promise<Partial<CatNode | null>>>(
    args: { data: CatUpdateInput; where: CatWhereUniqueInput },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  updateManyCats: <T = Promise<Partial<BatchPayloadNode>>>(
    args: { data: CatUpdateInput; where?: CatWhereInput },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  upsertCat: <T = Promise<Partial<CatNode>>>(
    args: {
      where: CatWhereUniqueInput;
      create: CatCreateInput;
      update: CatUpdateInput;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  deleteCat: <T = Promise<Partial<CatNode | null>>>(
    where: CatWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  deleteManyCats: <T = Promise<Partial<BatchPayloadNode>>>(
    where?: CatWhereInput,
    fragment?: string | Object
  ) => T;
  createMaster: <T = Promise<Partial<MasterNode>>>(
    where: MasterCreateInput,
    fragment?: string | Object
  ) => T;
  updateMaster: <T = Promise<Partial<MasterNode | null>>>(
    args: { data: MasterUpdateInput; where: MasterWhereUniqueInput },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  updateManyMasters: <T = Promise<Partial<BatchPayloadNode>>>(
    args: { data: MasterUpdateInput; where?: MasterWhereInput },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  upsertMaster: <T = Promise<Partial<MasterNode>>>(
    args: {
      where: MasterWhereUniqueInput;
      create: MasterCreateInput;
      update: MasterUpdateInput;
    },
    info?: GraphQLResolveInfo,
    options?: Options
  ) => T;
  deleteMaster: <T = Promise<Partial<MasterNode | null>>>(
    where: MasterWhereUniqueInput,
    fragment?: string | Object
  ) => T;
  deleteManyMasters: <T = Promise<Partial<BatchPayloadNode>>>(
    where?: MasterWhereInput,
    fragment?: string | Object
  ) => T;
}

export interface DelegateSubscription {
  cat: <T = Promise<AsyncIterator<Partial<CatSubscriptionPayloadNode | null>>>>(
    where?: CatSubscriptionWhereInput,
    fragment?: string | Object
  ) => T;
  master: <
    T = Promise<AsyncIterator<Partial<MasterSubscriptionPayloadNode | null>>>
  >(
    where?: MasterSubscriptionWhereInput,
    fragment?: string | Object
  ) => T;
}

export interface BindingConstructor<T> {
  new (options?: BasePrismaOptions): T;
}

/**
 * Types
 */

export type CatOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "color_ASC"
  | "color_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MasterOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CatCreateInput {
  name: String;
  color: String;
  favBrother?: CatCreateOneInput;
}

export type CatWhereUniqueInput = AtLeastOne<{
  id?: ID_Input;
}>;

export interface CatUpdateOneInput {
  create?: CatCreateInput;
  update?: CatUpdateDataInput;
  upsert?: CatUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: CatWhereUniqueInput;
}

export interface CatWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  color?: String;
  color_not?: String;
  color_in?: String[] | String;
  color_not_in?: String[] | String;
  color_lt?: String;
  color_lte?: String;
  color_gt?: String;
  color_gte?: String;
  color_contains?: String;
  color_not_contains?: String;
  color_starts_with?: String;
  color_not_starts_with?: String;
  color_ends_with?: String;
  color_not_ends_with?: String;
  favBrother?: CatWhereInput;
  AND?: CatWhereInput[] | CatWhereInput;
  OR?: CatWhereInput[] | CatWhereInput;
  NOT?: CatWhereInput[] | CatWhereInput;
}

export interface CatUpdateManyInput {
  create?: CatCreateInput[] | CatCreateInput;
  delete?: CatWhereUniqueInput[] | CatWhereUniqueInput;
  connect?: CatWhereUniqueInput[] | CatWhereUniqueInput;
  disconnect?: CatWhereUniqueInput[] | CatWhereUniqueInput;
  update?:
    | CatUpdateWithWhereUniqueNestedInput[]
    | CatUpdateWithWhereUniqueNestedInput;
  upsert?:
    | CatUpsertWithWhereUniqueNestedInput[]
    | CatUpsertWithWhereUniqueNestedInput;
}

export interface CatUpdateInput {
  name?: String;
  color?: String;
  favBrother?: CatUpdateOneInput;
}

export interface MasterUpdateInput {
  catz?: CatUpdateManyInput;
}

export interface CatUpdateDataInput {
  name?: String;
  color?: String;
  favBrother?: CatUpdateOneInput;
}

export interface CatCreateManyInput {
  create?: CatCreateInput[] | CatCreateInput;
  connect?: CatWhereUniqueInput[] | CatWhereUniqueInput;
}

export interface CatSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CatWhereInput;
  AND?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
  OR?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
  NOT?: CatSubscriptionWhereInput[] | CatSubscriptionWhereInput;
}

export type MasterWhereUniqueInput = AtLeastOne<{
  id?: ID_Input;
}>;

export interface CatCreateOneInput {
  create?: CatCreateInput;
  connect?: CatWhereUniqueInput;
}

export interface CatUpsertNestedInput {
  update: CatUpdateDataInput;
  create: CatCreateInput;
}

export interface MasterCreateInput {
  catz?: CatCreateManyInput;
}

export interface CatUpdateWithWhereUniqueNestedInput {
  where: CatWhereUniqueInput;
  data: CatUpdateDataInput;
}

export interface CatUpsertWithWhereUniqueNestedInput {
  where: CatWhereUniqueInput;
  update: CatUpdateDataInput;
  create: CatCreateInput;
}

export interface MasterSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MasterWhereInput;
  AND?: MasterSubscriptionWhereInput[] | MasterSubscriptionWhereInput;
  OR?: MasterSubscriptionWhereInput[] | MasterSubscriptionWhereInput;
  NOT?: MasterSubscriptionWhereInput[] | MasterSubscriptionWhereInput;
}

export interface MasterWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  catz_every?: CatWhereInput;
  catz_some?: CatWhereInput;
  catz_none?: CatWhereInput;
  AND?: MasterWhereInput[] | MasterWhereInput;
  OR?: MasterWhereInput[] | MasterWhereInput;
  NOT?: MasterWhereInput[] | MasterWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface MasterPreviousValuesNode {
  id: ID_Output;
}

export interface MasterPreviousValues
  extends Promise<MasterPreviousValuesNode> {
  id: () => Promise<ID_Output>;
}

export interface MasterPreviousValuesSubscription
  extends Promise<AsyncIterator<MasterPreviousValuesNode>> {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface MasterNode {
  id: ID_Output;
}

export interface Master extends Promise<MasterNode> {
  id: () => Promise<ID_Output>;
  catz: <T = Promise<Array<CatNode>>>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
}

export interface MasterSubscription extends Promise<AsyncIterator<MasterNode>> {
  id: () => Promise<AsyncIterator<ID_Output>>;
  catz: <T = Promise<AsyncIterator<Array<CatSubscription>>>>(
    args?: {
      where?: CatWhereInput;
      orderBy?: CatOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    },
    fragment?: string | Object
  ) => T;
}

export interface CatConnectionNode {}

export interface CatConnection extends Promise<CatConnectionNode> {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<CatEdgeNode>>>() => T;
  aggregate: <T = AggregateCat>() => T;
}

export interface CatConnectionSubscription
  extends Promise<AsyncIterator<CatConnectionNode>> {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<CatEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateCatSubscription>() => T;
}

export interface CatPreviousValuesNode {
  id: ID_Output;
  name: String;
  color: String;
}

export interface CatPreviousValues extends Promise<CatPreviousValuesNode> {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
}

export interface CatPreviousValuesSubscription
  extends Promise<AsyncIterator<CatPreviousValuesNode>> {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
}

export interface CatSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CatSubscriptionPayload
  extends Promise<CatSubscriptionPayloadNode> {
  mutation: () => Promise<MutationType>;
  node: <T = Cat>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CatPreviousValues>() => T;
}

export interface CatSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CatSubscriptionPayloadNode>> {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CatSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CatPreviousValuesSubscription>() => T;
}

export interface AggregateCatNode {
  count: Int;
}

export interface AggregateCat extends Promise<AggregateCatNode> {
  count: () => Promise<Int>;
}

export interface AggregateCatSubscription
  extends Promise<AsyncIterator<AggregateCatNode>> {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface CatNode {
  id: ID_Output;
  name: String;
  color: String;
}

export interface Cat extends Promise<CatNode> {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
  favBrother: <T = Cat>(
    args?: { where?: CatWhereInput },
    fragment?: string | Object
  ) => T;
}

export interface CatSubscription extends Promise<AsyncIterator<CatNode>> {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
  favBrother: <T = CatSubscription>(
    args?: { where?: CatWhereInput },
    fragment?: string | Object
  ) => T;
}

export interface CatEdgeNode {
  cursor: String;
}

export interface CatEdge extends Promise<CatEdgeNode> {
  node: <T = Cat>() => T;
  cursor: () => Promise<String>;
}

export interface CatEdgeSubscription
  extends Promise<AsyncIterator<CatEdgeNode>> {
  node: <T = CatSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode> {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>> {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode> {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>> {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface MasterSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface MasterSubscriptionPayload
  extends Promise<MasterSubscriptionPayloadNode> {
  mutation: () => Promise<MutationType>;
  node: <T = Master>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MasterPreviousValues>() => T;
}

export interface MasterSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MasterSubscriptionPayloadNode>> {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MasterSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MasterPreviousValuesSubscription>() => T;
}

export interface MasterConnectionNode {}

export interface MasterConnection extends Promise<MasterConnectionNode> {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<MasterEdgeNode>>>() => T;
  aggregate: <T = AggregateMaster>() => T;
}

export interface MasterConnectionSubscription
  extends Promise<AsyncIterator<MasterConnectionNode>> {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<MasterEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateMasterSubscription>() => T;
}

export interface MasterEdgeNode {
  cursor: String;
}

export interface MasterEdge extends Promise<MasterEdgeNode> {
  node: <T = Master>() => T;
  cursor: () => Promise<String>;
}

export interface MasterEdgeSubscription
  extends Promise<AsyncIterator<MasterEdgeNode>> {
  node: <T = MasterSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMasterNode {
  count: Int;
}

export interface AggregateMaster extends Promise<AggregateMasterNode> {
  count: () => Promise<Int>;
}

export interface AggregateMasterSubscription
  extends Promise<AsyncIterator<AggregateMasterNode>> {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs,
  endpoint: "https://eu1.prisma.sh/lol/tut/dev"
});
export const prisma = new Prisma();