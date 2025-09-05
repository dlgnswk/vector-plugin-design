import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Input } from "./Input";
import { Label } from "./Label";
import { ItemContainer } from "./ItemContainer";
import { Item } from "./Item";

const meta: Meta<typeof Title> = {
  title: "UI/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Title",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: { children: "Title" },
  render: ({ children }) => <Title>{children}</Title>,
};

export const WithItemContainer: Story = {
  args: { children: "Title" },
  render: ({ children }) => (
    <div>
      <Title>{children}</Title>
      <ItemContainer type="col">
        <Item type="single">
          <Label>Label</Label>
          <Input value="Input" onChange={() => {}} />
        </Item>
      </ItemContainer>
    </div>
  ),
};
