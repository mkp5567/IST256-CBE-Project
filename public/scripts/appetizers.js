$(document).ready(function(){
    console.log("Ready!");
    doAjaxRequest();
});


function doAjaxRequest(){
    $.ajax({
        type: 'GET',
        url: '/apps'
    }).done(function(response){
        console.log(response);
        displayRecipes(response);
    });

    $.ajax({
        type: 'GET',
        url: '/apps/1',
    }).done(function(recipe){
        console.log(recipe);
        displayTacos(recipe);
    });

    $.ajax({
        type: 'GET',
        url: '/apps/0',
    }).done(function(recipe){
        console.log(recipe);
        displayPokey(recipe);
    });

}

function displayRecipes(data){
    let info = $('#fries');

    let ul = $(`<ul></ul>`).appendTo(info);
    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul);
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul);
    })
    //info.append($(`<h4>${data.results[1].title}</h4>`));
    
}

function displayTacos(data){
    let taco = $('#tacos');
    let ul = $(`<ul></ul>`).appendTo(taco);
    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul);
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul);
    })
    //taco.append($(`<h4>${data.results[3].title}</h4>`));
}

function displayPokey(data){
    let pokey = $('#pokey');
    let ul = $(`<ul></ul>`).appendTo(pokey);
    data.results.forEach(ingredient=>{
        let h4 = $(`<h4>${ingredient.title}</h4>`).appendTo(ul);
        let li = $(`<li>${ingredient.ingredients}</li>`).appendTo(ul);
    })
}