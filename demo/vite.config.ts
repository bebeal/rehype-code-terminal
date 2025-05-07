import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import rehypeCodeTerminal from '../src/lib/RehypeCodeTerminal'
import rehypeStarryNight from 'rehype-starry-night'
import { common } from '@wooorm/starry-night'
import sourceZig from '@wooorm/starry-night/source.zig'
import sourceScala from '@wooorm/starry-night/source.scala'
import sourceJulia from '@wooorm/starry-night/source.julia'
import sourceHaskell from '@wooorm/starry-night/source.haskell'

export default defineConfig({
  plugins: [
    mdx({
      development: true,
      rehypePlugins: [rehypeCodeTerminal, [rehypeStarryNight, { grammars: [...common, sourceZig, sourceScala, sourceJulia, sourceHaskell] }]],
      providerImportSource: '@mdx-js/react'
    }),
    react()
  ],
  root: 'demo',
  server: {
    open: true
  }
});
