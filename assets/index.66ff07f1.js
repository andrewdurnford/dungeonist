import{j as J,r as k,g as $,u as z,a as q,b as Le,s as l,L as j,c as T,W as Ie,C as Ee,R as X,d as M,e as D,f as B,o as Y,h as ne,N as Ae,i as F,O as Re,B as De,k as Fe,l as C,m as _e,n as ze,A as je,I as Te,p as Oe,q as Ne,t as Pe,F as qe}from"./vendor.ff8afe3d.js";const Me=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};Me();const r=J.exports.jsx,a=J.exports.jsxs,O=J.exports.Fragment,te=k.exports.createContext({});function Be({children:e}){const[n,i]=k.exports.useState(null),[o,t]=k.exports.useState(localStorage.getItem("token"));function s({token:p,user:h}){i(h),t(p),localStorage.setItem("token",p)}function c(){i(null),t(null),localStorage.removeItem("token")}const m=k.exports.useMemo(()=>({user:n,token:o,isLoggedIn:!!o,login:s,logout:c}),[n,o,s,c]);return r(te.Provider,{value:m,children:e})}function Z(){return k.exports.useContext(te)}const w={},Ve=$`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Qe(e){const n={...w,...e};return q(Ve,n)}const Ue=$`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function We(e){const n={...w,...e};return q(Ue,n)}const Ge=$`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function He(e){const n={...w,...e};return q(Ge,n)}const Ke=$`
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
    `;function ie(e){const n={...w,...e};return q(Ke,n)}const Je=$`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function Xe(e){const n={...w,...e};return z(Je,n)}const Ye=$`
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
    `;function V(e){const n={...w,...e};return z(Ye,n)}const Ze=$`
    query Characters {
  characters {
    id
    name
  }
}
    `;function er(e){const n={...w,...e};return z(Ze,n)}const rr=$`
    query Me {
  me {
    id
    email
  }
}
    `;function nr(e){const n={...w,...e};return z(rr,n)}const tr=$`
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
    `;function ir(e){const n={...w,...e};return Le(tr,n)}const or=$`
    query Races {
  races {
    id
    name
  }
}
    `;function ar(e){const n={...w,...e};return z(or,n)}const sr=l.button`
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
`;function N({as:e="button",type:n="button",variant:i="primary",loading:o=!1,disabled:t=!1,children:s,...c}){return r(sr,{as:e,type:e==="button"?n:void 0,$variant:i,disabled:o||t,...c,children:s&&o?r("div",{children:'"Loading..."'}):s})}const cr=l.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.colors.gray700};
`,lr=l.div`
  flex: 1;
  max-width: 768px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`,oe=l.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`,Q=l(j)`
  display: inline-block;

  color: ${({theme:e})=>e.colors.white};
  text-decoration: none;
  border-radius: 4px;
  padding: 0.25rem 0;

  font-size: 16px;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
    color: ${({theme:e})=>e.colors.gray200};
    border-color: ${({theme:e})=>e.colors.gray200};
  }
`,ae=l(N).attrs({variant:"secondary"})`
  /* Override color to white */
  color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.white};

  /* TODO: css should not be overriden by 'as={Link}' */
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    text-decoration: underline;
    background: none;
    color: ${({theme:e})=>e.colors.gray200};
    border-color: ${({theme:e})=>e.colors.gray200};
  }
`;function dr(){const e=T(),{isLoggedIn:n,logout:i}=Z(),{data:o,loading:t}=nr();return t?r("p",{children:"Loading..."}):r(cr,{children:r(lr,{children:n?a(O,{children:[r(Q,{to:"/",children:"Dungeonist"}),a(oe,{children:[r("li",{children:r(Q,{to:"/characters",children:"Characters"})}),r("li",{children:r(ae,{disabled:!0,onClick:()=>{i(),e("/")},children:"Log out"})})]})]}):a(O,{children:[r(Q,{to:"/",children:"Dungeonist"}),a(oe,{children:[r("li",{children:r(Q,{to:"/login",children:"Log in"})}),r("li",{children:r(ae,{as:j,to:"/signup",children:"Sign up"})})]})]})})})}const ur=Ie`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;
  }
`,se={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},mr={sm:640,md:768,lg:1024,xl:1280},pr={colors:se,breakpoints:mr};function hr(e){if(e!=="none")return`${e}px`}function x(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const gr=l.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>hr(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>x(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${x(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${x(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>x(e)};
  margin-right: ${({$mr:e})=>x(e)};
  margin-bottom: ${({$mb:e})=>x(e)};
  margin-left: ${({$ml:e})=>x(e)};
  /* padding */
  padding: ${({$p:e})=>x(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${x(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${x(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>x(e)};
  padding-right: ${({$pr:e})=>x(e)};
  padding-bottom: ${({$pb:e})=>x(e)};
  padding-left: ${({$pl:e})=>x(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?se[e]:void 0};
`;function u({direction:e="row",wrap:n="nowrap",justifyContent:i="flex-start",alignItems:o="stretch",alignContent:t="normal",gap:s="none",flexGrow:c=0,flexShrink:m=1,flexBasis:p="auto",alignSelf:h="auto",m:v="none",mx:d="none",my:g="none",mt:L="none",mr:f="none",mb:I="none",ml:R="none",p:b="none",px:H="none",py:K="none",pt:ye="none",pr:$e="none",pb:ve="none",pl:we="none",background:ke,children:Ce,...Se}){return r(gr,{$flexDirection:e,$flexWrap:n,$justifyContent:i,$alignItems:o,$gap:s,$flexGrow:c,$flexShrink:m,$flexBasis:p,$alignSelf:h,$m:v,$mx:d,$my:g,$mt:L,$mr:f,$mb:I,$ml:R,$p:b,$px:H,$py:K,$pt:ye,$pr:$e,$pb:ve,$pl:we,$background:ke,...Se,children:Ce})}const ce=l(u)`
  max-width: 100%;
`;function S({children:e}){return r(u,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function le({children:e}){return r(u,{direction:"column",gap:"16",flexGrow:1,children:e})}function fr(){return r(S,{children:r("h1",{children:"Hello World"})})}const br=l.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function E({children:e}){return r(br,{children:e})}const xr=l.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function y({size:e="16",weight:n="400",children:i,...o}){return r(xr,{$size:e,$weight:n,...o,children:i})}function P({message:e}){return a(S,{children:[r(y,{as:"h1",size:"32",children:"404"}),r(E,{children:e||"Not Found"}),r(j,{to:"/",children:"Home"})]})}const yr=l.label`
  display: block;

  ${({$required:e})=>e&&Ee`
      ::after {
        content: "*";
      }
    `};
`;function ee({required:e=!1,children:n,...i}){return r(yr,{$required:e,...i,children:n})}const $r=l.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,vr=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,wr=l.input`
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
`,A=X.forwardRef(({name:e,label:n,type:i,error:o,required:t=!1,...s},c)=>a($r,{children:[r(ee,{htmlFor:e,required:t,children:n}),o&&r(vr,{children:o}),r(wr,{id:e,name:e,type:i,"aria-label":n,"aria-required":t,$error:!!o,ref:c,...s})]})),kr=M().shape({email:D().email("Must be a valid email").required("Email is required"),password:D().required("Password is required")});function Cr({loading:e,onSubmit:n}){const{register:i,handleSubmit:o,formState:{errors:t}}=B({mode:"onTouched",resolver:Y(kr)});return r("form",{onSubmit:o(n),children:a(u,{direction:"column",gap:"16",children:[r(A,{type:"text",label:"Email",placeholder:"example@gmail.com",error:t.email?.message,required:!0,...i("email")}),r(A,{type:"password",label:"Password",error:t.password?.message,required:!0,...i("password")}),r(N,{type:"submit",loading:e,children:"Log in"})]})})}function Sr(){const e=T(),{login:n}=Z(),[i,{loading:o,error:t}]=We({onError:s=>console.error(s),onCompleted:({login:s})=>{n(s),e("/")},update(s,{data:c}){s.modify({fields:{me(){return c?.login.user}}})}});return a(S,{children:[r(y,{as:"h1",size:"32",children:"Log in"}),t&&a(E,{children:["Error: ",t.message]}),r(Cr,{loading:o,onSubmit:({email:s,password:c})=>i({variables:{input:{email:s,password:c}}})})]})}const Lr=M().shape({email:D().email("Must be a valid email").required("Email is required"),password:D().required("Password is required")});function Ir({loading:e,onSubmit:n}){const{register:i,handleSubmit:o,formState:{errors:t}}=B({mode:"onTouched",resolver:Y(Lr)});return r("form",{onSubmit:o(n),children:a(u,{direction:"column",gap:"16",children:[r(A,{type:"text",label:"Email",placeholder:"example@gmail.com",error:t.email?.message,required:!0,...i("email")}),r(A,{type:"password",label:"Password",error:t.password?.message,required:!0,...i("password")}),r(N,{type:"submit",loading:e,children:"Sign up"})]})})}function Er(){const e=T(),[n,{loading:i,error:o}]=He({onError:t=>console.error(t),onCompleted:()=>e("/")});return a(S,{children:[r(y,{as:"h1",size:"32",children:"Sign up"}),o&&a(E,{children:["Error: ",o.message]}),r(Ir,{loading:i,onSubmit:({email:t,password:s})=>n({variables:{input:{email:t,password:s}}})})]})}function U(){return r(S,{children:r("p",{children:"Loading..."})})}M().shape({name:D(),level:ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});const Ar=l.ul`
  margin-left: 2rem;
`;function Rr(){const{data:e,loading:n,error:i}=er(),[o,{loading:t,error:s}]=Qe({onError:c=>console.error(c),update(c,{data:m}){c.modify({fields:{characters(p=[]){const h=c.writeFragment({data:m?.createCharacter.character,fragment:$`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...p,h]}}})}});return n?r(U,{}):i||!e?a(E,{children:["Error: ",i&&i.message]}):a(S,{children:[r(y,{as:"h1",size:"32",children:"Characters"}),s&&a(E,{children:["Error: ",s?.message]}),!1,r(Ar,{children:e.characters.map(({id:c,name:m})=>r("li",{children:r(j,{to:`/characters/${c}`,children:m})},c))})]})}const de="active",ue=l(y).attrs({forwardedAs:j})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Dr=l(ue).attrs({forwardedAs:Ae})`
  &.${de} {
    font-weight: 600;
    text-decoration: underline;
  }
`,me=({children:e,...n})=>r(ue,{...n,children:e}),Fr=({children:e,...n})=>r(Dr,{className:({isActive:i})=>i?de:"",...n,children:e}),re=l(Fr)`
  padding: 11.5px 16px;
`;function _r({name:e}){const{characterId:n}=F();return n?a(u,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[r(me,{size:"24",to:"/characters",children:"Characters"}),r(y,{size:"24",children:"/"}),r(me,{size:"24",to:`/characters/${n}`,children:e??"Loading..."})]}):null}const zr=l(u).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function jr(){const{characterId:e}=F();return e?a(zr,{children:[r(re,{to:"",end:!0,children:"Summary"}),r(re,{to:"details",children:"Details"}),r(re,{to:"race",children:"Race"})]}):null}function Tr({name:e}){return a(ce,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[r(_r,{name:e}),r(jr,{})]})}function Or(){const{characterId:e}=F(),{data:n,loading:i,error:o}=V({variables:{id:String(e)}});if(i)return r(U,{});if(o||!n?.character)return r(P,{message:o?.message});const{character:t}=n;return a(O,{children:[r(Tr,{name:t.name}),r(Re,{})]})}const Nr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Pr=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,qr=l.textarea`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
  /* TODO: Pass this in as a conditional prop */
  resize: none;

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`,W=X.forwardRef(({name:e,label:n,error:i,rows:o=4,required:t=!1,...s},c)=>a(Nr,{children:[r(ee,{htmlFor:e,required:t,children:n}),i&&r(Pr,{children:i}),r(qr,{id:e,name:e,rows:o,"aria-label":n,"aria-required":t,ref:c,...s})]})),Mr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Br=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Vr=l.select`
  display: inline-block;
  padding: 5px 2rem 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:n})=>e?n.colors.red500:n.colors.black};

  /* Custom arrow */
  color: ${({theme:e})=>e.colors.black};
  /* TODO: refactor to use SVG/Icon component */
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  appearance: none;

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;
`,pe=X.forwardRef(({name:e,label:n,error:i,required:o=!1,children:t,...s},c)=>a(Mr,{children:[r(ee,{htmlFor:e,required:o,children:n}),i&&r(Br,{children:i}),r(Vr,{id:e,name:e,"aria-label":n,"aria-required":o,$error:!!i,ref:c,...s,children:t})]}));function he({name:e,loading:n,onReset:i}){return a(u,{alignItems:"center",children:[r(y,{as:"h1",size:"32",children:e}),a(ce,{justifyContent:"flex-end",gap:"4",children:[r(N,{type:"submit",loading:n,children:"Save"}),r(N,{variant:"secondary",onClick:i,children:"Reset"})]})]})}const ge=l(u).attrs({forwardedAs:"section",direction:"column",gap:"16",flexGrow:1})`
  width: auto;
`,Qr=M().shape({name:D(),level:ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Ur({name:e,level:n,alignmentId:i,background:o,traits:t,ideals:s,bonds:c,flaws:m,alignments:p,loading:h,onCancel:v,onSubmit:d}){const{register:g,handleSubmit:L,formState:{errors:f}}=B({mode:"onTouched",defaultValues:{name:e,level:n,alignmentId:i,background:o,traits:t,ideals:s,bonds:c,flaws:m},resolver:Y(Qr)});return r("form",{onSubmit:L(d),children:a(u,{direction:"column",gap:"16",children:[r(he,{name:"Details",loading:h,onReset:v}),a(u,{wrap:"wrap",gap:"16",justifyContent:"center",children:[a(ge,{children:[r(A,{type:"text",label:"Name",placeholder:"Untitled",error:f.name?.message,...g("name")}),r(A,{type:"number",label:"Level",error:f.level?.message,...g("level",{valueAsNumber:!0})}),r(A,{type:"text",label:"Background",placeholder:"Acolyte",error:f.background?.message,...g("background")}),a(pe,{label:"Alignment",error:f.alignmentId?.message,...g("alignmentId"),children:[r("option",{value:"",disabled:!0}),p.map(({id:I,name:R})=>r("option",{value:I,children:R},I))]})]}),a(ge,{children:[r(W,{label:"Personality traits",error:f.traits?.message,...g("traits")}),r(W,{label:"Ideals",error:f.ideals?.message,...g("ideals")}),r(W,{label:"Bonds",error:f.bonds?.message,...g("bonds")}),r(W,{label:"Flaws",error:f.flaws?.message,...g("flaws")})]})]})]})})}function Wr(){const e=T(),{characterId:n}=F(),{data:i,loading:o,error:t}=V({variables:{id:String(n)}}),{data:s,loading:c,error:m}=Xe(),[p,{loading:h,error:v}]=ie({onError:g=>console.error(g)});if(t||m||!i?.character||!s)return r(P,{message:t?.message});const{character:d}=i;return a(S,{children:[v&&r(E,{children:v.message}),r(Ur,{name:d.name,level:d.level,alignmentId:d.alignment?.id??"",background:d.background??"",traits:d.traits??"",ideals:d.ideals??"",bonds:d.bonds??"",flaws:d.flaws??"",alignments:s.alignments,loading:h,onCancel:()=>e(`/characters/${n}`),onSubmit:({name:g,level:L,background:f,alignmentId:I,traits:R,ideals:b,bonds:H,flaws:K})=>{p({variables:{input:{id:String(n),name:g||void 0,level:L||void 0,background:f||void 0,alignmentId:I||void 0,traits:R||void 0,ideals:b||void 0,bonds:H||void 0,flaws:K||void 0}}}),e(`/characters/${n}`)}})]})}const Gr=l.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,Hr=l.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,Kr=l.span`
  text-transform: uppercase;
`,Jr=l.h3`
  font-size: 24px;
  line-height: 32px;
`;function Xr({ability:e}){const{id:n,name:i,score:o,modifier:t}=e;return a(Hr,{children:[r(Kr,{children:i.slice(0,3)}),a(Jr,{children:[t>=0?"+":"-",t]}),r("span",{children:o})]},n)}function Yr({abilities:e}){return a(u,{as:"section",direction:"column",gap:"16",children:[r(y,{as:"h3",weight:"600",children:"Abilities"}),r(Gr,{children:e.map(n=>r(Xr,{ability:n},n.id))})]})}const Zr=l.ul`
  margin-left: 1.5rem;
`,en=l.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,rn=l.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,nn=l.span`
  text-decoration: underline;
`,tn=l.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function on({skill:e}){const{id:n,name:i,modifier:o,ability:t}=e;return r(en,{children:a(rn,{children:[a(nn,{children:[o>=0?"+":"-",o]}),r("span",{children:i}),a(tn,{children:["(",t.name.slice(0,3),")"]})]})},n)}function an({skills:e}){return a(u,{as:"section",direction:"column",gap:"16",children:[r(y,{weight:"600",children:"Skills"}),r(Zr,{children:e.map(n=>r(on,{skill:n},n.id))})]})}function sn(){const{characterId:e}=F(),{data:n,loading:i,error:o}=V({variables:{id:String(e)},skip:!e});if(i)return r(U,{});if(o||!n?.character)return r(P,{message:o?.message});const{character:t}=n;return a(S,{children:[r(Yr,{abilities:t.abilities}),r(an,{skills:t.skills})]})}function G({name:e,description:n}){return n?a(u,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[r(y,{weight:"600",children:e}),r(y,{children:n})]}):null}const cn=l.ul`
  margin-left: 1.5rem;
`;function ln({raceId:e,races:n,loading:i,onChange:o,onCancel:t,onSubmit:s}){const{register:c,handleSubmit:m,formState:{errors:p}}=B({mode:"onTouched",defaultValues:{raceId:e}});return r("form",{onSubmit:m(s),children:a(u,{direction:"column",gap:"16",children:[r(he,{name:"Race",loading:i,onReset:t}),r(u,{gap:"16",justifyContent:"center",children:r(u,{as:"section",direction:"column",gap:"16",flexGrow:1,children:a(pe,{label:"Race",error:p.raceId?.message,...c("raceId",{onChange:h=>o(h.target.value)}),children:[r("option",{value:"",disabled:!0}),n.map(({id:h,name:v})=>r("option",{value:h,children:v},h))]})})})]})})}function dn(){const[e,n]=k.exports.useState(""),i=T(),{characterId:o}=F(),{data:t,loading:s,error:c}=V({variables:{id:String(o)}}),{data:m,loading:p,error:h}=ar(),[v,{data:d,loading:g,error:L}]=ir();k.exports.useEffect(()=>{n(t?.character?.race?.id??"")},[t]),k.exports.useEffect(()=>{!e||v({variables:{id:e}})},[e]),k.exports.useEffect(()=>{console.log(d?.race)},[d]);const[f,{loading:I,error:R}]=ie({onError:b=>console.error(b)});return s||p?r(U,{}):c||h||!t?.character||!m?r(P,{message:c?.message}):a(S,{children:[r(ln,{raceId:t.character.race?.id,races:m.races,onChange:b=>n(b),onCancel:()=>i(`/characters/${o}`),onSubmit:({raceId:b})=>{f({variables:{input:{id:String(o),raceId:b||void 0}}}),i(`/characters/${o}`)}}),a(u,{direction:"column",gap:"16",mt:"16",children:[L&&r(E,{children:"Race Not Found"}),d?.race&&a(u,{as:"article",direction:"column",gap:"16",children:[a(le,{children:[r(y,{as:"h2",size:"24",children:"Ability Score Improvements"}),r(cn,{children:d.race.abilityScoreIncreases.map(b=>r("li",{children:`${b.ability.name} ${b.increase>=0?"+":"-"}${b.increase}`},b.id))})]}),a(le,{children:[r(y,{as:"h2",size:"24",children:"Details"}),d.race.description&&r(y,{children:d.race.description}),r(G,{name:"Age",description:d.race.age}),r(G,{name:"Alignment",description:d.race.alignment}),r(G,{name:"Size",description:d.race.size}),r(G,{name:"Speed",description:d.race.speed})]})]})]})]})}function un(){const{isLoggedIn:e}=Z();return a(De,{basename:"/dungeonist/",children:[r(dr,{}),a(Fe,{children:[r(C,{path:"/",element:r(fr,{})}),e?a(O,{children:[r(C,{path:"/characters",element:r(Rr,{})}),a(C,{path:"/characters/:characterId",element:r(Or,{}),children:[r(C,{index:!0,element:r(sn,{})}),r(C,{path:"details",element:r(Wr,{})}),r(C,{path:"race",element:r(dn,{})})]})]}):a(O,{children:[r(C,{path:"/signup",element:r(Er,{})}),r(C,{path:"/login",element:r(Sr,{})})]}),r(C,{path:"*",element:r(P,{})})]})]})}const mn="modulepreload",fe={},pn="/dungeonist/",_=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${pn}${o}`,o in fe)return;fe[o]=!0;const t=o.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":mn,t||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),t)return new Promise((m,p)=>{c.addEventListener("load",m),c.addEventListener("error",p)})})).then(()=>n())},be={"../mocks/Alignments.ts":()=>_(()=>import("./Alignments.aa735fe8.js"),["assets/Alignments.aa735fe8.js","assets/vendor.ff8afe3d.js"]),"../mocks/Character.ts":()=>_(()=>import("./Character.b12517ce.js"),["assets/Character.b12517ce.js","assets/vendor.ff8afe3d.js"]),"../mocks/Characters.ts":()=>_(()=>import("./Characters.0e232560.js"),["assets/Characters.0e232560.js","assets/vendor.ff8afe3d.js"]),"../mocks/Me.ts":()=>_(()=>import("./Me.c561375f.js"),["assets/Me.c561375f.js","assets/vendor.ff8afe3d.js"]),"../mocks/Race.ts":()=>_(()=>import("./Race.7fd24990.js"),["assets/Race.7fd24990.js","assets/vendor.ff8afe3d.js"]),"../mocks/Races.ts":()=>_(()=>import("./Races.d95748a5.js"),["assets/Races.d95748a5.js","assets/vendor.ff8afe3d.js"])};let xe=[];for(const e in be){const n=await Promise.resolve(be[e]().then(i=>i.handlers));xe.push(...n)}const hn=_e({uri:"https://example.com"}),gn=ze((e,{headers:n})=>{const i=localStorage.getItem("token");return{headers:{...n,...i&&{authorization:`Bearer ${i}`}}}}),fn=new je({link:gn.concat(hn),cache:new Te});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),Oe(...xe).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});Ne.render(r(Pe,{client:fn,children:r(Be,{children:a(qe,{theme:pr,children:[r(ur,{}),r(un,{})]})})}),document.getElementById("root"));
