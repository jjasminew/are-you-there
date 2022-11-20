window.onload=function(){
  document.getElementByID("audio1").play();
}

// List of sentences
var _CONTENT = [ 
	"(i just feel like i'm going crazy or like i'm overeacting somehow)", 
	"(none of this makes sense. everything's fine so why am i)", 
	"(why do i feel so unhappy?)", 
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 10);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 character deleted
	var text = '';

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {

			_INTERVAL_VAL = setInterval(Type, 90);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 90);


