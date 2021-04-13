$(document).ready(function(){
    console.log("Ready!");
    doAjaxRequest();
});


function doAjaxRequest(){
    $.ajax({
        method: 'GET',
        url: '/apps',
        success: (data) => {
            console.log(data);
        }
    });
}

function getFoodData(data) {
    
}