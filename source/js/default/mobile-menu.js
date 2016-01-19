(function () {
    'use strict';

    var $mobileMenu = $("[mobile-menu]"),
        $body = $("body"),
        $mobileMenuTrigger =  $("[mobile-menu-trigger]");

    $mobileMenuTrigger.on("click", function(e){
        e.preventDefault();

        $body.toggleClass("mobile-menu--open");

    })


})();
