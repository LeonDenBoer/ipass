var sporterid = sessionStorage.getItem("sporterID");
var ploegid = sessionStorage.getItem("ploegID");
var ploegnaam;
var ploeggenoot;

if(ploegid == 0){
    ploegnaam = document.createElement('h1');
    ploegnaam.innerHTML = "Op het moment zit je nog bij geen ploeg";
    document.getElementById("ploeg-naam").appendChild(ploegnaam);
    document.getElementById("ploeg-keuzes").style.display = "none";
}else{
    document.getElementById("nieuwe-ploeg").style.display = "none";
    fetch('api/ploeg/'+ploegid)
        .then(response => response.json())
        .then(function(myJson){
            ploegnaam = document.createElement('h1');
            ploegnaam.innerHTML = myJson.naam;
            document.getElementById("ploeg-naam").appendChild(ploegnaam);
        });
    fetch('api/sporter')
        .then(response => response.json())
        .then(function(myJson){
            console.log(myJson);
            
            for(var i = 0; i < myJson.length; i++){
                var object = myJson[i];
                console.log(object);
                if(ploegid == object.ploegID){
                    console.log(object);
                    ploeggenoot = document.createElement('div');
                    ploeggenoot.innerHTML = object.voornaam+ " "+ object.achternaam;
                    document.getElementById("ploeg-genoten").appendChild(ploeggenoot);
                }
            }
        });
}

fetch('api/sporter')
    .then(response => response.json())
    .then(function(myJson){
        console.log(myJson);
        
        for(var i = 0; i < myJson.length; i++){
            var object = myJson[i];
            if(object.ploegID == 0){
                var ploeggenoot = document.createElement('option');
                var att = document.createAttribute("value");
                att.value = object.id;
                ploeggenoot.setAttributeNode(att);
                ploeggenoot.innerHTML = object.voornaam +' ' + object.achternaam;
                document.getElementById("kanidaat").appendChild(ploeggenoot);
            }



        }
    });


function toevoegen(){   
    console.log('begint')
    var nieuweploeggenootid =  $("#kanidaat").val();
    console.log(nieuweploeggenootid);
    nieuweploeggenootid = parseInt(nieuweploeggenootid);
    fetch('api/sporter/'+nieuweploeggenootid)
        .then(response => response.json())
        .then(function(myJson){
            var voornaam = myJson.voornaam;
            var achternaam = myJson.achternaam;
            var email = myJson.email;
            var wachtwoord = myJson.wachtwoord; 


    var ploegid = sessionStorage.getItem("ploegID");
    ploegid = ploegid/1;
    var formData = {
        "voornaam" : voornaam,
        "achternaam" : achternaam,
        "email" : email,
        "wachtwoord" : wachtwoord,
        "ploegID" : ploegid
    };



    $.ajax({
    type : "PUT",
    contentType : "application/json",
    url : "/api/sporter/"+nieuweploeggenootid,
    data : JSON.stringify(formData),
    dataType : 'json',
    success : function(result) {
        
        console.log(result);
    },
    error : function(e) {
        alert("Error!")
        console.log("ERROR: ", e);
    }
});});
setTimeout(function(){ location.reload(); }, 1000);
}

function verlaten(){
    var sporterid = sessionStorage.getItem("sporterID");
    fetch('api/sporter/'+sporterid)
        .then(response => response.json())
        .then(function(myJson){
            var voornaam = myJson.voornaam;
            var achternaam = myJson.achternaam;
            var email = myJson.email;
            var wachtwoord = myJson.wachtwoord; 


    var ploegid = sessionStorage.getItem("ploegID");
    ploegid = ploegid/1;
    var formData = {
        "voornaam" : voornaam,
        "achternaam" : achternaam,
        "email" : email,
        "wachtwoord" : wachtwoord,
        "ploegID" : 0
    };
    

    $.ajax({
        type : "PUT",
        contentType : "application/json",
        url : "/api/sporter/"+sporterid,
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(result) {
            
            console.log(result);
        },
        error : function(e) {
            alert("Error!")
            console.log("ERROR: ", e);
        }
    });});
    sessionStorage.setItem("ploegID", 0);
    console.log(sessionStorage.getItem("ploegID"));
    setTimeout(function(){ location.reload(); }, 1000);
}

function aanmaken(){
    var formData = {
        "naam" : $("#nploeg-naam").val(),
    };



    $.ajax({
    type : "POST",
    contentType : "application/json",
    url : "/api/ploeg",
    data : JSON.stringify(formData),
    dataType : 'json',
    success : function(result) {
        var sporterid = sessionStorage.getItem("sporterID");
        sessionStorage.setItem("ploegID", result.id);
        console.log(result);
        fetch('api/sporter/'+sporterid)
            .then(response => response.json())
            .then(function(myJson){
                var voornaam = myJson.voornaam;
                var achternaam = myJson.achternaam;
                var email = myJson.email;
                var wachtwoord = myJson.wachtwoord; 


                var ploegid = result.id;
                ploegid = ploegid/1;
                var formData = {
                    "voornaam" : voornaam,
                    "achternaam" : achternaam,
                    "email" : email,
                    "wachtwoord" : wachtwoord,
                    "ploegID" : ploegid
                };
                $.ajax({
                    type : "PUT",
                    contentType : "application/json",
                    url : "/api/sporter/"+sporterid,
                    data : JSON.stringify(formData),
                    dataType : 'json',
                    success : function(result) {
                        
                        console.log(result);
                    },
                    error : function(e) {
                        alert("Error!")
                        console.log("ERROR: ", e);
                    }
                });
            });


    },
    error : function(e) {
        alert("Error!")
        console.log("ERROR: ", e);
    }





});
setTimeout(function(){ location.reload(); }, 1000);
}