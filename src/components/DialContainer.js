import "./RadioDial.js";

class DialContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        padding: 10px;
        background: var(--radio-texture);
      }

      .container {
        display: grid;
        gap: 15px;
        grid-template-rows: 1fr;
        grid-template-columns: 7fr 1fr;
        height: 100%;
      }

      .dial-container {
        display: flex;
        align-items: center;
      }

      .wheel-container {
        display: grid;
        place-items: center;
      }

      .wheel {
        --size: 45px;

        width: var(--size);
        height: var(--size);
        background: #818387;
        box-shadow:
          0 -1px 1px 3px #6a6a6a inset,
          0 1px 1px 3px #ccc inset,
          0 0 0 2px #444,
          0 0 8px #000c;
        border-radius: 50%;
        border: 1px solid #666;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DialContainer.styles}</style>
    <div class="container">
      <div class="dial-container">
        <radio-dial></radio-dial>
      </div>
      <div class="wheel-container">
        <div class="wheel"></div>
      </div>
    </div>`;
  }
}

customElements.define("dial-container", DialContainer);
