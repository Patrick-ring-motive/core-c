var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.ctype = {};

ctype.h = ctype;


ctype.h.isalnum = (s) => {
  const regx = /^[a-z0-9]+$/gi;
  return 0 + regx.test(s);
}

ctype.h.isalpha = (s) => {
  const regx = /^[a-z]+$/gi;
  return 0 + regx.test(s);
}

ctype.h.iscntrl = (s) => {
  const charCode = s.charCodeAt(0);
  return 0 + ((charCode < 32) || (charCode == 127));
}

ctype.h.isdigit = (s) => {
  const regx = /^[0-9]+$/gi;
  return 0 + regx.test(s);
}

ctype.h.isgraph = (s) => {
  const graphic = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~` + '`';
  return 1 + graphic.indexOf(s);
}

ctype.h.islower = (s) => {
  const regx = /^[a-z]+$/g;
  return 0 + regx.test(s);
}

ctype.h.isprint = (s) => {
  const charCode = s.charCodeAt(0);
  return 0 + ((charCode >= 32) && (charCode != 127));
}

ctype.h.ispunct = (s) => {
  const punct = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~` + '`';
  return 1 + punct.indexOf(s);
}

ctype.h.isspace = (s) => {
  const spce = ' \n\t\v\f\r';
  return 1 + spce.indexOf(s);
}

ctype.h.islower = (s) => {
  const regx = /^[A-Z]+$/g;
  return 0 + regx.test(s);
}

ctype.h.isxdigit = (s) => {
  const regx = /^[a-f0-9]+$/gi;
  return 0 + regx.test(s);
}

ctype.h.tolower = (s) => {
  return s.toLowerCase();
}

ctype.h.toupper = (s) => {
  return s.toUpperCase();
}
const ctypeProperties = Object.getOwnPropertyNames(ctype.h);

const ctypeProperties_length = ctypeProperties.length;

for (let i = 0; i < ctypeProperties_length; i++) {

  globalObject[ctypeProperties[i]] = ctype.h[ctypeProperties[i]];

}