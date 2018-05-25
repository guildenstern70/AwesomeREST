'use strict';

module.exports = function(app) {
  let Wallet = app.models.Wallet;

  Wallet.create({
      number: '3759 876543 02001',
      lastUsage: new Date(2018, 5, 15),
      owner: 'Alessio Saltarin',
      expires: new Date(2021, 6, 15)
    },
    function(err, walletInstance) {
      console.log('Created Wallet > ' + JSON.stringify(walletInstance));
    });

  Wallet.create({
      number: '4324 5201 6988 0454',
      lastUsage: new Date(2018, 4, 1),
      owner: 'Flavio Giobergia',
      expires: new Date(2020, 4, 30)
    },
    function(err, walletInstance) {
      console.log('Created Wallet > ' + JSON.stringify(walletInstance));
    });

  Wallet.create({
      number: '5400 4708 6234 2849',
      lastUsage: new Date(2018, 5, 15),
      owner: 'Laura Moretti',
      expires: new Date(2019, 1, 11)
    },
    function(err, walletInstance) {
      console.log('Created Wallet > ' + JSON.stringify(walletInstance));
    });

  Wallet.create({
      number: '4000 1234 5678 9010',
      lastUsage: new Date(2018, 5, 15),
      owner: 'Davide Di Meco',
      expires: new Date(2022, 12, 29)
    },
    function(err, walletInstance) {
      console.log('Created Wallet > ' + JSON.stringify(walletInstance));
    });

};

