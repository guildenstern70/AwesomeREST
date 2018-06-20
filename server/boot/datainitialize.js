'use strict';

module.exports = function (app)
{

  const User = app.models.AppUser;
  const Wallet = app.models.Wallet;
  const CreditCard = app.models.CreditCard;
  const Transaction = app.models.Transaction;
  const Notice = app.models.Notice;

  const Entities = [
    {
      code: '328902083001',
      name: 'Comune di Gallarate - Settore Tributi',
      smallName: 'Comune di Gallarate',
      address: 'via Cavour, 2 - Palazzo Broletto, 21013',
      city: 'Gallarate (VA)',
      telephone: '+39 331 189318',
      webpage: 'http://comune.gallarate.va.it/tributi'
    },
    {
      code: '328902083002',
      name: 'Comune di Bereguardo - Settore Tributi',
      smallName: 'Comune di Bereguardo',
      address: 'via Rossetti, 33 - Castello di Bereguardo, 27021',
      city: 'Bereguardo (PV)',
      telephone: '+39 382 112133',
      webpage: 'http://comune.bereguardo.pv.it/tributi'
    },
    {
      code: '328902083003',
      name: 'Comune di Trezzano sul Naviglio - Settore Tributi',
      smallName: 'Comune di Trezzano s/N',
      address: 'via Martiri di Belfiore, 2 - 21013',
      city: 'Trezzano s/N (MI)',
      telephone: '+39 2 33189318',
      webpage: 'http://comune.trezzanosn.mi.it/tributi'
    },
  ];

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
          lastUsage: new Date(2018, 6, 15),
          matchedPsp: true,
          pspEditable: false,
          userId: userInstance.id,
        },
        function (err, walletInstance)
        {
          walletInstance.CreditCard.create({
            brandLogo: 'AMEX',
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
          brandLogo: 'AMEX',
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
                  amount: amount,
                  created: new Date(2018, 6, 15),
                  description: 'Pagamento TARI',
                  entity: Entities[0],
                  error: false,
                  fee: fee,
                  grandTotal: grandTotal,
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

      const notifiedAmount = {
        amount: 1200000,
        currency: "EUR",
        currencyNumber: 0,
        decimalDigits: 2
      };

      const currentAmount = {
        amount: 1200000,
        currency: "EUR",
        currencyNumber: 0,
        decimalDigits: 2
      };

      const fee = {
        amount: 150,
        currency: "EUR",
        currencyNumber: 0,
        decimalDigits: 2
      };

      const totalAmount = {
        amount: currentAmount.amount+fee.amount,
        currency: "EUR",
        currencyNumber: 0,
        decimalDigits: 2,
        id: 90
      };

      Notice.create(
        {
          paymentReason: 'TARI 2018',
          noticeCode: '89D2HDKKJDHEJ993982',
          executionDate: new Date(10,12,2018),
          expirationDate: new Date(21,12,2019),
          tranche: 'Unica',
          cbill: 'AOE02',
          iuv: '11111182909821080',
          notifiedAmount: notifiedAmount,
          currentAmount: currentAmount,
          fee: fee,
          totalAmout: totalAmount,
          userId: userInstance.id,
        }, function (err, noticeInstance)
        {
          if (err)
          {
            console.error(JSON.stringify(err));
          }
          console.log('Created Notice > ' + JSON.stringify(noticeInstance));
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
          brandLogo: 'AMEX',
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
                  amount: amount,
                  created: new Date(2018, 6, 15),
                  description: 'Multa eccesso velocità',
                  entity: Entities[1],
                  error: false,
                  fee: fee,
                  grandTotal: grandTotal,
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
          brandLogo: 'AMEX',
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
          brandLogo: 'AMEX',
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
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
              lastUsage: new Date(2018, 6, 15),
              matchedPsp: true,
              pspEditable: false,
              userId: userInstance.id,
            },
            function (err, walletInstance)
            {
              walletInstance.CreditCard.create(creditCardInstance);
              console.log('Created Wallet > ' + JSON.stringify(walletInstance));
            }
          );

        }
      );

    });


};
