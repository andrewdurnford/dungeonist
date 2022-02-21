import{j as D,s as _,L as v,c as q,a as S,u as I,o as j,r as x,g as m,b as R,d as F,e as U,W as V,f as H,h as k,O as G,B as K,R as J,i as g,k as X,l as Y,A as Z,I as ee,m as re,n as ne,p as te,F as ie}from"./vendor.f330e48d.js";const ae=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};ae();const r=D.exports.jsx,s=D.exports.jsxs,C=D.exports.Fragment,oe=_.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function f({children:e}){return r(oe,{children:e})}function se({message:e}){return s("main",{children:[r("h1",{children:"404"}),r(f,{children:e||"Not Found"}),r(v,{to:"/",children:"Home"})]})}const ce=_.button`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  color: ${({$variant:e,theme:n})=>e==="primary"?n.colors.white:n.colors.black};
  background: ${({$variant:e,theme:n})=>e==="primary"?n.colors.blue400:"none"};
  border: 1px solid
    ${({$variant:e,theme:n})=>e==="primary"?n.colors.blue600:n.colors.black};

  &:hover,
  &:focus {
    background: ${({$variant:e,theme:n})=>e==="primary"?n.colors.blue500:n.colors.gray200};
  }
`;function $({as:e="button",type:n="button",variant:i="primary",loading:a=!1,disabled:t=!1,children:o,...c}){return r(ce,{as:e,type:e==="button"?n:void 0,$variant:i,disabled:a||t,...c,children:o&&a?r("div",{children:"Loading..."}):o})}const le=q().shape({email:S().email("Must be a valid email").required("Email is required"),password:S().required("Password is required")});function de({onSubmit:e}){const{register:n,handleSubmit:i,formState:{errors:a,isSubmitting:t}}=I({mode:"onTouched",resolver:j(le)});return r("form",{onSubmit:i(e),children:s("div",{children:[s("div",{children:[r("label",{htmlFor:"email",children:"Email"}),a?.email&&r("span",{children:a.email.message}),r("input",{type:"text",id:"email",...n("email")})]}),s("div",{children:[r("label",{htmlFor:"password",children:"Password"}),a?.password&&r("span",{children:a.password.message}),r("input",{type:"text",id:"password",...n("password")})]}),r($,{type:"submit",loading:t,children:"Log in"})]})})}const O=x.exports.createContext({});function ue({children:e}){const[n,i]=x.exports.useState(null),[a,t]=x.exports.useState(localStorage.getItem("token"));function o({token:d,user:p}){i(p),t(d),localStorage.setItem("token",d)}function c(){i(null),t(null),localStorage.removeItem("token")}const l=x.exports.useMemo(()=>({user:n,token:a,isLoggedIn:!!a,login:o,logout:c}),[n,a,o,c]);return r(O.Provider,{value:l,children:e})}function P(){return x.exports.useContext(O)}const b={},B=m`
    fragment CharacterDetails on Character {
  id
  name
  level
  experience
  inspiration
  background
  alignment {
    id
    name
  }
  traits
  ideals
  bonds
  flaws
  race {
    id
    name
  }
  abilities {
    id
    name
    score
    modifier
  }
  skills {
    id
    name
    modifier
    isProficient
    ability {
      id
      name
    }
  }
}
    `,he=m`
    fragment RaceDetails on Race {
  id
  name
  description
  age
  alignment
  size
  speed
  languages
  traits {
    id
    name
    description
  }
  abilityScoreIncreases {
    id
    ability {
      id
      name
    }
    increase
  }
}
    `,me=m`
    mutation CharacterCreate($input: CharacterCreateInput!) {
  characterCreate(input: $input) {
    id
    name
  }
}
    `;function pe(e){const n={...b,...e};return R(me,n)}const ge=m`
    mutation CharacterUpdate($input: CharacterUpdateInput!) {
  characterUpdate(input: $input) {
    ...CharacterDetails
  }
}
    ${B}`;function M(e){const n={...b,...e};return R(ge,n)}const fe=m`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function be(e){const n={...b,...e};return R(fe,n)}const ve=m`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function ye(e){const n={...b,...e};return R(ve,n)}const xe=m`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function ke(e){const n={...b,...e};return F(xe,n)}const Ce=m`
    query Character($id: ID!) {
  character(id: $id) {
    ...CharacterDetails
  }
}
    ${B}`;function w(e){const n={...b,...e};return F(Ce,n)}const we=m`
    query Characters {
  characters {
    id
    name
  }
}
    `;function $e(e){const n={...b,...e};return F(we,n)}const Le=m`
    query Race($id: ID!) {
  race(id: $id) {
    ...RaceDetails
  }
}
    ${he}`;function Se(e){const n={...b,...e};return F(Le,n)}const Fe=m`
    query Races {
  races {
    id
    name
  }
}
    `;function Ee(e){const n={...b,...e};return F(Fe,n)}m`
    query User {
  user {
    id
    email
  }
}
    `;function Ie(){const e=U(),{login:n}=P(),[i,{error:a}]=be({onError:t=>console.error(t),onCompleted:({login:t})=>{n(t),e("/")},update(t,{data:o}){t.modify({fields:{user(){return o?.login.user}}})}});return s("main",{children:[r("h1",{children:"Log in"}),a&&s(f,{children:["Error: ",a.message]}),r(de,{onSubmit:({email:t,password:o})=>i({variables:{input:{email:t,password:o}}})})]})}const Re=q().shape({email:S().email("Must be a valid email").required("Email is required"),password:S().required("Password is required")});function Ae({onSubmit:e}){const{register:n,handleSubmit:i,formState:{errors:a,isSubmitting:t}}=I({mode:"onTouched",resolver:j(Re)});return r("form",{onSubmit:i(e),children:s("div",{children:[s("div",{children:[r("label",{htmlFor:"email",children:"Email"}),a?.email&&r("span",{children:a.email.message}),r("input",{type:"text",id:"email",...n("email")})]}),s("div",{children:[r("label",{htmlFor:"password",children:"Password"}),a?.password&&r("span",{children:a.password.message}),r("input",{type:"text",id:"password",...n("password")})]}),r($,{type:"submit",loading:t,children:"Log in"})]})})}function De(){const e=U(),{login:n}=P(),[i,{error:a}]=ye({onError:t=>console.error(t),onCompleted:({signup:t})=>{n(t),e("/")},update(t,{data:o}){t.modify({fields:{user(){return o?.signup.user}}})}});return s("main",{children:[r("h1",{children:"Sign up"}),a&&s(f,{children:["Error: ",a.message]}),r(Ae,{onSubmit:({email:t,password:o})=>i({variables:{input:{email:t,password:o}}})})]})}function _e(){return r("main",{children:r("p",{children:"Loading..."})})}const qe=V`
  *, *:before, *:after {
    box-sizing: border-box;
    /* padding: 0; */
    /* margin: 0; */
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
  }

  header {
    padding: 1rem 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
  }

  main {
    display: flex;
    flex-direction: column;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem 2rem;
  }

  label {
    display: inline-block;
    margin-top: 1rem;
    width: 100%;
  }

  input[type=text],
  input[type=number] {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.black};
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }

  select {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid black;
    width: 100%;

    /* Custom arrow */
    color: black;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    appearance: none;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }

  textarea {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.black};
    resize: none;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    text-decoration: inherit;
  }
`,N={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},je={sm:640,md:768,lg:1024,xl:1280},Pe={colors:N,breakpoints:je};function Ue(e){if(e!=="none")return`${e}px`}function h(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}_.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Ue(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>h(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${h(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${h(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>h(e)};
  margin-right: ${({$mr:e})=>h(e)};
  margin-bottom: ${({$mb:e})=>h(e)};
  margin-left: ${({$ml:e})=>h(e)};
  /* padding */
  padding: ${({$p:e})=>h(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${h(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${h(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>h(e)};
  padding-right: ${({$pr:e})=>h(e)};
  padding-bottom: ${({$pb:e})=>h(e)};
  padding-left: ${({$pl:e})=>h(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?N[e]:void 0};
`;function Oe(){const{data:e,loading:n,error:i}=$e(),[a,{error:t}]=pe({onError:o=>console.error(o),update(o,{data:c}){o.modify({fields:{characters(l=[]){const d=o.writeFragment({data:c?.characterCreate,fragment:m`
                fragment NewCharacter on Character {
                  id
                  name
                }
              `});return[...l,d]}}})}});return n?r(_e,{}):i||!e?s(f,{children:["Error: ",i&&i.message]}):s("main",{children:[r("h1",{children:"Characters"}),t&&s(f,{children:["Error: ",t?.message]}),!1,r("ul",{children:e.characters.map(({id:o,name:c})=>r("li",{children:r(v,{to:`/characters/${o}/edit`,children:c})},o))})]})}const Be=q().shape({name:S().required(),level:H().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20").required()});function Me({defaultValues:e,onSubmit:n}){const{data:i,loading:a,error:t}=ke();if(t)return r(f,{children:t.message});const{alignments:o}=i||{},{register:c,reset:l,handleSubmit:d,formState:{errors:p,isDirty:u,isSubmitting:A}}=I({mode:"onTouched",defaultValues:e,resolver:j(Be)});return s("form",{onSubmit:d(n),children:[s("div",{children:[r($,{type:"submit",disabled:!u,loading:A,children:"Save"})," ",r($,{variant:"secondary",disabled:!u,onClick:()=>l(e),children:"Reset"})]}),s("div",{children:[r("label",{htmlFor:"name",children:"Name"}),p?.name&&r("span",{children:p.name.message}),r("input",{type:"text",id:"name",...c("name")})]}),s("div",{children:[r("label",{htmlFor:"level",children:"Level"}),p?.level&&r("span",{children:p.level.message}),r("input",{type:"number",id:"level",...c("level",{valueAsNumber:!0})})]}),s("div",{children:[r("label",{htmlFor:"background",children:"Background"}),r("input",{type:"text",id:"background",...c("background")})]}),s("div",{children:[r("label",{htmlFor:"alignmentId",children:"Alignment"}),a?r("div",{children:"Loading..."}):s("select",{id:"alignmentId",...c("alignmentId"),children:[r("option",{value:"",disabled:!0}),o?.map(({id:E,name:y})=>r("option",{value:E,children:y},E))]})]}),s("div",{children:[r("label",{htmlFor:"traits",children:"Traits"}),r("textarea",{id:"traits",rows:4,...c("traits")})]}),s("div",{children:[r("label",{htmlFor:"ideals",children:"Ideals"}),r("textarea",{id:"ideals",rows:4,...c("ideals")})]}),s("div",{children:[r("label",{htmlFor:"bonds",children:"Bonds"}),r("textarea",{id:"bonds",rows:4,...c("bonds")})]}),s("div",{children:[r("label",{htmlFor:"flaws",children:"Flaws"}),r("textarea",{id:"flaws",rows:4,...c("flaws")})]})]})}function Ne(){const{characterId:e}=k(),{data:n,loading:i,error:a}=w({variables:{id:e},skip:!e}),[t,{error:o}]=M({onError:d=>console.error(d.message)});if(a)return null;const{character:c}=n||{},l={name:c?.name!=="Untitled"?c?.name:"",level:c?.level??1,alignmentId:c?.alignment?.id??"",background:c?.background??"",traits:c?.traits??"",ideals:c?.ideals??"",bonds:c?.bonds??"",flaws:c?.flaws??""};return s("main",{children:[r("h2",{children:"Character Details"}),i?r("div",{children:"Loading..."}):s(C,{children:[o&&r(f,{children:o.message}),r(Me,{defaultValues:l,onSubmit:d=>t({variables:{input:{id:e,...d}}})})]})]})}function Te({raceId:e}){const{data:n,loading:i,error:a}=Se({variables:{id:e},skip:!e});if(!e)return null;if(a)return r(f,{children:a.message});const{race:t}=n||{};return s("div",{children:[r("h3",{children:"Ability Score Improvements"}),r("ul",{children:i?r("li",{children:"Loading..."}):t?.abilityScoreIncreases.map(o=>r("li",{children:`${o.ability.name} ${o.increase>=0?"+":"-"}${o.increase}
          `},o.id))}),r("h3",{children:"Details"}),r("hr",{}),r("p",{children:i?"Loading...":t?.description}),r("label",{children:r("strong",{children:"Age"})}),r("p",{children:i?"Loading...":t?.age??""}),r("label",{children:r("strong",{children:"Alignment"})}),r("p",{children:i?"Loading...":t?.alignment??""}),r("label",{children:r("strong",{children:"Size"})}),r("p",{children:i?"Loading...":t?.size??""}),r("label",{children:r("strong",{children:"Speed"})}),r("p",{children:i?"Loading...":t?.speed??""}),t?.traits&&t.traits.length>0&&s(C,{children:[r("h3",{children:"Traits"}),r("hr",{}),t?.traits.map(({id:o,name:c,description:l})=>s("div",{children:[r("label",{children:r("strong",{children:c})}),r("p",{children:l})]},o))]})]})}function ze({defaultValues:e,onSubmit:n,onChange:i}){const{data:a,loading:t,error:o}=Ee();if(o)return r(f,{children:o.message});const{races:c}=a||{},{register:l,reset:d,handleSubmit:p,formState:{isDirty:u,isSubmitting:A}}=I({mode:"onTouched",defaultValues:e}),E=l("raceId");return s("form",{onSubmit:p(n),children:[s("div",{children:[r($,{type:"submit",disabled:!u,loading:A,children:"Save"})," ",r($,{variant:"secondary",disabled:!u,onClick:()=>{d(e),i(e.raceId??"")},children:"Reset"})]}),s("div",{children:[r("label",{htmlFor:"raceId",children:"Race"}),t?r("div",{children:"Loading..."}):s("select",{id:"raceId",...l("raceId"),onChange:y=>{i(y.target.value),E.onChange(y)},children:[r("option",{value:"",disabled:!0}),c?.map(({id:y,name:W})=>r("option",{value:y,children:W},y))]})]})]})}function Qe(){const[e,n]=x.exports.useState(""),{characterId:i}=k(),{data:a,loading:t,error:o}=w({variables:{id:i},skip:!i,onCompleted:({character:u})=>u?.race&&n(u.race.id)}),[c,{error:l}]=M({onError:u=>console.error(u.message)});if(x.exports.useEffect(()=>{n(a?.character?.race?.id??"")},[a]),o)return null;const{character:d}=a||{},p={raceId:d?.race?.id??""};return s("main",{children:[r("h2",{children:"Character Race"}),t?r("div",{children:"Loading..."}):s(C,{children:[l&&r(f,{children:l.message}),r(ze,{defaultValues:p,onChange:u=>{u!==""&&n(u)},onSubmit:u=>{c({variables:{input:{id:i,...u}}})}}),r(Te,{raceId:e})]})]})}function We(){const{characterId:e}=k(),{data:n,loading:i,error:a}=w({variables:{id:e},skip:!e});return a?null:s("main",{children:[r("h2",{children:"Character Class"}),i?r("div",{children:"Loading..."}):r("div",{children:"Class"})]})}function Ve(){const{characterId:e}=k(),{data:n,loading:i,error:a}=w({variables:{id:e},skip:!e});return a?null:s("main",{children:[r("h2",{children:"Character Abilities"}),i?r("div",{children:"Loading..."}):r("div",{children:"Abilities"})]})}function He(){const{characterId:e}=k(),{data:n,loading:i,error:a}=w({variables:{id:e},skip:!e});return a?null:s("main",{children:[r("h2",{children:"Character Equipment"}),i?r("div",{children:"Loading..."}):r("div",{children:"Equipment"})]})}function Ge(){const{characterId:e}=k(),{data:n,loading:i}=w({variables:{id:e},skip:!e}),{character:a}=n||{};return s(C,{children:[s("nav",{children:[r(v,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:i?"Loading...":a?.name})]}),r("h1",{children:i?"Loading...":a?.name})]})}function Ke(){return s("nav",{children:[r(v,{to:"./",children:"Details"})," ",r(v,{to:"race",children:"Race"})," ",r(v,{to:"class",children:"Class"})," ",r(v,{to:"abilities",children:"Abilities"})," ",r(v,{to:"equipment",children:"Equipment"})]})}function Je(){const{characterId:e}=k(),{data:n,error:i}=w({variables:{id:e},skip:!e});return i?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):s(C,{children:[s("header",{children:[r(Ge,{}),r(Ke,{})]}),r(G,{})]})}function Xe(){const{isLoggedIn:e}=P();return r(K,{basename:"/dungeonist/",children:s(J,{children:[e?s(C,{children:[r(g,{path:"/characters",element:r(Oe,{})}),s(g,{path:"/characters/:characterId/edit",element:r(Je,{}),children:[r(g,{index:!0,element:r(Ne,{})}),r(g,{path:"race",element:r(Qe,{})}),r(g,{path:"class",element:r(We,{})}),r(g,{path:"abilities",element:r(Ve,{})}),r(g,{path:"equipment",element:r(He,{})})]})]}):s(C,{children:[r(g,{path:"/signup",element:r(De,{})}),r(g,{path:"/login",element:r(Ie,{})})]}),r(g,{path:"*",element:r(se,{})})]})})}const Ye="modulepreload",T={},Ze="/dungeonist/",L=function(n,i){return!i||i.length===0?n():Promise.all(i.map(a=>{if(a=`${Ze}${a}`,a in T)return;T[a]=!0;const t=a.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Ye,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",d)})})).then(()=>n())},z={"../mocks/Alignments.ts":()=>L(()=>import("./Alignments.f677eab0.js"),["assets/Alignments.f677eab0.js","assets/vendor.f330e48d.js"]),"../mocks/Character.ts":()=>L(()=>import("./Character.d506338b.js"),["assets/Character.d506338b.js","assets/vendor.f330e48d.js"]),"../mocks/Characters.ts":()=>L(()=>import("./Characters.b2f271dc.js"),["assets/Characters.b2f271dc.js","assets/vendor.f330e48d.js"]),"../mocks/Race.ts":()=>L(()=>import("./Race.29463c0c.js"),["assets/Race.29463c0c.js","assets/vendor.f330e48d.js"]),"../mocks/Races.ts":()=>L(()=>import("./Races.1bac8271.js"),["assets/Races.1bac8271.js","assets/vendor.f330e48d.js"]),"../mocks/User.ts":()=>L(()=>import("./User.9259c329.js"),["assets/User.9259c329.js","assets/vendor.f330e48d.js"])};let Q=[];for(const e in z){const n=await Promise.resolve(z[e]().then(i=>i.handlers));Q.push(...n)}const er=X({uri:"https://example.com"}),rr=Y((e,{headers:n})=>{const i=localStorage.getItem("token");return{headers:{...n,...i&&{authorization:`Bearer ${i}`}}}}),nr=new Z({link:rr.concat(er),cache:new ee});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),re(...Q).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});ne.render(r(te,{client:nr,children:r(ue,{children:s(ie,{theme:Pe,children:[r(qe,{}),r(Xe,{})]})})}),document.getElementById("root"));
