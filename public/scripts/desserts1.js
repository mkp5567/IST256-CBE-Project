$(document).ready(function(){
    console.log("Ready!");
    displayDesserts();
});


function displayDesserts(){
    var milkshakeRecipe = ["chocolate ice cream", "chocolate syrup", "cocoa powder", "chocolate", "milk", "sugar"];

    var recipe1 = $("#milkshake");

    let ul = $(`<ul></ul>`).appendTo(recipe1);
    
    for(i = 0; i < milkshakeRecipe.length; i++){
        
        let li = $(`<li>${milkshakeRecipe[i]}</li>`).appendTo(ul)
    }
}