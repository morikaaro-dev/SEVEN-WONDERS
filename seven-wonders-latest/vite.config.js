import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import ts from 'typescript';
// In-process JSX compilation keeps production builds compatible with restricted hosts.
export default defineConfig({
  server: { allowedHosts: ["terminal.local"] },
  resolve: { preserveSymlinks: true },
  esbuild: false,
  plugins: [{
    name: 'jsx-compiler', enforce: 'pre',
    transform(code, id) {
      let output = code.replaceAll('process.env.NODE_ENV', '"production"');
      if (id.endsWith('.jsx')) output = ts.transpileModule(output, {
        compilerOptions: { jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext }
      }).outputText;
      return output === code ? null : { code: output, map: null };
    }
  }, tailwindcss()],
  build: { target: 'esnext', minify: false, cssMinify: false }
});
