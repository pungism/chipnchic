var Index = function(){
	var handleMixItUp = function(){
		$('#portfolio img').hover(
		  function() {
		    var curr_src = $(this).attr('src');
		    var lastIdxSlash = curr_src.lastIndexOf("/");
		    var path = curr_src.substring(0,lastIdxSlash+1);
		    var filename = curr_src.substring(lastIdxSlash+1);

		    $(this).attr('src', path+'tinted_' + filename );
		  }, function() {
		  	var coloured_src = $(this).attr("src").replace("tinted_", "");
		  	$(this).attr('src', coloured_src);
		  }
		);
		$('#portfolio').mixItUp();
	}
	return{
		init: function(){
			handleMixItUp();
		}
	}
}();