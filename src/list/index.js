{
  class SqsCustomList extends HTMLElement {
    static get observedAttributes() {
      return [
        "flexDirection",
        "alignItems",
        "justifyContent",
        "itemWidth",
        "itemHeight",
        "gap",
      ];
    }

    static LIST_CONTAINER_CLASS = "sqs-custom-list-container";
    static LIST_ITEM_CLASS = "sqs-custom-list-item";
    static LIST_CONTAINER_SELECTOR = `.${SqsCustomList.LIST_CONTAINER_CLASS}`;
    static LIST_ITEM_SELECTOR = `.${SqsCustomList.LIST_ITEM_CLASS}`;

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    attr(name, defaultValue) {
      return this.getAttribute(name) || defaultValue;
    }

    get template() {
      const flexDirection = this.attr("flexDirection", "row");
      const alignItems = this.attr("alignItems", "stretch");
      const justifyContent = this.attr("justifyContent", "flex-start");
      const gap = this.attr("gap", "0");

      return `
          <style>
            * {
              box-sizing: border-box;
            }
            ${SqsCustomList.LIST_CONTAINER_SELECTOR} {
              display: flex;
              margin: 0;
              padding: 0;
              list-style-type: none;
              flex-direction: ${flexDirection};
              align-items: ${alignItems};
              justify-content: ${justifyContent};
              gap: ${gap};
              flex-wrap: nowrap;
              height: 100%;
              width: 100%;
            }
            @media screen and (max-width: 600px) {
              ${SqsCustomList.LIST_CONTAINER_SELECTOR} {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: initial;
                flex-wrap: wrap;
                border: 1px solid blue;
                height: auto;
                flex: 1;
              }
            }
            ${SqsCustomList.LIST_ITEM_SELECTOR} {
              display: flex;
              // flex: 1;
              text-align: center;
            }
            ${SqsCustomList.LIST_ITEM_SELECTOR} a {
              display: block;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              position: relative;
            }
            ${SqsCustomList.LIST_ITEM_SELECTOR} img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
              vertical-align: middle;
            }
          </style>
          
          <div class="${SqsCustomList.LIST_CONTAINER_CLASS}">
            <slot></slot>
          </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this[name] = newValue;
        this.render();
      }
    }

    connectedCallback() {
      this.render();
      this.shadowRoot
        .querySelector("slot")
        .addEventListener("slotchange", this.handleSlotChange.bind(this));
    }

    handleSlotChange() {
      const assignedNodes = this.shadowRoot
        .querySelector("slot")
        .assignedNodes();

      assignedNodes.forEach((node) => {
        if (
          node.classList &&
          node.classList.contains(SqsCustomList.LIST_ITEM_CLASS)
        ) {
          const itemWidth = this.attr("itemWidth", "auto");
          const itemHeight = this.attr("itemHeight", "auto");

          if (itemWidth && itemHeight) {
            node.style.width = itemWidth;
            node.style.height = itemHeight;
          }

          const imgElement = node.querySelector("img");

          if (imgElement) {
            imgElement.style.objectFit = "contain";
            imgElement.style.maxWidth = "100%";
            imgElement.style.maxHeight = "100%";
            imgElement.style.verticalAlign = "middle";
          }
        }
      });
    }

    render() {
      this.shadowRoot.innerHTML = this.template;
    }
  }

  customElements.define("sqs-custom-list", SqsCustomList);

  /* Usage remains the same */

  /*
  How to use it:
  
  <sqs-custom-list 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="space-around" 
    itemWidth="100px" 
    itemHeight="50px" 
    gap="10px">
      <div class="${SqsCustomList.LIST_ITEM_CLASS}">Item 1</div>
      <div class="${SqsCustomList.LIST_ITEM_CLASS}">Item 2</div>
      <div class="${SqsCustomList.LIST_ITEM_CLASS}">Item 3</div>
  </sqs-custom-list>
  */
}
