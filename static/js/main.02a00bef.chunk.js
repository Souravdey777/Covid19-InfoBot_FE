(this.webpackJsonpcovid19infobot=this.webpackJsonpcovid19infobot||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(9),i=a.n(o),c=a(19),r=a(5),l=a(10),u=a(11),m=a(7),d=a(8),f=a(21),g=(a(43),a(27)),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).\u0430ttachmentTemplate=function(e){var t=e.item;return s.a.createElement(f.b,{title:t.title,imageUrl:t.images?t.images[0].url:"",subtitle:t.subtitle?t.subtitle:"",actions:t.buttons,onActionExecute:n.addNewMessage})},n.parseActions=function(e){return void 0!==e?(e.map((function(e){"postBack"===e.type&&(e.type="reply")})),e):[]},n.parseText=function(e){return void 0!==e.action?e.action.value:e.value?e.value:e.message.text},n.onResponse=function(e){var t,a=Object(u.a)(n);(e.result.fulfillment.messages.forEach((function(t){var n;n={text:t.speech,author:a.bot,timestamp:new Date(e.timestamp),suggestedActions:t.replies?t.replies.map((function(e){return{type:"reply",title:e,value:e}})):[]},a.setState((function(e){return{messages:[].concat(Object(c.a)(e.messages),[n])}}))})),e.result.fulfillment.data)&&(console.log(e.result.fulfillment.data),t={text:"",author:a.bot,timestamp:new Date(e.timestamp),suggestedActions:e.result.fulfillment.data.suggestedActions?n.parseActions(e.result.fulfillment.data.null.suggestedActions):[],attachments:e.result.fulfillment.data.attachments?e.result.fulfillment.data.null.attachments:[]},a.setState((function(e){return{messages:[].concat(Object(c.a)(e.messages),[t])}})))},n.addNewMessage=function(e){var t=n.parseText(e);n.client.textRequest(t.toString()).then(n.onResponse,Object(u.a)(n)),e.value||n.setState((function(e){return{messages:[].concat(Object(c.a)(e.messages),[{author:n.user,text:t,timestamp:new Date}])}}))},n.state={messages:[]},n.client=new g.a({accessToken:"5188e935cea54fd4b2079aa176f48ecd"}),n.client.eventRequest("Welcome").then(n.onResponse,Object(u.a)(n)),n.user={id:1},n.bot={id:"Info Buddy",name:"Covid19 Info Bot"},n.addNewMessage=n.addNewMessage.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{style:{height:"100vh",display:"flex"}},s.a.createElement(f.a,{width:"100%",messages:this.state.messages,user:this.user,onMessageSend:this.addNewMessage,attachmentTemplate:this.\u0430ttachmentTemplate}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.02a00bef.chunk.js.map