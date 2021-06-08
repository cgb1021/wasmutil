function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(n,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).wasmhelper={})}(this,function(n){"use strict";var s=function(n,e){return e?(void 0===e.env&&(e.env={}),["emscripten_resize_heap","emscripten_memcpy_big","emscripten_notify_memory_growth","emscripten_asm_const_int"].forEach(function(n){"function"!=typeof e.env[n]&&(e.env[n]=function(){})}),void 0===e.wasi_snapshot_preview1&&(e.wasi_snapshot_preview1={}),["proc_exit"].forEach(function(n){"function"!=typeof e.wasi_snapshot_preview1[n]&&(e.wasi_snapshot_preview1[n]=function(){})}),n instanceof WebAssembly.Module?WebAssembly.instantiate(n,e):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(fetch(n),e):fetch(n).then(function(n){return n.arrayBuffer()}).then(function(n){return WebAssembly.instantiate(n,e)})):"function"==typeof WebAssembly.compileStreaming?WebAssembly.compileStreaming(fetch(n)):fetch(n).then(function(n){return n.arrayBuffer()}).then(function(n){return WebAssembly.compile(n)})},f="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,e=console.warn.bind(console);function l(n){l.shown||(l.shown={}),l.shown[n]||(l.shown[n]=1,e(n))}var p={lengthBytesUTF8:function(n){for(var e=0,t=0;t<n.length;++t){var r=n.charCodeAt(t);(r=55296<=r&&r<=57343?65536+((1023&r)<<10)|1023&n.charCodeAt(++t):r)<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e},stringToUTF8:function(n,e,t,r){if(!(0<r))return 0;for(var o=e instanceof ArrayBuffer?new Uint8Array(e):e,e=t,i=t+r,s=0;s<n.length;++s){var a=n.charCodeAt(s);if((a=55296<=a&&a<=57343?65536+((1023&a)<<10)|1023&n.charCodeAt(++s):a)<=127){if(i<=t)break;o[t++]=a}else if(a<=2047){if(i<=t+1)break;o[t++]=192|a>>6,o[t++]=128|63&a}else if(a<=65535){if(i<=t+2)break;o[t++]=224|a>>12,o[t++]=128|a>>6&63,o[t++]=128|63&a}else{if(i<=t+3)break;2097152<=a&&l("Invalid Unicode code point 0x"+a.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF)."),o[t++]=240|a>>18,o[t++]=128|a>>12&63,o[t++]=128|a>>6&63,o[t++]=128|63&a}}return o[t]=0,t-e},UTF8ToString:function(n,e,t){for(var r=n instanceof ArrayBuffer?new Uint8Array(n):n,o=e+t,i=e;r[i]&&!(o<=i);)++i;if(16<i-e&&r.subarray&&f)return f.decode(r.subarray(e,i));for(var s="";e<i;){var a,u,c=r[e++];128&c?(a=63&r[e++],192!=(224&c)?(u=63&r[e++],(c=224==(240&c)?(15&c)<<12|a<<6|u:(240!=(248&c)&&l("Invalid UTF-8 leading byte 0x"+c.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),(7&c)<<18|a<<12|u<<6|63&r[e++]))<65536?s+=String.fromCharCode(c):(u=c-65536,s+=String.fromCharCode(55296|u>>10,56320|1023&u))):s+=String.fromCharCode((31&c)<<6|a)):s+=String.fromCharCode(c)}return s}};function t(n,t){var r=this;this.HEAP8=null,this.HEAP16=null,this.HEAP32=null,this.HEAPU8=null,this.HEAPU16=null,this.HEAPU32=null,this.HEAPF32=null,this.HEAPF64=null,this.exports=null,this.memory=null,this.module=null,this.stack=0;function e(n){var e=n.exports;if(!e)throw new Error("no exports");if(i=!0,"object"===_typeof(e.memory))r.memory=e.memory;else{if("object"!==_typeof(t.env.memory))throw new Error("no memory buffer");r.memory=t.env.memory}n=r.memory.buffer,r.HEAP8=new Int8Array(n),r.HEAP16=new Int16Array(n),r.HEAP32=new Int32Array(n),r.HEAPU8=new Uint8Array(n),r.HEAPU16=new Uint16Array(n),r.HEAPU32=new Uint32Array(n),r.HEAPF32=new Float32Array(n),r.HEAPF64=new Float64Array(n),r.exports=e,o.forEach(function(n){return n.call(r,!1)}),o.length=0}var o=[],i=!1;this.ready=function(n){"function"==typeof n&&(i?n.call(r,!0):o.push(n))},n instanceof WebAssembly.Instance?e(n):s(n,t).then(function(n){r.module=n.module,e(n.instance)})}t.prototype.ccall=function(n,e,t){var r=this.exports,o=this,i={string:function(n){var e,t=0;return null!=n&&0!==n&&(e=1+(n.length<<2),t=r.stackAlloc(e),p.stringToUTF8(n,o.HEAPU8,t,e)),t},array:function(n){var e=o.HEAP32.BYTES_PER_ELEMENT,t=r.stackAlloc(n.length*e);return o.HEAP32.set(n,t/e),t}};var s=[],a=0;if(t)for(var u=0;u<t.length;u++){var c=i[Array.isArray(t[u])?"array":_typeof(t[u])];c?(0===a&&(a=r.stackSave()),s[u]=c(t[u])):s[u]=t[u]}var f,n=r[n].apply(null,s);return f=n,n="string"===e?p.UTF8ToString(o.HEAPU8,f):"boolean"===e?Boolean(f):f,0!==a&&r.stackRestore(a),n},t.prototype.mem2str=function(n,e){return p.UTF8ToString(this.HEAPU8,n,e)},t.prototype.str2mem=function(n){var e=p.lengthBytesUTF8(n),t=this.malloc(e+1);return p.stringToUTF8(n,this.HEAPU8,t,e),t},t.prototype.arr2mem=function(n){var e=this.heap(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"i32"),t=e.BYTES_PER_ELEMENT,r=this.malloc(n.length*t);return e.set(n,r/t),r},t.prototype.mem2arr=function(n,e){var t=this.heap(2<arguments.length&&void 0!==arguments[2]?arguments[2]:"i32"),n=n/t.BYTES_PER_ELEMENT;return Array.from(t.subarray(n,n+e))},t.prototype.malloc=function(n){var e=this.exports,t=0;if("function"==typeof e.malloc)t=e.malloc(n);else{var r=e.stackSave();if(r<n)throw new Error("stack overflow");0===this.stack&&(this.stack=r),t=e.stackAlloc(n)}return t},t.prototype.free=function(){var e=this.exports;if("function"==typeof e.free){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];t.forEach(function(n){e.free(n)})}this.stack&&(e.stackRestore(this.stack),this.stack=0)},t.prototype.heap=function(){switch(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"i32"){case"i8":return this.HEAP8;case"i16":return this.HEAP16;case"u8":return this.HEAPU8;case"u16":return this.HEAPU16;case"u32":return this.HEAPU32;case"float":return this.HEAPF32;case"double":return this.HEAPF64;default:return this.HEAP32}},t.prototype.grow=function(n){return this.memory.grow(n)};var a="wasminit",u="\nconst UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;\nconst err = console.warn.bind(console);\nfunction warnOnce(text) {\n  if (!warnOnce.shown) warnOnce.shown = {};\n  if (!warnOnce.shown[text]) {\n    warnOnce.shown[text] = 1;\n    err(text);\n  }\n}\nfunction lengthBytesUTF8(str) {\n  var len = 0;\n  for (var i = 0; i < str.length; ++i) {\n    var u = str.charCodeAt(i);\n    if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;\n    if (u <= 127) ++len;\n    else if (u <= 2047) len += 2;\n    else if (u <= 65535) len += 3;\n    else len += 4;\n  }\n  return len;\n}\n/*\n * @description: c字符数组转js字符串\n * @param {TpyeArray|ArrayBuffer} buffOrArr: \n * @param {Number} idx: 开始地址\n * @param {Number} maxBytesToRead: 读取数量（可选）\n */\nfunction UTF8ToString(buffOrArr, idx, maxBytesToRead) {\n  const heap = buffOrArr instanceof ArrayBuffer ? new Uint8Array(buffOrArr) : buffOrArr;\n  var endIdx = idx + maxBytesToRead;\n  var endPtr = idx;\n  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;\n  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {\n    return UTF8Decoder.decode(heap.subarray(idx, endPtr));\n  } else {\n    var str = '';\n    while (idx < endPtr) {\n      var u0 = heap[idx++];\n      if (!(u0 & 128)) {\n        str += String.fromCharCode(u0);\n        continue;\n      }\n      var u1 = heap[idx++] & 63;\n      if ((u0 & 224) == 192) {\n        str += String.fromCharCode((u0 & 31) << 6 | u1);\n        continue;\n      }\n      var u2 = heap[idx++] & 63;\n      if ((u0 & 240) == 224) {\n        u0 = (u0 & 15) << 12 | u1 << 6 | u2;\n      } else {\n        if ((u0 & 248) != 240) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');\n        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;\n      }\n      if (u0 < 65536) {\n        str += String.fromCharCode(u0);\n      } else {\n        var ch = u0 - 65536;\n        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);\n      }\n    }\n  }\n  return str;\n}\n/*\n * @description: c字符数组转js字符串\n * @param {String} buffOrArr: \n * @param {TpyeArray|ArrayBuffer} heap: \n * @param {Number} outIdx: 开始地址\n * @param {Number} maxBytesToWrite: \n */\nfunction stringToUTF8(str, buffOrArr, outIdx, maxBytesToWrite) {\n  if (!(maxBytesToWrite > 0)) return 0;\n  const heap = buffOrArr instanceof ArrayBuffer ? new Uint8Array(buffOrArr) : buffOrArr;\n  var startIdx = outIdx;\n  var endIdx = outIdx + maxBytesToWrite;\n  for (var i = 0; i < str.length; ++i) {\n    var u = str.charCodeAt(i);\n    if (u >= 55296 && u <= 57343) {\n      var u1 = str.charCodeAt(++i);\n      u = 65536 + ((u & 1023) << 10) | u1 & 1023;\n    }\n    if (u <= 127) {\n      if (outIdx >= endIdx) break;\n      heap[outIdx++] = u;\n    } else if (u <= 2047) {\n      if (outIdx + 1 >= endIdx) break;\n      heap[outIdx++] = 192 | u >> 6;\n      heap[outIdx++] = 128 | u & 63;\n    } else if (u <= 65535) {\n      if (outIdx + 2 >= endIdx) break;\n      heap[outIdx++] = 224 | u >> 12;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    } else {\n      if (outIdx + 3 >= endIdx) break;\n      if (u >= 2097152) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).');\n      heap[outIdx++] = 240 | u >> 18;\n      heap[outIdx++] = 128 | u >> 12 & 63;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    }\n  }\n  heap[outIdx] = 0;\n  return outIdx - startIdx;\n}\n\nvar utils = {\n  lengthBytesUTF8,\n\tstringToUTF8,\n\tUTF8ToString\n}\n\nfunction WASM(instance, importObject) {\n  this.HEAP8 = null;\n  this.HEAP16 = null;\n  this.HEAP32 = null;\n  this.HEAPU8 = null;\n  this.HEAPU16 = null;\n  this.HEAPU32 = null;\n  this.HEAPF32 = null;\n  this.HEAPF64 = null;\n  this.exports = null;\n  this.memory = null;\n  this.module = null;\n  this.stack = 0;\n\n  const callbacks = [];\n  let isInit = false;\n  const init = ({ exports }) => {\n    if (!exports) throw new Error('no exports');\n    isInit = true;\n    if (typeof exports.memory === 'object') {\n      this.memory = exports.memory;\n    } else if (typeof importObject.env.memory === 'object') {\n      this.memory = importObject.env.memory;\n    } else {\n      throw new Error('no memory buffer');\n    }\n    const buf = this.memory.buffer;\n    this.HEAP8 = new Int8Array(buf);\n    this.HEAP16 = new Int16Array(buf);\n    this.HEAP32 = new Int32Array(buf);\n    this.HEAPU8 = new Uint8Array(buf);\n    this.HEAPU16 = new Uint16Array(buf);\n    this.HEAPU32 = new Uint32Array(buf);\n    this.HEAPF32 = new Float32Array(buf);\n    this.HEAPF64 = new Float64Array(buf);\n    this.exports = exports;\n    callbacks.forEach(fn => fn.call(this, false));\n    callbacks.length = 0;\n  };\n  this.ready = (fn) => {\n    if (typeof fn !== 'function') return;\n    if (isInit) fn.call(this, true);\n    else callbacks.push(fn);\n  };\n  if (instance instanceof WebAssembly.Instance) {\n    init(instance);\n  } else {\n    load(instance, importObject).then((res) => {\n      this.module = res.module;\n      init(res.instance);\n    });\n  }\n}\n/*\n * @description: 调用c函数\n * @param {String} ident: c函数名称\n * @param {String} returnType: 返回值类型{string|number|boolean|null}\n * @param {Array} args: 参数数组\n * @return {Any}\n */\nWASM.prototype.ccall = function (ident, returnType, args) {\n  const exports = this.exports;\n  const self = this;\n  var toC = {\n    'string': function (str) {\n      var ret = 0;\n      if (str !== null && str !== undefined && str !== 0) {\n        var len = (str.length << 2) + 1;\n        ret = exports.stackAlloc(len);\n        utils.stringToUTF8(str, self.HEAPU8, ret, len);\n      }\n      return ret;\n    },\n    'array': function (arr) {\n      const bytes = self.HEAP32.BYTES_PER_ELEMENT;\n      var ret = exports.stackAlloc(arr.length * bytes);\n      self.HEAP32.set(arr, ret / bytes);\n      return ret;\n    }\n  };\n\n  function convertReturnValue(ret) {\n    if (returnType === 'string') return utils.UTF8ToString(self.HEAPU8, ret);\n    if (returnType === 'boolean') return Boolean(ret);\n    return ret;\n  }\n  var cArgs = [];\n  var stack = 0;\n  if (args) {\n    for (var i = 0; i < args.length; i++) {\n      const type = Array.isArray(args[i]) ? 'array' : typeof args[i];\n      var converter = toC[type];\n      if (converter) {\n        if (stack === 0) stack = exports.stackSave();\n        cArgs[i] = converter(args[i]);\n      } else {\n        cArgs[i] = args[i];\n      }\n    }\n  }\n  var ret = exports[ident].apply(null, cArgs);\n  ret = convertReturnValue(ret);\n  if (stack !== 0) exports.stackRestore(stack);\n  return ret;\n};\n/*\n * @description: 从内存获取字符串\n * @param {Number} ptr: buffer offset\n * @param {Number} size: 字符串长度（可选）\n * @return {String}\n */\nWASM.prototype.mem2str = function (ptr, size) {\n  return utils.UTF8ToString(this.HEAPU8, ptr, size);\n};\n/*\n * @description: 把字符串放入内存\n * @param {String} str: 字符串\n * @return {Number} buffer offset\n */\nWASM.prototype.str2mem = function (str) {\n  const size = utils.lengthBytesUTF8(str);\n  const ptr = this.malloc(size + 1);\n  utils.stringToUTF8(str, this.HEAPU8, ptr, size);\n  return ptr;\n};\n/*\n * @description: 把数组放入内存\n * @param {Array} arr: 数组\n * @param {String} type: 类型（可选）\n * @return {Number} buffer offset\n */\nWASM.prototype.arr2mem = function (arr, type = 'i32') {\n  const heap = this.heap(type);\n  const bytes = heap.BYTES_PER_ELEMENT;\n  const ptr = this.malloc(arr.length * bytes);\n  heap.set(arr, ptr / bytes);\n  return ptr;\n};\n/*\n * @description: 从内存读取数组\n * @param {Number} ptr: buffer offset\n * @param {Number} length: 读取长度\n * @param {String} type: 类型（可选）\n * @return {Array}\n */\nWASM.prototype.mem2arr = function (ptr, length, type = 'i32') {\n  const heap = this.heap(type);\n  const pos = ptr / heap.BYTES_PER_ELEMENT;\n  return Array.from(heap.subarray(pos, pos + length));\n};\n/*\n * @description: 分配内存\n * @param {Number} bytes: 字节长度\n * @return {Number}\n */\nWASM.prototype.malloc = function (bytes) {\n  const exports = this.exports;\n  let ptr = 0;\n  if (typeof exports.malloc === 'function') {\n    ptr = exports.malloc(bytes);\n  } else {\n    const stack = exports.stackSave();\n    if (bytes > stack) {\n      throw new Error('stack overflow');\n    }\n    if (this.stack === 0) {\n      this.stack = stack;\n    }\n    ptr = exports.stackAlloc(bytes);\n  }\n  return ptr;\n};\n/*\n * @description: 释放内存\n * @param {...Number} args: buffer offset\n */\nWASM.prototype.free = function (...args) {\n  const exports = this.exports;\n  if (typeof exports.free === 'function') {\n    args.forEach((ptr) => {\n      exports.free(ptr);\n    });\n  }\n  if (this.stack) {\n    exports.stackRestore(this.stack);\n    this.stack = 0;\n  }\n};\n/*\n * @description: 获取内存\n * @param {String} type: i32:HEAP32,i8:HEAP8,i16:HEAP16,u8:HEAPU8,u16:HEAPU16,u32:HEAPU32,float:HEAPF32,double:HEAPF64\n * @return {TypeArray}\n */\nWASM.prototype.heap = function (type = 'i32') {\n  switch (type) {\n  case 'i8':\n    return this.HEAP8;\n  case 'i16':\n    return this.HEAP16;\n  case 'u8':\n    return this.HEAPU8;\n  case 'u16':\n    return this.HEAPU16;\n  case 'u32':\n    return this.HEAPU32;\n  case 'float':\n    return this.HEAPF32;\n  case 'double':\n    return this.HEAPF64;\n  default:\n    return this.HEAP32;\n  }\n};\n\nlet _instance = null;\nvar wasm = null;\nlet _defaultFn = function () {}\nif (typeof importObject !== 'object') {\n  importObject = {};\n}\nif (typeof importObject.env !== 'object') {\n  importObject.env = {}\n}\nimportObject.env.emscripten_resize_heap = importObject.env.emscripten_resize_heap || _defaultFn;\nimportObject.env.emscripten_memcpy_big = importObject.env.emscripten_memcpy_big || _defaultFn;\nlet _initWASM = function (e) {\n  if (e.data.type === '".concat(a,"') {\n    WebAssembly.instantiate(e.data.mod, importObject).then(function(instance) {\n      _instance = instance;\n      wasm = new Proxy(new WASM(instance), {\n        get: (obj, k) => {\n          if (k in obj) {\n            return obj[k]\n          }\n          if (k in obj.exports) {\n            return obj.exports[k]\n          }\n        },\n        set: (obj, k, val) => {\n          const exclude = [\n            'malloc',\n            'free',\n            'exports',\n            'memory',\n            'HEAP8',\n            'HEAP16',\n            'HEAP32',\n            'HEAPU8',\n            'HEAPU16',\n            'HEAPU32',\n            'HEAPF32',\n            'HEAPF64',\n          ]\n          if (exclude.includes(k)) {\n            return false\n          }\n          obj[k] = val\n          return true\n        }\n      })\n      postMessage({\n        type: 'wasmready'\n      })\n    });\n    removeEventListener('message', _initWASM);\n    _initWASM = null;\n  }\n}\naddEventListener('message', _initWASM)\n");n.WASM=t,n.default=function(n){return n=new t(n,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),new Proxy(n,{get:function(n,e){return e in n?n[e]:e in n.exports?n.exports[e]:void 0},set:function(n,e,t){return!["exports","memory","stack","ccall","malloc","free","HEAP8","HEAP16","HEAP32","HEAPU8","HEAPU16","HEAPU32","HEAPF32","HEAPF64"].includes(e)&&(n[e]=t,!0)}})},n.load=s,n.utils=p,n.worker=function(o,i){return new Promise(function(r,e){function n(n){var t=window.URL.createObjectURL(new Blob([u+n]));"string"==typeof o?s(o).then(function(n){var e=new Worker(t);e.postMessage({type:a,mod:n}),r(e)}).catch(e):((n=new Worker(t)).postMessage({type:a,mod:o}),r(n))}var t;/^https?:\/\//.test(i)?fetch(i).then(function(n){return n.text()}).then(n).catch(e):(t=document.querySelector(i))?n(t.textContent):e()})},Object.defineProperty(n,"__esModule",{value:!0})});