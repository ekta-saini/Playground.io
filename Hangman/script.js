const randomAnimalsNames = [
    "Alligator","Alpaca","Ant","Anteater","Antelope","Ape",
    "Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly",
    "Camel","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Cobra","Cockroach","Crab","Crane","Crocodile","Crow","Curlew",
    "Deer","Donkey","Dinosaur","Dog", "Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck",
    "Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu",
    "Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog",
    "Gazelle","Giraffe","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Gull",
    "Hamster","Hare","Hawk","Hedgehog","Hippopotamus","Horse","Hummingbird","Hyena",
    "Ibex","Ibis",
    "Jackal","Jaguar","Jay","Jellyfish",
    "Kangaroo","Kingfisher","Koala","Kouprey","Kudu",
    "Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird",
    "Mandrill","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule",
    "Narwhal","Nightingale",
    "Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster",
    "Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise",
    "Quail","Quelea","Quetzal",
    "Rabbit","Raccoon","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros",
    "Scorpion","Seahorse","Seal","Shark","Sheep","Snail","Snake","Sparrow","Spider","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan",
    "Termite","Tiger","Toad","Turkey","Turtle",
    "Viper","Vulture",
    "Walrus","Wasp","Whale","Wildcat","Wolf","Woodcock","Woodpecker","Worm","Wren",
    "Yak","Zebra",
  ];
  
  let totalChances = 0;
  
  const hangStandChildren = document.querySelector(".hangstand").children;
  
  for (let index = 0; index < hangStandChildren.length; index++) {
    const element = hangStandChildren[index];
    element.classList.add("display-none");
  }
  
  let randomAnimalName = null;
  
  function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
  
  function giveMeButtonsOnScreen() {
    const rootEl = document.querySelector(".buttons-parent");
    let buttonsDataArray = Array(26).fill(null);
    let i = 65;
    buttonsDataArray = buttonsDataArray.map((value) => {
      return String.fromCharCode(i++);
    });
  
    buttonsDataArray.forEach((el) => {
      const btn = document.createElement("button");
      btn.textContent = el;
      rootEl.appendChild(btn);
    });
  }
  
  function chooseRandomAnimalName() {
    const blankParentEl = document.querySelector(".blanks_parent");
    const randomNumber = getRandomNumber(0, randomAnimalsNames.length);
    randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase();
  
    for (let index = 0; index < randomAnimalName.length; index++) {
      const letter = randomAnimalName[index];
      const alpha = document.createElement("p");
      const para = document.createElement("span");
      para.textContent = letter;
      alpha.appendChild(para);
      blankParentEl.appendChild(alpha);
    }
  }
  
  giveMeButtonsOnScreen();
  chooseRandomAnimalName();
  
  const buttonsParentEl = document.querySelector(".buttons-parent");
  
  let checkStatusGlobal = 0;
  const buttonParentClickFunction = function (e) {
    let checkStatus = 0;
    if (e.target.textContent.length === 1) {
      const letterClicked = e.target.textContent;
      console.log(randomAnimalName);
  
      const allLettersEls = document.getElementsByTagName("span");
  
      for (let index = 0; index < allLettersEls.length; index++) {
        const spanEl = allLettersEls[index];
  
        if (letterClicked == spanEl.textContent) {
          spanEl.parentElement.textContent = letterClicked;
  
          checkStatus++;
          checkStatusGlobal++;
        }
      }
  
      if (checkStatus != 0) {
        e.target.classList.add("greenBtn");
      } else {
        totalChances++;
        const elementToRemoveClass = document.querySelector(
          `.class-${totalChances}`
        );
        elementToRemoveClass.classList.remove("display-none");
        e.target.classList.add("redBtn");
      }
  
      e.target.setAttribute("disabled", "disabled");
    }
  
    if (totalChances == 10) {
      alert("You Lost the Game");
      location.reload();
    }
  
    if (checkStatusGlobal == randomAnimalName.length) {
      alert("You won the Game bro");
      location.reload();
    }
  };
  
  buttonsParentEl.addEventListener("click", buttonParentClickFunction);