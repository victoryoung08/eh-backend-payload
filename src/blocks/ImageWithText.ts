import { Block } from "payload/types";

export const ImageWithText: Block = {
  slug: "imageWithText",
  fields: [
    {
      name: "badgeText",
      label: "Badge Text",
      type: "text",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "description",
      label: "Description Text",
      type: "text",
    },
    {
      name: "buttonText",
      label: "Button Text",
      type: "text",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
