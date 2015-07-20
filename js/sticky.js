/*
 * Sticky
 */

// Sticky Plugin v1.0.2 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 16/04/2015
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.
!function(t){var e=Array.prototype.slice,i=Array.prototype.splice,r={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1},n=t(window),s=t(document),o=[],c=n.height(),a=function(){for(var e=n.scrollTop(),i=s.height(),r=i-c,a=e>r?r-e:0,p=0;p<o.length;p++){var l=o[p],h=l.stickyWrapper.offset().top,u=h-l.topSpacing-a;if(l.stickyWrapper.css("height",l.stickyElement.outerHeight()),u>=e)null!==l.currentTop&&(l.stickyElement.css({width:"",position:"",top:""}),l.stickyElement.parent().removeClass(l.className),l.stickyElement.trigger("sticky-end",[l]),l.currentTop=null);else{var d=i-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-a;if(0>d?d+=l.topSpacing:d=l.topSpacing,l.currentTop!=d){var g;l.getWidthFrom?g=t(l.getWidthFrom).width()||null:l.widthFromWrapper&&(g=l.stickyWrapper.width()),null==g&&(g=l.stickyElement.width()),l.stickyElement.css("width",g).css("position","fixed").css("top",d),l.stickyElement.parent().addClass(l.className),null===l.currentTop?l.stickyElement.trigger("sticky-start",[l]):l.stickyElement.trigger("sticky-update",[l]),l.currentTop===l.topSpacing&&l.currentTop>d||null===l.currentTop&&d<l.topSpacing?l.stickyElement.trigger("sticky-bottom-reached",[l]):null!==l.currentTop&&d===l.topSpacing&&l.currentTop<d&&l.stickyElement.trigger("sticky-bottom-unreached",[l]),l.currentTop=d}}}},p=function(){c=n.height();for(var e=0;e<o.length;e++){var i=o[e],r=null;i.getWidthFrom?i.responsiveWidth===!0&&(r=t(i.getWidthFrom).width()):i.widthFromWrapper&&(r=i.stickyWrapper.width()),null!=r&&i.stickyElement.css("width",r)}},l={init:function(e){var i=t.extend({},r,e);return this.each(function(){var e=t(this),n=e.attr("id"),s=e.outerHeight(),c=n?n+"-"+r.wrapperClassName:r.wrapperClassName,a=t("<div></div>").attr("id",c).addClass(i.wrapperClassName);e.wrapAll(a);var p=e.parent();i.center&&p.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({"float":"none"}).parent().css({"float":"right"}),p.css("height",s),i.stickyElement=e,i.stickyWrapper=p,i.currentTop=null,o.push(i)})},update:a,unstick:function(){return this.each(function(){for(var e=this,r=t(e),n=-1,s=o.length;s-->0;)o[s].stickyElement.get(0)===e&&(i.call(o,s,1),n=s);-1!=n&&(r.unwrap(),r.css({width:"",position:"",top:"","float":""}))})}};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",p)),t.fn.sticky=function(i){return l[i]?l[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):l.init.apply(this,arguments)},t.fn.unstick=function(i){return l[i]?l[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):l.unstick.apply(this,arguments)},t(function(){setTimeout(a,0)})}(jQuery);

$(document).ready(function(){
    $('.sticky').sticky();
});
