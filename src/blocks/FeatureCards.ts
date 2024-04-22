import { Block } from "payload/types";

export const FeatureCards: Block = {
  slug: "featureCards",
  labels: {
    singular: "Feature Card",
    plural: "Feature Cards",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
    },
    {
      name: "body",
      type: "text",
      label: "Body Text",
    },
    {
      name: "cards",
      type: "array",
      label: "Cards",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Heading",
        },
        {
          name: "body",
          type: "text",
          label: "Body",
        },
      ],
    },
    {
      name: "icon",
      type: "select",
      label: "Icon",
      options: [
        {
          label: "PersonSimpleThrow",
          value: "PersonSimpleThrow",
        },
        {
          label: "UserCircleCheck",
          value: "UserCircleCheck",
        },
        {
          label: "RoadHorizon",
          value: "RoadHorizon",
        },
        {
          label: "SealCheck",
          value: "SealCheck",
        },
      ],
    },
  ],
};
