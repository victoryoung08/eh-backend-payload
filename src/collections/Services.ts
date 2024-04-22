import { CollectionConfig } from "payload/types";
import { HeroBlock } from "../blocks/HeroBlock";
import { FeatureCards } from "../blocks/FeatureCards";
import { CenteredCTA } from "../blocks/CenteredCTA";
// import { CenteredCTA } from "../blocks/CenteredCTA";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
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
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [HeroBlock, FeatureCards, CenteredCTA],
    },
  ],
};
