import{r as h,b as d,o as a,d as m,w as p,e as _,f as o,u as v,i as y,t as g,n as f,p as k,q as x,h as S,k as $,s as w,c as n,v as b,F as B,l as C,m as V,a as D}from"./index-07261a60.js";const F={alt:"",class:"main__search-list-item-img"},N={class:"main__search-list-item-title"},T={__name:"SearchContent",props:{item:Object},setup(e){return(t,s)=>{const r=h("router-link"),i=d("lazy");return a(),m(r,{to:e.item.media_type+"/"+e.item.id,class:"main__search-list-item"},{default:p(()=>[_(o("img",F,null,512),[[i,v(y)+e.item.backdrop_path]]),o("h2",N,g(e.item.name||e.item.title),1)]),_:1},8,["to"])}}},U=f("search",{state:()=>({url:"https://api.themoviedb.org/3",result:null,error:""}),actions:{async searching(e){try{let t=await k.get(`${this.url}/search/multi?api_key=${x}&language=ru-RU&query=${e}`);this.result=t.data.results}catch(t){console.error("Ошибка при поиске данных "+t)}}}}),q={class:"main__search"},z={class:"container"},j={key:0,class:"main__search-list"},A={__name:"Search",setup(e){const t=U(),s=S(""),r=$(()=>t.result);let i=null;return w(s,l=>{clearTimeout(i),i=setTimeout(()=>{t.searching(l)},500)}),(l,u)=>(a(),n("div",q,[o("div",z,[_(o("input",{type:"text",class:"main__search-input",placeholder:"Найти фильм, сериал...","onUpdate:modelValue":u[0]||(u[0]=c=>s.value=c)},null,512),[[b,s.value]]),r.value?(a(),n("div",j,[(a(!0),n(B,null,C(r.value,c=>(a(),m(T,{key:c.id,item:c},null,8,["item"]))),128))])):V("",!0)])]))}},E={class:"main"},L={__name:"SearchPage",setup(e){return(t,s)=>(a(),n("main",E,[D(A)]))}};export{L as default};
