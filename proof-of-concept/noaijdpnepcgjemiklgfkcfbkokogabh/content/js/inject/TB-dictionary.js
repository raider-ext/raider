'use strict';
var FBOX="";
var TBOX="";
var AVOIDAUTODETECT=FExtension.store.get("AVOIDAUTODETECT");
var SL_DARK="invert(95%)";
var SL_DETECT="";
var DetLangName="";
var STOPLOOP=0;
var SL_TEMPKEYSTRING="";
var SL_KEYCOUNT={ length: 0 };
var SL_KEYSTRING = "";
var SL_WRONGLANGUAGEDETECTED=0;
var TEMPresult="";
var GTTS_length=200;
var ListProviders="";
var PROV = "";
var SLDetLngCodes =    new Array ();
var SLDetLngNames =    new Array ();
var TTSbackupLangs="zh,zt,en,de,hi,id,it,nl,pl,es,ru,ja,ko,fr,pt";
var synth = window.speechSynthesis;
var TheVolume=10;
var TheNewText = "";
var TheNewLang = "";
var FirstLoop = 0;
var SL_EVENT = "";
var YSID = "";
var YSIDold = "";
var YSIDstatus = false;
var BOXCONTENT = "";
var globaltheQ = "";
var GLOBAL_HEIGHT = 570; //540
var SL_BaseLanguages = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages');
var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));
var SL_LanguagesExt = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguagesNew'));
var ALLvoices = FExtension.bg.ImTranslatorBG.ALLvoices;
var SL_FAV_LANGS_IMT = FExtension.store.get("SL_FAV_LANGS_IMT");
var SL_FAV_MAX = FExtension.store.get("SL_FAV_MAX");
var SL_FAV_START = FExtension.store.get("SL_FAV_START");

var BASELANGSCodes =    new Array ();
var BASELANGSNames =    new Array ();


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



var SL_BaseLnum = SL_BaseLanguages.split(",");
for(var i = 0; i < SL_BaseLnum.length; i++){
        var SL_basetmp = SL_BaseLnum[i].split(":");
	BASELANGSCodes.push(SL_basetmp[0]);
	BASELANGSNames.push(SL_basetmp[1]);
}



var SL_Lnum = SL_Languages.split(",");
for(var i = 0; i < SL_Lnum.length; i++){
        var SL_tmp = SL_Lnum[i].split(":");
	SLDetLngCodes.push(SL_tmp[0]);
	SLDetLngNames.push(SL_tmp[1]);
}

var SLDetLngCodesExt =    new Array ();
var SLDetLngNamesExt =    new Array ();
var SL_LnumExt = SL_LanguagesExt.split(",");
for(var i = 0; i < SL_LnumExt.length; i++){
        var SL_tmpExt = SL_LnumExt[i].split(":");
	SLDetLngCodesExt.push(SL_tmpExt[0]);
	SLDetLngNamesExt.push(SL_tmpExt[1]);
}

(function(){document.addEventListener("mousedown",function(){
 try{
   var id = event.target.id;

	 var target = event.target || event.srcElement;
	 var className = target.className;
	 if(className == "_ALNK") {
	    var tags = document.getElementsByClassName("_ALNK");
	    for (var j=0; j<tags.length; j++){
		FExtension.store.set("AVOIDAUTODETECT",1);
		FExtension.store.set("AVOIDAUTODETECT_LNG",SL_DETECT);
		j=1000; 
	    }
	 }


   SL_EVENT=event;
   if(id=="SL_00")   tagClick(event);

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


document.onkeydown=function(event){
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
};

document.onkeyup=function(event){
  if(localStorage["SL_HK_btnbox"]=="true"){
	var SL_HKL = SL_HK_TRANSLATE().toLowerCase();
	var SL_DBL = localStorage["SL_HK_btn"]+":|";
        SL_DBL=SL_DBL.replace(/ \+ /g,":|").toLowerCase();
	if(SL_HKL == SL_DBL || event.keyCode == 13) {
		SL_DICT();
	}
  }	
};


(function(){var w=GEBI("SL_switch");w.addEventListener("click",function(){langSWITCHER();SL_DICT();},!1);} )();
(function(){var t=GEBI("SL_trans_button");t.addEventListener("click",function(){SL_INIT_DICT();},!1);} )();
(function(){var l1=GEBI("SL_langSrc");l1.addEventListener("change",function(){Switch();SL_DICT();},!1);} )();
(function(){var l2=GEBI("SL_langDst");l2.addEventListener("change",function(){Switch();SL_DICT();},!1);} )();
(function(){var c=GEBI("SL_dst_delete");c.addEventListener("click",function(){DICTClear();},!1);} )();
(function(){var tts=GEBI("SL_dict_tts");tts.addEventListener("click",function(){SL_Voice();},!1);} )();
(function(){var pp=GEBI("SL_PP");pp.addEventListener("click",function(){startURL("https://imtranslator.net"+_CGI+"&a=0");},!1);} )();
(function(){var loc=GEBI("SLlocpl");loc.addEventListener("click",function(){GEBI("SL_DETECTED").style.display="none";SL_DETECT = "";LOCcontrol();SL_DICT();},!1);} )();
(function(){GEBI("SL_CloseAlert").addEventListener("click",function(){SLShowHideAlert();},!1);} )();
(function(){GEBI("SL_CloseAlertBTN").addEventListener("click",function(){SLShowHideAlert();},!1);} )();
(function(){GEBI("SL_tab1").addEventListener("click",function(){GoToTranslator();},!1);} )();
(function(){
    window.addEventListener('click',function(){
	  var id = event.target.id;
	  if(id.indexOf("SL_P")!=-1){
		SL_FindTranslator(id);
	  }
    },!1);
})();


(function(){GEBI("SL_DICTtext").addEventListener("click",function(){REMOTE_Voice_Close();},!1);} )();
(function(){GEBI("SL_dst_delete").addEventListener("click",function(){REMOTE_Voice_Close();},!1);} )();
(function(){GEBI("SL_DICTtext").addEventListener("change",function(){SAVEtheSTATE();},!1);} )();

function SL_FindTranslator(ob){ 
 if(SL_WRONGLANGUAGEDETECTED==0){
  var tr = GEBI(ob).outerHTML.replace(/(<([^>]+)>)/ig,"");
  if(ListProviders.indexOf(tr)!=-1)SL_SET_DICT_PRIVIDER(tr);
 } else {
	for(var i=0; i<LISTofPR.length; i++){
		if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_TAB_DICT";}
		else GEBI("SL_P"+i).className="SL_TAB_DEACT_DICT";
	}
 }
}

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
	
(function(event){
 SESSION();
 setTimeout(function(){ LOCcontrol();},350);
})();

SL_Tabs_Maker();

for(var I=0; I<LISTofPR.length; I++){
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
	  st.value = "margin-left:"+(75*I+10)+"px;position:absolute;margin-top:-28px;width:59px";
	  if(I==(LISTofPR.length-1)) st.value = st.value + ";border-right:1px solid #BDBDBD";
       	  OB.setAttributeNode(st);
	  OB.appendChild(document.createTextNode(LISTofPR[I]));
          GEBI("SL_PROVIDERS_DICT").appendChild(OB);

  }
  GEBI('SL_PROVIDERS_DICT').style.marginTop='35px';
  GEBI('SL_DICTsource').style.borderTop='1px solid #BDBDBD';
  if(localStorage["SL_other_gt"]!="1"){
   if(GEBI('ClosedTab')) GEBI('ClosedTab').style.display='block';
  } 
  ACTIVATE_THEME_TABS(FExtension.store.get("THEMEmode"));
}


function SL_Tabs_Settler(){
 var id = SL_EVENT.target.id;
 var ind = id.replace("SL_P","");
 if(GEBI(id).className!="SL_LABLE_DEACT"){
	 SL_setTEMP("DPROV",LISTofPR[ind]);
	 REMOTE_Voice_Close();
 }
 SET_PROV(ind);
}






function SL_Voice (){
   var TTStext=GEBI('SL_DICTtext').value.replace(/<br>/g, " ");
   GEBI("SL_DETECTED").style.visibility="hidden";
   GEBI("SL_DETECTED").style.display="none";
   //SL_DETECT="";
   var MAYAK = 0;
   if(BOXCONTENT == GEBI("SL_DICTtext").value) MAYAK = 1;
   if(MAYAK == 0){
	   BOXCONTENT = GEBI("SL_DICTtext").value;
	   if(GEBI('SLlocpl').checked==false || GEBI('SL_langSrc').value=="auto"){
		   if(DET==0) TTSDODetection(TTStext);
		   else       TTSSLDetectPATCH(TTStext);  	
	   }	
   }

   if(GEBI('SL_alert100'))GEBI('SL_alert100').style.display="none";
   var SL_lng = GEBI("SL_langSrc").value;
   SL_lng = SL_lng.replace("-TW","");
   SL_lng = SL_lng.replace("-CN","");

   GEBI('SL_DICTtext').style.direction="ltr";
   GEBI('SL_DICTtext').style.textAlign="left";
   if(SL_lng=="ar" || SL_lng=="iw" || SL_lng=="fa" || SL_lng=="yi" || SL_lng=="ur" || SL_lng=="ps" || SL_lng=="sd" || SL_lng=="ckb" || SL_lng=="ug" || SL_lng=="dv" || SL_lng=="prs"){
  	 GEBI('SL_DICTtext').style.direction="rtl";
	 GEBI('SL_DICTtext').style.textAlign="right";
   }
   var tm = 2000;
   if(GEBI('SLlocpl').checked==true && GEBI('SL_langSrc').value!="auto") tm=0;

   setTimeout(function(){
    if(GEBI('SLlocpl').checked==false || GEBI('SL_langSrc').value=="auto"){
	   var SL_from = SL_IF_DETECT_IS_PRESENT(SL_DETECT, GEBI("SL_langSrc"));
	   GEBI("SL_DETECTED").style.visibility="visible";
	   var DETECTEDlongName=DetLangName;

	   for (var z=0; z<BASELANGSCodes.length; z++){
       		if(SL_from==BASELANGSCodes[z]) { DETECTEDlongName=BASELANGSNames[z];break; }
	   }
//     	   if(GEBI("SL_langSrc").value=="auto") {SL_from=SL_DETECT; GEBI('SL_DETECTED').innerTEXT = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected') + " " + DETECTEDlongName;}
	   SL_DETECT = SL_from;
    }else  var SL_from = GEBI("SL_langSrc").value;
	   var text = TTStext;
	   TheNewText = TTStext;
	   switch(localStorage["SL_SLVoices"]){
		case "0": if(ALLvoices.indexOf(SL_from)!=-1){
                              if(SL_TTS.indexOf(SL_from)!=-1){
				if(text.length>GTTS_length) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(text)); 
				else Google_TTS(text,SL_from);
			      } else Google_TTS(text,SL_from);
			  } else {
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
				//GEBI("SL_DETECTED").style.display="none";
			  }
			  break;
		case "1": if(ALLvoices.indexOf(SL_from)!=-1){
				if(G_TTS.indexOf(SL_from)!=-1) Google_TTS(text,SL_from);
				else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  } else {
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
				//GEBI("SL_DETECTED").style.display="none";
			  }

			  break;
		case "2": if(ALLvoices.indexOf(SL_from)!=-1){
                              if(SL_TTS.indexOf(SL_from)!=-1) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_from+"&text="+encodeURIComponent(text));
			      else Google_TTS(text,SL_from);
			  } else {
				SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
				//GEBI("SL_DETECTED").style.display="none";
			  }

			  break;
	   }

   },tm);
}

function SL_IF_DETECT_IS_PRESENT(dl, ob){
	var resp=dl, out=0;
	if(GEBI('SLlocpl').checked==true){
		for(var i=0; i < ob.length; i++) if(ob[i].value == dl) out=1;
		if(out==0 && ob.value != "auto") resp = ob.value;
	} else resp = dl;
	return resp;
}


function Google_TTS(text,dir){
  text = text.replace(/`/ig,"'");
  if(localStorage["SL_GVoices"]=="1"){
	if(text.length>GTTS_length){
	   text=text.substring(0,GTTS_length);
	   GEBI('SL_alert100').style.display="block";
	}else REMOTE_Voice(dir,text);
  } else startURL("https://text-to-speech.imtranslator.net/?dir="+dir+"&text="+encodeURIComponent(text));
}


function ___SL_DICTSUBMIT(){ document.location="../popup/TB-dictionary.html?key=0&text="+encodeURIComponent(GEBI('SL_DICTtext').value); }

function tagClick(e){
   var SL_to = GEBI(e.target.id).lang;
   SL_to=SL_to.replace("-TW","");
   SL_to=SL_to.replace("-CN","");
	   var text = GEBI(e.target.id).title;

	   TheNewText=text;
	   switch(localStorage["SL_SLVoices"]){
		case "0": if(ALLvoices.indexOf(SL_to)!=-1){
                              if(SL_TTS.indexOf(SL_to)!=-1){
				if(text.length>GTTS_length) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text)); 
				else Google_TTS(text,SL_to);
			      } else Google_TTS(text,SL_to);
			  } else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  break;
		case "1": if(ALLvoices.indexOf(SL_to)!=-1){
				if(G_TTS.indexOf(SL_to)!=-1) Google_TTS(text,SL_to);
				else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  } else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  break;
		case "2": if(ALLvoices.indexOf(SL_to)!=-1){
                              if(SL_TTS.indexOf(SL_to)!=-1) window.open("https://text-to-speech.imtranslator.net/?dir="+SL_to+"&text="+encodeURIComponent(text));
			      else Google_TTS(text,SL_to);
			  } else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice'));
			  break;
	   }

   e.stopPropagation();
   e.cancelBubble = true;
}


function CONSTRUCTOR(){
	if(localStorage["SL_other_gt"]!="1"){
		GEBI('ClosedTabD').style.display='block';
	}


	window.addEventListener('load',function(){
	SL_GLOBAL_RESIZER();
	if(GEBI('SL_DICTtext').value=="")  GEBI('SL_DICTtext').value = GET_CGI();
	GEBI('SL_DICTtext').value = GEBI('SL_DICTtext').value.trim();

	SET_PROV();
	SET_FIRST_AVAILABLE_PROV();

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
			//	    localStorage["SL_langDst"]=CURlang3[0];
			//	    localStorage["SL_langDst2"]=CURlang3[0];
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
//			    localStorage["SL_langDst"]=SL_TMP2[0];
//			    localStorage["SL_langDst2"]=SL_TMP2[0];
		    }
	    }
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}

	  SET_DICT_PROVIDER();


	  if(SL_getTEMP("LOC")==""){
	        if(localStorage["SL_no_detect"]=="false") GEBI('SLlocpl').checked=true;
		else GEBI('SLlocpl').checked=false;
	  }else{
		if(SL_getTEMP("LOC")=="true")	GEBI('SLlocpl').checked = true;
		else                            GEBI('SLlocpl').checked = false;
	  }


	  GEBI('SL_langSrc').value = localStorage["SL_langSrc2"];
	  GEBI('SL_langDst').value = localStorage["SL_langDst2"];
	  FExtension.store.set("SL_Flag", "TRUE");
	  FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();

	},!1);
	GEBI('SL_h3').innerText="v."+FExtension.bg.ImTranslatorBG.Version();	
	GEBI('SL_h2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTITLE')));

	GEBI('SLoptions_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions');
	GEBI('SLhistory_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHistory');
	GEBI('SLhelp_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp');
	GEBI('SL_PP').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extContribution_ttl');


	GEBI('SL_dst_delete').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClearText');
	GEBI('SL_dict_tts').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extListen');
//	GEBI('SL_DETECTED').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')));
	GEBI('SL_DETECTED').appendChild(document.createTextNode(" "));
	GEBI('SL_switch').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSwitch_languages_ttl');
	GEBI('SL_trans_button').value=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrButton');

//	GEBI('SL_powered').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extPowered')));
//	GEBI('SL_DICTsource').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDictionary')));
	GEBI('SLlocpl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLock_in_language');
	GEBI('SL_tab1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabTrans')));
	GEBI('SL_tab1').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabTrans');
	GEBI('SL_tab2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabDict')));
	GEBI('SL_tab2').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabDict');


	GEBI('SLcompare_ttl').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extView');


       	GEBI('SL_translate_container_app').style.opacity="1";
	switch(PLATFORM){
	 case "Opera" : GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-imtranslator-dictionary/"; break;
	 case "Chrome": GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/google-dictionary/"; break;
	 default      : GEBI('SLhelp_a').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}


	if(GEBI('SL_donate')) GEBI('SL_donate').addEventListener("mouseover",function(){SL_DONATE_manu(1);},!1);
	if(GEBI('SL_donate')) GEBI('SL_donate').addEventListener("mouseout",function(){SL_DONATE_manu(0);},!1);
	if(GEBI('SL_donate_menu')) GEBI('SL_donate_menu').addEventListener("mouseover",function(){SL_DONATE_manu(1);},!1);
	if(GEBI('SL_donate_menu')) GEBI('SL_donate_menu').addEventListener("mouseout",function(){SL_DONATE_manu(0);},!1);

	if(GEBI('M_D1')) GEBI('M_D1').addEventListener("click",function(){SL_DONATE_links(1);},!1);
	if(GEBI('M_D2')) GEBI('M_D2').addEventListener("click",function(){SL_DONATE_links(2);},!1);
	if(GEBI('M_D3')) GEBI('M_D3').addEventListener("click",function(){SL_DONATE_links(3);},!1);
	if(GEBI('M_D4')) GEBI('M_D4').addEventListener("click",function(){SL_DONATE_links(4);},!1);

	if(GEBI('SLcompare_ttl')) GEBI('SLcompare_ttl').addEventListener("mouseover",function(){SL_VIEW_manu(1);},!1);
	if(GEBI('SLcompare_ttl')) GEBI('SLcompare_ttl').addEventListener("mouseout",function(){SL_VIEW_manu(0);},!1);
	if(GEBI('SL_view_menu')) GEBI('SL_view_menu').addEventListener("mouseover",function(){SL_VIEW_manu(1);},!1);
	if(GEBI('SL_view_menu')) GEBI('SL_view_menu').addEventListener("mouseout",function(){SL_VIEW_manu(0);},!1);

	if(GEBI('M_V1')) GEBI('M_V1').addEventListener("click",function(){SL_VIEW_link(1);},!1);
	if(GEBI('M_V2')) GEBI('M_V2').addEventListener("click",function(){SL_VIEW_link(2);},!1);
	if(GEBI('M_V3')) GEBI('M_V3').addEventListener("click",function(){SL_VIEW_link(3);},!1);


}



function SESSION(){     
  CONSTRUCTOR();
  window.addEventListener('load', function(){
   setTimeout(function(){
    SL_Flip_Langs(GEBI('SL_langSrc').value);	
    var tags1 = document.getElementsByClassName("TTS1");
    for (var i=0; i<tags1.length; i++) tags1[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
    var tags2 = document.getElementsByClassName("TTS2");
    for (var i=0; i<tags2.length; i++) tags2[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
    var tags3 = document.getElementsByClassName("_V");
    for (var i=0; i<tags3.length; i++) tags3[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
   },1000);
  }, false);

   if(top!=self){
	GEBI('SL_LR').align='left';
	GEBI('SL_LR').style.marginLeft='5px';
	GEBI('SL_body').style.overflowX='auto';
	GEBI('SL_body').style.overflowY='auto';
	GEBI('SL_l1').target='_parent';
	GEBI('SL_l2').target='_parent';
	GEBI('SL_l4').target='_parent';
//        FExtension.store.set("CUR_URL","undefined");
   }

   var resp = 1;
   if(localStorage["SL_session"] != resp){
       	localStorage["SL_session"]=resp;
	localStorage["SL_Flag"]="FALSE";
	FExtension.store.set("SL_GWPTHist", "");
   }

   if(localStorage["SL_TS"]!=SL_getTEMP("OLD_TS")){
   	localStorage["SL_Flag"]="FALSE";
   	SL_setTEMP("OLD_TS",localStorage["SL_TS"]);
	SL_setTEMP("DPROV","");
	PROV="";
	SL_setTEMP("DIC_FIRSTRUN","");
   }

   setTimeout(function(){
	var cnt = 0;
	var tries = 10;
        var SL_AUTRUN = setInterval(function(){
	   SET_PROV();
	   if(cnt < tries){
		   if(GEBI('SL_DICTtext').value!=""){
			SL_DICT();
			clearInterval(SL_AUTRUN);
		   } else GEBI('SL_loading').style.display='none';
	   } else clearInterval(SL_AUTRUN);
	   cnt++;
	}, 10);  
   },250);
   ACTIVATE_THEME(FExtension.store.get("THEMEmode"));

}



function SL_INIT_DICT(){
// if(GEBI('SL_DICTtext').value=="") GEBI('SL_DICTtext').value = GET_CGI();
 
 if(GEBI('SL_DICTtext').value!=""){
	SL_DICT();
 } else {
//	SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
	GEBI('SL_loading').style.display="none";
	GEBI('SL_DETECTED').style.display="none";
 }	

}



function SL_DICT(){	

	SET_PROV();
        SET_FIRST_AVAILABLE_PROV();
	REMOTE_Voice_Close ();
	GEBI("SL_DICTsource").innerText="";
	SL_PROVIDER_ROUTER();
	ACTIVATE_THEME_TABS(FExtension.store.get("THEMEmode"));
}

function SL_PROVIDER_ROUTER(){
   var DELAY = 150;
   var text = GEBI('SL_DICTtext').value;

   if(text != ""){
	 text = text.trim();
	 GEBI('SL_DICTtext').value = text;
   }

   GEBI('SL_DETECTED').style.display="none";
   if(GEBI('SLlocpl').checked==false || GEBI('SL_langSrc').value=="auto"){
      if(FExtension.store.get("AVOIDAUTODETECT")==0){

	var resp = i18n_LanguageDetect(text);

   	if(BOXCONTENT == GEBI("SL_DICTtext").value){
		resp = SL_DETECT;
	}

	if(resp == ""){
		BOXCONTENT = GEBI("SL_DICTtext").value;
	  	if(DET==0) DODetection(text);
		else       SLDetectPATCH(text);      
	}else{
		var cnt=0;
        	for (var i=0;i<BASELANGSCodes.length;i++){
			if(resp == BASELANGSCodes[i]){
				cnt=1; 
				SL_DETECT = BASELANGSCodes[i];
				if(SL_WRONGLANGUAGEDETECTED==0){
		               	        GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+BASELANGSNames[i];
					GEBI("SL_DETECTED").style.display='block';	
				}
			}
		}

		if(cnt==0){
                        SL_WRONGLANGUAGEDETECTED=1;
		}else SL_WRONGLANGUAGEDETECTED=0;

//	   SL_Flip_Langs(SL_DETECT);
    
	   SET_PROV();
           SET_FIRST_AVAILABLE_PROV();
	   DELAY = 0;
	}
      } else {
	SL_DETECT=FExtension.store.get("AVOIDAUTODETECT_LNG");
      }	
      FExtension.store.set("AVOIDAUTODETECT",0);
      GEBI('SL_DETECTED').style.display="block";
      GEBI("SL_DETECTED").style.visibility="visible";

   } else { DELAY=0; SL_DETECT=GEBI('SL_langSrc').value;}

   GEBI('SL_loading').style.display="block";	



   SL_Flip_Langs(GEBI('SL_langSrc').value);
   setTimeout(function(){

	SL_SAVE_FAVORITE_LANGUAGES(GEBI('SL_langDst').value);
	if(SL_WRONGLANGUAGEDETECTED==1) SL_setTEMP("DPROV","Google"); 

        if(ListProviders==""){
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
	} else {
		SET_PROV(0);
		switch(SL_getTEMP("DPROV")){
			case "Google": GET_G_DICT();break;
			case "Microsoft": GET_M_DICT(); break;
			case "Translator": GET_T_DICT(); break;
			case "Yandex": GET_Y_DICT(); break;
		}
	}
   },DELAY);
}




function GET_M_DICT(){  
   GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/</ig,"");
   GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/>/ig,"");
   var text = GEBI('SL_DICTtext').value;
   GEBI('SL_loading').style.display="block";	
        if(ListProviders.indexOf("Microsoft")!=-1){
	        var text = GEBI('SL_DICTtext').value;
		var f = GEBI('SL_langSrc').value;
		var t = GEBI('SL_langDst').value;
		MS(f,t,text); 
	}
}
function GET_T_DICT(){ 
   GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/</ig,"");
   GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/>/ig,"");
   var text = GEBI('SL_DICTtext').value;
   GEBI('SL_loading').style.display="block";	
        if(ListProviders.indexOf("Translator")!=-1){
		var f = GEBI('SL_langSrc').value;
		var t = GEBI('SL_langDst').value;
		SL_OTHER_PROVIDERS(text,f,t);
	}
}


function GET_G_DICT(){
 if(GEBI("SL_DICTtext").value=="" && window.location.href.indexOf("&text=")==-1 && FExtension.store.get("SL_SaveText_box_gt")==1) GEBI("SL_DICTtext").value=FExtension.store.get("SL_SavedText_gt").substring(0,100).replace(/\^/ig,"%");

 GEBI('SL_DICTsource').innerTEXT="";
 var num = Math.floor((Math.random() * SL_GEO.length)); 
 var theRegion = SL_GEO[num];
 if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
 var baseUrl = "https://translate.google."+theRegion+"/translate_a/single";

 var text = GEBI('SL_DICTtext').value;


 GEBI('SL_loading').style.display="block";
 if(GEBI('SL_DICTtext').value=="")text = GET_CGI();
 text=text.trim();
// text=text.replace(/#/g,"");
// text=text.replace(/%/g,"");
// text=text.replace(/\./gi,"");
 text=text.replace(/\)/gi,"");
 text=text.replace(/\(/gi,"");
// text=text.replace(/\"/gi,"'");
 text=text.replace(/\�/gi,"");
 text=text.replace(/\�/gi,"");
 text=text.replace(/>/gi,"");
 text=text.replace(/</gi,"");
 text = truncStrByWord(text,100);
 text=text.trim();

 FExtension.store.set("SL_SavedText_gt",text);
// if(GEBI("SL_langSrc").value=="")GEBI("SL_langSrc").value=localStorage["SL_langSrc"];
// if(GEBI("SL_langDst").value=="")GEBI("SL_langDst").value=localStorage["SL_langDst"];



 GEBI('SL_DICTtext').value=text;
 if(text!=""){
//  if(localStorage["SL_Flag"]=="FALSE") {var mySL_langSrc = localStorage["SL_langSrc"]; localStorage["SL_langSrc2"]=localStorage["SL_langSrc"];}
//  else	var mySL_langSrc = localStorage["SL_langSrc2"];
//  GEBI('SL_langSrc').value = mySL_langSrc;
  GEBI('SL_DICTtext').style.direction="ltr";
  GEBI('SL_DICTtext').style.textAlign="left";
  if(GEBI('SL_langSrc').value=="ar" || GEBI('SL_langSrc').value=="iw" || GEBI('SL_langSrc').value=="fa" || GEBI('SL_langSrc').value=="yi" || GEBI('SL_langSrc').value=="ur" || GEBI('SL_langSrc').value=="ps" || GEBI('SL_langSrc').value=="sd" || GEBI('SL_langSrc').value=="ckb" || GEBI('SL_langSrc').value=="ug" || GEBI('SL_langSrc').value=="dv" || GEBI('SL_langSrc').value=="prs"){
  	GEBI('SL_DICTtext').style.direction="rtl";
	GEBI('SL_DICTtext').style.textAlign="right";
  }
  var text = GEBI('SL_DICTtext').value;
          var SLIDL = setInterval(function(){

		if(SL_DETECT!="") {
        	        clearInterval(SLIDL);
			if(GEBI('SLlocpl').checked==false || GEBI('SL_langSrc').value=="auto") GEBI("SL_DETECTED").style.visibility="visible";
			else GEBI("SL_DETECTED").style.visibility="hidden";

			FExtension.store.set("SL_langDst_name", GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text);         
			FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();


		        var SrcLng = GEBI('SL_langSrc').value;
		        var DstLng = GEBI('SL_langDst').value;

		        if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto"  || GEBI('SLlocpl').checked==false){
				SrcLng = SL_DETECT;
			}
			var fromHistory=0;
			if(window.location.href.indexOf("dir=")!=-1){
			   try{
				var URI_LOCATION_TMP = window.location.href.split("dir=");
				var URI_LOCATION_TMP2 = URI_LOCATION_TMP[1].split("&");
				if(URI_LOCATION_TMP2[0].indexOf("|")!=-1){
					var URI_LOCATION_TMP3 = URI_LOCATION_TMP2[0].split("|");

					FBOX = URI_LOCATION_TMP3[0];
					TBOX = URI_LOCATION_TMP3[1];
					SrcLng = URI_LOCATION_TMP3[0];

					if(top==self) {
						//ImTranslator DICTIONARY links
						if(SL_DETECT!="") SrcLng = SL_DETECT;
						DstLng = localStorage["SL_langDst2"];
					} else {
						//HISTORY ImTranslator DICTIONARY links
	                    			DstLng = URI_LOCATION_TMP3[1];
        	            			GEBI('SL_langDst').value = DstLng;
				                //DstLng = localStorage["SL_langDst2"];
						GEBI('SL_langSrc').value = SrcLng;

						if(GEBI('SL_langSrc').value==""){SrcLng=URI_LOCATION_TMP3[0]; }
						if(GEBI('SL_langDst').value==""){DstLng=URI_LOCATION_TMP3[1]; }

					}
					fromHistory=1;
					SL_DETECT = SrcLng;
				}
			   } catch (ex){}
			}

                        if(SL_WRONGLANGUAGEDETECTED==1) SrcLng = "auto";
                        var dtxt = GEBI('SL_DICTtext').value;

	  		localStorage["SL_langSrc2"]=GEBI('SL_langSrc').value;
			localStorage["SL_langDst2"]=GEBI('SL_langDst').value;


			SrcLng = SrcLng.replace("tlsl","tl");
			SrcLng = SrcLng.replace("srsl","sr");

			DstLng = DstLng.replace("tlsl","tl");
			DstLng = DstLng.replace("srsl","sr");


			var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(dtxt.toLowerCase())+"&sl="+SrcLng+"&tl="+DstLng+"&hl=en";
//		        baseUrl = baseUrl + "?" + SL_Params;
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
					var mySourceLang = GEBI("SL_langSrc").value;
					var myTargetLang = GEBI("SL_langDst").value;
		                        var resp = ajaxRequest.responseText;
                                        var temp = new Array();
					if(resp.indexOf('trans":')!=-1){
                        		   if(resp.indexOf('reverse_translation')==-1){
                        		         if(resp.indexOf('"trans":"')!=-1){
	                                           resp = resp.replace(/\\"/ig,"'");
						   resp = resp.replace(/u0027/g,"'");
                	                           var R1 = resp.split('"trans":"'); 
                	                           var R2 = R1[1].split('"'); 
                                	           resp = R2[0];
                        	                 } else resp = resp.replace(/"/ig,'');
                        	                 
                                                 temp[0]=resp;

						 GEBI('SL_DICTtext').style.direction="ltr";
						 GEBI('SL_DICTtext').style.textAlign="left";
						 var SL_lng = GEBI('SL_langSrc').value;
						 if(localStorage["SL_no_detect"]=="true" || SL_lng=="auto") SL_lng=SL_DETECT;
						 if(SL_lng=="ar" || SL_lng=="iw" || SL_lng=="fa" || SL_lng=="yi" || SL_lng=="ur" || SL_lng=="ps" || SL_lng=="sd" || SL_lng=="ckb" || SL_lng=="ug" || SL_lng=="dv" || SL_lng=="prs"){
						  	 GEBI('SL_DICTtext').style.direction="rtl";
							 GEBI('SL_DICTtext').style.textAlign="right";
						 }

						 GEBI('SL_DICTsource').style.direction="ltr";
						 GEBI('SL_DICTsource').style.textAlign="left";

						 if(GEBI('SL_langDst').value=="ar" || GEBI('SL_langDst').value=="iw" || GEBI('SL_langDst').value=="fa" || GEBI('SL_langDst').value=="yi" || GEBI('SL_langDst').value=="ur" || GEBI('SL_langDst').value=="ps" || GEBI('SL_langDst').value=="sd" || GEBI('SL_langDst').value=="ckb" || GEBI('SL_langDst').value=="ug" || GEBI('SL_langDst').value=="dv" || GEBI('SL_langDst').value=="prs"){
						  	GEBI('SL_DICTsource').style.direction="rtl";
							GEBI('SL_DICTsource').style.textAlign="right";
						 }

//						 if(fromHistory==0) SL_Flip_Langs(SL_DETECT);

					   	 FExtension.bg.ImTranslatorBG.DIC_TRIGGER = 0;
					   } else {
						 FExtension.bg.ImTranslatorBG.DIC_TRIGGER = 0;
	                		         temp = SL_DICTparser(resp);
						 temp[1] = temp[1].replace(/\"/ig,"'");
						 temp[1] = temp[1].replace(/\''/ig,"'");
						 temp[1] = temp[1].replace(/\\/g,"");
						 temp[0] = temp[0].replace(/u0027/g,"'");
		                                 temp[0] = temp[0].replace(/\\u0026/ig,"&");
               			                 temp[0] = temp[0].replace(/\\u003c/ig,"<");
               	                		 temp[0] = temp[0].replace(/\\u003e/ig,">");

			                         resp = temp[1] + temp[0];

					   }
					} else {

						FExtension.bg.ImTranslatorBG.DIC_TRIGGER=1;
						resp=""; 
						//resp='["VALERA"]'	
						if(resp.indexOf('[')!=-1 && resp.indexOf(']')!=-1 && resp.indexOf('[{')==-1){						
							resp=resp.replace('["','');
							resp=resp.replace('"]','');
						} else SL_OTHER_PROVIDERS(text,SrcLng,DstLng);

					}

			                if(resp=="" || resp.indexOf("<h1>Not Found</h1>")>-1) SL_OTHER_PROVIDERS(text,SrcLng,DstLng);
			                else{
					 CNTR('2331',SrcLng+"/"+DstLng, text.length);

       					 resp=resp.replace(/ \\u0026 /gi," & ");
       					 resp=resp.replace(/\\u0026/gi,"&");
       					 resp=resp.replace(/\\u003d/gi,"=");

		       			 resp = resp.replace(/\\/g,"");

					 var ForHistory=temp[0];			

       					 if(resp.indexOf("<div ")==-1) {
						resp = PseudoDICT(resp);
						ForHistory = resp;
					 }

					 GEBI('SL_DICTsource').innerHTML=resp;
                                         GEBI('SL_loading').style.display="none";

				   	 if(SL_WRONGLANGUAGEDETECTED==1) {
						SL_setTEMP("PROV","Google"); 
						for(var i=0; i<LISTofPR.length; i++){
				 			if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_TAB_DICT";}
						}

						//SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Voice')); 
						//return false;
				   	 }


      				         if (localStorage["SL_TH_1"]==1){
		                          var SLnow = new Date();
					  SLnow=SLnow.toString();
		                          var TMPtime=SLnow.split(" ");
                		          var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		                          var HISTORYtype=6;
                		          if(resp.indexOf('id=_X')==-1) HISTORYtype=1;
		                          var LNGfrom = GEBI("SL_langSrc").value;
                		          if(GEBI("SL_langSrc").value=="auto" || localStorage["SL_no_detect"]=="true" ) LNGfrom = SL_DETECT;

					  if(SL_WRONGLANGUAGEDETECTED==1) LNGfrom="auto";
					  setTimeout(function(){
					         var URL = localStorage["THE_URL"];
					         if(top.document.URL.indexOf("/options/options.html")!=-1)  URL = "";
						 localStorage["THE_URL"]="";

						 var txt = GEBI('SL_DICTtext').value;
                                                 txt=txt.replace(/~/ig," ");
       	                                         ForHistory=ForHistory.replace(/~/ig," ");

	        		                 localStorage["SL_History"]=txt + "~~" + ForHistory + "~~" + LNGfrom + "|" + GEBI("SL_langDst").value + "~~"+ URL +"~~"+CurDT+"~~"+HISTORYtype+"^^" + localStorage["SL_History"];
					  },500);
                		         }
                                         ACTIVATE_THEME_PARSER(FExtension.store.get("THEMEmode"));
                		        }
				}
			}

			ajaxRequest.open("POST", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		        ajaxRequest.send(SL_Params);
			setTimeout(function(){
			    var tags1 = document.getElementsByClassName("TTS1");
			    for (var i=0; i<tags1.length; i++) tags1[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
			    var tags2 = document.getElementsByClassName("TTS2");
			    for (var i=0; i<tags2.length; i++) tags2[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
			    var tags3 = document.getElementsByClassName("_V");
			    for (var i=0; i<tags3.length; i++) tags3[i].addEventListener('mousedown', function(e){ tagClick(e) }, false);
			},800);

		} 
	}, 900);  


 } else {
	GEBI("SL_DETECTED").style.display='none';
        GEBI('SL_loading').style.display="none";
 }	
}



function GEBI(id){ return document.getElementById(id);}

function GET_CGIforDir(){
 var resp="";
  if(window.location.search.indexOf("dir=")>-1){
   var text=window.location.search.split("dir=");
   if(text[1].indexOf("&text=")>-1){
    var text2=text[1].split("&text=");
    resp=text2[0];
   }else  resp=text[1];
  }
 return resp;
}


function GET_CGI(){
 var resp="";
 var ob = decodeURIComponent(String(window.location.search));

  if(ob.indexOf("text=")>-1){
   var text=ob.split("text=");
   resp=text[1].replace(/~/g,"'");
  }
 return resp;
}


function langSWITCHER(){
 if(GEBI("SL_langSrc").value!="auto"){
  var temp=GEBI("SL_langDst").value;
  GEBI("SL_langDst").value=GEBI("SL_langSrc").value;
  GEBI("SL_langSrc").value=temp;
  Switch();
 }else SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDisabled'));
}

function Switch(){
 BOXCONTENT="";
 SL_DETECT="";
 localStorage["SL_langSrc2"]=GEBI('SL_langSrc').value;
 localStorage["SL_langDst2"]=GEBI('SL_langDst').value;
 localStorage["SL_langDst_name"] = GEBI("SL_langDst").options[GEBI("SL_langDst").selectedIndex].text;
 FExtension.bg.ImTranslatorBG.SL_Planshet_Reset();//SL_callbackRequest2();
 
 SET_PROV();
 SET_FIRST_AVAILABLE_PROV();
 ACTIVATE_THEME_TABS(FExtension.store.get("THEMEmode"));
}


function DICTClear(){
 GEBI('SL_DICTsource').innerText="";
 GEBI('SL_DICTtext').value="";
 GEBI('SL_DICTtext').focus();
// GEBI('SL_dict_tts').style.display='none';
 GEBI('SL_DETECTED').style.visibility='hidden';
 FExtension.store.set("SL_SavedText_gt","");
}

function REMOTE_Voice (dir, text){
 if(text!=""){
  if(dir==""){
    if(SL_DETECT == "") dir = GEBI("SL_langSrc").value;
    else dir = SL_DETECT;
  }
   REMOTE_Voice_Close();
   var BackUpDir = dir;
   dir = dir.replace("-TW","");
   dir = dir.replace("-CN","");
   dir = dir.replace("en","en-BR");
   dir = dir.replace("es","es-419");
//   dir = dir.replace("pt","pt-BR");
   if(dir=="fr-CA") dir="fr";
   if(dir=="lzh") dir="zh";
   if(dir=="yue") dir="zh";
   if(dir=="pt") dir="pt-BR";


//  var TK = Math.floor(Date.now() / 1000);
  var a=Math.floor((new Date).getTime()/36E5)^123456;
  var TK = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);

  var length = text.length;
  var num = Math.floor((Math.random() * SL_GEO.length)); 
  var theRegion = SL_GEO[num];
  if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
  var baseUrl = "https://translate.google."+theRegion;

  var client = "tw-ob";
//  if(dir=="es") client="t";
//  if(BackUpDir=="es") client="t";

  baseUrl = baseUrl+'/translate_tts?tk='+TK+'&ie=UTF-8&tl='+dir+'&total=1&idx=0&textlen='+length+'&client='+client+'&q='+encodeURIComponent(text);

  var frame = document.getElementById('PL_lbframe');
  if(frame)	frame.parentNode.removeChild(frame);
  if(!document.getElementById("PL_lbframe")){
    GEBI("SL_player3").innerHTML="";
    var die=document.createElement("iframe");
    die.src="";
    die.name="PL_lbframe";
    die.id="PL_lbframe";
    die.width="446px";
    die.height="35px";
    die.scrolling="no";
    die.frameBorder="0";
    document.getElementById('SL_player3').appendChild(die);

            const http = new XMLHttpRequest
            http.onload = e => {
                const reader = new FileReader();
                reader.onloadend = function() {

		  var frame = window.frames["PL_lbframe"].document.getElementById('SLmedia');
		  if(frame)	frame.parentNode.removeChild(frame);

		     var audioElement = document.createElement('audio');
		     audioElement.setAttribute('src', reader.result);
		     audioElement.setAttribute('preload', 'auto');
		     audioElement.setAttribute('controls', 'controls');
		     audioElement.setAttribute('autoplay', 'autoplay');
		     audioElement.setAttribute('id', 'SLmedia');
		     audioElement.setAttribute('name', 'SLmedia');
		     audioElement.setAttribute('style', 'width:470px;margin-top:-18px;margin-left:-22px;');
		     window.frames["PL_lbframe"].document.body.appendChild (audioElement);
		     GEBI('SL_player3').style.display="block";
		     GEBI('SL_player3').style.height="35px";
		     GEBI('SL_player3').style.width="480px";

			setTimeout(function(){
			   try {
			     var TTSstatus = String((window.frames["PL_lbframe"].document.getElementById("SLmedia").duration));
		        	 if(TTSstatus=="NaN") {
					if(PLATFORM=="Chrome" && TTSbackupLangs.indexOf(BackUpDir)!=-1) GOOGLE_TTS_backup(BackUpDir);
					else {
						GEBI("SL_player3").innerHTML="<div align=center><font color='#BD3A33'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVstu')+"</font><br><a href='../options/options.html?feed' target='_blank' class='SL_links'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFeedback')+"</a></div>";
					}
				 }
			   } catch (ex) {if(PLATFORM=="Chrome" && TranslatorIM.TTSbackupLangs.indexOf(BackUpDir)!=-1)TranslatorIM.GOOGLE_TTS_backup(BackUpText,BackUpDir);}
			}, 3000);  

                }
                reader.readAsDataURL(e.target.response)
            }
    
            http.onerror = e => {
                console.error(e)
                reject(e)
            }
            http.open("GET", baseUrl)
            http.responseType = "blob"
            http.send()


  }

  GEBI("SL_DETECTED").style.display="block";
  if(GEBI("PL_lbframe").style.display!="block"){
	 SetProperHeight(335);
  }

 }
}

function SL_TTSicn(lng,st){
 var OUT="";

 if(lng!="ar" && lng!="iw" && lng!="fa" && lng!="yi" && lng!="ur" && lng!="ps" && lng!="sd" && lng!="ckb" && lng!="ug" && lng!="dv" && lng!="prs"){
  if(st==0){
   GEBI("SL_DICTtext").style.direction="ltr";
   GEBI("SL_DICTtext").style.textAlign="left";
  }
  OUT=1;
 } else {
  if(st==0){
   GEBI("SL_DICTtext").style.direction="rtl";
   GEBI("SL_DICTtext").style.textAlign="right";
  }
  OUT=2;
 }
 return(OUT);
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


	for (var i=0;i<BASELANGSCodes.length;i++){
		if(lng == BASELANGSCodes[i]){DetLangName = BASELANGSNames[i]; break;}
	}

	if(DetLangName) GEBI("SL_DETECTED").innerHTML = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;

}




function SL_DICTparser(resp){

   var PARTS = new Array();
   var SL_to = GEBI('SL_langDst').value;
   if(SL_DETECT==GEBI('SL_langDst').value) SL_to = GEBI('SL_langSrc').value;

   var SL_from = GEBI('SL_langSrc').value;
   var SL_from_ = SL_from;
   var DETECTEDlng=SL_DETECT;

   var parsedRES="";
   var parsedTRANS="";
   var DETECTEDlongName=DetLangName;
   for (var z=0; z<BASELANGSCodes.length; z++){
       if(DETECTEDlng==BASELANGSCodes[z]) {SL_DETECT=BASELANGSCodes[z]; DETECTEDlongName=BASELANGSNames[z];SL_from=SL_DETECT;break; }
   }


   var SL_LABLE="";

   if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto" || GEBI('SLlocpl').checked==false) SL_LABLE = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected') + " " + DETECTEDlongName;
   GEBI('SL_DETECTED').innerText = SL_LABLE;

//   SL_Flip_Langs(DETECTEDlng);

//   localStorage["SL_langSrc2"]=GEBI('SL_langSrc').value;
//   localStorage["SL_langDst2"]=GEBI('SL_langDst').value;

   if(resp.indexOf('spell_res":"')==-1){
	var Tr1=resp.split('dict":[');
	var Tr2=Tr1[0].split('trans":"');
	var Tr3=Tr2[1].split('"');
	var TRANSLATION = Tr3[0];
   } else {
	var Tr1=resp.split('dict":[');
	var Tr2=Tr1[0].split('orig":"');
        var Tr3=Tr2[1].split('"');
   }


/*
	   var Tr1=resp.split('spell_res":"');
	   var Tr2=Tr1[1].split('"');
	   var TRANSLATION = Tr2[0];
*/

   var WAY = SL_TTSicn(DETECTEDlng,0);
   var WAY2 = SL_TTSicn(GEBI('SL_langDst').value,1);
   var FAKE="";
   if(SL_TTS.indexOf(SL_DETECT)!=-1 || (G_TTS.indexOf(SL_DETECT)!=-1 && localStorage["SL_GVoices"]!="0")){
           GEBI('SL_dict_tts').style.display='block';
	   if(resp.indexOf("reverse_translation")!=-1){
	      var TOPword = GEBI("SL_DICTtext").value.replace(/"/ig,"'");
	      TOPword = TOPword.replace(/''/ig,"'");
	      TOPword = TOPword.replace(/'/ig,"`");
	      if(WAY == 1) 	FAKE = "<div id=_X><div id=_XL><div class=TTS"+WAY+" id=SL_000 lang=\""+DETECTEDlng+"\" title='"+TOPword+"'></div></div><div id=_XR style='font-weight:bold;font-size:14px;'>" + GEBI("SL_DICTtext").value + "</div></div>";
	      else    	FAKE = "<div id=_X><div id=_FL><div class=TTS"+WAY+" id=SL_000 lang=\""+DETECTEDlng+"\" title='"+TOPword+"'></div></div><div id=_FR>" + GEBI("SL_DICTtext").value + "</div></div>";

	   } else {
	      if(WAY == "1"){
	 	parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
	      } else {
	 	parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
	      }
	   }
   } else {
           GEBI('SL_dict_tts').style.display='none';
	   if(resp.indexOf("reverse_translation")!=-1){
	      if(WAY == 1) 	FAKE = "<div id=_X><div id=_XR style='font-weight:bold;font-size:14px;'>" + GEBI("SL_DICTtext").value + "</div></div>";
	      else    	FAKE = "<div id=_X><div id=_FR>" + GEBI("SL_DICTtext").value + "</div></div>";
	   } else {
	      if(WAY == "1"){
	 	parsedTRANS = "<div dir=rtl>"+TRANSLATION+"</div>";
	      } else {
	 	parsedTRANS = "<div dir=ltr>"+TRANSLATION+"</div>";
	      }
	   }
   }

   parsedRES = parsedTRANS+"<br>";

   if(resp.indexOf('pos":"')!=-1){
     try {
	var Gurl=chrome.extension.getURL('content/html/popup/TB-dictionary.html');
        var Rline,article;
	const obj = JSON.parse(resp);
	for(var i = 0; i < obj.dict.length; i++){
		parsedRES = parsedRES + "<div id=_Y>" +obj.dict[i].pos + "</div>";
		for (var j=0; j < obj.dict[i].entry.length; j++){
			        article="<x id=_ART>" + obj.dict[i].entry[j].word + "</x> ";
                                Rline = "";
				for(var k = 0; k < obj.dict[i].entry[j].reverse_translation.length; k++){
					var tmpLNK = obj.dict[i].entry[j].reverse_translation[k].replace(/\\'/g,'~');
					tmpLNK = tmpLNK.replace(/\\u0027/g,'~');
					var F = SL_from;
					if(F != FBOX && FBOX != "") F = FBOX;
					var T = SL_to;
					if(T != TBOX && TBOX != "") T = TBOX;
					if(k < obj.dict[i].entry[j].reverse_translation.length-1){
						Rline = Rline + "<a class=_ALNK href='"+Gurl+"?dir="+ F + "|" + T +"&text=" + encodeURIComponent(tmpLNK) + "'>" + tmpLNK + "</a>, ";
					} else {
						Rline = Rline + "<a class=_ALNK href='"+Gurl+"?dir="+ F + "|" + T +"&text=" + encodeURIComponent(tmpLNK) + "'>" + tmpLNK + "</a>";
					}
				}
				var REV=obj.dict[i].entry[j].reverse_translation;
				var WORD=obj.dict[i].entry[j].word;
				var SL_myTTS = article;// + REV;
			        if(SL_TTS.indexOf(SL_to)!=-1 || (G_TTS.indexOf(SL_to)!=-1 && localStorage["SL_GVoices"]!="0")){
				   if(WAY2==1) SL_myTTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_"+i+j+"\" lang=\""+SL_to+"\" title=\"" + WORD + "\"></div></div><div id=_XR>" + article +"</div></div>";
				   else SL_myTTS = "<div id=_X><div id=_FL><div class=TTS"+WAY2+" id=\"SL_"+i+j+"\" lang=\""+SL_to+"\" title=\"" + WORD + "\"></div></div><div id=_XR>" + article + "</div></div>";
				}			
				parsedRES = parsedRES + "<div id=_A><div id=_AL>" + SL_myTTS + "</div><div id=_AR>" + Rline + "</div></div>";
		}
		parsedRES = parsedRES + "<br>";
	}
      } catch(ex){
	FAKE="";
       	parsedRES=TRANSLATION;
      }	

    } else parsedRES = parsedTRANS;
      if(parsedRES.indexOf("_A")!=-1){
	    setTimeout(function(){
	     SL_ALIGNER1(GEBI('SL_langDst').value);
	     SL_ALIGNER2(DETECTEDlng)
	    },5);
      } else setTimeout(function(){ SL_ALIGNER3(DETECTEDlng,GEBI('SL_langDst').value);},5);
 return [parsedRES, FAKE];
}



function SL_ALIGNER1(SL_to){
 var nums=document.getElementsByTagName("div").length;
 if(SL_to!="ar" && SL_to!="iw" && SL_to!="fa" && SL_to!="yi" && SL_to!="ur" && SL_to!="ps" && SL_to!="sd" && SL_to!="ckb" && SL_to!="ug" && SL_to!="dv" && SL_to!="prs"){
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AL")	 document.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AL")	 document.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
}

function SL_ALIGNER2(SL_from){
 var nums=document.getElementsByTagName("div").length;
 if(SL_from!="ar" && SL_from!="iw" && SL_from!="fa" && SL_from!="yi" && SL_from!="ur" && SL_from!="ps" && SL_from!="sd" && SL_from!="ckb" && SL_from!="ug" && SL_from!="dv" && SL_from!="prs"){
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AR")	 document.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_AR")	 document.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
}

function SL_ALIGNER3(SL_from,SL_to){
 if(SL_to=="ar" || SL_to=="iw" || SL_to=="fa" || SL_to=="yi" || SL_to=="ur" || SL_to=="ps" || SL_to=="sd" || SL_to=="ckb" || SL_to=="ug" || SL_to=="dv" || SL_to=="prs") GEBI("SL_DICTsource").style.textAlign='right';
 else	GEBI("SL_DICTsource").style.textAlign='left';
 if(SL_from=="ar" || SL_from=="iw" || SL_from=="fa" || SL_from=="yi" || SL_from=="ur" || SL_from=="ps" || SL_from=="sd" || SL_from=="ckb" || SL_from=="ug" || SL_from=="dv" || SL_from=="prs")	GEBI("SL_DICTtext").style.textAlign='right';
 else	GEBI("SL_DICTtext").style.textAlign='left';
}


function DODetection(myTransText) {
  if(myTransText=="") myTransText = GEBI("SL_DICTtext").value;
  if(myTransText!=""){


    var cntr = myTransText.split(" ");
    var newTEXT = myTransText;
    newTEXT = truncStrByWord(newTEXT,100)

    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];
    if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");

    var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/single';
    var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(newTEXT) + "&sl=auto&tl=en&hl=en";    
                   


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
                        var captcha=0;
			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf('ld_result":{"srclangs":["')!=-1) {

                                var GDImTranslator_lang=resp.split('ld_result":{"srclangs":["');
				var GDImTranslator_lang1=GDImTranslator_lang[1].split('"');
 				resp=GDImTranslator_lang1[0];

				var resp2=resp.replace("zh-CN","zh");
				resp2=resp2.replace("zh-TW","zt");

        	                var thetemp=GEBI("SL_langSrc").value.replace("zh-TW","zt");
                	        thetemp=thetemp.replace("zh-CN","zh");

				SL_DETECT = resp;


				// NOT TRUSTED LANGUAGES
				myTransText = myTransText.trim();
				globaltheQ = myTransText.split(" ").length;

	                        if(DO_NOT_TRUST_WORD.indexOf(SL_DETECT)!=-1 && globaltheQ==1){
					SLDetector(myTransText);
					return false;
				}	

	                        if(resp2==DO_NOT_TRUST_TEXT){
					SLDetector(myTransText);
					return false;
				}
				//----------------------

/*
				   resp = resp.replace("or-IN","or");
				   resp = resp.replace("ku-Latn","ku");
				   resp = resp.replace("ku-Arab","ckb");
				   resp = resp.replace("sr-Latn-RS","sr-Latn");  

				   if(GEBI("SL_langDst").value == "tlsl") resp = resp.replace("tl","tlsl");
				   if(GEBI("SL_langDst").value == "srsl") resp = resp.replace("sr","srsl");
*/
				   SL_DETECT=resp;

				CNTR('2311',resp2+"/"+resp2, newTEXT.length);
					var cnt=0;
        		                for (var i=0;i<BASELANGSCodes.length;i++){
						if(resp == BASELANGSCodes[i]){
							cnt=1; 
							SL_DETECT = BASELANGSCodes[i];

//							if(SL_WRONGLANGUAGEDETECTED==0){
				                	        GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+BASELANGSNames[i];
								GEBI("SL_DETECTED").style.display='block';
//							}	
						}
					}
	                	        SL_WRONGLANGUAGEDETECTED=0;
	                	        
					if(cnt==0){
						//SL_DETECT="zu";
						//SL_setTEMP("PROV","Google"); 
						
						GEBI("SL_DETECTED").innerText ="";
				    		setTimeout(function(){
							for(var i=0; i<LISTofPR.length; i++){
				 				if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_TAB_DICT";}
								else GEBI("SL_P"+i).className="SL_TAB_DEACT_DICT";
							}
							GEBI("SL_DETECTED").style.visibility="hidden";
					        },500); 

			                        SL_WRONGLANGUAGEDETECTED=1;
					}
					
                                        SL_Flip_Langs(SL_DETECT);
					SET_PROV();
                                        SET_FIRST_AVAILABLE_PROV();



			} else 	SLDetectPATCH(myTransText);
		}

	}
	baseUrl = baseUrl +"?"+ SL_Params;
	ajaxRequest.open("GET", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send(SL_Params);    
  }                                

}                                 
        
function SLDetectPATCH(theText){
        SLDetector(theText);
}


function SLDetector (text){
	if(text=="") text = GEBI("SL_source").value;
  	var theLIMIT = 100;     

        var fr = GEBI("SL_langSrc").value;
        if(fr=="auto") fr="*a";
        CNTRP('2311',fr+"/"+GEBI("SL_langDst").value, truncStrByWord(text,theLIMIT).length);
                       
	var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=pl_d&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
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
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    SL_DETECT="en";
        		            if(tmp2[0].length>0 && tmp2[0].length<7) SL_DETECT=tmp2[0];
        		            if(SL_DETECT == "zh") SL_DETECT="zh-CN";
        		            if(SL_DETECT == "zt") SL_DETECT="zh-TW";

        		            var cnt=0;
				    var ALLlangs=SL_BaseLanguages.split(",");
				    for (var z=0; z<ALLlangs.length; z++){
					var ALLcodes = ALLlangs[z].split(":");
				       	if(SL_DETECT==ALLcodes[0]) {cnt=1;DetLangName=ALLcodes[1];break; }
				    }

		                    SL_WRONGLANGUAGEDETECTED=0;
				    if(cnt==0){
				    	setTimeout(function(){
						GEBI("SL_DETECTED").style.visibility="hidden";
				        },500); 
					//SL_DETECT = document.getElementById('SL_langSrc').value;
		                        SL_WRONGLANGUAGEDETECTED=1;
//					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotsupported'));
				    }


// removed by VK 10/25/22
//                		    if(document.getElementById('SL_langSrc').value!=SL_DETECT){
	                		    if(tmp2[0]!="un"){
						GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
					    }
//			            }
			    	} else SL_DETECT="en";
				SL_Flip_Langs(SL_DETECT);
				SET_PROV();
				SET_FIRST_AVAILABLE_PROV();
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
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
      
      for (i=0; i<tempstr.length-1; i++){
          tmp = tmp+tempstr[i]+" ";
      } 
      str=str+tmp;
   }
  } else str = str+" ";
 }
 return str;
}

function startURL(url){ FExtension.browserPopup.openNewTab(url); }

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

function SL_setTEMP(cname, cvalue) {
    localStorage["PLD_"+cname] = cvalue;
}



function SL_getTEMP(cname) {
    var cvalue = localStorage["PLD_"+cname];
    if(cvalue != "") return cvalue;
    else return "";
}

function LOCcontrol(){    
    GEBI("SLlocboxd").src="../../img/util/box.png";
    if(GEBI('SLlocpl').checked == true){
	GEBI("SLlocboxd").src="../../img/util/box-on.png";
    }
    SL_setTEMP("LOC",String(GEBI('SLlocpl').checked));
}


function GoToTranslator(){
	   var s=GEBI("SL_DICTtext").value.replace(/(^[\s]+|[\s]+$)/g, '');
	   var TEXT = SetTextLimit(s,2000);
           FExtension.bg.ImTranslatorBG.DIC_TRIGGER=1;
	   FExtension.store.set("SL_Dtext", encodeURIComponent(TEXT));
	   window.location.href="../../html/popup/TB-translator.html?text="+encodeURIComponent(TEXT)+"&t=1";
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




function SL_VIEW_manu(st){
        if(st==0) GEBI('SL_view_menu').style.display='none';
	else GEBI('SL_view_menu').style.display='block';
}


function SL_DONATE_manu(st){
        if(st==0) GEBI('SL_donate_menu').style.display='none';
	else GEBI('SL_donate_menu').style.display='block';
}

function SL_DONATE_links(st){
	var link = 'https://imtranslator.net'+_CGI+'&a=5';
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


function SET_DICT_PROVIDER(){
  for(var I=0; I<LISTofPR.length; I++){
    if(SL_getTEMP("DPROV") == LISTofPR[I]) GEBI("SL_P"+I).className="SL_TAB_DICT";
    else GEBI("SL_P"+I).className="SL_TAB_OFF_DICT";   
  }
}

function SL_SET_DICT_PRIVIDER(pr){
	SL_setTEMP("DPROV",pr);
	SET_PROV();
	SET_FIRST_AVAILABLE_PROV();
	SL_INIT_DICT();
}


function SET_PROV(){
  ListProviders="";
  for(var I=0; I<LISTofPR.length; I++){
    var from=GEBI("SL_langSrc").value;
    var to = GEBI("SL_langDst").value;

    if(from=="auto" || SL_DETECT!="") from=SL_DETECT;
    if(SL_getTEMP("DPROV") == LISTofPR[I]) GEBI("SL_P"+I).className="SL_TAB_DICT";
    else                    GEBI("SL_P"+I).className="SL_TAB_OFF_DICT";   
    if(from!="auto"){
     if(LISTofPRpairs[I].indexOf(","+from) ==-1 || LISTofPRpairs[I].indexOf(","+to)==-1){
	 GEBI("SL_P"+I).className="SL_TAB_DEACT_DICT";
	 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
     } else ListProviders=ListProviders+LISTofPR[I]+",";
     if(LISTofPR[I]=="Translator"){
      if(LISTofPRpairs[I].indexOf(from + "/" + to)==-1){
	 GEBI("SL_P"+I).className="SL_TAB_DEACT_DICT";
	 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
      } else ListProviders=ListProviders+LISTofPR[I]+",";
     }
    } else {
     if(LISTofPRpairs[I].indexOf(","+from) ==-1 || LISTofPRpairs[I].indexOf(","+to)==-1){
	 GEBI("SL_P"+I).className="SL_TAB_DEACT_DICT";
	 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
     } else ListProviders=ListProviders+LISTofPR[I]+",";
     if(LISTofPR[I]=="Translator"){
      if(LISTofPRpairs[I].indexOf(from + "/" + to)==-1){
	 GEBI("SL_P"+I).className="SL_TAB_DEACT_DICT";
	 ListProviders=ListProviders.replace(LISTofPR[I]+",","");
      } else ListProviders=ListProviders+LISTofPR[I]+",";
     }
    }
  }
  ListProviders=ListProviders.replace("Translator,Translator","Translator");
  
}




function MS(f,t,text){
 if(GEBI("SL_DICTtext").value=="" && window.location.href.indexOf("&text=")==-1 && FExtension.store.get("SL_SaveText_box_gt")==1) GEBI("SL_DICTtext").value=FExtension.store.get("SL_SavedText_gt").substring(0,100).replace(/\^/ig,"%");
 SL_OTHER_PROVIDERS(text,f,t);
}

function SL_OTHER_PROVIDERS(text,f,t){
 if(GEBI("SL_DICTtext").value=="" && window.location.href.indexOf("&text=")==-1 && FExtension.store.get("SL_SaveText_box_gt")==1) GEBI("SL_DICTtext").value=FExtension.store.get("SL_SavedText_gt").substring(0,100).replace(/\^/ig,"%");
 
  var ctrl = "SL_DICTsource";

  var mySourceLang = GEBI("SL_langSrc").value;
  var myTargetLang = GEBI("SL_langDst").value;


  if(text=="")text=GEBI("SL_DICTtext").value;

    if(text!=""){
	PROV = SL_getTEMP("DPROV");
	GEBI('SL_loading').style.display='block';
	if(GEBI('SLlocpl').checked==false || GEBI('SL_langSrc').value=="auto"){
	    if(localStorage["SL_no_detect"]=="true" || GEBI('SL_langSrc').value=="auto" || GEBI('SLlocpl').checked==false){
		//SL_DETECT=GEBI('SL_langSrc').value;  
		//SL_Tabs_Settler()
	    } else {
		SL_DETECT=GEBI('SL_langSrc').value;
	    }	
	 } else SL_DETECT=GEBI('SL_langSrc').value;




	 if(GEBI('SL_langSrc').value!="auto" && GEBI('SLlocpl').checked==true) GEBI('SL_DETECTED').innerText="";


	 if(PROV.toLowerCase()=="" || PROV.toLowerCase() == "undefined" || PROV.toLowerCase() =="null") PROV = "microsoft";

	 if(f=="auto" || SL_DETECT!="") f=SL_DETECT;
	 if(f=="") f=mySourceLang;



 	 if(PROV.toLowerCase()=="microsoft"){
		text=text.replace(/</g,"< ");

				if(f == "zh") f = "zh-CHS";
				if(f == "zt") f = "zh-CHT";
				if(f == "iw") f = "he";
				if(f == "sr") f = "sr-Cyrl";
			        if(f == "srsl") f = "sr-Cyrl";
				if(f == "bs") f = "bs-Latn";
				if(f == "tl") f = "fil";
				if(f == "tlsl") f = "fil";
				if(f == "hmn") f = "mww";
				if(f == "ku") f = "kmr";
				if(f == "ckb") f = "ku";

				if(t == "zh") t = "zh-CHS";
				if(t == "zt") t = "zh-CHT";
				if(t == "iw") t = "he";
				if(t == "sr") t = "sr-Cyrl";
			        if(t == "srsl") t = "sr-Cyrl"
				if(t == "bs") t = "bs-Latn";
				if(t == "tl") t = "fil";
				if(t == "tlsl") t = "fil";
				if(t == "hmn") t = "mww";
				if(t == "ku") t = "kmr";
				if(t == "ckb") t = "ku";
 	 }


	 if(text!=""){

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

                             resp=resp.replace(/\\/g,"");
			     if(PROV.toLowerCase()=="microsoft") {
				resp=resp.replace(/< /g,"<");
				resp=resp.replace(/ >/g,">");
				resp=resp.replace(/\\"/g,"'");
			     }
			     if(PROV.toLowerCase()=="translator") {
				resp=resp.replace(/&lt;/g,"<");
				resp=resp.replace(/&gt;/g,">");
			     }
	  		     //CNTR('2331',f+"/"+t, text.length);

			     resp = PseudoDICT(resp);

                             GEBI(ctrl).innerHTML=resp;
			     GEBI('SL_indicator1').style.display='none';
			     GEBI('SL_loading').style.display='none';

			     GEBI('SL_DICTtext').style.direction="ltr";
			     GEBI('SL_DICTtext').style.textAlign="left";
			     var SL_lng = GEBI('SL_langSrc').value;

			     if(localStorage["SL_no_detect"]=="true" || SL_lng=="auto") SL_lng=SL_DETECT;
			     if(SL_lng=="ar" || SL_lng=="iw" || SL_lng=="fa" || SL_lng=="yi" || SL_lng=="ur" || SL_lng=="ps" || SL_lng=="sd" || SL_lng=="ckb" || SL_lng=="ug" || SL_lng=="dv" || SL_lng=="prs"){
			  	 GEBI('SL_DICTtext').style.direction="rtl";
				 GEBI('SL_DICTtext').style.textAlign="right";
			     }
			     GEBI('SL_DICTsource').style.direction="ltr";
			     GEBI('SL_DICTsource').style.textAlign="left";
			     var SL_lng2 = GEBI('SL_langDst').value;
			     if(SL_lng2=="ar" || SL_lng2=="iw" || SL_lng2=="fa" || SL_lng2=="yi" || SL_lng2=="ur" || SL_lng2=="ps" || SL_lng2=="sd" || SL_lng2=="ckb" || SL_lng2=="ug" || SL_lng2=="dv" || SL_lng2=="prs"){
			  	 GEBI('SL_DICTsource').style.direction="rtl";
				 GEBI('SL_DICTsource').style.textAlign="right";
			     }




			        if (FExtension.store.get("SL_TH_1")==1){
			        	var SLnow = new Date();
			        	SLnow=SLnow.toString();
			        	var TMPtime=SLnow.split(" ");
		        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		        		if(mySourceLang=="auto") mySourceLang=SL_DETECT;

					
					setTimeout(function(){
                                                text=text.replace(/~/ig," ");
                                                resp=resp.replace(/~/ig," ");
				        	FExtension.store.set("SL_History", text + "~~" + resp + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~6~~"+PROV[0]+"^^" + FExtension.store.get("SL_History"));
					},1500);


			        }

			}
		}

		ajaxRequest.open("POST", baseUrl, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send(cgi); 
	      }
	      GEBI('SL_loading').style.display='none';

   } else {
	GEBI("SL_DETECTED").style.display='none';
        GEBI('SL_loading').style.display="none";
   }		
}

function SET_FIRST_AVAILABLE_PROV(){
 if(SL_getTEMP("DIC_FIRSTRUN")!="dicdone"){
  	var theList = ListProviders.split(",");
  	if(localStorage["SL_dict"]=="true"){
	  	var arr1 = localStorage["SL_DICT_PRESENT"].split(",");
	  	for(var I=0; I<(theList.length-1); I++){
		    	for(var J=0; J<arr1.length; J++){
	        		var arr2=arr1[J].split(":");
				if(arr2[1]==1 && theList[I]==arr2[0]){
					SL_setTEMP("DPROV",arr2[0]);
			      		PROV=arr2[0];
			      		GEBI("SL_P"+J).className="SL_TAB_DICT";
					SET_DICT_PROVIDER();
					SL_setTEMP("DIC_FIRSTRUN","dicdone");
					I=1000;J=1000;
				}
		    	}
		}
  	} else {
		if(ListProviders.indexOf(SL_getTEMP("DPROV"))==-1){
		      var theList = ListProviders.split(",");
		      for(var I=0; I<(theList.length-1); I++){
				PROV=theList[I];
			        SL_setTEMP("DPROV",PROV);
			        GEBI("SL_P"+I).className="SL_TAB_DICT";
			        break;
		      }
		}else{
			if(SL_getTEMP("DPROV")!=""){
	   			var theList = ListProviders.split(",");
   				for(var I=0; I<(theList.length-1); I++){
					if(theList[I] == SL_getTEMP("DPROV")){
	      					GEBI("SL_P"+I).className="SL_TAB_DICT";
      						break;
					}
		   		}
			} else {
	   			var theList = ListProviders.split(",");
				var arr = localStorage["SL_ALL_PROVIDERS_GT"].split(",");
			        SL_setTEMP("DPROV",theList[0]);
			        for(var J=0; J<arr.length; J++){
	   				for(var I=0; I<(theList.length-1); I++){
						if(theList[I] == arr[J] && theList[I] == SL_getTEMP("DPROV")){
	      						GEBI("SL_P"+J).className="SL_TAB_DICT";
      							I=1000;J=1000;
							SL_setTEMP("DIC_FIRSTRUN","dicdone");
						}
			   		}
				}
			}
		}
	}
 }else{
	if(ListProviders.indexOf(SL_getTEMP("DPROV"))==-1){
   		var theList = ListProviders.split(",");
   		for(var I=0; I<(theList.length-1); I++){
      			PROV=theList[I];
      			SL_setTEMP("DPROV",PROV);
      			GEBI("SL_P"+I).className="SL_TAB_DICT";
      			break;
   		}
  	}
 }
}


function REMOTE_Voice_Close (){
try{
 if(GEBI("SL_player3")) GEBI("SL_player3").style.display='none';
 synth.cancel();

 var frame = document.getElementById('PL_lbframe');
 if(frame) {
	frame.parentNode.removeChild(frame);
	 SetProperHeight(300);
 }

}catch(ext){}
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

function GOOGLE_TTS_backup(TTSlang){
 try{
	FirstLoop=1;
	synth.cancel();


	var speechText = TheNewText; 



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


			var PLANSHET = GEBI("SL_player3");
		 	PLANSHET.style.display='block';
		 	var PLAYER = "<div id='PL_lbplayer'><table width='350' colspan='3' style='padding:6px;' bgcolor='#fff'><tr><td width=20><div id='SL_controls' class='SL_pause'></div></td><td width=5></td><td align='left' width=20><div id='SL_volume' class='SL_volume'></div></td><td><input type='range' min='0' max='10' value='"+TheVolume+"' class='SL_slider' id='SL_myRange'></td></tr></table></div>";
			PLANSHET.innerHTML=PLAYER;




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

function PseudoDICT(text){
   var TO_ = GEBI('SL_langDst').value;
   var WAY = SL_TTSicn(SL_DETECT,0);
   var WAY2 = SL_TTSicn(TO_,1);
   var OUT="";
   if(SL_TTS.indexOf(TO_)!=-1 || (G_TTS.indexOf(TO_)!=-1 && localStorage["SL_GVoices"]!="0")){
	   if(WAY2==1) var SL_myTTS = "<div id=_X><div id=_XL><div class=_V id=\"SL_00\" lang=\""+TO_+"\" title=\"" + text + "\"></div></div><div id=_XR>" + text + "</div></div>";
	   else var SL_myTTS = "<div id=_X><div id=_FL><div class=TTS"+WAY2+" id=\"SL_00\" lang=\""+TO_+"\" title=\"" + text + "\"></div></div><div style='width:92%;text-align:right;' id=_AR>" + text + "</div></div>";
   OUT = OUT + "<div id=_A style='border:0px;'>" + SL_myTTS + "</div>";
   }else   OUT = OUT + "<div id=_A style='border:0px;'>" + text + "</div>";			
   SL_ALIGNER(TO_);
   return(OUT);
}

function SL_ALIGNER(SL_to){
 var nums=document.getElementsByTagName("div").length;

 if(SL_to!="ar" && SL_to!="iw" && SL_to!="fa" && SL_to!="yi" && SL_to!="ur" && SL_to!="ps" && SL_to!="sd" && SL_to!="ckb" && SL_to!="ug" && SL_to!="dv" && SL_to!="prs"){
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_A")	 document.getElementsByTagName("div")[I].style.textAlign="left";
      }
 } else {
      for(var I = 0; I < nums; I++){
       if(document.getElementsByTagName("div")[I].id == "_A")	document.getElementsByTagName("div")[I].style.textAlign="right";
      }
 }
}

function SAVEtheSTATE(){
// var txt = GEBI('SL_DICTtext').value.replace(/'/ig,'"');
 var txt = GEBI('SL_DICTtext').value;
 var userText = txt.replace(/^\s+/, '').replace(/\s+$/, '');
 if (userText === '') txt = "";
 if(txt != ""){
	 txt = txt.trim();
	 FExtension.store.set("SL_SavedText_gt",txt);
 } else DICTClear();
}

function GET_Y_DICT(){
	GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/</ig,"");
	GEBI('SL_DICTtext').value=GEBI('SL_DICTtext').value.replace(/>/ig,"");

	var text = GEBI('SL_DICTtext').value;
	getYSID(0);
	setTimeout(function(){
	    var YSLIDL = setInterval(function(){
		if(YSIDstatus === true) {
			clearInterval(YSLIDL);
			YSLIDL="";
			var dir = GEBI('SL_langSrc').value+"/"+GEBI('SL_langDst').value;


			getY_TRANSLATION(dir,text);
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
				    msg = PseudoDICT(msg);
				    GEBI("SL_DICTsource").innerHTML=msg;
				    GEBI('SL_loading').style.display='none';
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


function getY_TRANSLATION(dir, text){
        var tmp=dir.split("/");
	var mySourceLang=tmp[0];
	if(SL_DETECT!="") {
		mySourceLang=SL_DETECT;
		dir = dir.replace("auto",SL_DETECT);
		var tmpdir = dir.split("/");
		dir = SL_DETECT+"/"+tmpdir[1];
	}

       	dir = dir.replace("zh-CN","zh");
	dir = dir.replace("jw","jv");
        dir = dir.replace("iw","he");
	dir = dir.replace(/srsl/g,"sr");
        dir = dir.replace(/tlsl/g,"tl");
        dir = dir.replace("/","-");

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

        	    resp=resp.replace(/\\"/ig,"'");
        	    if(resp.indexOf('text":["')!=-1){
	    		var R1 = resp.split('text":["');
		    	var R2 = R1[1].split('"');
	    		var R3 = R2[0];
       		        R3 = R3.replace(/\\n/ig,"\n");
		     	R3 = PseudoDICT(R3);
                        GEBI('SL_DICTsource').innerHTML=R3;

			var theQ = text.split(" ").length;
			if (theQ==1) CNTR('2332',dir.replace("-","/"), text.length);
			else CNTR('2322',dir.replace("-","/"), text.length);


			GEBI('SL_loading').style.display='none';
			     	GEBI('SL_DICTtext').style.direction="ltr";
			     	GEBI('SL_DICTtext').style.textAlign="left";
			     	var SL_lng = GEBI('SL_langSrc').value;

			     	if(localStorage["SL_no_detect"]=="true" || SL_lng=="auto") SL_lng=SL_DETECT;
				if(SL_lng=="ar" || SL_lng=="iw" || SL_lng=="fa" || SL_lng=="yi" || SL_lng=="ur" || SL_lng=="ps" || SL_lng=="sd" || SL_lng=="ckb" || SL_lng=="ug" || SL_lng=="dv" || SL_lng=="prs"){
			  		 GEBI('SL_DICTtext').style.direction="rtl";
					 GEBI('SL_DICTtext').style.textAlign="right";
			     	}
			     	GEBI('SL_DICTsource').style.direction="ltr";
			     	GEBI('SL_DICTsource').style.textAlign="left";
			     	var SL_lng2 = GEBI('SL_langDst').value;
				if(SL_lng2=="ar" || SL_lng2=="iw" || SL_lng2=="fa" || SL_lng2=="yi" || SL_lng2=="ur" || SL_lng2=="ps" || SL_lng2=="sd" || SL_lng2=="ckb" || SL_lng2=="ug" || SL_lng2=="dv" || SL_lng2=="prs"){
			  		 GEBI('SL_DICTsource').style.direction="rtl";
				 	 GEBI('SL_DICTsource').style.textAlign="right";
			     	}


			        if (FExtension.store.get("SL_TH_1")==1){
			        	var SLnow = new Date();
			        	SLnow=SLnow.toString();
			        	var TMPtime=SLnow.split(" ");
		        		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
		        		if(mySourceLang=="auto") mySourceLang=SL_DETECT;

					
					setTimeout(function(){
                                                text=text.replace(/~/ig," ");
                                                resp=resp.replace(/~/ig," ");
                                                PROV = SL_getTEMP("DPROV");
				        	FExtension.store.set("SL_History", text + "~~" + R3 + "~~" + mySourceLang + "|" + myTargetLang + "~~"+ FExtension.store.get("THE_URL") +"~~"+CurDT+"~~6~~"+PROV[0]+"^^" + FExtension.store.get("SL_History"));
					},1500);


			        }


		   } else {
                        YSIDstatus = false;
			FExtension.store.set("SL_YKEY", YSID);
			var H = FExtension.store.get("SL_YHIST");
			FExtension.store.set("SL_YHIST",H+"; Keys are equal -> yandex response: " +resp);
		    	var msg = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOO_MANY_REQUESTS');
			msg = msg.replace("XXX","Yandex");
			SL_alert(msg);
			GEBI("SL_alert").style.height="185px";
			GEBI('SL_indicator'+ind).style.display='none';
		   }
		} else {
		    if(ajaxRequest.status == 403){
			FExtension.store.set("SL_YKEY", 0);
			YSID=0;
			if(YSID!=YSIDold){
				GET_Y_DICT();
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
			    msg = PseudoDICT(msg);
			    GEBI("SL_DICTsource").innerHTML=msg;
			    GEBI('SL_loading').style.display='none';
			}
		    }
		}
	}
	ajaxRequest.open("GET", baseUrl, true);
	ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
	ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
	ajaxRequest.send();
} 



function TTSDODetection(myTransText) {
  if(myTransText=="") myTransText = GEBI("SL_DICTtext").value;
  if(myTransText!=""){


    var cntr = myTransText.split(" ");
    var newTEXT = myTransText;


    var num = Math.floor((Math.random() * SL_GEO.length)); 
    var theRegion = SL_GEO[num];
    if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");

    var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/single';
    var SL_Params="client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(truncStrByWord(newTEXT,100)) + "&sl=auto&tl=en&hl=en";

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
                        var captcha=0;
			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf('ld_result":{"srclangs":["')!=-1) {

                                var GDImTranslator_lang=resp.split('ld_result":{"srclangs":["');
				var GDImTranslator_lang1=GDImTranslator_lang[1].split('"');
 				resp=GDImTranslator_lang1[0];

        	                var thetemp=GEBI("SL_langSrc").value.replace("zh-TW","zt");
                	        thetemp=thetemp.replace("zh-CN","zh");
				SL_DETECT = resp;
				
				// NOT TRUSTED LANGUAGES
				myTransText = myTransText.trim();
				globaltheQ = myTransText.split(" ").length;

	                        if(DO_NOT_TRUST_WORD.indexOf(SL_DETECT)!=-1 && globaltheQ==1){
					SLDetector(myTransText);
					return false;
				}	

	                        if(SL_DETECT==DO_NOT_TRUST_TEXT){
					SLDetector(myTransText);
					return false;
				//----------------------
				} else { 

					var cnt=0;
        		                for (var i=0;i<BASELANGSCodes.length;i++){
						if(resp == BASELANGSCodes[i]){
							cnt=1; 
							SL_DETECT = BASELANGSCodes[i];
			                	        GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+BASELANGSNames[i];
							GEBI("SL_DETECTED").style.display='block';
	
						}
					}
	                	        SL_WRONGLANGUAGEDETECTED=0;

					if(cnt==0){
						//SL_DETECT="zu";
						SL_setTEMP("PROV","Google"); 
                                                GEBI("SL_DETECTED").innerText="";
				    		setTimeout(function(){
							for(var i=0; i<LISTofPR.length; i++){
					 			if(GEBI("SL_P"+i).title.toLowerCase() == "google"){GEBI("SL_P"+i).className="SL_TAB_DICT";}
								else GEBI("SL_P"+i).className="SL_TAB_DEACT_DICT";
							}
							GEBI("SL_DETECTED").style.visibility="hidden";
					        },500); 

			                        SL_WRONGLANGUAGEDETECTED=1;
					}

					SET_PROV();
                                        SET_FIRST_AVAILABLE_PROV();
				}

			} else 	SLDetectPATCH(myTransText);
		}

	}
	baseUrl = baseUrl +"?"+ SL_Params;
	ajaxRequest.open("GET", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//        ajaxRequest.setRequestHeader("Referer", "https://translate.google.com/");
	ajaxRequest.send(SL_Params);         
// } else {
//	SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
 }
                                
}                                 

function TTSSLDetectPATCH(theText){
        TTSSLDetector(theText);
        setTimeout(function() { 
	        var lng = SL_DETECT;
		if(lng!='un'){
			SL_DETECT = lng;
			var templang="";

                        for (var i=0;i<SLDetLngCodes.length;i++){
				if(lng == SLDetLngCodes[i]){ SL_DETECT = lng; DetLangName = SLDetLngNames[i];}
                       	}
			if(DetLangName!="undefined") {
				GEBI("SL_DETECTED").style.display="block";
				GEBI("SL_DETECTED").style.visibility="visible";
			}
			GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected') + " "+DetLangName;
		} else {
			SL_DETECT = "en";
			GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'DetectedEn');
		}
	}, 300);
}


function TTSSLDetector (text){

	if(text=="") text = GEBI("SL_DICTtext").value;
        if(text!=""){
  	var theLIMIT = 100;                            
	var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=pl_d&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
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
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    SL_DETECT="en";
        		            if(tmp2[0].length>0 && tmp2[0].length<7) SL_DETECT=tmp2[0];
        		            if(SL_DETECT == "zh") SL_DETECT="zh-CN";
        		            if(SL_DETECT == "zt") SL_DETECT="zh-TW";
        		            var cnt=0;
				    for (var z=0; z<SLDetLngCodes.length; z++){
				       if(SL_DETECT==SLDetLngCodes[z]) {cnt=1;DetLangName=SLDetLngNames[z];break; }
				    }
		                    SL_WRONGLANGUAGEDETECTED=0;
				    if(cnt==0){
				    	setTimeout(function(){
						GEBI("SL_DETECTED").style.visibility="hidden";
				        },500); 
					//SL_DETECT = document.getElementById('SL_langSrc').value;
		                        SL_WRONGLANGUAGEDETECTED=1;
//					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotsupported'));
				    }

                		    if(document.getElementById('SL_langSrc').value!=SL_DETECT){
	                		    if(tmp2[0]!="un"){
						GEBI("SL_DETECTED").innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetected')+" "+DetLangName;
					    }
			            }
			    	} else SL_DETECT="en";

				SET_PROV();
				SET_FIRST_AVAILABLE_PROV();
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
//		} else {
//			SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extNo_Text'));
		}

}

function ACTIVATE_THEME(st){
 	if(st==1){
		var bg="#191919";
		var clr="#BF7D44";
		var clr_deact="#BDBDBD";
		GEBI("SL_body").style.filter=SL_DARK;
		GEBI("SL_body").style.background=bg;
		GEBI("SL_trans_button").style.filter=SL_DARK;
                GEBI("SL_DETECTED").style.color=clr;
		GEBI("SL_h1").style.color=clr;
		GEBI("SL_h3").style.color=clr;
		GEBI("SL_tab1").style.color=clr;
		GEBI("SL_tab2").style.color=clr;
                if(GEBI("SL_P0")){
			ACTIVATE_THEME_TABS(1);
		}

	    	setTimeout(function(){
			ACTIVATE_THEME_TABS(1);
			var OPT = document.getElementsByTagName("option");
			for(var i=0; i<OPT.length; i++){
				OPT[i].setAttribute("style", "background:"+bg+";color:#fff;");
			}  
	        },1000);
                if(GEBI("SL_CloseAlertBTN")) GEBI("SL_CloseAlertBTN").style.filter=SL_DARK;
	}
}

function ACTIVATE_THEME_TABS(st){
 	if(st==1){
		var clr="#BF7D44";
		var clr_deact="#BDBDBD";

		if(GEBI("SL_P0").className!="SL_TAB_DEACT_DICT") GEBI("SL_P0").style.color=clr;
		else GEBI("SL_P0").style.color=clr_deact;
		if(localStorage["SL_other_gt"]=="1"){   
			if(GEBI("SL_P1").className!="SL_TAB_DEACT_DICT") GEBI("SL_P1").style.color=clr;		
			else GEBI("SL_P1").style.color=clr_deact;
			if(GEBI("SL_P2").className!="SL_TAB_DEACT_DICT") GEBI("SL_P2").style.color=clr;
			else GEBI("SL_P2").style.color=clr_deact;
			if(GEBI("SL_P3").className!="SL_TAB_DEACT_DICT") GEBI("SL_P3").style.color=clr;
			else GEBI("SL_P3").style.color=clr_deact;
		}
	}
}

function ACTIVATE_THEME_PARSER(st){
 	if(st==1){
		var hrefs = document.getElementsByClassName("_ALNK");
		for(var i=0; i<hrefs.length; i++) hrefs[i].setAttribute("style", "filter:invert(100%)");
	}
}

function i18n_LanguageDetect(text){
    	return("");
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
					    var SL_langDst = CURlang[0];
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

function SL_GLOBAL_RESIZER(){        
       	GLOBAL_HEIGHT = window.innerHeight;
	if(GEBI('SL_alert').style.display=="block"){
		var obw = GEBI('SL_alert').clientWidth;
		GEBI('SL_alert').style.marginLeft=(GLOBAL_WIDTH/2-obw/2)+"px";
		var obh = GEBI('SL_alert').clientHeight;
		GEBI('SL_alert').style.marginTop=(GLOBAL_HEIGHT/2-obh/2-50)+"px";
	}
	GEBI("SL_DICTsource").style.height="340px";
}

function SetProperHeight(h){
	var h = window.innerHeight-h+50;
	GEBI("SL_DICTsource").style.minHeight = "20px";
	GEBI("SL_DICTsource").style.height = h+"px";
}
