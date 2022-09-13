import "./HandleAntenna.js";
import "./DialContainer.js";
import "./SpeakerTapeContainer.js";

class RadioCassette extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 600px;
        --height: 350px;

        --light-color: #d0d1d5;
        --dark-color: #b6b8bb;
        --radio-texture:
          radial-gradient(circle, #777, transparent),
          linear-gradient(var(--dark-color), var(--light-color), var(--dark-color));
      }

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 75px 1fr;
        width: var(--width);
        height: var(--height);
      }

      .body {
        display: grid;
        grid-template-rows: 65px 1fr;
        box-shadow: 1px 1px 5px 3px #0008;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RadioCassette.styles}</style>
    <div class="container">
      <handle-antenna></handle-antenna>
      <div class="body">
        <dial-container></dial-container>
        <speaker-tape-container></speaker-tape-container>
      </div>
    </div>`;
  }
}

customElements.define("radio-cassette", RadioCassette);
