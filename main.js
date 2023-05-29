$(document).ready(function () {
 
  $(".descripcion-servicio article").hide();
  $(".descripcion-servicio article:first").show();

  $("ul.tabs li a").click(function () {
    $("ul.tabs li a").removeClass("active");
   
    $('.descripcion-servicio article').hide();

    var activeTab = $(this).attr("href");
    $(activeTab).show();
    return false;
  });
});
