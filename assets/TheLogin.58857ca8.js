import{o as l,c as d,d as s,l as i,v as a,p as u}from"./vendor.dda8c65c.js";import{_ as p}from"./index.6b673d1c.js";const m={name:"TheLogin",data(){return{username:"",password:""}},methods:{login(){var e;window.user=this.username;const r=(e=this.$route.query.redirect)!=null?e:"/protected";this.$router.push(r)}}},c={class:"login"},_=s("h1",null,"Login",-1),f=s("label",{for:"username"},"Username",-1),h=s("label",{for:"password"},"Password",-1),w=s("button",{class:"btn"},"Login",-1);function g(r,e,v,x,t,n){return l(),d("div",c,[s("form",{action:"",class:"form",onSubmit:e[2]||(e[2]=u((...o)=>n.login&&n.login(...o),["prevent"]))},[_,f,i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.username=o),id:"username",type:"text",class:"input"},null,512),[[a,t.username]]),h,i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),id:"password",type:"text",class:"input"},null,512),[[a,t.password]]),w],32)])}var y=p(m,[["render",g]]);export{y as default};