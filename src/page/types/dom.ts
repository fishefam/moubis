export type ExtendedNode = ChildNode & { attributes: NamedNodeMap; innerHTML: string; outerHTML: string }
export type ExtendedNodeList = NodeListOf<ExtendedNode>
