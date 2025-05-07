# @bebeal/rehype-code-terminal

A rehype plugin for rendering code terminals in place of code blocks.

## Installation

```bash
npm install @bebeal/rehype-code-terminal
```

## Usage

* Use with `rehype-starry-night` to syntax highlighted code blocks.

```tsx
import rehypeCodeTerminal from '@bebeal/rehype-code-terminal'
import rehypeStarryNight from 'rehype-starry-night'
import { common } from '@wooorm/starry-night'
import sourceZig from '@wooorm/starry-night/source.zig'
import sourceScala from '@wooorm/starry-night/source.scala'
import sourceJulia from '@wooorm/starry-night/source.julia'
import sourceHaskell from '@wooorm/starry-night/source.haskell'

export default defineConfig({
  rehypePlugins: [rehypeCodeTerminal, [rehypeStarryNight, { grammars: [...common, sourceZig, sourceScala, sourceJulia, sourceHaskell] }]],
})
```

* You'll also need to include the styles, and inject the components

```tsx
import '@bebeal/rehype-code-terminal/style.css'
import { InlineTerminal, Terminal } from '@bebeal/rehype-code-terminal'

<MDXProvider components={{ InlineTerminal, Terminal }}>
  ...
</MDXProvider>
```

## Demo

<div align="center">
<img src="https://github.com/user-attachments/assets/33963cb2-3bc8-464c-985c-d744042c0828" alt="code language blocks" />
</div>
