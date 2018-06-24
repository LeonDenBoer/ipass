function login(form){
    var email = form.email.value;
    var wachtwoord = form.wachtwoord.value;

   fetch('api/sporter')
        .then(response => response.json())
        .then(function(myJson){

           for(var i = 0; i < myJson.length; i++){
               var object = myJson[i];
                console.log(object);
               if(object.email == email && object.wachtwoord == wachtwoord){
                   sessionStorage.setItem("sporterID", object.id);
                   sessionStorage.setItem("ploegID", object.ploegID);
                   window.location.replace('home.html');
               }
           }
        });
}

function nieuwegebruiker(){
   



   var formData = {
       "voornaam" : $("#voornaam").val(),
       "achternaam" : $("#achternaam").val(),
       "email" : $("#email").val(),
       "wachtwoord" : $("#wachtwoord").val()
   };



   $.ajax({
   type : "POST",
   contentType : "application/json",
   url : "/api/sporter",
   data : JSON.stringify(formData),
   dataType : 'json',
   success : function(result) {
       sessionStorage.setItem("sporterID", result.id);
       sessionStorage.setItem("ploegID", result.ploegID);
       window.location.replace('home.html');
       console.log(result);
   },
   error : function(e) {
       alert("Error!")
       console.log("ERROR: ", e);
   }
});
}

