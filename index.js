$("iframe").attr("src","matches-template.html");
$("#a").on("click", () => {
    var $elem = $('body');
    $("iframe").attr("src","matches-template.html");
    $('html, body').animate({scrollTop: $elem.height()}, 800);
});
$("#b").on("click", () => {
    $("iframe").attr("src","new-and-online-template.html");
});
$("#c").on("click", () => {
    $("iframe").attr("src","search-template.html");
});
$("#d").on("click", () => {
    $("iframe").attr("src","interest-booster-template.html");
});

$("#f").on("click", () => {
    $("iframe").attr("src","messages-template.html");
});

$("#profile").on("click", () => {
    var $elem = $('body');
    $("iframe").attr("src","profile-page-template.html");
    $('html, body').animate({scrollTop: $elem.height()}, 800);
});