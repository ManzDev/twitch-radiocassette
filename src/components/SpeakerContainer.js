class SpeakerContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: var(--radio-texture);
        display: grid;
        place-items: center;
      }

      .container {
        width: 90%;
        aspect-ratio: 1/1;
        background:
          linear-gradient(77deg, #0003, #0006),
          conic-gradient(#0001, #0002, #0004),
          radial-gradient(circle, #0005, #0003);
        border: 1px ridge #0002;
        display: grid;
        place-items: center;
        position: relative;
      }

      .speaker {
        border-radius: 50%;
        width: 90%;
        height: 90%;
        background-image:
          repeating-linear-gradient(-30deg, transparent 0 3px, #555 4px 4.5px),
          repeating-linear-gradient(30deg, transparent 0 3px, #555 4px 4.5px);
        position: relative;
        z-index: 1;
        border: 1px outset #fff;
        box-shadow: 0 0 2px 4px #0008;
      }

      .inner-speaker {
        width: 90%;
        height: 90%;
        border-radius: 50%;
        background: #000;
        background-image: radial-gradient(transparent 60%, #aaa 67%, #222 70%);
        position: absolute;
      }

      .core {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background:
          radial-gradient(transparent 20px, #fff 35px),
          linear-gradient(#fff, #111, #fff);
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SpeakerContainer.styles}</style>
    <div class="container">
      <div class="speaker"></div>
      <div class="inner-speaker"></div>
      <div class="core"></div>
    </div>`;
  }
}

customElements.define("speaker-container", SpeakerContainer);
