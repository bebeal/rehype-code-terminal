import type { Element, Root, Text, Properties } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { MdxJsxFlowElementHast, MdxJsxTextElementHast } from 'mdast-util-mdx-jsx';

// Custom type for extended properties
interface ExtendedProperties extends Properties {
  dataCodeId?: string;
  className?: string[];
}

const rehypeCodeTerminal: Plugin<[], Root> = () => {
  return (tree) => {    // First pass: Create a map of all code blocks
    const codeBlocks = new Map<string, { content: string; language: string }>();

    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'pre') {
        const codeNode = node.children?.[0] as Element | undefined;
        if (codeNode?.tagName === 'code') {
          const props = codeNode.properties as ExtendedProperties || {};
          const classNames = props.className || [];
          let language = '';

          for (const className of classNames) {
            if (typeof className === 'string' && className.startsWith('language-')) {
              language = className.slice(9);
              break;
            }
          }

          // Store original code content
          const codeContent = codeNode.children
            .map((child) => {
              if (child.type === 'text') {
                return (child satisfies Text).value;
              }
              return '';
            })
            .join('');

          // Generate a unique ID for this code block
          const id = `code-${Math.random().toString(36).substring(2, 9)}`;

          // Add a custom data attribute to mark this node
          node.properties = node.properties || {};
          (node.properties as ExtendedProperties).dataCodeId = id;

          // Store the original content and language
          codeBlocks.set(id, { content: codeContent, language });
        }
      }
    });

    // Second pass: Replace code blocks with Terminal components
    visit(tree, 'element', (node: Element, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      if (node.tagName === 'pre') {
        const props = node.properties as ExtendedProperties;
        if (props?.dataCodeId) {
          const id = props.dataCodeId;
          const blockInfo = codeBlocks.get(id);
          const language = blockInfo?.language || '';

          // Create the Terminal component with proper typing
          const terminalElement: MdxJsxFlowElementHast = {
            type: 'mdxJsxFlowElement',
            name: 'Terminal',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'language', value: language }
            ],
            children: [node],
            data: { _mdxExplicitJsx: true },
            position: node.position
          };

          // This works without casting because we've used the correct type
          parent.children[index] = terminalElement;
        }
      }

      // Inline code tags
      if (node.tagName === 'code' && (parent as Element).tagName !== 'pre') {
        const inlineContent = node.children
          .map((child) => {
            if (child.type === 'text') {
              return (child satisfies Text).value;
            }
            return '';
          })
          .join('');

        // Create the InlineTerminal component with proper typing
        const inlineElement: MdxJsxTextElementHast = {
          type: 'mdxJsxTextElement',
          name: 'InlineTerminal',
          attributes: [],
          children: [{ type: 'text', value: inlineContent }],
          data: { _mdxExplicitJsx: true },
          position: node.position
        };

        // This works without casting because we've used the correct type
        parent.children[index] = inlineElement;
      }
    });
  };
};

export default rehypeCodeTerminal;
