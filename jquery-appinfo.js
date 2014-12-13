$(document).ready(function(){
$.appInfo = {
        init: function(paramSend) {

            var defauts = {
                i     : 0,
                id    : "appinfo-container"
            }

            var param = $.extend(defauts, paramSend);

            this.i      = param.i;
            this.infoContainerID = param.id;

            var infoContainer = $("<div>", {
                "id": this.infoContainerID,
                "class": "appinfo-container"
            })

            $('body').prepend(infoContainer);
        },
        add: function (param){
            this.i++;
            var appinfoID = "appinfo-" + this.i;
            var infoMsg = $("<div>", {
                "id": appinfoID,
                "class": "appinfo-msg "
            }).html(param.msg)

            $('#'+this.infoContainerID).prepend(infoMsg);

            return infoMsg;
        }
    }
});