export default function createHTML (params) {
  const {
    body = '',
    scripts = [],
    styles = [],
    title,
  } = params
  return `
<html>
  <head>
    <title>${title || ''}</title>
    ${styles.map((s) => `<link href="${s}" media="all" rel="stylesheet" type="text/css">`).join('\n    ')}
    ${scripts.map((s) => `<script src="${s}"></script>`).join('\n    ')}
  </head>
  <body>
    ${body}
  </body>
</html>
`.trim()
}
