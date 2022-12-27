"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),Z=(t,a)=>(t.install=function(m){if(t){const l=t.name||t.__name;if(l||a){const s=a?`dw-${a}`:"dw-"+l.replace(/dw/gi,"").toLowerCase();m.component(s,t)}else console.error(t,a,!a)}},t),q=t=>Array.isArray(t);function A(t){const a=`vi-${t}`;return{n:s=>s?s.startsWith("-")?`${a}${s}`:`${a}_${s}`:a,classes:(...s)=>s.map(h=>{if(q(h)){const[p,f,e=null]=h;return p?f:e}return h})}}const E={height:{type:[String,Boolean],default:"300px"},width:{type:[String,Boolean],default:"auto"},thumbWidth:{type:String,default:"6px"},noResize:Boolean,dynamicCss:{type:Object,default:()=>({"thumb-bg-color":"#d9dfe3"})}};var Y=(t=>(t.HORIZONTAL="horizontal",t.VERTICAL="vertical",t))(Y||{});const F={type:{type:[String||Y],default:"vertical"},height:{type:String,default:"100px"},width:{type:String,default:"6px"},ratioX:{type:String,default:"0px"},ratioY:{type:String,default:"0px"}},V=function(t,a){for(let[m,l]of Object.entries(a.value))t.style.setProperty("--"+m,l)},J={mounted(t,a){V(t,a)},updated(t,a){V(t,a)},install(t){t.directive("Css",this)}},O=Symbol("scroll-bar"),{n:K}=A("scroll-bar__thumb"),G=r.defineComponent({name:"ScrollBar",emits:["update:height","update:width"],props:F,setup(t,a){const{thumbRatioY:m,thumbRatioX:l,thumbRatioYMaxRange:s,thumbRatioXMaxRange:h,wrapperInnerMaxiMoveProportionY:p,wrapperInnerMaxiMoveProportionX:f,scrollBarRef:e}=r.inject(O),x=r.ref(),X=r.reactive({mouseMoving:!1});let d=0,u=0,v=0,b=0,g=0,R=0;const P=r.computed({get(){return t.height},set(n){a.emit&&a.emit("update:height",n)}}),y=r.computed({get(){return t.width},set(n){a.emit&&a.emit("update:width",n)}}),W=function(n){if(n=="vertical"){let i=0;const M=g;i=v<0?M+Math.abs(v):M-Math.abs(v),i<0&&(i=0),i>s.value&&(i=s.value),e.value.scrollTop=Math.abs(p.value*i)}else if(n=="horizontal"){let i=0;const M=R;i=b<0?M+Math.abs(b):M-Math.abs(b),i<0&&(i=0),i>h.value&&(i=h.value),e.value.scrollLeft=Math.abs(f.value*i)}},N=function(n){X.mouseMoving=!0,g=Number(m.value.slice(11,-3)),R=Number(l.value.slice(11,-3)),d=Number(n.clientY),u=Number(n.clientX)},B=function(n){v=d-n.clientY,b=u-n.clientX,W(t.type)};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mousedown",N),d=0,u=0,v=0,b=0,g=0,R=0,X.mouseMoving=!1});const S=n=>{document.addEventListener("mousedown",N),document.addEventListener("mousemove",B)};return()=>r.createVNode("div",{class:K(),ref:x,style:{height:P.value,width:y.value,transform:t.type=="vertical"?t.ratioY:t.ratioX},onMousedown:S},null)}}),{n:I}=A("scroll-bar"),Q=r.defineComponent({name:"ScrollBar",emits:["update:width","scroll"],directives:{css:J},props:E,components:{"scroll-bar-thumb":G},setup(t,a){let m,l=null;const s=o=>{C()},h=r.ref(),p=r.ref(),f=r.ref(),e=r.reactive({wrapperInnerRealHeight:0,wrapperInnerRealWidth:0,wrapperInnerMaxiMoveRangeY:0,wrapperInnerMaxiMoveRangeX:0,wrapperInnerMaxiMoveProportionY:0,wrapperInnerMaxiMoveProportionX:0,thumbHeightProportion:0,thumbWidthProportion:0,thumbHeight:"",thumbWidth:"",thumbRatioX:"",thumbRatioY:"",thumbRatioYMaxRange:0,thumbRatioXMaxRange:0,thumbRatioYProportion:0,thumbRatioXProportion:0,cacheContainerWidth:""});let x=r.ref(!1);r.watch(()=>t.noResize,o=>{o?(m==null||m(),l==null||l.disconnect()):(l=new MutationObserver(s),r.nextTick(()=>{l.observe(p.value,{attributes:!0,childList:!0,subtree:!0})}))},{immediate:!0});const X=r.computed(()=>Object.assign(E.dynamicCss.default(),t.dynamicCss)),d=r.computed(()=>t.height),u=r.computed({get(){return e.cacheContainerWidth},set(o){e.cacheContainerWidth=o}}),v=r.computed({get(){return e.thumbHeight},set(o){e.thumbHeight=o}}),b=r.computed({get(){return e.thumbWidth},set(o){e.thumbWidth=o}}),g=r.computed({get(){return e.thumbRatioX},set(o){e.thumbRatioX=o}}),R=r.computed({get(){return e.thumbRatioY},set(o){e.thumbRatioY=o}}),P=r.computed(()=>e.thumbRatioYMaxRange),y=r.computed(()=>e.thumbRatioXMaxRange),W=r.computed(()=>e.wrapperInnerMaxiMoveProportionY),N=r.computed(()=>e.wrapperInnerMaxiMoveProportionX),B=o=>{e.thumbRatioY=`translateY(${String(e.thumbRatioYProportion*o)+"px"})`},S=o=>{e.thumbRatioX=`translateX(${String(e.thumbRatioXProportion*o)+"px"})`},n=o=>{h.value.scrollTop=o},i=o=>{h.value.scrollLeft=o},M=(o,c)=>{n(o),i(c)},C=o=>{var c,w;e.wrapperInnerRealHeight=Number((c=p.value)==null?void 0:c.scrollHeight),e.wrapperInnerRealWidth=Number((w=p.value)==null?void 0:w.scrollWidth),e.wrapperInnerMaxiMoveRangeY=e.wrapperInnerRealHeight-Number(d.value.replace("px","")),e.wrapperInnerMaxiMoveRangeX=e.wrapperInnerRealWidth-Number(u.value.replace("px","")),e.thumbHeightProportion=Number(d.value.replace("px",""))/e.wrapperInnerRealHeight,e.thumbWidthProportion=Number(u.value.replace("px",""))/e.wrapperInnerRealWidth,e.thumbHeight=String(e.thumbHeightProportion*Number(d.value.replace("px","")))+"px",e.thumbWidth=String(e.thumbWidthProportion*Number(u.value.replace("px","")))+"px",e.thumbRatioYMaxRange=Number(d.value.replace("px",""))-Number(e.thumbHeight.replace("px","")),e.thumbRatioXMaxRange=Number(u.value.replace("px",""))-Number(e.thumbWidth.replace("px","")),e.thumbRatioYProportion=e.thumbRatioYMaxRange/e.wrapperInnerMaxiMoveRangeY,e.thumbRatioXProportion=e.thumbRatioXMaxRange/e.wrapperInnerMaxiMoveRangeX,e.wrapperInnerMaxiMoveProportionY=e.wrapperInnerMaxiMoveRangeY/e.thumbRatioYMaxRange,e.wrapperInnerMaxiMoveProportionX=e.wrapperInnerMaxiMoveRangeX/e.thumbRatioXMaxRange};r.onMounted(()=>{e.cacheContainerWidth=t.width,C()});const z=o=>{const c=o.target.scrollTop,w=o.target.scrollLeft;B(c),S(w),a.emit&&a.emit("scroll",w,c)},j=o=>{x.value=!0},D=o=>{x.value=!1};r.provide(O,{height:d,thumbRatioY:R,thumbRatioX:g,thumbRatioYMaxRange:P,thumbRatioXMaxRange:y,wrapperInnerMaxiMoveProportionY:W,wrapperInnerMaxiMoveProportionX:N,scrollBarRef:h}),a.expose({setScrollTop:n,setScrollLeft:i,setScrollTo:M});const H=(o=Y.VERTICAL)=>{if(t.width===!1||t.height===!1)return"";const c=e.wrapperInnerRealHeight,w=Number(t.height.replace("px","")),k=e.wrapperInnerRealWidth;if(o=="vertical")return w<c?r.createVNode(r.resolveComponent("scroll-bar-thumb"),{ref:f,type:o,height:v.value,width:t.thumbWidth,ratioX:g.value,ratioY:R.value,class:x.value?"show":"hide"},null):"";if(o=="horizontal"){let L=Number(u.value.replace("px",""));if(u.value=="auto"){const _=()=>{u.value="auto",r.nextTick(()=>{var T;L=Number((T=p.value)==null?void 0:T.clientWidth),u.value=L+"px",C()})};_(),window.onresize=()=>_()}else if(u.value)return L<k?r.createVNode(r.resolveComponent("scroll-bar-thumb"),{ref:f,type:o,height:t.thumbWidth,width:b.value,ratioX:g.value,ratioY:R.value,class:x.value?"show":"hide"},null):""}};return()=>{var o,c;return r.withDirectives(r.createVNode("div",{class:I(),style:{width:u.value},onMouseenter:j,onMouseleave:D},[r.createVNode("div",{class:I("_wrapper"),ref:h,style:{height:d.value,width:u.value},onScroll:z},[r.createVNode("div",{class:I("_view"),ref:p},[(c=(o=a.slots).default)==null?void 0:c.call(o)])]),r.createVNode("div",{class:[I("_bar"),"horizontal"]},[H(Y.HORIZONTAL)]),r.createVNode("div",{class:[I("_bar"),"vertical"]},[H(Y.VERTICAL)])]),[[r.resolveDirective("css"),X.value||{}]])}}}),$=Z(Q,"scroll-bar");exports.ScrollBar=$;exports.default=$;
