$(document).ready(function(){
	
	$.appInfo.init();

	$(document).on("click",".btn-appinfo button",function (){
		var t = $(this);
		var msg = t.data("msg");
		var msgAdd = $.appInfo.add({
			'msg':msg,
		});
		return false;
	})
});