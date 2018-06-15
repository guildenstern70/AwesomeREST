'use strict';

module.exports = function (app)
{

  let User = app.models.AppUser;
  let Wallet = app.models.Wallet;
  let CreditCard = app.models.CreditCard;
  let Transaction = app.models.Transaction;

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
          favourite: false,
          idPagamentoFromEC: 'X3298K',
          lastUsage: new Date(2021, 6, 15),
          matchedPsp: true,
          pspEditable: false,
          userId: userInstance.id,
        },
        function (err, walletInstance)
        {
          walletInstance.creditCard.create({
            brandLogo: 'AMERICAN EXPRESS',
            expireMonth: 10,
            expireYear: 2020,
            flag3dsVerified: true,
            holder: 'ADMINISTRATOR',
            pan: '3759 876543 02001',
            securityCode: '123'
          });
          console.log('Created Wallet > ' + JSON.stringify(walletInstance));
        }
      );


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

      CreditCard.create(
        {
          brandLogo: 'AMERICAN EXPRESS',
          expireMonth: 10,
          expireYear: 2020,
          flag3dsVerified: true,
          holder: 'ALESSIO SALTARIN',
          id: 1,
          pan: '3759 876543 02001',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));

              const amount = {
                amount: 20000,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              const fee = {
                amount: 50,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              const grandTotal = {
                amount: 20050,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              Transaction.create({
                  Amount: amount,
                  created: new Date(2018, 6, 15),
                  description: 'Pagamento TARI',
                  error: false,
                  Fee: fee,
                  GrandTotal: grandTotal,
                  idPayment: 2,
                  idStatus: 0,
                  merchant: 'Intesa',
                  nodoIdPayment: '0Z',
                  paymentModel: 12,
                  statusMessage: 'In process',
                  success: false,
                  walletId: walletInstance.id
                },
                function (err, transactionInstance) {
                  console.log('Created Transaction > ' + JSON.stringify(transactionInstance));
                }
              )
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'VISA',
          expireMonth: 4,
          expireYear: 2018,
          flag3dsVerified: true,
          holder: 'ALESSIO SALTARIN',
          id: 2,
          pan: '4324 5201 6989 0454',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'MASTERCARD',
          expireMonth: 9,
          expireYear: 2019,
          flag3dsVerified: true,
          holder: 'ALESSIO SALTARIN',
          id: 3,
          pan: '5400 4708 6235 2849',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {
          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

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

      CreditCard.create(
        {
          brandLogo: 'AMERICAN EXPRESS',
          expireMonth: 10,
          expireYear: 2020,
          flag3dsVerified: true,
          holder: 'FLAVIO GIOBERGIA',
          id: 4,
          pan: '3759 876543 02001',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'VISA',
          expireMonth: 4,
          expireYear: 2018,
          flag3dsVerified: true,
          holder: 'FLAVIO GIOBERGIA',
          id: 5,
          pan: '4324 5201 6989 0454',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));

              const amount = {
                amount: 25500,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              const fee = {
                amount: 150,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              const grandTotal = {
                amount: 255650,
                currency: 'EUR',
                currencyNumber: 0,
                decimalDigits: 2
              };

              Transaction.create({
                  Amount: amount,
                  created: new Date(2018, 6, 15),
                  description: 'Multa eccesso velocità',
                  error: false,
                  Fee: fee,
                  GrandTotal: grandTotal,
                  idPayment: 2,
                  idStatus: 0,
                  merchant: 'Intesa',
                  nodoIdPayment: '0Z',
                  paymentModel: 12,
                  statusMessage: 'In process',
                  success: false,
                  walletId: walletInstance.id
                },
                function (err, transactionInstance) {
                  console.log('Created Transaction > ' + JSON.stringify(transactionInstance));
                }
              )
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'MASTERCARD',
          expireMonth: 9,
          expireYear: 2019,
          flag3dsVerified: true,
          holder: 'FLAVIO GIOBERGIA',
          id: 6,
          pan: '5400 4708 6235 2849',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

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

      CreditCard.create(
        {
          brandLogo: 'AMERICAN EXPRESS',
          expireMonth: 10,
          expireYear: 2020,
          flag3dsVerified: true,
          holder: 'MARIA ROSSINI',
          id: 7,
          pan: '3759 876543 02021',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'VISA',
          expireMonth: 4,
          expireYear: 2018,
          flag3dsVerified: true,
          holder: 'MARIA ROSSINI',
          id: 8,
          pan: '4324 5201 6989 0475',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'MASTERCARD',
          expireMonth: 9,
          expireYear: 2019,
          flag3dsVerified: true,
          holder: 'MARIA ROSSINI',
          id: 9,
          pan: '5400 4708 6235 2899',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );


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

      CreditCard.create(
        {
          brandLogo: 'AMERICAN EXPRESS',
          expireMonth: 10,
          expireYear: 2020,
          flag3dsVerified: true,
          holder: 'ELENA ZAMBRELLI',
          id: 10,
          pan: '3759 876543 02061',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {
          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'VISA',
          expireMonth: 4,
          expireYear: 2018,
          flag3dsVerified: true,
          holder: 'ELENA ZAMBRELLI',
          id: 11,
          pan: '4324 5201 6989 0435',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      CreditCard.create(
        {
          brandLogo: 'MASTERCARD',
          expireMonth: 9,
          expireYear: 2019,
          flag3dsVerified: true,
          holder: 'ELENA ZAMBRELLI',
          id: 12,
          pan: '5400 4708 6235 2829',
          securityCode: '123'
        },
        function (err, creditCardInstance)
        {

          console.log('Created CreditCard > ' + JSON.stringify(creditCardInstance));
          Wallet.create({
              favourite: false,
              idPagamentoFromEC: 'X3298K',
              lastUsage: new Date(2021, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.creditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

    });


};
