const json = {
    "Dinos": [{
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "color": "#009687f5",
            "image": "images/triceratops.png",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "color": "#dc7657f5",
            "image": "images/tyrannosaurus rex.png",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "color": "#4bb3c1fa",
            "image": "images/anklyosaurus.png",

            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": 372,
            "diet": "Herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "color": "#fac069f9",
            "image": "images/brachiosaurus.png",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "Herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "color": "#67a866f9",
            "image": "images/stegosaurus.png",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "color": "#009687f5",
            "image": "images/elasmosaurus.png",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "Carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "color": "#b94169fa",
            "image": "images/pteranodon.png",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "Herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "color": "#7f62b3fa",
            "image": "images/pigeon.png",
            "fact": "All birds are living dinosaurs."
        }
    ]
}

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact, color, image) {
    this.species = species
    this.weight = weight
    this.diet = diet
    this.where = where
    this.height = height
    this.when = when
    this.fact = fact
    this.color = color
    this.image = image
}


// tried to resolve json Promise but had to refactor lot of code to get array from promise

// let jsonNew ;
// let P1 = fetch("https://raw.githubusercontent.com/hamzahkhan/udacity-js-dinosaur/main/dino.json")
//                     .then((response) => response.json())
//                     .then(file => jsonNew = file )

// Promise.all([P1])


// Create Dino Objects
const dinosArray = json.Dinos.map((data) => {
    const {
        species,
        weight,
        height,
        diet,
        where,
        when,
        fact,
        color,
        image
    } = data;
    const dinoObj = new Dino(species, weight, height, diet, where, when, fact, color, image);
    return dinoObj;
}).sort(() => 0.5 - Math.random())


// Create Human Object
function Human(name, feet, inches, weight, diet, height) {
    this.name = name,
        this.feet = feet,
        this.inches = inches,
        this.weight = weight,
        this.diet = diet;
    this.height = height;
}

// Use IIFE to get human data from form
const humanFormData = (function() {
    return {
        humanName: document.getElementById("name"),
        humanFeet: document.getElementById("feet"),
        humanInches: document.getElementById("inches"),
        humanWeight: document.getElementById("weight"),
        humanDiet: document.getElementById("diet"),
    }
})();

function humanData() {
    const humanName = humanFormData.humanName.value;
    const humanFeet = humanFormData.humanFeet.value;
    const humanInches = humanFormData.humanInches.value;
    const humanWeight = humanFormData.humanWeight.value;
    const humanDiet = humanFormData.humanDiet.value;
    const height = (humanFormData.humanFeet.value * 12) + humanFormData.humanInches.value;
    const humanObj = new Human(humanName, humanFeet, humanInches, humanWeight, humanDiet, height)
    return humanObj;
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
/**
 * 
 * @param {object} humanData human entered data from form
 * @return {string}          output for user
 */

function compareHeight(humanData, dinoObject) {
    // check human height 
    const humanHeight = humanData.height;
    const dinoHeight = dinoObject.height;
    if (humanHeight > dinoHeight) {
        return `Are you sure about that? You are taller than a  ${dinoObject.species} ?`
    }
    return "Your height is " + humanHeight + " and the dino is " + dinoHeight
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(humanData, dinoObject) {
    const humanWeight = humanData.weight;
    const dinoWeight = dinoObject.weight;
    if (humanWeight > dinoWeight) {
        return `Really, you heavier than a ${dinoObject.species} ? `
    }
    return "Your weight is " + humanWeight + " and the dino is " + dinoWeight
}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(humanData, dinoObject) {
    const humanDiet = humanData.diet;
    const dinoDiet = dinoObject.diet;
    if (humanDiet === dinoDiet) {
        return `You and ${dinoObject.species} could go out for brunch !!`
    }
    return "Your diet is " + humanDiet + " and the dino is " + dinoDiet
}

// compares dinoObject with human entered data
function getFactRandom(dinoObject) {
    const factRandom = []
    factRandom.push(dinoObject.fact)

    factRandom.push(compareHeight(humanData(), dinoObject))
    factRandom.push(compareWeight(humanData(), dinoObject))
    factRandom.push(compareDiet(humanData(), dinoObject))
    return factRandom[Math.floor(Math.random() * 4)]
}

// Generate Tiles for each Dino in Array
function generateTiles(dinosArray) {
    let tilesArray = []
    for (let i = 0; i < 9; i++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-item"

        const innerGridHeader = document.createElement("h3");
        const innerGridFact = document.createElement("p");
        const innerGridImage = document.createElement("img");
        gridElement.id = "grid" + i;

        // couldnt correctly build logic without hardcoding indexes as below. Lack of time, or I would definitely fix this. 
        if (dinosArray[i]) {
            const humanObj = humanData()
            innerGridHeader.innerText = i === 4 ? humanObj.name : dinosArray[i].species;
            innerGridImage.src = i === 4 ? "https://static.wikia.nocookie.net/surrealmemes/images/0/09/Meme_Man_HD.png/revision/latest?cb=20190103112747" : dinosArray[i].image;

            if (i === 4) {
                innerGridFact.innerText = ""
            } else if (dinosArray[i].species === "Pigeon") {
                innerGridFact.innerText = dinosArray[i].fact
            } else {
                innerGridFact.innerText = getFactRandom(dinosArray[i])
            }


        } else {
            innerGridHeader.innerText = dinosArray[4].species;
            innerGridImage.setAttribute("src", dinosArray[4].image)
            innerGridFact.innerText = dinosArray[4].species === "Pigeon" ? dinosArray[4].fact : getFactRandom(dinosArray[4]);
        }
        gridElement.appendChild(innerGridHeader)
        gridElement.appendChild(innerGridImage)
        gridElement.appendChild(innerGridFact)
        tilesArray.push(gridElement)
    }
    return tilesArray
}

// creates parent DIV and adds child divs to it
function generateInfographic() {
    const mainGrid = document.getElementById("grid");

    generateTiles(dinosArray).forEach(function(item) {
        mainGrid.appendChild(item);
    })
}


// On button click, prepare and display infographic
function onClickButton() {
    document.getElementById("dino-compare").style.display = "none";
    if (document.getElementById("grid").childNodes.length === 0) {
        generateInfographic();
        // add comparision function for human vs DINO
    }
    document.getElementById("grid").style.display = "flex";
}

function hideInfoShowForm() {
    document.getElementById("grid").style.display = "none";
    document.getElementById("dino-compare").style.display = "block";
}

document.getElementById("btn").onclick = onClickButton;

document.getElementById("restart").onclick = hideInfoShowForm;