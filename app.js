class Casino {
  // Write code here
  constructor(name, isFakeCoin) {
    this.name = name;
    this.isFakeCoin = isFakeCoin;
    this.timesPlayed = 0;
  }
  playGame(betAmount) {
    this.timesPlayed += 1;
    if (Math.random() <= 0.5 || this.isFakeCoin) {
      console.log("Casino ${this.name} won!");
    } else {
      this.timesPlayed + 1;
      // const finalAmount = betAmount * (this.timesPlayed + 1);
      console.log("You have won $${betAmount * (this.timesPlayed + 1)}");
    }
  }
  rollDie(betAmount) {
    const rolledSide = Math.floor(Math.random() * 100) % 6;
    console.log(`You rolled a ${rolledSide}`);
  }
}
// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS

const myExtraBonusCasino = new ExtraBonusCasino(
  "HackerU Extra Bonus Casino",
  false
);

console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
