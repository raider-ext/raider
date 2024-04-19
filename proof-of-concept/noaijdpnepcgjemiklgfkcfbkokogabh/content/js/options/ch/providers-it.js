(function( name, factory ) {
   
   if( typeof window === "object" ) {
      
      // add to window 
      window[ name ] = factory();
      
      // add jquery plugin, if available  
      if( typeof jQuery === "object" ) {
         jQuery.fn[ name ] = function( options ) {
            return this.each( function() {
               new window[ name ]( this, options );
            });
         };
      }
   }
    
})( "Sortable", function() {
   
   var _w = window,
       _b = document.body,
       _d = document.documentElement;
   
   // get position of mouse/touch in relation to viewport 
   var getPoint = function( e )
   {
      var scrollX = Math.max( 0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0 ) - ( _d.clientLeft || 0 ), 
          scrollY = Math.max( 0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0 ) - ( _d.clientTop || 0 ), 
          pointX  = e ? ( Math.max( 0, e.pageX || e.clientX || 0 ) - scrollX ) : 0,
          pointY  = e ? ( Math.max( 0, e.pageY || e.clientY || 0 ) - scrollY ) : 0; 
      
      return { x: pointX, y: pointY }; 
   }; 
   
   // class constructor
   var Factory = function( container, options )
   {
      if( container && container instanceof Element )
      {
         this._container = container; 
         this._options   = options || {}; /* nothing atm */
         this._clickItem = null;
         this._dragItem  = null;
         this._hovItem   = null;
         this._sortLists = [];
         this._click     = {};
         this._dragging  = false;
         
         this._container.setAttribute( "data-is-sortable", 1 );
         this._container.style["position"] = "static";
         
         window.addEventListener( "mousedown", this._onPress.bind( this ), true );
         window.addEventListener( "touchstart", this._onPress.bind( this ), true );
         window.addEventListener( "mouseup", this._onRelease.bind( this ), true ); 
         window.addEventListener( "touchend", this._onRelease.bind( this ), true ); 
         window.addEventListener( "mousemove", this._onMove.bind( this ), true );
         window.addEventListener( "touchmove", this._onMove.bind( this ), true );
      }
   };
   
   // class prototype
   Factory.prototype = {
      constructor: Factory,
      
      // serialize order into array list 
      toArray: function( attr )
      {
         attr = attr || "id";
         
         var data = [], 
             item = null, 
             uniq = ""; 
         
         for( var i = 0; i < this._container.children.length; ++i )
         {
            item = this._container.children[ i ], 
            uniq = item.getAttribute( attr ) || "";
            uniq = uniq.replace( /[^0-9]+/gi, "" );
            data.push( uniq );
         }
         return data;
      }, 
      
      // serialize order array into a string 
      toString: function( attr, delimiter )
      {
         delimiter = delimiter || ":"; 
         return this.toArray( attr ).join( delimiter );
      }, 
      
      // checks if mouse x/y is on top of an item 
      _isOnTop: function( item, x, y )
      {
         var box = item.getBoundingClientRect(),
             isx = ( x > box.left && x < ( box.left + box.width ) ), 
             isy = ( y > box.top && y < ( box.top + box.height ) ); 
         return ( isx && isy );
      },
      
      // manipulate the className of an item (for browsers that lack classList support)
      _itemClass: function( item, task, cls )
      {
         var list  = item.className.split( /\s+/ ), 
             index = list.indexOf( cls );
         
         if( task === "add" && index == -1 )
         { 
            list.push( cls ); 
            item.className = list.join( " " ); 
         }
         else if( task === "remove" && index != -1 )
         {
            list.splice( index, 1 ); 
            item.className = list.join( " " ); 
         }
      }, 
      
      // swap position of two item in sortable list container 
      _swapItems: function( item1, item2 )
      {
         var parent1 = item1.parentNode, 
             parent2 = item2.parentNode;
         
         if( parent1 !== parent2 ) 
         {
            // move to new list 
            parent2.insertBefore( item1, item2 );
         }
         else { 
            // sort is same list 
            var temp = document.createElement( "div" ); 
            parent1.insertBefore( temp, item1 );
            parent2.insertBefore( item1, item2 );
            parent1.insertBefore( item2, temp );
            parent1.removeChild( temp );
         }
      },
      
      // update item position 
      _moveItem: function( item, x, y )
      {
         item.style["-webkit-transform"] = "translateX( "+ x +"px ) translateY( "+ y +"px )";
         item.style["-moz-transform"] = "translateX( "+ x +"px ) translateY( "+ y +"px )";
         item.style["-ms-transform"] = "translateX( "+ x +"px ) translateY( "+ y +"px )";
         item.style["transform"] = "translateX( "+ x +"px ) translateY( "+ y +"px )";
      },
      
      // make a temp fake item for dragging and add to container 
      _makeDragItem: function( item )
      {
         this._trashDragItem(); 
         this._sortLists = document.querySelectorAll( "[data-is-sortable]" );
         
         this._clickItem = item; 
         this._itemClass( this._clickItem, "add", "active" ); 

         this._dragItem = document.createElement( item.tagName );
         this._dragItem.className = "dragging"; 
         this._dragItem.innerHTML = item.innerHTML; 
         this._dragItem.style["opacity"] = "1";
         this._dragItem.style["background"] = "#fff";
         this._dragItem.style["position"] = "absolute";
         this._dragItem.style["z-index"] = "999";
         this._dragItem.style["left"] = (( item.offsetLeft || 0 )-12) + "px";
         this._dragItem.style["top"] = (( item.offsetTop || 0 )-8) + "px";
         this._dragItem.style["width"] = ( item.offsetWidth || 0 ) + "px";
         this._dragItem.style["height"] = "20px";
         this._dragItem.style["fontSize"] = "14px";
//	 var abg = localStorage["M_CONST_BG"].split(",");
	 var theID=item.id.replace("item-","");
//         this._dragItem.style["border"] = "1px " + abg[theID] + " solid";
         //GEBI(item.id).style.opacity=0.2;
         this._dragItem.style["boxShadow"] = "0 0 10px rgba(0,0,0,0.4)";

         
         this._container.appendChild( this._dragItem ); 
      }, 
      
      // remove drag item that was added to container 
      _trashDragItem: function()
      {
         if( this._dragItem && this._clickItem )
         {
            this._itemClass( this._clickItem, "remove", "active" ); 
            this._clickItem = null; 
            
            this._container.removeChild( this._dragItem ); 
            this._dragItem = null; 
         }
      }, 
      
      // on item press/drag 
      _onPress: function( e )
      {
         if( e && e.target && e.target.parentNode === this._container )
         {
            e.preventDefault();
            
            this._dragging = true;
            this._click = getPoint( e ); 
            this._makeDragItem( e.target ); 
            this._onMove( e );
         }
      },
      
      // on item release/drop 
      _onRelease: function( e )
      {
         this._dragging = false;
         this._trashDragItem(); 
         if(e.target.className == "dragging")  setTimeout(function() {save_options(0);}, 180);	        
      },
      
      // on item drag/move
      _onMove: function( e )
      {
         if( this._dragItem && this._dragging ) 
         {
            e.preventDefault();
            
            var point     = getPoint( e ); 
            var container = this._container;

            // drag fake item 
            this._moveItem( this._dragItem, ( point.x - this._click.x ), ( point.y - this._click.y ) ); 
            
            // keep an eye for other sortable lists and switch over to it on hover 
            for( var a = 0; a < this._sortLists.length; ++a )
            {
               var subContainer = this._sortLists[ a ]; 
               
               if( this._isOnTop( subContainer, point.x, point.y ) ) 
               {
                  container = subContainer;
               }
            }
            
            // container is empty, move clicked item over to it on hover 
            if( this._isOnTop( container, point.x, point.y ) && container.children.length === 0 ) 
            {
               container.appendChild( this._clickItem ); 
               return; 
            }
            
            // check if current drag item is over another item and swap places 
            for( var b = 0; b < container.children.length; ++b )
            {
               var subItem = container.children[ b ]; 
               
               if( subItem === this._clickItem || subItem === this._dragItem )
               {
                  continue; 
               }
               if( this._isOnTop( subItem, point.x, point.y ) ) 
               {
                  this._hovItem = subItem; 

                  this._swapItems( this._clickItem, subItem ); 
               }
            }
         }
      },
      
   };

   // export
   return Factory;
});

function initSortable( list ){
   var listObj  = document.getElementById( list ),
       sortable = new Sortable( listObj ); 
}


function SL_SHOWHIDEINLINEPROVIDERS(){
	SL_ONE_TR_ONLY(0);
}

function INLINE_PR_BUILDER(st){
        var dics = localStorage["SL_DICT_PRESENT"];
	var arr = dics.split(",");

        var defaultset = localStorage[st];

	if(defaultset.indexOf("undefined")!=-1){
                defaultset = defaultset.replace(/,undefined/g,"");
                defaultset = defaultset.replace(/undefined,/g,"");
		localStorage[st] = defaultset;
        }

	var list = defaultset.split(",");
	var anum = list.length;
	var build = "<table width=150 cellpadding=0 cellspacing=0 style='margin-left:3px'>";
	var WS = "";
	build = build + "<tr>";
	build = build + "<td width=100%>";
	var out = "";
	for(var i = 0; i < arr.length; i++){
		var arr1 = arr[i].split(":");
		if(arr1[1]==1) out=out+arr1[0]+",";
	}
//	var TTS = "Google,Translator";
	var TTS = "Google";

	for(var j = 0; j < anum; j++){
	        var tts_img ="";
		if(TTS.indexOf(list[j])!=-1) tts_img = "<img src='../../../../content/img/util/speak.png' style='position:absolute;right:3px;margin-top:2px;'>";
		if(out.indexOf(list[j])!=-1) WS = WS + "<li id='item-"+j+"' style='border-right:10px #1284B8 solid;text-align:center;'><img src='../../../../content/img/util/dictionary.png' style='position:absolute;right:20px;margin-top:2px;'>" + tts_img +list[j]+"</li>";
		else 	WS = WS + "<li id='item-"+j+"' style='border-right:10px #1284B8 solid;text-align:center;'>" + tts_img+list[j]+"</li>";
	}
	build = build + "<ul id='list-1' class='sortable' data-is-sortable='1' style='position: static;'>"+WS+"</ul></td>";
	build = build + "<tr>";
	build = build + "</table>";

	build = build + "<div style='margin-left:10px;'><img src='../../../../content/img/util/dictionary.png'> " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttabDict') + " &nbsp; <img src='../../../../content/img/util/speak.png'> " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVTTS')+"</div>";
        GEBI('SL_TR_PROVIDERS_BUILDER').innerHTML=build;

	// init lists 
	initSortable( "list-1" );
	SL_SHOWHIDEINLINEPROVIDERS();
}


function SAVE_INLINE_LIST_PROVIDERS(st){
	var pset = localStorage[st].split(",");	
	var items = document.getElementsByTagName("li");
	var OUTlist = "";
	for(var i=0; i<items.length; i++){
            var ID = items[i].id.replace('item-','');
	    if(i<(items.length-1)) OUTlist = OUTlist + pset[ID]+",";
	    else OUTlist = OUTlist + pset[ID];
	}
	localStorage[st] = OUTlist;
        INLINE_PR_BUILDER(st);
}


function SL_ONE_TR_ONLY(st){
	var items = document.getElementsByTagName("li");
	if(st==1){
		for(var i=0; i<items.length; i++){
		    items[i].style.zIndex="-1";
		    if(items[i].innerHTML.indexOf("Google")!=-1) items[i].style.opacity="1";
		    else items[i].style.opacity="0.2";
		}
	}else{
		for(var i=0; i<items.length; i++){
		    items[i].style.zIndex="999";
		    items[i].style.opacity="1";
		}
	}
}