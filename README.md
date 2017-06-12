# tech-forum

#### By Aaron Nguyen

Practice application built in Node.JS and the Ember framework. Utilizes Ember to create a project, connect the model with a firebase database. Also includes a one-to-many relationship regarding question to answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tech-forum`
* `npm install`

## Technologies Used

HTML/CSS
Bootstrap
Javascript/Node.JS
Ember
Bower

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Project Setup
  * Node.js/npm
  * Ember
  * Emberfire
  * Firebase

2. Layout
  * Two model with a one to many association
  * Questions include: topic, text, author and image.
  * Answers include: author and text.
  * Navbar
  * Routes: index, one-question, about, contact
  * Components: question-tile, new-question, answer-tile, new-answer, update-question

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### License

Copyright 2017 Aaron Nguyen
