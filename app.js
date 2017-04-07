var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurants";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  // var searchRest = prompt("Search restaurants you big dummy:");
  // collection.find({name: searchRest}).forEach( function(doc) {
  // 	console.log(doc);
  // });

  // var addRestName = prompt("Enter a new restaurant name: ");
  // var addRestStreet = prompt("Enter new restaurants street: ");
  // var addRestZip = prompt("Enter new restaurants zip code: ");
  // var addRestYelp = prompt("Enter new restaurants yelp link: ");
  // collection.insert({
  // 	name: addRestName,
  // 	address: {
  // 		street: addRestStreet,
  // 		zipcode: addRestZip
  // 	},
  // 	yelp: addRestYelp
  // });
  // 	console.log(addRestName);
  // 	console.log(addRestStreet);
  // 	console.log(addRestZip);
  // 	console.log(addRestYelp);

 //  var searchRest = prompt("Which restaurant are you wanting to update? ");
 //  var newName = prompt("What is the new name: "); 
 //  var newStreet = prompt("What is the restaurants new address: ");
 //  var newZip = prompt("What is the restaurants new zip: ");
 //  var newYelp = prompt("What is the restaurants new yelp: ");
 //  	console.log(err);
	// collection.update(
	// 	{name: searchRest},
	// 	{
	// 		name: newName,
	// 	address: {
	// 		street: newStreet,
	// 		zipcode: newZip
	// 	},
	// 	yelp: newYelp
	// });


	var removeRest = prompt("What restaurant do you want to remove? ");
	console.log("removed restaurant");
	collection.remove({name: removeRest});
});