import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { LocateFixed } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click me",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: <LocateFixed size={12} />,
    disabled: false,
  },
};
