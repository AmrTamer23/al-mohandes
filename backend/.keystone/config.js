"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var lists = {
  User: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  HomePage: (0, import_core.list)({
    fields: {
      slug: (0, import_fields.text)({
        validation: { isRequired: true },
        defaultValue: "home",
        ui: { createView: { fieldMode: "hidden" } }
      }),
      heroTitle_en: (0, import_fields.text)({ label: "Hero Title (English)" }),
      heroTitle_ar: (0, import_fields.text)({ label: "Hero Title (Arabic)" }),
      heroDescription_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Hero Description (English)"
      }),
      heroDescription_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Hero Description (Arabic)"
      }),
      missionTitle_en: (0, import_fields.text)({ label: "Mission Title (English)" }),
      missionTitle_ar: (0, import_fields.text)({ label: "Mission Title (Arabic)" }),
      missionDescription_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Mission Description (English)"
      }),
      missionDescription_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Mission Description (Arabic)"
      }),
      aboutUsTitle_en: (0, import_fields.text)({ label: "About Us Title (English)" }),
      aboutUsTitle_ar: (0, import_fields.text)({ label: "About Us Title (Arabic)" }),
      aboutUsDescription_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "About Us Description (English)"
      }),
      aboutUsDescription_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "About Us Description (Arabic)"
      }),
      contactInfo_en: (0, import_fields.text)({ label: "Contact Info (English)" }),
      contactInfo_ar: (0, import_fields.text)({ label: "Contact Info (Arabic)" }),
      createdAt: (0, import_fields.timestamp)(),
      updatedAt: (0, import_fields.timestamp)()
    },
    access: import_access.allowAll
  }),
  Service: (0, import_core.list)({
    fields: {
      title_en: (0, import_fields.text)({
        label: "Service Title (English)",
        validation: { isRequired: true }
      }),
      title_ar: (0, import_fields.text)({
        label: "Service Title (Arabic)",
        validation: { isRequired: true }
      }),
      description_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Service Description (English)"
      }),
      description_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Service Description (Arabic)"
      }),
      imageUrl: (0, import_fields.text)({ label: "Service Image URL" })
    },
    access: import_access.allowAll
  }),
  OurServicesPage: (0, import_core.list)({
    fields: {
      slug: (0, import_fields.text)({
        validation: { isRequired: true },
        defaultValue: "our-services",
        ui: { createView: { fieldMode: "hidden" } }
      }),
      ourServicesTitle_en: (0, import_fields.text)({ label: "Our Services Title (English)" }),
      ourServicesTitle_ar: (0, import_fields.text)({ label: "Our Services Title (Arabic)" }),
      ourServicesDesc_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Our Services Description (English)"
      }),
      ourServicesDesc_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Our Services Description (Arabic)"
      }),
      services: (0, import_fields.relationship)({
        ref: "Service",
        many: true,
        label: "Services Offered"
      }),
      createdAt: (0, import_fields.timestamp)(),
      updatedAt: (0, import_fields.timestamp)()
    },
    access: import_access.allowAll
  }),
  Job: (0, import_core.list)({
    fields: {
      title_en: (0, import_fields.text)({
        label: "Job Title (English)",
        validation: { isRequired: true }
      }),
      title_ar: (0, import_fields.text)({
        label: "Job Title (Arabic)",
        validation: { isRequired: true }
      }),
      description_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Job Description (English)"
      }),
      description_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Job Description (Arabic)"
      }),
      requirements_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Job Requirements (English)"
      }),
      requirements_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Job Requirements (Arabic)"
      })
    },
    access: import_access.allowAll
  }),
  // Recruitment (توظيف) schema
  Recruitment: (0, import_core.list)({
    fields: {
      slug: (0, import_fields.text)({
        validation: { isRequired: true },
        defaultValue: "recruitment",
        ui: { createView: { fieldMode: "hidden" } }
      }),
      title_en: (0, import_fields.text)({
        label: "Page Title (English)",
        validation: { isRequired: true }
      }),
      title_ar: (0, import_fields.text)({
        label: "Page Title (Arabic)",
        validation: { isRequired: true }
      }),
      description_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Page Description (English)"
      }),
      description_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Page Description (Arabic)"
      }),
      jobs: (0, import_fields.relationship)({
        ref: "Job",
        many: true,
        label: "Available Jobs"
      }),
      createdAt: (0, import_fields.timestamp)(),
      updatedAt: (0, import_fields.timestamp)()
    },
    access: import_access.allowAll
  }),
  AboutCompany: (0, import_core.list)({
    fields: {
      slug: (0, import_fields.text)({
        validation: { isRequired: true },
        defaultValue: "about-company",
        ui: { createView: { fieldMode: "hidden" } }
      }),
      // General information about the company
      title_en: (0, import_fields.text)({
        label: "Page Title (English)",
        validation: { isRequired: true }
      }),
      title_ar: (0, import_fields.text)({
        label: "Page Title (Arabic)",
        validation: { isRequired: true }
      }),
      introduction_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Introduction (English)"
      }),
      introduction_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Introduction (Arabic)"
      }),
      // Vision statement
      vision_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Vision (English)"
      }),
      vision_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Vision (Arabic)"
      }),
      // Mission statement
      mission_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Mission (English)"
      }),
      mission_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Mission (Arabic)"
      }),
      // Core values section, supporting multiple values
      coreValues_en: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Core Values (English)"
      }),
      coreValues_ar: (0, import_fields.text)({
        ui: { displayMode: "textarea" },
        label: "Core Values (Arabic)"
      }),
      createdAt: (0, import_fields.timestamp)(),
      updatedAt: (0, import_fields.timestamp)()
    },
    access: import_access.allowAll
  })
};

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: process.env.SESSION_SECRET
});

// keystone.ts
var corsOptions = {
  origin: "*",
  // Allow your frontend origin
  methods: ["GET", "POST", "OPTIONS"],
  // Allowed methods
  credentials: true
  // Allow credentials
};
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session,
    // Add the CORS middleware
    server: {
      cors: corsOptions,
      port: 3001
    }
  })
);
//# sourceMappingURL=config.js.map
