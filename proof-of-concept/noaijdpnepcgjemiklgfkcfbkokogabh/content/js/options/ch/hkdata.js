'use strict';
var SL_KSET = new Array(27,"Esc",16,"Shift",17,"Ctrl",18,"Alt",48,"0",49,"1",50,"2",51,"3",52,"4",53,"5",54,"6",55,"7",56,"8",57,"9",81,"Q",87,"W",69,"E",82,"R",84,"T",89,"Y",85,"U",73,"I",79,"O",80,"P",65,"A",83,"S",68,"D",70,"F",71,"G",72,"H",74,"J",75,"K",76,"L",90,"Z",88,"X",67,"C",86,"V",66,"B",78,"N",77,"M");
var SL_KSET_taken = new Array("Alt + D","Alt + E","Alt + F","Alt + Shift + A","Alt + Shift + I","Alt + Shift + T","Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + D","Ctrl + E","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + K","Ctrl + L","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + R","Ctrl + S","Ctrl + Shift + B","Ctrl + Shift + D","Ctrl + Shift + G","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + N","Ctrl + Shift + O","Ctrl + Shift + R","Ctrl + Shift + T","Ctrl + T","Ctrl + U","Ctrl + W");
var SL_KEYCOUNT = { length: 0 };
var SL_KEYSTRING = "";
var SL_TEMPKEYSTRING = "";
var SL_ACTIVE="";
var SL_TMP="";

navigator.saysWho = (() => {
  const { userAgent } = navigator
  let match = userAgent.match(/(opera|chrome|yabrowser|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  let temp
  if (match[1] === 'Chrome') {
    temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
    if (temp !== null) return "Opera";
    temp = userAgent.match(/\bYaBrowser\/(\d+)/)
    if (temp !== null) return "Yandex";
    temp = userAgent.match(/\b(Edg)\/(\d+)/)
    if (temp !== null) return "Edge";
  }
  return match[1];
})()

var BR = navigator.saysWho;
switch(BR){
	case "Chrome": SL_KSET_taken = new Array("Alt + D","Alt + E","Alt + F","Alt + Shift + A","Alt + Shift + I","Alt + Shift + T","Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + D","Ctrl + E","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + K","Ctrl + L","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + R","Ctrl + S","Ctrl + Shift + B","Ctrl + Shift + D","Ctrl + Shift + G","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + N","Ctrl + Shift + O","Ctrl + Shift + R","Ctrl + Shift + T","Ctrl + T","Ctrl + U","Ctrl + W");  break;
	case "Opera": SL_KSET_taken = new Array("Alt + P","Ctrl + 0","Ctrl + A","Ctrl + C","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + L","Ctrl + M","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + R","Ctrl + S","Ctrl + Shift + E","Ctrl + Shift + G","Ctrl + Shift + N","Ctrl + Shift + T","Ctrl + Shift + X","Ctrl + Shift + Z","Ctrl + T","Ctrl + U","Ctrl + V","Ctrl + W","Ctrl + X","Ctrl + Z");  break;
	case "Firefox": SL_KSET_taken = new Array("Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + A","Ctrl + Alt + G","Ctrl + Alt + P","Ctrl + B","Ctrl + C","Ctrl + D","Ctrl + E","Ctrl + F","Ctrl + H","Ctrl + I","Ctrl + J","Ctrl + K","Ctrl + M","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + S","Ctrl + Shift + A","Ctrl + Shift + B","Ctrl + Shift + C","Ctrl + Shift + D","Ctrl + Shift + E","Ctrl + Shift + G","Ctrl + Shift + H","Ctrl + Shift + I","Ctrl + Shift + J","Ctrl + Shift + K","Ctrl + Shift + M","Ctrl + Shift + N","Ctrl + Shift + O","Ctrl + Shift + P","Ctrl + Shift + Q","Ctrl + Shift + R","Ctrl + Shift + S","Ctrl + Shift + T","Ctrl + Shift + V","Ctrl + Shift + W","Ctrl + Shift + Z","Ctrl + T","Ctrl + U","Ctrl + V","Ctrl + W","Ctrl + X","Ctrl + Y","Ctrl + Z","H","J","K","N","P","R","S","Shift + R");  break;
	case "Edge": SL_KSET_taken = new Array("Alt","Alt + D","Alt + E","Alt + F","Alt + Shift + B","Alt + Shift + I","Alt + Shift + T","Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + D","Ctrl + E","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + K","Ctrl + L","Ctrl + M","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + R","Ctrl + S","Ctrl + Shift + B","Ctrl + Shift + D","Ctrl + Shift + E","Ctrl + Shift + G","Ctrl + Shift + I","Ctrl + Shift + K","Ctrl + Shift + L","Ctrl + Shift + M","Ctrl + Shift + N","Ctrl + Shift + O","Ctrl + Shift + P","Ctrl + Shift + R","Ctrl + Shift + T","Ctrl + Shift + U","Ctrl + Shift + V","Ctrl + Shift + W","Ctrl + Shift + Y","Ctrl + T","Ctrl + U","Ctrl + W");  break;
	case "Yandex": SL_KSET_taken = new Array("Alt + 1","Alt + 2","Alt + 3","Alt + 4","Alt + 5","Alt + 6","Alt + 7","Alt + 8","Alt + 9","Alt + B","Alt + D","Alt + E","Alt + F","Alt + Shift + 1","Alt + Shift + 2","Alt + Shift + 3","Alt + Shift + 4","Alt + Shift + 5","Alt + Shift + 6","Alt + Shift + 7","Alt + Shift + 8","Alt + Shift + 9","Alt + Shift + B","Alt + Shift + T","Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + A","Ctrl + C","Ctrl + D","Ctrl + E","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + K","Ctrl + L","Ctrl + N","Ctrl + O","Ctrl + P","Ctrl + R","Ctrl + S","Ctrl + Shift + B","Ctrl + Shift + C","Ctrl + Shift + D","Ctrl + Shift + E","Ctrl + Shift + G","Ctrl + Shift + I","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + N","Ctrl + Shift + O","Ctrl + Shift + Q","Ctrl + Shift + R","Ctrl + Shift + T","Ctrl + Shift + W","Ctrl + T","Ctrl + U","Ctrl + V","Ctrl + W","Ctrl + X","Ctrl + Z");  break;
	default: SL_KSET_taken = new Array(); break;
}	

(function(e){
	window.addEventListener("keydown",function(e){
	    if(e.target.id.indexOf("SRV")!=-1){
	        var ob = SL_ACTIVE;
	          if(ob){
		    	if(!SL_KEYCOUNT[e.keyCode] && SL_KEYCOUNT.length<3)   {
        			SL_KEYCOUNT[e.keyCode] = true;
		        	SL_KEYCOUNT.length++;
                                var key=GET_KEY(e.keyCode);
				SL_KEYSTRING=SL_KEYSTRING+key+":|";
        	        	if(SL_KEYSTRING!="") SL_TEMPKEYSTRING=SL_KEYSTRING;
			}
		  }
		setTimeout(function() {HK_CATCHER(SL_TEMPKEYSTRING,":|",ob);DO_VERIFY(ob); }, 15);
	    }	
	},!1);

	window.addEventListener("keyup",function(e){
	    if(e.target.id.indexOf("SRV")!=-1){
	        var ob = SL_ACTIVE;
		SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";
	    }	
	},!1);



})();

function FINISHING(ob){
 if(ob && ob.value!=""){
  var NewLine="";
  var ctrl="";
  var alt="";
  var shift="";
  var esc="";
  var tmp = ob.value.split(" + ");
  for (var i=0; i<tmp.length; i++){
    if(tmp[i] == "Ctrl") ctrl=tmp[i];
    if(tmp[i] == "Alt") alt=tmp[i];
    if(tmp[i] == "Shift") shift=tmp[i];
    if(tmp[i] == "Esc") esc=tmp[i];
  }
  if(ctrl!="") NewLine = NewLine + ctrl + " + ";
  if(alt!="") NewLine = NewLine + alt + " + ";
  if(shift!="") NewLine = NewLine + shift + " + ";
  if(esc!="") NewLine = NewLine + esc + " + ";
  for (i=0; i<tmp.length; i++){
    if(tmp[i] != "Ctrl" && tmp[i] != "Alt" && tmp[i] != "Shift" && tmp[i] != "Esc") NewLine = NewLine + tmp[i] + " + ";
  }
  tmp = NewLine.split(" + ");
  NewLine="";
  for (var i=0; i<tmp.length-1; i++){
    if(i<tmp.length-2) NewLine = NewLine + tmp[i] + " + ";
    else NewLine = NewLine + tmp[i];
  }
 ob.value=NewLine;
 }

}

function HK_CATCHER(str,pat,ob){
 if(str!=""){
  var error=ob.id.replace("SRV","");
  GEBI("MSG"+error).style.visibility="hidden";
  str = str.replace(":|:|:|",":|");
  str = str.replace(":|:|",":|");
  var LINE = str.split(pat); 
  var newLINE="";
  var CNT = LINE.length;
  if(pat==":|") {
	LINE.length-1;
        if(str==":|"){	
		GEBI("MSG"+error).style.visibility="visible";
		GEBI("MSG"+error).innerText="Use: Ctrl, Alt, Shift, A-Z, 0-9 keys";
       }
  }	
  for (var i = 0; i < LINE.length-1; i++) {
    if(LINE[i]!=""){
      if(i<(LINE.length-2)) newLINE=newLINE + LINE[i] + " + ";
      else newLINE=newLINE + LINE[i];
    }
  }
  ob.value=newLINE;
  ob.style.color="#000";
  save_options(0);
 }
}

function GET_KEY(key){
 var out="";
 for(var i = 0; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}

function GET_CODE(key){
 var out="";
 for(var i = 1; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}

function SL_HK_SPLIT(ob, st){
  var tmp = GEBI(ob).value.split(" + ");
  var hks1="";
  var hks2="";
  for(var i=0; i<tmp.length; i++){
     if(tmp[i].length>1) hks1=hks1+tmp[i]+" + ";
     else hks2=hks2+tmp[i]+" + ";
  }
  hks1=hks1.substring(0,hks1.length-3);
  hks2=hks2.substring(0,hks2.length-3);
  if(st==1) return(hks1);
  else return(hks2);
}

function VERIFY_TAKEN(ob){
  for(var i=0; i<SL_KSET_taken.length; i++){
     if(ob.value == SL_KSET_taken[i]){
	var errorKey=ob.value;
	ob.style.background="#FFDFD7";
        var txt = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extResByChrome')
        if(PLATFORM=="Opera") txt=txt.replace("Chrome","Opera");
	var obMSG = ob.id.replace("SRV","MSG")
	GEBI(obMSG).innerText="'"+ob.value.replace(/\s/g,"")+"' " + txt;
        ob.value="";
	SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";
	var error=ob.id.replace("SRV","");
	GEBI("MSG"+error).style.visibility="visible";
	GEBI("MSG"+error).innerText="'" + errorKey + "' " + txt;
        setTimeout(function() {ob.style.background="#FFF";}, 1850);
     }
  }
}


function DO_VERIFY(ob){
  FINISHING(ob); 
  VERIFY_TAKEN(ob);
}

function SL_del(ob){
 GEBI('SRV'+ob).style.color="#ccc";
 save_options();
}

function NoneColor(st){
 if(GEBI("SRV"+st).value==""){
	GEBI("SRV"+st).style.color='#000';
	GEBI("SRV"+st).readOnly = true;
 } else GEBI("SRV"+st).style.color='#000';

}

function SL_HIDE_HK(ob,st){
  if(GEBI(ob).checked!=true) GEBI(st).style.display="block";
  else GEBI(st).style.display="none"; 
}

function SL_MSG_HANDLER(e){
 SL_MSG_RESTORE();
 var ob = e.target.id;
 if(ob && e.target.className == "SRV"){
	 GEBI(ob).readOnly = false;
	 GEBI(ob).placeholder = "Type a shorcut";
	 GEBI(ob).value="";
	 ob=ob.replace("SRV","");
	 save_options();
 }
}

function SL_MSG_RESTORE(){
 var msgs = document.getElementsByClassName("SLMSG");
 if(msgs.length>0){
	for(var i=0; i<msgs.length; i++) msgs[i].innerText="";
 }
 var readonly = document.getElementsByClassName("SRV");
 if(readonly.length>0){
	for(var j=0; j<readonly.length; j++){
		readonly[j].readOnly = true;
		if(readonly[j].value == "") readonly[j].placeholder = "Not set"; 
	}
 }
}

function PREVENT_PASTE(e){
	var ob = e.target.id; GEBI(ob).readOnly = true;  GEBI(ob).placeholder = "Type a shorcut";  GEBI(ob).value="";
}