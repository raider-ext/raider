try{
FExtension.store = {
    SL_BR_LN: "en",
    SL_PR_ALL: "Google,Microsoft,Translator,Yandex",
    SL_PR_KEYS: "Google:1,Microsoft:0,Translator:0,Yandex:0",
    SL_PR_IT: "Google,Microsoft,Yandex",
    profile_Folder: "ImTranslator",
    cl_Profile_Name: "profile.imt",
    global_pref_data: {},
    domStorageManager: null,
    domStorageUri: null,
    ioService: null,
    scriptSecManager: null,
    scriptSecPrincipal: null,
    localStorage: (FExtension.browser.isLocalStoragePreset()) ? localStorage : null,
    cachedSbDomainName: (FExtension.browser.isLocalStoragePreset()) ? "imtranslator.net" : null,
    initialized: FExtension.browser.isLocalStoragePreset(),
    getLocalStorage: function() {
        if (FExtension.browser.isLocalStoragePreset() || FExtension.store.initialized){
            return FExtension.store.localStorage;
	}	
    },

    SL_CUR_LANG: function(){
		var BRloc=chrome.i18n.getUILanguage().substr(0,2);
		if(BRloc!=""){
		   var BRlanguage="en"
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
	 return(BRlanguage);	
    },


    loadNewParams : function(){
        FExtension.store.setDefault();
    },

    set : function(key, value){              // Storing key function
        var obj = false;
        if (typeof(value) == 'object'){
            value = JSON.stringify(value);
            obj = true;
        }
        FExtension.store.getLocalStorage().setItem(key, obj ? 'obj_'+value : value+'');
    },
    get : function(key){                  // Retrieving key function
        //var val = localStorage[key];
        var val = null;
        val = FExtension.store.getLocalStorage().getItem(key);

        if (val && val.indexOf('obj_') == 0){
            val = val.slice(4,val.length);
            val = JSON.parse(val);
        }
        return val;
    },
    clearKey : function(key,removing){
        if (removing) {
            FExtension.store.getLocalStorage().removeItem(key);
            return;
        }
        if (FExtension.store.getLocalStorage()) { //localStorage){
            FExtension.store.getLocalStorage().setItem(FExtension.config.keyPrefix + key, '');
        }
    },

    setDefault: function(){
	for(var i=0; i<PACK_PARAMS.length; i++){
		var tmp = PACK_PARAMS[i].split(";");
		var curDBname = tmp[0];
		var curDBparam = tmp[1];
		var DBparam = FExtension.store.get(curDBname);
	        if(DBparam == null || DBparam == ""){
			//EXCEPTIONS
			if(curDBname == "SL_change_lang_HK_it"){
				FExtension.store.set(curDBname, curDBparam);
				FExtension.store.set("SL_change_lang_HKbox_it", "true");
			}
			//NONE validator
			if(curDBname != "SL_HK_gt1" && curDBname != "SL_HK_it1" && curDBname != "SL_HK_bb1"){
				FExtension.store.set(curDBname, curDBparam);
			}
			//EXCEPTIONS
		}
                if(curDBname == "SL_LOCALIZATION"){
			if(DBparam == null) ImTranslatorBG.LOC_TABLE();
		}

                if(curDBname.indexOf("SL_ALL_PROVIDERS_")!=-1){
			var pr = FExtension.store.get(curDBname);
			pr = pr.replace(/,undefined/g,"");
			pr = pr.replace(/undefined,/g,"");
			FExtension.store.set(curDBname, pr);
		}


		if(curDBname != "SL_HK_SO_wpt" && FExtension.store.get(curDBname) == "Alt + W"){
			FExtension.store.set(curDBname, FExtension.store.GetFromDefault(curDBname));
		}

		if(curDBname == "SL_HK_CT_wpt"){
			FExtension.store.set(curDBname, FExtension.store.GetFromDefault(curDBname));
		}


	}
	FExtension.store.NONE_validator();
	FExtension.store.DETECT_CONFLICTS_LAST_STAGE(GLOB_PREF);
    },



    VerifyHKs: function(NAME, PARAM){
	for(var i=0; i<PACK_PARAMS.length; i++){
		var tmp = PACK_PARAMS[i].split(";");
		var curDBname = tmp[0];
		var curDBparam = tmp[1];
		if(curDBname != NAME && FExtension.store.get(curDBname) == PARAM){
			FExtension.store.set(curDBname, FExtension.store.GetFromDefault(curDBname));
		}
	}
    },




    GetFromDefault: function(name){
	for(var i=0; i<PACK_PARAMS.length; i++){
		var tmp = PACK_PARAMS[i].split(";");
		var curDBname = tmp[0];
		var curDBparam = tmp[1];
		var DBparam = FExtension.store.get(curDBname);
	        if(curDBname == name) return curDBparam;
  	}
    },

    DETECT_CONFLICTS_LAST_STAGE: function(PREF){
	var HKnames = reservedHK.split(",");
	var NEWarrayHK = new Array();
	for(var i=0; i < HKnames.length; i++){
		NEWarrayHK[i] = FExtension.store.get(PREF+HKnames[i]);
	}
	NEWarrayHK.forEach(function (value, index, arr){
        	let first_index = arr.indexOf(value);
	        let last_index = arr.lastIndexOf(value);
        	if(first_index !== last_index){
        	    if(value!="") {
			var defPar = FExtension.store.GetFromDefault(PREF+HKnames[index]);
			FExtension.store.set(PREF+HKnames[index], defPar);
		    }
        	}
	});
    },


    NONE_validator: function(){
        var out = 0;
	if(FExtension.store.get("SL_HK_gt1")==null || FExtension.store.get("SL_HK_gt1")=="") out++;
	if(FExtension.store.get("SL_HK_it1")==null || FExtension.store.get("SL_HK_it1")=="") out++;
	if(FExtension.store.get("SL_HK_bb1")==null || FExtension.store.get("SL_HK_bb1")=="") out++;
	if(out>1){
		var gt1 = PACK_PARAMS[58].split(";")
		FExtension.store.set("SL_HK_gt1",gt1[1]);
		var it1 = PACK_PARAMS[60].split(";")
		FExtension.store.set("SL_HK_it1",it1[1]);
		var bb1 = PACK_PARAMS[62].split(";")
		FExtension.store.set("SL_HK_bb1",bb1[1]);
	}
    },

    getUPDATES:  function(){
	    var LIST_PR_BBL = FExtension.store.SL_PR_ALL;
	    if(FExtension.store.get("SL_ALL_PROVIDERS_BBL")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_BBL", LIST_PR_BBL);
	    } else {
	            var BBL = FExtension.store.VerifyProviders(FExtension.store.get("SL_ALL_PROVIDERS_BBL"), LIST_PR_BBL);
		    if(BBL == "") BBL = LIST_PR_BBL; 
		    FExtension.store.set("SL_ALL_PROVIDERS_BBL", BBL);
	    }

	    var LIST_PR_GT = FExtension.store.SL_PR_ALL;
	    if(FExtension.store.get("SL_ALL_PROVIDERS_GT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_GT", LIST_PR_GT);
	    } else {
	            var GT = FExtension.store.VerifyProviders(FExtension.store.get("SL_ALL_PROVIDERS_GT"),LIST_PR_GT);
		    if(GT == "") GT = LIST_PR_GT; 
		    FExtension.store.set("SL_ALL_PROVIDERS_GT", GT);
	    }

	    var LIST_PR_IT = FExtension.store.SL_PR_IT;
	    if(FExtension.store.get("SL_ALL_PROVIDERS_IT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_IT", LIST_PR_IT);
	    } else {
	            var IT = FExtension.store.VerifyProviders(FExtension.store.get("SL_ALL_PROVIDERS_IT"),LIST_PR_IT);
		    if(IT == "") IT = LIST_PR_IT; 
		    FExtension.store.set("SL_ALL_PROVIDERS_IT", IT);
	    }
	    // NEW PARAMS related to the current version (UPGARDE ONLY)
	        var parNAME = "MoveBBLX"
	        var par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,0);

	        parNAME = "MoveBBLY"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,0);

	        parNAME = "SL_HK_SObox_wpt"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,true);

	        parNAME = "SL_HK_CTbox_wpt"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,true);

	        parNAME = "SL_HK_SO_wpt";
	        var parHK = "Alt + W";
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,parHK);
		FExtension.store.VerifyHKs(parNAME,parHK);

		FExtension.store.set("SL_HK_CT_wpt","Escape");


	        parNAME = "SL_FAV_START"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,10);

	        parNAME = "SL_FAV_MAX"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,3);

	        parNAME = "SL_FAV_LANGS_BBL"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,FExtension.store.SL_BR_LN);

	        parNAME = "SL_FAV_LANGS_IT"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,FExtension.store.SL_BR_LN);

	        parNAME = "SL_FAV_LANGS_WPT"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,FExtension.store.SL_BR_LN);

	        parNAME = "SL_FAV_LANGS_IMT"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,FExtension.store.SL_BR_LN);

	        parNAME = "SL_FAV_TRIGGER"
	        par = FExtension.store.get(parNAME);
		if(par == "" || par == "undefined" || par == null) FExtension.store.set(parNAME,0);

	    // NEW PARAMS 


    },
    save_LOC4CONTEXT: function(){
          var tmp = FExtension.element(FExtension.store.get('SL_LOCALIZATION'),'extLanguages').split(",")
	  var bbl = FExtension.store.get("SL_langDst_bbl");
	  var it = FExtension.store.get("SL_langDst_it");
	  var wpt = FExtension.store.get("SL_langDst_wpt");
	  var gt = FExtension.store.get("SL_langDst");
	  var tmp2;
	  for (var i=0; i<tmp.length; i++){
	      tmp2 = tmp[i].split(":");
	      if(tmp2[0]==bbl) FExtension.store.set("SL_langDst_name_bbl", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==it) FExtension.store.set("SL_langDst_name_it", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==wpt) FExtension.store.set("SL_langDst_name_wpt", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==gt) FExtension.store.set("SL_langDst_name", encodeURIComponent(tmp2[1]));
	  }
    },

    SL_isMacintosh: function() {
	  return navigator.platform.indexOf('Mac') > -1;
    },                                                                     

    SL_isLinux: function() {
        var OSName = false;
	if (navigator.appVersion.indexOf("X11")!=-1) OSName=true;
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName=true;
	return OSName;
    },

    VerifyProviders_: function(oldLIST,newLIST) {
	var out = "";
	var oldST = oldLIST.split(",");
	var newST = newLIST.split(",");
 	if(oldST.length>newST.length){
		for(var i=0; i<oldST.length;i++){
			for(var j=0; j<newST.length;j++){
				if(oldST[i]==newST[j]) out=out+oldST[i]+",";
			}
		}	
		out = out.substring(0,out.length-1);
	} else 	out = newLIST;
	return out;
    },

    VerifyProviders: function(oldLIST,newLIST) {
	var out = "";
	var oldST = oldLIST.split(",");
	var newST = newLIST.split(",");
 	if(oldST.length>=newST.length){
		for(var i=0; i<oldST.length;i++){
			for(var j=0; j<newST.length;j++){
				if(oldST[i]==newST[j]) out=out+oldST[i]+",";
			}
		}	
		out = out.substring(0,out.length-1);
	} else {
		for(var i=0; i<oldST.length;i++){
		        if(newLIST.indexOf(oldST[i])!=-1) newLIST = newLIST.replace(oldST[i],"");
		}	
		newLIST = newLIST.replace(/,/g," ");
		newLIST = newLIST.replace(/\s\s+/g, '');
		out = oldLIST +","+ newLIST;
	}
	return out;
    }


};

}catch(ex){
//	FExtension.alert_debug(ex);
}