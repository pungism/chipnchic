var Layout = function(){
	var handleMobileNavbar = function(){
		$('#mobile_navbar_toggler').click(function(){
			var $navbarLinks = $('.mobile-navbar-links');

			if ($navbarLinks.is( ":hidden" )){
				$navbarLinks.slideDown();	
			}else {
				$navbarLinks.slideUp();
				}

		});
	}
	return{
		init: function(){
			handleMobileNavbar();
		}
	}
}();