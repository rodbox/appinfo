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
                timer : 0,
                showID    : true,
                btClose    : true
            }


            var param = $.extend(defauts, paramSend);

            this.i++;
            var appinfoID = "appinfo-" + this.i;

            /* Definition de la class en fonction du type de message*/
            var appinfoClass = "appinfo-type-"+param.type;

            /* Construction du message */
            var infoMsg = $("<div>", {
                "id": appinfoID,
                "class": "appinfo-msg " + appinfoClass
            }).html(param.msg)

            /* Ajout du bouton de suppression de message*/
            if (param.btClose){
                var infoMsgBtClose = $('<a>',{"href":"#","class":"bt-close","title":"fermer ce message"}).html("X").click(function (){
                    $.appInfo.del(infoMsg);
                    return false;
                })
                infoMsg.append(infoMsgBtClose);
            }

            /* Ajout de l'id */
            if (param.showID){
                var infoMsgID = $('<span>',{"class":"appinfo-id"}).html(this.i+".");
                infoMsg.prepend(infoMsgID);
            }

            /* fonction timer du message */
            if (param.timer != false && param.timer > 0){
                setTimeout(function (){
                    console.log($.appInfo.del(infoMsg));
 
                },param.timer)
            }

            /* Ajout du message dans le container de messages */
            $('#'+this.infoContainerID).prepend(infoMsg);

            return infoMsg;
        },
        del: function (t){
            t.slideUp(250, function() {
                $(this).remove();
            })
        },
        upd: function(t,paramSend) {
            var defauts = {
                from : "loader",
                to : "success",
                timer : 5000
            }

            var param = $.extend(defauts, paramSend);
            t.removeClass("appinfo-type-"+param.from);
            t.addClass("appinfo-type-"+param.to);

            /* fonction timer du message */
            if (param.timer != false && param.timer > 0){
                setTimeout(function (){
                    console.log($.appInfo.del(t));
 
                },param.timer)
            }
        }
    }
});