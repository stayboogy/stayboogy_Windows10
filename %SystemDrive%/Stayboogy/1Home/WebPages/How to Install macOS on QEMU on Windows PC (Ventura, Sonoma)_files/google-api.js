!function(){var t={78406:function(t,e,n){const r=n(78380);t.exports=new class{constructor(t){this.googleClientId=t,this.libraryLoaded=!1,this.initDone=!1,this.buttonsToInit=[],this.callbacks={}}isConnected(){return!!this.googleClientId}registerCallback(t,e){this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(e)}trigger(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];Array.isArray(this.callbacks[t])&&this.callbacks[t].forEach((t=>{t(...n)}))}initButton(t){let{size:e="large",text:n="continue_with",shape:r="rectangular"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t&&(this.libraryLoaded?window.google.accounts.id.renderButton(t,{size:e,text:n,shape:r}):this.buttonsToInit.push(t))}init(){var t,e;this.googleClientId&&!1===this.initDone&&(window.onGoogleLibraryLoad=()=>{this.libraryLoaded||(window.google.accounts.id.initialize({client_id:this.googleClientId,cancel_on_tap_outside:!1,context:"use",shape:"circle",type:"icon",auto_prompt:!1,callback:t=>{let{credential:e=""}=t;this.loggedInUser=r.parseJwt(e),this.trigger("auth",this.loggedInUser)}}),this.libraryLoaded=!0,this.buttonsToInit.forEach((t=>this.initButton(t))))},null!==(t=window)&&void 0!==t&&null!==(e=t.google)&&void 0!==e&&e.accounts&&window.onGoogleLibraryLoad(),this.initDone=!0)}getAvatar(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:420,n="";return null!==(t=this.loggedInUser)&&void 0!==t&&t.picture&&(n=this.loggedInUser.picture.replace(/=s\d*/g,`=s${e}`)),n}}(tve_frontend_options.google_client_id)},78380:function(t,e,n){(e=>{class r{static isEditorPage(){return tve_frontend_options.is_editor_page}static isExternal(t){return r.getDomain(location.href)!==r.getDomain(t)}static getDomain(t){return t.replace("http://","").replace("https://","").split("/")[0]}static restAjax(t){let{type:n="POST",route:r="",data:o}=t;return e.ajax({headers:{"X-WP-Nonce":tve_frontend_options.nonce},url:r,type:n,data:o})}static handleContent(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e(window).trigger(n?"tcb_on_content_show":"tcb_on_content_hide"),e(window).trigger("tve_after_content_toggle",[t,n])}static jsonParse(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(null==n){let n;try{n=JSON.parse(t.attr(e)||JSON.stringify(r))}catch(e){console.warn("Could not get json data for element:",t),n=r}return n}return t.attr(e,JSON.stringify(n))}static toast(t,e,n){"string"!=typeof t&&(t=t.message||t.error||t.success),e||(e=!1),TCB_Front.notificationElement.toggle(t,e?"error":"success",n)}static windowWidth(){let t,e;try{e=window.parent&&window.parent.TVE&&window.parent.TVE.main,t=e&&window.parent.TVE.main.$frame.width()||TCB_Front.$window[0].innerWidth}catch(n){t=TCB_Front.$window[0].innerWidth,e=!1}let n=window.screen.width;return window.matchMedia("(orientation:landscape)").matches&&window.screen.height>n&&(n=window.screen.height),e||t>n+20&&t>window.outerWidth+20&&(t=n),t}static getBrowserScrollSize(){const t={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},n=e("<div>").css(e.extend({},t)),r=e("<div>").css(e.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},t)).append(n).appendTo("body").scrollLeft(1e3).scrollTop(1e3),o={height:r.offset().top-n.offset().top||0,width:r.offset().left-n.offset().left||0};return r.remove(),o}static hasAdminBar(){return e("#wpadminbar").length>0}static appendFormParamsToURL(t,n){return!Array.isArray(n)&&n.jquery&&(n=r.buildFormParams(n)),t+(t.split("?")[1]?"&":"?")+e.param(n)}static buildFormParams(t){let e=[];return t.find(".tve_lg_input_container input:not([name=user_consent]), .tve_lg_input_container textarea").not("input[type=hidden]").not("input[type=password]").each(((t,n)=>{const r=ThriveGlobal.$j(n).serializeArray();if(r[0]){n.dataset.name&&(r[0].name=n.dataset.name.replace(/\s/g,"_")),TCB_Front.reservedTerms.includes(r[0].name.toLowerCase())&&(r[0].name="tve_"+r[0].name);const t=e.findIndex((t=>t.name===r[0].name));t>=0?e[t].value=e[t].value+", "+r[0].value:e=e.concat(r)}})),e}static appendRandomParamToURL(t){return t+(t.split("?")[1]?"&":"?")+"_="+Math.floor(1e3*Math.random())}static isEmail(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}static addHttp(t){return!(t=t.trim())||0===t.indexOf("#")||/^mailto/.test(t)||/^tel/.test(t)||/^(?:f|ht)tps?\:\/\//.test(t)||(t="https://"+t),t}static unserialize(t){const e="undefined"!=typeof window?window:n.g,r=function(t){let e=t.length;for(let n=t.length-1;n>=0;n--){const r=t.charCodeAt(n);r>127&&r<=2047?e++:r>2047&&r<=65535&&(e+=2),r>=56320&&r<=57343&&n--}return e-1},o=function(t,n,r,o){throw new e[t](n,r,o)},i=function(t,e,n){const r=[];let i=2,a=t.slice(e,e+1);for(;a!==n;)i+e>t.length&&o("Error","Invalid"),r.push(a),a=t.slice(e+(i-1),e+i),i+=1;return[r.length,r.join("")]};return function t(e,n){let a,s,l,c,d,u,h,g,p,w,f,m,_,y,b,v,T,C=0,x=function(t){return t};const I=e.slice(n,n+1).toLowerCase();switch(n||(n=0),a=n+2,I){case"i":x=function(t){return parseInt(t,10)},g=i(e,a,";"),C=g[0],h=g[1],a+=C+1;break;case"b":x=function(t){return 0!==parseInt(t,10)},g=i(e,a,";"),C=g[0],h=g[1],a+=C+1;break;case"d":x=function(t){return parseFloat(t)},g=i(e,a,";"),C=g[0],h=g[1],a+=C+1;break;case"n":h=null;break;case"s":p=i(e,a,":"),C=p[0],w=p[1],a+=C+2,g=function(t,e,n){const o=[];let i,a;for(i=0;i<n;i++)a=t.slice(e+(i-1),e+i),o.push(a),n-=r(a);return[o.length,o.join("")]}(e,a+1,parseInt(w,10)),C=g[0],h=g[1],a+=C+2,C!==parseInt(w,10)&&C!==h.length&&o("SyntaxError","String length mismatch");break;case"a":for(h={},s=i(e,a,":"),C=s[0],l=s[1],a+=C+2,d=parseInt(l,10),c=!0,f=0;f<d;f++)_=t(e,a),y=_[1],m=_[2],a+=y,b=t(e,a),v=b[1],T=b[2],a+=v,m!==f&&(c=!1),h[m]=T;if(c){for(u=new Array(d),f=0;f<d;f++)u[f]=h[f];h=u}a+=1;break;default:o("SyntaxError","Unknown / Unhandled data type(s): "+I)}return[I,a-n,x(h)]}(t+"",0)[2]}static validateImageUrl(t){return!!t.match(/.*\.(gif|jpe?g|bmp|png)$/gim)}static getQueryStrings(){return window.location.search.replace("?","").split("&").reduce(((t,e)=>{const n=e.split("=");return t[n[0]]=n[1],t}),{})}static parseJwt(t){const[,e=""]=t.split("."),n=e.replace(/-/g,"+").replace(/_/g,"/");let r;try{r=JSON.parse(decodeURIComponent(window.atob(n).split("").map((t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2))).join("")))}catch(t){r={}}return r}static insertHeadScripts(t,e,n){const r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.async=!0,"function"==typeof n&&(o.onload=o.onreadystatechange=n),void 0!==e&&(o.id=e),o.src=t,r.insertBefore(o,r.firstChild)}static insertStylesheet(t,e){const n=document.getElementsByTagName("head")[0],r=document.createElement("link");r.rel="stylesheet",r.id=e,r.type="text/css",r.href=t,n.insertBefore(r,n.firstChild)}static hasResource(t,e){return null!==document.getElementById(t)||null!==document.querySelector(`[src="${e}"],[href="${e}"]`)}static getAttr(t){const n={};return e.each(t[0].attributes,(function(t,e){n[e.name]=e.value})),n}}t.exports=r,window.TCB_Front.toast=r.toast,window.tve_is_email=r.isEmail})(ThriveGlobal.$j)}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),void 0===TCB_Front.js_modules["google-api"]&&TCB_Front.setModuleLoadedStatus("google-api",!1),TCB_Front.isModuleLoaded("google-api")||(TCB_Front.googleApi=n(78406),TCB_Front.setModuleLoadedStatus("google-api",!0))}();