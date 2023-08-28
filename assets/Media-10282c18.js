import{k as u,r as v,b as $,o as a,c as m,e as h,u as y,i as g,f as s,t as l,a as d,F as k,l as b,d as x,w,n as M,p as S,q as B,z as I,A as R,B as T}from"./index-07261a60.js";const z={class:"main__intro"},D={alt:"",class:"main__intro-poster"},F={class:"main__intro-block"},A={class:"main__intro-block-left"},L={class:"main__intro-block-left-title"},U={class:"main__intro-block-left-text"},Y={class:"main__intro-block-left-descr"},j={class:"main__intro-block-right"},C={alt:"",class:"main__intro-block-right-img"},N={class:"main__intro-actors"},O=s("h2",{class:"main__intro-actors-title"},"В главных ролях",-1),V={__name:"Intro",props:{type:String,item:Object},setup(t){const e=t,n=u(()=>new Date(e.item.release_date).getFullYear()||new Date(e.item.first_air_date).getFullYear()),r=u(()=>e.item.genres.reduce((i,_)=>i+", "+_.name,"")),o=u(()=>{if(e.type=="tv"&&e.item.episode_run_time.length==0)return"";let i=e.type=="movie"?e.item.runtime:e.type=="tv"?e.item.episode_run_time[0]:"",_=Math.floor(i/60),c=i%60;return _==0?`${c}m`:`${_}h ${c}m`});return(i,_)=>{const c=v("Trailer"),f=v("Actors"),p=$("lazy");return a(),m("div",z,[h(s("img",D,null,512),[[p,y(g)+t.item.poster_path]]),s("div",F,[s("div",A,[s("h1",L,l(t.item.title||t.item.name),1),s("p",U,l(t.item.overview||"Нет описания"),1),s("p",Y,[s("span",null,l(n.value)+l(r.value),1),s("span",null,l(o.value),1)]),d(c)]),s("div",j,[h(s("img",C,null,512),[[p,y(g)+t.item.backdrop_path]])]),s("div",N,[O,d(f,{type:t.type,id:t.item.id,count:"6"},null,8,["type","id"])])])])}}};const q={class:"main__info"},E={class:"main__info-item-name"},G={class:"main__info-item-text"},K={__name:"Info",props:{item:Object},setup(t){const e=t,n=u(()=>[{name:"Бюджет",text:e.item.budget?"$"+e.item.budget:"Неизвестно"},{name:"Сборы",text:e.item.revenue?"$"+e.item.revenue:"Неизвестно"},{name:"Статус",text:e.item.status},{name:"Исходное название",text:e.item.original_title||e.item.original_name}]);return(r,o)=>(a(),m("div",q,[(a(!0),m(k,null,b(n.value,i=>(a(),m("div",{class:"main__info-item",key:i.name},[s("span",E,l(i.name),1),s("span",G,l(i.text),1)]))),128))]))}},H={class:"main__rec"},J={class:"container"},P=s("h2",{class:"main__rec-title"},"Рекомендации",-1),Q={class:"main__rec-list"},W={alt:"",class:"main__rec-list-item-img"},X={class:"main__rec-list-item-title"},Z={__name:"Rec",props:{rec:Array,type:String},setup(t){return(e,n)=>{const r=v("router-link"),o=$("lazy");return a(),m("div",H,[s("div",J,[P,s("div",Q,[(a(!0),m(k,null,b(t.rec,i=>(a(),x(r,{key:i.id,to:`${i.id}`,class:"main__rec-list-item"},{default:w(()=>[h(s("img",W,null,512),[[o,y(g)+i.backdrop_path]]),s("h2",X,l(i.name||i.title),1)]),_:2},1032,["to"]))),128))])])])}}},ee=M("rec",{state:()=>({url:"https://api.themoviedb.org/3/",recomMovie:null,recomTv:null}),actions:{async getRecom({type:t,id:e}){try{let n=await S.get(`${this.url}${t}/${e}/recommendations?api_key=${B}&language=ru-RU`);t=="movie"?this.recomMovie=n.data.results:t=="tv"&&(this.recomTv=n.data.results)}catch(n){console.error("Ошибка произошла при получении рекомендаций"+n)}}}}),te={key:0,class:"main__media"},se={__name:"Media",props:{type:String},setup(t){const e=t,n=I(),r=ee(),o=R();o.getItemId({type:e.type,id:n.params.id}),r.getRecom({type:e.type,id:n.params.id});const i=u(()=>e.type=="movie"?o.movie:e.type=="tv"?o.tv:""),_=u(()=>{let c=e.type=="movie"?r.recomMovie:e.type=="tv"?r.recomTv:"";if(c)return c.slice(0,4)});return T(()=>{o.movie=o.tv=null}),(c,f)=>{const p=v("Loader");return i.value?(a(),m("div",te,[d(V,{type:t.type,item:i.value},null,8,["type","item"]),d(K,{item:i.value},null,8,["item"]),d(Z,{type:t.type,rec:_.value},null,8,["type","rec"])])):(a(),x(p,{key:1}))}}};export{se as _};
