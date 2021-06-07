import { assert } from 'chai';
import load from '../es/load';
const url = 'http://localhost:8080/hello.wasm';

describe('load.js', function() {
  it('load module', function() {
    return load(url).then(mod => {
      assert.instanceOf(mod, WebAssembly.Module);
    });
  });
  it('load instance', function() {
    return load(url, {}).then(res => {
      assert.instanceOf(res.instance, WebAssembly.Instance);
      assert.instanceOf(res.module, WebAssembly.Module);
    });
  });
});