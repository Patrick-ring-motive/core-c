var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.math = globalObject.Math;

math.h = math;

math.h.fabs = Math.abs;

const mathProperties = Object.getOwnPropertyNames(math.h);

const mathProperties_length = mathProperties.length;

for (let i = 0; i < mathProperties_length; i++) {

  globalObject[mathProperties[i]] = math.h[mathProperties[i]];

}