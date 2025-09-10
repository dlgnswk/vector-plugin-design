import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: {
    disabled: false,
  },
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Select an option..."
      />
    );
  },
};

export const Disabled: StoryObj<typeof Textarea> = {
  args: {
    disabled: true,
  },
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Textarea
        value={value}
        disabled
        placeholder="Select an option..."
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
