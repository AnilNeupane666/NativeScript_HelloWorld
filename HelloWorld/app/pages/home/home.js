const frameModule = require('ui/frame');


let navigate  = function(page){
    console.log(`Going to ${page}`);
    frameModule.topmost().navigate(`pages/${page}/${page}`);
}


exports.onAboutTap = function(){
   navigate('about');
}

exports.onContactUsTap = function(){
navigate('contact-us');
}
exports.onReposTap = function(){
    navigate('repos');
}
exports.onProfileTap = function(){
        navigate('profile');
}
exports.onImageTap = function(){
    navigate('images');
}