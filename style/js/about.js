

var copycontent = 'click to copy'
var copiedcontent = 'copied!'



window.onload=function(){
    /* CREDIT FOR CLIPBOARD.JS: 
    *
    * clipboard.js v2.0.6
    * https://clipboardjs.com/
    * 
    * Licensed MIT © Zeno Rocha
    */
    var clipboard = new ClipboardJS('.copylink', {
        text: function (trigger) {
            return trigger.getAttribute('data-clipboard-text');
        }
    });

    var content = copycontent;

    var after = document.createElement("p");
    after.classList.add("copy");
    after.innerHTML = copycontent;

    /* CREDIT FOR TIPPY.JS: 
    *
    * tippy.js v6.2.3
    * https://atomiks.github.io/tippyjs/
    * 
    */

    tippy('.copylink', {
        content: after,
        allowHTML: true,
        hideOnClick: false,
    });

    clipboard.on('success', function(e) {
        after.innerHTML = copiedcontent;
        setInterval(()=>{after.innerHTML = copycontent}, 2000);
    
        e.clearSelection();
    });




}


