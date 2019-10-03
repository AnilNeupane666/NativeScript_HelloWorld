const dialogModule =require('ui/dialogs');
const observable = require('data/observable');

// let message = new observable.Observable();
// message.message = "";
// message.subject = "";

let message = observable.fromObject({
    subject: "",
    message: ""
});

exports.onSubmit = function() {
    console.log("Submitting message" + JSON.stringify(message));
    dialogModule.alert('Submitted message successfully');
}

exports.onLoaded = function(args){
    let page = args.object;
    page.bindingContext = message;
}

exports.onVisitGithub = function() {
    dialogModule.alert('Submitted message successfully');
}