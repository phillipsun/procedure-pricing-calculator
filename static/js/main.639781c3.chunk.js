(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,r){e.exports=r(67)},39:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(27),o=r.n(n),s=(r(39),r(5)),i=r(6),l=r(9),u=r(7),d=r(8),p=r(3),m=r(4),E=r.n(m),y=r(13),h=r(30),f=r.n(h),b=function(e){return function(){var t=Object(y.a)(E.a.mark(function t(r){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({type:"DESELECT_PROCEDURE",payload:e});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.procedure,r=e.deselectProcedure,a=e.selectProcedure,n=e.applyDiscount;return t.isSelected?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"procedure-list__procedure procedure procedure--".concat(t.ProcedureId," procedure--selected"),onClick:function(){r(t),n(t)}},c.a.createElement("h3",{className:"procedure__label"},t.Label),c.a.createElement("p",{className:"procedure__price"},c.a.createElement("span",{className:"procedure__min-price"},"$",t.MinimumPrice)," - ",c.a.createElement("span",{className:"procedure__max-price"},"$",t.MaximumPrice)))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"procedure-list__procedure procedure procedure--".concat(t.ProcedureId),onClick:function(){a(t),n(t)}},c.a.createElement("h3",{className:"procedure__label"},t.Label),c.a.createElement("p",{className:"procedure__price"},c.a.createElement("span",{className:"procedure__min-price"},"$",t.MinimumPrice)," - ",c.a.createElement("span",{className:"procedure__max-price"},"$",t.MaximumPrice))))}}]),t}(a.Component),P=Object(p.b)(null,{selectProcedure:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(r){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({type:"SELECT_PROCEDURE",payload:e});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},deselectProcedure:b,applyDiscount:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(r){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({type:"APPLY_DISCOUNT",payload:e});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(g),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.category,r=e.procedures;return c.a.createElement("div",{className:"procedure-list__category"},c.a.createElement("h2",{className:"procedure-list__category-header"},t.Label),c.a.createElement("div",{className:"procedure-list__category-procedures"},r&&r.map(function(e){return e.CategoryId===t.CategoryId?c.a.createElement(P,{key:e.ProcedureId,procedure:e}):null})))}}]),t}(a.Component),v=Object(p.b)(function(e){return{procedures:e.procedureReducer.procedures}},null)(_),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.categories,r=e.procedures;return c.a.createElement("div",{className:"procedure-list"},t.map(function(e){return c.a.createElement(v,{key:e.CategoryId,category:e})}),0===r.length&&c.a.createElement("p",null,"Loading procedures..."))}}]),t}(a.Component),j=Object(p.b)(function(e){return{procedures:e.procedureReducer.procedures,categories:e.procedureReducer.categories}},null)(O),M=r(12),x=r.n(M),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedProcedures,r=e.selectedMin,a=e.selectedMax,n=e.clearProcedures,o=e.discountedSelectedMin,s=e.discountedSelectedMax,i=e.discount;return 0===t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pricing-calc"},c.a.createElement("h3",{className:"pricing-calc__new-total",style:{opacity:"0.2"}},c.a.createElement("span",null,"Total: $0")),c.a.createElement("div",{className:"pricing-calc__wrapper"},c.a.createElement("h4",{className:"pricing-calc__text",style:{margin:"0"}},"Select Desired Procedures:")))):1===t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pricing-calc"},c.a.createElement("h3",{className:"pricing-calc__new-total"},c.a.createElement("span",null,"Total: $"),c.a.createElement(x.a,{value:r,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700}),c.a.createElement("span",null," - $"),c.a.createElement(x.a,{value:a,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700})),c.a.createElement("div",{className:"pricing-calc__wrapper"},c.a.createElement("div",{className:"pricing-calc__clear",onClick:function(){n()}},"Clear Selections"),c.a.createElement("h4",{className:"pricing-calc__text"},"1 Procedure Selected")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pricing-calc"},c.a.createElement("div",{className:"pricing-calc__total-wrapper"},c.a.createElement("h3",{className:"pricing-calc__new-total"},c.a.createElement("span",null,"Now: $"),c.a.createElement(x.a,{value:o,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700}),c.a.createElement("span",null," - $"),c.a.createElement(x.a,{value:s,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700})),c.a.createElement("h3",{className:"pricing-calc__old-total"},c.a.createElement("span",null,"Was: $"),c.a.createElement(x.a,{value:r,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700}),c.a.createElement("span",null," - $"),c.a.createElement(x.a,{value:a,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:700}))),c.a.createElement("h3",{className:"pricing-calc__discount animateAll"},c.a.createElement("span",null,"Save: $"),c.a.createElement(x.a,{value:i,style:{transition:"0.8s ease-out",transitionProperty:"background-color, color, opacity"},stepPrecision:0,duration:1e3})),c.a.createElement("div",{className:"pricing-calc__wrapper"},c.a.createElement("div",{className:"pricing-calc__clear",onClick:function(){n()}},"Clear Selections"),c.a.createElement("h4",{className:"pricing-calc__text"},t.length," procedures selected"))))}}]),t}(a.Component),w=Object(p.b)(function(e){return{selectedProcedures:e.procedureReducer.selectedProcedures,selectedMin:e.procedureReducer.selectedMin,selectedMax:e.procedureReducer.selectedMax,discountedSelectedMin:e.procedureReducer.discountedSelectedMin,discountedSelectedMax:e.procedureReducer.discountedSelectedMax,discount:e.procedureReducer.discount}},{deselectProcedure:b,clearProcedures:function(){return function(){var e=Object(y.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"CLEAR_PROCEDURES"});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(N),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getProcedures)()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"headline"},"Multi-Procedure Pricing Calculator"),c.a.createElement("div",{className:"panel"},c.a.createElement("div",{className:"panel-body"},c.a.createElement("p",null,"* Dr. Morales offers visitors to his site the opportunity to see estimated prices at his premier facility. These estimates are not quotes or guarantees. You should not rely upon those estimates as a full or final price. Your actual costs may be higher or lower depending on many factors, including but not limited to: your surgeon's treatment choices, actual services rendered, additional ancillary treatments or services, medications, and potential complications. An in-person consultation is required to receive a finalized quote of the procedure(s) you desire."))),c.a.createElement(w,null),c.a.createElement(j,null))}}]),t}(a.Component),C=Object(p.b)(null,{getProcedures:function(){return function(){var e=Object(y.a)(E.a.mark(function e(t){var r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://moralesrolando.doctorlogicsitesstage.com/?json=true");case 2:r=e.sent,t({type:"GET_PROCEDURES",payload:r.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=r(11),k=r(31),D=r(32),L=r(33),I=r(10),$={procedures:[],categories:[],selectedProcedures:[],selectedMin:0,selectedMax:0,discount:0,discountedSelectedMin:0,discountedSelectedMax:0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROCEDURES":return Object(I.a)({},e,{procedures:t.payload.MasterPage.Procedures,categories:t.payload.Categories});case"SELECT_PROCEDURE":return Object(I.a)({},e,{procedures:e.procedures.map(function(e){return e.ProcedureId===t.payload.ProcedureId?Object(I.a)({},e,{isSelected:!0}):e}),selectedProcedures:[].concat(Object(L.a)(e.selectedProcedures),[t.payload.Label]),discount:500*e.selectedProcedures.length||0,selectedMin:e.selectedMin+t.payload.MinimumPrice,selectedMax:e.selectedMax+t.payload.MaximumPrice});case"DESELECT_PROCEDURE":return Object(I.a)({},e,{procedures:e.procedures.map(function(e){return e.ProcedureId===t.payload.ProcedureId?Object(I.a)({},e,{isSelected:!1}):e}),selectedProcedures:e.selectedProcedures.filter(function(e){return e!==t.payload.Label}),discount:e.discount-500,selectedMin:e.selectedMin-t.payload.MinimumPrice,selectedMax:e.selectedMax-t.payload.MaximumPrice,discountedSelectedMin:e.selectedMin+e.discount-t.payload.MinimumPrice,discountedSelectedMax:e.selectedMax+e.discount-t.payload.MaximumPrice});case"CLEAR_PROCEDURES":return Object(I.a)({},e,{procedures:e.procedures.map(function(e){return e.isSelected?Object(I.a)({},e,{isSelected:!1}):e}),selectedProcedures:[],discount:0,selectedMin:0,selectedMax:0});case"APPLY_DISCOUNT":return Object(I.a)({},e,{discountedSelectedMin:e.selectedMin-e.discount,discountedSelectedMax:e.selectedMax-e.discount});default:return Object(I.a)({},e)}},U=Object(R.combineReducers)({procedureReducer:T}),A=[D.a],F=Object(R.createStore)(U,Object(k.composeWithDevTools)(R.applyMiddleware.apply(void 0,A)));o.a.render(c.a.createElement(p.a,{store:F},c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.639781c3.chunk.js.map