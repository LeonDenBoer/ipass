var ploegid = sessionStorage.getItem('ploegID');
	console.log(ploegid);
    fetch('api/wedstrijd')
 		.then(response => response.json())
 		.then(function(myJson){
			myJson.sort(function(a,b){
				var dateA = new Date(a.datum), dateB = new Date(b.datum);
				return dateB - dateA ;
			})
			for(var i = 0; i < myJson.length; i++){
					var object = myJson[i];
					var tijd = object.tijd;
					var tijd = tijd/100;
					var minuten = Math.floor(tijd/60);
					var minuten = ("0" + minuten).slice(-2);
					var seconden = tijd - minuten*60;
					seconden = Math.floor(seconden);
					var mseconden = tijd - minuten*60 - seconden;
					seconden = ("0" + seconden).slice(-2);
					mseconden = mseconden*100;
					mseconden = mseconden.toFixed(0);
					mseconden = ("0" + mseconden).slice(-2);
					var nieuwetijd = minuten+":"+seconden+"."+mseconden;
					var d = new Date(object.datum);
					var month = parseInt(d.getMonth())+1;
					object.datum = d.getFullYear()+"-"+month+"-"+d.getDate();


					console.log(object);
					console.log(ploegid);
				if(false == JSON.parse(object.wedstrijd) && ploegid == object.ploegID){
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("id");
                    att.value = object.id;
					wedstrijd.setAttributeNode(att);
					var att = document.createAttribute("class");
                    att.value = "wedstrijd";
                    wedstrijd.setAttributeNode(att);
					document.getElementById("trainingen").appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'datum';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = object.datum;
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'afstand';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = object.afstand+ "m";
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'tijd';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = nieuwetijd;
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('button');
                    var att = document.createAttribute("onclick");
                    att.value = 'verwijderen('+object.id+')';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = "verwijder de wedstrijd";
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'clearfix';
                    wedstrijd.setAttributeNode(att);
					document.getElementById(object.id).appendChild(wedstrijd);	
					}else if(true == JSON.parse(object.wedstrijd) && ploegid == object.ploegID){
						var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("id");
                    att.value = object.id;
					wedstrijd.setAttributeNode(att);
					var att = document.createAttribute("class");
                    att.value = "wedstrijd";
                    wedstrijd.setAttributeNode(att);
					document.getElementById("wedstrijden").appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'datum';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = object.datum;
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'afstand';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = object.afstand+ "m";
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'tijd';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = nieuwetijd;
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('button');
                    var att = document.createAttribute("onclick");
                    att.value = 'verwijderen('+object.id+')';
                    wedstrijd.setAttributeNode(att);
					wedstrijd.innerHTML = "verwijder de wedstrijd";
					document.getElementById(object.id).appendChild(wedstrijd);
					var wedstrijd = document.createElement('div');
                    var att = document.createAttribute("class");
                    att.value = 'clearfix';
                    wedstrijd.setAttributeNode(att);
					document.getElementById(object.id).appendChild(wedstrijd);	
					}
				}
            console.log(myJson)
		});
		
		function verwijderen(id){
			$.ajax({
			type : "DELETE",
			contentType : "application/json",
			url : "/api/wedstrijd/"+id,
			dataType : 'json',
			success : function(result) {
				
				console.log(result);
			}
		});
		setTimeout(function(){ location.reload(); }, 1000);
		}

		function nieuwewedstrijd(){
			var uurms  = $("#uur").val()* 360000;
			var minutenms = $("#minuut").val()* 6000;
			var secondenms = $("#seconden").val()* 100;
			var mseconden = $("#mseconden").val()*1;
			var tijdms = uurms+minutenms+secondenms+mseconden;
			tijd = tijdms/1;
			var afstand = $("#afstand").val() / 1;
			var ploegid = sessionStorage.getItem('ploegID');
			ploegid = ploegid/1;
			console.log(tijd);
			console.log($("#iswedstrijd").val());
			var formData = {
				"datum" : $("#datum").val(),
				"afstand" : afstand,
				"tijd" : tijd,
				"wedstrijd" : $("#iswedstrijd").val(),
				"ploegID" : ploegid
			};



			$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/api/wedstrijd",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {
				
				console.log(result);
			},
			error : function(e) {
				
			}
		});
		setTimeout(function(){ location.reload(); }, 1000);
		}

 