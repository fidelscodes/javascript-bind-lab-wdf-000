let digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(this.time++, 1000); // Why does this work without using bind or arrow functions?
  }
};

function censor(wordToCensor, stringToSanitize) {
  // this wouldn't work for creating a regular expression
  // most likely due to the wordToCensor variable, hence the need for new RegExp()
  // let regex = /wordToCensor/gi;
  let regex = new RegExp(wordToCensor, 'gi'); // replace globally, ignoring case
  return stringToSanitize.replace(regex, 'BLEEP');
}

let violenceCensor = censor.bind(null, 'violence');
let drugsCensor = censor.bind(null, 'drugs');
