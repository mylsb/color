(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{324:function(e,t,a){"use strict";(function(e,r,l,n,o,c,i,s,m){var u=a(5),h=a(0),p=a.n(h);t.a=function(t){var a=t.hexCode,h=[1,3,5].map(function(e){return a.slice(e,e+2)});return p.a.createElement(e,{className:Object(u.css)({fontSize:14})},p.a.createElement(r,null,p.a.createElement(l,null,p.a.createElement(n,{style:{textAlign:"center"}}," "),p.a.createElement(n,{style:{textAlign:"center"}},p.a.createElement(o,{color:"apple"},"RED")),p.a.createElement(n,{style:{textAlign:"center"}}," "),p.a.createElement(n,{style:{textAlign:"center"}},p.a.createElement(o,{color:"grass"},"GREEN")),p.a.createElement(n,{style:{textAlign:"center"}}," "),p.a.createElement(n,{style:{textAlign:"center"}},p.a.createElement(o,{color:"marine"},"BLUE")),p.a.createElement(n,{style:{textAlign:"center"}}," ")),p.a.createElement(l,{style:{fontSize:128}},p.a.createElement(n,null,"# "),p.a.createElement(n,null,p.a.createElement(c,{lineHeight:1},h[0])," "),p.a.createElement(n,null,p.a.createElement(c,null," ")),p.a.createElement(n,null,p.a.createElement(c,{lineHeight:1},h[1])),p.a.createElement(n,null,p.a.createElement(c,null," ")),p.a.createElement(n,null,p.a.createElement(c,{lineHeight:1},h[2])),p.a.createElement(n,null,p.a.createElement(c,null," "))),p.a.createElement(l,null,h.map(function(e,t){return[p.a.createElement(n,{style:{textAlign:"center"}}," "),p.a.createElement(n,{style:{textAlign:"right"}},p.a.createElement(c,{lineHeight:1.5},parseInt(e[0],16)," × 16",p.a.createElement(i,null,"0"),p.a.createElement(s,null),"+ ",parseInt(e[1],16)," × 16",p.a.createElement(i,null,"1"),p.a.createElement(s,null),p.a.createElement(m,{className:Object(u.css)("height:1px;"),bg:"dust",my:2}),parseInt(e,16)))]}),p.a.createElement(n,{style:{textAlign:"center"}}," "))))}}).call(this,a(218).default,a(219).default,a(119).default,a(493).default,a(27).default,a(67).default,a(494).default,a(495).default,a(19).default)},325:function(e,t,a){"use strict";(function(e){var r=a(5),l=a(0),n=a.n(l),o=a(6),c=["dawn","sunset","april","coral","orangepink","froly","sunrise","candy"],i=Object(r.keyframes)("0%{transform:translateY(-10px);}50%{transform:translateY(40px);opacity:1;}100%{transform:translateY(80px);opacity:0;}"),s=Object(o.a)(e,{target:"e1675xom0"})("opacity:0;left:",function(e){return e.left},"px;transform:translateY(-10px);position:absolute;animation:",i," ",c.length/3,"s ",function(e){return e.index/3},"s linear infinite;");t.a=function(t){var a=t.color;return n.a.createElement(e,{width:.25,className:Object(r.css)("overflow:hidden;position:relative;")},c.map(function(e,t){return n.a.createElement(s,{fontSize:4,color:a,key:t,index:t,left:150*Math.random()},e)}))}}).call(this,a(19).default)},477:function(e,t,a){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=a(478),{page:e.exports.default}})},478:function(e,t,a){"use strict";a.r(t),function(e,r,l,n,o,c,i,s,m,u,h,p,f,d,b){var g=a(5),E=a(18),x=a.n(E),y=a(0),w=a.n(y),v=a(14),S=a.n(v),z=a(25),O=a.n(z),j=a(324),W=a(325),k=a(58);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e,t,a,r,l,n,o){try{var c=e[n](o),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(r,l)}function I(e){return function(){var t=this,a=arguments;return new Promise(function(r,l){var n=e.apply(t,a);function o(e){C(n,r,l,o,c,"next",e)}function c(e){C(n,r,l,o,c,"throw",e)}o(void 0)})}}var N=function(){var e=I(x.a.mark(function e(t){var a,r,l;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.replace("#",""),e.next=3,fetch("https://api.color.pizza/v1/".concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return l=e.sent,e.abrupt("return",l.colors[0].name);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.default=function(){var t=A(Object(y.useState)("#f16975"),2),a=t[0],E=t[1],v=A(Object(y.useState)("#f16975"),2),z=v[0],C=v[1],B=A(Object(y.useState)(null),2),P=B[0],H=B[1],R=A(Object(y.useState)(""),2),T=R[0],q=R[1],F=(_=I(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a);case 2:t=e.sent,q(t);case 4:case"end":return e.stop()}},e,this)})),function(){return _.apply(this,arguments)});var _;Object(y.useEffect)(function(){F()},[a]);var D=S()(a).lighten(.3).hex(),L=S()(a).rgb().string(),J=S()(a).hsl().round().string(),M=S()(a).contrast(S()("white")),G=S()(a).contrast(S()("black")),Y=M>4.49?"Pass":"Fail",X=G>4.49?"Pass":"Fail",Q=O.a.scale([a,"#ffffff"]).mode("hsl").colors(8),U=O.a.scale([a,"#000000"]).mode("hsl").colors(8);return w.a.createElement(e,null,w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(l,{width:1},w.a.createElement(n,{mt:0,fontSize:[5,6,9],fontWeight:700,mb:3},"Thinking about color"),w.a.createElement(o,{fontSize:[4,5]},"A documentation journey with the Product Design & Engineering teams at Cloudflare"))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"The Question"),w.a.createElement(o,{fontSize:5},"What are all the possible things someone might want or need to know about a color?"),w.a.createElement(i,{display:"none"},w.a.createElement(s,null,"String Name"),w.a.createElement(s,null,"Hue Name"),w.a.createElement(s,null,"Saturation"),w.a.createElement(s,null,"Alpha level"),w.a.createElement(s,null,"Values",w.a.createElement(i,null,w.a.createElement(s,null,"LAB"),w.a.createElement(s,null,"RGB(A)"),w.a.createElement(s,null,"HSL(A)"),w.a.createElement(s,null,"HSV"),w.a.createElement(s,null,"uiColor"))),w.a.createElement(s,null,"What will this look like?"),w.a.createElement(s,null,"What will this look like as a button?"),w.a.createElement(s,null,"What will this look like as a border?"),w.a.createElement(s,null,"What will this look like as a background?"),w.a.createElement(s,null,"What will this look like as text?"),w.a.createElement(s,null,"What colors will look good with this that are also accessible?"),w.a.createElement(s,null,"How should I use this color"),w.a.createElement(s,null,"Is this color accessible with white?"),w.a.createElement(s,null,"Is this color accessible with black?"),w.a.createElement(s,null,"Where do we use this color?"),w.a.createElement(s,null,"What's the next darkest?"),w.a.createElement(s,null,"What's the next lightest?")))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"The input"),w.a.createElement(o,{fontSize:5},"This is a hex code"),w.a.createElement(m,{fontSize:[6,7,8],onChange:function(e){var t=e.target.value;C(t);try{S()(t),E(S()(t).hex())}catch(e){}},value:z,className:Object(g.css)("background-color:transparent;border:none;appearance:none;outline:none;"),type:"text"}))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"What is a hex code?"),w.a.createElement(o,{fontSize:5},"In mathematics and computing, hexadecimal (also base 16, or hex) is a positional numeral system with a radix, or base, of 16. It uses sixteen distinct symbols, most often the symbols 0–9 to represent values zero to nine, and A, B, C, D, E, F (or alternatively a, b, c, d, e, f) to represent values ten to fifteen."),w.a.createElement(o,{fontSize:3},"Hexadecimal numerals are widely used by computer system designers and programmers. As each hexadecimal digit represents four binary digits (bits), it allows a more human-friendly representation of binary-coded values. One hexadecimal digit represents a nibble (4 bits), which is half of an octet or byte (8 bits). For example, a single byte can have values ranging from 00000000 to 11111111 in binary form, but this may be more conveniently represented as 00 to FF in hexadecimal."))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"Wait what? What is a hex code? How does it relate to color?"),w.a.createElement(o,{fontSize:5},"A color is specified according to the intensity of its red, green and blue components. The first two characters are the red channel, the second two characters are green , and the last two characters are blue."))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"Hex code math"),w.a.createElement(o,{fontSize:5},"Translating a hex code into rgb"),w.a.createElement(e,null,w.a.createElement(j.a,{hexCode:a})))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"What does this color look like as text?"),w.a.createElement(o,{fontSize:5},"This is one way to visualize a color"),w.a.createElement(c,{fontSize:[7,8],mb:2,mt:2,color:a},a))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8",bg:a},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"This is another way"),w.a.createElement(c,{fontSize:[7,8],mb:2,mt:2},a))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"We probably want a way to visualize background colors that doesn't require the full screen. So we can visualize it as a swatch. Like when you go to pick out paint at the store."),w.a.createElement(e,{width:160,bg:a,className:Object(g.css)("height:60px;")}))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2},"We can visualize the value of the color as text and as a background."),w.a.createElement(e,{width:160,bg:a,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{mt:0,fontWeight:700,fontSize:4,color:a},a))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8",onMouseMove:function(e){H(e.pageX/e.target.clientWidth)},bg:"hsl(0, 0%, ".concat(100*P,"%)")},w.a.createElement(e,null,w.a.createElement(o,{color:"hsl(0, 0%, ".concat(100*(1-P),"%)"),mb:0},'"...A color is almost never seen as it really is..." - Josef Albers'),w.a.createElement(c,{color:"hsl(0, 0%, ".concat(100*(1-P),"%)"),fontSize:[6,7,8],mb:2,mt:1},"We can visualize the value of the color as text and as a background."),w.a.createElement(e,{width:160,bg:a,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{mt:0,fontWeight:700,fontSize:4,color:a},a))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"One problem with displaying the color value with the color itself, is that sometimes the contrast is too low, impeding readability."),w.a.createElement(e,{width:160,bg:D,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{mt:0,fontWeight:700,fontSize:4,color:D},D))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"As one potential solution, we can always display the color value and the text example separately."),w.a.createElement(u,null,w.a.createElement(e,{width:160,bg:a,mr:2,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{className:Object(g.css)("line-height:1;"),color:a,m:0,fontSize:9,fontWeight:700},"Aa")),w.a.createElement(o,{mt:1,mb:6},w.a.createElement(h,{fontSize:4},a)))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"Next, we might want to know what a color will look like if used as a border."),w.a.createElement(u,{border:"1px solid",borderColor:a,px:2,py:3,borderRadius:"5px"},w.a.createElement(e,{width:160,bg:a,mr:2,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{className:Object(g.css)("line-height:1;"),color:a,m:0,fontSize:9,fontWeight:700},"Aa")),w.a.createElement(o,{mt:1,mb:6},w.a.createElement(h,{fontSize:4},a)))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"Naturally, we need a name for this color so that we can discuss it with fellow humans."),w.a.createElement(u,{alignItems:"stretch",mb:5},w.a.createElement(o,{width:.75,mr:3},"If you've ever spent time with a group of people trying to name a color you know that it's a task to be avoided if possible. With this in mind, we find ourselves in luck because there are entire services that will name a color for us."),w.a.createElement(W.a,{color:a})),w.a.createElement(u,{border:"1px solid",borderColor:a,px:2,py:3,borderRadius:"5px"},w.a.createElement(e,{width:160,bg:a,mr:2,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{className:Object(g.css)("line-height:1;"),color:a,m:0,fontSize:9,fontWeight:700},"Aa")),w.a.createElement(o,{mt:2,mb:0,fontWeight:700,fontSize:4},T),w.a.createElement(o,{mt:0,mb:6},w.a.createElement(h,{fontSize:4},a)))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"Depending on the context, a hex code might not be what you want to use."),w.a.createElement(o,{fontSize:5},"If we leave it up to humans, they might use a color picker on an image (or maybe a screenshot of an image!) which opens us up to potential subtle shifts in value, leading to unintended visual inconsistencies. Luckily we have javascript, so we can compute equivalent values from a central source of truth. This allows anyone to consume the proper color value, regardless of the medium and context they are designing for."),w.a.createElement(u,{display:"inline-flex",border:"1px solid",borderColor:a,p:3,borderRadius:2},w.a.createElement(e,{width:160,bg:a,mr:2,className:Object(g.css)("height:60px;")}),w.a.createElement(o,{className:Object(g.css)("line-height:1;"),color:a,m:0,fontSize:9},"Aa")),w.a.createElement(o,{mt:2,mb:2,fontWeight:700,fontSize:4},T),w.a.createElement(h,{pb:1,display:"block",fontSize:3},a),w.a.createElement(h,{pb:1,display:"block",fontSize:3},L),w.a.createElement(h,{display:"block",fontSize:3},J))),w.a.createElement(r,{color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[5,7,8],mb:2,mt:1},"Accessibility is important."),w.a.createElement(o,{fontSize:[4,6],fontWeight:600},"We can automate checking if the color is acessible with both black and white and simulating how a color will be percieved by people that experience various types of color blindness."),w.a.createElement(u,{flexWrap:"wrap"},w.a.createElement(p,{width:[1,.25,1],mb:2,color:a}),w.a.createElement(u,{flexWrap:"wrap",px:1,width:[1,.75,1],mt:[2,0]},w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(o,{fontSize:1,my:0,fontWeight:700}),w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#achromatopsia);")},w.a.createElement(k.a,{children:"Achromatopsia",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#protanopia);")},w.a.createElement(k.a,{children:"Protanopia",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#protanomaly);")},w.a.createElement(k.a,{children:"Protanomaly",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#deuteranopia);")},w.a.createElement(k.a,{children:"Deuteranopia",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#deuteranomaly);")},w.a.createElement(k.a,{children:"Deuteranomaly",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#tritanopia);")},w.a.createElement(k.a,{children:"Tritanopia",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#tritanomaly);")},w.a.createElement(k.a,{children:"Tritanomaly",color:a}))),w.a.createElement(e,{width:[.5,.25],px:1,pb:1},w.a.createElement(e,{className:Object(g.css)("filter:url(/static/filters.svg#achromatomaly);")},w.a.createElement(k.a,{children:"Achromatomaly",color:a}))))),w.a.createElement(o,{mt:2,mb:0,fontWeight:700,fontSize:4},T),w.a.createElement(h,{lineHeight:1.5,pr:4,style:{whiteSpace:"nowrap"},fontSize:2},a),w.a.createElement(h,{lineHeight:1.5,pr:4,style:{whiteSpace:"nowrap"},fontSize:2},L),w.a.createElement(h,{lineHeight:1.5,pr:4,style:{whiteSpace:"nowrap"},fontSize:2},J),w.a.createElement(f,{mb:2,mt:4},"Contrast ratio"),w.a.createElement(o,{mt:0,mb:0,display:"inline-block",mr:3},w.a.createElement(h,{fontSize:3,px:2,py:1,mr:1,bg:a,color:"white"},M.toFixed(2)),w.a.createElement(d,{mt:0,mb:3,fontSize:3},Y)),w.a.createElement(o,{my:0,display:"inline-block"},w.a.createElement(h,{fontSize:3,mr:2,py:1,px:2,bg:a,color:"black"},G.toFixed(2)),w.a.createElement(d,{my:0,fontSize:3},X)))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"So far, we have are visualizing 16 data points from 1 piece of input."))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8",mx:-3},w.a.createElement(e,{width:.5,px:3},w.a.createElement(c,{fontSize:[5,6,7],mb:4},"Adding white to a color creates a tint"),w.a.createElement(e,null,Q.map(function(t){return w.a.createElement(e,{px:3,py:3,bg:t},t)})),w.a.createElement(u,{mt:3,display:"none"},Q.map(function(t){return w.a.createElement(e,{mr:2,width:"30px",className:Object(g.css)("height:30px;"),borderRadius:"50%",bg:t})})),w.a.createElement(u,{mt:3,display:"none"},Q.map(function(t){return w.a.createElement(e,{mr:2,width:"30px",className:Object(g.css)("height:10px;"),borderRadius:"20px",bg:t})}))),w.a.createElement(e,{width:.5,px:3},w.a.createElement(c,{fontSize:[5,6,7],mb:4},"Adding black to a color creates a shade"),w.a.createElement(e,null,U.map(function(t){return w.a.createElement(e,{px:3,py:3,bg:t},t)})))),w.a.createElement(r,{height:"80vh",color:"gray.0",px:5,py:6,display:"flex",flexWrap:"wrap",alignItems:"center",borderBottom:"1px solid",borderColor:"gray.8"},w.a.createElement(e,null,w.a.createElement(c,{fontSize:[6,7,8],mb:2,mt:1},"Resources"),w.a.createElement(o,{fontSize:5},"Excellent interactive sites and articles if you want to spend more time exploring the vast world of Color Theory."),w.a.createElement(o,{fontWeight:700,mb:2},"Read"),w.a.createElement(o,null,w.a.createElement(b,{href:"https://www.amazon.com/Interaction-Color-Anniversary-Josef-Albers/dp/0300179359/ref=sr_1_1?ie=UTF8&qid=1512473341&sr=8-1&keywords=interaction+of+color"},"Interaction of Color (Book)")),w.a.createElement(o,null,w.a.createElement(b,{href:"https://en.wikipedia.org/wiki/X11_color_names"},"History of x11 color names")),w.a.createElement(o,null),w.a.createElement(b,{href:"http://hextodecimal.com/index.php?hex=f1"},"Hex to Decimal"),w.a.createElement(o,null,w.a.createElement(b,{href:"http://printingcode.runemadsen.com/lecture-color/"},"Computational Color by Rune Madsen")),w.a.createElement(o,{fontWeight:700},"Interact"),w.a.createElement(o,null,w.a.createElement(b,{href:"http://color.method.ac/"},"Color by Method of Action")),w.a.createElement(o,null),w.a.createElement(b,{href:"http://yupnet.org/interactionofcolor/"},"Interaction of Color (iPad App)"),w.a.createElement(o,{fontWeight:700},"Watch"),w.a.createElement(o,null,w.a.createElement(b,{href:"https://www.youtube.com/watch?v=HmStJQzclHc"},"Alex Sexton: Peachpuffs and Lemonchiffons")))))}}.call(this,a(19).default,a(479).default,a(480).default,a(481).default,a(29).default,a(482).default,a(483).default,a(484).default,a(91).default,a(23).default,a(67).default,a(485).default,a(111).default,a(27).default,a(262).default)},479:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("section",{target:"e16i1eju0"})(l.x,l.B,l.r,l.o,l.h,l.i,l.l,l.b,l.p,l.m,l.g,l.e,l.c,l.d,{boxSizing:"border-box"});n.defaultProps={width:1},t.default=n},480:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("header",{target:"e1egyrvu0"})(l.x,l.B,l.h,l.i,l.b,l.p,l.m,l.z,l.g,l.e,l.c,{boxSizing:"border-box"});n.defaultProps={},t.default=n},481:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("h2",{target:"ej1koh00"})(l.x,l.B,l.h,l.b,l.p,l.m,l.n,l.q,l.g,l.e,l.c,{boxSizing:"border-box"});n.defaultProps={},t.default=n},482:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("h3",{target:"evkv0uq0"})(l.x,l.B,l.h,l.b,l.p,l.m,l.n,l.q,l.g,l.e,l.c,{boxSizing:"border-box"});n.defaultProps={},t.default=n},483:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("ul",{target:"e1pzldl80"})(l.x,l.B,l.r,l.h,l.m,l.g,l.e,l.c,l.d,{boxSizing:"border-box"});n.defaultProps={ml:0,pt:0},t.default=n},484:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("li",{target:"e7q6b5a0"})(l.x,l.B,l.m,l.g,l.e,l.c,l.d,{boxSizing:"border-box"});n.defaultProps={pl:0},t.default=n},485:function(e,t,a){"use strict";a.r(t),function(e,r,l){var n=a(5),o=a(0),c=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}t.default=function(t){var a,o,m,u=t.color,h=s(t,["color"]);return c.a.createElement(e,i({display:"inline-flex",border:"1px solid",borderColor:u,p:3,borderRadius:"5px"},h),c.a.createElement(r,(m=64,(o="width")in(a={width:1,bg:u,mr:2,borderRadius:1,height:64})?Object.defineProperty(a,o,{value:m,enumerable:!0,configurable:!0,writable:!0}):a[o]=m,a)),c.a.createElement(l,{className:Object(n.css)("line-height:1;"),color:u,m:0,fontSize:8},"Aa"))}}.call(this,a(23).default,a(19).default,a(29).default)},493:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("td",{target:"ez5u6q00"})(l.x,l.B,l.r,l.m,l.n,l.z,l.g,l.e,l.c,{});n.defaultProps={},t.default=n},494:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("sup",{target:"e9mjz9m0"})(l.x,l.m,l.n,l.q,l.g,l.d,{});n.defaultProps={},t.default=n},495:function(e,t,a){"use strict";a.r(t);var r=a(6),l=a(2),n=Object(r.a)("br",{target:"etvew30"})(l.x,l.h,{});n.defaultProps={},t.default=n},58:function(e,t,a){"use strict";(function(e,r,l){var n=a(5),o=a(0),c=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=function(t){var a,o=t.color,m=s(t,["color"]);return c.a.createElement(e,(i(a={display:"flex",border:"1px solid",borderColor:o,p:2},"p",1),i(a,"borderRadius","5px"),a),c.a.createElement(r,{width:32,bg:o,borderRadius:"3px",mr:2,className:Object(n.css)("height:16px;")}),c.a.createElement(l,{className:Object(n.css)("line-height:1;"),color:o,m:0,fontSize:1},m.children))};m.defaultProps={children:"Aa"},t.a=m}).call(this,a(23).default,a(19).default,a(29).default)}},[[477,0,1]]]);