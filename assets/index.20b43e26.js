import{d as e,bE as t,h as s,o,i as a,w as r,j as i,m as l}from"./index.a0c33e6e.js";import{I as c}from"./index.4e5ad320.js";import{a as n}from"./index.201f35c2.js";import{_ as m}from"./index.68673cbc.js";import"./SearchOutlined.503f9ea6.js";import"./EyeOutlined.b06a5359.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./index.bed999aa.js";import"./useTimeout.131c739b.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./index.24bc2e8e.js";import"./index.46e4dce7.js";import"./RightOutlined.0b237a08.js";import"./types.bc7cc0a6.js";import"./isEqual.679122bc.js";import"./toInteger.8b9af448.js";import"./DownOutlined.69023226.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";var p=e({name:"TabsDemo",components:{CollapseContainer:n,PageWrapper:m,[c.name]:c},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:a,closeCurrent:r,refreshPage:i}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:a,closeCurrent:r,refreshPage:i}}});const d=l("关闭所有"),u=l("关闭左侧"),f=l("关闭右侧"),j=l("关闭其他"),C=l("关闭当前"),b=l("刷新当前");p.render=function(e,t,l,c,n,m){const p=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),a(k,{title:"标签页操作示例"},{default:r((()=>[i(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:r((()=>[i(p,{placeholder:"请输入"})])),_:1}),i(h,{class:"mt-4",title:"标签页操作"},{default:r((()=>[i(g,{class:"mr-2",onClick:e.closeAll},{default:r((()=>[d])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeLeft},{default:r((()=>[u])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeRight},{default:r((()=>[f])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeOther},{default:r((()=>[j])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.closeCurrent},{default:r((()=>[C])),_:1},8,["onClick"]),i(g,{class:"mr-2",onClick:e.refreshPage},{default:r((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default p;