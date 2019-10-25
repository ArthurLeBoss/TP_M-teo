$(document).ready(function() {

    

    $('.search_icon').click(function() {
        var ville = $(".search_input").val();

        $.ajax({
            url : 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=ce14f59ef22256ce94a446654259b29a',
            type : 'GET',
            dataType : 'JSON',
            success : function(resultat, status){
                var resTemp = Math.round(resultat.main.temp - 273.15);
                $(".location").html(ville);
                $(".temp-value").html(resTemp);
            },
     
            error : function(resultat, statut, erreur){
              alert("erreur");
            },
     
            complete : function(resultat, statut){
                
            }
     
         });
        
     });
});