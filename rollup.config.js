/*
 * @Author: wanyuqing
 * @Date: 2021-01-29 15:00:48
 */
import resolve from 'rollup-plugin-node-resolve'; // node模块解析机制
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs'; // 将commonjs转化成es6
import serve from 'rollup-plugin-serve'; // dev-server

export default {
  input: './src/like-single-spa.js',
  output: {
    file: './lib/umd/like-single-spa.js',
    format: 'umd',
    name: 'mySingleSpa',
    sourcemap: true,
  },
  // rollup 插件
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    // 见下方的package.json文件script字段中的serve命令
    // 目的是只有执行serve命令时才启动这个插件
    process.env.SERVE
      ? serve({
          open: true,
          contentBase: '',
          openPage: '/toutrial/index.html',
          host: 'localhost',
          port: '10001',
        })
      : null,
  ],
};
