import{W as le,j as T,s as f,L as $,C as ce,R as de,c as _,a as S,u as q,o as B,r as y,g as p,b as j,d as R,e as M,f as ue,h as C,O as he,B as me,i as pe,k as g,l as ge,m as fe,A as be,I as ve,n as xe,p as $e,q as ye,F as Ce}from"./vendor.0e3099c9.js";const ke=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};ke();const we=le`
  *, *:before, *:after {
    box-sizing: border-box;
    /* padding: 0; */
    /* margin: 0; */
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;
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
`,N={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},Se={sm:640,md:768,lg:1024,xl:1280},Le={colors:N,breakpoints:Se},r=T.exports.jsx,l=T.exports.jsxs,D=T.exports.Fragment;function Ie(e){if(e!=="none")return`${e}px`}function m(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const Ee=f.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Ie(e)};
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
`;function A({direction:e="row",wrap:n="nowrap",justifyContent:t="flex-start",alignItems:s="stretch",alignContent:i="normal",gap:o="none",flexGrow:a=0,flexShrink:c=1,flexBasis:d="auto",alignSelf:h="auto",m:u="none",mx:F="none",my:w="none",mt:v="none",mr:U="none",mb:J="none",ml:X="none",p:Y="none",px:Z="none",py:ee="none",pt:re="none",pr:ne="none",pb:te="none",pl:ie="none",background:ae,children:oe,...se}){return r(Ee,{$flexDirection:e,$flexWrap:n,$justifyContent:t,$alignItems:s,$gap:o,$flexGrow:a,$flexShrink:c,$flexBasis:d,$alignSelf:h,$m:u,$mx:F,$my:w,$mt:v,$mr:U,$mb:J,$ml:X,$p:Y,$px:Z,$py:ee,$pt:re,$pr:ne,$pb:te,$pl:ie,$background:ae,...se,children:oe})}f(A)`
  max-width: 100%;
`;function L({children:e}){return r(A,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function Fe(){return r(L,{children:r("h1",{children:"Hello World"})})}const Re=f.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function b({children:e}){return r(Re,{children:e})}const De=f.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function P({size:e="16",weight:n="400",children:t,...s}){return r(De,{$size:e,$weight:n,...s,children:t})}function Ae({message:e}){return l(L,{children:[r(P,{as:"h1",size:"32",children:"404"}),r(b,{children:e||"Not Found"}),r($,{to:"/",children:"Home"})]})}const _e=f.label`
  display: block;

  ${({$required:e})=>e&&ce`
      ::after {
        content: "*";
      }
    `};
`;function qe({required:e=!1,children:n,...t}){return r(_e,{$required:e,...t,children:n})}const je=f.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,Pe=f.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,ze=f.input`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:n})=>e?n.colors.red500:n.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`,z=de.forwardRef(({name:e,label:n,type:t,error:s,required:i=!1,...o},a)=>l(je,{children:[r(qe,{htmlFor:e,required:i,children:n}),s&&r(Pe,{children:s}),r(ze,{id:e,name:e,type:t,"aria-label":n,"aria-required":i,$error:!!s,ref:a,...o})]})),Ue=f.button`
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
`;function I({as:e="button",type:n="button",variant:t="primary",loading:s=!1,disabled:i=!1,children:o,...a}){return r(Ue,{as:e,type:e==="button"?n:void 0,$variant:t,disabled:s||i,...a,children:o&&s?r("div",{children:"Loading..."}):o})}const Te=_().shape({email:S().email("Must be a valid email").required("Email is required"),password:S().required("Password is required")});function Be({loading:e,onSubmit:n}){const{register:t,handleSubmit:s,formState:{errors:i}}=q({mode:"onTouched",resolver:B(Te)});return r("form",{onSubmit:s(n),children:l(A,{direction:"column",gap:"16",children:[r(z,{type:"text",label:"Email",placeholder:"example@gmail.com",error:i.email?.message,required:!0,...t("email")}),r(z,{type:"password",label:"Password",error:i.password?.message,required:!0,...t("password")}),r(I,{type:"submit",loading:e,children:"Log in"})]})})}const W=y.exports.createContext({});function Oe({children:e}){const[n,t]=y.exports.useState(null),[s,i]=y.exports.useState(localStorage.getItem("token"));function o({token:d,user:h}){t(h),i(d),localStorage.setItem("token",d)}function a(){t(null),i(null),localStorage.removeItem("token")}const c=y.exports.useMemo(()=>({user:n,token:s,isLoggedIn:!!s,login:o,logout:a}),[n,s,o,a]);return r(W.Provider,{value:c,children:e})}function O(){return y.exports.useContext(W)}const x={},H=p`
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
    `,Me=p`
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
    `,Ne=p`
    mutation CharacterCreate($input: CharacterCreateInput!) {
  characterCreate(input: $input) {
    id
    name
  }
}
    `;function We(e){const n={...x,...e};return j(Ne,n)}const He=p`
    mutation CharacterUpdate($input: CharacterUpdateInput!) {
  characterUpdate(input: $input) {
    ...CharacterDetails
  }
}
    ${H}`;function Q(e){const n={...x,...e};return j(He,n)}const Qe=p`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function Ve(e){const n={...x,...e};return j(Qe,n)}const Ge=p`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function Ke(e){const n={...x,...e};return j(Ge,n)}const Je=p`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function Xe(e){const n={...x,...e};return R(Je,n)}const Ye=p`
    query Character($id: ID!) {
  character(id: $id) {
    ...CharacterDetails
  }
}
    ${H}`;function k(e){const n={...x,...e};return R(Ye,n)}const Ze=p`
    query Characters {
  characters {
    id
    name
  }
}
    `;function er(e){const n={...x,...e};return R(Ze,n)}const rr=p`
    query Race($id: ID!) {
  race(id: $id) {
    ...RaceDetails
  }
}
    ${Me}`;function nr(e){const n={...x,...e};return R(rr,n)}const tr=p`
    query Races {
  races {
    id
    name
  }
}
    `;function ir(e){const n={...x,...e};return R(tr,n)}p`
    query User {
  user {
    id
    email
  }
}
    `;function ar(){const e=M(),{login:n}=O(),[t,{loading:s,error:i}]=Ve({onError:o=>console.error(o),onCompleted:({login:o})=>{n(o),e("/")},update(o,{data:a}){o.modify({fields:{user(){return a?.login.user}}})}});return l(L,{children:[r(P,{as:"h1",size:"32",children:"Log in"}),i&&l(b,{children:["Error: ",i.message]}),r(Be,{loading:s,onSubmit:({email:o,password:a})=>t({variables:{input:{email:o,password:a}}})})]})}const or=_().shape({email:S().email("Must be a valid email").required("Email is required"),password:S().required("Password is required")});function sr({loading:e,onSubmit:n}){const{register:t,handleSubmit:s,formState:{errors:i}}=q({mode:"onTouched",resolver:B(or)});return r("form",{onSubmit:s(n),children:l(A,{direction:"column",gap:"16",children:[r(z,{type:"text",label:"Email",placeholder:"example@gmail.com",error:i.email?.message,required:!0,...t("email")}),r(z,{type:"password",label:"Password",error:i.password?.message,required:!0,...t("password")}),r(I,{type:"submit",loading:e,children:"Sign up"})]})})}function lr(){const e=M(),{login:n}=O(),[t,{loading:s,error:i}]=Ke({onError:o=>console.error(o),onCompleted:({signup:o})=>{n(o),e("/")},update(o,{data:a}){o.modify({fields:{user(){return a?.signup.user}}})}});return l(L,{children:[r(P,{as:"h1",size:"32",children:"Sign up"}),i&&l(b,{children:["Error: ",i.message]}),r(sr,{loading:s,onSubmit:({email:o,password:a})=>t({variables:{input:{email:o,password:a}}})})]})}function cr(){return r(L,{children:r("p",{children:"Loading..."})})}_().shape({name:S()});const dr=f.ul`
  margin-left: 2rem;
`;function ur(){const{data:e,loading:n,error:t}=er(),[s,{loading:i,error:o}]=We({onError:a=>console.error(a),update(a,{data:c}){a.modify({fields:{characters(d=[]){const h=a.writeFragment({data:c?.characterCreate,fragment:p`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...d,h]}}})}});return n?r(cr,{}):t||!e?l(b,{children:["Error: ",t&&t.message]}):l(L,{children:[r(P,{as:"h1",size:"32",children:"Characters"}),o&&l(b,{children:["Error: ",o?.message]}),!1,r(dr,{children:e.characters.map(({id:a,name:c})=>r("li",{children:r($,{to:`/characters/${a}/edit`,children:c})},a))})]})}const hr=_().shape({name:S().required(),level:ue().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20").required()});function mr({defaultValues:e,onSubmit:n}){const{data:t,loading:s,error:i}=Xe();if(i)return r(b,{children:i.message});const{alignments:o}=t||{},{register:a,reset:c,handleSubmit:d,formState:{errors:h,isDirty:u,isSubmitting:F}}=q({mode:"onTouched",defaultValues:e,resolver:B(hr)});return l("form",{onSubmit:d(n),children:[l("div",{children:[r(I,{type:"submit",disabled:!u,loading:F,children:"Save"})," ",r(I,{variant:"secondary",disabled:!u,onClick:()=>c(e),children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"name",children:"Name"}),h?.name&&r("span",{children:h.name.message}),r("input",{type:"text",id:"name",...a("name")})]}),l("div",{children:[r("label",{htmlFor:"level",children:"Level"}),h?.level&&r("span",{children:h.level.message}),r("input",{type:"number",id:"level",...a("level",{valueAsNumber:!0})})]}),l("div",{children:[r("label",{htmlFor:"background",children:"Background"}),r("input",{type:"text",id:"background",...a("background")})]}),l("div",{children:[r("label",{htmlFor:"alignmentId",children:"Alignment"}),s?r("div",{children:"Loading..."}):l("select",{id:"alignmentId",...a("alignmentId"),children:[r("option",{value:"",disabled:!0}),o?.map(({id:w,name:v})=>r("option",{value:w,children:v},w))]})]}),l("div",{children:[r("label",{htmlFor:"traits",children:"Traits"}),r("textarea",{id:"traits",rows:4,...a("traits")})]}),l("div",{children:[r("label",{htmlFor:"ideals",children:"Ideals"}),r("textarea",{id:"ideals",rows:4,...a("ideals")})]}),l("div",{children:[r("label",{htmlFor:"bonds",children:"Bonds"}),r("textarea",{id:"bonds",rows:4,...a("bonds")})]}),l("div",{children:[r("label",{htmlFor:"flaws",children:"Flaws"}),r("textarea",{id:"flaws",rows:4,...a("flaws")})]})]})}function pr(){const{characterId:e}=C(),{data:n,loading:t,error:s}=k({variables:{id:e},skip:!e}),[i,{error:o}]=Q({onError:d=>console.error(d.message)});if(s)return null;const{character:a}=n||{},c={name:a?.name!=="Untitled"?a?.name:"",level:a?.level??1,alignmentId:a?.alignment?.id??"",background:a?.background??"",traits:a?.traits??"",ideals:a?.ideals??"",bonds:a?.bonds??"",flaws:a?.flaws??""};return l("main",{children:[r("h2",{children:"Character Details"}),t?r("div",{children:"Loading..."}):l(D,{children:[o&&r(b,{children:o.message}),r(mr,{defaultValues:c,onSubmit:d=>i({variables:{input:{id:e,...d}}})})]})]})}function gr({raceId:e}){const{data:n,loading:t,error:s}=nr({variables:{id:e},skip:!e});if(!e)return null;if(s)return r(b,{children:s.message});const{race:i}=n||{};return l("div",{children:[r("h3",{children:"Ability Score Improvements"}),r("ul",{children:t?r("li",{children:"Loading..."}):i?.abilityScoreIncreases.map(o=>r("li",{children:`${o.ability.name} ${o.increase>=0?"+":"-"}${o.increase}
          `},o.id))}),r("h3",{children:"Details"}),r("hr",{}),r("p",{children:t?"Loading...":i?.description}),r("label",{children:r("strong",{children:"Age"})}),r("p",{children:t?"Loading...":i?.age??""}),r("label",{children:r("strong",{children:"Alignment"})}),r("p",{children:t?"Loading...":i?.alignment??""}),r("label",{children:r("strong",{children:"Size"})}),r("p",{children:t?"Loading...":i?.size??""}),r("label",{children:r("strong",{children:"Speed"})}),r("p",{children:t?"Loading...":i?.speed??""}),i?.traits&&i.traits.length>0&&l(D,{children:[r("h3",{children:"Traits"}),r("hr",{}),i?.traits.map(({id:o,name:a,description:c})=>l("div",{children:[r("label",{children:r("strong",{children:a})}),r("p",{children:c})]},o))]})]})}function fr({defaultValues:e,onSubmit:n,onChange:t}){const{data:s,loading:i,error:o}=ir();if(o)return r(b,{children:o.message});const{races:a}=s||{},{register:c,reset:d,handleSubmit:h,formState:{isDirty:u,isSubmitting:F}}=q({mode:"onTouched",defaultValues:e}),w=c("raceId");return l("form",{onSubmit:h(n),children:[l("div",{children:[r(I,{type:"submit",disabled:!u,loading:F,children:"Save"})," ",r(I,{variant:"secondary",disabled:!u,onClick:()=>{d(e),t(e.raceId??"")},children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"raceId",children:"Race"}),i?r("div",{children:"Loading..."}):l("select",{id:"raceId",...c("raceId"),onChange:v=>{t(v.target.value),w.onChange(v)},children:[r("option",{value:"",disabled:!0}),a?.map(({id:v,name:U})=>r("option",{value:v,children:U},v))]})]})]})}function br(){const[e,n]=y.exports.useState(""),{characterId:t}=C(),{data:s,loading:i,error:o}=k({variables:{id:t},skip:!t,onCompleted:({character:u})=>u?.race&&n(u.race.id)}),[a,{error:c}]=Q({onError:u=>console.error(u.message)});if(y.exports.useEffect(()=>{n(s?.character?.race?.id??"")},[s]),o)return null;const{character:d}=s||{},h={raceId:d?.race?.id??""};return l("main",{children:[r("h2",{children:"Character Race"}),i?r("div",{children:"Loading..."}):l(D,{children:[c&&r(b,{children:c.message}),r(fr,{defaultValues:h,onChange:u=>{u!==""&&n(u)},onSubmit:u=>{a({variables:{input:{id:t,...u}}})}}),r(gr,{raceId:e})]})]})}function vr(){const{characterId:e}=C(),{data:n,loading:t,error:s}=k({variables:{id:e},skip:!e});return s?null:l("main",{children:[r("h2",{children:"Character Class"}),t?r("div",{children:"Loading..."}):r("div",{children:"Class"})]})}function xr(){const{characterId:e}=C(),{data:n,loading:t,error:s}=k({variables:{id:e},skip:!e});return s?null:l("main",{children:[r("h2",{children:"Character Abilities"}),t?r("div",{children:"Loading..."}):r("div",{children:"Abilities"})]})}function $r(){const{characterId:e}=C(),{data:n,loading:t,error:s}=k({variables:{id:e},skip:!e});return s?null:l("main",{children:[r("h2",{children:"Character Equipment"}),t?r("div",{children:"Loading..."}):r("div",{children:"Equipment"})]})}function yr(){const{characterId:e}=C(),{data:n,loading:t}=k({variables:{id:e},skip:!e}),{character:s}=n||{};return l("header",{children:[l("nav",{children:[r($,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:t?"Loading...":s?.name})]}),r("h1",{children:t?"Loading...":s?.name})]})}function Cr(){return l("nav",{children:[r($,{to:"./",children:"Details"})," ",r($,{to:"race",children:"Race"})," ",r($,{to:"class",children:"Class"})," ",r($,{to:"abilities",children:"Abilities"})," ",r($,{to:"equipment",children:"Equipment"})]})}function kr(){const{characterId:e}=C(),{data:n,error:t}=k({variables:{id:e},skip:!e});return t?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):l(A,{direction:"column",p:"32",mx:"auto",children:[r(yr,{}),r(Cr,{}),r(he,{})]})}function wr(){const{isLoggedIn:e}=O();return r(me,{basename:"/dungeonist/",children:l(pe,{children:[r(g,{path:"/",element:r(Fe,{})}),e?l(D,{children:[r(g,{path:"/characters",element:r(ur,{})}),l(g,{path:"/characters/:characterId/edit",element:r(kr,{}),children:[r(g,{index:!0,element:r(pr,{})}),r(g,{path:"race",element:r(br,{})}),r(g,{path:"class",element:r(vr,{})}),r(g,{path:"abilities",element:r(xr,{})}),r(g,{path:"equipment",element:r($r,{})})]})]}):l(D,{children:[r(g,{path:"/signup",element:r(lr,{})}),r(g,{path:"/login",element:r(ar,{})})]}),r(g,{path:"*",element:r(Ae,{})})]})})}const Sr="modulepreload",V={},Lr="/dungeonist/",E=function(n,t){return!t||t.length===0?n():Promise.all(t.map(s=>{if(s=`${Lr}${s}`,s in V)return;V[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Sr,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",d)})})).then(()=>n())},G={"../mocks/Alignments.ts":()=>E(()=>import("./Alignments.7c02f671.js"),["assets/Alignments.7c02f671.js","assets/vendor.0e3099c9.js"]),"../mocks/Character.ts":()=>E(()=>import("./Character.82595738.js"),["assets/Character.82595738.js","assets/vendor.0e3099c9.js"]),"../mocks/Characters.ts":()=>E(()=>import("./Characters.7335018b.js"),["assets/Characters.7335018b.js","assets/vendor.0e3099c9.js"]),"../mocks/Race.ts":()=>E(()=>import("./Race.3dc10297.js"),["assets/Race.3dc10297.js","assets/vendor.0e3099c9.js"]),"../mocks/Races.ts":()=>E(()=>import("./Races.a49e5988.js"),["assets/Races.a49e5988.js","assets/vendor.0e3099c9.js"]),"../mocks/User.ts":()=>E(()=>import("./User.7065faac.js"),["assets/User.7065faac.js","assets/vendor.0e3099c9.js"])};let K=[];for(const e in G){const n=await Promise.resolve(G[e]().then(t=>t.handlers));K.push(...n)}const Ir=ge({uri:"https://example.com"}),Er=fe((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:{...n,...t&&{authorization:`Bearer ${t}`}}}}),Fr=new be({link:Er.concat(Ir),cache:new ve});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),xe(...K).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});$e.render(r(ye,{client:Fr,children:r(Oe,{children:l(Ce,{theme:Le,children:[r(we,{}),r(wr,{})]})})}),document.getElementById("root"));
