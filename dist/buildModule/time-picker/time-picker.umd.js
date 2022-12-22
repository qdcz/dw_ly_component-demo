(function(w,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(w=typeof globalThis<"u"?globalThis:w||self,e((w.dw=w.dw||{},w.dw["uitime-picker"]={}),w.Vue))})(this,function(w,e){"use strict";const q=(o,n)=>(o.install=function(u){if(o){const s=o.name||o.__name;if(s||n){const p=n?`dw-${n}`:"dw-"+s.replace(/dw/gi,"").toLowerCase();u.component(p,o)}else console.error(o,n,!n)}},o),J=o=>Array.isArray(o);function C(o){const n=`vi-${o}`;return{n:p=>p?p.startsWith("-")?`${n}${p}`:`${n}_${p}`:n,classes:(...p)=>p.map(l=>{if(J(l)){const[V,v,h=null]=l;return V?v:h}return l})}}const L={clearable:{type:[String,Boolean],default:!1},isRange:{type:[String,Boolean],default:!1},disabledHours:{type:Array,default:[]},disabledMinutes:{type:Array,default:[]},disabledSeconds:{type:Array,default:[]},arrowControl:{type:[String,Boolean],default:""},placeholder:{type:String,default:"Arbitrary time"},startPlaceholder:String,endPlaceholder:String,modelValue:{type:[String,Number,Boolean],default:""},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray","popper-bg-color":"#fff","popper-height":"228","popper-border-radius":"8","popper-z-index":"999","popper-box-shadow-x":"0","popper-box-shadow-y":"0","popper-box-shadow-blur":"12","popper-box-shadow-spread":"0","popper-box-shadow-color":"rgba(0, 0, 0, 0.12)","popper-arrow-height":"5","popper-panel-padding-t":"8","popper-panel-padding-r":"4","popper-panel-padding-b":"0","popper-panel-padding-l":"4","popper-footer-height":"36","popper-footer-fo-size":"12","popper-footer-border-top-width":"1","popper-footer-border-top-style":"solid","popper-footer-border-top-color":"rgb(228, 231, 237)","popper-footer-cancel-fo-color":"#303133","popper-footer-ok-fo-color":"skyblue","popper-footer-ok-fo-weight":"800","popper-footer-ok-margin-t":"0","popper-footer-ok-margin-r":"5","popper-footer-ok-margin-b":"0","popper-footer-ok-margin-l":"5","popper-footer-ok-padding-t":"0","popper-footer-ok-padding-r":"5","popper-footer-ok-padding-b":"0","popper-footer-ok-padding-l":"5","popper-spinner-pitch-box-border-top-width":"1","popper-spinner-pitch-box-border-top-style":"solid","popper-spinner-pitch-box-border-top-color":"#e4e7ed","popper-spinner-pitch-box-border-bottom-width":"1","popper-spinner-pitch-box-border-bottom-style":"solid","popper-spinner-pitch-box-border-bottom-color":"#e4e7ed","popper-spinner-number-height":"32","popper-spinner-number-fo-color":"#606266","popper-spinner-number-fo-size":"12","popper-spinner-number-hover-bg-color":"#e0e0e0","popper-spinner-number-active-fo-color":"#000","popper-spinner-number-active-fo-weight":"700","popper-spinner-number-active-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","popper-spinner-number-disabled-fo-color":"rgb(223, 223, 223)","popper-spinner-number-disabled-hover-bg-color":"rgba($color: #e0e0e0, $alpha: 0)","scroll-bar-thumb-width":"8",scrollBarHeight:"60",scrollBarBgColor:"rgb(218, 218, 218)",scrollBarBgColorHover:"skyblue"})}},H=Symbol("time-picker"),D=function(o,n){for(let[u,s]of Object.entries(n.value))o.style.setProperty("--"+u,s)},N={mounted(o,n){D(o,n)},updated(o,n){D(o,n)},install(o){o.directive("Css",this)}},{n:W,classes:Q}=C("input-svg-icon"),X=e.defineComponent({name:"VIInputSvgIcon",emits:["click"],props:{path:{type:String,default:`M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 
            764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 
            45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z`},height:{type:[String,Number],default:"12px"},width:{type:[String,Number],default:"12px"},modelValue:{type:[String,Number,Boolean],default:""}},setup(o,n){const u=function(s){n.emit("click",s)};return()=>e.createVNode("svg",{class:[Q(W()),"icon"],height:o.height,width:o.width,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",onClick:u},[e.createVNode("path",{fill:"currentColor",d:o.path},null)])}}),$={modelValue:{type:[String,Number,Array],default:""},showPassword:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},readonly:{type:[String,Boolean],default:!1},clearable:{type:[String,Boolean],default:!1},placeholder:{type:String,default:"请选择您需要的内容o(*￣▽￣*)ブ"},dynamicCss:{type:Object,default:()=>({"input-box-shadow-x":"0","input-box-shadow-y":"0","input-box-shadow-blur":"0","input-box-shadow-spread":"1","input-box-shadow-color":"#dcdfe6","input-hover-box-shadow-x":"0","input-hover-box-shadow-y":"0","input-hover-box-shadow-blur":"0","input-hover-box-shadow-spread":"1","input-hover-box-shadow-color":"#85a2dd","input-active-box-shadow-x":"0","input-active-box-shadow-y":"0","input-active-box-shadow-blur":"0","input-active-box-shadow-spread":"1","input-active-box-shadow-color":"rgb(0, 94, 255)","input-border-radius":"4","input-line-padding-t":"0","input-line-padding-r":"28","input-line-padding-b":"0","input-line-padding-l":"8","input-bg-color":"rgba(255,255,255)","input-fo-color":"#606266","input-fo-size":"12","input-fo-weight":"600","input-line-height":"30","input-width":"200","input-text-alight":"start","input-icon-width":"12","input-icon-color":"#000","input-icon-hover-color":"#008cc8","input-placeholder-fo-color":"gray"})}},{n:Y,classes:Z}=C("timePickerInput"),ee=e.defineComponent({name:"VITimePickerInput",emits:["focus","blur","click","update:modelValue","close"],directives:{css:N},props:$,components:{"vi-input-svg-icon":X},setup(o,n){const u="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z",s=e.reactive({softFocus:!1,isHover:!1}),p=function(m){b.value||n.emit("click",m)},l=function(m){b.value||(n.emit("update:modelValue",m.target.value),n.emit("close"),m.stopPropagation())},V=function(m){b.value||(n.emit("focus",m),s.softFocus=!0)},v=function(m){b.value||(n.emit("blur",m),s.softFocus=!1)},h=function(m){b.value||(s.isHover=!0)},y=function(m){b.value||(s.isHover=!1)},S=function(m){b.value||n.emit("update:modelValue",m.target.value)},r=function(m){b.value||n.emit("update:modelValue",m.target.value)},a=e.computed(()=>Object.assign($.dynamicCss.default(),o.dynamicCss)),k=e.computed(()=>typeof o.readonly=="string"?!0:o.readonly),M=e.computed(()=>typeof o.clearable=="string"?!0:o.clearable),T=e.computed(()=>typeof o.showPassword=="string"?!0:o.showPassword),b=e.computed(()=>typeof o.disabled=="string"?!0:o.disabled),_=e.computed(()=>s.softFocus?"active":"");return()=>e.withDirectives(e.createVNode("div",{class:[Z(Y()),_.value,b.value?"disabled":""],onClick:p,onMouseenter:h,onMouseleave:y},[e.createVNode("input",{class:[Y("_inner")],placeholder:o.placeholder,onFocus:V,onBlur:v,readonly:k.value||b.value,value:o.modelValue,onChange:S,onInput:r,type:T.value?"password":"text"},null),o.modelValue&&M.value&&s.isHover?e.createVNode(e.resolveComponent("vi-input-svg-icon"),{class:"icon",height:a.value["input-icon-width"],width:a.value["input-icon-width"],path:u,onClick:l},null):""]),[[e.resolveDirective("css"),a.value||{}]])}}),{n:x,classes:E}=C("popper"),te=e.defineComponent({name:"VITimePickerPopper",emits:["focus","blur","click"],props:["active"],setup(o,n){let{timePickerRef:u}=e.inject(H);const s=e.reactive({parentRect:{x:0,y:0,height:0,width:0},dropdownTop:"0"}),p=e.ref(null),l=e.ref(null),V=()=>{e.nextTick(()=>{s.parentRect=u.value.getBoundingClientRect(),s.dropdownTop=s.parentRect.height+10+"px"})};return e.onMounted(()=>V()),()=>{var v,h;return e.createVNode("div",{class:[x(""),o.active?"active":""],style:{top:s.dropdownTop}},[e.createVNode("div",{ref:p,class:[x("_arrow")]},[o.active]),e.createVNode("div",{ref:l,class:[E(x("_content"))]},[e.createVNode("div",{class:[E(x("_inner"))]},[(h=(v=n.slots).default)==null?void 0:h.call(v)])])])}}}),{n:B,classes:oe}=C("scroll-bar"),ne=e.defineComponent({name:"VIScrollBar",emits:["focus","blur","click","scroll","getRef"],props:["dynamicCss"],directives:{css:N},setup(o,n){const u=e.ref(),s=e.ref(),p=e.ref(),l=e.reactive({realMargin:0,realPadding:0,viewHeight:0,realHeight:"0",maxScrollBoxRange:0,proportion:0,scrollBarHeight:0,maxScrollBarRange:0,scrollBarMovePropor:0,scrollBoxMovePropor:0,translateY:0,startY:0,moveY:0,_move:0,mouseMoving:!1,scrollBoxRealHeight:0,scrollBarViewHeight:0,scrollBoxMaxRange:0});e.onMounted(()=>{e.nextTick(()=>{let a=window.getComputedStyle(p.value).height.replace("px","");l.scrollBoxRealHeight=Number(a);let k=window.getComputedStyle(u.value).height.replace("px","");l.scrollBarViewHeight=Number(k),l.scrollBoxMaxRange=l.scrollBoxRealHeight-l.scrollBarViewHeight,n.emit&&n.emit("getRef",u)})});const V=e.computed(()=>l.scrollBarHeight<l.realHeight.replace("px","")*1),v=function(a){n.emit("scroll",a)},h=function(a){document.addEventListener("mousedown",y),document.addEventListener("mousemove",S)},y=function(a){l.mouseMoving=!0,l.startY=a.clientY},S=function(a){l.moveY=l.startY-a.clientY,r()};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mousedown",y),l.startY=0,l.moveY=0,l.mouseMoving&&(l.translateY=l._move),l.mouseMoving=!1});const r=function(){let a=0;l.moveY<0?a=l.translateY+Math.abs(l.moveY):l.moveY>=0&&(a=l.translateY-Math.abs(l.moveY)),a<0&&(a=0),a>l.maxScrollBarRange&&(a=l.maxScrollBarRange),l._move=a,s.value.style.transform=`translateY(${a}px)`,u.value.scrollTop=Math.abs(l.scrollBoxMovePropor*a)};return()=>{var a,k;return e.withDirectives(e.createVNode("div",{class:[oe(B())]},[e.createVNode("div",{class:B("left"),ref:u,onScroll:v},[e.createVNode("div",{ref:p},[(k=(a=n.slots).default)==null?void 0:k.call(a)])]),V.value?e.createVNode("div",{ref:s,class:B("right"),style:{height:l.scrollBarHeight+"px"},onMousedown:h},null):""]),[[e.resolveDirective("css"),Object.assign(o.dynamicCss||{},{})]])}}}),{n:re,classes:ie}=C("time-picker"),A=q(e.defineComponent({name:"VITimePicker",emits:["click","inputClick","closeClick","cancelClick","okClick","update:modelValue"],directives:{css:N},props:L,components:{"vi-time-picker-input":ee,"vi-time-picker-popper":te,"vi-scroll-bar":ne},setup(o,n){const u=[null,null,null];let s="";const p=t=>t<10?"0"+t:t+"",l=t=>{const i=t.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);return i||console.warn("初始化数据格式不符合规范,已被清空！"),i},V=()=>"xxxxxxxx".replace(/[xy]/g,function(t){var i=0|16*Math.random(),c=t=="x"?i:8|3&i;return c.toString(16)}),v=e.ref();let h=e.ref(),y=e.ref(),S=e.ref();const r=e.reactive({uuid:V(),popperVisible:!1,softFocus:!1,isSubmit:!1,hourList:[],minuteList:[],secondList:[],currentSelect:["","",""]}),a=t=>h=t,k=t=>y=t,M=t=>S=t,T=function(){r.popperVisible=!1,r.softFocus=!1},b=function(t){let i=!1;for(let c=0;c<t.path.length;c++){const d=t.path[c];if(d.classList&&d.classList.value&&d.getAttribute("class").includes("-time-picker")&&d.dataset.id==r.uuid){i=!0;break}}i||(T(),r.isSubmit=!0)};document.addEventListener("mousedown",b);const _=function(t){},m=function(t){},le=function(){n.emit&&n.emit("click")},se=function(t){r.popperVisible=!r.popperVisible,r.isSubmit=!1,o.modelValue||ge(),n.emit&&n.emit("inputClick")},ae=function(){r.popperVisible=!1,n.emit&&n.emit("closeClick")},ce=function(t){const{type:i}=t.target.dataset;r.popperVisible=!1,i=="cancel"?(r.isSubmit=!1,n.emit&&n.emit("update:modelValue",s),n.emit&&n.emit("cancelClick"),F()):i=="ok"&&(r.isSubmit=!0,n.emit&&n.emit("okClick",r.currentSelect))},R=function(t,i){const c={index:{hour:"0",minute:"1",second:"2"},ref:{hour:h,minute:y,second:S}},{num:d,disabled:f}=i.dataset;if(d){if(f=="true")return;r.currentSelect[c.index[t]]=d;const K=Number(r.currentSelect[c.index[t]])*Number(g.value["popper-spinner-number-height"]);c.ref[t].value.scrollTop=K}},ue=function(t){R("hour",t.target)},pe=function(t){R("minute",t.target)},de=function(t){R("second",t.target)},P=function(t,i){const c={timers:{hour:0,minute:1,second:2},ableRange:{hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"}};let d=t.scrollTop,f=Math.round(d/Number(g.value["popper-spinner-number-height"]));if(o[c.ableRange[i]].filter(ye=>ye==f).length>0)return;r.currentSelect[c.timers[i]]=p(f);let Ve=f*Number(g.value["popper-spinner-number-height"]);u[c.timers[i]]&&(clearTimeout(u[c.timers[i]]),u[c.timers[i]]=null),u[c.timers[i]]=setTimeout(()=>{t.scrollTop=Ve},200)},me=function(t){P(t.target,"hour")},fe=function(t){P(t.target,"minute")},he=function(t){P(t.target,"second")},be=()=>{r.hourList=new Array(24).fill(0).map((t,i)=>i<10?"0"+i:i+""),r.minuteList=new Array(60).fill(0).map((t,i)=>i<10?"0"+i:i+""),r.secondList=new Array(60).fill(0).map((t,i)=>i<10?"0"+i:i+"")},F=function(){s&&(h.value.scrollTop=Number(s.slice(0,2))*Number(g.value["popper-spinner-number-height"]),y.value.scrollTop=Number(s.slice(3,5))*Number(g.value["popper-spinner-number-height"]),S.value.scrollTop=Number(s.slice(6,8))*Number(g.value["popper-spinner-number-height"]))},ge=()=>{const t=new Date,i=t.getHours(),c=t.getMinutes(),d=t.getSeconds();r.currentSelect[0]=p(i),r.currentSelect[1]=p(c),r.currentSelect[2]=p(d),h.value.scrollTop=Number(r.currentSelect[0])*Number(g.value["popper-spinner-number-height"]),y.value.scrollTop=Number(r.currentSelect[1])*Number(g.value["popper-spinner-number-height"]),S.value.scrollTop=Number(r.currentSelect[2])*Number(g.value["popper-spinner-number-height"]),n.emit&&n.emit("update:modelValue",r.currentSelect[0]+":"+r.currentSelect[1]+":"+r.currentSelect[2])},j=function(){if(o.modelValue&&l(o.modelValue)){const t=o.modelValue.split(":"),i=o.disabledHours.findIndex(f=>f==t[0])!=-1,c=o.disabledMinutes.findIndex(f=>f==t[1])!=-1,d=o.disabledSeconds.findIndex(f=>f==t[2])!=-1;if(i||c||d)return console.warn("输入的值包含禁用项,已被清空"),n.emit&&n.emit("update:modelValue",""),!0}return!1};e.onBeforeMount(()=>{if(o.modelValue&&l(o.modelValue)&&!j()){const t=o.modelValue.split(":");r.currentSelect[0]=t[0],r.currentSelect[1]=t[1],r.currentSelect[2]=t[2],s=o.modelValue}}),e.onMounted(()=>{be(),e.nextTick(()=>{F()})});const g=e.computed(()=>Object.assign(L.dynamicCss.default(),o.dynamicCss)),ve=e.computed(()=>{const t={};for(const i in g.value)i.includes("input")&&(t[i]=g.value[i]);return t}),O=e.computed({get(){return j(),o.modelValue},set(t){n.emit&&n.emit("update:modelValue",t)}}),we=e.computed(()=>o.clearable),I=function(t,i){const c={hour:"disabledHours",minute:"disabledMinutes",second:"disabledSeconds"};let d=!1;return o[c[t]].forEach(f=>f==i?d=!0:""),d},z=e.computed(()=>function(t){return I("hour",t)}),G=e.computed(()=>function(t){return I("minute",t)}),U=e.computed(()=>function(t){return I("second",t)});return e.watchEffect(()=>{const t=r.currentSelect[0],i=r.currentSelect[1],c=r.currentSelect[2];if(!t&&!i&&!c){n.emit&&n.emit("update:modelValue","");return}const d=t+":"+i+":"+c;n.emit&&n.emit("update:modelValue",d)}),e.watchEffect(()=>{r.isSubmit&&(s=o.modelValue,n.emit&&n.emit("update:modelValue",s))}),e.provide(H,{timePickerRef:v}),()=>e.withDirectives(e.createVNode("div",{ref:v,"data-id":r.uuid,class:[ie(re())],onClick:le},[e.createVNode(e.resolveComponent("vi-time-picker-input"),{placeholder:o.placeholder,modelValue:O.value,"onUpdate:modelValue":t=>O.value=t,onFocus:_,onBlur:m,onClose:ae,dynamicCss:ve.value||{},clearable:we.value,readonly:!0,onClick:se},null),e.createVNode(e.resolveComponent("vi-time-picker-popper"),{active:r.popperVisible},{default:()=>[e.createVNode("div",{class:"time-panel"},[e.createVNode("div",{class:"time-panel__content"},[e.createVNode(e.resolveComponent("vi-scroll-bar"),{onGetRef:a,class:"time-panel__spinner time-panel__popper-spinner--hour",onScroll:me},{default:()=>[e.createVNode("ul",{onClick:ue},[r.hourList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":z.value(t),class:[r.currentSelect[0]==t?"active":"",z.value(t)?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{onGetRef:k,class:"time-panel__spinner time-panel__popper-spinner--minutes",onScroll:fe},{default:()=>[e.createVNode("ul",{onClick:pe},[r.minuteList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":G.value(t),class:[r.currentSelect[1]==t?"active":"",G.value(t)?"disabled":""]},[t]))])]}),e.createVNode(e.resolveComponent("vi-scroll-bar"),{onGetRef:M,class:"time-panel__spinner time-panel__popper-spinner--second",onScroll:he},{default:()=>[e.createVNode("ul",{onClick:de},[r.secondList.map(t=>e.createVNode("li",{"data-num":t,"data-disabled":U.value(t),class:[r.currentSelect[2]==t?"active":"",U.value(t)?"disabled":""]},[t]))])]})]),e.createVNode("div",{class:"time-panel__footer",onClick:ce},[e.createVNode("div",{"data-type":"cancel",class:"time-panel__footer_cancel"},[e.createTextVNode("取消")]),e.createVNode("div",{"data-type":"ok",class:"time-panel__footer_ok"},[e.createTextVNode("确认")])])])]})]),[[e.resolveDirective("css"),g.value||{}]])}}),"time-picker");w.VITimePicker=A,w.default=A,Object.defineProperties(w,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
