import{_ as e}from"./index.d64015e1.js";import{d as a,aJ as s,aF as t,r as o,aK as n,K as l,aZ as r,bi as i,ck as d,e as c,h as p,o as f,i as u,bw as v,j as m,l as x,k as g}from"./index.6cf10de3.js";import"./index.16d57d04.js";import"./RightOutlined.7e972f0b.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./isEqual.b94b8d79.js";import"./toInteger.d71d002f.js";/* empty css              */import"./vendor.3b1829c7.js";var j=a({name:"AppLocalPicker",components:{Dropdown:e,Icon:s},props:{showText:t.bool.def(!0),reload:t.bool},setup(e){const a=o([]),{prefixCls:s}=n("app-locale-picker"),{localeList:t}=i(),{changeLocale:p,getLang:f}=d(),u=l((()=>{var e;const s=a.value[0];return s?null==(e=t.find((e=>e.event===s)))?void 0:e.text:""}));return r((()=>{a.value=[c(f)]})),{localeList:t,handleMenuEvent:function(s){var t;t=s.event,p(t),a.value=[t],e.reload&&location.reload()},selectedKeys:a,getLangText:u,prefixCls:s}}});const L=v("data-v-25af17ef"),b=L(((e,a,s,t,o,n)=>{const l=p("Icon"),r=p("Dropdown");return f(),u(r,{trigger:["click"],dropMenuList:e.localeList,selectedKeys:e.selectedKeys,onMenuEvent:e.handleMenuEvent,overlayClassName:`${e.prefixCls}-overlay`},{default:L((()=>[m("span",{class:e.prefixCls},[m(l,{icon:"cil:language"}),e.showText?(f(),u("span",{key:0,class:`${e.prefixCls}__text`},x(e.getLangText),3)):g("",!0)],2)])),_:1},8,["dropMenuList","selectedKeys","onMenuEvent","overlayClassName"])}));j.render=b,j.__scopeId="data-v-25af17ef";export default j;