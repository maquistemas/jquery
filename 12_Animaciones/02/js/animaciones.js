(function(){

	var $cajaRoja = $(".cajaRoja");

    /*$('#botTamano').on('click',function(){
        $cajaRoja.animate({
            width:"+=100px",
            height:"+=100px"
        },1000,function(){
            console.log('Termino la animacion del tamaño');
             $cajaRoja.animate({
                 top:"-100px"
             });
        });
        
    });*/
    
    
    /*$('#botTamano').on('click',function(){
        $cajaRoja.animate({
            width:"+=100px",
            height:"+=100px"
        },function(){
            console.log('Termino la animacion del tamaño');
             
        }).css({
                
                 background:"green"
             });
        
    });*/
    
      $('#botTamano').on('click',function(){
        $cajaRoja.animate({
            width:"+=100px",
            height:"+=100px"
        },function(){
            console.log('Termino la animacion del tamaño');
             
        }).css({
                
                 background:"green"
             }).animate({
                width:"-=100px",
            height:"-=100px"
        }).animate({
            opacity:"0.1"
        },1500,function(){
            $(this).remove();
        });
        
    });

    


})();