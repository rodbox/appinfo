$(document).ready(function(){
	
	$.appInfo.init();

	$(document).on("click",".btn-appinfo button",function (){
		var msgAdd = $.appInfo.add($(this).data());
		return false;
	})


	$(document).on("click",".appinfo-type-loader",function (){
		var t = $(this);
		$.appInfo.upd(t);
	})

	$(document).on("click",".toggle-loader-demo",function (){
		var t = $(".appinfo-type-loader");
		$.appInfo.upd(t,$(this).data());
	})

	$(document).on("click","#all-delete",function (){
		var t = $(".appinfo-msg");
		$.appInfo.del(t);
	})
});