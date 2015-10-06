
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
