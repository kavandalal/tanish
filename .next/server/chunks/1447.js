exports.id = 1447;
exports.ids = [1447];
exports.modules = {

/***/ 66468:
/***/ (function(module) {

/**
 * Browser Image Compression
 * v2.0.2
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";function _mergeNamespaces(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(e)}function copyExifWithoutOrientation(e,t){return new Promise((function(r,i){let o;return getApp1Segment(e).then((function(e){try{return o=e,r(new Blob([t.slice(0,2),o,t.slice(2)],{type:"image/jpeg"}))}catch(e){return i(e)}}),i)}))}const getApp1Segment=e=>new Promise(((t,r)=>{const i=new FileReader;i.addEventListener("load",(({target:{result:e}})=>{const i=new DataView(e);let o=0;if(65496!==i.getUint16(o))return r("not a valid JPEG");for(o+=2;;){const a=i.getUint16(o);if(65498===a)break;const s=i.getUint16(o+2);if(65505===a&&1165519206===i.getUint32(o+4)){const a=o+10;let f;switch(i.getUint16(a)){case 18761:f=!0;break;case 19789:f=!1;break;default:return r("TIFF header contains invalid endian")}if(42!==i.getUint16(a+2,f))return r("TIFF header contains invalid version");const l=i.getUint32(a+4,f),c=a+l+2+12*i.getUint16(a+l,f);for(let e=a+l+2;e<c;e+=12){if(274==i.getUint16(e,f)){if(3!==i.getUint16(e+2,f))return r("Orientation data type is invalid");if(1!==i.getUint32(e+4,f))return r("Orientation data count is invalid");i.setUint16(e+8,1,f);break}}return t(e.slice(o,o+2+s))}o+=2+s}return t(new Blob)})),i.readAsArrayBuffer(e)}));var e={};!function(e){var t,r,UZIP={};e.exports=UZIP,UZIP.parse=function(e,t){for(var r=UZIP.bin.readUshort,i=UZIP.bin.readUint,o=0,a={},s=new Uint8Array(e),f=s.length-4;101010256!=i(s,f);)f--;o=f;o+=4;var l=r(s,o+=4);r(s,o+=2);var c=i(s,o+=2),u=i(s,o+=4);o+=4,o=u;for(var h=0;h<l;h++){i(s,o),o+=4,o+=4,o+=4,i(s,o+=4);c=i(s,o+=4);var d=i(s,o+=4),A=r(s,o+=4),g=r(s,o+2),p=r(s,o+4);o+=6;var m=i(s,o+=8);o+=4,o+=A+g+p,UZIP._readLocal(s,m,a,c,d,t)}return a},UZIP._readLocal=function(e,t,r,i,o,a){var s=UZIP.bin.readUshort,f=UZIP.bin.readUint;f(e,t),s(e,t+=4),s(e,t+=2);var l=s(e,t+=2);f(e,t+=2),f(e,t+=4),t+=4;var c=s(e,t+=8),u=s(e,t+=2);t+=2;var h=UZIP.bin.readUTF8(e,t,c);if(t+=c,t+=u,a)r[h]={size:o,csize:i};else{var d=new Uint8Array(e.buffer,t);if(0==l)r[h]=new Uint8Array(d.buffer.slice(t,t+i));else{if(8!=l)throw"unknown compression method: "+l;var A=new Uint8Array(o);UZIP.inflateRaw(d,A),r[h]=A}}},UZIP.inflateRaw=function(e,t){return UZIP.F.inflate(e,t)},UZIP.inflate=function(e,t){return e[0],e[1],UZIP.inflateRaw(new Uint8Array(e.buffer,e.byteOffset+2,e.length-6),t)},UZIP.deflate=function(e,t){null==t&&(t={level:6});var r=0,i=new Uint8Array(50+Math.floor(1.1*e.length));i[r]=120,i[r+1]=156,r+=2,r=UZIP.F.deflateRaw(e,i,r,t.level);var o=UZIP.adler(e,0,e.length);return i[r+0]=o>>>24&255,i[r+1]=o>>>16&255,i[r+2]=o>>>8&255,i[r+3]=o>>>0&255,new Uint8Array(i.buffer,0,r+4)},UZIP.deflateRaw=function(e,t){null==t&&(t={level:6});var r=new Uint8Array(50+Math.floor(1.1*e.length)),i=UZIP.F.deflateRaw(e,r,i,t.level);return new Uint8Array(r.buffer,0,i)},UZIP.encode=function(e,t){null==t&&(t=!1);var r=0,i=UZIP.bin.writeUint,o=UZIP.bin.writeUshort,a={};for(var s in e){var f=!UZIP._noNeed(s)&&!t,l=e[s],c=UZIP.crc.crc(l,0,l.length);a[s]={cpr:f,usize:l.length,crc:c,file:f?UZIP.deflateRaw(l):l}}for(var s in a)r+=a[s].file.length+30+46+2*UZIP.bin.sizeUTF8(s);r+=22;var u=new Uint8Array(r),h=0,d=[];for(var s in a){var A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,0)}var g=0,p=h;for(var s in a){A=a[s];d.push(h),h=UZIP._writeHeader(u,h,s,A,1,d[g++])}var m=h-p;return i(u,h,101010256),h+=4,o(u,h+=4,g),o(u,h+=2,g),i(u,h+=2,m),i(u,h+=4,p),h+=4,h+=2,u.buffer},UZIP._noNeed=function(e){var t=e.split(".").pop().toLowerCase();return-1!="png,jpg,jpeg,zip".indexOf(t)},UZIP._writeHeader=function(e,t,r,i,o,a){var s=UZIP.bin.writeUint,f=UZIP.bin.writeUshort,l=i.file;return s(e,t,0==o?67324752:33639248),t+=4,1==o&&(t+=2),f(e,t,20),f(e,t+=2,0),f(e,t+=2,i.cpr?8:0),s(e,t+=2,0),s(e,t+=4,i.crc),s(e,t+=4,l.length),s(e,t+=4,i.usize),f(e,t+=4,UZIP.bin.sizeUTF8(r)),f(e,t+=2,0),t+=2,1==o&&(t+=2,t+=2,s(e,t+=6,a),t+=4),t+=UZIP.bin.writeUTF8(e,t,r),0==o&&(e.set(l,t),t+=l.length),t},UZIP.crc={table:function(){for(var e=new Uint32Array(256),t=0;t<256;t++){for(var r=t,i=0;i<8;i++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r}return e}(),update:function(e,t,r,i){for(var o=0;o<i;o++)e=UZIP.crc.table[255&(e^t[r+o])]^e>>>8;return e},crc:function(e,t,r){return 4294967295^UZIP.crc.update(4294967295,e,t,r)}},UZIP.adler=function(e,t,r){for(var i=1,o=0,a=t,s=t+r;a<s;){for(var f=Math.min(a+5552,s);a<f;)o+=i+=e[a++];i%=65521,o%=65521}return o<<16|i},UZIP.bin={readUshort:function(e,t){return e[t]|e[t+1]<<8},writeUshort:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255},readUint:function(e,t){return 16777216*e[t+3]+(e[t+2]<<16|e[t+1]<<8|e[t])},writeUint:function(e,t,r){e[t]=255&r,e[t+1]=r>>8&255,e[t+2]=r>>16&255,e[t+3]=r>>24&255},readASCII:function(e,t,r){for(var i="",o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII:function(e,t,r){for(var i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i)},pad:function(e){return e.length<2?"0"+e:e},readUTF8:function(e,t,r){for(var i,o="",a=0;a<r;a++)o+="%"+UZIP.bin.pad(e[t+a].toString(16));try{i=decodeURIComponent(o)}catch(i){return UZIP.bin.readASCII(e,t,r)}return i},writeUTF8:function(e,t,r){for(var i=r.length,o=0,a=0;a<i;a++){var s=r.charCodeAt(a);if(0==(4294967168&s))e[t+o]=s,o++;else if(0==(4294965248&s))e[t+o]=192|s>>6,e[t+o+1]=128|s>>0&63,o+=2;else if(0==(4294901760&s))e[t+o]=224|s>>12,e[t+o+1]=128|s>>6&63,e[t+o+2]=128|s>>0&63,o+=3;else{if(0!=(4292870144&s))throw"e";e[t+o]=240|s>>18,e[t+o+1]=128|s>>12&63,e[t+o+2]=128|s>>6&63,e[t+o+3]=128|s>>0&63,o+=4}}return o},sizeUTF8:function(e){for(var t=e.length,r=0,i=0;i<t;i++){var o=e.charCodeAt(i);if(0==(4294967168&o))r++;else if(0==(4294965248&o))r+=2;else if(0==(4294901760&o))r+=3;else{if(0!=(4292870144&o))throw"e";r+=4}}return r}},UZIP.F={},UZIP.F.deflateRaw=function(e,t,r,i){var o=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][i],a=UZIP.F.U,s=UZIP.F._goodIndex;UZIP.F._hash;var f=UZIP.F._putsE,l=0,c=r<<3,u=0,h=e.length;if(0==i){for(;l<h;){f(t,c,l+(_=Math.min(65535,h-l))==h?1:0),c=UZIP.F._copyExact(e,l,_,t,c+8),l+=_}return c>>>3}var d=a.lits,A=a.strt,g=a.prev,p=0,m=0,w=0,v=0,b=0,y=0;for(h>2&&(A[y=UZIP.F._hash(e,0)]=0),l=0;l<h;l++){if(b=y,l+1<h-2){y=UZIP.F._hash(e,l+1);var E=l+1&32767;g[E]=A[y],A[y]=E}if(u<=l){(p>14e3||m>26697)&&h-l>100&&(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(l==h-1||u==h?1:0,d,p,v,e,w,l-w,t,c),p=m=v=0,w=l);var F=0;l<h-2&&(F=UZIP.F._bestMatch(e,l,g,b,Math.min(o[2],h-l),o[3]));var _=F>>>16,B=65535&F;if(0!=F){B=65535&F;var U=s(_=F>>>16,a.of0);a.lhst[257+U]++;var C=s(B,a.df0);a.dhst[C]++,v+=a.exb[U]+a.dxb[C],d[p]=_<<23|l-u,d[p+1]=B<<16|U<<8|C,p+=2,u=l+_}else a.lhst[e[l]]++;m++}}for(w==l&&0!=e.length||(u<l&&(d[p]=l-u,p+=2,u=l),c=UZIP.F._writeBlock(1,d,p,v,e,w,l-w,t,c),p=0,m=0,p=m=v=0,w=l);0!=(7&c);)c++;return c>>>3},UZIP.F._bestMatch=function(e,t,r,i,o,a){var s=32767&t,f=r[s],l=s-f+32768&32767;if(f==s||i!=UZIP.F._hash(e,t-l))return 0;for(var c=0,u=0,h=Math.min(32767,t);l<=h&&0!=--a&&f!=s;){if(0==c||e[t+c]==e[t+c-l]){var d=UZIP.F._howLong(e,t,l);if(d>c){if(u=l,(c=d)>=o)break;l+2<d&&(d=l+2);for(var A=0,g=0;g<d-2;g++){var p=t-l+g+32768&32767,m=p-r[p]+32768&32767;m>A&&(A=m,f=p)}}}l+=(s=f)-(f=r[s])+32768&32767}return c<<16|u},UZIP.F._howLong=function(e,t,r){if(e[t]!=e[t-r]||e[t+1]!=e[t+1-r]||e[t+2]!=e[t+2-r])return 0;var i=t,o=Math.min(e.length,t+258);for(t+=3;t<o&&e[t]==e[t-r];)t++;return t-i},UZIP.F._hash=function(e,t){return(e[t]<<8|e[t+1])+(e[t+2]<<4)&65535},UZIP.saved=0,UZIP.F._writeBlock=function(e,t,r,i,o,a,s,f,l){var c,u,h,d,A,g,p,m,w,v=UZIP.F.U,b=UZIP.F._putsF,y=UZIP.F._putsE;v.lhst[256]++,u=(c=UZIP.F.getTrees())[0],h=c[1],d=c[2],A=c[3],g=c[4],p=c[5],m=c[6],w=c[7];var E=32+(0==(l+3&7)?0:8-(l+3&7))+(s<<3),F=i+UZIP.F.contSize(v.fltree,v.lhst)+UZIP.F.contSize(v.fdtree,v.dhst),_=i+UZIP.F.contSize(v.ltree,v.lhst)+UZIP.F.contSize(v.dtree,v.dhst);_+=14+3*p+UZIP.F.contSize(v.itree,v.ihst)+(2*v.ihst[16]+3*v.ihst[17]+7*v.ihst[18]);for(var B=0;B<286;B++)v.lhst[B]=0;for(B=0;B<30;B++)v.dhst[B]=0;for(B=0;B<19;B++)v.ihst[B]=0;var U=E<F&&E<_?0:F<_?1:2;if(b(f,l,e),b(f,l+1,U),l+=3,0==U){for(;0!=(7&l);)l++;l=UZIP.F._copyExact(o,a,s,f,l)}else{var C,I;if(1==U&&(C=v.fltree,I=v.fdtree),2==U){UZIP.F.makeCodes(v.ltree,u),UZIP.F.revCodes(v.ltree,u),UZIP.F.makeCodes(v.dtree,h),UZIP.F.revCodes(v.dtree,h),UZIP.F.makeCodes(v.itree,d),UZIP.F.revCodes(v.itree,d),C=v.ltree,I=v.dtree,y(f,l,A-257),y(f,l+=5,g-1),y(f,l+=5,p-4),l+=4;for(var Q=0;Q<p;Q++)y(f,l+3*Q,v.itree[1+(v.ordr[Q]<<1)]);l+=3*p,l=UZIP.F._codeTiny(m,v.itree,f,l),l=UZIP.F._codeTiny(w,v.itree,f,l)}for(var M=a,x=0;x<r;x+=2){for(var T=t[x],S=T>>>23,R=M+(8388607&T);M<R;)l=UZIP.F._writeLit(o[M++],C,f,l);if(0!=S){var O=t[x+1],P=O>>16,H=O>>8&255,L=255&O;y(f,l=UZIP.F._writeLit(257+H,C,f,l),S-v.of0[H]),l+=v.exb[H],b(f,l=UZIP.F._writeLit(L,I,f,l),P-v.df0[L]),l+=v.dxb[L],M+=S}}l=UZIP.F._writeLit(256,C,f,l)}return l},UZIP.F._copyExact=function(e,t,r,i,o){var a=o>>>3;return i[a]=r,i[a+1]=r>>>8,i[a+2]=255-i[a],i[a+3]=255-i[a+1],a+=4,i.set(new Uint8Array(e.buffer,t,r),a),o+(r+4<<3)},UZIP.F.getTrees=function(){for(var e=UZIP.F.U,t=UZIP.F._hufTree(e.lhst,e.ltree,15),r=UZIP.F._hufTree(e.dhst,e.dtree,15),i=[],o=UZIP.F._lenCodes(e.ltree,i),a=[],s=UZIP.F._lenCodes(e.dtree,a),f=0;f<i.length;f+=2)e.ihst[i[f]]++;for(f=0;f<a.length;f+=2)e.ihst[a[f]]++;for(var l=UZIP.F._hufTree(e.ihst,e.itree,7),c=19;c>4&&0==e.itree[1+(e.ordr[c-1]<<1)];)c--;return[t,r,l,o,s,c,i,a]},UZIP.F.getSecond=function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(e[r+1]);return t},UZIP.F.nonZero=function(e){for(var t="",r=0;r<e.length;r+=2)0!=e[r+1]&&(t+=(r>>1)+",");return t},UZIP.F.contSize=function(e,t){for(var r=0,i=0;i<t.length;i++)r+=t[i]*e[1+(i<<1)];return r},UZIP.F._codeTiny=function(e,t,r,i){for(var o=0;o<e.length;o+=2){var a=e[o],s=e[o+1];i=UZIP.F._writeLit(a,t,r,i);var f=16==a?2:17==a?3:7;a>15&&(UZIP.F._putsE(r,i,s,f),i+=f)}return i},UZIP.F._lenCodes=function(e,t){for(var r=e.length;2!=r&&0==e[r-1];)r-=2;for(var i=0;i<r;i+=2){var o=e[i+1],a=i+3<r?e[i+3]:-1,s=i+5<r?e[i+5]:-1,f=0==i?-1:e[i-1];if(0==o&&a==o&&s==o){for(var l=i+5;l+2<r&&e[l+2]==o;)l+=2;(c=Math.min(l+1-i>>>1,138))<11?t.push(17,c-3):t.push(18,c-11),i+=2*c-2}else if(o==f&&a==o&&s==o){for(l=i+5;l+2<r&&e[l+2]==o;)l+=2;var c=Math.min(l+1-i>>>1,6);t.push(16,c-3),i+=2*c-2}else t.push(o,0)}return r>>>1},UZIP.F._hufTree=function(e,t,r){var i=[],o=e.length,a=t.length,s=0;for(s=0;s<a;s+=2)t[s]=0,t[s+1]=0;for(s=0;s<o;s++)0!=e[s]&&i.push({lit:s,f:e[s]});var f=i.length,l=i.slice(0);if(0==f)return 0;if(1==f){var c=i[0].lit;l=0==c?1:0;return t[1+(c<<1)]=1,t[1+(l<<1)]=1,1}i.sort((function(e,t){return e.f-t.f}));var u=i[0],h=i[1],d=0,A=1,g=2;for(i[0]={lit:-1,f:u.f+h.f,l:u,r:h,d:0};A!=f-1;)u=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],h=d!=A&&(g==f||i[d].f<i[g].f)?i[d++]:i[g++],i[A++]={lit:-1,f:u.f+h.f,l:u,r:h};var p=UZIP.F.setDepth(i[A-1],0);for(p>r&&(UZIP.F.restrictDepth(l,r,p),p=r),s=0;s<f;s++)t[1+(l[s].lit<<1)]=l[s].d;return p},UZIP.F.setDepth=function(e,t){return-1!=e.lit?(e.d=t,t):Math.max(UZIP.F.setDepth(e.l,t+1),UZIP.F.setDepth(e.r,t+1))},UZIP.F.restrictDepth=function(e,t,r){var i=0,o=1<<r-t,a=0;for(e.sort((function(e,t){return t.d==e.d?e.f-t.f:t.d-e.d})),i=0;i<e.length&&e[i].d>t;i++){var s=e[i].d;e[i].d=t,a+=o-(1<<r-s)}for(a>>>=r-t;a>0;){(s=e[i].d)<t?(e[i].d++,a-=1<<t-s-1):i++}for(;i>=0;i--)e[i].d==t&&a<0&&(e[i].d--,a++);0!=a&&console.log("debt left")},UZIP.F._goodIndex=function(e,t){var r=0;return t[16|r]<=e&&(r|=16),t[8|r]<=e&&(r|=8),t[4|r]<=e&&(r|=4),t[2|r]<=e&&(r|=2),t[1|r]<=e&&(r|=1),r},UZIP.F._writeLit=function(e,t,r,i){return UZIP.F._putsF(r,i,t[e<<1]),i+t[1+(e<<1)]},UZIP.F.inflate=function(e,t){var r=Uint8Array;if(3==e[0]&&0==e[1])return t||new r(0);var i=UZIP.F,o=i._bitsF,a=i._bitsE,s=i._decodeTiny,f=i.makeCodes,l=i.codes2map,c=i._get17,u=i.U,h=null==t;h&&(t=new r(e.length>>>2<<3));for(var d,A,g=0,p=0,m=0,w=0,v=0,b=0,y=0,E=0,F=0;0==g;)if(g=o(e,F,1),p=o(e,F+1,2),F+=3,0!=p){if(h&&(t=UZIP.F._check(t,E+(1<<17))),1==p&&(d=u.flmap,A=u.fdmap,b=511,y=31),2==p){m=a(e,F,5)+257,w=a(e,F+5,5)+1,v=a(e,F+10,4)+4,F+=14;for(var _=0;_<38;_+=2)u.itree[_]=0,u.itree[_+1]=0;var B=1;for(_=0;_<v;_++){var U=a(e,F+3*_,3);u.itree[1+(u.ordr[_]<<1)]=U,U>B&&(B=U)}F+=3*v,f(u.itree,B),l(u.itree,B,u.imap),d=u.lmap,A=u.dmap,F=s(u.imap,(1<<B)-1,m+w,e,F,u.ttree);var C=i._copyOut(u.ttree,0,m,u.ltree);b=(1<<C)-1;var I=i._copyOut(u.ttree,m,w,u.dtree);y=(1<<I)-1,f(u.ltree,C),l(u.ltree,C,d),f(u.dtree,I),l(u.dtree,I,A)}for(;;){var Q=d[c(e,F)&b];F+=15&Q;var M=Q>>>4;if(M>>>8==0)t[E++]=M;else{if(256==M)break;var x=E+M-254;if(M>264){var T=u.ldef[M-257];x=E+(T>>>3)+a(e,F,7&T),F+=7&T}var S=A[c(e,F)&y];F+=15&S;var R=S>>>4,O=u.ddef[R],P=(O>>>4)+o(e,F,15&O);for(F+=15&O,h&&(t=UZIP.F._check(t,E+(1<<17)));E<x;)t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P],t[E]=t[E++-P];E=x}}}else{0!=(7&F)&&(F+=8-(7&F));var H=4+(F>>>3),L=e[H-4]|e[H-3]<<8;h&&(t=UZIP.F._check(t,E+L)),t.set(new r(e.buffer,e.byteOffset+H,L),E),F=H+L<<3,E+=L}return t.length==E?t:t.slice(0,E)},UZIP.F._check=function(e,t){var r=e.length;if(t<=r)return e;var i=new Uint8Array(Math.max(r<<1,t));return i.set(e,0),i},UZIP.F._decodeTiny=function(e,t,r,i,o,a){for(var s=UZIP.F._bitsE,f=UZIP.F._get17,l=0;l<r;){var c=e[f(i,o)&t];o+=15&c;var u=c>>>4;if(u<=15)a[l]=u,l++;else{var h=0,d=0;16==u?(d=3+s(i,o,2),o+=2,h=a[l-1]):17==u?(d=3+s(i,o,3),o+=3):18==u&&(d=11+s(i,o,7),o+=7);for(var A=l+d;l<A;)a[l]=h,l++}}return o},UZIP.F._copyOut=function(e,t,r,i){for(var o=0,a=0,s=i.length>>>1;a<r;){var f=e[a+t];i[a<<1]=0,i[1+(a<<1)]=f,f>o&&(o=f),a++}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},UZIP.F.makeCodes=function(e,t){for(var r,i,o,a,s=UZIP.F.U,f=e.length,l=s.bl_count,c=0;c<=t;c++)l[c]=0;for(c=1;c<f;c+=2)l[e[c]]++;var u=s.next_code;for(r=0,l[0]=0,i=1;i<=t;i++)r=r+l[i-1]<<1,u[i]=r;for(o=0;o<f;o+=2)0!=(a=e[o+1])&&(e[o]=u[a],u[a]++)},UZIP.F.codes2map=function(e,t,r){for(var i=e.length,o=UZIP.F.U.rev15,a=0;a<i;a+=2)if(0!=e[a+1])for(var s=a>>1,f=e[a+1],l=s<<4|f,c=t-f,u=e[a]<<c,h=u+(1<<c);u!=h;){r[o[u]>>>15-t]=l,u++}},UZIP.F.revCodes=function(e,t){for(var r=UZIP.F.U.rev15,i=15-t,o=0;o<e.length;o+=2){var a=e[o]<<t-e[o+1];e[o]=r[a]>>>i}},UZIP.F._putsE=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8},UZIP.F._putsF=function(e,t,r){r<<=7&t;var i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16},UZIP.F._bitsE=function(e,t,r){return(e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},UZIP.F._bitsF=function(e,t,r){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},UZIP.F._get17=function(e,t){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},UZIP.F._get25=function(e,t){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},UZIP.F.U=(t=Uint16Array,r=Uint32Array,{next_code:new t(16),bl_count:new t(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new t(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new r(32),flmap:new t(512),fltree:[],fdmap:new t(32),fdtree:[],lmap:new t(32768),ltree:[],ttree:[],dmap:new t(32768),dtree:[],imap:new t(512),itree:[],rev15:new t(32768),lhst:new r(286),dhst:new r(30),ihst:new r(19),lits:new r(15e3),strt:new t(65536),prev:new t(32768)}),function(){for(var e=UZIP.F.U,t=0;t<32768;t++){var r=t;r=(4278255360&(r=(4042322160&(r=(3435973836&(r=(2863311530&r)>>>1|(1431655765&r)<<1))>>>2|(858993459&r)<<2))>>>4|(252645135&r)<<4))>>>8|(16711935&r)<<8,e.rev15[t]=(r>>>16|r<<16)>>>17}function pushV(e,t,r){for(;0!=t--;)e.push(0,r)}for(t=0;t<32;t++)e.ldef[t]=e.of0[t]<<3|e.exb[t],e.ddef[t]=e.df0[t]<<4|e.dxb[t];pushV(e.fltree,144,8),pushV(e.fltree,112,9),pushV(e.fltree,24,7),pushV(e.fltree,8,8),UZIP.F.makeCodes(e.fltree,9),UZIP.F.codes2map(e.fltree,9,e.flmap),UZIP.F.revCodes(e.fltree,9),pushV(e.fdtree,32,5),UZIP.F.makeCodes(e.fdtree,5),UZIP.F.codes2map(e.fdtree,5,e.fdmap),UZIP.F.revCodes(e.fdtree,5),pushV(e.itree,19,0),pushV(e.ltree,286,0),pushV(e.dtree,30,0),pushV(e.ttree,320,0)}()}({get exports(){return e},set exports(t){e=t}});var UZIP=_mergeNamespaces({__proto__:null,default:e},[e]);const UPNG=function(){var e={nextZero(e,t){for(;0!=e[t];)t++;return t},readUshort:(e,t)=>e[t]<<8|e[t+1],writeUshort(e,t,r){e[t]=r>>8&255,e[t+1]=255&r},readUint:(e,t)=>16777216*e[t]+(e[t+1]<<16|e[t+2]<<8|e[t+3]),writeUint(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},readASCII(e,t,r){let i="";for(let o=0;o<r;o++)i+=String.fromCharCode(e[t+o]);return i},writeASCII(e,t,r){for(let i=0;i<r.length;i++)e[t+i]=r.charCodeAt(i)},readBytes(e,t,r){const i=[];for(let o=0;o<r;o++)i.push(e[t+o]);return i},pad:e=>e.length<2?`0${e}`:e,readUTF8(t,r,i){let o,a="";for(let o=0;o<i;o++)a+=`%${e.pad(t[r+o].toString(16))}`;try{o=decodeURIComponent(a)}catch(o){return e.readASCII(t,r,i)}return o}};function decodeImage(t,r,i,o){const a=r*i,s=_getBPP(o),f=Math.ceil(r*s/8),l=new Uint8Array(4*a),c=new Uint32Array(l.buffer),{ctype:u}=o,{depth:h}=o,d=e.readUshort;if(6==u){const e=a<<2;if(8==h)for(var A=0;A<e;A+=4)l[A]=t[A],l[A+1]=t[A+1],l[A+2]=t[A+2],l[A+3]=t[A+3];if(16==h)for(A=0;A<e;A++)l[A]=t[A<<1]}else if(2==u){const e=o.tabs.tRNS;if(null==e){if(8==h)for(A=0;A<a;A++){var g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g]}if(16==h)for(A=0;A<a;A++){g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g]}}else{var p=e[0];const r=e[1],i=e[2];if(8==h)for(A=0;A<a;A++){var m=A<<2;g=3*A;c[A]=255<<24|t[g+2]<<16|t[g+1]<<8|t[g],t[g]==p&&t[g+1]==r&&t[g+2]==i&&(l[m+3]=0)}if(16==h)for(A=0;A<a;A++){m=A<<2,g=6*A;c[A]=255<<24|t[g+4]<<16|t[g+2]<<8|t[g],d(t,g)==p&&d(t,g+2)==r&&d(t,g+4)==i&&(l[m+3]=0)}}}else if(3==u){const e=o.tabs.PLTE,s=o.tabs.tRNS,c=s?s.length:0;if(1==h)for(var w=0;w<i;w++){var v=w*f,b=w*r;for(A=0;A<r;A++){m=b+A<<2;var y=3*(E=t[v+(A>>3)]>>7-((7&A)<<0)&1);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255}}if(2==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>2)]>>6-((3&A)<<1)&3);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255}if(4==h)for(w=0;w<i;w++)for(v=w*f,b=w*r,A=0;A<r;A++){m=b+A<<2,y=3*(E=t[v+(A>>1)]>>4-((1&A)<<2)&15);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255}if(8==h)for(A=0;A<a;A++){var E;m=A<<2,y=3*(E=t[A]);l[m]=e[y],l[m+1]=e[y+1],l[m+2]=e[y+2],l[m+3]=E<c?s[E]:255}}else if(4==u){if(8==h)for(A=0;A<a;A++){m=A<<2;var F=t[_=A<<1];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+1]}if(16==h)for(A=0;A<a;A++){var _;m=A<<2,F=t[_=A<<2];l[m]=F,l[m+1]=F,l[m+2]=F,l[m+3]=t[_+2]}}else if(0==u)for(p=o.tabs.tRNS?o.tabs.tRNS:-1,w=0;w<i;w++){const e=w*f,i=w*r;if(1==h)for(var B=0;B<r;B++){var U=(F=255*(t[e+(B>>>3)]>>>7-(7&B)&1))==255*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F}else if(2==h)for(B=0;B<r;B++){U=(F=85*(t[e+(B>>>2)]>>>6-((3&B)<<1)&3))==85*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F}else if(4==h)for(B=0;B<r;B++){U=(F=17*(t[e+(B>>>1)]>>>4-((1&B)<<2)&15))==17*p?0:255;c[i+B]=U<<24|F<<16|F<<8|F}else if(8==h)for(B=0;B<r;B++){U=(F=t[e+B])==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F}else if(16==h)for(B=0;B<r;B++){F=t[e+(B<<1)],U=d(t,e+(B<<1))==p?0:255;c[i+B]=U<<24|F<<16|F<<8|F}}return l}function _decompress(e,r,i,o){const a=_getBPP(e),s=Math.ceil(i*a/8),f=new Uint8Array((s+1+e.interlace)*o);return r=e.tabs.CgBI?t(r,f):_inflate(r,f),0==e.interlace?r=_filterZero(r,e,0,i,o):1==e.interlace&&(r=function _readInterlace(e,t){const r=t.width,i=t.height,o=_getBPP(t),a=o>>3,s=Math.ceil(r*o/8),f=new Uint8Array(i*s);let l=0;const c=[0,0,4,0,2,0,1],u=[0,4,0,2,0,1,0],h=[8,8,8,4,4,2,2],d=[8,8,4,4,2,2,1];let A=0;for(;A<7;){const p=h[A],m=d[A];let w=0,v=0,b=c[A];for(;b<i;)b+=p,v++;let y=u[A];for(;y<r;)y+=m,w++;const E=Math.ceil(w*o/8);_filterZero(e,t,l,w,v);let F=0,_=c[A];for(;_<i;){let t=u[A],i=l+F*E<<3;for(;t<r;){var g;if(1==o)g=(g=e[i>>3])>>7-(7&i)&1,f[_*s+(t>>3)]|=g<<7-((7&t)<<0);if(2==o)g=(g=e[i>>3])>>6-(7&i)&3,f[_*s+(t>>2)]|=g<<6-((3&t)<<1);if(4==o)g=(g=e[i>>3])>>4-(7&i)&15,f[_*s+(t>>1)]|=g<<4-((1&t)<<2);if(o>=8){const r=_*s+t*a;for(let t=0;t<a;t++)f[r+t]=e[(i>>3)+t]}i+=o,t+=m}F++,_+=p}w*v!=0&&(l+=v*(1+E)),A+=1}return f}(r,e)),r}function _inflate(e,r){return t(new Uint8Array(e.buffer,2,e.length-6),r)}var t=function(){const e={H:{}};return e.H.N=function(t,r){const i=Uint8Array;let o,a,s=0,f=0,l=0,c=0,u=0,h=0,d=0,A=0,g=0;if(3==t[0]&&0==t[1])return r||new i(0);const p=e.H,m=p.b,w=p.e,v=p.R,b=p.n,y=p.A,E=p.Z,F=p.m,_=null==r;for(_&&(r=new i(t.length>>>2<<5));0==s;)if(s=m(t,g,1),f=m(t,g+1,2),g+=3,0!=f){if(_&&(r=e.H.W(r,A+(1<<17))),1==f&&(o=F.J,a=F.h,h=511,d=31),2==f){l=w(t,g,5)+257,c=w(t,g+5,5)+1,u=w(t,g+10,4)+4,g+=14;let e=1;for(var B=0;B<38;B+=2)F.Q[B]=0,F.Q[B+1]=0;for(B=0;B<u;B++){const r=w(t,g+3*B,3);F.Q[1+(F.X[B]<<1)]=r,r>e&&(e=r)}g+=3*u,b(F.Q,e),y(F.Q,e,F.u),o=F.w,a=F.d,g=v(F.u,(1<<e)-1,l+c,t,g,F.v);const r=p.V(F.v,0,l,F.C);h=(1<<r)-1;const i=p.V(F.v,l,c,F.D);d=(1<<i)-1,b(F.C,r),y(F.C,r,o),b(F.D,i),y(F.D,i,a)}for(;;){const e=o[E(t,g)&h];g+=15&e;const i=e>>>4;if(i>>>8==0)r[A++]=i;else{if(256==i)break;{let e=A+i-254;if(i>264){const r=F.q[i-257];e=A+(r>>>3)+w(t,g,7&r),g+=7&r}const o=a[E(t,g)&d];g+=15&o;const s=o>>>4,f=F.c[s],l=(f>>>4)+m(t,g,15&f);for(g+=15&f;A<e;)r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l],r[A]=r[A++-l];A=e}}}}else{0!=(7&g)&&(g+=8-(7&g));const o=4+(g>>>3),a=t[o-4]|t[o-3]<<8;_&&(r=e.H.W(r,A+a)),r.set(new i(t.buffer,t.byteOffset+o,a),A),g=o+a<<3,A+=a}return r.length==A?r:r.slice(0,A)},e.H.W=function(e,t){const r=e.length;if(t<=r)return e;const i=new Uint8Array(r<<1);return i.set(e,0),i},e.H.R=function(t,r,i,o,a,s){const f=e.H.e,l=e.H.Z;let c=0;for(;c<i;){const e=t[l(o,a)&r];a+=15&e;const i=e>>>4;if(i<=15)s[c]=i,c++;else{let e=0,t=0;16==i?(t=3+f(o,a,2),a+=2,e=s[c-1]):17==i?(t=3+f(o,a,3),a+=3):18==i&&(t=11+f(o,a,7),a+=7);const r=c+t;for(;c<r;)s[c]=e,c++}}return a},e.H.V=function(e,t,r,i){let o=0,a=0;const s=i.length>>>1;for(;a<r;){const r=e[a+t];i[a<<1]=0,i[1+(a<<1)]=r,r>o&&(o=r),a++}for(;a<s;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return o},e.H.n=function(t,r){const i=e.H.m,o=t.length;let a,s,f;let l;const c=i.j;for(var u=0;u<=r;u++)c[u]=0;for(u=1;u<o;u+=2)c[t[u]]++;const h=i.K;for(a=0,c[0]=0,s=1;s<=r;s++)a=a+c[s-1]<<1,h[s]=a;for(f=0;f<o;f+=2)l=t[f+1],0!=l&&(t[f]=h[l],h[l]++)},e.H.A=function(t,r,i){const o=t.length,a=e.H.m.r;for(let e=0;e<o;e+=2)if(0!=t[e+1]){const o=e>>1,s=t[e+1],f=o<<4|s,l=r-s;let c=t[e]<<l;const u=c+(1<<l);for(;c!=u;){i[a[c]>>>15-r]=f,c++}}},e.H.l=function(t,r){const i=e.H.m.r,o=15-r;for(let e=0;e<t.length;e+=2){const a=t[e]<<r-t[e+1];t[e]=i[a]>>>o}},e.H.M=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8},e.H.I=function(e,t,r){r<<=7&t;const i=t>>>3;e[i]|=r,e[i+1]|=r>>>8,e[i+2]|=r>>>16},e.H.e=function(e,t,r){return(e[t>>>3]|e[1+(t>>>3)]<<8)>>>(7&t)&(1<<r)-1},e.H.b=function(e,t,r){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)&(1<<r)-1},e.H.Z=function(e,t){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16)>>>(7&t)},e.H.i=function(e,t){return(e[t>>>3]|e[1+(t>>>3)]<<8|e[2+(t>>>3)]<<16|e[3+(t>>>3)]<<24)>>>(7&t)},e.H.m=function(){const e=Uint16Array,t=Uint32Array;return{K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}}(),function(){const t=e.H.m;for(var r=0;r<32768;r++){let e=r;e=(2863311530&e)>>>1|(1431655765&e)<<1,e=(3435973836&e)>>>2|(858993459&e)<<2,e=(4042322160&e)>>>4|(252645135&e)<<4,e=(4278255360&e)>>>8|(16711935&e)<<8,t.r[r]=(e>>>16|e<<16)>>>17}function n(e,t,r){for(;0!=t--;)e.push(0,r)}for(r=0;r<32;r++)t.q[r]=t.S[r]<<3|t.T[r],t.c[r]=t.p[r]<<4|t.z[r];n(t._,144,8),n(t._,112,9),n(t._,24,7),n(t._,8,8),e.H.n(t._,9),e.H.A(t._,9,t.J),e.H.l(t._,9),n(t.$,32,5),e.H.n(t.$,5),e.H.A(t.$,5,t.h),e.H.l(t.$,5),n(t.Q,19,0),n(t.C,286,0),n(t.D,30,0),n(t.v,320,0)}(),e.H.N}();function _getBPP(e){return[1,null,3,1,2,null,4][e.ctype]*e.depth}function _filterZero(e,t,r,i,o){let a=_getBPP(t);const s=Math.ceil(i*a/8);let f,l;a=Math.ceil(a/8);let c=e[r],u=0;if(c>1&&(e[r]=[0,0,1][c-2]),3==c)for(u=a;u<s;u++)e[u+1]=e[u+1]+(e[u+1-a]>>>1)&255;for(let t=0;t<o;t++)if(f=r+t*s,l=f+t+1,c=e[l-1],u=0,0==c)for(;u<s;u++)e[f+u]=e[l+u];else if(1==c){for(;u<a;u++)e[f+u]=e[l+u];for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-a]}else if(2==c)for(;u<s;u++)e[f+u]=e[l+u]+e[f+u-s];else if(3==c){for(;u<a;u++)e[f+u]=e[l+u]+(e[f+u-s]>>>1);for(;u<s;u++)e[f+u]=e[l+u]+(e[f+u-s]+e[f+u-a]>>>1)}else{for(;u<a;u++)e[f+u]=e[l+u]+_paeth(0,e[f+u-s],0);for(;u<s;u++)e[f+u]=e[l+u]+_paeth(e[f+u-a],e[f+u-s],e[f+u-a-s])}return e}function _paeth(e,t,r){const i=e+t-r,o=i-e,a=i-t,s=i-r;return o*o<=a*a&&o*o<=s*s?e:a*a<=s*s?t:r}function _IHDR(t,r,i){i.width=e.readUint(t,r),r+=4,i.height=e.readUint(t,r),r+=4,i.depth=t[r],r++,i.ctype=t[r],r++,i.compress=t[r],r++,i.filter=t[r],r++,i.interlace=t[r],r++}function _copyTile(e,t,r,i,o,a,s,f,l){const c=Math.min(t,o),u=Math.min(r,a);let h=0,d=0;for(let r=0;r<u;r++)for(let a=0;a<c;a++)if(s>=0&&f>=0?(h=r*t+a<<2,d=(f+r)*o+s+a<<2):(h=(-f+r)*t-s+a<<2,d=r*o+a<<2),0==l)i[d]=e[h],i[d+1]=e[h+1],i[d+2]=e[h+2],i[d+3]=e[h+3];else if(1==l){var A=e[h+3]*(1/255),g=e[h]*A,p=e[h+1]*A,m=e[h+2]*A,w=i[d+3]*(1/255),v=i[d]*w,b=i[d+1]*w,y=i[d+2]*w;const t=1-A,r=A+w*t,o=0==r?0:1/r;i[d+3]=255*r,i[d+0]=(g+v*t)*o,i[d+1]=(p+b*t)*o,i[d+2]=(m+y*t)*o}else if(2==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];A==w&&g==v&&p==b&&m==y?(i[d]=0,i[d+1]=0,i[d+2]=0,i[d+3]=0):(i[d]=g,i[d+1]=p,i[d+2]=m,i[d+3]=A)}else if(3==l){A=e[h+3],g=e[h],p=e[h+1],m=e[h+2],w=i[d+3],v=i[d],b=i[d+1],y=i[d+2];if(A==w&&g==v&&p==b&&m==y)continue;if(A<220&&w>20)return!1}return!0}return{decode:function decode(r){const i=new Uint8Array(r);let o=8;const a=e,s=a.readUshort,f=a.readUint,l={tabs:{},frames:[]},c=new Uint8Array(i.length);let u,h=0,d=0;const A=[137,80,78,71,13,10,26,10];for(var g=0;g<8;g++)if(i[g]!=A[g])throw"The input is not a PNG file!";for(;o<i.length;){const e=a.readUint(i,o);o+=4;const r=a.readASCII(i,o,4);if(o+=4,"IHDR"==r)_IHDR(i,o,l);else if("iCCP"==r){for(var p=o;0!=i[p];)p++;a.readASCII(i,o,p-o),i[p+1];const s=i.slice(p+2,o+e);let f=null;try{f=_inflate(s)}catch(e){f=t(s)}l.tabs[r]=f}else if("CgBI"==r)l.tabs[r]=i.slice(o,o+4);else if("IDAT"==r){for(g=0;g<e;g++)c[h+g]=i[o+g];h+=e}else if("acTL"==r)l.tabs[r]={num_frames:f(i,o),num_plays:f(i,o+4)},u=new Uint8Array(i.length);else if("fcTL"==r){if(0!=d)(E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height),d=0;const e={x:f(i,o+12),y:f(i,o+16),width:f(i,o+4),height:f(i,o+8)};let t=s(i,o+22);t=s(i,o+20)/(0==t?100:t);const r={rect:e,delay:Math.round(1e3*t),dispose:i[o+24],blend:i[o+25]};l.frames.push(r)}else if("fdAT"==r){for(g=0;g<e-4;g++)u[d+g]=i[o+g+4];d+=e-4}else if("pHYs"==r)l.tabs[r]=[a.readUint(i,o),a.readUint(i,o+4),i[o+8]];else if("cHRM"==r){l.tabs[r]=[];for(g=0;g<8;g++)l.tabs[r].push(a.readUint(i,o+4*g))}else if("tEXt"==r||"zTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});var m=a.nextZero(i,o),w=a.readASCII(i,o,m-o),v=o+e-m-1;if("tEXt"==r)y=a.readASCII(i,m+1,v);else{var b=_inflate(i.slice(m+2,m+2+v));y=a.readUTF8(b,0,b.length)}l.tabs[r][w]=y}else if("iTXt"==r){null==l.tabs[r]&&(l.tabs[r]={});m=0,p=o;m=a.nextZero(i,p);w=a.readASCII(i,p,m-p);const t=i[p=m+1];var y;i[p+1],p+=2,m=a.nextZero(i,p),a.readASCII(i,p,m-p),p=m+1,m=a.nextZero(i,p),a.readUTF8(i,p,m-p);v=e-((p=m+1)-o);if(0==t)y=a.readUTF8(i,p,v);else{b=_inflate(i.slice(p,p+v));y=a.readUTF8(b,0,b.length)}l.tabs[r][w]=y}else if("PLTE"==r)l.tabs[r]=a.readBytes(i,o,e);else if("hIST"==r){const e=l.tabs.PLTE.length/3;l.tabs[r]=[];for(g=0;g<e;g++)l.tabs[r].push(s(i,o+2*g))}else if("tRNS"==r)3==l.ctype?l.tabs[r]=a.readBytes(i,o,e):0==l.ctype?l.tabs[r]=s(i,o):2==l.ctype&&(l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]);else if("gAMA"==r)l.tabs[r]=a.readUint(i,o)/1e5;else if("sRGB"==r)l.tabs[r]=i[o];else if("bKGD"==r)0==l.ctype||4==l.ctype?l.tabs[r]=[s(i,o)]:2==l.ctype||6==l.ctype?l.tabs[r]=[s(i,o),s(i,o+2),s(i,o+4)]:3==l.ctype&&(l.tabs[r]=i[o]);else if("IEND"==r)break;o+=e,a.readUint(i,o),o+=4}var E;return 0!=d&&((E=l.frames[l.frames.length-1]).data=_decompress(l,u.slice(0,d),E.rect.width,E.rect.height)),l.data=_decompress(l,c,l.width,l.height),delete l.compress,delete l.interlace,delete l.filter,l},toRGBA8:function toRGBA8(e){const t=e.width,r=e.height;if(null==e.tabs.acTL)return[decodeImage(e.data,t,r,e).buffer];const i=[];null==e.frames[0].data&&(e.frames[0].data=e.data);const o=t*r*4,a=new Uint8Array(o),s=new Uint8Array(o),f=new Uint8Array(o);for(let c=0;c<e.frames.length;c++){const u=e.frames[c],h=u.rect.x,d=u.rect.y,A=u.rect.width,g=u.rect.height,p=decodeImage(u.data,A,g,e);if(0!=c)for(var l=0;l<o;l++)f[l]=a[l];if(0==u.blend?_copyTile(p,A,g,a,t,r,h,d,0):1==u.blend&&_copyTile(p,A,g,a,t,r,h,d,1),i.push(a.buffer.slice(0)),0==u.dispose);else if(1==u.dispose)_copyTile(s,A,g,a,t,r,h,d,0);else if(2==u.dispose)for(l=0;l<o;l++)a[l]=f[l]}return i},_paeth:_paeth,_copyTile:_copyTile,_bin:e}}();!function(){const{_copyTile:e}=UPNG,{_bin:t}=UPNG,r=UPNG._paeth;var i={table:function(){const e=new Uint32Array(256);for(let t=0;t<256;t++){let r=t;for(let e=0;e<8;e++)1&r?r=3988292384^r>>>1:r>>>=1;e[t]=r}return e}(),update(e,t,r,o){for(let a=0;a<o;a++)e=i.table[255&(e^t[r+a])]^e>>>8;return e},crc:(e,t,r)=>4294967295^i.update(4294967295,e,t,r)};function addErr(e,t,r,i){t[r]+=e[0]*i>>4,t[r+1]+=e[1]*i>>4,t[r+2]+=e[2]*i>>4,t[r+3]+=e[3]*i>>4}function N(e){return Math.max(0,Math.min(255,e))}function D(e,t){const r=e[0]-t[0],i=e[1]-t[1],o=e[2]-t[2],a=e[3]-t[3];return r*r+i*i+o*o+a*a}function dither(e,t,r,i,o,a,s){null==s&&(s=1);const f=i.length,l=[];for(var c=0;c<f;c++){const e=i[c];l.push([e>>>0&255,e>>>8&255,e>>>16&255,e>>>24&255])}for(c=0;c<f;c++){let e=4294967295;for(var u=0,h=0;h<f;h++){var d=D(l[c],l[h]);h!=c&&d<e&&(e=d,u=h)}}const A=new Uint32Array(o.buffer),g=new Int16Array(t*r*4),p=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(c=0;c<p.length;c++)p[c]=255*((p[c]+.5)/16-.5);for(let o=0;o<r;o++)for(let w=0;w<t;w++){var m;c=4*(o*t+w);if(2!=s)m=[N(e[c]+g[c]),N(e[c+1]+g[c+1]),N(e[c+2]+g[c+2]),N(e[c+3]+g[c+3])];else{d=p[4*(3&o)+(3&w)];m=[N(e[c]+d),N(e[c+1]+d),N(e[c+2]+d),N(e[c+3]+d)]}u=0;let v=16777215;for(h=0;h<f;h++){const e=D(m,l[h]);e<v&&(v=e,u=h)}const b=l[u],y=[m[0]-b[0],m[1]-b[1],m[2]-b[2],m[3]-b[3]];1==s&&(w!=t-1&&addErr(y,g,c+4,7),o!=r-1&&(0!=w&&addErr(y,g,c+4*t-4,3),addErr(y,g,c+4*t,5),w!=t-1&&addErr(y,g,c+4*t+4,1))),a[c>>2]=u,A[c>>2]=i[u]}}function _main(e,r,o,a,s){null==s&&(s={});const{crc:f}=i,l=t.writeUint,c=t.writeUshort,u=t.writeASCII;let h=8;const d=e.frames.length>1;let A,g=!1,p=33+(d?20:0);if(null!=s.sRGB&&(p+=13),null!=s.pHYs&&(p+=21),null!=s.iCCP&&(A=pako.deflate(s.iCCP),p+=21+A.length+4),3==e.ctype){for(var m=e.plte.length,w=0;w<m;w++)e.plte[w]>>>24!=255&&(g=!0);p+=8+3*m+4+(g?8+1*m+4:0)}for(var v=0;v<e.frames.length;v++){d&&(p+=38),p+=(F=e.frames[v]).cimg.length+12,0!=v&&(p+=4)}p+=12;const b=new Uint8Array(p),y=[137,80,78,71,13,10,26,10];for(w=0;w<8;w++)b[w]=y[w];if(l(b,h,13),h+=4,u(b,h,"IHDR"),h+=4,l(b,h,r),h+=4,l(b,h,o),h+=4,b[h]=e.depth,h++,b[h]=e.ctype,h++,b[h]=0,h++,b[h]=0,h++,b[h]=0,h++,l(b,h,f(b,h-17,17)),h+=4,null!=s.sRGB&&(l(b,h,1),h+=4,u(b,h,"sRGB"),h+=4,b[h]=s.sRGB,h++,l(b,h,f(b,h-5,5)),h+=4),null!=s.iCCP){const e=13+A.length;l(b,h,e),h+=4,u(b,h,"iCCP"),h+=4,u(b,h,"ICC profile"),h+=11,h+=2,b.set(A,h),h+=A.length,l(b,h,f(b,h-(e+4),e+4)),h+=4}if(null!=s.pHYs&&(l(b,h,9),h+=4,u(b,h,"pHYs"),h+=4,l(b,h,s.pHYs[0]),h+=4,l(b,h,s.pHYs[1]),h+=4,b[h]=s.pHYs[2],h++,l(b,h,f(b,h-13,13)),h+=4),d&&(l(b,h,8),h+=4,u(b,h,"acTL"),h+=4,l(b,h,e.frames.length),h+=4,l(b,h,null!=s.loop?s.loop:0),h+=4,l(b,h,f(b,h-12,12)),h+=4),3==e.ctype){l(b,h,3*(m=e.plte.length)),h+=4,u(b,h,"PLTE"),h+=4;for(w=0;w<m;w++){const t=3*w,r=e.plte[w],i=255&r,o=r>>>8&255,a=r>>>16&255;b[h+t+0]=i,b[h+t+1]=o,b[h+t+2]=a}if(h+=3*m,l(b,h,f(b,h-3*m-4,3*m+4)),h+=4,g){l(b,h,m),h+=4,u(b,h,"tRNS"),h+=4;for(w=0;w<m;w++)b[h+w]=e.plte[w]>>>24&255;h+=m,l(b,h,f(b,h-m-4,m+4)),h+=4}}let E=0;for(v=0;v<e.frames.length;v++){var F=e.frames[v];d&&(l(b,h,26),h+=4,u(b,h,"fcTL"),h+=4,l(b,h,E++),h+=4,l(b,h,F.rect.width),h+=4,l(b,h,F.rect.height),h+=4,l(b,h,F.rect.x),h+=4,l(b,h,F.rect.y),h+=4,c(b,h,a[v]),h+=2,c(b,h,1e3),h+=2,b[h]=F.dispose,h++,b[h]=F.blend,h++,l(b,h,f(b,h-30,30)),h+=4);const t=F.cimg;l(b,h,(m=t.length)+(0==v?0:4)),h+=4;const r=h;u(b,h,0==v?"IDAT":"fdAT"),h+=4,0!=v&&(l(b,h,E++),h+=4),b.set(t,h),h+=m,l(b,h,f(b,r,h-r)),h+=4}return l(b,h,0),h+=4,u(b,h,"IEND"),h+=4,l(b,h,f(b,h-4,4)),h+=4,b.buffer}function compressPNG(e,t,r){for(let i=0;i<e.frames.length;i++){const o=e.frames[i];o.rect.width;const a=o.rect.height,s=new Uint8Array(a*o.bpl+a);o.cimg=_filterZero(o.img,a,o.bpp,o.bpl,s,t,r)}}function compress(t,r,i,o,a){const s=a[0],f=a[1],l=a[2],c=a[3],u=a[4],h=a[5];let d=6,A=8,g=255;for(var p=0;p<t.length;p++){const e=new Uint8Array(t[p]);for(var m=e.length,w=0;w<m;w+=4)g&=e[w+3]}const v=255!=g,b=function framize(t,r,i,o,a,s){const f=[];for(var l=0;l<t.length;l++){const h=new Uint8Array(t[l]),A=new Uint32Array(h.buffer);var c;let g=0,p=0,m=r,w=i,v=o?1:0;if(0!=l){const b=s||o||1==l||0!=f[l-2].dispose?1:2;let y=0,E=1e9;for(let e=0;e<b;e++){var u=new Uint8Array(t[l-1-e]);const o=new Uint32Array(t[l-1-e]);let s=r,f=i,c=-1,h=-1;for(let e=0;e<i;e++)for(let t=0;t<r;t++){A[d=e*r+t]!=o[d]&&(t<s&&(s=t),t>c&&(c=t),e<f&&(f=e),e>h&&(h=e))}-1==c&&(s=f=c=h=0),a&&(1==(1&s)&&s--,1==(1&f)&&f--);const v=(c-s+1)*(h-f+1);v<E&&(E=v,y=e,g=s,p=f,m=c-s+1,w=h-f+1)}u=new Uint8Array(t[l-1-y]);1==y&&(f[l-1].dispose=2),c=new Uint8Array(m*w*4),e(u,r,i,c,m,w,-g,-p,0),v=e(h,r,i,c,m,w,-g,-p,3)?1:0,1==v?_prepareDiff(h,r,i,c,{x:g,y:p,width:m,height:w}):e(h,r,i,c,m,w,-g,-p,0)}else c=h.slice(0);f.push({rect:{x:g,y:p,width:m,height:w},img:c,blend:v,dispose:0})}if(o)for(l=0;l<f.length;l++){if(1==(A=f[l]).blend)continue;const e=A.rect,o=f[l-1].rect,s=Math.min(e.x,o.x),c=Math.min(e.y,o.y),u={x:s,y:c,width:Math.max(e.x+e.width,o.x+o.width)-s,height:Math.max(e.y+e.height,o.y+o.height)-c};f[l-1].dispose=1,l-1!=0&&_updateFrame(t,r,i,f,l-1,u,a),_updateFrame(t,r,i,f,l,u,a)}let h=0;if(1!=t.length)for(var d=0;d<f.length;d++){var A;h+=(A=f[d]).rect.width*A.rect.height}return f}(t,r,i,s,f,l),y={},E=[],F=[];if(0!=o){const e=[];for(w=0;w<b.length;w++)e.push(b[w].img.buffer);const t=function concatRGBA(e){let t=0;for(var r=0;r<e.length;r++)t+=e[r].byteLength;const i=new Uint8Array(t);let o=0;for(r=0;r<e.length;r++){const t=new Uint8Array(e[r]),a=t.length;for(let e=0;e<a;e+=4){let r=t[e],a=t[e+1],s=t[e+2];const f=t[e+3];0==f&&(r=a=s=0),i[o+e]=r,i[o+e+1]=a,i[o+e+2]=s,i[o+e+3]=f}o+=a}return i.buffer}(e),r=quantize(t,o);for(w=0;w<r.plte.length;w++)E.push(r.plte[w].est.rgba);let i=0;for(w=0;w<b.length;w++){const e=(B=b[w]).img.length;var _=new Uint8Array(r.inds.buffer,i>>2,e>>2);F.push(_);const t=new Uint8Array(r.abuf,i,e);h&&dither(B.img,B.rect.width,B.rect.height,E,t,_),B.img.set(t),i+=e}}else for(p=0;p<b.length;p++){var B=b[p];const e=new Uint32Array(B.img.buffer);var U=B.rect.width;m=e.length,_=new Uint8Array(m);F.push(_);for(w=0;w<m;w++){const t=e[w];if(0!=w&&t==e[w-1])_[w]=_[w-1];else if(w>U&&t==e[w-U])_[w]=_[w-U];else{let e=y[t];if(null==e&&(y[t]=e=E.length,E.push(t),E.length>=300))break;_[w]=e}}}const C=E.length;C<=256&&0==u&&(A=C<=2?1:C<=4?2:C<=16?4:8,A=Math.max(A,c));for(p=0;p<b.length;p++){(B=b[p]).rect.x,B.rect.y;U=B.rect.width;const e=B.rect.height;let t=B.img;new Uint32Array(t.buffer);let r=4*U,i=4;if(C<=256&&0==u){r=Math.ceil(A*U/8);var I=new Uint8Array(r*e);const o=F[p];for(let t=0;t<e;t++){w=t*r;const e=t*U;if(8==A)for(var Q=0;Q<U;Q++)I[w+Q]=o[e+Q];else if(4==A)for(Q=0;Q<U;Q++)I[w+(Q>>1)]|=o[e+Q]<<4-4*(1&Q);else if(2==A)for(Q=0;Q<U;Q++)I[w+(Q>>2)]|=o[e+Q]<<6-2*(3&Q);else if(1==A)for(Q=0;Q<U;Q++)I[w+(Q>>3)]|=o[e+Q]<<7-1*(7&Q)}t=I,d=3,i=1}else if(0==v&&1==b.length){I=new Uint8Array(U*e*3);const o=U*e;for(w=0;w<o;w++){const e=3*w,r=4*w;I[e]=t[r],I[e+1]=t[r+1],I[e+2]=t[r+2]}t=I,d=2,i=3,r=3*U}B.img=t,B.bpl=r,B.bpp=i}return{ctype:d,depth:A,plte:E,frames:b}}function _updateFrame(t,r,i,o,a,s,f){const l=Uint8Array,c=Uint32Array,u=new l(t[a-1]),h=new c(t[a-1]),d=a+1<t.length?new l(t[a+1]):null,A=new l(t[a]),g=new c(A.buffer);let p=r,m=i,w=-1,v=-1;for(let e=0;e<s.height;e++)for(let t=0;t<s.width;t++){const i=s.x+t,f=s.y+e,l=f*r+i,c=g[l];0==c||0==o[a-1].dispose&&h[l]==c&&(null==d||0!=d[4*l+3])||(i<p&&(p=i),i>w&&(w=i),f<m&&(m=f),f>v&&(v=f))}-1==w&&(p=m=w=v=0),f&&(1==(1&p)&&p--,1==(1&m)&&m--),s={x:p,y:m,width:w-p+1,height:v-m+1};const b=o[a];b.rect=s,b.blend=1,b.img=new Uint8Array(s.width*s.height*4),0==o[a-1].dispose?(e(u,r,i,b.img,s.width,s.height,-s.x,-s.y,0),_prepareDiff(A,r,i,b.img,s)):e(A,r,i,b.img,s.width,s.height,-s.x,-s.y,0)}function _prepareDiff(t,r,i,o,a){e(t,r,i,o,a.width,a.height,-a.x,-a.y,2)}function _filterZero(e,t,r,i,o,a,s){const f=[];let l,c=[0,1,2,3,4];-1!=a?c=[a]:(t*i>5e5||1==r)&&(c=[0]),s&&(l={level:0});const u=UZIP;for(var h=0;h<c.length;h++){for(let a=0;a<t;a++)_filterLine(o,e,a,i,r,c[h]);f.push(u.deflate(o,l))}let d,A=1e9;for(h=0;h<f.length;h++)f[h].length<A&&(d=h,A=f[h].length);return f[d]}function _filterLine(e,t,i,o,a,s){const f=i*o;let l=f+i;if(e[l]=s,l++,0==s)if(o<500)for(var c=0;c<o;c++)e[l+c]=t[f+c];else e.set(new Uint8Array(t.buffer,f,o),l);else if(1==s){for(c=0;c<a;c++)e[l+c]=t[f+c];for(c=a;c<o;c++)e[l+c]=t[f+c]-t[f+c-a]+256&255}else if(0==i){for(c=0;c<a;c++)e[l+c]=t[f+c];if(2==s)for(c=a;c<o;c++)e[l+c]=t[f+c];if(3==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-(t[f+c-a]>>1)+256&255;if(4==s)for(c=a;c<o;c++)e[l+c]=t[f+c]-r(t[f+c-a],0,0)+256&255}else{if(2==s)for(c=0;c<o;c++)e[l+c]=t[f+c]+256-t[f+c-o]&255;if(3==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-(t[f+c-o]>>1)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-(t[f+c-o]+t[f+c-a]>>1)&255}if(4==s){for(c=0;c<a;c++)e[l+c]=t[f+c]+256-r(0,t[f+c-o],0)&255;for(c=a;c<o;c++)e[l+c]=t[f+c]+256-r(t[f+c-a],t[f+c-o],t[f+c-a-o])&255}}}function quantize(e,t){const r=new Uint8Array(e),i=r.slice(0),o=new Uint32Array(i.buffer),a=getKDtree(i,t),s=a[0],f=a[1],l=r.length,c=new Uint8Array(l>>2);let u;if(r.length<2e7)for(var h=0;h<l;h+=4){u=getNearest(s,d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255)),c[h>>2]=u.ind,o[h>>2]=u.est.rgba}else for(h=0;h<l;h+=4){var d=r[h]*(1/255),A=r[h+1]*(1/255),g=r[h+2]*(1/255),p=r[h+3]*(1/255);for(u=s;u.left;)u=planeDst(u.est,d,A,g,p)<=0?u.left:u.right;c[h>>2]=u.ind,o[h>>2]=u.est.rgba}return{abuf:i.buffer,inds:c,plte:f}}function getKDtree(e,t,r){null==r&&(r=1e-4);const i=new Uint32Array(e.buffer),o={i0:0,i1:e.length,bst:null,est:null,tdst:0,left:null,right:null};o.bst=stats(e,o.i0,o.i1),o.est=estats(o.bst);const a=[o];for(;a.length<t;){let t=0,o=0;for(var s=0;s<a.length;s++)a[s].est.L>t&&(t=a[s].est.L,o=s);if(t<r)break;const f=a[o],l=splitPixels(e,i,f.i0,f.i1,f.est.e,f.est.eMq255);if(f.i0>=l||f.i1<=l){f.est.L=0;continue}const c={i0:f.i0,i1:l,bst:null,est:null,tdst:0,left:null,right:null};c.bst=stats(e,c.i0,c.i1),c.est=estats(c.bst);const u={i0:l,i1:f.i1,bst:null,est:null,tdst:0,left:null,right:null};u.bst={R:[],m:[],N:f.bst.N-c.bst.N};for(s=0;s<16;s++)u.bst.R[s]=f.bst.R[s]-c.bst.R[s];for(s=0;s<4;s++)u.bst.m[s]=f.bst.m[s]-c.bst.m[s];u.est=estats(u.bst),f.left=c,f.right=u,a[o]=c,a.push(u)}a.sort(((e,t)=>t.bst.N-e.bst.N));for(s=0;s<a.length;s++)a[s].ind=s;return[o,a]}function getNearest(e,t,r,i,o){if(null==e.left)return e.tdst=function dist(e,t,r,i,o){const a=t-e[0],s=r-e[1],f=i-e[2],l=o-e[3];return a*a+s*s+f*f+l*l}(e.est.q,t,r,i,o),e;const a=planeDst(e.est,t,r,i,o);let s=e.left,f=e.right;a>0&&(s=e.right,f=e.left);const l=getNearest(s,t,r,i,o);if(l.tdst<=a*a)return l;const c=getNearest(f,t,r,i,o);return c.tdst<l.tdst?c:l}function planeDst(e,t,r,i,o){const{e:a}=e;return a[0]*t+a[1]*r+a[2]*i+a[3]*o-e.eMq}function splitPixels(e,t,r,i,o,a){for(i-=4;r<i;){for(;vecDot(e,r,o)<=a;)r+=4;for(;vecDot(e,i,o)>a;)i-=4;if(r>=i)break;const s=t[r>>2];t[r>>2]=t[i>>2],t[i>>2]=s,r+=4,i-=4}for(;vecDot(e,r,o)>a;)r-=4;return r+4}function vecDot(e,t,r){return e[t]*r[0]+e[t+1]*r[1]+e[t+2]*r[2]+e[t+3]*r[3]}function stats(e,t,r){const i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o=[0,0,0,0],a=r-t>>2;for(let a=t;a<r;a+=4){const t=e[a]*(1/255),r=e[a+1]*(1/255),s=e[a+2]*(1/255),f=e[a+3]*(1/255);o[0]+=t,o[1]+=r,o[2]+=s,o[3]+=f,i[0]+=t*t,i[1]+=t*r,i[2]+=t*s,i[3]+=t*f,i[5]+=r*r,i[6]+=r*s,i[7]+=r*f,i[10]+=s*s,i[11]+=s*f,i[15]+=f*f}return i[4]=i[1],i[8]=i[2],i[9]=i[6],i[12]=i[3],i[13]=i[7],i[14]=i[11],{R:i,m:o,N:a}}function estats(e){const{R:t}=e,{m:r}=e,{N:i}=e,a=r[0],s=r[1],f=r[2],l=r[3],c=0==i?0:1/i,u=[t[0]-a*a*c,t[1]-a*s*c,t[2]-a*f*c,t[3]-a*l*c,t[4]-s*a*c,t[5]-s*s*c,t[6]-s*f*c,t[7]-s*l*c,t[8]-f*a*c,t[9]-f*s*c,t[10]-f*f*c,t[11]-f*l*c,t[12]-l*a*c,t[13]-l*s*c,t[14]-l*f*c,t[15]-l*l*c],h=u,d=o;let A=[Math.random(),Math.random(),Math.random(),Math.random()],g=0,p=0;if(0!=i)for(let e=0;e<16&&(A=d.multVec(h,A),p=Math.sqrt(d.dot(A,A)),A=d.sml(1/p,A),!(0!=e&&Math.abs(p-g)<1e-9));e++)g=p;const m=[a*c,s*c,f*c,l*c];return{Cov:u,q:m,e:A,L:g,eMq255:d.dot(d.sml(255,m),A),eMq:d.dot(A,m),rgba:(Math.round(255*m[3])<<24|Math.round(255*m[2])<<16|Math.round(255*m[1])<<8|Math.round(255*m[0])<<0)>>>0}}var o={multVec:(e,t)=>[e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],e[4]*t[0]+e[5]*t[1]+e[6]*t[2]+e[7]*t[3],e[8]*t[0]+e[9]*t[1]+e[10]*t[2]+e[11]*t[3],e[12]*t[0]+e[13]*t[1]+e[14]*t[2]+e[15]*t[3]],dot:(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],sml:(e,t)=>[e*t[0],e*t[1],e*t[2],e*t[3]]};UPNG.encode=function encode(e,t,r,i,o,a,s){null==i&&(i=0),null==s&&(s=!1);const f=compress(e,t,r,i,[!1,!1,!1,0,s,!1]);return compressPNG(f,-1),_main(f,t,r,o,a)},UPNG.encodeLL=function encodeLL(e,t,r,i,o,a,s,f){const l={ctype:0+(1==i?0:2)+(0==o?0:4),depth:a,frames:[]},c=(i+o)*a,u=c*t;for(let i=0;i<e.length;i++)l.frames.push({rect:{x:0,y:0,width:t,height:r},img:new Uint8Array(e[i]),blend:0,dispose:1,bpp:Math.ceil(c/8),bpl:Math.ceil(u/8)});return compressPNG(l,0,!0),_main(l,t,r,s,f)},UPNG.encode.compress=compress,UPNG.encode.dither=dither,UPNG.quantize=quantize,UPNG.quantize.getKDtree=getKDtree,UPNG.quantize.getNearest=getNearest}();const t={toArrayBuffer(e,r){const i=e.width,o=e.height,a=i<<2,s=e.getContext("2d").getImageData(0,0,i,o),f=new Uint32Array(s.data.buffer),l=(32*i+31)/32<<2,c=l*o,u=122+c,h=new ArrayBuffer(u),d=new DataView(h),A=1<<20;let g,p,m,w,v=A,b=0,y=0,E=0;function set16(e){d.setUint16(y,e,!0),y+=2}function set32(e){d.setUint32(y,e,!0),y+=4}function seek(e){y+=e}set16(19778),set32(u),seek(4),set32(122),set32(108),set32(i),set32(-o>>>0),set16(1),set16(32),set32(3),set32(c),set32(2835),set32(2835),seek(8),set32(16711680),set32(65280),set32(255),set32(4278190080),set32(1466527264),function convert(){for(;b<o&&v>0;){for(w=122+b*l,g=0;g<a;)v--,p=f[E++],m=p>>>24,d.setUint32(w+g,p<<8|m),g+=4;b++}E<f.length?(v=A,setTimeout(convert,t._dly)):r(h)}()},toBlob(e,t){this.toArrayBuffer(e,(e=>{t(new Blob([e],{type:"image/bmp"}))}))},_dly:9};var r={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},i={[r.CHROME]:16384,[r.FIREFOX]:11180,[r.DESKTOP_SAFARI]:16384,[r.IE]:8192,[r.IOS]:4096,[r.ETC]:8192};const o="undefined"!=typeof window,a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,s=o&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),CustomFile=(o||a)&&(s&&s.getOriginalSymbol(window,"File")||"undefined"!=typeof File&&File),CustomFileReader=(o||a)&&(s&&s.getOriginalSymbol(window,"FileReader")||"undefined"!=typeof FileReader&&FileReader);function getFilefromDataUrl(e,t,r=Date.now()){return new Promise((i=>{const o=e.split(","),a=o[0].match(/:(.*?);/)[1],s=globalThis.atob(o[1]);let f=s.length;const l=new Uint8Array(f);for(;f--;)l[f]=s.charCodeAt(f);const c=new Blob([l],{type:a});c.name=t,c.lastModified=r,i(c)}))}function getDataUrlFromFile(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=()=>t(i.result),i.onerror=e=>r(e),i.readAsDataURL(e)}))}function loadImage(e){return new Promise(((t,r)=>{const i=new Image;i.onload=()=>t(i),i.onerror=e=>r(e),i.src=e}))}function getBrowserName(){if(void 0!==getBrowserName.cachedResult)return getBrowserName.cachedResult;let e=r.ETC;const{userAgent:t}=navigator;return/Chrom(e|ium)/i.test(t)?e=r.CHROME:/iP(ad|od|hone)/i.test(t)&&/WebKit/i.test(t)?e=r.IOS:/Safari/i.test(t)?e=r.DESKTOP_SAFARI:/Firefox/i.test(t)?e=r.FIREFOX:(/MSIE/i.test(t)||!0==!!document.documentMode)&&(e=r.IE),getBrowserName.cachedResult=e,getBrowserName.cachedResult}function approximateBelowMaximumCanvasSizeOfBrowser(e,t){const r=getBrowserName(),o=i[r];let a=e,s=t,f=a*s;const l=a>s?s/a:a/s;for(;f>o*o;){const e=(o+a)/2,t=(o+s)/2;e<t?(s=t,a=t*l):(s=e*l,a=e),f=a*s}return{width:a,height:s}}function getNewCanvasAndCtx(e,t){let r,i;try{if(r=new OffscreenCanvas(e,t),i=r.getContext("2d"),null===i)throw new Error("getContext of OffscreenCanvas returns null")}catch(e){r=document.createElement("canvas"),i=r.getContext("2d")}return r.width=e,r.height=t,[r,i]}function drawImageInCanvas(e,t){const{width:r,height:i}=approximateBelowMaximumCanvasSizeOfBrowser(e.width,e.height),[o,a]=getNewCanvasAndCtx(r,i);return t&&/jpe?g/.test(t)&&(a.fillStyle="white",a.fillRect(0,0,o.width,o.height)),a.drawImage(e,0,0,o.width,o.height),o}function isIOS(){return void 0!==isIOS.cachedResult||(isIOS.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"undefined"!=typeof document&&"ontouchend"in document),isIOS.cachedResult}function drawFileInCanvas(e,t={}){return new Promise((function(i,o){let a,s;var $Try_2_Post=function(){try{return s=drawImageInCanvas(a,t.fileType||e.type),i([a,s])}catch(e){return o(e)}},$Try_2_Catch=function(t){try{0;var $Try_3_Catch=function(e){try{throw e}catch(e){return o(e)}};try{let t;return getDataUrlFromFile(e).then((function(e){try{return t=e,loadImage(t).then((function(e){try{return a=e,function(){try{return $Try_2_Post()}catch(e){return o(e)}}()}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){return $Try_3_Catch(e)}}),$Try_3_Catch)}catch(e){$Try_3_Catch(e)}}catch(e){return o(e)}};try{if(isIOS()||[r.DESKTOP_SAFARI,r.MOBILE_SAFARI].includes(getBrowserName()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(e).then((function(e){try{return a=e,$Try_2_Post()}catch(e){return $Try_2_Catch()}}),$Try_2_Catch)}catch(e){$Try_2_Catch()}}))}function canvasToFile(e,r,i,o,a=1){return new Promise((function(s,f){let l;if("image/png"===r){let c,u,h;return c=e.getContext("2d"),({data:u}=c.getImageData(0,0,e.width,e.height)),h=UPNG.encode([u.buffer],e.width,e.height,4096*a),l=new Blob([h],{type:r}),l.name=i,l.lastModified=o,$If_4.call(this)}{if("image/bmp"===r)return new Promise((r=>t.toBlob(e,r))).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_5.call(this)}catch(e){return f(e)}}.bind(this),f);{if("function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas)return e.convertToBlob({type:r,quality:a}).then(function(e){try{return l=e,l.name=i,l.lastModified=o,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f);{let d;return d=e.toDataURL(r,a),getFilefromDataUrl(d,i,o).then(function(e){try{return l=e,$If_6.call(this)}catch(e){return f(e)}}.bind(this),f)}function $If_6(){return $If_5.call(this)}}function $If_5(){return $If_4.call(this)}}function $If_4(){return s(l)}}))}function cleanupCanvasMemory(e){e.width=0,e.height=0}function isAutoOrientationInBrowser(){return new Promise((function(e,t){let r,i,o,a,s;return void 0!==isAutoOrientationInBrowser.cachedResult?e(isAutoOrientationInBrowser.cachedResult):(r="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==",getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(r){try{return i=r,drawFileInCanvas(i).then((function(r){try{return o=r[1],canvasToFile(o,i.type,i.name,i.lastModified).then((function(r){try{return a=r,cleanupCanvasMemory(o),drawFileInCanvas(a).then((function(r){try{return s=r[0],isAutoOrientationInBrowser.cachedResult=1===s.width&&2===s.height,e(isAutoOrientationInBrowser.cachedResult)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t)}catch(e){return t(e)}}),t))}))}function getExifOrientation(e){return new Promise(((t,r)=>{const i=new CustomFileReader;i.onload=e=>{const r=new DataView(e.target.result);if(65496!=r.getUint16(0,!1))return t(-2);const i=r.byteLength;let o=2;for(;o<i;){if(r.getUint16(o+2,!1)<=8)return t(-1);const e=r.getUint16(o,!1);if(o+=2,65505==e){if(1165519206!=r.getUint32(o+=2,!1))return t(-1);const e=18761==r.getUint16(o+=6,!1);o+=r.getUint32(o+4,e);const i=r.getUint16(o,e);o+=2;for(let a=0;a<i;a++)if(274==r.getUint16(o+12*a,e))return t(r.getUint16(o+12*a+8,e))}else{if(65280!=(65280&e))break;o+=r.getUint16(o,!1)}}return t(-1)},i.onerror=e=>r(e),i.readAsArrayBuffer(e)}))}function handleMaxWidthOrHeight(e,t){const{width:r}=e,{height:i}=e,{maxWidthOrHeight:o}=t;let a,s=e;return isFinite(o)&&(r>o||i>o)&&([s,a]=getNewCanvasAndCtx(r,i),r>i?(s.width=o,s.height=i/r*o):(s.width=r/i*o,s.height=o),a.drawImage(e,0,0,s.width,s.height),cleanupCanvasMemory(e)),s}function followExifOrientation(e,t){const{width:r}=e,{height:i}=e,[o,a]=getNewCanvasAndCtx(r,i);switch(t>4&&t<9?(o.width=i,o.height=r):(o.width=r,o.height=i),t){case 2:a.transform(-1,0,0,1,r,0);break;case 3:a.transform(-1,0,0,-1,r,i);break;case 4:a.transform(1,0,0,-1,0,i);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,i,0);break;case 7:a.transform(0,-1,-1,0,i,r);break;case 8:a.transform(0,-1,1,0,0,r)}return a.drawImage(e,0,0,r,i),cleanupCanvasMemory(e),o}function compress(e,t,r=0){return new Promise((function(i,o){let a,s,f,l,c,u,h,d,A,g,p,m,w,v,b,y,E,F,_,B;function incProgress(e=5){if(t.signal&&t.signal.aborted)throw t.signal.reason;a+=e,t.onProgress(Math.min(a,100))}function setProgress(e){if(t.signal&&t.signal.aborted)throw t.signal.reason;a=Math.min(Math.max(e,a),100),t.onProgress(a)}return a=r,s=t.maxIteration||10,f=1024*t.maxSizeMB*1024,incProgress(),drawFileInCanvas(e,t).then(function(r){try{return[,l]=r,incProgress(),c=handleMaxWidthOrHeight(l,t),incProgress(),new Promise((function(r,i){var o;if(!(o=t.exifOrientation))return getExifOrientation(e).then(function(e){try{return o=e,$If_2.call(this)}catch(e){return i(e)}}.bind(this),i);function $If_2(){return r(o)}return $If_2.call(this)})).then(function(r){try{return u=r,incProgress(),isAutoOrientationInBrowser().then(function(r){try{return h=r?c:followExifOrientation(c,u),incProgress(),d=t.initialQuality||1,A=t.fileType||e.type,canvasToFile(h,A,e.name,e.lastModified,d).then(function(r){try{{if(g=r,incProgress(),p=g.size>f,m=g.size>e.size,!p&&!m)return setProgress(100),i(g);var a;function $Loop_3(){if(s--&&(b>f||b>w)){let t,r;return t=B?.95*_.width:_.width,r=B?.95*_.height:_.height,[E,F]=getNewCanvasAndCtx(t,r),F.drawImage(_,0,0,t,r),d*="image/png"===A?.85:.95,canvasToFile(E,A,e.name,e.lastModified,d).then((function(e){try{return y=e,cleanupCanvasMemory(_),_=E,b=y.size,setProgress(Math.min(99,Math.floor((v-b)/(v-f)*100))),$Loop_3}catch(e){return o(e)}}),o)}return[1]}return w=e.size,v=g.size,b=v,_=h,B=!t.alwaysKeepResolution&&p,(a=function(e){for(;e;){if(e.then)return void e.then(a,o);try{if(e.pop){if(e.length)return e.pop()?$Loop_3_exit.call(this):e;e=$Loop_3}else e=e.call(this)}catch(e){return o(e)}}}.bind(this))($Loop_3);function $Loop_3_exit(){return cleanupCanvasMemory(_),cleanupCanvasMemory(E),cleanupCanvasMemory(c),cleanupCanvasMemory(h),cleanupCanvasMemory(l),setProgress(100),i(y)}}}catch(u){return o(u)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}))}const f="\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n";let l;function compressOnWebWorker(e,t){return new Promise(((r,i)=>{l||(l=function createWorkerScriptURL(e){const t=[];return"function"==typeof e?t.push(`(${e})()`):t.push(e),URL.createObjectURL(new Blob(t))}(f));const o=new Worker(l);o.addEventListener("message",(function handler(e){if(t.signal&&t.signal.aborted)o.terminate();else if(void 0===e.data.progress){if(e.data.error)return i(new Error(e.data.error)),void o.terminate();r(e.data.file),o.terminate()}else t.onProgress(e.data.progress)})),o.addEventListener("error",i),t.signal&&t.signal.addEventListener("abort",(()=>{i(t.signal.reason),o.terminate()})),o.postMessage({file:e,imageCompressionLibUrl:t.libURL,options:{...t,onProgress:void 0,signal:void 0}})}))}function imageCompression(e,t){return new Promise((function(r,i){let o,a,s,f,l,c;if(o={...t},s=0,({onProgress:f}=o),o.maxSizeMB=o.maxSizeMB||Number.POSITIVE_INFINITY,l="boolean"!=typeof o.useWebWorker||o.useWebWorker,delete o.useWebWorker,o.onProgress=e=>{s=e,"function"==typeof f&&f(s)},!(e instanceof Blob||e instanceof CustomFile))return i(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return i(new Error("The file given is not an image"));if(c="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!l||"function"!=typeof Worker||c)return compress(e,o).then(function(e){try{return a=e,$If_4.call(this)}catch(e){return i(e)}}.bind(this),i);var u=function(){try{return $If_4.call(this)}catch(e){return i(e)}}.bind(this),$Try_1_Catch=function(t){try{return compress(e,o).then((function(e){try{return a=e,u()}catch(e){return i(e)}}),i)}catch(e){return i(e)}};try{return o.libURL=o.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",compressOnWebWorker(e,o).then((function(e){try{return a=e,u()}catch(e){return $Try_1_Catch()}}),$Try_1_Catch)}catch(e){$Try_1_Catch()}function $If_4(){try{a.name=e.name,a.lastModified=e.lastModified}catch(e){}try{o.preserveExif&&"image/jpeg"===e.type&&(!o.fileType||o.fileType&&o.fileType===e.type)&&(a=copyExifWithoutOrientation(e,a))}catch(e){}return r(a)}}))}return imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation,imageCompression.cleanupCanvasMemory=cleanupCanvasMemory,imageCompression.isAutoOrientationInBrowser=isAutoOrientationInBrowser,imageCompression.approximateBelowMaximumCanvasSizeOfBrowser=approximateBelowMaximumCanvasSizeOfBrowser,imageCompression.copyExifWithoutOrientation=copyExifWithoutOrientation,imageCompression.getBrowserName=getBrowserName,imageCompression.version="2.0.2",imageCompression}));
//# sourceMappingURL=browser-image-compression.js.map


/***/ }),

/***/ 1762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Crop)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63984);
/**
 * lucide-react v0.268.0 - ISC
 */



const Crop = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);


//# sourceMappingURL=crop.js.map


/***/ }),

/***/ 93164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RefreshCcw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63984);
/**
 * lucide-react v0.268.0 - ISC
 */



const RefreshCcw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("RefreshCcw", [
  [
    "path",
    { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  [
    "path",
    { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }
  ],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);


//# sourceMappingURL=refresh-ccw.js.map


/***/ }),

/***/ 42358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RotateCcw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63984);
/**
 * lucide-react v0.268.0 - ISC
 */



const RotateCcw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);


//# sourceMappingURL=rotate-ccw.js.map


/***/ }),

/***/ 83607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RotateCw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63984);
/**
 * lucide-react v0.268.0 - ISC
 */



const RotateCw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("RotateCw", [
  [
    "path",
    { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);


//# sourceMappingURL=rotate-cw.js.map


/***/ }),

/***/ 34534:
/***/ (() => {



/***/ }),

/***/ 53413:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(e,t){ true?t(exports,__webpack_require__(18038),__webpack_require__(2498)):0}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),i=r(n);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function m(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}var b=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function h(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=b.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var w=[".DS_Store","Thumbs.db"];function D(e){return"object"==typeof e&&null!==e}function x(e){return O(e.target.files).map((function(e){return h(e)}))}function F(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return h(e)}))]}}))}))}function j(e,t){return v(this,void 0,void 0,(function(){var n;return m(this,(function(r){switch(r.label){case 0:return e.items?(n=O(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(E))]):[3,2];case 1:return[2,A(k(r.sent()))];case 2:return[2,A(O(e.files).map((function(e){return h(e)})))]}}))}))}function A(e){return e.filter((function(e){return-1===w.indexOf(e.name)}))}function O(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function E(e){if("function"!=typeof e.webkitGetAsEntry)return P(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?C(t):P(e)}function k(e){return e.reduce((function(e,t){return y(y([],g(e),!1),g(Array.isArray(t)?k(t):[t]),!1)}),[])}function P(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=h(t);return Promise.resolve(n)}function S(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return[2,e.isDirectory?C(e):z(e)]}))}))}function C(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return v(i,void 0,void 0,(function(){var i,a,c;return m(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),n(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(S)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function z(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=h(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var R="file-invalid-type",T="file-too-large",I="file-too-small",M="too-many-files",L={FileInvalidType:R,FileTooLarge:T,FileTooSmall:I,TooManyFiles:M},_=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:R,message:"File type must be ".concat(t)}},B=function(e){return{code:T,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},K=function(e){return{code:I,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},q={code:M,message:"Too many files"};function U(e,t){var n="application/x-moz-file"===e.type||function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}(e,t);return[n,n?null:_(t)]}function W(e,t,n){if($(e.size))if($(t)&&$(n)){if(e.size>n)return[!1,B(n)];if(e.size<t)return[!1,K(t)]}else{if($(t)&&e.size<t)return[!1,K(t)];if($(n)&&e.size>n)return[!1,B(n)]}return[!0,null]}function $(e){return null!=e}function G(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=s(U(e,n),1)[0],i=s(W(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}function H(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function N(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Y(e){e.preventDefault()}function J(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function Q(e){return-1!==e.indexOf("Edge/")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return J(e)||Q(e)}function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!H(e)&&t&&t.apply(void 0,[e].concat(r)),H(e)}))}}function Z(){return"showOpenFilePicker"in window}function ee(e){return $(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=s(e,2),n=t[0],r=t[1],o=!0;return oe(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(ie)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return c(c({},e),{},u({},r,o))}),{})}]:e}function te(e){if($(e))return Object.entries(e).reduce((function(e,t){var n=s(t,2),r=n[0],o=n[1];return[].concat(f(e),[r],f(o))}),[]).filter((function(e){return oe(e)||ie(e)})).join(",")}function ne(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function re(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function oe(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ie(e){return/^.*\.[\w]+$/.test(e)}var ae=["children"],ce=["open"],ue=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],le=["refKey","onChange","onClick"],se=t.forwardRef((function(e,n){var r=e.children,i=de(l(e,ae)),a=i.open,u=l(i,ce);return t.useImperativeHandle(n,(function(){return{open:a}}),[a]),o.default.createElement(t.Fragment,null,r(c(c({},u),{},{open:a})))}));se.displayName="Dropzone";var fe={disabled:!1,getFilesFromEvent:function(e){return v(this,void 0,void 0,(function(){return m(this,(function(t){return D(e)&&D(e.dataTransfer)?[2,j(e.dataTransfer,e.type)]:function(e){return D(e)&&D(e.target)}(e)?[2,x(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,F(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};se.defaultProps=fe,se.propTypes={children:i.default.func,accept:i.default.objectOf(i.default.arrayOf(i.default.string)),multiple:i.default.bool,preventDropOnDocument:i.default.bool,noClick:i.default.bool,noKeyboard:i.default.bool,noDrag:i.default.bool,noDragEventsBubbling:i.default.bool,minSize:i.default.number,maxSize:i.default.number,maxFiles:i.default.number,disabled:i.default.bool,getFilesFromEvent:i.default.func,onFileDialogCancel:i.default.func,onFileDialogOpen:i.default.func,useFsAccessApi:i.default.bool,autoFocus:i.default.bool,onDragEnter:i.default.func,onDragLeave:i.default.func,onDragOver:i.default.func,onDrop:i.default.func,onDropAccepted:i.default.func,onDropRejected:i.default.func,onError:i.default.func,validator:i.default.func};var pe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=c(c({},fe),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,p=n.minSize,d=n.multiple,v=n.maxFiles,m=n.onDragEnter,g=n.onDragLeave,y=n.onDragOver,b=n.onDrop,h=n.onDropAccepted,w=n.onDropRejected,D=n.onFileDialogCancel,x=n.onFileDialogOpen,F=n.useFsAccessApi,j=n.autoFocus,A=n.preventDropOnDocument,O=n.noClick,E=n.noKeyboard,k=n.noDrag,P=n.noDragEventsBubbling,S=n.onError,C=n.validator,z=t.useMemo((function(){return te(r)}),[r]),R=t.useMemo((function(){return ee(r)}),[r]),T=t.useMemo((function(){return"function"==typeof x?x:me}),[x]),I=t.useMemo((function(){return"function"==typeof D?D:me}),[D]),M=t.useRef(null),L=t.useRef(null),_=t.useReducer(ve,pe),B=s(_,2),K=B[0],$=B[1],J=K.isFocused,Q=K.isFileDialogActive,oe=t.useRef("undefined"!=typeof window&&window.isSecureContext&&F&&Z()),ie=function(){!oe.current&&Q&&setTimeout((function(){L.current&&(L.current.files.length||($({type:"closeDialog"}),I()))}),300)};t.useEffect((function(){return window.addEventListener("focus",ie,!1),function(){window.removeEventListener("focus",ie,!1)}}),[L,Q,I,oe]);var ae=t.useRef([]),ce=function(e){M.current&&M.current.contains(e.target)||(e.preventDefault(),ae.current=[])};t.useEffect((function(){return A&&(document.addEventListener("dragover",Y,!1),document.addEventListener("drop",ce,!1)),function(){A&&(document.removeEventListener("dragover",Y),document.removeEventListener("drop",ce))}}),[M,A]),t.useEffect((function(){return!o&&j&&M.current&&M.current.focus(),function(){}}),[M,j,o]);var se=t.useCallback((function(e){S?S(e):console.error(e)}),[S]),de=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e),ae.current=[].concat(f(ae.current),[e.target]),N(e)&&Promise.resolve(i(e)).then((function(t){if(!H(e)||P){var n=t.length,r=n>0&&G({files:t,accept:z,minSize:p,maxSize:a,multiple:d,maxFiles:v,validator:C});$({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),m&&m(e)}})).catch((function(e){return se(e)}))}),[i,m,se,P,z,p,a,d,v,C]),ge=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e);var t=N(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&y&&y(e),!1}),[y,P]),ye=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e);var t=ae.current.filter((function(e){return M.current&&M.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ae.current=t,t.length>0||($({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),N(e)&&g&&g(e))}),[M,g,P]),be=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=s(U(e,z),2),o=t[0],i=t[1],c=s(W(e,p,a),2),u=c[0],l=c[1],f=C?C(e):null;if(o&&u&&!f)n.push(e);else{var d=[i,l];f&&(d=d.concat(f)),r.push({file:e,errors:d.filter((function(e){return e}))})}})),(!d&&n.length>1||d&&v>=1&&n.length>v)&&(n.forEach((function(e){r.push({file:e,errors:[q]})})),n.splice(0)),$({acceptedFiles:n,fileRejections:r,type:"setFiles"}),b&&b(n,r,t),r.length>0&&w&&w(r,t),n.length>0&&h&&h(n,t)}),[$,d,z,p,a,v,b,h,w,C]),he=t.useCallback((function(e){e.preventDefault(),e.persist(),ke(e),ae.current=[],N(e)&&Promise.resolve(i(e)).then((function(t){H(e)&&!P||be(t,e)})).catch((function(e){return se(e)})),$({type:"reset"})}),[i,be,se,P]),we=t.useCallback((function(){if(oe.current){$({type:"openDialog"}),T();var e={multiple:d,types:R};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){be(e,null),$({type:"closeDialog"})})).catch((function(e){ne(e)?(I(e),$({type:"closeDialog"})):re(e)?(oe.current=!1,L.current?(L.current.value=null,L.current.click()):se(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):se(e)}))}else L.current&&($({type:"openDialog"}),T(),L.current.value=null,L.current.click())}),[$,T,I,F,be,se,R,d]),De=t.useCallback((function(e){M.current&&M.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[M,we]),xe=t.useCallback((function(){$({type:"focus"})}),[]),Fe=t.useCallback((function(){$({type:"blur"})}),[]),je=t.useCallback((function(){O||(V()?setTimeout(we,0):we())}),[O,we]),Ae=function(e){return o?null:e},Oe=function(e){return E?null:Ae(e)},Ee=function(e){return k?null:Ae(e)},ke=function(e){P&&e.stopPropagation()},Pe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,s=e.onBlur,f=e.onClick,p=e.onDragEnter,d=e.onDragOver,v=e.onDragLeave,m=e.onDrop,g=l(e,ue);return c(c(u({onKeyDown:Oe(X(i,De)),onFocus:Oe(X(a,xe)),onBlur:Oe(X(s,Fe)),onClick:Ae(X(f,je)),onDragEnter:Ee(X(p,de)),onDragOver:Ee(X(d,ge)),onDragLeave:Ee(X(v,ye)),onDrop:Ee(X(m,he)),role:"string"==typeof r&&""!==r?r:"presentation"},n,M),o||E?{}:{tabIndex:0}),g)}}),[M,De,xe,Fe,je,de,ge,ye,he,E,k,o]),Se=t.useCallback((function(e){e.stopPropagation()}),[]),Ce=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=l(e,le),a=u({accept:z,multiple:d,type:"file",style:{display:"none"},onChange:Ae(X(r,he)),onClick:Ae(X(o,Se)),tabIndex:-1},n,L);return c(c({},a),i)}}),[L,r,d,he,o]);return c(c({},K),{},{isFocused:J&&!o,getRootProps:Pe,getInputProps:Ce,rootRef:M,inputRef:L,open:Ae(we)})}function ve(e,t){switch(t.type){case"focus":return c(c({},e),{},{isFocused:!0});case"blur":return c(c({},e),{},{isFocused:!1});case"openDialog":return c(c({},pe),{},{isFileDialogActive:!0});case"closeDialog":return c(c({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return c(c({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return c(c({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return c({},pe);default:return e}}function me(){}e.ErrorCode=L,e.default=se,e.useDropzone=de,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9maWxlLXNlbGVjdG9yL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvZmlsZS1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2VzL2luZGV4LmpzIiwiLi4vc3JjL3V0aWxzL2luZGV4LmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJleHBvcnQgdmFyIENPTU1PTl9NSU1FX1RZUEVTID0gbmV3IE1hcChbXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9NSU1FX3R5cGVzL0NvbW1vbl90eXBlc1xuICAgIFsnYWFjJywgJ2F1ZGlvL2FhYyddLFxuICAgIFsnYWJ3JywgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCddLFxuICAgIFsnYXJjJywgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYyddLFxuICAgIFsnYXZpZicsICdpbWFnZS9hdmlmJ10sXG4gICAgWydhdmknLCAndmlkZW8veC1tc3ZpZGVvJ10sXG4gICAgWydhencnLCAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vayddLFxuICAgIFsnYmluJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYm1wJywgJ2ltYWdlL2JtcCddLFxuICAgIFsnYnonLCAnYXBwbGljYXRpb24veC1iemlwJ10sXG4gICAgWydiejInLCAnYXBwbGljYXRpb24veC1iemlwMiddLFxuICAgIFsnY2RhJywgJ2FwcGxpY2F0aW9uL3gtY2RmJ10sXG4gICAgWydjc2gnLCAnYXBwbGljYXRpb24veC1jc2gnXSxcbiAgICBbJ2NzcycsICd0ZXh0L2NzcyddLFxuICAgIFsnY3N2JywgJ3RleHQvY3N2J10sXG4gICAgWydkb2MnLCAnYXBwbGljYXRpb24vbXN3b3JkJ10sXG4gICAgWydkb2N4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10sXG4gICAgWydlb3QnLCAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnXSxcbiAgICBbJ2VwdWInLCAnYXBwbGljYXRpb24vZXB1Yit6aXAnXSxcbiAgICBbJ2d6JywgJ2FwcGxpY2F0aW9uL2d6aXAnXSxcbiAgICBbJ2dpZicsICdpbWFnZS9naWYnXSxcbiAgICBbJ2hlaWMnLCAnaW1hZ2UvaGVpYyddLFxuICAgIFsnaGVpZicsICdpbWFnZS9oZWlmJ10sXG4gICAgWydodG0nLCAndGV4dC9odG1sJ10sXG4gICAgWydodG1sJywgJ3RleHQvaHRtbCddLFxuICAgIFsnaWNvJywgJ2ltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbiddLFxuICAgIFsnaWNzJywgJ3RleHQvY2FsZW5kYXInXSxcbiAgICBbJ2phcicsICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnXSxcbiAgICBbJ2pwZWcnLCAnaW1hZ2UvanBlZyddLFxuICAgIFsnanBnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pzJywgJ3RleHQvamF2YXNjcmlwdCddLFxuICAgIFsnanNvbicsICdhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgWydqc29ubGQnLCAnYXBwbGljYXRpb24vbGQranNvbiddLFxuICAgIFsnbWlkJywgJ2F1ZGlvL21pZGknXSxcbiAgICBbJ21pZGknLCAnYXVkaW8vbWlkaSddLFxuICAgIFsnbWpzJywgJ3RleHQvamF2YXNjcmlwdCddLFxuICAgIFsnbXAzJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ21wNCcsICd2aWRlby9tcDQnXSxcbiAgICBbJ21wZWcnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbXBrZycsICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCddLFxuICAgIFsnb2RwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJ10sXG4gICAgWydvZHMnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCddLFxuICAgIFsnb2R0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCddLFxuICAgIFsnb2dhJywgJ2F1ZGlvL29nZyddLFxuICAgIFsnb2d2JywgJ3ZpZGVvL29nZyddLFxuICAgIFsnb2d4JywgJ2FwcGxpY2F0aW9uL29nZyddLFxuICAgIFsnb3B1cycsICdhdWRpby9vcHVzJ10sXG4gICAgWydvdGYnLCAnZm9udC9vdGYnXSxcbiAgICBbJ3BuZycsICdpbWFnZS9wbmcnXSxcbiAgICBbJ3BkZicsICdhcHBsaWNhdGlvbi9wZGYnXSxcbiAgICBbJ3BocCcsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncHB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50J10sXG4gICAgWydwcHR4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nXSxcbiAgICBbJ3JhcicsICdhcHBsaWNhdGlvbi92bmQucmFyJ10sXG4gICAgWydydGYnLCAnYXBwbGljYXRpb24vcnRmJ10sXG4gICAgWydzaCcsICdhcHBsaWNhdGlvbi94LXNoJ10sXG4gICAgWydzdmcnLCAnaW1hZ2Uvc3ZnK3htbCddLFxuICAgIFsnc3dmJywgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10sXG4gICAgWyd0YXInLCAnYXBwbGljYXRpb24veC10YXInXSxcbiAgICBbJ3RpZicsICdpbWFnZS90aWZmJ10sXG4gICAgWyd0aWZmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICBbJ3RzJywgJ3ZpZGVvL21wMnQnXSxcbiAgICBbJ3R0ZicsICdmb250L3R0ZiddLFxuICAgIFsndHh0JywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ3ZzZCcsICdhcHBsaWNhdGlvbi92bmQudmlzaW8nXSxcbiAgICBbJ3dhdicsICdhdWRpby93YXYnXSxcbiAgICBbJ3dlYmEnLCAnYXVkaW8vd2VibSddLFxuICAgIFsnd2VibScsICd2aWRlby93ZWJtJ10sXG4gICAgWyd3ZWJwJywgJ2ltYWdlL3dlYnAnXSxcbiAgICBbJ3dvZmYnLCAnZm9udC93b2ZmJ10sXG4gICAgWyd3b2ZmMicsICdmb250L3dvZmYyJ10sXG4gICAgWyd4aHRtbCcsICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnXSxcbiAgICBbJ3hscycsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hsc3gnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnXSxcbiAgICBbJ3htbCcsICdhcHBsaWNhdGlvbi94bWwnXSxcbiAgICBbJ3h1bCcsICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJ10sXG4gICAgWyd6aXAnLCAnYXBwbGljYXRpb24vemlwJ10sXG4gICAgWyc3eicsICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnXSxcbiAgICAvLyBPdGhlcnNcbiAgICBbJ21rdicsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydtb3YnLCAndmlkZW8vcXVpY2t0aW1lJ10sXG4gICAgWydtc2cnLCAnYXBwbGljYXRpb24vdm5kLm1zLW91dGxvb2snXVxuXSk7XG5leHBvcnQgZnVuY3Rpb24gdG9GaWxlV2l0aFBhdGgoZmlsZSwgcGF0aCkge1xuICAgIHZhciBmID0gd2l0aE1pbWVUeXBlKGZpbGUpO1xuICAgIGlmICh0eXBlb2YgZi5wYXRoICE9PSAnc3RyaW5nJykgeyAvLyBvbiBlbGVjdHJvbiwgcGF0aCBpcyBhbHJlYWR5IHNldCB0byB0aGUgYWJzb2x1dGUgcGF0aFxuICAgICAgICB2YXIgd2Via2l0UmVsYXRpdmVQYXRoID0gZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGg7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCAncGF0aCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHBhdGhcbiAgICAgICAgICAgICAgICAvLyBJZiA8aW5wdXQgd2Via2l0ZGlyZWN0b3J5PiBpcyBzZXQsXG4gICAgICAgICAgICAgICAgLy8gdGhlIEZpbGUgd2lsbCBoYXZlIGEge3dlYmtpdFJlbGF0aXZlUGF0aH0gcHJvcGVydHlcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTElucHV0RWxlbWVudC93ZWJraXRkaXJlY3RvcnlcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiB3ZWJraXRSZWxhdGl2ZVBhdGggPT09ICdzdHJpbmcnICYmIHdlYmtpdFJlbGF0aXZlUGF0aC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gd2Via2l0UmVsYXRpdmVQYXRoXG4gICAgICAgICAgICAgICAgICAgIDogZmlsZS5uYW1lLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBmO1xufVxuZnVuY3Rpb24gd2l0aE1pbWVUeXBlKGZpbGUpIHtcbiAgICB2YXIgbmFtZSA9IGZpbGUubmFtZTtcbiAgICB2YXIgaGFzRXh0ZW5zaW9uID0gbmFtZSAmJiBuYW1lLmxhc3RJbmRleE9mKCcuJykgIT09IC0xO1xuICAgIGlmIChoYXNFeHRlbnNpb24gJiYgIWZpbGUudHlwZSkge1xuICAgICAgICB2YXIgZXh0ID0gbmFtZS5zcGxpdCgnLicpXG4gICAgICAgICAgICAucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHR5cGUgPSBDT01NT05fTUlNRV9UWVBFUy5nZXQoZXh0KTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWxlLCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUuanMubWFwIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB0b0ZpbGVXaXRoUGF0aCB9IGZyb20gJy4vZmlsZSc7XG52YXIgRklMRVNfVE9fSUdOT1JFID0gW1xuICAgIC8vIFRodW1ibmFpbCBjYWNoZSBmaWxlcyBmb3IgbWFjT1MgYW5kIFdpbmRvd3NcbiAgICAnLkRTX1N0b3JlJyxcbiAgICAnVGh1bWJzLmRiJyAvLyBXaW5kb3dzXG5dO1xuLyoqXG4gKiBDb252ZXJ0IGEgRHJhZ0V2ZW50J3MgRGF0YVRyYXNmZXIgb2JqZWN0IHRvIGEgbGlzdCBvZiBGaWxlIG9iamVjdHNcbiAqIE5PVEU6IElmIHNvbWUgb2YgdGhlIGl0ZW1zIGFyZSBmb2xkZXJzLFxuICogZXZlcnl0aGluZyB3aWxsIGJlIGZsYXR0ZW5lZCBhbmQgcGxhY2VkIGluIHRoZSBzYW1lIGxpc3QgYnV0IHRoZSBwYXRocyB3aWxsIGJlIGtlcHQgYXMgYSB7cGF0aH0gcHJvcGVydHkuXG4gKlxuICogRVhQRVJJTUVOVEFMOiBBIGxpc3Qgb2YgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1IYW5kbGUgb2JqZWN0cyBjYW4gYWxzbyBiZSBwYXNzZWQgYXMgYW4gYXJnXG4gKiBhbmQgYSBsaXN0IG9mIEZpbGUgb2JqZWN0cyB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSBldnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdmVudChldnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChldnQpICYmIGlzRGF0YVRyYW5zZmVyKGV2dC5kYXRhVHJhbnNmZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldERhdGFUcmFuc2ZlckZpbGVzKGV2dC5kYXRhVHJhbnNmZXIsIGV2dC50eXBlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0NoYW5nZUV2dChldnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldElucHV0RmlsZXMoZXZ0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2dCkgJiYgZXZ0LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAnZ2V0RmlsZScgaW4gaXRlbSAmJiB0eXBlb2YgaXRlbS5nZXRGaWxlID09PSAnZnVuY3Rpb24nOyB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRGc0hhbmRsZUZpbGVzKGV2dCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0RhdGFUcmFuc2Zlcih2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NoYW5nZUV2dCh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QodmFsdWUudGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYgIT09IG51bGw7XG59XG5mdW5jdGlvbiBnZXRJbnB1dEZpbGVzKGV2dCkge1xuICAgIHJldHVybiBmcm9tTGlzdChldnQudGFyZ2V0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHRvRmlsZVdpdGhQYXRoKGZpbGUpOyB9KTtcbn1cbi8vIEVlIGV4cGVjdCBlYWNoIGhhbmRsZSB0byBiZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVIYW5kbGVcbmZ1bmN0aW9uIGdldEZzSGFuZGxlRmlsZXMoaGFuZGxlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZpbGVzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChoYW5kbGVzLm1hcChmdW5jdGlvbiAoaCkgeyByZXR1cm4gaC5nZXRGaWxlKCk7IH0pKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdG9GaWxlV2l0aFBhdGgoZmlsZSk7IH0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREYXRhVHJhbnNmZXJGaWxlcyhkdCwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zLCBmaWxlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkdC5pdGVtcykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZnJvbUxpc3QoZHQuaXRlbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kbmQuaHRtbCNkbmRldmVudHMsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgJ2RyYWdzdGFydCcgYW5kICdkcm9wJyBoYXMgYWNjZXNzIHRvIHRoZSBkYXRhIChzb3VyY2Ugbm9kZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdkcm9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGl0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChpdGVtcy5tYXAodG9GaWxlUHJvbWlzZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5vSWdub3JlZEZpbGVzKGZsYXR0ZW4oZmlsZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgbm9JZ25vcmVkRmlsZXMoZnJvbUxpc3QoZHQuZmlsZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB0b0ZpbGVXaXRoUGF0aChmaWxlKTsgfSkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub0lnbm9yZWRGaWxlcyhmaWxlcykge1xuICAgIHJldHVybiBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIEZJTEVTX1RPX0lHTk9SRS5pbmRleE9mKGZpbGUubmFtZSkgPT09IC0xOyB9KTtcbn1cbi8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tKClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb20jQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZUxpc3Rcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXJJdGVtTGlzdFxuZnVuY3Rpb24gZnJvbUxpc3QoaXRlbXMpIHtcbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZpbGUgPSBpdGVtc1tpXTtcbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVzO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW1cbmZ1bmN0aW9uIHRvRmlsZVByb21pc2VzKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0ud2Via2l0R2V0QXNFbnRyeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSk7XG4gICAgfVxuICAgIHZhciBlbnRyeSA9IGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICAgIC8vIFNhZmFyaSBzdXBwb3J0cyBkcm9wcGluZyBhbiBpbWFnZSBub2RlIGZyb20gYSBkaWZmZXJlbnQgd2luZG93IGFuZCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nXG4gICAgLy8gdGhlIERhdGFUcmFuc2Zlckl0ZW0uZ2V0QXNGaWxlKCkgQVBJXG4gICAgLy8gTk9URTogRmlsZVN5c3RlbUVudHJ5LmZpbGUoKSB0aHJvd3MgaWYgdHJ5aW5nIHRvIGdldCB0aGUgZmlsZVxuICAgIGlmIChlbnRyeSAmJiBlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZnJvbURpckVudHJ5KGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pO1xufVxuZnVuY3Rpb24gZmxhdHRlbihpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmlsZXMpIHsgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGFjYyksIGZhbHNlKSwgX19yZWFkKChBcnJheS5pc0FycmF5KGZpbGVzKSA/IGZsYXR0ZW4oZmlsZXMpIDogW2ZpbGVzXSkpLCBmYWxzZSk7IH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pIHtcbiAgICB2YXIgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlwiLmNvbmNhdChpdGVtLCBcIiBpcyBub3QgYSBGaWxlXCIpKTtcbiAgICB9XG4gICAgdmFyIGZ3cCA9IHRvRmlsZVdpdGhQYXRoKGZpbGUpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZndwKTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRW50cnlcbmZ1bmN0aW9uIGZyb21FbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVudHJ5LmlzRGlyZWN0b3J5ID8gZnJvbURpckVudHJ5KGVudHJ5KSA6IGZyb21GaWxlRW50cnkoZW50cnkpXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5XG5mdW5jdGlvbiBmcm9tRGlyRW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gcmVhZEVudHJpZXMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeS9jcmVhdGVSZWFkZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5UmVhZGVyL3JlYWRFbnRyaWVzXG4gICAgICAgICAgICByZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24gKGJhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzLCBlcnJfMSwgaXRlbXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYmF0Y2gubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChlbnRyaWVzKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBQcm9taXNlLmFsbChiYXRjaC5tYXAoZnJvbUVudHJ5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSByZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVFbnRyeVxuZnVuY3Rpb24gZnJvbUZpbGVFbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ3cCA9IHRvRmlsZVdpdGhQYXRoKGZpbGUsIGVudHJ5LmZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZndwKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLXNlbGVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZmlsZSwgYWNjZXB0ZWRGaWxlcykge1xuICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgdmFyIGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xuICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCAnJztcbiAgICB2YXIgbWltZVR5cGUgPSAoZmlsZS50eXBlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgdmFsaWRUeXBlID0gdHlwZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKHZhbGlkVHlwZS5jaGFyQXQoMCkgPT09ICcuJykge1xuICAgICAgICByZXR1cm4gZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCh2YWxpZFR5cGUpO1xuICAgICAgfSBlbHNlIGlmICh2YWxpZFR5cGUuZW5kc1dpdGgoJy8qJykpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59OyIsImltcG9ydCBhY2NlcHRzIGZyb20gXCJhdHRyLWFjY2VwdFwiO1xuXG4vLyBFcnJvciBjb2Rlc1xuZXhwb3J0IGNvbnN0IEZJTEVfSU5WQUxJRF9UWVBFID0gXCJmaWxlLWludmFsaWQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEZJTEVfVE9PX0xBUkdFID0gXCJmaWxlLXRvby1sYXJnZVwiO1xuZXhwb3J0IGNvbnN0IEZJTEVfVE9PX1NNQUxMID0gXCJmaWxlLXRvby1zbWFsbFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX0ZJTEVTID0gXCJ0b28tbWFueS1maWxlc1wiO1xuXG5leHBvcnQgY29uc3QgRXJyb3JDb2RlID0ge1xuICBGaWxlSW52YWxpZFR5cGU6IEZJTEVfSU5WQUxJRF9UWVBFLFxuICBGaWxlVG9vTGFyZ2U6IEZJTEVfVE9PX0xBUkdFLFxuICBGaWxlVG9vU21hbGw6IEZJTEVfVE9PX1NNQUxMLFxuICBUb29NYW55RmlsZXM6IFRPT19NQU5ZX0ZJTEVTLFxufTtcblxuLy8gRmlsZSBFcnJvcnNcbmV4cG9ydCBjb25zdCBnZXRJbnZhbGlkVHlwZVJlamVjdGlvbkVyciA9IChhY2NlcHQpID0+IHtcbiAgYWNjZXB0ID0gQXJyYXkuaXNBcnJheShhY2NlcHQpICYmIGFjY2VwdC5sZW5ndGggPT09IDEgPyBhY2NlcHRbMF0gOiBhY2NlcHQ7XG4gIGNvbnN0IG1lc3NhZ2VTdWZmaXggPSBBcnJheS5pc0FycmF5KGFjY2VwdClcbiAgICA/IGBvbmUgb2YgJHthY2NlcHQuam9pbihcIiwgXCIpfWBcbiAgICA6IGFjY2VwdDtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX0lOVkFMSURfVFlQRSxcbiAgICBtZXNzYWdlOiBgRmlsZSB0eXBlIG11c3QgYmUgJHttZXNzYWdlU3VmZml4fWAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIgPSAobWF4U2l6ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IEZJTEVfVE9PX0xBUkdFLFxuICAgIG1lc3NhZ2U6IGBGaWxlIGlzIGxhcmdlciB0aGFuICR7bWF4U2l6ZX0gJHtcbiAgICAgIG1heFNpemUgPT09IDEgPyBcImJ5dGVcIiA6IFwiYnl0ZXNcIlxuICAgIH1gLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyID0gKG1pblNpemUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX1RPT19TTUFMTCxcbiAgICBtZXNzYWdlOiBgRmlsZSBpcyBzbWFsbGVyIHRoYW4gJHttaW5TaXplfSAke1xuICAgICAgbWluU2l6ZSA9PT0gMSA/IFwiYnl0ZVwiIDogXCJieXRlc1wiXG4gICAgfWAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgVE9PX01BTllfRklMRVNfUkVKRUNUSU9OID0ge1xuICBjb2RlOiBUT09fTUFOWV9GSUxFUyxcbiAgbWVzc2FnZTogXCJUb28gbWFueSBmaWxlc1wiLFxufTtcblxuLy8gRmlyZWZveCB2ZXJzaW9ucyBwcmlvciB0byA1MyByZXR1cm4gYSBib2d1cyBNSU1FIHR5cGUgZm9yIGV2ZXJ5IGZpbGUgZHJhZywgc28gZHJhZ292ZXJzIHdpdGhcbi8vIHRoYXQgTUlNRSB0eXBlIHdpbGwgYWx3YXlzIGJlIGFjY2VwdGVkXG5leHBvcnQgZnVuY3Rpb24gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdCkge1xuICBjb25zdCBpc0FjY2VwdGFibGUgPVxuICAgIGZpbGUudHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LW1vei1maWxlXCIgfHwgYWNjZXB0cyhmaWxlLCBhY2NlcHQpO1xuICByZXR1cm4gW1xuICAgIGlzQWNjZXB0YWJsZSxcbiAgICBpc0FjY2VwdGFibGUgPyBudWxsIDogZ2V0SW52YWxpZFR5cGVSZWplY3Rpb25FcnIoYWNjZXB0KSxcbiAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSkge1xuICBpZiAoaXNEZWZpbmVkKGZpbGUuc2l6ZSkpIHtcbiAgICBpZiAoaXNEZWZpbmVkKG1pblNpemUpICYmIGlzRGVmaW5lZChtYXhTaXplKSkge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IG1heFNpemUpIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgICAgIGlmIChmaWxlLnNpemUgPCBtaW5TaXplKSByZXR1cm4gW2ZhbHNlLCBnZXRUb29TbWFsbFJlamVjdGlvbkVycihtaW5TaXplKV07XG4gICAgfSBlbHNlIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgZmlsZS5zaXplIDwgbWluU2l6ZSlcbiAgICAgIHJldHVybiBbZmFsc2UsIGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyKG1pblNpemUpXTtcbiAgICBlbHNlIGlmIChpc0RlZmluZWQobWF4U2l6ZSkgJiYgZmlsZS5zaXplID4gbWF4U2l6ZSlcbiAgICAgIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgfVxuICByZXR1cm4gW3RydWUsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0ZpbGVbXX0gb3B0aW9ucy5maWxlc1xuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtvcHRpb25zLmFjY2VwdF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5TaXplXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFNpemVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm11bHRpcGxlXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heEZpbGVzXVxuICogQHBhcmFtIHsoZjogRmlsZSkgPT4gRmlsZUVycm9yfEZpbGVFcnJvcltdfG51bGx9IFtvcHRpb25zLnZhbGlkYXRvcl1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxGaWxlc0FjY2VwdGVkKHtcbiAgZmlsZXMsXG4gIGFjY2VwdCxcbiAgbWluU2l6ZSxcbiAgbWF4U2l6ZSxcbiAgbXVsdGlwbGUsXG4gIG1heEZpbGVzLFxuICB2YWxpZGF0b3IsXG59KSB7XG4gIGlmIChcbiAgICAoIW11bHRpcGxlICYmIGZpbGVzLmxlbmd0aCA+IDEpIHx8XG4gICAgKG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgZmlsZXMubGVuZ3RoID4gbWF4RmlsZXMpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlcy5ldmVyeSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IFthY2NlcHRlZF0gPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KTtcbiAgICBjb25zdCBbc2l6ZU1hdGNoXSA9IGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSk7XG4gICAgY29uc3QgY3VzdG9tRXJyb3JzID0gdmFsaWRhdG9yID8gdmFsaWRhdG9yKGZpbGUpIDogbnVsbDtcbiAgICByZXR1cm4gYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoICYmICFjdXN0b21FcnJvcnM7XG4gIH0pO1xufVxuXG4vLyBSZWFjdCdzIHN5bnRoZXRpYyBldmVudHMgaGFzIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkLFxuLy8gYnV0IHRvIHJlbWFpbiBjb21wYXRpYmlsaXR5IHdpdGggb3RoZXIgbGlicyAoUHJlYWN0KSBmYWxsIGJhY2tcbi8vIHRvIGNoZWNrIGV2ZW50LmNhbmNlbEJ1YmJsZVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5jYW5jZWxCdWJibGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZXZlbnQuY2FuY2VsQnViYmxlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSB7XG4gIGlmICghZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgcmV0dXJuICEhZXZlbnQudGFyZ2V0ICYmICEhZXZlbnQudGFyZ2V0LmZpbGVzO1xuICB9XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXIvdHlwZXNcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxfRHJhZ19hbmRfRHJvcF9BUEkvUmVjb21tZW5kZWRfZHJhZ190eXBlcyNmaWxlXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKFxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyxcbiAgICAodHlwZSkgPT4gdHlwZSA9PT0gXCJGaWxlc1wiIHx8IHR5cGUgPT09IFwiYXBwbGljYXRpb24veC1tb3otZmlsZVwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0tpbmRGaWxlKGl0ZW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbS5raW5kID09PSBcImZpbGVcIjtcbn1cblxuLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGlzSWUodXNlckFnZW50KSB7XG4gIHJldHVybiAoXG4gICAgdXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnQvXCIpICE9PSAtMVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0VkZ2UodXNlckFnZW50KSB7XG4gIHJldHVybiB1c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2UvXCIpICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWVPckVkZ2UodXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgcmV0dXJuIGlzSWUodXNlckFnZW50KSB8fCBpc0VkZ2UodXNlckFnZW50KTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgdG8gY29tcG9zZSBldmVudCBoYW5kbGVyc1xuICogVGhleSBhcmUgZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgb25lIG9mIHRoZW0gY2FsbHMgYGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClgLlxuICogTm90ZSB0aGF0IHRoZSBjaGVjayBpcyBkb25lIG9uIHRoZSBmaXJzdCBpbnZva2UgdG9vLFxuICogbWVhbmluZyB0aGF0IGlmIHByb3BhZ2F0aW9uIHdhcyBzdG9wcGVkIGJlZm9yZSBpbnZva2luZyB0aGUgZm5zLFxuICogbm8gaGFuZGxlcnMgd2lsbCBiZSBleGVjdXRlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbnMgdGhlIGV2ZW50IGhhbmxkZXIgZnVuY3Rpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VFdmVudEhhbmRsZXJzKC4uLmZucykge1xuICByZXR1cm4gKGV2ZW50LCAuLi5hcmdzKSA9PlxuICAgIGZucy5zb21lKChmbikgPT4ge1xuICAgICAgaWYgKCFpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgZm4pIHtcbiAgICAgICAgZm4oZXZlbnQsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJIGNoZWNrcyBpZiB0aGUgW0ZpbGUgU3lzdGVtIEFjY2VzcyBBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJKVxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJKCkge1xuICByZXR1cm4gXCJzaG93T3BlbkZpbGVQaWNrZXJcIiBpbiB3aW5kb3c7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgYHthY2NlcHR9YCBkcm9wem9uZSBwcm9wIHRvIHRoZVxuICogYHt0eXBlc31gIG9wdGlvbiBmb3IgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9zaG93T3BlbkZpbGVQaWNrZXJcbiAqXG4gKiBAcGFyYW0ge0FjY2VwdFByb3B9IGFjY2VwdFxuICogQHJldHVybnMge3thY2NlcHQ6IHN0cmluZ1tdfVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQoYWNjZXB0KSB7XG4gIGlmIChpc0RlZmluZWQoYWNjZXB0KSkge1xuICAgIGNvbnN0IGFjY2VwdEZvclBpY2tlciA9IE9iamVjdC5lbnRyaWVzKGFjY2VwdClcbiAgICAgIC5maWx0ZXIoKFttaW1lVHlwZSwgZXh0XSkgPT4ge1xuICAgICAgICBsZXQgb2sgPSB0cnVlO1xuXG4gICAgICAgIGlmICghaXNNSU1FVHlwZShtaW1lVHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgU2tpcHBlZCBcIiR7bWltZVR5cGV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYSB2YWxpZCBNSU1FIHR5cGUuIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvTUlNRV90eXBlcy9Db21tb25fdHlwZXMgZm9yIGEgbGlzdCBvZiB2YWxpZCBNSU1FIHR5cGVzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0KSB8fCAhZXh0LmV2ZXJ5KGlzRXh0KSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBTa2lwcGVkIFwiJHttaW1lVHlwZX1cIiBiZWNhdXNlIGFuIGludmFsaWQgZmlsZSBleHRlbnNpb24gd2FzIHByb3ZpZGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2s7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGFnZywgW21pbWVUeXBlLCBleHRdKSA9PiAoe1xuICAgICAgICAgIC4uLmFnZyxcbiAgICAgICAgICBbbWltZVR5cGVdOiBleHQsXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICAvLyBkZXNjcmlwdGlvbiBpcyByZXF1aXJlZCBkdWUgdG8gaHR0cHM6Ly9jcmJ1Zy5jb20vMTI2NDcwOFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGaWxlc1wiLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEZvclBpY2tlcixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuICByZXR1cm4gYWNjZXB0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgdGhlIGB7YWNjZXB0fWAgZHJvcHpvbmUgcHJvcCB0byBhbiBhcnJheSBvZiBNSU1FIHR5cGVzL2V4dGVuc2lvbnMuXG4gKiBAcGFyYW0ge0FjY2VwdFByb3B9IGFjY2VwdFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjY2VwdFByb3BBc0FjY2VwdEF0dHIoYWNjZXB0KSB7XG4gIGlmIChpc0RlZmluZWQoYWNjZXB0KSkge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QuZW50cmllcyhhY2NlcHQpXG4gICAgICAgIC5yZWR1Y2UoKGEsIFttaW1lVHlwZSwgZXh0XSkgPT4gWy4uLmEsIG1pbWVUeXBlLCAuLi5leHRdLCBbXSlcbiAgICAgICAgLy8gU2lsZW50bHkgZGlzY2FyZCBpbnZhbGlkIGVudHJpZXMgYXMgcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQgd2FybnMgYWJvdXQgdGhlc2VcbiAgICAgICAgLmZpbHRlcigodikgPT4gaXNNSU1FVHlwZSh2KSB8fCBpc0V4dCh2KSlcbiAgICAgICAgLmpvaW4oXCIsXCIpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdiBpcyBhbiBleGNlcHRpb24gY2F1c2VkIGJ5IGFib3J0aW5nIGEgcmVxdWVzdCAoZS5nIHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIoKSkuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24uXG4gKiBAcGFyYW0ge2FueX0gdlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdiBpcyBhbiBhYm9ydCBleGNlcHRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Fib3J0KHYpIHtcbiAgcmV0dXJuIChcbiAgICB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgKHYubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIgfHwgdi5jb2RlID09PSB2LkFCT1JUX0VSUilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgc2VjdXJpdHkgZXJyb3IuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24uXG4gKiBAcGFyYW0ge2FueX0gdlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdiBpcyBhIHNlY3VyaXR5IGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZWN1cml0eUVycm9yKHYpIHtcbiAgcmV0dXJuIChcbiAgICB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgKHYubmFtZSA9PT0gXCJTZWN1cml0eUVycm9yXCIgfHwgdi5jb2RlID09PSB2LlNFQ1VSSVRZX0VSUilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgTUlNRSB0eXBlIHN0cmluZy5cbiAqXG4gKiBTZWUgYWNjZXB0ZWQgZm9ybWF0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQvZmlsZSN1bmlxdWVfZmlsZV90eXBlX3NwZWNpZmllcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTUlNRVR5cGUodikge1xuICByZXR1cm4gKFxuICAgIHYgPT09IFwiYXVkaW8vKlwiIHx8XG4gICAgdiA9PT0gXCJ2aWRlby8qXCIgfHxcbiAgICB2ID09PSBcImltYWdlLypcIiB8fFxuICAgIHYgPT09IFwidGV4dC8qXCIgfHxcbiAgICAvXFx3K1xcL1stKy5cXHddKy9nLnRlc3QodilcbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgZmlsZSBleHRlbnNpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gdlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFeHQodikge1xuICByZXR1cm4gL14uKlxcLltcXHddKyQvLnRlc3Qodik7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdC48c3RyaW5nLCBzdHJpbmdbXT59IEFjY2VwdFByb3BcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEZpbGVFcnJvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7RXJyb3JDb2RlfHN0cmluZ30gY29kZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1wiZmlsZS1pbnZhbGlkLXR5cGVcInxcImZpbGUtdG9vLWxhcmdlXCJ8XCJmaWxlLXRvby1zbWFsbFwifFwidG9vLW1hbnktZmlsZXNcIn0gRXJyb3JDb2RlXG4gKi9cbiIsIi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICBGcmFnbWVudCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgdXNlUmVkdWNlcixcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJmaWxlLXNlbGVjdG9yXCI7XG5pbXBvcnQge1xuICBhY2NlcHRQcm9wQXNBY2NlcHRBdHRyLFxuICBhbGxGaWxlc0FjY2VwdGVkLFxuICBjb21wb3NlRXZlbnRIYW5kbGVycyxcbiAgZmlsZUFjY2VwdGVkLFxuICBmaWxlTWF0Y2hTaXplLFxuICBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJLFxuICBpc0Fib3J0LFxuICBpc0V2dFdpdGhGaWxlcyxcbiAgaXNJZU9yRWRnZSxcbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQsXG4gIGlzU2VjdXJpdHlFcnJvcixcbiAgb25Eb2N1bWVudERyYWdPdmVyLFxuICBwaWNrZXJPcHRpb25zRnJvbUFjY2VwdCxcbiAgVE9PX01BTllfRklMRVNfUkVKRUNUSU9OLFxufSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgY29tcG9uZW50IGZvciB0aGUgYHVzZURyb3B6b25lYCBob29rXG4gKlxuICogYGBganN4XG4gKiA8RHJvcHpvbmU+XG4gKiAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcbiAqICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0+XG4gKiAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAqICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gKiAgICAgPC9kaXY+XG4gKiAgICl9XG4gKiA8L0Ryb3B6b25lPlxuICogYGBgXG4gKi9cbmNvbnN0IERyb3B6b25lID0gZm9yd2FyZFJlZigoeyBjaGlsZHJlbiwgLi4ucGFyYW1zIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IG9wZW4sIC4uLnByb3BzIH0gPSB1c2VEcm9wem9uZShwYXJhbXMpO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoeyBvcGVuIH0pLCBbb3Blbl0pO1xuXG4gIC8vIFRPRE86IEZpZ3VyZSBvdXQgd2h5IHJlYWN0LXN0eWxlZ3VpZGlzdCBjYW5ub3QgY3JlYXRlIGRvY3MgaWYgd2UgZG9uJ3QgcmV0dXJuIGEganN4IGVsZW1lbnRcbiAgcmV0dXJuIDxGcmFnbWVudD57Y2hpbGRyZW4oeyAuLi5wcm9wcywgb3BlbiB9KX08L0ZyYWdtZW50Pjtcbn0pO1xuXG5Ecm9wem9uZS5kaXNwbGF5TmFtZSA9IFwiRHJvcHpvbmVcIjtcblxuLy8gQWRkIGRlZmF1bHQgcHJvcHMgZm9yIHJlYWN0LWRvY2dlblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBmcm9tRXZlbnQsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4RmlsZXM6IDAsXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogdHJ1ZSxcbiAgbm9DbGljazogZmFsc2UsXG4gIG5vS2V5Ym9hcmQ6IGZhbHNlLFxuICBub0RyYWc6IGZhbHNlLFxuICBub0RyYWdFdmVudHNCdWJibGluZzogZmFsc2UsXG4gIHZhbGlkYXRvcjogbnVsbCxcbiAgdXNlRnNBY2Nlc3NBcGk6IHRydWUsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG59O1xuXG5Ecm9wem9uZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbkRyb3B6b25lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFJlbmRlciBmdW5jdGlvbiB0aGF0IGV4cG9zZXMgdGhlIGRyb3B6b25lIHN0YXRlIGFuZCBwcm9wIGdldHRlciBmbnNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMuZ2V0Um9vdFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gdGhlIHJvb3QgZHJvcCBjb250YWluZXIgeW91IHJlbmRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMuZ2V0SW5wdXRQcm9wcyBSZXR1cm5zIHRoZSBwcm9wcyB5b3Ugc2hvdWxkIGFwcGx5IHRvIGhpZGRlbiBmaWxlIGlucHV0IHlvdSByZW5kZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyYW1zLm9wZW4gT3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0ZvY3VzZWQgRHJvcHpvbmUgYXJlYSBpcyBpbiBmb2N1c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0ZpbGVEaWFsb2dBY3RpdmUgRmlsZSBkaWFsb2cgaXMgb3BlbmVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRHJhZ0FjdGl2ZSBBY3RpdmUgZHJhZyBpcyBpbiBwcm9ncmVzc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0RyYWdBY2NlcHQgRHJhZ2dlZCBmaWxlcyBhcmUgYWNjZXB0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNEcmFnUmVqZWN0IFNvbWUgZHJhZ2dlZCBmaWxlcyBhcmUgcmVqZWN0ZWRcbiAgICogQHBhcmFtIHtGaWxlW119IHBhcmFtcy5hY2NlcHRlZEZpbGVzIEFjY2VwdGVkIGZpbGVzXG4gICAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBwYXJhbXMuZmlsZVJlamVjdGlvbnMgUmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU2V0IGFjY2VwdGVkIGZpbGUgdHlwZXMuXG4gICAqIENoZWNrb3V0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd09wZW5GaWxlUGlja2VyIHR5cGVzIG9wdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbCAoaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy8yNzYpLlxuICAgKi9cbiAgYWNjZXB0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZykpLFxuXG4gIC8qKlxuICAgKiBBbGxvdyBkcmFnICduJyBkcm9wIChvciBzZWxlY3Rpb24gZnJvbSB0aGUgZmlsZSBkaWFsb2cpIG9mIG11bHRpcGxlIGZpbGVzXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICAgKi9cbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGlzYWJsZXMgY2xpY2sgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICAgKi9cbiAgbm9DbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRpc2FibGVzIFNQQUNFL0VOVEVSIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2cuXG4gICAqIE5vdGUgdGhhdCBpdCBhbHNvIHN0b3BzIHRyYWNraW5nIHRoZSBmb2N1cyBzdGF0ZS5cbiAgICovXG4gIG5vS2V5Ym9hcmQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBkaXNhYmxlcyBkcmFnICduJyBkcm9wXG4gICAqL1xuICBub0RyYWc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdG9wcyBkcmFnIGV2ZW50IHByb3BhZ2F0aW9uIHRvIHBhcmVudHNcbiAgICovXG4gIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWluaW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICAgKi9cbiAgbWluU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTWF4aW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICAgKi9cbiAgbWF4U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gYWNjZXB0ZWQgbnVtYmVyIG9mIGZpbGVzXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAgd2hpY2ggbWVhbnMgdGhlcmUgaXMgbm8gbGltaXRhdGlvbiB0byBob3cgbWFueSBmaWxlcyBhcmUgYWNjZXB0ZWQuXG4gICAqL1xuICBtYXhGaWxlczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIHByb3ZpZGUgYSBjdXN0b20gZmlsZSBhZ2dyZWdhdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAgICovXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gY2xvc2luZyB0aGUgZmlsZSBkaWFsb2cgd2l0aCBubyBzZWxlY3Rpb25cbiAgICovXG4gIG9uRmlsZURpYWxvZ0NhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgZGlhbG9nXG4gICAqL1xuICBvbkZpbGVEaWFsb2dPcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gdXNlIHRoZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSVxuICAgKiB0byBvcGVuIHRoZSBmaWxlIHBpY2tlciBpbnN0ZWFkIG9mIHVzaW5nIGFuIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5gIGNsaWNrIGV2ZW50LlxuICAgKi9cbiAgdXNlRnNBY2Nlc3NBcGk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBmb2N1cyB0aGUgcm9vdCBlbGVtZW50IG9uIHJlbmRlclxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnZW50ZXJgIGV2ZW50IG9jY3Vycy5cbiAgICpcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkRyYWdFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJhZ2xlYXZlYCBldmVudCBvY2N1cnNcbiAgICpcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkRyYWdMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJhZ292ZXJgIGV2ZW50IG9jY3Vyc1xuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ092ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IHRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB0aGUgYGdldEZpbGVzRnJvbUV2ZW50YCBjYWxsYmFjayBpcyBkb25lLlxuICAgKlxuICAgKiBGaWxlcyBhcmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYmFzZWQgb24gdGhlIGBhY2NlcHRgLCBgbXVsdGlwbGVgLCBgbWluU2l6ZWAgYW5kIGBtYXhTaXplYCBwcm9wcy5cbiAgICogYGFjY2VwdGAgbXVzdCBiZSBhIHZhbGlkIFtNSU1FIHR5cGVdKGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWwpIGFjY29yZGluZyB0byBbaW5wdXQgZWxlbWVudCBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvd2lraS9IVE1ML0VsZW1lbnRzL2lucHV0L2ZpbGUpIG9yIGEgdmFsaWQgZmlsZSBleHRlbnNpb24uXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGZhbHNlIGFuZCBhZGRpdGlvbmFsIGZpbGVzIGFyZSBkcm9wcGVkLFxuICAgKiBhbGwgZmlsZXMgYmVzaWRlcyB0aGUgZmlyc3Qgd2lsbCBiZSByZWplY3RlZC5cbiAgICogQW55IGZpbGUgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHNpemUgaW4gdGhlIFtgbWluU2l6ZWAsIGBtYXhTaXplYF0gcmFuZ2UsIHdpbGwgYmUgcmVqZWN0ZWQgYXMgd2VsbC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBgb25Ecm9wYCBjYWxsYmFjayB3aWxsIGFsd2F5cyBiZSBpbnZva2VkIHJlZ2FyZGxlc3MgaWYgdGhlIGRyb3BwZWQgZmlsZXMgd2VyZSBhY2NlcHRlZCBvciByZWplY3RlZC5cbiAgICogSWYgeW91J2QgbGlrZSB0byByZWFjdCB0byBhIHNwZWNpZmljIHNjZW5hcmlvLCB1c2UgdGhlIGBvbkRyb3BBY2NlcHRlZGAvYG9uRHJvcFJlamVjdGVkYCBwcm9wcy5cbiAgICpcbiAgICogYG9uRHJvcGAgd2lsbCBwcm92aWRlIHlvdSB3aXRoIGFuIGFycmF5IG9mIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkgb2JqZWN0cyB3aGljaCB5b3UgY2FuIHRoZW4gcHJvY2VzcyBhbmQgc2VuZCB0byBhIHNlcnZlci5cbiAgICogRm9yIGV4YW1wbGUsIHdpdGggW1N1cGVyQWdlbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9zdXBlcmFnZW50KSBhcyBhIGh0dHAvYWpheCBsaWJyYXJ5OlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBmdW5jdGlvbiBvbkRyb3AoYWNjZXB0ZWRGaWxlcykge1xuICAgKiAgIGNvbnN0IHJlcSA9IHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gICAqICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgKiAgICAgcmVxLmF0dGFjaChmaWxlLm5hbWUsIGZpbGUpXG4gICAqICAgfSlcbiAgICogICByZXEuZW5kKGNhbGxiYWNrKVxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbGVbXX0gYWNjZXB0ZWRGaWxlc1xuICAgKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnNcbiAgICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICAgKi9cbiAgb25Ecm9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gICAqIE5vdGUgdGhhdCBpZiBubyBmaWxlcyBhcmUgYWNjZXB0ZWQsIHRoaXMgY2FsbGJhY2sgaXMgbm90IGludm9rZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZVtdfSBmaWxlc1xuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudFxuICAgKi9cbiAgb25Ecm9wQWNjZXB0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IGlmIG5vIGZpbGVzIGFyZSByZWplY3RlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgaW52b2tlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50XG4gICAqL1xuICBvbkRyb3BSZWplY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZXJlJ3Mgc29tZSBlcnJvciBmcm9tIGFueSBvZiB0aGUgcHJvbWlzZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqL1xuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb24uIEl0IG11c3QgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBlcnJvcnMuXG4gICAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICAgKiBAcmV0dXJucyB7RmlsZUVycm9yfEZpbGVFcnJvcltdfG51bGx9XG4gICAqL1xuICB2YWxpZGF0b3I6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJhZ2VudGVyYCxcbiAqIGBkcmFnb3ZlcmAgYW5kIGBkcmFnbGVhdmVgIGV2ZW50cy5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgbm90IGZpbGVzIChzdWNoIGFzIGxpbmssIHRleHQsIGV0Yy4pLlxuICpcbiAqIEBjYWxsYmFjayBkcmFnQ2JcbiAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogSXQgaXMgbm90IGludm9rZWQgaWYgdGhlIGl0ZW1zIGFyZSBub3QgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BDYlxuICogQHBhcmFtIHtGaWxlW119IGFjY2VwdGVkRmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlc1xuICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyb3BgIG9yIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BBY2NlcHRlZENiXG4gKiBAcGFyYW0ge0ZpbGVbXX0gZmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlcyB0aGF0IG1lZXQgdGhlIGdpdmVuIGNyaXRlcmlhXG4gKiAoYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCwgYG1heFNpemVgKVxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICpcbiAqIEBjYWxsYmFjayBkcm9wUmVqZWN0ZWRDYlxuICogQHBhcmFtIHtGaWxlW119IGZpbGVzIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgdGhhdCBkbyBub3QgbWVldCB0aGUgZ2l2ZW4gY3JpdGVyaWFcbiAqIChgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgLCBgbWF4U2l6ZWApXG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCBhZ2dyZWdhdGUgZmlsZXMsXG4gKiBpbiBhIGFzeW5jaHJvbm91cyBmYXNoaW9uLCBmcm9tIGRyYWcgb3IgaW5wdXQgY2hhbmdlIGV2ZW50cy5cbiAqXG4gKiBAY2FsbGJhY2sgZ2V0RmlsZXNGcm9tRXZlbnRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqIEByZXR1cm5zIHsoRmlsZVtdfFByb21pc2U8RmlsZVtdPil9XG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBkcm9wem9uZSBzdGF0ZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEcm9wem9uZVN0YXRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICogQHByb3BlcnR5IHtGaWxlW119IGFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAqIEBwcm9wZXJ0eSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggdGhlIGRyb3B6b25lIG1ldGhvZHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRHJvcHpvbmVNZXRob2RzXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gKi9cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlLFxuICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICBpc0RyYWdBY2NlcHQ6IGZhbHNlLFxuICBpc0RyYWdSZWplY3Q6IGZhbHNlLFxuICBhY2NlcHRlZEZpbGVzOiBbXSxcbiAgZmlsZVJlamVjdGlvbnM6IFtdLFxufTtcblxuLyoqXG4gKiBBIFJlYWN0IGhvb2sgdGhhdCBjcmVhdGVzIGEgZHJhZyAnbicgZHJvcCBhcmVhLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gTXlEcm9wem9uZShwcm9wcykge1xuICogICBjb25zdCB7Z2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzfSA9IHVzZURyb3B6b25lKHtcbiAqICAgICBvbkRyb3A6IGFjY2VwdGVkRmlsZXMgPT4ge1xuICogICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIEZpbGUgb2JqZWN0cywgZS5nLiB1cGxvYWQgdG8gc29tZSBzZXJ2ZXJcbiAqICAgICB9XG4gKiAgIH0pO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cbiAqICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICogICAgICAgPHA+RHJhZyBhbmQgZHJvcCBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlczwvcD5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQGZ1bmN0aW9uIHVzZURyb3B6b25lXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vdXRpbHNcIikuQWNjZXB0UHJvcH0gW3Byb3BzLmFjY2VwdF0gU2V0IGFjY2VwdGVkIGZpbGUgdHlwZXMuXG4gKiBDaGVja291dCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlciB0eXBlcyBvcHRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKiBLZWVwIGluIG1pbmQgdGhhdCBtaW1lIHR5cGUgZGV0ZXJtaW5hdGlvbiBpcyBub3QgcmVsaWFibGUgYWNyb3NzIHBsYXRmb3Jtcy4gQ1NWIGZpbGVzLFxuICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAqIFdpbmRvd3MuIEluIHNvbWUgY2FzZXMgdGhlcmUgbWlnaHQgbm90IGJlIGEgbWltZSB0eXBlIHNldCBhdCBhbGwgKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvMjc2KS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm11bHRpcGxlPXRydWVdIEFsbG93IGRyYWcgJ24nIGRyb3AgKG9yIHNlbGVjdGlvbiBmcm9tIHRoZSBmaWxlIGRpYWxvZykgb2YgbXVsdGlwbGUgZmlsZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudD10cnVlXSBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vQ2xpY2s9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIGNsaWNrIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2dcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vS2V5Ym9hcmQ9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIFNQQUNFL0VOVEVSIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2cuXG4gKiBOb3RlIHRoYXQgaXQgYWxzbyBzdG9wcyB0cmFja2luZyB0aGUgZm9jdXMgc3RhdGUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5ub0RyYWc9ZmFsc2VdIElmIHRydWUsIGRpc2FibGVzIGRyYWcgJ24nIGRyb3BcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vRHJhZ0V2ZW50c0J1YmJsaW5nPWZhbHNlXSBJZiB0cnVlLCBzdG9wcyBkcmFnIGV2ZW50IHByb3BhZ2F0aW9uIHRvIHBhcmVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWluU2l6ZT0wXSBNaW5pbXVtIGZpbGUgc2l6ZSAoaW4gYnl0ZXMpXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLm1heFNpemU9SW5maW5pdHldIE1heGltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLmRpc2FibGVkPWZhbHNlXSBFbmFibGUvZGlzYWJsZSB0aGUgZHJvcHpvbmVcbiAqIEBwYXJhbSB7Z2V0RmlsZXNGcm9tRXZlbnR9IFtwcm9wcy5nZXRGaWxlc0Zyb21FdmVudF0gVXNlIHRoaXMgdG8gcHJvdmlkZSBhIGN1c3RvbSBmaWxlIGFnZ3JlZ2F0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWxdIENiIGZvciB3aGVuIGNsb3NpbmcgdGhlIGZpbGUgZGlhbG9nIHdpdGggbm8gc2VsZWN0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy51c2VGc0FjY2Vzc0FwaV0gU2V0IHRvIHRydWUgdG8gdXNlIHRoZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSVxuICogdG8gb3BlbiB0aGUgZmlsZSBwaWNrZXIgaW5zdGVhZCBvZiB1c2luZyBhbiBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YCBjbGljayBldmVudC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b0ZvY3VzIFNldCB0byB0cnVlIHRvIGF1dG8gZm9jdXMgdGhlIHJvb3QgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wcy5vbkZpbGVEaWFsb2dPcGVuXSBDYiBmb3Igd2hlbiBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZ1xuICogQHBhcmFtIHtkcmFnQ2J9IFtwcm9wcy5vbkRyYWdFbnRlcl0gQ2IgZm9yIHdoZW4gdGhlIGBkcmFnZW50ZXJgIGV2ZW50IG9jY3Vycy5cbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnTGVhdmVdIENiIGZvciB3aGVuIHRoZSBgZHJhZ2xlYXZlYCBldmVudCBvY2N1cnNcbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnT3Zlcl0gQ2IgZm9yIHdoZW4gdGhlIGBkcmFnb3ZlcmAgZXZlbnQgb2NjdXJzXG4gKiBAcGFyYW0ge2Ryb3BDYn0gW3Byb3BzLm9uRHJvcF0gQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBgZ2V0RmlsZXNGcm9tRXZlbnRgIGNhbGxiYWNrIGlzIGRvbmUuXG4gKlxuICogRmlsZXMgYXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJhc2VkIG9uIHRoZSBgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgIGFuZCBgbWF4U2l6ZWAgcHJvcHMuXG4gKiBgYWNjZXB0YCBtdXN0IGJlIGFuIG9iamVjdCB3aXRoIGtleXMgYXMgYSB2YWxpZCBbTUlNRSB0eXBlXShodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sKSBhY2NvcmRpbmcgdG8gW2lucHV0IGVsZW1lbnQgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9FbGVtZW50cy9pbnB1dC9maWxlKSBhbmQgdGhlIHZhbHVlIGFuIGFycmF5IG9mIGZpbGUgZXh0ZW5zaW9ucyAob3B0aW9uYWwpLlxuICogSWYgYG11bHRpcGxlYCBpcyBzZXQgdG8gZmFsc2UgYW5kIGFkZGl0aW9uYWwgZmlsZXMgYXJlIGRyb3BwZWQsXG4gKiBhbGwgZmlsZXMgYmVzaWRlcyB0aGUgZmlyc3Qgd2lsbCBiZSByZWplY3RlZC5cbiAqIEFueSBmaWxlIHdoaWNoIGRvZXMgbm90IGhhdmUgYSBzaXplIGluIHRoZSBbYG1pblNpemVgLCBgbWF4U2l6ZWBdIHJhbmdlLCB3aWxsIGJlIHJlamVjdGVkIGFzIHdlbGwuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBgb25Ecm9wYCBjYWxsYmFjayB3aWxsIGFsd2F5cyBiZSBpbnZva2VkIHJlZ2FyZGxlc3MgaWYgdGhlIGRyb3BwZWQgZmlsZXMgd2VyZSBhY2NlcHRlZCBvciByZWplY3RlZC5cbiAqIElmIHlvdSdkIGxpa2UgdG8gcmVhY3QgdG8gYSBzcGVjaWZpYyBzY2VuYXJpbywgdXNlIHRoZSBgb25Ecm9wQWNjZXB0ZWRgL2BvbkRyb3BSZWplY3RlZGAgcHJvcHMuXG4gKlxuICogYG9uRHJvcGAgd2lsbCBwcm92aWRlIHlvdSB3aXRoIGFuIGFycmF5IG9mIFtGaWxlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZSkgb2JqZWN0cyB3aGljaCB5b3UgY2FuIHRoZW4gcHJvY2VzcyBhbmQgc2VuZCB0byBhIHNlcnZlci5cbiAqIEZvciBleGFtcGxlLCB3aXRoIFtTdXBlckFnZW50XShodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvc3VwZXJhZ2VudCkgYXMgYSBodHRwL2FqYXggbGlicmFyeTpcbiAqXG4gKiBgYGBqc1xuICogZnVuY3Rpb24gb25Ecm9wKGFjY2VwdGVkRmlsZXMpIHtcbiAqICAgY29uc3QgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICogICAgIHJlcS5hdHRhY2goZmlsZS5uYW1lLCBmaWxlKVxuICogICB9KVxuICogICByZXEuZW5kKGNhbGxiYWNrKVxuICogfVxuICogYGBgXG4gKiBAcGFyYW0ge2Ryb3BBY2NlcHRlZENifSBbcHJvcHMub25Ecm9wQWNjZXB0ZWRdXG4gKiBAcGFyYW0ge2Ryb3BSZWplY3RlZENifSBbcHJvcHMub25Ecm9wUmVqZWN0ZWRdXG4gKiBAcGFyYW0geyhlcnJvcjogRXJyb3IpID0+IHZvaWR9IFtwcm9wcy5vbkVycm9yXVxuICpcbiAqIEByZXR1cm5zIHtEcm9wem9uZVN0YXRlICYgRHJvcHpvbmVNZXRob2RzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHpvbmUocHJvcHMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgYWNjZXB0LFxuICAgIGRpc2FibGVkLFxuICAgIGdldEZpbGVzRnJvbUV2ZW50LFxuICAgIG1heFNpemUsXG4gICAgbWluU2l6ZSxcbiAgICBtdWx0aXBsZSxcbiAgICBtYXhGaWxlcyxcbiAgICBvbkRyYWdFbnRlcixcbiAgICBvbkRyYWdMZWF2ZSxcbiAgICBvbkRyYWdPdmVyLFxuICAgIG9uRHJvcCxcbiAgICBvbkRyb3BBY2NlcHRlZCxcbiAgICBvbkRyb3BSZWplY3RlZCxcbiAgICBvbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgb25GaWxlRGlhbG9nT3BlbixcbiAgICB1c2VGc0FjY2Vzc0FwaSxcbiAgICBhdXRvRm9jdXMsXG4gICAgcHJldmVudERyb3BPbkRvY3VtZW50LFxuICAgIG5vQ2xpY2ssXG4gICAgbm9LZXlib2FyZCxcbiAgICBub0RyYWcsXG4gICAgbm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgb25FcnJvcixcbiAgICB2YWxpZGF0b3IsXG4gIH0gPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLFxuICAgIC4uLnByb3BzLFxuICB9O1xuXG4gIGNvbnN0IGFjY2VwdEF0dHIgPSB1c2VNZW1vKCgpID0+IGFjY2VwdFByb3BBc0FjY2VwdEF0dHIoYWNjZXB0KSwgW2FjY2VwdF0pO1xuICBjb25zdCBwaWNrZXJUeXBlcyA9IHVzZU1lbW8oKCkgPT4gcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQoYWNjZXB0KSwgW2FjY2VwdF0pO1xuXG4gIGNvbnN0IG9uRmlsZURpYWxvZ09wZW5DYiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHR5cGVvZiBvbkZpbGVEaWFsb2dPcGVuID09PSBcImZ1bmN0aW9uXCIgPyBvbkZpbGVEaWFsb2dPcGVuIDogbm9vcCksXG4gICAgW29uRmlsZURpYWxvZ09wZW5dXG4gICk7XG4gIGNvbnN0IG9uRmlsZURpYWxvZ0NhbmNlbENiID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgdHlwZW9mIG9uRmlsZURpYWxvZ0NhbmNlbCA9PT0gXCJmdW5jdGlvblwiID8gb25GaWxlRGlhbG9nQ2FuY2VsIDogbm9vcCxcbiAgICBbb25GaWxlRGlhbG9nQ2FuY2VsXVxuICApO1xuXG4gIC8qKlxuICAgKiBAY29uc3RhbnRcbiAgICogQHR5cGUge1JlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgY29uc3Qgcm9vdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgeyBpc0ZvY3VzZWQsIGlzRmlsZURpYWxvZ0FjdGl2ZSB9ID0gc3RhdGU7XG5cbiAgY29uc3QgZnNBY2Nlc3NBcGlXb3Jrc1JlZiA9IHVzZVJlZihcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB3aW5kb3cuaXNTZWN1cmVDb250ZXh0ICYmXG4gICAgICB1c2VGc0FjY2Vzc0FwaSAmJlxuICAgICAgY2FuVXNlRmlsZVN5c3RlbUFjY2Vzc0FQSSgpXG4gICk7XG5cbiAgLy8gVXBkYXRlIGZpbGUgZGlhbG9nIGFjdGl2ZSBzdGF0ZSB3aGVuIHRoZSB3aW5kb3cgaXMgZm9jdXNlZCBvblxuICBjb25zdCBvbldpbmRvd0ZvY3VzID0gKCkgPT4ge1xuICAgIC8vIEV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZmlsZSBkaWFsb2cgaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG4gICAgaWYgKCFmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQgJiYgaXNGaWxlRGlhbG9nQWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSBpbnB1dFJlZi5jdXJyZW50O1xuXG4gICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJjbG9zZURpYWxvZ1wiIH0pO1xuICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsQ2IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgZmFsc2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG9uV2luZG93Rm9jdXMsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbaW5wdXRSZWYsIGlzRmlsZURpYWxvZ0FjdGl2ZSwgb25GaWxlRGlhbG9nQ2FuY2VsQ2IsIGZzQWNjZXNzQXBpV29ya3NSZWZdKTtcblxuICBjb25zdCBkcmFnVGFyZ2V0c1JlZiA9IHVzZVJlZihbXSk7XG4gIGNvbnN0IG9uRG9jdW1lbnREcm9wID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHJvb3RSZWYuY3VycmVudCAmJiByb290UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgLy8gSWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFtdO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uRG9jdW1lbnREcmFnT3ZlciwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25Eb2N1bWVudERyYWdPdmVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3ApO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtyb290UmVmLCBwcmV2ZW50RHJvcE9uRG9jdW1lbnRdKTtcblxuICAvLyBBdXRvIGZvY3VzIHRoZSByb290IHdoZW4gYXV0b0ZvY3VzIGlzIHRydWVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge307XG4gIH0sIFtyb290UmVmLCBhdXRvRm9jdXMsIGRpc2FibGVkXSk7XG5cbiAgY29uc3Qgb25FcnJDYiA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAob25FcnJvcikge1xuICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTGV0IHRoZSB1c2VyIGtub3cgc29tZXRoaW5nJ3MgZ29uZSB3cm9uZyBpZiB0aGV5IGhhdmVuJ3QgcHJvdmlkZWQgdGhlIG9uRXJyb3IgY2IuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25FcnJvcl1cbiAgKTtcblxuICBjb25zdCBvbkRyYWdFbnRlckNiID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gUGVyc2lzdCBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0aGUgZXZlbnQgbGF0ZXIgYWZ0ZXIgZ2V0RmlsZXNGcm9tRXZlbnQoKSBpcyBkb25lXG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuXG4gICAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gWy4uLmRyYWdUYXJnZXRzUmVmLmN1cnJlbnQsIGV2ZW50LnRhcmdldF07XG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEZpbGVzRnJvbUV2ZW50KGV2ZW50KSlcbiAgICAgICAgICAudGhlbigoZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgIW5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmlsZUNvdW50ID0gZmlsZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaXNEcmFnQWNjZXB0ID1cbiAgICAgICAgICAgICAgZmlsZUNvdW50ID4gMCAmJlxuICAgICAgICAgICAgICBhbGxGaWxlc0FjY2VwdGVkKHtcbiAgICAgICAgICAgICAgICBmaWxlcyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6IGFjY2VwdEF0dHIsXG4gICAgICAgICAgICAgICAgbWluU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXhTaXplLFxuICAgICAgICAgICAgICAgIG11bHRpcGxlLFxuICAgICAgICAgICAgICAgIG1heEZpbGVzLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBpc0RyYWdSZWplY3QgPSBmaWxlQ291bnQgPiAwICYmICFpc0RyYWdBY2NlcHQ7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgaXNEcmFnQWNjZXB0LFxuICAgICAgICAgICAgICBpc0RyYWdSZWplY3QsXG4gICAgICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJzZXREcmFnZ2VkRmlsZXNcIixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAob25EcmFnRW50ZXIpIHtcbiAgICAgICAgICAgICAgb25EcmFnRW50ZXIoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiBvbkVyckNiKGUpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIGdldEZpbGVzRnJvbUV2ZW50LFxuICAgICAgb25EcmFnRW50ZXIsXG4gICAgICBvbkVyckNiLFxuICAgICAgbm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgICBhY2NlcHRBdHRyLFxuICAgICAgbWluU2l6ZSxcbiAgICAgIG1heFNpemUsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG1heEZpbGVzLFxuICAgICAgdmFsaWRhdG9yLFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBvbkRyYWdPdmVyQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuXG4gICAgICBjb25zdCBoYXNGaWxlcyA9IGlzRXZ0V2l0aEZpbGVzKGV2ZW50KTtcbiAgICAgIGlmIChoYXNGaWxlcyAmJiBldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiO1xuICAgICAgICB9IGNhdGNoIHt9IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHkgKi9cbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0ZpbGVzICYmIG9uRHJhZ092ZXIpIHtcbiAgICAgICAgb25EcmFnT3ZlcihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIFtvbkRyYWdPdmVyLCBub0RyYWdFdmVudHNCdWJibGluZ11cbiAgKTtcblxuICBjb25zdCBvbkRyYWdMZWF2ZUNiID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcblxuICAgICAgLy8gT25seSBkZWFjdGl2YXRlIG9uY2UgdGhlIGRyb3B6b25lIGFuZCBhbGwgY2hpbGRyZW4gaGF2ZSBiZWVuIGxlZnRcbiAgICAgIGNvbnN0IHRhcmdldHMgPSBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50LmZpbHRlcihcbiAgICAgICAgKHRhcmdldCkgPT4gcm9vdFJlZi5jdXJyZW50ICYmIHJvb3RSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpXG4gICAgICApO1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIHJlbW92ZSBhIHRhcmdldCBwcmVzZW50IG11bHRpcGxlIHRpbWVzIG9ubHkgb25jZVxuICAgICAgLy8gKEZpcmVmb3ggbWF5IGZpcmUgZHJhZ2VudGVyL2RyYWdsZWF2ZSBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0SWR4ID0gdGFyZ2V0cy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG4gICAgICBpZiAodGFyZ2V0SWR4ICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRzLnNwbGljZSh0YXJnZXRJZHgsIDEpO1xuICAgICAgfVxuICAgICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IHRhcmdldHM7XG4gICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcInNldERyYWdnZWRGaWxlc1wiLFxuICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpc0RyYWdBY2NlcHQ6IGZhbHNlLFxuICAgICAgICBpc0RyYWdSZWplY3Q6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkgJiYgb25EcmFnTGVhdmUpIHtcbiAgICAgICAgb25EcmFnTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Jvb3RSZWYsIG9uRHJhZ0xlYXZlLCBub0RyYWdFdmVudHNCdWJibGluZ11cbiAgKTtcblxuICBjb25zdCBzZXRGaWxlcyA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWxlcywgZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjY2VwdGVkRmlsZXMgPSBbXTtcbiAgICAgIGNvbnN0IGZpbGVSZWplY3Rpb25zID0gW107XG5cbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgW2FjY2VwdGVkLCBhY2NlcHRFcnJvcl0gPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0QXR0cik7XG4gICAgICAgIGNvbnN0IFtzaXplTWF0Y2gsIHNpemVFcnJvcl0gPSBmaWxlTWF0Y2hTaXplKGZpbGUsIG1pblNpemUsIG1heFNpemUpO1xuICAgICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSB2YWxpZGF0b3IgPyB2YWxpZGF0b3IoZmlsZSkgOiBudWxsO1xuXG4gICAgICAgIGlmIChhY2NlcHRlZCAmJiBzaXplTWF0Y2ggJiYgIWN1c3RvbUVycm9ycykge1xuICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gW2FjY2VwdEVycm9yLCBzaXplRXJyb3JdO1xuXG4gICAgICAgICAgaWYgKGN1c3RvbUVycm9ycykge1xuICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChjdXN0b21FcnJvcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbGVSZWplY3Rpb25zLnB1c2goeyBmaWxlLCBlcnJvcnM6IGVycm9ycy5maWx0ZXIoKGUpID0+IGUpIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW11bHRpcGxlICYmIGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMSkgfHxcbiAgICAgICAgKG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiBtYXhGaWxlcylcbiAgICAgICkge1xuICAgICAgICAvLyBSZWplY3QgZXZlcnl0aGluZyBhbmQgZW1wdHkgYWNjZXB0ZWQgZmlsZXNcbiAgICAgICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgICAgZmlsZVJlamVjdGlvbnMucHVzaCh7IGZpbGUsIGVycm9yczogW1RPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTl0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY2NlcHRlZEZpbGVzLnNwbGljZSgwKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICBhY2NlcHRlZEZpbGVzLFxuICAgICAgICBmaWxlUmVqZWN0aW9ucyxcbiAgICAgICAgdHlwZTogXCJzZXRGaWxlc1wiLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvbkRyb3ApIHtcbiAgICAgICAgb25Ecm9wKGFjY2VwdGVkRmlsZXMsIGZpbGVSZWplY3Rpb25zLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlUmVqZWN0aW9ucy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG4gICAgICAgIG9uRHJvcFJlamVjdGVkKGZpbGVSZWplY3Rpb25zLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcbiAgICAgICAgb25Ecm9wQWNjZXB0ZWQoYWNjZXB0ZWRGaWxlcywgZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgZGlzcGF0Y2gsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIGFjY2VwdEF0dHIsXG4gICAgICBtaW5TaXplLFxuICAgICAgbWF4U2l6ZSxcbiAgICAgIG1heEZpbGVzLFxuICAgICAgb25Ecm9wLFxuICAgICAgb25Ecm9wQWNjZXB0ZWQsXG4gICAgICBvbkRyb3BSZWplY3RlZCxcbiAgICAgIHZhbGlkYXRvcixcbiAgICBdXG4gICk7XG5cbiAgY29uc3Qgb25Ecm9wQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBQZXJzaXN0IGhlcmUgYmVjYXVzZSB3ZSBuZWVkIHRoZSBldmVudCBsYXRlciBhZnRlciBnZXRGaWxlc0Zyb21FdmVudCgpIGlzIGRvbmVcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCk7XG5cbiAgICAgIGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQgPSBbXTtcblxuICAgICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoZ2V0RmlsZXNGcm9tRXZlbnQoZXZlbnQpKVxuICAgICAgICAgIC50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSAmJiAhbm9EcmFnRXZlbnRzQnViYmxpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RmlsZXMoZmlsZXMsIGV2ZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZSkgPT4gb25FcnJDYihlKSk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwicmVzZXRcIiB9KTtcbiAgICB9LFxuICAgIFtnZXRGaWxlc0Zyb21FdmVudCwgc2V0RmlsZXMsIG9uRXJyQ2IsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXVxuICApO1xuXG4gIC8vIEZuIGZvciBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZyBwcm9ncmFtbWF0aWNhbGx5XG4gIGNvbnN0IG9wZW5GaWxlRGlhbG9nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIE5vIHBvaW50IHRvIHVzZSBGUyBhY2Nlc3MgQVBJcyBpZiBjb250ZXh0IGlzIG5vdCBzZWN1cmVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TZWN1cmVfQ29udGV4dHMjZmVhdHVyZV9kZXRlY3Rpb25cbiAgICBpZiAoZnNBY2Nlc3NBcGlXb3Jrc1JlZi5jdXJyZW50KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwib3BlbkRpYWxvZ1wiIH0pO1xuICAgICAgb25GaWxlRGlhbG9nT3BlbkNiKCk7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlclxuICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHR5cGVzOiBwaWNrZXJUeXBlcyxcbiAgICAgIH07XG4gICAgICB3aW5kb3dcbiAgICAgICAgLnNob3dPcGVuRmlsZVBpY2tlcihvcHRzKVxuICAgICAgICAudGhlbigoaGFuZGxlcykgPT4gZ2V0RmlsZXNGcm9tRXZlbnQoaGFuZGxlcykpXG4gICAgICAgIC50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICAgIHNldEZpbGVzKGZpbGVzLCBudWxsKTtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiY2xvc2VEaWFsb2dcIiB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgLy8gQWJvcnRFcnJvciBtZWFucyB0aGUgdXNlciBjYW5jZWxlZFxuICAgICAgICAgIGlmIChpc0Fib3J0KGUpKSB7XG4gICAgICAgICAgICBvbkZpbGVEaWFsb2dDYW5jZWxDYihlKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJjbG9zZURpYWxvZ1wiIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNTZWN1cml0eUVycm9yKGUpKSB7XG4gICAgICAgICAgICBmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIENPUlMsIHNvIGNhbm5vdCB1c2UgdGhpcyBBUElcbiAgICAgICAgICAgIC8vIFRyeSB1c2luZyB0aGUgaW5wdXRcbiAgICAgICAgICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvbkVyckNiKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIFwiQ2Fubm90IG9wZW4gdGhlIGZpbGUgcGlja2VyIGJlY2F1c2UgdGhlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIG5vIDxpbnB1dD4gd2FzIHByb3ZpZGVkLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVyckNiKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJvcGVuRGlhbG9nXCIgfSk7XG4gICAgICBvbkZpbGVEaWFsb2dPcGVuQ2IoKTtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgW1xuICAgIGRpc3BhdGNoLFxuICAgIG9uRmlsZURpYWxvZ09wZW5DYixcbiAgICBvbkZpbGVEaWFsb2dDYW5jZWxDYixcbiAgICB1c2VGc0FjY2Vzc0FwaSxcbiAgICBzZXRGaWxlcyxcbiAgICBvbkVyckNiLFxuICAgIHBpY2tlclR5cGVzLFxuICAgIG11bHRpcGxlLFxuICBdKTtcblxuICAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIFNQQUNFL0VOVEVSIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcbiAgY29uc3Qgb25LZXlEb3duQ2IgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIC8vIElnbm9yZSBrZXlib2FyZCBldmVudHMgYnViYmxpbmcgdXAgdGhlIERPTSB0cmVlXG4gICAgICBpZiAoIXJvb3RSZWYuY3VycmVudCB8fCAhcm9vdFJlZi5jdXJyZW50LmlzRXF1YWxOb2RlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCIgXCIgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgfHxcbiAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMzIgfHxcbiAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTNcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvcGVuRmlsZURpYWxvZygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3Jvb3RSZWYsIG9wZW5GaWxlRGlhbG9nXVxuICApO1xuXG4gIC8vIFVwZGF0ZSBmb2N1cyBzdGF0ZSBmb3IgdGhlIGRyb3B6b25lXG4gIGNvbnN0IG9uRm9jdXNDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiZm9jdXNcIiB9KTtcbiAgfSwgW10pO1xuICBjb25zdCBvbkJsdXJDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiYmx1clwiIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gQ2IgdG8gb3BlbiB0aGUgZmlsZSBkaWFsb2cgd2hlbiBjbGljayBvY2N1cnMgb24gdGhlIGRyb3B6b25lXG4gIGNvbnN0IG9uQ2xpY2tDYiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobm9DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIElFMTEvRWRnZSB0aGUgZmlsZS1icm93c2VyIGRpYWxvZyBpcyBibG9ja2luZywgdGhlcmVmb3JlLCB1c2Ugc2V0VGltZW91dCgpXG4gICAgLy8gdG8gZW5zdXJlIFJlYWN0IGNhbiBoYW5kbGUgc3RhdGUgY2hhbmdlc1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy80NTBcbiAgICBpZiAoaXNJZU9yRWRnZSgpKSB7XG4gICAgICBzZXRUaW1lb3V0KG9wZW5GaWxlRGlhbG9nLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbkZpbGVEaWFsb2coKTtcbiAgICB9XG4gIH0sIFtub0NsaWNrLCBvcGVuRmlsZURpYWxvZ10pO1xuXG4gIGNvbnN0IGNvbXBvc2VIYW5kbGVyID0gKGZuKSA9PiB7XG4gICAgcmV0dXJuIGRpc2FibGVkID8gbnVsbCA6IGZuO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIgPSAoZm4pID0+IHtcbiAgICByZXR1cm4gbm9LZXlib2FyZCA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbik7XG4gIH07XG5cbiAgY29uc3QgY29tcG9zZURyYWdIYW5kbGVyID0gKGZuKSA9PiB7XG4gICAgcmV0dXJuIG5vRHJhZyA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbik7XG4gIH07XG5cbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKG5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Um9vdFByb3BzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgKHtcbiAgICAgICAgcmVmS2V5ID0gXCJyZWZcIixcbiAgICAgICAgcm9sZSxcbiAgICAgICAgb25LZXlEb3duLFxuICAgICAgICBvbkZvY3VzLFxuICAgICAgICBvbkJsdXIsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIG9uRHJhZ0VudGVyLFxuICAgICAgICBvbkRyYWdPdmVyLFxuICAgICAgICBvbkRyYWdMZWF2ZSxcbiAgICAgICAgb25Ecm9wLFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0ge30pID0+ICh7XG4gICAgICAgIG9uS2V5RG93bjogY29tcG9zZUtleWJvYXJkSGFuZGxlcihcbiAgICAgICAgICBjb21wb3NlRXZlbnRIYW5kbGVycyhvbktleURvd24sIG9uS2V5RG93bkNiKVxuICAgICAgICApLFxuICAgICAgICBvbkZvY3VzOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKFxuICAgICAgICAgIGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIG9uRm9jdXNDYilcbiAgICAgICAgKSxcbiAgICAgICAgb25CbHVyOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQmx1ciwgb25CbHVyQ2IpKSxcbiAgICAgICAgb25DbGljazogY29tcG9zZUhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25DbGljaywgb25DbGlja0NiKSksXG4gICAgICAgIG9uRHJhZ0VudGVyOiBjb21wb3NlRHJhZ0hhbmRsZXIoXG4gICAgICAgICAgY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnRW50ZXIsIG9uRHJhZ0VudGVyQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJhZ092ZXI6IGNvbXBvc2VEcmFnSGFuZGxlcihcbiAgICAgICAgICBjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdPdmVyLCBvbkRyYWdPdmVyQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBjb21wb3NlRHJhZ0hhbmRsZXIoXG4gICAgICAgICAgY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnTGVhdmUsIG9uRHJhZ0xlYXZlQ2IpXG4gICAgICAgICksXG4gICAgICAgIG9uRHJvcDogY29tcG9zZURyYWdIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRHJvcCwgb25Ecm9wQ2IpKSxcbiAgICAgICAgcm9sZTogdHlwZW9mIHJvbGUgPT09IFwic3RyaW5nXCIgJiYgcm9sZSAhPT0gXCJcIiA/IHJvbGUgOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICBbcmVmS2V5XTogcm9vdFJlZixcbiAgICAgICAgLi4uKCFkaXNhYmxlZCAmJiAhbm9LZXlib2FyZCA/IHsgdGFiSW5kZXg6IDAgfSA6IHt9KSxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHJvb3RSZWYsXG4gICAgICBvbktleURvd25DYixcbiAgICAgIG9uRm9jdXNDYixcbiAgICAgIG9uQmx1ckNiLFxuICAgICAgb25DbGlja0NiLFxuICAgICAgb25EcmFnRW50ZXJDYixcbiAgICAgIG9uRHJhZ092ZXJDYixcbiAgICAgIG9uRHJhZ0xlYXZlQ2IsXG4gICAgICBvbkRyb3BDYixcbiAgICAgIG5vS2V5Ym9hcmQsXG4gICAgICBub0RyYWcsXG4gICAgICBkaXNhYmxlZCxcbiAgICBdXG4gICk7XG5cbiAgY29uc3Qgb25JbnB1dEVsZW1lbnRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0SW5wdXRQcm9wcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgICh7IHJlZktleSA9IFwicmVmXCIsIG9uQ2hhbmdlLCBvbkNsaWNrLCAuLi5yZXN0IH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgICAgIGFjY2VwdDogYWNjZXB0QXR0cixcbiAgICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiBjb21wb3NlSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkNoYW5nZSwgb25Ecm9wQ2IpKSxcbiAgICAgICAgICBvbkNsaWNrOiBjb21wb3NlSGFuZGxlcihcbiAgICAgICAgICAgIGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIG9uSW5wdXRFbGVtZW50Q2xpY2spXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgICAgW3JlZktleV06IGlucHV0UmVmLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5wdXRQcm9wcyxcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICBbaW5wdXRSZWYsIGFjY2VwdCwgbXVsdGlwbGUsIG9uRHJvcENiLCBkaXNhYmxlZF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkICYmICFkaXNhYmxlZCxcbiAgICBnZXRSb290UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wcyxcbiAgICByb290UmVmLFxuICAgIGlucHV0UmVmLFxuICAgIG9wZW46IGNvbXBvc2VIYW5kbGVyKG9wZW5GaWxlRGlhbG9nKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Ryb3B6b25lU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge3t0eXBlOiBzdHJpbmd9ICYgRHJvcHpvbmVTdGF0ZX0gYWN0aW9uXG4gKiBAcmV0dXJucyB7RHJvcHpvbmVTdGF0ZX1cbiAqL1xuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiZm9jdXNcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgXCJibHVyXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBcIm9wZW5EaWFsb2dcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIFwiY2xvc2VEaWFsb2dcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIFwic2V0RHJhZ2dlZEZpbGVzXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBhY3Rpb24uaXNEcmFnQWN0aXZlLFxuICAgICAgICBpc0RyYWdBY2NlcHQ6IGFjdGlvbi5pc0RyYWdBY2NlcHQsXG4gICAgICAgIGlzRHJhZ1JlamVjdDogYWN0aW9uLmlzRHJhZ1JlamVjdCxcbiAgICAgIH07XG4gICAgY2FzZSBcInNldEZpbGVzXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogYWN0aW9uLmFjY2VwdGVkRmlsZXMsXG4gICAgICAgIGZpbGVSZWplY3Rpb25zOiBhY3Rpb24uZmlsZVJlamVjdGlvbnMsXG4gICAgICB9O1xuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJmIiwieSIsInQiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInRoaXMiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsInB1c2giLCJfX3JlYWQiLCJvIiwibSIsInIiLCJpIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwiYXJndW1lbnRzIiwibCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25jYXQiLCJDT01NT05fTUlNRV9UWVBFUyIsIk1hcCIsInRvRmlsZVdpdGhQYXRoIiwiZmlsZSIsInBhdGgiLCJuYW1lIiwibGFzdEluZGV4T2YiLCJ0eXBlIiwiZXh0Iiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImdldCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid2l0aE1pbWVUeXBlIiwid2Via2l0UmVsYXRpdmVQYXRoIiwiRklMRVNfVE9fSUdOT1JFIiwiaXNPYmplY3QiLCJnZXRJbnB1dEZpbGVzIiwiZXZ0IiwiZnJvbUxpc3QiLCJ0YXJnZXQiLCJmaWxlcyIsIm1hcCIsImdldEZzSGFuZGxlRmlsZXMiLCJoYW5kbGVzIiwiX2EiLCJhbGwiLCJoIiwiZ2V0RmlsZSIsImdldERhdGFUcmFuc2ZlckZpbGVzIiwiZHQiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJraW5kIiwidG9GaWxlUHJvbWlzZXMiLCJub0lnbm9yZWRGaWxlcyIsImZsYXR0ZW4iLCJpbmRleE9mIiwid2Via2l0R2V0QXNFbnRyeSIsImZyb21EYXRhVHJhbnNmZXJJdGVtIiwiZW50cnkiLCJpc0RpcmVjdG9yeSIsImZyb21EaXJFbnRyeSIsInJlZHVjZSIsImFjYyIsImlzQXJyYXkiLCJnZXRBc0ZpbGUiLCJmd3AiLCJmcm9tRW50cnkiLCJmcm9tRmlsZUVudHJ5IiwicmVhZGVyIiwiY3JlYXRlUmVhZGVyIiwiZW50cmllcyIsInJlYWRFbnRyaWVzIiwiX3RoaXMiLCJiYXRjaCIsImVycl8xIiwiZXJyIiwiZnVsbFBhdGgiLCJGSUxFX0lOVkFMSURfVFlQRSIsIkZJTEVfVE9PX0xBUkdFIiwiRklMRV9UT09fU01BTEwiLCJUT09fTUFOWV9GSUxFUyIsIkVycm9yQ29kZSIsIkZpbGVJbnZhbGlkVHlwZSIsIkZpbGVUb29MYXJnZSIsIkZpbGVUb29TbWFsbCIsIlRvb01hbnlGaWxlcyIsImdldEludmFsaWRUeXBlUmVqZWN0aW9uRXJyIiwiYWNjZXB0IiwibWVzc2FnZVN1ZmZpeCIsImpvaW4iLCJjb2RlIiwibWVzc2FnZSIsImdldFRvb0xhcmdlUmVqZWN0aW9uRXJyIiwibWF4U2l6ZSIsImdldFRvb1NtYWxsUmVqZWN0aW9uRXJyIiwibWluU2l6ZSIsIlRPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTiIsImZpbGVBY2NlcHRlZCIsImlzQWNjZXB0YWJsZSIsImFjY2VwdGVkRmlsZXMiLCJhY2NlcHRlZEZpbGVzQXJyYXkiLCJmaWxlTmFtZSIsIm1pbWVUeXBlIiwiYmFzZU1pbWVUeXBlIiwicmVwbGFjZSIsInNvbWUiLCJ2YWxpZFR5cGUiLCJ0cmltIiwiY2hhckF0IiwiZW5kc1dpdGgiLCJhY2NlcHRzIiwiZmlsZU1hdGNoU2l6ZSIsImlzRGVmaW5lZCIsInNpemUiLCJhbGxGaWxlc0FjY2VwdGVkIiwibXVsdGlwbGUiLCJtYXhGaWxlcyIsInZhbGlkYXRvciIsImV2ZXJ5IiwiYWNjZXB0ZWQiLCJzaXplTWF0Y2giLCJjdXN0b21FcnJvcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImV2ZW50IiwiY2FuY2VsQnViYmxlIiwiaXNFdnRXaXRoRmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJ0eXBlcyIsIm9uRG9jdW1lbnREcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiaXNJZSIsInVzZXJBZ2VudCIsImlzRWRnZSIsImlzSWVPckVkZ2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJjb21wb3NlRXZlbnRIYW5kbGVycyIsImZucyIsImFyZ3MiLCJmbiIsImNhblVzZUZpbGVTeXN0ZW1BY2Nlc3NBUEkiLCJwaWNrZXJPcHRpb25zRnJvbUFjY2VwdCIsImRlc2NyaXB0aW9uIiwib2siLCJpc01JTUVUeXBlIiwiY29uc29sZSIsIndhcm4iLCJpc0V4dCIsImFnZyIsImFjY2VwdFByb3BBc0FjY2VwdEF0dHIiLCJhIiwiaXNBYm9ydCIsIkRPTUV4Y2VwdGlvbiIsIkFCT1JUX0VSUiIsImlzU2VjdXJpdHlFcnJvciIsIlNFQ1VSSVRZX0VSUiIsInRlc3QiLCJEcm9wem9uZSIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGlsZHJlbiIsInVzZURyb3B6b25lIiwib3BlbiIsInByb3BzIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwiZ2V0RmlsZXNGcm9tRXZlbnQiLCJpc0NoYW5nZUV2dCIsIkluZmluaXR5IiwicHJldmVudERyb3BPbkRvY3VtZW50Iiwibm9DbGljayIsIm5vS2V5Ym9hcmQiLCJub0RyYWciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVzZUZzQWNjZXNzQXBpIiwiYXV0b0ZvY3VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9iamVjdE9mIiwiYXJyYXlPZiIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbkZpbGVEaWFsb2dDYW5jZWwiLCJvbkZpbGVEaWFsb2dPcGVuIiwib25EcmFnRW50ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJhZ092ZXIiLCJvbkRyb3AiLCJvbkRyb3BBY2NlcHRlZCIsIm9uRHJvcFJlamVjdGVkIiwib25FcnJvciIsImluaXRpYWxTdGF0ZSIsImlzRm9jdXNlZCIsImlzRmlsZURpYWxvZ0FjdGl2ZSIsImlzRHJhZ0FjdGl2ZSIsImlzRHJhZ0FjY2VwdCIsImlzRHJhZ1JlamVjdCIsImZpbGVSZWplY3Rpb25zIiwiYWNjZXB0QXR0ciIsInVzZU1lbW8iLCJwaWNrZXJUeXBlcyIsIm9uRmlsZURpYWxvZ09wZW5DYiIsIm5vb3AiLCJvbkZpbGVEaWFsb2dDYW5jZWxDYiIsInJvb3RSZWYiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImZzQWNjZXNzQXBpV29ya3NSZWYiLCJpc1NlY3VyZUNvbnRleHQiLCJvbldpbmRvd0ZvY3VzIiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyYWdUYXJnZXRzUmVmIiwib25Eb2N1bWVudERyb3AiLCJjb250YWlucyIsImRvY3VtZW50IiwiZm9jdXMiLCJvbkVyckNiIiwidXNlQ2FsbGJhY2siLCJvbkRyYWdFbnRlckNiIiwicGVyc2lzdCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbGVDb3VudCIsImNhdGNoIiwib25EcmFnT3ZlckNiIiwiaGFzRmlsZXMiLCJkcm9wRWZmZWN0Iiwib25EcmFnTGVhdmVDYiIsInRhcmdldHMiLCJ0YXJnZXRJZHgiLCJzcGxpY2UiLCJzZXRGaWxlcyIsImZvckVhY2giLCJhY2NlcHRFcnJvciIsInNpemVFcnJvciIsImVycm9ycyIsIm9uRHJvcENiIiwib3BlbkZpbGVEaWFsb2ciLCJvcHRzIiwic2hvd09wZW5GaWxlUGlja2VyIiwiY2xpY2siLCJFcnJvciIsIm9uS2V5RG93bkNiIiwiaXNFcXVhbE5vZGUiLCJrZXkiLCJrZXlDb2RlIiwib25Gb2N1c0NiIiwib25CbHVyQ2IiLCJvbkNsaWNrQ2IiLCJjb21wb3NlSGFuZGxlciIsImNvbXBvc2VLZXlib2FyZEhhbmRsZXIiLCJjb21wb3NlRHJhZ0hhbmRsZXIiLCJnZXRSb290UHJvcHMiLCJyZWZLZXkiLCJyb2xlIiwib25LZXlEb3duIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2siLCJyZXN0IiwidGFiSW5kZXgiLCJvbklucHV0RWxlbWVudENsaWNrIiwiZ2V0SW5wdXRQcm9wcyIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsInN0eWxlIiwiZGlzcGxheSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Iit2RkFxRU8sU0FBU0EsRUFBVUMsRUFBU0MsRUFBWUMsRUFBR0MsR0FFOUMsT0FBTyxJQUFLRCxJQUFNQSxFQUFJRSxXQUFVLFNBQVVDLEVBQVNDLEdBQy9DLFNBQVNDLEVBQVVDLEdBQVMsSUFBTUMsRUFBS04sRUFBVU8sS0FBS0YsSUFBVyxNQUFPRyxHQUFLTCxFQUFPSyxJQUNwRixTQUFTQyxFQUFTSixHQUFTLElBQU1DLEVBQUtOLEVBQWlCLE1BQUVLLElBQVcsTUFBT0csR0FBS0wsRUFBT0ssSUFDdkYsU0FBU0YsRUFBS0ksR0FKbEIsSUFBZUwsRUFJYUssRUFBT0MsS0FBT1QsRUFBUVEsRUFBT0wsUUFKMUNBLEVBSXlESyxFQUFPTCxNQUpoREEsYUFBaUJOLEVBQUlNLEVBQVEsSUFBSU4sR0FBRSxTQUFVRyxHQUFXQSxFQUFRRyxPQUlUTyxLQUFLUixFQUFXSyxHQUNsR0gsR0FBTU4sRUFBWUEsRUFBVWEsTUFBTWhCLEVBQVNDLEdBQWMsS0FBS1MsV0FJL0QsU0FBU08sRUFBWWpCLEVBQVNrQixHQUNqQyxJQUFzR0MsRUFBR0MsRUFBR0MsRUFBR0MsRUFBM0dDLEVBQUksQ0FBRUMsTUFBTyxFQUFHQyxLQUFNLFdBQWEsR0FBVyxFQUFQSixFQUFFLEdBQVEsTUFBTUEsRUFBRSxHQUFJLE9BQU9BLEVBQUUsSUFBT0ssS0FBTSxHQUFJQyxJQUFLLElBQ2hHLE9BQU9MLEVBQUksQ0FBRVosS0FBTWtCLEVBQUssR0FBSUMsTUFBU0QsRUFBSyxHQUFJRSxPQUFVRixFQUFLLElBQXdCLG1CQUFYRyxTQUEwQlQsRUFBRVMsT0FBT0MsVUFBWSxXQUFhLE9BQU9DLE9BQVVYLEVBQ3ZKLFNBQVNNLEVBQUtNLEdBQUssT0FBTyxTQUFVQyxHQUFLLE9BQ3pDLFNBQWNDLEdBQ1YsR0FBSWpCLEVBQUcsTUFBTSxJQUFJa0IsVUFBVSxtQ0FDM0IsS0FBT2QsT0FDSCxHQUFJSixFQUFJLEVBQUdDLElBQU1DLEVBQVksRUFBUmUsRUFBRyxHQUFTaEIsRUFBVSxPQUFJZ0IsRUFBRyxHQUFLaEIsRUFBUyxTQUFPQyxFQUFJRCxFQUFVLFNBQU1DLEVBQUVpQixLQUFLbEIsR0FBSSxHQUFLQSxFQUFFVixTQUFXVyxFQUFJQSxFQUFFaUIsS0FBS2xCLEVBQUdnQixFQUFHLEtBQUt0QixLQUFNLE9BQU9PLEVBRTNKLE9BRElELEVBQUksRUFBR0MsSUFBR2UsRUFBSyxDQUFTLEVBQVJBLEVBQUcsR0FBUWYsRUFBRWIsUUFDekI0QixFQUFHLElBQ1AsS0FBSyxFQUFHLEtBQUssRUFBR2YsRUFBSWUsRUFBSSxNQUN4QixLQUFLLEVBQWMsT0FBWGIsRUFBRUMsUUFBZ0IsQ0FBRWhCLE1BQU80QixFQUFHLEdBQUl0QixNQUFNLEdBQ2hELEtBQUssRUFBR1MsRUFBRUMsUUFBU0osRUFBSWdCLEVBQUcsR0FBSUEsRUFBSyxDQUFDLEdBQUksU0FDeEMsS0FBSyxFQUFHQSxFQUFLYixFQUFFSSxJQUFJWSxNQUFPaEIsRUFBRUcsS0FBS2EsTUFBTyxTQUN4QyxRQUNJLEtBQU1sQixFQUFJRSxFQUFFRyxNQUFNTCxFQUFJQSxFQUFFbUIsT0FBUyxHQUFLbkIsRUFBRUEsRUFBRW1CLE9BQVMsS0FBa0IsSUFBVkosRUFBRyxJQUFzQixJQUFWQSxFQUFHLElBQVcsQ0FBRWIsRUFBSSxFQUFHLFNBQ2pHLEdBQWMsSUFBVmEsRUFBRyxNQUFjZixHQUFNZSxFQUFHLEdBQUtmLEVBQUUsSUFBTWUsRUFBRyxHQUFLZixFQUFFLElBQU0sQ0FBRUUsRUFBRUMsTUFBUVksRUFBRyxHQUFJLE1BQzlFLEdBQWMsSUFBVkEsRUFBRyxJQUFZYixFQUFFQyxNQUFRSCxFQUFFLEdBQUksQ0FBRUUsRUFBRUMsTUFBUUgsRUFBRSxHQUFJQSxFQUFJZSxFQUFJLE1BQzdELEdBQUlmLEdBQUtFLEVBQUVDLE1BQVFILEVBQUUsR0FBSSxDQUFFRSxFQUFFQyxNQUFRSCxFQUFFLEdBQUlFLEVBQUVJLElBQUljLEtBQUtMLEdBQUssTUFDdkRmLEVBQUUsSUFBSUUsRUFBRUksSUFBSVksTUFDaEJoQixFQUFFRyxLQUFLYSxNQUFPLFNBRXRCSCxFQUFLbEIsRUFBS29CLEtBQUt0QyxFQUFTdUIsR0FDMUIsTUFBT1osR0FBS3lCLEVBQUssQ0FBQyxFQUFHekIsR0FBSVMsRUFBSSxVQUFlRCxFQUFJRSxFQUFJLEVBQ3RELEdBQVksRUFBUmUsRUFBRyxHQUFRLE1BQU1BLEVBQUcsR0FBSSxNQUFPLENBQUU1QixNQUFPNEIsRUFBRyxHQUFLQSxFQUFHLFFBQUssRUFBUXRCLE1BQU0sR0FyQjlCTCxDQUFLLENBQUN5QixFQUFHQyxNQXFEdEQsU0FBU08sRUFBT0MsRUFBR1QsR0FDdEIsSUFBSVUsRUFBc0IsbUJBQVhiLFFBQXlCWSxFQUFFWixPQUFPQyxVQUNqRCxJQUFLWSxFQUFHLE9BQU9ELEVBQ2YsSUFBbUJFLEVBQVlsQyxFQUEzQm1DLEVBQUlGLEVBQUVOLEtBQUtLLEdBQU9JLEVBQUssR0FDM0IsSUFDSSxXQUFjLElBQU5iLEdBQWdCQSxLQUFNLE1BQVFXLEVBQUlDLEVBQUVwQyxRQUFRSSxNQUFNaUMsRUFBR04sS0FBS0ksRUFBRXJDLE9BRXhFLE1BQU93QyxHQUFTckMsRUFBSSxDQUFFcUMsTUFBT0EsV0FFekIsSUFDUUgsSUFBTUEsRUFBRS9CLE9BQVM4QixFQUFJRSxFQUFVLFNBQUlGLEVBQUVOLEtBQUtRLFdBRXhDLEdBQUluQyxFQUFHLE1BQU1BLEVBQUVxQyxPQUU3QixPQUFPRCxFQW1CSixTQUFTRSxFQUFjQyxFQUFJQyxFQUFNQyxHQUNwQyxHQUFJQSxHQUE2QixJQUFyQkMsVUFBVWIsT0FBYyxJQUFLLElBQTRCTyxFQUF4QkQsRUFBSSxFQUFHUSxFQUFJSCxFQUFLWCxPQUFZTSxFQUFJUSxFQUFHUixLQUN4RUMsR0FBUUQsS0FBS0ssSUFDUkosSUFBSUEsRUFBS1EsTUFBTUMsVUFBVUMsTUFBTW5CLEtBQUthLEVBQU0sRUFBR0wsSUFDbERDLEVBQUdELEdBQUtLLEVBQUtMLElBR3JCLE9BQU9JLEVBQUdRLE9BQU9YLEdBQU1RLE1BQU1DLFVBQVVDLE1BQU1uQixLQUFLYSxJQy9LL0MsSUFBSVEsRUFBb0IsSUFBSUMsSUFBSSxDQUVuQyxDQUFDLE1BQU8sYUFDUixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxNQUFPLHlCQUNSLENBQUMsT0FBUSxjQUNULENBQUMsTUFBTyxtQkFDUixDQUFDLE1BQU8sZ0NBQ1IsQ0FBQyxNQUFPLDRCQUNSLENBQUMsTUFBTyxhQUNSLENBQUMsS0FBTSxzQkFDUCxDQUFDLE1BQU8sdUJBQ1IsQ0FBQyxNQUFPLHFCQUNSLENBQUMsTUFBTyxxQkFDUixDQUFDLE1BQU8sWUFDUixDQUFDLE1BQU8sWUFDUixDQUFDLE1BQU8sc0JBQ1IsQ0FBQyxPQUFRLDJFQUNULENBQUMsTUFBTyxpQ0FDUixDQUFDLE9BQVEsd0JBQ1QsQ0FBQyxLQUFNLG9CQUNQLENBQUMsTUFBTyxhQUNSLENBQUMsT0FBUSxjQUNULENBQUMsT0FBUSxjQUNULENBQUMsTUFBTyxhQUNSLENBQUMsT0FBUSxhQUNULENBQUMsTUFBTyw0QkFDUixDQUFDLE1BQU8saUJBQ1IsQ0FBQyxNQUFPLDRCQUNSLENBQUMsT0FBUSxjQUNULENBQUMsTUFBTyxjQUNSLENBQUMsS0FBTSxtQkFDUCxDQUFDLE9BQVEsb0JBQ1QsQ0FBQyxTQUFVLHVCQUNYLENBQUMsTUFBTyxjQUNSLENBQUMsT0FBUSxjQUNULENBQUMsTUFBTyxtQkFDUixDQUFDLE1BQU8sY0FDUixDQUFDLE1BQU8sYUFDUixDQUFDLE9BQVEsY0FDVCxDQUFDLE9BQVEsdUNBQ1QsQ0FBQyxNQUFPLG1EQUNSLENBQUMsTUFBTyxrREFDUixDQUFDLE1BQU8sMkNBQ1IsQ0FBQyxNQUFPLGFBQ1IsQ0FBQyxNQUFPLGFBQ1IsQ0FBQyxNQUFPLG1CQUNSLENBQUMsT0FBUSxjQUNULENBQUMsTUFBTyxZQUNSLENBQUMsTUFBTyxhQUNSLENBQUMsTUFBTyxtQkFDUixDQUFDLE1BQU8sMkJBQ1IsQ0FBQyxNQUFPLGlDQUNSLENBQUMsT0FBUSw2RUFDVCxDQUFDLE1BQU8sdUJBQ1IsQ0FBQyxNQUFPLG1CQUNSLENBQUMsS0FBTSxvQkFDUCxDQUFDLE1BQU8saUJBQ1IsQ0FBQyxNQUFPLGlDQUNSLENBQUMsTUFBTyxxQkFDUixDQUFDLE1BQU8sY0FDUixDQUFDLE9BQVEsY0FDVCxDQUFDLEtBQU0sY0FDUCxDQUFDLE1BQU8sWUFDUixDQUFDLE1BQU8sY0FDUixDQUFDLE1BQU8seUJBQ1IsQ0FBQyxNQUFPLGFBQ1IsQ0FBQyxPQUFRLGNBQ1QsQ0FBQyxPQUFRLGNBQ1QsQ0FBQyxPQUFRLGNBQ1QsQ0FBQyxPQUFRLGFBQ1QsQ0FBQyxRQUFTLGNBQ1YsQ0FBQyxRQUFTLHlCQUNWLENBQUMsTUFBTyw0QkFDUixDQUFDLE9BQVEscUVBQ1QsQ0FBQyxNQUFPLG1CQUNSLENBQUMsTUFBTyxtQ0FDUixDQUFDLE1BQU8sbUJBQ1IsQ0FBQyxLQUFNLCtCQUVQLENBQUMsTUFBTyxvQkFDUixDQUFDLE1BQU8sbUJBQ1IsQ0FBQyxNQUFPLGdDQUVMLFNBQVNDLEVBQWVDLEVBQU1DLEdBQ2pDLElBQUk1QyxFQW1CUixTQUFzQjJDLEdBQ2xCLElBQUlFLEVBQU9GLEVBQUtFLEtBRWhCLEdBRG1CQSxJQUFtQyxJQUEzQkEsRUFBS0MsWUFBWSxPQUN2QkgsRUFBS0ksS0FBTSxDQUM1QixJQUFJQyxFQUFNSCxFQUFLSSxNQUFNLEtBQ2hCN0IsTUFBTThCLGNBQ1BILEVBQU9QLEVBQWtCVyxJQUFJSCxHQUM3QkQsR0FDQUssT0FBT0MsZUFBZVYsRUFBTSxPQUFRLENBQ2hDdEQsTUFBTzBELEVBQ1BPLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxZQUFZLElBSXhCLE9BQU9iLEVBbkNDYyxDQUFhZCxHQUNyQixHQUFzQixpQkFBWDNDLEVBQUU0QyxLQUFtQixDQUM1QixJQUFJYyxFQUFxQmYsRUFBS2UsbUJBQzlCTixPQUFPQyxlQUFlckQsRUFBRyxPQUFRLENBQzdCWCxNQUF1QixpQkFBVHVELEVBQ1JBLEVBSThCLGlCQUF2QmMsR0FBbUNBLEVBQW1CckMsT0FBUyxFQUNsRXFDLEVBQ0FmLEVBQUtFLEtBQ2ZTLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxZQUFZLElBR3BCLE9BQU94RCxFQ3BHWCxJQUFJMkQsRUFBa0IsQ0FFbEIsWUFDQSxhQWtDSixTQUFTQyxFQUFTNUMsR0FDZCxNQUFvQixpQkFBTkEsR0FBd0IsT0FBTkEsRUFFcEMsU0FBUzZDLEVBQWNDLEdBQ25CLE9BQU9DLEVBQVNELEVBQUlFLE9BQU9DLE9BQU9DLEtBQUksU0FBVXZCLEdBQVEsT0FBT0QsRUFBZUMsTUFHbEYsU0FBU3dCLEVBQWlCQyxHQUN0QixPQUFPeEYsRUFBVWtDLFVBQU0sT0FBUSxHQUFRLFdBRW5DLE9BQU9oQixFQUFZZ0IsTUFBTSxTQUFVdUQsR0FDL0IsT0FBUUEsRUFBR2hFLE9BQ1AsS0FBSyxFQUFHLE1BQU8sQ0FBQyxFQUFhcEIsUUFBUXFGLElBQUlGLEVBQVFGLEtBQUksU0FBVUssR0FBSyxPQUFPQSxFQUFFQyxlQUM3RSxLQUFLLEVBRUQsTUFBTyxDQUFDLEVBREFILEVBQUcvRCxPQUNpQjRELEtBQUksU0FBVXZCLEdBQVEsT0FBT0QsRUFBZUMsY0FLNUYsU0FBUzhCLEVBQXFCQyxFQUFJM0IsR0FDOUIsT0FBT25FLEVBQVVrQyxVQUFNLE9BQVEsR0FBUSxXQUNuQyxJQUFJNkQsRUFDSixPQUFPN0UsRUFBWWdCLE1BQU0sU0FBVXVELEdBQy9CLE9BQVFBLEVBQUdoRSxPQUNQLEtBQUssRUFDRCxPQUFLcUUsRUFBR0MsT0FDUkEsRUFBUVosRUFBU1csRUFBR0MsT0FDZkMsUUFBTyxTQUFVQyxHQUFRLE1BQXFCLFNBQWRBLEVBQUtDLFFBRzdCLFNBQVQvQixFQUNPLENBQUMsRUFBYzRCLEdBRW5CLENBQUMsRUFBYTFGLFFBQVFxRixJQUFJSyxFQUFNVCxJQUFJYSxNQVJyQixDQUFDLEVBQWEsR0FTeEMsS0FBSyxFQUVELE1BQU8sQ0FBQyxFQUFjQyxFQUFlQyxFQUQ3QlosRUFBRy9ELFVBRWYsS0FBSyxFQUFHLE1BQU8sQ0FBQyxFQUFjMEUsRUFBZWpCLEVBQVNXLEVBQUdULE9BQ2hEQyxLQUFJLFNBQVV2QixHQUFRLE9BQU9ELEVBQWVDLGVBS3JFLFNBQVNxQyxFQUFlZixHQUNwQixPQUFPQSxFQUFNVyxRQUFPLFNBQVVqQyxHQUFRLE9BQStDLElBQXhDZ0IsRUFBZ0J1QixRQUFRdkMsRUFBS0UsU0FNOUUsU0FBU2tCLEVBQVNZLEdBQ2QsR0FBYyxPQUFWQSxFQUNBLE1BQU8sR0FJWCxJQUZBLElBQUlWLEVBQVEsR0FFSHRDLEVBQUksRUFBR0EsRUFBSWdELEVBQU10RCxPQUFRTSxJQUFLLENBQ25DLElBQUlnQixFQUFPZ0MsRUFBTWhELEdBQ2pCc0MsRUFBTTNDLEtBQUtxQixHQUVmLE9BQU9zQixFQUdYLFNBQVNjLEVBQWVGLEdBQ3BCLEdBQXFDLG1CQUExQkEsRUFBS00saUJBQ1osT0FBT0MsRUFBcUJQLEdBRWhDLElBQUlRLEVBQVFSLEVBQUtNLG1CQUlqQixPQUFJRSxHQUFTQSxFQUFNQyxZQUNSQyxFQUFhRixHQUVqQkQsRUFBcUJQLEdBRWhDLFNBQVNJLEVBQVFOLEdBQ2IsT0FBT0EsRUFBTWEsUUFBTyxTQUFVQyxFQUFLeEIsR0FBUyxPQUFPbkMsRUFBY0EsRUFBYyxHQUFJUCxFQUFPa0UsSUFBTSxHQUFRbEUsRUFBUWEsTUFBTXNELFFBQVF6QixHQUFTZ0IsRUFBUWhCLEdBQVMsQ0FBQ0EsS0FBVSxLQUFXLElBRWxMLFNBQVNtQixFQUFxQlAsR0FDMUIsSUFBSWxDLEVBQU9rQyxFQUFLYyxZQUNoQixJQUFLaEQsRUFDRCxPQUFPMUQsUUFBUUUsT0FBTyxHQUFHb0QsT0FBT3NDLEVBQU0sbUJBRTFDLElBQUllLEVBQU1sRCxFQUFlQyxHQUN6QixPQUFPMUQsUUFBUUMsUUFBUTBHLEdBRzNCLFNBQVNDLEVBQVVSLEdBQ2YsT0FBT3pHLEVBQVVrQyxVQUFNLE9BQVEsR0FBUSxXQUNuQyxPQUFPaEIsRUFBWWdCLE1BQU0sU0FBVXVELEdBQy9CLE1BQU8sQ0FBQyxFQUFjZ0IsRUFBTUMsWUFBY0MsRUFBYUYsR0FBU1MsRUFBY1QsVUFLMUYsU0FBU0UsRUFBYUYsR0FDbEIsSUFBSVUsRUFBU1YsRUFBTVcsZUFDbkIsT0FBTyxJQUFJL0csU0FBUSxTQUFVQyxFQUFTQyxHQUNsQyxJQUFJOEcsRUFBVSxJQUNkLFNBQVNDLElBQ0wsSUFBSUMsRUFBUXJGLEtBR1ppRixFQUFPRyxhQUFZLFNBQVVFLEdBQVMsT0FBT3hILEVBQVV1SCxPQUFPLE9BQVEsR0FBUSxXQUMxRSxJQUFJbEMsRUFBT29DLEVBQU8xQixFQUNsQixPQUFPN0UsRUFBWWdCLE1BQU0sU0FBVXVELEdBQy9CLE9BQVFBLEVBQUdoRSxPQUNQLEtBQUssRUFDRCxHQUFNK0YsRUFBTS9FLE9BQVEsTUFBTyxDQUFDLEVBQWEsR0FDekNnRCxFQUFHaEUsTUFBUSxFQUNmLEtBQUssRUFFRCxPQURBZ0UsRUFBRzlELEtBQUtlLEtBQUssQ0FBQyxFQUFHLEdBQUssSUFDZixDQUFDLEVBQWFyQyxRQUFRcUYsSUFBSTJCLElBQ3JDLEtBQUssRUFHRCxPQUZBaEMsRUFBUUksRUFBRy9ELE9BQ1hwQixFQUFRK0UsR0FDRCxDQUFDLEVBQWEsR0FDekIsS0FBSyxFQUdELE9BRkFvQyxFQUFRaEMsRUFBRy9ELE9BQ1huQixFQUFPa0gsR0FDQSxDQUFDLEVBQWEsR0FDekIsS0FBSyxFQUFHLE1BQU8sQ0FBQyxFQUFhLEdBQzdCLEtBQUssRUFDRDFCLEVBQVExRixRQUFRcUYsSUFBSThCLEVBQU1sQyxJQUFJMkIsSUFDOUJJLEVBQVEzRSxLQUFLcUQsR0FFYnVCLElBQ0E3QixFQUFHaEUsTUFBUSxFQUNmLEtBQUssRUFBRyxNQUFPLENBQUMsYUFHckIsU0FBVWlHLEdBQ2JuSCxFQUFPbUgsTUFHZkosTUFJUixTQUFTSixFQUFjVCxHQUNuQixPQUFPekcsRUFBVWtDLFVBQU0sT0FBUSxHQUFRLFdBQ25DLE9BQU9oQixFQUFZZ0IsTUFBTSxTQUFVdUQsR0FDL0IsTUFBTyxDQUFDLEVBQWMsSUFBSXBGLFNBQVEsU0FBVUMsRUFBU0MsR0FDN0NrRyxFQUFNMUMsTUFBSyxTQUFVQSxHQUNqQixJQUFJaUQsRUFBTWxELEVBQWVDLEVBQU0wQyxFQUFNa0IsVUFDckNySCxFQUFRMEcsTUFDVCxTQUFVVSxHQUNUbkgsRUFBT21ILGdCQ3hML0IsSUNEYUUsRUFBb0Isb0JBQ3BCQyxFQUFpQixpQkFDakJDLEVBQWlCLGlCQUNqQkMsRUFBaUIsaUJBRWpCQyxFQUFZLENBQ3ZCQyxnQkFBaUJMLEVBQ2pCTSxhQUFjTCxFQUNkTSxhQUFjTCxFQUNkTSxhQUFjTCxHQUlITSxFQUE2QixTQUFDQyxHQUN6Q0EsRUFBUzlFLE1BQU1zRCxRQUFRd0IsSUFBNkIsSUFBbEJBLEVBQU83RixPQUFlNkYsRUFBTyxHQUFLQSxNQUM5REMsRUFBZ0IvRSxNQUFNc0QsUUFBUXdCLG9CQUN0QkEsRUFBT0UsS0FBSyxPQUN0QkYsUUFDRyxDQUNMRyxLQUFNYixFQUNOYyxvQ0FBOEJILEtBSXJCSSxFQUEwQixTQUFDQyxTQUMvQixDQUNMSCxLQUFNWixFQUNOYSxzQ0FBZ0NFLGNBQ2xCLElBQVpBLEVBQWdCLE9BQVMsV0FLbEJDLEVBQTBCLFNBQUNDLFNBQy9CLENBQ0xMLEtBQU1YLEVBQ05ZLHVDQUFpQ0ksY0FDbkIsSUFBWkEsRUFBZ0IsT0FBUyxXQUtsQkMsRUFBMkIsQ0FDdENOLEtBQU1WLEVBQ05XLFFBQVMsa0JBS0osU0FBU00sRUFBYWpGLEVBQU11RSxPQUMzQlcsRUFDVSwyQkFBZGxGLEVBQUtJLE1EbERTLFNBQVVKLEVBQU1tRixHQUNoQyxHQUFJbkYsR0FBUW1GLEVBQWUsQ0FDekIsSUFBSUMsRUFBcUIzRixNQUFNc0QsUUFBUW9DLEdBQWlCQSxFQUFnQkEsRUFBYzdFLE1BQU0sS0FDeEYrRSxFQUFXckYsRUFBS0UsTUFBUSxHQUN4Qm9GLEdBQVl0RixFQUFLSSxNQUFRLElBQUlHLGNBQzdCZ0YsRUFBZUQsRUFBU0UsUUFBUSxRQUFTLElBQzdDLE9BQU9KLEVBQW1CSyxNQUFLLFNBQVVyRixHQUN2QyxJQUFJc0YsRUFBWXRGLEVBQUt1RixPQUFPcEYsY0FFNUIsTUFBNEIsTUFBeEJtRixFQUFVRSxPQUFPLEdBQ1pQLEVBQVM5RSxjQUFjc0YsU0FBU0gsR0FDOUJBLEVBQVVHLFNBQVMsTUFFckJOLElBQWlCRyxFQUFVRixRQUFRLFFBQVMsSUFHOUNGLElBQWFJLEtBSXhCLE9BQU8sRUM4QnFDSSxDQUFROUYsRUFBTXVFLFNBQ25ELENBQ0xXLEVBQ0FBLEVBQWUsS0FBT1osRUFBMkJDLElBSTlDLFNBQVN3QixFQUFjL0YsRUFBTStFLEVBQVNGLE1BQ3ZDbUIsRUFBVWhHLEVBQUtpRyxTQUNiRCxFQUFVakIsSUFBWWlCLEVBQVVuQixHQUFVLElBQ3hDN0UsRUFBS2lHLEtBQU9wQixFQUFTLE1BQU8sRUFBQyxFQUFPRCxFQUF3QkMsT0FDNUQ3RSxFQUFLaUcsS0FBT2xCLEVBQVMsTUFBTyxFQUFDLEVBQU9ELEVBQXdCQyxRQUMzRCxDQUFBLEdBQUlpQixFQUFVakIsSUFBWS9FLEVBQUtpRyxLQUFPbEIsRUFDM0MsTUFBTyxFQUFDLEVBQU9ELEVBQXdCQyxJQUNwQyxHQUFJaUIsRUFBVW5CLElBQVk3RSxFQUFLaUcsS0FBT3BCLEVBQ3pDLE1BQU8sRUFBQyxFQUFPRCxFQUF3QkMsVUFFcEMsRUFBQyxFQUFNLE1BR2hCLFNBQVNtQixFQUFVdEosVUFDVkEsTUFBQUEsRUFlRixTQUFTd0osU0FDZDVFLElBQUFBLE1BQ0FpRCxJQUFBQSxPQUNBUSxJQUFBQSxRQUNBRixJQUFBQSxRQUNBc0IsSUFBQUEsU0FDQUMsSUFBQUEsU0FDQUMsSUFBQUEsbUJBR0lGLEdBQVk3RSxFQUFNNUMsT0FBUyxHQUM1QnlILEdBQVlDLEdBQVksR0FBSzlFLEVBQU01QyxPQUFTMEgsSUFLeEM5RSxFQUFNZ0YsT0FBTSxTQUFDdEcsT0FDWHVHLElBQVl0QixFQUFhakYsRUFBTXVFLFNBQy9CaUMsSUFBYVQsRUFBYy9GLEVBQU0rRSxFQUFTRixTQUMzQzRCLEVBQWVKLEVBQVlBLEVBQVVyRyxHQUFRLFlBQzVDdUcsR0FBWUMsSUFBY0MsS0FPOUIsU0FBU0MsRUFBcUJDLFNBQ08sbUJBQS9CQSxFQUFNRCxxQkFDUkMsRUFBTUQsNEJBQzBCLElBQXZCQyxFQUFNQyxjQUNmRCxFQUFNQyxhQUtWLFNBQVNDLEVBQWVGLFVBQ3hCQSxFQUFNRyxhQUtKckgsTUFBTUMsVUFBVStGLEtBQUtqSCxLQUMxQm1JLEVBQU1HLGFBQWFDLE9BQ25CLFNBQUMzRyxTQUFrQixVQUFUQSxHQUE2QiwyQkFBVEEsT0FOckJ1RyxFQUFNdEYsVUFBWXNGLEVBQU10RixPQUFPQyxNQWVyQyxTQUFTMEYsRUFBbUJMLEdBQ2pDQSxFQUFNTSxpQkFHUixTQUFTQyxFQUFLQyxVQUVxQixJQUEvQkEsRUFBVTVFLFFBQVEsVUFBcUQsSUFBbkM0RSxFQUFVNUUsUUFBUSxZQUkxRCxTQUFTNkUsRUFBT0QsVUFDeUIsSUFBaENBLEVBQVU1RSxRQUFRLFNBR3BCLFNBQVM4RSxRQUFXRix5REFBWUcsT0FBT0MsVUFBVUosaUJBQy9DRCxFQUFLQyxJQUFjQyxFQUFPRCxHQWE1QixTQUFTSywrQkFBd0JDLDJCQUFBQSx5QkFDL0IsU0FBQ2QsOEJBQVVlLG1DQUFBQSwyQkFDaEJELEVBQUloQyxNQUFLLFNBQUNrQyxVQUNIakIsRUFBcUJDLElBQVVnQixHQUNsQ0EsZ0JBQUdoQixVQUFVZSxJQUVSaEIsRUFBcUJDLE9BUzNCLFNBQVNpQixVQUNQLHVCQUF3Qk4sT0FVMUIsU0FBU08sR0FBd0J0RCxVQUNsQ3lCLEVBQVV6QixHQTRCTCxDQUNMLENBRUV1RCxZQUFhLFFBQ2J2RCxPQS9Cb0I5RCxPQUFPNkMsUUFBUWlCLEdBQ3BDdEMsUUFBTyx5QkFBRXFELE9BQVVqRixPQUNkMEgsR0FBSyxTQUVKQyxHQUFXMUMsS0FDZDJDLFFBQVFDLHdCQUNNNUMsNEtBRWR5QyxHQUFLLEdBR0Z0SSxNQUFNc0QsUUFBUTFDLElBQVNBLEVBQUlpRyxNQUFNNkIsTUFDcENGLFFBQVFDLHdCQUNNNUMsd0RBRWR5QyxHQUFLLEdBR0FBLEtBRVJsRixRQUNDLFNBQUN1RixrQkFBTTlDLE9BQVVqRixxQkFDWitILFdBQ0Y5QyxFQUFXakYsTUFFZCxNQVVDa0UsRUFRRixTQUFTOEQsR0FBdUI5RCxNQUNqQ3lCLEVBQVV6QixVQUVWOUQsT0FBTzZDLFFBQVFpQixHQUNaMUIsUUFBTyxTQUFDeUYsa0JBQUloRCxPQUFVakYseUJBQWFpSSxJQUFHaEQsS0FBYWpGLE1BQU0sSUFFekQ0QixRQUFPLFNBQUM1RCxVQUFNMkosR0FBVzNKLElBQU04SixHQUFNOUosTUFDckNvRyxLQUFLLEtBY1AsU0FBUzhELEdBQVFsSyxVQUVwQkEsYUFBYW1LLGVBQ0QsZUFBWG5LLEVBQUU2QixNQUF5QjdCLEVBQUVxRyxPQUFTckcsRUFBRW9LLFdBV3RDLFNBQVNDLEdBQWdCckssVUFFNUJBLGFBQWFtSyxlQUNELGtCQUFYbkssRUFBRTZCLE1BQTRCN0IsRUFBRXFHLE9BQVNyRyxFQUFFc0ssY0FXekMsU0FBU1gsR0FBVzNKLFNBRWpCLFlBQU5BLEdBQ00sWUFBTkEsR0FDTSxZQUFOQSxHQUNNLFdBQU5BLEdBQ0EsaUJBQWlCdUssS0FBS3ZLLEdBUW5CLFNBQVM4SixHQUFNOUosU0FDYixjQUFjdUssS0FBS3ZLLHNMQ3RRdEJ3SyxHQUFXQyxjQUFXLFdBQTBCQyxPQUF2QkMsSUFBQUEsV0FDRkMsWUFBbkJDLElBQUFBLEtBQVNDLGlCQUVqQkMsc0JBQW9CTCxHQUFLLGlCQUFPLENBQUVHLEtBQUFBLEtBQVMsQ0FBQ0EsSUFHckNHLHdCQUFDQyxnQkFBVU4sU0FBY0csT0FBT0QsS0FBQUEsU0FHekNMLEdBQVNVLFlBQWMsV0FHdkIsSUFBTUMsR0FBZSxDQUNuQkMsVUFBVSxFQUNWQyxrQkh6Q0ssU0FBbUJ2SSxHQUN0QixPQUFPbEYsRUFBVWtDLFVBQU0sT0FBUSxHQUFRLFdBQ25DLE9BQU9oQixFQUFZZ0IsTUFBTSxTQUFVdUQsR0FDL0IsT0FBSVQsRUFBU0UsSUFjZEYsRUFkcUNFLEVBQUkyRixjQUM3QixDQUFDLEVBQWNoRixFQUFxQlgsRUFBSTJGLGFBQWMzRixFQUFJZixPQWVqRixTQUFxQjFELEdBQ2pCLE9BQU91RSxFQUFTdkUsSUFBVXVFLEVBQVN2RSxFQUFNMkUsUUFkeEJzSSxDQUFZeEksR0FDVixDQUFDLEVBQWNELEVBQWNDLElBRS9CMUIsTUFBTXNELFFBQVE1QixJQUFRQSxFQUFJbUYsT0FBTSxTQUFVcEUsR0FBUSxNQUFPLFlBQWFBLEdBQWdDLG1CQUFqQkEsRUFBS0wsV0FDeEYsQ0FBQyxFQUFjTCxFQUFpQkwsSUFFcEMsQ0FBQyxFQUFjLFdHOEJoQzBELFFBQVMrRSxFQUFBQSxFQUNUN0UsUUFBUyxFQUNUb0IsVUFBVSxFQUNWQyxTQUFVLEVBQ1Z5RCx1QkFBdUIsRUFDdkJDLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxRQUFRLEVBQ1JDLHNCQUFzQixFQUN0QjVELFVBQVcsS0FDWDZELGdCQUFnQixFQUNoQkMsV0FBVyxHQUdidEIsR0FBU1csYUFBZUEsR0FFeEJYLEdBQVN1QixVQUFZLENBZ0JuQnBCLFNBQVVxQixVQUFVQyxLQVNwQi9GLE9BQVE4RixVQUFVRSxTQUFTRixVQUFVRyxRQUFRSCxVQUFVSSxTQUt2RHRFLFNBQVVrRSxVQUFVSyxLQUtwQmIsc0JBQXVCUSxVQUFVSyxLQUtqQ1osUUFBU08sVUFBVUssS0FNbkJYLFdBQVlNLFVBQVVLLEtBS3RCVixPQUFRSyxVQUFVSyxLQUtsQlQscUJBQXNCSSxVQUFVSyxLQUtoQzNGLFFBQVNzRixVQUFVTSxPQUtuQjlGLFFBQVN3RixVQUFVTSxPQUtuQnZFLFNBQVVpRSxVQUFVTSxPQUtwQmxCLFNBQVVZLFVBQVVLLEtBT3BCaEIsa0JBQW1CVyxVQUFVQyxLQUs3Qk0sbUJBQW9CUCxVQUFVQyxLQUs5Qk8saUJBQWtCUixVQUFVQyxLQU01QkosZUFBZ0JHLFVBQVVLLEtBSzFCUCxVQUFXRSxVQUFVSyxLQU9yQkksWUFBYVQsVUFBVUMsS0FPdkJTLFlBQWFWLFVBQVVDLEtBT3ZCVSxXQUFZWCxVQUFVQyxLQWdDdEJXLE9BQVFaLFVBQVVDLEtBU2xCWSxlQUFnQmIsVUFBVUMsS0FTMUJhLGVBQWdCZCxVQUFVQyxLQU8xQmMsUUFBU2YsVUFBVUMsS0FPbkJqRSxVQUFXZ0UsVUFBVUMsTUEwRXZCLElBQU1lLEdBQWUsQ0FDbkJDLFdBQVcsRUFDWEMsb0JBQW9CLEVBQ3BCQyxjQUFjLEVBQ2RDLGNBQWMsRUFDZEMsY0FBYyxFQUNkdkcsY0FBZSxHQUNmd0csZUFBZ0IsSUErRVgsU0FBUzFDLFNBQVlFLHlEQUFRLFlBMkI3QkssSUFDQUwsR0ExQkg1RSxJQUFBQSxPQUNBa0YsSUFBQUEsU0FDQUMsSUFBQUEsa0JBQ0E3RSxJQUFBQSxRQUNBRSxJQUFBQSxRQUNBb0IsSUFBQUEsU0FDQUMsSUFBQUEsU0FDQTBFLElBQUFBLFlBQ0FDLElBQUFBLFlBQ0FDLElBQUFBLFdBQ0FDLElBQUFBLE9BQ0FDLElBQUFBLGVBQ0FDLElBQUFBLGVBQ0FQLElBQUFBLG1CQUNBQyxJQUFBQSxpQkFDQVgsSUFBQUEsZUFDQUMsSUFBQUEsVUFDQU4sSUFBQUEsc0JBQ0FDLElBQUFBLFFBQ0FDLElBQUFBLFdBQ0FDLElBQUFBLE9BQ0FDLElBQUFBLHFCQUNBbUIsSUFBQUEsUUFDQS9FLElBQUFBLFVBTUl1RixFQUFhQyxXQUFRLGtCQUFNeEQsR0FBdUI5RCxLQUFTLENBQUNBLElBQzVEdUgsRUFBY0QsV0FBUSxrQkFBTWhFLEdBQXdCdEQsS0FBUyxDQUFDQSxJQUU5RHdILEVBQXFCRixXQUN6QixpQkFBbUMsbUJBQXJCaEIsRUFBa0NBLEVBQW1CbUIsS0FDbkUsQ0FBQ25CLElBRUdvQixFQUF1QkosV0FDM0IsaUJBQ2dDLG1CQUF2QmpCLEVBQW9DQSxFQUFxQm9CLEtBQ2xFLENBQUNwQixJQU9Hc0IsRUFBVUMsU0FBTyxNQUVqQkMsRUFBV0QsU0FBTyxRQUVFRSxhQUFXQyxHQUFTakIsYUFBdkNrQixPQUFPQyxPQUNObEIsRUFBa0NpQixFQUFsQ2pCLFVBQVdDLEVBQXVCZ0IsRUFBdkJoQixtQkFFYmtCLEdBQXNCTixTQUNSLG9CQUFYN0UsUUFDTEEsT0FBT29GLGlCQUNQeEMsR0FDQXRDLEtBSUUrRSxHQUFnQixZQUVmRixHQUFvQkcsU0FBV3JCLEdBQ2xDc0IsWUFBVyxXQUNMVCxFQUFTUSxVQUNPUixFQUFTUSxRQUFuQnRMLE1BRUc1QyxTQUNUOE4sRUFBUyxDQUFFcE0sS0FBTSxnQkFDakI2TCxRQUdILE1BR1BhLGFBQVUsa0JBQ1J4RixPQUFPeUYsaUJBQWlCLFFBQVNKLElBQWUsR0FDekMsV0FDTHJGLE9BQU8wRixvQkFBb0IsUUFBU0wsSUFBZSxNQUVwRCxDQUFDUCxFQUFVYixFQUFvQlUsRUFBc0JRLFNBRWxEUSxHQUFpQmQsU0FBTyxJQUN4QmUsR0FBaUIsU0FBQ3ZHLEdBQ2xCdUYsRUFBUVUsU0FBV1YsRUFBUVUsUUFBUU8sU0FBU3hHLEVBQU10RixVQUl0RHNGLEVBQU1NLGlCQUNOZ0csR0FBZUwsUUFBVSxLQUczQkUsYUFBVSxrQkFDSmpELElBQ0Z1RCxTQUFTTCxpQkFBaUIsV0FBWS9GLEdBQW9CLEdBQzFEb0csU0FBU0wsaUJBQWlCLE9BQVFHLElBQWdCLElBRzdDLFdBQ0RyRCxJQUNGdUQsU0FBU0osb0JBQW9CLFdBQVloRyxHQUN6Q29HLFNBQVNKLG9CQUFvQixPQUFRRSxRQUd4QyxDQUFDaEIsRUFBU3JDLElBR2JpRCxhQUFVLGtCQUNIckQsR0FBWVUsR0FBYStCLEVBQVFVLFNBQ3BDVixFQUFRVSxRQUFRUyxRQUVYLGVBQ04sQ0FBQ25CLEVBQVMvQixFQUFXVixRQUVsQjZELEdBQVVDLGVBQ2QsU0FBQzFRLEdBQ0t1TyxFQUNGQSxFQUFRdk8sR0FHUm9MLFFBQVEvSSxNQUFNckMsS0FHbEIsQ0FBQ3VPLElBR0dvQyxHQUFnQkQsZUFDcEIsU0FBQzVHLEdBQ0NBLEVBQU1NLGlCQUVOTixFQUFNOEcsVUFDTkMsR0FBZ0IvRyxHQUVoQnNHLEdBQWVMLG9CQUFjSyxHQUFlTCxVQUFTakcsRUFBTXRGLFNBRXZEd0YsRUFBZUYsSUFDakJySyxRQUFRQyxRQUFRbU4sRUFBa0IvQyxJQUMvQjFKLE1BQUssU0FBQ3FFLE9BQ0RvRixFQUFxQkMsSUFBV3NELE9BSTlCMEQsRUFBWXJNLEVBQU01QyxPQUNsQitNLEVBQ0prQyxFQUFZLEdBQ1p6SCxFQUFpQixDQUNmNUUsTUFBQUEsRUFDQWlELE9BQVFxSCxFQUNSN0csUUFBQUEsRUFDQUYsUUFBQUEsRUFDQXNCLFNBQUFBLEVBQ0FDLFNBQUFBLEVBQ0FDLFVBQUFBLElBSUptRyxFQUFTLENBQ1BmLGFBQUFBLEVBQ0FDLGFBSm1CaUMsRUFBWSxJQUFNbEMsRUFLckNELGNBQWMsRUFDZHBMLEtBQU0sb0JBR0owSyxHQUNGQSxFQUFZbkUsT0FHZmlILE9BQU0sU0FBQy9RLFVBQU15USxHQUFRelEsUUFHNUIsQ0FDRTZNLEVBQ0FvQixFQUNBd0MsR0FDQXJELEVBQ0EyQixFQUNBN0csRUFDQUYsRUFDQXNCLEVBQ0FDLEVBQ0FDLElBSUV3SCxHQUFlTixlQUNuQixTQUFDNUcsR0FDQ0EsRUFBTU0saUJBQ05OLEVBQU04RyxVQUNOQyxHQUFnQi9HLE9BRVZtSCxFQUFXakgsRUFBZUYsTUFDNUJtSCxHQUFZbkgsRUFBTUcsaUJBRWxCSCxFQUFNRyxhQUFhaUgsV0FBYSxPQUNoQyxpQkFHQUQsR0FBWTlDLEdBQ2RBLEVBQVdyRSxJQUdOLElBRVQsQ0FBQ3FFLEVBQVlmLElBR1QrRCxHQUFnQlQsZUFDcEIsU0FBQzVHLEdBQ0NBLEVBQU1NLGlCQUNOTixFQUFNOEcsVUFDTkMsR0FBZ0IvRyxPQUdWc0gsRUFBVWhCLEdBQWVMLFFBQVEzSyxRQUNyQyxTQUFDWixVQUFXNkssRUFBUVUsU0FBV1YsRUFBUVUsUUFBUU8sU0FBUzlMLE1BSXBENk0sRUFBWUQsRUFBUTFMLFFBQVFvRSxFQUFNdEYsU0FDckIsSUFBZjZNLEdBQ0ZELEVBQVFFLE9BQU9ELEVBQVcsR0FFNUJqQixHQUFlTCxRQUFVcUIsRUFDckJBLEVBQVF2UCxPQUFTLElBSXJCOE4sRUFBUyxDQUNQcE0sS0FBTSxrQkFDTm9MLGNBQWMsRUFDZEMsY0FBYyxFQUNkQyxjQUFjLElBR1o3RSxFQUFlRixJQUFVb0UsR0FDM0JBLEVBQVlwRSxNQUdoQixDQUFDdUYsRUFBU25CLEVBQWFkLElBR25CbUUsR0FBV2IsZUFDZixTQUFDak0sRUFBT3FGLE9BQ0F4QixFQUFnQixHQUNoQndHLEVBQWlCLEdBRXZCckssRUFBTStNLFNBQVEsU0FBQ3JPLFdBQ21CaUYsRUFBYWpGLEVBQU00TCxNQUE1Q3JGLE9BQVUrSCxXQUNjdkksRUFBYy9GLEVBQU0rRSxFQUFTRixNQUFyRDJCLE9BQVcrSCxPQUNaOUgsRUFBZUosRUFBWUEsRUFBVXJHLEdBQVEsUUFFL0N1RyxHQUFZQyxJQUFjQyxFQUM1QnRCLEVBQWN4RyxLQUFLcUIsT0FDZCxLQUNEd08sRUFBUyxDQUFDRixFQUFhQyxHQUV2QjlILElBQ0YrSCxFQUFTQSxFQUFPNU8sT0FBTzZHLElBR3pCa0YsRUFBZWhOLEtBQUssQ0FBRXFCLEtBQUFBLEVBQU13TyxPQUFRQSxFQUFPdk0sUUFBTyxTQUFDcEYsVUFBTUEsYUFLekRzSixHQUFZaEIsRUFBY3pHLE9BQVMsR0FDcEN5SCxHQUFZQyxHQUFZLEdBQUtqQixFQUFjekcsT0FBUzBILEtBR3JEakIsRUFBY2tKLFNBQVEsU0FBQ3JPLEdBQ3JCMkwsRUFBZWhOLEtBQUssQ0FBRXFCLEtBQUFBLEVBQU13TyxPQUFRLENBQUN4SixRQUV2Q0csRUFBY2dKLE9BQU8sSUFHdkIzQixFQUFTLENBQ1BySCxjQUFBQSxFQUNBd0csZUFBQUEsRUFDQXZMLEtBQU0sYUFHSjZLLEdBQ0ZBLEVBQU85RixFQUFld0csRUFBZ0JoRixHQUdwQ2dGLEVBQWVqTixPQUFTLEdBQUt5TSxHQUMvQkEsRUFBZVEsRUFBZ0JoRixHQUc3QnhCLEVBQWN6RyxPQUFTLEdBQUt3TSxHQUM5QkEsRUFBZS9GLEVBQWV3QixLQUdsQyxDQUNFNkYsRUFDQXJHLEVBQ0F5RixFQUNBN0csRUFDQUYsRUFDQXVCLEVBQ0E2RSxFQUNBQyxFQUNBQyxFQUNBOUUsSUFJRW9JLEdBQVdsQixlQUNmLFNBQUM1RyxHQUNDQSxFQUFNTSxpQkFFTk4sRUFBTThHLFVBQ05DLEdBQWdCL0csR0FFaEJzRyxHQUFlTCxRQUFVLEdBRXJCL0YsRUFBZUYsSUFDakJySyxRQUFRQyxRQUFRbU4sRUFBa0IvQyxJQUMvQjFKLE1BQUssU0FBQ3FFLEdBQ0RvRixFQUFxQkMsS0FBV3NELEdBR3BDbUUsR0FBUzlNLEVBQU9xRixNQUVqQmlILE9BQU0sU0FBQy9RLFVBQU15USxHQUFRelEsTUFFMUIyUCxFQUFTLENBQUVwTSxLQUFNLFlBRW5CLENBQUNzSixFQUFtQjBFLEdBQVVkLEdBQVNyRCxJQUluQ3lFLEdBQWlCbkIsZUFBWSxjQUc3QmQsR0FBb0JHLFNBQ3RCSixFQUFTLENBQUVwTSxLQUFNLGVBQ2pCMkwsUUFFTTRDLEVBQU8sQ0FDWHhJLFNBQUFBLEVBQ0FZLE1BQU8rRSxHQUVUeEUsT0FDR3NILG1CQUFtQkQsR0FDbkIxUixNQUFLLFNBQUN3RSxVQUFZaUksRUFBa0JqSSxNQUNwQ3hFLE1BQUssU0FBQ3FFLEdBQ0w4TSxHQUFTOU0sRUFBTyxNQUNoQmtMLEVBQVMsQ0FBRXBNLEtBQU0sbUJBRWxCd04sT0FBTSxTQUFDL1EsR0FFRjBMLEdBQVExTCxJQUNWb1AsRUFBcUJwUCxHQUNyQjJQLEVBQVMsQ0FBRXBNLEtBQU0saUJBQ1JzSSxHQUFnQjdMLElBQ3pCNFAsR0FBb0JHLFNBQVUsRUFHMUJSLEVBQVNRLFNBQ1hSLEVBQVNRLFFBQVFsUSxNQUFRLEtBQ3pCMFAsRUFBU1EsUUFBUWlDLFNBRWpCdkIsR0FDRSxJQUFJd0IsTUFDRixtS0FLTnhCLEdBQVF6USxXQU1adVAsRUFBU1EsVUFDWEosRUFBUyxDQUFFcE0sS0FBTSxlQUNqQjJMLElBQ0FLLEVBQVNRLFFBQVFsUSxNQUFRLEtBQ3pCMFAsRUFBU1EsUUFBUWlDLFdBRWxCLENBQ0RyQyxFQUNBVCxFQUNBRSxFQUNBL0IsRUFDQWtFLEdBQ0FkLEdBQ0F4QixFQUNBM0YsSUFJSTRJLEdBQWN4QixlQUNsQixTQUFDNUcsR0FFTXVGLEVBQVFVLFNBQVlWLEVBQVFVLFFBQVFvQyxZQUFZckksRUFBTXRGLFVBSzNDLE1BQWRzRixFQUFNc0ksS0FDUSxVQUFkdEksRUFBTXNJLEtBQ1ksS0FBbEJ0SSxFQUFNdUksU0FDWSxLQUFsQnZJLEVBQU11SSxVQUVOdkksRUFBTU0saUJBQ055SCxTQUdKLENBQUN4QyxFQUFTd0MsS0FJTlMsR0FBWTVCLGVBQVksV0FDNUJmLEVBQVMsQ0FBRXBNLEtBQU0sWUFDaEIsSUFDR2dQLEdBQVc3QixlQUFZLFdBQzNCZixFQUFTLENBQUVwTSxLQUFNLFdBQ2hCLElBR0dpUCxHQUFZOUIsZUFBWSxXQUN4QnpELElBT0F6QyxJQUNGd0YsV0FBVzZCLEdBQWdCLEdBRTNCQSxRQUVELENBQUM1RSxFQUFTNEUsS0FFUFksR0FBaUIsU0FBQzNILFVBQ2Y4QixFQUFXLEtBQU85QixHQUdyQjRILEdBQXlCLFNBQUM1SCxVQUN2Qm9DLEVBQWEsS0FBT3VGLEdBQWUzSCxJQUd0QzZILEdBQXFCLFNBQUM3SCxVQUNuQnFDLEVBQVMsS0FBT3NGLEdBQWUzSCxJQUdsQytGLEdBQWtCLFNBQUMvRyxHQUNuQnNELEdBQ0Z0RCxFQUFNK0csbUJBSUorQixHQUFlNUQsV0FDbkIsa0JBQ0Usd0VBWUksT0FYRjZELE9BQUFBLGFBQVMsUUFDVEMsSUFBQUEsS0FDQUMsSUFBQUEsVUFDQUMsSUFBQUEsUUFDQUMsSUFBQUEsT0FDQUMsSUFBQUEsUUFDQWpGLElBQUFBLFlBQ0FFLElBQUFBLFdBQ0FELElBQUFBLFlBQ0FFLElBQUFBLE9BQ0crRSx3QkFFSEosVUFBV0wsR0FDVC9ILEVBQXFCb0ksRUFBV2IsS0FFbENjLFFBQVNOLEdBQ1AvSCxFQUFxQnFJLEVBQVNWLEtBRWhDVyxPQUFRUCxHQUF1Qi9ILEVBQXFCc0ksRUFBUVYsS0FDNURXLFFBQVNULEdBQWU5SCxFQUFxQnVJLEVBQVNWLEtBQ3REdkUsWUFBYTBFLEdBQ1hoSSxFQUFxQnNELEVBQWEwQyxLQUVwQ3hDLFdBQVl3RSxHQUNWaEksRUFBcUJ3RCxFQUFZNkMsS0FFbkM5QyxZQUFheUUsR0FDWGhJLEVBQXFCdUQsRUFBYWlELEtBRXBDL0MsT0FBUXVFLEdBQW1CaEksRUFBcUJ5RCxFQUFRd0QsS0FDeERrQixLQUFzQixpQkFBVEEsR0FBOEIsS0FBVEEsRUFBY0EsRUFBTyxnQkFDdERELEVBQVN4RCxHQUNMekMsR0FBYU0sRUFBK0IsR0FBbEIsQ0FBRWtHLFNBQVUsSUFDeENELE1BRVAsQ0FDRTlELEVBQ0E2QyxHQUNBSSxHQUNBQyxHQUNBQyxHQUNBN0IsR0FDQUssR0FDQUcsR0FDQVMsR0FDQTFFLEVBQ0FDLEVBQ0FQLElBSUV5RyxHQUFzQjNDLGVBQVksU0FBQzVHLEdBQ3ZDQSxFQUFNK0csb0JBQ0wsSUFFR3lDLEdBQWdCdEUsV0FDcEIsa0JBQ0Usd0VBQWtELE9BQS9DNkQsT0FBQUEsYUFBUyxRQUFPVSxJQUFBQSxTQUFVTCxJQUFBQSxRQUFZQyxVQUNqQ0ssS0FDSjlMLE9BQVFxSCxFQUNSekYsU0FBQUEsRUFDQS9GLEtBQU0sT0FDTmtRLE1BQU8sQ0FBRUMsUUFBUyxRQUNsQkgsU0FBVWQsR0FBZTlILEVBQXFCNEksRUFBVTNCLEtBQ3hEc0IsUUFBU1QsR0FDUDlILEVBQXFCdUksRUFBU0csS0FFaENELFVBQVcsR0FDVlAsRUFBU3RELGlCQUlQaUUsR0FDQUwsTUFHVCxDQUFDNUQsRUFBVTdILEVBQVE0QixFQUFVc0ksR0FBVWhGLGtCQUlwQzhDLE9BQ0hqQixVQUFXQSxJQUFjN0IsRUFDekJnRyxhQUFBQSxHQUNBVSxjQUFBQSxHQUNBakUsUUFBQUEsRUFDQUUsU0FBQUEsRUFDQWxELEtBQU1vRyxHQUFlWixNQVN6QixTQUFTcEMsR0FBUUMsRUFBT2lFLFVBRWRBLEVBQU9wUSxVQUNSLHNCQUVFbU0sT0FDSGpCLFdBQVcsUUFFVixxQkFFRWlCLE9BQ0hqQixXQUFXLFFBRVYsMkJBRUVELFFBQ0hFLG9CQUFvQixRQUVuQiw0QkFFRWdCLE9BQ0hoQixvQkFBb0IsUUFFbkIsZ0NBRUVnQixPQUNIZixhQUFjZ0YsRUFBT2hGLGFBQ3JCQyxhQUFjK0UsRUFBTy9FLGFBQ3JCQyxhQUFjOEUsRUFBTzlFLG1CQUVwQix5QkFFRWEsT0FDSHBILGNBQWVxTCxFQUFPckwsY0FDdEJ3RyxlQUFnQjZFLEVBQU83RSxxQkFFdEIsb0JBRUVOLG1CQUdFa0IsR0FJYixTQUFTUCJ9


/***/ }),

/***/ 49156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e6: () => (/* binding */ $faa2e61a3361514f$export$9a58ef0d7ad3278c),
  fC: () => (/* binding */ $faa2e61a3361514f$export$be92b6f5f03c0fe9),
  bU: () => (/* binding */ $faa2e61a3361514f$export$6521433ed15a34db),
  fQ: () => (/* binding */ $faa2e61a3361514f$export$13921ac0cc260818)
});

// UNUSED EXPORTS: Slider, SliderRange, SliderThumb, SliderTrack, createSliderScope

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(24061);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@radix-ui+number@1.0.1/node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(14614);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(10635);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(68272);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(38745);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(35779);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@radix-ui+react-use-previous@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-use-previous/dist/index.mjs



function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = (0,react_.useRef)({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return (0,react_.useMemo)(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.20_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(30269);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(17589);
// EXTERNAL MODULE: ./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(45766);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@radix-ui+react-slider@1.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-slider/dist/index.mjs

























const $faa2e61a3361514f$var$PAGE_KEYS = [
    'PageUp',
    'PageDown'
];
const $faa2e61a3361514f$var$ARROW_KEYS = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
];
const $faa2e61a3361514f$var$BACK_KEYS = {
    'from-left': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowLeft'
    ],
    'from-right': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowRight'
    ],
    'from-bottom': [
        'Home',
        'PageDown',
        'ArrowDown',
        'ArrowLeft'
    ],
    'from-top': [
        'Home',
        'PageDown',
        'ArrowUp',
        'ArrowLeft'
    ]
};
/* -------------------------------------------------------------------------------------------------
 * Slider
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SLIDER_NAME = 'Slider';
const [$faa2e61a3361514f$var$Collection, $faa2e61a3361514f$var$useCollection, $faa2e61a3361514f$var$createCollectionScope] = (0,react_collection_dist/* createCollection */.B)($faa2e61a3361514f$var$SLIDER_NAME);
const [$faa2e61a3361514f$var$createSliderContext, $faa2e61a3361514f$export$ef72632d7b901f97] = (0,react_context_dist/* createContextScope */.b)($faa2e61a3361514f$var$SLIDER_NAME, [
    $faa2e61a3361514f$var$createCollectionScope
]);
const [$faa2e61a3361514f$var$SliderProvider, $faa2e61a3361514f$var$useSliderContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME);
const $faa2e61a3361514f$export$472062a354075cee = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { name: name , min: min = 0 , max: max = 100 , step: step = 1 , orientation: orientation = 'horizontal' , disabled: disabled = false , minStepsBetweenThumbs: minStepsBetweenThumbs = 0 , defaultValue: defaultValue = [
        min
    ] , value: value1 , onValueChange: onValueChange = ()=>{} , onValueCommit: onValueCommit = ()=>{} , inverted: inverted = false , ...sliderProps } = props;
    const [slider, setSlider] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setSlider(node)
    );
    const thumbRefs = (0,react_.useRef)(new Set());
    const valueIndexToChangeRef = (0,react_.useRef)(0);
    const isHorizontal = orientation === 'horizontal'; // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = slider ? Boolean(slider.closest('form')) : true;
    const SliderOrientation = isHorizontal ? $faa2e61a3361514f$var$SliderHorizontal : $faa2e61a3361514f$var$SliderVertical;
    const [values = [], setValues] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: value1,
        defaultProp: defaultValue,
        onChange: (value)=>{
            var _thumbs$valueIndexToC;
            const thumbs = [
                ...thumbRefs.current
            ];
            (_thumbs$valueIndexToC = thumbs[valueIndexToChangeRef.current]) === null || _thumbs$valueIndexToC === void 0 || _thumbs$valueIndexToC.focus();
            onValueChange(value);
        }
    });
    const valuesBeforeSlideStartRef = (0,react_.useRef)(values);
    function handleSlideStart(value) {
        const closestIndex = $faa2e61a3361514f$var$getClosestValueIndex(values, value);
        updateValues(value, closestIndex);
    }
    function handleSlideMove(value) {
        updateValues(value, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value, atIndex, { commit: commit  } = {
        commit: false
    }) {
        const decimalCount = $faa2e61a3361514f$var$getDecimalCount(step);
        const snapToStep = $faa2e61a3361514f$var$roundValue(Math.round((value - min) / step) * step + min, decimalCount);
        const nextValue = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = $faa2e61a3361514f$var$getNextSortedValues(prevValues, nextValue, atIndex);
            if ($faa2e61a3361514f$var$hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else return prevValues;
        });
    }
    return /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderProvider, {
        scope: props.__scopeSlider,
        disabled: disabled,
        min: min,
        max: max,
        valueIndexToChangeRef: valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values: values,
        orientation: orientation
    }, /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$Collection.Provider, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$Collection.Slot, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react_.createElement)(SliderOrientation, (0,esm_extends/* default */.Z)({
        "aria-disabled": disabled,
        "data-disabled": disabled ? '' : undefined
    }, sliderProps, {
        ref: composedRefs,
        onPointerDown: (0,dist/* composeEventHandlers */.M)(sliderProps.onPointerDown, ()=>{
            if (!disabled) valuesBeforeSlideStartRef.current = values;
        }),
        min: min,
        max: max,
        inverted: inverted,
        onSlideStart: disabled ? undefined : handleSlideStart,
        onSlideMove: disabled ? undefined : handleSlideMove,
        onSlideEnd: disabled ? undefined : handleSlideEnd,
        onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                commit: true
            })
        ,
        onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                commit: true
            })
        ,
        onStepKeyDown: ({ event: event , direction: stepDirection  })=>{
            if (!disabled) {
                const isPageKey = $faa2e61a3361514f$var$PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && $faa2e61a3361514f$var$ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value + stepInDirection, atIndex, {
                    commit: true
                });
            }
        }
    })))), isFormControl && values.map((value, index)=>/*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$BubbleInput, {
            key: index,
            name: name ? name + (values.length > 1 ? '[]' : '') : undefined,
            value: value
        })
    ));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$472062a354075cee, {
    displayName: $faa2e61a3361514f$var$SLIDER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderHorizontal
 * -----------------------------------------------------------------------------------------------*/ const [$faa2e61a3361514f$var$SliderOrientationProvider, $faa2e61a3361514f$var$useSliderOrientationContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME, {
    startEdge: 'left',
    endEdge: 'right',
    size: 'width',
    direction: 1
});
const $faa2e61a3361514f$var$SliderHorizontal = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { min: min , max: max , dir: dir , inverted: inverted , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const [slider, setSlider] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setSlider(node)
    );
    const rectRef = (0,react_.useRef)();
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const isDirectionLTR = direction === 'ltr';
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = $faa2e61a3361514f$var$linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? 'left' : 'right',
        endEdge: isSlidingFromLeft ? 'right' : 'left',
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width"
    }, /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderImpl, (0,esm_extends/* default */.Z)({
        dir: direction,
        "data-orientation": "horizontal"
    }, sliderProps, {
        ref: composedRefs,
        style: {
            ...sliderProps.style,
            ['--radix-slider-thumb-transform']: 'translateX(-50%)'
        },
        onSlideStart: (event)=>{
            const value = getValueFromPointer(event.clientX);
            onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
        },
        onSlideMove: (event)=>{
            const value = getValueFromPointer(event.clientX);
            onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
        },
        onSlideEnd: ()=>{
            rectRef.current = undefined;
            onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
        },
        onStepKeyDown: (event)=>{
            const slideDirection = isSlidingFromLeft ? 'from-left' : 'from-right';
            const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
            onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
                event: event,
                direction: isBackKey ? -1 : 1
            });
        }
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SliderVertical
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SliderVertical = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { min: min , max: max , inverted: inverted , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const sliderRef = (0,react_.useRef)(null);
    const ref = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, sliderRef);
    const rectRef = (0,react_.useRef)();
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = $faa2e61a3361514f$var$linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? 'bottom' : 'top',
        endEdge: isSlidingFromBottom ? 'top' : 'bottom',
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1
    }, /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderImpl, (0,esm_extends/* default */.Z)({
        "data-orientation": "vertical"
    }, sliderProps, {
        ref: ref,
        style: {
            ...sliderProps.style,
            ['--radix-slider-thumb-transform']: 'translateY(50%)'
        },
        onSlideStart: (event)=>{
            const value = getValueFromPointer(event.clientY);
            onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
        },
        onSlideMove: (event)=>{
            const value = getValueFromPointer(event.clientY);
            onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
        },
        onSlideEnd: ()=>{
            rectRef.current = undefined;
            onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
        },
        onStepKeyDown: (event)=>{
            const slideDirection = isSlidingFromBottom ? 'from-bottom' : 'from-top';
            const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
            onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
                event: event,
                direction: isBackKey ? -1 : 1
            });
        }
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SliderImpl
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$SliderImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , onSlideStart: onSlideStart , onSlideMove: onSlideMove , onSlideEnd: onSlideEnd , onHomeKeyDown: onHomeKeyDown , onEndKeyDown: onEndKeyDown , onStepKeyDown: onStepKeyDown , ...sliderProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$SLIDER_NAME, __scopeSlider);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({}, sliderProps, {
        ref: forwardedRef,
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            if (event.key === 'Home') {
                onHomeKeyDown(event); // Prevent scrolling to page start
                event.preventDefault();
            } else if (event.key === 'End') {
                onEndKeyDown(event); // Prevent scrolling to page end
                event.preventDefault();
            } else if ($faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event); // Prevent scrolling for directional key presses
                event.preventDefault();
            }
        }),
        onPointerDown: (0,dist/* composeEventHandlers */.M)(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId); // Prevent browser focus behaviour because we focus a thumb manually when values change.
            event.preventDefault(); // Touch devices have a delay before focusing so won't focus if touch immediately moves
            // away from target (sliding). We want thumb to focus regardless.
            if (context.thumbs.has(target)) target.focus();
            else onSlideStart(event);
        }),
        onPointerMove: (0,dist/* composeEventHandlers */.M)(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0,dist/* composeEventHandlers */.M)(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SliderTrack
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$TRACK_NAME = 'SliderTrack';
const $faa2e61a3361514f$export$105594979f116971 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , ...trackProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$TRACK_NAME, __scopeSlider);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        "data-disabled": context.disabled ? '' : undefined,
        "data-orientation": context.orientation
    }, trackProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$105594979f116971, {
    displayName: $faa2e61a3361514f$var$TRACK_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderRange
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$RANGE_NAME = 'SliderRange';
const $faa2e61a3361514f$export$a5cf38a7a000fe77 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , ...rangeProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
    const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>$faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? '' : undefined
    }, rangeProps, {
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + '%',
            [orientation.endEdge]: offsetEnd + '%'
        }
    }));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$a5cf38a7a000fe77, {
    displayName: $faa2e61a3361514f$var$RANGE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SliderThumb
 * -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$THUMB_NAME = 'SliderThumb';
const $faa2e61a3361514f$export$2c1b491743890dec = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const getItems = $faa2e61a3361514f$var$useCollection(props.__scopeSlider);
    const [thumb, setThumb] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setThumb(node)
    );
    const index = (0,react_.useMemo)(()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb
        ) : -1
    , [
        getItems,
        thumb
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$SliderThumbImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: composedRefs,
        index: index
    }));
});
const $faa2e61a3361514f$var$SliderThumbImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeSlider: __scopeSlider , index: index , ...thumbProps } = props;
    const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
    const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setThumb(node)
    );
    const size = (0,react_use_size_dist/* useSize */.t)(thumb); // We cast because index could be `-1` which would return undefined
    const value = context.values[index];
    const percent = value === undefined ? 0 : $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max);
    const label = $faa2e61a3361514f$var$getLabel(index, context.values.length);
    const orientationSize = size === null || size === void 0 ? void 0 : size[orientation.size];
    const thumbInBoundsOffset = orientationSize ? $faa2e61a3361514f$var$getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    (0,react_.useEffect)(()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /*#__PURE__*/ (0,react_.createElement)("span", {
        style: {
            transform: 'var(--radix-slider-thumb-transform)',
            position: 'absolute',
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        }
    }, /*#__PURE__*/ (0,react_.createElement)($faa2e61a3361514f$var$Collection.ItemSlot, {
        scope: props.__scopeSlider
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        role: "slider",
        "aria-label": props['aria-label'] || label,
        "aria-valuemin": context.min,
        "aria-valuenow": value,
        "aria-valuemax": context.max,
        "aria-orientation": context.orientation,
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? '' : undefined,
        tabIndex: context.disabled ? undefined : 0
    }, thumbProps, {
        ref: composedRefs,
        style: value === undefined ? {
            display: 'none'
        } : props.style,
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>{
            context.valueIndexToChangeRef.current = index;
        })
    }))));
});
/*#__PURE__*/ Object.assign($faa2e61a3361514f$export$2c1b491743890dec, {
    displayName: $faa2e61a3361514f$var$THUMB_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $faa2e61a3361514f$var$BubbleInput = (props)=>{
    const { value: value , ...inputProps } = props;
    const ref = (0,react_.useRef)(null);
    const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value); // Bubble value change to parents (e.g form change event)
    (0,react_.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('input', {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully do not use `type="hidden"` here otherwise forms that
   * wrap it will not be able to access its value via the FormData API.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   */ return /*#__PURE__*/ (0,react_.createElement)("input", (0,esm_extends/* default */.Z)({
        style: {
            display: 'none'
        }
    }, inputProps, {
        ref: ref,
        defaultValue: value
    }));
};
function $faa2e61a3361514f$var$getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b
    );
}
function $faa2e61a3361514f$var$convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return $ae6933e535247d3d$export$7d15b64cf5a3a4c4(percentage, [
        0,
        100
    ]);
}
/**
 * Returns a label for each thumb when there are two or more thumbs
 */ function $faa2e61a3361514f$var$getLabel(index, totalValues) {
    if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
    else if (totalValues === 2) return [
        'Minimum',
        'Maximum'
    ][index];
    else return undefined;
}
/**
 * Given a `values` array and a `nextValue`, determine which value in
 * the array is closest to `nextValue` and return its index.
 *
 * @example
 * // returns 1
 * getClosestValueIndex([10, 30], 25);
 */ function $faa2e61a3361514f$var$getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue)
    );
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
/**
 * Offsets the thumb centre point while sliding to ensure it remains
 * within the bounds of the slider when reaching the edges
 */ function $faa2e61a3361514f$var$getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = $faa2e61a3361514f$var$linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
/**
 * Gets an array of steps between each value.
 *
 * @example
 * // returns [1, 9]
 * getStepsBetweenValues([10, 11, 20]);
 */ function $faa2e61a3361514f$var$getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value
    );
}
/**
 * Verifies the minimum steps between all values is greater than or equal
 * to the expected minimum steps.
 *
 * @example
 * // returns false
 * hasMinStepsBetweenValues([1,2,3], 2);
 *
 * @example
 * // returns true
 * hasMinStepsBetweenValues([1,2,3], 1);
 */ function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = $faa2e61a3361514f$var$getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
} // https://github.com/tmcw-up-for-adoption/simple-linear-scale/blob/master/index.js
function $faa2e61a3361514f$var$linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function $faa2e61a3361514f$var$getDecimalCount(value) {
    return (String(value).split('.')[1] || '').length;
}
function $faa2e61a3361514f$var$roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
const $faa2e61a3361514f$export$be92b6f5f03c0fe9 = $faa2e61a3361514f$export$472062a354075cee;
const $faa2e61a3361514f$export$13921ac0cc260818 = $faa2e61a3361514f$export$105594979f116971;
const $faa2e61a3361514f$export$9a58ef0d7ad3278c = $faa2e61a3361514f$export$a5cf38a7a000fe77;
const $faa2e61a3361514f$export$6521433ed15a34db = $faa2e61a3361514f$export$2c1b491743890dec;





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 55709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YG: () => (/* binding */ $),
/* harmony export */   ZP: () => (/* binding */ X),
/* harmony export */   _H: () => (/* binding */ H)
/* harmony export */ });
/* unused harmony exports Component, ReactCrop, areCropsEqual, clamp, cls, containCrop, convertToPercentCrop, convertToPixelCrop, defaultCrop, nudgeCrop */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);

const M = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  unit: "px"
}, v = (s, t, e) => Math.min(Math.max(s, t), e), S = (...s) => s.filter((t) => t && typeof t == "string").join(" "), Y = (s, t) => s === t || s.width === t.width && s.height === t.height && s.x === t.x && s.y === t.y && s.unit === t.unit;
function $(s, t, e, h) {
  const i = y(s, e, h);
  return s.width && (i.height = i.width / t), s.height && (i.width = i.height * t), i.y + i.height > h && (i.height = h - i.y, i.width = i.height * t), i.x + i.width > e && (i.width = e - i.x, i.height = i.width / t), s.unit === "%" ? D(i, e, h) : i;
}
function H(s, t, e) {
  const h = y(s, t, e);
  return h.x = (t - h.width) / 2, h.y = (e - h.height) / 2, s.unit === "%" ? D(h, t, e) : h;
}
function D(s, t, e) {
  return s.unit === "%" ? { ...M, ...s, unit: "%" } : {
    unit: "%",
    x: s.x ? s.x / t * 100 : 0,
    y: s.y ? s.y / e * 100 : 0,
    width: s.width ? s.width / t * 100 : 0,
    height: s.height ? s.height / e * 100 : 0
  };
}
function y(s, t, e) {
  return s.unit ? s.unit === "px" ? { ...M, ...s, unit: "px" } : {
    unit: "px",
    x: s.x ? s.x * t / 100 : 0,
    y: s.y ? s.y * e / 100 : 0,
    width: s.width ? s.width * t / 100 : 0,
    height: s.height ? s.height * e / 100 : 0
  } : { ...M, ...s, unit: "px" };
}
function P(s, t, e, h, i, n = 0, o = 0, w = h, a = i) {
  const r = { ...s };
  let c = Math.min(n, h), d = Math.min(o, i), g = Math.min(w, h), l = Math.min(a, i);
  t && (t > 1 ? (c = o ? o * t : c, d = c / t, g = w * t) : (d = n ? n / t : d, c = d * t, l = a / t)), r.y < 0 && (r.height = Math.max(r.height + r.y, d), r.y = 0), r.x < 0 && (r.width = Math.max(r.width + r.x, c), r.x = 0);
  const m = h - (r.x + r.width);
  m < 0 && (r.x = Math.min(r.x, h - c), r.width += m);
  const x = i - (r.y + r.height);
  if (x < 0 && (r.y = Math.min(r.y, i - d), r.height += x), r.width < c && ((e === "sw" || e == "nw") && (r.x -= c - r.width), r.width = c), r.height < d && ((e === "nw" || e == "ne") && (r.y -= d - r.height), r.height = d), r.width > g && ((e === "sw" || e == "nw") && (r.x -= g - r.width), r.width = g), r.height > l && ((e === "nw" || e == "ne") && (r.y -= l - r.height), r.height = l), t) {
    const b = r.width / r.height;
    if (b < t) {
      const C = Math.max(r.width / t, d);
      (e === "nw" || e == "ne") && (r.y -= C - r.height), r.height = C;
    } else if (b > t) {
      const C = Math.max(r.height * t, c);
      (e === "sw" || e == "nw") && (r.x -= C - r.width), r.width = C;
    }
  }
  return r;
}
function _(s, t, e, h) {
  const i = { ...s };
  return t === "ArrowLeft" ? h === "nw" ? (i.x -= e, i.y -= e, i.width += e, i.height += e) : h === "w" ? (i.x -= e, i.width += e) : h === "sw" ? (i.x -= e, i.width += e, i.height += e) : h === "ne" ? (i.y += e, i.width -= e, i.height -= e) : h === "e" ? i.width -= e : h === "se" && (i.width -= e, i.height -= e) : t === "ArrowRight" && (h === "nw" ? (i.x += e, i.y += e, i.width -= e, i.height -= e) : h === "w" ? (i.x += e, i.width -= e) : h === "sw" ? (i.x += e, i.width -= e, i.height -= e) : h === "ne" ? (i.y -= e, i.width += e, i.height += e) : h === "e" ? i.width += e : h === "se" && (i.width += e, i.height += e)), t === "ArrowUp" ? h === "nw" ? (i.x -= e, i.y -= e, i.width += e, i.height += e) : h === "n" ? (i.y -= e, i.height += e) : h === "ne" ? (i.y -= e, i.width += e, i.height += e) : h === "sw" ? (i.x += e, i.width -= e, i.height -= e) : h === "s" ? i.height -= e : h === "se" && (i.width -= e, i.height -= e) : t === "ArrowDown" && (h === "nw" ? (i.x += e, i.y += e, i.width -= e, i.height -= e) : h === "n" ? (i.y += e, i.height -= e) : h === "ne" ? (i.y += e, i.width -= e, i.height -= e) : h === "sw" ? (i.x -= e, i.width += e, i.height += e) : h === "s" ? i.height += e : h === "se" && (i.width += e, i.height += e)), i;
}
const f = { capture: !0, passive: !1 }, u = class u extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments), this.docMoveBound = !1, this.mouseDownOnCrop = !1, this.dragStarted = !1, this.evData = {
      startClientX: 0,
      startClientY: 0,
      startCropX: 0,
      startCropY: 0,
      clientX: 0,
      clientY: 0,
      isResize: !0
    }, this.componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(), this.mediaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(), this.initChangeCalled = !1, this.state = {
      cropIsActive: !1,
      newCropIsBeingDrawn: !1
    }, this.onCropPointerDown = (t) => {
      const { crop: e, disabled: h } = this.props, i = this.getBox();
      if (!e)
        return;
      const n = y(e, i.width, i.height);
      if (h)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const o = t.target.dataset.ord, w = !!o;
      let a = t.clientX, r = t.clientY, c = n.x, d = n.y;
      if (o) {
        const g = t.clientX - i.x, l = t.clientY - i.y;
        let m = 0, x = 0;
        o === "ne" || o == "e" ? (m = g - (n.x + n.width), x = l - n.y, c = n.x, d = n.y + n.height) : o === "se" || o === "s" ? (m = g - (n.x + n.width), x = l - (n.y + n.height), c = n.x, d = n.y) : o === "sw" || o == "w" ? (m = g - n.x, x = l - (n.y + n.height), c = n.x + n.width, d = n.y) : (o === "nw" || o == "n") && (m = g - n.x, x = l - n.y, c = n.x + n.width, d = n.y + n.height), a = c + i.x + m, r = d + i.y + x;
      }
      this.evData = {
        startClientX: a,
        startClientY: r,
        startCropX: c,
        startCropY: d,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: w,
        ord: o
      }, this.mouseDownOnCrop = !0, this.setState({ cropIsActive: !0 });
    }, this.onComponentPointerDown = (t) => {
      const { crop: e, disabled: h, locked: i, keepSelection: n, onChange: o } = this.props, w = this.getBox();
      if (h || i || n && e)
        return;
      t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({ preventScroll: !0 });
      const a = t.clientX - w.x, r = t.clientY - w.y, c = {
        unit: "px",
        x: a,
        y: r,
        width: 0,
        height: 0
      };
      this.evData = {
        startClientX: t.clientX,
        startClientY: t.clientY,
        startCropX: a,
        startCropY: r,
        clientX: t.clientX,
        clientY: t.clientY,
        isResize: !0
      }, this.mouseDownOnCrop = !0, o(y(c, w.width, w.height), D(c, w.width, w.height)), this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
    }, this.onDocPointerMove = (t) => {
      const { crop: e, disabled: h, onChange: i, onDragStart: n } = this.props, o = this.getBox();
      if (h || !e || !this.mouseDownOnCrop)
        return;
      t.cancelable && t.preventDefault(), this.dragStarted || (this.dragStarted = !0, n && n(t));
      const { evData: w } = this;
      w.clientX = t.clientX, w.clientY = t.clientY;
      let a;
      w.isResize ? a = this.resizeCrop() : a = this.dragCrop(), Y(e, a) || i(
        y(a, o.width, o.height),
        D(a, o.width, o.height)
      );
    }, this.onComponentKeyDown = (t) => {
      const { crop: e, disabled: h, onChange: i, onComplete: n } = this.props;
      if (h)
        return;
      const o = t.key;
      let w = !1;
      if (!e)
        return;
      const a = this.getBox(), r = this.makePixelCrop(a), d = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? u.nudgeStepLarge : t.shiftKey ? u.nudgeStepMedium : u.nudgeStep;
      if (o === "ArrowLeft" ? (r.x -= d, w = !0) : o === "ArrowRight" ? (r.x += d, w = !0) : o === "ArrowUp" ? (r.y -= d, w = !0) : o === "ArrowDown" && (r.y += d, w = !0), w) {
        t.cancelable && t.preventDefault(), r.x = v(r.x, 0, a.width - r.width), r.y = v(r.y, 0, a.height - r.height);
        const g = y(r, a.width, a.height), l = D(r, a.width, a.height);
        i(g, l), n && n(g, l);
      }
    }, this.onHandlerKeyDown = (t, e) => {
      const {
        aspect: h = 0,
        crop: i,
        disabled: n,
        minWidth: o = 0,
        minHeight: w = 0,
        maxWidth: a,
        maxHeight: r,
        onChange: c,
        onComplete: d
      } = this.props, g = this.getBox();
      if (n || !i)
        return;
      if (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight")
        t.stopPropagation(), t.preventDefault();
      else
        return;
      const m = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? u.nudgeStepLarge : t.shiftKey ? u.nudgeStepMedium : u.nudgeStep, x = y(i, g.width, g.height), b = _(x, t.key, m, e), C = P(
        b,
        h,
        e,
        g.width,
        g.height,
        o,
        w,
        a,
        r
      );
      if (!Y(i, C)) {
        const R = D(C, g.width, g.height);
        c(C, R), d && d(C, R);
      }
    }, this.onDocPointerDone = (t) => {
      const { crop: e, disabled: h, onComplete: i, onDragEnd: n } = this.props, o = this.getBox();
      this.unbindDocMove(), !(h || !e) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, n && n(t), i && i(y(e, o.width, o.height), D(e, o.width, o.height)), this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
    }, this.onDragFocus = (t) => {
      var e;
      (e = this.componentRef.current) == null || e.scrollTo(0, 0);
    };
  }
  get document() {
    return document;
  }
  // We unfortunately get the bounding box every time as x+y changes
  // due to scrolling.
  getBox() {
    const t = this.mediaRef.current;
    if (!t)
      return { x: 0, y: 0, width: 0, height: 0 };
    const { x: e, y: h, width: i, height: n } = t.getBoundingClientRect();
    return { x: e, y: h, width: i, height: n };
  }
  componentDidUpdate(t) {
    const { crop: e, onComplete: h } = this.props;
    if (h && !t.crop && e) {
      const { width: i, height: n } = this.getBox();
      i && n && h(y(e, i, n), D(e, i, n));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect();
  }
  bindDocMove() {
    this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, f), this.document.addEventListener("pointerup", this.onDocPointerDone, f), this.document.addEventListener("pointercancel", this.onDocPointerDone, f), this.docMoveBound = !0);
  }
  unbindDocMove() {
    this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, f), this.document.removeEventListener("pointerup", this.onDocPointerDone, f), this.document.removeEventListener("pointercancel", this.onDocPointerDone, f), this.docMoveBound = !1);
  }
  getCropStyle() {
    const { crop: t } = this.props;
    if (t)
      return {
        top: `${t.y}${t.unit}`,
        left: `${t.x}${t.unit}`,
        width: `${t.width}${t.unit}`,
        height: `${t.height}${t.unit}`
      };
  }
  dragCrop() {
    const { evData: t } = this, e = this.getBox(), h = this.makePixelCrop(e), i = t.clientX - t.startClientX, n = t.clientY - t.startClientY;
    return h.x = v(t.startCropX + i, 0, e.width - h.width), h.y = v(t.startCropY + n, 0, e.height - h.height), h;
  }
  getPointRegion(t, e, h, i) {
    const { evData: n } = this, o = n.clientX - t.x, w = n.clientY - t.y;
    let a;
    i && e ? a = e === "nw" || e === "n" || e === "ne" : a = w < n.startCropY;
    let r;
    return h && e ? r = e === "nw" || e === "w" || e === "sw" : r = o < n.startCropX, r ? a ? "nw" : "sw" : a ? "ne" : "se";
  }
  resolveMinDimensions(t, e, h = 0, i = 0) {
    let n = Math.min(h, t.width), o = Math.min(i, t.height);
    return !e || !n && !o ? [n, o] : e > 1 ? n ? [n, n / e] : [o * e, o] : o ? [o * e, o] : [n, n / e];
  }
  resizeCrop() {
    const { evData: t } = this, { aspect: e = 0, maxWidth: h, maxHeight: i } = this.props, n = this.getBox(), [o, w] = this.resolveMinDimensions(n, e, this.props.minWidth, this.props.minHeight);
    let a = this.makePixelCrop(n), r = this.getPointRegion(n, t.ord, o, w);
    const c = t.ord || r;
    let d = t.clientX - t.startClientX, g = t.clientY - t.startClientY;
    (o && c === "nw" || c === "w" || c === "sw") && (d = Math.min(d, -o)), (w && c === "nw" || c === "n" || c === "ne") && (g = Math.min(g, -w));
    const l = {
      unit: "px",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    r === "ne" ? (l.x = t.startCropX, l.width = d, e ? (l.height = l.width / e, l.y = t.startCropY - l.height) : (l.height = Math.abs(g), l.y = t.startCropY - l.height)) : r === "se" ? (l.x = t.startCropX, l.y = t.startCropY, l.width = d, e ? l.height = l.width / e : l.height = g) : r === "sw" ? (l.x = t.startCropX + d, l.y = t.startCropY, l.width = Math.abs(d), e ? l.height = l.width / e : l.height = g) : r === "nw" && (l.x = t.startCropX + d, l.width = Math.abs(d), e ? (l.height = l.width / e, l.y = t.startCropY - l.height) : (l.height = Math.abs(g), l.y = t.startCropY + g));
    const m = P(
      l,
      e,
      r,
      n.width,
      n.height,
      o,
      w,
      h,
      i
    );
    return e || u.xyOrds.indexOf(c) > -1 ? a = m : u.xOrds.indexOf(c) > -1 ? (a.x = m.x, a.width = m.width) : u.yOrds.indexOf(c) > -1 && (a.y = m.y, a.height = m.height), a.x = v(a.x, 0, n.width - a.width), a.y = v(a.y, 0, n.height - a.height), a;
  }
  renderCropSelection() {
    const {
      ariaLabels: t = u.defaultProps.ariaLabels,
      disabled: e,
      locked: h,
      renderSelectionAddon: i,
      ruleOfThirds: n,
      crop: o
    } = this.props, w = this.getCropStyle();
    if (o)
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          style: w,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": t.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          role: "group"
        },
        !e && !h && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__drag-elements", onFocus: this.onDragFocus }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__drag-bar ord-n", "data-ord": "n" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__drag-bar ord-e", "data-ord": "e" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__drag-bar ord-s", "data-ord": "s" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__drag-bar ord-w", "data-ord": "w" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-nw",
            "data-ord": "nw",
            tabIndex: 0,
            "aria-label": t.nwDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "nw"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-n",
            "data-ord": "n",
            tabIndex: 0,
            "aria-label": t.nDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "n"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-ne",
            "data-ord": "ne",
            tabIndex: 0,
            "aria-label": t.neDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "ne"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-e",
            "data-ord": "e",
            tabIndex: 0,
            "aria-label": t.eDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "e"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-se",
            "data-ord": "se",
            tabIndex: 0,
            "aria-label": t.seDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "se"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-s",
            "data-ord": "s",
            tabIndex: 0,
            "aria-label": t.sDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "s"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-sw",
            "data-ord": "sw",
            tabIndex: 0,
            "aria-label": t.swDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "sw"),
            role: "button"
          }
        ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "ReactCrop__drag-handle ord-w",
            "data-ord": "w",
            tabIndex: 0,
            "aria-label": t.wDragHandle,
            onKeyDown: (a) => this.onHandlerKeyDown(a, "w"),
            role: "button"
          }
        )),
        i && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__selection-addon", onPointerDown: (a) => a.stopPropagation() }, i(this.state)),
        n && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__rule-of-thirds-hz" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ReactCrop__rule-of-thirds-vt" }))
      );
  }
  makePixelCrop(t) {
    const e = { ...M, ...this.props.crop || {} };
    return y(e, t.width, t.height);
  }
  render() {
    const { aspect: t, children: e, circularCrop: h, className: i, crop: n, disabled: o, locked: w, style: a, ruleOfThirds: r } = this.props, { cropIsActive: c, newCropIsBeingDrawn: d } = this.state, g = n ? this.renderCropSelection() : null, l = S(
      "ReactCrop",
      i,
      c && "ReactCrop--active",
      o && "ReactCrop--disabled",
      w && "ReactCrop--locked",
      d && "ReactCrop--new-crop",
      n && t && "ReactCrop--fixed-aspect",
      n && h && "ReactCrop--circular-crop",
      n && r && "ReactCrop--rule-of-thirds",
      !this.dragStarted && n && !n.width && !n.height && "ReactCrop--invisible-crop",
      h && "ReactCrop--no-animate"
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.componentRef, className: l, style: a }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.mediaRef, className: "ReactCrop__child-wrapper", onPointerDown: this.onComponentPointerDown }, e), n ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "ReactCrop__crop-mask", width: "100%", height: "100%" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", { id: "hole" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: "100%", height: "100%", fill: "white" }), h ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ellipse",
      {
        cx: `${n.x + n.width / 2}${n.unit}`,
        cy: `${n.y + n.height / 2}${n.unit}`,
        rx: `${n.width / 2}${n.unit}`,
        ry: `${n.height / 2}${n.unit}`,
        fill: "black"
      }
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "rect",
      {
        x: `${n.x}${n.unit}`,
        y: `${n.y}${n.unit}`,
        width: `${n.width}${n.unit}`,
        height: `${n.height}${n.unit}`,
        fill: "black"
      }
    ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { fill: "black", fillOpacity: 0.5, width: "100%", height: "100%", mask: "url(#hole)" })) : void 0, g);
  }
};
u.xOrds = ["e", "w"], u.yOrds = ["n", "s"], u.xyOrds = ["nw", "ne", "se", "sw"], u.nudgeStep = 1, u.nudgeStepMedium = 10, u.nudgeStepLarge = 100, u.defaultProps = {
  ariaLabels: {
    cropArea: "Use the arrow keys to move the crop selection area",
    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
  }
};
let X = u;



/***/ })

};
;