var PLATFORM = "Chrome";
var EXPORT_EXT = " SL";
var GLOB_PREF = "SL";
var GLOB_CNTR = 2;


//var PLATFORM = "Opera";
//var EXPORT_EXT = " SLO";
//var GLOB_PREF = "SLO";
//var GLOB_CNTR = 3;



//for GT only
//var PLATFORM = "Opera";
//var EXPORT_EXT = " GT";
//var GLOB_PREF = "SLG";
//var GLOB_CNTR = 4;



var SL_GEO = new Array ("com","es","de","it","fr","rs","pn","ps","sn","so");
var DET = 0;
// 0 - G
// 1 - SL
var _TP = "chr-ImTranslator"
var _FOLDER = "extensions";
var _CGI = "/"+_FOLDER+"/?tp="+_TP;

var reservedHK = "_HK_bb1,_HK_bb2,_HK_btn,_HK_gt1,_HK_gt2,_HK_it1,_HK_it2,_HK_opt,_HK_wpt1,_HK_wpt2,_change_lang_HK_it,_HK_SO_wpt,_HK_CT_wpt";
var SL_TTS = "en,es,ru,de,pt,fr,it,ko,ja,zh-CN,zh-TW,en-gb,fr-CA,lzh,yue,pt-PT";             
var G_TTS = "ar,cs,da,nl,fi,el,hi,hu,no,pl,sk,sv,th,tr,la,bn,id,km,uk,vi";
    G_TTS = G_TTS+","+SL_TTS;

var LISTofPRpairsDefault=",af,ak,am,ar,as,ay,az,ba,be,bg,bho,bm,bn,bo,bs,ca,ceb,ckb,co,cs,cv,cy,da,de,doi,dsb,dv,ee,el,emj,en,en-gb,eo,es,et,eu,fa,fi,fj,fo,fr,fr-CA,fy,ga,gd,gl,gn,gom,gu,ha,haw,hi,hmn,hr,hsb,ht,hu,hy,id,ig,ikt,ilo,is,it,iu,iu-Latn,iw,ja,jw,ka,kazlat,kk,km,kn,ko,kri,ku,ky,la,lb,lg,ln,lo,lt,lug,lus,lv,lzh,mai,mg,mhr,mi,mk,ml,mn,mni-Mtei,mn-Mong,mr,mrj,ms,mt,my,ne,nl,no,nso,ny,nya,om,or,otq,pa,pap,pl,prs,ps,pt,pt-PT,qu,ro,ru,run,rw,sa,sah,sd,si,sk,sl,sm,sn,so,sq,sr,sr-Latn,srsl,st,su,sv,sw,ta,te,tg,th,ti,tk,tl,tlh-Latn,tlsl,tn,to,tr,ts,tt,ty,udm,ug,uk,ur,uz,uzbcyr,vi,xh,yi,yo,yua,yue,zh-CN,zh-TW,zu";
var LISTofPR = new Array ("Google","Microsoft","Translator","Yandex");
var LISTofLANGsets = new Array (",af,ak,am,ar,as,ay,az,be,bg,bho,bm,bn,bs,ca,ceb,ckb,co,cs,cy,da,de,doi,dv,ee,el,en,eo,es,et,eu,fa,fi,fr,fy,ga,gd,gl,gn,gom,gu,ha,haw,hi,hmn,hr,ht,hu,hy,id,ig,ilo,is,it,iw,ja,jw,ka,kk,km,kn,ko,kri,ku,ky,la,lb,lg,ln,lo,lt,lus,lv,mai,mg,mi,mk,ml,mn,mni-Mtei,mr,ms,mt,my,ne,nl,no,nso,ny,om,or,pa,pl,ps,pt,qu,ro,ru,rw,sa,sd,si,sk,sl,sm,sn,so,sq,sr,srsl,st,su,sv,sw,ta,te,tg,th,ti,tk,tl,tlsl,tr,ts,tt,ug,uk,ur,uz,vi,xh,yi,yo,zh-CN,zh-TW,zu",",af,am,ar,as,az,ba,bg,bn,bo,bs,ca,ckb,cs,cy,da,de,dsb,dv,el,en,en-gb,es,et,eu,fa,fi,fj,fo,fr,fr-CA,ga,gl,gom,gu,ha,hi,hmn,hr,hsb,ht,hu,hy,id,ig,ikt,is,it,iu,iu-Latn,iw,ja,ka,kk,km,kn,ko,ku,ky,ln,lo,lt,lug,lv,lzh,mai,mg,mi,mk,ml,mn,mn-Mong,mr,ms,mt,my,ne,nl,no,nso,nya,or,otq,pa,pl,prs,ps,pt,pt-PT,ro,ru,run,rw,sd,si,sk,sl,sm,sn,so,sq,sr,sr-Latn,srsl,st,sv,sw,ta,te,th,ti,tk,tl,tlh-Latn,tlsl,tn,to,tr,tt,ty,ug,uk,ur,uz,vi,xh,yo,yua,yue,zh-CN,zh-TW,zu","en/fr,en/de,en/pt,en/ru,en/es,fr/en,fr/ru,fr/es,de/en,de/ru,pt/en,ru/en,ru/fr,ru/de,ru/es,es/en,es/fr,es/ru",",af,am,ar,az,ba,be,bg,bn,bs,ca,ceb,cs,cv,cy,da,de,el,emj,en,eo,es,et,eu,fa,fi,fr,ga,gd,gl,gu,hi,hr,ht,hu,hy,id,is,it,iw,ja,jv,ka,kazlat,kk,km,kn,ko,ky,la,lb,lo,lt,lv,mg,mhr,mi,mk,ml,mn,mr,mrj,ms,mt,my,ne,nl,no,pa,pap,pl,pt,ro,ru,sah,si,sk,sl,sq,sr,sr-Latn,srsl,su,sv,sw,ta,te,tg,th,tl,tlsl,tr,tt,udm,uk,ur,uz,uzbcyr,vi,xh,yi,zh-CN,zu");
                                








                                  
var LISTofPRpairs = new Array ();

var PACK_PARAMS = new Array();

for (var SL_I = 0 ; SL_I < LISTofPR.length; SL_I++){
    switch(LISTofPR[SL_I]){
	case "Google": LISTofPRpairs[SL_I]=LISTofLANGsets[0];break;
	case "Microsoft": LISTofPRpairs[SL_I]=LISTofLANGsets[1];break;
	case "Translator": LISTofPRpairs[SL_I]=LISTofLANGsets[2];break;
	case "Yandex": LISTofPRpairs[SL_I]=LISTofLANGsets[3];break;
    }	
}

var DO_NOT_TRUST_WORD = "be,bg,mk,sr,kk,mn,tg";
var DO_NOT_TRUST_TEXT = "zh";

var ImTranslator_theurl = "https://imtranslator.net/";

var FExtension = {
	config: {
		debugIsEnabled: true
	},

	extend: function(parentPrototype, child) {
		function CloneInternal(){};
		CloneInternal.prototype = parentPrototype;
		child.prototype.constructor = child;
		return new CloneInternal();
	},

	AddHtmlToObj: function(obj,tag,htm){
	      var container = GEBI(obj);
		while (container.firstChild) {
		  container.removeChild(container.firstChild);
		}
	      var eUL = document.createElement(tag);
	      var st = document.createAttribute("src");
	      st.value = htm;
	      eUL.setAttributeNode(st);
      	container.appendChild(eUL); 
	},

	element: function(loc,msg){
                return SL_SETCHROMELOC(msg,loc);
	}

       		
};

FExtension.alert_debug = function(msg) {
//	if (FExtension.config.debugIsEnabled)
//		window.alert(msg);
};


function SL_SETCHROMELOC(name,CLloc){

    if(chrome.i18n.getUILanguage()){
	 var BRloc=chrome.i18n.getUILanguage();
	 name=name.replace("ext","_");
	 if(BRloc==CLloc){
	  var BRloc=BRloc.substr(0,2);
	  return chrome.i18n.getMessage(BRloc+name);
	 } else { 
		return chrome.i18n.getMessage(CLloc+name);
	 }	
    }
}


function SL_isLinux() {
        var OSName = false;
	if (navigator.appVersion.indexOf("X11")!=-1) OSName=true;
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName=true;
	return OSName;
}

EXTENSION_DEFAULTS();

function EXTENSION_DEFAULTS(){
	try{
	    var SL_PR_ALL = "Google,Microsoft,Translator,Yandex";
	    var SL_PR_KEYS = "Google:1,Microsoft:0,Translator:0,Yandex:0";
	    var SL_PR_IT = "Google,Microsoft,Yandex";



	        var BRlanguage = "en";
		var BRloc=chrome.i18n.getUILanguage().substr(0,2);
		if(BRloc!=""){
		   var Arr = LISTofPRpairsDefault.split(",")
		   for(var I=0; I<Arr.length; I++){
	        	var lng = Arr[I].replace("zh-TW","zh");
		        lng = lng.replace("zh-CN","zh");
		   	if(BRloc==lng){
			  BRlanguage=lng;
			  break;
			}
		   }
		}



            var SL_BR_LN=BRlanguage;
            var manifestData = chrome.app.getDetails();
	    PACK_PARAMS[0] = "SL_session;0";
            if(manifestData.version) PACK_PARAMS[1] = "SL_Version;"+ manifestData.version;
	    //ADV
	    PACK_PARAMS[2] = "ADV;0";
	    PACK_PARAMS[3] = "FRUN;0";
            PACK_PARAMS[4] = "ran_before;0";
 	    //------------------------------- History ------------------------------------
	    PACK_PARAMS[5] = "SL_History;";
	    PACK_PARAMS[6] = "SL_TH_1;0";
	    PACK_PARAMS[7] = "SL_TH_2;0";
	    PACK_PARAMS[8] = "SL_TH_3;0";
	    PACK_PARAMS[9] = "SL_TH_4;0";
            //------------------------------- option gt ----------------------------------
	    PACK_PARAMS[10] = "SL_global_lng;true";
	    PACK_PARAMS[11] = "SL_Fontsize;17px";
	    PACK_PARAMS[12] = "SL_langSrc;auto";
	    PACK_PARAMS[13] = "SL_langDst;"+ SL_BR_LN;
	    PACK_PARAMS[14] = "SL_no_detect;true";
	    PACK_PARAMS[15] = "SL_other_gt;1";
	    PACK_PARAMS[16] = "SL_dict;true";
	    PACK_PARAMS[17] = "SL_show_back;false";
	    PACK_PARAMS[18] = "SL_show_back2;false";
	    PACK_PARAMS[19] = "SL_HKset;3|90|true";
	    PACK_PARAMS[20] = "SL_HKset_inv;3|90|true";
	    PACK_PARAMS[21] = "SL_langDst_name;Spanish";
	    //??
	    PACK_PARAMS[22] = "SL_Flag;FALSE";
            //------------------------------- option bbl ---------------------------------
	    PACK_PARAMS[23] = "SL_ENABLE;true";
	    PACK_PARAMS[24] = "SL_show_button_bbl;true";
	    PACK_PARAMS[25] = "SL_global_lng_bbl;true";
	    PACK_PARAMS[26] = "SL_Fontsize_bbl;14px";
	    PACK_PARAMS[27] = "SL_langSrc_bbl;auto";
	    PACK_PARAMS[28] = "SL_langDst_bbl;"+ SL_BR_LN;
	    PACK_PARAMS[29] = "SL_no_detect_bbl;true";
	    PACK_PARAMS[30] = "SL_other_bbl;1";
	    PACK_PARAMS[31] = "SL_dict_bbl;true";
	    PACK_PARAMS[32] = "SL_translation_mos_bbl;true";
	    PACK_PARAMS[33] = "SL_pin_bbl;false";

	    PACK_PARAMS[34] = "SL_langDst_name_bbl;Spanish";
	    PACK_PARAMS[35] = "SL_DBL_bbl;false";
	    PACK_PARAMS[36] = "SL_Timing;3";
	    PACK_PARAMS[37] = "SL_Delay;0";

            //------------------------------- option it ----------------------------------
	    PACK_PARAMS[38] = "SL_langSrc_it;auto";
	    PACK_PARAMS[39] = "SL_langDst_it;"+ SL_BR_LN;
	    PACK_PARAMS[40] = "SL_global_lng_it;true";
	    PACK_PARAMS[41] = "SL_style;239e23";
	    PACK_PARAMS[42] = "SL_inject_brackets;true";
	    PACK_PARAMS[43] = "SL_inject_before;false";
	    PACK_PARAMS[44] = "SL_line_break;false";
	    PACK_PARAMS[45] = "SL_whole_word;true";
	    PACK_PARAMS[46] = "SL_hide_translation;false";
	    PACK_PARAMS[47] = "SL_dictionary;true";
	    PACK_PARAMS[48] = "SL_no_detect_it;true";
	    PACK_PARAMS[49] = "SL_other_it;1";
	    PACK_PARAMS[50] = "SL_langDst_name_it;Spanish";
	    PACK_PARAMS[51] = "SL_FK_box1;true";
	    PACK_PARAMS[52] = "SL_FK_box2;true";

            //------------------------------- option wpt ---------------------------------
	    PACK_PARAMS[53] = "SL_global_lng_wpt;true";
	    PACK_PARAMS[54] = "SL_langSrc_wpt;auto";
	    PACK_PARAMS[55] = "SL_langDst_wpt;" + SL_BR_LN;
	    PACK_PARAMS[56] = "SL_other_wpt;1";
	    PACK_PARAMS[57] = "SL_langDst_name_wpt;Spanish";

	    //-----------------------HK for All Translators-------------------------------
	    PACK_PARAMS[58] = "SL_HK_gt1;Ctrl + Alt + Z";
	    PACK_PARAMS[59] = "SL_HK_gt2;Alt + Z";


	    if(SL_isLinux()==true) PACK_PARAMS[60] = "SL_HK_it1;Ctrl + Alt + C";
	    else PACK_PARAMS[60] = "SL_HK_it1;Alt + C";

	    if(SL_isLinux()==true) PACK_PARAMS[61] = "SL_HK_it2;Ctrl + Alt + X";
	    else PACK_PARAMS[61] = "SL_HK_it2;Alt + X";

	    if(SL_isLinux()==true) PACK_PARAMS[62] = "SL_HK_bb1;Ctrl + Alt";
	    else PACK_PARAMS[62] = "SL_HK_bb1;Alt";

	    PACK_PARAMS[63] = "SL_HK_bb2;Escape";
	    PACK_PARAMS[64] = "SL_HK_bb2box;true";
	    PACK_PARAMS[65] = "SL_HK_wptbox1;true";

	    if(SL_isLinux()==true) PACK_PARAMS[66] = "SL_HK_wpt1;Ctrl + Alt + P";
	    else PACK_PARAMS[66] = "SL_HK_wpt1;Alt + P";

	    PACK_PARAMS[67] = "SL_HK_wptbox2;true";

	    if(SL_isLinux()==true) PACK_PARAMS[68] = "SL_HK_wpt2;Ctrl + Alt + M";
	    else PACK_PARAMS[68] = "SL_HK_wpt2;Alt + M";

	    PACK_PARAMS[69] = "SL_HK_optbox;true";
	    PACK_PARAMS[70] = "SL_HK_opt;Ctrl + Alt + O";
	    PACK_PARAMS[71] = "SL_HK_btnbox;true";

	    if(SL_isLinux()==true) PACK_PARAMS[72] = "SL_HK_btn;Ctrl + Alt + A";
	    else PACK_PARAMS[72] = "SL_HK_btn;Ctrl + Alt + A";

            //--------------------NEW PARAMS PROVIDERs---------------------------------------
	    PACK_PARAMS[73] = "SL_pr_gt;1";
	    PACK_PARAMS[74] = "SL_pr_bbl;1";

	    //??
	    PACK_PARAMS[75] = "SL_Dtext;";

            //********************SET OF THE ADVANCES****************************
	    PACK_PARAMS[76] = "SL_GVoices;1";
	    PACK_PARAMS[77] = "SL_SLVoices;0";
            //********************SET OF THE ADVANCES****************************

	    PACK_PARAMS[78] = "SL_SaveText_box_gt;1";
	    PACK_PARAMS[79] = "SL_SavedText_gt;";
	    PACK_PARAMS[80] = "SL_SaveText_box_bbl;0";
	    PACK_PARAMS[81] = "SL_LNG_LIST;all";
	    PACK_PARAMS[82] = "SL_BACK_VIEW;2";
	    PACK_PARAMS[83] = "SL_BACK_VIEW;1";
	    PACK_PARAMS[84] = "SL_PrefTrans;1";
	    PACK_PARAMS[85] = "SL_CM1;1";
	    PACK_PARAMS[86] = "SL_CM2;1";
	    PACK_PARAMS[87] = "SL_CM3;1";
	    PACK_PARAMS[88] = "SL_CM4;1";
	    PACK_PARAMS[89] = "SL_CM5;1";
	    PACK_PARAMS[90] = "SL_CM6;1";
	    PACK_PARAMS[91] = "SL_CM7;1";
	    PACK_PARAMS[92] = "SL_DOM;auto";
	    PACK_PARAMS[93] = "SL_wptDHist;";
	    PACK_PARAMS[94] = "SL_wptLHist;";
	    PACK_PARAMS[95] = "SL_wptGlobAuto;0";
	    PACK_PARAMS[96] = "SL_wptGlobTb;1";	
	    PACK_PARAMS[97] = "SL_wptGlobTip;1";	
	    PACK_PARAMS[98] = "SL_wptGlobLang;"+ SL_BR_LN;

	    PACK_PARAMS[99] = "SL_ALL_PROVIDERS_GT;"+ SL_PR_ALL;
	    PACK_PARAMS[100] = "SL_ALL_PROVIDERS_BBL;"+ SL_PR_ALL;
	    PACK_PARAMS[101] = "SL_DICT_PRESENT;"+ SL_PR_KEYS;

	    PACK_PARAMS[102] = "SL_ALL_PROVIDERS_IT;"+ SL_PR_IT;
	    PACK_PARAMS[103] = "SL_BTN_X;0";
	    PACK_PARAMS[104] = "SL_BTN_Y;0";
	    PACK_PARAMS[105] = "SL_BBL_X;0";
	    PACK_PARAMS[106] = "SL_BBL_Y;0";

	    //FORSE BUBBLE
	    PACK_PARAMS[107] = "FORSEbubble;0";

	    //FORMER BBL CS
	    PACK_PARAMS[108] = "TTSvolume;10";
	    PACK_PARAMS[109] = "BL_D_PROV;Google";
	    PACK_PARAMS[110] = "BL_T_PROV;Google";

	    //INLINE FLIP
	    PACK_PARAMS[111] = "INLINEflip;0";

	    //THEME MODE
	    PACK_PARAMS[112] = "THEMEmode;0";

	    //FORMER PLANSHET DIC CS
	    PACK_PARAMS[113] = "PLD_TTSvolume;10";
	    PACK_PARAMS[114] = "PLD_DPROV;Google";
	    PACK_PARAMS[115] = "PLD_OLD_TS;0";
	    PACK_PARAMS[116] = "PLD_DIC_FIRSTRUN;dicdone";

	    //FORMER PLANSHET TRANSLATOR CS
	    PACK_PARAMS[117] = "PLT_TTSvolume;10";
	    PACK_PARAMS[118] = "PLT_PROV;Google";
	    PACK_PARAMS[119] = "PLT_OLD_TS_TR;0";
	    PACK_PARAMS[120] = "PLT_TR_FIRSTRUN;done";

	    //FORMER OPTIONS CS
	    PACK_PARAMS[121] = "SL_anchor;0";
	    PACK_PARAMS[122] = "SL_sort;0";

	    PACK_PARAMS[123] = "AVOIDAUTODETECT;0";
	    PACK_PARAMS[124] = "AVOIDAUTODETECT_LNG;en";

	    PACK_PARAMS[125] = "THE_URL;";
	    PACK_PARAMS[126] = "SL_Import_Report;";
	    PACK_PARAMS[127] = "SL_GWPTHist;";
	    PACK_PARAMS[128] = "SL_BBL_TS;0";
	    PACK_PARAMS[129] = "SL_langSrc2;0";
	    PACK_PARAMS[130] = "SL_langDst2;0";

	    //BBL SESSION RESET 
	    PACK_PARAMS[131] = "SL_langSrc_bbl2;auto";
	    PACK_PARAMS[132] = "SL_langDst_bbl2;"+ SL_BR_LN;
	    PACK_PARAMS[133] = "SL_show_button_bbl2;true";
	    PACK_PARAMS[134] = "SL_Fontsize_bbl2;14px";
	    PACK_PARAMS[135] = "SL_bbl_loc_langs;false";

	    //IT CHANGE LANG  
	    PACK_PARAMS[136] = "SL_change_lang_HKbox_it;true";
	    PACK_PARAMS[137] = "SL_change_lang_HK_it;Alt + S";
	    PACK_PARAMS[138] = "SL_langDst_it2;"+ SL_BR_LN;
	    PACK_PARAMS[139] = "SL_TS;"+ Date.now();

	    //-----------------------LOCALIZATION-------------------------------
	    PACK_PARAMS[140] = "SL_LOCALIZATION;"+ SL_BR_LN;

	    PACK_PARAMS[141] = "SL_YKEY;0";
	    PACK_PARAMS[142] = "SL_YHIST;";

	    PACK_PARAMS[143] = "MoveBBLX;0";
	    PACK_PARAMS[144] = "MoveBBLY;0";

	    PACK_PARAMS[145] = "SL_HK_SObox_wpt;true";
	    PACK_PARAMS[146] = "SL_HK_SO_wpt;Alt + W";

	    PACK_PARAMS[147] = "SL_HK_CTbox_wpt;true";
	    PACK_PARAMS[148] = "SL_HK_CT_wpt;Escape";
	    PACK_PARAMS[149] = "SL_WPT_TEMP_LANG;"+ SL_BR_LN;
	    PACK_PARAMS[150] = "SL_FAV_START;10";
	    PACK_PARAMS[151] = "SL_FAV_MAX;3";
	    PACK_PARAMS[152] = "SL_FAV_LANGS_BBL;"+SL_BR_LN;
	    PACK_PARAMS[153] = "SL_FAV_LANGS_IT;"+SL_BR_LN;
	    PACK_PARAMS[154] = "SL_FAV_LANGS_WPT;"+SL_BR_LN;
	    PACK_PARAMS[155] = "SL_FAV_LANGS_IMT;"+SL_BR_LN;
	    PACK_PARAMS[156] = "SL_FAV_TRIGGER;0";
	    PACK_PARAMS[157] = "WPTflip;0";
	    PACK_PARAMS[158] = "SL_UNTRUST;"+DO_NOT_TRUST_WORD+":"+DO_NOT_TRUST_TEXT;
	    PACK_PARAMS[159] = "WINDOW_TOP;"+(( screen.height - winHeight ) / 2);
	    PACK_PARAMS[160] = "WINDOW_LEFT;"+(( screen.width - winWidth ) / 2 );
	    PACK_PARAMS[161] = "WINDOW_WIDTH;480";
	    PACK_PARAMS[162] = "WINDOW_HEIGHT;650";



	} catch(ex){}
}