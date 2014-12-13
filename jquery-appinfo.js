$(document).ready(function(){
$.appInfo = {
        init: function(paramSend) {

            var defauts = {
                i     : 0,
                id    : "appinfo-container",

            }

            var param = $.extend(defauts, paramSend);

            this.i      = param.i;
            this.infoContainerID = param.id;
            this.timer  = parseInt(param.timer);

            var infoContainer = $("<div>", {
                "id": this.infoContainerID,
                "class": "appinfo-container"
            })

            $('body').prepend(infoContainer);
        },
        add: function (paramSend){
            var defauts = {
                timer : 0,
                type    : "default"
            }

            var param = $.extend(defauts, paramSend);

            this.i++;
            var appinfoID = "appinfo-" + this.i;

            /* Definition de la class en fonction du type de message*/
            var appinfoClass = "appinfo-"+param.type;

            /* Construction du message */
            var infoMsg = $("<div>", {
                "id": appinfoID,
                "class": "appinfo-msg " + appinfoClass
            }).html(param.msg)

            /* Ajout du bouton de suppression de message*/
            var infoMsgBtClose = $('<a>',{"href":"#","class":"bt-close","title":"fermer ce message"}).html("X").click(function (){
                infoMsg.remove();
            })
            infoMsg.append(infoMsgBtClose);

            /* fonction timer du message */
            if (param.timer != false && param.timer > 0){
                setTimeout(function (){
                    infoMsg.remove();
                },param.timer)
            }

            /* Ajout du message dans le container de messages */
            $('#'+this.infoContainerID).prepend(infoMsg);

            return infoMsg;
        }
    }
});