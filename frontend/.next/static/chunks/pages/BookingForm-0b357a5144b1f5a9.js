(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{3480:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/BookingForm",function(){return a(495)}])},495:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(4848),u=a(6540);let r=e=>{let{availableSlots:t=[]}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("select",{name:"time",required:!0,children:t.map((e,t)=>(0,n.jsx)("option",{value:e,children:e},t))})})},s=e=>{let{onDateChange:t,availableSlots:a}=e,[s,l]=(0,u.useState)({date:"",time:"",guests:1,name:"",contact:""}),o=e=>{l({...s,[e.target.name]:e.target.value}),"date"===e.target.name&&t(e.target.value)};return(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),alert("Booking successful!")},children:[(0,n.jsx)("input",{type:"date",name:"date",onChange:o,required:!0}),(0,n.jsx)(r,{availableSlots:a}),(0,n.jsx)("input",{type:"number",name:"guests",value:s.guests,onChange:o,placeholder:"Number of guests"}),(0,n.jsx)("input",{type:"text",name:"name",value:s.name,onChange:o,placeholder:"Your Name"}),(0,n.jsx)("input",{type:"text",name:"contact",value:s.contact,onChange:o,placeholder:"Contact Number"}),(0,n.jsx)("button",{type:"submit",children:"Book"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(3480)),_N_E=e.O()}]);