import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Input } from "./Input";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Label",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: "Label" },
  render: ({ children }) => <Label>{children}</Label>,
};

export const WithInput: Story = {
  args: { children: "Label" },
  render: ({ children }) => (
    <div className="vd-flex vd-flex-col vd-justify-center vd-w-full vd-gap-[3px]">
      <Label>{children}</Label>
      <Input value="Input" onChange={() => {}} />
    </div>
  ),
};
