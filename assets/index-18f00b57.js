import{writeMsgToImage as p,readMsgFromImage as i}from"./lsb-877e87a5.js";import"./index-0e062450.js";import"./index-7a388a79.js";import"./zip-4713de7c.js";import"./mersenne-twister-7ec0138d.js";import"./utf_8-ea3fe091.js";const f=(t,o,{message:r})=>r!=null&&r.trim()?{data:p(t,r,o),payload:r}:{data:t},l=(t,o)=>{const r=i(t,o);return{data:t,payload:r}};export{l as decrypt,f as encrypt};