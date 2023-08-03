$("li:nth-child(1)").on("click", function(){
  $("li").toggleClass("active");
});

$("a").on("click", function(e){
  e.preventDefault();
});