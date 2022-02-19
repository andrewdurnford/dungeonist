import{W as le,j as M,s as f,L as y,C as ce,R as de,c as R,a as w,u as A,o as B,r as I,g as p,b as _,d as q,e as ue,f as O,h as T,i as k,O as he,B as me,k as pe,l as g,m as ge,n as fe,A as be,I as ve,p as xe,q as ye,t as $e,F as ke}from"./vendor.8176e33b.js";const Ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Ce();const we=le`
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
`,U={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},Le={sm:640,md:768,lg:1024,xl:1280},Se={colors:U,breakpoints:Le},r=M.exports.jsx,l=M.exports.jsxs,D=M.exports.Fragment;function Ee(e){if(e!=="none")return`${e}px`}function m(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const Ie=f.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Ee(e)};
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
  background: ${({$background:e})=>e?U[e]:void 0};
`;function F({direction:e="row",wrap:n="nowrap",justifyContent:t="flex-start",alignItems:i="stretch",alignContent:o="normal",gap:s="none",flexGrow:a=0,flexShrink:d=1,flexBasis:u="auto",alignSelf:h="auto",m:$="none",mx:x="none",my:c="none",mt:z="none",mr:K="none",mb:J="none",ml:X="none",p:Y="none",px:Z="none",py:ee="none",pt:re="none",pr:ne="none",pb:te="none",pl:ie="none",background:ae,children:oe,...se}){return r(Ie,{$flexDirection:e,$flexWrap:n,$justifyContent:t,$alignItems:i,$gap:s,$flexGrow:a,$flexShrink:d,$flexBasis:u,$alignSelf:h,$m:$,$mx:x,$my:c,$mt:z,$mr:K,$mb:J,$ml:X,$p:Y,$px:Z,$py:ee,$pt:re,$pr:ne,$pb:te,$pl:ie,$background:ae,...se,children:oe})}f(F)`
  max-width: 100%;
`;function L({children:e}){return r(F,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function Fe(){return r(L,{children:r("h1",{children:"Hello World"})})}const Re=f.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function b({children:e}){return r(Re,{children:e})}const Ae=f.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function j({size:e="16",weight:n="400",children:t,...i}){return r(Ae,{$size:e,$weight:n,...i,children:t})}function _e({message:e}){return l(L,{children:[r(j,{as:"h1",size:"32",children:"404"}),r(b,{children:e||"Not Found"}),r(y,{to:"/",children:"Home"})]})}const qe=f.label`
  display: block;

  ${({$required:e})=>e&&ce`
      ::after {
        content: "*";
      }
    `};
`;function De({required:e=!1,children:n,...t}){return r(qe,{$required:e,...t,children:n})}const je=f.div`
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
`,P=de.forwardRef(({name:e,label:n,type:t,error:i,required:o=!1,...s},a)=>l(je,{children:[r(De,{htmlFor:e,required:o,children:n}),i&&r(Pe,{children:i}),r(ze,{id:e,name:e,type:t,"aria-label":n,"aria-required":o,$error:!!i,ref:a,...s})]})),Me=f.button`
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
`;function S({as:e="button",type:n="button",variant:t="primary",loading:i=!1,disabled:o=!1,children:s,...a}){return r(Me,{as:e,type:e==="button"?n:void 0,$variant:t,disabled:i||o,...a,children:s&&i?r("div",{children:'"Loading..."'}):s})}const Be=R().shape({email:w().email("Must be a valid email").required("Email is required"),password:w().required("Password is required")});function Oe({loading:e,onSubmit:n}){const{register:t,handleSubmit:i,formState:{errors:o}}=A({mode:"onTouched",resolver:B(Be)});return r("form",{onSubmit:i(n),children:l(F,{direction:"column",gap:"16",children:[r(P,{type:"text",label:"Email",placeholder:"example@gmail.com",error:o.email?.message,required:!0,...t("email")}),r(P,{type:"password",label:"Password",error:o.password?.message,required:!0,...t("password")}),r(S,{type:"submit",loading:e,children:"Log in"})]})})}const N=I.exports.createContext({});function Te({children:e}){const[n,t]=I.exports.useState(null),[i,o]=I.exports.useState(localStorage.getItem("token"));function s({token:u,user:h}){t(h),o(u),localStorage.setItem("token",u)}function a(){t(null),o(null),localStorage.removeItem("token")}const d=I.exports.useMemo(()=>({user:n,token:i,isLoggedIn:!!i,login:s,logout:a}),[n,i,s,a]);return r(N.Provider,{value:d,children:e})}function V(){return I.exports.useContext(N)}const v={},Ue=p`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Ne(e){const n={...v,...e};return _(Ue,n)}const Ve=p`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function We(e){const n={...v,...e};return _(Ve,n)}const Qe=p`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function He(e){const n={...v,...e};return _(Qe,n)}const Ge=p`
    mutation UpdateCharacterDetails($input: UpdateCharacterDetailsInput!) {
  updateCharacterDetails(input: $input) {
    id
    name
    level
    experience
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
}
    `;function W(e){const n={...v,...e};return _(Ge,n)}const Ke=p`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function Je(e){const n={...v,...e};return q(Ke,n)}const Xe=p`
    query Character($id: ID!) {
  character(id: $id) {
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
}
    `;function C(e){const n={...v,...e};return q(Xe,n)}const Ye=p`
    query Characters {
  characters {
    id
    name
  }
}
    `;function Ze(e){const n={...v,...e};return q(Ye,n)}p`
    query Me {
  me {
    id
    email
  }
}
    `;const er=p`
    query Race($id: ID!) {
  race(id: $id) {
    id
    name
    description
    age
    alignment
    size
    speed
    abilityScoreIncreases {
      id
      ability {
        id
        name
      }
      increase
    }
  }
}
    `;function rr(e){const n={...v,...e};return ue(er,n)}const nr=p`
    query Races {
  races {
    id
    name
  }
}
    `;function tr(e){const n={...v,...e};return q(nr,n)}function ir(){const e=O(),{login:n}=V(),[t,{loading:i,error:o}]=We({onError:s=>console.error(s),onCompleted:({login:s})=>{n(s),e("/")},update(s,{data:a}){s.modify({fields:{me(){return a?.login.user}}})}});return l(L,{children:[r(j,{as:"h1",size:"32",children:"Log in"}),o&&l(b,{children:["Error: ",o.message]}),r(Oe,{loading:i,onSubmit:({email:s,password:a})=>t({variables:{input:{email:s,password:a}}})})]})}const ar=R().shape({email:w().email("Must be a valid email").required("Email is required"),password:w().required("Password is required")});function or({loading:e,onSubmit:n}){const{register:t,handleSubmit:i,formState:{errors:o}}=A({mode:"onTouched",resolver:B(ar)});return r("form",{onSubmit:i(n),children:l(F,{direction:"column",gap:"16",children:[r(P,{type:"text",label:"Email",placeholder:"example@gmail.com",error:o.email?.message,required:!0,...t("email")}),r(P,{type:"password",label:"Password",error:o.password?.message,required:!0,...t("password")}),r(S,{type:"submit",loading:e,children:"Sign up"})]})})}function sr(){const e=O(),[n,{loading:t,error:i}]=He({onError:o=>console.error(o),onCompleted:()=>e("/")});return l(L,{children:[r(j,{as:"h1",size:"32",children:"Sign up"}),i&&l(b,{children:["Error: ",i.message]}),r(or,{loading:t,onSubmit:({email:o,password:s})=>n({variables:{input:{email:o,password:s}}})})]})}function lr(){return r(L,{children:r("p",{children:"Loading..."})})}R().shape({name:w(),level:T().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});const cr=f.ul`
  margin-left: 2rem;
`;function dr(){const{data:e,loading:n,error:t}=Ze(),[i,{loading:o,error:s}]=Ne({onError:a=>console.error(a),update(a,{data:d}){a.modify({fields:{characters(u=[]){const h=a.writeFragment({data:d?.createCharacter.character,fragment:p`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...u,h]}}})}});return n?r(lr,{}):t||!e?l(b,{children:["Error: ",t&&t.message]}):l(L,{children:[r(j,{as:"h1",size:"32",children:"Characters"}),s&&l(b,{children:["Error: ",s?.message]}),!1,r(cr,{children:e.characters.map(({id:a,name:d})=>r("li",{children:r(y,{to:`/characters/${a}/edit`,children:d})},a))})]})}const ur=R().shape({name:w().required(),level:T().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20").required()});function hr({defaultValues:e,onSubmit:n}){const{data:t,loading:i,error:o}=Je();if(o)return r(b,{children:o.message});const{alignments:s}=t||{},{register:a,reset:d,handleSubmit:u,formState:{errors:h,isSubmitting:$}}=A({mode:"onTouched",defaultValues:e,resolver:B(ur)});return l("form",{onSubmit:u(n),children:[l("div",{children:[r(S,{type:"submit",loading:$,children:"Save"})," ",r(S,{variant:"secondary",onClick:()=>d(e),children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"name",children:"Name"}),h?.name&&r("span",{children:h.name.message}),r("input",{type:"text",id:"name",...a("name")})]}),l("div",{children:[r("label",{htmlFor:"level",children:"Level"}),h?.level&&r("span",{children:h.level.message}),r("input",{type:"number",id:"level",...a("level",{valueAsNumber:!0})})]}),l("div",{children:[r("label",{htmlFor:"background",children:"Background"}),r("input",{type:"text",id:"background",...a("background")})]}),l("div",{children:[r("label",{htmlFor:"alignmentId",children:"Alignment"}),i?r("div",{children:"Loading..."}):l("select",{id:"alignmentId",...a("alignmentId"),children:[r("option",{value:"",disabled:!0}),s?.map(({id:x,name:c})=>r("option",{value:x,children:c},x))]})]}),l("div",{children:[r("label",{htmlFor:"traits",children:"Traits"}),r("textarea",{id:"traits",rows:4,...a("traits")})]}),l("div",{children:[r("label",{htmlFor:"ideals",children:"Ideals"}),r("textarea",{id:"ideals",rows:4,...a("ideals")})]}),l("div",{children:[r("label",{htmlFor:"bonds",children:"Bonds"}),r("textarea",{id:"bonds",rows:4,...a("bonds")})]}),l("div",{children:[r("label",{htmlFor:"flaws",children:"Flaws"}),r("textarea",{id:"flaws",rows:4,...a("flaws")})]})]})}function mr(){const{characterId:e}=k(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e}),[o,{error:s}]=W({onError:u=>console.error(u.message)});if(i)return null;const{character:a}=n||{},d={name:a?.name!=="Untitled"?a?.name:"",level:a?.level??1,alignmentId:a?.alignment?.id??"",background:a?.background??"",traits:a?.traits??"",ideals:a?.ideals??"",bonds:a?.bonds??"",flaws:a?.flaws??""};return l("main",{children:[r("h2",{children:"Character Details"}),t?r("div",{children:'"Loading..."'}):l(D,{children:[s&&r(b,{children:s.message}),r(hr,{defaultValues:d,onSubmit:u=>o({variables:{input:{id:e,...u}}})})]})]})}function pr({defaultValues:e,onSubmit:n,onChange:t}){const{data:i,loading:o,error:s}=tr();if(s)return r(b,{children:s.message});const{races:a}=i||{},{register:d,reset:u,handleSubmit:h,formState:{isSubmitting:$}}=A({mode:"onTouched",defaultValues:e}),x=d("raceId");return l("form",{onSubmit:h(n),children:[l("div",{children:[r(S,{type:"submit",loading:$,children:"Save"})," ",r(S,{variant:"secondary",onClick:()=>{u(e),t(e.raceId??"")},children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"raceId",children:"Race"}),o?r("div",{children:"Loading..."}):l("select",{id:"raceId",...d("raceId"),onChange:c=>{t(c.target.value),x.onChange(c)},children:[r("option",{value:"",disabled:!0}),a?.map(({id:c,name:z})=>r("option",{value:c,children:z},c))]})]})]})}function gr(){const{characterId:e}=k(),[n,{data:t,loading:i,error:o}]=rr({}),{data:s,loading:a,error:d}=C({variables:{id:e},skip:!e,onCompleted:({character:c})=>c?.race&&n({variables:{id:c.race.id}})}),[u,{error:h}]=W({onError:c=>console.error(c.message)});if(d)return null;const{character:$}=s||{},x={raceId:$?.race?.id??""};return l("main",{children:[r("h2",{children:"Character Race"}),a?r("div",{children:'"Loading..."'}):l(D,{children:[h&&r(b,{children:h.message}),r(pr,{defaultValues:x,onChange:c=>{c!==""&&n({variables:{id:c}})},onSubmit:c=>{u({variables:{input:{id:e,...c}}})}}),o&&r(b,{children:o.message}),l("div",{children:[r("h3",{children:"Ability Score Improvements"}),r("ul",{children:i?r("li",{children:"Loading..."}):t?.race?.abilityScoreIncreases.map(c=>r("li",{children:`${c.ability.name} ${c.increase>=0?"+":"-"}${c.increase}
                `},c.id))}),r("h3",{children:"Details"}),r("p",{children:i?"Loading...":t?.race?.description}),r("label",{children:"Age"}),r("textarea",{rows:4,disabled:!0,defaultValue:i?"Loading...":t?.race?.age??""}),r("label",{children:"Alignment"}),r("textarea",{rows:4,disabled:!0,defaultValue:i?"Loading...":t?.race?.alignment??""}),r("label",{children:"Size"}),r("textarea",{rows:4,disabled:!0,defaultValue:i?"Loading...":t?.race?.size??""}),r("label",{children:"Speed"}),r("textarea",{rows:4,disabled:!0,defaultValue:i?"Loading...":t?.race?.speed??""})]})]})]})}function fr(){const{characterId:e}=k(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:l("main",{children:[r("h2",{children:"Character Class"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Class"})]})}function br(){const{characterId:e}=k(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:l("main",{children:[r("h2",{children:"Character Abilities"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Abilities"})]})}function vr(){const{characterId:e}=k(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:l("main",{children:[r("h2",{children:"Character Equipment"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Equipment"})]})}function xr(){const{characterId:e}=k(),{data:n,loading:t}=C({variables:{id:e},skip:!e}),{character:i}=n||{};return l("header",{children:[l("nav",{children:[r(y,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:t?"Loading...":i?.name})]}),r("h1",{children:t?"Loading...":i?.name})]})}function yr(){return l("nav",{children:[r(y,{to:"./",children:"Details"})," ",r(y,{to:"race",children:"Race"})," ",r(y,{to:"class",children:"Class"})," ",r(y,{to:"abilities",children:"Abilities"})," ",r(y,{to:"equipment",children:"Equipment"})]})}function $r(){const{characterId:e}=k(),{data:n,error:t}=C({variables:{id:e},skip:!e});return t?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):l(F,{direction:"column",p:"32",children:[r(xr,{}),r(yr,{}),r(he,{})]})}function kr(){const{isLoggedIn:e}=V();return r(me,{basename:"/dungeonist/",children:l(pe,{children:[r(g,{path:"/",element:r(Fe,{})}),e?l(D,{children:[r(g,{path:"/characters",element:r(dr,{})}),l(g,{path:"/characters/:characterId/edit",element:r($r,{}),children:[r(g,{index:!0,element:r(mr,{})}),r(g,{path:"race",element:r(gr,{})}),r(g,{path:"class",element:r(fr,{})}),r(g,{path:"abilities",element:r(br,{})}),r(g,{path:"equipment",element:r(vr,{})})]})]}):l(D,{children:[r(g,{path:"/signup",element:r(sr,{})}),r(g,{path:"/login",element:r(ir,{})})]}),r(g,{path:"*",element:r(_e,{})})]})})}const Cr="modulepreload",Q={},wr="/dungeonist/",E=function(n,t){return!t||t.length===0?n():Promise.all(t.map(i=>{if(i=`${wr}${i}`,i in Q)return;Q[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Cr,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((d,u)=>{a.addEventListener("load",d),a.addEventListener("error",u)})})).then(()=>n())},H={"../mocks/Alignments.ts":()=>E(()=>import("./Alignments.8a8298cd.js"),["assets/Alignments.8a8298cd.js","assets/vendor.8176e33b.js"]),"../mocks/Character.ts":()=>E(()=>import("./Character.ba671c81.js"),["assets/Character.ba671c81.js","assets/vendor.8176e33b.js"]),"../mocks/Characters.ts":()=>E(()=>import("./Characters.419b2bd3.js"),["assets/Characters.419b2bd3.js","assets/vendor.8176e33b.js"]),"../mocks/Me.ts":()=>E(()=>import("./Me.37fb0cd0.js"),["assets/Me.37fb0cd0.js","assets/vendor.8176e33b.js"]),"../mocks/Race.ts":()=>E(()=>import("./Race.b7762531.js"),["assets/Race.b7762531.js","assets/vendor.8176e33b.js"]),"../mocks/Races.ts":()=>E(()=>import("./Races.d7860606.js"),["assets/Races.d7860606.js","assets/vendor.8176e33b.js"])};let G=[];for(const e in H){const n=await Promise.resolve(H[e]().then(t=>t.handlers));G.push(...n)}const Lr=ge({uri:"https://example.com"}),Sr=fe((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:{...n,...t&&{authorization:`Bearer ${t}`}}}}),Er=new be({link:Sr.concat(Lr),cache:new ve});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),xe(...G).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});ye.render(r($e,{client:Er,children:r(Te,{children:l(ke,{theme:Se,children:[r(we,{}),r(kr,{})]})})}),document.getElementById("root"));
