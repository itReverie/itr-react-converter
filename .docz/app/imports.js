export const imports = {
  'src/docz/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-index" */ 'src/docz/index.mdx'),
}
