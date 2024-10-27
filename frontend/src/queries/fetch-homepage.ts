import { graphql } from "../gql/gql";

export const HomePageQuery = graphql(`
  query HomePage($take: Int) {
    homePages(take: $take) {
      missionTitle_en
      missionTitle_ar
      missionDescription_en
      missionDescription_ar
      aboutUsTitle_en
      aboutUsTitle_ar
      aboutUsDescription_en
      aboutUsDescription_ar
      contactInfo_en
      contactInfo_ar
    }
  }
`);
