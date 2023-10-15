{class t extends HTMLElement{OVERLAY_CLASS_SELECTOR=".sqs-custom-modal-overlay";MODAL_CLASS_SELECTOR=".sqs-custom-modal";CLOSE_CLASS_SELECTOR=".sqs-custom-modal-close";CONTENT_CLASS_SELECTOR=".sqs-custom-modal-content";constructor(){super(),this.attachShadow({mode:"open"})}getPropsValues(){let t=this.getAttribute("modalTitle"),o=this.getAttribute("modalTitlePosition")||"center",s=this.getAttribute("closeIconSize")||"40px",e=this.getAttribute("closeIconPosition")||"0px, 14px",i=this.getAttribute("modalBgColor")||"#ffffff",l=this.getAttribute("modalTextColor")||"#000000",a=this.getAttribute("modalWidth")||"600px",c=this.getAttribute("modalHeight")||"400px",n=this.getAttribute("modalPadding")||"30px 40px",[r,d]=e.split(", ").map(t=>t.trim());this.shadowRoot.innerHTML=`
        <style>
        * {
          box-sizing: border-box;
          color: ${l};
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
          border-radius: 25px;
          z-index: 9999;
          display: none;
          z-index: 1;
          width: ${a};
          height: ${c};
          overflow: auto;
          background-color: ${i};
          color: ${l};
          position: relative;
          padding: ${n};
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sqs-custom-modal h3 {
          text-align: ${o};
        }
    
        .sqs-custom-modal-content {
          display: flex;
          width: 100%;
          height: 100%;
          color: ${l};
          justify-content: stretch;
          flex-direction: column;
        }
    
        .sqs-custom-modal-close {
          float: right;
          font-size: ${s};
          line-height: 1em;
          position: absolute;
          top: ${r};
          right: ${d};
          transition: color 0.3s ease;
          color: ${l};
        }
    
        .sqs-custom-modal-close:hover {
          text-decoration: none;
          cursor: pointer;
        }
    
        .sqs-custom-modal-close:hover,
        .sqs-custom-modal-close:focus {
          text-decoration: none;
          cursor: pointer;
        }      
    
        @media screen and (max-width: 600px) {
          .sqs-custom-modal {
            width: calc(100vw - 5%);
            height: calc(100vh - 5%);
          }
    
          .sqs-custom-modal-content {
            display: flex;
            flex-wrap: wrap !important;
            align-items: center;
            justify-content: space-between;
          }
        }
        </style>

        <div class="sqs-custom-modal-overlay">
          <div class="sqs-custom-modal">
            <div class="sqs-custom-modal-content">
              <span class="sqs-custom-modal-close">&times;</span>
              ${t?`<h3 style="align-items: center;">${t}</h3>`:""}
              <slot></slot>
            </div>
          </div>
        </div>
      `}connectedCallback(){this.getPropsValues(),this.shadowRoot.querySelector(this.CLOSE_CLASS_SELECTOR).addEventListener("click",()=>{this.close()}),this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR).addEventListener("click",t=>{t.target===t.currentTarget&&this.close()})}close(){let t=this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR),o=this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);t.style.display="none",o.style.display="none",t.style.opacity=0,o.style.opacity=0}open(){let t=this.shadowRoot.querySelector(this.OVERLAY_CLASS_SELECTOR),o=this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);t.style.display="flex",o.style.display="block",setTimeout(()=>{t.style.opacity=1},200),setTimeout(()=>{o.style.opacity=1},500)}}customElements.define("sqs-custom-modal",t);/*
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
