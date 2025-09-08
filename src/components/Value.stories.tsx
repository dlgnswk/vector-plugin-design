import type { Meta, StoryObj } from "@storybook/react";
import { Value } from "./Value";

const meta: Meta<typeof Value> = {
  title: "UI/Value",
  component: Value,
  parameters: {
    layout: "centered",
  },
  args: {
    icon: "X",
    value: "Value",
  },
  argTypes: {
    icon: {
      control: "text",
    },
    value: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Value>;

export const Default: Story = {
  args: { icon: undefined, value: "Value", disabled: false },
  render: ({ icon, value, disabled }) => (
    <Value icon={icon} value={value} disabled={disabled} />
  ),
};

export const WithIcon: Story = {
  args: { icon: "X", value: "Value", disabled: true },
  render: ({ icon, value, disabled }) => (
    <div className="vd-flex vd-flex-col vd-justify-center vd-w-full vd-gap-[3px]">
      <Value icon={icon} value={value} disabled={disabled} />
    </div>
  ),
};
