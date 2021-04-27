$(document).ready(function(){
   console.log("Ready!");
   getPizzaData();
   getSteakData();
   getFishData();
});
 
//--------------------------------------------------------------------
function getPizzaData(){
   $.ajax({
       type: 'GET',
       url: '/entrees/'
   }).done(function(response){
       displayPizzaData(response);
   });

}
function getSteakData(){
   $.ajax({
       type: 'GET',
       url: '/entrees/1'
   }).done(function(response){
       displaySteakData(response);
   });

}
function getFishData(){
   $.ajax({
       type: 'GET',
       url: '/entrees/2'
   }).done(function(response){
       displayFishData(response);
   });

}
//-----------------------------------------------------------------------
function displayPizzaData(data){
   var recipe1 = $("#pizza");

   let ul = $(`<ul></ul>`).appendTo(recipe1);


   data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
       let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
   });
}
function displaySteakData(data){
   var recipe1 = $("#steak");

   let ul = $(`<ul></ul>`).appendTo(recipe1);

   data.results.forEach(ingredient=>{
    let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
    let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
   });
}
function displayFishData(data){
   var recipe1 = $("#fish");

   let ul = $(`<ul></ul>`).appendTo(recipe1);

   data.results.forEach(ingredient=>{
       let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
       let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
   });
}
