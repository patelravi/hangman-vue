import { Component, Vue } from "vue-property-decorator";
import { Hangman } from "@/modules/hangman";

@Component
export default class HangmanComponent extends Vue {
  public hangman: Hangman;
  public gameStarted: boolean;
  public characterList: string[] = [];
  public randomWord = null;
  private wordList = [
    "Bahrain",
    "Bangladesh",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
  ];

  constructor() {
    super();
    this.gameStarted = false;
    this.characterList = [];

    // Generate A-Z Buttons For Rendering
    for (let i = 97; i <= 122; i++) {
      this.characterList.push(String.fromCharCode(i));
    }
  }

  startGame() {
    // Choose Random Word To Get Started
    this.randomWord = this.wordList[
      Math.floor(Math.random() * this.wordList.length)
    ];

    // Initialize game.
    this.hangman = new Hangman(this.randomWord);
    this.gameStarted = true;

    // Draw Sketch
    requestAnimationFrame(() => {
      this.drawSketch();
    });
  }

  quitGame() {
    this.gameStarted = false;
  }

  makeGuess(char: string) {
    this.hangman.validateGuess(char);
    this.drawSketch();
    this.$forceUpdate();
  }

  drawSketch() {
    const canvas = document.getElementById("sketch") as any;
    const context = canvas.getContext("2d");

    // Clear old sketch.
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(225, 225);
    context.lineTo(5, 225);
    context.moveTo(37, 225);
    context.lineTo(35, 5);
    context.lineTo(130, 5);
    context.lineTo(130, 25);
    context.stroke();
    if (this.hangman.triesLeft > 5) return;

    //  Head
    context.lineWidth = 5;
    context.beginPath();
    context.arc(130, 50, 25, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    if (this.hangman.triesLeft > 4) return;

    // Body
    context.beginPath();
    context.moveTo(130, 75);
    context.lineTo(130, 140);
    context.stroke();
    if (this.hangman.triesLeft > 3) return;

    // Right Arm
    context.beginPath();
    context.moveTo(130, 85);
    context.lineTo(90, 130);
    context.stroke();
    if (this.hangman.triesLeft > 2) return;

    // Left Arm
    context.beginPath();
    context.moveTo(130, 85);
    context.lineTo(170, 130);
    context.stroke();
    if (this.hangman.triesLeft > 1) return;

    // Left Leg
    context.beginPath();
    context.moveTo(130, 139);
    context.lineTo(95, 190);
    context.stroke();

    // Left Foot
    context.beginPath();
    context.moveTo(98, 190);
    context.lineTo(85, 180);
    context.stroke();
    if (this.hangman.triesLeft > 0) return;

    // Right Leg
    context.beginPath();
    context.moveTo(130, 140);
    context.lineTo(165, 190);
    context.stroke();

    // Right Foot
    context.beginPath();
    context.moveTo(162, 190);
    context.lineTo(178, 180);
    context.stroke();
    if (this.hangman.triesLeft > 0) return;
  }
}
