$("#a").on("click", () => {
    $("iframe").attr("src","matches-template.html");
    console.log("aclicked");
});
$("#b").on("click", () => {
    $("iframe").attr("src","login.html");
    console.log("bclicked");
});