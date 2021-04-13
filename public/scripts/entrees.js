$(document).ready(function(){
   console.log("Ready!");
   showRecipes();
});
 
function showRecipes(){
   var steak = ["Sirloin Steak", "olive oil", "red wine", "butter"];
 
   var first = $("#showRecipes");
 
   for(i = 0; i<steak.length; i++){
       let ul = $(`<ul></ul>`).appendTo(first);
       let li = $(`<li>${steak[i]}</li>`).appendTo(ul);
   }
}
