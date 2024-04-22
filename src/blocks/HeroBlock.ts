import { Block } from "payload/types";

export const HeroBlock: Block = {
  slug: "heroBlock",
  labels: {
    singular: "Hero Block",
    plural: "Hero Block",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
      required: true,
    },
    {
      name: "headingType",
      label: "Heading Type",
      type: "select",
      hasMany: false,
      options: [
        {
          label: "H1",
          value: "h1",
        },
        {
          label: "h2",
          value: "h2",
        },
        {
          label: "h3",
          value: "h3",
        },
        {
          label: "h4",
          value: "h4",
        },
        {
          label: "h5",
          value: "h5",
        },
        {
          label: "h6",
          value: "h6",
        },
      ],
    },
    {
      name: "body",
      label: "Body",
      type: "richText",
    },
    {
      name: "bodyList",
      label: "Body List",
      type: "array",
      fields: [
        {
          name: "list",
          type: "text",
        },
      ],
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "primaryButtonText",
      label: "Primary Button Text",
      type: "text",
    },
    {
      name: "primaryButtonURL",
      label: "Primary Button URL",
      type: "text",
    },
    {
      name: "secondaryButtonText",
      label: "Secondary Button Text",
      type: "text",
    },
    {
      name: "secondaryButtonURL",
      label: "Secondary Button URL",
      type: "text",
    },
  ],
};
