import{W as le,j as T,s as f,L as $,C as ce,R as de,c as D,a as L,u as q,o as B,r as y,g as p,b as j,d as R,e as O,f as U,h as k,O as ue,B as he,i as me,k as g,l as pe,m as ge,A as fe,I as be,n as ve,p as xe,q as $e,F as ye}from"./vendor.0e3099c9.js";const ke=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};ke();const Ce=le`
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
`,N={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},we={sm:640,md:768,lg:1024,xl:1280},Le={colors:N,breakpoints:we},r=T.exports.jsx,l=T.exports.jsxs,A=T.exports.Fragment;function Se(e){if(e!=="none")return`${e}px`}function m(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const Ee=f.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Se(e)};
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
`;function _({direction:e="row",wrap:n="nowrap",justifyContent:t="flex-start",alignItems:a="stretch",alignContent:i="normal",gap:s="none",flexGrow:o=0,flexShrink:c=1,flexBasis:d="auto",alignSelf:h="auto",m:u="none",mx:F="none",my:w="none",mt:v="none",mr:M="none",mb:J="none",ml:X="none",p:Y="none",px:Z="none",py:ee="none",pt:re="none",pr:ne="none",pb:te="none",pl:ie="none",background:ae,children:oe,...se}){return r(Ee,{$flexDirection:e,$flexWrap:n,$justifyContent:t,$alignItems:a,$gap:s,$flexGrow:o,$flexShrink:c,$flexBasis:d,$alignSelf:h,$m:u,$mx:F,$my:w,$mt:v,$mr:M,$mb:J,$ml:X,$p:Y,$px:Z,$py:ee,$pt:re,$pr:ne,$pb:te,$pl:ie,$background:ae,...se,children:oe})}f(_)`
  max-width: 100%;
`;function S({children:e}){return r(_,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function Ie(){return r(S,{children:r("h1",{children:"Hello World"})})}const Fe=f.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function b({children:e}){return r(Fe,{children:e})}const Re=f.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function P({size:e="16",weight:n="400",children:t,...a}){return r(Re,{$size:e,$weight:n,...a,children:t})}function Ae({message:e}){return l(S,{children:[r(P,{as:"h1",size:"32",children:"404"}),r(b,{children:e||"Not Found"}),r($,{to:"/",children:"Home"})]})}const _e=f.label`
  display: block;

  ${({$required:e})=>e&&ce`
      ::after {
        content: "*";
      }
    `};
`;function De({required:e=!1,children:n,...t}){return r(_e,{$required:e,...t,children:n})}const qe=f.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,je=f.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Pe=f.input`
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
`,z=de.forwardRef(({name:e,label:n,type:t,error:a,required:i=!1,...s},o)=>l(qe,{children:[r(De,{htmlFor:e,required:i,children:n}),a&&r(je,{children:a}),r(Pe,{id:e,name:e,type:t,"aria-label":n,"aria-required":i,$error:!!a,ref:o,...s})]})),ze=f.button`
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
`;function E({as:e="button",type:n="button",variant:t="primary",loading:a=!1,disabled:i=!1,children:s,...o}){return r(ze,{as:e,type:e==="button"?n:void 0,$variant:t,disabled:a||i,...o,children:s&&a?r("div",{children:"Loading..."}):s})}const Me=D().shape({email:L().email("Must be a valid email").required("Email is required"),password:L().required("Password is required")});function Te({loading:e,onSubmit:n}){const{register:t,handleSubmit:a,formState:{errors:i}}=q({mode:"onTouched",resolver:B(Me)});return r("form",{onSubmit:a(n),children:l(_,{direction:"column",gap:"16",children:[r(z,{type:"text",label:"Email",placeholder:"example@gmail.com",error:i.email?.message,required:!0,...t("email")}),r(z,{type:"password",label:"Password",error:i.password?.message,required:!0,...t("password")}),r(E,{type:"submit",loading:e,children:"Log in"})]})})}const W=y.exports.createContext({});function Be({children:e}){const[n,t]=y.exports.useState(null),[a,i]=y.exports.useState(localStorage.getItem("token"));function s({token:d,user:h}){t(h),i(d),localStorage.setItem("token",d)}function o(){t(null),i(null),localStorage.removeItem("token")}const c=y.exports.useMemo(()=>({user:n,token:a,isLoggedIn:!!a,login:s,logout:o}),[n,a,s,o]);return r(W.Provider,{value:c,children:e})}function H(){return y.exports.useContext(W)}const x={},Oe=p`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Ue(e){const n={...x,...e};return j(Oe,n)}const Ne=p`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function We(e){const n={...x,...e};return j(Ne,n)}const He=p`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function Qe(e){const n={...x,...e};return j(He,n)}const Ve=p`
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
    `;function Q(e){const n={...x,...e};return j(Ve,n)}const Ge=p`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function Ke(e){const n={...x,...e};return R(Ge,n)}const Je=p`
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
    `;function C(e){const n={...x,...e};return R(Je,n)}const Xe=p`
    query Characters {
  characters {
    id
    name
  }
}
    `;function Ye(e){const n={...x,...e};return R(Xe,n)}p`
    query Me {
  me {
    id
    email
  }
}
    `;const Ze=p`
    query Race($id: ID!) {
  race(id: $id) {
    id
    name
    description
    age
    alignment
    size
    speed
    languages
    abilityScoreIncreases {
      id
      ability {
        id
        name
      }
      increase
    }
    traits {
      id
      name
      description
    }
  }
}
    `;function er(e){const n={...x,...e};return R(Ze,n)}const rr=p`
    query Races {
  races {
    id
    name
  }
}
    `;function nr(e){const n={...x,...e};return R(rr,n)}function tr(){const e=O(),{login:n}=H(),[t,{loading:a,error:i}]=We({onError:s=>console.error(s),onCompleted:({login:s})=>{n(s),e("/")},update(s,{data:o}){s.modify({fields:{me(){return o?.login.user}}})}});return l(S,{children:[r(P,{as:"h1",size:"32",children:"Log in"}),i&&l(b,{children:["Error: ",i.message]}),r(Te,{loading:a,onSubmit:({email:s,password:o})=>t({variables:{input:{email:s,password:o}}})})]})}const ir=D().shape({email:L().email("Must be a valid email").required("Email is required"),password:L().required("Password is required")});function ar({loading:e,onSubmit:n}){const{register:t,handleSubmit:a,formState:{errors:i}}=q({mode:"onTouched",resolver:B(ir)});return r("form",{onSubmit:a(n),children:l(_,{direction:"column",gap:"16",children:[r(z,{type:"text",label:"Email",placeholder:"example@gmail.com",error:i.email?.message,required:!0,...t("email")}),r(z,{type:"password",label:"Password",error:i.password?.message,required:!0,...t("password")}),r(E,{type:"submit",loading:e,children:"Sign up"})]})})}function or(){const e=O(),[n,{loading:t,error:a}]=Qe({onError:i=>console.error(i),onCompleted:()=>e("/")});return l(S,{children:[r(P,{as:"h1",size:"32",children:"Sign up"}),a&&l(b,{children:["Error: ",a.message]}),r(ar,{loading:t,onSubmit:({email:i,password:s})=>n({variables:{input:{email:i,password:s}}})})]})}function sr(){return r(S,{children:r("p",{children:"Loading..."})})}D().shape({name:L(),level:U().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});const lr=f.ul`
  margin-left: 2rem;
`;function cr(){const{data:e,loading:n,error:t}=Ye(),[a,{loading:i,error:s}]=Ue({onError:o=>console.error(o),update(o,{data:c}){o.modify({fields:{characters(d=[]){const h=o.writeFragment({data:c?.createCharacter.character,fragment:p`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...d,h]}}})}});return n?r(sr,{}):t||!e?l(b,{children:["Error: ",t&&t.message]}):l(S,{children:[r(P,{as:"h1",size:"32",children:"Characters"}),s&&l(b,{children:["Error: ",s?.message]}),!1,r(lr,{children:e.characters.map(({id:o,name:c})=>r("li",{children:r($,{to:`/characters/${o}/edit`,children:c})},o))})]})}const dr=D().shape({name:L().required(),level:U().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20").required()});function ur({defaultValues:e,onSubmit:n}){const{data:t,loading:a,error:i}=Ke();if(i)return r(b,{children:i.message});const{alignments:s}=t||{},{register:o,reset:c,handleSubmit:d,formState:{errors:h,isDirty:u,isSubmitting:F}}=q({mode:"onTouched",defaultValues:e,resolver:B(dr)});return l("form",{onSubmit:d(n),children:[l("div",{children:[r(E,{type:"submit",disabled:!u,loading:F,children:"Save"})," ",r(E,{variant:"secondary",disabled:!u,onClick:()=>c(e),children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"name",children:"Name"}),h?.name&&r("span",{children:h.name.message}),r("input",{type:"text",id:"name",...o("name")})]}),l("div",{children:[r("label",{htmlFor:"level",children:"Level"}),h?.level&&r("span",{children:h.level.message}),r("input",{type:"number",id:"level",...o("level",{valueAsNumber:!0})})]}),l("div",{children:[r("label",{htmlFor:"background",children:"Background"}),r("input",{type:"text",id:"background",...o("background")})]}),l("div",{children:[r("label",{htmlFor:"alignmentId",children:"Alignment"}),a?r("div",{children:"Loading..."}):l("select",{id:"alignmentId",...o("alignmentId"),children:[r("option",{value:"",disabled:!0}),s?.map(({id:w,name:v})=>r("option",{value:w,children:v},w))]})]}),l("div",{children:[r("label",{htmlFor:"traits",children:"Traits"}),r("textarea",{id:"traits",rows:4,...o("traits")})]}),l("div",{children:[r("label",{htmlFor:"ideals",children:"Ideals"}),r("textarea",{id:"ideals",rows:4,...o("ideals")})]}),l("div",{children:[r("label",{htmlFor:"bonds",children:"Bonds"}),r("textarea",{id:"bonds",rows:4,...o("bonds")})]}),l("div",{children:[r("label",{htmlFor:"flaws",children:"Flaws"}),r("textarea",{id:"flaws",rows:4,...o("flaws")})]})]})}function hr(){const{characterId:e}=k(),{data:n,loading:t,error:a}=C({variables:{id:e},skip:!e}),[i,{error:s}]=Q({onError:d=>console.error(d.message)});if(a)return null;const{character:o}=n||{},c={name:o?.name!=="Untitled"?o?.name:"",level:o?.level??1,alignmentId:o?.alignment?.id??"",background:o?.background??"",traits:o?.traits??"",ideals:o?.ideals??"",bonds:o?.bonds??"",flaws:o?.flaws??""};return l("main",{children:[r("h2",{children:"Character Details"}),t?r("div",{children:"Loading..."}):l(A,{children:[s&&r(b,{children:s.message}),r(ur,{defaultValues:c,onSubmit:d=>i({variables:{input:{id:e,...d}}})})]})]})}function mr({raceId:e}){const{data:n,loading:t,error:a}=er({variables:{id:e},skip:!e});if(!e)return null;if(a)return r(b,{children:a.message});const{race:i}=n||{};return l("div",{children:[r("h3",{children:"Ability Score Improvements"}),r("ul",{children:t?r("li",{children:"Loading..."}):i?.abilityScoreIncreases.map(s=>r("li",{children:`${s.ability.name} ${s.increase>=0?"+":"-"}${s.increase}
          `},s.id))}),r("h3",{children:"Details"}),r("hr",{}),r("p",{children:t?"Loading...":i?.description}),r("label",{children:r("strong",{children:"Age"})}),r("p",{children:t?"Loading...":i?.age??""}),r("label",{children:r("strong",{children:"Alignment"})}),r("p",{children:t?"Loading...":i?.alignment??""}),r("label",{children:r("strong",{children:"Size"})}),r("p",{children:t?"Loading...":i?.size??""}),r("label",{children:r("strong",{children:"Speed"})}),r("p",{children:t?"Loading...":i?.speed??""}),i?.traits&&i.traits.length>0&&l(A,{children:[r("h3",{children:"Traits"}),r("hr",{}),i?.traits.map(({id:s,name:o,description:c})=>l("div",{children:[r("label",{children:r("strong",{children:o})}),r("p",{children:c})]},s))]})]})}function pr({defaultValues:e,onSubmit:n,onChange:t}){const{data:a,loading:i,error:s}=nr();if(s)return r(b,{children:s.message});const{races:o}=a||{},{register:c,reset:d,handleSubmit:h,formState:{isDirty:u,isSubmitting:F}}=q({mode:"onTouched",defaultValues:e}),w=c("raceId");return l("form",{onSubmit:h(n),children:[l("div",{children:[r(E,{type:"submit",disabled:!u,loading:F,children:"Save"})," ",r(E,{variant:"secondary",disabled:!u,onClick:()=>{d(e),t(e.raceId??"")},children:"Reset"})]}),l("div",{children:[r("label",{htmlFor:"raceId",children:"Race"}),i?r("div",{children:"Loading..."}):l("select",{id:"raceId",...c("raceId"),onChange:v=>{t(v.target.value),w.onChange(v)},children:[r("option",{value:"",disabled:!0}),o?.map(({id:v,name:M})=>r("option",{value:v,children:M},v))]})]})]})}function gr(){const[e,n]=y.exports.useState(""),{characterId:t}=k(),{data:a,loading:i,error:s}=C({variables:{id:t},skip:!t,onCompleted:({character:u})=>u?.race&&n(u.race.id)}),[o,{error:c}]=Q({onError:u=>console.error(u.message)});if(y.exports.useEffect(()=>{n(a?.character?.race?.id??"")},[a]),s)return null;const{character:d}=a||{},h={raceId:d?.race?.id??""};return l("main",{children:[r("h2",{children:"Character Race"}),i?r("div",{children:"Loading..."}):l(A,{children:[c&&r(b,{children:c.message}),r(pr,{defaultValues:h,onChange:u=>{u!==""&&n(u)},onSubmit:u=>{o({variables:{input:{id:t,...u}}})}}),r(mr,{raceId:e})]})]})}function fr(){const{characterId:e}=k(),{data:n,loading:t,error:a}=C({variables:{id:e},skip:!e});return a?null:l("main",{children:[r("h2",{children:"Character Class"}),t?r("div",{children:"Loading..."}):r("div",{children:"Class"})]})}function br(){const{characterId:e}=k(),{data:n,loading:t,error:a}=C({variables:{id:e},skip:!e});return a?null:l("main",{children:[r("h2",{children:"Character Abilities"}),t?r("div",{children:"Loading..."}):r("div",{children:"Abilities"})]})}function vr(){const{characterId:e}=k(),{data:n,loading:t,error:a}=C({variables:{id:e},skip:!e});return a?null:l("main",{children:[r("h2",{children:"Character Equipment"}),t?r("div",{children:"Loading..."}):r("div",{children:"Equipment"})]})}function xr(){const{characterId:e}=k(),{data:n,loading:t}=C({variables:{id:e},skip:!e}),{character:a}=n||{};return l("header",{children:[l("nav",{children:[r($,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:t?"Loading...":a?.name})]}),r("h1",{children:t?"Loading...":a?.name})]})}function $r(){return l("nav",{children:[r($,{to:"./",children:"Details"})," ",r($,{to:"race",children:"Race"})," ",r($,{to:"class",children:"Class"})," ",r($,{to:"abilities",children:"Abilities"})," ",r($,{to:"equipment",children:"Equipment"})]})}function yr(){const{characterId:e}=k(),{data:n,error:t}=C({variables:{id:e},skip:!e});return t?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):l(_,{direction:"column",p:"32",children:[r(xr,{}),r($r,{}),r(ue,{})]})}function kr(){const{isLoggedIn:e}=H();return r(he,{basename:"/dungeonist/",children:l(me,{children:[r(g,{path:"/",element:r(Ie,{})}),e?l(A,{children:[r(g,{path:"/characters",element:r(cr,{})}),l(g,{path:"/characters/:characterId/edit",element:r(yr,{}),children:[r(g,{index:!0,element:r(hr,{})}),r(g,{path:"race",element:r(gr,{})}),r(g,{path:"class",element:r(fr,{})}),r(g,{path:"abilities",element:r(br,{})}),r(g,{path:"equipment",element:r(vr,{})})]})]}):l(A,{children:[r(g,{path:"/signup",element:r(or,{})}),r(g,{path:"/login",element:r(tr,{})})]}),r(g,{path:"*",element:r(Ae,{})})]})})}const Cr="modulepreload",V={},wr="/dungeonist/",I=function(n,t){return!t||t.length===0?n():Promise.all(t.map(a=>{if(a=`${wr}${a}`,a in V)return;V[a]=!0;const i=a.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Cr,i||(o.as="script",o.crossOrigin=""),o.href=a,document.head.appendChild(o),i)return new Promise((c,d)=>{o.addEventListener("load",c),o.addEventListener("error",d)})})).then(()=>n())},G={"../mocks/Alignments.ts":()=>I(()=>import("./Alignments.7c02f671.js"),["assets/Alignments.7c02f671.js","assets/vendor.0e3099c9.js"]),"../mocks/Character.ts":()=>I(()=>import("./Character.82595738.js"),["assets/Character.82595738.js","assets/vendor.0e3099c9.js"]),"../mocks/Characters.ts":()=>I(()=>import("./Characters.7335018b.js"),["assets/Characters.7335018b.js","assets/vendor.0e3099c9.js"]),"../mocks/Me.ts":()=>I(()=>import("./Me.5b7f66d4.js"),["assets/Me.5b7f66d4.js","assets/vendor.0e3099c9.js"]),"../mocks/Race.ts":()=>I(()=>import("./Race.3dc10297.js"),["assets/Race.3dc10297.js","assets/vendor.0e3099c9.js"]),"../mocks/Races.ts":()=>I(()=>import("./Races.a49e5988.js"),["assets/Races.a49e5988.js","assets/vendor.0e3099c9.js"])};let K=[];for(const e in G){const n=await Promise.resolve(G[e]().then(t=>t.handlers));K.push(...n)}const Lr=pe({uri:"https://example.com"}),Sr=ge((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:{...n,...t&&{authorization:`Bearer ${t}`}}}}),Er=new fe({link:Sr.concat(Lr),cache:new be});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),ve(...K).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});xe.render(r($e,{client:Er,children:r(Be,{children:l(ye,{theme:Le,children:[r(Ce,{}),r(kr,{})]})})}),document.getElementById("root"));
