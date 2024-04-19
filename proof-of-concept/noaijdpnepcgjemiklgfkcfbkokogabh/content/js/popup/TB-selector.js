var LIMIT=5000;
var SL_DARK="invert(95%)";
var LIMITsplit=150;
var SL_SETINTERVAL_ST = 0;
var TTSDetLang="";
var DetLang="";
var TempDetLang4History="";
var DetLangName="";
var BackDetLang="en";
var SL_no_detect="";
var CATCHED_TEXT=0;
var CLOSER=0;
var ListProviders="";
var SL_DETECT="";
var SL_TEMPKEYSTRING="";
var SL_KEYCOUNT={ length: 0 };
var SL_KEYSTRING = "";
var SL_WRONGLANGUAGEDETECTED = 0;
var SL_TRANS_TEXT = "";
var ALLvoices = FExtension.bg.ImTranslatorBG.ALLvoices;
var GTTS_length=200;
var BACK_VIEW=FExtension.store.get("SL_BACK_VIEW");
var TTSbackupLangs="zh,zt,en,de,hi,id,it,nl,pl,es,ru,ja,ko,fr,pt";
var globaltheQ="";
var synth = window.speechSynthesis;
var TheVolume=10;
var TheNewText = "";
var TheNewLang = "";
var TheNewBox = "";
var FirstLoop = 0;
var SL_EVENT="";
var YSID = "";
var YSIDold = "";
var YSIDstatus = false;

var BOXCONTENT = "";
var GLOBAL_HEIGHT = 670;
var GLOB_BACK_HEIGHT=118;
var GLOB_BOX=1;

'use strict';




var SL_BaseLanguages = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages');
var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));
var SL_LanguagesExt = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguagesNew'));
var SL_FAV_LANGS_IMT = FExtension.store.get("SL_FAV_LANGS_IMT");
var SL_FAV_MAX = FExtension.store.get("SL_FAV_MAX");
var SL_FAV_START = FExtension.store.get("SL_FAV_START");

if(localStorage["SL_other_gt"]=="1"){   
	LISTofPR = FExtension.store.get("SL_ALL_PROVIDERS_GT").split(",");
} else LISTofPR[0]="Google";

for (var SL_I = 0; SL_I < LISTofPR.length; SL_I++){
    switch(LISTofPR[SL_I]){
	case "Google": LISTofPRpairs[SL_I]=LISTofLANGsets[0];break;
	case "Microsoft": LISTofPRpairs[SL_I]=LISTofLANGsets[1];break;
	case "Translator": LISTofPRpairs[SL_I]=LISTofLANGsets[2];break;
	case "Yandex": LISTofPRpairs[SL_I]=LISTofLANGsets[3];break;
    }	
}


var BASELANGS =    new Array ();
var SL_BaseLnum = SL_BaseLanguages.split(",");
for(var i = 0; i < SL_BaseLnum.length; i++) BASELANGS.push(SL_BaseLnum[i]);


var LANGS =    new Array ();
var SL_Lnum = SL_Languages.split(",");
for(var i = 0; i < SL_Lnum.length; i++) LANGS.push(SL_Lnum[i]);

var LANGSext = new Array ();
var SL_LnumExt = SL_LanguagesExt.split(",");
for(var i = 0; i < SL_LnumExt.length; i++) LANGSext.push(SL_LnumExt[i]);

(function(){document.addEventListener("mousedown",function(){
 try{
   var id = event.target.id;
   if(GEBI("SL_myRange")){
	if(SL_getTEMP("TTSvolume")==null || SL_getTEMP("TTSvolume")=="undefined" || SL_getTEMP("TTSvolume")=="") SL_setTEMP("TTSvolume","5");
	else SL_setTEMP("TTSvolume",GEBI("SL_myRange").value);
	if(GEBI("SL_myRange").value==0) GEBI("SL_volume").className="SL_novolume";
	else GEBI("SL_volume").className="SL_volume";
	TheVolume = GEBI("SL_myRange").value;
   }	
   if(id == "SL_controls"){
	//var FirstLoop = 0;
	PlayPause("SL_controls", event);
   }	
   if(id == "SL_volume"){
	synth.cancel();
        if(GEBI(id).className=="SL_novolume") {
		GEBI("SL_myRange").value = 5;
		GEBI("SL_volume").className="SL_volume";
	} else { 
		GEBI("SL_myRange").value = 0;
		GEBI("SL_volume").className="SL_novolume";
	}
	SL_setTEMP("TTSvolume",GEBI("SL_myRange").value);
	Start_GOOGLE_TTS_backup();

   }	
   if(id == "SL_myRange"){
	synth.cancel();
	if(GEBI("SL_myRange").value>0)	GEBI("SL_volume").className="SL_volume";
	else 	GEBI("SL_volume").className="SL_novolume";
    	setTimeout(function(){
		SL_setTEMP("TTSvolume",GEBI("SL_myRange").value);
		Start_GOOGLE_TTS_backup();
        },500);

   }
 }catch(ext){}
},!1);} )();

document.onmousedown=function(event){
	SL_EVENT=event;
};


(function(){
	var y=GEBI("SL_backbox");
	y.addEventListener("click",function(){
                REMOTE_Voice_Close();
		//Switch();
		//SET_PROV(1);
		if(GEBI("SL_backbox").checked==true){
			LOADBackTranslate("");			
		}
		if(BACK_VIEW==1) SetBackWindow(); 
		else SetBackWindow2(); 
	},!1);
})();

SL_Tabs_Maker();

for(I=0; I<LISTofPR.length; I++){
   (function(){GEBI("SL_P"+I).addEventListener("click",function(){SL_Tabs_Settler();},!1);} )();
}



function SL_Tabs_Maker(){
  for(var I=0; I<LISTofPR.length; I++){
	  var OB = document.createElement('div');
	  var id = document.createAttribute("id");
	  id.value = "SL_P"+I;
          OB.setAttributeNode(id);
	  var cl = document.createAttribute("class");
	  cl.value = "SL_LABLE";
       	  OB.setAttributeNode(cl);
	  var tl = document.createAttribute("title");
	  tl.value = LISTofPR[I];
       	  OB.setAttributeNode(tl);
	  var st = document.createAttribute("style");
	  if(I == LISTofPR.length-1) st.value = "border-right: 1px solid #BDBDBD; margin-left:"+(75*I+12)+"px;"; 
	  else st.value = "margin-left:"+(75*I+12)+"px;";
       	  OB.setAttributeNode(st);
	  OB.appendChild(document.createTextNode(LISTofPR[I]));
          GEBI("SL_PROVIDERS").appendChild(OB);
  }
  GEBI('SL_PROVIDERS').style.marginTop='35px';
  if(localStorage["SL_other_gt"]!="1"){   
   PROV=LISTofPR[0];
   SL_setTEMP("PROV",PROV);
   if(GEBI('ClosedTab')) GEBI('ClosedTab').style.display='block';
  } 
}


function SL_Tabs_Settler(){
 var id = SL_EVENT.target.id;
 var ind = id.replace("SL_P","");
 if(GEBI(id).className!="SL_LABLE_DEACT"){
	 SL_setTEMP("PROV",LISTofPR[ind]);
	 var t=LETSTRANS();
	 if(t==true)Loader(1);
	 REMOTE_Voice_Close();
	 SET_PROV(ind);
 }
}



document.onkeydown=function(event){
 if(event.keyCode != 33 && event.keyCode != 34){
  if(localStorage["SL_HK_btnbox"]=="true"){
        var keyCode = ('which' in event) ? event.which : event.keyCode;
    	setTimeout(function(){
	    	if(!SL_KEYCOUNT[keyCode] && SL_KEYCOUNT.length<3)   {
        		SL_KEYCOUNT[keyCode] = true;
		        SL_KEYCOUNT.length++;
			SL_KEYSTRING=SL_KEYSTRING+keyCode+":|";
                	if(SL_KEYSTRING!="")SL_TEMPKEYSTRING=SL_KEYSTRING;
		}
        },35);
  }
 }else	event.preventDefault();
};

document.onkeyup=function(){
  if(localStorage["SL_HK_btnbox"]=="true"){
	var SL_HKL = SL_HK_TRANSLATE().toLowerCase();
	var SL_DBL = localStorage["SL_HK_btn"]+":|";
        SL_DBL=SL_DBL.replace(/ \+ /g,":|").toLowerCase();
	if(SL_HKL == SL_DBL) {
		SAVEtheSTATE();
		Loader(1);
		REMOTE_Voice_Close();
	}
  }	
};

(function(){var w=GEBI("SL_switch");w.addEventListener("click",function(){langSWITCHER();},!1);} )();
(function(){var q=GEBI("SL_switch");q.addEventListener("mouseover",function(){SwitchButton(0);},!1);q.addEventListener("mouseout",function(){SwitchButton(1);},!1);} )();
(function(){var s1=GEBI("SL_src_delete");s1.addEventListener("click",function(){ClearSource();},!1);} )();
(function(){var t1=GEBI("SL_dst_delete");t1.addEventListener("click",function(){GEBI("SL_target").value="";},!1);} )();
(function(){var s2=GEBI("SL_src_copy");s2.addEventListener("click",function(){CopyToClipBoard(0);},!1);} )();
(function(){var t2=GEBI("SL_dst_copy");t2.addEventListener("click",function(){CopyToClipBoard(1);},!1);} )();
(function(){var q1=GEBI("SL_src_font");q1.addEventListener("click",function(){FontSizeState();FontSize();},!1);} )();
(function(){var v1=GEBI("SL_src_tts");v1.addEventListener("click",function(){startTTS("SL_source");},!1);} )();
(function(){var v2=GEBI("SL_dst_tts");v2.addEventListener("click",function(){startTTS("SL_target");},!1);} )();
(function(){var c2=GEBI("SL_logo-link");c2.addEventListener("click",function(){startCopyright();},!1);} )();
(function(){var tr=GEBI("SL_trans_button");tr.addEventListener("click",function(){var t=LETSTRANS();if(t==true){Loader(1);REMOTE_Voice_Close();}},!1);} )();
(function(){var loc=GEBI("SLlocpl");loc.addEventListener("click",function(){LOCcontrol(0); var t=LETSTRANS(); if(t==true){Loader(1);REMOTE_Voice_Close();}},!1);} )();
(function(){var loc=GEBI("SL_tab2");loc.addEventListener("click",function(){GoToDictionary();},!1);} )();

(function(){if(GEBI("SL_BT"))GEBI("SL_BT").addEventListener("click",function(){BT_2STEPS_TRANSLATION(GEBI("SL_source").value);},!1);} )();
(function(){if(GEBI("SL_TR"))GEBI("SL_TR").addEventListener("click",function(){DETECT(GEBI("SL_source").value);},!1);} )();



(function(){
	var pp=GEBI("SL_PP");
	pp.addEventListener("click",function(){
		FExtension.browserPopup.openNewTab("https://imtranslator.net"+_CGI+"&a=0");
	},!1);
} )();



(function(){var Sback0=GEBI("SL_back");Sback0.addEventListener("mousedown",function(){REMOTE_Voice_Close();},!1);} )();

(function(){var Starget1=GEBI("SL_target");Starget1.addEventListener("keydown",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Starget2=GEBI("SL_target");Starget2.addEventListener("paste",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Starget3=GEBI("SL_target");Starget3.addEventListener("drop",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Starget4=GEBI("SL_target");Starget4.addEventListener("mousedown",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource1=GEBI("SL_source");Ssource1.addEventListener("keydown",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource2=GEBI("SL_source");Ssource2.addEventListener("paste",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource3=GEBI("SL_source");Ssource3.addEventListener("drop",function(){REMOTE_Voice_Close();},!1);} )();
(function(){var Ssource4=GEBI("SL_source");Ssource4.addEventListener("mousedown",function(){REMOTE_Voice_Close();},!1);} )();


(function(){var Ssource5=GEBI("SL_source");Ssource5.addEventListener("change",function(){SAVEtheSTATE();},!1);} )();


(function(){GEBI("SL_posterSRC").addEventListener("click",function(){SLShowHideAlert100('none','SRC');SL_GotIt('SRC');CLOSER=0;},!1);} )();
(function(){GEBI("SL_posterDST").addEventListener("click",function(){SLShowHideAlert100('none','DST');SL_GotIt('DST');CLOSER=0;},!1);} )();

(function(){GEBI("SL_GotItSRC").addEventListener("click",function(){SL_GotItStorage('SRC');CLOSER=0;},!1);} )();
(function(){GEBI("SL_GotItDST").addEventListener("click",function(){SL_GotItStorage('DST');CLOSER=0;},!1);} )();

(function(){GEBI("SL_CloseMeSRC").addEventListener("click",function(){SLShowHideAlert100('none','SRC');CLOSER=1;},!1);} )();
(function(){GEBI("SL_CloseMeDST").addEventListener("click",function(){SLShowHideAlert100('none','DST');CLOSER=1;},!1);} )();

(function(){GEBI("SL_CloseAlert").addEventListener("click",function(){SLShowHideAlert();},!1);} )();
(function(){GEBI("SL_CloseAlertBTN").addEventListener("click",function(){SLShowHideAlert();},!1);} )();


(function(){
	var l1=GEBI("SL_langSrc");
	l1.addEventListener("change",function(){
		Switch();
	},!1);
} )();
(function(){
	var l2=GEBI("SL_langDst");
	l2.addEventListener("change",function(){
		FExtension.store.set("SL_langDst2", l2.value);
               	var t=LETSTRANS();if(t==true){Loader(1);REMOTE_Voice_Close();}
	},!1);
} )();


//(function(){ window.addEventListener('blur',function(){self.close();},!1);} )();



(function(){
    window.addEventListener('blur',function(){
        FExtension.browserPopup.addOnMessageListener(
            function(request, sender, sendResponse) {
                if (request.greeting == "hello"){
                    self.close();
                }
                if (request.greeting == "hello2"){
                    self.close();
                }
            }
        );
    },!1);
})();


function GEBI(id){
	return document.getElementById(id);
}

function CONSTRUCTOR(){

	GEBI('SL_h3').innerText="v."+FExtension.bg.ImTranslatorBG.Version();  
        if(SL_getTEMP("PROV")=="" || SL_getTEMP("PROV")=="undefined") PROV=LISTofPR[0];
        else PROV=SL_getTEMP("PROV");


       	GEBI('SL_translate_container_app').style.opacity="1";
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTITLE')));
                                                                    

	GEBI('SLoptions_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions');
	GEBI('SLhistory_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHistory');
	GEBI('SLhelp_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp');
	GEBI('SL_PP').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extContribution_ttl');

	GEBI('SL_tts_limit').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTTS_Limit')));
	GEBI('SL_tts_limit2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTTS_Limit')));

	GEBI('SL_CloseMeSRC').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose');
	GEBI('SL_GotItSRC').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extIGetIt')));
	GEBI('SL_ClosePosterSRC').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOk')));

	GEBI('SL_CloseMeDST').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose');
	GEBI('SL_GotItDST').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extIGetIt')));
	GEBI('SL_ClosePosterDST').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOk')));

	var CMPR = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCompare')
	var theview = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDownload') + ": " + CMPR;
	GEBI('SLcompare_ttl').title=theview;
	GEBI('SL_view_menu').title=theview;
	GEBI('SL_dst_view').title=CMPR;


	GEBI('SL_src_delete').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClearText');
	GEBI('SL_src_copy').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCopyText');
	GEBI('SL_src_font').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFont_Size_ttl');
	GEBI('SL_src_tts').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extListen');


	GEBI('SL_dst_delete').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClearText');
	GEBI('SL_dst_copy').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCopyText');
	GEBI('SL_dst_tts').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extListen');



	GEBI('SL_detect').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')));
	GEBI('SL_switch').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSwitch_languages_ttl');
	GEBI('SL_trans_button').value=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrButton');
	GEBI('SL_tab1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabTrans')));
	GEBI('SL_tab1').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabTrans');
	GEBI('SL_tab2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabDict')));
	GEBI('SL_tab2').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabDict');
	GEBI('SL_BT').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extBackTrans')));

	if(GEBI('SL_TR'))GEBI('SL_TR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extResTrans')));

	//GEBI('SL_powered').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extPowered')));

	GEBI('SLlocpl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLock_in_language');

	SET_PROV(0);

	switch(PLATFORM){
	 case "Opera" : GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-imtranslator-tool/"; break;
	 case "Chrome": GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/imtranslator-tool/"; break;
	 default      : GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}


  	if(localStorage["SL_Flag"]=="FALSE") {
	        if(localStorage["SL_no_detect"]=="false") GEBI('SLlocpl').checked=true;
       		else GEBI('SLlocpl').checked=false;
		SL_setTEMP("LOC",String(GEBI('SLlocpl').checked));
	}else{
	        if(SL_getTEMP("LOC")==""){
		        if(localStorage["SL_no_detect"]=="false") GEBI('SLlocpl').checked=true;
	       		else GEBI('SLlocpl').checked=false;
		}else{
			if(SL_getTEMP("LOC")=="true")	GEBI('SLlocpl').checked = true;
			else                            GEBI('SLlocpl').checked = false;
		}
        }

        LOCcontrol(1);
	

	var OB = GEBI('SL_langSrc');
	if(FExtension.store.get("SL_LNG_LIST").indexOf("auto")!=-1 || FExtension.store.get("SL_LNG_LIST")=="all"){
		var OB1 = document.createElement('option');
		var v = document.createAttribute("value");
		v.value = "auto";
		OB1.setAttributeNode(v);
		OB1.appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetect_language_from_box')));
		OB.appendChild(OB1); 
	}
	var SL_TMP = SL_Languages.split(",");
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    var v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}
	var SEL = 0;
	var OB3 = GEBI('SL_langDst');
	var MENU = SL_Languages.split(",");
        if(MENU.length>=SL_FAV_START){
	        var SL_FAV_LANGS_IMT_LONG = SL_ADD_LONG_NAMES(SL_FAV_LANGS_IMT);
		if(SL_FAV_LANGS_IMT_LONG!=""){
			var favArr=SL_FAV_LANGS_IMT_LONG.split(","); 
			for(var J=0; J < favArr.length; J++){
			    var CURlang3 = favArr[J].split(":");
			    var OB_FAV = document.createElement('option');
			    var v = document.createAttribute("value");
			    v.value = CURlang3[0];
			    OB_FAV.setAttributeNode(v);
			    if(J == 0){
				    var sel = document.createAttribute("selected");
				    sel.value = "selected";
				    OB_FAV.setAttributeNode(sel);
				    SEL = 1;
				    //localStorage["SL_langDst"]=CURlang3[0];
				    //localStorage["SL_langDst2"]=CURlang3[0];
			    }
			    OB_FAV.appendChild(document.createTextNode(CURlang3[1]));
			    OB3.appendChild(OB_FAV);
			}
			OB_FAV = document.createElement('option');
			var d = document.createAttribute("disabled");
			d.value = true;
			OB_FAV.setAttributeNode(d);
			var all = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDAll');
	    		OB_FAV.appendChild(document.createTextNode("-------- [ "+ all +" ] --------"));
	            	OB3.appendChild(OB_FAV);
		}
	}

	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    if(SEL == 0){	
		    if(J == 0){
			    var sel = document.createAttribute("selected");
			    sel.value = "selected";
			    OB2.setAttributeNode(sel);
			    //localStorage["SL_langDst"]=SL_TMP2[0];
			    //localStorage["SL_langDst2"]=SL_TMP2[0];
		    }
	    }
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}



	if(localStorage["SL_Flag"]=="FALSE") {var mySL_langSrc = localStorage["SL_langSrc"]; localStorage["SL_langSrc2"]=localStorage["SL_langSrc"];}
	else	var mySL_langSrc = localStorage["SL_langSrc2"];
	GEBI('SL_langSrc').value = mySL_langSrc;

	if(localStorage["SL_Flag"]=="FALSE") {var mySL_langDst = localStorage["SL_langDst"]; localStorage["SL_langDst2"]=localStorage["SL_langDst"]; localStorage["SL_Flag"]="TRUE";}
	else	var mySL_langDst = localStorage["SL_langDst2"];
	GEBI('SL_langDst').value = mySL_langDst;

   	SET_PROV(1);

	if(GEBI('SL_donate')) GEBI('SL_donate').addEventListener("mouseover",function(){SL_DONATE_manu(1);},!1);
	if(GEBI('SL_donate')) GEBI('SL_donate').addEventListener("mouseout",function(){SL_DONATE_manu(0);},!1);
	if(GEBI('SL_donate_menu')) GEBI('SL_donate_menu').addEventListener("mouseover",function(){SL_DONATE_manu(1);},!1);
	if(GEBI('SL_donate_menu')) GEBI('SL_donate_menu').addEventListener("mouseout",function(){SL_DONATE_manu(0);},!1);

	if(GEBI('M_D1')) GEBI('M_D1').addEventListener("click",function(){SL_DONATE_links(1);},!1);
	if(GEBI('M_D2')) GEBI('M_D2').addEventListener("click",function(){SL_DONATE_links(2);},!1);
	if(GEBI('M_D3')) GEBI('M_D3').addEventListener("click",function(){SL_DONATE_links(3);},!1);
	if(GEBI('M_D4')) GEBI('M_D4').addEventListener("click",function(){SL_DONATE_links(4);},!1);

	if(GEBI('SLcompare_ttl')) GEBI('SLcompare_ttl').addEventListener("click",function(){SL_VIEW_link(0);},!1);
	if(GEBI('SLcompare_ttl')) GEBI('SLcompare_ttl').addEventListener("mouseover",function(){SL_VIEW_manu(1);},!1);
	if(GEBI('SLcompare_ttl')) GEBI('SLcompare_ttl').addEventListener("mouseout",function(){SL_VIEW_manu(0);},!1);
	if(GEBI('SL_view_menu')) GEBI('SL_view_menu').addEventListener("mouseover",function(){SL_VIEW_manu(1);},!1);
	if(GEBI('SL_view_menu')) GEBI('SL_view_menu').addEventListener("mouseout",function(){SL_VIEW_manu(0);},!1);

	if(GEBI('M_V1')) GEBI('M_V1').addEventListener("click",function(){SL_VIEW_link(1);},!1);
	if(GEBI('M_V2')) GEBI('M_V2').addEventListener("click",function(){SL_VIEW_link(2);},!1);
	if(GEBI('M_V3')) GEBI('M_V3').addEventListener("click",function(){SL_VIEW_link(3);},!1);


//	if(GEBI('SL_dst_view')) GEBI('SL_dst_view').addEventListener("mouseover",function(){SL_VIEW_manu2(1);},!1);
//	if(GEBI('SL_dst_view')) GEBI('SL_dst_view').addEventListener("mouseout",function(){SL_VIEW_manu2(0);},!1);
//	if(GEBI('SL_view_menu2')) GEBI('SL_view_menu2').addEventListener("mouseover",function(){SL_VIEW_manu2(1);},!1);
//	if(GEBI('SL_view_menu2')) GEBI('SL_view_menu2').addEventListener("mouseout",function(){SL_VIEW_manu2(0);},!1);

	if(GEBI('SL_dst_view')) GEBI('SL_dst_view').addEventListener("click",function(){startCompare("SL_source");},!1);


	if(GEBI('M_2V1')) GEBI('M_2V1').addEventListener("click",function(){SL_VIEW_link(1);},!1);
	if(GEBI('M_2V2')) GEBI('M_2V2').addEventListener("click",function(){SL_VIEW_link(2);},!1);
	if(GEBI('M_2V3')) GEBI('M_2V3').addEventListener("click",function(){SL_VIEW_link(3);},!1);


	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
	setTimeout(function(){
		SL_GLOBAL_RESIZER();
	},50);



}

function SET_FIRST_AVAILABLE_PROV(){

 if(localStorage["SL_other_gt"]=="1"){   
  if(SL_getTEMP("TR_FIRSTRUN")!="done"){
   if(ListProviders.indexOf(SL_getTEMP("PROV"))==-1){
    var theList = FExtension.store.get("SL_ALL_PROVIDERS_GT").split(",");
    var theList2 = ListProviders.split(",");
    for(I=0; I<(theList.length-1); I++){
      PROV=theList2[I];
      SL_setTEMP("PROV",PROV);
      if(theList[I] == PROV) GEBI("SL_P"+I).className="SL_LABLE";
      SL_setTEMP("TR_FIRSTRUN","done");
    }
   }
  }else{
   if(ListProviders.indexOf(SL_getTEMP("PROV"))==-1){
    var theList = ListProviders.split(",");
    for(var I=0; I<(theList.length-1); I++){
      PROV=theList[I];
      SL_setTEMP("PROV",PROV);
      GEBI("SL_P"+I).className="SL_LABLE";
      break;
    }
   }
  }
 }else 	GEBI("SL_P0").className="SL_LABLE";
}


function SET_PROV(st){
  ListProviders="";
  if(SL_getTEMP("PROV") == "" || SL_getTEMP("PROV") =="undefined"){ SL_setTEMP("PROV","google"); }
  for(I=0; I<LISTofPR.length; I++){

    //if(PROV == LISTofPR[I]) GEBI("SL_P"+I).className="SL_LABLE";
    //else                    GEBI("SL_P"+I).className="SL_LABLE_OFF";
   
    var from=GEBI("SL_langSrc").value;
    var to = GEBI("SL_langDst").value;

    if(SL_DETECT=="" && from=="auto") DetLang = "en"
    if(from=="auto" || SL_DETECT!="") from=SL_DETECT;

    if(SL_getTEMP("PROV") == LISTofPR[I]) GEBI("SL_P"+I).className="SL_LABLE";
    else                    GEBI("SL_P"+I).className="SL_LABLE_OFF";   
    if(from!=""){
	    if(from!="auto"){
	     if(LISTofPRpairs[I].indexOf(","+from) ==-1 || LISTofPRpairs[I].indexOf(","+to)==-1){
		 GEBI("SL_P"+I).className="SL_LABLE_DEACT";
		 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
	     } else ListProviders=ListProviders+LISTofPR[I]+",";
	     if(LISTofPR[I]=="Translator"){
	      if(LISTofPRpairs[I].indexOf(from + "/" + to)==-1){
		 GEBI("SL_P"+I).className="SL_LABLE_DEACT";
		 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
	      } else ListProviders=ListProviders+LISTofPR[I]+",";
	     }
	    } else {

	     if(LISTofPRpairs[I].indexOf(","+from) ==-1 || LISTofPRpairs[I].indexOf(","+to)==-1){
		 GEBI("SL_P"+I).className="SL_LABLE_DEACT";
		 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
	     } else ListProviders=ListProviders+LISTofPR[I]+",";
	     if(LISTofPR[I]=="Translator"){
	      if(LISTofPRpairs[I].indexOf(from + "/" + to)==-1){
		 GEBI("SL_P"+I).className="SL_LABLE_DEACT";
		 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
	      } else ListProviders=ListProviders+LISTofPR[I]+",";
	     }
	    }
	  }

	  ListProviders=ListProviders.replace("Translator,Translator","Translator");
  }

  if(ListProviders!=""){
	  for(var i=0; i<LISTofPR.length; i++){
 		if(GEBI("SL_P"+i).title.toLowerCase() == SL_getTEMP("PROV").toLowerCase()){GEBI("SL_P"+i).className="SL_LABLE"; SL_setTEMP("PROV",GEBI("SL_P"+i).title)}
	  }
  }

  if(st==1) SET_FIRST_AVAILABLE_PROV();

}

function LETSTRANS(){
 GEBI("SL_source").value=FExtension.store.get("SL_SavedText_gt").replace(/\^/ig,"%");
 if(GEBI("SL_source").value==""){
//	SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
	return false;
 }else return true;
}

function SESSION(){        
        CONSTRUCTOR();
        var resp = 1;
	if(FExtension.store.get("SL_session") != resp){
        	FExtension.store.set("SL_session", resp);
	       	FExtension.store.set("SL_Flag", "FALSE");
	   	FExtension.bg.ImTranslatorBG.DIC_TRIGGER = 0;
		FExtension.store.set("SL_GWPTHist", "");
        	SL_setTEMP("LOC","");
        }
	if(localStorage["SL_TS"]!=SL_getTEMP("OLD_TS_TR")){
		localStorage["SL_Flag"]="FALSE";
		SL_setTEMP("OLD_TS_TR",localStorage["SL_TS"]);
                SL_setTEMP("PROV","");
		SL_setTEMP("TR_FIRSTRUN","");
                SET_PROV(1);
	}

    	START();
	if(BACK_VIEW==1) SetBackWindow(); 
	else 	TR_WINDOW();
}

(function(){
	SESSION();
	var b=null,d=b,e=b,k=function(a){
		a.target="_blank";
		if(GEBI("SL_langSrc").value=="")GEBI("SL_langSrc").value=localStorage["SL_langSrc"];
		if(GEBI("SL_langDst").value=="")GEBI("SL_langDst").value=localStorage["SL_langDst"];
	    	setTimeout(function(){
			Loader(0);
			window.focus();
			if(FExtension.store.get("SL_Flag")=="TRUE") LTR_RTL("SL_source");
		},200);
	},n=function(){
		var a,c,l;
	},d=GEBI("SL_trans_button"),e=GEBI("SL_source");
	e.focus();

	FExtension.browserPopup.executeForSelectedTab(b,function(a){
		FExtension.browserPopup.tabSendRequest(a.id,{type:"get_selection"},function(a){
			GEBI("SL_target").focus(); 
			GEBI("SL_source").focus();
			if(a && a.selection!=""){
				CATCHED_TEXT=1;
	        	}	        
			if(a) a.selection&&(e.value=a.selection.substring(0,LIMIT),n())
		})
	});
	k(e);
	d.addEventListener("click",function(){
		//DETECT(e.value);
	},!1); 
})();




function PDFhandler(text){
//	if(FExtension.store.get("THE_URL") && FExtension.store.get("THE_URL").indexOf(".pdf")!=-1){
//		text = text.replace(/[\n\r]+/g, ' ');
//	}
        return text;
}




function SL_Links(ob,todo){
	GEBI(ob).style.display=todo;
}



function ClearSource(){
	GEBI("SL_source").value="";
	SL_TRANS_TEXT = "";
	FExtension.store.set("SL_SavedText_gt","");
	BOXCONTENT="";
	SL_DETECT="";
	GEBI("SL_detect").style.visibility="hidden";
}

function Switch(){

	BOXCONTENT="";
	FExtension.store.set("SL_langSrc2", GEBI('SL_langSrc').value);
	FExtension.store.set("SL_langDst2", GEBI('SL_langDst').value);
	FExtension.store.set("SL_show_back2", GEBI('SL_backbox').checked);
	FExtension.store.set("SL_Fontsize2", GEBI('SL_source').style.fontSize);
	FExtension.store.set("SL_Flag", "TRUE");
	FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);
	if(FExtension.bg.ImTranslatorBG){
		FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();
	}
        LTR_RTL("SL_source");
	SET_PROV(1);
	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
	var t=LETSTRANS();if(t==true){Loader(1);REMOTE_Voice_Close();}

}


function START(){   

	if(FExtension.store.get("SL_Flag")=="FALSE")  	var mySL_langSrc = FExtension.store.get("SL_langSrc");
	else					      	var mySL_langSrc = FExtension.store.get("SL_langSrc2");

	var mySL_langSrcSelect = GEBI("SL_langSrc");
	for (var i = 0; i < mySL_langSrcSelect.options.length; i++) {
		var mySL_langSrcOption = mySL_langSrcSelect.options[i];
		if (mySL_langSrcOption.value == mySL_langSrc) {
			mySL_langSrcOption.selected = "true";
			break;
		}
	}

	if(FExtension.store.get("SL_Flag")=="FALSE")  
		var mySL_langDst = FExtension.store.get("SL_langDst");
	else					
		var mySL_langDst = FExtension.store.get("SL_langDst2");
	var mySL_langDstSelect = GEBI("SL_langDst");
	for (var i = 0; i < mySL_langDstSelect.options.length; i++) {
		var mySL_langDstOption = mySL_langDstSelect.options[i];
		if (mySL_langDstOption.value == mySL_langDst) {
			mySL_langDstOption.selected = "true";
			break;
		}
	}
	if(FExtension.store.get("SL_Flag")=="FALSE") var mySL_backbox = FExtension.store.get("SL_show_back");
	else var mySL_backbox = FExtension.store.get("SL_show_back2"); 


        if(BACK_VIEW==1){
		if(mySL_backbox=="true") GEBI("SL_backbox").checked = true;
		else GEBI("SL_backbox").checked = false;
	} else GEBI("SL_backbox").checked = false;

	if(FExtension.store.get("SL_Flag")=="FALSE")  var mySL_FS = FExtension.store.get("SL_Fontsize");
	else var mySL_FS = FExtension.store.get("SL_Fontsize2");
  

	if(mySL_FS=="undefined") {
		GEBI('SL_source').style.fontSize="17px";
		GEBI('SL_target').style.fontSize="17px";
		if(GEBI('SL_back'))
			GEBI('SL_back').style.fontSize="17px";
	}else{
		GEBI('SL_source').style.fontSize = mySL_FS;
		GEBI('SL_target').style.fontSize = mySL_FS;
		if(GEBI('SL_back'))
			GEBI('SL_back').style.fontSize=mySL_FS;
	}

	//Update the CONTEXT menu---------
    setTimeout(function(){
    	if(FExtension.store.get("SL_langDst")!=GEBI("SL_langDst").value){
    		var SLSelect = GEBI("SL_langDst");
    		var SLText = SLSelect.options[SLSelect.selectedIndex].text;
    	} else 
    		SLText = FExtension.store.get("SL_langDst_name");
    		FExtension.store.set("SL_langDst_name", SLText);
    	try{
    		FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();
    	}catch(e){}
    }, 30);
//Update the CONTEXT menu----------
}


function Loader(st){  

 var STOP_TRANSLATE=0;
 var CGI = String(window.location.href);
 if(CGI.indexOf("&t=1")!=-1 && FExtension.store.get("SL_SaveText_box_gt")==1) GEBI("SL_source").value=FExtension.store.get("SL_SavedText_gt").replace(/\^/ig,"%");

 if(GEBI("SL_source").value=="" && CGI.indexOf("?text=")==-1) STOP_TRANSLATE=1;
 else{
	CGI = CGI.replace("&t=1","");
	var WER = CGI.split("?text=");
	if(GEBI("SL_source").value=="" && WER.length == 2 && WER[1]==""){
		STOP_TRANSLATE=1;		
	}else{
		if(GEBI("SL_source").value=="" && WER[1]!=""){
			GEBI("SL_source").value=decodeURIComponent(WER[1]);
		}
	}
 }

 if(GEBI("SL_source").value=="" && st==0 && FExtension.store.get("SL_SaveText_box_gt")==1) GEBI("SL_source").value=FExtension.store.get("SL_SavedText_gt").replace(/\^/ig,"%");
 GEBI("SL_source").value=PDFhandler(GEBI("SL_source").value);

 if(GEBI("SL_source").value==""){
   window.focus();
   GEBI("SL_source").focus();
   if(FExtension.store.get("SL_Dtext")=="" || FExtension.store.get("SL_Dtext")=="undefined"){
	var ARR = CGI.split("?text=");
	var TXT = ARR[1];
   }else TXT = FExtension.store.get("SL_Dtext");

   if(TXT){
     var theTEXT = TXT.replace("%20%20","\n\n");
     FExtension.store.set("SL_SavedText_gt",decodeURIComponent(theTEXT));
     CATCHED_TEXT=0;
     if(theTEXT!=""){
	   SET_PROV(1);
	   GEBI("SL_source").value=decodeURIComponent(theTEXT);
	   DETECT(GEBI("SL_source").value);
           CATCHED_TEXT=1;
     } //  else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
//   }else{
//    if(st==1) SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
   }
 }else{
  if(STOP_TRANSLATE==0){
   var TMPkey=0;
   if(FExtension.store.get("SL_Dtext")!="" && FExtension.store.get("SL_Dtext")!="undefined"){
	   GEBI("SL_source").value=decodeURIComponent(FExtension.store.get("SL_Dtext"));
	   TMPkey=1;
   }
   var s=GEBI("SL_source").value.replace(/(^[\s]+|[\s]+$)/g, '');
   s=s.replace(/%/ig,"^");

   if(s!=""){
	   FExtension.store.set("SL_SavedText_gt",decodeURIComponent(s));
	   var theQ=s.split(" ").length;
	   globaltheQ=theQ;
	   
	   if(s.match(/[-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;

	   if(localStorage["SL_dict"]=="false") theQ=100;

	   if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
    	   //if(FExtension.bg.ImTranslatorBG.DIC_TRIGGER != 0) theQ = 100;

    	   if(TMPkey==1)theQ = 100;
    	   if(theQ==1) theQ=s.split("\n").length;
	   if(theQ==1){
		window.location.href="../../html/popup/TB-dictionary.html?text="+encodeURIComponent(s);
	   }else{
		DETECT(GEBI("SL_source").value);
	   }
   } // else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
  }
 }

 FExtension.store.set("SL_Dtext", "");

}




function startCopyright(){ 
	FExtension.browserPopup.openNewTab("https://about.imtranslator.net/about/company/");
}


function Google_TTS(text,id,TTSlang,SL_TTS_box,Resp){
  if(localStorage["SL_GVoices"]=="1"){
	if(text.length>GTTS_length){
       	   var SLbox="SRC";
	   if(id=="SL_target") SLbox="DST";
	   if(localStorage["SL_GotIt"]!="1") SLShowHideAlert100('block',SLbox);
	   else SL_GotIt(SL_TTS_box);	
	}else REMOTE_Voice(TTSlang,text,SL_TTS_box);
  } else AutoForm(text, Resp, "https://text-to-speech.imtranslator.net/");
}

function Start_GOOGLE_TTS_backup(){
 try{
    if(GEBI("SL_controls").className=="SL_play"){
	GEBI("SL_controls").className="SL_pause";
	GOOGLE_TTS_backup();
    } else {
	GEBI("SL_controls").className="SL_play";
	synth.pause();	
    }
 }catch(ext){}
}

function GOOGLE_TTS_backup(TTSlang,SLbox){
 try{
	FirstLoop=1;
	synth.cancel();

	if(TheNewBox=="") TheNewBox=SLbox;

	var speechText = GEBI('SL_target').value; 
	if(TheNewBox==1) speechText = GEBI('SL_source').value; 



			var voices = synth.getVoices();
			const utterance = new SpeechSynthesisUtterance();
			var LNG="";
			if(TheNewLang=="") TheNewLang=TTSlang;
			switch(TheNewLang){
			 	case "zt":LNG = "zh-HK"; break;
			 	case "zh":LNG = "zh-TW"; break;
//			 	case "en":LNG = "en-GB|Male"; break;
			 	case "en":LNG = "en-US"; break;
			 	case "de":LNG = "de-DE"; break;
			 	case "hi":LNG = "hi-IN"; break;
			 	case "id":LNG = "id-ID"; break;
			 	case "it":LNG = "it-IT"; break;
			 	case "nl":LNG = "nl-NL"; break;
			 	case "pl":LNG = "pl-PL"; break;
			 	case "es":LNG = "es-US"; break;

			 	case "ru":LNG = "ru-RU"; break;
			 	case "ja":LNG = "ja-JP"; break;
			 	case "ko":LNG = "ko-KR"; break;
			 	case "fr":LNG = "fr-FR"; break;
			 	case "pt":LNG = "pt-BR"; break;

			}

			for (var a=0; a<voices.length; a++){
			    if(LNG.indexOf("|")!=-1){
				var ARR=LNG.split("|");
				if(ARR[0]==voices[a].lang && voices[a].name.indexOf(ARR[1])!=-1){
					utterance.voice = voices[a];
				}
			    }else{
				if(LNG==voices[a].lang){
					utterance.voice = voices[a];
				}
			    }
			}
			var SP = 1.0;


			if(SL_getTEMP("TTSvolume")!=null && SL_getTEMP("TTSvolume")!="undefined" && SL_getTEMP("TTSvolume")!="") TheVolume = SL_getTEMP("TTSvolume");


			var PLANSHET = GEBI("SL_TTS_player2");
			if(TheNewBox==1) PLANSHET = GEBI("SL_TTS_player1");
		 	PLANSHET.style.display='block';
		 	var PLAYER = "<div id='PL_lbplayer'><table width='350' colspan='3' style='padding:6px;' bgcolor='#fff'><tr><td width=20><div id='SL_controls' class='SL_pause'></div></td><td width=5></td><td align='left' width=20><div id='SL_volume' class='SL_volume'></div></td><td><input type='range' min='0' max='10' value='"+TheVolume+"' class='SL_slider' id='SL_myRange'></td></tr></table></div>";
			PLANSHET.innerHTML=PLAYER;


                        //SL_setTEMP("TTSvolume",TheVolume);


                        if(TheNewText=="") TheNewText = speechText;

			utterance.text = TheNewText;
			utterance.rate = SP;
			utterance.volume = SL_getTEMP("TTSvolume")*1/10;


			utterance.addEventListener('end', handleSpeechEvent);
			utterance.addEventListener('pause', handleSpeechPause);
			utterance.addEventListener('resume', handleSpeechResume);

			synth.speak(utterance);
			if(GEBI("PL_lbplayer").style.display!="block"){
			}

	if(SL_getTEMP("TTSvolume")==null || SL_getTEMP("TTSvolume")=="undefined" || SL_getTEMP("TTSvolume")=="") SL_setTEMP("TTSvolume","5");
	else SL_setTEMP("TTSvolume",GEBI("SL_myRange").value);
	if(SL_getTEMP("TTSvolume")>0)	GEBI("SL_volume").className="SL_volume";
	else 	GEBI("SL_volume").className="SL_novolume";

	GEBI("SL_myRange").value = SL_getTEMP("TTSvolume");
 }catch(ext){}
}

function handleSpeechPause(){
	GEBI("SL_controls").className="SL_pause";
}

function handleSpeechResume(){
	GEBI("SL_controls").className="SL_play";
}

function handleSpeechEvent(){
	GEBI("SL_controls").className="SL_play";
	FirstLoop=0;	
}

function PlayPause(ob, event){   
 try{
    if(GEBI(ob).className=="SL_play"){
	GEBI(ob).className="SL_pause";
	if(FirstLoop==0){
		Reload(ob);
		FirstLoop=1;
	} else {
		synth.resume();	
		event.preventDefault();
	}
    } else {
	FirstLoop=1;
	event.preventDefault();
	GEBI(ob).className="SL_play";
	synth.pause();	
    }
 }catch(ext){}
}

function Reload(ob){
 try{
    synth.cancel();    
    FirstLoop=0;	
    GOOGLE_TTS_backup();
    GEBI(ob).className="SL_pause";
 }catch(ext){}
}


function startTTS(id){
	try{
	  DetLang = "";
	  //SL_DETECT="";
	  TheNewBox="";
	  synth.cancel();    
	  var SL_TTS_box=2;
	  if(id=="SL_source") SL_TTS_box=1;
	  var text = GEBI(id).value;
	  if(text!=""){
		//GEBI("SL_detect").style.visibility="hidden";
		var tm = 1500;
   		if((id=="SL_source" && GEBI('SLlocpl').checked==false) || (id=="SL_source" && GEBI("SL_langSrc").value=="auto")){
      			var resp = i18n_LanguageDetect(GEBI(id).value);
		      	if(BOXCONTENT == GEBI(id).value) resp=SL_DETECT;
			if(resp == ""){
			  	if(DET==0) TTSDODetection(GEBI(id).value,0);
			  	else       SLDetectPATCH(GEBI(id).value);
			} else {
				SL_DETECT=resp;
		             	var thetemp=GEBI("SL_langSrc").value;

				if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){
				  	// DetLang = resp;
				   	var shift=0;
	        		   	for (var i=0;i<BASELANGS.length;i++){
		        	        	templang=BASELANGS[i].split(":");
						if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
			                }
                			//SL_WRONGLANGUAGEDETECTED=0;
				        if(shift==0){
						GEBI("SL_detect").innerHTML="";
						st=1;
	                			if(GEBI("SL_langSrc").value!="auto") DetLang=GEBI("SL_langSrc").value;	
						else DetLang="en";
						SL_Google_Only()
						SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); 		

				        } 	
				        if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
				}
				tm = 0;
      			} 
		} else tm = 0;	

		if(GEBI('SLlocpl').checked==true && GEBI('SL_langSrc').value!="auto") tm=0;
		setTimeout(function(){

		   if(SL_WRONGLANGUAGEDETECTED==1) {
			//SL_setTEMP("PROV","Google"); 
			for(var i=0; i<LISTofPR.length; i++){
			 	if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_LABLE";}
			}
			SL_BLOCK_OBJECTS();  
			if(id=="SL_source"){
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); 
				return false;
			}
		   } else { 
			SET_PROV(1);
			GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
		   }
		   var Resp="es";
		   var SL_to=GEBI("SL_langSrc").value;
		   if(id=="SL_source" || id=="SL_back"){
		      if(DetLang!="") Resp = DetLang;
		      else Resp = GEBI("SL_langSrc").value;
		   }else Resp = GEBI("SL_langDst").value;
		   Resp = Resp.replace("-TW","");
		   Resp = Resp.replace("-CN","");
		   var TTSlang = Resp;
		   switch(localStorage["SL_SLVoices"]){
			case "0": 	if(ALLvoices.indexOf(Resp)!=-1){
                              			if(SL_TTS.indexOf(Resp)!=-1){
							if(text.length>GTTS_length) AutoForm(text, Resp, "https://text-to-speech.imtranslator.net/");
							else Google_TTS(text,id,TTSlang,SL_TTS_box,Resp);
			      			} else Google_TTS(text,id,TTSlang,SL_TTS_box,Resp);
			  		} else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  		break;
			case "1": 	if(ALLvoices.indexOf(Resp)!=-1){
						if(G_TTS.indexOf(Resp)!=-1) Google_TTS(text,id,TTSlang,SL_TTS_box,Resp);
					else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
		  			} else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
		  			break;
			case "2": 	if(ALLvoices.indexOf(Resp)!=-1){
		                              	if(SL_TTS.indexOf(Resp)!=-1) AutoForm(text, Resp, "https://text-to-speech.imtranslator.net/");
		      				else Google_TTS(text,id,TTSlang,SL_TTS_box,Resp);
		  			} else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
					break;
		   }
		}, tm);
	  } // else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
 }catch(ext){}
}

function SetTTStextLimit(text,limit){
 text=text.replace(/(\r\n|\n|\r)/gm,"");
 var ttstexttmp=text.split(" ");
 var OutPut="";
 var OutPut_="";
 for(var i=0; i<ttstexttmp.length; i++){
     OutPut=OutPut+ttstexttmp[i]+" ";
     if(OutPut.length>limit) break;
     else OutPut_=OutPut_+ttstexttmp[i]+" ";
 }
 return(OutPut_);
}


function REMOTE_Voice (dir, text, box){
  if(dir==""){
   dir="es";
   if(box==2) dir = GEBI("SL_langDst").value;
   else {
    //if(GEBI("SL_langSrc").value!="auto") dir = GEBI("SL_langSrc").value;
    //else dir = DetLang;
    dir = DetLang;
   }
  }
  GLOB_BOX = box;
  if(text==""){
   if(box==1) text=document.getElementById("SL_source").value;
   else text=document.getElementById("SL_target").value;
   text=text.substring(0,GTTS_length);
  }

  var BackUpDir = dir;

  dir = dir.replace("-TW","");
  dir = dir.replace("-CN","");
  dir = dir.replace("en","en-BR");
  dir = dir.replace("es","es-419");
//  dir = dir.replace("pt","pt-BR");
   if(dir=="fr-CA") dir="fr";
   if(dir=="lzh") dir="zh";
   if(dir=="yue") dir="zh";
   if(dir=="pt") dir="pt-BR";


  if(GEBI("SL_TTS_player1")) GEBI("SL_TTS_player1").style.display='none';
  if(GEBI("SL_TTS_player2")) GEBI("SL_TTS_player2").style.display='none';

  var a=Math.floor((new Date).getTime()/36E5)^123456;
  var TK = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);
  var length = text.length;
  var num = Math.floor((Math.random() * SL_GEO.length)); 
  var theRegion = SL_GEO[num];
  if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
  var baseUrl = "https://translate.google."+theRegion;
  baseUrl = baseUrl+'/translate_tts';


  var client = "tw-ob";
//  if(BackUpDir=="es") client="t";

  var SL_Params='tk='+TK+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'&client='+client+'&q='+encodeURIComponent(text);

  baseUrl = baseUrl +"?"+ SL_Params;

   if(BACK_VIEW == 2 && box==2) GEBI("SL_backbox").style.display="none";
   GEBI("SL_TTS_player"+box).innerHTML="";
   var frame = document.getElementById('PL_lbframe');
   if(frame)	frame.parentNode.removeChild(frame);
   if(!document.getElementById("PL_lbframe")){
    var die=document.createElement("iframe");
    die.src="";
    die.name="PL_lbframe";
    die.id="PL_lbframe";
    die.width="447px";
    die.height="35px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SL_TTS_player'+box).appendChild(die);
            const http = new XMLHttpRequest
            http.onload = e => {
                const reader = new FileReader();
                reader.onloadend = function() {
		     var audioElement = document.createElement('audio');
		     audioElement.setAttribute('src', reader.result);
		     audioElement.setAttribute('preload', 'auto');
		     audioElement.setAttribute('controls', '');
		     audioElement.setAttribute('autoplay', '');
		     audioElement.setAttribute('id', 'SLmedia');
		     audioElement.setAttribute('name', 'SLmedia');

		     audioElement.setAttribute('style', 'width:470px;margin-top:-18px;margin-left:-20px;');
		     window.frames["PL_lbframe"].document.body.appendChild (audioElement);

			setTimeout(function(){
			  try {
			     var TTSstatus = String((window.frames["PL_lbframe"].document.getElementById("SLmedia").duration));
		        	 if(TTSstatus=="NaN") {
                                        TheNewLang="";
					if(PLATFORM=="Chrome" && TTSbackupLangs.indexOf(BackUpDir)!=-1) GOOGLE_TTS_backup(BackUpDir,box);
					else {
						GEBI("SL_TTS_player"+box).innerHTML="<div align=center><font color='#BD3A33'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVstu')+"</font><br><a href='../options/options.html?feed' target='_blank' class='SL_links'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')+"</a></div>";
				     		document.getElementById('SL_TTS_player'+box).style.height="20px";
					}
				 }
			   } catch (ex) {if(PLATFORM=="Chrome" && TranslatorIM.TTSbackupLangs.indexOf(BackUpDir)!=-1)TranslatorIM.GOOGLE_TTS_backup(BackUpText,BackUpDir);}	  
			}, 3000);  

		     document.getElementById('SL_TTS_player'+box).style.display="block";
		     document.getElementById('SL_TTS_player'+box).style.height="35px";
		     document.getElementById('SL_TTS_player'+box).style.width="425px";
		     document.getElementById('SL_TTS_player'+box).style.marginTop="3px";

		    if(GEBI("PL_lbframe").style.display!="block"){
			if(BACK_VIEW==1){
				GEBI('SL_back').style.height = (GLOB_BACK_HEIGHT-38)+"px";
			} else {
				RESIZE_AND_SHOW_PLAYER(box);
			}	
		    }

                }
                reader.readAsDataURL(e.target.response)
            }

            SL_BLOCK_OBJECTS();
	//    SL_WRONGLANGUAGEDETECTED=0;
            http.onerror = e => {
                console.error(e)
                reject(e)
            }
            http.open("GET", baseUrl)
            http.responseType = "blob"
            http.send()
   }

}

function REMOTE_Voice_Close (){
 var frame = document.getElementById('PL_lbframe');
 if(frame) {
	 if(BACK_VIEW==1) GEBI('SL_back').style.height = (GLOB_BACK_HEIGHT)+"px"; 
	 else {
		if(GLOB_BOX==1){
			GEBI("SL_fieldset").style.height=(GLOB_BACK_HEIGHT-60)+"px";
			GEBI('SL_source').style.height = (GLOB_BACK_HEIGHT-60)+"px";
		}else{
			GEBI("SL_fieldset_trg").style.height=(GLOB_BACK_HEIGHT-17)+"px";
			GEBI('SL_target').style.height = (GLOB_BACK_HEIGHT-17)+"px";
		}
	 }
	 if(GEBI("SL_TTS_player1")) GEBI("SL_TTS_player1").style.display='none';
	 if(GEBI("SL_TTS_player2")) GEBI("SL_TTS_player2").style.display='none';

 	 frame.parentNode.removeChild(frame);

 }
}


function startCompare(id){
	// var text = encodeURIComponent(GEBI(id).value);
	var text = GEBI(id).value;
	if(text!=""){
	        var tm = 300;
		var comparelangs="ar,bs,bg,ca,zh,zt,hr,cs,da,nl,en,et,fi,fr,de,el,ht,ha,iw,hi,hu,id,it,ja,ko,lv,lt,ms,mt,no,fa,pl,pt,ro,ru,sr,sk,sl,es,sv,th,tr,uk,ur,vi,cy";
		if(id=="SL_source"){
	        	var resp = i18n_LanguageDetect(GEBI(id).value);
			if(BOXCONTENT == GEBI(id).value) resp=SL_DETECT;
		        if(resp == ""){
			  if(DET==0) DODetection(GEBI(id).value);
			  else       SLDetectPATCH(GEBI(id).value);
		        } else {
		             	SL_DETECT=resp;
		             	var thetemp=GEBI("SL_langSrc").value;
				if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){
				   //DetLang = resp;
				   var shift=0;
			           for (var i=0;i<BASELANGS.length;i++){
        			        templang=BASELANGS[i].split(":");
					if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
                		   }
//		                   SL_WRONGLANGUAGEDETECTED=0;

	        		   if(shift==0){
					GEBI("SL_detect").innerHTML="";
					st=1;
//		                	if(GEBI("SL_langSrc").value!="auto") DetLang=GEBI("SL_langSrc").value;	
//					else DetLang="en";
		                        //SL_setTEMP("PROV","Google");
					SET_PROV(1);
		                        SL_WRONGLANGUAGEDETECTED=1;
	        		   }

		                   GEBI("SL_detect").style.visibility="visible";
				   GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+resp;
			           if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
				}  
				tm = 0;
			}
		} else tm = 0;
		setTimeout(function(){

		   	if(SL_WRONGLANGUAGEDETECTED==1) {
				//SL_setTEMP("PROV","Google"); 
				for(var i=0; i<LISTofPR.length; i++){
		 			if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_LABLE";}
				}
				SL_BLOCK_OBJECTS();  
				//SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); 
				return false;
		   	} else { 
				SET_PROV(1);
				GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
		   	}

			if(GEBI("SL_langSrc").value=="auto") var RespS = DetLang;
			else    var RespS = GEBI("SL_langSrc").value;
//			RespS = RespS.replace("zh-TW","zt");
//			RespS = RespS.replace("zh-CN","zh");
			var RespT = GEBI("SL_langDst").value;
//			RespT = RespT.replace("zh-TW","zt");
//			RespT = RespT.replace("zh-CN","zh");

			if(RespS!=RespT){
				if(comparelangs.indexOf(RespS)>-1 && comparelangs.indexOf(RespT)>-1){
					AutoForm(text, RespS+"/"+RespT, "https://imtranslator.net/compare/");
				}else{
					for (var i=0;i<BASELANGS.length;i++){
						var templangS=BASELANGS[i].split(":");
						if(RespS == templangS[0]) 
							RespS = templangS[1];
					}
					for (var j=0;j<BASELANGS.length;j++){
						var templangT=BASELANGS[j].split(":");

						if(RespT == templangT[0]) 
							RespT = templangT[1];
					}
					if(RespS!="auto"){
						if(SL_WRONGLANGUAGEDETECTED==0){
						        var msg=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_TextCompare').replace("XXX",RespS);
						        msg=msg.replace("YYY",RespT);
							SL_alert(msg);
						} else {
							GEBI("SL_detect").innerHTML="";
							SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); 
						}
					} else {	  
						setTimeout(function(){
							startCompare("SL_source");
						}, 500);  
					}
				}
			} else  SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extS_T_L_diff'));
                                                       
		}, tm);
	} // else  SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));

}





function AutoForm(text,dir,url){
    if(dir=="")dir="en/es";
    var tmpdir=dir.split("/");
    text = truncStrByWord(text,1200);
    if(tmpdir[0]=="es" || tmpdir[0]=="fr" || tmpdir[0]=="it" || tmpdir[0]=="pt") text=unescape(encodeURIComponent(text));
    var submitForm = getNewSubmitForm();

    createNewFormElement(submitForm, "text", text);
    createNewFormElement(submitForm, "url", "CHROME");
    createNewFormElement(submitForm, "dir", dir);
    submitForm.action= url;
//    submitForm.target= "_blank";
    submitForm.setAttribute('target', '_blank');
    submitForm.submit();
}


function FontSize(){
	if(GEBI('SL_source').style.fontSize=="17px" || GEBI('SL_source').style.fontSize==""){
		GEBI('SL_source').style.fontSize="19px";
		GEBI('SL_target').style.fontSize="19px";
		if(GEBI('SL_back'))GEBI('SL_back').style.fontSize="19px";
	}else{
		GEBI('SL_source').style.fontSize="17px";
		GEBI('SL_target').style.fontSize="17px";
		if(GEBI('SL_back')) GEBI('SL_back').style.fontSize="17px";
	}
}

function FontSizeState(){
	if(GEBI('SL_source').style.fontSize=="17px" || GEBI('SL_source').style.fontSize==""){
		FExtension.store.set("SL_Fontsize2", "19px");
	}else{
		FExtension.store.set("SL_Fontsize2", "17px");
	}
	FExtension.store.set("SL_Flag", "TRUE");
}

function CopyToClipBoard(ctrl){
	if(ctrl==0){
		GEBI('SL_source').focus();
		var tempNode = GEBI('SL_source');
		tempNode.select();
		document.execCommand("copy");
	}else{
		GEBI('SL_target').focus();
		var tempNode = GEBI('SL_target');
		tempNode.select();
		document.execCommand("copy");
	}	
}

function SwitchButton(st){
	if(st==0) GEBI('SL_switch').src='../../img/util/switch2.png';
	else 	  GEBI('SL_switch').src='../../img/util/switch.png';
}

function langSWITCHER(){
	if(GEBI("SL_langSrc").value!="auto"){
		var temp = GEBI("SL_langDst").value;
		GEBI("SL_langDst").value=GEBI("SL_langSrc").value;
		GEBI("SL_langSrc").value=temp;
		Switch();
	}else   SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDisabled'));

}

function SetBackWindow(){
 if(GEBI("SL_TTS_player1")) GEBI("SL_TTS_player1").style.display='none';
 if(GEBI("SL_TTS_player2")) GEBI("SL_TTS_player2").style.display='none';

	if(GEBI("SL_backbox").checked==false){
		GEBI("SL_back_zone").style.display="none";
		GEBI("SL_back").style.display="none";
		if(GEBI("SL_b_arrow"))GEBI("SL_b_arrow").src="../../img/util/box.png";
	}else {
		GEBI("SL_back_zone").style.display="block";
		GEBI("SL_back").style.display="block";
		if(GEBI("SL_b_arrow"))GEBI("SL_b_arrow").src="../../img/util/box-on.png";
	}
	FExtension.store.set("SL_show_back2",GEBI("SL_backbox").checked);
}

function SetBackWindow2(){
 if(GEBI("SL_TTS_player1")) GEBI("SL_TTS_player1").style.display='none';
 if(GEBI("SL_TTS_player2")) GEBI("SL_TTS_player2").style.display='none';
	if(GEBI("SL_backbox").checked==false){
		GEBI("SL_back_zone2").style.display="none";
		GEBI("SL_back").style.display="none";
	}else {
		GEBI("SL_back_zone2").style.display="block";
		GEBI("SL_back").style.display="block";
	}
	BT_WINDOW();
	FExtension.store.set("SL_show_back2",GEBI("SL_backbox").checked);
}


function DETECT(myTransText){
	GEBI("SL_source").focus();
 	if(GEBI("SL_langSrc").value!="auto") GEBI("SL_detect").style.visibility="hidden";
 	SL_no_detect=FExtension.store.get("SL_no_detect");
 	var SOURCELNG=localStorage["SL_langSrc"];
 	if(FExtension.store.get("SL_langSrc2")!=null && FExtension.store.get("SL_langSrc2")!="") SOURCELNG=FExtension.store.get("SL_langSrc2");
 	if(myTransText=="") myTransText = GEBI("SL_target").value;
	myTransText=myTransText.substring(0,LIMIT); 
	var MAYAK=0;

 
	if(BOXCONTENT == myTransText){ 
		MAYAK=1;
		if(GEBI('SLlocpl').checked != true){
		        GEBI("SL_detect").style.visibility="visible";
//			if(GEBI("SL_langDst").value==SL_DETECT) 
			SL_Flip_Langs(SL_DETECT);
//			if(SL_WRONGLANGUAGEDETECTED==0)	GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
		}
	} else {
		SL_Flip_Langs(SL_DETECT);
//		if(SL_WRONGLANGUAGEDETECTED==0)	GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
	}	

	if((GEBI('SLlocpl').checked==false || SOURCELNG=="auto") && MAYAK==0){
	   var resp = i18n_LanguageDetect(myTransText);
	   if(resp != ""){

		DetLang = resp;
		SET_PROV(1);
        	TempDetLang4History=DetLang;
		TranslateLOC(myTransText);
		GEBI("SL_detect").style.visibility="visible";
		FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);         
		FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();
//		if(GEBI("SL_langSrc").value!="auto")                        SL_Flip_Langs(DetLang);
        	BackDetLang=DetLang;
	        SL_DETECT=DetLang;
        	var st=0;
	        DetLang=DetLang.replace("zh-CN","zh");
		DetLang=DetLang.replace("zh-TW","zt");

	        SL_DETECT=DetLang;
        	var thetemp=GEBI("SL_langSrc").value;
	        if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){
		   //DetLang = resp;
			var shift=0;
		        for (var i=0;i<BASELANGS.length;i++){
        			templang=BASELANGS[i].split(":");
				if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
	                }

	        	if(shift==0){
				GEBI("SL_detect").innerHTML="";
				st=1;
        	        	if(GEBI("SL_langSrc").value!="auto") DetLang=GEBI("SL_langSrc").value;	
				else DetLang="en";
                        	//SL_setTEMP("PROV","Google");
				SET_PROV(1);
        	                SL_WRONGLANGUAGEDETECTED=1;
				//SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotsupported'));
	      	   	} else SL_WRONGLANGUAGEDETECTED=0;
			if(st==0){
//                	        if(GEBI("SL_langSrc").value!="auto") SL_Flip_Langs(DetLang);
				GEBI("SL_detect").style.visibility="visible";
				GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+resp;
			}
	        	if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
		}
	    } else {
		setTimeout(function(){
			if(DET==0) DODetection(myTransText,0);
			else       SLDetectPATCH(myTransText);		
		}, 50);
		setTimeout(function(){
		     	if(GEBI('SLlocpl').checked==false || GEBI("SL_langSrc").value=="auto"){
          			var OLD_FROM = GEBI("SL_langSrc").value;
		          	if(OLD_FROM!="auto"){
            				if(DetLang==GEBI("SL_langDst").value){
						GEBI("SL_langDst").value=OLD_FROM;
						GEBI("SL_langSrc").value=DetLang;
	    				}
			   	}
				var SLIDL = setInterval(function(){
					//By VK - only in this version
					//if(DetLang!="" && DetLang!="zh-CN") {
					if(DetLang!="") {
						SET_PROV(1);
		                        	TempDetLang4History=DetLang;
						TranslateLOC(myTransText);
			        	        clearInterval(SLIDL);
						GEBI("SL_detect").style.visibility="visible";
						FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);         
						FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();
//						if(GEBI("SL_langSrc").value!="auto")                        SL_Flip_Langs(DetLang);
	                		        BackDetLang=DetLang;
			                        SL_DETECT=DetLang;
						DetLang="";
						SL_BLOCK_OBJECTS();
					} 
				},50);
				
			}else{
			 	TranslateLOC(myTransText);
		       	}
		       	
		}, 1250);
		
	    }
   } else { 
        if(SL_WRONGLANGUAGEDETECTED==1){
		//SL_setTEMP("PROV","Google"); 
		SET_PROV(1);
		for(var i=0; i<LISTofPR.length; i++){
	 		if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_LABLE";}
		}
	}
	TranslateLOC(myTransText);
   }
// setTimeout(function(){LTR_RTL("SL_source")},250); 
  
}



function LOADBackTranslate(myTransText){
     if(SL_WRONGLANGUAGEDETECTED==0){
	if(myTransText=="") myTransText = GEBI("SL_target").value;
	myTransText=myTransText.substring(0,LIMIT); 
	setTimeout(function(){
		BackTranslateLOC(myTransText);		
	}, 500);                  
     }	
}

function truncStrByWord(str, length){
	if(str!="undefined"){
		if(str.length>25){
			length=length-25;
			var thestr=str;
			if (str.length > length) {
				str = str.substring (0, length);
				str = str.replace(new RegExp("/(.{1,"+length+"})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
				var str2 = thestr.substring(length, (length+25));
				var tempstr=str2.split(" ");
				var tmp="";
				for (var i=0; i<tempstr.length-1; i++){
					tmp = tmp+tempstr[i]+" ";
				} 
				str=str+tmp;
			}
		} else 
			str = str+" ";
	}
	return str;
}


function DODetection(myTransText,st) {
  if(st==0){
   GEBI("SL_detect").style.visibility="hidden";
   GEBI("SL_detect").innerHTML = "";
  }
  if(myTransText=="") myTransText = GEBI("SL_source").value;

  if(myTransText!=""){

    newTEXT = truncStrByWord(myTransText,100);

    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];

    if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
    var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/single';
    var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q=" + encodeURIComponent(newTEXT) + "&sl=auto&tl=en&hl=en";

	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
				return false;
			}
		}
	}
	 ajaxRequest.onreadystatechange = function(){
	        var captcha = 0;
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;

			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf('ld_result":{"srclangs":["')!=-1) {

                                var GDImTranslator_lang=resp.split('ld_result":{"srclangs":["');
				var GDImTranslator_lang1=GDImTranslator_lang[1].split('"');
 				resp=GDImTranslator_lang1[0];
				DetLang = resp;
				DetLang=DetLang.replace("zh-CN","zh");
				DetLang=DetLang.replace("zh-TW","zt");

	                        SL_DETECT=DetLang;


				// NOT TRUSTED LANGUAGES
	                        if(DO_NOT_TRUST_WORD.indexOf(SL_DETECT)!=-1 && globaltheQ==1){
					SLDetector(myTransText);
					return false;
				}	

	                        if(SL_DETECT==DO_NOT_TRUST_TEXT){
					SLDetector(myTransText);
					return false;
				}
				//----------------------



        	                var thetemp=GEBI("SL_langSrc").value;

		                CNTR('2311',DetLang+"/"+DetLang, newTEXT.length);

 				 if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){
				   //DetLang = resp;


				   resp = resp.replace("or-IN","or");
				   resp = resp.replace("ku-Latn","ku");
				   resp = resp.replace("ku-Arab","ckb");
				   resp = resp.replace("sr-Latn-RS","sr-Latn");  

				   if(GEBI("SL_langDst").value == "tlsl") resp = resp.replace("tl","tlsl");
				   if(GEBI("SL_langDst").value == "srsl") resp = resp.replace("sr","srsl");
				   DetLang = resp;

				   var shift=0;
	                           for (var i=0;i<BASELANGS.length;i++){
        	                        templang=BASELANGS[i].split(":");
					if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
                        	   }


	                       	   if(shift==0){
					GEBI("SL_detect").innerHTML="";
					st=1;
					SL_Google_Only(); 
                                        SL_WRONGLANGUAGEDETECTED=1;
	                	   } else SL_WRONGLANGUAGEDETECTED=0;
	                           SL_DETECT=DetLang;
				   if(st==0){
//                                    if(GEBI("SL_langSrc").value!="auto") SL_Flip_Langs(DetLang);
				    GEBI("SL_detect").style.visibility="visible";
				    GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+resp;
				   }
	                           if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
				 }  

			} else 	SLDetectPATCH(myTransText);
		}
	}
	baseUrl = baseUrl +"?"+ SL_Params;
	ajaxRequest.open("GET", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(SL_Params);               	
  }
}                                 





function SL_Flip_Langs(lng){
	if(GEBI("SL_langSrc").value != "auto" && GEBI('SLlocpl').checked==false){
	  lng = lng.replace("or-IN","or")
	  lng = lng.replace("ku-Latn","ku")
	  lng = lng.replace("ku-Arab","ckb")
	  lng = lng.replace("sr-Latn-RS","sr-Latn")  
	  if(GEBI("SL_langDst").value == "tlsl" && lng == "tl") lng = "tlsl";
	  if(GEBI("SL_langDst").value == "srsl" && lng == "sr") lng = "srsl";
	  if(GEBI("SL_langDst").value == "tl" && lng == "tlsl") lng = "tl";
	  if(GEBI("SL_langDst").value == "sr" && lng == "srsl") lng = "sr";

	  if(GEBI("SL_langDst").value == lng){
	      	var tmp = GEBI("SL_langDst").value;
	      	GEBI("SL_langDst").value = GEBI("SL_langSrc").value;
      	      	GEBI("SL_langSrc").value = tmp;
      	      	FExtension.store.set("SL_langDst2", GEBI("SL_langDst").value);
	  }
	}
	for (var i=0;i<BASELANGS.length;i++){
       		templang=BASELANGS[i].split(":");
		if(lng == templang[0]){DetLangName = templang[1]; break;}
	}

	GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
	SET_PROV(0);   
}

function SLDetectPATCH(theText){
        SLDetector(theText);
	GEBI("SL_detect").innerHTML="";
}

function SLDetector (text){
  	var theLIMIT = 100;
  	var newTEXT = truncStrByWord(text,theLIMIT);
        var fr = GEBI('SL_langSrc').value;
	if(fr=="auto") fr="*a";
        CNTRP('2311',fr+"/"+GEBI('SL_langDst').value, newTEXT.length);
	var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=pl&text="+encodeURIComponent(newTEXT);
	if(text=="") text = GEBI("SL_source").value;
		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
                        	tmp = tmp.replace("zh","zh-CN");
                        	tmp = tmp.replace("zt","zh-TW");
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.replace("#|#","");
		                    DetLang="en";
        		            if(tmp2.length>0 && tmp2.length<7) DetLang=tmp2;

					   DetLang = DetLang.replace("or-IN","or");
					   DetLang = DetLang.replace("ku-Latn","ku");
					   DetLang = DetLang.replace("ku-Arab","ckb");
					   DetLang = DetLang.replace("sr-Latn-RS","sr-Latn");  
					   if(GEBI("SL_langDst").value == "tlsl") DetLang = DetLang.replace("tl","tlsl");
					   if(GEBI("SL_langDst").value == "srsl") DetLang = DetLang.replace("sr","srsl");
					   if(GEBI("SL_langSrc").value == "tlsl") DetLang = DetLang.replace("tl","tlsl");
					   if(GEBI("SL_langSrc").value == "srsl") DetLang = DetLang.replace("sr","srsl");


                    				var shift=0;
		                	        for (var i=0;i<BASELANGS.length;i++){
        		                	        var templang=BASELANGS[i].split(":");
							if(DetLang == templang[0]){ shift=1; DetLang = templang[0]; DetLangName = templang[1]; break;}
		                	       	}
	                                        
			                       	if(shift==0){
							GEBI("SL_detect").innerText="";
							SL_Google_Only();
		                                        SL_WRONGLANGUAGEDETECTED=1;
	                			} else {
							SL_WRONGLANGUAGEDETECTED=0;
							GEBI("SL_detect").style.visibility="visible";
							GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
						}


			    	} else DetLang="en";
                        	//DetLang = DetLang.replace("zh-TW","zt");
                        	//DetLang = DetLang.replace("zh-CN","zh");
	                        SL_DETECT=DetLang;
               			SL_BLOCK_OBJECTS();
				SET_PROV(1);
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}





function TranslateLOC(myTransText) {

	SL_Google_Only();
        TR_WINDOW();
        if(SL_getTEMP("PROV")=="" || SL_getTEMP("PROV")=="undefined") PROV="Google";
        else PROV=SL_getTEMP("PROV");

        SET_PROV(1);

     if(ListProviders == ""){
			var msg = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLPNotSupported');
			var selectDst = GEBI('SL_langDst');
			var selectedDstIndex = selectDst.selectedIndex;
			var selectedDstText = selectDst.options[selectedDstIndex].text; 

			var selectSrc = GEBI('SL_langSrc');
			var selectedSrcIndex = selectSrc.selectedIndex;
			var selectedSrcText = selectSrc.options[selectedSrcIndex].text; 

			msg = msg.replace("XXX",selectedSrcText);
			msg = msg.replace("YYY",selectedDstText);
			SL_alert(msg); 

     }else{


	GEBI("SL_target").value="";
	if(GEBI("SL_backbox").checked==true)	GEBI("SL_back").value="";


	if(GEBI("SL_langSrc").value=="")GEBI("SL_langSrc").value=localStorage["SL_langSrc"];
	if(GEBI("SL_langDst").value=="")GEBI("SL_langDst").value=localStorage["SL_langDst"];



	var mySourceLang = GEBI("SL_langSrc").value;
	var myTargetLang = GEBI("SL_langDst").value;

	if(myTransText=="") myTransText = GEBI("SL_source").value;

	if(myTransText!=""){
	        myTransText=myTransText.trim();
		GEBI("SL_source").value = myTransText;
	}
        BOXCONTENT = myTransText;
        myTransText = myTransText.replace(/\t/g,"");

	if(myTransText!=""){

             SL_SAVE_FAVORITE_LANGUAGES(myTargetLang)
	     myTransText = myTransText.replace(/\"/ig,"'");
	     myTransText = myTransText.replace(/\''/ig,"'");
	     GEBI('SL_indicator1').style.display='block';
             var num = Math.floor((Math.random() * SL_GEO.length)); 
	     var theRegion = SL_GEO[num];
	     if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
	     var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";

             var SrcLng = mySourceLang;

	     if(GEBI('SLlocpl').checked==false || mySourceLang=="auto") SrcLng = SL_DETECT;

             if(SrcLng == "") SrcLng = mySourceLang;

//		        if((SrcLng=="" || SrcLng=="en") && PROV.toLowerCase()=="google") SrcLng="auto";

		        //Flip
		          if(GEBI('SLlocpl').checked==false && mySourceLang!="auto"){
		            if(DetLang==myTargetLang){
				SrcLng=myTargetLang;
                                GEBI("SL_langSrc").value=SrcLng;
				myTargetLang=mySourceLang;
                                GEBI("SL_langDst").value=myTargetLang;
			    }
			   }

			//Flip


	  		localStorage["SL_langSrc2"]=GEBI('SL_langSrc').value;
			localStorage["SL_langDst2"]=GEBI('SL_langDst').value;
		   	FExtension.store.set("SL_Flag","TRUE");

	                if(PROV.toLowerCase()=="google"){
				SrcLng = SrcLng.replace("tlsl","tl");
				SrcLng = SrcLng.replace("srsl","sr");

				myTargetLang = myTargetLang.replace("tlsl","tl");
				myTargetLang = myTargetLang.replace("srsl","sr");

        	                if(SL_WRONGLANGUAGEDETECTED==1) {SrcLng = "auto"; TempDetLang4History="auto";}
				var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(myTransText)+"&sl="+SrcLng+"&tl="+myTargetLang+"&hl=en";

				SL_SETINTERVAL_ST=0;

	                        if(myTransText.length<=LIMIT){
				  var ajaxRequest;	
				  try{
					ajaxRequest = new XMLHttpRequest();
				  } catch (e){
					try{
						ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
					} catch (e) {
						try{
							ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
						} catch (e){
							SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
							return false;
						}
					}
				  }
        	                  SL_TRANS_TEXT="";
				  ajaxRequest.onreadystatechange = function(){
		
					if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                		  var resp = ajaxRequest.responseText;

		  			  if(resp.indexOf('{"trans":')>-1){
        	                                  var ReadyToUseGoogleText="";
                	                          var Gr1=resp.split('"trans":"');
                        	                  for(var h=1; h<Gr1.length; h++){
                                	              var Gr2 = Gr1[h].split('","orig"');
                                        	      var Gr3 = Gr2[0].replace(/\\n/ig,"\n");
	                                              Gr3 = Gr3.replace(/\\"/ig,"'");
        	       	                              Gr3 = Gr3.replace(/\\u0026/ig,"&");
               		                              Gr3 = Gr3.replace(/\\u003c/ig,"<");
               	        	                      Gr3 = Gr3.replace(/\\u003e/ig,">");
               	                	              Gr3 = Gr3.replace(/\\u0027/ig,"'");
		                        	      Gr3 = Gr3.replace(/\\u003d/ig,"=");
			                              Gr3 = Gr3.replace(/\\/g,"");

						      //Gr3 = Gr3.charAt(0).toUpperCase() + Gr3.slice(1);
                	                              ReadyToUseGoogleText=ReadyToUseGoogleText+Gr3;
                        	                  }
				                  CNTR('2321',SrcLng+"/"+myTargetLang, myTransText.length);
					          GEBI("SL_target").value = ReadyToUseGoogleText;
                                        	  SL_TRANS_TEXT=ReadyToUseGoogleText;
					          GEBI('SL_indicator1').style.display='none';
				                  SL_SETINTERVAL_ST++;

				        	  if(GEBI("SL_backbox").checked==true) 	LOADBackTranslate("");

					          if (FExtension.store.get("SL_TH_1")==1){

				        		var SLnow = new Date();
					        	SLnow=SLnow.toString();
					        	var TMPtime=SLnow.split(" ");
				        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];

				        		if(mySourceLang=="auto" || TempDetLang4History!="") mySourceLang=TempDetLang4History;

                                                        myTransText=myTransText.replace(/~/ig," ");
                                                        ReadyToUseGoogleText=ReadyToUseGoogleText.replace(/~/ig," ");
							myTransText = myTransText.replace(/(<([^>]+)>)/ig, '');
							ReadyToUseGoogleText = ReadyToUseGoogleText.replace(/(<([^>]+)>)/ig, '');
							if(myTransText!=""){
						        	if(CATCHED_TEXT==0) FExtension.store.set("THE_URL", "{empty}");
					        		FExtension.store.set("SL_History", myTransText + "~~" + ReadyToUseGoogleText + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~1~~"+PROV[0]+"^^" + FExtension.store.get("SL_History"));
                	                                	TempDetLang4History="";
							}
						  }
					  } else SL_OTHER_PROVIDERS(myTransText,SrcLng,myTargetLang,1);
				       } else { if(ajaxRequest.readyState == 4 && ajaxRequest.status != 200) SL_OTHER_PROVIDERS(myTransText,SrcLng,myTargetLang,1); }
				  }

	//			baseUrl = baseUrl + "?" + SL_Params;
				ajaxRequest.open("POST", baseUrl, true);
				ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajaxRequest.send(SL_Params);

			  } else {SL_TRANS_TEXT="";SL_OTHER_PROVIDERS(myTransText,SrcLng,myTargetLang,1);}

			} else {
				if(PROV.toLowerCase()=="microsoft") MS(SrcLng,myTargetLang,myTransText,1);
				else SL_OTHER_PROVIDERS(myTransText,SrcLng,myTargetLang,1);	
			}
			LTR_RTL("SL_target");
	} // else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
	
        SL_BLOCK_OBJECTS();
   }
}





function SL_OTHER_PROVIDERS(text,f,t,ind){

 if(SL_TRANS_TEXT=="" || PROV!="Google"){
 	var ctrl = "SL_target";
	if(ind != 1) ctrl = "SL_back";
        BOXCONTENT = text;

        if(PROV.toLowerCase()=="yandex") { 
		if(f == "zh-CN") f = "zh";
		if(f == "jw") f = "jv";
		if(f == "iw") f = "he";
		if(f == "srsl") f = "sr";
		if(f == "tlsl") f = "tl";

		if(t == "zh-CN") t = "zh";
		if(t == "jw") t = "jv";
		if(t == "iw") t = "he";
		if(t == "srsl") t = "sr";
		if(t == "tlsl") t = "tl";

		SL_YANDEX(f+"-"+t,text, ctrl, ind); 
		return false;
	}

	 var mySourceLang = GEBI("SL_langSrc").value;
	 var myTargetLang = GEBI("SL_langDst").value;

	 if(PROV.toLowerCase()=="" || PROV.toLowerCase() == "undefined" || PROV.toLowerCase() =="null") PROV = "microsoft";
	 if(f=="auto") f=SL_DETECT;
	 if(f=="") f=mySourceLang;



				                  
	        if(PROV.toLowerCase()=="google"){ 
			if(ind==1) CNTRP('2321',f+"/"+t, text.length);
			else  CNTRP('2321_',f+"/"+t, text.length);
		}

	        if(PROV.toLowerCase()=="microsoft"){
				if(f == "zh") f = "zh-CHS";
				if(f == "zt") f = "zh-CHT";
				if(f == "iw") f = "he";
				if(f == "sr") f = "sr-Cyrl";
			        if(f == "srsl") f = "sr-Cyrl";
				if(f == "tl") f = "fil";
				if(f == "tlsl") f = "fil";
				if(f == "hmn") f = "mww";
				if(f == "ku") f = "kmr";
				if(f == "ckb") f = "ku";

				if(t == "zh") t = "zh-CHS";
				if(t == "zt") t = "zh-CHT";
				if(t == "iw") t = "he";
				if(t == "sr") t = "sr-Cyrl";
			        if(t == "srsl") t = "sr-Cyrl";
				if(t == "tl") t = "fil";
				if(t == "tlsl") t = "fil";
				if(t == "hmn") t = "mww";
				if(t == "ku") t = "kmr";
				if(t == "ckb") t = "ku";

			text=text.replace(/</g,"< ");
			text=truncStrByWord(text,3000);
		}
		var baseUrl = ImTranslator_theurl+"dotrans.asp";
		var cgi = "dir="+f+"/"+t+"&provider="+PROV.toLowerCase()+"&text="+encodeURIComponent(text);

		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){

			if(ajaxRequest.readyState == 4){
		             var resp = ajaxRequest.responseText;

			     if(ajaxRequest.status!=200) resp=PROV + ": "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),"extnotrsrv");
			     if(ajaxRequest.status==414) resp=PROV + ": "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVstu').replace("XXX","4000");;
		             if(resp.indexOf('<#<')!=-1 || resp.indexOf('&lt;#')!=-1) resp=PROV + ": "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),"extnotrsrv");


			     //--------------------------------
                             resp=resp.replace(/\\n/g,"\r");
                             resp=resp.replace(/\\/g,"");

			     if(PROV.toLowerCase()=="google") {
		                resp=resp.replace(/\\n/g,"<br>");
			     }

			     if(PROV.toLowerCase()=="microsoft") {
				resp=resp.replace(/< /g,"<");
				resp=resp.replace(/ >/g,">");
				resp=resp.replace(/\\"/g,"'");
			     }
			     if(PROV.toLowerCase()=="translator") {
				resp=resp.replace(/&lt;/g,"<");
				resp=resp.replace(/&gt;/g,">");
			     }
                             resp=resp.replace(/\\n/ig,"\n");
			     //--------------------------------

                             GEBI(ctrl).value=resp;
			     GEBI('SL_indicator'+ind).style.display='none';

			     if(GEBI("SL_backbox").checked==true && ind==1) 	LOADBackTranslate(resp);

			     if(ind!=2){
			        if (FExtension.store.get("SL_TH_1")==1){
			        	var SLnow = new Date();
			        	SLnow=SLnow.toString();
			        	var TMPtime=SLnow.split(" ");
		        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		        		if(mySourceLang=="auto") mySourceLang=TempDetLang4History;

					
			        	if(CATCHED_TEXT==0) FExtension.store.set("THE_URL", "{empty}");
					setTimeout(function(){
                                                text=text.replace(/~/ig," ");
                                                resp=resp.replace(/~/ig," ");
						text = text.replace(/(<([^>]+)>)/ig, '');
						resp = resp.replace(/(<([^>]+)>)/ig, '');
						if(text!=""){
					        	FExtension.store.set("SL_History", text + "~~" + resp + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~1~~"+PROV[0]+"^^" + FExtension.store.get("SL_History"));
						}
					},1500);


			        }
			     }

			}
		}
		ajaxRequest.open("POST", baseUrl, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send(cgi); 
  }

}

function SL_SETLOC(ob){
 return FExtension.element(FExtension.store.get("SL_LOCALIZATION"),ob);
}



function BackTranslateLOC(myTransText) {
 GEBI("SL_back").value="";
 var myTargetLang = GEBI("SL_langSrc").value;

 if(GEBI("SL_TTS_player1")) GEBI("SL_TTS_player1").style.display='none';
 if(GEBI("SL_TTS_player2")) GEBI("SL_TTS_player2").style.display='none';


 if((SL_no_detect=="true" || GEBI("SL_langDst").value=="auto") && BackDetLang!="")myTargetLang = BackDetLang;
 var mySourceLang = GEBI("SL_langDst").value;
 if(myTransText=="") myTransText = GEBI("SL_target").value;
/*
 if(GEBI("SL_TTS_player1").style.display=='block' || GEBI("SL_TTS_player2").style.display=='block'){
   mySourceLang=GEBI("SL_langDst").value;
   myTargetLang=SL_GetLangCode();
 }
*/


 if(myTransText!=""){
    GEBI('SL_indicator2').style.display='block';
        var a=Math.floor((new Date).getTime()/36E5)^123456;
        var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

	var num = Math.floor((Math.random() * SL_GEO.length)); 
	var theRegion = SL_GEO[num];
	if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
	var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";

        myTargetLang=myTargetLang.replace("zt","zh-TW")
        mySourceLang=mySourceLang.replace("zt","zh-TW")

  if(DetLang!="") myTargetLang = DetLang;
  if((myTargetLang=="" || myTargetLang=="auto") && SL_DETECT!="") myTargetLang = SL_DETECT;
  if(myTargetLang == "") myTargetLang = GEBI("SL_langDst").value;

  if(mySourceLang!=myTargetLang){

   if(PROV.toLowerCase()=="yandex"){
	if(mySourceLang == "zh-CN") mySourceLang = "zh";
	if(mySourceLang == "jw") mySourceLang = "jv";
	if(mySourceLang == "iw") mySourceLang = "he";
	if(mySourceLang == "srsl") mySourceLang = "sr";
	if(mySourceLang == "tlsl") mySourceLang = "tl";

	if(myTargetLang == "zh-CN") myTargetLang = "zh";
	if(myTargetLang == "jw") myTargetLang = "jv";
	if(myTargetLang == "iw") myTargetLang = "he";
	if(myTargetLang == "srsl") myTargetLang = "sr";
	if(myTargetLang == "tlsl") myTargetLang = "tl";

        SL_YANDEX_BACK(mySourceLang+"-"+myTargetLang, myTransText);
	return false;
   }

   if(PROV.toLowerCase()=="google"){


//     var SL_Params = "hl=en&langpair="+mySourceLang+"|"+myTargetLang+"&q="+encodeURIComponent(myTransText)+"&tbb=1&ie=UTF-8&oe=UTF-8&tk=" + tk;
     var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(myTransText)+"&sl="+mySourceLang+"&tl="+myTargetLang+"&hl=en";


     if(myTransText.length<=LIMIT){
	var ajaxRequest;	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
				return false;
			}
		}
	}

	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
                   var resp = ajaxRequest.responseText;
	  			  if(resp.indexOf('{"trans":')>-1){
                                          var ReadyToUseGoogleText="";
                                          var Gr1=resp.split('"trans":"');
                                          for(var h=1; h<Gr1.length; h++){
                                              var Gr2 = Gr1[h].split('","orig"');
                                              var Gr3 = Gr2[0].replace(/\\n/ig,"\n");

                                              Gr3 = Gr3.replace(/\\"/ig,"'");
               	                              Gr3 = Gr3.replace(/\\u0026/ig,"&");
               	                              Gr3 = Gr3.replace(/\\u003c/ig,"<");
               	                              Gr3 = Gr3.replace(/\\u003e/ig,">");
               	                              Gr3 = Gr3.replace(/\\u0027/ig,"'");
		                              Gr3 = Gr3.replace(/\\u003d/ig,"=");
		                              Gr3 = Gr3.replace(/\\t/ig," ");


                                              ReadyToUseGoogleText=ReadyToUseGoogleText+Gr3;
                                          }

					  CNTR('2321_',mySourceLang+"/"+myTargetLang, myTransText.length);

			GEBI("SL_back").value = ReadyToUseGoogleText;
			GEBI('SL_indicator2').style.display='none';
		    } else {SL_TRANS_TEXT="";SL_OTHER_PROVIDERS(myTransText,mySourceLang,myTargetLang,2);}

		}
	}
	//baseUrl = baseUrl + "?" + SL_Params;

	ajaxRequest.open("POST", baseUrl, true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(SL_Params);

     } else {	   
	   SL_TRANS_TEXT="";SL_OTHER_PROVIDERS(myTransText,mySourceLang,myTargetLang,2);
     }
   } else {
	if(PROV.toLowerCase()=="microsoft") MS(mySourceLang,myTargetLang,myTransText,2);
	else { SL_TRANS_TEXT="";SL_OTHER_PROVIDERS(myTransText,mySourceLang,myTargetLang,2);}
        //LTR_RTL("SL_back");
   }
  }else{
	 GEBI("SL_back").value=myTransText;
         GEBI("SL_indicator2").style.display='none';
  }
 }
}



function LTR_RTL(ctrl){

	if(ctrl=="SL_source") 
		var myLang = GEBI("SL_langSrc").value;
	if(ctrl=="SL_target")
		var myLang = GEBI("SL_langDst").value;
	if(ctrl=="SL_back")   
		var myLang = GEBI("SL_langSrc").value;
	if(SL_no_detect=="true" || GEBI("SL_langSrc").value=="auto") MORE_LTR_RTL();

	GEBI(ctrl).dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="yi" || myLang=="ur" || myLang=="ps" || myLang=="sd" || myLang=="ckb" || myLang=="ug" || myLang=="dv" || myLang=="prs") GEBI(ctrl).dir="rtl";
}

function MORE_LTR_RTL(){
 	var myLang = DetLang; 	
	GEBI("SL_source").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="yi" || myLang=="ur" || myLang=="ps" || myLang=="sd" || myLang=="ckb" || myLang=="ug" || myLang=="dv" || myLang=="prs") GEBI("SL_source").dir="rtl";

	myLang = GEBI("SL_langDst").value;
	GEBI("SL_target").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="yi" || myLang=="ur" || myLang=="ps" || myLang=="sd" || myLang=="ckb" || myLang=="ug" || myLang=="dv" || myLang=="prs") GEBI("SL_target").dir="rtl";

	myLang = DetLang;
	GEBI("SL_back").dir="ltr";
	if(myLang=="ar" || myLang=="iw" || myLang=="fa" || myLang=="yi" || myLang=="ur" || myLang=="ps" || myLang=="sd" || myLang=="ckb" || myLang=="ug" || myLang=="dv" || myLang=="prs") GEBI("SL_back").dir="rtl";
}


function SL_MEDIA_HOST(dir, text){
    if(dir=="")dir="en/es";
    var tmpdir=dir.split("/");
    if(tmpdir[0]=="es" || tmpdir[0]=="fr" || tmpdir[0]=="it" || tmpdir[0]=="pt") text=unescape(encodeURIComponent(text));
    var submitForm = getNewSubmitForm();

    createNewFormElement(submitForm, "text", text);
    createNewFormElement(submitForm, "url", "FF");
    createNewFormElement(submitForm, "dir", dir);
    submitForm.action= "https://text-to-speech.imtranslator.net";
    submitForm.setAttribute('target', '_blank');
    submitForm.submit();
}



function getNewSubmitForm(){
	var submitForm = document.createElement("FORM");
	document.body.appendChild(submitForm);
	submitForm.method = "POST";
	return submitForm;
}

function createNewFormElement(inputForm, elementName, elementValue){
	try{
		var newElement = document.createElement("<input name='"+elementName+"' type='hidden'>");
	}catch(err){   
		var newElement = document.createElement('input');
		newElement.setAttribute('type','hidden');
		newElement.setAttribute('name',elementName);
	} 
	inputForm.appendChild(newElement);
	newElement.value = elementValue;
	return newElement;
}

function SLShowHideAlert100(act,box){
 GEBI('SL_poster'+box).style.display=act; 
}

function SL_GotIt(box) {

if(box==1 || box=="SRC")box="SRC";
else      box="DST";
if(CLOSER==0 || localStorage["SL_GotIt"]!="1"){
 var SL_to="es";
 var SL_TTS_box="SL_target";
 var SL_TTS_boxNumber=2;
 SL_to = DetLang;
 if(box=="SRC"){ SL_TTS_box="SL_source"; SL_TTS_boxNumber=1; SL_to=GEBI('SL_langSrc').value;}
 var text = GEBI(SL_TTS_box).value;
 if(box=="SRC") {
  	if(DET==0) TTSDODetection(text,0);
  	else       SLDetectPATCH(text);
 }
  setTimeout(function(){
   SL_to = TTSDetLang;
   var ALL_TTS = G_TTS + SL_TTS;
   if(ALL_TTS.indexOf(SL_to)==-1){
	 SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); return false;
   }else{
	 text=SetTTStextLimit(text,GTTS_length);REMOTE_Voice(SL_to,text,SL_TTS_boxNumber);
   }
  }, 1000);
}
}

function SL_GotItStorage(box) { 
 SL_GotIt(box);
 SLShowHideAlert100("none",box);
 localStorage["SL_GotIt"]=1;
}


function SL_setTEMP(cname, cvalue) {
    localStorage["PLT_"+cname] = cvalue;
}



function SL_getTEMP(cname) {
    var cvalue = localStorage["PLT_"+cname];
    if(cvalue != "") return cvalue;
    else return "";
}


function SL_alert(txt){
 GEBI('SL_alert').style.display="block";
 GEBI("SLalertcont").innerText=txt;
}

function SLShowHideAlert(){
 GEBI('SL_alert').style.display='none'; 
}

function SL_HK_TRANSLATE(){
                SL_TEMPKEYSTRING=SL_TEMPKEYSTRING.replace("18:|","Alt:|");
                SL_TEMPKEYSTRING=SL_TEMPKEYSTRING.replace("17:|","Ctrl:|");
                SL_TEMPKEYSTRING=SL_TEMPKEYSTRING.replace("16:|","Shift:|");
		var TMP1= SL_TEMPKEYSTRING.split(":|");
		var NUM = TMP1.length-1;
		var HOTKEY = Array();
		var HOTKEYSline="";
		var cnt=0;
		for(var x=0; x<NUM; x++){
		    if(TMP1[x]!="Alt" && TMP1[x]!="Ctrl" && TMP1[x]!="Shift") HOTKEY[x]=String.fromCharCode(TMP1[x]);
		    else HOTKEY[x]=TMP1[x];
                    HOTKEYSline=HOTKEYSline+HOTKEY[x]+":|";
                    if(TMP1[x]=="Alt")cnt++;
                    if(TMP1[x]=="Ctrl")cnt++;
		}
		if(cnt==2){
                  HOTKEYSline=HOTKEYSline.replace("Alt:|","");
                  HOTKEYSline=HOTKEYSline.replace("Ctrl:|","");
                  HOTKEYSline="Ctrl:|Alt:|"+HOTKEYSline;
		}
		SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";
		return HOTKEYSline.toLowerCase();
}

function LOCcontrol(st){
    GEBI("SLlocbox").src="../../img/util/box.png";
    if(GEBI('SLlocpl').checked == true){SL_DETECT=""; GEBI("SLlocbox").src="../../img/util/box-on.png";}
    if(st==0) SL_setTEMP("LOC",String(GEBI('SLlocpl').checked));
    BOXCONTENT = "";
}



function GoToDictionary(){

	   var s=GEBI("SL_source").value.replace(/(^[\s]+|[\s]+$)/g, '');
	   s=encodeURIComponent(s).replace(/%0A/ig, " ");
	   s=decodeURIComponent(s);
	   var theQ=s.split(" ").length;
	   if(s.match(/[-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;

	   if(localStorage["SL_dict"]=="false") theQ=100;
	   if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
    	   if(FExtension.bg.ImTranslatorBG.DIC_TRIGGER != 0) theQ = 100;
	   FExtension.store.set("SL_SavedText_gt",s);
	   FExtension.store.set("SL_Flag","TRUE");

	   if(theQ==1){
	     var TEXT = s;
	   }else{
	     var TEXT = SetTextLimit(s,50);
	   }
	   window.location.href="../../html/popup/TB-dictionary.html?text="+encodeURIComponent(TEXT);
}


function SetTextLimit(text,limit){
 text=text.replace(/(\r\n|\n|\r)/gm,"");
 if(text.indexOf(" ")>-1 && text.length>limit){
   var texttmp=text.split(" ");
   var OutPut="";
   var OutPut_="";
   for(var i=0; i<texttmp.length; i++){
     OutPut=OutPut+texttmp[i]+" ";
     if(OutPut.length>limit) break;
     else OutPut_=OutPut_+texttmp[i]+" ";
   }
 }else OutPut_ = text.substring(0,limit);
 return(OutPut_);
}


function MS(f,t,text,ind){
 SL_OTHER_PROVIDERS(text,f,t,ind);
}


function SL_VIEW_manu(st){
        if(st==0) GEBI('SL_view_menu').style.display='none';
	else GEBI('SL_view_menu').style.display='block';
}

function SL_VIEW_manu2(st){
        if(st==0) GEBI('SL_view_menu2').style.display='none';
	else GEBI('SL_view_menu2').style.display='block';
}


function SL_DONATE_manu(st){
        if(st==0) GEBI('SL_donate_menu').style.display='none';
	else GEBI('SL_donate_menu').style.display='block';
}

function SL_DONATE_links(st){
	var link = 'https://imtranslator.net'+_CGI+'&a=0'; 
 	switch(st){
		case 1: link = 'https://imtranslator.net'+_CGI+'&a=5'; break;
		case 2: link = 'https://imtranslator.net'+_CGI+'&a=10'; break;
		case 3: link = 'https://imtranslator.net'+_CGI+'&a=20'; break;
		case 4: link = 'https://imtranslator.net'+_CGI+'&a=0'; break;
	}
	SL_OPEN_WINDOW(link);
}


function SL_VIEW_link(st){
  	SL_OPEN_WINDOW("https://chrome.google.com/webstore/detail/translation-comparison/kicpmhgmcajloefloefojbfdmenhmhjf?utm_source=chrome-ntp-icon");
}

function SL_OPEN_WINDOW(url){
        window.open(url, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
}

function BT_WINDOW(){
	REMOTE_Voice_Close ();
 	GEBI('SL_TR').className="SL_TABback SL_TAB_OFFback";
 	GEBI('SL_BT').className="SL_TABback SL_TAB_back";
 	GEBI('SL_BT').style.borderLeft="0px";
 	GEBI('SL_BT').style.borderRight="1px solid #BDBDBD";
	GEBI('SL_back_zone2').style.display="block";
	GEBI('SL_back_zone2').style.display="absolute";
	GEBI('SL_back').style.display="block";
//	GEBI('SL_back').style.marginTop="-156px";
	GEBI('SL_back').style.marginLeft="-16px";
//	GEBI('SL_back').style.height="115px";
	GEBI('SL_back').style.border="0px";
	//GEBI('SL_backbox').checked="true";
	GEBI('SL_footer').style.marginTop="34px";
	GEBI('SL_icons_target').style.visibility='hidden';
        LOADBackTranslate("");
//	FExtension.store.set("SL_show_back2",GEBI("SL_backbox").checked);

}
function TR_WINDOW(){
	if(GEBI('SL_TR')){
	 	GEBI('SL_TR').className="SL_TABback SL_TAB_back";
	 	GEBI('SL_BT').className="SL_TABback SL_TAB_OFFback";
 		GEBI('SL_TR').style.borderRight="1px solid #BDBDBD";
		GEBI('SL_back_zone2').style.display="none";
		//GEBI('SL_backbox').checked="false";
		GEBI('SL_footer').style.marginTop="5px";
		GEBI('SL_icons_target').style.visibility='visible';
	//	FExtension.store.set("SL_show_back2",GEBI("SL_backbox").checked);
	}
}

function SAVEtheSTATE(){
SL_WRONGLANGUAGEDETECTED=0;
// var txt = GEBI("SL_source").value.replace(/'/ig,'"');
 var txt = GEBI("SL_source").value;
 var userText = txt.replace(/^\s+/, '').replace(/\s+$/, '');
 if (userText === '') txt = "";
 if(txt != ""){
	 txt=txt.trim();
	 FExtension.store.set("SL_SavedText_gt",txt);
 } else ClearSource();
}


function SL_YANDEX(dir, text, ctrl, ind){
 	 var ctrl = "SL_target";
	 if(ind != 1) ctrl = "SL_back";
         if(text.length<=LIMIT) text = truncStrByWord(text,LIMIT);

	getYSID(0);
	setTimeout(function(){
	    YSLIDL = setInterval(function(){
		if(YSIDstatus === true) {
			clearInterval(YSLIDL);
			YSLIDL="";
			getY_TRANSLATION(dir,text, ctrl, ind);
		} 
	    },5);  
       	},5);  		
}

function getYSID(st){
 	var YK = FExtension.store.get("SL_YKEY");
	YSIDold = YK;
	if(st==1) YK=0;
	if(YK==0) {
	       	var baseUrl="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false";
		var ajaxRequest;	
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
		        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
		            var resp = ajaxRequest.responseText.match(/sid\:\s\'[0-9a-f\.]+/);
	                    if (resp && resp[0] && resp[0].length > 7) {
               		        YSID = resp[0].substring(6);

				var H = FExtension.store.get("SL_YHIST");
				if(H == "") H="First key";
				else H = H +"; Rekey";
				var K = "***"+YSID.substring(45);
				FExtension.store.set("SL_YHIST",H+" -> "+K);
				FExtension.store.set("SL_YKEY", YSID);
	                        YSIDstatus = true;
               		    } else {
				var H = FExtension.store.get("SL_YHIST");
				FExtension.store.set("SL_YHIST",H+"; KEY not found");
	                        YSIDstatus = false;
				FExtension.store.set("SL_YKEY", "0");
               		    }
			}else { 
				if(ajaxRequest.readyState == 4){
				    var msg = "Yandex: "+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
				    GEBI("SL_target").value=msg;
	     			    GEBI('SL_indicator1').style.display='none';
				}
			}
		}
		ajaxRequest.open("GET", baseUrl, true);
		ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
		ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
		ajaxRequest.send();
	  } else {
		YSID = FExtension.store.get("SL_YKEY");
                YSIDstatus = true;
	  }
}


function getY_TRANSLATION(dir, text, ctrl, ind){
	dir = dir.replace("iw","he");
        var tmp=dir.split("_");
	var mySourceLang=tmp[0];
	var myTargetLang=tmp[1];

  	var baseUrl="https://translate.yandex.net/api/v1/tr.json/translate?srv=tr-url-widget&id=" + YSID + "-0-0&format=html&lang=" + dir + "&text="+ encodeURIComponent(text);

	var ajaxRequest;	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	        var resp = "";
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	            var resp = ajaxRequest.responseText;

		    resp = unescape(resp);
        	    resp=resp.replace(/\\"/ig,"'");
        	    if(resp.indexOf('text":["')!=-1){
	    		var R1 = resp.split('text":["');
		    	var R2 = R1[1].split('"');
	    		var R3 = R2[0];
       		        R3 = R3.replace(/\\n/ig,"\n");
                        GEBI(ctrl).value=R3;
                        text = text.trim();
			var theQ = text.split(" ").length;
			if (theQ==1) CNTR('2332',mySourceLang.replace("-","/"), text.length);
			else CNTR('2322',mySourceLang.replace("-","/"), text.length);

	     	        GEBI('SL_indicator'+ind).style.display='none';
	                if(GEBI("SL_backbox").checked==true && ind==1) 	LOADBackTranslate(R3);

			

			     if(ind!=2){
			        if (FExtension.store.get("SL_TH_1")==1){
			        	var SLnow = new Date();
			        	SLnow=SLnow.toString();
			        	var TMPtime=SLnow.split(" ");
		        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		        		if(mySourceLang=="auto") mySourceLang=TempDetLang4History;

					
			        	if(CATCHED_TEXT==0) FExtension.store.set("THE_URL", "{empty}");
					setTimeout(function(){
                                                text=text.replace(/~/ig," ");
                                                R3=R3.replace(/~/ig," ");
						text = text.replace(/(<([^>]+)>)/ig, '');
						R3 = R3.replace(/(<([^>]+)>)/ig, '');
                                                var t = mySourceLang.split("-");
						mySourceLang=t[0];
						myTargetLang=t[1];
				        	FExtension.store.set("SL_History", text + "~~" + R3 + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~1~~"+PROV[0]+"^^" + FExtension.store.get("SL_History"));
					},1500);


			        }
			     }


		   } else {
                        YSIDstatus = false;
			FExtension.store.set("SL_YKEY", YSID);
			var H = FExtension.store.get("SL_YHIST");
			FExtension.store.set("SL_YHIST",H+"; Keys are equal -> yandex response: " +resp);
		    	var msg = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
			SL_alert("Yandex: " + msg);
			GEBI("SL_alert").style.height="185px";
			GEBI('SL_indicator'+ind).style.display='none';
		   }
		   TRIGGER=0;
		} else {
		    if(ajaxRequest.status == 403){
			FExtension.store.set("SL_YKEY", 0);
			YSID=0;
			if(YSID!=YSIDold){
				SL_YANDEX(dir, text);
				var H = FExtension.store.get("SL_YHIST");
				FExtension.store.set("SL_YHIST",H+"; Yandex answers: #405 -> requesting a new key");
			}else{
	                        YSIDstatus = false;
				FExtension.store.set("SL_YKEY", 0);
				YSIDold = 0;
			}
		     }else { 
			if(ajaxRequest.readyState == 4){
			    var msg = "Yandex: "+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
			    GEBI("SL_target").value=msg;
	     		    GEBI('SL_indicator1').style.display='none';
			}
		    }
		}
	}
	ajaxRequest.open("GET", baseUrl, true);
	ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
	ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
	ajaxRequest.send();
} 

function SL_YANDEX_BACK(dir, text){
	getYSID(0);
	setTimeout(function(){
	    var YSLIDLback = setInterval(function(){
		if(YSIDstatus === true) {
			clearInterval(YSLIDLback);
			YSLIDL="";
			getY_TRANSLATIONback(dir,text);
		} 
	    },5);  
       	},5);  		
}

function getY_TRANSLATIONback(dir, text){
	var ind=1;
       	dir = dir.replace("zh-CN","zh");
       	dir = dir.replace("jw","jv");
        dir = dir.replace("iw","he");
        var tmp=dir.split("_");
	var mySourceLang=tmp[0];
	var myTargetLang=tmp[1];
  	var baseUrl="https://translate.yandex.net/api/v1/tr.json/translate?srv=tr-url-widget&id=" + YSID + "-0-0&format=html&lang=" + dir + "&text="+ encodeURIComponent(text);
	var ajaxRequest;	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	        var resp = "";
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	            var resp = ajaxRequest.responseText;
		    resp = decodeURIComponent(resp);
        	    resp=resp.replace(/\\"/ig,"'");
        	    if(resp.indexOf('text":["')!=-1){

	    		var R1 = resp.split('text":["');
		    	var R2 = R1[1].split('"');
	    		var R3 = R2[0];
       		        R3 = R3.replace(/\\t/ig,"\t");
       		        R3 = R3.replace(/\\n/ig,"\n");

                        GEBI("SL_back").value=R3;
			CNTR('2322_',mySourceLang.replace("-","/"), text.length);
			GEBI("SL_indicator2").style.display="none";

		   } else {
                        YSIDstatus = false;
			FExtension.store.set("SL_YKEY", YSID);
			var H = FExtension.store.get("SL_YHIST");
			FExtension.store.set("SL_YHIST",H+"; Keys are equal -> yandex response: " +resp);
		    	var msg = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
			SL_alert("Yandex: " + msg);
			GEBI("SL_alert").style.height="185px";
			GEBI('SL_indicator2').style.display='none';
		   }
		   TRIGGER=0;
		} else {
		    if(ajaxRequest.status == 403){
			FExtension.store.set("SL_YKEY", 0);
			YSID=0;
			if(YSID!=YSIDold){
				SL_YANDEX(dir, text);
				var H = FExtension.store.get("SL_YHIST");
				FExtension.store.set("SL_YHIST",H+"; Yandex answers: #405 -> requesting a new key");
			}else{
	                        YSIDstatus = false;
				FExtension.store.set("SL_YKEY", 0);
				YSIDold = 0;
			}
		    }
		}
	}
	ajaxRequest.open("GET", baseUrl, true);
	ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
	ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
	ajaxRequest.send();
} 


function TTSDODetection(myTransText,st) {
  if(st==0){
   GEBI("SL_detect").style.visibility="hidden";
   GEBI("SL_detect").innerHTML = "";
  }
  if(myTransText=="") myTransText = GEBI("SL_source").value;

  if(myTransText!=""){
    BOXCONTENT = myTransText;
    newTEXT=myTransText;

    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];

    if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
    var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/single';
    var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q=" + encodeURIComponent(truncStrByWord(newTEXT,100)) + "&sl=auto&tl=en&hl=en";

	var ajaxRequest;  
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	        var captcha = 0;
		if(ajaxRequest.readyState == 4){
                        var resp = ajaxRequest.responseText;

			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf('ld_result":{"srclangs":["')!=-1) {

                                var GDImTranslator_lang=resp.split('ld_result":{"srclangs":["');
				var GDImTranslator_lang1=GDImTranslator_lang[1].split('"');
 				resp=GDImTranslator_lang1[0];
				DetLang = resp;
				DetLang=DetLang.replace("zh-CN","zh");
				DetLang=DetLang.replace("zh-TW","zt");

	                        SL_DETECT=DetLang;
        	                var thetemp=GEBI("SL_langSrc").value;

        	                if(SL_no_detect=="") SL_no_detect="true";
 				if(SL_no_detect=="true" || thetemp=="auto" || resp!=thetemp){

				   // NOT TRUSTED LANGUAGES
				   globaltheQ=myTransText.trim().split(" ").length;
	                           if(DO_NOT_TRUST_WORD.indexOf(SL_DETECT)!=-1 && globaltheQ==1){
					SLDetector(myTransText);
					return false;
				   }	
	                           if(SL_DETECT==DO_NOT_TRUST_TEXT){
					SLDetector(myTransText);
					return false;
				   }
				   //----------------------


				   DetLang = resp;

				   var shift=0;
	                           for (var i=0;i<BASELANGS.length;i++){
        	                        templang=BASELANGS[i].split(":");
					if(resp == templang[0]){shift=1; resp = templang[1]; DetLang = templang[0]; DetLangName = resp; break;}
                        	   }

	                       	   if(shift==0){
					GEBI("SL_detect").innerHTML="";
					st=1;
					if(GEBI("SL_langSrc").value!="auto") DetLang=GEBI("SL_langSrc").value;	
					else DetLang="en";
                                        SL_setTEMP("PROV","Google");
					SET_PROV(1);
                                        SL_WRONGLANGUAGEDETECTED=1;

					//SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotsupported'));
	                	   } else SL_WRONGLANGUAGEDETECTED=0;

				   if(st==0){
				    GEBI("SL_detect").style.visibility="visible";
				    GEBI("SL_detect").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+resp;
				   }
	                           if(thetemp=="auto") GEBI("SL_langSrc").value="auto";
				 }

			} else 	SLDetectPATCH(myTransText);
		}
	}
	baseUrl = baseUrl +"?"+ SL_Params;
	ajaxRequest.open("GET", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(SL_Params);         
 }                                
}                                 

function ACTIVATE_THEME(st){
 	if(st==1){
		var bg="#191919";
		var clr="#BF7D44";
		var clr_deact="#BDBDBD";
		GEBI("SL_body").style.filter=SL_DARK;
		GEBI("SL_body").style.background=bg;
		if(GEBI("SL_P0").className!="SL_LABLE_DEACT") GEBI("SL_P0").style.color=clr;
		else GEBI("SL_P0").style.color=clr_deact;
		if(localStorage["SL_other_gt"]=="1"){   
			if(GEBI("SL_P1").className!="SL_LABLE_DEACT") GEBI("SL_P1").style.color=clr;		
			else GEBI("SL_P1").style.color=clr_deact;
			if(GEBI("SL_P2").className!="SL_LABLE_DEACT") GEBI("SL_P2").style.color=clr;
			else GEBI("SL_P2").style.color=clr_deact;
			if(GEBI("SL_P3").className!="SL_LABLE_DEACT") GEBI("SL_P3").style.color=clr;
			else GEBI("SL_P3").style.color=clr_deact;

		}
		GEBI("SL_trans_button").style.filter=SL_DARK;
                if(GEBI("SL_TR")) GEBI("SL_TR").style.color=clr;
                if(GEBI("SL_BT")) GEBI("SL_BT").style.color=clr;
                GEBI("SL_detect").style.color=clr;
		GEBI("SL_h1").style.color=clr;
		GEBI("SL_h3").style.color=clr;
		GEBI("SL_tab1").style.color=clr;
		GEBI("SL_tab2").style.color=clr;
		var OPT = document.getElementsByTagName("option");
		for(var i=0; i<OPT.length; i++){
			OPT[i].setAttribute("style", "background:"+bg+";color:#fff;");
		}   
                if(GEBI("SL_CloseAlertBTN")) GEBI("SL_CloseAlertBTN").style.filter=SL_DARK;
                if(GEBI("SL_GotItSRC")) GEBI("SL_GotItSRC").style.filter=SL_DARK;
                if(GEBI("SL_GotItDST")) GEBI("SL_GotItDST").style.filter=SL_DARK;
                if(GEBI("SL_ClosePosterSRC")) GEBI("SL_ClosePosterSRC").style.filter=SL_DARK;
                if(GEBI("SL_ClosePosterDST")) GEBI("SL_ClosePosterDST").style.filter=SL_DARK;
	}
}

function i18n_LanguageDetect(text){
    	return ("");
}


function CNTR(id,dir,nmb){
	    chrome.runtime.sendMessage({greeting: "CNTR:>"+id+","+dir+","+nmb}, function(response) {}); 
}

function CNTRP(id,dir,nmb){
	    chrome.runtime.sendMessage({greeting: "CNTRP:>"+id+","+dir+","+nmb}, function(response) {}); 
}

function SL_ADD_LONG_NAMES(codes){
	var OUT = "";
	var MENU = SL_Languages.split(",");
	if(MENU.length>=SL_FAV_START){
		var FAV = codes.split(",");
		for (var i=0; i<FAV.length; i++){
			var MARKER = 0;
			for (var j=0; j<MENU.length; j++){
				var M = MENU[j].split(":");
				if(FAV[i] == M[0]){
					OUT = OUT + M[0] + ":" + M[1];
					MARKER=1;
				}
			}
			if(MARKER==1){
				if(i <= FAV.length) OUT = OUT + ","
			}
		}
	}
	if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
	return OUT;	
}

function SL_SAVE_FAVORITE_LANGUAGES(ln){
	var OUT = "";
	var OUT2 = "";
	SL_FAV_LANGS_IMT = FExtension.store.get("SL_FAV_LANGS_IMT");

	if(SL_FAV_LANGS_IMT.indexOf(ln)!=-1){
		SL_FAV_LANGS_IMT = SL_FAV_LANGS_IMT.replace(ln+",",""); 
		if(SL_FAV_LANGS_IMT.indexOf(",")==-1) SL_FAV_LANGS_IMT = SL_FAV_LANGS_IMT.replace(ln,""); 
	}

	OUT = ln + ",";	
	var ARR = SL_FAV_LANGS_IMT.split(",");
	for (var i = 0; i < ARR.length; i++){
	 	OUT = OUT + ARR[i]+",";
	}
	if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
	var TMP = OUT.split(",");
	if(TMP.length > SL_FAV_MAX) {
		for (var j = 0; j < TMP.length-1; j++){
		 	OUT2 = OUT2 + TMP[j]+",";
		}		
		OUT = OUT2 
	}
	if(OUT.slice(-1)==",") 	OUT = OUT.slice(0, OUT.length - 1);
       	FExtension.store.set("SL_FAV_LANGS_IMT", OUT);
	var MENU = SL_Languages.split(",");
	if(MENU.length>=SL_FAV_START){
		SL_REBUILD_TARGET_LANGUAGE_MENU(OUT,"SL_langDst");
	}
}


function SL_REBUILD_TARGET_LANGUAGE_MENU (FAV, ob){
		var doc = document;
		var MENU = SL_Languages.split(",");
		if(MENU.length>=SL_FAV_START){
        	        doc.getElementById(ob).innerText="";
			var SEL = 0;
			if(FAV!=""){
                        	FAV = SL_ADD_LONG_NAMES(FAV);
				var favArr=FAV.split(","); 
				for(var J=0; J < favArr.length; J++){
				    var CURlang = favArr[J].split(":");
				    var OB_FAV = doc.createElement('option');

				    var v = doc.createAttribute("value");				    		
				    v.value = CURlang[0];
				    OB_FAV.setAttributeNode(v);

				    if(J == 0){
					    var sel = doc.createAttribute("selected");
					    sel.value = "selected";
					    OB_FAV.setAttributeNode(sel);
					    SL_langDst = CURlang[0];
					    SEL = 1;	
				    }

				    OB_FAV.appendChild(doc.createTextNode(CURlang[1]));
				    doc.getElementById(ob).appendChild(OB_FAV);
				}
				OB_FAV = doc.createElement('option');
				var d = doc.createAttribute("disabled");
				d.value = true;
				OB_FAV.setAttributeNode(d);
				var all = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extwptDAll');
			    	OB_FAV.appendChild(doc.createTextNode("-------- [ "+ all +" ] --------"));
			    	doc.getElementById(ob).appendChild(OB_FAV);
			}
			var tmp =favArr[0].split(":");
		        var thelang = tmp[0];
			for(J=0; J < MENU.length; J++){
			    CURlang = MENU[J].split(":");
			    var option = doc.createElement('option');
			    if(SEL == 0){
				    if(CURlang[0] == thelang){
					    var sel = doc.createAttribute("selected");
					    sel.value = "selected";
					    option.setAttributeNode(sel);
				    }
			    }
			    v = doc.createAttribute("value");
			    v.value = CURlang[0];
			    option.setAttributeNode(v);
			    option.appendChild(doc.createTextNode(CURlang[1]));
			    doc.getElementById(ob).appendChild(option);
			}
		} else {
			doc.getElementById(ob).innerText="";
		        var thelang = localStorage["SL_langDst2"];
			for(J=0; J < MENU.length; J++){
			    CURlang = MENU[J].split(":");
			    var option = doc.createElement('option');
			    if(CURlang[0] == thelang){
				    var sel = doc.createAttribute("selected");
				    sel.value = "selected";
				    option.setAttributeNode(sel);
			    }
			    v = doc.createAttribute("value");
			    v.value = CURlang[0];
			    option.setAttributeNode(v);
			    option.appendChild(doc.createTextNode(CURlang[1]));
			    doc.getElementById(ob).appendChild(option);
			}

		}
}


function BT_2STEPS_TRANSLATION(txt) {
   if(SL_WRONGLANGUAGEDETECTED==0){
	   GEBI("SL_back").value="";
	   if(GEBI("SL_source").value!=""){
		if(BOXCONTENT == txt && GEBI("SL_target").value!="") {
			BT_WINDOW();
		}else{
			GEBI("SL_target").value="";
			DETECT(txt);
			setTimeout(function(){
			    var BTIDL = setInterval(function(){
				if(GEBI("SL_target").value != "") {
					clearInterval(BTIDL);
					BTIDL="";
					if(SL_WRONGLANGUAGEDETECTED==0){
						BT_WINDOW();
					}
				} 
			    },10);  
	       		},250);
		}
	   } else {	
		GEBI("SL_target").value="";
		GEBI("SL_back").value="";
	   }
   }
}

function SL_BLOCK_OBJECTS(){
   if(SL_WRONGLANGUAGEDETECTED == 1){
	if(BACK_VIEW==2) {
		var ob = GEBI("SL_BT");
		ob.style.cursor="not-allowed";
		ob.style.color="#bababa";
	} else {	 	
		var ob = GEBI("SL_back_view1");
		ob.className="SL_BACK_GREYOUT2";
	}

	GEBI("SL_dst_view").style.cursor="not-allowed";
   } else {
	if(BACK_VIEW==2) {
		var ob = GEBI("SL_BT");
		ob.style.cursor="pointer";
		ob.style.color="#1284B8";
	} else {
		var ob = GEBI("SL_back_view1");
		ob.className="";
	}
	GEBI("SL_dst_view").style.cursor="pointer";
  }	
}

function resetCursor(){
	GEBI("SL_dst_view").style.cursor="pointer";
}

function SL_Google_Only(){
   if(SL_WRONGLANGUAGEDETECTED == 1){
	setTimeout(function(){
        	SL_setTEMP("PROV","Google");
		for(var i=0; i<LISTofPR.length; i++){
			GEBI("SL_P"+i).className="SL_LABLE_DEACT";
	 		if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_LABLE";}
		}
	},300);
   }	
   SL_BLOCK_OBJECTS();  
}


function SL_GLOBAL_RESIZER(){
       	GLOBAL_HEIGHT = Math.ceil(window.innerHeight);
	var H = Math.ceil((GLOBAL_HEIGHT-100)*1);
		if(BACK_VIEW==2){
				GEBI("SL_fieldset").style.height=(H/2-80)+"px";
				GEBI("SL_source").style.height=(H/2-80)+"px";
        			GEBI("SL_fieldset_trg").style.height=(H/2-40)+"px";
				GEBI("SL_target").style.height=(H/2-70)+"px";
        			if(GEBI("SL_back_zone2")) {
					GEBI("SL_back_zone2").style.height=(H/2-30)+"px";
					GEBI("SL_back_zone2").style.marginTop="-50px";
				}
				GEBI("SL_back").style.height=(H/2-72)+"px";
				GEBI("SL_back").style.marginTop=((H/2-30)*-1)+"px";
				GLOB_BACK_HEIGHT = (H/2-20);

		} else {
				GEBI("SL_fieldset").style.height=(H/3-60)+"px";
				GEBI("SL_source").style.height=(H/3-61)+"px";
        			GEBI("SL_fieldset_trg").style.height=(H/3-25)+"px";
        			GEBI("SL_target").style.marginTop="23px";
				GEBI("SL_target").style.height=(H/3-53)+"px";
	        		if(GEBI("SL_back_zone")){
					GEBI("SL_back_zone").style.height=(H/3-40)+"px";
					GEBI("SL_back").style.height=(H/3-40)+"px";
					GLOB_BACK_HEIGHT = (H/3-40);				
				} 
		}
}

function RESIZE_AND_SHOW_PLAYER(box){
	if(box==1){
		GEBI("SL_fieldset").style.height=(GLOB_BACK_HEIGHT-98)+"px";
		GEBI('SL_source').style.height = (GLOB_BACK_HEIGHT-98)+"px";
	} else {
		GEBI("SL_fieldset_trg").style.height=(GLOB_BACK_HEIGHT-53)+"px";
		GEBI('SL_target').style.height = (GLOB_BACK_HEIGHT-53)+"px";
	}
}

