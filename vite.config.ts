import { resolve } from "path";

export default {
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}'
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./app/components/TeacherToolWidget.tsx"),
      name: 'TeacherToolWidget',
      formats: ['es'],
      fileName: () => 'teacher-tool-widget.js'
    },
    outDir: 'public',
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return "http://localhost:4173/" + filename;
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  }
}