(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(22),a=n.n(i),s=(n(43),n(14)),o=(n(44),n(45),n(46),n(20)),j=n(29),l=n(3);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"column";return{display:"flex",flexDirection:t,alignItems:"center",justifyContent:"center"}}function b(){var t;return(t=["C","D","E","F","G","A","B"])[Math.floor(Math.random()*t.length)]}function d(){return Math.random().toString(36).substr(2,5)}var f=function(t){var e=t.children;return Object(l.jsx)("div",{style:Object(s.a)(Object(s.a)({width:"40vw",height:"40vh",backgroundColor:"skyblue"},u()),{},{fontSize:"120px"}),children:e})},O=function(t){var e=t.note,n=Object(j.join)("/notes","assets/".concat(e,".mp3"));return Object(l.jsxs)(f,{children:[Object(l.jsx)("span",{className:"animate__animated animate__fadeIn",style:{fontSize:"120px",fontFamily:"Georgia",color:"#2860B4"},children:e}),Object(l.jsx)("audio",{src:n,autoPlay:!0})]})},h=function(t){var e=t.bpm,n=Object(c.useState)(b()),r=Object(o.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)(d()),j=Object(o.a)(s,2),u=j[0],f=j[1],h=function(t){return Math.floor(6e4/t)}(e);function x(){a(b()),f(d())}return Object(c.useEffect)((function(){var t=setInterval(x,h);return function(){clearInterval(t)}})),Object(l.jsx)(O,{note:i},u)},x=function(){return Object(l.jsx)(f,{children:Object(l.jsx)("span",{style:{fontFamily:"Lucida Console",color:"#F2569C"},children:"PAUSED"})})},p=function(t){var e=t.bpm;return t.playing?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{bpm:e})}):Object(l.jsx)(x,{})},g=n(53),m=n(55),v=function(t){var e=t.setBpm,n=t.playing,c=t.setPlaying,r=n?"STOP":"START";return Object(l.jsxs)("div",{style:Object(s.a)(Object(s.a)({},u("row")),{},{marginTop:"16px"}),children:[Object(l.jsxs)("span",{style:{margin:"8px"},children:[Object(l.jsx)("span",{style:{marginRight:"8px",fontSize:"18px"},children:"bpm"}),Object(l.jsx)(g.a,{onChange:function(t){var n=parseInt(t);Number.isNaN(n)?e(60):e(n)},size:"large",defaultValue:"60"})]}),Object(l.jsx)(m.a,{onClick:function(){c(!n)},size:"large",style:{marginLeft:"12px",width:"90px"},children:r})]})},y=function(){var t=Object(c.useState)(40),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),s=a[0],j=a[1];return Object(l.jsxs)("div",{style:{},children:[Object(l.jsx)(p,{bpm:n,playing:s}),Object(l.jsx)(v,{setBpm:r,playing:s,setPlaying:j})]})},S=function(t){var e=t.children;return Object(l.jsx)("div",{style:Object(s.a)({width:"100vw",height:"100vh"},u()),children:e})},C=function(){return Object(l.jsx)("div",{style:{fontFamily:"Centaur",fontStyle:"oblique",fontSize:"48px",color:"#397BBE",marginBottom:"12px"},children:Object(l.jsx)("span",{children:"la nota"})})};var F=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(S,{children:[Object(l.jsx)(C,{}),Object(l.jsx)(y,{})]})})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),B()}},[[50,1,2]]]);
//# sourceMappingURL=main.734835be.chunk.js.map