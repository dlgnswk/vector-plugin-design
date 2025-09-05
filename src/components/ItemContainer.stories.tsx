import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Input } from "./Input";
import { Label } from "./Label";
import { Item } from "./Item";
import { ItemContainer } from "./ItemContainer";

const meta: Meta<typeof Title> = {
  title: "UI/ItemContainer",
  component: ItemContainer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ItemContainer>;

export const ColWithSingle: Story = {
  render: () => (
    <ItemContainer type="col">
      <Item type="single">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
    </ItemContainer>
  ),
};

export const ColWithMulti: Story = {
  render: () => (
    <ItemContainer type="col">
      <Item type="multi">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
      <Item type="multi">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
    </ItemContainer>
  ),
};

export const RowWithSingle: Story = {
  render: () => (
    <ItemContainer type="row">
      <Item type="single">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
    </ItemContainer>
  ),
};

export const RowWithMulti: Story = {
  render: () => (
    <ItemContainer type="row">
      <Item type="multi">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
      <Item type="multi">
        <Label>Label</Label>
        <Input value="Input" onChange={() => {}} />
      </Item>
    </ItemContainer>
  ),
};
