import{p as i,u as c,q as p,o as m,c as f,d as t,s as d,v as l,x as _}from"./vendor.ef56c224.js";import{_ as w}from"./index.6521e800.js";const g={name:"TheLogin",setup(){const n=i(""),o=i(""),r=c(),s=p();return{username:n,password:o,login:()=>{var e;window.user=n.value;const a=(e=s.query.redirect)!=null?e:"/protected";r.push(a)}}}},h={class:"login"},v=t("h1",null,"Login",-1),x=t("label",{for:"username"},"Username",-1),b=t("label",{for:"password"},"Password",-1),L=t("button",{class:"btn"},"Login",-1);function y(n,o,r,s,u,a){return m(),f("div",h,[t("form",{action:"",class:"form",onSubmit:o[2]||(o[2]=_((...e)=>s.login&&s.login(...e),["prevent"]))},[v,x,d(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.username=e),id:"username",type:"text",class:"input"},null,512),[[l,s.username]]),b,d(t("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.password=e),id:"password",type:"text",class:"input"},null,512),[[l,s.password]]),L],32)])}var U=w(g,[["render",y]]);export{U as default};
