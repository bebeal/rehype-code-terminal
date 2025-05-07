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
