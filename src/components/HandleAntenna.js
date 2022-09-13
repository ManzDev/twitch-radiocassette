import "./RadioAntenna.js";

export class HandleAntenna extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        display: flex;
        height: 100%;
        justify-content: center;
      }

      .handle-container {
        display: flex;
        flex-direction: column;
        width: 75%;
      }

      .handle-top {
        width: 100%;
        height: 22px;
        border: 1px solid #222;
        box-sizing: border-box;
        border-bottom: 0;
        box-shadow: 0 3px 0 #3d3d3d;
        background: linear-gradient(to bottom, #787b7f,#303031);
      }

      .handle-bottom-container {
        display: flex;
        justify-content: space-between;
        align-items: end;
        height: 100%;
      }

      radio-antenna {
        display: block;
        margin-left: auto;
        width: 75%;
        height: 10px;
      }

      .handle-left,
      .handle-right {
        width: 8px;
        height: 100%;
        background: linear-gradient(to right, #3d3d3d 1px, #aaa 2px 7px, #3d3d3d 7px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HandleAntenna.styles}</style>
    <div class="container">
      <div class="handle-container">
        <div class="handle-top"></div>
        <div class="handle-bottom-container">
          <div class="handle-left"></div>
            <radio-antenna></radio-antenna>
          <div class="handle-right"></div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("handle-antenna", HandleAntenna);
