//source : http://fr.wikipedia.org/wiki/Diacritiques_utilis%C3%A9s_en_fran%C3%A7ais
w = "àâäçéèêëîïôöùûüÿÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸ".split("");
w.push("Œ","œ");
wo = "aaaceeeeiioouuuyAAACEEEEIIOOUUUY".split("");
wo.push("OE","oe");

function _sansAccent(text){
  for(var i=0 ; i< w.length ; i++){
    text = text.replace( new RegExp(w[i],"g") , wo[i]);
  }
  return text;
}

module.exports = function(){
  return _sansAccent;
};
