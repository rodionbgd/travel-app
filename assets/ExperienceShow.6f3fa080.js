import{_ as a,p as c,s}from"./index.e004a13b.js";import{o as p,c as u,d as t,t as i}from"./vendor.64438a5f.js";const o={name:"ExperienceShow",props:{id:{type:Number,required:!0},experienceSlug:{type:String,required:!0}},data(){return{publicPath:c}},computed:{destination(){return s.destinations.find(e=>e.id===this.id)},experience(){return this.destination.experiences.find(e=>e.slug===this.experienceSlug)}}},l=["src","alt"];function d(e,m,x,h,n,r){return p(),u("section",null,[t("h1",null,i(r.experience.name),1),t("img",{src:`${n.publicPath}images/${r.experience.image}`,alt:r.experience.name},null,8,l),t("p",null,i(r.experience.description),1)])}var g=a(o,[["render",d]]);export{g as default};
