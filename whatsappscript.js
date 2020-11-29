function sendScript(scriptText){
    var allText = scriptText;
    lines = allText.split("\n");

    var i = 0;
    function myLoop(){
        setTimeout(function(){
            if(lines[i]!= ""){
                console.log(lines[i]);

                window.InputEvent = window.Event || window.InputEvent;

                var event = new InputEvent('input', {
                    bubbles: true
                });

                var textbox = document.querySelector('div._1awRl[data-tab="6"]');

                textbox.textContent = lines[i];

                textbox.dispatchEvent(event);

                document.querySelector("button._2Ujuu").click();

            }
            i++;
            if (i < lines.length) {           
                myLoop();             
            }                       
        }, 250)
    }

    myLoop(); 
}

enviarScript(` your desired text goes here
`);
