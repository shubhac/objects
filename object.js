/**
 * Created by sbkloaner-sbktech on 8/10/14.
 */

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 3,
    ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
    ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
    ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
    addRanger: function (name, skillz, station){
        this.numRangers++;
        this["ranger" + this.numRangers] = {
            name: name,
            skillz: skillz,
            station: station
        };
    },
    addBulb: function (name, wattage){
        this.weaponBulbs.push[(name,wattage)];
    }
};

lighthouseRock.addBulb("duper",100);
alert(superBlinders);
