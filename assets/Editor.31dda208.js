import{_ as e}from"./index.05452a45.js";import{a as i}from"./index.7f70dfbd.js";import{d as t,bP as s,g as o,h as r,o as d,i as a,w as n,j as m}from"./index.6cf10de3.js";import{T as p}from"./index.344802bf.js";import{_ as l}from"./index.f4b4d933.js";import"./index.dd535865.js";import"./index.4028ada7.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.8cda17e4.js";import"./isEqual.b94b8d79.js";import"./get.2ff9f629.js";import"./_baseProperty.74f89655.js";import"./toInteger.d71d002f.js";import"./index.fea0867a.js";import"./index.80187f01.js";import"./SearchOutlined.4bbe31f8.js";import"./EyeOutlined.586c3500.js";import"./index.a11a5924.js";import"./CheckOutlined.043f2430.js";import"./DownOutlined.07599049.js";import"./index.7d400cac.js";import"./colors.4e45e03a.js";import"./index.1e19659a.js";import"./UpOutlined.74e210f0.js";import"./index.9fcdec8a.js";import"./RightOutlined.7e972f0b.js";import"./RedoOutlined.d8e3d4c6.js";import"./index.16d57d04.js";import"./EllipsisOutlined.2c5f8025.js";import"./types.fb3d6a87.js";import"./Tree.40f1bcaf.js";import"./util.00dc4c3f.js";import"./useAttrs.095b2c8e.js";/* empty css              */import"./uuid.d710d91a.js";import"./index.b218b89f.js";import"./DeleteOutlined.44f98072.js";import"./index.995a673b.js";import"./index.7d872a53.js";import"./useTimeout.0ebe11aa.js";import"./useWindowSizeFn.c49b1c44.js";import"./FullscreenOutlined.f8628908.js";import"./index.2fe313f9.js";import"./index.d64015e1.js";import"./index.083f1805.js";import"./LeftOutlined.7ae18e20.js";import"./download.3b26ae66.js";import"./domUtils.a05fef99.js";import"./_stringToArray.f18cff21.js";import"./index.de38b9ef.js";import"./useScrollTo.d2340d63.js";import"./animation.76ef2551.js";import"./index.4e278996.js";import"./index.3e25c6d3.js";import"./usePageContext.8bbc80e1.js";import"./transButton.fa57d467.js";import"./ArrowLeftOutlined.6bace270.js";const j=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>s(p,{value:e[i],onChange:t=>{e[i]=t}})}];var f=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=o();return{schemas:j,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,s,o,p){const l=r("BasicForm"),j=r("CollapseContainer"),f=r("PageWrapper");return d(),a(f,{title:"富文本嵌入表单示例"},{default:n((()=>[m(j,{title:"富文本表单"},{default:n((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;