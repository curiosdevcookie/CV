//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
          --font-handwritten-sloppy: 'Beth Ellen', cursive;
        }

        section {
          font-family: var(--font-handwritten-sloppy);
          font-size: 3rem;
      </style>

        <section>
        <p>β¨ Built in πͺπΊπ©πͺβ¦  with copious amounts of π« && π§  && βοΈ && π by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .β¨</p>
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
