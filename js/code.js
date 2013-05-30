function SomenteLetras(e){
     var tecla=(window.event)?event.keyCode:e.which;
     if((tecla >= 65 && tecla <= 90)||(tecla >= 97 && tecla <= 122 || tecla == 44 || tecla == 32 )) return true;
    else{
    if (tecla != 8) return false;
    else return true;
    }
	}
	function numeros(){  
    tecla = event.keyCode;  
    if (tecla >= 48 && tecla <= 57 || tecla == 46){  
        return true;  
    }else{  
       return false;  
    }  
	}
	function avisar(x){
	$("#aviso").html(x);
	}
$(document).ready(function() {
	$('#aviso').click(function(){$(this).slideUp("slow");});
	$("img[name='facebook']").hover(function(){
    $(this).stop().animate({"opacity": 1});
	},function(){
    $(this).stop().animate({"opacity": 0.7});
	});
	$("img[name='twitter']").hover(function(){
    $(this).stop().animate({"opacity": 1});
	},function(){
    $(this).stop().animate({"opacity": 0.7});
	});
	$('#aviso').hide();
	$('#resultadofinal').hide();
	$('#fechar').hide();
	$('#sbp').hide();
	$("input[name='gen']").click(function(){ $(this).attr("placeholder", ""); });
	$("input[name='max']").click(function(){ $(this).attr("placeholder", ""); });
	$("input[name='min']").click(function(){ $(this).attr("placeholder", ""); });
	$('#limp').click(function(){ $("input[name='min']").val(''); $("input[name='max']").val(''); $("input[name='gen']").val(''); });
	$('#resul').click(function(){
	$('#fechar').click(function(){ $(this).slideUp("slow"); $('#resultadofinal').slideUp("fast"); $("#resultadofinal tr:gt(0)").remove(); $('#sbp').fadeOut("slow"); });
	$('#sbp').click(function(){$(this).fadeOut("slow"); $('#resultadofinal').slideUp("fast"); $('#fechar').slideUp("fast"); $("#resultadofinal tr:gt(0)").remove();});
	$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $('#sbp').fadeOut("slow"); $('#resultadofinal').slideUp("fast"); $('#fechar').slideUp("fast"); $("#resultadofinal tr:gt(0)").remove();
    	}
		});
		var min = $("input[name='min']").val();
		var max = $("input[name='max']").val();
		var gen = $("input[name='gen']").val();
		var tamanho = gen.length;
		var genew = gen.split(',');
		if(tamanho>=1){
		if(min>0 && max>0){
		for(var i=0; i< genew.length; i++) {
			var atual = genew[i];
			var totaldeletras = atual.length;
			var valoraditivo = max/totaldeletras;
			var valorrececivo = min/totaldeletras;
			var qntaditivo = atual.replace(/[^A-Z]/g, "").length;
			var qntrececivo = atual.replace(/[^a-z]/g, "").length;
			var totaladitivo = qntaditivo*valoraditivo;
			var totalrececivo = qntrececivo*valorrececivo;
			var totaldcg = totaladitivo+totalrececivo;
			$("#resultadofinal").append("<tr><td>"+atual+"</td><td>"+valoraditivo.toFixed(2)+"</td><td>"+valorrececivo.toFixed(2)+"</td><td>"+totaldcg.toFixed(2)+"</td></tr>").slideDown("slow");
			$('#aviso').slideUp("slow");
			$('#sbp').fadeIn("slow");
			$('#fechar').slideDown("slow");
			}	
		}else{
			$('#aviso').slideUp("slow");
			avisar("Campos <b>Mínimo</b> e <b>Máximo</b> são obrigatórios!")
			$('#aviso').stop().slideDown("slow");
		}
		}else{
			$('#aviso').slideUp("slow");
			avisar("Campo de <b>Genótipos</b> é obrigatório!")
			$('#aviso').stop().slideDown("slow");
		}
		// $("#tableID tr:gt(0)").remove();
	});
});
