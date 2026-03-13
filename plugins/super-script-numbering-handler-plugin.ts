import { visit } from "unist-util-visit";
import type { Node } from "unist";
import type { Element, Text } from "hast";
import type { Plugin } from "unified";

const superscriptNumberingHandlerPlugin: Plugin = () => {
  const superscriptMap = new Map<string, number>();
  let nextSuperscriptId = 1;

  return (tree: Node) => {
    //Checking the html tree to see if there are any <sup>
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "sup") {
        if (node.children.length === 1 && node.children[0].type === "text") {
          const textNode = node.children[0] as Text;
          const originalValue = textNode.value;

          //Checking if the number already is in the map, if so, it reuses it.
          let displayId: number;
          if (superscriptMap.has(originalValue)) {
            displayId = superscriptMap.get(originalValue)!;
          } else {
            displayId = nextSuperscriptId++;
            superscriptMap.set(originalValue, displayId);
          }

          //Sets the correct number for the sup node
          node.children = [{ type: "text", value: String('[' + displayId + ']') }];
        }
      }
    });
  };
};

export default superscriptNumberingHandlerPlugin;
