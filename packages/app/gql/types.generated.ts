import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: number; output: number; }
  BigInt: { input: number; output: number; }
  Bytes: { input: number; output: number; }
};

export interface Bee {
  __typename?: 'Bee';
  address: Scalars['Bytes']['output'];
  createdAt: Scalars['BigInt']['output'];
  hives?: Maybe<Array<HiveBee>>;
  id: Scalars['ID']['output'];
  isQueenHives?: Maybe<Array<HiveQueen>>;
}


export type BeeHivesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveBeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HiveBeeFilter>;
};


export type BeeIsQueenHivesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveQueenOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HiveQueenFilter>;
};

export interface BeeFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BeeFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hives_?: InputMaybe<HiveBeeFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isQueenHives_?: InputMaybe<HiveQueenFilter>;
  or?: InputMaybe<Array<InputMaybe<BeeFilter>>>;
}

export enum BeeOrderBy {
  ADDRESS = 'address',
  CREATEDAT = 'createdAt',
  HIVES = 'hives',
  ID = 'id',
  ISQUEENHIVES = 'isQueenHives'
}

export interface BlockChangedFilter {
  number_gte: Scalars['Int']['input'];
}

export interface BlockHeight {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
}

export interface Hive {
  __typename?: 'Hive';
  bees?: Maybe<Array<HiveBee>>;
  createdAt: Scalars['BigInt']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  queens?: Maybe<Array<HiveQueen>>;
  transactionHash: Scalars['String']['output'];
  works?: Maybe<Array<Work>>;
}


export type HiveBeesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveBeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HiveBeeFilter>;
};


export type HiveQueensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveQueenOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HiveQueenFilter>;
};


export type HiveWorksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkFilter>;
};

export interface HiveBee {
  __typename?: 'HiveBee';
  address: Bee;
  createdAt: Scalars['BigInt']['output'];
  creator: HiveQueen;
  hive: Hive;
  id: Scalars['ID']['output'];
  rate: Scalars['BigInt']['output'];
  totalPayouts: Scalars['BigInt']['output'];
  works?: Maybe<Array<Work>>;
}


export type HiveBeeWorksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkFilter>;
};

export interface HiveBeeFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_?: InputMaybe<BeeFilter>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<HiveBeeFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<HiveQueenFilter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive?: InputMaybe<Scalars['String']['input']>;
  hive_?: InputMaybe<HiveFilter>;
  hive_contains?: InputMaybe<Scalars['String']['input']>;
  hive_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_gt?: InputMaybe<Scalars['String']['input']>;
  hive_gte?: InputMaybe<Scalars['String']['input']>;
  hive_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_lt?: InputMaybe<Scalars['String']['input']>;
  hive_lte?: InputMaybe<Scalars['String']['input']>;
  hive_not?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HiveBeeFilter>>>;
  rate?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_not?: InputMaybe<Scalars['BigInt']['input']>;
  rate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPayouts?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPayouts_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalPayouts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  works_?: InputMaybe<WorkFilter>;
}

export enum HiveBeeOrderBy {
  ADDRESS = 'address',
  ADDRESS__ADDRESS = 'address__address',
  ADDRESS__CREATEDAT = 'address__createdAt',
  ADDRESS__ID = 'address__id',
  CREATEDAT = 'createdAt',
  CREATOR = 'creator',
  CREATOR__CREATEDAT = 'creator__createdAt',
  CREATOR__DISABLED = 'creator__disabled',
  CREATOR__ID = 'creator__id',
  HIVE = 'hive',
  HIVE__CREATEDAT = 'hive__createdAt',
  HIVE__DESCRIPTION = 'hive__description',
  HIVE__ID = 'hive__id',
  HIVE__TRANSACTIONHASH = 'hive__transactionHash',
  ID = 'id',
  RATE = 'rate',
  TOTALPAYOUTS = 'totalPayouts',
  WORKS = 'works'
}

export interface HiveQueen {
  __typename?: 'HiveQueen';
  address: Bee;
  createdAt: Scalars['BigInt']['output'];
  disabled: Scalars['Boolean']['output'];
  hive: Hive;
  id: Scalars['ID']['output'];
  onboards?: Maybe<Array<HiveBee>>;
}


export type HiveQueenOnboardsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveBeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HiveBeeFilter>;
};

export interface HiveQueenFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_?: InputMaybe<BeeFilter>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<HiveQueenFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  disabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  disabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  disabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hive?: InputMaybe<Scalars['String']['input']>;
  hive_?: InputMaybe<HiveFilter>;
  hive_contains?: InputMaybe<Scalars['String']['input']>;
  hive_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_gt?: InputMaybe<Scalars['String']['input']>;
  hive_gte?: InputMaybe<Scalars['String']['input']>;
  hive_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_lt?: InputMaybe<Scalars['String']['input']>;
  hive_lte?: InputMaybe<Scalars['String']['input']>;
  hive_not?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  onboards_?: InputMaybe<HiveBeeFilter>;
  or?: InputMaybe<Array<InputMaybe<HiveQueenFilter>>>;
}

export enum HiveQueenOrderBy {
  ADDRESS = 'address',
  ADDRESS__ADDRESS = 'address__address',
  ADDRESS__CREATEDAT = 'address__createdAt',
  ADDRESS__ID = 'address__id',
  CREATEDAT = 'createdAt',
  DISABLED = 'disabled',
  HIVE = 'hive',
  HIVE__CREATEDAT = 'hive__createdAt',
  HIVE__DESCRIPTION = 'hive__description',
  HIVE__ID = 'hive__id',
  HIVE__TRANSACTIONHASH = 'hive__transactionHash',
  ID = 'id',
  ONBOARDS = 'onboards'
}

export interface HiveFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HiveFilter>>>;
  bees_?: InputMaybe<HiveBeeFilter>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<HiveFilter>>>;
  queens_?: InputMaybe<HiveQueenFilter>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['String']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  works_?: InputMaybe<WorkFilter>;
}

export enum HiveOrderBy {
  BEES = 'bees',
  CREATEDAT = 'createdAt',
  DESCRIPTION = 'description',
  ID = 'id',
  QUEENS = 'queens',
  TRANSACTIONHASH = 'transactionHash',
  WORKS = 'works'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export interface Query {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  bee?: Maybe<Bee>;
  bees: Array<Bee>;
  hive?: Maybe<Hive>;
  hiveBee?: Maybe<HiveBee>;
  hiveBees: Array<HiveBee>;
  hiveQueen?: Maybe<HiveQueen>;
  hiveQueens: Array<HiveQueen>;
  hives: Array<Hive>;
  work?: Maybe<Work>;
  works: Array<Work>;
}


export type QueryMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type QueryBeeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryBeesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<BeeFilter>;
};


export type QueryHiveArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryHiveBeeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryHiveBeesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveBeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveBeeFilter>;
};


export type QueryHiveQueenArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryHiveQueensArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveQueenOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveQueenFilter>;
};


export type QueryHivesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveFilter>;
};


export type QueryWorkArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryWorksArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<WorkFilter>;
};

export interface Subscription {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  bee?: Maybe<Bee>;
  bees: Array<Bee>;
  hive?: Maybe<Hive>;
  hiveBee?: Maybe<HiveBee>;
  hiveBees: Array<HiveBee>;
  hiveQueen?: Maybe<HiveQueen>;
  hiveQueens: Array<HiveQueen>;
  hives: Array<Hive>;
  work?: Maybe<Work>;
  works: Array<Work>;
}


export type SubscriptionMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type SubscriptionBeeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionBeesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<BeeFilter>;
};


export type SubscriptionHiveArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionHiveBeeArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionHiveBeesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveBeeOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveBeeFilter>;
};


export type SubscriptionHiveQueenArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionHiveQueensArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveQueenOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveQueenFilter>;
};


export type SubscriptionHivesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HiveOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<HiveFilter>;
};


export type SubscriptionWorkArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionWorksArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<WorkFilter>;
};

export interface Work {
  __typename?: 'Work';
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['BigInt']['output'];
  hive: Hive;
  hiveBee: HiveBee;
  id: Scalars['ID']['output'];
  reasonPtr: Scalars['String']['output'];
}

export interface WorkFilter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<WorkFilter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hive?: InputMaybe<Scalars['String']['input']>;
  hiveBee?: InputMaybe<Scalars['String']['input']>;
  hiveBee_?: InputMaybe<HiveBeeFilter>;
  hiveBee_contains?: InputMaybe<Scalars['String']['input']>;
  hiveBee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hiveBee_ends_with?: InputMaybe<Scalars['String']['input']>;
  hiveBee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hiveBee_gt?: InputMaybe<Scalars['String']['input']>;
  hiveBee_gte?: InputMaybe<Scalars['String']['input']>;
  hiveBee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hiveBee_lt?: InputMaybe<Scalars['String']['input']>;
  hiveBee_lte?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_contains?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hiveBee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hiveBee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hiveBee_starts_with?: InputMaybe<Scalars['String']['input']>;
  hiveBee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_?: InputMaybe<HiveFilter>;
  hive_contains?: InputMaybe<Scalars['String']['input']>;
  hive_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_gt?: InputMaybe<Scalars['String']['input']>;
  hive_gte?: InputMaybe<Scalars['String']['input']>;
  hive_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_lt?: InputMaybe<Scalars['String']['input']>;
  hive_lte?: InputMaybe<Scalars['String']['input']>;
  hive_not?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains?: InputMaybe<Scalars['String']['input']>;
  hive_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with?: InputMaybe<Scalars['String']['input']>;
  hive_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<WorkFilter>>>;
  reasonPtr?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_contains?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_ends_with?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_gt?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_gte?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonPtr_lt?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_lte?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_contains?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reasonPtr_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_starts_with?: InputMaybe<Scalars['String']['input']>;
  reasonPtr_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
}

export enum WorkOrderBy {
  AMOUNT = 'amount',
  CREATEDAT = 'createdAt',
  HIVE = 'hive',
  HIVEBEE = 'hiveBee',
  HIVEBEE__CREATEDAT = 'hiveBee__createdAt',
  HIVEBEE__ID = 'hiveBee__id',
  HIVEBEE__RATE = 'hiveBee__rate',
  HIVEBEE__TOTALPAYOUTS = 'hiveBee__totalPayouts',
  HIVE__CREATEDAT = 'hive__createdAt',
  HIVE__DESCRIPTION = 'hive__description',
  HIVE__ID = 'hive__id',
  HIVE__TRANSACTIONHASH = 'hive__transactionHash',
  ID = 'id',
  REASONPTR = 'reasonPtr'
}

export interface Block {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
}

/** The type for the top-level _meta field */
export interface Meta {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
}

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  ALLOW = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  DENY = 'deny'
}

export type MyPoolsQueryVariables = Exact<{
  address: Scalars['ID']['input'];
}>;


export type MyPoolsQueryResult = (
  { __typename?: 'Query' }
  & { bee?: Maybe<(
    { __typename?: 'Bee' }
    & Pick<Bee, 'createdAt'>
    & { isQueenHives?: Maybe<Array<(
      { __typename?: 'HiveQueen' }
      & { hive: (
        { __typename?: 'Hive' }
        & Pick<Hive, 'id' | 'description'>
      ) }
    )>>, hives?: Maybe<Array<(
      { __typename?: 'HiveBee' }
      & { hive: (
        { __typename?: 'Hive' }
        & Pick<Hive, 'id' | 'description'>
      ) }
    )>> }
  )> }
);

export type GetHiveQueryVariables = Exact<{
  address: Scalars['ID']['input'];
}>;


export type GetHiveQueryResult = (
  { __typename?: 'Query' }
  & { hive?: Maybe<(
    { __typename?: 'Hive' }
    & Pick<Hive, 'id' | 'description'>
    & { queens?: Maybe<Array<(
      { __typename?: 'HiveQueen' }
      & { address: (
        { __typename?: 'Bee' }
        & Pick<Bee, 'id'>
      ) }
    )>>, bees?: Maybe<Array<(
      { __typename?: 'HiveBee' }
      & Pick<HiveBee, 'id' | 'rate' | 'totalPayouts'>
      & { address: (
        { __typename?: 'Bee' }
        & Pick<Bee, 'id'>
      ), works?: Maybe<Array<(
        { __typename?: 'Work' }
        & Pick<Work, 'id'>
      )>> }
    )>>, works?: Maybe<Array<(
      { __typename?: 'Work' }
      & Pick<Work, 'id' | 'amount' | 'reasonPtr' | 'createdAt'>
      & { hiveBee: (
        { __typename?: 'HiveBee' }
        & { address: (
          { __typename?: 'Bee' }
          & Pick<Bee, 'id'>
        ) }
      ) }
    )>> }
  )> }
);


export const MyPoolsDocument = /*#__PURE__*/ gql`
    query MyPools($address: ID!) {
  bee(id: $address) {
    createdAt
    isQueenHives {
      hive {
        id
        description
      }
    }
    hives {
      hive {
        id
        description
      }
    }
  }
}
    `;

/**
 * __useMyPoolsQuery__
 *
 * To run a query within a React component, call `useMyPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPoolsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useMyPoolsQuery(baseOptions: Apollo.QueryHookOptions<MyPoolsQueryResult, MyPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPoolsQueryResult, MyPoolsQueryVariables>(MyPoolsDocument, options);
      }
export function useMyPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPoolsQueryResult, MyPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPoolsQueryResult, MyPoolsQueryVariables>(MyPoolsDocument, options);
        }
export type MyPoolsQueryHookResult = ReturnType<typeof useMyPoolsQuery>;
export type MyPoolsLazyQueryHookResult = ReturnType<typeof useMyPoolsLazyQuery>;
export const GetHiveDocument = /*#__PURE__*/ gql`
    query getHive($address: ID!) {
  hive(id: $address) {
    id
    description
    queens {
      address {
        id
      }
    }
    bees(orderBy: createdAt) {
      id
      rate
      totalPayouts
      address {
        id
      }
      works {
        id
      }
    }
    works(orderBy: createdAt, first: 100) {
      id
      amount
      reasonPtr
      createdAt
      hiveBee {
        address {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetHiveQuery__
 *
 * To run a query within a React component, call `useGetHiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHiveQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetHiveQuery(baseOptions: Apollo.QueryHookOptions<GetHiveQueryResult, GetHiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHiveQueryResult, GetHiveQueryVariables>(GetHiveDocument, options);
      }
export function useGetHiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHiveQueryResult, GetHiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHiveQueryResult, GetHiveQueryVariables>(GetHiveDocument, options);
        }
export type GetHiveQueryHookResult = ReturnType<typeof useGetHiveQuery>;
export type GetHiveLazyQueryHookResult = ReturnType<typeof useGetHiveLazyQuery>;