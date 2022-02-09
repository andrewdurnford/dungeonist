var ze=Object.defineProperty,Ee=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var he=(e,r,a)=>r in e?ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,d=(e,r)=>{for(var a in r||(r={}))ue.call(r,a)&&he(e,a,r[a]);if(G)for(var a of G(r))me.call(r,a)&&he(e,a,r[a]);return e},$=(e,r)=>Ee(e,Te(r));var C=(e,r)=>{var a={};for(var t in e)ue.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&G)for(var t of G(e))r.indexOf(t)<0&&me.call(e,t)&&(a[t]=e[t]);return a};import{j as ie,r as S,g as _,u as re,a as W,b as De,s as u,L as H,c as Y,W as Re,C as Fe,R as ae,d as ne,e as O,f as U,o as te,N as Pe,h as N,O as Me,i as Ne,B as He,k as Ye,l as I,m as Oe,n as qe,p as je,A as Be,I as Ge,q as We,t as Ue,v as Qe,F as Ve}from"./vendor.67cf4be8.js";const Ke=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};Ke();const i=ie.exports.jsx,s=ie.exports.jsxs,q=ie.exports.Fragment,pe=S.exports.createContext({});function Je({children:e}){const[r,a]=S.exports.useState(null),[t,n]=S.exports.useState(localStorage.getItem("token"));function o({token:c,user:v}){a(v),n(c),localStorage.setItem("token",c)}function l(){a(null),n(null),localStorage.removeItem("token")}const m=S.exports.useMemo(()=>({user:r,token:t,isLoggedIn:!!t,login:o,logout:l}),[r,t,o,l]);return i(pe.Provider,{value:m,children:e})}function oe(){return S.exports.useContext(pe)}const z={},Xe=_`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Ze(e){const r=d(d({},z),e);return W(Xe,r)}const ei=_`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function ii(e){const r=d(d({},z),e);return W(ei,r)}const ri=_`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function ai(e){const r=d(d({},z),e);return W(ri,r)}const ni=_`
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
    `;function fe(e){const r=d(d({},z),e);return W(ni,r)}const ti=_`
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
    `;function Q(e){const r=d(d({},z),e);return re(ti,r)}const oi=_`
    query Characters {
  characters {
    id
    name
  }
}
    `;function si(e){const r=d(d({},z),e);return re(oi,r)}const li=_`
    query Me {
  me {
    id
    email
  }
}
    `;function ci(e){const r=d(d({},z),e);return re(li,r)}const di=_`
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
    `;function ui(e){const r=d(d({},z),e);return De(di,r)}const mi=u.button`
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 3px 8px;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  color: ${({$variant:e,theme:r})=>e==="primary"?r.colors.white:r.colors.black};
  background: ${({$variant:e,theme:r})=>e==="primary"?r.colors.blue400:"none"};
  border: 1px solid
    ${({$variant:e,theme:r})=>e==="primary"?r.colors.blue600:r.colors.black};

  &:hover,
  &:focus {
    background: ${({$variant:e,theme:r})=>e==="primary"?r.colors.blue500:r.colors.gray200};
  }
`;function j(m){var c=m,{as:e="button",type:r="button",variant:a="primary",loading:t=!1,disabled:n=!1,children:o}=c,l=C(c,["as","type","variant","loading","disabled","children"]);return i(mi,$(d({as:e,type:e==="button"?r:void 0,$variant:a,disabled:t||n},l),{children:o&&t?i("div",{children:'"Loading..."'}):o}))}const hi=u.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.colors.gray700};
`,pi=u.div`
  flex: 1;
  max-width: 768px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`,ge=u.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`,V=u(H)`
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
`,ye=u(j).attrs({variant:"secondary"})`
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
`;function fi(){const e=Y(),{isLoggedIn:r,logout:a}=oe(),{data:t,loading:n}=ci();return n?i("p",{children:"Loading..."}):i(hi,{children:i(pi,{children:r?s(q,{children:[i(V,{to:"/",children:"Dungeonist"}),s(ge,{children:[i("li",{children:i(V,{to:"/characters",children:"Characters"})}),i("li",{children:i(ye,{disabled:!0,onClick:()=>{a(),e("/")},children:"Log out"})})]})]}):s(q,{children:[i(V,{to:"/",children:"Dungeonist"}),s(ge,{children:[i("li",{children:i(V,{to:"/login",children:"Log in"})}),i("li",{children:i(ye,{as:H,to:"/signup",children:"Sign up"})})]})]})})})}const gi=Re`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 16px;

    background: #374151;
  }

  #root {
    background: #fff;
    height: 100vh;
  }
`,be={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},yi={sm:640,md:768,lg:1024,xl:1280},bi={colors:be,breakpoints:yi};function vi(e){if(e!=="none")return`${e}px`}function y(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const xi=u.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>vi(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>y(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${y(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${y(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>y(e)};
  margin-right: ${({$mr:e})=>y(e)};
  margin-bottom: ${({$mb:e})=>y(e)};
  margin-left: ${({$ml:e})=>y(e)};
  /* padding */
  padding: ${({$p:e})=>y(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${y(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${y(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>y(e)};
  padding-right: ${({$pr:e})=>y(e)};
  padding-bottom: ${({$pb:e})=>y(e)};
  padding-left: ${({$pl:e})=>y(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?be[e]:void 0};
`;function p(xr){var de=xr,{direction:e="row",wrap:r="nowrap",justifyContent:a="flex-start",alignItems:t="stretch",alignContent:n="normal",gap:o="none",flexGrow:l=0,flexShrink:m=1,flexBasis:c="auto",alignSelf:v="auto",m:L="none",mx:f="none",my:E="none",mt:g="none",mr:w="none",mb:h="none",ml:x="none",p:k="none",px:R="none",py:F="none",pt:P="none",pr:M="none",pb:Z="none",pl:ee="none",background:Ie,children:Ae}=de,Le=C(de,["direction","wrap","justifyContent","alignItems","alignContent","gap","flexGrow","flexShrink","flexBasis","alignSelf","m","mx","my","mt","mr","mb","ml","p","px","py","pt","pr","pb","pl","background","children"]);return i(xi,$(d({$flexDirection:e,$flexWrap:r,$justifyContent:a,$alignItems:t,$gap:o,$flexGrow:l,$flexShrink:m,$flexBasis:c,$alignSelf:v,$m:L,$mx:f,$my:E,$mt:g,$mr:w,$mb:h,$ml:x,$p:k,$px:R,$py:F,$pt:P,$pr:M,$pb:Z,$pl:ee,$background:Ie},Le),{children:Ae}))}const ve=u(p)`
  max-width: 100%;
`;function A({children:e}){return i(p,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function xe({children:e}){return i(p,{direction:"column",gap:"16",flexGrow:1,children:e})}function wi(){return i(A,{children:i("h1",{children:"Hello World"})})}const $i=u.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function T({children:e}){return i($i,{children:e})}const Ci=u.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function b(n){var o=n,{size:e="16",weight:r="400",children:a}=o,t=C(o,["size","weight","children"]);return i(Ci,$(d({$size:e,$weight:r},t),{children:a}))}function B({message:e}){return s(A,{children:[i(b,{as:"h1",size:"32",children:"404"}),i(T,{children:e||"Not Found"}),i(H,{to:"/",children:"Home"})]})}const ki=u.label`
  display: block;

  ${({$required:e})=>e&&Fe`
      ::after {
        content: "*";
      }
    `};
`;function se(t){var n=t,{required:e=!1,children:r}=n,a=C(n,["required","children"]);return i(ki,$(d({$required:e},a),{children:r}))}const Si=u.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,_i=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Ii=u.input`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:r})=>e?r.colors.red500:r.colors.black};

  font-family: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: inherit;

  &:hover {
    cursor: text;
  }
`,D=ae.forwardRef((m,l)=>{var c=m,{name:e,label:r,type:a,error:t,required:n=!1}=c,o=C(c,["name","label","type","error","required"]);return s(Si,{children:[i(se,{htmlFor:e,required:n,children:r}),t&&i(_i,{children:t}),i(Ii,d({id:e,name:e,type:a,"aria-label":r,"aria-required":n,$error:!!t,ref:l},o))]})}),Ai=ne().shape({email:O().email("Must be a valid email").required("Email is required"),password:O().required("Password is required")});function Li({loading:e,onSubmit:r}){var o,l;const{register:a,handleSubmit:t,formState:{errors:n}}=U({mode:"onTouched",resolver:te(Ai)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(D,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=n.email)==null?void 0:o.message,required:!0},a("email"))),i(D,d({type:"password",label:"Password",error:(l=n.password)==null?void 0:l.message,required:!0},a("password"))),i(j,{type:"submit",loading:e,children:"Log in"})]})})}function zi(){const e=Y(),{login:r}=oe(),[a,{loading:t,error:n}]=ii({onError:o=>console.error(o),onCompleted:({login:o})=>{r(o),e("/")},update(o,{data:l}){o.modify({fields:{me(){return l==null?void 0:l.login.user}}})}});return s(A,{children:[i(b,{as:"h1",size:"32",children:"Log in"}),n&&s(T,{children:["Error: ",n.message]}),i(Li,{loading:t,onSubmit:({email:o,password:l})=>a({variables:{input:{email:o,password:l}}})})]})}const Ei=ne().shape({email:O().email("Must be a valid email").required("Email is required"),password:O().required("Password is required")});function Ti({loading:e,onSubmit:r}){var o,l;const{register:a,handleSubmit:t,formState:{errors:n}}=U({mode:"onTouched",resolver:te(Ei)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(D,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=n.email)==null?void 0:o.message,required:!0},a("email"))),i(D,d({type:"password",label:"Password",error:(l=n.password)==null?void 0:l.message,required:!0},a("password"))),i(j,{type:"submit",loading:e,children:"Sign up"})]})})}function Di(){const e=Y(),[r,{loading:a,error:t}]=ai({onError:n=>console.error(n),onCompleted:()=>e("/")});return s(A,{children:[i(b,{as:"h1",size:"32",children:"Sign up"}),t&&s(T,{children:["Error: ",t.message]}),i(Ti,{loading:a,onSubmit:({email:n,password:o})=>r({variables:{input:{email:n,password:o}}})})]})}function le(){return i(A,{children:i("p",{children:"Loading..."})})}const Ri=u.ul`
  margin-left: 2rem;
`;function Fi(){const{data:e,loading:r,error:a}=si(),[t,{loading:n,error:o}]=Ze({onError:l=>console.error(l),update(l,{data:m}){l.modify({fields:{characters(c=[]){const v=l.writeFragment({data:m==null?void 0:m.createCharacter.character,fragment:_`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...c,v]}}})}});return r?i(le,{}):a||!e?s(T,{children:["Error: ",a&&a.message]}):s(A,{children:[i(b,{as:"h1",size:"32",children:"Characters"}),o&&s(T,{children:["Error: ",o==null?void 0:o.message]}),i(Ri,{children:e.characters.map(({id:l,name:m})=>i("li",{children:i(H,{to:`/characters/${l}`,children:m})},l))})]})}const we="active",$e=u(b).attrs({forwardedAs:H})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Pi=u($e).attrs({forwardedAs:Pe})`
  &.${we} {
    font-weight: 600;
    text-decoration: underline;
  }
`,Ce=a=>{var t=a,{children:e}=t,r=C(t,["children"]);return i($e,$(d({},r),{children:e}))},Mi=a=>{var t=a,{children:e}=t,r=C(t,["children"]);return i(Pi,$(d({className:({isActive:n})=>n?we:""},r),{children:e}))},ce=u(Mi)`
  padding: 11.5px 16px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray100};
  }
`;function Ni({name:e}){const{characterId:r}=N();return r?s(p,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[i(Ce,{size:"24",to:"/characters",children:"Characters"}),i(b,{size:"24",children:"/"}),i(Ce,{size:"24",to:`/characters/${r}`,children:e!=null?e:"Loading..."})]}):null}const Hi=u(p).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function Yi(){const{characterId:e}=N();return e?s(Hi,{children:[i(ce,{to:"",end:!0,children:"Summary"}),i(ce,{to:"details",children:"Details"}),i(ce,{to:"race",children:"Race"})]}):null}function Oi({name:e}){return s(ve,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[i(Ni,{name:e}),i(Yi,{})]})}function qi(){const{characterId:e}=N(),{data:r,loading:a,error:t}=Q({variables:{id:String(e)}});if(a)return i(le,{});if(t||!(r==null?void 0:r.character))return i(B,{message:t==null?void 0:t.message});const{character:n}=r;return s(q,{children:[i(Oi,{name:n.name}),i(Me,{})]})}const ji=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Bi=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Gi=u.textarea`
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
`,K=ae.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:a,rows:t=4,required:n=!1}=c,o=C(c,["name","label","error","rows","required"]);return s(ji,{children:[i(se,{htmlFor:e,required:n,children:r}),a&&i(Bi,{children:a}),i(Gi,d({id:e,name:e,rows:t,"aria-label":r,"aria-required":n,ref:l},o))]})}),Wi=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ui=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Qi=u.select`
  display: inline-block;
  padding: 5px 2rem 5px 8px;
  border-radius: 4px;
  border: 1px solid
    ${({$error:e,theme:r})=>e?r.colors.red500:r.colors.black};

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
`,ke=ae.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:a,required:t=!1,children:n}=c,o=C(c,["name","label","error","required","children"]);return s(Wi,{children:[i(se,{htmlFor:e,required:t,children:r}),a&&i(Ui,{children:a}),i(Qi,$(d({id:e,name:e,"aria-label":r,"aria-required":t,$error:!!a,ref:l},o),{children:n}))]})});function Se({name:e,loading:r,onReset:a}){return s(p,{alignItems:"center",children:[i(b,{as:"h1",size:"32",children:e}),s(ve,{justifyContent:"flex-end",gap:"4",children:[i(j,{type:"submit",loading:r,children:"Save"}),i(j,{variant:"secondary",onClick:a,children:"Reset"})]})]})}const _e=u(p).attrs({forwardedAs:"section",direction:"column",gap:"16",flexGrow:1})`
  width: auto;
`,Vi=ne().shape({name:O(),level:Ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Ki({name:e,level:r,alignmentId:a,background:t,traits:n,ideals:o,bonds:l,flaws:m,loading:c,onCancel:v,onSubmit:L}){var w,h,x,k,R,F,P,M;const{register:f,handleSubmit:E,formState:{errors:g}}=U({mode:"onTouched",defaultValues:{name:e,level:r,alignmentId:a,background:t,traits:n,ideals:o,bonds:l,flaws:m},resolver:te(Vi)});return i("form",{onSubmit:E(L),children:s(p,{direction:"column",gap:"16",children:[i(Se,{name:"Details",loading:c,onReset:v}),s(p,{wrap:"wrap",gap:"16",justifyContent:"center",children:[s(_e,{children:[i(D,d({type:"text",label:"Name",placeholder:"Untitled",error:(w=g.name)==null?void 0:w.message},f("name"))),i(D,d({type:"number",label:"Level",error:(h=g.level)==null?void 0:h.message},f("level",{valueAsNumber:!0}))),i(D,d({type:"text",label:"Background",placeholder:"Acolyte",error:(x=g.background)==null?void 0:x.message},f("background"))),s(ke,$(d({label:"Alignment",error:(k=g.alignmentId)==null?void 0:k.message},f("alignmentId")),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Lawful Good"}),i("option",{value:"2",children:"Neutral Good"}),i("option",{value:"3",children:"Chaotic Good"}),i("option",{value:"4",children:"Lawful Neutral"}),i("option",{value:"5",children:"Neutral"}),i("option",{value:"6",children:"Chaotic Neutral"}),i("option",{value:"7",children:"Lawful Evil"}),i("option",{value:"8",children:"Neutral Evil"}),i("option",{value:"9",children:"Chaotic Evil"})]}))]}),s(_e,{children:[i(K,d({label:"Personality traits",error:(R=g.traits)==null?void 0:R.message},f("traits"))),i(K,d({label:"Ideals",error:(F=g.ideals)==null?void 0:F.message},f("ideals"))),i(K,d({label:"Bonds",error:(P=g.bonds)==null?void 0:P.message},f("bonds"))),i(K,d({label:"Flaws",error:(M=g.flaws)==null?void 0:M.message},f("flaws")))]})]})]})})}function Ji(){var v,L,f,E,g,w,h;const e=Y(),{characterId:r}=N(),{data:a,loading:t,error:n}=Q({variables:{id:String(r)}}),[o,{loading:l,error:m}]=fe({onError:x=>console.error(x)});if(n||!(a==null?void 0:a.character))return i(B,{message:n==null?void 0:n.message});const{character:c}=a;return s(A,{children:[m&&i(T,{children:m.message}),i(Ki,{name:c.name,level:c.level,alignmentId:(L=(v=c.alignment)==null?void 0:v.id)!=null?L:"",background:(f=c.background)!=null?f:"",traits:(E=c.traits)!=null?E:"",ideals:(g=c.ideals)!=null?g:"",bonds:(w=c.bonds)!=null?w:"",flaws:(h=c.flaws)!=null?h:"",loading:l,onCancel:()=>e(`/characters/${r}`),onSubmit:({name:x,level:k,background:R,alignmentId:F,traits:P,ideals:M,bonds:Z,flaws:ee})=>{o({variables:{input:{id:String(r),name:x||void 0,level:k||void 0,background:R||void 0,alignmentId:F||void 0,traits:P||void 0,ideals:M||void 0,bonds:Z||void 0,flaws:ee||void 0}}}),e(`/characters/${r}`)}})]})}const Xi=u.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,Zi=u.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,er=u.span`
  text-transform: uppercase;
`,ir=u.h3`
  font-size: 24px;
  line-height: 32px;
`;function rr({ability:e}){const{id:r,name:a,score:t,modifier:n}=e;return s(Zi,{children:[i(er,{children:a.slice(0,3)}),s(ir,{children:[n>=0?"+":"-",n]}),i("span",{children:t})]},r)}function ar({abilities:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(b,{as:"h3",weight:"600",children:"Abilities"}),i(Xi,{children:e.map(r=>i(rr,{ability:r}))})]})}const nr=u.ul`
  margin-left: 1.5rem;
`,tr=u.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,or=u.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,sr=u.span`
  text-decoration: underline;
`,lr=u.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function cr({skill:e}){const{id:r,name:a,modifier:t,ability:n}=e;return i(tr,{children:s(or,{children:[s(sr,{children:[t>=0?"+":"-",t]}),i("span",{children:a}),s(lr,{children:["(",n.name.slice(0,3),")"]})]})},r)}function dr({skills:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(b,{weight:"600",children:"Skills"}),i(nr,{children:e.map(r=>i(cr,{skill:r}))})]})}function ur(){const{characterId:e}=N(),{data:r,loading:a,error:t}=Q({variables:{id:String(e)},skip:!e});if(a)return i(le,{});if(t||!(r==null?void 0:r.character))return i(B,{message:t==null?void 0:t.message});const{character:n}=r;return s(A,{children:[i(ar,{abilities:n.abilities}),i(dr,{skills:n.skills})]})}function J({name:e,description:r}){return r?s(p,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[i(b,{weight:"600",children:e}),i(b,{children:r})]}):null}const mr=u.ul`
  margin-left: 1.5rem;
`;function hr({raceId:e,loading:r,onChange:a,onCancel:t,onSubmit:n}){var c;const{register:o,handleSubmit:l,formState:{errors:m}}=U({mode:"onTouched",defaultValues:{raceId:e}});return i("form",{onSubmit:l(n),children:s(p,{direction:"column",gap:"16",children:[i(Se,{name:"Race",loading:r,onReset:t}),i(p,{gap:"16",justifyContent:"center",children:i(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:s(ke,$(d({label:"Race",error:(c=m.raceId)==null?void 0:c.message},o("raceId",{onChange:v=>a(v.target.value)})),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Dwarf"}),i("option",{value:"2",children:"Elf"}),i("option",{value:"3",children:"Halfling"}),i("option",{value:"4",children:"Human"}),i("option",{value:"5",children:"Dragonborn"}),i("option",{value:"6",children:"Gnome"}),i("option",{value:"7",children:"Elf"}),i("option",{value:"8",children:"Orc"}),i("option",{value:"9",children:"Tiefling"})]}))})})]})})}function pr(){var w;const[e,r]=S.exports.useState(""),a=Y(),{characterId:t}=N(),{data:n,loading:o,error:l}=Q({variables:{id:String(t)}}),[m,{data:c,loading:v,error:L}]=ui();S.exports.useEffect(()=>{var h,x,k;r((k=(x=(h=n==null?void 0:n.character)==null?void 0:h.race)==null?void 0:x.id)!=null?k:"")},[n]),S.exports.useEffect(()=>{!e||m({variables:{id:e}})},[e]),S.exports.useEffect(()=>{console.log(c==null?void 0:c.race)},[c]);const[f,{loading:E,error:g}]=fe({onError:h=>console.error(h)});return l||!(n==null?void 0:n.character)?i(B,{message:l==null?void 0:l.message}):s(A,{children:[i(hr,{raceId:(w=n.character.race)==null?void 0:w.id,onChange:h=>r(h),onCancel:()=>a(`/characters/${t}`),onSubmit:({raceId:h})=>{f({variables:{input:{id:String(t),raceId:h||void 0}}}),a(`/characters/${t}`)}}),s(p,{direction:"column",gap:"16",mt:"16",children:[L&&i(T,{children:"Race Not Found"}),(c==null?void 0:c.race)&&s(p,{as:"article",direction:"column",gap:"16",children:[s(xe,{children:[i(b,{as:"h2",size:"24",children:"Ability Score Improvements"}),i(mr,{children:c.race.abilityScoreIncreases.map(h=>i("li",{children:`${h.ability.name} ${h.increase>=0?"+":"-"}${h.increase}`},h.id))})]}),s(xe,{children:[i(b,{as:"h2",size:"24",children:"Details"}),c.race.description&&i(b,{children:c.race.description}),i(J,{name:"Age",description:c.race.age}),i(J,{name:"Alignment",description:c.race.alignment}),i(J,{name:"Size",description:c.race.size}),i(J,{name:"Speed",description:c.race.speed})]})]})]})]})}function fr(){const{isLoggedIn:e}=oe();return s(He,{basename:"/dungeonist/",children:[i(fi,{}),s(Ye,{children:[i(I,{path:"/",element:i(wi,{})}),e?s(q,{children:[i(I,{path:"/characters",element:i(Fi,{})}),s(I,{path:"/characters/:characterId",element:i(qi,{}),children:[i(I,{index:!0,element:i(ur,{})}),i(I,{path:"details",element:i(Ji,{})}),i(I,{path:"race",element:i(pr,{})})]})]}):s(q,{children:[i(I,{path:"/signup",element:i(Di,{})}),i(I,{path:"/login",element:i(zi,{})})]}),i(I,{path:"*",element:i(B,{})})]})]})}const X=Oe.link("https://example.com"),gr=[X.query("Me",(e,r,a)=>r(a.data({me:{id:"1",email:"luke.skywalker@gmail.com",__typename:"User"},__typename:"Query"}))),X.query("Characters",(e,r,a)=>r(a.data({characters:[{id:"1",name:"Obi-Wan Kenobi",__typename:"Character"}]}))),X.query("Character",(e,r,a)=>r(a.data({character:{id:"1",name:"Obi-Wan Kenobi",level:2,experience:300,inspiration:0,abilities:[{id:"1",name:"Strength",score:11,modifier:0,__typename:"CharacterAbility"},{id:"2",name:"Dexterity",score:11,modifier:0,__typename:"CharacterAbility"},{id:"3",name:"Constitution",score:11,modifier:0,__typename:"CharacterAbility"},{id:"4",name:"Intelligence",score:11,modifier:0,__typename:"CharacterAbility"},{id:"5",name:"Wisdom",score:11,modifier:0,__typename:"CharacterAbility"},{id:"6",name:"Charisma",score:11,modifier:0,__typename:"CharacterAbility"}],skills:[{id:"1",name:"Acrobatics",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"2",name:"Athletics",modifier:0,isProficient:!1,ability:{id:"1",name:"Strength",__typename:"CharacterAbility"}},{id:"3",name:"Animal Handling",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"4",name:"Arcana",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"5",name:"Deception",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"6",name:"History",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"7",name:"Insight",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"8",name:"Intimidation",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"9",name:"Investigation",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"10",name:"Medicine",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"11",name:"Nature",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"12",name:"Perception",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"13",name:"Performance",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"14",name:"Persuasion",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"15",name:"Religion",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"16",name:"Sleight of Hand",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"17",name:"Stealth",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"18",name:"Survival",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}}],alignment:{name:"Lawful Good",id:"1",__typename:"Alignment"},background:"Jedi Master",race:{id:"4",name:"Human",__typename:"CharacterRace"},traits:"",ideals:"",bonds:"",flaws:"",__typename:"Character"},__typename:"Query"}))),X.query("Race",(e,r,a)=>{if(e.variables.id==="1")return r(a.data({race:{id:"1",name:"Dwarf",description:"Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",age:"Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",alignment:"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",size:"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",speed:"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="2")return r(a.data({race:{id:"2",name:"Elf",description:"Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",age:"Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",alignment:"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",size:"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="3")return r(a.data({race:{id:"3",name:"Halfling",description:"Your halfling character has a number of traits in common with all other halflings.",age:"A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",alignment:"Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",size:"Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"2",name:"Dexterity"},increase:2}],__typename:"Race"}}));if(e.variables.id==="4")return r(a.data({race:{id:"4",name:"Human",description:"It's hard to make generalizations about humans, but your human character has these traits.",age:"Humans reach adulthood in their late teens and live less than a century.",alignment:"Humans tend toward no particular alignment. The best and the worst are found among them.",size:"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:1},{id:"2",ability:{id:"2",name:"Dexterity"},increase:1},{id:"3",ability:{id:"3",name:"Constituion"},increase:1},{id:"4",ability:{id:"4",name:"Intelligence"},increase:1},{id:"5",ability:{id:"5",name:"Wisdom"},increase:1},{id:"6",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="5")return r(a.data({race:{id:"5",name:"Dragonborn",description:"Your draconic heritage manifests in a variety of traits you share with other dragonborn.",age:"Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",alignment:"Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",size:"Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="6")return r(a.data({race:{id:"6",name:"Gnome",description:"Your gnome character has certain characteristics in common with all other gnomes.",age:"Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",alignment:"Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",size:"Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"2",ability:{id:"4",name:"Intelligence"},increase:1}],__typename:"Race"}}));if(e.variables.id==="7")return r(a.data({race:{id:"7",name:"Half-Elf",description:"Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",age:"Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",alignment:"Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",size:"Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="8")return r(a.data({race:{id:"8",name:"Half-Orc",description:"Your half-orc character has certain traits deriving from your orc ancestry.",age:"Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",alignment:"Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",size:"Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"2",name:"Constitution"},increase:1}],__typename:"Race"}}));if(e.variables.id==="9")return r(a.data({race:{id:"9",name:"Tiefling",description:"Tieflings share certain racial traits as a result of their infernal descent.",age:"Tieflings mature at the same rate as humans but live a few years longer.",alignment:"Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",size:"Tieflings are about the same size and build as humans. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"4",name:"Intelligence"},increase:1},{id:"2",ability:{id:"6",name:"Charisma"},increase:2}],__typename:"Race"}}))})],yr=qe({uri:"https://example.com"}),br=je((e,{headers:r})=>{const a=localStorage.getItem("token");return{headers:d(d({},r),a&&{authorization:`Bearer ${a}`})}}),vr=new Be({link:br.concat(yr),cache:new Ge});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.setItem("token","example"),We(...gr).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});Ue.render(i(Qe,{client:vr,children:i(Je,{children:s(Ve,{theme:bi,children:[i(gi,{}),i(fr,{})]})})}),document.getElementById("root"));
