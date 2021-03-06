/**
 * Rollup configuration for packaging the plugin in a module that is consumable
 * as the `src` of a `script` tag or via AMD or similar client-side loading.
 *
 * This module DOES include its dependencies.
 */
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/plugin.js',
  output: {
    file: 'dist/videojs-bitrate-graph.js',
    format: 'umd',
    globals: {
      'video.js': 'videojs'
    },
    name: 'videojsBitrateGraph'
  },
  external: [
    'video.js'
  ],
  plugins: [
    resolve({
      browser: true,
      main: true,
      jsnext: true
    }),
    json(),
    commonjs({
      sourceMap: false
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/env', {
          loose: true,
          modules: false
        }]
      ],
      plugins: [
        '@babel/transform-object-assign'
      ]
    })
  ]
};
