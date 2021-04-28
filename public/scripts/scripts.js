// $(document).ready(function(){
//     console.log("Ready!");
//     doAjaxRequest();
// });

// function doAjaxRequest(){
//     $.ajax({
//         method: 'GET',
//         url: '/apps',
//         success: function(data){
//             console.log(data);
//         }
//     });
// }

// function getFoodData(data) {
    
// }


$(document).ready(function(){
    console.log("Ready!");
    displayMembers();
});

var currentMemberList;

function displayMembers(){
    console.log("/scripts.js displayMembers called");
    $.ajax({
        method:"GET",
        url:'/members',
        success: (data) =>{
            console.log("/scritps.js displayMembers succeeded");
            console.log("data from displayMembers" + data);
            currentMemberList = data.slice();
            $("#memberList").empty();
            data.forEach(function (arrayItem){
                var item = arrayItem.name;
                console.log("array item name: " + item);
                $("#memberList").append("<li>" + item + "</li>");
            });
        }
    });


$("deleteBtn").click(function() {

    // should get the ID of the selected item
    // This is just hard coded.
    console.log("first item in list: " + currentMemberList[0]._id);
    var itemToDelete = currentMemberList[0]._id;

        $.ajax({
            type: "DELETE",
            url: "/members/" + itemToDelete
        }).done(function(data){
            displayMembers();
        }).fail(function(jqXHR){
            $("#error").html("member could not be deleted");
        });
    });
}











