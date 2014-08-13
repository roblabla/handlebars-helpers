HandlebarsHelpers
=================

A set of standard handlebars helpers, that attempt to be as consistent as
possible.

## The Problem
At first, we at upload.li wanted to use assemble's handlebars-helpers
repository. However, that deemed to be more complicated than necessary.
First of all, its installation was more involved than simply doing an
npm install --save handlebars-helpers. And even once it was successfully
installed, some of their helpers were inconsistent (
[lowercase](https://github.com/assemble/handlebars-helpers/blob/master/lib/helpers/helpers-strings.js#L91) vs
[uppercase](https://github.com/assemble/handlebars-helpers/blob/master/lib/helpers/helpers-strings.js#L161))

## Helpers

We have three types of helpers : 

- Expression Helpers
- Block Helpers
- Hybrid Helpers

Further documentation pending
