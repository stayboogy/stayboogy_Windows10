!function(){var t={83511:function(t,e,o){((e,n)=>{const s=o(15149),i=o(10603),a={init:()=>{TCB_Front.Utils.isEditorPage()||(e(".thrv_social.thrv_social_custom").each(((t,o)=>a.initUI(e(o)))),a.initButtons(),e("body").on("click",".thrv_social_custom .tve_s_link",(function(){const t=e(this).parents(".tve_s_item"),o=t.attr("data-s");i[o]&&i[o](t)})),e(".thrv_social_follow").each(((t,o)=>{let n=!0;e(o).find(".tve_s_item").each(((t,o)=>{const s=e(o);s.find("a").attr("href")?n=!1:s.hide()})),n&&o.style.setProperty("display","none","important")}))),s.initShareCounts()},initUI:t=>{const e=n.Utils.jsonParse(t,"data-device-config"),o=n.getDisplayType();if(e[o]){const n=e[o],s=n.button_type||"tve_social_itb",i=1===parseInt(n.isFullWidth),a=n.showCount,r=1===parseInt(n.isVertical),c=t.find(".tve_social_items").attr("class").replace(/(tve_social_items|tve_social_custom)/g,"").match(/(\s+)?tve_social_([a-z]{2,3})/),d=c?"tve_social_"+c[2]:"tve_social_itb";d!==s&&t.find(".tve_social_items").removeClass(d).addClass(s),i&&t.toggleClass("tcb-social-full-width",i),0===parseInt(a)&&t.find(".tve_s_share_count").remove(),n.isVertical&&t.toggleClass("tcb-social-vertical",r)}},initButtons:()=>{window.FB&&setTimeout((function(){e(".thrv_social_default .tve_s_fb_share, .thrv_social_default .tve_s_fb_like").each((function(){FB.XFBML.parse(this)}))}),200)}};window.TCB_Front.onSocialCustomClick=i,t.exports=a})(ThriveGlobal.$j,TCB_Front)},10603:function(t){const e={wnd(t,e,o){const n=void 0!==window.screenLeft?window.screenLeft:screen.left,s=void 0!==window.screenTop?window.screenTop:screen.top;let i,a;i=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;const r=i/2-e/2+n,c=a/2-o/2+s,d=window.open(t,"Thrive Share","scrollbars=yes,resizable=yes,toolbar=no,menubar=no,scrollbars=no,location=no,directories=no,width="+e+", height="+o+", top="+c+", left="+r);return window.focus&&d.focus(),d},fb_share(t){const o=t.data();if(o.href||(o.href=location.href),o.type&&"feed"!==o.type)e.wnd("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(o.href),650,500);else{let t="";o.name&&(t+="&title="+encodeURIComponent(o.name)),o.description&&(t+="&description="+encodeURIComponent(o.description)),o.href&&(t+="&u="+encodeURIComponent(o.href)),o.caption&&(t+="&caption="+encodeURIComponent(o.caption)),o.image&&(t+="&picture="+encodeURIComponent(o.image)),t="?"+t.substr(1),e.wnd("https://www.facebook.com/sharer.php"+t,650,500)}return!1},t_share(t){const o=t.data();o.href||(o.href=location.href),e.wnd("https://twitter.com/intent/tweet?url="+encodeURIComponent(o.href)+(o.tweet?"&text="+encodeURIComponent(o.tweet):"")+(o.via?"&via="+o.via:""),550,450)},in_share(t){const o=t.data();o.href||(o.href=location.href),e.wnd("https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(o.href),550,400)},pin_share(t){const o=t.data();o.href||(o.href=location.href),e.wnd("https://pinterest.com/pin/create/button/?url="+encodeURIComponent(o.href)+(o.media?"&media="+encodeURIComponent(o.media):"")+(o.description?"&description="+encodeURIComponent(o.description):""),600,600)},xing_share(t){const o=t.data();o.href||(o.href=location.href),e.wnd("https://www.xing.com/spi/shares/new?url="+encodeURIComponent(o.href),600,500)}};t.exports=e},15149:function(t){(e=>{const o={initShareCounts:()=>{!window.TVE_Dash||TVE_Dash.ajax_sent?o.getShareCounts():TCB_Front.$document.on("tve-dash.load",(function(){const t=o.getShareCounts(e("body"),{},!0);t&&TVE_Dash.add_load_item("tcb_social",t[0],t[1])}))},getShareCounts:(t,o,n)=>{const s=(t=t||e("body")).find(".tve_social_items.tve_social_custom");if(!s.length)return;const i={action:"tve_social_count",for:[]};if(void 0!==o?e.each(o,(function(t,e){i[t]=e})):"undefined"!=typeof tve_path_params&&tve_path_params.post_id&&(i.post_id=tve_path_params.post_id),s.each((function(t){const o=e(this),n={};if(o.data("tve-social-counts")||!o.hasClass("tve_social_cb")&&"1"!==o.parent().attr("data-counts"))return void o.data("tve-social-counts",1);o.data("tve-social-counts",1);const s=o.prev(".tve_s_share_count"),a=o.children(".tve_s_item").each((function(){const t=e(this).addClass("tve_count_loading");n[t.attr("data-s")]=t.attr("data-href")}));if(n.hasOwnProperty("t_share")&&1===a.length)return a.removeClass("tve_count_loading"),s.remove(),void o.parent().removeAttr("data-counts");i.for[t]=n})),!i.for.length)return null;TCB_Front.total_share_counts={};const a=function(t){t&&t.counts&&t.totals&&s.each((function(o){const n=e(this),s=n.prev(".tve_s_share_count"),i=n.children(".tve_s_item");e.each(t.counts[o],(function(t,e){i.filter(".tve_s_"+t).find(".tve_s_count").html(e.formatted)})),i.removeClass("tve_count_loading");let a=s.length?window.getComputedStyle(s[0]).display:"flex";if(t.totals&&t.totals[o]&&"1"===n.parent().attr("data-counts")){let e=parseInt(n.parent().attr("data-minShares"));e=isNaN(e)?0:e,s.find(".tve_s_cnt").html(t.totals[o].formatted),parseInt(tve_frontend_options.is_editor_page)||(a=e<t.totals[o].value?"flex"===a?"flex":"inline-block":"none",s.css("cssText",`display: ${a} !important;`))}t.totals&&t.totals[o]&&(TCB_Front.total_share_counts[i.attr("data-href")]=t.totals[o])}))};if(void 0!==n&&n)return[i,a];e.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:i,dataType:"json"}).done(a)}};window.TCB_Front.getShareCounts=o.getShareCounts,t.exports=o})(ThriveGlobal.$j)}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}void 0===TCB_Front.js_modules["social-share"]&&TCB_Front.setModuleLoadedStatus("social-share",!1),(t=>{if(TCB_Front.isModuleLoaded("social-share"))return;const e=o(83511);t(window).on("tcb_after_dom_ready",(()=>e.init())),TCB_Front.setModuleLoadedStatus("social-share",!0)})(ThriveGlobal.$j)}();