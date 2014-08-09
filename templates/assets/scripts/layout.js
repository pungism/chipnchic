var Layout = function(){
	var handleMobileNavbar = function(){
		$('#mobile_navbar_toggler').click(function(){
			$('.mobile-navbar-links').toggleClass('hide');
		});
	}
	return{
		init: function(){
			handleMobileNavbar();
		}
	}
}();