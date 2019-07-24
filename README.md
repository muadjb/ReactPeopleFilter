This demo is built with

1. [Create React App](https://github.com/facebook/create-react-app).
2. [Typescript](https://www.typescriptlang.org/)
3. [Tailwind CSS](https://tailwindcss.com/)
4. [Ramda](https://ramdajs.com/)
5. [Mockaroo](https://mockaroo.com/)

## Overview

I'm exploring several aspets of React's architecture using a multiple filtered table. In Angular, I've discovered a good solution by combining filter predicates and observables. I'm curious to explore the same problem with multiple solutions offered by React.

## Goals

- Use different state management
  - Prop drilling
  - Redux / Mobx
  - Context API
- Explore Netlify functions to mimic backend
- Rely on functional components and hooks exclusively
- Compare async experience with promises vs observables

## Current Progress

- The basic table and filter interface works although it needs better styling.
- All the filters work and combine effetively.
- Predicate logic is spread into small files
- Overall design is decenty modular.

## To do

- Split table into more components
- Add a comparison dropdown to filter age by conitions like <= or !=
- Explore other state management tools
- Build simple backend to enable async data transfer
- Implement observable and promise based async solutions
