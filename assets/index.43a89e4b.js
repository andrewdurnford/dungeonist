import{j as A,s as q,L as C,c as j,a as F,u as _,o as P,r as $,g as h,b as R,d as L,e as O,W,f as H,h as w,O as G,B as K,R as J,i as b,k as X,l as Y,A as Z,I as ee,m as re,n as ne,p as te,F as ie}from"./vendor.f330e48d.js";const ae=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};ae();const r=A.exports.jsx,s=A.exports.jsxs,y=A.exports.Fragment,oe=q.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function f({children:e}){return r(oe,{children:e})}function se({message:e}){return s("main",{children:[r("h1",{children:"404"}),r(f,{children:e||"Not Found"}),r(C,{to:"/",children:"Home"})]})}const ce=q.button`
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
`;function x({as:e="button",type:n="button",variant:i="primary",loading:a=!1,disabled:t=!1,children:o,...c}){return r(ce,{as:e,type:e==="button"?n:void 0,$variant:i,disabled:a||t,...c,children:o&&a?r("div",{children:"Loading..."}):o})}const le=j().shape({email:F().email("Must be a valid email").required("Email is required"),password:F().required("Password is required")});function de({onSubmit:e}){const{register:n,handleSubmit:i,formState:{errors:a,isSubmitting:t}}=_({mode:"onTouched",resolver:P(le)});return r("form",{onSubmit:i(e),children:s("div",{children:[s("div",{children:[r("label",{htmlFor:"email",children:"Email"}),a?.email&&r("span",{children:a.email.message}),r("input",{type:"text",id:"email",...n("email")})]}),s("div",{children:[r("label",{htmlFor:"password",children:"Password"}),a?.password&&r("span",{children:a.password.message}),r("input",{type:"text",id:"password",...n("password")})]}),r(x,{type:"submit",loading:t,children:"Log in"})]})})}const T=$.exports.createContext({});function ue({children:e}){const[n,i]=$.exports.useState(null),[a,t]=$.exports.useState(localStorage.getItem("token"));function o({token:d,user:g}){i(g),t(d),localStorage.setItem("token",d)}function c(){i(null),t(null),localStorage.removeItem("token")}const l=$.exports.useMemo(()=>({user:n,token:a,isLoggedIn:!!a,login:o,logout:c}),[n,a,o,c]);return r(T.Provider,{value:l,children:e})}function U(){return $.exports.useContext(T)}const v={},B=h`
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
  classes {
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
    `,he=h`
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
    `,me=h`
    mutation CharacterCreate($input: CharacterCreateInput!) {
  characterCreate(input: $input) {
    id
    name
  }
}
    `;function pe(e){const n={...v,...e};return R(me,n)}const ge=h`
    mutation CharacterUpdate($input: CharacterUpdateInput!) {
  characterUpdate(input: $input) {
    ...CharacterDetails
  }
}
    ${B}`;function M(e){const n={...v,...e};return R(ge,n)}const fe=h`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function be(e){const n={...v,...e};return R(fe,n)}const ve=h`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function Ce(e){const n={...v,...e};return R(ve,n)}const ye=h`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function xe(e){const n={...v,...e};return L(ye,n)}const ke=h`
    query Character($id: ID!) {
  character(id: $id) {
    ...CharacterDetails
  }
}
    ${B}`;function S(e){const n={...v,...e};return L(ke,n)}const $e=h`
    query Characters {
  characters {
    id
    name
  }
}
    `;function we(e){const n={...v,...e};return L($e,n)}h`
    query Class($id: ID!) {
  class(id: $id) {
    id
    name
  }
}
    `;const Se=h`
    query Classes {
  classes {
    id
    name
  }
}
    `;function Ie(e){const n={...v,...e};return L(Se,n)}const Le=h`
    query Race($id: ID!) {
  race(id: $id) {
    ...RaceDetails
  }
}
    ${he}`;function Ee(e){const n={...v,...e};return L(Le,n)}const Fe=h`
    query Races {
  races {
    id
    name
  }
}
    `;function _e(e){const n={...v,...e};return L(Fe,n)}h`
    query User {
  user {
    id
    email
  }
}
    `;function Re(){const e=O(),{login:n}=U(),[i,{error:a}]=be({onError:t=>console.error(t),onCompleted:({login:t})=>{n(t),e("/")},update(t,{data:o}){t.modify({fields:{user(){return o?.login.user}}})}});return n||console.error(`${n}`),s("main",{children:[r("h1",{children:"Log in"}),a&&s(f,{children:["Error: ",a.message]}),r(de,{onSubmit:({email:t,password:o})=>i({variables:{input:{email:t,password:o}}})})]})}const De=j().shape({email:F().email("Must be a valid email").required("Email is required"),password:F().required("Password is required")});function Ae({onSubmit:e}){const{register:n,handleSubmit:i,formState:{errors:a,isSubmitting:t}}=_({mode:"onTouched",resolver:P(De)});return r("form",{onSubmit:i(e),children:s("div",{children:[s("div",{children:[r("label",{htmlFor:"email",children:"Email"}),a?.email&&r("span",{children:a.email.message}),r("input",{type:"text",id:"email",...n("email")})]}),s("div",{children:[r("label",{htmlFor:"password",children:"Password"}),a?.password&&r("span",{children:a.password.message}),r("input",{type:"text",id:"password",...n("password")})]}),r(x,{type:"submit",loading:t,children:"Log in"})]})})}function qe(){const e=O(),{login:n}=U(),[i,{error:a}]=Ce({onError:t=>console.error(t),onCompleted:({signup:t})=>{n(t),e("/")},update(t,{data:o}){t.modify({fields:{user(){return o?.signup.user}}})}});return s("main",{children:[r("h1",{children:"Sign up"}),a&&s(f,{children:["Error: ",a.message]}),r(Ae,{onSubmit:({email:t,password:o})=>i({variables:{input:{email:t,password:o}}})})]})}function je(){return r("main",{children:r("p",{children:"Loading..."})})}const Pe=W`
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
`,N={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},Ue={sm:640,md:768,lg:1024,xl:1280},Oe={colors:N,breakpoints:Ue};function Te(e){if(e!=="none")return`${e}px`}function m(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}q.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Te(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>m(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${m(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${m(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>m(e)};
  margin-right: ${({$mr:e})=>m(e)};
  margin-bottom: ${({$mb:e})=>m(e)};
  margin-left: ${({$ml:e})=>m(e)};
  /* padding */
  padding: ${({$p:e})=>m(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${m(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${m(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>m(e)};
  padding-right: ${({$pr:e})=>m(e)};
  padding-bottom: ${({$pb:e})=>m(e)};
  padding-left: ${({$pl:e})=>m(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?N[e]:void 0};
`;function Be(){const{data:e,loading:n,error:i}=we(),[a,{error:t}]=pe({onError:o=>console.error(o),update(o,{data:c}){o.modify({fields:{characters(l=[]){const d=o.writeFragment({data:c?.characterCreate,fragment:h`
                fragment NewCharacter on Character {
                  id
                  name
                }
              `});return[...l,d]}}})}});return n?r(je,{}):i||!e?s(f,{children:["Error: ",i&&i.message]}):s("main",{children:[r("h1",{children:"Characters"}),t&&s(f,{children:["Error: ",t?.message]}),!1,r("ul",{children:e.characters.map(({id:o,name:c})=>r("li",{children:r(C,{to:`/characters/${o}/edit`,children:c})},o))})]})}const Me=j().shape({name:F().required(),level:H().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20").required()});function Ne({defaultValues:e,onSubmit:n}){const{data:i,loading:a,error:t}=xe();if(t)return r(f,{children:t.message});const{alignments:o}=i||{},{register:c,reset:l,handleSubmit:d,formState:{errors:g,isDirty:u,isSubmitting:E}}=_({mode:"onTouched",defaultValues:e,resolver:P(Me)});return s("form",{onSubmit:d(n),children:[s("div",{children:[r(x,{type:"submit",disabled:!u,loading:E,children:"Save"})," ",r(x,{variant:"secondary",disabled:!u,onClick:()=>l(e),children:"Reset"})]}),s("div",{children:[r("label",{htmlFor:"name",children:"Name"}),g?.name&&r("span",{children:g.name.message}),r("input",{type:"text",id:"name",...c("name")})]}),s("div",{children:[r("label",{htmlFor:"level",children:"Level"}),g?.level&&r("span",{children:g.level.message}),r("input",{type:"number",id:"level",...c("level",{valueAsNumber:!0})})]}),s("div",{children:[r("label",{htmlFor:"background",children:"Background"}),r("input",{type:"text",id:"background",...c("background")})]}),s("div",{children:[r("label",{htmlFor:"alignmentId",children:"Alignment"}),a?r("div",{children:"Loading..."}):s("select",{id:"alignmentId",...c("alignmentId"),children:[r("option",{value:"",disabled:!0}),o?.map(({id:I,name:p})=>r("option",{value:I,children:p},I))]})]}),s("div",{children:[r("label",{htmlFor:"traits",children:"Traits"}),r("textarea",{id:"traits",rows:4,...c("traits")})]}),s("div",{children:[r("label",{htmlFor:"ideals",children:"Ideals"}),r("textarea",{id:"ideals",rows:4,...c("ideals")})]}),s("div",{children:[r("label",{htmlFor:"bonds",children:"Bonds"}),r("textarea",{id:"bonds",rows:4,...c("bonds")})]}),s("div",{children:[r("label",{htmlFor:"flaws",children:"Flaws"}),r("textarea",{id:"flaws",rows:4,...c("flaws")})]})]})}function ze(){const{characterId:e}=w(),{data:n,loading:i,error:a}=S({variables:{id:e},skip:!e}),[t,{error:o}]=M({onError:d=>console.error(d.message)});if(a)return null;const{character:c}=n||{},l={name:c?.name!=="Untitled"?c?.name:"",level:c?.level??1,alignmentId:c?.alignment?.id??"",background:c?.background??"",traits:c?.traits??"",ideals:c?.ideals??"",bonds:c?.bonds??"",flaws:c?.flaws??""};return s("main",{children:[r("h2",{children:"Character Details"}),i?r("div",{children:"Loading..."}):s(y,{children:[o&&r(f,{children:o.message}),r(Ne,{defaultValues:l,onSubmit:d=>t({variables:{input:{id:e,...d}}})})]})]})}function Qe({raceId:e}){const{data:n,loading:i,error:a}=Ee({variables:{id:e},skip:!e});if(!e)return null;if(a)return r(f,{children:a.message});const{race:t}=n||{};return s("div",{children:[r("h3",{children:"Ability Score Improvements"}),r("ul",{children:i?r("li",{children:"Loading..."}):t?.abilityScoreIncreases.map(o=>r("li",{children:`${o.ability.name} ${o.increase>=0?"+":"-"}${o.increase}
          `},o.id))}),r("h3",{children:"Details"}),r("hr",{}),r("p",{children:i?"Loading...":t?.description}),r("label",{children:r("strong",{children:"Age"})}),r("p",{children:i?"Loading...":t?.age??""}),r("label",{children:r("strong",{children:"Alignment"})}),r("p",{children:i?"Loading...":t?.alignment??""}),r("label",{children:r("strong",{children:"Size"})}),r("p",{children:i?"Loading...":t?.size??""}),r("label",{children:r("strong",{children:"Speed"})}),r("p",{children:i?"Loading...":t?.speed??""}),t?.traits&&t.traits.length>0&&s(y,{children:[r("h3",{children:"Traits"}),r("hr",{}),t?.traits.map(({id:o,name:c,description:l})=>s("div",{children:[r("label",{children:r("strong",{children:c})}),r("p",{children:l})]},o))]})]})}function Ve({defaultValues:e,onSubmit:n,onChange:i}){const{data:a,loading:t,error:o}=_e();if(o)return r(f,{children:o.message});const{races:c}=a||{},{register:l,reset:d,handleSubmit:g,formState:{isDirty:u,isSubmitting:E}}=_({mode:"onTouched",defaultValues:e}),I=l("raceId");return s("form",{onSubmit:g(n),children:[s("div",{children:[r(x,{type:"submit",disabled:!u,loading:E,children:"Save"})," ",r(x,{variant:"secondary",disabled:!u,onClick:()=>{d(e),i(e.raceId??"")},children:"Reset"})]}),s("div",{children:[r("label",{htmlFor:"raceId",children:"Race"}),t?r("div",{children:"Loading..."}):s("select",{id:"raceId",...l("raceId"),onChange:p=>{i(p.target.value),I.onChange(p)},children:[r("option",{value:"",disabled:!0}),c?.map(({id:p,name:D})=>r("option",{value:p,children:D},p))]})]})]})}function We(){const[e,n]=$.exports.useState(""),{characterId:i}=w(),{data:a,loading:t,error:o}=S({variables:{id:i},skip:!i,onCompleted:({character:u})=>u?.race&&n(u.race.id)}),[c,{error:l}]=M({onError:u=>console.error(u.message)});if($.exports.useEffect(()=>{n(a?.character?.race?.id??"")},[a]),o)return null;const{character:d}=a||{},g={raceId:d?.race?.id??""};return s("main",{children:[r("h2",{children:"Character Race"}),t?r("div",{children:"Loading..."}):s(y,{children:[l&&r(f,{children:l.message}),r(Ve,{defaultValues:g,onChange:u=>{u!==""&&n(u)},onSubmit:u=>{c({variables:{input:{id:i,...u}}})}}),r(Qe,{raceId:e})]})]})}function He({defaultValues:e,onSubmit:n,onChange:i}){const{data:a,loading:t,error:o}=Ie();if(o)return r(f,{children:o.message});const{classes:c}=a||{},{register:l,reset:d,handleSubmit:g,formState:{isDirty:u,isSubmitting:E}}=_({mode:"onTouched",defaultValues:e}),I=l("classId");return s("form",{onSubmit:g(n),children:[s("div",{children:[r(x,{type:"submit",disabled:!u,loading:E,children:"Save"})," ",r(x,{variant:"secondary",disabled:!u,onClick:()=>{d(e),i(e.classId??"")},children:"Reset"})]}),s("div",{children:[r("label",{htmlFor:"classId",children:"Class"}),t?r("div",{children:"Loading..."}):s("select",{id:"classId",...l("classId"),onChange:p=>{i(p.target.value),I.onChange(p)},children:[r("option",{value:"",disabled:!0}),c?.map(({id:p,name:D})=>r("option",{value:p,children:D},p))]})]})]})}function Ge(){const{characterId:e}=w(),{data:n,loading:i,error:a}=S({variables:{id:e},skip:!e});if(a)return null;const{character:t}=n||{},o={classId:t?.classes[0]?.id??""};return s("main",{children:[r("h2",{children:"Character Class"}),i?r("div",{children:"Loading..."}):r(y,{children:r(He,{defaultValues:o,onChange:c=>{console.log(c)},onSubmit:c=>{console.log(c)}})})]})}function Ke(){const{characterId:e}=w(),{data:n,loading:i,error:a}=S({variables:{id:e},skip:!e});return a?null:s("main",{children:[r("h2",{children:"Character Abilities"}),i?r("div",{children:"Loading..."}):r("div",{children:"Abilities"})]})}function Je(){const{characterId:e}=w(),{data:n,loading:i,error:a}=S({variables:{id:e},skip:!e});return a?null:s("main",{children:[r("h2",{children:"Character Equipment"}),i?r("div",{children:"Loading..."}):r("div",{children:"Equipment"})]})}function Xe(){const{characterId:e}=w(),{data:n,loading:i}=S({variables:{id:e},skip:!e}),{character:a}=n||{};return s(y,{children:[s("nav",{children:[r(C,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:i?"Loading...":a?.name})]}),r("h1",{children:i?"Loading...":a?.name})]})}function Ye(){return s("nav",{children:[r(C,{to:"./",children:"Details"})," ",r(C,{to:"race",children:"Race"})," ",r(C,{to:"class",children:"Class"})," ",r(C,{to:"abilities",children:"Abilities"})," ",r(C,{to:"equipment",children:"Equipment"})]})}function Ze(){const{characterId:e}=w(),{data:n,error:i}=S({variables:{id:e},skip:!e});return i?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):s(y,{children:[s("header",{children:[r(Xe,{}),r(Ye,{})]}),r(G,{})]})}function er(){const{isLoggedIn:e}=U();return r(K,{basename:"/dungeonist/",children:s(J,{children:[e?s(y,{children:[r(b,{path:"/characters",element:r(Be,{})}),s(b,{path:"/characters/:characterId/edit",element:r(Ze,{}),children:[r(b,{index:!0,element:r(ze,{})}),r(b,{path:"race",element:r(We,{})}),r(b,{path:"class",element:r(Ge,{})}),r(b,{path:"abilities",element:r(Ke,{})}),r(b,{path:"equipment",element:r(Je,{})})]})]}):s(y,{children:[r(b,{path:"/signup",element:r(qe,{})}),r(b,{path:"/login",element:r(Re,{})})]}),r(b,{path:"*",element:r(se,{})})]})})}const rr="modulepreload",z={},nr="/dungeonist/",k=function(n,i){return!i||i.length===0?n():Promise.all(i.map(a=>{if(a=`${nr}${a}`,a in z)return;z[a]=!0;const t=a.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":rr,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",d)})})).then(()=>n())},Q={"../mocks/Alignments.ts":()=>k(()=>import("./Alignments.f677eab0.js"),["assets/Alignments.f677eab0.js","assets/vendor.f330e48d.js"]),"../mocks/Character.ts":()=>k(()=>import("./Character.bdf9b552.js"),["assets/Character.bdf9b552.js","assets/vendor.f330e48d.js"]),"../mocks/Characters.ts":()=>k(()=>import("./Characters.b2f271dc.js"),["assets/Characters.b2f271dc.js","assets/vendor.f330e48d.js"]),"../mocks/Class.ts":()=>k(()=>import("./Class.e9a571f9.js"),["assets/Class.e9a571f9.js","assets/vendor.f330e48d.js"]),"../mocks/Classes.ts":()=>k(()=>import("./Classes.7c8f6276.js"),["assets/Classes.7c8f6276.js","assets/vendor.f330e48d.js"]),"../mocks/Race.ts":()=>k(()=>import("./Race.29463c0c.js"),["assets/Race.29463c0c.js","assets/vendor.f330e48d.js"]),"../mocks/Races.ts":()=>k(()=>import("./Races.1bac8271.js"),["assets/Races.1bac8271.js","assets/vendor.f330e48d.js"]),"../mocks/User.ts":()=>k(()=>import("./User.9259c329.js"),["assets/User.9259c329.js","assets/vendor.f330e48d.js"])};let V=[];for(const e in Q){const n=await Promise.resolve(Q[e]().then(i=>i.handlers));V.push(...n)}const tr=X({uri:"https://example.com"}),ir=Y((e,{headers:n})=>{const i=localStorage.getItem("token");return{headers:{...n,...i&&{authorization:`Bearer ${i}`}}}}),ar=new Z({link:ir.concat(tr),cache:new ee});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),re(...V).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});ne.render(r(te,{client:ar,children:r(ue,{children:s(ie,{theme:Oe,children:[r(Pe,{}),r(er,{})]})})}),document.getElementById("root"));
