import less from 'less'
import { readFile } from 'fs-extra'

export default function plugin ({
  sourceMaps = true,
  lessOptions = {},
  lessFiles = [],
}) {
  return {
    async buildStart () {
      const promises = lessFiles.map(async ({ input, output }) => {
        const fileContent = await readFile(input, 'utf-8')
        const { css, map, imports } = await less.render(fileContent, { sourceMap: {}, ...lessOptions })
        this.emitFile({
          type: 'asset',
          fileName: output,
          source: css,
        })

        this.addWatchFile(input)
        imports.forEach((imp) => this.addWatchFile(imp))

        this.emitFile({
          type: 'asset',
          fileName: `${output}.map`,
          source: map,
        })
      })
      return Promise.all(promises)
    }
  }
}
