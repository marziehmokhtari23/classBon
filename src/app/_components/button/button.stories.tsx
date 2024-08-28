import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
          document.documentElement.classList.add('dark');
          return <Story />;
        },
      ],
}

export default meta;
type Story = StoryObj<typeof Button>;
export const BrandColors: Story = {
    render: () => (
        <div className="flex gap-3">
            <Button>Default</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="ghost">Ghost</Button>
            
        </div>
    ),
};
export const ButtonSizes:Story={
    render:()=>(
<div className="flex gap-3 items-center">
    <Button size="large">large</Button>
    <Button size="tiny">tiny</Button>
    <Button size="small">small</Button>
    <Button size="normal">normal</Button>
</div>
    )
}
export const OutLineStateButtons:Story={
    render:()=>(
        <div className="flex gap-3 items-center">
<Button isOutline={true} variant="primary">primary</Button>
<Button isOutline={true} variant="warning">primary</Button>
<Button isOutline={true} variant="success">primary</Button>
<Button isOutline={true} variant="error">primary</Button>
<Button isOutline={true} variant="neutral">primary</Button>
        </div>
    
    )
      
}
export const ButtonShapes:Story={
    render:()=>(
        <div className="flex flex-col gap-3">
            <Button shape="full" variant="neutral">full</Button>
            <Button shape="square" variant="neutral">x</Button>
            <Button shape="wide" variant="neutral">wide</Button>
            
        </div>
    )
}
export const DisabledButton:Story={
    render:()=>(
        <Button disabled={true} variant="primary">disabled</Button>
    )
    
    
}




