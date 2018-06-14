'use strict'

//var storeList = document.getElementById

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 
'7pm', '8pm', '9pm']


//////////////////////////////////////////////////////////////////////////////////
//Algonqiun Blvd, Sandy Shores
var algonquinBlvd = {
    name: "Algonquin Boulevard",
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
    }
}
var sumSales = 0; 
algonquinBlvd.calculateGunsPerHour();
var algonquinPara = document.getElementById("algonquin");
algonquinPara.textContent = algonquinBlvd.name;

var algonquinElem = document.getElementById("algonquinSales");
for(var i=0; i<algonquinBlvd.gunsPerHour.length; i++){
    var numGuns = algonquinBlvd.gunsPerHour[i];
    sumSales= sumSales + algonquinBlvd.gunsPerHour[i];
    var gunElement = document.createElement('li');
    gunElement.textContent =storeHours[i] + ': ' + numGuns + ' guns';
    algonquinElem.appendChild(gunElement); 
}  
var sumSalesLi = document.createElement('li');
sumSalesLi.textContent ='Total: ' + sumSales + ' guns';
algonquinElem.appendChild(sumSalesLi);


//////////////////////////////////////////////////////////////////////////////////
//East Vinewood, Los Santos
var eastVinewood = {
    name: "East Vinewood",
    minCustomers: 3,
    maxCustomers: 24,
    avgCustomers: 1.2,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
    //15=store hours per day
    calculateGunsPerHour: function(){
        for (var i = 0; i<15; i++){
            this.gunsPerHour.push(Math.round(this.customerCount() * this.avgCustomers));
        }        
    }
}
var sumSales = 0; 
eastVinewood.calculateGunsPerHour();
var eastVinewoodPara = document.getElementById("eastVinewood");
eastVinewoodPara.textContent = eastVinewood.name;

var eastVinewoodElem = document.getElementById("eastVinewoodSales");
for(var i=0; i<eastVinewood.gunsPerHour.length; i++){
    var numGuns = eastVinewood.gunsPerHour[i];
    sumSales= sumSales + eastVinewood.gunsPerHour[i];
    var gunElement = document.createElement('li');
    gunElement.textContent =storeHours[i] + ': ' + numGuns + ' guns';
    eastVinewood.appendChild(gunElement); 
}  
var sumSalesLi = document.createElement('li');
sumSalesLi.textContent ='Total: ' + sumSales + ' guns';
eastVinewoodElem.appendChild(sumSalesLi);


//////////////////////////////////////////////////////////////////////////////////
//West Backlot City, Los Santos
var westBacklot = {
    name: "West Backlot City",
    minCustomers: 11,
    maxCustomers: 38,
    avgCustomers: 3.7,
    gunsPerHour:[],
    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
//15=store hours per day
calculateGunsPerHour: function(){
    for (var i = 0; i<15; i++){
        this.gunsPerHour.push(Math.round(this.customerCount() * this.avgCustomers));
    }        
}

var sumSales = 0; 
westBacklot.calculateGunsPerHour();
var westBacklotPara = document.getElementById("westBacklot");
westBacklot.textContent = westBacklot.name;

var westBacklotElem = document.getElementById("westBacklotSales");
for(var i=0; i<westBacklot.gunsPerHour.length; i++){
var numGuns = westBacklot.gunsPerHour[i];
sumSales= sumSales + westBacklot.gunsPerHour[i];
var gunElement = document.createElement('li');
gunElement.textContent =storeHours[i] + ': ' + numGuns + ' guns';
westBacklotElem.appendChild(gunElement); 
}  
var sumSalesLi = document.createElement('li');
sumSalesLi.textContent ='Total: ' + sumSales + ' guns';
westBacklotElem.appendChild(sumSalesLi);


//////////////////////////////////////////////////////////////////////////////////
//Palomino Freeway, Blaine County
var palaminoFreeway = {
    name: "Palamino Freeway",
    minCustomers: 20,
    maxCustomers: 38,
    avgCustomers: 2.3,
    gunsPerHour:[],

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
calculateGunsPerHour: function(){
    for (var i = 0; i<15; i++){
        this.gunsPerHour.push(Math.round(this.customerCount() * this.avgCustomers));
    }        
}
}
var sumSales = 0; 
palaminoFreeway.calculateGunsPerHour();
var palaminoFreeway = document.getElementById("palaminoFreeway");
palaminoFreewayPara.textContent = palaminoFreeway.name;

var palaminoFreewayElem = document.getElementById("palaminoFreewaySales");
for(var i=0; i<palaminoFreeway.gunsPerHour.length; i++){
var numGuns = palaminoFreeway.gunsPerHour[i];
sumSales= sumSales + palaminoFreeway.gunsPerHour[i];
var gunElement = document.createElement('li');
gunElement.textContent =storeHours[i] + ': ' + numGuns + ' guns';
palaminoFreewayElem.appendChild(gunElement); 
}  
var sumSalesLi = document.createElement('li');
sumSalesLi.textContent ='Total: ' + sumSales + ' guns';
palaminoFreewayElem.appendChild(sumSalesLi);


//////////////////////////////////////////////////////////////////////////////////
//Great Ocean Highway, Paleto Bay
var paletoBay = {
    name: "Paleto Bay",
    minCustomers: 2,
    maxCustomers: 16,
    avgCustomers: 4.6,
    gunsPerHour:[],

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }
}
calculateGunsPerHour: function(){
    for (var i = 0; i<15; i++){
        this.gunsPerHour.push(Math.round(this.customerCount() * this.avgCustomers));
    }        
}

var sumSales = 0; 
paletoBay.calculateGunsPerHour();
var paletoBayPara = document.getElementById("paletoBay");
paletoBayPara.textContent = paletoBay.name;

var paletoBayElem = document.getElementById("paletoBaySales");
for(var i=0; i<paletoBay.gunsPerHour.length; i++){
var numGuns = paletoBay.gunsPerHour[i];
sumSales= sumSales + paletoBay.gunsPerHour[i];
var gunElement = document.createElement('li');
gunElement.textContent =storeHours[i] + ': ' + numGuns + ' guns';
paletoBayElem.appendChild(gunElement); 
}  
var sumSalesLi = document.createElement('li');
sumSalesLi.textContent ='Total: ' + sumSales + ' guns';
paletoBayElem.appendChild(sumSalesLi);