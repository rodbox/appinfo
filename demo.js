$(document).ready(function(){
	
	$.appInfo.init();

	$(document).on("click",".btn-appinfo button",function (){
		var t = $(this);
		var msg = t.data("msg");
		var msgTimer = t.data("msg-timer");
		var msgAdd = $.appInfo.add({
			'msg':msg,
			'timer':msgTimer,
		});
		return false;
	})
});