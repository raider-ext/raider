function isJsonRpcRequest(object) {
  return (
    object &&
    typeof object.method !== 'undefined' &&
    typeof object.id !== 'undefined' &&
    typeof object.jsonrpc !== 'undefined'
  )
}

function isJsonRpcResponseSuccess(object) {
  return (
    object &&
    typeof object.result !== 'undefined' &&
    typeof object.id !== 'undefined' &&
    typeof object.jsonrpc !== 'undefined'
  )
}

function isJsonRpcErrorMessage(object) {
  return object && typeof object.message !== 'undefined'
}

function isJsonRpcResponseError(object) {
  return (
    object &&
    typeof object.id !== 'undefined' &&
    typeof object.jsonrpc !== 'undefined' &&
    isJsonRpcErrorMessage(object.error)
  )
}

function isJsonRpcResponse(object) {
  return isJsonRpcResponseSuccess(object) || isJsonRpcResponseError(object)
}

function isJsonRpcMessage(object) {
  return isJsonRpcRequest(object) || isJsonRpcResponse(object)
}

function isKoaMessage(object) {
  return (
    !!object &&
    typeof object.from === 'string' &&
    typeof object.to === 'string' &&
    isJsonRpcMessage(object.payload)
  )
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function injectScript() {
  try {
    const container = document.head || document.documentElement
    const injectScripts = [browser.runtime.getURL('inpage_script.js')]
    const importScript = (url) => {
      const scriptTag = document.createElement('script')
      scriptTag.src = url
      scriptTag.type = 'module'
      container.insertBefore(scriptTag, container.children[0])
      scriptTag.remove()
    }
    injectScripts.forEach(importScript)
  } catch (error) {
    console.error(
      'DeFi Crypto.com Wallet Extension: Provider injection failed.',
      error,
    )
  }
}

injectScript()

class ContentScript {
  _port

  start = () => {
    this._port = this.connectServiceWorker()
    window.addEventListener('message', this._receiveMessageFromWeb)
  }

  _receiveMessageFromWeb = (e) => {
    const request = e.data
    if (request?.type !== 'defi-connector-proxy-request') {
      return
    }
    if (isKoaMessage(request.payload)) {
      this._port?.postMessage(request.payload || {})
    }
  }

  connectServiceWorker() {
    const nameJSON = {
      role: 'dapp',
      origin: location.origin,
      uuid: uuid(),
    }
    const port = browser.runtime.connect({ name: JSON.stringify(nameJSON) })
    port.onDisconnect.addListener((e) => {
      setTimeout(() => {
        this.connectServiceWorker()
      }, 1000)
    })
    this._port = port
    this._port.onMessage.addListener((message) => {
      window.postMessage(
        {
          type: 'defi-connector-proxy-request-response',
          payload: message,
        },
        location.origin,
      )
    })
    return port
  }
}

const contentScript = new ContentScript()
contentScript.start()
