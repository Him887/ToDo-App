$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	$(this).stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todotext + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});