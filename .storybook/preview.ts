import type { Preview } from "@storybook/react";
import "../dist/styles.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
};

export default preview;
