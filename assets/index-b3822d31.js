import{c as M}from"./index-02994050.js";import{e as i}from"./zip-aedfe748.js";import"./index-f6071736.js";const F={0:{0:"A",1:"C",2:"G",3:"T"},1:{0:"A",1:"G",2:"C",3:"T"},2:{0:"C",1:"A",2:"T",3:"G"},3:{0:"C",1:"T",2:"A",3:"G"},4:{0:"G",1:"A",2:"T",3:"C"},5:{0:"G",1:"T",2:"A",3:"C"},6:{0:"T",1:"C",2:"G",3:"A"},7:{0:"T",1:"G",2:"C",3:"A"}},L={0:{A:0,C:1,G:2,T:3},1:{A:0,G:1,C:2,T:3},2:{C:0,A:1,T:2,G:3},3:{C:0,T:1,A:2,G:3},4:{G:0,A:1,T:2,C:3},5:{G:0,T:1,A:2,C:3},6:{T:0,C:1,G:2,A:3},7:{T:0,G:1,C:2,A:3}},v={A:{A:"A",T:"T",C:"C",G:"G"},T:{A:"T",T:"G",C:"A",G:"C"},C:{A:"C",T:"A",C:"G",G:"T"},G:{A:"G",T:"C",C:"T",G:"A"}},$={A:{A:"A",T:"C",C:"T",G:"G"},T:{A:"T",T:"A",C:"G",G:"C"},C:{A:"C",T:"G",C:"A",G:"T"},G:{A:"G",T:"T",C:"C",G:"A"}},b={A:{A:"A",T:"T",C:"C",G:"G"},T:{A:"T",T:"A",C:"G",G:"C"},C:{A:"C",T:"G",C:"A",G:"T"},G:{A:"G",T:"C",C:"T",G:"A"}},c=(r,n)=>[f(r>>6&3,n),f(r>>4&3,n),f(r>>2&3,n),f(r>>0&3,n)],m=(r,n)=>y(r[0],n)<<6|y(r[1],n)<<4|y(r[2],n)<<2|y(r[3],n)<<0,f=(r,n)=>F[n][r],y=(r,n)=>L[n][r],P=(r,n)=>v[r][n],U=(r,n)=>$[r][n],S=(r,n)=>b[r][n],J=({buffer:r,width:n,height:p,name:D},h)=>{const C=new Uint8ClampedArray(r),T=new Uint8ClampedArray(C.length),B={0:P,1:S,2:U},G=t=>3.999999999999999*t*(1-t),x=Array.from({length:4},(t,a)=>M.PBKDF2(h,`key${a}`).toString()),N=Array.from({length:3},(t,a)=>M.PBKDF2(h,`extraKey${a}`).toString());let o=x.map(t=>i(t,!0)),e=N.map(t=>i(t,!0));for(let t=0;t<1e3;t++)o=o.map(G),e=e.map(G);const l=Math.round(e[0]*7),d=[c(Math.round(e[2]*255),Math.round(e[0]*7)),c(Math.round(e[1]*255),Math.round(e[1]*7)),c(Math.round(e[0]*255),Math.round(e[2]*7))];for(let t=0;t<p;t++)for(let a=0;a<n;a++){const A=(t*n+a)*4;o=o.map(G);const u=[c(C[A],l),c(C[A+1],l),c(C[A+2],l)],g=B[Math.round(o[3]*2)];for(let s=0;s<d.length;s++){const E=d[s],_=u[s];u[s]=E.map((R,K)=>g(_[K],R)),d[s]=u[s]}T[A]=m(u[0],Math.round(o[0]*7)),T[A+1]=m(u[1],Math.round(o[1]*7)),T[A+2]=m(u[2],Math.round(o[2]*7)),T[A+3]=C[A+3]}return{data:{name:D,buffer:T.buffer,width:n,height:p}}},X=({buffer:r,width:n,height:p,name:D},h)=>{const C=new Uint8ClampedArray(r),T=new Uint8ClampedArray(C.length),B={0:P,1:S,2:U},G=t=>3.999999999999999*t*(1-t),x=Array.from({length:4},(t,a)=>M.PBKDF2(h,`key${a}`).toString()),N=Array.from({length:3},(t,a)=>M.PBKDF2(h,`extraKey${a}`).toString());let o=x.map(t=>i(t,!0)),e=N.map(t=>i(t,!0));for(let t=0;t<1e3;t++)o=o.map(G),e=e.map(G);const l=Math.round(e[0]*7),d=[c(Math.round(e[2]*255),Math.round(e[0]*7)),c(Math.round(e[1]*255),Math.round(e[1]*7)),c(Math.round(e[0]*255),Math.round(e[2]*7))];for(let t=0;t<p;t++)for(let a=0;a<n;a++){const A=(t*n+a)*4;o=o.map(G);const u=[c(C[A],Math.round(o[0]*7)),c(C[A+1],Math.round(o[1]*7)),c(C[A+2],Math.round(o[2]*7))],g=B[2-Math.round(o[3]*2)];for(let s=0;s<d.length;s++){const E=d[s],_=u[s];d[s]=u[s],u[s]=E.map((R,K)=>g(_[K],R))}T[A]=m(u[0],l),T[A+1]=m(u[1],l),T[A+2]=m(u[2],l),T[A+3]=C[A+3]}return{data:{name:D,buffer:T.buffer,width:n,height:p}}};export{X as decrypt,J as encrypt};
