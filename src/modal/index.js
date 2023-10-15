{
  const styles = `
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
    </style>`;

  const component = `
    <div class="sqs-custom-modal-overlay">
      <div class="sqs-custom-modal">
        <div class="sqs-custom-modal-content">
          <span class="sqs-custom-modal-close">&times;</span>
          <slot></slot>
        </div>
      </div>
    </div>`;

  class SqsCustomModal extends HTMLElement {
    OVERLAY_CLASS_SELECTOR = ".sqs-custom-modal-overlay";
    MODAL_CLASS_SELECTOR = ".sqs-custom-modal";
    CLOSE_CLASS_SELECTOR = ".sqs-custom-modal-close";
    CONTENT_CLASS_SELECTOR = ".sqs-custom-modal-content";

    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.shadowRoot.innerHTML = `
    ${styles}
    ${component}
    `;
    }

    getPropsValues() {
      const alignItems = this.getAttribute("alignItems");
      const justifyContent = this.getAttribute("justifyContent");
      const flexDirection = this.getAttribute("flexDirection");
      const modal = this.shadowRoot.querySelector(this.MODAL_CLASS_SELECTOR);
      const modalContent = this.shadowRoot.querySelector(
        this.CONTENT_CLASS_SELECTOR
      );

      if (alignItems) {
        modalContent.style.alignItems = alignItems;
        modal.style.alignItems = alignItems;
      }

      if (justifyContent) {
        modalContent.style.justifyContent = justifyContent;
        modal.style.alignItems = alignItems;
      }

      if (flexDirection) {
        modalContent.style.flexDirection = flexDirection;
        modal.style.flexDirection = flexDirection;
      }
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
