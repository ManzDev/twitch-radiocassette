import "./TapeCassette.js";
import "./TapeButton.js";

class TapeContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: var(--radio-texture);
        padding: 15px 0;
      }

      .container {
        display: grid;
        grid-template-rows: 15px 1fr 45px;
        gap: 5px;
        height: 100%;
      }

      .brand {
        font-family: "Sofachrome RG";
        font-size: 15px;
        letter-spacing: 1px;
        color: #999;
        text-shadow:
          -1px -1px 0 #fff,
          2px 2px 4px #111,
          1px 2px 0 #222;
        text-transform: uppercase;
        text-align: center;
      }

      .tape-container {
        border: 4px solid black;
        margin: 5px 10px;
        background: #0004;
        display: grid;
        place-items: center;
        position: relative;
      }

      .tape-container::after {
        content: "";
        display: block;
        background: #0009;
        background-image: linear-gradient(162deg, transparent 15%, #884CEA 25%, #ec1cce 70%, #0008 71%);
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.9;
        clip-path: polygon(0 0, 100% 0, 100% 73%, 55% 100%, 0 100%);
      }

      .inner-tape {
        width: 60%;
        height: 30%;
        border: 1px solid #000;
        display: flex;
        justify-content: space-between;
        padding: 5px;
      }

      .inner-tape .head {
        width: 20px;
        aspect-ratio: 1/1;
        background: #000;
        border: 4px solid #333;
        border-radius: 50%;
      }

      .buttons-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }

      tape-button:nth-child(6) {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TapeContainer.styles}</style>
    <div class="container">
      <div class="brand-container">
        <div class="brand">Manzyo</div>
      </div>
      <div class="tape-container">
        <div class="inner-tape">
          <div class="first head"></div>
          <div class="second head"></div>
        </div>
      </div>
      <div class="buttons-container">
        <tape-button type="record"></tape-button>
        <tape-button type="play"></tape-button>
        <tape-button type="rewind"></tape-button>
        <tape-button type="fastfwd"></tape-button>
        <tape-button type="eject"></tape-button>
        <tape-button type="stop"></tape-button>
        <tape-button type="pause"></tape-button>
      </div>
    </div>`;
  }
}

customElements.define("tape-container", TapeContainer);
