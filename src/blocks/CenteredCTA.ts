import { Block } from "payload/types";

export const CenteredCTA: Block = {
  slug: "centeredCTA",
  labels: {
    singular: "Centered CTA",
    plural: "Centered CTAs",
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
      name: "list",
      type: "array",
      label: "List",
      fields: [
        {
          name: "item",
          type: "text",
          label: "List Item Name",
        },
      ],
    },
    {
      name: "primaryButtonText",
      type: "text",
      label: "Primary Button Text",
    },
    {
      name: "primaryBuittonStyle",
      type: "select",
      label: "Primary Button Style",
      options: [
        {
          label: "default",
          value: "default",
        },
        {
          label: "secondary",
          value: "secondary",
        },
      ],
    },
    { name: "primaryButtonLink", type: "text", label: "Primary Button Link" },
  ],
};
