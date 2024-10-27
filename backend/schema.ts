// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from "@keystone-6/core/fields";

// the document field is a more complicated field, so it has it's own package
import { document } from "@keystone-6/fields-document";
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from ".keystone/types";

export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: "now" },
      }),
    },
  }),

  HomePage: list({
    fields: {
      slug: text({
        validation: { isRequired: true },
        defaultValue: "home",
        ui: { createView: { fieldMode: "hidden" } },
      }),
      heroTitle_en: text({ label: "Hero Title (English)" }),
      heroTitle_ar: text({ label: "Hero Title (Arabic)" }),
      heroDescription_en: text({
        ui: { displayMode: "textarea" },
        label: "Hero Description (English)",
      }),
      heroDescription_ar: text({
        ui: { displayMode: "textarea" },
        label: "Hero Description (Arabic)",
      }),
      missionTitle_en: text({ label: "Mission Title (English)" }),
      missionTitle_ar: text({ label: "Mission Title (Arabic)" }),
      missionDescription_en: text({
        ui: { displayMode: "textarea" },
        label: "Mission Description (English)",
      }),
      missionDescription_ar: text({
        ui: { displayMode: "textarea" },
        label: "Mission Description (Arabic)",
      }),
      aboutUsTitle_en: text({ label: "About Us Title (English)" }),
      aboutUsTitle_ar: text({ label: "About Us Title (Arabic)" }),
      aboutUsDescription_en: text({
        ui: { displayMode: "textarea" },
        label: "About Us Description (English)",
      }),
      aboutUsDescription_ar: text({
        ui: { displayMode: "textarea" },
        label: "About Us Description (Arabic)",
      }),
      contactInfo_en: text({ label: "Contact Info (English)" }),
      contactInfo_ar: text({ label: "Contact Info (Arabic)" }),
      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
    access: allowAll,
  }),

  Service: list({
    fields: {
      title_en: text({
        label: "Service Title (English)",
        validation: { isRequired: true },
      }),
      title_ar: text({
        label: "Service Title (Arabic)",
        validation: { isRequired: true },
      }),
      description_en: text({
        ui: { displayMode: "textarea" },
        label: "Service Description (English)",
      }),
      description_ar: text({
        ui: { displayMode: "textarea" },
        label: "Service Description (Arabic)",
      }),
      imageUrl: text({ label: "Service Image URL" }),
    },
    access: allowAll,
  }),

  OurServicesPage: list({
    fields: {
      slug: text({
        validation: { isRequired: true },
        defaultValue: "our-services",
        ui: { createView: { fieldMode: "hidden" } },
      }),
      ourServicesTitle_en: text({ label: "Our Services Title (English)" }),
      ourServicesTitle_ar: text({ label: "Our Services Title (Arabic)" }),
      ourServicesDesc_en: text({
        ui: { displayMode: "textarea" },
        label: "Our Services Description (English)",
      }),
      ourServicesDesc_ar: text({
        ui: { displayMode: "textarea" },
        label: "Our Services Description (Arabic)",
      }),

      services: relationship({
        ref: "Service",
        many: true,
        label: "Services Offered",
      }),

      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
    access: allowAll,
  }),
  Job: list({
    fields: {
      title_en: text({
        label: "Job Title (English)",
        validation: { isRequired: true },
      }),
      title_ar: text({
        label: "Job Title (Arabic)",
        validation: { isRequired: true },
      }),
      description_en: text({
        ui: { displayMode: "textarea" },
        label: "Job Description (English)",
      }),
      description_ar: text({
        ui: { displayMode: "textarea" },
        label: "Job Description (Arabic)",
      }),
      requirements_en: text({
        ui: { displayMode: "textarea" },
        label: "Job Requirements (English)",
      }),
      requirements_ar: text({
        ui: { displayMode: "textarea" },
        label: "Job Requirements (Arabic)",
      }),
    },
    access: allowAll,
  }),

  // Recruitment (توظيف) schema
  Recruitment: list({
    fields: {
      slug: text({
        validation: { isRequired: true },
        defaultValue: "recruitment",
        ui: { createView: { fieldMode: "hidden" } },
      }),
      title_en: text({
        label: "Page Title (English)",
        validation: { isRequired: true },
      }),
      title_ar: text({
        label: "Page Title (Arabic)",
        validation: { isRequired: true },
      }),
      description_en: text({
        ui: { displayMode: "textarea" },
        label: "Page Description (English)",
      }),
      description_ar: text({
        ui: { displayMode: "textarea" },
        label: "Page Description (Arabic)",
      }),

      jobs: relationship({
        ref: "Job",
        many: true,
        label: "Available Jobs",
      }),

      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
    access: allowAll,
  }),
  AboutCompany: list({
    fields: {
      slug: text({
        validation: { isRequired: true },
        defaultValue: "about-company",
        ui: { createView: { fieldMode: "hidden" } },
      }),

      // General information about the company
      title_en: text({
        label: "Page Title (English)",
        validation: { isRequired: true },
      }),
      title_ar: text({
        label: "Page Title (Arabic)",
        validation: { isRequired: true },
      }),

      introduction_en: text({
        ui: { displayMode: "textarea" },
        label: "Introduction (English)",
      }),
      introduction_ar: text({
        ui: { displayMode: "textarea" },
        label: "Introduction (Arabic)",
      }),

      // Vision statement
      vision_en: text({
        ui: { displayMode: "textarea" },
        label: "Vision (English)",
      }),
      vision_ar: text({
        ui: { displayMode: "textarea" },
        label: "Vision (Arabic)",
      }),

      // Mission statement
      mission_en: text({
        ui: { displayMode: "textarea" },
        label: "Mission (English)",
      }),
      mission_ar: text({
        ui: { displayMode: "textarea" },
        label: "Mission (Arabic)",
      }),

      // Core values section, supporting multiple values
      coreValues_en: text({
        ui: { displayMode: "textarea" },
        label: "Core Values (English)",
      }),
      coreValues_ar: text({
        ui: { displayMode: "textarea" },
        label: "Core Values (Arabic)",
      }),

      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
    access: allowAll,
  }),
};
