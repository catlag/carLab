function Car(make, model, year, color, destination, passengers, previous_owners, 
	current_owner, state ){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = [];
	this.previous_owners = [];
	this.current_owner = "manufacturer";
	this.state = "off";
	this.destination = destination;
}


Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
	return this.current_owner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
	return this.color;

};

Car.prototype.start = function(newState) {
if (this.state === "off") {
	this.state = "on";

}
};
Car.prototype.off = function(newState) {
if (this.state === "on") {
	this.state = "off";
	return this.state;
}
};

Car.prototype.driveTo = function(place) {
	console.log(car1.destination);
	if (this.state === "on") {
	this.destination = place;
	console.log("driving to " + this.destination); 
	}
};

Car.prototype.park = function(){
	if (this.state === "off") {
		console.log("parked");
		return "parked";
	}
};
Car.prototype.pickUp = function (name) {
	if (this.state === "on"){
		this.passengers.push(name);
	}	
};

Car.prototype.dropOff = function (name) {
	if (this.state==="on" && this.passengers.indexOf(name) !== -1) {
		this.passengers.splice(this.passengers.indexOf(name),1);
}
	};

module.exports=Car;