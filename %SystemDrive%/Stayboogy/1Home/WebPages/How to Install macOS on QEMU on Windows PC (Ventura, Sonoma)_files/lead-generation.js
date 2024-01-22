void 0===TCB_Front.js_modules["lead-generation"]&&TCB_Front.setModuleLoadedStatus("lead-generation",!1),(t=>{if(TCB_Front.isModuleLoaded("lead-generation"))return;t(window).on("tcb_after_dom_ready",(()=>{const a=t(TCB_Front.Utils.isEditorPage()?"#tve_editor":"body");e.initRadioInputs(a),e.initCheckboxInputs(a),TCB_Front.Utils.isEditorPage()||(t(".thrv_lead_generation").tve_front_lead_generation(),e.initRecaptcha())}));const e={initRadioInputs(e){e.off("change.inputradio").on("change.inputradio",".tve_lg_radio_wrapper input",(function(){const e=t(this).closest(".tve_lg_radio_wrapper");e.siblings(".tve-state-expanded").removeClass("tve-state-expanded"),e.addClass("tve-state-expanded")}))},initCheckboxInputs(e){e.off("change.inputcheckbox").on("change.inputcheckbox",".tve_lg_checkbox_wrapper input",(function(){const e=t(this);e.closest(".tve_lg_checkbox_wrapper").toggleClass("tve-state-expanded",e.prop("checked"))}))},initRecaptcha(){const e=t(".tve-captcha-container");if(e.length&&0!==tve_dash_front.recaptcha.length){function a(){"undefined"!=typeof grecaptcha&&grecaptcha.render?function(){let a=100;e.filter(":not(.tve-recapcha-rendered)").each((function(){if(document.getElementById(this.id)){this.id=this.id+"-"+ ++a;const e=t(this),r=window.innerWidth<400?"compact":e.attr("data-size");e.addClass("tve-recaptcha-rendered"),e.data("grecaptcha-render")||tve_dash_front.recaptcha.connection&&(!tve_dash_front.recaptcha.connection||"v3"===tve_dash_front.recaptcha.connection.version)||(e.data("grecaptcha-render",!0),grecaptcha.render(this.id,{sitekey:tve_dash_front.recaptcha.site_key||e.attr("data-site-key"),theme:e.attr("data-theme"),type:e.attr("data-type"),size:r}))}}))}():setTimeout(a,50)}let r=!1;const n=tve_dash_front.recaptcha.connection&&"v3"===tve_dash_front.recaptcha.connection.version&&!tve_dash_front.recaptcha.connection.browsing_history?tve_dash_front.recaptcha.site_key:"explicit";window.tve_gapi_loaded||(t.getScript("https://www.google.com/recaptcha/api.js?render="+n,a),r=!0,window.tve_gapi_loaded=!0),r||a()}},hasFileUpload:()=>TCB_Front.isModuleLoaded("file-upload")};t.fn.tve_front_lead_generation=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return window.TCB_PAGE_INDEX=window.TCB_PAGE_INDEX||1,this.each(((r,n)=>{const i=t(n);let o=i.find("form");const s=o.find(".tve-f-a-hidden").val();if(0===o.length&&(i.find(".thrv_lead_generation_container").wrapInner('<form method="post"></form>'),o=i.find("form")),o.find(".tve_lg_textarea.tve-lg-show-counter textarea").off("input.textarea").on("input.textarea",(function(){const e=t(this),a=e.val().length,r=Number(e.attr("maxlength")),n=Number(e.attr("data-min")),i=e.next().find(".tve-fill-text-dynamic");i.text(r?`${a} of ${r}`:a),i.toggleClass("tve-counter-error",!!(a&&n&&a<n))})),o.find('input[type="checkbox"],input[type="radio"]').each((function(){if(!this.id)return!0;t("#"+this.id).not(this).length&&(this.id=this.id+"-"+window.TCB_PAGE_INDEX++,t(this).next("label").attr("for",this.id))})),void 0!==s&&"#"===o.attr("action")&&o.attr("action",s),i.data("tve_lg_done"))return this;if(i.data("tve_lg_done",!0),void 0!==window.SegMet&&SegMet&&-1!==o[0].action.indexOf("infusionsoft")&&!o.data("tve-segmet-submit")){o.data("tve-segmet-submit",1);const t=o[0].submit;o[0].submit=function(){return o.data("tve-segmet-submitted")?t.call(o[0]):(o.data("tve-segmet-submitted",1),o.submit())}}const d={errClass:"tve-lg-error",errClassMultiple:"tve-lg-error-multiple",init(){this.container=o.closest(".thrv_lead_generation").find("#tve-lg-error-container"),this.container.length||(this.container=t('<div id="tve-lg-error-container"></div>').prependTo(o.parent()),this.container.on("click",".tve-lg-err-close",t.proxy(this.close,this))),this.container.empty().hide(),this.clear()},close(){this.container.fadeOut(200);let t=o.find("."+this.errClass);return t.length||(t=o.find("input,select,textarea")),t.first().trigger("focus"),!1},clear(){o.find("input,select,textarea").removeClass(this.errClass),o.find('[class^="tve_lg_"]').removeClass(this.errClassMultiple+" "+this.errClass),"function"==typeof a.clearErrors&&a.clearErrors.apply(this,arguments)},markApiError(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"function"==typeof a.renderError?a.renderError(r,e,n):this.container.append('<div class="tve-lg-err-item tve-lg-ext-err">'+e+"</div>"),this},_markError(t,e,r){if("function"==typeof a.renderError)return a.renderError.call(this,t,e,r);if(t){const e=t.parent();e.removeClass("tcb-permanently-hidden"),e.closest("form").find(`[data-label-for="${e.attr("data-label")}"]`).removeClass("tcb-permanently-hidden"),t.addClass(this.errClass);let a=t.attr("data-field")?t.attr("data-field").replace("mapping_",""):t.attr("type");"gdpr"===a&&(a="checkbox"),["radio","checkbox"].includes(a)?t.closest(".tve_lg_"+a).addClass(this.errClassMultiple):"select"===a&&t.closest(".tve_lg_dropdown").addClass(this.errClass)}"required"===r&&this.container.find(".tve-lg-required").length||this.container.append('<div class="tve-lg-err-item tve-lg-'+r+'">'+e+"</div>")},show(){if("function"==typeof a.renderError)return;this.container.append('<a href="javascript:void(0)" class="tve-lg-err-close" title="Close"><span class="thrv-icon thrv-svg-icon">'+TCB_Front.icons.get("cross")+"</span></a>");const t=this;setTimeout((function(){const e=o.offset(),a=parseInt(o.css("margin-top"));let r=-10-t.container.outerHeight(!0)-(isNaN(a)?0:a);o.parents(".thrv-ribbon").length?"bottom"===o.parents(".tve-leads-ribbon").attr("data-position")?r+=7:r=e.top+o.outerHeight():t.container.outerHeight(!0)>e.top&&(r=e.top+o.outerHeight()),t.container.css({top:r+"px",width:o.outerWidth()}).fadeIn(200)}),50)},required(e,a){let r,n="required";const i=e.attr("type");if("hidden"===i)r=!0;else if("radio"===i)r=t('input[name="'+e.attr("name")+'"]').is(":checked");else if("checkbox"===i)r=t('input[name="'+e.attr("name")+'"]').is(":checked");else if(e.is("textarea[data-min]")){const i=t.trim(e.val()).length;r=i>=e.attr("data-min"),!r&&i&&(n="min-chars",a=tve_frontend_options.translations.min_chars.replace("%s",e.attr("data-min")))}else{const a=e.attr("value")?e.attr("value"):e.val();r=t.trim(a).length>0}return r||this._markError(e,a,n),r},password(t,e){let a=!0;return t.val()||1!==t.data("required")||(a=!1),!!a||(this._markError(t,e,"password"),!1)},mismatch(t,e){let a=!0;return t.password&&t.password.val()!==t.confirm_password.val()&&(a=!1),!!a||(this._markError(t.confirm_password,e,"passwordmismatch"),!1)},email(t,e){return!(t.val()&&!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.val())&&(this._markError(t,e,"email"),1))},getErrors(t){try{return JSON.parse(t.find(".tve-lg-err-msg").val())}catch(t){return{file_extension:"Sorry, {fileextension} files are not allowed",file_size:"{file} exceeds the maximum file size of {filelimit}",required:"Please fill in all of the required fields",phone:"The phone number is not valid",email:"The email address is not valid"}}}};let c;e.hasFileUpload()&&(c=new TCB_Front.FileUpload(i));const l=function(e,a){const r=t.extend({success:"Sign up successful",error:"Error!"},a),n=o.find("#_form_type").val(),i=o.find("input[name=name]").val()?o.find("input[name=name]").val():"",s=o.find("input[name=email]").val();if(e){o.parents(".tl-style").first().find(".tve_p_lb_close").trigger("click");const e=t.Event("leads_messages.tcb");o.trigger(e),"lead_generation"===n&&(o.find("input").val(""),o.parents(".tve_p_lb_content").find(".tve_p_lb_close").trigger("click")),r.success=r.success.replace("[lead_email]",s),r.success=r.success.replace("[lead_name]",i),TCB_Front.notificationElement.toggle(r.success,"success","")}else{const t=o.parent(),e=t.parent(),a=e.find(".tve-error-wrapper"),n=o.find("#_error_message_option").val();if(1===parseInt(n))t.hide(),0===a.length?(e.append('<div class="tve-error-wrapper"><div class="tve-error-content"></div><button class="tve-close-error-message">Retry</button></div>'),r.error=r.error.replace("[lead_email]",s),r.error=r.error.replace("[lead_name]",i),e.find(".tve-error-content").append(r.error)):e.find(".tve-error-wrapper").show();else{if(_())return;TCB_Front.notificationElement.toggle(r.success,"success",""),u(),f()}}o.tve_form_loading(!0)},p=function(t){return t&&t.length>0?t+",":""};function f(){o.find(".tve-state-expanded").removeClass("tve-state-expanded"),o.find(".tve_lg_dropdown").each((function(){const e=t(this),a=e.attr("data-show-placeholder"),r=e.find('[data-default="1"]'),n=r.length?r:e.find(".tve-lg-dropdown-option,.tve-dynamic-dropdown-option").first(),i=e.find("input");a?(e.find(".tve-lg-dropdown-trigger .tve-disabled-text-inner").html(i.attr("data-placeholder")),i.removeAttr("value")):(e.find(".tve-lg-dropdown-trigger .tve-disabled-text-inner").html(n.text()),i.attr("value",n.attr("data-value")))})),o[0].reset(),o.find("textarea").trigger("input"),o.find('input[type="radio"][data-default="1"], input[type="checkbox"][data-default="1"] ').attr("checked","checked").closest(".tve_lg_radio_wrapper, .tve_lg_checkbox_wrapper").addClass("tve-state-expanded"),TCB_Front.smartComplete.handleSmartComplete(o)}function _(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const n=o.find("#_error_message_option").val(),i=o.find("#_autofill").val(),s=o.find("#_submit_option").val(),d=i?o.find("input").not("input[type=hidden],input[type=password]").serializeArray():"";let c=!1;if(!s||"reload"===s&&(e||1!==n))c=!0,location.reload();else if("redirect"===s){let t=o.find("#_back_url").val();t=TCB_Front.Utils.addHttp(t),i&&d&&!TCB_Front.Utils.isExternal(t)&&TCB_Front.setCookie("account_create_fields",JSON.stringify(d),{path:"/"}),"1"===o.find("#_sendParams").val()&&(t=TCB_Front.Utils.appendFormParamsToURL(t,o)),t&&TCB_Front.isValidUrl(t)&&(e||1!==n)&&(location.href=t,c=!0)}else if("state"===s&&e){const e=TL_Front.parent_state,a=o.find(".tve-switch-state-trigger"),r=-1!==a.attr("data-tcb-events").indexOf("tl_state_lightbox"),n=o.parents(".tve_post_lightbox").length>0;if(a.trigger("click"),o.tve_form_loading(!0),r)if(n)e&&(TL_Front.close_form(e),delete TL_Front.parent_state);else{const e=t.Event("leads_messages.tcb");e.lightbox_state=!0,o.trigger(e)}TL_Front.parent_state&&(o.parents(".tl-style").first().find(".tve_p_lb_close").trigger("click"),delete TL_Front.parent_state),c=!0}else"klicktipp-redirect"===s&&e?a&&TCB_Front.isValidUrl(a)&&(location.href=a,c=!0):"page"===s&&e&&r&&TCB_Front.isValidUrl(r)&&(location.href=r,c=!0);return c}function u(){t(".tve_p_lb_background.tve_lb_open .tve_p_lb_close").trigger("click")}i.data("form-target")&&i.data("form-target").length&&i.find("form").attr("target",i.data("form-target")),function(){const e=TCB_Front.queryString.get("affiliate");if(e){const a=t("<input/>");a.attr("type","hidden").attr("name","tve_affiliate").val(e),o.append(a)}}(),i.find(".tve-lg-err-msg").length&&function(){o.find(".tve_submit_container .thrv_icon").on("click",(function(){o.submit()})),o.find(".tve-form-button .tve-form-button-submit").on("click",(t=>(t.preventDefault(),t.stopPropagation(),o.submit(),!1)));const r=d.getErrors(i),n=function(n,s,h){if(o.data("tve-force-submit"))return!0;const g=o.find(".consent-config");g.length&&!g.attr("value")&&"none"!==o.find(".tcb-lg-consent").css("display")&&o.find('[name="user_consent"]').attr("data-required",1);let v=!0;const m=t(s),b={};d.init(),m.find("input, select, textarea").each((function(){const e=t(this),a=e.data("validation"),n=parseInt(this.dataset.required);"password"===e.attr("type")&&(b[e.attr("name")]=e),1===n&&(d.required(e,r.required)||(v=!1)),void 0!==a&&"none"!==a&&d[a]&&(d[a](e,r[a])||(v=!1))}));const w=m.find('textarea[name="g-recaptcha-response"]');if(w.length>0&&(w.first().val()||(d.markApiError("Please validate captcha form",m.find(".tve-captcha-container"),"captcha"),setTimeout((function(){t("#tve-lg-error-container").fadeOut("slow")}),5e3),v=!1)),2===Object.keys(b).length&&(d.mismatch(b,r.passwordmismatch)||(v=!1)),e.hasFileUpload()&&c){const t=c.isValid();!0!==t&&(v=!1,d.markApiError(t,c.$el,"upload"))}if(!v)return d.show(),o.find("."+d.errClass).first().trigger("focus"),!1;if("function"==typeof a.showFormLoader?a.showFormLoader():o.tve_form_loading(),"api"===o.parents(".thrv_lead_generation").attr("data-connection")||o.parents(".tcb-registration-form").length){const s=o.find("#_autofill").val()?o.find("input").not("input[type=hidden],input[type=password]").serializeArray():"";if(i.attr("data-settings-id")||function(){const t=function(){let t="";return"true"===o.find(".tve_lg_radio").attr("data-answer-tag")?o.find(".tve_lg_radio input[type=radio]").each(((e,a)=>{if(a.checked)if(a.attributes["data-custom-tag"]){const e=a.attributes["data-custom-tag"].value;t=t.length>0?t+","+e:e}else{const e=a.value;t=t.length>0?t+","+e:e}})):o.find(".tve_lg_radio input[type=radio]").each(((e,a)=>{a.checked&&a.attributes["data-custom-tag"]&&(t=a.attributes["data-custom-tag"].value)})),t}(),e=function(){let t="";return"true"===o.find(".tve_lg_checkbox:not(.tcb-lg-consent)").attr("data-answer-tag")?o.find(".tve_lg_checkbox input[type=checkbox]").each(((e,a)=>{if(a.checked)if(a.attributes["data-custom-tag"]){const e=a.attributes["data-custom-tag"].value;t=t.length>0?t+","+e:e}else{const e=a.value;t=t.length>0?t+","+e:e}})):o.find(".tve_lg_checkbox input[type=checkbox]").each(((e,a)=>{if(a.checked&&a.attributes["data-custom-tag"]){const e=a.attributes["data-custom-tag"].value;t=t.length>0?t+","+e:e}})),t}(),a=function(){let t="";const e=o.find(".tve_lg_dropdown"),a=e.find(".tve-lg-dropdown-option.tve-state-active");return t="true"===e.attr("data-answer-tag")?a.attr("data-custom-tag")?a.length>0?a.attr("data-custom-tag"):"":a.length>0?a.attr("data-value"):"":a.length>0?a.attr("data-custom-tag"):"",t}(),r=p(t)+p(e)+p(a);var n;r.length&&(n=r,tve_frontend_options.lead_generation_custom_tag_apis.forEach((t=>{const e=o.find(`input[type=hidden]#${t}_tags`);let a=e.length>0?e.attr("value"):"";e.length&&(0===a.length&&","===n.slice(-1)&&(n=n.slice(0,-1)),a=n.replace(/['"`\\]/g,"")+a,e.attr("value",a))})))}(),"function"==typeof a.submitHandler){const t={autofillValues:s,token:h};return e.hasFileUpload()&&c&&(t.uploader=c),a.submitHandler.call(null,n,t)}const g={};t.each(o.serializeArray(),(function(t,e){g[e.name]=e.value}));let v=o.serialize()+"&action=tve_api_form_submit&url="+encodeURIComponent(location.href);const m=o.find("#_submit_option").val();v+="&_tcb_id="+(i.attr("data-settings-id")||"")+"&tcb_token="+(10*Date.now()).toString(32),o.find(".tve_lg_radio_wrapper input,.tve_lg_checkbox_wrapper input").each(((t,e)=>{!e.name||g[e.name]||v.includes(e.name)||(g[e.name]="",v+=`&${e.name}=`)}));const b=t.Event("form_conversion.tcb");o.trigger(b),b.post_data&&(v+="&"+t.param(b.post_data));const w=o.closest(".tar-main-content[data-post-id]"),y=w.length?w.attr("data-post-id"):tve_frontend_options.post_id;return y&&(v+=`&post_id=${y}`),v+=`&frontend_post_id=${tve_frontend_options.post_id}`,h&&(v+="&g-recaptcha-response="+h),e.hasFileUpload()&&c&&(v=c.appendExtraData(v)),t.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,dataType:"json",data:v}).fail((function(){d.markApiError("An error occurred while submitting your data. Please try again").show(),o.tve_form_loading(!0)})).done((function(a){e.hasFileUpload()&&c&&c.clear(),o.find('input[type="password"]').trigger("keyup");let s="";try{var p=a.form_messages||{},h="";a.redirect&&(h=a.redirect,delete a.redirect),delete a.form_messages,a.variation&&delete a.variation,a.back_url&&delete a.back_url;var v=Object.keys(a).length>0&&!a.error;if("object"==typeof a.error_message&&a.error_message.length){const t=a.error_message;let e="";t.forEach((t=>{"string"==typeof t&&t.length&&(t=t.trim(),d.markApiError(t).show(),e+=t+"\n")})),o.tve_form_loading(!0),e.length&&(s=e,TCB_Front.toast(e,!0))}if(a.error){if(a.error_code){const e=a.error_code,r=t.Event("lead_conversion_error_code.tcb",{form_data:g,$form:o,$leadGeneration:i,errorCode:e});o.trigger(r)}if("captcha"===a.field){const t=r.recaptcha||a.error;d.markApiError(t).show(),o.tve_form_loading(!0)}else l(v,p);return n.preventDefault(),!1}if(s.length)return o.tve_form_loading(!0),n.preventDefault(),!1}catch(t){console.log(t)}const b=t.Event("lead_conversion_success.tcb",{form_data:g,$form:o,$leadGeneration:i});return o.trigger(b),b.content_unlocked&&"message"!==m&&"state"!==m?(n.preventDefault(),!1):(u(),_(v,h,"undefined"!=typeof back_url?back_url:"")?(o.tve_form_loading(!0),void f()):(f(),0===s.length&&l(v,p),!0))})).always((()=>{"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.reset&&(!tve_dash_front.recaptcha.connection||tve_dash_front.recaptcha.connection&&"v3"!==tve_dash_front.recaptcha.connection.version)&&grecaptcha.reset()})),n.stopPropagation(),!1}const y=t.Event("should_submit_form.tcb");if(o.trigger(y),"1"!==o.find("input#_asset_option").val()&&!y.flag_need_data)return!0;let x=o.serialize()+"&action=tve_custom_form_submit&email="+function(t){if(t.find('[data-validation="email"]').length)return t.find('[data-validation="email"]').val();let e="";return t.find("input").each((function(){if(this.name&&this.name.match(/email/i))return e=this.value,!1})),e}(o)+"&name="+function(e){let a=!1;return e.find("input").each((function(){const e=t(this),r=e.attr("placeholder"),n=e.attr("name");if(r&&-1!==r.toLowerCase().indexOf("name")||n&&-1!==n.toLowerCase().indexOf("name"))return a=e,!1})),!1!==a?a.val():""}(o);const k=t.Event("form_conversion.tcb");return o.trigger(k),k.post_data&&(x+="&"+t.param(k.post_data)),tve_frontend_options.post_id&&(x+="&post_id="+tve_frontend_options.post_id),t.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:x}).always((function(){o.find("input,select,textarea").removeAttr("disabled"),o.find(".tve-form-button").removeClass("tar-disabled"),o.data("tve-force-submit",!0).submit()})),!1};o.on("submit",(function(e){const a=this;return t(this).find(".tve-captcha-container").length&&tve_dash_front.recaptcha.connection&&"v3"===tve_dash_front.recaptcha.connection.version?(grecaptcha.ready((function(){grecaptcha.execute(tve_dash_front.recaptcha.site_key,{action:"submit"}).then((function(t){n(e,a,t)}))})),!1):n(e,a)}))}()}))},TCB_Front.setModuleLoadedStatus("lead-generation",!0)})(ThriveGlobal.$j,TCB_Front);