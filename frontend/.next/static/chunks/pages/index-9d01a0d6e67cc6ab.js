(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7031)}])},7031:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var n=a(4848),s=a(6540),i=a(4335);function r(){let[e,t]=(0,s.useState)([]),[a,r]=(0,s.useState)({date:"",time:"",guests:"",name:"",contact:""}),l=async()=>{a.date&&t((await i.A.get("http://localhost:5000/api/bookings",{params:{date:a.date}})).data)};(0,s.useEffect)(()=>{l()},[a.date]);let u=async e=>{e.preventDefault();try{await i.A.post("http://localhost:5000/api/bookings",a),alert("Booking created successfully."),l()}catch(e){alert("Error creating booking.")}},o=e=>{r({...a,[e.target.name]:e.target.value})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Restaurant Table Booking"}),(0,n.jsxs)("form",{onSubmit:u,children:[(0,n.jsx)("input",{type:"date",name:"date",value:a.date,onChange:o,required:!0}),(0,n.jsx)("input",{type:"time",name:"time",value:a.time,onChange:o,required:!0}),(0,n.jsx)("input",{type:"number",name:"guests",value:a.guests,onChange:o,required:!0,placeholder:"Guests"}),(0,n.jsx)("input",{type:"text",name:"name",value:a.name,onChange:o,required:!0,placeholder:"Name"}),(0,n.jsx)("input",{type:"text",name:"contact",value:a.contact,onChange:o,required:!0,placeholder:"Contact"}),(0,n.jsx)("button",{type:"submit",children:"Book Table"})]}),(0,n.jsx)("h2",{children:"Available Bookings"}),e.length>0?(0,n.jsx)("ul",{children:e.map(e=>(0,n.jsxs)("li",{children:[e.date," ",e.time," - ",e.name," (",e.guests," guests)"]},e.id))}):(0,n.jsx)("p",{children:"No bookings available for the selected date."})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[335,636,593,792],()=>t(7276)),_N_E=e.O()}]);