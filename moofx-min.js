/*
---
provides: moofx
description: a css3-enabled javascript animation library on caffeine
author: Valerio Proietti (@kamicane) http://mad4milk.net http://mootools.net
website: http://moofx.it
license: MIT
...
*/

!function(){var p,ha,x,X,H,E,Q,y,n,Y,I,R,z,Z,ia,ja,S,ka,la,J,q,ma,$,aa,B,K,ba,T,na,oa,L,r,pa,M,A,l,F,ca,qa,U,da,k,w,m,h,ea,ra,N,V,W,G,C,D,O,o,u,fa,j,v,P,sa,ga,ta=Object.prototype.hasOwnProperty,s=function(a,b){function c(){this.constructor=a}for(var d in b)ta.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};fa=function(a){this.valueOf=function(){return a};return this};k=function(a){return a?new fa(null!=a.length?a:null!=a.nodeType?[a]:[]):null};k.prototype=
fa.prototype;"undefined"!==typeof module?module.exports=k:this.moofx=k;B=[];V=!1;qa=function(a){var b;null==a&&(a=+new Date);V=!1;for(b=B.length;b;)B.splice(--b,1)[0](a);return null};ra=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)};k.requestFrame=function(a){B.push(a);V||(V=!0,ra(qa));return this};k.cancelFrame=function(a){var b,c,d;for(c=0,d=
B.length;c<d;c++)b=B[c],b===a&&B.splice(c,1);return this};oa={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080"};la=function(a,b,c,d){null==d&&(d=1);return 255<a||0>a||255<b||0>b||255<c||0>c||255<d||0>d?null:[Math.round(a),Math.round(b),Math.round(c),parseFloat(d)]};ia=function(a){var b,
c,d;3===a.length&&(a+="f");4===a.length&&(b=a.charAt(0),c=a.charAt(1),d=a.charAt(2),a=a.charAt(3),a=b+b+c+c+d+d+a+a);6===a.length&&(a+="ff");d=[];for(b=0,c=a.length;b<=c;b+=2)d.push(parseInt(a.substr(b,2),16)/(6===b?255:1));return d};S=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};ja=function(a,b,c,d){var e,f;null==d&&(d=1);a/=360;b/=100;c/=100;if(1<a||0>a||1<b||0>b||1<c||0>c||1<d||0>d)return null;0===b?f=a=c:(b=0.5>c?c*(1+b):c+b-c*b,e=2*c-b,f=
S(e,b,a+1/3),c=S(e,b,a),a=S(e,b,a-1/3));return[255*f,255*c,255*a,parseFloat(d)]};k.color=function(a,b){var c,a=oa[a=a.replace(/\s+/g,"")]||a;if(a.match(/^#[a-f0-9]{3,8}/))a=ia(a.replace("#",""));else if(c=a.match(/([\d.])+/g))if(a.match(/^rgb/))a=c;else if(a.match(/^hsl/))a=ja.apply(null,c);else return null;if(!a||!(a=la.apply(null,a)))return null;if(b)return a;1===a[3]&&a.splice(3,1);return"rgb"+(3<a.length?"a":"")+"("+a+")"};ba=k.cancelFrame;N=k.requestFrame;na=k.color;C=String;m=parseFloat;K=function(a){return a.replace(/-\D/g,
function(b){return b.charAt(1).toUpperCase()})};ca=function(a){return a.replace(/[A-Z]/g,function(b){return"-"+b.charAt(0).toLowerCase()})};T=function(a){return C(a).replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")};L="undefined"!==typeof getComputedStyle?function(a){var b;b=getComputedStyle(a);return function(c){return b?b.getPropertyValue(ca(c)):""}}:function(a){var b;b=a.currentStyle;return function(c){return b?b[K(c)]:""}};h={};l={};G={};F=document.documentElement;aa={};A=function(a){return l[a]||
(l[a]=function(){var b;b=h[a]||Y;return function(){return(new b(L(this)(a))).toString(this)}}())};W=function(a){return G[a]||(G[a]=function(){var b;b=h[a]||Y;return function(c){return this.style[a]=(new b(c)).toString()}}())};O=document.createElement("div");ea=function(a,b){var c,d;c=a.parentNode;d=1;c&&(O.style.cssText="border:none;margin:none;padding:none;visibility:hidden;position:absolute;height:0;"+("width:10"+b+";"),c.appendChild(O),d=O.offsetWidth/10,c.removeChild(O));return d};p=function(){function a(b){this.value=
C(b)}a.prototype.extract=function(){return[this]};a.prototype.toString=function(){return C(this.value)};return a}();n=function(){function a(b){this.parsers=b}a.prototype.extract=function(){return this.parsers};a.prototype.toString=function(b){var c,a,e,f,g;f=this.parsers;g=[];for(a=0,e=f.length;a<e;a++)c=f[a],g.push(c.toString(b));return g.join(" ")};return a}();y=function(a){function b(c){this.value=m(c)}s(b,a);return b}(p);Y=function(a){function b(){b.__super__.constructor.apply(this,arguments)}
s(b,a);return b}(p);y=function(a){function b(c){this.value=m(c)}s(b,a);return b}(p);E=function(a){function b(c){"auto"===c?this.value="auto":(c=T(C(c)).match(/^([-\d.]+)(%|px|em|pt)?$/))?(this.value=m(c[1]),this.unit=0===this.value||!c[2]?"px":c[2]):(this.value=0,this.unit="px")}s(b,a);b.prototype.toString=function(c){return null==this.value?null:"auto"===this.value?this.value:c&&1===c.nodeType&&"px"!==this.unit?ea(c,this.unit)*this.value+"px":this.value+this.unit};return b}(p);H=function(a){function b(c){null==
c&&(c="#000");"transparent"===c&&(c="#00000000");this.value=na(c,!0)||[0,0,0,1]}s(b,a);b.prototype.toString=function(c){return!c&&1===this.value[3]?"rgb("+this.value[0]+", "+this.value[1]+", "+this.value[2]+")":"rgba("+this.value+")"};return b}(p);da=function(a){var b;b=a.length;1===b?a.push(a[0],a[0],a[0]):2===b?a.push(a[0],a[1]):3===b&&a.push(a[1]);return a};Q=function(a){function b(c){var a=da,b,f,g,i;g=c.split(" ");i=[];for(b=0,f=g.length;b<f;b++)c=g[b],i.push(new E(c));this.parsers=a(i)}s(b,
a);return b}(n);X=function(a){function b(c){this.value=c.match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit/)?c:"none"}s(b,a);return b}(p);u=["Top","Right","Bottom","Left"];o=["TopLeft","TopRight","BottomRight","BottomLeft"];h.color=h.backgroundColor=H;h.width=h.height=h.fontSize=h.backgroundSize=E;x=function(a){function b(c){c=T(c).match(/((?:[\d.]+)(?:px|em|pt)?)\s(\w+)\s(rgb(?:a)?\([\d,\s]+\)|hsl(?:a)?\([\d,\s]+\)|#[a-f0-9]+|\w+)/)||[null,"0px"];this.parsers=[new E(c[1]),
new X(c[2]),new H(c[3])]}s(b,a);return b}(n);for(j=0,P=u.length;j<P;j++){r=u[j];q="border"+r;ga=["margin"+r,"padding"+r,q+"Width",r.toLowerCase()];for(v=0,sa=ga.length;v<sa;v++)w=ga[v],h[w]=E;h[q+"Color"]=H;h[q+"Style"]=X;h[q]=x;l[q]=function(){return[A(q+"Width").call(this),A(q+"Style").call(this),A(q+"Color").call(this)].join(" ")}}for(j=0,v=o.length;j<v;j++)r=o[j],h["border"+r+"Radius"]=E;h.zIndex=function(a){function b(c){this.value="auto"===c?c:m(c)}s(b,a);return b}(p);P=["margin","padding"];
o=function(a){h[a]=Q;return l[a]=function(){var b,c,d,e;e=[];for(d=0,c=u.length;d<c;d++)b=u[d],e.push(A(a+b).call(this));return e.join(" ")}};for(j=0,v=P.length;j<v;j++)w=P[j],o(w);h.borderRadius=Q;l.borderRadius=function(){var a,b,c,d;d=[];for(c=0,b=u.length;c<b;c++)a=u[c],d.push(A("border"+a+"Radius").call(this));return d.join(" ")};h.borderWidth=Q;h.borderColor=function(a){function b(c){var b,c=c.match(/rgb(a)?\([\d,\s]+\)|hsl(a)?\([\d,\s]+\)|#[a-f0-9]+|\w+/g)||["#000"],a=da,f,g,i;i=[];for(g=0,
f=c.length;g<f;g++)b=c[g],i.push(new H(b));this.parsers=a(i)}s(b,a);return b}(n);v=["Width","Style","Color"];n=function(a){return l["border"+a]=function(){var b,c,d,e;e=[];for(d=0,c=u.length;d<c;d++)b=u[d],e.push(A("border"+b+a).call(this));return e.join(" ")}};for(j=0,o=v.length;j<o;j++)D=v[j],n(D);h.border=x;l.border=function(){var a,b,c,d;for(d=0,c=u.length;d<c;d++){a=u[d];a=A(q="border"+a).call(this);if(b&&a!==b)return null;b=a}return a};M=null!=F.style.MsFilter?"MsFilter":null!=F.style.filter?
"filter":null;h.opacity=y;null==F.style.opacity&&M&&(U=/alpha\(opacity=([\d.]+)\)/i,G.opacity=function(a){var b,a=(a=1===m(a))?"":"alpha(opacity="+100*a+")";b=L(this)(M);return this.style[M]=U.test(b)?b.replace(U,a):b+a},l.opacity=function(){var a;return C(!(a=L(this)(M).match(U))?1:a[1]/100)});o=["MozTransform","WebkitTransform","OTransform","msTransform","transform"];for(n=0,y=o.length;n<y;n++)if(x=o[n],null!=F.style[x]){I=x;break}h.transform=R=function(a){function b(b){var a,e,f,g,i;a={translate:"0px,0px",
rotate:"0deg",scale:"1,1",skew:"0deg,0deg"};if(b=T(b).match(/\w+\s?\([-,.\w\s]+\)/g)){f=function(b){var c,e,f,g;if(b=b.replace(/\s+/g,"").match(/^(translate|scale|rotate|skew)\((.*)\)$/))switch(w=b[1],c=b[2].split(","),w){case "translate":if(2>c.length)break;g=[];for(f=0,e=c.length;f<e;f++)b=c[f],g.push(a[w]=m(b)+"px");return g;case "rotate":return a[w]=m(c[0])+"deg";case "scale":1===c.length&&(c=[c[0],c[0]]);g=[];for(f=0,e=c.length;f<e;f++)b=c[f],g.push(a[w]=m(b));return g;case "skew":if(1===c.length)break;
g=[];for(f=0,e=c.length;f<e;f++)b=c[f],g.push(a[w]=m(b)+"deg");return g}};for(i=0,g=b.length;i<g;i++)e=b[i],f(e)}this.transforms=a}s(b,a);b.prototype.toString=function(){var b,a,e,f,g;f=["translate","rotate","scale","skew"];g=[];for(e=0,a=f.length;e<a;e++)b=f[e],g.push(""+b+"("+this.transforms[b]+")");return g.join(" ")};return b}(p);I?(aa.transform=I,G.transform=function(a){return this.style[I]=(new R(a)).toString()},l.transform=function(){return(new R(this.style[I])).toString()}):(G.transform=function(){},
l.transform=function(){return(new R).toString()});$={};ma=function(a,b,c,d,e,f){var g,i,h,j,t,n,k,m;k=[0];m=[0];n=0;for(j=1;j<e-1;)t=1/e*j,g=3*Math.pow(1-t,2)*t,i=3*Math.pow(t,2)*(1-t),h=Math.pow(t,3),t=a*g+c*i+h,g=b*g+d*i+h,t-n>f&&(n=t,k.push(t),m.push(g)),j++;k.push(1);m.push(1);return function(b){var a,c,d;a=0;for(d=k.length-1;a<=d&&!(c=Math.floor((a+d)/2),k[c]===b);)k[c]>b?d=c-1:a=c+1;return m[c]}};pa={"default":"cubic-bezier(0.25, 0.1, 0.25, 1.0)",linear:"cubic-bezier(0, 0, 1, 1)","ease-in":"cubic-bezier(0.42, 0, 1.0, 1.0)",
"ease-out":"cubic-bezier(0, 0, 0.58, 1.0)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1.0)"};p=function(){function a(b,a){this.node=b;this.property=a;this.setter=W(a);this.getter=A(a)}a.prototype.start=function(b,a){var d;this.stop();d=!0;b===a&&(d=!1);0===this.duration&&(this.setter.call(this.node,a),d=!1);d||N(this.callback);return d};a.prototype.setOptions=function(b){var a;null==b&&(b={});if(!(this.duration=this.parseDuration(null!=(a=b.duration)?a:"500ms")))throw Error(""+b.duration+" is not a valid duration");
if(!(this.equation=this.parseEquation(b.equation||"default")))throw Error(""+b.equation+" is not a valid equation");this.callback=b.callback||function(){};return this};a.prototype.parseDuration=function(a){var c;if(c=C(a).match(/([\d.]+)(s|ms)/)){a=m(c[1]);c=c[2];if("s"===c)return 1E3*a;if("ms"===c)return a}else return null};a.prototype.parseEquation=function(a){var c,d,e,f,a=pa[a]||a;if(a=a.replace(/\s+/g,"").match(/^cubic-bezier\(([\d.]+),([\d.]+),([\d.]+),([\d.]+)\)$/)){e=a.slice(1);f=[];for(d=
0,c=e.length;d<c;d++)a=e[d],f.push(m(a));return f}return null};return a}();ka=function(a){function b(a,d){var e=this;b.__super__.constructor.call(this,a,d);this.bstep=function(a){return e.step(a)}}s(b,a);b.prototype.start=function(a,d){if(b.__super__.start.call(this,a,d)){this.time=0;a=this.numbers(a);d=this.numbers(d);if(a[0].length!==d[0].length)throw Error("property length mismatch");this.from=a[0];this.to=d[0];this.template=d[1];N(this.bstep)}return this};b.prototype.stop=function(){ba(this.bstep);
return this};b.prototype.step=function(a){var b,e,f,g,i,h;this.time||(this.time=a);f=(a-this.time)/this.duration;1<f&&(f=1);g=this.equation(f);e=this.template;h=this.from;for(b=0,i=h.length;b<i;b++)a=h[b],D=this.to[b],e=e.replace("@",D!==a?this.compute(a,D,g):D);this.setter.call(this.node,e);1!==f?N(this.bstep):this.callback(D);return this};b.prototype.parseEquation=function(a){var d,e,a=b.__super__.parseEquation.call(this,a);e=a.toString();d=""+e+":"+this.duration+"ms";return e===[0,0,1,1].toString()?
function(a){return a}:$[d]||($[d]=ma(a[0],a[1],a[2],a[3],2*this.duration,1E3/60/this.duration/4))};b.prototype.compute=function(a,b,e){return(b-a)*e+a};b.prototype.numbers=function(a){var b;b=[];a=a.replace(/[-\d.]+/g,function(a){b.push(m(a));return"@"});return[b,a]};return b}(p);o=["WebkitTransition","MozTransition","transition"];for(n=0,y=o.length;n<y;n++)if(x=o[n],null!=F.style[x]){z=x;break}Z="MozTransition"===z?"transitionend":"webkitTransitionEnd";ha=function(a){function b(a,d){var e=this;b.__super__.constructor.call(this,
a,d);this.hproperty=ca(aa[this.property]||this.property);this.bdefer=function(a){return e.defer(a)};this.bcomplete=function(a){return e.complete(a)}}s(b,a);b.prototype.start=function(a,d){b.__super__.start.call(this,a,d)&&(this.to=d,N(this.bdefer));return this};b.prototype.stop=function(a){this.running?(this.running=!1,a&&this.setter.call(this.node,this.getter.call(this.node)),this.clean()):ba(this.bdefer);return this};b.prototype.defer=function(){this.running=!0;this.modCSS(!0);this.node.addEventListener(Z,
this.bcomplete,!1);this.setter.call(this.node,this.to);return null};b.prototype.clean=function(){this.modCSS();this.node.removeEventListener(Z,this.bcomplete);return null};b.prototype.complete=function(a){a&&a.propertyName===this.hproperty&&(this.running=!1,this.clean(),this.callback());return null};b.prototype.removeProp=function(a,b,e,f){var g,i,h,j;for(g=0,j=b.length;g<j;g++)if(h=b[g],h===a){i=g;break}null!=i&&(b.splice(i,1),e.splice(i,1),f.splice(i,1));return null};b.prototype.modCSS=function(a){var b,
e;b=L(this.node);e=b(z+"Property").replace(/\s+/g,"").split(",");r=b(z+"Duration").replace(/\s+/g,"").split(",");b=b(z+"TimingFunction").replace(/\s+/g,"").match(/cubic-bezier\(([\d.,]+)\)/g);this.removeProp("all",e,r,b);this.removeProp(this.hproperty,e,r,b);a&&(e.push(this.hproperty),r.push(this.duration),b.push(this.equation));this.node.style[z+"Property"]=e;this.node.style[z+"Duration"]=r;this.node.style[z+"TimingFunction"]=b;return null};b.prototype.parseDuration=function(a){return""+b.__super__.parseDuration.call(this,
a)+"ms"};b.prototype.parseEquation=function(a){return"cubic-bezier("+b.__super__.parseEquation.call(this,a)+")"};return b}(p);J=new (function(){function a(){this.uid=0;this.animations={}}a.prototype.retrieve=function(a,c){var d,e,f;d=null!=(f=a.\u00b5id)?f:a.\u00b5id=(this.uid++).toString(36);d=(e=this.animations)[d]||(e[d]={});return d[c]||(d[c]=z?new ha(a,c):new ka(a,c))};a.prototype.starts=function(a,c,d){var e,f,g,i,j,k,t,n,m,o,s,p,r,l,u,v,q,w,x,z,y;null==d&&(d={});e=d.callback||function(){};
m=f=0;d.callback=function(){if(++f===m)return e()};for(l in c){w=c[l];l=K(l);r=h[l];if(!r)throw Error("no parser for "+l);u=W(l);k=A(l);for(y=0,x=a.length;y<x;y++){o=a[y];m++;n=this.retrieve(o,l);s=new r(k.call(o));p=new r(w);j=s.extract();v=p.extract();for(t=0,z=j.length;t<z;t++){i=j[t];q=v[t];if("auto"===q.value||"auto"===i.value)throw Error("cannot animate "+l+" from or to `auto`");q.unit&&i.unit&&(g=!0,"px"!==q.unit&&(i.value/=ea(o,q.unit),i.unit=q.unit))}i=s.toString(!0);p=p.toString(!0);g&&
u.call(o,i);n.setOptions(d).start(i,p)}}return this};a.prototype.start=function(a,c,d,e){var f;f={};f[c]=d;return this.starts(a,f,e)};a.prototype.sets=function(a,c){var d,e,f,g,i,h,j,k;for(e in c){g=c[e];f=W(e=K(e));for(h=0,i=a.length;h<i;h++){d=a[h];if(null!=(j=this.animations[d.\u00b5id]))null!=(k=j[e])&&k.stop(!0);f.call(d,g)}}return this};a.prototype.set=function(a,c,d){var e;e={};e[c]=d;return this.sets(a,e)};return a}());k.prototype.animate=function(a,b,c){"string"!==typeof a?J.starts(this.valueOf(),
a,b):J.start(this.valueOf(),a,b,c);return this};k.prototype.style=function(a,b){"string"!==typeof a?J.sets(this.valueOf(),a):J.set(this.valueOf(),a,b);return this};k.prototype.compute=function(a){return A(K(a)).call(this.valueOf()[0])}}();
