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
