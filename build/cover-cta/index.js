!function(){"use strict";var e,o={790:function(){var e=window.wp.blocks,o=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor);function t(){const e=r.useBlockProps.save();return(0,o.createElement)("div",e,(0,o.createElement)(r.InnerBlocks.Content,{template:[["core/columns",{},[["core/column",{},[["core/cover"]]],["core/column",{},[["core/paragraph",{placeholder:"Enter side content..."}],["core/button",{placeholder:"Link to..."}]]]]]],templateLock:"insert"}))}(0,e.registerBlockType)("magnolia-block/magnolia-cover-cta",{edit:function(){const e=(0,r.useBlockProps)();return(0,o.createElement)("div",e,(0,o.createElement)(r.InnerBlocks,{template:[["core/columns",{},[["core/column",{},[["core/cover"]]],["core/column",{},[["core/paragraph",{placeholder:"Enter side content..."}],["core/button",{placeholder:"Link to..."}]]]]]],templateLock:"insert"}))},save:t}),(0,e.registerBlockType)("magnolia-block/magnolia-sidebar-cover-cta",{title:"Magnolia Call To Action for Sidebar",category:"magnolia-sidebar-blocks",icon:"layout",description:"This Call To Action variation is best for the sidebar.",edit:function(){const e=(0,r.useBlockProps)();return(0,o.createElement)("div",e,(0,o.createElement)(r.InnerBlocks,{template:[["core/cover",{},[["core/heading",{placeholder:"Enter heading..."}],["core/paragraph",{placeholder:"Enter text..."}],["core/button",{placeholder:"Link to..."}]]]],templateLock:"insert"}))},save:t}),(0,e.registerBlockType)("magnolia-block/magnolia-footer-cover-cta",{title:"Magnolia Call To Action for Footer",category:"magnolia-footer-blocks",icon:"layout",description:"This Call To Action variation is best for the footer.",edit:function(){const e=(0,r.useBlockProps)();return(0,o.createElement)("div",e,(0,o.createElement)(r.InnerBlocks,{template:[["core/group",{},[["core/cover",{placeholder:"Enter heading..."}],["core/paragraph",{placeholder:"Enter text..."}],["core/button",{placeholder:"Link to..."}]]]],templateLock:"insert"}))},save:t})}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,t),c.exports}t.m=o,e=[],t.O=function(o,r,n,c){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],c=e[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&c||a>=c)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(l=!1,c<a&&(a=c));if(l){e.splice(u--,1);var s=n();void 0!==s&&(o=s)}}return o}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[r,n,c]},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={965:0,703:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,c,a=r[0],l=r[1],i=r[2],s=0;if(a.some((function(o){return 0!==e[o]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(i)var u=i(t)}for(o&&o(r);s<a.length;s++)c=a[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(u)},r=self.webpackChunkmagnolia_about=self.webpackChunkmagnolia_about||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var n=t.O(void 0,[703],(function(){return t(790)}));n=t.O(n)}();