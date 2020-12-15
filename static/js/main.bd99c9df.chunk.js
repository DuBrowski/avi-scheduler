(this.webpackJsonpscheduleparser=this.webpackJsonpscheduleparser||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(9),i=n.n(s),o=n(2),l=n(3),u=n(5),d=n(4),h=n(6),p=n.n(h),j=n(10),b=n(8),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={appts:[],curAppt:{},contents:""},e.openFilePicker=Object(b.a)(p.a.mark((function t(){var n,r,c,a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.showOpenFilePicker({multiple:!0});case 3:return a=t.sent,s=Object(j.a)(a,1),n=s[0],t.next=8,n.getFile();case 8:return r=t.sent,t.next=11,r.text();case 11:c=t.sent,e.setState({contents:c}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error(t.t0.name,t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[0,15]])}))),e.extractScheduleArray=Object(b.a)(p.a.mark((function t(){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.contents){t.next=7;break}return n=f(e.state.contents),r=n.replace(/\n/g," "),c=r.split("BUFFER_ZONE_7"),t.next=6,e.mapScheduleArray(c);case 6:e.renderSchedule();case 7:case"end":return t.stop()}}),t)}))),e.mapScheduleArray=function(t){var n=!1,r=!1,c=!1,a=[],s={};t.forEach((function(t){(/([a-zA-Z])+([ -~])*/.test(t)||m(t))&&(n?(s.lastName=t,n=!1):r?(s.firstName=t,r=!1):c?(s.description=t,c=!1):/^([0-1]?[0-9]|2[0-3]):[0-5][0-9][a-z]$/.test(t)?(s.time=t.replace(":","").slice(0,-1),r=!0):m(t)?(s.phone=t,r=!0):"CANINE"===t||"FELINE"===t?c=!0:"RM"===t.slice(0,2)&&(n=!0),e.fieldsFull(s)&&(a.push(s),s={}))})),e.setState({appts:a}),console.log(a)},e.formatFutureAppt=function(e){return{FName:e.firstName+" "+e.lastName.split(",")[0],FDoctor:"",FTime:e.time,FDescription:e.description}},e.fieldsFull=function(e){var t=!1;return e.lastName&&e.firstName&&e.description&&e.time&&e.phone&&(t=!0),t},e.renderSchedule=function(){var t=e.state.appts.map((function(e,t){return{name:e.firstName+" "+e.lastName.split(",")[0],time:e.time,description:e.description,phone:e.phone,key:t}}));e.props.setParentState(t)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{className:"ui button primary",onClick:this.openFilePicker,children:"Open File"}),Object(r.jsx)("button",{className:"ui button secondary",onClick:this.extractScheduleArray,children:"Load Schedule"})]})}}]),n}(a.a.Component),f=function(e){return null!==e&&""!==e&&(e=e.toString()).replace(/(<([^>]+)>)/gi,"BUFFER_ZONE_7")},m=function(e){return/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(e)},x=O,v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderHead=function(){return Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Spot"}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Dr"}),Object(r.jsx)("th",{children:"Time"}),Object(r.jsx)("th",{children:"Tech"}),Object(r.jsx)("th",{children:"Rm"}),Object(r.jsx)("th",{children:"Description"})]})})},e}return Object(l.a)(n,[{key:"render",value:function(){return this.renderHead()}}]),n}(a.a.Component),y=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderTableRows=function(){var t=e.props.appts;return t?t.map((function(e){return console.log("appt: ".concat(e)),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"_"}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:"_"}),Object(r.jsx)("td",{children:"NEED"}),Object(r.jsx)("td",{children:"_"}),Object(r.jsx)("td",{children:e.time}),Object(r.jsx)("td",{children:e.description})]},e.index)})):null},e}return Object(l.a)(n,[{key:"render",value:function(){return this.renderTableRows()}}]),n}(a.a.Component)),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={scheduleArray:[]},e.setScheduleState=function(t){var n=e.state.scheduleArray.concat(t);e.setState({scheduleArray:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"ui form container",children:Object(r.jsx)(x,{setParentState:this.setScheduleState})}),Object(r.jsxs)("table",{children:[Object(r.jsx)(v,{}),Object(r.jsx)("tbody",{children:Object(r.jsx)(y,{appts:this.state.scheduleArray})})]})]})}}]),n}(a.a.Component);i.a.render(Object(r.jsx)(F,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bd99c9df.chunk.js.map