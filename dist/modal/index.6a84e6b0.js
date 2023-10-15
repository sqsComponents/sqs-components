{let t=`
    <style>
    * {
      box-sizing: border-box;
    }

    .sqs-custom-modal-overlay {
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

    .sqs-custom-modal {
      z-index: 9999;
      display: none;
      z-index: 1;
      width: 600px;
      height: 400px;
      overflow: auto;
      background-color: #ffffff;
      position: relative;
      padding: 50px 70px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .sqs-custom-modal-content {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .sqs-custom-modal-close {
      color: #ababab;
      float: right;
      font-weight: bold;
      font-size: 22px;
      line-height: 1em;
      position: absolute;
      top: 10px;
      right: 14px;
      transition: color 0.3s ease;
    }

    .sqs-custom-modal-close:hover {
      color: #000000;
      text-decoration: none;
      cursor: pointer;
    }

    .sqs-custom-modal-close:hover,
    .sqs-custom-modal-close:focus {
      color: #000000;
      text-decoration: none;
      cursor: pointer;
    }      
    </style>`,s=`
    <div class="sqs-custom-modal-overlay">
      <div class="sqs-custom-modal">
        <div class="sqs-custom-modal-content">
          <span class="sqs-custom-modal-close">&times;</span>
          <slot></slot>
        </div>
      </div>
    </div>`;class o extends HTMLElement{OVERLAY_CLASS_SELECTOR=".sqs-custom-modal-overlay";MODAL_CLASS_SELECTOR=".sqs-custom-modal";CLOSE_CLASS_SELECTOR=".sqs-custom-modal-close";CONTENT_CLASS_SELECTOR=".sqs-custom-modal-content";constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
    ${t}
    ${s}
    `}getPropsValues(){let t=this.getAttribute("alignItems"),s=this.getAttribute("justifyContent"),o=this.getAttribute("flexDirection"),e=this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR),i=this.shadowRoot.querySelector(this.CONTENT_CLASS_SELECTOR);t&&(i.style.alignItems=t,e.style.alignItems=t),s&&(i.style.justifyContent=s,e.style.alignItems=t),o&&(i.style.flexDirection=o,e.style.flexDirection=o)}connectedCallback(){this.getPropsValues(),this.shadowRoot.querySelector(this.CLOSE_CLASS_SELECTOR).addEventListener("click",()=>{this.close()}),this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR).addEventListener("click",t=>{t.target===t.currentTarget&&this.close()})}close(){let t=this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR),s=this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);t.style.display="none",s.style.display="none",t.style.opacity=0,s.style.opacity=0}open(){let t=this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR),s=this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);t.style.display="flex",s.style.display="block",setTimeout(()=>{t.style.opacity=1},200),setTimeout(()=>{s.style.opacity=1},500)}}customElements.define("sqs-custom-modal",o);/*
How to use it:

<sqs-custom-modal id="modal1">
  <p>Some text in the Modal..</p>
</sqs-custom-modal>

<button onclick="document.getElementById('modal1').open()">
  Open Modal
</button>
*//*
How to use props:

<sqs-custom-modal 
  id="modal1" 
  justifyContent="center" 
  alignItems="center" 
  direction="column"
>
  <p>Some text in the Modal..</p>
</sqs-custom-modal>

<button onclick="document.getElementById('modal1').open()">
  Open Modal
</button>
*/}//# sourceMappingURL=index.6a84e6b0.js.map

//# sourceMappingURL=index.6a84e6b0.js.map
