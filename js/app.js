'use strict'

//var storeList = document.getElementById


//Algonqiun Blvd, Sandy Shores
var algonquinBlvd = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCustomers: 6.3,

    customerCount: function(){
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    }

}
//East Vinewood, Los Santos
var eastVinewood = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCustomers: 1.2,



}
//West Backlot City, Los Santos
var westBacklotcity = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCustomers: 3.7,



}
//Palomino Freeway, Blaine County
var palaminoFreeway = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCustomers: 2.3,



}
//Great Ocean Highway, Paleto Bay
var greatOceanhighway = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCustomers: 4.6,



}