$(document).ready(function(){
    console.log("Ready!");
    // displayDesserts();
    getDessertData();
    getCookieData();
    getIcecreamData();
});

//-----------------------------------------------------------------
function getDessertData(){
    $.ajax({
        type: 'GET',
        url: '/desserts'
    }).done(function(response){
        displayDessertData(response);
    });

}
function getIcecreamData(){
    $.ajax({
        type: 'GET',
        url: '/desserts/2'
    }).done(function(response){
        displayIcecreamRecipe(response);
    });

}
function getCookieData(){
    $.ajax({
        type: 'GET',
        url: '/desserts/1'
    }).done(function(response){
        displayCookieRecipe(response);
    });

}
//----------------------------------------------------------------
function displayDessertData(data){
    var recipe1 = $("#milkshake");

    let ul = $(`<ul></ul>`).appendTo(recipe1);

    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}
function displayCookieRecipe(data){
    var recipe2 = $("#sugarcookies");

    let ul = $(`<ul></ul>`).appendTo(recipe2);

    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}
function displayIcecreamRecipe(data){
    var recipe3 = $("#icecream");

    let ul = $(`<ul></ul>`).appendTo(recipe3);

    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul)
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul)
    });
}