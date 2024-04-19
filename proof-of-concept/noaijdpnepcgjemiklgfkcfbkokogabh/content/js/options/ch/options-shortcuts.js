'use strict';
var SL_DARK="invert(95%)";

var UNBLOCK = 0;
var HK1 = "";
var HK2 = "";
var HK3 = "";
var HK4 = "";
var HK5 = "";
var HK6 = "";
var HK7 = "";
var HK8 = "";
var HK9 = "";
var HK10 = "";
var HK11 = "";

(function(){GEBI("SRV1").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){NoneColor(1);},!1); } )();
(function(){GEBI("SL_del1").addEventListener("click",function(){SL_DEL_AUTO(1);},!1);} )();
(function(){GEBI("SRV1").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){NoneColor(2);},!1); } )();
(function(){GEBI("SRV2").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV3").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV3"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV3").addEventListener("mouseout",function(){NoneColor(3);},!1); } )();
(function(){GEBI("SL_del3").addEventListener("click",function(){SL_DEL_AUTO(3);},!1);} )();
(function(){GEBI("SRV3").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV4").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV4"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV4").addEventListener("mouseout",function(){NoneColor(4);},!1); } )();
(function(){GEBI("SRV4").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV5").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){NoneColor(5);},!1); } )();
(function(){GEBI("SL_del5").addEventListener("click",function(){SL_DEL_AUTO(5);},!1);} )();
(function(){GEBI("SRV5").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){NoneColor(6);},!1); } )();
(function(){GEBI("SRV6").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV7").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV7"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV7").addEventListener("mouseout",function(){NoneColor(7);},!1); } )();
(function(){GEBI("SRV7").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV8").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV8"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV8").addEventListener("mouseout",function(){NoneColor(8);},!1); } )();
(function(){GEBI("SRV8").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV9").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV9"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event); SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV9").addEventListener("mouseout",function(){NoneColor(9);},!1); } )();
(function(){GEBI("SRV9").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV10").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV10"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV10").addEventListener("mouseout",function(){NoneColor(10);},!1); } )();
(function(){GEBI("SRV10").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV11").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV11"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV11").addEventListener("mouseout",function(){NoneColor(11);},!1); } )();
(function(){GEBI("SRV11").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV12").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV12"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV12").addEventListener("mouseout",function(){NoneColor(12);},!1); } )();
(function(){GEBI("SRV12").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SRV13").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV13"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_MSG_HANDLER(event);},!1); } )();
(function(){GEBI("SRV13").addEventListener("mouseout",function(){NoneColor(13);},!1); } )();
(function(){GEBI("SRV13").addEventListener("paste",function(){ PREVENT_PASTE(event); },!1);} )();

(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){GEBI("reset_all1").addEventListener("click",function(){ RESET_ALL_HK(1);},!1);} )();
(function(){GEBI("reset_all2").addEventListener("click",function(){ RESET_ALL_HK(2);},!1);} )();
(function(){GEBI("reset_all3").addEventListener("click",function(){ RESET_ALL_HK(3);},!1);} )();
(function(){GEBI("reset_all4").addEventListener("click",function(){ RESET_ALL_HK(4);},!1);} )();
(function(){GEBI("reset_all5").addEventListener("click",function(){ RESET_ALL_HK(5);},!1);} )();
(function(){GEBI("reset_all6").addEventListener("click",function(){ RESET_ALL_HK(6);},!1);} )();
(function(){GEBI("reset_all7").addEventListener("click",function(){ RESET_ALL_HK(7);},!1);} )();
(function(){GEBI("reset_all8").addEventListener("click",function(){ RESET_ALL_HK(8);},!1);} )();
(function(){GEBI("reset_all9").addEventListener("click",function(){ RESET_ALL_HK(9);},!1);} )();
(function(){GEBI("reset_all10").addEventListener("click",function(){ RESET_ALL_HK(10);},!1);} )();
(function(){GEBI("reset_all11").addEventListener("click",function(){ RESET_ALL_HK(11);},!1);} )();
(function(){GEBI("reset_all12").addEventListener("click",function(){ RESET_ALL_HK(12);},!1);} )();
(function(){GEBI("reset_all13").addEventListener("click",function(){ RESET_ALL_HK(13);},!1);} )();

(function(){window.addEventListener("mousemove",function(){
	ALL_NONES();
	BUILD_RESET_ICN(1);
	BUILD_RESET_ICN(2);
	BUILD_RESET_ICN(3);
	BUILD_RESET_ICN(4);
	BUILD_RESET_ICN(5);
	BUILD_RESET_ICN(6);
	BUILD_RESET_ICN(7);
	BUILD_RESET_ICN(8);
	BUILD_RESET_ICN(9);
	BUILD_RESET_ICN(10);
	BUILD_RESET_ICN(11);
	BUILD_RESET_ICN(12);
	BUILD_RESET_ICN(13);
},!1);} )();

(function(){window.addEventListener("click",function(event){
	SL_MSG_HANDLER(event);
},!1);} )();

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

//AUTOSAVE BLOCK
window.addEventListener('change',function(e){
	save_options(0);	
},!1);
//AUTOSAVE BLOCK







(function(){
	GEBI("IMT_HK1").addEventListener("click",function(){
		if(GEBI("IMT_HK1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK2").addEventListener("click",function(){
		if(GEBI("IMT_HK2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK3").addEventListener("click",function(){
		if(GEBI("IMT_HK3").checked==false) GEBI("SL_HK3").style.display='block';
		else GEBI("SL_HK3").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK4").addEventListener("click",function(){
		if(GEBI("IMT_HK4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK5").addEventListener("click",function(){
		if(GEBI("IMT_HK5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK6").addEventListener("click",function(){
		if(GEBI("IMT_HK6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK7").addEventListener("click",function(){
		if(GEBI("IMT_HK7").checked==false) GEBI("SL_HK7").style.display='block';
		else GEBI("SL_HK7").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK8").addEventListener("click",function(){
		if(GEBI("IMT_HK8").checked==false) GEBI("SL_HK8").style.display='block';
		else GEBI("SL_HK8").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK9").addEventListener("click",function(){
		if(GEBI("IMT_HK9").checked==false) GEBI("SL_HK9").style.display='block';
		else GEBI("SL_HK9").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK10").addEventListener("click",function(){
		if(GEBI("IMT_HK10").checked==false) GEBI("SL_HK10").style.display='block';
		else GEBI("SL_HK10").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK11").addEventListener("click",function(){
		if(GEBI("IMT_HK11").checked==false) GEBI("SL_HK11").style.display='block';
		else GEBI("SL_HK11").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK12").addEventListener("click",function(){
		if(GEBI("IMT_HK12").checked==false) GEBI("SL_HK12").style.display='block';
		else GEBI("SL_HK12").style.display='none';
	},!1);
})();

(function(){
	GEBI("IMT_HK13").addEventListener("click",function(){
		if(GEBI("IMT_HK13").checked==false) GEBI("SL_HK13").style.display='block';
		else GEBI("SL_HK13").style.display='none';
	},!1);
})();

(function(){INIT();})();


function GEBI(id){ return document.getElementById(id);}

function CONSTRUCTOR(){
  GEBI('SL_SH_OR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMsot')));
  GEBI('SL_CL_TR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct')));
  GEBI("SL_ttl").appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
  GEBI("SL_info").title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp');
  GEBI('SL_CLOSE').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose')));
  var tws = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS');
  GEBI('SL_twsc1').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc3').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc5').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc6').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')));
  GEBI('SL_cit').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct')));
  GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptTrBut')));
  GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extInvTr')));
  GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
  GEBI('SL_tr_with_target').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeTa')));
  GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
  GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
  GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

  switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/imtranslator-opera-shortcuts/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/imtranslator-chrome-hotkeys/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
  }
  ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}


function INIT(){
  GEBI('SL_translate_container').style.opacity="1";
  ACTIVATE_MENU_ELEMENT(9);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  CONSTRUCTOR();
  DefaultText();

  var tempHK1 = FExtension.store.get("SL_HKset").split("|");
  if(tempHK1[2]=="true"){
	 GEBI("IMT_HK1").checked=true;
         GEBI("SL_HK1").style.display="none";
  } else {
	 GEBI("IMT_HK1").checked=false;
         GEBI("SL_HK1").style.display="block";
  }
  GEBI("SRV1").value="";
  if(FExtension.store.get("SL_HK_gt1")!="None") GEBI("SRV1").value=FExtension.store.get("SL_HK_gt1");

  var tempHK2 = FExtension.store.get("SL_HKset_inv").split("|");
  if(tempHK2[2]=="true"){
	 GEBI("IMT_HK2").checked=true;
         GEBI("SL_HK2").style.display="none";
  } else {
	 GEBI("IMT_HK2").checked=false;
         GEBI("SL_HK2").style.display="block";
  }
  GEBI("SRV2").value=FExtension.store.get("SL_HK_gt2");
                             
  var tempHK3 = FExtension.store.get("SL_FK_box1");
  if(tempHK3=="true"){
	 GEBI("IMT_HK3").checked=true;
         GEBI("SL_HK3").style.display="none";
  } else {
	 GEBI("IMT_HK3").checked=false;
         GEBI("SL_HK3").style.display="block";
  }
  GEBI("SRV3").value=FExtension.store.get("SL_HK_it1");

  var tempHK4 = FExtension.store.get("SL_FK_box2");
  if(tempHK4=="true"){
	 GEBI("IMT_HK4").checked=true;
         GEBI("SL_HK4").style.display="none";
  } else {
	 GEBI("IMT_HK4").checked=false;
         GEBI("SL_HK4").style.display="block";
  }
  GEBI("SRV4").value=FExtension.store.get("SL_HK_it2");

  var tempHK5 = FExtension.store.get("SL_translation_mos_bbl");
  if(tempHK5=="true"){
	 GEBI("IMT_HK5").checked=true;
         GEBI("SL_HK5").style.display="none";
  } else {
	 GEBI("IMT_HK5").checked=false;
         GEBI("SL_HK5").style.display="block";
  }
  GEBI("SRV5").value=FExtension.store.get("SL_HK_bb1");

  var tempHK6 = FExtension.store.get("SL_HK_wptbox1");
  if(tempHK6=="true"){
	 GEBI("IMT_HK6").checked=true;
         GEBI("SL_HK6").style.display="none";
  } else {
	 GEBI("IMT_HK6").checked=false;
         GEBI("SL_HK6").style.display="block";
  }
  GEBI("SRV6").value=FExtension.store.get("SL_HK_wpt1");

  var tempHK7 = FExtension.store.get("SL_HK_wptbox2");
  if(tempHK7=="true"){
	 GEBI("IMT_HK7").checked=true;
         GEBI("SL_HK7").style.display="none";
  } else {
	 GEBI("IMT_HK7").checked=false;
         GEBI("SL_HK7").style.display="block";
  }
  GEBI("SRV7").value=FExtension.store.get("SL_HK_wpt2");

  var tempHK8 = FExtension.store.get("SL_HK_optbox");
  if(tempHK8=="true"){
	 GEBI("IMT_HK8").checked=true;
         GEBI("SL_HK8").style.display="none";
  } else {
	 GEBI("IMT_HK8").checked=false;
         GEBI("SL_HK8").style.display="block";
  }
  GEBI("SRV8").value=FExtension.store.get("SL_HK_opt");

  var tempHK9 = FExtension.store.get("SL_HK_btnbox");
  if(tempHK9=="true"){
	 GEBI("IMT_HK9").checked=true;
         GEBI("SL_HK9").style.display="none";
  } else {
	 GEBI("IMT_HK9").checked=false;
         GEBI("SL_HK9").style.display="block";
  }
  GEBI("SRV9").value=FExtension.store.get("SL_HK_btn");

  var tempHK10 = FExtension.store.get("SL_change_lang_HKbox_it");
  if(tempHK10=="true"){
	 GEBI("IMT_HK10").checked=true;
         GEBI("SL_HK10").style.display="none";
  } else {
	 GEBI("IMT_HK10").checked=false;
         GEBI("SL_HK10").style.display="block";
  }
  GEBI("SRV10").value=FExtension.store.get("SL_change_lang_HK_it");

  var tempHK11 = FExtension.store.get("SL_HK_bb2box");
  if(tempHK11=="true"){
	 GEBI("IMT_HK11").checked=true;
         GEBI("SL_HK11").style.display="none";
  } else {
	 GEBI("IMT_HK11").checked=false;
         GEBI("SL_HK11").style.display="block";
  }
  GEBI("SRV11").value=FExtension.store.get("SL_HK_bb2").replace("Escape","Esc");


  var tempHK12 = FExtension.store.get("SL_HK_SObox_wpt");
  if(tempHK12=="true"){
	 GEBI("IMT_HK12").checked=true;
         GEBI("SL_HK12").style.display="none";
  }else{
	 GEBI("IMT_HK12").checked=false;
         GEBI("SL_HK12").style.display="block";
  }
  GEBI("SRV12").value=FExtension.store.get("SL_HK_SO_wpt");

  var tempHK13 = FExtension.store.get("SL_HK_CTbox_wpt");
  if(tempHK13=="true"){
	 GEBI("IMT_HK13").checked=true;
         GEBI("SL_HK13").style.display="none";
  }else{
	 GEBI("IMT_HK13").checked=false;
         GEBI("SL_HK13").style.display="block";
  }
  GEBI("SRV13").value=FExtension.store.get("SL_HK_CT_wpt").replace("Escape","Esc");


  var SL_THEMEmode = FExtension.store.get("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;
  ALL_NONES();
  COLORED_of_the_HK_conflicts();
}

function save_options(){
 setTimeout(function() {
 if(UNBLOCK == 0) {
	  GEBI("HK_conflicts_msg").inerText="";

	        // GT
		FExtension.store.set("SL_HKset", "3|88|"+GEBI("IMT_HK1").checked);
		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("IMT_HK2").checked);
		FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);

		FExtension.store.set("SL_HK_gt2", GEBI("SRV2").value);

	        // IT
		FExtension.store.set("SL_FK_box1", GEBI("IMT_HK3").checked);
		FExtension.store.set("SL_HK_it1", GEBI('SRV3').value);
		
		FExtension.store.set("SL_FK_box2", GEBI("IMT_HK4").checked);
		FExtension.store.set("SL_HK_it2",GEBI("SRV4").value);
		FExtension.store.set("SL_change_lang_HKbox_it", GEBI("IMT_HK10").checked);
		FExtension.store.set("SL_change_lang_HK_it",GEBI("SRV10").value);

	        // BBL

		FExtension.store.set("SL_translation_mos_bbl", GEBI("IMT_HK5").checked);
		FExtension.store.set("SL_HK_bb1",GEBI("SRV5").value);


		FExtension.store.set("SL_HK_bb2box", GEBI("IMT_HK11").checked);
		FExtension.store.set("SL_HK_bb2", GEBI('SRV11').value.replace("Esc","Escape"));

	        // WPT
		FExtension.store.set("SL_HK_wptbox1", GEBI("IMT_HK6").checked);
		FExtension.store.set("SL_HK_wpt1",GEBI("SRV6").value);
		FExtension.store.set("SL_HK_wptbox2", GEBI("IMT_HK7").checked);
		FExtension.store.set("SL_HK_wpt2",GEBI("SRV7").value);                                                   
		FExtension.store.set("SL_HK_SObox_wpt", GEBI("IMT_HK12").checked);
		FExtension.store.set("SL_HK_SO_wpt",GEBI("SRV12").value);                                                   
		FExtension.store.set("SL_HK_CTbox_wpt", GEBI("IMT_HK13").checked);
		FExtension.store.set("SL_HK_CT_wpt",GEBI("SRV13").value);                                                   



	        // OPT
		FExtension.store.set("SL_HK_optbox", GEBI("IMT_HK8").checked);
		FExtension.store.set("SL_HK_opt",GEBI("SRV8").value);                                                   

	        // BTN
		FExtension.store.set("SL_HK_btnbox", GEBI("IMT_HK9").checked);
		FExtension.store.set("SL_HK_btn",GEBI("SRV9").value);

		FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();
                COLORED_of_the_HK_conflicts();
   }
 }, 100);
}




function DefaultText(){
  GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK');
}



function SL_delme(ob){
 UNBLOCK = 1;
 GEBI('SRV'+ob).style.color="#ccc";
 save_options();
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
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  parent.frames["menu"].location.reload();
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
		GEBI("HK_conflicts_msg").style.filter=SL_DARK;
		GEBI("SL_kbd").style.filter=SL_DARK;

		var E = document.getElementsByClassName("SLMSG");
		for(var j=0; j<E.length; j++) E[j].style.filter=SL_DARK;

		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;
	}
}

function ALL_NONES(){
	NoneColor(1);
	NoneColor(2);
	NoneColor(3);
	NoneColor(4);
	NoneColor(5);
	NoneColor(6);
	NoneColor(7);
	NoneColor(8);
	NoneColor(9);
	NoneColor(10);
	NoneColor(11);
	NoneColor(12);
	NoneColor(13);
}


function RESET_ALL_HK(id){
        var st = "";
        switch (id){
         case 1: st = 'SL_HK_gt1'; break;
         case 2: st = 'SL_HK_gt2'; break;
         case 3: st = 'SL_HK_it1'; break;
         case 4: st = 'SL_HK_it2'; break;
         case 5: st = 'SL_HK_bb1'; break;
         case 6: st = 'SL_HK_wpt1'; break;
         case 7: st = 'SL_HK_wpt2'; break;
         case 8: st = 'SL_HK_opt'; break;
         case 9: st = 'SL_HK_btn'; break;
         case 10: st = 'SL_change_lang_HK_it'; break;
         case 11: st = 'SL_HK_bb2'; break;
         case 12: st = 'SL_HK_SO_wpt'; break;
         case 13: st = 'SL_HK_CT_wpt'; break;

	}
	for(var i=0; i<PACK_PARAMS.length; i++){
		var tmp = PACK_PARAMS[i].split(";");
		var curDBname = tmp[0];
		var curDBparam = tmp[1];
		var DBparam = FExtension.store.get(curDBname);
		if(curDBname == st){
			FExtension.store.set(curDBname, curDBparam);			
			GEBI("MSG"+id).style.visibility="hidden";
		}
	}
	var newParam = FExtension.store.get(st);
	newParam = newParam.replace("Escape","Esc");
	GEBI("SRV"+id).value=newParam;
        COLORED_of_the_HK_conflicts();
}

function BUILD_RESET_ICN(ob){
	GEBI("reset_all"+ob).title="Reset to default";
}

function SL_DEL_AUTO(ob){
	GEBI("SRV"+ob).value = "Auto Translate"; 
	GEBI("SRV"+ob).placeholder = "Auto Translate"; 
        GEBI("MSG"+ob).style.visibility="hidden";
	save_options(0);
}                          

function COLORED_of_the_HK_conflicts(){
  var HK = new Array(12);
  var clrs = new Array(12);

  HK[0] = GEBI("SRV1").value;
  HK[1] = GEBI("SRV2").value;
  HK[2] = GEBI("SRV3").value;
  HK[3] = GEBI("SRV4").value;
  HK[4] = GEBI("SRV5").value;
  HK[5] = GEBI("SRV6").value;
  HK[6] = GEBI("SRV7").value;
  HK[7] = GEBI("SRV8").value;
  HK[8] = GEBI("SRV9").value;
  HK[9] = GEBI("SRV10").value;
  HK[10] = GEBI("SRV11").value;
  HK[11] = GEBI("SRV12").value;
  HK[12] = GEBI("SRV13").value;
  for(var t=0; t<HK.length; t++) GEBI("SL_HK_TR"+(t+1)).style.background="white";
  
  clrs[0] = "#fcb2b2";
  clrs[1] = "#fcd5b2";
  clrs[2] = "#dcfcb2";
  clrs[3] = "#b2fceb";
  clrs[4] = "#b2d2fc";

  clrs[5] = "#b4b2fc";
  clrs[6] = "#d4b2fc";
  clrs[7] = "#fbb2fc";
  clrs[8] = "#fcb2ca";
  clrs[9] = "#fc7696";
  clrs[10] = "#8676fc";
  clrs[11] = "#76cafc";
  clrs[12] = "#8bfc76";

  GEBI("SL_kbd").style.visibility="hidden";
  var ind = 0;
  for(var i=0; i<HK.length; i++){
   var cnt = 0;
   var clr = clrs[ind++];
   for(var j=0; j<HK.length; j++){
//     if(HK[j] == HK[i] && HK[j] != "Esc" && HK[j] != "" ){
     if(HK[j] == HK[i] && HK[j] && HK[j] != "" ){
      if(GEBI("SRV"+(i+1)) != GEBI("SRV"+(j+1))){
        GEBI("SL_HK_TR"+(j+1)).style.background=clr;  
        GEBI("SL_HK_TR"+(i+1)).style.background=clr;       
	cnt++;
      }
     }
   }
//   if(cnt>0) ind++;
     if(cnt>0){
	GEBI("SL_kbd").style.visibility="visible";
        GEBI('SL_kbd').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg1')+ " " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg2');
    }
  }
}

                          