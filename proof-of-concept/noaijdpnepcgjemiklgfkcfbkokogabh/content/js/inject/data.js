ImTranslatorDataEvent = {
	init: function(){
		ImTranslatorDataEvent.mousedown();
		(function(){
	            var doc = FExtension.browserInject.getDocument();
		    doc.addEventListener('keydown', ImTranslatorDataEvent.mousedown,!1);
		})();
		(function(){
	            var doc = FExtension.browserInject.getDocument();
		    doc.addEventListener('mouseup', ImTranslatorDataEvent.mousedown,!1);
		})();
	},

	mousedown: function(){
             FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
             if(response && response.farewell){
//console.log(response.farewell)
                var theresponse = response.farewell.split("~");
                var theresponse1 = theresponse[1].split("|")
                var theresponse2 = theresponse[2].split("|");
                TranslatorIM.SL_MSG=response.farewell;
                TranslatorIM.SL_langSrc=theresponse2[0];
                TranslatorIM.SL_langDst=theresponse2[1];
                TranslatorIM.SL_FontSize=theresponse2[2];
                TranslatorIM.SL_OnOff_BTN=theresponse2[3];
                TranslatorIM.SL_OnOff_PIN=theresponse2[4];
                TranslatorIM.SL_OnOff_HK=theresponse2[5];
                TranslatorIM.SL_HK=theresponse2[6];
                TranslatorIM.SL_NODETECT_bbl=theresponse2[7];
// removed                TranslatorIM.SL_TS=theresponse2[8];
                TranslatorIM.SL_ENABLE=theresponse2[9];
                TranslatorIM.SL_TH_2=theresponse2[10];
                TranslatorIM.SL_TH_4=theresponse2[11];
                TranslatorIM.SL_FK=theresponse2[12];
                TranslatorIM.SL_no_detect_it=theresponse2[13];
                TranslatorIM.SL_dict_bbl=theresponse2[14];
                TranslatorIM.SL_HK2=theresponse2[15];
                TranslatorIM.SL_FK_inv=theresponse2[16];
		TranslatorIM.SL_FK_box1=theresponse2[17];
		TranslatorIM.SL_inlinerFK1=theresponse2[18];
		TranslatorIM.SL_inliner=theresponse2[19];
		TranslatorIM.SL_FK_box2=theresponse2[20];
		TranslatorIM.SL_inlinerFK2=theresponse2[21];
		TranslatorIM.SL_clean=theresponse2[22];
		var tmp = theresponse[4].split("|");
		TranslatorIM.SL_DBL = tmp[3];

		//NEW HOT KEYS------------------------
		TranslatorIM.SL_HK_gt1=theresponse[5];
		TranslatorIM.SL_HK_gt2=theresponse[6];
		TranslatorIM.SL_HK_it1=theresponse[7];
		TranslatorIM.SL_HK_it2=theresponse[8];
		TranslatorIM.SL_HK_bb1=theresponse[9];
		TranslatorIM.SL_HK_bb2=theresponse[44];
		//BLANK GT INVOKER
		TranslatorIM.SL_GT_INV=theresponse1[2];
		//BBL OTHER TRANSLATORS
		TranslatorIM.SL_SHOW_PROVIDERS=theresponse[10];		
		TranslatorIM.Timing = Math.abs(theresponse[11]);		

		TranslatorIM.SL_FONT=theresponse[12];
		TranslatorIM.BBL_TS=theresponse[13];
		//HOT KEYS WPT and OPT
		TranslatorIM.SL_WPT1=theresponse[14];
		TranslatorIM.SL_WPT2=theresponse[15];
		TranslatorIM.SL_OPT=theresponse[16];
		TranslatorIM.SL_WPTbox1=theresponse[17];
		TranslatorIM.SL_WPTbox2=theresponse[18];
		TranslatorIM.SL_OPTbox=theresponse[19];
		TranslatorIM.SL_WPTdstlang=theresponse[20];
		TranslatorIM.SL_WPTsrclang=theresponse[21];
		TranslatorIM.SL_LOC=theresponse[22];
// removed		TranslatorIM.SL_TS_LOC=theresponse[23];
		TranslatorIM.SL_TRIGGER=theresponse[24];
		//ADVANCED
		TranslatorIM.SL_GVoices=theresponse[25];
		TranslatorIM.SL_SLVoices=theresponse[26];
		TranslatorIM.SL_ALLvoices=theresponse[27];
		//ADVANCED
		TranslatorIM.SL_SAVETEXT=theresponse[28];
		TranslatorIM.SL_LNG_CUSTOM_LIST=theresponse[29];
		TranslatorIM.SL_DOM=theresponse[30];
		TranslatorIM.SL_WPTHosts=theresponse[31];
		TranslatorIM.SL_GWPT_Show_Hide=theresponse[34];
		TranslatorIM.SL_GWPT_Show_Hide_tmp=theresponse[35];

		TranslatorIM.SL_wptDHist=theresponse[36];
		TranslatorIM.SL_wptLHist=theresponse[37];
		TranslatorIM.SL_wptGlobAuto=theresponse[38];
		TranslatorIM.SL_wptGlobTb=theresponse[39];

		TranslatorIM.SL_wptGlobTip=theresponse[40];
		TranslatorIM.SL_wptGlobLang=theresponse[41];
		TranslatorIM.SL_ALL_PROVIDERS_BBL=theresponse[42];
		TranslatorIM.SL_DICT_PRESENT=theresponse[43];
		TranslatorIM.SL_BBL_CLOSER=theresponse[45];

//Button Offset: X / Y
		TranslatorIM.GlobalCorrectionX=parseInt(theresponse[46]);
		TranslatorIM.GlobalCorrectionY=parseInt(theresponse[47]);
//Button Offset: X / Y

//BBL Custom reposition: X / Y
		TranslatorIM.GlobalBoxX=parseInt(theresponse[48]);
		TranslatorIM.GlobalBoxY=parseInt(theresponse[49]);
		if(TranslatorIM.GlobalBoxX<0)TranslatorIM.GlobalBoxX=0;
		if(TranslatorIM.GlobalBoxY<0)TranslatorIM.GlobalBoxY=0;
		if(TranslatorIM.GlobalBoxX>0 && TranslatorIM.GlobalBoxY>0){
			TranslatorIM.SL_NEST_FLOAT=1;
			TranslatorIM.SL_NEST="FLOAT";
		}
//BBL Custom reposition: X / Y
		TranslatorIM.SL_BBL_COORD_TRIGER = Math.ceil(TranslatorIM.GlobalBoxX + TranslatorIM.GlobalBoxY);

		TranslatorIM.FORSEbubble=parseInt(theresponse[50]);
		TranslatorIM.BBL_DETECT=theresponse[51];

		//by VK - BUBLE RESULT from BG
		TranslatorIM.BBL_RESULT=theresponse[52].replace(/\^/ig,"~");
                TranslatorIM.BBL_RESULT=TranslatorIM.BBL_RESULT.replace(/\\u0027/g,"'");
		TranslatorIM.TTSvolume=theresponse[53];
		TranslatorIM.BL_D_PROV=theresponse[54];
		TranslatorIM.BL_T_PROV=theresponse[55];
		TranslatorIM.INLINEflip=theresponse[56];
		TranslatorIM.SL_ALL_PROVIDERS_IT=theresponse[57];

		TranslatorIM.THEMEmode=theresponse[58];
		TranslatorIM.Delay=theresponse[59];

		//BBL SESSION PARAMS
		TranslatorIM.SL_langSrc_bbl2=theresponse[60];
		TranslatorIM.SL_langDst_bbl2=theresponse[61];
		TranslatorIM.SL_OnOff_BTN2=theresponse[62];
		TranslatorIM.SL_Fontsize_bbl2=theresponse[63];
//removed		TranslatorIM.SL_session_reset=theresponse[64];

	        	TranslatorIM.SL_langSrc=TranslatorIM.SL_langSrc_bbl2;
		        TranslatorIM.SL_langDst=TranslatorIM.SL_langDst_bbl2;
			if(TranslatorIM.SL_Fontsize_bbl2 != undefined)	TranslatorIM.SL_Fontsize_bbl=TranslatorIM.SL_Fontsize_bbl2;
			else TranslatorIM.SL_Fontsize_bbl=TranslatorIM.SL_Fontsize_bbl;
			TranslatorIM.SL_bbl_loc_langs=theresponse[65];
			if(TranslatorIM.SL_bbl_loc_langs=="true") TranslatorIM.SL_TMPbox="true";
			else TranslatorIM.SL_TMPbox="false";
			TranslatorIM.SL_OnOff_BTN = TranslatorIM.SL_OnOff_BTN2;


		//IT CHANGE LANG

		TranslatorIM.SL_change_lang_HKbox_it=theresponse[66];
		TranslatorIM.SL_change_lang_HK_it=theresponse[67];
		TranslatorIM.SL_langDst_it=theresponse[68];
		TranslatorIM.SL_pin_bbl2=theresponse[69];
		TranslatorIM.TTS_status=theresponse[70];

//BBL BOX Offset: X / Y
		TranslatorIM.MoveBBLX=parseInt(theresponse[71]);
		TranslatorIM.MoveBBLY=parseInt(theresponse[72]);
//BBL BOX Offset: X / Y

		TranslatorIM.SOWPTbox=theresponse[73];
		TranslatorIM.SOWPT=theresponse[74];
		TranslatorIM.CTWPTbox=theresponse[75];
		TranslatorIM.CTWPT=theresponse[76];

		TranslatorIM.SL_WPT_TEMP_LANG=theresponse[77];

		TranslatorIM.SL_setLNG_TMP("SL_G_WPT_TO",TranslatorIM.SL_WPT_TEMP_LANG);
                                             
		TranslatorIM.SL_FAV_START=theresponse[78];
		TranslatorIM.SL_FAV_MAX=theresponse[79];
		TranslatorIM.SL_FAV_LANGS_BBL=theresponse[80];
		TranslatorIM.SL_FAV_LANGS_IT=theresponse[81];
		TranslatorIM.SL_FAV_LANGS_WPT=theresponse[82];
		TranslatorIM.WPTflip=theresponse[83];

		TranslatorIM.SL_UNTRUST=theresponse[84];
		if(TranslatorIM.SL_UNTRUST.indexOf(":") !=-1){
			var tmp = TranslatorIM.SL_UNTRUST.split(":");
	                TranslatorIM.SL_UNTRUST_WORD=tmp[0];
	                TranslatorIM.SL_UNTRUST_TEXT=tmp[1];
		}
             }
         });
       }
}


if(FExtension.browser.isLocalStoragePreset()){
	ImTranslatorDataEvent.init();
}else{
	var appcontent = window.document.getElementById("appcontent");
	appcontent.addEventListener("DOMContentLoaded", function(){
		ImTranslatorDataEvent.init();
	}, false);
}