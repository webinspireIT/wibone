/**
 * scripts.js v1.9.3
 * http://dev.webinspire.it/wibone
 * 
 * Copyright 2011-2015 webinspire
**/
 
 
jQuery(document).ready(function(){

jQuery('.open-toggle').click(function() {
	
	var menu_default = jQuery(this).parent() ;
	slideMenu(menu_default);
});	
	
jQuery(".open-toggle-right").click(function(){
	var menu_right = jQuery(this).parent() ; 
	slideMenuRight(menu_right);
});

jQuery(".open-toggle-left").click(function(){
	var menu_left = jQuery(this).parent() ; 
	slideMenuLeft(menu_left);
});


function slideMenu(menu_default) {
	jQuery(menu_default).find('.sm-toggle').each(function() {
		jQuery(this).slideToggle();
	});
} // end slideMenu


function slideMenuRight(menu_right) {
	jQuery(menu_right).find('.sm-slide').each(function() {
		
		if (!jQuery(this).hasClass('show-right')) {
			jQuery('body').switchClass( "sm-slide-default", "sm-slide-right", 300, "easeInOutQuad" );
			jQuery(this).addClass( "show-right");
			
		} else  {								
			jQuery('body').switchClass( "sm-slide-right", "sm-slide-default", 250 );
			jQuery('.nav-right .sm-slide').removeClass( "show-right");
		}
			
	});
} // end slideMenuRight





function slideMenuLeft(menu_left) {
	jQuery(menu_left).find('.sm-slide').each(function() {
		
		if (!jQuery(this).hasClass('show-left')) {
			jQuery('body').switchClass( "sm-slide-default", "sm-slide-left", 300, "easeInOutQuad" );
			jQuery(this).addClass( "show-left");
			
		} else  {	
			jQuery('body').switchClass( "sm-slide-left", "sm-slide-default", 250 );
			jQuery('.nav-left .sm-slide').removeClass( "show-left");
		}
	
	});
} // end slideMenuLeft
	
	//MODAL
	jQuery( ".wi-modal-open" ).click(function() {
			jQuery( ".wi-modal-wrap" ).fadeTo( 250 , 1, function() {
				jQuery( this ).css({	"display": "table"});
			});
		});
		
	jQuery( ".wi-modal-close" ).click(function() {
		jQuery( ".wi-modal-wrap" ).fadeTo( 250 , 0, function() {
			jQuery( this ).css({	"display": "none"});
		});
	});
	

	
	//TOGGLE MENU
	jQuery( ".open-toggle" ).click(function() {
		jQuery(this).next(' .toggle ').slideToggle();
	});
		
	//ALERT
	jQuery(".wi-alert-message").delegate(".wi-alert-close", "click", function() {
		jQuery(this).parent().hide('fade', 300);
	});
			
	//GO TOP   
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 70) {
			jQuery('.wi-go-top').fadeIn(200);
			jQuery('.wi-desktop-nav').addClass('wi-fixed-nav');
		} else {
			jQuery('.wi-go-top').fadeOut(200);
			jQuery('.wi-desktop-nav').removeClass('wi-fixed-nav');
		}
	});
	
	//ANIMATION TOP
	jQuery('.wi-go-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 300);
	})
	
	 
	//ON RESIZE
	updateContainer();
	jQuery(window).resize(function() {
		updateContainer();
	});

	function updateContainer() {
		var $containerWidth = jQuery(window).width();
		if ($containerWidth <= 780) {
			jQuery('body').removeClass('wi-desktop-view');
			jQuery('body').addClass('wi-mobile-view');
			jQuery('.toggle').hide();
		}
		else {
			jQuery('body').addClass('wi-desktop-view');
			jQuery('body').removeClass('wi-mobile-view');
			jQuery('.wi-nav-bar .toggle').show();
		}
	}
	
	//FORM
	jQuery('input, textarea').placeholder();
	
	//TOOLTIP
	jQuery(function () {
		jQuery('[data-toggle="tooltip"]').tooltip()
	})
	
	//POPOVER
	jQuery(function () {
		jQuery('[data-toggle="popover"]').popover()
	})
	
	// SCROLLBAR
	jQuery(".wi-scroll-h").mCustomScrollbar({
		horizontalScroll:true,
		theme:"wi-theme",
		scrollButtons:{
			enable:true
		}
	});
	jQuery(".wi-scroll-v").mCustomScrollbar({
		theme:"wi-theme",
		scrollButtons:{
			enable:true
		}
	});
	jQuery(".wi-scroll-h-v").mCustomScrollbar({
		axis:"yx",
		theme:"wi-theme",
		scrollButtons:{
			enable:true
		}
	});
	
	//TABLE
	jQuery( "tr.selected" ).prev().addClass( "selected-before" );
	
	//DATA TABLE
	jQuery('.wi-data-table').dataTable( {
        "language": {
    "sEmptyTable":     "Nessun dato presente nella tabella",
    "sInfo":           "Vista da _START_ a _END_ di _TOTAL_ elementi",
    "sInfoEmpty":      "Vista da 0 a 0 di 0 elementi",
    "sInfoFiltered":   "(filtrati da _MAX_ elementi totali)",
    "sInfoPostFix":    "",
    "sInfoThousands":  ",",
    "sLengthMenu":     "Visualizza _MENU_ elementi",
    "sLoadingRecords": "Caricamento...",
    "sProcessing":     "Elaborazione...",
    "sSearch":         "Cerca:",
    "sZeroRecords":    "La ricerca non ha portato alcun risultato.",
    "oPaginate": {
        "sFirst":      "Inizio",
        "sPrevious":   "&#xf060;",
        "sNext":       "&#xf061",
        "sLast":       "Fine"
    },
   
        },
		

	
    } );

	// DROPDOWN
	/* auto open dropdown */	
	jQuery(' li.dropdown.auto-open').addClass('open');
	/* stop propagation if is form */
	jQuery(document).on('click', '.dropdown-menu ', function (e) {
		jQuery(this).hasClass('dropdown-menu-form') && e.stopPropagation();
	}); 

	// SELECTPICKER IN DROPODOWN
	jQuery(window).on('load', function(){
		// custom select using dropdowns
		if (jQuery('.selectpicker').length) 
			jQuery('.selectpicker').selectpicker();
	})
		
		
}); // end document ready

//WP MODAL GALLERY
jQuery(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	 event.preventDefault();
	 jQuery(this).ekkoLightbox(); 
});

//SMARMENU
jQuery(function() {
	jQuery('.sm').smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8,
	});
});
	
	
//VALIDATE
jQuery.extend(jQuery.validator.messages, {
    required: "richiesto",
    remote: "campo non valido",
    email: "mail non valida",
    url: "URL non valido",
    date: "data non valida",
    dateISO: "data non valida (ISO).",
    number: "numero non valido",
    digits: "permessi solo caratteri",
    creditcard: "numero di carta non valido",
    equalTo: "i campi non coincidono",
    accept: "estensione non valida",
    maxlength: jQuery.validator.format("max {0} caratteri"),
    minlength: jQuery.validator.format("min {0} caratteri"),
    rangelength: jQuery.validator.format("caratteri compresi tra {0} e {1}"),
    range: jQuery.validator.format("numero compreso tra {0} e {1}"),
    max: jQuery.validator.format("numero minore o uguale a {0}"),
    min: jQuery.validator.format("numero maggiore o uguale a {0}")
});


//DATETIME PICKER LANGUAGE
(function($){
	$.fn.datetimepicker.dates['pt-IT'] = {
		days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
		daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
		daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
		months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
		monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
		today: "Oggi"
	};
}(jQuery));