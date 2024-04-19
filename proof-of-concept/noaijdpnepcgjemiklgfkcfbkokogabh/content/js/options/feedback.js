var SL_DARK="invert(95%)";

(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
window.addEventListener("load",function(){ 
 ACTIVATE_MENU_ELEMENT(7);
 GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
 CONSTRUCTOR();
},!1);
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab('https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/');},!1);} )();
(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

function GEBI(id){ return document.getElementById(id);}

function CONSTRUCTOR(){
 GEBI('SL_translate_container').style.opacity="1";
 var v = FExtension.bg.ImTranslatorBG.Version();
 var ln = FExtension.store.get("SL_LOCALIZATION");
 if(ln == "bg" || ln == "sk" || ln == "tl" || ln=="vi" || ln=="sr") ln="en";
 GEBI('SL_mailer').src = GEBI('SL_mailer').src + ln;
 GEBI('SL_mailer').src = GEBI('SL_mailer').src.replace("v=","v="+ v);
 GEBI('SL_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')));
 GEBI('SL_FBK1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFBK1')));
 GEBI('SL_FBK2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFBK2')));
 GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
 GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
 GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
 GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

 var SL_THEMEmode = FExtension.store.get("THEMEmode");
 if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
 else GEBI("SL_THEME").value = 1;
 ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}

function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  parent.frames["menu"].location.reload();
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  location.reload();
}

function SL_SAVE_THEME(){
  FExtension.store.set("THEMEmode", GEBI("SL_THEME").value);
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  location.reload();
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var clr="#BF7D44";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("SL_mailer").style.filter=SL_DARK;
		GEBI("SL_mailer").style.background="#fff";
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;  
	}
}
