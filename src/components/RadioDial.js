class RadioDial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: contents;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 78%;
        background: #fff;
        box-shadow: 0 0 5px #000a inset;
        border: 1px solid #444;
        box-sizing: border-box;
        font-family: "Conthrax SB";
        font-size: 9px;
        color: #444;
      }

      .meter {
        width: 100%;
        height: 6px;
        background: linear-gradient(#666, #717478, #666);
        border: 1px solid #444;
        border-left: 0;
        border-right: 0;
      }

      .fm {
        --title-width: 45px;
        --distance: repeat(11, 35px);
      }

      .am {
        --title-width: 60px;
        --distance: repeat(11, 38px);
      }

      .am,
      .fm {
        display: grid;
        grid-template-columns: var(--title-width) var(--distance);
      }

      .title {
        padding-left: 5px;
      }

      .value::before {
        display: inline-block;
        content: "|";
        color: #222;
      }

      .am .value::before {
        transform: translateY(-1px);
      }

      .fm .value::before {
        transform: translateY(1px);
      }

      .dial {
        width: 3px;
        height: 100%;
        background: red;
        transform: translateX(var(--value, 40px));
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  setDial(value) {
    const pixelValue = ((value * 420) / 100) + 40;
    this.style.setProperty("--value", pixelValue + "px");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RadioDial.styles}</style>
    <div class="container">
      <div class="fm">
        <div class="title">MHz</div>
        <div class="value">88</div>
        <div class="value">90</div>
        <div class="value">92</div>
        <div class="value">94</div>
        <div class="value">96</div>
        <div class="value">98</div>
        <div class="value">100</div>
        <div class="value">102</div>
        <div class="value">104</div>
        <div class="value">106</div>
        <div class="value">108</div>
      </div>
      <div class="meter">
        <div class="dial"></div>
      </div>
      <div class="am">
        <div class="title">KHz</div>
        <div class="value">500</div>
        <div class="value">600</div>
        <div class="value">700</div>
        <div class="value">800</div>
        <div class="value">900</div>
        <div class="value">1000</div>
        <div class="value">1100</div>
        <div class="value">1200</div>
        <div class="value">1300</div>
        <div class="value">1400</div>
        <div class="value">1600</div>
      </div>
    </div>`;
  }
}

customElements.define("radio-dial", RadioDial);
