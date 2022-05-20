var ge=Object.defineProperty,fe=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var K=(t,a,l)=>a in t?ge(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,p=(t,a)=>{for(var l in a||(a={}))be.call(a,l)&&K(t,l,a[l]);if(Z)for(var l of Z(a))we.call(a,l)&&K(t,l,a[l]);return t},h=(t,a)=>fe(t,xe(a));import{c as ye,a as w,o as _e,C as ve,A as Ce,p as Se,b as Re,j as e,P as Fe,s as D,d as oe,F as A,B as I,e as n,G as i,f as Ae,g as Te,h as ke,i as Ee,k as Ie,r as c,S as Le,m as se,T as L,l as k,M as q,n as $e,q as j,t as De,u as Me,v as Q,w as Pe,x as X,y as Be,z as Ne,D as Oe,E as We,H as je,I as qe,J as ze,K as He,L as Ue,N as Ve,O as Ge,Q as Je,R,U as ee,V as te,W as ae,X as v,Y as C,Z as z,_ as Ye,$ as Ze,a0 as H,a1 as Ke,a2 as E,a3 as re,a4 as Qe,a5 as Xe,a6 as et,a7 as tt,a8 as at,a9 as rt,aa as it,ab as nt,ac as ot,ad as st,ae as lt,af as le,ag as F,ah as ce,ai as de,aj as ue,ak as pe,al as he,am as U,an as ct,ao as dt,ap as ut,aq as pt,ar as S,as as ht,at as mt}from"./vendor.cee29fa8.js";const gt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}};gt();const ft=ye({palette:{mode:"light"}}),M="https://backend-parkingapp-fastapi.azurewebsites.net/",B={headers:{"Content-Type":"application/json"}},xt=async t=>{const a=await w.post(M+"usuarios/signup",t,B);a.data.access_token&&sessionStorage.setItem("token",a.data.access_token)},bt=async t=>{const a=await w.post(M+"usuarios/login",t,B);a.data.access_token&&sessionStorage.setItem("token",a.data.access_token)},wt=async t=>{const a=await w.post(M+"registros",t,B);console.log(a.data)},yt=async t=>{const a=t.toString(),l=await w.put(M+"registros/"+{reg:a},B);console.log(l.reg)},_t=()=>{sessionStorage.clear(),window.location="/login"},vt=()=>{const t=sessionStorage.getItem("token");return t!==null?_e(t):t},b={signup:xt,login:bt,logout:_t,getCurrentUser:vt,ingreso:wt,salida:yt,API_URL:M};ve.register(Ce,Se,Re);function Ct({disp:t,ocup:a}){return e(Fe,{data:{labels:["Disponible","Ocupado"],title:{display:!0,text:"Custom Chart Title"},datasets:[{label:"Disponibilidad",data:[t,a],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)"],borderWidth:2}]}})}const St=D(oe)(({theme:t})=>h(p({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body1),{padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary})),ie=t=>{const[a,l]=c.exports.useState(!1),o=`disponibilidad/${t.typeVehicle}/${t.period}`,[s,r]=c.exports.useState([]);return c.exports.useEffect(()=>{(async()=>{try{const u=await w.get(b.API_URL+o);r(u.data)}catch{console.log("error de carga")}finally{l(!0)}})()},[]),a?e(A,{children:e(Ct,{disp:s.capacidad-s.ocupados,ocup:s.ocupados})}):e("span",{children:"Cargando"})};function V(){return e(A,{children:e(I,{sx:{flexGrow:1,width:"60%",textAlign:"center",justify:"center"},children:n(St,{children:[e(i,{item:!0,xs:12,children:n(i,{container:!0,justifyContent:"center",alignItems:"center",display:"flex",spacing:5,children:[e(i,{item:!0,xs:3,children:e("h3",{children:"Tipo de servicio"})}),e(i,{item:!0,xs:3,children:n("h3",{children:[e(Ae,{})," Motos"]})}),e(i,{item:!0,xs:3,children:n("h3",{children:[e(Te,{})," Carros"]})}),e(i,{item:!0,xs:3,children:n("h3",{children:[e(ke,{})," Camionetas"]})})]})}),e("hr",{}),e(i,{item:!0,xs:12,children:n(i,{container:!0,justifyContent:"center",alignItems:"center",spacing:5,children:[n(i,{item:!0,xs:3,children:[n("h3",{children:["Horas/",e("br",{}),"Medio dia/",e("br",{}),"Dia"]}),e(Ee,{})]}),[1,2,3].map(t=>e(i,{item:!0,xs:3,children:e(ie,{typeVehicle:t,period:"1"})},t))]})}),e("hr",{}),e(i,{item:!0,xs:12,children:n(i,{container:!0,justifyContent:"center",alignItems:"center",spacing:5,children:[n(i,{item:!0,xs:3,children:[e("h3",{children:"Mensualidad"}),e(Ie,{})]}),[1,2,3].map(t=>e(i,{item:!0,xs:3,children:e(ie,{typeVehicle:t,period:"4"})},t))]})})]})})})}const Rt={Export:c.exports.forwardRef((t,a)=>e(Le,h(p({},t),{ref:a})))},Ft=[{field:"id_vehiculo",title:"ID",hide:!0},{field:"nombre_vehiculo",title:"Tipo"},{field:"cuarto_hora",title:"Cuarto de hora"},{field:"hora",title:"Hora",width:200},{field:"seis_horas",title:"Medio dia"},{field:"dia",title:"Dia"},{field:"mes",title:"Mes"}],At="tarifasCompuestas",Tt="tarifas",kt=se(t=>({modal:{position:"absolute",width:400,backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},iconos:{cursor:"pointer"},inputMaterial:{width:"100%"}}));function G(){const t=kt(),[a,l]=c.exports.useState([]),[o,s]=c.exports.useState(!1),[r,d]=c.exports.useState({id_vehiculo:"",cuarto_hora:"",hora:"",seis_horas:"",dia:"",mes:""}),u=m=>{const{name:x,value:y}=m.target;d(W=>h(p({},W),{[x]:y}))},g=async()=>{await w.get(b.API_URL+At).then(m=>{l(m.data)}).catch(m=>{console.log(m)})},N=async()=>{await w.put(b.API_URL+Tt+"/"+r.id_vehiculo,r).then(m=>{var x=a;x.map(y=>{y.id_vehiculo===r.id_vehiculo&&(y.cuarto_hora=r.cuarto_hora,y.hora=r.hora,y.seis_horas=r.seis_horas,y.dia=r.dia,y.mes=r.mes)}),l(x),T()}).catch(m=>{console.log(m)})},O=(m,x)=>{d(m),T()},T=()=>{s(!o)};c.exports.useEffect(()=>{g()},[]);const P=n("div",{className:t.modal,children:[e("h3",{children:"Editar Tarifa"}),e(L,{className:t.inputMaterial,label:"Cuarto hora",name:"cuarto_hora",onChange:u,value:r&&r.cuarto_hora}),e("br",{}),e(L,{className:t.inputMaterial,label:"Hora",name:"hora",onChange:u,value:r&&r.hora}),e("br",{}),e(L,{className:t.inputMaterial,label:"Medio dia",name:"seis_horas",onChange:u,value:r&&r.seis_horas}),e("br",{}),e(L,{className:t.inputMaterial,label:"Dia",name:"dia",onChange:u,value:r&&r.dia}),e("br",{}),e(L,{className:t.inputMaterial,label:"Mes",name:"mes",onChange:u,value:r&&r.mes}),e("br",{}),n("div",{align:"right",children:[e(k,{color:"primary",onClick:()=>N(),children:"Editar"}),e(k,{onClick:()=>T(),children:"Cancelar"})]})]});return e(A,{children:n("div",{children:[e(q,{columns:Ft,data:a,icons:Rt,title:"Tarifas",actions:[{icon:()=>e($e,{}),tooltip:"Editar Tarifa",onClick:(m,x)=>O(x)}],options:{actionsColumnIndex:-1,exportButton:{pdf:!0},paging:!1,search:!1,sorting:!1},localization:{header:{actions:"Editar"},toolbar:{exportTitle:"Exportar"}}}),e(j,{open:o,onClose:T,children:P})]})})}const Et={Add:c.exports.forwardRef((t,a)=>e(De,h(p({},t),{ref:a}))),Check:c.exports.forwardRef((t,a)=>e(Me,h(p({},t),{ref:a}))),Clear:c.exports.forwardRef((t,a)=>e(Q,h(p({},t),{ref:a}))),Delete:c.exports.forwardRef((t,a)=>e(Pe,h(p({},t),{ref:a}))),DetailPanel:c.exports.forwardRef((t,a)=>e(X,h(p({},t),{ref:a}))),Edit:c.exports.forwardRef((t,a)=>e(Be,h(p({},t),{ref:a}))),Export:c.exports.forwardRef((t,a)=>e(Ne,h(p({},t),{ref:a}))),Filter:c.exports.forwardRef((t,a)=>e(Oe,h(p({},t),{ref:a}))),FirstPage:c.exports.forwardRef((t,a)=>e(We,h(p({},t),{ref:a}))),LastPage:c.exports.forwardRef((t,a)=>e(je,h(p({},t),{ref:a}))),NextPage:c.exports.forwardRef((t,a)=>e(X,h(p({},t),{ref:a}))),PreviousPage:c.exports.forwardRef((t,a)=>e(qe,h(p({},t),{ref:a}))),ResetSearch:c.exports.forwardRef((t,a)=>e(Q,h(p({},t),{ref:a}))),Search:c.exports.forwardRef((t,a)=>e(ze,h(p({},t),{ref:a}))),SortArrow:c.exports.forwardRef((t,a)=>e(He,h(p({},t),{ref:a}))),ThirdStateCheck:c.exports.forwardRef((t,a)=>e(Ue,h(p({},t),{ref:a}))),ViewColumn:c.exports.forwardRef((t,a)=>e(Ve,h(p({},t),{ref:a})))},It=[{field:"id_registro",title:"ID"},{field:"placa",title:"Placa"},{field:"nombre_vehiculo",title:"Tipo"},{field:"ingreso",title:"Hora Ingreso"},{field:"salida",title:"Hora Salida"},{field:"total_horas",title:"Total Tiempo"},{field:"pago_inicial",title:"Pago Inicial"},{field:"pago_final",title:"Pago Final"},{field:"total_costo",title:"Total Costo"},{field:"nombre",title:"Realizo"},{field:"tipo_tarifa",title:"Tipo Tarifa"}],Lt="registros/true",$t="registro",Dt="registros",Mt=se(t=>({modal:{position:"absolute",width:400,backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)"},iconos:{cursor:"pointer"},inputMaterial:{width:"100%"}}));function J(){const t=Mt(),[a,l]=c.exports.useState([]),[o,s]=c.exports.useState(!1),[r,d]=c.exports.useState(!1),[u,g]=c.exports.useState({id_registro:""}),N=async()=>{await w.get(b.API_URL+Lt).then(f=>{l(f.data)}).catch(f=>{console.log(f)})},O=async()=>{await w.delete(b.API_URL+$t+"/"+u.id_registro).then(f=>{l(a.filter(_=>_.id_registro!==u.id_registro)),m()}).catch(f=>{console.log(f)})},T=async()=>{await w.delete(b.API_URL+Dt+"/"+u.id_registro).then(f=>{l(a.filter(_=>_.id_registro!==u.id_registro)),x()}).catch(f=>{console.log(f)})},P=(f,_)=>{g(f),_==="Retirar"?m():x()},m=()=>{s(!o)},x=()=>{d(!r)};c.exports.useEffect(()=>{N()},[]);const y=n("div",{className:t.modal,children:[n("p",{children:["\xBFEst\xE1s seguro que deseas retirar el vehiculo ",e("b",{children:u&&u.registro}),"? "]}),n("div",{align:"right",children:[e(k,{color:"secondary",onClick:()=>O(),children:"S\xED"}),e(k,{onClick:()=>m(),children:"No"})]})]}),W=n("div",{className:t.modal,children:[n("p",{children:["\xBFEst\xE1s seguro que deseas eliminar el registro ",e("b",{children:u&&u.registro}),"? "]}),n("div",{align:"right",children:[e(k,{color:"secondary",onClick:()=>T(),children:"S\xED"}),e(k,{onClick:()=>x(),children:"No"})]})]});return n(A,{children:[e(q,{style:{width:"100%"},columns:It,data:a,icons:Et,title:"Vehiculos en parqueadero",actions:[{icon:()=>e(Ge,{}),tooltip:"Retirar vehiculo",onClick:(f,_)=>P(_,"Retirar")},{icon:()=>e(Je,{}),tooltip:"Eliminar registro",onClick:(f,_)=>P(_,"Eliminar")}],options:{actionsColumnIndex:-1,exportButton:{pdf:!0},paging:!0,search:!0,sorting:!0},localization:{header:{actions:"Acciones"},toolbar:{exportTitle:"Exportar"}}}),e(j,{open:o,onClose:m,children:y}),e(j,{open:r,onClose:x,children:W})]})}const Pt=D(oe)(({theme:t})=>h(p({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff"},t.typography.body1),{padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary})),Y=t=>{const a={placa:"",tipo_vehiculo:"1",realizo:t.id,tipo_tarifa:"1"},l=d=>{const{name:u,value:g}=d.target;s(h(p({},o),{[u]:g}))},[o,s]=c.exports.useState(a);return e(A,{children:e(I,{sx:{flexGrow:1,width:"60%",textAlign:"center",justify:"center"},children:e(Pt,{children:e("form",{onSubmit:d=>{d.preventDefault(),console.log(o),b.ingreso(JSON.stringify(o)),window.location.reload(!0)},children:n(i,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[e(i,{item:!0,children:e(R,{id:"placa",name:"placa",label:"Placa",type:"text",value:o.placa,onChange:l})}),e(i,{item:!0,children:n(ee,{children:[e(te,{children:"Vehiculos"}),n(ae,{name:"tipo_vehiculo",value:o.tipo_vehiculo,onChange:l,row:!0,children:[e(v,{value:"1",control:e(C,{size:"small"}),label:"Moto"},"1"),e(v,{value:"2",control:e(C,{size:"small"}),label:"Carro"},"2"),e(v,{value:"3",control:e(C,{size:"small"}),label:"Caminoneta"},"3")]})]})}),e(i,{item:!0,children:n(ee,{children:[e(te,{children:"Tarifas"}),n(ae,{name:"tipo_tarifa",value:o.tipo_tarifa,onChange:l,row:!0,children:[e(v,{value:"1",control:e(C,{size:"small"}),label:"Hora"},"1"),e(v,{value:"2",control:e(C,{size:"small"}),label:"Medio Dia"},"2"),e(v,{value:"3",control:e(C,{size:"small"}),label:"Dia"},"3"),e(v,{value:"4",control:e(C,{size:"small"}),label:"Mes"},"4")]})]})}),e(i,{item:!0,children:e(z,{variant:"contained",color:"primary",type:"submit",style:{margin:"5px"},children:"Registrar"})})]})})})})})};function Bt(t){return e(A,{children:n(i,{container:!0,spacing:4,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:[e(i,{item:!0,xs:12,style:{width:"90%"},children:e(G,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"90%"},children:e(V,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"90%"},children:e(J,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"50%"},children:e(Y,{id:t.id})})]})})}function Nt(t){return e(A,{children:n(i,{container:!0,spacing:4,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:[e(i,{item:!0,xs:12,style:{width:"90%"},children:e(G,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"90%"},children:e(V,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"90%"},children:e(J,{})}),e(i,{item:!0,xs:12,container:!0,style:{width:"50%"},children:e(Y,{id:t.id})})]})})}const $=340,Ot=D("main",{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>p({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginRight:-$},a&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginRight:0})),Wt=D(Ye,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>p({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},a&&{width:`calc(100% - ${$}px)`,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginRight:$})),ne=D("div")(({theme:t})=>h(p({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{justifyContent:"flex-start"}));function jt(){const t=Ze(),[a,l]=c.exports.useState(!1),o=b.getCurrentUser();o===null&&(window.location="/");const s=()=>{l(!0)},r=()=>{l(!1)};return n(I,{sx:{display:"flex"},children:[e(H,{}),e(Wt,{position:"fixed",open:a,children:n(Ke,{children:[e(E,{variant:"h6",noWrap:!0,sx:{flexGrow:1},component:"div",children:"Parking App"}),e(re,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:s,sx:p({},a&&{display:"none"}),children:e(Qe,{})})]})}),n(Ot,{open:a,children:[e(ne,{}),n(E,{sx:{margin:"1rem",textAlign:"center"},variant:"h3",children:["Bienvenido ",o.rol]}),o.rol==="administrador"?e(Bt,{id:o.id_usuario.toString()}):null,o.rol==="operario"?e(Nt,{id:o.id_usuario.toString()}):null]}),n(Xe,{sx:{width:$,flexShrink:0,"& .MuiDrawer-paper":{width:$}},variant:"persistent",anchor:"right",open:a,children:[e(ne,{children:e(re,{onClick:r,children:t.direction==="rtl"?e(et,{}):e(tt,{})})}),e(at,{}),e(rt,{children:n(it,{button:!0,children:[e(nt,{children:e(ot,{})}),e(st,{primary:"Cerrar Sesi\xF3n",onClick:b.logout})]})})]})]})}function me(){return n(E,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xA9 ",e(lt,{color:"inherit",href:"/",children:"ParkingApp"})," ",new Date().getFullYear(),"."]})}const qt=le().shape({email:F().email("Email invalido").required("Email es requerido"),password:F().required("Debes ingresar contrase\xF1a").min(8,"La contrase\xF1a muy corta - debe contener como m\xEDnimo 8 caracteres").matches(/\d+/,"La contrase\xF1a debe contener un n\xFAmero").matches(/[a-z]+/,"La contrase\xF1a debe contener min\xFAsculas").matches(/[A-Z]+/,"La contrase\xF1a debe contener may\xFAsculas").matches(/[!?.@#$%^&*()-+]+/,"La contrase\xF1a debe contener caracteres especiales"),password2:F()});function zt(){const t={email:"",password:""},a=ce();return n(de,{sx:{marginTop:"3rem",height:"calc(100vh - 3rem)",textAlign:"center"},maxWidth:"sm",children:[e(H,{}),e(ue,{sx:{margin:"1rem auto",bgcolor:"primary.main"},children:e(pe,{})}),e(E,{sx:{margin:"1rem"},variant:"h4",children:"Acceso"}),e(he,{initialValues:t,onSubmit:(o,{resetForm:s})=>{const r=JSON.stringify({email:o.email,password:o.password});b.login(r).then(()=>{a("/Home")},d=>{console.log(d.response),console.log(d.message)}),s()},validationSchema:qt,children:({values:o,handleChange:s,handleSubmit:r,touched:d,errors:u,handleBlur:g})=>e("form",{onSubmit:r,children:n(i,{container:!0,spacing:3,children:[e(i,{item:!0,xs:12,children:e(R,{name:"email",label:"Email",value:o.email,onChange:s,onBlur:g,helperText:d.email&&u.email,error:d.email&&Boolean(u.email),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(R,{name:"password",label:"Contrase\xF1a",type:"password",value:o.password,onChange:s,onBlur:g,helperText:d.password&&u.password,error:d.password&&Boolean(u.password),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(z,{type:"submit",variant:"contained",fullWidth:!0,children:"Acceso"})})]})})}),n("p",{children:["\xBFA\xFAn no tienes una cuenta?",e(U,{to:"/register",sx:{textDecoration:"none",fontWeight:"600",paddingLeft:"0.5rem"},children:"Registrar"})]}),e(I,{mt:5,children:e(me,{})})]})}const Ht=le().shape({username:F().required("El nombre es obligatorio").min(2,"Demasiado corta").max(15,"Debe tener 15 caracteres o menos"),email:F().email("Email inv\xE1lido").required("Email es requerido"),password:F().required("No se proporcion\xF3 contrase\xF1a").min(8,"La contrase\xF1a es demasiado corta - debe tener un m\xEDnimo de 8 caracteres").matches(/\d+/,"La contrase\xF1a debe tener un n\xFAmero").matches(/[a-z]+/,"La contrase\xF1a debe tener min\xFAsculas").matches(/[A-Z]+/,"La contrase\xF1a debe tener may\xFAsculas").matches(/[!?.@#$%^&*()-+]+/,"La contrase\xF1a debe tener un car\xE1cter especial"),password2:F().required("No se proporcion\xF3 contrase\xF1a").min(8,"La contrase\xF1a es demasiado corta - debe tener un m\xEDnimo de 8 caracteres").oneOf([ct("password"),null],"Las contrase\xF1as deben coincidir")});function Ut(){const t={username:"",email:"",password:"",password2:""},a=ce();return n(de,{sx:{marginTop:"3rem",height:"calc(100vh - 3rem)",textAlign:"center"},maxWidth:"sm",children:[e(H,{}),e(ue,{sx:{margin:"1rem auto",bgcolor:"primary.main"},children:e(pe,{})}),e(E,{sx:{margin:"1rem"},variant:"h4",children:"Inscribirse"}),e(he,{initialValues:t,onSubmit:(o,{resetForm:s})=>{const r=JSON.stringify({nombre:o.username,email:o.email,password:o.password,rol:"administrador"});b.signup(r).then(()=>{a("/Home")},d=>{console.log(d.response),console.log(d.message)}),alert("Usuario Creado"),s(),a("/login")},validationSchema:Ht,children:({values:o,handleChange:s,handleSubmit:r,touched:d,errors:u,handleBlur:g})=>e("form",{onSubmit:r,children:n(i,{container:!0,spacing:3,children:[e(i,{item:!0,xs:12,children:e(R,{name:"username",label:"Nombre",variant:"outlined",value:o.username,onChange:s,onBlur:g,helperText:d.username&&u.username,error:d.username&&Boolean(u.username),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(R,{name:"email",label:"Email",variant:"outlined",value:o.email,onChange:s,onBlur:g,helperText:d.email&&u.email,error:d.email&&Boolean(u.email),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(R,{name:"password",label:"Contrase\xF1a",type:"password",value:o.password,onChange:s,onBlur:g,helperText:d.password&&u.password,error:d.password&&Boolean(u.password),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(R,{name:"password2",label:"Repite la contrase\xF1a",variant:"outlined",type:"password",value:o.password2,onChange:s,onBlur:g,helperText:d.password2&&u.password2,error:d.password2&&Boolean(u.password2),fullWidth:!0})}),e(i,{item:!0,xs:12,children:e(z,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Inscribirse"})})]})})}),n("p",{children:["\xBFYa tienes una cuenta?",e(U,{to:"/login",sx:{textDecoration:"none",fontWeight:"600",paddingLeft:"0.5rem",cursor:"pointer"},children:"Acceso"})]}),e(I,{mt:5,children:e(me,{})})]})}function Vt(){const[t,a]=c.exports.useState([]),l="tarifasCompuestas",o=[{field:"id_vehiculo",title:"ID",hide:!0},{field:"nombre_vehiculo",title:"Tipo"},{field:"cuarto_hora",title:"Cuarto de hora"},{field:"hora",title:"Hora",width:200},{field:"seis_horas",title:"Medio dia"},{field:"dia",title:"Dia"},{field:"mes",title:"Mes"}];return c.exports.useEffect(()=>{(async()=>{const r=await w.get(b.API_URL+l);a(r.data)})()},[]),e(I,{sx:{flexGrow:1},children:n(i,{container:!0,spacing:4,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:[e(i,{item:!0,xs:12,align:"center",style:{width:"100%"},children:e(E,{sx:{margin:"1rem"},variant:"h4",children:"Bienvenido a ParkingApp"})}),e(i,{item:!0,xs:12,align:"center",style:{height:215,width:"90%"},children:e(q,{columns:o,data:t,title:"Tarifas",options:{paging:!1,search:!1,sorting:!1}})}),e(i,{item:!0,xs:12,container:!0,style:{width:"90%"},children:e(V,{})}),e(i,{item:!0,xs:12,children:n("p",{children:["\xBFYa tienes una cuenta?",e(U,{to:"/login",sx:{textDecoration:"none",fontWeight:"600",paddingLeft:"0.5rem",cursor:"pointer"},children:"Acceder"})]})})]})})}function Gt(){return e(dt,{theme:ft,children:e(ut,{children:n(pt,{children:[e(S,{path:"/",element:e(Vt,{})}),e(S,{path:"/register",element:e(Ut,{})}),e(S,{path:"/login",element:e(zt,{})}),e(S,{path:"/home",element:e(jt,{})}),e(S,{path:"/ingreso",element:e(Y,{})}),e(S,{path:"/taxes",element:e(G,{})}),e(S,{path:"/io",element:e(J,{})})]})})})}ht.render(e(mt.StrictMode,{children:e(Gt,{})}),document.getElementById("root"));