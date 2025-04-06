const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AT_bso3P8j8hM3YzJIa7TYFUXRPS2kaHX5dBfYfBG3LDT_tUQ9CxYbz5yQogi150S61fopkrNg86iCFA",
  client_secret: "EAv4M0XoJsZ_oPgDymfPMKvcGdAc2pTiglr8kcmxUh1tIxjYrw2TFxBqcuAoNJmiYgbZnp_V-Wme8qNQ",
});

module.exports = paypal;