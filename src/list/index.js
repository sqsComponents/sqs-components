{
  class SqsCustomList extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
    }

    getPropsValuesAndRenderList() {
      const flexDirection = this.getAttribute("flexDirection") || "row";
      const alignItems = this.getAttribute("alignItems") || "stretch";
      const justifyContent =
        this.getAttribute("justifyContent") || "flex-start";
      const itemWidth = this.getAttribute("itemWidth") || "auto";
      const itemHeight = this.getAttribute("itemHeight") || "auto";
      const gap = this.getAttribute("gap") || "0";

      this.shadowRoot.innerHTML = `
        <style>
          * {
            box-sizing: border-box;
          }
  
          .sqs-custom-list-container {
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
            .sqs-custom-list-container {
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              gap: initial;
              flex-wrap: wrap;
              border: 1px solid red;
            }
          }
  
          .sqs-custom-list-item {
            display: flex;
            flex: 1;
            text-align: center;
          }

          .sqs-custom-list-item a {
            display: inline-block; 
            width: 100%; 
            height: 100%;
            box-sizing: border-box;
            display: block;
            position: relative;
          }

          .sqs-custom-list-item img {
            max-width: 100%; 
            max-height: 100%; 
            object-fit: contain; 
            vertical-align: middle;
          }
        </style>
  
        <div class="sqs-custom-list-container">
          <slot></slot>
        </div>
      `;

      const slot = this.shadowRoot.querySelector("slot");

      slot.addEventListener("slotchange", () => {
        const assignedNodes = slot.assignedNodes();
        assignedNodes.forEach((node) => {
          if (
            node.classList &&
            node.classList.contains("sqs-custom-list-item")
          ) {
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
      });
    }

    connectedCallback() {
      this.getPropsValuesAndRenderList();
    }
  }

  customElements.define("sqs-custom-list", SqsCustomList);

  /*
  How to use it:
  
  <sqs-custom-list 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="space-around" 
    itemWidth="100px" 
    itemHeight="50px" 
    gap="10px">
      <div class="sqs-custom-list-item">Item 1</div>
      <div class="sqs-custom-list-item">Item 2</div>
      <div class="sqs-custom-list-item">Item 3</div>
  </sqs-custom-list>
  */
}
