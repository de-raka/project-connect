(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(4),c=t.n(u),o=t(5),i=t(6),l=(t(12),function(e){var n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=a.a.useState(n),r=Object(i.a)(t,2),u=r[0],c=r[1];return{items:a.a.useMemo(function(){var n=Object(o.a)(e);return null!==u&&n.sort(function(e,n){return e[u.key]<n[u.key]?"ascending"===u.direction?-1:1:e[u.key]>n[u.key]?"ascending"===u.direction?1:-1:0}),n},[e,u]),requestSort:function(e){var n="ascending";u&&u.key===e&&"ascending"===u.direction&&(n="descending"),c({key:e,direction:n})},sortConfig:u}}(e.ranks),t=n.items,r=n.requestSort,u=n.sortConfig,c=function(e){if(u)return u.key===e?u.direction:void 0};return a.a.createElement("table",null,a.a.createElement("caption",null,"Ranks"),a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return r("country")},className:c("country")},"Country")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return r("need")},className:c("need")},"Need")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return r("infrastructure")},className:c("infrastructure")},"Infrastructure")),a.a.createElement("th",null,a.a.createElement("button",{type:"button",onClick:function(){return r("government")},className:c("government")},"Government")))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.country),a.a.createElement("td",null,e.need),a.a.createElement("td",null,e.infrastructure),a.a.createElement("td",null,e.government))})))});function d(){return a.a.createElement("div",{className:"App"},a.a.createElement(l,{ranks:[{id:1,country:"Sudan",need:1,infrastructure:9,government:8},{id:2,country:"South Sudan",need:2,infrastructure:8,government:9},{id:3,country:"Sierra Leone",need:3,infrastructure:6,government:2},{id:4,country:"Niger",need:4,infrastructure:7,government:5},{id:5,country:"Zimbabwe",need:5,infrastructure:4,government:6},{id:6,country:"El Salvador",need:6,infrastructure:3,government:2},{id:7,country:"Honduras",need:7,infrastructure:5,government:6},{id:8,country:"Philippines",need:8,infrastructure:2,government:4},{id:9,country:"Colombia",need:9,infrastructure:1,government:1}]}))}var m=document.getElementById("root");c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),m)},7:function(e,n,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6f144352.chunk.js.map