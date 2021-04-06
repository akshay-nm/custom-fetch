import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/custom-fetch.js',
    format: 'umd',
    name: 'custom-fetch',
    sourcemap: true,
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' }), uglify()],
}
