var ze=Object.defineProperty,Ee=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var he=(e,r,n)=>r in e?ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))ue.call(r,n)&&he(e,n,r[n]);if(W)for(var n of W(r))me.call(r,n)&&he(e,n,r[n]);return e},$=(e,r)=>Ee(e,Te(r));var C=(e,r)=>{var n={};for(var t in e)ue.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&W)for(var t of W(e))r.indexOf(t)<0&&me.call(e,t)&&(n[t]=e[t]);return n};import{j as ne,r as S,g as _,u as ae,a as U,b as De,s as u,L as q,c as O,W as Fe,C as Re,R as te,d as Q,e as N,f as j,o as V,h as pe,N as Pe,i as H,O as Me,B as Ne,k as He,l as I,m as Ye,n as qe,p as Oe,A as je,I as Be,q as Ge,t as We,v as Ue,F as Qe}from"./vendor.2be2c6d8.js";const Ve=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};Ve();const i=ne.exports.jsx,s=ne.exports.jsxs,B=ne.exports.Fragment,fe=S.exports.createContext({});function Ke({children:e}){const[r,n]=S.exports.useState(null),[t,a]=S.exports.useState(localStorage.getItem("token"));function o({token:c,user:v}){n(v),a(c),localStorage.setItem("token",c)}function l(){n(null),a(null),localStorage.removeItem("token")}const m=S.exports.useMemo(()=>({user:r,token:t,isLoggedIn:!!t,login:o,logout:l}),[r,t,o,l]);return i(fe.Provider,{value:m,children:e})}function oe(){return S.exports.useContext(fe)}const E={},Je=_`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Xe(e){const r=d(d({},E),e);return U(Je,r)}const Ze=_`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function ei(e){const r=d(d({},E),e);return U(Ze,r)}const ii=_`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function ri(e){const r=d(d({},E),e);return U(ii,r)}const ni=_`
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
    `;function ge(e){const r=d(d({},E),e);return U(ni,r)}const ai=_`
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
    `;function K(e){const r=d(d({},E),e);return ae(ai,r)}const ti=_`
    query Characters {
  characters {
    id
    name
  }
}
    `;function oi(e){const r=d(d({},E),e);return ae(ti,r)}const li=_`
    query Me {
  me {
    id
    email
  }
}
    `;function si(e){const r=d(d({},E),e);return ae(li,r)}const ci=_`
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
    `;function di(e){const r=d(d({},E),e);return De(ci,r)}const ui=u.button`
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
`;function Y(m){var c=m,{as:e="button",type:r="button",variant:n="primary",loading:t=!1,disabled:a=!1,children:o}=c,l=C(c,["as","type","variant","loading","disabled","children"]);return i(ui,$(d({as:e,type:e==="button"?r:void 0,$variant:n,disabled:t||a},l),{children:o&&t?i("div",{children:'"Loading..."'}):o}))}const mi=u.nav`
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
`,be=u.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  /* TODO: refactor to use flex gap fallback on safari */
  gap: 1rem;
`,J=u(q)`
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
`,ye=u(Y).attrs({variant:"secondary"})`
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
`;function pi(){const e=O(),{isLoggedIn:r,logout:n}=oe(),{data:t,loading:a}=si();return a?i("p",{children:"Loading..."}):i(mi,{children:i(hi,{children:r?s(B,{children:[i(J,{to:"/",children:"Dungeonist"}),s(be,{children:[i("li",{children:i(J,{to:"/characters",children:"Characters"})}),i("li",{children:i(ye,{onClick:()=>{n(),e("/")},children:"Log out"})})]})]}):s(B,{children:[i(J,{to:"/",children:"Dungeonist"}),s(be,{children:[i("li",{children:i(J,{to:"/login",children:"Log in"})}),i("li",{children:i(ye,{as:q,to:"/signup",children:"Sign up"})})]})]})})})}const fi=Fe`
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
`,ve={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},gi={sm:640,md:768,lg:1024,xl:1280},bi={colors:ve,breakpoints:gi};function yi(e){if(e!=="none")return`${e}px`}function b(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const vi=u.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>yi(e)};
  /* flex child */
  flex-grow: ${({$flexGrow:e})=>e};
  flex-shrink: ${({$flexShrink:e})=>e};
  flex-basis: ${({$flexBasis:e})=>e};
  align-self: ${({$alignSelf:e})=>e};
  /* margin */
  margin: ${({$m:e})=>b(e)};
  margin: ${({$mx:e})=>e!=="none"?`0 ${b(e)}`:void 0};
  margin: ${({$my:e})=>e!=="none"?`${b(e)} 0`:void 0};
  margin-top: ${({$mt:e})=>b(e)};
  margin-right: ${({$mr:e})=>b(e)};
  margin-bottom: ${({$mb:e})=>b(e)};
  margin-left: ${({$ml:e})=>b(e)};
  /* padding */
  padding: ${({$p:e})=>b(e)};
  padding: ${({$px:e})=>e!=="none"?`0 ${b(e)}`:void 0};
  padding: ${({$py:e})=>e!=="none"?`${b(e)} 0`:void 0};
  padding-top: ${({$pt:e})=>b(e)};
  padding-right: ${({$pr:e})=>b(e)};
  padding-bottom: ${({$pb:e})=>b(e)};
  padding-left: ${({$pl:e})=>b(e)};
  /* rest */
  width: 100%;
  max-width: 768px;
  background: ${({$background:e})=>e?ve[e]:void 0};
`;function p($r){var de=$r,{direction:e="row",wrap:r="nowrap",justifyContent:n="flex-start",alignItems:t="stretch",alignContent:a="normal",gap:o="none",flexGrow:l=0,flexShrink:m=1,flexBasis:c="auto",alignSelf:v="auto",m:z="none",mx:f="none",my:T="none",mt:g="none",mr:w="none",mb:h="none",ml:x="none",p:k="none",px:F="none",py:R="none",pt:P="none",pr:M="none",pb:ie="none",pl:re="none",background:Ie,children:Ae}=de,Le=C(de,["direction","wrap","justifyContent","alignItems","alignContent","gap","flexGrow","flexShrink","flexBasis","alignSelf","m","mx","my","mt","mr","mb","ml","p","px","py","pt","pr","pb","pl","background","children"]);return i(vi,$(d({$flexDirection:e,$flexWrap:r,$justifyContent:n,$alignItems:t,$gap:o,$flexGrow:l,$flexShrink:m,$flexBasis:c,$alignSelf:v,$m:z,$mx:f,$my:T,$mt:g,$mr:w,$mb:h,$ml:x,$p:k,$px:F,$py:R,$pt:P,$pr:M,$pb:ie,$pl:re,$background:Ie},Le),{children:Ae}))}const xe=u(p)`
  max-width: 100%;
`;function A({children:e}){return i(p,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function we({children:e}){return i(p,{direction:"column",gap:"16",flexGrow:1,children:e})}function xi(){return i(A,{children:i("h1",{children:"Hello World"})})}const wi=u.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function D({children:e}){return i(wi,{children:e})}const $i=u.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function y(a){var o=a,{size:e="16",weight:r="400",children:n}=o,t=C(o,["size","weight","children"]);return i($i,$(d({$size:e,$weight:r},t),{children:n}))}function G({message:e}){return s(A,{children:[i(y,{as:"h1",size:"32",children:"404"}),i(D,{children:e||"Not Found"}),i(q,{to:"/",children:"Home"})]})}const Ci=u.label`
  display: block;

  ${({$required:e})=>e&&Re`
      ::after {
        content: "*";
      }
    `};
`;function le(t){var a=t,{required:e=!1,children:r}=a,n=C(a,["required","children"]);return i(Ci,$(d({$required:e},n),{children:r}))}const ki=u.div`
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
`,L=te.forwardRef((m,l)=>{var c=m,{name:e,label:r,type:n,error:t,required:a=!1}=c,o=C(c,["name","label","type","error","required"]);return s(ki,{children:[i(le,{htmlFor:e,required:a,children:r}),t&&i(Si,{children:t}),i(_i,d({id:e,name:e,type:n,"aria-label":r,"aria-required":a,$error:!!t,ref:l},o))]})}),Ii=Q().shape({email:N().email("Must be a valid email").required("Email is required"),password:N().required("Password is required")});function Ai({loading:e,onSubmit:r}){var o,l;const{register:n,handleSubmit:t,formState:{errors:a}}=j({mode:"onTouched",resolver:V(Ii)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(L,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=a.email)==null?void 0:o.message,required:!0},n("email"))),i(L,d({type:"password",label:"Password",error:(l=a.password)==null?void 0:l.message,required:!0},n("password"))),i(Y,{type:"submit",loading:e,children:"Log in"})]})})}function Li(){const e=O(),{login:r}=oe(),[n,{loading:t,error:a}]=ei({onError:o=>console.error(o),onCompleted:({login:o})=>{r(o),e("/")},update(o,{data:l}){o.modify({fields:{me(){return l==null?void 0:l.login.user}}})}});return s(A,{children:[i(y,{as:"h1",size:"32",children:"Log in"}),a&&s(D,{children:["Error: ",a.message]}),i(Ai,{loading:t,onSubmit:({email:o,password:l})=>n({variables:{input:{email:o,password:l}}})})]})}const zi=Q().shape({email:N().email("Must be a valid email").required("Email is required"),password:N().required("Password is required")});function Ei({loading:e,onSubmit:r}){var o,l;const{register:n,handleSubmit:t,formState:{errors:a}}=j({mode:"onTouched",resolver:V(zi)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(L,d({type:"text",label:"Email",placeholder:"example@gmail.com",error:(o=a.email)==null?void 0:o.message,required:!0},n("email"))),i(L,d({type:"password",label:"Password",error:(l=a.password)==null?void 0:l.message,required:!0},n("password"))),i(Y,{type:"submit",loading:e,children:"Sign up"})]})})}function Ti(){const e=O(),[r,{loading:n,error:t}]=ri({onError:a=>console.error(a),onCompleted:()=>e("/")});return s(A,{children:[i(y,{as:"h1",size:"32",children:"Sign up"}),t&&s(D,{children:["Error: ",t.message]}),i(Ei,{loading:n,onSubmit:({email:a,password:o})=>r({variables:{input:{email:a,password:o}}})})]})}function se(){return i(A,{children:i("p",{children:"Loading..."})})}const Di=Q().shape({name:N(),level:pe().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Fi({loading:e,onSubmit:r}){var o,l;const{register:n,handleSubmit:t,formState:{errors:a}}=j({mode:"onTouched",defaultValues:{level:1},resolver:V(Di)});return i("form",{onSubmit:t(r),children:s(p,{direction:"column",gap:"16",children:[i(L,d({type:"text",label:"Name",placeholder:"Untitled",error:(o=a.name)==null?void 0:o.message},n("name"))),i(L,d({type:"number",label:"Level",error:(l=a.level)==null?void 0:l.message},n("level",{valueAsNumber:!0}))),i(Y,{type:"submit",loading:e,children:"Create"})]})})}const Ri=u.ul`
  margin-left: 2rem;
`;function Pi(){const{data:e,loading:r,error:n}=oi(),[t,{loading:a,error:o}]=Xe({onError:l=>console.error(l),update(l,{data:m}){l.modify({fields:{characters(c=[]){const v=l.writeFragment({data:m==null?void 0:m.createCharacter.character,fragment:_`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...c,v]}}})}});return r?i(se,{}):n||!e?s(D,{children:["Error: ",n&&n.message]}):s(A,{children:[i(y,{as:"h1",size:"32",children:"Characters"}),o&&s(D,{children:["Error: ",o==null?void 0:o.message]}),i(Fi,{loading:a,onSubmit:({name:l,level:m})=>t({variables:{input:{name:l||void 0,level:m||void 0}}})}),i(Ri,{children:e.characters.map(({id:l,name:m})=>i("li",{children:i(q,{to:`/characters/${l}`,children:m})},l))})]})}const $e="active",Ce=u(y).attrs({forwardedAs:q})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Mi=u(Ce).attrs({forwardedAs:Pe})`
  &.${$e} {
    font-weight: 600;
    text-decoration: underline;
  }
`,ke=n=>{var t=n,{children:e}=t,r=C(t,["children"]);return i(Ce,$(d({},r),{children:e}))},Ni=n=>{var t=n,{children:e}=t,r=C(t,["children"]);return i(Mi,$(d({className:({isActive:a})=>a?$e:""},r),{children:e}))},ce=u(Ni)`
  padding: 11.5px 16px;

  &:hover {
    background-color: ${({theme:e})=>e.colors.gray100};
  }
`;function Hi({name:e}){const{characterId:r}=H();return r?s(p,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[i(ke,{size:"24",to:"/characters",children:"Characters"}),i(y,{size:"24",children:"/"}),i(ke,{size:"24",to:`/characters/${r}`,children:e!=null?e:"Loading..."})]}):null}const Yi=u(p).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function qi(){const{characterId:e}=H();return e?s(Yi,{children:[i(ce,{to:"",end:!0,children:"Summary"}),i(ce,{to:"details",children:"Details"}),i(ce,{to:"race",children:"Race"})]}):null}function Oi({name:e}){return s(xe,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[i(Hi,{name:e}),i(qi,{})]})}function ji(){const{characterId:e}=H(),{data:r,loading:n,error:t}=K({variables:{id:String(e)}});if(n)return i(se,{});if(t||!(r==null?void 0:r.character))return i(G,{message:t==null?void 0:t.message});const{character:a}=r;return s(B,{children:[i(Oi,{name:a.name}),i(Me,{})]})}const Bi=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Gi=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Wi=u.textarea`
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
`,X=te.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:n,rows:t=4,required:a=!1}=c,o=C(c,["name","label","error","rows","required"]);return s(Bi,{children:[i(le,{htmlFor:e,required:a,children:r}),n&&i(Gi,{children:n}),i(Wi,d({id:e,name:e,rows:t,"aria-label":r,"aria-required":a,ref:l},o))]})}),Ui=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Qi=u.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Vi=u.select`
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
`,Se=te.forwardRef((m,l)=>{var c=m,{name:e,label:r,error:n,required:t=!1,children:a}=c,o=C(c,["name","label","error","required","children"]);return s(Ui,{children:[i(le,{htmlFor:e,required:t,children:r}),n&&i(Qi,{children:n}),i(Vi,$(d({id:e,name:e,"aria-label":r,"aria-required":t,$error:!!n,ref:l},o),{children:a}))]})});function _e({name:e,loading:r,onReset:n}){return s(p,{alignItems:"center",children:[i(y,{as:"h1",size:"32",children:e}),s(xe,{justifyContent:"flex-end",gap:"4",children:[i(Y,{type:"submit",loading:r,children:"Save"}),i(Y,{variant:"secondary",onClick:n,children:"Reset"})]})]})}const Ki=Q().shape({name:N(),level:pe().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Ji({name:e,level:r,alignmentId:n,background:t,traits:a,ideals:o,bonds:l,flaws:m,loading:c,onCancel:v,onSubmit:z}){var w,h,x,k,F,R,P,M;const{register:f,handleSubmit:T,formState:{errors:g}}=j({mode:"onTouched",defaultValues:{name:e,level:r,alignmentId:n,background:t,traits:a,ideals:o,bonds:l,flaws:m},resolver:V(Ki)});return i("form",{onSubmit:T(z),children:s(p,{direction:"column",gap:"16",children:[i(_e,{name:"Details",loading:c,onReset:v}),s(p,{gap:"16",justifyContent:"center",children:[s(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:[i(L,d({type:"text",label:"Name",placeholder:"Untitled",error:(w=g.name)==null?void 0:w.message},f("name"))),i(L,d({type:"number",label:"Level",error:(h=g.level)==null?void 0:h.message},f("level",{valueAsNumber:!0}))),i(L,d({type:"text",label:"Background",placeholder:"Acolyte",error:(x=g.background)==null?void 0:x.message},f("background"))),s(Se,$(d({label:"Alignment",error:(k=g.alignmentId)==null?void 0:k.message},f("alignmentId")),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Lawful Good"}),i("option",{value:"2",children:"Neutral Good"}),i("option",{value:"3",children:"Chaotic Good"}),i("option",{value:"4",children:"Lawful Neutral"}),i("option",{value:"5",children:"Neutral"}),i("option",{value:"6",children:"Chaotic Neutral"}),i("option",{value:"7",children:"Lawful Evil"}),i("option",{value:"8",children:"Neutral Evil"}),i("option",{value:"9",children:"Chaotic Evil"})]}))]}),s(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:[i(X,d({label:"Personality traits",error:(F=g.traits)==null?void 0:F.message},f("traits"))),i(X,d({label:"Ideals",error:(R=g.ideals)==null?void 0:R.message},f("ideals"))),i(X,d({label:"Bonds",error:(P=g.bonds)==null?void 0:P.message},f("bonds"))),i(X,d({label:"Flaws",error:(M=g.flaws)==null?void 0:M.message},f("flaws")))]})]})]})})}function Xi(){var v,z,f,T,g,w,h;const e=O(),{characterId:r}=H(),{data:n,loading:t,error:a}=K({variables:{id:String(r)}}),[o,{loading:l,error:m}]=ge({onError:x=>console.error(x)});if(a||!(n==null?void 0:n.character))return i(G,{message:a==null?void 0:a.message});const{character:c}=n;return s(A,{children:[m&&i(D,{children:m.message}),i(Ji,{name:c.name,level:c.level,alignmentId:(z=(v=c.alignment)==null?void 0:v.id)!=null?z:"",background:(f=c.background)!=null?f:"",traits:(T=c.traits)!=null?T:"",ideals:(g=c.ideals)!=null?g:"",bonds:(w=c.bonds)!=null?w:"",flaws:(h=c.flaws)!=null?h:"",loading:l,onCancel:()=>e(`/characters/${r}`),onSubmit:({name:x,level:k,background:F,alignmentId:R,traits:P,ideals:M,bonds:ie,flaws:re})=>{o({variables:{input:{id:String(r),name:x||void 0,level:k||void 0,background:F||void 0,alignmentId:R||void 0,traits:P||void 0,ideals:M||void 0,bonds:ie||void 0,flaws:re||void 0}}}),e(`/characters/${r}`)}})]})}const Zi=u.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,er=u.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.colors.black};
`,ir=u.span`
  text-transform: uppercase;
`,rr=u.h3`
  font-size: 24px;
  line-height: 32px;
`;function nr({ability:e}){const{id:r,name:n,score:t,modifier:a}=e;return s(er,{children:[i(ir,{children:n.slice(0,3)}),s(rr,{children:[a>=0?"+":"-",a]}),i("span",{children:t})]},r)}function ar({abilities:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(y,{as:"h3",weight:"600",children:"Abilities"}),i(Zi,{children:e.map(r=>i(nr,{ability:r}))})]})}const tr=u.ul`
  margin-left: 1.5rem;
`,or=u.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`,lr=u.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`,sr=u.span`
  text-decoration: underline;
`,cr=u.span`
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.gray500};
`;function dr({skill:e}){const{id:r,name:n,modifier:t,ability:a}=e;return i(or,{children:s(lr,{children:[s(sr,{children:[t>=0?"+":"-",t]}),i("span",{children:n}),s(cr,{children:["(",a.name.slice(0,3),")"]})]})},r)}function ur({skills:e}){return s(p,{as:"section",direction:"column",gap:"16",children:[i(y,{weight:"600",children:"Skills"}),i(tr,{children:e.map(r=>i(dr,{skill:r}))})]})}function mr(){const{characterId:e}=H(),{data:r,loading:n,error:t}=K({variables:{id:String(e)},skip:!e});if(n)return i(se,{});if(t||!(r==null?void 0:r.character))return i(G,{message:t==null?void 0:t.message});const{character:a}=r;return s(A,{children:[i(ar,{abilities:a.abilities}),i(ur,{skills:a.skills})]})}function Z({name:e,description:r}){return r?s(p,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[i(y,{weight:"600",children:e}),i(y,{children:r})]}):null}const hr=u.ul`
  margin-left: 1.5rem;
`;function pr({raceId:e,loading:r,onChange:n,onCancel:t,onSubmit:a}){var c;const{register:o,handleSubmit:l,formState:{errors:m}}=j({mode:"onTouched",defaultValues:{raceId:e}});return i("form",{onSubmit:l(a),children:s(p,{direction:"column",gap:"16",children:[i(_e,{name:"Race",loading:r,onReset:t}),i(p,{gap:"16",justifyContent:"center",children:i(p,{as:"section",direction:"column",gap:"16",flexGrow:1,children:s(Se,$(d({label:"Race",error:(c=m.raceId)==null?void 0:c.message},o("raceId",{onChange:v=>n(v.target.value)})),{children:[i("option",{value:"",selected:!0,disabled:!0}),i("option",{value:"1",children:"Dwarf"}),i("option",{value:"2",children:"Elf"}),i("option",{value:"3",children:"Halfling"}),i("option",{value:"4",children:"Human"}),i("option",{value:"5",children:"Dragonborn"}),i("option",{value:"6",children:"Gnome"}),i("option",{value:"7",children:"Elf"}),i("option",{value:"8",children:"Orc"}),i("option",{value:"9",children:"Tiefling"})]}))})})]})})}function fr(){var w;const[e,r]=S.exports.useState(""),n=O(),{characterId:t}=H(),{data:a,loading:o,error:l}=K({variables:{id:String(t)}}),[m,{data:c,loading:v,error:z}]=di();S.exports.useEffect(()=>{var h,x,k;r((k=(x=(h=a==null?void 0:a.character)==null?void 0:h.race)==null?void 0:x.id)!=null?k:"")},[a]),S.exports.useEffect(()=>{!e||m({variables:{id:e}})},[e]),S.exports.useEffect(()=>{console.log(c==null?void 0:c.race)},[c]);const[f,{loading:T,error:g}]=ge({onError:h=>console.error(h)});return l||!(a==null?void 0:a.character)?i(G,{message:l==null?void 0:l.message}):s(A,{children:[i(pr,{raceId:(w=a.character.race)==null?void 0:w.id,onChange:h=>r(h),onCancel:()=>n(`/characters/${t}`),onSubmit:({raceId:h})=>{f({variables:{input:{id:String(t),raceId:h||void 0}}}),n(`/characters/${t}`)}}),s(p,{direction:"column",gap:"16",mt:"16",children:[z&&i(D,{children:"Race Not Found"}),(c==null?void 0:c.race)&&s(p,{as:"article",direction:"column",gap:"16",children:[s(we,{children:[i(y,{as:"h2",size:"24",children:"Ability Score Improvements"}),i(hr,{children:c.race.abilityScoreIncreases.map(h=>i("li",{children:`${h.ability.name} ${h.increase>=0?"+":"-"}${h.increase}`},h.id))})]}),s(we,{children:[i(y,{as:"h2",size:"24",children:"Details"}),c.race.description&&i(y,{children:c.race.description}),i(Z,{name:"Age",description:c.race.age}),i(Z,{name:"Alignment",description:c.race.alignment}),i(Z,{name:"Size",description:c.race.size}),i(Z,{name:"Speed",description:c.race.speed})]})]})]})]})}function gr(){const{isLoggedIn:e}=oe();return s(Ne,{basename:"/dungeonist/",children:[i(pi,{}),s(He,{children:[i(I,{path:"/",element:i(xi,{})}),e?s(B,{children:[i(I,{path:"/characters",element:i(Pi,{})}),s(I,{path:"/characters/:characterId",element:i(ji,{}),children:[i(I,{index:!0,element:i(mr,{})}),i(I,{path:"details",element:i(Xi,{})}),i(I,{path:"race",element:i(fr,{})})]})]}):s(B,{children:[i(I,{path:"/signup",element:i(Ti,{})}),i(I,{path:"/login",element:i(Li,{})})]}),i(I,{path:"*",element:i(G,{})})]})]})}const ee=Ye.link("https://github.com/graphql"),br=[ee.query("Me",(e,r,n)=>r(n.data({me:{id:"1",email:"luke.skywalker@gmail.com",__typename:"User"},__typename:"Query"}))),ee.query("Characters",(e,r,n)=>r(n.data({characters:[{id:"1",name:"Obi-Wan Kenobi",__typename:"Character"}]}))),ee.query("Character",(e,r,n)=>r(n.data({character:{id:"1",name:"Obi-Wan Kenobi",level:2,experience:300,inspiration:0,abilities:[{id:"1",name:"Strength",score:11,modifier:0,__typename:"CharacterAbility"},{id:"2",name:"Dexterity",score:11,modifier:0,__typename:"CharacterAbility"},{id:"3",name:"Constitution",score:11,modifier:0,__typename:"CharacterAbility"},{id:"4",name:"Intelligence",score:11,modifier:0,__typename:"CharacterAbility"},{id:"5",name:"Wisdom",score:11,modifier:0,__typename:"CharacterAbility"},{id:"6",name:"Charisma",score:11,modifier:0,__typename:"CharacterAbility"}],skills:[{id:"1",name:"Acrobatics",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"2",name:"Athletics",modifier:0,isProficient:!1,ability:{id:"1",name:"Strength",__typename:"CharacterAbility"}},{id:"3",name:"Animal Handling",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"4",name:"Arcana",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"5",name:"Deception",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"6",name:"History",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"7",name:"Insight",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"8",name:"Intimidation",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"9",name:"Investigation",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"10",name:"Medicine",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"11",name:"Nature",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"12",name:"Perception",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}},{id:"13",name:"Performance",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"14",name:"Persuasion",modifier:0,isProficient:!1,ability:{id:"6",name:"Charisma",__typename:"CharacterAbility"}},{id:"15",name:"Religion",modifier:0,isProficient:!1,ability:{id:"4",name:"Intelligence",__typename:"CharacterAbility"}},{id:"16",name:"Sleight of Hand",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"17",name:"Stealth",modifier:0,isProficient:!1,ability:{id:"2",name:"Dexterity",__typename:"CharacterAbility"}},{id:"18",name:"Survival",modifier:0,isProficient:!1,ability:{id:"5",name:"Wisdom",__typename:"CharacterAbility"}}],alignment:{name:"Lawful Good",id:"1",__typename:"Alignment"},background:"Jedi Master",race:{id:"4",name:"Human",__typename:"CharacterRace"},traits:"",ideals:"",bonds:"",flaws:"",__typename:"Character"},__typename:"Query"}))),ee.query("Race",(e,r,n)=>{if(e.variables.id==="1")return r(n.data({race:{id:"1",name:"Dwarf",description:"Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",age:"Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",alignment:"Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",size:"Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",speed:"Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="2")return r(n.data({race:{id:"2",name:"Elf",description:"Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",age:"Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",alignment:"Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",size:"Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"3",name:"Constituion"},increase:2}],__typename:"Race"}}));if(e.variables.id==="3")return r(n.data({race:{id:"3",name:"Halfling",description:"Your halfling character has a number of traits in common with all other halflings.",age:"A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",alignment:"Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",size:"Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"2",name:"Dexterity"},increase:2}],__typename:"Race"}}));if(e.variables.id==="4")return r(n.data({race:{id:"4",name:"Human",description:"It's hard to make generalizations about humans, but your human character has these traits.",age:"Humans reach adulthood in their late teens and live less than a century.",alignment:"Humans tend toward no particular alignment. The best and the worst are found among them.",size:"Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:1},{id:"2",ability:{id:"2",name:"Dexterity"},increase:1},{id:"3",ability:{id:"3",name:"Constituion"},increase:1},{id:"4",ability:{id:"4",name:"Intelligence"},increase:1},{id:"5",ability:{id:"5",name:"Wisdom"},increase:1},{id:"6",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="5")return r(n.data({race:{id:"5",name:"Dragonborn",description:"Your draconic heritage manifests in a variety of traits you share with other dragonborn.",age:"Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",alignment:"Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",size:"Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="6")return r(n.data({race:{id:"6",name:"Gnome",description:"Your gnome character has certain characteristics in common with all other gnomes.",age:"Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",alignment:"Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",size:"Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",speed:"Your base walking speed is 25 feet.",abilityScoreIncreases:[{id:"2",ability:{id:"4",name:"Intelligence"},increase:1}],__typename:"Race"}}));if(e.variables.id==="7")return r(n.data({race:{id:"7",name:"Half-Elf",description:"Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",age:"Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",alignment:"Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",size:"Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"6",name:"Charisma"},increase:1}],__typename:"Race"}}));if(e.variables.id==="8")return r(n.data({race:{id:"8",name:"Half-Orc",description:"Your half-orc character has certain traits deriving from your orc ancestry.",age:"Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",alignment:"Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",size:"Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"1",name:"Strength"},increase:2},{id:"2",ability:{id:"2",name:"Constitution"},increase:1}],__typename:"Race"}}));if(e.variables.id==="9")return r(n.data({race:{id:"9",name:"Tiefling",description:"Tieflings share certain racial traits as a result of their infernal descent.",age:"Tieflings mature at the same rate as humans but live a few years longer.",alignment:"Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",size:"Tieflings are about the same size and build as humans. Your size is Medium.",speed:"Your base walking speed is 30 feet.",abilityScoreIncreases:[{id:"1",ability:{id:"4",name:"Intelligence"},increase:1},{id:"2",ability:{id:"6",name:"Charisma"},increase:2}],__typename:"Race"}}))})],yr=qe({uri:"https://github.com/graphql"}),vr=Oe((e,{headers:r})=>{const n=localStorage.getItem("token");return{headers:d(d({},r),n&&{authorization:`Bearer ${n}`})}}),xr=new je({link:vr.concat(yr),cache:new Be});window.location.pathname==="/dungeonist"&&(window.location.pathname="/dungeonist/");localStorage.setItem("token","jwt");const wr=Ge(...br);wr.start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});We.render(i(Ue,{client:xr,children:i(Ke,{children:s(Qe,{theme:bi,children:[i(fi,{}),i(gr,{})]})})}),document.getElementById("root"));
