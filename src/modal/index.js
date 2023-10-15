{
  class SqsCustomModal extends HTMLElement {
    static get observedAttributes() {
      return [
        "closeIconSize",
        "closeIconPosition",
        "modalBgColor",
        "modalTextColor",
        "modalWidth",
        "modalHeight",
        "modalPadding",
      ];
    }

    static OVERLAY_CLASS = "sqs-custom-modal-overlay";
    static MODAL_CLASS = "sqs-custom-modal";
    static CONTENT_CLASS = "sqs-custom-modal-content";
    static CLOSE_CLASS = "sqs-custom-modal-close";
    static CONTENT_CLASS_SELECTOR = `.${SqsCustomModal.CONTENT_CLASS}`;
    static OVERLAY_CLASS_SELECTOR = `.${SqsCustomModal.OVERLAY_CLASS}`;
    static MODAL_CLASS_SELECTOR = `.${SqsCustomModal.MODAL_CLASS}`;
    static CLOSE_CLASS_SELECTOR = `.${SqsCustomModal.CLOSE_CLASS}`;

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    attr(name, defaultValue) {
      return this.getAttribute(name) || defaultValue;
    }

    get template() {
      const closeIconSize = this.attr("closeIconSize", "40px");
      const closeIconPosition = this.attr("closeIconPosition", "0px, 14px");
      const modalBgColor = this.attr("modalBgColor", "#ffffff");
      const modalTextColor = this.attr("modalTextColor", "#000000");
      const modalWidth = this.attr("modalWidth", "600px");
      const modalHeight = this.attr("modalHeight", "400px");
      const modalPadding = this.attr("modalPadding", "30px 40px");
      const [closeIconTop, closeIconRight] = closeIconPosition
        .split(", ")
        .map((value) => value.trim());

      return `
      <style>
      * {
        box-sizing: border-box;
        color: ${modalTextColor};
      }
  
      ${SqsCustomModal.OVERLAY_CLASS_SELECTOR} {
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
  
      ${SqsCustomModal.MODAL_CLASS_SELECTOR} {
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
  
      ${SqsCustomModal.CONTENT_CLASS_SELECTOR} {
        display: flex;
        width: 100%;
        height: 100%;
        color: ${modalTextColor};
        justify-content: stretch;
        flex-direction: column;
      }
  
      ${SqsCustomModal.CLOSE_CLASS_SELECTOR} {
        float: right;
        font-size: ${closeIconSize};
        line-height: 1em;
        position: absolute;
        top: ${closeIconTop};
        right: ${closeIconRight};
        transition: color 0.3s ease;
        color: ${modalTextColor};
      }
  
      ${SqsCustomModal.CLOSE_CLASS_SELECTOR}:hover {
        text-decoration: none;
        cursor: pointer;
      }
  
      ${SqsCustomModal.CLOSE_CLASS_SELECTOR}:hover,
      ${SqsCustomModal.CLOSE_CLASS_SELECTOR}:focus {
        text-decoration: none;
        cursor: pointer;
      }      
  
      @media screen and (max-width: 600px) {
        ${SqsCustomModal.MODAL_CLASS_SELECTOR} {
          width: calc(100vw - 5%);
          height: calc(100vh - 5%);
        }
  
        ${SqsCustomModal.CONTENT_CLASS_SELECTOR} {
          display: flex;
          flex-wrap: wrap !important;
          align-items: center;
          justify-content: flex-start;
        }
      }
      </style>
      
        <div class="${SqsCustomModal.OVERLAY_CLASS}">
          <div class="${SqsCustomModal.MODAL_CLASS}">
            <div class="${SqsCustomModal.CONTENT_CLASS}">
              <span class="${SqsCustomModal.CLOSE_CLASS}">&times;</span>
              <slot></slot>
            </div>
          </div>
        </div>
      `;
    }

    connectedCallback() {
      this.render();
      this.shadowRoot
        .querySelector(SqsCustomModal.CLOSE_CLASS_SELECTOR)
        .addEventListener("click", () => this.close());
      this.shadowRoot
        .querySelector(SqsCustomModal.OVERLAY_CLASS_SELECTOR)
        .addEventListener("click", (e) => {
          if (e.target === e.currentTarget) this.close();
        });
    }

    render() {
      this.shadowRoot.innerHTML = this.template;
    }

    close() {
      const modalOverlay = this.shadowRoot.querySelector(
        SqsCustomModal.OVERLAY_CLASS_SELECTOR
      );
      const modal = this.shadowRoot.querySelector(
        SqsCustomModal.MODAL_CLASS_SELECTOR
      );
      modalOverlay.style.display = "none";
      modal.style.display = "none";
      modalOverlay.style.opacity = 0;
      modal.style.opacity = 0;
    }

    open() {
      const modalOverlay = this.shadowRoot.querySelector(
        SqsCustomModal.OVERLAY_CLASS_SELECTOR
      );
      const modal = this.shadowRoot.querySelector(
        SqsCustomModal.MODAL_CLASS_SELECTOR
      );
      modalOverlay.style.display = "flex";
      modal.style.display = "block";

      setTimeout(() => {
        modalOverlay.style.opacity = 1;
      }, 200);

      setTimeout(() => {
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
}
