{class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}getPropsValuesAndRenderList(){let t=this.getAttribute("flexDirection")||"row",e=this.getAttribute("alignItems")||"stretch",s=this.getAttribute("justifyContent")||"flex-start",i=this.getAttribute("itemWidth")||"auto",o=this.getAttribute("itemHeight")||"auto",l=this.getAttribute("gap")||"0";this.shadowRoot.innerHTML=`
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
            justify-content: ${s};
            gap: ${l};
            flex-wrap: nowrap;
            height: 100%;
            width: 100%;
            overflow-y: auto;
          }
  
          .sqs-custom-list-item {
            display: flex;
            padding: 0;
            margin: 0;
          }
        </style>
  
        <div class="sqs-custom-list-container">
          <slot></slot>
        </div>
      `;let n=this.shadowRoot.querySelector("slot");n.addEventListener("slotchange",()=>{let t=n.assignedNodes();t.forEach(t=>{if(t.classList&&t.classList.contains("sqs-custom-list-item")){t.style.width=i,t.style.height=o;let e=t.querySelector("img");e&&(e.style.objectFit="cover",e.style.width=i,e.style.height=o)}})})}connectedCallback(){this.getPropsValuesAndRenderList()}}customElements.define("sqs-custom-list",t);/*
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
