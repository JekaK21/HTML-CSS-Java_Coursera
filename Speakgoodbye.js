(function(window) {
	var speakword = "Good bye";
	var byeSpeaker = function (name) {
  		console.log(speakword + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;
})
(window);
