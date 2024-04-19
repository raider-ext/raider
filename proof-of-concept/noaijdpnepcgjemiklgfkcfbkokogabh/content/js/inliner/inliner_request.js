var STOP_GOOGLE_CAPTCHA_COUNTER = 0;
var STOP_GOOGLE_CAPTCHA_LIMIT = 25;
var TMPtext="";
var DetLang="";
var GL_PR = "G";
var LOCAL_FILES = 0;

function getHttpRequest() {
    var ajaxRequest;
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
                return false;
            }
        }
    }
    return ajaxRequest;
}

function truncStrByWord(str, length) {
    if (str != "undefined") {
        if (str.length > 25) {
            length = length - 25;
            var thestr = str;
            if (str.length > length) {
                str = str.substring(0, length);
                str = str.replace(new RegExp("/(.{1," + length + "})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
                var str2 = thestr.substring(length, (length + 25));
                var tempstr = str2.split(" ");
                var tmp = "";
                for (var i = 0; i < tempstr.length - 1; i++) {
                    tmp = tmp + tempstr[i] + " ";
                }
                str = str + tmp;
            }
        } else {
            str = str + " ";
        }
    }
    return str;
}






function DODetectionLang(myTransText) {
    var AUTO = SL_langSrc;
    if (TranslatorIM.SL_no_detect_it == "true") AUTO = "auto";
    if (AUTO == "auto") {
	if(STOP_GOOGLE_CAPTCHA_COUNTER<=0){
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	 var a=0; // It's a fake. Remove me!!!
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	}else  STOP_GOOGLE_CAPTCHA_COUNTER--;

        if (TranslatorIM.SL_TH_4 == 1 && historySentense != ""){
            historySentense = "";
        }
//		setTimeout(function() {
//        if(STOP_GOOGLE_CAPTCHA_COUNTER==0){
		        translate(myTransText, inlinerInjectDictionary);

//	} else translate(myTransText, inlinerInjectDictionary);
//		}, 0);
    } else {
        DetLang = SL_langSrc;
        if (TranslatorIM.SL_TH_4 == 1 && historySentense != ""){
            historySentense = "";
        }
        translate(myTransText, inlinerInjectDictionary);
    }
}


function injectScript(id, url, param, dictionary, text, langDst) {
 try{
	var ACT_PR_arr = TranslatorIM.SL_ALL_PROVIDERS_IT.split(",");
        var ACT_PR = ACT_PR_arr[0];
        var marker=0;
        if(ACT_PR == "Google") GL_PR = "G";
        if(ACT_PR == "Microsoft") {marker=1; GL_PR = "M";}
        if(ACT_PR == "Yandex") {marker=3; GL_PR = "Y";}

        langDst=TranslatorIM.SL_langDst_it;

//	if(LISTofLANGsets[marker].indexOf(langDst)==-1) ACT_PR="Google";
	if(dictionary==true && SL_langDst!="emj") ACT_PR="Google";


	ACT_PR = LOCAL_FILES_HANDLER(ACT_PR);
	if(ACT_PR=="Google"){
		if(TranslatorIM.SL_FRAME==1){
			var sel = window.getSelection ? window.getSelection() : document.selection;
			injectScriptNOFRAME(id, url, param, dictionary, text, langDst);
		}else{
		  	FExtension.browserInject.runtimeSendMessage({greeting: "IT:>" + id+ ":|:"+ url+ ":|:"+ param+ ":|:"+ dictionary+ ":|:"+ text+ ":|:"+ langDst+ ":|:"+ window.location}, function(response) {}); 
		}
	} 
	if(ACT_PR=="Microsoft"){

	     var resp = TranslatorIM.i18n_LanguageDetect(text);
             if(resp!="") {
			var ln = SL_langDst
			DetLang = resp;
			if(DetLang==ln && SL_langSrc!="auto") ln = SL_langSrc;
	     		if(LISTofLANGsets[marker].indexOf(ln)==-1) {
				SL_OTHER_PROVIDERS(text, ln, 0);
		        }else{
				SL_OTHER_PROVIDERS(text, ln, 1);
			}
	     } else {

		    var text_ = truncStrByWord(text,100);

		    var num = Math.floor((Math.random() * SL_GEO.length)); 
		    var theRegion = SL_GEO[num];


		    var baseUrl ="https://translate.google."+theRegion+"/translate_a/single";
		    var SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q="+encodeURIComponent(text_)+"&sl=auto&tl=en&hl=en";
		    FExtension.browserInject.runtimeSendMessage({greeting: "DET_GOOGLE:>"+baseUrl+","+SL_Params}, function(response) {});
		    var MaxTries = 2;
		    var tr = 0;

		    setTimeout(function(){
			    var SLIDL = setInterval(function(){				  	
			           FExtension.browserInject.extensionSendMessage({greeting: 1}, function(response) {
			             if(response && response.farewell){

				        var theresponse = response.farewell.split("~");
					TranslatorIM.BBL_DETECT=theresponse[51];
					TranslatorIM.SL_langDst_it=theresponse[68];

					if(TranslatorIM.BBL_DETECT!="" && TranslatorIM.BBL_DETECT!="<#>") {
						var resp = TranslatorIM.BBL_DETECT;
						DetLang = TranslatorIM.BBL_DETECT
                                             	FExtension.browserInject.runtimeSendMessage({greeting: "CNTR:>2111,"+resp+"/"+resp+","+text.length}, function(response) {}); 

						TranslatorIM.BBL_DETECT="";
						clearInterval(SLIDL);
					        if(resp!="") {
							if(TranslatorIM.INLINEflip==1){
								if(DetLang==TranslatorIM.SL_langDst_it && SL_langSrc!="auto") ln = SL_langSrc;
								else ln = TranslatorIM.SL_langDst_it;
							} else ln = TranslatorIM.SL_langDst_it;
						}

						if(LISTofLANGsets[marker].indexOf(ln)==-1) SL_OTHER_PROVIDERS(text, ln, 0);
						else SL_OTHER_PROVIDERS(text, ln, 1);
					}
				     }	

				        if (MaxTries <= tr++) {
					   	clearInterval(SLIDL);
					   	SLDetector (encodeURIComponent(text));
					        setTimeout(function(){
						    if(DetLang!="") {
							var ln = SL_langDst

							if(TranslatorIM.INLINEflip==1){
								if(DetLang==TranslatorIM.SL_langDst_it && SL_langSrc!="auto") ln = SL_langSrc;
								else ln = TranslatorIM.SL_langDst_it;
							} else ln = TranslatorIM.SL_langDst_it;
							


							if(LISTofLANGsets[marker].indexOf(ln)==-1) SL_OTHER_PROVIDERS(text, ln, 0);
							else SL_OTHER_PROVIDERS(text, ln, 1);
						    }
				                },1000);
			                 }		                   

		           	   });
			         },150);    //50
	              },150);  //50
                }
	}
	if(ACT_PR=="Yandex"){
		if(TranslatorIM.SL_FRAME==1){
			var sel = window.getSelection ? window.getSelection() : document.selection;
			injectScriptNOFRAME(id, url, param, dictionary, text, langDst);
		}else{
		  	FExtension.browserInject.runtimeSendMessage({greeting: "ITY:>" + id+ ":|:"+ url+ ":|:"+ param+ ":|:"+ dictionary+ ":|:"+ text+ ":|:"+langDst+ ":|:"+ window.location+ ":|:"+ GL_PR}, function(response) {}); 
		}
	} 

 } catch (e){chrome.runtime.lastError}	
}



function injectScriptNOFRAME(id, url, param, dictionary, text, langDst) {
// if(encodeURIComponent(text).length<=1985){
 if(encodeURIComponent(text).length<=1){
    var xhr = getHttpRequest();
    url = url + "?" + param ;
    
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;
            var st = 0;
	    if(dictionary==true){
	     if(result.indexOf('"terms":["')!=-1){
		 dictionary=false;
		 if(result.indexOf('"terms":["')!=-1){
			 var tmp = result.split('"terms":["');
			 var tmp2 = tmp[1].split('],"');
			 result = tmp2[0].replace(/"/ig,"");
			 result = result.replace(/,/ig,", ");
			 st=1;
		 }
		 if(result=="") result=FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
		 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) injectScriptRear(id, dictionary, text, langDst);
	    	 else translateCallBack(result, dictionary, text);
	     }
	    }

	    if(st==0){
	     if(result.indexOf('"sentences":')!=-1){
		 dictionary=false;
		 if(result.indexOf('{"trans":"')!=-1){
                       	var ReadyToUseGoogleText="";
                       	var Gr1=result.split('"trans":"');
			for(var h=1; h<Gr1.length; h++){
                        	var Gr2 = Gr1[h].split('","orig"');
                        	var Gr3 = Gr2[0];
                	        Gr3 = Gr3.replace(/\\"/ig,"'");
	               	        Gr3 = Gr3.replace(/\\u0026/ig,"&");
        	       	        Gr3 = Gr3.replace(/\\u003c/ig,"<");
               		        Gr3 = Gr3.replace(/\\u003e/ig,">");
               		        Gr3 = Gr3.replace(/\\u0027/ig,"'");
				//Gr3 = Gr3.charAt(0).toUpperCase() + Gr3.slice(1);
        	                ReadyToUseGoogleText=ReadyToUseGoogleText+Gr3;
			}
			result = ReadyToUseGoogleText;
		 }
		 if(result=="") result=FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
		 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) injectScriptRear(id, dictionary, text, langDst);
	    	 else translateCallBack(result, dictionary, text);
	      } else SL_OTHER_PROVIDERS(text, langDst,1);
            } 
        }else{
             if(xhr.readyState==4) SL_OTHER_PROVIDERS(text, langDst,1);
	} 
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(param);
  } else {
    if(TranslatorIM.INLINEflip==1){
	    if(SL_langSrc!="auto"){
		    SLDetector (text);
		    setTimeout(function() {
		        var SL_INLid = setInterval(function(){
				if(DetLang!="") {
					var ln = SL_langDst;
					if(DetLang==ln) ln = SL_langSrc;	
					SL_OTHER_PROVIDERS(text, ln, 0);
					clearInterval(SL_INLid);
				}
		        }, 30);
		    }, 30);
	     } else 	SL_OTHER_PROVIDERS(text, langDst, 0);
    } else 	SL_OTHER_PROVIDERS(text, langDst, 0);
  }
}


function SL_OTHER_PROVIDERS(text,ln,st){
	var baseUrl = ImTranslator_theurl+"dotrans.asp";
	if(LOCAL_FILES==1) st=0;
        if(st==0) var cgi = "dir=auto/"+ln+"&provider=google&text="+encodeURIComponent(text);
        else{
		if(ln == "zh") ln = "zh-CHS";
		if(ln == "zt") ln = "zh-CHT";
		if(ln == "iw") ln = "he";
		if(ln == "bs") ln = "bs-Latn";
		if(ln == "sr") ln = "sr-Cyrl";
	        if(ln == "srsl") ln = "sr-Cyrl";
		if(ln == "tl") ln = "fil";
		if(ln == "tlsl") ln = "fil";
		if(ln == "hmn") ln = "mww";
		if(ln == "ku") ln = "kmr";
		if(ln == "ckb") ln = "ku";
		cgi = "dir="+DetLang+"/"+ln+"&provider=microsoft&text="+encodeURIComponent(text);

	}
        
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
				alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
				return false;
			}
		}
	}
	ajaxRequest.onreadystatechange = function(){
	if(ajaxRequest.readyState == 4){
            var result = ajaxRequest.responseText;                                                       
	    if(result.indexOf('>Url Too Long<')!=-1 || result.indexOf('>Request URL Too Long<>')!=-1 || result.indexOf('>Error')!=-1 || result.indexOf('"ArgumentOutOfRangeException')!=-1) result=FExtension.element(TranslatorIM.SL_LOC,"extlim2000").replace("XXX","4000");
	    dictionary=false;
	    if(result=="") result=FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
	    result = result.replace(/\\"/g,"'");
	    translateCallBack(result, dictionary, text);

	}
      }	
     ajaxRequest.open("POST", baseUrl, true);
     ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     ajaxRequest.send(cgi); 
}


function injectScriptRear(id, dictionary, text, langDst) {
    var xhr = getHttpRequest();
    var url = ImTranslator_theurl+"dotrans.asp";
    url = url + "?provider=google&dir=auto/" + langDst +"&text=" + encodeURIComponent(text);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 ) {
            var result = xhr.responseText;
	    if(result.indexOf('<head>')==-1 && result.indexOf('"sentences":')==-1){
		 dictionary=false;
		 if(result.indexOf('","')!=-1){
			 var tmp = result.split('","');
			 result = tmp[0].replace('["','');
		 }
	    }
	    if(result=="") result=FExtension.element(TranslatorIM.SL_LOC,"extnotrsrv");
	    else translateCallBack(result, dictionary, text);
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}


function translate(text, injectDictionary) {
    var escapedText = text.replace(/#/g, "");
//    escapedText = escapedText.replace(/%/g, "");
    var langSrc = "auto";
    var SL_TMPTMP1=FExtension.element(TranslatorIM.SL_LOC,'extLanguages').split(",")
//    var SL_TMPTMP1=ImTranslatorBG.SL_ListOfAvailableLanguages.split(",");
    for (var i = 0; i < SL_TMPTMP1.length; i++) {
        var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
        if (SL_TMPTMP2[0] == DetLang) {
//            langSrc = DetLang;
            break;
        }
    }


    var langDst = SL_langDst;

// By VK ------ Translation goes without the detection engine-------------

    if(langSrc != "auto" && DetLang == langDst){
      langDst = langSrc;
      langSrc = SL_langSrc;
      if(langSrc!="auto"){
	      var tmp = langSrc;
	      langSrc = langDst;
	      langDst = tmp;
      }
    }

// By VK ------ Translation goes without the detection engine-------------

    var baseUrl = "";
    var SL_Params = "";
    var array = text.match(/\b\w+\b/g);

    var arraySplit = text.split(' ');
    //var dictionary = false;
    var a=Math.floor((new Date).getTime()/36E5)^123456;
    var tk = a+"|"+Math.floor((Math.sqrt(5)-1)/2*(a^654321)%1*1048576);


    if (injectDictionary && dictionary){//array && array.length == 1 && arraySplit && arraySplit.length == 1) {
        //escapedText = escapedText.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");

	var num = Math.floor((Math.random() * SL_GEO.length)); 
	var theRegion = SL_GEO[num];

        if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;

        //INLINE DICTIONARY REQUEST
	baseUrl = "https://translate.google."+theRegion+"/translate_a/single";
	SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q=" + encodeURIComponent(dictionaryWord.toLowerCase()) + "&sl=auto&tl=" + langDst + "&hl=en";

        //dictionary = true;
    } else {
	var num = Math.floor((Math.random() * SL_GEO.length)); 
	var theRegion = SL_GEO[num];
        if(TranslatorIM.SL_DOM!="auto") theRegion=TranslatorIM.SL_DOM;
	baseUrl = "https://translate.google."+theRegion+"/translate_a/single";
	SL_Params = "client=gtx&dt=t&dt=bd&dj=1&source=input&q=" + encodeURIComponent(escapedText) + "&sl=auto&tl=" + langDst + "&hl=en";
    }

    injectScript("inlinerScript", baseUrl, SL_Params, dictionary, text, langDst);
}

function translateCallBack(result, dictionary, text) {

    var translation = "";
    //if(result.indexOf('TRANSLATED_TEXT')!=-1){


    if (dictionary) {
        try {
            result = JSON.parse(result);
        } catch (e) {

        }

        if (result.dict) {
            var dict = result.dict;
            if (dict.length > 0 && dict[0].terms) {
                translation = dict[0].terms.join(', ');
            }
        } else {
            translation = result.sentences[0].trans;
        }
    } else {
        translation = get_translation(result);
    }
    //}
    SaveTransToHistory(text,translation);
    translation = " " + translation;
    inlinerInjectHandleMessage({name: "inlinerSelectionResponse", message: translation});

}

function get_translation(result){
 if(result.indexOf('<span id')!=-1){
    if (result.indexOf('<span id=result_box class="long_text">') > -1)   var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="long_text">');
    else var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="short_text">');
    var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
    var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/@/ig, "<br>");
    var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/% 20/ig, " ");
//    ImtranslatorGoogleResult4 = ImtranslatorGoogleResult4.charAt(0).toUpperCase() + ImtranslatorGoogleResult4.slice(1);
    return ImtranslatorGoogleResult4;
 } else return result;
}

function split_sentence(selText) {
    if (selText != "") {
        //By VK handling & sign------------------------------
        var historyText = selText;
        //selText = encodeURIComponent(selText);
        //By VK handling & sign------------------------------

        var baseUrl = 'https://imtranslator.net/split.asp';
        var params = 'text=' + encodeURIComponent(selText);

        var ajaxRequest = getHttpRequest();
        ajaxRequest.onreadystatechange = function () {
            if (ajaxRequest.readyState == 4) {
                var resp = ajaxRequest.responseText;

                //By VK handling Titles---------------------------------------------------------------
                if (resp.indexOf('http') == -1 || resp.indexOf('www') == -1) {
                    resp = resp.replace(/\n+/g, '\n');
                    resp = resp.replace(/\n/g, "<#>");
                    resp = resp.replace(/<#><#>/g, "<#>");
                    resp = resp.replace(/<#> <#>/g, "<#>");
                }
                //By VK handling Titles---------------------------------------------------------------


                var mas = resp.split('<#>');
                var doc = FExtension.browserInject.getDocument(true);
                doc.arraySentence = null;
                if (mas.length > 0) {
                    doc.arraySentence = mas;
                    runinliner();
                }
            }
        }

        ajaxRequest.open("POST", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxRequest.send(params);
    }
}

function SaveTransToHistory(text,historyText) {
        if (TranslatorIM.SL_TH_4 == 1){
	    var mySourceLang = SL_langSrc;
    	    var myTargetLang = SL_langDst;
	    if(TranslatorIM.INLINEflip==0) mySourceLang = "auto";
	    else {
		    if(DetLang==myTargetLang){
			var tmp = myTargetLang;
			myTargetLang = mySourceLang;
			mySourceLang = tmp;
		    }else mySourceLang = DetLang;
	    }


            var SLnow = new Date();
            SLnow = SLnow.toString();
            var TMPtime = SLnow.split(" ");
            var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];

            text=text.replace(/~/ig," ");
            historyText=historyText.replace(/~/ig," ");
            FExtension.browserInject.runtimeSendMessage({greeting: "[i]" + text + "~~" + historyText + "~~" + mySourceLang + "|" + myTargetLang + "~~" + FExtension.browserInject.getDocument().location + "~~" + CurDT + "~~5~~"+GL_PR+"^^"}, function (response) {
                if(response){
                    console.log(response.farewell);
                }
            });
         }
 DetLang="";
}

function SLDetector (text){
  	var theLIMIT = 100;
	var SLDImTranslator_url = ImTranslator_theurl+"ld.asp?tr=itr&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
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
					alert(FExtension.element(TranslatorIM.LOC,"extError1"));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    DetLang="en";
		                    
        		            if(tmp2[0].length>0 && tmp2[0].length<7) DetLang=tmp2[0];
			    	} else DetLang="en";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}

function LOCAL_FILES_HANDLER(ACT_PR){
	//VK ; local files
	var WL = String(window.location).toLowerCase();
	var out=ACT_PR;
	if(WL.indexOf("file:///")!=-1 && (WL.indexOf(".html")>-1 || WL.indexOf(".htm")>-1 || WL.indexOf(".txt")>-1)) {
		LOCAL_FILES=1;
		out="Microsoft";
	}
	return(out);
	//------------
}