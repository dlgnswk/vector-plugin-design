# `Vector Plugin` design system

![npm](https://img.shields.io/npm/v/vector-plugin-design?label=npm)
![license](https://img.shields.io/npm/l/vector-plugin-design)

Figma 플러그인 `Vector Plugin` 에서 사용되는 디자인 시스템 라이브러리입니다.

## Install

```bash
npm i vector-plugin-design
yarn add vector-plugin-design
pnpm add vector-plugin-design
```

## Usage

### style.css

별도로 `TailwindCSS` 설치하지 않고 사전 정의된 스타일 시트를 import해 사용할 수 있습니다.

```ts
import "vector-plugin-design/styles.css";
```

### import component

정의된 컴포넌트를 임포트해 사용할 수 있습니다.

```tsx
import { Button } from "vector-plugin-design";

export default function Example() {
  return <Button>Click me</Button>;
}
```

### util function

`cn` 유틸함수를 임포트해 조건부/추가 클래스를 쉽게 합칠 수 있습니다.

```tsx
import { Button } from "vector-plugin-design";
import { cn } from "vector-plugin-design/util";

export function IconButton({ hasIcon, className, children, ...props }) {
  return (
    <Button
      className={cn(hasIcon ? "gap-2 pl-2 pr-3" : "px-3", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
```

## Components

### Available

- Button
- Divider
- Input
- Item
- Label
- Select
- Title
- Value

## Dependencies

- react (peer: >=18)
- Tailwind v3 (internal build)
- typescript

## Storybook

see https://68b8f0344b12034447d665ca-wmtnoqzrxm.chromatic.com

## Documentation

see https://github.com/dlgnswk/vector-plugin-design

## License

MIT
