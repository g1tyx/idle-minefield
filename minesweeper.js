document.addEventListener('DOMContentLoaded', (event) => {

/////////////////////////
/// Upgrade Elements ///
///////////////////////

class GameUnit {
    constructor(name, upgradeCost, upgradeCostMultiplier, baseCost) {
        this.name = name;
        this.upgradeCost = upgradeCost;
        this.upgradeCostMultiplier = upgradeCostMultiplier;
        this.ownedElement = document.getElementById(`${name}-owned`);
        this.upgradeButton = document.getElementById(`${name}-upgrade`);
        this.costElement = document.getElementById(`${name}-cost`);
        this.upgradeButton.addEventListener('click', () => this.buyUpgrade(resources, resourceMapping[name]));
        this.lastEffect = Date.now();
        this.baseCost = baseCost;
        this.upgrades = 0;
        this.unlocked = false;
    }


    buyUpgrade(resourceObject, resourceName) {
        if (resourceObject[resourceName] >= this.upgradeCost) {
            resourceObject[resourceName] -= this.upgradeCost;
            this.upgrades++;
            this.upgradeCost *= this.upgradeCostMultiplier;
            updateCosts();
            updateText();
        } else {
        }
    }
}

class MilitaryUnit extends GameUnit {
    constructor(name, upgradeCost, upgradeCostMultiplier, baseCost, power, repthreshold) {
        super(name, upgradeCost, upgradeCostMultiplier, baseCost);
        this.power = power;
        this.repthreshold = repthreshold;
    }
}

let sweeper = new GameUnit('sweeper', 1, 1.5, 1);
let flagger = new GameUnit('flagger', 5, 1.5, 5);
let replenisher = new GameUnit('replenisher', 10, 999, 10);    
let retriever = new GameUnit('retriever', 10, 10, 10);
let sales = new GameUnit('sales', 100, 999, 100);
let invade = new GameUnit('invade', 1000, 1.5, 1000);
let autoSeller = new GameUnit('autoSeller', 5000, 1.5, 5000);

/// Neutral Military Units ///

let infantry = new MilitaryUnit('infantry', 100, 1.15, 100, 1, 0);
let infantry1 = new MilitaryUnit('infantry1', 4000, 1, 4000, 2, 0);
let infantry2 = new MilitaryUnit('infantry2', 30000, 2, 30000, 2, 0);
let infantry3 = new MilitaryUnit('infantry3', 1000000, 3, 1000000, 2, 0);
let mortar = new MilitaryUnit('mortar', 1100, 1.15, 1100, 5, 0);
let mortar1 = new MilitaryUnit('mortar1', 45000, 1, 45000, 2, 0);
let mortar2 = new MilitaryUnit('mortar2', 350000, 2, 350000, 2, 0);
let mortar3 = new MilitaryUnit('mortar3', 10000000, 3, 10000000, 2, 0);
let engineer = new MilitaryUnit('engineer', 12000, 1.15, 12000, 45, 0);
let engineer1 = new MilitaryUnit('engineer1', 500000, 1, 500000, 2, 0);
let engineer2 = new MilitaryUnit('engineer2', 4000000, 2, 4000000, 2, 0);
let engineer3 = new MilitaryUnit('engineer3', 130000000, 3, 130000000, 2, 0);
let artillery = new MilitaryUnit('artillery', 130000, 1.15, 130000, 250, 0);
let artillery1 = new MilitaryUnit('artillery1', 5500000, 1, 5500000, 2, 0);
let artillery2 = new MilitaryUnit('artillery2', 40000000, 2, 40000000, 2, 0);
let artillery3 = new MilitaryUnit('artillery3', 1400000000, 3, 1400000000, 2, 0);
let sniper = new MilitaryUnit('sniper', 1400000, 1.15, 1400000, 1250, 0);
let sniper1 = new MilitaryUnit('sniper1', 55000000, 1, 55000000, 2, 0);
let sniper2 = new MilitaryUnit('sniper2', 450000000, 2, 450000000, 2, 0);
let sniper3 = new MilitaryUnit('sniper3', 15000000000, 3, 15000000000, 2, 0);
let tank = new MilitaryUnit('tank', 20000000, 1.15, 20000000, 7500, 0);
let tank1 = new MilitaryUnit('tank1', 800000000, 1, 800000000, 2, 0);
let tank2 = new MilitaryUnit('tank2', 6500000000, 2, 6500000000, 2, 0);
let tank3 = new MilitaryUnit('tank3', 200000000000, 3, 200000000000, 2, 0);
let bomber = new MilitaryUnit('bomber', 330000000, 1.15, 330000000, 40000, 0);
let bomber1 = new MilitaryUnit('bomber1', 13000000000, 1, 13000000000, 2, 0);
let bomber2 = new MilitaryUnit('bomber2', 100000000000, 2, 100000000000, 2, 0);
let bomber3 = new MilitaryUnit('bomber3', 3500000000000, 3, 3500000000000, 2, 0);
let spy = new MilitaryUnit('spy', 5100000000, 1.15, 5100000000, 250000, 0);
let spy1 = new MilitaryUnit('spy1', 200000000000, 1, 200000000000, 2, 0);
let spy2 = new MilitaryUnit('spy2', 1500000000000, 2, 1500000000000, 2, 0);
let spy3 = new MilitaryUnit('spy3', 55000000000000, 3, 55000000000000, 2, 0);
let jet = new MilitaryUnit('jet', 75000000000, 1.15, 75000000000, 1500000, 0);
let jet1 = new MilitaryUnit('jet1', 3000000000000, 1, 3000000000000, 2, 0);
let jet2 = new MilitaryUnit('jet2', 25000000000000, 2, 25000000000000, 2, 0);
let jet3 = new MilitaryUnit('jet3', 800000000000000, 3, 800000000000000, 2, 0);
let stealth = new MilitaryUnit('stealth', 1000000000000, 1.15, 1000000000000, 10000000, 0);
let stealth1 = new MilitaryUnit('stealth1', 40000000000000, 1, 40000000000000, 2, 0);
let stealth2 = new MilitaryUnit('stealth2', 330000000000000, 2, 330000000000000, 2, 0);
let stealth3 = new MilitaryUnit('stealth3', 10000000000000000, 3, 10000000000000000, 2, 0);
let emp = new MilitaryUnit('emp', 14000000000000, 1.15, 14000000000000, 60000000, 0);
let emp1 = new MilitaryUnit('emp1', 550000000000000, 1, 550000000000000, 2, 0);
let emp2 = new MilitaryUnit('emp2', 4600000000000000, 2, 4600000000000000, 2, 0);
let emp3 = new MilitaryUnit('emp3', 150000000000000000, 3, 150000000000000000, 2, 0);
let cyber = new MilitaryUnit('cyber', 170000000000000, 1.15, 170000000000000, 400000000, 0);
let cyber1 = new MilitaryUnit('cyber1', 7000000000000000, 1, 7000000000000000, 2, 0);
let cyber2 = new MilitaryUnit('cyber2', 55000000000000000, 2, 55000000000000000, 2, 0);
let cyber3 = new MilitaryUnit('cyber3', 1800000000000000000, 3, 1800000000000000000, 2, 0);


/// Good Military Units ///

let decoy = new MilitaryUnit('decoy', 130000, 1.15, 130000, 400, 100);
let decoy1 = new MilitaryUnit('decoy1', 5500000, 1, 5500000, 2, 0);
let decoy2 = new MilitaryUnit('decoy2', 40000000, 2, 40000000, 2, 0);
let decoy3 = new MilitaryUnit('decoy3', 1400000000, 3, 1400000000, 2, 0);
let helicopter = new MilitaryUnit('helicopter', 1400000, 1.15, 1400000, 2000, 1000);
let helicopter1 = new MilitaryUnit('helicopter1', 55000000, 1, 55000000, 2, 0);
let helicopter2 = new MilitaryUnit('helicopter2', 450000000, 2, 450000000, 2, 0);
let helicopter3 = new MilitaryUnit('helicopter3', 15000000000, 3, 15000000000, 2, 0);
let submarine = new MilitaryUnit('submarine', 20000000, 1.15, 20000000, 12000, 10000);
let submarine1 = new MilitaryUnit('submarine1', 800000000, 1, 800000000, 2, 0);
let submarine2 = new MilitaryUnit('submarine2', 6500000000, 2, 6500000000, 2, 0);
let submarine3 = new MilitaryUnit('submarine3', 200000000000, 3, 200000000000, 2, 0);
let droid = new MilitaryUnit('droid', 330000000, 1.15, 330000000, 60000, 100000);
let droid1 = new MilitaryUnit('droid1', 13000000000, 1, 13000000000, 2, 0);
let droid2 = new MilitaryUnit('droid2', 100000000000, 2, 100000000000, 2, 0);
let droid3 = new MilitaryUnit('droid3', 3500000000000, 3, 3500000000000, 2, 0);
let shield = new MilitaryUnit('shield', 5100000000, 1.15, 5100000000, 400000, 1000000);
let shield1 = new MilitaryUnit('shield1', 200000000000, 1, 200000000000, 2, 0);
let shield2 = new MilitaryUnit('shield2', 1500000000000, 2, 1500000000000, 2, 0);
let shield3 = new MilitaryUnit('shield3', 55000000000000, 3, 55000000000000, 2, 0);
let medic = new MilitaryUnit('medic', 75000000000, 1.15, 75000000000, 2200000, 10000000);
let medic1 = new MilitaryUnit('medic1', 3000000000000, 1, 3000000000000, 2, 0);
let medic2 = new MilitaryUnit('medic2', 25000000000000, 2, 25000000000000, 2, 0);
let medic3 = new MilitaryUnit('medic3', 800000000000000, 3, 800000000000000, 2, 0);
let nuke = new MilitaryUnit('nuke', 1000000000000, 1.15, 1000000000000, 15000000, 100000000);
let nuke1 = new MilitaryUnit('nuke1', 40000000000000, 1, 40000000000000, 2, 0);
let nuke2 = new MilitaryUnit('nuke2', 330000000000000, 2, 330000000000000, 2, 0);
let nuke3 = new MilitaryUnit('nuke3', 10000000000000000, 3, 10000000000000000, 2, 0);
let platform = new MilitaryUnit('platform', 14000000000000, 1.15, 14000000000000, 90000000, 1000000000);
let platform1 = new MilitaryUnit('platform1', 550000000000000, 1, 550000000000000, 2, 0);
let platform2 = new MilitaryUnit('platform2', 4600000000000000, 2, 4600000000000000, 2, 0);
let platform3 = new MilitaryUnit('platform3', 150000000000000000, 3, 150000000000000000, 2, 0);


/// Bad Military Units ///

let landmine = new MilitaryUnit('landmine', 130000, 1.15, 130000, 400, -100);
let landmine1 = new MilitaryUnit('landmine1', 5500000, 1, 5500000, 2, 0);
let landmine2 = new MilitaryUnit('landmine2', 40000000, 2, 40000000, 2, 0);
let landmine3 = new MilitaryUnit('landmine3', 1400000000, 3, 1400000000, 2, 0);
let napalm = new MilitaryUnit('napalm', 1400000, 1.15, 1400000, 2000, -1000);
let napalm1 = new MilitaryUnit('napalm1', 55000000, 1, 55000000, 2, 0);
let napalm2 = new MilitaryUnit('napalm2', 450000000, 2, 450000000, 2, 0);
let napalm3 = new MilitaryUnit('napalm3', 15000000000, 3, 15000000000, 2, 0);
let drone = new MilitaryUnit('drone', 20000000, 1.15, 20000000, 12000, -10000);
let drone1 = new MilitaryUnit('drone1', 800000000, 1, 800000000, 2, 0);
let drone2 = new MilitaryUnit('drone2', 6500000000, 2, 6500000000, 2, 0);
let drone3 = new MilitaryUnit('drone3', 200000000000, 3, 200000000000, 2, 0);
let child = new MilitaryUnit('child', 330000000, 1.15, 330000000, 60000, -100000);
let child1 = new MilitaryUnit('child1', 13000000000, 1, 13000000000, 2, 0);
let child2 = new MilitaryUnit('child2', 100000000000, 2, 100000000000, 2, 0);
let child3 = new MilitaryUnit('child3', 3500000000000, 3, 3500000000000, 2, 0);
let ai = new MilitaryUnit('ai', 5100000000, 1.15, 5100000000, 400000, -1000000);
let ai1 = new MilitaryUnit('ai1', 200000000000, 1, 200000000000, 2, 0);
let ai2 = new MilitaryUnit('ai2', 1500000000000, 2, 1500000000000, 2, 0);
let ai3 = new MilitaryUnit('ai3', 55000000000000, 3, 55000000000000, 2, 0);
let mindcontrol = new MilitaryUnit('mindcontrol', 75000000000, 1.15, 75000000000, 2200000, -10000000);
let mindcontrol1 = new MilitaryUnit('mindcontrol1', 3000000000000, 1, 3000000000000, 2, 0);
let mindcontrol2 = new MilitaryUnit('mindcontrol2', 25000000000000, 2, 25000000000000, 2, 0);
let mindcontrol3 = new MilitaryUnit('mindcontrol3', 800000000000000, 3, 800000000000000, 2, 0);
let covid = new MilitaryUnit('covid', 1000000000000, 1.15, 1000000000000, 15000000, -100000000);
let covid1 = new MilitaryUnit('covid1', 40000000000000, 1, 40000000000000, 2, 0);
let covid2 = new MilitaryUnit('covid2', 330000000000000, 2, 330000000000000, 2, 0);
let covid3 = new MilitaryUnit('covid3', 10000000000000000, 3, 10000000000000000, 2, 0);
let deathstar = new MilitaryUnit('deathstar', 14000000000000, 1.15, 14000000000000, 90000000, -1000000000);
let deathstar1 = new MilitaryUnit('deathstar1', 550000000000000, 1, 550000000000000, 2, 0);
let deathstar2 = new MilitaryUnit('deathstar2', 4600000000000000, 2, 4600000000000000, 2, 0);
let deathstar3 = new MilitaryUnit('deathstar3', 150000000000000000, 3, 150000000000000000, 2, 0);

/// Sales Function ///
const countrySelect = document.getElementById('country-select');
const sellMinesButton = document.getElementById('sell-mines');
sellMinesButton.addEventListener('click', sellMines);   

//////////////////////
/// Save Elements ///
////////////////////

/// Player ///

let lastMilitary = Date.now();
let lastSave = Date.now();
let autoSellerActive = false;

let resources = {
    score: 0,  // flags
    minesRetrieved: 0,
    money: 0,
    reputation: 0,
    militaryPower: 0,
    invasionBonus: 0
};


const resourceMapping = {
    'sweeper': 'score',
    'flagger': 'score',
    'replenisher': 'score',
    'retriever': 'score',
    'sales': 'score',
    'invade': 'militaryPower',
    'infantry': 'money',
    'mortar': 'money',
    'engineer': 'money',
    'artillery': 'money',
    'sniper': 'money',
    'tank': 'money',
    'bomber': 'money',
    'spy': 'money',
    'jet': 'money',
    'stealth': 'money',
    'emp': 'money',
    'cyber': 'money',
    'decoy': 'money',
    'helicopter': 'money',
    'submarine': 'money',
    'droid': 'money',
    'shield': 'money',
    'medic': 'money',
    'nuke': 'money',
    'platform': 'money',
    'landmine': 'money',
    'napalm': 'money',
    'drone': 'money',
    'child': 'money',
    'ai': 'money',
    'mindcontrol': 'money',
    'covid': 'money',
    'deathstar': 'money',
    'infantry1': 'money',
    'infantry2': 'money',
    'infantry3': 'money',
    'mortar1': 'money',
    'mortar2': 'money',
    'mortar3': 'money',
    'engineer1': 'money',
    'engineer2': 'money',
    'engineer3': 'money',
    'artillery1': 'money',
    'artillery2': 'money',
    'artillery3': 'money',
    'sniper1': 'money',
    'sniper2': 'money',
    'sniper3': 'money',
    'tank1': 'money',
    'tank2': 'money',
    'tank3': 'money',
    'bomber1': 'money',
    'bomber2': 'money',
    'bomber3': 'money',
    'spy1': 'money',
    'spy2': 'money',
    'spy3': 'money',
    'jet1': 'money',
    'jet2': 'money',
    'jet3': 'money',
    'stealth1': 'money',
    'stealth2': 'money',
    'stealth3': 'money',
    'emp1': 'money',
    'emp2': 'money',
    'emp3': 'money',
    'cyber1': 'money',
    'cyber2': 'money',
    'cyber3': 'money',
    'decoy1': 'money',
    'decoy2': 'money',  
    'decoy3': 'money',
    'helicopter1': 'money',
    'helicopter2': 'money',
    'helicopter3': 'money',
    'submarine1': 'money',
    'submarine2': 'money',
    'submarine3': 'money',
    'droid1': 'money',
    'droid2': 'money',
    'droid3': 'money',
    'shield1': 'money',
    'shield2': 'money',
    'shield3': 'money',
    'medic1': 'money',
    'medic2': 'money',
    'medic3': 'money',
    'nuke1': 'money',
    'nuke2': 'money',
    'nuke3': 'money',
    'platform1': 'money',
    'platform2': 'money',
    'platform3': 'money',
    'landmine1': 'money',
    'landmine2': 'money',
    'landmine3': 'money',
    'napalm1': 'money',
    'napalm2': 'money',
    'napalm3': 'money',
    'drone1': 'money',
    'drone2': 'money',
    'drone3': 'money',
    'child1': 'money',
    'child2': 'money',
    'child3': 'money',
    'ai1': 'money',
    'ai2': 'money',
    'ai3': 'money',
    'mindcontrol1': 'money',
    'mindcontrol2': 'money',
    'mindcontrol3': 'money',
    'covid1': 'money',
    'covid2': 'money',
    'covid3': 'money',
    'deathstar1': 'money',
    'deathstar2': 'money',
    'deathstar3': 'money',
    'autoSeller': 'score'
};

/// Save Function ///

function saveGame() {
    let gameData = {
        resources: resources,
        sweeper: sweeper.upgrades,
        flagger: flagger.upgrades,
        replenisher: replenisher.upgrades,
        retriever: retriever.upgrades,
        sales: sales.upgrades,
        infantry: infantry.upgrades,
        mortar: mortar.upgrades,
        invade: invade.upgrades,
        engineer: engineer.upgrades,
        artillery: artillery.upgrades,
        sniper: sniper.upgrades,
        tank: tank.upgrades,
        bomber: bomber.upgrades,
        spy: spy.upgrades,
        jet: jet.upgrades,
        stealth: stealth.upgrades,
        emp: emp.upgrades,
        cyber: cyber.upgrades,
        decoy: decoy.upgrades,
        helicopter: helicopter.upgrades,
        submarine: submarine.upgrades,
        droid: droid.upgrades,
        shield: shield.upgrades,
        medic: medic.upgrades,
        nuke: nuke.upgrades,
        platform: platform.upgrades,
        landmine: landmine.upgrades,
        napalm: napalm.upgrades,
        drone: drone.upgrades,
        child: child.upgrades,
        ai: ai.upgrades,
        mindcontrol: mindcontrol.upgrades,
        covid: covid.upgrades,
        deathstar: deathstar.upgrades,
        infantry1: infantry1.upgrades,
        infantry2: infantry2.upgrades,
        infantry3: infantry3.upgrades,
        mortar1: mortar1.upgrades,
        mortar2: mortar2.upgrades,
        mortar3: mortar3.upgrades,
        engineer1: engineer1.upgrades,
        engineer2: engineer2.upgrades,
        engineer3: engineer3.upgrades,
        artillery1: artillery1.upgrades,
        artillery2: artillery2.upgrades,
        artillery3: artillery3.upgrades,
        sniper1: sniper1.upgrades, 
        sniper2: sniper2.upgrades,
        sniper3: sniper3.upgrades,
        tank1: tank1.upgrades,
        tank2: tank2.upgrades,
        tank3: tank3.upgrades,
        bomber1: bomber1.upgrades,
        bomber2: bomber2.upgrades,
        bomber3: bomber3.upgrades,
        spy1: spy1.upgrades,
        spy2: spy2.upgrades,
        spy3: spy3.upgrades,
        jet1: jet1.upgrades,
        jet2: jet2.upgrades,
        jet3: jet3.upgrades,
        stealth1: stealth1.upgrades,
        stealth2: stealth2.upgrades,
        stealth3: stealth3.upgrades,
        emp1: emp1.upgrades,
        emp2: emp2.upgrades,
        emp3: emp3.upgrades,
        cyber1: cyber1.upgrades,
        cyber2: cyber2.upgrades,
        cyber3: cyber3.upgrades,
        decoy1: decoy1.upgrades,
        decoy2: decoy2.upgrades,
        decoy3: decoy3.upgrades,
        helicopter1: helicopter1.upgrades,
        helicopter2: helicopter2.upgrades,
        helicopter3: helicopter3.upgrades,
        submarine1: submarine1.upgrades,
        submarine2: submarine2.upgrades,
        submarine3: submarine3.upgrades,
        droid1: droid1.upgrades,
        droid2: droid2.upgrades,
        droid3: droid3.upgrades,
        shield1: shield1.upgrades,
        shield2: shield2.upgrades,
        shield3: shield3.upgrades,
        medic1: medic1.upgrades,
        medic2: medic2.upgrades,
        medic3: medic3.upgrades,
        nuke1: nuke1.upgrades,
        nuke2: nuke2.upgrades,
        nuke3: nuke3.upgrades,
        platform1: platform1.upgrades,
        platform2: platform2.upgrades,
        platform3: platform3.upgrades,
        landmine1: landmine1.upgrades,
        landmine2: landmine2.upgrades,
        landmine3: landmine3.upgrades,
        napalm1: napalm1.upgrades,
        napalm2: napalm2.upgrades,
        napalm3: napalm3.upgrades,
        drone1: drone1.upgrades,
        drone2: drone2.upgrades,
        drone3: drone3.upgrades,
        child1: child1.upgrades,
        child2: child2.upgrades,
        child3: child3.upgrades,
        ai1: ai1.upgrades,
        ai2: ai2.upgrades,
        ai3: ai3.upgrades,
        mindcontrol1: mindcontrol1.upgrades,
        mindcontrol2: mindcontrol2.upgrades,
        mindcontrol3: mindcontrol3.upgrades,
        covid1: covid1.upgrades,
        covid2: covid2.upgrades,
        covid3: covid3.upgrades,
        deathstar1: deathstar1.upgrades,
        deathstar2: deathstar2.upgrades,
        deathstar3: deathstar3.upgrades,
        autoSeller: autoSeller.upgrades,
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
    console.log('Game saved:', gameData);
}


/// Load Function ///

function loadGame() {
    let savedData = localStorage.getItem('gameData');
    if (savedData === null) return;  // No saved data found
    
    savedData = JSON.parse(savedData);

    resources = savedData.resources ?? resources;
    sweeper.upgrades = savedData.sweeper ?? sweeper.upgrades;
    flagger.upgrades = savedData.flagger ?? flagger.upgrades;
    replenisher.upgrades = savedData.replenisher ?? replenisher.upgrades;
    retriever.upgrades = savedData.retriever ?? retriever.upgrades;
    sales.upgrades = savedData.sales ?? sales.upgrades;
    infantry.upgrades = savedData.infantry ?? infantry.upgrades;
    mortar.upgrades = savedData.mortar ?? mortar.upgrades;
    invade.upgrades = savedData.invade ?? invade.upgrades;
    engineer.upgrades = savedData.engineer ?? engineer.upgrades;
    artillery.upgrades = savedData.artillery ?? artillery.upgrades;
    sniper.upgrades = savedData.sniper ?? sniper.upgrades;
    tank.upgrades = savedData.tank ?? tank.upgrades;
    bomber.upgrades = savedData.bomber ?? bomber.upgrades;
    spy.upgrades = savedData.spy ?? spy.upgrades;
    jet.upgrades = savedData.jet ?? jet.upgrades;
    stealth.upgrades = savedData.stealth ?? stealth.upgrades;
    emp.upgrades = savedData.emp ?? emp.upgrades;
    cyber.upgrades = savedData.cyber ?? cyber.upgrades;
    decoy.upgrades = savedData.decoy ?? decoy.upgrades;
    helicopter.upgrades = savedData.helicopter ?? helicopter.upgrades;
    submarine.upgrades = savedData.submarine ?? submarine.upgrades;
    droid.upgrades = savedData.droid ?? droid.upgrades;
    shield.upgrades = savedData.shield ?? shield.upgrades;
    medic.upgrades = savedData.medic ?? medic.upgrades;
    nuke.upgrades = savedData.nuke ?? nuke.upgrades;
    platform.upgrades = savedData.platform ?? platform.upgrades;
    landmine.upgrades = savedData.landmine ?? landmine.upgrades;
    napalm.upgrades = savedData.napalm ?? napalm.upgrades;
    drone.upgrades = savedData.drone ?? drone.upgrades;
    child.upgrades = savedData.child ?? child.upgrades;
    ai.upgrades = savedData.ai ?? ai.upgrades;
    mindcontrol.upgrades = savedData.mindcontrol ?? mindcontrol.upgrades;
    covid.upgrades = savedData.covid ?? covid.upgrades;
    deathstar.upgrades = savedData.deathstar ?? deathstar.upgrades;
    infantry1.upgrades = savedData.infantry1 ?? infantry1.upgrades;
    infantry2.upgrades = savedData.infantry2 ?? infantry2.upgrades;
    infantry3.upgrades = savedData.infantry3 ?? infantry3.upgrades;
    mortar1.upgrades = savedData.mortar1 ?? mortar1.upgrades;
    mortar2.upgrades = savedData.mortar2 ?? mortar2.upgrades;
    mortar3.upgrades = savedData.mortar3 ?? mortar3.upgrades;
    engineer1.upgrades = savedData.engineer1 ?? engineer1.upgrades;
    engineer2.upgrades = savedData.engineer2 ?? engineer2.upgrades;
    engineer3.upgrades = savedData.engineer3 ?? engineer3.upgrades;
    artillery1.upgrades = savedData.artillery1 ?? artillery1.upgrades; 
    artillery2.upgrades = savedData.artillery2 ?? artillery2.upgrades;
    artillery3.upgrades = savedData.artillery3 ?? artillery3.upgrades;
    sniper1.upgrades = savedData.sniper1 ?? sniper1.upgrades;
    sniper2.upgrades = savedData.sniper2 ?? sniper2.upgrades;
    sniper3.upgrades = savedData.sniper3 ?? sniper3.upgrades;
    tank1.upgrades = savedData.tank1 ?? tank1.upgrades;
    tank2.upgrades = savedData.tank2 ?? tank2.upgrades;
    tank3.upgrades = savedData.tank3 ?? tank3.upgrades;
    bomber1.upgrades = savedData.bomber1 ?? bomber1.upgrades;
    bomber2.upgrades = savedData.bomber2 ?? bomber2.upgrades;
    bomber3.upgrades = savedData.bomber3 ?? bomber3.upgrades;
    spy1.upgrades = savedData.spy1 ?? spy1.upgrades;
    spy2.upgrades = savedData.spy2 ?? spy2.upgrades;
    spy3.upgrades = savedData.spy3 ?? spy3.upgrades;
    jet1.upgrades = savedData.jet1 ?? jet1.upgrades;
    jet2.upgrades = savedData.jet2 ?? jet2.upgrades;
    jet3.upgrades = savedData.jet3 ?? jet3.upgrades;
    stealth1.upgrades = savedData.stealth1 ?? stealth1.upgrades;
    stealth2.upgrades = savedData.stealth2 ?? stealth2.upgrades;
    stealth3.upgrades = savedData.stealth3 ?? stealth3.upgrades;
    emp1.upgrades = savedData.emp1 ?? emp1.upgrades;
    emp2.upgrades = savedData.emp2 ?? emp2.upgrades;
    emp3.upgrades = savedData.emp3 ?? emp3.upgrades;
    cyber1.upgrades = savedData.cyber1 ?? cyber1.upgrades;
    cyber2.upgrades = savedData.cyber2 ?? cyber2.upgrades;
    cyber3.upgrades = savedData.cyber3 ?? cyber3.upgrades;
    decoy1.upgrades = savedData.decoy1 ?? decoy1.upgrades;
    decoy2.upgrades = savedData.decoy2 ?? decoy2.upgrades;
    decoy3.upgrades = savedData.decoy3 ?? decoy3.upgrades;
    helicopter1.upgrades = savedData.helicopter1 ?? helicopter1.upgrades;
    helicopter2.upgrades = savedData.helicopter2 ?? helicopter2.upgrades;
    helicopter3.upgrades = savedData.helicopter3 ?? helicopter3.upgrades;
    submarine1.upgrades = savedData.submarine1 ?? submarine1.upgrades;
    submarine2.upgrades = savedData.submarine2 ?? submarine2.upgrades;
    submarine3.upgrades = savedData.submarine3 ?? submarine3.upgrades;
    droid1.upgrades = savedData.droid1 ?? droid1.upgrades;
    droid2.upgrades = savedData.droid2 ?? droid2.upgrades;
    droid3.upgrades = savedData.droid3 ?? droid3.upgrades;
    shield1.upgrades = savedData.shield1 ?? shield1.upgrades;
    shield2.upgrades = savedData.shield2 ?? shield2.upgrades;
    shield3.upgrades = savedData.shield3 ?? shield3.upgrades;
    medic1.upgrades = savedData.medic1 ?? medic1.upgrades;
    medic2.upgrades = savedData.medic2 ?? medic2.upgrades;
    medic3.upgrades = savedData.medic3 ?? medic3.upgrades;
    nuke1.upgrades = savedData.nuke1 ?? nuke1.upgrades;
    nuke2.upgrades = savedData.nuke2 ?? nuke2.upgrades;
    nuke3.upgrades = savedData.nuke3 ?? nuke3.upgrades;
    napalm1.upgrades = savedData.napalm1 ?? napalm1.upgrades;
    napalm2.upgrades = savedData.napalm2 ?? napalm2.upgrades;
    napalm3.upgrades = savedData.napalm3 ?? napalm3.upgrades;
    landmine1.upgrades = savedData.mine1 ?? landmine1.upgrades;
    landmine2.upgrades = savedData.mine2 ?? landmine2.upgrades;
    landmine3.upgrades = savedData.mine3 ?? landmine3.upgrades;
    drone1.upgrades = savedData.drone1 ?? drone1.upgrades;
    drone2.upgrades = savedData.drone2 ?? drone2.upgrades;
    drone3.upgrades = savedData.drone3 ?? drone3.upgrades;
    child1.upgrades = savedData.child1 ?? child1.upgrades;
    child2.upgrades = savedData.child2 ?? child2.upgrades;
    child3.upgrades = savedData.child3 ?? child3.upgrades;
    ai1.upgrades = savedData.ai1 ?? ai1.upgrades;
    ai2.upgrades = savedData.ai2 ?? ai2.upgrades;
    ai3.upgrades = savedData.ai3 ?? ai3.upgrades;
    mindcontrol1.upgrades = savedData.mindcontrol1 ?? mindcontrol1.upgrades;
    mindcontrol2.upgrades = savedData.mindcontrol2 ?? mindcontrol2.upgrades;
    mindcontrol3.upgrades = savedData.mindcontrol3 ?? mindcontrol3.upgrades;
    covid1.upgrades = savedData.covid1 ?? covid1.upgrades;
    covid2.upgrades = savedData.covid2 ?? covid2.upgrades;
    covid3.upgrades = savedData.covid3 ?? covid3.upgrades;
    deathstar1.upgrades = savedData.deathstar1 ?? deathstar1.upgrades;
    deathstar2.upgrades = savedData.deathstar2 ?? deathstar2.upgrades;
    deathstar3.upgrades = savedData.deathstar3 ?? deathstar3.upgrades;
    autoSeller.upgrades = savedData.autoSeller ?? autoSeller.upgrades;

    console.log('Game loaded:', savedData);
}
///////////////////////
/// Other Elements ///
/////////////////////
/// Minefield Size ///

    let size = 5;
    let mines = 3;

    const minefield = document.getElementById('minefield');
    const resetButton = document.getElementById('reset');
    const scoreElement = document.getElementById('score');
    const minesRetrievedElement = document.getElementById('minesRetrieved');
    const moneyElement = document.getElementById('money');
    const reputationElement = document.getElementById('reputation');
    const militaryPowerElement = document.getElementById('militaryPower');
    resetButton.addEventListener('click', resetGame);

///////////////////////
/// Main Functions ///
/////////////////////
/// Start Game ///
function startGame() {
    mineArray = [];
    markedArray = [];
    revealedArray = [];
    let cellSize = size > 10 ? 40 * (10 / size) : 40;
    let fontSize = cellSize / 2; // Half of cell size
    let imageSize = fontSize ; // Same as font size
    document.documentElement.style.setProperty('--cell-size', `${cellSize}px`);
    document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
    document.documentElement.style.setProperty('--image-size', `${imageSize}px`);
    document.getElementById('minefield').style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    document.getElementById('minefield').style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;
    gameOver = false;
    scoreElement.textContent = `Flags: ${resources.score}`;
    minesRetrievedElement.textContent = `Mines: ${resources.minesRetrieved}`;
    moneyElement.textContent = `Money: ${resources.money}`;
    reputationElement.textContent = `Reputation: ${resources.reputation}`;
    militaryPowerElement.textContent = `Military Power: ${resources.militaryPower}`;

    // Create cells and add them to the minefield
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener('click', () => revealCell(i));
        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            markCell(i);
        });
        minefield.appendChild(cell);
    }

    // Place mines randomly
    for (let i = 0; i < mines; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * size * size);
        } while (mineArray.includes(index));
        mineArray.push(index);
    }
    revealedArray = Array(size*size).fill(false);
}

/// Game Loop ///

    function gameLoop() {
        let now = Date.now();
        /// Run Sweeper ///
        if (sweeper.upgrades > 0 && now - sweeper.lastEffect >= 1000/sweeper.upgrades) {
            revealRandomNonMineCell();
            sweeper.lastEffect = now;
        }
        /// Run Flagger ///
        if (flagger.upgrades > 0 && now - flagger.lastEffect >= 3000/flagger.upgrades) {
            flagRandomMineCell();
            flagger.lastEffect = now;
        }
        /// Run Replenisher ///
        if (replenisher.upgrades > 0) {
            triggerReplenisher();
            replenisher.lastEffect = now;
        }

        if (autoSeller.upgrades > 0 && now - autoSeller.lastEffect >= 1000/autoSeller.upgrades) {
            autoSellerActive = document.getElementById("toggleSwitch").checked;
            if (autoSellerActive == true){
            resources.money += 20 * resources.minesRetrieved;
            resources.minesRetrieved = 0;
            moneyElement.textContent = `Money: ${resources.money}`;
            minesRetrievedElement.textContent = `Mines: ${resources.minesRetrieved}`;
            autoSeller.lastEffect = now;
            }
        }   
        /// Run Save ///
        if (now - lastSave >= 5000) {
            saveGame();
            lastSave = now;
        }
        /// Run Military ///
        if (now - lastMilitary >= 100) {
            let oldMilitaryPower = resources.militaryPower;

            let unitArray = [infantry1, infantry2, infantry3, mortar1, mortar2, mortar3, engineer1, engineer2, engineer3,
                artillery1, artillery2, artillery3, sniper1, sniper2, sniper3, tank1, tank2, tank3, bomber1, bomber2, bomber3,
                spy1, spy2, spy3, jet1, jet2, jet3, stealth1, stealth2, stealth3, emp1, emp2, emp3, cyber1, cyber2, cyber3, decoy1,
                decoy2, decoy3, helicopter1, helicopter2, helicopter3, mindcontrol1, mindcontrol2, mindcontrol3, 
                covid1, covid2, covid3, deathstar1, deathstar2, deathstar3, submarine1, submarine2, submarine3, droid1,
                droid2, droid3, shield1, shield2, shield3, medic1, medic2, medic3, nuke1, nuke2, nuke3, platform1, platform2, platform3,
                landmine1, landmine2, landmine3, napalm1, napalm2, napalm3, drone1, drone2, drone3, child1, child2, child3, ai1, ai2, ai3];

            unitArray.forEach((unit) => {
                if (unit.upgrades >= 1) {
                    unit.upgrades = 1;
                    unit.upgradeButton.style.display = 'none';
                    window[`${unit.name}Multiplier`] = 2;
                } else {
                    unit.upgradeButton.style.display = 'flex';
                    window[`${unit.name}Multiplier`] = 1;
                }
            });

        
            resources.militaryPower =
                resources.militaryPower +
                (((infantry.upgrades * infantry.power * infantry1Multiplier * infantry2Multiplier * infantry3Multiplier)) +
                ((mortar.upgrades * mortar.power * mortar1Multiplier * mortar2Multiplier * mortar3Multiplier)) +
                ((engineer.upgrades * engineer.power * engineer1Multiplier * engineer2Multiplier * engineer3Multiplier)) +
                ((artillery.upgrades * artillery.power * artillery1Multiplier * artillery2Multiplier * artillery3Multiplier)) +
                ((sniper.upgrades * sniper.power * sniper1Multiplier * sniper2Multiplier * sniper3Multiplier)) +
                ((tank.upgrades * tank.power * tank1Multiplier * tank2Multiplier * tank3Multiplier)) +
                ((bomber.upgrades * bomber.power * bomber1Multiplier * bomber2Multiplier * bomber3Multiplier)) +
                ((spy.upgrades * spy.power * spy1Multiplier * spy2Multiplier * spy3Multiplier)) +
                ((jet.upgrades * jet.power * jet1Multiplier * jet2Multiplier * jet3Multiplier)) +
                ((stealth.upgrades * stealth.power * stealth1Multiplier * stealth2Multiplier * stealth3Multiplier)) +
                ((emp.upgrades * emp.power * emp1Multiplier * emp2Multiplier * emp3Multiplier)) +
                ((cyber.upgrades * cyber.power * cyber1Multiplier * cyber2Multiplier * cyber3Multiplier)) +
                ((decoy.upgrades * decoy.power * decoy1Multiplier * decoy2Multiplier * decoy3Multiplier)) +
                ((helicopter.upgrades * helicopter.power * helicopter1Multiplier * helicopter2Multiplier * helicopter3Multiplier)) +
                ((submarine.upgrades * submarine.power * submarine1Multiplier * submarine2Multiplier * submarine3Multiplier)) +
                ((droid.upgrades * droid.power * droid1Multiplier * droid2Multiplier * droid3Multiplier)) +
                ((shield.upgrades * shield.power * shield1Multiplier * shield2Multiplier * shield3Multiplier)) +
                ((medic.upgrades * medic.power * medic1Multiplier * medic2Multiplier * medic3Multiplier)) +
                ((nuke.upgrades * nuke.power * nuke1Multiplier * nuke2Multiplier * nuke3Multiplier)) +
                ((platform.upgrades * platform.power * platform1Multiplier * platform2Multiplier * platform3Multiplier)) +
                ((landmine.upgrades * landmine.power * landmine1Multiplier * landmine2Multiplier * landmine3Multiplier)) +
                ((napalm.upgrades * napalm.power * napalm1Multiplier * napalm2Multiplier * napalm3Multiplier)) +
                ((drone.upgrades * drone.power * drone1Multiplier * drone2Multiplier * drone3Multiplier)) +
                ((child.upgrades * child.power * child1Multiplier * child2Multiplier * child3Multiplier)) +
                ((ai.upgrades * ai.power * ai1Multiplier * ai2Multiplier * ai3Multiplier)) +
                ((mindcontrol.upgrades * mindcontrol.power * mindcontrol1Multiplier * mindcontrol2Multiplier * mindcontrol3Multiplier)) +
                ((covid.upgrades * covid.power * covid1Multiplier * covid2Multiplier * covid3Multiplier)) +
                ((deathstar.upgrades * deathstar.power * deathstar1Multiplier * deathstar2Multiplier * deathstar3Multiplier))/10);
            lastMilitary = now;
            MilitaryPowerPerSecond = resources.militaryPower - oldMilitaryPower;
          }
        
        requestAnimationFrame(gameLoop);
        updateUnlocks();
        updateText();
        updateCosts();
    }

/// Reset Game ///

    function resetGame() {
        retrieveMines();
        // Remove all cells
        while (minefield.firstChild) {
            minefield.firstChild.remove();
        }
        size = 5+invade.upgrades;
        mines = 3+invade.upgrades**1.5;
        startGame();
        revealedArray.fill(false);
    }

/// Mark Cell ///

    function markCell(index) {
        if (!gameOver) {
            const cell = minefield.childNodes[index];
            if (!cell.classList.contains('flagged') && cell.textContent === '') {
                cell.classList.add('flagged');
                markedArray.push(index);
                checkWinCondition();
            } else if (cell.classList.contains('flagged')) {
                cell.classList.remove('flagged');
                const markIndex = markedArray.indexOf(index);
                markedArray.splice(markIndex, 1);
            }
        }
    }

/// Reveal cell function ///

function revealCell(index) {
    if (!gameOver && !markedArray.includes(index) && !revealedArray[index]) {
        const cell = minefield.childNodes[index];
        let count = 0;
        const x = index % size;
        const y = Math.floor(index / size);
        let surrounding = [];

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                    const newIndex = ny * size + nx;
                    if (mineArray.includes(newIndex)) {
                        count++;
                    }
                    surrounding.push(newIndex);
                }
            }
        }
        revealedArray[index] = true;

        if (mineArray.includes(index)) {
            cell.classList.add('mine');
            gameOver = true;
        } else {
            cell.textContent = count || '';
            cell.style.backgroundColor = '#a9aaa9';
            if (count === 0) {
                surrounding.forEach(surroundIndex => {
                    revealCell(surroundIndex);
                });
            }
        }
    }
}

/// Check win condition function ///

    function checkWinCondition() {
        if (markedArray.length === mineArray.length) {
            let win = true;
            for (let i = 0; i < mineArray.length; i++) {
                if (!markedArray.includes(mineArray[i])) {
                    win = false;
                    break;
                }
            }

            if (win) {
                gameOver = true;
                resources.invasionBonus = invade.upgrades*mines;
                resources.score = Math.round(resources.score+mines+resources.invasionBonus);
                scoreElement.textContent = `Flags: ${resources.score}`;
            }
        }
    }


/// Update text ///
    function updateText() {
        scoreElement.textContent = `Flags: ${formatNumber(resources.score)}`;
        moneyElement.textContent = `Money: ${formatNumber(resources.money)}`;
        militaryPowerElement.textContent = `Military Power: ${formatNumber(resources.militaryPower)}`;
        reputationElement.textContent = `Reputation: ${formatNumber(resources.reputation)}`;
        minesRetrievedElement.textContent = `Mines: ${formatNumber(resources.minesRetrieved)}`;
        sweeper.ownedElement.textContent = sweeper.upgrades;
        sweeper.costElement.textContent = formatNumber(sweeper.upgradeCost);
        flagger.ownedElement.textContent = flagger.upgrades;
        flagger.costElement.textContent = formatNumber(flagger.upgradeCost);
        replenisher.ownedElement.textContent = replenisher.upgrades;
        replenisher.costElement.textContent = formatNumber(replenisher.upgradeCost);
        retriever.ownedElement.textContent = retriever.upgrades;
        retriever.costElement.textContent = formatNumber(retriever.upgradeCost);
        infantry.costElement.textContent = formatNumber(infantry.upgradeCost);
        infantry.ownedElement.textContent = infantry.upgrades;
        invade.costElement.textContent = formatNumber(invade.upgradeCost);
        invade.ownedElement.textContent = invade.upgrades;
        mortar.costElement.textContent = formatNumber(mortar.upgradeCost);
        mortar.ownedElement.textContent = mortar.upgrades;
        engineer.costElement.textContent = formatNumber(engineer.upgradeCost);
        engineer.ownedElement.textContent = engineer.upgrades;
        artillery.costElement.textContent = formatNumber(artillery.upgradeCost);
        artillery.ownedElement.textContent = artillery.upgrades;
        sniper.costElement.textContent = formatNumber(sniper.upgradeCost);
        sniper.ownedElement.textContent = sniper.upgrades;
        tank.costElement.textContent = formatNumber(tank.upgradeCost);
        tank.ownedElement.textContent = tank.upgrades;
        bomber.costElement.textContent = formatNumber(bomber.upgradeCost);
        bomber.ownedElement.textContent = bomber.upgrades;
        spy.costElement.textContent = formatNumber(spy.upgradeCost);
        spy.ownedElement.textContent = spy.upgrades;
        jet.costElement.textContent = formatNumber(jet.upgradeCost);
        jet.ownedElement.textContent = jet.upgrades;
        stealth.costElement.textContent = formatNumber(stealth.upgradeCost);
        stealth.ownedElement.textContent = stealth.upgrades;
        emp.costElement.textContent = formatNumber(emp.upgradeCost);
        emp.ownedElement.textContent = emp.upgrades;
        cyber.costElement.textContent = formatNumber(cyber.upgradeCost);
        cyber.ownedElement.textContent = cyber.upgrades;
        decoy.costElement.textContent = formatNumber(decoy.upgradeCost);
        decoy.ownedElement.textContent = decoy.upgrades;
        helicopter.costElement.textContent = formatNumber(helicopter.upgradeCost);
        helicopter.ownedElement.textContent = helicopter.upgrades;
        submarine.costElement.textContent = formatNumber(submarine.upgradeCost);
        submarine.ownedElement.textContent = submarine.upgrades;
        droid.costElement.textContent = formatNumber(droid.upgradeCost);
        droid.ownedElement.textContent = droid.upgrades;
        shield.costElement.textContent = formatNumber(shield.upgradeCost);
        shield.ownedElement.textContent = shield.upgrades;
        medic.costElement.textContent = formatNumber(medic.upgradeCost);
        medic.ownedElement.textContent = medic.upgrades;
        nuke.costElement.textContent = formatNumber(nuke.upgradeCost);
        nuke.ownedElement.textContent = nuke.upgrades;
        platform.costElement.textContent = formatNumber(platform.upgradeCost);
        platform.ownedElement.textContent = platform.upgrades;
        landmine.costElement.textContent = formatNumber(landmine.upgradeCost);
        landmine.ownedElement.textContent = landmine.upgrades;
        napalm.costElement.textContent = formatNumber(napalm.upgradeCost);
        napalm.ownedElement.textContent = napalm.upgrades;
        drone.costElement.textContent = formatNumber(drone.upgradeCost);
        drone.ownedElement.textContent = drone.upgrades;
        child.costElement.textContent = formatNumber(child.upgradeCost);
        child.ownedElement.textContent = child.upgrades;
        ai.costElement.textContent = formatNumber(ai.upgradeCost);
        ai.ownedElement.textContent = ai.upgrades;
        mindcontrol.costElement.textContent = formatNumber(mindcontrol.upgradeCost);
        mindcontrol.ownedElement.textContent = mindcontrol.upgrades;
        covid.costElement.textContent = formatNumber(covid.upgradeCost);
        covid.ownedElement.textContent = covid.upgrades;
        deathstar.costElement.textContent = formatNumber(deathstar.upgradeCost);
        deathstar.ownedElement.textContent = deathstar.upgrades;
        infantry1.costElement.textContent = formatNumber(infantry1.upgradeCost);
        infantry2.costElement.textContent = formatNumber(infantry2.upgradeCost);
        infantry3.costElement.textContent = formatNumber(infantry3.upgradeCost);
        mortar1.costElement.textContent = formatNumber(mortar1.upgradeCost);
        mortar2.costElement.textContent = formatNumber(mortar2.upgradeCost);
        mortar3.costElement.textContent = formatNumber(mortar3.upgradeCost);
        engineer1.costElement.textContent = formatNumber(engineer1.upgradeCost);
        engineer2.costElement.textContent = formatNumber(engineer2.upgradeCost);
        engineer3.costElement.textContent = formatNumber(engineer3.upgradeCost);
        artillery1.costElement.textContent = formatNumber(artillery1.upgradeCost);
        artillery2.costElement.textContent = formatNumber(artillery2.upgradeCost);
        artillery3.costElement.textContent = formatNumber(artillery3.upgradeCost);
        sniper1.costElement.textContent = formatNumber(sniper1.upgradeCost);
        sniper2.costElement.textContent = formatNumber(sniper2.upgradeCost);
        sniper3.costElement.textContent = formatNumber(sniper3.upgradeCost);
        tank1.costElement.textContent = formatNumber(tank1.upgradeCost);
        tank2.costElement.textContent = formatNumber(tank2.upgradeCost);
        tank3.costElement.textContent = formatNumber(tank3.upgradeCost);
        bomber1.costElement.textContent = formatNumber(bomber1.upgradeCost);
        bomber2.costElement.textContent = formatNumber(bomber2.upgradeCost);
        bomber3.costElement.textContent = formatNumber(bomber3.upgradeCost);
        spy1.costElement.textContent = formatNumber(spy1.upgradeCost);
        spy2.costElement.textContent = formatNumber(spy2.upgradeCost);
        spy3.costElement.textContent = formatNumber(spy3.upgradeCost);
        jet1.costElement.textContent = formatNumber(jet1.upgradeCost);
        jet2.costElement.textContent = formatNumber(jet2.upgradeCost);
        jet3.costElement.textContent = formatNumber(jet3.upgradeCost);
        stealth1.costElement.textContent = formatNumber(stealth1.upgradeCost);
        stealth2.costElement.textContent = formatNumber(stealth2.upgradeCost);
        stealth3.costElement.textContent = formatNumber(stealth3.upgradeCost);
        emp1.costElement.textContent = formatNumber(emp1.upgradeCost);
        emp2.costElement.textContent = formatNumber(emp2.upgradeCost);
        emp3.costElement.textContent = formatNumber(emp3.upgradeCost);
        cyber1.costElement.textContent = formatNumber(cyber1.upgradeCost);
        cyber2.costElement.textContent = formatNumber(cyber2.upgradeCost);
        cyber3.costElement.textContent = formatNumber(cyber3.upgradeCost);
        decoy1.costElement.textContent = formatNumber(decoy1.upgradeCost);
        decoy2.costElement.textContent = formatNumber(decoy2.upgradeCost);
        decoy3.costElement.textContent = formatNumber(decoy3.upgradeCost);
        helicopter1.costElement.textContent = formatNumber(helicopter1.upgradeCost);
        helicopter2.costElement.textContent = formatNumber(helicopter2.upgradeCost);
        helicopter3.costElement.textContent = formatNumber(helicopter3.upgradeCost);
        submarine1.costElement.textContent = formatNumber(submarine1.upgradeCost);
        submarine2.costElement.textContent = formatNumber(submarine2.upgradeCost);
        submarine3.costElement.textContent = formatNumber(submarine3.upgradeCost);
        droid1.costElement.textContent = formatNumber(droid1.upgradeCost);
        droid2.costElement.textContent = formatNumber(droid2.upgradeCost);
        droid3.costElement.textContent = formatNumber(droid3.upgradeCost);
        shield1.costElement.textContent = formatNumber(shield1.upgradeCost);
        shield2.costElement.textContent = formatNumber(shield2.upgradeCost);
        shield3.costElement.textContent = formatNumber(shield3.upgradeCost);
        medic1.costElement.textContent = formatNumber(medic1.upgradeCost);
        medic2.costElement.textContent = formatNumber(medic2.upgradeCost);
        medic3.costElement.textContent = formatNumber(medic3.upgradeCost);
        nuke1.costElement.textContent = formatNumber(nuke1.upgradeCost);
        nuke2.costElement.textContent = formatNumber(nuke2.upgradeCost);
        nuke3.costElement.textContent = formatNumber(nuke3.upgradeCost);
        platform1.costElement.textContent = formatNumber(platform1.upgradeCost);
        platform2.costElement.textContent = formatNumber(platform2.upgradeCost);
        platform3.costElement.textContent = formatNumber(platform3.upgradeCost);
        landmine1.costElement.textContent = formatNumber(landmine1.upgradeCost);
        landmine2.costElement.textContent = formatNumber(landmine2.upgradeCost);
        landmine3.costElement.textContent = formatNumber(landmine3.upgradeCost);
        napalm1.costElement.textContent = formatNumber(napalm1.upgradeCost);
        napalm2.costElement.textContent = formatNumber(napalm2.upgradeCost);
        napalm3.costElement.textContent = formatNumber(napalm3.upgradeCost);
        drone1.costElement.textContent = formatNumber(drone1.upgradeCost);
        drone2.costElement.textContent = formatNumber(drone2.upgradeCost);
        drone3.costElement.textContent = formatNumber(drone3.upgradeCost);
        child1.costElement.textContent = formatNumber(child1.upgradeCost);
        child2.costElement.textContent = formatNumber(child2.upgradeCost);
        child3.costElement.textContent = formatNumber(child3.upgradeCost);
        ai1.costElement.textContent = formatNumber(ai1.upgradeCost);
        ai2.costElement.textContent = formatNumber(ai2.upgradeCost);
        ai3.costElement.textContent = formatNumber(ai3.upgradeCost);
        mindcontrol1.costElement.textContent = formatNumber(mindcontrol1.upgradeCost);
        mindcontrol2.costElement.textContent = formatNumber(mindcontrol2.upgradeCost);
        mindcontrol3.costElement.textContent = formatNumber(mindcontrol3.upgradeCost);
        covid1.costElement.textContent = formatNumber(covid1.upgradeCost);
        covid2.costElement.textContent = formatNumber(covid2.upgradeCost);
        covid3.costElement.textContent = formatNumber(covid3.upgradeCost);
        deathstar1.costElement.textContent = formatNumber(deathstar1.upgradeCost);
        deathstar2.costElement.textContent = formatNumber(deathstar2.upgradeCost);
        deathstar3.costElement.textContent = formatNumber(deathstar3.upgradeCost);
    }

/// Update Costs ///
function updateCosts() {
    sweeper.upgradeCost = Math.round(sweeper.baseCost * sweeper.upgradeCostMultiplier ** sweeper.upgrades);
    flagger.upgradeCost = Math.round(flagger.baseCost * flagger.upgradeCostMultiplier ** flagger.upgrades);
    retriever.upgradeCost = Math.round(retriever.baseCost * retriever.upgradeCostMultiplier ** retriever.upgrades);
    infantry.upgradeCost = Math.round(infantry.baseCost * infantry.upgradeCostMultiplier ** infantry.upgrades);
    invade.upgradeCost = Math.round(invade.baseCost * invade.upgradeCostMultiplier ** invade.upgrades);
    mortar.upgradeCost = Math.round(mortar.baseCost * mortar.upgradeCostMultiplier ** mortar.upgrades);
    engineer.upgradeCost = Math.round(engineer.baseCost * engineer.upgradeCostMultiplier ** engineer.upgrades);
    artillery.upgradeCost = Math.round(artillery.baseCost * artillery.upgradeCostMultiplier ** artillery.upgrades);
    sniper.upgradeCost = Math.round(sniper.baseCost * sniper.upgradeCostMultiplier ** sniper.upgrades);
    tank.upgradeCost = Math.round(tank.baseCost * tank.upgradeCostMultiplier ** tank.upgrades);
    bomber.upgradeCost = Math.round(bomber.baseCost * bomber.upgradeCostMultiplier ** bomber.upgrades);
    spy.upgradeCost = Math.round(spy.baseCost * spy.upgradeCostMultiplier ** spy.upgrades);
    jet.upgradeCost = Math.round(jet.baseCost * jet.upgradeCostMultiplier ** jet.upgrades);
    stealth.upgradeCost = Math.round(stealth.baseCost * stealth.upgradeCostMultiplier ** stealth.upgrades);
    emp.upgradeCost = Math.round(emp.baseCost * emp.upgradeCostMultiplier ** emp.upgrades);
    cyber.upgradeCost = Math.round(cyber.baseCost * cyber.upgradeCostMultiplier ** cyber.upgrades);
    decoy.upgradeCost = Math.round(decoy.baseCost * decoy.upgradeCostMultiplier ** decoy.upgrades);
    helicopter.upgradeCost = Math.round(helicopter.baseCost * helicopter.upgradeCostMultiplier ** helicopter.upgrades);
    submarine.upgradeCost = Math.round(submarine.baseCost * submarine.upgradeCostMultiplier ** submarine.upgrades);
    droid.upgradeCost = Math.round(droid.baseCost * droid.upgradeCostMultiplier ** droid.upgrades);
    shield.upgradeCost = Math.round(shield.baseCost * shield.upgradeCostMultiplier ** shield.upgrades);
    medic.upgradeCost = Math.round(medic.baseCost * medic.upgradeCostMultiplier ** medic.upgrades);
    nuke.upgradeCost = Math.round(nuke.baseCost * nuke.upgradeCostMultiplier ** nuke.upgrades);
    platform.upgradeCost = Math.round(platform.baseCost * platform.upgradeCostMultiplier ** platform.upgrades);
    landmine.upgradeCost = Math.round(landmine.baseCost * landmine.upgradeCostMultiplier ** landmine.upgrades);
    napalm.upgradeCost = Math.round(napalm.baseCost * napalm.upgradeCostMultiplier ** napalm.upgrades);
    drone.upgradeCost = Math.round(drone.baseCost * drone.upgradeCostMultiplier ** drone.upgrades);
    child.upgradeCost = Math.round(child.baseCost * child.upgradeCostMultiplier ** child.upgrades);
    ai.upgradeCost = Math.round(ai.baseCost * ai.upgradeCostMultiplier ** ai.upgrades);
    mindcontrol.upgradeCost = Math.round(mindcontrol.baseCost * mindcontrol.upgradeCostMultiplier ** mindcontrol.upgrades);
    covid.upgradeCost = Math.round(covid.baseCost * covid.upgradeCostMultiplier ** covid.upgrades);
    deathstar.upgradeCost = Math.round(deathstar.baseCost * deathstar.upgradeCostMultiplier ** deathstar.upgrades);
  }
  
  function updateUnlocks() {
    /// document.getElementById('score').style.display = 'flex'; ///
    if (sales.upgrades >= 1) {
        sales.upgrades = 1;
        sales.upgradeButton.style.display = 'none';
        document.getElementById('sales-div').style.display = 'flex';
    }

    if (resources.score >= 2500){
        document.getElementById('autoSeller-upgrade-div').style.display = 'flex';
    }

    if (autoSeller.upgrades >= 1) {
        autoSeller.upgrades = 1;
        autoSeller.upgradeButton.style.display = 'none';
    }

    if (replenisher.upgrades >= 1) {
        replenisher.upgrades = 1;
        replenisher.upgradeButton.style.display = 'none';
    }

    if (resources.money >= 1){
        document.getElementById('money').style.display = 'flex';
    }

    if (resources.minesRetrieved >= 1){
        document.getElementById('minesRetrieved').style.display = 'flex';
    }

    if (resources.reputation != 0){
        document.getElementById('reputation').style.display = 'flex';
    }

    if (resources.militaryPower >= 1){
        document.getElementById('militaryPower').style.display = 'flex';
    }

    if (resources.score >= 1){
        sweeper.unlocked = true;
        document.getElementById('sweeper-upgrade-div').style.display = 'flex';
        document.getElementById('score').style.display = 'flex';
    }
    if (resources.score >= 3){
        flagger.unlocked = true;
        document.getElementById('flagger-upgrade-div').style.display = 'flex';
    }
    if (resources.score >= 5){
        replenisher.unlocked = true;
        document.getElementById('replenisher-upgrade-div').style.display = 'flex';
    }
    if (resources.score >= 10){
        retriever.unlocked = true;
        document.getElementById('retriever-upgrade-div').style.display = 'flex';
    }
    if (resources.score >= 50){
        sales.unlocked = true;
        document.getElementById('sales-upgrade-div').style.display = 'flex';
        

  }
    if (resources.militaryPower >= 1){
        invade.unlocked = true;
        document.getElementById('invade-div').style.display = 'flex';
    }
    if (resources.money >= 50){
        infantry.unlocked = true;
        document.getElementById('infantry-div').style.display = 'flex';
    }
    if (resources.money >= 550){
        mortar.unlocked = true;
        document.getElementById('mortar-div').style.display = 'flex';
    }
    if (resources.money >= 6000){
        engineer.unlocked = true;
        document.getElementById('engineer-div').style.display = 'flex';
    }
    if (resources.money >= 65000){
        artillery.unlocked = true;
        document.getElementById('artillery-div').style.display = 'flex';
        if (resources.reputation >= 100){
            decoy.unlocked = true;
            document.getElementById('decoy-div').style.display = 'flex';
        }
        if (resources.reputation <= -100){
            landmine.unlocked = true;
            document.getElementById('landmine-div').style.display = 'flex';
        }    
    }
    if (resources.money >= 700000){
        sniper.unlocked = true;
        document.getElementById('sniper-div').style.display = 'flex';
        if (resources.reputation >= 1000){
            helicopter.unlocked = true;
            document.getElementById('helicopter-div').style.display = 'flex';
        }
        if (resources.reputation <= -1000){
            napalm.unlocked = true;
            document.getElementById('napalm-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 10000000){
        tank.unlocked = true;
        document.getElementById('tank-div').style.display = 'flex';
        if (resources.reputation >= 10000){
            submarine.unlocked = true;
            document.getElementById('submarine-div').style.display = 'flex';
        }
        if (resources.reputation <= -10000){
            drone.unlocked = true;
            document.getElementById('drone-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 165000000){
        bomber.unlocked = true;
        document.getElementById('bomber-div').style.display = 'flex';
        if (resources.reputation >= 100000){
            droid.unlocked = true;
            document.getElementById('droid-div').style.display = 'flex';
        }
        if (resources.reputation <= -100000){
            child.unlocked = true;
            document.getElementById('child-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 2550000000){
        spy.unlocked = true;
        document.getElementById('spy-div').style.display = 'flex';
        if (resources.reputation >= 1000000){
            shield.unlocked = true;
            document.getElementById('shield-div').style.display = 'flex';
        }
        if (resources.reputation <= -1000000){
            ai.unlocked = true;
            document.getElementById('ai-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 37500000000){
        jet.unlocked = true;
        document.getElementById('jet-div').style.display = 'flex';
        if (resources.reputation >= 10000000){
            medic.unlocked = true;
            document.getElementById('medic-div').style.display = 'flex';
        }
        if (resources.reputation <= -10000000){
            mind.unlocked = true;
            document.getElementById('mind-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 500000000000){
        stealth.unlocked = true;
        document.getElementById('stealth-div').style.display = 'flex';
        if (resources.reputation >= 100000000){
            nuke.unlocked = true;
            document.getElementById('nuke-div').style.display = 'flex';
        }
        if (resources.reputation <= -100000000){
            covid.unlocked = true;
            document.getElementById('covid-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 7000000000000){
        emp.unlocked = true;
        document.getElementById('emp-div').style.display = 'flex';
        if (resources.reputation >= 1000000000){
            platform.unlocked = true;
            document.getElementById('platform-div').style.display = 'flex';
        }
        if (resources.reputation <= -1000000000){
            deathstar.unlocked = true;
            document.getElementById('deathstar-div').style.display = 'flex';
        } 
    }
    if (resources.money >= 85000000000000){
        cyber.unlocked = true;
        document.getElementById('cyber-div').style.display = 'flex';
    }
    if (infantry.upgrades >= 10){
        infantry1.unlocked = true; 
        document.getElementById('infantry1-div').style.display = 'flex';
    }
    if (infantry.upgrades >= 25){
        infantry2.unlocked = true;
        document.getElementById('infantry2-div').style.display = 'flex';
    }
    if (infantry.upgrades >= 50){
        infantry3.unlocked = true;
        document.getElementById('infantry-div').style.display = 'flex';
    }
    if (mortar.upgrades >= 10){
        mortar1.unlocked = true;
        document.getElementById('mortar1-div').style.display = 'flex';
    }
    if (mortar.upgrades >= 25){
        mortar2.unlocked = true;
        document.getElementById('mortar2-div').style.display = 'flex';
    }
    if (mortar.upgrades >= 50){
        mortar3.unlocked = true;
        document.getElementById('mortar3-div').style.display = 'flex';
    }
    if (engineer.upgrades >= 10){
        engineer1.unlocked = true;
        document.getElementById('engineer1-div').style.display = 'flex';
    }
    if (engineer.upgrades >= 25){
        engineer2.unlocked = true;
        document.getElementById('engineer2-div').style.display = 'flex';
    }
    if (engineer.upgrades >= 50){
        engineer3.unlocked = true;
        document.getElementById('engineer3-div').style.display = 'flex';
    }
    if (artillery.upgrades >= 10){
        artillery1.unlocked = true;
        document.getElementById('artillery1-div').style.display = 'flex';
    }
    if (artillery.upgrades >= 25){
        artillery2.unlocked = true;
        document.getElementById('artillery2-div').style.display = 'flex';
  }
    if (artillery.upgrades >= 50){
        artillery3.unlocked = true;
        document.getElementById('artillery3-div').style.display = 'flex';
    }
    if (sniper.upgrades >= 10){
        sniper1.unlocked = true;
        document.getElementById('sniper1-div').style.display = 'flex';
    }
    if (sniper.upgrades >= 25){
        sniper2.unlocked = true;
        document.getElementById('sniper2-div').style.display = 'flex';
    }
    if (sniper.upgrades >= 50){
        sniper3.unlocked = true;
        document.getElementById('sniper3-div').style.display = 'flex';
    }
    if (tank.upgrades >= 10){
        tank1.unlocked = true;
        document.getElementById('tank1-div').style.display = 'flex';
    }
    if (tank.upgrades >= 25){
        tank2.unlocked = true;
        document.getElementById('tank2-div').style.display = 'flex';
    }
    if (tank.upgrades >= 50){
        tank3.unlocked = true;
        document.getElementById('tank3-div').style.display = 'flex';
    }
    if (bomber.upgrades >= 10){
        bomber1.unlocked = true;
        document.getElementById('bomber1-div').style.display = 'flex';
    }
    if (bomber.upgrades >= 25){
        bomber2.unlocked = true;
        document.getElementById('bomber2-div').style.display = 'flex';
    }
    if (bomber.upgrades >= 50){
        bomber3.unlocked = true;
        document.getElementById('bomber3-div').style.display = 'flex';
    }
    if (spy.upgrades >= 10){
        spy1.unlocked = true;
        document.getElementById('spy1-div').style.display = 'flex';
    }
    if (spy.upgrades >= 25){
        spy2.unlocked = true;
        document.getElementById('spy2-div').style.display = 'flex';
    }
    if (spy.upgrades >= 50){
        spy3.unlocked = true;
        document.getElementById('spy3-div').style.display = 'flex';
    }
    if (jet.upgrades >= 10){
        jet1.unlocked = true;
        document.getElementById('jet1-div').style.display = 'flex';
    }
    if (jet.upgrades >= 25){
        jet2.unlocked = true;
        document.getElementById('jet2-div').style.display = 'flex';
    }
    if (jet.upgrades >= 50){
        jet3.unlocked = true;
        document.getElementById('jet3-div').style.display = 'flex';
    }
    if (stealth.upgrades >= 10){
        stealth1.unlocked = true;
        document.getElementById('stealth1-div').style.display = 'flex';
    }
    if (stealth.upgrades >= 25){
        stealth2.unlocked = true;
        document.getElementById('stealth2-div').style.display = 'flex';
    }
    if (stealth.upgrades >= 50){
        stealth3.unlocked = true;
        document.getElementById('stealth3-div').style.display = 'flex';
    }
    if (emp.upgrades >= 10){
        emp1.unlocked = true;
        document.getElementById('emp1-div').style.display = 'flex';
    }
    if (emp.upgrades >= 25){
        emp2.unlocked = true;
        document.getElementById('emp2-div').style.display = 'flex';
    }
    if (emp.upgrades >= 50){
        emp3.unlocked = true;
        document.getElementById('emp3-div').style.display = 'flex';
    }
    if (cyber.upgrades >= 10){
        cyber1.unlocked = true;
        document.getElementById('cyber1-div').style.display = 'flex';
    }
    if (cyber.upgrades >= 25){
        cyber2.unlocked = true;
        document.getElementById('cyber2-div').style.display = 'flex';
    }
    if (cyber.upgrades >= 50){
        cyber3.unlocked = true;
        document.getElementById('cyber3-div').style.display = 'flex';
    }
    if (decoy.upgrades >= 10){
        decoy1.unlocked = true;
        document.getElementById('decoy1-div').style.display = 'flex';
    }
    if (decoy.upgrades >= 25){
        decoy2.unlocked = true;
        document.getElementById('decoy2-div').style.display = 'flex';
    }
    if (decoy.upgrades >= 50){
        decoy3.unlocked = true;
        document.getElementById('decoy3-div').style.display = 'flex';
    }
    if (helicopter.upgrades >= 10){
        helicopter1.unlocked = true;
        document.getElementById('helicopter1-div').style.display = 'flex';
    }
    if (helicopter.upgrades >= 25){
        helicopter2.unlocked = true;
        document.getElementById('helicopter2-div').style.display = 'flex';
    }
    if (helicopter.upgrades >= 50){
        helicopter3.unlocked = true;
        document.getElementById('helicopter3-div').style.display = 'flex';
    }
    if (submarine.upgrades >= 10){
        submarine1.unlocked = true;
        document.getElementById('submarine1-div').style.display = 'flex';
    }
    if (submarine.upgrades >= 25){
        submarine2.unlocked = true;
        document.getElementById('submarine2-div').style.display = 'flex';
    }
    if (submarine.upgrades >= 50){
        submarine3.unlocked = true;
        document.getElementById('submarine3-div').style.display = 'flex';
    }
    if (droid.upgrades >= 10){
        droid1.unlocked = true;
        document.getElementById('droid1-div').style.display = 'flex';
    }
    if (droid.upgrades >= 25){
        droid2.unlocked = true;
        document.getElementById('droid2-div').style.display = 'flex';
    }
    if (droid.upgrades >= 50){
        droid3.unlocked = true;
        document.getElementById('droid3-div').style.display = 'flex';
    }
    if (shield.upgrades >= 10){
        shield1.unlocked = true;
        document.getElementById('shield1-div').style.display = 'flex';
    }
    if (shield.upgrades >= 25){
        shield2.unlocked = true;
        document.getElementById('shield2-div').style.display = 'flex';
    }
    if (shield.upgrades >= 50){
        shield3.unlocked = true;
        document.getElementById('shield3-div').style.display = 'flex';
    }
    if (medic.upgrades >= 10){
        medic1.unlocked = true;
        document.getElementById('medic1-div').style.display = 'flex';
    }
    if (medic.upgrades >= 25){
        medic2.unlocked = true;
        document.getElementById('medic2-div').style.display = 'flex';
    }
    if (medic.upgrades >= 50){
        medic3.unlocked = true;
        document.getElementById('medic3-div').style.display = 'flex';
    }
    if (nuke.upgrades >= 10){
        nuke1.unlocked = true;
        document.getElementById('nuke1-div').style.display = 'flex';
    }
    if (nuke.upgrades >= 25){
        nuke2.unlocked = true;
        document.getElementById('nuke2-div').style.display = 'flex';
    }
    if (nuke.upgrades >= 50){
        nuke3.unlocked = true;
        document.getElementById('nuke3-div').style.display = 'flex';
    }
    if (platform.upgrades >= 10){
        platform1.unlocked = true;
        document.getElementById('platform1-div').style.display = 'flex';
    }
    if (platform.upgrades >= 25){
        platform2.unlocked = true;
        document.getElementById('platform2-div').style.display = 'flex';
    }
    if (platform.upgrades >= 50){
        platform3.unlocked = true;
        document.getElementById('platform3-div').style.display = 'flex';
    }
    if (landmine.upgrades >= 10){
        landmine1.unlocked = true;
        document.getElementById('landmine1-div').style.display = 'flex';
    }
    if (landmine.upgrades >= 25){
        landmine2.unlocked = true;
        document.getElementById('landmine2-div').style.display = 'flex';
    }
    if (landmine.upgrades >= 50){
        landmine3.unlocked = true;
        document.getElementById('landmine3-div').style.display = 'flex';
    }
    if (napalm.upgrades >= 10){
        napalm1.unlocked = true;
        document.getElementById('napalm1-div').style.display = 'flex';
    }
    if (napalm.upgrades >= 25){
        napalm2.unlocked = true;
        document.getElementById('napalm2-div').style.display = 'flex';
    }
    if (napalm.upgrades >= 50){
        napalm3.unlocked = true;
        document.getElementById('napalm3-div').style.display = 'flex';
    }
    if (drone.upgrades >= 10){
        drone1.unlocked = true;
        document.getElementById('drone1-div').style.display = 'flex';
    }
    if (drone.upgrades >= 25){
        drone2.unlocked = true;
        document.getElementById('drone2-div').style.display = 'flex';
    }
    if (drone.upgrades >= 50){
        drone3.unlocked = true;
        document.getElementById('drone3-div').style.display = 'flex';
    }
    if (child.upgrades >= 10){
        child1.unlocked = true;
        document.getElementById('child1-div').style.display = 'flex';
    }
    if (child.upgrades >= 25){
        child2.unlocked = true;
        document.getElementById('child2-div').style.display = 'flex';
    }
    if (child.upgrades >= 50){
        child3.unlocked = true;
        document.getElementById('child3-div').style.display = 'flex';
    }
    if (ai.upgrades >= 10){
        ai1.unlocked = true;
        document.getElementById('ai1-div').style.display = 'flex';
    }
    if (ai.upgrades >= 25){
        ai2.unlocked = true;
        document.getElementById('ai2-div').style.display = 'flex';
    }
    if (ai.upgrades >= 50){
        ai3.unlocked = true;
        document.getElementById('ai3-div').style.display = 'flex';
    }
    if (mindcontrol.upgrades >= 10){
        mindcontrol1.unlocked = true;
        document.getElementById('mindcontrol1-div').style.display = 'flex';
    }
    if (mindcontrol.upgrades >= 25){
        mindcontrol2.unlocked = true;
        document.getElementById('mindcontrol2-div').style.display = 'flex';
    }
    if (mindcontrol.upgrades >= 50){
        mindcontrol3.unlocked = true;
        document.getElementById('mindcontrol3-div').style.display = 'flex';
    }
    if (covid.upgrades >= 10){
        covid1.unlocked = true;
        document.getElementById('covid1-div').style.display = 'flex';
    }
    if (covid.upgrades >= 25){
        covid2.unlocked = true;
        document.getElementById('covid2-div').style.display = 'flex';
    }
    if (covid.upgrades >= 50){
        covid3.unlocked = true;
        document.getElementById('covid3-div').style.display = 'flex';
    }
    if (deathstar.upgrades >= 10){
        deathstar1.unlocked = true;
        document.getElementById('deathstar1-div').style.display = 'flex';
    }
    if (deathstar.upgrades >= 25){
        deathstar2.unlocked = true;
        document.getElementById('deathstar2-div').style.display = 'flex';
    }
    if (deathstar.upgrades >= 50){
        deathstar3.unlocked = true;
        document.getElementById('deathstar3-div').style.display = 'flex';
    }
  }

///////////////////////
/// Game functions ///
/////////////////////

    function revealRandomNonMineCell() {
        let nonMineIndices = [...Array(size*size).keys()].filter(i => !mineArray.includes(i) && !markedArray.includes(i) && !revealedArray[i]);
    if (nonMineIndices.length > 0) {
        let randomIndex = nonMineIndices[Math.floor(Math.random() * nonMineIndices.length)];
        revealCell(randomIndex);
    }
}

    function flagRandomMineCell() {
        let mineIndices = [...mineArray].filter(i => !markedArray.includes(i));
        if (mineIndices.length > 0) {
            let randomIndex = mineIndices[Math.floor(Math.random() * mineIndices.length)];
            markCell(randomIndex);
        }
    }

    function triggerReplenisher() {
        if (gameOver == true) {
            resetGame()
        }
    }

    function retrieveMines() {
        if (retriever.upgrades > 0) {
            for (let i = markedArray.length - 1; i >= 0; i--) {
                if (Math.random() <= 0.10 * retriever.upgrades) {
                    resources.minesRetrieved += (invade.upgrades + 1);
                    // Remove the mine from the markedArray
                    markedArray.splice(i, 1);
                }
            }
        }
    } 

/// Sell Mines ///

function sellMines() {
    if (resources.minesRetrieved > 0) {
        let price;
        switch (countrySelect.value) {
            case 'NATO Member':
                price = 10;
                break;
            case 'Neutral Country':
                price = 20;
                break;
            case 'Warsaw Pact Member':
                price = 30;
                break;
            // Add more cases as needed
            default:
                price = 0;
        }
        let reputationImpact;
        switch (countrySelect.value) {
            case 'NATO Member':
                reputationImpact = 1;
                break; 
            case 'Neutral Country':
                reputationImpact = 0;
                break;
            case 'Warsaw Pact Member':
                reputationImpact = -1;
                break;
            // Add more cases as needed
            default:
                reputationImpact = 0;
        }

        resources.money += price * resources.minesRetrieved;
        resources.reputation += reputationImpact * resources.minesRetrieved;
        resources.minesRetrieved = 0;
        moneyElement.textContent = `Money: ${resources.money}`;
        minesRetrievedElement.textContent = `Mines: ${resources.minesRetrieved}`;
        reputationElement.textContent = `Reputation: ${resources.reputation}`;
    } else {
        alert('You have no mines to sell!');
    }
}

function formatNumber(num) {
    let isNegative = false;
    if (num < 0) {
      isNegative = true;
      num = Math.abs(num);
    }
  
    let output;
  
    if (num >= 1000000000000000) {
      output = (num / 1000000000000000).toFixed(2) + "q";  // Quadrillions
    } else if (num >= 1000000000000) {
      output = (num / 1000000000000).toFixed(2) + "t";  // Trillions
    } else if (num >= 1000000000) {
      output = (num / 1000000000).toFixed(2) + "b";  // Billions
    } else if (num >= 1000000) {
      output = (num / 1000000).toFixed(2) + "m";  // Millions
    } else if (num >= 1000) {
      output = (num / 1000).toFixed(2) + "k";  // Thousands
    } else {
      output = num.toString();
    }
  
    if (isNegative) {
      output = "-" + output;
    }
  
    return output;
  }
  
////////////////////////
/// Initialize Game ///
//////////////////////

window.addEventListener('load', function() {
    loadGame();
    startGame();
    gameLoop();
});
});