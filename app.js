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
                "image": "url('images/triceratops.png')",
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
                "image": "url('images/tyrannosaurus rex.png')",
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
                "image": "url('images/anklyosaurus.png')",

                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "color": "#fac069f9",
                "image": "url('images/brachiosaurus.png')",
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
                "image": "url('images/stegosaurus.png')",
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
                "image": "url('images/elasmosaurus.png')",
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
                "image": "url('images/pteranodon.png')",
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
                "image": "url('images/pigeon.png')",
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
    })


    // Create Human Object
    function Human(name, feet, inches, weight, diet){
        this.name = name,
        this.feet = feet,
        this.inches = inches,
        this.weight = weight,
        this.diet = diet
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
        const humanObj = new Human(humanName, humanFeet, humanInches, humanWeight, humanDiet)
        return humanObj;
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    function generateTiles(dinosArray){
        let tilesArray = []
        for (let i = 0; i < 9; i++){
            let gridElement = document.createElement("div");
            gridElement.className = "grid-item"
            let innerGridHeader = document.createElement("h3");
            let innerGridFact = document.createElement("p");
            let innerGridImage = document.createElement("div");
            gridElement.id = "grid" + i;

            if (dinosArray[i]){
                // call a function to render the CSS for each grid element
                innerGridHeader.innerText = dinosArray[i].species;
                // gridElement.style.backgroundImage = "url('https://static.wikia.nocookie.net/jurassicworld-evolution/images/9/96/Trikethumb.png/revision/latest?cb=20190817153424')";
                // gridElement.style.background  = "#f3f3f3 url('https://static.wikia.nocookie.net/jurassicworld-evolution/images/9/96/Trikethumb.png/revision/latest?cb=20190817153424') no-repeat ";
                // #009687f5 url('images/triceratops.png') 


                gridElement.style.background  =  dinosArray[i].color + " " + dinosArray[i].image +  " no-repeat center";

                gridElement.style.backgroundSize = "contain";
                innerGridFact.innerText = dinosArray[i].fact;

                // renderGridItem(i);

            }
            gridElement.appendChild(innerGridHeader)
            // gridElement.appendChild(innerGridImage)
            gridElement.appendChild(innerGridFact)

            // gridContainer.appendChild(gridElement)
            tilesArray.push(gridElement)
        }
        return tilesArray
    }

    // render i'th grid and return a div
    function renderGridItem(i) {

    }

    // Add tiles to DOM
    
    function addTilestoDom(item){
        
        // call generateTiles => return array of tile data 
        // 
    }

    // creates parent DIV and adds child divs to it
    function generateInfographic(){
        let mainGrid = document.getElementById("grid");

        // const gridContainer = document.createElement("div");
        // gridContainer.className = "gridContainer";
        generateTiles(dinosArray).forEach(function(item) {
            mainGrid.appendChild(item);
        })

        // return gridContainer
    }


// On button click, prepare and display infographic
    function onClickButton () {
        document.getElementById("dino-compare").style.display = 'none';

        generateInfographic();
        
        
        // const dinoGrid = addTilesToDom();
        // document.body.appendChild(generateInfographic());
    }


document.getElementById("btn").onclick = onClickButton();