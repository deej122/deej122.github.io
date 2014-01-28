//View for the Page
Weeblys.WeeblysView = Ember.View.extend({
	didInsertElement: function() {

//Animate Switch Grid button onclick
	$("#gridSwitch").click(function(){
 	$("#gridSwitch").toggleClass("switchedOn");
 	$("#gridSwitch").toggleClass("switchedOff");
	});

//Animate Page Links on hover over of delete button
//NOTE: Only works for new links on refresh --> jQuery
	$(".delete").hover(function(){
	$(this).parent().parent().toggleClass("removePage");
	$(".edit").toggleClass("invisible");
	});

//Animate Close on hover over image
//Only for pre-loaded (in HTML) elements
  $("span.image").hover(function(){
    $(".image").toggleClass("blue");
    $(".closeImage").toggleClass("invisible");
    $(".closeImage").toggleClass("visible");
    $(".imageResize").toggleClass("invisible");
    $(".imageResize").toggleClass("visible");
  });  

//Animate close on hover over title
//Glitchy, why? Highlights all new titles when original is hovered
  $("h3.title").hover(function(){
    $(".title").toggleClass("blue");
    $(".closeTitle").toggleClass("invisible");      
    $(".closeTitle").toggleClass("visible");  
    $(".titleResize").toggleClass("invisible");
    $(".titleResize").toggleClass("visible");      
  });  

//Animate close on hover over body
//Only for pre-loaded (in HTML) elements
  $(".body").hover(function(){
    $(".body").toggleClass("blue");
    $(".closeBody").toggleClass("invisible");     
    $(".closeBody").toggleClass("visible");
    $(".bodyResize").toggleClass("invisible");
    $(".bodyResize").toggleClass("visible");        
  });  

//Animate close on hover over it
  $("span.closeImage").hover(function(){
    $(this).parent().toggleClass("blue");
    $(this).parent().toggleClass("red");
  });

  $("span.closeTitle").hover(function(){
    $(this).parent().toggleClass("blue");
    $(this).parent().toggleClass("red");
  });  

  $("span.closeBody").hover(function(){
    $(this).parent().toggleClass("blue");
    $(this).parent().toggleClass("red");
  });    

//Delete elements onclick of delete button
//Only for pre-loaded (in HTML) elements --> jQuery
//If I was storing elements in server, this would work for new too (I believe)
  $("span.closeImage").click(function(){
    $(this).parent().remove();
  });

  $("span.closeTitle").click(function(){
    $(this).parent().remove();
  });

  $("span.closeBody").click(function(){
    $(this).parent().remove();
  }); 

//Resizable Elements
  	$(function() {
    	$( ".resizableImage" ).resizable({
    		maxWidth: 950,
    		minWidth: 300,
    		maxHeight: 300,
    		minHeight: 250
    	});
  	}); 
  	$(function() {
    	$( ".resizableTitle" ).resizable({
    		maxWidth: 510,
    		minWidth: 207,
    		maxHeight: 70,
    		minHeight: 37
    	});
  	}); 
  	$(function() {
    	$( ".resizableText" ).resizable({
    		maxWidth: 1100,
    		minWidth: 500,
    		minHeight: 100
    	});
  	});   	  	

//Drag elements from left and drop actual elements on page 
//Can drop only in highlighted zones, or else the elements for other zones will be dropped instead of intended?

//Add New Title
  $(function() {
    $( "#addTitle" ).draggable({
      drag: function(event, ui){
        $("#titleContent").addClass("dropZone");
      },
      revert: function(invalid){
        $("#titleContent").removeClass("dropZone");
        return true;
      }});
    $( ".droppableTitle" ).droppable({
      drop: function( event, ui ) {
      	$("<h3 class='title resizableTitle'/>").html("<img style='width:20px;height:30px;'class='titleResize leftTitle ui-resizable-handle ui-resizable-w invisible' src='Assets/Sprites/Resize-Bar.png'/><img style='width:20px;height:30px;' class='titleResize rightTitle ui-resizable-handle ui-resizable-e invisible' src='Assets/Sprites/Resize-Bar.png'/><img style='width:20px;height:100px;' class='titleResize bottom ui-resizable-handle ui-resizable-s invisible' src='Assets/Sprites/Resize-Bar.png'/><span class='closeTitle invisible'></span> Add Title Here").appendTo("#titleContent");
      	 $( ".resizableTitle" ).resizable({
    		minWidth: 207,
    		maxHeight: 70,
    		minHeight: 37
    	});
      	$("h3.title").addClass("after");     	 
      	$("#addTitle").draggable({revert:true}); 
        $("#addImage").draggable({revert:true}); 
        $("#addText").draggable({revert:true}); 
        $("#addNav").draggable({revert:true}); 
        $("#titleContent").removeClass("dropZone");              	 
      }
    });    
  });	

//Add new Text(Body)
  $(function() {
    $( "#addText" ).draggable({
      drag: function(event, ui){
        $("#bodyContent").addClass("dropZone");
      },
      revert: function(invalid){
        $("#bodyContent").removeClass("dropZone");
        return true;
      }});      
    $( ".droppableText" ).droppable({
      drop: function( event, ui ) {
      	$("<textarea class='body after' rows='200' cols='30' max-cols='50'><span class='closeBody invisible'></span></textarea>").html("Start Typing Here").appendTo("#bodyContent");
      	 $( ".resizableText" ).resizable({
    		maxWidth: 1100,
    		minWidth: 400,
    		minHeight: 100
    	});
      	$("span.body").addClass("after");
      	$("#addText").draggable({ revert:true}); 
        $("#addTitle").draggable({revert:true}); 
        $("#addImage").draggable({revert:true}); 
        $("#addNav").draggable({revert:true});         
        $("#bodyContent").removeClass("dropZone");         
      }
    });    
  });

//Add new Image --> Can't get to display inline?
//Drop to new line causes page to extend + some problems UNLESS resized.
  $(function() {
    $( "#addImage" ).draggable({
      drag: function(event, ui){
        $("#imageContent").addClass("dropZone");
      },
      revert: function(invalid){
        $("#imageContent").removeClass("dropZone");
        return true;
      }      
    });
    $( ".droppableImage" ).droppable({
      drop: function( event, ui ) {
       	$("<span class='image resizableImage'/>").html("<img style='width:20px;height:100px;'class='imageResize leftImage ui-resizable-handle ui-resizable-w invisible' src='Assets/Sprites/Resize-Bar.png'/><img style='width:20px;height:100px;' class='imageResize rightImage ui-resizable-handle ui-resizable-e invisible' src='Assets/Sprites/Resize-Bar.png'/><img style='width:20px;height:100px;' class='imageResize bottomImage ui-resizable-handle ui-resizable-s invisible' src='Assets/Sprites/Resize-Bar.png'/> <span class='closeImage invisible'></span><img id='picture' src='assets/sprites/image-Placeholder.png'/><br><p id='upload'>ADD IMAGE +</p>").appendTo("#imageContent");
      	 $( ".resizableImage" ).resizable({
    		maxWidth: 950,
    		minWidth: 300,
    		maxHeight: 300,
    		minHeight: 250
    	});
      	$("span.image").addClass("after2");
      	$("#addImage").draggable({ revert:true});
        $("#addTitle").draggable({revert:true});  
        $("#addText").draggable({revert:true}); 
        $("#addNav").draggable({revert:true}); 
        $("#imageContent").removeClass("dropZone");        
      }
    });    
  });

//Add New Page + Nav
  $(function() {
    $( "#addNav" ).draggable({
      drag: function(event, ui){
        $("#pageNav").addClass("dropZone");
      },
      revert: function(invalid){
        $("#pageNav").removeClass("dropZone");
        return true;
      }      
    });
    $( ".droppableNav" ).droppable({
      drop: function( event, ui ) {
      	$("#addNav").draggable({ revert:true});
        $("#addTitle").draggable({revert:true}); 
        $("#addImage").draggable({revert:true}); 
        $("#addText").draggable({revert:true});          
        $("#pageNav").removeClass("dropZone");            	
      }
    });    
  }); 

//Allows for image to be uploaded and previewed in Image holder on page. 
//Image will resize, div will not fit to image.
$('#picture').click(function() {
  $('#fileUpload').click();
});
	function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        $('#picture').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    	}
  	}
  		$("#fileUpload").change(function(){
  		readURL(this);
	});
	}
});


//New View for Editing Page Title(s)
Weeblys.EditPageView = Ember.TextField.extend({
	didInsertElement: function () {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-pages', Weeblys.EditPageView);




