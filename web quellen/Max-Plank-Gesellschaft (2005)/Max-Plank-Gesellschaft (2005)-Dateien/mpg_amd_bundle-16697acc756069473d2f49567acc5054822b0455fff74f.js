$(function(){function t(){$("#slick_outer_js").hasClass("pseudo-hide")||($("#slick_outer_js").addClass("pseudo-hide"),$("body").css("overflow","auto"))}function e(e){$(e.target).is("input")||$(e.target).is("textarea")||$(e.target).attr("contenteditable")||(37==e.which&&(e.preventDefault(),$(this.slickElementId).slick("slickPrev")),39==e.which&&(e.preventDefault(),$(this.slickElementId).slick("slickNext")),27==e.which&&t())}function i(t,e,i,n,a,o,s){return'\n<div class="slick-slide" id="caption_'+t+'_slick_slide">\n  <div class="scrollable-center">\n    <div class="center-hold">\n      <figure class="image-hold" data-picture=\''+e+"' id=\"ext_picture_"+t+'" '+(s?'data-domain="'+s+'"':"")+'>\n\n      </figure>\n      <figurecaption class="text-hold">\n        '+(""!=i?'\n    <div class="text-date date">\n      '+i+"\n    </div>":"")+"\n        "+(""!=n?'<h2 class="title">'+n+"</h2>":"")+"\n        "+(a&&""!=a?'\n    <div class="text-desc description">\n      '+a+"\n    </div>":"")+"\n        "+(o&&""!=o?'\n    <div class="text-copy copyright">\n      '+o+"\n    </div>":"")+"\n      </figurecaption>\n    </div>\n  </div>\n</div>"}function n(t){return'\n<div class="extension-image-zoom">\n  <div class="slick-outer pseudo-hide" id="slick_outer_js">\n    <div class="fullscreen-slick" id="slick_container_js">\n      '+t+'\n    </div>\n    <div class="slick-grid-close-icon" aria-role="button" aria-label="Bildansicht schlie\xdfen"><span class="label">Esc</span></div>\n  </div>\n</div>'}var a=!!navigator.userAgent.match(/Trident\/7.0/),o=!!navigator.userAgent.match(/.NET4.0E/);a&&o&&$("body").addClass("ie11");var s=$("figure.image-extension:not(.no-fancybox)"),r="",c=0;s.each(function(){var t=$(this).find(".figure-link"),e=t.attr("href"),n=$(this).data("description"),a=$(this).find("div.copyright").html(),o=$(this).data("picture"),s=$(this).data("domain");if(o)if(0==o.indexOf("base64;")){var l=atob(o.replace(/(^base64;)/,""));d=decodeURIComponent(l.split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""))}else d=o;else var d='<img src="'+e+'">';t.data("sub-html","#caption_"+c),t.attr("sub-html","#caption_"+c),r+=i(c.toString(),d,"","",n,a,s),c+=1});var l=n(r);$(l).appendTo("body"),$(document).keydown(e.bind({slickElementId:"#slick_container_js"})),$("#slick_container_js").slick({touchThreshold:3});var d=new MpgCommon.SlickLazyLoader({targetSlickElement:"#slick_outer_js",imageDivClass:".image-hold",imageDivIdPrefix:"#ext_picture_"});$(document).on("click","figure.image-extension:not(.no-fancybox)>.figure-link:not(.action_marker)",function(t){var e=$(this).data("sub-html")+"_slick_slide",i=$(e).data("slick-index");$("#slick_container_js").slick("slickGoTo",i,!0),$("#slick_outer_js").removeClass("pseudo-hide"),$("body").css("overflow","hidden"),t.preventDefault()}),1==s.length&&$(document).on("click","figure.image-extension:not(.no-fancybox)>.figure-link",function(){d.preload(0)}),$(document).on("click",".slick-grid-close-icon",function(){t()}),$(document).on("click",".extension-image-zoom .fullscreen-slick .image-hold img",function(){event.target.classList.toggle("magnified")});var h=$(".slick-slide");h.length>=1&&($(h[1]).scroll(function(){h[h.length-1].scrollTop=this.scrollTop}),$(h[h.length-2]).scroll(function(){h[0].scrollTop=this.scrollTop}))}),$(function(){"use strict";$(document).on("mousedown",".h3.footer-link-header",function(t){$(this).nextAll("ul").toggleClass("show"),$(this).toggleClass("show"),$(this).attr("aria-expanded","false"==$(this).attr("aria-expanded")),t.preventDefault()}),$(document).on("focusin","div.footer-focus",function(){$(this).find(".h3.footer-link-header").attr("aria-expanded","true"),$(this).children().addClass("show")})}),$(function(){var t={name:10,phone:7,fax:7,email:8,room:3,links:9,extras:8,"default":6};$(".employee_list table.dataTable").each(function(){var e=$(this).find("th"),i=0,n=[];e.each(function(){var e=$(this),a=e.data("column"),o=t["default"];"string"==typeof a&&(o=t[a]||t["default"]),n.push({weight:o,element:e}),i+=o}),n.forEach(function(t){var e=100*t.weight/i+"%";t.element.attr("style","width:"+e)})})}),$(function(){function t(){var t=0;return function(){return"accordion-id-"+t++}}var e=t();$(".rwd-accordion").attr("role","presentation"),$(".rwd-accordion > .show_next, .rwd-support.show_next").attr("tabindex","0").attr("role","button").attr("aria-expanded",!1).addClass("mpg-icon mpg-icon-down2").next().attr("role","region"),$(".rwd-accordion > .show_next, .rwd-support.show_next").each(function(){var t=e();$(this).attr("id",t),$(this).next().attr("id",t+"-region"),$(this).attr("aria-controls",t+"-region"),$(this).next().attr("aria-labelledby",t)}),$(".rwd-accordion > .hide_with_js, .rwd-support.hide_with_js").hide(),$(".rwd-accordion > .show_next, .rwd-support.show_next").on("click",function(){$(this).toggleClass("open-accordion-tab"),$(this).next().slideToggle();var t="false"===$(this).attr("aria-expanded");return $(this).attr("aria-expanded",t),!1}),$(".rwd-accordion > .show_next, .rwd-support.show_next").on("keydown",function(t){var e;switch(console.log(t.which),t.which){case 13:case 32:$(this).trigger("click");break;case 40:(e=$(this).nextAll(".show_next")).length>0?e.first().focus():$(this).prevAll(".show_next").last().focus();break;case 38:(e=$(this).prevAll(".show_next")).length>0?e.first().focus():$(this).nextAll(".show_next").last().focus();break;case 36:$(this).prevAll(".show_next").last().focus();break;case 35:$(this).nextAll(".show_next").last().focus();break;default:return!0}return!1})}),function(t,e,i){"use strict";i("#event_registration_form .hide_with_js").hide(),i("#event_registration_form .show_with_js").show(),i("#event_registration_form input[type=checkbox]").on("change",function(){var t=i(this).closest("#event_registration_form").find(".event_registration_button");this.checked?i(t).prop("disabled",!1):i(t).attr("disabled","disabled")})}(0,MpgCommon,MpgCommon.jQuery);var OBFUSCATION_KEY=[220,183,47,101,3,123,33,152,32,81,207,11,71,16,142,75,127,2,174,118,100,128,86,70,66,177,224,151,155,136];$('a[data-indirect-mail="true"]').click(function(){var t=this;return window.location.href="mailto:"+$(t).attr("href").slice(7).match(/[0-9a-f]{2}/g).map(function(t,e){return parseInt(t,16)^OBFUSCATION_KEY[e%OBFUSCATION_KEY.length]}).map(function(t){return String.fromCharCode(t)}).join(""),!1}),$('a[data-indirect-mail="true"]').on("copy",function(){var t=$(this).attr("href").slice(7).match(/[0-9a-f]{2}/g).map(function(t,e){return Number.parseInt(t,16)^OBFUSCATION_KEY[e%OBFUSCATION_KEY.length]}).map(function(t){return String.fromCharCode(t)}).join("");event.clipboardData.setData("text/plain",t),event.preventDefault()});