var Le=Object.defineProperty,ze=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var he=(e,r,n)=>r in e?Le(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))ue.call(r,n)&&he(e,n,r[n]);if(G)for(var n of G(r))me.call(r,n)&&he(e,n,r[n]);return e},$=(e,r)=>ze(e,Ee(r));var C=(e,r)=>{var n={};for(var t in e)ue.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&G)for(var t of G(e))r.indexOf(t)<0&&me.call(e,t)&&(n[t]=e[t]);return n};import{j as ie,r as S,g as _,u as re,a as W,b as Te,s as u,L as H,c as Y,W as De,C as Re,R as ne,d as ae,e as q,f as U,o as te,N as Fe,h as N,O as Pe,i as Me,B as Ne,k as He,l as I,m as Ye,n as qe,p as Oe,A as je,I as Be,q as Ge,t as We,v as Ue,F as Qe}from"./vendor.67cf4be8.js";const Ve=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};Ve();const i=ie.exports.jsx,s=ie.exports.jsxs,O=ie.exports.Fragment,pe=S.exports.createContext({});function Ke({children:e}){const[r,n]=S.exports.useState(null),[t,a]=S.exports.useState(localStorage.getItem("token"));function o({token:c,user:v}){n(v),a(c),localStorage.setItem("token",c)}function l(){n(null),a(null),localStorage.removeItem("token")}const m=S.exports.useMemo(()=>({user:r,token:t,isLoggedIn:!!t,login:o,logout:l}),[r,t,o,l]);return i(pe.Provider,{value:m,children:e})}function oe(){return S.exports.useContext(pe)}const z={},Je=_`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Xe(e){const r=d(d({},z),e);return W(Je,r)}const Ze=_`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function ei(e){const r=d(d({},z),e);return W(Ze,r)}const ii=_`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function ri(e){const r=d(d({},z),e);return W(ii,r)}const ni=_`
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
    `;function fe(e){const r=d(d({},z),e);return W(ni,r)}const ai=_`
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
    `;function Q(e){const r=d(d({},z),e);return re(ai,r)}const ti=_`
    query Characters {
  characters {
    id
    name
  }
}
    `;function oi(e){const r=d(d({},z),e);return re(ti,r)}const si=_`
    query Me {
  me {
    id
    email
  }
}
    `;function li(e){const r=d(d({},z),e);return re(si,r)}const ci=_`
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
    `;function di(e){const r=d(d({},z),e);return Te(ci,r)}const ui=u.button`
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
`;function j(m){var c=m,{as:e="button",type:r="button",variant:n="primary",loading:t=!1,disabled:a=!1,children:o}=c,l=C(c,["as","type","variant","loading","disabled","children"]);return i(ui,$(d({as:e,type:e==="button"?r:void 0,$variant:n,disabled:t||a},l),{children:o&&t?i("div",{children:'"Loading..."'}):o}))}const mi=u.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${({theme:e})=>e.colors.gray700};
`,hi=u.div`
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
`;function pi(){const e=Y(),{isLoggedIn:r,logout:n}=oe(),{data:t,loading:a}=li();return a?i("p",{children:"Loading..."}):i(mi,{children:i(hi,{children:r?s(O,{children:[i(V,{to:"/",children:"Dungeonist"}),s(ge,{children:[i("li",{children:i(V,{to:"/characters",children:"Characters"})}),i("li",{children:i(ye,{disabled:!0,onClick:()=>{n(),e("/")},children:"Log out"})})]})]}):s(O,{children:[i(V,{to:"/",children:"Dungeonist"}),s(ge,{children:[i("li",{children:i(V,{to:"/login",children:"Log in"})}),i("li",{children:i(ye,{as:H,to:"/signup",children:"Sign up"})})]})]})})})}const fi=De`
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
`,be={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},gi={sm:640,md:768,lg:1024,xl:1280},yi={colors:be,breakpoints:gi};function bi(e){if(e!=="none")return`${e}px`}function y(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const vi=u.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>bi(e)};
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
`;function p(xr){var de=xr,{direction:e="row",wrap:r="nowrap",justifyContent:n="flex-start",alignItems:t="stretch",alignContent:a="normal",gap:o="none",flexGrow:l=0,flexShrink:m=1,flexBasis:c="auto",alignSelf:v="auto",m:L="none",mx:f="none",my:E="none",mt:g="none",mr:w="none",mb:h="none",ml:x="none",p:k="none",px:R="none",py:F="none",pt:P="none",pr:M="none",pb:Z="none",pl:ee="none",background:_e,children:Ie}=de,Ae=C(de,["direction","wrap","justifyContent","alignItems","alignContent","gap","flexGrow","flexShrink","flexBasis","alignSelf","m","mx","my","mt","mr","mb","ml","p","px","py","pt","pr","pb","pl","background","children"]);return i(vi,$(d({$flexDirection:e,$flexWrap:r,$justifyContent:n,$alignItems:t,$gap:o,$flexGrow:l,$flexShrink:m,$flexBasis:c,$alignSelf:v,$m:L,$mx:f,$my:E,$mt:g,$mr:w,$mb:h,$ml:x,$p:k,$px:R,$py:F,$pt:P,$pr:M,$pb:Z,$pl:ee,$background:_e},Ae),{children:Ie}))}const ve=u(p)`
  max-width: 100%;
`;function A({children:e}){return i(p,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function xe({children:e}){return i(p,{direction:"column",gap:"16",flexGrow:1,children:e})}function xi(){return i(A,{children:i("h1",{children:"Hello World"})})}const wi=u.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function T({children:e}){return i(wi,{children:e})}const $i=u.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function b(a){var o=a,{size:e="16",weight:r="400",children:n}=o,t=C(o,["size","weight","children"]);return i($i,$(d({$size:e,$weight:r},t),{children:n}))}function B({message:e}){return s(A,{children:[i(b,{as:"h1",size:"32",children:"404"}),i(T,{children:e||"Not Found"}),i(H,{to:"/",children:"Home"})]})}const Ci=u.label`
  display: block;

  ${({$required:e})=>e&&Re`
      ::after {
        content: "*";
      }
    `};
`;function se(t){var a=t,{required:e=!1,children:r}=a,n=C(a,["required","children"]);return i(Ci,$(d({$required:e},n),{children:r}))}const ki=u.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,Si=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,_i=u.input`
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
`,D=ne.forwardRef((m,l)=>{var c=m,{name:e,label:r,type:n,error:t,required:a=!1}=c,o=C(c,["name","label","type","error","required"]);return s(ki,{children:[i(se,{htmlFor:e,required:a,children:r}),t&&i(Si,{children:t}),i(_i,d({id:e,name:e,type:n,"aria-label":r,"aria-required":a,$error:!!t,ref:l},o))]})}),Ii=ae().shape({email:q().email("Must be a valid email").required("Email is required"),password:q().required("Password is required")});function Ai({loading:e,onSubmit:r}){var o,l;const{register:n,handleSubmit:t,formState:{errors:a}}=U({mode:"onTouched",resolver:te(Ii)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(D,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=a.email)==null?void 0:o.message,required:!0},n("email"))),i(D,d({type:"password",label:"Password",error:(l=a.password)==null?void 0:l.message,required:!0},n("password"))),i(j,{type:"submit",loading:e,children:"Log in"})]})})}function Li(){const e=Y(),{login:r}=oe(),[n,{loading:t,error:a}]=ei({onError:o=>console.error(o),onCompleted:({login:o})=>{r(o),e("/")},update(o,{data:l}){o.modify({fields:{me(){return l==null?void 0:l.login.user}}})}});return s(A,{children:[i(b,{as:"h1",size:"32",children:"Log in"}),a&&s(T,{children:["Error: ",a.message]}),i(Ai,{loading:t,onSubmit:({email:o,password:l})=>n({variables:{input:{email:o,password:l}}})})]})}const zi=ae().shape({email:q().email("Must be a valid email").required("Email is required"),password:q().required("Password is required")});function Ei({loading:e,onSubmit:r}){var o,l;const{register:n,handleSubmit:t,formState:{errors:a}}=U({mode:"onTouched",resolver:te(zi)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(D,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=a.email)==null?void 0:o.message,required:!0},n("email"))),i(D,d({type:"password",label:"Password",error:(l=a.password)==null?void 0:l.message,required:!0},n("password"))),i(j,{type:"submit",loading:e,children:"Sign up"})]})})}function Ti(){const e=Y(),[r,{loading:n,error:t}]=ri({onError:a=>console.error(a),onCompleted:()=>e("/")});return s(A,{children:[i(b,{as:"h1",size:"32",children:"Sign up"}),t&&s(T,{children:["Error: ",t.message]}),i(Ei,{loading:n,onSubmit:({email:a,password:o})=>r({variables:{input:{email:a,password:o}}})})]})}function le(){return i(A,{children:i("p",{children:"Loading..."})})}const Di=u.ul`
  margin-left: 2rem;
`;function Ri(){const{data:e,loading:r,error:n}=oi(),[t,{loading:a,error:o}]=Xe({onError:l=>console.error(l),update(l,{data:m}){l.modify({fields:{characters(c=[]){const v=l.writeFragment({data:m==null?void 0:m.createCharacter.character,fragment:_`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...c,v]}}})}});return r?i(le,{}):n||!e?s(T,{children:["Error: ",n&&n.message]}):s(A,{children:[i(b,{as:"h1",size:"32",children:"Characters"}),o&&s(T,{children:["Error: ",o==null?void 0:o.message]}),i(Di,{children:e.characters.map(({id:l,name:m})=>i("li",{children:i(H,{to:`/characters/${l}`,children:m})},l))})]})}const we="active",$e=u(b).attrs({forwardedAs:H})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Fi=u($e).attrs({forwardedAs:Fe})`
  &.${we} {
    font-weight: 600;
    text-decoration: underline;
  }
`,Ce=n=>{var t=n,{children:e}=t,r=C(t,["children"]);return i($e,$(d({},r),{children:e}))},Pi=n=>{var t=n,{children:e}=t,r=C(t,["children"]);return i(Fi,$(d({className:({isActive:a})=>a?we:""},r),{children:e}))},ce=u(Pi)`
  padding: 11.5px 16px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray100};
  }
`;function Mi({name:e}){const{characterId:r}=N();return r?s(p,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[i(Ce,{size:"24",to:"/characters",children:"Characters"}),i(b,{size:"24",children:"/"}),i(Ce,{size:"24",to:`/characters/${r}`,children:e!=null?e:"Loading..."})]}):null}const Ni=u(p).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function Hi(){const{characterId:e}=N();return e?s(Ni,{children:[i(ce,{to:"",end:!0,children:"Summary"}),i(ce,{to:"details",children:"Details"}),i(ce,{to:"race",children:"Race"})]}):null}function Yi({name:e}){return s(ve,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[i(Mi,{name:e}),i(Hi,{})]})}function qi(){const{characterId:e}=N(),{data:r,loading:n,error:t}=Q({variables:{id:String(e)}});if(n)return i(le,{});if(t||!(r==null?void 0:r.character))return i(B,{message:t==null?void 0:t.message});const{character:a}=r;return s(O,{children:[i(Yi,{name:a.name}),i(Pe,{})]})}const Oi=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,ji=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Bi=u.textarea`
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
`,K=ne.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:n,rows:t=4,required:a=!1}=c,o=C(c,["name","label","error","rows","required"]);return s(Oi,{children:[i(se,{htmlFor:e,required:a,children:r}),n&&i(ji,{children:n}),i(Bi,d({id:e,name:e,rows:t,"aria-label":r,"aria-required":a,ref:l},o))]})}),Gi=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Wi=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Ui=u.select`
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
`,ke=ne.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:n,required:t=!1,children:a}=c,o=C(c,["name","label","error","required","children"]);return s(Gi,{children:[i(se,{htmlFor:e,required:t,children:r}),n&&i(Wi,{children:n}),i(Ui,$(d({id:e,name:e,"aria-label":r,"aria-required":t,$error:!!n,ref:l},o),{children:a}))]})});function Se({name:e,loading:r,onReset:n}){return s(p,{alignItems:"center",children:[i(b,{as:"h1",size:"32",children:e}),s(ve,{justifyContent:"flex-end",gap:"4",children:[i(j,{type:"submit",loading:r,children:"Save"}),i(j,{variant:"secondary",onClick:n,children:"Reset"})]})]})}const Qi=ae().shape({name:q(),level:Me().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Vi({name:e,level:r,alignmentId:n,background:t,traits:a,ideals:o,bonds:l,flaws:m,loading:c,onCancel:v,onSubmit:L}){var w,h,x,k,R,F,P,M;const{register:f,handleSubmit:E,formState:{errors:g}}=U({mode:"onTouched",defaultValues:{name:e,level:r,alignmentId:n,background:t,traits:a,ideals:o,bonds:l,flaws:m},resolver:te(Qi)});return i("form",{onSubmit:E(L),children:s(p,{direction:"column",gap:"16",children:[i(Se,{name:"Details",loading:c,onReset:v}),s(p,{gap:"16",justifyContent:"center",children:[s(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:[i(D,d({type:"text",label:"Name",placeholder:"Untitled",error:(w=g.name)==null?void 0:w.message},f("name"))),i(D,d({type:"number",label:"Level",error:(h=g.level)==null?void 0:h.message},f("level",{valueAsNumber:!0}))),i(D,d({type:"text",label:"Background",placeholder:"Acolyte",error:(x=g.background)==null?void 0:x.message},f("background"))),s(ke,$(d({label:"Alignment",error:(k=g.alignmentId)==null?void 0:k.message},f("alignmentId")),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Lawful Good"}),i("option",{value:"2",children:"Neutral Good"}),i("option",{value:"3",children:"Chaotic Good"}),i("option",{value:"4",children:"Lawful Neutral"}),i("option",{value:"5",children:"Neutral"}),i("option",{value:"6",children:"Chaotic Neutral"}),i("option",{value:"7",children:"Lawful Evil"}),i("option",{value:"8",children:"Neutral Evil"}),i("option",{value:"9",children:"Chaotic Evil"})]}))]}),s(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:[i(K,d({label:"Personality traits",error:(R=g.traits)==null?void 0:R.message},f("traits"))),i(K,d({label:"Ideals",error:(F=g.ideals)==null?void 0:F.message},f("ideals"))),i(K,d({label:"Bonds",error:(P=g.bonds)==null?void 0:P.message},f("bonds"))),i(K,d({label:"Flaws",error:(M=g.flaws)==null?void 0:M.message},f("flaws")))]})]})]})})}function Ki(){var v,L,f,E,g,w,h;const e=Y(),{characterId:r}=N(),{data:n,loading:t,error:a}=Q({variables:{id:String(r)}}),[o,{loading:l,error:m}]=fe({onError:x=>console.error(x)});if(a||!(n==null?void 0:n.character))return i(B,{message:a==null?void 0:a.message});const{character:c}=n;return s(A,{children:[m&&i(T,{children:m.message}),i(Vi,{name:c.name,level:c.level,alignmentId:(L=(v=c.alignment)==null?void 0:v.id)!=null?L:"",background:(f=c.background)!=null?f:"",traits:(E=c.traits)!=null?E:"",ideals:(g=c.ideals)!=null?g:"",bonds:(w=c.bonds)!=null?w:"",flaws:(h=c.flaws)!=null?h:"",loading:l,onCancel:()=>e(`/characters/${r}`),onSubmit:({name:x,level:k,background:R,alignmentId:F,traits:P,ideals:M,bonds:Z,flaws:ee})=>{o({variables:{input:{id:String(r),name:x||void 0,level:k||void 0,background:R||void 0,alignmentId:F||void 0,traits:P||void 0,ideals:M||void 0,bonds:Z||void 0,flaws:ee||void 0}}}),e(`/characters/${r}`)}})]})}const Ji=u.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,Xi=u.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,Zi=u.span`
  text-transform: uppercase;
`,er=u.h3`
  font-size: 24px;
  line-height: 32px;
`;function ir({ability:e}){const{id:r,name:n,score:t,modifier:a}=e;return s(Xi,{children:[i(Zi,{children:n.slice(0,3)}),s(er,{children:[a>=0?"+":"-",a]}),i("span",{children:t})]},r)}function rr({abilities:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(b,{as:"h3",weight:"600",children:"Abilities"}),i(Ji,{children:e.map(r=>i(ir,{ability:r}))})]})}const nr=u.ul`
  margin-left: 1.5rem;
`,ar=u.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,tr=u.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,or=u.span`
  text-decoration: underline;
`,sr=u.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function lr({skill:e}){const{id:r,name:n,modifier:t,ability:a}=e;return i(ar,{children:s(tr,{children:[s(or,{children:[t>=0?"+":"-",t]}),i("span",{children:n}),s(sr,{children:["(",a.name.slice(0,3),")"]})]})},r)}function cr({skills:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(b,{weight:"600",children:"Skills"}),i(nr,{children:e.map(r=>i(lr,{skill:r}))})]})}function dr(){const{characterId:e}=N(),{data:r,loading:n,error:t}=Q({variables:{id:String(e)},skip:!e});if(n)return i(le,{});if(t||!(r==null?void 0:r.character))return i(B,{message:t==null?void 0:t.message});const{character:a}=r;return s(A,{children:[i(rr,{abilities:a.abilities}),i(cr,{skills:a.skills})]})}function J({name:e,description:r}){return r?s(p,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[i(b,{weight:"600",children:e}),i(b,{children:r})]}):null}const ur=u.ul`
  margin-left: 1.5rem;
`;function mr({raceId:e,loading:r,onChange:n,onCancel:t,onSubmit:a}){var c;const{register:o,handleSubmit:l,formState:{errors:m}}=U({mode:"onTouched",defaultValues:{raceId:e}});return i("form",{onSubmit:l(a),children:s(p,{direction:"column",gap:"16",children:[i(Se,{name:"Race",loading:r,onReset:t}),i(p,{gap:"16",justifyContent:"center",children:i(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:s(ke,$(d({label:"Race",error:(c=m.raceId)==null?void 0:c.message},o("raceId",{onChange:v=>n(v.target.value)})),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Dwarf"}),i("option",{value:"2",children:"Elf"}),i("option",{value:"3",children:"Halfling"}),i("option",{value:"4",children:"Human"}),i("option",{value:"5",children:"Dragonborn"}),i("option",{value:"6",children:"Gnome"}),i("option",{value:"7",children:"Elf"}),i("option",{value:"8",children:"Orc"}),i("option",{value:"9",children:"Tiefling"})]}))})})]})})}function hr(){var w;const[e,r]=S.exports.useState(""),n=Y(),{characterId:t}=N(),{data:a,loading:o,error:l}=Q({variables:{id:String(t)}}),[m,{data:c,loading:v,error:L}]=di();S.exports.useEffect(()=>{var h,x,k;r((k=(x=(h=a==null?void 0:a.character)==null?void 0:h.race)==null?void 0:x.id)!=null?k:"")},[a]),S.exports.useEffect(()=>{!e||m({variables:{id:e}})},[e]),S.exports.useEffect(()=>{console.log(c==null?void 0:c.race)},[c]);const[f,{loading:E,error:g}]=fe({onError:h=>console.error(h)});return l||!(a==null?void 0:a.character)?i(B,{message:l==null?void 0:l.message}):s(A,{children:[i(mr,{raceId:(w=a.character.race)==null?void 0:w.id,onChange:h=>r(h),onCancel:()=>n(`/characters/${t}`),onSubmit:({raceId:h})=>{f({variables:{input:{id:String(t),raceId:h||void 0}}}),n(`/characters/${t}`)}}),s(p,{direction:"column",gap:"16",mt:"16",children:[L&&i(T,{children:"Race Not Found"}),(c==null?void 0:c.race)&&s(p,{as:"article",direction:"column",gap:"16",children:[s(xe,{children:[i(b,{as:"h2",size:"24",children:"Ability Score Improvements"}),i(ur,{children:c.race.abilityScoreIncreases.map(h=>i("li",{children:`${h.ability.name} ${h.increase>=0?"+":"-"}${h.increase}`},h.id))})]}),s(xe,{children:[i(b,{as:"h2",size:"24",children:"Details"}),c.race.description&&i(b,{children:c.race.description}),i(J,{name:"Age",description:c.race.age}),i(J,{name:"Alignment",description:c.race.alignment}),i(J,{name:"Size",description:c.race.size}),i(J,{name:"Speed",description:c.race.speed})]})]})]})]})}function pr(){const{isLoggedIn:e}=oe();return s(Ne,{basename:"/dungeonist/",children:[i(pi,{}),s(He,{children:[i(I,{path:"/",element:i(xi,{})}),e?s(O,{children:[i(I,{path:"/characters",element:i(Ri,{})}),s(I,{path:"/characters/:characterId",element:i(qi,{}),children:[i(I,{index:!0,element:i(dr,{})}),i(I,{path:"details",element:i(Ki,{})}),i(I,{path:"race",element:i(hr,{})})]})]}):s(O,{children:[i(I,{path:"/signup",element:i(Ti,{})}),i(I,{path:"/login",element:i(Li,{})})]}),i(I,{path:"*",element:i(B,{})})]})]})}const X=Ye.link("https://github.com/graphql"),fr=[X.query("Me",(e,r,n)=>r(n.data({me:{id:"1",email:"luke.skywalker@gmail.com",__typename:"User"},__typename:"Query"}))),X.query("Characters",(e,r,n)=>r(n.data({characters:[{id:"1",name:"Obi-Wan Kenobi",__typename:"Character"}]}))),X.query("Character",(e,r,n)=>r(n.data({character:{id:"1",name:"Obi-Wan Kenobi",level:2,experience:300,inspiration:0,abilities:[{id:"1",name:"Strength",score:11,modifier:0,__typename:"CharacterAbility"},{id:"2",name:"Dexterity",score:11,modifier:0,__typename:"CharacterAbility"},{id:"3",name:"Constitution",score:11,modifier:0,__typename:"CharacterAbility"},{id:"4",name:"Intelligence",score:11,modifier:0,__typename:"CharacterAbility"},{id:"5",name:"Wisdom",score:11,modifier:0,__typename:"CharacterAbility"},{id:"6",name:"Charisma",score:11,modifier:0,__typename:"CharacterAbility"}],skills:[{id:"1",name:"Acrobatics",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"2",name:"Athletics",modifier:0,isProficient:!1,ability:{id:"1",name:"Strength",__typename:"CharacterAbility"}},{id:"3",name:"Animal Handling",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"4",name:"Arcana",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"5",name:"Deception",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"6",name:"History",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"7",name:"Insight",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"8",name:"Intimidation",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"9",name:"Investigation",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"10",name:"Medicine",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"11",name:"Nature",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"12",name:"Perception",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"13",name:"Performance",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"14",name:"Persuasion",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"15",name:"Religion",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"16",name:"Sleight of Hand",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"17",name:"Stealth",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"18",name:"Survival",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}}],alignment:{name:"Lawful Good",id:"1",__typename:"Alignment"},background:"Jedi Master",race:{id:"4",name:"Human",__typename:"CharacterRace"},traits:"",ideals:"",bonds:"",flaws:"",__typename:"Character"},__typename:"Query"}))),X.query("Race",(e,r,n)=>{if(e.variables.id==="1")return r(n.data({race:{id:"1",name:"Dwarf",description:"Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",age:"Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",alignment:"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",size:"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",speed:"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="2")return r(n.data({race:{id:"2",name:"Elf",description:"Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",age:"Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",alignment:"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",size:"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="3")return r(n.data({race:{id:"3",name:"Halfling",description:"Your halfling character has a number of traits in common with all other halflings.",age:"A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",alignment:"Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",size:"Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"2",name:"Dexterity"},increase:2}],__typename:"Race"}}));if(e.variables.id==="4")return r(n.data({race:{id:"4",name:"Human",description:"It's hard to make generalizations about humans, but your human character has these traits.",age:"Humans reach adulthood in their late teens and live less than a century.",alignment:"Humans tend toward no particular alignment. The best and the worst are found among them.",size:"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:1},{id:"2",ability:{id:"2",name:"Dexterity"},increase:1},{id:"3",ability:{id:"3",name:"Constituion"},increase:1},{id:"4",ability:{id:"4",name:"Intelligence"},increase:1},{id:"5",ability:{id:"5",name:"Wisdom"},increase:1},{id:"6",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="5")return r(n.data({race:{id:"5",name:"Dragonborn",description:"Your draconic heritage manifests in a variety of traits you share with other dragonborn.",age:"Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",alignment:"Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",size:"Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="6")return r(n.data({race:{id:"6",name:"Gnome",description:"Your gnome character has certain characteristics in common with all other gnomes.",age:"Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",alignment:"Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",size:"Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"2",ability:{id:"4",name:"Intelligence"},increase:1}],__typename:"Race"}}));if(e.variables.id==="7")return r(n.data({race:{id:"7",name:"Half-Elf",description:"Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",age:"Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",alignment:"Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",size:"Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="8")return r(n.data({race:{id:"8",name:"Half-Orc",description:"Your half-orc character has certain traits deriving from your orc ancestry.",age:"Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",alignment:"Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",size:"Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"2",name:"Constitution"},increase:1}],__typename:"Race"}}));if(e.variables.id==="9")return r(n.data({race:{id:"9",name:"Tiefling",description:"Tieflings share certain racial traits as a result of their infernal descent.",age:"Tieflings mature at the same rate as humans but live a few years longer.",alignment:"Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",size:"Tieflings are about the same size and build as humans. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"4",name:"Intelligence"},increase:1},{id:"2",ability:{id:"6",name:"Charisma"},increase:2}],__typename:"Race"}}))})],gr=qe({uri:"https://github.com/graphql"}),yr=Oe((e,{headers:r})=>{const n=localStorage.getItem("token");return{headers:d(d({},r),n&&{authorization:`Bearer ${n}`})}}),br=new je({link:yr.concat(gr),cache:new Be});window.location.pathname==="/dungeonist"&&(window.location.pathname="/dungeonist/");localStorage.setItem("token","jwt");const vr=Ge(...fr);vr.start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});We.render(i(Ue,{client:br,children:i(Ke,{children:s(Qe,{theme:yi,children:[i(fi,{}),i(pr,{})]})})}),document.getElementById("root"));
