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
