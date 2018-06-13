'use strict'

//var storeList = document.getElementById

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 
'7pm', '8pm', '9pm']

//Algonqiun Blvd, Sandy Shores
var algonquinBlvd = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCustomers: 6.3,
    gunsPerHour: [],
    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    //15=store hours per day
    calculateGunsPerHour: function(){
        for (var i = 0; i<15; i++){
            this.gunsPerHour.push(Math.round(this.customerCount() * this.avgCustomers));
        }

        for{var i=0; i<algonquinBlvd.gunsPerHour.length; i++}
            var numGuns = algonquinBlvd.gunsPerHour[i];
            var gunElement = document.createElement('li');
            gunElement.textcontent = numGuns + 'guns';
            elem.appendChild(gunElement);           
    }
}
algonquinBlvd.calculateGunsPerHour();
console.log(algonquinBlvd.gunsPerHour);

//East Vinewood, Los Santos
var eastVinewood = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCustomers: 1.2,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
//West Backlot City, Los Santos
var westBacklotcity = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCustomers: 3.7,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
//Palomino Freeway, Blaine County
var palaminoFreeway = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCustomers: 2.3,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
//Great Ocean Highway, Paleto Bay
var greatOceanhighway = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCustomers: 4.6,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}