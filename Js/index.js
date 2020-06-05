$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".nav-wrapper .dropdown-trigger").dropdown({
        hover:true
    });
    $(".sidenav .dropdown-trigger").dropdown();
    $(".slider").slider({
        duration:400,
        indicators: true
    });
    $(".parallax").parallax() 
    $(".galeria .carousel").carousel({
        indicators:false,
        fullWidth: false,
        numVisible: 3
    })
    $(".prev").click(function(){
        $(".carousel").prev(1)
    })
    $(".next").click(function(){
        $(".carousel").next(1)
    })
    $(".materialboxed").materialbox()
    
})