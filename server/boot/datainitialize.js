'use strict';

module.exports = function (app)
{

  let User = app.models.AppUser;
  let Wallet = app.models.Wallet;


  User.create({
      email: 'admin@fakepagopa.it',
      fullname: 'Administrator',
      fiscalcode: 'ADMIN',
      password: 'admin'
    },
    function (err, userInstance)
    {
      if (err)
      {
        console.error(JSON.stringify(err));
      }
      console.log('Created User > ' + JSON.stringify(userInstance));

      Wallet.create({
          number: '3759 876543 02001',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '4324 5201 6988 0454',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '5400 4708 6234 2849',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

    });

  User.create({
      email: 'alessio.saltarin@fakepagopa.it',
      fullname: 'Alessio Saltarin',
      fiscalcode: 'SLTLSS70M26F205X',
      password: 'doctor'
    },
    function (err, userInstance)
    {
      if (err)
      {
        console.error(JSON.stringify(err));
      }
      console.log('Created User > ' + JSON.stringify(userInstance));

      Wallet.create({
          number: '3759 876544 02001',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '4324 5201 6989 0454',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '5400 4708 6235 2849',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

    });

  User.create({
      email: 'flavio.giobergia@fakepagopa.it',
      fiscalcode: 'GBRFLV93M03L219L',
      fullname: 'Flavio Giobergia',
      password: 'fakepagopa'
    },
    function (err, userInstance)
    {
      if (err)
      {
        console.error(JSON.stringify(err));
      }
      console.log('Created User > ' + JSON.stringify(userInstance));

      Wallet.create({
          number: '3759 876545 02001',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '4324 5201 6980 0454',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '5400 4708 6236 2849',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

    });

  User.create({
      email: 'maria.rossini@fakepagopa.it',
      fiscalcode: 'RSSMRA80A41F205B',
      fullname: 'Maria Rossini',
      password: 'fakepagopa'
    },
    function (err, userInstance)
    {
      if (err)
      {
        console.error(JSON.stringify(err));
      }
      console.log('Created User > ' + JSON.stringify(userInstance));

      Wallet.create({
          number: '3759 876546 02001',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '4324 5201 6981 0454',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '5400 4708 6237 2849',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

    });

  User.create({
      email: 'elena.zambrelli@fakepagopa.it',
      fiscalcode: 'LNEZBR86A41F205R',
      fullname: 'Elena Zambrelli',
      password: 'fakepagopa'
    },
    function (err, userInstance)
    {
      if (err)
      {
        console.error(JSON.stringify(err));
      }
      console.log('Created User > ' + JSON.stringify(userInstance));

      Wallet.create({
          number: '3759 876547 02001',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '4324 5201 6982 0454',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });

      Wallet.create({
          number: '5400 4708 6238 2849',
          lastUsage: new Date(2018, 5, 15),
          appUserId: userInstance.id,
          expires: new Date(2021, 6, 15)
        },
        function (err, walletInstance)
        {
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        });
    });


};
