import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="vd-flex vd-flex-col vd-items-center vd-w-full">
      <div className="vd-flex vd-items-center vd-justify-center vd-w-full vd-h-[100px] vd-border-red-500 vd-border vd-border-dashed">
        Box
      </div>
      <Divider />
      <div className="vd-flex vd-items-center vd-justify-center vd-w-full vd-h-[100px] vd-border-red-500 vd-border vd-border-dashed">
        Box
      </div>
    </div>
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <div className="vd-flex vd-flex-col vd-items-center vd-w-full">
      <div className="vd-flex vd-items-center vd-justify-center vd-w-full vd-h-[100px] vd-bg-gray-200">
        Box
      </div>
      <Divider className="vd-bg-primary" />
      <div className="vd-flex vd-items-center vd-justify-center vd-w-full vd-h-[100px] vd-bg-gray-200">
        Box
      </div>
    </div>
  ),
};
