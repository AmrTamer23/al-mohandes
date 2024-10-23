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

export const lists = {
  User: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: "unique",
      }),

      password: password({ validation: { isRequired: true } }),

      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below

      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" },
      }),
    },
  }),

  HomePage: list({
    fields: {
      // Non-translatable fields (metadata, for example)
      slug: text({
        validation: { isRequired: true },
        defaultValue: "home",
        ui: { createView: { fieldMode: "hidden" } },
      }),

      // Translatable fields for Hero section
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

      // Translatable fields for Our Mission section
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

      // Translatable fields for About Us section
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

      // General sections for a company website
      contactInfo_en: text({ label: "Contact Info (English)" }),
      contactInfo_ar: text({ label: "Contact Info (Arabic)" }),

      // Timestamps
      createdAt: timestamp(),
      updatedAt: timestamp(),
    },
    access: allowAll,
  }),
} satisfies Lists;
