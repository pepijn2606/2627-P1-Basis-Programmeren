
let questions = []
let vragen = [

  "Hoeveel blokken kan 1 piston tegelijk duwen?",
  "wat moet je doen om de achievement: Uneasy Alliance te krijgen? ",
  "Dit is vraag 2.",
  "Dit is vraag 3.",
  "Dit is vraag 4.",
  "Dit is vraag 5.",
  "Dit is vraag 6.",
  "Dit is vraag 7.",
  "Dit is vraag 8.",
  "Dit is vraag 9."
];
  

let huidigevraag = 0;

// Knoppen
let volgende_vraag;
let vorige_vraag;
let antwoord_knoppen = [];

function setup() {
  createCanvas(800, 800);

questions.push({
     antwoorden: ["8","10","11","12"],
     correct: 3})

questions.push({
    
     antwoorden: ["Een ghast naar de overworld brengen","Boven Y level 1000 te zijn",
      "Alle Effect in de game op je te hebben","Op een strijder rijden"],
     correct: 0})

     questions.push({
      
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
     
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
     
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
    
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
      
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
    
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
     
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})

     questions.push({
    
     antwoorden: ["antwoord1","antwoord2","antwoord3","antwoord4"],
     correct: 0})


    }
    
    let img;
    
    function preload() {
      img = loadImage("Minecraft Foto p5 week5.webp");
    }
    
    function draw() {
      background(220);
      
      volgende_vraag = createButton("toon de volgende vraag");
      volgende_vraag.position(500, 700);
      volgende_vraag.mousePressed(functie_volgende_vraag);
    
      vorige_vraag = createButton("toon de vorige vraag");
      vorige_vraag.position(150, 700,);
      vorige_vraag.mousePressed(functie_vorige_vraag);
    
      // Maak de vier antwoordknoppen
      antwoord_knoppen[0] = createButton("");
      antwoord_knoppen[0].position(100, 300);
      antwoord_knoppen[0].size(250, 100);
      antwoord_knoppen[0].mousePressed(functie_volgende_vraag);
    
      antwoord_knoppen[1] = createButton("");
      antwoord_knoppen[1].position(475, 300);
      antwoord_knoppen[1].size(250, 100);
      antwoord_knoppen[1].mousePressed(functie_volgende_vraag);
    
      antwoord_knoppen[2] = createButton("");
      antwoord_knoppen[2].position(100, 500);
      antwoord_knoppen[2].size(250, 100);
      antwoord_knoppen[2].mousePressed(functie_volgende_vraag);
    
      antwoord_knoppen[3] = createButton("");
      antwoord_knoppen[3].position(475, 500);
      antwoord_knoppen[3].size(250, 100);
      antwoord_knoppen[3].mousePressed(functie_volgende_vraag);
      image (img, 0,0,800,800)
      
      // Toon of verberg de navigatieknoppen
      if (huidigevraag == 0) {
        vorige_vraag.hide();
      } else {
        vorige_vraag.show();
      }
      
      if (huidigevraag == vragen.length - 1) {
        volgende_vraag.hide();
      } else {
        volgende_vraag.show();
      }
      // Toon de huidige vraag
      text(vragen[huidigevraag], 250, 200);
      
      // Verander de tekst van de vier antwoordknoppen
      antwoord_knoppen[0].html(questions[huidigevraag].antwoorden[0]);
      antwoord_knoppen[1].html(questions[huidigevraag].antwoorden[1]);
      antwoord_knoppen[2].html(questions[huidigevraag].antwoorden[2]);
      antwoord_knoppen[3].html(questions[huidigevraag].antwoorden[3]);
      
      // Teken een rood vierkant bij vraag 4
      if (questions > 10){
        
      }
      
    }
    
    function functie_volgende_vraag() {
      if (huidigevraag < vragen.length - 1) {
        huidigevraag++;
      }
    }
    
    function functie_vorige_vraag() {
      if (huidigevraag > 0) {
        huidigevraag--;
      }
    }
    
    
    
    