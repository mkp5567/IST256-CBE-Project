$(document).ready(function(){
    console.log("Ready!");
    displayRecipes();
});

function displayRecipes(){
    var friesRecipe= ["Black pepper", "Oregano", "Olive oil", "Garlic", "Salt", "Potatoes", "Onions"];
    
    var content1 = $("#recipe1");


    for (i=0; i<friesRecipe.length; i++){
        let ul = $(`<ul></ul>`).appendTo(content1);
        let li = $(`<li>${friesRecipe[i]}</li>`).appendTo(ul);
    }



}