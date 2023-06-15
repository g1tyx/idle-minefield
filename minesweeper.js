document.addEventListener('DOMContentLoaded', (event) => {

/////////////////////////
/// Upgrade Elements ///
///////////////////////

class GameUnit {
    constructor(name, upgradeCost, upgradeCostMultiplier, baseCost, resource = 'money') {
        this.name = name;
        this.upgradeCost = upgradeCost;
        this.upgradeCostMultiplier = upgradeCostMultiplier;
        this.ownedElement = document.getElementById(`${name}-owned`);
        this.militaryPowerElement = document.getElementById(`${name}-power`);
        this.upgradeButton = document.getElementById(`${name}-upgrade`);
        this.upgradeDivElement = document.getElementById(`${name}-upgrade-div`);
        this.costElement = document.getElementById(`${name}-cost`);
        this.upgradeButton.addEventListener('click', () => this.buyUpgrade(resources, resource));
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
        } else {
        }
    }

    calculateCosts() {
        this.upgradeCost = Math.round(this.baseCost * this.upgradeCostMultiplier ** this.upgrades);
    }
}

class MilitaryUnit extends GameUnit {
    constructor(name, upgradeCost, upgradeCostMultiplier, baseCost, power, repthreshold) {
        super(name, upgradeCost, upgradeCostMultiplier, baseCost);
        this.power = power;
        this.repthreshold = repthreshold;
        this.upgradeDiv = document.getElementById(`${name}-div`);
    }

        updateUnlocks1() {
            if (this.upgrades >= 1) {
                this.unlocked = true;
                this.upgradeDiv.style.display = 'flex';
            }
        }

    }


let sweeper = new GameUnit('sweeper', 1, 1.5, 1, 'score');
let flagger = new GameUnit('flagger', 5, 1.5, 5, 'score');
let replenisher = new GameUnit('replenisher', 10, 999, 10, 'score');    
let retriever = new GameUnit('retriever', 10, 10, 10, 'score');
let sales = new GameUnit('sales', 100, 999, 100, 'score');
let invade = new GameUnit('invade', 1000, 1.75, 1000,  'militaryPower');
let autoSeller = new GameUnit('autoSeller', 5000, 1.5, 5000, 'score');
let synergy1 = new GameUnit('synergy1', 50000, 1.5, 50000, 'score');
let synergy2 = new GameUnit('synergy2', 250000, 1.5, 250000, 'score');
let heaven = new GameUnit('heaven', 5, 1.5, 5, 'goldenFlags');
let hell = new GameUnit('hell', 5, 1.5, 5, 'goldenFlags');
let equilibrium = new GameUnit('equilibrium', 15, 1.5, 15, 'goldenFlags');
let speedflagger = new GameUnit('speedflagger', 1, 1.75, 1, 'goldenFlags');


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

let gameUnitsArray = [
    sweeper, flagger, replenisher, retriever, sales, invade, autoSeller, synergy1, synergy2,
    infantry, infantry1, infantry2, infantry3, mortar, mortar1, mortar2, mortar3, engineer, engineer1, engineer2, engineer3, artillery, artillery1, artillery2, artillery3,
    sniper, sniper1, sniper2, sniper3, tank, tank1, tank2, tank3, bomber, bomber1, bomber2, bomber3, spy, spy1, spy2, spy3, jet, jet1, jet2, jet3,
    stealth, stealth1, stealth2, stealth3, emp, emp1, emp2, emp3, cyber, cyber1, cyber2, cyber3,child,child1,child2,child3,ai,ai1,ai2,ai3,mindcontrol,mindcontrol1,mindcontrol2,mindcontrol3,
    decoy, decoy1, decoy2, decoy3, helicopter, helicopter1, helicopter2, helicopter3, submarine, submarine1, submarine2, submarine3, droid, droid1, droid2, droid3,
    shield, shield1, shield2, shield3, medic, medic1, medic2, medic3, nuke, nuke1, nuke2, nuke3, platform, platform1, platform2, platform3,
    landmine, landmine1, landmine2, landmine3, napalm, napalm1, napalm2, napalm3, drone, drone1, drone2, drone3, covid, covid1, covid2, covid3, deathstar, deathstar1, deathstar2, deathstar3, heaven, hell, equilibrium, speedflagger
  ];
  

/// Sales Function ///
const countrySelect = document.getElementById('country-select');
const sellMinesButton = document.getElementById('sell-mines');
const tabElement = document.querySelector('.tab');
sellMinesButton.addEventListener('click', sellMines);   
const prestigeButton = document.getElementById('prestige');
prestigeButton.addEventListener('click', prestigeShow);
const howtoplay = document.getElementById('howtoplay');
howtoplay.addEventListener('click', howToPlay);
const closehelp = document.getElementById('closehelp');
closehelp.addEventListener('click', closeHelp);
const closeprestige = document.getElementById('closeprestige');
closeprestige.addEventListener('click', closePrestige);
const prestigeconfirm = document.getElementById('prestigeconfirm');
prestigeconfirm.addEventListener('click', prestige);
let newGoldenFlags = document.getElementById('newGoldenFlags');
let speedFlaggerCount = document.getElementById('speedflaggercount');

function prestigeShow(e){
    e.preventDefault();
    document.getElementById('prestigecheck').style.visibility = 'visible';
    document.getElementById('prestigecheck').style.opacity = '1';
    let newGoldenFlags = Math.round((invade.upgrades/25)**4);
    document.getElementById('newGoldenFlags').innerHTML = `${newGoldenFlags}`;
}

function closePrestige(e){
    e.preventDefault();
    document.getElementById('prestigecheck').style.visibility = 'hidden';
    document.getElementById('prestigecheck').style.opacity = '0';
}
    
function howToPlay(e){
    e.preventDefault();
    document.getElementById('popup-optin').style.visibility = 'visible';
    document.getElementById('popup-optin').style.opacity = '1';
};

function closeHelp(e){
    e.preventDefault();
    document.getElementById('popup-optin').style.visibility = 'hidden';
    document.getElementById('popup-optin').style.opacity = '0';
};


///////////////////
/// Challenges ///
/////////////////
/// Challenge 1 ///
const closechallenge = document.getElementById('closechallenge');
closechallenge.addEventListener('click', closeChallenge);
const challenge1button = document.getElementById('challenge1button');
challenge1button.addEventListener('click', startChallenge1); 
const resetchallange = document.getElementById('resetchallange');
resetchallange.addEventListener('click', startChallenge);
const challenge1heading = document.getElementById('challenge1heading');
const challenge2heading = document.getElementById('challenge2heading');

function startChallenge(){
    if (currentChallenge == 1){
        startChallenge1();
    }
    if (currentChallenge == 2){
        startChallenge2();
    }
}

let currentChallenge = 0;
let challenge1level = 0;
let challenge1leveltext = document.getElementById('challenge1leveltext');
let challenge1leveltext2 = document.getElementById('challenge1leveltext2');
let challengewintext = document.getElementById('challengewintext');
let challengelosetext = document.getElementById('challengelosetext');

/// Challenge 2 ///
const challenge2button = document.getElementById('challenge2button');
challenge2button.addEventListener('click', startChallenge2);

/// Challenge 1 ///

function closeChallenge(e){
    e.preventDefault();
    document.getElementById('challengewindow').style.visibility = 'hidden';
    document.getElementById('challengewindow').style.opacity = '0';
};


function startChallenge1() {
    document.getElementById('challengewindow').style.visibility = 'visible';
    document.getElementById('challengewindow').style.opacity = '1';
    resetGame2();
    size2 = 5+challenge1level;
    mines2 = 3+challenge1level**1.5;
    currentChallenge = 1;
    startGame2();
}

function startChallenge2() {
    document.getElementById('challengewindow').style.visibility = 'visible';
    document.getElementById('challengewindow').style.opacity = '1';
    resetGame3();
    size3 = 16;
    mines3 = 40;
    currentChallenge = 2;
    startGame3();
}

//////////////////////
/// Save Elements ///
////////////////////

/// Player ///
let gameSpeed = 0; 
let bestTimeBonus = 0;
let totalPatreonReduction = 0;
let patreon1Subscribers = 0;
let patreon2Subscribers = 0;
let patreon3Subscribers = 0;
const patreonCount = document.getElementById('patreoncount');
const challengeheading = document.getElementById('challengeheading');

let sweeperOwned2 = document.getElementById(`sweeper-owned2`);
let lastMilitary = Date.now();
let lastSave = Date.now();
let lastFetch = Date.now();
let autoSellerActive = false;
militaryPowerPerSecond = 0;
let flagsPerSecond = 0;
let flagsPerMS = 0;

let resources = {
    score: 0,  // flags
    minesRetrieved: 0,
    money: 0,
    reputation: 0,
    militaryPower: 0,
    invasionBonus: 0,
    goldenFlags: 0,
};

function saveGame() {
    let gameData = {
        resources: resources,
        challenge1level: challenge1level,
        bestTime: bestTime,
    };
    
    for(let unit of gameUnitsArray){
        gameData[unit.name] = unit.upgrades; // Here
    }
    
    localStorage.setItem('gameData', JSON.stringify(gameData));
    console.log('Game saved:', gameData);
}

function loadGame() {
    let savedData = localStorage.getItem('gameData');
    if (savedData === null) return;  // No saved data found

    savedData = JSON.parse(savedData);
    
    resources = savedData.resources ?? resources;
    resources.goldenFlags = resources.goldenFlags ?? 0
    speedflagger.upgrades = savedData.speedflagger ?? speedflagger.upgrades;
    challenge1level = savedData.challenge1level ?? challenge1level;
    bestTime = savedData.bestTime ?? bestTime;
    
    for(let unit of gameUnitsArray){
        unit.upgrades = savedData[unit.name] ?? unit.upgrades; // And here
    }
    
    console.log('Game loaded:', savedData);
}

///////////////////////
/// Other Elements ///
/////////////////////

let size3 = 16;
let mines3 = 40;
let mineArray3 = [];
let markedArray3 = [];
let revealedArray3 = [];
let gameOver3 = false;
let minefield2 = document.getElementById('minefield2');
let startTime, timerId, bestTime;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}


function startTimer() {
    startTime = Date.now();
    timerId = setInterval(() => {
        let currentTime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = formatTime(currentTime);
    }, 1000);
}

function endGame(win) {
    clearInterval(timerId);
    if (win) {
        let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        if (!bestTime || elapsedTime < bestTime) {
            bestTime = elapsedTime;
            document.getElementById('bestTime').textContent = `Best Time: ${formatTime(bestTime)}`;
        }
    }
}

function startGame3() {
    mineArray3 = [];
    markedArray3 = [];
    revealedArray3 = [];
    let cellSize3 = size3 > 10 ? 40 * (10 / size3) : 40;
    let fontSize3 = cellSize3 / 2; 
    let imageSize3 = fontSize3 ; 
    document.documentElement.style.setProperty('--cell-size3', `${cellSize3}px`);
    document.documentElement.style.setProperty('--font-size3', `${fontSize3}px`);
    document.documentElement.style.setProperty('--image-size3', `${imageSize3}px`);
    minefield2.style.gridTemplateColumns = `repeat(${size3}, ${cellSize3}px)`;
    minefield2.style.gridTemplateRows = `repeat(${size3}, ${cellSize3}px)`;
    gameOver3 = false;
    document.getElementById('challengelosetext').style.display = 'none';
    document.getElementById('challengewintext').style.display = 'none';
    challengeheading.textContent = 'Speed Demon'
    startTimer();
    
    for (let i = 0; i < size3 * size3; i++) {
        const cell = document.createElement('div2');
        cell.classList.add('cell2');
        cell.style.width = `${cellSize3}px`;
        cell.style.height = `${cellSize3}px`;
        cell.addEventListener('click', () => revealCell3(i));
        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            markCell3(i);
        });

        let pressTimer;
        let start;
        cell.addEventListener('touchstart', function(e) {
            e.preventDefault();
            start = Date.now();
            pressTimer = window.setTimeout(function() {
                markCell3(i);
            }, 500);  
        }, false);

        cell.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (pressTimer) clearTimeout(pressTimer);
            if (Date.now() - start < 500) {
                revealCell3(i);
            }
        }, false);

        minefield2.appendChild(cell);
    }

    for (let i = 0; i < mines3; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * size3 * size3);
        } while (mineArray3.includes(index));
        mineArray3.push(index);
    }
    revealedArray3 = Array(size3*size3).fill(false);
}

function resetGame3() {
    size3 = 16;
    mines3 = 40;
    mineArray3 = [];
    markedArray3 = [];
    revealedArray3 = [];
    gameOver3 = false;

    while (minefield2.firstChild) {
        minefield2.firstChild.remove();
    }
    endGame(false);
}

function markCell3(index) {
    if (!gameOver3) {
        const cell = minefield2.childNodes[index];
        if (!cell.classList.contains('flagged') && cell.textContent === '') {
            cell.classList.add('flagged');
            markedArray3.push(index);
            checkWinCondition3();
        } else if (cell.classList.contains('flagged')) {
            cell.classList.remove('flagged');
            const markIndex = markedArray3.indexOf(index);
            markedArray3.splice(markIndex, 1);
        }
    }
}

function revealCell3(index) {
    if (!gameOver3 && !markedArray3.includes(index) && !revealedArray3[index]) {
        const cell = minefield2.childNodes[index];
        let count = 0;
        const x = index % size3;
        const y = Math.floor(index / size3);
        let surrounding = [];

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < size3 && ny >= 0 && ny < size3) {
                    const newIndex = ny * size3 + nx;
                    if (mineArray3.includes(newIndex)) {
                        count++;
                    }
                    surrounding.push(newIndex);
                }
            }
        }
        revealedArray3[index] = true;

        if (mineArray3.includes(index)) {
            cell.classList.add('mine');
            gameOver3 = true;
            endGame(false);
            document.getElementById('challengelosetext').style.display = 'flex';
        } else {
            cell.textContent = count || '';
            cell.style.backgroundColor = '#a9aaa9';
            if (count === 0) {
                surrounding.forEach(surroundIndex => {
                    revealCell3(surroundIndex);
                });
            }
        }
    }
}

function checkWinCondition3() {
    if (markedArray3.length === mineArray3.length) {
        let win = true;
        for (let i = 0; i < mineArray3.length; i++) {
            if (!markedArray3.includes(mineArray3[i])) {
                win = false;
                break;
            }
        }

        if (win) {
            endGame(true);
            if (currentChallenge = 2){
                goldenFlags++;
                document.getElementById('challengewintext').style.display = 'flex';
            }
        }
    }
}


/// Minefield2 /// 
let size2 = 5;
let mines2 = 3;
let mineArray2 = [];
let markedArray2 = [];
let revealedArray2 = [];
let gameOver2 = false;
let minefield3 = document.getElementById('minefield3');

function startGame2() {
    mineArray2 = [];
    markedArray2 = [];
    revealedArray2 = [];
    // Other setup similar to the original startGame(), but using variables for the second minefield
    let cellSize2 = size2 > 10 ? 40 * (10 / size2) : 40;
    let fontSize2 = cellSize2 / 2; // Half of cell size
    let imageSize2 = fontSize2 ; // Same as font size
    document.documentElement.style.setProperty('--cell-size2', `${cellSize2}px`);
    document.documentElement.style.setProperty('--font-size2', `${fontSize2}px`);
    document.documentElement.style.setProperty('--image-size2', `${imageSize2}px`);
    minefield2.style.gridTemplateColumns = `repeat(${size2}, ${cellSize2}px)`;
    minefield2.style.gridTemplateRows = `repeat(${size2}, ${cellSize2}px)`;
    gameOver2 = false;
    document.getElementById('challengelosetext').style.display = 'none';
    document.getElementById('challengewintext').style.display = 'none';
    challengeheading.textContent = 'Size Surge'

    for (let i = 0; i < size2 * size2; i++) {
        const cell = document.createElement('div2');
        cell.classList.add('cell2');
        cell.style.width = `${cellSize2}px`;
        cell.style.height = `${cellSize2}px`;

        // Listeners for the second minefield
        cell.addEventListener('click', () => revealCell2(i));
        cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            markCell2(i);
        });

        let pressTimer;
        let start;
        cell.addEventListener('touchstart', function(e) {
            e.preventDefault();
            start = Date.now();
            pressTimer = window.setTimeout(function() {
                markCell2(i);
            }, 500);  // time threshold for long press, adjust as necessary
        }, false);

        cell.addEventListener('touchend', function(e) {
            e.preventDefault();
            if (pressTimer) clearTimeout(pressTimer);
            if (Date.now() - start < 500) {
                revealCell2(i);
            }
        }, false);

        minefield2.appendChild(cell);
    }

    for (let i = 0; i < mines2; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * size2 * size2);
        } while (mineArray2.includes(index));
        mineArray2.push(index);
    }
    revealedArray2 = Array(size2*size2).fill(false);
}

function resetGame2() {
    // Reset game state variables
    size2 = 5;
    mines2 = 3;
    mineArray2 = [];
    markedArray2 = [];
    revealedArray2 = [];
    gameOver2 = false;

    // Remove all cells from the minefield
    while (minefield2.firstChild) {
        minefield2.firstChild.remove();
    }
}

function markCell2(index) {
    if (!gameOver2) {
        const cell = minefield2.childNodes[index];
        if (!cell.classList.contains('flagged') && cell.textContent === '') {
            cell.classList.add('flagged');
            markedArray2.push(index);
            checkWinCondition2();
        } else if (cell.classList.contains('flagged')) {
            cell.classList.remove('flagged');
            const markIndex = markedArray2.indexOf(index);
            markedArray2.splice(markIndex, 1);
        }
    }
}

function revealCell2(index) {
    // Similar code as revealCell(), but for the second minefield
    if (!gameOver2 && !markedArray2.includes(index) && !revealedArray2[index]) {
        const cell = minefield2.childNodes[index];
        let count = 0;
        const x = index % size2;
        const y = Math.floor(index / size2);
        let surrounding = [];

        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < size2 && ny >= 0 && ny < size2) {
                    const newIndex = ny * size2 + nx;
                    if (mineArray2.includes(newIndex)) {
                        count++;
                    }
                    surrounding.push(newIndex);
                }
            }
        }
        revealedArray2[index] = true;

        if (mineArray2.includes(index)) {
            cell.classList.add('mine');
            gameOver2 = true;
            document.getElementById('challengelosetext').style.display = 'flex';

        } else {
            cell.textContent = count || '';
            cell.style.backgroundColor = '#a9aaa9';
            if (count === 0) {
                surrounding.forEach(surroundIndex => {
                    revealCell2(surroundIndex);
                });
            }
        }
    }
}

function checkWinCondition2() {
    if (markedArray2.length === mineArray2.length) {
        let win = true;
        for (let i = 0; i < mineArray2.length; i++) {
            if (!markedArray2.includes(mineArray2[i])) {
                win = false;
                break;
            }
        }

        if (win) {
            if (currentChallenge = 1){
                challenge1level++;
                document.getElementById('challengewintext').style.display = 'flex';
            }
        }
    }
}


/// Minefield Size ///

    let size = 5;
    let mines = 3;

    const minefield = document.getElementById('minefield');
    const resetButton = document.getElementById('reset');
    const scoreElement = document.getElementById('score');
    const minesRetrievedElement = document.getElementById('minesRetrieved');
    const moneyElement = document.getElementById('money');
    const goldenFlagsElement = document.getElementById('goldenFlags');
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
    scoreElement.textContent = `&#x1F6A9; Flags: ${resources.score}`;
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

    // Normal left-click event for revealing the cell
    cell.removeEventListener('click', revealCell);
    cell.addEventListener('click', () => revealCell(i));

    // Right-click event for marking the cell
    cell.removeEventListener('contextmenu', markCell);
    cell.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        markCell(i);
    });

    // Long press event for marking the cell on mobile devices
    let pressTimer;
    let start;

if (flagger.upgrades <10){
 let pressTimer;
    let start;
    cell.addEventListener('touchstart', function(e) {
        e.preventDefault();
        start = Date.now();
        pressTimer = window.setTimeout(function() {
            markCell(i);
        }, 500);  // time threshold for long press, adjust as necessary
    }, false);

    cell.addEventListener('touchend', function(e) {
        e.preventDefault();
        if (pressTimer) clearTimeout(pressTimer);
        if (Date.now() - start < 500) {
            revealCell(i);
        }
    }, false);
}
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

    function touchstart(e) {
        e.preventDefault();
        if (pressTimer) clearTimeout(pressTimer);
        if (Date.now() - start < 500) {
            revealCell(i);
        }
    }

    function touchend(e) {
        e.preventDefault();
        if (pressTimer) clearTimeout(pressTimer);
        if (Date.now() - start < 500) {
            revealCell(i);
        }
    }

    function gameLoop() {
        let now = Date.now();
        if (now - lastFetch >= 900000) {
            fetchAndLog();
            lastFetch = now;
        }

        /// Run Sweeper ///
        if (sweeper.upgrades > 0 && now - sweeper.lastEffect >= 1000/sweeper.upgrades) {
            revealRandomNonMineCell();
            sweeper.lastEffect = now;
        }
        if (flagger.upgrades > 0) {
            let timeInterval;
            if (synergy2.upgrades >= 1) {
                timeInterval = 3000/(flagger.upgrades * sweeper.upgrades);
            } else if (synergy1.upgrades >= 1) {
                timeInterval = 3000/(flagger.upgrades + sweeper.upgrades);
            } else {
                timeInterval = 3000/flagger.upgrades;
            }
            if (challenge1level >= 1) {
                timeInterval = timeInterval*((100-challenge1level)/100);
            }
            if (speedflagger.upgrades >= 1) {
                timeInterval = timeInterval/(1+speedflagger.upgrades);
            }
        
            let patreon1Reduction = (patreon1Subscribers > 0) ? (1 - (patreon1Subscribers * 0.01)) : 1;
            timeInterval = timeInterval * patreon1Reduction;

        
            if (now - flagger.lastEffect >= timeInterval) {
             let flagsToSet = Math.max(1, Math.floor(16 / timeInterval));
         //    console.log('flags to set', flagsToSet);

             let intervalsNeeded = Math.ceil(mines / flagsToSet);
             let timePerReset = intervalsNeeded * timeInterval;

        //     console.log('time per reset', timePerReset);

             let minesPerReset = mines+resources.invasionBonus;

        //     console.log('invade upgrades', invade.upgrades, '* mines', mines)

        //     console.log('invasion bonus', resources.invasionBonus );

        //     console.log('mines per reset', minesPerReset);
                flagsPerMS = minesPerReset/timePerReset;
                flagsPerSecond = (minesPerReset/timePerReset)*1000;
                console.log('Game contains ', mines, ' mines, the time interval is currently ', timeInterval, ' causing ', flagsToSet, ' flags to be set each time interval. Solving will require ', intervalsNeeded, ' time intervals, making the time per reset ', timePerReset);

                for(let i = 0; i < flagsToSet; i++){

                    flagRandomMineCell();

                }
                
                flagger.lastEffect = now;
            }
        }
        
        
        
        /// Run Replenisher ///
        if (replenisher.upgrades > 0 && gameOver == true) {
            triggerReplenisher();
            gameSpeed = now-replenisher.lastEffect;
            console.log('Game speed is ', gameSpeed);
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
        let totalInfantryPower = ((infantry.power * infantry1Multiplier * infantry2Multiplier * infantry3Multiplier));
        let totalMortarPower = ((mortar.power * mortar1Multiplier * mortar2Multiplier * mortar3Multiplier));
        let totalEngineerPower = ((engineer.power * engineer1Multiplier * engineer2Multiplier * engineer3Multiplier));
        let totalArtilleryPower = ((artillery.power * artillery1Multiplier * artillery2Multiplier * artillery3Multiplier));
        let totalSniperPower = ((sniper.power * sniper1Multiplier * sniper2Multiplier * sniper3Multiplier));
        let totalTankPower = ((tank.power * tank1Multiplier * tank2Multiplier * tank3Multiplier));
        let totalBomberPower = ((bomber.power * bomber1Multiplier * bomber2Multiplier * bomber3Multiplier));
        let totalSpyPower = ((spy.power * spy1Multiplier * spy2Multiplier * spy3Multiplier));
        let totalJetPower = ((jet.power * jet1Multiplier * jet2Multiplier * jet3Multiplier));
        let totalStealthPower = ((stealth.power * stealth1Multiplier * stealth2Multiplier * stealth3Multiplier));
        let totalEmpPower = ((emp.power * emp1Multiplier * emp2Multiplier * emp3Multiplier));
        let totalCyberPower = ((cyber.power * cyber1Multiplier * cyber2Multiplier * cyber3Multiplier));
        let totalDecoyPower = ((decoy.power * decoy1Multiplier * decoy2Multiplier * decoy3Multiplier));
        let totalHelicopterPower = ((helicopter.power * helicopter1Multiplier * helicopter2Multiplier * helicopter3Multiplier));
        let totalMindcontrolPower = ((mindcontrol.power * mindcontrol1Multiplier * mindcontrol2Multiplier * mindcontrol3Multiplier));
        let totalCovidPower = ((covid.power * covid1Multiplier * covid2Multiplier * covid3Multiplier));
        let totalDeathstarPower = ((deathstar.power * deathstar1Multiplier * deathstar2Multiplier * deathstar3Multiplier));
        let totalSubmarinePower = ((submarine.power * submarine1Multiplier * submarine2Multiplier * submarine3Multiplier));
        let totalDroidPower = ((droid.power * droid1Multiplier * droid2Multiplier * droid3Multiplier));
        let totalShieldPower = ((shield.power * shield1Multiplier * shield2Multiplier * shield3Multiplier));
        let totalMedicPower = ((medic.power * medic1Multiplier * medic2Multiplier * medic3Multiplier));
        let totalNukePower = ((nuke.power * nuke1Multiplier * nuke2Multiplier * nuke3Multiplier));
        let totalPlatformPower = ((platform.power * platform1Multiplier * platform2Multiplier * platform3Multiplier));
        let totalLandminePower = ((landmine.power * landmine1Multiplier * landmine2Multiplier * landmine3Multiplier));
        let totalNapalmPower = ((napalm.power * napalm1Multiplier * napalm2Multiplier * napalm3Multiplier));
        let totalDronePower = ((drone.power * drone1Multiplier * drone2Multiplier * drone3Multiplier));
        let totalChildPower = ((child.power * child1Multiplier * child2Multiplier * child3Multiplier));
        let totalAiPower = ((ai.power * ai1Multiplier * ai2Multiplier * ai3Multiplier));

        infantry.militaryPowerElement.textContent = totalInfantryPower*10;
        mortar.militaryPowerElement.textContent = totalMortarPower*10;
        engineer.militaryPowerElement.textContent = totalEngineerPower*10;
        artillery.militaryPowerElement.textContent = totalArtilleryPower*10;
        sniper.militaryPowerElement.textContent = totalSniperPower*10;
        tank.militaryPowerElement.textContent = totalTankPower*10;
        bomber.militaryPowerElement.textContent = totalBomberPower*10;
        spy.militaryPowerElement.textContent = totalSpyPower*10;
        jet.militaryPowerElement.textContent = totalJetPower*10;
        stealth.militaryPowerElement.textContent = totalStealthPower*10;
        emp.militaryPowerElement.textContent = totalEmpPower*10;
        cyber.militaryPowerElement.textContent = totalCyberPower*10;
        decoy.militaryPowerElement.textContent = totalDecoyPower*10;
        helicopter.militaryPowerElement.textContent = totalHelicopterPower*10;
        mindcontrol.militaryPowerElement.textContent = totalMindcontrolPower*10;
        covid.militaryPowerElement.textContent = totalCovidPower*10;
        deathstar.militaryPowerElement.textContent = totalDeathstarPower*10;
        submarine.militaryPowerElement.textContent = totalSubmarinePower*10;
        droid.militaryPowerElement.textContent = totalDroidPower*10;
        shield.militaryPowerElement.textContent = totalShieldPower*10;
        medic.militaryPowerElement.textContent = totalMedicPower*10;
        nuke.militaryPowerElement.textContent = totalNukePower*10;
        platform.militaryPowerElement.textContent = totalPlatformPower*10;
        landmine.militaryPowerElement.textContent = totalLandminePower*10;
        napalm.militaryPowerElement.textContent = totalNapalmPower*10;
        drone.militaryPowerElement.textContent = totalDronePower*10;
        child.militaryPowerElement.textContent = totalChildPower*10;
        ai.militaryPowerElement.textContent = totalAiPower*10;
        
        militaryPowerPerSecond = (((infantry.upgrades * infantry.power * infantry1Multiplier * infantry2Multiplier * infantry3Multiplier)) +
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
            ((deathstar.upgrades * deathstar.power * deathstar1Multiplier * deathstar2Multiplier * deathstar3Multiplier))/10);;
            console.log((now-lastMilitary)/100);
            console.log(formatNumber(militaryPowerPerSecond));
            resources.militaryPower =resources.militaryPower+ (((now-lastMilitary)/100)*militaryPowerPerSecond);
            lastMilitary = now;

            
        }

        
        requestAnimationFrame(gameLoop);
        updateUnlocks();
        updateText();
    }


    async function fetchAndLog() {
        await window.fetchPatreonSubscribers();
        patreon1Subscribers = window.patreon1Subscribers;
        patreon2Subscribers = window.patreon2Subscribers;
        patreon3Subscribers = window.patreon3Subscribers;
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
                if (flagger.upgrades > 3 && replenisher.upgrades >= 1){
                gameOver = true;
                resources.invasionBonus = invade.upgrades*mines;
                let gameSpeedSeconds = gameSpeed/1000;
                resources.score = Math.round(resources.score+(flagsPerSecond*gameSpeedSeconds));
       //         console.log(mines+resources.invasionBonus);

                scoreElement.textContent = `&#x1F6A9; Flags: ${resources.score}`;
            }
            else{
                gameOver = true;
                resources.invasionBonus = invade.upgrades*mines;
                resources.score = Math.round(resources.score+mines+resources.invasionBonus);
       //         console.log(mines+resources.invasionBonus);
                scoreElement.textContent = `&#x1F6A9; Flags: ${resources.score}`;
        }}
        }
    }


/// Update text ///
function updateText() {
    document.getElementById('bestTime').textContent = `Best Time: ${formatTime(bestTime)}`;
    patreonCount.textContent = patreon1Subscribers;
    challenge1leveltext.textContent = challenge1level;
    challenge1leveltext2.textContent = challenge1level;
    scoreElement.textContent = `Flags 🚩: ${formatNumber(resources.score)} (${formatNumberdec(flagsPerSecond)}/s)`;
    moneyElement.textContent = `Money 💰: ${formatNumber(resources.money)}`;
    goldenFlagsElement.textContent = `Golden Flags 🔱: ${formatNumber(resources.goldenFlags)}`;
    militaryPowerElement.textContent = `Military Power ⚔: ${formatNumber(resources.militaryPower)} (${formatNumber(militaryPowerPerSecond*10)}/s)`;
    
    // Reputation Section
    const reputationScores = [0, 1000, -1000, 10000, -10000, 100000, -100000, 1000000, -1000000, 10000000, -10000000, 100000000, -100000000, 1000000000, -1000000000];
    const reputationEmojis = ['😑', '🙂', '🙁', '😃', '😢', '😄', '😭', '😁', '😱', '😆', '😵', '😂', '😵', '😂', '😵'];
    
    for (let i = 0; i < reputationScores.length; i++) {
        if (resources.reputation > reputationScores[i]) {
            reputationElement.textContent = `Reputation ${reputationEmojis[i]}: ${formatNumber(resources.reputation)}`;
        }
    }

    // Mines
    minesRetrievedElement.textContent = `Mines 💣: ${formatNumber(resources.minesRetrieved)}`;

    // Units
    for (let unit of gameUnitsArray) {
        unit.calculateCosts();
        if (unit.costElement) {
            unit.costElement.textContent = formatNumber(unit.upgradeCost);
        }
        if (unit.ownedElement) {
            unit.ownedElement.textContent = unit.upgrades;
        }
    }

    // Special handling for speedflagger
    speedflagger.costElement.textContent = formatNumber(speedflagger.upgradeCost);
    speedFlaggerCount = speedflagger.upgrades + 1;
    document.getElementById('speedflaggercount').innerHTML = `${speedFlaggerCount}`;
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

    if (invade.upgrades >= 10) {
        document.getElementById('synergy1-upgrade-div').style.display = 'flex';
    }
    if (invade.upgrades >= 25) {
        document.getElementById('synergy2-upgrade-div').style.display = 'flex';
        prestigeButton.style.display = 'flex';
    }

    
    if (synergy1.upgrades >= 1) {
        synergy1.upgrades = 1;
        synergy1.upgradeButton.style.display = 'none';
        document.getElementById('texts1').style.display = 'flex';
    }

    if (synergy2.upgrades >= 1) {
        synergy2.upgrades = 1;
        synergy2.upgradeButton.style.display = 'none';
        document.getElementById('texts1').style.display = 'none';
        document.getElementById('texts2').style.display = 'flex';
    }

    if (heaven.upgrades >= 1) {
        heaven.upgrades = 1;
        heaven.upgradeButton.style.display = 'none';
        document.getElementById('heavenselect').style.display = 'flex';
    }

    if (hell.upgrades >= 1) {
        hell.upgrades = 1;
        hell.upgradeButton.style.display = 'none';
        document.getElementById('hellselect').style.display = 'flex';
    }
    if (equilibrium.upgrades >= 1) {
        equilibrium.upgrades = 1;
        equilibrium.upgradeButton.style.display = 'none';
        document.getElementById('equilibriumselect').style.display = 'flex';
    }

    if (autoSeller.upgrades >= 1) {
        autoSeller.upgrades = 1;
        autoSeller.upgradeButton.style.display = 'none';
    }

    if (replenisher.upgrades >= 1) {
        replenisher.upgrades = 1;
        replenisher.upgradeButton.style.display = 'none';
    }

    if (replenisher.upgrades == 0) {
        replenisher.upgradeButton.style.display = 'flex';
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
            mindcontrol.unlocked = true;
            document.getElementById('mindcontrol-div').style.display = 'flex';
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
        document.getElementById('infantry3-div').style.display = 'flex';
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
    if (resources.goldenFlags >= 1){
        tabElement.style.marginBottom = '50px';
        document.getElementById('goldenFlags').style.display = 'flex';
    }

    if (invade.upgrades >= 1){
        document.getElementById('goldenFlags').style.display = 'flex';
    }

    if (heaven.upgrades >= 1){
        document.getElementById('goldenFlags').style.display = 'flex';
    }

    if (hell.upgrades >= 1){   
        document.getElementById('goldenFlags').style.display = 'flex';
    }

    if (equilibrium.upgrades >= 1){
        document.getElementById('goldenFlags').style.display = 'flex';
    }
    
    if (speedflagger.upgrades >= 1){   
        document.getElementById('goldenFlags').style.display = 'flex';
    }


    infantry.updateUnlocks1();
    mortar.updateUnlocks1();
    engineer.updateUnlocks1();
    artillery.updateUnlocks1();
    sniper.updateUnlocks1();
    tank.updateUnlocks1();
    bomber.updateUnlocks1();
    spy.updateUnlocks1();
    jet.updateUnlocks1();
    stealth.updateUnlocks1();
    emp.updateUnlocks1();
    cyber.updateUnlocks1();
    decoy.updateUnlocks1();
    helicopter.updateUnlocks1();
    submarine.updateUnlocks1();
    droid.updateUnlocks1();
    shield.updateUnlocks1();
    medic.updateUnlocks1();
    nuke.updateUnlocks1();
    platform.updateUnlocks1();
    landmine.updateUnlocks1();
    napalm.updateUnlocks1();
    drone.updateUnlocks1();
    child.updateUnlocks1();
    ai.updateUnlocks1();
    mindcontrol.updateUnlocks1();
    covid.updateUnlocks1();
    deathstar.updateUnlocks1();
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
            if (flagger.upgrades > 3 && replenisher.upgrades >= 1 && mines >= 10) {
                let baseChance = 0.10 * retriever.upgrades;
                bestTimeBonus = bestTime ? 25 / bestTime : 0;
                document.getElementById('bonus').textContent = `${(bestTimeBonus * 100).toFixed(2)}%`;
                let gameSpeedSeconds = gameSpeed/1000;
                resources.minesRetrieved = Math.round(resources.minesRetrieved+((flagsPerSecond*gameSpeedSeconds)* (baseChance + bestTimeBonus)));
                console.log(formatNumber((flagsPerSecond)* (baseChance + bestTimeBonus)));

            }
            else {
            for (let i = markedArray.length - 1; i >= 0; i--) {
                // base chance is 0.10 * retriever.upgrades
                let baseChance = 0.10 * retriever.upgrades;
                // increase base chance based on bestTime
                bestTimeBonus = bestTime ? 25 / bestTime : 0;
                document.getElementById('bonus').textContent = `${(bestTimeBonus * 100).toFixed(2)}%`;
                if (Math.random() <= baseChance + bestTimeBonus) {
                    resources.minesRetrieved += (invade.upgrades + 1);
                    markedArray.splice(i, 1);
                }
            }
            }
        }

    }
    

/// Sell Mines ///

function sellMines() {
    if (resources.minesRetrieved > 0) {
        let price;
        let reputationImpact;
        switch (countrySelect.value) {
            case 'NATO Member':
                price = 10;
                reputationImpact = 1;
                break;
            case 'Neutral Country':
                price = 20;
                reputationImpact = 0;
                break;
            case 'Warsaw Pact Member':
                price = 30;
                reputationImpact = -1;
                break;
            case 'Heaven':
                price = 0;
                reputationImpact = 10;
                break;
            case 'Hell':
                price = 0;
                reputationImpact = -10;
                break;
            case 'Equilibrium':
                price = 200;
                reputationImpact = 0;
                break;
            default:
                price = 0;
                reputationImpact = 0;
                break;
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
    if (num == 0){
        return '0';
    }
    if (num < 0) {
      isNegative = true;
      num = Math.abs(num);
    }
  
    let units = [
      '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 
      'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv', 'Tv', 'Qav', 
      'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt', 'Ut', 'Dt', 'Tet', 'Qtet', 'Sxtet', 
      'Sptet', 'Oct', 'Non', 'Dect', 'Ude', 'Dude', 'Trede', 'Quade', 'Quinde', 'Sexde', 
      'Sepde', 'Octde', 'Nonde', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qavg', 'Qivg', 'Sxvg', 
      'Spvg', 'Ovg', 'Nvg', 'Ttg', 'Utg', 'Dtg', 'Tttg', 'Qatg', 'Qitg', 'Sxtg', 
      'Sptg', 'Octg', 'Ntg', 'Qag', 'Uqag', 'Duqag', 'Teqag', 'Quaqag', 'Quiqag', 
      'Sexag', 'Septqag', 'Octqag', 'Nonqag', 'Cn', 'Ucn', 'Dcn', 'Tcn', 'Qacn', 
      'Qicn', 'Sxcn', 'Spcn', 'Ocn', 'Ncn', 'Decn', 'Udecn', 'Dudecn', 'Tredecn', 
      'QuaDecn', 'QuiDecn', 'Sexdecn', 'Septdecn', 'Octdecn', 'Nonidecn', 'Stg', 
      'Ustg', 'Dstg', 'Tstg', 'Qastg', 'Qistg', 'Sxstg', 'Spstg', 'Ostg', 'Nstg', 
      'Dtg', 'Udtg', 'Dudtg', 'Trdtg', 'Quadtg', 'Quidtg', 'Sextg', 'Septtg', 'Octtg', 
      'Nontg', 'Qig', 'Unqig', 'Duqig', 'Teqig', 'Quaqig', 'Quinqig', 'Sexqig', 
      'Septqig', 'Octqig', 'Nonqig', 'Ctg', 'Unctg', 'Ductg', 'Trectg', 'Quaactg', 
      'Quinctg', 'Sextg', 'Septctg', 'Octctg', 'Nonctg', 'Qag', 'Unqag', 'Duqag', 
      'Teqag', 'Quaaqag', 'Quinqag', 'Sexqag', 'Septenqag', 'Octenqag', 'Nonenqag', 
      'Quing', 'Unquing', 'Duquing', 'Tequing', 'Quaaquing', 'Quin', 'Sexquing', 
      'Septquing', 'Octquing', 'Nonquing', 'Sxg', 'Unsxg', 'Dusxg', 'Tesxg', 'Quaasxg', 
      'Quinsxg', 'Sexsxg', 'Septensxg', 'Octensxg', 'Nonensxg'
    ];
  
    let output;
    let unit = Math.floor(Math.log10(num) / 3) * 3;
    output = (num / ('1e'+unit)).toFixed(2) + units[unit / 3];
  
    if (isNegative) {
      output = "-" + output;
    }
  
    return output;
  }
  
  
  
  function formatNumberdec(num) {
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
      output = num.toFixed(2); // Numbers under 1000, 2 decimal places
    }
  
    if (isNegative) {
      output = "-" + output;
    }
  
    return output;
}

/////////////////
/// Presitge ///
///////////////

function prestige() {
    document.getElementById('prestigecheck').style.visibility = 'hidden';
    document.getElementById('prestigecheck').style.opacity = '0';
    if (invade.upgrades >= 25){
          let newGoldenFlags = Math.round((invade.upgrades/25)**4)
          resources.goldenFlags = resources.goldenFlags + newGoldenFlags;

        resources.score = 0;
        resources.money = 0;
        resources.reputation = 0;
        resources.minesRetrieved = 0;
        resources.invasionBonus = 0;
        resources.militaryPower = 0;
        flagsPerSecond = 0;
        replenisher.upgrades = 0;
        replenisher.costElement.textContent = formatNumber(replenisher.upgradeCost);

        let exludedUpgrades = ['heaven', 'hell', 'equilibrium','speedflagger'];

        for (let unit of gameUnitsArray) {
            
            if (exludedUpgrades.includes(unit.name)) {
                continue;
            }

            unit.upgrades = 0;
        
            if (unit.upgradeDiv) {
                unit.upgradeDiv.style.display = 'none';
            }
        
            if (unit.upgradeDivElement) {
                unit.upgradeDivElement.style.display = 'none';
            }
        }

        document.getElementById('sales-div').style.display = 'none';
        document.getElementById('invade-div').style.display = 'none';
        prestigeButton.style.display = 'flex';
        document.getElementById('money').style.display = 'none';
        document.getElementById('score').style.display = 'none';
        document.getElementById('reputation').style.display = 'none';
        document.getElementById('minesRetrieved').style.display = 'none';
        document.getElementById('militaryPower').style.display = 'none';
        document.getElementById('goldenFlags').style.display = 'none';
          

          
resetGame();

    }
}

////////////////////////
/// Initialize Game ///
//////////////////////

window.addEventListener('load', function() {
    loadGame();
    startGame();
    gameLoop();
    fetchAndLog();

});
});