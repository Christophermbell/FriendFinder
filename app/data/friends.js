var nameComplete = false;
var photoComplete = false;

function checkForm(){
  if(nameComplete && photoComplete){
    $("#submit-button").removeAttr("disabled");
    $('#instructions').hide();
  } else {
    $("#submit-button").attr("disabled",true);
  }
}
  function hasSuccess(divID,spanID){
    $(divID).removeClass("has-error has-feedback");
    $(divID).addClass("has-success has-feedback");
    $(spanID).removeClass("glyphicon glyphicon-remove form-control-feedback");
    $(spanID).addClass("glyphicon glyphicon-ok form-control-feedback");
  }
  function hasError(divID,spanID){
    $(divID).removeClass("has-success has-feedback");
    $(divID).addClass("has-error has-feedback");
    $(spanID).removeClass("glyphicon glyphicon-ok form-control-feedback");
    $(spanID).addClass("glyphicon glyphicon-remove form-control-feedback");
  }


$(document).ready(function(){

  $("#name").keyup(function(){
    if($("name").val() != ""){
      nameComplete = true;
      hasSuccess("#name-group","#name-span");
    }
    else{
      nameComplete = false;
      hasError("#name-group","#name-span");
    }
    checkForm();
  });

  $("#photo").keyup(function(){
    if($("photo").val() != ""){
      console.log($('#photo').val());
      photoComplete = true;
      hasSuccess("#photo-group","#photo-span");
    }
    else{
      photoComplete = false;
      hasError("#photo-group","#photo-span");
    }
    checkForm();
  });

  $('#submit-button').on('click', function(){
    var newFriend = {
      name: $('#name').val().trim(),
      photo: $('#photo').val().trim(),
      
   