var Su=Object.defineProperty;var bu=(o,e,t)=>e in o?Su(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var on=(o,e,t)=>(bu(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="149",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wu=0,ho=1,Tu=2,Xl=1,Eu=2,dr=3,Vn=0,Tt=1,Fn=2,Bn=0,Gi=1,_a=2,fo=3,po=4,Au=5,zi=100,Cu=101,Pu=102,mo=103,go=104,Lu=200,Du=201,Ru=202,Iu=203,ql=204,Yl=205,Ou=206,Fu=207,Nu=208,zu=209,Uu=210,Bu=0,ku=1,Gu=2,xa=3,Vu=4,Hu=5,Wu=6,Xu=7,jl=0,qu=1,Yu=2,An=0,ju=1,Zu=2,$u=3,Ku=4,Ju=5,Zl=300,qi=301,Yi=302,va=303,ya=304,_s=306,Ma=1e3,nn=1001,Sa=1002,Mt=1003,_o=1004,Cs=1005,Yt=1006,Qu=1007,Mr=1008,di=1009,eh=1010,th=1011,$l=1012,nh=1013,si=1014,ai=1015,Sr=1016,ih=1017,rh=1018,Vi=1020,sh=1021,rn=1023,ah=1024,oh=1025,li=1026,ji=1027,lh=1028,ch=1029,uh=1030,hh=1031,fh=1033,Ps=33776,Ls=33777,Ds=33778,Rs=33779,xo=35840,vo=35841,yo=35842,Mo=35843,dh=36196,So=37492,bo=37496,wo=37808,To=37809,Eo=37810,Ao=37811,Co=37812,Po=37813,Lo=37814,Do=37815,Ro=37816,Io=37817,Oo=37818,Fo=37819,No=37820,zo=37821,Is=36492,ph=36283,Uo=36284,Bo=36285,ko=36286,pi=3e3,ke=3001,mh=3200,gh=3201,_h=0,xh=1,ln="srgb",br="srgb-linear",Os=7680,vh=519,Go=35044,Vo="300 es",ba=1035;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,Ho=180/Math.PI;function Dr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[o&255]+dt[o>>8&255]+dt[o>>16&255]+dt[o>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function bt(o,e,t){return Math.max(e,Math.min(t,o))}function yh(o,e){return(o%e+e)%e}function Ns(o,e,t){return(1-t)*o+t*e}function Wo(o){return(o&o-1)===0&&o!==0}function wa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Nr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function It(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],M=i[1],y=i[4],S=i[7],x=i[2],A=i[5],P=i[8];return r[0]=a*f+s*M+l*x,r[3]=a*p+s*y+l*A,r[6]=a*_+s*S+l*P,r[1]=c*f+u*M+d*x,r[4]=c*p+u*y+d*A,r[7]=c*_+u*S+d*P,r[2]=h*f+m*M+g*x,r[5]=h*p+m*y+g*A,r[8]=h*_+m*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*a-s*c,h=s*l-u*r,m=c*r-a*l,g=t*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(i*c-u*n)*f,e[2]=(s*n-i*a)*f,e[3]=h*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-s*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(a*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Ut;function Kl(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ci(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Us={[ln]:{[br]:ci},[br]:{[ln]:rs}},vt={legacyMode:!0,get workingColorSpace(){return br},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Us[e]&&Us[e][t]!==void 0){const n=Us[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Qt={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Bs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ur(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=yh(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bs(a,r,e+1/3),this.g=Bs(a,r,e),this.b=Bs(a,r,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ln){const n=Jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return vt.fromWorkingColorSpace(Ur(this,Qe),e),bt(Qe.r*255,0,255)<<16^bt(Qe.g*255,0,255)<<8^bt(Qe.b*255,0,255)<<0}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Ur(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const d=a-s;switch(c=u<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Ur(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=ln){return vt.fromWorkingColorSpace(Ur(this,Qe),e),e!==ln?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(zr);const n=Ns(Qt.h,zr.h,t),i=Ns(Qt.s,zr.s,t),r=Ns(Qt.l,zr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=Jl;let Si;class Ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=wr("canvas")),Si.width=e.width,Si.height=e.height;const n=Si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ec{constructor(e=null){this.isSource=!0,this.uuid=Dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ks(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ql.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Et extends xi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=nn,i=nn,r=Yt,a=Mr,s=rn,l=di,c=Et.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Dr(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Zl;Et.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,x=(_+1)/2,A=(u+h)/4,P=(d+f)/4,v=(g+p)/4;return y>S&&y>x?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=P/n):S>x?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=P/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-f)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends xi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],f=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||l!==h||c!==m||u!==g){let p=1-s;const _=l*h+c*m+u*g+d*f,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),A=Math.atan2(x,_*M);p=Math.sin(p*A)/x,s=Math.sin(s*A)/x}const S=s*M;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,d=d*p+f*S,p===1-s){const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-s*m,e[t+2]=c*g+u*m+s*h-l*d,e[t+3]=u*g-s*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),d=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>d){const m=2*Math.sqrt(1+n-s-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>d){const m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,d=l*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=c*l+h*-r+u*-s-d*-a,this.y=u*l+h*-a+d*-r-c*-s,this.z=d*l+h*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new z,Xo=new gi;class Rr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>r&&(r=u),d>a&&(a=d),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)$n.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox),Vs.applyMatrix4(e.matrixWorld),this.union(Vs);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Br.subVectors(this.max,sr),bi.subVectors(e.a,sr),wi.subVectors(e.b,sr),Ti.subVectors(e.c,sr),Dn.subVectors(wi,bi),Rn.subVectors(Ti,wi),Kn.subVectors(bi,Ti);let t=[0,-Dn.z,Dn.y,0,-Rn.z,Rn.y,0,-Kn.z,Kn.y,Dn.z,0,-Dn.x,Rn.z,0,-Rn.x,Kn.z,0,-Kn.x,-Dn.y,Dn.x,0,-Rn.y,Rn.x,0,-Kn.y,Kn.x,0];return!Hs(t,bi,wi,Ti,Br)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,bi,wi,Ti,Br))?!1:(kr.crossVectors(Dn,Rn),t=[kr.x,kr.y,kr.z],Hs(t,bi,wi,Ti,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $n.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($n).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new z,new z,new z,new z,new z,new z,new z,new z],$n=new z,Vs=new Rr,bi=new z,wi=new z,Ti=new z,Dn=new z,Rn=new z,Kn=new z,sr=new z,Br=new z,kr=new z,Jn=new z;function Hs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Jn.fromArray(o,r);const s=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const bh=new Rr,ar=new z,Ws=new z;class xs{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ws)),this.expandByPoint(ar.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new z,Xs=new z,Gr=new z,In=new z,qs=new z,Vr=new z,Ys=new z;class nc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.direction).multiplyScalar(t).add(this.origin),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xs.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Xs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),s=In.dot(this.direction),l=-In.dot(Gr),c=In.lengthSq(),u=Math.abs(1-a*a);let d,h,m,g;if(u>0)if(d=a*l-s,h=a*s-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,m=d*(d+a*h+2*s)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+s)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+s)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+s)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Gr).multiplyScalar(h).add(Xs),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,r){qs.subVectors(t,e),Vr.subVectors(n,e),Ys.crossVectors(qs,Vr);let a=this.direction.dot(Ys),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=s*this.direction.dot(Vr.crossVectors(In,Vr));if(l<0)return null;const c=s*this.direction.dot(qs.cross(In));if(c<0||l+c>a)return null;const u=-s*In.dot(Ys);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,d,h,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*d,g=s*u,f=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-f*c,t[9]=-s*l,t[2]=f-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h+f*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=f+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,f=c*d;t[0]=h-f*s,t[4]=-a*d,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=f-h*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,g=s*u,f=s*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+f,t[1]=l*d,t[5]=f*c+h,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=s*l,f=s*c;t[0]=l*u,t[4]=f-h*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-f*d}else if(e.order==="XZY"){const h=a*l,m=a*c,g=s*l,f=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+f,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=s*u,t[10]=f*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Th)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),On.crossVectors(n,Ot),On.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),On.crossVectors(n,Ot)),On.normalize(),Hr.crossVectors(Ot,On),i[0]=On.x,i[4]=Hr.x,i[8]=Ot.x,i[1]=On.y,i[5]=Hr.y,i[9]=Ot.y,i[2]=On.z,i[6]=Hr.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],M=n[3],y=n[7],S=n[11],x=n[15],A=i[0],P=i[4],v=i[8],w=i[12],L=i[1],G=i[5],Y=i[9],I=i[13],R=i[2],B=i[6],j=i[10],Z=i[14],V=i[3],J=i[7],K=i[11],ue=i[15];return r[0]=a*A+s*L+l*R+c*V,r[4]=a*P+s*G+l*B+c*J,r[8]=a*v+s*Y+l*j+c*K,r[12]=a*w+s*I+l*Z+c*ue,r[1]=u*A+d*L+h*R+m*V,r[5]=u*P+d*G+h*B+m*J,r[9]=u*v+d*Y+h*j+m*K,r[13]=u*w+d*I+h*Z+m*ue,r[2]=g*A+f*L+p*R+_*V,r[6]=g*P+f*G+p*B+_*J,r[10]=g*v+f*Y+p*j+_*K,r[14]=g*w+f*I+p*Z+_*ue,r[3]=M*A+y*L+S*R+x*V,r[7]=M*P+y*G+S*B+x*J,r[11]=M*v+y*Y+S*j+x*K,r[15]=M*w+y*I+S*Z+x*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+r*l*d-i*c*d-r*s*h+n*c*h+i*s*m-n*l*m)+f*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+t*c*d-t*s*m-r*a*d+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*d+t*s*h+i*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],M=d*p*c-f*h*c+f*l*m-s*p*m-d*l*_+s*h*_,y=g*h*c-u*p*c-g*l*m+a*p*m+u*l*_-a*h*_,S=u*f*c-g*d*c+g*s*m-a*f*m-u*s*_+a*d*_,x=g*d*l-u*f*l-g*s*h+a*f*h+u*s*p-a*d*p,A=t*M+n*y+i*S+r*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=M*P,e[1]=(f*h*r-d*p*r-f*i*m+n*p*m+d*i*_-n*h*_)*P,e[2]=(s*p*r-f*l*r+f*i*c-n*p*c-s*i*_+n*l*_)*P,e[3]=(d*l*r-s*h*r-d*i*c+n*h*c+s*i*m-n*l*m)*P,e[4]=y*P,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*P,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*P,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*m+t*l*m)*P,e[8]=S*P,e[9]=(g*d*r-u*f*r-g*n*m+t*f*m+u*n*_-t*d*_)*P,e[10]=(a*f*r-g*s*r+g*n*c-t*f*c-a*n*_+t*s*_)*P,e[11]=(u*s*r-a*d*r-u*n*c+t*d*c+a*n*m-t*s*m)*P,e[12]=x*P,e[13]=(u*f*i-g*d*i+g*n*h-t*f*h-u*n*p+t*d*p)*P,e[14]=(g*s*i-a*f*i-g*n*l+t*f*l+a*n*p-t*s*p)*P,e[15]=(a*d*i-u*s*i+u*n*l-t*d*l-a*n*h+t*s*h)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,d=s+s,h=r*c,m=r*u,g=r*d,f=a*u,p=a*d,_=s*d,M=l*c,y=l*u,S=l*d,x=n.x,A=n.y,P=n.z;return i[0]=(1-(f+_))*x,i[1]=(m+S)*x,i[2]=(g-y)*x,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(h+_))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+y)*P,i[9]=(p-M)*P,i[10]=(1-(h+f))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),s=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,u=1/a,d=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),d=(t+e)*l,h=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new z,en=new ot,wh=new z(0,0,0),Th=new z(1,1,1),On=new z,Hr=new z,Ot=new z,qo=new ot,Yo=new gi;class vs{constructor(e=0,t=0,n=0,i=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eh=0;const jo=new z,Ai=new gi,yn=new ot,Wr=new z,or=new z,Ah=new z,Ch=new gi,Zo=new z(1,0,0),$o=new z(0,1,0),Ko=new z(0,0,1),Ph={type:"added"},Jo={type:"removed"};class At extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new z,t=new vs,n=new gi,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ut}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Zo,e)}rotateY(e){return this.rotateOnAxis($o,e)}rotateZ(e){return this.rotateOnAxis(Ko,e)}translateOnAxis(e,t){return jo.copy(e).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zo,e)}translateY(e){return this.translateOnAxis($o,e)}translateZ(e){return this.translateOnAxis(Ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(or,Wr,this.up):yn.lookAt(Wr,or,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new z(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new z,Mn=new z,js=new z,Sn=new z,Ci=new z,Pi=new z,Qo=new z,Zs=new z,$s=new z,Ks=new z;class Tn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),Mn.subVectors(n,t),js.subVectors(e,t);const a=tn.dot(tn),s=tn.dot(Mn),l=tn.dot(js),c=Mn.dot(Mn),u=Mn.dot(js),d=a*c-s*s;if(d===0)return r.set(-2,-1,-1);const h=1/d,m=(c*l-s*u)*h,g=(a*u-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,Sn),l.set(0,0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(s,Sn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Tn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ci.subVectors(i,n),Pi.subVectors(r,n),Zs.subVectors(e,n);const l=Ci.dot(Zs),c=Pi.dot(Zs);if(l<=0&&c<=0)return t.copy(n);$s.subVectors(e,i);const u=Ci.dot($s),d=Pi.dot($s);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);Ks.subVectors(e,r);const m=Ci.dot(Ks),g=Pi.dot(Ks);if(g>=0&&m<=g)return t.copy(r);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Pi,s);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Qo.subVectors(r,i),s=(d-u)/(d-u+(m-g)),t.copy(i).addScaledVector(Qo,s);const _=1/(p+f+h);return a=f*_,s=h*_,t.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lh=0;class Ir extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Gi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rc extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new z,Xr=new Ee;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ac extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dh=0;const Wt=new ot,Js=new At,Li=new z,Ft=new Rr,lr=new Rr,at=new z;class mn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?ac:sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];lr.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(Ft.min,lr.min),Ft.expandByPoint(at),at.addVectors(Ft.max,lr.max),Ft.expandByPoint(at)):(Ft.expandByPoint(lr.min),Ft.expandByPoint(lr.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)at.fromBufferAttribute(s,c),l&&(Li.fromBufferAttribute(e,c),at.add(Li)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new z,u[L]=new z;const d=new z,h=new z,m=new z,g=new Ee,f=new Ee,p=new Ee,_=new z,M=new z;function y(L,G,Y){d.fromArray(i,L*3),h.fromArray(i,G*3),m.fromArray(i,Y*3),g.fromArray(a,L*2),f.fromArray(a,G*2),p.fromArray(a,Y*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(I),M.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),c[L].add(_),c[G].add(_),c[Y].add(_),u[L].add(M),u[G].add(M),u[Y].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,G=S.length;L<G;++L){const Y=S[L],I=Y.start,R=Y.count;for(let B=I,j=I+R;B<j;B+=3)y(n[B+0],n[B+1],n[B+2])}const x=new z,A=new z,P=new z,v=new z;function w(L){P.fromArray(r,L*3),v.copy(P);const G=c[L];x.copy(G),x.sub(P.multiplyScalar(P.dot(G))).normalize(),A.crossVectors(v,G);const I=A.dot(u[L])<0?-1:1;l[L*4]=x.x,l[L*4+1]=x.y,l[L*4+2]=x.z,l[L*4+3]=I}for(let L=0,G=S.length;L<G;++L){const Y=S[L],I=Y.start,R=Y.count;for(let B=I,j=I+R;B<j;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new z,r=new z,a=new z,s=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){s.isInterleavedBufferAttribute?m=l[f]*s.data.stride+s.offset:m=l[f]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new fn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new ot,Di=new nc,Qs=new xs,cr=new z,ur=new z,hr=new z,ea=new z,qr=new z,Yr=new Ee,jr=new Ee,Zr=new Ee,ta=new z,$r=new z;class hn extends At{constructor(e=new mn,t=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],d=r[l];u!==0&&(ea.fromBufferAttribute(d,e),a?qr.addScaledVector(ea,u):qr.addScaledVector(ea.sub(t),u))}t.add(qr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),e.ray.intersectsSphere(Qs)===!1)||(el.copy(r).invert(),Di.copy(e.ray).applyMatrix4(el),n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,h.start),M=Math.min(s.count,Math.min(f.start+f.count,h.start+h.count));for(let y=_,S=M;y<S;y+=3){const x=s.getX(y),A=s.getX(y+1),P=s.getX(y+2);a=Kr(this,p,e,Di,c,u,x,A,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const _=s.getX(f),M=s.getX(f+1),y=s.getX(f+2);a=Kr(this,i,e,Di,c,u,_,M,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,h.start),M=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let y=_,S=M;y<S;y+=3){const x=y,A=y+1,P=y+2;a=Kr(this,p,e,Di,c,u,x,A,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let f=m,p=g;f<p;f+=3){const _=f,M=f+1,y=f+2;a=Kr(this,i,e,Di,c,u,_,M,y),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function Rh(o,e,t,n,i,r,a,s){let l;if(e.side===Tt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Vn,s),l===null)return null;$r.copy(s),$r.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:o}}function Kr(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,cr),o.getVertexPosition(s,ur),o.getVertexPosition(l,hr);const c=Rh(o,e,t,n,cr,ur,hr,ta);if(c){i&&(Yr.fromBufferAttribute(i,a),jr.fromBufferAttribute(i,s),Zr.fromBufferAttribute(i,l),c.uv=Tn.getUV(ta,cr,ur,hr,Yr,jr,Zr,new Ee)),r&&(Yr.fromBufferAttribute(r,a),jr.fromBufferAttribute(r,s),Zr.fromBufferAttribute(r,l),c.uv2=Tn.getUV(ta,cr,ur,hr,Yr,jr,Zr,new Ee));const u={a,b:s,c:l,normal:new z,materialIndex:0};Tn.getNormal(cr,ur,hr,u.normal),c.face=u}return c}class Or extends mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(d,2));function g(f,p,_,M,y,S,x,A,P,v,w){const L=S/P,G=x/v,Y=S/2,I=x/2,R=A/2,B=P+1,j=v+1;let Z=0,V=0;const J=new z;for(let K=0;K<j;K++){const ue=K*G-I;for(let U=0;U<B;U++){const $=U*L-Y;J[f]=$*M,J[p]=ue*y,J[_]=R,c.push(J.x,J.y,J.z),J[f]=0,J[p]=0,J[_]=A>0?1:-1,u.push(J.x,J.y,J.z),d.push(U/P),d.push(1-K/v),Z+=1}}for(let K=0;K<v;K++)for(let ue=0;ue<P;ue++){const U=h+ue+B*K,$=h+ue+B*(K+1),te=h+(ue+1)+B*(K+1),ne=h+(ue+1)+B*K;l.push(U,$,ne),l.push($,te,ne),V+=6}s.addGroup(m,V,w),m+=V,h+=Z}}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(o){const e={};for(let t=0;t<o.length;t++){const n=Zi(o[t]);for(const i in n)e[i]=n[i]}return e}function Ih(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function oc(o){return o.getRenderTarget()===null&&o.outputEncoding===ke?ln:br}const Oh={clone:Zi,merge:yt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=Ih(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends lc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ii=1;class zh extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new jt(Ri,Ii,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new jt(Ri,Ii,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new jt(Ri,Ii,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new jt(Ri,Ii,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new jt(Ri,Ii,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new jt(Ri,Ii,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=An,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class cc extends Et{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uh extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Or(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Bn});r.uniforms.tEquirect.value=t;const a=new hn(i,r),s=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Yt),new zh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const na=new z,Bh=new z,kh=new Ut;class ti{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=na.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kh.getNormalMatrix(e),i=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new xs,Jr=new z;class uc{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(s-i,d-l,f-h,y-p).normalize(),t[1].setComponents(s+i,d+l,f+h,y+p).normalize(),t[2].setComponents(s+r,d+c,f+m,y+_).normalize(),t[3].setComponents(s-r,d-c,f-m,y-_).normalize(),t[4].setComponents(s-a,d-u,f-g,y-M).normalize(),t[5].setComponents(s+a,d+u,f+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jr.x=i.normal.x>0?e.max.x:e.min.x,Jr.y=i.normal.y>0?e.max.y:e.min.y,Jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Gh(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,m=u.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,h):(t?o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:s,update:l}}class Ha extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,d=e/s,h=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const M=_*h-a;for(let y=0;y<c;y++){const S=y*d-r;g.push(S,-M,0),f.push(0,0,1),p.push(y/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<s;M++){const y=M+c*_,S=M+c*(_+1),x=M+1+c*(_+1),A=M+1+c*_;m.push(y,S,A),m.push(S,x,A)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(p,2))}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh="vec3 transformed = vec3( position );",Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,id=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Od=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Nd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ud=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Vh,alphamap_pars_fragment:Hh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,begin_vertex:jh,beginnormal_vertex:Zh,bsdfs:$h,iridescence_fragment:Kh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:rf,color_pars_fragment:sf,color_pars_vertex:af,color_vertex:of,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:uf,displacementmap_pars_vertex:hf,displacementmap_vertex:ff,emissivemap_fragment:df,emissivemap_pars_fragment:pf,encodings_fragment:mf,encodings_pars_fragment:gf,envmap_fragment:_f,envmap_common_pars_fragment:xf,envmap_pars_fragment:vf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Rf,envmap_vertex:Mf,fog_vertex:Sf,fog_pars_vertex:bf,fog_fragment:wf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Ef,lightmap_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:If,lights_toon_pars_fragment:Of,lights_phong_fragment:Ff,lights_phong_pars_fragment:Nf,lights_physical_fragment:zf,lights_physical_pars_fragment:Uf,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Gf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:rd,normal_pars_vertex:sd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:hd,output_fragment:fd,packing:dd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:xd,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:Md,shadowmap_vertex:Sd,shadowmask_pars_fragment:bd,skinbase_vertex:wd,skinning_pars_vertex:Td,skinning_vertex:Ed,skinnormal_vertex:Ad,specularmap_fragment:Cd,specularmap_pars_fragment:Pd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Rd,transmission_pars_fragment:Id,uv_pars_fragment:Od,uv_pars_vertex:Fd,uv_vertex:Nd,uv2_pars_fragment:zd,uv2_pars_vertex:Ud,uv2_vertex:Bd,worldpos_vertex:kd,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Hd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:jd,distanceRGBA_vert:Zd,distanceRGBA_frag:$d,equirect_vert:Kd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:rp,meshmatcap_vert:sp,meshmatcap_frag:ap,meshnormal_vert:op,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:up,meshphysical_vert:hp,meshphysical_frag:fp,meshtoon_vert:dp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:xp,sprite_vert:vp,sprite_frag:yp},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},cn={basic:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:yt([re.points,re.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:yt([re.common,re.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:yt([re.sprite,re.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:yt([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:yt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};cn.physical={uniforms:yt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Qr={r:0,b:0,g:0};function Mp(o,e,t,n,i,r,a){const s=new Ge(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const S=o.xr,x=S.getSession&&S.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?f(s,l):y&&y.isColor&&(f(y,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===_s)?(u===void 0&&(u=new hn(new Or(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==ke,(d!==y||h!==y.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new hn(new Ha(2,2),new Cn({name:"BackgroundMaterial",uniforms:Zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(Qr,oc(o)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(s,l)},render:g}}function Sp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function d(R,B,j,Z,V){let J=!1;if(a){const K=f(Z,j,B);c!==K&&(c=K,m(c.object)),J=_(R,Z,j,V),J&&M(R,Z,j,V)}else{const K=B.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=K,J=!0)}V!==null&&t.update(V,34963),(J||u)&&(u=!1,v(R,B,j,Z),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,B,j){const Z=j.wireframe===!0;let V=s[R.id];V===void 0&&(V={},s[R.id]=V);let J=V[B.id];J===void 0&&(J={},V[B.id]=J);let K=J[Z];return K===void 0&&(K=p(h()),J[Z]=K),K}function p(R){const B=[],j=[],Z=[];for(let V=0;V<i;V++)B[V]=0,j[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:Z,object:R,attributes:{},index:null}}function _(R,B,j,Z){const V=c.attributes,J=B.attributes;let K=0;const ue=j.getAttributes();for(const U in ue)if(ue[U].location>=0){const te=V[U];let ne=J[U];if(ne===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function M(R,B,j,Z){const V={},J=B.attributes;let K=0;const ue=j.getAttributes();for(const U in ue)if(ue[U].location>=0){let te=J[U];te===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),V[U]=ne,K++}c.attributes=V,c.attributesNum=K,c.index=Z}function y(){const R=c.newAttributes;for(let B=0,j=R.length;B<j;B++)R[B]=0}function S(R){x(R,0)}function x(R,B){const j=c.newAttributes,Z=c.enabledAttributes,V=c.attributeDivisors;j[R]=1,Z[R]===0&&(o.enableVertexAttribArray(R),Z[R]=1),V[R]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),V[R]=B)}function A(){const R=c.newAttributes,B=c.enabledAttributes;for(let j=0,Z=B.length;j<Z;j++)B[j]!==R[j]&&(o.disableVertexAttribArray(j),B[j]=0)}function P(R,B,j,Z,V,J){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(R,B,j,V,J):o.vertexAttribPointer(R,B,j,Z,V,J)}function v(R,B,j,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=Z.attributes,J=j.getAttributes(),K=B.defaultAttributeValues;for(const ue in J){const U=J[ue];if(U.location>=0){let $=V[ue];if($===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){const te=$.normalized,ne=$.itemSize,k=t.get($);if(k===void 0)continue;const ye=k.buffer,me=k.type,de=k.bytesPerElement;if($.isInterleavedBufferAttribute){const le=$.data,Ne=le.stride,Se=$.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)x(U.location+xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<U.locationSize;xe++)S(U.location+xe);o.bindBuffer(34962,ye);for(let xe=0;xe<U.locationSize;xe++)P(U.location+xe,ne/U.locationSize,me,te,Ne*de,(Se+ne/U.locationSize*xe)*de)}else{if($.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)x(U.location+le,$.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<U.locationSize;le++)S(U.location+le);o.bindBuffer(34962,ye);for(let le=0;le<U.locationSize;le++)P(U.location+le,ne/U.locationSize,me,te,ne*de,ne/U.locationSize*le*de)}}else if(K!==void 0){const te=K[ue];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv(U.location,te);break;case 3:o.vertexAttrib3fv(U.location,te);break;case 4:o.vertexAttrib4fv(U.location,te);break;default:o.vertexAttrib1fv(U.location,te)}}}}A()}function w(){Y();for(const R in s){const B=s[R];for(const j in B){const Z=B[j];for(const V in Z)g(Z[V].object),delete Z[V];delete B[j]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const j in B){const Z=B[j];for(const V in Z)g(Z[V].object),delete Z[V];delete B[j]}delete s[R.id]}function G(R){for(const B in s){const j=s[B];if(j[R.id]===void 0)continue;const Z=j[R.id];for(const V in Z)g(Z[V].object),delete Z[V];delete j[R.id]}}function Y(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:y,enableAttribute:S,disableUnusedAttributes:A}}function bp(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function wp(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),y=h>0,S=a||e.has("OES_texture_float"),x=y&&S,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:A}}function Tp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,s=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=o.get(d);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,y=M*4;let S=_.clippingState||null;l.value=S,S=u(g,h,y,m);for(let x=0;x!==y;++x)S[x]=t[x];_.clippingState=S,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,M=h.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,S=m;y!==f;++y,S+=4)a.copy(d[y]).applyMatrix4(M,s),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Ep(o){let e=new WeakMap;function t(a,s){return s===va?a.mapping=qi:s===ya&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===va||s===ya)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Uh(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ap extends lc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,tl=[.125,.215,.35,.446,.526,.582],ri=20,ia=new Ap,nl=new Ge;let ra=null;const ni=(1+Math.sqrt(5))/2,Fi=1/ni,il=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ni,Fi),new z(0,ni,-Fi),new z(Fi,0,ni),new z(-Fi,0,ni),new z(ni,Fi,0),new z(-ni,Fi,0)];class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Sr,format:rn,encoding:pi,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Pp(r,e,t)}return i}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i){const s=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(nl),u.toneMapping=An,u.autoClear=!1;const m=new rc({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new hn(new Or,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(nl),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):M===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const y=this._cubeSize;es(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),f&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=il[(i-1)%il.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new hn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):ri;p>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const _=[];let M=0;for(let P=0;P<ri;++P){const v=P/f,w=Math.exp(-v*v/2);_.push(w),P===0?M+=w:P<p&&(M+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const S=this._sizeLods[i],x=3*S*(i>y-Ui?i-y+Ui:0),A=4*(this._cubeSize-S);es(t,x,A,3*S,2*S),l.setRenderTarget(t),l.render(d,ia)}}function Cp(o){const e=[],t=[],n=[];let i=o;const r=o-Ui+1+tl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Ui?l=tl[a-o+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,f=3,p=2,_=1,M=new Float32Array(f*g*m),y=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,v=A>2?0:-1,w=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(w,f*g*A),y.set(h,p*g*A);const L=[A,A,A,A,A,A];S.set(L,_*g*A)}const x=new mn;x.setAttribute("position",new fn(M,f)),x.setAttribute("uv",new fn(y,p)),x.setAttribute("faceIndex",new fn(S,_)),e.push(x),i>Ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(o,e,t){const n=new mi(o,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Pp(o,e,t){const n=new Float32Array(ri),i=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function al(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ol(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===va||l===ya,u=l===qi||l===Yi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new rl(o)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new rl(o));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dp(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rp(o,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let y=0,S=M.length;y<S;y+=3){const x=M[y+0],A=M[y+1],P=M[y+2];h.push(x,A,A,P,P,x)}}else{const M=g.array;f=g.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const x=y+0,A=y+1,P=y+2;h.push(x,A,A,P,P,x)}}const p=new(Kl(h)?ac:sc)(h,1);p.version=f;const _=r.get(d);_&&e.remove(_),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function Ip(o,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*l),t.update(m,r,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,h*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function Op(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fp(o,e){return o[0]-e[0]}function Np(o,e){return Math.abs(e[1])-Math.abs(o[1])}function zp(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ut,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let j=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),x===!0&&(L=2),A===!0&&(L=3);let G=u.attributes.position.count*L,Y=1;G>e.maxTextureSize&&(Y=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*Y*4*p),R=new tc(I,G,Y,p);R.type=ai,R.needsUpdate=!0;const B=L*4;for(let Z=0;Z<p;Z++){const V=P[Z],J=v[Z],K=w[Z],ue=G*Y*4*Z;for(let U=0;U<V.count;U++){const $=U*B;S===!0&&(a.fromBufferAttribute(V,U),I[ue+$+0]=a.x,I[ue+$+1]=a.y,I[ue+$+2]=a.z,I[ue+$+3]=0),x===!0&&(a.fromBufferAttribute(J,U),I[ue+$+4]=a.x,I[ue+$+5]=a.y,I[ue+$+6]=a.z,I[ue+$+7]=0),A===!0&&(a.fromBufferAttribute(K,U),I[ue+$+8]=a.x,I[ue+$+9]=a.y,I[ue+$+10]=a.z,I[ue+$+11]=K.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new Ee(G,Y)},r.set(u,_),u.addEventListener("dispose",j)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<f;x++){const A=p[x];A[0]=x,A[1]=m[x]}p.sort(Np);for(let x=0;x<8;x++)x<f&&p[x][1]?(s[x][0]=p[x][0],s[x][1]=p[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(Fp);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const A=s[x],P=A[0],v=A[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[P]&&u.setAttribute("morphTarget"+x,_[P]),M&&u.getAttribute("morphNormal"+x)!==M[P]&&u.setAttribute("morphNormal"+x,M[P]),i[x]=v,y+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Up(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const fc=new Et,dc=new tc,pc=new Sh,mc=new cc,ll=[],cl=[],ul=new Float32Array(16),hl=new Float32Array(9),fl=new Float32Array(4);function ir(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=ll[i];if(r===void 0&&(r=new Float32Array(i),ll[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function tt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function nt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ys(o,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Bp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function kp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;o.uniform2fv(this.addr,e),nt(t,e)}}function Gp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;o.uniform3fv(this.addr,e),nt(t,e)}}function Vp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;o.uniform4fv(this.addr,e),nt(t,e)}}function Hp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;fl.set(n),o.uniformMatrix2fv(this.addr,!1,fl),nt(t,n)}}function Wp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;hl.set(n),o.uniformMatrix3fv(this.addr,!1,hl),nt(t,n)}}function Xp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ul.set(n),o.uniformMatrix4fv(this.addr,!1,ul),nt(t,n)}}function qp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Yp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;o.uniform2iv(this.addr,e),nt(t,e)}}function jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;o.uniform3iv(this.addr,e),nt(t,e)}}function Zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;o.uniform4iv(this.addr,e),nt(t,e)}}function $p(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Kp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;o.uniform2uiv(this.addr,e),nt(t,e)}}function Jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;o.uniform3uiv(this.addr,e),nt(t,e)}}function Qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;o.uniform4uiv(this.addr,e),nt(t,e)}}function em(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fc,i)}function tm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pc,i)}function nm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mc,i)}function im(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dc,i)}function rm(o){switch(o){case 5126:return Bp;case 35664:return kp;case 35665:return Gp;case 35666:return Vp;case 35674:return Hp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return Kp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function sm(o,e){o.uniform1fv(this.addr,e)}function am(o,e){const t=ir(e,this.size,2);o.uniform2fv(this.addr,t)}function om(o,e){const t=ir(e,this.size,3);o.uniform3fv(this.addr,t)}function lm(o,e){const t=ir(e,this.size,4);o.uniform4fv(this.addr,t)}function cm(o,e){const t=ir(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function um(o,e){const t=ir(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hm(o,e){const t=ir(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fm(o,e){o.uniform1iv(this.addr,e)}function dm(o,e){o.uniform2iv(this.addr,e)}function pm(o,e){o.uniform3iv(this.addr,e)}function mm(o,e){o.uniform4iv(this.addr,e)}function gm(o,e){o.uniform1uiv(this.addr,e)}function _m(o,e){o.uniform2uiv(this.addr,e)}function xm(o,e){o.uniform3uiv(this.addr,e)}function vm(o,e){o.uniform4uiv(this.addr,e)}function ym(o,e,t){const n=this.cache,i=e.length,r=ys(t,i);tt(n,r)||(o.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||fc,r[a])}function Mm(o,e,t){const n=this.cache,i=e.length,r=ys(t,i);tt(n,r)||(o.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pc,r[a])}function Sm(o,e,t){const n=this.cache,i=e.length,r=ys(t,i);tt(n,r)||(o.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mc,r[a])}function bm(o,e,t){const n=this.cache,i=e.length,r=ys(t,i);tt(n,r)||(o.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||dc,r[a])}function wm(o){switch(o){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rm(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wm(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function dl(o,e){o.seq.push(e),o.map[e.id]=e}function Cm(o,e,t){const n=o.name,i=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){dl(t,c===void 0?new Tm(s,o,e):new Em(s,o,e));break}else{let d=t.map[s];d===void 0&&(d=new Am(s),dl(t,d)),t=d}}}class ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Cm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Pm=0;function Lm(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Dm(o){switch(o){case pi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ml(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Lm(o.getShaderSource(e),a)}else return i}function Rm(o,e){const t=Dm(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Im(o,e){let t;switch(e){case ju:t="Linear";break;case Zu:t="Reinhard";break;case $u:t="OptimizedCineon";break;case Ku:t="ACESFilmic";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Om(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function Fm(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function pr(o){return o!==""}function gl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(o){return o.replace(zm,Um)}function Um(o,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ta(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(o){return o.replace(Bm,km)}function km(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function Xm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qm(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Gm(t),c=Vm(t),u=Hm(t),d=Wm(t),h=Xm(t),m=t.isWebGL2?"":Om(t),g=Fm(r),f=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(pr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(p=[vl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[m,vl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?be.tonemapping_pars_fragment:"",t.toneMapping!==An?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Rm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=Ta(a),a=gl(a,t),a=_l(a,t),s=Ta(s),s=gl(s,t),s=_l(s,t),a=xl(a),s=xl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+a,S=M+_+s,x=pl(i,35633,y),A=pl(i,35632,S);if(i.attachShader(f,x),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(x).trim(),G=i.getShaderInfoLog(A).trim();let Y=!0,I=!0;if(i.getProgramParameter(f,35714)===!1){Y=!1;const R=ml(i,x,"vertex"),B=ml(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||G==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(x),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new ss(i,f)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Nm(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=A,this}let Ym=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function $m(o,e,t,n,i,r,a){const s=new ic,l=new jm,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,w,L,G,Y){const I=G.fog,R=Y.geometry,B=v.isMeshStandardMaterial?G.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),Z=j&&j.mapping===_s?j.image.height:null,V=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=J!==void 0?J.length:0;let ue=0;R.morphAttributes.position!==void 0&&(ue=1),R.morphAttributes.normal!==void 0&&(ue=2),R.morphAttributes.color!==void 0&&(ue=3);let U,$,te,ne;if(V){const Ne=cn[V];U=Ne.vertexShader,$=Ne.fragmentShader}else U=v.vertexShader,$=v.fragmentShader,l.update(v),te=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const k=o.getRenderTarget(),ye=v.alphaTest>0,me=v.clearcoat>0,de=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:U,fragmentShader:$,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:h,outputEncoding:k===null?o.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:pi,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===xh,tangentSpaceNormalMap:v.normalMapType===_h,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ke,clearcoat:me,clearcoatMap:me&&!!v.clearcoatMap,clearcoatRoughnessMap:me&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!v.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!v.iridescenceMap,iridescenceThicknessMap:de&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Gi,alphaMap:!!v.alphaMap,alphaTest:ye,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:An,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===Tt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(o.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),v.push(s.mask)}function y(v){const w=g[v.type];let L;if(w){const G=cn[w];L=Oh.clone(G.uniforms)}else L=v.uniforms;return L}function S(v,w){let L;for(let G=0,Y=c.length;G<Y;G++){const I=c[G];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new qm(o,w,v,r),c.push(L)),L}function x(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:P}}function Km(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function yl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ml(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,m,g,f,p){let _=o[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},o[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),e++,_}function s(d,h,m,g,f,p){const _=a(d,h,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(d,h,m,g,f,p){const _=a(d,h,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(d,h){t.length>1&&t.sort(d||Jm),n.length>1&&n.sort(h||yl),i.length>1&&i.sort(h||yl)}function u(){for(let d=e,h=o.length;d<h;d++){const m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Qm(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Ml,o.set(n,[a])):i>=r.length?(a=new Ml,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function eg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return o[e.id]=t,t}}}function tg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let ng=0;function ig(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rg(o,e){const t=new eg,n=tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new ot,s=new ot;function l(u,d){let h=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,p=0,_=0,M=0,y=0,S=0,x=0,A=0,P=0,v=0;u.sort(ig);const w=d!==!0?Math.PI:1;for(let G=0,Y=u.length;G<Y;G++){const I=u[G],R=I.color,B=I.intensity,j=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=R.r*B*w,m+=R.g*B*w,g+=R.b*B*w;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],B);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=I.shadow.matrix,S++}i.directional[f]=V,f++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(R).multiplyScalar(B*w),V.distance=j,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,J.updateMatrices(I),I.castShadow&&v++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=Z,A++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(R).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=V,M++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=I.shadow.matrix,x++}i.point[p]=V,p++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(B*w),V.groundColor.copy(I.groundColor).multiplyScalar(B*w),i.hemi[y]=V,y++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==A||L.numSpotMaps!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=A,L.numSpotMaps=P,i.version=ng++)}function c(u,d){let h=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const S=u[M];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),h++}else if(S.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),s.identity(),a.copy(S.matrixWorld),a.premultiply(_),s.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),f++}else if(S.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Sl(o,e){const t=new rg(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function sg(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new Sl(o,e),t.set(r,[l])):a>=s.length?(l=new Sl(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ag extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class og extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ug(o,e,t){let n=new uc;const i=new Ee,r=new Ee,a=new ut,s=new ag({depthPacking:gh}),l=new og,c={},u=t.maxTextureSize,d={[Vn]:Tt,[Tt]:Vn,[Fn]:Fn},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new hn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl,this.render=function(S,x,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=o.getRenderTarget(),v=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Bn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let G=0,Y=S.length;G<Y;G++){const I=S[G],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==dr?{minFilter:Mt,magFilter:Mt}:{};R.map=new mi(i.x,i.y,Z),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Z=0;Z<j;Z++){const V=R.getViewport(Z);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(a),R.updateMatrices(I,Z),n=R.getFrustum(),y(x,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===dr&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(P,v,w)};function _(S,x){const A=e.update(f);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mi(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(x,null,A,h,f,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(x,null,A,m,f,null)}function M(S,x,A,P,v,w){let L=null;const G=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0)L=G;else if(L=A.isPointLight===!0?l:s,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const Y=L.uuid,I=x.uuid;let R=c[Y];R===void 0&&(R={},c[Y]=R);let B=R[I];B===void 0&&(B=L.clone(),R[I]=B),L=B}return L.visible=x.visible,L.wireframe=x.wireframe,w===dr?L.side=x.shadowSide!==null?x.shadowSide:x.side:L.side=x.shadowSide!==null?x.shadowSide:d[x.side],L.alphaMap=x.alphaMap,L.alphaTest=x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=P,L.farDistance=v),L}function y(S,x,A,P,v){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===dr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const G=e.update(S),Y=S.material;if(Array.isArray(Y)){const I=G.groups;for(let R=0,B=I.length;R<B;R++){const j=I[R],Z=Y[j.materialIndex];if(Z&&Z.visible){const V=M(S,Z,P,A.near,A.far,v);o.renderBufferDirect(A,null,G,V,S,j)}}}else if(Y.visible){const I=M(S,Y,P,A.near,A.far,v);o.renderBufferDirect(A,null,G,I,S,null)}}const L=S.children;for(let G=0,Y=L.length;G<Y;G++)y(L[G],x,A,P,v)}}function hg(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const W=new ut;let Q=null;const ce=new ut(0,0,0,0);return{setMask:function(ge){Q!==ge&&!D&&(o.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Fe,rt,ft,qn){qn===!0&&(ge*=ft,Fe*=ft,rt*=ft),W.set(ge,Fe,rt,ft),ce.equals(W)===!1&&(o.clearColor(ge,Fe,rt,ft),ce.copy(W))},reset:function(){D=!1,Q=null,ce.set(-1,0,0,0)}}}function r(){let D=!1,W=null,Q=null,ce=null;return{setTest:function(ge){ge?ye(2929):me(2929)},setMask:function(ge){W!==ge&&!D&&(o.depthMask(ge),W=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case Bu:o.depthFunc(512);break;case ku:o.depthFunc(519);break;case Gu:o.depthFunc(513);break;case xa:o.depthFunc(515);break;case Vu:o.depthFunc(514);break;case Hu:o.depthFunc(518);break;case Wu:o.depthFunc(516);break;case Xu:o.depthFunc(517);break;default:o.depthFunc(515)}Q=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ce!==ge&&(o.clearDepth(ge),ce=ge)},reset:function(){D=!1,W=null,Q=null,ce=null}}}function a(){let D=!1,W=null,Q=null,ce=null,ge=null,Fe=null,rt=null,ft=null,qn=null;return{setTest:function(Ve){D||(Ve?ye(2960):me(2960))},setMask:function(Ve){W!==Ve&&!D&&(o.stencilMask(Ve),W=Ve)},setFunc:function(Ve,gn,Ht){(Q!==Ve||ce!==gn||ge!==Ht)&&(o.stencilFunc(Ve,gn,Ht),Q=Ve,ce=gn,ge=Ht)},setOp:function(Ve,gn,Ht){(Fe!==Ve||rt!==gn||ft!==Ht)&&(o.stencilOp(Ve,gn,Ht),Fe=Ve,rt=gn,ft=Ht)},setLocked:function(Ve){D=Ve},setClear:function(Ve){qn!==Ve&&(o.clearStencil(Ve),qn=Ve)},reset:function(){D=!1,W=null,Q=null,ce=null,ge=null,Fe=null,rt=null,ft=null,qn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,_=!1,M=null,y=null,S=null,x=null,A=null,P=null,v=null,w=!1,L=null,G=null,Y=null,I=null,R=null;const B=o.getParameter(35661);let j=!1,Z=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Z>=2);let J=null,K={};const ue=o.getParameter(3088),U=o.getParameter(2978),$=new ut().fromArray(ue),te=new ut().fromArray(U);function ne(D,W,Q){const ce=new Uint8Array(4),ge=o.createTexture();o.bindTexture(D,ge),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Fe=0;Fe<Q;Fe++)o.texImage2D(W+Fe,0,6408,1,1,0,6408,5121,ce);return ge}const k={};k[3553]=ne(3553,3553,1),k[34067]=ne(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(2929),l.setFunc(xa),je(!1),_t(ho),ye(2884),it(Bn);function ye(D){h[D]!==!0&&(o.enable(D),h[D]=!0)}function me(D){h[D]!==!1&&(o.disable(D),h[D]=!1)}function de(D,W){return m[D]!==W?(o.bindFramebuffer(D,W),m[D]=W,n&&(D===36009&&(m[36160]=W),D===36160&&(m[36009]=W)),!0):!1}function le(D,W){let Q=f,ce=!1;if(D)if(Q=g.get(W),Q===void 0&&(Q=[],g.set(W,Q)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(Q.length!==ge.length||Q[0]!==36064){for(let Fe=0,rt=ge.length;Fe<rt;Fe++)Q[Fe]=36064+Fe;Q.length=ge.length,ce=!0}}else Q[0]!==36064&&(Q[0]=36064,ce=!0);else Q[0]!==1029&&(Q[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ne(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const Se={[zi]:32774,[Cu]:32778,[Pu]:32779};if(n)Se[mo]=32775,Se[go]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Se[mo]=D.MIN_EXT,Se[go]=D.MAX_EXT)}const xe={[Lu]:0,[Du]:1,[Ru]:768,[ql]:770,[Uu]:776,[Nu]:774,[Ou]:772,[Iu]:769,[Yl]:771,[zu]:775,[Fu]:773};function it(D,W,Q,ce,ge,Fe,rt,ft){if(D===Bn){_===!0&&(me(3042),_=!1);return}if(_===!1&&(ye(3042),_=!0),D!==Au){if(D!==M||ft!==w){if((y!==zi||A!==zi)&&(o.blendEquation(32774),y=zi,A=zi),ft)switch(D){case Gi:o.blendFuncSeparate(1,771,1,771);break;case _a:o.blendFunc(1,1);break;case fo:o.blendFuncSeparate(0,769,0,1);break;case po:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:o.blendFuncSeparate(770,771,1,771);break;case _a:o.blendFunc(770,1);break;case fo:o.blendFuncSeparate(0,769,0,1);break;case po:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,x=null,P=null,v=null,M=D,w=ft}return}ge=ge||W,Fe=Fe||Q,rt=rt||ce,(W!==y||ge!==A)&&(o.blendEquationSeparate(Se[W],Se[ge]),y=W,A=ge),(Q!==S||ce!==x||Fe!==P||rt!==v)&&(o.blendFuncSeparate(xe[Q],xe[ce],xe[Fe],xe[rt]),S=Q,x=ce,P=Fe,v=rt),M=D,w=!1}function ht(D,W){D.side===Fn?me(2884):ye(2884);let Q=D.side===Tt;W&&(Q=!Q),je(Q),D.blending===Gi&&D.transparent===!1?it(Bn):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(32926):me(32926)}function je(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function _t(D){D!==wu?(ye(2884),D!==G&&(D===ho?o.cullFace(1029):D===Tu?o.cullFace(1028):o.cullFace(1032))):me(2884),G=D}function qe(D){D!==Y&&(j&&o.lineWidth(D),Y=D)}function Oe(D,W,Q){D?(ye(32823),(I!==W||R!==Q)&&(o.polygonOffset(W,Q),I=W,R=Q)):me(32823)}function Vt(D){D?ye(3089):me(3089)}function St(D){D===void 0&&(D=33984+B-1),J!==D&&(o.activeTexture(D),J=D)}function E(D,W,Q){Q===void 0&&(J===null?Q=33984+B-1:Q=J);let ce=K[Q];ce===void 0&&(ce={type:void 0,texture:void 0},K[Q]=ce),(ce.type!==D||ce.texture!==W)&&(J!==Q&&(o.activeTexture(Q),J=Q),o.bindTexture(D,W||k[D]),ce.type=D,ce.texture=W)}function b(){const D=K[J];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){$.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function fe(D){te.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function Ae(D,W){let Q=d.get(W);Q===void 0&&(Q=new WeakMap,d.set(W,Q));let ce=Q.get(D);ce===void 0&&(ce=o.getUniformBlockIndex(W,D.name),Q.set(D,ce))}function Pe(D,W){const ce=d.get(W).get(D);u.get(W)!==ce&&(o.uniformBlockBinding(W,ce,D.__bindingPointIndex),u.set(W,ce))}function ze(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},J=null,K={},m={},g=new WeakMap,f=[],p=null,_=!1,M=null,y=null,S=null,x=null,A=null,P=null,v=null,w=!1,L=null,G=null,Y=null,I=null,R=null,$.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ye,disable:me,bindFramebuffer:de,drawBuffers:le,useProgram:Ne,setBlending:it,setMaterial:ht,setFlipSided:je,setCullFace:_t,setLineWidth:qe,setPolygonOffset:Oe,setScissorTest:Vt,activeTexture:St,bindTexture:E,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:ee,texImage2D:he,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:O,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:pe,viewport:fe,reset:ze}}function fg(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,b){return _?new OffscreenCanvas(E,b):wr("canvas")}function y(E,b,H,ee){let ie=1;if((E.width>ee||E.height>ee)&&(ie=ee/Math.max(E.width,E.height)),ie<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=b?wa:Math.floor,ve=se(ie*E.width),C=se(ie*E.height);f===void 0&&(f=M(ve,C));const O=H?M(ve,C):f;return O.width=ve,O.height=C,O.getContext("2d").drawImage(E,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+C+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Wo(E.width)&&Wo(E.height)}function x(E){return s?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Mt&&E.minFilter!==Yt}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==Mt&&E.minFilter!==Yt}function P(E){o.generateMipmap(E)}function v(E,b,H,ee,ie=!1){if(s===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=b;return b===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),b===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),b===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=ee===ke&&ie===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(E,b,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function L(E){return E===Mt||E===_o||E===Cs?9728:9729}function G(E){const b=E.target;b.removeEventListener("dispose",G),I(b),b.isVideoTexture&&g.delete(b)}function Y(E){const b=E.target;b.removeEventListener("dispose",Y),B(b)}function I(E){const b=n.get(E);if(b.__webglInit===void 0)return;const H=E.source,ee=p.get(H);if(ee){const ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(E),Object.keys(ee).length===0&&p.delete(H)}n.remove(E)}function R(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const H=E.source,ee=p.get(H);delete ee[b.__cacheKey],a.memory.textures--}function B(E){const b=E.texture,H=n.get(E),ee=n.get(b);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,se=b.length;ie<se;ie++){const ve=n.get(b[ie]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(b[ie])}n.remove(b),n.remove(E)}let j=0;function Z(){j=0}function V(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function J(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function K(E,b){const H=n.get(E);if(E.isVideoTexture&&Vt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,E,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function ue(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){me(H,E,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function U(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){me(H,E,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function $(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const te={[Ma]:10497,[nn]:33071,[Sa]:33648},ne={[Mt]:9728,[_o]:9984,[Cs]:9986,[Yt]:9729,[Qu]:9985,[Mr]:9987};function k(E,b,H){if(H?(o.texParameteri(E,10242,te[b.wrapS]),o.texParameteri(E,10243,te[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,te[b.wrapR]),o.texParameteri(E,10240,ne[b.magFilter]),o.texParameteri(E,10241,ne[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==nn||b.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(b.magFilter)),o.texParameteri(E,10241,L(b.minFilter)),b.minFilter!==Mt&&b.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Mt||b.minFilter!==Cs&&b.minFilter!==Mr||b.type===ai&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ye(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",G));const ee=b.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const se=J(b);if(se!==E.__cacheKey){ie[se]===void 0&&(ie[se]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[se].usedTimes++;const ve=ie[E.__cacheKey];ve!==void 0&&(ie[E.__cacheKey].usedTimes--,ve.usedTimes===0&&R(b)),E.__cacheKey=se,E.__webglTexture=ie[se].texture}return H}function me(E,b,H){let ee=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=35866),b.isData3DTexture&&(ee=32879);const ie=ye(E,b),se=b.source;t.bindTexture(ee,E.__webglTexture,33984+H);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const C=x(b)&&S(b.image)===!1;let O=y(b.image,C,!1,u);O=St(b,O);const oe=S(O)||s,he=r.convert(b.format,b.encoding);let ae=r.convert(b.type),pe=v(b.internalFormat,he,ae,b.encoding,b.isVideoTexture);k(ee,b,oe);let fe;const Ae=b.mipmaps,Pe=s&&b.isVideoTexture!==!0,ze=ve.__version===void 0||ie===!0,D=w(b,O,oe);if(b.isDepthTexture)pe=6402,s?b.type===ai?pe=36012:b.type===si?pe=33190:b.type===Vi?pe=35056:pe=33189:b.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===li&&pe===6402&&b.type!==$l&&b.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=si,ae=r.convert(b.type)),b.format===ji&&pe===6402&&(pe=34041,b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vi,ae=r.convert(b.type))),ze&&(Pe?t.texStorage2D(3553,1,pe,O.width,O.height):t.texImage2D(3553,0,pe,O.width,O.height,0,he,ae,null));else if(b.isDataTexture)if(Ae.length>0&&oe){Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],Pe?t.texSubImage2D(3553,W,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,W,pe,fe.width,fe.height,0,he,ae,fe.data);b.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,he,ae,O.data)):t.texImage2D(3553,0,pe,O.width,O.height,0,he,ae,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(35866,D,pe,Ae[0].width,Ae[0].height,O.depth);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],b.format!==rn?he!==null?Pe?t.compressedTexSubImage3D(35866,W,0,0,0,fe.width,fe.height,O.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,W,pe,fe.width,fe.height,O.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,W,0,0,0,fe.width,fe.height,O.depth,he,ae,fe.data):t.texImage3D(35866,W,pe,fe.width,fe.height,O.depth,0,he,ae,fe.data)}else{Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],b.format!==rn?he!==null?Pe?t.compressedTexSubImage2D(3553,W,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,W,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,W,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,W,pe,fe.width,fe.height,0,he,ae,fe.data)}else if(b.isDataArrayTexture)Pe?(ze&&t.texStorage3D(35866,D,pe,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,he,ae,O.data)):t.texImage3D(35866,0,pe,O.width,O.height,O.depth,0,he,ae,O.data);else if(b.isData3DTexture)Pe?(ze&&t.texStorage3D(32879,D,pe,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,he,ae,O.data)):t.texImage3D(32879,0,pe,O.width,O.height,O.depth,0,he,ae,O.data);else if(b.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(3553,D,pe,O.width,O.height);else{let W=O.width,Q=O.height;for(let ce=0;ce<D;ce++)t.texImage2D(3553,ce,pe,W,Q,0,he,ae,null),W>>=1,Q>>=1}}else if(Ae.length>0&&oe){Pe&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let W=0,Q=Ae.length;W<Q;W++)fe=Ae[W],Pe?t.texSubImage2D(3553,W,0,0,he,ae,fe):t.texImage2D(3553,W,pe,he,ae,fe);b.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,he,ae,O)):t.texImage2D(3553,0,pe,he,ae,O);A(b,oe)&&P(ee),ve.__version=se.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function de(E,b,H){if(b.image.length!==6)return;const ee=ye(E,b),ie=b.source;t.bindTexture(34067,E.__webglTexture,33984+H);const se=n.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const ve=b.isCompressedTexture||b.image[0].isCompressedTexture,C=b.image[0]&&b.image[0].isDataTexture,O=[];for(let W=0;W<6;W++)!ve&&!C?O[W]=y(b.image[W],!1,!0,c):O[W]=C?b.image[W].image:b.image[W],O[W]=St(b,O[W]);const oe=O[0],he=S(oe)||s,ae=r.convert(b.format,b.encoding),pe=r.convert(b.type),fe=v(b.internalFormat,ae,pe,b.encoding),Ae=s&&b.isVideoTexture!==!0,Pe=se.__version===void 0||ee===!0;let ze=w(b,oe,he);k(34067,b,he);let D;if(ve){Ae&&Pe&&t.texStorage2D(34067,ze,fe,oe.width,oe.height);for(let W=0;W<6;W++){D=O[W].mipmaps;for(let Q=0;Q<D.length;Q++){const ce=D[Q];b.format!==rn?ae!==null?Ae?t.compressedTexSubImage2D(34069+W,Q,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(34069+W,Q,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+W,Q,0,0,ce.width,ce.height,ae,pe,ce.data):t.texImage2D(34069+W,Q,fe,ce.width,ce.height,0,ae,pe,ce.data)}}}else{D=b.mipmaps,Ae&&Pe&&(D.length>0&&ze++,t.texStorage2D(34067,ze,fe,O[0].width,O[0].height));for(let W=0;W<6;W++)if(C){Ae?t.texSubImage2D(34069+W,0,0,0,O[W].width,O[W].height,ae,pe,O[W].data):t.texImage2D(34069+W,0,fe,O[W].width,O[W].height,0,ae,pe,O[W].data);for(let Q=0;Q<D.length;Q++){const ge=D[Q].image[W].image;Ae?t.texSubImage2D(34069+W,Q+1,0,0,ge.width,ge.height,ae,pe,ge.data):t.texImage2D(34069+W,Q+1,fe,ge.width,ge.height,0,ae,pe,ge.data)}}else{Ae?t.texSubImage2D(34069+W,0,0,0,ae,pe,O[W]):t.texImage2D(34069+W,0,fe,ae,pe,O[W]);for(let Q=0;Q<D.length;Q++){const ce=D[Q];Ae?t.texSubImage2D(34069+W,Q+1,0,0,ae,pe,ce.image[W]):t.texImage2D(34069+W,Q+1,fe,ae,pe,ce.image[W])}}}A(b,he)&&P(34067),se.__version=ie.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function le(E,b,H,ee,ie){const se=r.convert(H.format,H.encoding),ve=r.convert(H.type),C=v(H.internalFormat,se,ve,H.encoding);n.get(b).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,C,b.width,b.height,b.depth,0,se,ve,null):t.texImage2D(ie,0,C,b.width,b.height,0,se,ve,null)),t.bindFramebuffer(36160,E),Oe(b)?h.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(H).__webglTexture,0,qe(b)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ee,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(E,b,H){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let ee=33189;if(H||Oe(b)){const ie=b.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ai?ee=36012:ie.type===si&&(ee=33190));const se=qe(b);Oe(b)?h.renderbufferStorageMultisampleEXT(36161,se,ee,b.width,b.height):o.renderbufferStorageMultisample(36161,se,ee,b.width,b.height)}else o.renderbufferStorage(36161,ee,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const ee=qe(b);H&&Oe(b)===!1?o.renderbufferStorageMultisample(36161,ee,35056,b.width,b.height):Oe(b)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0;ie<ee.length;ie++){const se=ee[ie],ve=r.convert(se.format,se.encoding),C=r.convert(se.type),O=v(se.internalFormat,ve,C,se.encoding),oe=qe(b);H&&Oe(b)===!1?o.renderbufferStorageMultisample(36161,oe,O,b.width,b.height):Oe(b)?h.renderbufferStorageMultisampleEXT(36161,oe,O,b.width,b.height):o.renderbufferStorage(36161,O,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Se(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,ie=qe(b);if(b.depthTexture.format===li)Oe(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(b.depthTexture.format===ji)Oe(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(E){const b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,E)}else if(H){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=o.createRenderbuffer(),Ne(b.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ne(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function it(E,b,H){const ee=n.get(E);b!==void 0&&le(ee.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&xe(E)}function ht(E){const b=E.texture,H=n.get(E),ee=n.get(b);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=b.version,a.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,ve=S(E)||s;if(ie){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const C=E.texture;for(let O=0,oe=C.length;O<oe;O++){const he=n.get(C[O]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Oe(E)===!1){const C=se?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const oe=C[O];H.__webglColorRenderbuffer[O]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[O]);const he=r.convert(oe.format,oe.encoding),ae=r.convert(oe.type),pe=v(oe.internalFormat,he,ae,oe.encoding,E.isXRRenderTarget===!0),fe=qe(E);o.renderbufferStorageMultisample(36161,fe,pe,E.width,E.height),o.framebufferRenderbuffer(36160,36064+O,36161,H.__webglColorRenderbuffer[O])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),k(34067,b,ve);for(let C=0;C<6;C++)le(H.__webglFramebuffer[C],E,b,36064,34069+C);A(b,ve)&&P(34067),t.unbindTexture()}else if(se){const C=E.texture;for(let O=0,oe=C.length;O<oe;O++){const he=C[O],ae=n.get(he);t.bindTexture(3553,ae.__webglTexture),k(3553,he,ve),le(H.__webglFramebuffer,E,he,36064+O,3553),A(he,ve)&&P(3553)}t.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ee.__webglTexture),k(C,b,ve),le(H.__webglFramebuffer,E,b,36064,C),A(b,ve)&&P(C),t.unbindTexture()}E.depthBuffer&&xe(E)}function je(E){const b=S(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,ie=H.length;ee<ie;ee++){const se=H[ee];if(A(se,b)){const ve=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(se).__webglTexture;t.bindTexture(ve,C),P(ve),t.unbindTexture()}}}function _t(E){if(s&&E.samples>0&&Oe(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,ee=E.height;let ie=16384;const se=[],ve=E.stencilBuffer?33306:36096,C=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let oe=0;oe<b.length;oe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){se.push(36064+oe),E.depthBuffer&&se.push(ve);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),O&&o.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[oe]),he===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),O){const ae=n.get(b[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ae,0)}o.blitFramebuffer(0,0,H,ee,0,0,H,ee,ie,9728),m&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let oe=0;oe<b.length;oe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,C.__webglColorRenderbuffer[oe]);const he=n.get(b[oe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function qe(E){return Math.min(d,E.samples)}function Oe(E){const b=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Vt(E){const b=a.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function St(E,b){const H=E.encoding,ee=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ba||H!==pi&&(H===ke?s===!1?e.has("EXT_sRGB")===!0&&ee===rn?(E.format=ba,E.minFilter=Yt,E.generateMipmaps=!1):b=Ql.sRGBToLinear(b):(ee!==rn||ie!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=ue,this.setTexture3D=U,this.setTextureCube=$,this.rebindTextures=it,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function dg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===di)return 5121;if(r===ih)return 32819;if(r===rh)return 32820;if(r===eh)return 5120;if(r===th)return 5122;if(r===$l)return 5123;if(r===nh)return 5124;if(r===si)return 5125;if(r===ai)return 5126;if(r===Sr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===sh)return 6406;if(r===rn)return 6408;if(r===ah)return 6409;if(r===oh)return 6410;if(r===li)return 6402;if(r===ji)return 34041;if(r===ba)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===lh)return 6403;if(r===ch)return 36244;if(r===uh)return 33319;if(r===hh)return 33320;if(r===fh)return 36249;if(r===Ps||r===Ls||r===Ds||r===Rs)if(a===ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xo||r===vo||r===yo||r===Mo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===So||r===bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===So)return a===ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===bo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wo||r===To||r===Eo||r===Ao||r===Co||r===Po||r===Lo||r===Do||r===Ro||r===Io||r===Oo||r===Fo||r===No||r===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===wo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===To)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ao)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Co)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Po)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Do)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ro)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Io)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===No)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zo)return a===ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Is)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===Is)return a===ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===ph||r===Uo||r===Bo||r===ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class pg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gg extends Et{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=si),n===void 0&&u===ji&&(n=Vi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class _g extends xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const f=t.getContextAttributes();let p=null,_=null;const M=[],y=[],S=new Set,x=new Map,A=new jt;A.layers.enable(1),A.viewport=new ut;const P=new jt;P.layers.enable(2),P.viewport=new ut;const v=[A,P],w=new pg;w.layers.enable(1),w.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=M[U];return $===void 0&&($=new aa,M[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=M[U];return $===void 0&&($=new aa,M[U]=$),$.getGripSpace()},this.getHand=function(U){let $=M[U];return $===void 0&&($=new aa,M[U]=$),$.getHandSpace()};function Y(U){const $=y.indexOf(U.inputSource);if($===-1)return;const te=M[$];te!==void 0&&te.dispatchEvent({type:U.type,data:U.inputSource})}function I(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",R);for(let U=0;U<M.length;U++){const $=y[U];$!==null&&(y[U]=null,M[U].disconnect($))}L=null,G=null,e.setRenderTarget(p),m=null,h=null,d=null,i=null,_=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",I),i.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),_=new mi(m.framebufferWidth,m.framebufferHeight,{format:rn,type:di,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let $=null,te=null,ne=null;f.depth&&(ne=f.stencil?35056:33190,$=f.stencil?ji:li,te=f.stencil?Vi:si);const k={colorFormat:32856,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(k),i.updateRenderState({layers:[h]}),_=new mi(h.textureWidth,h.textureHeight,{format:rn,type:di,depthTexture:new gg(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const ye=e.properties.get(_);ye.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(U){for(let $=0;$<U.removed.length;$++){const te=U.removed[$],ne=y.indexOf(te);ne>=0&&(y[ne]=null,M[ne].disconnect(te))}for(let $=0;$<U.added.length;$++){const te=U.added[$];let ne=y.indexOf(te);if(ne===-1){for(let ye=0;ye<M.length;ye++)if(ye>=y.length){y.push(te),ne=ye;break}else if(y[ye]===null){y[ye]=te,ne=ye;break}if(ne===-1)break}const k=M[ne];k&&k.connect(te)}}const B=new z,j=new z;function Z(U,$,te){B.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);const ne=B.distanceTo(j),k=$.projectionMatrix.elements,ye=te.projectionMatrix.elements,me=k[14]/(k[10]-1),de=k[14]/(k[10]+1),le=(k[9]+1)/k[5],Ne=(k[9]-1)/k[5],Se=(k[8]-1)/k[0],xe=(ye[8]+1)/ye[0],it=me*Se,ht=me*xe,je=ne/(-Se+xe),_t=je*-Se;$.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(_t),U.translateZ(je),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const qe=me+je,Oe=de+je,Vt=it-_t,St=ht+(ne-_t),E=le*de/Oe*qe,b=Ne*de/Oe*qe;U.projectionMatrix.makePerspective(Vt,St,E,b,qe,Oe)}function V(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;w.near=P.near=A.near=U.near,w.far=P.far=A.far=U.far,(L!==w.near||G!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,G=w.far);const $=U.parent,te=w.cameras;V(w,$);for(let k=0;k<te.length;k++)V(te[k],$);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),U.matrix.copy(w.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const ne=U.children;for(let k=0,ye=ne.length;k<ye;k++)ne[k].updateMatrixWorld(!0);te.length===2?Z(w,A,P):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return S};let J=null;function K(U,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ne=!1;te.length!==w.cameras.length&&(w.cameras.length=0,ne=!0);for(let k=0;k<te.length;k++){const ye=te[k];let me=null;if(m!==null)me=m.getViewport(ye);else{const le=d.getViewSubImage(h,ye);me=le.viewport,k===0&&(e.setRenderTargetTextures(_,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(_))}let de=v[k];de===void 0&&(de=new jt,de.layers.enable(k),de.viewport=new ut,v[k]=de),de.matrix.fromArray(ye.transform.matrix),de.projectionMatrix.fromArray(ye.projectionMatrix),de.viewport.set(me.x,me.y,me.width,me.height),k===0&&w.matrix.copy(de.matrix),ne===!0&&w.cameras.push(de)}}for(let te=0;te<M.length;te++){const ne=y[te],k=M[te];ne!==null&&k!==void 0&&k.update(ne,$,c||a)}if(J&&J(U,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let te=null;for(const ne of S)$.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)S.delete(ne),x.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of $.detectedPlanes)if(!S.has(ne))S.add(ne),x.set(ne,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const k=x.get(ne);ne.lastChangedTime>k&&(x.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const ue=new hc;ue.setAnimationLoop(K),this.setAnimationLoop=function(U){J=U},this.dispose=function(){}}}function xg(o,e){function t(f,p){p.color.getRGB(f.fogColor.value,oc(o)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,y)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?s(f,p,_,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Tt&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Tt&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,_,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Tt&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function vg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function c(M,y){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const x=y.program;n.updateUBOMapping(M,x);const A=e.render.frame;r[M.id]!==A&&(h(M),r[M.id]=A)}function u(M){const y=d();M.__bindingPointIndex=y;const S=o.createBuffer(),x=M.__size,A=M.usage;return o.bindBuffer(35345,S),o.bufferData(35345,x,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,S),S}function d(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],S=M.uniforms,x=M.__cache;o.bindBuffer(35345,y);for(let A=0,P=S.length;A<P;A++){const v=S[A];if(m(v,A,x)===!0){const w=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let G=0;for(let Y=0;Y<L.length;Y++){const I=L[Y],R=f(I);typeof I=="number"?(v.__data[0]=I,o.bufferSubData(35345,w+G,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,G),G+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,v.__data)}}o.bindBuffer(35345,null)}function m(M,y,S){const x=M.value;if(S[y]===void 0){if(typeof x=="number")S[y]=x;else{const A=Array.isArray(x)?x:[x],P=[];for(let v=0;v<A.length;v++)P.push(A[v].clone());S[y]=P}return!0}else if(typeof x=="number"){if(S[y]!==x)return S[y]=x,!0}else{const A=Array.isArray(S[y])?S[y]:[S[y]],P=Array.isArray(x)?x:[x];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(P[v])===!1)return w.copy(P[v]),!0}}return!1}function g(M){const y=M.uniforms;let S=0;const x=16;let A=0;for(let P=0,v=y.length;P<v;P++){const w=y[P],L={boundary:0,storage:0},G=Array.isArray(w.value)?w.value:[w.value];for(let Y=0,I=G.length;Y<I;Y++){const R=G[Y],B=f(R);L.boundary+=B.boundary,L.storage+=B.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,P>0){A=S%x;const Y=x-A;A!==0&&Y-L.boundary<0&&(S+=x-A,w.__offset=S)}S+=L.storage}return A=S%x,A>0&&(S+=x-A),M.__size=S,M.__cache={},this}function f(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function yg(){const o=wr("canvas");return o.style.display="block",o}function gc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:yg(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const f=this;let p=!1,_=0,M=0,y=null,S=-1,x=null;const A=new ut,P=new ut;let v=null,w=e.width,L=e.height,G=1,Y=null,I=null;const R=new ut(0,0,w,L),B=new ut(0,0,w,L);let j=!1;const Z=new uc;let V=!1,J=!1,K=null;const ue=new ot,U=new Ee,$=new z,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?G:1}let k=t;function ye(T,N){for(let X=0;X<T.length;X++){const F=T[X],q=e.getContext(F,N);if(q!==null)return q}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),k=ye(N,T),k===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,de,le,Ne,Se,xe,it,ht,je,_t,qe,Oe,Vt,St,E,b,H,ee,ie,se,ve,C,O,oe;function he(){me=new Dp(k),de=new wp(k,me,o),me.init(de),C=new dg(k,me,de),le=new hg(k,me,de),Ne=new Op,Se=new Km,xe=new fg(k,me,le,Se,de,C,Ne),it=new Ep(f),ht=new Lp(f),je=new Gh(k,de),O=new Sp(k,me,je,de),_t=new Rp(k,je,Ne,O),qe=new Up(k,_t,je,Ne),ie=new zp(k,de,xe),b=new Tp(Se),Oe=new $m(f,it,ht,me,de,O,b),Vt=new xg(f,Se),St=new Qm,E=new sg(me,de),ee=new Mp(f,it,ht,le,qe,u,a),H=new ug(f,qe,de),oe=new vg(k,Ne,de,le),se=new bp(k,me,Ne,de),ve=new Ip(k,me,Ne,de),Ne.programs=Oe.programs,f.capabilities=de,f.extensions=me,f.properties=Se,f.renderLists=St,f.shadowMap=H,f.state=le,f.info=Ne}he();const ae=new _g(f,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,N,X){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=N,e.width=Math.floor(T*G),e.height=Math.floor(N*G),X!==!1&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(w*G,L*G).floor()},this.setDrawingBufferSize=function(T,N,X){w=T,L=N,G=X,e.width=Math.floor(T*X),e.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,N,X,F){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,X,F),le.viewport(A.copy(R).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,N,X,F){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,N,X,F),le.scissor(P.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){le.setScissorTest(j=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,N=!0,X=!0){let F=0;T&&(F|=16384),N&&(F|=256),X&&(F|=1024),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),St.dispose(),E.dispose(),Se.dispose(),it.dispose(),ht.dispose(),qe.dispose(),O.dispose(),oe.dispose(),Oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ce),ae.removeEventListener("sessionend",ge),K&&(K.dispose(),K=null),Fe.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ne.autoReset,N=H.enabled,X=H.autoUpdate,F=H.needsUpdate,q=H.type;he(),Ne.autoReset=T,H.enabled=N,H.autoUpdate=X,H.needsUpdate=F,H.type=q}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const N=T.target;N.removeEventListener("dispose",Pe),ze(N)}function ze(T){D(T),Se.remove(T)}function D(T){const N=Se.get(T).programs;N!==void 0&&(N.forEach(function(X){Oe.releaseProgram(X)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,F,q,_e){N===null&&(N=te);const Me=q.isMesh&&q.matrixWorld.determinant()<0,we=xu(T,N,X,F,q);le.setMaterial(F,Me);let Te=X.index,Ie=1;F.wireframe===!0&&(Te=_t.getWireframeAttribute(X),Ie=2);const Le=X.drawRange,De=X.attributes.position;let Ze=Le.start*Ie,Dt=(Le.start+Le.count)*Ie;_e!==null&&(Ze=Math.max(Ze,_e.start*Ie),Dt=Math.min(Dt,(_e.start+_e.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),Dt=Math.min(Dt,Te.count)):De!=null&&(Ze=Math.max(Ze,0),Dt=Math.min(Dt,De.count));const _n=Dt-Ze;if(_n<0||_n===1/0)return;O.setup(q,F,we,X,Te);let Yn,$e=se;if(Te!==null&&(Yn=je.get(Te),$e=ve,$e.setIndex(Yn)),q.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*ne()),$e.setMode(1)):$e.setMode(4);else if(q.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),le.setLineWidth(Re*ne()),q.isLineSegments?$e.setMode(1):q.isLineLoop?$e.setMode(2):$e.setMode(3)}else q.isPoints?$e.setMode(0):q.isSprite&&$e.setMode(4);if(q.isInstancedMesh)$e.renderInstances(Ze,_n,q.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ws=Math.min(X.instanceCount,Re);$e.renderInstances(Ze,_n,ws)}else $e.render(Ze,_n)},this.compile=function(T,N){function X(F,q,_e){F.transparent===!0&&F.side===Fn&&F.forceSinglePass===!1?(F.side=Tt,F.needsUpdate=!0,Ht(F,q,_e),F.side=Vn,F.needsUpdate=!0,Ht(F,q,_e),F.side=Fn):Ht(F,q,_e)}h=E.get(T),h.init(),g.push(h),T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(f.physicallyCorrectLights),T.traverse(function(F){const q=F.material;if(q)if(Array.isArray(q))for(let _e=0;_e<q.length;_e++){const Me=q[_e];X(Me,T,F)}else X(q,T,F)}),g.pop(),h=null};let W=null;function Q(T){W&&W(T)}function ce(){Fe.stop()}function ge(){Fe.start()}const Fe=new hc;Fe.setAnimationLoop(Q),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){W=T,ae.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},ae.addEventListener("sessionstart",ce),ae.addEventListener("sessionend",ge),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,N,y),h=E.get(T,g.length),h.init(),g.push(h),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(ue),J=this.localClippingEnabled,V=b.init(this.clippingPlanes,J),d=St.get(T,m.length),d.init(),m.push(d),rt(T,N,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(Y,I),V===!0&&b.beginShadows();const X=h.state.shadowsArray;if(H.render(X,T,N),V===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),h.setupLights(f.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let q=0,_e=F.length;q<_e;q++){const Me=F[q];ft(d,T,Me,Me.viewport)}}else ft(d,T,N);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(f,T,N),O.resetDefaultState(),S=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function rt(T,N,X,F){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){F&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=qe.update(T),we=T.material;we.visible&&d.push(T,Me,we,X,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ne.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ne.render.frame),!T.frustumCulled||Z.intersectsObject(T))){F&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const Me=qe.update(T),we=T.material;if(Array.isArray(we)){const Te=Me.groups;for(let Ie=0,Le=Te.length;Ie<Le;Ie++){const De=Te[Ie],Ze=we[De.materialIndex];Ze&&Ze.visible&&d.push(T,Me,Ze,X,$.z,De)}}else we.visible&&d.push(T,Me,we,X,$.z,null)}}const _e=T.children;for(let Me=0,we=_e.length;Me<we;Me++)rt(_e[Me],N,X,F)}function ft(T,N,X,F){const q=T.opaque,_e=T.transmissive,Me=T.transparent;h.setupLightsView(X),V===!0&&b.setGlobalState(f.clippingPlanes,X),_e.length>0&&qn(q,N,X),F&&le.viewport(A.copy(F)),q.length>0&&Ve(q,N,X),_e.length>0&&Ve(_e,N,X),Me.length>0&&Ve(Me,N,X),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function qn(T,N,X){const F=de.isWebGL2;K===null&&(K=new mi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Sr:di,minFilter:Mr,samples:F&&r===!0?4:0})),f.getDrawingBufferSize(U),F?K.setSize(U.x,U.y):K.setSize(wa(U.x),wa(U.y));const q=f.getRenderTarget();f.setRenderTarget(K),f.clear();const _e=f.toneMapping;f.toneMapping=An,Ve(T,N,X),f.toneMapping=_e,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),f.setRenderTarget(q)}function Ve(T,N,X){const F=N.isScene===!0?N.overrideMaterial:null;for(let q=0,_e=T.length;q<_e;q++){const Me=T[q],we=Me.object,Te=Me.geometry,Ie=F===null?Me.material:F,Le=Me.group;we.layers.test(X.layers)&&gn(we,N,X,Te,Ie,Le)}}function gn(T,N,X,F,q,_e){T.onBeforeRender(f,N,X,F,q,_e),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(f,N,X,F,T,_e),q.transparent===!0&&q.side===Fn&&q.forceSinglePass===!1?(q.side=Tt,q.needsUpdate=!0,f.renderBufferDirect(X,N,F,q,T,_e),q.side=Vn,q.needsUpdate=!0,f.renderBufferDirect(X,N,F,q,T,_e),q.side=Fn):f.renderBufferDirect(X,N,F,q,T,_e),T.onAfterRender(f,N,X,F,q,_e)}function Ht(T,N,X){N.isScene!==!0&&(N=te);const F=Se.get(T),q=h.state.lights,_e=h.state.shadowsArray,Me=q.state.version,we=Oe.getParameters(T,q.state,_e,N,X),Te=Oe.getProgramCacheKey(we);let Ie=F.programs;F.environment=T.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(T.isMeshStandardMaterial?ht:it).get(T.envMap||F.environment),Ie===void 0&&(T.addEventListener("dispose",Pe),Ie=new Map,F.programs=Ie);let Le=Ie.get(Te);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===Me)return lo(T,we),Le}else we.uniforms=Oe.getUniforms(T),T.onBuild(X,we,f),T.onBeforeCompile(we,f),Le=Oe.acquireProgram(we,Te),Ie.set(Te,Le),F.uniforms=we.uniforms;const De=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=b.uniform),lo(T,we),F.needsLights=yu(T),F.lightsStateVersion=Me,F.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ze=Le.getUniforms(),Dt=ss.seqWithValue(Ze.seq,De);return F.currentProgram=Le,F.uniformsList=Dt,Le}function lo(T,N){const X=Se.get(T);X.outputEncoding=N.outputEncoding,X.instancing=N.instancing,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function xu(T,N,X,F,q){N.isScene!==!0&&(N=te),xe.resetTextureUnits();const _e=N.fog,Me=F.isMeshStandardMaterial?N.environment:null,we=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:pi,Te=(F.isMeshStandardMaterial?ht:it).get(F.envMap||Me),Ie=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Le=!!F.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color,_n=F.toneMapped?f.toneMapping:An,Yn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=Yn!==void 0?Yn.length:0,Re=Se.get(F),ws=h.state.lights;if(V===!0&&(J===!0||T!==x)){const Rt=T===x&&F.id===S;b.setState(F,T,Rt)}let st=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ws.state.version||Re.outputEncoding!==we||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||F.fog===!0&&Re.fog!==_e||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==b.numPlanes||Re.numIntersection!==b.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==De||Re.morphNormals!==Ze||Re.morphColors!==Dt||Re.toneMapping!==_n||de.isWebGL2===!0&&Re.morphTargetsCount!==$e)&&(st=!0):(st=!0,Re.__version=F.version);let jn=Re.currentProgram;st===!0&&(jn=Ht(F,N,q));let co=!1,rr=!1,Ts=!1;const xt=jn.getUniforms(),Zn=Re.uniforms;if(le.useProgram(jn.program)&&(co=!0,rr=!0,Ts=!0),F.id!==S&&(S=F.id,rr=!0),co||x!==T){if(xt.setValue(k,"projectionMatrix",T.projectionMatrix),de.logarithmicDepthBuffer&&xt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,rr=!0,Ts=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Rt=xt.map.cameraPosition;Rt!==void 0&&Rt.setValue(k,$.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&xt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&xt.setValue(k,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){xt.setOptional(k,q,"bindMatrix"),xt.setOptional(k,q,"bindMatrixInverse");const Rt=q.skeleton;Rt&&(de.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),xt.setValue(k,"boneTexture",Rt.boneTexture,xe),xt.setValue(k,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Es=X.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&de.isWebGL2===!0)&&ie.update(q,X,F,jn),(rr||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,xt.setValue(k,"receiveShadow",q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Zn.envMap.value=Te,Zn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),rr&&(xt.setValue(k,"toneMappingExposure",f.toneMappingExposure),Re.needsLights&&vu(Zn,Ts),_e&&F.fog===!0&&Vt.refreshFogUniforms(Zn,_e),Vt.refreshMaterialUniforms(Zn,F,G,L,K),ss.upload(k,Re.uniformsList,Zn,xe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ss.upload(k,Re.uniformsList,Zn,xe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&xt.setValue(k,"center",q.center),xt.setValue(k,"modelViewMatrix",q.modelViewMatrix),xt.setValue(k,"normalMatrix",q.normalMatrix),xt.setValue(k,"modelMatrix",q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Rt=F.uniformsGroups;for(let As=0,Mu=Rt.length;As<Mu;As++)if(de.isWebGL2){const uo=Rt[As];oe.update(uo,jn),oe.bind(uo,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function vu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function yu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,N,X){Se.get(T.texture).__webglTexture=N,Se.get(T.depthTexture).__webglTexture=X;const F=Se.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const X=Se.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){y=T,_=N,M=X;let F=!0,q=null,_e=!1,Me=!1;if(T){const Te=Se.get(T);Te.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Te.__hasExternalTextures&&xe.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Le[N],_e=!0):de.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?q=Se.get(T).__webglMultisampledFramebuffer:q=Le,A.copy(T.viewport),P.copy(T.scissor),v=T.scissorTest}else A.copy(R).multiplyScalar(G).floor(),P.copy(B).multiplyScalar(G).floor(),v=j;if(le.bindFramebuffer(36160,q)&&de.drawBuffers&&F&&le.drawBuffers(T,q),le.viewport(A),le.scissor(P),le.setScissorTest(v),_e){const Te=Se.get(T.texture);k.framebufferTexture2D(36160,36064,34069+N,Te.__webglTexture,X)}else if(Me){const Te=Se.get(T.texture),Ie=N||0;k.framebufferTextureLayer(36160,36064,Te.__webglTexture,X||0,Ie)}S=-1},this.readRenderTargetPixels=function(T,N,X,F,q,_e,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){le.bindFramebuffer(36160,we);try{const Te=T.texture,Ie=Te.format,Le=Te.type;if(Ie!==rn&&C.convert(Ie)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Sr&&(me.has("EXT_color_buffer_half_float")||de.isWebGL2&&me.has("EXT_color_buffer_float"));if(Le!==di&&C.convert(Le)!==k.getParameter(35738)&&!(Le===ai&&(de.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-F&&X>=0&&X<=T.height-q&&k.readPixels(N,X,F,q,C.convert(Ie),C.convert(Le),_e)}finally{const Te=y!==null?Se.get(y).__webglFramebuffer:null;le.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,N,X=0){const F=Math.pow(2,-X),q=Math.floor(N.image.width*F),_e=Math.floor(N.image.height*F);xe.setTexture2D(N,0),k.copyTexSubImage2D(3553,X,0,0,T.x,T.y,q,_e),le.unbindTexture()},this.copyTextureToTexture=function(T,N,X,F=0){const q=N.image.width,_e=N.image.height,Me=C.convert(X.format),we=C.convert(X.type);xe.setTexture2D(X,0),k.pixelStorei(37440,X.flipY),k.pixelStorei(37441,X.premultiplyAlpha),k.pixelStorei(3317,X.unpackAlignment),N.isDataTexture?k.texSubImage2D(3553,F,T.x,T.y,q,_e,Me,we,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(3553,F,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):k.texSubImage2D(3553,F,T.x,T.y,Me,we,N.image),F===0&&X.generateMipmaps&&k.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(T,N,X,F,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Te=C.convert(F.format),Ie=C.convert(F.type);let Le;if(F.isData3DTexture)xe.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)xe.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,F.flipY),k.pixelStorei(37441,F.premultiplyAlpha),k.pixelStorei(3317,F.unpackAlignment);const De=k.getParameter(3314),Ze=k.getParameter(32878),Dt=k.getParameter(3316),_n=k.getParameter(3315),Yn=k.getParameter(32877),$e=X.isCompressedTexture?X.mipmaps[0]:X.image;k.pixelStorei(3314,$e.width),k.pixelStorei(32878,$e.height),k.pixelStorei(3316,T.min.x),k.pixelStorei(3315,T.min.y),k.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Le,q,N.x,N.y,N.z,_e,Me,we,Te,Ie,$e.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Le,q,N.x,N.y,N.z,_e,Me,we,Te,$e.data)):k.texSubImage3D(Le,q,N.x,N.y,N.z,_e,Me,we,Te,Ie,$e),k.pixelStorei(3314,De),k.pixelStorei(32878,Ze),k.pixelStorei(3316,Dt),k.pixelStorei(3315,_n),k.pixelStorei(32877,Yn),q===0&&F.generateMipmaps&&k.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,le.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mg extends gc{}Mg.prototype.isWebGL1Renderer=!0;class Sg extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _c extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bl=new ot,Ea=new nc,ts=new xs,ns=new z;class bg extends At{constructor(e=new mn,t=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;bl.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(bl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,f=m;g<f;g++){const p=c.getX(g);ns.fromBufferAttribute(d,p),wl(ns,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=h,f=m;g<f;g++)ns.fromBufferAttribute(d,g),wl(ns,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function wl(o,e,t,n,i,r,a){const s=Ea.distanceSqToPoint(o);if(s<t){const l=new z;Ea.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class Xa extends mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],d=new z,h=new z,m=[],g=[],f=[],p=[];for(let _=0;_<=n;_++){const M=[],y=_/n;let S=0;_==0&&a==0?S=.5/t:_==n&&l==Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){const A=x/t;d.x=-e*Math.cos(i+A*r)*Math.sin(a+y*s),d.y=e*Math.cos(a+y*s),d.z=e*Math.sin(i+A*r)*Math.sin(a+y*s),g.push(d.x,d.y,d.z),h.copy(d).normalize(),f.push(h.x,h.y,h.z),p.push(A+S,1-y),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const y=u[_][M+1],S=u[_][M],x=u[_+1][M],A=u[_+1][M+1];(_!==0||a>0)&&m.push(y,S,A),(_!==n-1||l<Math.PI)&&m.push(S,x,A)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(p,2))}static fromJSON(e){return new Xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Tl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class wg{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Tg=new wg;class xc{constructor(e){this.manager=e!==void 0?e:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Eg extends xc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Tl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=wr("img");function l(){u(),Tl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Ag extends xc{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new Eg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class El{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);function bn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},qa,mt,Je,Zt=1e8,Be=1/Zt,Aa=Math.PI*2,Cg=Aa/4,Pg=0,yc=Math.sqrt,Lg=Math.cos,Dg=Math.sin,lt=function(e){return typeof e=="string"},Xe=function(e){return typeof e=="function"},Pn=function(e){return typeof e=="number"},Ya=function(e){return typeof e>"u"},pn=function(e){return typeof e=="object"},Ct=function(e){return e!==!1},Mc=function(){return typeof window<"u"},is=function(e){return Xe(e)||lt(e)},Sc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,Ca=/(?:-?\.?\d|\.)+/gi,bc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,oa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wc=/[+-]=-?[.\d]+/,Tc=/[^,'"\[\]\s]+/gi,Rg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,qt,Pa,ja,kt={},cs={},Ec,Ac=function(e){return(cs=_i(e,kt))&&Gt},Za=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},us=function(e,t){return!t&&console.warn(e)},Cc=function(e,t){return e&&(kt[e]=t)&&cs&&(cs[e]=t)||kt},Tr=function(){return 0},Ig={suppressEvents:!0,isStart:!0,kill:!1},as={suppressEvents:!0,kill:!1},Og={suppressEvents:!0},$a={},kn=[],La={},Pc,Nt={},la={},Al=30,os=[],Ka="",Ja=function(e){var t=e[0],n,i;if(pn(t)||Xe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=os.length;i--&&!os[i].targetTest(t););n=os[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kc(e[i],n)))||e.splice(i,1);return e},ui=function(e){return e._gsap||Ja($t(e))[0]._gsap},Lc=function(e,t,n){return(n=e[t])&&Xe(n)?e[t]():Ya(n)&&e.getAttribute&&e.getAttribute(t)||n},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ye=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},Hi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hs=function(){var e=kn.length,t=kn.slice(0),n,i;for(La={},kn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dc=function(e,t,n,i){kn.length&&!mt&&hs(),e.render(t,n,i||mt&&t<0&&(e._initted||e._startAt)),kn.length&&!mt&&hs()},Rc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tc).length<2?t:lt(e)?e.trim():e},Ic=function(e){return e},Jt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ng=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},_i=function(e,t){for(var n in t)e[n]=t[n];return e},Cl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},fs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},xr=function(e){var t=e.parent||He,n=e.keyframes?Ng(gt(e.keyframes)):Jt;if(Ct(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Oc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ms=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Hn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},hi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ug=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Da=function(e,t,n,i){return e._startAt&&(mt?e._startAt.revert(as):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Bg=function o(e){return!e||e._ts&&o(e.parent)},Pl=function(e){return e._repeat?Ki(e._tTime,e=e.duration()+e._rDelay)*e:0},Ki=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ds=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ss=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Be)||0))},bs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ss(e),n._dirty||hi(n,e)),e},Fc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ds(e.rawTime(),t),(!t._dur||Fr(0,t.totalDuration(),n)-t._tTime>Be)&&t.render(n,!0)),hi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Be}},un=function(e,t,n,i){return t.parent&&Hn(t),t._start=ct((Pn(n)?n:n||e!==He?Xt(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Oc(e,t,"_first","_last",e._sort?"_start":0),Ra(t)||(e._recent=t),i||Fc(e,t),e._ts<0&&bs(e,e._tTime),e},Nc=function(e,t){return(kt.ScrollTrigger||Za("scrollTrigger",t))&&kt.ScrollTrigger.create(t,e)},zc=function(e,t,n,i,r){if(eo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pc!==zt.frame)return kn.push(e),e._lazy=[r,i],1},kg=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ra=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&kg(e)&&!(!e._initted&&Ra(e))||(e._ts<0||e._dp._ts<0)&&!Ra(e))?0:1,s=e._rDelay,l=0,c,u,d;if(s&&e._repeat&&(l=Fr(0,e._tDur,t),u=Ki(l,s),e._yoyo&&u&1&&(a=1-a),u!==Ki(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||mt||i||e._zTime===Be||!t&&e._zTime){if(!e._initted&&zc(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Be:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Da(e,t,n,!0),e._onUpdate&&!n&&Kt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Hn(e,1),!n&&!mt&&(Kt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ji=function(e,t,n,i){var r=e._repeat,a=ct(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ct(a*(r+1)+e._rDelay*r):a,s>0&&!i&&bs(e,e._tTime=e._tDur*s),e.parent&&Ss(e),n||hi(e.parent,e),e},Ll=function(e){return e instanceof wt?hi(e):Ji(e,e._dur)},Hg={_start:0,endTime:Tr,totalDuration:Tr},Xt=function o(e,t,n){var i=e.labels,r=e._recent||Hg,a=e.duration()>=Zt?r.endTime(!1):e._dur,s,l,c;return lt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(gt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},vr=function(e,t,n){var i=Pn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ct(l.vars.inherit)&&l.parent;a.immediateRender=Ct(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new et(t[0],a,t[r+1])},Xn=function(e,t){return e||e===0?t(e):t},Fr=function(e,t,n){return n<e?e:n>t?t:n},pt=function(e,t){return!lt(e)||!(t=Rg.exec(e))?"":t[1]},Wg=function(e,t,n){return Xn(n,function(i){return Fr(e,t,i)})},Ia=[].slice,Uc=function(e,t){return e&&pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pn(e[0]))&&!e.nodeType&&e!==qt},Xg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return lt(i)&&!t||Uc(i,1)?(r=n).push.apply(r,$t(i)):n.push(i)})||n},$t=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):lt(e)&&!n&&(Pa||!Qi())?Ia.call((t||ja).querySelectorAll(e),0):gt(e)?Xg(e,n):Uc(e)?Ia.call(e,0):e?[e]:[]},Oa=function(e){return e=$t(e)[0]||us("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $t(t,n.querySelectorAll?n:n===e?us("Invalid scope")||ja.createElement("div"):e)}},Bc=function(e){return e.sort(function(){return .5-Math.random()})},kc=function(e){if(Xe(e))return e;var t=pn(e)?e:{each:e},n=fi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,d=i;return lt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],d=i[1]),function(h,m,g){var f=(g||t).length,p=a[f],_,M,y,S,x,A,P,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Zt])[1],!w){for(P=-Zt;P<(P=g[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=a[f]=[],_=l?Math.min(w,f)*u-.5:i%w,M=w===Zt?0:l?f*d/w-.5:i/w|0,P=0,v=Zt,A=0;A<f;A++)y=A%w-_,S=M-(A/w|0),p[A]=x=c?Math.abs(c==="y"?S:y):yc(y*y+S*S),x>P&&(P=x),x<v&&(v=x);i==="random"&&Bc(p),p.max=P-v,p.min=v,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=pt(t.amount||t.each)||0,n=n&&f<0?jc(n):n}return f=(p[h]-p.min)/p.max||0,ct(p.b+(n?n(f):f)*p.v)+p.u}},Fa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pn(n)?0:pt(n))}},Gc=function(e,t){var n=gt(e),i,r;return!n&&pn(e)&&(i=n=e.radius||Zt,e.values?(e=$t(e.values),(r=!Pn(e[0]))&&(i*=i)):e=Fa(e.increment)),Xn(t,n?Xe(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Zt,u=0,d=e.length,h,m;d--;)r?(h=e[d].x-s,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-s),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,r||u===a||Pn(a)?u:u+pt(a)}:Fa(e))},Vc=function(e,t,n,i){return Xn(gt(e)?!t:n===!0?!!(n=0):!i,function(){return gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Yg=function(e,t){return function(n){return e(parseFloat(n))+(t||pt(n))}},jg=function(e,t,n){return Wc(e,t,0,1,n)},Hc=function(e,t,n){return Xn(n,function(i){return e[~~t(i)]})},Zg=function o(e,t,n){var i=t-e;return gt(e)?Hc(e,o(0,e.length),t):Xn(n,function(r){return(i+(r-e)%i)%i+e})},$g=function o(e,t,n){var i=t-e,r=i*2;return gt(e)?Hc(e,o(0,e.length-1),t):Xn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Er=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Tc:Ca),n+=e.substr(t,i-t)+Vc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Wc=function(e,t,n,i,r){var a=t-e,s=i-n;return Xn(r,function(l){return n+((l-e)/a*s||0)})},Kg=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=lt(e),s={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(o(e[c-1],e[c]));d--,r=function(g){g*=d;var f=Math.min(h,~~g);return u[f](g-f)},n=t}else i||(e=_i(gt(e)?[]:{},e));if(!u){for(l in t)Qa.call(s,e,l,"get",t[l]);r=function(g){return io(g,s)||(a?e.p:e)}}}return Xn(n,r)},Dl=function(e,t,n){var i=e.labels,r=Zt,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Kt=function(e,t,n){var i=e.vars,r=i[t],a=Je,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&kn.length&&hs(),s&&(Je=s),u=l?r.apply(c,l):r.call(c),Je=a,u},gr=function(e){return Hn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mt),e.progress()<1&&Kt(e,"onInterrupt"),e},ki,Jg=function(e){e=!e.name&&e.default||e;var t=e.name,n=Xe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Tr,render:io,add:Qa,kill:p_,modifier:d_,rawVars:0},a={targetTest:0,get:0,getSetter:no,aliases:{},register:0};if(Qi(),e!==i){if(Nt[t])return;Jt(i,Jt(fs(e,r),a)),_i(i.prototype,_i(r,fs(e,a))),Nt[i.prop=t]=i,e.targetTest&&(os.push(i),$a[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cc(t,i),e.register&&e.register(Gt,i,Lt)},Ue=255,_r={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},ca=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ue+.5|0},Xc=function(e,t,n){var i=e?Pn(e)?[e>>16,e>>8&Ue,e&Ue]:0:_r.black,r,a,s,l,c,u,d,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_r[e])i=_r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ca),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ca(l+1/3,r,a),i[1]=ca(l,r,a),i[2]=ca(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(bc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ca)||_r.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ue,a=i[1]/Ue,s=i[2]/Ue,d=Math.max(r,a,s),h=Math.min(r,a,s),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===r?(a-s)/m+(a<s?6:0):d===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qc=function(e){var t=[],n=[],i=-1;return e.split(Gn).forEach(function(r){var a=r.match(Bi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rl=function(e,t,n){var i="",r=(e+i).match(Gn),a=t?"hsla(":"rgba(",s=0,l,c,u,d;if(!r)return e;if(r=r.map(function(h){return(h=Xc(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=qc(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gn,"1").split(Bi),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Gn),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},Gn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _r)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Qg=/hsl[a]?\(/,Yc=function(e){var t=e.join(" "),n;if(Gn.lastIndex=0,Gn.test(t))return n=Qg.test(t),e[1]=Rl(e[1],n),e[0]=Rl(e[0],n,qc(e[1])),!0},Ar,zt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,d,h,m,g=function f(p){var _=o()-i,M=p===!0,y,S,x,A;if(_>e&&(n+=_-t),i+=_,x=i-n,y=x-a,(y>0||M)&&(A=++d.frame,h=x-d.time*1e3,d.time=x=x/1e3,a+=y+(y>=r?4:r-y),S=1),M||(l=c(f)),S)for(m=0;m<s.length;m++)s[m](x,h,A,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ec&&(!Pa&&Mc()&&(qt=Pa=window,ja=qt.document||{},kt.gsap=Gt,(qt.gsapVersions||(qt.gsapVersions=[])).push(Gt.version),Ac(cs||qt.GreenSockGlobals||!qt.gsap&&qt||{}),u=qt.requestAnimationFrame),l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ar=1,g(2))},sleep:function(){(u?qt.cancelAnimationFrame:clearTimeout)(l),Ar=0,c=Tr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,_,M){var y=_?function(S,x,A,P){p(S,x,A,P),d.remove(y)}:p;return d.remove(p),s[M?"unshift":"push"](y),Qi(),y},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},d}(),Qi=function(){return!Ar&&zt.wake()},Ce={},e_=/^[\d.\-M][\d.\-,\s]/,t_=/["']/g,n_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(t_,"").trim():+c,i=l.substr(s+1).trim();return t},i_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},r_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[n_(t[1])]:i_(e).split(",").map(Rc)):Ce._CE&&e_.test(e)?Ce._CE("",e):n},jc=function(e){return function(t){return 1-e(1-t)}},Zc=function o(e,t){for(var n=e._first,i;n;)n instanceof wt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fi=function(e,t){return e&&(Xe(e)?e:Ce[e]||r_(e))||t},vi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Pt(e,function(s){Ce[s]=kt[s]=r,Ce[a=s.toLowerCase()]=n;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},$c=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ua=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Aa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Dg((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:$c(s);return r=Aa/r,l.config=function(c,u){return o(e,c,u)},l},ha=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:$c(n);return i.config=function(r){return o(e,r)},i};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;vi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;vi("Elastic",ua("in"),ua("out"),ua());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};vi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);vi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});vi("Circ",function(o){return-(yc(1-o*o)-1)});vi("Sine",function(o){return o===1?1:-Lg(o*Cg)+1});vi("Back",ha("in"),ha("out"),ha());Ce.SteppedEase=Ce.steps=kt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Be;return function(s){return((i*Fr(0,a,s)|0)+r)*n}}};$i.ease=Ce["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ka+=o+","+o+"Params,"});var Kc=function(e,t){this.id=Pg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lc,this.set=t?t.getSetter:no},er=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ji(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),Ar||zt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ji(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(bs(this,n),!r._dp||r.parent||Fc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ki(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ds(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Be?0:this._rts,this.totalTime(Fr(-this._delay,this._tDur,i),!0),Ss(this),Ug(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&un(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ct(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ds(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Og);var i=mt;return mt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ll(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ll(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Xt(this,n),Ct(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ct(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Be:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Be)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Xe(n)?n:Ic,s=function(){var c=i.then;i.then=null,Xe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){gr(this)},o}();Jt(er.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var wt=function(o){vc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ct(n.sortChildren),He&&un(n.parent||He,bn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Nc(bn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return vr(0,arguments,this),this},t.from=function(i,r,a){return vr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return vr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,xr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new et(i,r,Xt(this,a),1),this},t.call=function(i,r,a){return un(this,et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new et(i,a,Xt(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,xr(a).immediateRender=Ct(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,d){return s.startAt=a,xr(s).immediateRender=Ct(s.immediateRender),this.staggerTo(i,r,s,l,c,u,d)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ct(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,f,p,_,M,y,S,x,A,P;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,S=this._start,y=this._ts,_=!y,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=ct(u%p),u===l?(f=this._repeat,h=c):(f=~~(u/p),f&&f===u/p&&(h=c,f--),h>c&&(h=c)),x=Ki(this._tTime,p),!s&&this._tTime&&x!==f&&(x=f),A&&f&1&&(h=c-h,P=1),f!==x&&!this._lock){var v=A&&x&1,w=v===(A&&f&1);if(f<x&&(v=!v),s=v?0:c,this._lock=1,this.render(s||(P?0:ct(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Kt(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=v?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Zc(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Vg(this,ct(s),ct(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&(Kt(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-Be);break}}m=g}else{m=this._last;for(var L=i<0?i:h;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||mt&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-Be:Be);break}}m=g}}if(M&&!r&&(this.pause(),M.render(h>=s?0:-Be)._zTime=h>=s?1:-1,this._ts))return this._start=S,Ss(this),this.render(i,r,a);this._onUpdate&&!r&&Kt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Kt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Pn(r)||(r=Xt(this,r,i)),!(i instanceof er)){if(gt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(lt(i))return this.addLabel(i,r);if(Xe(i))i=et.delayedCall(0,i);else return this}return this!==i?un(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Zt);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof et?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return lt(i)?this.removeLabel(i):Xe(i)?this.killTweensOf(i):(Ms(this,i),i===this._recent&&(this._recent=this._last),hi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Xt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=et.delayedCall(0,r||Tr,a);return s.data="isPause",this._hasPause=1,un(this,s,Xt(this,i))},t.removePause=function(i){var r=this._first;for(i=Xt(this,i);r;)r._start===i&&r.data==="isPause"&&Hn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Nn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=$t(i),l=this._first,c=Pn(r),u;l;)l instanceof et?Fg(l._targets,s)&&(c?(!Nn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Xt(a,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=et.to(a,Jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Be,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ji(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Jt({startAt:{time:Xt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dl(this,Xt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dl(this,Xt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Be)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return hi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Zt,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,un(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Ji(a,a===He&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(He._ts&&(Dc(He,ds(i,He)),Pc=zt.frame),zt.frame>=Al){Al+=Bt.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Bt.autoSleep&&zt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zt.sleep()}}},e}(er);Jt(wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var s_=function(e,t,n,i,r,a,s){var l=new Lt(this._pt,e,t,0,1,iu,null,r),c=0,u=0,d,h,m,g,f,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Er(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(oa)||[];d=oa.exec(i);)g=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?Hi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=oa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(wc.test(i)||_)&&(l.e=0),this._pt=l,l},Qa=function(e,t,n,i,r,a,s,l,c,u){Xe(i)&&(i=i(r||0,e,a));var d=e[t],h=n!=="get"?n:Xe(d)?c?e[t.indexOf("set")||!Xe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,m=Xe(d)?c?u_:tu:to,g;if(lt(i)&&(~i.indexOf("random(")&&(i=Er(i)),i.charAt(1)==="="&&(g=Hi(h,i)+(pt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Na)return!isNaN(h*i)&&i!==""?(g=new Lt(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?f_:nu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!d&&!(t in e)&&Za(t,i),s_.call(this,e,t,h,i,m,l||Bt.stringFilter,c))},a_=function(e,t,n,i,r){if(Xe(e)&&(e=yr(e,r,t,n,i)),!pn(e)||e.style&&e.nodeType||gt(e)||Sc(e))return lt(e)?yr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=yr(e[s],r,t,n,i);return a},Jc=function(e,t,n,i,r,a){var s,l,c,u;if(Nt[e]&&(s=new Nt[e]).init(r,s.rawVars?t[e]:a_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Lt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==ki))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Nn,Na,eo=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,d=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,y=e.parent,S=y&&y.data==="nested"?y.vars.targets:M,x=e._overwrite==="auto"&&!qa,A=e.timeline,P,v,w,L,G,Y,I,R,B,j,Z,V,J;if(A&&(!g||!r)&&(r="none"),e._ease=fi(r,$i.ease),e._yEase=m?jc(fi(m===!0?r:m,$i.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(R=M[0]?ui(M[0]).harness:0,V=R&&i[R.prop],P=fs(i,$a),_&&(_._zTime<0&&_.progress(1),t<0&&h&&s&&!f?_.render(-1,!0):_.revert(h&&p?as:Ig),_._lazy=0),a){if(Hn(e._startAt=et.set(M,Jt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&Ct(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:d,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt||!s&&!f)&&e._startAt.revert(as),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(s=!1),w=Jt({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Ct(l),immediateRender:s,stagger:0,parent:y},P),V&&(w[R.prop]=V),Hn(e._startAt=et.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt?e._startAt.revert(as):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Be,Be);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ct(l)||l&&!p,v=0;v<M.length;v++){if(G=M[v],I=G._gsap||Ja(M)[v]._gsap,e._ptLookup[v]=j={},La[I.id]&&kn.length&&hs(),Z=S===M?v:S.indexOf(G),R&&(B=new R).init(G,V||P,e,Z,S)!==!1&&(e._pt=L=new Lt(e._pt,G,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(K){j[K]=L}),B.priority&&(Y=1)),!R||V)for(w in P)Nt[w]&&(B=Jc(w,P,e,Z,G,S))?B.priority&&(Y=1):j[w]=L=Qa.call(e,G,w,"get",P[w],Z,S,0,i.stringFilter);e._op&&e._op[v]&&e.kill(G,e._op[v]),x&&e._pt&&(Nn=e,He.killTweensOf(G,j,e.globalTime(t)),J=!e.parent,Nn=0),e._pt&&l&&(La[I.id]=1)}Y&&ru(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&A.render(Zt,!0,!0)},o_=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(c=d[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Na=1,e.vars[t]="+=0",eo(e,s),Na=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Ye(n)+pt(u.e)),u.b&&(u.b=c.s+pt(u.b))},l_=function(e,t){var n=e[0]?ui(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=_i({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},c_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(gt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},yr=function(e,t,n,i,r){return Xe(e)?e.call(t,n,i,r):lt(e)&&~e.indexOf("random(")?Er(e):e},Qc=Ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eu={};Pt(Qc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return eu[o]=1});var et=function(o){vc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:xr(i))||this;var l=s.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||He,y=(gt(n)||Sc(n)?Pn(n[0]):"length"in i)?[n]:$t(n),S,x,A,P,v,w,L,G;if(s._targets=y.length?Ja(y):us("GSAP target "+n+" not found. https://greensock.com",!Bt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||is(c)||is(u)){if(i=s.vars,S=s.timeline=new wt({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:y}),S.kill(),S.parent=S._dp=bn(s),S._start=0,h||is(c)||is(u)){if(P=y.length,L=h&&kc(h),pn(h))for(v in h)~Qc.indexOf(v)&&(G||(G={}),G[v]=h[v]);for(x=0;x<P;x++)A=fs(i,eu),A.stagger=0,_&&(A.yoyoEase=_),G&&_i(A,G),w=y[x],A.duration=+yr(c,bn(s),x,w,y),A.delay=(+yr(u,bn(s),x,w,y)||0)-s._delay,!h&&P===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),S.to(w,A,L?L(x,w,y):0),S._ease=Ce.none;S.duration()?c=u=0:s.timeline=0}else if(g){xr(Jt(S.vars.defaults,{ease:"none"})),S._ease=fi(g.ease||i.ease||"none");var Y=0,I,R,B;if(gt(g))g.forEach(function(j){return S.to(y,j,">")}),S.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||c_(v,g[v],A,g.easeEach);for(v in A)for(I=A[v].sort(function(j,Z){return j.t-Z.t}),Y=0,x=0;x<I.length;x++)R=I[x],B={ease:R.e,duration:(R.t-(x?I[x-1].t:0))/100*c},B[v]=R.v,S.to(y,B,Y),Y+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!qa&&(Nn=bn(s),He.killTweensOf(y),Nn=0),un(M,bn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!g&&s._start===ct(M._time)&&Ct(d)&&Bg(bn(s))&&M.data!=="nested")&&(s._tTime=-Be,s.render(Math.max(0,-u)||0)),p&&Nc(bn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Be&&!u?l:i<Be?0:i,h,m,g,f,p,_,M,y,S;if(!c)Gg(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,y=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,a);if(h=ct(d%f),d===l?(g=this._repeat,h=c):(g=~~(d/f),g&&g===d/f&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(S=this._yEase,h=c-h),p=Ki(this._tTime,f),h===s&&!a&&this._initted)return this._tTime=d,this;g!==p&&(y&&this._yEase&&Zc(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(ct(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(zc(this,u?i:h,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!s&&!r&&(Kt(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!h&&_?-Be:y._dur*y._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Da(this,i,r,a),Kt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Kt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Da(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hn(this,1),!r&&!(u&&!s)&&(d||s||_)&&(Kt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Ar||zt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||eo(this,l),c=this._ease(l/this._dur),o_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(bs(this,0),this.parent||Oc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?gr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Nn&&Nn.vars.overwrite!==!0)._first||gr(this),this.parent&&a!==this.timeline.totalDuration()&&Ji(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?$t(i):s,c=this._ptLookup,u=this._pt,d,h,m,g,f,p,_;if((!r||r==="all")&&zg(s,l))return r==="all"&&(this._pt=0),gr(this);for(d=this._op=this._op||[],r!=="all"&&(lt(r)&&(f={},Pt(r,function(M){return f[M]=1}),r=f),r=l_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=c[_],r==="all"?(d[_]=r,g=h,m={}):(m=d[_]=d[_]||{},g=r);for(f in g)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Ms(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&gr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return vr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return vr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return He.killTweensOf(i,r,a)},e}(er);Jt(et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(o){et[o]=function(){var e=new wt,t=Ia.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var to=function(e,t,n){return e[t]=n},tu=function(e,t,n){return e[t](n)},u_=function(e,t,n,i){return e[t](i.fp,n)},h_=function(e,t,n){return e.setAttribute(t,n)},no=function(e,t){return Xe(e[t])?tu:Ya(e[t])&&e.setAttribute?h_:to},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},f_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},iu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},io=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},d_=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},p_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ms(this,t,"_pt"):t.dep||(n=1),t=i;return!n},m_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ru=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Lt=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||nu,this.d=l||this,this.set=c||to,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=m_,this.m=n,this.mt=r,this.tween=i},o}();Pt(Ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return $a[o]=1});kt.TweenMax=kt.TweenLite=et;kt.TimelineLite=kt.TimelineMax=wt;He=new wt({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bt.stringFilter=Yc;var tr=[],ls={},g_=[],Il=0,fa=function(e){return(ls[e]||g_).map(function(t){return t()})},za=function(){var e=Date.now(),t=[];e-Il>2&&(fa("matchMediaInit"),tr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=qt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),fa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Il=e,fa("matchMedia"))},su=function(){function o(t,n){this.selector=n&&Oa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Xe(n)&&(r=i,i=n,n=Xe);var a=this,s=function(){var c=Je,u=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Oa(r)),Je=a,d=i.apply(a,arguments),Xe(d)&&a._r.push(d),Je=c,a.selector=u,a.isReverted=!1,d};return a.last=s,n===Xe?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof er)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=tr.indexOf(this);~s&&tr.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),__=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){pn(n)||(n={matches:n});var a=new su(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qt.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(za):l.addEventListener("change",za)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ps={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jg(i)})},timeline:function(e){return new wt(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){lt(e)&&(e=$t(e)[0]);var r=ui(e||{}).get,a=n?Ic:Rc;return n==="native"&&(n=""),e&&(t?a((Nt[t]&&Nt[t].get||r)(e,t,n,i)):function(s,l,c){return a((Nt[s]&&Nt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=$t(e),e.length>1){var i=e.map(function(u){return Gt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var a=Nt[t],s=ui(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ki._pt=0,d.init(e,n?u+n:u,ki,0,[e]),d.render(1,d),ki._pt&&io(1,ki)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Gt.to(e,_i((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fi(e.ease,$i.ease)),Cl($i,e||{})},config:function(e){return Cl(Bt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Nt[s]&&!kt[s]&&us(t+" effect requires "+s+" plugin.")}),la[t]=function(s,l,c){return n($t(s),Jt(l||{},r),c)},a&&(wt.prototype[t]=function(s,l,c){return this.add(la[t](s,pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=fi(t)},parseEase:function(e,t){return arguments.length?fi(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wt(e),i,r;for(n.smoothChildTiming=Ct(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(t||!(!i._dur&&i instanceof et&&i.vars.onComplete===i._targets[0]))&&un(n,i,i._start-i._delay),i=r;return un(He,n,0),n},context:function(e,t){return e?new su(e,t):Je},matchMedia:function(e){return new __(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||za()},addEventListener:function(e,t){var n=ls[e]||(ls[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ls[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zg,wrapYoyo:$g,distribute:kc,random:Vc,snap:Gc,normalize:jg,getUnit:pt,clamp:Wg,splitColor:Xc,toArray:$t,selector:Oa,mapRange:Wc,pipe:qg,unitize:Yg,interpolate:Kg,shuffle:Bc},install:Ac,effects:la,ticker:zt,updateRoot:wt.updateRoot,plugins:Nt,globalTimeline:He,core:{PropTween:Lt,globals:Cc,Tween:et,Timeline:wt,Animation:er,getCache:ui,_removeLinkedListItem:Ms,reverting:function(){return mt},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return qa=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ps[o]=et[o]});zt.add(wt.updateRoot);ki=ps.to({},{duration:0});var x_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},v_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=x_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},da=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(lt(r)&&(l={},Pt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}v_(s,r)}}}},Gt=ps.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)mt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},da("roundProps",Fa),da("modifiers"),da("snap",Gc))||ps;et.version=wt.version=Gt.version="3.11.4";Ec=1;Mc()&&Qi();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ol,zn,Wi,ro,oi,Fl,so,y_=function(){return typeof window<"u"},Ln={},ii=180/Math.PI,Xi=Math.PI/180,Ni=Math.atan2,Nl=1e8,ao=/([A-Z])/g,M_=/(left|right|width|margin|padding|x)/i,S_=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ua=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},au=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ou=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},E_=function(e,t,n){return e.style[t]=n},A_=function(e,t,n){return e.style.setProperty(t,n)},C_=function(e,t,n){return e._gsap[t]=n},P_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},L_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},D_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},We="transform",an=We+"Origin",R_=function(e,t){var n=this,i=this.target,r=i.style;if(e in Ln){if(this.tfm=this.tfm||{},e!=="transform"&&(e=En[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:wn(i,e)),this.props.indexOf(We)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,t,"")),e=We}(r||t)&&this.props.push(e,t,r[e])},lu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},I_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(ao,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=so(),r&&!r.isStart&&!n[We]&&(lu(n),i.uncache=1)}},cu=function(e,t){var n={target:e,props:[],revert:I_,save:R_};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},uu,Ba=function(e,t){var n=zn.createElementNS?zn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zn.createElement(e);return n.style?n:zn.createElement(e)},dn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ao,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,nr(t)||t,1)||""},zl="O,Moz,ms,Ms,Webkit".split(","),nr=function(e,t,n){var i=t||oi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?zl[a]:"")+e},ka=function(){y_()&&window.document&&(Ol=window,zn=Ol.document,Wi=zn.documentElement,oi=Ba("div")||{style:{}},Ba("div"),We=nr(We),an=We+"Origin",oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uu=!!nr("perspective"),so=Gt.core.reverting,ro=1)},pa=function o(e){var t=Ba("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Wi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Wi.removeChild(t),this.style.cssText=r,a},Ul=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hu=function(e){var t;try{t=e.getBBox()}catch{t=pa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===pa||(t=pa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ul(e,["x","cx","x1"])||0,y:+Ul(e,["y","cy","y1"])||0,width:0,height:0}:t},fu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hu(e))},Cr=function(e,t){if(t){var n=e.style;t in Ln&&t!==an&&(t=We),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ao,"-$1").toLowerCase())):n.removeAttribute(t)}},Un=function(e,t,n,i,r,a){var s=new Lt(e._pt,t,n,0,1,a?ou:au);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Bl={deg:1,rad:1,turn:1},O_={grid:1,flex:1},Wn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=oi.style,l=M_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,f,p,_;return i===a||!r||Bl[i]||Bl[a]?r:(a!=="px"&&!h&&(r=o(e,t,n,"px")),_=e.getCTM&&fu(e),(m||a==="%")&&(Ln[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Ye(m?r/g*d:r/100*g)):(s[l?"width":"height"]=d+(h?a:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===zn||!f.appendChild)&&(f=zn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===zt.time&&!p.uncache?Ye(r/p.width*d):((m||a==="%")&&!O_[dn(f,"display")]&&(s.position=dn(e,"position")),f===e&&(s.position="static"),f.appendChild(oi),g=oi[u],f.removeChild(oi),s.position="absolute",l&&m&&(p=ui(f),p.time=zt.time,p.width=f[u]),Ye(h?g*r/d:g&&r?d/g*r:0))))},wn=function(e,t,n,i){var r;return ro||ka(),t in En&&t!=="transform"&&(t=En[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ln[t]&&t!=="transform"?(r=Lr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:gs(dn(e,an))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ms[t]&&ms[t](e,t,n)||dn(e,t)||Lc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wn(e,t,r,n)+n:r},F_=function(e,t,n,i){if(!n||n==="none"){var r=nr(t,e,1),a=r&&dn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=dn(e,"borderTopColor"))}var s=new Lt(this._pt,e.style,t,0,1,iu),l=0,c=0,u,d,h,m,g,f,p,_,M,y,S,x;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=dn(e,t)||i,e.style[t]=n),u=[n,i],Yc(u),n=u[0],i=u[1],h=n.match(Bi)||[],x=i.match(Bi)||[],x.length){for(;d=Bi.exec(i);)p=d[0],M=i.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(f=h[c++]||"")&&(m=parseFloat(f)||0,S=f.substr((m+"").length),p.charAt(1)==="="&&(p=Hi(m,p)+S),_=parseFloat(p),y=p.substr((_+"").length),l=Bi.lastIndex-y.length,y||(y=y||Bt.units[t]||S,l===i.length&&(i+=y,s.e+=y)),S!==y&&(m=Wn(e,t,f,y)||0),s._pt={_next:s._pt,p:M||c===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?ou:au;return wc.test(i)&&(s.e=0),this._pt=s,s},kl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kl[n]||n,t[1]=kl[i]||i,t.join(" ")},z_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ln[s]&&(l=1,s=s==="transformOrigin"?an:We),Cr(n,s);l&&(Cr(n,We),a&&(a.svg&&n.removeAttribute("transform"),Lr(n,1),a.uncache=1,lu(i)))}},ms={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Lt(e._pt,t,n,0,0,z_);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Pr=[1,0,0,1,0,0],du={},pu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gl=function(e){var t=dn(e,We);return pu(t)?Pr:t.substr(7).match(bc).map(Ye)},oo=function(e,t){var n=e._gsap||ui(e),i=e.style,r=Gl(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Pr:r):(r===Pr&&!e.offsetParent&&e!==Wi&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Wi.appendChild(e)),r=Gl(e),l?i.display=l:Cr(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Wi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ga=function(e,t,n,i,r,a){var s=e._gsap,l=r||oo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,d=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],M=l[5],y=t.split(" "),S=parseFloat(y[0])||0,x=parseFloat(y[1])||0,A,P,v,w;n?l!==Pr&&(P=m*p-g*f)&&(v=S*(p/P)+x*(-f/P)+(f*M-p*_)/P,w=S*(-g/P)+x*(m/P)-(m*M-g*_)/P,S=v,x=w):(A=hu(e),S=A.x+(~y[0].indexOf("%")?S/100*A.width:S),x=A.y+(~(y[1]||y[0]).indexOf("%")?x/100*A.height:x)),i||i!==!1&&s.smooth?(_=S-c,M=x-u,s.xOffset=d+(_*m+M*f)-_,s.yOffset=h+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=x,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[an]="0px 0px",a&&(Un(a,s,"xOrigin",c,S),Un(a,s,"yOrigin",u,x),Un(a,s,"xOffset",d,s.xOffset),Un(a,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",S+" "+x)},Lr=function(e,t){var n=e._gsap||new Kc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=dn(e,an)||"0",u,d,h,m,g,f,p,_,M,y,S,x,A,P,v,w,L,G,Y,I,R,B,j,Z,V,J,K,ue,U,$,te,ne;return u=d=h=f=p=_=M=y=S=0,m=g=1,n.svg=!!(e.getCTM&&fu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),i.scale=i.rotate=i.translate="none"),P=oo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Ga(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,P)),x=n.xOrigin||0,A=n.yOrigin||0,P!==Pr&&(G=P[0],Y=P[1],I=P[2],R=P[3],u=B=P[4],d=j=P[5],P.length===6?(m=Math.sqrt(G*G+Y*Y),g=Math.sqrt(R*R+I*I),f=G||Y?Ni(Y,G)*ii:0,M=I||R?Ni(I,R)*ii+f:0,M&&(g*=Math.abs(Math.cos(M*Xi))),n.svg&&(u-=x-(x*G+A*I),d-=A-(x*Y+A*R))):(ne=P[6],$=P[7],K=P[8],ue=P[9],U=P[10],te=P[11],u=P[12],d=P[13],h=P[14],v=Ni(ne,U),p=v*ii,v&&(w=Math.cos(-v),L=Math.sin(-v),Z=B*w+K*L,V=j*w+ue*L,J=ne*w+U*L,K=B*-L+K*w,ue=j*-L+ue*w,U=ne*-L+U*w,te=$*-L+te*w,B=Z,j=V,ne=J),v=Ni(-I,U),_=v*ii,v&&(w=Math.cos(-v),L=Math.sin(-v),Z=G*w-K*L,V=Y*w-ue*L,J=I*w-U*L,te=R*L+te*w,G=Z,Y=V,I=J),v=Ni(Y,G),f=v*ii,v&&(w=Math.cos(v),L=Math.sin(v),Z=G*w+Y*L,V=B*w+j*L,Y=Y*w-G*L,j=j*w-B*L,G=Z,B=V),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=Ye(Math.sqrt(G*G+Y*Y+I*I)),g=Ye(Math.sqrt(j*j+ne*ne)),v=Ni(B,j),M=Math.abs(v)>2e-4?v*ii:0,S=te?1/(te<0?-te:te):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pu(dn(e,We)),Z&&e.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ye(m),n.scaleY=Ye(g),n.rotation=Ye(f)+s,n.rotationX=Ye(p)+s,n.rotationY=Ye(_)+s,n.skewX=M+s,n.skewY=y+s,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[an]=gs(c)),n.xOffset=n.yOffset=0,n.force3D=Bt.force3D,n.renderTransform=n.svg?B_:uu?mu:U_,n.uncache=0,n},gs=function(e){return(e=e.split(" "))[0]+" "+e[1]},ma=function(e,t,n){var i=pt(t);return Ye(parseFloat(t)+parseFloat(Wn(e,"x",n+"px",i)))+i},U_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mu(e,t)},Qn="0deg",fr="0px",ei=") ",mu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,S="",x=_==="auto"&&e&&e!==1||_===!0;if(y&&(d!==Qn||u!==Qn)){var A=parseFloat(u)*Xi,P=Math.sin(A),v=Math.cos(A),w;A=parseFloat(d)*Xi,w=Math.cos(A),a=ma(M,a,P*w*-y),s=ma(M,s,-Math.sin(A)*-y),l=ma(M,l,v*w*-y+y)}p!==fr&&(S+="perspective("+p+ei),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(x||a!==fr||s!==fr||l!==fr)&&(S+=l!==fr||x?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ei),c!==Qn&&(S+="rotate("+c+ei),u!==Qn&&(S+="rotateY("+u+ei),d!==Qn&&(S+="rotateX("+d+ei),(h!==Qn||m!==Qn)&&(S+="skew("+h+", "+m+ei),(g!==1||f!==1)&&(S+="scale("+g+", "+f+ei),M.style[We]=S||"translate(0, 0)"},B_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(a),S=parseFloat(s),x,A,P,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xi,c*=Xi,x=Math.cos(l)*d,A=Math.sin(l)*d,P=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Xi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),P*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,A*=w)),x=Ye(x),A=Ye(A),P=Ye(P),v=Ye(v)):(x=d,v=h,A=P=0),(y&&!~(a+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(y=Wn(m,"x",a,"px"),S=Wn(m,"y",s,"px")),(g||f||p||_)&&(y=Ye(y+g-(g*x+f*P)+p),S=Ye(S+f-(g*A+f*v)+_)),(i||r)&&(w=m.getBBox(),y=Ye(y+i/100*w.width),S=Ye(S+r/100*w.height)),w="matrix("+x+","+A+","+P+","+v+","+y+","+S+")",m.setAttribute("transform",w),M&&(m.style[We]=w)},k_=function(e,t,n,i,r){var a=360,s=lt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ii:1),c=l-i,u=i+c+"deg",d,h;return s&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Nl)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Nl)%a-~~(c/a)*a)),e._pt=h=new Lt(e._pt,t,n,i,c,b_),h.e=u,h.u="deg",e._props.push(n),h},Vl=function(e,t){for(var n in t)e[n]=t[n];return e},G_=function(e,t,n){var i=Vl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,d,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[We]=t,s=Lr(n,1),Cr(n,We),n.setAttribute("transform",c)):(c=getComputedStyle(n)[We],a[We]=t,s=Lr(n,1),a[We]=c);for(l in Ln)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=pt(c),g=pt(u),d=m!==g?Wn(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Lt(e._pt,s,l,d,h-d,Ua),e._pt.u=g||0,e._props.push(l));Vl(s,i)};Pt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});ms[e>1?"border"+o:o]=function(s,l,c,u,d){var h,m;if(arguments.length<4)return h=a.map(function(g){return wn(s,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,f){return m[g]=h[f]=h[f]||h[(f-1)/2|0]}),s.init(l,m,d)}});var gu={name:"css",register:ka,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,d,h,m,g,f,p,_,M,y,S,x,A,P,v;ro||ka(),this.styles=this.styles||cu(e),v=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(Nt[f]&&Jc(f,t,n,i,e,r)))){if(m=typeof u,g=ms[f],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Er(u)),g)g(this,e,f,u,n)&&(P=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Gn.lastIndex=0,Gn.test(c)||(p=pt(c),_=pt(u)),_?p!==_&&(c=Wn(e,f,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,f),a.push(f),v.push(f,0,s[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],lt(c)&&~c.indexOf("random(")&&(c=Er(c)),pt(c+"")||(c+=Bt.units[f]||pt(wn(e,f))||""),(c+"").charAt(1)==="="&&(c=wn(e,f))):c=wn(e,f),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),f in En&&(f==="autoAlpha"&&(h===1&&wn(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,s.visibility),Un(this,s,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=En[f],~f.indexOf(",")&&(f=f.split(",")[0]))),y=f in Ln,y){if(this.styles.save(f),S||(x=e._gsap,x.renderTransform&&!t.parseTransform||Lr(e,t.parseTransform),A=t.smoothOrigin!==!1&&x.smooth,S=this._pt=new Lt(this._pt,s,We,0,1,x.renderTransform,x,0,-1),S.dep=1),f==="scale")this._pt=new Lt(this._pt,x,"scaleY",x.scaleY,(M?Hi(x.scaleY,M+d):d)-x.scaleY||0,Ua),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(an,0,s[an]),u=N_(u),x.svg?Ga(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&Un(this,x,"zOrigin",x.zOrigin,_),Un(this,s,f,gs(c),gs(u)));continue}else if(f==="svgOrigin"){Ga(e,u,1,A,0,this);continue}else if(f in du){k_(this,x,f,h,M?Hi(h,M+u):u);continue}else if(f==="smoothOrigin"){Un(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){G_(this,u,e);continue}}else f in s||(f=nr(f)||f);if(y||(d||d===0)&&(h||h===0)&&!S_.test(u)&&f in s)p=(c+"").substr((h+"").length),d||(d=0),_=pt(u)||(f in Bt.units?Bt.units[f]:p),p!==_&&(h=Wn(e,f,c,_)),this._pt=new Lt(this._pt,y?x:s,f,h,(M?Hi(h,M+d):d)-h,!y&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?T_:Ua),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=w_);else if(f in s)F_.call(this,e,f,c,M?M+u:u);else if(f in e)this.add(e,f,c||e[f],M?M+u:u,i,r);else if(f!=="parseTransform"){Za(f,u);continue}y||(f in s?v.push(f,0,s[f]):v.push(f,1,c||e[f])),a.push(f)}}P&&ru(this)},render:function(e,t){if(t.tween._time||!so())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wn,aliases:En,getSetter:function(e,t,n){var i=En[t];return i&&i.indexOf(",")<0&&(t=i),t in Ln&&t!==an&&(e._gsap.x||wn(e,"x"))?n&&Fl===n?t==="scale"?P_:C_:(Fl=n||{})&&(t==="scale"?L_:D_):e.style&&!Ya(e.style[t])?E_:~t.indexOf("-")?A_:no(e,t)},core:{_removeProperty:Cr,_getMatrix:oo}};Gt.utils.checkPrefix=nr;Gt.core.getStyleSaver=cu;(function(o,e,t,n){var i=Pt(o+","+e+","+t,function(r){Ln[r]=1});Pt(e,function(r){Bt.units[r]="deg",du[r]=1}),En[i[13]]=o+","+e,Pt(n,function(r){var a=r.split(":");En[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Bt.units[o]="px"});Gt.registerPlugin(gu);var _u=Gt.registerPlugin(gu)||Gt;_u.core.Tween;const V_="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",H_="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",W_="varying vec3 vertexNormal;void main(){vertexNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",X_="varying vec3 vertexNormal;void main(){float intensity=pow(0.8-dot(vertexNormal,vec3(0,0,1.5)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}",Hl={type:"change"},ga={type:"start"},Wl={type:"end"};class q_ extends xi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",St),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hl),n.update(),r=i.NONE},this.update=function(){const C=new z,O=new gi().setFromUnitVectors(e.up,new z(0,1,0)),oe=O.clone().invert(),he=new z,ae=new gi,pe=2*Math.PI;return function(){const Ae=n.object.position;C.copy(Ae).sub(n.target),C.applyQuaternion(O),s.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(P()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pe=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(ze)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),ze<-Math.PI?ze+=pe:ze>Math.PI&&(ze-=pe),Pe<=ze?s.theta=Math.max(Pe,Math.min(ze,s.theta)):s.theta=s.theta>(Pe+ze)/2?Math.max(Pe,s.theta):Math.min(ze,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(s),C.applyQuaternion(oe),Ae.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||he.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a?(n.dispatchEvent(Hl),he.copy(n.object.position),ae.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",it),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",Vt),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new El,l=new El;let c=1;const u=new z;let d=!1;const h=new Ee,m=new Ee,g=new Ee,f=new Ee,p=new Ee,_=new Ee,M=new Ee,y=new Ee,S=new Ee,x=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function L(C){l.phi-=C}const G=function(){const C=new z;return function(oe,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-oe),u.add(C)}}(),Y=function(){const C=new z;return function(oe,he){n.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(oe),u.add(C)}}(),I=function(){const C=new z;return function(oe,he){const ae=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;C.copy(pe).sub(n.target);let fe=C.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),G(2*oe*fe/ae.clientHeight,n.object.matrix),Y(2*he*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),Y(he*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C){h.set(C.clientX,C.clientY)}function Z(C){M.set(C.clientX,C.clientY)}function V(C){f.set(C.clientX,C.clientY)}function J(C){m.set(C.clientX,C.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),h.copy(m),n.update()}function K(C){y.set(C.clientX,C.clientY),S.subVectors(y,M),S.y>0?R(v()):S.y<0&&B(v()),M.copy(y),n.update()}function ue(C){p.set(C.clientX,C.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),I(_.x,_.y),f.copy(p),n.update()}function U(C){C.deltaY<0?B(v()):C.deltaY>0&&R(v()),n.update()}function $(C){let O=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function te(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);h.set(C,O)}}function ne(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),O=.5*(x[0].pageY+x[1].pageY);f.set(C,O)}}function k(){const C=x[0].pageX-x[1].pageX,O=x[0].pageY-x[1].pageY,oe=Math.sqrt(C*C+O*O);M.set(0,oe)}function ye(){n.enableZoom&&k(),n.enablePan&&ne()}function me(){n.enableZoom&&k(),n.enableRotate&&te()}function de(C){if(x.length==1)m.set(C.pageX,C.pageY);else{const oe=ve(C),he=.5*(C.pageX+oe.x),ae=.5*(C.pageY+oe.y);m.set(he,ae)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),L(2*Math.PI*g.y/O.clientHeight),h.copy(m)}function le(C){if(x.length===1)p.set(C.pageX,C.pageY);else{const O=ve(C),oe=.5*(C.pageX+O.x),he=.5*(C.pageY+O.y);p.set(oe,he)}_.subVectors(p,f).multiplyScalar(n.panSpeed),I(_.x,_.y),f.copy(p)}function Ne(C){const O=ve(C),oe=C.pageX-O.x,he=C.pageY-O.y,ae=Math.sqrt(oe*oe+he*he);y.set(0,ae),S.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),R(S.y),M.copy(y)}function Se(C){n.enableZoom&&Ne(C),n.enablePan&&le(C)}function xe(C){n.enableZoom&&Ne(C),n.enableRotate&&de(C)}function it(C){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",je)),ee(C),C.pointerType==="touch"?E(C):qe(C))}function ht(C){n.enabled!==!1&&(C.pointerType==="touch"?b(C):Oe(C))}function je(C){ie(C),x.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Wl),r=i.NONE}function _t(C){ie(C)}function qe(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case yi.DOLLY:if(n.enableZoom===!1)return;Z(C),r=i.DOLLY;break;case yi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;j(C),r=i.ROTATE}break;case yi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;j(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ga)}function Oe(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;ue(C);break}}function Vt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(ga),U(C),n.dispatchEvent(Wl))}function St(C){n.enabled===!1||n.enablePan===!1||$(C)}function E(C){switch(se(C),x.length){case 1:switch(n.touches.ONE){case Mi.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case Mi.PAN:if(n.enablePan===!1)return;ne(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(),r=i.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ga)}function b(C){switch(se(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(C),n.update();break;default:r=i.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function ee(C){x.push(C)}function ie(C){delete A[C.pointerId];for(let O=0;O<x.length;O++)if(x[O].pointerId==C.pointerId){x.splice(O,1);return}}function se(C){let O=A[C.pointerId];O===void 0&&(O=new Ee,A[C.pointerId]=O),O.set(C.pageX,C.pageY)}function ve(C){const O=C.pointerId===x[0].pointerId?x[1]:x[0];return A[O.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",it),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",Vt,{passive:!1}),this.update()}}class Y_{constructor(){on(this,"container");on(this,"scene");on(this,"camera");on(this,"renderer");on(this,"mesh");on(this,"atmosphere");on(this,"stars");on(this,"mouse");on(this,"group")}init(){this.container=document.querySelector(".canvas-container"),this.scene=new Sg,this.camera=new jt(75,this.container.offsetWidth/this.container.offsetHeight,.1,1e3),this.renderer=new gc({antialias:!0,canvas:document.querySelector(".three")}),this.mouse={x:void 0,y:void 0},this.renderer.setClearColor(new Ge("#111"),1),this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),this.renderer.setPixelRatio(window.devicePixelRatio*2);const e=new Xa(5,50,50),t=new Cn({vertexShader:V_,fragmentShader:H_,uniforms:{globeTexture:{value:new Ag().load("./globe.jpeg")}}});this.mesh=new hn(e,t),this.group=new mr,this.group.add(this.mesh);const n=new Cn({vertexShader:W_,fragmentShader:X_,transparent:!0,blending:_a,side:Tt});this.atmosphere=new hn(e,n),this.atmosphere.scale.set(1.1,1.1,1.1);const i=new mn,r=new _c({color:"#fff"}),a=[];for(let l=0;l<3e3;l++){const c=(Math.random()-.5)*2e3,u=(Math.random()-.5)*2e3,d=-Math.random()*2e3;a.push(c,u,d)}i.setAttribute("position",new sn(a,3)),this.stars=new bg(i,r),this.scene.add(this.group,this.atmosphere,this.stars),this.camera.position.z=20;const s=()=>{var l,c,u,d;this.renderer.render(this.scene,this.camera),this.mesh.rotation.y+=.002,_u.to(this.group.rotation,{y:(l=this.mouse)!=null&&l.x?((c=this.mouse)==null?void 0:c.x)*.5:0,x:(u=this.mouse)!=null&&u.y?((d=this.mouse)==null?void 0:d.y)*-.5:0,duration:2}),requestAnimationFrame(s)};s(),window.addEventListener("resize",()=>{this.updateRenderer(),this.camera.aspect=this.container.offsetWidth/this.container.offsetHeight,this.camera.updateProjectionMatrix()}),window.addEventListener("mousemove",l=>{this.mouse.x=l.clientX/innerWidth*2-1,this.mouse.y=-(l.clientY/innerHeight)*2+1}),new q_(this.camera,this.renderer.domElement)}updateRenderer(){this.renderer.setSize(this.container.offsetWidth,this.container.offsetHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}const j_=new Y_;j_.init();
