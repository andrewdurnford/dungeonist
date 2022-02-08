var $e=Object.defineProperty;var O=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))oe.call(t,a)&&ce(e,a,t[a]);if(O)for(var a of O(t))le.call(t,a)&&ce(e,a,t[a]);return e};var v=(e,t)=>{var a={};for(var r in e)oe.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&O)for(var r of O(e))t.indexOf(r)<0&&le.call(e,r)&&(a[r]=e[r]);return a};import{r as x,g as $,u as X,a as B,b as Ce,s,R as d,L as M,c as N,W as ke,C as Se,d as Z,e as H,f as G,o as ee,N as _e,h as P,O as Ie,i as Ae,B as Le,j as ze,k as C,l as Te,m as De,n as Fe,A as Pe,I as Me,p as Ne,q as He,t as Ye,F as qe}from"./vendor.a3a24f12.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};Oe();const se=x.exports.createContext({});function Be({children:e}){const[t,a]=x.exports.useState(null),[r,n]=x.exports.useState(localStorage.getItem("token"));function i({token:l,user:b}){a(b),n(l),localStorage.setItem("token",l)}function o(){a(null),n(null),localStorage.removeItem("token")}const m=x.exports.useMemo(()=>({user:t,token:r,isLoggedIn:!!r,login:i,logout:o}),[t,r,i,o]);return React.createElement(se.Provider,{value:m},e)}function te(){return x.exports.useContext(se)}const _={},Ge=$`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function je(e){const t=c(c({},_),e);return B(Ge,t)}const We=$`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function Ue(e){const t=c(c({},_),e);return B(We,t)}const Qe=$`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function Ve(e){const t=c(c({},_),e);return B(Qe,t)}const Ke=$`
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
    `;function de(e){const t=c(c({},_),e);return B(Ke,t)}const Je=$`
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
    `;function j(e){const t=c(c({},_),e);return X(Je,t)}const Xe=$`
    query Characters {
  characters {
    id
    name
  }
}
    `;function Ze(e){const t=c(c({},_),e);return X(Xe,t)}const et=$`
    query Me {
  me {
    id
    email
  }
}
    `;function tt(e){const t=c(c({},_),e);return X(et,t)}const at=$`
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
    `;function nt(e){const t=c(c({},_),e);return Ce(at,t)}const rt=s.button`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  color: ${({$variant:e,theme:t})=>e==="primary"?t.colors.white:t.colors.black};
  background: ${({$variant:e,theme:t})=>e==="primary"?t.colors.blue400:"none"};
  border: 1px solid
    ${({$variant:e,theme:t})=>e==="primary"?t.colors.blue600:t.colors.black};

  &:hover,
  &:focus {
    background: ${({$variant:e,theme:t})=>e==="primary"?t.colors.blue500:t.colors.gray200};
  }
`;function Y(m){var l=m,{as:e="button",type:t="button",variant:a="primary",loading:r=!1,disabled:n=!1,children:i}=l,o=v(l,["as","type","variant","loading","disabled","children"]);return d.createElement(rt,c({as:e,type:e==="button"?t:void 0,$variant:a,disabled:r||n},o),i&&r?d.createElement("div",null,'"Loading..."'):i)}const it=s.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.colors.gray700};
`,ot=s.div`
  flex: 1;
  max-width: 768px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`,me=s.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`,W=s(M)`
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
`,ue=s(Y).attrs({variant:"secondary"})`
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
`;function lt(){const e=N(),{isLoggedIn:t,logout:a}=te(),{data:r,loading:n}=tt();return n?React.createElement("p",null,"Loading..."):React.createElement(it,null,React.createElement(ot,null,t?React.createElement(React.Fragment,null,React.createElement(W,{to:"/"},"Dungeonist"),React.createElement(me,null,React.createElement("li",null,React.createElement(W,{to:"/characters"},"Characters")),React.createElement("li",null,React.createElement(ue,{disabled:!0,onClick:()=>{a(),e("/")}},"Log out")))):React.createElement(React.Fragment,null,React.createElement(W,{to:"/"},"Dungeonist"),React.createElement(me,null,React.createElement("li",null,React.createElement(W,{to:"/login"},"Log in")),React.createElement("li",null,React.createElement(ue,{as:M,to:"/signup"},"Sign up"))))))}const ct=ke`
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
`,pe={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},st={sm:640,md:768,lg:1024,xl:1280},dt={colors:pe,breakpoints:st};function mt(e){if(e!=="none")return`${e}px`}function g(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const ut=s.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>mt(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>g(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${g(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${g(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>g(e)};
  margin-right: ${({$mr:e})=>g(e)};
  margin-bottom: ${({$mb:e})=>g(e)};
  margin-left: ${({$ml:e})=>g(e)};
  /* padding */
  padding: ${({$p:e})=>g(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${g(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${g(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>g(e)};
  padding-right: ${({$pr:e})=>g(e)};
  padding-bottom: ${({$pb:e})=>g(e)};
  padding-left: ${({$pl:e})=>g(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?pe[e]:void 0};
`;function p(ua){var ie=ua,{direction:e="row",wrap:t="nowrap",justifyContent:a="flex-start",alignItems:r="stretch",alignContent:n="normal",gap:i="none",flexGrow:o=0,flexShrink:m=1,flexBasis:l="auto",alignSelf:b="auto",m:S="none",mx:f="none",my:I="none",mt:h="none",mr:R="none",mb:u="none",ml:E="none",p:w="none",px:z="none",py:T="none",pt:D="none",pr:F="none",pb:K="none",pl:J="none",background:ve,children:we}=ie,xe=v(ie,["direction","wrap","justifyContent","alignItems","alignContent","gap","flexGrow","flexShrink","flexBasis","alignSelf","m","mx","my","mt","mr","mb","ml","p","px","py","pt","pr","pb","pl","background","children"]);return d.createElement(ut,c({$flexDirection:e,$flexWrap:t,$justifyContent:a,$alignItems:r,$gap:i,$flexGrow:o,$flexShrink:m,$flexBasis:l,$alignSelf:b,$m:S,$mx:f,$my:I,$mt:h,$mr:R,$mb:u,$ml:E,$p:w,$px:z,$py:T,$pt:D,$pr:F,$pb:K,$pl:J,$background:ve},xe),we)}const fe=s(p)`
  max-width: 100%;
`;function k({children:e}){return d.createElement(p,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32"},e)}function he({children:e}){return d.createElement(p,{direction:"column",gap:"16",flexGrow:1},e)}function pt(){return React.createElement(k,null,React.createElement("h1",null,"Hello World"))}const ft=s.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function A({children:e}){return d.createElement(ft,null,e)}const ht=s.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function y(n){var i=n,{size:e="16",weight:t="400",children:a}=i,r=v(i,["size","weight","children"]);return d.createElement(ht,c({$size:e,$weight:t},r),a)}function q({message:e}){return React.createElement(k,null,React.createElement(y,{as:"h1",size:"32"},"404"),React.createElement(A,null,e||"Not Found"),React.createElement(M,{to:"/"},"Home"))}const gt=s.label`
  display: block;

  ${({$required:e})=>e&&Se`
      ::after {
        content: "*";
      }
    `};
`;function ae(r){var n=r,{required:e=!1,children:t}=n,a=v(n,["required","children"]);return d.createElement(gt,c({$required:e},a),t)}const yt=s.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,bt=s.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Et=s.input`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:t})=>e?t.colors.red500:t.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`,L=d.forwardRef((m,o)=>{var l=m,{name:e,label:t,type:a,error:r,required:n=!1}=l,i=v(l,["name","label","type","error","required"]);return d.createElement(yt,null,d.createElement(ae,{htmlFor:e,required:n},t),r&&d.createElement(bt,null,r),d.createElement(Et,c({id:e,name:e,type:a,"aria-label":t,"aria-required":n,$error:!!r,ref:o},i)))}),Rt=Z().shape({email:H().email("Must be a valid email").required("Email is required"),password:H().required("Password is required")});function vt({loading:e,onSubmit:t}){var i,o;const{register:a,handleSubmit:r,formState:{errors:n}}=G({mode:"onTouched",resolver:ee(Rt)});return React.createElement("form",{onSubmit:r(t)},React.createElement(p,{direction:"column",gap:"16"},React.createElement(L,c({type:"text",label:"Email",placeholder:"example@gmail.com",error:(i=n.email)==null?void 0:i.message,required:!0},a("email"))),React.createElement(L,c({type:"password",label:"Password",error:(o=n.password)==null?void 0:o.message,required:!0},a("password"))),React.createElement(Y,{type:"submit",loading:e},"Log in")))}function wt(){const e=N(),{login:t}=te(),[a,{loading:r,error:n}]=Ue({onError:i=>console.error(i),onCompleted:({login:i})=>{t(i),e("/")},update(i,{data:o}){i.modify({fields:{me(){return o==null?void 0:o.login.user}}})}});return React.createElement(k,null,React.createElement(y,{as:"h1",size:"32"},"Log in"),n&&React.createElement(A,null,"Error: ",n.message),React.createElement(vt,{loading:r,onSubmit:({email:i,password:o})=>a({variables:{input:{email:i,password:o}}})}))}const xt=Z().shape({email:H().email("Must be a valid email").required("Email is required"),password:H().required("Password is required")});function $t({loading:e,onSubmit:t}){var i,o;const{register:a,handleSubmit:r,formState:{errors:n}}=G({mode:"onTouched",resolver:ee(xt)});return React.createElement("form",{onSubmit:r(t)},React.createElement(p,{direction:"column",gap:"16"},React.createElement(L,c({type:"text",label:"Email",placeholder:"example@gmail.com",error:(i=n.email)==null?void 0:i.message,required:!0},a("email"))),React.createElement(L,c({type:"password",label:"Password",error:(o=n.password)==null?void 0:o.message,required:!0},a("password"))),React.createElement(Y,{type:"submit",loading:e},"Sign up")))}function Ct(){const e=N(),[t,{loading:a,error:r}]=Ve({onError:n=>console.error(n),onCompleted:()=>e("/")});return React.createElement(k,null,React.createElement(y,{as:"h1",size:"32"},"Sign up"),r&&React.createElement(A,null,"Error: ",r.message),React.createElement($t,{loading:a,onSubmit:({email:n,password:i})=>t({variables:{input:{email:n,password:i}}})}))}function ne(){return React.createElement(k,null,React.createElement("p",null,"Loading..."))}const kt=s.ul`
  margin-left: 2rem;
`;function St(){const{data:e,loading:t,error:a}=Ze(),[r,{loading:n,error:i}]=je({onError:o=>console.error(o),update(o,{data:m}){o.modify({fields:{characters(l=[]){const b=o.writeFragment({data:m==null?void 0:m.createCharacter.character,fragment:$`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...l,b]}}})}});return t?React.createElement(ne,null):a||!e?React.createElement(A,null,"Error: ",a&&a.message):React.createElement(k,null,React.createElement(y,{as:"h1",size:"32"},"Characters"),i&&React.createElement(A,null,"Error: ",i==null?void 0:i.message),React.createElement(kt,null,e.characters.map(({id:o,name:m})=>React.createElement("li",{key:o},React.createElement(M,{to:`/characters/${o}`},m)))))}const ge="active",ye=s(y).attrs({forwardedAs:M})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,_t=s(ye).attrs({forwardedAs:_e})`
  &.${ge} {
    font-weight: 600;
    text-decoration: underline;
  }
`,be=a=>{var r=a,{children:e}=r,t=v(r,["children"]);return React.createElement(ye,c({},t),e)},It=a=>{var r=a,{children:e}=r,t=v(r,["children"]);return React.createElement(_t,c({className:({isActive:n})=>n?ge:""},t),e)},re=s(It)`
  padding: 11.5px 16px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray100};
  }
`;function At({name:e}){const{characterId:t}=P();return t?React.createElement(p,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto"},React.createElement(be,{size:"24",to:"/characters"},"Characters"),React.createElement(y,{size:"24"},"/"),React.createElement(be,{size:"24",to:`/characters/${t}`},e!=null?e:"Loading...")):null}const Lt=s(p).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function zt(){const{characterId:e}=P();return e?React.createElement(Lt,null,React.createElement(re,{to:"",end:!0},"Summary"),React.createElement(re,{to:"details"},"Details"),React.createElement(re,{to:"race"},"Race")):null}function Tt({name:e}){return React.createElement(fe,{forwardedAs:"header",direction:"column",gap:"16",pt:"16"},React.createElement(At,{name:e}),React.createElement(zt,null))}function Dt(){const{characterId:e}=P(),{data:t,loading:a,error:r}=j({variables:{id:String(e)}});if(a)return React.createElement(ne,null);if(r||!(t==null?void 0:t.character))return React.createElement(q,{message:r==null?void 0:r.message});const{character:n}=t;return React.createElement(React.Fragment,null,React.createElement(Tt,{name:n.name}),React.createElement(Ie,null))}const Ft=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Pt=s.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Mt=s.textarea`
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
`,U=d.forwardRef((m,o)=>{var l=m,{name:e,label:t,error:a,rows:r=4,required:n=!1}=l,i=v(l,["name","label","error","rows","required"]);return d.createElement(Ft,null,d.createElement(ae,{htmlFor:e,required:n},t),a&&d.createElement(Pt,null,a),d.createElement(Mt,c({id:e,name:e,rows:r,"aria-label":t,"aria-required":n,ref:o},i)))}),Nt=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ht=s.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Yt=s.select`
  display: inline-block;
  padding: 5px 2rem 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:t})=>e?t.colors.red500:t.colors.black};

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
`,Ee=d.forwardRef((m,o)=>{var l=m,{name:e,label:t,error:a,required:r=!1,children:n}=l,i=v(l,["name","label","error","required","children"]);return d.createElement(Nt,null,d.createElement(ae,{htmlFor:e,required:r},t),a&&d.createElement(Ht,null,a),d.createElement(Yt,c({id:e,name:e,"aria-label":t,"aria-required":r,$error:!!a,ref:o},i),n))});function Re({name:e,loading:t,onReset:a}){return React.createElement(p,{alignItems:"center"},React.createElement(y,{as:"h1",size:"32"},e),React.createElement(fe,{justifyContent:"flex-end",gap:"4"},React.createElement(Y,{type:"submit",loading:t},"Save"),React.createElement(Y,{variant:"secondary",onClick:a},"Reset")))}const qt=Z().shape({name:H(),level:Ae().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Ot({name:e,level:t,alignmentId:a,background:r,traits:n,ideals:i,bonds:o,flaws:m,loading:l,onCancel:b,onSubmit:S}){var R,u,E,w,z,T,D,F;const{register:f,handleSubmit:I,formState:{errors:h}}=G({mode:"onTouched",defaultValues:{name:e,level:t,alignmentId:a,background:r,traits:n,ideals:i,bonds:o,flaws:m},resolver:ee(qt)});return React.createElement("form",{onSubmit:I(S)},React.createElement(p,{direction:"column",gap:"16"},React.createElement(Re,{name:"Details",loading:l,onReset:b}),React.createElement(p,{gap:"16",justifyContent:"center"},React.createElement(p,{as:"section",direction:"column",gap:"16",flexGrow:1},React.createElement(L,c({type:"text",label:"Name",placeholder:"Untitled",error:(R=h.name)==null?void 0:R.message},f("name"))),React.createElement(L,c({type:"number",label:"Level",error:(u=h.level)==null?void 0:u.message},f("level",{valueAsNumber:!0}))),React.createElement(L,c({type:"text",label:"Background",placeholder:"Acolyte",error:(E=h.background)==null?void 0:E.message},f("background"))),React.createElement(Ee,c({label:"Alignment",error:(w=h.alignmentId)==null?void 0:w.message},f("alignmentId")),React.createElement("option",{value:"",selected:!0,disabled:!0}),React.createElement("option",{value:"1"},"Lawful Good"),React.createElement("option",{value:"2"},"Neutral Good"),React.createElement("option",{value:"3"},"Chaotic Good"),React.createElement("option",{value:"4"},"Lawful Neutral"),React.createElement("option",{value:"5"},"Neutral"),React.createElement("option",{value:"6"},"Chaotic Neutral"),React.createElement("option",{value:"7"},"Lawful Evil"),React.createElement("option",{value:"8"},"Neutral Evil"),React.createElement("option",{value:"9"},"Chaotic Evil"))),React.createElement(p,{as:"section",direction:"column",gap:"16",flexGrow:1},React.createElement(U,c({label:"Personality traits",error:(z=h.traits)==null?void 0:z.message},f("traits"))),React.createElement(U,c({label:"Ideals",error:(T=h.ideals)==null?void 0:T.message},f("ideals"))),React.createElement(U,c({label:"Bonds",error:(D=h.bonds)==null?void 0:D.message},f("bonds"))),React.createElement(U,c({label:"Flaws",error:(F=h.flaws)==null?void 0:F.message},f("flaws")))))))}function Bt(){var b,S,f,I,h,R,u;const e=N(),{characterId:t}=P(),{data:a,loading:r,error:n}=j({variables:{id:String(t)}}),[i,{loading:o,error:m}]=de({onError:E=>console.error(E)});if(n||!(a==null?void 0:a.character))return React.createElement(q,{message:n==null?void 0:n.message});const{character:l}=a;return React.createElement(k,null,m&&React.createElement(A,null,m.message),React.createElement(Ot,{name:l.name,level:l.level,alignmentId:(S=(b=l.alignment)==null?void 0:b.id)!=null?S:"",background:(f=l.background)!=null?f:"",traits:(I=l.traits)!=null?I:"",ideals:(h=l.ideals)!=null?h:"",bonds:(R=l.bonds)!=null?R:"",flaws:(u=l.flaws)!=null?u:"",loading:o,onCancel:()=>e(`/characters/${t}`),onSubmit:({name:E,level:w,background:z,alignmentId:T,traits:D,ideals:F,bonds:K,flaws:J})=>{i({variables:{input:{id:String(t),name:E||void 0,level:w||void 0,background:z||void 0,alignmentId:T||void 0,traits:D||void 0,ideals:F||void 0,bonds:K||void 0,flaws:J||void 0}}}),e(`/characters/${t}`)}}))}const Gt=s.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,jt=s.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,Wt=s.span`
  text-transform: uppercase;
`,Ut=s.h3`
  font-size: 24px;
  line-height: 32px;
`;function Qt({ability:e}){const{id:t,name:a,score:r,modifier:n}=e;return React.createElement(jt,{key:t},React.createElement(Wt,null,a.slice(0,3)),React.createElement(Ut,null,n>=0?"+":"-",n),React.createElement("span",null,r))}function Vt({abilities:e}){return React.createElement(p,{as:"section",direction:"column",gap:"16"},React.createElement(y,{as:"h3",weight:"600"},"Abilities"),React.createElement(Gt,null,e.map(t=>React.createElement(Qt,{ability:t}))))}const Kt=s.ul`
  margin-left: 1.5rem;
`,Jt=s.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,Xt=s.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,Zt=s.span`
  text-decoration: underline;
`,ea=s.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function ta({skill:e}){const{id:t,name:a,modifier:r,ability:n}=e;return React.createElement(Jt,{key:t},React.createElement(Xt,null,React.createElement(Zt,null,r>=0?"+":"-",r),React.createElement("span",null,a),React.createElement(ea,null,"(",n.name.slice(0,3),")")))}function aa({skills:e}){return React.createElement(p,{as:"section",direction:"column",gap:"16"},React.createElement(y,{weight:"600"},"Skills"),React.createElement(Kt,null,e.map(t=>React.createElement(ta,{skill:t}))))}function na(){const{characterId:e}=P(),{data:t,loading:a,error:r}=j({variables:{id:String(e)},skip:!e});if(a)return React.createElement(ne,null);if(r||!(t==null?void 0:t.character))return React.createElement(q,{message:r==null?void 0:r.message});const{character:n}=t;return React.createElement(k,null,React.createElement(Vt,{abilities:n.abilities}),React.createElement(aa,{skills:n.skills}))}function Q({name:e,description:t}){return t?React.createElement(p,{as:"section",direction:"column",gap:"8",flexGrow:1},React.createElement(y,{weight:"600"},e),React.createElement(y,null,t)):null}const ra=s.ul`
  margin-left: 1.5rem;
`;function ia({raceId:e,loading:t,onChange:a,onCancel:r,onSubmit:n}){var l;const{register:i,handleSubmit:o,formState:{errors:m}}=G({mode:"onTouched",defaultValues:{raceId:e}});return React.createElement("form",{onSubmit:o(n)},React.createElement(p,{direction:"column",gap:"16"},React.createElement(Re,{name:"Race",loading:t,onReset:r}),React.createElement(p,{gap:"16",justifyContent:"center"},React.createElement(p,{as:"section",direction:"column",gap:"16",flexGrow:1},React.createElement(Ee,c({label:"Race",error:(l=m.raceId)==null?void 0:l.message},i("raceId",{onChange:b=>a(b.target.value)})),React.createElement("option",{value:"",selected:!0,disabled:!0}),React.createElement("option",{value:"1"},"Dwarf"),React.createElement("option",{value:"2"},"Elf"),React.createElement("option",{value:"3"},"Halfling"),React.createElement("option",{value:"4"},"Human"),React.createElement("option",{value:"5"},"Dragonborn"),React.createElement("option",{value:"6"},"Gnome"),React.createElement("option",{value:"7"},"Elf"),React.createElement("option",{value:"8"},"Orc"),React.createElement("option",{value:"9"},"Tiefling"))))))}function oa(){var R;const[e,t]=x.exports.useState(""),a=N(),{characterId:r}=P(),{data:n,loading:i,error:o}=j({variables:{id:String(r)}}),[m,{data:l,loading:b,error:S}]=nt();x.exports.useEffect(()=>{var u,E,w;t((w=(E=(u=n==null?void 0:n.character)==null?void 0:u.race)==null?void 0:E.id)!=null?w:"")},[n]),x.exports.useEffect(()=>{!e||m({variables:{id:e}})},[e]),x.exports.useEffect(()=>{console.log(l==null?void 0:l.race)},[l]);const[f,{loading:I,error:h}]=de({onError:u=>console.error(u)});return o||!(n==null?void 0:n.character)?React.createElement(q,{message:o==null?void 0:o.message}):React.createElement(k,null,React.createElement(ia,{raceId:(R=n.character.race)==null?void 0:R.id,onChange:u=>t(u),onCancel:()=>a(`/characters/${r}`),onSubmit:({raceId:u})=>{f({variables:{input:{id:String(r),raceId:u||void 0}}}),a(`/characters/${r}`)}}),React.createElement(p,{direction:"column",gap:"16",mt:"16"},S&&React.createElement(A,null,"Race Not Found"),(l==null?void 0:l.race)&&React.createElement(p,{as:"article",direction:"column",gap:"16"},React.createElement(he,null,React.createElement(y,{as:"h2",size:"24"},"Ability Score Improvements"),React.createElement(ra,null,l.race.abilityScoreIncreases.map(u=>React.createElement("li",{key:u.id},`${u.ability.name} ${u.increase>=0?"+":"-"}${u.increase}`)))),React.createElement(he,null,React.createElement(y,{as:"h2",size:"24"},"Details"),l.race.description&&React.createElement(y,null,l.race.description),React.createElement(Q,{name:"Age",description:l.race.age}),React.createElement(Q,{name:"Alignment",description:l.race.alignment}),React.createElement(Q,{name:"Size",description:l.race.size}),React.createElement(Q,{name:"Speed",description:l.race.speed})))))}function la(){const{isLoggedIn:e}=te();return React.createElement(Le,{basename:"/dungeonist/"},React.createElement(lt,null),React.createElement(ze,null,React.createElement(C,{path:"/",element:React.createElement(pt,null)}),e?React.createElement(React.Fragment,null,React.createElement(C,{path:"/characters",element:React.createElement(St,null)}),React.createElement(C,{path:"/characters/:characterId",element:React.createElement(Dt,null)},React.createElement(C,{index:!0,element:React.createElement(na,null)}),React.createElement(C,{path:"details",element:React.createElement(Bt,null)}),React.createElement(C,{path:"race",element:React.createElement(oa,null)}))):React.createElement(React.Fragment,null,React.createElement(C,{path:"/signup",element:React.createElement(Ct,null)}),React.createElement(C,{path:"/login",element:React.createElement(wt,null)})),React.createElement(C,{path:"*",element:React.createElement(q,null)})))}const V=Te.link("https://github.com/graphql"),ca=[V.query("Me",(e,t,a)=>t(a.data({me:{id:"1",email:"luke.skywalker@gmail.com",__typename:"User"},__typename:"Query"}))),V.query("Characters",(e,t,a)=>t(a.data({characters:[{id:"1",name:"Obi-Wan Kenobi",__typename:"Character"}]}))),V.query("Character",(e,t,a)=>t(a.data({character:{id:"1",name:"Obi-Wan Kenobi",level:2,experience:300,inspiration:0,abilities:[{id:"1",name:"Strength",score:11,modifier:0,__typename:"CharacterAbility"},{id:"2",name:"Dexterity",score:11,modifier:0,__typename:"CharacterAbility"},{id:"3",name:"Constitution",score:11,modifier:0,__typename:"CharacterAbility"},{id:"4",name:"Intelligence",score:11,modifier:0,__typename:"CharacterAbility"},{id:"5",name:"Wisdom",score:11,modifier:0,__typename:"CharacterAbility"},{id:"6",name:"Charisma",score:11,modifier:0,__typename:"CharacterAbility"}],skills:[{id:"1",name:"Acrobatics",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"2",name:"Athletics",modifier:0,isProficient:!1,ability:{id:"1",name:"Strength",__typename:"CharacterAbility"}},{id:"3",name:"Animal Handling",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"4",name:"Arcana",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"5",name:"Deception",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"6",name:"History",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"7",name:"Insight",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"8",name:"Intimidation",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"9",name:"Investigation",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"10",name:"Medicine",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"11",name:"Nature",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"12",name:"Perception",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"13",name:"Performance",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"14",name:"Persuasion",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"15",name:"Religion",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"16",name:"Sleight of Hand",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"17",name:"Stealth",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"18",name:"Survival",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}}],alignment:{name:"Lawful Good",id:"1",__typename:"Alignment"},background:"Jedi Master",race:{id:"4",name:"Human",__typename:"CharacterRace"},traits:"",ideals:"",bonds:"",flaws:"",__typename:"Character"},__typename:"Query"}))),V.query("Race",(e,t,a)=>{if(e.variables.id==="1")return t(a.data({race:{id:"1",name:"Dwarf",description:"Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",age:"Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",alignment:"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",size:"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",speed:"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="2")return t(a.data({race:{id:"2",name:"Elf",description:"Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",age:"Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",alignment:"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",size:"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="3")return t(a.data({race:{id:"3",name:"Halfling",description:"Your halfling character has a number of traits in common with all other halflings.",age:"A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",alignment:"Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",size:"Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"2",name:"Dexterity"},increase:2}],__typename:"Race"}}));if(e.variables.id==="4")return t(a.data({race:{id:"4",name:"Human",description:"It's hard to make generalizations about humans, but your human character has these traits.",age:"Humans reach adulthood in their late teens and live less than a century.",alignment:"Humans tend toward no particular alignment. The best and the worst are found among them.",size:"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:1},{id:"2",ability:{id:"2",name:"Dexterity"},increase:1},{id:"3",ability:{id:"3",name:"Constituion"},increase:1},{id:"4",ability:{id:"4",name:"Intelligence"},increase:1},{id:"5",ability:{id:"5",name:"Wisdom"},increase:1},{id:"6",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="5")return t(a.data({race:{id:"5",name:"Dragonborn",description:"Your draconic heritage manifests in a variety of traits you share with other dragonborn.",age:"Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",alignment:"Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",size:"Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="6")return t(a.data({race:{id:"6",name:"Gnome",description:"Your gnome character has certain characteristics in common with all other gnomes.",age:"Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",alignment:"Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",size:"Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"2",ability:{id:"4",name:"Intelligence"},increase:1}],__typename:"Race"}}));if(e.variables.id==="7")return t(a.data({race:{id:"7",name:"Half-Elf",description:"Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",age:"Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",alignment:"Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",size:"Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="8")return t(a.data({race:{id:"8",name:"Half-Orc",description:"Your half-orc character has certain traits deriving from your orc ancestry.",age:"Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",alignment:"Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",size:"Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"2",name:"Constitution"},increase:1}],__typename:"Race"}}));if(e.variables.id==="9")return t(a.data({race:{id:"9",name:"Tiefling",description:"Tieflings share certain racial traits as a result of their infernal descent.",age:"Tieflings mature at the same rate as humans but live a few years longer.",alignment:"Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",size:"Tieflings are about the same size and build as humans. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"4",name:"Intelligence"},increase:1},{id:"2",ability:{id:"6",name:"Charisma"},increase:2}],__typename:"Race"}}))})],sa=De({uri:"https://github.com/graphql"}),da=Fe((e,{headers:t})=>{const a=localStorage.getItem("token");return{headers:c(c({},t),a&&{authorization:`Bearer ${a}`})}}),ma=new Pe({link:da.concat(sa),cache:new Me});window.location.pathname==='//dungeonist/"'&&(window.location.pathname="//dungeonist//"),localStorage.setItem("token","jwt"),Ne(...ca).start({serviceWorker:{url:"/dungeonist//mockServiceWorker.js"}});He.render(React.createElement(Ye,{client:ma},React.createElement(Be,null,React.createElement(qe,{theme:dt},React.createElement(ct,null),React.createElement(la,null)))),document.getElementById("root"));
