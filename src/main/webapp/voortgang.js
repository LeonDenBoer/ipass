/* afstand opties*/
    var ploegid = sessionStorage.getItem("ploegID");
    var meter = [];
    fetch('/api/wedstrijd')
        .then(response => response.json())
 		.then(function(myJson){
            myJson.sort(function(a,b){
				return a.afstand - b.afstand ;
			})
            for(var i = 0; i < myJson.length; i++){
                var object = myJson[i];
                if(ploegid == object.ploegID){
                    
                    
                    if(meter.includes(object.afstand)){

                    }
                    else{
                        meter.push(object.afstand);
                        
                        var ploeggenoot = document.createElement('option');
                        var att = document.createAttribute("value");
                        att.value = object.afstand;
                        ploeggenoot.setAttributeNode(att);
                        ploeggenoot.innerHTML = object.afstand+'m';
                        document.getElementById("afstand").appendChild(ploeggenoot);
                    }
                }
            }
         });

/* get data uit form*/
var tijd = [];
var tekst = [];
function voortgang(form){
            /* domme reden waardoor chartjs werkt*/
document.getElementById('canvas').style.width = '80vh';
    var tijd = [];
    var tekst = [];
    var wedstrijd = form.wedstrijd.value;
    var afstand = form.afstand.value;

   fetch('api/wedstrijd')
        .then(response => response.json())
        .then(function(myJson){
            myJson.sort(function(a,b){
				var dateA = new Date(a.datum), dateB = new Date(b.datum);
				return dateB - dateA ;
			})
           for(var i = 0; i < myJson.length; i++){
            var object = myJson[i];
            console.log(afstand + " " + object.afstand + " "+ wedstrijd + " " + object.wedstrijd);
            if(afstand == object.afstand && wedstrijd.toString() == object.wedstrijd.toString() && ploegid == object.ploegID){
                console.log("werkt");
            
            tijd.push(object.tijd);

            
					var d = new Date(object.datum);
					var month = parseInt(d.getMonth())+1;
					object.datum = d.getFullYear()+"-"+month+"-"+d.getDate();
            tekst.push(object.datum)
            console.log(tijd);
            }
           }
        });
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: tekst,
                datasets: [{
                    label: 'seconden',
                    data: tijd,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            
                        }
                    }],
                    xAxes:[{
                        
                        ticks: {
                            autoSkip:true,
                            maxTicksLimit:5
                        }
                    }]
                }
            }
        });

        setTimeout(
            function() 
            {
                document.getElementById('canvas').style.width = '70vh';
            }, 1000);
        /* domme reden waardoor chartjs werkt*/

}



/* data ophalen voor chartjs en in volgorde zetten van laatste datum eerst*/

   
    console.log(tijd);
        fetch('/api/wedstrijd')
            .then(response => response.json())
 			.then(function(myJson){
                myJson.sort(function(a,b){
				var dateA = new Date(a.datum), dateB = new Date(b.datum);
				return dateB - dateA ;
			})
                
                for(var i = 0; i < myJson.length; i++){
                    var object = myJson[i];
                    if(500 == object.afstand && 'true' == object.wedstrijd.toString() && ploegid == object.ploegID){
                    ttijd = object.tijd/100;
                    tijd.push(ttijd);
                    
					var d = new Date(object.datum);
					var month = parseInt(d.getMonth())+1;
					object.datum = d.getFullYear()+"-"+month+"-"+d.getDate();
                    tekst.push(object.datum)
                    console.log(tijd);
                    }
                }

             });



/*chartjs*/

         var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: tekst,
        datasets: [{
            label: 'seconden',
            data: tijd,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    
                }
            }],
            xAxes:[{
                
                ticks: {
                    autoSkip:true,
                    maxTicksLimit:5
                }
            }]
        }
    }
});


/* domme reden waardoor chartjs werkt*/
document.getElementById('canvas').style.width = '70vh';
