$(document).ready(function(){

    const arrayNames = [];
    const name = $("form input");
    var i = 0;

    $("header button").click(function(){
        $("form").slideDown();
        if(arrayNames.length > 0){
            $("section").slideDown();
        }
    })

    $("#cancel-button").click(function(){
        $("form").slideUp();
        $("section").slideUp();
        $("#msgError").css("display", "none");
        $("form input").val("");
    })

    $("body").on("submit", function(e){
        e.preventDefault();

    })

    $("form input").on("input", function(){

        if(name.val().trim() == ""){
            $("#msgError").slideUp();
        }

        else if(arrayNames.includes(name.val())){
            $("#msgError").slideDown();
            $("#msgError").html(`Task "${name.val()}" already exists in list.`);
            $("#msgError").css("background-color", "rgba(255, 0, 0, 0.195)");
        }
        else if(!arrayNames.includes(name.val())){
            $("#msgError").slideDown();
            $("#msgError").html(`Available`);
            $("#msgError").css("background-color", "rgb(19, 91, 26)");
        }
        
        })

    $("#adding-button").click(function(){

        $("section").slideDown();

        if(arrayNames.includes(name.val())){
            $("#msgError").slideDown();
            $("#msgError").html(`Task "${name.val()}" already exists in list.`);
            $("#msgError").css("background-color", "rgba(255, 0, 0, 0.195)");
        }

        else if(name.val().trim() == ""){
            $("#msgError").slideDown();
            $("#msgError").html(`Task field can't be empty.`);
            $("#msgError").css("background-color", "rgba(255, 0, 0, 0.195)");
        }

        else{
            $("section ul").slideDown();
            $("section ul li").slideDown();
            arrayNames.push(name.val());
            
            $("section").append(`
                
                
                <li id="line${i}">
                <p>Task ${i+1}:</p>
                <button id="mark-button${i}" type = "submit">
                ${name.val()}
                </button>
                </li>
                
                `);
                $("form input").val("");
                $("#msgError").css("display", "none");
                i++;
        }

})

$(`mark-button${i}`).click(function(){
    $(`line${i}`).css("text-decoration", "line-through");

})







})