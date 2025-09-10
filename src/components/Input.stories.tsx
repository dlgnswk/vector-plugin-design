import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Search } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
        {...args}
      />
    );
  },
};

export const WithIcon: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        icon={<Search size={12} />}
        {...args}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        disabled
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
    );
  },
};
