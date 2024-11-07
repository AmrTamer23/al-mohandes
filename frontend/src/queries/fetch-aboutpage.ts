import { graphql } from "../gql/gql";

export const AboutPageQuery = graphql(`
  query AboutPage($take: Int) {
    aboutCompanies(take: $take) {
      title_ar
      title_en
      introduction_ar
      introduction_en
      mission_ar
      mission_en
      vision_ar
      vision_en
      coreValues_ar
      coreValues_en
    }
  }
`);
