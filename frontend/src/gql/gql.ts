/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query AboutPage($take: Int) {\n    aboutCompanies(take: $take) {\n      title_ar\n      title_en\n      introduction_ar\n      introduction_en\n      mission_ar\n      mission_en\n      vision_ar\n      vision_en\n      coreValues_ar\n      coreValues_en\n    }\n  }\n": types.AboutPageDocument,
    "\n  query HomePage($take: Int) {\n    homePages(take: $take) {\n      missionTitle_en\n      missionTitle_ar\n      missionDescription_en\n      missionDescription_ar\n      aboutUsTitle_en\n      aboutUsTitle_ar\n      aboutUsDescription_en\n      aboutUsDescription_ar\n      contactInfo_en\n      contactInfo_ar\n    }\n  }\n": types.HomePageDocument,
    "\n  query OurServicesPage($take: Int) {\n    ourServicesPages(take: $take) {\n      ourServicesTitle_ar\n      ourServicesTitle_en\n      ourServicesDesc_ar\n      ourServicesDesc_en\n      services {\n        title_ar\n        title_en\n        description_ar\n        description_en\n        imageUrl\n      }\n    }\n  }\n": types.OurServicesPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AboutPage($take: Int) {\n    aboutCompanies(take: $take) {\n      title_ar\n      title_en\n      introduction_ar\n      introduction_en\n      mission_ar\n      mission_en\n      vision_ar\n      vision_en\n      coreValues_ar\n      coreValues_en\n    }\n  }\n"): (typeof documents)["\n  query AboutPage($take: Int) {\n    aboutCompanies(take: $take) {\n      title_ar\n      title_en\n      introduction_ar\n      introduction_en\n      mission_ar\n      mission_en\n      vision_ar\n      vision_en\n      coreValues_ar\n      coreValues_en\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage($take: Int) {\n    homePages(take: $take) {\n      missionTitle_en\n      missionTitle_ar\n      missionDescription_en\n      missionDescription_ar\n      aboutUsTitle_en\n      aboutUsTitle_ar\n      aboutUsDescription_en\n      aboutUsDescription_ar\n      contactInfo_en\n      contactInfo_ar\n    }\n  }\n"): (typeof documents)["\n  query HomePage($take: Int) {\n    homePages(take: $take) {\n      missionTitle_en\n      missionTitle_ar\n      missionDescription_en\n      missionDescription_ar\n      aboutUsTitle_en\n      aboutUsTitle_ar\n      aboutUsDescription_en\n      aboutUsDescription_ar\n      contactInfo_en\n      contactInfo_ar\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query OurServicesPage($take: Int) {\n    ourServicesPages(take: $take) {\n      ourServicesTitle_ar\n      ourServicesTitle_en\n      ourServicesDesc_ar\n      ourServicesDesc_en\n      services {\n        title_ar\n        title_en\n        description_ar\n        description_en\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query OurServicesPage($take: Int) {\n    ourServicesPages(take: $take) {\n      ourServicesTitle_ar\n      ourServicesTitle_en\n      ourServicesDesc_ar\n      ourServicesDesc_en\n      services {\n        title_ar\n        title_en\n        description_ar\n        description_en\n        imageUrl\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;