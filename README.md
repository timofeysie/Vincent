# Vincent 

This is a guessing game about art.  The player is shown a painting, and a list of possible artists.  There are five artists to choose from the current list which will be expanded soon.Currently it is mainly post-impressionists, with a few impressionists.
The player is scored by the number of correct choices versus the number of guesses they make.  
The player can also browse the list of paintings by artists.
We scrape Wikidata for a list of works by a particular artist to assemble the data on the server.  This is done in the Theo node.js project.

## Quickstart

To start the web server:
```
$ http-server -a localhost -p 8000
```

To run the unit tests with Karma, use the node task:
```
$ node test
```

For e2e tests, With the server running from the root directory, run:
```
$ cd app
$ webdriver-manager start
```
Then, in a separate terminal, run:
```
$ protractor e2e-tests/protractor.conf.js
```
Green means the code is clean!

## Development
The app is being hosted for development by Cloud9 and is live at [Vincent](https://vincent-timofeysie.c9.io/app/)

See the Getting Started section below for detailed installation instructions about setting up and running this project.

## Features to implement
* title for browse artists
* facebook like
* share on social media/email link to painting
* rounds with increasing difficulty
* difficulty level on paintings (keep track of correct/incorrect scores by painting and then calculate a difficulty rating based on this)
* history of game paintings (is: scroll back to the previous 20 pictures, or show a thumbnail field)
* if the view is collapsed, then choosing an artist should collapse the left view

## The TODO List
Generate a todo.md from javascript files with the [Gulp Todo](https://npmjs.org/package/gulp-todo).  Comments should be in this format, 'TODO:' not '@TODO'.
Generate the list as follows:
$ gulp todo

## Tests

This project has Jasmine unit tests run by Karma and e2e tests run with Protractor using the Webdriver.  See the Quickstart section to for use.

### Run End-to-End Tests

To run your e2e tests you should install and configure Protractor and the Selenium WebServer.  These are already specified as npm dependencies within `package.json`. Simply run these
terminal commands:

```
$ npm update
$ webdriver-manager update
```

Your can read more details about Protractor and e2e here: http://angular.github.io/protractor/#/
for more details on Protractor.

 1. Start your local HTTP Webserver: `live-server` or `http-server`.

```console
cd ./app; live-server;
```

sudo chown -R $USER /usr/local/lib/node_modules/webdriver-manager/selenium

Note: since `live-server` is working on port 8080, we configure the `protractor.conf.js` to use
`baseUrl: 'http://localhost:8080'`

2. In another tab, start a Webdriver instance:
 
```console
webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor tes will send requests to this server to control a local browser. You can see information about the status of the server at `http://localhost:4444/wd/hub`. If you see errors, verify path in `e2e-tests/protractor.conf.js` for `chromeDriver` and `seleniumServerJar` to your local file system.

3. Run your e2e tests using the `test` script defined in `package.json`:
 
```console
npm test
```

This uses the local **Protractor** installed at `./node_modules/protractor`


## The Seed

The AngularJS Material starter applications was used as a skeleton application.
[AngularJS Material](https://github.com/angular/material-start) 
It is comprised of a Side navigation area and a content area.  The responsive layout changes to hide the user list, reveal the **menu** button.

The app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`
*  ARIA features are supported by Angular Material and warnings can be used to improve accessibility.

Traditional development with ES5 standards and solutions are presented here.  The seed tutorials were presented live at **ng-conf 2015, Utah**.

Developers should checkout the following repository branches for:


## Getting Started

The project was cloned from this Material Angular repository:
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```
* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
material-start changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/           --> all app specific modules
     painters/              --> package for painters features (formerly users)
  index.html            --> app layout file (the main html template file of the app)
  app.js 				--> Main script declares the vincentApp module
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd app
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


## Contact

For more information on this project contact the lead developer through his GitHub page.
