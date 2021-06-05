---
title: "How to use the tailwindcss/typography plugin"
date: "2021-06-05"
tags: ["tailwindcss"]
cover_image: "https://res.cloudinary.com/tizzertuna/image/upload/v1622889341/Articles/article_5_2x_vspcfv.png"
description: "A tutorial on the tailwindcss/typography plugin which uses a set of prose classes to create beautiful typographic defaults"
---

I recently came across the [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography).
This plugin provides a beautiful set of `prose` classes which you can use to add styling to HTML that you have no control of (such as rendered HTML from Markdown).

This article assumes you have basic knowledge in TailwindCSS. If you are new to TailwindCSS you can have a look at their [installation guide](https://tailwindcss.com/docs/installation)
and here is a great course from [Scrimba](https://scrimba.com/learn/tailwind) that can help you learn the basics.

### 1. Install the tailwindcss/typography plugin

To install the plugin you can either use yarn or npm

```bash
npm install @tailwindcss/typography

#or

yarn add @tailwindcss/typography
```

### 2. Add the plugin to your tailwind config file

```js
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
```

### Add prose class to your html

Start by adding the base `prose` class then followed by the size-modifiers for example  `prose-sm`,  `prose-lg`,  `prose-xl` and `prose-2xl`.
Without the base `prose` class it will not work.

```html
<article class="prose prose-lg">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque nec lacued eu odio nec nisl varius placerat. 
    In dapibus a lacus vitae fringilla.
    </p>
    <p>
    Donec condimentum tellus augue, eu lacinia est facilisis eu.
    Suspent ipPris a, cursus augue. Sed vitae dictum diam, id interdum ex.
    </p>
    <p>
    Nunc in nunc sed urna congue facilisis. In ullamcorper,
    nunc eget convallis imperdiet, quam felis rhoncus leo, id rhoncus erat leo vel 
    </p>
</article>
```

And that’s pretty much it. You will now have styled content and not have to worry about styling each element individually.

Here is a live [demo](https://tailwindcss-typography.netlify.app/) of content that is styled using this plugin.

Thank you for reading ❤️
