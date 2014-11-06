$(document).ready(function() {       
    $(document).on("click", "#toggle-more-links", function(e) {
        e.preventDefault();
        $(".more-links").toggle();
    });
    
    if (window.location.href.indexOf("software") > -1) {
        $("#software-development").show();
    }
    
    $("#show-software-development").click(function(e) {
        e.preventDefault();
        $("#software-development").toggle();
    });
});