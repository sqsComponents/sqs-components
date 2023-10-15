{class t extends HTMLElement{static get observedAttributes(){return["closeIconSize","closeIconPosition","modalBgColor","modalTextColor","modalWidth","modalHeight","modalPadding"]}static OVERLAY_CLASS="sqs-custom-modal-overlay";static MODAL_CLASS="sqs-custom-modal";static CONTENT_CLASS="sqs-custom-modal-content";static CLOSE_CLASS="sqs-custom-modal-close";static CONTENT_CLASS_SELECTOR=`.${t.CONTENT_CLASS}`;static OVERLAY_CLASS_SELECTOR=`.${t.OVERLAY_CLASS}`;static MODAL_CLASS_SELECTOR=`.${t.MODAL_CLASS}`;static CLOSE_CLASS_SELECTOR=`.${t.CLOSE_CLASS}`;constructor(){super(),this.attachShadow({mode:"open"})}attr(t,o){return this.getAttribute(t)||o}get template(){let o=this.attr("closeIconSize","40px"),e=this.attr("closeIconPosition","0px, 14px"),s=this.attr("modalBgColor","#ffffff"),i=this.attr("modalTextColor","#000000"),a=this.attr("modalWidth","600px"),S=this.attr("modalHeight","400px"),l=this.attr("modalPadding","30px 40px"),[r,c]=e.split(", ").map(t=>t.trim());return`
      <style>
      * {
        box-sizing: border-box;
        color: ${i};
      }
  
      ${t.OVERLAY_CLASS_SELECTOR} {
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;
        opacity: 0;
      }
  
      ${t.MODAL_CLASS_SELECTOR} {
        border-radius: 25px;
        z-index: 9999;
        display: none;
        z-index: 1;
        width: ${a};
        height: ${S};
        overflow: auto;
        background-color: ${s};
        color: ${i};
        position: relative;
        padding: ${l};
        opacity: 0;
        transition: opacity 0.3s ease;
      }
  
      ${t.CONTENT_CLASS_SELECTOR} {
        display: flex;
        width: 100%;
        height: 100%;
        color: ${i};
        justify-content: stretch;
        flex-direction: column;
      }
  
      ${t.CLOSE_CLASS_SELECTOR} {
        float: right;
        font-size: ${o};
        line-height: 1em;
        position: absolute;
        top: ${r};
        right: ${c};
        transition: color 0.3s ease;
        color: ${i};
      }
  
      ${t.CLOSE_CLASS_SELECTOR}:hover {
        text-decoration: none;
        cursor: pointer;
      }
  
      ${t.CLOSE_CLASS_SELECTOR}:hover,
      ${t.CLOSE_CLASS_SELECTOR}:focus {
        text-decoration: none;
        cursor: pointer;
      }      
  
      @media screen and (max-width: 600px) {
        ${t.MODAL_CLASS_SELECTOR} {
          width: calc(100vw - 5%);
          height: calc(100vh - 5%);
        }
  
        ${t.CONTENT_CLASS_SELECTOR} {
          display: flex;
          flex-wrap: wrap !important;
          align-items: center;
          justify-content: flex-start;
        }
      }
      </style>
      
        <div class="${t.OVERLAY_CLASS}">
          <div class="${t.MODAL_CLASS}">
            <div class="${t.CONTENT_CLASS}">
              <span class="${t.CLOSE_CLASS}">&times;</span>
              <slot></slot>
            </div>
          </div>
        </div>
      `}connectedCallback(){this.render(),this.shadowRoot.querySelector(t.CLOSE_CLASS_SELECTOR).addEventListener("click",()=>this.close()),this.shadowRoot.querySelector(t.OVERLAY_CLASS_SELECTOR).addEventListener("click",t=>{t.target===t.currentTarget&&this.close()})}render(){this.shadowRoot.innerHTML=this.template}close(){let o=this.shadowRoot.querySelector(t.OVERLAY_CLASS_SELECTOR),e=this.shadowRoot.querySelector(t.MODAL_CLASS_SELECTOR);o.style.display="none",e.style.display="none",o.style.opacity=0,e.style.opacity=0}open(){let o=this.shadowRoot.querySelector(t.OVERLAY_CLASS_SELECTOR),e=this.shadowRoot.querySelector(t.MODAL_CLASS_SELECTOR);o.style.display="flex",e.style.display="block",setTimeout(()=>{o.style.opacity=1},200),setTimeout(()=>{e.style.opacity=1},500)}}customElements.define("sqs-custom-modal",t);/*
  How to use it:
  
  <sqs-custom-modal id="modal1">
    <p>Some text in the Modal..</p>
  </sqs-custom-modal>
  
  <button onclick="document.getElementById('modal1').open()">
    Open Modal
  </button>
  */}//# sourceMappingURL=index.6a84e6b0.js.map

//# sourceMappingURL=index.6a84e6b0.js.map
