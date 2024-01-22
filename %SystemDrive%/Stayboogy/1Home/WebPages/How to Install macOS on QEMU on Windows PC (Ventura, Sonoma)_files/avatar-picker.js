!function(){var t={4725:function(t){class e{static getAvatarUrl(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:96,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:404;return`https://secure.gravatar.com/avatar/${e.md5(t.toLowerCase().trim())}?size=${a}&default=${encodeURIComponent(n)}`}static md5(t){const e="0123456789abcdef";function a(t){let a="";for(let n=0;n<=3;n++)a+=e.charAt(t>>8*n+4&15)+e.charAt(t>>8*n&15);return a}function n(t,e){const a=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(a>>16)<<16|65535&a}function r(t,e,a,r,i,o){return n((s=n(n(e,t),n(r,o)))<<(l=i)|s>>>32-l,a);var s,l}function i(t,e,a,n,i,o,s){return r(e&a|~e&n,t,e,i,o,s)}function o(t,e,a,n,i,o,s){return r(e&n|a&~n,t,e,i,o,s)}function s(t,e,a,n,i,o,s){return r(e^a^n,t,e,i,o,s)}function l(t,e,a,n,i,o,s){return r(a^(e|~n),t,e,i,o,s)}const c=function(t){let e;const a=1+(t.length+8>>6),n=Array.from(16*a);for(e=0;e<16*a;e++)n[e]=0;for(e=0;e<t.length;e++)n[e>>2]|=t.charCodeAt(e)<<e%4*8;return n[e>>2]|=128<<e%4*8,n[16*a-2]=8*t.length,n}(t);let d,h,u,g,m,p=1732584193,v=-271733879,f=-1732584194,w=271733878;for(d=0;d<c.length;d+=16)h=p,u=v,g=f,m=w,p=i(p,v,f,w,c[d+0],7,-680876936),w=i(w,p,v,f,c[d+1],12,-389564586),f=i(f,w,p,v,c[d+2],17,606105819),v=i(v,f,w,p,c[d+3],22,-1044525330),p=i(p,v,f,w,c[d+4],7,-176418897),w=i(w,p,v,f,c[d+5],12,1200080426),f=i(f,w,p,v,c[d+6],17,-1473231341),v=i(v,f,w,p,c[d+7],22,-45705983),p=i(p,v,f,w,c[d+8],7,1770035416),w=i(w,p,v,f,c[d+9],12,-1958414417),f=i(f,w,p,v,c[d+10],17,-42063),v=i(v,f,w,p,c[d+11],22,-1990404162),p=i(p,v,f,w,c[d+12],7,1804603682),w=i(w,p,v,f,c[d+13],12,-40341101),f=i(f,w,p,v,c[d+14],17,-1502002290),v=i(v,f,w,p,c[d+15],22,1236535329),p=o(p,v,f,w,c[d+1],5,-165796510),w=o(w,p,v,f,c[d+6],9,-1069501632),f=o(f,w,p,v,c[d+11],14,643717713),v=o(v,f,w,p,c[d+0],20,-373897302),p=o(p,v,f,w,c[d+5],5,-701558691),w=o(w,p,v,f,c[d+10],9,38016083),f=o(f,w,p,v,c[d+15],14,-660478335),v=o(v,f,w,p,c[d+4],20,-405537848),p=o(p,v,f,w,c[d+9],5,568446438),w=o(w,p,v,f,c[d+14],9,-1019803690),f=o(f,w,p,v,c[d+3],14,-187363961),v=o(v,f,w,p,c[d+8],20,1163531501),p=o(p,v,f,w,c[d+13],5,-1444681467),w=o(w,p,v,f,c[d+2],9,-51403784),f=o(f,w,p,v,c[d+7],14,1735328473),v=o(v,f,w,p,c[d+12],20,-1926607734),p=s(p,v,f,w,c[d+5],4,-378558),w=s(w,p,v,f,c[d+8],11,-2022574463),f=s(f,w,p,v,c[d+11],16,1839030562),v=s(v,f,w,p,c[d+14],23,-35309556),p=s(p,v,f,w,c[d+1],4,-1530992060),w=s(w,p,v,f,c[d+4],11,1272893353),f=s(f,w,p,v,c[d+7],16,-155497632),v=s(v,f,w,p,c[d+10],23,-1094730640),p=s(p,v,f,w,c[d+13],4,681279174),w=s(w,p,v,f,c[d+0],11,-358537222),f=s(f,w,p,v,c[d+3],16,-722521979),v=s(v,f,w,p,c[d+6],23,76029189),p=s(p,v,f,w,c[d+9],4,-640364487),w=s(w,p,v,f,c[d+12],11,-421815835),f=s(f,w,p,v,c[d+15],16,530742520),v=s(v,f,w,p,c[d+2],23,-995338651),p=l(p,v,f,w,c[d+0],6,-198630844),w=l(w,p,v,f,c[d+7],10,1126891415),f=l(f,w,p,v,c[d+14],15,-1416354905),v=l(v,f,w,p,c[d+5],21,-57434055),p=l(p,v,f,w,c[d+12],6,1700485571),w=l(w,p,v,f,c[d+3],10,-1894986606),f=l(f,w,p,v,c[d+10],15,-1051523),v=l(v,f,w,p,c[d+1],21,-2054922799),p=l(p,v,f,w,c[d+8],6,1873313359),w=l(w,p,v,f,c[d+15],10,-30611744),f=l(f,w,p,v,c[d+6],15,-1560198380),v=l(v,f,w,p,c[d+13],21,1309151649),p=l(p,v,f,w,c[d+4],6,-145523070),w=l(w,p,v,f,c[d+11],10,-1120210379),f=l(f,w,p,v,c[d+2],15,718787259),v=l(v,f,w,p,c[d+9],21,-343485551),p=n(p,h),v=n(v,u),f=n(f,g),w=n(w,m);return a(p)+a(v)+a(f)+a(w)}}t.exports=e},78380:function(t,e,a){(e=>{class n{static isEditorPage(){return tve_frontend_options.is_editor_page}static isExternal(t){return n.getDomain(location.href)!==n.getDomain(t)}static getDomain(t){return t.replace("http://","").replace("https://","").split("/")[0]}static restAjax(t){let{type:a="POST",route:n="",data:r}=t;return e.ajax({headers:{"X-WP-Nonce":tve_frontend_options.nonce},url:n,type:a,data:r})}static handleContent(t){let a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e(window).trigger(a?"tcb_on_content_show":"tcb_on_content_hide"),e(window).trigger("tve_after_content_toggle",[t,a])}static jsonParse(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null==a){let a;try{a=JSON.parse(t.attr(e)||JSON.stringify(n))}catch(e){console.warn("Could not get json data for element:",t),a=n}return a}return t.attr(e,JSON.stringify(a))}static toast(t,e,a){"string"!=typeof t&&(t=t.message||t.error||t.success),e||(e=!1),TCB_Front.notificationElement.toggle(t,e?"error":"success",a)}static windowWidth(){let t,e;try{e=window.parent&&window.parent.TVE&&window.parent.TVE.main,t=e&&window.parent.TVE.main.$frame.width()||TCB_Front.$window[0].innerWidth}catch(a){t=TCB_Front.$window[0].innerWidth,e=!1}let a=window.screen.width;return window.matchMedia("(orientation:landscape)").matches&&window.screen.height>a&&(a=window.screen.height),e||t>a+20&&t>window.outerWidth+20&&(t=a),t}static getBrowserScrollSize(){const t={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},a=e("<div>").css(e.extend({},t)),n=e("<div>").css(e.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},t)).append(a).appendTo("body").scrollLeft(1e3).scrollTop(1e3),r={height:n.offset().top-a.offset().top||0,width:n.offset().left-a.offset().left||0};return n.remove(),r}static hasAdminBar(){return e("#wpadminbar").length>0}static appendFormParamsToURL(t,a){return!Array.isArray(a)&&a.jquery&&(a=n.buildFormParams(a)),t+(t.split("?")[1]?"&":"?")+e.param(a)}static buildFormParams(t){let e=[];return t.find(".tve_lg_input_container input:not([name=user_consent]), .tve_lg_input_container textarea").not("input[type=hidden]").not("input[type=password]").each(((t,a)=>{const n=ThriveGlobal.$j(a).serializeArray();if(n[0]){a.dataset.name&&(n[0].name=a.dataset.name.replace(/\s/g,"_")),TCB_Front.reservedTerms.includes(n[0].name.toLowerCase())&&(n[0].name="tve_"+n[0].name);const t=e.findIndex((t=>t.name===n[0].name));t>=0?e[t].value=e[t].value+", "+n[0].value:e=e.concat(n)}})),e}static appendRandomParamToURL(t){return t+(t.split("?")[1]?"&":"?")+"_="+Math.floor(1e3*Math.random())}static isEmail(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}static addHttp(t){return!(t=t.trim())||0===t.indexOf("#")||/^mailto/.test(t)||/^tel/.test(t)||/^(?:f|ht)tps?\:\/\//.test(t)||(t="https://"+t),t}static unserialize(t){const e="undefined"!=typeof window?window:a.g,n=function(t){let e=t.length;for(let a=t.length-1;a>=0;a--){const n=t.charCodeAt(a);n>127&&n<=2047?e++:n>2047&&n<=65535&&(e+=2),n>=56320&&n<=57343&&a--}return e-1},r=function(t,a,n,r){throw new e[t](a,n,r)},i=function(t,e,a){const n=[];let i=2,o=t.slice(e,e+1);for(;o!==a;)i+e>t.length&&r("Error","Invalid"),n.push(o),o=t.slice(e+(i-1),e+i),i+=1;return[n.length,n.join("")]};return function t(e,a){let o,s,l,c,d,h,u,g,m,p,v,f,w,b,C,$,_,A=0,k=function(t){return t};const y=e.slice(a,a+1).toLowerCase();switch(a||(a=0),o=a+2,y){case"i":k=function(t){return parseInt(t,10)},g=i(e,o,";"),A=g[0],u=g[1],o+=A+1;break;case"b":k=function(t){return 0!==parseInt(t,10)},g=i(e,o,";"),A=g[0],u=g[1],o+=A+1;break;case"d":k=function(t){return parseFloat(t)},g=i(e,o,";"),A=g[0],u=g[1],o+=A+1;break;case"n":u=null;break;case"s":m=i(e,o,":"),A=m[0],p=m[1],o+=A+2,g=function(t,e,a){const r=[];let i,o;for(i=0;i<a;i++)o=t.slice(e+(i-1),e+i),r.push(o),a-=n(o);return[r.length,r.join("")]}(e,o+1,parseInt(p,10)),A=g[0],u=g[1],o+=A+2,A!==parseInt(p,10)&&A!==u.length&&r("SyntaxError","String length mismatch");break;case"a":for(u={},s=i(e,o,":"),A=s[0],l=s[1],o+=A+2,d=parseInt(l,10),c=!0,v=0;v<d;v++)w=t(e,o),b=w[1],f=w[2],o+=b,C=t(e,o),$=C[1],_=C[2],o+=$,f!==v&&(c=!1),u[f]=_;if(c){for(h=new Array(d),v=0;v<d;v++)h[v]=u[v];u=h}o+=1;break;default:r("SyntaxError","Unknown / Unhandled data type(s): "+y)}return[y,o-a,k(u)]}(t+"",0)[2]}static validateImageUrl(t){return!!t.match(/.*\.(gif|jpe?g|bmp|png)$/gim)}static getQueryStrings(){return window.location.search.replace("?","").split("&").reduce(((t,e)=>{const a=e.split("=");return t[a[0]]=a[1],t}),{})}static parseJwt(t){const[,e=""]=t.split("."),a=e.replace(/-/g,"+").replace(/_/g,"/");let n;try{n=JSON.parse(decodeURIComponent(window.atob(a).split("").map((t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2))).join("")))}catch(t){n={}}return n}static insertHeadScripts(t,e,a){const n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.async=!0,"function"==typeof a&&(r.onload=r.onreadystatechange=a),void 0!==e&&(r.id=e),r.src=t,n.insertBefore(r,n.firstChild)}static insertStylesheet(t,e){const a=document.getElementsByTagName("head")[0],n=document.createElement("link");n.rel="stylesheet",n.id=e,n.type="text/css",n.href=t,a.insertBefore(n,a.firstChild)}static hasResource(t,e){return null!==document.getElementById(t)||null!==document.querySelector(`[src="${e}"],[href="${e}"]`)}static getAttr(t){const a={};return e.each(t[0].attributes,(function(t,e){a[e.name]=e.value})),a}}t.exports=n,window.TCB_Front.toast=n.toast,window.tve_is_email=n.isEmail})(ThriveGlobal.$j)}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),void 0===TCB_Front.js_modules["avatar-picker"]&&TCB_Front.setModuleLoadedStatus("avatar-picker",!1),(t=>{if(TCB_Front.isModuleLoaded("avatar-picker"))return;const e=a(78380);TCB_Front.Hooks.addAction("tcb-modal.loaded",((e,a,r)=>{"avatar-picker"!==e||TCB_Front.Utils.isEditorPage()||n.instance(a,t(r.closest(".tve-avatar-picker-element"))).init()})),TCB_Front.setModuleLoadedStatus("avatar-picker",!0);class n{constructor(t,e){var a;(a="tempEmail")in this?Object.defineProperty(this,a,{value:"",enumerable:!0,configurable:!0,writable:!0}):this[a]="",this.modalInstance=t,this.$modal=this.modalInstance.$element,this.$element=e,this.$avatarElement=this.$element.find(".tve-avatar-picker-image"),this.defaultAvatar=this.$element.attr("data-default-avatar"),this.avatar=null,this.$avatarPreview=this.$modal.find(".tve-avatar-image-preview"),this.registerCallbacks()}static get avatarSize(){return 1024}static get connections(){return["google","facebook","gravatar","custom"]}static instance(t,e){return new n(t,e)}registerCallbacks(){this.modalInstance.registerCallback("save",(()=>{this.avatar&&(this.$avatarElement.css("background-image",`url(${this.avatar})`),this.$avatarElement.find("input").val(this.avatar),this.$avatarElement.data("has-temp-image",!1)),this.modalInstance.constructor.close()})),this.modalInstance.registerCallback("before-open",(()=>{this.$avatarPreview.css("background-image",this.$avatarElement.css("background-image")),this.$modal.find(".tve-avatar-extra-options input").val(""),this.$modal.find('[data-selected="true"]').removeAttr("data-selected")})),this.modalInstance.registerCallback("after-open",(()=>{setTimeout((()=>{this.hasConnection("google")&&this.$modal.css("--tve-connection-type-width",this.$modal.find(".tve-google-sign-in iframe").outerWidth()-20+"px")}),420)})),this.modalInstance.registerCallback("optionSelected",((t,e)=>{this.closeExtraOptions(),e.dataset.selected=!0}))}hasConnection(t){let e="1"===this.$element.attr(`data-${t}`);if(e)switch(t){case"google":e=TCB_Front.googleApi.isConnected();break;case"facebook":e=TCB_Front.facebookApi.isConnected()}return e}closeExtraOptions(){this.$modal.find('[data-selected="true"]').removeAttr("data-selected")}init(){if(n.connections.every((t=>!this.hasConnection(t)))&&this.$element.attr("data-gravatar","1"),this.modalInstance.registerCallback("resetImage",(()=>{this.setAvatar(this.defaultAvatar)})),this.hasConnection("gravatar")){const t=this.$element.closest("form").find('input[type="email"]');this.modalInstance.registerCallback("applyGravatar",(()=>{this.tempEmail=this.$modal.find(".tve-avatar-gravatar-email").val();const t=a(4725).getAvatarUrl(this.tempEmail,n.avatarSize);this.setAvatarFromUrl(t)})),this.modalInstance.registerCallback("after-open",(()=>{const e=this.tempEmail||t.val();this.$modal.find(".tve-avatar-gravatar-email").val(e)})),t.on("change",(t=>{if(this.$avatarElement.css("background-image").includes(this.defaultAvatar)||this.$avatarElement.data("has-temp-image")){const e=a(4725).getAvatarUrl(t.target.value,n.avatarSize);fetch(e).then((t=>t.blob())).then((t=>{"text/html"!==t.type&&(this.setAvatarFromUrl(e,this.$avatarElement),this.$avatarElement.find("input").val(e),this.$avatarElement.data("has-temp-image",!0))})).catch((()=>{}))}}))}this.hasConnection("custom")&&this.modalInstance.registerCallback("applyCustomUrl",(()=>{const t=this.$modal.find(".tve-avatar-custom-url-input").val();e.validateImageUrl(t)?this.setAvatarFromUrl(t):this.onError("Invalid image url.")})),this.hasConnection("google")&&(TCB_Front.googleApi.init(),TCB_Front.googleApi.initButton(this.$modal.find(".tve-google-sign-in")[0]),TCB_Front.googleApi.registerCallback("auth",(()=>{this.modalInstance.isOpen()&&this.setAvatarFromUrl(TCB_Front.googleApi.getAvatar(n.avatarSize))}))),this.hasConnection("facebook")&&(this.modalInstance.registerCallback("onFacebookLoginClick",(()=>TCB_Front.facebookApi.login())),TCB_Front.facebookApi.registerCallback("auth",(()=>{TCB_Front.facebookApi.getProfilePicture(n.avatarSize).then((t=>this.setAvatar(t)))}))),n.connections.forEach((t=>{this.$modal.find(`[data-connection="${t}"]`).toggle(this.hasConnection(t))})),this.$avatarElement.find("input").val(this.defaultAvatar)}setAvatarFromUrl(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$avatarPreview;t.trim()?(this.toggleLoading(),fetch(t).then((a=>{a.ok&&a.headers.get("content-type").includes("image")||(t=this.defaultAvatar),this.setAvatar(t,e),this.closeExtraOptions()}),(()=>{this.onError("Unfortunately we could not fetch that image, please use another.")}))):this.onError("Invalid image url.")}setAvatar(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$avatarPreview;this.toggleLoading(),e||(e=this.defaultAvatar),t(`<img referrerpolicy="no-referrer" src="${e}">`).on("load",(()=>{this.toggleLoading(!1)})),a.css("background-image",`url(${e})`),this.avatar=e}toggleLoading(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$avatarPreview.toggleClass("tve-loader-square",t)}onError(t){this.setAvatar(),this.closeExtraOptions(),e.toast(t,!0)}}})(ThriveGlobal.$j)}();