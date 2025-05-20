/*update variables*/
var currentPage;
var updatedRecently = false;

/*event listeners*/
$("nav #homeButton").on("click", function() {update("home");});
$("nav #aboutButton").on("click", function() {update("about");});
$("nav #contactButton").on("click", function() {update("contact");});

/*page update function*/
function update(nextPage) {
  //cant update page currently on and has to wait a time before can be updated again 
  if (nextPage != currentPage && !updatedRecently) {
    
    //sets timer that disables this function until timer is done (prevents spam clicking)
    updatedRecently = true;
    setTimeout(()=>{updatedRecently = false;}, 600);
  
    //update nav
    $("#homeButton, #aboutButton, #contactButton").removeClass("navDivActive");
    $("#"+nextPage+"Button").addClass("navDivActive");
  
    //turns on overlay
    if ($('#overlay').css("opacity") == "0") {$("#overlay").css("opacity", "1");}
    else {$("#overlay").css("opacity", "0");}//accounts for first update
    
    setTimeout(()=>{
      //changes page
      $("#home, #about, #contact").hide();
      $("#"+nextPage).show();
      
      const bgColors = {
        "home" : "#FF6565",
        "about" : "#88DC5D",
        "contact": "#5D7FDC"}
      
      $("body").css("background-color", bgColors[nextPage]);
      
      //turns off overlay
      $("#overlay").css("opacity", "0"); 
    }, 300);
    
    //sets current page for next iteration
    currentPage = nextPage; 
  }
}
update("home");