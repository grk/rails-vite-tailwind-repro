import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    Vue(), RubyPlugin(),
  ],
})
