/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type HomePageCreateInput = {
  aboutUsDescription_ar?: InputMaybe<Scalars['String']['input']>;
  aboutUsDescription_en?: InputMaybe<Scalars['String']['input']>;
  aboutUsTitle_ar?: InputMaybe<Scalars['String']['input']>;
  aboutUsTitle_en?: InputMaybe<Scalars['String']['input']>;
  contactInfo_ar?: InputMaybe<Scalars['String']['input']>;
  contactInfo_en?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heroDescription_ar?: InputMaybe<Scalars['String']['input']>;
  heroDescription_en?: InputMaybe<Scalars['String']['input']>;
  heroTitle_ar?: InputMaybe<Scalars['String']['input']>;
  heroTitle_en?: InputMaybe<Scalars['String']['input']>;
  missionDescription_ar?: InputMaybe<Scalars['String']['input']>;
  missionDescription_en?: InputMaybe<Scalars['String']['input']>;
  missionTitle_ar?: InputMaybe<Scalars['String']['input']>;
  missionTitle_en?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageOrderByInput = {
  aboutUsDescription_ar?: InputMaybe<OrderDirection>;
  aboutUsDescription_en?: InputMaybe<OrderDirection>;
  aboutUsTitle_ar?: InputMaybe<OrderDirection>;
  aboutUsTitle_en?: InputMaybe<OrderDirection>;
  contactInfo_ar?: InputMaybe<OrderDirection>;
  contactInfo_en?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  heroDescription_ar?: InputMaybe<OrderDirection>;
  heroDescription_en?: InputMaybe<OrderDirection>;
  heroTitle_ar?: InputMaybe<OrderDirection>;
  heroTitle_en?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  missionDescription_ar?: InputMaybe<OrderDirection>;
  missionDescription_en?: InputMaybe<OrderDirection>;
  missionTitle_ar?: InputMaybe<OrderDirection>;
  missionTitle_en?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type HomePageUpdateArgs = {
  data: HomePageUpdateInput;
  where: HomePageWhereUniqueInput;
};

export type HomePageUpdateInput = {
  aboutUsDescription_ar?: InputMaybe<Scalars['String']['input']>;
  aboutUsDescription_en?: InputMaybe<Scalars['String']['input']>;
  aboutUsTitle_ar?: InputMaybe<Scalars['String']['input']>;
  aboutUsTitle_en?: InputMaybe<Scalars['String']['input']>;
  contactInfo_ar?: InputMaybe<Scalars['String']['input']>;
  contactInfo_en?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  heroDescription_ar?: InputMaybe<Scalars['String']['input']>;
  heroDescription_en?: InputMaybe<Scalars['String']['input']>;
  heroTitle_ar?: InputMaybe<Scalars['String']['input']>;
  heroTitle_en?: InputMaybe<Scalars['String']['input']>;
  missionDescription_ar?: InputMaybe<Scalars['String']['input']>;
  missionDescription_en?: InputMaybe<Scalars['String']['input']>;
  missionTitle_ar?: InputMaybe<Scalars['String']['input']>;
  missionTitle_en?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomePageWhereInput = {
  AND?: InputMaybe<Array<HomePageWhereInput>>;
  NOT?: InputMaybe<Array<HomePageWhereInput>>;
  OR?: InputMaybe<Array<HomePageWhereInput>>;
  aboutUsDescription_ar?: InputMaybe<StringFilter>;
  aboutUsDescription_en?: InputMaybe<StringFilter>;
  aboutUsTitle_ar?: InputMaybe<StringFilter>;
  aboutUsTitle_en?: InputMaybe<StringFilter>;
  contactInfo_ar?: InputMaybe<StringFilter>;
  contactInfo_en?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  heroDescription_ar?: InputMaybe<StringFilter>;
  heroDescription_en?: InputMaybe<StringFilter>;
  heroTitle_ar?: InputMaybe<StringFilter>;
  heroTitle_en?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  missionDescription_ar?: InputMaybe<StringFilter>;
  missionDescription_en?: InputMaybe<StringFilter>;
  missionTitle_ar?: InputMaybe<StringFilter>;
  missionTitle_en?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type HomePageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type HomePageQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type HomePageQuery = { __typename?: 'Query', homePages?: Array<{ __typename?: 'HomePage', heroTitle_en?: string | null, heroTitle_ar?: string | null }> | null };


export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroTitle_en"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle_ar"}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;