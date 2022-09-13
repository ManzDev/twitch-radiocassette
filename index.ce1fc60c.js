(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&g(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function g(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
    </div>
    <div class="base"></div>
    `}}customElements.define("radio-antenna",r);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="handle-container">
        <div class="handle-top"></div>
        <div class="handle-bottom-container">
          <div class="handle-left"></div>
            <radio-antenna></radio-antenna>
          <div class="handle-right"></div>
        </div>
      </div>
    </div>`}}customElements.define("handle-antenna",n);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}setDial(a){const i=a*420/100+40;this.style.setProperty("--value",i+"px")}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
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
    </div>`}}customElements.define("radio-dial",o);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="dial-container">
        <radio-dial></radio-dial>
      </div>
      <div class="wheel-container">
        <div class="wheel"></div>
      </div>
    </div>`}}customElements.define("dial-container",d);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="speaker"></div>
      <div class="inner-speaker"></div>
      <div class="core"></div>
    </div>`}}customElements.define("speaker-container",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
    :host {
      display: inline-block;
      transform: scale(0.5);
      width: 300px;
    }

    .cassette {
        --width: 458px;
        --bgcolor: #2f2f2f;
        --border-color: #404040;
        --light-color: #555;
        --dark-color: #1c1c1c;
        --external-notch-shape: polygon(100% 0, 0 5%, 0 95%, 100% 100%);
        width: var(--width);
        background: var(--bgcolor);
        background-image: linear-gradient(273deg, #fff1, transparent), repeating-linear-gradient(to bottom, #1c1c1c 3px, #2c2c2c 6px);
        border: 3px solid var(--border-color);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0 0 10px 2px #2227;
    }

    .cassette::before, .cassette::after {
        content: "";
        display: block;
        background: #333;
        width: 5px;
        height: 75px;
        position: absolute;
        bottom: 20px;
        clip-path: var(--external-notch-shape);
    }

    .cassette::before {
        left: -8px;
    }

    .cassette::after {
        right: -8px;
        transform: scaleX(-1);
        background: #444;
    }

    .cassette .top-tape {
        display: flex;
        justify-content: space-between;
        height: 25px;
        padding: 0 25px;
    }

    .cassette .top-tape .arrow-mark-container {
        background: #0004;
        display: flex;
    }

    .cassette .top-tape .arrow-mark-container .arrow-mark {
        color: var(--light-color);
        font-size: 32px;
        transform: scaleY(1.6) translate(0, -10px);
    }

    .cassette .top-tape .brand-mark {
        background: #0004;
        font-family: "BioRhyme", serif;
        padding: 0 6px;
        color: var(--light-color);
    }

    .cassette .medium-tape {
        display: flex;
        justify-content: center;
    }

    .cassette .medium-tape .label-container {
        width: 400px;
        background: var(--dark-color);
        border-radius: 4px;
        padding: 4px;
    }

    .cassette .medium-tape .label-container .label {
        background: #eee;
        background-image: repeating-linear-gradient(transparent 0 20px, #c6c6c6 20px 21px), linear-gradient(278deg, #eee, #ccc);
        border-radius: 10px;
    }

    .cassette .medium-tape .label-container .label .top-label {
        height: 62px;
        font-weight: normal;
        font-size: 16px;
        color: #333;
    }

    .cassette .medium-tape .label-container .label .top-label .predefined-text {
        font-family: Arial;
        font-size: 9px;
        padding: 6px 6px 4px;
        position: absolute;
    }

    .cassette .medium-tape .label-container .label .top-label .top-text {
        font-family: "Desyrel", sans-serif;
        padding: 6px 10px;
        font-size: 24px;
        line-height: 110%;
        text-shadow: 0 0 1px #444;
        text-align: center;
    }

    .cassette .medium-tape .label-container .label .medium-label {
        height: 95px;
        background: #4d7fb4;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
    }

    .cassette .medium-tape .label-container .label .medium-label .side-name {
        width: 50px;
        font-weight: bold;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #222;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container {
        width: 360px;
        height: 75px;
        border: 4px solid var(--dark-color);
        background: var(--bgcolor);
        background-image: linear-gradient(76deg, transparent, #aaa2);
        border-radius: 5px;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 4px solid #aaa;
        box-shadow: 0 0 0 4px #111;
        background: var(--body-bgcolor);
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel.left {
        animation: spin 6s linear infinite reverse;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel.right {
        animation: spin 8s linear infinite reverse;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel .notch {
        background: linear-gradient(to right, #aaa 0 10%, transparent 12% 88%, #aaa 90% 100%);
        width: 50px;
        height: 8px;
        position: absolute;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel .notch-1 {
        transform: rotate(60deg);
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel .notch-2 {
        transform: rotate(0deg);
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .tapereel .notch-3 {
        transform: rotate(-60deg);
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .central-gap {
        width: 100px;
        height: 50px;
        border: 3px solid #222;
        background: var(--body-bgcolor);
        margin: 0 10px;
        overflow: hidden;
        position: relative;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .central-gap::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent, #fff5, transparent);
        position: absolute;
        top: 0;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .central-gap .innertape {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: radial-gradient(#999 45%, #3e3e3e 47% 100%);
        border: 2px solid #2e2e2e;
        position: relative;
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .central-gap .innertape.left {
        transform: translate(-119px, -52px);
    }

    .cassette .medium-tape .label-container .label .medium-label .gap-container .gap .central-gap .innertape.right {
        transform: translate(66px, -206px);
        box-shadow: -10px -10px 15px #3335;
    }

    .cassette .medium-tape .label-container .label .medium-label .noise-reduction {
        width: 50px;
        font-size: 7px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2px;
    }

    .cassette .medium-tape .label-container .label .medium-label .noise-reduction .box {
        display: flex;
        margin-top: 2px;
    }

    .cassette .medium-tape .label-container .label .medium-label .noise-reduction .box > div {
        border: 1px solid #444;
        background: #fff;
        font-size: 6px;
        padding: 0 3px;
        border-radius: 2px;
    }

    .cassette .medium-tape .label-container .label .bottom-label {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: #eee;
        background-image: linear-gradient(-278deg, #eee, #ccc);
        height: 32px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cassette .medium-tape .label-container .label .bottom-label .brand-text .maintext {
        font-family: "BioRhyme", sans-serif;
        font-size: 20px;
        color: #222;
        transform: translate(18px, 0) scaleX(1.4);
    }

    .cassette .medium-tape .label-container .label .bottom-label .brand-text .subtext {
        font-family: Arial, sans-serif;
        font-weight: bold;
        color: #333;
        font-size: 7px;
        transform: translateY(-7px);
    }

    .cassette .medium-tape .label-container .label .bottom-label .arrow-text {
        color: #4d7fb4;
        font-size: 32px;
        transform: scaleX(1.5) translate(-6px, -3px);
    }

    .cassette .medium-tape .label-container .label .bottom-label .model-text {
        font-family: "Code", sans-serif;
        font-weight: bold;
        color: #222;
        font-size: 28px;
        transform: translate(0, 2px);
    }

    .cassette .medium-tape .label-container .label .bottom-label .model-text span {
        color: #4d7fb4;
    }

    .cassette .bottom-tape {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .cassette .bottom-tape .magnetic-shield-container {
        filter: drop-shadow(-4px 0 1px #131313) drop-shadow(4px 0 1px #383838) drop-shadow(0 -4px 0 #202020);
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield {
        background: #2a2a2a;
        width: 350px;
        height: 65px;
        clip-path: polygon(0 100%, 4% 0, 96% 0, 100% 100%);
        display: flex;
        justify-content: space-between;
        background-image: repeating-linear-gradient(to bottom, #2c2c2c 3px, #1c1c1c 6px);
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .left-hole-container,
    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .right-hole-container {
        width: 125px;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .hole.hole-2,
    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .hole.hole-3 {
        transform: translateY(-15px);
        border: 3px solid #222;
        width: 24px;
        height: 18px;
        border-radius: 30px;
        box-shadow: 0 0 0 2px #111;
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .hole.hole-3 {
        width: 20px;
        border-radius: 10px;
        transform-origin: 50% 50%;
        transform: rotate(90deg) translateX(-17px);
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .screw-container::before {
        content: "";
        display: block;
        background: rgba(0, 0, 0, 0.75);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: relative;
        top: 10px;
        z-index: 10;
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .screw-container .screw {
        position: absolute;
        left: calc(50% - 8px);
        top: 10px;
        box-shadow: 0 0 2px 4px #000, 0 0 2px 8px #111;
    }

    .cassette .bottom-tape .magnetic-shield-container .magnetic-shield .hole {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #111;
        border: 2px solid #191919;
        box-shadow: 0 0 0 2px #171717;
        transform: translateY(-5px);
    }

    .cassette .screw {
        background: linear-gradient(#555, #333);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #222;
        border-bottom: 1px solid #666;
        transform: rotate(-25deg);
        box-shadow: 0 0 2px 2px #111;
    }

    .cassette .screw .dot {
        width: 4px;
        height: 4px;
        background: #222;
        border-radius: 50%;
        position: absolute;
        z-index: 5;
        filter: blur(1px);
    }

    .cassette .screw::before, .cassette .screw::after {
        content: " ";
        display: block;
        background: linear-gradient(to right, #222 10%, #111 45% 65%, #222 90%);
        width: 14px;
        height: 4px;
        border-radius: 2px;
        position: absolute;
    }

    .cassette .screw::before {
        transform: rotate(45deg);
    }

    .cassette .screw::after {
        transform: rotate(-45deg);
    }

    .cassette .screw.screw-1 {
        top: 4px;
        left: 4px;
    }

    .cassette .screw.screw-2 {
        top: 4px;
        right: 4px;
    }

    .cassette .screw.screw-3 {
        bottom: 4px;
        left: 4px;
    }

    .cassette .screw.screw-4 {
        bottom: 4px;
        right: 4px;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="cassette">
      <div class="top-tape">
        <div class="arrow-mark-container">
          <div class="arrow-mark">\u{1F841}</div>
        </div>
        <div class="brand-mark">SONY</div>
      </div>
      <div class="medium-tape">
        <div class="label-container">
          <div class="label">
            <div class="top-label">
              <div class="predefined-text">INDEX</div>
              <div class="top-text">
                <div>MICHAEL JACKSON</div>
                <div>THRILLER (CUMBIA VERSION)</div>
              </div>
            </div>
            <div class="medium-label">
              <div class="side-name">A</div>
              <div class="gap-container">
                <div class="gap">
                  <div class="left tapereel">
                    <div class="notch notch-1"></div>
                    <div class="notch notch-2"></div>
                    <div class="notch notch-3"></div>
                  </div>
                  <div class="central-gap">
                    <div class="left innertape"></div>
                    <div class="right innertape"></div>
                  </div>
                  <div class="right tapereel">
                    <div class="notch notch-1"></div>
                    <div class="notch notch-2"></div>
                    <div class="notch notch-3"></div>
                  </div>
                </div>
              </div>
              <div class="noise-reduction">
                NOISE REDUCTION
                <div class="box">
                  <div>ON</div>
                  <div>OFF</div>
                </div>
              </div>
            </div>
            <div class="bottom-label">
              <div class="brand-text">
                <div class="maintext">SONY</div>
                <div class="subtext">TYPE I (NORMAL) POSITION</div>
              </div>
              <div class="arrow-text"><span>\u{1F846}</span></div>
              <div class="model-text"><span>AHF</span>46</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-tape">
        <div class="magnetic-shield-container">
          <div class="magnetic-shield">
            <div class="left-hole-container">
              <div class="hole hole-1"></div>
              <div class="hole hole-2"></div>
            </div>
            <div class="screw-container">
              <div class="screw"></div>
            </div>
            <div class="right-hole-container">
              <div class="hole hole-3"></div>
              <div class="hole hole-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="screw screw-1">
        <div class="dot"></div>
      </div>
      <div class="screw screw-2">
        <div class="dot"></div>
      </div>
      <div class="screw screw-3">
        <div class="dot"></div>
      </div>
      <div class="screw screw-4">
        <div class="dot"></div>
      </div>
    </div>
    </div>`}}customElements.define("tape-cassette",c);const x={play:"&#9654;",fastfwd:"&#9197;",pause:"&#9208;",rewind:"&#9198;",record:"&#9210;",stop:"&#9209;",eject:"&#9167;"};class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.label=this.getAttribute("type"),this.label==="stop"&&this.style.setProperty("--size","90px"),this.icon=x[this.label],this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="button-container">
        <div class="icon">${this.icon}</div>
        <div class="button"></div>
      </div>
      <div class="label">${this.label}</div>
    </div>`}}customElements.define("tape-button",p);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
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
    </div>`}}customElements.define("tape-container",h);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 100%;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${b.styles}</style>
    <div class="container">
      <speaker-container></speaker-container>
      <tape-container></tape-container>
      <speaker-container></speaker-container>
    </div>`}}customElements.define("speaker-tape-container",b);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${m.styles}</style>
    <div class="container">
      <handle-antenna></handle-antenna>
      <div class="body">
        <dial-container></dial-container>
        <speaker-tape-container></speaker-tape-container>
      </div>
    </div>`}}customElements.define("radio-cassette",m);
