import { CollectionConfig } from "payload/types";
import { HeroBlock } from "../blocks/HeroBlock";
import { CenteredCTA } from "../blocks/CenteredCTA";
import { FeatureCards } from "../blocks/FeatureCards";
// import { CenteredCTA } from "../blocks/CenteredCTA";
export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [HeroBlock, CenteredCTA, FeatureCards],
    },
  ],
};
