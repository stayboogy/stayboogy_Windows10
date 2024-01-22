void 0===TCB_Front.js_modules["conditional-display"]&&TCB_Front.setModuleLoadedStatus("conditional-display",!1),((t,i)=>{if(TCB_Front.isModuleLoaded("conditional-display"))return;const e=new class{initFrontend(){this.fetchGroups(),this.buildPreview(),this.bindEvents(),this.initTooltip()}initTooltip(){const i=t("#wpadminbar"),e=".conditional-tooltip-wrapper";if(i.length&&this.isPreviewNeeded()&&!this.shouldHideIcon&&!tve_frontend_options.conditional_display.is_tooltip_dismissed&&0===t(e).length){i.append(`<div class="${e.replace(".","")}"><div class="conditional-tooltip-title">Quick tip</div><div class="conditional-tooltip-text">From here you can select which condition you want to preview</div><div class="conditional-tooltip-preview"><div class="conditional-tooltip-preview-text">Currently previewing as:</div><ul class="conditional-tooltip-preview-items"></ul></div><button class="dismiss-conditional-tooltip click">GOT IT</button></div>`);const o=t(e);this.addPreviewList(t(`${e} .conditional-tooltip-preview-items`)),o.css({top:"40px",left:t(".tve-preview-conditions-icon").offset().left-.88*o.width()}),t(".dismiss-conditional-tooltip").on("click",(()=>{o.hide(),t.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,dataType:"json",data:{action:"dismiss_conditional_tooltip"}}),tve_frontend_options.conditional_display.is_tooltip_dismissed=!0}))}}getGroupsToLoad(){return[...t(".tcb-conditional-display-placeholder")].map((t=>t.getAttribute("data-group")))}fetchGroups(){const e=this.getGroupsToLoad();e.length>0&&t.ajax({type:"get",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,dataType:"json",data:{action:"tcb_conditional_display",query_vars:tve_frontend_options.query_vars,query_strings:i.Utils.getQueryStrings(),post_variables:tve_frontend_options.$_POST,referrer:document.referrer,post_id:tve_frontend_options.post_id,groups:e}}).done((o=>{o.groups&&e.forEach((t=>this.processGroup(t,o.groups[t]))),o.footer_scripts&&(t(document.body).append(o.footer_scripts),this.triggerEvents()),o.external_resources&&this.loadExternalResources(o.external_resources),i.onDOMReady()}))}triggerEvents(){setTimeout((()=>{t("[data-display-group].tve-viewport-triggered, [data-display-group] .tve-viewport-triggered").removeClass("tve-viewport-triggered"),i.event_triggers(t("[data-display-group]")),i.$window.trigger("scroll"),i.$window.trigger("conditional_display_loaded")}))}processGroup(i,e){const o=t(`[data-group="${i}"]`);void 0===e?this.isPreviewNeeded()?o.removeClass("tcb-conditional-display-placeholder").addClass("tcb-permanently-hidden"):o.remove():o.replaceWith(e.content),t(`.tve-cd-placeholder-css-${i}`).remove(),this.triggerEvents()}loadExternalResources(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{js:[],css:[]};if(t.js)for(const e in t.js)if(t.js.hasOwnProperty(e)){const o=`${e}-js`;i.Utils.hasResource(o,t.js[e].url)||i.Utils.insertHeadScripts(t.js[e].url,o)}if(t.css)for(const e in t.css)if(t.css.hasOwnProperty(e)){const o=`${e}-css`;i.Utils.hasResource(o,t.css[e])||i.Utils.insertStylesheet(t.css[e],o)}}bindEvents(){t(".tve-conditions-text input").off("input").on("input",(e=>{const o=t(e.currentTarget).parent(".tve-conditions-text"),s=o.data("set"),n=o.data("groups");s.forEach((t=>{t.is_checked=e.currentTarget.checked,t.is_unchecked=!e.currentTarget.checked})),n.forEach((i=>{let e=i.displays.find((t=>Array.isArray(t.sets)&&t.sets.some((t=>t.is_checked))));e||(e=i.displays.find((t=>Array.isArray(t.sets)&&t.sets.some((t=>t.is_default)))));const o=t(`[data-display-group="${i.key}"]`);parseInt(e.hide)?o.hide():(o.replaceWith(e.html),this.initFrontend())})),this.triggerEvents(),i.onDOMReady()}));const e=t("#wp-admin-bar-tve-preview-conditions"),o=e.find("li:not(#wp-admin-bar-tve-conditions-tooltip)"),s=e.find("#wp-admin-bar-tve-preview-conditions-default"),n=e.find("#wp-admin-bar-tve-conditions-tooltip"),d=e.find(".tve-preview-conditions-close");s.length>0&&function(i){const e=t(window).width(),o=t(window).height();let s,n,d,a;function l(l){if(t(l.target).parents("#wp-admin-bar-tve-conditions-title").length>0){l.preventDefault();const t=i.getBoundingClientRect();s=t.top,n=t.left,d=o-t.height,a=e-t.width,document.addEventListener("mouseup",c),document.addEventListener("mousemove",r)}}function r(t){t.preventDefault(),s+=t.movementY,n+=t.movementX,s=p(32,d,s),n=p(0,a,n),i.style.top=s+"px",i.style.left=n+"px"}function c(){document.removeEventListener("mouseup",c),document.removeEventListener("mousemove",r)}function p(t,i,e){return e<t?t:e>i?i:e}i.removeEventListener("mousedown",l),i.addEventListener("mousedown",l)}(s[0]),e.off("click").on("click",(i=>{const d=t("#wpadminbar .conditional-tooltip-wrapper");t(i.target).is(".tve-preview-conditions-icon.admin-bar")&&(o.toggle(),e.toggleClass("conditional-draggable-box",o.is(":visible")),s.css({top:"",left:""}),n.hide(),tve_frontend_options.conditional_display.is_tooltip_dismissed||(d.toggle(),d.is(":visible")&&this.addPreviewList(d.find(".conditional-tooltip-preview-items"))))})),e.off("mouseenter").on("mouseenter",(()=>{tve_frontend_options.conditional_display.is_tooltip_dismissed&&!t("#wp-admin-bar-tve-conditions-wrapper").is(":visible")&&n.show()})),e.off("mouseleave").on("mouseleave",(()=>{n.hide()})),d.off("click").on("click",(()=>{const i=t("#wpadminbar .conditional-tooltip-wrapper");o.hide(),e.removeClass("conditional-draggable-box"),s.css({top:"",left:""}),tve_frontend_options.conditional_display.is_tooltip_dismissed||(i.show(),this.addPreviewList(i.find(".conditional-tooltip-preview-items")))}))}buildPreview(){const i=t("#wp-admin-bar-tve-preview-conditions");if(this.isPreviewNeeded()){i.removeClass("tcb-preview-hidden");const e=i.find("ul.ab-submenu");let o=e.find("#wp-admin-bar-tve-conditions-wrapper");o.length||(o=t('<li id="wp-admin-bar-tve-conditions-wrapper" data-styled-scrollbar="1"></li>'),e.append(o));let s=o.find(".tve-global-conditions"),n=o.find(".tve-unlinked-conditions"),d=s.find(".tve-conditions-list"),a=n.find(".tve-conditions-list");s.length||(s=t('<div class="tve-global-conditions ab-item ab-empty-item"><span class="tve-preview-conditions-subtitle">Global condition sets</span><hr><div class="tve-conditions-list"></div></div>'),d=s.find(".tve-conditions-list"),o.append(s),o.append('<div class="tve-global-conditions-divider"></div>')),n.length||(n=t('<div class="tve-unlinked-conditions ab-item ab-empty-item"><span class="tve-preview-conditions-subtitle">Unlinked conditions sets</span><hr><div class="tve-conditions-list"></div></div>'),a=n.find(".tve-conditions-list"),o.append(n)),d.empty(),a.empty(),tcb_condition_sets.forEach((i=>{i.displays.forEach((e=>{Array.isArray(e.sets)&&e.sets.forEach((e=>{const o=t(`[data-display-group="${i.key}"], [data-group="${i.key}"]`).length;if(e.is_global){const t=s.find(`[data-global="${e.is_global}"]`);if(t.length){const o=t.data("set"),s=t.data("groups");t.data("set",[e,...o]).data("groups",[i,...s])}else d.append(`<div class="tve-conditions-text" data-global="${e.is_global}"><span class="tve-conditions-title">${e.name}</span><input type="checkbox" ${e.is_checked?"checked":""}></div>`).toggleClass("tve-conditions-disabled",!o).find(".tve-conditions-text:last").data("set",[e]).data("groups",[i])}else e.is_default||a.append(`<div class="tve-conditions-text"><span class="tve-conditions-title">${e.name}</span><input type="checkbox" ${e.is_checked&&o?"checked":""}></div>`).find(".tve-conditions-text:last").toggleClass("tve-conditions-disabled",!o).data("set",[e]).data("groups",[i])}))}))}));let l=!0;[d,a].forEach((t=>{t.closest(".ab-item").toggleClass("hidden",0===t.children().length),l=l&&0!==t.children().length})),o.find(".tve-global-conditions-divider").toggleClass("hidden",!l),this.shouldHideIcon=!d.html().length&&!a.html().length||!o.find(".tve-conditions-text:not(.tve-conditions-disabled)").length,i.toggleClass("tcb-preview-hidden",this.shouldHideIcon),t("#wpadminbar").toggleClass("tcb-has-condition-preview",!this.shouldHideIcon)}}isPreviewNeeded(){return"undefined"!=typeof tcb_condition_sets&&tcb_condition_sets.length}addPreviewList(i){const e=[];tcb_condition_sets.forEach((i=>i.displays.forEach((o=>{const s=t(`[data-display-group="${i.key}"], [data-group="${i.key}"]`).length;Array.isArray(o.sets)&&o.sets.forEach((t=>{!t.is_checked||e.includes(t.name)&&t.is_global||!s||e.push(t.name)}))})))),i.empty(),e.length>0?e.forEach((t=>{i.append(`<li class='tve-preview-conditions-tooltip-display'>${t}</li>`)})):i.append("<li class='tve-preview-conditions-tooltip-display'>Default display</li>")}};t(window).on("tcb_after_dom_ready",(()=>{tve_frontend_options.is_editor_page||e.initFrontend()})),TCB_Front.setModuleLoadedStatus("conditional-display",!0)})(ThriveGlobal.$j,TCB_Front);