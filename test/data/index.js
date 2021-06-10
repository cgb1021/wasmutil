function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(n,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).wasmhelper={})}(this,function(n){"use strict";var c=function(n,e){var t=n instanceof WebAssembly.Module;if(!(t||"string"==typeof n&&/\.wasm\??/.test(n)))throw new Error("no url");return t||e?(void 0===e.env&&(e.env={}),["emscripten_resize_heap","emscripten_memcpy_big","emscripten_notify_memory_growth","emscripten_asm_const_int"].forEach(function(n){"function"!=typeof e.env[n]&&(e.env[n]=function(){})}),void 0===e.wasi_snapshot_preview1&&(e.wasi_snapshot_preview1={}),["proc_exit","fd_write"].forEach(function(n){"function"!=typeof e.wasi_snapshot_preview1[n]&&(e.wasi_snapshot_preview1[n]=function(){})}),t?WebAssembly.instantiate(n,e):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(fetch(n),e):fetch(n).then(function(n){return n.arrayBuffer()}).then(function(n){return WebAssembly.instantiate(n,e)})):"function"==typeof WebAssembly.compileStreaming?WebAssembly.compileStreaming(fetch(n)):fetch(n).then(function(n){return n.arrayBuffer()}).then(function(n){return WebAssembly.compile(n)})},f="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,e=console.warn.bind(console);function l(n){l.shown||(l.shown={}),l.shown[n]||(l.shown[n]=1,e(n))}var p={lengthBytesUTF8:function(n){for(var e=0,t=0;t<n.length;++t){var r=n.charCodeAt(t);(r=55296<=r&&r<=57343?65536+((1023&r)<<10)|1023&n.charCodeAt(++t):r)<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e},stringToUTF8:function(n,e,t,r){if(!(0<r))return 0;for(var i=e instanceof ArrayBuffer?new Uint8Array(e):e,e=t,o=t+r,s=0;s<n.length;++s){var a=n.charCodeAt(s);if((a=55296<=a&&a<=57343?65536+((1023&a)<<10)|1023&n.charCodeAt(++s):a)<=127){if(o<=t)break;i[t++]=a}else if(a<=2047){if(o<=t+1)break;i[t++]=192|a>>6,i[t++]=128|63&a}else if(a<=65535){if(o<=t+2)break;i[t++]=224|a>>12,i[t++]=128|a>>6&63,i[t++]=128|63&a}else{if(o<=t+3)break;2097152<=a&&l("Invalid Unicode code point 0x"+a.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF)."),i[t++]=240|a>>18,i[t++]=128|a>>12&63,i[t++]=128|a>>6&63,i[t++]=128|63&a}}return i[t]=0,t-e},UTF8ToString:function(n,e,t){for(var r=n instanceof ArrayBuffer?new Uint8Array(n):n,i=e+t,o=e;r[o]&&!(i<=o);)++o;if(16<o-e&&r.subarray&&f)return f.decode(r.subarray(e,o));for(var s="";e<o;){var a,u,c=r[e++];128&c?(a=63&r[e++],192!=(224&c)?(u=63&r[e++],(c=224==(240&c)?(15&c)<<12|a<<6|u:(240!=(248&c)&&l("Invalid UTF-8 leading byte 0x"+c.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),(7&c)<<18|a<<12|u<<6|63&r[e++]))<65536?s+=String.fromCharCode(c):(u=c-65536,s+=String.fromCharCode(55296|u>>10,56320|1023&u))):s+=String.fromCharCode((31&c)<<6|a)):s+=String.fromCharCode(c)}return s},convertJsFunctionToWasm:function(n,e){if("function"==typeof WebAssembly.Function){for(var t={i:"i32",j:"i64",f:"f32",d:"f64"},r={parameters:[],results:"v"==e[0]?[]:[t[e[0]]]},i=1;i<e.length;++i)r.parameters.push(t[e[i]]);return new WebAssembly.Function(r,n)}var o=[1,0,1,96],s=e.slice(0,1),a=e.slice(1),u={i:127,j:126,f:125,d:124};o.push(a.length);for(var c=0;c<a.length;++c)o.push(u[a[c]]);return"v"==s?o.push(0):o=o.concat([1,u[s]]),o[1]=o.length-2,s=new Uint8Array([0,97,115,109,1,0,0,0].concat(o,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0])),s=new WebAssembly.Module(s),new WebAssembly.Instance(s,{e:{f:n}}).exports.f},warnOnce:l};function t(n){var t=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.HEAP8=null,this.HEAP16=null,this.HEAP32=null,this.HEAPU8=null,this.HEAPU16=null,this.HEAPU32=null,this.HEAPF32=null,this.HEAPF64=null,this.exports=null,this.memory=null,this.module=null,this.table=null,this.stack=0;function e(n){if(a=!0,"object"===_typeof(n.memory))t.memory=n.memory;else{if("object"!==_typeof(r.env.memory))throw new Error("no memory buffer");t.memory=r.env.memory}var e=t.memory.buffer;t.HEAP8=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=new Int32Array(e),t.HEAPU8=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e),t.exports=n,t.table=n.__indirect_function_table,o.forEach(function(n){return n.call(t)}),o.length=0}function i(n){p.warnOnce(n.message),s&&s(n)}var o=[],s=r&&"function"==typeof r.error?r.error:null,a=!1,u=null;this.ready=function(n){return"function"==typeof n&&(a?n.call(t):o.push(n)),a},this.fn2wasm=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if("function"!=typeof e)return 0;if(t&&"string"==typeof t||(t="v"),!u){u=new WeakMap;for(var n=0;n<this.table.length;n++){var r=this.table.get(n);r&&u.set(r,n)}}if(u.has(e))return u.get(e);try{this.table.grow(1)}catch(n){if(!(n instanceof RangeError))throw n;var i="Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";throw p.warnOnce(i),i}i=this.table.length-1;try{this.table.set(i,e)}catch(n){if(!(n instanceof TypeError))throw n;t=p.convertJsFunctionToWasm(e,t);this.table.set(i,t)}return u.set(e,i),i};try{n instanceof WebAssembly.Instance?e(n.exports):c(n,r).then(function(n){t.module=n.module,e(n.instance.exports)}).catch(function(n){i(n)})}catch(n){i(n)}}t.prototype.ccall=function(n,e,t){var r=this.exports,i=this,o={string:function(n){var e,t=0;return null!=n&&0!==n&&(e=1+(n.length<<2),t=r.stackAlloc(e),p.stringToUTF8(n,i.HEAPU8,t,e)),t},array:function(n){var e=i.HEAP32.BYTES_PER_ELEMENT,t=r.stackAlloc(n.length*e);return i.HEAP32.set(n,t/e),t}};var s=[],a=0;if(t)for(var u=0;u<t.length;u++){var c=o[Array.isArray(t[u])?"array":_typeof(t[u])];c?(0===a&&(a=r.stackSave()),s[u]=c(t[u])):s[u]=t[u]}var f,n=r[n].apply(null,s);return f=n,n="string"===e?p.UTF8ToString(i.HEAPU8,f):"boolean"===e?Boolean(f):f,0!==a&&r.stackRestore(a),n},t.prototype.mem2str=function(n,e){return p.UTF8ToString(this.HEAPU8,n,e)},t.prototype.str2mem=function(n){var e=p.lengthBytesUTF8(n),t=this.malloc(e+1);return p.stringToUTF8(n,this.HEAPU8,t,e),t},t.prototype.arr2mem=function(n){var e=this.heap(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"i32"),t=e.BYTES_PER_ELEMENT,r=this.malloc(n.length*t);return e.set(n,r/t),r},t.prototype.mem2arr=function(n,e){var t=this.heap(2<arguments.length&&void 0!==arguments[2]?arguments[2]:"i32"),n=n/t.BYTES_PER_ELEMENT;return Array.from(t.subarray(n,n+e))},t.prototype.malloc=function(n){var e=this.exports,t=0;if("function"==typeof e.malloc)t=e.malloc(n);else{var r=e.stackSave();if(r<n){var i="stack overflow, "+n+" larger than "+r;throw p.warnOnce(i),new Error(i)}0===this.stack&&(this.stack=r),t=e.stackAlloc(n)}return t},t.prototype.free=function(){var e=this.exports;if("function"==typeof e.free){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];t.forEach(function(n){e.free(n)})}this.stack&&(e.stackRestore(this.stack),this.stack=0)},t.prototype.getFree=function(){return this.exports.emscripten_stack_get_free()},t.prototype.heap=function(){switch(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"i32"){case"i8":return this.HEAP8;case"i16":return this.HEAP16;case"u8":return this.HEAPU8;case"u16":return this.HEAPU16;case"u32":return this.HEAPU32;case"float":return this.HEAPF32;case"double":return this.HEAPF64;default:return this.HEAP32}};var s="wasminit",a="\nconst UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;\nconst err = console.warn.bind(console);\nfunction warnOnce(text) {\n  if (!warnOnce.shown) warnOnce.shown = {};\n  if (!warnOnce.shown[text]) {\n    warnOnce.shown[text] = 1;\n    err(text);\n  }\n}\nfunction lengthBytesUTF8(str) {\n  var len = 0;\n  for (let i = 0; i < str.length; ++i) {\n    var u = str.charCodeAt(i);\n    if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;\n    if (u <= 127) ++len;\n    else if (u <= 2047) len += 2;\n    else if (u <= 65535) len += 3;\n    else len += 4;\n  }\n  return len;\n}\n/*\n * @description: c字符数组转js字符串\n * @param {TpyeArray|ArrayBuffer} buffOrArr: \n * @param {Number} idx: 开始地址\n * @param {Number} maxBytesToRead: 读取数量（可选）\n */\nfunction UTF8ToString(buffOrArr, idx, maxBytesToRead) {\n  const heap = buffOrArr instanceof ArrayBuffer ? new Uint8Array(buffOrArr) : buffOrArr;\n  var endIdx = idx + maxBytesToRead;\n  var endPtr = idx;\n  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;\n  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {\n    return UTF8Decoder.decode(heap.subarray(idx, endPtr));\n  } else {\n    var str = '';\n    while (idx < endPtr) {\n      var u0 = heap[idx++];\n      if (!(u0 & 128)) {\n        str += String.fromCharCode(u0);\n        continue;\n      }\n      var u1 = heap[idx++] & 63;\n      if ((u0 & 224) == 192) {\n        str += String.fromCharCode((u0 & 31) << 6 | u1);\n        continue;\n      }\n      var u2 = heap[idx++] & 63;\n      if ((u0 & 240) == 224) {\n        u0 = (u0 & 15) << 12 | u1 << 6 | u2;\n      } else {\n        if ((u0 & 248) != 240) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');\n        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;\n      }\n      if (u0 < 65536) {\n        str += String.fromCharCode(u0);\n      } else {\n        var ch = u0 - 65536;\n        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);\n      }\n    }\n  }\n  return str;\n}\n/*\n * @description: c字符数组转js字符串\n * @param {String} buffOrArr: \n * @param {TpyeArray|ArrayBuffer} heap: \n * @param {Number} outIdx: 开始地址\n * @param {Number} maxBytesToWrite: \n */\nfunction stringToUTF8(str, buffOrArr, outIdx, maxBytesToWrite) {\n  if (!(maxBytesToWrite > 0)) return 0;\n  const heap = buffOrArr instanceof ArrayBuffer ? new Uint8Array(buffOrArr) : buffOrArr;\n  var startIdx = outIdx;\n  var endIdx = outIdx + maxBytesToWrite;\n  for (var i = 0; i < str.length; ++i) {\n    var u = str.charCodeAt(i);\n    if (u >= 55296 && u <= 57343) {\n      var u1 = str.charCodeAt(++i);\n      u = 65536 + ((u & 1023) << 10) | u1 & 1023;\n    }\n    if (u <= 127) {\n      if (outIdx >= endIdx) break;\n      heap[outIdx++] = u;\n    } else if (u <= 2047) {\n      if (outIdx + 1 >= endIdx) break;\n      heap[outIdx++] = 192 | u >> 6;\n      heap[outIdx++] = 128 | u & 63;\n    } else if (u <= 65535) {\n      if (outIdx + 2 >= endIdx) break;\n      heap[outIdx++] = 224 | u >> 12;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    } else {\n      if (outIdx + 3 >= endIdx) break;\n      if (u >= 2097152) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).');\n      heap[outIdx++] = 240 | u >> 18;\n      heap[outIdx++] = 128 | u >> 12 & 63;\n      heap[outIdx++] = 128 | u >> 6 & 63;\n      heap[outIdx++] = 128 | u & 63;\n    }\n  }\n  heap[outIdx] = 0;\n  return outIdx - startIdx;\n}\n/*\n * @description: c字符数组转js字符串\n * @param {Function} func: \n * @param {String} sig: 'v': void type, 'i': 32-bit integer type, 'j': 64-bit integer type (currently does not exist in JavaScript), 'f': 32-bit float type, 'd': 64\n * @return {Function} \n */\nfunction convertJsFunctionToWasm(func, sig) {\n  if (typeof WebAssembly.Function === 'function') {\n    var typeNames = {\n      'i': 'i32',\n      'j': 'i64',\n      'f': 'f32',\n      'd': 'f64'\n    };\n    var type = {\n      parameters: [],\n      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]\n    };\n    for (let i = 1; i < sig.length; ++i) {\n      type.parameters.push(typeNames[sig[i]]);\n    }\n    return new WebAssembly.Function(type, func);\n  }\n  var typeSection = [1, 0, 1, 96];\n  var sigRet = sig.slice(0, 1);\n  var sigParam = sig.slice(1);\n  var typeCodes = {\n    'i': 127,\n    'j': 126,\n    'f': 125,\n    'd': 124\n  };\n  typeSection.push(sigParam.length);\n  for (let i = 0; i < sigParam.length; ++i) {\n    typeSection.push(typeCodes[sigParam[i]]);\n  }\n  if (sigRet == 'v') {\n    typeSection.push(0);\n  } else {\n    typeSection = typeSection.concat([1, typeCodes[sigRet]]);\n  }\n  typeSection[1] = typeSection.length - 2;\n  var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));\n  var module = new WebAssembly.Module(bytes);\n  var instance = new WebAssembly.Instance(module, {\n    'e': {\n      'f': func\n    }\n  });\n  var wrappedFunc = instance.exports['f'];\n  return wrappedFunc;\n}\n\nvar utils = {\n  lengthBytesUTF8,\n  stringToUTF8,\n  UTF8ToString,\n  convertJsFunctionToWasm,\n  warnOnce\n};\n\nfunction WASM(instance, importObject = {}) {\n  this.HEAP8 = null;\n  this.HEAP16 = null;\n  this.HEAP32 = null;\n  this.HEAPU8 = null;\n  this.HEAPU16 = null;\n  this.HEAPU32 = null;\n  this.HEAPF32 = null;\n  this.HEAPF64 = null;\n  this.exports = null;\n  this.memory = null;\n  this.module = null;\n  this.table = null;\n  this.stack = 0;\n\n  const callbacks = [];\n  const error = importObject && typeof importObject.error === 'function' ? importObject.error : null;\n  let isInit = false;\n  let functionsInTableMap = null;\n  const init = (exports) => {\n    isInit = true;\n    if (typeof exports.memory === 'object') {\n      this.memory = exports.memory;\n    } else if (typeof importObject.env.memory === 'object') {\n      this.memory = importObject.env.memory;\n    } else {\n      throw new Error('no memory buffer');\n    }\n    const buf = this.memory.buffer;\n    this.HEAP8 = new Int8Array(buf);\n    this.HEAP16 = new Int16Array(buf);\n    this.HEAP32 = new Int32Array(buf);\n    this.HEAPU8 = new Uint8Array(buf);\n    this.HEAPU16 = new Uint16Array(buf);\n    this.HEAPU32 = new Uint32Array(buf);\n    this.HEAPF32 = new Float32Array(buf);\n    this.HEAPF64 = new Float64Array(buf);\n    this.exports = exports;\n    this.table = exports.__indirect_function_table;\n    callbacks.forEach(fn => fn.call(this));\n    callbacks.length = 0;\n  };\n  const emitError = (e) => {\n    utils.warnOnce(e.message);\n    if (error) {\n      error(e);\n    }\n  };\n  this.ready = (fn) => {\n    if (typeof fn === 'function') {\n      if (isInit) fn.call(this);\n      else callbacks.push(fn);\n    }\n    return isInit;\n  };\n  this.fn2wasm = function (func, sig = '') {\n    if (typeof func !== 'function') return 0;\n    if (!sig || typeof sig !== 'string') sig = 'v';\n    if (!functionsInTableMap) {\n      functionsInTableMap = new WeakMap;\n      for (var i = 0; i < this.table.length; i++) {\n        var item = this.table.get(i);\n        if (item) {\n          functionsInTableMap.set(item, i);\n        }\n      }\n    }\n    if (functionsInTableMap.has(func)) {\n      return functionsInTableMap.get(func);\n    }\n    try {\n      this.table.grow(1);\n    } catch (err) {\n      if (!(err instanceof RangeError)) {\n        throw err;\n      }\n      const msg = 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';\n      utils.warnOnce(msg);\n      throw msg;\n    }\n    var ret = this.table.length - 1;\n    try {\n      this.table.set(ret, func);\n    } catch (err) {\n      if (!(err instanceof TypeError)) {\n        throw err;\n      }\n      var wrapped = utils.convertJsFunctionToWasm(func, sig);\n      this.table.set(ret, wrapped);\n    }\n    functionsInTableMap.set(func, ret);\n    return ret;\n  };\n  try {\n    if (instance instanceof WebAssembly.Instance) {\n      init(instance.exports);\n    } else {\n      load(instance, importObject).then((res) => {\n        this.module = res.module;\n        init(res.instance.exports);\n      }).catch((e) => {\n        emitError(e);\n      });\n    }\n  } catch (e) {\n    emitError(e);\n  }\n}\n/*\n * @description: 调用c函数\n * @param {String} ident: c函数名称\n * @param {String} returnType: 返回值类型{string|number|boolean|null}\n * @param {Array} args: 参数数组\n * @return {Any}\n */\nWASM.prototype.ccall = function (ident, returnType, args) {\n  const exports = this.exports;\n  const self = this;\n  var toC = {\n    'string': function (str) {\n      var ret = 0;\n      if (str !== null && str !== undefined && str !== 0) {\n        var len = (str.length << 2) + 1;\n        ret = exports.stackAlloc(len);\n        utils.stringToUTF8(str, self.HEAPU8, ret, len);\n      }\n      return ret;\n    },\n    'array': function (arr) {\n      const bytes = self.HEAP32.BYTES_PER_ELEMENT;\n      var ret = exports.stackAlloc(arr.length * bytes);\n      self.HEAP32.set(arr, ret / bytes);\n      return ret;\n    }\n  };\n\n  function convertReturnValue(ret) {\n    if (returnType === 'string') return utils.UTF8ToString(self.HEAPU8, ret);\n    if (returnType === 'boolean') return Boolean(ret);\n    return ret;\n  }\n  var cArgs = [];\n  var stack = 0;\n  if (args) {\n    for (var i = 0; i < args.length; i++) {\n      const type = Array.isArray(args[i]) ? 'array' : typeof args[i];\n      var converter = toC[type];\n      if (converter) {\n        if (stack === 0) stack = exports.stackSave();\n        cArgs[i] = converter(args[i]);\n      } else {\n        cArgs[i] = args[i];\n      }\n    }\n  }\n  var ret = exports[ident].apply(null, cArgs);\n  ret = convertReturnValue(ret);\n  if (stack !== 0) exports.stackRestore(stack);\n  return ret;\n};\n/*\n * @description: 从内存获取字符串\n * @param {Number} ptr: buffer offset\n * @param {Number} size: 字符串长度（可选）\n * @return {String}\n */\nWASM.prototype.mem2str = function (ptr, size) {\n  return utils.UTF8ToString(this.HEAPU8, ptr, size);\n};\n/*\n * @description: 把字符串放入内存\n * @param {String} str: 字符串\n * @return {Number} buffer offset\n */\nWASM.prototype.str2mem = function (str) {\n  const size = utils.lengthBytesUTF8(str);\n  const ptr = this.malloc(size + 1);\n  utils.stringToUTF8(str, this.HEAPU8, ptr, size);\n  return ptr;\n};\n/*\n * @description: 把数组放入内存\n * @param {Array} arr: 数组\n * @param {String} type: 类型（可选）\n * @return {Number} buffer offset\n */\nWASM.prototype.arr2mem = function (arr, type = 'i32') {\n  const heap = this.heap(type);\n  const bytes = heap.BYTES_PER_ELEMENT;\n  const ptr = this.malloc(arr.length * bytes);\n  heap.set(arr, ptr / bytes);\n  return ptr;\n};\n/*\n * @description: 从内存读取数组\n * @param {Number} ptr: buffer offset\n * @param {Number} length: 读取长度\n * @param {String} type: 类型（可选）\n * @return {Array}\n */\nWASM.prototype.mem2arr = function (ptr, length, type = 'i32') {\n  const heap = this.heap(type);\n  const pos = ptr / heap.BYTES_PER_ELEMENT;\n  return Array.from(heap.subarray(pos, pos + length));\n};\n/*\n * @description: 分配内存\n * @param {Number} bytes: 字节长度\n * @return {Number}\n */\nWASM.prototype.malloc = function (bytes) {\n  const exports = this.exports;\n  let ptr = 0;\n  if (typeof exports.malloc === 'function') {\n    ptr = exports.malloc(bytes);\n  } else {\n    const stack = exports.stackSave();\n    if (bytes > stack) {\n      const msg = 'stack overflow, '+ bytes +' larger than ' + stack;\n      utils.warnOnce(msg);\n      throw new Error(msg);\n    }\n    if (this.stack === 0) {\n      this.stack = stack;\n    }\n    ptr = exports.stackAlloc(bytes);\n  }\n  return ptr;\n};\n/*\n * @description: 释放内存\n * @param {...Number} args: buffer offset\n */\nWASM.prototype.free = function (...args) {\n  const exports = this.exports;\n  if (typeof exports.free === 'function') {\n    args.forEach((ptr) => {\n      exports.free(ptr);\n    });\n  }\n  if (this.stack) {\n    exports.stackRestore(this.stack);\n    this.stack = 0;\n  }\n};\n/*\n * @description: 获取剩余内存数量\n * @return {Number}\n */\nWASM.prototype.getFree = function () {\n  return this.exports.emscripten_stack_get_free();\n};\n/*\n * @description: 获取内存\n * @param {String} type: i32:HEAP32,i8:HEAP8,i16:HEAP16,u8:HEAPU8,u16:HEAPU16,u32:HEAPU32,float:HEAPF32,double:HEAPF64\n * @return {TypeArray}\n */\nWASM.prototype.heap = function (type = 'i32') {\n  switch (type) {\n  case 'i8':\n    return this.HEAP8;\n  case 'i16':\n    return this.HEAP16;\n  case 'u8':\n    return this.HEAPU8;\n  case 'u16':\n    return this.HEAPU16;\n  case 'u32':\n    return this.HEAPU32;\n  case 'float':\n    return this.HEAPF32;\n  case 'double':\n    return this.HEAPF64;\n  default:\n    return this.HEAP32;\n  }\n};\n\nlet _instance = null;\nvar wasm = null;\nlet _defaultFn = function () {}\nif (typeof importObject !== 'object') {\n  importObject = {};\n}\nif (typeof importObject.env !== 'object') {\n  importObject.env = {}\n}\n['emscripten_resize_heap',\n  'emscripten_memcpy_big',\n  'emscripten_notify_memory_growth',\n  'emscripten_asm_const_int'\n].forEach(key => {\n  if (typeof importObject.env[key] !== 'function') {\n    importObject.env[key] = _defaultFn;\n  }\n});\nif (typeof importObject.wasi_snapshot_preview1 !== 'object') {\n  importObject.wasi_snapshot_preview1 = {};\n}\n['proc_exit', 'fd_write'].forEach(key => {\n  if (typeof importObject.wasi_snapshot_preview1[key] !== 'function') {\n    importObject.wasi_snapshot_preview1[key] = _defaultFn;\n  }\n});\nlet _initWASM = function (e) {\n  if (e.data.type === '".concat(s,"') {\n    WebAssembly.instantiate(e.data.mod, importObject).then(function(instance) {\n      _instance = instance;\n      wasm = new Proxy(new WASM(instance), {\n        get: (obj, k) => {\n          if (k in obj) {\n            return obj[k]\n          }\n          if (k in obj.exports) {\n            return obj.exports[k]\n          }\n        },\n        set: (obj, k, val) => {\n          const exclude = [\n            'malloc',\n            'free',\n            'exports',\n            'memory',\n            'HEAP8',\n            'HEAP16',\n            'HEAP32',\n            'HEAPU8',\n            'HEAPU16',\n            'HEAPU32',\n            'HEAPF32',\n            'HEAPF64',\n          ]\n          if (exclude.includes(k)) {\n            return false\n          }\n          obj[k] = val\n          return true\n        }\n      })\n      postMessage({\n        type: 'wasmready'\n      })\n    });\n    removeEventListener('message', _initWASM);\n    _initWASM = null;\n  }\n}\naddEventListener('message', _initWASM)\n");n.WASM=t,n.default=function(n){return n=new t(n,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),new Proxy(n,{get:function(n,e){return e in n?n[e]:e in n.exports?n.exports[e]:void 0},set:function(n,e,t){return!["exports","memory","table","HEAP8","HEAP16","HEAP32","HEAPU8","HEAPU16","HEAPU32","HEAPF32","HEAPF64"].includes(e)&&(n[e]=t,!0)}})},n.load=c,n.utils=p,n.worker=function(i,o){return new Promise(function(r,e){function n(n){var t=window.URL.createObjectURL(new Blob([a+n]));"string"==typeof i?c(i).then(function(n){var e=new Worker(t);e.postMessage({type:s,mod:n}),r(e)}).catch(e):((n=new Worker(t)).postMessage({type:s,mod:i}),r(n))}var t;/\.js\??/.test(o)?fetch(o).then(function(n){return n.text()}).then(n).catch(e):(t=document.querySelector(o))?n(t.textContent):e()})},Object.defineProperty(n,"__esModule",{value:!0})});