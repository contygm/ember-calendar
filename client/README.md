# Ember Calendar
[Udemy Course Link](http://www.udemy.com/complete-ember-2-developer-course)

Description from Udemy: Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.

## Getting Started

`ember new name-of-app` : Create new empty project

`ember g model name-of-model` : Generates model and test file

`ember g route name-of-route` : Generates route, template, test, updates router file

`ember g route name-of-route --path=/name-of-route`

`ember g controller name-of-app`

##Conventions
- ember component names need dash in them
- integration tests are for components

## Models
- Blue print of data structures

## Actions
- model manipulations are best in Controller
- transitions best in Routes
- Controller bubbles up to Route, but not necessarily a good idea to have one action split in 2

```ember serve --proxy http://localhost:4300```

`node server`

https://www.emberaddons.com/
