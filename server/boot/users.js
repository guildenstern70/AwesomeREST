'use strict';

module.exports = function(app) {

  let User = app.models.AppUser;

  User.create({email: 'admin@fakepagopa.it', password: 'admin'},
    function(err, userInstance) {
      if (err)
        console.error(JSON.stringify(err));
      console.log('Created User > ' + JSON.stringify(userInstance));
    });

  User.create({email: 'alessio@fakepagopa.it', password: 'doctor'},
    function(err, userInstance) {
      if (err)
          console.error(JSON.stringify(err));
      console.log('Created User > ' + JSON.stringify(userInstance));
    });


};
