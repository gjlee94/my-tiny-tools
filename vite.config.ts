import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'; // type definition 파일 추가해주는 라이브러리
import path from 'path';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Dev config
    return {
      plugins: [react()],
      root: path.resolve(__dirname, 'src'),
      build: {
        outDir: path.resolve(__dirname, 'dist'),
      },
    };
  } else {
    // Build config
    return {
      plugins: [react(), dts({ insertTypesEntry: true })],
      build: {
        target: 'esnext',
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'), // 라이브러리 엔트리 포인트
          name: 'my-tiny-tools',
          formats: ['es', 'umd'], // es, umd 형식 둘 다로 빌드
          fileName: (format) => `${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'], // react, react-dom은 라이브러리에 포함 안되도록
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    };
  }
});
