({60213:function(){void 0===TCB_Front.js_modules.timer&&TCB_Front.setModuleLoadedStatus("timer",!1),(t=>{if(TCB_Front.isModuleLoaded("timer"))return;const e=[".thrv-countdown_timer_evergreen",".tve_countdown_timer_evergreen",".thrv-countdown_timer_plain",".thrv_countdown_timer:not(.tve_countdown_timer_evergreen)"].join(", ");t(window).on("tcb_after_dom_ready",(()=>{TCB_Front.Utils.isEditorPage()||t(e).each(((e,a)=>n(t(a))))}));const n=e=>{let n,a=new Date,o=new Date(e.attr("data-date")+"T"+e.attr("data-hour")+":"+e.attr("data-min")+":"+(e.attr("data-sec")||"00")+e.attr("data-timezone")),r=0,i=0,d=0,s=0,_=2;if(e.data("tcb_timer_done"))return this;const f=e.attr("data-text"),l=e.hasClass("thrv-countdown_timer_evergreen")||e.hasClass("tve_countdown_timer_evergreen"),c=e.attr("data-norestart"),p=parseInt(e.attr("data-day")),u=parseInt(e.attr("data-hour")),m=parseInt(e.attr("data-min")),v=parseInt(e.attr("data-sec"));if(e.data("tcb_timer_done",!0),l){o=new Date;let t=TCB_Front.getCookie(e.attr("data-id"));if(t){t=t.split("-");const e=new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5]);o.setTime(e)}else{o.setTime(a.getTime()+24*p*3600*1e3+3600*u*1e3+60*m*1e3+1e3*v);const t=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()+"-"+o.getHours()+"-"+o.getMinutes()+"-"+o.getSeconds();let n=new Date("2034-01-01");if(!parseInt(c)){const t=new Date(o.getTime());n=t.setDate(o.getDate()+parseInt(e.attr("data-expday"))),n=t.setHours(o.getHours()+parseInt(e.attr("data-exphour"))),n=new Date(n)}TCB_Front.setCookie(e.attr("data-id"),t,{expires:n})}}function g(){setTimeout((function(){e.find(".tve_t_day .t-digits").css("min-width",e.find(".tve_t_sec .t-digits > span").outerWidth()*_+"px")}),10)}e.parents(".thrv_content_reveal").on("tve-content-revealed",g),e.parents(".tve_p_lb_content").on("tve.before-lightbox-open",g);const h=function(t,e){if(t.html()===e)return t;t.removeClass("next");const n=t.clone().removeClass("go-down").addClass("next").html(e);return t.before(n).next(".go-down").remove(),t.addClass("go-down"),setTimeout((function(){n.addClass("go-down")}),20),t},w=function(t,e,n){void 0===n&&(n=!1);let a=0;if(e<=99)h(t.find(".part-1").first(),e%10),h(t.find(".part-2").first(),Math.floor(e/10)),a=2;else for(;e;)a++,h(t.find(".part-"+a).first(),e%10),e=Math.floor(e/10);if(!1!==n&&a<n)for(let e=a+1;e<=n;e++)h(t.find(".part-"+e).first(),0)},C=function(){e.addClass("tve_cd_expired"),e.find(".t-digits span").html("0"),f&&(e.find(".tve_t_part").addClass("ct_finished"),e.find(".tve_t_text").html(f).fadeIn(200));const n=t.Event("tve.countdown-finished");e.trigger(n),setTimeout((function(){e.find(".t-digits span:not(.ct-d-placeholder)").hide()}),100)},T=function(){a=new Date,s=Math.floor((o.getTime()-a.getTime())/1e3),d=Math.floor(s/60),s%=60,i=Math.floor(d/60),d%=60,r=Math.floor(i/24),i%=24,r>99&&(_=r.toString().length)};!l&&a>=o?C():(T(),function(){const n=function(e,n){return t('<span class="part-p ct-d-placeholder">&nbsp;</span><span class="part-'+e+'">'+n+"</span>")};e.find(".tve_t_sec .t-digits").empty().append(n(2,Math.floor(s/10))).append(n(1,s%10)),e.find(".tve_t_min .t-digits").empty().append(n(2,Math.floor(d/10))).append(n(1,d%10)),e.find(".tve_t_hour .t-digits").empty().append(n(2,Math.floor(i/10))).append(n(1,i%10));const a=e.find(".tve_t_day .t-digits").empty();let o=r;for(let t=1;t<=_;t++)a.append(n(t,o%10)),o=Math.floor(o/10);a.css("min-width","")}(),e.addClass("init_done"),n=setInterval((function(){T(),w(e.find(".tve_t_sec .t-digits"),s),w(e.find(".tve_t_min .t-digits"),d),w(e.find(".tve_t_hour .t-digits"),i),w(e.find(".tve_t_day .t-digits"),r,_),r<=0&&i<=0&&d<=0&&s<=0&&(r=i=d=s=0,clearInterval(n),C())}),1e3)),l&&a>=o&&(clearInterval(n),C())};TCB_Front.setModuleLoadedStatus("timer",!0)})(ThriveGlobal.$j)}})[60213]();