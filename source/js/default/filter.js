(function () {
    'use strict';


    $(".filter__selected").on("click", function(e){
        e.preventDefault();
        $(".filter").removeClass("is-expanded");

        $(".filter").parents(".filter").removeClass("is-expanded");
       $(this).parents(".filter").toggleClass("is-expanded");
        $(this).addClass("open");

        $("[data-search-btn]").addClass("open");
    });

    function changeLink() {
        var first = $("#filter1").children(".is-selected").data('value'),
            link = first;

        $(".btn-search").attr("href", link);
    }

    $(".filter__option").on("click", function(e){
        e.preventDefault();

        var thisVal = $(this).html();
        $(this).parents(".filter").children(".filter__selected").children("span").html(thisVal);

        $(this).parent(".filter__options").children(".filter__option").removeClass("is-selected");

        $(this).addClass("is-selected");

        $(this).parents(".filter").removeClass("is-expanded");
        changeLink();
    });

    changeLink();

})();