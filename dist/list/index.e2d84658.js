{class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}getPropsValuesAndRenderList(){let t=this.getAttribute("flexDirection")||"row",e=this.getAttribute("alignItems")||"stretch",i=this.getAttribute("justifyContent")||"flex-start",s=this.getAttribute("itemWidth")||"auto",l=this.getAttribute("itemHeight")||"auto",o=this.getAttribute("gap")||"0";this.shadowRoot.innerHTML=`
        <style>
          * {
            box-sizing: border-box;
          }
  
          .sqs-custom-list-container {
            display: flex;
            margin: 0;
            padding: 0;
            list-style-type: none;
            flex-direction: ${t};
            align-items: ${e};
            justify-content: ${i};
            gap: ${o};
            flex-wrap: nowrap;
            height: 100%;
            width: 100%;
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
      `;let n=this.shadowRoot.querySelector("slot");n.addEventListener("slotchange",()=>{let t=n.assignedNodes();t.forEach(t=>{if(t.classList&&t.classList.contains("sqs-custom-list-item")){s&&l&&(t.style.width=s,t.style.height=l);let e=t.querySelector("img");e&&(e.style.objectFit="contain",e.style.maxWidth="100%",e.style.maxHeight="100%",e.style.verticalAlign="middle")}})})}connectedCallback(){this.getPropsValuesAndRenderList()}}customElements.define("sqs-custom-list",t);/*
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
  */}//# sourceMappingURL=index.e2d84658.js.map

//# sourceMappingURL=index.e2d84658.js.map
