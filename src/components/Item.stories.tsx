import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Input } from "./Input";
import { Label } from "./Label";
import { Item } from "./Item";

const meta: Meta<typeof Title> = {
  title: "UI/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Single: Story = {
  render: () => (
    <Item type="single">
      <Label>Label</Label>
      <Input value="Input" onChange={() => {}} />
    </Item>
  ),
};

export const Multi: Story = {
  render: () => (
    <Item type="multi">
      <Label>Label</Label>
      <Input value="Input" onChange={() => {}} />
    </Item>
  ),
};
