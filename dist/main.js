(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]),a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n\n.header {\n  width: 100%;\n  height: 3em;\n  background-color: lightgray;\n  padding: 1em;\n  font-weight: 500;\n}\n\n.gamebody {\n  height: calc(100vh - 3em);\n  align-items: center;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.gamefield {\n  width: 500px;\n  height: 500px;\n}\n\n.gamefield > div {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.gamefield .cell {\n  border: 1px black solid;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal {\n  padding: 4em;\n  display: grid;\n  grid-template-rows: 3em 1fr;\n  border: 2px black solid;\n  border-radius: 2em;\n}\n\n.modal > form {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.modal input[type='submit'] {\n  border: 0px;\n  border-radius: 1em;\n  padding: 1em 3em;\n  background-color: lightgray;\n}\n\n.modal input[type='text'] {\n  padding: 1em;\n  border: 2px solid lightgray;\n  border-radius: 0.5em;\n}\n\n.invisible {\n  display: none;\n}\n\n.visible {\n  position: absolute;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},498:e=>{class t{constructor(e){this.field=[],this.shipsOnField=0,this.oponent=e;for(let e=0;e<10;e++)this.field[e]=new Array(10)}}t.prototype.checkField=function(){0===this.shipsOnField&&alert(`${this.oponent} wins!`)},t.prototype.recieveAttack=function(e,t){const n=this.field[t][e];return void 0===n?(this.field[t][e]="0","MISS"):"0"===n?"ERR":(n.hit(),this.field[t][e]="0",!0===n.isSunk&&(this.shipsOnField-=1),this.checkField(),"HIT")},e.exports=t},507:e=>{class t{constructor(e){this.name=e}}t.prototype.makeMove=function(e,t,n){e.recieveAttack(t,n)},e.exports=t},643:e=>{class t{constructor(e){this.length=e,this.timesHit=0,this.isHorizontal=!1,this.isSunk=!1}}t.prototype.hit=function(){this.timesHit+=1,this.length<=this.timesHit&&(this.isSunk=!0)},t.prototype.changeDirection=function(){!1===this.isHorizontal?this.isHorizontal=!0:this.isHorizontal=!1},t.prototype.place=function(e,t,n){if(t+this.length>10||n+this.length>10)throw"Cannot place ship in this position";if(!1===this.isHorizontal)for(let o=0;o<this.length;o++){if(null!=e.field[o+n][t])throw"Ships cannot overlap";e.field[o+n][t]=this}if(!0===this.isHorizontal)for(let o=0;o<this.length;o++){if(null!=e.field[n][t+o])throw"Ships cannot overlap";e.field[n][t+o]=this}return e.shipsOnField+=1,e},e.exports=t}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(507),t=n.n(e),o=n(498),r=n.n(o),i=n(379),a=n.n(i),s=n(795),c=n.n(s),l=n(569),d=n.n(l),p=n(565),u=n.n(p),h=n(216),f=n.n(h),m=n(589),v=n.n(m),y=n(426),g={};g.styleTagTransform=v(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),a()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;var b=n(643),x=n.n(b);const k={currentMove:0,gameover:!1},w={1:2,2:1,3:1,4:1};let M=new(r())("Computer"),C=new(r())("Player");function S(){const e=document.querySelector("main"),t=document.createElement("div");t.classList.add("gamefield");const n=document.createElement("div");n.textContent=k.player.name,t.appendChild(n);const o=document.createElement("div");for(let e=0;e<100;e++){const t=document.createElement("div");t.dataset.id=e,t.classList.add("cell"),t.classList.add("player"),o.appendChild(t)}t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.classList.add("gamefield");const i=document.createElement("div");i.textContent="Computer",r.appendChild(i);const a=document.createElement("div");for(let e=0;e<100;e++){const t=document.createElement("div");t.dataset.id=100+e,t.classList.add("cell"),t.classList.add("computer"),a.appendChild(t)}r.appendChild(a),e.appendChild(r),document.querySelectorAll(".computer").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.id-100,n=t%10,o=Math.floor(t/10);switch(C.recieveAttack(n,o)){case"HIT":e.target.style.backgroundColor="red";break;case"MISS":e.target.style.backgroundColor="lightgray";break;case"SUNK":alert("cannot attack sunk ship")}E()}))}))}function E(){const e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random()),n=M.recieveAttack(e,t),o=document.querySelector(`[data-id="${10*t+e}"]`);switch(n){case"HIT":o.style.backgroundColor="red";break;case"MISS":o.style.backgroundColor="lightgray";break;case"ERR":E()}}Object.keys(w).forEach((e=>{for(let t=0;t<w[e];t++){const n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),r=new(x())(Number(e));Math.random()<.5&&r.changeDirection();try{C=r.place(C,n,o)}catch(e){t-=1}}})),Object.keys(w).forEach((e=>{for(let t=0;t<w[e];t++){const n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),r=new(x())(Number(e));Math.random<.5&&r.changeDirection();try{M=r.place(M,n,o)}catch(e){t-=1}}})),function(){const e=document.querySelector(".modal");e.classList.remove("invisible"),e.classList.add("visible"),document.querySelector(".modal > form").addEventListener("submit",(n=>{n.preventDefault();const o=n.target.name.value;k.player=new(t())(o),C.oponent=o,e.classList.add("invisible"),e.classList.remove("visible"),S()}))}()})()})();