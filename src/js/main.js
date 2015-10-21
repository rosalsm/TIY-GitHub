//1
// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//   console.log(data);
// });
// $('a').on('click', function(){
//   console.log('i am in a');
//   //$('a').removeClass('active');
//   $(this).toggle('active').siblings().removeClass('active');
//
// })
//$('.tabs a[href^='#']')
//$('.tabs > a').on('click', function(){
//$(this).addClass()
//var panelId=$(this).attr('href') getting the attribute href in the panelId
//$(panelId).addClass('active').siblings().removeClass()
//})
//2
//TODO add iteration with
// $('a').each(function(){  for each a element
//  $('section').each(function(){}) the correct panel
//})
$('a.contributions').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('section.contributions').addClass('active').siblings().removeClass('active');
})
$('a.repos').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('section.repos').addClass('active').siblings().removeClass('active');
})
$('a.public-activity').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
  $('section.public-activity').addClass('active').siblings().removeClass('active');
})
//.filter('[href="#repositories"]')
//.eq(0)
//.trigger('click');//or click()






//3
// getting info from rosalsm.json and linked in index.html
//based on code found in http://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm
$.getJSON('../../apis/github/users/rosalsm.json',function(info){
  console.log('i am in json');
 $('.theoctocat').html('<h3>'+info.name+'</h3>');
 $('.octocat').html('<p>'+info.login+ '</p>');
 $('#company').html('<li>'+info.company+'</li>');
 $('#location').html('<li>'+info.location+'</li>');
 $('.em').html('<a>'+info.email+'</a>');
 $('.site').html('<a>'+info.blog+'</a>');
 $('#date').html('<li>'+info.created_at+'</li>');
});




//4
//with lodash
//we defined the var compiled storing dictionary with key name and value string name.
//$.getJSON('../../apis/github/users/rosalsm.json',function(info){
  //console.log('i am in json');
  //var compiled = _.template(< % = name % >);
 //$('.theoctocat').html('<h3>'+ info.compiled +'</h3>');

//or like this
 //var compiled = _.template ('<h3>< % = name % ></h3>');


$(function(){
  $(".submit-comment").click(function(){
  $(".comment").submit(function(e){
    e.preventDefault();
    console.log("aprieta el boton");
  })
})
});


//TODO change the {{}} for the small-rect in order to use angular and comment out ajax line 43
//5 with Angular js kind of...
;(function(){ //IIFE
  //var app = angular.module('TIY-GitHub', [ ]);

    app.run(function($http, $rootScope){
      $http.get('/apis/github/users/rosalsm.json') //path to my .json
        .then(function(response){
          //console.log(response.data[4].name);
          //$rootScope.html_url = response.data[4].html_url;
          //$rootScope.name = response.data[4].name;
          // previous steps
          // .user includes all html_url name
          $rootScope.user = response.data;
          console.log(arguments);
        });
      });

      app.run(function($http, $rootScope){
        $http.get('/apis/github/users/rosalsm/repos.json')
          .then(function(response){
           //$rootScope.repos = {
          //html_url: response.data[4],
          //name: response.data[4],
          //description: response.data[4]
          //}
          $rootScope.repos = response.data;
          console.log(response.data);

        });
      });

})();//end IIFE
