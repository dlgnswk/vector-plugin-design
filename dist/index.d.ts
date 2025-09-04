import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "icon";
};
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps };
