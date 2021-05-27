$(document).ready(function() {      /* Evento que sale un mensaje cuando se aplasta un boton */
$('.boton1').click(function(){
    /* $('#parrafo1').hide(); */
    alert('El parrafo desaparecera');
});

});

$(document).ready(function() {      /* Evento que Esconde un parrafo p */
    $('.boton1').click(function(){
        $('#parrafo1').hide(1000);/* tiempo en el cual se oculta el mensaje */

        
    });
    
    });
    
$(document).ready(function() {      /* Evento que Muestra un parrafo p */
        $('.boton2').click(function(){
            $('#parrafo1').show(5000); /* Tiempo en el cual se muestra el mensaje */
            
        });
        
        });


$(document).ready(function() {      /* Evento que que se oculte o se muestre un elemento con soledToggle o  */
    $('.boton3').click(function(){
                $('#parrafo3').slideToggle(function(){

                }); /* Tiempo en el cual se muestra el mensaje */
                
            });
            
            });

            $(document).ready(function() {      /* Muestra un elemento oculto  */
                $('.boton4').click(function(){
                            $('#parrafo1').fadeToggle("fast",function(){
            
                            }); /* Tiempo en el cual se muestra el mensaje */
                            
                        });
                        
                        });


$(document).ready(function() {      /* Convierte al texto en rojo y modifica el tamñ  */
                            $('.boton5').click(function(){
                                        $('#parrafo1').addClass("rojo grande26",function(){
                        
                                        }); /* Tiempo en el cual se muestra el mensaje */
                                        
                                    });
                                    
                                    });
                                    
$(document).ready(function() {      /* Remueve la clase rojo   */
                                        $('.boton6').click(function(){
                                                    $('#parrafo1').removeClass("rojo",function(){
                                    
                                                    }); /* Tiempo en el cual se muestra el mensaje */
                                                    
                                                });
                                                
                                                });


                                                    

$(document).ready(function(){
    $(".boton7").click(function(){
    	$("#parrafo1").before("<p>Este párrafo y su texto tienen que salir antes del párrafo</p>");
    }); 

});

$(document).ready(function(){
    $(".boton8").click(function(){
    	$("#parrafo1").after("<p>Este párrafo y su texto tienen que salir despues del párrafo</p>");
    }); 

});

$(document).ready(function(){               /* me da una alterta del texto que se escribio */
    $(".boton9").click(function(){
    	alert($("#nombre").val());
    }); 

});

$(document).ready(function(){               /* me da una alterta del texto que se escribio */
    $(".boton10").click(function(){
    	alert($("#parrafo1").text());
    }); 

});

$(document).ready(function(){                   /* Cambia el tecto de un boton */
    $("#boton11").click(function(){
        $("#boton11").attr("value","OTRO TEXTO");
    });
});



$(document).ready(function(){
        $("#boton12").click(function(){
    		$("#parrafo1").append("<br>texto añadido al final del párrafo.");
	}); 
});