/* global Player PLAYER1 PLAYER2 gameState */
class Store {
  constructor(App) {
    this.player1 = new Player('Bob',0,App);
    this.player2 = new Player('Charlie',1,App);
    this.message = '';
    this.turn = true;
    this.gameState = gameState.INIT;
  }

  getGameState() {
    return this.gameState;
  }

  setGameState(val) {
    this.gameState = val;
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getTurn() {
    return this.turn;
  }

  getCurrentPlayer() {
    if (this.turn) {
      return this.player1;
    }
    return this.player2;
  }

  clearState() {
    this.player1.clear();
    this.player2.clear();
    this.message = '';
  }
}
