
var tacoContainer = document.getElementById("taco-info");
var btn = document.getElementById("btn");
//the taco #
var tacoCount = 1;

// When you click the button loads data from API and calls the function renderHTML
btn.addEventListener("click", function(){
	var shells = new XMLHttpRequest();
	shells.open('GET', "https://tacos-ocecwkpxeq.now.sh/shells");
	shells.onload = function() {
		var shellsData = JSON.parse(shells.responseText);
		renderHTML(shellsData);
	};
	shells.send();

	var baseLayers = new XMLHttpRequest();
	baseLayers.open('GET', "https://tacos-ocecwkpxeq.now.sh/baseLayers");
	baseLayers.onload = function() {
		var baseLayersData = JSON.parse(baseLayers.responseText);
		renderHTML(baseLayersData);
	};
	baseLayers.send();

	var mixins = new XMLHttpRequest();
	mixins.open('GET', "https://tacos-ocecwkpxeq.now.sh/mixins");
	mixins.onload = function() {
		var mixinsData = JSON.parse(mixins.responseText);
		renderHTML(mixinsData);
	};
	mixins.send();

	var condiments = new XMLHttpRequest();
	condiments.open('GET', "https://tacos-ocecwkpxeq.now.sh/condiments");
	condiments.onload = function() {
		var condimentsData = JSON.parse(condiments.responseText);
		renderHTML(condimentsData);
	};
	condiments.send();

	var seasonings = new XMLHttpRequest();
	seasonings.open('GET', "https://tacos-ocecwkpxeq.now.sh/seasonings");
	seasonings.onload = function() {
		var seasoningsData = JSON.parse(seasonings.responseText);
		renderHTML(seasoningsData);
	};
	seasonings.send();

	tacoContainer.insertAdjacentHTML("beforeend", "-------- Taco " + tacoCount +"----------------------------------");
	tacoCount++;

});

// Renders html for the assembled taco
function renderHTML(data){
	//some descriptors to randomly describe how amazing each of the ingredients are
	var descriptors = [
	"Gourmet ",
	"Mouth-watering ",
	"To-die-for ",
	"World-renowned ",
	"The most delicious ",
	"Yummy ",
	"Award-winning ",
	"Our special ",
	"Tasty ",
	"Delectable ",
	"Exquisite ",
	"Awesome ",
	"Fantastic ",
	"Out-of-this-world ",
	"5-star ",
	"Superb ",
	"Extraordinary ",
	"Beyonce's favourite ",
	"Obama's favourite ",
	"Crazy amazing "
	]
	var htmlString = "";
	//random number generator for descriptor words
	var descriptorRanNum = Math.floor(Math.random() * (descriptors.length));
	//random number generator to choose ingredient
	var ranNum = Math.floor(Math.random() * (data.length));
	//adds the random descriptor and random ingredient into a html string with paragraph tag
	htmlString += "<p>" + descriptors[descriptorRanNum] + data[ranNum].name + "</p>";
	//inserts the string as HTML
	tacoContainer.insertAdjacentHTML("beforeend", htmlString);
}