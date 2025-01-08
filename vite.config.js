import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // 输出目录
    sourcemap: true, // 可选：生成 source map 文件
    minify: 'esbuild', // 使用 esbuild 压缩
  },
  server: {
    port: 3000, // 开发服务器端口
    open: true, // 自动打开浏览器
  },
});
