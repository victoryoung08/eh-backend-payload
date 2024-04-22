import { Block } from "payload/types";

export const FeatureCards: Block = {
  slug: "featureCards",
  labels: {
    singular: "Feature Card",
    plural: "Feature Cards",
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      label: "Badge Text",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
    },
    {
      name: "description",
      type: "text",
      label: "Description Text",
    },
    {
      name: "featureGrid",
      type: "array",
      label: "Feature Grid",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Heading",
        },
        {
          name: "description",
          type: "text",
          label: "Description",
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
