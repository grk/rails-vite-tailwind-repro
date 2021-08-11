# README

This repo reproduces an issue with vite-ruby + tailwindcss in JIT mode.

When running `bin/vite dev`, the CSS does not update when new tailwind classes in files in purge directories appear. This works normally when running without `bin/vite dev` and refreshing the page.

Repro steps:

* run `bin/rails server`
* run `bin/vite dev`
* visit https://localhost:3000
* see background on the "hello vue3 + vite" header
* edit app/javascript/vue/components/HelloWorld.vue and change `bg-[#aabbee]` to some other hex
* see that the background doesn't change
* stop `bin/vite dev`
* refresh page - color changes
* change color in code, refresh page - color changes
