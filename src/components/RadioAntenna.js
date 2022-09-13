// TODO: Punta de la antena

class RadioAntenna extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: relative;
        margin-right: 0.25em;
      }

      .container {
        height: 70%;
        background: linear-gradient(#333, #aaa, #333);
        border-radius: 0 20px 0 0;
      }

      .base {
        width: 10px;
        height: 100%;
        background: #777;
        border-radius: 20px 20px 0 0;
        position: absolute;
        top: 0;
        right: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RadioAntenna.styles}</style>
    <div class="container">
    </div>
    <div class="base"></div>
    `;
  }
}

customElements.define("radio-antenna", RadioAntenna);
