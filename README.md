# Interledger Protocol Interface
Interledger is working towards a more equitable and creative global society through an open payments network in which anyone can seamlessly earn, share, buy, sell, and trade with anyone else in the world.

## Installing Node
In order to use Express you will first have to install Nodejs and the Node Package Manager (NPM) on your operating system.

Installing Node and NPM on Windows and macOS is straightforward because you can just use the provided installer:

Download the required installer:
Go to https://nodejs.org/en/
Select the button to download the LTS build that is "Recommended for most users".
Install Node by double-clicking on the downloaded file and following the installation prompts.

### Testing your Nodejs and NPM installation
The easiest way to test that node is installed is to run the "version" command in your terminal/command prompt and check that a version string is returned:
```bash
$ node -v
```
The Nodejs package manager NPM should also have been installed, and can be tested in the same way:
```bash
$ npm -v
```

## Using NPM
Next to Node itself, NPM is the most important tool for working with Node applications. NPM is used to fetch any packages (JavaScript libraries) that an application needs for development, testing, and/or production, and may also be used to run tests and tools used in the development process. 
You can manually use NPM to separately fetch each needed package. Typically we instead manage dependencies using a plain-text definition file named package.json.

### Adding dependencies
The following steps show how you can use NPM to download a package, save it into the project dependencies, and then require it in a Node application.

1. First create a directory for your new application and navigate into it:
```bash
mkdir myapp
cd myapp
```
2. Use the npm init command to create a package.json file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is index.js). For now, just accept the defaults:
```bash
npm init
```
3. Now install Express in the myapp directory and save it in the dependencies list of your package.json file
The request module is like any of the other packages you’ve used so far and can be added to your project via npm. To install the latest version and add it to the package.json file, head to terminal, and type the following command:
```bash
$ npm install --save request
```
```JS
const request = require('request');
```

Adding request and default API options to the locations.js controllers file
```JS
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}
```

Using the request module


## Links
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
https://livebook.manning.com/book/getting-mean-with-mongo-express-angular-and-node-second-edition/chapter-7/28
https://github.com/request/request
