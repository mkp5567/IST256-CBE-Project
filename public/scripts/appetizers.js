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
}

function displayRecipes(data){
    let info = $('#information');
    info.append($(`<h4>${data.results[1].title}</h4>`));
  
}
