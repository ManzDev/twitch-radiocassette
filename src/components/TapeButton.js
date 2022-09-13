const ICONS = {
  play: "&#9654;",
  fastfwd: "&#9197;",
  pause: "&#9208;",
  rewind: "&#9198;",
  record: "&#9210;",
  stop: "&#9209;",
  eject: "&#9167;"
};

class TapeButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 40px;
      }

      .container {
        width: var(--size);
      }

      .icon {
        color: #aaa;
        font-size: 8px;
        width: 13px;
        display: grid;
        place-items: center;
        background: #555;
      }

      .button {
        background: #666;
        background-image: linear-gradient(160deg, #666 50%, #777 51%);
        width: 100%;
      }

      .button-container {
        display: flex;
        width: var(--size);
        height: 10px;
        border: 2px outset #444;
        cursor: pointer;
      }

      :host(:active) .button-container {
        border-style: inset;
      }

      .label {
        font-family: "Conthrax SB";
        text-align: center;
        font-size: 7px;
        text-transform: uppercase;
      }
    `;
  }

  connectedCallback() {
    this.label = this.getAttribute("type");
    this.label === "stop" && this.style.setProperty("--size", "90px");
    this.icon = ICONS[this.label];
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TapeButton.styles}</style>
    <div class="container">
      <div class="button-container">
        <div class="icon">${this.icon}</div>
        <div class="button"></div>
      </div>
      <div class="label">${this.label}</div>
    </div>`;
  }
}

customElements.define("tape-button", TapeButton);
