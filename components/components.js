class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="nav">
          <i class="fa-solid fa-crown nav-logo"></i>
          <ul class="nav-list">
            <li>
            <a href="/" class="list-item home-tab">HOME</a>
            </li>
            <li>
            <a href="howtoplay.html" class="list-item how">HOW TO PLAY</a>
            </li>
          </ul>
        </nav>
        `
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <i class="fa-solid fa-crown"></i>
      <h5>KINGS CUP</h5>
    </footer>
    `
  }
}

customElements.define('app-navbar', Navbar)
customElements.define('app-footer', Footer)
