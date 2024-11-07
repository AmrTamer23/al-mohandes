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

export type AboutCompanyCreateInput = {
  coreValues_ar?: InputMaybe<Scalars['String']['input']>;
  coreValues_en?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  introduction_ar?: InputMaybe<Scalars['String']['input']>;
  introduction_en?: InputMaybe<Scalars['String']['input']>;
  mission_ar?: InputMaybe<Scalars['String']['input']>;
  mission_en?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vision_ar?: InputMaybe<Scalars['String']['input']>;
  vision_en?: InputMaybe<Scalars['String']['input']>;
};

export type AboutCompanyOrderByInput = {
  coreValues_ar?: InputMaybe<OrderDirection>;
  coreValues_en?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  introduction_ar?: InputMaybe<OrderDirection>;
  introduction_en?: InputMaybe<OrderDirection>;
  mission_ar?: InputMaybe<OrderDirection>;
  mission_en?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title_ar?: InputMaybe<OrderDirection>;
  title_en?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vision_ar?: InputMaybe<OrderDirection>;
  vision_en?: InputMaybe<OrderDirection>;
};

export type AboutCompanyUpdateArgs = {
  data: AboutCompanyUpdateInput;
  where: AboutCompanyWhereUniqueInput;
};

export type AboutCompanyUpdateInput = {
  coreValues_ar?: InputMaybe<Scalars['String']['input']>;
  coreValues_en?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  introduction_ar?: InputMaybe<Scalars['String']['input']>;
  introduction_en?: InputMaybe<Scalars['String']['input']>;
  mission_ar?: InputMaybe<Scalars['String']['input']>;
  mission_en?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vision_ar?: InputMaybe<Scalars['String']['input']>;
  vision_en?: InputMaybe<Scalars['String']['input']>;
};

export type AboutCompanyWhereInput = {
  AND?: InputMaybe<Array<AboutCompanyWhereInput>>;
  NOT?: InputMaybe<Array<AboutCompanyWhereInput>>;
  OR?: InputMaybe<Array<AboutCompanyWhereInput>>;
  coreValues_ar?: InputMaybe<StringFilter>;
  coreValues_en?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  introduction_ar?: InputMaybe<StringFilter>;
  introduction_en?: InputMaybe<StringFilter>;
  mission_ar?: InputMaybe<StringFilter>;
  mission_en?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  title_ar?: InputMaybe<StringFilter>;
  title_en?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vision_ar?: InputMaybe<StringFilter>;
  vision_en?: InputMaybe<StringFilter>;
};

export type AboutCompanyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type JobCreateInput = {
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  requirements_ar?: InputMaybe<Scalars['String']['input']>;
  requirements_en?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type JobManyRelationFilter = {
  every?: InputMaybe<JobWhereInput>;
  none?: InputMaybe<JobWhereInput>;
  some?: InputMaybe<JobWhereInput>;
};

export type JobOrderByInput = {
  description_ar?: InputMaybe<OrderDirection>;
  description_en?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  requirements_ar?: InputMaybe<OrderDirection>;
  requirements_en?: InputMaybe<OrderDirection>;
  title_ar?: InputMaybe<OrderDirection>;
  title_en?: InputMaybe<OrderDirection>;
};

export type JobRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<JobWhereUniqueInput>>;
  create?: InputMaybe<Array<JobCreateInput>>;
};

export type JobRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<JobWhereUniqueInput>>;
  create?: InputMaybe<Array<JobCreateInput>>;
  disconnect?: InputMaybe<Array<JobWhereUniqueInput>>;
  set?: InputMaybe<Array<JobWhereUniqueInput>>;
};

export type JobUpdateArgs = {
  data: JobUpdateInput;
  where: JobWhereUniqueInput;
};

export type JobUpdateInput = {
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  requirements_ar?: InputMaybe<Scalars['String']['input']>;
  requirements_en?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  description_ar?: InputMaybe<StringFilter>;
  description_en?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  requirements_ar?: InputMaybe<StringFilter>;
  requirements_en?: InputMaybe<StringFilter>;
  title_ar?: InputMaybe<StringFilter>;
  title_en?: InputMaybe<StringFilter>;
};

export type JobWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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

export type OurServicesPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ourServicesDesc_ar?: InputMaybe<Scalars['String']['input']>;
  ourServicesDesc_en?: InputMaybe<Scalars['String']['input']>;
  ourServicesTitle_ar?: InputMaybe<Scalars['String']['input']>;
  ourServicesTitle_en?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<ServiceRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OurServicesPageOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ourServicesDesc_ar?: InputMaybe<OrderDirection>;
  ourServicesDesc_en?: InputMaybe<OrderDirection>;
  ourServicesTitle_ar?: InputMaybe<OrderDirection>;
  ourServicesTitle_en?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type OurServicesPageUpdateArgs = {
  data: OurServicesPageUpdateInput;
  where: OurServicesPageWhereUniqueInput;
};

export type OurServicesPageUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ourServicesDesc_ar?: InputMaybe<Scalars['String']['input']>;
  ourServicesDesc_en?: InputMaybe<Scalars['String']['input']>;
  ourServicesTitle_ar?: InputMaybe<Scalars['String']['input']>;
  ourServicesTitle_en?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<ServiceRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OurServicesPageWhereInput = {
  AND?: InputMaybe<Array<OurServicesPageWhereInput>>;
  NOT?: InputMaybe<Array<OurServicesPageWhereInput>>;
  OR?: InputMaybe<Array<OurServicesPageWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ourServicesDesc_ar?: InputMaybe<StringFilter>;
  ourServicesDesc_en?: InputMaybe<StringFilter>;
  ourServicesTitle_ar?: InputMaybe<StringFilter>;
  ourServicesTitle_en?: InputMaybe<StringFilter>;
  services?: InputMaybe<ServiceManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type OurServicesPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RecruitmentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  jobs?: InputMaybe<JobRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecruitmentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description_ar?: InputMaybe<OrderDirection>;
  description_en?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title_ar?: InputMaybe<OrderDirection>;
  title_en?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type RecruitmentUpdateArgs = {
  data: RecruitmentUpdateInput;
  where: RecruitmentWhereUniqueInput;
};

export type RecruitmentUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  jobs?: InputMaybe<JobRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecruitmentWhereInput = {
  AND?: InputMaybe<Array<RecruitmentWhereInput>>;
  NOT?: InputMaybe<Array<RecruitmentWhereInput>>;
  OR?: InputMaybe<Array<RecruitmentWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description_ar?: InputMaybe<StringFilter>;
  description_en?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  jobs?: InputMaybe<JobManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  title_ar?: InputMaybe<StringFilter>;
  title_en?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type RecruitmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServiceCreateInput = {
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceManyRelationFilter = {
  every?: InputMaybe<ServiceWhereInput>;
  none?: InputMaybe<ServiceWhereInput>;
  some?: InputMaybe<ServiceWhereInput>;
};

export type ServiceOrderByInput = {
  description_ar?: InputMaybe<OrderDirection>;
  description_en?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imageUrl?: InputMaybe<OrderDirection>;
  title_ar?: InputMaybe<OrderDirection>;
  title_en?: InputMaybe<OrderDirection>;
};

export type ServiceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
};

export type ServiceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ServiceCreateInput>>;
  disconnect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  set?: InputMaybe<Array<ServiceWhereUniqueInput>>;
};

export type ServiceUpdateArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceUpdateInput = {
  description_ar?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title_ar?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  description_ar?: InputMaybe<StringFilter>;
  description_en?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  imageUrl?: InputMaybe<StringFilter>;
  title_ar?: InputMaybe<StringFilter>;
  title_en?: InputMaybe<StringFilter>;
};

export type ServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

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

export type AboutPageQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AboutPageQuery = { __typename?: 'Query', aboutCompanies?: Array<{ __typename?: 'AboutCompany', title_ar?: string | null, title_en?: string | null, introduction_ar?: string | null, introduction_en?: string | null, mission_ar?: string | null, mission_en?: string | null, vision_ar?: string | null, vision_en?: string | null, coreValues_ar?: string | null, coreValues_en?: string | null }> | null };

export type HomePageQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type HomePageQuery = { __typename?: 'Query', homePages?: Array<{ __typename?: 'HomePage', missionTitle_en?: string | null, missionTitle_ar?: string | null, missionDescription_en?: string | null, missionDescription_ar?: string | null, aboutUsTitle_en?: string | null, aboutUsTitle_ar?: string | null, aboutUsDescription_en?: string | null, aboutUsDescription_ar?: string | null, contactInfo_en?: string | null, contactInfo_ar?: string | null }> | null };


export const AboutPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title_ar"}},{"kind":"Field","name":{"kind":"Name","value":"title_en"}},{"kind":"Field","name":{"kind":"Name","value":"introduction_ar"}},{"kind":"Field","name":{"kind":"Name","value":"introduction_en"}},{"kind":"Field","name":{"kind":"Name","value":"mission_ar"}},{"kind":"Field","name":{"kind":"Name","value":"mission_en"}},{"kind":"Field","name":{"kind":"Name","value":"vision_ar"}},{"kind":"Field","name":{"kind":"Name","value":"vision_en"}},{"kind":"Field","name":{"kind":"Name","value":"coreValues_ar"}},{"kind":"Field","name":{"kind":"Name","value":"coreValues_en"}}]}}]}}]} as unknown as DocumentNode<AboutPageQuery, AboutPageQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"missionTitle_en"}},{"kind":"Field","name":{"kind":"Name","value":"missionTitle_ar"}},{"kind":"Field","name":{"kind":"Name","value":"missionDescription_en"}},{"kind":"Field","name":{"kind":"Name","value":"missionDescription_ar"}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsTitle_en"}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsTitle_ar"}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsDescription_en"}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsDescription_ar"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfo_en"}},{"kind":"Field","name":{"kind":"Name","value":"contactInfo_ar"}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;