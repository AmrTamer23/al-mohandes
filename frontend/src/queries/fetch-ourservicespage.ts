import { graphql } from "../gql/gql";

export const OurServicesPageQuery = graphql(`
  query OurServicesPage($take: Int) {
    ourServicesPages(take: $take) {
      ourServicesTitle_ar
      ourServicesTitle_en
      ourServicesDesc_ar
      ourServicesDesc_en
      services {
        title_ar
        title_en
        description_ar
        description_en
        imageUrl
      }
    }
  }
`);
