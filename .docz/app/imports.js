export const imports = {
  'src/docz/dropdown.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-dropdown" */ 'src/docz/dropdown.mdx'),
  'src/docz/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-index" */ 'src/docz/index.mdx'),
  'src/docz/input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-input" */ 'src/docz/input.mdx'),
}
