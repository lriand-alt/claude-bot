import { resolve } from "path";

export default {
  build: {
    lib: {
      entry: resolve(__dirname, "./app/components/TeacherToolWidget.tsx"),
      name: 'TeacherToolWidget',
      formats: ['es'],
      fileName: () => 'teacher-tool-widget.js'
    },
    outDir: 'public',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './')
    }
  }
}