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
                timer   : 0,
                open    : true,
                showID  : false,
                type    : "default",
                msgMeta : "",
                btClose : true
            }

            var param = $.extend(defauts, paramSend);

            this.i++;
            var appinfoID = "appinfo-" + this.i;

            /* Definition de la class en fonction du type de message*/
            var appinfoClass = "appinfo-type-"+param.type;

            /* Definition de la class open message*/
            var appinfoOpenClass = (param.open)?"appinfo-open":"";

            /* Construction container du message */
            var infoMsg = $("<div>", {
                "id": appinfoID,
                "class": "appinfo-msg " + appinfoClass + " " + appinfoOpenClass
            });

            /* contruction du message */
            var msg = $('<p>',{"class":"appinfo-content"}).html(param.msg);
            infoMsg.html(msg);

            /* contruction du meta message */
            if (param.msgMeta != ""){
                var msgMeta = $('<p>',{"class":"appinfo-content-meta"}).html(param.msgMeta);
                infoMsg.addClass('appinfo-content-active');
                infoMsg.append(msgMeta);
            }

            /* Ajout du bouton de suppression de message*/
            if (param.btClose){
                var infoMsgBtClose = $('<a>',{"href":"#","class":"bt-close","title":"fermer ce message"}).html("X").click(function (){
                    $.appInfo.del(infoMsg);
                    return false;
                })
                infoMsg.prepend(infoMsgBtClose);
            }

            /* Ajout de l'id */
            if (param.showID){
                var infoMsgID = $('<span>',{"class":"appinfo-id"}).html(this.i+".");
                infoMsg.prepend(infoMsgID);
            }

            /* fonction timer du message */
            if (param.timer != false && param.timer > 0){
                setTimeout(function (){
                    $.appInfo.del(infoMsg);
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
                open    : true,
                from    : "loader",
                to      : "success",
                msg     : "Opération validé",
                msgMeta     : "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                timer   : 5000
            }

            var param = $.extend(defauts, paramSend);
            t.removeClass("appinfo-type-"+param.from);
            t.addClass("appinfo-type-"+param.to);

            /* Mis a jour du message */
            t.find(".appinfo-content").html(param.msg);

            /* Definition de la class open message*/
            var appinfoOpenClass = (param.open)?"appinfo-open":"";
            t.addClass(appinfoOpenClass);


           
            if (param.msgMeta != ""){
                var msgMeta = $('<p>',{"class":"appinfo-content-meta"}).html(param.msgMeta);
                t.append(msgMeta);
                t.addClass('appinfo-content-active');
            }

            /* fonction timer du message */
            if (param.timer != false && param.timer > 0){
                setTimeout(function (){
                    $.appInfo.del(t);
 
                },param.timer)
            }
        }
    }
});