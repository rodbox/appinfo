$(document).ready(function(){
	
	$.appInfo.init();

	$(document).on("click",".btn-appinfo button",function (){
		var t = $(this);
		var msg = t.data("msg");
		var msgTimer = t.data("msg-timer");
		var msgType = t.data("msg-type");
		var msgAdd = $.appInfo.add({
			'msg':msg,
			'timer':msgTimer,
			'type':msgType
		});
		return false;
	})


	$(document).on("click",".appinfo-type-loader",function (){
		var t = $(this);
		$.appInfo.upd(t);
	})

	$(document).on("click","#toggle-loader-demo",function (){
		var t = $(".appinfo-type-loader");
		$.appInfo.upd(t);
	})

	$(document).on("click","#all-delete",function (){
		var t = $(".appinfo-msg");
		$.appInfo.del(t);
	})
});