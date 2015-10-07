
jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
  console.log(data);
});
$('a').on('click', function(){
  console.log('i am in a');
  $('a').removeClass('active');
  $(this).addClass('active');

})


// //when we click in repos we add class active
// $('a.repos').on('click', function(){
//   console.log('i am in a.repos');
//   //$('a.contri').removeClass('active');
//   $(this).addClass('active');
// });
//
// //when we click in contributions we add class active
// $('a.contri').on('click', function(){
//   console.log('i am in a.contri');
//   $(this).addClass('active');
// })
//
// //when we click in public activity, we add active
// $('a.publact').on('click', function(){
//   console.log('i am in a.publact');
//   $(this).addClass('active');
// })

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


//with lodash
//we defined the var compiled storing dictionary with key name and value string name.
//$.getJSON('../../apis/github/users/rosalsm.json',function(info){
  //console.log('i am in json');
  //var compiled = _.template(< % = name % >);
 //$('.theoctocat').html('<h3>'+ info.compiled +'</h3>');

//or like this
 //var compiled = _.template ('<h3>< % = name % ></h3>');
