(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
    },!1);
})();

function CONTRIBUTIN(){
  GEBI("d0").href="https://imtranslator.net"+_CGI+"&a=0";
}

function CONSTRUCTOR(){
	GEBI('SL_h3').innerText="v."+FExtension.bg.ImTranslatorBG.Version();  
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTITLE')));
//	GEBI('SL_PP').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extContribution_ttl');
	GEBI('SL_BG').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extChTrApp')));
        CONTRIBUTIN();
}
function GEBI(id){ return document.getElementById(id);}