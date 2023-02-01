var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.assert = void function(asn){

console.assert(asn,asn);
  
};

assert.h = assert;
assert.h.assert = assert;
