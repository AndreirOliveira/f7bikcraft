	$(document).ready(function() {
	    //var url = "http://fernandojsilva.000webhostapp.com/bikcraft/bikewebhost.php";
	    var url = "../php/bikes.php";
		// busca a URL e cria o array
	    $.getJSON(url, function(data) {

	        //limpa a div (se vc modificar ela não duplica resultados)	
	        $("#card-bikes").empty();
	        for (var i = 0; i < data.length; i++) {
	            //$( "#card-bikes" ).append('<tr><td>'+data[i]['Horario']+'</td><td>'+data[i]['Sala']+' </td><td>'+data[i]['Sigla']+' - '+data[i]['Turma']+'<br/>'+data[i]['Disciplina']+'</td>'+'<td>'+'<img src="http://www.feagri.unicamp.br/portal/'+data[i]['Img']+'"><br/>'+data[i]['Docente']+'</td></tr>');
	            var listHtml = '<div class="card">';
	            listHtml += '<div class="card-header">' + data[i]['modelo'] + '</div>';
	            listHtml += '<div class="card-content card-content-padding">';
	            listHtml += '<img src=img/' + data[i]['img'] + ' alt="bike">';
	            listHtml += '</div>';
	            listHtml += '<div class="card-footer">' + data[i]['descricao'] + '</div>';
	            listHtml += '</div>';

	            $("#card-bikes").append(listHtml);

	        }
	        //document.getElementById("card-bikes").innerHTML = ';
	        //append joga os resultados do for dentro da div #card-bikes 
	        //ver um dado unitario use data[i]['modelo']
	        //append só joga na div, vc pode usar dentro do append tags html, select por exemplo

	    });
	});

          
            
              
            

