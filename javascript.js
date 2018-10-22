// var shell;
// 
// 	
// }

	// var randomShell = Math.floor(Math.random() * (shells.length));


// function gotShell(shellData) {
// 	println(shellData);
// }
// var tacoCounter = 1;
var ingredientsContainer = document.getElementById("ingredients-info");

var tacoContainer = document.getElementById("taco-info");
var btn = document.getElementById("btn");

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

});



function renderHTML(data){
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
	"Awesome "
	]
	var htmlString = "";
	var descriptorRanNum = Math.floor(Math.random() * (descriptors.length));
	var ranNum = Math.floor(Math.random() * (data.length));
	htmlString += "<p>" + descriptors[descriptorRanNum] + data[ranNum].name + "</p>";
	tacoContainer.insertAdjacentHTML("beforeend", htmlString);
}

