function Wrapper() { }

/*
  Private array of punctuation to ignore. When the current column boundry would
  result in punctuation being wrapped, the punctuation in this list would be
  ignored and the next character would be the column breakpoint.
*/

var _punctuation_to_ignore = [
  ",",
  ".",
  ";"
]

Wrapper.prototype.wrap = function(str, colLen) {
    var tempStr = str, colIdx = colLen;
    var si = 0;
    while(colIdx < tempStr.length) {
      var idx = colIdx;
      var inWordBoundry = false;
      while (tempStr[idx] !== ' ' && ((colIdx - idx) <= colLen)) {
        idx--;
      }

      if(colIdx - idx >= colLen){
        idx = colIdx;
        inWordBoundry = true;
      }

      if(inWordBoundry) {
        if(_punctuation_to_ignore.indexOf(tempStr[idx]) > -1) {
          tempStr = tempStr.substring(0, idx+1) + "\n" + tempStr.substring(idx+1, tempStr.length);
        } else {
          tempStr = tempStr.substring(0, idx) + "-\n" + tempStr.substring(idx, tempStr.length);
        }
      } else {
        tempStr = tempStr.substring(0, idx) + "\n" + tempStr.substring(idx+1, tempStr.length);
      }
      colIdx = idx + colLen;
    }
    return tempStr;
};

// Export Singleton instance of wrapper;
module.exports = new Wrapper();
