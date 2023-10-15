{
  class SqsCustomModal extends HTMLElement {
    OVERLAY_CLASS_SELECTOR = ".sqs-custom-modal-overlay";
    MODAL_CLASS_SELECTOR = ".sqs-custom-modal";
    CLOSE_CLASS_SELECTOR = ".sqs-custom-modal-close";
    CONTENT_CLASS_SELECTOR = ".sqs-custom-modal-content";

    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }

    getPropsValues() {
      const modalTitle = this.getAttribute("modalTitle");
      const modalTitlePosition =
        this.getAttribute("modalTitlePosition") || "center";
      const closeIconSize = this.getAttribute("closeIconSize") || "40px";
      const modalBgColor = this.getAttribute("modalBgColor") || "#ffffff";
      const modalTextColor = this.getAttribute("modalTextColor") || "#000000";
      const modalWidth = this.getAttribute("modalWidth") || "600px";
      const modalHeight = this.getAttribute("modalHeight") || "400px";
      const modalPadding = this.getAttribute("modalPadding") || "30px 40px";

      this.shadowRoot.innerHTML = `
        <style>
        * {
          box-sizing: border-box;
          color: ${modalTextColor};
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
          width: ${modalWidth};
          height: ${modalHeight};
          overflow: auto;
          background-color: ${modalBgColor};
          color: ${modalTextColor};
          position: relative;
          padding: ${modalPadding};
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sqs-custom-modal h3 {
          text-align: ${modalTitlePosition};
        }
    
        .sqs-custom-modal-content {
          display: flex;
          width: 100%;
          height: 100%;
          color: ${modalTextColor};
          justify-content: stretch;
          flex-direction: column;
        }
    
        .sqs-custom-modal-close {
          float: right;
          font-size: ${closeIconSize};
          line-height: 1em;
          position: absolute;
          top: -2px;
          right: 14px;
          transition: color 0.3s ease;
          color: ${modalTextColor};
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
    
        @media screen and (max-width: 600px)) {
          .sqs-custom-modal {
            width: calc(100vw - 5%);
            height: calc(100vh - 5%);
          }
    
          .sqs-custom-modal-content {
            display: flex;
            flex-wrap: wrap !important;
          }
        }
        </style>

        <div class="sqs-custom-modal-overlay">
          <div class="sqs-custom-modal">
            <div class="sqs-custom-modal-content">
              <span class="sqs-custom-modal-close">&times;</span>
              ${
                modalTitle
                  ? `<h3 style="align-items: center;">${modalTitle}</h3>`
                  : ""
              }
              <slot></slot>
            </div>
          </div>
        </div>
      `;
    }

    connectedCallback() {
      this.getPropsValues();

      this.shadowRoot
        .querySelector(this.CLOSE_CLASS_SELECTOR)
        .addEventListener("click", () => {
          this.close();
        });

      this.shadowRoot
        .querySelector(this.OVERLAY_CLASS_SELECTOR)
        .addEventListener("click", (e) => {
          if (e.target === e.currentTarget) {
            this.close();
          }
        });
    }

    close() {
      const modalOverlay = this.shadowRoot.querySelector(
        this.OVERLAY_CLASS_SELECTOR
      );
      const modal = this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);
      modalOverlay.style.display = "none";
      modal.style.display = "none";
      modalOverlay.style.opacity = 0;
      modal.style.opacity = 0;
    }

    open() {
      const modalOverlay = this.shadowRoot.querySelector(
        this.OVERLAY_CLASS_SELECTOR
      );
      const modal = this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);
      modalOverlay.style.display = "flex";
      modal.style.display = "block";

      void setTimeout(() => {
        modalOverlay.style.opacity = 1;
      }, 200);

      void setTimeout(() => {
        modal.style.opacity = 1;
      }, 500);
    }
  }

  customElements.define("sqs-custom-modal", SqsCustomModal);

  /*
How to use it:

<sqs-custom-modal id="modal1">
  <p>Some text in the Modal..</p>
</sqs-custom-modal>

<button onclick="document.getElementById('modal1').open()">
  Open Modal
</button>
*/

  /*
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
*/
}
