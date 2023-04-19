class Account{
    playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = this.getPlayerName();

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Guest';
      }
}