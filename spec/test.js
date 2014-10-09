// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

var date = new Date();

describe('Car', function(){

  beforeEach(function(){
    car1 = new Car("ford", "escape", 2014, "grey", "nowhere");
  });
    // create a new myCar object each time

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(car1.year).to.equal(date.getFullYear());
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(car1.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(car1.previous_owners.length).to.equal(0);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(car1.current_owner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(car1.passengers.length).to.equal(0);
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      car1.sale("Lisa");
      expect(car1.previous_owners).to.eql(['manufacturer']);
    });

    it('should update currentOwner with the new owner', function(){
     expect(car1.sale("Lisa")).to.equal(car1.current_owner);
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      car1.paint("blue");
      expect("blue").to.eql(car1.color);
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      car1.start();
      expect(car1.state).to.eql("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      car1.off();
      expect(car1.state).to.eql("off");
    });
  });
describe('#driveTo', function(){
    it('should console.log "driving to <destination> if state is on', function(){
      car1.start();
      
      expect(car1.driveTo("reno")).to.eql("driving to Oregon");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      car1.off();
      expect(car1.park()).to.eql("parked");
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      car1.start();
      car1.pickUp("bob");
      expect(car1.passengers.length).to.eql(1);
    });

    it('should not modify the passengers array if car is off', function(){
      car1.off();
      car1.pickUp("john");
      car1.pickUp("tom");
      car1.pickUp("joe");
      car1.pickUp("mary");
      expect(car1.passengers.length).to.eql(0);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      car1.start();
      car1.pickUp("james");
      car1.dropOff("james");
      car1.dropOff("bob");
      expect(car1.passengers.length).to.eql(0);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      car1.start();
      car1.dropOff("bob");
      car1.off();
      car1.pickUp("james");
      car1.dropOff("james");
      car1.dropOff("bob");
      expect(car1.passengers.length).to.eql(0);
    });
  });

});


