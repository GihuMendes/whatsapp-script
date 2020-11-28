function enviarScript(scriptText){
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

enviarScript(` União Flasco

É a união Flasco
Mano, é sem caô
Batendo punheta com pau no ventilador
E se essa mina fala merda, vai ficar sem cabelo
Eu vou raspar a cabeça dela sem usar barbeador
É a união Flasco
Câmera Privê
Tu responde o chat enquanto eu meto ni você
Magé é do lado da minha casa, nessa porra caiu ET
Se eles brotar chei de cutcharra, eu como eles e você
É a união Flasco
Vai tomar no cu
Se tu é Fluminense, mano, chupa meu peru
Só tem maluco abafa-crack nessa porra dessa equipe
É o trem bala da colina carregando AR-15
É a união Flasco
Nova Ordem Mundial
Os botafoguense tudo mamando o meu pau
E pra tu namorar comigo, vai ter que fazer anal
E se tiver dor de barriga, tu vai cagar no meu pau
É a união Flasco
Bota o Gabigol
Ribamar cheirado nesse jogo acelerou
Se tem traveco nessa festa, por que ninguém me avisou?
O meu flow 'tá tipo Ronaldo: Se tem bunda, eu meto gol
É a união Flasco
Puta que pariu
Tua boca é um colete e o meu pau é um fuzil
Não vem falar inglês pra mim, meu mano, eu moro no Brasil
Eu 'to embrazado de Skol com funk do Buffalo Bill
É a união Flasco
'To passando o aço
Se 'tá respirando, eu taco-lhe o vapo vapo
E se não tiver respirando, eu vejo se o corpo tá quente
Rima de necrofilia, um salve pro presidente
É a união Flasco
É a novidade
Eu ressuscitei e trouxe essa merdapostagem
A minha piroca é o porta malas, a tua bunda é bagagem
Tu não come travesti, mano, isso é muita viadagem
É a união Flasco
Uh, uh, uh
Quem 'tá respirando gosta de lamber peru
Eu 'to falando muita merda nesse beat do Haku
Se a tua raba é uma floresta, meu pau é o Zubumafu
É a união Flasco
Passei Rexona
Eu não sou boiola pra ficar pickando Sona
Se a tua boca é um forró, a minha piruca é a sanfona
A xota dessa mina é verde, eu acho que eu comi a Fiona
É a união Flasco
É a seleção
Batendo punheta, mas eu nem 'to com tesão
A quarentena 'tá chatona e o meu pau 'tá na minha mão
Eu 'to no meio da aula online e que se foda, meu irmão
É a união Flasco
Mano, eu sou real
Uma track inteira só falando do meu pau
Eu sou o melhor do shit trap e nunca vai ter discussão
Esses mano pensa em dinheiro, eu penso na minha diversão
É a união Flasco
Esse é o meu momento
Piscando o meu cu, a pica faz o movimento
'Cê pode ter várias views mesmo o teu som sendo sem graça
Eu sou rei do underground e bato punheta na praça
É a união Flasco
`);