(function () {

var names = ["Tyson", "Bob", "Lucy", "Jason", "Lyla", "Jonny", "David", "Kate", "Ostin", "Jack"];

for (var i = 0; i < names.length; i++) {
  var firstletter = names[i].charAt(0).toLowerCase();

  if (firstletter === 'j') {
    byeSpeaker(names[i]);
  }

  else {
    helloSpeaker(names[i]);
  }
}
})();
