import{i as a,j as p,k as n}from"./model-de6b70d1.js";import{f as y}from"./pages-e50f7e35.js";import{e as f}from"./index-c810d7ef.js";const g=!a(),i=({params:t,url:r})=>{const e=p(t.type),s=n(e),o=y(r.pathname);if(!e||!o)throw f(404,`Type ${t.type} not found.`);return{type:e,usages:s,page:o}},d=Object.freeze(Object.defineProperty({__proto__:null,prerender:g,load:i},Symbol.toStringTag,{value:"Module"}));export{d as _,i as l,g as p};