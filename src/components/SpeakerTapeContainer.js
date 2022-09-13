import "./SpeakerContainer.js";
import "./TapeContainer.js";

class SpeakerTapeContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 100%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SpeakerTapeContainer.styles}</style>
    <div class="container">
      <speaker-container></speaker-container>
      <tape-container></tape-container>
      <speaker-container></speaker-container>
    </div>`;
  }
}

customElements.define("speaker-tape-container", SpeakerTapeContainer);
