'use strict';
function GEBI(id){ return document.getElementById(id);}
(function(){
	LOCALIZATION();        
} )();

function LOCALIZATION(){	
	GEBI('SL_menu_h1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')));
	GEBI('SL_m5').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHistory_ttl')));
	GEBI('SL_m9').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_m6').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp')));
	GEBI('SL_m7').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')));
	var Ab = "© ImTranslator";
        if(FExtension.store.get("SL_LOCALIZATION")=="en") Ab = "About";
        GEBI('SL_m8').appendChild(document.createTextNode(Ab));
	GEBI('SL_m10').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV')));
	CONTRIBUTION();
}



if(GEBI('M_D1')) GEBI('M_D1').addEventListener("click",function(){M_DONATE_links(1);},!1);
if(GEBI('M_D2')) GEBI('M_D2').addEventListener("click",function(){M_DONATE_links(2);},!1);
if(GEBI('M_D3')) GEBI('M_D3').addEventListener("click",function(){M_DONATE_links(3);},!1);
if(GEBI('M_D4')) GEBI('M_D4').addEventListener("click",function(){M_DONATE_links(4);},!1);

if(GEBI('SL_HIST')) GEBI('SL_HIST').addEventListener("click",function(){SET_HISTORY_READY();},!1);

function CONTRIBUTION(){
       GEBI("d0").href='https://imtranslator.net'+_CGI+'&a=0';
}

            
function M_DONATE_links(st){
	var link = 'https://imtranslator.net'+_CGI+'&a=0';
 	switch(st){
		case 1: link = 'https://imtranslator.net'+_CGI+'&a=5'; break;
		case 2: link = 'https://imtranslator.net'+_CGI+'&a=10'; break;
		case 3: link = 'https://imtranslator.net'+_CGI+'&a=20'; break;
		case 4: link = 'https://imtranslator.net'+_CGI+'&a=0'; break;
	}
	M_OPEN_WINDOW(link);
}

function M_OPEN_WINDOW(url){
        window.open(url, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes,fullscreen=yes');
}

function SET_HISTORY_READY(){
	SL_setTEMP("SL_anchor","");
        GEBI("SL_HIST").href="history.html";
}


function SL_setTEMP(cname, cvalue) {
    localStorage[cname] = cvalue;
}

