{class t extends HTMLElement{static get observedAttributes(){return["flexDirection","alignItems","justifyContent","itemWidth","itemHeight","gap"]}static LIST_CONTAINER_CLASS="sqs-custom-list-container";static LIST_ITEM_CLASS="sqs-custom-list-item";static LIST_CONTAINER_SELECTOR=`.${t.LIST_CONTAINER_CLASS}`;static LIST_ITEM_SELECTOR=`.${t.LIST_ITEM_CLASS}`;constructor(){super(),this.attachShadow({mode:"open"})}attr(t,e){return this.getAttribute(t)||e}get template(){let e=this.attr("flexDirection","row"),i=this.attr("alignItems","stretch"),s=this.attr("justifyContent","flex-start"),a=this.attr("gap","0");return this.attr("itemWidth","auto"),this.attr("itemHeight","auto"),`
          <style>
            * {
              box-sizing: border-box;
            }
            ${t.LIST_CONTAINER_SELECTOR} {
              display: flex;
              margin: 0;
              padding: 0;
              list-style-type: none;
              flex-direction: ${e};
              align-items: ${i};
              justify-content: ${s};
              gap: ${a};
              flex-wrap: nowrap;
              height: 100%;
              width: 100%;
              flex: 1;
            }

            ${t.LIST_ITEM_SELECTOR} {
              display: flex;
              text-align: center;
            }
            ${t.LIST_ITEM_SELECTOR} a {
              display: block;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              position: relative;
            }
            ${t.LIST_ITEM_SELECTOR} img {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
              vertical-align: middle;
            }

            @media screen and (max-width: 600px) {
              ${t.LIST_CONTAINER_SELECTOR} {
                flex-direction: column-reverse;
                gap: 40px;
                flex-wrap: wrap;
              }
            }
          </style>
          
          <div class="${t.LIST_CONTAINER_CLASS}">
            <slot></slot>
          </div>
        `}attributeChangedCallback(t,e,i){e!==i&&(this[t]=i,this.render())}connectedCallback(){this.render(),this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.handleSlotChange.bind(this))}handleSlotChange(){let e=this.shadowRoot.querySelector("slot").assignedNodes();e.forEach(e=>{if(e.classList&&e.classList.contains(t.LIST_ITEM_CLASS)){// const itemWidth = this.attr("itemWidth", "auto");
// const itemHeight = this.attr("itemHeight", "auto");
// if (itemWidth && itemHeight) {
//   node.style.width = itemWidth;
//   node.style.height = itemHeight;
// }
let t=e.querySelector("img");t&&(t.style.objectFit="contain",t.style.maxWidth="100%",t.style.maxHeight="100%",t.style.verticalAlign="middle")}})}render(){this.shadowRoot.innerHTML=this.template}}customElements.define("sqs-custom-list",t);/* Usage remains the same *//*
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
  */}//# sourceMappingURL=index.e2d84658.js.map

//# sourceMappingURL=index.e2d84658.js.map
