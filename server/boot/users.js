'use strict';

module.exports = function(app) {
  let User = app.models.User;
  User.create({email: 'admin@fakepagopa.it', password: 'admin'},
    function(err, userInstance) {
      console.log('Created User > ' + JSON.stringify(userInstance));
    });
  User.create({email: 'alessio@fakepagopa.it', password: 'doctor'},
    function(err, userInstance) {
      console.log('Created User > ' + JSON.stringify(userInstance));
    });
};
