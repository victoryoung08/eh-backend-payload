import { Block } from "payload/types";

export const CenteredCTA: Block = {
  slug: "centeredCTA",
  labels: {
    singular: "Centered CTA",
    plural: "Centered CTAs",
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
      name: "alignment",
      type: "select",
      label: "Alignment",
      options: [
        {
          label: "left",
          value: "left",
        },
        {
          label: "center",
          value: "center",
        },
        {
          label: "right",
          value: "right",
        },
      ],
    },
  ],
};
