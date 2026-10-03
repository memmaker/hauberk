(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.Cs(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.b(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.vo(b)
return new s(c,this)}:function(){if(s===null)s=A.vo(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.vo(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
vt(a,b,c,d){return{i:a,p:b,e:c,x:d}},
vq(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.vr==null){A.C4()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.n(A.bf("Return interceptor for "+A.K(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tr
if(o==null)o=$.tr=A.u1(n)
p=q[o]}if(p!=null)return p
p=A.Ce(a)
if(p!=null)return p
if(typeof a=="function")return B.hI
s=Object.getPrototypeOf(a)
if(s==null)return B.cr
if(s===Object.prototype)return B.cr
if(typeof q=="function"){o=$.tr
if(o==null)o=$.tr=A.u1(n)
Object.defineProperty(q,o,{value:B.bC,enumerable:false,writable:true,configurable:true})
return B.bC}return B.bC},
wO(a,b){if(a<0||a>4294967295)throw A.n(A.cw(a,0,4294967295,"length",null))
return J.zA(new Array(a),b)},
wP(a,b){if(a<0)throw A.n(A.aG("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("t<0>"))},
wN(a,b){if(a<0)throw A.n(A.aG("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.i("t<0>"))},
zA(a,b){var s=A.b(a,b.i("t<0>"))
s.$flags=1
return s},
zB(a,b){var s=t.bP
return J.z3(s.a(a),s.a(b))},
wR(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
zC(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.wR(r))break;++b}return b},
zD(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.wR(q))break}return b},
ej(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hl.prototype
return J.kA.prototype}if(typeof a=="string")return J.dp.prototype
if(a==null)return J.hm.prototype
if(typeof a=="boolean")return J.hk.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dq.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.Q)return a
return J.vq(a)},
fH(a){if(typeof a=="string")return J.dp.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dq.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.Q)return a
return J.vq(a)},
fI(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dq.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.Q)return a
return J.vq(a)},
BX(a){if(typeof a=="number")return J.dU.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.dz.prototype
return a},
BY(a){if(typeof a=="number")return J.dU.prototype
if(typeof a=="string")return J.dp.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.dz.prototype
return a},
BZ(a){if(typeof a=="string")return J.dp.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.dz.prototype
return a},
ad(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ej(a).Y(a,b)},
b3(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.C7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fH(a).n(a,b)},
wi(a,b){return J.fI(a).j(a,b)},
z2(a,b){return J.BZ(a).hh(a,b)},
wj(a,b,c){return J.BX(a).P(a,b,c)},
z3(a,b){return J.BY(a).ak(a,b)},
uG(a,b){return J.fI(a).aW(a,b)},
ck(a){return J.ej(a).ga1(a)},
aw(a){return J.fI(a).gL(a)},
dK(a){return J.fH(a).gI(a)},
z4(a){return J.ej(a).gaH(a)},
z5(a,b,c){return J.fI(a).cI(a,b,c)},
jg(a){return J.fI(a).e9(a)},
et(a){return J.ej(a).t(a)},
z6(a,b){return J.fI(a).la(a,b)},
ku:function ku(){},
hk:function hk(){},
hm:function hm(){},
hp:function hp(){},
ds:function ds(){},
la:function la(){},
dz:function dz(){},
dq:function dq(){},
ho:function ho(){},
hq:function hq(){},
t:function t(a){this.$ti=a},
kz:function kz(){},
pH:function pH(a){this.$ti=a},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dU:function dU(){},
hl:function hl(){},
kA:function kA(){},
dp:function dp(){}},A={uR:function uR(){},
wU(a){return new A.dr("Field '"+a+"' has been assigned during initialization.")},
dV(a){return new A.dr("Field '"+a+"' has not been initialized.")},
zG(a){return new A.dr("Local '"+a+"' has not been initialized.")},
wV(a){return new A.dr("Field '"+a+"' has already been initialized.")},
cY(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
rH(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
vn(a,b,c){return a},
vs(a){var s,r
for(s=$.bV.length,r=0;r<s;++r)if(a===$.bV[r])return!0
return!1},
Ad(a,b,c,d){A.hM(b,"start")
if(c!=null){A.hM(c,"end")
if(b>c)A.a2(A.cw(b,0,c,"start",null))}return new A.i3(a,b,c,d.i("i3<0>"))},
q7(a,b,c,d){if(t.gt.b(a))return new A.cM(a,b,c.i("@<0>").ac(d).i("cM<1,2>"))
return new A.cU(a,b,c.i("@<0>").ac(d).i("cU<1,2>"))},
Ae(a,b,c){var s="takeCount"
A.z9(b,s,t.S)
A.hM(b,s)
if(t.gt.b(a))return new A.h5(a,b,c.i("h5<0>"))
return new A.e4(a,b,c.i("e4<0>"))},
ct(){return new A.e2("No element")},
zy(){return new A.e2("Too many elements")},
zx(){return new A.e2("Too few elements")},
dr:function dr(a){this.a=a},
dj:function dj(a){this.a=a},
r1:function r1(){},
M:function M(){},
aJ:function aJ(){},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bs:function bs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
au:function au(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
i4:function i4(a,b,c){this.a=a
this.b=b
this.$ti=c},
i5:function i5(a,b,c){this.a=a
this.b=b
this.$ti=c},
i6:function i6(a,b,c){var _=this
_.a=a
_.b=b
_.c=!1
_.$ti=c},
ib:function ib(a,b){this.a=a
this.$ti=b},
bu:function bu(a,b){this.a=a
this.$ti=b},
aI:function aI(){},
dA:function dA(){},
fn:function fn(){},
cX:function cX(a,b){this.a=a
this.$ti=b},
yi(a){var s=A.yh(a)
if(s!=null)return s
return"minified:"+a},
C7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
K(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.et(a)
return s},
hJ(a){var s,r=$.x1
if(r==null)r=$.x1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
le(a){var s,r,q,p
if(a instanceof A.Q)return A.bU(A.cg(a),null)
s=J.ej(a)
if(s===B.hF||s===B.hJ||t.cx.b(a)){r=B.bF(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bU(A.cg(a),null)},
x3(a){var s,r,q
if(a==null||typeof a=="number"||A.tP(a))return J.et(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.di)return a.t(0)
if(a instanceof A.c_)return a.jw(!0)
s=$.yY()
for(r=0;r<1;++r){q=s[r].pO(a)
if(q!=null)return q}return"Instance of '"+A.le(a)+"'"},
x2(){return Date.now()},
A0(){var s,r
if($.qC!==0)return
$.qC=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qC=1e6
$.uX=new A.qB(r)},
x0(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
A1(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r){q=a[r]
if(!A.fA(q))throw A.n(A.iT(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eG(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.n(A.iT(q))}return A.x0(p)},
x4(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fA(q))throw A.n(A.iT(q))
if(q<0)throw A.n(A.iT(q))
if(q>65535)return A.A1(a)}return A.x0(a)},
b8(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eG(s,10)|55296)>>>0,s&1023|56320)}}throw A.n(A.cw(a,0,1114111,null,null))},
bQ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
A_(a){return a.c?A.bQ(a).getUTCFullYear()+0:A.bQ(a).getFullYear()+0},
zY(a){return a.c?A.bQ(a).getUTCMonth()+1:A.bQ(a).getMonth()+1},
zU(a){return a.c?A.bQ(a).getUTCDate()+0:A.bQ(a).getDate()+0},
zV(a){return a.c?A.bQ(a).getUTCHours()+0:A.bQ(a).getHours()+0},
zX(a){return a.c?A.bQ(a).getUTCMinutes()+0:A.bQ(a).getMinutes()+0},
zZ(a){return a.c?A.bQ(a).getUTCSeconds()+0:A.bQ(a).getSeconds()+0},
zW(a){return a.c?A.bQ(a).getUTCMilliseconds()+0:A.bQ(a).getMilliseconds()+0},
zT(a){var s=a.$thrownJsError
if(s==null)return null
return A.ek(s)},
A2(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aV(a,s)
a.$thrownJsError=s
s.stack=""}},
C2(a){throw A.n(A.iT(a))},
a(a,b){if(a==null)J.dK(a)
throw A.n(A.ni(a,b))},
ni(a,b){var s,r="index"
if(!A.fA(b))return new A.cn(!0,b,r,null)
s=A.u(J.dK(a))
if(b<0||b>=s)return A.p1(b,s,a,null,r)
return A.hL(b,r)},
iT(a){return new A.cn(!0,a,null,null)},
n(a){return A.aV(a,new Error())},
aV(a,b){var s
if(a==null)a=new A.d1()
b.dartException=a
s=A.Cz
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Cz(){return J.et(this.dartException)},
a2(a,b){throw A.aV(a,b==null?new Error():b)},
bw(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a2(A.AU(a,b,c),s)},
AU(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.gs.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.i7("'"+s+"': Cannot "+o+" "+l+k+n)},
p(a){throw A.n(A.aW(a))},
d2(a){var s,r,q,p,o,n
a=A.yd(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rW(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rX(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xj(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
uS(a,b){var s=b==null,r=s?null:b.method
return new A.kB(a,r,s?null:b.receiver)},
dD(a){if(a==null)return new A.qs(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.en(a,a.dartException)
return A.BH(a)},
en(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
BH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eG(r,16)&8191)===10)switch(q){case 438:return A.en(a,A.uS(A.K(s)+" (Error "+q+")",null))
case 445:case 5007:A.K(s)
return A.en(a,new A.hF())}}if(a instanceof TypeError){p=$.yM()
o=$.yN()
n=$.yO()
m=$.yP()
l=$.yS()
k=$.yT()
j=$.yR()
$.yQ()
i=$.yV()
h=$.yU()
g=p.bT(s)
if(g!=null)return A.en(a,A.uS(A.a6(s),g))
else{g=o.bT(s)
if(g!=null){g.method="call"
return A.en(a,A.uS(A.a6(s),g))}else if(n.bT(s)!=null||m.bT(s)!=null||l.bT(s)!=null||k.bT(s)!=null||j.bT(s)!=null||m.bT(s)!=null||i.bT(s)!=null||h.bT(s)!=null){A.a6(s)
return A.en(a,new A.hF())}}return A.en(a,new A.lS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.en(a,new A.cn(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i_()
return a},
ek(a){var s
if(a==null)return new A.iI(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iI(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nj(a){if(a==null)return J.ck(a)
if(typeof a=="object")return A.hJ(a)
return J.ck(a)},
BP(a){if(typeof a=="number")return B.e.ga1(a)
if(a instanceof A.n9)return A.hJ(a)
if(a instanceof A.c_)return a.ga1(a)
return A.nj(a)},
y0(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
B8(a,b,c,d,e,f){t.gY.a(a)
switch(A.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.n(new A.tg("Unsupported number of arguments for wrapped closure"))},
fE(a,b){var s=a.$identity
if(!!s)return s
s=A.BQ(a,b)
a.$identity=s
return s},
BQ(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.B8)},
zi(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lE().constructor.prototype):Object.create(new A.ew(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wu(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ze(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wu(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ze(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.n("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zb)}throw A.n("Error in functionType of tearoff")},
zf(a,b,c,d){var s=A.wt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wu(a,b,c,d){if(c)return A.zh(a,b,d)
return A.zf(b.length,d,a,b)},
zg(a,b,c,d){var s=A.wt,r=A.zc
switch(b?-1:a){case 0:throw A.n(new A.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
zh(a,b,c){var s,r
if($.wr==null)$.wr=A.wq("interceptor")
if($.ws==null)$.ws=A.wq("receiver")
s=b.length
r=A.zg(s,c,a,b)
return r},
vo(a){return A.zi(a)},
zb(a,b){return A.iN(v.typeUniverse,A.cg(a.a),b)},
wt(a){return a.a},
zc(a){return a.b},
wq(a){var s,r,q,p=new A.ew("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.n(A.aG("Field name "+a+" not found.",null))},
u1(a){return v.getIsolateTag(a)},
Ce(a){var s,r,q,p,o,n=A.a6($.y4.$1(a)),m=$.tY[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.u6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.tN($.xW.$2(a,n))
if(q!=null){m=$.tY[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.u6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.uf(s)
$.tY[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.u6[n]=s
return s}if(p==="-"){o=A.uf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yb(a,s)
if(p==="*")throw A.n(A.bf(n))
if(v.leafTags[n]===true){o=A.uf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yb(a,s)},
yb(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.vt(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
uf(a){return J.vt(a,!1,null,!!a.$ibP)},
Ch(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.uf(s)
else return J.vt(s,c,null,null)},
C4(){if(!0===$.vr)return
$.vr=!0
A.C5()},
C5(){var s,r,q,p,o,n,m,l
$.tY=Object.create(null)
$.u6=Object.create(null)
A.C3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yc.$1(o)
if(n!=null){m=A.Ch(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
C3(){var s,r,q,p,o,n,m=B.cO()
m=A.fD(B.cP,A.fD(B.cQ,A.fD(B.bG,A.fD(B.bG,A.fD(B.cR,A.fD(B.cS,A.fD(B.cT(B.bF),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.y4=new A.u3(p)
$.xW=new A.u4(o)
$.yc=new A.u5(n)},
fD(a,b){return a(b)||b},
Ay(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.ad(r,b[s]))return!1}return!0},
BS(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
wS(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.n(A.wD("Illegal RegExp pattern ("+String(o)+")",a))},
Cp(a,b,c){var s=a.indexOf(b,c)
return s>=0},
y_(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yd(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bo(a,b,c){var s
if(typeof b=="string")return A.Cr(a,b,c)
if(b instanceof A.hn){s=b.gj8()
s.lastIndex=0
return a.replace(s,A.y_(c))}return A.Cq(a,b,c)},
Cq(a,b,c){var s,r,q,p
for(s=J.z2(b,a),s=s.gL(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gii())+c
r=p.ghv()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Cr(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.yd(b),"g"),A.y_(c))},
xT(a){return a},
yf(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hh(0,a),s=new A.id(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.K(A.xT(B.i.aK(a,q,m)))+A.K(c.$1(o))
q=m+n[0].length}s=p+A.K(A.xT(B.i.cV(a,q)))
return s.charCodeAt(0)==0?s:s},
S:function S(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function a_(a){this.a=a},
eC:function eC(){},
bl:function bl(a,b,c){this.a=a
this.b=b
this.$ti=c},
iu:function iu(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dT:function dT(a,b){this.a=a
this.$ti=b},
qB:function qB(a){this.a=a},
hU:function hU(){},
rW:function rW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hF:function hF(){},
kB:function kB(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a){this.a=a},
qs:function qs(a){this.a=a},
iI:function iI(a){this.a=a
this.b=null},
di:function di(){},
jF:function jF(){},
jG:function jG(){},
lJ:function lJ(){},
lE:function lE(){},
ew:function ew(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a},
c7:function c7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pI:function pI(a){this.a=a},
pS:function pS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b6:function b6(a,b){this.a=a
this.$ti=b},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cS:function cS(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
br:function br(a,b){this.a=a
this.$ti=b},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hr:function hr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
u3:function u3(a){this.a=a},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
c_:function c_(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
iw:function iw(a){this.b=a},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lF:function lF(a,b){this.a=a
this.c=b},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function n5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Cs(a){throw A.aV(A.wU(a),new Error())},
c(){throw A.aV(A.dV(""),new Error())},
az(){throw A.aV(A.wV(""),new Error())},
eo(){throw A.aV(A.wU(""),new Error())},
e8(){var s=new A.td()
return s.b=s},
td:function td(){this.b=null},
d9(a,b,c){if(a>>>0!==a||a>=c)throw A.n(A.ni(b,a))},
f_:function f_(){},
hB:function hB(){},
kV:function kV(){},
f0:function f0(){},
hz:function hz(){},
hA:function hA(){},
kW:function kW(){},
kX:function kX(){},
kY:function kY(){},
kZ:function kZ(){},
l_:function l_(){},
l0:function l0(){},
l1:function l1(){},
hC:function hC(){},
l2:function l2(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
v2(a,b){var s=b.c
return s==null?b.c=A.iL(a,"eP",[b.x]):s},
xe(a){var s=a.w
if(s===6||s===7)return A.xe(a.x)
return s===11||s===12},
A8(a){return a.as},
Cj(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
av(a){return A.tG(v.typeUniverse,a,!1)},
eg(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eg(a1,s,a3,a4)
if(r===s)return a2
return A.xv(a1,r,!0)
case 7:s=a2.x
r=A.eg(a1,s,a3,a4)
if(r===s)return a2
return A.xu(a1,r,!0)
case 8:q=a2.y
p=A.fC(a1,q,a3,a4)
if(p===q)return a2
return A.iL(a1,a2.x,p)
case 9:o=a2.x
n=A.eg(a1,o,a3,a4)
m=a2.y
l=A.fC(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vd(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fC(a1,j,a3,a4)
if(i===j)return a2
return A.xw(a1,k,i)
case 11:h=a2.x
g=A.eg(a1,h,a3,a4)
f=a2.y
e=A.BE(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xt(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fC(a1,d,a3,a4)
o=a2.x
n=A.eg(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ve(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.n(A.bM("Attempted to substitute unexpected RTI kind "+a0))}},
fC(a,b,c,d){var s,r,q,p,o=b.length,n=A.tH(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eg(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
BF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tH(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eg(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
BE(a,b,c,d){var s,r=b.a,q=A.fC(a,r,c,d),p=b.b,o=A.fC(a,p,c,d),n=b.c,m=A.BF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mw()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
xY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.C0(s)
return a.$S()}return null},
C6(a,b){var s
if(A.xe(b))if(a instanceof A.di){s=A.xY(a)
if(s!=null)return s}return A.cg(a)},
cg(a){if(a instanceof A.Q)return A.z(a)
if(Array.isArray(a))return A.O(a)
return A.vi(J.ej(a))},
O(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.vi(a)},
vi(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.B3(a,s)},
B3(a,b){var s=a instanceof A.di?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.AH(v.typeUniverse,s.name)
b.$ccache=r
return r},
C0(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
C_(a){return A.eh(A.z(a))},
vl(a){var s
if(a instanceof A.c_)return A.BU(a.$r,a.ew())
s=a instanceof A.di?A.xY(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.z4(a).a
if(Array.isArray(a))return A.O(a)
return A.cg(a)},
eh(a){var s=a.r
return s==null?a.r=new A.n9(a):s},
BU(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.a(q,0)
s=A.iN(v.typeUniverse,A.vl(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.xy(v.typeUniverse,s,A.vl(q[r]))}return A.iN(v.typeUniverse,s,a)},
ch(a){return A.eh(A.tG(v.typeUniverse,a,!1))},
B2(a){var s=this
s.b=A.BC(s)
return s.b(a)},
BC(a){var s,r,q,p,o
if(a===t.K)return A.Be
if(A.el(a))return A.Bi
s=a.w
if(s===6)return A.B0
if(s===1)return A.xI
if(s===7)return A.B9
r=A.BB(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.el)){a.f="$i"+q
if(q==="E")return A.Bc
if(a===t.bp)return A.Bb
return A.Bh}}else if(s===10){p=A.BS(a.x,a.y)
o=p==null?A.xI:p
return o==null?A.ef(o):o}return A.AZ},
BB(a){if(a.w===8){if(a===t.S)return A.fA
if(a===t.i||a===t.cZ)return A.Bd
if(a===t.N)return A.Bg
if(a===t.y)return A.tP}return null},
B1(a){var s=this,r=A.AY
if(A.el(s))r=A.AL
else if(s===t.K)r=A.ef
else if(A.fJ(s)){r=A.B_
if(s===t.aV)r=A.xB
else if(s===t.jv)r=A.tN
else if(s===t.fU)r=A.AJ
else if(s===t.ae)r=A.xC
else if(s===t.dz)r=A.AK
else if(s===t.mU)r=A.c3}else if(s===t.S)r=A.u
else if(s===t.N)r=A.a6
else if(s===t.y)r=A.dC
else if(s===t.cZ)r=A.ee
else if(s===t.i)r=A.bI
else if(s===t.bp)r=A.P
s.a=r
return s.a(a)},
AZ(a){var s=this
if(a==null)return A.fJ(s)
return A.C8(v.typeUniverse,A.C6(a,s),s)},
B0(a){if(a==null)return!0
return this.x.b(a)},
Bh(a){var s,r=this
if(a==null)return A.fJ(r)
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.ej(a)[s]},
Bc(a){var s,r=this
if(a==null)return A.fJ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.ej(a)[s]},
Bb(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.Q)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
xH(a){if(typeof a=="object"){if(a instanceof A.Q)return t.bp.b(a)
return!0}if(typeof a=="function")return!0
return!1},
AY(a){var s=this
if(a==null){if(A.fJ(s))return a}else if(s.b(a))return a
throw A.aV(A.xD(a,s),new Error())},
B_(a){var s=this
if(a==null||s.b(a))return a
throw A.aV(A.xD(a,s),new Error())},
xD(a,b){return new A.iJ("TypeError: "+A.xm(a,A.bU(b,null)))},
xm(a,b){return A.jZ(a)+": type '"+A.bU(A.vl(a),null)+"' is not a subtype of type '"+b+"'"},
c1(a,b){return new A.iJ("TypeError: "+A.xm(a,b))},
B9(a){var s=this
return s.x.b(a)||A.v2(v.typeUniverse,s).b(a)},
Be(a){return a!=null},
ef(a){if(a!=null)return a
throw A.aV(A.c1(a,"Object"),new Error())},
Bi(a){return!0},
AL(a){return a},
xI(a){return!1},
tP(a){return!0===a||!1===a},
dC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aV(A.c1(a,"bool"),new Error())},
AJ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aV(A.c1(a,"bool?"),new Error())},
bI(a){if(typeof a=="number")return a
throw A.aV(A.c1(a,"double"),new Error())},
AK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aV(A.c1(a,"double?"),new Error())},
fA(a){return typeof a=="number"&&Math.floor(a)===a},
u(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aV(A.c1(a,"int"),new Error())},
xB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aV(A.c1(a,"int?"),new Error())},
Bd(a){return typeof a=="number"},
ee(a){if(typeof a=="number")return a
throw A.aV(A.c1(a,"num"),new Error())},
xC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aV(A.c1(a,"num?"),new Error())},
Bg(a){return typeof a=="string"},
a6(a){if(typeof a=="string")return a
throw A.aV(A.c1(a,"String"),new Error())},
tN(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aV(A.c1(a,"String?"),new Error())},
P(a){if(A.xH(a))return a
throw A.aV(A.c1(a,"JSObject"),new Error())},
c3(a){if(a==null)return a
if(A.xH(a))return a
throw A.aV(A.c1(a,"JSObject?"),new Error())},
xR(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bU(a[q],b)
return s},
Bv(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.xR(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bU(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
xE(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.b([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bU(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bU(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bU(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bU(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bU(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bU(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bU(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bU(a.x,b)+">"
if(l===8){p=A.BG(a.x)
o=a.y
return o.length>0?p+("<"+A.xR(o,b)+">"):p}if(l===10)return A.Bv(a,b)
if(l===11)return A.xE(a,b,null)
if(l===12)return A.xE(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
BG(a){var s=A.yh(a)
if(s!=null)return s
return"minified:"+a},
AI(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
AH(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tG(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iM(a,5,"#")
q=A.tH(s)
for(p=0;p<s;++p)q[p]=r
o=A.iL(a,b,q)
n[b]=o
return o}else return m},
AG(a,b){return A.xz(a.tR,b)},
AF(a,b){return A.xz(a.eT,b)},
tG(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xx(a,null,b,!1)
r.set(b,s)
return s},
iN(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xx(a,b,c,!0)
q.set(c,r)
return r},
xy(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vd(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
xx(a,b,c,d){return A.Aw(A.Aq(a,b,c,d))},
dB(a,b){b.a=A.B1
b.b=A.B2
return b},
iM(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cb(null,null)
s.w=b
s.as=c
r=A.dB(a,s)
a.eC.set(c,r)
return r},
xv(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.AD(a,b,r,c)
a.eC.set(r,s)
return s},
AD(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.el(b))if(!(b===t.iV||b===t.bE))if(s!==6)r=s===7&&A.fJ(b.x)
if(r)return b
else if(s===1)return t.iV}q=new A.cb(null,null)
q.w=6
q.x=b
q.as=c
return A.dB(a,q)},
xu(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.AB(a,b,r,c)
a.eC.set(r,s)
return s},
AB(a,b,c,d){var s,r
if(d){s=b.w
if(A.el(b)||b===t.K)return b
else if(s===1)return A.iL(a,"eP",[b])
else if(b===t.iV||b===t.bE)return t.gK}r=new A.cb(null,null)
r.w=7
r.x=b
r.as=c
return A.dB(a,r)},
AE(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cb(null,null)
s.w=13
s.x=b
s.as=q
r=A.dB(a,s)
a.eC.set(q,r)
return r},
iK(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
AA(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iL(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iK(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cb(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dB(a,r)
a.eC.set(p,q)
return q},
vd(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iK(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cb(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dB(a,o)
a.eC.set(q,n)
return n},
xw(a,b,c){var s,r,q="+"+(b+"("+A.iK(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cb(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dB(a,s)
a.eC.set(q,r)
return r},
xt(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iK(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iK(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.AA(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cb(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dB(a,p)
a.eC.set(r,o)
return o},
ve(a,b,c,d){var s,r=b.as+("<"+A.iK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.AC(a,b,c,r,d)
a.eC.set(r,s)
return s},
AC(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tH(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eg(a,b,r,0)
m=A.fC(a,c,r,0)
return A.ve(a,n,m,c!==m)}}l=new A.cb(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dB(a,l)},
Aq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Aw(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.As(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xq(a,r,l,k,!1)
else if(q===46)r=A.xq(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ed(a.u,a.e,k.pop()))
break
case 94:k.push(A.AE(a.u,k.pop()))
break
case 35:k.push(A.iM(a.u,5,"#"))
break
case 64:k.push(A.iM(a.u,2,"@"))
break
case 126:k.push(A.iM(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Au(a,k)
break
case 38:A.At(a,k)
break
case 63:p=a.u
k.push(A.xv(p,A.ed(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xu(p,A.ed(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Ar(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xr(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ax(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.ed(a.u,a.e,m)},
As(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xq(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.AI(s,o.x)[p]
if(n==null)A.a2('No "'+p+'" in "'+A.A8(o)+'"')
d.push(A.iN(s,o,n))}else d.push(p)
return m},
Au(a,b){var s,r=a.u,q=A.xp(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iL(r,p,q))
else{s=A.ed(r,a.e,p)
switch(s.w){case 11:b.push(A.ve(r,s,q,a.n))
break
default:b.push(A.vd(r,s,q))
break}}},
Ar(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xp(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ed(p,a.e,o)
q=new A.mw()
q.a=s
q.b=n
q.c=m
b.push(A.xt(p,r,q))
return
case-4:b.push(A.xw(p,b.pop(),s))
return
default:throw A.n(A.bM("Unexpected state under `()`: "+A.K(o)))}},
At(a,b){var s=b.pop()
if(0===s){b.push(A.iM(a.u,1,"0&"))
return}if(1===s){b.push(A.iM(a.u,4,"1&"))
return}throw A.n(A.bM("Unexpected extended operation "+A.K(s)))},
xp(a,b){var s=b.splice(a.p)
A.xr(a.u,a.e,s)
a.p=b.pop()
return s},
ed(a,b,c){if(typeof c=="string")return A.iL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Av(a,b,c)}else return c},
xr(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ed(a,b,c[s])},
Ax(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ed(a,b,c[s])},
Av(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.n(A.bM("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.n(A.bM("Bad index "+c+" for "+b.t(0)))},
C8(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b_(a,b,null,c,null)
r.set(c,s)}return s},
b_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.el(d))return!0
s=b.w
if(s===4)return!0
if(A.el(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b_(a,c[b.x],c,d,e))return!0
q=d.w
p=t.iV
if(b===p||b===t.bE){if(q===7)return A.b_(a,b,c,d.x,e)
return d===p||d===t.bE||q===6}if(d===t.K){if(s===7)return A.b_(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b_(a,b.x,c,d,e))return!1
return A.b_(a,A.v2(a,b),c,d,e)}if(s===6)return A.b_(a,p,c,d,e)&&A.b_(a,b.x,c,d,e)
if(q===7){if(A.b_(a,b,c,d.x,e))return!0
return A.b_(a,b,c,A.v2(a,d),e)}if(q===6)return A.b_(a,b,c,p,e)||A.b_(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.dY)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.b_(a,j,c,i,e)||!A.b_(a,i,e,j,c))return!1}return A.xG(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.xG(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ba(a,b,c,d,e)}if(o&&q===10)return A.Bf(a,b,c,d,e)
return!1},
xG(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b_(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.b_(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b_(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b_(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.b_(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Ba(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iN(a,b,r[o])
return A.xA(a,p,null,c,d.y,e)}return A.xA(a,b.y,null,c,d.y,e)},
xA(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b_(a,b[s],d,e[s],f))return!1
return!0},
Bf(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b_(a,r[s],c,q[s],e))return!1
return!0},
fJ(a){var s=a.w,r=!0
if(!(a===t.iV||a===t.bE))if(!A.el(a))if(s!==6)r=s===7&&A.fJ(a.x)
return r},
el(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
xz(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tH(a){return a>0?new Array(a):v.typeUniverse.sEA},
cb:function cb(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mw:function mw(){this.c=this.b=this.a=null},
n9:function n9(a){this.a=a},
mn:function mn(){},
iJ:function iJ(a){this.a=a},
Ak(){var s,r,q
if(self.scheduleImmediate!=null)return A.BK()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fE(new A.t7(s),1)).observe(r,{childList:true})
return new A.t6(s,r,q)}else if(self.setImmediate!=null)return A.BL()
return A.BM()},
Al(a){self.scheduleImmediate(A.fE(new A.t8(t.O.a(a)),0))},
Am(a){self.setImmediate(A.fE(new A.t9(t.O.a(a)),0))},
An(a){t.O.a(a)
A.Az(0,a)},
Az(a,b){var s=new A.tE()
s.lL(a,b)
return s},
xs(a,b,c){return 0},
uI(a){var s
if(t.fz.b(a)){s=a.gdn()
if(s!=null)return s}return B.aK},
B5(a,b){if($.aU===B.a8)return null
return null},
B6(a,b){if($.aU!==B.a8)A.B5(a,b)
if(t.fz.b(a)){b=a.gdn()
if(b==null){A.A2(a,B.aK)
b=B.aK}}else b=B.aK
return new A.cp(a,b)},
v7(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.A9()
b.iu(new A.cp(new A.cn(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.jf(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.dD()
b.ep(o.a)
A.ea(b,p)
return}b.a^=2
A.ng(null,null,b.b,t.O.a(new A.tk(o,b)))},
ea(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.tT(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.ea(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.tT(j.a,j.b)
return}g=$.aU
if(g!==h)$.aU=h
else g=null
c=c.c
if((c&15)===8)new A.to(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tn(q,j).$0()}else if((c&2)!==0)new A.tm(d,q).$0()
if(g!=null)$.aU=g
c=q.c
if(c instanceof A.bG){p=q.a.$ti
p=p.i("eP<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eE(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.v7(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.eE(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
Bw(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.n(A.uH(a,"onError",u.c))},
Bl(){var s,r
for(s=$.fB;s!=null;s=$.fB){$.iR=null
r=s.b
$.fB=r
if(r==null)$.iQ=null
s.a.$0()}},
BD(){$.vj=!0
try{A.Bl()}finally{$.iR=null
$.vj=!1
if($.fB!=null)$.wd().$1(A.xX())}},
xS(a){var s=new A.m5(a),r=$.iQ
if(r==null){$.fB=$.iQ=s
if(!$.vj)$.wd().$1(A.xX())}else $.iQ=r.b=s},
BA(a){var s,r,q,p=$.fB
if(p==null){A.xS(a)
$.iR=$.iQ
return}s=new A.m5(a)
r=$.iR
if(r==null){s.b=p
$.fB=$.iR=s}else{q=r.b
s.b=q
$.iR=r.b=s
if(q==null)$.iQ=s}},
tT(a,b){A.BA(new A.tU(a,b))},
xP(a,b,c,d,e){var s,r=$.aU
if(r===c)return d.$0()
$.aU=c
s=r
try{r=d.$0()
return r}finally{$.aU=s}},
xQ(a,b,c,d,e,f,g){var s,r=$.aU
if(r===c)return d.$1(e)
$.aU=c
s=r
try{r=d.$1(e)
return r}finally{$.aU=s}},
Bx(a,b,c,d,e,f,g,h,i){var s,r=$.aU
if(r===c)return d.$2(e,f)
$.aU=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aU=s}},
ng(a,b,c,d){t.O.a(d)
if(B.a8!==c){d=c.oy(d)
d=d}A.xS(d)},
t7:function t7(a){this.a=a},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
tE:function tE(){},
tF:function tF(a,b){this.a=a
this.b=b},
al:function al(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
V:function V(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b){this.a=a
this.b=b},
mh:function mh(){},
ig:function ig(a,b){this.a=a
this.$ti=b},
io:function io(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bG:function bG(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
th:function th(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
ti:function ti(a,b){this.a=a
this.b=b},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a){this.a=a},
tn:function tn(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
m5:function m5(a){this.a=a
this.b=null},
i0:function i0(){},
rE:function rE(a,b){this.a=a
this.b=b},
rF:function rF(a,b){this.a=a
this.b=b},
iO:function iO(){},
mX:function mX(){},
tA:function tA(a,b){this.a=a
this.b=b},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
tU:function tU(a,b){this.a=a
this.b=b},
xn(a,b){var s=a[b]
return s===a?null:s},
v9(a,b,c){if(c==null)a[b]=a
else a[b]=c},
v8(){var s=Object.create(null)
A.v9(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
zH(a,b){return new A.c7(a.i("@<0>").ac(b).i("c7<1,2>"))},
C(a,b,c){return b.i("@<0>").ac(c).i("uT<1,2>").a(A.y0(a,new A.c7(b.i("@<0>").ac(c).i("c7<1,2>"))))},
D(a,b){return new A.c7(a.i("@<0>").ac(b).i("c7<1,2>"))},
wW(a){return new A.d5(a.i("d5<0>"))},
bc(a){return new A.d5(a.i("d5<0>"))},
vb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
va(a,b,c){var s=new A.d6(a,b,c.i("d6<0>"))
s.c=a.e
return s},
cT(a,b,c){var s=A.zH(b,c)
s.T(0,a)
return s},
zI(a,b){var s,r,q=A.wW(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q.j(0,b.a(a[r]))
return q},
wX(a,b){var s=A.wW(b)
s.T(0,a)
return s},
uU(a){var s,r
if(A.vs(a))return"{...}"
s=new A.e3("")
try{r={}
B.a.j($.bV,a)
s.a+="{"
r.a=!0
a.ae(0,new A.q5(r,s))
s.a+="}"}finally{if(0>=$.bV.length)return A.a($.bV,-1)
$.bV.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
hu(a){return new A.ht(A.ao(A.zJ(null),null,!1,a.i("0?")),a.i("ht<0>"))},
zJ(a){return 8},
iq:function iq(){},
fr:function fr(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ir:function ir(a,b){this.a=a
this.$ti=b},
is:function is(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d5:function d5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mL:function mL(a){this.a=a
this.c=this.b=null},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
a1:function a1(){},
ap:function ap(){},
q4:function q4(a){this.a=a},
q5:function q5(a,b){this.a=a
this.b=b},
ht:function ht(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ec:function ec(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
fi:function fi(){},
iF:function iF(){},
Bu(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.dD(r)
q=A.wD(String(s),null)
throw A.n(q)}q=A.tO(p)
return q},
tO(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mG(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tO(a[s])
return a},
wT(a,b,c){return new A.hs(a,b)},
AT(a){return a.pY()},
Ao(a,b){return new A.ts(a,[],A.BR())},
Ap(a,b,c){var s,r=new A.e3(""),q=A.Ao(r,b)
q.fn(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
mG:function mG(a,b){this.a=a
this.b=b
this.c=null},
mH:function mH(a){this.a=a},
jJ:function jJ(){},
jL:function jL(){},
hs:function hs(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
kC:function kC(){},
pK:function pK(a){this.b=a},
pJ:function pJ(a){this.a=a},
tt:function tt(){},
tu:function tu(a,b){this.a=a
this.b=b},
ts:function ts(a,b,c){this.c=a
this.a=b
this.b=c},
wB(a){return new A.k0(new WeakMap(),a.i("k0<0>"))},
wC(a){var s=!0
s=typeof a=="string"
if(s)A.zr(a)},
zr(a){throw A.n(A.uH(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
zo(a,b){a=A.aV(a,new Error())
if(a==null)a=A.ef(a)
a.stack=b.t(0)
throw a},
ao(a,b,c,d){var s,r=c?J.wP(a,d):J.wO(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
zK(a,b,c){var s,r,q=A.b([],c.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a8(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.i("t<0>"))
s=A.b([],b.i("t<0>"))
for(r=J.aw(a);r.q();)B.a.j(s,r.gH())
return s},
rG(a){var s,r,q
A.hM(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.x4(r<r?s.slice(0,r):s)}q=A.a8(a,t.S)
return A.x4(q)},
lo(a){return new A.hn(a,A.wS(a,!1,!0,!1,!1,""))},
v3(a,b,c){var s=J.aw(b)
if(!s.q())return a
if(c.length===0){do a+=A.K(s.gH())
while(s.q())}else{a+=A.K(s.gH())
while(s.q())a=a+c+A.K(s.gH())}return a},
A9(){return A.ek(new Error())},
zk(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wv(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jO(a){if(a>=10)return""+a
return"0"+a},
jZ(a){if(typeof a=="number"||A.tP(a)||a==null)return J.et(a)
if(typeof a=="string")return JSON.stringify(a)
return A.x3(a)},
zp(a,b){A.vn(a,"error",t.K)
A.vn(b,"stackTrace",t.gl)
A.zo(a,b)},
bM(a){return new A.jm(a)},
aG(a,b){return new A.cn(!1,null,b,a)},
uH(a,b,c){return new A.cn(!0,a,b,c)},
z9(a,b,c){return a},
x5(a){var s=null
return new A.fa(s,s,!1,s,s,a)},
hL(a,b){return new A.fa(null,null,!0,a,b,"Value not in range")},
cw(a,b,c,d,e){return new A.fa(b,c,!0,a,d,"Invalid value")},
uZ(a,b,c){if(0>a||a>c)throw A.n(A.cw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.n(A.cw(b,a,c,"end",null))
return b}return c},
hM(a,b){if(a<0)throw A.n(A.cw(a,0,null,b,null))
return a},
p1(a,b,c,d,e){return new A.ks(b,!0,a,e,"Index out of range")},
cz(a){return new A.i7(a)},
bf(a){return new A.lR(a)},
cd(a){return new A.e2(a)},
aW(a){return new A.jK(a)},
wD(a,b){return new A.oK(a,b)},
zz(a,b,c){var s,r
if(A.vs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.j($.bV,a)
try{A.Bj(a,s)}finally{if(0>=$.bV.length)return A.a($.bV,-1)
$.bV.pop()}r=A.v3(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pF(a,b,c){var s,r
if(A.vs(a))return b+"..."+c
s=new A.e3(b)
B.a.j($.bV,a)
try{r=s
r.a=A.v3(r.a,a,", ")}finally{if(0>=$.bV.length)return A.a($.bV,-1)
$.bV.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Bj(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.K(l.gH())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gH();++j
if(!l.q()){if(j<=4){B.a.j(b,A.K(p))
return}r=A.K(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH();++j
for(;l.q();p=o,o=n){n=l.gH();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.K(p)
r=A.K(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
qu(a,b,c,d){var s
if(B.an===c){s=B.c.ga1(a)
b=J.ck(b)
return A.rH(A.cY(A.cY($.nt(),s),b))}if(B.an===d){s=B.c.ga1(a)
b=J.ck(b)
c=J.ck(c)
return A.rH(A.cY(A.cY(A.cY($.nt(),s),b),c))}s=B.c.ga1(a)
b=J.ck(b)
c=J.ck(c)
d=J.ck(d)
d=A.rH(A.cY(A.cY(A.cY(A.cY($.nt(),s),b),c),d))
return d},
zS(a){var s,r,q=$.nt()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.p)(a),++r)q=A.cY(q,J.ck(a[r]))
return A.rH(q)},
vu(a){A.uh(a)},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
te:function te(){},
as:function as(){},
jm:function jm(a){this.a=a},
d1:function d1(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fa:function fa(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ks:function ks(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i7:function i7(a){this.a=a},
lR:function lR(a){this.a=a},
e2:function e2(a){this.a=a},
jK:function jK(a){this.a=a},
l6:function l6(){},
i_:function i_(){},
tg:function tg(a){this.a=a},
oK:function oK(a,b){this.a=a
this.b=b},
k:function k(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
aO:function aO(){},
Q:function Q(){},
n6:function n6(){},
rr:function rr(){this.b=this.a=0},
e3:function e3(a){this.a=a},
k0:function k0(a,b){this.a=a
this.$ti=b},
qr:function qr(a){this.a=a},
vg(a){var s
if(typeof a=="function")throw A.n(A.aG("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.AM,a)
s[$.ut()]=a
return s},
vh(a){var s
if(typeof a=="function")throw A.n(A.aG("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.AN,a)
s[$.ut()]=a
return s},
AM(a){return t.gY.a(a).$0()},
AN(a,b,c){t.gY.a(a)
if(A.u(c)>=1)return a.$1(b)
return a.$0()},
xN(a){return a==null||A.tP(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.ha.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.jL.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
y8(a){if(A.xN(a))return a
return new A.u8(new A.fr(t.mp)).$1(a)},
Ck(a,b){var s=new A.bG($.aU,b.i("bG<0>")),r=new A.ig(s,b.i("ig<0>"))
a.then(A.fE(new A.ui(r,b),1),A.fE(new A.uj(r),1))
return s},
xM(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
xZ(a){if(A.xM(a))return a
return new A.tX(new A.fr(t.mp)).$1(a)},
u8:function u8(a){this.a=a},
ui:function ui(a,b){this.a=a
this.b=b},
uj:function uj(a){this.a=a},
tX:function tX(a){this.a=a},
A4(a){var s
if(a==null)s=B.cW
else{s=new A.mV()
s.lK(a)}return s},
mF:function mF(){},
mV:function mV(){this.b=this.a=0},
kf:function kf(){},
oO:function oO(){},
oP:function oP(a,b){this.a=a
this.b=b},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(){},
mo:function mo(){},
k6:function k6(){},
k9:function k9(){var _=this
_.a=null
_.d=_.c=_.b=$},
mr:function mr(){},
t1(a){return new A.lY(a)},
kO:function kO(){},
lY:function lY(a){this.a=a},
t2:function t2(a){this.a=a},
jr:function jr(a){this.a=a},
m8:function m8(){},
jA:function jA(a){this.a=a},
me:function me(){},
jM:function jM(a){this.a=a},
mi:function mi(){},
jW:function jW(a){this.a=a},
mk:function mk(){},
k3:function k3(a){this.a=a},
mp:function mp(){},
k4:function k4(a){this.a=a},
mq:function mq(){},
kc:function kc(a){this.a=a},
mv:function mv(){},
ki:function ki(a){this.a=a},
mz:function mz(){},
kj:function kj(a){this.a=a},
mA:function mA(){},
kp:function kp(a){this.a=a},
mB:function mB(){},
kr:function kr(a){this.a=a},
mC:function mC(){},
kG:function kG(a){this.a=a},
mI:function mI(){},
kI:function kI(a){this.a=a},
mJ:function mJ(){},
kP:function kP(a){this.a=a},
mM:function mM(){},
li:function li(a){this.a=a},
mU:function mU(){},
lw:function lw(a){this.a=a},
mY:function mY(){},
ly:function ly(a){this.a=a},
n1:function n1(){},
lD:function lD(){},
jk:function jk(a,b){this.a=a
this.b=b},
nD:function nD(){},
lM:function lM(a){this.a=a},
n8:function n8(){},
m0:function m0(a){this.a=a},
nc:function nc(){},
m1:function m1(a){this.a=a},
nd:function nd(){},
jp:function jp(a){this.a=a},
jq:function jq(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
m6:function m6(){},
m7:function m7(){},
jH:function jH(a){this.a=a},
jI:function jI(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
mg:function mg(){},
lB:function lB(a){this.a=a},
lC:function lC(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
n2:function n2(){},
n3:function n3(){},
lZ:function lZ(a){this.a=a},
nb:function nb(){},
js:function js(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=0
_.Q=_.z=!0
_.a=null
_.d=_.c=_.b=$},
nI:function nI(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function m9(){},
uJ(a,b,c,d){return new A.jw(b,c,d,a)},
jw:function jw(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
wH(a,b){return new A.eQ(a,b)},
h0:function h0(){},
eQ:function eQ(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
eN:function eN(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
f6:function f6(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ev:function ev(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eE:function eE(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
fc:function fc(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
mt:function mt(){},
eG:function eG(a,b){this.a=a
this.b=b},
eF:function eF(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
o2:function o2(a,b){this.a=a
this.b=b},
o3:function o3(){},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
o5:function o5(){},
o6:function o6(a){this.a=a},
eI:function eI(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
h6:function h6(){},
ey:function ey(){var _=this
_.a=null
_.d=_.c=_.b=$},
ez:function ez(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
jz:function jz(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eO:function eO(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f7:function f7(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lb:function lb(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
fo:function fo(){var _=this
_.a=null
_.d=_.c=_.b=$},
t3:function t3(a){this.a=a},
eX:function eX(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mb:function mb(){},
mc:function mc(){},
md:function md(){},
mu:function mu(){},
mP:function mP(){},
mQ:function mQ(){},
oG(a,b,c,d){return new A.k8(a,b,c,d==null?1:d)},
k8:function k8(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=$
_.w=null
_.x=c
_.y=d
_.z=0
_.a=null
_.d=_.c=_.b=$},
oH:function oH(a){this.a=a},
eM:function eM(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eL:function eL(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
ms:function ms(){},
wI(a,b){return new A.eR(a,b)},
eR:function eR(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kn:function kn(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kq:function kq(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
eS:function eS(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eY:function eY(a,b){var _=this
_.e=a
_.f=b
_.r=0
_.w=$
_.a=null
_.d=_.c=_.b=$},
kN:function kN(a,b,c,d,e){var _=this
_.r=a
_.a=b
_.b=c
_.d=_.c=$
_.e=d
_.f=e},
dY:function dY(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
f4:function f4(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lc:function lc(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jj:function jj(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
v_(a,b,c,d){var s=new A.ll(a,b,c,A.bc(t.u),A.b([],t.gk))
s.im(b,c,d)
return s},
x7(a){return new A.ff(a)},
lm:function lm(){},
qD:function qD(a){this.a=a},
ll:function ll(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
ff:function ff(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
fe:function fe(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mW:function mW(){},
lz:function lz(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
xi(a){return new A.fl(a)},
fl:function fl(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
mO:function mO(){},
f1:function f1(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f2:function f2(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jV:function jV(){},
kb:function kb(){},
zm(a,b){var s=$.uu()
if(!s.a.ah(b))return null
return s.l5(a,b)},
h2:function h2(){},
W(a,b,c,d){var s=A.b([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.T(s,d)
return new A.fZ(a,b,s)},
kd:function kd(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b,c){var s,r,q,p,o,n,m,l,k
$.xF=a
if(b==null)b=B.ke
s=t.s
r=t.gQ
q=A.a8(new A.au(A.b(c.split("\n"),s),t.gL.a(new A.u0()),r),r.i("aJ.E"))
A.iS(q)
if(b===B.ac||b===B.av){p=A.b(q.slice(0),A.O(q))
for(r=t.gS.i("cX<a1.E>"),o=0;o<q.length;++o)B.a.h(p,o,A.tQ(A.rG(new A.cX(new A.dj(q[o]),r)),A.BV()))
A.iS(p)}if(b===B.kf||b===B.av){p=A.b(q.slice(0),A.O(q))
for(o=0;r=q.length,o<r;++o)B.a.h(p,r-o-1,A.tQ(q[o],A.BW()))
A.iS(p)}if(b===B.av||b===B.kg||b===B.q){p=A.b(q.slice(0),A.O(q))
for(r=t.gS.i("cX<a1.E>"),o=0;n=q.length,o<n;++o)B.a.h(p,n-o-1,A.tQ(A.rG(new A.cX(new A.dj(q[o]),r)),A.y1()))
A.iS(p)}if(b===B.q){m=A.b([],s)
l=0
for(;;){if(0>=q.length)return A.a(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.a(n,l)
n=r+A.Bz(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.iS(m)
p=A.b(m.slice(0),s)
for(s=t.gS.i("cX<a1.E>"),o=0;r=m.length,o<r;++o)B.a.h(p,r-o-1,A.tQ(A.rG(new A.cX(new A.dj(m[o]),s)),A.y1()))
A.iS(p)}},
tQ(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.K(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
Bm(a){return A.xK(A.xL(a))},
xK(a){var s,r,q,p
A.a6(a)
for(s=0;s<3;++s){r=$.Bn[s]
q=B.i.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.a(r,p)
return r[p]}}return a},
xL(a){var s,r,q,p
A.a6(a)
for(s=0;s<3;++s){r=$.Bo[s]
q=B.i.c4(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.a(r,p)
return r[p]}}return a},
Bz(a){var s,r,q,p
for(s=0;s<2;++s){r=$.By[s]
q=B.i.c4(r,a)
if(q!==-1){p=B.c.ab(q+1,4)
if(!(p<r.length))return A.a(r,p)
return r[p]}}return a},
iS(a){var s,r,q,p,o,n=B.a.gaz(a).length,m=a.length,l=A.ao(n*m,$.yk(),!1,t.oC),k=new A.ab(l,new A.a3(new A.d(0,0),new A.d(n,m)),t.eh)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaz(a).length;++r){if(!(s<a.length))return A.a(a,s)
q=a[s]
if(!(r<q.length))return A.a(q,r)
p=q[r]
q=$.cf
if(q!=null&&q.ah(p)){q=$.cf.n(0,p)
q.toString
o=q}else{q=$.yW()
if(q.ah(p)){q=q.n(0,p)
q.toString
o=q}else{q=$.yX().n(0,p)
q.toString
o=q}}k.l(r,s)
B.a.h(l,m+r,o)}n=$.uu()
m=$.cD
if(m==null)m=$.xF
if(m==null)m=1
l=$.cC.u()
n.ce(n.$ti.c.a(new A.kd(k)),null,null,null,m,m,l)},
dw:function dw(a,b){this.a=a
this.b=b},
u0:function u0(){},
oe:function oe(){},
oi:function oi(){},
oj:function oj(){},
of:function of(){},
og:function og(){},
om:function om(){},
on:function on(){},
oh:function oh(){},
ok:function ok(){},
ol:function ol(){},
a9(a,b,c){A.i()
$.aZ.b=new A.nN(a,c,A.D(t.h,t.S))
$.aZ.u().b=b
return $.aZ.u()},
J(a,b){A.b0()
return $.iP=A.wk(a,B.i.dT(a," _")?$.dE():$.dF(),b)},
j(a,b,c){return new A.pc(a,b,c,A.D(t.h,t.S))},
wk(a,b,c){var s=t.Q
return new A.cm(a,b,c,A.D(t.h,s),A.D(t.Z,s),A.D(t.M,s))},
fG(a,b){return new A.u_(a,b)},
B4(a){return A.u(a)},
b1(){return new A.up(1,0.1)},
i(){var s,r,q,p,o,n,m,l=$.h
if(l==null)return
s=l.en()
r=$.bp()
q=s.a.a6(1)
p=l.dy
p===$&&A.c()
o=l.fr
o===$&&A.c()
n=l.x
if(n==null)n=$.aZ.u().x
if(n==null)n=1
m=$.aZ.u().ay
m===$&&A.c()
r.ce(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
b0(){var s,r,q,p,o,n,m=$.iP
if(m==null)return
s=m.en()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.bi
r.ce(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.iP=null},
ta:function ta(){},
nN:function nN(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pc:function pc(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pi:function pi(a){this.a=a},
pf:function pf(a,b){this.a=a
this.b=b},
pn:function pn(a,b){this.a=a
this.b=b},
po:function po(a){this.a=a},
pm:function pm(a,b){this.a=a
this.b=b},
pj:function pj(a,b){this.a=a
this.b=b},
pp:function pp(a){this.a=a},
pk:function pk(a,b){this.a=a
this.b=b},
pd:function pd(a){this.a=a},
pe:function pe(a){this.a=a},
pg:function pg(a,b){this.a=a
this.b=b},
ph:function ph(a,b){this.a=a
this.b=b},
pl:function pl(a){this.a=a},
cm:function cm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
nx:function nx(a){this.a=a},
ny:function ny(a){this.a=a},
nw:function nw(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(a){this.a=a},
nA:function nA(a){this.a=a},
nu:function nu(a){this.a=a},
nz:function nz(){},
u_:function u_(a,b){this.a=a
this.b=b},
up:function up(a,b){this.a=a
this.b=b},
aa(a,b,c){var s=$.bp().c8(a)
if(s!=null)return new A.mE(s,b,c==null?B.cc:c)
return new A.n7(a,b,c==null?B.cc:c)},
vw(a,b){return new A.bH(a,b)},
xo(a){var s=new A.mN(A.dt(t.iZ))
s.lJ(a)
return s},
hj:function hj(a,b){this.a=a
this.b=b},
tc:function tc(){},
mE:function mE(a,b,c){this.c=a
this.a=b
this.b=c},
n7:function n7(a,b,c){this.c=a
this.a=b
this.b=c},
aM:function aM(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
mN:function mN(a){this.a=a},
tx:function tx(a){this.a=a},
bH:function bH(a,b){this.a=a
this.b=b},
iU(a,b,c,d){var s=$.wg()
s.ce(s.$ti.c.a(new A.k7(a)),null,1,100,d,b,null)},
k7:function k7(a){this.b=a},
Cl(){A.a9(239,null,null).a5("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.D,1000)
s.v(20)
s.x=0.05
s.kn(new A.uk())},
uk:function uk(){},
iW(a,b){var s=A.D(t.iZ,t.i)
b.ae(0,new A.uq(s))
$.hY.h(0,a,new A.dv(A.xo(s),a))},
uq:function uq(a){this.a=a},
CA(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a9(225,p,q)
l.a5("equipment/weapon/club")
l.x=0.5
l.ct(25,5)
A.i()
l=$.h=A.j("Stick",B.k,0)
l.E(1,20)
l.a8(4,6)
l.aa(3)
s=$.b9()
l.a.h(0,s,10)
l.w=10
A.i()
l=$.h=A.j("Cudgel",B.o,20)
l.E(6,60)
l.a8(9,8)
l.aa(4)
l.a.h(0,s,5)
l.w=10
A.i()
l=$.h=A.j("Club",B.w,40)
l.v(14)
l.a8(12,11)
l.aa(5)
l.a.h(0,s,2)
l.w=10
l=A.a9(237,p,q)
l.a5("equipment/weapon/staff")
l.x=0.5
l.y=!0
l.ct(35,4)
A.i()
l=$.h=A.j("Walking Stick",B.k,10)
l.E(2,40)
l.a8(9,10)
l.aa(3)
l.a.h(0,s,5)
l.w=15
A.i()
l=$.h=A.j("Sta[ff|aves]",B.w,50)
l.v(7)
l.a8(13,14)
l.aa(5)
l.a.h(0,s,2)
l.w=15
A.i()
l=$.h=A.j("Quartersta[ff|aves]",B.o,80)
l.v(24)
l.a8(20,22)
l.aa(8)
l.a.h(0,s,2)
l.w=15
l=A.a9(243,p,o)
l.a5("equipment/weapon/hammer")
l.x=0.5
l.ct(15,5)
A.i()
l=$.h=A.j("Hammer",B.k,120)
l.v(40)
l.a8(28,22)
l.aa(12)
A.i()
l=$.h=A.j("Mattock",B.w,240)
l.v(46)
l.a8(36,29)
l.aa(16)
A.i()
l=$.h=A.j("War Hammer",B.o,400)
l.v(52)
l.a8(44,38)
l.aa(20)
l=A.a9(250,p,o)
l.a5("equipment/weapon/mace")
l.x=0.5
l.ct(15,4)
A.i()
l=$.h=A.j("Morningstar",B.o,130)
l.v(24)
l.a8(25,21)
l.aa(11)
A.i()
l=$.h=A.j("Mace",B.f,310)
l.v(33)
l.a8(36,32)
l.aa(16)
l=A.a9(241,p,"whip[s]")
l.a5("equipment/weapon/whip")
l.x=0.5
l.ct(25,4)
A.i()
l=$.h=A.j("Whip",B.k,40)
l.v(4)
l.a8(9,7)
l.aa(1)
l.a.h(0,s,10)
l.w=5
A.i()
l=$.h=A.j("Chain Whip",B.o,230)
l.v(15)
l.a8(18,17)
l.aa(2)
A.i()
l=$.h=A.j("Flail",B.f,350)
l.v(27)
l.a8(28,24)
l.aa(4)
l=A.a9(209,p,n)
l.a5("equipment/weapon/dagger")
l.x=0.5
l.ct(2,8)
A.i()
l=$.h=A.j("Kni[fe|ves]",B.d,20)
l.E(3,20)
l.a8(6,5)
l.aa(6)
A.i()
l=$.h=A.j("Dagger",B.o,30)
l.E(4,40)
l.a8(8,6)
l.aa(8)
A.i()
l=$.h=A.j("Dirk",B.J,50)
l.E(6,70)
l.a8(9,7)
l.aa(9)
A.i()
l=$.h=A.j("Stiletto[es]",B.f,80)
l.v(10)
l.a8(11,8)
l.aa(11)
A.i()
l=$.h=A.j("Rondel",B.K,130)
l.v(20)
l.a8(13,9)
l.aa(13)
A.i()
l=$.h=A.j("Baselard",B.h,200)
l.v(30)
l.a8(15,11)
l.aa(15)
A.i()
l=$.h=A.j("Mercygiver",B.P,2000)
l.E(20,50)
l.x=0.2
l.a8(12,6)
r=t.lT.a(new A.ur())
l.db=!0
l.kn(r)
l=A.a9(170,p,"slash[es]")
l.a5("equipment/weapon/sword")
l.x=0.5
l.ct(20,5)
A.i()
l=$.h=A.j("Rapier",B.j,140)
l.v(13)
l.a8(13,13)
l.aa(4)
A.i()
l=$.h=A.j("Shortsword",B.f,230)
l.v(17)
l.a8(15,15)
l.aa(6)
A.i()
l=$.h=A.j("Scimitar",B.o,370)
l.v(18)
l.a8(24,18)
l.aa(9)
A.i()
l=$.h=A.j("Cutlass[es]",B.E,520)
l.v(20)
l.a8(26,22)
l.aa(11)
A.i()
l=$.h=A.j("Falchion",B.K,750)
l.v(34)
l.a8(28,25)
l.aa(15)
l=A.a9(186,p,n)
l.a5("equipment/weapon/spear")
l.x=0.5
l.l1(9)
A.i()
l=$.h=A.j("Pointed Stick",B.w,10)
l.E(2,30)
l.a8(7,9)
l.aa(6)
l.a.h(0,s,7)
l.w=12
A.i()
l=$.h=A.j("Spear",B.k,160)
l.E(13,60)
l.a8(16,13)
l.aa(15)
A.i()
l=$.h=A.j("Angon",B.o,340)
l.v(21)
l.a8(20,19)
l.aa(20)
l=A.a9(186,p,n)
l.a5("equipment/weapon/polearm")
l.x=0.5
l.y=!0
l.l1(4)
A.i()
l=$.h=A.j("Lance",B.J,550)
l.v(28)
l.a8(22,23)
l.aa(20)
A.i()
l=$.h=A.j("Partisan",B.f,850)
l.v(35)
l.a8(26,25)
l.aa(26)
l=A.a9(191,p,"chop[s]")
l.a5("equipment/weapon/axe")
l.x=0.5
A.i()
l=$.h=A.j("Hatchet",B.f,90)
l.E(6,50)
l.a8(12,10)
l.fk(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a8(15,14)
l.fk(24,7)
A.i()
l=$.h=A.j("Valaska",B.o,330)
l.v(24)
l.a8(19,19)
l.fk(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.j,550)
l.v(40)
l.y=!0
l.a8(25,30)
l.fk(28,4)
l=A.a9(8976,p,q)
l.a5("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.ct(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.bg(new A.aL(A.aT("arrow",B.y,B.W).a6(1)),m,5,p,8)
l.cx=12
l.aa(2)
l.a.h(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.w,250)
l.v(13)
l.ay=A.bg(new A.aL(A.aT("arrow",B.y,B.W).a6(1)),m,9,p,12)
l.cx=18
l.aa(3)
l.a.h(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.o,600)
l.v(28)
l.ay=A.bg(new A.aL(A.aT("bolt",B.y,B.W).a6(1)),m,14,p,16)
l.cx=24
l.aa(4)
l.a.h(0,s,4)
l.w=14},
ur:function ur(){},
an(a,b,c,d,e,f,g){var s
A.fF()
$.cj().c3("monster/"+b)
s=t.s
$.am.b=new A.oD(a,B.a.gco(b.split("/")),e,$.b2(),A.b([],t.x),A.b([],s))
$.am.u().e=f
$.am.u().r=c
$.am.u().b=g
if(d!=null)B.a.T($.am.u().x,A.b(d.split(" "),s))
return $.am.u()},
fF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.ce
if(b8==null)return
s=t.s
r=A.b([$.am.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.wX($.am.u().x,t.N)
q.T(0,b8.x)
p=b8.r
if(p==null)p=$.am.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.a(o,0)
m=o[0]}else m=n>1?new A.m3(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.y
o=A.aT(o,n,b8.ch?B.cq:B.W).a6(1)
n=b8.cx
l=b8.db
k=b8.dx
j=b8.dy
if(b8.d==null)$.am.u()
i=$.am.u().c
h=b8.c
g=b8.CW
f=b8.cy
e=b8.b
if(e==null)e=0
d=$.am.u().b
if(d==null)d=10
c=b8.at
if(c==null)c=$.am.u().at
b=b8.ax
if(b==null)b=$.am.u().ax
a=b8.f
if(a==null)a=$.am.u().f
if(a==null)a=0
a0=b8.e
if(a0==null)a0=0
a1=$.am.u().e
if(a1==null)a1=0
a2=$.am.u().as
if(a2==null)a2=b8.as
a3=b8.y
if(a3==null)a3=$.am.u().y
a4=b8.z
if(a4==null)a4=$.am.u().z
if(b8.Q==null)$.am.u()
a5=q.no()
a5.T(0,q)
q=a5.af(0,"berzerk")
a6=a5.af(0,"cowardly")
a7=a5.af(0,"fearless")
a8=a5.af(0,b7)
a9=a5.af(0,"protective")
b0=a5.af(0,"unique")
if(a5.a!==0)A.a2(A.aG('Unknown flags "'+a5.aQ(0,", ")+'"',null))
b1=b8.fy
b2=A.b([],t.x)
s=A.b([],s)
if(c==null)c=8
if(b==null)b=10
b3=p==null?20:p
if(a2==null)a2=0
if(a3==null)a3=1
if(a4==null)a4=1
if(b1==null)b1="Indescribable."
B.a.T(b2,$.am.u().w)
B.a.T(b2,b8.w)
B.a.j(s,$.am.u().ch)
b4=$.cj()
b5=b8.a
if(b5==null)b5=$.am.u().a
b6=B.a.aQ(r," ")
b4.ce(b4.$ti.c.a(new A.aA(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.ie(j),new A.ai(i.a|h.a),new A.nM(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.ce=null},
q(a,b,c,d,e,f,g){var s
A.fF()
s=new A.jx(a,b,A.at($.am.u().ay,c,null),d,A.b([],t.da),A.b([],t.a_),A.b([],t.f8),A.b([],t.aC),f,$.b2(),A.b([],t.x),A.b([],t.s))
s.e=g
s.r=e
return $.ce=s},
nL(a,b,c,d,e){return new A.jx(a,b,d,e,A.b([],t.da),A.b([],t.a_),A.b([],t.f8),A.b([],t.aC),c,$.b2(),A.b([],t.x),A.b([],t.s))},
tb:function tb(){},
oD:function oD(a,b,c,d,e,f){var _=this
_.ay=a
_.ch=b
_.a=c
_.b=null
_.c=d
_.r=_.f=_.e=_.d=null
_.w=e
_.x=f
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
jx:function jx(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.ay=a
_.ch=!1
_.CW=b
_.cx=c
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fy=_.fx=null
_.a=i
_.b=null
_.c=j
_.r=_.f=_.e=_.d=null
_.w=k
_.x=l
_.ax=_.at=_.as=_.Q=_.z=_.y=null},
ma:function ma(a){this.a=a},
ah:function ah(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
m3:function m3(a){this.a=a},
by:function by(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
fY:function fY(a,b){this.b=a
this.a=b},
dk:function dk(a,b){this.b=a
this.a=b},
kk:function kk(a,b,c){this.b=a
this.c=b
this.a=c},
hf:function hf(a,b){this.b=a
this.a=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.a=c},
b7:function b7(a,b){this.b=a
this.a=b},
bS:function bS(a,b){this.b=a
this.a=b},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b){this.b=a
this.a=b},
k1:function k1(){},
k5:function k5(){},
lh:function lh(){},
lx:function lx(){},
fV(a,b,c){var s=$.bn
$.bn=s+1
return new A.dg(a,b,c,s)},
dg:function dg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
jl:function jl(a){this.a=a},
jt:function jt(a){this.a=a},
wp(a){return 2*A.x(a,1,15,1,4)/A.i2(50)},
ju:function ju(a){this.a=a},
hx:function hx(){},
jo:function jo(a){this.a=a},
jv:function jv(a){this.a=a},
kF:function kF(a){this.a=a},
lA:function lA(a){this.a=a},
lG:function lG(a){this.a=a},
m_:function m_(a){this.a=a},
bR:function bR(a,b){this.a=a
this.b=b},
nE:function nE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iB:function iB(a,b){this.a=a
this.b=b},
bk:function bk(){},
tv:function tv(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
z8(a){var s,r=A.b([],t.c4),q=Math.min($.o().hT(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.vD().i_(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fx(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.b((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.vD()
p.ce(p.$ti.c.a(new A.fW(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
vp(a,b){var s=null
A.fx("dungeon",s,new A.tZ(a),"room",0.04,100,s,s,s,s,1,b)},
BN(a,b,c){var s="catacomb"
A.fx(s,null,new A.tV(),s,0.02,100,b,null,null,a,1,c)},
BO(a,b,c){A.fx("cavern",null,new A.tW(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
Cd(a,b,c){A.fx("lake",!1,new A.ub(),"water",0.01,b,null,null,0,a,c,null)},
Cm(a,b,c){A.fx("river",!1,new A.ul(),"water",0.01,b,null,null,0,a,c,null)},
u9(a,b,c){A.fx(a+" keep",!1,new A.ua(),"room",0.05,b,null,1.5,0,a,c,2)},
em(a,b,c){var s=null
A.fx(a+" pit",!1,new A.ug(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
tZ:function tZ(a){this.a=a},
tV:function tV(){},
tW:function tW(){},
ub:function ub(){},
ul:function ul(){},
ua:function ua(){},
ug:function ug(a){this.a=a},
eA:function eA(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
eB:function eB(){this.c=this.b=this.a=$},
nV:function nV(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
nZ:function nZ(){},
nY:function nY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nW:function nW(){},
nX:function nX(){},
jR:function jR(a){this.a=a
this.c=this.b=0},
eH:function eH(a){var _=this
_.w=a
_.c=_.b=_.a=$},
zF(a){var s=A.zE($.o().cP(a,a/2|0),B.kh)
return s},
zE(a,b){return new A.eV(new A.pL(b,A.D(t.u,t.d2),A.b([],t.fv)),a)},
eV:function eV(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
pO:function pO(a){this.a=a},
pM:function pM(a){this.a=a},
pN:function pN(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b
this.c=0},
rM:function rM(a,b){this.a=a
this.b=b},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){this.c=this.b=this.a=$},
qw(a,b,c,d){return new A.qv(b,d,a,c)},
hG:function hG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
qv:function qv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
qE:function qE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
im:function im(a,b){this.a=a
this.b=b},
bT(a,b,c,d){var s=c==null?$.o().aE(1,3):c
return new A.tz(a,b,s,d==null?$.o().aE(1,3):d)},
fg:function fg(){this.c=this.b=this.a=$},
qR:function qR(a){this.a=a},
qS:function qS(a){this.a=a},
qP:function qP(a){this.a=a},
qT:function qT(a){this.a=a},
qQ:function qQ(a){this.a=a},
qO:function qO(a){this.a=a},
tz:function tz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v1(a,b){var s,r
switch(b.a){case 0:return $.o().U(3)===0?A.x9(a):A.xd(a)
case 1:return $.o().U(3)===0?A.xb(a):A.xc(a)
case 2:s=$.o().U(10)
A:{if(0===s){r=A.xb(a)
break A}if(1===s){r=A.xc(a)
break A}if(2===s||3===s){r=A.x9(a)
break A}r=A.xd(a)
break A}return r}},
qW(){var s=$.o()
if(s.U(5)!==0)return B.jO
if(s.U(5)!==0)return B.jP
return B.jQ},
xd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.qW().a){case 0:s=$.o()
s=new A.S(s.aB(3,8),s.aB(3,8))
break
case 1:s=$.o()
s=new A.S(s.aB(7,10),s.aB(7,10))
break
case 2:s=$.o()
s=new A.S(s.aB(9,16),s.aB(9,16))
break
default:s=null}r=s.a
q=s.b
if(r>q){p=q
q=r
r=p}o=$.o().U(2)===0
n=o?q:r
m=o?r:q
s=n+2
l=m+2
k=A.ao(s*l,$.nl(),!1,t.gf)
j=new A.ab(k,new A.a3(new A.d(0,0),new A.d(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.uw()
j.l(h,i)
B.a.h(k,l+h,g)}f=A.b([],t.g)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.b([new A.d(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.b([new A.d(k,k),new A.d(g,k),new A.d(k,d),new A.d(g,d)],l))}A.v0(j)
return j},
x9(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.qW().a){case 0:s=B.iz
break
case 1:s=B.iA
break
case 2:s=B.iB
break
default:s=null}r=s.a
q=s.b
s=$.o()
p=s.aB(r,q)
o=s.aB(p,B.e.aU(p*1.5))
n=s.U(2)===0
m=n?o:p
l=n?p:o
k=s.aB(2,m-3)
j=s.aB(2,l-3)
i=s.U(2)===0
h=s.U(2)===0
s=m+2
g=l+2
f=A.ao(s*g,$.nl(),!1,t.gf)
e=new A.ab(f,new A.a3(new A.d(0,0),new A.d(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.uw()
e.l(c,d)
B.a.h(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.nl()
e.l(c,d)
B.a.h(f,g+c,b)}a3=A.b([],t.g)
s=m-k
g=l-j
for(f=B.c.A(Math.min(s,g)-1,2),b=!i,a4=t.l,a5=!h,a6=k+1,a7=j+1,a8=0;a8<f;++a8){a9=A.b([],a4)
B.a.j(a3,a9)
if(!i||a5){b0=1+a8
B.a.j(a9,new A.d(b0,b0))}if(!i||h)B.a.j(a9,new A.d(m-a8,1+a8))
if(!b||a5)B.a.j(a9,new A.d(1+a8,l-a8))
if(!b||h)B.a.j(a9,new A.d(m-a8,l-a8))
if(i){b0=1+a8
b1=a7+a8
if(h){B.a.j(a9,new A.d(a6+a8,b0))
B.a.j(a9,new A.d(b0,b1))}else{B.a.j(a9,new A.d(s-a8,b0))
B.a.j(a9,new A.d(m-a8,b1))}}else{b0=l-a8
b1=g-a8
if(h){B.a.j(a9,new A.d(a6+a8,b0))
B.a.j(a9,new A.d(1+a8,b1))}else{B.a.j(a9,new A.d(m-a8,b1))
B.a.j(a9,new A.d(s-a8,b0))}}}A.v0(e)
return e},
xb(a){var s,r,q,p
switch(A.qW().a){case 0:s=B.cw
break
case 1:s=B.cu
break
case 2:s=B.cv
break
default:s=null}r=s.a
q=s.b
p=$.o().aB(r,q)
return A.xa(p,B.c.A(p-1,2),a)},
xc(a){var s,r,q,p
switch(A.qW().a){case 0:s=B.cw
break
case 1:s=B.cu
break
case 2:s=B.cv
break
default:s=null}r=s.a
q=s.b
s=$.o()
p=s.aB(r,q)
return A.xa(p,s.aB(2,B.c.A(p,2)-1),a)},
xa(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.ao(i*i,$.nl(),!1,t.gf),g=new A.ab(h,new A.a3(new A.d(0,0),new A.d(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.uw()
g.l(o,r)
B.a.h(h,q+o,n)}m=A.b([],t.g)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.b([new A.d(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.b([new A.d(o,n),new A.d(k,o),new A.d(o,k),new A.d(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.b([new A.d(o,o),new A.d(n,o),new A.d(o,n),new A.d(n,n)],q))}A.v0(g)
return g},
v0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.af(s),q=t.ca,p=t.e0,o=p.i("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.a(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.qV(new A.d(k,j),a)
g=A.a8(new A.aq(B.au,q.a(h),p),o)
f=B.a.d_(B.cg,h)
h=g.length
if(h===1){h=l.a(new A.e0(null,B.a.glq(g).gcN()))
a.l(k,j)
B.a.h(n,i,h)}else if(h<=1)if(f){h=l.a($.yE())
a.l(k,j)
B.a.h(n,i,h)}}},
A7(a){return new A.e0(null,a)},
x8(a){return new A.e0(a,B.r)},
lt:function lt(){},
hR:function hR(a,b){this.a=a
this.b=b},
qV:function qV(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
AP(a){return A.uM(a,$.j1())},
Bs(a){return A.uW(a,$.j4())},
AQ(a){return A.uM(a,$.uz())},
Bt(a){return A.uW(a,$.w1())},
AO(a){return A.uM(a,$.uy())},
Br(a){return A.uW(a,$.w0())},
Ah(a,b,c,d,e,f){var s,r,q,p=A.b([],t.J)
for(s=t.mO,r=b.length,q=0;q<e;++q){if(0>=r)return A.a(b,0)
B.a.j(p,f.$2(new A.fm(a,A.b([new A.a0(b.charCodeAt(0),c,B.t)],s)),q))}return p},
Ag(a){var s=$.yG()
if(s.ah(a)){s=s.n(0,a)
s.toString
return s}return A.b([$.vS(),$.vT()],t.J)},
G(a,b,c,d){if(d==null)d=B.t
if(0>=b.length)return A.a(b,0)
return new A.fm(a,A.b([A.cO(b.charCodeAt(0),c,d)],t.mO))},
rS:function rS(){},
rR:function rR(){},
rQ:function rQ(){},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
cr(a,b){var s=$.jP.b6(a,new A.nP(a)).b
s.bj(s.$ti.c.a(b))
if(s.gI(0)>10)s.cM()},
cs(a,b,c,d){var s=$.jP.b6(a,new A.nR(a)).c.b6(b,new A.nS())
s.bj(s.$ti.c.a(c))
if(s.gI(0)>20)s.cM()
A.jQ(a,b,d)},
jQ(a,b,c){$.jP.b6(a,new A.nQ(a)).d.h(0,b,c)},
zl(a){var s,r=$.nO
if(r==null)return null
s=$.jP.n(0,a)
if(s==null)return null
return s.t(0)},
vc(a){var s=t.N
return new A.fs(a,A.hu(s),A.D(s,t.jo),A.D(s,t.jv))},
nP:function nP(a){this.a=a},
nR:function nR(a){this.a=a},
nS:function nS(){},
nQ:function nQ(a){this.a=a},
fs:function fs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tw:function tw(){},
I:function I(){},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
kh:function kh(){},
jn:function jn(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
x_(a){return new A.l9(a)},
wA(a,b){return new A.jX(a,b)},
kv:function kv(){},
l9:function l9(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jU:function jU(a,b,c){var _=this
_.z=a
_.e=b
_.f=c
_.a=null
_.d=_.c=_.b=$},
jX:function jX(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lQ:function lQ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lT:function lT(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cJ:function cJ(){},
o_:function o_(a,b){this.a=a
this.b=b},
o0:function o0(a){this.a=a},
o1:function o1(a,b){this.a=a
this.b=b},
kK:function kK(){},
lN:function lN(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
lO:function lO(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bt(a){return new A.lX(a)},
uW(a,b){return new A.l4(a,b)},
uM(a,b){return new A.jE(a,b)},
lq(){return new A.lp()},
lX:function lX(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
l4:function l4(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
jE:function jE(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lp:function lp(){var _=this
_.a=null
_.d=_.c=_.b=$},
bq:function bq(){},
y3(a){return 1/(1+Math.max(0,a)/40)},
bg(a,b,c,d,e){var s=e==null?0:e
return new A.ba(a,b,c,s,d==null?$.aF():d)},
bN(a){var s=t.iO,r=t.kt
return new A.bb(a,A.b([],s),A.b([],r),A.b([],s),A.b([],r),$.aF())},
ba:function ba(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
km:function km(a,b){this.a=a
this.b=b},
dh:function dh(a){this.a=a},
du:function du(a){this.a=a},
bb:function bb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1},
p0:function p0(){},
p_:function p_(){},
oZ:function oZ(){},
oY:function oY(){},
aH:function aH(a,b){this.a=a
this.b=b},
c4:function c4(){},
he:function he(){this.b=this.a=0},
h_:function h_(){this.b=this.a=0},
hI:function hI(){this.b=this.a=0},
dN:function dN(){this.b=this.a=0},
hb:function hb(){this.b=this.a=0},
hQ:function hQ(a){this.c=a
this.b=this.a=0},
hH:function hH(){this.b=this.a=0},
c5(a,b,c,d,e,f,g){var s=d==null?new A.oc():d
return new A.dP(a,b,e,f,c,s,g==null?new A.od():g)},
dP:function dP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oc:function oc(){},
od:function od(){},
h8:function h8(){this.a=0},
k_:function k_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aN:function aN(a){this.a=a},
uP(a,b,c,d,e){var s=A.hu(t.fD),r=A.b([],t.iA),q=A.b([],t.bI),p=A.b([],t.l),o=new A.h8(),n=new A.ax(c,A.bc(t.B),new A.be(t.mh),o,new A.dN(),new A.h_(),new A.dN(),new A.hb(),new A.he(),new A.hH(),new A.hI(),A.D(t.h,t.mF),new A.d(0,0))
o.a=240
n.bs()
o=c.CW.a
o.toString
n.z=B.c.P(B.e.M(Math.pow(o,1.458)+9),0,n.gbq())
o=c.cx.a
o.toString
n.ch=A.kt(o)
q=new A.ke(a,s,r,q,new A.h8(),p,b,n)
s=e==null?100:e
s=A.Aa(s,d==null?80:d,q)
q.x!==$&&A.az()
q.x=s
s.dH(n)
B.a.T(p,s.f.b.bQ(-1))
s=$.o()
B.a.bL(t.A.a(p),s.a)
return q},
ke:function ke(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.x=$
_.y=h},
oW:function oW(a){this.a=a},
i8:function i8(){},
lW:function lW(){},
f8:function f8(a){this.a=a},
wY(a,b){var s
A:{if(B.cs===b||B.iv===b){s=!0
break A}if(B.ct===b||B.aI===b||B.y===b){s=!1
break A}s=null}return A.yf(a,$.yt(),t.jt.a(t.po.a(new A.pU(s))),null)},
dX(a,b){var s,r,q,p,o,n,m,l,k={},j=A.b([],t.s)
k.a=""
k.b=-1
s=new A.pW(k,b)
r=new A.pV(k,j)
for(q=b.length,p=0;p<q;++p){o=b[p]
if(" "===o){s.$1(p)
continue}if("\n"===o){s.$1(p)
r.$0()
k.b=-1
continue}n=k.b
if(n===-1){k.b=p
n=p}m=p-n+1
n=k.a.length
l=n===0
if(l&&m>a){s.$1(p)
r.$0()
k.b=p}else if(!l&&n+1+m>a)r.$0()}s.$1(q)
if(k.a.length!==0)r.$0()
return j},
kJ:function kJ(a){this.a=a
this.b=0},
pU:function pU(a){this.a=a},
pW:function pW(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
x(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
y5(a,b){var s=new A.u2(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.pW()
return r>>>0},
u2:function u2(){},
dt(a){var s=t.N
return new A.fd(A.D(s,a.i("c0<0>")),A.D(s,a.i("bv<0>")),A.D(t.nP,a.i("iE<0>")),a.i("fd<0>"))},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
qK:function qK(a){this.a=a},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b){this.a=a
this.b=b},
qH:function qH(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
c0:function c0(a,b,c){this.a=a
this.b=b
this.$ti=c},
mT:function mT(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
A3(a){return new A.aL(a)},
zR(a,b,c){return A.aT(a,c,b)},
aT(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.i.ij(a,"a ")){a=B.i.cV(a,2)
s=!1}else if(B.i.ij(a,"an ")){a=B.i.cV(a,3)
s=!0}else{if(0>=a.length)return A.a(a,0)
s=B.i.G("aeiouAEIOU",a[0])}r=$.yv().kd(a)
if(r!=null){q=r.b
p=q.length
if(1>=p)return A.a(q,1)
o=q[1]
o.toString
if(2>=p)return A.a(q,2)
q=q[2]
q.toString
n=o
a=q}else n=""
m=A.qo(n,!1,!0)
l=A.qo(n,!1,!1)
q=n.length===0
k=A.qo(a,q,!0)
j=A.qo(a,q,!1)
q="<p>"+k
p=c.a
switch(p){case 0:o="<a> "+m+"<p>"+k
break
case 1:o=m+"<p>"+k
break
case 2:o="the "+m+"<p>"+k
break
case 3:o=m+"<p>"+k
break
default:o=null}switch(p){case 0:p="the <p>"+k
break
case 1:p=q
break
case 2:p="the <p>"+k
break
case 3:p=q
break
default:p=null}return new A.qn(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
qo(a,b,c){var s,r={}
r.a=!1
s=A.yf(a,$.yw(),t.jt.a(t.po.a(new A.qp(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
zQ(a,b,c,d){return new A.hD(a,b,c,d)},
dy:function dy(){},
aL:function aL(a){this.a=a},
qn:function qn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qq:function qq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qp:function qp(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
U(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.ys().kd(n)
if(m!=null){s=m.b
if(2>=s.length)return A.a(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.b([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.i.aK(r,o,o+3))}n=B.a.aQ(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.i.de(n,c==null?0:c)},
wZ(a,b,c){var s=A.z(a).i("br<1,2>"),r=b.i("@<0>").ac(c).i("+(1,2)")
return A.q7(new A.br(a,s),s.ac(r).i("1(k.E)").a(new A.q6(b,c)),s.i("k.E"),r)},
uV(a,b,c){var s=B.e.hY(a,b)
return B.i.de(s,c==null?0:c)},
qt(a,b){var s=b==null?0:b
s=B.e.hY(a*100,s)
return B.i.de(s+"%",0)},
q6:function q6(a,b){this.a=a
this.b=b},
lV:function lV(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=0
_.e=c
_.f=0},
a7:function a7(){},
Z:function Z(){},
cZ:function cZ(){},
cK:function cK(){},
dM:function dM(){},
aX:function aX(a){this.a=a},
lr:function lr(){},
cc:function cc(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a){this.a=a},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$
_.e=null
_.f=!1
_.r=0
_.w=null},
oB:function oB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oC:function oC(a,b){this.a=a
this.b=b},
oA:function oA(a){this.a=a},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.Q=a
_.as=b
_.at=null
_.ax=c
_.ay=200
_.CW=_.ch=0
_.cx=1000
_.cy=0
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=0},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
uQ(a,b,c,d,e){return new A.cP(a,b,c,d,e)},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.i1(),r=new A.fU(),q=new A.ia(),p=new A.hh(),o=new A.dn(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.ds(o)
r.b=a1
r.a=r.ds(o)
q.b=a4
q.a=q.ds(o)
p.b=a2
p.a=p.ds(o)
return o},
dn:function dn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pX:function pX(){},
q_:function q_(){},
q0:function q0(){},
pY:function pY(){},
pZ:function pZ(){},
q1:function q1(){},
bZ:function bZ(){},
aK:function aK(){},
mR:function mR(){},
lj(a,b,c,d){return new A.cV(a,b,d,c)},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(){},
hK:function hK(a){this.a=a},
aj:function aj(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
r8:function r8(a){this.a=a},
r7:function r7(){},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a){this.a=a},
n_:function n_(){},
i2(a){if(a<=10)return B.e.O(A.x(a,1,10,0,20))
return B.e.O(A.x(a,10,50,20,200))},
xg(a){if(a<=20)return A.x(a,1,20,0.1,1)
if(a<=30)return A.x(a,20,30,1,1.5)
if(a<=40)return A.x(a,30,40,1.5,1.8)
if(a<=50)return A.x(a,40,50,1.8,2)
return A.x(a,50,60,2,2.1)},
wn(a){if(a<=10)return B.e.O(A.x(a,1,10,-50,0))
if(a<=30)return B.e.O(A.x(a,10,30,0,20))
return B.e.O(A.x(a,30,60,20,60))},
wo(a){if(a<=10)return B.e.O(A.x(a,1,10,-30,0))
if(a<=30)return B.e.O(A.x(a,10,30,0,20))
return B.e.O(A.x(a,30,60,20,50))},
kt(a){if(a<=10)return B.e.O(A.x(a,1,10,0,20))
return B.e.O(A.x(a,10,50,20,200))},
be:function be(a){this.a=null
this.$ti=a},
cx:function cx(a,b,c){this.c=a
this.a=b
this.b=c},
cy:function cy(){},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){this.b=0
this.a=null},
fU:function fU(){this.b=0
this.a=null},
ia:function ia(){this.b=0
this.a=null},
hh:function hh(){this.b=0
this.a=null},
Bq(a){A.u(a)
return 1},
Bp(a){A.u(a)
return 0},
cl:function cl(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q},
eJ:function eJ(a){this.b=a},
or:function or(){},
oq:function oq(){},
op:function op(a){this.a=a},
mm:function mm(){},
bC(a,b){var s=A.b([],t.I)
if(b!=null)B.a.T(s,b)
return new A.bX(a,s,a.c)},
c6:function c6(a,b){this.a=a
this.c=b},
eT:function eT(){},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
pb:function pb(){},
dL:function dL(a,b){this.a=a
this.b=b},
mD:function mD(){},
N:function N(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
pD:function pD(){},
py:function py(){},
px:function px(){},
pw:function pw(){},
pE:function pE(){},
pz:function pz(){},
pA:function pA(a){this.a=a},
pC:function pC(a){this.a=a},
pB:function pB(){},
bO:function bO(a,b){this.a=a
this.b=b},
rT:function rT(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2},
ln:function ln(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
zd(a){var s,r,q,p,o
for(s=$.ex.length,r=t.P,q=0;q<$.ex.length;$.ex.length===s||(0,A.p)($.ex),++q){p=$.ex[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.az()
p.b=o}B.a.aN($.ex)},
aP(a){var s=new A.jy(a)
B.a.j($.ex,s)
return s},
jy:function jy(a){this.a=a
this.b=$},
aA:function aA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=a0
_.dy=a1
_.fr=a2},
fj:function fj(a,b){this.a=a
this.b=b},
nM:function nM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC(a,b,c){return new A.jB(a,b,c)},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.Q=a
_.as=b
_.at=c
_.ax=d
_.ay=!0
_.CW=_.ch=0
_.cx=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.r=l
_.w=m
_.x=n
_.y=o
_.z=0},
qg:function qg(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
qe:function qe(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
eZ:function eZ(){},
qf:function qf(a,b){this.a=a
this.b=b},
co:function co(){this.a=$},
cH:function cH(){this.a=$},
nH:function nH(a,b){this.a=a
this.b=b},
nF:function nF(a){this.a=a},
nG:function nG(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(){this.a=$},
nB:function nB(a){this.a=a},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(){},
lk:function lk(){},
cq:function cq(a,b){this.a=a
this.b=0
this.$ti=b},
cv(a,b,c,d,e,f){var s=new A.kT(c,d!==!1,e===!0,f,a,b,new A.cq(A.b([],t.k5),t.r),A.b([],t.l))
s.fD(a,b,f)
return s},
eK:function eK(){},
oI:function oI(a,b,c){this.a=a
this.b=b
this.c=c},
oJ:function oJ(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function kT(a,b,c,d,e,f,g,h){var _=this
_.r=a
_.w=b
_.x=c
_.y=d
_.a=e
_.b=f
_.d=_.c=$
_.e=g
_.f=h},
oL:function oL(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b){this.a=a
this.b=b},
kH(a){var s
A:{if(1===a){s=40
break A}if(2===a){s=56
break A}if(3===a){s=72
break A}if(4===a){s=96
break A}if(5===a){s=120
break A}if(6===a){s=160
break A}if(7===a){s=200
break A}if(8===a){s=240
break A}if(a<=0){s=0
break A}s=255
break A}return s},
pP:function pP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
pQ:function pQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pR:function pR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l8:function l8(){},
xV(a){var s=a.a.e
if(s.Y(0,$.bK()))return 8
if((s.a&$.Y().a)===0)return 10
return 1},
ra:function ra(a){this.a=a
this.b=null},
n0:function n0(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
tD:function tD(a,b,c){this.a=a
this.b=b
this.c=c},
Aa(a,b,c){var s,r=A.b([],t.p5),q=new A.rm(),p=t.jh,o=a*b
if(o>0)s=A.ao(o,q.$1(B.al),!1,p)
else s=J.wO(0,p)
s=new A.ab(s,new A.a3(new A.d(0,0),new A.d(a,b)),t.lr)
s.lB(a,b,q,p)
return new A.rc(c,r,s,A.D(t.u,t.D),new A.ab(A.ao(o,null,!1,t.e9),new A.a3(new A.d(0,0),new A.d(a,b)),t.hE))},
rc:function rc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
rm:function rm(){},
rp:function rp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(a){this.a=a},
rl:function rl(){},
rn:function rn(a){this.a=a},
kS(a){return new A.ai(a)},
Af(a,b,c,d,e,f){return new A.d0(a,f,d==null?0:d,b,c,e)},
ai:function ai(a){this.a=a},
bF:function bF(a){this.a=a},
d0:function d0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d_:function d_(a,b){var _=this
_.a=a
_.b=!1
_.f=_.e=_.d=_.c=0
_.r=!1
_.w=b
_.x=0},
jh:function jh(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
fX:function fX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jN:function jN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
h3:function h3(a){this.a=a
this.b=20},
X(a,b){var s,r,q,p,o,n,m=A.b([],t.mO)
for(s=new A.dj(a),r=t.gS,s=new A.c9(s,s.gI(0),r.i("c9<a1.E>")),r=r.i("a1.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.p)(b),++o){n=b[o]
B.a.j(m,new A.a0(q,n,B.z))}}return m},
h7:function h7(a,b){this.a=a
this.b=b
this.c=0},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a,b){this.a=a
this.b=b
this.c=0},
ko:function ko(a){this.a=a
this.b=0},
kw:function kw(a,b){this.a=a
this.b=b
this.c=2},
kM:function kM(a,b){this.a=a
this.b=b
this.c=-1},
l7:function l7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lK:function lK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
lP:function lP(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
zs(a,b){var s,r,q,p,o,n=A.b([],t.hC)
for(s=$.vM(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.n(0,p.gcG())
if((o==null?0:o)>0)n.push(p)}n=new A.ha(b,n,A.D(t.M,t.de))
n.lD(a,b)
return n},
ha:function ha(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
oy:function oy(){},
ou:function ou(){},
oz:function oz(){},
ov:function ov(){},
ow:function ow(){},
ox:function ox(a,b){this.a=a
this.b=b},
jS:function jS(){},
o7:function o7(a,b){this.a=a
this.b=b},
fT:function fT(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
l5:function l5(a){this.b=a
this.c=0
this.a=null},
wF(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.d1(),i=k.f.d1(),h=k.y,g=t.M,f=t.S,e=A.cT(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cT(c.a,b,f)
b=A.cT(c.b,b,f)
s=t.q
r=A.cT(c.c,s,f)
q=A.cT(c.d,t.R,f)
p=A.wX(c.e,s)
s=A.cT(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.hd(a1,A.wJ(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.hZ(e,A.D(g,f)),d,new A.hw(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.pT(d),new A.pv(a1))
d.r=new A.r2(d)
l=A.b([],t.pl)
n=A.b([],t.lE)
d.w!==$&&A.az()
d.w=new A.rd(d,l,n,B.jD,B.al)
$.nO=d
$.jP.aN(0)
return d},
oR(a,b,c,d){var s,r,q,p,o,n,m,l=A.uP(b,0,c,34,60)
if(d)for(s=b.lu(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
o.c7(m)
p.d9(m)
q.bs()}for(s=l.ec(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}if(d)a.bi()
return A.wF(a,l)},
hd:function hd(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.y=_.x=0
_.z=!1
_.a=_.ax=_.at=_.as=_.Q=null},
oV:function oV(a,b){this.a=a
this.b=b},
oT:function oT(){},
oU:function oU(a,b){this.a=a
this.b=b},
oS:function oS(a,b){this.a=a
this.b=b},
hv:function hv(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
xh(a,b,c){var s=new A.lI(a,b,c,A.b([],t.lE))
s.lI(a,b,c)
return s},
AW(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.p)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
AV(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.p)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
lI:function lI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
rN:function rN(a){this.a=a},
rO:function rO(a){this.a=a},
Ai(a){var s,r,q,p,o=A.b([],t.eI)
for(s=$.us(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbD().dM(r)==null)o.push(p)}return new A.i9(a,o)},
i9:function i9(a,b){this.b=a
this.c=b
this.a=null},
hg:function hg(a){var _=this
_.c=_.b=0
_.d=30
_.e=a
_.a=null},
f:function f(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c,d){var _=this
_.e=a
_.f=b
_.b=c
_.c=d
_.a=null},
oo:function oo(a){this.a=a},
fp:function fp(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
zw(a,b){var s=t.q
return B.c.ak(s.a(a).d,s.a(b).d)},
zt(a,b){var s=t.q
return B.c.ak(s.a(a).c,s.a(b).c)},
zv(a,b){var s=t.q
return B.c.ak(s.a(a).as,s.a(b).as)},
zu(a,b){var s=t.q
s.a(a)
s.a(b)
return B.i.ak(a.a.a6(1).a.toLowerCase(),b.a.a6(1).a.toLowerCase())},
ky:function ky(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
pt:function pt(){},
pu:function pu(a){this.a=a},
ps:function ps(a,b){this.a=a
this.b=b},
zN(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.q9()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.ak(r,q)},
zM(a,b){var s=t.P
return B.c.ak(s.a(a).c,s.a(b).c)},
zO(a,b){var s=t.P
return B.i.ak(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
zL(a,b){var s=null,r=A.b([new A.aQ("Name",B.a7,0,s),new A.aQ("Depth",B.am,5,s),new A.aQ("Seen",B.am,5,s),new A.aQ("Slain",B.am,5,s)],t.G),q=t.it,p=t.o9
p=A.b([new A.bD("appearance",A.b([A.Ci(),A.y9()],q),p),new A.bD("name",A.b([A.ya()],q),p),new A.bD("depth",A.b([A.y9(),A.ya()],q),p)],t.d4)
q=t.hb
p=new A.kR(A.v4(r,A.b([new A.ca("all",new A.qc(),q),new A.ca("uniques",new A.qd(),q)],t.gp),p,!0,t.P),a,b)
p.nn()
return p},
kR:function kR(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
q9:function q9(){},
qc:function qc(){},
qd:function qd(){},
qa:function qa(){},
qb:function qb(){},
q8:function q8(a,b){this.a=a
this.b=b},
m:function m(a){this.a=a},
dm:function dm(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
dQ:function dQ(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
hi:function hi(a,b){var _=this
_.y=null
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
p5:function p5(a){this.a=a},
p6:function p6(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(a){this.a=a},
b5:function b5(){},
pq:function pq(){},
wL(a,b,c){var s,r=new A.kx(b,A.wM(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.ih(a,b)
if(q.Q+b.gc1()!==0||q.z!=null)r.c=new A.ij(b)
if(q.e!=null)r.d=new A.iD(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.fw(A.dX(s,q.a),"Use")}return r},
wM(a,b){var s,r,q,p,o,n,m,l,k,j=A.b([],t.s)
for(s=0;s<4;++s){r=B.aU[s]
for(q=a.gag(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.p)(q),++n)o+=q[n].dq(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.geh().ae(0,new A.pr(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.aF()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c8(q,q.r,q.e,A.z(q).i("c8<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.fw(A.dX(b-2,B.a.aQ(j," ")),"Description")},
kx:function kx(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
pr:function pr(a){this.a=a},
d7:function d7(){},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a){this.a=a},
iD:function iD(a){this.a=a},
fw:function fw(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
mS:function mS(){},
lf:function lf(a,b,c){var _=this
_.CW=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
lg:function lg(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
hW:function hW(a,b,c){var _=this
_.y=a
_.b=b
_.c=c
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
e5:function e5(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
rU:function rU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(){},
d4:function d4(){},
it:function it(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ip:function ip(){},
my:function my(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
mx:function mx(a,b){var _=this
_.cy=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ii:function ii(a){var _=this
_.w=null
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
iH:function iH(a,b){var _=this
_.w=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
iG:function iG(a,b){var _=this
_.at=a
_.b=b
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
fq:function fq(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
e7:function e7(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
kg:function kg(a){this.b=a
this.a=null},
oQ:function oQ(a){this.a=a},
kL:function kL(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.f=_.e=null
_.r=!1
_.w=0
_.x=!0
_.y=0
_.a=null},
q3:function q3(){},
q2:function q2(a){this.a=a},
zP(a,b){var s,r,q,p,o,n=t.eR,m=A.b([],n),l=$.o()
t.m.a(B.ai)
s=B.ai.length
r=l.U(s)
if(!(r>=0&&r<s))return A.a(B.ai,r)
r=new A.kU(0,0,b,B.ai[r])
r.h4()
s=$.fL()
q=A.O(s)
p=q.i("au<1,r>")
s=A.a8(new A.au(s,q.i("r(1)").a(new A.qk()),p),p.i("aJ.E"))
s=new A.fh(0,2,"Race",s)
q=$.ep()
p=A.O(q)
o=p.i("au<1,r>")
q=A.a8(new A.au(q,p.i("r(1)").a(new A.ql()),o),o.i("aJ.E"))
q=new A.fh(0,12,"Class",q)
p=new A.fh(0,22,"Death",B.bv)
B.a.T(m,A.b([r,s,q,p],n))
s.e=l.U(5)
q.e=l.U(3)
return new A.l3(a,b,r,s,q,p,m)},
l3:function l3(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=null},
qk:function qk(){},
ql:function ql(){},
qm:function qm(a){this.a=a},
eD:function eD(){},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
qj:function qj(a){this.a=a},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
pv:function pv(a){this.b=a
this.a=null},
pT:function pT(a){this.b=a
this.a=null},
qx:function qx(){},
r2:function r2(a){this.b=a
this.a=null},
r6:function r6(a){this.a=a},
r4:function r4(a,b,c){this.a=a
this.b=b
this.c=c},
r5:function r5(){},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
rd:function rd(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
rk:function rk(a){this.a=a},
rj:function rj(){},
rg:function rg(a){this.a=a},
rh:function rh(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.c=a
this.d=b
this.a=null},
zq(a,b){var s=new A.h9(a,b,A.b([],t.cz))
s.lC(a,b,{})
return s},
h9:function h9(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
os:function os(a,b){this.a=a
this.b=b},
ot:function ot(){},
m4:function m4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
hc:function hc(a){this.c=a
this.a=null},
ld:function ld(){},
qz:function qz(){},
qA:function qA(){},
hV:function hV(a){this.d=a
this.e=1
this.a=null},
xf(a,b){return new A.hT(a,b,B.a.hA(b,new A.qZ()))},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hT:function hT(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
qZ:function qZ(){},
r_:function r_(){},
r0:function r0(){},
xU(a){var s=$.wh().n(0,a)
return s==null?B.cx:s},
Cn(b8,b9,c0,c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=$.z1(),b7=b8.x
b7===$&&A.c()
s=b7.f
r=s.b
q=r.b
p=q.a
o=q.b
q=p*o*3
n=new Int32Array(q)
m=new A.un(b7)
l=new A.uo(b7)
for(r=A.af(r),k=b7.r,j=s.a,i=j.length,b7=b7.w,h=b7.a,g=b7.b.b.a,f=h.length;r.q();){e=r.b
d=r.c
s.l(e,d)
c=d*p+e
if(!(c>=0&&c<i))return A.a(j,c)
b=j[c]
a=c*3
b7.l(e,d)
c=d*g+e
if(!(c>=0&&c<f))return A.a(h,c)
c=h[c]
a0=c!=null&&c1.$2(c,b)
if(!b.r&&!a0)continue
a1=b.a
a2=$.wh().n(0,a1)
if(a2==null)a2=B.cx
a3=a2.a
a4=a2.b
a5=a2.c
if(a4!==0){a1=l.$2(e,d-1)?8:0
a6=l.$2(e,d+1)?4:0
a7=l.$2(e-1,d)?2:0
a8=l.$2(e+1,d)?1:0
a9=a4+(a1|a6|a7|a8)}else if(a3!==0){a1=!J.ad(m.$2(e,d-1),a3)?8:0
a6=!J.ad(m.$2(e,d+1),a3)?4:0
a7=!J.ad(m.$2(e-1,d),a3)?2:0
a8=!J.ad(m.$2(e+1,d),a3)?1:0
a9=a3+(a1|a6|a7|a8)}else a9=0
b0=k.n(0,new A.d(e,d))
if(b0==null)b0=A.bC(B.H,null)
if(!b0.gap(0)){b1=b0.gL(0)
if(!b1.q())A.a2(A.ct())
b2=B.ii.n(0,b1.gH().a.a.a6(1).a)
if(b2==null)b2=a5}else b2=a5
if(!b.r){a9=0
b2=0}b3=(!b.b&&b.d+b.e>b.c?2:0)|1
if(a0){if(c instanceof A.ae){b4=B.id.n(0,c.Q.a.a)
b2=b4==null?b2:b4}else if(c instanceof A.ax){b4=B.ih.n(0,c.Q.b.a)
b2=b4==null?b2:b4}if(c===c2)b3|=4}if(!(a<q))return A.a(n,a)
n[a]=a9
c=a+1
if(!(c<q))return A.a(n,c)
n[c]=b2
c=a+2
if(!(c<q))return A.a(n,c)
n[c]=b3}b5={}
b5.w=p
b5.h=o
b7=b8.y
b5.hx=b7.y.gm()
b5.hy=b7.y.gp()
b5.cells=n
b7=A.O($.iV)
s=b7.i("au<1,Q?>")
b7=A.a8(new A.au($.iV,b7.i("Q?(1)").a(new A.um()),s),s.i("aJ.E"))
b5.text=b7
b5.shown=b9
b7=c0.a
s=b6.a
r=b6.b
q=c0.b
b5.rect=A.y8(A.b([b7.a/s,b7.b/r,q.a/s,q.b/r],t.gk))
r=v.G
r.rvipMap=b5
B.a.aN($.iV)
if("rvipDraw" in r)A.wQ(r,"rvipDraw",t.X)},
T(){var s=v.G,r=s.rvipMap
if(r!=null)A.P(r).shown=!1
if("rvipDraw" in s)A.wQ(s,"rvipDraw",t.X)},
un:function un(a){this.a=a},
uo:function uo(a){this.a=a},
um:function um(){},
rs:function rs(a,b){this.a=a
this.b=b},
rC:function rC(a){this.a=a},
rD:function rD(a){this.a=a},
rz:function rz(a){this.a=a},
rA:function rA(a){this.a=a},
rB:function rB(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(a){this.a=a},
ru:function ru(a,b){this.a=a
this.b=b},
rv:function rv(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
wx(a,b,c,d,e,f){var s,r=null,q=a.e.a.b.b,p=q.a
q=q.b
a.kb(0,0,p,q,B.t)
s=new A.aY(new A.d(b,c),B.c.A(p-b,2),B.c.A(q-2-c,2),a)
A.bm(s,r,r,f,!1,r,r,r)
d.$1(s.b7(1,1,b-2,c-2))
A.bz(a,e,r)},
bm(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cL(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
h4(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.dX(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.p)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
jT(a,b,c,d,e){var s=B.i.aJ("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
o9(a,b,c,d,e,f,g){var s,r=c+1
A.bm(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.an(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
wy(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.t)
else{r=B.c.P(B.e.M(b*e/d),1,b)
q=B.e.M((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.t:B.l
a.k(f,s+g,"\u258c",o)}}},
bz(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=0
b.ae(0,new A.oa(l))
s=l.a
r=c!=null
if(r)s=Math.max(s,c.length)
q=a.e.a.b.b
p=q.a
o=B.c.A(p-s,2)
l.b=o
q=q.b
n=s+4
m=o-2
if(r){A.cL(a,m,q-4,n,5,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(B.c.A(p-c.length,2),q-3,c,B.d)}else A.cL(a,m,q-2,n,3,B.f,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
l.c=!0
l.b=l.b+B.c.A(s-l.a,2)
b.ae(0,new A.ob(l,a))},
cL(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.gaS()
if(e==null)e=a.gao()
if(f==null)f=B.l
s=d-2
r=j+B.i.aJ(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.i.aJ(h,s)
s=B.i.aJ(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
zn(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.O(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.an(b+s,c,new A.a0(r,g,h))}},
wz(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.a0
s=B.e.O(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.an(b+r,c,new A.a0(9604,q,B.z))}},
oa:function oa(a){this.a=a},
ob:function ob(a,b){this.a=a
this.b=b},
v4(a,b,c,d,e){var s,r=e.i("t<ay<0>>"),q=A.b([],r)
r=A.b([],r)
s=A.b(a.slice(0),A.O(a))
return new A.lH(s,q,r,d,c,b,B.al,e.i("lH<0>"))},
v6(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kz(e,B.a.aA(b,0,new A.rP(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.p)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.i.aK(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
lH:function lH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a){this.a=a},
rI:function rI(a){this.a=a},
rJ:function rJ(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ac:function ac(a,b){this.a=a
this.b=b},
R:function R(a,b){this.a=a
this.b=b},
rP:function rP(){},
bD:function bD(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(a,b,c){this.a=a
this.b=b
this.$ti=c},
ic:function ic(a,b){var _=this
_.b=a
_.c=b
_.d=!0
_.a=null},
t5:function t5(a){this.a=a},
t4:function t4(a){this.a=a},
cB:function cB(){},
tC:function tC(a){this.a=a},
ne:function ne(a){this.b=a
this.c=""
this.a=null},
tI:function tI(a){this.a=a},
nf:function nf(a){this.b=a
this.c=""
this.a=null},
tJ:function tJ(a){this.a=a},
o8:function o8(a,b){this.a=a
this.b=b},
at(a,b,c){var s
if(0>=a.length)return A.a(a,0)
s=c==null?B.z:c
return new A.a0(a.charCodeAt(0),b,s)},
cO(a,b,c){var s=b==null?B.aL:b
return new A.a0(a,s,c==null?B.z:c)},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b){this.a=a
this.$ti=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
A6(a,b,c,d,e,f){var s=A.c3(d.getContext("2d"))
if(s==null)s=A.P(s)
s=new A.ls(a,s,e,A.D(t.aZ,t.bp),f,b,c)
s.lH(a,b,c,d,e,f)
return s},
ls:function ls(a,b,c,d,e,f,g){var _=this
_.e=a
_.f=b
_.r=c
_.w=d
_.x=e
_.y=!1
_.z=f
_.Q=g},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
dx:function dx(){},
hP:function hP(){},
cA:function cA(){},
v:function v(){},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
xl(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.mf(a,A.af(new A.a3(new A.d(q.gm()-s,q.gp()-s),new A.d(r,r))),b)},
vf(a,b,c){var s=c.S(0,a).gaF()
if(b<7){if(!(b>=0))return A.a(B.ce,b)
return s<=B.ce[b]}return s<=b*(b+1)},
jD:function jD(a,b){this.a=a
this.b=b},
mf:function mf(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
mj:function mj(){},
eb(a,b){var s,r=b.S(0,a),q=r.a,p=new A.d(B.c.gic(q),0),o=r.b,n=new A.d(0,B.c.gic(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.mK(a,0,m,l,p,n)},
mK:function mK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
x6(a,b){var s=Math.max(a.gbR(),b.gbR()),r=Math.min(a.ge8(),b.ge8()),q=Math.max(a.gbW(),b.gbW()),p=Math.min(a.geO(),b.geO())
return new A.a3(new A.d(s,q),new A.d(Math.max(0,r-s),Math.max(0,p-q)))},
af(a){var s=a.a
return new A.cW(a,s.a-1,s.b)},
a3:function a3(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function qU(a){this.a=a},
Aj(a,b){return new A.d(a,b)},
lU:function lU(){},
d:function d(a,b){this.a=a
this.b=b},
na:function na(){},
e9(a,b,c,d,e){var s=A.BI(new A.tf(c),t.bp)
s=s==null?null:A.vh(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.il(a,b,s,!1,e.i("il<0>"))},
BI(a,b){var s=$.aU
if(s===B.a8)return a
return s.oz(a,b)},
uO:function uO(a,b){this.a=a
this.$ti=b},
ik:function ik(){},
ml:function ml(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
tf:function tf(a){this.a=a},
Cf(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7="item",a8="Insect Wing",a9="Feather",b0="item/food",b1="hit[s]",b2="Healing Poultice",b3=1000,b4="water",b5="equipment/armor/body",b6="The shield blocks {2}.",b7="equipment/armor/boots",b8="fearless",b9="bite[s]",c0=" ",c1="{1} flits out of the way.",c2="canine",c3="stare[s] at",c4="spark",c5="zaps",c6="gaze[s] into",c7="splashes",c8="hits",c9="scratch[es]",d0="stab[s]",d1="treasure",d2="spear",d3="healing",d4="goblin",d5="arrow",d6="armor",d7="resistance",d8="protective",d9="robe",e0="magic",e1="slash[es]",e2="equipment",e3="crawl[s] on",e4="fearless immobile",e5="cowardly",e6="club",e7="kobold",e8="poke[s]",e9="claw[s]",f0="saurian",f1="salamander",f2="weapon",f3="strangle",f4="natural/bug/worm",f5="bony hand",f6="bony arm",f7="severed skull",f8="decapitated skeleton",f9="armless skeleton",g0="one-armed skeleton",g1="{1}'s arm falls off!",g2="{1}'s hand falls off!",g3="{1}'s head pops off!",g4="Elven _",g5="High Elven _",g6="Dwarven _",g7="animal herp",g8="room",g9="catacomb"
$.bp().c3(a7)
s=A.a9(199,10,a6)
s.a5(a7)
r=$.dH()
s.cu(10,3,r,7)
A.i()
s=$.h=A.j("Rock",B.k,0)
s.v(1)
s.x=0.5
s=A.a9(252,4,a6)
s.a5(a7)
s.bG(30,2,5)
A.i()
s=$.h=A.j("Skull",B.o,0)
s.x=0.25
s.v(1)
s=A.a9(162,a6,a6)
s.a5("treasure/coin")
s.ch=!0
A.i()
s=A.j("Copper Coin",B.as,4)
$.h=s
s.E(1,11)
A.i()
s=A.j("Bronze Coin",B.k,8)
$.h=s
s.E(7,20)
A.i()
s=A.j("Silver Coin",B.K,20)
$.h=s
s.E(11,30)
A.i()
s=A.j("Electrum Coin",B.E,50)
$.h=s
s.E(20,40)
A.i()
s=A.j("Gold Coin",B.h,100)
$.h=s
s.E(30,50)
A.i()
s=A.j("Platinum Coin",B.o,300)
$.h=s
s.E(40,70)
s=A.a9(36,a6,a6)
s.a5("treasure/bar")
s.ch=!0
A.i()
s=A.j("Copper Bar",B.as,150)
$.h=s
s.E(35,60)
A.i()
s=A.j("Bronze Bar",B.k,500)
$.h=s
s.E(50,70)
A.i()
s=A.j("Silver Bar",B.K,800)
$.h=s
s.E(60,80)
A.i()
s=A.j("Electrum Bar",B.E,1200)
$.h=s
s.E(70,90)
A.i()
s=A.j("Gold Bar",B.h,2000)
$.h=s
s.v(80)
A.i()
s=A.j("Platinum Bar",B.o,3000)
$.h=s
s.v(90)
s=A.a9(162,a6,a6)
s.a5("item/gem")
q=$.dG()
s.a.h(0,q,50)
s.w=null
A.i()
s=A.j("Amethyst Shard",B.cY,30)
$.h=s
s.E(7,27)
A.i()
s=A.j("Uncut Amethyst",B.O,100)
$.h=s
s.E(27,57)
A.i()
s=A.j("Faceted Amethyst",B.P,400)
$.h=s
s.v(57)
A.i()
s=A.j("Sapphire Shard",B.J,34)
$.h=s
s.E(8,28)
A.i()
s=A.j("Uncut Sapphire",B.D,125)
$.h=s
s.E(28,58)
A.i()
s=A.j("Faceted Sapphire",B.F,440)
$.h=s
s.v(58)
A.i()
s=A.j("Emerald Shard",B.A,37)
$.h=s
s.E(9,29)
A.i()
s=A.j("Uncut Emerald",B.p,136)
$.h=s
s.E(29,59)
A.i()
s=A.j("Faceted Emerald",B.B,486)
$.h=s
s.v(59)
A.i()
s=A.j("Ruby Shard",B.a5,41)
$.h=s
s.E(10,30)
A.i()
s=A.j("Uncut Ruby",B.m,142)
$.h=s
s.E(30,60)
A.i()
s=A.j("Faceted Ruby",B.a0,498)
$.h=s
s.v(60)
A.i()
s=A.j("Diamond Shard",B.f,45)
$.h=s
s.E(11,31)
A.i()
s=A.j("Uncut Diamond",B.o,153)
$.h=s
s.E(31,61)
A.i()
s=A.j("Faceted Diamond",B.u,507)
$.h=s
s.v(61)
s=A.a9(233,20,a6)
s.a5("item/pelt")
s.x=0
p=$.b9()
s.a.h(0,p,80)
s.w=1
A.i()
s=A.j(a8,B.ao,0)
$.h=s
s.v(1)
A.i()
s=A.j(a9,B.o,0)
$.h=s
s.v(1)
s=A.a9(161,a6,a6)
s.a5(b0)
s.a.h(0,p,20)
s.w=3
A.i()
s=$.h=A.j("Stale Biscuit",B.I,0)
s.E(1,10)
s.b=6
s.f0(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.f0(200)
s=A.a9(188,a6,a6)
s.a5(b0)
s.a.h(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.w,10)
s.E(8,60)
s.b=4
s.f0(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.f0(600)
s=A.a9(172,a6,b1)
s.a5("equipment/light")
s.pM(70)
A.i()
s=$.h=A.j("Tallow Candle",B.I,6)
s.E(1,12)
s.b=10
s.ea(2,p,8)
s.da(2,5)
s.a.h(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.u,24)
s.E(6,20)
s.b=10
s.ea(3,p,8)
s.da(3,7)
s.a.h(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.w,146)
s.E(12,30)
s.b=4
s.ea(10,p,8)
s.da(4,10)
s.a.h(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.ea(6,p,10)
s.da(5,14)
s.a.h(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.ea(5,p,5)
s.da(6,18)
s=A.a9(231,10,a6)
s.a5("magic/potion/healing")
s.bG(100,1,6)
o=$.ci()
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a5,10)
s.E(2,30)
s.kg(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.kg(64)
A.i()
s=$.h=A.j(b2,B.a0,80)
s.v(30)
s.dX(120,!0)
A.i()
s=$.h=A.j("Potion[s] of Amelioration",B.ao,220)
s.v(60)
s.dX(200,!0)
A.i()
s=$.h=A.j("Potion[s] of Rejuvenation",B.P,b3)
s.v(80)
s.dX(b3,!0)
A.i()
s=$.h=A.j("Antidote",B.p,20)
s.v(2)
s.dX(0,!0)
s=A.a9(234,10,a6)
s.a5("magic/potion/resistance")
s.x=0.5
s.bG(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.N,50)
s.v(5)
s.bE(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.J,55)
s.v(6)
s.bE(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.E,60)
s.v(7)
n=$.db()
s.bE(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.K,65)
s.v(8)
m=$.eq()
s.bE(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.O,70)
s.v(9)
l=$.dI()
s.bE(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.da()
s.bE(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bE(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.F,85)
s.v(16)
j=$.dc()
s.bE(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.I,90)
s.v(19)
s.bE(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.A,95)
s.v(23)
i=$.bJ()
s.bE(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.P,100)
s.v(30)
h=$.dJ()
s.bE(h)
s=A.a9(235,10,a6)
s.a5("magic/potion/speed")
s.x=0.3
s.bG(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.A,25)
s.E(3,30)
s.hz(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.p,60)
s.E(18,50)
s.hz(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.B,150)
s.v(34)
s.x=0.25
s.hz(3,100)
s=A.a9(232,10,a6)
s.a5("magic/potion/bottled")
s.x=0.5
s.bG(100,1,8)
s.a.h(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.J,60)
s.v(4)
s.dV(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.D,100)
s.v(7)
s.dJ(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dV(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.F,160)
s.v(12)
s.ke(j,b4,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.B,240)
s.v(13)
s.dV(i,"poison","infects",10,!0)
A.i()
s=$.h=A.j("Bottled Earth",B.k,180)
s.v(16)
s.dJ(r,"dirt","crushes",58)
A.i()
s=$.h=A.j("Bottled Lightning",B.O,200)
s.v(18)
s.dJ(l,"lightning","shocks",68)
A.i()
s=$.h=A.j("Bottled Acid",B.A,220)
s.v(22)
s.ke(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dJ(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.E,280)
s.v(34)
s.dJ(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dV(h,"spirit","haunts",160,!0)
s=A.a9(226,20,a6)
s.a5("magic/scroll/teleportation")
s.x=0.3
s.bG(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.O,20)
s.v(2)
s.x=0.5
s.fj(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.P,28)
s.v(6)
s.fj(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.ao,52)
s.v(15)
s.fj(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.F,74)
s.v(26)
s.fj(54)
s=A.a9(228,20,a6)
s.a5("magic/scroll/detection")
s.bG(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.E,12)
s.E(1,10)
g=t.oO
s.eU(A.b([B.at],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.I,28)
s.E(8,30)
s.hn(A.b([B.at],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eU(A.b([B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.N,64)
s.E(12,40)
s.hn(A.b([B.ax],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.A,36)
s.E(12,36)
s.eU(A.b([B.at,B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.as,124)
s.v(30)
s.hn(A.b([B.at,B.ax],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.J,50)
g.E(6,19)
g.hK(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a3,70)
g.E(20,39)
g.hK(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.D,100)
g.E(40,69)
g.kM(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.F,150)
g.v(70)
g.hK(200)
g=A.a9(224,20,a6)
g.a5("magic/scroll/mapping")
g.x=0.25
g.bG(75,1,3)
g.a.h(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.B,70)
g.E(10,50)
g.hD(16)
A.i()
g=$.h=A.j("Explorer's Map",B.p,160)
g.E(30,70)
g.hD(32)
A.i()
g=$.h=A.j("Cartographer's Map",B.ag,240)
g.E(50,90)
g.hD(64)
A.i()
g=$.h=A.j("Wizard's Map",B.a3,360)
g.v(70)
g.kq(200,!0)
A.Cl()
A.CA()
g=A.a9(201,a6,a6)
g.a5("equipment/armor/helm")
g.x=0.5
g.bG(10,3,5)
A.i()
g=$.h=A.j("Leather Cap",B.k,50)
g.E(4,40)
g.CW=g.cy=2
g.a.h(0,p,12)
g.w=2
A.i()
g=$.h=A.j("Chainmail Coif",B.l,160)
g.E(10,60)
g.CW=g.cy=3
A.i()
g=$.h=A.j("Steel Cap",B.f,200)
g.E(25,80)
g.cy=4
g.CW=3
A.i()
g=$.h=A.j("Visored Helm",B.o,350)
g.v(40)
g.cy=5
g.CW=6
A.i()
g=$.h=A.j("Great Helm",B.u,550)
g.v(50)
g.cy=6
g.CW=8
A.a9(244,a6,a6).a5("equipment/armor/body/robe")
A.i()
g=$.h=A.j("Robe",B.D,30)
g.E(2,40)
g.x=0.5
g.cy=4
g.CW=null
g.a.h(0,p,15)
g.w=8
A.i()
g=$.h=A.j("Lined Robe",B.B,110)
g.v(6)
g.x=0.25
g.cy=6
g.CW=null
g.a.h(0,p,12)
g.w=8
g=A.a9(246,a6,a6)
g.a5(b5)
g.x=0.5
A.i()
g=$.h=A.j("Cloth Shirt",B.u,20)
g.E(2,30)
g.cy=3
g.CW=null
g.a.h(0,p,15)
g.w=4
A.i()
g=$.h=A.j("Leather Shirt",B.k,90)
g.E(5,50)
g.cy=6
g.CW=1
g.a.h(0,p,12)
g.w=4
A.i()
g=$.h=A.j("Jerkin",B.o,130)
g.E(8,70)
g.cy=8
g.CW=1
A.i()
g=$.h=A.j("Leather Armor",B.w,240)
g.E(12,90)
g.cy=11
g.CW=2
g.a.h(0,p,10)
g.w=4
A.i()
g=$.h=A.j("Padded Armor",B.l,320)
g.v(16)
g.cy=15
g.CW=3
g.a.h(0,p,8)
g.w=4
A.i()
g=$.h=A.j("Studded Armor",B.f,400)
g.v(20)
g.cy=22
g.CW=4
g.a.h(0,p,6)
g.w=4
g=A.a9(242,a6,a6)
g.a5(b5)
g.x=0.5
A.i()
g=$.h=A.j("Mail Hauberk",B.l,500)
g.v(25)
g.cy=28
g.CW=5
A.i()
g=$.h=A.j("Scale Mail",B.o,700)
g.v(35)
g.cy=36
g.CW=7
g=A.a9(251,a6,a6)
g.a5(b5)
g.x=0.5
A.i()
g=$.h=A.j("Plated Mail",B.l,b3)
g.v(40)
g.cy=40
g.CW=8
A.i()
g=$.h=A.j("Brigandine",B.k,1300)
g.v(50)
g.cy=46
g.CW=10
A.i()
g=$.h=A.j("Breastplate",B.f,2000)
g.v(60)
g.cy=52
g.CW=14
A.i()
g=$.h=A.j("Plate Armor",B.o,3400)
g.v(70)
g.cy=60
g.CW=18
A.a9(198,a6,a6).a5("equipment/armor/cloak")
A.i()
g=$.h=A.j("Cloak",B.F,70)
g.E(10,40)
g.x=0.5
g.cy=2
g.CW=1
g.a.h(0,p,20)
g.w=5
A.i()
g=$.h=A.j("Fur Cloak",B.w,140)
g.E(20,60)
g.x=0.3
g.cy=4
g.CW=2
g.a.h(0,p,16)
g.w=5
A.i()
g=$.h=A.j("Spidersilk Cloak",B.l,460)
g.v(40)
g.x=0.2
g.cy=6
g.CW=null
g.a.h(0,p,25)
g.w=3
g=A.a9(197,a6,a6)
g.a5("equipment/armor/gloves")
g.x=0.5
g.bG(20,5,4)
A.i()
g=$.h=A.j("(Pair[s] of )Gloves",B.I,170)
g.v(8)
g.cy=1
g.CW=null
g.a.h(0,p,7)
g.w=2
A.i()
g=$.h=A.j("(Set[s] of )Bracers",B.w,480)
g.v(17)
g.cy=2
g.CW=1
A.i()
g=$.h=A.j("(Pair[s] of )Gauntlets",B.l,800)
g.v(34)
g.cy=4
g.CW=2
g=A.a9(230,a6,a6)
g.a5("equipment/armor/shield")
g.x=0.5
g.bG(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.aH(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.w,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.aH(5,b6)
g.a.h(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.I,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.aH(8,"The targe blocks {2}.")
g.a.h(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.aH(10,b6)
A.i()
g=$.h=A.j("Steel Shield",B.o,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.aH(12,b6)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.aH(15,b6)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.aH(11,b6)
g.pl(5)
g=A.a9(236,a6,a6)
g.a5(b7)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Sandals",B.k,10)
g.E(2,20)
g.cy=1
g.CW=null
g.a.h(0,p,20)
g.w=3
A.i()
g=$.h=A.j("(Pair[s] of )Shoes",B.w,30)
g.E(8,40)
g.cy=2
g.CW=null
g.a.h(0,p,14)
g.w=3
g=A.a9(196,a6,a6)
g.a5(b7)
g.x=0.3
A.i()
g=$.h=A.j("(Pair[s] of )Boots",B.k,70)
g.v(14)
g.cy=6
g.CW=1
A.i()
g=$.h=A.j("(Pair[s] of )Plated Boots",B.f,250)
g.v(22)
g.cy=8
g.CW=2
A.i()
g=$.h=A.j("(Pair[s] of )Greaves",B.o,350)
g.v(47)
g.cy=12
g.CW=3
A.i()
A.y2()
A.y6()
A.yg()
g=A.an("a","natural/bug/spider",a6,b8,a6,a6,a6)
g.at=4
g.ax=2
g.Q=$.j5()
g=A.q("little brown spider",3,B.k,2,30,a6,0)
g.f=40
g.aj(b9,5,i)
g=$.z0()
f=A.bo("Seems harmless enough. What's that dripping from its pedipalps?",g,c0)
$.ce.fy=f
s=A.q("gray spider",7,B.f,20,30,a6,0)
s.f=30
s.aj(b9,5,i)
s=A.q("spiderling",9,B.u,14,35,a6,0)
s.f=50
s.aV(2,7)
s.aj(b9,10,i)
s=A.q("giant spider",12,B.F,40,a6,a6,0)
s.f=30
s.aj(b9,7,i)
f=A.bo("Like a large dog, if the dog had eight articulated legs, eight\n  glittering eyes, and wanted nothing more than to kill you.",g,c0)
$.ce.fy=f
s=A.an("b","natural/animal/mammal/bat",a6,a6,a6,1,a6)
s.at=2
s.ax=8
e=s.c
d=$.Y().a
s.c=new A.ai(e.a|d)
s.d=B.aj
s=A.q("brown bat",1,B.k,4,a6,0.5,0)
s.f=50
B.a.j(s.w,new A.aH(20,c1))
s.aV(2,4)
s.D(b9,3)
s=A.q("giant bat",4,B.w,24,a6,a6,0)
s.f=30
s.D(b9,6)
s=A.q("cave bat",6,B.o,30,a6,a6,0)
s.f=40
B.a.j(s.w,new A.aH(20,c1))
s.aV(2,5)
s.D(b9,6)
s=A.an("c","natural/animal/mammal/canine",25,a6,a6,a6,20)
s.at=5
s.ax=10
s.f=25
s=A.q("mangy cur",2,B.E,11,a6,a6,0)
s.aO(4)
s.D(b9,4)
B.a.j(s.dx,new A.bW(6,a6,10))
s=A.q("wild dog",4,B.o,20,a6,a6,0)
s.aO(4)
s.D(b9,6)
B.a.j(s.dx,new A.bW(8,a6,10))
s=A.q("mongrel",7,B.N,28,a6,a6,0)
s.aV(2,5)
s.D(b9,8)
B.a.j(s.dx,new A.bW(10,a6,10))
s=A.q("wolf",26,B.u,60,a6,a6,0)
s.aV(3,6)
s.D(b9,12)
B.a.j(s.dx,new A.bW(10,a6,10))
s=A.q("varg",30,B.f,80,a6,a6,0)
s.aV(2,6)
s.D(b9,16)
B.a.j(s.dx,new A.bW(10,a6,10))
s=A.q("Skoll",36,B.h,200,a6,a6,0)
s.i0()
s.ad(new A.ah(c2),5,9)
s.D(b9,20)
B.a.j(s.dx,new A.bW(10,a6,10))
s=A.q("Hati",40,B.D,250,a6,a6,0)
s.i0()
s.ad(new A.ah(c2),5,9)
s.D(b9,23)
B.a.j(s.dx,new A.bW(10,a6,10))
s=A.q("Fenrir",44,B.l,300,a6,a6,0)
s.i0()
s.ad(new A.ah(c2),3,5)
s.kr("Skoll")
s.kr("Hati")
s.D(b9,26)
B.a.j(s.dx,new A.bW(10,a6,10))
A.BT()
s=A.an("e","magical/eye",a6,"immobile",a6,a6,a6)
s.at=16
s.ax=1
B.a.j(s.w,new A.aH(10,"{1} blinks out of the way."))
s.c=new A.ai(s.c.a|d)
s.d=B.aj
s=A.q("lazy eye",5,B.J,20,a6,a6,0)
s.D(c3,8)
s.av(c4,c5,l,12,8,5)
s=A.q("mad eye",9,B.a5,40,a6,a6,0)
s.D(c3,8)
s.bl(m,15,8,6)
s=A.q("floating eye",15,B.E,60,a6,a6,0)
s.D(c3,10)
s.av(c4,c5,l,24,6,4)
B.a.j(s.dx,new A.bE(7,10))
s=A.q("baleful eye",20,B.N,80,a6,a6,0)
s.D(c6,12)
s.bl(p,20,8,4)
s.av("jet",c7,j,20,8,4)
B.a.j(s.dx,new A.bE(9,10))
s=A.q("malevolent eye",30,B.m,120,a6,a6,0)
s.D(c6,20)
s.bl(n,20,10,4)
s.bl(k,20,10,4)
s.c2(p,30,a6,7)
B.a.j(s.dx,new A.bE(9,10))
s=A.q("murderous eye",40,B.a0,180,a6,a6,0)
s.D(c6,30)
s.bl(q,40,8,7)
s.av("stone",c8,r,40,8,7)
s.c2(o,30,a6,7)
B.a.j(s.dx,new A.bE(9,10))
s=A.q("watcher",60,B.o,300,a6,a6,0)
s.D("see[s]",50)
s.bl(n,40,10,7)
s.c2(n,30,a6,7)
s.bl(k,50,10,7)
s.c2(k,40,a6,7)
s=A.an("f","natural/animal/mammal/feline",40,a6,a6,a6,a6)
s.at=10
s.ax=8
s=A.q("stray cat",1,B.h,11,a6,a6,1)
s.f=30
B.a.j(s.dx,new A.b7(B.cp,4))
s.D(b9,4)
s.D(c9,3)
s=A.an("g","humanoid/hob/goblin",a6,a6,a6,a6,a6)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bK().a
s.c=new A.ai(e.a|c)
e=A.q("goblin peon",4,B.I,30,a6,a6,0)
e.f=20
e.aO(4)
e.D(d0,8)
B.a.j(e.dx,new A.b7(B.aa,8))
e.C(d1,20)
e.C(d2,5)
e.C(d3,10)
e=A.q("goblin archer",6,B.p,36,a6,a6,0)
e.aO(2)
e.ad(new A.ah(d4),0,3)
e.D(d0,4)
s=$.aF()
e.av(d5,c8,s,8,8,3)
e.C(d1,30)
e.C("bow",10)
e.C("dagger",5)
e.C(d3,10)
e=A.q("goblin fighter",6,B.k,58,a6,a6,0)
e.aO(2)
e.ad(new A.ah(d4),1,4)
e.D(d0,12)
e.C(d1,20)
e.C(d2,10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
e=A.q("goblin warrior",8,B.o,68,a6,a6,0)
e.aO(2)
e.ad(new A.ah(d4),1,5)
e.D(d0,16)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e.C(d7,5)
e.C(d3,10)
b=t.s
B.a.T(e.x,A.b(d8.split(c0),b))
e=A.q("goblin mage",9,B.F,50,a6,a6,0)
e.ad(new A.ah(d4),1,4)
e.D("whip[s]",7)
e.bl(p,12,8,12)
e.av(c4,c5,l,16,6,12)
e.C(d1,20)
e.C(d9,10)
e.C(e0,30)
e=A.q("goblin ranger",12,B.B,60,a6,a6,0)
e.ad(new A.ah(d4),0,5)
e.D(d0,10)
e.av(d5,c8,s,12,8,3)
e.C(d1,20)
e.C("bow",15)
e.C(d6,10)
e.C(e0,20)
e=A.q("Erlkonig, the Goblin Prince",14,B.l,120,a6,a6,0)
e.cQ(B.aI)
e.ad(new A.ah(d4),4,8)
e.D(b1,10)
e.D(e1,14)
e.bl(k,20,10,20)
e.hs(d1,3)
e.oY(e2,2,4)
e.eV(e0,3,4)
B.a.T(e.x,A.b(d8.split(c0),b))
e=A.an("i","bug",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.q("giant cockroach[es]",1,B.w,4,a6,0.4,0)
e.aV(2,5)
e.d=B.bA
e.D(e3,2)
B.a.j(e.dx,new A.bS(!1,4))
e.C(a8,30)
f=A.bo("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,c0)
$.ce.fy=f
e=A.q("giant centipede",3,B.m,14,a6,a6,2)
e.f=20
e.D(e3,4)
e.D(b9,8)
e=A.an("i","natural/bug/fly",a6,b8,a6,a6,3)
e.at=5
e.ax=2
e.f=40
e=A.q("firefly",8,B.N,6,a6,a6,1)
e.f=70
e.aV(3,8)
e.aj(b9,12,p)
e.C(a8,40)
e=A.an("j","magical/jelly",a6,b8,0.7,-1,a6)
e.at=3
e.ax=1
e.f=30
e.d=B.aW
e=A.q("green jelly",1,B.A,10,a6,a6,0)
a=e.Q=$.vZ()
e.D(e3,3)
e=A.an("j","jelly",a6,e4,0.6,a6,a6)
e.at=2
e.ax=1
e.d=B.bA
e.aO(4)
e=A.q("green slime",2,B.p,8,a6,a6,0)
e.Q=a
e.D(e3,4)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("frosty slime",4,B.u,14,a6,a6,0)
e.Q=$.wb()
e.aj(e3,5,o)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("mud slime",6,B.k,20,a6,a6,0)
e.Q=$.vR()
e.aj(e3,8,r)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("smoking slime",15,B.m,30,a6,a6,0)
e.as=4
e.Q=$.w2()
e.aj(e3,10,p)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("sparkling slime",20,B.P,40,a6,a6,0)
e.as=3
e.Q=$.wa()
e.aj(e3,12,l)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("caustic slime",25,B.ag,50,a6,a6,0)
e.Q=a
e.aj(e3,13,q)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("virulent slime",35,B.B,60,a6,a6,0)
e.Q=a
e.aj(e3,14,i)
B.a.j(e.dx,new A.bS(!1,4))
e=A.q("ectoplasm",45,B.l,40,a6,a6,0)
e.Q=$.vY()
e.aj(e3,15,h)
B.a.j(e.dx,new A.bS(!1,4))
e=A.an("k","humanoid/hob/kobold",a6,e5,a6,a6,a6)
e.at=10
e.ax=4
e.f=15
e=A.q("scurrilous imp",1,B.a5,12,a6,a6,0)
e.f=20
e.aO(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b7(B.aa,5))
e.pf()
e.C(d1,20)
e.C(e6,10)
e.C("speed",20)
e=A.q("vexing imp",2,B.P,16,a6,a6,0)
e.aO(2)
e.ad(new A.ah(e7),0,1)
e.D(c9,4)
B.a.j(e.dx,new A.b7(B.aa,5))
e.av(c4,c5,l,6,6,5)
e.C(d1,25)
e.C("teleportation",20)
A.an("k",e7,a6,a6,a6,a6,a6).f=20
e=A.q(e7,3,B.m,20,a6,a6,0)
e.aO(3)
e.ad(new A.ah(c2),0,3)
e.D(e8,4)
B.a.j(e.dx,new A.bE(6,10))
e.C(d1,25)
e.C(e2,10)
e.C(e0,20)
e=A.q("kobold shaman",4,B.F,20,a6,a6,0)
e.aO(2)
e.ad(new A.ah(c2),0,3)
e.D(b1,4)
e.av("jet",c7,j,8,8,10)
e.C(d1,25)
e.C(d9,10)
e.C(e0,20)
e=A.q("kobold trickster",5,B.h,24,a6,a6,0)
e.D(b1,5)
a=e.dx
B.a.j(a,new A.b7(B.aa,5))
e.av(c4,c5,l,8,6,5)
B.a.j(a,new A.bE(6,7))
e.hy(7)
e.C(d1,35)
e.C(e0,20)
e=A.q("kobold priest",6,B.D,30,a6,a6,0)
e.aO(2)
e.ad(new A.ah(e7),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.hf(10,15))
e.hy(7)
e.C(d1,20)
e.C(e6,10)
e.C(d9,10)
e.C(e0,30)
e=A.q("imp incanter",7,B.O,33,a6,a6,0)
e.aO(2)
e.ad(new A.ah(e7),1,3)
e.ad(new A.ah(c2),0,3)
e.D(c9,4)
B.a.j(e.dx,new A.b7(B.aa,6))
e.av(c4,c5,l,10,6,5)
e.C(d1,30)
e.C(d9,10)
e.C(e0,35)
B.a.T(e.x,A.b(e5.split(c0),b))
e=A.q("imp warlock",8,B.ao,46,a6,a6,0)
e.ad(new A.ah(e7),2,5)
e.ad(new A.ah(c2),0,3)
e.D(d0,5)
e.av("ice","freezes",o,12,8,8)
e.av(c4,c5,l,12,6,8)
e.C(d1,30)
e.C("staff",20)
e.C(d9,10)
e.C(e0,30)
e=A.q("Feng",10,B.N,80,a6,a6,1)
e.f=10
e.cQ(B.aI)
e.ad(new A.ah(e7),4,10)
e.ad(new A.ah(c2),1,3)
e.D(d0,5)
a=e.dx
B.a.j(a,new A.b7(B.aa,7))
B.a.j(a,new A.bE(6,5))
B.a.j(a,new A.bE(30,50))
e.c2(l,12,a6,8)
e.eV(d1,3,5)
e.hu(d2,5,20)
e.hu(d6,5,30)
e.eV(e0,2,5)
e=A.an("l","humanoid/saurian",a6,b8,a6,a6,a6)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.aH(5,"{2} [are|is] deflected by its scales."))
e=A.q("lizard guard",11,B.h,26,a6,a6,0)
e.D(e9,8)
e.D(b9,10)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.q("lizard protector",15,B.A,30,a6,a6,0)
e.ad(new A.ah(f0),0,2)
e.D(e9,10)
e.D(b9,14)
e.C(d1,30)
e.C(d6,10)
e.C(d2,10)
e=A.q("armored lizard",17,B.o,38,a6,a6,0)
e.ad(new A.ah(f0),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,30)
e.C(d6,20)
e.C(d2,10)
e=A.q("scaled guardian",19,B.l,50,a6,a6,0)
e.ad(new A.ah(f0),0,3)
e.ad(new A.ah(f1),0,2)
e.D(e9,10)
e.D(b9,15)
e.C(d1,40)
e.C(e2,10)
e=A.q(f0,21,B.N,64,a6,a6,0)
e.ad(new A.ah(f0),1,4)
e.ad(new A.ah(f1),0,2)
e.D(e9,12)
e.D(b9,17)
e.C(d1,50)
e.C(e2,10)
e=A.an("o","humanoid/orcus/orc",a6,a6,a6,a6,a6)
e.at=7
e.ax=6
e.f=10
e.c=new A.ai(e.c.a|c)
B.a.T(e.x,A.b(d8.split(c0),b))
e=A.q("orc",28,B.N,100,a6,a6,0)
e.aV(3,6)
e.D(d0,12)
e.C(d1,20)
e.C(e2,5)
e.C(d2,5)
e=A.q("orc brute",29,B.ag,120,a6,a6,0)
e.ad(new A.ah("orc"),2,5)
e.D("bash[es]",16)
e.C(d1,20)
e.C(e6,10)
e.C(d6,10)
e=A.q("orc soldier",30,B.o,140,a6,a6,0)
e.aV(4,6)
e.ad(new A.ah("orcus"),1,5)
e.D(d0,20)
e.C(d1,25)
e.C("axe",10)
e.C(d6,10)
e=A.q("orc chieftain",31,B.m,180,a6,a6,0)
e.ad(new A.ah("orcus"),2,10)
e.D(d0,10)
e.oX(d1,2,40)
e.C(e2,20)
e.C(a7,20)
e=A.an("p","humanoid/human",a6,a6,a6,a6,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ai(e.c.a|c)
e.as=2
e=A.q("Harold the Misfortunate",2,B.O,30,a6,a6,0)
e.cQ(B.aI)
e.D(b1,3)
B.a.j(e.dx,new A.b7(B.aG,5))
e.C(d1,80)
e.ht(f2,4,20)
e.ht(d6,4,30)
e.ht(e0,4,40)
e=A.q("hapless adventurer",1,B.E,14,15,a6,0)
e.f=30
e.D(b1,3)
B.a.j(e.dx,new A.b7(B.aG,12))
e.C(d1,15)
e.C(f2,10)
e.C(d6,15)
e.C(e0,20)
B.a.T(e.x,A.b(e5.split(c0),b))
e=A.q("simpering knave",2,B.N,17,a6,a6,0)
e.D(b1,2)
e.D(d0,4)
e.C(d1,20)
e.C("whip",10)
e.C(d6,15)
e.C(e0,20)
B.a.T(e.x,A.b(e5.split(c0),b))
e=A.q("decrepit mage",3,B.P,20,a6,a6,0)
e.f=30
e.D(b1,2)
e.av(c4,c5,l,8,6,10)
e.C(d1,15)
e.C(e0,30)
e.C("dagger",5)
e.C("staff",5)
e.C(d9,10)
e.C("boots",5)
e=A.q("unlucky ranger",5,B.p,30,25,a6,0)
e.f=20
e.D(e1,2)
e.av(d5,c8,s,2,8,4)
B.a.j(e.dx,new A.b7(B.aG,10))
e.C(d1,20)
e.C("potion",20)
e.C("bow",10)
e.C("body",20)
e=A.q("drunken priest",5,B.D,34,a6,a6,0)
e.f=40
e.D(b1,8)
s=e.dx
B.a.j(s,new A.hf(8,15))
B.a.j(s,new A.b7(B.aG,5))
e.C(d1,35)
e.C("scroll",20)
e.C(e6,10)
e.C(d9,10)
B.a.T(e.x,A.b(b8.split(c0),b))
e=A.an("r","natural/animal/mammal/rodent",30,a6,a6,a6,a6)
e.at=4
e.ax=6
e.f=30
e.d=B.aW
e=A.q("[mouse|mice]",1,B.I,3,a6,0.7,0)
e.aO(6)
e.D(b9,3)
e.D(c9,2)
e=A.q("sewer rat",2,B.f,8,a6,a6,0)
e.f=20
e.aO(4)
e.D(b9,4)
e.D(c9,3)
e=A.q("sickly rat",3,B.p,10,a6,a6,0)
e.aj(b9,8,i)
e.D(c9,4)
e=A.q("plague rat",6,B.A,20,a6,a6,0)
e.aO(4)
e.aj(b9,15,i)
e.D(c9,8)
e=A.q("giant rat",8,B.N,40,a6,a6,0)
e.D(b9,12)
e.D(c9,8)
e=A.q("The Rat King",8,B.a0,120,a6,a6,0)
e.cQ(B.aI)
e.D(b9,16)
e.D(c9,10)
e.ad(new A.ah("rodent"),8,16)
e.hs(d1,3)
e.hu(a7,10,50)
e=A.an("s","natural/bug/slug",5,b8,a6,-3,2)
e.at=3
e.ax=1
e.f=30
A.q("giant slug",3,B.af,20,a6,a6,0).D(e3,8)
A.q("suppurating slug",6,B.A,50,a6,a6,0).aj(e3,12,i)
A.q("acidic slug",9,B.af,70,a6,a6,0).aj(e3,16,q)
e=A.an("v","natural/plant/vine",a6,e4,a6,a6,a6)
e.ax=e.at=10
A.q("choker",16,B.p,40,a6,a6,0).D(f3,12)
e=A.q("nightshade",19,B.O,50,a6,a6,0)
e.lb(10,3)
e.aj("touch[es]",12,i)
e=A.q("creeper",22,B.A,60,a6,a6,0)
B.a.j(e.dx,new A.bS(!0,10))
e.lb(10,3)
e.D(f3,8)
A.q("strangler",26,B.B,80,a6,a6,0).D(f3,14)
s=A.an("w",f4,15,b8,a6,a6,a6)
s.at=2
s.ax=3
s.f=40
s=A.q("blood worm",1,B.a0,4,a6,0.5,0)
s.aV(3,7)
s.D(e3,5)
s=A.q("fire worm",10,B.N,6,a6,a6,0)
s.aV(2,6)
s.d=B.aW
s.aj(e3,5,p)
A.an("w",f4,10,b8,a6,a6,a6).f=30
A.q("giant earthworm",3,B.a5,30,a6,a6,-2).D(e3,5)
A.q("giant cave worm",7,B.I,80,a6,a6,-2).aj(e3,12,q)
s=A.an("x","undead/skeleton",a6,a6,a6,a6,a6)
s.ax=s.at=4
s.f=30
s=A.q(f5,3,B.f,18,a6,3,-1)
s.f=40
s.D(e9,6)
s=A.q(f6,4,B.o,26,a6,4,0)
s.f=40
s.D(e9,8)
s=A.q(f7,7,B.I,33,a6,3,-2)
s.f=40
s.D(b9,10)
s=A.q(f8,10,B.E,44,a6,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ai(s.c.a|c)
s.D(e9,7)
s.C(d1,30)
s.C(f2,10)
s.C(d6,10)
s=A.q(f9,12,B.ag,50,a6,4,0)
s.D(b9,9)
s.D("kick[s]",7)
s.C(d1,30)
s.C(d6,10)
s=A.q(g0,13,B.A,60,a6,5,0)
s.c=new A.ai(s.c.a|c)
s.D(e9,7)
e=s.dx
B.a.j(e,new A.by(A.aP(f9),A.aP(f6),g1,1))
B.a.j(e,new A.by(A.aP(f9),A.aP(f5),g2,1))
s.C(d1,30)
s.C(f2,5)
s.C(d6,10)
s=A.q("skeleton",15,B.u,70,a6,6,0)
s.c=new A.ai(s.c.a|c)
s.D(e9,7)
s.D(b9,9)
e=s.dx
B.a.j(e,new A.by(A.aP(f8),A.aP(f7),g3,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f6),g1,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f5),g2,1))
s.C(d1,40)
s.C(f2,10)
s.C(d6,10)
s=A.q("skeleton warrior",17,B.a5,90,a6,6,0)
s.c=new A.ai(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
e=s.dx
B.a.j(e,new A.by(A.aP(f8),A.aP(f7),g3,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f6),g1,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f5),g2,1))
s.C(d1,50)
s.C(f2,20)
s.C(d6,15)
s=A.q("robed skeleton",19,B.O,110,a6,4,0)
s.c=new A.ai(s.c.a|c)
s.D(e1,13)
s.D(d0,10)
s.bl(l,15,10,8)
e=s.dx
B.a.j(e,new A.by(A.aP(f8),A.aP(f7),g3,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f6),g1,1))
B.a.j(e,new A.by(A.aP(g0),A.aP(f5),g2,1))
s.C(d1,50)
s.C(e0,20)
s.C(d6,10)
s=A.an("B","natural/animal/bird",a6,a6,a6,a6,a6)
s.at=8
s.ax=6
B.a.j(s.w,new A.aH(10,"{1} flaps out of the way."))
s.c=new A.ai(s.c.a|d)
s.aV(3,6)
s=A.q("crow",4,B.l,10,a6,a6,2)
s.f=30
s.D(b9,5)
s.C(a9,30)
f=A.bo('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,c0)
$.ce.fy=f
s=A.q("raven",6,B.f,16,a6,a6,0)
s.f=15
s.D(b9,5)
s.D(e9,4)
s.C(a9,30)
B.a.T(s.x,A.b(d8.split(c0),b))
f=A.bo("Its black eyes gleam with a malevolent intelligence.",g,c0)
$.ce.fy=f
A.C1()
s=A.an("F","humanoid/hob/fae",a6,e5,a6,2,a6)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.aH(10,c1))
s.c=new A.ai(s.c.a|d)
s.d=B.aj
s=A.q("forest sprite",2,B.ag,6,a6,a6,0)
s.D(c9,3)
B.a.j(s.dx,new A.b7(B.aa,4))
s.av(c4,c5,l,4,6,12)
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.q("house sprite",5,B.J,10,a6,a6,0)
s.D(e8,5)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.av("stone",c8,r,4,8,10)
B.a.j(g,new A.bE(4,8))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.q("mischievous sprite",7,B.a5,24,a6,a6,0)
s.D(e8,6)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.bl(m,8,8,10)
B.a.j(g,new A.bE(5,10))
s.C(d1,10)
s.C(e0,30)
s.C(a8,30)
s=A.q("Tink",8,B.p,40,a6,a6,0)
s.cQ(B.ct)
s.f=10
s.D(e8,8)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.av(c4,c5,l,4,6,8)
s.bl(m,7,8,10)
B.a.j(g,new A.bE(5,10))
s.hs(d1,2)
s.eV(e0,3,3)
s=A.an("H","mythical/beast/hybrid",a6,a6,a6,a6,a6)
s.at=10
s.ax=12
s=A.q("harpy",25,B.O,50,a6,a6,2)
s.c=new A.ai(s.c.a|d)
s.aV(2,5)
s.D(b9,10)
s.D(c9,15)
d=s.dx
B.a.j(d,new A.bW(10,"screeches",10))
B.a.j(d,new A.b7(B.co,5))
s.C(a9,50)
s=A.q("griffin",35,B.h,200,a6,a6,0)
s.D(b9,20)
s.D(c9,15)
s.C(a9,50)
A.an("Q","magical",a6,a6,a6,a6,a6)
s=A.q("Nameless Unmaker",100,B.P,b3,a6,a6,2)
s.cQ(B.y)
s.ax=s.at=16
s.aj("crushe[s]",250,r)
s.aj("blast[s]",200,l)
s.c2(k,500,a6,10)
B.a.T(s.x,A.b(b8.split(c0),b))
s.c=new A.ai(s.c.a|c)
a0=A.vw(20,new A.aM(100,A.aa(a7,s.CW,B.hH)))
B.a.j(s.dy,a0)
A.an("R","natural/animal/herp",a6,a6,a6,a6,a6)
s=A.q("frog",1,B.A,4,30,a6,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ai(s.c.a|$.iX().a)
s.D("hop[s] on",2)
s=A.an("R","natural/animal/herp/salamander",30,a6,a6,a6,a6)
s.at=6
s.ax=5
s.f=20
s.d=B.aj
s.as=3
s=A.q("juvenile salamander",7,B.a5,20,a6,a6,0)
s.aj(b9,14,p)
s.c2(p,20,4,16)
s=A.q(f1,13,B.m,30,a6,a6,0)
s.aj(b9,18,p)
s.c2(p,30,5,16)
s=A.q("three-headed salamander",23,B.a0,90,a6,a6,0)
s.aj(b9,24,p)
s.c2(p,20,5,10)
s=A.an("S","natural/animal/herp/snake",30,a6,a6,a6,a6)
s.at=4
s.ax=7
s.f=30
A.q("water snake",1,B.A,11,a6,a6,0).D(b9,3)
A.q("brown snake",3,B.k,25,a6,a6,0).D(b9,4)
A.q("cave snake",8,B.o,40,a6,a6,0).D(b9,10)
A.fF()
A.zd($.cj().gp9())
A.b0()
$.bi="body"
s=A.J(g4,1)
s.v(40)
s.a_(2,4,3)
s.J(400,2)
s.bH(-2)
g=t.Q
g.a(A.a4())
s.as=A.a4()
s.R(n)
s=A.J(g5,0.3)
s.v(60)
s.a_(4,4,6)
s.J(600,3)
s.bH(-3)
s.as=A.a4()
e=t.S
s.ch.h(0,B.ae,g.a(A.fG(1,e)))
s.R(m)
s.R(n)
A.b0()
$.bi="cloak"
s=A.J(g4,1)
s.E(40,80)
s.a_(4,4,6)
s.J(300,2)
s.bH(-1)
s.as=A.a4()
s.R(n)
s=A.J(g5,0.3)
s.v(60)
s.a_(5,4,8)
s.J(500,3)
s.bH(-2)
s.as=A.a4()
s.ch.h(0,B.ae,g.a(A.fG(2,e)))
s.R(m)
s.R(n)
A.b0()
$.bi="boots"
s=A.J(g4,1)
s.v(50)
s.a_(2,4,5)
s.J(400,2.5)
s.bH(-2)
s.as=A.a4()
A.b0()
$.bi="helm"
s=A.J(g4,1)
s.E(40,80)
s.a_(1,4,3)
s.J(400,2)
s.bH(-1)
s.as=A.a4()
s.ch.h(0,B.a2,g.a(A.fG(1,e)))
s.R(n)
s=A.J(g5,0.3)
s.v(60)
s.b5(2,4)
s.J(600,3)
s.bH(-1)
s.as=A.a4()
s.ch.h(0,B.a2,A.a4())
s.R(m)
s.R(n)
A.b0()
$.bi="shield"
s=A.J(g4,1)
s.E(40,80)
s.a_(3,4,5)
s.J(300,1.6)
s.bB(0.8)
s.aD(A.b1())
s.R(n)
s=A.J(g5,0.5)
s.v(50)
s.b5(1,4)
s.J(500,2.2)
s.bB(0.6)
d=t.i
s.aD(A.fG(1.5,d))
s.ch.h(0,B.a2,A.a4())
s.R(m)
s.R(n)
A.b0()
$.bi="body"
s=A.J(g6,1)
s.v(30)
s.a_(4,3,6)
s.J(400,2)
s.bH(2)
s.as=A.a4()
s.R(r)
s.R(k)
A.b0()
$.bi="helm"
s=A.J(g6,1)
s.v(50)
s.a_(3,4,5)
s.J(300,2)
s.bH(1)
s.as=A.a4()
s.R(r)
s.R(k)
A.b0()
$.bi="gloves"
s=A.J(g6,1)
s.v(50)
s.J(300,2)
s.a_(2,4,4)
s.bH(1)
s.as=A.a4()
s.ch.h(0,B.ak,g.a(A.fG(1,e)))
s.R(r)
s.R(k)
A.b0()
$.bi="boots"
s=A.J(g6,1)
s.v(50)
s.a_(3,4,5)
s.J(300,2)
s.bH(1)
s.as=A.a4()
s.R(r)
s.R(k)
A.b0()
$.bi="shield"
s=A.J(g6,1)
s.v(40)
s.a_(4,3,8)
s.J(200,2.2)
s.bB(1.2)
s.dO(A.a4(),A.b1())
s.R(r)
s.R(k)
A.b0()
$.bi="armor"
s=A.J("_ of Resist Air",0.5)
s.E(10,50)
s.J(200,1.2)
s.R(m)
s=A.J("_ of Resist Earth",0.5)
s.E(11,51)
s.J(230,1.2)
s.R(r)
s=A.J("_ of Resist Fire",0.5)
s.E(12,52)
s.J(260,1.3)
s.R(p)
s=A.J("_ of Resist Water",0.5)
s.E(13,53)
s.J(310,1.2)
s.R(j)
s=A.J("_ of Resist Acid",0.3)
s.E(14,54)
s.J(340,1.3)
s.R(q)
s=A.J("_ of Resist Cold",0.5)
s.E(15,55)
s.J(400,1.2)
s.R(o)
s=A.J("_ of Resist Lightning",0.3)
s.E(16,56)
s.J(430,1.2)
s.R(l)
s=A.J("_ of Resist Poison",0.25)
s.E(17,57)
s.J(460,1.5)
s.R(i)
s=A.J("_ of Resist Dark",0.25)
s.E(18,58)
s.J(490,1.3)
s.R(k)
s=A.J("_ of Resist Light",0.25)
s.E(19,59)
s.J(490,1.3)
s.R(n)
s=A.J("_ of Resist Spirit",0.4)
s.E(10,60)
s.J(520,1.4)
s.R(h)
s=A.J("_ of Resist Nature",0.3)
s.v(40)
s.J(3000,4)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(o)
s.R(l)
s=A.J("_ of Resist Destruction",0.3)
s.v(40)
s.J(1300,2.6)
s.R(q)
s.R(p)
s.R(l)
s.R(i)
s=A.J("_ of Resist Evil",0.3)
s.v(60)
s.J(1500,3)
s.R(q)
s.R(i)
s.R(k)
s.R(h)
s=A.J("_ of Resistance",0.3)
s.v(70)
s.J(5000,6)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(q)
s.R(o)
s.R(l)
s.R(i)
s.R(k)
s.R(n)
s.R(h)
s=A.J("_ of Protection from Air",0.25)
s.v(36)
s.b5(2,5)
s.J(500,1.4)
s.bu(m,A.a4())
m=A.J("_ of Protection from Earth",0.25)
m.v(37)
m.b5(2,5)
m.J(500,1.4)
m.bu(r,A.a4())
r=A.J("_ of Protection from Fire",0.25)
r.v(38)
r.b5(2,5)
r.J(500,1.5)
r.bu(p,A.a4())
r=A.J("_ of Protection from Water",0.25)
r.v(39)
r.b5(2,5)
r.J(500,1.4)
r.bu(j,A.a4())
j=A.J("_ of Protection from Acid",0.2)
j.v(40)
j.b5(2,5)
j.J(500,1.5)
j.bu(q,A.a4())
q=A.J("_ of Protection from Cold",0.25)
q.v(41)
q.b5(2,5)
q.J(500,1.4)
q.bu(o,A.a4())
q=A.J("_ of Protection from Lightning",0.16)
q.v(42)
q.b5(2,5)
q.J(500,1.4)
q.bu(l,A.a4())
q=A.J("_ of Protection from Poison",0.14)
q.v(43)
q.b5(2,5)
q.J(b3,1.6)
q.bu(i,A.a4())
q=A.J("_ of Protection from Dark",0.14)
q.v(44)
q.b5(2,5)
q.J(500,1.5)
q.bu(k,A.a4())
q=A.J("_ of Protection from Light",0.14)
q.v(45)
q.b5(2,5)
q.J(500,1.5)
q.bu(n,A.a4())
q=A.J("_ of Protection from Spirit",0.13)
q.v(46)
q.b5(2,5)
q.J(800,1.6)
q.bu(h,A.a4())
A.b0()
$.bi="weapon"
q=A.J("_ of Harming",1)
q.E(1,30)
q.a_(1,3,2)
q.J(100,1.2)
q.bB(1.05)
q.dN(A.a4())
q=A.J("_ of Wounding",1)
q.E(10,50)
q.a_(3,3,5)
q.J(140,1.3)
q.bB(1.07)
q.dN(A.a4())
q=A.J("_ of Maiming",1)
q.E(25,75)
q.a_(2,3,4)
q.J(180,1.5)
q.bB(1.09)
q.dO(A.a4(),A.b1())
q=A.J("_ of Slaying",1)
q.v(45)
q.a_(4,2,8)
q.J(200,2)
q.bB(1.11)
q.dO(A.a4(),A.b1())
A.b0()
$.bi="bow"
q=A.J("Ash _",1)
q.E(10,70)
q.a_(2,4,4)
q.J(300,1.3)
q.bB(0.8)
q.dN(A.a4())
q=A.J("Yew _",1)
q.v(20)
q.a_(5,3,8)
q.J(500,1.4)
q.bB(0.8)
q.dN(A.a4())
A.b0()
$.bi="weapon"
q=A.J("Glimmering _",0.3)
q.E(20,60)
q.a_(2,3,3)
q.J(300,1.3)
q.aD(A.b1())
q.bA(n)
q=A.J("Shining _",0.25)
q.E(32,90)
q.a_(4,3,5)
q.J(400,1.6)
q.aD(A.b1())
q.bA(n)
q=A.J("Radiant _",0.2)
q.v(48)
q.a_(6,3,8)
q.J(500,2)
q.aD(A.b1())
q.cg(n,2)
n=A.J("Dim _",0.3)
n.E(16,60)
n.a_(2,3,3)
n.J(300,1.3)
n.aD(A.b1())
n.bA(k)
n=A.J("Dark _",0.25)
n.E(32,80)
n.a_(4,3,5)
n.J(400,1.6)
n.aD(A.b1())
n.bA(k)
n=A.J("Black _",0.2)
n.v(56)
n.a_(6,3,8)
n.J(500,2)
n.aD(A.b1())
n.cg(k,2)
k=A.J("Chilling _",0.3)
k.E(20,65)
k.a_(4,3,6)
k.J(300,1.5)
k.aD(A.b1())
k.bA(o)
k=A.J("Freezing _",0.25)
k.v(40)
k.a_(6,3,9)
k.J(400,1.7)
k.aD(A.b1())
k.cg(o,2)
o=A.J("Burning _",0.3)
o.E(20,60)
o.a_(3,3,5)
o.J(300,1.5)
o.aD(A.b1())
o.bA(p)
o=A.J("Flaming _",0.25)
o.E(40,90)
o.a_(6,3,7)
o.J(360,1.8)
o.aD(A.b1())
o.bA(p)
o=A.J("Searing _",0.2)
o.v(60)
o.a_(8,3,11)
o.J(500,2.1)
o.aD(A.b1())
o.cg(p,2)
p=A.J("Electric _",0.2)
p.v(50)
p.a_(4,3,7)
p.J(300,1.5)
p.aD(A.b1())
p.bA(l)
p=A.J("Shocking _",0.2)
p.v(70)
p.a_(8,3,11)
p.J(400,2)
p.aD(A.b1())
p.cg(l,2)
l=A.J("Poisonous _",0.2)
l.E(35,90)
l.a_(1,4,2)
l.J(500,1.5)
l.aD(A.b1())
l.bA(i)
l=A.J("Venomous _",0.2)
l.v(70)
l.a_(3,4,5)
l.J(800,1.8)
l.aD(A.b1())
l.cg(i,2)
i=A.J("Ghostly _",0.2)
i.E(45,85)
i.a_(4,3,6)
i.J(300,1.6)
i.bB(0.7)
i.aD(A.b1())
i.bA(h)
i=A.J("Spiritual _",0.15)
i.v(80)
i.a_(7,3,10)
i.J(400,2.1)
i.bB(0.7)
i.aD(A.b1())
i.cg(h,2)
A.z7()
A.b0()
$.bi="helm"
h=A.J("_ of Acumen",1)
h.E(35,55)
h.b5(1,4)
h.J(300,2)
h.ch.h(0,B.a2,A.a4())
h=A.J("_ of Wisdom",1)
h.E(45,75)
h.a_(2,4,3)
h.J(500,3)
h.ch.h(0,B.a2,A.a4())
h=A.J("_ of Sagacity",1)
h.v(75)
h.a_(4,4,5)
h.J(700,4)
h.ch.h(0,B.a2,A.a4())
h=A.J("_ of Genius",1)
h.v(85)
h.a_(6,4,7)
h.J(b3,5)
h.ch.h(0,B.a2,A.a4())
A.b0()
h=t.N
A.iW("The General's General Store",A.C(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b2,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.iW("Dirk's Death Emporium",A.C(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.iW("Skullduggery and Bamboozelry",A.C(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.iW("Garthag's Armoury",A.C(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.iW("Unguence the Alchemist",A.C(["Soothing Balm",1,"Mending Salve",1,b2,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.iW("The Droll Magery",A.C(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.y2()
A.y6()
A.yg()
A.iU(new A.ie(A.b([new A.aM(30,A.aa("Skull",a6,a6)),new A.aM(30,A.aa(d1,a6,a6)),new A.aM(20,A.aa(f2,a6,a6)),new A.aM(20,A.aa(d6,a6,a6)),new A.aM(20,A.aa("food",a6,a6)),new A.aM(15,A.aa(e0,a6,a6))],t.f8)),a6,B.aW,2)
A.iU(A.aa("food",a6,a6),1,a6,10)
A.iU(A.aa("Rock",a6,a6),0.1,B.bA,5)
A.iU(A.aa(d1,a6,a6),a6,a6,20)
A.iU(A.aa("light",a6,a6),0.1,a6,3)
A.iU(A.aa(a7,a6,a6),5,B.kd,2)
A.vp(B.bz,6)
A.vp(B.jM,1)
A.vp(B.jN,3)
A.BN("bat bug humanoid natural",2,1)
A.BO("animal bat bug natural",1,0.2)
A.Cd(g7,100,1)
A.Cm(g7,100,1)
A.em("bug",40,1)
A.em("jelly",50,5)
A.em("bat",40,10)
A.em("rodent",50,1)
A.em("snake",60,8)
A.em("plant",40,15)
A.em("eye",100,20)
A.em("dragon",100,60)
A.u9(e7,16,2)
A.u9(d4,23,5)
A.u9(f0,30,10)
A.u9("orc",40,28)
d=$.uu()
d.c3(g8)
d.c3(g9)
d.c3("cave/glowing-moss")
d.c3(b4)
d=$.nm()
i=$.b2()
l=t.oC
d=A.C(["*",A.W(d,i,a6,a6)],h,l)
$.cC.b="glowing-moss"
$.cD=null
$.cf=d
A.w(a6,B.q,"    #\n    *")
A.w(a6,B.q,"    ##\n    #*")
A.w(a6,a6,"    ?.?\n    .*.\n    ?.?")
d=$.iY()
p=A.C(["!",A.W(d,i,a6,a6)],h,l)
$.cC.b=g9
$.cD=null
$.cf=p
A.w(a6,a6,"    ?.?\n    .!.\n    ?.?")
a1=A.C(["\u250c",A.W($.je(),i,a6,a6),"\u2500",A.W($.jd(),i,a6,a6),"\u2510",A.W($.jf(),i,a6,a6),"-",A.W($.fP(),i,a6,a6),"\u2502",A.W($.jc(),i,a6,a6),"\u2558",A.W($.j7(),i,a6,a6),"\u2550",A.W($.j6(),i,a6,a6),"\u255b",A.W($.j8(),i,a6,a6),"\u255e",A.W($.ja(),i,a6,a6),"\u2564",A.W($.j9(),i,a6,a6),"\u2561",A.W($.jb(),i,a6,a6),"i",A.W(d,i,a6,a6)],h,l)
$.cC.b=g8
$.cD=null
$.cf=a1
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    ?###?")
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    ?###?")
A.w(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    ?####?")
A.w(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    ?####?")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    ?#####?")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    ?#####?")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    ?#####?")
A.w(a6,a6,"    ?###?\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    ?###?\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    ?####?\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,a6,"    ?####?\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,a6,"    ?#####?\n    .\u2502---\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.w(a6,a6,"    ?#####?\n    .\u2502-i-\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.w(a6,a6,"    ?#####?\n    .\u2502i-i\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
$.cC.b=g8
$.cD=null
$.cf=a1
A.w(a6,a6,"    ?.....?\n    #\u2500\u2510.\u250c\u2500#\n    #\u2564\u255b.\u2558\u2564#\n    ?.....?")
A.w(a6,a6,"    ?.......?\n    #\u2500\u2500\u2510.\u250c\u2500\u2500#\n    #\u2550\u2564\u255b.\u2558\u2564\u2550#\n    ?.......?")
A.w(a6,a6,"    ?.........?\n    #\u2500\u2500\u2500\u2510.\u250c\u2500\u2500\u2500#\n    #\u2550\u2550\u2564\u255b.\u2558\u2564\u2550\u2550#\n    ?.........?")
A.w(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    ?##?")
A.w(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
A.w(a6,a6,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
$.cC.b=g8
$.cD=null
$.cf=a1
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.w(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i--i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.w(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.w(a6,a6,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,B.ac,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.w(a6,a6,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.w(a6,B.ac,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.w(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.w(a6,a6,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
d=A.C(["\u03c0",A.W($.iZ(),i,a6,a6)],h,l)
$.cC.b=g8
$.cD=2
$.cf=d
A.w(a6,B.av,"    \u03c0.\n    .\u250c")
A.w(a6,B.av,"    \u03c0.\n    \u250c?")
A.w(a6,B.av,"    ..\n    \u03c0\u250c")
A.w(a6,B.ac,"    .\u255e\n    \u03c0.")
A.w(a6,B.q,"    ?\u2550?\n    .\u03c0.")
A.w(a6,a6,"    ?\u2564?\n    .\u03c0.")
A.w(a6,B.q,"    \u03c0\n    #")
A.w(a6,B.q,"    \u03c0\n    .\n    #")
d=A.C(["%",A.W($.j_(),i,a6,a6)],h,l)
$.cC.b=g8
$.cD=0.7
$.cf=d
A.w(a6,B.q,"    ##?\n    #%.\n    ?.?")
A.w(a6,B.q,"    ?.?\n    .%.\n    ?.?")
A.w(a6,B.q,"    ###?\n    #%%.\n    ?..?")
A.w(a6,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.w(a6,B.q,"    ?##?\n    .%%.\n    ?..?")
A.w(a6,B.q,"    ?###?\n    .%%%.\n    ?...?")
i=A.C(["&",A.W($.j0(),i,a6,a6)],h,l)
$.cC.b=g8
$.cD=0.5
$.cf=i
A.w(a6,B.q,"    ##?\n    #&.\n    ?.?")
A.w(a6,B.q,"    ?#?\n    .&.\n    ?.?")
$.cC.b=g8
$.cD=1
$.cf=null
A.w(a6,B.q,"    #...#\n    #\u2248\u2261\u2248#\n    #...#")
A.w(a6,B.q,"    #....#\n    #\u2248\u2248\u2261\u2248#\n    #....#")
A.w(a6,B.q,"    #.....#\n    #\u2248\u2248\u2261\u2248\u2248#\n    #.....#")
A.w(a6,B.q,"    #.....#\n    #\u2248\u2261\u2248\u2261\u2248#\n    #.....#")
A.w(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2248\u2261\u2248\u2248\u2248#\n    #......#\n    #......#")
A.w(a6,B.q,"    #......#\n    #......#\n    #\u2248\u2261\u2248\u2248\u2261\u2248#\n    #......#\n    #......#")
A.w(a6,B.q,"    #.......#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248#\n    #.......#\n    #.......#")
A.w(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2248\u2261\u2248\u2261\u2248\u2248#\n    #.......#\n    #.......#")
A.w(a6,B.q,"    #.......#\n    #.......#\n    #\u2248\u2261\u2248\u2248\u2248\u2261\u2248#\n    #.......#\n    #.......#")
A.w(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #........#\n    #........#")
A.w(a6,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2261\u2248\u2248\u2261\u2248\u2248#\n    #........#\n    #........#")
A.w(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.w(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
A.w(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.w(a6,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
i=$.uE()
l=A.C(["*",A.W(i,a6,$.fR(),a6),"o",A.W(a6,a6,i,a6)],h,l)
$.cC.b=b4
$.cD=null
$.cf=l
A.w(0.6,B.q,"    .*")
A.w(0.6,B.q,"    ..\n    .*")
A.w(a6,B.q,"    o*")
A.w(a6,B.q,"    \u2248*\n    o\u2248")
a2=new A.kf()
A.d8("6x8",6,8)
A.d8("6x9",6,9)
A.d8("8x8",8,a6)
A.d8("8x10",8,10)
A.d8("9x12",9,12)
A.d8("10x12",10,12)
A.d8("12x16",12,16)
A.d8("12x18",12,18)
A.d8("16x16",16,a6)
A.d8("16x20",16,20)
l=v.G
a3=A.tN(A.P(A.P(l.window).localStorage).getItem("font"))
h=$.fz.length
if(1>=h)return A.a($.fz,1)
$.c2.b=$.fz[1]
for(a4=0;a4<h;++a4){a5=$.fz[a4]
if(a5.a===a3){$.c2.b=a5
break}}s=A.c3(A.P(l.document).querySelector("#game"))
s.toString
s.append($.c2.u().b)
A.P(l.window).addEventListener("resize",A.vg(A.Cg()))
s=$.c2.u().c
r=A.b([],t.jp)
if($.y.b!==$.y)A.a2(A.wV(""))
$.y.b=new A.lv(new A.kE(A.D(t.fC,t.fb),t.hl),r,s)
l.rvipRedraw=A.vg(new A.uc())
s=$.y.u().a
s.a.h(0,new A.A(13,!1,!1),s.$ti.c.a(B.a1))
s=$.y.u().a
s.a.h(0,new A.A(27,!1,!1),s.$ti.c.a(B.G))
s=$.y.u().a
s.a.h(0,new A.A(66,!1,!1),s.$ti.c.a(B.bh))
A.P(l.document).addEventListener("keydown",A.vh(new A.ud()),!0)
s=$.y.u().a
s.a.h(0,new A.A(192,!1,!1),s.$ti.c.a(B.G))
s=$.y.u().a
s.a.h(0,new A.A(70,!0,!1),s.$ti.c.a(B.bf))
s=$.y.u().a
s.a.h(0,new A.A(81,!1,!1),s.$ti.c.a(B.bk))
s=$.y.u().a
s.a.h(0,new A.A(67,!1,!1),s.$ti.c.a(B.bi))
s=$.y.u().a
s.a.h(0,new A.A(68,!1,!1),s.$ti.c.a(B.b7))
s=$.y.u().a
s.a.h(0,new A.A(85,!1,!1),s.$ti.c.a(B.bs))
s=$.y.u().a
s.a.h(0,new A.A(71,!1,!1),s.$ti.c.a(B.bj))
s=$.y.u().a
s.a.h(0,new A.A(88,!1,!1),s.$ti.c.a(B.bq))
s=$.y.u().a
s.a.h(0,new A.A(69,!1,!1),s.$ti.c.a(B.b9))
s=$.y.u().a
s.a.h(0,new A.A(84,!1,!1),s.$ti.c.a(B.br))
s=$.y.u().a
s.a.h(0,new A.A(65,!1,!1),s.$ti.c.a(B.bt))
s=$.y.u().a
s.a.h(0,new A.A(83,!1,!1),s.$ti.c.a(B.hE))
s=$.y.u().a
s.a.h(0,new A.A(65,!0,!1),s.$ti.c.a(B.bg))
s=$.y.u().a
s.a.h(0,new A.A(83,!0,!1),s.$ti.c.a(B.b8))
s=$.y.u().a
s.a.h(0,new A.A(69,!0,!1),s.$ti.c.a(B.bp))
s=$.y.u().a
s.a.h(0,new A.A(72,!1,!1),s.$ti.c.a(B.aN))
s=$.y.u().a
s.a.h(0,new A.A(72,!0,!1),s.$ti.c.a(B.ba))
s=$.y.u().a
s.a.h(0,new A.A(73,!1,!1),s.$ti.c.a(B.aB))
s=$.y.u().a
s.a.h(0,new A.A(79,!1,!1),s.$ti.c.a(B.X))
s=$.y.u().a
s.a.h(0,new A.A(80,!1,!1),s.$ti.c.a(B.aA))
s=$.y.u().a
s.a.h(0,new A.A(75,!1,!1),s.$ti.c.a(B.a9))
s=$.y.u().a
s.a.h(0,new A.A(186,!1,!1),s.$ti.c.a(B.ad))
s=$.y.u().a
s.a.h(0,new A.A(188,!1,!1),s.$ti.c.a(B.aE))
s=$.y.u().a
s.a.h(0,new A.A(190,!1,!1),s.$ti.c.a(B.Y))
s=$.y.u().a
s.a.h(0,new A.A(191,!1,!1),s.$ti.c.a(B.aD))
s=$.y.u().a
s.a.h(0,new A.A(73,!0,!1),s.$ti.c.a(B.bm))
s=$.y.u().a
s.a.h(0,new A.A(79,!0,!1),s.$ti.c.a(B.ap))
s=$.y.u().a
s.a.h(0,new A.A(80,!0,!1),s.$ti.c.a(B.bl))
s=$.y.u().a
s.a.h(0,new A.A(75,!0,!1),s.$ti.c.a(B.aP))
s=$.y.u().a
s.a.h(0,new A.A(186,!0,!1),s.$ti.c.a(B.aO))
s=$.y.u().a
s.a.h(0,new A.A(188,!0,!1),s.$ti.c.a(B.bo))
s=$.y.u().a
s.a.h(0,new A.A(190,!0,!1),s.$ti.c.a(B.aq))
s=$.y.u().a
s.a.h(0,new A.A(191,!0,!1),s.$ti.c.a(B.bn))
s=$.y.u().a
s.a.h(0,new A.A(73,!1,!0),s.$ti.c.a(B.c6))
s=$.y.u().a
s.a.h(0,new A.A(79,!1,!0),s.$ti.c.a(B.bc))
s=$.y.u().a
s.a.h(0,new A.A(80,!1,!0),s.$ti.c.a(B.c5))
s=$.y.u().a
s.a.h(0,new A.A(75,!1,!0),s.$ti.c.a(B.be))
s=$.y.u().a
s.a.h(0,new A.A(186,!1,!0),s.$ti.c.a(B.bb))
s=$.y.u().a
s.a.h(0,new A.A(188,!1,!0),s.$ti.c.a(B.c8))
s=$.y.u().a
s.a.h(0,new A.A(190,!1,!0),s.$ti.c.a(B.bd))
s=$.y.u().a
s.a.h(0,new A.A(191,!1,!0),s.$ti.c.a(B.c7))
s=$.y.u().a
s.a.h(0,new A.A(76,!1,!1),s.$ti.c.a(B.a1))
s=$.y.u().a
s.a.h(0,new A.A(76,!0,!1),s.$ti.c.a(B.aC))
s=$.y.u().a
s.a.h(0,new A.A(76,!1,!0),s.$ti.c.a(B.aM))
s=$.y.u().a
s.a.h(0,new A.A(38,!1,!1),s.$ti.c.a(B.X))
s=$.y.u().a
s.a.h(0,new A.A(37,!1,!1),s.$ti.c.a(B.a9))
s=$.y.u().a
s.a.h(0,new A.A(39,!1,!1),s.$ti.c.a(B.ad))
s=$.y.u().a
s.a.h(0,new A.A(40,!1,!1),s.$ti.c.a(B.Y))
s=$.y.u().a
s.a.h(0,new A.A(38,!0,!1),s.$ti.c.a(B.ap))
s=$.y.u().a
s.a.h(0,new A.A(37,!0,!1),s.$ti.c.a(B.aP))
s=$.y.u().a
s.a.h(0,new A.A(39,!0,!1),s.$ti.c.a(B.aO))
s=$.y.u().a
s.a.h(0,new A.A(40,!0,!1),s.$ti.c.a(B.aq))
s=$.y.u().a
s.a.h(0,new A.A(38,!1,!0),s.$ti.c.a(B.bc))
s=$.y.u().a
s.a.h(0,new A.A(37,!1,!0),s.$ti.c.a(B.be))
s=$.y.u().a
s.a.h(0,new A.A(39,!1,!0),s.$ti.c.a(B.bb))
s=$.y.u().a
s.a.h(0,new A.A(40,!1,!0),s.$ti.c.a(B.bd))
s=$.y.u().a
s.a.h(0,new A.A(103,!1,!1),s.$ti.c.a(B.aB))
s=$.y.u().a
s.a.h(0,new A.A(104,!1,!1),s.$ti.c.a(B.X))
s=$.y.u().a
s.a.h(0,new A.A(105,!1,!1),s.$ti.c.a(B.aA))
s=$.y.u().a
s.a.h(0,new A.A(100,!1,!1),s.$ti.c.a(B.a9))
s=$.y.u().a
s.a.h(0,new A.A(102,!1,!1),s.$ti.c.a(B.ad))
s=$.y.u().a
s.a.h(0,new A.A(97,!1,!1),s.$ti.c.a(B.aE))
s=$.y.u().a
s.a.h(0,new A.A(98,!1,!1),s.$ti.c.a(B.Y))
s=$.y.u().a
s.a.h(0,new A.A(99,!1,!1),s.$ti.c.a(B.aD))
s=$.y.u().a
s.a.h(0,new A.A(103,!0,!1),s.$ti.c.a(B.bm))
s=$.y.u().a
s.a.h(0,new A.A(104,!0,!1),s.$ti.c.a(B.ap))
s=$.y.u().a
s.a.h(0,new A.A(105,!0,!1),s.$ti.c.a(B.bl))
s=$.y.u().a
s.a.h(0,new A.A(100,!0,!1),s.$ti.c.a(B.aP))
s=$.y.u().a
s.a.h(0,new A.A(102,!0,!1),s.$ti.c.a(B.aO))
s=$.y.u().a
s.a.h(0,new A.A(97,!0,!1),s.$ti.c.a(B.bo))
s=$.y.u().a
s.a.h(0,new A.A(98,!0,!1),s.$ti.c.a(B.aq))
s=$.y.u().a
s.a.h(0,new A.A(99,!0,!1),s.$ti.c.a(B.bn))
s=$.y.u().a
s.a.h(0,new A.A(101,!1,!1),s.$ti.c.a(B.a1))
s=$.y.u().a
s.a.h(0,new A.A(1001,!1,!1),s.$ti.c.a(B.a1))
s=$.y.u().a
s.a.h(0,new A.A(101,!0,!1),s.$ti.c.a(B.aC))
s=$.y.u().a
s.a.h(0,new A.A(1001,!0,!1),s.$ti.c.a(B.aC))
s=$.y.u().a
s.a.h(0,new A.A(101,!1,!0),s.$ti.c.a(B.aM))
s=$.y.u().a
s.a.h(0,new A.A(87,!0,!0),s.$ti.c.a(B.c9))
s=$.y.u()
r=new A.rs(a2,A.b([],t.di))
r.na()
s.a2(new A.kL(a2,r))
$.y.u().spe(!0)
$.y.u().spI(!0)
l=A.c3(A.P(l.document).body)
l.toString
r=t.gX
A.e9(l,"keydown",r.i("~(1)?").a(new A.ue()),!1,r.c)},
d8(a,b,c){var s,r,q,p,o,n
if(c==null)c=b
s=A.wG()
r=t.gX
q=r.i("~(1)?")
r=r.c
A.e9(s,"dblclick",q.a(new A.tK()),!1,r)
p=A.xJ(s,b,c)
B.a.j($.fz,new A.lL(a,s,p,b,c))
A.e9(s,"click",q.a(new A.tL(p)),!1,r)
o=v.G
n=A.P(A.P(o.document).createElement("button"))
n.innerHTML=a
A.e9(n,"click",q.a(new A.tM(a)),!1,r)
A.P(A.c3(A.P(o.document).querySelector(".button-bar")).appendChild(n))},
xJ(a,b,c){var s,r,q,p,o,n,m,l=v.G,k=B.c.cb(A.u(A.P(l.window).innerWidth)-20,b),j=B.c.cb(A.u(A.P(l.window).innerHeight)-30,c)
k=Math.max(k,80)
j=Math.max(j,40)
s=B.e.M(A.bI(A.P(l.window).devicePixelRatio))
r=b*k
q=c*j
a.width=r*s
a.height=q*s
A.P(a.style).width=""+r+"px"
A.P(a.style).height=""+q+"px"
p="font_"+b
if(b!==c)p+="_"+c
s=B.e.M(A.bI(A.P(l.window).devicePixelRatio))
o=k*j
n=A.ao(o,B.b6,!1,t.v)
o=A.ao(o,B.b6,!1,t.n3)
m=A.P(A.P(l.document).createElement("img"))
m.src=p+".png"
return A.A6(new A.o8(new A.ab(n,new A.a3(new A.d(0,0),new A.d(k,j)),t.bG),new A.ab(o,new A.a3(new A.d(0,0),new A.d(k,j)),t.cY)),b,c,a,m,s)},
xO(){var s=A.xJ($.c2.u().b,$.c2.u().d,$.c2.u().e)
$.c2.u().c=s
$.y.u().lo(s)},
AX(){var s,r,q,p=null,o=A.c3(A.P(v.G.document).querySelector("#game"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.pG(o,q,p,p,p,p)
return}}},
vk(){A.u(A.P(v.G.window).requestAnimationFrame(A.vg(new A.tR())))},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uc:function uc(){},
ud:function ud(){},
ue:function ue(){},
tK:function tK(){},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tR:function tR(){},
tS:function tS(){},
lv:function lv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=$
_.w=!1
_.y=null},
BJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.bL:s=b.d
r=b.b
if(s===$.aF()){s=$.we().n(0,b.c)
s.toString
B.a.j(a,new A.cN(r,A.at(s,B.I,f),2))}else{s=$.wf().n(0,s)
s.toString
B.a.j(a,new A.h7(r,s))}break
case B.bM:s=$.wf().n(0,b.d)
s.toString
B.a.j(a,new A.h7(b.b,s))
break
case B.c0:B.a.j(a,new A.kw(b.b,b.f.a.b))
break
case B.bR:B.a.j(a,new A.jN(b.e.y,A.at("*",A.ei(b.d),f),B.e.aU(Math.sqrt(b.r/5))))
break
case B.bO:for(s=b.e,q=0;q<10;++q){r=s.y.gm()
p=s.y.gp()
o=$.o()
o=o.a
n=o.a4(628)/100
m=(o.a4(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.l7(r,p,l*m,k*m,o.a4(8)+7,B.m))}break
case B.bQ:s=b.e
B.a.j(a,new A.kl(s.y.gm(),s.y.gp()))
break
case B.bN:B.a.j(a,new A.h3(b.b))
break
case B.bW:B.a.j(a,new A.h3(b.e.y))
break
case B.bU:s=$.o().br(10,20)
r=new A.kM(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.c_:s=b.e
r=b.b
j=B.c.P(s.y.S(0,r).gb3(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gm()
h=r.gp()
o=$.o()
o=o.a
n=o.a4(628)/100
m=(o.a4(70)+10)/100
B.a.j(a,new A.lK(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.b5:B.a.j(a,new A.cN(b.e.y,A.at("*",B.u,f),4))
break
case B.bX:B.a.j(a,new A.cN(b.e.y,A.at("*",B.u,f),4))
break
case B.bS:B.a.j(a,new A.ko(b.b))
break
case B.bK:s=b.e
s.toString
B.a.j(a,new A.fX(s,A.at("!",B.u,f),1))
break
case B.b4:s=b.e
s.toString
B.a.j(a,new A.fX(s,A.at("!",B.h,f),3))
break
case B.c1:break
case B.bT:B.a.j(a,new A.cN(b.b,A.at("*",B.E,f),4))
break
case B.bY:case B.bZ:s=$.we().n(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cN(b.b,A.at(s,g!=null?g.a.b.b:B.u,f),4))
break
case B.bP:s=b.b
r=b.f
r.toString
B.a.j(a,new A.lP(s.gm(),s.gp(),r.a.b))
break
case B.bV:B.a.j(a,new A.cN(b.b,A.at("*",B.I,f),4))
break}},
yh(a){return v.mangledGlobalNames[a]},
uh(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pG(a,b,c,d,e,f){var s=a[b]()
return s},
wQ(a,b,c){var s=null
return c.a(A.pG(a,b,s,s,s,s))},
wm(a){var s,r,q
for(s=[$.dE(),$.dF()],r=0;r<2;++r){q=s[r].c8(a)
if(q!=null)return q}throw A.n(A.aG("Unknown affix '"+a+"'.",null))},
z7(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.iM,B.iK,B.iJ,B.iw,B.iP,B.iF]
for(s=t.Q,r=t.h,q=t.Z,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.b0()
$.bi=n.a
A.b0()
l=B.i.dT("Fine _"," _")?$.dE():$.dF()
n=A.D(p,s)
k=$.iP=new A.cm("Fine _",l,1,A.D(r,s),A.D(q,s),n)
k.c=1
k.d=40
k.pu(1)
k.J(1000,1.8)
s.a(A.a4())
k=$.vL()
j=k.n(0,m)
if(j==null)A.a2(A.aG("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a4())
A.b0()
l=B.i.dT("Deft _"," _")?$.dE():$.dF()
n=A.D(p,s)
i=$.iP=new A.cm("Deft _",l,1,A.D(r,s),A.D(q,s),n)
i.c=20
i.d=60
i.pv(2,3)
i.J(2000,2.4)
j=k.n(0,m)
if(j==null)A.a2(A.aG("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a4())
A.b0()
l=B.i.dT(h," _")?$.dE():$.dF()
n=A.D(p,s)
i=$.iP=new A.cm(h,l,1,A.D(r,s),A.D(q,s),n)
i.c=40
i.d=100
i.a_(3,6,4)
i.J(4000,3.4)
j=k.n(0,m)
if(j==null)A.a2(A.aG("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a4())}},
y2(){var s=t.N,r=t.S
A.bj("Uncut Amethyst",A.C(["Amethyst Shard",4],s,r))
A.bj("Faceted Amethyst",A.C(["Uncut Amethyst",4],s,r))
A.bj("Uncut Sapphire",A.C(["Sapphire Shard",4],s,r))
A.bj("Faceted Sapphire",A.C(["Uncut Sapphire",4],s,r))
A.bj("Uncut Emerald",A.C(["Emerald Shard",4],s,r))
A.bj("Faceted Emerald",A.C(["Uncut Emerald",4],s,r))
A.bj("Uncut Ruby",A.C(["Ruby Shard",4],s,r))
A.bj("Faceted Ruby",A.C(["Uncut Ruby",4],s,r))
A.bj("Uncut Diamond",A.C(["Diamond Shard",4],s,r))
A.bj("Faceted Diamond",A.C(["Uncut Diamond",4],s,r))},
y6(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bj("Mending Salve",A.C(["Soothing Balm",3],q,p))
A.bj(s,A.C(["Mending Salve",3],q,p))
A.bj(r,A.C([s,3],q,p))
A.bj("Potion of Rejuvenation",A.C([r,4],q,p))},
yg(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bj(s,A.C(["Insect Wing",1,"Feather",1],p,o))
A.bj(r,A.C([s,2],p,o))
A.bj(q,A.C([r,2],p,o))
A.bj("Scroll of Disappearing",A.C([q,2],p,o))},
bj(a,b){var s,r,q,p,o,n=A.D(t.q,t.S)
for(s=new A.br(b,A.z(b).i("br<1,2>")).gL(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bp().b.n(0,q)
if(o==null)A.a2(A.aG('Unknown resource "'+q+'".',null))
n.h(0,o.a,p)}B.a.j($.hN,new A.ln(n,A.aa(a,1,null),a))},
BT(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.an("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.aH(10,f))
c.d=B.aj
c=$.aF()
s=[new A.a_(["forest",c,B.p,B.B]),new A.a_(["brown",$.dH(),B.I,B.k]),new A.a_(["blue",$.dc(),B.J,B.D]),new A.a_(["white",$.ci(),B.o,B.u]),new A.a_(["purple",$.bJ(),B.O,B.P]),new A.a_(["green",$.dG(),B.A,B.af]),new A.a_(["silver",$.dI(),B.K,B.J]),new A.a_(["red",$.b9(),B.a5,B.m]),new A.a_(["gold",$.db(),B.E,B.h]),new A.a_(["black",$.da(),B.f,B.l]),new A.a_(["ethereal",$.dJ(),B.a3,B.F])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.O(A.x(r,0,10,38,53))
l=B.e.O(A.x(r,0,10,150,350))
A.fF()
k=$.am.b
if(k===$.am)A.a2(A.dV(""))
k=k.ay
if(0>=k.length)return A.a(k,0)
j=A.nL("juvenile "+o+" dragon",p,g,new A.a0(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.ce=j
p=B.e.O(A.x(r,0,10,20,40))
l=j.db
B.a.j(l,new A.ba(g,"bite[s]",p,0,c))
p=B.e.O(A.x(r,0,10,15,25))
B.a.j(l,new A.ba(g,"claw[s]",p,0,c))
p=B.e.O(A.x(r,0,10,2,10))
l=j.CW
i=new A.aM(100,A.aa(e,l,g))
if(p>1)i=new A.bH(p,i)
p=j.dy
B.a.j(p,i)
k=A.aa("magic",l,g)
B.a.j(p,new A.aM(100,k))
l=A.aa(d,l,g)
B.a.j(p,new A.aM(100,l))
if(n!==c){p=B.e.O(A.x(r,0,10,40,100))
l=$.fS()
k=l.n(0,n)[0]
l=l.n(0,n)[1]
k=A.aT(k,B.y,B.W).a6(1)
B.a.j(j.dx,new A.dk(new A.ba(new A.aL(k),l,p,5,n),11))}++r}p=A.an("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.aH(20,f))
p.d=B.aj
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.O(A.x(r,0,10,48,62))
l=B.e.O(A.x(r,0,10,350,850))
A.fF()
k=$.am.b
if(k===$.am)A.a2(A.dV(""))
k=k.ay
if(0>=k.length)return A.a(k,0)
j=A.nL(o+" dragon",p,g,new A.a0(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.ce=j
p=B.e.O(A.x(r,0,10,30,50))
l=j.db
B.a.j(l,new A.ba(g,"bite[s]",p,0,c))
p=B.e.O(A.x(r,0,10,25,35))
B.a.j(l,new A.ba(g,"claw[s]",p,0,c))
p=B.e.O(A.x(r,0,10,5,15))
l=j.CW
i=new A.aM(100,A.aa(e,l,g))
if(p>1)i=new A.bH(p,i)
p=j.dy
B.a.j(p,i)
k=B.e.O(A.x(r,0,10,2,5))
i=new A.aM(100,A.aa("magic",l,g))
if(k>1)i=new A.bH(k,i)
B.a.j(p,i)
k=B.e.O(A.x(r,0,10,2,5))
i=new A.aM(100,A.aa(d,l,g))
if(k>1)i=new A.bH(k,i)
B.a.j(p,i)
if(n!==c){p=B.e.O(A.x(r,0,10,70,150))
l=$.fS()
k=l.n(0,n)[0]
l=l.n(0,n)[1]
k=A.aT(k,B.y,B.W).a6(1)
B.a.j(j.dx,new A.dk(new A.ba(new A.aL(k),l,p,10,n),8))}++r}},
C1(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.aF(),d=[new A.a_(["forest",e,B.p,B.B]),new A.a_(["brown",$.dH(),B.I,B.k]),new A.a_(["blue",$.dc(),B.J,B.D]),new A.a_(["white",$.ci(),B.o,B.u]),new A.a_(["purple",$.bJ(),B.O,B.P]),new A.a_(["green",$.dG(),B.A,B.af]),new A.a_(["silver",$.dI(),B.K,B.J]),new A.a_(["red",$.b9(),B.a5,B.m]),new A.a_(["gold",$.db(),B.E,B.h]),new A.a_(["black",$.da(),B.f,B.l]),new A.a_(["ethereal",$.dJ(),B.a3,B.F])],c=A.an("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.aH(10,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.O(A.x(s,0,10,65,85))
n=B.e.O(A.x(s,0,10,800,1500))
A.fF()
m=$.am.b
if(m===$.am)A.a2(A.dV(""))
m=m.ay
if(0>=m.length)return A.a(m,0)
l=A.nL("elder "+q+" dragon",c,i,new A.a0(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.ce=l
c=B.e.O(A.x(s,0,10,40,80))
n=l.db
B.a.j(n,new A.ba(i,"bite[s]",c,0,e))
c=B.e.O(A.x(s,0,10,35,75))
B.a.j(n,new A.ba(i,"claw[s]",c,0,e))
c=B.e.O(A.x(s,0,10,6,16))
n=l.CW
k=new A.aM(100,A.aa(g,n,i))
if(c>1)k=new A.bH(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.x(s,0,10,3,6))
k=new A.aM(100,A.aa("magic",n,i))
if(m>1)k=new A.bH(m,k)
B.a.j(c,k)
m=B.e.O(A.x(s,0,10,3,6))
k=new A.aM(100,A.aa(f,n,i))
if(m>1)k=new A.bH(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.x(s,0,10,40,100))
n=$.fS()
m=n.n(0,p)[0]
n=n.n(0,p)[1]
m=A.aT(m,B.y,B.W).a6(1)
B.a.j(l.dx,new A.dk(new A.ba(new A.aL(m),n,c,5,p),11))}++s}c=A.an("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.aH(20,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.O(A.x(s,0,10,80,99))
n=B.e.O(A.x(s,0,10,1400,2000))
A.fF()
m=$.am.b
if(m===$.am)A.a2(A.dV(""))
m=m.ay
if(0>=m.length)return A.a(m,0)
l=A.nL("ancient "+q+" dragon",c,i,new A.a0(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.ce=l
c=B.e.O(A.x(s,0,10,60,100))
n=l.db
B.a.j(n,new A.ba(i,"bite[s]",c,0,e))
c=B.e.O(A.x(s,0,10,50,80))
B.a.j(n,new A.ba(i,"claw[s]",c,0,e))
c=B.e.O(A.x(s,0,10,7,20))
n=l.CW
k=new A.aM(100,A.aa(g,n,i))
if(c>1)k=new A.bH(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.O(A.x(s,0,10,4,7))
k=new A.aM(100,A.aa("magic",n,i))
if(m>1)k=new A.bH(m,k)
B.a.j(c,k)
m=B.e.O(A.x(s,0,10,4,7))
k=new A.aM(100,A.aa(f,n,i))
if(m>1)k=new A.bH(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.O(A.x(s,0,10,200,400))
n=$.fS()
m=n.n(0,p)[0]
n=n.n(0,p)[1]
m=A.aT(m,B.y,B.W).a6(1)
B.a.j(l.dx,new A.dk(new A.ba(new A.aL(m),n,c,10,p),8))}++s}},
nK(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cI(B.c.A(a,8),2,r)
s=A.cI(B.c.A(a,4),3,s)
s=A.cI(a,6,A.cI(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cI(B.c.A(a,4),2,r)
s=A.cI(a,5,A.cI(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cI(a,3,A.cI(B.c.A(a,2),2,r))}else s=A.cI(a,3,r)
return A.za(s)},
cI(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.a3(new A.d(0,0),new A.d(a4,a4)),a=a4*a4,a0=A.ao(a,!1,!1,c),a1=t.b,a2=new A.ab(a0,b,a1),a3=new A.ab(A.ao(a,!1,!1,c),new A.a3(new A.d(0,0),new A.d(a4,a4)),a1)
if(a6!=null)for(c=A.af(b.bQ(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.a(b,q)
o=b[q]?0.3:0.7
q=$.o().aP(1)
a2.l(s,r)
B.a.h(a0,r*a4+s,q>o)}else{n=b.ghk()
m=Math.sqrt(new A.d(b.gbR(),b.gbW()).S(0,b.ghk()).gaF())
for(c=A.af(b.bQ(-1));c.q();){b=c.b
a=c.c
a1=new A.d(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.o().aP(1)
a2.l(b,a)
B.a.h(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bQ(-1),a=b.a,a=new A.cW(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
p=a.c
a2.l(q,p)
j=p*c+q
if(!(j>=0&&j<r))return A.a(s,j)
i=s[j]?1:0
for(j=new A.d(q,p).gbC(),h=j.length,g=0;g<h;++g){f=j[g]
e=f.a
d=f.b
a2.l(e,d)
e=d*c+e
if(!(e>=0&&e<r))return A.a(s,e)
if(s[e])++i}j=b.a(i>=5)
a3.l(q,p)
B.a.h(a0,p*a1+q,j)}return a3},
za(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
for(h=A.af(h),g=a.a,s=g.length,r=f,q=-1,p=-1;h.q();){o=h.b
n=h.c
a.l(o,n)
m=n*f+o
if(!(m>=0&&m<s))return A.a(g,m)
if(g[m]){r=Math.min(r,o)
q=Math.max(q,o)
e=Math.min(e,n)
p=Math.max(p,n)}}h=q-r+1
o=p-e+1
n=new A.a3(new A.d(0,0),new A.d(h,o))
o=A.ao(h*o,!1,!1,t.y)
l=new A.ab(o,n,t.b)
for(n=A.af(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.a(g,j)
j=A.dC(g[j])
l.l(m,k)
B.a.h(o,k*h+m,j)}return l},
ei(a){var s=A.C([$.aF(),B.o,$.eq(),B.K,$.dH(),B.k,$.b9(),B.m,$.dc(),B.F,$.dG(),B.A,$.ci(),B.J,$.dI(),B.O,$.bJ(),B.p,$.da(),B.l,$.db(),B.E,$.dJ(),B.P],t.h,t.aZ).n(0,a)
s.toString
return s},
vv(b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null
A.bm(b1,b0,c0+2,b2.gkp().a,b4,c6,c1,c5)
s=b5?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=c1+c6
q=r-1
if(c4)for(p=b2.gL(b2),o=q;p.q();){n=b7.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.U(n,!1,b0).length-3)}for(p=J.aw(b2.gcw()),m=c1+1,l=s.length,k=c1-34,j=r+34,i=c6-34,h=c5+c0,g=h+3,f=0,e=0;p.q();){d=p.gH()
c=c1+(c3?3:1)
b=c5+f+1
if(f>=c0){r=b2.gI(b2)
p=b4?B.h:B.j
b1.k(c+1,h+1," "+(r-c0)+" more... ",p)
break}if(d==null){d=!1
if(f>0){a=b2.gej()
if(!(f<a.length))return A.a(a,f)
if(a[f]==="hand"){a=b2.gej()
a0=f-1
if(!(a0<a.length))return A.a(a,a0)
if(a[a0]==="hand"){d=J.uG(b2.gcw(),a0)
d=d==null?b0:d.a.f
d=d===!0}}}if(d)b1.k(c,b,"\u2191 (two-handed)",B.j)
else{d=b2.gej()
if(!(f<d.length))return A.a(d,f)
b1.k(c+2,b,"("+d[f]+")",B.t)}++e;++f
continue}a1=!b4||b3.$1(d)
if(c3&&b4&&b3.$1(d)){b1.k(m,b," )",B.l)
if(!(e<l))return A.a(s,e)
b1.k(m,b,s[e],B.h)}++e
if(a1)b1.an(c,b,d.a.b)
if(c4&&b7.$1(d)!=null){a=b7.$1(d)
a.toString
n=A.U(a,!1,b0)
a2=q-n.length-1
b1.k(a2,b,"$",a1?B.k:B.j)
a=a1?B.h:B.j
b1.k(a2+1,b,n,a)
a3=a2}else a3=q
a4=d.gam().a
a=c+2
a5=a3-a
if(a4.length>a5)a4=B.i.aK(a4,0,a5)
A:{a0=d===b8
if(a0){a6=B.h
break A}if(b4&&b3.$1(d)){a6=B.C
break A}if(b4){a6=B.j
break A}a6=B.d
break A}a7=d===b6
a8=a7?B.i.fb(a4,a5):a4
b1.cv(a,b,a8,a6,a7?B.t:b0)
if(a0){a9=new A.kx(d,A.wM(d,34))
a9.lF(c2,d,!1)
if(b9)if(j>b1.gaS()){b1.k(q,b,"\u25bc",B.h)
a9.hq(c1+B.c.A(i,2),g,b1)}else{b1.k(q,b,"\u25ba",B.h)
a9.hq(r,b,b1)}else{b1.k(c1,b,"\u25c4",B.h)
a9.hq(k,b,b1)}}++f}},
AR(a){return!1},
AS(a){return a.gbf()},
wG(){return A.P(A.P(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.uR.prototype={}
J.ku.prototype={
Y(a,b){return a===b},
ga1(a){return A.hJ(a)},
t(a){return"Instance of '"+A.le(a)+"'"},
gaH(a){return A.eh(A.vi(this))}}
J.hk.prototype={
t(a){return String(a)},
ga1(a){return a?519018:218159},
gaH(a){return A.eh(t.y)},
$iak:1,
$iB:1}
J.hm.prototype={
Y(a,b){return null==b},
t(a){return"null"},
ga1(a){return 0},
$iak:1}
J.hp.prototype={$iaE:1}
J.ds.prototype={
ga1(a){return 0},
t(a){return String(a)}}
J.la.prototype={}
J.dz.prototype={}
J.dq.prototype={
t(a){var s=a[$.yl()]
if(s==null)s=a[$.ut()]
if(s==null)return this.lx(a)
return"JavaScript function for "+J.et(s)},
$idS:1}
J.ho.prototype={
ga1(a){return 0},
t(a){return String(a)}}
J.hq.prototype={
ga1(a){return 0},
t(a){return String(a)}}
J.t.prototype={
j(a,b){A.O(a).c.a(b)
a.$flags&1&&A.bw(a,29)
a.push(b)},
dg(a,b){a.$flags&1&&A.bw(a,"removeAt",1)
if(b<0||b>=a.length)throw A.n(A.hL(b,null))
return a.splice(b,1)[0]},
kU(a){a.$flags&1&&A.bw(a,"removeLast",1)
if(a.length===0)throw A.n(A.ni(a,-1))
return a.pop()},
af(a,b){var s
a.$flags&1&&A.bw(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ad(a[s],b)){a.splice(s,1)
return!0}return!1},
hP(a,b){A.O(a).i("B(1)").a(b)
a.$flags&1&&A.bw(a,16)
this.nz(a,b,!0)},
nz(a,b,c){var s,r,q,p,o
A.O(a).i("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.n(A.aW(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
la(a,b){var s=A.O(a)
return new A.aq(a,s.i("B(1)").a(b),s.i("aq<1>"))},
T(a,b){var s
A.O(a).i("k<1>").a(b)
a.$flags&1&&A.bw(a,"addAll",2)
if(Array.isArray(b)){this.lM(a,b)
return}for(s=J.aw(b);s.q();)a.push(s.gH())},
lM(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.n(A.aW(a))
for(r=0;r<s;++r)a.push(b[r])},
aN(a){a.$flags&1&&A.bw(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.O(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.n(A.aW(a))}},
cI(a,b,c){var s=A.O(a)
return new A.au(a,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("au<1,2>"))},
aQ(a,b){var s,r=A.ao(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.h(r,s,A.K(a[s]))
return r.join(b)},
aA(a,b,c,d){var s,r,q
d.a(b)
A.O(a).ac(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.n(A.aW(a))}return r},
hx(a,b,c){var s,r,q
A.O(a).i("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.n(A.aW(a))}throw A.n(A.ct())},
eZ(a,b){return this.hx(a,b,null)},
aW(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
fz(a,b,c){var s=a.length
if(b>s)throw A.n(A.cw(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.n(A.cw(c,b,s,"end",null))
if(b===c)return A.b([],A.O(a))
return A.b(a.slice(b,c),A.O(a))},
lv(a,b){return this.fz(a,b,null)},
gaz(a){if(a.length>0)return a[0]
throw A.n(A.ct())},
gco(a){var s=a.length
if(s>0)return a[s-1]
throw A.n(A.ct())},
glq(a){var s=a.length
if(s===1){if(0>=s)return A.a(a,0)
return a[0]}if(s===0)throw A.n(A.ct())
throw A.n(A.zy())},
i8(a,b,c,d,e){var s,r,q,p
A.O(a).i("k<1>").a(d)
a.$flags&2&&A.bw(a,5)
A.uZ(b,c,a.length)
s=c-b
if(s===0)return
A.hM(e,"skipCount")
r=d
q=J.fH(r)
if(e+s>q.gI(r))throw A.n(A.zx())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.n(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.n(r,e+p)},
p8(a,b,c,d){var s
A.O(a).i("1?").a(d)
a.$flags&2&&A.bw(a,"fillRange")
A.uZ(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
d_(a,b){var s,r
A.O(a).i("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.n(A.aW(a))}return!1},
p5(a,b){var s,r
A.O(a).i("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.n(A.aW(a))}return!0},
dl(a,b){var s,r,q,p,o,n=A.O(a)
n.i("e(1,1)?").a(b)
a.$flags&2&&A.bw(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.B7()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bh()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fE(b,2))
if(p>0)this.nF(a,p)},
fs(a){return this.dl(a,null)},
nF(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bL(a,b){var s,r,q,p
a.$flags&2&&A.bw(a,"shuffle")
s=a.length
while(s>1){r=b.a4(s);--s
q=a.length
if(!(s<q))return A.a(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.a(a,r)
a[s]=a[r]
a[r]=p}},
c4(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.a(a,s)
if(J.ad(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.ad(a[s],b))return!0
return!1},
gko(a){return a.length!==0},
t(a){return A.pF(a,"[","]")},
cO(a,b){var s=A.b(a.slice(0),A.O(a))
return s},
e9(a){return this.cO(a,!0)},
gL(a){return new J.b4(a,a.length,A.O(a).i("b4<1>"))},
ga1(a){return A.hJ(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.bw(a,"set length","change the length of")
if(b<0)throw A.n(A.cw(b,0,null,"newLength",null))
if(b>a.length)A.O(a).c.a(null)
a.length=b},
n(a,b){A.u(b)
if(!(b>=0&&b<a.length))throw A.n(A.ni(a,b))
return a[b]},
h(a,b,c){A.O(a).c.a(c)
a.$flags&2&&A.bw(a)
if(!(b>=0&&b<a.length))throw A.n(A.ni(a,b))
a[b]=c},
hA(a,b){var s
A.O(a).i("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$iM:1,
$ik:1,
$iE:1}
J.kz.prototype={
pO(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.le(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pH.prototype={}
J.b4.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.p(q)
throw A.n(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia5:1}
J.dU.prototype={
ak(a,b){var s
A.ee(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf5(b)
if(this.gf5(a)===s)return 0
if(this.gf5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf5(a){return a===0?1/a<0:a<0},
M(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.n(A.cz(""+a+".toInt()"))},
aU(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.n(A.cz(""+a+".ceil()"))},
bP(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.n(A.cz(""+a+".floor()"))},
O(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.n(A.cz(""+a+".round()"))},
P(a,b,c){if(B.c.ak(b,c)>0)throw A.n(A.iT(b))
if(this.ak(a,b)<0)return b
if(this.ak(a,c)>0)return c
return a},
hY(a,b){var s
if(b>20)throw A.n(A.cw(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf5(a))return"-"+s
return s},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga1(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ab(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cb(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ju(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.ju(a,b)},
ju(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.n(A.cz("Result of truncating division is "+A.K(s)+": "+A.K(a)+" ~/ "+b))},
eG(a,b){var s
if(a>0)s=this.nS(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nS(a,b){return b>31?0:a>>>b},
gaH(a){return A.eh(t.cZ)},
$iaB:1,
$iH:1,
$iar:1}
J.hl.prototype={
gic(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaH(a){return A.eh(t.S)},
$iak:1,
$ie:1}
J.kA.prototype={
gaH(a){return A.eh(t.i)},
$iak:1}
J.dp.prototype={
hh(a,b){return new A.n4(b,a,0)},
dT(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cV(a,r-s)},
ij(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aK(a,b,c){return a.substring(b,A.uZ(b,c,a.length))},
cV(a,b){return this.aK(a,b,null)},
l3(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.zC(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.zD(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aJ(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.n(B.cU)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ps(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aJ(c,s)+a},
de(a,b){return this.ps(a,b," ")},
fb(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aJ(" ",s)},
c4(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.Cp(a,b,0)},
ak(a,b){var s
A.a6(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
ga1(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaH(a){return A.eh(t.N)},
gI(a){return a.length},
$iak:1,
$iaB:1,
$iqy:1,
$ir:1}
A.dr.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dj.prototype={
gI(a){return this.a.length},
n(a,b){var s
A.u(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.r1.prototype={}
A.M.prototype={}
A.aJ.prototype={
gL(a){var s=this
return new A.c9(s,s.gI(s),A.z(s).i("c9<aJ.E>"))},
gap(a){return this.gI(this)===0},
aQ(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.K(p.aW(0,0))
if(o!==p.gI(p))throw A.n(A.aW(p))
for(r=s,q=1;q<o;++q){r=r+b+A.K(p.aW(0,q))
if(o!==p.gI(p))throw A.n(A.aW(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.K(p.aW(0,q))
if(o!==p.gI(p))throw A.n(A.aW(p))}return r.charCodeAt(0)==0?r:r}},
cI(a,b,c){var s=A.z(this)
return new A.au(this,s.ac(c).i("1(aJ.E)").a(b),s.i("@<aJ.E>").ac(c).i("au<1,2>"))},
cO(a,b){var s=A.a8(this,A.z(this).i("aJ.E"))
return s},
e9(a){return this.cO(0,!0)}}
A.i3.prototype={
gmv(){var s=J.dK(this.a),r=this.c
if(r==null||r>s)return s
return r},
gnU(){var s=J.dK(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dK(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aW(a,b){var s=this,r=s.gnU()+b
if(b<0||r>=s.gmv())throw A.n(A.p1(b,s.gI(0),s,null,"index"))
return J.uG(s.a,r)}}
A.c9.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fH(q),o=p.gI(q)
if(r.b!==o)throw A.n(A.aW(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aW(q,s);++r.c
return!0},
$ia5:1}
A.cU.prototype={
gL(a){return new A.bs(J.aw(this.a),this.b,A.z(this).i("bs<1,2>"))},
gI(a){return J.dK(this.a)}}
A.cM.prototype={$iM:1}
A.bs.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gH())
return!0}s.a=null
return!1},
gH(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia5:1}
A.au.prototype={
gI(a){return J.dK(this.a)},
aW(a,b){return this.b.$1(J.uG(this.a,b))}}
A.aq.prototype={
gL(a){return new A.d3(J.aw(this.a),this.b,this.$ti.i("d3<1>"))},
cI(a,b,c){var s=this.$ti
return new A.cU(this,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("cU<1,2>"))}}
A.d3.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia5:1}
A.e4.prototype={
gL(a){var s=this.a
return new A.i4(s.gL(s),this.b,A.z(this).i("i4<1>"))}}
A.h5.prototype={
gI(a){var s=this.a,r=s.gI(s)
s=this.b
if(r>s)return s
return r},
$iM:1}
A.i4.prototype={
q(){if(--this.b>=0)return this.a.q()
this.b=-1
return!1},
gH(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.i5.prototype={
gL(a){return new A.i6(J.aw(this.a),this.b,this.$ti.i("i6<1>"))}}
A.i6.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia5:1}
A.ib.prototype={
gL(a){return new A.bu(J.aw(this.a),this.$ti.i("bu<1>"))}}
A.bu.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gH()))return!0
return!1},
gH(){return this.$ti.c.a(this.a.gH())},
$ia5:1}
A.aI.prototype={
sI(a,b){throw A.n(A.cz("Cannot change the length of a fixed-length list"))},
j(a,b){A.cg(a).i("aI.E").a(b)
throw A.n(A.cz("Cannot add to a fixed-length list"))}}
A.dA.prototype={
h(a,b,c){A.z(this).i("dA.E").a(c)
throw A.n(A.cz("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.n(A.cz("Cannot change the length of an unmodifiable list"))},
j(a,b){A.z(this).i("dA.E").a(b)
throw A.n(A.cz("Cannot add to an unmodifiable list"))}}
A.fn.prototype={}
A.cX.prototype={
gI(a){return J.dK(this.a)},
aW(a,b){var s=this.a,r=J.fH(s)
return r.aW(s,r.gI(s)-1-b)}}
A.S.prototype={$r:"+(1,2)",$s:1}
A.L.prototype={$r:"+(1,2,3)",$s:2}
A.a_.prototype={$r:"+(1,2,3,4)",$s:3}
A.eC.prototype={
gap(a){return this.gI(this)===0},
t(a){return A.uU(this)},
geX(){return new A.V(this.p0(),A.z(this).i("V<aS<1,2>>"))},
p0(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$geX(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaR(),o=o.gL(o),n=A.z(s),m=n.y[1],n=n.i("aS<1,2>")
case 2:if(!o.q()){r=3
break}l=o.gH()
k=s.n(0,l)
r=4
return a.b=new A.aS(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ibh:1}
A.bl.prototype={
gI(a){return this.b.length},
gj0(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ah(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
n(a,b){if(!this.ah(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gj0()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaR(){return new A.iu(this.gj0(),this.$ti.i("iu<1>"))}}
A.iu.prototype={
gI(a){return this.a.length},
gL(a){var s=this.a
return new A.iv(s,s.length,this.$ti.i("iv<1>"))}}
A.iv.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$ia5:1}
A.dT.prototype={
dz(){var s=this,r=s.$map
if(r==null){r=new A.hr(s.$ti.i("hr<1,2>"))
A.y0(s.a,r)
s.$map=r}return r},
ah(a){return this.dz().ah(a)},
n(a,b){return this.dz().n(0,b)},
ae(a,b){this.$ti.i("~(1,2)").a(b)
this.dz().ae(0,b)},
gaR(){var s=this.dz()
return new A.b6(s,A.z(s).i("b6<1>"))},
gI(a){return this.dz().a}}
A.qB.prototype={
$0(){return B.e.bP(1000*this.a.now())},
$S:2}
A.hU.prototype={}
A.rW.prototype={
bT(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.hF.prototype={
t(a){return"Null check operator used on a null value"}}
A.kB.prototype={
t(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.lS.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qs.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.iI.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ifk:1}
A.di.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.yi(r==null?"unknown":r)+"'"},
$idS:1,
gpX(){return this},
$C:"$1",
$R:1,
$D:null}
A.jF.prototype={$C:"$0",$R:0}
A.jG.prototype={$C:"$2",$R:2}
A.lJ.prototype={}
A.lE.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.yi(s)+"'"}}
A.ew.prototype={
Y(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ew))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga1(a){return(A.nj(this.a)^A.hJ(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.le(this.a)+"'")}}
A.lu.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c7.prototype={
gI(a){return this.a},
gap(a){return this.a===0},
gaR(){return new A.b6(this,A.z(this).i("b6<1>"))},
geX(){return new A.br(this,A.z(this).i("br<1,2>"))},
ah(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.pg(a)},
pg(a){var s=this.d
if(s==null)return!1
return this.dZ(this.iV(s,a),a)>=0},
T(a,b){A.z(this).i("bh<1,2>").a(b).ae(0,new A.pI(this))},
n(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ph(b)},
ph(a){var s,r,q=this.d
if(q==null)return null
s=this.iV(q,a)
r=this.dZ(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ip(s==null?q.b=q.h_():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ip(r==null?q.c=q.h_():r,b,c)}else q.pj(b,c)},
pj(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.h_()
r=o.f4(a)
q=s[r]
if(q==null)s[r]=[o.h0(a,b)]
else{p=o.dZ(q,a)
if(p>=0)q[p].b=b
else q.push(o.h0(a,b))}},
b6(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.i("2()").a(b)
if(q.ah(a)){s=q.n(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
af(a,b){var s=this.pi(b)
return s},
pi(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f4(a)
r=n[s]
q=o.dZ(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.oe(p)
if(r.length===0)delete n[s]
return p.b},
aN(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fY()}},
ae(a,b){var s,r,q=this
A.z(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.n(A.aW(q))
s=s.c}},
ip(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.h0(b,c)
else s.b=c},
fY(){this.r=this.r+1&1073741823},
h0(a,b){var s=this,r=A.z(s),q=new A.pS(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.fY()
return q},
oe(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fY()},
f4(a){return J.ck(a)&1073741823},
iV(a,b){return a[this.f4(b)]},
dZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
t(a){return A.uU(this)},
h_(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iuT:1}
A.pI.prototype={
$2(a,b){var s=this.a,r=A.z(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.z(this.a).i("~(1,2)")}}
A.pS.prototype={}
A.b6.prototype={
gI(a){return this.a.a},
gap(a){return this.a.a===0},
gL(a){var s=this.a
return new A.c8(s,s.r,s.e,this.$ti.i("c8<1>"))},
G(a,b){return this.a.ah(b)}}
A.c8.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia5:1}
A.cS.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.cR(s,s.r,s.e,this.$ti.i("cR<1>"))}}
A.cR.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia5:1}
A.br.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.dW(s,s.r,s.e,this.$ti.i("dW<1,2>"))}}
A.dW.prototype={
gH(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aS(s.a,s.b,r.$ti.i("aS<1,2>"))
r.c=s.c
return!0}},
$ia5:1}
A.hr.prototype={
f4(a){return A.BP(a)&1073741823},
dZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.u3.prototype={
$1(a){return this.a(a)},
$S:30}
A.u4.prototype={
$2(a,b){return this.a(a,b)},
$S:55}
A.u5.prototype={
$1(a){return this.a(A.a6(a))},
$S:75}
A.c_.prototype={
t(a){return this.jw(!1)},
jw(a){var s,r,q,p,o,n=this.mz(),m=this.ew(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.x3(o):l+A.K(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
mz(){var s,r=this.$s
while($.ty.length<=r)B.a.j($.ty,null)
s=$.ty[r]
if(s==null){s=this.m7()
B.a.h($.ty,r,s)}return s},
m7(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.wN(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.h(j,q,r[s])}}j=A.zK(j,!1,k)
j.$flags=3
return j}}
A.ft.prototype={
ew(){return[this.a,this.b]},
Y(a,b){if(b==null)return!1
return b instanceof A.ft&&this.$s===b.$s&&J.ad(this.a,b.a)&&J.ad(this.b,b.b)},
ga1(a){return A.qu(this.$s,this.a,this.b,B.an)}}
A.fu.prototype={
ew(){return[this.a,this.b,this.c]},
Y(a,b){var s=this
if(b==null)return!1
return b instanceof A.fu&&s.$s===b.$s&&J.ad(s.a,b.a)&&J.ad(s.b,b.b)&&J.ad(s.c,b.c)},
ga1(a){var s=this
return A.qu(s.$s,s.a,s.b,s.c)}}
A.fv.prototype={
ew(){return this.a},
Y(a,b){if(b==null)return!1
return b instanceof A.fv&&this.$s===b.$s&&A.Ay(this.a,b.a)},
ga1(a){return A.qu(this.$s,A.zS(this.a),B.an,B.an)}}
A.hn.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gj8(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.wS(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kd(a){var s=this.b.exec(a)
if(s==null)return null
return new A.iw(s)},
hh(a,b){return new A.m2(this,b,0)},
my(a,b){var s,r=this.gj8()
if(r==null)r=A.ef(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.iw(s)},
$iqy:1,
$iA5:1}
A.iw.prototype={
gii(){return this.b.index},
ghv(){var s=this.b
return s.index+s[0].length},
n(a,b){var s
A.u(b)
s=this.b
if(!(b<s.length))return A.a(s,b)
return s[b]},
$icu:1,
$ihO:1}
A.m2.prototype={
gL(a){return new A.id(this.a,this.b,this.c)}}
A.id.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.my(l,s)
if(p!=null){m.d=p
o=p.ghv()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.a(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.a(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia5:1}
A.lF.prototype={
ghv(){return this.a+this.c.length},
n(a,b){A.u(b)
if(b!==0)throw A.n(A.hL(b,null))
return this.c},
$icu:1,
gii(){return this.a}}
A.n4.prototype={
gL(a){return new A.n5(this.a,this.b,this.c)}}
A.n5.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.lF(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia5:1}
A.td.prototype={
h2(){var s=this.b
if(s===this)throw A.n(new A.dr("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.n(A.dV(""))
return s}}
A.f_.prototype={
gaH(a){return B.ki},
$iak:1,
$iuK:1}
A.hB.prototype={}
A.kV.prototype={
gaH(a){return B.kj},
$iak:1,
$iuL:1}
A.f0.prototype={
gI(a){return a.length},
$ibP:1}
A.hz.prototype={
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
h(a,b,c){A.bI(c)
a.$flags&2&&A.bw(a)
A.d9(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iE:1}
A.hA.prototype={
h(a,b,c){A.u(c)
a.$flags&2&&A.bw(a)
A.d9(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iE:1}
A.kW.prototype={
gaH(a){return B.kk},
$iak:1,
$ioE:1}
A.kX.prototype={
gaH(a){return B.kl},
$iak:1,
$ioF:1}
A.kY.prototype={
gaH(a){return B.km},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$ip2:1}
A.kZ.prototype={
gaH(a){return B.kn},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$ip3:1}
A.l_.prototype={
gaH(a){return B.ko},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$ip4:1}
A.l0.prototype={
gaH(a){return B.kq},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$irY:1}
A.l1.prototype={
gaH(a){return B.kr},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$irZ:1}
A.hC.prototype={
gaH(a){return B.ks},
gI(a){return a.length},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$it_:1}
A.l2.prototype={
gaH(a){return B.kt},
gI(a){return a.length},
n(a,b){A.u(b)
A.d9(b,a,a.length)
return a[b]},
$iak:1,
$it0:1}
A.ix.prototype={}
A.iy.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.cb.prototype={
i(a){return A.iN(v.typeUniverse,this,a)},
ac(a){return A.xy(v.typeUniverse,this,a)}}
A.mw.prototype={}
A.n9.prototype={
t(a){return A.bU(this.a,null)}}
A.mn.prototype={
t(a){return this.a}}
A.iJ.prototype={$id1:1}
A.t7.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:29}
A.t6.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:68}
A.t8.prototype={
$0(){this.a.$0()},
$S:35}
A.t9.prototype={
$0(){this.a.$0()},
$S:35}
A.tE.prototype={
lL(a,b){if(self.setTimeout!=null)self.setTimeout(A.fE(new A.tF(this,b),0),a)
else throw A.n(A.cz("`setTimeout()` not found."))}}
A.tF.prototype={
$0(){this.b.$0()},
$S:0}
A.al.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
nH(a,b){var s,r,q
a=A.u(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
q(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.q()){o.b=s.gH()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.nH(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xs
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.xs
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.n(A.cd("sync*"))}return!1},
aM(a){var s,r,q=this
if(a instanceof A.V){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.aw(a)
return 2}},
$ia5:1}
A.V.prototype={
gL(a){return new A.al(this.a(),this.$ti.i("al<1>"))}}
A.cp.prototype={
t(a){return A.K(this.a)},
$ias:1,
gdn(){return this.b}}
A.mh.prototype={
jX(a){var s=this.a
if((s.a&30)!==0)throw A.n(A.cd("Future already completed"))
s.iu(A.B6(a,null))}}
A.ig.prototype={}
A.io.prototype={
pn(a){if((this.c&15)!==6)return!0
return this.b.b.hR(t.iW.a(this.d),a.a,t.y,t.K)},
pd(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pF(q,m,a.b,o,n,t.gl)
else p=l.hR(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.dD(s))){if((r.c&1)!==0)throw A.n(A.aG("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.n(A.aG("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bG.prototype={
pL(a,b,c){var s,r,q=this.$ti
q.ac(c).i("1/(2)").a(a)
s=$.aU
if(s===B.a8){if(!t.ng.b(b)&&!t.mq.b(b))throw A.n(A.uH(b,"onError",u.c))}else{c.i("@<0/>").ac(q.c).i("1(2)").a(a)
b=A.Bw(b,s)}r=new A.bG(s,c.i("bG<0>"))
this.iq(new A.io(r,3,a,b,q.i("@<1>").ac(c).i("io<1,2>")))
return r},
nP(a){this.a=this.a&1|16
this.c=a},
ep(a){this.a=a.a&30|this.a&1
this.c=a.c},
iq(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.iq(a)
return}r.ep(s)}A.ng(null,null,r.b,t.O.a(new A.th(r,a)))}},
jf(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.jf(a)
return}m.ep(n)}l.a=m.eE(a)
A.ng(null,null,m.b,t.O.a(new A.tl(l,m)))}},
dD(){var s=t.F.a(this.c)
this.c=null
return this.eE(s)},
eE(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
m6(a){var s,r=this
r.$ti.c.a(a)
s=r.dD()
r.a=8
r.c=a
A.ea(r,s)},
m5(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.dD()
q.ep(a)
A.ea(q,r)},
iG(a){var s=this.dD()
this.nP(a)
A.ea(this,s)},
lP(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("eP<1>").b(a)){this.m_(a)
return}this.lQ(a)},
lQ(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ng(null,null,s.b,t.O.a(new A.tj(s,a)))},
m_(a){A.v7(this.$ti.i("eP<1>").a(a),this,!1)
return},
iu(a){this.a^=2
A.ng(null,null,this.b,t.O.a(new A.ti(this,a)))},
$ieP:1}
A.th.prototype={
$0(){A.ea(this.a,this.b)},
$S:0}
A.tl.prototype={
$0(){A.ea(this.b,this.a.a)},
$S:0}
A.tk.prototype={
$0(){A.v7(this.a.a,this.b,!0)},
$S:0}
A.tj.prototype={
$0(){this.a.m6(this.b)},
$S:0}
A.ti.prototype={
$0(){this.a.iG(this.b)},
$S:0}
A.to.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pE(t.df.a(q.d),t.z)}catch(p){s=A.dD(p)
r=A.ek(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.uI(q)
n=k.a
n.c=new A.cp(q,o)
q=n}q.b=!0
return}if(j instanceof A.bG&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bG){m=k.b.a
l=new A.bG(m.b,m.$ti)
j.pL(new A.tp(l,m),new A.tq(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tp.prototype={
$1(a){this.a.m5(this.b)},
$S:29}
A.tq.prototype={
$2(a,b){A.ef(a)
t.gl.a(b)
this.a.iG(new A.cp(a,b))},
$S:57}
A.tn.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hR(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.dD(l)
r=A.ek(l)
q=s
p=r
if(p==null)p=A.uI(q)
o=this.a
o.c=new A.cp(q,p)
o.b=!0}},
$S:0}
A.tm.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.pn(s)&&p.a.e!=null){p.c=p.a.pd(s)
p.b=!1}}catch(o){r=A.dD(o)
q=A.ek(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.uI(p)
m=l.b
m.c=new A.cp(p,n)
p=m}p.b=!0}},
$S:0}
A.m5.prototype={}
A.i0.prototype={
gI(a){var s,r,q=this,p={},o=new A.bG($.aU,t.h0)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.rE(p,q))
t.c5.a(new A.rF(p,o))
A.e9(q.a,q.b,r,!1,s.c)
return o}}
A.rE.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.rF.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.dD()
r.c.a(q)
s.a=8
s.c=q
A.ea(s,p)},
$S:0}
A.iO.prototype={$ixk:1}
A.mX.prototype={
pG(a){var s,r,q
t.O.a(a)
try{if(B.a8===$.aU){a.$0()
return}A.xP(null,null,this,a,t.ef)}catch(q){s=A.dD(q)
r=A.ek(q)
A.tT(A.ef(s),t.gl.a(r))}},
pH(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a8===$.aU){a.$1(b)
return}A.xQ(null,null,this,a,b,t.ef,c)}catch(q){s=A.dD(q)
r=A.ek(q)
A.tT(A.ef(s),t.gl.a(r))}},
oy(a){return new A.tA(this,t.O.a(a))},
oz(a,b){return new A.tB(this,b.i("~(0)").a(a),b)},
pE(a,b){b.i("0()").a(a)
if($.aU===B.a8)return a.$0()
return A.xP(null,null,this,a,b)},
hR(a,b,c,d){c.i("@<0>").ac(d).i("1(2)").a(a)
d.a(b)
if($.aU===B.a8)return a.$1(b)
return A.xQ(null,null,this,a,b,c,d)},
pF(a,b,c,d,e,f){d.i("@<0>").ac(e).ac(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aU===B.a8)return a.$2(b,c)
return A.Bx(null,null,this,a,b,c,d,e,f)}}
A.tA.prototype={
$0(){return this.a.pG(this.b)},
$S:0}
A.tB.prototype={
$1(a){var s=this.c
return this.a.pH(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.tU.prototype={
$0(){A.zp(this.a,this.b)},
$S:0}
A.iq.prototype={
gI(a){return this.a},
gap(a){return this.a===0},
gaR(){return new A.ir(this,this.$ti.i("ir<1>"))},
ah(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.m9(a)},
m9(a){var s=this.d
if(s==null)return!1
return this.cC(this.iD(s,a),a)>=0},
n(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xn(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xn(q,b)
return r}else return this.mN(b)},
mN(a){var s,r,q=this.d
if(q==null)return null
s=this.iD(q,a)
r=this.cC(s,a)
return r<0?null:s[r+1]},
h(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.iC(s==null?m.b=A.v8():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.iC(r==null?m.c=A.v8():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.v8()
p=A.nj(b)&1073741823
o=q[p]
if(o==null){A.v9(q,p,[b,c]);++m.a
m.e=null}else{n=m.cC(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ae(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.iH()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.n(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.n(A.aW(m))}},
iH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ao(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
iC(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.v9(a,b,c)},
iD(a,b){return a[A.nj(b)&1073741823]}}
A.fr.prototype={
cC(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ir.prototype={
gI(a){return this.a.a},
gap(a){return this.a.a===0},
gL(a){var s=this.a
return new A.is(s,s.iH(),this.$ti.i("is<1>"))},
G(a,b){return this.a.ah(b)}}
A.is.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.n(A.aW(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia5:1}
A.d5.prototype={
no(){return new A.d5(A.z(this).i("d5<1>"))},
gL(a){var s=this,r=new A.d6(s,s.r,A.z(s).i("d6<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.m8(b)},
m8(a){var s=this.d
if(s==null)return!1
return this.cC(s[this.fL(a)],a)>=0},
gaz(a){var s=this.e
if(s==null)throw A.n(A.cd("No elements"))
return A.z(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.z(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iB(s==null?q.b=A.vb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iB(r==null?q.c=A.vb():r,b)}else return q.bj(b)},
bj(a){var s,r,q,p=this
A.z(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.vb()
r=p.fL(a)
q=s[r]
if(q==null)s[r]=[p.fK(a)]
else{if(p.cC(q,a)>=0)return!1
q.push(p.fK(a))}return!0},
af(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.jk(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.jk(s.c,b)
else return s.ny(b)},
ny(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fL(a)
r=n[s]
q=o.cC(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.iF(p)
return!0},
mB(a,b){var s,r,q,p,o,n=this,m=A.z(n)
m.i("B(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.n(A.aW(n))
if(!0===o)n.af(0,r)}},
iB(a,b){A.z(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fK(b)
return!0},
jk(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.iF(s)
delete a[b]
return!0},
iE(){this.r=this.r+1&1073741823},
fK(a){var s,r=this,q=new A.mL(A.z(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iE()
return q},
iF(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iE()},
fL(a){return J.ck(a)&1073741823},
cC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.mL.prototype={}
A.d6.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.n(A.aW(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia5:1}
A.a1.prototype={
gL(a){return new A.c9(a,this.gI(a),A.cg(a).i("c9<a1.E>"))},
aW(a,b){return this.n(a,b)},
gko(a){return this.gI(a)!==0},
la(a,b){var s=A.cg(a)
return new A.aq(a,s.i("B(a1.E)").a(b),s.i("aq<a1.E>"))},
cI(a,b,c){var s=A.cg(a)
return new A.au(a,s.ac(c).i("1(a1.E)").a(b),s.i("@<a1.E>").ac(c).i("au<1,2>"))},
cO(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.wP(0,A.cg(a).i("a1.E"))
return s}r=o.n(a,0)
q=A.ao(o.gI(a),r,!0,A.cg(a).i("a1.E"))
for(p=1;p<o.gI(a);++p)B.a.h(q,p,o.n(a,p))
return q},
e9(a){return this.cO(a,!0)},
j(a,b){var s
A.cg(a).i("a1.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.h(a,s,b)},
t(a){return A.pF(a,"[","]")},
$iM:1,
$ik:1,
$iE:1}
A.ap.prototype={
ae(a,b){var s,r,q,p=A.z(this)
p.i("~(ap.K,ap.V)").a(b)
for(s=this.gaR(),s=s.gL(s),p=p.i("ap.V");s.q();){r=s.gH()
q=this.n(0,r)
b.$2(r,q==null?p.a(q):q)}},
geX(){return this.gaR().cI(0,new A.q4(this),A.z(this).i("aS<ap.K,ap.V>"))},
ah(a){return this.gaR().G(0,a)},
gI(a){var s=this.gaR()
return s.gI(s)},
gap(a){var s=this.gaR()
return s.gap(s)},
t(a){return A.uU(this)},
$ibh:1}
A.q4.prototype={
$1(a){var s=this.a,r=A.z(s)
r.i("ap.K").a(a)
s=s.n(0,a)
if(s==null)s=r.i("ap.V").a(s)
return new A.aS(a,s,r.i("aS<ap.K,ap.V>"))},
$S(){return A.z(this.a).i("aS<ap.K,ap.V>(ap.K)")}}
A.q5.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.K(a)
r.a=(r.a+=s)+": "
s=A.K(b)
r.a+=s},
$S:33}
A.ht.prototype={
gL(a){var s=this
return new A.ec(s,s.c,s.d,s.b,s.$ti.i("ec<1>"))},
gap(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aW(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a2(A.p1(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.a(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.pF(this,"{","}")},
cM(){var s,r,q=this,p=q.b
if(p===q.c)throw A.n(A.ct());++q.d
s=q.a
if(!(p<s.length))return A.a(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.h(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bj(a){var s,r=this
r.$ti.c.a(a)
B.a.h(r.a,r.c,a)
s=(r.c+1&r.a.length-1)>>>0
r.c=s
if(r.b===s)r.iW();++r.d},
iW(){var s=this,r=A.ao(s.a.length*2,null,!1,s.$ti.i("1?")),q=s.a,p=s.b,o=q.length-p
B.a.i8(r,0,o,q,p)
B.a.i8(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
$if9:1}
A.ec.prototype={
gH(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.a2(A.aW(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.a(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$ia5:1}
A.fi.prototype={
T(a,b){var s
for(s=J.aw(A.z(this).i("k<1>").a(b));s.q();)this.j(0,s.gH())},
cI(a,b,c){var s=A.z(this)
return new A.cM(this,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("cM<1,2>"))},
t(a){return A.pF(this,"{","}")},
aQ(a,b){var s,r,q,p,o=A.va(this,this.r,A.z(this).c)
if(!o.q())return""
s=o.d
r=J.et(s==null?o.$ti.c.a(s):s)
if(!o.q())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.K(p==null?s.a(p):p)}while(o.q())
s=q}else{q=r
do{p=o.d
q=q+b+A.K(p==null?s.a(p):p)}while(o.q())
s=q}return s.charCodeAt(0)==0?s:s},
$iM:1,
$ik:1,
$ihX:1}
A.iF.prototype={}
A.mG.prototype={
n(a,b){var s,r=this.b
if(r==null)return this.c.n(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ma(b):s}},
gI(a){return this.b==null?this.c.a:this.eq().length},
gap(a){return this.gI(0)===0},
gaR(){if(this.b==null){var s=this.c
return new A.b6(s,A.z(s).i("b6<1>"))}return new A.mH(this)},
ah(a){if(this.b==null)return this.c.ah(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.eq()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tO(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.n(A.aW(o))}},
eq(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.b(Object.keys(this.a),t.s)
return s},
ma(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tO(this.a[a])
return this.b[a]=s}}
A.mH.prototype={
gI(a){return this.a.gI(0)},
aW(a,b){var s=this.a
if(s.b==null)s=s.gaR().aW(0,b)
else{s=s.eq()
if(!(b>=0&&b<s.length))return A.a(s,b)
s=s[b]}return s},
gL(a){var s=this.a
if(s.b==null){s=s.gaR()
s=s.gL(s)}else{s=s.eq()
s=new J.b4(s,s.length,A.O(s).i("b4<1>"))}return s},
G(a,b){return this.a.ah(b)}}
A.jJ.prototype={}
A.jL.prototype={}
A.hs.prototype={
t(a){var s=A.jZ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kD.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.kC.prototype={
oS(a){var s=A.Bu(a,this.goT().a)
return s},
k8(a){var s=A.Ap(a,this.gp_().b,null)
return s},
gp_(){return B.hL},
goT(){return B.hK}}
A.pK.prototype={}
A.pJ.prototype={}
A.tt.prototype={
ld(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.i.aK(a,r,q)
r=q+1
o=A.b8(92)
s.a+=o
o=A.b8(117)
s.a+=o
o=A.b8(100)
s.a+=o
o=p>>>8&15
o=A.b8(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.b8(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b8(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.i.aK(a,r,q)
r=q+1
o=A.b8(92)
s.a+=o
switch(p){case 8:o=A.b8(98)
s.a+=o
break
case 9:o=A.b8(116)
s.a+=o
break
case 10:o=A.b8(110)
s.a+=o
break
case 12:o=A.b8(102)
s.a+=o
break
case 13:o=A.b8(114)
s.a+=o
break
default:o=A.b8(117)
s.a+=o
o=A.b8(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.b8(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.b8(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.i.aK(a,r,q)
r=q+1
o=A.b8(92)
s.a+=o
o=A.b8(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.i.aK(a,r,m)},
fJ(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.n(new A.kD(a,null))}B.a.j(s,a)},
fn(a){var s,r,q,p,o=this
if(o.lc(a))return
o.fJ(a)
try{s=o.b.$1(a)
if(!o.lc(s)){q=A.wT(a,null,o.gjb())
throw A.n(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.dD(p)
q=A.wT(a,r,o.gjb())
throw A.n(q)}},
lc(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ld(a)
s.a+='"'
return!0}else if(t.gs.b(a)){q.fJ(a)
q.pU(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fJ(a)
r=q.pV(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
pU(a){var s,r,q=this.c
q.a+="["
s=J.fH(a)
if(s.gko(a)){this.fn(s.n(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fn(s.n(a,r))}}q.a+="]"},
pV(a){var s,r,q,p,o,n,m=this,l={}
if(a.gap(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.ao(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ae(0,new A.tu(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.ld(A.a6(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.a(r,n)
m.fn(r[n])}p.a+="}"
return!0}}
A.tu.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.h(s,r.a++,a)
B.a.h(s,r.a++,b)},
$S:33}
A.ts.prototype={
gjb(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dO.prototype={
Y(a,b){if(b==null)return!1
return b instanceof A.dO&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga1(a){return A.qu(this.a,this.b,B.an,B.an)},
ak(a,b){var s
t.cs.a(b)
s=B.c.ak(this.a,b.a)
if(s!==0)return s
return B.c.ak(this.b,b.b)},
t(a){var s=this,r=A.zk(A.A_(s)),q=A.jO(A.zY(s)),p=A.jO(A.zU(s)),o=A.jO(A.zV(s)),n=A.jO(A.zX(s)),m=A.jO(A.zZ(s)),l=A.wv(A.zW(s)),k=s.b,j=k===0?"":A.wv(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaB:1}
A.te.prototype={
t(a){return this.aL()}}
A.as.prototype={
gdn(){return A.zT(this)}}
A.jm.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jZ(s)
return"Assertion failed"}}
A.d1.prototype={}
A.cn.prototype={
gfS(){return"Invalid argument"+(!this.a?"(s)":"")},
gfR(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.K(p),n=s.gfS()+q+o
if(!s.a)return n
return n+s.gfR()+": "+A.jZ(s.ghB())},
ghB(){return this.b}}
A.fa.prototype={
ghB(){return A.xC(this.b)},
gfS(){return"RangeError"},
gfR(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.K(q):""
else if(q==null)s=": Not greater than or equal to "+A.K(r)
else if(q>r)s=": Not in inclusive range "+A.K(r)+".."+A.K(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.K(r)
return s}}
A.ks.prototype={
ghB(){return A.u(this.b)},
gfS(){return"RangeError"},
gfR(){if(A.u(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.i7.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lR.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.e2.prototype={
t(a){return"Bad state: "+this.a}}
A.jK.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jZ(s)+"."}}
A.l6.prototype={
t(a){return"Out of Memory"},
gdn(){return null},
$ias:1}
A.i_.prototype={
t(a){return"Stack Overflow"},
gdn(){return null},
$ias:1}
A.tg.prototype={
t(a){return"Exception: "+this.a}}
A.oK.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.i.aK(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
cI(a,b,c){var s=A.z(this)
return A.q7(this,s.ac(c).i("1(k.E)").a(b),s.i("k.E"),c)},
aA(a,b,c,d){var s,r
d.a(b)
A.z(this).ac(d).i("1(1,k.E)").a(c)
for(s=this.gL(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
d_(a,b){var s
A.z(this).i("B(k.E)").a(b)
for(s=this.gL(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cO(a,b){var s=A.a8(this,A.z(this).i("k.E"))
return s},
e9(a){return this.cO(0,!0)},
gI(a){var s,r=this.gL(this)
for(s=0;r.q();)++s
return s},
gap(a){return!this.gL(this).q()},
gaz(a){var s=this.gL(this)
if(!s.q())throw A.n(A.ct())
return s.gH()},
hx(a,b,c){var s,r=A.z(this)
r.i("B(k.E)").a(b)
r.i("k.E()?").a(c)
for(r=this.gL(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aW(a,b){var s,r
A.hM(b,"index")
s=this.gL(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.n(A.p1(b,b-r,this,null,"index"))},
t(a){return A.zz(this,"(",")")}}
A.aS.prototype={
t(a){return"MapEntry("+A.K(this.a)+": "+A.K(this.b)+")"}}
A.aO.prototype={
ga1(a){return A.Q.prototype.ga1.call(this,0)},
t(a){return"null"}}
A.Q.prototype={$iQ:1,
Y(a,b){return this===b},
ga1(a){return A.hJ(this)},
t(a){return"Instance of '"+A.le(this)+"'"},
gaH(a){return A.C_(this)},
toString(){return this.t(this)}}
A.n6.prototype={
t(a){return""},
$ifk:1}
A.rr.prototype={
goZ(){var s,r=this.b
if(r==null)r=$.uX.$0()
s=r-this.a
if($.vO()===1000)return s
return B.c.A(s,1000)}}
A.e3.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iAc:1}
A.k0.prototype={
h(a,b,c){this.$ti.i("1?").a(c)
this.a.set(b,c)},
t(a){return"Expando:null"}}
A.qr.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.u8.prototype={
$1(a){var s,r,q,p
if(A.xN(a))return a
s=this.a
if(s.ah(a))return s.n(0,a)
if(t.av.b(a)){r={}
s.h(0,a,r)
for(s=a.gaR(),s=s.gL(s);s.q();){q=s.gH()
r[q]=this.$1(a.n(0,q))}return r}else if(t.e7.b(a)){p=[]
s.h(0,a,p)
B.a.T(p,J.z5(a,this,t.z))
return p}else return a},
$S:38}
A.ui.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(this.b.i("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.a2(A.cd("Future already completed"))
s.lP(r.i("1/").a(a))
return null},
$S:44}
A.uj.prototype={
$1(a){if(a==null)return this.a.jX(new A.qr(a===undefined))
return this.a.jX(a)},
$S:44}
A.tX.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.xM(a))return a
s=this.a
a.toString
if(s.ah(a))return s.n(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.a2(A.cw(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.vn(!0,"isUtc",t.y)
return new A.dO(r,0,!0)}if(a instanceof RegExp)throw A.n(A.aG("structured clone of RegExp",null))
if(a instanceof Promise)return A.Ck(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.D(p,p)
s.h(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.fI(n),p=s.gL(n);p.q();)m.push(A.xZ(p.gH()))
for(l=0;l<s.gI(n);++l){k=s.n(n,l)
if(!(l<m.length))return A.a(m,l)
j=m[l]
if(k!=null)o.h(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.h(0,a,o)
h=A.u(a.length)
for(s=J.fH(i),l=0;l<h;++l)o.push(this.$1(s.n(i,l)))
return o}return a},
$S:38}
A.mF.prototype={
a4(a){if(a<=0||a>4294967296)throw A.n(A.x5(u.g+a))
return Math.random()*a>>>0},
hF(){return Math.random()},
$iuY:1}
A.mV.prototype={
lK(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
do{s=a>>>0
a=B.c.A(a-s,k)
r=a>>>0
a=B.c.A(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.c.A(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.c.A(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.c.A(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.c.A(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.c.A(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==j)
if(o===0&&n===0)l.a=23063
l.cd()
l.cd()
l.cd()
l.cd()},
cd(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.A(o-n+(q-p)+(m-r),4294967296)>>>0},
a4(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.n(A.x5(u.g+a))
s=a-1
if((a&s)>>>0===0){p.cd()
return(p.a&s)>>>0}do{p.cd()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hF(){var s,r=this
r.cd()
s=r.a
r.cd()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iuY:1}
A.kf.prototype={
oI(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.rV(b).dK(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.nE(a,b,c,new A.ab(A.ao(r*s,null,!1,t.aT),new A.a3(new A.d(0,0),new A.d(r,s)),t.gy)).dK(d)},
jY(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.eZ($.fL(),new A.oO())
if(b==null)b=B.a.gaz($.ep())
s=A.D(t.c3,t.D)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.dn(a,d,b,c,A.bC(B.v,l),new A.eJ(A.ao(9,l,!1,t.c)),A.bC(B.cb,l),A.bC(B.ca,l),s,0,new A.hZ(A.D(r,q),A.D(r,q)),60,0,new A.kJ(A.b([],t.kU)),new A.hw(A.D(p,q),A.D(p,q),A.D(o,q),A.D(t.R,q),A.bc(o),A.D(o,q)),new A.i1(),new A.fU(),new A.ia(),new A.hh())
n.lE(a,d,b,c)
for(r=new A.cR($.hY,$.hY.r,$.hY.e,A.z($.hY).i("cR<2>"));r.q();){q=r.d
m=A.bC(new A.c6(q.b,26),l)
q.aI(m)
s.h(0,q,m)}return n},
oR(a){return this.jY(a,null,!1,null)},
lu(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.C(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.b([],t.I)
for(n=A.wZ(l,n,m),m=A.z(n),n=new A.bs(J.aw(n.a),n.b,m.i("bs<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bp().b.n(0,r)
if(p==null)A.a2(A.aG('Unknown resource "'+r+'".',o))
k.push(new A.N(p.a,o,o,o,q))}a.c.e.b1(a.ax,1,new A.oP(a,k))
return k},
pQ(a,b){var s,r=a.f.B(b.gm(),b.gp()),q=r.x
if(q===0){if(!this.od(a,b,r))this.jr(a,b,r)}else{s=r.w
if(s===$.b9()){--q
r.x=q
if(q<=0){q=r.a
q=$.ux().n(0,q)
if((q==null?0:q)>0){q=$.o()
s=t.p.a(A.Ag(r.a))
q=q.U(s.length)
if(!(q>=0&&q<s.length))return A.a(s,q)
r.a=s[q]}a.gaw().f=!0}else return new A.jz(b)}else if(s===$.bJ()){this.jr(a,b,r)
r=r.x
if(r>0)return new A.lb(b,B.e.O(A.x(r,0,255,3,8)))}}return null},
od(a,b,c){var s,r={},q=c.a,p=$.ux().n(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.oN(r,a,b)
q.$3(-1,0,3)
q.$3(1,0,3)
q.$3(0,-1,3)
q.$3(0,1,3)
q.$3(-1,-1,2)
q.$3(-1,1,2)
q.$3(1,-1,2)
q.$3(1,1,2)
r=r.a
q=$.o()
if(r<=q.U(50+p))return!1
r=c.a
s=$.vQ().n(0,r)
if(s==null)s=0
c.x=q.br(s/2|0,s)
c.w=$.b9()
return a.gaw().f=!0},
jr(a,b,c){var s={},r=$.Y()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.oM(s,a,b)
r.$2(0,0)
r.$2(-1,0)
r.$2(1,0)
r.$2(0,-1)
r.$2(0,1)
r.$2(-1,-1)
r.$2(1,-1)
r.$2(-1,1)
r.$2(1,1)
c.w=$.bJ()
c.x=B.c.P(B.e.M(s.b/s.a)-4,0,255)},
$izj:1}
A.oO.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:34}
A.oP.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:6}
A.oN.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.B(s.gm()+a,s.gp()+b)
if(r.x===0)return
if(r.w===$.b9())this.a.a+=c},
$S:72}
A.oM.prototype={
$2(a,b){var s=this.c,r=this.b.f.B(s.gm()+a,s.gp()+b)
s=$.Y()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bJ())s.b=s.b+r.x}},
$S:74}
A.k2.prototype={
gN(){return"Fairy Dust"},
gX(){return"TODO"},
gbD(){return new A.hK($.uv())},
al(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.O(A.x(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.O(A.x(q,0,50,1,6))
return A.x7(A.bg(new A.aL(A.aT("dust",B.y,B.aH).a6(1)),"affects",s,$.db(),r))}}
A.mo.prototype={}
A.k6.prototype={
gN(){return"Flitter"},
gX(){return"TODO"},
gbD(){return new A.hK($.uv())},
al(a){return new A.k9()}}
A.k9.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.O(A.x(r,0,50,3,20))
q.b=1
this.pm("{1} unfold your wings and take flight.",this.a)}return B.n}}
A.mr.prototype={}
A.kO.prototype={
hi(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.c()
k=k.x
k===$&&A.c()
k=k.w.B(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcR()
q=A.a8(r,r.$ti.i("k.E"))
p=s.a(l.a).eS(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gbx())continue
if(!(n<p.length))return A.a(p,n)
m=p[n]
m.cT(s,"mastery")
o+=m.hL(l,l.a,k)
if(k.z<=0)break}return o},
ge0(){return 1}}
A.lY.prototype={
gX(){var s=this.a
if(0>=s.length)return A.a(s,0)
return"You must have "+(B.i.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dM(a){if(a.y.Q.f.gcR().d_(0,new A.t2(this)))return null
return"No "+this.a+" equipped"}}
A.t2.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:9}
A.jr.prototype={
gN(){return"Ball Lightning"},
gX(){return"TODO"},
gar(){return 8},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.m8.prototype={}
A.jA.prototype={
gN(){return"Chain Lightning"},
gX(){return"TODO"},
gar(){return 6},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.me.prototype={}
A.jM.prototype={
gN(){return"Crystallize"},
gX(){return"TODO"},
gar(){return 6},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mi.prototype={}
A.jW.prototype={
gN(){return"Earthwork"},
gX(){return"TODO"},
gar(){return 10},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mk.prototype={}
A.k3.prototype={
gN(){return"Fire Barrier"},
gX(){return"Creates a wall of fire."},
gar(){return 4},
au(a){return 45},
f9(a,b){var s,r,q,p=a.y,o=A.bg(new A.aL(A.aT("fire",B.y,B.W).a6(1)),"burn",10+this.ek(p.Q)*3,$.b9(),8)
p=p.y
s=A.bN(o)
r=p.S(0,b)
q=Math.sqrt(r.gaF())
return new A.js(b,-r.b/q,r.a/q,s,A.bc(t.u))},
ed(a,b){return 8},
gaq(){return this.a}}
A.mp.prototype={}
A.k4.prototype={
gN(){return"Firelight"},
gX(){return"TODO"},
gar(){return 1},
au(a){return 4},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mq.prototype={}
A.kc.prototype={
gN(){return"Freezing Hand"},
gX(){return"TODO"},
gar(){return 4},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mv.prototype={}
A.ki.prototype={
gN(){return"Gust"},
gX(){return"TODO"},
gar(){return 1},
au(a){return 4},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mz.prototype={}
A.kj.prototype={
gN(){return"Hail Storm"},
gX(){return"TODO"},
gar(){return 8},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mA.prototype={}
A.kp.prototype={
gN(){return"Icicle"},
gX(){return"TODO"},
gar(){return 1},
au(a){return 12},
f9(a,b){return A.uJ(b,A.bN(A.bg(new A.aL(A.aT("icicle",B.y,B.W).a6(1)),"pierce",8+this.ek(a.y.Q)*4,$.ci(),8)),!1,null)},
ed(a,b){return 8},
gaq(){return this.a}}
A.mB.prototype={}
A.kr.prototype={
gN(){return"Immolation"},
gX(){return"TODO"},
gar(){return 6},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mC.prototype={}
A.kG.prototype={
gN(){return"Lava Flow"},
gX(){return"TODO"},
gar(){return 8},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mI.prototype={}
A.kI.prototype={
gN(){return"Lightning Bolt"},
gX(){return"TODO"},
gar(){return 4},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mJ.prototype={}
A.kP.prototype={
gN(){return"Melt Stone"},
gX(){return"TODO"},
gar(){return 3},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mM.prototype={}
A.li.prototype={
gN(){return"Quicksand"},
gX(){return"TODO"},
gar(){return 8},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mU.prototype={}
A.lw.prototype={
gN(){return"Sandstorm"},
gX(){return"TODO"},
gar(){return 8},
au(a){return 24},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.mY.prototype={}
A.ly.prototype={
gN(){return"Sparks"},
gX(){return"TODO"},
gar(){return 1},
au(a){return 10},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.n1.prototype={}
A.lD.prototype={
gbD(){return new A.jk(this.gaq(),this.gar())},
ek(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gaq(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=p.n(0,m)
if(l==null)l=0
k=q.b.n(0,m)
j=B.c.P(l+(k==null?0:k),0,15)
if(j>=this.gar())o+=j}return o}}
A.jk.prototype={
gX(){return"You must be at level "+this.b+" or higher in "+this.iL()+"."},
dM(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=o.n(0,m)
if(l==null)l=0
k=p.b.n(0,m)
if(B.c.P(l+(k==null?0:k),0,15)>=q)return null}return"Not enough "+this.iL()},
iL(){var s,r,q,p,o,n=this.a
A:{s=n.length
r=s<=0?A.a2(A.cd("Should have at least one arcanum.")):null
if(s===1){if(0>=s)return A.a(n,0)
q=n[0]
r=q.b
break A}if(s===2){if(0>=s)return A.a(n,0)
q=n[0]
if(1>=s)return A.a(n,1)
r=q.b+" or "+n[1].b
break A}if(s>=1){r=s-1
p=B.a.fz(n,0,r)
if(!(r<n.length))return A.a(n,r)
o=n[r]
r=A.O(p)
r=new A.au(p,r.i("r(1)").a(new A.nD()),r.i("au<1,r>")).aQ(0,", ")+", or "+o.b
break A}}return r}}
A.nD.prototype={
$1(a){return t.dx.a(a).b},
$S:80}
A.lM.prototype={
gN(){return"Tidal Wave"},
gX(){return"Summons a giant tidal wave."},
gar(){return 5},
au(a){return 70},
al(a){var s=a.y,r=this.ek(s.Q),q=A.bg(new A.aL(A.aT("wave",B.y,B.W).a6(1)),"inundate",50+r*15,$.dc(),15+r)
return A.oG(s.y,A.bN(q),new A.ai($.b2().a|$.bK().a|$.iX().a),2)},
gaq(){return this.a}}
A.n8.prototype={}
A.m0.prototype={
gN(){return"Wind Ride"},
gX(){return"TODO"},
gar(){return 3},
au(a){return 16},
al(a){throw A.n(A.bf(null))},
gaq(){return this.a}}
A.nc.prototype={}
A.m1.prototype={
gN(){return"Windstorm"},
gX(){return"Summons a blast of air, spreading out from the sorceror."},
gar(){return 3},
au(a){return 36},
al(a){var s=a.y,r=this.ek(s.Q),q=A.aT("wind",B.y,B.W).a6(1),p=B.c.A(r,3),o=A.bg(new A.aL(q),"blast",10+r*2,$.eq(),6+p)
return A.oG(s.y,A.bN(o),$.vH(),null)},
gaq(){return this.a}}
A.nd.prototype={}
A.jp.prototype={
gN(){return"Axe Sweep"},
gX(){return"TODO"},
hH(a,b){return new A.jq(b,$,A.x(a.y.Q.z.bS($.vE()),1,10,1,3))},
gbD(){return this.a}}
A.jq.prototype={
gaX(){return!1},
gbx(){return"axe"},
f8(){return new A.V(this.pq(),t.oc)},
pq(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$f8(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=[o.gb8(),o,o.gb9()],m=0
case 3:if(!(m<3)){r=5
break}l=n[m]
k=s.a.y.F(0,l)
j=s.c
j===$&&A.c()
j=j.x
j===$&&A.c()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.a(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d8("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.Y()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d8("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gb8(),o,o.gb9()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jL(B.bY,l,s.a.y.F(0,l))
r=15
return a.aM(s.l9(2))
case 15:s.hi(s.a.y.F(0,l))
r=16
return a.aM(s.l9(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.K(this.a)+" slashes "+this.y.t(0)}}
A.m6.prototype={}
A.m7.prototype={}
A.jH.prototype={
gN(){return"Club Bash"},
gX(){return"TODO"},
hH(a,b){return new A.jI(b,A.x(a.y.Q.z.bS($.vF()),1,15,1,2))},
gbD(){return this.a}}
A.jI.prototype={
gaX(){return!1},
gbx(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hi(n.a.y.F(0,n.y))
if(m==null)return n.d8("There's no one there!")
else if(m===0)return B.n}else if(m===1){m=n.c
m===$&&A.c()
s=m.x
s===$&&A.c()
r=n.y
q=n.a.y.F(0,r)
q=s.w.B(q.a,q.b)
if(q==null)return B.n
p=n.a.y.F(0,r).F(0,r)
s=n.Q
s.toString
o=B.c.P(B.c.cb(300*s,q.gbq()),5,100)
s=m.x
s===$&&A.c()
if(s.bm(p,q.gb4())&&s.w.B(p.a,p.b)==null&&$.o().U(100)<o){q.di(m,p)
q.a.a=0
n.a0("{1} is knocked back!",q)
n.jL(B.bT,r,n.a.y.F(0,r))}}return++n.z>10?B.n:B.a4},
t(a){return A.K(this.a)+" bashes "+this.y.t(0)}}
A.mg.prototype={}
A.lB.prototype={
gN(){return"Spear Stab"},
gX(){return"TODO"},
hH(a,b){return new A.lC(b,$,A.x(a.y.Q.z.bS($.vN()),1,15,1,3))},
gbD(){return this.a}}
A.lC.prototype={
gaX(){return!1},
gbx(){return"spear"},
f8(){return new A.V(this.pr(),t.oc)},
pr(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f
return function $async$f8(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=o.c,m=o.d,l=1
case 3:if(!(l<=2)){r=5
break}k=s.a.y.F(0,new A.d(n*l,m*l))
j=s.c
j===$&&A.c()
j=j.x
j===$&&A.c()
j=j.f
i=k.a
h=k.b
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length)){A.a(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d8("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.Y()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d8("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.d(n*l,m*l))
f=j.a(i).Q.f.gcR().gL(0)
if(!f.q())A.a2(A.ct())
s.ov(B.bZ,o,f.gH(),k)
r=15
return a.b=B.a4,1
case 15:s.hi(k)
r=16
return a.b=B.a4,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.K(this.a)+" spears "+this.y.t(0)}}
A.n2.prototype={}
A.n3.prototype={}
A.lZ.prototype={
gN(){return"Whip Crack"},
gX(){return"TODO"},
ed(a,b){return 3},
f9(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.c()
k=k.w.B(b.gm(),b.gp())
s=a.y
r=s.Q
q=r.f.gcR()
p=A.a8(q,q.$ti.i("k.E"))
o=s.eS(k)
n=A.e8()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.a(o,m)
n.b=o[m]
break}l=r.z.bS($.wc())
n.h2().cT(A.x(l,1,15,1,3),"whip mastery")
return A.uJ(b,n.h2(),!0,3)},
gbD(){return this.a}}
A.nb.prototype={}
A.js.prototype={
gaX(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.nI(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a4
q.y+=0.1}return B.n}}
A.nI.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.nJ(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:151}
A.nJ.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.d(B.e.O(r.f*q+a),B.e.O(r.r*q+b)).aJ(0,this.c))
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q=q.f.B(p.a,p.b)
s=$.Y()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.kl(r.w,p,r.y,$.o().br(30,40))
this.a.a=!0}return!0},
$S:53}
A.m9.prototype={}
A.jw.prototype={
gaC(){var s=this.at
return s==null?this.Q.gaC():s},
kI(a,b){var s=this.Q.gb2()
this.ou(B.bL,b.S(0,a).gky(),s,b)},
hJ(a,b){var s=this
s.Q.e2(s,s.a,b,s.as)
return!0}}
A.h0.prototype={
gf3(){return 1},
V(){var s,r,q=this,p=q.gf3(),o=q.gd6()
if(q.gbd().a<=0){s=q.gbd()
s.a=o
s.b=p
q.dc()
return B.n}if(q.gbd().b>=p){o=B.c.A(B.c.cb(o*p,q.gbd().b),2)
if(o===0)return q.el()
q.gbd().a+=o
q.dd()
return B.n}r=B.c.cb(q.gbd().a*q.gbd().b,p)
s=q.gbd()
s.a=r+B.c.A(o,2)
s.b=p
q.fa()
return B.n},
fa(){}}
A.eQ.prototype={
gbd(){return this.a.f},
gf3(){return this.x},
gd6(){return this.y},
dc(){return this.a0("{1} start[s] moving faster.",this.a)},
dd(){return this.a0("{1} [feel]s the haste lasting longer.",this.a)},
fa(){return this.a0("{1} move[s] even faster.",this.a)}}
A.eN.prototype={
gbd(){return this.a.c},
V(){this.k0($.ci())
return this.lw()},
gf3(){return 1+B.c.A(this.x,40)},
gd6(){var s=this.x
return 3+$.o().cP(s*2,B.c.A(s,2))},
dc(){return this.a0("{1} [are|is] frozen!",this.a)},
dd(){return this.a0("{1} feel[s] the cold linger!",this.a)},
fa(){return this.a0("{1} feel[s] the cold intensify!",this.a)}}
A.f6.prototype={
gbd(){return this.a.w},
gf3(){return 1+B.c.A(this.x,20)},
gd6(){var s=this.x
return 1+$.o().cP(s,B.c.A(s,2))},
dc(){return this.a0("{1} [are|is] poisoned!",this.a)},
dd(){return this.a0("{1} feel[s] the poison linger!",this.a)},
fa(){return this.a0("{1} feel[s] the poison intensify!",this.a)}}
A.ev.prototype={
gbd(){return this.a.b},
gd6(){var s=this.x
return 3+$.o().cP(s*2,B.c.A(s,2))},
dc(){this.a0("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaw().w=!0},
dd(){return this.a0("{1 his} vision dims!",this.a)}}
A.eE.prototype={
gbd(){return this.a.d},
gd6(){var s=this.x
return 3+$.o().cP(s*2,B.c.A(s,2))},
dc(){return this.a0("{1} [are|is] dazzled by the light!",this.a)},
dd(){return this.a0("{1} [are|is] dazzled by the light!",this.a)}}
A.fc.prototype={
gbd(){return this.a.fg(this.y)},
gd6(){return this.x},
dc(){var s,r,q=this
q.a0("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.a0("{1} [are|is] no longer poisoned.",s)}},
dd(){return this.a0("{1} feel[s] the resistance extend.",this.a)}}
A.mt.prototype={}
A.eG.prototype={
aL(){return"DetectType."+this.b}}
A.eF.prototype={
gme(){var s,r=this,q=r.r
if(q===$){s=r.md()
r.r!==$&&A.eo()
r.r=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q=this.gme()
if(q.length===0)return B.n
for(q=J.aw(B.a.kU(q));q.q();){s=q.gH()
r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.d7(s.gm(),s.gp(),!0)
this.hg(B.bN,s)}return B.a4},
md(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.D(t.S,t.A),h=new A.o2(k,i),g=k.e,f=0
if(g.G(0,B.at)){s=k.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=A.af(r.f.b)
while(r.q()){q=r.b
p=r.c
o=s.x
o===$&&A.c()
o=o.f
o.l(q,p)
n=o.a
m=p*o.b.b.a+q
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
if(m.r)continue
o.l(q,p)
if(m.a.b!==B.aX)continue;++f
h.$1(new A.d(q,p))}}j.a=0
if(g.G(0,B.ax)){g=k.c
g===$&&A.c()
g=g.x
g===$&&A.c()
g.f1(new A.o4(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.a0("{1} sense[s] hidden secrets in the dark!",s)
else k.a0("{1} sense[s] places to escape!",s)}else if(j.a>0)k.a0("{1} sense[s] the treasures held in the dark!",k.a)
else k.lp("The darkness holds no secrets.")
g=i.$ti.i("b6<1>")
l=A.a8(new A.b6(i,g),g.i("k.E"))
B.a.dl(l,new A.o5())
g=A.O(l)
s=g.i("au<1,E<d>>")
g=A.a8(new A.au(l,g.i("E<d>(1)").a(new A.o6(i)),s),s.i("aJ.E"))
return g}}
A.o2.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaF()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b6(r,new A.o3())
s=s.n(0,r)
s.toString
J.wi(s,a)},
$S:10}
A.o3.prototype={
$0(){return A.b([],t.l)},
$S:42}
A.o4.prototype={
$2(a,b){var s=this.b.c
s===$&&A.c()
s=s.x
s===$&&A.c()
if(s.f.B(b.gm(),b.gp()).r)return;++this.a.a
this.c.$1(b)},
$S:21}
A.o5.prototype={
$2(a,b){A.u(a)
return B.c.ak(A.u(b),a)},
$S:22}
A.o6.prototype={
$1(a){var s=this.a.n(0,A.u(a))
s.toString
return s},
$S:76}
A.eI.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.a0("{1} [are|is] already full!",q)
else if(p+s.e>400)s.a0("{1} [are|is] stuffed!",q)
else s.a0("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.P(r.ay+s.e,0,400)
return B.n}}
A.h6.prototype={
kl(a,b,c,d){var s,r,q=this
q.oq(B.bM,a.gb2(),b)
s=q.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s=s.w.B(b.gm(),b.gp())
if(s!=null&&s!==q.a)a.e2(q,q.a,s,!1)
r=a.gb2().r.$4(b,a,c,d)
if(r!=null)q.he(r)},
kk(a,b,c){return this.kl(a,b,c,0)}}
A.ey.prototype={
V(){var s,r
this.k0($.b9())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cz("The fire warms {1} back up.",s)}return B.n}}
A.ez.prototype={
V(){var s,r,q=this,p=q.e,o=$.b9(),n=q.r+q.hm(p,o),m=q.c
m===$&&A.c()
s=m.x
s===$&&A.c()
p=s.f.B(p.gm(),p.gp())
s=p.a
r=$.ux().n(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.o().U(r)
else s=!0
if(s){s=p.a
s=$.vQ().n(0,s)
n+=s==null?0:s
s=$.o().br(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.c()
p.gaw().f=!0}return B.n}}
A.jz.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gm(),r.gp())
if(s!=null)A.bN(A.bg(new A.aL(A.aT("fire",B.y,B.aH).a6(1)),"burns",10,$.b9(),null)).e2(q,null,s,!1)
p=p.x
p===$&&A.c()
p=p.f.B(r.gm(),r.gp())
p.x=p.x+q.hm(r,$.b9())
return B.n}}
A.eO.prototype={
V(){this.hm(this.e,$.ci())
return B.n}}
A.f7.prototype={
V(){var s,r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
s=this.e
s=r.f.B(s.gm(),s.gp())
if(s.w===$.b9()&&s.x>0)return B.n
r=$.Y()
if((s.a.e.a&r.a)!==0){s.w=$.bJ()
s.x=B.c.P(s.x+this.f*4,0,255)}return B.n}}
A.lb.prototype={
V(){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.e
s=q.w.B(s.gm(),s.gp())
if(s!=null){q=$.bJ()
if(s.c6(q)>0)r.a0("{1} [are|is] unaffected by the poison.",s)
else A.bN(A.bg(new A.aL(A.aT("poison",B.y,B.aH).a6(1)),"chokes",r.f,q,null)).e2(r,null,s,!1)}return B.n}}
A.fo.prototype={
gaX(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb4().a&$.Y().a)!==0?6:3,n=p.gb4(),m=$.bK(),l=q.c
l===$&&A.c()
s=l.x
s===$&&A.c()
m=A.cv(s,p.y,new A.ai(n.a&~m.a),null,null,o).gcK()
n=m.$ti
p=n.i("aq<k.E>")
r=A.a8(new A.aq(m,n.i("B(k.E)").a(new A.t3(q)),p),p.i("k.E"))
if(r.length===0)return B.bE
q.a0("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.jK(B.c1,p,p.y)
p=q.a
p.toString
n=$.o()
t.A.a(r)
n=n.U(r.length)
if(!(n>=0&&n<r.length))return A.a(r,n)
p.di(l,t.u.a(r[n]))
return B.n}}
A.t3.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return s.w.B(a.gm(),a.gp())==null},
$S:1}
A.eX.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.e
s.f.B(r.gm(),r.gp()).oo(this.f)
q=q.x
q===$&&A.c()
q.gaw().f=!0
return B.n}}
A.mb.prototype={}
A.mc.prototype={}
A.md.prototype={}
A.mu.prototype={}
A.mP.prototype={}
A.mQ.prototype={}
A.k8.prototype={
gaX(){return!1},
V(){var s,r,q,p,o,n=this,m=(n.z+1)%n.y
n.z=m
if(m!==0)return B.a4
m=n.w
if(m==null){m=n.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m=A.cv(m,n.e,n.x,!1,null,null)
n.r!==$&&A.az()
n.r=m
m=m.gcK()
s=m.$ti
r=s.i("i5<k.E>")
m=A.a8(new A.i5(m,s.i("B(k.E)").a(new A.oH(n)),r),r.i("k.E"))
n.w=m}s=n.r
s===$&&A.c()
m=s.ci(B.a.gaz(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.ci(r[q])!==m)break
s=n.w
s.toString
s=B.a.fz(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o)n.kk(p,s[o],m)
m=n.w
m.toString
m=B.a.lv(m,q)
n.w=m
if(m.length===0)return B.n
return B.a4}}
A.oH.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.c()
r=r.ci(a)
r.toString
return r<=s.f.gaC()},
$S:1}
A.eM.prototype={
V(){var s=this
return s.bc(A.oG(s.a.y,A.bN(s.e),s.f,null))}}
A.eL.prototype={
V(){var s=this
return s.bc(A.oG(s.f,A.bN(s.e),s.r,null))}}
A.ms.prototype={}
A.eR.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.a0("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbq()&&s.e>0){r=s.a
q=s.e
r.z=B.c.P(r.z+q,0,r.gbq())
s.op(B.bQ,s.a,q)
s.a0("{1} feel[s] better.",s.a)
p=!0}if(p)return B.n
else return s.cz("{1} [don't|doesn't] feel any different.",s.a)}}
A.kn.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.a0("{1} "+i.f+"!",i.a)
i.cE(B.bS,i.a)
s=i.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=r.b
q=r.length
p=t.B
o=i.e
n=0
for(;n<r.length;r.length===q||(0,A.p)(r),++n){m=r[n]
l=i.a
if(m!==l&&m instanceof A.ae&&m.y.S(0,p.a(l).y).ee(0,o)){k=s.x
k===$&&A.c()
l=l.y
j=m.y
j=k.geH().pS(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.P(j,0,1)}}return B.n}}
A.kq.prototype={
kO(a){this.hN(a,0)},
hN(a,b){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
s=s.f.B(a.gm(),a.gp())
r=A.kH(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.c()
q.gaw().f=!0},
gaC(){return this.at}}
A.eS.prototype={
gaX(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.a.y
r=s.f.B(r.gm(),r.gp())
s=A.kH(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.c()
p.gaw().f=!0
p=q.a.y
s=new A.kq(q.e,p,p,A.bc(t.u),A.b([],t.gk))
s.im(p,p,1)
return q.bc(s)}}
A.eY.prototype={
go0(){var s,r=this,q=r.w
if(q===$){s=r.mH()
r.w!==$&&A.eo()
r.w=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.go0()
o=p.length
if(q>=o)return B.n
q=f.r
if(!(q<o))return A.a(p,q)
q=p[q]
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.p)(q),++n){m=q[n]
o=f.c
o===$&&A.c()
l=o.x
l===$&&A.c()
l.d7(m.gm(),m.gp(),!0)
f.hg(B.bU,m)
if(s){l=o.x
l===$&&A.c()
l=l.f
k=m.gm()
j=m.gp()
l.l(k,j)
i=l.a
k=j*l.b.b.a+k
if(!(k>=0&&k<i.length))return A.a(i,k)
k=i[k]
k.f=B.c.P(k.f+255,0,192)
k=o.x
k===$&&A.c()
k.gaw().f=!0}for(l=m.gbC(),k=l.length,h=0;h<l.length;l.length===k||(0,A.p)(l),++h){g=l[h]
j=o.x
j===$&&A.c()
j.d7(g.a,g.b,!0)}}++f.r}return B.a4},
mH(){var s,r,q,p,o,n,m=this,l=t.l,k=A.b([A.b([],l)],t.g)
if(0>=k.length)return A.a(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=m.a.y
q=m.e
p=new A.kN(q,s,r,new A.cq(A.b([],t.k5),t.r),A.b([],l))
p.fD(s,r,q)
for(s=p.gcK(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.ci(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.b([],l))
if(!(o>=0&&o<k.length))return A.a(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.o()
B.a.bL(l.a(k[n]),s.a)}return k}}
A.kN.prototype={
hW(a,b,c,d){var s=$.yu()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.dY.prototype={
aL(){return"Missive."+this.b}}
A.kQ.prototype={
ge0(){return 1},
V(){var s,r=this,q=$.o(),p=B.ic.n(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.U(s)
if(!(q>=0&&q<s))return A.a(p,q)
return r.fA(p[q],r.a,r.e)}}
A.f4.prototype={
gaX(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.bc(t.f0),k=m.c
k===$&&A.c()
s=k.x
s===$&&A.c()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cm(o))l.j(0,o)}s=q.a(m.a).r
s.a=m.e
s.b=m.f
s=k.x
s===$&&A.c()
s=s.b
r=s.length
n=!1
p=0
for(;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.cm(o)&&!l.G(0,o)){m.cE(B.bW,o)
n=!0}}k=m.a
if(n)return m.cz("{1} perceive[s] monsters beyond your sight!",k)
else return m.cz("{1} do[es]n't perceive anything.",k)}}
A.lc.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.P(B.c.P(r.z,0,q.f),0,r.gbq())
r.ax.aN(0)
r.h5()
s.cE(B.bX,s.a)
return B.n}}
A.jj.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.he(new A.lc(g.e))
g.a0(g.r,g.a)
s=A.b([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a6[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.c()
m=m.x
m===$&&A.c()
if(m.bm(n,q)){m=m.w
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]==null
m=l}else m=!1
if(m)B.a.j(s,n)}q=s.length
if(q!==0){m=$.o()
t.A.a(s)
q=m.U(q)
if(!(q>=0&&q<s.length))return A.a(s,q)
i=r.fu(s[q],t.B.a(g.a))
h=new A.cH()
i.at=h
h.a=i
q=g.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dH(i)
g.cE(B.b5,i)}return B.n}}
A.lm.prototype={
gaX(){return!1},
im(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aU(6.283185307179586*l.gaC()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.Y(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.kO(r.e);++r.w
return B.a4}s=r.x
B.a.hP(s,new A.qD(r))
if(++r.w>r.gaC()||s.length===0)return B.n
return B.a4},
kO(a){}}
A.qD.prototype={
$1(a){var s,r,q,p,o,n
A.bI(a)
s=this.a
r=s.e
q=r.gm()+B.e.O(Math.sin(a)*s.w)
p=r.gp()+B.e.O(Math.cos(a)*s.w)
o=new A.d(q,p)
n=s.c
n===$&&A.c()
n=n.x
n===$&&A.c()
p=n.f.B(q,p)
q=$.Y()
if((p.a.e.a&q.a)===0)return!0
if(!s.r.j(0,o))return!1
s.hN(o,Math.sqrt(o.S(0,r).gaF()))
return!1},
$S:77}
A.ll.prototype={
gaC(){return this.at.gaC()},
hN(a,b){this.kk(this.at,a,b)}}
A.ff.prototype={
gaX(){return!1},
V(){var s=this.a.y
return this.bc(A.v_(A.bN(this.e),s,s,1))}}
A.fe.prototype={
gaX(){return!1},
V(){var s=this.f
return this.bc(A.v_(A.bN(this.e),s,s,1))}}
A.mW.prototype={}
A.lz.prototype={
V(){var s,r=this,q=t.B
if($.o().U(q.a(r.a).as)!==0)return B.n
q=q.a(r.a);++q.as
s=r.f.fu(r.e,q)
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dH(s)
r.cE(B.b5,s)
return B.n}}
A.fl.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.b([],t.l),j=l.a.y,i=l.e,h=j.gm()-i,g=j.gp()-i,f=j.gm(),e=j.gp(),d=l.c
d===$&&A.c()
s=d.x
s===$&&A.c()
for(h=A.af(A.x6(new A.a3(new A.d(h,g),new A.d(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.d(g,f)
e=d.x
e===$&&A.c()
s=l.a
q=s.cq()
if(e.bm(r,s.e.a>0?new A.ai(q.a|$.Y().a):q)){s=e.w
s.l(g,f)
p=s.a
s=f*s.b.b.a+g
if(!(s>=0&&s<p.length))return A.a(p,s)
s=p[s]==null}else s=!1
if(s){e=e.f
e.l(g,f)
s=e.a
g=f*e.b.b.a+g
if(!(g>=0&&g<s.length))return A.a(s,g)
g=s[g].x===0}else g=!1
if(!g)continue
if(r.S(0,l.a.y).bh(0,i))continue
B.a.j(k,r)}i=k.length
if(i===0)return l.dU("{1} couldn't escape.",l.a)
h=$.o()
t.A.a(k)
i=h.U(i)
g=k.length
if(!(i>=0&&i<g))return A.a(k,i)
o=k[i]
for(i=g,n=0;n<10;++n,i=g){i=h.a.a4(i)
g=k.length
if(!(i>=0&&i<g))return A.a(k,i)
r=k[i]
i=l.a.y
if(r.S(0,i).bh(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.di(d,o)
l.jK(B.c_,l.a,m)
return l.cz("{1} teleport[s]!",l.a)}}
A.mO.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.c()
s=o.x
s===$&&A.c()
r=p.e
s.f.B(r.gm(),r.gp()).a=p.gja()
p.hg(B.bV,r)
s=$.o()
q=B.e.O(A.x(o.w,1,100,p.gj5(),p.gj4()))
if(s.U(100)<q)p.a0("The "+p.gfZ()+" is empty.",p.a)
else{s=o.x
s===$&&A.c()
s.e3(r,p.iI(),o.w)
p.a0("{1} open[s] the "+p.gfZ()+".",p.a)}return B.n}}
A.f1.prototype={
gfZ(){return"barrel"},
gja(){return $.no()},
gj5(){return 40},
gj4(){return 10},
iI(){var s=this.c
s===$&&A.c()
return A.aa("food",s.w,null)}}
A.f2.prototype={
gfZ(){return"chest"},
gja(){return $.np()},
gj5(){return 20},
gj4(){return 2},
iI(){var s=this.c
s===$&&A.c()
return A.xo(A.C([A.aa("treasure",s.w,null),0.5,A.aa("magic",s.w,null),0.2,A.aa("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.jV.prototype={
gN(){return"Dual Wield"},
gX(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kv(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.kb.prototype={
gN(){return"Foolhardy"},
gX(){return"An aura of good luck makes you 10% harder to hit."},
eT(a){return B.i8}}
A.h2.prototype={}
A.kd.prototype={
oM(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a2.b,m=n.b.f,l=m.a,k=m.b,j=k.b.a,i=l.length,n=n.d,h=n.a,g=n.b.b.a,f=h.length,e=a2.c,d=0;d<q;++d)for(c=d*r,b=0;b<r;++b){a=a3.gm()+b
a0=a3.gp()+d
if(!k.G(0,new A.d(a,a0)))return!1
n.l(a,a0)
a1=a0*g+a
if(!(a1>=0&&a1<f))return A.a(h,a1)
if(h[a1]!=e)return!1
s.l(b,d)
a1=c+b
if(!(a1>=0&&a1<o))return A.a(p,a1)
a1=p[a1]
m.l(a,a0)
a=a0*j+a
if(!(a>=0&&a<i))return A.a(l,a)
if(!a1.pp(l[a].a))return!1}return!0},
pw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a.b.b.f,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=0;h<r;++h){s.l(h,j)
g=i+h
if(!(g>=0&&g<o))return A.a(p,g)
g=p[g]
f=b.gm()+h
e=b.gp()+j
g=g.a
if(g!=null){n.l(f,e)
f=e*l+f
if(!(f>=0&&f<k))return A.a(m,f)
m[f].a=g;++a.d}}}}
A.fZ.prototype={
pp(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dw.prototype={
aL(){return"Symmetry."+this.b}}
A.u0.prototype={
$1(a){return B.i.l3(A.a6(a))},
$S:4}
A.oe.prototype={
$1(a){A.u(a)
return new A.fo()},
$S:83}
A.oi.prototype={
$1(a){A.u(a)
return new A.ey()},
$S:90}
A.oj.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ee(c)
A.u(d)
return new A.ez(a,B.e.M(b.gd0()),d)},
$S:91}
A.of.prototype={
$1(a){return new A.eN(A.u(a))},
$S:92}
A.og.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ee(c)
A.u(d)
return new A.eO(a)},
$S:93}
A.om.prototype={
$1(a){return new A.f6(A.u(a))},
$S:99}
A.on.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ee(c)
A.u(d)
return new A.f7(a,B.e.M(b.gd0()))},
$S:101}
A.oh.prototype={
$1(a){return new A.ev(A.u(a))},
$S:103}
A.ok.prototype={
$1(a){return new A.eE(A.u(a))},
$S:105}
A.ol.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t._.a(b)
A.ee(c)
A.u(d)
s=B.c.P(1+B.e.M(b.gd0())*4,0,255)
r=B.e.P(128+b.gd0()*16,0,255)
return new A.eX(a,B.e.M(A.x(b.gaC()-c,0,b.gaC(),s,r)))},
$S:107}
A.ta.prototype={
cu(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bG(a,b,c){return this.cu(a,b,null,c)},
pM(a){return this.cu(a,null,null,null)},
ea(a,b,c){return this.cu(null,a,b,c)},
ct(a,b){return this.cu(a,null,null,b)},
aa(a){return this.cu(null,a,null,null)},
l1(a){return this.cu(null,null,null,a)},
fk(a,b){return this.cu(null,a,null,b)}}
A.nN.prototype={
a5(a){var s,r,q,p,o=this,n="item/"+a
$.bp().c3(n)
s=A.b(a.split("/"),t.s)
r=B.a.gco(s)
o.ay!==$&&A.az()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c4(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.a(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.i7[q]
if(B.a.G(s,p)){o.at=p
break}}$.dE().c3(n)
$.dF().c3(n)}}
A.pc.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.az()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.az()
r.fr=s},
v(a){return this.E(a,null)},
kn(a){var s
t.kc.a(a)
s=A.wk(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.en()},
a8(a,b){var s=$.aZ.u().as
s.toString
this.ay=A.bg(null,s,a,null,null)
this.cx=b},
f0(a){this.ax=new A.bO("Provides "+a+" turns of food.",t.Y.a(new A.pi(a)))},
eU(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.a(a,0)
r=a[0]===B.at?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.K(b)+" steps away"
this.ax=new A.bO(q+".",t.Y.a(new A.pf(a,b)))},
hn(a){return this.eU(a,null)},
kM(a,b){this.ax=new A.bO("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.pn(b,a)))},
hK(a){return this.kM(a,5)},
bE(a){this.ax=new A.bO("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.po(a)))},
kq(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bO(s,t.Y.a(new A.pm(a,b)))},
hD(a){return this.kq(a,!1)},
hz(a,b){this.ax=new A.bO("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.pj(a,b)))},
fj(a){this.ax=new A.bO("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.pp(a)))},
dX(a,b){this.ax=new A.bO("Instantly heals "+a+" lost health.",t.Y.a(new A.pk(a,b)))},
kg(a){return this.dX(a,!1)},
dJ(a,b,c,d){var s=A.bg(new A.aL(A.aT(b,B.y,B.W).a6(1)),c,d,a,3)
this.ax=new A.bO("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.pd(s)))
this.f=t.bj.a(new A.pe(s))},
dV(a,b,c,d,e){var s={},r=A.bg(new A.aL(A.aT(b,B.y,B.W).a6(1)),c,d,a,5),q=$.b2()
s.a=q
if(e)s.a=new A.ai(q.a|$.Y().a)
this.ax=new A.bO("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.pg(s,r)))
this.f=t.bj.a(new A.ph(s,r))},
ke(a,b,c,d){return this.dV(a,b,c,d,!1)},
da(a,b){this.r=a
if(b!=null)this.ax=new A.bO("Illuminates out to a range of "+A.K(b)+".",t.Y.a(new A.pl(b)))},
pl(a){return this.da(a,null)},
en(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cO($.aZ.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.aZ.u().d
if(a5!=null){s=A.aT(a3.Q.toLowerCase(),B.y,B.W).a6(1)
r=$.aZ.u().as
A:{if(r!=null){q=A.wY(r,B.y)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.aZ.u().e
o=a3.c
if(o==null)o=$.aZ.u().c
if(o==null)o=$.aF()
n=A.bg(new A.aL(s),q,a5,o,p)
p=$.aZ.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.rT(s,n,q==null?$.aZ.u().f:q)}else m=null
s=a3.db?B.cq:B.W
s=A.aT(a3.Q,B.y,s)
q=a3.dy
q===$&&A.c()
p=$.wK
$.wK=p+1
o=$.aZ.u().at
l=$.aZ.u().ax
k=a3.ax
j=a3.ay
i=a3.ch
h=a3.cy
if(h==null)h=0
g=a3.b
if(g==null)g=$.aZ.u().b
if(g==null)g=1
f=a3.dx
e=a3.CW
if(e==null)e=0
d=a3.cx
if(d==null)d=0
c=a3.r
if(c==null)c=$.aZ.u().r
b=a3.w
if(b==null)b=$.aZ.u().w
a=$.aZ.u().ch
a0=$.aZ.u().y
if(a0==null)a0=a3.y
a1=a3.db
a2=A.D(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.T(0,$.aZ.u().a)
a2.T(0,a3.a)
return new A.aR(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.pi.prototype={
$0(){return new A.eI(this.a)},
$S:110}
A.pf.prototype={
$0(){var s=this.a
return new A.eF(A.zI(s,A.O(s).c),this.b)},
$S:115}
A.pn.prototype={
$0(){return new A.f4(this.a,this.b)},
$S:117}
A.po.prototype={
$0(){return new A.fc(40,this.a)},
$S:119}
A.pm.prototype={
$0(){return new A.eY(this.a,this.b)},
$S:120}
A.pj.prototype={
$0(){return A.wH(this.a,this.b)},
$S:121}
A.pp.prototype={
$0(){return A.xi(this.a)},
$S:124}
A.pk.prototype={
$0(){return A.wI(this.a,this.b)},
$S:130}
A.pd.prototype={
$0(){return A.x7(this.a)},
$S:141}
A.pe.prototype={
$1(a){return new A.fe(this.a,a)},
$S:142}
A.pg.prototype={
$0(){return new A.eM(this.b,this.a.a)},
$S:144}
A.ph.prototype={
$1(a){return new A.eL(this.b,a,this.a.a)},
$S:149}
A.pl.prototype={
$0(){return new A.eS(this.a)},
$S:52}
A.cm.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
J(a,b){var s=t.Q.a(new A.nx(a)),r=t.oF.a(new A.ny(b))
this.at=s
this.ax=r},
a_(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.nw(s,a,b)},
b5(a,b){return this.a_(a,b,null)},
pu(a){return this.a_(a,null,null)},
pv(a,b){return this.a_(a,null,b)},
bB(a){this.r=new A.nv(a)},
bH(a){this.w=new A.nA(a)},
dO(a,b){t.i6.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aD(a){return this.dO(null,a)},
dN(a){return this.dO(a,null)},
cg(a,b){this.Q=a
this.ay.h(0,a,new A.nu(b))},
bA(a){return this.cg(a,null)},
bu(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.h(0,a,b)
else s.h(0,a,new A.nz())},
R(a){return this.bu(a,null)},
en(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.bi
r=A.bo(a,"_","["+A.K(s)+"]")
for(s=r+" (",q=r,p=1;a0.c8(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.i.dT(a," _")
n=B.i.l3(A.bo(a,"_",""))
s=$.wl
$.wl=s+1
m=b.f
l=b.r
k=b.w
j=b.y
i=b.z
h=b.Q
g=b.as
f=b.at
e=b.ax
d=t.Q
if(l==null)l=A.vm()
if(k==null)k=A.nh()
if(j==null)j=A.vm()
if(i==null)i=A.nh()
if(g==null)g=A.nh()
if(h==null)h=$.aF()
if(e==null)e=A.vm()
if(f==null)f=A.nh()
c=new A.eu(q,n,o,s,m,l,k,A.nh(),j,i,g,h,A.D(t.h,d),A.D(t.Z,d),f,e,b.CW)
b.ay.ae(0,c.glk())
b.ch.ae(0,c.glm())
return c}}
A.nx.prototype={
$1(a){return this.a},
$S:5}
A.ny.prototype={
$1(a){return this.a},
$S:17}
A.nw.prototype={
$0(){var s,r,q,p=$.o().aB(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.o()
q=q.a.a4(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:2}
A.nv.prototype={
$1(a){A.u(a)
return this.a},
$S:17}
A.nA.prototype={
$1(a){A.u(a)
return this.a},
$S:5}
A.nu.prototype={
$1(a){var s
A.u(a)
s=this.a
return s==null?1:s},
$S:5}
A.nz.prototype={
$1(a){A.u(a)
return 1},
$S:5}
A.u_.prototype={
$1(a){A.u(a)
return this.a},
$S(){return this.b.i("0(e)")}}
A.up.prototype={
$1(a){return this.a+A.u(a)*this.b},
$S:17}
A.hj.prototype={
aL(){return"ItemQuality."+this.b}}
A.tc.prototype={
j1(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.N(c,o,o,s.ft(),1)
if(c.e==null)return new A.N(c,o,o,o,1)
r=this.jo($.dE(),c,b)
q=this.jo($.dF(),c,b)
if(r!=null&&q!=null&&$.o().U(4)!==0)if($.o().U(2)===0)r=o
else q=o
p=r==null?o:r.ft()
return new A.N(c,p,q==null?o:q.ft(),o,1)},
jo(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.iE
break
case 1:s=B.iQ
break
case 2:s=B.ix
break
default:s=null}r=A.x(c,0,100,s.a,s.b)
if($.o().aP(1)>r)return null
return a.pN(c,$.bp().li(b.a.a6(1).a))}}
A.mE.prototype={
b1(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.j1(a,b,s))},
$ibA:1}
A.n7.prototype={
b1(a,b,c){t.f.a(c).$1(this.j1(a,b,this.nI(a,b)))},
nI(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bp()
s=s.dh(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibA:1}
A.aM.prototype={
b1(a,b,c){t.f.a(c)
if($.o().U(100)>=this.a)return
this.b.b1(a,b,c)},
$ibA:1}
A.ie.prototype={
b1(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].b1(a,b,c)},
$ibA:1}
A.mN.prototype={
lJ(a){a.ae(0,new A.tx(this))},
b1(a,b,c){var s
t.f.a(c)
s=this.a.i_(1)
if(s==null)return
s.b1(a,b,c)},
$ibA:1}
A.tx.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.bI(b)
s=this.a.a
s.ce(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:54}
A.bH.prototype={
b1(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.o()
p=q.cP(s,B.c.A(s,2))+q.hT(0,r)
for(s=this.b,o=0;o<p;++o)s.b1(a,b,c)},
$ibA:1}
A.k7.prototype={}
A.uk.prototype={
$1(a){a.ch.h(0,B.a2,t.Q.a(A.fG(2,t.S)))
return a},
$S:50}
A.uq.prototype={
$2(a,b){A.a6(a)
A.bI(b)
this.a.h(0,A.aa(a,null,null),b)},
$S:56}
A.ur.prototype={
$1(a){a.a_(8,3,12)
a.dN(A.a4())
a.ch.h(0,B.ae,t.Q.a(A.fG(2,t.S)))
a.bA($.da())
return a},
$S:50}
A.tb.prototype={
aV(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aO(a){return this.aV(a,null)}}
A.oD.prototype={}
A.jx.prototype={
kr(a){this.ad(new A.ma(A.aP(a)),null,null)},
ad(a,b,c){if(c!=null){b.toString
a=new A.iC(b,c,a)}else if(b!=null)a=new A.iC(1,b,a)
B.a.j(this.fr,a)},
aj(a,b,c){B.a.j(this.db,A.bg(null,a,b,c,null))},
D(a,b){return this.aj(a,b,null)},
dR(a,b,c,d){var s=new A.aM(d,A.aa(a,this.CW+c,null))
if(b>1)s=A.vw(b,s)
B.a.j(this.dy,s)},
C(a,b){return this.dR(a,1,0,b)},
hs(a,b){return this.dR(a,b,0,100)},
eV(a,b,c){return this.dR(a,b,c,100)},
oX(a,b,c){return this.dR(a,b,0,c)},
ht(a,b,c){return this.dR(a,1,b,c)},
k7(a,b,c,d){var s=new A.aM(d,A.aa(a,this.CW+c,B.hG))
if(b>1)s=A.vw(b,s)
B.a.j(this.dy,s)},
oY(a,b,c){return this.k7(a,b,c,100)},
hu(a,b,c){return this.k7(a,1,b,c)},
cQ(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
i0(){return this.cQ(null)},
lb(a,b){return this.av(null,"whips",$.aF(),a,2,b)},
bl(a,b,c,d){var s=$.fS()
this.av(s.n(0,a)[0],s.n(0,a)[1],a,b,c,d)},
c2(a,b,c,d){var s=$.fS(),r=s.n(0,a)[0]
s=s.n(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.dk(A.bg(new A.aL(A.aT(r,B.y,B.W).a6(1)),s,b,a,c),d))},
hy(a){B.a.j(this.dx,new A.kk(1,10,a))
return null},
pf(){return this.hy(5)},
av(a,b,c,d,e,f){B.a.j(this.dx,new A.fY(A.bg(a!=null?new A.aL(A.aT(a,B.y,B.W).a6(1)):null,b,d,c,e),f))}}
A.ma.prototype={
cU(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.c()
b.$1(s)},
$ie1:1}
A.ah.prototype={
cU(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.cj().dh(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$ie1:1}
A.iC.prototype={
cU(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.o()
p=q.aB(this.a,s)+q.hT(0,r)
for(s=this.c,o=0;o<p;++o)s.cU(a,b)},
$ie1:1}
A.m3.prototype={
cU(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].cU(a,b)},
$ie1:1}
A.by.prototype={
gbo(){var s=this.b.b
s===$&&A.c()
return s.f*0.5},
bK(a,b){return!1},
ia(a,b){var s,r=a.Q,q=$.o()
if(q.aP(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aP(2)<=r/s.f)return!0
return!1},
bU(a,b){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return new A.jj(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.fY.prototype={
gbo(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bK(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.o().aP(1)<b.gdk()){s=B.e.M(A.x(b.gdk(),0,1,0,90))
if($.o().U(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bh(0,this.b.d)){A.cr(b,"bolt move too far")
return!1}if(q.ef(0,1.5)){A.cr(b,"bolt move too close")
return!1}p=a.x
p===$&&A.c()
if(!p.oN(b,r)){A.cr(b,"bolt move can't target")
return!1}A.cr(b,"bolt move OK")
return!0},
bU(a,b){return A.uJ(a.y.y,A.bN(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.dk.prototype={
gaC(){return this.b.d},
gbo(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bK(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.o().aP(1)<b.gdk()){s=B.e.M(A.x(b.gdk(),0,1,0,70))
if($.o().U(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bh(0,this.b.d)){A.cr(b,"cone move too far")
return!1}q=a.x
q===$&&A.c()
if(!q.eQ(b,r)){A.cr(b,"cone move can't target")
return!1}A.cr(b,"cone move OK")
return!0},
bU(a,b){var s=b.y,r=a.y.y
return A.v_(A.bN(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.kk.prototype={
gbo(){return this.c*this.b},
bK(a,b){return b.f.a<=0},
bU(a,b){return A.wH(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.hf.prototype={
gbo(){return this.b},
bK(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bU(a,b){return A.wI(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bW.prototype={
gbo(){return this.b*0.5},
bK(a,b){var s,r,q,p,o,n=a.x
n===$&&A.c()
s=b.y
s=n.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.ae&&o.at instanceof A.co&&o.y.S(0,r).ee(0,q))return!0}return!1},
bU(a,b){var s=this.c
if(s==null)s="howls"
return new A.kn(this.b,s)},
t(a){return"Howl "+this.b}}
A.b7.prototype={
gbo(){return 0},
bK(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb3()<=1)return!1
s=a.x
s===$&&A.c()
return s.eQ(b,r)},
bU(a,b){return new A.kQ(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bS.prototype={
gbo(){return 6},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.c()
s=b.y
s=i.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbC(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=b.cq()
if(i.bm(o,q.a>0?new A.ai(n.a|$.Y().a):n)){m=i.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]==null
m=l}else m=!1
if(m){m=i.f
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l].x===0
m=l}else m=!1
if(m)return!0}return!1},
bU(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.b([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a6[r]
p=a.x
p===$&&A.c()
o=b.y.F(0,q)
n=b.cq()
if(p.bm(o,s.a>0?new A.ai(n.a|$.Y().a):n)){m=p.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
l=j[l]==null
m=l}else m=!1
if(m){p=p.f
m=o.a
o=o.b
p.l(m,o)
l=p.a
m=o*p.b.b.a+m
if(!(m>=0&&m<l.length))return A.a(l,m)
m=l[m].x===0
p=m}else p=!1
if(!p)continue
p=new A.rb(a,b,q)
if(p.$1(q.gcN()))B.a.T(h,A.b([q,q,q,q,q],i))
if(p.$1(q.gcN().gb8()))B.a.j(h,q)
if(p.$1(q.gcN().gb9()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a6[r]
s=a.x
s===$&&A.c()
p=b.y.F(0,q)
n=b.cq()
if(s.bm(p,i.a>0?new A.ai(n.a|$.Y().a):n)){o=s.w
m=p.a
l=p.b
o.l(m,l)
k=o.a
m=l*o.b.b.a+m
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]==null
o=m}else o=!1
if(o){s=s.f
o=p.a
p=p.b
s.l(o,p)
m=s.a
o=p*s.b.b.a+o
if(!(o>=0&&o<m.length))return A.a(m,o)
o=m[o].x===0
s=o}else s=!1
if(!s)continue
B.a.j(h,q)}i=b.y
s=$.o()
t.ez.a(h)
s=s.U(h.length)
if(!(s>=0&&s<h.length))return A.a(h,s)
return new A.lz(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.rb.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.c()
s=this.b
r=s.y.F(0,this.c)
r=q.w.B(r.a,r.b)
return r!=null&&r instanceof A.ae&&r.Q===s.Q},
$S:11}
A.bE.prototype={
gbo(){return this.b*0.7},
bK(a,b){var s
if(b.at instanceof A.cG)return!0
s=a.y.y.S(0,b.y).gb3()
if(b.ay&&s<=1)return!1
return!0},
bU(a,b){return A.xi(this.b)},
t(a){return"Teleport "+this.b}}
A.k1.prototype={
gN(){return"Fairy Dust"},
gX(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.k5.prototype={
gN(){return"Flitter"},
gX(){return"Take flight and soar over the ground, at least until you get tired."}}
A.lh.prototype={
gN(){return"Quick Study"},
gX(){return"Gain 20% more experience when killing a monster."},
kt(a,b,c){return c*1.2}}
A.lx.prototype={
gN(){return"Single-minded"},
gX(){return"Reduce the focus lost when performing an ability by 30%."},
ku(a,b,c){if(c===0)return 0
c=B.e.bP(c*0.7)
if(c===0)return 1
return c}}
A.dg.prototype={
bp(a){return"Cast "+this.b+" spells better."},
gN(){return this.b},
gcG(){return this.c},
gX(){return this.d}}
A.jl.prototype={
gN(){return"Archery"},
gX(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcG(){return B.b2},
bp(a){return"Scales strike by "+A.qt(A.x(a,1,15,1,3),null)+"."}}
A.jt.prototype={
gN(){return"Battle Hardening"},
gX(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcG(){return B.ay},
ks(a,b){return b+a.z.bS(this)*4},
bp(a){return"Increases armor by "+a*4+"."}}
A.ju.prototype={
gN(){return"Bloodlust"},
gX(){return"The more furious you are, the more deadly in combat you become."},
gcG(){return B.ay},
hE(a,b,c,d){d.cT(A.wp(a.Q.z.bS(this))*a.CW,"Bloodlust")},
bp(a){return"Increases damage by "+A.qt(A.wp(a),1)+" for each point of fury."}}
A.hx.prototype={
gcG(){return B.b3},
hE(a,b,c,d){if(c==null||c.a.r!==this.gbx())return
d.cT(A.x(a.Q.z.bS(this),1,15,1.1,4),"mastery")},
bp(a){var s,r=A.qt(A.x(a,1,15,1.1,4)-1,null),q=this.gbx()
if(0>=q.length)return A.a(q,0)
s=B.i.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gbx()+"."}}
A.jo.prototype={
gN(){return"Axe Mastery"},
gX(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gbx(){return"axe"},
bp(a){return"TODO"}}
A.jv.prototype={
gN(){return"Bludgeoning"},
gX(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gbx(){return"club"},
bp(a){return this.ik(a)+" Bashes the enemy away."}}
A.kF.prototype={
gN(){return"Knife Fighting"},
gX(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gbx(){return"knife"},
bp(a){return"TODO"}}
A.lA.prototype={
gN(){return"Spear Mastery"},
gX(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gbx(){return"spear"},
bp(a){return"TODO"}}
A.lG.prototype={
gN(){return"Swordfighting"},
gX(){return"The most elegant tool for the most refined of martial arts."},
gbx(){return"sword"},
bp(a){return this.ik(a)+" Parrying increases dodge by "+B.e.O(A.x(a,1,15,5,30))+"."},
eT(a){return new A.V(this.oW(a),t.cm)},
oW(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eT(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bS(s)
m=m.f.gcR(),n=J.aw(m.a),m=new A.d3(n,m.b,m.$ti.i("d3<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.aH(B.e.O(A.x(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.m_.prototype={
gN(){return"Whip Mastery"},
gX(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gbx(){return"whip"},
bp(a){return"TODO"}}
A.bR.prototype={
aL(){return"Region."+this.b}}
A.nE.prototype={
dK(a){return new A.V(this.oJ(t.jJ.a(a)),t.e)},
oJ(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dK(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.af(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.a(k,h)
q=1
break A}k[h].a=$.es()}f=A.z8(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.b(B.hQ.slice(0),l)
b=A.b([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cA)
else B.a.j(b,$.o().l_(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.a(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.az()
a0.a=s
a0.b!==$&&A.az()
a0.b=l
a0.c!==$&&A.az()
a0.c=h
q=6
return a3.aM(a0.b_())
case 6:case 4:++d
q=3
break
case 5:for(m=J.aw(m.l2());m.q();){l=m.gH()
h=l.gm()
l=l.gp()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.a(k,h)
q=1
break A}k[h].a=$.bx()}a1=A.b([],t.l)
q=7
return a3.aM(s.iS(a1))
case 7:q=8
return a3.aM(s.ir(a1))
case 8:q=9
return a3.aM(s.iA(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.nV(s,A.D(t.aT,t.A),A.bc(t.P))
q=11
return a3.aM(a2.k_())
case 11:n=a2.b
n===$&&A.c()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
dv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.B(b,c)
f.a=d==null?$.cE():d;++this.e
f=this.d
f.aY(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a6[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.d(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.a(r,h)
h=r[h].a!==$.de()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.h(n,i*m+j,a)}}},
dt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.B(r,q)!=null)return!1
if(d.B(r,q).a===$.de())return!1
for(r=b.gbC(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
if(!c.G(0,i))continue
h=i.a
g=i.b
d.l(h,g)
f=g*l+h
if(!(f>=0&&f<k))return A.a(m,f)
if(m[f].a===$.de())continue
s.l(h,g)
h=g*o+h
if(!(h>=0&&h<n))return A.a(p,h)
e=p[h]
if(e!=null&&e!==a)return!1}return!0},
iS(a){return new A.V(this.mA(t.A.a(a)),t.e)},
mA(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iS(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.b([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.af(l.bQ(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.al,a0=99999;k.q();){a1=k.b
a2=k.c
a3=new A.d(a1,a2)
m.l(a1,a2)
a1=a2*h+a1
if(!(a1>=0&&a1<g)){A.a(j,a1)
q=1
break A}a4=j[a1].a
if(a4===$.cE()){++c
a1=a3.S(0,new A.d(B.c.A(Math.min(f,e)+Math.max(f,e),2),B.c.A(Math.min(l,d)+Math.max(l,d),2)))
a5=Math.abs(a1.a)+Math.abs(a1.b)
if(a5<a0){a0=a5
b=a3}}else if(!(a4!==$.es()&&a4!==$.de()))B.a.j(b1,a3)}l=$.o()
B.a.bL(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.ao(k,-2,!1,l)
e=t.C
d=new A.ab(f,new A.a3(new A.d(0,0),new A.d(h,i)),e)
a6=new A.qE(n,b,d,new A.lV(new A.ab(A.ao(k,0,!1,l),new A.a3(new A.d(0,0),new A.d(h,i)),e),h,i),B.ci)
a6.cf(b,0)
a6.ji(A.b([b],b0))
b0=b1.length,a7=0,a8=0
case 3:if(!(a8<b1.length)){q=5
break}a3=b1[a8]
n=a3.gm()
l=a3.gp()
m.l(n,l)
n=l*h+n
if(!(n>=0&&n<g)){A.a(j,n)
q=1
break}n=j[n]
l=n.a
i=l===$.es()
if(!i&&l!==$.de()){q=4
break}if(i)n.a=$.bx()
else if(l===$.de())n.a=$.dd()
n=a3.gm()
l=a3.gp()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.a(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cS()
q=1
break}if(!(n>=0)){q=4
break}a6.p7(a3)
if(a6.e!==c){s.j2(r,a3)
a6.pP()}a9=a7+1
q=B.c.ab(a7,20)===0?6:7
break
case 6:q=8
return b2.b=a3.t(0),1
case 8:case 7:a7=a9
case 4:b1.length===b0||(0,A.p)(b1),++a8
q=3
break
case 5:case 1:return 0
case 2:return b2.c=o.at(-1),3}}}},
ir(a){return new A.V(this.lO(t.A.a(a)),t.e)},
lO(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$ir(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.b([],t.hw)
for(n=s.b.f,m=n.b,l=A.af(m.bQ(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.d(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.a(k,i)
q=1
break A}f=k[i].a
i=$.cE()
if(!(f===i||f===$.cF()||f===$.er()))continue
for(e=0;e<4;++e){d=B.au[e]
h=g.F(0,d.gbF())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.a(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cF()||f===$.er()))continue
h=g.F(0,d.gb8())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.a(k,c)
q=1
break A}f=k[c].a
h=$.bx()
if(!(f===h||f===$.dd()))continue
c=g.F(0,d)
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.a(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dd()))continue
c=g.F(0,d.gb9())
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.a(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.dd()))continue
h=g.F(0,d.gbV())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.a(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cF()||f===$.er()))continue
B.a.j(a3,new A.iB(g,d))}}n=$.o()
B.a.bL(t.pa.a(a3),n.a)
a0=n.br(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.oc(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.p)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
oc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.A.a(a)
s=A.b([],t.l)
r=b.F(0,c)
for(q=this.b,p=q.f,o=p.a,n=p.b,m=n.b.a,l=o.length;;r=k){B.a.j(s,r)
k=r.F(0,c)
if(!n.G(0,k))return!1
j=k.a
i=k.b
p.l(j,i)
j=i*m+j
if(!(j>=0&&j<l))return A.a(o,j)
h=o[j].a
if(h===$.cE()||h===$.cF()||h===$.er()){p=s.length
o=$.o()
if(!new A.tv(p*2+(o.a.a4(8)+8),q,b,k).fp()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.p)(s),++g)this.j2(a,s[g])
return!0}return!1}j=k.F(0,c.gbF())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.a(o,i)
h=o[i].a
j=$.bx()
if(!(h===j||h===$.dd()))return!1
i=k.F(0,c.gbV())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.a(o,f)
h=o[f].a
if(!(h===j||h===$.dd()))return!1
j=$.o()
i=s.length
if(j.a.a4(100)<i*10)return!1}},
j2(a,b){var s,r,q
t.A.a(a)
s=this.b.f.B(b.gm(),b.gp())
r=s.a
if(r===$.bx())s.a=$.cF()
else if(r===$.dd())s.a=$.er()
q=this.d.B(b.gm(),b.gp())
if(q==null)B.a.j(a,b)
else this.iz(b,q)},
iA(a){return new A.V(this.m2(t.A.a(a)),t.e)},
m2(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$iA(a7,a8,a9){if(a8===1){o.push(a9)
q=p}for(;;)A:switch(q){case 0:n=s.d,m=n.a,l=n.b.b.a,k=m.length,j=t.dr,i=n.$ti.c,h=t.hA,g=t.l
case 3:f=A.b([],g)
for(e=r.length,d=0;d<r.length;r.length===e||(0,A.p)(r),++d){c=r[d]
b=A.b([],j)
for(a0=c.gbC(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,A.p)(a0),++a2){a3=a0[a2]
a4=a3.a
a5=a3.b
n.l(a4,a5)
a4=a5*l+a4
if(!(a4>=0&&a4<k)){A.a(m,a4)
q=1
break A}a6=m[a4]
if(a6!=null)B.a.j(b,a6)}a0=b.length
if(a0!==0){a1=$.o()
h.a(b)
a0=a1.a.a4(a0)
if(!(a0>=0&&a0<b.length)){A.a(b,a0)
q=1
break A}a6=b[a0]
i.a(a6)
a0=c.gm()
a1=c.gp()
n.l(a0,a1)
B.a.h(m,a1*l+a0,a6)
s.iz(c,a6)}else B.a.j(f,c)}if(f.length===0){q=5
break}q=6
return a7.b="Claim",1
case 6:case 4:r=f
q=3
break
case 5:case 1:return 0
case 2:return a7.c=o.at(-1),3}}}},
iz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.gbC(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.p)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.a(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.h(p,h,b)}}}}
A.iB.prototype={}
A.bk.prototype={
gfc(){return $.vJ()},
fv(a){return!1}}
A.tv.prototype={
hM(a){if(a.c>=this.d)return!1
return null},
hO(a){return!0},
fw(a,b){var s=$.bL()
if((b.a.e.a&s.a)!==0)return 1
return null},
i1(){return!1}}
A.fW.prototype={}
A.tZ.prototype={
$0(){return new A.eH(this.a)},
$S:58}
A.tV.prototype={
$0(){return new A.eA(0.3,8,32)},
$S:59}
A.tW.prototype={
$0(){return new A.eB()},
$S:60}
A.ub.prototype={
$0(){return new A.eW()},
$S:61}
A.ul.prototype={
$0(){return new A.fg()},
$S:62}
A.ua.prototype={
$0(){return A.zF(5)},
$S:63}
A.ug.prototype={
$0(){var s=A.b([],t.l)
return new A.f5(this.a,12,24,s)},
$S:64}
A.eA.prototype={
b_(){return new A.V(this.oB(),t.e)},
oB(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
return function $async$b_(a6,a7,a8){if(a7===1){p.push(a8)
r=q}for(;;)switch(r){case 0:a5=s.a
a5===$&&A.c()
o=a5.b.f.b.b
n=o.b
o=o.a
m=Math.sqrt(Math.min(Math.min(s.f,n),o))
l=Math.min(Math.sqrt(s.e),m)
k=s.d
j=(o-2)*(n-2)
i=0
case 2:if(!(a5.e/j<k&&i<100)){r=3
break}h=A.nK(B.e.M(Math.pow($.o().aE(l,m),2)))
f=h.b.b
e=f.a
f=f.b
d=o-e
c=n-f
b=0
case 4:if(!(b<400)){g=!1
r=5
break}a=s.c
a===$&&A.c()
a0=1
a1=1
switch(a.a){case 0:a2=c
a3=d
break
case 1:a2=B.c.A(n,2)-f
a3=d
break
case 2:a0=B.c.A(o,2)
a2=B.c.A(n,2)-f
a3=d
break
case 3:a0=B.c.A(o,2)
a2=c
a3=d
break
case 4:a0=B.c.A(o,2)
a1=B.c.A(n,2)
a2=c
a3=d
break
case 5:a1=B.c.A(n,2)
a2=c
a3=d
break
case 6:a3=B.c.A(o,2)-e
a1=B.c.A(n,2)
a2=c
break
case 7:a3=B.c.A(o,2)-e
a2=c
break
case 8:a3=B.c.A(o,2)-e
a2=B.c.A(n,2)-f
break
default:a2=c
a3=d}if(a0>=a3){r=6
break}if(a1>=a2){r=6
break}a=$.o()
a=a.a
a4=a.a4(a3-a0)
r=s.lZ(h,a4+a0,a.a4(a2-a1)+a1)?7:8
break
case 7:r=9
return a6.b="cave",1
case 9:g=!0
r=5
break
case 8:case 6:++b
r=4
break
case 5:if(!g)++i
r=2
break
case 3:return 0
case 1:return a6.c=p.at(-1),3}}}},
lZ(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.af(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.a(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dt(k,new A.d(n+b,m+c)))return!1}}for(s=A.af(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.a(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dv(k,r+b,n+c,null)}}return!0}}
A.eB.prototype={
b_(){return new A.V(this.oC(),t.e)},
oC(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$b_(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=s.a
a8===$&&A.c()
o=a8.b.f.b.b
n=o.a
o=o.b
m=t.fU
l=new A.a3(new A.d(0,0),new A.d(n,o))
k=n*o
j=A.ao(k,null,!1,m)
i=t.eJ
h=new A.ab(j,l,i)
g=new A.ab(A.ao(k,null,!1,m),new A.a3(new A.d(0,0),new A.d(n,o)),i)
for(o=A.af(l);o.q();){m=o.b
l=o.c
f=new A.d(m,l)
if(!a8.dt(s,f))continue
k=$.o().aP(1)
i=s.c
i===$&&A.c()
i=s.mb(i,f)
h.l(m,l)
B.a.h(j,l*n+m,k<i)}e=0
case 3:if(!(e<4)){r=5
break}for(o=h.b,n=o.a,n=new A.cW(o,n.a-1,n.b),m=g.$ti.c,l=g.a,k=g.b.b.a,j=h.a,i=o.b.a,c=j.length;n.q();){b=n.b
a=n.c
h.l(b,a)
a0=a*i+b
if(!(a0>=0&&a0<c)){A.a(j,a0)
r=1
break A}if(j[a0]==null)continue
for(a1=new A.d(b,a).gbC(),a2=a1.length,a3=0,a4=0;a4<a1.length;a1.length===a2||(0,A.p)(a1),++a4){a5=a1[a4]
if(o.G(0,a5)){a6=a5.a
a7=a5.b
h.l(a6,a7)
a6=a7*i+a6
if(!(a6>=0&&a6<c)){A.a(j,a6)
r=1
break A}a6=!J.ad(j[a6],!1)}else a6=!0
if(a6)++a3}h.l(b,a)
a0=j[a0]
a0.toString
a1=a*k+b
if(a0){a0=m.a(a3>=3)
g.l(b,a)
B.a.h(l,a1,a0)}else{a0=m.a(a3>=5)
g.l(b,a)
B.a.h(l,a1,a0)}}r=6
return a9.b="Round",1
case 6:case 4:++e,d=g,g=h,h=d
r=3
break
case 5:for(o=h.b,n=A.af(o),m=h.a,o=o.b.a,l=m.length;n.q();){k=n.b
j=n.c
h.l(k,j)
i=j*o+k
if(!(i>=0&&i<l)){A.a(m,i)
r=1
break A}if(J.ad(m[i],!1))a8.dv(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
mb(a,b){var s,r,q,p=this
switch(a.a){case 0:return 0.45
case 1:s=p.a
s===$&&A.c()
return A.x(b.b,0,s.b.f.b.b.b,0.3,0.7)
case 2:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
return A.x(Math.max(r-b.a-1,b.b),0,Math.min(r,s.b),0.3,0.7)
case 3:s=p.a
s===$&&A.c()
return A.x(b.a,0,s.b.f.b.b.a,0.3,0.7)
case 4:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
s=s.b
return A.x(Math.max(r-b.a-1,s-b.b-1),0,Math.min(r,s),0.3,0.7)
case 5:s=p.a
s===$&&A.c()
return A.x(b.b,0,s.b.f.b.b.b,0.7,0.3)
case 6:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.b
return A.x(Math.max(b.a,r-b.b-1),0,Math.min(s.a,r),0.3,0.7)
case 7:s=p.a
s===$&&A.c()
return A.x(b.a,0,s.b.f.b.b.a,0.7,0.3)
case 8:q=Math.max(b.a,b.b)
s=p.a
s===$&&A.c()
s=s.b.f.b.b
return A.x(q,0,Math.min(s.a,s.b),0.3,0.7)}}}
A.nV.prototype={
k_(){return new A.V(this.oU(),t.e)},
oU(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$k_(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.mD()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.af(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.a(j,d)
r=1
break A}J.wi(g.b6(j[d],new A.nZ()),new A.d(f,e))}s.nq()
r=3
return a0.aM(s.je())
case 3:c=$.o().br(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.kc()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.a(o,j)
r=1
break A}o[j].a=$.uD()}o=n.kc()
s.b!==$&&A.az()
s.b=o
r=4
return a0.aM(s.jq())
case 4:r=5
return a0.aM(s.iQ())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
mD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b([],t.l)
for(s=this.a.b.f,r=s.b,q=A.af(r.bQ(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
s.l(n,m)
k=m*r+n
if(!(k>=0&&k<o))return A.a(p,k)
if(p[k].a!==$.cF())continue
for(j=0;j<4;++j){i=B.au[j]
h=l.F(0,i)
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.a(p,g)
g=p[g].a
h=$.cE()
if(g!==h)continue
g=l.F(0,i.gcN())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.a(p,f)
e=p[f].a
if(e!==h&&e!==$.cF()&&e!==$.j2())continue
h=l.F(0,i.gbF())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.a(p,g)
g=p[g].a
h=$.bx()
if(g!==h)continue
g=l.F(0,i.gbV())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.a(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.j2()
B.a.j(a,l)
break}}q=$.o()
B.a.bL(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.p)(a),++j){d=a[j]
n=d.gm()
m=d.gp()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.a(p,n)
n=p[n].a
m=$.j2()
if(n!==m)continue
for(n=d.gdL(),k=n.length,c=0;c<n.length;n.length===k||(0,A.p)(n),++c){b=n[c]
h=b.a
g=b.b
s.l(h,g)
h=g*r+h
if(!(h>=0&&h<o))return A.a(p,h)
if(p[h].a===m){h=$.o()
h=h.a.a4(2)===0?d:b
g=h.gm()
h=h.gp()
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.a(p,g)
p[g].a=$.cF()}}}},
nq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.br(s,A.z(s).i("br<1,2>")).gL(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.vJ()
if(p!=null)o=p.gfc()
n=new A.hG(this,r,p)
for(m=J.aw(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.pt(n,h)
f=h.gm()
h=h.gp()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.a(k,f)
k[f].a=g;++n.d}}},
je(){return new A.V(this.ns(),t.e)},
ns(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$je(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.br(o,A.z(o).i("br<1,2>")).gL(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.jg(k.b)
h=$.o()
B.a.bL(l.a(i),h.a)
g=new A.hG(s,n,j)
f=i.length
e=j.b
e===$&&A.c()
f*=e.c
d=B.e.bP(f)
if(h.aP(1)<f-d)++d
c=B.e.aU(h.aE(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.zm(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.oM(g,a2)){r=9
break}a0.pw(g,a2)
h=$.o()
a3=i.length
a4=h.a.a4(a3-a1)+a1
h=i.length
if(!(a4>=0&&a4<h)){A.a(i,a4)
r=1
break}f=i[a4]
if(!(a1<h)){A.a(i,a1)
r=1
break}i[a1]=f
i[a4]=a2
r=11
return a5.b="Placed decor",1
case 11:r=10
break
case 9:++a1
r=8
break
case 10:case 7:b=a
r=5
break
case 6:r=3
break
case 4:case 1:return 0
case 2:return a5.c=p.at(-1),3}}}},
jq(){return new A.V(this.nT(),t.e)},
nT(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$jq(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.bc(t.g_)
for(o=s.c,o=new A.c8(o,o.r,o.e,A.z(o).i("c8<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.fv(new A.hG(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.jR(new A.ab(A.ao(j*k,0,!1,t.S),new A.a3(new A.d(0,0),new A.d(j,k)),t.C))
k=s.b
k===$&&A.c()
h=A.cv(o,k,$.vG(),!1,null,null)
for(o=A.af(l.bQ(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
d=o.c
c=new A.d(e,d)
l.l(e,d)
e=d*g+e
if(!(e>=0&&e<f)){A.a(k,e)
r=1
break A}e=k[e]
if(e==null)continue
if(a8.G(0,e))continue
b=h.ci(c)
if(b==null)continue
if(b<10)continue
d=Math.sqrt(b-10)
e=e.b
e===$&&A.c()
i.h(0,c,B.e.M((4+d)*e.e))}o=i.c
e=$.o()
a=o*0.03*e.aE(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eR()
if(c==null){r=4
break}a2=c.a
a3=c.b
l.l(a2,a3)
a4=a3*g+a2
if(!(a4>=0&&a4<f)){A.a(k,a4)
r=1
break}a4=k[a4].b
a4===$&&A.c()
a4=a0.a(a4.d)
a5=a4.length
a6=e.a.a4(a5)
if(!(a6>=0&&a6<a4.length)){A.a(a4,a6)
r=1
break}a7=a4[a6]
a6=$.cj().l5(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.a(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fI(a6)){r=3
break}a8=s.ha(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
jW(a,b,c){var s
for(;;){s=$.cj().dh(a,b,c)
s.toString
if(this.fI(s))return s}},
fI(a){if(!a.ax.f)return!0
if(this.a.a.ei(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
ha(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.o().U(10)===0
k.a=0
s=new A.nY(k,this,j,a)
r=c.ls()
if(0>=r.length)return A.a(r,0)
s.$2(r[0],b)
for(q=A.Ad(r,1,l,A.O(r).c),p=q.$ti,q=new A.c9(q,q.gI(0),p.i("c9<aJ.E>")),o=this.a.b,p=p.i("aJ.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.cv(o,b,n.at,l,l,l).gcK().hx(0,new A.nW(),new A.nX())
if(m.Y(0,new A.d(-1,-1)))break
s.$2(n,m)}return k.a},
iQ(){return new A.V(this.mt(),t.e)},
mt(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iQ(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.jR(new A.ab(A.ao(a6*a5,0,!1,t.S),new A.a3(new A.d(0,0),new A.d(a6,a5)),t.C))
a5=s.b
a5===$&&A.c()
n=A.cv(a2,a5,$.bL(),!1,null,null)
for(a4=A.af(a4.bQ(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
g=a4.c
f=new A.d(h,g)
l.l(h,g)
e=g*j+h
if(!(e>=0&&e<i)){A.a(k,e)
r=1
break A}e=k[e]
if(e==null)continue
d=n.ci(f)
if(d==null)continue
a3.l(h,g)
h=g*a6+h
if(!(h>=0&&h<m)){A.a(a5,h)
r=1
break A}if((a5[h].a.e.a&$.b2().a)===0)continue
h=Math.sqrt(d+1)
e=e.b
e===$&&A.c()
o.h(0,f,B.e.M((10+h)*e.f))}a1=a1.c
c=o.c*(0.05+(a1-1)*0.05)
c+=$.o().aP(c*0.2)
b=0
case 3:if(!(b<c)){r=4
break}f=o.eR()
if(f==null){r=4
break}a=a2.e3(f,$.wg().i_(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.p)(a),++a0)b+=Math.max(a[a0].gbf(),1)
o.kR(a2,f,$.bL(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.nZ.prototype={
$0(){return A.b([],t.l)},
$S:42}
A.nY.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.B(b.gm(),b.gp())!=null)return
if(!r.fI(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.e3(b,a.Q,a.c)
else{q.dH(a.ig(b));++s.a.a
r=s.d
if(r!=null)r.kR(q,b,$.vG(),5)}},
$S:65}
A.nW.prototype={
$1(a){t.u.a(a)
return!0},
$S:1}
A.nX.prototype={
$0(){return new A.d(-1,-1)},
$S:66}
A.jR.prototype={
h(a,b,c){var s=this,r=s.a,q=r.B(b.gm(),b.gp())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aY(b.gm(),b.gp(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eR(){var s,r,q,p,o,n,m,l,k,j=this.b
if(j===0)return null
s=$.o().U(j)
for(j=this.a,r=j.b,q=A.af(r),p=j.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.d(n,m)
j.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.a(p,n)
k=p[n]
if(s<k)return l
s-=k}throw A.n(A.bM("Unreachable."))},
kR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.h(0,b,0)
s=A.cv(a,b,c,null,null,d)
for(r=s.gcK(),q=r.$ti,r=new A.al(r.a(),q.i("al<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.ci(l)
k.toString
j=l.gm()
i=l.gp()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.a(o,j)
this.h(0,l,B.e.M(o[j]*(k/d)))}}}
A.eH.prototype={
gfc(){return $.yB()},
b_(){return new A.V(this.oD(),t.e)},
oD(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b_(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)switch(r){case 0:a0=s.w
a1=0
case 2:o=s.a
o===$&&A.c()
n=o.b.f.b.b
m=n.a
n=n.b
if(!(o.e/((m-2)*(n-2))<0.25&&a1<100)){r=3
break}l=A.v1(o.c,a0)
o=l.b.b
j=o.a
o=o.b
i=m-j
h=n-o
g=0
case 4:if(!(g<400)){k=!1
r=5
break}f=s.c
f===$&&A.c()
e=1
d=1
switch(f.a){case 0:c=h
b=i
break
case 1:c=B.c.A(n,2)-o
b=i
break
case 2:e=B.c.A(m,2)
c=B.c.A(n,2)-o
b=i
break
case 3:e=B.c.A(m,2)
c=h
b=i
break
case 4:e=B.c.A(m,2)
d=B.c.A(n,2)
c=h
b=i
break
case 5:d=B.c.A(n,2)
c=h
b=i
break
case 6:b=B.c.A(m,2)-j
d=B.c.A(n,2)
c=h
break
case 7:b=B.c.A(m,2)-j
c=h
break
case 8:b=B.c.A(m,2)-j
c=B.c.A(n,2)-o
break
default:c=h
b=i}f=$.o()
f=f.a
a=f.a4(b-e)
r=s.mu(l,a+e,f.a4(c-d)+d)?6:7
break
case 6:r=8
return a2.b="room",1
case 8:k=!0
r=5
break
case 7:++g
r=4
break
case 5:if(!k)++a1
r=2
break
case 3:return 0
case 1:return a2.c=p.at(-1),3}}}},
mu(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jT(a,b,c))return!1
for(s=a.b,r=A.af(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.a(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.bx()&&k.b===B.r){n=h.a
n===$&&A.c()
n.dv(h,m,l,o)}else{n=$.bx()
if(o===n){o=h.a
o===$&&A.c()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.a(j,i)
if(j[i].a===$.es()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eV.prototype={
gfc(){return $.yC()},
b_(){return new A.V(this.oE(),t.e)},
oE(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.c()
o=m===B.cA&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aM(s.iX())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
fv(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.n(0,a.c)
i.toString
i=J.z6(i,new A.pO(a))
s=A.a8(i,i.$ti.i("k.E"))
i=$.o().a
B.a.bL(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
if(i.a4(20)!==0)continue
m=this.b
m===$&&A.c()
m=p.a(m.d)
l=m.length
k=i.a4(l)
if(!(k>=0&&k<m.length))return A.a(m,k)
j.ha(null,n,j.jW(q,null,m[k]))}return!0},
iX(){return new A.V(this.mQ(),t.e)},
mQ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$iX(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.ob()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.pK()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.c()
if(!g.dt(s,h)){r=3
break}r=s.o9(j)?5:7
break
case 5:r=8
return a.b="Room",1
case 8:i=++s.w
if(k&&i>=l){r=4
break}r=6
break
case 7:if(j.c<5){m.h(0,i,j)
B.a.j(n,j)}case 6:r=3
break
case 4:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
ob(){var s,r,q,p=this.a
p===$&&A.c()
s=A.v1(p.c,B.bz)
for(r=0;r<100;++r){q=this.nV(s)
if(this.jz(s,q.a,q.b))return!0}return!1},
nV(a){var s,r,q,p,o,n,m,l,k
t.o.a(a)
s=this.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
q=a.b.b
p=q.a
o=r-p-1
s=s.b
q=q.b
n=s-q-1
m=this.c
m===$&&A.c()
m=m.a
l=1
switch(m){case 8:case 1:case 2:n=Math.max(1,B.e.M(s*0.25)-q)
break
case 6:case 5:case 4:l=B.e.M(s*0.75)
break
case 0:case 3:case 7:break}k=1
switch(m){case 8:case 7:case 6:o=Math.max(1,B.e.M(r*0.25)-p)
break
case 2:case 3:case 4:k=B.e.M(r*0.75)
break
case 0:case 1:case 5:break}if(o<k)o=k
if(n<l)n=l
s=$.o()
return new A.d(s.br(k,o),s.br(l,n))},
nx(a){var s=this,r=new A.pM(s),q=s.c
q===$&&A.c()
switch(q.a){case 0:q=1
break
case 1:q=s.a
q===$&&A.c()
q=A.x(a.b,0,q.b.f.b.b.b,2,-3)
break
case 2:q=s.a
q===$&&A.c()
q=r.$2(q.b.f.b.b.a-a.a-1,a.b)
break
case 3:q=s.a
q===$&&A.c()
q=A.x(a.a,0,q.b.f.b.b.a,-3,2)
break
case 4:q=s.a
q===$&&A.c()
q=q.b.f.b.b
q=r.$2(q.a-a.a-1,q.b-a.b-1)
break
case 5:q=s.a
q===$&&A.c()
q=A.x(a.b,0,q.b.f.b.b.b,-3,2)
break
case 6:q=s.a
q===$&&A.c()
q=r.$2(a.a,q.b.f.b.b.b-a.b-1)
break
case 7:q=s.a
q===$&&A.c()
q=A.x(a.a,0,q.b.f.b.b.a,2,-3)
break
case 8:q=r.$2(a.a,a.b)
break
default:q=null}return $.o().aP(1)<q},
o9(a){var s,r,q,p,o,n,m=this.a
m===$&&A.c()
s=A.v1(m.c,B.bz)
m=s.b
r=A.z(m)
q=r.i("aq<k.E>")
p=A.a8(new A.aq(m,r.i("B(k.E)").a(new A.pN(s,a.b.gcN())),q),q.i("k.E"))
m=$.o()
B.a.bL(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.p)(p),++o){n=r.S(0,p[o])
if(this.jz(s,n.a,n.b))return!0}return!1},
jz(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jT(a0,a1,a2))return!1
s=A.b([],t.fv)
for(r=a0.b,q=A.af(r),p=a0.a,r=r.b.a,o=p.length,n=a.r,m=n.b,n=n.c;q.q();){l=q.b
k=q.c
j=l+a1
i=k+a2
h=new A.d(j,i)
a0.l(l,k)
l=k*r+l
if(!(l>=0&&l<o))return A.a(p,l)
g=p[l]
l=g.b
if(l!==B.r){if(a.nx(h))B.a.j(s,new A.eU(h,l))}else{l=g.a
if(l!=null)k=l!==$.bx()
else k=!1
if(k){k=a.a
k===$&&A.c()
k.dv(a,j,i,l)}else{k=$.bx()
if(l===k){l=a.a
l===$&&A.c()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.a(f,e)
if(f[e].a===$.es()){l.l(j,i)
f[e].a=k}d=m.af(0,h)
if(d!=null)B.a.af(n,d)}}}}r=$.o()
B.a.bL(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.p)(s),++c){d=s[c]
q=d.a
b=m.af(0,q)
if(b!=null)B.a.af(n,b)
m.h(0,q,d)
B.a.j(n,d)}return!0}}
A.pO.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.B(a.gm(),a.gp()).a.e.a&$.b2().a)!==0},
$S:1}
A.pM.prototype={
$2(a,b){var s=this.a.a
s===$&&A.c()
s=s.b.f.b.b
return A.x(a+b,0,s.a+s.b,2,-3)},
$S:67}
A.pN.prototype={
$1(a){t.u.a(a)
return this.a.B(a.gm(),a.gp()).b===this.b},
$S:1}
A.eU.prototype={}
A.rM.prototype={
aL(){return"TakeFrom."+this.b}}
A.pL.prototype={
pK(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.a(s,-1)
s=s.pop()
break
case 1:s=B.a.dg(r.c,0)
break
case 2:s=$.o().l_(0,r.c,t.d2)
break
default:s=null}r.b.af(0,s.a);++s.c
return s}}
A.eW.prototype={
b_(){return new A.V(this.oF(),t.e)},
oF(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b_(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.o()
m=n.aB(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.nt(A.nK(n.a.a4(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
nt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.b.a(a)
s=$.o()
r=this.a
r===$&&A.c()
q=r.b.f
p=q.b.b
o=p.a
n=a.b
m=n.b
l=m.a
k=s.br(0,o-l)
j=s.br(0,p.b-m.b)
for(s=A.af(n),p=a.a,n=p.length,m=q.a,i=m.length,r=r.d,h=r.$ti.c,g=r.a,f=r.b.b.a;s.q();){e=s.b
d=s.c
a.l(e,d)
c=d*l+e
if(!(c>=0&&c<n))return A.a(p,c)
if(p[c]){e+=k
d+=j
q.l(e,d)
c=d*o+e
if(!(c>=0&&c<i))return A.a(m,c)
m[c].a=$.de()
h.a(this)
r.l(e,d)
B.a.h(g,d*f+e,this)}}}}
A.hG.prototype={}
A.qv.prototype={
pt(a,b){var s,r,q,p=this,o=a.b.b.f.B(b.gm(),b.gp()).a
if(o===$.cE()||o===$.cF())return p.fT()
if(o===$.bx()){s=p.b
if(s!=null){r=$.o()
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.a(s,r)
return s[r]}s=$.o()
r=t.p.a($.yA())
s=s.U(3)
if(!(s>=0&&s<3))return A.a(r,s)
return r[s]}if(o===$.j2()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.o().U(6)
A:{if(0===q){s=p.d
if(s==null)s=t.U.a(s)
break A}if(1===q){s=p.fT()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fT()}}s=$.yz()
if(s.ah(o)){r=$.o()
s=s.n(0,o)
s.toString
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.a(s,r)
return s[r]}return o},
fT(){var s,r=this.a
if(r!=null){s=$.o()
t.p.a(r)
s=s.U(1)
if(!(s>=0&&s<1))return A.a(r,s)
return r[s]}return $.j3()}}
A.f5.prototype={
gfc(){return $.yD()},
b_(){return new A.V(this.oG(),t.e)},
oG(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b_(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.o()
k=A.nK(l.a.a4(n-o)+o)
l=s.a
l===$&&A.c()
j=s.jy(k,l.b.f.b)
r=j!=null?6:7
break
case 6:r=8
return a2.b="pit",1
case 8:for(l=k.b,i=l.a,i=new A.cW(l,i.a-1,i.b),h=k.a,l=l.b.a,g=h.length,f=s.r,e=j.a,d=e.a,c=j.b,b=d+c.a,e=e.b,c=e+c.b;i.q();){a=i.b
a0=i.c
k.l(a,a0)
a1=a0*l+a
if(!(a1>=0&&a1<g)){A.a(h,a1)
r=1
break A}if(h[a1])B.a.j(f,new A.d(a,a0).F(0,new A.d(Math.min(d,b),Math.min(e,c))))}r=9
return a2.aM(s.jd(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
fv(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aU(a4.c*$.o().aE(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.a(k,d)
d=k[d].a
c=$.b2().a
if((d.e.a&c)===0)continue
d=g.gbC()
a=d.length
a0=0
for(;;){if(!(a0<a)){b=!0
break}a1=d[a0]
a2=a1.a
a3=a1.b
a4.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<i))return A.a(k,a2)
if((k[a2].a.e.a&c)===0){b=!1
break}++a0}if(!b)continue
o.l(f,e)
f=e*m+f
if(!(f>=0&&f<l))return A.a(n,f)
if(n[f]!=null)continue
p.ha(null,g,p.jW(a5,!1,q))}return!0},
jy(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.b.a(a)
s=b.b
r=s.a
q=a.b.b
p=q.a
if(r<p)return null
s=s.b
q=q.b
if(s<q)return null
for(o=b.a,n=o.b,s=n+s,o=o.a,r=o+r,m=0;m<200;++m){l=$.o()
k=Math.min(o,r)
j=Math.max(o,r)
l=l.a
i=l.a4(j-p-k)+k
k=Math.min(n,s)
j=Math.max(n,s)
h=l.a4(j-q-k)+k
if(this.oa(a,i,h))return new A.a3(new A.d(i,h),new A.d(p,q))}return null},
oa(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.af(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.a(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dt(k,new A.d(n+b,m+c)))return!1}}for(s=A.af(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.a(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dv(k,r+b,n+c,null)}}return!0},
jd(a){return new A.V(this.nr(a),t.e)},
nr(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$jd(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.o()
h=A.nK(i.a.a4(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.c()
q=s.jy(h,A.x6(new A.a3(new A.d(f,e),new A.d(d+g-f,c+i-e)),b.b.f.b.bQ(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.qE.prototype={
p7(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.hu(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bj(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.b([new A.im(a5,p.B(a5.gm(),a5.gp()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gap(0);){j=a3.cM()
i=j.gm()
h=j.gp()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.a(m,i)
g=m[i]
for(i=j.gdL(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.p)(i),++e){d=i[e]
c=d.a
b=d.b
p.l(c,b)
a=b*l+c
if(!(a>=0&&a<k))return A.a(m,a)
a0=m[a]
if(a0===-1)continue
p.l(c,b)
if(a0!==f)continue
s.l(c,b)
c=b*q+c
if(!(c>=0&&c<n))return A.a(o,c)
if(J.ad(o[c],a4.b))continue
if(a2.mS(d))continue
a3.bj(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.im(d,a0))}}a2.cf(a5,-1)
a1=a2.mC(a5)
if(a1.a===0)for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cf(r==null?s.a(r):r,-1)}else{for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.cf(r==null?s.a(r):r,-2)}a2.cf(a5,-1)
a2.ji(a1)}},
pP(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
this.cf(p.a,p.b)}this.f=B.ci},
mS(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.B(a0.gm(),a0.gp())
for(s=a0.gdL(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.p)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.a(o,c)
if(!J.ad(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.a(k,e)
e=J.ad(k[e],h)}else e=!1
if(e)return!0}return!1},
mC(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.bc(t.u)
for(s=this.d,r=s.gL(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.Y(0,a0))continue
for(h=h.gdL(),g=h.length,f=0;f<h.length;h.length===g||(0,A.p)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.a(p,b)
b=p[b]
if(typeof b!=="number")return b.cS()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.a(l,d)
d=!J.ad(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
ji(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.cq(A.b([],t.k5),t.r)
for(r=J.aw(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gm()
j=l.gp()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.a(p,k)
s.aZ(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.fe()
if(i==null)break
h=i.gm()
g=i.gp()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.a(p,h)
f=p[h]
for(h=i.gdL(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.p)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.a(p,a0)
if(!J.ad(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.a(l,b)
if((l[b].a.e.a&$.b2().a)!==0){a1.cf(c,e)
s.aZ(0,c,e)}else a1.cf(c,-1)}}},
cf(a,b){var s,r=this
if(r.a.f.B(a.gm(),a.gp()).a===$.cE()){s=r.c.B(a.gm(),a.gp())
if(typeof s!=="number")return s.cS()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aY(a.gm(),a.gp(),b)}}
A.im.prototype={}
A.fg.prototype={
b_(){return new A.V(this.oH(),t.e)},
oH(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$b_(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.c()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.qR(s)
k=new A.qS(s)
j=new A.qP(s)
i=new A.qT(s)
h=new A.qQ(s)
g=new A.qO(s)
o=$.o()
f=o.U(6)
A:{if(0===f){e=new A.S(A.bT(-2,h.$0(),null,null),A.bT(m,h.$0(),null,null))
break A}if(1===f){e=new A.S(A.bT(g.$0(),-2,null,null),A.bT(g.$0(),n,null,null))
break A}if(2===f){e=new A.S(A.bT(i.$0(),-2,null,null),A.bT(m,k.$0(),null,null))
break A}if(3===f){e=new A.S(A.bT(m,l.$0(),null,null),A.bT(i.$0(),n,null,null))
break A}if(4===f){e=new A.S(A.bT(j.$0(),n,null,null),A.bT(-2,l.$0(),null,null))
break A}if(5===f){e=new A.S(A.bT(-2,k.$0(),null,null),A.bT(j.$0(),-2,null,null))
break A}e=A.a2(A.cd("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bT(o.aE(d*0.4,d*0.6),o.aE(b*0.4,b*0.6),null,null)
s.er(e.a,c)
s.er(c,e.b)
return 0
case 1:return a.c=p.at(-1),3}}}},
er(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=b2.a,a6=b3.a,a7=a5-a6,a8=b2.b,a9=b3.b,b0=a8-a9,b1=Math.sqrt(a7*a7+b0*b0)
if(b1>1){s=$.o()
r=b1/2
q=s.aP(r)
p=b1/4
r=s.aP(r)
o=Math.min(2,p)
n=A.bT((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.P((b2.c+b3.c)/2+s.aE(-o,o),0,4),(b2.d+b3.d)/2)
a4.er(b2,n)
a4.er(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bP(a5-a9)
l=B.e.bP(a8-a9)
k=B.e.aU(a5+a9)
j=B.e.aU(a8+a9)
s=a4.a
s===$&&A.c()
r=s.b.f
q=r.b.b
p=q.a
i=p-2
m=B.c.P(m,1,i)
q=q.b-2
l=B.c.P(l,1,q)
k=B.c.P(k,1,i)
j=B.c.P(j,1,q)
h=a9*a9
g=a6*a6
for(a6=r.a,a9=a6.length,s=s.d,q=s.$ti.c,i=s.a,f=s.b.b.a,e=l;e<=j;++e)for(d=a8-e,c=d*d,b=e*p,a=e*f,a0=m;a0<=k;++a0){a1=a5-a0
a2=a1*a1+c
if(a2<=g){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.a(a6,a3)
a6[a3].a=$.de()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}else if(a2<=h){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.a(a6,a3)
if(a6[a3].a===$.es()){r.l(a0,e)
a6[a3].a=$.cE()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}}}}}
A.qR.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aE(r*0.2,r*0.4)},
$S:7}
A.qS.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aE(r*0.6,r*0.8)},
$S:7}
A.qP.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aE(r*0.6,r*0.8)},
$S:7}
A.qT.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aE(r*0.2,r*0.4)},
$S:7}
A.qQ.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aE(r*0.2,r*0.8)},
$S:7}
A.qO.prototype={
$0(){var s=$.o(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aE(r*0.2,r*0.8)},
$S:7}
A.tz.prototype={
t(a){return A.K(this.a)+","+A.K(this.b)+" ("+A.K(this.d)+")"}}
A.lt.prototype={
jT(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.o.a(a)
for(s=a.b,r=A.af(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.a(q,o)
k=q[o]
o=k.a
n=o==null
if(!(n&&k.b===B.r)){j=this.a
j===$&&A.c()
j=!j.b.f.b.G(0,new A.d(m,l))}else j=!1
if(j)return!1
if(!(n&&k.b===B.r)&&o!==$.bx()&&k.b===B.r){o=this.a
o===$&&A.c()
l=!o.dt(this,new A.d(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hR.prototype={
aL(){return"RoomShapes."+this.b}}
A.qV.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.B(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.bx()&&q.b===B.r},
$S:11}
A.e0.prototype={}
A.hS.prototype={
aL(){return"RoomSize."+this.b}}
A.rV.prototype={
dK(a){return new A.V(this.oK(t.jJ.a(a)),t.e)},
oK(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dK(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.af(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.a(k,h)
q=1
break A}k[h].a=$.j3()}for(l=J.aw(m.l2());l.q();){h=l.gH()
g=h.gm()
h=h.gp()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.a(k,g)
q=1
break A}k[g].a=$.fN()}f=[$.vW(),$.w_(),$.w3(),$.w4(),$.w5(),$.w6(),$.w7(),$.w8()]
for(e=0;e<8;++e){d=B.c.ab(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cW(new A.a3(new A.d(d,c),new A.d(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.a(k,g)
q=1
break A}k[g].a=$.fN()}h=d+11
g=c+8
if((l&1)===1){l=Math.min(d,h)
g=Math.min(c,g)
g=new A.d(l,g).F(0,new A.d(Math.max(d,h),g))
a0=new A.d(B.c.A(g.a,2),B.c.A(g.b,2))}else{l=Math.min(d,h)
g=Math.max(c,g)
g=new A.d(l,g).F(0,new A.d(Math.max(d,h),g))
a0=new A.d(B.c.A(g.a,2),B.c.A(g.b,2)+-1)}l=a0.a
h=a0.b
n.l(l,h)
g=h*j
b=g+l
if(!(b>=0&&b<i)){A.a(k,b)
q=1
break A}k[b].a=f[e]
b=l+-1
n.l(b,h)
b=g+b
if(!(b>=0&&b<i)){A.a(k,b)
q=1
break A}b=k[b]
a1=$.uF()
b.a=a1;++l
n.l(l,h)
l=g+l
if(!(l>=0&&l<i)){A.a(k,l)
q=1
break A}k[l].a=a1}for(l=A.af(m);l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.a(k,h)
q=1
break A}h=k[h]
h.fm(!0)
g=$.Y()
if((h.a.e.a&g.a)!==0)h.f=B.c.P(h.f+64,0,192)}r.$1(m.ghk())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.rS.prototype={
$1(a){return new A.f2(a)},
$S:69}
A.rR.prototype={
$1(a){return new A.f1(a)},
$S:70}
A.rQ.prototype={
$2(a,b){a.e=192-b*12
return a.cD($.Y())},
$S:71}
A.fm.prototype={
hj(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bk(b,a)
o=q.c.bk(c,a)
B.a.h(s,r,new A.a0(q.a,p,o))}return this},
ow(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaz(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bk(c,A.x(p,0,a,0,b))
n=r.bk(d,A.x(p,0,a,0,b))
B.a.j(m,new A.a0(q,o,n))}return this},
eW(a){this.e=a
return this},
bv(a){this.d=a
return this},
cr(a){this.c=t.bj.a(a)
return this},
k5(){return this.cD($.bK())},
aG(){return this.cD($.Y())},
a3(){return this.cD($.vH())},
by(){return this.cD($.vI())},
cD(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaz(o)
s=p.d
r=p.e
q=p.c
return new A.d0(p.a,s,r,o,a,q)}}
A.nP.prototype={
$0(){return A.vc(this.a)},
$S:24}
A.nR.prototype={
$0(){return A.vc(this.a)},
$S:24}
A.nS.prototype={
$0(){return A.hu(t.cZ)},
$S:73}
A.nQ.prototype={
$0(){return A.vc(this.a)},
$S:24}
A.fs.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.e3(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.cG)s="afraid"
else s=c instanceof A.cH?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.z(c).i("b6<1>")
r=A.a8(new A.b6(c,b),b.i("k.E"))
B.a.fs(r)
q=B.a.aA(r,0,new A.tw(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.p)(r),++o){n=r[o]
m=B.i.fb(n,q)+" "
l=c.n(0,n)
for(k=A.z(l),j=new A.ec(l,l.c,l.d,l.b,k.i("ec<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.P(B.e.aU((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.a(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gap(0)){j=l.b
h=l.c
if(j===h)A.a2(A.ct())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.a(j,h)
h=j[h]
k=B.e.hY(h==null?k.a(h):h,4)
m+=" "+B.i.de(k,6)}if(p.n(0,n)!=null){m+=" "+A.K(p.n(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.v3(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.tw.prototype={
$2(a,b){return Math.max(A.u(a),A.a6(b).length)},
$S:15}
A.I.prototype={
gaX(){return!0},
ox(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.az()
r.b=s
r.c!==$&&A.az()
r.c=a
r.d!==$&&A.az()
r.d=c!==!1},
hf(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.c()
q=this.c
q===$&&A.c()
a.a=s
a.b!==$&&A.az()
a.b=r
a.c!==$&&A.az()
a.c=q
a.d!==$&&A.az()
a.d=!1
if(a.gaX())B.a.j(q.c,a)
else{s=q.b
s.bj(s.$ti.c.a(a))}},
he(a){return this.hf(a,null)},
bz(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.c()
s=e==null?$.aF():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.al
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.k_(a,r,q,s,b,f,p))},
os(a,b,c,d){return this.bz(a,b,c,null,d,null,null)},
cE(a,b){var s=null
return this.bz(a,b,s,s,s,s,s)},
or(a,b,c){var s=null
return this.bz(a,s,s,s,s,b,c)},
ot(a,b,c,d){return this.bz(a,b,null,null,null,c,d)},
oq(a,b,c){var s=null
return this.bz(a,s,s,s,b,s,c)},
ou(a,b,c,d){return this.bz(a,null,null,b,c,null,d)},
ov(a,b,c,d){return this.bz(a,null,null,b,null,c,d)},
jL(a,b,c){var s=null
return this.bz(a,s,s,b,s,s,c)},
hg(a,b){var s=null
return this.bz(a,s,s,s,s,s,b)},
op(a,b,c){var s=null
return this.bz(a,b,c,s,s,s,s)},
jK(a,b,c){var s=null
return this.bz(a,b,s,s,s,s,c)},
ge0(){return 0.2},
hC(a,b,c){var s=this.c
s===$&&A.c()
s.y.Q.at.Z(B.x,a,b,c,null)},
pm(a,b){return this.hC(a,b,null)},
eg(a,b,c,d){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.b
r===$&&A.c()
r=s.f.B(r.gm(),r.gp())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.ax)q.y.Q.at.Z(B.x,a,b,c,d)},
bX(a,b,c){return this.eg(a,b,c,null)},
a0(a,b){return this.eg(a,b,null,null)},
lp(a){return this.eg(a,null,null,null)},
fA(a,b,c){if(a!=null)this.eg(a,b,c,null)
return B.n},
el(){return this.fA(null,null,null)},
cz(a,b){return this.fA(a,b,null)},
eY(a,b,c){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.b
s===$&&A.c()
s=q.f.B(s.gm(),s.gp())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.ax
if(q){q=r.c
q===$&&A.c()
q.y.Q.at.Z(B.a_,a,b,c,null)}return B.bE},
dU(a,b){return this.eY(a,b,null)},
d8(a){return this.eY(a,null,null)},
bc(a){var s,r,q=this.c
q===$&&A.c()
s=this.a
s.toString
r=this.d
r===$&&A.c()
a.ox(q,s,r)
return new A.df(a,!1,!0)}}
A.df.prototype={}
A.ka.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.d8("You aren't focused enough.")
r.ch=q-p
return s.bc(s.f)}}
A.kh.prototype={
gn0(){var s,r,q=this,p=q.Q$
if(p===$){s=q.f8()
r=s.a()
q.Q$!==$&&A.eo()
p=q.Q$=new A.al(r,s.$ti.i("al<1>"))}return p},
V(){var s,r=this.gn0()
if(!r.q())return B.n
s=r.b
return s==null?r.$ti.c.a(s):s},
l9(a){var s,r=J.wN(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a4
return r}}
A.jn.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eS(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.p)(r),++p){r[p].hL(o,o.a,s)
if(s.z<=0)break}return B.n},
ge0(){return 1},
t(a){return A.K(this.a)+" attacks "+this.e.t(0)}}
A.kv.prototype={
e5(){var s,r=this
switch(r.e){case B.H:s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e6(r.f,r.a.y)
break
case B.v:B.a.af(t.V.a(r.a).Q.e.b,r.f)
break
case B.Z:s=r.f
t.V.a(r.a).Q.f.af(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaw().r=!0}break
default:throw A.n(A.cd("Invalid location."))}},
bn(){switch(this.e){case B.H:break
case B.v:t.V.a(this.a).Q.e.bn()
break
case B.Z:t.V.a(this.a)
break
default:throw A.n(A.cd("Invalid location."))}}}
A.l9.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.c7(o),m=n.a
if(m===0)return r.eY(q,r.a,o)
r.bX("{1} pick[s] up {the 2}.",r.a,o.b0(m))
m=n.b
s=r.a
if(m===0){m=r.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m.e6(o,s.y)}else r.bX(q,s,o.b0(m))
p=p.a(r.a)
r.c===$&&A.c()
p.Q.ax.d9(o)
p.bs()
return B.n}}
A.jU.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e5()
else{q=q.dm(r)
s.bn()}r=s.a
if(s.e===B.Z){s.bX("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).bs()}else s.bX("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.cZ(q,s.a.y)
return B.n}}
A.jX.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.Z)return e.bc(new A.lQ(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.oL(s))return e.eY("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e5()
r=s}else{r=s.dm(1)
e.bn()}q=d.a(e.a).Q.f.k9(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fl(n,!0)
k=e.a
if(l.b===0){j=e.c
j===$&&A.c()
i=j.x
i===$&&A.c()
h=e.b
h===$&&A.c()
i=i.f
g=h.gm()
h=h.gp()
i.l(g,h)
f=i.a
g=h*i.b.b.a+g
if(!(g>=0&&g<f.length))return A.a(f,g)
g=f[g]
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.ax)j.y.Q.at.Z(B.x,"{1} unequip[s] {the 2}.",k,new A.N(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.c()
j=m.x
j===$&&A.c()
j.cZ(n,k.y)
k=e.a
j=m.x
j===$&&A.c()
i=e.b
i===$&&A.c()
j=j.f
h=i.gm()
i=i.gp()
j.l(h,i)
g=j.a
h=i*j.b.b.a+h
if(!(h>=0&&h<g.length))return A.a(g,h)
h=g[h]
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.ax)m.y.Q.at.Z(B.x,u.f,k,n,null)}}e.bX("{1} equip[s] {the 2}.",e.a,r)
if(s.a.ay>0){p=e.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.gaw().r=!0}d.a(e.a).bs()
return B.n}}
A.lQ.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.d1()
o.e5()
s=t.V
r=s.a(o.a).Q.e.fl(n,!0)
q=o.a
if(r.b===0)o.bX("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.cZ(n,q.y)
o.bX(u.f,o.a,n)}s.a(o.a).bs()
return B.n}}
A.lT.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dU("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e5()
else r.bn()
if(r.e===B.H){s=t.V.a(r.a)
r.c===$&&A.c()
s.Q.ax.d9(q)
s.bs()}t.V.a(r.a).Q.ax.pR(q)
return r.bc(p)}}
A.cJ.prototype={
fO(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.E.a(b)
t.f.a(a1)
s=A.a8(b,A.z(b).i("k.E"))
r=s.length
q="{the 1} "+a.c+"!"
p=0
o=0
for(;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.a
l=m.cx.n(0,a)
if(l==null)l=0
if(a0)l=Math.min(30,B.c.A(l,2))
if(l===0)continue
for(k=0,j=0;i=n.f,j<i;++j){i=$.o()
if(i.a.a4(100)<l)++k}if(k===i){i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gm()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.a(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.ax)i.y.Q.at.Z(B.x,q,n,c,c)
a1.$1(n)}else if(k>0){n.f=i-k
i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gm()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.a(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.ax)i.y.Q.at.Z(B.x,q,new A.N(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
hm(a,b){var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return this.fO(b,s.c5(a),!1,new A.o_(this,a))},
k0(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.ax))return 0
if(o.c6(a)>0)return 0
o=t.V
s=q.fO(a,o.a(q.a).Q.e,!0,new A.o0(q))
p.a=!1
r=q.fO(a,o.a(q.a).Q.f,!0,new A.o1(p,q))
if(p.a)o.a(q.a).bs()
return s+r}}
A.o_.prototype={
$1(a){var s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e6(a,this.b)},
$S:6}
A.o0.prototype={
$1(a){B.a.af(t.V.a(this.a.a).Q.e.b,a)},
$S:6}
A.o1.prototype={
$1(a){t.V.a(this.b.a).Q.f.af(0,a)
this.a.a=!0},
$S:6}
A.kK.prototype={
gnf(){var s,r=this,q=r.r
if(q===$){s=A.eb(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.eo()
r.r=s
q=s}return q},
gaX(){return!1},
V(){var s,r,q=this,p=q.gnf(),o=p.a,n=q.c
n===$&&A.c()
s=n.x
s===$&&A.c()
s=s.f.B(o.gm(),o.gp())
r=$.Y()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bh(0,q.gaC())){p=q.f
p===$&&A.c()
q.kC(p)
return q.el()}s=q.f
s===$&&A.c()
q.kI(s,o)
n=n.x
n===$&&A.c()
n=n.w.B(o.gm(),o.gp())
if(n!=null&&n!==q.a)if(q.hJ(o,n))return B.n
if(o.Y(0,q.e))if(q.kK(o))return B.n
q.f=o
p.q()
return B.a4},
hJ(a,b){return!0},
kC(a){},
kK(a){return!1}}
A.lN.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dU("{the 1} can't be thrown.",r)
if(r.f===1)s.e5()
else{r=r.dm(1)
s.bn()}return s.bc(new A.lO(r,s.z,s.Q))}}
A.lO.prototype={
gaC(){return this.as.gaC()},
kI(a,b){this.or(B.c0,this.Q,b)},
hJ(a,b){var s=this
if(s.as.hL(s,s.a,b)===0){s.at=!0
return!1}s.fQ(a)
return!0},
kC(a){this.fQ(a)},
kK(a){if(this.at)return!1
this.fQ(a)
return!0},
fQ(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.he(o.$1(a))
return}o=$.o()
s=p.a
if(o.U(100)<s){r.a0("{1} breaks!",q)
return}o=r.c
o===$&&A.c()
o=o.x
o===$&&A.c()
o.cZ(q,a)}}
A.lX.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.bc(A.lq())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.c()
r=b.x
r===$&&A.c()
q=s.a
p=s.b
r=r.w.B(q,p)
if(r!=null&&r!==c.a)return c.bc(new A.jn(r))
r=b.x
r===$&&A.c()
o=r.f.B(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bK()
if(n.Y(0,m)&&(c.a.gb4().a&m.a)!==0||(n.a&c.a.gb4().a)===0)return c.bc(r.$1(s))}r=b.x
r===$&&A.c()
if(!r.bm(s,c.a.gb4())){if(c.a instanceof A.ax){b=b.x
b===$&&A.c()
b.d7(q,p,!0)}return c.dU("{1} hit[s] the "+o.a+".",c.a)}c.a.di(b,s)
if(c.a instanceof A.ax){r=b.x
r===$&&A.c()
r=r.c5(s)
r=A.a8(r,A.z(r).i("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.p)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aX))m.at=null
if(k.a.ch){j=B.e.aU(k.gbf()*0.5)
i=B.e.aU(k.gbf()*1.5)
m=$.o()
h=m.a.a4(i-j)+j
m=p.a(c.a)
m.Q.Q+=h
g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gm()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.a(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.ax)n.Z(B.x,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.c()
m.e6(k,s)
m=c.a
c.ot(B.bP,m,k,m.y)}else{g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gm()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.a(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.ax)n.Z(B.x,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).fd(1)}return c.el()},
t(a){return A.K(this.a)+" walks "+this.e.t(0)}}
A.l4.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s.f.B(r.gm(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.hX()
p=q.a
if(p instanceof A.ax)p.fd(1)
return q.cz("{1} open[s] the door.",q.a)}}
A.jE.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gm(),r.gp())
if(s!=null)return q.dU("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.c()
s.f.B(r.gm(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.hX()
p=q.a
if(p instanceof A.ax)p.fd(1)
return q.cz("{1} close[s] the door.",q.a)}}
A.lp.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.ax
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.P(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.c()
r.y.Q.at.Z(B.x,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.P(q.z+1,0,q.gbq())}q.fd(2)
break A}r=!1
if(s instanceof A.bq){r=n.c
r===$&&A.c()
r=r.x
r===$&&A.c()
p=s.y
p=r.f.B(p.gm(),p.gp())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.P(o.z+1,0,o.gbq())}return n.el()},
ge0(){return 0.05}}
A.bq.prototype={
e_(a){return!1},
gb4(){var s=this.cq()
return this.e.a>0?new A.ai(s.a|$.Y().a):s},
ghl(){return new A.V(this.oV(),t.cm)},
oV(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghl(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjO()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.aH(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aM(s.kE())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
di(a,b){var s,r,q,p,o=this
if(o.y.Y(0,b))return
s=o.y
if(o.gdS()>0){r=a.x
r===$&&A.c()
r.gaw().r=!0}o.hG(a,s,b)
r=a.x
r===$&&A.c()
r=r.w
q=r.B(s.gm(),s.gp())
p=r.$ti.c
p.a(null)
r.aY(s.gm(),s.gp(),null)
p.a(q)
r.aY(b.gm(),b.gp(),q)
o.y=b},
hG(a,b,c){},
eS(a){var s,r,q=this.kA(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.p)(q),++r)this.kx(q[r],B.hC)
return q},
kx(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.lj(s,"blindness")}this.kH(a,b)},
kH(a,b){},
c6(a){var s=this.hI(a),r=this.fg(a)
return r.a>0?s+r.b:s},
fg(a){var s=this.x,r=s.n(0,a)
if(r==null){r=new A.hQ(a)
s.h(0,a,r)
s=r}else s=r
return s},
l0(a,b,c,d){var s=this
s.z=B.c.P(s.z-b,0,s.gbq())
s.kJ(a,d,b)
if(s.z>0)return!1
a.cE(B.bO,s)
a.bX("{1} kill[s] {2}.",c,s)
if(d!=null)d.kG(a,s)
s.kB(a,c)
return!0},
pJ(a,b,c){return this.l0(a,b,c,null)},
kF(a,b,c){},
kJ(a,b,c){},
kG(a,b){},
kD(a){},
pb(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.b([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.T(s,new A.cS(r,A.z(r).i("cS<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kL(a)
else{p.cJ(a)
p.b=0}}}if(n.z>0)n.kD(a)}}
A.ba.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.aF())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.km.prototype={
aL(){return"HitType."+this.b}}
A.dh.prototype={}
A.du.prototype={}
A.bb.prototype={
gaC(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.O(s*this.r))},
gnX(){return B.a.aA(this.b,1,new A.p0(),t.i)},
gnW(){return B.a.aA(this.c,0,new A.p_(),t.i)},
giK(){return B.a.aA(this.d,1,new A.oZ(),t.i)},
giJ(){return B.a.aA(this.e,0,new A.oY(),t.i)},
gb2(){var s=this.f
if(s!==$.aF())return s
return this.a.e},
gd0(){return this.a.c*this.giK()+this.giJ()},
jM(a,b){if(a===0)return
B.a.j(this.c,new A.dh(a))},
lj(a,b){if(a===1)return
B.a.j(this.b,new A.du(a))},
on(a,b){if(a===0)return
B.a.j(this.e,new A.dh(a))},
cT(a,b){if(a===1)return
B.a.j(this.d,new A.du(a))},
e2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.lV(a,b,a0),c=e.lW(a,a0)
if(d){s=e.a.a
if(s==null)s=b
s.toString
r=s}else r=$.vP()
q=c?a0:$.vP()
if(a0 instanceof A.ax)a0.pz(e)
if(a1!==!1){s=$.o()
p=s.aB(1,100)*e.gnX()+e.gnW()
o=a0.ghl()
n=A.a8(o,o.$ti.i("k.E"))
B.a.bL(t.hy.a(n),s.a)
for(s=n.length,m=0;m<s;++m){l=n[m]
p-=l.a
if(p<0){if(d||c){s=a.c
s===$&&A.c()
s.y.Q.at.Z(B.x,l.b,q,r,null)}return 0}}}k=a0.gdI()
j=a0.c6(e.gb2())
s=e.a
i=B.e.M((s.c*e.giK()+e.giJ())*(1/(1+j))*100)
h=A.y3(k)
g=B.e.O($.o().cP(i,B.c.A(i,2))*h/100)
if(g===0){if(d||c)a.hC("{1} do[es] no damage to {2}.",r,q)
return 0}if(b!=null)b.kF(a,a0,g)
if(a0.l0(a,g,r,b))return g
if(j<=0){f=e.gb2().f.$1(g)
if(f!=null)a.hf(f,a0)}a.os(B.bR,a0,g,e.gb2())
if(d||c)a.hC("{1} "+s.b+" {2}.",r,q)
return g},
hL(a,b,c){return this.e2(a,b,c,null)},
lV(a,b,c){var s,r
if(b instanceof A.ax)return!0
if(b!=null){s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gm(),r.gp())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.ax&&this.a.a!=null)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=c.y
r=s.f.B(r.gm(),r.gp())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
lW(a,b){var s,r
if(b instanceof A.ax)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gm(),r.gp())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.p0.prototype={
$2(a,b){return A.bI(a)*t.jK.a(b).a},
$S:47}
A.p_.prototype={
$2(a,b){return A.bI(a)+t.fV.a(b).a},
$S:28}
A.oZ.prototype={
$2(a,b){return A.bI(a)*t.jK.a(b).a},
$S:47}
A.oY.prototype={
$2(a,b){return A.bI(a)+t.fV.a(b).a},
$S:28}
A.aH.prototype={}
A.c4.prototype={
kL(a){}}
A.he.prototype={
cJ(a){a.a0("{1} slow[s] back down.",a.a)}}
A.h_.prototype={
cJ(a){a.a0("{1} warm[s] back up.",a.a)}}
A.hI.prototype={
kL(a){var s=a.a
s.toString
if(!s.pJ(a,this.b,new A.aL(A.aT("poison",B.y,B.aH).a6(1))))a.a0("{1} [are|is] hurt by poison!",a.a)},
cJ(a){a.a0("{1} [are|is] no longer poisoned.",a.a)}}
A.dN.prototype={
cJ(a){var s,r
a.a0("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.c()
if(s===r.y){s=r.x
s===$&&A.c()
s.gaw().w=!0}}}
A.hb.prototype={
cJ(a){a.a0("{1} flutter[s] down to the ground.",a.a)}}
A.hQ.prototype={
cJ(a){a.a0("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hH.prototype={
cJ(a){a.a0("{1} no longer perceive[s] monsters.",a.a)}}
A.dP.prototype={
t(a){return this.a}}
A.oc.prototype={
$1(a){A.u(a)
return null},
$S:49}
A.od.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.ee(c)
A.u(d)
return null},
$S:78}
A.h8.prototype={}
A.k_.prototype={}
A.aN.prototype={
t(a){return this.a}}
A.ke.prototype={
ec(){return new A.V(this.lh(),t.e)},
lh(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ec(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.e8()
n=s.y
m=s.x
m===$&&A.c()
r=2
return a.aM(s.a.oI(n.Q.ax,m,s.w,new A.oW(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.di(s,t.u.a(o.h2()))
m.gaw().cL()
return 0
case 1:return a.c=p.at(-1),3}}}},
bw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gap(0);m=!0){l=s.b
if(l===s.c)A.a2(A.ct())
k=s.a
if(!(l<k.length))return A.a(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.cM()
o.a(h)
l=s.b
k=s.a
l=(l-1&k.length-1)>>>0
s.b=l
B.a.h(k,l,h)
if(s.b===s.c)s.iW();++s.d
i=h.V()}while(l=p.length,l!==0){if(0>=l)return A.a(p,-1)
g=p.pop().V()
while(l=g.a,l!=null)g=l.V()}l=b.x
l===$&&A.c()
l.gaw().cL()
k=i.c
if(k){s.cM()
if(i.b){f=j.d
f===$&&A.c()}else f=!1
if(f){j.a.pb(j)
l.e=B.c.ab(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.b(n.slice(0),A.O(n))
B.a.aN(n)
return new A.f8(s)}}if(b.r!=null)b.jA()
while(s.b===s.c){l=b.x
l===$&&A.c()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.a(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.e_(b))return b.j3(m)
if(f.a<240){d=e.gjP()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.a(B.aR,d)
c+=B.aR[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.e_(b))return b.j3(m)
j=e.al(b)
j.a=e
l=e.y
j.b!==$&&A.az()
j.b=l
j.c!==$&&A.az()
j.c=b
j.d!==$&&A.az()
j.d=!0
s.bj(o.a(j))}else l.e=B.c.ab(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.jA()}}}}},
j3(a){if(a)return this.ng()
return B.cV},
ng(){var s=this.d,r=A.b(s.slice(0),A.O(s))
B.a.aN(s)
return new A.f8(r)},
cm(a){var s,r=this.x
r===$&&A.c()
s=a.y
s=r.f.B(s.gm(),s.gp())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).ef(0,s.b))return!0
return!1},
jA(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.c()
q=n.pQ(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.az()
q.b=r
q.c!==$&&A.az()
q.c=p
q.d!==$&&A.az()
q.d=!1
o=p.b
o.bj(o.$ti.c.a(q))
return}}p.r=null}}
A.oW.prototype={
$1(a){this.a.b=a},
$S:79}
A.i8.prototype={}
A.lW.prototype={}
A.f8.prototype={}
A.kJ.prototype={
i2(a){this.Z(B.ck,a,null,null,null)},
jZ(a,b){this.Z(B.cl,a,b,null,null)},
dP(a){return this.jZ(a,null)},
Z(a,b,c,d,e){var s,r
b=this.mK(b,c,d,e);++this.b
s=this.a
if(s.length!==0){r=B.a.gco(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.hy(a,b,1))
if(s.length>100)B.a.dg(s,0)},
mK(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
for(s=a,r=1;r<=3;++r){q=m[r-1]
if(q!=null){p=""+r
o="{"+p
n=q.gam()
s=A.bo(s,o+"}",n.b)
n=q.gam()
s=A.bo(s,"{the "+p+"}",n.c)
p=q.gam()
s=A.bo(s,o+" he}",p.d.c)
p=q.gam()
s=A.bo(s,o+" him}",p.d.d)
p=q.gam()
s=A.bo(s,o+" his}",p.d.e)}}if(b!=null)s=A.wY(s,b.gam().d)
if(0>=s.length)return A.a(s,0)
return s[0].toUpperCase()+B.i.cV(s,1)}}
A.pU.prototype={
$1(a){var s,r=a.n(0,1)
r.toString
s=a.n(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:27}
A.pW.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.i.aK(this.b,q,a)
r.b=-1},
$S:81}
A.pV.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.bY.prototype={
aL(){return"LogType."+this.b}}
A.hy.prototype={}
A.u2.prototype={
$1(a){a=((B.c.eG(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:5}
A.fd.prototype={
gc0(){var s=this.b,r=A.z(s).i("cS<2>"),q=this.$ti.c
return A.q7(new A.cS(s,r),r.ac(q).i("1(k.E)").a(new A.qF(this)),r.i("k.E"),q)},
ce(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.ah(b))throw A.n(A.aG('Already have a resource named "'+b+'".',null))
r=A.bc(l.i("c0<1>"))
s.h(0,b,new A.bv(a,c,d,e,f,r,l.i("bv<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.n(0,o)
if(n==null)throw A.n(A.aG('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c3(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.i("c0<1>"),o=0;o<s.length;s.length===r||(0,A.p)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.n(0,j)
if(i==null){i=new A.c0(j,l,p)
q.h(0,j,i)}}},
pa(a){var s=this.b.n(0,a)
if(s==null)throw A.n(A.aG('Unknown resource "'+a+'".',null))
return s.a},
c8(a){var s=this.b.n(0,a)
if(s==null)return null
return s.a},
li(a){var s,r,q=this.b.n(0,a)
if(q==null)throw A.n(A.aG('Unknown resource "'+a+'".',null))
s=q.f
r=A.z(s)
return new A.cM(s,r.i("r(1)").a(new A.qG(this)),r.i("cM<1,r>"))},
dh(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.h7("",a,new A.qK(p))
r=p.a.n(0,c)
q=r.a
if(!s)q+=" (only)"
return p.h7(q,a,new A.qL(o,p,r))},
i_(a){return this.dh(a,null,null)},
l5(a,b){return this.dh(a,null,b)},
pN(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.i("c0<1>")
r=b.$ti
q=r.i("k.E")
p=A.q7(b,r.ac(s).i("1(k.E)").a(new A.qI(n)),q,s)
o=A.a8(b,q)
B.a.fs(o)
return n.h7(B.a.aQ(o,"|")+" (match)",a,new A.qJ(n,p))},
h7(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.i("H(bv<1>)").a(c)
s=new A.mT(a,b)
r=this.c
q=r.n(0,s)
if(q==null){p=A.b([],j.i("t<bv<1>>"))
o=A.b([],t.gk)
for(n=this.b,n=new A.cR(n,n.r,n.e,A.z(n).i("cR<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.pc(b)*l.oP(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.iE(p,o,m,j.i("iE<1>"))
r.h(0,s,q)}return q.eR()}}
A.qF.prototype={
$1(a){return this.a.$ti.i("bv<1>").a(a).a},
$S(){return this.a.$ti.i("1(bv<1>)")}}
A.qG.prototype={
$1(a){return this.a.$ti.i("c0<1>").a(a).a},
$S(){return this.a.$ti.i("r(c0<1>)")}}
A.qK.prototype={
$1(a){this.a.$ti.i("bv<1>").a(a)
return 1},
$S(){return this.a.$ti.i("H(bv<1>)")}}
A.qL.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.i("bv<1>").a(a).f,p=A.z(q),o=p.i("d6<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.d6(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.i("H(bv<1>)")}}
A.qI.prototype={
$1(a){var s
A.a6(a)
s=this.a.a.n(0,a)
if(s==null)throw A.n(A.aG('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.i("c0<1>(r)")}}
A.qJ.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.i("bv<1>").a(a).f,s=A.va(s,s.r,A.z(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.d_(0,new A.qH(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.i("H(bv<1>)")}}
A.qH.prototype={
$1(a){return this.a.$ti.i("c0<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.i("B(c0<1>)")}}
A.bv.prototype={
pc(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.x(a,r,q,s.d,s.e)},
oP(a){var s,r,q=this.b
if(a<q){s=q-a
r=0.6+a*0.2
return Math.exp(-0.5*s*s/(r*r))}else{q=this.c
if(a>q){s=a-q
r=1+a*0.1
return Math.exp(-0.5*s*s/(r*r))}else return 1}}}
A.c0.prototype={
G(a,b){var s
this.$ti.a(b)
for(s=this;s!=null;s=s.b)if(b===s)return!0
return!1},
t(a){var s=this.b
if(s==null)return this.a
return s.t(0)+"/"+this.a}}
A.mT.prototype={
ga1(a){return B.i.ga1(this.a)^B.c.ga1(this.b)},
Y(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.iE.prototype={
eR(){var s,r,q,p,o,n,m,l,k=this.b
if(k.length===0)return null
s=$.o().aP(this.d)
r=k.length
q=r-1
for(p=this.c,o=p.length,n=0;;){m=B.c.A(n+q,2)
if(m>0){l=m-1
if(!(l<o))return A.a(p,l)
l=s<p[l]}else l=!1
if(l)q=m-1
else{if(!(m>=0&&m<o))return A.a(p,m)
if(s<p[m]){if(!(m<r))return A.a(k,m)
return k[m].a}else n=m+1}}}}
A.dy.prototype={
t(a){return this.gam().a}}
A.aL.prototype={
gam(){return this.a}}
A.qn.prototype={
jR(a,b,c){var s,r,q=this,p=t.fm
p=new A.qq(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.hD(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.hD(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a6(a){return this.jR(a,null,null)},
t(a){return this.b}}
A.qq.prototype={
$1(a){var s,r,q=this,p=B.c.t(q.b),o=A.bo(a,"#",p)
p=q.c
if(p!=null&&p.length!==0){if(0>=p.length)return A.a(p,0)
s=p[0]
if(0>=s.length)return A.a(s,0)
r=B.i.G("aeiouAEIOU",s[0])?"an":"a"
o=A.bo(o,"<a>",r)
p=B.a.aQ(p," ")
o=A.bo(o,"<p>",p+" ")}else{p=q.a.a?"an":"a"
o=A.bo(o,"<a>",p)
o=A.bo(o,"<p>","")}p=q.d
return p!=null&&p.length!==0?o+" "+B.a.aQ(p," "):o},
$S:4}
A.qp.prototype={
$1(a){var s,r
this.a.a=!0
s=a.n(0,1)
s.toString
r=a.n(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:27}
A.hE.prototype={
aL(){return"NounCategory."+this.b}}
A.hD.prototype={
t(a){return this.a}}
A.e_.prototype={
aL(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.q6.prototype={
$1(a){this.a.i("@<0>").ac(this.b).i("aS<1,2>").a(a)
return new A.S(a.a,a.b)},
$S(){return this.a.i("@<0>").ac(this.b).i("+(1,2)(aS<1,2>)")}}
A.lV.prototype={
gL(a){var s,r,q,p,o,n,m,l,k=this,j=A.b([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.a(q,l)
if(J.ad(q[l],k.b))B.a.j(j,new A.d(n,s))}return new J.b4(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aY(b.gm(),b.gp(),q)
s.c=Math.min(s.c,b.gm())
s.d=Math.max(s.d,b.gm())
s.e=Math.min(s.e,b.gp())
s.f=Math.max(s.f,b.gp())}}
A.a7.prototype={
f_(a){var s,r,q,p=this.au(a)
for(s=a.gcF(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ku(a,this,p)}return p},
au(a){return 0},
dG(a,b){var s=this.f_(a)
if(s<=0)return b
return new A.ka(s,b)}}
A.Z.prototype={}
A.cZ.prototype={}
A.cK.prototype={}
A.dM.prototype={}
A.aX.prototype={
eP(a,b){return!0},
bI(a){a.at=null
return this.a}}
A.lr.prototype={
eP(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.M(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.Z(B.x,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bI(a){return A.lq()}}
A.cc.prototype={
eP(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.b([s.gb8(),s,s.gb9()],t.T)
if(B.a.G(B.au,l.d)){B.a.j(r,l.d.gbF())
B.a.j(r,l.d.gbV())}q=new A.aq(r,t.ca.a(new A.qY(l,a,b)),t.e0)
if(!q.gL(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaz(0)}else{s=a.x
s===$&&A.c()
p=l.d.gb8()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0){p=l.d.gbF()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0}else p=!1
l.b=p
p=l.d.gb9()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0){p=l.d.gbV()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.c()
if(!l.nJ(s,b))return!1}else{s=a.x
s===$&&A.c()
p=l.d.gb8()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0
p=l.d.gb9()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.c()
return l.nQ(s,b)},
bI(a){this.a=!1
return A.bt(this.d)},
nJ(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.b([],t.T),d=A.bc(t.j),c=A.bc(t.u),b=f.d,a=[b.gbF(),b.gb8(),b,b.gb9(),b.gbV()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.a(r,l)
l=(r[l].a.e.a&$.bL().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gb8(),n,n.gb9()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.a(r,l)
l=(r[l].a.e.a&$.bL().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaz(e)
return!0}if(1===g){f.d=d.gaz(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gb8())&&d.G(0,f.d.gbF())){f.d=f.d.gb8()
return!0}else if(d.G(0,f.d.gb9())&&d.G(0,f.d.gbV())){f.d=f.d.gb9()
return!0}return!1},
nQ(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bm(n,b.gb4())&&a.w.B(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.B(r,q).a.e.Y(0,$.bK()))return!1
p=new A.qX(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbF())))return!1
if(p.$1(n.F(0,o.d.gb8())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gb9())))return!1
if(p.$1(n.F(0,o.d.gbV())))return!1
if(s.B(r,q).x>0)return!1
return!0}}
A.qY.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.c()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.B(r.a,r.b).a.e.a&$.bL().a)!==0},
$S:11}
A.qX.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.B(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.B(r,q)!=null},
$S:1}
A.dR.prototype={
eP(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="In view: {1}."
d.d=a
if(d.c!=null)return!0
s=a.x
s===$&&A.c()
r=$.z_()
A.wC(s)
q=r.a.get(s)
if(q==null){q=A.bc(t.u)
r.h(0,s,q)}r=$.yZ()
A.wC(s)
p=r.a.get(s)
if(p==null){p=A.bc(t.W)
r.h(0,s,p)}q.j(0,a0.y)
r=d.e
o=r==null
n=!o
if(n){if(a0.y.Y(0,r)&&!d.f)return!1
if(!d.f&&a.y.Q.at.b!==d.r)return!1}d.f=!1
r=A.b([],t.lE)
for(m=s.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.p)(m),++k){j=m[k]
if(j instanceof A.ae&&a.cm(j))r.push(j)}i=d.a
m=i==null
if(m){if(r.length!==0){a.y.Q.at.Z(B.x,b,B.a.gaz(r),c,c)
return!1}}else{l=d.w
if(l==null)l=d.w=r.length
if(r.length>l){a.y.Q.at.Z(B.x,b,B.a.gco(r),c,c)
return!1}}if(m){r={}
r.a=null
s.f1(new A.oB(r,s,p,o))
r=r.a
if(r!=null){a.y.Q.at.Z(B.x,"You see {1}.",r,c,c)
return!1}}h=m?new A.oC(q,s):i
r=!m
if(r&&i.$1(a0.y)){if(!d.b)a.y.Q.at.Z(B.x,"You are on the stairs. Press again to take them.",c,c,c)
return!1}g=d.mJ(a,a0,h)
if(g==null){if(r)s="You don't know where the stairs are."
else{r=a0.y
r=s.f.B(r.gm(),r.gp())
s=!(!r.b&&r.d+r.e>r.c)?"It is too dark to explore. Light a light source.":"Nothing left to explore. Try searching for secret doors."}a.y.Q.at.Z(B.x,s,c,c,c)
return!1}f=g.a
e=g.b
if(d.b&&e===1&&n){a.y.Q.at.Z(B.x,"Press again to enter.",c,c,c)
return!1}d.c=f
return!0},
bI(a){var s,r,q=this,p=q.c
p.toString
q.c=null
s=a.y
q.e=s
r=q.d
r===$&&A.c()
q.r=r.y.Q.at.b
r=r.x
r===$&&A.c()
s=s.F(0,p)
q.f=r.f.B(s.a,s.b).a.e.Y(0,$.bK())
return A.bt(p)},
mJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.mN.a(c)
s=a.x
s===$&&A.c()
r=t.u
q=A.D(r,t.lF)
p=A.hu(r)
for(r=p.$ti.c,o=0;o<8;++o){n=B.a6[o]
m=b.y.F(0,n)
if(this.jc(a,m,c)){q.h(0,m,new A.S(n,1))
p.bj(r.a(m))}}for(s=s.f,l=s.a,k=s.b.b.a,j=l.length;!p.gap(0);){m=p.cM()
i=q.n(0,m)
n=i.a
h=i.b
if(c.$1(m))return new A.S(n,h)
g=m.gm()
f=m.gp()
s.l(g,f)
g=f*k+g
if(!(g>=0&&g<j))return A.a(l,g)
if(l[g].a.b!=null)continue
for(g=h+1,o=0;o<8;++o){e=m.F(0,B.a6[o])
if(e.Y(0,b.y)||q.ah(e))continue
if(!this.jc(a,e,c))continue
q.h(0,e,new A.S(n,g))
p.bj(r.a(e))}}return null},
jc(a,b,c){var s,r,q,p
t.mN.a(c)
s=a.x
s===$&&A.c()
r=s.f
if(!r.b.G(0,b))return!1
q=b.a
p=b.b
r=r.B(q,p)
if(!r.r||(r.a.e.a&$.bL().a)===0)return!1
if(r.x>0)return!1
if(r.a.b!=null&&!c.$1(b))return!1
if(s.w.B(q,p)!=null&&!r.b&&r.d+r.e>r.c)return!1
return!0}}
A.oB.prototype={
$2(a,b){var s=this,r=s.b.f.B(b.gm(),b.gp())
if(!r.b&&r.d+r.e>r.c&&s.c.j(0,a)&&!s.d){r=s.a
if(r.a==null)r.a=a}},
$S:21}
A.oC.prototype={
$1(a){var s,r=!1
if(!this.a.G(0,a)){s=this.b
if(s.f.B(a.gm(),a.gp()).a.b==null)r=!s.c5(a).gap(0)||B.a.d_(a.gbC(),new A.oA(s))}return r},
$S:1}
A.oA.prototype={
$1(a){var s
t.u.a(a)
s=this.a.f
return s.b.G(0,a)&&!s.B(a.gm(),a.gp()).r},
$S:1}
A.ax.prototype={
gam(){return $.yy()},
gbq(){var s=this.Q.CW.a
s.toString
return B.e.M(Math.pow(s,1.458)+9)},
gdS(){return this.Q.gdS()},
geM(){return"hero"},
e_(a){var s=this,r=s.at
if(r!=null&&!r.eP(a,s))s.at=null
return s.at==null},
gdI(){return this.Q.gdI()},
gjP(){return 6},
gjO(){var s=this.Q.ch.a
s.toString
return 20+A.wn(s)},
cq(){return $.bL()},
kE(){var s,r,q,p,o,n=A.b([],t.x)
for(s=this.Q,r=B.a.gL(s.f.b),q=new A.bu(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcF(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c;s.q();){q=s.b
B.a.T(n,(q==null?r.a(q):q).eT(this))}return n},
al(a){return this.at.bI(this)},
kA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.b([],t.d3)
for(s=e.Q,r=s.f.gcR(),q=J.aw(r.a),r=new A.d3(q,r.b,r.$ti.i("d3<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.S(p,o))}if(d.length===0)B.a.j(d,new A.S(null,A.bg(e,"punch[es]",3,null,null)))
n=A.b([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.p)(d),++k){j=d[k]
i=j.a
h=new A.bb(j.b,A.b([],p),A.b([],o),A.b([],p),A.b([],o),$.aF())
B.a.j(n,h)
j=m.a
j.toString
h.jM(A.wo(j),"agility")
for(j=s.gcF(),g=j.$ti,j=new A.al(j.a(),g.i("al<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hE(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cT(j,"heft")
i.kw(h)}}return n},
kH(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.xg(s)
break}for(s=B.a.gL(this.Q.f.b),r=new A.bu(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.kw(a)}},
hI(a){return this.Q.ka(a)},
kG(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.lr(b.Q)
q=b.Q.gbo()*20/(r+19)
for(p=s.gcF(),o=p.$ti,p=new A.al(p.a(),o.i("al<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).kt(s,b,q)}this.i4(B.e.aU(q))},
kB(a,b){a.bX("{1} [were|was] slain by {2}.",this,b)},
kD(a){var s,r,q,p=this
p.cy=a.ge0()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.P(s-r,0,A.i2(q))}++p.cx},
hG(a,b,c){var s=a.x
s===$&&A.c()
s.gaw().w=!0},
i4(a){this.Q.y+=a},
ih(a){this.Q.y-=a},
pz(a){var s,r,q,p=this
if(!(p.at instanceof A.aX))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aU(a.gd0()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.P(r+s,0,A.i2(q))},
pC(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.Z(B.a_,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.M(Math.pow(q,1.458)+9)){r.at.Z(B.x,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.Z(B.a_,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.lr()
return!0},
fq(a){if(this.as.j(0,a))this.Q.ax.i5(a.Q)},
fd(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.P(s+a,0,A.kt(r))},
bs(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.df(j)
j.ch.df(j)
s=j.CW
s.df(j)
r=j.cx
r.df(j)
j.z.pA(j)
q=j.f.gcR()
p=A.a8(q,q.$ti.i("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.p)(p),++n)o+=p[n].gf2()
for(j=j.gcF(),q=j.$ti,j=new A.al(j.a(),q.i("al<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kv(k,p,o)}l=i.kh(B.e.O(o))
k.ax.l7(l,new A.oX(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.P(B.c.P(j,0,B.e.M(Math.pow(s,1.458)+9)),0,k.gbq())
s=k.ch
r=r.a
r.toString
k.ch=B.c.P(s,0,A.kt(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.P(r,0,A.i2(i))}}
A.oX.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
A:{s=g.length
r=s===2
q=r
p=h
o=!1
if(q){q=g.length
if(0>=q)return A.a(g,0)
n=g[0]
if(1>=q)return A.a(g,1)
p=g[1]
q=n.gam().a===p.gam().a
m=n
l=!0
k=!0}else{q=o
m=h
n=m
l=!1
k=!1}if(q){q=m.b0(2).gam().a
break A}if(r){if(l)m=n
else{if(0>=g.length)return A.a(g,0)
n=g[0]
m=n}if(k)j=p
else{if(1>=g.length)return A.a(g,1)
p=g[1]
j=p}q=m.gam().b+" and "+j.gam().b
break A}if(s===1){if(l)m=n
else{if(0>=g.length)return A.a(g,0)
n=g[0]
m=n}q=m.gam().b
break A}if(typeof s!=="number")return s.ee()
if(s<=0){q="your fists"
break A}q=A.a2(A.aG(h,h))}o=i.c
if(o<1&&a>=1)i.a.Q.at.Z(B.a_,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.Z(B.x,"You feel comfortable wielding "+q+".",h,h,h)},
$S:82}
A.cP.prototype={
ie(a){var s=this.c.n(0,a.gcG())
return s==null?0:s}}
A.dn.prototype={
gdS(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdI(){var s,r,q,p,o
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc1()}for(s=this.gcF(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ks(this,p)}return p},
geb(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).geb()
return p},
gcF(){return new A.V(this.oO(),t.kX)},
oO(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcF(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aM(s.b.d)
case 2:r=3
return a.aM(s.c.d)
case 3:o=s.z.a
r=4
return a.aM(new A.b6(o,A.z(o).i("b6<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
lE(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.Z,j=A.dt(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aU[q]
o=s.n(0,p)
o.toString
o-=0.4
j.ce(r.a(p),l,l,l,o,o,l)}k=A.D(k,t.S)
for(q=0;q<4;++q)k.h(0,B.aU[q],0)
for(n=0;n<32;++n){s=j.dh(0,l,l)
s.toString
r=k.n(0,s)
r.toString
k.h(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.n(0,p.gba())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.P(r+p.hb(m)+m.dq(p.gba()),1,50)}},
ka(a){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c6(a)
return p},
dq(a){var s,r,q,p,o,n,m
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gag(),n=o.length,m=0;m<o.length;o.length===n||(0,A.p)(o),++m)p+=o[m].dq(a)
return p},
spo(a){this.as=A.u(a)}}
A.hw.prototype={
gjN(){var s=this.b
return new A.cS(s,A.z(s).i("cS<2>")).aA(0,0,new A.pX(),t.S)},
i5(a){var s,r=this.a
r.b6(a,new A.q_())
s=r.n(0,a)
s.toString
r.h(0,a,s+1)},
lr(a){var s,r=this.b
r.b6(a,new A.q0())
s=r.n(0,a)
s.toString;++s
r.h(0,a,s)
return s},
d9(a){var s,r,q,p,o=this.c,n=a.a
o.b6(n,new A.pY())
s=o.n(0,n)
s.toString
o.h(0,n,s+1)
for(o=a.gag(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.p)(o),++r){q=o[r].a
s.b6(q,new A.pZ())
p=s.n(0,q)
p.toString
s.h(0,q,p+1)}},
pR(a){var s,r=this.f,q=a.a
r.b6(q,new A.q1())
s=r.n(0,q)
s.toString
r.h(0,q,s+1)},
i6(a){var s=this.a.n(0,a)
return s==null?0:s},
ei(a){var s=this.b.n(0,a)
return s==null?0:s},
kf(a){var s=this.c.n(0,a)
return s==null?0:s}}
A.pX.prototype={
$2(a,b){return A.u(a)+A.u(b)},
$S:22}
A.q_.prototype={
$0(){return 0},
$S:2}
A.q0.prototype={
$0(){return 0},
$S:2}
A.pY.prototype={
$0(){return 0},
$S:2}
A.pZ.prototype={
$0(){return 0},
$S:2}
A.q1.prototype={
$0(){return 0},
$S:2}
A.bZ.prototype={}
A.aK.prototype={
hE(a,b,c,d){},
ks(a,b){return b},
eT(a){return B.i0},
kv(a,b,c){t.aa.a(b)
return c},
kt(a,b,c){return c},
ku(a,b,c){return c}}
A.mR.prototype={}
A.cV.prototype={}
A.fb.prototype={}
A.hK.prototype={
dM(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gX(){return"You must be a "+this.a.a}}
A.aj.prototype={
ak(a,b){return B.c.ak(this.a,t.M.a(b).a)},
$iaB:1}
A.hZ.prototype={
eN(a){var s=this.a.n(0,a)
return s==null?0:s},
oA(a){var s=this.b.n(0,a)
return s==null?0:s},
bS(a){var s=this.eN(a),r=this.b.n(0,a)
return B.c.P(s+(r==null?0:r),0,15)},
pA(a){var s,r,q,p=this.b,o=A.cT(p,t.M,t.S)
p.aN(0)
for(s=B.a.gL(a.f.b),r=new A.bu(s,t.k),q=t.W;r.q();)q.a(s.gH()).geh().ae(0,new A.r8(this))
p.ae(0,new A.r9(this,o,a))}}
A.r8.prototype={
$2(a,b){var s,r
t.M.a(a)
A.u(b)
s=this.a.b
s.b6(a,new A.r7())
r=s.n(0,a)
r.toString
s.h(0,a,r+b)},
$S:18}
A.r7.prototype={
$0(){return 0},
$S:2}
A.r9.prototype={
$2(a,b){var s
t.M.a(a)
A.u(b)
s=this.b.n(0,a)
if((s==null?0:s)!==b)this.c.at.i2("You are at level "+this.a.bS(a)+" in "+a.gN()+".")},
$S:18}
A.dl.prototype={
ga1(a){return B.i.ga1(this.a)},
Y(a,b){if(b==null)return!1
return b instanceof A.dl&&this.a===b.a}}
A.n_.prototype={}
A.be.prototype={
l7(a,b){var s=A.z(this)
s.i("be.T").a(a)
s.i("@(be.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cx.prototype={
aL(){return"Stat."+this.b}}
A.cy.prototype={
hb(a){return 0},
kS(a,b){var s,r=this
if(b!=null)r.b=b
s=r.ds(a)
r.l7(s,new A.rq(r,s,a))},
df(a){return this.kS(a,null)},
hw(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.n(0,this.gba())
o.toString
return B.e.M(400*(1/o)*Math.pow(A.x(s+r+q+p,48,160,1,40),2))},
ds(a){return B.c.P(this.b+this.hb(a)+a.dq(this.gba()),1,50)},
t(a){return this.gba().c}}
A.rq.prototype={
$1(a){var s=this.b-A.u(a),r=this.a,q=this.c.at
if(s>0)q.i2("You feel "+r.gev()+"! Your "+r.gba().c+" increased by "+s+".")
else q.Z(B.a_,"You feel "+r.gez()+"! Your "+r.gba().c+" decreased by "+-s+".",null,null,null)},
$S:49}
A.i1.prototype={
gba(){return B.ak},
gev(){return"mighty"},
gez(){return"weak"},
hb(a){return-a.geb()},
kh(a){var s,r=this.a
r.toString
s=B.e.P(r-a,-10,50)
if(s<0)return A.x(s,-10,-1,0,0.6)
else return A.x(s,0,50,1,2)}}
A.fU.prototype={
gba(){return B.ae},
gev(){return"dextrous"},
gez(){return"clumsy"}}
A.ia.prototype={
gba(){return B.ar},
gev(){return"tough"},
gez(){return"sickly"}}
A.hh.prototype={
gba(){return B.a2},
gev(){return"smart"},
gez(){return"stupid"}}
A.cl.prototype={
gca(){return this.a.w.$1(this.b)},
gd4(){return this.a.x.$1(this.b)},
gd3(){return this.a.y.$1(this.b)},
c6(a){var s=this.a.as.n(0,a)
if(s==null)return 0
return s.$1(this.b)},
dq(a){var s=this.a.at.n(0,a)
if(s==null)return 0
return s.$1(this.b)},
geh(){var s,r,q,p=t.M,o=A.D(p,t.S)
for(p=A.wZ(this.a.ch,p,t.Q),s=A.z(p),p=new A.bs(J.aw(p.a),p.b,s.i("bs<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.h(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.eu.prototype={
ft(){var s=this.e
s=s==null?null:s.$0()
return new A.cl(this,s==null?0:s)},
ll(a,b){this.as.h(0,t.h.a(a),t.Q.a(b))},
ln(a,b){this.at.h(0,t.Z.a(a),t.Q.a(b))},
t(a){return this.a}}
A.eJ.prototype={
gkp(){return B.Z},
gcR(){var s=t.bC
return new A.aq(new A.ib(this.b,s),s.i("B(k.E)").a(new A.or()),s.i("aq<k.E>"))},
gI(a){return B.a.aA(this.b,0,new A.oq(),t.S)},
d1(){var s,r,q,p,o,n=A.ao(9,null,!1,t.c)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.h(n,r,new A.N(p,q.b,q.c,q.d,o))}}return new A.eJ(n)},
oL(a){return B.a.d_(B.aF,new A.op(a))},
bn(){},
k9(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.b([],i)
r=A.b([],i)
for(i=this.b,q=0;q<9;++q)if(B.aF[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.a(s,0)
B.a.h(i,s[0],a)
return B.bw}if(p===1){if(0>=p)return A.a(r,0)
o=r[0]
if(!(o<9))return A.a(i,o)
o=i[o].a.f}else o=!1
if(o){if(0>=p)return A.a(r,0)
j=r[0]
if(!(j<9))return A.a(i,j)
j=i[j]
j.toString
if(0>=s.length)return A.a(s,0)
B.a.h(i,s[0],a)
return A.b([j],t.I)}if(j.f){n=A.b([],t.I)
for(j=r.length,m=0;m<r.length;r.length===j||(0,A.p)(r),++m){l=r[m]
if(!(l<9))return A.a(i,l)
p=i[l]
p.toString
B.a.j(n,p)
B.a.h(i,l,null)}if(0>=s.length)return A.a(s,0)
B.a.h(i,s[0],a)
return n}if(p===2){if(0>=p)return A.a(r,0)
j=r[0]
if(!(j<9))return A.a(i,j)
p=i[j]
p.toString
B.a.h(i,j,a)
return A.b([p],t.I)}if(0>=p)return A.a(r,0)
j=r[0]
p=s.length
if(0>=p)return A.a(s,0)
o=s[0]
if(j===o){if(1>=p)return A.a(s,1)
B.a.h(i,s[1],a)}else B.a.h(i,o,a)
return B.bw}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aF[q]===i){if(j[q]==null){B.a.h(j,q,a)
return B.bw}k=q}if(!(k>=0&&k<9))return A.a(j,k)
i=j[k]
i.toString
n=A.b([i],t.I)
B.a.h(j,k,a)
return n},
af(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.h(s,r,null)
break}},
gL(a){return new A.bu(B.a.gL(this.b),t.k)},
gej(){return B.aF},
gcw(){return this.b}}
A.or.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:9}
A.oq.prototype={
$2(a,b){A.u(a)
return a+(t.c.a(b)==null?0:1)},
$S:86}
A.op.prototype={
$1(a){return this.a.a.e===A.a6(a)},
$S:87}
A.mm.prototype={}
A.c6.prototype={}
A.eT.prototype={
gej(){return B.i1},
gcw(){return this}}
A.bX.prototype={
gI(a){return this.b.length},
d1(){var s=this.b,r=A.O(s)
return A.bC(this.a,new A.au(s,r.i("N(1)").a(new A.pb()),r.i("au<1,N>")))},
af(a,b){B.a.af(this.b,b)},
jS(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.p)(o),++q){p=o[q]
if(p.jU(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fl(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.p)(s),++p){s[p].lt(a)
q=a.f
if(q===0)return new A.dL(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dL(n-q,q)
B.a.j(s,a)
B.a.fs(s)
if(b)this.d=a
return new A.dL(n,0)},
c7(a){return this.fl(a,!1)},
bn(){var s,r=this.b,q=A.b(r.slice(0),A.O(r))
B.a.aN(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.p)(q),++s)this.c7(q[s])},
gL(a){var s=this.b
return new J.b4(s,s.length,A.O(s).i("b4<1>"))},
gkp(){return this.a}}
A.pb.prototype={
$1(a){return t.W.a(a).d1()},
$S:89}
A.dL.prototype={}
A.mD.prototype={}
A.N.prototype={
gag(){var s=A.b([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb2(){var s,r,q,p=$.aF(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gag(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gca(){return B.a.aA(this.gag(),0,new A.pD(),t.S)},
gd4(){return B.a.aA(this.gag(),1,new A.py(),t.i)},
gd3(){return B.a.aA(this.gag(),0,new A.px(),t.S)},
gc1(){return B.a.aA(this.gag(),0,new A.pw(),t.S)},
gam(){var s,r=this,q=r.e
if(q===$){s=r.mX()
r.e!==$&&A.eo()
r.e=s
q=s}return q},
gbf(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gag().length
for(s=o.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aU(n)},
geb(){return Math.max(0,B.a.aA(this.gag(),this.a.at,new A.pE(),t.S))},
gf2(){return B.e.O(B.a.aA(this.gag(),this.a.ax,new A.pz(),t.i))},
kw(a){var s,r,q,p,o,n,m
for(s=this.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.jM(o.w.$1(n),m)
a.cT(o.x.$1(n),m)
a.on(o.y.$1(n),m)}s=this.gb2()
if(s!==$.aF())a.f=s},
c6(a){return B.a.aA(this.gag(),0,new A.pA(a),t.S)},
geh(){var s,r,q,p=A.D(t.M,t.S)
for(s=this.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)s[q].geh().ae(0,new A.pC(p))
return p},
ak(a,b){var s,r,q,p,o=this
t.W.a(b)
s=o.a.d
r=b.a.d
if(s!==r)return B.c.ak(s,r)
if(o.gag().length!==b.gag().length)return B.c.ak(o.gag().length,b.gag().length)
for(q=0;q<o.gag().length;++q){s=o.gag()
if(!(q<s.length))return A.a(s,q)
p=s[q]
s=b.gag()
if(!(q<s.length))return A.a(s,q)
r=p.a.d
s=s[q].a.d
if(r!==s)return B.c.ak(r,s)}s=o.f
r=b.f
if(s!==r)return B.c.ak(r,s)
return 0},
b0(a){var s=this,r=a==null?s.f:a
return new A.N(s.a,s.b,s.c,s.d,r)},
d1(){return this.b0(null)},
jU(a){if(this.a!==a.a)return!1
if(this.gag().length!==0)return!1
if(a.gag().length!==0)return!1
return!0},
lt(a){var s,r,q=this
if(!q.jU(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dm(a){this.f-=a
return this.b0(a)},
mX(){var s,r,q,p,o=t.s,n=A.b([],o),m=A.b([],o)
for(o=this.gag(),s=o.length,r=0;r<o.length;o.length===s||(0,A.p)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jR(this.f,n,m)},
$iaB:1}
A.pD.prototype={
$2(a,b){return A.u(a)+t.L.a(b).gca()},
$S:12}
A.py.prototype={
$2(a,b){return A.bI(a)*t.L.a(b).gd4()},
$S:31}
A.px.prototype={
$2(a,b){return A.u(a)+t.L.a(b).gd3()},
$S:12}
A.pw.prototype={
$2(a,b){A.u(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:12}
A.pE.prototype={
$2(a,b){A.u(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:12}
A.pz.prototype={
$2(a,b){A.bI(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:31}
A.pA.prototype={
$2(a,b){return A.u(a)+t.L.a(b).c6(this.a)},
$S:12}
A.pC.prototype={
$2(a,b){var s,r
t.M.a(a)
A.u(b)
s=this.a
s.b6(a,new A.pB())
r=s.n(0,a)
r.toString
s.h(0,a,r+b)},
$S:18}
A.pB.prototype={
$0(){return 0},
$S:2}
A.bO.prototype={}
A.rT.prototype={}
A.aR.prototype={
t(a){return this.a.a6(1).a}}
A.ln.prototype={
nm(a){var s,r,q,p,o,n,m,l
t.E.a(a)
s=A.cT(this.a,t.q,t.S)
for(r=a.b,q=A.O(r),r=new J.b4(r,r.length,q.i("b4<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.ah(o))return null
n=s.n(0,o)
n.toString
s.h(0,o,n-p.f)}r=A.z(s).i("b6<1>")
r=A.a8(new A.b6(s,r),r.i("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.p)(r),++m){l=r[m]
p=s.n(0,l)
p.toString
if(p<=0)s.af(0,l)}return s}}
A.dv.prototype={
oQ(){var s=A.bC(new A.c6(this.b,26),null)
this.aI(s)
return s},
aI(a){var s,r,q,p,o,n,m,l,k,j,i=$.o(),h=a.c,g=B.e.M(i.aE(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a4(q)
if(!(q>=0&&q<s.length))return A.a(s,q)
p=s[q]
B.a.dg(s,q)
if(a.d===p)a.d=null}o=B.e.M(i.aE(h*0.3,h*0.7))
i=this.a
h=a.gl4()
n=0
for(;;){if(s.length<o){m=n+1
r=n<100
n=m}else r=!1
if(!r)break
i.b1(null,1,h)
for(l=1;l<s.length;++l){k=l-1
j=s[k]
p=s[l]
if(j.a===p.a&&j.gag().length===0&&p.gag().length===0){if(!(l<s.length))return A.a(s,l)
p=s[l]
B.a.dg(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.jy.prototype={}
A.aA.prototype={
gbo(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.a(B.aR,s)
s=B.aR[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.p)(r),++q){j=r[q]
i=j.a
l+=j.gbo()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aU(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.x(g.y,0,100,1,0.7)/100)},
fu(a,b){var s=b!=null?b.as+1:1,r=a.gm(),q=a.gp(),p=new A.ae(this,s,new A.co(),A.D(t.d0,t.cZ),$.o().br(60,200),new A.h8(),new A.dN(),new A.h_(),new A.dN(),new A.hb(),new A.he(),new A.hH(),new A.hI(),A.D(t.h,t.mF),new A.d(r,q))
p.lG(this,r,q,s)
return p},
ig(a){return this.fu(a,null)},
ls(){var s,r,q=this,p=A.b([],t.fO),o=$.o().aB(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cU(B.e.bP(q.c*0.9),t.or.a(B.a.gom(p)))
return p},
t(a){return this.a.a}}
A.fj.prototype={
aL(){return"SpawnLocation."+this.b}}
A.nM.prototype={
t(a){var s=this,r=A.b([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aQ(r," ")}}
A.ae.prototype={
geM(){return this.Q.b},
gam(){return this.Q.a},
gbq(){return this.Q.f},
gdI(){return 0},
gdS(){return this.Q.ch},
gdk(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
lG(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.P(o.Q.f,0,o.gbq())
s=o.at
s.a!==$&&A.az()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p)q.h(0,s[p],0)},
l8(a){var s,r=this.ax,q=r.n(0,a)
q.toString
s=a.a
r.h(0,a,q+$.o().aE(s,s*1.3))},
gjP(){return 6+this.Q.z},
gjO(){return this.Q.ay},
cq(){return this.Q.at},
kE(){return this.Q.CW},
al(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
n=q.n(0,o)
n.toString
q.h(0,o,Math.max(0,n-1))}m=0+i.nN(a)+i.mT(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.P(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb3()
r=a.x
r===$&&A.c()
s=r.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.dB(-(2+l*i.z/i.Q.f))
i.CW=B.e.P(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.cs(i,"aware",m,h)
A.cs(i,"alert",i.ch,h)
A.cs(i,"notice",k,h)
A.cs(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.co
if(s&&i.CW>i.cx){i.h5()
return A.jC(g,new A.cG(),B.b4)}if(s){s=$.o()
r=i.lR(k)
r=s.U(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h5()
return A.jC("{1} wakes up!",new A.cH(),B.bK)}s=j instanceof A.cH
if(s&&i.CW>i.cx)return A.jC(g,new A.cG(),B.b4)
if(s&&k<0.01){i.ch=0
return A.jC("{1} falls asleep.",new A.co(),h)}if(j instanceof A.cG&&i.CW<=0)return A.jC("{1} find[s] {1 his} courage.",new A.cH(),h)
return i.at.bI(a)},
lR(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.x(a,0.1,0.8,0,1)
return B.e.O(A.x(s*s*s,0,1,5,100))},
nN(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.cs(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.c()
if(!r.eQ(n,s)){A.cs(n,m,0,"out of sight")
return 0}r=r.f.B(s.gm(),s.gp())
q=r.d+r.e
if(q===0){A.cs(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb3()
r=n.Q.w
if(p>=r){A.cs(n,m,0,"too far")
return 0}o=(r-p)/r
A.cs(n,m,q*o,null)
return q/64*o},
mT(a){var s,r,q,p=this
if(p.Q.x===0){A.cs(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.c()
r=p.y
s=s.geH()
r=s.jD(s.iY(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.cs(p,"hear",q,"noise "+A.K(s)+", volume "+A.K(q))
return q},
dB(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
kA(a){var s=$.o(),r=t.aH.a(this.Q.d)
s=s.U(r.length)
if(!(s>=0&&s<r.length))return A.a(r,s)
return A.b([A.bN(r[s])],t.o0)},
hI(a){return 0},
kF(a,b,c){var s,r,q=a.c
q===$&&A.c()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.M(Math.pow(s,1.458)+9)
this.dB(-r)
s=q.y.Q.CW.a
s.toString
A.jQ(this,"fear","hit for "+c+"/"+B.e.M(Math.pow(s,1.458)+9)+" decrease by "+A.K(r))
this.jB(q,new A.qg(a,c))},
oh(a,b){var s,r=this
if(r.at instanceof A.co)return
s=50*b/r.Q.f
r.dB(-s)
A.jQ(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.K(s))},
kJ(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.dB(r)
A.jQ(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.K(r))
s=a.c
s===$&&A.c()
m.jB(s,new A.qh(m,a,c))
q=m.Q.e
p=A.O(q)
o=p.i("aq<1>")
n=A.a8(new A.aq(q,p.i("B(1)").a(new A.qi(m,c)),o),o.i("k.E"))
q=n.length
if(q!==0){p=$.o()
t.kz.a(n)
q=p.U(q)
if(!(q>=0&&q<n.length))return A.a(n,q)
q=n[q]
m.l8(q)
a.hf(q.bU(s,m),m)}},
oi(a,b,c){var s,r,q,p=this
if(p.at instanceof A.co)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.dB(r)
A.jQ(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.K(r))},
kB(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.c()
s=j.x
s===$&&A.c()
r=k.y
q=k.Q
p=s.e3(r,q.Q,q.c)
for(s=p.length,o=0;o<p.length;p.length===s||(0,A.p)(p),++o){n=p[o]
r=j.x
r===$&&A.c()
q=a.b
q===$&&A.c()
r=r.f
m=q.gm()
q=q.gp()
r.l(m,q)
l=r.a
m=q*r.b.b.a+m
if(!(m>=0&&m<l.length))return A.a(l,m)
m=l[m]
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.ax)j.y.Q.at.Z(B.x,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.c()
j.kT(k)},
hG(a,b,c){var s,r=a.x
r===$&&A.c()
s=r.f.B(b.gm(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.B(c.gm(),c.gp())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aX))s.at=null}s=r.f.B(b.gm(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.B(c.gm(),c.gp())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fq(this)},
jB(a,b){var s,r,q,p,o,n,m
t.lL.a(b)
s=a.x
s===$&&A.c()
r=s.b
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
if(o===this)continue
if(!(o instanceof A.ae))continue
n=o.y
m=this.y
n=n.S(0,m)
if(Math.max(Math.abs(n.a),Math.abs(n.b))>20)continue
if(s.eQ(o,m))b.$1(o)}},
h5(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
q.h(0,o,$.o().aP(o.a/2))}}}
A.qg.prototype={
$1(a){a.oh(this.a,this.b)},
$S:32}
A.qh.prototype={
$1(a){a.oi(this.b,this.a,this.c)},
$S:32}
A.qi.prototype={
$1(a){return t.d0.a(a).ia(this.a,this.b)},
$S:51}
A.jB.prototype={
V(){var s,r,q,p=this
p.a0(p.e,p.a)
s=p.r
if(s!=null)p.cE(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.az()
q.a=r
r=p.c
r===$&&A.c()
return p.bc(q.bI(r))}}
A.qe.prototype={
hM(a){var s,r=this,q=r.e
if(q!=null){s=r.c
s=r.dY(a.b,s)<r.dY(q.b,s)}else s=!0
if(s)q=r.e=a
if(a.c>=r.d.Q.r)return q.a
return null},
dY(a,b){var s,r=b.S(0,a),q=Math.abs(r.a)
r=Math.abs(r.b)
s=Math.min(q,r)
return(Math.max(q,r)-s)*10+s*11},
fw(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb3()===1
if(p.a.w.B(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bK()
if(r.Y(0,q))if((p.d.gb4().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb4().a)!==0)return 10
return o},
hO(a){return a.a},
i1(){var s=this.e
if(s==null)return null
return s.a}}
A.eZ.prototype={
fX(a,b){var s,r,q,p,o=this.a
o===$&&A.c()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.M(o.gdk()*50)
else if(o.y.F(0,b).Y(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.o().U(100)<s))return b
if(b===B.r)r=B.a6
else{r=A.b([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gb8())
B.a.j(r,b.gb9())}for(q=0;q<2;++q){B.a.j(r,b.gbF())
B.a.j(r,b.gbV())}B.a.j(r,b.gbF().gb8())
B.a.j(r,b.gbV().gb9())}o=A.O(r)
p=o.i("aq<1>")
r=A.a8(new A.aq(r,o.i("B(1)").a(new A.qf(this,a)),p),p.i("k.E"))
o=r.length
if(o===0)return b
p=$.o()
t.du.a(r)
o=p.U(o)
if(!(o>=0&&o<r.length))return A.a(r,o)
return r[o]}}
A.qf.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bm(r,s.gb4())&&p.f.B(r.a,r.b).x===0))return!1
s=p.w.B(r.a,r.b)
return s==null||s===q.y},
$S:11}
A.co.prototype={
bI(a){return A.lq()}}
A.cH.prototype={
bI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.mx(a)
if(b!==B.r)return A.bt(b)
s=c.a
s===$&&A.c()
r=s.Q.e
q=A.O(r)
p=q.i("aq<1>")
o=A.a8(new A.aq(r,q.i("B(1)").a(new A.nH(c,a)),p),p.i("k.E"))
r=o.length
if(r!==0){q=$.o()
t.kz.a(o)
r=q.U(r)
if(!(r>=0&&r<o.length))return A.a(o,r)
r=o[r]
s.l8(r)
return r.bU(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb3()!==1)return A.lq()
return A.bt(n.gky())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.fY))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).ee(0,1))s.ay=g<60
else s.ay=g<30}f=c.mF(a)
e=l>0?c.mG(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bt(c.fX(a,d==null?B.r:d))},
mx(a){var s,r,q=a.x
q===$&&A.c()
s=this.a
s===$&&A.c()
r=s.y
if(q.f.B(r.gm(),r.gp()).x===0)return B.r
return A.cv(q,s.y,s.gb4(),null,!0,null).ho(new A.nF(a))},
mG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.c()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.p)(r),++p){o=r[p]
if(o.gaC()>0&&o.gaC()<c.a)c.a=o.gaC()}n=new A.nG(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb3()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a6[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.c()
i=s.cq()
if(q.bm(j,s.e.a>0?new A.ai(i.a|$.Y().a):i)){h=q.w
g=j.a
f=j.b
h.l(g,f)
e=h.a
g=f*h.b.b.a+g
if(!(g>=0&&g<e.length))return A.a(e,g)
g=e[g]==null
h=g}else h=!1
if(h){q=q.f
h=j.a
g=j.b
q.l(h,g)
f=q.a
h=g*q.b.b.a+h
if(!(h>=0&&h<f.length))return A.a(f,h)
h=f[h].x===0
q=h}else q=!1
if(!q)continue
if(!n.$1(j))continue
q=j.S(0,r.y)
d=Math.max(Math.abs(q.a),Math.abs(q.b))
if(d>m){m=d
l=k}}if(l!=null)return l
r=a.x
r===$&&A.c()
k=A.cv(r,s.y,s.gb4(),null,!0,c.a).ho(n)
if(k!==B.r){A.cr(s,"ranged position "+k.t(0))
return k}A.cr(s,"no good ranged position")
return null},
mF(a){var s,r,q=this.mE(a)
if(q!=null)return q
s=a.x
s===$&&A.c()
r=this.a
r===$&&A.c()
return new A.qe(r,s,r.y,s.a.y.y).fp()},
mE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.c()
s=a.y
r=A.eb(f.y,s.y)
q=g
p=1
while(r.q(),!0){o=r.a
if(q==null)q=o
n=a.x
n===$&&A.c()
m=n.f
l=o.gm()
k=o.gp()
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
if(j[l].x>0)return g
i=f.cq()
if(!n.bm(o,f.e.a>0?new A.ai(i.a|$.Y().a):i))return g
n=n.w
m=o.gm()
l=o.gp()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.ax))return g;++p
if(p>=f.Q.r)return g
if(o.Y(0,s.y))break}h=q.S(0,f.y)
f=h.b
if(f===-1){f=h.a
if(f===-1)return B.V
else if(f===0)return B.M
else return B.S}else if(f===0)if(h.a===-1)return B.T
else return B.Q
else{f=h.a
if(f===-1)return B.U
else if(f===0)return B.L
else return B.R}},
mR(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.eb(b,s.y);r.q(),!0;){q=r.a
if(q.Y(0,s.y))return!0
p=a.x
p===$&&A.c()
o=p.f
n=q.gm()
m=q.gp()
o.l(n,m)
l=o.a
n=m*o.b.b.a+n
if(!(n>=0&&n<l.length))return A.a(l,n)
n=l[n]
l=$.Y()
if((n.a.e.a&l.a)===0)return!1
p=p.w
o=q.gm()
n=q.gp()
p.l(o,n)
m=p.a
o=n*p.b.b.a+o
if(!(o>=0&&o<m.length))return A.a(m,o)
o=m[o]
if(o!=null){p=this.a
p===$&&A.c()
p=o!==p}else p=!1
if(p)return!1}throw A.n(A.bM("Unreachable."))}}
A.nH.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.c()
return s.ax.n(0,a)===0&&a.bK(this.b,s)},
$S:51}
A.nF.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).x===0},
$S:1}
A.nG.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bh(0,q.a.a))return!1
if(o.gb3()<=2)return!1
s=p.x
s===$&&A.c()
s=s.w.B(a.gm(),a.gp())
if(s!=null){r=q.b.a
r===$&&A.c()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mR(p,a)},
$S:1}
A.cG.prototype={
bI(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.c()
s=n.a
s===$&&A.c()
r=s.y
if(m.f.B(r.gm(),r.gp()).b)return A.lq()
q=A.cv(m,s.y,s.gb4(),null,!0,s.Q.r).ho(new A.nB(a))
if(q!==B.r){A.cr(s,"fleeing "+q.t(0)+" out of sight")
return A.bt(n.fX(a,q))}m=t.e0
p=new A.aq(B.a6,t.ca.a(new A.nC(n,a,s.y.S(0,a.y.y).gb3())),m)
if(!p.gap(0)){r=$.o()
m=A.a8(p,m.i("k.E"))
t.du.a(m)
r=r.U(m.length)
if(!(r>=0&&r<m.length))return A.a(m,r)
q=m[r]
A.cr(s,"fleeing "+q.t(0)+" away from hero")
return A.bt(n.fX(a,q))}o=s.at=new A.cH()
o.a=s
return o.bI(a)}}
A.nB.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).b},
$S:1}
A.nC.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bm(r,s.gb4())&&p.w.B(r.a,r.b)==null&&p.f.B(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb3()>this.c},
$S:11}
A.bd.prototype={
gaC(){return 0},
bK(a,b){return!0},
ia(a,b){return!1}}
A.lk.prototype={
gaC(){return this.b.d}}
A.cq.prototype={
aZ(a,b,c){var s,r,q,p=this,o=p.$ti.c
o.a(b)
p.b=Math.min(p.b,c)
s=p.a
r=c+1
if(s.length<=r)B.a.sI(s,r)
if(!(c>=0&&c<s.length))return A.a(s,c)
q=s[c]
if(q==null){q=A.hu(o)
B.a.h(s,c,q)}q.bj(q.$ti.c.a(b))},
fe(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.a(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.a(p,s)
return p[s].cM()}}
A.eK.prototype={
fD(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.az()
k.d=new A.d(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gm()-c)
o=Math.max(1,q.gp()-c)
j=j.b.b
n=Math.min(j.a-1,q.gm()+c+1)
m=Math.min(j.b-1,q.gp()+c+1)
k.d!==$&&A.az()
k.d=new A.d(p,o)
s=n-p
r=m-o}j=t.C
j=j.a(new A.ab(A.ao(s*r,-2,!1,t.S),new A.a3(new A.d(0,0),new A.d(s,r)),j))
k.c!==$&&A.az()
k.c=j
q=k.d
q===$&&A.c()
l=k.b.S(0,q)
k.e.aZ(0,l,0)
j.aY(l.a,l.b,0)},
gcK(){return new A.V(this.py(),t.e6)},
py(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcK(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.h1()){r=1
break A}m=o[n]
l=s.d
l===$&&A.c()
r=6
return a.b=m.F(0,l),1
case 6:case 4:++n
r=3
break
case 5:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
jQ(a){var s,r=this.iT(t.mN.a(a)),q=r.length
if(q===0)return null
s=$.o()
t.A.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
s=this.d
s===$&&A.c()
return q.F(0,s)},
ci(a){var s,r,q,p,o,n=this.d
n===$&&A.c()
a=a.S(0,n)
n=this.c
n===$&&A.c()
if(!n.b.G(0,a))return null
s=a.a
r=a.b
for(;;){n.l(s,r)
q=n.a
p=r*n.b.b.a+s
if(!(p>=0&&p<q.length))return A.a(q,p)
if(!(J.ad(q[p],-2)&&this.h1()))break}o=n.B(s,r)
if(o===-2||o===-1)return null
return o},
ho(a){var s,r=this.mf(this.iT(t.mN.a(a))),q=r.length
if(q===0)return B.r
s=$.o()
t.du.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.a(r,q)
return r[q]},
iT(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.mN.a(a)
s=A.b([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.h1())return s
o=r[p]
n=i.d
n===$&&A.c()
if(!a.$1(o.F(0,n)))continue
n=i.c
n===$&&A.c()
m=o.a
l=o.b
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.a(k,m)
j=k[m]
if(q==null||j===q)B.a.j(s,o)
else break
q=j}return s},
mf(a){var s,r=A.bc(t.j)
B.a.ae(t.A.a(a),new A.oI(this,A.bc(t.u),r))
s=A.a8(r,r.$ti.c)
return s},
h1(){var s,r=this.e.fe()
if(r==null)return!1
s=this.c
s===$&&A.c()
s=new A.oJ(this,r,s.B(r.gm(),r.gp()))
s.$2(B.M,!1)
s.$2(B.L,!1)
s.$2(B.Q,!1)
s.$2(B.T,!1)
s.$2(B.V,!0)
s.$2(B.S,!0)
s.$2(B.U,!0)
s.$2(B.R,!0)
return!0}}
A.oI.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.u.a(a)
s=f.b
if(s.G(0,a))return
s.j(0,a)
for(s=f.a,r=s.b,q=f.c,p=0;p<8;++p){o=B.a6[p]
n=a.F(0,o)
m=s.c
m===$&&A.c()
l=m.b
if(!l.G(0,n))continue
k=s.d
k===$&&A.c()
if(n.Y(0,r.S(0,k)))q.j(0,o.gcN())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.a(i,h)
h=i[h]
if(typeof h!=="number")return h.cS()
if(h>=0){m.l(k,j)
k=a.gm()
j=a.gp()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.a(i,k)
k=i[k]
if(typeof k!=="number")return A.C2(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:10}
A.oJ.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.c()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.ad(j.B(s,r),-2))return
q=k.d
q===$&&A.c()
p=l.F(0,q)
p=k.a.f.B(p.a,p.b)
o=this.c
n=k.hW(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aY(s,r,q.c.a(-1))
else{m=o+n
j.aY(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.aZ(0,l,m)}},
$S:94}
A.kT.prototype={
hW(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.B(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.oL.prototype={
df(a){var s,r=this.a
if(r.a.y.b.a>0){this.mU()
return}for(s=0;s<8;++s)this.nw(a,s)
r.dj(a,!1,0)},
mU(){var s,r
for(s=this.a,r=A.af(s.f.b);r.q();)s.dj(new A.d(r.b,r.c),!0,0)
s.dj(s.a.y.y,!1,0)},
nw(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.a($.wE,a6)
s=$.wE[a6]
r=s[0]
q=s[1]
a4.b=A.b([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.d(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.dj(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.M(a2*a2*255)}a3=new A.mZ(c/f,(c+1)/e)
s.dj(g,a4.mY(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.a(n,b)
b=n[b]
a=$.Y()
if((b.a.e.a&a.a)===0)i=a4.lN(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
mY(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
lN(a){var s,r,q,p,o,n,m
for(s=this.b,r=s.length,q=a.a,p=0;o=p<r,o;++p)if(s[p].a>q)break
if(p>0){n=p-1
if(!(n<r))return A.a(s,n)
m=s[n].b>q}else m=!1
if(o&&s[p].a<a.b)if(m){q=p-1
if(!(q>=0&&q<r))return A.a(s,q)
q=s[q]
o=q.b
if(!(p<r))return A.a(s,p)
q.b=Math.max(o,s[p].b)
B.a.dg(this.b,p)}else{if(!(p<r))return A.a(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.a(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.O(s).c.a(a)
s.$flags&1&&A.bw(s,"insert",2)
if(p>r)A.a2(A.hL(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.mZ.prototype={
t(a){return"("+A.K(this.a)+"-"+A.K(this.b)+")"}}
A.pP.prototype={
cL(){var s=this
if(s.f)s.n8()
if(s.r)s.n7()
if(s.w)s.d.df(s.a.a.y.y)
if(s.f||s.r||s.w){s.nl()
s.n9()
s.of()}s.w=s.r=s.f=!1},
n8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aN(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.d(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.a(k,d)
d=k[d]
c=B.c.P(d.a.c+d.f,0,192)
b=s.n(0,e)
b=(b==null?A.bC(B.H,null):b).b
a=A.O(b)
b=new J.b4(b,b.length,a.i("b4<1>"))
a=a.c
a0=0
while(b.q()){a1=b.d
a0=Math.max(a0,(a1==null?a.a(a1):a1).a.ay)}c+=A.kH(a0)/2|0
if(d.w.d&&d.x>0)c+=A.kH(7)
d=h+f
if(c>0){c=Math.min(c,192)
n.a(c)
o.l(f,i)
B.a.h(m,d,c)
a3.aZ(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.h(m,d,0)}}a2.jh(o,21)},
n7(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.p8(g,0,g.length,h.a(0))
s=j.e
B.a.aN(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.p)(r),++o){n=r[o]
m=A.kH(n.gdS())
if(m>0){l=n.y
h.a(m)
k=l.gm()
l=l.gp()
i.l(k,l)
B.a.h(g,l*p+k,m)
s.aZ(0,n.y,255-m)}}j.jh(i,42)},
nl(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.a(h,a)
a=h[a]
a0=$.Y()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.a(o,a0)
a.d=J.wj(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.a(k,a0)
a.e=J.wj(k[a0],0,255)}},
n9(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.a(p,j)
j=p[j]
i=$.Y()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.pQ(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.au[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.cg[g])
j.d=k.b
j.e=k.a}},
of(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.p6(o,p)
r=s.a.y.y
s.d7(r.gm(),r.gp(),!0)},
jh(a,b){var s,r,q,p,o,n,m,l
t.C.a(a)
s=B.e.aU(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.fe()
if(n==null)break
m=n.gm()
l=n.gp()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.a(r,m)
m=new A.pR(this,n,r[m],a,b)
m.$2(B.M,b)
m.$2(B.L,b)
m.$2(B.Q,b)
m.$2(B.T,b)
m.$2(B.S,s)
m.$2(B.R,s)
m.$2(B.V,s)
m.$2(B.U,s)}}}
A.pQ.prototype={
$1(a){var s,r,q,p=this,o=p.c+a.c,n=p.d+a.d
if(o<0)return
s=p.b.a.f
r=s.b.b
if(o>=r.a)return
if(n<0)return
if(n>=r.b)return
q=s.B(o,n)
if(q.b)return
s=$.Y()
if((q.a.e.a&s.a)===0)return
s=p.a
s.c=!0
s.b=Math.max(s.b,q.d)
s.a=Math.max(s.a,q.e)},
$S:10}
A.pR.prototype={
$2(a,b){var s,r,q,p,o=this,n=o.b.F(0,a),m=o.a,l=m.a.f
if(!l.b.G(0,n))return
s=n.a
r=n.b
l=l.B(s,r)
q=$.Y()
if((l.a.e.a&q.a)===0)return
p=o.c-b
l=o.d
q=l.B(s,r)
if(typeof q!=="number")return q.cS()
if(q>=p)return
l.aY(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.aZ(0,n,255-p)},
$S:95}
A.f3.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.l8.prototype={
fp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.cq(A.b([],t.nK),t.nA),a0=A.bc(t.u),a1=b.b,a2=b.c
a.aZ(0,new A.f3(B.r,a1,0,0),b.dY(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.fe()
if(o==null)break
n=o.b
if(n.Y(0,a2))return b.hO(o)
if(!a0.j(0,n))continue
m=b.hM(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a6[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.a(s,e)
c=b.fw(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.aZ(0,new A.f3(e,f,l,d),d+b.dY(f,a2))}}return b.i1()},
dY(a,b){return b.S(0,a).gb3()}}
A.ra.prototype={
pS(a,b){if(b.S(0,a).gb3()>16)return 0
return this.jD(new A.tD(this.a,a,b).fp())},
iY(a){var s
if(this.a.a.y.y.S(0,a).gb3()>16)return 16
this.nv()
s=this.b.ci(a)
return s==null?16:s},
jD(a){var s=(16-a)/16
return s*s},
nv(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.Y(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.n0(p,s,new A.cq(A.b([],t.k5),t.r),A.b([],t.l))
r.fD(p,s,null)
q.b=r}}
A.n0.prototype={
hW(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.xV(c)}}
A.tD.prototype={
hM(a){if(a.d>16)return 16
return null},
fw(a,b){return A.xV(b)},
hO(a){return a.d},
i1(){return 16}}
A.rc.prototype={
gaw(){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===$){s=A.b([],t.k5)
r=l.f.b.b
q=r.a
r=r.b
p=t.S
o=q*r
n=A.ao(o,0,!1,p)
m=t.C
p=A.ao(o,0,!1,p)
l.c!==$&&A.eo()
k=l.c=new A.pP(l,new A.ab(n,new A.a3(new A.d(0,0),new A.d(q,r)),m),new A.ab(p,new A.a3(new A.d(0,0),new A.d(q,r)),m),new A.oL(l,B.hZ),new A.cq(s,t.r))}return k},
geH(){var s=this.d
return s===$?this.d=new A.ra(this):s},
eQ(a,b){var s,r,q,p,o,n,m,l
for(s=A.eb(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.Y(0,b))return!0
m=n.gm()
l=n.gp()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.a(q,m)
m=q[m]
l=$.Y()
if((m.a.e.a&l.a)===0)return!1}throw A.n(A.bM("Unreachable."))},
oN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.eb(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
if(j.Y(0,b))return!0
i=j.gm()
h=j.gp()
n.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.a(m,i)
if(m[i]!=null)return!1
i=j.gm()
h=j.gp()
r.l(i,h)
i=h*p+i
if(!(i>=0&&i<o))return A.a(q,i)
i=q[i]
h=$.Y()
if((i.a.e.a&h.a)===0)return!1}throw A.n(A.bM("Unreachable."))},
bm(a,b){var s,r
if(a.gm()<0)return!1
s=this.f
r=s.b.b
if(a.gm()>=r.a)return!1
if(a.gp()<0)return!1
if(a.gp()>=r.b)return!1
return(s.B(a.gm(),a.gp()).a.e.a&b.a)!==0},
dH(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aY(r.gm(),r.gp(),a)},
kT(a){var s=this,r=s.b,q=B.a.c4(r,a),p=s.e
if(p>q)s.e=p-1
B.a.dg(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aY(p.gm(),p.gp(),null)},
e3(a,b,c){var s=A.b([],t.I)
b.b1(this.a.y.Q.ax,c,new A.rp(this,s,A.cv(this,a,$.b2(),!1,null,null),a))
return s},
cZ(a,b){this.r.b6(b,new A.rl()).c7(a)
if(a.a.ay>0)this.gaw().f=!0},
c5(a){var s=this.r.n(0,a)
return s==null?A.bC(B.H,null):s},
e6(a,b){var s=this.r,r=s.n(0,b)
B.a.af(r.b,a)
if(a.a.ay>0)this.gaw().f=!0
if(!r.gL(0).q())s.af(0,b)},
f1(a){this.r.ae(0,new A.rn(t.mH.a(a)))},
hX(){var s=this.gaw()
s.w=s.r=s.f=!0
this.geH().b=null},
d7(a,b,c){var s,r=this.f.B(a,b)
if(r.fm(c))if(!r.b&&r.d+r.e>r.c){s=this.w.B(a,b)
if(s!=null&&s instanceof A.ae)this.a.y.fq(s)}},
p6(a,b){return this.d7(a,b,null)},
dj(a,b,c){var s,r=this.f.B(a.gm(),a.gp())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.B(a.gm(),a.gp())
if(s!=null&&s instanceof A.ae)this.a.y.fq(s)}},
kc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=this.w,r=s.a,q=s.b.b.a,p=r.length,o=this.f,n=o.a,m=o.b,l=m.b,k=l.a,j=n.length,m=m.a,i=m.a,h=i+k,g=Math.min(i,h),h=Math.max(i,h);;){i=$.o()
i=i.a
f=i.a4(h-g)+g
e=m.b
d=e+l.b
c=Math.min(e,d)
d=Math.max(e,d)
i=i.a4(d-c)+c
b=new A.d(f,i)
o.l(f,i)
e=i*k+f
if(!(e>=0&&e<j))return A.a(n,e)
if((n[e].a.e.a&$.b2().a)===0)continue
s.l(f,i)
i=i*q+f
if(!(i>=0&&i<p))return A.a(r,i)
if(r[i]!=null)continue
return b}}}
A.rm.prototype={
$1(a){return new A.d_($.yF(),$.aF())},
$S:96}
A.rp.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jQ(new A.ro(r))
if(q==null){s=s.gcK()
s=A.Ae(s,10,s.$ti.i("k.E"))
p=A.a8(s,A.z(s).i("k.E"))
s=p.length
if(s!==0){o=$.o()
t.jX.a(p)
s=o.U(s)
if(!(s>=0&&s<p.length))return A.a(p,s)
q=p[s]}else q=n.d}q.toString
r.cZ(a,q)},
$S:6}
A.ro.prototype={
$1(a){var s
if($.o().U(5)===0)return!0
s=this.a
return s.w.B(a.a,a.b)==null&&!s.r.ah(a)},
$S:1}
A.rl.prototype={
$0(){return A.bC(B.H,null)},
$S:97}
A.rn.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.D.a(b).b,r=A.O(s),s=new J.b4(s,s.length,r.i("b4<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:98}
A.ai.prototype={
ga1(a){return this.a},
Y(a,b){if(b==null)return!1
if(b instanceof A.ai)return this.a===b.a
return!1},
c9(a,b){return new A.ai(this.a|b.a)},
t(a){var s=A.b([],t.s),r=this.a
if((r&$.bK().a)!==0)s.push("door")
if((r&$.Y().a)!==0)s.push("fly")
if((r&$.iX().a)!==0)s.push("swim")
if((r&$.b2().a)!==0)s.push("walk")
return B.a.aQ(s,"|")}}
A.bF.prototype={
t(a){return this.a}}
A.d0.prototype={}
A.d_.prototype={
oo(a){this.f=B.c.P(this.f+a,0,192)},
fm(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.jh.prototype={
a7(a){var s
switch(a){case B.X:this.ix(-1)
break
case B.Y:this.ix(1)
break
case B.G:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
break
default:return!1}return!0},
ai(a){var s,r,q,p,o,n=this,m=null
a.ck(0,0,a.gaS(),a.gao())
s=a.e.a.b.b
r=s.b-1
n.nA(new A.aY(new A.d(40,r),0,0,a))
s=s.a-40
r=new A.aY(new A.d(s,r),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.a(q,p)
o=q[p]
A.bm(r,m,m,o.gN(),!0,m,m,m)
A.h4(r,o.gX(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbD().gX()
q=n.b
A.h4(r,s,o.gbD().dM(q)==null?B.p:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.j)
r.k(13,32,A.U(o.f_(q.y.Q),!1,3),B.d)
s=t.N
A.bz(a,A.C(["\u2195","Select ability","`","Exit"],s,s),m)},
nA(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bm(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.p)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.t)
A:{k=j.d
if(o===k){k=B.iO
break A}k=m.gbD().dM(q)
if(k==null){k=B.iH
break A}k=B.iI
break A}a.k(2,l,m.gN(),k.a)
a.k(34,l,A.U(m.f_(p),!1,5),k.b);++o}a.an(1,j.d*2+3,A.cO(9658,B.h,i))},
ix(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ab(r+q+a,q)
s.K()}}
A.fX.prototype={
aI(a){var s,r=a.x
r===$&&A.c()
s=this.a.y
s=r.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
bt(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gm(),s.gp(),this.b)},
$iaD:1}
A.jN.prototype={
aI(a){var s=this.c
return++this.d<s*B.e.O(A.x(s,1,10,16,8))},
bt(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ab(r.d,B.e.O(A.x(s,1,10,16,8)))<B.c.A(B.e.O(A.x(s,1,10,16,8)),2)){s=r.a
b.$3(s.gm(),s.gp(),r.b)}},
$iaD:1}
A.h3.prototype={
aI(a){return--this.b>=0},
bt(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.a($.ww,s)
r=A.at("*",$.ww[s],null)
q=A.xl(new A.jD(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iaD:1}
A.h7.prototype={
aI(a){var s=this
if($.o().U(s.c+2)===0)++s.c
return s.c<s.b.length},
bt(a,b){var s,r,q,p,o
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
if(s.f.B(r.gm(),r.gm()).b)return
s=r.gm()
r=r.gp()
q=$.o()
p=this.b
o=this.c
if(!(o<p.length))return A.a(p,o)
o=t.af.a(p[o])
q=q.U(o.length)
if(!(q>=0&&q<o.length))return A.a(o,q)
b.$3(s,r,o[q])},
$iaD:1}
A.cN.prototype={
aI(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bt(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gp(),this.b)},
$iaD:1}
A.kl.prototype={
aI(a){return this.c++<24},
bt(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
q=this.b
if(s.f.B(r,q).b)return
p=[B.t,B.a3,B.J,B.K][B.c.ab(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.at("-",p,o))
b.$3(r+1,q,A.at("-",p,o))
b.$3(r,q-1,A.at("|",p,o))
b.$3(r,q+1,A.at("|",p,o))},
$iaD:1}
A.ko.prototype={
aI(a){return++this.b<24},
bt(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gm(),s.gp(),$.yn())
b.$3(s.gm()-1,s.gp(),$.yp())
b.$3(s.gm()+1,s.gp(),$.yq())}else{r=s.gm()
q=s.gp()
p=$.ym()
b.$3(r-1,q-1,p)
q=s.gm()
r=s.gp()
o=$.yr()
b.$3(q-1,r+1,o)
b.$3(s.gm()+1,s.gp()-1,o)
b.$3(s.gm()+1,s.gp()+1,p)
p=s.gm()
o=s.gp()
r=$.yo()
b.$3(p-1,o,r)
b.$3(s.gm()+1,s.gp(),r)}},
$iaD:1}
A.kw.prototype={
aI(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gm(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bt(a,b){var s=this.a
t.a.a(b).$3(s.gm(),s.gp(),this.b)},
$iaD:1}
A.kM.prototype={
aI(a){return--this.c>=0},
bt(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.c()
r=p.b
q=t.v.a(s.f.B(r.gm(),r.gp()).a.d)
s=p.a
q=A.cO(q.a,q.b.bk(B.h,p.c/s),q.c.bk(B.k,p.c/s))
b.$3(r.gm(),r.gp(),q)},
$iaD:1}
A.l7.prototype={
aI(a){var s,r,q=this,p=q.a+q.c
q.a=p
s=q.b+q.d
q.b=s
p=B.e.M(p)
s=B.e.M(s)
r=a.x
r===$&&A.c()
r=r.f
if(!r.b.G(0,new A.d(p,s)))return!1
p=r.B(p,s)
s=$.Y()
if((p.a.e.a&s.a)===0)return!1
return q.e-->0},
bt(a,b){t.a.a(b).$3(B.e.M(this.a),B.e.M(this.b),A.at("\u2022",this.f,null))},
$iaD:1}
A.lK.prototype={
aI(a){var s,r,q,p=this,o=p.e,n=1-o*0.015,m=p.c*=n
p.d*=n
s=o*0.003
o=p.f
p.c=m+(o.gm()-p.a)*s
m=p.d
r=o.gp()
q=p.b
r=m+(r-q)*s
p.d=r
m=p.a+p.c
p.a=m
r=q+r
p.b=r;++p.e
return new A.d(B.e.M(m),B.e.M(r)).S(0,o).bh(0,1)},
bt(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.M(o.a)
r=B.e.M(o.b)
q=a.x
q===$&&A.c()
if(!q.f.b.G(0,new A.d(s,r)))return
p=o.mO(o.c,o.d)
q=$.o()
t.ev.a($.v5)
q=q.U(4)
if(!(q>=0&&q<4))return A.a($.v5,q)
b.$3(s,r,A.cO(p,$.v5[q],null))},
mO(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.d(B.e.M(a*10),B.e.M(b*10)).ef(0,5))return 8226
s=B.e.bP(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.a(r,s)
return r.charCodeAt(s)},
$iaD:1}
A.lP.prototype={
aI(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
bt(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iaD:1}
A.ha.prototype={
gh8(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gjp(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.a(s,r)
return s[r]},
giw(){var s,r,q,p,o=this,n=o.gh8()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hw(s)
return s.y>=r}else{q=o.gjp()
if(q!=null){s=o.b.Q
p=s.z.eN(q)
if(p===s.c.ie(q))return!1
r=B.e.M(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
lD(a,b){var s,r
for(s=$.us(),r=0;r<26;++r)s[r].gbD()},
a7(a){var s
switch(a){case B.X:this.iy(-1)
return!0
case B.Y:this.iy(1)
return!0
case B.G:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.giw()){s=n.gh8()
if(s!=null){r=n.b
q=r.Q
r.ih(s.hw(q))
s.kS(q,s.b+1)}else{p=n.gjp()
if(p!=null){r=n.b
q=r.Q.z
o=q.eN(p)+1
r.ih(B.e.M(1000*Math.pow(1.8,o-1)))
q.a.h(0,p,o)}}n.b.bs()
n.K()}return!0}return!1},
ai(a){var s,r,q,p,o,n,m=this,l=null
a.ck(0,0,a.gaS(),a.gao())
A.bm(a,l,3,l,!1,46,l,l)
a.k(2,1,"Available experience:",B.j)
s=m.b.Q
a.k(25,1,A.U(s.y,!1,9),B.d)
m.mn(new A.aY(new A.d(46,11),0,3,a))
r=a.e.a.b.b
q=r.b
m.ml(new A.aY(new A.d(46,q-14),0,14,a))
p=m.e
o=p<4?6:9
a.an(1,p*2+o,A.cO(9658,B.h,l))
n=new A.aY(new A.d(r.a-46,q),46,0,a)
r=m.e
switch(r){case 0:m.mo(n)
break
case 1:m.mg(n)
break
case 2:m.mp(n)
break
case 3:m.mj(n)
break
default:q=m.c
r-=4
if(!(r>=0&&r<q.length))return A.a(q,r)
m.mk(n,q[r])}r=t.N
r=A.D(r,r)
r.h(0,"\u2195","Change selection")
if(m.giw())r.h(0,"G","Gain "+(m.gh8()!=null?"stat":"skill"))
r.h(0,"`","Exit")
A.bz(a,r,"You can spend "+A.U(s.y,!1,l)+" experience")},
mn(a){var s,r,q,p,o,n,m,l,k=null
A.bm(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gba()
m=o.b
l=o.a
l.toString
this.jG(a,q,n.c,m,l-m,o.hw(s),l,40,q===this.e);++q}},
ml(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bm(a,e,e,"Skills",!1,e,e,e)
a.k(21,1,"Base Equip Total    Cost",B.f)
for(s=f.c,r=s.length,q=f.b.Q,p=q.c.c,q=q.z,o=q.a,q=q.b,n=0,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=o.n(0,l)
if(k==null)k=0
j=l.gN()
i=q.n(0,l)
if(i==null)i=0
h=o.n(0,l)
if(h==null)h=0
g=q.n(0,l)
h=B.c.P(h+(g==null?0:g),0,15)
g=p.n(0,l.gcG())
if(g==null)g=0
f.jG(a,n,j,k,i,B.e.M(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jG(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.t
a.k(2,r-1,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500\u2500\u2500",q)
A:{if(i){q=B.h
break A}q=d>=h||f>this.b.Q.y
if(q){q=B.j
break A}q=B.C
break A}B:{if(i){s=B.h
break B}s=d>=h||f>this.b.Q.y
if(s){s=B.j
break B}s=B.d
break B}a.k(2,r,c,q)
a.k(20,r,A.U(d,!1,5),s)
C:{if(e>0){q=B.p
break C}if(e<0){q=B.m
break C}q=B.t
break C}a.k(26,r,A.U(e,!0,5),q)
a.k(32,r,A.U(g,!1,5),s)
if(d<h)a.k(38,r,A.U(f,!1,7),s)
else a.k(39,r,"At max",s)},
mo(a){this.eu(a,this.b.Q.ay,A.b(["Max Fury","Toss range scale"],t.s),new A.oy())},
mg(a){this.eu(a,this.b.Q.ch,A.b(["Dodge bonus","Strike bonus"],t.s),new A.ou())},
mp(a){this.eu(a,this.b.Q.CW,A.b(["Max health"],t.s),new A.oz())},
mj(a){this.eu(a,this.b.Q.cx,A.b(["Max focus"],t.s),new A.ov())},
eu(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bm(a,m,m,b.gba().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.j)
a.k(15,2,A.U(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.geb()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.j)
a.k(15,3,A.U(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.j)
a.k(15,o,A.U(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.j)
a.k(15,o,A.U(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.p)(c),++n){a.k(1,o,c[n]+":",B.j);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.aw(d.$1(s)),o=9;q.q();){a.k(24,o,B.i.de(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.aw(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.i.de(s.gH(),7),B.d);++o}}},
mk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bm(a,f,f,b.gN(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eN(b)
p=r.oA(b)
o=r.bS(b)
n=s.c.ie(b)
a.k(1,2,"Base level:",B.j)
a.k(13,2,A.U(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.U(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.a0
a.an(21+m*2,2,new A.a0(9608,s,B.z))}a.k(1,3,"Equipment:",B.j)
a.k(17,3,A.U(p,!0,3),B.d)
a.k(1,4,"Full level:",B.j)
a.k(13,4,A.U(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.U(15,!1,2),B.d)
A.h4(a,b.gX(),f,a.c.a-1,1,6)
l=this.d.n(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.geX().e9(0)
B.a.dl(k,new A.ow())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.p)(k),++i){h=k[i]
a.an(1,j,new A.a0(8226,B.l,B.z))
a.k(3,j,"Level "+h.a+": "+h.b.gN(),B.d);++j}}s=new A.ox(a,b)
s.$3("current",o,25)
g=B.c.P(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
iy(a){var s=this,r=4+s.c.length
s.e=B.c.ab(s.e+a+r,r)
s.K()}}
A.oy.prototype={
$1(a){return A.b([B.c.t(A.i2(a)),A.qt(A.xg(a),null)],t.s)},
$S:19}
A.ou.prototype={
$1(a){return A.b([B.c.t(A.wn(a)),B.c.t(A.wo(a))],t.s)},
$S:19}
A.oz.prototype={
$1(a){return A.b([B.c.t(B.e.M(Math.pow(a,1.458)+9))],t.s)},
$S:19}
A.ov.prototype={
$1(a){return A.b([B.c.t(A.kt(a))],t.s)},
$S:19}
A.ow.prototype={
$2(a,b){var s=t.cB
return B.c.ak(s.a(a).a,s.a(b).a)},
$S:100}
A.ox.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.jT(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.S(this.b.bp(b),null)
break A}s=B.iN
break A}A.h4(r,s.a,s.b,q-1,1,c+2)},
$S:152}
A.jS.prototype={
gbe(){return!0},
a7(a){var s=this
switch(a){case B.G:s.c_(B.r)
break
case B.aB:s.c_(B.V)
break
case B.X:s.c_(B.M)
break
case B.aA:s.c_(B.S)
break
case B.a9:s.c_(B.T)
break
case B.ad:s.c_(B.Q)
break
case B.aE:s.c_(B.U)
break
case B.Y:s.c_(B.L)
break
case B.aD:s.c_(B.R)
break}return!0},
bw(){var s=(this.c+1)%40
this.c=s
if(B.c.ab(s,5)===0)this.K()},
ai(a){var s=new A.o7(this,a)
s.$3(0,B.M,"|")
s.$3(1,B.S,"/")
s.$3(2,B.Q,"-")
s.$3(3,B.R,"\\")
s.$3(4,B.L,"|")
s.$3(5,B.U,"/")
s.$3(6,B.T,"-")
s.$3(7,B.V,"\\")
s=t.N
A.bz(a,A.C(["\u2195\u2194",this.gki(),"`","Cancel"],s,s),this.gkN())},
c_(a){var s=this.l6(a),r=this.a,q=$.l.length
if(s){r.toString
if(0>=q)return A.a($.l,-1)
$.l.pop()
A.T()
r.W(a)}else{r.toString
if(0>=q)return A.a($.l,-1)
$.l.pop()
A.T()
r.W(B.r)}}}
A.o7.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.c()
s=l.a
r=l.b
if(!o.jV(m.f.B(s,r)))return
if(B.c.A(o.c,5)===a)q=A.at(c,B.h,B.w)
else{o=m.w.B(s,r)
if(o!=null)q=t.v.a(o.geM())
else{p=m.c5(l)
if(!p.gap(0))q=p.gaz(0).a.b
else{o=m.f.B(s,r)
if(o.r)t.v.a(o.a.d)
else A.cO(32,null,null)
q=t.v.a(m.f.B(s,r).a.d)}}q=A.cO(q.a,B.h,B.w)}o=n.w
o===$&&A.c()
o.d5(this.b,s,r,q)},
$S:102}
A.fT.prototype={
gkN(){return"Which direction?"},
gki(){return"Choose direction"},
jV(a){return!0},
l6(a){this.e.$1(a)
return!0}}
A.l5.prototype={
gkN(){return"Operate what?"},
gki(){return"Choose direction"},
jV(a){return a.a.f!=null},
l6(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.c()
s=s.f.B(q.a,q.b).a.f
if(s!=null){r.at=new A.aX(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.Z(B.a_,"There is nothing to operate there.",null,null,null)
return!1}}}
A.hd.prototype={
hU(a){var s=this
if(s.Q!=a)s.K()
s.Q=a
s.as=null},
hV(a){var s=this
if(s.Q!=null||!J.ad(s.as,a))s.K()
s.Q=null
s.as=a},
gbO(){var s=this.gd2(),r=s==null?null:s.y
return r==null?this.as:r},
gd2(){var s,r,q=this,p=q.Q
if(p!=null)if(p.z<=0||!q.b.cm(p))q.Q=null
s=q.Q
if(s!=null)return s
s=q.as
if(s!=null){r=q.b.x
r===$&&A.c()
return r.w.B(s.gm(),s.gp())}return null},
gkj(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.M(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.p
if(s.c.a>0)return B.J
r=s.z
q=q.a
q.toString
if(r<B.e.M(Math.pow(q,1.458)+9)/2)return B.a5
return B.C},
js(){var s=this.b.y
if(!(s.at instanceof A.dR))return!1
s.at=null
this.K()
return!0},
a9(a,b,c){if(a===16||a===18)return!1
return this.js()},
a7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.js())return!0
if(a===B.a1&&$.nk===13){s=f.a
s.toString
s.a2(A.xf("Commands",B.i6))
return!0}r=e
switch(a){case B.bh:f.a.a2(new A.hi(f,B.v))
break
case B.bk:s=f.b
q=s.x
q===$&&A.c()
p=s.y
o=p.y
if(q.f.B(o.gm(),o.gp()).a.b===B.aX){q=f.a
q.toString
q.a2(A.zq(f.c,s))}else{n=s.w===0
m=n?B.bB:B.aX
p.at=new A.dR(t.hD.a(new A.oV(f,m)),n)}break
case B.bf:f.a.a2(new A.hc(f.b.w===0))
break
case B.bt:s=f.a
s.toString
s.a2(A.Ai(f))
break
case B.b8:s=f.a
s.toString
q=A.b([],t.eI)
B.a.T(q,$.us())
s.a2(new A.jh(f.b,q))
break
case B.bp:s=f.a
s.toString
q=f.b
s.a2(A.zs(q.a,q.y))
break
case B.aN:s=f.a
s.toString
q=B.aV.gaR()
q=A.a8(q,A.z(q).i("k.E"))
s.a2(new A.hg(q))
break
case B.bg:s=f.a
s.toString
q=f.b
p=q.a
q=q.y.Q
if($.bB.length===0){o=new A.jY(A.v4(B.cj,B.i2,B.i3,!1,t.c),B.cL,p,q)
o.dr()
l=A.zL(p,q)
q=new A.ky(p,q)
q.n_()
B.a.T($.bB,A.b([o,l,q],t.f_))}s.a2(B.a.gaz($.bB))
break
case B.b7:f.a.a2(new A.dm(f,B.v))
break
case B.bs:f.a.a2(new A.e7(f,B.v))
break
case B.br:f.a.a2(new A.e5(f,B.v))
break
case B.ba:f.b.y.at=new A.dR(e,!1)
break
case B.aC:if(!f.b.y.pC())f.K()
break
case B.bi:f.np()
break
case B.bj:s=f.b
q=s.x
q===$&&A.c()
s=s.y
k=q.c5(s.y)
q=k.b.length
if(q>1)f.a.a2(new A.dZ(f,B.H))
else if(q===1)s.at=new A.aX(A.x_(k.gaz(0)))
else{s.Q.at.Z(B.a_,"There is nothing here.",e,e,e)
f.K()}break
case B.b9:f.a.a2(new A.dQ(f,B.v))
break
case B.aB:r=A.bt(B.V)
break
case B.X:r=A.bt(B.M)
break
case B.aA:r=A.bt(B.S)
break
case B.a9:r=A.bt(B.T)
break
case B.a1:r=A.bt(B.r)
break
case B.ad:r=A.bt(B.Q)
break
case B.aE:r=A.bt(B.U)
break
case B.Y:r=A.bt(B.L)
break
case B.aD:r=A.bt(B.R)
break
case B.bm:f.b.y.at=new A.cc(B.V)
break
case B.ap:f.b.y.at=new A.cc(B.M)
break
case B.bl:f.b.y.at=new A.cc(B.S)
break
case B.aP:f.b.y.at=new A.cc(B.T)
break
case B.aO:f.b.y.at=new A.cc(B.Q)
break
case B.bo:f.b.y.at=new A.cc(B.U)
break
case B.aq:f.b.y.at=new A.cc(B.L)
break
case B.bn:f.b.y.at=new A.cc(B.R)
break
case B.c6:f.bM(B.V)
break
case B.bc:f.bM(B.M)
break
case B.c5:f.bM(B.S)
break
case B.be:f.bM(B.T)
break
case B.bb:f.bM(B.Q)
break
case B.c8:f.bM(B.U)
break
case B.bd:f.bM(B.L)
break
case B.c7:f.bM(B.R)
break
case B.aM:A:{j=f.at
s=t.bW.b(j)
if(s){q=f.gd2()!=null
i=j}else{i=e
q=!1}if(q){f.iU(i)
break A}i=s?j:e
if(s){f.j9(i)
break A}if(t.ln.b(j)){f.a.a2(new A.fT(f.gmI(),f))
break A}s=t.lz.b(j)
h=s?j:e
if(s){s=f.b
q=s.y
q.at=new A.aX(h.dG(q.Q,h.al(s)))
break A}f.b.y.Q.at.Z(B.a_,"No ability selected.",e,e,e)
f.K()}break
case B.bq:s=f.b.y.Q
g=s.e.d
if(g==null){s.at.Z(B.a_,"You aren't holding an unequipped item to swap.",e,e,e)
f.K()}else r=A.wA(B.v,g)
break
case B.c9:s=f.a
s.toString
q=t.bx
p=A.b([],q)
o=new A.ic(p,f.b)
B.a.T(p,A.b([new A.a_(["m",77,"Map Dungeon",o.gnj()]),new A.a_(["i",73,"Illuminate Dungeon",o.gmV()]),new A.a_(["d",68,"Drop Item",o.gmr()]),new A.a_(["s",83,"Spawn Monster",o.goj()]),new A.a_(["x",88,"Gain Experience",o.gmL()]),new A.a_(["k",75,"Kill All Monsters",o.gn5()]),new A.a_(["c",67,"Clear All Floor Items",o.gm3()]),new A.a_(["l",76,"Make Stairs",o.gnh()]),new A.a_(["o",79,"Toggle Show All Monsters",o.go3()]),new A.a_(["a",65,"Toggle Show Monster Alertness",o.go1()]),new A.a_(["v",86,"Toggle Show Hero Volume",o.go5()])],q))
s.a2(o)
break}if(r!=null)f.b.y.at=new A.aX(r)
return!0},
cY(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b,a=b.y
if(!a.e_(b))d.x=10
A:{s=a0 instanceof A.hT
r=c
if(s){q=a1 instanceof A.m
if(q)r=a1
p=a1}else{p=c
q=!1}if(q){$.nk=0
d.a7(r)
break A}if(a0 instanceof A.h9){a=a.Q
a.x.ae(0,new A.oT())
q=d.d
q.bi()
o=d.a
o.toString
o.bg(A.oR(q,b.a,a,!1))
break A}n=c
if(a0 instanceof A.hV){m=!0
if(s)q=p
else{q=a1
s=m
p=q}q=A.fA(q)
if(q){if(s)o=p
else{o=a1
s=m
p=o}A.u(o)
n=o}}else q=!1
if(q){d.d.bi()
q=d.a
q.toString
l=A.uP(b.a,n,a.Q,c,c)
a=l.ec()
q.a2(new A.hv(l,new A.al(a.a(),a.$ti.i("al<1>"))))
break A}q=a0 instanceof A.hv
if(q){m=!0
if(s)o=p
else{o=a1
s=m
p=o}k=t.hB
k.a(o)
if(s)o=p
else{o=a1
s=m
p=o}k.a(o)
j=o}else j=c
if(q){b=d.a
b.toString
b.bg(A.wF(d.d,j))
break A}i=a0 instanceof A.hc
h=c
if(i){if(s)q=p
else{q=a1
p=q
s=!0}h=!0===q
q=h
q=q&&b.w>0}else q=!1
if(q){a=d.a
a.toString
a.bg(A.oR(d.d,b.a,d.c,!1))
break A}if(i)q=h
else q=!1
if(q){d.d.bi()
b=d.a
b.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
b.W(c)
break A}if(a0 instanceof A.e6){d.d.bi()
break A}if(a0 instanceof A.b5&&b.w===0){d.d.bi()
break A}q=a0 instanceof A.i9
g=c
if(q){m=!0
if(s)o=p
else{o=a1
s=m
p=o}k=t.bW
o=k.b(o)
if(o){if(s)f=p
else{f=a1
s=m
p=f}k.a(f)
g=f}}else o=!1
if(o){d.j9(g)
break A}o={}
o.a=null
if(q){m=!0
if(s)k=p
else{k=a1
s=m
p=k}f=t.ln
k=f.b(k)
if(k){if(s)e=p
else{e=a1
s=m
p=e}o.a=f.a(e)}}else k=!1
if(k){d.a.a2(new A.fT(new A.oU(o,d),d))
break A}g=c
if(q){if(s)q=p
else{q=a1
p=q
s=!0}o=t.lz
q=o.b(q)
if(q)g=o.a(s?p:a1)}else q=!1
if(q){d.at=g
a.at=new A.aX(g.dG(a.Q,g.al(b)))
break A}if(a0 instanceof A.ha)d.d.bi()}},
bw(){var s,r,q,p,o=this
if(o.mw())return
s=o.x
if(s>0){o.x=s-1
return}if(o.z){s=o.b
s=s.y.e_(s)}else s=!1
if(s){o.z=!1
s=o.w
s===$&&A.c()
if(s.d.length===0){o.a.a2(new A.hi(o,B.v))
return}}s=o.b
r=s.bw()
s=s.y
if(s.z<=0){q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.af(0,s)
else p.pB(o.c)
p.bi()
q.bg(new A.kg(s))
return}q=o.w
q===$&&A.c()
if(q.aI(r))o.K()
q=s.Q.at.b
if(q!==o.y){o.y=q
o.K()}if(s.at instanceof A.dR)o.x=2},
e7(a){var s,r,q,p,o,n,m,l=this
$.Co=a
s=a.a
r=s-100
q=B.c.P(21+B.c.A(r,30)*3,21,33)
if(s>=100){p=Math.min(50,24+B.c.A(r,3))
l.f.a=new A.a3(new A.d(s-p,0),new A.d(p,a.b))}else p=0
r=a.b
o=Math.min(10,3+B.c.A(r-30,3))
n=s-q-p
m=l.r
m===$&&A.c()
m.a=new A.a3(new A.d(0,0),new A.d(q,r))
m=l.f
if(p>0)m.a=new A.a3(new A.d(s-p,0),new A.d(p,r))
else m.a=null
l.e.a=new A.a3(new A.d(q,0),new A.d(n,o))
s=l.w
s===$&&A.c()
s.a=new A.a3(new A.d(q,o),new A.d(n,r-o))},
ai(a){var s,r=this
a.ck(0,0,a.gaS(),a.gao())
s=r.w
s===$&&A.c()
s.ai(a)
r.e.ai(a)
s=r.r
s===$&&A.c()
s.ai(a)
r.f.ai(a)},
mw(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.c()
p=p.y
s=p.y
r=o.f.B(s.gm(),s.gp()).a.b
if(r==q.ax)return!1
q.ax=r
switch(r){case B.bB:o=q.a
o.toString
p=p.Q
s=new A.hV(p)
s.e=Math.min(100,p.as+1)
o.a2(s)
break
case B.cK:q.a.a2(new A.it(q))
break
case B.cG:q.bY(0)
break
case B.cF:q.bY(1)
break
case B.cE:q.bY(2)
break
case B.cD:q.bY(3)
break
case B.cC:q.bY(4)
break
case B.cB:q.bY(5)
break
case B.cJ:q.bY(6)
break
case B.cI:q.bY(7)
break
case B.cH:q.bY(8)
break}return!0},
np(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.b([],t.l)
for(s=i.b,r=s.y,q=r.y.gbC(),p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o){n=q[o]
m=s.x
m===$&&A.c()
m=m.f
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.a(j,l)
if(j[l].a.f!=null)B.a.j(h,n)}q=h.length
if(q===0){r.Q.at.Z(B.a_,"You are not next to anything to operate.",null,null,null)
i.K()}else if(q===1){n=B.a.gaz(h)
s=s.x
s===$&&A.c()
r.at=new A.aX(t.fD.a(s.f.B(n.gm(),n.gp()).a.f.$1(n)))}else i.a.a2(new A.l5(i))},
j9(a){var s=this,r=s.a
r.toString
r.a2(A.xh(s,a.ed(0,s.b),new A.oS(s,a)))},
iU(a){var s=this,r=s.b,q=r.y,p=J.ad(s.gbO(),q.y)
if(p){q.Q.at.Z(B.a_,"You can't target yourself.",null,null,null)
s.K()
return}s.at=a
p=s.gbO()
p.toString
q.at=new A.aX(a.dG(q.Q,a.f9(r,p)))},
bM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.at
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aX(q.dG(p.Q,q.hH(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.e8()
for(l=A.eb(p.y,n);l.q(),!0;){k=l.a
j=r.x
j===$&&A.c()
i=j.w
h=k.gm()
g=k.gp()
i.l(h,g)
f=i.a
h=g*i.b.b.a+h
if(!(h>=0&&h<f.length))return A.a(f,h)
h=f[h]
if(h!=null){if(c.Q!==h)c.K()
c.Q=h
c.as=null
break}j=j.f
i=k.gm()
h=k.gp()
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length))return A.a(g,i)
i=g[i]
g=$.Y()
if((i.a.e.a&g.a)===0){l=m.b
if(l===m)A.a2(A.zG(""))
t.n7.a(l)
if(c.Q!=null||!J.ad(c.as,l))c.K()
c.Q=null
c.as=l
break}if(k.S(0,p.y).cS(0,o.ed(0,r))){if(c.Q!=null||!J.ad(c.as,k))c.K()
c.Q=null
c.as=k
break}m.b=k}e=c.gbO()
l=p.Q
if(e!=null)p.at=new A.aX(o.dG(l,o.f9(r,e)))
else{r=r.x
r===$&&A.c()
p=p.y.F(0,a)
l.at.Z(B.a_,"There is a "+r.f.B(p.a,p.b).a.a+" in the way.",b,b,b)
c.K()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.Z(B.a_,d.gN()+" does not take a direction.",b,b,b)
c.K()
break A}c.b.y.Q.at.Z(B.a_,"No ability selected.",b,b,b)
c.K()}},
bY(a){var s=this.b.y.Q.x,r=A.z(s).i("b6<1>"),q=A.a8(new A.b6(s,r),r.i("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.n(0,q[a])
s.toString
r.a2(new A.iH(s,this))}}
A.oV.prototype={
$1(a){var s=this.a.b.x
s===$&&A.c()
return s.f.B(a.gm(),a.gp()).a.b===this.b},
$S:1}
A.oT.prototype={
$2(a,b){t.c3.a(a).aI(t.D.a(b))},
$S:104}
A.oU.prototype={
$1(a){var s=this.b
s.at=this.a.a
s.bM(a)},
$S:36}
A.oS.prototype={
$1(a){return this.a.iU(this.b)},
$S:10}
A.hv.prototype={
gbe(){return!0},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!1)
return!0}return!1},
a9(a,b,c){var s
if(c||b)return!1
switch(a){case 78:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!1)
break
case 89:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!0)
break}return!0},
bw(){var s,r,q,p=this,o=null,n=new A.rr()
$.vO()
s=$.uX.$0()
n.a=s
n.b=null
for(s=p.c;n.goZ()<16;)if(s.q())p.K()
else{s=p.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
r=v.G
q=r.rvipMap
if(q!=null)A.P(q).shown=!1
if("rvipDraw" in r)A.pG(r,"rvipDraw",o,o,o,o)
s.W(p.b)
return}p.d=(p.d+1)%10},
ai(a){var s,r=a.e.a.b.b
a=new A.aY(new A.d(30,7),B.c.A(r.a-30,2),B.c.A(r.b-7,2),a)
A.cL(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.i.aK(B.i.aJ("/    ",6),s,s+26),B.d)}}
A.lI.prototype={
gbe(){return!0},
lI(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.c()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.p)(j),++p){o=j[p]
if(!(o instanceof A.ae))continue
if(!l.cm(o))continue
if(o.y.S(0,k.y).bh(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.hV(k.y)}else n.jt(k.y)},
jt(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).ef(0,a.S(0,s.y)))s=q}this.b.hU(s)
return!0},
a7(a){var s,r,q=this
switch(a){case B.a1:s=q.b
if(s.gbO()!=null){r=q.a
r.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
r.W(null)
s=s.gbO()
s.toString
q.d.$1(s)}break
case B.G:s=q.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
break
case B.aB:q.cc(B.V)
break
case B.X:q.cc(B.M)
break
case B.aA:q.cc(B.S)
break
case B.a9:q.cc(B.T)
break
case B.ad:q.cc(B.Q)
break
case B.aE:q.cc(B.U)
break
case B.Y:q.cc(B.L)
break
case B.aD:q.cc(B.R)
break}return!0},
a9(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbO()
q.jt(s==null?r.b.y.y:s)}else r.hV(r.gbO())
return!0}return!1},
bw(){var s=(this.r+1)%25
this.r=s
if(B.c.ab(s,5)===0)this.K()},
ai(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="Choose tile",b0=a7.b,b1=b0.b,b2=b1.x
b2===$&&A.c()
s=b1.y
r=b0.w
r===$&&A.c()
q=A.af(r.r)
p=a7.c
o=b2.f
n=o.a
m=o.b.b.a
l=n.length
k=b2.w
j=k.a
i=k.b.b.a
h=j.length
b2=b2.r
g=t.af
while(q.q()){f=q.b
e=q.c
d=new A.d(f,e)
o.l(f,e)
c=e*m+f
if(!(c>=0&&c<l))return A.a(n,c)
c=n[c]
k.l(f,e)
b=e*i+f
if(!(b>=0&&b<h))return A.a(j,b)
b=j[b]
if(c.r){if(c.b)continue
a=c.a.e.a
if((a&$.b2().a)===0&&(a&$.Y().a)===0)continue
if(b!=null)continue
if(b2.ah(d))continue}else if(a7.mZ(d))continue
else if(b!=null&&b1.cm(b))continue
if(d.S(0,s.y).bh(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.a0)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.a(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.an(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.a0(a1,B.h,B.z))}a2=b0.gbO()
if(a2==null)return
b0=o.B(a2.gm(),a2.gp())
if(b0.r){b1=$.Y()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.eb(s.y,a2);b0.q(),!0;){d=b0.a
if(d.Y(0,a2)){a3=!0
break}b1=d.gm()
b2=d.gp()
o.l(b1,b2)
b1=b2*m+b1
if(!(b1>=0&&b1<l))return A.a(n,b1)
b1=n[b1]
if(b1.r){b2=d.gm()
q=d.gp()
k.l(b2,q)
b2=q*i+b2
if(!(b2>=0&&b2<h))return A.a(j,b2)
if(j[b2]!=null)break
b2=$.Y()
if((b1.a.e.a&b2.a)===0)break}b1=d.gm()
b2=d.gp()
q=a4===0?B.h:B.j
p=r.a.a
g=r.r.a
f=r.w
b3.an(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.a0(8226,q,B.z))
a4=B.c.ab(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.j:B.j
r.d5(b3,a2.gm()-1,a2.gp(),A.at("-",a5,a8))
r.d5(b3,a2.gm()+1,a2.gp(),A.at("-",a5,a8))
r.d5(b3,a2.gm(),a2.gp()-1,A.at("|",a5,a8))
r.d5(b3,a2.gm(),a2.gp()+1,A.at("|",a5,a8))
if(!a3)r.d5(b3,a2.gm(),a2.gp(),A.at("X",a5,a8))
b0=t.N
a6=A.D(b0,b0)
if(a7.e.length===0)a6.h(0,"\u2195\u2194",a9)
else if(a7.f){a6.h(0,"\u2195\u2194",a9)
a6.h(0,"Tab","Target monsters")}else{a6.h(0,"\u2195\u2194","Choose monster")
a6.h(0,"Tab","Target floor")}a6.h(0,"`","Cancel")
A.bz(b3,a6,"Choose a target.")},
cc(a){if(this.f)this.m0(a)
else this.m1(a)},
m0(a){var s=this.b,r=s.gbO().F(0,a)
if(r.S(0,s.b.y.y).bh(0,this.c))return
s.hV(r)},
m1(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.b([],h),f=A.b([],h)
h=this.b
s=h.gbO()
s.toString
r=a.gbF()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.p)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.AW(g,new A.rN(s),q)
if(j!=null){h.hU(j)
return}i=A.AV(f,new A.rO(s),q)
if(i!=null)h.hU(i)},
mZ(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.c()
for(l=A.eb(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
if(o.Y(0,a))return!1
if(!r.G(0,o))return!0
n=o.gm()
m=o.gp()
k.l(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.a(s,n)
n=s[n]
if(n.r){m=$.Y()
m=(n.a.e.a&m.a)===0
n=m}else n=!1
if(n)return!0}throw A.n(A.bM("Unreachable."))}}
A.rN.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:37}
A.rO.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaF()},
$S:37}
A.i9.prototype={
gbe(){return!0},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.og(a-65)
return!0}return!1},
og(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.a(r,a)
r=r[a]
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(r)},
ai(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.bz(a,A.C(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aY(new A.d(40,s),a.e.a.b.b.a-40,0,a)
A.bm(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b7(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.j)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.f_(p)
if(r.ch<m){a.k(3,o,n.gN(),B.j)
a.k(q,o,A.U(m,!1,3),B.bI)}else{a.k(0,o," )   ",B.j)
if(!(o<26))return A.a(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gN(),B.C)
a.k(q,o,A.U(m,!1,3),B.d)}}}}
A.hg.prototype={
gbe(){return!0},
a7(a){var s,r=this
switch(a){case B.X:r.eF(-1)
return!0
case B.Y:r.eF(1)
return!0
case B.ap:r.eF(-(r.d-3))
return!0
case B.aq:r.eF(r.d-3)
return!0
case B.G:s=r.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p=this
if(b)return!1
switch(a){case 9:s=c?-1:1
r=p.b
q=p.e.length
p.b=B.c.ab(r+s+q,q)
p.c=0
p.K()
return!0
default:return!1}},
ai(a){var s,r,q,p,o,n,m=this,l=null,k=a.e.a.b.b,j=k.b,i=new A.aY(new A.d(80,j),B.c.A(k.a-80,2),0,a)
m.d=j-4
i.ck(0,0,i.gaS(),i.gao())
A.bm(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.C
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.a(k,q)
p=B.aV.n(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.a(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.wy(i,j,m.c,k,j,78,2)
k=t.N
A.bz(a,A.C(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eF(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.a(q,p)
s=B.aV.n(0,q[p])
r.c=B.c.P(r.c+a,0,s.length-r.d)
r.K()}}
A.f.prototype={}
A.jY.prototype={
gN(){return"Equipment"},
gcj(){var s=t.N,r=A.cT(this.e.gcj(),s,s)
switch(this.f.a){case 0:s=B.cn
break
case 1:s=A.C(["R","Show resistances"],s,s)
break
case 2:s=A.C(["R","Show stats"],s,s)
break
case 3:s=B.cn
break
default:s=null}r.T(0,s)
return r},
e7(a){var s,r=this
if(a.a>110){r.f=B.cN
r.dr()
r.K()}else{s=r.f
if(B.cL===s||B.cN===s){r.f=B.bD
r.dr()
r.K()}}},
a9(a,b,c){var s,r=this
if(r.e.a9(a,b,c)){r.K()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.bD){r.f=B.cM
r.dr()
r.K()
return!0}if(s&&!c&&r.f===B.cM){r.f=B.bD
r.dr()
r.K()
return!0}}return r.fC(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fB(a)},
hr(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.hp(a.b7(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.jI(a,s)
p.jJ(a,s,21)
break
case 2:p.jF(a,s)
p.jE(a,s,21)
break
case 3:s=m-65
p.jI(a,s)
r=s+33
p.jF(a,r)
p.jJ(a,s,21)
p.jE(a,r,21)
break}a.k(s-7,21,"Totals",B.j)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.a(r,o)
q=r[o].b
o=n-15
if(q!=null)A.wL(p.c,t.W.a(q),!0).k6(a.b7(0,o,m,14))
else A.o9(a,0,o,m,14,null,null)},
dr(){var s,r=this,q=A.b([new A.aQ("Item",B.a7,0,null)],t.G)
switch(r.f.a){case 0:s=B.cj
break
case 1:s=r.iv()
break
case 2:s=r.fG()
break
case 3:s=A.a8(r.iv(),t.jF)
B.a.T(s,r.fG())
break
default:s=null}B.a.T(q,s)
r.e.kQ(new A.oo(r),q)},
iv(){var s=null
return A.b([new A.aQ("El",B.a7,2,s),new A.aQ("Damage",B.a7,11,s),new A.aQ("Hit",B.a7,4,s),new A.aQ("Dodge",B.a7,5,s),new A.aQ("Armor",B.a7,6,s)],t.G)},
fG(){return new A.V(this.lT(),t.oP)},
lT(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fG(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fK(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.aF()){s=3
break}s=5
return a.b=new A.aQ(n.b,B.a7,2,A.ei(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fH(a){return new A.V(this.lU(a),t.mY)},
lU(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fH(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.ac(A.b([new A.R(r.gb2().b,A.ei(r.gb2()))],k),!0),1
case 5:n=A.b([new A.R(A.U(l.c,!1,2),null)],k)
B.a.T(n,s.iR(r.gd4()))
B.a.T(n,s.cB(r.gd3()))
B.a.T(n,s.cB(r.gca()))
q=6
return b.b=new A.ac(n,!0),1
case 6:q=7
return b.b=new A.ac(s.cB(r.gca()),!0),1
case 7:q=3
break
case 4:q=8
return b.b=new A.ac(A.b([new A.R("",null)],k),!0),1
case 8:q=9
return b.b=new A.ac(A.b([new A.R("",null)],k),!0),1
case 9:q=10
return b.b=new A.ac(A.b([new A.R("",null)],k),!0),1
case 10:case 3:q=11
return b.b=new A.ac(A.b([new A.R("",null)],k),!0),1
case 11:m=m.Q
q=m!==0?12:14
break
case 12:m=A.b([new A.R(A.U(m,!1,2),null)],k)
B.a.T(m,s.cB(r.gc1()))
q=15
return b.b=new A.ac(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.ac(A.b([new A.R("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fF(a){return new A.V(this.lS(a),t.mY)},
lS(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fF(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fK(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.aF()){r=3
break}k=s.c6(l)
r=k>0?6:7
break
case 6:r=8
return b.b=new A.ac(A.b([new A.R(A.U(k,!1,null),B.p)],n),!0),1
case 8:r=5
break
case 7:r=0===k?9:10
break
case 9:r=11
return b.b=new A.ac(A.b([new A.R("",null)],n),!0),1
case 11:r=5
break
case 10:r=k<0?12:13
break
case 12:r=14
return b.b=new A.ac(A.b([new A.R(A.U(k,!1,null),B.m)],n),!0),1
case 14:case 13:case 5:case 3:++m
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
jI(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.t)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jF(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.t)
a.k(b+10,0,"Resistances",B.l)},
jJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.aF()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb2()
r=i.c}q*=k.gd4()
p+=k.gd3()
o+=k.gca()
n+=j.Q
m+=k.gc1()}a.k(b,c,g.b,A.ei(g))
s=t.H
j=A.b([new A.R(A.U(r,!1,2),null)],s)
B.a.T(j,h.iR(q))
B.a.T(j,h.cB(p))
B.a.T(j,h.cB(o))
A.v6(a,j,B.a7,B.C,11,b+3,c)
s=A.b([new A.R(A.U(n,!1,2),null)],s)
B.a.T(s,h.cB(m))
A.v6(a,s,B.a7,B.C,6,b+26,c)},
jE(a,b,c){var s,r,q,p,o,n,m
for(s=$.fK(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.aF())continue
n=r.ka(o)
if(n>0)m=B.p
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.U(n,!1,2),m);++q}},
iR(a){var s,r=null,q=A.uV(a,1,r)
if(a>1)return A.b([new A.R(B.i.aJ(" ",4-q.length),r),new A.R("x",B.B),new A.R(q,B.p)],t.H)
else{s=t.H
if(a<1)return A.b([new A.R(B.i.aJ(" ",4-q.length),r),new A.R("x",B.a0),new A.R(q,B.m)],s)
else return A.b([new A.R("   ",r)],s)}},
cB(a){var s,r=null,q=A.U(Math.abs(a),!1,r)
if(a>0)return A.b([new A.R(B.i.aJ(" ",3-q.length),r),new A.R("+",B.B),new A.R(q,B.p)],t.H)
else{s=t.H
if(a<0)return A.b([new A.R(B.i.aJ(" ",3-q.length),r),new A.R("+",B.a0),new A.R(q,B.m)],s)
else return A.b([new A.R("   ",r)],s)}}}
A.oo.prototype={
$0(){return new A.V(this.le(),t.d8)},
le(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.b([new A.ac(A.b([new A.R(h.gam().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.i4
break
case 1:e=l.fH(h)
break
case 2:e=l.fF(h)
break
case 3:e=A.a8(l.fH(h),j)
B.a.T(e,l.fF(h))
break
default:e=null}B.a.T(f,e)
r=8
return a.b=new A.ay(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ay(null,null,A.b([new A.ac(A.b([new A.R("("+B.aF[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:106}
A.fp.prototype={
aL(){return"_Columns."+this.b}}
A.cQ.prototype={
gcj(){var s=t.N
return A.D(s,s)},
a9(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c4($.bB,this)
s=c?s+($.bB.length-1):s+1
r=$.bB[B.c.ab(s,$.bB.length)]
this.a.bg(r)
return!0}return!1},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k=this,j=a.e.a.b.b,i=j.a
A.jT(a,0,2,i,B.f)
for(s=$.bB.length,r=2,q=0;q<$.bB.length;$.bB.length===s||(0,A.p)($.bB),++q){p=$.bB[q]
o=p.gN().length
if(p===k){a.k(r,2,"\u2518"+B.i.aJ(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.i.aJ("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gN(),m)
r+=o+2}k.hr(new A.aY(new A.d(i,j.b-3),0,3,a))
l=$.bB[B.c.ab(B.a.c4($.bB,k)+1,$.bB.length)]
j=t.N
j=A.cT(k.gcj(),j,j)
j.h(0,"Tab","View "+l.gN())
j.h(0,"`","Exit")
A.bz(a,j,null)}}
A.ky.prototype={
gdF(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.b([new A.aQ("Name",B.a7,0,n),new A.aQ("Depth",B.am,5,n),new A.aQ("Price",B.am,7,n),new A.aQ("Found",B.am,5,n),new A.aQ("Used",B.am,5,n)],t.G)
r=t.m2
q=t.o5
q=A.b([new A.bD("type",A.b([A.Ca(),A.y7(),A.u7()],r),q),new A.bD("name",A.b([A.u7()],r),q),new A.bD("depth",A.b([A.y7(),A.u7()],r),q),new A.bD("price",A.b([A.C9(),A.u7()],r),q)],t.mQ)
r=t.i0
p=A.v4(s,A.b([new A.ca("all",new A.pt(),r),new A.ca("discovered",new A.pu(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.eo()
o.e=p
m=p}return m},
gN(){return"Item Lore"},
gcj(){return this.gdF().gcj()},
a9(a,b,c){if(this.gdF().a9(a,b,c)){this.K()
return!0}return this.fC(a,b,c)},
a7(a){if(this.gdF().a7(a)){this.K()
return!0}return this.fB(a)},
hr(a){var s,r,q=this.gdF(),p=a.c,o=p.a
p=p.b
q.hp(a.b7(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.a(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.kf(q)>0)A.wL(r,new A.N(q,null,null,null,1),!0).k6(a.b7(0,p-15,o,14))},
n_(){var s=$.bp().gc0(),r=A.a8(s,A.z(s).i("k.E"))
this.gdF().kP(new A.ps(this,r))}}
A.pt.prototype={
$1(a){t.q.a(a)
return!0},
$S:45}
A.pu.prototype={
$1(a){return this.a.c.ax.kf(t.q.a(a))>0},
$S:45}
A.ps.prototype={
$0(){return new A.V(this.lf(),t.jE)},
lf(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.n(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.b([new A.ac(A.b([new A.R(h.a.a6(1).a,null)],n),!0),new A.ac(A.b([new A.R(A.U(h.c,!1,5),null)],n),!0),new A.ac(A.b([new A.R(A.U(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.ac(A.b([new A.R("Yes",null)],n),!0))
else f.push(new A.ac(A.b([new A.R(A.U(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.n(0,h)
f.push(new A.ac(A.b([new A.R(A.U(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.ac(A.b([new A.R("--",null)],n),!1))
r=8
return a.b=new A.ay(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ay(null,h,A.b([new A.ac(A.b([new A.R("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.kR.prototype={
gN(){return"Monster Lore"},
gcj(){return this.e.gcj()},
a9(a,b,c){if(this.e.a9(a,b,c)){this.K()
return!0}return this.fC(a,b,c)},
a7(a){if(this.e.a7(a)){this.K()
return!0}return this.fB(a)},
hr(a){var s=this.e,r=a.c
s.hp(a.b7(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.a(r,s)
this.nR(a,t.P.a(r[s].b))},
nR(a,b){var s,r,q,p,o,n,m=null
a=a.b7(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.i6(b)===0
p=q?A.at("?",B.j,m):b.b
o=q?m:b.a.a
A.o9(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.j)
return}s=b.fr
n=s!==""?3+A.h4(a,s,m,r-2,1,3)+1:3
A.h4(a,this.mc(b),m,r-2,1,n)},
mc(a){var s,r,q=null,p=A.b([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.O(m)
r=new A.au(m,s.i("r(1)").a(new A.qa()),s.i("au<1,r>")).aQ(0," ")}else r="monster"
if(a.ax.f)if(n.ei(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.U(n.i6(a),!1,q)+" and slain "+A.U(n.ei(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.U(a.gbo(),!1,q)+" experience.")
if(n.ei(a)>0)B.a.j(p,o+" has "+A.U(a.f,!1,q)+" health.")
return new A.au(p,t.gL.a(new A.qb()),t.gQ).aQ(0," ")},
nn(){var s=$.cj().gc0(),r=A.a8(s,A.z(s).i("k.E"))
this.e.kP(new A.q8(this,r))}}
A.q9.prototype={
$1(a){return a>=65&&a<=90},
$S:109}
A.qc.prototype={
$1(a){t.P.a(a)
return!0},
$S:39}
A.qd.prototype={
$1(a){return t.P.a(a).ax.f},
$S:39}
A.qa.prototype={
$1(a){return A.a6(a)},
$S:4}
A.qb.prototype={
$1(a){A.a6(a)
return B.i.aK(a,0,1).toUpperCase()+B.i.cV(a,1)},
$S:4}
A.q8.prototype={
$0(){return new A.V(this.lg(),t.kF)},
lg(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.cv,k=s.a.c.ax,j=k.a,k=k.b,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.n(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.b([new A.ac(A.b([new A.R(h.a.a,null)],n),!0),new A.ac(A.b([new A.R(A.U(h.c,!1,null),null)],n),!0)],m)
if(h.ax.f){e=A.b([new A.R("Yes",null)],n)
d=k.n(0,h)
B.a.T(f,A.b([new A.ac(e,!0),new A.ac(A.b([new A.R((d==null?0:d)>0?"Yes":"No",null)],n),!0)],m))}else{e=A.b([new A.R(A.U(g,!1,null),null)],n)
d=k.n(0,h)
B.a.T(f,A.b([new A.ac(e,!0),new A.ac(A.b([new A.R(A.U(d==null?0:d,!1,null),null)],n),!0)],m))}r=8
return a.b=new A.ay(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.ay(null,h,A.b([new A.ac(A.b([new A.R("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:111}
A.m.prototype={
t(a){return"Input("+this.a+")"}}
A.dm.prototype={
gbN(){return B.bu},
gcp(){return!0},
gcl(){return"Drop"},
cs(a){var s
A:{if(B.v===a){s="Drop which item?"
break A}if(B.Z===a){s="Unequip and drop which item?"
break A}s=A.a2(A.bM("Unreachable."))}return s},
e4(a){return"Drop how many?"},
aT(a){return!0},
bJ(a,b,c){var s
this.b.b.y.at=new A.aX(new A.jU(b,c,a))
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}}
A.dQ.prototype={
gcp(){return!1},
gcl(){return"Equip"},
cs(a){var s
A:{if(B.v===a){s="Equip which item?"
break A}if(B.Z===a){s="Unequip which item?"
break A}if(B.H===a){s="Pick up and equip which item?"
break A}s=A.a2(A.bM("Unreachable."))}return s},
aT(a){return a.a.e!=null},
bJ(a,b,c){var s
this.b.b.y.at=new A.aX(A.wA(c,a))
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}}
A.hi.prototype={
gcp(){return!1},
gcl(){return"Choose"},
gi9(){return"Drop which item?"},
cs(a){var s
A:{if(B.Z===a){s="Equipment"
break A}if(B.H===a){s="On the ground"
break A}s="Inventory"
break A}return s},
aT(a){return!0},
bJ(a,b,c){},
io(a){var s,r=this,q=A.b([],t.aP),p=a.a
if(p.w!=null)q.push(new A.a_(["u",85,"Use",new A.p5(r)]))
if(p.e!=null){s=r.c===B.Z?"Unequip":"Equip"
q.push(new A.a_(["e",69,s,new A.p6(r)]))}if(p.y!=null)q.push(new A.a_(["t",84,"Throw",new A.p7(r)]))
if(r.c!==B.H)q.push(new A.a_(["d",68,"Drop",new A.p8(r)]))
if(r.c===B.H)q.push(new A.a_(["g",71,"Pick up",new A.p9(r)]))
q.push(B.jC)
return q},
h6(a,b){var s,r,q=this
t.kf.a(a)
if(a==null)return q.fh(b)
s=a.$0()
r=q.c
q.b.z=!0
q.a.bg(s)
s.kX(b,r)},
fi(a){var s=a.a
return this.h6(s.w!=null||s.e!=null?B.a.gaz(this.io(a)).a[3]:null,a)},
kZ(a){return this.hS(a)},
hS(a){if(this.c!==B.H)this.h6(new A.pa(this),a)},
kY(a){var s,r,q,p,o,n,m,l,k,j,i
this.y=a
s=this.a
s.toString
r=a.gam()
q=A.b([],t.oW)
for(p=this.io(a),o=p.length,n=0;n<p.length;p.length===o||(0,A.p)(p),++n){m=p[n].a
l=m[0]
k=m[1]
j=m[2]
i=m[3]
q.push(new A.ag(l,j,i==null?"inspect":i,k,!1))}s.a2(A.xf(r.a,q))},
cY(a,b){var s
t.d.a(a)
s=this.y
this.y=null
if(s==null||b==null)return
this.h6(t.j5.b(b)?b:null,s)}}
A.p5.prototype={
$0(){return new A.e7(this.a.b,B.v)},
$S:112}
A.p6.prototype={
$0(){return new A.dQ(this.a.b,B.v)},
$S:113}
A.p7.prototype={
$0(){return new A.e5(this.a.b,B.v)},
$S:114}
A.p8.prototype={
$0(){return new A.dm(this.a.b,B.v)},
$S:40}
A.p9.prototype={
$0(){return new A.dZ(this.a.b,B.H)},
$S:116}
A.pa.prototype={
$0(){return new A.dm(this.a.b,B.v)},
$S:40}
A.b5.prototype={
gi9(){return"Inspect which item?"},
gbe(){return!0},
gbN(){var s=A.b([B.Z,B.v],t.hm),r=this.b.b,q=r.x
q===$&&A.c()
if(!q.c5(r.y.y).gap(0))s.push(B.H)
return s},
gib(){return!1},
gcn(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.v===q){s=r.Q.e
break A}if(B.Z===q){s=r.Q.f
break A}if(B.H===q){s=s.x
s===$&&A.c()
s=s.c5(r.y)
break A}s=A.a2(A.cd("Unexpected location."))}return s},
e4(a){return A.a2(A.bf(null))},
fo(a){return t.W.a(a).gbf()},
hZ(a,b,c){var s,r=this,q=null
if(!c.jS(a)){r.b.b.y.Q.at.Z(B.a_,"Not enough room for "+a.b0(b).t(0)+".",q,q,q)
r.K()
return}if(b===a.f){c.c7(a)
r.gcn().af(0,a)}else{c.c7(a.dm(b))
r.gcn().bn()}r.eL(a,b)
s=r.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(q)},
eL(a,b){},
a7(a){var s,r,q=this,p=q.d
if(p!=null){if(B.a1===a){q.bJ(p,q.e,q.c)
return!0}if(B.G===a){q.d=null
q.K()
return!0}if(B.X===a&&q.e<p.f){++q.e
q.K()
return!0}if(B.Y===a&&q.e>1){--q.e
q.K()
return!0}}else if(a===B.G){s=q.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}else{s=$.nk
if(!(s>=65&&s<=90)){if(B.X===a){q.j7(-1)
return!0}if(B.Y===a){q.j7(1)
return!0}if((B.a9===a||B.ad===a)&&q.gbN().length>1){q.is(a===B.a9?-1:1)
return!0}if(B.a1===a){r=q.gfM()
if(r!=null)q.kY(r)
return!0}}}return!1},
a9(a,b,c){var s,r,q=this
if(a===16){q.f=!0
q.K()
return!0}if(b)return!1
s=q.f
if(s&&a===27){q.r=null
q.K()
return!0}if(q.d!=null)return!1
if(a>=65&&a<=90){q.nO(a-65,c)
return!0}if(a===9&&!s&&q.gbN().length>1){q.is(c?-1:1)
return!0}r=q.gfM()
if(96===a||110===a){s=q.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}if(107===a&&r!=null){q.fi(r)
return!0}if(109===a&&r!=null){q.hS(r)
return!0}if(106===a&&r!=null){q.fh(r)
return!0}return!1},
f6(a,b,c){if(a===16){this.f=!1
this.K()
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="Unexpected location.",c="Inspect item",b=e.c
A:{if(B.v===b){s=24
break A}if(B.Z===b){s=9
break A}if(B.H===b){s=e.gcn()
s=Math.min(s.gI(s),26)
break A}s=A.a2(A.cd(d))}r=e.b
q=r.f
p=q.a
if(p!=null){o=e.c
B:{n=0
if(B.v===o){q=11
break B}if(B.Z===o){q=n
break B}m=B.H===o
if(m&&p.b.b>50&&s>5){q=Math.max(0,q.ge1()-s+5)
break B}if(m&&p.b.b>50){q=q.ge1()
break B}if(m){q=n
break B}q=A.a2(A.cd(d))}l=Math.max(46,p.b.a+2)
k=a.e.a.b.b.a-l
n=q}else{q=r.w
q===$&&A.c()
q=q.a
k=q.ge8()-46
n=q.a.b
l=46}q=e.gcn()
p=e.d==null&&e.f
j=e.gib()
i=e.r
h=e.d==null?e.gfM():null
A.vv(a,q,e.glX(),!0,p,h,e.gi3(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(e.d==null)g=e.f?e.gi9():e.cs(e.c)
else g=e.e4(e.c)+" "+e.e
if(e.d==null){s=t.N
if(e.f){s=A.D(s,s)
s.h(0,"A-Z",c)
if(e.r!=null)s.h(0,"`","Hide inspector")
f=s}else{s=A.D(s,s)
s.h(0,"A-Z","Select item")
s.h(0,"Shift",c)
if(e.gbN().length>1)s.h(0,"Tab","Switch view")
f=s}}else{s=t.N
f=A.C(["OK",e.gcl(),"\u2195","Change quantity","`","Cancel"],s,s)}A.bz(a,f,g)},
lY(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aT(a)},
nO(a,b){var s,r=this,q=J.jg(r.gcn().gcw()),p=q.length
if(a>=p)return
if(!(a>=0))return A.a(q,a)
s=q[a]
if(s==null)return
r.w=a
if($.ye)r.fh(s)
else if(r.f||b)r.kZ(s)
else r.fi(s)},
fi(a){return this.kX(a,this.c)},
kY(a){return this.fi(a)},
kZ(a){return this.fh(a)},
hS(a){},
fh(a){this.r=this.r===a?null:a
this.K()},
kX(a,b){var s=this
s.c=b
if(!s.aT(a))return
if(a.f>1&&s.gcp()){s.d=a
s.r=null
s.e=a.f
s.K()}else s.bJ(a,1,s.c)},
gfM(){var s=J.jg(this.gcn().gcw()),r=this.w,q=s.length
if(r<q){if(!(r>=0))return A.a(s,r)
r=s[r]}else r=null
return r},
j7(a){var s,r,q,p,o=this,n=J.jg(o.gcn().gcw())
for(s=n.length,r=o.w,q=1;q<=s;++q){p=B.c.ab(r+a*q,s)
if(n[p]!=null){o.w=p
break}}o.K()},
is(a){var s=this,r=B.a.c4(s.gbN(),s.c),q=s.gbN().length,p=s.gbN(),o=B.c.ab(r+q+a,q)
if(!(o<p.length))return A.a(p,o)
s.c=p[o]
o=B.a.hA(J.jg(s.gcn().gcw()),new A.pq())
s.w=o
if(o<0)s.w=0
s.K()}}
A.pq.prototype={
$1(a){return t.c.a(a)!=null},
$S:118}
A.kx.prototype={
lF(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.ih(a,r)
if(q.Q+r.gc1()!==0||q.z!=null)s.c=new A.ij(r)
if(q.e!=null)s.d=new A.iD(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.fw(A.dX(q,r.a),"Use")}},
hq(a,b,c){var s,r,q,p,o,n=this,m=A.b([],t.n9),l=n.b
if(l!=null)m.push(l)
l=n.c
if(l!=null)m.push(l)
l=n.d
if(l!=null)m.push(l)
l=n.e
if(l!=null)m.push(l)
l=n.f
l===$&&A.c()
m.push(l)
s=4+n.nM(m)
c=c.b7(a,B.c.P(b-1,0,c.gao()-4-s),34,s)
l=c.c
r=n.a
A.o9(c,0,0,l.a,l.b,r.a.b,r.gam().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.p)(m),++p){o=m[p]
c.k(1,q,o.gdW()+" ",B.f)
o.dw(c,q+1)
q=q+o.gao()+2}},
k6(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.o9(a,0,0,h,i,s.a.b,s.gam().a)
r=j.b
q=r!=null?r.dQ(a,3):3
p=j.c
if(p!=null)q=p.dQ(a,q)
o=a.b7(40,0,h-40,i)
n=j.d
m=n!=null?n.dQ(o,3):3
l=Math.max(q,m)
k=j.e
if(k!=null)l=k.dQ(a,l)
i=j.f
i===$&&A.c()
i.dQ(a,l)},
nM(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.p)(a),++q)r+=a[q].gao()+1
return r+p-1}}
A.pr.prototype={
$2(a,b){t.M.a(a)
A.u(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gN()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gN()+" by "+b+".")},
$S:18}
A.d7.prototype={
dQ(a,b){a.k(1,b,this.gdW()+" ",B.f)
this.dw(a,b+1)
return b+this.gao()+2},
eK(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.B)
a.k(b+3-s,c,q,B.p)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.a0)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.j)
a.k(s,c,q,B.j)}}},
hd(a,b,c,d){a.k(1,b,c+":",B.j)
a.k(12,b,B.c.t(d),B.d)},
jH(a,b,c,d){var s,r
if(d>1){s=B.B
r=B.p}else if(d<1){s=B.a0
r=B.m}else{s=B.j
r=B.j}a.k(b,c,"x",s)
a.k(b+1,c,A.uV(d,1,null),r)}}
A.ih.prototype={
gdW(){return"Attack"},
gao(){var s=this.b,r=s.gca()!==0?3:2
return s.a.x.d>0?r+1:r},
dw(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.j)
s=o.b
if(s.gb2()!==$.aF())a.k(9,b,s.gb2().b,A.ei(s.gb2()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jH(a,16,b,s.gd4())
o.eK(a,20,b,s.gd3())
a.k(25,b,"=",B.l)
a.k(27,b,A.uV(q*s.gd4()+s.gd3(),2,6),B.N);++b
if(s.gca()!==0){a.k(1,b,"Strike:",B.j)
o.eK(a,12,b,s.gca());++b}r=r.d
if(r>0){o.hd(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.j)
r=o.a.ay
q=r.a
q.toString
p=q>=s.gf2()?B.d:B.m
a.k(12,b,B.c.t(s.gf2()),p)
o.jH(a,16,b,r.kh(s.gf2()))}}
A.ij.prototype={
gdW(){return"Defense"},
gao(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc1()!==0?q+1:q},
dw(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.hd(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc1()!==0){a.k(1,b,"Armor:",B.j)
a.k(12,b,B.c.t(q),B.d)
s.eK(a,16,b,r.gc1())
a.k(25,b,"=",B.l)
a.k(27,b,A.U(q+r.gc1(),!1,6),B.p);++b}s.hd(a,b,"Weight",r.geb())}}
A.iD.prototype={
gdW(){return"Resistances"},
gao(){return 2},
dw(a,b){var s,r,q,p,o,n,m,l
for(s=$.fK(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.aF())continue
m=r.c6(n)
this.eK(a,p-1,b,m)
l=m===0?B.j:A.ei(n)
a.k(p,q,n.b,l)
p+=3}}}
A.fw.prototype={
gao(){return this.a.length},
dw(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdW(){return this.b}}
A.dZ.prototype={
gbN(){return B.i5},
gcp(){return!0},
gcl(){return"Pick up"},
cs(a){return"Pick up which item?"},
e4(a){return"Pick up how many?"},
aT(a){return!0},
bJ(a,b,c){var s
this.b.b.y.at=new A.aX(A.x_(a))
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}}
A.mS.prototype={
gbN(){return B.bu},
gcp(){return!0},
gcl(){return"Put"},
cs(a){return"Put which item?"},
e4(a){return"Put how many?"},
aT(a){return!0}}
A.lf.prototype={
bJ(a,b,c){this.hZ(a,b,this.b.b.y.Q.w)},
eL(a,b){this.b.b.y.Q.at.Z(B.x,"You place "+a.b0(b).t(0)+" into the crucible.",null,null,null)
this.CW.$0()}}
A.lg.prototype={
bJ(a,b,c){this.hZ(a,b,this.b.b.y.Q.r)},
eL(a,b){this.b.b.y.Q.at.Z(B.x,"You put "+a.b0(b).t(0)+" safely into your home.",null,null,null)}}
A.hW.prototype={
gbN(){return B.bu},
gcp(){return!0},
gib(){return!0},
gcl(){return"Sell"},
cs(a){return"Sell which item?"},
e4(a){return"Sell how many?"},
aT(a){return a.gbf()!==0},
fo(a){return B.e.bP(t.W.a(a).gbf()*0.75)},
bJ(a,b,c){this.hZ(a,b,this.y)},
eL(a,b){var s=a.b0(b).gam(),r=B.e.bP(a.gbf()*0.75)*b,q=this.b.b.y.Q
q.at.Z(B.x,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.e5.prototype={
gcp(){return!1},
gcl(){return"Toss"},
cs(a){var s
A:{if(B.v===a){s="Throw which item?"
break A}if(B.Z===a){s="Unequip and throw which item?"
break A}if(B.H===a){s="Pick up and throw which item?"
break A}s=A.a2(A.bM("Unreachable."))}return s},
aT(a){return a.a.y!=null},
bJ(a,b,c){var s,r=A.bN(a.a.y.b),q=this.b
q.b.y.kx(r,B.hD)
s=this.a
s.toString
s.bg(A.xh(q,r.gaC(),new A.rU(this,c,a,r)))}}
A.rU.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aX(new A.lN(s.d,a,s.b,s.c))},
$S:10}
A.e6.prototype={
gfN(){return null},
gbe(){return!0},
gdu(){return!1},
gh9(){return!1},
o8(a){if(this.c)return!0
return this.aT(a)},
aT(a){return!0},
a7(a){var s
this.f=null
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
o.f=null
if(a===16){o.c=!0
o.K()
return!0}if(b)return!1
if(o.c)s=a===27||a===192
else s=!1
if(s){o.e=null
o.K()
return!0}if(a>=65&&a<=90){r=a-65
if(r>=o.gbb().gI(0))return!1
q=o.gbb().aW(0,r)
if(q==null)return!1
if(o.c){o.e=q
o.K()}else{if(!o.gdu()||!o.aT(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fq(o,q,o.iZ(q),o.b)
p.e=q
s.a2(p)
return!0}if(o.jx(q,1)){s=o.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}}}return!1},
f6(a,b,c){if(a===16){this.c=!1
this.K()
return!0}return!1},
cY(a,b){var s,r=this
t.d.a(a)
r.d=!0
r.e=null
if(a instanceof A.fq&&b!=null)if(r.jx(a.x,A.u(b))){s=r.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}},
ai(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.D(s,s)
s.h(0,"A-Z","Inspect item")
if(j.e!=null)s.h(0,"`","Hide inspector")
A.bz(a,s,"Inspect which item?")}else A.bz(a,j.gcX(),j.gcW())
s=j.gbb()
r=j.b
q=r.w
q===$&&A.c()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbb().b.length
n=j.c
m=j.gh9()
l=j.d?j.e:null
k=j.c||j.gdu()
A.vv(a,s,j.go7(),k,n,null,j.gey(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
iZ(a){return a.f},
fW(a){return a.f},
bZ(a){t.W.a(a)
return null},
jx(a,b){var s=this,r=s.gfN()
if(!r.jS(a)){s.f="Not enough room for "+a.b0(b).t(0)+"."
s.K()
return!1}if(b===a.f){r.c7(a)
B.a.af(s.gbb().b,a)}else{r.c7(a.dm(b))
s.gbb().bn()}s.cA(a,b)
return!0},
cA(a,b){}}
A.d4.prototype={}
A.it.prototype={
gbb(){return this.b.b.y.Q.r},
gcW(){return"Welcome home!"},
gcX(){var s=t.N
return A.C(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
a9(a,b,c){var s,r,q,p=this
if(p.em(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.my(p.b)
s.e=p.e
p.d=!1
p.a.a2(s)
return!0
case 80:p.d=!1
p.a.a2(new A.lg(p.b,B.v))
return!0
case 9:r=p.a
r.toString
q=new A.ii(p.b)
q.eC()
r.bg(q)
return!0}return!1}}
A.ip.prototype={
gcW(){return"Get which item?"},
geJ(){return"Get"},
gcX(){var s=t.N
return A.C(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfN(){return this.b.b.y.Q.e},
gdu(){return!0},
aT(a){return!0},
cA(a,b){var s=this.b.b.y
s.Q.ax.d9(a)
s.bs()}}
A.my.prototype={
gbb(){return this.b.b.y.Q.r},
cA(a,b){this.b.b.y.Q.at.Z(B.x,"You take "+a.b0(b).t(0)+" from your home.",null,null,null)
this.il(a,b)}}
A.mx.prototype={
gbb(){return this.b.b.y.Q.w},
cA(a,b){this.b.b.y.Q.at.Z(B.x,"You remove "+a.b0(b).t(0)+" from the crucible.",null,null,null)
this.il(a,b)
this.cy.$0()}}
A.ii.prototype={
gbb(){return this.b.b.y.Q.w},
gcW(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gcX(){var s=t.N
s=A.D(s,s)
s.h(0,"G","Get item")
s.h(0,"P","Put item")
s.h(0,"Shift","Inspect item")
if(this.w!=null)s.h(0,"Space","Forge item")
s.h(0,"Tab","Back to home")
s.h(0,"`","Leave")
return s},
ai(a){var s,r,q,p,o
this.ly(a)
s=this.b
r=s.w
r===$&&A.c()
r=r.a
q=Math.min(46,r.b.a)
r=r.a
s=s.b.y.Q.w
p=q-8
a=new A.aY(new A.d(p,3),r.a+4,r.b+s.b.length+1,a)
A.cL(a,0,0,p,3,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(0,0,"\u252c",B.l)
a.k(p-1,0,"\u252c",B.l)
o=this.w
if(o!=null)a.k(1,1,"Forge a "+o.c,B.C)
else if(!s.gL(0).q())a.k(1,1,"Add ingredients to crucible",B.j)
else a.k(1,1,"Not a complete recipe",B.j)},
a9(a,b,c){var s,r,q,p=this
if(p.em(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.mx(p.gjj(),p.b)
s.e=p.e
p.d=!1
p.a.a2(s)
return!0}if(80===a){p.d=!1
p.a.a2(new A.lf(p.gjj(),p.b,B.v))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aN(q.b)
q.d=null
p.w.b.b1(r.ax,1,q.gl4())
p.eC()
p.K()
return!0}if(9===a){p.a.bg(new A.it(p.b))
return!0}return!1},
cA(a,b){this.eC()},
eC(){var s,r,q,p,o,n
this.w=null
for(s=$.hN.length,r=this.b.b.y.Q.w,q=t.E,p=0;p<$.hN.length;$.hN.length===s||(0,A.p)($.hN),++p){o=$.hN[p]
n=o.nm(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.iH.prototype={
gbb(){return this.w},
gcW(){return"What can I interest you in?"},
gh9(){return!0},
gcX(){var s=t.N
return A.C(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
a9(a,b,c){var s,r=this
if(r.em(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.iG(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a2(s)
break
case 83:r.d=!1
r.a.a2(new A.hW(r.w,r.b,B.v))
return!0}return!1},
bZ(a){return t.W.a(a).gbf()}}
A.iG.prototype={
gcW(){return"Buy which item?"},
geJ(){return"Buy"},
gcX(){var s=t.N
return A.C(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbb(){return this.at},
gfN(){return this.b.b.y.Q.e},
gdu(){return!0},
gh9(){return!0},
aT(a){return a.gbf()<=this.b.b.y.Q.Q},
iZ(a){return 1},
fW(a){return Math.min(a.f,B.c.cb(this.b.b.y.Q.Q,a.gbf()))},
bZ(a){return t.W.a(a).gbf()},
cA(a,b){var s=a.gbf()*b,r=this.b.b.y,q=r.Q
q.at.Z(B.x,"You buy "+a.b0(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.d9(a)
r.bs()}}
A.fq.prototype={
gbb(){return this.w.gbb()},
gcW(){var s,r=this,q=r.x,p=q.b0(r.y).gam().a,o=r.w,n=o.bZ(q)
if(n!=null){s=A.U(n*r.y,!1,null)
return o.geJ()+" "+p+" for "+s+" gold?"}else return o.geJ()+" "+p+"?"},
gcX(){var s=t.N
return A.C(["OK",this.w.geJ(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdu(){return!0},
aT(a){return a===this.x},
a9(a,b,c){if(a===16)return!1
return this.em(a,b,c)},
f6(a,b,c){return!1},
a7(a){var s,r,q=this
A:{if(B.a1===a){s=q.a
s.toString
r=q.y
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(r)
break A}if(B.G===a){s=q.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
break A}if(B.X===a&&q.y<q.w.fW(q.x)){++q.y
break A}if(B.Y===a&&q.y>1){--q.y
break A}if(B.ap===a){q.y=q.w.fW(q.x)
break A}if(B.aq===a){q.y=1
break A}return!1}q.K()
return!0},
bZ(a){return this.w.bZ(t.W.a(a))}}
A.e7.prototype={
gcp(){return!1},
gcl(){return"Use"},
cs(a){var s
A:{if(B.v===a||B.Z===a){s="Use which item?"
break A}if(B.H===a){s="Pick up and use which item?"
break A}s=A.a2(A.bM("Unreachable."))}return s},
aT(a){return a.a.w!=null},
bJ(a,b,c){var s
this.b.b.y.at=new A.aX(new A.lT(c,a))
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}}
A.kg.prototype={
a7(a){var s
switch(a){case B.G:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
ai(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.wx(a,60,40,new A.oQ(this),A.C(["`",s],r,r),"You have died")}}
A.oQ.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.a(s,r)
q=A.dX(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.a(q,p)
a.pT(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:43}
A.kL.prototype={
a7(a){var s,r,q,p,o,n=this
if(B.X===a&&n.d>0){--n.d
n.h3()
n.K()
return!0}if(B.Y===a&&n.d<n.c.b.length-1){++n.d
n.h3()
n.K()
return!0}if(B.a1===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.a(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a2(A.oR(r,n.b,o,!1))}return!0}if(B.aN===a){s=n.a
s.toString
r=B.aV.gaR()
r=A.a8(r,A.z(r).i("k.E"))
s.a2(new A.hg(r))
return!0}return!1},
h3(){var s=this,r=s.y=B.c.P(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
if(q<r)s.y=q
else if(q>=r+8)s.y=q-8+1},
a9(a,b,c){var s,r,q,p=this
if(c||b)return!1
switch(a){case 68:s=p.d
r=p.c.b
q=r.length
if(s<q){if(!(s>=0))return A.a(r,s)
s=r[s]
p.x=!1
p.a.a2(new A.h1("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a2(A.zP(p.b,p.c))
return!0}return!1},
cY(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.h1&&J.ad(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.a(s,r)
B.a.af(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.h3()
q.K()}},
e7(a){this.f=this.e=null},
bw(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.K()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.ad(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.c()
s.hX()
s=q.e.x
s===$&&A.c()
s.gaw().cL()}q.K()}},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.e
if(d!=null)f.jl(a,d)
else{s=f.b
r=s.oR("Temporary")
q=a.e.a.b.b
p=f.e=A.uP(s,$.o().aB(1,100),r,q.b,q.a)
q=p.ec()
f.f=new A.al(q.a(),q.$ti.i("al<1>"))
f.r=!1
f.jl(a,p)}s=a.e.a.b.b
o=new A.aY(new A.d(68,34),B.c.A(s.a-68,2),B.c.A(s.b-34,2),a)
o.ck(0,0,o.gaS(),o.gao())
A.cL(o,0,0,68,34,e,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(n=0;n<14;++n)for(s=n+2,m=0;m<B.cf[n].length;++m){q=B.hU[n]
if(!(m<q.length))return A.a(q,m)
l=B.ie.n(0,q[m])
q=B.cf[n]
if(!(m<q.length))return A.a(q,m)
o.k(m+3,s,q[m],l)}o.k(3,18,"Which hero shall you play?",B.d)
A.jT(o,3,20,62,e)
A.jT(o,3,29,62,e)
s=f.c.b
if(s.length===0)o.k(3,21,"(No heroes. Please create a new one.)",B.j)
else{if(f.y>0)o.k(34,20,"\u25b2",B.h)
if(f.y<s.length-8)o.k(34,29,"\u25bc",B.h)
for(k=0;k<8;++k){j=k+f.y
q=s.length
if(j>=q)break
if(!(j>=0))return A.a(s,j)
i=s[j]
if(j===f.d)o.an(2,21+k,new A.a0(9658,B.h,B.z))
h=j===f.d?B.h:B.C
q=21+k
o.k(3,q,i.a,h)
g=j===f.d?B.h:B.d
o.k(34,q,i.b.a,g)
o.k(42,q,i.c.a,g)
if(i.d)o.k(55,q,"Permadeath",g)}}if(f.x){s=t.N
A.bz(a,A.C(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),e)}},
jl(a,b){var s,r,q,p=b.x
p===$&&A.c()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.nE(a,b,new A.d(q,r))},
nE(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.c()
s=c.a
r=c.b
q=d.f.B(s,r)
p=q.a.d
A:{if(p instanceof A.a0){o=p
break A}if(t.af.b(p)){o=p[B.c.ab(A.y5(s,r),p.length)]
break A}o=B.b6
break A}n=o.a
m=o.b
l=o.c
k=d.c5(c)
j=k.gap(0)
if(!j){i=k.gaz(0).a.b
n=i.a
m=i.b}d=d.w.B(s,r)
h=d==null?null:d.geM()
if(h instanceof A.a0){n=h.a
m=h.b
j=!1}d=new A.q3()
g=d.$2(m,B.bJ)
f=d.$2(l,B.cZ)
q=new A.q2(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.e.i7(s,r,A.cO(n,m,e))}}
A.q3.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:20}
A.q2.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bk(b,A.x(r,0,127,1,0))
else if(r>128)a=a.aZ(0,B.u,A.x(r,128,255,0,0.2))
s=s.e
return s>0?a.aZ(0,B.bH,A.x(s,0,255,0.05,0.1)):a},
$S:20}
A.l3.prototype={
ai(a){var s,r,q=this,p=t.N
p=A.D(p,p)
p.h(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.a(s,r)
p.T(0,s[r].gcH())
if(q.e.f)p.h(0,"Enter","Create hero")
p.h(0,"`","Cancel")
A.wx(a,80,40,new A.qm(q),p,"Create New Hero")},
nD(a){var s,r,q,p,o=$.fL(),n=this.f.e
if(!(n>=0&&n<5))return A.a(o,n)
s=o[n]
this.jn(a,s.d)
n=A.b([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aU[r]
p=o.n(0,q)
p.toString
n.push(new A.S(q.c,B.e.M(p*100)))}this.jm(a,200,n)},
nB(a){var s,r,q=$.ep(),p=this.r.e
if(!(p>=0&&p<3))return A.a(q,p)
s=q[p]
this.jn(a,s.d)
p=A.b([],t.dF)
for(q=s.c,q=new A.br(q,A.z(q).i("br<1,2>")).gL(0);q.q();){r=q.d
p.push(new A.S(r.a.a,r.b))}this.jm(a,10,p)},
jn(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.p)(b),++q){p=b[q]
for(o=A.dX(53,p.gN()+": "+p.gX()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.p)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gN()+":",B.j)
r=m+1}},
jm(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.p)(c),++q){p=c[q]
a.k(0,r,p.a,B.j)
A.wz(a,13,r,10,p.b,b,null,null);++r}},
nC(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.iG
break A}if(1===l){s=$.fL()
r=n.f.e
if(!(r>=0&&r<5))return A.a(s,r)
r=s[r]
r=new A.S(r.a,r.b)
s=r
break A}if(2===l){s=$.ep()
r=n.r.e
if(!(r>=0&&r<3))return A.a(s,r)
r=s[r]
r=new A.S(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.a(B.bv,s)
s=new A.S(B.bv[s],B.i9[s])
break A}s=A.a2(A.cd("Unexpected focus."))}A.bm(a,m,m,s.a,!0,m,m,m)
for(s=A.dX(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.p)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a7(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.a(r,q)
if(r[q].a7(a)){s.K()
return!0}switch(a){case B.G:r=s.a
r.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
r.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.a(m,l)
if(m[l].a9(a,b,c)){n.K()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.fL()
r=n.f.e
if(!(r>=0&&r<5))return A.a(s,r)
r=s[r]
s=$.ep()
q=n.r.e
if(!(q>=0&&q<3))return A.a(s,q)
p=m.jY(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bi()
q=n.a
q.toString
q.bg(A.oR(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ab(n.d+o,m.length)
n.K()
return!0}return!1}}
A.qk.prototype={
$1(a){return t.ho.a(a).a},
$S:122}
A.ql.prototype={
$1(a){return t.lJ.a(a).a},
$S:123}
A.qm.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hM[r]
p=B.i.aJ("\u2500",s)
a.k(0,q,p,B.t)}p=this.a
p.nD(a.b7(0,2,s,10))
p.nB(a.b7(0,12,s,10))
p.nC(a.b7(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].kW(a,o===p.d)},
$S:43}
A.eD.prototype={
a7(a){return!1},
a9(a,b,c){return!1}}
A.kU.prototype={
gcH(){return B.ij},
a9(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.i.aK(s,0,r-1)
q.d=s
if(s.length===0){s=$.o()
t.m.a(B.ai)
r=B.ai.length
s=s.U(r)
if(!(s>=0&&s<r))return A.a(B.ai,s)
q.e=B.ai[s]}}q.h4()
return!0
case 32:q.fE(" ")
return!0
default:if(a>=65&&a<=90){q.fE(A.b8(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fE(A.b8(a))
return!0}}return!1},
fE(a){var s=this.d
if(s.length<20)this.d=s+a
this.h4()},
h4(){this.f=B.a.p5(this.c.b,new A.qj(this))},
kW(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cL(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.C)
if(b)a.cv(q+s.d.length,o," ",B.z,r)}else{q+=25
p=s.e
if(b)a.cv(q,o,p,B.z,r)
else a.k(q,o,p,B.C)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.qj.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:23}
A.fh.prototype={
gcH(){var s=t.N
return A.C(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a7(a){var s,r,q=this
switch(a){case B.a9:s=q.e
r=q.d.length
q.e=B.c.ab(s+r-1,r)
return!0
case B.ad:q.e=B.c.ab(q.e+1,q.d.length)
return!0}return!1},
kW(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
a.k(m,k,n.c+":",B.f)
s=m+25
if(b)for(m=n.d,r=0;r<m.length;++r){q=m[r]
if(r===n.e){p=s-1
o=q.length
A.cL(a,p,l,o+2,3,B.h,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(p,k,"\u25c4",B.h)
a.k(s+o,k,"\u25ba",B.h)}a.k(s,k,q,r===n.e?B.h:B.C)
s+=q.length+2}else{m=n.d
l=n.e
if(!(l>=0&&l<m.length))return A.a(m,l)
a.k(s,k,m[l],B.C)}}}
A.pv.prototype={
ge1(){return 9+this.b.y.Q.e.c+4},
ff(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fP(a,0,9,n.f)
n=n.e
q.fP(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.c()
s=p.c5(o.y)
q.fP(a,q.ge1(),5,s)}r=q.a.b.b>50?q.ge1()+7:q.ge1()
p=a.c
A.cL(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fP(a,b,c,d){A.vv(a,d,A.Cb(),!1,!1,null,A.Cc(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.pT.prototype={
ff(a){var s,r,q,p,o,n,m,l,k,j,i
a.ck(0,0,a.gaS(),a.gao())
s=a.c
r=s.b
s=s.a
A.jT(a,0,r-1,s,null)
q=r-2
r=this.b.a
p=r.length-1
for(;;){if(!(p>=0&&q>=0))break
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
n=r[p]
m=n.b
l=n.c
if(l>1)m=m+" (x"+l+")"
switch(n.a.a){case 0:l=B.d
break
case 1:l=B.m
break
case 2:l=B.P
break
case 3:l=B.h
break
case 4:l=B.p
break
case 5:l=B.a3
break
default:l=null}k=p!==o-1?l.bk(B.z,0.5):l
j=A.dX(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.a(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.qx.prototype={
ai(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.ff(new A.aY(new A.d(r.a,r.b),s.a,s.b,a))}}}
A.r2.prototype={
ff(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bm(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.mm(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.es(a,7,"Health",s,B.m,B.e.M(Math.pow(r,1.458)+9),B.a0)
r=f.ch
s=e.cx.a
s.toString
i.es(a,8,"Focus",r,B.D,A.kt(s),B.F)
s=f.CW
r=e.ay.a
r.toString
i.es(a,9,"Fury",s,B.N,A.i2(r),B.as)
a.k(1,10,"Food",B.j)
r=a.c
s=r.a
A.wz(a,10,10,s-11,f.ay,400,B.k,B.w)
i.mh(f,a,12)
i.mi(f,a,13)
i.mq(f,a,14)
a.k(1,16,"Exp",B.j)
q=A.U(e.y,!1,h)
a.k(s-q.length-1,16,q,B.K)
a.k(1,17,"Gold",B.j)
p=A.U(e.Q,!1,h)
a.k(s-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gkj())
a.k(3,19,d,B.C)
i.iM(a,20,f)
d=g.w
d===$&&A.c()
o=d.d
B.a.dl(o,new A.r6(f))
e=s-4
r=r.b-2
n=0
for(;;){if(!(n<10&&n<o.length))break
m=21+n*2
if(m>=r)break
if(!(n<o.length))return A.a(o,n)
l=o[n]
k=l.Q.b
if(g.gd2()===l)k=new A.a0(k.a,k.c,k.b)
j=l.Q.a.a
if(j.length>e)j=B.i.aK(j,0,e)
a.an(1,m,k)
a.k(3,m,j,g.gd2()===l?B.h:B.C)
i.iM(a,m+1,l);++n}},
mm(a,b,c){var s,r={}
r.a=1
r=new A.r4(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
mq(a,b,c){var s,r=a.eS(null),q=A.b(r.slice(0),A.O(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.j)
r=A.O(q)
s=new A.au(q,r.i("r(1)").a(new A.r5()),r.i("au<1,r>")).aQ(0,"+")
b.k(b.c.a-s.length-1,c,s,B.N)},
mi(a,b,c){var s,r,q,p
for(s=a.ghl(),r=s.$ti,s=new A.al(s.a(),r.i("al<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iP(b,c,"Dodge",""+q+"%",B.a3)},
mh(a,b,c){var s,r,q,p,o,n,m
for(s=$.fK(),r=10,q=0;q<12;++q){p=s[q]
o=a.hI(p)
n=a.fg(p)
if((n.a>0?o+n.b:o)>0){m=$.vK().n(0,p)
m.toString
b.k(r,c,m,A.ei(p));++r}}this.iP(b,c,"Armor"," "+B.e.M(100-A.y3(a.Q.gdI())*100)+"%",B.p)},
es(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.j)
s=a.c.a-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.et(d)
a.k(s-q.length,b,q,e)},
iP(a,b,c,d,e){return this.es(a,b,c,d,e,null,null)},
iM(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.r3(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.E
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.d3
break B}if(2===r){r=B.a3
break B}r=B.K
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.u)
for(r=$.fK(),p=0;p<12;++p){o=r[p]
if(c.fg(o).a>0){n=$.vK().n(0,o)
n.toString
s.$3(n,B.z,A.ei(o))}}r=c instanceof A.ae
if(r&&c.at instanceof A.cG)s.$2("!",B.I)
if(r&&c.at instanceof A.co)s.$2("z",B.F)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.B
break C}if(2===m){n=B.p
break C}n=B.ag
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.D)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.O)
if($.nU&&r)a.k(2,b,A.U(B.e.M(c.ch*100),!1,3),B.u)
A.zn(a,10,b,a.c.a-11,c.z,c.gbq(),B.m,B.a0)}}
A.r6.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.ak(r.S(0,s).gaF(),b.y.S(0,s).gaF())},
$S:125}
A.r4.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.i.aK(a.gba().c,0,3),B.j)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.U(r,!1,2),B.d)
p.a=p.a+B.c.A(q.c.a-6,3)},
$S:126}
A.r5.prototype={
$1(a){return B.e.t(B.e.M(t._.a(a).gd0()*100)/100)},
$S:127}
A.r3.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.cv(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:128}
A.rd.prototype={
d5(a,b,c,d){var s=this.a.a
this.iO(a,b+s.a,c+s.b,d)},
iO(a,b,c,d){var s=this.r.a,r=this.w
a.an(b-s.a+r.a,c-s.b+r.b,d)},
aI(a){var s,r,q,p,o,n=this;++n.f
s=a instanceof A.f8
if(s){r=a.a
for(q=r.length,p=n.c,o=0;o<r.length;r.length===q||(0,A.p)(r),++o)A.BJ(p,r[o])}q=n.c
p=q.length
B.a.hP(q,new A.rk(n))
return s||n.e||p!==0||q.length!==0||n.b.b.y.d.a>0},
ff(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this
b6.nu(b7.c)
s=b6.d
B.a.aN(s)
b6.e=!1
r=b6.b
q=r.b
p=q.y
for(o=A.af(b6.r),n=p.d,m=t.w,l=t.p0,k=t.dW,j=t.ev;o.q();){i=o.b
h=o.c
g=new A.d(i,h)
f=q.x
f===$&&A.c()
e=f.f
e.l(i,h)
d=e.a
e=h*e.b.b.a+i
if(!(e>=0&&e<d.length))return A.a(d,e)
e=d[e]
c=e.r
if(c){b=b6.o_(g,e)
a=b.a
a0=b.b
a1=b.c
a2=f.r.n(0,g)
if(a2==null)a2=A.bC(B.H,null)
a3=a2.gap(0)
if(!a3){a4=a2.gL(0)
if(!a4.q())A.a2(A.ct())
a5=a4.gH().a.b
a=a5.a
a0=a5.b}}else{a=null
a0=B.z
a1=B.z
a3=!1}if(!e.b&&e.d+e.e>e.c&&e.x!==0){d=e.w
if(d===$.b9()){d=$.o()
k.a(B.aQ)
a6=B.aQ.length
d=d.a
a7=d.a4(a6)
if(!(a7>=0&&a7<a6))return A.a(B.aQ,a7)
a=B.aQ[a7]
l.a(B.aT)
a6=B.aT.length
d=d.a4(a6)
if(!(d>=0&&d<a6))return A.a(B.aT,d)
a8=B.aT[d]
a0=a8.a
a1=a8.b
b6.e=!0
a.toString
B.a.T($.iV,A.b([i,h,a,"rgb("+a0.a+", "+a0.b+", "+a0.c+")"],m))}else if(d===$.bJ())a1=a1.bk(B.A,0.1+e.x/255*0.9)}d=f.w
d.l(i,h)
a7=d.a
d=h*d.b.b.a+i
if(!(d>=0&&d<a7.length))return A.a(a7,d)
d=a7[d]
if(d!=null)a9=!e.b&&e.d+e.e>e.c||g.Y(0,p.y)||$.nT||q.cm(d)
else a9=!1
if(a9){b0=d.geM()
if(b0 instanceof A.a0){a=b0.a
a0=b0.b}else{a0=r.gkj()
a=64}if(r.gd2()===d){a1=a0
a0=B.t
c=!1}if(d instanceof A.ae)B.a.j(s,d)
a3=!1}a7=n.a
if(a7>0){b1=Math.min(90,a7*8)
a7=$.o()
a7=a7.a
if(a7.a4(100)<b1){a=a7.a4(100)<b1?a:42
j.a(B.aS)
a6=B.aS.length
a7=a7.a4(a6)
if(!(a7>=0&&a7<a6))return A.a(B.aS,a7)
a0=B.aS[a7]}a3=!1
c=!1}a7=new A.rj()
b2=a7.$2(a0,B.bJ)
b3=a7.$2(a1,B.d0)
if(!e.b&&e.d+e.e>e.c)a7=a3||c
else a7=!1
if(a7){e=new A.rg(e)
if(a3)a0=e.$2(a0,b2)
if(c)a1=e.$2(a1,b3)}else{if(a3)a0=b2
if(c)a1=b3}if($.uN){b4=(16-f.geH().iY(g))/16
b4*=b4
if(b4>0)a1=a1.bk(B.p,b4)}if($.nU&&d instanceof A.ae)a1=B.cX.bk(B.bI,d.ch)
if(a!=null){f=b6.r.a
e=b6.w
b7.an(i-f.a+e.a,h-f.b+e.b,new A.a0(a,a0,a1))}}for(s=b6.c,o=s.length,b5=0;b5<s.length;s.length===o||(0,A.p)(s),++b5)s[b5].bt(q,new A.rh(b6,b7))
s=v.G.rvipTiles
if(J.ad(s==null?null:A.xZ(s),!0)){s=$.l.length!==0&&B.a.gco($.l)===r
o=b6.a
o.toString
A.Cn(q,s,o,new A.ri(p,q),r.gd2())}else{B.a.aN($.iV)
A.T()}},
o_(a,b){var s,r,q,p=b.a.d
if(p instanceof A.a0)return p
t.af.a(p)
s=p.length
r=A.y5(a.a,a.b)
q=B.c.ab(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.a(p,q)
return p[q]},
nu(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbR(),h=new A.re(k,a),g=a.a,f=k.x
f===$&&A.c()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gm()-l.r.gbR()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbW()
h=new A.rf(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gp()-l.r.gbW()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.a3(new A.d(i,p),new A.d(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.d(r,n)}}
A.rk.prototype={
$1(a){return!t.ox.a(a).aI(this.a.b.b)},
$S:129}
A.rj.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:20}
A.rg.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bk(b,A.x(r,0,64,0.5,0))
else if(r>128)a=a.aZ(0,B.u,A.x(r,128,255,0,0.2))
s=s.e
return s>0?a.aZ(0,B.bH,A.x(s,0,255,0.05,0.1)):a},
$S:20}
A.rh.prototype={
$3(a,b,c){var s
this.a.iO(this.b,a,b,c)
s=c.b
B.a.T($.iV,A.b([a,b,c.a,"rgb("+s.a+", "+s.b+", "+s.c+")"],t.w))},
$S:46}
A.ri.prototype={
$2(a,b){return!b.b&&b.d+b.e>b.c||a.y.Y(0,this.a.y)||$.nT||this.b.cm(a)},
$S:131}
A.re.prototype={
$0(){var s=this.a,r=s.y.y.gm(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.P(r-p,0,s.f.b.b.a-q)},
$S:2}
A.rf.prototype={
$0(){var s=this.a,r=s.y.y.gp(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.P(r-p,0,s.f.b.b.b-q)},
$S:2}
A.h1.prototype={
gf7(){return A.b([this.c],t.s)},
gcH(){return B.cm},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s
if(c||b)return!1
switch(a){case 78:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
break
case 89:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(this.d)
break}return!0}}
A.h9.prototype={
gaS(){return 38},
gao(){return 19},
gcH(){var s=t.N
return A.C(["OK","Return to town"],s,s)},
lC(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.os(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.p,r.y-q.y);++c.a
p=r.ay.a
p.toString
o=q.ay.a
o.toString
s.$3("Strength",B.D,p-o)
o=r.ch.a
o.toString
p=q.ch.a
p.toString
s.$3("Agility",B.D,o-p)
p=r.CW.a
p.toString
o=q.CW.a
o.toString
s.$3("Vitality",B.D,p-o)
o=r.cx.a
o.toString
p=q.cx.a
p.toString
s.$3("Intellect",B.D,o-p)
c.a+=3
n=r.ax.gjN()-q.ax.gjN()
m=m.x
m===$&&A.c()
m=m.b
q=A.O(m)
s.$4$total("Monsters",B.m,n,n+new A.aq(m,q.i("B(1)").a(new A.ot()),q.i("aq<1>")).gI(0))},
gbe(){return!0},
a7(a){var s
if(a!==B.a1)return!1
s=this.d
s.y.Q.spo(Math.max(this.c.as,s.w))
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0},
bw(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)if(s[q].bw())this.K()},
hQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
a.k(1,1,"You survived depth "+this.d.w+"!",B.d)
a.k(1,3,"You gained:",B.f)
a.k(1,13,"You slayed:",B.f)
for(s=this.e,r=s.length,q=a.c.a,p=q-1,q-=4,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m=n.a
a.k(5,m,"................................",B.t)
a.k(5,m,n.b+" ",B.j)
l=B.c.t(n.f)
k=n.e
j=l.length
if(k!=null){i=B.c.t(k)
k=i.length
h=p-k
g=n.d
a.k(h,m,i,g)
a.k(h-3,m," / ",g)
a.k(q-k-j,m,l,g)}else{k=n.c===0?B.j:n.d
a.k(p-j,m,l,k)}}}}
A.os.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.m4(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:132}
A.ot.prototype={
$1(a){return!(t.f0.a(a) instanceof A.ax)},
$S:133}
A.m4.prototype={
bw(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.o().pD(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.hc.prototype={
gf7(){if(this.c)return B.hN
return B.hT},
gcH(){return B.cm},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!1)
return!0}return!1},
a9(a,b,c){var s
if(c||b)return!1
switch(a){case 78:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!1)
break
case 89:s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(!0)
break}return!0},
bw(){return!1}}
A.ld.prototype={
gbe(){return!0},
gaS(){return null},
gao(){return null},
gf7(){return null},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
A.bz(a,g.gcH(),null)
s=g.gf7()
r=s!=null
if(r){q=B.a.aA(s,0,new A.qz(),t.S)
p=s.length}else{q=0
p=0}o=g.gaS()
if(o==null)o=q+2
n=g.gao()
if(n==null)n=p+2
m=a.e.a.b.b
l=B.c.A(m.b-n,3)
k=B.c.A(m.a-o,2)
A.cL(a,k-1,l-1,o+2,n+2,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a=new A.aY(new A.d(o,n),k,l,a)
a.ck(0,0,a.gaS(),a.gao())
if(r){j=B.c.A(o-B.a.aA(s,0,new A.qA(),t.S),2)
for(r=s.length,i=1,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){a.k(j,i,s[h],B.d);++i}}g.hQ(a)},
hQ(a){}}
A.qz.prototype={
$2(a,b){return Math.max(A.u(a),A.a6(b).length)},
$S:15}
A.qA.prototype={
$2(a,b){return Math.max(A.u(a),A.a6(b).length)},
$S:15}
A.hV.prototype={
gaS(){return 42},
gao(){return 25},
gf7(){return B.hV},
gcH(){return B.ik},
a7(a){var s,r,q=this
switch(a){case B.a9:q.eo(q.e-1)
return!0
case B.ad:q.eo(q.e+1)
return!0
case B.X:q.eo(q.e-10)
return!0
case B.Y:q.eo(q.e+10)
return!0
case B.a1:s=q.a
s.toString
r=q.e
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(r)
return!0
case B.G:s=q.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
hQ(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ab(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.an(r,o,new A.a0(9658,B.h,B.z))
a.an(r+4,o,new A.a0(9668,B.h,B.z))
n=B.h}else n=B.C
a.k(q*4+1,p+5,A.U(s,!1,3),n)}},
eo(a){if(a<1)return
if(a>100)return
this.e=a
this.K()}}
A.ag.prototype={}
A.hT.prototype={
gbe(){return!0},
j6(a){var s=this,r=s.d,q=s.c,p=q.length
do r=B.c.ab(r+a+p,p)
while(q[r].c==null)
s.d=r
s.K()},
a7(a){var s,r,q=this,p=$.nk
if(p>=65&&p<=90)return!1
A:{if(B.X===a){q.j6(-1)
break A}if(B.Y===a){q.j6(1)
break A}if(B.a1===a||B.ad===a){p=q.a
p.toString
s=q.c
r=q.d
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
p.W(r.c)
break A}if(B.G===a||B.a9===a){p=q.a
p.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
p.W(null)
break A}return!1}return!0},
a9(a,b,c){var s,r,q,p,o,n,m=this,l=null
if(b||a===16)return!1
if(96===a||110===a){s=m.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(l)
return!0}if(107===a){s=m.a
s.toString
r=m.c
q=m.d
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(q.c)
return!0}for(s=m.c,r=s.length,p=0;p<r;++p){o=s[p]
q=o.c
if(q!=null&&o.d===a&&o.e===c){s=m.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
r=v.G
n=r.rvipMap
if(n!=null)A.P(n).shown=!1
if("rvipDraw" in r)A.pG(r,"rvipDraw",l,l,l,l)
s.W(q)
return!0}}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c,d=t.S,c=B.a.aA(e,0,new A.r_(),d),b=A.b([],t.s)
for(s=e.length,r=0;r<e.length;e.length===s||(0,A.p)(e),++r){q=e[r]
p=q.b
b.push(q.c==null?p:B.i.fb(q.a,c)+" "+p)}s=f.b
o=B.a.aA(b,s.length+2,new A.r0(),d)
d=a.e.a.b.b
p=d.b
n=Math.min(b.length,p-2)
m=f.d
l=f.e
if(m<l){f.e=m
l=m}if(m>=l+n)f.e=m-n+1
k=Math.max(0,B.c.A(d.a-o-2,2))
j=Math.max(0,B.c.A(p-n-2,3))
A.bm(a,null,n+2,s,!0,o+2,k,j)
for(d=k+1,s=j+1,i=0;i<n;++i){h=i+f.e
if(!(h>=0&&h<e.length))return A.a(e,h)
if(e[h].c==null)g=B.f
else g=h===f.d?B.h:B.C
if(!(h<b.length))return A.a(b,h)
p=B.i.fb(b[h],o)
m=h===f.d?B.t:null
a.cv(d,s+i,p,g,m)}}}
A.qZ.prototype={
$1(a){return t.m7.a(a).c!=null},
$S:134}
A.r_.prototype={
$2(a,b){return Math.max(A.u(a),t.m7.a(b).a.length)},
$S:135}
A.r0.prototype={
$2(a,b){return Math.max(A.u(a),A.a6(b).length)},
$S:15}
A.un.prototype={
$2(a,b){var s=this.a.f
return s.b.G(0,new A.d(a,b))?A.xU(s.B(a,b).a).a:0},
$S:22}
A.uo.prototype={
$2(a,b){var s=this.a.f
return!s.b.G(0,new A.d(a,b))||A.xU(s.B(a,b).a).b!==0},
$S:136}
A.um.prototype={
$1(a){return A.y8(A.ef(a))},
$S:137}
A.rs.prototype={
af(a,b){B.a.hP(this.b,new A.rC(b))
this.bi()},
pB(a){var s=this.b
B.a.h(s,B.a.hA(s,new A.rD(a)),a)
this.bi()},
na(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=v.G
if(A.a6(A.P(A.P(c5.window).location).search)==="?clear"){c4.bi()
return}a9=A.tN(A.P(A.P(c5.window).localStorage).getItem("heroes"))
if(a9==null)return
c5=t.ea
for(b0=t.gs,b1=J.aw(b0.a(c5.a(B.b1.oS(a9)).n(0,"heroes"))),b2=c4.b,b3=t.dZ,b4=t.c3,b5=t.D,b6=t.c;b1.q();){s=b1.gH()
try{r=c5.a(s)
q=A.a6(J.b3(r,"name"))
p=A.a6(s.n(0,"race"))
o=B.a.eZ($.fL(),new A.rz(p))
n=null
if(J.b3(r,"class")==null)n=$.ep()[0]
else{m=A.a6(J.b3(r,"class"))
n=B.a.eZ($.ep(),new A.rA(m))}l=J.ad(J.b3(r,"death"),"permanent")
k=c4.dA(b0.a(J.b3(r,"inventory")))
j=A.bC(B.v,k)
i=new A.eJ(A.ao(9,null,!1,b6))
for(b7=c4.dA(b0.a(J.b3(r,"equipment"))),b8=b7.length,b9=0;b9<b7.length;b7.length===b8||(0,A.p)(b7),++b9){h=b7[b9]
i.k9(h)}g=c4.dA(b0.a(J.b3(r,"home")))
f=A.bC(B.cb,g)
e=c4.dA(b0.a(J.b3(r,"crucible")))
d=A.bC(B.ca,e)
c=A.D(b4,b5)
if(r.ah("shops")){b=c5.a(J.b3(r,"shops"))
$.hY.ae(0,new A.rB(c4,b,c))}j.bn()
f.bn()
d.bn()
a=A.u(J.b3(r,"experience"))
a0=c4.ne(b3.a(J.b3(r,"skills")))
a1=c4.nc(J.b3(r,"log"))
a2=c4.nd(c5.a(J.b3(r,"lore")))
a3=A.u(J.b3(r,"gold"))
c0=A.xB(J.b3(r,"maxDepth"))
a4=c0==null?0:c0
a5=c5.a(J.b3(r,"stats"))
b7=n
b8=A.u(J.b3(a5,"strength"))
c1=A.u(J.b3(a5,"agility"))
c2=A.u(J.b3(a5,"vitality"))
a6=A.wJ(q,o,b7,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c1,A.u(J.b3(a5,"intellect")),b8,c2)
B.a.j(b2,a6)}catch(c3){a7=A.dD(c3)
a8=A.ek(c3)
A.uh("Could not load hero. Data:")
A.uh(B.b1.k8(s))
A.uh("Error:\n"+A.K(a7)+"\n"+A.K(a8))}}},
dA(a){var s,r,q,p=A.b([],t.I)
for(s=J.aw(a),r=t.ea;s.q();){q=this.nb(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
nb(a){var s,r,q
t.ea.a(a)
s=A.a6(a.n(0,"type"))
r=$.bp().c8(s)
if(r==null){A.vu("Couldn't find item type \""+A.K(a.n(0,"type"))+'", discarding item.')
return null}q=a.ah("count")?A.u(a.n(0,"count")):1
return new A.N(r,this.fV(a.n(0,"prefix")),this.fV(a.n(0,"suffix")),this.fV(a.n(0,"intrinsic")),q)},
fV(a){var s,r,q,p,o,n,m,l="parameter"
A:{s=null
r=!1
q=null
p=!1
if(t.av.b(a)){o=a.n(0,"id")
if(o==null)n=a.ah("id")
else n=!0
if(n){r=typeof o=="string"
if(r){s=a.n(0,l)
if(s==null)n=a.ah(l)
else n=!0
if(n)p=A.fA(s)
q=o}}}if(p){m=A.u(r?s:a.n(0,l))
p=new A.cl(A.wm(A.a6(q)),m)
break A}p=null
break A}return p},
ne(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.D(s,r)
if(a!=null)for(p=a.gaR(),p=p.gL(p);p.q();){o=p.gH()
n=$.vL().n(0,o)
if(n==null)A.a2(A.aG("Unknown skill '"+o+"'.",null))
q.h(0,n,A.u(a.n(0,o)))}return new A.hZ(q,A.D(s,r))},
nc(a){var s,r,q,p=A.b([],t.kU)
if(t.gs.b(a))for(s=J.aw(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.hy(B.a.eZ(B.hS,new A.rt(q)),A.a6(q.n(0,"text")),A.u(q.n(0,"count"))))}return new A.kJ(p)},
nd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
d.a(a)
s=t.P
r=t.S
q=A.D(s,r)
p=A.D(s,r)
s=t.q
o=A.D(s,r)
n=A.D(t.R,r)
m=A.bc(s)
l=A.D(s,r)
k=d.a(a.n(0,"seen"))
if(k!=null)k.ae(0,new A.ru(e,q))
j=d.a(a.n(0,"slain"))
if(j!=null)j.ae(0,new A.rv(e,p))
i=d.a(a.n(0,"foundItems"))
if(i!=null)i.ae(0,new A.rw(e,o))
h=d.a(a.n(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.rx(e,n))
g=d.a(a.n(0,"usedItems"))
if(g!=null)g.ae(0,new A.ry(e,l))
f=t.lH.a(a.n(0,"createdArtifacts"))
if(f!=null)for(d=J.aw(f);d.q();){s=A.a6(d.gH())
s=$.bp().c8(s)
s.toString
m.j(0,s)}return new A.hw(q,p,o,n,m,l)},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.b([],t.ic)
for(s=a3.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t.gs,m=0;m<s.length;s.length===r||(0,A.p)(s),++m){l=s[m]
k=A.C(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a3.dE(l.e)
h=a3.dE(l.f)
g=a3.dE(l.r)
f=a3.dE(l.w)
e=A.D(q,n)
for(d=l.x,d=new A.dW(d,d.r,d.e,A.z(d).i("dW<1,2>"));d.q();){c=d.d
e.h(0,c.a.b,a3.dE(c.b))}d=l.y
c=A.D(q,o)
for(b=l.z.a,a=new A.c8(b,b.r,b.e,A.z(b).i("c8<1>"));a.q();){a0=a.d
a1=a0.gN()
a0=b.n(0,a0)
c.h(0,a1,a0==null?0:a0)}a4.push(A.C(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a3.nK(l.at),"lore",a3.nL(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}a2=B.b1.k8(A.C(["heroes",a4],q,t.ew))
A.P(A.P(v.G.window).localStorage).setItem("heroes",a2)
A.vu("Saved.")},
nK(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.z,o=0;o<s.length;s.length===r||(0,A.p)(s),++o){n=s[o]
m.push(A.C(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nL(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.z,g=A.D(i,h),f=A.D(i,h),e=A.D(i,h),d=A.D(i,h),c=A.D(i,h),b=[]
for(s=$.cj().gc0(),r=A.z(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.n(0,o)
if(n==null)n=0
if(n!==0)g.h(0,o.a.a,n)
n=q.n(0,o)
if(n==null)n=0
if(n!==0)f.h(0,o.a.a,n)}for(s=$.bp().gc0(),r=A.z(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
m=p.n(0,o)
if(m==null)m=0
if(m!==0)e.h(0,o.a.a6(1).a,m)
l=q.n(0,o)
if(l==null)l=0
if(l!==0)c.h(0,o.a.a6(1).a,l)}s=A.a8($.dE().gc0(),t.R)
B.a.T(s,$.dF().gc0())
r=s.length
q=a.d
k=0
for(;k<s.length;s.length===r||(0,A.p)(s),++k){j=s[k]
m=q.n(0,j)
if(m==null)m=0
if(m!==0)d.h(0,j.a,m)}for(s=$.bp().gc0(),r=A.z(s),s=new A.bs(J.aw(s.a),s.b,r.i("bs<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a6(1).a)}return A.C(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
dE(a){var s,r,q,p,o,n,m,l,k,j
t.E.a(a)
s=[]
for(r=a.gL(a),q=t.N,p=t.K,o=t.z;r.q();){n=r.gH()
m=A.D(q,p)
m.h(0,"type",n.a.a.a6(1).a)
m.h(0,"count",n.f)
l=n.b
if(l!=null)m.h(0,"prefix",A.C(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.h(0,"suffix",A.C(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.h(0,"intrinsic",A.C(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.rC.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:23}
A.rD.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:23}
A.rz.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:34}
A.rA.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:138}
A.rB.prototype={
$2(a,b){var s,r
A.a6(a)
t.c3.a(b)
s=t.lH.a(this.b.n(0,a))
r=this.c
if(s!=null)r.h(0,b,A.bC(new A.c6(b.b,26),t.E.a(this.a.dA(s))))
else{A.vu("No data for "+a+", so regenerating.")
r.h(0,b,b.oQ())}},
$S:139}
A.rt.prototype={
$1(a){return t.aI.a(a).b===A.a6(this.a.n(0,"type"))},
$S:140}
A.ru.prototype={
$2(a,b){var s
A.a6(a)
s=$.cj().c8(a)
if(s!=null)this.b.h(0,s,A.u(b))},
$S:14}
A.rv.prototype={
$2(a,b){var s
A.a6(a)
s=$.cj().c8(a)
if(s!=null)this.b.h(0,s,A.u(b))},
$S:14}
A.rw.prototype={
$2(a,b){var s
A.a6(a)
s=$.bp().c8(a)
if(s!=null)this.b.h(0,s,A.u(b))},
$S:14}
A.rx.prototype={
$2(a,b){this.b.h(0,A.wm(A.a6(a)),A.u(b))},
$S:14}
A.ry.prototype={
$2(a,b){var s
A.a6(a)
s=$.bp().c8(a)
if(s!=null)this.b.h(0,s,A.u(b))},
$S:14}
A.oa.prototype={
$2(a,b){var s,r
A.a6(a)
A.a6(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:48}
A.ob.prototype={
$2(a,b){var s,r,q,p
A.a6(a)
A.a6(b)
s=this.a
if(!s.c){r=this.b
r.k(s.b,r.e.a.b.b.b-1,", ",B.d)
s.b+=2}r=this.b
q=r.e.a.b.b.b-1
r.k(s.b,q,"[",B.l)
r.k(++s.b,q,a,B.h)
p=s.b+a.length
s.b=p
r.k(p,q,"] ",B.l)
r.k(s.b+=2,q,b,B.C)
s.b=s.b+b.length
s.c=!1},
$S:48}
A.lH.prototype={
gcj(){var s,r,q=this,p=t.N
p=A.D(p,p)
p.h(0,"\u2195","Select row")
s=q.e
r=s.length
if(r!==0)p.h(0,"S","Sort by "+s[B.c.ab(q.z+1,r)].a)
s=q.f
r=s.length
if(r!==0)p.h(0,"F","Show "+s[B.c.ab(q.Q+1,r)].a)
return p},
a7(a){var s=this
switch(a){case B.X:s.eI(-1)
return!0
case B.Y:s.eI(1)
return!0
case B.ap:s.eI(-(s.w-1))
return!0
case B.aq:s.eI(s.w-1)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
s=83===a
if(s&&!c&&o.e.length!==0){o.z=B.c.ab(o.z+1,o.e.length)
o.dC()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ab(r+q-1,q)
o.dC()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ab(o.Q+1,o.f.length)
o.dC()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ab(r+q-1,q)
o.dC()
return!0}return!1},
kQ(a,b){this.$ti.i("k<ay<1>>()").a(a)
this.jg(new A.rL(this,t.b8.a(b),a))},
kP(a){return this.kQ(a,null)},
hp(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.Y(0,a0.r))a0.nG(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kz(p.f,n.length)
l=p.d
if(l==null)l=B.f
a2.k(o+m,0,n,l)}r=A.b([],t.s)
o=a0.e
n=o.length
if(n!==0){m=a0.z
if(!(m>=0&&m<n))return A.a(o,m)
r.push("ordered by "+o[m].a)}o=a0.f
n=o.length
if(n!==0){m=a0.Q
if(!(m>=0&&m<n))return A.a(o,m)
r.push("show "+o[m].a)}if(r.length!==0){k="("+B.a.aQ(r,", ")+")"
a2.k(B.a.gaz(s).e+B.a.gaz(s).f-k.length,0,k,B.l)}a0.iN(a2,1,B.l)
for(r=a0.d,o=!r,n=a0.c,j=0;m=a0.w,j<m;++j){i=j*2+2
h=a0.x+j
m=n.length
if(h>=m)continue
if(!(h>=0))return A.a(n,h)
g=n[h]
f=g.a
if(f!=null)a2.an(0,i,f)
if(h===a0.y)a2.k(1,i,"\u25ba",B.h)
for(m=g.c,e=0;e<m.length;++e){d=m[e]
if(!(e<s.length))return A.a(s,e)
l=s[e]
A:{c=a0.y
if(h===c){c=B.h
break A}if(!d.b){c=B.j
break A}if(e===0){c=B.C
break A}c=B.d
break A}b=l.e
A.v6(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.t
a0.iN(a2,i+1,a)}if(r){s=n.length
A.wy(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
nG(a){var s,r,q,p,o,n,m,l,k,j=this
for(s=j.a,r=s.length,q=null,p=0,o=0;o<r;++o){n=s[o]
m=n.c
if(m===0)q=n
else{n.f=m
p+=m}}p=p+(r-1)+2
if(j.d)p+=2
if(q!=null)q.f=a.a-p
for(l=2,k=0;k<r;++k){if(k>0)++l
m=s[k]
m.e=l
l+=m.f}j.w=B.c.A(a.b-2,2)
j.r=a
j.fU()},
dC(){this.jg(new A.rK(this))},
eI(a){var s=this
s.y=B.c.P(s.y+a,0,s.c.length-1)
s.fU()},
jg(a){var s,r,q,p,o,n=this
t.O.a(a)
s=n.y
r=n.c
q=r.length
if(s<q){if(!(s>=0))return A.a(r,s)
p=r[s].b}else p=null
a.$0()
n.y=0
s=r.length
if(0<s)for(o=0;o<s;++o)if(r[o].b==p){n.y=o
break}n.fU()},
fU(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.P(r.y,0,p-1)
p=B.c.P(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.P(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iN(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
a.k(q,b,B.i.aJ("\u2500",o.f),c)
q+=o.f+1}}}
A.rL.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aN(r)
B.a.T(r,p)
s.r=B.al}p=q.a
s=p.b
B.a.aN(s)
B.a.T(s,q.c.$0())
p.dC()},
$S:0}
A.rK.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.dl(p.b,new A.rI(p))
s=p.c
B.a.aN(s)
r=p.b
if(p.f.length!==0){q=A.O(r)
B.a.T(s,new A.aq(r,q.i("B(1)").a(new A.rJ(p)),q.i("aq<1>")))}else B.a.T(s,r)},
$S:0}
A.rI.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.i("ay<1>")
n.a(a)
n.a(b)
n=p.e
p=p.z
if(!(p>=0&&p<n.length))return A.a(n,p)
p=o.i("E<e(1,1)>").a(n[p].b)
n=p.length
o=a.b
s=b.b
r=0
for(;r<p.length;p.length===n||(0,A.p)(p),++r){q=p[r].$2(o,s)
if(q!==0)return q}return 0},
$S(){return this.a.$ti.i("e(ay<1>,ay<1>)")}}
A.rJ.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.i("ay<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.a(s,r)
return q.i("B(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.i("B(ay<1>)")}}
A.ji.prototype={
aL(){return"Align."+this.b},
kz(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aQ.prototype={}
A.ay.prototype={}
A.ac.prototype={}
A.R.prototype={}
A.rP.prototype={
$2(a,b){return A.u(a)+t.fc.a(b).a.length},
$S:143}
A.bD.prototype={}
A.ca.prototype={}
A.ic.prototype={
gbe(){return!0},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.K()
return!0}}return!1},
cY(a,b){t.d.a(a)
this.d=!0},
ai(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bm(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.j)
a.k(2,o,")",k.d?B.l:B.j)
a.k(4,o,l,k.d?B.C:B.j)}if(k.d){s=t.N
A.bz(a,A.C(["`","Exit"],s,s),j)}},
nk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.c()
for(s=b.f,r=s.b,q=A.af(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.a(p,k)
j=p[k]
i=$.Y()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.fm(!0)
continue}for(j=new A.d(m,l).gbC(),i=j.length,h=0;h<i;++h){g=j[h]
if(r.G(0,g)){f=g.a
e=g.b
s.l(f,e)
f=e*o+f
if(!(f>=0&&f<n))return A.a(p,f)
f=p[f]
e=$.Y()
e=(f.a.e.a&e.a)!==0
f=e}else f=!1
if(f){s.l(m,l)
p[k].fm(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.p)(s),++h){d=s[h]
if(d instanceof A.ae)if(c.j(0,d))q.i5(d.Q)}b.f1(new A.t5(this))},
mW(){var s,r,q,p,o,n,m,l,k,j=this.c.x
j===$&&A.c()
for(s=j.f,r=s.b,q=A.af(r),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
s.l(n,m)
l=m*r+n
if(!(l>=0&&l<o))return A.a(p,l)
l=p[l]
k=$.Y()
if((l.a.e.a&k.a)!==0){s.l(n,m)
l.f=B.c.P(l.f+255,0,192)}}j=j.gaw()
j.f=!0
j.cL()},
ms(){this.d=!1
this.a.a2(new A.ne(this.c))},
ol(){this.d=!1
this.a.a2(new A.nf(this.c))},
mM(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.i4(q)
s.bs()
r.at.dP("Gave the hero "+A.U(q,!1,null)+" experience.")},
n6(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.c()
s=m.b
s=A.b(s.slice(0),A.O(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.p)(s),++q){p=s[q]
if(!(p instanceof A.ae))continue
o=p.y
n=p.Q
m.e3(o,n.Q,n.c)
m.kT(p)}},
m4(){var s,r,q,p=A.b([],t.b9),o=this.c.x
o===$&&A.c()
o.f1(new A.t4(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.p)(p),++r){q=p[r]
o.e6(q.b,q.a)}},
ni(){var s,r=this.c,q=r.x
q===$&&A.c()
r=r.y
s=r.y
q.f.B(s.gm(),s.gp()).a=$.uD()
r.Q.at.dP("Placed stairs under hero.")},
o4(){var s=!$.nT
$.nT=s
this.c.y.Q.at.dP("Show all monsters = "+s)
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)},
o2(){var s=!$.nU
$.nU=s
this.c.y.Q.at.dP("Show monster alertness = "+s)
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)},
o6(){var s=!$.uN
$.uN=s
this.c.y.Q.at.dP("Show hero volume = "+s)
s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)}}
A.t5.prototype={
$2(a,b){this.a.c.y.Q.ax.d9(a)},
$S:21}
A.t4.prototype={
$2(a,b){B.a.j(this.a,new A.S(b,a))},
$S:21}
A.cB.prototype={
gbe(){return!0},
a7(a){var s
if(a===B.G){s=this.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.geA(),r=s.length,q=0;q<s.length;s.length===r||(0,A.p)(s),++q)o.hc(s[q])
s=o.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.i.aK(s,0,r-1)
o.K()}return!0
case 32:o.c+=" "
o.K()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.rG(A.b([a],t.t)).toLowerCase()
o.K()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.geA().length){s=o.geA()
if(!(p>=0&&p<s.length))return A.a(s,p)
o.hc(s[p])
s=o.a
s.toString
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
A.T()
s.W(null)
return!0}}}return!1},
ai(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aY(new A.d(43,38),40,0,a)
A.bm(k,l,l,m.geB(),!0,l,l,l)
k.k(m.geB().length+4,0,m.c,B.h)
k.cv(m.geB().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.geA(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.p)(s),++p){o=s[p]
if(!B.i.G(m.ex(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.j)}++q
k.an(3,q,m.j_(o))
k.k(5,q,m.ex(o),B.C)
if(q>=36)break}s=t.N
A.bz(a,A.C(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
geA(){var s=this.git(),r=A.z(s),q=r.i("aq<k.E>")
s=A.a8(new A.aq(s,r.i("B(k.E)").a(new A.tC(this)),q),q.i("k.E"))
return s}}
A.tC.prototype={
$1(a){var s=this.a
return B.i.G(s.ex(A.z(s).i("cB.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.z(this.a).i("B(cB.T)")}}
A.ne.prototype={
geB(){return"Drop what?"},
git(){return $.bp().gc0()},
ex(a){return t.q.a(a).a.a6(1).a},
j_(a){return t.q.a(a).b},
hc(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.aa(a.a.a6(1).a,null,null).b1(s.y.Q.ax,s.w,new A.tI(this))}}
A.tI.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.c()
s=s.y
r.cZ(a,s.y)
s.Q.at.jZ("Dropped {1}.",a)},
$S:6}
A.nf.prototype={
geB(){return"Spawn what?"},
git(){return $.cj().gc0()},
ex(a){return t.P.a(a).a.a},
j_(a){return t.P.a(a).b},
hc(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.c()
q=A.cv(r,s.y.y,$.b2(),null,null,null).jQ(new A.tJ(this))
if(q==null)return
r.dH(a.ig(q))}}
A.tJ.prototype={
$1(a){return a.S(0,this.a.b.y.y).bh(0,6)},
$S:1}
A.o8.prototype={
i7(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.B(a,b).Y(0,c))r.aY(a,b,c)
else r.aY(a,b,null)},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.a.a(a)
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.$ti.c,o=s.a,n=this.b,m=n.$ti.c,l=n.a,k=n.b.b.a,j=l.length,i=0;i<q;++i)for(h=i*r,g=i*k,f=0;f<r;++f){n.l(f,i)
e=g+f
if(!(e>=0&&e<j))return A.a(l,e)
d=l[e]
if(d==null)continue
a.$3(f,i,d)
p.a(d)
s.l(f,i)
B.a.h(o,h+f,d)
m.a(null)
n.l(f,i)
B.a.h(l,e,null)}}}
A.F.prototype={
ga1(a){return B.c.ga1(this.a)^B.c.ga1(this.b)^B.c.ga1(this.c)},
Y(a,b){if(b==null)return!1
return b instanceof A.F&&this.a===b.a&&this.b===b.b&&this.c===b.c},
aZ(a,b,c){return new A.F(B.e.M(B.e.P(this.a+b.a*c,0,255)),B.e.M(B.e.P(this.b+b.b*c,0,255)),B.e.M(B.e.P(this.c+b.c*c,0,255)))},
bk(a,b){var s=1-b
return new A.F(B.e.M(this.a*s+a.a*b),B.e.M(this.b*s+a.b*b),B.e.M(this.c*s+a.c*b))}}
A.a0.prototype={
ga1(a){return B.c.ga1(this.a)^this.b.ga1(0)^this.c.ga1(0)},
Y(a,b){if(b==null)return!1
if(b instanceof A.a0)return this.a===b.a&&this.b.Y(0,b.b)&&this.c.Y(0,b.c)
return!1}}
A.kE.prototype={}
A.A.prototype={
Y(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga1(a){return(B.c.ga1(this.a)^B.cd.ga1(this.b)^B.cd.ga1(this.c))>>>0},
t(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.aY.prototype={
gaS(){return this.c.a},
gao(){return this.c.b},
an(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.an(r.d+a,r.e+b,c)},
b7(a,b,c,d){return new A.aY(new A.d(c,d),this.d+a,this.e+b,this.f)}}
A.ls.prototype={
gaS(){return this.e.a.b.b.a},
gao(){return this.e.a.b.b.b},
lH(a,b,c,d,e,f){var s=t.gX
A.e9(this.r,"load",s.i("~(1)?").a(new A.qM(this)),!1,s.c)},
an(a,b,c){this.e.i7(a,b,c)},
kV(){if(!this.y)return
this.e.ai(new A.qN(this))},
mP(a){var s,r,q,p=this.w,o=p.n(0,a)
if(o!=null)return o
s=A.wG()
r=this.r
s.width=A.u(r.width)
s.height=A.u(r.height)
q=A.c3(s.getContext("2d"))
if(q==null)q=A.P(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.u(r.width),A.u(r.height))
p.h(0,a,s)
return s}}
A.qM.prototype={
$1(a){var s=this.a
s.y=!0
s.kV()},
$S:3}
A.qN.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.ig.n(0,h)
h=g==null?h:g
s=B.c.ab(h,32)
r=this.a
q=r.z
p=B.c.A(h,32)
o=r.Q
n=r.f
m=c.c
n.fillStyle="rgb("+m.a+", "+m.b+", "+m.c+")"
m=r.x
l=a*q*m
k=b*o*m
j=q*m
m=o*m
n.fillRect(l,k,j,m)
if(h===0||h===32)return
i=r.mP(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:46}
A.dx.prototype={
kb(a,b,c,d,e){var s,r,q,p,o=A.cO(32,B.aL,e==null?B.z:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.an(p,q,o)},
ck(a,b,c,d){return this.kb(a,b,c,d,null)},
cv(a,b,c,d,e){var s,r,q
if(d==null)d=B.aL
if(e==null)e=B.z
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gaS())break
this.an(q,b,new A.a0(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.cv(a,b,c,d,null)},
pT(a,b,c){return this.cv(a,b,c,null,null)},
b7(a,b,c,d){return new A.aY(new A.d(c,d),a,b,this)}}
A.hP.prototype={}
A.cA.prototype={
gjv(){var s,r=this,q=r.r
if(q===$){s=A.vh(r.gnY())
r.r!==$&&A.eo()
r.r=s
q=s}return q},
spe(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.c3(A.P(s.document).body)
r.toString
q=t.gX
p=q.i("~(1)?")
q=q.c
o.e=A.e9(r,"keydown",p.a(o.gn1()),!1,q)
s=A.c3(A.P(s.document).body)
s.toString
o.f=A.e9(s,"keyup",p.a(o.gn3()),!1,q)},
spI(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.u(A.P(v.G.window).requestAnimationFrame(s.gjv()))},
lo(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.d=!0
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.p)(p),++r)p[r].e7(s)},
a2(a){var s=this
A.z(s).i("v<cA.T>").a(a)
a.jC(s)
B.a.j(s.b,a)
s.eD()},
px(a){var s,r,q,p=this.b
if(0>=p.length)return A.a(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.a(p,q)
p[q].cY(s,a)
this.eD()},
bg(a){var s,r=this
A.z(r).i("v<cA.T>").a(a)
s=r.b
if(0>=s.length)return A.a(s,-1)
s.pop().a=null
a.jC(r)
B.a.j(s,a)
r.eD()},
cL(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bw()
if(this.d)this.eD()},
n2(a){var s,r,q,p=A.u(a.keyCode)
if(A.u(a.location)===3){A:{if(48===p){s=96
break A}if(49===p){s=97
break A}if(50===p){s=98
break A}if(51===p){s=99
break A}if(52===p){s=100
break A}if(53===p){s=101
break A}if(54===p){s=102
break A}if(55===p){s=103
break A}if(56===p){s=104
break A}if(57===p){s=105
break A}if(187===p){s=1000
break A}if(13===p){s=1001
break A}s=p
break A}p=s}if(p===59)p=186
r=this.a.a.n(0,new A.A(p,A.dC(a.shiftKey),A.dC(a.altKey)))
q=B.a.gco(this.b)
if(r!=null){a.preventDefault()
if(q.a7(r))return}s=A.dC(a.shiftKey)
if(q.a9(p,A.dC(a.altKey),s))a.preventDefault()},
n4(a){var s,r,q=A.u(a.keyCode)
if(q===59)q=186
s=B.a.gco(this.b)
r=A.dC(a.shiftKey)
if(s.f6(q,A.dC(a.altKey),r))a.preventDefault()},
nZ(a){var s,r=this
A.ee(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.cL()
r.y=a}}else{r.cL()
r.y=a}if(r.w)A.u(A.P(v.G.window).requestAnimationFrame(r.gjv()))},
eD(){var s,r,q=this.c
q.ck(0,0,q.gaS(),q.gao())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.a(s,r)
if(!s[r].gbe())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ai(q)
this.d=!1
q.kV()}}
A.v.prototype={
gbe(){return!1},
jC(a){A.z(this).i("cA<v.T>").a(a)
this.a=a
this.e7(a.c.e.a.b.b)},
K(){var s=this.a
if(s==null)return
s.d=!0},
a7(a){A.z(this).i("v.T").a(a)
return!1},
a9(a,b,c){return!1},
f6(a,b,c){return!1},
cY(a,b){A.z(this).i("v<v.T>").a(a)},
bw(){},
ai(a){},
e7(a){}}
A.ab.prototype={
lB(a,b,c,d){var s,r,q,p,o,n,m,l=this
for(s=l.$ti.c,r=l.a,q=l.b.b.a,p=0*q,o=1;o<a;++o){n=s.a(c.$1(new A.d(o,0)))
l.l(o,0)
B.a.h(r,p+o,n)}for(m=1;m<b;++m)for(p=m*q,o=0;o<a;++o){n=s.a(c.$1(new A.d(o,m)))
l.l(o,m)
B.a.h(r,p+o,n)}},
B(a,b){var s,r
this.l(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aY(a,b,c){var s=this
s.$ti.c.a(c)
s.l(a,b)
B.a.h(s.a,b*s.b.b.a+a,c)},
gL(a){var s=this.a
return new J.b4(s,s.length,A.O(s).i("b4<1>"))},
l(a,b){if(a<0||a>=this.b.b.a)throw A.n(A.hL(a,"x"))
if(b<0||b>=this.b.b.b)throw A.n(A.hL(b,"y"))}}
A.jD.prototype={
pk(a){var s=this.a,r=this.b
if(!A.vf(s,r,a))return!1
if(r>0&&A.vf(s,r-1,a))return!1
return!0},
gL(a){return A.xl(this,!1)}}
A.mf.prototype={
gH(){var s=this.b
return new A.d(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.d(s.b,s.c)
if(o){if(r.pk(n))return!0}else if(A.vf(q,p,n))return!0}return!1},
$ia5:1}
A.aC.prototype={
aL(){return"Direction."+this.b},
gb8(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.V
break
case 2:s=B.M
break
case 3:s=B.S
break
case 4:s=B.Q
break
case 5:s=B.R
break
case 6:s=B.L
break
case 7:s=B.U
break
case 8:s=B.T
break
default:s=null}return s},
gb9(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.S
break
case 2:s=B.Q
break
case 3:s=B.R
break
case 4:s=B.L
break
case 5:s=B.U
break
case 6:s=B.T
break
case 7:s=B.V
break
case 8:s=B.M
break
default:s=null}return s},
gbF(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.T
break
case 2:s=B.V
break
case 3:s=B.M
break
case 4:s=B.S
break
case 5:s=B.Q
break
case 6:s=B.R
break
case 7:s=B.L
break
case 8:s=B.U
break
default:s=null}return s},
gbV(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.Q
break
case 2:s=B.R
break
case 3:s=B.L
break
case 4:s=B.U
break
case 5:s=B.T
break
case 6:s=B.V
break
case 7:s=B.M
break
case 8:s=B.S
break
default:s=null}return s},
gcN(){switch(this.a){case 0:var s=B.r
break
case 1:s=B.L
break
case 2:s=B.U
break
case 3:s=B.T
break
case 4:s=B.V
break
case 5:s=B.M
break
case 6:s=B.S
break
case 7:s=B.Q
break
case 8:s=B.R
break
default:s=null}return s},
t(a){var s
switch(this.a){case 0:s="none"
break
case 1:s="n"
break
case 2:s="ne"
break
case 3:s="e"
break
case 4:s="se"
break
case 5:s="s"
break
case 6:s="sw"
break
case 7:s="w"
break
case 8:s="nw"
break
default:s=null}return s},
$id:1,
gm(){return this.c},
gp(){return this.d}}
A.mj.prototype={}
A.mK.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia5:1}
A.a3.prototype={
gbR(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbW(){var s=this.a.b
return Math.min(s,s+this.b.b)},
ge8(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geO(){var s=this.a.b
return Math.max(s,s+this.b.b)},
ghk(){var s=this
return new A.d(B.c.A(s.gbR()+s.ge8(),2),B.c.A(s.gbW()+s.geO(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bQ(a){var s=this.a,r=this.b,q=a*2
return new A.a3(new A.d(s.a-a,s.b-a),new A.d(r.a+q,r.b+q))},
G(a,b){var s,r=this.a,q=r.a
if(b.gm()<q)return!1
s=this.b
if(b.gm()>=q+s.a)return!1
r=r.b
if(b.gp()<r)return!1
if(b.gp()>=r+s.b)return!1
return!0},
gL(a){var s=this.a
return new A.cW(this,s.a-1,s.b)},
l2(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.b([],t.l)
for(r=n.gbR(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.d(r,Math.min(k,m)))
B.a.j(s,new A.d(r,Math.max(k,m)-1))}for(o=n.gbW()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.d(Math.min(q,l),o))
B.a.j(s,new A.d(p-1,o))}return s}else if(k&&m.b===1)return new A.a3(new A.d(n.gbR(),n.gbW()),new A.d(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.a3(new A.d(n.gbR(),n.gbW()),new A.d(1,m))}return B.i_}}
A.cW.prototype={
gH(){return new A.d(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.ge8()){s.b=r.a.a;++s.c}return s.c<r.geO()},
$ia5:1}
A.qU.prototype={
br(a,b){if(b==null){b=a
a=0}return this.a.a4(b-a)+a},
U(a){return this.br(a,null)},
aB(a,b){if(b==null){b=a
a=0}return this.a.a4(b+1-a)+a},
km(a){return this.aB(a,null)},
aE(a,b){var s=this.a
if(b==null)return s.hF()*a
else return s.hF()*(b-a)+a},
aP(a){return this.aE(a,null)},
pD(a,b){var s=B.e.bP(b)
return this.aP(1)<b-s?s+1:s},
l_(a,b,c){var s,r
c.i("E<0>").a(b)
s=this.U(b.length)
if(!(s>=0&&s<b.length))return A.a(b,s)
r=b[s]
B.a.h(b,s,B.a.gco(b))
B.a.kU(b)
return r},
cP(a,b){var s
if(b<0)throw A.n(A.aG('The argument "range" must be zero or greater.',null))
s=this.km(b)
if(s<=this.km(b))return a+s
else return a-b-1+s},
hT(a,b){var s=this.a
for(;;){if(!(s.a4(b)===0))break;++a}return a}}
A.lU.prototype={
gb3(){return Math.max(Math.abs(this.gm()),Math.abs(this.gp()))},
gaF(){var s=this
return s.gm()*s.gm()+s.gp()*s.gp()},
gI(a){return Math.sqrt(this.gaF())},
gky(){var s,r,q,p=this,o=null,n=p.gm(),m=p.gp()
A:{s=n<0
r=s
if(r&&p.gp()/p.gm()>=2){r=B.M
break A}if(s&&p.gp()/p.gm()>=0.5){r=B.V
break A}if(s&&p.gp()/p.gm()>=-0.5){r=B.T
break A}if(s&&p.gp()/p.gm()>=-2){r=B.U
break A}if(s){r=B.L
break A}q=n>0
r=q
if(r&&p.gp()/p.gm()>=2){r=B.L
break A}if(q&&p.gp()/p.gm()>=0.5){r=B.R
break A}if(q&&p.gp()/p.gm()>=-0.5){r=B.Q
break A}if(q&&p.gp()/p.gm()>=-2){r=B.S
break A}if(q){r=B.M
break A}if(m<0){r=B.M
break A}if(m>0){r=B.L
break A}r=B.r
break A}return r},
gbC(){var s,r=A.b([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a6[s]))
return r},
gdL(){var s,r=A.b([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.au[s]))
return r},
aJ(a,b){A.u(b)
return new A.d(this.gm()*b,this.gp()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.d(r.gm()+b.gm(),r.gp()+b.gp())
break A}if(A.fA(b)){s=new A.d(r.gm()+b,r.gp()+b)
break A}s=A.a2(A.aG("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gm()
r=b.gm()
q=this.gp()
p=b.gp()
break A}return new A.d(s-r,q-p)},
bh(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()>b.gaF()
break A}if(typeof b=="number"){s=this.gaF()>b*b
break A}s=A.a2(A.aG("Operand must be a number or Vec.",null))}return s},
cS(a,b){var s
A:{s=this.gaF()>=b*b
break A}return s},
ef(a,b){var s
A:{if(t.u.b(b)){s=this.gaF()<b.gaF()
break A}if(typeof b=="number"){s=this.gaF()<b*b
break A}s=A.a2(A.aG("Operand must be a number or Vec.",null))}return s},
ee(a,b){var s
A:{s=this.gaF()<=b*b
break A}return s},
t(a){return""+this.gm()+", "+this.gp()}}
A.d.prototype={
Y(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gm()&&this.b===b.gp()},
ga1(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.c.A(r*(r+1),2)+s},
gm(){return this.a},
gp(){return this.b}}
A.na.prototype={}
A.uO.prototype={}
A.ik.prototype={}
A.ml.prototype={}
A.il.prototype={$iAb:1}
A.tf.prototype={
$1(a){return this.a.$1(A.P(a))},
$S:3}
A.lL.prototype={}
A.uc.prototype={
$0(){$.y.u().d=!0
return null},
$S:0}
A.ud.prototype={
$1(a){A.P(a)
$.nk=A.u(a.location)===3?0:A.u(a.keyCode)
$.ye=A.dC(a.ctrlKey)},
$S:146}
A.ue.prototype={
$1(a){A.vk()},
$S:3}
A.tK.prototype={
$1(a){A.AX()},
$S:3}
A.tL.prototype={
$1(a){var s,r,q,p,o=$.nO
if(o==null)return
s=B.e.M(A.bI(a.offsetX))
r=B.e.M(A.bI(a.offsetY))
q=this.a
s=B.c.cb(s,q.z)
q=B.c.cb(r,q.Q)
r=o.w
r===$&&A.c()
r=r.r
p=new A.d(s,q).F(0,new A.d(r.gbR(),r.gbW()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.c()
s=s.w.B(p.a,p.b)
if(s instanceof A.ae){if($.fy.G(0,s))$.fy.af(0,s)
else $.fy.j(0,s)
A.vk()}},
$S:3}
A.tM.prototype={
$1(a){var s,r,q,p,o
for(s=this.a,r=v.G,q=0;q<$.fz.length;++q){p=$.fz[q]
if(p.a===s){$.c2.b=p
p=A.c3(A.P(r.document).querySelector("#game"))
p.toString
o=$.c2.b
if(o===$.c2)A.a2(A.dV(""))
p.append(o.b)}else p.b.remove()}A.xO()
A.vk()
A.P(A.P(r.window).localStorage).setItem("font",s)},
$S:3}
A.tR.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.P(A.P(g.document).querySelectorAll(".debug"))
for(s=0;s<A.u(f.length);++s){r=A.c3(A.P(g.document).body)
r.toString
q=A.c3(f.item(s))
q.toString
A.P(r.removeChild(q))}p=$.nO
if(p==null)return
r=A.z($.fy)
$.fy.mB(r.i("B(1)").a(new A.tS()),!0)
for(r=A.va($.fy,$.fy.r,r.c),q=r.$ti.c;r.q();){o=r.d
if(o==null)o=q.a(o)
n=p.w
n===$&&A.c()
n=n.r
m=o.y
if(n.G(0,m)){l=n.a
k=l.a
n=n.b
l=l.b
j=m.S(0,new A.d(Math.min(k,k+n.a),Math.min(l,l+n.b)))
i=A.zl(o)
if(i==null)continue
h=A.P(A.P(g.document).createElement("pre"))
h.className="debug"
A.P(h.style).display="inline-block"
o=$.c2.b
if(o===$.c2)A.a2(A.dV(""))
n=o.d
m=o.b
l=B.c.M(A.u(m.offsetLeft))
o=o.e
m=B.c.M(A.u(m.offsetTop))
A.P(h.style).left=B.c.t((j.a+1)*n+l+4)
A.P(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.P(A.c3(A.P(g.document).body).children)}}},
$S:0}
A.tS.prototype={
$1(a){return t.B.a(a).z<=0},
$S:147}
A.lv.prototype={
a2(a){t.d.a(a)
B.a.j($.l,a)
A.T()
this.lA(a)},
bg(a){t.d.a(a)
if(0>=$.l.length)return A.a($.l,-1)
$.l.pop()
B.a.j($.l,a)
A.T()
this.lz(a)}};(function aliases(){var s=J.ds.prototype
s.lx=s.t
s=A.h0.prototype
s.lw=s.V
s=A.hx.prototype
s.ik=s.bp
s=A.cQ.prototype
s.fC=s.a9
s.fB=s.a7
s=A.e6.prototype
s.em=s.a9
s.ly=s.ai
s=A.ip.prototype
s.il=s.cA
s=A.cA.prototype
s.lA=s.a2
s.W=s.px
s.lz=s.bg})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"B7","zB",148)
r(J.t.prototype,"gom","j",150)
q(A,"Bk","x2",2)
p(A,"BK","Al",26)
p(A,"BL","Am",26)
p(A,"BM","An",26)
q(A,"xX","BD",0)
p(A,"BR","AT",30)
p(A,"y1","Bm",4)
p(A,"BV","xK",4)
p(A,"BW","xL",4)
p(A,"a4","B4",5)
p(A,"Cu","AP",8)
p(A,"Cx","Bs",8)
p(A,"Cv","AQ",8)
p(A,"Cy","Bt",8)
p(A,"Ct","AO",8)
p(A,"Cw","Br",8)
o(A.fd.prototype,"gp9","pa","1(r)")
p(A,"vm","Bq",17)
p(A,"nh","Bp",5)
var k
n(k=A.eu.prototype,"glk","ll",84)
n(k,"glm","ln",85)
m(A.bX.prototype,"gl4",0,1,null,["$2$wasUnequipped","$1"],["fl","c7"],88,0,0)
o(A.hd.prototype,"gmI","bM",36)
s(A,"Ca","zw",16)
s(A,"y7","zt",16)
s(A,"C9","zv",16)
s(A,"u7","zu",16)
s(A,"Ci","zN",25)
s(A,"y9","zM",25)
s(A,"ya","zO",25)
o(k=A.b5.prototype,"gi3","fo",41)
o(k,"glX","lY",9)
o(A.hW.prototype,"gi3","fo",41)
o(k=A.e6.prototype,"go7","o8",9)
o(k,"gey","bZ",13)
l(A.ii.prototype,"gjj","eC",0)
o(A.iH.prototype,"gey","bZ",13)
o(A.iG.prototype,"gey","bZ",13)
o(A.fq.prototype,"gey","bZ",13)
l(k=A.ic.prototype,"gnj","nk",0)
l(k,"gmV","mW",0)
l(k,"gmr","ms",0)
l(k,"goj","ol",0)
l(k,"gmL","mM",0)
l(k,"gn5","n6",0)
l(k,"gm3","m4",0)
l(k,"gnh","ni",0)
l(k,"go3","o4",0)
l(k,"go1","o2",0)
l(k,"go5","o6",0)
o(k=A.cA.prototype,"gn1","n2",3)
o(k,"gn3","n4",3)
o(k,"gnY","nZ",145)
q(A,"Cg","xO",0)
p(A,"Cb","AR",9)
p(A,"Cc","AS",13)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.Q,null)
q(A.Q,[A.uR,J.ku,A.hU,J.b4,A.as,A.a1,A.r1,A.k,A.c9,A.bs,A.d3,A.i4,A.i6,A.bu,A.aI,A.dA,A.c_,A.eC,A.iv,A.di,A.rW,A.qs,A.iI,A.ap,A.pS,A.c8,A.cR,A.dW,A.hn,A.iw,A.id,A.lF,A.n5,A.td,A.cb,A.mw,A.n9,A.tE,A.al,A.cp,A.mh,A.io,A.bG,A.m5,A.i0,A.iO,A.is,A.fi,A.mL,A.d6,A.ec,A.jJ,A.jL,A.tt,A.dO,A.te,A.l6,A.i_,A.tg,A.oK,A.aS,A.aO,A.n6,A.rr,A.e3,A.k0,A.qr,A.mF,A.mV,A.kf,A.a7,A.I,A.fb,A.h6,A.eK,A.mR,A.h2,A.fZ,A.ta,A.cm,A.tc,A.aM,A.ie,A.mN,A.bH,A.k7,A.tb,A.ma,A.ah,A.iC,A.m3,A.bd,A.n_,A.nE,A.iB,A.bk,A.l8,A.fW,A.nV,A.jR,A.eU,A.pL,A.hG,A.qv,A.qE,A.im,A.tz,A.e0,A.rV,A.fm,A.fs,A.df,A.kh,A.cJ,A.dy,A.ba,A.dh,A.du,A.bb,A.aH,A.c4,A.dP,A.h8,A.k_,A.aN,A.ke,A.i8,A.kJ,A.hy,A.fd,A.bv,A.c0,A.mT,A.iE,A.qn,A.hD,A.Z,A.cZ,A.cK,A.dM,A.cP,A.dn,A.hw,A.aK,A.cV,A.hZ,A.dl,A.be,A.cl,A.eu,A.c6,A.eT,A.dL,A.bO,A.rT,A.aR,A.ln,A.dv,A.jy,A.aA,A.nM,A.eZ,A.cq,A.oL,A.mZ,A.pP,A.f3,A.ra,A.rc,A.ai,A.bF,A.d0,A.d_,A.v,A.fX,A.jN,A.h3,A.h7,A.cN,A.kl,A.ko,A.kw,A.kM,A.l7,A.lK,A.lP,A.f,A.m,A.kx,A.d7,A.eD,A.qx,A.m4,A.ag,A.rs,A.lH,A.aQ,A.ay,A.ac,A.R,A.bD,A.ca,A.o8,A.F,A.a0,A.kE,A.A,A.dx,A.cA,A.mf,A.mK,A.cW,A.qU,A.lU,A.na,A.uO,A.il,A.lL])
q(J.ku,[J.hk,J.hm,J.hp,J.ho,J.hq,J.dU,J.dp])
q(J.hp,[J.ds,J.t,A.f_,A.hB])
q(J.ds,[J.la,J.dz,J.dq])
r(J.kz,A.hU)
r(J.pH,J.t)
q(J.dU,[J.hl,J.kA])
q(A.as,[A.dr,A.d1,A.kB,A.lS,A.lu,A.mn,A.hs,A.jm,A.cn,A.i7,A.lR,A.e2,A.jK])
r(A.fn,A.a1)
r(A.dj,A.fn)
q(A.k,[A.M,A.cU,A.aq,A.e4,A.i5,A.ib,A.iu,A.m2,A.n4,A.V,A.lV,A.mm,A.mD,A.ab,A.jD,A.a3])
q(A.M,[A.aJ,A.b6,A.cS,A.br,A.ir])
q(A.aJ,[A.i3,A.au,A.cX,A.ht,A.mH])
r(A.cM,A.cU)
r(A.h5,A.e4)
q(A.c_,[A.ft,A.fu,A.fv])
r(A.S,A.ft)
r(A.L,A.fu)
r(A.a_,A.fv)
q(A.eC,[A.bl,A.dT])
q(A.di,[A.jF,A.jG,A.lJ,A.u3,A.u5,A.t7,A.t6,A.tp,A.rE,A.tB,A.q4,A.u8,A.ui,A.uj,A.tX,A.oO,A.oP,A.oN,A.t2,A.nD,A.o2,A.o6,A.t3,A.oH,A.qD,A.u0,A.oe,A.oi,A.oj,A.of,A.og,A.om,A.on,A.oh,A.ok,A.ol,A.pe,A.ph,A.nx,A.ny,A.nv,A.nA,A.nu,A.nz,A.u_,A.up,A.uk,A.ur,A.rb,A.nW,A.pO,A.pN,A.qV,A.rS,A.rR,A.o_,A.o0,A.o1,A.oc,A.od,A.oW,A.pU,A.pW,A.u2,A.qF,A.qG,A.qK,A.qL,A.qI,A.qJ,A.qH,A.qq,A.qp,A.q6,A.qY,A.qX,A.oC,A.oA,A.oX,A.rq,A.or,A.op,A.pb,A.qg,A.qh,A.qi,A.qf,A.nH,A.nF,A.nG,A.nB,A.nC,A.oI,A.pQ,A.rm,A.rp,A.ro,A.oy,A.ou,A.oz,A.ov,A.ox,A.o7,A.oV,A.oU,A.oS,A.rN,A.rO,A.pt,A.pu,A.q9,A.qc,A.qd,A.qa,A.qb,A.pq,A.rU,A.oQ,A.qk,A.ql,A.qm,A.qj,A.r4,A.r5,A.r3,A.rk,A.rh,A.os,A.ot,A.qZ,A.um,A.rC,A.rD,A.rz,A.rA,A.rt,A.rJ,A.tC,A.tI,A.tJ,A.qM,A.qN,A.tf,A.ud,A.ue,A.tK,A.tL,A.tM,A.tS])
q(A.jF,[A.qB,A.t8,A.t9,A.tF,A.th,A.tl,A.tk,A.tj,A.ti,A.to,A.tn,A.tm,A.rF,A.tA,A.tU,A.o3,A.pi,A.pf,A.pn,A.po,A.pm,A.pj,A.pp,A.pk,A.pd,A.pg,A.pl,A.nw,A.tZ,A.tV,A.tW,A.ub,A.ul,A.ua,A.ug,A.nZ,A.nX,A.qR,A.qS,A.qP,A.qT,A.qQ,A.qO,A.nP,A.nR,A.nS,A.nQ,A.pV,A.q_,A.q0,A.pY,A.pZ,A.q1,A.r7,A.pB,A.rl,A.oo,A.ps,A.q8,A.p5,A.p6,A.p7,A.p8,A.p9,A.pa,A.re,A.rf,A.rL,A.rK,A.uc,A.tR])
r(A.hF,A.d1)
q(A.lJ,[A.lE,A.ew])
q(A.ap,[A.c7,A.iq,A.mG])
q(A.jG,[A.pI,A.u4,A.tq,A.q5,A.tu,A.oM,A.nI,A.nJ,A.o4,A.o5,A.tx,A.uq,A.nY,A.pM,A.rQ,A.tw,A.p0,A.p_,A.oZ,A.oY,A.oB,A.pX,A.r8,A.r9,A.oq,A.pD,A.py,A.px,A.pw,A.pE,A.pz,A.pA,A.pC,A.oJ,A.pR,A.rn,A.ow,A.oT,A.pr,A.q3,A.q2,A.r6,A.rj,A.rg,A.ri,A.qz,A.qA,A.r_,A.r0,A.un,A.uo,A.rB,A.ru,A.rv,A.rw,A.rx,A.ry,A.oa,A.ob,A.rI,A.rP,A.t5,A.t4])
r(A.hr,A.c7)
q(A.hB,[A.kV,A.f0])
q(A.f0,[A.ix,A.iz])
r(A.iy,A.ix)
r(A.hz,A.iy)
r(A.iA,A.iz)
r(A.hA,A.iA)
q(A.hz,[A.kW,A.kX])
q(A.hA,[A.kY,A.kZ,A.l_,A.l0,A.l1,A.hC,A.l2])
r(A.iJ,A.mn)
r(A.ig,A.mh)
r(A.mX,A.iO)
r(A.fr,A.iq)
r(A.iF,A.fi)
r(A.d5,A.iF)
r(A.kD,A.hs)
r(A.kC,A.jJ)
q(A.jL,[A.pK,A.pJ])
r(A.ts,A.tt)
q(A.cn,[A.fa,A.ks])
q(A.a7,[A.mo,A.mr,A.lD,A.m6,A.mg,A.n2,A.nb])
r(A.k2,A.mo)
r(A.k6,A.mr)
q(A.I,[A.k9,A.kO,A.m9,A.kK,A.h0,A.eF,A.eI,A.mb,A.mc,A.md,A.mu,A.mP,A.mQ,A.fo,A.eX,A.ms,A.eM,A.eL,A.eR,A.kn,A.lm,A.eS,A.eY,A.kQ,A.f4,A.lc,A.jj,A.ff,A.fe,A.lz,A.fl,A.mO,A.ka,A.jn,A.kv,A.l9,A.lX,A.l4,A.jE,A.lp,A.jB])
q(A.fb,[A.lY,A.jk,A.hK])
q(A.lD,[A.m8,A.me,A.mi,A.mk,A.mp,A.mq,A.mv,A.mz,A.mA,A.mB,A.mC,A.mI,A.mJ,A.mM,A.mU,A.mY,A.n1,A.n8,A.nc,A.nd])
r(A.jr,A.m8)
r(A.jA,A.me)
r(A.jM,A.mi)
r(A.jW,A.mk)
r(A.k3,A.mp)
r(A.k4,A.mq)
r(A.kc,A.mv)
r(A.ki,A.mz)
r(A.kj,A.mA)
r(A.kp,A.mB)
r(A.kr,A.mC)
r(A.kG,A.mI)
r(A.kI,A.mJ)
r(A.kP,A.mM)
r(A.li,A.mU)
r(A.lw,A.mY)
r(A.ly,A.n1)
r(A.lM,A.n8)
r(A.m0,A.nc)
r(A.m1,A.nd)
r(A.jp,A.m6)
q(A.kO,[A.m7,A.jI,A.n3])
r(A.jq,A.m7)
r(A.jH,A.mg)
r(A.lB,A.n2)
r(A.lC,A.n3)
r(A.lZ,A.nb)
r(A.js,A.m9)
q(A.kK,[A.jw,A.lO])
q(A.h0,[A.eQ,A.mt,A.f6,A.ev,A.eE,A.fc])
r(A.eN,A.mt)
q(A.te,[A.eG,A.dY,A.dw,A.hj,A.bR,A.rM,A.hR,A.hS,A.km,A.bY,A.hE,A.e_,A.cx,A.fj,A.fp,A.ji,A.mj])
r(A.ey,A.mb)
r(A.ez,A.mc)
r(A.jz,A.md)
r(A.eO,A.mu)
r(A.f7,A.mP)
r(A.lb,A.mQ)
r(A.k8,A.ms)
q(A.lm,[A.kq,A.mW])
q(A.eK,[A.kN,A.kT,A.n0])
r(A.ll,A.mW)
q(A.mO,[A.f1,A.f2])
r(A.bZ,A.mR)
q(A.bZ,[A.jV,A.kb,A.k1,A.k5,A.lh,A.lx])
r(A.kd,A.h2)
q(A.ta,[A.nN,A.pc])
q(A.tc,[A.mE,A.n7])
q(A.tb,[A.oD,A.jx])
q(A.bd,[A.by,A.lk,A.dk,A.kk,A.hf,A.bW,A.b7,A.bS,A.bE])
r(A.fY,A.lk)
r(A.aj,A.n_)
q(A.aj,[A.dg,A.jl,A.jt,A.ju,A.hx])
q(A.hx,[A.jo,A.jv,A.kF,A.lA,A.lG,A.m_])
q(A.l8,[A.tv,A.qe,A.tD])
q(A.bk,[A.eA,A.eB,A.lt,A.eW,A.f5,A.fg])
q(A.lt,[A.eH,A.eV])
q(A.kv,[A.jU,A.jX,A.lQ,A.lT,A.lN])
q(A.dy,[A.bq,A.aL,A.N])
q(A.c4,[A.he,A.h_,A.hI,A.dN,A.hb,A.hQ,A.hH])
q(A.i8,[A.lW,A.f8])
q(A.dM,[A.aX,A.lr,A.cc,A.dR])
q(A.bq,[A.ax,A.ae])
r(A.cy,A.be)
q(A.cy,[A.i1,A.fU,A.ia,A.hh])
r(A.eJ,A.mm)
r(A.bX,A.mD)
q(A.eZ,[A.co,A.cH,A.cG])
q(A.v,[A.jh,A.ha,A.jS,A.hd,A.hv,A.lI,A.i9,A.hg,A.cQ,A.b5,A.e6,A.kg,A.kL,A.l3,A.ld,A.hT,A.ic,A.cB])
q(A.jS,[A.fT,A.l5])
q(A.cQ,[A.jY,A.ky,A.kR])
q(A.b5,[A.dm,A.dQ,A.hi,A.dZ,A.mS,A.hW,A.e5,A.e7])
q(A.d7,[A.ih,A.ij,A.iD,A.fw])
q(A.mS,[A.lf,A.lg])
q(A.e6,[A.d4,A.it,A.ii,A.iH,A.fq])
q(A.d4,[A.ip,A.iG])
q(A.ip,[A.my,A.mx])
q(A.eD,[A.kU,A.fh])
q(A.qx,[A.pv,A.pT,A.r2,A.rd])
q(A.ld,[A.h1,A.h9,A.hc,A.hV])
q(A.cB,[A.ne,A.nf])
q(A.dx,[A.aY,A.hP])
r(A.ls,A.hP)
r(A.aC,A.mj)
r(A.d,A.na)
r(A.ik,A.i0)
r(A.ml,A.ik)
r(A.lv,A.cA)
s(A.fn,A.dA)
s(A.ix,A.a1)
s(A.iy,A.aI)
s(A.iz,A.a1)
s(A.iA,A.aI)
s(A.mo,A.Z)
s(A.mr,A.Z)
s(A.m8,A.Z)
s(A.me,A.Z)
s(A.mi,A.Z)
s(A.mk,A.Z)
s(A.mp,A.cZ)
s(A.mq,A.Z)
s(A.mv,A.Z)
s(A.mz,A.Z)
s(A.mA,A.Z)
s(A.mB,A.cZ)
s(A.mC,A.Z)
s(A.mI,A.Z)
s(A.mJ,A.Z)
s(A.mM,A.Z)
s(A.mU,A.Z)
s(A.mY,A.Z)
s(A.n1,A.Z)
s(A.n8,A.Z)
s(A.nc,A.Z)
s(A.nd,A.Z)
s(A.m6,A.cK)
s(A.m7,A.kh)
s(A.mg,A.cK)
s(A.n2,A.cK)
s(A.n3,A.kh)
s(A.nb,A.cZ)
s(A.m9,A.h6)
s(A.mt,A.cJ)
s(A.mb,A.cJ)
s(A.mc,A.cJ)
s(A.md,A.cJ)
s(A.mu,A.cJ)
s(A.mP,A.cJ)
s(A.mQ,A.cJ)
s(A.ms,A.h6)
s(A.mW,A.h6)
s(A.mR,A.aK)
s(A.n_,A.aK)
s(A.mm,A.eT)
s(A.mD,A.eT)
s(A.mj,A.lU)
s(A.na,A.lU)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",H:"double",ar:"num",r:"String",B:"bool",aO:"Null",E:"List",Q:"Object",bh:"Map",aE:"JSObject"},mangledNames:{},types:["~()","B(d)","e()","~(aE)","r(r)","e(e)","~(N)","H()","I(d)","B(N)","~(d)","B(aC)","e(e,cl)","e?(N)","~(r,@)","e(e,r)","e(aR,aR)","H(e)","~(aj,e)","E<r>(e)","F(F,F)","~(N,d)","e(e,e)","B(dn)","fs()","e(aA,aA)","~(~())","r(cu)","H(H,dh)","aO(@)","@(@)","H(H,cl)","~(ae)","~(Q?,Q?)","B(cV)","aO()","~(aC)","e(ae)","Q?(Q?)","B(aA)","dm()","e(N)","E<d>()","~(dx)","~(@)","B(aR)","~(e,e,a0)","H(H,du)","~(r,r)","aO(e)","~(cm)","B(bd)","eS()","B(H,H)","~(bA,H)","@(@,r)","~(r,H)","aO(Q,fk)","eH()","eA()","eB()","eW()","fg()","eV()","f5()","~(aA,d)","d()","H(e,e)","aO(~())","f2(d)","f1(d)","d0(fm,e)","~(e,e,e)","f9<ar>()","~(e,e)","@(r)","E<d>(e)","B(H)","aO(d,bb,ar,e)","aO(d)","r(dg)","~(e)","aO(H)","fo(e)","~(dP,e(e))","~(cx,e(e))","e(e,N?)","B(r)","dL(N{wasUnequipped:B})","N(N)","ey(e)","ez(d,bb,ar,e)","eN(e)","eO(d,bb,ar,e)","~(aC,B)","~(d,e)","d_(d)","bX()","~(d,bX)","f6(e)","e(aS<e,a7>,aS<e,a7>)","f7(d,bb,ar,e)","~(e,aC,r)","ev(e)","~(dv,bX)","eE(e)","k<ay<N?>>()","eX(d,bb,ar,e)","k<ay<aR>>()","B(e)","eI()","k<ay<aA>>()","e7()","dQ()","e5()","eF()","dZ()","f4()","B(N?)","fc()","eY()","eQ()","r(cV)","r(cP)","fl()","e(ae,ae)","~(cy)","r(bb)","~(r,F[F?])","B(aD)","eR()","B(bq,d_)","~(r,F,e{total:e?})","B(bq)","B(ag)","e(e,ag)","B(e,e)","Q?(Q)","B(cP)","~(r,dv)","B(bY)","ff()","fe(d)","e(e,R)","eM()","~(ar)","aO(aE)","B(ae)","e(@,@)","eL(d)","~(Q?)","B(B,e)","~(r,e,e)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.S&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.L&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.a_&&A.Cj(a,b.a)}}
A.AG(v.typeUniverse,JSON.parse('{"la":"ds","dz":"ds","dq":"ds","Do":"f_","hk":{"B":[],"ak":[]},"hm":{"ak":[]},"hp":{"aE":[]},"ds":{"aE":[]},"t":{"E":["1"],"M":["1"],"aE":[],"k":["1"]},"kz":{"hU":[]},"pH":{"t":["1"],"E":["1"],"M":["1"],"aE":[],"k":["1"]},"b4":{"a5":["1"]},"dU":{"H":[],"ar":[],"aB":["ar"]},"hl":{"H":[],"e":[],"ar":[],"aB":["ar"],"ak":[]},"kA":{"H":[],"ar":[],"aB":["ar"],"ak":[]},"dp":{"r":[],"aB":["r"],"qy":[],"ak":[]},"dr":{"as":[]},"dj":{"a1":["e"],"dA":["e"],"E":["e"],"M":["e"],"k":["e"],"a1.E":"e","dA.E":"e"},"M":{"k":["1"]},"aJ":{"M":["1"],"k":["1"]},"i3":{"aJ":["1"],"M":["1"],"k":["1"],"aJ.E":"1","k.E":"1"},"c9":{"a5":["1"]},"cU":{"k":["2"],"k.E":"2"},"cM":{"cU":["1","2"],"M":["2"],"k":["2"],"k.E":"2"},"bs":{"a5":["2"]},"au":{"aJ":["2"],"M":["2"],"k":["2"],"aJ.E":"2","k.E":"2"},"aq":{"k":["1"],"k.E":"1"},"d3":{"a5":["1"]},"e4":{"k":["1"],"k.E":"1"},"h5":{"e4":["1"],"M":["1"],"k":["1"],"k.E":"1"},"i4":{"a5":["1"]},"i5":{"k":["1"],"k.E":"1"},"i6":{"a5":["1"]},"ib":{"k":["1"],"k.E":"1"},"bu":{"a5":["1"]},"fn":{"a1":["1"],"dA":["1"],"E":["1"],"M":["1"],"k":["1"]},"cX":{"aJ":["1"],"M":["1"],"k":["1"],"aJ.E":"1","k.E":"1"},"S":{"ft":[],"c_":[]},"L":{"fu":[],"c_":[]},"a_":{"fv":[],"c_":[]},"eC":{"bh":["1","2"]},"bl":{"eC":["1","2"],"bh":["1","2"]},"iu":{"k":["1"],"k.E":"1"},"iv":{"a5":["1"]},"dT":{"eC":["1","2"],"bh":["1","2"]},"hF":{"d1":[],"as":[]},"kB":{"as":[]},"lS":{"as":[]},"iI":{"fk":[]},"di":{"dS":[]},"jF":{"dS":[]},"jG":{"dS":[]},"lJ":{"dS":[]},"lE":{"dS":[]},"ew":{"dS":[]},"lu":{"as":[]},"c7":{"ap":["1","2"],"uT":["1","2"],"bh":["1","2"],"ap.K":"1","ap.V":"2"},"b6":{"M":["1"],"k":["1"],"k.E":"1"},"c8":{"a5":["1"]},"cS":{"M":["1"],"k":["1"],"k.E":"1"},"cR":{"a5":["1"]},"br":{"M":["aS<1,2>"],"k":["aS<1,2>"],"k.E":"aS<1,2>"},"dW":{"a5":["aS<1,2>"]},"hr":{"c7":["1","2"],"ap":["1","2"],"uT":["1","2"],"bh":["1","2"],"ap.K":"1","ap.V":"2"},"ft":{"c_":[]},"fu":{"c_":[]},"fv":{"c_":[]},"hn":{"A5":[],"qy":[]},"iw":{"hO":[],"cu":[]},"m2":{"k":["hO"],"k.E":"hO"},"id":{"a5":["hO"]},"lF":{"cu":[]},"n4":{"k":["cu"],"k.E":"cu"},"n5":{"a5":["cu"]},"f_":{"aE":[],"uK":[],"ak":[]},"hB":{"aE":[]},"kV":{"uL":[],"aE":[],"ak":[]},"f0":{"bP":["1"],"aE":[]},"hz":{"a1":["H"],"E":["H"],"bP":["H"],"M":["H"],"aE":[],"k":["H"],"aI":["H"]},"hA":{"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"]},"kW":{"oE":[],"a1":["H"],"E":["H"],"bP":["H"],"M":["H"],"aE":[],"k":["H"],"aI":["H"],"ak":[],"a1.E":"H","aI.E":"H"},"kX":{"oF":[],"a1":["H"],"E":["H"],"bP":["H"],"M":["H"],"aE":[],"k":["H"],"aI":["H"],"ak":[],"a1.E":"H","aI.E":"H"},"kY":{"p2":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"kZ":{"p3":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"l_":{"p4":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"l0":{"rY":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"l1":{"rZ":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"hC":{"t_":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"l2":{"t0":[],"a1":["e"],"E":["e"],"bP":["e"],"M":["e"],"aE":[],"k":["e"],"aI":["e"],"ak":[],"a1.E":"e","aI.E":"e"},"mn":{"as":[]},"iJ":{"d1":[],"as":[]},"al":{"a5":["1"]},"V":{"k":["1"],"k.E":"1"},"cp":{"as":[]},"ig":{"mh":["1"]},"bG":{"eP":["1"]},"iO":{"xk":[]},"mX":{"iO":[],"xk":[]},"f9":{"M":["1"],"k":["1"]},"iq":{"ap":["1","2"],"bh":["1","2"]},"fr":{"iq":["1","2"],"ap":["1","2"],"bh":["1","2"],"ap.K":"1","ap.V":"2"},"ir":{"M":["1"],"k":["1"],"k.E":"1"},"is":{"a5":["1"]},"d5":{"fi":["1"],"hX":["1"],"M":["1"],"k":["1"]},"d6":{"a5":["1"]},"a1":{"E":["1"],"M":["1"],"k":["1"]},"ap":{"bh":["1","2"]},"ht":{"f9":["1"],"aJ":["1"],"M":["1"],"k":["1"],"aJ.E":"1","k.E":"1"},"ec":{"a5":["1"]},"fi":{"hX":["1"],"M":["1"],"k":["1"]},"iF":{"fi":["1"],"hX":["1"],"M":["1"],"k":["1"]},"mG":{"ap":["r","@"],"bh":["r","@"],"ap.K":"r","ap.V":"@"},"mH":{"aJ":["r"],"M":["r"],"k":["r"],"aJ.E":"r","k.E":"r"},"hs":{"as":[]},"kD":{"as":[]},"kC":{"jJ":["Q?","r"]},"dO":{"aB":["dO"]},"H":{"ar":[],"aB":["ar"]},"e":{"ar":[],"aB":["ar"]},"E":{"M":["1"],"k":["1"]},"ar":{"aB":["ar"]},"hO":{"cu":[]},"hX":{"M":["1"],"k":["1"]},"r":{"aB":["r"],"qy":[]},"jm":{"as":[]},"d1":{"as":[]},"cn":{"as":[]},"fa":{"as":[]},"ks":{"as":[]},"i7":{"as":[]},"lR":{"as":[]},"e2":{"as":[]},"jK":{"as":[]},"l6":{"as":[]},"i_":{"as":[]},"n6":{"fk":[]},"e3":{"Ac":[]},"mF":{"uY":[]},"mV":{"uY":[]},"kf":{"zj":[]},"k2":{"Z":[],"a7":[]},"k6":{"Z":[],"a7":[]},"k9":{"I":[]},"kO":{"I":[]},"lY":{"fb":[]},"jr":{"Z":[],"a7":[]},"jA":{"Z":[],"a7":[]},"jM":{"Z":[],"a7":[]},"jW":{"Z":[],"a7":[]},"k3":{"cZ":[],"a7":[]},"k4":{"Z":[],"a7":[]},"kc":{"Z":[],"a7":[]},"ki":{"Z":[],"a7":[]},"kj":{"Z":[],"a7":[]},"kp":{"cZ":[],"a7":[]},"kr":{"Z":[],"a7":[]},"kG":{"Z":[],"a7":[]},"kI":{"Z":[],"a7":[]},"kP":{"Z":[],"a7":[]},"li":{"Z":[],"a7":[]},"lw":{"Z":[],"a7":[]},"ly":{"Z":[],"a7":[]},"lD":{"a7":[]},"jk":{"fb":[]},"lM":{"Z":[],"a7":[]},"m0":{"Z":[],"a7":[]},"m1":{"Z":[],"a7":[]},"jp":{"cK":[],"a7":[]},"jq":{"I":[]},"jH":{"cK":[],"a7":[]},"jI":{"I":[]},"lB":{"cK":[],"a7":[]},"lC":{"I":[]},"lZ":{"cZ":[],"a7":[]},"js":{"I":[]},"jw":{"I":[]},"eQ":{"I":[]},"eN":{"I":[]},"f6":{"I":[]},"ev":{"I":[]},"eE":{"I":[]},"fc":{"I":[]},"h0":{"I":[]},"eF":{"I":[]},"eI":{"I":[]},"ey":{"I":[]},"ez":{"I":[]},"eO":{"I":[]},"f7":{"I":[]},"fo":{"I":[]},"eX":{"I":[]},"jz":{"I":[]},"lb":{"I":[]},"eM":{"I":[]},"eL":{"I":[]},"k8":{"I":[]},"eR":{"I":[]},"kn":{"I":[]},"eS":{"I":[]},"kq":{"I":[]},"eY":{"I":[]},"kN":{"eK":[]},"kQ":{"I":[]},"f4":{"I":[]},"lc":{"I":[]},"jj":{"I":[]},"ff":{"I":[]},"fe":{"I":[]},"lm":{"I":[]},"ll":{"I":[]},"lz":{"I":[]},"fl":{"I":[]},"f1":{"I":[]},"f2":{"I":[]},"mO":{"I":[]},"jV":{"bZ":[],"aK":[]},"kb":{"bZ":[],"aK":[]},"kd":{"h2":[]},"mE":{"bA":[]},"n7":{"bA":[]},"aM":{"bA":[]},"ie":{"bA":[]},"mN":{"bA":[]},"bH":{"bA":[]},"ma":{"e1":[]},"ah":{"e1":[]},"iC":{"e1":[]},"m3":{"e1":[]},"by":{"bd":[]},"fY":{"bd":[]},"dk":{"bd":[]},"kk":{"bd":[]},"hf":{"bd":[]},"bW":{"bd":[]},"b7":{"bd":[]},"bS":{"bd":[]},"bE":{"bd":[]},"k1":{"bZ":[],"aK":[]},"k5":{"bZ":[],"aK":[]},"lh":{"bZ":[],"aK":[]},"lx":{"bZ":[],"aK":[]},"dg":{"aj":[],"aK":[],"aB":["aj"]},"jl":{"aj":[],"aK":[],"aB":["aj"]},"jt":{"aj":[],"aK":[],"aB":["aj"]},"ju":{"aj":[],"aK":[],"aB":["aj"]},"hx":{"aj":[],"aK":[],"aB":["aj"]},"jo":{"aj":[],"aK":[],"aB":["aj"]},"jv":{"aj":[],"aK":[],"aB":["aj"]},"kF":{"aj":[],"aK":[],"aB":["aj"]},"lA":{"aj":[],"aK":[],"aB":["aj"]},"lG":{"aj":[],"aK":[],"aB":["aj"]},"m_":{"aj":[],"aK":[],"aB":["aj"]},"eA":{"bk":[]},"eB":{"bk":[]},"eH":{"bk":[]},"eV":{"bk":[]},"eW":{"bk":[]},"f5":{"bk":[]},"fg":{"bk":[]},"lt":{"bk":[]},"ka":{"I":[]},"jn":{"I":[]},"kv":{"I":[]},"l9":{"I":[]},"jU":{"I":[]},"jX":{"I":[]},"lQ":{"I":[]},"lT":{"I":[]},"kK":{"I":[]},"lN":{"I":[]},"lO":{"I":[]},"lX":{"I":[]},"l4":{"I":[]},"jE":{"I":[]},"lp":{"I":[]},"bq":{"dy":[]},"hQ":{"c4":[]},"he":{"c4":[]},"h_":{"c4":[]},"hI":{"c4":[]},"dN":{"c4":[]},"hb":{"c4":[]},"hH":{"c4":[]},"lW":{"i8":[]},"f8":{"i8":[]},"aL":{"dy":[]},"lV":{"k":["d"],"k.E":"d"},"aX":{"dM":[]},"lr":{"dM":[]},"cc":{"dM":[]},"dR":{"dM":[]},"ax":{"bq":[],"dy":[]},"bZ":{"aK":[]},"hK":{"fb":[]},"aj":{"aK":[],"aB":["aj"]},"cy":{"be":["e"]},"be":{"be.T":"1"},"i1":{"cy":[],"be":["e"],"be.T":"e"},"fU":{"cy":[],"be":["e"],"be.T":"e"},"ia":{"cy":[],"be":["e"],"be.T":"e"},"hh":{"cy":[],"be":["e"],"be.T":"e"},"eJ":{"eT":[],"k":["N"],"k.E":"N"},"bX":{"eT":[],"k":["N"],"k.E":"N"},"N":{"dy":[],"aB":["N"]},"ae":{"bq":[],"dy":[]},"jB":{"I":[]},"co":{"eZ":[]},"cH":{"eZ":[]},"cG":{"eZ":[]},"lk":{"bd":[]},"kT":{"eK":[]},"n0":{"eK":[]},"jh":{"v":["m"],"v.T":"m"},"fX":{"aD":[]},"jN":{"aD":[]},"h3":{"aD":[]},"h7":{"aD":[]},"cN":{"aD":[]},"kl":{"aD":[]},"ko":{"aD":[]},"kw":{"aD":[]},"kM":{"aD":[]},"l7":{"aD":[]},"lK":{"aD":[]},"lP":{"aD":[]},"ha":{"v":["m"],"v.T":"m"},"jS":{"v":["m"]},"fT":{"v":["m"],"v.T":"m"},"l5":{"v":["m"],"v.T":"m"},"hd":{"v":["m"],"v.T":"m"},"hv":{"v":["m"],"v.T":"m"},"lI":{"v":["m"],"v.T":"m"},"i9":{"v":["m"],"v.T":"m"},"hg":{"v":["m"],"v.T":"m"},"jY":{"cQ":[],"v":["m"],"v.T":"m"},"cQ":{"v":["m"]},"ky":{"cQ":[],"v":["m"],"v.T":"m"},"kR":{"cQ":[],"v":["m"],"v.T":"m"},"dm":{"b5":[],"v":["m"],"v.T":"m"},"dQ":{"b5":[],"v":["m"],"v.T":"m"},"hi":{"b5":[],"v":["m"],"v.T":"m"},"b5":{"v":["m"]},"ih":{"d7":[]},"ij":{"d7":[]},"iD":{"d7":[]},"fw":{"d7":[]},"dZ":{"b5":[],"v":["m"],"v.T":"m"},"mS":{"b5":[],"v":["m"]},"lf":{"b5":[],"v":["m"],"v.T":"m"},"lg":{"b5":[],"v":["m"],"v.T":"m"},"hW":{"b5":[],"v":["m"],"v.T":"m"},"e5":{"b5":[],"v":["m"],"v.T":"m"},"e6":{"v":["m"]},"d4":{"v":["m"]},"it":{"v":["m"],"v.T":"m"},"ip":{"d4":[],"v":["m"]},"my":{"d4":[],"v":["m"],"v.T":"m"},"mx":{"d4":[],"v":["m"],"v.T":"m"},"ii":{"v":["m"],"v.T":"m"},"iH":{"v":["m"],"v.T":"m"},"iG":{"d4":[],"v":["m"],"v.T":"m"},"fq":{"v":["m"],"v.T":"m"},"e7":{"b5":[],"v":["m"],"v.T":"m"},"kg":{"v":["m"],"v.T":"m"},"kL":{"v":["m"],"v.T":"m"},"l3":{"v":["m"],"v.T":"m"},"kU":{"eD":[]},"fh":{"eD":[]},"h1":{"v":["m"],"v.T":"m"},"h9":{"v":["m"],"v.T":"m"},"hc":{"v":["m"],"v.T":"m"},"ld":{"v":["m"]},"hV":{"v":["m"],"v.T":"m"},"hT":{"v":["m"],"v.T":"m"},"ic":{"v":["m"],"v.T":"m"},"cB":{"v":["m"]},"ne":{"cB":["aR"],"v":["m"],"v.T":"m","cB.T":"aR"},"nf":{"cB":["aA"],"v":["m"],"v.T":"m","cB.T":"aA"},"aY":{"dx":[]},"ls":{"hP":[],"dx":[]},"hP":{"dx":[]},"ab":{"k":["1"],"k.E":"1"},"jD":{"k":["d"],"k.E":"d"},"mf":{"a5":["d"]},"aC":{"d":[]},"mK":{"a5":["d"]},"a3":{"k":["d"],"k.E":"d"},"cW":{"a5":["d"]},"ik":{"i0":["1"]},"ml":{"ik":["1"],"i0":["1"]},"il":{"Ab":["1"]},"lv":{"cA":["m"],"cA.T":"m"},"p4":{"E":["e"],"M":["e"],"k":["e"]},"t0":{"E":["e"],"M":["e"],"k":["e"]},"t_":{"E":["e"],"M":["e"],"k":["e"]},"p2":{"E":["e"],"M":["e"],"k":["e"]},"rY":{"E":["e"],"M":["e"],"k":["e"]},"p3":{"E":["e"],"M":["e"],"k":["e"]},"rZ":{"E":["e"],"M":["e"],"k":["e"]},"oE":{"E":["H"],"M":["H"],"k":["H"]},"oF":{"E":["H"],"M":["H"],"k":["H"]}}'))
A.AF(v.typeUniverse,JSON.parse('{"M":1,"fn":1,"f0":1,"iF":1,"jL":2,"l8":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.av
return{fD:s("I"),lz:s("Z"),fw:s("df"),Y:s("I()"),bj:s("I(d)"),f0:s("bq"),L:s("cl"),R:s("eu"),dx:s("dg"),g_:s("bk"),eh:s("ab<fZ>"),bG:s("ab<a0>"),o:s("ab<e0>"),lr:s("ab<d_>"),b:s("ab<B>"),C:s("ab<e>"),hE:s("ab<bq?>"),gy:s("ab<bk?>"),cY:s("ab<a0?>"),eJ:s("ab<B?>"),aY:s("b4<d>"),n:s("cp"),fV:s("dh"),P:s("aA"),nA:s("cq<f3>"),r:s("cq<d>"),lo:s("uK"),fW:s("uL"),cI:s("ac"),oC:s("fZ"),gS:s("dj"),aZ:s("F"),jF:s("aQ"),bP:s("aB<@>"),p1:s("bl<r,r>"),cq:s("bl<r,e>"),cs:s("dO"),j:s("aC"),ln:s("cK"),iZ:s("bA"),ox:s("aD"),gt:s("M<@>"),h:s("dP"),fz:s("as"),pk:s("oE"),kI:s("oF"),gY:s("dS"),hB:s("ke"),v:s("a0"),V:s("ax"),lJ:s("cP"),er:s("dn"),_:s("bb"),fb:s("m"),m6:s("p2"),jL:s("p3"),jx:s("p4"),D:s("bX"),W:s("N"),j5:s("b5()"),q:s("aR"),E:s("k<N>"),bq:s("k<r>"),cX:s("k<d>"),e7:s("k<@>"),eI:s("t<a7>"),iA:s("t<I>"),p5:s("t<bq>"),o_:s("t<cl>"),c4:s("t<fW>"),dr:s("t<bk>"),da:s("t<ba>"),kt:s("t<dh>"),fO:s("t<aA>"),bZ:s("t<ac>"),bk:s("t<F>"),G:s("t<aQ>"),c8:s("t<c4>"),eR:s("t<eD>"),x:s("t<aH>"),oO:s("t<eG>"),T:s("t<aC>"),f8:s("t<bA>"),pl:s("t<aD>"),bI:s("t<k_>"),mO:s("t<a0>"),fJ:s("t<f>"),di:s("t<dn>"),o0:s("t<bb>"),f_:s("t<cQ>"),I:s("t<N>"),hm:s("t<c6>"),fv:s("t<eU>"),g:s("t<E<d>>"),ic:s("t<bh<r,Q>>"),kU:s("t<hy>"),lE:s("t<ae>"),a_:s("t<bd>"),w:s("t<Q>"),hL:s("t<bZ>"),dF:s("t<+(r,e)>"),b9:s("t<+(d,N)>"),d3:s("t<+(N?,ba)>"),aP:s("t<+(r,e,r,b5()?)>"),bx:s("t<+(r,e,r,~())>"),hY:s("t<bR>"),gp:s("t<ca<aA>>"),aG:s("t<ca<aR>>"),d4:s("t<bD<aA>>"),mQ:s("t<bD<aR>>"),oW:s("t<ag>"),iO:s("t<du>"),jp:s("t<v<m>>"),hC:s("t<aj>"),aC:s("t<e1>"),s:s("t<r>"),H:s("t<R>"),J:s("t<d0>"),l:s("t<d>"),cz:s("t<m4>"),lv:s("t<im>"),hw:s("t<iB>"),n9:s("t<d7>"),mS:s("t<mZ>"),gk:s("t<H>"),dG:s("t<@>"),t:s("t<e>"),nK:s("t<f9<f3>?>"),k5:s("t<f9<d>?>"),it:s("t<e(aA,aA)>"),m2:s("t<e(aR,aR)>"),bE:s("hm"),bp:s("aE"),dY:s("dq"),dX:s("bP<@>"),d2:s("eU"),hl:s("kE<m>"),hA:s("E<bk>"),aH:s("E<ba>"),ev:s("E<F>"),hy:s("E<aH>"),jP:s("E<eG>"),du:s("E<aC>"),af:s("E<a0>"),aa:s("E<N>"),eF:s("E<eU>"),ew:s("E<bh<r,Q>>"),kz:s("E<bd>"),ez:s("E<Q>"),m1:s("E<bZ>"),p0:s("E<+(F,F)>"),ig:s("E<+(r,e)>"),m:s("E<r>"),nB:s("E<r>(e)"),p:s("E<d0>"),A:s("E<d>"),pa:s("E<iB>"),la:s("E<d7>"),gs:s("E<@>"),jX:s("E<d?>"),dW:s("E<e?>"),aI:s("bY"),cB:s("aS<e,a7>"),ea:s("bh<r,@>"),av:s("bh<@,@>"),de:s("bh<e,a7>"),gQ:s("au<r,r>"),B:s("ae"),d0:s("bd"),iV:s("aO"),K:s("Q"),mh:s("be<H>"),jo:s("f9<ar>"),ho:s("cV"),lZ:s("DB"),aK:s("+()"),lF:s("+(aC,e)"),lu:s("hO"),pj:s("bR"),mF:s("hQ"),b_:s("fd<eu>"),gf:s("e0"),hb:s("ca<aA>"),i0:s("ca<aR>"),o9:s("bD<aA>"),o5:s("bD<aR>"),cv:s("ay<aA>"),bB:s("ay<aR>"),ax:s("ay<N?>"),m7:s("ag"),jK:s("du"),d:s("v<m>"),c3:s("dv"),M:s("aj"),gl:s("fk"),Z:s("cx"),N:s("r"),po:s("r(cu)"),gL:s("r(r)"),bW:s("cZ"),fc:s("R"),jh:s("d_"),U:s("d0"),aJ:s("ak"),do:s("d1"),hM:s("rY"),mC:s("rZ"),nn:s("t_"),ha:s("t0"),cx:s("dz"),u:s("d"),e0:s("aq<aC>"),bC:s("ib<N>"),k:s("bu<N>"),gX:s("ml<aE>"),j_:s("bG<@>"),h0:s("bG<e>"),mp:s("fr<Q?,Q?>"),ak:s("d4"),fC:s("A"),nP:s("mT"),oc:s("V<df>"),kX:s("V<aK>"),mY:s("V<ac>"),oP:s("V<aQ>"),cm:s("V<aH>"),kF:s("V<ay<aA>>"),jE:s("V<ay<aR>>"),d8:s("V<ay<N?>>"),e:s("V<r>"),e6:s("V<d>"),y:s("B"),ca:s("B(aC)"),iW:s("B(Q)"),mN:s("B(d)"),i:s("H"),oF:s("H(e)"),z:s("@"),df:s("@()"),mq:s("@(Q)"),ng:s("@(Q,fk)"),jJ:s("@(d)"),S:s("e"),Q:s("e(e)"),e9:s("bq?"),aT:s("bk?"),gK:s("eP<aO>?"),n3:s("a0?"),c:s("N?"),kf:s("b5()?"),mU:s("aE?"),b8:s("E<aQ>?"),fm:s("E<r>?"),lH:s("E<@>?"),dZ:s("bh<r,@>?"),aL:s("ae?"),X:s("Q?"),jv:s("r?"),jt:s("r(cu)?"),n7:s("d?"),F:s("io<@,@>?"),nF:s("mL?"),fU:s("B?"),hD:s("B(d)?"),dz:s("H?"),i6:s("H(e)?"),aV:s("e?"),lg:s("e(e)?"),ae:s("ar?"),c5:s("~()?"),lT:s("~(cm)?"),cZ:s("ar"),ef:s("~"),O:s("~()"),kc:s("~(cm)"),or:s("~(aA)"),f:s("~(N)"),mH:s("~(N,d)"),lL:s("~(ae)"),lc:s("~(r,@)"),a:s("~(e,e,a0)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hF=J.ku.prototype
B.a=J.t.prototype
B.cd=J.hk.prototype
B.c=J.hl.prototype
B.e=J.dU.prototype
B.i=J.dp.prototype
B.hI=J.dq.prototype
B.hJ=J.hp.prototype
B.cr=J.la.prototype
B.bC=J.dz.prototype
B.bE=new A.df(null,!1,!0)
B.a4=new A.df(null,!0,!1)
B.n=new A.df(null,!0,!0)
B.a7=new A.ji(0,"left")
B.am=new A.ji(2,"right")
B.bF=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cO=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cT=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cP=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cS=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cR=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cQ=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.bG=function(hooks) { return hooks; }

B.b1=new A.kC()
B.cU=new A.l6()
B.an=new A.r1()
B.cV=new A.lW()
B.cW=new A.mF()
B.a8=new A.mX()
B.aK=new A.n6()
B.z=new A.F(0,0,0)
B.cX=new A.F(0,64,255)
B.B=new A.F(0,64,39)
B.as=new A.F(110,32,13)
B.d=new A.F(125,119,128)
B.o=new A.F(125,144,179)
B.ag=new A.F(129,217,117)
B.K=new A.F(129,231,235)
B.A=new A.F(131,158,13)
B.k=new A.F(142,82,55)
B.a3=new A.F(15,130,148)
B.O=new A.F(173,88,219)
B.N=new A.F(179,74,4)
B.I=new A.F(189,144,108)
B.C=new A.F(193,181,199)
B.bH=new A.F(200,130,0)
B.cY=new A.F(201,166,255)
B.m=new A.F(204,35,57)
B.u=new A.F(208,195,214)
B.t=new A.F(20,19,31)
B.cZ=new A.F(20,20,35)
B.D=new A.F(21,87,194)
B.bI=new A.F(220,0,0)
B.h=new A.F(222,156,33)
B.p=new A.F(22,117,38)
B.a5=new A.F(255,122,105)
B.E=new A.F(255,238,168)
B.aL=new A.F(255,255,255)
B.F=new A.F(26,46,150)
B.aw=new A.F(36,10,5)
B.d0=new A.F(40,40,55)
B.l=new A.F(41,45,66)
B.d1=new A.F(42,36,43)
B.d2=new A.F(51,48,28)
B.ao=new A.F(56,16,125)
B.J=new A.F(64,163,229)
B.d3=new A.F(6,49,79)
B.j=new A.F(72,64,74)
B.f=new A.F(72,82,115)
B.w=new A.F(77,29,21)
B.bJ=new A.F(80,80,95)
B.a0=new A.F(84,0,39)
B.P=new A.F(86,30,138)
B.af=new A.F(99,87,7)
B.at=new A.eG(0,"exit")
B.ax=new A.eG(1,"item")
B.r=new A.aC(0,0,0,"none")
B.L=new A.aC(0,1,5,"s")
B.M=new A.aC(0,-1,1,"n")
B.Q=new A.aC(1,0,3,"e")
B.R=new A.aC(1,1,4,"se")
B.S=new A.aC(1,-1,2,"ne")
B.T=new A.aC(-1,0,7,"w")
B.U=new A.aC(-1,1,6,"sw")
B.V=new A.aC(-1,-1,8,"nw")
B.b2=new A.dl("Archery")
B.ay=new A.dl("Body")
B.ah=new A.dl("Matter")
B.b3=new A.dl("Weaponry")
B.bK=new A.aN("awaken")
B.bL=new A.aN("bolt")
B.bM=new A.aN("cone")
B.bN=new A.aN("detect")
B.bO=new A.aN("die")
B.b4=new A.aN("frighten")
B.bP=new A.aN("gold")
B.bQ=new A.aN("heal")
B.bR=new A.aN("hit")
B.bS=new A.aN("howl")
B.bT=new A.aN("knockBack")
B.bU=new A.aN("map")
B.bV=new A.aN("openBarrel")
B.bW=new A.aN("perceive")
B.bX=new A.aN("polymorph")
B.bY=new A.aN("slash")
B.b5=new A.aN("spawn")
B.bZ=new A.aN("stab")
B.c_=new A.aN("teleport")
B.c0=new A.aN("toss")
B.c1=new A.aN("wind")
B.b6=new A.a0(32,B.aL,B.z)
B.hC=new A.km(0,"melee")
B.hD=new A.km(2,"toss")
B.G=new A.m("cancel")
B.hE=new A.m("castSpell")
B.b7=new A.m("drop")
B.ad=new A.m("e")
B.b8=new A.m("editSpells")
B.b9=new A.m("equip")
B.ba=new A.m("explore")
B.aM=new A.m("fire")
B.bb=new A.m("fireE")
B.bc=new A.m("fireN")
B.c5=new A.m("fireNE")
B.c6=new A.m("fireNW")
B.bd=new A.m("fireS")
B.c7=new A.m("fireSE")
B.c8=new A.m("fireSW")
B.be=new A.m("fireW")
B.bf=new A.m("forfeit")
B.aN=new A.m("help")
B.bg=new A.m("heroInfo")
B.bh=new A.m("inventory")
B.X=new A.m("n")
B.aA=new A.m("ne")
B.aB=new A.m("nw")
B.a1=new A.m("ok")
B.bi=new A.m("operate")
B.bj=new A.m("pickUp")
B.bk=new A.m("quit")
B.aC=new A.m("rest")
B.aO=new A.m("runE")
B.ap=new A.m("runN")
B.bl=new A.m("runNE")
B.bm=new A.m("runNW")
B.aq=new A.m("runS")
B.bn=new A.m("runSE")
B.bo=new A.m("runSW")
B.aP=new A.m("runW")
B.Y=new A.m("s")
B.aD=new A.m("se")
B.bp=new A.m("spendExperience")
B.aE=new A.m("sw")
B.bq=new A.m("swap")
B.br=new A.m("toss")
B.bs=new A.m("use")
B.bt=new A.m("useAbility")
B.a9=new A.m("w")
B.c9=new A.m("wizard")
B.H=new A.c6("On Ground",0)
B.ca=new A.c6("Crucible",8)
B.Z=new A.c6("Equipment",0)
B.cb=new A.c6("Home",26)
B.v=new A.c6("Inventory",24)
B.cc=new A.hj(0,"normal")
B.hG=new A.hj(1,"good")
B.hH=new A.hj(2,"great")
B.hK=new A.pJ(null)
B.hL=new A.pK(null)
B.hM=s([2,12,22],t.t)
B.aF=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.hN=s(["Return to main menu?"],t.s)
B.aQ=s([9650,94],t.t)
B.jE=new A.bR(1,"n")
B.jF=new A.bR(2,"ne")
B.jG=new A.bR(3,"e")
B.jH=new A.bR(4,"se")
B.jI=new A.bR(5,"s")
B.jJ=new A.bR(6,"sw")
B.jK=new A.bR(7,"w")
B.jL=new A.bR(8,"nw")
B.hQ=s([B.jE,B.jF,B.jG,B.jH,B.jI,B.jJ,B.jK,B.jL],t.hY)
B.ai=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.ce=s([0,2,5,10,18,26,38],t.t)
B.cf=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.bu=s([B.v,B.Z],t.hm)
B.x=new A.bY(0,"message")
B.a_=new A.bY(1,"error")
B.ia=new A.bY(2,"quest")
B.ck=new A.bY(3,"gain")
B.ib=new A.bY(4,"help")
B.cl=new A.bY(5,"debug")
B.hS=s([B.x,B.a_,B.ia,B.ck,B.ib,B.cl],A.av("t<bY>"))
B.hT=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hU=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bv=s(["Stairs","Permanent"],t.s)
B.hV=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.cg=s([B.S,B.R,B.U,B.V],t.T)
B.i4=s([],t.bZ)
B.cj=s([],t.G)
B.i0=s([],t.x)
B.bw=s([],t.I)
B.ch=s([],t.hL)
B.i2=s([],A.av("t<ca<0&>>"))
B.i3=s([],A.av("t<bD<0&>>"))
B.i1=s([],t.s)
B.i_=s([],t.l)
B.ci=s([],t.lv)
B.hZ=s([],t.mS)
B.i5=s([B.H],t.hm)
B.au=s([B.M,B.Q,B.L,B.T],t.T)
B.jU=new A.ag("","Items",null,0,!1)
B.k1=new A.ag("b","Inventory",B.bh,66,!1)
B.k2=new A.ag("u","Use item",B.bs,85,!1)
B.jY=new A.ag("e","Equip / unequip",B.b9,69,!1)
B.jX=new A.ag("d","Drop item",B.b7,68,!1)
B.ka=new A.ag("t","Throw item",B.br,84,!1)
B.jT=new A.ag("g","Pick up",B.bj,71,!1)
B.kb=new A.ag("x","Swap to last unequipped",B.bq,88,!1)
B.k0=new A.ag("","Actions",null,0,!1)
B.jW=new A.ag("Shift-H","Explore",B.ba,72,!0)
B.k7=new A.ag("q","Stairs: walk to / take exit",B.bk,81,!1)
B.k4=new A.ag("c","Operate door, chest",B.bi,67,!1)
B.k8=new A.ag("l","Rest one turn",B.a1,76,!1)
B.jV=new A.ag("Shift-L","Rest until healed",B.aC,76,!0)
B.kc=new A.ag("a","Use ability",B.bt,65,!1)
B.k5=new A.ag("Alt-L","Fire last ability",B.aM,0,!1)
B.jS=new A.ag("","Hero",null,0,!1)
B.jZ=new A.ag("Shift-A","Hero info",B.bg,65,!0)
B.k_=new A.ag("Shift-S","Abilities",B.b8,83,!0)
B.k9=new A.ag("Shift-E","Spend experience",B.bp,69,!0)
B.k3=new A.ag("","Game",null,0,!1)
B.k6=new A.ag("h","Help",B.aN,72,!1)
B.jR=new A.ag("Shift-F","Forfeit level",B.bf,70,!0)
B.i6=s([B.jU,B.k1,B.k2,B.jY,B.jX,B.ka,B.jT,B.kb,B.k0,B.jW,B.k7,B.k4,B.k8,B.jV,B.kc,B.k5,B.jS,B.jZ,B.k_,B.k9,B.k3,B.k6,B.jR],t.oW)
B.i7=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aR=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aS=s([B.l,B.f,B.o,B.u,B.I,B.k,B.as,B.w,B.E,B.h,B.N,B.ag,B.af,B.A,B.p,B.B,B.a5,B.m,B.a0,B.O,B.P,B.ao,B.K,B.J,B.D,B.F],t.bk)
B.d4=new A.aH(10,"Your luck protects you!")
B.i8=s([B.d4],t.x)
B.i9=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.iL=new A.S(B.h,B.as)
B.iD=new A.S(B.E,B.N)
B.iy=new A.S(B.k,B.m)
B.iC=new A.S(B.m,B.w)
B.aT=s([B.iL,B.iD,B.iy,B.iC],A.av("t<+(F,F)>"))
B.ak=new A.cx("Strength",0,"strength")
B.ae=new A.cx("Agility",1,"agility")
B.ar=new A.cx("Vitality",2,"vitality")
B.a2=new A.cx("Intellect",3,"intellect")
B.aU=s([B.ak,B.ae,B.ar,B.a2],A.av("t<cx>"))
B.a6=s([B.M,B.S,B.Q,B.R,B.L,B.U,B.T,B.V],t.T)
B.ir={"Quick Reference":0,"Getting Started":1}
B.hp=new A.f(B.f,"Quick Reference")
B.c2=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.fn=new A.f(B.f,"Movement")
B.az=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eS=new A.f(B.d,"There are two sets of direction keys:")
B.dg=new A.f(B.d,"They can be combined with modifier keys like so:")
B.d7=new A.f(B.f,"Other commands")
B.hR=s([B.hp,B.c2,B.b,B.b,B.fn,B.az,B.eS,B.b,B.dg,B.b,B.b,B.b,B.d7,B.az],t.fJ)
B.e4=new A.f(B.f,"Getting Started")
B.fx=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.eG=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.fb=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dU=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hw=new A.f(B.d,"because you have the fortitude to try out a game while")
B.f9=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dR=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.hi=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.eY=new A.f(B.d,"boyfriend!")
B.hA=new A.f(B.f,"Input")
B.eJ=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.ha=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dQ=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.dY=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.h4=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.c3=new A.f(B.d,".---.---.---.          .---.---.---.")
B.f_=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.c4=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.h2=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.ey=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.e1=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.fk=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.e7=new A.f(B.d,"keyboard, you can also use:")
B.dP=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.dp=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.eQ=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.eO=new A.f(B.d," '---+---+---+          '---+---+---+")
B.fL=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fU=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fM=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.f4=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.db=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fV=new A.f(B.d,"and exit dialogs.")
B.er=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.h3=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.dy=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fB=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.fj=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eX=new A.f(B.f,"A Hero Awakens")
B.dc=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.dF=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.fa=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fC=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.fd=new A.f(B.d,"suggested one and hit Enter.")
B.fg=new A.f(B.d,"There isn't much to specify at character creation time")
B.eI=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.e6=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fW=new A.f(B.d,"the only class.")
B.ff=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.hy=new A.f(B.d,"means you can return to the game later and your hero")
B.dn=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.hc=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.hq=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.fE=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.f8=new A.f(B.d,"level! If you close your browser in the middle of")
B.dz=new A.f(B.d,"playing because your boss walked in, your progress in")
B.ev=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.ei=new A.f(B.d,"off at work.")
B.he=new A.f(B.d,"Because the game is still in active development, new")
B.hu=new A.f(B.d,"releases may not be savefile compatible with previous")
B.h5=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dS=new A.f(B.d,"with the latest code. Sorry.")
B.eE=new A.f(B.f,"The hero screen")
B.fA=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.hk=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.dH=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.ez=new A.f(B.d,"your gear and enter the game.")
B.dZ=new A.f(B.f,"Your home")
B.hf=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fO=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dX=new A.f(B.d,"want to carry around. You can also move items between")
B.df=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.dh=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eV=new A.f(B.d,"wearing or holding).")
B.dO=new A.f(B.f,"The crucible")
B.et=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eW=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.eM=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dw=new A.f(B.d,"just like you can your home or inventory. However, it")
B.eN=new A.f(B.d,"only allows items that are part of a recipe.")
B.ef=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.d5=new A.f(B.d,"something else. When you place all of the required items")
B.fi=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dK=new A.f(B.d,"Space and it will magically transmute them into")
B.hv=new A.f(B.d,"something new.")
B.h_=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.da=new A.f(B.d,"dropping a few healing potions in there.")
B.hm=new A.f(B.f,"The Dungeon Awaits")
B.fP=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.eF=new A.f(B.d,"some beasts.")
B.fe=new A.f(B.f,"Areas and levels")
B.ea=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.hl=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.fZ=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fu=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eT=new A.f(B.d,"turn divided into a series of levels, each more")
B.dJ=new A.f(B.d,"difficult than the last.")
B.ds=new A.f(B.d,"From the hero screen, you can select which area and")
B.ex=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fJ=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dT=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.ew=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dA=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.fl=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hB=new A.f(B.d,"directional keys to select an area and level. You can")
B.h9=new A.f(B.d,"replay a level as many times as you want.")
B.e8=new A.f(B.f,"Quests, victory, and defeat")
B.f3=new A.f(B.d,"Every level is randomly generated (of course) and")
B.fp=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fR=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.dC=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.f6=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.e5=new A.f(B.d,"safety of your home. All experience and items gained in")
B.dr=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.em=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.eB=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.eb=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.dj=new A.f(B.d,"whatever hot loot you picked up.")
B.h6=new A.f(B.d,"If you want to give up and leave the level before")
B.dW=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.fm=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.eg=new A.f(B.d,"since entering the level.")
B.dI=new A.f(B.f,"Navigating the level")
B.eq=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.d8=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.hg=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.f5=new A.f(B.d,"tiles.")
B.hr=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.ep=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.d6=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.eC=new A.f(B.d,"can attack the next turn.")
B.h8=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dL=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.eh=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.f2=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.eA=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dM=new A.f(B.d,"point B.")
B.f0=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.d9=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.de=new A.f(B.d,"like -. You can close a door by pressing C while")
B.hx=new A.f(B.d,"standing next to one.")
B.h0=new A.f(B.f,"Combat!")
B.el=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.ec=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.hh=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fv=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fF=new A.f(B.d,"to get theirs to zero before yours does!")
B.fz=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fQ=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dV=new A.f(B.d,"increase in experience level. That increases your")
B.h7=new A.f(B.d,"maximum health and does some other good stuff.")
B.fr=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eR=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dN=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.dk=new A.f(B.f,"Exploring")
B.ek=new A.f(B.d,"Shift-H explores: the hero walks to the nearest unexplored")
B.ho=new A.f(B.d,"spot, one step per turn, opening doors on the way. It")
B.fK=new A.f(B.d,"stops when a monster or a new item comes into view, on")
B.dx=new A.f(B.d,"any new message, or when you press a key.")
B.hz=new A.f(B.d,"Q on the stairs leaves the level. Anywhere else, Q walks")
B.dv=new A.f(B.d,"to the nearest known stairs (in town: the dungeon")
B.e_=new A.f(B.d,"entrance) and stops there; press Q again to take them.")
B.e9=new A.f(B.f,"Resting")
B.hb=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.dD=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.fD=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.e3=new A.f(B.d,"rest.")
B.fN=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fy=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fs=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fT=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.eK=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.dl=new A.f(B.d,"run out of food, fully regain their health, or are")
B.ft=new A.f(B.d,"disturbed by a nearby monster.")
B.h1=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.fc=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.dE=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.eZ=new A.f(B.d,"familiar passages!")
B.fh=new A.f(B.f,"Loot!")
B.ee=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.dm=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.dd=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.ej=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.hn=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eU=new A.f(B.d,"Items are represented using punctuation characters.")
B.hs=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fX=new A.f(B.d,"item off the ground by standing on top of it and")
B.du=new A.f(B.d,'pressing G, for "get".')
B.f7=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.eD=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.ht=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fH=new A.f(B.d,"you want.")
B.dB=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.e2=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.fo=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fS=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fG=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.es=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.ed=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.dq=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.eH=new A.f(B.d,"three views.")
B.eL=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fI=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.eP=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.fY=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.eo=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.hj=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dG=new A.f(B.d,"doesn't do you much good.")
B.fq=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.dt=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.en=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.hd=new A.f(B.d,"why you love the other items in your inventory more.")
B.e0=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.f1=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.fw=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.di=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.eu=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hP=s([B.e4,B.c2,B.fx,B.b,B.b,B.b,B.eG,B.b,B.fb,B.b,B.dU,B.b,B.hw,B.b,B.f9,B.b,B.dR,B.b,B.hi,B.b,B.eY,B.b,B.b,B.b,B.hA,B.az,B.eJ,B.b,B.ha,B.b,B.dQ,B.b,B.dY,B.b,B.h4,B.b,B.b,B.b,B.c3,B.f_,B.c4,B.h2,B.c4,B.ey,B.e1,B.b,B.b,B.fk,B.b,B.e7,B.b,B.b,B.b,B.c3,B.dP,B.dp,B.eQ,B.eO,B.fL,B.fU,B.b,B.b,B.fM,B.b,B.f4,B.b,B.db,B.b,B.fV,B.b,B.b,B.b,B.er,B.b,B.h3,B.b,B.dy,B.b,B.b,B.b,B.fB,B.b,B.fj,B.b,B.b,B.b,B.eX,B.az,B.dc,B.b,B.dF,B.b,B.fa,B.b,B.fC,B.b,B.fd,B.b,B.b,B.b,B.fg,B.b,B.eI,B.b,B.e6,B.b,B.fW,B.b,B.b,B.b,B.ff,B.b,B.hy,B.b,B.dn,B.b,B.hc,B.b,B.hq,B.b,B.b,B.b,B.fE,B.b,B.f8,B.b,B.dz,B.b,B.ev,B.b,B.ei,B.b,B.b,B.b,B.he,B.b,B.hu,B.b,B.h5,B.b,B.dS,B.b,B.b,B.b,B.eE,B.b,B.fA,B.b,B.hk,B.b,B.dH,B.b,B.ez,B.b,B.b,B.b,B.dZ,B.b,B.hf,B.b,B.fO,B.b,B.dX,B.b,B.df,B.b,B.dh,B.b,B.eV,B.b,B.b,B.b,B.dO,B.b,B.et,B.b,B.eW,B.b,B.eM,B.b,B.dw,B.b,B.eN,B.b,B.b,B.b,B.ef,B.b,B.d5,B.b,B.fi,B.b,B.dK,B.b,B.hv,B.b,B.b,B.b,B.h_,B.b,B.da,B.b,B.b,B.b,B.hm,B.az,B.fP,B.b,B.eF,B.b,B.b,B.b,B.fe,B.b,B.ea,B.b,B.hl,B.b,B.fZ,B.b,B.fu,B.b,B.eT,B.b,B.dJ,B.b,B.b,B.b,B.ds,B.b,B.ex,B.b,B.fJ,B.b,B.dT,B.b,B.b,B.b,B.ew,B.b,B.dA,B.b,B.fl,B.b,B.hB,B.b,B.h9,B.b,B.b,B.b,B.e8,B.b,B.f3,B.b,B.fp,B.b,B.fR,B.b,B.dC,B.b,B.f6,B.b,B.e5,B.b,B.dr,B.b,B.b,B.b,B.em,B.b,B.eB,B.b,B.eb,B.b,B.dj,B.b,B.b,B.b,B.h6,B.b,B.dW,B.b,B.fm,B.b,B.eg,B.b,B.b,B.b,B.dI,B.b,B.eq,B.b,B.d8,B.b,B.hg,B.b,B.f5,B.b,B.b,B.b,B.hr,B.b,B.ep,B.b,B.d6,B.b,B.eC,B.b,B.b,B.b,B.h8,B.b,B.dL,B.b,B.eh,B.b,B.f2,B.b,B.eA,B.b,B.dM,B.b,B.b,B.b,B.f0,B.b,B.d9,B.b,B.de,B.b,B.hx,B.b,B.b,B.b,B.h0,B.b,B.el,B.b,B.ec,B.b,B.hh,B.b,B.fv,B.b,B.fF,B.b,B.b,B.b,B.fz,B.b,B.fQ,B.b,B.dV,B.b,B.h7,B.b,B.b,B.b,B.fr,B.b,B.eR,B.b,B.dN,B.b,B.b,B.b,B.dk,B.b,B.ek,B.b,B.ho,B.b,B.fK,B.b,B.dx,B.b,B.hz,B.b,B.dv,B.b,B.e_,B.b,B.b,B.b,B.e9,B.b,B.hb,B.b,B.dD,B.b,B.fD,B.b,B.e3,B.b,B.b,B.b,B.fN,B.b,B.fy,B.b,B.fs,B.b,B.fT,B.b,B.eK,B.b,B.dl,B.b,B.ft,B.b,B.b,B.b,B.h1,B.b,B.fc,B.b,B.dE,B.b,B.eZ,B.b,B.b,B.b,B.fh,B.b,B.ee,B.b,B.dm,B.b,B.dd,B.b,B.ej,B.b,B.hn,B.b,B.b,B.b,B.eU,B.b,B.hs,B.b,B.fX,B.b,B.du,B.b,B.b,B.b,B.f7,B.b,B.eD,B.b,B.ht,B.b,B.fH,B.b,B.b,B.b,B.dB,B.b,B.e2,B.b,B.fo,B.b,B.fS,B.b,B.fG,B.b,B.es,B.b,B.ed,B.b,B.dq,B.b,B.eH,B.b,B.b,B.b,B.eL,B.b,B.fI,B.b,B.eP,B.b,B.fY,B.b,B.eo,B.b,B.hj,B.b,B.dG,B.b,B.b,B.b,B.fq,B.b,B.dt,B.b,B.en,B.b,B.hd,B.b,B.b,B.b,B.e0,B.b,B.f1,B.b,B.fw,B.b,B.di,B.b,B.eu,B.b],t.fJ)
B.aV=new A.bl(B.ir,[B.hR,B.hP],A.av("bl<r,E<f>>"))
B.il={Y:0,N:1,"`":2}
B.cm=new A.bl(B.il,["Yes","No","No"],t.p1)
B.aG=new A.dY(0,"clumsy")
B.aa=new A.dY(1,"insult")
B.co=new A.dY(2,"screech")
B.cp=new A.dY(3,"hiss")
B.hY=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hX=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hO=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hW=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.ic=new A.dT([B.aG,B.hY,B.aa,B.hX,B.co,B.hO,B.cp,B.hW],A.av("dT<dY,E<r>>"))
B.iu={"little brown spider":0,"gray spider":1,spiderling:2,"giant spider":3,"brown bat":4,"giant bat":5,"cave bat":6,"mangy cur":7,"wild dog":8,mongrel:9,wolf:10,varg:11,Skoll:12,Hati:13,Fenrir:14,"juvenile forest dragon":15,"juvenile brown dragon":16,"juvenile blue dragon":17,"juvenile white dragon":18,"juvenile purple dragon":19,"juvenile green dragon":20,"juvenile silver dragon":21,"juvenile red dragon":22,"juvenile gold dragon":23,"juvenile black dragon":24,"juvenile ethereal dragon":25,"forest dragon":26,"brown dragon":27,"blue dragon":28,"white dragon":29,"purple dragon":30,"green dragon":31,"silver dragon":32,"red dragon":33,"gold dragon":34,"black dragon":35,"ethereal dragon":36,"lazy eye":37,"mad eye":38,"floating eye":39,"baleful eye":40,"malevolent eye":41,"murderous eye":42,watcher:43,"stray cat":44,"goblin peon":45,"goblin archer":46,"goblin fighter":47,"goblin warrior":48,"goblin mage":49,"goblin ranger":50,"Erlkonig, the Goblin Prince":51,"giant cockroach":52,"giant centipede":53,firefly:54,"green jelly":55,"green slime":56,"frosty slime":57,"mud slime":58,"smoking slime":59,"sparkling slime":60,"caustic slime":61,"virulent slime":62,ectoplasm:63,"scurrilous imp":64,"vexing imp":65,kobold:66,"kobold shaman":67,"kobold trickster":68,"kobold priest":69,"imp incanter":70,"imp warlock":71,Feng:72,"lizard guard":73,"lizard protector":74,"armored lizard":75,"scaled guardian":76,saurian:77,orc:78,"orc brute":79,"orc soldier":80,"orc chieftain":81,"Harold the Misfortunate":82,"hapless adventurer":83,"simpering knave":84,"decrepit mage":85,"unlucky ranger":86,"drunken priest":87,mouse:88,"sewer rat":89,"sickly rat":90,"plague rat":91,"giant rat":92,"The Rat King":93,"giant slug":94,"suppurating slug":95,"acidic slug":96,choker:97,nightshade:98,creeper:99,strangler:100,"blood worm":101,"fire worm":102,"giant earthworm":103,"giant cave worm":104,"bony hand":105,"bony arm":106,"severed skull":107,"decapitated skeleton":108,"armless skeleton":109,"one-armed skeleton":110,skeleton:111,"skeleton warrior":112,"robed skeleton":113,crow:114,raven:115,"elder forest dragon":116,"elder brown dragon":117,"elder blue dragon":118,"elder white dragon":119,"elder purple dragon":120,"elder green dragon":121,"elder silver dragon":122,"elder red dragon":123,"elder gold dragon":124,"elder black dragon":125,"elder ethereal dragon":126,"ancient forest dragon":127,"ancient brown dragon":128,"ancient blue dragon":129,"ancient white dragon":130,"ancient purple dragon":131,"ancient green dragon":132,"ancient silver dragon":133,"ancient red dragon":134,"ancient gold dragon":135,"ancient black dragon":136,"ancient ethereal dragon":137,"forest sprite":138,"house sprite":139,"mischievous sprite":140,Tink:141,harpy:142,griffin:143,"Nameless Unmaker":144,frog:145,"juvenile salamander":146,salamander:147,"three-headed salamander":148,"water snake":149,"brown snake":150,"cave snake":151}
B.id=new A.bl(B.iu,[161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,198,199,200,200,199,201,202,203,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,187,188,189,190,191,192,193,194,195,196,197,187,188,189,190,191,192,193,194,195,196,197,272,273,274,275,276,277,278,279,280,281,282,283,284,285],t.cq)
B.im={L:0,E:1,R:2,O:3,G:4,Y:5}
B.d_=new A.F(232,200,21)
B.ie=new A.bl(B.im,[B.d,B.j,B.m,B.N,B.h,B.d_],A.av("bl<r,F>"))
B.ig=new A.dT([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.av("dT<e,e>"))
B.io={}
B.cn=new A.bl(B.io,[],t.p1)
B.iq={Fae:0,Dwarf:1,Elf:2,Gnome:3,Human:4}
B.ih=new A.bl(B.iq,[441,442,443,444,445],t.cq)
B.ip={Rock:0,Skull:1,"Copper Coin":2,"Bronze Coin":3,"Silver Coin":4,"Electrum Coin":5,"Gold Coin":6,"Platinum Coin":7,"Copper Bar":8,"Bronze Bar":9,"Silver Bar":10,"Electrum Bar":11,"Gold Bar":12,"Platinum Bar":13,"Amethyst Shard":14,"Uncut Amethyst":15,"Faceted Amethyst":16,"Sapphire Shard":17,"Uncut Sapphire":18,"Faceted Sapphire":19,"Emerald Shard":20,"Uncut Emerald":21,"Faceted Emerald":22,"Ruby Shard":23,"Uncut Ruby":24,"Faceted Ruby":25,"Diamond Shard":26,"Uncut Diamond":27,"Faceted Diamond":28,"Insect Wing":29,Feather:30,"Stale Biscuit":31,"Loaf of Bread":32,"Chunk of Meat":33,"Piece of Jerky":34,"Tallow Candle":35,"Wax Candle":36,"Oil Lamp":37,Torch:38,Lantern:39,"Soothing Balm":40,"Mending Salve":41,"Healing Poultice":42,"Potion of Amelioration":43,"Potion of Rejuvenation":44,Antidote:45,"Salve of Heat Resistance":46,"Salve of Cold Resistance":47,"Salve of Light Resistance":48,"Salve of Wind Resistance":49,"Salve of Lightning Resistance":50,"Salve of Darkness Resistance":51,"Salve of Earth Resistance":52,"Salve of Water Resistance":53,"Salve of Acid Resistance":54,"Salve of Poison Resistance":55,"Salve of Death Resistance":56,"Potion of Quickness":57,"Potion of Alacrity":58,"Potion of Speed":59,"Bottled Wind":60,"Bottled Ice":61,"Bottled Fire":62,"Bottled Ocean":63,"Bottled Poison":64,"Bottled Earth":65,"Bottled Lightning":66,"Bottled Acid":67,"Bottled Shadow":68,"Bottled Radiance":69,"Bottled Spirit":70,"Scroll of Sidestepping":71,"Scroll of Phasing":72,"Scroll of Teleportation":73,"Scroll of Disappearing":74,"Scroll of Find Nearby Escape":75,"Scroll of Locate Escape":76,"Scroll of Find Nearby Items":77,"Scroll of Item Detection":78,"Scroll of Detect Nearby":79,"Scroll of Detection":80,"Scroll of Sense Nearby Monsters":81,"Scroll of Sense Monsters":82,"Scroll of Perceive Monsters":83,"Scroll of Telepathy":84,"Adventurer's Map":85,"Explorer's Map":86,"Cartographer's Map":87,"Wizard's Map":88,"Ring of Wisdom":89,Stick:90,Cudgel:91,Club:92,"Walking Stick":93,Staff:94,Quarterstaff:95,Hammer:96,Mattock:97,"War Hammer":98,Morningstar:99,Mace:100,Whip:101,"Chain Whip":102,Flail:103,Knife:104,Dagger:105,Dirk:106,Stiletto:107,Rondel:108,Baselard:109,Mercygiver:110,Rapier:111,Shortsword:112,Scimitar:113,Cutlass:114,Falchion:115,"Pointed Stick":116,Spear:117,Angon:118,Lance:119,Partisan:120,Hatchet:121,Axe:122,Valaska:123,Battleaxe:124,"Short Bow":125,Longbow:126,Crossbow:127,"Leather Cap":128,"Chainmail Coif":129,"Steel Cap":130,"Visored Helm":131,"Great Helm":132,Robe:133,"Lined Robe":134,"Cloth Shirt":135,"Leather Shirt":136,Jerkin:137,"Leather Armor":138,"Padded Armor":139,"Studded Armor":140,"Mail Hauberk":141,"Scale Mail":142,"Plated Mail":143,Brigandine:144,Breastplate:145,"Plate Armor":146,Cloak:147,"Fur Cloak":148,"Spidersilk Cloak":149,Gloves:150,Bracers:151,Gauntlets:152,Buckler:153,"Leather Shield":154,Targe:155,Roundel:156,"Steel Shield":157,"Kite Shield":158,"Lantern Shield":159,Sandals:160,Shoes:161,Boots:162,"Plated Boots":163,Greaves:164}
B.ii=new A.bl(B.ip,[286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,300,301,302,302,303,304,304,305,306,306,307,308,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,372,373,373,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,399,400,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440],t.cq)
B.is={"A-Z Del":0}
B.ij=new A.bl(B.is,["Edit name"],t.p1)
B.it={OK:0,"\u2195\u2194":1,"`":2}
B.ik=new A.bl(B.it,["Enter dungeon","Change depth","Cancel"],t.p1)
B.W=new A.hE(0,"normal")
B.cq=new A.hE(1,"proper")
B.aH=new A.hE(3,"mass")
B.cs=new A.e_("you","you","your",0,"you")
B.aI=new A.e_("he","him","his",2,"he")
B.iv=new A.e_("they","them","their",4,"they")
B.ct=new A.e_("she","her","her",1,"she")
B.y=new A.e_("it","it","its",3,"it")
B.cu=new A.S(10,15)
B.cv=new A.S(16,21)
B.iw=new A.S("spear","Spear Mastery")
B.ix=new A.S(1,1)
B.iz=new A.S(5,8)
B.cw=new A.S(6,9)
B.iA=new A.S(7,10)
B.iB=new A.S(9,16)
B.iE=new A.S(0.002,0.8)
B.iF=new A.S("whip","Whip Mastery")
B.iG=new A.S("Name","Enter a name for your new hero.")
B.iH=new A.S(B.C,B.d)
B.iI=new A.S(B.j,B.j)
B.iJ=new A.S("dagger","Knife Fighting")
B.iK=new A.S("club","Bludgeoning")
B.iM=new A.S("axe","Axe Mastery")
B.iN=new A.S("You haven't learned this skill.",B.j)
B.iO=new A.S(B.h,B.C)
B.iP=new A.S("sword","Swordfighting")
B.iQ=new A.S(0.1,1)
B.cx=new A.L(0,0,0)
B.cy=new A.L(0,0,446)
B.cz=new A.L(0,0,447)
B.iR=new A.L(0,0,457)
B.iS=new A.L(0,0,458)
B.bx=new A.L(0,17,0)
B.iT=new A.L(0,33,0)
B.iU=new A.L(0,33,470)
B.iV=new A.L(0,49,0)
B.iW=new A.L(0,65,0)
B.iX=new A.L(113,0,0)
B.iY=new A.L(129,0,0)
B.iZ=new A.L(129,0,459)
B.j_=new A.L(129,0,481)
B.j0=new A.L(129,0,482)
B.j1=new A.L(129,0,483)
B.j2=new A.L(129,0,484)
B.j3=new A.L(129,0,485)
B.j4=new A.L(129,0,486)
B.j5=new A.L(129,0,487)
B.j6=new A.L(129,0,488)
B.by=new A.L(129,0,489)
B.j7=new A.L(145,0,0)
B.j8=new A.L(145,0,460)
B.j9=new A.L(145,0,461)
B.ja=new A.L(145,0,462)
B.jb=new A.L(145,0,463)
B.aJ=new A.L(1,0,0)
B.jc=new A.L(1,0,448)
B.jd=new A.L(1,0,449)
B.je=new A.L(1,0,450)
B.jf=new A.L(1,0,451)
B.jg=new A.L(1,0,452)
B.jh=new A.L(1,0,453)
B.ji=new A.L(1,0,455)
B.jj=new A.L(1,0,456)
B.jk=new A.L(1,0,464)
B.jl=new A.L(1,0,465)
B.jm=new A.L(1,0,466)
B.jn=new A.L(1,0,467)
B.ab=new A.L(1,0,468)
B.jo=new A.L(1,0,469)
B.jp=new A.L(1,0,471)
B.jq=new A.L(1,0,472)
B.jr=new A.L(1,0,473)
B.js=new A.L(1,0,474)
B.jt=new A.L(1,0,475)
B.ju=new A.L(1,0,476)
B.jv=new A.L(1,0,477)
B.jw=new A.L(1,0,478)
B.jx=new A.L(1,0,479)
B.jy=new A.L(1,0,480)
B.jz=new A.L(81,0,0)
B.jA=new A.L(97,0,0)
B.jB=new A.L(97,0,454)
B.jC=new A.a_(["i",73,"Inspect",null])
B.al=new A.d(0,0)
B.jD=new A.a3(B.al,B.al)
B.cA=new A.bR(0,"everywhere")
B.bz=new A.hR(0,"rectangular")
B.jM=new A.hR(1,"octagonal")
B.jN=new A.hR(2,"any")
B.jO=new A.hS(0,"small")
B.jP=new A.hS(1,"medium")
B.jQ=new A.hS(2,"large")
B.kd=new A.fj(0,"anywhere")
B.aj=new A.fj(1,"open")
B.aW=new A.fj(2,"wall")
B.bA=new A.fj(3,"corner")
B.ke=new A.dw(0,"none")
B.ac=new A.dw(1,"mirrorHorizontal")
B.kf=new A.dw(2,"mirrorVertical")
B.av=new A.dw(3,"mirrorBoth")
B.q=new A.dw(4,"rotate90")
B.kg=new A.dw(5,"rotate180")
B.kh=new A.rM(1,"oldest")
B.cG=new A.bF("shop 1")
B.cF=new A.bF("shop 2")
B.cE=new A.bF("shop 3")
B.cD=new A.bF("shop 4")
B.cC=new A.bF("shop 5")
B.cB=new A.bF("shop 6")
B.cJ=new A.bF("shop 7")
B.cI=new A.bF("shop 8")
B.cH=new A.bF("shop 9")
B.bB=new A.bF("dungeon")
B.aX=new A.bF("exit")
B.cK=new A.bF("home")
B.ki=A.ch("uK")
B.kj=A.ch("uL")
B.kk=A.ch("oE")
B.kl=A.ch("oF")
B.km=A.ch("p2")
B.kn=A.ch("p3")
B.ko=A.ch("p4")
B.kp=A.ch("Q")
B.kq=A.ch("rY")
B.kr=A.ch("rZ")
B.ks=A.ch("t_")
B.kt=A.ch("t0")
B.aY=new A.d(0,1)
B.aZ=new A.d(0,-1)
B.b_=new A.d(1,0)
B.b0=new A.d(-1,0)
B.cL=new A.fp(0,"uninitialized")
B.bD=new A.fp(1,"stats")
B.cM=new A.fp(2,"resistances")
B.cN=new A.fp(3,"all")})();(function staticFields(){$.tr=null
$.bV=A.b([],t.w)
$.x1=null
$.qC=0
$.uX=A.Bk()
$.ws=null
$.wr=null
$.y4=null
$.xW=null
$.yc=null
$.tY=null
$.u6=null
$.vr=null
$.ty=A.b([],A.av("t<E<Q>?>"))
$.fB=null
$.iQ=null
$.iR=null
$.vj=!1
$.aU=B.a8
$.cD=null
$.xF=null
$.cC=A.e8()
$.cf=null
$.Bn=A.b(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.Bo=A.b(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.By=A.b(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.aZ=A.e8()
$.h=null
$.bi=null
$.iP=null
$.wK=0
$.wl=0
$.hN=A.b([],A.av("t<ln>"))
$.hY=A.D(t.N,t.c3)
$.ce=null
$.am=A.e8()
$.nT=!1
$.nU=!1
$.uN=!1
$.jP=A.D(t.B,A.av("fs"))
$.nO=null
$.bn=0
$.ex=A.b([],A.av("t<jy>"))
$.wE=function(){var s=t.l
return A.b([A.b([B.aZ,B.b_],s),A.b([B.b_,B.aZ],s),A.b([B.b_,B.aY],s),A.b([B.aY,B.b_],s),A.b([B.aY,B.b0],s),A.b([B.b0,B.aY],s),A.b([B.b0,B.aZ],s),A.b([B.aZ,B.b0],s)],t.g)}()
$.ww=A.b([B.u,B.E,B.h,B.af,B.d2],t.bk)
$.v5=A.b([B.K,B.J,B.O,B.u],t.bk)
$.bB=A.b([],t.f_)
$.nk=0
$.ye=!1
$.l=A.b([],t.w)
$.iV=A.b([],t.w)
$.fz=A.b([],A.av("t<lL>"))
$.y=A.e8()
$.c2=A.e8()
$.fy=A.bc(t.B)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"CR","yl",()=>A.u1("_$dart_dartClosure"))
s($,"CQ","ut",()=>A.u1("_$dart_dartClosure_dartJSInterop"))
s($,"Fi","yY",()=>A.b([new J.kz()],A.av("t<hU>")))
s($,"F_","yM",()=>A.d2(A.rX({
toString:function(){return"$receiver$"}})))
s($,"F0","yN",()=>A.d2(A.rX({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"F1","yO",()=>A.d2(A.rX(null)))
s($,"F2","yP",()=>A.d2(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"F5","yS",()=>A.d2(A.rX(void 0)))
s($,"F6","yT",()=>A.d2(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"F4","yR",()=>A.d2(A.xj(null)))
s($,"F3","yQ",()=>A.d2(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"F8","yV",()=>A.d2(A.xj(void 0)))
s($,"F7","yU",()=>A.d2(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Fa","wd",()=>A.Ak())
s($,"Fg","nt",()=>A.nj(B.kp))
s($,"DJ","vO",()=>{A.A0()
return $.qC})
s($,"CB","us",()=>{var q=A.t1("axe"),p=A.t1("club"),o=A.t1("spear"),n=A.t1("whip"),m=$.vx(),l=A.av("t<dg>"),k=A.b([m],l),j=A.b([m],l),i=$.vA(),h=A.b([i],l),g=$.vy(),f=A.b([g],l),e=$.vz(),d=A.b([e],l),c=A.b([e],l),b=A.b([i],l),a=$.vC()
return A.b([new A.k2(),new A.k6(),new A.jp(q),new A.jH(p),new A.lB(o),new A.lZ(n),new A.jr(k),new A.jA(j),new A.jM(h),new A.jW(f),new A.k3(d),new A.k4(c),new A.kc(b),new A.ki(A.b([a],l)),new A.kj(A.b([i,a],l)),new A.kp(A.b([i],l)),new A.kr(A.b([e],l)),new A.kG(A.b([g,e],l)),new A.kI(A.b([m],l)),new A.kP(A.b([g],l)),new A.li(A.b([g],l)),new A.lw(A.b([g,a],l)),new A.ly(A.b([m],l)),new A.lM(A.b([$.vB()],l)),new A.m0(A.b([a],l)),new A.m1(A.b([a],l))],t.eI)})
s($,"CP","ep",()=>{var q=null,p=A.av("dl"),o=t.S,n=t.hL
return A.b([A.uQ("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.C([B.b2,5,B.ay,5,B.b3,5,B.ah,2],p,o),A.b([new A.kb()],n),A.aa("item",q,q)),A.uQ("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.C([B.b2,1,B.ay,10,B.b3,5],p,o),A.b([new A.jV()],n),A.aa("weapon",q,q)),A.uQ("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.C([B.ay,3,B.ah,10],p,o),A.b([],n),A.aa("item",q,q))],A.av("t<cP>"))})
s($,"CS","uu",()=>A.dt(A.av("h2")))
s($,"CO","yk",()=>{var q=null
return A.W(q,q,q,q)})
s($,"Fb","yW",()=>{var q,p,o,n,m,l,k,j=null,i=$.uF(),h=A.W(i,j,j,A.b([$.fN(),$.nn()],t.J)),g=$.b2()
i=A.W(i,g,j,j)
q=A.W($.w9(),g,j,j)
p=$.fR()
o=A.W(p,g,j,j)
n=A.W($.j_(),g,j,j)
m=A.W($.j0(),g,j,j)
l=A.W($.fQ(),j,$.fO(),j)
k=$.fM()
return A.C(["I",h,"l",i,"P",q,"\u2248",o,"%",n,"&",m,"*",l,"=",A.W(k,j,p,j),"\u2261",A.W(k,g,j,j),"\u2022",A.W($.uE(),j,p,j)],t.N,t.oC)})
s($,"Fh","yX",()=>{var q=null,p=t.J
return A.C(["?",A.W(q,q,q,q),".",A.W(q,$.b2(),q,q),"#",A.W(q,q,q,A.b([$.fN(),$.nn(),$.uA(),$.uB(),$.uC()],p)),"\u250c",A.W(q,q,$.je(),q),"\u2500",A.W(q,q,$.jd(),q),"\u2510",A.W(q,q,$.jf(),q),"-",A.W(q,q,$.fP(),q),"\u2502",A.W(q,q,$.jc(),q),"\u2558",A.W(q,q,$.j7(),q),"\u2550",A.W(q,q,$.j6(),q),"\u255b",A.W(q,q,$.j8(),q),"\u255e",A.W(q,q,$.ja(),q),"\u2564",A.W(q,q,$.j9(),q),"\u2561",A.W(q,q,$.jb(),q),"\u03c0",A.W(q,q,$.iZ(),q),"\u2248",A.W(q,q,$.fR(),q),"'",A.W(q,q,q,A.b([$.fO(),$.fQ()],p))],t.N,t.oC)})
s($,"CV","eq",()=>A.c5("air","Ai",1.2,new A.oe(),"",!1,null))
s($,"CZ","dH",()=>A.c5("earth","Ea",1.1,null,"",!1,null))
s($,"D_","b9",()=>A.c5("fire","Fi",1.2,new A.oi(),"burns up",!0,new A.oj()))
s($,"D4","dc",()=>A.c5("water","Wa",1.3,null,"",!1,null))
s($,"CU","dG",()=>A.c5("acid","Ac",1.4,null,"",!1,null))
s($,"CX","ci",()=>A.c5("cold","Co",1.2,new A.of(),"shatters",!1,new A.og()))
s($,"D1","dI",()=>A.c5("lightning","Ln",1.1,null,"",!1,null))
s($,"D2","bJ",()=>A.c5("poison","Po",2,new A.om(),"",!1,new A.on()))
s($,"CY","da",()=>A.c5("dark","Dk",1.5,new A.oh(),"",!1,null))
s($,"D0","db",()=>A.c5("light","Li",1.5,new A.ok(),"",!1,new A.ol()))
s($,"D3","dJ",()=>A.c5("spirit","Sp",3,null,"",!1,null))
s($,"CW","fK",()=>A.b([$.aF(),$.eq(),$.dH(),$.b9(),$.dc(),$.dG(),$.ci(),$.dI(),$.bJ(),$.da(),$.db(),$.dJ()],A.av("t<dP>")))
s($,"CC","dE",()=>A.dt(t.R))
s($,"CD","dF",()=>A.dt(t.R))
s($,"Ff","wg",()=>A.dt(A.av("k7")))
s($,"Dc","bp",()=>A.dt(t.q))
s($,"Fl","z0",()=>A.lo("\\n\\s*"))
s($,"Fe","fS",()=>{var q=t.s
return A.C([$.eq(),A.b(["wind","buffets"],q),$.dH(),A.b(["soil","buries"],q),$.b9(),A.b(["flame","burns"],q),$.dc(),A.b(["water","blasts"],q),$.dG(),A.b(["acid","melts"],q),$.ci(),A.b(["ice","freezes"],q),$.dI(),A.b(["lightning","shocks"],q),$.bJ(),A.b(["poison","chokes"],q),$.da(),A.b(["darkness","crushes"],q),$.db(),A.b(["light","sears"],q),$.dJ(),A.b(["spirit","haunts"],q)],t.h,t.m)})
s($,"De","cj",()=>A.dt(t.P))
s($,"DA","uv",()=>A.lj("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.b([new A.k1(),new A.k5()],t.hL),A.C([B.ak,0.6,B.ae,1.6,B.ar,0.7,B.a2,1.1],t.Z,t.i)))
s($,"Dz","fL",()=>{var q=t.Z,p=t.i,o=t.hL
return A.b([A.lj("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.ch,A.C([B.ak,1.3,B.ae,0.6,B.ar,1.4,B.a2,0.7],q,p)),A.lj("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.ch,A.C([B.ak,1.2,B.ae,1.3,B.ar,1,B.a2,1.2],q,p)),$.uv(),A.lj("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.b([new A.lx()],o),A.C([B.ak,0.7,B.ae,0.8,B.ar,1,B.a2,1.5],q,p)),A.lj("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.b([new A.lh()],o),A.C([B.ak,1,B.ae,1,B.ar,1,B.a2,1],q,p))],A.av("t<cV>"))})
s($,"CE","vx",()=>A.fV("Arcing",B.ah,"Cast spells of lightning."))
s($,"CF","vy",()=>A.fV("Earthshaping",B.ah,"Cast spells of earth."))
s($,"CG","vz",()=>A.fV("Fireweaving",B.ah,"Cast spells of fire."))
s($,"CH","vA",()=>A.fV("Icewinding",B.ah,"Cast spells of cold."))
s($,"CI","vB",()=>A.fV("Watercoursing",B.ah,"Cast spells of water."))
s($,"CJ","vC",()=>A.fV("Windchasing",B.ah,"Cast spells of air."))
s($,"CK","yj",()=>{var q=$.bn
$.bn=q+1
return new A.jl(q)})
s($,"CM","vE",()=>{var q=$.bn
$.bn=q+1
return new A.jo(q)})
s($,"CN","vF",()=>{var q=$.bn
$.bn=q+1
return new A.jv(q)})
s($,"DI","vN",()=>{var q=$.bn
$.bn=q+1
return new A.lA(q)})
s($,"F9","wc",()=>{var q=$.bn
$.bn=q+1
return new A.m_(q)})
s($,"DH","vM",()=>{var q=$.yj(),p=$.bn,o=$.bn=p+1,n=$.bn=o+1,m=$.vE(),l=$.vF(),k=$.bn=n+1,j=$.vN()
$.bn=k+1
return A.b([q,new A.jt(p),new A.ju(o),m,l,new A.kF(n),j,new A.lG(k),$.wc(),$.vx(),$.vy(),$.vz(),$.vA(),$.vB(),$.vC()],t.hC)})
s($,"DG","vL",()=>{var q,p,o,n=A.D(t.N,t.M)
for(q=$.vM(),p=0;p<15;++p){o=q[p]
n.h(0,o.gN(),o)}return n})
s($,"CL","vD",()=>A.dt(A.av("fW")))
s($,"Dx","vJ",()=>{var q=null
return A.qw(q,q,q,q)})
s($,"Dv","yB",()=>{var q=t.J,p=A.b([$.j3()],q)
q=A.b([$.fN()],q)
return A.qw($.j1(),p,$.j4(),q)})
s($,"Dw","yC",()=>{var q=t.J,p=A.b([$.vX()],q)
q=A.b([$.nn()],q)
return A.qw($.uz(),p,null,q)})
s($,"Dy","yD",()=>A.qw($.uy(),null,null,null))
s($,"Dt","yz",()=>{var q=t.J
return A.C([$.dd(),A.b([$.fR()],q),$.er(),A.b([$.fM()],q)],t.U,t.p)})
s($,"Du","yA",()=>A.b([$.uA(),$.uB(),$.uC()],t.J))
s($,"DD","nl",()=>A.A7(B.r))
s($,"DC","uw",()=>A.x8($.cE()))
s($,"DE","yE",()=>A.x8($.bx()))
s($,"EU","es",()=>A.G("unformed"," ",B.t,null).a3())
s($,"EV","de",()=>A.G("unformed wet","\u2248",B.l,null).a3())
s($,"Eh","cE",()=>A.G("open","\xb7",B.j,null).a3())
s($,"Ez","bx",()=>A.G("solid","\u2593",B.j,null).by())
s($,"En","cF",()=>A.G("passage","\xb7",B.d1,null).a3())
s($,"E2","j2",()=>A.G("doorway","\u25cb",B.w,null).a3())
s($,"EA","dd",()=>A.G("solid wet","\u2248",B.D,null).by())
s($,"Eo","er",()=>A.G("wet passage","\u2261",B.w,null).a3())
s($,"E5","fN",()=>A.G("flagstone wall","\u2592",B.d,B.j).by())
s($,"Eb","nn",()=>A.G("granite wall","\u2592",B.f,B.l).by())
s($,"E7","uA",()=>A.G("granite","\u2593",B.f,B.l).hj(0,B.l,B.t).by())
s($,"E8","uB",()=>A.G("granite","\u2593",B.f,B.l).hj(0.2,B.l,B.t).by())
s($,"E9","uC",()=>A.G("granite","\u2593",B.f,B.l).hj(0.4,B.l,B.t).by())
s($,"E4","j3",()=>A.G("flagstone floor","\xb7",B.j,null).a3())
s($,"Ea","vX",()=>A.G("granite floor","\xb7",B.f,null).a3())
s($,"El","j4",()=>A.G("open door","\u25cb",B.k,B.aw).cr(A.Cu()).a3())
s($,"DZ","j1",()=>A.G("closed door","\u25d9",B.k,B.aw).cr(A.Cx()).k5())
s($,"Em","w1",()=>A.G("open square door","\u2642",B.k,B.aw).cr(A.Cv()).a3())
s($,"E_","uz",()=>A.G("closed square door","\u2640",B.k,B.aw).cr(A.Cy()).k5())
s($,"Ei","w0",()=>A.G("open barred door","\u2642",B.d,B.f).cr(A.Ct()).a3())
s($,"DW","uy",()=>A.G("closed barred door","\u266a",B.d,B.f).cr(A.Cw()).cD($.Y().c9(0,$.bK())))
s($,"DS","vS",()=>A.G("burnt floor","\u03c6",B.l,null).a3())
s($,"DT","vT",()=>A.G("burnt floor","\u03b5",B.l,null).a3())
s($,"Eg","yI",()=>A.G("low wall","%",B.d,null).aG())
s($,"EC","uD",()=>A.G("stairs","\u2261",B.u,B.f).bv(B.aX).a3())
s($,"DQ","fM",()=>A.G("bridge","\u2261",B.k,B.aw).a3())
s($,"E6","nm",()=>A.G("moss","\u2591",B.a3,null).eW(128).a3())
s($,"EY","fR",()=>A.G("water","\u2248",B.D,B.F).ow(10,0.5,B.F,B.t).eW(32).cD($.Y().c9(0,$.iX())))
s($,"EE","uE",()=>A.G("stepping stone","\u2022",B.o,B.F).a3())
s($,"E0","vU",()=>A.G("dirt","\xb7",B.w,null).a3())
s($,"E1","vV",()=>A.G("dirt2","\u03c6",B.w,null).a3())
s($,"Ec","fO",()=>A.G("grass","\u2591",B.p,null).a3())
s($,"EQ","fQ",()=>A.G("tall grass","\u221a",B.p,null).a3())
s($,"ER","nq",()=>A.G("tree","\u25b2",B.p,B.B).by())
s($,"ES","nr",()=>A.G("tree","\u2660",B.p,B.B).by())
s($,"ET","ns",()=>A.G("tree","\u2663",B.p,B.B).by())
s($,"Ek","np",()=>A.G("open chest","\u2320",B.k,null).aG())
s($,"DY","j0",()=>A.G("closed chest","\u2321",B.k,null).cr(new A.rS()).aG())
s($,"DX","j_",()=>A.G("closed barrel","\xb0",B.k,null).cr(new A.rR()).aG())
s($,"Ej","no",()=>A.G("open barrel","\u2219",B.k,null).aG())
s($,"EO","je",()=>A.G("table","\u250c",B.k,null).aG())
s($,"EN","jd",()=>A.G("table","\u2500",B.k,null).aG())
s($,"EP","jf",()=>A.G("table","\u2510",B.k,null).aG())
s($,"EM","jc",()=>A.G("table","\u2502",B.k,null).aG())
s($,"EI","fP",()=>A.G("table"," ",B.k,null).aG())
s($,"EG","j7",()=>A.G("table","\u2558",B.k,null).aG())
s($,"EF","j6",()=>A.G("table","\u2550",B.k,null).aG())
s($,"EH","j8",()=>A.G("table","\u255b",B.k,null).aG())
s($,"EK","ja",()=>A.G("table","\u255e",B.k,null).aG())
s($,"EJ","j9",()=>A.G("table","\u2564",B.k,null).aG())
s($,"EL","jb",()=>A.G("table","\u2561",B.k,null).aG())
s($,"DU","iY",()=>A.G("candle","\u2265",B.I,null).eW(128).aG())
s($,"EX","uF",()=>A.G("wall torch","\u2264",B.h,B.f).eW(192).by())
s($,"DP","yH",()=>A.Ah("brazier","\u2264",B.k,null,5,new A.rQ()))
s($,"ED","w9",()=>A.G("statue","P",B.u,B.f).aG())
s($,"DV","iZ",()=>A.G("chair","\u03c0",B.k,null).a3())
s($,"DR","vR",()=>A.G("brown jelly stain","\xb7",B.k,null).a3())
s($,"Ed","vY",()=>A.G("gray jelly stain","\xb7",B.l,null).a3())
s($,"Ee","vZ",()=>A.G("green jelly stain","\xb7",B.A,null).a3())
s($,"Ep","w2",()=>A.G("red jelly stain","\xb7",B.m,null).a3())
s($,"EW","wa",()=>A.G("violet jelly stain","\xb7",B.P,null).a3())
s($,"EZ","wb",()=>A.G("white jelly stain","\xb7",B.u,null).a3())
s($,"EB","j5",()=>A.G("spiderweb","\xf7",B.f,null).a3())
s($,"E3","vW",()=>A.G("dungeon entrance","\u2261",B.d,B.l).bv(B.bB).a3())
s($,"Ef","w_",()=>A.G("home entrance","\u25cb",B.I,null).bv(B.cK).a3())
s($,"Eq","w3",()=>A.G("shop entrance","\u25cb",B.N,null).bv(B.cG).a3())
s($,"Er","w4",()=>A.G("shop entrance","\u25cb",B.h,null).bv(B.cF).a3())
s($,"Es","w5",()=>A.G("shop entrance","\u25cb",B.A,null).bv(B.cE).a3())
s($,"Et","w6",()=>A.G("shop entrance","\u25cb",B.p,null).bv(B.cD).a3())
s($,"Eu","w7",()=>A.G("shop entrance","\u25cb",B.a3,null).bv(B.cC).a3())
s($,"Ev","w8",()=>A.G("shop entrance","\u25cb",B.K,null).bv(B.cB).a3())
s($,"Ew","yJ",()=>A.G("shop entrance","\u25cb",B.D,null).bv(B.cJ).a3())
s($,"Ex","yK",()=>A.G("shop entrance","\u25cb",B.P,null).bv(B.cI).a3())
s($,"Ey","yL",()=>A.G("shop entrance","\u25cb",B.m,null).bv(B.cH).a3())
s($,"DO","ux",()=>A.C([$.j4(),30,$.j1(),30,$.fM(),50,$.nm(),10,$.fO(),3,$.fQ(),3,$.nq(),40,$.nr(),40,$.ns(),40,$.je(),20,$.jd(),20,$.jf(),20,$.jc(),20,$.fP(),20,$.j7(),20,$.j6(),20,$.j8(),20,$.ja(),20,$.j9(),20,$.jb(),20,$.np(),40,$.j0(),80,$.no(),15,$.j_(),40,$.iY(),1,$.iZ(),10,$.j5(),1],t.U,t.S))
s($,"DN","vQ",()=>A.C([$.j4(),70,$.j1(),70,$.fM(),50,$.nm(),20,$.fO(),30,$.fQ(),50,$.nq(),100,$.nr(),100,$.ns(),100,$.je(),60,$.jd(),60,$.jf(),60,$.jc(),60,$.fP(),60,$.j7(),60,$.j6(),60,$.j8(),60,$.ja(),60,$.j9(),60,$.jb(),60,$.np(),70,$.j0(),80,$.no(),30,$.j_(),40,$.iY(),60,$.iZ(),40,$.j5(),20],t.U,t.S))
s($,"DM","yG",()=>{var q=$.fM(),p=t.J,o=A.b([$.fR()],p),n=$.fO(),m=$.vU(),l=$.vV()
return A.C([q,o,n,A.b([m,l],p),$.fQ(),A.b([m,l],p),$.nq(),A.b([m,l],p),$.nr(),A.b([m,l],p),$.ns(),A.b([m,l],p),$.iY(),A.b([$.fP()],p),$.j5(),A.b([$.j3()],p)],t.U,t.p)})
s($,"CT","aF",()=>A.c5("none","No",1,null,"",!1,null))
s($,"Dd","yt",()=>A.lo("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"DK","vP",()=>A.A3($.yx().a6(1)))
s($,"Dr","yx",()=>A.zR("something",B.aH,B.y))
s($,"Dq","yw",()=>A.lo("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"Dp","yv",()=>A.lo("^\\(([^)]+)\\)(.*)"))
s($,"Ds","yy",()=>A.zQ("you","you","you",B.cs))
s($,"Db","ys",()=>A.lo("^(\\d{1,3})((\\d{3})+)$"))
s($,"Fk","z_",()=>A.wB(A.av("hX<d>")))
s($,"Fj","yZ",()=>A.wB(A.av("hX<N>")))
s($,"Dl","vI",()=>A.kS(0))
s($,"Dg","bK",()=>A.kS(1))
s($,"Dj","Y",()=>A.kS(2))
s($,"Dm","iX",()=>A.kS(4))
s($,"Dn","b2",()=>A.kS(8))
s($,"Dh","yu",()=>$.bK().c9(0,$.Y()))
s($,"Di","bL",()=>$.bK().c9(0,$.b2()))
s($,"Dk","vH",()=>$.Y().c9(0,$.b2()))
s($,"Df","vG",()=>$.bK().c9(0,$.Y()).c9(0,$.iX()).c9(0,$.b2()))
s($,"DL","yF",()=>{var q=null
return A.Af("uninitialized",q,$.vI(),q,q,q)})
s($,"Fc","we",()=>A.C([B.M,"|",B.S,"/",B.Q,"-",B.R,"\\",B.L,"|",B.U,"/",B.T,"-",B.V,"\\"],t.j,t.N))
s($,"Fd","wf",()=>{var q="\u2022",p="Oo",o=".",n=t.bk,m=A.av("t<E<a0>>")
return A.C([$.aF(),A.b([A.X(q,A.b([B.I],n)),A.X(q,A.b([B.I],n)),A.X(q,A.b([B.k],n))],m),$.eq(),A.b([A.X(p,A.b([B.u,B.K],n)),A.X(o,A.b([B.K],n)),A.X(o,A.b([B.J],n))],m),$.dH(),A.b([A.X("*%",A.b([B.I,B.h],n)),A.X("*%",A.b([B.k,B.w],n)),A.X("\u2022*",A.b([B.k],n)),A.X(q,A.b([B.w],n))],m),$.b9(),A.b([A.X("\u25b2^",A.b([B.h,B.E],n)),A.X("*^",A.b([B.N],n)),A.X("^",A.b([B.m],n)),A.X("^",A.b([B.w,B.m],n)),A.X(o,A.b([B.w,B.m],n))],m),$.dc(),A.b([A.X(p,A.b([B.K,B.J],n)),A.X("o\u2022^",A.b([B.J,B.D],n)),A.X("\u2022^",A.b([B.D,B.F],n)),A.X("^~",A.b([B.D,B.F],n)),A.X("~",A.b([B.F],n)),A.X(o,A.b([B.F,B.ao],n))],m),$.dG(),A.b([A.X(p,A.b([B.E,B.h],n)),A.X("o\u2022~",A.b([B.A,B.h],n)),A.X(":,",A.b([B.A,B.af],n)),A.X(o,A.b([B.A],n))],m),$.ci(),A.b([A.X("*",A.b([B.u],n)),A.X("+x",A.b([B.K,B.u],n)),A.X("+x",A.b([B.J,B.o],n)),A.X(o,A.b([B.f,B.F],n))],m),$.dI(),A.b([A.X("*",A.b([B.O],n)),A.X("-|\\/",A.b([B.P,B.u],n)),A.X(o,A.b([B.t,B.t,B.t,B.O],n))],m),$.bJ(),A.b([A.X(p,A.b([B.ag,B.A],n)),A.X("o\u2022",A.b([B.p,B.p,B.af],n)),A.X(q,A.b([B.B,B.af],n)),A.X(o,A.b([B.B],n))],m),$.da(),A.b([A.X("*%",A.b([B.t,B.t,B.l],n)),A.X(q,A.b([B.t,B.t,B.o],n)),A.X(o,A.b([B.t],n)),A.X(o,A.b([B.t],n))],m),$.db(),A.b([A.X("*",A.b([B.u],n)),A.X("x+",A.b([B.u,B.E],n)),A.X(":;\"'`,",A.b([B.E,B.h],n)),A.X(o,A.b([B.o,B.E],n))],m),$.dJ(),A.b([A.X("Oo*+",A.b([B.O,B.o],n)),A.X("o+",A.b([B.P,B.p],n)),A.X("\u2022.",A.b([B.ao,B.B,B.B],n))],m)],t.h,A.av("E<E<a0>>"))})
s($,"D6","yn",()=>A.at("!",B.a3,null))
s($,"Da","yr",()=>A.at("/",B.K,null))
s($,"D5","ym",()=>A.at("\\",B.K,null))
s($,"D7","yo",()=>A.at("-",B.a3,null))
s($,"D9","yq",()=>A.at("<",B.a3,null))
s($,"D8","yp",()=>A.at(">",B.a3,null))
s($,"DF","vK",()=>A.C([$.eq(),"A",$.dH(),"E",$.b9(),"F",$.dc(),"W",$.dG(),"A",$.ci(),"C",$.dI(),"L",$.bJ(),"P",$.da(),"D",$.db(),"L",$.dJ(),"S"],t.h,t.N))
r($,"Co","z1",()=>A.Aj(1,1))
s($,"Fn","wh",()=>{var q,p,o,n=A.D(t.U,A.av("+(e,e,e)"))
n.h(0,$.es(),B.aJ)
n.h(0,$.de(),B.cy)
n.h(0,$.cE(),B.aJ)
n.h(0,$.bx(),B.bx)
n.h(0,$.cF(),B.aJ)
n.h(0,$.j2(),B.aJ)
n.h(0,$.dd(),B.cz)
n.h(0,$.er(),B.cy)
n.h(0,$.fN(),B.iT)
n.h(0,$.nn(),B.bx)
n.h(0,$.uA(),B.bx)
n.h(0,$.uB(),B.iV)
n.h(0,$.uC(),B.iW)
n.h(0,$.j3(),B.jz)
n.h(0,$.vX(),B.aJ)
n.h(0,$.j4(),B.jc)
n.h(0,$.j1(),B.jd)
n.h(0,$.w1(),B.je)
n.h(0,$.uz(),B.jf)
n.h(0,$.w0(),B.jg)
n.h(0,$.uy(),B.jh)
n.h(0,$.vS(),B.jA)
n.h(0,$.vT(),B.jB)
n.h(0,$.yI(),B.ji)
n.h(0,$.uD(),B.jj)
n.h(0,$.fM(),B.iR)
n.h(0,$.nm(),B.iX)
n.h(0,$.fR(),B.cz)
n.h(0,$.uE(),B.iS)
n.h(0,$.vU(),B.iY)
n.h(0,$.vV(),B.iZ)
n.h(0,$.fO(),B.j7)
n.h(0,$.fQ(),B.j8)
n.h(0,$.nq(),B.j9)
n.h(0,$.nr(),B.ja)
n.h(0,$.ns(),B.jb)
n.h(0,$.np(),B.jk)
n.h(0,$.j0(),B.jl)
n.h(0,$.j_(),B.jm)
n.h(0,$.no(),B.jn)
n.h(0,$.je(),B.ab)
n.h(0,$.jd(),B.ab)
n.h(0,$.jf(),B.ab)
n.h(0,$.jc(),B.ab)
n.h(0,$.fP(),B.ab)
n.h(0,$.j7(),B.ab)
n.h(0,$.j6(),B.ab)
n.h(0,$.j8(),B.ab)
n.h(0,$.ja(),B.ab)
n.h(0,$.j9(),B.ab)
n.h(0,$.jb(),B.ab)
n.h(0,$.iY(),B.jo)
n.h(0,$.uF(),B.iU)
for(q=$.yH(),p=q.length,o=0;o<q.length;q.length===p||(0,A.p)(q),++o)n.h(0,q[o],B.jp)
n.h(0,$.w9(),B.jq)
n.h(0,$.iZ(),B.jr)
n.h(0,$.vR(),B.js)
n.h(0,$.vY(),B.jt)
n.h(0,$.vZ(),B.ju)
n.h(0,$.w2(),B.jv)
n.h(0,$.wa(),B.jw)
n.h(0,$.wb(),B.jx)
n.h(0,$.j5(),B.jy)
n.h(0,$.vW(),B.j_)
n.h(0,$.w_(),B.j0)
n.h(0,$.w3(),B.j1)
n.h(0,$.w4(),B.j2)
n.h(0,$.w5(),B.j3)
n.h(0,$.w6(),B.j4)
n.h(0,$.w7(),B.j5)
n.h(0,$.w8(),B.j6)
n.h(0,$.yJ(),B.by)
n.h(0,$.yK(),B.by)
n.h(0,$.yL(),B.by)
return n})
s($,"Fm","o",()=>new A.qU(A.A4(A.x2())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.f_,SharedArrayBuffer:A.f_,ArrayBufferView:A.hB,DataView:A.kV,Float32Array:A.kW,Float64Array:A.kX,Int16Array:A.kY,Int32Array:A.kZ,Int8Array:A.l_,Uint16Array:A.l0,Uint32Array:A.l1,Uint8ClampedArray:A.hC,CanvasPixelArray:A.hC,Uint8Array:A.l2})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.f0.$nativeSuperclassTag="ArrayBufferView"
A.ix.$nativeSuperclassTag="ArrayBufferView"
A.iy.$nativeSuperclassTag="ArrayBufferView"
A.hz.$nativeSuperclassTag="ArrayBufferView"
A.iz.$nativeSuperclassTag="ArrayBufferView"
A.iA.$nativeSuperclassTag="ArrayBufferView"
A.hA.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.Cf
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
