import { graphql } from "../gql/gql";

export const HomePageQuery = graphql(`
  query HomePage($take: Int) {
    homePages(take: $take) {
      heroTitle_en
      heroTitle_ar
      heroDescription_en
      heroDescription_ar
    }
  }
`);
