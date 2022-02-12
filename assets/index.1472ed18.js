var ze=Object.defineProperty,Ee=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var ge=(e,i,a)=>i in e?ze(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,c=(e,i)=>{for(var a in i||(i={}))fe.call(i,a)&&ge(e,a,i[a]);if(K)for(var a of K(i))pe.call(i,a)&&ge(e,a,i[a]);return e},S=(e,i)=>Ee(e,De(i));var _=(e,i)=>{var a={};for(var t in e)fe.call(e,t)&&i.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&K)for(var t of K(e))i.indexOf(t)<0&&pe.call(e,t)&&(a[t]=e[t]);return a};import{j as oe,r as L,g as C,u as j,a as J,b as Re,s as d,L as B,c as G,W as Te,C as Fe,R as se,d as le,e as W,f as X,o as ce,N as Pe,h as q,O as Me,i as Ne,B as He,k as qe,l as z,m as Ye,n as Oe,p as je,A as Be,I as Ge,q as We,t as Qe,v as Ue,F as Ve}from"./vendor.67cf4be8.js";const Ke=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};Ke();const r=oe.exports.jsx,s=oe.exports.jsxs,Q=oe.exports.Fragment,ye=L.exports.createContext({});function Je({children:e}){const[i,a]=L.exports.useState(null),[t,n]=L.exports.useState(localStorage.getItem("token"));function o({token:m,user:y}){a(y),n(m),localStorage.setItem("token",m)}function l(){a(null),n(null),localStorage.removeItem("token")}const h=L.exports.useMemo(()=>({user:i,token:t,isLoggedIn:!!t,login:o,logout:l}),[i,t,o,l]);return r(ye.Provider,{value:h,children:e})}function de(){return L.exports.useContext(ye)}const A={},Xe=C`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Ze(e){const i=c(c({},A),e);return J(Xe,i)}const ei=C`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function ii(e){const i=c(c({},A),e);return J(ei,i)}const ri=C`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function ai(e){const i=c(c({},A),e);return J(ri,i)}const ni=C`
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
    `;function be(e){const i=c(c({},A),e);return J(ni,i)}const ti=C`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function oi(e){const i=c(c({},A),e);return j(ti,i)}const si=C`
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
    `;function Z(e){const i=c(c({},A),e);return j(si,i)}const li=C`
    query Characters {
  characters {
    id
    name
  }
}
    `;function ci(e){const i=c(c({},A),e);return j(li,i)}const di=C`
    query Me {
  me {
    id
    email
  }
}
    `;function ui(e){const i=c(c({},A),e);return j(di,i)}const mi=C`
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
    `;function hi(e){const i=c(c({},A),e);return Re(mi,i)}const fi=C`
    query Races {
  races {
    id
    name
  }
}
    `;function pi(e){const i=c(c({},A),e);return j(fi,i)}const gi=d.button`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  color: ${({$variant:e,theme:i})=>e==="primary"?i.colors.white:i.colors.black};
  background: ${({$variant:e,theme:i})=>e==="primary"?i.colors.blue400:"none"};
  border: 1px solid
    ${({$variant:e,theme:i})=>e==="primary"?i.colors.blue600:i.colors.black};

  &:hover,
  &:focus {
    background: ${({$variant:e,theme:i})=>e==="primary"?i.colors.blue500:i.colors.gray200};
  }
`;function U(h){var m=h,{as:e="button",type:i="button",variant:a="primary",loading:t=!1,disabled:n=!1,children:o}=m,l=_(m,["as","type","variant","loading","disabled","children"]);return r(gi,S(c({as:e,type:e==="button"?i:void 0,$variant:a,disabled:t||n},l),{children:o&&t?r("div",{children:'"Loading..."'}):o}))}const yi=d.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.colors.gray700};
`,bi=d.div`
  flex: 1;
  max-width: 768px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`,ve=d.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`,ee=d(B)`
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
`,xe=d(U).attrs({variant:"secondary"})`
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
`;function vi(){const e=G(),{isLoggedIn:i,logout:a}=de(),{data:t,loading:n}=ui();return n?r("p",{children:"Loading..."}):r(yi,{children:r(bi,{children:i?s(Q,{children:[r(ee,{to:"/",children:"Dungeonist"}),s(ve,{children:[r("li",{children:r(ee,{to:"/characters",children:"Characters"})}),r("li",{children:r(xe,{disabled:!0,onClick:()=>{a(),e("/")},children:"Log out"})})]})]}):s(Q,{children:[r(ee,{to:"/",children:"Dungeonist"}),s(ve,{children:[r("li",{children:r(ee,{to:"/login",children:"Log in"})}),r("li",{children:r(xe,{as:B,to:"/signup",children:"Sign up"})})]})]})})})}const xi=Te`
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
`,we={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},wi={sm:640,md:768,lg:1024,xl:1280},$i={colors:we,breakpoints:wi};function Ci(e){if(e!=="none")return`${e}px`}function v(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const ki=d.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>Ci(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>v(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${v(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${v(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>v(e)};
  margin-right: ${({$mr:e})=>v(e)};
  margin-bottom: ${({$mb:e})=>v(e)};
  margin-left: ${({$ml:e})=>v(e)};
  /* padding */
  padding: ${({$p:e})=>v(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${v(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${v(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>v(e)};
  padding-right: ${({$pr:e})=>v(e)};
  padding-bottom: ${({$pb:e})=>v(e)};
  padding-left: ${({$pl:e})=>v(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?we[e]:void 0};
`;function p(kr){var he=kr,{direction:e="row",wrap:i="nowrap",justifyContent:a="flex-start",alignItems:t="stretch",alignContent:n="normal",gap:o="none",flexGrow:l=0,flexShrink:h=1,flexBasis:m="auto",alignSelf:y="auto",m:w="none",mx:u="none",my:b="none",mt:D="none",mr:g="none",mb:R="none",ml:T="none",p:k="none",px:f="none",py:$="none",pt:I="none",pr:M="none",pb:N="none",pl:H="none",background:O,children:ne}=he,te=_(he,["direction","wrap","justifyContent","alignItems","alignContent","gap","flexGrow","flexShrink","flexBasis","alignSelf","m","mx","my","mt","mr","mb","ml","p","px","py","pt","pr","pb","pl","background","children"]);return r(ki,S(c({$flexDirection:e,$flexWrap:i,$justifyContent:a,$alignItems:t,$gap:o,$flexGrow:l,$flexShrink:h,$flexBasis:m,$alignSelf:y,$m:w,$mx:u,$my:b,$mt:D,$mr:g,$mb:R,$ml:T,$p:k,$px:f,$py:$,$pt:I,$pr:M,$pb:N,$pl:H,$background:O},te),{children:ne}))}const $e=d(p)`
  max-width: 100%;
`;function E({children:e}){return r(p,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function Ce({children:e}){return r(p,{direction:"column",gap:"16",flexGrow:1,children:e})}function Si(){return r(E,{children:r("h1",{children:"Hello World"})})}const _i=d.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function F({children:e}){return r(_i,{children:e})}const Ai=d.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function x(n){var o=n,{size:e="16",weight:i="400",children:a}=o,t=_(o,["size","weight","children"]);return r(Ai,S(c({$size:e,$weight:i},t),{children:a}))}function V({message:e}){return s(E,{children:[r(x,{as:"h1",size:"32",children:"404"}),r(F,{children:e||"Not Found"}),r(B,{to:"/",children:"Home"})]})}const Ii=d.label`
  display: block;

  ${({$required:e})=>e&&Fe`
      ::after {
        content: "*";
      }
    `};
`;function ue(t){var n=t,{required:e=!1,children:i}=n,a=_(n,["required","children"]);return r(Ii,S(c({$required:e},a),{children:i}))}const Li=d.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,zi=d.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Ei=d.input`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:i})=>e?i.colors.red500:i.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`,P=se.forwardRef((h,l)=>{var m=h,{name:e,label:i,type:a,error:t,required:n=!1}=m,o=_(m,["name","label","type","error","required"]);return s(Li,{children:[r(ue,{htmlFor:e,required:n,children:i}),t&&r(zi,{children:t}),r(Ei,c({id:e,name:e,type:a,"aria-label":i,"aria-required":n,$error:!!t,ref:l},o))]})}),Di=le().shape({email:W().email("Must be a valid email").required("Email is required"),password:W().required("Password is required")});function Ri({loading:e,onSubmit:i}){var o,l;const{register:a,handleSubmit:t,formState:{errors:n}}=X({mode:"onTouched",resolver:ce(Di)});return r("form",{onSubmit:t(i),children:s(p,{direction:"column",gap:"16",children:[r(P,c({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=n.email)==null?void 0:o.message,required:!0},a("email"))),r(P,c({type:"password",label:"Password",error:(l=n.password)==null?void 0:l.message,required:!0},a("password"))),r(U,{type:"submit",loading:e,children:"Log in"})]})})}function Ti(){const e=G(),{login:i}=de(),[a,{loading:t,error:n}]=ii({onError:o=>console.error(o),onCompleted:({login:o})=>{i(o),e("/")},update(o,{data:l}){o.modify({fields:{me(){return l==null?void 0:l.login.user}}})}});return s(E,{children:[r(x,{as:"h1",size:"32",children:"Log in"}),n&&s(F,{children:["Error: ",n.message]}),r(Ri,{loading:t,onSubmit:({email:o,password:l})=>a({variables:{input:{email:o,password:l}}})})]})}const Fi=le().shape({email:W().email("Must be a valid email").required("Email is required"),password:W().required("Password is required")});function Pi({loading:e,onSubmit:i}){var o,l;const{register:a,handleSubmit:t,formState:{errors:n}}=X({mode:"onTouched",resolver:ce(Fi)});return r("form",{onSubmit:t(i),children:s(p,{direction:"column",gap:"16",children:[r(P,c({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=n.email)==null?void 0:o.message,required:!0},a("email"))),r(P,c({type:"password",label:"Password",error:(l=n.password)==null?void 0:l.message,required:!0},a("password"))),r(U,{type:"submit",loading:e,children:"Sign up"})]})})}function Mi(){const e=G(),[i,{loading:a,error:t}]=ai({onError:n=>console.error(n),onCompleted:()=>e("/")});return s(E,{children:[r(x,{as:"h1",size:"32",children:"Sign up"}),t&&s(F,{children:["Error: ",t.message]}),r(Pi,{loading:a,onSubmit:({email:n,password:o})=>i({variables:{input:{email:n,password:o}}})})]})}function ie(){return r(E,{children:r("p",{children:"Loading..."})})}const Ni=d.ul`
  margin-left: 2rem;
`;function Hi(){const{data:e,loading:i,error:a}=ci(),[t,{loading:n,error:o}]=Ze({onError:l=>console.error(l),update(l,{data:h}){l.modify({fields:{characters(m=[]){const y=l.writeFragment({data:h==null?void 0:h.createCharacter.character,fragment:C`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...m,y]}}})}});return i?r(ie,{}):a||!e?s(F,{children:["Error: ",a&&a.message]}):s(E,{children:[r(x,{as:"h1",size:"32",children:"Characters"}),o&&s(F,{children:["Error: ",o==null?void 0:o.message]}),r(Ni,{children:e.characters.map(({id:l,name:h})=>r("li",{children:r(B,{to:`/characters/${l}`,children:h})},l))})]})}const ke="active",Se=d(x).attrs({forwardedAs:B})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,qi=d(Se).attrs({forwardedAs:Pe})`
  &.${ke} {
    font-weight: 600;
    text-decoration: underline;
  }
`,_e=a=>{var t=a,{children:e}=t,i=_(t,["children"]);return r(Se,S(c({},i),{children:e}))},Yi=a=>{var t=a,{children:e}=t,i=_(t,["children"]);return r(qi,S(c({className:({isActive:n})=>n?ke:""},i),{children:e}))},me=d(Yi)`
  padding: 11.5px 16px;
`;function Oi({name:e}){const{characterId:i}=q();return i?s(p,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[r(_e,{size:"24",to:"/characters",children:"Characters"}),r(x,{size:"24",children:"/"}),r(_e,{size:"24",to:`/characters/${i}`,children:e!=null?e:"Loading..."})]}):null}const ji=d(p).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function Bi(){const{characterId:e}=q();return e?s(ji,{children:[r(me,{to:"",end:!0,children:"Summary"}),r(me,{to:"details",children:"Details"}),r(me,{to:"race",children:"Race"})]}):null}function Gi({name:e}){return s($e,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[r(Oi,{name:e}),r(Bi,{})]})}function Wi(){const{characterId:e}=q(),{data:i,loading:a,error:t}=Z({variables:{id:String(e)}});if(a)return r(ie,{});if(t||!(i==null?void 0:i.character))return r(V,{message:t==null?void 0:t.message});const{character:n}=i;return s(Q,{children:[r(Gi,{name:n.name}),r(Me,{})]})}const Qi=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ui=d.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Vi=d.textarea`
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
`,re=se.forwardRef((h,l)=>{var m=h,{name:e,label:i,error:a,rows:t=4,required:n=!1}=m,o=_(m,["name","label","error","rows","required"]);return s(Qi,{children:[r(ue,{htmlFor:e,required:n,children:i}),a&&r(Ui,{children:a}),r(Vi,c({id:e,name:e,rows:t,"aria-label":i,"aria-required":n,ref:l},o))]})}),Ki=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ji=d.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Xi=d.select`
  display: inline-block;
  padding: 5px 2rem 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:i})=>e?i.colors.red500:i.colors.black};

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
`,Ae=se.forwardRef((h,l)=>{var m=h,{name:e,label:i,error:a,required:t=!1,children:n}=m,o=_(m,["name","label","error","required","children"]);return s(Ki,{children:[r(ue,{htmlFor:e,required:t,children:i}),a&&r(Ji,{children:a}),r(Xi,S(c({id:e,name:e,"aria-label":i,"aria-required":t,$error:!!a,ref:l},o),{children:n}))]})});function Ie({name:e,loading:i,onReset:a}){return s(p,{alignItems:"center",children:[r(x,{as:"h1",size:"32",children:e}),s($e,{justifyContent:"flex-end",gap:"4",children:[r(U,{type:"submit",loading:i,children:"Save"}),r(U,{variant:"secondary",onClick:a,children:"Reset"})]})]})}const Le=d(p).attrs({forwardedAs:"section",direction:"column",gap:"16",flexGrow:1})`
  width: auto;
`,Zi=le().shape({name:W(),level:Ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function er({name:e,level:i,alignmentId:a,background:t,traits:n,ideals:o,bonds:l,flaws:h,alignments:m,loading:y,onCancel:w,onSubmit:u}){var R,T,k,f,$,I,M,N;const{register:b,handleSubmit:D,formState:{errors:g}}=X({mode:"onTouched",defaultValues:{name:e,level:i,alignmentId:a,background:t,traits:n,ideals:o,bonds:l,flaws:h},resolver:ce(Zi)});return r("form",{onSubmit:D(u),children:s(p,{direction:"column",gap:"16",children:[r(Ie,{name:"Details",loading:y,onReset:w}),s(p,{wrap:"wrap",gap:"16",justifyContent:"center",children:[s(Le,{children:[r(P,c({type:"text",label:"Name",placeholder:"Untitled",error:(R=g.name)==null?void 0:R.message},b("name"))),r(P,c({type:"number",label:"Level",error:(T=g.level)==null?void 0:T.message},b("level",{valueAsNumber:!0}))),r(P,c({type:"text",label:"Background",placeholder:"Acolyte",error:(k=g.background)==null?void 0:k.message},b("background"))),s(Ae,S(c({label:"Alignment",error:(f=g.alignmentId)==null?void 0:f.message},b("alignmentId")),{children:[r("option",{value:"",selected:!0,disabled:!0}),m.map(({id:H,name:O})=>r("option",{value:H,children:O},H))]}))]}),s(Le,{children:[r(re,c({label:"Personality traits",error:($=g.traits)==null?void 0:$.message},b("traits"))),r(re,c({label:"Ideals",error:(I=g.ideals)==null?void 0:I.message},b("ideals"))),r(re,c({label:"Bonds",error:(M=g.bonds)==null?void 0:M.message},b("bonds"))),r(re,c({label:"Flaws",error:(N=g.flaws)==null?void 0:N.message},b("flaws")))]})]})]})})}function ir(){var b,D,g,R,T,k,f;const e=G(),{characterId:i}=q(),{data:a,loading:t,error:n}=Z({variables:{id:String(i)}}),{data:o,loading:l,error:h}=oi(),[m,{loading:y,error:w}]=be({onError:$=>console.error($)});if(n||h||!(a==null?void 0:a.character)||!o)return r(V,{message:n==null?void 0:n.message});const{character:u}=a;return s(E,{children:[w&&r(F,{children:w.message}),r(er,{name:u.name,level:u.level,alignmentId:(D=(b=u.alignment)==null?void 0:b.id)!=null?D:"",background:(g=u.background)!=null?g:"",traits:(R=u.traits)!=null?R:"",ideals:(T=u.ideals)!=null?T:"",bonds:(k=u.bonds)!=null?k:"",flaws:(f=u.flaws)!=null?f:"",alignments:o.alignments,loading:y,onCancel:()=>e(`/characters/${i}`),onSubmit:({name:$,level:I,background:M,alignmentId:N,traits:H,ideals:O,bonds:ne,flaws:te})=>{m({variables:{input:{id:String(i),name:$||void 0,level:I||void 0,background:M||void 0,alignmentId:N||void 0,traits:H||void 0,ideals:O||void 0,bonds:ne||void 0,flaws:te||void 0}}}),e(`/characters/${i}`)}})]})}const rr=d.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,ar=d.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,nr=d.span`
  text-transform: uppercase;
`,tr=d.h3`
  font-size: 24px;
  line-height: 32px;
`;function or({ability:e}){const{id:i,name:a,score:t,modifier:n}=e;return s(ar,{children:[r(nr,{children:a.slice(0,3)}),s(tr,{children:[n>=0?"+":"-",n]}),r("span",{children:t})]},i)}function sr({abilities:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[r(x,{as:"h3",weight:"600",children:"Abilities"}),r(rr,{children:e.map(i=>r(or,{ability:i}))})]})}const lr=d.ul`
  margin-left: 1.5rem;
`,cr=d.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,dr=d.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,ur=d.span`
  text-decoration: underline;
`,mr=d.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function hr({skill:e}){const{id:i,name:a,modifier:t,ability:n}=e;return r(cr,{children:s(dr,{children:[s(ur,{children:[t>=0?"+":"-",t]}),r("span",{children:a}),s(mr,{children:["(",n.name.slice(0,3),")"]})]})},i)}function fr({skills:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[r(x,{weight:"600",children:"Skills"}),r(lr,{children:e.map(i=>r(hr,{skill:i}))})]})}function pr(){const{characterId:e}=q(),{data:i,loading:a,error:t}=Z({variables:{id:String(e)},skip:!e});if(a)return r(ie,{});if(t||!(i==null?void 0:i.character))return r(V,{message:t==null?void 0:t.message});const{character:n}=i;return s(E,{children:[r(sr,{abilities:n.abilities}),r(fr,{skills:n.skills})]})}function ae({name:e,description:i}){return i?s(p,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[r(x,{weight:"600",children:e}),r(x,{children:i})]}):null}const gr=d.ul`
  margin-left: 1.5rem;
`;function yr({raceId:e,races:i,loading:a,onChange:t,onCancel:n,onSubmit:o}){var y;const{register:l,handleSubmit:h,formState:{errors:m}}=X({mode:"onTouched",defaultValues:{raceId:e}});return r("form",{onSubmit:h(o),children:s(p,{direction:"column",gap:"16",children:[r(Ie,{name:"Race",loading:a,onReset:n}),r(p,{gap:"16",justifyContent:"center",children:r(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:s(Ae,S(c({label:"Race",error:(y=m.raceId)==null?void 0:y.message},l("raceId",{onChange:w=>t(w.target.value)})),{children:[r("option",{value:"",selected:!0,disabled:!0}),i.map(({id:w,name:u})=>r("option",{value:w,children:u},w))]}))})})]})})}function br(){var k;const[e,i]=L.exports.useState(""),a=G(),{characterId:t}=q(),{data:n,loading:o,error:l}=Z({variables:{id:String(t)}}),{data:h,loading:m,error:y}=pi(),[w,{data:u,loading:b,error:D}]=hi();L.exports.useEffect(()=>{var f,$,I;i((I=($=(f=n==null?void 0:n.character)==null?void 0:f.race)==null?void 0:$.id)!=null?I:"")},[n]),L.exports.useEffect(()=>{!e||w({variables:{id:e}})},[e]),L.exports.useEffect(()=>{console.log(u==null?void 0:u.race)},[u]);const[g,{loading:R,error:T}]=be({onError:f=>console.error(f)});return o||m?r(ie,{}):l||y||!(n==null?void 0:n.character)||!h?r(V,{message:l==null?void 0:l.message}):s(E,{children:[r(yr,{raceId:(k=n.character.race)==null?void 0:k.id,races:h.races,onChange:f=>i(f),onCancel:()=>a(`/characters/${t}`),onSubmit:({raceId:f})=>{g({variables:{input:{id:String(t),raceId:f||void 0}}}),a(`/characters/${t}`)}}),s(p,{direction:"column",gap:"16",mt:"16",children:[D&&r(F,{children:"Race Not Found"}),(u==null?void 0:u.race)&&s(p,{as:"article",direction:"column",gap:"16",children:[s(Ce,{children:[r(x,{as:"h2",size:"24",children:"Ability Score Improvements"}),r(gr,{children:u.race.abilityScoreIncreases.map(f=>r("li",{children:`${f.ability.name} ${f.increase>=0?"+":"-"}${f.increase}`},f.id))})]}),s(Ce,{children:[r(x,{as:"h2",size:"24",children:"Details"}),u.race.description&&r(x,{children:u.race.description}),r(ae,{name:"Age",description:u.race.age}),r(ae,{name:"Alignment",description:u.race.alignment}),r(ae,{name:"Size",description:u.race.size}),r(ae,{name:"Speed",description:u.race.speed})]})]})]})]})}function vr(){const{isLoggedIn:e}=de();return s(He,{basename:"/dungeonist/",children:[r(vi,{}),s(qe,{children:[r(z,{path:"/",element:r(Si,{})}),e?s(Q,{children:[r(z,{path:"/characters",element:r(Hi,{})}),s(z,{path:"/characters/:characterId",element:r(Wi,{}),children:[r(z,{index:!0,element:r(pr,{})}),r(z,{path:"details",element:r(ir,{})}),r(z,{path:"race",element:r(br,{})})]})]}):s(Q,{children:[r(z,{path:"/signup",element:r(Mi,{})}),r(z,{path:"/login",element:r(Ti,{})})]}),r(z,{path:"*",element:r(V,{})})]})]})}const Y=Ye.link("https://example.com"),xr=[Y.query("Me",(e,i,a)=>i(a.data({me:{id:"1",email:"luke.skywalker@gmail.com",__typename:"User"},__typename:"Query"}))),Y.query("Characters",(e,i,a)=>i(a.data({characters:[{id:"1",name:"Obi-Wan Kenobi",__typename:"Character"}]}))),Y.query("Alignments",(e,i,a)=>i(a.data({alignments:[{id:"1",name:"Lawful Good"},{id:"2",name:"Neutral Good"},{id:"3",name:"Chaotic Good"},{id:"4",name:"Lawful Neutral"},{id:"5",name:"Neutral"},{id:"6",name:"Chaotic Neutral"},{id:"7",name:"Lawful Evil"},{id:"8",name:"Neutral Evil"},{id:"9",name:"Chaotic Evil"}],__typename:"Query"}))),Y.query("Races",(e,i,a)=>i(a.data({races:[{id:"1",name:"Dwarf"},{id:"2",name:"Elf"},{id:"3",name:"Halfling"},{id:"4",name:"Human"},{id:"5",name:"Dragonborn"},{id:"6",name:"Gnome"},{id:"7",name:"Half-Elf"},{id:"8",name:"Half-Orc"},{id:"9",name:"Tiefling"}]}))),Y.query("Character",(e,i,a)=>i(a.data({character:{id:"1",name:"Obi-Wan Kenobi",level:2,experience:300,inspiration:0,abilities:[{id:"1",name:"Strength",score:11,modifier:0,__typename:"CharacterAbility"},{id:"2",name:"Dexterity",score:11,modifier:0,__typename:"CharacterAbility"},{id:"3",name:"Constitution",score:11,modifier:0,__typename:"CharacterAbility"},{id:"4",name:"Intelligence",score:11,modifier:0,__typename:"CharacterAbility"},{id:"5",name:"Wisdom",score:11,modifier:0,__typename:"CharacterAbility"},{id:"6",name:"Charisma",score:11,modifier:0,__typename:"CharacterAbility"}],skills:[{id:"1",name:"Acrobatics",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"2",name:"Athletics",modifier:0,isProficient:!1,ability:{id:"1",name:"Strength",__typename:"CharacterAbility"}},{id:"3",name:"Animal Handling",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"4",name:"Arcana",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"5",name:"Deception",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"6",name:"History",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"7",name:"Insight",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"8",name:"Intimidation",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"9",name:"Investigation",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"10",name:"Medicine",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"11",name:"Nature",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"12",name:"Perception",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"13",name:"Performance",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"14",name:"Persuasion",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"15",name:"Religion",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"16",name:"Sleight of Hand",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"17",name:"Stealth",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"18",name:"Survival",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}}],alignment:{name:"Lawful Good",id:"1",__typename:"Alignment"},background:"Jedi Master",race:{id:"4",name:"Human",__typename:"CharacterRace"},traits:"",ideals:"",bonds:"",flaws:"",__typename:"Character"},__typename:"Query"}))),Y.query("Race",(e,i,a)=>{if(e.variables.id==="1")return i(a.data({race:{id:"1",name:"Dwarf",description:"Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",age:"Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",alignment:"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",size:"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",speed:"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constitution"},increase:2}],__typename:"Race"}}));if(e.variables.id==="2")return i(a.data({race:{id:"2",name:"Elf",description:"Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",age:"Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",alignment:"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",size:"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constitution"},increase:2}],__typename:"Race"}}));if(e.variables.id==="3")return i(a.data({race:{id:"3",name:"Halfling",description:"Your halfling character has a number of traits in common with all other halflings.",age:"A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",alignment:"Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",size:"Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"2",name:"Dexterity"},increase:2}],__typename:"Race"}}));if(e.variables.id==="4")return i(a.data({race:{id:"4",name:"Human",description:"It's hard to make generalizations about humans, but your human character has these traits.",age:"Humans reach adulthood in their late teens and live less than a century.",alignment:"Humans tend toward no particular alignment. The best and the worst are found among them.",size:"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:1},{id:"2",ability:{id:"2",name:"Dexterity"},increase:1},{id:"3",ability:{id:"3",name:"Constitution"},increase:1},{id:"4",ability:{id:"4",name:"Intelligence"},increase:1},{id:"5",ability:{id:"5",name:"Wisdom"},increase:1},{id:"6",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="5")return i(a.data({race:{id:"5",name:"Dragonborn",description:"Your draconic heritage manifests in a variety of traits you share with other dragonborn.",age:"Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",alignment:"Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",size:"Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="6")return i(a.data({race:{id:"6",name:"Gnome",description:"Your gnome character has certain characteristics in common with all other gnomes.",age:"Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",alignment:"Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",size:"Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"2",ability:{id:"4",name:"Intelligence"},increase:1}],__typename:"Race"}}));if(e.variables.id==="7")return i(a.data({race:{id:"7",name:"Half-Elf",description:"Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",age:"Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",alignment:"Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",size:"Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="8")return i(a.data({race:{id:"8",name:"Half-Orc",description:"Your half-orc character has certain traits deriving from your orc ancestry.",age:"Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",alignment:"Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",size:"Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"2",name:"Constitution"},increase:1}],__typename:"Race"}}));if(e.variables.id==="9")return i(a.data({race:{id:"9",name:"Tiefling",description:"Tieflings share certain racial traits as a result of their infernal descent.",age:"Tieflings mature at the same rate as humans but live a few years longer.",alignment:"Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",size:"Tieflings are about the same size and build as humans. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"4",name:"Intelligence"},increase:1},{id:"2",ability:{id:"6",name:"Charisma"},increase:2}],__typename:"Race"}}))})],wr=Oe({uri:"https://example.com"}),$r=je((e,{headers:i})=>{const a=localStorage.getItem("token");return{headers:c(c({},i),a&&{authorization:`Bearer ${a}`})}}),Cr=new Be({link:$r.concat(wr),cache:new Ge});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),We(...xr).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});Qe.render(r(Ue,{client:Cr,children:r(Je,{children:s(Ve,{theme:$i,children:[r(xi,{}),r(vr,{})]})})}),document.getElementById("root"));
