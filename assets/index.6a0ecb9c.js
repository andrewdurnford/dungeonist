import{j as J,r as L,g as $,u as T,a as M,b as Ie,s as l,L as k,c as q,W as Ee,C as Ae,R as X,d as B,e as z,f as U,o as Y,h as ne,N as Re,i as v,O as te,B as De,k as Fe,l as g,m as _e,n as ze,A as je,I as Te,p as qe,q as Ne,t as Oe,F as Pe}from"./vendor.ff8afe3d.js";const Me=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}};Me();const r=J.exports.jsx,o=J.exports.jsxs,N=J.exports.Fragment,ie=L.exports.createContext({});function Be({children:e}){const[n,t]=L.exports.useState(null),[i,a]=L.exports.useState(localStorage.getItem("token"));function c({token:m,user:p}){t(p),a(m),localStorage.setItem("token",m)}function s(){t(null),a(null),localStorage.removeItem("token")}const h=L.exports.useMemo(()=>({user:n,token:i,isLoggedIn:!!i,login:c,logout:s}),[n,i,c,s]);return r(ie.Provider,{value:h,children:e})}function Z(){return L.exports.useContext(ie)}const S={},Ue=$`
    mutation CreateCharacter($input: CreateCharacterInput!) {
  createCharacter(input: $input) {
    character {
      id
      name
    }
  }
}
    `;function Ve(e){const n={...S,...e};return M(Ue,n)}const He=$`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;function Qe(e){const n={...S,...e};return M(He,n)}const We=$`
    mutation Signup($input: SignupInput!) {
  signup(input: $input)
}
    `;function Ge(e){const n={...S,...e};return M(We,n)}const Ke=$`
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
    `;function ae(e){const n={...S,...e};return M(Ke,n)}const Je=$`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;function Xe(e){const n={...S,...e};return T(Je,n)}const Ye=$`
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
    `;function C(e){const n={...S,...e};return T(Ye,n)}const Ze=$`
    query Characters {
  characters {
    id
    name
  }
}
    `;function er(e){const n={...S,...e};return T(Ze,n)}const rr=$`
    query Me {
  me {
    id
    email
  }
}
    `;function nr(e){const n={...S,...e};return T(rr,n)}const tr=$`
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
    `;function ir(e){const n={...S,...e};return Ie(tr,n)}const ar=$`
    query Races {
  races {
    id
    name
  }
}
    `;function or(e){const n={...S,...e};return T(ar,n)}const cr=l.button`
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
`;function O({as:e="button",type:n="button",variant:t="primary",loading:i=!1,disabled:a=!1,children:c,...s}){return r(cr,{as:e,type:e==="button"?n:void 0,$variant:t,disabled:i||a,...s,children:c&&i?r("div",{children:'"Loading..."'}):c})}const sr=l.nav`
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
`,V=l(k)`
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
`,ce=l(O).attrs({variant:"secondary"})`
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
`;function dr(){const e=q(),{isLoggedIn:n,logout:t}=Z(),{data:i,loading:a}=nr();return a?r("p",{children:"Loading..."}):r(sr,{children:r(lr,{children:n?o(N,{children:[r(V,{to:"/",children:"Dungeonist"}),o(oe,{children:[r("li",{children:r(V,{to:"/characters",children:"Characters"})}),r("li",{children:r(ce,{disabled:!0,onClick:()=>{t(),e("/")},children:"Log out"})})]})]}):o(N,{children:[r(V,{to:"/",children:"Dungeonist"}),o(oe,{children:[r("li",{children:r(V,{to:"/login",children:"Log in"})}),r("li",{children:r(ce,{as:k,to:"/signup",children:"Sign up"})})]})]})})})}const ur=Ee`
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
`,se={black:"#000000",white:"#FFFFFF",blue400:"#60A5FA",blue500:"#3B82F6",blue600:"#2563EB",gray100:"#F3F4F6",gray200:"#E5E7EB",gray500:"#9CA3AF",gray600:"#4B5563",gray700:"#374151",red50:"#FEF2F2",red200:"#FECACA",red400:"#F87171",red500:"#EF4444"},hr={sm:640,md:768,lg:1024,xl:1280},mr={colors:se,breakpoints:hr};function pr(e){if(e!=="none")return`${e}px`}function x(e){if(e!=="none")return e==="auto"?"auto":`${e}px`}const gr=l.div`
  /* flex parent */
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e};
  flex-wrap: ${({$flexWrap:e})=>e};
  justify-content: ${({$justifyContent:e})=>e};
  align-items: ${({$alignItems:e})=>e};
  align-content: ${({$alignContent:e})=>e};
  gap: ${({$gap:e})=>pr(e)};
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
`;function u({direction:e="row",wrap:n="nowrap",justifyContent:t="flex-start",alignItems:i="stretch",alignContent:a="normal",gap:c="none",flexGrow:s=0,flexShrink:h=1,flexBasis:m="auto",alignSelf:p="auto",m:w="none",mx:d="none",my:E="none",mt:A="none",mr:f="none",mb:R="none",ml:_="none",p:b="none",px:G="none",py:K="none",pt:ve="none",pr:$e="none",pb:ke="none",pl:Ce="none",background:we,children:Se,...Le}){return r(gr,{$flexDirection:e,$flexWrap:n,$justifyContent:t,$alignItems:i,$gap:c,$flexGrow:s,$flexShrink:h,$flexBasis:m,$alignSelf:p,$m:w,$mx:d,$my:E,$mt:A,$mr:f,$mb:R,$ml:_,$p:b,$px:G,$py:K,$pt:ve,$pr:$e,$pb:ke,$pl:Ce,$background:we,...Le,children:Se})}const le=l(u)`
  max-width: 100%;
`;function I({children:e}){return r(u,{as:"main",direction:"column",gap:"16",mx:"auto",p:"32",children:e})}function de({children:e}){return r(u,{direction:"column",gap:"16",flexGrow:1,children:e})}function fr(){return r(I,{children:r("h1",{children:"Hello World"})})}const br=l.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({theme:e})=>e.colors.red200};
  background-color: ${({theme:e})=>e.colors.red50};
  color: ${({theme:e})=>e.colors.red400};
`;function D({children:e}){return r(br,{children:e})}const xr=l.span`
  font-size: ${({$size:e})=>`${e}px`};
  font-weight: ${({$weight:e})=>e};
  line-height: ${({$size:e})=>e==="32"?"42px":e==="24"?"32px":"1.5"};
`;function y({size:e="16",weight:n="400",children:t,...i}){return r(xr,{$size:e,$weight:n,...i,children:t})}function P({message:e}){return o(I,{children:[r(y,{as:"h1",size:"32",children:"404"}),r(D,{children:e||"Not Found"}),r(k,{to:"/",children:"Home"})]})}const yr=l.label`
  display: block;

  ${({$required:e})=>e&&Ae`
      ::after {
        content: "*";
      }
    `};
`;function ee({required:e=!1,children:n,...t}){return r(yr,{$required:e,...t,children:n})}const vr=l.div`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 0.25rem;
  }
`,$r=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,kr=l.input`
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
`,F=X.forwardRef(({name:e,label:n,type:t,error:i,required:a=!1,...c},s)=>o(vr,{children:[r(ee,{htmlFor:e,required:a,children:n}),i&&r($r,{children:i}),r(kr,{id:e,name:e,type:t,"aria-label":n,"aria-required":a,$error:!!i,ref:s,...c})]})),Cr=B().shape({email:z().email("Must be a valid email").required("Email is required"),password:z().required("Password is required")});function wr({loading:e,onSubmit:n}){const{register:t,handleSubmit:i,formState:{errors:a}}=U({mode:"onTouched",resolver:Y(Cr)});return r("form",{onSubmit:i(n),children:o(u,{direction:"column",gap:"16",children:[r(F,{type:"text",label:"Email",placeholder:"example@gmail.com",error:a.email?.message,required:!0,...t("email")}),r(F,{type:"password",label:"Password",error:a.password?.message,required:!0,...t("password")}),r(O,{type:"submit",loading:e,children:"Log in"})]})})}function Sr(){const e=q(),{login:n}=Z(),[t,{loading:i,error:a}]=Qe({onError:c=>console.error(c),onCompleted:({login:c})=>{n(c),e("/")},update(c,{data:s}){c.modify({fields:{me(){return s?.login.user}}})}});return o(I,{children:[r(y,{as:"h1",size:"32",children:"Log in"}),a&&o(D,{children:["Error: ",a.message]}),r(wr,{loading:i,onSubmit:({email:c,password:s})=>t({variables:{input:{email:c,password:s}}})})]})}const Lr=B().shape({email:z().email("Must be a valid email").required("Email is required"),password:z().required("Password is required")});function Ir({loading:e,onSubmit:n}){const{register:t,handleSubmit:i,formState:{errors:a}}=U({mode:"onTouched",resolver:Y(Lr)});return r("form",{onSubmit:i(n),children:o(u,{direction:"column",gap:"16",children:[r(F,{type:"text",label:"Email",placeholder:"example@gmail.com",error:a.email?.message,required:!0,...t("email")}),r(F,{type:"password",label:"Password",error:a.password?.message,required:!0,...t("password")}),r(O,{type:"submit",loading:e,children:"Sign up"})]})})}function Er(){const e=q(),[n,{loading:t,error:i}]=Ge({onError:a=>console.error(a),onCompleted:()=>e("/")});return o(I,{children:[r(y,{as:"h1",size:"32",children:"Sign up"}),i&&o(D,{children:["Error: ",i.message]}),r(Ir,{loading:t,onSubmit:({email:a,password:c})=>n({variables:{input:{email:a,password:c}}})})]})}function H(){return r(I,{children:r("p",{children:"Loading..."})})}B().shape({name:z(),level:ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});const Ar=l.ul`
  margin-left: 2rem;
`;function Rr(){const{data:e,loading:n,error:t}=er(),[i,{loading:a,error:c}]=Ve({onError:s=>console.error(s),update(s,{data:h}){s.modify({fields:{characters(m=[]){const p=s.writeFragment({data:h?.createCharacter.character,fragment:$`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `});return[...m,p]}}})}});return n?r(H,{}):t||!e?o(D,{children:["Error: ",t&&t.message]}):o(I,{children:[r(y,{as:"h1",size:"32",children:"Characters"}),c&&o(D,{children:["Error: ",c?.message]}),!1,r(Ar,{children:e.characters.map(({id:s,name:h})=>r("li",{children:r(k,{to:`/characters/${s}/edit`,children:h})},s))})]})}const ue="active",he=l(y).attrs({forwardedAs:k})`
  display: inline-block;
  color: ${({theme:e})=>e.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Dr=l(he).attrs({forwardedAs:Re})`
  &.${ue} {
    font-weight: 600;
    text-decoration: underline;
  }
`,me=({children:e,...n})=>r(he,{...n,children:e}),Fr=({children:e,...n})=>r(Dr,{className:({isActive:t})=>t?ue:"",...n,children:e}),re=l(Fr)`
  padding: 11.5px 16px;
`;function _r({name:e}){const{characterId:n}=v();return n?o(u,{forwardedAs:"nav",gap:"8",px:"16",mx:"auto",children:[r(me,{size:"24",to:"/characters",children:"Characters"}),r(y,{size:"24",children:"/"}),r(me,{size:"24",to:`/characters/${n}`,children:e??"Loading..."})]}):null}const zr=l(u).attrs({forwardedAs:"nav",mx:"auto"})`
  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`;function jr(){const{characterId:e}=v();return e?o(zr,{children:[r(re,{to:"",end:!0,children:"Summary"}),r(re,{to:"details",children:"Details"}),r(re,{to:"race",children:"Race"})]}):null}function Tr({name:e}){return o(le,{forwardedAs:"header",direction:"column",gap:"16",pt:"16",children:[r(_r,{name:e}),r(jr,{})]})}function qr(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:String(e)}});if(t)return r(H,{});if(i||!n?.character)return r(P,{message:i?.message});const{character:a}=n;return o(N,{children:[r(Tr,{name:a.name}),r(te,{})]})}const Nr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Or=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Pr=l.textarea`
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
`,Q=X.forwardRef(({name:e,label:n,error:t,rows:i=4,required:a=!1,...c},s)=>o(Nr,{children:[r(ee,{htmlFor:e,required:a,children:n}),t&&r(Or,{children:t}),r(Pr,{id:e,name:e,rows:i,"aria-label":n,"aria-required":a,ref:s,...c})]})),Mr=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Br=l.p`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.red500};
`,Ur=l.select`
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
`,pe=X.forwardRef(({name:e,label:n,error:t,required:i=!1,children:a,...c},s)=>o(Mr,{children:[r(ee,{htmlFor:e,required:i,children:n}),t&&r(Br,{children:t}),r(Ur,{id:e,name:e,"aria-label":n,"aria-required":i,$error:!!t,ref:s,...c,children:a})]}));function ge({name:e,loading:n,onReset:t}){return o(u,{alignItems:"center",children:[r(y,{as:"h1",size:"32",children:e}),o(le,{justifyContent:"flex-end",gap:"4",children:[r(O,{type:"submit",loading:n,children:"Save"}),r(O,{variant:"secondary",type:"reset",onClick:t,children:"Reset"})]})]})}const fe=l(u).attrs({forwardedAs:"section",direction:"column",gap:"16",flexGrow:1})`
  width: auto;
`,Vr=B().shape({name:z(),level:ne().typeError("Level must be between 1 and 20").integer("Level must be between 1 and 20").strict().min(1,"Level must be between 1 and 20").max(20,"Level must be between 1 and 20")});function Hr({name:e,level:n,alignmentId:t,background:i,traits:a,ideals:c,bonds:s,flaws:h,alignments:m,loading:p,onSubmit:w}){const{register:d,reset:E,handleSubmit:A,formState:{errors:f}}=U({mode:"onTouched",defaultValues:{name:e,level:n,alignmentId:t,background:i,traits:a,ideals:c,bonds:s,flaws:h},resolver:Y(Vr)});return r("form",{onSubmit:A(w),children:o(u,{direction:"column",gap:"16",children:[r(ge,{name:"Details",loading:p,onReset:()=>E({alignmentId:t,background:i,bonds:s,flaws:h,ideals:c,level:n,name:e,traits:a},{keepDefaultValues:!0})}),o(u,{wrap:"wrap",gap:"16",justifyContent:"center",children:[o(fe,{children:[r(F,{type:"text",label:"Name",placeholder:"Untitled",error:f.name?.message,...d("name")}),r(F,{type:"number",label:"Level",error:f.level?.message,...d("level",{valueAsNumber:!0})}),r(F,{type:"text",label:"Background",placeholder:"Acolyte",error:f.background?.message,...d("background")}),o(pe,{label:"Alignment",error:f.alignmentId?.message,...d("alignmentId"),children:[r("option",{value:"",disabled:!0}),m.map(({id:R,name:_})=>r("option",{value:R,children:_},R))]})]}),o(fe,{children:[r(Q,{label:"Personality traits",error:f.traits?.message,...d("traits")}),r(Q,{label:"Ideals",error:f.ideals?.message,...d("ideals")}),r(Q,{label:"Bonds",error:f.bonds?.message,...d("bonds")}),r(Q,{label:"Flaws",error:f.flaws?.message,...d("flaws")})]})]})]})})}function Qr(){const e=q(),{characterId:n}=v(),{data:t,loading:i,error:a}=C({variables:{id:String(n)}}),{data:c,loading:s,error:h}=Xe(),[m,{loading:p,error:w}]=ae({onError:E=>console.error(E)});if(a||h||!t?.character||!c)return r(P,{message:a?.message});const{character:d}=t;return o(I,{children:[w&&r(D,{children:w.message}),r(Hr,{name:d.name,level:d.level,alignmentId:d.alignment?.id??"",background:d.background??"",traits:d.traits??"",ideals:d.ideals??"",bonds:d.bonds??"",flaws:d.flaws??"",alignments:c.alignments,loading:p,onSubmit:({name:E,level:A,background:f,alignmentId:R,traits:_,ideals:b,bonds:G,flaws:K})=>{m({variables:{input:{id:String(n),name:E||void 0,level:A||void 0,background:f||void 0,alignmentId:R||void 0,traits:_||void 0,ideals:b||void 0,bonds:G||void 0,flaws:K||void 0}}}),e(`/characters/${n}`)}})]})}const Wr=l.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`,Gr=l.li`
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
`;function Xr({ability:e}){const{id:n,name:t,score:i,modifier:a}=e;return o(Gr,{children:[r(Kr,{children:t.slice(0,3)}),o(Jr,{children:[a>=0?"+":"-",a]}),r("span",{children:i})]},n)}function Yr({abilities:e}){return o(u,{as:"section",direction:"column",gap:"16",children:[r(y,{as:"h3",weight:"600",children:"Abilities"}),r(Wr,{children:e.map(n=>r(Xr,{ability:n},n.id))})]})}const Zr=l.ul`
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
`;function an({skill:e}){const{id:n,name:t,modifier:i,ability:a}=e;return r(en,{children:o(rn,{children:[o(nn,{children:[i>=0?"+":"-",i]}),r("span",{children:t}),o(tn,{children:["(",a.name.slice(0,3),")"]})]})},n)}function on({skills:e}){return o(u,{as:"section",direction:"column",gap:"16",children:[r(y,{weight:"600",children:"Skills"}),r(Zr,{children:e.map(n=>r(an,{skill:n},n.id))})]})}function cn(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:String(e)},skip:!e});if(t)return r(H,{});if(i||!n?.character)return r(P,{message:i?.message});const{character:a}=n;return o(I,{children:[r(Yr,{abilities:a.abilities}),r(on,{skills:a.skills})]})}function W({name:e,description:n}){return n?o(u,{as:"section",direction:"column",gap:"8",flexGrow:1,children:[r(y,{weight:"600",children:e}),r(y,{children:n})]}):null}const sn=l.ul`
  margin-left: 1.5rem;
`;function ln({raceId:e="",races:n,loading:t,onChange:i,onSubmit:a}){const{register:c,reset:s,handleSubmit:h,formState:{errors:m}}=U({mode:"onTouched",defaultValues:{raceId:e}});return r("form",{onSubmit:h(a),children:o(u,{direction:"column",gap:"16",children:[r(ge,{name:"Race",loading:t,onReset:()=>{s({raceId:e},{keepDefaultValues:!0}),i(String(e))}}),r(u,{gap:"16",justifyContent:"center",children:r(u,{as:"section",direction:"column",gap:"16",flexGrow:1,children:o(pe,{label:"Race",error:m.raceId?.message,...c("raceId",{onChange:p=>i(p.target.value)}),children:[r("option",{value:"",disabled:!0}),n.map(({id:p,name:w})=>r("option",{value:p,children:w},p))]})})})]})})}function dn(){const[e,n]=L.exports.useState(""),t=q(),{characterId:i}=v(),{data:a,loading:c,error:s}=C({variables:{id:String(i)}}),{data:h,loading:m,error:p}=or(),[w,{data:d,loading:E,error:A}]=ir();L.exports.useEffect(()=>{n(a?.character?.race?.id??"")},[a]),L.exports.useEffect(()=>{!e||w({variables:{id:e}})},[e]),L.exports.useEffect(()=>{console.log(d?.race)},[d]);const[f,{loading:R,error:_}]=ae({onError:b=>console.error(b)});return c||m?r(H,{}):s||p||!a?.character||!h?r(P,{message:s?.message}):o(I,{children:[r(ln,{raceId:a.character.race?.id,races:h.races,onChange:b=>n(b),onSubmit:({raceId:b})=>{f({variables:{input:{id:String(i),raceId:b||void 0}}}),t(`/characters/${i}`)}}),o(u,{direction:"column",gap:"16",mt:"16",children:[A&&r(D,{children:"Race Not Found"}),d?.race&&o(u,{as:"article",direction:"column",gap:"16",children:[o(de,{children:[r(y,{as:"h2",size:"24",children:"Ability Score Improvements"}),r(sn,{children:d.race.abilityScoreIncreases.map(b=>r("li",{children:`${b.ability.name} ${b.increase>=0?"+":"-"}${b.increase}`},b.id))})]}),o(de,{children:[r(y,{as:"h2",size:"24",children:"Details"}),d.race.description&&r(y,{children:d.race.description}),r(W,{name:"Age",description:d.race.age}),r(W,{name:"Alignment",description:d.race.alignment}),r(W,{name:"Size",description:d.race.size}),r(W,{name:"Speed",description:d.race.speed})]})]})]})]})}function un(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:o("main",{children:[r("h2",{children:"Character Details"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Details"})]})}function hn(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:o("main",{children:[r("h2",{children:"Character Race"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Race"})]})}function mn(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:o("main",{children:[r("h2",{children:"Character Class"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Class"})]})}function pn(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:o("main",{children:[r("h2",{children:"Character Abilities"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Abilities"})]})}function gn(){const{characterId:e}=v(),{data:n,loading:t,error:i}=C({variables:{id:e},skip:!e});return i?null:o("main",{children:[r("h2",{children:"Character Equipment"}),t?r("div",{children:'"Loading..."'}):r("div",{children:"Equipment"})]})}function fn(){const{characterId:e}=v(),{data:n,loading:t}=C({variables:{id:e},skip:!e}),{character:i}=n||{};return o("header",{children:[o("nav",{children:[r(k,{to:"/characters",children:"Characters"})," ",r("span",{children:"/"})," ",r("span",{children:t?"Loading...":i?.name})]}),r("h1",{children:t?"Loading...":i?.name})]})}function bn(){return o("nav",{children:[r(k,{to:"./",children:"Details"})," ",r(k,{to:"race",children:"Race"})," ",r(k,{to:"class",children:"Class"})," ",r(k,{to:"abilities",children:"Abilities"})," ",r(k,{to:"equipment",children:"Equipment"})]})}function xn(){const{characterId:e}=v(),{data:n,error:t}=C({variables:{id:e},skip:!e});return t?r("div",{children:"Error"}):n&&!n.character?r("div",{children:"404: Not Found"}):o(u,{direction:"column",p:"32",children:[r(fn,{}),r(bn,{}),r(te,{})]})}function yn(){const{isLoggedIn:e}=Z();return o(De,{basename:"/dungeonist/",children:[r(dr,{}),o(Fe,{children:[r(g,{path:"/",element:r(fr,{})}),e?o(N,{children:[r(g,{path:"/characters",element:r(Rr,{})}),o(g,{path:"/characters/:characterId",element:r(qr,{}),children:[r(g,{index:!0,element:r(cn,{})}),r(g,{path:"details",element:r(Qr,{})}),r(g,{path:"race",element:r(dn,{})})]}),o(g,{path:"/characters/:characterId/edit",element:r(xn,{}),children:[r(g,{index:!0,element:r(un,{})}),r(g,{path:"race",element:r(hn,{})}),r(g,{path:"class",element:r(mn,{})}),r(g,{path:"abilities",element:r(pn,{})}),r(g,{path:"equipment",element:r(gn,{})})]})]}):o(N,{children:[r(g,{path:"/signup",element:r(Er,{})}),r(g,{path:"/login",element:r(Sr,{})})]}),r(g,{path:"*",element:r(P,{})})]})]})}const vn="modulepreload",be={},$n="/dungeonist/",j=function(n,t){return!t||t.length===0?n():Promise.all(t.map(i=>{if(i=`${$n}${i}`,i in be)return;be[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":vn,a||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),a)return new Promise((h,m)=>{s.addEventListener("load",h),s.addEventListener("error",m)})})).then(()=>n())},xe={"../mocks/Alignments.ts":()=>j(()=>import("./Alignments.aa735fe8.js"),["assets/Alignments.aa735fe8.js","assets/vendor.ff8afe3d.js"]),"../mocks/Character.ts":()=>j(()=>import("./Character.b12517ce.js"),["assets/Character.b12517ce.js","assets/vendor.ff8afe3d.js"]),"../mocks/Characters.ts":()=>j(()=>import("./Characters.0e232560.js"),["assets/Characters.0e232560.js","assets/vendor.ff8afe3d.js"]),"../mocks/Me.ts":()=>j(()=>import("./Me.c561375f.js"),["assets/Me.c561375f.js","assets/vendor.ff8afe3d.js"]),"../mocks/Race.ts":()=>j(()=>import("./Race.7fd24990.js"),["assets/Race.7fd24990.js","assets/vendor.ff8afe3d.js"]),"../mocks/Races.ts":()=>j(()=>import("./Races.d95748a5.js"),["assets/Races.d95748a5.js","assets/vendor.ff8afe3d.js"])};let ye=[];for(const e in xe){const n=await Promise.resolve(xe[e]().then(t=>t.handlers));ye.push(...n)}const kn=_e({uri:"https://example.com"}),Cn=ze((e,{headers:n})=>{const t=localStorage.getItem("token");return{headers:{...n,...t&&{authorization:`Bearer ${t}`}}}}),wn=new je({link:Cn.concat(kn),cache:new Te});window.location.pathname==='/dungeonist"'&&(window.location.pathname="/dungeonist/"),localStorage.getItem("token")||localStorage.setItem("token","example"),qe(...ye).start({serviceWorker:{url:"/dungeonist/mockServiceWorker.js"}});Ne.render(r(Oe,{client:wn,children:r(Be,{children:o(Pe,{theme:mr,children:[r(ur,{}),r(yn,{})]})})}),document.getElementById("root"));
