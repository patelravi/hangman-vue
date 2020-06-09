# Hangman Game With VueJs & Typescript

You can play this game at https://vue-hangman.netlify.app

## List of valid words are given below.

Bahrain,Bangladesh, Bolivia, Botswana, Brazil, Canada, Chad, Chile, China, Colombia

## Frameworks/Packages Used:

- VueJs
- Typescript - with class type vue components
- Element UI (https://element.eleme.io/#/en-US)

## Project Structure

1. `src/pages` directory contains all the web pages to be rendered by vue router. Each page is further divided into three files: page.vue file which contains only the html/vue template, {page}.scss file which contains the style of the page, {page}.ts file which exposes a class acting as a component for the {page}.vue file.
2. `src/components` directory contains all the re-usable components inside the vue pages like re-usable pop-ups etc.
3. `src/modules` directory contains all the business logic, in this project's case hangman algorighm is implemented at `src/modules/hangman.ts.`

## Technical Details:

1. Building Responsive UI - ElementUI with custom media queries are used for building responsive ui. The device dimentions for media query are mentioned in `assets/_variables.scss` file.
2. Hosting - netlify.com is used for hosting the site. Netlify having tight integrations with github, provides out of the box CI/CD, self-managed SSL, post deployment processes, domain management and more.

## How to setup on local machine?

1. Clone repo to local machine.
2. Install npm dependencies using `npm install`.
3. Start the game using `npm run serve`.
