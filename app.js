    const json = {
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
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
                "diet": "carnivor",
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
                "diet": "herbavor",
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
                "diet": "herbavor",
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
                "diet": "herbavor",
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
                "diet": "carnivor",
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
                "diet": "carnivor",
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
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "color": "#7f62b3fa",
                "image": "images/pigeon.png",
                "fact": "All birds are living dinosaurs."
            }
        ]
    }

    // Create Dino Constructor
    function Dino(species,weight,height,diet,where,when,fact, color, image){
        this.species = species
        this.weight = weight
        this.diet = diet
        this.where= where
        this.height = height
        this.when = when
        this.fact = fact
        this.color = color
        this.image = image
    }

    // Create Dino Objects
    // const json = fetch("./dino.json'").then((data) => data.json).then((file) => console.log(file))
   
    var dinosArray = json.Dinos.map((data) => {
        const {species, weight, height, diet, where, when, fact, color, image} = data;
        const dinoObj = new Dino(species, weight, height, diet, where, when, fact,color, image);
        return dinoObj;
    }).sort(() => 0.5-Math.random())


    // Create Human Object
    function Human(name, feet, inches, weight, diet, height){
        this.name = name,
        this.feet = feet,
        this.inches = inches,
        this.weight = weight,
        this.diet = diet,
        this.height = height
    }

    // Use IIFE to get human data from form
    var humanFormData = (function(){
        return {
            humanName: document.getElementById("name"),
            humanFeet: document.getElementById("feet"),
            humanInches: document.getElementById("inches"),
            humanWeight: document.getElementById("weight"),
            humanDiet: document.getElementById("diet"),
        }
    })();

    function humanData(){
        const humanName = humanFormData.humanName.value;
        const humanFeet = humanFormData.humanFeet.value;
        const humanInches = humanFormData.humanInches.value;
        const humanWeight = humanFormData.humanWeight.value;
        const humanDiet = humanFormData.humanDiet.value;
        const height = (humanFeet*12) + humanInches;
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
    
    function compareHeight(humanData, dinoObject){
        // check human height 
        const humanHeight = humanData.height;
        const dinoHeight = dinoObject.height;
        return "Your height is " + humanHeight + " and the dino is " + dinoHeight
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWeight(humanData, dinoObject){
        const humanWeight = humanData.weight;
        const dinoWeight = dinoObject.weight;
        return "Your weight is " + humanWeight + " and the dino is " + dinoWeight
    }
    
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDiet(humanData, dinoObject){
        const humanDiet = humanData.diet;
        const dinoDiet = dinoObject.diet;
        return "Your diet is " + humanDiet + " and the dino is " + dinoDiet
    }
    
    // compares dinoObject with human entered data
    function getFactRandom(dinoObject){
        let factRandom = []
        factRandom.push(dinoObject.fact)
        console.log("this is dhhumanData")
        
        factRandom.push(compareHeight(humanData(), dinoObject))
        factRandom.push(compareWeight(humanData(), dinoObject))
        factRandom.push(compareDiet(humanData(), dinoObject))
        return factRandom[Math.floor(Math.random()*4)]
    }

    // Generate Tiles for each Dino in Array
    function generateTiles(dinosArray){
        let tilesArray = []
        for (let i = 0; i < 9; i++){
            let gridElement = document.createElement("div");
            gridElement.className = "grid-item"

            let innerGridHeader = document.createElement("h3");
            let innerGridFact = document.createElement("p");
            let innerGridImage = document.createElement("img");
            gridElement.id = "grid" + i;

            if (dinosArray[i]){

                if(i ===4){
                    let humanObj = humanData()
                    innerGridHeader.innerText = humanObj.name;
                    innerGridImage.setAttribute("src", 'https://static.wikia.nocookie.net/surrealmemes/images/0/09/Meme_Man_HD.png/revision/latest?cb=20190103112747' )
                }
                else{
                innerGridHeader.innerText = dinosArray[i].species;
                innerGridImage.setAttribute("src",dinosArray[i].image )
                // can make this random from a function
                // innerGridFact.innerText = dinosArray[i].fact;
                innerGridFact.innerText = getFactRandom(dinosArray[i]);
                }
            }
            gridElement.appendChild(innerGridHeader)
            gridElement.appendChild(innerGridImage)
            gridElement.appendChild(innerGridFact)

            // gridContainer.appendChild(gridElement)
            tilesArray.push(gridElement)
        }
        return tilesArray
    }  

    // creates parent DIV and adds child divs to it
    function generateInfographic(){
        let mainGrid = document.getElementById("grid");

        // const gridContainer = document.createElement("div");
        // gridContainer.className = "gridContainer";
        generateTiles(dinosArray).forEach(function(item) {
            mainGrid.appendChild(item);
        })
    }


// On button click, prepare and display infographic
    function onClickButton () {
        document.getElementById("dino-compare").style.display = "none";
        // document.getElementById("grid").classList.remove("hideGrid");
        if(document.getElementById("grid").childNodes.length === 0){
            generateInfographic();
            // add comparision function for human vs DINO
        }
        document.getElementById("grid").style.display = "flex";
    }
        
    function hideInfoShowForm(){
        document.getElementById("grid").style.display = "none";
        document.getElementById("dino-compare").style.display = "block";
    }

document.getElementById("btn").onclick = onClickButton;

document.getElementById("restart").onclick = hideInfoShowForm;
