# Vincent 

This is a guessing game about art.  The player is shown a painting, and a list of possible artists.  There are five artists to choose is the current list which will be expanded soon.
The player is scored by the number of correct choices versus the number of guesses they make.  Currently it is mainly post-impressionists, with a few impressionists.
The player can also browse the list of paintings by artists.
We scrape Wikidata for a list of works by a particular artist to assemble the data.  This is done in the Theo node.js project.

## Quickstart

start the web server:
```
cd app
http-server -a localhost -p 8000
```

The app is being hosted for development by Cloud9 and is live at [Vincent](https://vincent-timofeysie.c9.io/app/)

See the Getting Started section below for detailed installation instructions.

## Features to implement
* title for browse artists
* facebook like
* share on social media/email link to painting
* rounds with increasing difficulty
* difficulty level on paintings (keep track of correct/incorrect scores by painting and then calculate a difficulty rating based on this)
* history of game paintings (is: scroll back to the previous 20 pictures, or show a thumbnail field)
* if the view is collapsed, then choosing an artist should collapes the left view

## Tests

We have e2e and unit tests written in Jasmine and run with Protractor using the Webdriver to start the Selenium server.  This will start up a server:
```
$ webdriver-manager start
```
To run the tests, use the following command:
```
$ protractor protractor.conf.js
```

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
