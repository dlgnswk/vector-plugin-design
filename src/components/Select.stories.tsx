import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Select an option..."
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("option2");
    return (
      <Select
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Select an option..."
      />
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const manyOptions = Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    }));

    return (
      <Select
        value={value}
        onChange={setValue}
        options={manyOptions}
        placeholder="Select from many options..."
      />
    );
  },
};
