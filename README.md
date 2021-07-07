![Logo](https://alexandrebarros.com/global/interledger/interledger.png?alt=interledger-protocol)

# :handshake: Interledger Protocol Interface

Interledger is working towards a more equitable and creative global society through an open payments network in which anyone can seamlessly earn, share, buy, sell, and trade with anyone else in the world.

## Overview

This tutorial describes how to:

1. Create an account in at [Ripple](https://ripplex.io/).
2. Fund your account using the TestNet Rainmaker \(our version of a "faucet"\).
3. Grab an API token.
4. Check your balance.
5. Pay a Friend.
6. Get paid.

## 1. Create your wallet

Create a new account at [Ripple](https://ripplex.io/). Once signed-in, navigate to your Interledger [Testnet Wallet](https://ripplex.io/portal/ilp-wallet).

## 2. Fund your account

The Xpring Testnet wallet has a rainmaker accounts that you can use to send yourself some faux XRP. Click the button in the wallet to grant yourself some XRP.

The Rainmaker is available to any anyone who asks - after all, this is just a Testnet!

## 3. Grab an API Token

In the Xpring Wallet, you can get an API token by pressing the "Create a Token" button and copy the value somewhere safe. Once you close the modal window, the API token will be removed from the browser's DOM, and is otherwise unrecoverable via the Xpring Wallet.

Every time you push the "**Create a Token**" button, any previously created tokens are invalidated, so if you click this button, **anything using an older token will stop working**.

## 4. Check Your Balance

To see how much money is in your account, try the following call:

```bash
curl --location 
--request GET 'https://xpring.io/portal/ilp/hermes/accounts/{your-account-id}/balance' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}'
```

Be sure to replace **`{your-account-id}`**and**`{auth_token}`**with values from your Xpring Wallet account.

This request will return a JSON payload similar to this one:

```javascript
{
  "assetCode": "XRP",
  "assetScale": 9,
  "accountBalance": {
    "accountId": "alerapchan",
    "netBalance": 49997000000,
    "clearingBalance": 49997000000,
    "prepaidAmount": 0
  }
}
```

## 5. Pay a Friend

Spread the love to a friend by making a payment to a payment pointer. In this case, try sending value to a different wallet on the testnet. Maybe someone at [https://rafiki.money](https://rafiki.money).

```bash
curl --location \
--request POST 'https://xpring.io/portal/ilp/hermes/accounts/{your-account-id}/pay' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {auth_token}' \
--data-raw '{
  "amount": "1000000",
  "destinationPaymentPointer": "$rafiki.money/p/{receiver-email-address}"
}'
```

Be sure to replace **`{your-account-id}`** and **`{auth_token}`**with the values returned in Step 1!

This request will return JSON similar to the JSON below, representing 1,000 XRP drops paid:

```text
{
  "originalAmount": 1000000,
  "amountDelivered": 1267,
  "amountSent": 1000000,
  "successfulPayment": true
}
```

Note the meaning of the following fields:

**originalAmount**: the amount that you wanted to send.  
**amountDelivered**:  the amount your friend actually received.  
**amountSent**: is the amount that actually got sent to your friend.

## 6. Get Paid

Try sending money back to your Xpring wallet using the PaymentPointer in the Xpring wallet UI. Then, check your balance, either programmatically or in the UI, to see that the money has arrived in your account. 

# :rocket: Requirements
## Installing Node
In order to use Axios you will first have to install Nodejs and the Node Package Manager (NPM) on your operating system.

Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). As such, the environment omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries.

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

### Using NPM
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
3. Now install Axios in the myapp directory and save it in the dependencies list of your package.json file.
The axios module is like any of the other packages you’ve used so far and can be added to your project via npm. To install the latest version and add it to the package.json file, head to terminal, and type the following command:
```bash
$ npm install --save axios
```

# :technologist: Writing NodeJS Code
Axios is designed to be the simplest way possible to make http calls.

## checkBalance.js
```JS
var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://ripplex.io/portal/ilp/hermes/accounts/alerapchan/balance",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ODczZGRjZjAtODRkMC00NzRiLTlkN2QtYjRmOTc3ZmY4NWVj",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

```

## payFriend.js
```JS
var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://ripplex.io/portal/ilp/hermes/accounts/alerapchan/pay",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer ODczZGRjZjAtODRkMC00NzRiLTlkN2QtYjRmOTc3ZmY4NWVj",
  },
  data: {
    amount: "1000000",
    destinationPaymentPointer: "$rafiki.money/p/contato@alexandrebarros.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

```

## Run the Code
```bash
node checkBalance.js
node payFriend.js

```

# :mailbox: About the Project

## Authors

Name  | Git Hub | LinkedIn | Twitter
------------- | ------------- | ------------- | -------------
Alexandre Rapchan B. Barros  | [@AleRapchan](https://www.github.com/AleRapchan) | [Alexandre-rapchan](https://www.linkedin.com/in/alexandre-rapchan/) | [@rapchan](https://www.twitter.com/rapchan/) 

## Support

For support, email blockchain@alexandrebarros.com or join our Slack channel.
	
## Revisions
Date  |  Revision  |  Description  |  Author
--------  |  --------  |  --------  |  --------	
05/07/2021  |  `0.1`  |  First Draft  |  Alexandre Rapchan B. Barros
07/07/2021  |  `0.2`  |  Final Revision  |  Alexandre Rapchan B. Barros

## Links
- [Manage Interledger Accounts Programmatically](https://interledger.org/developer-tools/get-started/manage-accounts/)
- [Rafiki Wallet](https://rafiki.money/overview)
- [Ripple Wallet](https://ripplex.io/portal/launchpad)
- [Request - Simplified HTTP client](https://github.com/request/request)
- [Making HTTP requests with Nodejs](https://nodejs.dev/learn/making-http-requests-with-nodejs)
- [Ways to Make HTTP Requests in NodeJS](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)
- [How to use an API with NodeJS](https://rapidapi.com/blog/how-to-use-an-api-with-node-js/)
- [Xpring-JS - Usage: ILP](https://github.com/xpring-eng/xpring-js)
- [Secure Rest API in NodeJS](https://www.toptal.com/nodejs/secure-rest-api-in-nodejs)
- [NodeJS Development Environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- [Consuming a REST API](https://livebook.manning.com/book/getting-mean-with-mongo-express-angular-and-node-second-edition/chapter-7/28)


## MIT License

Copyright (c) 2021 Rapchan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
