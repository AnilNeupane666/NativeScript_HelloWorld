const observable = require('data/observable');
const axios = require('axios');

let user = observable.fromObject({
    id: 'AnilNeupane666',
    name: 'unknown',
    nickname: 'unspecified',
    company: 'unemployed',
    repos: 'find out yourself',
    followers: ' donot have any'
});

exports.onLoaded = function(args){
    let page = args.object;
    page.bindingContext = user;

    exports.onVisitGithub = function() {
        dialogModule.alert('Submitted message successfully');
    }
    

// Make a request for a user with a given ID
axios.get('https://api.github.com/users/' +user.id)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

}