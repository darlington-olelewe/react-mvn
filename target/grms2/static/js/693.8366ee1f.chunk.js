"use strict";(self.webpackChunkgrms=self.webpackChunkgrms||[]).push([[693,768],{7693:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var t=n(885),l=n(2791),i=n(7487),a=n(2768),c=n(2134),r=n(2905),d=n(4942),o=n(1413),h={main:"Employee_main__e5yhU",form__group:"Employee_form__group__EYGjk",left:"Employee_left__y0u56",btns:"Employee_btns__jGSs+"},u="Modal_modal__OOp6N",m="Modal_overlay__xl0wv",x="Modal_modal__content__8nFeI",j=n(184),p=function(e){var s=(0,l.useState)({firstName:null,lastName:null,email:null,gender:"MALE",depotId:null,stationId:null,role:"USER"}),n=(0,t.Z)(s,2),a=n[0],c=n[1],r=(0,l.useState)([]),p=(0,t.Z)(r,2),f=p[0],N=p[1],_=(0,l.useState)([]),v=(0,t.Z)(_,2),g=v[0],b=v[1],y=(0,l.useState)(!0),Z=(0,t.Z)(y,2),E=Z[0],S=Z[1];(0,l.useEffect)((function(){i.Z.fetchDepot().then((function(e){var s=e.data;s.unshift({id:0,depotName:"-- select --"}),N(s)}))}),[]),(0,l.useEffect)((function(){i.Z.fetchStation().then((function(e){var s=e.data;s.unshift({id:0,stationName:"-- select --"}),b(s)}))}),[]);var C=function(e){var s=e.target,n=s.name,t=s.value;c((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,d.Z)({},n,t))})),console.log(a)};return(0,j.jsxs)("div",{children:[!E&&(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("div",{onClick:function(){S(!E)},className:m}),(0,j.jsxs)("form",{onSubmit:function(s){s.preventDefault(),i.Z.createEmployee(a).then((function(s){S(!0),200===s.status?e.onSendMsg("success"):e.onSendMsg("unsuccessful")})).catch((function(s){S(!0),e.onSendMsg("unsuccessful")}))},className:x,children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"First Name"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsx)("input",{type:"text",required:!0,name:"firstName",onChange:C})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Last Name"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsx)("input",{type:"text",name:"lastName",required:!0,onChange:C})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Email"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsx)("input",{type:"text",name:"email",required:!0,onChange:C})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Depot"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsx)("select",{name:"depotId",onChange:C,required:!0,type:"number",children:f.map((function(e){return(0,j.jsxs)("option",{required:!0,type:"number",value:parseInt(e.id),children:[e.depotName," "]},e.id)}))})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Station"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsx)("select",{name:"stationId",onChange:C,required:!0,type:"number",children:g.map((function(e){return(0,j.jsxs)("option",{required:!0,type:"number",value:parseInt(e.id),children:[e.stationName," "]},e.id)}))})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Gender"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsxs)("select",{name:"gender",onChange:C,required:!0,children:[(0,j.jsx)("option",{type:"text",value:"MALE",children:"Male "}),(0,j.jsx)("option",{type:"text",value:"FEMALE",children:"Female "})]})})]}),(0,j.jsxs)("div",{className:h.form__group,children:[(0,j.jsx)("div",{className:h.left,children:(0,j.jsx)("label",{children:"Role"})}),(0,j.jsx)("div",{className:h.right,children:(0,j.jsxs)("select",{name:"role",required:!0,onChange:C,children:[(0,j.jsx)("option",{type:"text",value:"USER",children:"USER"}),(0,j.jsx)("option",{type:"text",value:"ADMIN",children:"Admin"})]})})]})]}),(0,j.jsx)("div",{className:h.form__group,children:(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{className:"btn btn-danger",onClick:function(){S(!E)},children:"Close "}),(0,j.jsx)("button",{className:"btn btn-success",type:"submit",children:"Apply"})]})})]})]}),E&&(0,j.jsx)("div",{children:(0,j.jsx)("button",{className:"btn btn-success",onClick:function(){S(!E)},children:"Create Employee "})})]})},f=function(){var e=(0,l.useState)(""),s=(0,t.Z)(e,2),n=s[0],d=s[1],o=(0,l.useState)([]),h=(0,t.Z)(o,2),u=h[0],m=h[1],x=["firstName","lastName","email","gender","depotName","stationName"],f=(0,l.useState)(1),N=(0,t.Z)(f,2),_=N[0],v=N[1],g=(0,l.useState)(10),b=(0,t.Z)(g,2),y=b[0],Z=b[1],E=(0,l.useState)(),S=(0,t.Z)(E,2),C=S[0],M=S[1];(0,l.useEffect)((function(){i.Z.fetchAllEmployee().then((function(e){m(e.data)}))}),[C]);var I=function(e){M(e)},k=_*y,A=k-y,q=u.filter((function(e){return x.some((function(s){return e[s].toLowerCase().includes(n)}))})),F=q.slice(A,k);return(0,j.jsxs)("div",{className:r.Z.main,children:[(0,j.jsxs)("div",{className:r.Z.controls,children:[(0,j.jsxs)("div",{className:r.Z.controls__left,children:[(0,j.jsx)("input",{className:r.Z.pp,type:"number",value:y,onChange:function(e){return Z(e.target.value)}}),(0,j.jsx)("input",{type:"text",placeholder:"search....",onChange:function(e){return d(e.target.value)}})]}),!C&&(0,j.jsx)("div",{className:"alert alert-success",children:C}),(0,j.jsx)(p,{onSendMsg:I}),(0,j.jsxs)("div",{className:r.Z.controls__right,children:[(0,j.jsx)(c.FtK,{onClick:function(){1!==_&&v(_-1)}}),(0,j.jsx)("span",{children:_+" OF "+Math.ceil(q.length/y)}),(0,j.jsx)(c.rYR,{onClick:function(){_!==Math.ceil(q.length/y)&&v(_+1)}})]})]}),(0,j.jsx)("div",{className:r.Z.table,children:(0,j.jsx)(a.default,{all:F,onGetMsg:I})})]})}},2768:function(e,s,n){n.r(s);n(2480),n(2905);var t=n(184);s.default=function(e){return(0,t.jsx)("div",{children:(0,t.jsxs)("table",{className:"table table-striped container",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"id"}),(0,t.jsx)("th",{scope:"col",children:"First Name"}),(0,t.jsx)("th",{scope:"col",children:"Last Name"}),(0,t.jsx)("th",{scope:"col",children:"Email"}),(0,t.jsx)("th",{scope:"col",children:"Role"}),(0,t.jsx)("th",{scope:"col",children:"Depot Id"}),(0,t.jsx)("th",{scope:"col",children:"Depot Name"}),(0,t.jsx)("th",{scope:"col",children:"Station Id"}),(0,t.jsx)("th",{scope:"col",children:"Station Name"}),(0,t.jsx)("th",{scope:"col",children:"Edit"})]})}),(0,t.jsx)("tbody",{children:e.all.map((function(e){return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.id}),(0,t.jsx)("td",{children:e.firstName}),(0,t.jsx)("td",{children:e.lastName}),(0,t.jsx)("td",{children:e.email}),(0,t.jsx)("td",{children:e.role}),(0,t.jsx)("td",{children:e.depotId}),(0,t.jsx)("td",{children:e.depotName}),(0,t.jsx)("td",{children:e.stationId}),(0,t.jsx)("td",{children:e.stationName}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{className:"btn btn-success",children:"Edit"})})]},e.id)}))})]})})}},2905:function(e,s){s.Z={main:"AppUsers_main__EqFDs",controls:"AppUsers_controls__jIZ1s",pp:"AppUsers_pp__kB1OX",table:"AppUsers_table__pS82p"}}}]);
//# sourceMappingURL=693.8366ee1f.chunk.js.map