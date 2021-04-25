$(document).ready(function(){
    console.log("Ready!");
    // displayDesserts();
    getDessertData();
    getCookieData();
});


// function displayDesserts(){
//     var milkshakeRecipe = ["chocolate ice cream", "chocolate syrup", "cocoa powder", "chocolate", "milk", "sugar"];

//     var recipe1 = $("#milkshake");

//     let ul = $(`<ul></ul>`).appendTo(recipe1);
    
//     for(i = 0; i < milkshakeRecipe.length; i++){
        
//         let li = $(`<li>${milkshakeRecipe[i]}</li>`).appendTo(ul)
//     }
// }

function getDessertData(){
    $.ajax({
        type: 'GET',
        url: '/desserts'
    }).done(function(response){
        displayDessertData(response);
        displayIcecreamRecipe(response);
    });

}
function getCookieData(){
    $.ajax({
        type: 'GET',
        url: '/desserts2'
    }).done(function(response){
        displayCookieRecipe(response);
    });

}

function displayDessertData(data){
    var recipe1 = $("#milkshake");

    let ul = $(`<ul></ul>`).appendTo(recipe1);

    data.results.forEach(ingredient=>{
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}
function displayCookieRecipe(data){
    var recipe2 = $("#cookie");

    let ul = $(`<ul></ul>`).appendTo(recipe2);

    data.results.forEach(ingredient=>{
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}
function displayIcecreamRecipe(data){
    var recipe3 = $("#icecream");

    let ul = $(`<ul></ul>`).appendTo(recipe3);

    data.results.forEach(ingredient=>{
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}