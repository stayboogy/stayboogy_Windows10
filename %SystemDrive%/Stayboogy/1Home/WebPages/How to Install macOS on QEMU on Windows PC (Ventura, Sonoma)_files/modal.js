void 0===TCB_Front.js_modules.modal&&TCB_Front.setModuleLoadedStatus("modal",!1),(t=>{if(!TCB_Front.isModuleLoaded("modal")){TCB_Front.Utils.isEditorPage()||t(window).on("tcb_after_dom_ready",(()=>{const t=Array.from(TCB_Front.$body.find('[data-action="open-modal"]')),a=t.map((t=>t.getAttribute("data-modal-type")));TVE_Dash.add_load_item("tcb-modals",a,(a=>{t.forEach((t=>{const o=t.getAttribute("data-modal-type");if(a[o]){const r=e.instance(a[o],o,{size:t.getAttribute("data-modal-size")||"medium"});t.addEventListener("click",(()=>r.open())),TCB_Front.Hooks.doAction("tcb-modal.loaded",o,r,t)}}))}))}));class e{constructor(e,a){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.$element=t("<div></div>").html(e),this.type=a,this.options=o,this.callbacks={}}static get $wrapper(){return e.$_wrapper||(e.$_wrapper=t('<div class="tve-modal-wrapper"><div class="tve-modal-inner"></div></div>').appendTo(t("body")),e.$_wrapper.on("mousedown",(t=>{t.target===e.$_wrapper[0]&&e.close()})),document.addEventListener("keyup",(t=>{"Escape"===t.key&&e.isOpen()&&e.close()}))),e.$_wrapper}static get $inner(){return e.$_inner||(e.$_inner=e.$wrapper.find(".tve-modal-inner"),e.$_inner.on("click",'[data-dismiss="true"]',(()=>e.close())),e.$_inner.on("click change input keyup","[data-trigger]",(t=>{const a=t.currentTarget,o=a.getAttribute("data-trigger"),r=a.getAttribute("data-fn");(o===t.type||"onEnter"===o&&"keyup"===t.type&&"Enter"===t.key)&&r&&e.getCurrentOpenModal().executeCallback(r,t,a)}))),e.$_inner}static get closeButton(){return'<button class="tve-modal-x" data-dismiss="true"></button>'}static isOpen(){return e.$wrapper.hasClass("tve-modal-open")}static close(){if(e.isOpen()){const t=e.$wrapper.data("modal");t&&t.executeCallback("before-close")}e.$wrapper.removeClass("tve-modal-open").removeData("modal"),e.$inner.empty(),TCB_Front.Hooks.doAction("tcb-modal.close")}static getCurrentOpenModal(){return e.$wrapper.data("modal")}static instance(t,a,o){return new e(t,a,o)}registerCallback(t,e){return this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(e),this}executeCallback(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];this.callbacks[t]&&this.callbacks[t].forEach((t=>t(...a))),TCB_Front.Hooks.doAction(`tcb-modal.${t}`,this.type,this)}open(){this.executeCallback("before-open"),e.$wrapper.addClass("tve-modal-open").attr("data-modal-type",this.type).data("modal",this),e.$inner.empty().append(e.closeButton).append(this.$element).attr("data-size",this.options.size),this.executeCallback("after-open")}isOpen(){return e.isOpen()&&this===e.$wrapper.data("modal")}}TCB_Front.modal=e,TCB_Front.setModuleLoadedStatus("modal",!0)}})(ThriveGlobal.$j);