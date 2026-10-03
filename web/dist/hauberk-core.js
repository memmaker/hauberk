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
if(a[b]!==s){A.CG(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.vz(b)
return new s(c,this)}:function(){if(s===null)s=A.vz(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.vz(a).prototype
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
vF(a,b,c,d){return{i:a,p:b,e:c,x:d}},
vB(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.vC==null){A.Cj()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.m(A.be("Return interceptor for "+A.J(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.tu
if(o==null)o=$.tu=A.u5(n)
p=q[o]}if(p!=null)return p
p=A.Cr(a)
if(p!=null)return p
if(typeof a=="function")return B.hK
s=Object.getPrototypeOf(a)
if(s==null)return B.ct
if(s===Object.prototype)return B.ct
if(typeof q=="function"){o=$.tu
if(o==null)o=$.tu=A.u5(n)
Object.defineProperty(q,o,{value:B.bC,enumerable:false,writable:true,configurable:true})
return B.bC}return B.bC},
x_(a,b){if(a<0||a>4294967295)throw A.m(A.cw(a,0,4294967295,"length",null))
return J.zP(new Array(a),b)},
x0(a,b){if(a<0)throw A.m(A.aE("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.i("t<0>"))},
wZ(a,b){if(a<0)throw A.m(A.aE("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.i("t<0>"))},
zP(a,b){var s=A.a(a,b.i("t<0>"))
s.$flags=1
return s},
zQ(a,b){var s=t.bP
return J.zi(s.a(a),s.a(b))},
x1(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
zR(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.x1(r))break;++b}return b},
zS(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.b(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.x1(q))break}return b},
ek(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hl.prototype
return J.kA.prototype}if(typeof a=="string")return J.ds.prototype
if(a==null)return J.hm.prototype
if(typeof a=="boolean")return J.hk.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dt.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.P)return a
return J.vB(a)},
fI(a){if(typeof a=="string")return J.ds.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dt.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.P)return a
return J.vB(a)},
fJ(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.dt.prototype
if(typeof a=="symbol")return J.hq.prototype
if(typeof a=="bigint")return J.ho.prototype
return a}if(a instanceof A.P)return a
return J.vB(a)},
Cb(a){if(typeof a=="number")return J.dY.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dB.prototype
return a},
Cc(a){if(typeof a=="number")return J.dY.prototype
if(typeof a=="string")return J.ds.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dB.prototype
return a},
Cd(a){if(typeof a=="string")return J.ds.prototype
if(a==null)return a
if(!(a instanceof A.P))return J.dB.prototype
return a},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ek(a).X(a,b)},
b4(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Cm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fI(a).m(a,b)},
wu(a,b){return J.fJ(a).j(a,b)},
zh(a,b){return J.Cd(a).hj(a,b)},
wv(a,b,c){return J.Cb(a).M(a,b,c)},
zi(a,b){return J.Cc(a).al(a,b)},
uQ(a,b){return J.fJ(a).aX(a,b)},
ck(a){return J.ek(a).ga0(a)},
au(a){return J.fJ(a).gL(a)},
dO(a){return J.fI(a).gI(a)},
zj(a){return J.ek(a).gaJ(a)},
zk(a,b,c){return J.fJ(a).cK(a,b,c)},
jg(a){return J.fJ(a).eb(a)},
eu(a){return J.ek(a).t(a)},
zl(a,b){return J.fJ(a).ld(a,b)},
ku:function ku(){},
hk:function hk(){},
hm:function hm(){},
hp:function hp(){},
dv:function dv(){},
la:function la(){},
dB:function dB(){},
dt:function dt(){},
ho:function ho(){},
hq:function hq(){},
t:function t(a){this.$ti=a},
kz:function kz(){},
pJ:function pJ(a){this.$ti=a},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dY:function dY(){},
hl:function hl(){},
kA:function kA(){},
ds:function ds(){}},A={v0:function v0(){},
x4(a){return new A.du("Field '"+a+"' has been assigned during initialization.")},
dZ(a){return new A.du("Field '"+a+"' has not been initialized.")},
zV(a){return new A.du("Local '"+a+"' has not been initialized.")},
x5(a){return new A.du("Field '"+a+"' has already been initialized.")},
cZ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
rK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
vy(a,b,c){return a},
vD(a){var s,r
for(s=$.bX.length,r=0;r<s;++r)if(a===$.bX[r])return!0
return!1},
As(a,b,c,d){A.hM(b,"start")
if(c!=null){A.hM(c,"end")
if(b>c)A.a_(A.cw(b,0,c,"start",null))}return new A.i3(a,b,c,d.i("i3<0>"))},
q9(a,b,c,d){if(t.gt.b(a))return new A.cM(a,b,c.i("@<0>").ac(d).i("cM<1,2>"))
return new A.cU(a,b,c.i("@<0>").ac(d).i("cU<1,2>"))},
At(a,b,c){var s="takeCount"
A.zo(b,s,t.S)
A.hM(b,s)
if(t.gt.b(a))return new A.h6(a,b,c.i("h6<0>"))
return new A.e7(a,b,c.i("e7<0>"))},
ct(){return new A.e6("No element")},
zN(){return new A.e6("Too many elements")},
zM(){return new A.e6("Too few elements")},
du:function du(a){this.a=a},
dl:function dl(a){this.a=a},
r4:function r4(){},
M:function M(){},
aH:function aH(){},
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
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(a,b,c){this.a=a
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
aG:function aG(){},
dC:function dC(){},
fo:function fo(){},
cX:function cX(a,b){this.a=a
this.$ti=b},
yx(a){var s=A.yw(a)
if(s!=null)return s
return"minified:"+a},
Cm(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
J(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.eu(a)
return s},
hJ(a){var s,r=$.xc
if(r==null)r=$.xc=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
le(a){var s,r,q,p
if(a instanceof A.P)return A.bW(A.cg(a),null)
s=J.ek(a)
if(s===B.hH||s===B.hL||t.cx.b(a)){r=B.bF(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.cg(a),null)},
xe(a){var s,r,q
if(a==null||typeof a=="number"||A.tS(a))return J.eu(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dk)return a.t(0)
if(a instanceof A.c1)return a.jy(!0)
s=$.zc()
for(r=0;r<1;++r){q=s[r].pQ(a)
if(q!=null)return q}return"Instance of '"+A.le(a)+"'"},
xd(){return Date.now()},
Af(){var s,r
if($.qE!==0)return
$.qE=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qE=1e6
$.v6=new A.qD(r)},
xb(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Ag(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r){q=a[r]
if(!A.fB(q))throw A.m(A.iT(q))
if(q<=65535)B.a.j(p,q)
else if(q<=1114111){B.a.j(p,55296+(B.c.eI(q-65536,10)&1023))
B.a.j(p,56320+(q&1023))}else throw A.m(A.iT(q))}return A.xb(p)},
xf(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fB(q))throw A.m(A.iT(q))
if(q<0)throw A.m(A.iT(q))
if(q>65535)return A.Ag(a)}return A.xb(a)},
aS(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.eI(s,10)|55296)>>>0,s&1023|56320)}}throw A.m(A.cw(a,0,1114111,null,null))},
bQ(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Ae(a){return a.c?A.bQ(a).getUTCFullYear()+0:A.bQ(a).getFullYear()+0},
Ac(a){return a.c?A.bQ(a).getUTCMonth()+1:A.bQ(a).getMonth()+1},
A8(a){return a.c?A.bQ(a).getUTCDate()+0:A.bQ(a).getDate()+0},
A9(a){return a.c?A.bQ(a).getUTCHours()+0:A.bQ(a).getHours()+0},
Ab(a){return a.c?A.bQ(a).getUTCMinutes()+0:A.bQ(a).getMinutes()+0},
Ad(a){return a.c?A.bQ(a).getUTCSeconds()+0:A.bQ(a).getSeconds()+0},
Aa(a){return a.c?A.bQ(a).getUTCMilliseconds()+0:A.bQ(a).getMilliseconds()+0},
A7(a){var s=a.$thrownJsError
if(s==null)return null
return A.el(s)},
Ah(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aU(a,s)
a.$thrownJsError=s
s.stack=""}},
Ch(a){throw A.m(A.iT(a))},
b(a,b){if(a==null)J.dO(a)
throw A.m(A.nk(a,b))},
nk(a,b){var s,r="index"
if(!A.fB(b))return new A.cn(!0,b,r,null)
s=A.r(J.dO(a))
if(b<0||b>=s)return A.p3(b,s,a,null,r)
return A.hL(b,r)},
iT(a){return new A.cn(!0,a,null,null)},
m(a){return A.aU(a,new Error())},
aU(a,b){var s
if(a==null)a=new A.d3()
b.dartException=a
s=A.CN
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
CN(){return J.eu(this.dartException)},
a_(a,b){throw A.aU(a,b==null?new Error():b)},
bx(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.a_(A.B8(a,b,c),s)},
B8(a,b,c){var s,r,q,p,o,n,m,l,k
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
o(a){throw A.m(A.aW(a))},
d4(a){var s,r,q,p,o,n
a=A.ys(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rZ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
t_(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xv(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
v1(a,b){var s=b==null,r=s?null:b.method
return new A.kB(a,r,s?null:b.receiver)},
dH(a){if(a==null)return new A.qu(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.eo(a,a.dartException)
return A.BW(a)},
eo(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
BW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.eI(r,16)&8191)===10)switch(q){case 438:return A.eo(a,A.v1(A.J(s)+" (Error "+q+")",null))
case 445:case 5007:A.J(s)
return A.eo(a,new A.hF())}}if(a instanceof TypeError){p=$.z0()
o=$.z1()
n=$.z2()
m=$.z3()
l=$.z6()
k=$.z7()
j=$.z5()
$.z4()
i=$.z9()
h=$.z8()
g=p.bV(s)
if(g!=null)return A.eo(a,A.v1(A.a4(s),g))
else{g=o.bV(s)
if(g!=null){g.method="call"
return A.eo(a,A.v1(A.a4(s),g))}else if(n.bV(s)!=null||m.bV(s)!=null||l.bV(s)!=null||k.bV(s)!=null||j.bV(s)!=null||m.bV(s)!=null||i.bV(s)!=null||h.bV(s)!=null){A.a4(s)
return A.eo(a,new A.hF())}}return A.eo(a,new A.lT(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.i_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.eo(a,new A.cn(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.i_()
return a},
el(a){var s
if(a==null)return new A.iI(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.iI(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
nl(a){if(a==null)return J.ck(a)
if(typeof a=="object")return A.hJ(a)
return J.ck(a)},
C3(a){if(typeof a=="number")return B.e.ga0(a)
if(a instanceof A.na)return A.hJ(a)
if(a instanceof A.c1)return a.ga0(a)
return A.nl(a)},
ye(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
Bn(a,b,c,d,e,f){t.gY.a(a)
switch(A.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.m(new A.tj("Unsupported number of arguments for wrapped closure"))},
fF(a,b){var s=a.$identity
if(!!s)return s
s=A.C4(a,b)
a.$identity=s
return s},
C4(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Bn)},
zx(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.lF().constructor.prototype):Object.create(new A.ex(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.zt(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
zt(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.m("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zq)}throw A.m("Error in functionType of tearoff")},
zu(a,b,c,d){var s=A.wF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wG(a,b,c,d){if(c)return A.zw(a,b,d)
return A.zu(b.length,d,a,b)},
zv(a,b,c,d){var s=A.wF,r=A.zr
switch(b?-1:a){case 0:throw A.m(new A.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
zw(a,b,c){var s,r
if($.wD==null)$.wD=A.wC("interceptor")
if($.wE==null)$.wE=A.wC("receiver")
s=b.length
r=A.zv(s,c,a,b)
return r},
vz(a){return A.zx(a)},
zq(a,b){return A.iN(v.typeUniverse,A.cg(a.a),b)},
wF(a){return a.a},
zr(a){return a.b},
wC(a){var s,r,q,p=new A.ex("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.m(A.aE("Field name "+a+" not found.",null))},
u5(a){return v.getIsolateTag(a)},
Cr(a){var s,r,q,p,o,n=A.a4($.yi.$1(a)),m=$.u1[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ua[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.vp($.ya.$2(a,n))
if(q!=null){m=$.u1[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ua[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ul(s)
$.u1[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ua[n]=s
return s}if(p==="-"){o=A.ul(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yq(a,s)
if(p==="*")throw A.m(A.be(n))
if(v.leafTags[n]===true){o=A.ul(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yq(a,s)},
yq(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.vF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ul(a){return J.vF(a,!1,null,!!a.$ibP)},
Ct(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ul(s)
else return J.vF(s,c,null,null)},
Cj(){if(!0===$.vC)return
$.vC=!0
A.Ck()},
Ck(){var s,r,q,p,o,n,m,l
$.u1=Object.create(null)
$.ua=Object.create(null)
A.Ci()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yr.$1(o)
if(n!=null){m=A.Ct(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Ci(){var s,r,q,p,o,n,m=B.cQ()
m=A.fE(B.cR,A.fE(B.cS,A.fE(B.bG,A.fE(B.bG,A.fE(B.cT,A.fE(B.cU,A.fE(B.cV(B.bF),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.yi=new A.u7(p)
$.ya=new A.u8(o)
$.yr=new A.u9(n)},
fE(a,b){return a(b)||b},
AN(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.b(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
C6(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
x2(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.m(A.wP("Illegal RegExp pattern ("+String(o)+")",a))},
CD(a,b,c){var s=a.indexOf(b,c)
return s>=0},
yd(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ys(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bn(a,b,c){var s
if(typeof b=="string")return A.CF(a,b,c)
if(b instanceof A.hn){s=b.gja()
s.lastIndex=0
return a.replace(s,A.yd(c))}return A.CE(a,b,c)},
CE(a,b,c){var s,r,q,p
for(s=J.zh(b,a),s=s.gL(s),r=0,q="";s.q();){p=s.gH()
q=q+a.substring(r,p.gik())+c
r=p.ghx()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
CF(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.ys(b),"g"),A.yd(c))},
y7(a){return a},
yu(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hj(0,a),s=new A.id(s.a,s.b,s.c),r=t.lu,q=0,p="";s.q();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.J(A.y7(B.i.aM(a,q,m)))+A.J(c.$1(o))
q=m+n[0].length}s=p+A.J(A.y7(B.i.cX(a,q)))
return s.charCodeAt(0)==0?s:s},
O:function O(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a){this.a=a},
eD:function eD(){},
bk:function bk(a,b,c){this.a=a
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
dX:function dX(a,b){this.a=a
this.$ti=b},
qD:function qD(a){this.a=a},
hU:function hU(){},
rZ:function rZ(a,b,c,d,e,f){var _=this
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
lT:function lT(a){this.a=a},
qu:function qu(a){this.a=a},
iI:function iI(a){this.a=a
this.b=null},
dk:function dk(){},
jF:function jF(){},
jG:function jG(){},
lK:function lK(){},
lF:function lF(){},
ex:function ex(a,b){this.a=a
this.b=b},
lu:function lu(a){this.a=a},
c7:function c7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pK:function pK(a){this.a=a},
pU:function pU(a,b){var _=this
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
e_:function e_(a,b,c,d){var _=this
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
u7:function u7(a){this.a=a},
u8:function u8(a){this.a=a},
u9:function u9(a){this.a=a},
c1:function c1(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
iw:function iw(a){this.b=a},
m3:function m3(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lG:function lG(a,b){this.a=a
this.c=b},
n5:function n5(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
CG(a){throw A.aU(A.x4(a),new Error())},
c(){throw A.aU(A.dZ(""),new Error())},
ax(){throw A.aU(A.x5(""),new Error())},
ep(){throw A.aU(A.x4(""),new Error())},
eb(){var s=new A.tg()
return s.b=s},
tg:function tg(){this.b=null},
db(a,b,c){if(a>>>0!==a||a>=c)throw A.m(A.nk(b,a))},
f0:function f0(){},
hB:function hB(){},
kV:function kV(){},
f1:function f1(){},
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
vc(a,b){var s=b.c
return s==null?b.c=A.iL(a,"eQ",[b.x]):s},
xp(a){var s=a.w
if(s===6||s===7)return A.xp(a.x)
return s===11||s===12},
An(a){return a.as},
Cv(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
at(a){return A.tJ(v.typeUniverse,a,!1)},
eh(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.eh(a1,s,a3,a4)
if(r===s)return a2
return A.xH(a1,r,!0)
case 7:s=a2.x
r=A.eh(a1,s,a3,a4)
if(r===s)return a2
return A.xG(a1,r,!0)
case 8:q=a2.y
p=A.fD(a1,q,a3,a4)
if(p===q)return a2
return A.iL(a1,a2.x,p)
case 9:o=a2.x
n=A.eh(a1,o,a3,a4)
m=a2.y
l=A.fD(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vn(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fD(a1,j,a3,a4)
if(i===j)return a2
return A.xI(a1,k,i)
case 11:h=a2.x
g=A.eh(a1,h,a3,a4)
f=a2.y
e=A.BT(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xF(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fD(a1,d,a3,a4)
o=a2.x
n=A.eh(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vo(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.m(A.bM("Attempted to substitute unexpected RTI kind "+a0))}},
fD(a,b,c,d){var s,r,q,p,o=b.length,n=A.tK(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.eh(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
BU(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tK(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.eh(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
BT(a,b,c,d){var s,r=b.a,q=A.fD(a,r,c,d),p=b.b,o=A.fD(a,p,c,d),n=b.c,m=A.BU(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.mx()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
yc(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Cf(s)
return a.$S()}return null},
Cl(a,b){var s
if(A.xp(b))if(a instanceof A.dk){s=A.yc(a)
if(s!=null)return s}return A.cg(a)},
cg(a){if(a instanceof A.P)return A.y(a)
if(Array.isArray(a))return A.N(a)
return A.vt(J.ek(a))},
N(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.vt(a)},
vt(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Bi(a,s)},
Bi(a,b){var s=a instanceof A.dk?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.AW(v.typeUniverse,s.name)
b.$ccache=r
return r},
Cf(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
Ce(a){return A.ei(A.y(a))},
vw(a){var s
if(a instanceof A.c1)return A.C8(a.$r,a.ey())
s=a instanceof A.dk?A.yc(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.zj(a).a
if(Array.isArray(a))return A.N(a)
return A.cg(a)},
ei(a){var s=a.r
return s==null?a.r=new A.na(a):s},
C8(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.b(q,0)
s=A.iN(v.typeUniverse,A.vw(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.b(q,r)
s=A.xK(v.typeUniverse,s,A.vw(q[r]))}return A.iN(v.typeUniverse,s,a)},
ch(a){return A.ei(A.tJ(v.typeUniverse,a,!1))},
Bh(a){var s=this
s.b=A.BR(s)
return s.b(a)},
BR(a){var s,r,q,p,o
if(a===t.K)return A.Bt
if(A.em(a))return A.Bx
s=a.w
if(s===6)return A.Bf
if(s===1)return A.xV
if(s===7)return A.Bo
r=A.BQ(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.em)){a.f="$i"+q
if(q==="C")return A.Br
if(a===t.bp)return A.Bq
return A.Bw}}else if(s===10){p=A.C6(a.x,a.y)
o=p==null?A.xV:p
return o==null?A.dF(o):o}return A.Bd},
BQ(a){if(a.w===8){if(a===t.S)return A.fB
if(a===t.i||a===t.cZ)return A.Bs
if(a===t.N)return A.Bv
if(a===t.y)return A.tS}return null},
Bg(a){var s=this,r=A.Bc
if(A.em(s))r=A.B_
else if(s===t.K)r=A.dF
else if(A.fK(s)){r=A.Be
if(s===t.aV)r=A.xN
else if(s===t.jv)r=A.vp
else if(s===t.fU)r=A.AY
else if(s===t.ae)r=A.xO
else if(s===t.dz)r=A.AZ
else if(s===t.mU)r=A.bV}else if(s===t.S)r=A.r
else if(s===t.N)r=A.a4
else if(s===t.y)r=A.dE
else if(s===t.cZ)r=A.eg
else if(s===t.i)r=A.bw
else if(s===t.bp)r=A.a2
s.a=r
return s.a(a)},
Bd(a){var s=this
if(a==null)return A.fK(s)
return A.Cn(v.typeUniverse,A.Cl(a,s),s)},
Bf(a){if(a==null)return!0
return this.x.b(a)},
Bw(a){var s,r=this
if(a==null)return A.fK(r)
s=r.f
if(a instanceof A.P)return!!a[s]
return!!J.ek(a)[s]},
Br(a){var s,r=this
if(a==null)return A.fK(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.P)return!!a[s]
return!!J.ek(a)[s]},
Bq(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.P)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
xU(a){if(typeof a=="object"){if(a instanceof A.P)return t.bp.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Bc(a){var s=this
if(a==null){if(A.fK(s))return a}else if(s.b(a))return a
throw A.aU(A.xQ(a,s),new Error())},
Be(a){var s=this
if(a==null||s.b(a))return a
throw A.aU(A.xQ(a,s),new Error())},
xQ(a,b){return new A.iJ("TypeError: "+A.xy(a,A.bW(b,null)))},
xy(a,b){return A.jZ(a)+": type '"+A.bW(A.vw(a),null)+"' is not a subtype of type '"+b+"'"},
c3(a,b){return new A.iJ("TypeError: "+A.xy(a,b))},
Bo(a){var s=this
return s.x.b(a)||A.vc(v.typeUniverse,s).b(a)},
Bt(a){return a!=null},
dF(a){if(a!=null)return a
throw A.aU(A.c3(a,"Object"),new Error())},
Bx(a){return!0},
B_(a){return a},
xV(a){return!1},
tS(a){return!0===a||!1===a},
dE(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aU(A.c3(a,"bool"),new Error())},
AY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aU(A.c3(a,"bool?"),new Error())},
bw(a){if(typeof a=="number")return a
throw A.aU(A.c3(a,"double"),new Error())},
AZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aU(A.c3(a,"double?"),new Error())},
fB(a){return typeof a=="number"&&Math.floor(a)===a},
r(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aU(A.c3(a,"int"),new Error())},
xN(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aU(A.c3(a,"int?"),new Error())},
Bs(a){return typeof a=="number"},
eg(a){if(typeof a=="number")return a
throw A.aU(A.c3(a,"num"),new Error())},
xO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aU(A.c3(a,"num?"),new Error())},
Bv(a){return typeof a=="string"},
a4(a){if(typeof a=="string")return a
throw A.aU(A.c3(a,"String"),new Error())},
vp(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aU(A.c3(a,"String?"),new Error())},
a2(a){if(A.xU(a))return a
throw A.aU(A.c3(a,"JSObject"),new Error())},
bV(a){if(a==null)return a
if(A.xU(a))return a
throw A.aU(A.c3(a,"JSObject?"),new Error())},
y5(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
BK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.y5(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
xR(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.b(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bW(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bW(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bW(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bW(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bW(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bW(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bW(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bW(a.x,b)+">"
if(l===8){p=A.BV(a.x)
o=a.y
return o.length>0?p+("<"+A.y5(o,b)+">"):p}if(l===10)return A.BK(a,b)
if(l===11)return A.xR(a,b,null)
if(l===12)return A.xR(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.b(b,n)
return b[n]}return"?"},
BV(a){var s=A.yw(a)
if(s!=null)return s
return"minified:"+a},
AX(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
AW(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tJ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iM(a,5,"#")
q=A.tK(s)
for(p=0;p<s;++p)q[p]=r
o=A.iL(a,b,q)
n[b]=o
return o}else return m},
AV(a,b){return A.xL(a.tR,b)},
AU(a,b){return A.xL(a.eT,b)},
tJ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xJ(a,null,b,!1)
r.set(b,s)
return s},
iN(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xJ(a,b,c,!0)
q.set(c,r)
return r},
xK(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vn(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
xJ(a,b,c,d){return A.AL(A.AF(a,b,c,d))},
dD(a,b){b.a=A.Bg
b.b=A.Bh
return b},
iM(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cb(null,null)
s.w=b
s.as=c
r=A.dD(a,s)
a.eC.set(c,r)
return r},
xH(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.AS(a,b,r,c)
a.eC.set(r,s)
return s},
AS(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.em(b))if(!(b===t.iV||b===t.bE))if(s!==6)r=s===7&&A.fK(b.x)
if(r)return b
else if(s===1)return t.iV}q=new A.cb(null,null)
q.w=6
q.x=b
q.as=c
return A.dD(a,q)},
xG(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.AQ(a,b,r,c)
a.eC.set(r,s)
return s},
AQ(a,b,c,d){var s,r
if(d){s=b.w
if(A.em(b)||b===t.K)return b
else if(s===1)return A.iL(a,"eQ",[b])
else if(b===t.iV||b===t.bE)return t.gK}r=new A.cb(null,null)
r.w=7
r.x=b
r.as=c
return A.dD(a,r)},
AT(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cb(null,null)
s.w=13
s.x=b
s.as=q
r=A.dD(a,s)
a.eC.set(q,r)
return r},
iK(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
AP(a){var s,r,q,p,o,n=a.length
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
q=A.dD(a,r)
a.eC.set(p,q)
return q},
vn(a,b,c){var s,r,q,p,o,n
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
n=A.dD(a,o)
a.eC.set(q,n)
return n},
xI(a,b,c){var s,r,q="+"+(b+"("+A.iK(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cb(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dD(a,s)
a.eC.set(q,r)
return r},
xF(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iK(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iK(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.AP(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cb(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dD(a,p)
a.eC.set(r,o)
return o},
vo(a,b,c,d){var s,r=b.as+("<"+A.iK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.AR(a,b,c,r,d)
a.eC.set(r,s)
return s},
AR(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tK(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.eh(a,b,r,0)
m=A.fD(a,c,r,0)
return A.vo(a,n,m,c!==m)}}l=new A.cb(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dD(a,l)},
AF(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
AL(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.AH(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xC(a,r,l,k,!1)
else if(q===46)r=A.xC(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ef(a.u,a.e,k.pop()))
break
case 94:k.push(A.AT(a.u,k.pop()))
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
case 62:A.AJ(a,k)
break
case 38:A.AI(a,k)
break
case 63:p=a.u
k.push(A.xH(p,A.ef(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xG(p,A.ef(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.AG(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xD(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.AM(a.u,a.e,o)
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
return A.ef(a.u,a.e,m)},
AH(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xC(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.AX(s,o.x)[p]
if(n==null)A.a_('No "'+p+'" in "'+A.An(o)+'"')
d.push(A.iN(s,o,n))}else d.push(p)
return m},
AJ(a,b){var s,r=a.u,q=A.xB(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iL(r,p,q))
else{s=A.ef(r,a.e,p)
switch(s.w){case 11:b.push(A.vo(r,s,q,a.n))
break
default:b.push(A.vn(r,s,q))
break}}},
AG(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xB(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ef(p,a.e,o)
q=new A.mx()
q.a=s
q.b=n
q.c=m
b.push(A.xF(p,r,q))
return
case-4:b.push(A.xI(p,b.pop(),s))
return
default:throw A.m(A.bM("Unexpected state under `()`: "+A.J(o)))}},
AI(a,b){var s=b.pop()
if(0===s){b.push(A.iM(a.u,1,"0&"))
return}if(1===s){b.push(A.iM(a.u,4,"1&"))
return}throw A.m(A.bM("Unexpected extended operation "+A.J(s)))},
xB(a,b){var s=b.splice(a.p)
A.xD(a.u,a.e,s)
a.p=b.pop()
return s},
ef(a,b,c){if(typeof c=="string")return A.iL(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.AK(a,b,c)}else return c},
xD(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ef(a,b,c[s])},
AM(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ef(a,b,c[s])},
AK(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.m(A.bM("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.m(A.bM("Bad index "+c+" for "+b.t(0)))},
Cn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.b0(a,b,null,c,null)
r.set(c,s)}return s},
b0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.em(d))return!0
s=b.w
if(s===4)return!0
if(A.em(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.b0(a,c[b.x],c,d,e))return!0
q=d.w
p=t.iV
if(b===p||b===t.bE){if(q===7)return A.b0(a,b,c,d.x,e)
return d===p||d===t.bE||q===6}if(d===t.K){if(s===7)return A.b0(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.b0(a,b.x,c,d,e))return!1
return A.b0(a,A.vc(a,b),c,d,e)}if(s===6)return A.b0(a,p,c,d,e)&&A.b0(a,b.x,c,d,e)
if(q===7){if(A.b0(a,b,c,d.x,e))return!0
return A.b0(a,b,c,A.vc(a,d),e)}if(q===6)return A.b0(a,b,c,p,e)||A.b0(a,b,c,d.x,e)
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
if(!A.b0(a,j,c,i,e)||!A.b0(a,i,e,j,c))return!1}return A.xT(a,b.x,c,d.x,e)}if(q===11){if(b===t.dY)return!0
if(p)return!1
return A.xT(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Bp(a,b,c,d,e)}if(o&&q===10)return A.Bu(a,b,c,d,e)
return!1},
xT(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.b0(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.b0(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.b0(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.b0(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.b0(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Bp(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iN(a,b,r[o])
return A.xM(a,p,null,c,d.y,e)}return A.xM(a,b.y,null,c,d.y,e)},
xM(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.b0(a,b[s],d,e[s],f))return!1
return!0},
Bu(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.b0(a,r[s],c,q[s],e))return!1
return!0},
fK(a){var s=a.w,r=!0
if(!(a===t.iV||a===t.bE))if(!A.em(a))if(s!==6)r=s===7&&A.fK(a.x)
return r},
em(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
xL(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tK(a){return a>0?new Array(a):v.typeUniverse.sEA},
cb:function cb(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
mx:function mx(){this.c=this.b=this.a=null},
na:function na(a){this.a=a},
mo:function mo(){},
iJ:function iJ(a){this.a=a},
Az(){var s,r,q
if(self.scheduleImmediate!=null)return A.BZ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.fF(new A.ta(s),1)).observe(r,{childList:true})
return new A.t9(s,r,q)}else if(self.setImmediate!=null)return A.C_()
return A.C0()},
AA(a){self.scheduleImmediate(A.fF(new A.tb(t.O.a(a)),0))},
AB(a){self.setImmediate(A.fF(new A.tc(t.O.a(a)),0))},
AC(a){t.O.a(a)
A.AO(0,a)},
AO(a,b){var s=new A.tH()
s.lO(a,b)
return s},
xE(a,b,c){return 0},
uS(a){var s
if(t.fz.b(a)){s=a.gdr()
if(s!=null)return s}return B.aK},
Bk(a,b){if($.aT===B.a8)return null
return null},
Bl(a,b){if($.aT!==B.a8)A.Bk(a,b)
if(t.fz.b(a)){b=a.gdr()
if(b==null){A.Ah(a,B.aK)
b=B.aK}}else b=B.aK
return new A.cp(a,b)},
vh(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.j_;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.Ao()
b.iw(new A.cp(new A.cn(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.jh(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.dF()
b.er(o.a)
A.ec(b,p)
return}b.a^=2
A.ni(null,null,b.b,t.O.a(new A.tn(o,b)))},
ec(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.tW(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.ec(d.a,c)
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
A.tW(j.a,j.b)
return}g=$.aT
if(g!==h)$.aT=h
else g=null
c=c.c
if((c&15)===8)new A.tr(q,d,n).$0()
else if(o){if((c&1)!==0)new A.tq(q,j).$0()}else if((c&2)!==0)new A.tp(d,q).$0()
if(g!=null)$.aT=g
c=q.c
if(c instanceof A.bH){p=q.a.$ti
p=p.i("eQ<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.eG(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.vh(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.eG(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
BL(a,b){var s=t.ng
if(s.b(a))return s.a(a)
s=t.mq
if(s.b(a))return s.a(a)
throw A.m(A.uR(a,"onError",u.c))},
BA(){var s,r
for(s=$.fC;s!=null;s=$.fC){$.iR=null
r=s.b
$.fC=r
if(r==null)$.iQ=null
s.a.$0()}},
BS(){$.vu=!0
try{A.BA()}finally{$.iR=null
$.vu=!1
if($.fC!=null)$.wp().$1(A.yb())}},
y6(a){var s=new A.m6(a),r=$.iQ
if(r==null){$.fC=$.iQ=s
if(!$.vu)$.wp().$1(A.yb())}else $.iQ=r.b=s},
BP(a){var s,r,q,p=$.fC
if(p==null){A.y6(a)
$.iR=$.iQ
return}s=new A.m6(a)
r=$.iR
if(r==null){s.b=p
$.fC=$.iR=s}else{q=r.b
s.b=q
$.iR=r.b=s
if(q==null)$.iQ=s}},
tW(a,b){A.BP(new A.tX(a,b))},
y3(a,b,c,d,e){var s,r=$.aT
if(r===c)return d.$0()
$.aT=c
s=r
try{r=d.$0()
return r}finally{$.aT=s}},
y4(a,b,c,d,e,f,g){var s,r=$.aT
if(r===c)return d.$1(e)
$.aT=c
s=r
try{r=d.$1(e)
return r}finally{$.aT=s}},
BM(a,b,c,d,e,f,g,h,i){var s,r=$.aT
if(r===c)return d.$2(e,f)
$.aT=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aT=s}},
ni(a,b,c,d){t.O.a(d)
if(B.a8!==c){d=c.oB(d)
d=d}A.y6(d)},
ta:function ta(a){this.a=a},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a){this.a=a},
tc:function tc(a){this.a=a},
tH:function tH(){},
tI:function tI(a,b){this.a=a
this.b=b},
aj:function aj(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
S:function S(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b){this.a=a
this.b=b},
mi:function mi(){},
ig:function ig(a,b){this.a=a
this.$ti=b},
io:function io(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bH:function bH(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tk:function tk(a,b){this.a=a
this.b=b},
to:function to(a,b){this.a=a
this.b=b},
tn:function tn(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tr:function tr(a,b,c){this.a=a
this.b=b
this.c=c},
ts:function ts(a,b){this.a=a
this.b=b},
tt:function tt(a){this.a=a},
tq:function tq(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.a=a
this.b=b},
m6:function m6(a){this.a=a
this.b=null},
i0:function i0(){},
rH:function rH(a,b){this.a=a
this.b=b},
rI:function rI(a,b){this.a=a
this.b=b},
iO:function iO(){},
mY:function mY(){},
tD:function tD(a,b){this.a=a
this.b=b},
tE:function tE(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b){this.a=a
this.b=b},
xz(a,b){var s=a[b]
return s===a?null:s},
vj(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vi(){var s=Object.create(null)
A.vj(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
zW(a,b){return new A.c7(a.i("@<0>").ac(b).i("c7<1,2>"))},
B(a,b,c){return b.i("@<0>").ac(c).i("v2<1,2>").a(A.ye(a,new A.c7(b.i("@<0>").ac(c).i("c7<1,2>"))))},
D(a,b){return new A.c7(a.i("@<0>").ac(b).i("c7<1,2>"))},
x6(a){return new A.d7(a.i("d7<0>"))},
bb(a){return new A.d7(a.i("d7<0>"))},
vl(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
vk(a,b,c){var s=new A.d8(a,b,c.i("d8<0>"))
s.c=a.e
return s},
cT(a,b,c){var s=A.zW(b,c)
s.T(0,a)
return s},
zX(a,b){var s,r,q=A.x6(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q.j(0,b.a(a[r]))
return q},
x7(a,b){var s=A.x6(b)
s.T(0,a)
return s},
v3(a){var s,r
if(A.vD(a))return"{...}"
s=new A.cY("")
try{r={}
B.a.j($.bX,a)
s.a+="{"
r.a=!0
a.ae(0,new A.q7(r,s))
s.a+="}"}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
hu(a){return new A.ht(A.am(A.zY(null),null,!1,a.i("0?")),a.i("ht<0>"))},
zY(a){return 8},
iq:function iq(){},
ft:function ft(a){var _=this
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
d7:function d7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mM:function mM(a){this.a=a
this.c=this.b=null},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
Z:function Z(){},
an:function an(){},
q6:function q6(a){this.a=a},
q7:function q7(a,b){this.a=a
this.b=b},
ht:function ht(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ee:function ee(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
fj:function fj(){},
iF:function iF(){},
BJ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.dH(r)
q=A.wP(String(s),null)
throw A.m(q)}q=A.tP(p)
return q},
tP(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.mH(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tP(a[s])
return a},
x3(a,b,c){return new A.hs(a,b)},
B7(a){return a.q_()},
AD(a,b){return new A.tv(a,[],A.C5())},
AE(a,b,c){var s,r=new A.cY(""),q=A.AD(r,b)
q.fo(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
mH:function mH(a,b){this.a=a
this.b=b
this.c=null},
mI:function mI(a){this.a=a},
jJ:function jJ(){},
jL:function jL(){},
hs:function hs(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
kC:function kC(){},
pM:function pM(a){this.b=a},
pL:function pL(a){this.a=a},
tw:function tw(){},
tx:function tx(a,b){this.a=a
this.b=b},
tv:function tv(a,b,c){this.c=a
this.a=b
this.b=c},
wN(a){return new A.k0(new WeakMap(),a.i("k0<0>"))},
wO(a){var s=!0
s=typeof a=="string"
if(s)A.zG(a)},
zG(a){throw A.m(A.uR(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
zD(a,b){a=A.aU(a,new Error())
if(a==null)a=A.dF(a)
a.stack=b.t(0)
throw a},
am(a,b,c,d){var s,r=c?J.x0(a,d):J.x_(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
zZ(a,b,c){var s,r,q=A.a([],c.i("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
a6(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.i("t<0>"))
s=A.a([],b.i("t<0>"))
for(r=J.au(a);r.q();)B.a.j(s,r.gH())
return s},
rJ(a){var s,r,q
A.hM(0,"start")
if(Array.isArray(a)){s=a
r=s.length
return A.xf(r<r?s.slice(0,r):s)}q=A.a6(a,t.S)
return A.xf(q)},
lo(a){return new A.hn(a,A.x2(a,!1,!0,!1,!1,""))},
vd(a,b,c){var s=J.au(b)
if(!s.q())return a
if(c.length===0){do a+=A.J(s.gH())
while(s.q())}else{a+=A.J(s.gH())
while(s.q())a=a+c+A.J(s.gH())}return a},
Ao(){return A.el(new Error())},
zz(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wH(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
jO(a){if(a>=10)return""+a
return"0"+a},
jZ(a){if(typeof a=="number"||A.tS(a)||a==null)return J.eu(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xe(a)},
zE(a,b){A.vy(a,"error",t.K)
A.vy(b,"stackTrace",t.gl)
A.zD(a,b)},
bM(a){return new A.jm(a)},
aE(a,b){return new A.cn(!1,null,b,a)},
uR(a,b,c){return new A.cn(!0,a,b,c)},
zo(a,b,c){return a},
xg(a){var s=null
return new A.fb(s,s,!1,s,s,a)},
hL(a,b){return new A.fb(null,null,!0,a,b,"Value not in range")},
cw(a,b,c,d,e){return new A.fb(b,c,!0,a,d,"Invalid value")},
v8(a,b,c){if(0>a||a>c)throw A.m(A.cw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.m(A.cw(b,a,c,"end",null))
return b}return c},
hM(a,b){if(a<0)throw A.m(A.cw(a,0,null,b,null))
return a},
p3(a,b,c,d,e){return new A.ks(b,!0,a,e,"Index out of range")},
cz(a){return new A.i7(a)},
be(a){return new A.lS(a)},
cd(a){return new A.e6(a)},
aW(a){return new A.jK(a)},
wP(a,b){return new A.oM(a,b)},
zO(a,b,c){var s,r
if(A.vD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.j($.bX,a)
try{A.By(a,s)}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}r=A.vd(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pH(a,b,c){var s,r
if(A.vD(a))return b+"..."+c
s=new A.cY(b)
B.a.j($.bX,a)
try{r=s
r.a=A.vd(r.a,a,", ")}finally{if(0>=$.bX.length)return A.b($.bX,-1)
$.bX.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
By(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.J(l.gH())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.b(b,-1)
r=b.pop()
if(0>=b.length)return A.b(b,-1)
q=b.pop()}else{p=l.gH();++j
if(!l.q()){if(j<=4){B.a.j(b,A.J(p))
return}r=A.J(p)
if(0>=b.length)return A.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH();++j
for(;l.q();p=o,o=n){n=l.gH();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.J(p)
r=A.J(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
qw(a,b,c,d){var s
if(B.an===c){s=B.c.ga0(a)
b=J.ck(b)
return A.rK(A.cZ(A.cZ($.nv(),s),b))}if(B.an===d){s=B.c.ga0(a)
b=J.ck(b)
c=J.ck(c)
return A.rK(A.cZ(A.cZ(A.cZ($.nv(),s),b),c))}s=B.c.ga0(a)
b=J.ck(b)
c=J.ck(c)
d=J.ck(d)
d=A.rK(A.cZ(A.cZ(A.cZ(A.cZ($.nv(),s),b),c),d))
return d},
A6(a){var s,r,q=$.nv()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.o)(a),++r)q=A.cZ(q,J.ck(a[r]))
return A.rK(q)},
vG(a){A.un(a)},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
th:function th(){},
aq:function aq(){},
jm:function jm(a){this.a=a},
d3:function d3(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d,e,f){var _=this
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
lS:function lS(a){this.a=a},
e6:function e6(a){this.a=a},
jK:function jK(a){this.a=a},
l6:function l6(){},
i_:function i_(){},
tj:function tj(a){this.a=a},
oM:function oM(a,b){this.a=a
this.b=b},
k:function k(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
aM:function aM(){},
P:function P(){},
n7:function n7(){},
ru:function ru(){this.b=this.a=0},
cY:function cY(a){this.a=a},
k0:function k0(a,b){this.a=a
this.$ti=b},
qt:function qt(a){this.a=a},
vr(a){var s
if(typeof a=="function")throw A.m(A.aE("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.B0,a)
s[$.uD()]=a
return s},
tQ(a){var s
if(typeof a=="function")throw A.m(A.aE("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.B1,a)
s[$.uD()]=a
return s},
B0(a){return t.gY.a(a).$0()},
B1(a,b,c){t.gY.a(a)
if(A.r(c)>=1)return a.$1(b)
return a.$0()},
y1(a){return a==null||A.tS(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.ha.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.jL.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
vE(a){if(A.y1(a))return a
return new A.uc(new A.ft(t.mp)).$1(a)},
Cw(a,b){var s=new A.bH($.aT,b.i("bH<0>")),r=new A.ig(s,b.i("ig<0>"))
a.then(A.fF(new A.uo(r,b),1),A.fF(new A.up(r),1))
return s},
y0(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
u_(a){if(A.y0(a))return a
return new A.u0(new A.ft(t.mp)).$1(a)},
uc:function uc(a){this.a=a},
uo:function uo(a,b){this.a=a
this.b=b},
up:function up(a){this.a=a},
u0:function u0(a){this.a=a},
Aj(a){var s
if(a==null)s=B.cY
else{s=new A.mW()
s.lN(a)}return s},
mG:function mG(){},
mW:function mW(){this.b=this.a=0},
kf:function kf(){},
oQ:function oQ(){},
oR:function oR(a,b){this.a=a
this.b=b},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function oO(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(){},
mp:function mp(){},
k6:function k6(){},
k9:function k9(){var _=this
_.a=null
_.d=_.c=_.b=$},
ms:function ms(){},
t4(a){return new A.lZ(a)},
kO:function kO(){},
lZ:function lZ(a){this.a=a},
t5:function t5(a){this.a=a},
jr:function jr(a){this.a=a},
m9:function m9(){},
jA:function jA(a){this.a=a},
mf:function mf(){},
jM:function jM(a){this.a=a},
mj:function mj(){},
jW:function jW(a){this.a=a},
ml:function ml(){},
k3:function k3(a){this.a=a},
mq:function mq(){},
k4:function k4(a){this.a=a},
mr:function mr(){},
kc:function kc(a){this.a=a},
mw:function mw(){},
ki:function ki(a){this.a=a},
mA:function mA(){},
kj:function kj(a){this.a=a},
mB:function mB(){},
kp:function kp(a){this.a=a},
mC:function mC(){},
kr:function kr(a){this.a=a},
mD:function mD(){},
kG:function kG(a){this.a=a},
mJ:function mJ(){},
kI:function kI(a){this.a=a},
mK:function mK(){},
kP:function kP(a){this.a=a},
mN:function mN(){},
li:function li(a){this.a=a},
mV:function mV(){},
lx:function lx(a){this.a=a},
mZ:function mZ(){},
lz:function lz(a){this.a=a},
n2:function n2(){},
lE:function lE(){},
jk:function jk(a,b){this.a=a
this.b=b},
nF:function nF(){},
lN:function lN(a){this.a=a},
n9:function n9(){},
m1:function m1(a){this.a=a},
nd:function nd(){},
m2:function m2(a){this.a=a},
ne:function ne(){},
jp:function jp(a){this.a=a},
jq:function jq(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
m7:function m7(){},
m8:function m8(){},
jH:function jH(a){this.a=a},
jI:function jI(a,b){var _=this
_.y=a
_.Q=_.z=0
_.e=b
_.a=null
_.d=_.c=_.b=$},
mh:function mh(){},
lC:function lC(a){this.a=a},
lD:function lD(a,b,c){var _=this
_.y=a
_.Q$=b
_.e=c
_.a=null
_.d=_.c=_.b=$},
n3:function n3(){},
n4:function n4(){},
m_:function m_(a){this.a=a},
nc:function nc(){},
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
nK:function nK(a,b){this.a=a
this.b=b},
nL:function nL(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function ma(){},
uT(a,b,c,d){return new A.jw(b,c,d,a)},
jw:function jw(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.e=d
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
wT(a,b){return new A.eS(a,b)},
h1:function h1(){},
eS:function eS(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
eO:function eO(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
f7:function f7(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
ew:function ew(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
eF:function eF(a){var _=this
_.x=a
_.a=null
_.d=_.c=_.b=$},
fd:function fd(a,b){var _=this
_.x=a
_.y=b
_.a=null
_.d=_.c=_.b=$},
mu:function mu(){},
eH:function eH(a,b){this.a=a
this.b=b},
eG:function eG(a,b){var _=this
_.e=a
_.f=b
_.r=$
_.a=null
_.d=_.c=_.b=$},
o4:function o4(a,b){this.a=a
this.b=b},
o5:function o5(){},
o6:function o6(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function o7(){},
o8:function o8(a){this.a=a},
eJ:function eJ(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
h7:function h7(){},
ez:function ez(){var _=this
_.a=null
_.d=_.c=_.b=$},
eA:function eA(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
jz:function jz(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eP:function eP(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f8:function f8(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lb:function lb(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
fp:function fp(){var _=this
_.a=null
_.d=_.c=_.b=$},
t6:function t6(a){this.a=a},
eY:function eY(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mc:function mc(){},
md:function md(){},
me:function me(){},
mv:function mv(){},
mQ:function mQ(){},
mR:function mR(){},
oI(a,b,c,d){return new A.k8(a,b,c,d==null?1:d)},
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
oJ:function oJ(a){this.a=a},
eN:function eN(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
eM:function eM(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
mt:function mt(){},
wU(a,b){return new A.eT(a,b)},
eT:function eT(a,b){var _=this
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
eU:function eU(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
eZ:function eZ(a,b){var _=this
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
e1:function e1(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
f5:function f5(a,b){var _=this
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
v9(a,b,c,d){var s=new A.ll(a,b,c,A.bb(t.u),A.a([],t.gk))
s.ip(b,c,d)
return s},
xi(a){return new A.fg(a)},
lm:function lm(){},
qF:function qF(a){this.a=a},
ll:function ll(a,b,c,d,e){var _=this
_.at=a
_.e=b
_.f=c
_.r=d
_.w=1
_.x=e
_.a=null
_.d=_.c=_.b=$},
fg:function fg(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
ff:function ff(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
mX:function mX(){},
lA:function lA(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
xu(a){return new A.fm(a)},
fm:function fm(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
mP:function mP(){},
f2:function f2(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
f3:function f3(a){var _=this
_.e=a
_.a=null
_.d=_.c=_.b=$},
jV:function jV(){},
kb:function kb(){},
zB(a,b){var s=$.uE()
if(!s.a.ah(b))return null
return s.l8(a,b)},
h3:function h3(){},
T(a,b,c,d){var s=A.a([],t.J)
if(c!=null)B.a.j(s,c)
if(d!=null)B.a.T(s,d)
return new A.h_(a,b,s)},
kd:function kd(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
v(a,b,c){var s,r,q,p,o,n,m,l,k
$.xS=a
if(b==null)b=B.ke
s=t.s
r=t.gQ
q=A.a6(new A.as(A.a(c.split("\n"),s),t.gL.a(new A.u4()),r),r.i("aH.E"))
A.iS(q)
if(b===B.ac||b===B.av){p=A.a(q.slice(0),A.N(q))
for(r=t.gS.i("cX<Z.E>"),o=0;o<q.length;++o)B.a.h(p,o,A.tT(A.rJ(new A.cX(new A.dl(q[o]),r)),A.C9()))
A.iS(p)}if(b===B.kf||b===B.av){p=A.a(q.slice(0),A.N(q))
for(o=0;r=q.length,o<r;++o)B.a.h(p,r-o-1,A.tT(q[o],A.Ca()))
A.iS(p)}if(b===B.av||b===B.kg||b===B.q){p=A.a(q.slice(0),A.N(q))
for(r=t.gS.i("cX<Z.E>"),o=0;n=q.length,o<n;++o)B.a.h(p,n-o-1,A.tT(A.rJ(new A.cX(new A.dl(q[o]),r)),A.yf()))
A.iS(p)}if(b===B.q){m=A.a([],s)
l=0
for(;;){if(0>=q.length)return A.b(q,0)
if(!(l<q[0].length))break
for(k=0,r="";k<q.length;++k,r=n){n=q[k]
if(!(l<n.length))return A.b(n,l)
n=r+A.BO(n[l])}B.a.j(m,r.charCodeAt(0)==0?r:r);++l}A.iS(m)
p=A.a(m.slice(0),s)
for(s=t.gS.i("cX<Z.E>"),o=0;r=m.length,o<r;++o)B.a.h(p,r-o-1,A.tT(A.rJ(new A.cX(new A.dl(m[o]),s)),A.yf()))
A.iS(p)}},
tT(a,b){var s,r,q
for(s=a.length,r=0,q="";r<s;++r)q+=A.J(b.$1(a[r]))
return q.charCodeAt(0)==0?q:q},
BB(a){return A.xZ(A.y_(a))},
xZ(a){var s,r,q,p
A.a4(a)
for(s=0;s<3;++s){r=$.BC[s]
q=B.i.c6(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.b(r,p)
return r[p]}}return a},
y_(a){var s,r,q,p
A.a4(a)
for(s=0;s<3;++s){r=$.BD[s]
q=B.i.c6(r,a)
if(q!==-1){p=1-q
if(!(p>=0&&p<r.length))return A.b(r,p)
return r[p]}}return a},
BO(a){var s,r,q,p
for(s=0;s<2;++s){r=$.BN[s]
q=B.i.c6(r,a)
if(q!==-1){p=B.c.ab(q+1,4)
if(!(p<r.length))return A.b(r,p)
return r[p]}}return a},
iS(a){var s,r,q,p,o,n=B.a.gaB(a).length,m=a.length,l=A.am(n*m,$.yz(),!1,t.oC),k=new A.aa(l,new A.a0(new A.e(0,0),new A.e(n,m)),t.eh)
for(s=0;s<a.length;++s)for(m=s*n,r=0;r<B.a.gaB(a).length;++r){if(!(s<a.length))return A.b(a,s)
q=a[s]
if(!(r<q.length))return A.b(q,r)
p=q[r]
q=$.cf
if(q!=null&&q.ah(p)){q=$.cf.m(0,p)
q.toString
o=q}else{q=$.za()
if(q.ah(p)){q=q.m(0,p)
q.toString
o=q}else{q=$.zb().m(0,p)
q.toString
o=q}}k.l(r,s)
B.a.h(l,m+r,o)}n=$.uE()
m=$.cD
if(m==null)m=$.xS
if(m==null)m=1
l=$.cC.u()
n.cg(n.$ti.c.a(new A.kd(k)),null,null,null,m,m,l)},
dz:function dz(a,b){this.a=a
this.b=b},
u4:function u4(){},
og:function og(){},
ok:function ok(){},
ol:function ol(){},
oh:function oh(){},
oi:function oi(){},
oo:function oo(){},
op:function op(){},
oj:function oj(){},
om:function om(){},
on:function on(){},
a7(a,b,c){A.i()
$.b_.b=new A.nP(a,c,A.D(t.h,t.S))
$.b_.u().b=b
return $.b_.u()},
I(a,b){A.b1()
return $.iP=A.ww(a,B.i.dV(a," _")?$.dI():$.dJ(),b)},
j(a,b,c){return new A.pe(a,b,c,A.D(t.h,t.S))},
ww(a,b,c){var s=t.Q
return new A.cm(a,b,c,A.D(t.h,s),A.D(t.Z,s),A.D(t.M,s))},
fH(a,b){return new A.u3(a,b)},
Bj(a){return A.r(a)},
b2(){return new A.uz(1,0.1)},
i(){var s,r,q,p,o,n,m,l=$.h
if(l==null)return
s=l.ep()
r=$.bo()
q=s.a.a5(1)
p=l.dy
p===$&&A.c()
o=l.fr
o===$&&A.c()
n=l.x
if(n==null)n=$.b_.u().x
if(n==null)n=1
m=$.b_.u().ay
m===$&&A.c()
r.cg(r.$ti.c.a(s),q.a,p,o,n,null,m)
$.h=null},
b1(){var s,r,q,p,o,n,m=$.iP
if(m==null)return
s=m.ep()
r=m.b
r.toString
q=m.c
p=m.d
o=m.e
n=$.bh
r.cg(r.$ti.c.a(s),s.a,q,p,o,null,n)
$.iP=null},
td:function td(){},
nP:function nP(a,b,c){var _=this
_.Q=a
_.as=b
_.ax=_.at=null
_.ay=$
_.ch=!1
_.a=c
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pe:function pe(a,b,c,d){var _=this
_.Q=a
_.as=b
_.at=c
_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=null
_.db=!1
_.dx=null
_.fr=_.dy=$
_.a=d
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=null},
pk:function pk(a){this.a=a},
ph:function ph(a,b){this.a=a
this.b=b},
pp:function pp(a,b){this.a=a
this.b=b},
pq:function pq(a){this.a=a},
po:function po(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
pr:function pr(a){this.a=a},
pm:function pm(a,b){this.a=a
this.b=b},
pf:function pf(a){this.a=a},
pg:function pg(a){this.a=a},
pi:function pi(a,b){this.a=a
this.b=b},
pj:function pj(a,b){this.a=a
this.b=b},
pn:function pn(a){this.a=a},
cm:function cm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=c
_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=null
_.ay=d
_.ch=e
_.CW=f},
nz:function nz(a){this.a=a},
nA:function nA(a){this.a=a},
ny:function ny(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(a){this.a=a},
nC:function nC(a){this.a=a},
nw:function nw(a){this.a=a},
nB:function nB(){},
u3:function u3(a,b){this.a=a
this.b=b},
uz:function uz(a,b){this.a=a
this.b=b},
a8(a,b,c){var s=$.bo().ca(a)
if(s!=null)return new A.mF(s,b,c==null?B.cc:c)
return new A.n8(a,b,c==null?B.cc:c)},
vH(a,b){return new A.bI(a,b)},
xA(a){var s=new A.mO(A.dw(t.iZ))
s.lM(a)
return s},
hj:function hj(a,b){this.a=a
this.b=b},
tf:function tf(){},
mF:function mF(a,b,c){this.c=a
this.a=b
this.b=c},
n8:function n8(a,b,c){this.c=a
this.a=b
this.b=c},
aK:function aK(a,b){this.a=a
this.b=b},
ie:function ie(a){this.a=a},
mO:function mO(a){this.a=a},
tA:function tA(a){this.a=a},
bI:function bI(a,b){this.a=a
this.b=b},
iU(a,b,c,d){var s=$.ws()
s.cg(s.$ti.c.a(new A.k7(a)),null,1,100,d,b,null)},
k7:function k7(a){this.b=a},
Cx(){A.a7(239,null,null).a4("magic/ring")
A.i()
var s=$.h=A.j("Ring[s] of Wisdom",B.D,1000)
s.v(20)
s.x=0.05
s.kp(new A.ur())},
ur:function ur(){},
iW(a,b){var s=A.D(t.iZ,t.i)
b.ae(0,new A.uA(s))
$.hY.h(0,a,new A.dy(A.xA(s),a))},
uA:function uA(a){this.a=a},
CO(){var s,r,q="hit[s]",p=null,o="bash[es]",n="stab[s]",m="pierce[s]",l=A.a7(225,p,q)
l.a4("equipment/weapon/club")
l.x=0.5
l.cu(25,5)
A.i()
l=$.h=A.j("Stick",B.k,0)
l.E(1,20)
l.a7(4,6)
l.aa(3)
s=$.b8()
l.a.h(0,s,10)
l.w=10
A.i()
l=$.h=A.j("Cudgel",B.p,20)
l.E(6,60)
l.a7(9,8)
l.aa(4)
l.a.h(0,s,5)
l.w=10
A.i()
l=$.h=A.j("Club",B.w,40)
l.v(14)
l.a7(12,11)
l.aa(5)
l.a.h(0,s,2)
l.w=10
l=A.a7(237,p,q)
l.a4("equipment/weapon/staff")
l.x=0.5
l.y=!0
l.cu(35,4)
A.i()
l=$.h=A.j("Walking Stick",B.k,10)
l.E(2,40)
l.a7(9,10)
l.aa(3)
l.a.h(0,s,5)
l.w=15
A.i()
l=$.h=A.j("Sta[ff|aves]",B.w,50)
l.v(7)
l.a7(13,14)
l.aa(5)
l.a.h(0,s,2)
l.w=15
A.i()
l=$.h=A.j("Quartersta[ff|aves]",B.p,80)
l.v(24)
l.a7(20,22)
l.aa(8)
l.a.h(0,s,2)
l.w=15
l=A.a7(243,p,o)
l.a4("equipment/weapon/hammer")
l.x=0.5
l.cu(15,5)
A.i()
l=$.h=A.j("Hammer",B.k,120)
l.v(40)
l.a7(28,22)
l.aa(12)
A.i()
l=$.h=A.j("Mattock",B.w,240)
l.v(46)
l.a7(36,29)
l.aa(16)
A.i()
l=$.h=A.j("War Hammer",B.p,400)
l.v(52)
l.a7(44,38)
l.aa(20)
l=A.a7(250,p,o)
l.a4("equipment/weapon/mace")
l.x=0.5
l.cu(15,4)
A.i()
l=$.h=A.j("Morningstar",B.p,130)
l.v(24)
l.a7(25,21)
l.aa(11)
A.i()
l=$.h=A.j("Mace",B.f,310)
l.v(33)
l.a7(36,32)
l.aa(16)
l=A.a7(241,p,"whip[s]")
l.a4("equipment/weapon/whip")
l.x=0.5
l.cu(25,4)
A.i()
l=$.h=A.j("Whip",B.k,40)
l.v(4)
l.a7(9,7)
l.aa(1)
l.a.h(0,s,10)
l.w=5
A.i()
l=$.h=A.j("Chain Whip",B.p,230)
l.v(15)
l.a7(18,17)
l.aa(2)
A.i()
l=$.h=A.j("Flail",B.f,350)
l.v(27)
l.a7(28,24)
l.aa(4)
l=A.a7(209,p,n)
l.a4("equipment/weapon/dagger")
l.x=0.5
l.cu(2,8)
A.i()
l=$.h=A.j("Kni[fe|ves]",B.d,20)
l.E(3,20)
l.a7(6,5)
l.aa(6)
A.i()
l=$.h=A.j("Dagger",B.p,30)
l.E(4,40)
l.a7(8,6)
l.aa(8)
A.i()
l=$.h=A.j("Dirk",B.J,50)
l.E(6,70)
l.a7(9,7)
l.aa(9)
A.i()
l=$.h=A.j("Stiletto[es]",B.f,80)
l.v(10)
l.a7(11,8)
l.aa(11)
A.i()
l=$.h=A.j("Rondel",B.K,130)
l.v(20)
l.a7(13,9)
l.aa(13)
A.i()
l=$.h=A.j("Baselard",B.h,200)
l.v(30)
l.a7(15,11)
l.aa(15)
A.i()
l=$.h=A.j("Mercygiver",B.O,2000)
l.E(20,50)
l.x=0.2
l.a7(12,6)
r=t.lT.a(new A.uB())
l.db=!0
l.kp(r)
l=A.a7(170,p,"slash[es]")
l.a4("equipment/weapon/sword")
l.x=0.5
l.cu(20,5)
A.i()
l=$.h=A.j("Rapier",B.j,140)
l.v(13)
l.a7(13,13)
l.aa(4)
A.i()
l=$.h=A.j("Shortsword",B.f,230)
l.v(17)
l.a7(15,15)
l.aa(6)
A.i()
l=$.h=A.j("Scimitar",B.p,370)
l.v(18)
l.a7(24,18)
l.aa(9)
A.i()
l=$.h=A.j("Cutlass[es]",B.E,520)
l.v(20)
l.a7(26,22)
l.aa(11)
A.i()
l=$.h=A.j("Falchion",B.K,750)
l.v(34)
l.a7(28,25)
l.aa(15)
l=A.a7(186,p,n)
l.a4("equipment/weapon/spear")
l.x=0.5
l.l4(9)
A.i()
l=$.h=A.j("Pointed Stick",B.w,10)
l.E(2,30)
l.a7(7,9)
l.aa(6)
l.a.h(0,s,7)
l.w=12
A.i()
l=$.h=A.j("Spear",B.k,160)
l.E(13,60)
l.a7(16,13)
l.aa(15)
A.i()
l=$.h=A.j("Angon",B.p,340)
l.v(21)
l.a7(20,19)
l.aa(20)
l=A.a7(186,p,n)
l.a4("equipment/weapon/polearm")
l.x=0.5
l.y=!0
l.l4(4)
A.i()
l=$.h=A.j("Lance",B.J,550)
l.v(28)
l.a7(22,23)
l.aa(20)
A.i()
l=$.h=A.j("Partisan",B.f,850)
l.v(35)
l.a7(26,25)
l.aa(26)
l=A.a7(191,p,"chop[s]")
l.a4("equipment/weapon/axe")
l.x=0.5
A.i()
l=$.h=A.j("Hatchet",B.f,90)
l.E(6,50)
l.a7(12,10)
l.fl(20,8)
A.i()
l=$.h=A.j("Axe",B.k,210)
l.E(12,70)
l.a7(15,14)
l.fl(24,7)
A.i()
l=$.h=A.j("Valaska",B.p,330)
l.v(24)
l.a7(19,19)
l.fl(26,5)
A.i()
l=$.h=A.j("Battleaxe",B.j,550)
l.v(40)
l.y=!0
l.a7(25,30)
l.fl(28,4)
l=A.a7(8976,p,q)
l.a4("equipment/weapon/bow")
l.x=0.3
l.y=!0
l.cu(50,5)
A.i()
l=$.h=A.j("Short Bow",B.k,120)
l.E(6,60)
l.ay=A.bf(new A.aJ(A.aR("arrow",B.y,B.W).a5(1)),m,5,p,8)
l.cx=12
l.aa(2)
l.a.h(0,s,15)
l.w=10
A.i()
l=$.h=A.j("Longbow",B.w,250)
l.v(13)
l.ay=A.bf(new A.aJ(A.aR("arrow",B.y,B.W).a5(1)),m,9,p,12)
l.cx=18
l.aa(3)
l.a.h(0,s,7)
l.w=13
A.i()
l=$.h=A.j("Crossbow",B.p,600)
l.v(28)
l.ay=A.bf(new A.aJ(A.aR("bolt",B.y,B.W).a5(1)),m,14,p,16)
l.cx=24
l.aa(4)
l.a.h(0,s,4)
l.w=14},
uB:function uB(){},
al(a,b,c,d,e,f,g){var s
A.fG()
$.cj().c5("monster/"+b)
s=t.s
$.ak.b=new A.oF(a,B.a.gc7(b.split("/")),e,$.b3(),A.a([],t.x),A.a([],s))
$.ak.u().e=f
$.ak.u().r=c
$.ak.u().b=g
if(d!=null)B.a.T($.ak.u().x,A.a(d.split(" "),s))
return $.ak.u()},
fG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7="immobile",b8=$.ce
if(b8==null)return
s=t.s
r=A.a([$.ak.u().ch],s)
if(r.length===0)B.a.j(r,"monster")
q=A.x7($.ak.u().x,t.N)
q.T(0,b8.x)
p=b8.r
if(p==null)p=$.ak.u().r
if(q.G(0,b7))p=0
o=b8.fr
n=o.length
if(n===1){if(0>=n)return A.b(o,0)
m=o[0]}else m=n>1?new A.m4(o):null
o=b8.ay
n=b8.fx
if(n==null)n=B.y
o=A.aR(o,n,b8.ch?B.cs:B.W).a5(1)
n=b8.cx
l=b8.db
k=b8.dx
j=b8.dy
if(b8.d==null)$.ak.u()
i=$.ak.u().c
h=b8.c
g=b8.CW
f=b8.cy
e=b8.b
if(e==null)e=0
d=$.ak.u().b
if(d==null)d=10
c=b8.at
if(c==null)c=$.ak.u().at
b=b8.ax
if(b==null)b=$.ak.u().ax
a=b8.f
if(a==null)a=$.ak.u().f
if(a==null)a=0
a0=b8.e
if(a0==null)a0=0
a1=$.ak.u().e
if(a1==null)a1=0
a2=$.ak.u().as
if(a2==null)a2=b8.as
a3=b8.y
if(a3==null)a3=$.ak.u().y
a4=b8.z
if(a4==null)a4=$.ak.u().z
if(b8.Q==null)$.ak.u()
a5=q.nr()
a5.T(0,q)
q=a5.af(0,"berzerk")
a6=a5.af(0,"cowardly")
a7=a5.af(0,"fearless")
a8=a5.af(0,b7)
a9=a5.af(0,"protective")
b0=a5.af(0,"unique")
if(a5.a!==0)A.a_(A.aE('Unknown flags "'+a5.aG(0,", ")+'"',null))
b1=b8.fy
b2=A.a([],t.x)
s=A.a([],s)
if(c==null)c=8
if(b==null)b=10
b3=p==null?20:p
if(a2==null)a2=0
if(a3==null)a3=1
if(a4==null)a4=1
if(b1==null)b1="Indescribable."
B.a.T(b2,$.ak.u().w)
B.a.T(b2,b8.w)
B.a.j(s,$.ak.u().ch)
b4=$.cj()
b5=b8.a
if(b5==null)b5=$.ak.u().a
b6=B.a.aG(r," ")
b4.cg(b4.$ti.c.a(new A.ay(o,n,g,l,k,f,e+d,c,b,a,a0+a1,new A.ie(j),new A.ag(i.a|h.a),new A.nO(q,a6,a7,a8,a9,b0),b3,a2,b2,a3,a4,m,s,b1)),o.a,g,g,b5,b5,b6)
$.ce=null},
p(a,b,c,d,e,f,g){var s
A.fG()
s=new A.jx(a,b,A.ar($.ak.u().ay,c,null),d,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),f,$.b3(),A.a([],t.x),A.a([],t.s))
s.e=g
s.r=e
return $.ce=s},
nN(a,b,c,d,e){return new A.jx(a,b,d,e,A.a([],t.da),A.a([],t.a_),A.a([],t.f8),A.a([],t.aC),c,$.b3(),A.a([],t.x),A.a([],t.s))},
te:function te(){},
oF:function oF(a,b,c,d,e,f){var _=this
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
mb:function mb(a){this.a=a},
af:function af(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(a){this.a=a},
bz:function bz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
fZ:function fZ(a,b){this.b=a
this.a=b},
dm:function dm(a,b){this.b=a
this.a=b},
kk:function kk(a,b,c){this.b=a
this.c=b
this.a=c},
hf:function hf(a,b){this.b=a
this.a=b},
bY:function bY(a,b,c){this.b=a
this.c=b
this.a=c},
b7:function b7(a,b){this.b=a
this.a=b},
bS:function bS(a,b){this.b=a
this.a=b},
re:function re(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b){this.b=a
this.a=b},
k1:function k1(){},
k5:function k5(){},
lh:function lh(){},
ly:function ly(){},
fW(a,b,c){var s=$.bm
$.bm=s+1
return new A.di(a,b,c,s)},
di:function di(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
jl:function jl(a){this.a=a},
jt:function jt(a){this.a=a},
wB(a){return 2*A.w(a,1,15,1,4)/A.i2(50)},
ju:function ju(a){this.a=a},
hx:function hx(){},
jo:function jo(a){this.a=a},
jv:function jv(a){this.a=a},
kF:function kF(a){this.a=a},
lB:function lB(a){this.a=a},
lH:function lH(a){this.a=a},
m0:function m0(a){this.a=a},
bR:function bR(a,b){this.a=a
this.b=b},
nG:function nG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iB:function iB(a,b){this.a=a
this.b=b},
bj:function bj(){},
ty:function ty(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
zn(a){var s,r=A.a([],t.c4),q=Math.min($.n().hV(1,10),5),p=!1
for(;;){if(!(!p||r.length<q))break
s=$.vP().i1(a)
if(s.w)p=!0
if(!B.a.G(r,s))B.a.j(r,s)}return r},
fX:function fX(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fz(a,b,c,d,e,f,g,h,i,j,k,l){var s=A.a((j==null?"monster":j).split(" "),t.s),r=i==null?1:i,q=h==null?1:h,p=$.vP()
p.cg(p.$ti.c.a(new A.fX(d,e,s,r,q,c,b!==!1)),null,k,f,l,g,null)},
vA(a,b){var s=null
A.fz("dungeon",s,new A.u2(a),"room",0.04,100,s,s,s,s,1,b)},
C1(a,b,c){var s="catacomb"
A.fz(s,null,new A.tY(),s,0.02,100,b,null,null,a,1,c)},
C2(a,b,c){A.fz("cavern",null,new A.tZ(),"glowing-moss",0.1,100,b,null,null,a,1,c)},
Cq(a,b,c){A.fz("lake",!1,new A.uf(),"water",0.01,b,null,null,0,a,c,null)},
Cy(a,b,c){A.fz("river",!1,new A.us(),"water",0.01,b,null,null,0,a,c,null)},
ud(a,b,c){A.fz(a+" keep",!1,new A.ue(),"room",0.05,b,null,1.5,0,a,c,2)},
en(a,b,c){var s=null
A.fz(a+" pit",!1,new A.um(a),"glowing-moss",0.05,b,s,s,s,s,c,0.2)},
u2:function u2(a){this.a=a},
tY:function tY(){},
tZ:function tZ(){},
uf:function uf(){},
us:function us(){},
ue:function ue(){},
um:function um(a){this.a=a},
eB:function eB(a,b,c){var _=this
_.d=a
_.e=b
_.f=c
_.c=_.b=_.a=$},
eC:function eC(){this.c=this.b=this.a=$},
nX:function nX(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c},
o0:function o0(){},
o_:function o_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY:function nY(){},
nZ:function nZ(){},
jR:function jR(a){this.a=a
this.c=this.b=0},
eI:function eI(a){var _=this
_.w=a
_.c=_.b=_.a=$},
zU(a){var s=A.zT($.n().cR(a,a/2|0),B.kh)
return s},
zT(a,b){return new A.eW(new A.pN(b,A.D(t.u,t.d2),A.a([],t.fv)),a)},
eW:function eW(a,b){var _=this
_.r=a
_.w=0
_.x=b
_.c=_.b=_.a=$},
pQ:function pQ(a){this.a=a},
pO:function pO(a){this.a=a},
pP:function pP(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b
this.c=0},
rP:function rP(a,b){this.a=a
this.b=b},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(){this.c=this.b=this.a=$},
qy(a,b,c,d){return new A.qx(b,d,a,c)},
hG:function hG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
qx:function qx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.c=_.b=_.a=$},
qG:function qG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
im:function im(a,b){this.a=a
this.b=b},
bT(a,b,c,d){var s=c==null?$.n().aF(1,3):c
return new A.tC(a,b,s,d==null?$.n().aF(1,3):d)},
fh:function fh(){this.c=this.b=this.a=$},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qR:function qR(a){this.a=a},
qV:function qV(a){this.a=a},
qS:function qS(a){this.a=a},
qQ:function qQ(a){this.a=a},
tC:function tC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vb(a,b){var s,r
switch(b.a){case 0:return $.n().U(3)===0?A.xk(a):A.xo(a)
case 1:return $.n().U(3)===0?A.xm(a):A.xn(a)
case 2:s=$.n().U(10)
A:{if(0===s){r=A.xm(a)
break A}if(1===s){r=A.xn(a)
break A}if(2===s||3===s){r=A.xk(a)
break A}r=A.xo(a)
break A}return r}},
qY(){var s=$.n()
if(s.U(5)!==0)return B.jO
if(s.U(5)!==0)return B.jP
return B.jQ},
xo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
switch(A.qY().a){case 0:s=$.n()
s=new A.O(s.aC(3,8),s.aC(3,8))
break
case 1:s=$.n()
s=new A.O(s.aC(7,10),s.aC(7,10))
break
case 2:s=$.n()
s=new A.O(s.aC(9,16),s.aC(9,16))
break
default:s=null}r=s.a
q=s.b
if(r>q){p=q
q=r
r=p}o=$.n().U(2)===0
n=o?q:r
m=o?r:q
s=n+2
l=m+2
k=A.am(s*l,$.nn(),!1,t.gf)
j=new A.aa(k,new A.a0(new A.e(0,0),new A.e(s,l)),t.o)
for(i=0;i<m;)for(++i,l=i*s,h=0;h<n;){++h
g=$.uG()
j.l(h,i)
B.a.h(k,l+h,g)}f=A.a([],t.g)
if(r<=9&&(n&1)===1&&(m&1)===1)B.a.j(f,A.a([new A.e(B.c.A(n,2)+1,B.c.A(m,2)+1)],t.l))
if(q>=5)for(s=B.c.A(r-1,2),l=t.l,e=0;e<s;++e){k=1+e
g=n-e
d=m-e
B.a.j(f,A.a([new A.e(k,k),new A.e(g,k),new A.e(k,d),new A.e(g,d)],l))}A.va(j)
return j},
xk(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
switch(A.qY().a){case 0:s=B.iz
break
case 1:s=B.iA
break
case 2:s=B.iB
break
default:s=null}r=s.a
q=s.b
s=$.n()
p=s.aC(r,q)
o=s.aC(p,B.e.aV(p*1.5))
n=s.U(2)===0
m=n?o:p
l=n?p:o
k=s.aC(2,m-3)
j=s.aC(2,l-3)
i=s.U(2)===0
h=s.U(2)===0
s=m+2
g=l+2
f=A.am(s*g,$.nn(),!1,t.gf)
e=new A.aa(f,new A.a0(new A.e(0,0),new A.e(s,g)),t.o)
for(d=0;d<l;)for(++d,g=d*s,c=0;c<m;){++c
b=$.uG()
e.l(c,d)
B.a.h(f,g+c,b)}a=h?0:m-k
a0=h?k:m
a1=i?0:l-j
a2=i?j:l
for(d=a1;d<a2;)for(++d,g=d*s,c=a;c<a0;){++c
b=$.nn()
e.l(c,d)
B.a.h(f,g+c,b)}a3=A.a([],t.g)
s=m-k
g=l-j
for(f=B.c.A(Math.min(s,g)-1,2),b=!i,a4=t.l,a5=!h,a6=k+1,a7=j+1,a8=0;a8<f;++a8){a9=A.a([],a4)
B.a.j(a3,a9)
if(!i||a5){b0=1+a8
B.a.j(a9,new A.e(b0,b0))}if(!i||h)B.a.j(a9,new A.e(m-a8,1+a8))
if(!b||a5)B.a.j(a9,new A.e(1+a8,l-a8))
if(!b||h)B.a.j(a9,new A.e(m-a8,l-a8))
if(i){b0=1+a8
b1=a7+a8
if(h){B.a.j(a9,new A.e(a6+a8,b0))
B.a.j(a9,new A.e(b0,b1))}else{B.a.j(a9,new A.e(s-a8,b0))
B.a.j(a9,new A.e(m-a8,b1))}}else{b0=l-a8
b1=g-a8
if(h){B.a.j(a9,new A.e(a6+a8,b0))
B.a.j(a9,new A.e(1+a8,b1))}else{B.a.j(a9,new A.e(m-a8,b1))
B.a.j(a9,new A.e(s-a8,b0))}}}A.va(e)
return e},
xm(a){var s,r,q,p
switch(A.qY().a){case 0:s=B.cy
break
case 1:s=B.cw
break
case 2:s=B.cx
break
default:s=null}r=s.a
q=s.b
p=$.n().aC(r,q)
return A.xl(p,B.c.A(p-1,2),a)},
xn(a){var s,r,q,p
switch(A.qY().a){case 0:s=B.cy
break
case 1:s=B.cw
break
case 2:s=B.cx
break
default:s=null}r=s.a
q=s.b
s=$.n()
p=s.aC(r,q)
return A.xl(p,s.aC(2,B.c.A(p,2)-1),a)},
xl(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a+2,h=A.am(i*i,$.nn(),!1,t.gf),g=new A.aa(h,new A.a0(new A.e(0,0),new A.e(i,i)),t.o)
for(s=0;s<a;s=r)for(r=s+1,q=r*i,p=0;p<a;++p){if(p+s<b)continue
o=a-p-1
if(o+s<b)continue
if(p+a-s-1<b)continue
if(o+a-s-1<b)continue
o=p+1
n=$.uG()
g.l(o,r)
B.a.h(h,q+o,n)}m=A.a([],t.g)
if(a<=9&&(a&1)===1){i=B.c.A(a,2)+1
B.a.j(m,A.a([new A.e(i,i)],t.l))}if((a&1)===1)for(i=B.c.A(a,2),h=i-1,q=t.l,l=2;l<h;++l){o=i+1
n=o-l
k=o+l
B.a.j(m,A.a([new A.e(o,n),new A.e(k,o),new A.e(o,k),new A.e(n,o)],q))}j=B.c.A(a+1,2)-B.c.A(b+1,2)-3
for(i=a-1,h=a+4,q=t.l,l=0;l<=j;++l){o=B.c.A(i,2)-l
n=B.c.A(h,2)+l
B.a.j(m,A.a([new A.e(o,o),new A.e(n,o),new A.e(o,n),new A.e(n,n)],q))}A.va(g)
return g},
va(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=a.b,r=A.ac(s),q=t.ca,p=t.e0,o=p.i("k.E"),n=a.a,s=s.b.a,m=n.length,l=a.$ti.c;r.q();){k=r.b
j=r.c
a.l(k,j)
i=j*s+k
if(!(i>=0&&i<m))return A.b(n,i)
h=n[i]
if(!(h.a==null&&h.b===B.r))continue
h=new A.qX(new A.e(k,j),a)
g=A.a6(new A.ao(B.au,q.a(h),p),o)
f=B.a.cG(B.cg,h)
h=g.length
if(h===1){h=l.a(new A.e4(null,B.a.glt(g).gcP()))
a.l(k,j)
B.a.h(n,i,h)}else if(h<=1)if(f){h=l.a($.yT())
a.l(k,j)
B.a.h(n,i,h)}}},
Am(a){return new A.e4(null,a)},
xj(a){return new A.e4(a,B.r)},
lt:function lt(){},
hR:function hR(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
rY:function rY(a){this.a=a},
B3(a){return A.uW(a,$.j1())},
BH(a){return A.v5(a,$.j4())},
B4(a){return A.uW(a,$.uJ())},
BI(a){return A.v5(a,$.wd())},
B2(a){return A.uW(a,$.uI())},
BG(a){return A.v5(a,$.wc())},
Aw(a,b,c,d,e,f){var s,r,q,p=A.a([],t.J)
for(s=t.mO,r=b.length,q=0;q<e;++q){if(0>=r)return A.b(b,0)
B.a.j(p,f.$2(new A.fn(a,A.a([new A.Y(b.charCodeAt(0),c,B.t)],s)),q))}return p},
Av(a){var s=$.yV()
if(s.ah(a)){s=s.m(0,a)
s.toString
return s}return A.a([$.w3(),$.w4()],t.J)},
G(a,b,c,d){if(d==null)d=B.t
if(0>=b.length)return A.b(b,0)
return new A.fn(a,A.a([A.cO(b.charCodeAt(0),c,d)],t.mO))},
rV:function rV(){},
rU:function rU(){},
rT:function rT(){},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e=0},
cr(a,b){var s=$.jP.b7(a,new A.nR(a)).b
s.bk(s.$ti.c.a(b))
if(s.gI(0)>10)s.cO()},
cs(a,b,c,d){var s=$.jP.b7(a,new A.nT(a)).c.b7(b,new A.nU())
s.bk(s.$ti.c.a(c))
if(s.gI(0)>20)s.cO()
A.jQ(a,b,d)},
jQ(a,b,c){$.jP.b7(a,new A.nS(a)).d.h(0,b,c)},
zA(a){var s,r=$.nQ
if(r==null)return null
s=$.jP.m(0,a)
if(s==null)return null
return s.t(0)},
vm(a){var s=t.N
return new A.fu(a,A.hu(s),A.D(s,t.jo),A.D(s,t.jv))},
nR:function nR(a){this.a=a},
nT:function nT(a){this.a=a},
nU:function nU(){},
nS:function nS(a){this.a=a},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tz:function tz(){},
H:function H(){},
dh:function dh(a,b,c){this.a=a
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
xa(a){return new A.l9(a)},
wM(a,b){return new A.jX(a,b)},
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
lR:function lR(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
lU:function lU(a,b){var _=this
_.e=a
_.f=b
_.a=null
_.d=_.c=_.b=$},
cJ:function cJ(){},
o1:function o1(a,b){this.a=a
this.b=b},
o2:function o2(a){this.a=a},
o3:function o3(a,b){this.a=a
this.b=b},
kK:function kK(){},
lO:function lO(a,b,c,d){var _=this
_.z=a
_.Q=b
_.e=c
_.f=d
_.a=null
_.d=_.c=_.b=$},
lP:function lP(a,b,c){var _=this
_.Q=a
_.as=b
_.at=!1
_.e=c
_.r=_.f=$
_.a=null
_.d=_.c=_.b=$},
bt(a){return new A.lY(a)},
v5(a,b){return new A.l4(a,b)},
uW(a,b){return new A.jE(a,b)},
lq(){return new A.lp()},
lY:function lY(a){var _=this
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
bp:function bp(){},
yh(a){return 1/(1+Math.max(0,a)/40)},
bf(a,b,c,d,e){var s=e==null?0:e
return new A.b9(a,b,c,s,d==null?$.aD():d)},
bN(a){var s=t.iO,r=t.kt
return new A.ba(a,A.a([],s),A.a([],r),A.a([],s),A.a([],r),$.aD())},
b9:function b9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
km:function km(a,b){this.a=a
this.b=b},
dj:function dj(a){this.a=a},
dx:function dx(a){this.a=a},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=1},
p2:function p2(){},
p1:function p1(){},
p0:function p0(){},
p_:function p_(){},
aF:function aF(a,b){this.a=a
this.b=b},
c4:function c4(){},
he:function he(){this.b=this.a=0},
h0:function h0(){this.b=this.a=0},
hI:function hI(){this.b=this.a=0},
dR:function dR(){this.b=this.a=0},
hc:function hc(){this.b=this.a=0},
hQ:function hQ(a){this.c=a
this.b=this.a=0},
hH:function hH(){this.b=this.a=0},
c5(a,b,c,d,e,f,g){var s=d==null?new A.oe():d
return new A.dT(a,b,e,f,c,s,g==null?new A.of():g)},
dT:function dT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oe:function oe(){},
of:function of(){},
h9:function h9(){this.a=0},
k_:function k_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
aL:function aL(a){this.a=a},
uZ(a,b,c,d,e){var s=A.hu(t.fD),r=A.a([],t.iA),q=A.a([],t.bI),p=A.a([],t.l),o=new A.h9(),n=new A.av(c,A.bb(t.B),new A.bd(t.mh),o,new A.dR(),new A.h0(),new A.dR(),new A.hc(),new A.he(),new A.hH(),new A.hI(),A.D(t.h,t.mF),new A.e(0,0))
o.a=240
n.bt()
o=c.CW.a
o.toString
n.z=B.c.M(B.e.N(Math.pow(o,1.458)+9),0,n.gbr())
o=c.cx.a
o.toString
n.ch=A.kt(o)
q=new A.ke(a,s,r,q,new A.h9(),p,b,n)
s=e==null?100:e
s=A.Ap(s,d==null?80:d,q)
q.x!==$&&A.ax()
q.x=s
s.dJ(n)
B.a.T(p,s.f.b.bR(-1))
s=$.n()
B.a.bM(t.A.a(p),s.a)
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
oY:function oY(a){this.a=a},
i8:function i8(){},
lX:function lX(){},
f9:function f9(a){this.a=a},
x8(a,b){var s
A:{if(B.cu===b||B.iv===b){s=!0
break A}if(B.cv===b||B.aI===b||B.y===b){s=!1
break A}s=null}return A.yu(a,$.yI(),t.jt.a(t.po.a(new A.pW(s))),null)},
e0(a,b){var s,r,q,p,o,n,m,l,k={},j=A.a([],t.s)
k.a=""
k.b=-1
s=new A.pY(k,b)
r=new A.pX(k,j)
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
pW:function pW(a){this.a=a},
pY:function pY(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b,c,d,e){if(a<=b)return d
if(a>=c)return e
return d+(a-b)/(c-b)*(e-d)},
yj(a,b){var s=new A.u6(),r=s.$1(0)
if(typeof r!=="number")return r.F()
r=s.$1(r+a)
if(typeof r!=="number")return r.F()
r=s.$1(r+b)
if(typeof r!=="number")return r.pY()
return r>>>0},
u6:function u6(){},
dw(a){var s=t.N
return new A.fe(A.D(s,a.i("c2<0>")),A.D(s,a.i("bv<0>")),A.D(t.nP,a.i("iE<0>")),a.i("fe<0>"))},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qM:function qM(a){this.a=a},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a){this.a=a},
qL:function qL(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.$ti=g},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
mU:function mU(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.$ti=d},
Ai(a){return new A.aJ(a)},
A5(a,b,c){return A.aR(a,c,b)},
aR(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(B.i.il(a,"a ")){a=B.i.cX(a,2)
s=!1}else if(B.i.il(a,"an ")){a=B.i.cX(a,3)
s=!0}else{if(0>=a.length)return A.b(a,0)
s=B.i.G("aeiouAEIOU",a[0])}r=$.yK().kf(a)
if(r!=null){q=r.b
p=q.length
if(1>=p)return A.b(q,1)
o=q[1]
o.toString
if(2>=p)return A.b(q,2)
q=q[2]
q.toString
n=o
a=q}else n=""
m=A.qq(n,!1,!0)
l=A.qq(n,!1,!1)
q=n.length===0
k=A.qq(a,q,!0)
j=A.qq(a,q,!1)
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
default:p=null}return new A.qp(s,q,o,"# "+l+"<p>"+j,p,"the # "+l+"<p>"+j,b)},
qq(a,b,c){var s,r={}
r.a=!1
s=A.yu(a,$.yL(),t.jt.a(t.po.a(new A.qr(r,c))),null)
if(!c&&!r.a&&b)return s+"s"
return s},
A4(a,b,c,d){return new A.hD(a,b,c,d)},
dA:function dA(){},
aJ:function aJ(a){this.a=a},
qp:function qp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qs:function qs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qr:function qr(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=e},
R(a,b,c){var s,r,q,p,o,n=B.c.t(Math.abs(a)),m=$.yH().kf(n)
if(m!=null){s=m.b
if(2>=s.length)return A.b(s,2)
r=s[2]
r.toString
s=s[1]
s.toString
s=A.a([s],t.s)
for(q=B.c.A(r.length,3),p=0;p<q;++p){o=p*3
s.push(B.i.aM(r,o,o+3))}n=B.a.aG(s,",")}if(a<0)n="-"+n
else if(a>0&&b)n="+"+n
return B.i.df(n,c==null?0:c)},
x9(a,b,c){var s=A.y(a).i("br<1,2>"),r=b.i("@<0>").ac(c).i("+(1,2)")
return A.q9(new A.br(a,s),s.ac(r).i("1(k.E)").a(new A.q8(b,c)),s.i("k.E"),r)},
v4(a,b,c){var s=B.e.i_(a,b)
return B.i.df(s,c==null?0:c)},
qv(a,b){var s=b==null?0:b
s=B.e.i_(a*100,s)
return B.i.df(s+"%",0)},
q8:function q8(a,b){this.a=a
this.b=b},
lW:function lW(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.d=0
_.e=c
_.f=0},
a5:function a5(){},
W:function W(){},
d_:function d_(){},
cK:function cK(){},
dQ:function dQ(){},
aY:function aY(a){this.a=a},
lr:function lr(){},
cc:function cc(a){var _=this
_.a=!0
_.c=_.b=null
_.d=a},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(a){this.a=a},
dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.c=null
_.d=$
_.e=null
_.f=!1
_.r=0
_.w=null},
oD:function oD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oE:function oE(a,b){this.a=a
this.b=b},
oC:function oC(a){this.a=a},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
oZ:function oZ(a,b,c){this.a=a
this.b=b
this.c=c},
v_(a,b,c,d,e){return new A.cP(a,b,c,d,e)},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2,a3,a4){var s=new A.i1(),r=new A.fV(),q=new A.ia(),p=new A.hh(),o=new A.dq(a,b,c,d,e,f,g,h,i,j,k,n,a0,l,m,s,r,q,p)
s.b=a3
s.a=s.du(o)
r.b=a1
r.a=r.du(o)
q.b=a4
q.a=q.du(o)
p.b=a2
p.a=p.du(o)
return o},
dq:function dq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
pZ:function pZ(){},
q1:function q1(){},
q2:function q2(){},
q_:function q_(){},
q0:function q0(){},
q3:function q3(){},
c0:function c0(){},
aI:function aI(){},
mS:function mS(){},
lj(a,b,c,d){return new A.cV(a,b,d,c)},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(){},
hK:function hK(a){this.a=a},
ah:function ah(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
rb:function rb(a){this.a=a},
ra:function ra(){},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a},
n0:function n0(){},
i2(a){if(a<=10)return B.e.P(A.w(a,1,10,0,20))
return B.e.P(A.w(a,10,50,20,200))},
xs(a){if(a<=20)return A.w(a,1,20,0.1,1)
if(a<=30)return A.w(a,20,30,1,1.5)
if(a<=40)return A.w(a,30,40,1.5,1.8)
if(a<=50)return A.w(a,40,50,1.8,2)
return A.w(a,50,60,2,2.1)},
wz(a){if(a<=10)return B.e.P(A.w(a,1,10,-50,0))
if(a<=30)return B.e.P(A.w(a,10,30,0,20))
return B.e.P(A.w(a,30,60,20,60))},
wA(a){if(a<=10)return B.e.P(A.w(a,1,10,-30,0))
if(a<=30)return B.e.P(A.w(a,10,30,0,20))
return B.e.P(A.w(a,30,60,20,50))},
kt(a){if(a<=10)return B.e.P(A.w(a,1,10,0,20))
return B.e.P(A.w(a,10,50,20,200))},
bd:function bd(a){this.a=null
this.$ti=a},
cx:function cx(a,b,c){this.c=a
this.a=b
this.b=c},
cy:function cy(){},
rt:function rt(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){this.b=0
this.a=null},
fV:function fV(){this.b=0
this.a=null},
ia:function ia(){this.b=0
this.a=null},
hh:function hh(){this.b=0
this.a=null},
BF(a){A.r(a)
return 1},
BE(a){A.r(a)
return 0},
cl:function cl(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
eK:function eK(a){this.b=a},
ot:function ot(){},
os:function os(){},
or:function or(a){this.a=a},
mn:function mn(){},
bq(a,b){var s=A.a([],t.I)
if(b!=null)B.a.T(s,b)
return new A.bZ(a,s,a.c)},
c6:function c6(a,b){this.a=a
this.c=b},
bD:function bD(){},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
pd:function pd(){},
dP:function dP(a,b){this.a=a
this.b=b},
mE:function mE(){},
L:function L(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e},
pF:function pF(){},
pA:function pA(){},
pz:function pz(){},
py:function py(){},
pG:function pG(){},
pB:function pB(){},
pC:function pC(a){this.a=a},
pE:function pE(a){this.a=a},
pD:function pD(){},
bO:function bO(a,b){this.a=a
this.b=b},
rW:function rW(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
dy:function dy(a,b){this.a=a
this.b=b},
zs(a){var s,r,q,p,o
for(s=$.ey.length,r=t.P,q=0;q<$.ey.length;$.ey.length===s||(0,A.o)($.ey),++q){p=$.ey[q]
o=r.a(a.$1(p.a))
p.b!==$&&A.ax()
p.b=o}B.a.aP($.ey)},
aN(a){var s=new A.jy(a)
B.a.j($.ey,s)
return s},
jy:function jy(a){this.a=a
this.b=$},
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
fk:function fk(a,b){this.a=a
this.b=b},
nO:function nO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC(a,b,c){return new A.jB(a,b,c)},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
qi:function qi(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c){var _=this
_.e=a
_.f=b
_.r=c
_.a=null
_.d=_.c=_.b=$},
qg:function qg(a,b,c,d){var _=this
_.d=a
_.e=null
_.a=b
_.b=c
_.c=d},
f_:function f_(){},
qh:function qh(a,b){this.a=a
this.b=b},
co:function co(){this.a=$},
cH:function cH(){this.a=$},
nJ:function nJ(a,b){this.a=a
this.b=b},
nH:function nH(a){this.a=a},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(){this.a=$},
nD:function nD(a){this.a=a},
nE:function nE(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(){},
lk:function lk(){},
cq:function cq(a,b){this.a=a
this.b=0
this.$ti=b},
cv(a,b,c,d,e,f){var s=new A.kT(c,d!==!1,e===!0,f,a,b,new A.cq(A.a([],t.k5),t.r),A.a([],t.l))
s.fF(a,b,f)
return s},
eL:function eL(){},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a,b,c){this.a=a
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
oN:function oN(a,b){this.a=a
this.b=b},
n_:function n_(a,b){this.a=a
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
pR:function pR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.w=_.r=_.f=!0},
pS:function pS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pT:function pT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l8:function l8(){},
y9(a){var s=a.a.e
if(s.X(0,$.bK()))return 8
if((s.a&$.V().a)===0)return 10
return 1},
rd:function rd(a){this.a=a
this.b=null},
n1:function n1(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=c
_.f=d},
tG:function tG(a,b,c){this.a=a
this.b=b
this.c=c},
Ap(a,b,c){var s,r=A.a([],t.p5),q=new A.rp(),p=t.jh,o=a*b
if(o>0)s=A.am(o,q.$1(B.al),!1,p)
else s=J.x_(0,p)
s=new A.aa(s,new A.a0(new A.e(0,0),new A.e(a,b)),t.lr)
s.lE(a,b,q,p)
return new A.rf(c,r,s,A.D(t.u,t.D),new A.aa(A.am(o,null,!1,t.e9),new A.a0(new A.e(0,0),new A.e(a,b)),t.hE))},
rf:function rf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.d=_.c=$
_.e=0
_.f=c
_.r=d
_.w=e},
rp:function rp(){},
rs:function rs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rr:function rr(a){this.a=a},
ro:function ro(){},
rq:function rq(a){this.a=a},
kS(a){return new A.ag(a)},
Au(a,b,c,d,e,f){return new A.d2(a,f,d==null?0:d,b,c,e)},
ag:function ag(a){this.a=a},
bG:function bG(a){this.a=a},
d2:function d2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d1:function d1(a,b){var _=this
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
fY:function fY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jN:function jN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
h4:function h4(a){this.a=a
this.b=20},
U(a,b){var s,r,q,p,o,n,m=A.a([],t.mO)
for(s=new A.dl(a),r=t.gS,s=new A.c9(s,s.gI(0),r.i("c9<Z.E>")),r=r.i("Z.E");s.q();){q=s.d
if(q==null)q=r.a(q)
for(p=b.length,o=0;o<b.length;b.length===p||(0,A.o)(b),++o){n=b[o]
B.a.j(m,new A.Y(q,n,B.z))}}return m},
h8:function h8(a,b){this.a=a
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
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e},
lQ:function lQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=8},
zH(a,b){var s,r,q,p,o,n=A.a([],t.hC)
for(s=$.vY(),r=b.Q.c.c,q=0;q<15;++q){p=s[q]
o=r.m(0,p.gcI())
if((o==null?0:o)>0)n.push(p)}n=new A.hb(b,n,A.D(t.M,t.de))
n.lG(a,b)
return n},
hb:function hb(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=null},
oA:function oA(){},
ow:function ow(){},
oB:function oB(){},
ox:function ox(){},
oy:function oy(){},
oz:function oz(a,b){this.a=a
this.b=b},
jS:function jS(){},
o9:function o9(a,b){this.a=a
this.b=b},
fU:function fU(a,b){var _=this
_.e=a
_.b=b
_.c=0
_.a=null},
l5:function l5(a){this.b=a
this.c=0
this.a=null},
wR(a0,a1){var s,r,q,p,o,n,m,l,k=a1.y.Q,j=k.e.d2(),i=k.f.d2(),h=k.y,g=t.M,f=t.S,e=A.cT(k.z.a,g,f),d=k.at,c=k.ax,b=t.P,a=A.cT(c.a,b,f)
b=A.cT(c.b,b,f)
s=t.q
r=A.cT(c.c,s,f)
q=A.cT(c.d,t.R,f)
p=A.x7(c.e,s)
s=A.cT(c.f,s,f)
c=k.Q
o=k.as
n=k.ay.b
m=k.ch.b
l=k.CW.b
d=new A.eR(a1,A.wV(k.a,k.b,k.c,k.d,j,i,k.r,k.w,k.x,h,new A.hZ(e,A.D(g,f)),d,new A.hw(a,b,r,q,p,s),c,o,m,k.cx.b,n,l),a0,new A.pV(d),new A.px(a1))
d.r=new A.r5(d)
l=A.a([],t.pl)
n=A.a([],t.lE)
d.w!==$&&A.ax()
d.w=new A.rg(d,l,n,B.jD,B.al)
$.nQ=d
$.jP.aP(0)
return d},
oT(a,b,c,d){var s,r,q,p,o,n,m,l=A.uZ(b,0,c,34,60)
if(d)for(s=b.lx(c),r=s.length,q=l.y,p=q.Q,o=p.e,p=p.ax,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
o.c9(m)
p.da(m)
q.bt()}for(s=l.ee(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c;s.q();){q=s.b
if(q==null)r.a(q)}if(d)a.bj()
return A.wR(a,l)},
eR:function eR(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=_.r=$
_.y=_.x=0
_.z=!1
_.a=_.ax=_.at=_.as=_.Q=null},
oX:function oX(a,b){this.a=a
this.b=b},
oV:function oV(){},
oW:function oW(a,b){this.a=a
this.b=b},
oU:function oU(a,b){this.a=a
this.b=b},
hv:function hv(a,b){var _=this
_.b=a
_.c=b
_.d=0
_.a=null},
xt(a,b,c){var s=new A.lJ(a,b,c,A.a([],t.lE))
s.lL(a,b,c)
return s},
Ba(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n<q){q=n
r=o}}return r},
B9(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=null,q=null,p=0;p<a.length;a.length===s||(0,A.o)(a),++p){o=a[p]
n=b.$1(o)
if(q==null||n>q){q=n
r=o}}return r},
lJ:function lJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=0
_.a=null},
rQ:function rQ(a){this.a=a},
rR:function rR(a){this.a=a},
Ax(a){var s,r,q,p,o=A.a([],t.eI)
for(s=$.uC(),r=a.b,q=0;q<26;++q){p=s[q]
if(p.gbE().dO(r)==null)o.push(p)}return new A.i9(a,o)},
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
oq:function oq(a){this.a=a},
fq:function fq(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
zL(a,b){var s=t.q
return B.c.al(s.a(a).d,s.a(b).d)},
zI(a,b){var s=t.q
return B.c.al(s.a(a).c,s.a(b).c)},
zK(a,b){var s=t.q
return B.c.al(s.a(a).as,s.a(b).as)},
zJ(a,b){var s=t.q
s.a(a)
s.a(b)
return B.i.al(a.a.a5(1).a.toLowerCase(),b.a.a5(1).a.toLowerCase())},
ky:function ky(a,b){var _=this
_.e=$
_.b=a
_.c=b
_.a=null},
pv:function pv(){},
pw:function pw(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
A1(a,b){var s=t.P,r=s.a(a).b.a,q=s.a(b).b.a
s=new A.qb()
if(s.$1(r)&&!s.$1(q))return 1
if(!s.$1(r)&&s.$1(q))return-1
return B.c.al(r,q)},
A0(a,b){var s=t.P
return B.c.al(s.a(a).c,s.a(b).c)},
A2(a,b){var s=t.P
return B.i.al(s.a(a).a.a.toLowerCase(),s.a(b).a.a.toLowerCase())},
A_(a,b){var s=null,r=A.a([new A.aO("Name",B.a7,0,s),new A.aO("Depth",B.am,5,s),new A.aO("Seen",B.am,5,s),new A.aO("Slain",B.am,5,s)],t.G),q=t.it,p=t.o9
p=A.a([new A.bE("appearance",A.a([A.Cu(),A.yo()],q),p),new A.bE("name",A.a([A.yp()],q),p),new A.bE("depth",A.a([A.yo(),A.yp()],q),p)],t.d4)
q=t.hb
p=new A.kR(A.ve(r,A.a([new A.ca("all",new A.qe(),q),new A.ca("uniques",new A.qf(),q)],t.gp),p,!0,t.P),a,b)
p.nq()
return p},
kR:function kR(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
qb:function qb(){},
qe:function qe(){},
qf:function qf(){},
qc:function qc(){},
qd:function qd(){},
qa:function qa(a,b){this.a=a
this.b=b},
l:function l(a){this.a=a},
dp:function dp(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
dU:function dU(a,b){var _=this
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
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(a){this.a=a},
pb:function pb(a){this.a=a},
pc:function pc(a){this.a=a},
b5:function b5(){},
ps:function ps(){},
wX(a,b,c){var s,r=new A.kx(b,A.wY(b,c?78:34)),q=b.a
if(q.x!=null)r.b=new A.ih(a,b)
if(q.Q+b.gc3()!==0||q.z!=null)r.c=new A.ij(b)
if(q.e!=null)r.d=new A.iD(b)
q=q.w
if(q!=null){s=c?78:34
r.e=new A.fy(A.e0(s,q.a),"Use")}return r},
wY(a,b){var s,r,q,p,o,n,m,l,k,j=A.a([],t.s)
for(s=0;s<4;++s){r=B.aV[s]
for(q=a.gag(),p=q.length,o=0,n=0;n<q.length;q.length===p||(0,A.o)(q),++n)o+=q[n].ds(r)
if(o<0)B.a.j(j,"It lowers your "+r.c+" by "+-o+".")
else if(o>0)B.a.j(j,"It raises your "+r.c+" by "+o+".")}a.gej().ae(0,new A.pt(j))
q=a.a
m=q.y
if(m!=null){p=m.b
l=p.e
k=l!==$.aD()?" "+l.a:""
B.a.j(j,"It can be thrown for "+p.c+k+" damage up to range "+p.d+".")
p=m.a
if(p!==0)B.a.j(j,"It has a "+p+"% chance of breaking when thrown.")}p=q.ay
if(p>0)B.a.j(j,"It emanates "+p+" light.")
for(q=q.cx,q=new A.c8(q,q.r,q.e,A.y(q).i("c8<1>"));q.q();)B.a.j(j,"It can be destroyed by "+q.d.a.toLowerCase()+".")
return new A.fy(A.e0(b-2,B.a.aG(j," ")),"Description")},
kx:function kx(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b},
pt:function pt(a){this.a=a},
d9:function d9(){},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a){this.a=a},
iD:function iD(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
e2:function e2(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
mT:function mT(){},
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
e8:function e8(a,b){var _=this
_.b=a
_.c=b
_.d=null
_.e=-1
_.f=!1
_.r=null
_.w=0
_.a=null},
rX:function rX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(){},
d6:function d6(){},
it:function it(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ip:function ip(){},
mz:function mz(a){var _=this
_.b=a
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
my:function my(a,b){var _=this
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
fr:function fr(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.b=d
_.c=!1
_.d=!0
_.a=_.f=_.e=null},
ea:function ea(a,b){var _=this
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
oS:function oS(a){this.a=a},
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
q5:function q5(){},
q4:function q4(a){this.a=a},
A3(a,b){var s,r,q,p,o,n=t.eR,m=A.a([],n),l=$.n()
t.m.a(B.ai)
s=B.ai.length
r=l.U(s)
if(!(r>=0&&r<s))return A.b(B.ai,r)
r=new A.kU(0,0,b,B.ai[r])
r.h6()
s=$.fM()
q=A.N(s)
p=q.i("as<1,q>")
s=A.a6(new A.as(s,q.i("q(1)").a(new A.qm()),p),p.i("aH.E"))
s=new A.fi(0,2,"Race",s)
q=$.eq()
p=A.N(q)
o=p.i("as<1,q>")
q=A.a6(new A.as(q,p.i("q(1)").a(new A.qn()),o),o.i("aH.E"))
q=new A.fi(0,12,"Class",q)
p=new A.fi(0,22,"Death",B.bv)
B.a.T(m,A.a([r,s,q,p],n))
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
qm:function qm(){},
qn:function qn(){},
qo:function qo(a){this.a=a},
eE:function eE(){},
kU:function kU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=""
_.e=d
_.f=!1},
ql:function ql(a){this.a=a},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
px:function px(a){this.b=a
this.a=null},
pV:function pV(a){this.b=a
this.a=null},
qz:function qz(){},
r5:function r5(a){this.b=a
this.a=null},
r9:function r9(a){this.a=a},
r7:function r7(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(){},
r6:function r6(a,b,c){this.a=a
this.b=b
this.c=c},
rg:function rg(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=!1
_.f=0
_.r=d
_.w=e
_.a=null},
rn:function rn(a){this.a=a},
rm:function rm(){},
rj:function rj(a){this.a=a},
rk:function rk(a,b){this.a=a
this.b=b},
rl:function rl(a,b){this.a=a
this.b=b},
rh:function rh(a,b){this.a=a
this.b=b},
ri:function ri(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.c=a
this.d=b
this.a=null},
zF(a,b){var s=new A.ha(a,b,A.a([],t.cz))
s.lF(a,b,{})
return s},
ha:function ha(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
ou:function ou(a,b){this.a=a
this.b=b},
ov:function ov(){},
m5:function m5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=0},
hd:function hd(a){this.c=a
this.a=null},
ld:function ld(){},
qB:function qB(){},
qC:function qC(){},
hV:function hV(a){this.d=a
this.e=1
this.a=null},
xr(a,b){return new A.hT(a,b,B.a.hC(b,new A.r1()))},
ae:function ae(a,b,c,d,e){var _=this
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
r1:function r1(){},
r2:function r2(){},
r3:function r3(){},
y8(a){var s=$.wt().m(0,a)
return s==null?B.cz:s},
CB(b9,c0,c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=$.zg(),b8=b9.x
b8===$&&A.c()
s=b8.f
r=s.b
q=r.b
p=q.a
o=q.b
q=p*o*3
n=new Int32Array(q)
m=new A.ux(b8)
l=new A.uy(b8)
for(r=A.ac(r),k=b8.r,j=s.a,i=j.length,b8=b8.w,h=b8.a,g=b8.b.b.a,f=h.length;r.q();){e=r.b
d=r.c
s.l(e,d)
c=d*p+e
if(!(c>=0&&c<i))return A.b(j,c)
b=j[c]
a=c*3
b8.l(e,d)
c=d*g+e
if(!(c>=0&&c<f))return A.b(h,c)
c=h[c]
a0=c!=null&&c2.$2(c,b)
if(!b.r&&!a0)continue
a1=b.a
a2=$.wt().m(0,a1)
if(a2==null)a2=B.cz
a3=a2.a
a4=a2.b
a5=a2.c
if(a4!==0){a1=l.$2(e,d-1)?8:0
a6=l.$2(e,d+1)?4:0
a7=l.$2(e-1,d)?2:0
a8=l.$2(e+1,d)?1:0
a9=a4+(a1|a6|a7|a8)}else if(a3!==0){a1=!J.a9(m.$2(e,d-1),a3)?8:0
a6=!J.a9(m.$2(e,d+1),a3)?4:0
a7=!J.a9(m.$2(e-1,d),a3)?2:0
a8=!J.a9(m.$2(e+1,d),a3)?1:0
a9=a3+(a1|a6|a7|a8)}else a9=0
b0=k.m(0,new A.e(e,d))
if(b0==null)b0=A.bq(B.G,null)
if(!b0.gaq(0)){b1=b0.gL(0)
if(!b1.q())A.a_(A.ct())
b2=B.cp.m(0,b1.gH().a.a.a5(1).a)
if(b2==null)b2=a5}else b2=a5
if(!b.r){a9=0
b2=0}b3=(!b.b&&b.d+b.e>b.c?2:0)|1
if(a0){if(c instanceof A.ad){b4=B.cn.m(0,c.Q.a.a)
b2=b4==null?b2:b4}else if(c instanceof A.av){b4=B.ii.m(0,c.Q.b.a)
b2=b4==null?b2:b4}if(c===c3)b3|=4}if(!(a<q))return A.b(n,a)
n[a]=a9
c=a+1
if(!(c<q))return A.b(n,c)
n[c]=b2
c=a+2
if(!(c<q))return A.b(n,c)
n[c]=b3}b5={}
b5.w=p
b5.h=o
b8=b9.y
b5.hx=b8.y.gn()
b5.hy=b8.y.gp()
b5.cells=n
b8=A.N($.iV)
s=b8.i("as<1,P?>")
b8=A.a6(new A.as($.iV,b8.i("P?(1)").a(new A.uw()),s),s.i("aH.E"))
b5.text=b8
b5.shown=c0
b6=b7.b
b5.rows=b6
b8=c1.a
s=b7.a
r=c1.b
b5.rect=A.vE(A.a([b8.a/s,b8.b/b6,r.a/s,r.b/b6],t.gk))
r=v.G
r.rvipMap=b5
B.a.aP($.iV)
if("rvipDraw" in r)A.dr(r,"rvipDraw",null,null,t.X)},
ut(){var s=v.G,r=s.rvipMap
if(r!=null)A.a2(r).shown=!1
if("rvipDraw" in s)A.dr(s,"rvipDraw",null,null,t.X)},
ux:function ux(a){this.a=a},
uy:function uy(a){this.a=a},
uw:function uw(){},
vI(){var s=v.G.rvipMulti
return J.a9(s==null?null:A.u_(s),!0)},
xP(a){var s=v.G
if(!("rvipCols" in s))return 30
return B.c.M(A.r(A.dr(s,"rvipCols",a,null,t.i)),10,200)},
xq(a,b){return new A.lv(a,b,A.am(a*b,B.aM,!1,t.v))},
CA(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.vI()||!("rvipPane" in v.G))return
s=a2.b
r=s.y
q=a2.w
q===$&&A.c()
p=B.c.M(q.d.length,0,10)
o=A.xq(A.xP("status"),23+p*2)
a3.e9(o)
n=v.G
m=t.X
A.dr(n,"rvipPane","status",o.l3(),m)
l=new A.uu(r)
k=r.Q
j=t.jA
l.$2("equip",A.a([new A.O(k.f,9)],j))
i=s.x
i===$&&A.c()
h=i.bS(r.y)
g=k.e
j=A.a([new A.O(g,g.c)],j)
if(!h.gaq(0))j.push(new A.O(h,h.b.length))
l.$2("inv",j)
f=A.a([],t.s)
for(q=q.d,j=q.length,e=0;e<q.length;q.length===j||(0,A.o)(q),++e){d=q[e]
c=d.Q.b
g=A.aS(c.a)
b=d.Q.a.a
a=c.b
a0=B.cn.m(0,b)
B.a.j(f,"M"+g+b+"\t"+("rgb("+a.a+", "+a.b+", "+a.c+")")+"\t"+A.J(a0==null?"":a0))}for(q=A.ac(i.f.b);q.q();){j=q.b
g=q.c
b=i.f
b.l(j,g)
a=b.a
b=g*b.b.b.a+j
if(!(b>=0&&b<a.length))return A.b(a,b)
b=a[b]
if(!(!b.b&&b.d+b.e>b.c))continue
j=i.r.m(0,new A.e(j,g))
j=(j==null?A.bq(B.G,null):j).b
g=A.N(j)
j=new J.aV(j,j.length,g.i("aV<1>"))
g=g.c
while(j.q()){b=j.d
if(b==null)b=g.a(b)
a=b.a
c=a.b
a0=A.aS(c.a)
b=b.gan()
a1=c.b
a=B.cp.m(0,a.a.a5(1).a)
B.a.j(f,"I"+a0+b.a+"\t"+("rgb("+a1.a+", "+a1.b+", "+a1.c+")")+"\t"+A.J(a==null?"":a))}}A.dr(n,"rvipVisible",B.a.aG(f,"\n"),null,m)
A.Cz(k.at)},
Cz(a){var s,r,q,p,o,n,m,l,k
if(a===$.xW&&a.b===$.xX)return
$.xW=a
$.xX=a.b
s=[]
for(r=a.a,q=r.length,p=t.N,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
switch(n.a.a){case 0:m=B.d
break
case 1:m=B.m
break
case 2:m=B.O
break
case 3:m=B.h
break
case 4:m=B.n
break
case 5:m=B.a0
break
default:m=null}l=n.b
k=n.c
if(k>1)l=l+" (x"+k+")"
s.push(A.vE(A.B(["t",l,"color","rgb("+m.a+", "+m.b+", "+m.c+")"],p,p)))}A.dr(v.G,"rvipMessages",s,null,t.X)},
lv:function lv(a,b,c){this.c=a
this.d=b
this.e=c},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
uu:function uu(a){this.a=a},
uv:function uv(){},
rv:function rv(a,b){this.a=a
this.b=b},
rF:function rF(a){this.a=a},
rG:function rG(a){this.a=a},
rC:function rC(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(a,b,c){this.a=a
this.b=b
this.c=c},
rw:function rw(a){this.a=a},
rx:function rx(a,b){this.a=a
this.b=b},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a,b){this.a=a
this.b=b},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a,b){this.a=a
this.b=b},
wJ(a,b,c,d,e,f){var s,r=null,q=a.e.a.b.b,p=q.a
q=q.b
a.kd(0,0,p,q,B.t)
s=new A.aZ(new A.e(b,c),B.c.A(p-b,2),B.c.A(q-2-c,2),a)
A.bl(s,r,r,f,!1,r,r,r)
d.$1(s.b8(1,1,b-2,c-2))
A.bA(a,e,r)},
bl(a,b,c,d,e,f,g,h){var s,r,q
if(b==null)s=e?B.h:B.l
else s=b
A.cL(a,g,h,f,c,s,"\u2552","\u2550","\u2555","\u2502","\u2514","\u2500","\u2518")
if(d!=null){s=g==null?0:g
r=h==null?0:h
q=e?B.h:B.f
a.k(s+2,r," "+d+" ",q)}},
h5(a,b,c,d,e,f){var s,r,q,p,o,n
if(d==null)d=a.c.a-e
if(c==null)c=B.d
s=A.e0(d,b)
for(r=s.length,q=f,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p,q=n){n=q+1
a.k(e,q,s[p],c)}return o},
jT(a,b,c,d,e){var s=B.i.aL("\u2500",d)
a.k(b,c,s,e==null?B.l:e)},
ob(a,b,c,d,e,f,g){var s,r=c+1
A.bl(a,B.f,e-1,null,!1,d,b,r)
s=b+1
a.k(s,c,"\u250c\u2500\u2510",B.f)
a.k(s,r,"\u2561 \u255e",B.f)
a.k(s,c+2,"\u2514\u2500\u2518",B.f)
if(f!=null)a.ap(b+2,r,f)
if(g!=null)a.k(b+4,r," "+g+" ",B.f)},
wK(a,b,c,d,e,f,g){var s,r,q,p,o
if(d<=e)for(s=0;s<b;++s)a.k(f,s+g,"\u258c",B.t)
else{r=B.c.M(B.e.N(b*e/d),1,b)
q=B.e.N((b-r)*c/(d-e+1))
p=q+r
for(s=0;s<b;++s){o=s<q||s>p?B.t:B.l
a.k(f,s+g,"\u258c",o)}}},
bA(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=0
b.ae(0,new A.oc(l))
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
b.ae(0,new A.od(l,a))},
cL(a,b,c,d,e,f,g,h,i,j,k,l,m){var s,r,q,p,o
if(b==null)b=0
if(c==null)c=0
if(d==null)d=a.gaj()
if(e==null)e=a.gam()
if(f==null)f=B.l
s=d-2
r=j+B.i.aL(" ",s)+j
for(q=c+1,p=c+e-1;q<p;++q)a.k(b,q,r,f)
o=B.i.aL(h,s)
s=B.i.aL(l,s)
a.k(b,c,g+o+i,f)
a.k(b,p,k+s+m,f)},
zC(a,b,c,d,e,f,g,h){var s,r,q=d*2,p=B.e.P(q*e/f)
if(p===0&&e>0)p=1
if(p===q&&e<f)p=q-1
for(q=p+1,s=0;s<d;++s){if(s<B.c.A(p,2))r=9608
else r=s<B.c.A(q,2)?9612:32
a.ap(b+s,c,new A.Y(r,g,h))}},
wL(a,b,c,d,e,f,g,h){var s,r,q
if(g==null)g=B.m
if(h==null)h=B.a1
s=B.e.P(d*e/f)
if(s===0&&e>0)s=1
if(s===d&&e<f)s=d-1
for(r=0;r<d;++r){q=r<s?g:h
a.ap(b+r,c,new A.Y(9604,q,B.z))}},
oc:function oc(a){this.a=a},
od:function od(a,b){this.a=a
this.b=b},
ve(a,b,c,d,e){var s,r=e.i("t<aw<0>>"),q=A.a([],r)
r=A.a([],r)
s=A.a(a.slice(0),A.N(a))
return new A.lI(s,q,r,d,c,b,B.al,e.i("lI<0>"))},
vg(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=c.kB(e,B.a.av(b,0,new A.rS(),t.S))
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.o)(b),++r,m=o){q=b[r]
p=q.a
o=m+p.length
if(o>e)p=B.i.aM(p,0,e-m)
n=q.b
if(n==null)n=d
a.k(f+m,g,p,n)}},
lI:function lI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=_.x=_.w=0
_.$ti=h},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a){this.a=a},
rL:function rL(a){this.a=a},
rM:function rM(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=0},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ab:function ab(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
this.b=b},
rS:function rS(){},
bE:function bE(a,b,c){this.a=a
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
t8:function t8(a){this.a=a},
t7:function t7(a){this.a=a},
cB:function cB(){},
tF:function tF(a){this.a=a},
nf:function nf(a){this.b=a
this.c=""
this.a=null},
tL:function tL(a){this.a=a},
ng:function ng(a){this.b=a
this.c=""
this.a=null},
tM:function tM(a){this.a=a},
oa:function oa(a,b){this.a=a
this.b=b},
ar(a,b,c){var s
if(0>=a.length)return A.b(a,0)
s=c==null?B.z:c
return new A.Y(a.charCodeAt(0),b,s)},
cO(a,b,c){var s=b==null?B.aL:b
return new A.Y(a,s,c==null?B.z:c)},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b){this.a=a
this.$ti=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
Al(a,b,c,d,e,f){var s=A.bV(d.getContext("2d"))
if(s==null)s=A.a2(s)
s=new A.ls(a,s,e,A.D(t.aZ,t.bp),f,b,c)
s.lK(a,b,c,d,e,f)
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
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
d0:function d0(){},
hP:function hP(){},
cA:function cA(){},
u:function u(){},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
xx(a,b){var s=a.b,r=s+s+1,q=a.a
return new A.mg(a,A.ac(new A.a0(new A.e(q.gn()-s,q.gp()-s),new A.e(r,r))),b)},
vq(a,b,c){var s=c.S(0,a).gaH()
if(b<7){if(!(b>=0))return A.b(B.ce,b)
return s<=B.ce[b]}return s<=b*(b+1)},
jD:function jD(a,b){this.a=a
this.b=b},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
mk:function mk(){},
ed(a,b){var s,r=b.S(0,a),q=r.a,p=new A.e(B.c.gig(q),0),o=r.b,n=new A.e(0,B.c.gig(o)),m=Math.abs(q),l=Math.abs(o)
if(l>m){s=l
l=m
m=s
s=n
n=p
p=s}return new A.mL(a,0,m,l,p,n)},
mL:function mL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xh(a,b){var s=Math.max(a.gbT(),b.gbT()),r=Math.min(a.gea(),b.gea()),q=Math.max(a.gbY(),b.gbY()),p=Math.min(a.geQ(),b.geQ())
return new A.a0(new A.e(s,q),new A.e(Math.max(0,r-s),Math.max(0,p-q)))},
ac(a){var s=a.a
return new A.cW(a,s.a-1,s.b)},
a0:function a0(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function qW(a){this.a=a},
Ay(a,b){return new A.e(a,b)},
lV:function lV(){},
e:function e(a,b){this.a=a
this.b=b},
nb:function nb(){},
fs(a,b,c,d,e){var s=A.BX(new A.ti(c),t.bp)
s=s==null?null:A.tQ(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.il(a,b,s,!1,e.i("il<0>"))},
BX(a,b){var s=$.aT
if(s===B.a8)return a
return s.oC(a,b)},
uY:function uY(a,b){this.a=a
this.$ti=b},
ik:function ik(){},
mm:function mm(a,b,c,d){var _=this
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
ti:function ti(a){this.a=a},
Cs(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5="item",a6="Insect Wing",a7="Feather",a8="item/food",a9="hit[s]",b0="Healing Poultice",b1=1000,b2="water",b3="equipment/armor/body",b4="The shield blocks {2}.",b5="equipment/armor/boots",b6="fearless",b7="bite[s]",b8=" ",b9="{1} flits out of the way.",c0="canine",c1="stare[s] at",c2="spark",c3="zaps",c4="gaze[s] into",c5="splashes",c6="hits",c7="scratch[es]",c8="stab[s]",c9="treasure",d0="spear",d1="healing",d2="goblin",d3="arrow",d4="armor",d5="resistance",d6="protective",d7="robe",d8="magic",d9="slash[es]",e0="equipment",e1="crawl[s] on",e2="fearless immobile",e3="cowardly",e4="club",e5="kobold",e6="poke[s]",e7="claw[s]",e8="saurian",e9="salamander",f0="weapon",f1="strangle",f2="natural/bug/worm",f3="bony hand",f4="bony arm",f5="severed skull",f6="decapitated skeleton",f7="armless skeleton",f8="one-armed skeleton",f9="{1}'s arm falls off!",g0="{1}'s hand falls off!",g1="{1}'s head pops off!",g2="Elven _",g3="High Elven _",g4="Dwarven _",g5="animal herp",g6="room",g7="catacomb"
$.bo().c5(a5)
s=A.a7(199,10,a4)
s.a4(a5)
r=$.dL()
s.cv(10,3,r,7)
A.i()
s=$.h=A.j("Rock",B.k,0)
s.v(1)
s.x=0.5
s=A.a7(252,4,a4)
s.a4(a5)
s.bH(30,2,5)
A.i()
s=$.h=A.j("Skull",B.p,0)
s.x=0.25
s.v(1)
s=A.a7(162,a4,a4)
s.a4("treasure/coin")
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
s=A.j("Platinum Coin",B.p,300)
$.h=s
s.E(40,70)
s=A.a7(36,a4,a4)
s.a4("treasure/bar")
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
s=A.j("Platinum Bar",B.p,3000)
$.h=s
s.v(90)
s=A.a7(162,a4,a4)
s.a4("item/gem")
q=$.dK()
s.a.h(0,q,50)
s.w=null
A.i()
s=A.j("Amethyst Shard",B.d_,30)
$.h=s
s.E(7,27)
A.i()
s=A.j("Uncut Amethyst",B.P,100)
$.h=s
s.E(27,57)
A.i()
s=A.j("Faceted Amethyst",B.O,400)
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
s=A.j("Uncut Emerald",B.n,136)
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
s=A.j("Faceted Ruby",B.a1,498)
$.h=s
s.v(60)
A.i()
s=A.j("Diamond Shard",B.f,45)
$.h=s
s.E(11,31)
A.i()
s=A.j("Uncut Diamond",B.p,153)
$.h=s
s.E(31,61)
A.i()
s=A.j("Faceted Diamond",B.u,507)
$.h=s
s.v(61)
s=A.a7(233,20,a4)
s.a4("item/pelt")
s.x=0
p=$.b8()
s.a.h(0,p,80)
s.w=1
A.i()
s=A.j(a6,B.ao,0)
$.h=s
s.v(1)
A.i()
s=A.j(a7,B.p,0)
$.h=s
s.v(1)
s=A.a7(161,a4,a4)
s.a4(a8)
s.a.h(0,p,20)
s.w=3
A.i()
s=$.h=A.j("Stale Biscuit",B.I,0)
s.E(1,10)
s.b=6
s.f2(100)
A.i()
s=$.h=A.j("Loa[f|ves] of Bread",B.k,4)
s.E(3,40)
s.b=6
s.f2(200)
s=A.a7(188,a4,a4)
s.a4(a8)
s.a.h(0,p,15)
s.w=2
A.i()
s=$.h=A.j("Chunk[s] of Meat",B.w,10)
s.E(8,60)
s.b=4
s.f2(400)
A.i()
s=$.h=A.j("Piece[s] of Jerky",B.k,20)
s.v(15)
s.b=12
s.f2(600)
s=A.a7(172,a4,a9)
s.a4("equipment/light")
s.pO(70)
A.i()
s=$.h=A.j("Tallow Candle",B.I,6)
s.E(1,12)
s.b=10
s.ec(2,p,8)
s.dc(2,5)
s.a.h(0,p,40)
s.w=20
A.i()
s=$.h=A.j("Wax Candle",B.u,24)
s.E(6,20)
s.b=10
s.ec(3,p,8)
s.dc(3,7)
s.a.h(0,p,40)
s.w=25
A.i()
s=$.h=A.j("Oil Lamp",B.w,146)
s.E(12,30)
s.b=4
s.ec(10,p,8)
s.dc(4,10)
s.a.h(0,p,50)
s.w=40
A.i()
s=$.h=A.j("Torch[es]",B.k,230)
s.E(17,45)
s.b=4
s.ec(6,p,10)
s.dc(5,14)
s.a.h(0,p,60)
s.w=60
A.i()
s=$.h=A.j("Lantern",B.h,350)
s.v(24)
s.x=0.3
s.ec(5,p,5)
s.dc(6,18)
s=A.a7(231,10,a4)
s.a4("magic/potion/healing")
s.bH(100,1,6)
o=$.ci()
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Soothing Balm",B.a5,10)
s.E(2,30)
s.ki(36)
A.i()
s=$.h=A.j("Mending Salve",B.m,30)
s.E(20,40)
s.ki(64)
A.i()
s=$.h=A.j(b0,B.a1,80)
s.v(30)
s.dZ(120,!0)
A.i()
s=$.h=A.j("Potion[s] of Amelioration",B.ao,220)
s.v(60)
s.dZ(200,!0)
A.i()
s=$.h=A.j("Potion[s] of Rejuvenation",B.O,b1)
s.v(80)
s.dZ(b1,!0)
A.i()
s=$.h=A.j("Antidote",B.n,20)
s.v(2)
s.dZ(0,!0)
s=A.a7(234,10,a4)
s.a4("magic/potion/resistance")
s.x=0.5
s.bH(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Salve[s] of Heat Resistance",B.N,50)
s.v(5)
s.bF(p)
A.i()
s=$.h=A.j("Salve[s] of Cold Resistance",B.J,55)
s.v(6)
s.bF(o)
A.i()
s=$.h=A.j("Salve[s] of Light Resistance",B.E,60)
s.v(7)
n=$.dd()
s.bF(n)
A.i()
s=$.h=A.j("Salve[s] of Wind Resistance",B.K,65)
s.v(8)
m=$.er()
s.bF(m)
A.i()
s=$.h=A.j("Salve[s] of Lightning Resistance",B.P,70)
s.v(9)
l=$.dM()
s.bF(l)
A.i()
s=$.h=A.j("Salve[s] of Darkness Resistance",B.f,75)
s.v(10)
k=$.dc()
s.bF(k)
A.i()
s=$.h=A.j("Salve[s] of Earth Resistance",B.k,80)
s.v(13)
s.bF(r)
A.i()
s=$.h=A.j("Salve[s] of Water Resistance",B.F,85)
s.v(16)
j=$.de()
s.bF(j)
A.i()
s=$.h=A.j("Salve[s] of Acid Resistance",B.I,90)
s.v(19)
s.bF(q)
A.i()
s=$.h=A.j("Salve[s] of Poison Resistance",B.A,95)
s.v(23)
i=$.bJ()
s.bF(i)
A.i()
s=$.h=A.j("Salve[s] of Death Resistance",B.O,100)
s.v(30)
h=$.dN()
s.bF(h)
s=A.a7(235,10,a4)
s.a4("magic/potion/speed")
s.x=0.3
s.bH(100,1,6)
s.a.h(0,o,20)
s.w=null
A.i()
s=$.h=A.j("Potion[s] of Quickness",B.A,25)
s.E(3,30)
s.hB(1,40)
A.i()
s=$.h=A.j("Potion[s] of Alacrity",B.n,60)
s.E(18,50)
s.hB(2,60)
A.i()
s=$.h=A.j("Potion[s] of Speed",B.B,150)
s.v(34)
s.x=0.25
s.hB(3,100)
s=A.a7(232,10,a4)
s.a4("magic/potion/bottled")
s.x=0.5
s.bH(100,1,8)
s.a.h(0,o,15)
s.w=null
A.i()
s=$.h=A.j("Bottled Wind",B.J,60)
s.v(4)
s.dX(m,"wind","blasts",10,!0)
A.i()
s=$.h=A.j("Bottled Ice",B.D,100)
s.v(7)
s.dL(o,"cold","freezes",16)
A.i()
s=$.h=A.j("Bottled Fire",B.m,140)
s.v(11)
s.dX(p,"fire","burns",23,!0)
A.i()
s=$.h=A.j("Bottled Ocean",B.F,160)
s.v(12)
s.kg(j,b2,"drowns",30)
A.i()
s=$.h=A.j("Bottled Poison",B.B,240)
s.v(13)
s.dX(i,"poison","infects",10,!0)
A.i()
s=$.h=A.j("Bottled Earth",B.k,180)
s.v(16)
s.dL(r,"dirt","crushes",58)
A.i()
s=$.h=A.j("Bottled Lightning",B.P,200)
s.v(18)
s.dL(l,"lightning","shocks",68)
A.i()
s=$.h=A.j("Bottled Acid",B.A,220)
s.v(22)
s.kg(q,"acid","corrodes",72)
A.i()
s=$.h=A.j("Bottled Shadow",B.l,260)
s.v(28)
s.dL(k,"darkness","torments",120)
A.i()
s=$.h=A.j("Bottled Radiance",B.E,280)
s.v(34)
s.dL(n,"light","sears",140)
A.i()
s=$.h=A.j("Bottled Spirit",B.f,300)
s.v(40)
s.dX(h,"spirit","haunts",160,!0)
s=A.a7(226,20,a4)
s.a4("magic/scroll/teleportation")
s.x=0.3
s.bH(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Sidestepping",B.P,20)
s.v(2)
s.x=0.5
s.fk(8)
A.i()
s=$.h=A.j("Scroll[s] of Phasing",B.O,28)
s.v(6)
s.fk(14)
A.i()
s=$.h=A.j("Scroll[s] of Teleportation",B.ao,52)
s.v(15)
s.fk(28)
A.i()
s=$.h=A.j("Scroll[s] of Disappearing",B.F,74)
s.v(26)
s.fk(54)
s=A.a7(228,20,a4)
s.a4("magic/scroll/detection")
s.bH(75,1,3)
s.a.h(0,p,20)
s.w=5
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Escape",B.E,12)
s.E(1,10)
g=t.oO
s.eW(A.a([B.at],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Locate Escape",B.I,28)
s.E(8,30)
s.hp(A.a([B.at],g))
A.i()
s=$.h=A.j("Scroll[s] of Find Nearby Items",B.h,16)
s.E(2,16)
s.eW(A.a([B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Item Detection",B.N,64)
s.E(12,40)
s.hp(A.a([B.ax],g))
A.i()
s=$.h=A.j("Scroll[s] of Detect Nearby",B.A,36)
s.E(12,36)
s.eW(A.a([B.at,B.ax],g),20)
A.i()
s=$.h=A.j("Scroll[s] of Detection",B.as,124)
s.v(30)
s.hp(A.a([B.at,B.ax],g))
A.i()
g=$.h=A.j("Scroll[s] of Sense Nearby Monsters",B.J,50)
g.E(6,19)
g.hM(15)
A.i()
g=$.h=A.j("Scroll[s] of Sense Monsters",B.a0,70)
g.E(20,39)
g.hM(20)
A.i()
g=$.h=A.j("Scroll[s] of Perceive Monsters",B.D,100)
g.E(40,69)
g.kO(30,50)
A.i()
g=$.h=A.j("Scroll[s] of Telepathy",B.F,150)
g.v(70)
g.hM(200)
g=A.a7(224,20,a4)
g.a4("magic/scroll/mapping")
g.x=0.25
g.bH(75,1,3)
g.a.h(0,p,15)
g.w=5
A.i()
g=$.h=A.j("Adventurer's Map",B.B,70)
g.E(10,50)
g.hF(16)
A.i()
g=$.h=A.j("Explorer's Map",B.n,160)
g.E(30,70)
g.hF(32)
A.i()
g=$.h=A.j("Cartographer's Map",B.ag,240)
g.E(50,90)
g.hF(64)
A.i()
g=$.h=A.j("Wizard's Map",B.a0,360)
g.v(70)
g.ks(200,!0)
A.Cx()
A.CO()
g=A.a7(201,a4,a4)
g.a4("equipment/armor/helm")
g.x=0.5
g.bH(10,3,5)
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
g=$.h=A.j("Visored Helm",B.p,350)
g.v(40)
g.cy=5
g.CW=6
A.i()
g=$.h=A.j("Great Helm",B.u,550)
g.v(50)
g.cy=6
g.CW=8
A.a7(244,a4,a4).a4("equipment/armor/body/robe")
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
g=A.a7(246,a4,a4)
g.a4(b3)
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
g=$.h=A.j("Jerkin",B.p,130)
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
g=A.a7(242,a4,a4)
g.a4(b3)
g.x=0.5
A.i()
g=$.h=A.j("Mail Hauberk",B.l,500)
g.v(25)
g.cy=28
g.CW=5
A.i()
g=$.h=A.j("Scale Mail",B.p,700)
g.v(35)
g.cy=36
g.CW=7
g=A.a7(251,a4,a4)
g.a4(b3)
g.x=0.5
A.i()
g=$.h=A.j("Plated Mail",B.l,b1)
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
g=$.h=A.j("Plate Armor",B.p,3400)
g.v(70)
g.cy=60
g.CW=18
A.a7(198,a4,a4).a4("equipment/armor/cloak")
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
g=A.a7(197,a4,a4)
g.a4("equipment/armor/gloves")
g.x=0.5
g.bH(20,5,4)
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
g=A.a7(230,a4,a4)
g.a4("equipment/armor/shield")
g.x=0.5
g.bH(10,5,8)
A.i()
g=$.h=A.j("Buckler",B.l,170)
g.E(10,40)
g.cy=0
g.CW=2
g.ch=new A.aF(3,"The buckler blocks {2}.")
A.i()
g=$.h=A.j("Leather Shield",B.w,240)
g.E(20,50)
g.cy=0
g.CW=3
g.ch=new A.aF(5,b4)
g.a.h(0,p,15)
g.w=14
A.i()
g=$.h=A.j("Targe",B.I,340)
g.E(30,60)
g.cy=0
g.CW=4
g.ch=new A.aF(8,"The targe blocks {2}.")
g.a.h(0,p,10)
g.w=20
A.i()
g=$.h=A.j("Roundel",B.f,410)
g.E(40,80)
g.cy=0
g.CW=6
g.ch=new A.aF(10,b4)
A.i()
g=$.h=A.j("Steel Shield",B.p,570)
g.E(50,90)
g.cy=0
g.CW=7
g.ch=new A.aF(12,b4)
A.i()
g=$.h=A.j("Kite Shield",B.d,650)
g.v(60)
g.cy=0
g.CW=8
g.ch=new A.aF(15,b4)
A.i()
g=$.h=A.j("Lantern Shield",B.h,1200)
g.v(30)
g.cy=0
g.CW=8
g.ch=new A.aF(11,b4)
g.po(5)
g=A.a7(236,a4,a4)
g.a4(b5)
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
g=A.a7(196,a4,a4)
g.a4(b5)
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
g=$.h=A.j("(Pair[s] of )Greaves",B.p,350)
g.v(47)
g.cy=12
g.CW=3
A.i()
A.yg()
A.yk()
A.yv()
g=A.al("a","natural/bug/spider",a4,b6,a4,a4,a4)
g.at=4
g.ax=2
g.Q=$.j5()
g=A.p("little brown spider",3,B.k,2,30,a4,0)
g.f=40
g.ak(b7,5,i)
g=$.zf()
f=A.bn("Seems harmless enough. What's that dripping from its pedipalps?",g,b8)
$.ce.fy=f
s=A.p("gray spider",7,B.f,20,30,a4,0)
s.f=30
s.ak(b7,5,i)
s=A.p("spiderling",9,B.u,14,35,a4,0)
s.f=50
s.aW(2,7)
s.ak(b7,10,i)
s=A.p("giant spider",12,B.F,40,a4,a4,0)
s.f=30
s.ak(b7,7,i)
f=A.bn("Like a large dog, if the dog had eight articulated legs, eight\n  glittering eyes, and wanted nothing more than to kill you.",g,b8)
$.ce.fy=f
s=A.al("b","natural/animal/mammal/bat",a4,a4,a4,1,a4)
s.at=2
s.ax=8
e=s.c
d=$.V().a
s.c=new A.ag(e.a|d)
s.d=B.aj
s=A.p("brown bat",1,B.k,4,a4,0.5,0)
s.f=50
B.a.j(s.w,new A.aF(20,b9))
s.aW(2,4)
s.D(b7,3)
s=A.p("giant bat",4,B.w,24,a4,a4,0)
s.f=30
s.D(b7,6)
s=A.p("cave bat",6,B.p,30,a4,a4,0)
s.f=40
B.a.j(s.w,new A.aF(20,b9))
s.aW(2,5)
s.D(b7,6)
s=A.al("c","natural/animal/mammal/canine",25,a4,a4,a4,20)
s.at=5
s.ax=10
s.f=25
s=A.p("mangy cur",2,B.E,11,a4,a4,0)
s.aR(4)
s.D(b7,4)
B.a.j(s.dx,new A.bY(6,a4,10))
s=A.p("wild dog",4,B.p,20,a4,a4,0)
s.aR(4)
s.D(b7,6)
B.a.j(s.dx,new A.bY(8,a4,10))
s=A.p("mongrel",7,B.N,28,a4,a4,0)
s.aW(2,5)
s.D(b7,8)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("wolf",26,B.u,60,a4,a4,0)
s.aW(3,6)
s.D(b7,12)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("varg",30,B.f,80,a4,a4,0)
s.aW(2,6)
s.D(b7,16)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Skoll",36,B.h,200,a4,a4,0)
s.i2()
s.ad(new A.af(c0),5,9)
s.D(b7,20)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Hati",40,B.D,250,a4,a4,0)
s.i2()
s.ad(new A.af(c0),5,9)
s.D(b7,23)
B.a.j(s.dx,new A.bY(10,a4,10))
s=A.p("Fenrir",44,B.l,300,a4,a4,0)
s.i2()
s.ad(new A.af(c0),3,5)
s.kt("Skoll")
s.kt("Hati")
s.D(b7,26)
B.a.j(s.dx,new A.bY(10,a4,10))
A.C7()
s=A.al("e","magical/eye",a4,"immobile",a4,a4,a4)
s.at=16
s.ax=1
B.a.j(s.w,new A.aF(10,"{1} blinks out of the way."))
s.c=new A.ag(s.c.a|d)
s.d=B.aj
s=A.p("lazy eye",5,B.J,20,a4,a4,0)
s.D(c1,8)
s.az(c2,c3,l,12,8,5)
s=A.p("mad eye",9,B.a5,40,a4,a4,0)
s.D(c1,8)
s.bm(m,15,8,6)
s=A.p("floating eye",15,B.E,60,a4,a4,0)
s.D(c1,10)
s.az(c2,c3,l,24,6,4)
B.a.j(s.dx,new A.bF(7,10))
s=A.p("baleful eye",20,B.N,80,a4,a4,0)
s.D(c4,12)
s.bm(p,20,8,4)
s.az("jet",c5,j,20,8,4)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("malevolent eye",30,B.m,120,a4,a4,0)
s.D(c4,20)
s.bm(n,20,10,4)
s.bm(k,20,10,4)
s.c4(p,30,a4,7)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("murderous eye",40,B.a1,180,a4,a4,0)
s.D(c4,30)
s.bm(q,40,8,7)
s.az("stone",c6,r,40,8,7)
s.c4(o,30,a4,7)
B.a.j(s.dx,new A.bF(9,10))
s=A.p("watcher",60,B.p,300,a4,a4,0)
s.D("see[s]",50)
s.bm(n,40,10,7)
s.c4(n,30,a4,7)
s.bm(k,50,10,7)
s.c4(k,40,a4,7)
s=A.al("f","natural/animal/mammal/feline",40,a4,a4,a4,a4)
s.at=10
s.ax=8
s=A.p("stray cat",1,B.h,11,a4,a4,1)
s.f=30
B.a.j(s.dx,new A.b7(B.cr,4))
s.D(b7,4)
s.D(c7,3)
s=A.al("g","humanoid/hob/goblin",a4,a4,a4,a4,a4)
s.at=8
s.ax=4
s.f=10
e=s.c
c=$.bK().a
s.c=new A.ag(e.a|c)
e=A.p("goblin peon",4,B.I,30,a4,a4,0)
e.f=20
e.aR(4)
e.D(c8,8)
B.a.j(e.dx,new A.b7(B.aa,8))
e.C(c9,20)
e.C(d0,5)
e.C(d1,10)
e=A.p("goblin archer",6,B.n,36,a4,a4,0)
e.aR(2)
e.ad(new A.af(d2),0,3)
e.D(c8,4)
s=$.aD()
e.az(d3,c6,s,8,8,3)
e.C(c9,30)
e.C("bow",10)
e.C("dagger",5)
e.C(d1,10)
e=A.p("goblin fighter",6,B.k,58,a4,a4,0)
e.aR(2)
e.ad(new A.af(d2),1,4)
e.D(c8,12)
e.C(c9,20)
e.C(d0,10)
e.C(d4,10)
e.C(d5,5)
e.C(d1,10)
e=A.p("goblin warrior",8,B.p,68,a4,a4,0)
e.aR(2)
e.ad(new A.af(d2),1,5)
e.D(c8,16)
e.C(c9,25)
e.C("axe",10)
e.C(d4,10)
e.C(d5,5)
e.C(d1,10)
b=t.s
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.p("goblin mage",9,B.F,50,a4,a4,0)
e.ad(new A.af(d2),1,4)
e.D("whip[s]",7)
e.bm(p,12,8,12)
e.az(c2,c3,l,16,6,12)
e.C(c9,20)
e.C(d7,10)
e.C(d8,30)
e=A.p("goblin ranger",12,B.B,60,a4,a4,0)
e.ad(new A.af(d2),0,5)
e.D(c8,10)
e.az(d3,c6,s,12,8,3)
e.C(c9,20)
e.C("bow",15)
e.C(d4,10)
e.C(d8,20)
e=A.p("Erlkonig, the Goblin Prince",14,B.l,120,a4,a4,0)
e.cS(B.aI)
e.ad(new A.af(d2),4,8)
e.D(a9,10)
e.D(d9,14)
e.bm(k,20,10,20)
e.hu(c9,3)
e.p0(e0,2,4)
e.eX(d8,3,4)
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.al("i","bug",a4,b6,a4,a4,3)
e.at=5
e.ax=2
e.f=40
e=A.p("giant cockroach[es]",1,B.w,4,a4,0.4,0)
e.aW(2,5)
e.d=B.bA
e.D(e1,2)
B.a.j(e.dx,new A.bS(!1,4))
e.C(a6,30)
f=A.bn("It's not quite as easy to squash one of these when it's as long as\n      your arm.",g,b8)
$.ce.fy=f
e=A.p("giant centipede",3,B.m,14,a4,a4,2)
e.f=20
e.D(e1,4)
e.D(b7,8)
e=A.al("i","natural/bug/fly",a4,b6,a4,a4,3)
e.at=5
e.ax=2
e.f=40
e=A.p("firefly",8,B.N,6,a4,a4,1)
e.f=70
e.aW(3,8)
e.ak(b7,12,p)
e.C(a6,40)
e=A.al("j","magical/jelly",a4,b6,0.7,-1,a4)
e.at=3
e.ax=1
e.f=30
e.d=B.aX
e=A.p("green jelly",1,B.A,10,a4,a4,0)
a=e.Q=$.wa()
e.D(e1,3)
e=A.al("j","jelly",a4,e2,0.6,a4,a4)
e.at=2
e.ax=1
e.d=B.bA
e.aR(4)
e=A.p("green slime",2,B.n,8,a4,a4,0)
e.Q=a
e.D(e1,4)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("frosty slime",4,B.u,14,a4,a4,0)
e.Q=$.wn()
e.ak(e1,5,o)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("mud slime",6,B.k,20,a4,a4,0)
e.Q=$.w2()
e.ak(e1,8,r)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("smoking slime",15,B.m,30,a4,a4,0)
e.as=4
e.Q=$.we()
e.ak(e1,10,p)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("sparkling slime",20,B.O,40,a4,a4,0)
e.as=3
e.Q=$.wm()
e.ak(e1,12,l)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("caustic slime",25,B.ag,50,a4,a4,0)
e.Q=a
e.ak(e1,13,q)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("virulent slime",35,B.B,60,a4,a4,0)
e.Q=a
e.ak(e1,14,i)
B.a.j(e.dx,new A.bS(!1,4))
e=A.p("ectoplasm",45,B.l,40,a4,a4,0)
e.Q=$.w9()
e.ak(e1,15,h)
B.a.j(e.dx,new A.bS(!1,4))
e=A.al("k","humanoid/hob/kobold",a4,e3,a4,a4,a4)
e.at=10
e.ax=4
e.f=15
e=A.p("scurrilous imp",1,B.a5,12,a4,a4,0)
e.f=20
e.aR(2)
e.D("club[s]",4)
B.a.j(e.dx,new A.b7(B.aa,5))
e.pi()
e.C(c9,20)
e.C(e4,10)
e.C("speed",20)
e=A.p("vexing imp",2,B.O,16,a4,a4,0)
e.aR(2)
e.ad(new A.af(e5),0,1)
e.D(c7,4)
B.a.j(e.dx,new A.b7(B.aa,5))
e.az(c2,c3,l,6,6,5)
e.C(c9,25)
e.C("teleportation",20)
A.al("k",e5,a4,a4,a4,a4,a4).f=20
e=A.p(e5,3,B.m,20,a4,a4,0)
e.aR(3)
e.ad(new A.af(c0),0,3)
e.D(e6,4)
B.a.j(e.dx,new A.bF(6,10))
e.C(c9,25)
e.C(e0,10)
e.C(d8,20)
e=A.p("kobold shaman",4,B.F,20,a4,a4,0)
e.aR(2)
e.ad(new A.af(c0),0,3)
e.D(a9,4)
e.az("jet",c5,j,8,8,10)
e.C(c9,25)
e.C(d7,10)
e.C(d8,20)
e=A.p("kobold trickster",5,B.h,24,a4,a4,0)
e.D(a9,5)
a=e.dx
B.a.j(a,new A.b7(B.aa,5))
e.az(c2,c3,l,8,6,5)
B.a.j(a,new A.bF(6,7))
e.hA(7)
e.C(c9,35)
e.C(d8,20)
e=A.p("kobold priest",6,B.D,30,a4,a4,0)
e.aR(2)
e.ad(new A.af(e5),1,3)
e.D("club[s]",6)
B.a.j(e.dx,new A.hf(10,15))
e.hA(7)
e.C(c9,20)
e.C(e4,10)
e.C(d7,10)
e.C(d8,30)
e=A.p("imp incanter",7,B.P,33,a4,a4,0)
e.aR(2)
e.ad(new A.af(e5),1,3)
e.ad(new A.af(c0),0,3)
e.D(c7,4)
B.a.j(e.dx,new A.b7(B.aa,6))
e.az(c2,c3,l,10,6,5)
e.C(c9,30)
e.C(d7,10)
e.C(d8,35)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("imp warlock",8,B.ao,46,a4,a4,0)
e.ad(new A.af(e5),2,5)
e.ad(new A.af(c0),0,3)
e.D(c8,5)
e.az("ice","freezes",o,12,8,8)
e.az(c2,c3,l,12,6,8)
e.C(c9,30)
e.C("staff",20)
e.C(d7,10)
e.C(d8,30)
e=A.p("Feng",10,B.N,80,a4,a4,1)
e.f=10
e.cS(B.aI)
e.ad(new A.af(e5),4,10)
e.ad(new A.af(c0),1,3)
e.D(c8,5)
a=e.dx
B.a.j(a,new A.b7(B.aa,7))
B.a.j(a,new A.bF(6,5))
B.a.j(a,new A.bF(30,50))
e.c4(l,12,a4,8)
e.eX(c9,3,5)
e.hw(d0,5,20)
e.hw(d4,5,30)
e.eX(d8,2,5)
e=A.al("l","humanoid/saurian",a4,b6,a4,a4,a4)
e.at=10
e.ax=5
e.f=10
B.a.j(e.w,new A.aF(5,"{2} [are|is] deflected by its scales."))
e=A.p("lizard guard",11,B.h,26,a4,a4,0)
e.D(e7,8)
e.D(b7,10)
e.C(c9,30)
e.C(d4,10)
e.C(d0,10)
e=A.p("lizard protector",15,B.A,30,a4,a4,0)
e.ad(new A.af(e8),0,2)
e.D(e7,10)
e.D(b7,14)
e.C(c9,30)
e.C(d4,10)
e.C(d0,10)
e=A.p("armored lizard",17,B.p,38,a4,a4,0)
e.ad(new A.af(e8),0,2)
e.D(e7,10)
e.D(b7,15)
e.C(c9,30)
e.C(d4,20)
e.C(d0,10)
e=A.p("scaled guardian",19,B.l,50,a4,a4,0)
e.ad(new A.af(e8),0,3)
e.ad(new A.af(e9),0,2)
e.D(e7,10)
e.D(b7,15)
e.C(c9,40)
e.C(e0,10)
e=A.p(e8,21,B.N,64,a4,a4,0)
e.ad(new A.af(e8),1,4)
e.ad(new A.af(e9),0,2)
e.D(e7,12)
e.D(b7,17)
e.C(c9,50)
e.C(e0,10)
e=A.al("o","humanoid/orcus/orc",a4,a4,a4,a4,a4)
e.at=7
e.ax=6
e.f=10
e.c=new A.ag(e.c.a|c)
B.a.T(e.x,A.a(d6.split(b8),b))
e=A.p("orc",28,B.N,100,a4,a4,0)
e.aW(3,6)
e.D(c8,12)
e.C(c9,20)
e.C(e0,5)
e.C(d0,5)
e=A.p("orc brute",29,B.ag,120,a4,a4,0)
e.ad(new A.af("orc"),2,5)
e.D("bash[es]",16)
e.C(c9,20)
e.C(e4,10)
e.C(d4,10)
e=A.p("orc soldier",30,B.p,140,a4,a4,0)
e.aW(4,6)
e.ad(new A.af("orcus"),1,5)
e.D(c8,20)
e.C(c9,25)
e.C("axe",10)
e.C(d4,10)
e=A.p("orc chieftain",31,B.m,180,a4,a4,0)
e.ad(new A.af("orcus"),2,10)
e.D(c8,10)
e.p_(c9,2,40)
e.C(e0,20)
e.C(a5,20)
e=A.al("p","humanoid/human",a4,a4,a4,a4,14)
e.at=10
e.ax=5
e.f=10
e.c=new A.ag(e.c.a|c)
e.as=2
e=A.p("Harold the Misfortunate",2,B.P,30,a4,a4,0)
e.cS(B.aI)
e.D(a9,3)
B.a.j(e.dx,new A.b7(B.aG,5))
e.C(c9,80)
e.hv(f0,4,20)
e.hv(d4,4,30)
e.hv(d8,4,40)
e=A.p("hapless adventurer",1,B.E,14,15,a4,0)
e.f=30
e.D(a9,3)
B.a.j(e.dx,new A.b7(B.aG,12))
e.C(c9,15)
e.C(f0,10)
e.C(d4,15)
e.C(d8,20)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("simpering knave",2,B.N,17,a4,a4,0)
e.D(a9,2)
e.D(c8,4)
e.C(c9,20)
e.C("whip",10)
e.C(d4,15)
e.C(d8,20)
B.a.T(e.x,A.a(e3.split(b8),b))
e=A.p("decrepit mage",3,B.O,20,a4,a4,0)
e.f=30
e.D(a9,2)
e.az(c2,c3,l,8,6,10)
e.C(c9,15)
e.C(d8,30)
e.C("dagger",5)
e.C("staff",5)
e.C(d7,10)
e.C("boots",5)
e=A.p("unlucky ranger",5,B.n,30,25,a4,0)
e.f=20
e.D(d9,2)
e.az(d3,c6,s,2,8,4)
B.a.j(e.dx,new A.b7(B.aG,10))
e.C(c9,20)
e.C("potion",20)
e.C("bow",10)
e.C("body",20)
e=A.p("drunken priest",5,B.D,34,a4,a4,0)
e.f=40
e.D(a9,8)
s=e.dx
B.a.j(s,new A.hf(8,15))
B.a.j(s,new A.b7(B.aG,5))
e.C(c9,35)
e.C("scroll",20)
e.C(e4,10)
e.C(d7,10)
B.a.T(e.x,A.a(b6.split(b8),b))
e=A.al("r","natural/animal/mammal/rodent",30,a4,a4,a4,a4)
e.at=4
e.ax=6
e.f=30
e.d=B.aX
e=A.p("[mouse|mice]",1,B.I,3,a4,0.7,0)
e.aR(6)
e.D(b7,3)
e.D(c7,2)
e=A.p("sewer rat",2,B.f,8,a4,a4,0)
e.f=20
e.aR(4)
e.D(b7,4)
e.D(c7,3)
e=A.p("sickly rat",3,B.n,10,a4,a4,0)
e.ak(b7,8,i)
e.D(c7,4)
e=A.p("plague rat",6,B.A,20,a4,a4,0)
e.aR(4)
e.ak(b7,15,i)
e.D(c7,8)
e=A.p("giant rat",8,B.N,40,a4,a4,0)
e.D(b7,12)
e.D(c7,8)
e=A.p("The Rat King",8,B.a1,120,a4,a4,0)
e.cS(B.aI)
e.D(b7,16)
e.D(c7,10)
e.ad(new A.af("rodent"),8,16)
e.hu(c9,3)
e.hw(a5,10,50)
e=A.al("s","natural/bug/slug",5,b6,a4,-3,2)
e.at=3
e.ax=1
e.f=30
A.p("giant slug",3,B.af,20,a4,a4,0).D(e1,8)
A.p("suppurating slug",6,B.A,50,a4,a4,0).ak(e1,12,i)
A.p("acidic slug",9,B.af,70,a4,a4,0).ak(e1,16,q)
e=A.al("v","natural/plant/vine",a4,e2,a4,a4,a4)
e.ax=e.at=10
A.p("choker",16,B.n,40,a4,a4,0).D(f1,12)
e=A.p("nightshade",19,B.P,50,a4,a4,0)
e.le(10,3)
e.ak("touch[es]",12,i)
e=A.p("creeper",22,B.A,60,a4,a4,0)
B.a.j(e.dx,new A.bS(!0,10))
e.le(10,3)
e.D(f1,8)
A.p("strangler",26,B.B,80,a4,a4,0).D(f1,14)
s=A.al("w",f2,15,b6,a4,a4,a4)
s.at=2
s.ax=3
s.f=40
s=A.p("blood worm",1,B.a1,4,a4,0.5,0)
s.aW(3,7)
s.D(e1,5)
s=A.p("fire worm",10,B.N,6,a4,a4,0)
s.aW(2,6)
s.d=B.aX
s.ak(e1,5,p)
A.al("w",f2,10,b6,a4,a4,a4).f=30
A.p("giant earthworm",3,B.a5,30,a4,a4,-2).D(e1,5)
A.p("giant cave worm",7,B.I,80,a4,a4,-2).ak(e1,12,q)
s=A.al("x","undead/skeleton",a4,a4,a4,a4,a4)
s.ax=s.at=4
s.f=30
s=A.p(f3,3,B.f,18,a4,3,-1)
s.f=40
s.D(e7,6)
s=A.p(f4,4,B.p,26,a4,4,0)
s.f=40
s.D(e7,8)
s=A.p(f5,7,B.I,33,a4,3,-2)
s.f=40
s.D(b7,10)
s=A.p(f6,10,B.E,44,a4,4,0)
s.ax=s.at=0
s.f=60
s.c=new A.ag(s.c.a|c)
s.D(e7,7)
s.C(c9,30)
s.C(f0,10)
s.C(d4,10)
s=A.p(f7,12,B.ag,50,a4,4,0)
s.D(b7,9)
s.D("kick[s]",7)
s.C(c9,30)
s.C(d4,10)
s=A.p(f8,13,B.A,60,a4,5,0)
s.c=new A.ag(s.c.a|c)
s.D(e7,7)
e=s.dx
B.a.j(e,new A.bz(A.aN(f7),A.aN(f4),f9,1))
B.a.j(e,new A.bz(A.aN(f7),A.aN(f3),g0,1))
s.C(c9,30)
s.C(f0,5)
s.C(d4,10)
s=A.p("skeleton",15,B.u,70,a4,6,0)
s.c=new A.ag(s.c.a|c)
s.D(e7,7)
s.D(b7,9)
e=s.dx
B.a.j(e,new A.bz(A.aN(f6),A.aN(f5),g1,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f4),f9,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f3),g0,1))
s.C(c9,40)
s.C(f0,10)
s.C(d4,10)
s=A.p("skeleton warrior",17,B.a5,90,a4,6,0)
s.c=new A.ag(s.c.a|c)
s.D(d9,13)
s.D(c8,10)
e=s.dx
B.a.j(e,new A.bz(A.aN(f6),A.aN(f5),g1,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f4),f9,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f3),g0,1))
s.C(c9,50)
s.C(f0,20)
s.C(d4,15)
s=A.p("robed skeleton",19,B.P,110,a4,4,0)
s.c=new A.ag(s.c.a|c)
s.D(d9,13)
s.D(c8,10)
s.bm(l,15,10,8)
e=s.dx
B.a.j(e,new A.bz(A.aN(f6),A.aN(f5),g1,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f4),f9,1))
B.a.j(e,new A.bz(A.aN(f8),A.aN(f3),g0,1))
s.C(c9,50)
s.C(d8,20)
s.C(d4,10)
s=A.al("B","natural/animal/bird",a4,a4,a4,a4,a4)
s.at=8
s.ax=6
B.a.j(s.w,new A.aF(10,"{1} flaps out of the way."))
s.c=new A.ag(s.c.a|d)
s.aW(3,6)
s=A.p("crow",4,B.l,10,a4,a4,2)
s.f=30
s.D(b7,5)
s.C(a7,30)
f=A.bn('"What harm can a stupid little crow do?" you think as it and its\n      murderous friends dive towards your eyes, claws extended.',g,b8)
$.ce.fy=f
s=A.p("raven",6,B.f,16,a4,a4,0)
s.f=15
s.D(b7,5)
s.D(e7,4)
s.C(a7,30)
B.a.T(s.x,A.a(d6.split(b8),b))
f=A.bn("Its black eyes gleam with a malevolent intelligence.",g,b8)
$.ce.fy=f
A.Cg()
s=A.al("F","humanoid/hob/fae",a4,e3,a4,2,a4)
s.at=10
s.ax=8
s.f=30
B.a.j(s.w,new A.aF(10,b9))
s.c=new A.ag(s.c.a|d)
s.d=B.aj
s=A.p("forest sprite",2,B.ag,6,a4,a4,0)
s.D(c7,3)
B.a.j(s.dx,new A.b7(B.aa,4))
s.az(c2,c3,l,4,6,12)
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("house sprite",5,B.J,10,a4,a4,0)
s.D(e6,5)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.az("stone",c6,r,4,8,10)
B.a.j(g,new A.bF(4,8))
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("mischievous sprite",7,B.a5,24,a4,a4,0)
s.D(e6,6)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.bm(m,8,8,10)
B.a.j(g,new A.bF(5,10))
s.C(c9,10)
s.C(d8,30)
s.C(a6,30)
s=A.p("Tink",8,B.n,40,a4,a4,0)
s.cS(B.cv)
s.f=10
s.D(e6,8)
g=s.dx
B.a.j(g,new A.b7(B.aa,4))
s.az(c2,c3,l,4,6,8)
s.bm(m,7,8,10)
B.a.j(g,new A.bF(5,10))
s.hu(c9,2)
s.eX(d8,3,3)
s=A.al("H","mythical/beast/hybrid",a4,a4,a4,a4,a4)
s.at=10
s.ax=12
s=A.p("harpy",25,B.P,50,a4,a4,2)
s.c=new A.ag(s.c.a|d)
s.aW(2,5)
s.D(b7,10)
s.D(c7,15)
d=s.dx
B.a.j(d,new A.bY(10,"screeches",10))
B.a.j(d,new A.b7(B.cq,5))
s.C(a7,50)
s=A.p("griffin",35,B.h,200,a4,a4,0)
s.D(b7,20)
s.D(c7,15)
s.C(a7,50)
A.al("Q","magical",a4,a4,a4,a4,a4)
s=A.p("Nameless Unmaker",100,B.O,b1,a4,a4,2)
s.cS(B.y)
s.ax=s.at=16
s.ak("crushe[s]",250,r)
s.ak("blast[s]",200,l)
s.c4(k,500,a4,10)
B.a.T(s.x,A.a(b6.split(b8),b))
s.c=new A.ag(s.c.a|c)
a0=A.vH(20,new A.aK(100,A.a8(a5,s.CW,B.hJ)))
B.a.j(s.dy,a0)
A.al("R","natural/animal/herp",a4,a4,a4,a4,a4)
s=A.p("frog",1,B.A,4,30,a4,0)
s.at=6
s.ax=4
s.f=30
s.c=new A.ag(s.c.a|$.iX().a)
s.D("hop[s] on",2)
s=A.al("R","natural/animal/herp/salamander",30,a4,a4,a4,a4)
s.at=6
s.ax=5
s.f=20
s.d=B.aj
s.as=3
s=A.p("juvenile salamander",7,B.a5,20,a4,a4,0)
s.ak(b7,14,p)
s.c4(p,20,4,16)
s=A.p(e9,13,B.m,30,a4,a4,0)
s.ak(b7,18,p)
s.c4(p,30,5,16)
s=A.p("three-headed salamander",23,B.a1,90,a4,a4,0)
s.ak(b7,24,p)
s.c4(p,20,5,10)
s=A.al("S","natural/animal/herp/snake",30,a4,a4,a4,a4)
s.at=4
s.ax=7
s.f=30
A.p("water snake",1,B.A,11,a4,a4,0).D(b7,3)
A.p("brown snake",3,B.k,25,a4,a4,0).D(b7,4)
A.p("cave snake",8,B.p,40,a4,a4,0).D(b7,10)
A.fG()
A.zs($.cj().gpc())
A.b1()
$.bh="body"
s=A.I(g2,1)
s.v(40)
s.Z(2,4,3)
s.J(400,2)
s.bI(-2)
g=t.Q
g.a(A.a1())
s.as=A.a1()
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.Z(4,4,6)
s.J(600,3)
s.bI(-3)
s.as=A.a1()
e=t.S
s.ch.h(0,B.ae,g.a(A.fH(1,e)))
s.R(m)
s.R(n)
A.b1()
$.bh="cloak"
s=A.I(g2,1)
s.E(40,80)
s.Z(4,4,6)
s.J(300,2)
s.bI(-1)
s.as=A.a1()
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.Z(5,4,8)
s.J(500,3)
s.bI(-2)
s.as=A.a1()
s.ch.h(0,B.ae,g.a(A.fH(2,e)))
s.R(m)
s.R(n)
A.b1()
$.bh="boots"
s=A.I(g2,1)
s.v(50)
s.Z(2,4,5)
s.J(400,2.5)
s.bI(-2)
s.as=A.a1()
A.b1()
$.bh="helm"
s=A.I(g2,1)
s.E(40,80)
s.Z(1,4,3)
s.J(400,2)
s.bI(-1)
s.as=A.a1()
s.ch.h(0,B.a3,g.a(A.fH(1,e)))
s.R(n)
s=A.I(g3,0.3)
s.v(60)
s.b6(2,4)
s.J(600,3)
s.bI(-1)
s.as=A.a1()
s.ch.h(0,B.a3,A.a1())
s.R(m)
s.R(n)
A.b1()
$.bh="shield"
s=A.I(g2,1)
s.E(40,80)
s.Z(3,4,5)
s.J(300,1.6)
s.bC(0.8)
s.aE(A.b2())
s.R(n)
s=A.I(g3,0.5)
s.v(50)
s.b6(1,4)
s.J(500,2.2)
s.bC(0.6)
d=t.i
s.aE(A.fH(1.5,d))
s.ch.h(0,B.a3,A.a1())
s.R(m)
s.R(n)
A.b1()
$.bh="body"
s=A.I(g4,1)
s.v(30)
s.Z(4,3,6)
s.J(400,2)
s.bI(2)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="helm"
s=A.I(g4,1)
s.v(50)
s.Z(3,4,5)
s.J(300,2)
s.bI(1)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="gloves"
s=A.I(g4,1)
s.v(50)
s.J(300,2)
s.Z(2,4,4)
s.bI(1)
s.as=A.a1()
s.ch.h(0,B.ak,g.a(A.fH(1,e)))
s.R(r)
s.R(k)
A.b1()
$.bh="boots"
s=A.I(g4,1)
s.v(50)
s.Z(3,4,5)
s.J(300,2)
s.bI(1)
s.as=A.a1()
s.R(r)
s.R(k)
A.b1()
$.bh="shield"
s=A.I(g4,1)
s.v(40)
s.Z(4,3,8)
s.J(200,2.2)
s.bC(1.2)
s.dQ(A.a1(),A.b2())
s.R(r)
s.R(k)
A.b1()
$.bh="armor"
s=A.I("_ of Resist Air",0.5)
s.E(10,50)
s.J(200,1.2)
s.R(m)
s=A.I("_ of Resist Earth",0.5)
s.E(11,51)
s.J(230,1.2)
s.R(r)
s=A.I("_ of Resist Fire",0.5)
s.E(12,52)
s.J(260,1.3)
s.R(p)
s=A.I("_ of Resist Water",0.5)
s.E(13,53)
s.J(310,1.2)
s.R(j)
s=A.I("_ of Resist Acid",0.3)
s.E(14,54)
s.J(340,1.3)
s.R(q)
s=A.I("_ of Resist Cold",0.5)
s.E(15,55)
s.J(400,1.2)
s.R(o)
s=A.I("_ of Resist Lightning",0.3)
s.E(16,56)
s.J(430,1.2)
s.R(l)
s=A.I("_ of Resist Poison",0.25)
s.E(17,57)
s.J(460,1.5)
s.R(i)
s=A.I("_ of Resist Dark",0.25)
s.E(18,58)
s.J(490,1.3)
s.R(k)
s=A.I("_ of Resist Light",0.25)
s.E(19,59)
s.J(490,1.3)
s.R(n)
s=A.I("_ of Resist Spirit",0.4)
s.E(10,60)
s.J(520,1.4)
s.R(h)
s=A.I("_ of Resist Nature",0.3)
s.v(40)
s.J(3000,4)
s.R(m)
s.R(r)
s.R(p)
s.R(j)
s.R(o)
s.R(l)
s=A.I("_ of Resist Destruction",0.3)
s.v(40)
s.J(1300,2.6)
s.R(q)
s.R(p)
s.R(l)
s.R(i)
s=A.I("_ of Resist Evil",0.3)
s.v(60)
s.J(1500,3)
s.R(q)
s.R(i)
s.R(k)
s.R(h)
s=A.I("_ of Resistance",0.3)
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
s=A.I("_ of Protection from Air",0.25)
s.v(36)
s.b6(2,5)
s.J(500,1.4)
s.bv(m,A.a1())
m=A.I("_ of Protection from Earth",0.25)
m.v(37)
m.b6(2,5)
m.J(500,1.4)
m.bv(r,A.a1())
r=A.I("_ of Protection from Fire",0.25)
r.v(38)
r.b6(2,5)
r.J(500,1.5)
r.bv(p,A.a1())
r=A.I("_ of Protection from Water",0.25)
r.v(39)
r.b6(2,5)
r.J(500,1.4)
r.bv(j,A.a1())
j=A.I("_ of Protection from Acid",0.2)
j.v(40)
j.b6(2,5)
j.J(500,1.5)
j.bv(q,A.a1())
q=A.I("_ of Protection from Cold",0.25)
q.v(41)
q.b6(2,5)
q.J(500,1.4)
q.bv(o,A.a1())
q=A.I("_ of Protection from Lightning",0.16)
q.v(42)
q.b6(2,5)
q.J(500,1.4)
q.bv(l,A.a1())
q=A.I("_ of Protection from Poison",0.14)
q.v(43)
q.b6(2,5)
q.J(b1,1.6)
q.bv(i,A.a1())
q=A.I("_ of Protection from Dark",0.14)
q.v(44)
q.b6(2,5)
q.J(500,1.5)
q.bv(k,A.a1())
q=A.I("_ of Protection from Light",0.14)
q.v(45)
q.b6(2,5)
q.J(500,1.5)
q.bv(n,A.a1())
q=A.I("_ of Protection from Spirit",0.13)
q.v(46)
q.b6(2,5)
q.J(800,1.6)
q.bv(h,A.a1())
A.b1()
$.bh="weapon"
q=A.I("_ of Harming",1)
q.E(1,30)
q.Z(1,3,2)
q.J(100,1.2)
q.bC(1.05)
q.dP(A.a1())
q=A.I("_ of Wounding",1)
q.E(10,50)
q.Z(3,3,5)
q.J(140,1.3)
q.bC(1.07)
q.dP(A.a1())
q=A.I("_ of Maiming",1)
q.E(25,75)
q.Z(2,3,4)
q.J(180,1.5)
q.bC(1.09)
q.dQ(A.a1(),A.b2())
q=A.I("_ of Slaying",1)
q.v(45)
q.Z(4,2,8)
q.J(200,2)
q.bC(1.11)
q.dQ(A.a1(),A.b2())
A.b1()
$.bh="bow"
q=A.I("Ash _",1)
q.E(10,70)
q.Z(2,4,4)
q.J(300,1.3)
q.bC(0.8)
q.dP(A.a1())
q=A.I("Yew _",1)
q.v(20)
q.Z(5,3,8)
q.J(500,1.4)
q.bC(0.8)
q.dP(A.a1())
A.b1()
$.bh="weapon"
q=A.I("Glimmering _",0.3)
q.E(20,60)
q.Z(2,3,3)
q.J(300,1.3)
q.aE(A.b2())
q.bB(n)
q=A.I("Shining _",0.25)
q.E(32,90)
q.Z(4,3,5)
q.J(400,1.6)
q.aE(A.b2())
q.bB(n)
q=A.I("Radiant _",0.2)
q.v(48)
q.Z(6,3,8)
q.J(500,2)
q.aE(A.b2())
q.cj(n,2)
n=A.I("Dim _",0.3)
n.E(16,60)
n.Z(2,3,3)
n.J(300,1.3)
n.aE(A.b2())
n.bB(k)
n=A.I("Dark _",0.25)
n.E(32,80)
n.Z(4,3,5)
n.J(400,1.6)
n.aE(A.b2())
n.bB(k)
n=A.I("Black _",0.2)
n.v(56)
n.Z(6,3,8)
n.J(500,2)
n.aE(A.b2())
n.cj(k,2)
k=A.I("Chilling _",0.3)
k.E(20,65)
k.Z(4,3,6)
k.J(300,1.5)
k.aE(A.b2())
k.bB(o)
k=A.I("Freezing _",0.25)
k.v(40)
k.Z(6,3,9)
k.J(400,1.7)
k.aE(A.b2())
k.cj(o,2)
o=A.I("Burning _",0.3)
o.E(20,60)
o.Z(3,3,5)
o.J(300,1.5)
o.aE(A.b2())
o.bB(p)
o=A.I("Flaming _",0.25)
o.E(40,90)
o.Z(6,3,7)
o.J(360,1.8)
o.aE(A.b2())
o.bB(p)
o=A.I("Searing _",0.2)
o.v(60)
o.Z(8,3,11)
o.J(500,2.1)
o.aE(A.b2())
o.cj(p,2)
p=A.I("Electric _",0.2)
p.v(50)
p.Z(4,3,7)
p.J(300,1.5)
p.aE(A.b2())
p.bB(l)
p=A.I("Shocking _",0.2)
p.v(70)
p.Z(8,3,11)
p.J(400,2)
p.aE(A.b2())
p.cj(l,2)
l=A.I("Poisonous _",0.2)
l.E(35,90)
l.Z(1,4,2)
l.J(500,1.5)
l.aE(A.b2())
l.bB(i)
l=A.I("Venomous _",0.2)
l.v(70)
l.Z(3,4,5)
l.J(800,1.8)
l.aE(A.b2())
l.cj(i,2)
i=A.I("Ghostly _",0.2)
i.E(45,85)
i.Z(4,3,6)
i.J(300,1.6)
i.bC(0.7)
i.aE(A.b2())
i.bB(h)
i=A.I("Spiritual _",0.15)
i.v(80)
i.Z(7,3,10)
i.J(400,2.1)
i.bC(0.7)
i.aE(A.b2())
i.cj(h,2)
A.zm()
A.b1()
$.bh="helm"
h=A.I("_ of Acumen",1)
h.E(35,55)
h.b6(1,4)
h.J(300,2)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Wisdom",1)
h.E(45,75)
h.Z(2,4,3)
h.J(500,3)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Sagacity",1)
h.v(75)
h.Z(4,4,5)
h.J(700,4)
h.ch.h(0,B.a3,A.a1())
h=A.I("_ of Genius",1)
h.v(85)
h.Z(6,4,7)
h.J(b1,5)
h.ch.h(0,B.a3,A.a1())
A.b1()
h=t.N
A.iW("The General's General Store",A.B(["Loaf of Bread",2,"Chunk of Meat",0.6,"Tallow Candle",1,"Wax Candle",0.7,"Oil Lamp",0.5,"Torch",0.3,"Lantern",0.1,"Soothing Balm",0.6,"Mending Salve",0.4,b0,0.2,"Club",0.1,"Staff",0.1,"Quarterstaff",0.05,"Whip",0.1,"Dagger",0.1],h,d))
A.iW("Dirk's Death Emporium",A.B(["Hammer",0.5,"Mattock",0.2,"War Hammer",0.1,"Morningstar",0.6,"Mace",0.3,"Chain Whip",0.2,"Flail",0.1,"Falchion",0.7,"Rapier",1,"Shortsword",0.6,"Scimitar",0.4,"Cutlass",0.2,"Spear",1,"Angon",0.4,"Lance",0.2,"Partisan",0.1,"Hatchet",1,"Axe",0.5,"Valaska",0.25,"Battleaxe",0.2,"Short Bow",1,"Longbow",0.3,"Crossbow",0.05],h,d))
A.iW("Skullduggery and Bamboozelry",A.B(["Dirk",1,"Dagger",0.3,"Stiletto",0.1,"Rondel",0.05,"Baselard",0.02],h,d))
A.iW("Garthag's Armoury",A.B(["Cloak",1,"Fur Cloak",1,"Cloth Shirt",1,"Leather Shirt",1,"Jerkin",1,"Leather Armor",1,"Padded Armor",1,"Studded Armor",1,"Mail Hauberk",1,"Scale Mail",1,"Robe",1,"Lined Robe",1,"Sandals",1,"Shoes",1,"Boots",1,"Plated Boots",1,"Greaves",1],h,d))
A.iW("Unguence the Alchemist",A.B(["Soothing Balm",1,"Mending Salve",1,b0,1,"Antidote",1,"Potion of Quickness",1,"Potion of Alacrity",1,"Bottled Wind",1,"Bottled Ice",1,"Bottled Fire",1,"Bottled Ocean",1,"Bottled Earth",1],h,d))
A.iW("The Droll Magery",A.B(["Scroll of Sidestepping",1,"Scroll of Phasing",1,"Scroll of Item Detection",1],h,d))
A.yg()
A.yk()
A.yv()
A.iU(new A.ie(A.a([new A.aK(30,A.a8("Skull",a4,a4)),new A.aK(30,A.a8(c9,a4,a4)),new A.aK(20,A.a8(f0,a4,a4)),new A.aK(20,A.a8(d4,a4,a4)),new A.aK(20,A.a8("food",a4,a4)),new A.aK(15,A.a8(d8,a4,a4))],t.f8)),a4,B.aX,2)
A.iU(A.a8("food",a4,a4),1,a4,10)
A.iU(A.a8("Rock",a4,a4),0.1,B.bA,5)
A.iU(A.a8(c9,a4,a4),a4,a4,20)
A.iU(A.a8("light",a4,a4),0.1,a4,3)
A.iU(A.a8(a5,a4,a4),5,B.kd,2)
A.vA(B.bz,6)
A.vA(B.jM,1)
A.vA(B.jN,3)
A.C1("bat bug humanoid natural",2,1)
A.C2("animal bat bug natural",1,0.2)
A.Cq(g5,100,1)
A.Cy(g5,100,1)
A.en("bug",40,1)
A.en("jelly",50,5)
A.en("bat",40,10)
A.en("rodent",50,1)
A.en("snake",60,8)
A.en("plant",40,15)
A.en("eye",100,20)
A.en("dragon",100,60)
A.ud(e5,16,2)
A.ud(d2,23,5)
A.ud(e8,30,10)
A.ud("orc",40,28)
i=$.uE()
i.c5(g6)
i.c5(g7)
i.c5("cave/glowing-moss")
i.c5(b2)
i=$.no()
l=$.b3()
p=t.oC
i=A.B(["*",A.T(i,l,a4,a4)],h,p)
$.cC.b="glowing-moss"
$.cD=null
$.cf=i
A.v(a4,B.q,"    #\n    *")
A.v(a4,B.q,"    ##\n    #*")
A.v(a4,a4,"    ?.?\n    .*.\n    ?.?")
i=$.iY()
o=A.B(["!",A.T(i,l,a4,a4)],h,p)
$.cC.b=g7
$.cD=null
$.cf=o
A.v(a4,a4,"    ?.?\n    .!.\n    ?.?")
a1=A.B(["\u250c",A.T($.je(),l,a4,a4),"\u2500",A.T($.jd(),l,a4,a4),"\u2510",A.T($.jf(),l,a4,a4),"-",A.T($.fQ(),l,a4,a4),"\u2502",A.T($.jc(),l,a4,a4),"\u2558",A.T($.j7(),l,a4,a4),"\u2550",A.T($.j6(),l,a4,a4),"\u255b",A.T($.j8(),l,a4,a4),"\u255e",A.T($.ja(),l,a4,a4),"\u2564",A.T($.j9(),l,a4,a4),"\u2561",A.T($.jb(),l,a4,a4),"i",A.T(i,l,a4,a4)],h,p)
$.cC.b=g6
$.cD=null
$.cf=a1
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #-\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #-\u2502.\n    #i\u2502.\n    #-\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,B.ac,"    ?...\n    #\u2500\u2510.\n    #i\u2502.\n    #-\u2502.\n    #i\u2502.\n    #\u2564\u255b.\n    ?...")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    ?###?")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    ?###?")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    ?####?")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    ?####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    ?#####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    ?#####?")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    ?#####?")
A.v(a4,a4,"    ?###?\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ?###?\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ?####?\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ?####?\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ?#####?\n    .\u2502---\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a4,a4,"    ?#####?\n    .\u2502-i-\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
A.v(a4,a4,"    ?#####?\n    .\u2502i-i\u2502.\n    .\u255e\u2550\u2550\u2550\u2561.\n    .......")
$.cC.b=g6
$.cD=null
$.cf=a1
A.v(a4,a4,"    ?.....?\n    #\u2500\u2510.\u250c\u2500#\n    #\u2564\u255b.\u2558\u2564#\n    ?.....?")
A.v(a4,a4,"    ?.......?\n    #\u2500\u2500\u2510.\u250c\u2500\u2500#\n    #\u2550\u2564\u255b.\u2558\u2564\u2550#\n    ?.......?")
A.v(a4,a4,"    ?.........?\n    #\u2500\u2500\u2500\u2510.\u250c\u2500\u2500\u2500#\n    #\u2550\u2550\u2564\u255b.\u2558\u2564\u2550\u2550#\n    ?.........?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    ?##?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
A.v(a4,a4,"    ?##?\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u255e\u2561.\n    ....\n    .\u250c\u2510.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    .\u2502\u2502.\n    ?##?")
$.cC.b=g6
$.cD=null
$.cf=a1
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502ii\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i--i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502-\u2502.\n    .\u2502-\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    .....\n    .\u250c\u2500\u2510.\n    .\u2502i\u2502.\n    .\u2502i\u2502.\n    .\u255e\u2550\u2561.\n    .....")
A.v(a4,a4,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502--\u2502.\n    .\u2502--\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,B.ac,"    ......\n    .\u250c\u2500\u2500\u2510.\n    .\u2502i-\u2502.\n    .\u2502-i\u2502.\n    .\u255e\u2550\u2550\u2561.\n    ......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502---\u2502.\n    .\u2502---\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502-i-\u2502.\n    .\u2502i-i\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    .......\n    .\u250c\u2500\u2500\u2500\u2510.\n    .\u2502i-i\u2502.\n    .\u2502-i-\u2502.\n    .\u2558\u2564\u2550\u2564\u255b.\n    .......")
A.v(a4,a4,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502----\u2502.\n    .\u2502----\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,B.ac,"    ........\n    .\u250c\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---\u2502.\n    .\u2502---i\u2502.\n    .\u2558\u2564\u2550\u2550\u2564\u255b.\n    ........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-----\u2502.\n    .\u2502-----\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502--i--\u2502.\n    .\u2502-i-i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    .........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502i---i\u2502.\n    .\u2502--i--\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2564\u255b.\n    .........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502------\u2502.\n    .\u2502------\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
A.v(a4,a4,"    ..........\n    .\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510.\n    .\u2502-i--i-\u2502.\n    .\u2502-i--i-\u2502.\n    .\u2558\u2564\u2550\u2550\u2550\u2550\u2564\u255b.\n    ..........")
i=A.B(["\u03c0",A.T($.iZ(),l,a4,a4)],h,p)
$.cC.b=g6
$.cD=2
$.cf=i
A.v(a4,B.av,"    \u03c0.\n    .\u250c")
A.v(a4,B.av,"    \u03c0.\n    \u250c?")
A.v(a4,B.av,"    ..\n    \u03c0\u250c")
A.v(a4,B.ac,"    .\u255e\n    \u03c0.")
A.v(a4,B.q,"    ?\u2550?\n    .\u03c0.")
A.v(a4,a4,"    ?\u2564?\n    .\u03c0.")
A.v(a4,B.q,"    \u03c0\n    #")
A.v(a4,B.q,"    \u03c0\n    .\n    #")
i=A.B(["%",A.T($.j_(),l,a4,a4)],h,p)
$.cC.b=g6
$.cD=0.7
$.cf=i
A.v(a4,B.q,"    ##?\n    #%.\n    ?.?")
A.v(a4,B.q,"    ?.?\n    .%.\n    ?.?")
A.v(a4,B.q,"    ###?\n    #%%.\n    ?..?")
A.v(a4,B.q,"    ###?\n    #%%.\n    #%.?\n    ?.??")
A.v(a4,B.q,"    ?##?\n    .%%.\n    ?..?")
A.v(a4,B.q,"    ?###?\n    .%%%.\n    ?...?")
l=A.B(["&",A.T($.j0(),l,a4,a4)],h,p)
$.cC.b=g6
$.cD=0.5
$.cf=l
A.v(a4,B.q,"    ##?\n    #&.\n    ?.?")
A.v(a4,B.q,"    ?#?\n    .&.\n    ?.?")
$.cC.b=g6
$.cD=1
$.cf=null
A.v(a4,B.q,"    #...#\n    #\u2248\u2261\u2248#\n    #...#")
A.v(a4,B.q,"    #....#\n    #\u2248\u2248\u2261\u2248#\n    #....#")
A.v(a4,B.q,"    #.....#\n    #\u2248\u2248\u2261\u2248\u2248#\n    #.....#")
A.v(a4,B.q,"    #.....#\n    #\u2248\u2261\u2248\u2261\u2248#\n    #.....#")
A.v(a4,B.q,"    #......#\n    #......#\n    #\u2248\u2248\u2261\u2248\u2248\u2248#\n    #......#\n    #......#")
A.v(a4,B.q,"    #......#\n    #......#\n    #\u2248\u2261\u2248\u2248\u2261\u2248#\n    #......#\n    #......#")
A.v(a4,B.q,"    #.......#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #.......#\n    #.......#\n    #\u2248\u2248\u2261\u2248\u2261\u2248\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #.......#\n    #.......#\n    #\u2248\u2261\u2248\u2248\u2248\u2261\u2248#\n    #.......#\n    #.......#")
A.v(a4,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #........#\n    #........#")
A.v(a4,B.q,"    #........#\n    #........#\n    #\u2248\u2248\u2261\u2248\u2248\u2261\u2248\u2248#\n    #........#\n    #........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #\u2248\u2248\u2248\u2248\u2261\u2248\u2248\u2248\u2248#\n    #.........#\n    #.........#")
A.v(a4,B.q,"    #.........#\n    #.........#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #\u2248\u2248\u2261\u2248\u2248\u2248\u2261\u2248\u2248#\n    #.........#\n    #.........#")
l=$.uO()
p=A.B(["*",A.T(l,a4,$.fS(),a4),"o",A.T(a4,a4,l,a4)],h,p)
$.cC.b=b2
$.cD=null
$.cf=p
A.v(0.6,B.q,"    .*")
A.v(0.6,B.q,"    ..\n    .*")
A.v(a4,B.q,"    o*")
A.v(a4,B.q,"    \u2248*\n    o\u2248")
a2=new A.kf()
A.da("6x8",6,8)
A.da("6x9",6,9)
A.da("8x8",8,a4)
A.da("8x10",8,10)
A.da("9x12",9,12)
A.da("10x12",10,12)
A.da("12x16",12,16)
A.da("12x18",12,18)
A.da("16x16",16,a4)
A.da("16x20",16,20)
s=v.G
a3="rvipMapFont" in s?A.r(A.dr(s,"rvipMapFont",a4,a4,d)):4
r=B.c.M(a3,0,$.dG.length-1)
if(!(r>=0&&r<$.dG.length))return A.b($.dG,r)
$.bU.b=$.dG[r]
r=A.bV(A.a2(s.document).querySelector("#map"))
r.toString
r.append($.bU.u().b)
s.rvipFont=A.tQ(new A.ug())
s.rvipResize=A.vr(new A.uh())
r=$.bU.u().c
q=A.a([],t.jp)
if($.x.b!==$.x)A.a_(A.x5(""))
$.x.b=new A.lw(new A.kE(A.D(t.fC,t.fb),t.hl),q,r)
s.rvipRedraw=A.vr(new A.ui())
r=$.x.u().a
r.a.h(0,new A.A(13,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(27,!1,!1),r.$ti.c.a(B.H))
r=$.x.u().a
r.a.h(0,new A.A(66,!1,!1),r.$ti.c.a(B.bh))
A.a2(s.document).addEventListener("keydown",A.tQ(new A.uj()),!0)
r=$.x.u().a
r.a.h(0,new A.A(192,!1,!1),r.$ti.c.a(B.H))
r=$.x.u().a
r.a.h(0,new A.A(70,!0,!1),r.$ti.c.a(B.bf))
r=$.x.u().a
r.a.h(0,new A.A(81,!1,!1),r.$ti.c.a(B.bk))
r=$.x.u().a
r.a.h(0,new A.A(67,!1,!1),r.$ti.c.a(B.bi))
r=$.x.u().a
r.a.h(0,new A.A(68,!1,!1),r.$ti.c.a(B.b7))
r=$.x.u().a
r.a.h(0,new A.A(85,!1,!1),r.$ti.c.a(B.bs))
r=$.x.u().a
r.a.h(0,new A.A(71,!1,!1),r.$ti.c.a(B.bj))
r=$.x.u().a
r.a.h(0,new A.A(88,!1,!1),r.$ti.c.a(B.bq))
r=$.x.u().a
r.a.h(0,new A.A(69,!1,!1),r.$ti.c.a(B.b9))
r=$.x.u().a
r.a.h(0,new A.A(84,!1,!1),r.$ti.c.a(B.br))
r=$.x.u().a
r.a.h(0,new A.A(65,!1,!1),r.$ti.c.a(B.bt))
r=$.x.u().a
r.a.h(0,new A.A(83,!1,!1),r.$ti.c.a(B.hG))
r=$.x.u().a
r.a.h(0,new A.A(65,!0,!1),r.$ti.c.a(B.bg))
r=$.x.u().a
r.a.h(0,new A.A(83,!0,!1),r.$ti.c.a(B.b8))
r=$.x.u().a
r.a.h(0,new A.A(69,!0,!1),r.$ti.c.a(B.bp))
r=$.x.u().a
r.a.h(0,new A.A(72,!1,!1),r.$ti.c.a(B.aO))
r=$.x.u().a
r.a.h(0,new A.A(72,!0,!1),r.$ti.c.a(B.ba))
r=$.x.u().a
r.a.h(0,new A.A(73,!1,!1),r.$ti.c.a(B.aB))
r=$.x.u().a
r.a.h(0,new A.A(79,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(80,!1,!1),r.$ti.c.a(B.aA))
r=$.x.u().a
r.a.h(0,new A.A(75,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(186,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(188,!1,!1),r.$ti.c.a(B.aE))
r=$.x.u().a
r.a.h(0,new A.A(190,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(191,!1,!1),r.$ti.c.a(B.aD))
r=$.x.u().a
r.a.h(0,new A.A(73,!0,!1),r.$ti.c.a(B.bm))
r=$.x.u().a
r.a.h(0,new A.A(79,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(80,!0,!1),r.$ti.c.a(B.bl))
r=$.x.u().a
r.a.h(0,new A.A(75,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(186,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(188,!0,!1),r.$ti.c.a(B.bo))
r=$.x.u().a
r.a.h(0,new A.A(190,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(191,!0,!1),r.$ti.c.a(B.bn))
r=$.x.u().a
r.a.h(0,new A.A(73,!1,!0),r.$ti.c.a(B.c6))
r=$.x.u().a
r.a.h(0,new A.A(79,!1,!0),r.$ti.c.a(B.bc))
r=$.x.u().a
r.a.h(0,new A.A(80,!1,!0),r.$ti.c.a(B.c5))
r=$.x.u().a
r.a.h(0,new A.A(75,!1,!0),r.$ti.c.a(B.be))
r=$.x.u().a
r.a.h(0,new A.A(186,!1,!0),r.$ti.c.a(B.bb))
r=$.x.u().a
r.a.h(0,new A.A(188,!1,!0),r.$ti.c.a(B.c8))
r=$.x.u().a
r.a.h(0,new A.A(190,!1,!0),r.$ti.c.a(B.bd))
r=$.x.u().a
r.a.h(0,new A.A(191,!1,!0),r.$ti.c.a(B.c7))
r=$.x.u().a
r.a.h(0,new A.A(76,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(76,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(76,!1,!0),r.$ti.c.a(B.aN))
r=$.x.u().a
r.a.h(0,new A.A(38,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(37,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(39,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(40,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(38,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(37,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(39,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(40,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(38,!1,!0),r.$ti.c.a(B.bc))
r=$.x.u().a
r.a.h(0,new A.A(37,!1,!0),r.$ti.c.a(B.be))
r=$.x.u().a
r.a.h(0,new A.A(39,!1,!0),r.$ti.c.a(B.bb))
r=$.x.u().a
r.a.h(0,new A.A(40,!1,!0),r.$ti.c.a(B.bd))
r=$.x.u().a
r.a.h(0,new A.A(103,!1,!1),r.$ti.c.a(B.aB))
r=$.x.u().a
r.a.h(0,new A.A(104,!1,!1),r.$ti.c.a(B.X))
r=$.x.u().a
r.a.h(0,new A.A(105,!1,!1),r.$ti.c.a(B.aA))
r=$.x.u().a
r.a.h(0,new A.A(100,!1,!1),r.$ti.c.a(B.a9))
r=$.x.u().a
r.a.h(0,new A.A(102,!1,!1),r.$ti.c.a(B.ad))
r=$.x.u().a
r.a.h(0,new A.A(97,!1,!1),r.$ti.c.a(B.aE))
r=$.x.u().a
r.a.h(0,new A.A(98,!1,!1),r.$ti.c.a(B.Y))
r=$.x.u().a
r.a.h(0,new A.A(99,!1,!1),r.$ti.c.a(B.aD))
r=$.x.u().a
r.a.h(0,new A.A(103,!0,!1),r.$ti.c.a(B.bm))
r=$.x.u().a
r.a.h(0,new A.A(104,!0,!1),r.$ti.c.a(B.ap))
r=$.x.u().a
r.a.h(0,new A.A(105,!0,!1),r.$ti.c.a(B.bl))
r=$.x.u().a
r.a.h(0,new A.A(100,!0,!1),r.$ti.c.a(B.aQ))
r=$.x.u().a
r.a.h(0,new A.A(102,!0,!1),r.$ti.c.a(B.aP))
r=$.x.u().a
r.a.h(0,new A.A(97,!0,!1),r.$ti.c.a(B.bo))
r=$.x.u().a
r.a.h(0,new A.A(98,!0,!1),r.$ti.c.a(B.aq))
r=$.x.u().a
r.a.h(0,new A.A(99,!0,!1),r.$ti.c.a(B.bn))
r=$.x.u().a
r.a.h(0,new A.A(101,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(1001,!1,!1),r.$ti.c.a(B.a2))
r=$.x.u().a
r.a.h(0,new A.A(101,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(1001,!0,!1),r.$ti.c.a(B.aC))
r=$.x.u().a
r.a.h(0,new A.A(101,!1,!0),r.$ti.c.a(B.aN))
r=$.x.u().a
r.a.h(0,new A.A(87,!0,!0),r.$ti.c.a(B.c9))
r=$.x.u()
q=new A.rv(a2,A.a([],t.di))
q.nd()
r.a1(new A.kL(a2,q))
$.x.u().sph(!0)
$.x.u().spK(!0)
s=A.bV(A.a2(s.document).body)
s.toString
q=t.gX
A.fs(s,"keydown",q.i("~(1)?").a(new A.uk()),!1,q.c)},
da(a,b,c){var s,r,q,p
if(c==null)c=b
s=A.wS()
r=t.gX
q=r.i("~(1)?")
r=r.c
A.fs(s,"dblclick",q.a(new A.tN()),!1,r)
p=A.xY(s,b,c)
B.a.j($.dG,new A.lM(s,p,b,c))
A.fs(s,"click",q.a(new A.tO(p)),!1,r)},
xY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=v.G,h=A.bV(A.a2(i.document).querySelector("#map"))
h.toString
s=$.vs&&A.vI()
r=B.c.cd(A.r(h.clientWidth),b)
q=s?40:80
p=Math.max(r,q)
h=B.c.cd(A.r(h.clientHeight),c)
r=s?16:34
o=Math.max(h,r)
n=B.e.N(A.bw(A.a2(i.window).devicePixelRatio))
m=b*p
l=c*o
a.width=m*n
a.height=l*n
A.a2(a.style).width=""+m+"px"
A.a2(a.style).height=""+l+"px"
k="font_"+b
if(b!==c)k+="_"+c
n=B.e.N(A.bw(A.a2(i.window).devicePixelRatio))
h=p*o
r=A.am(h,B.aM,!1,t.v)
h=A.am(h,B.aM,!1,t.n3)
j=A.a2(A.a2(i.document).createElement("img"))
j.src=k+".png"
return A.Al(new A.oa(new A.aa(r,new A.a0(new A.e(0,0),new A.e(p,o)),t.bG),new A.aa(h,new A.a0(new A.e(0,0),new A.e(p,o)),t.cY)),b,c,a,j,n)},
vv(){var s=A.xY($.bU.u().b,$.bU.u().d,$.bU.u().e)
$.bU.u().c=s
$.x.u().lr(s)},
Bb(){var s,r,q,p=null,o=A.bV(A.a2(v.G.document).querySelector("#map"))
o.toString
s=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"]
for(r=0;r<4;++r){q=s[r]
if(q in o){A.pI(o,q,p,p,p,p)
return}}},
y2(){A.r(A.a2(v.G.window).requestAnimationFrame(A.vr(new A.tU())))},
nh(){var s=B.a.cG($.aX,new A.tR())
v.G.rvipInGame=s
if(s===$.vs)return
$.vs=s
A.vv()},
lM:function lM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ug:function ug(){},
uh:function uh(){},
ui:function ui(){},
uj:function uj(){},
uk:function uk(){},
tN:function tN(){},
tO:function tO(a){this.a=a},
tU:function tU(){},
tV:function tV(){},
lw:function lw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!0
_.f=_.e=null
_.r=$
_.w=!1
_.y=null},
tR:function tR(){},
BY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
switch(b.a){case B.bL:s=b.d
r=b.b
if(s===$.aD()){s=$.wq().m(0,b.c)
s.toString
B.a.j(a,new A.cN(r,A.ar(s,B.I,f),2))}else{s=$.wr().m(0,s)
s.toString
B.a.j(a,new A.h8(r,s))}break
case B.bM:s=$.wr().m(0,b.d)
s.toString
B.a.j(a,new A.h8(b.b,s))
break
case B.c0:B.a.j(a,new A.kw(b.b,b.f.a.b))
break
case B.bR:B.a.j(a,new A.jN(b.e.y,A.ar("*",A.ej(b.d),f),B.e.aV(Math.sqrt(b.r/5))))
break
case B.bO:for(s=b.e,q=0;q<10;++q){r=s.y.gn()
p=s.y.gp()
o=$.n()
o=o.a
n=o.a3(628)/100
m=(o.a3(10)+30)/100
l=Math.cos(n)
k=Math.sin(n)
B.a.j(a,new A.l7(r,p,l*m,k*m,o.a3(8)+7,B.m))}break
case B.bQ:s=b.e
B.a.j(a,new A.kl(s.y.gn(),s.y.gp()))
break
case B.bN:B.a.j(a,new A.h4(b.b))
break
case B.bW:B.a.j(a,new A.h4(b.e.y))
break
case B.bU:s=$.n().bs(10,20)
r=new A.kM(s,b.b)
r.c=s
B.a.j(a,r)
break
case B.c_:s=b.e
r=b.b
j=B.c.M(s.y.S(0,r).gb4(),4,12)
for(q=0;q<j;++q){p=s.y
i=r.gn()
h=r.gp()
o=$.n()
o=o.a
n=o.a3(628)/100
m=(o.a3(70)+10)/100
B.a.j(a,new A.lL(i,h,Math.cos(n)*m,Math.sin(n)*m,p))}break
case B.b6:B.a.j(a,new A.cN(b.e.y,A.ar("*",B.u,f),4))
break
case B.bX:B.a.j(a,new A.cN(b.e.y,A.ar("*",B.u,f),4))
break
case B.bS:B.a.j(a,new A.ko(b.b))
break
case B.bK:s=b.e
s.toString
B.a.j(a,new A.fY(s,A.ar("!",B.u,f),1))
break
case B.b5:s=b.e
s.toString
B.a.j(a,new A.fY(s,A.ar("!",B.h,f),3))
break
case B.c1:break
case B.bT:B.a.j(a,new A.cN(b.b,A.ar("*",B.E,f),4))
break
case B.bY:case B.bZ:s=$.wq().m(0,b.c)
s.toString
g=b.f
B.a.j(a,new A.cN(b.b,A.ar(s,g!=null?g.a.b.b:B.u,f),4))
break
case B.bP:s=b.b
r=b.f
r.toString
B.a.j(a,new A.lQ(s.gn(),s.gp(),r.a.b))
break
case B.bV:B.a.j(a,new A.cN(b.b,A.ar("*",B.I,f),4))
break}},
yw(a){return v.mangledGlobalNames[a]},
un(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
pI(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
dr(a,b,c,d,e){return e.a(A.pI(a,b,c,d,null,null))},
wy(a){var s,r,q
for(s=[$.dI(),$.dJ()],r=0;r<2;++r){q=s[r].ca(a)
if(q!=null)return q}throw A.m(A.aE("Unknown affix '"+a+"'.",null))},
zm(){var s,r,q,p,o,n,m,l,k,j,i,h="Master's _",g=[B.iM,B.iK,B.iJ,B.iw,B.iP,B.iF]
for(s=t.Q,r=t.h,q=t.Z,p=t.M,o=0;o<6;++o){n=g[o]
m=n.b
A.b1()
$.bh=n.a
A.b1()
l=B.i.dV("Fine _"," _")?$.dI():$.dJ()
n=A.D(p,s)
k=$.iP=new A.cm("Fine _",l,1,A.D(r,s),A.D(q,s),n)
k.c=1
k.d=40
k.px(1)
k.J(1000,1.8)
s.a(A.a1())
k=$.vX()
j=k.m(0,m)
if(j==null)A.a_(A.aE("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())
A.b1()
l=B.i.dV("Deft _"," _")?$.dI():$.dJ()
n=A.D(p,s)
i=$.iP=new A.cm("Deft _",l,1,A.D(r,s),A.D(q,s),n)
i.c=20
i.d=60
i.py(2,3)
i.J(2000,2.4)
j=k.m(0,m)
if(j==null)A.a_(A.aE("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())
A.b1()
l=B.i.dV(h," _")?$.dI():$.dJ()
n=A.D(p,s)
i=$.iP=new A.cm(h,l,1,A.D(r,s),A.D(q,s),n)
i.c=40
i.d=100
i.Z(3,6,4)
i.J(4000,3.4)
j=k.m(0,m)
if(j==null)A.a_(A.aE("Unknown skill '"+m+"'.",null))
n.h(0,j,A.a1())}},
yg(){var s=t.N,r=t.S
A.bi("Uncut Amethyst",A.B(["Amethyst Shard",4],s,r))
A.bi("Faceted Amethyst",A.B(["Uncut Amethyst",4],s,r))
A.bi("Uncut Sapphire",A.B(["Sapphire Shard",4],s,r))
A.bi("Faceted Sapphire",A.B(["Uncut Sapphire",4],s,r))
A.bi("Uncut Emerald",A.B(["Emerald Shard",4],s,r))
A.bi("Faceted Emerald",A.B(["Uncut Emerald",4],s,r))
A.bi("Uncut Ruby",A.B(["Ruby Shard",4],s,r))
A.bi("Faceted Ruby",A.B(["Uncut Ruby",4],s,r))
A.bi("Uncut Diamond",A.B(["Diamond Shard",4],s,r))
A.bi("Faceted Diamond",A.B(["Uncut Diamond",4],s,r))},
yk(){var s="Healing Poultice",r="Potion of Amelioration",q=t.N,p=t.S
A.bi("Mending Salve",A.B(["Soothing Balm",3],q,p))
A.bi(s,A.B(["Mending Salve",3],q,p))
A.bi(r,A.B([s,3],q,p))
A.bi("Potion of Rejuvenation",A.B([r,4],q,p))},
yv(){var s="Scroll of Sidestepping",r="Scroll of Phasing",q="Scroll of Teleportation",p=t.N,o=t.S
A.bi(s,A.B(["Insect Wing",1,"Feather",1],p,o))
A.bi(r,A.B([s,2],p,o))
A.bi(q,A.B([r,2],p,o))
A.bi("Scroll of Disappearing",A.B([q,2],p,o))},
bi(a,b){var s,r,q,p,o,n=A.D(t.q,t.S)
for(s=new A.br(b,A.y(b).i("br<1,2>")).gL(0);s.q();){r=s.d
q=r.a
p=r.b
o=$.bo().b.m(0,q)
if(o==null)A.a_(A.aE('Unknown resource "'+q+'".',null))
n.h(0,o.a,p)}B.a.j($.hN,new A.ln(n,A.a8(a,1,null),a))},
C7(){var s,r,q,p,o,n,m,l,k,j,i,h="mythical/beast/dragon",g=null,f="{2} [are|is] deflected by its scales.",e="treasure",d="equipment",c=A.al("d",h,g,g,g,g,g)
c.at=12
c.ax=8
B.a.j(c.w,new A.aF(10,f))
c.d=B.aj
c=$.aD()
s=[new A.X(["forest",c,B.n,B.B]),new A.X(["brown",$.dL(),B.I,B.k]),new A.X(["blue",$.de(),B.J,B.D]),new A.X(["white",$.ci(),B.p,B.u]),new A.X(["purple",$.bJ(),B.P,B.O]),new A.X(["green",$.dK(),B.A,B.af]),new A.X(["silver",$.dM(),B.K,B.J]),new A.X(["red",$.b8(),B.a5,B.m]),new A.X(["gold",$.dd(),B.E,B.h]),new A.X(["black",$.dc(),B.f,B.l]),new A.X(["ethereal",$.dN(),B.a0,B.F])]
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[2]
p=B.e.P(A.w(r,0,10,38,53))
l=B.e.P(A.w(r,0,10,150,350))
A.fG()
k=$.ak.b
if(k===$.ak)A.a_(A.dZ(""))
k=k.ay
if(0>=k.length)return A.b(k,0)
j=A.nN("juvenile "+o+" dragon",p,g,new A.Y(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.ce=j
p=B.e.P(A.w(r,0,10,20,40))
l=j.db
B.a.j(l,new A.b9(g,"bite[s]",p,0,c))
p=B.e.P(A.w(r,0,10,15,25))
B.a.j(l,new A.b9(g,"claw[s]",p,0,c))
p=B.e.P(A.w(r,0,10,2,10))
l=j.CW
i=new A.aK(100,A.a8(e,l,g))
if(p>1)i=new A.bI(p,i)
p=j.dy
B.a.j(p,i)
k=A.a8("magic",l,g)
B.a.j(p,new A.aK(100,k))
l=A.a8(d,l,g)
B.a.j(p,new A.aK(100,l))
if(n!==c){p=B.e.P(A.w(r,0,10,40,100))
l=$.fT()
k=l.m(0,n)[0]
l=l.m(0,n)[1]
k=A.aR(k,B.y,B.W).a5(1)
B.a.j(j.dx,new A.dm(new A.b9(new A.aJ(k),l,p,5,n),11))}++r}p=A.al("d",h,g,g,g,g,g)
p.at=16
p.ax=10
B.a.j(p.w,new A.aF(20,f))
p.d=B.aj
for(r=0,q=0;q<11;++q){p=s[q].a
o=p[0]
n=p[1]
m=p[3]
p=B.e.P(A.w(r,0,10,48,62))
l=B.e.P(A.w(r,0,10,350,850))
A.fG()
k=$.ak.b
if(k===$.ak)A.a_(A.dZ(""))
k=k.ay
if(0>=k.length)return A.b(k,0)
j=A.nN(o+" dragon",p,g,new A.Y(k.charCodeAt(0),m,B.z),l)
j.e=0
j.r=null
$.ce=j
p=B.e.P(A.w(r,0,10,30,50))
l=j.db
B.a.j(l,new A.b9(g,"bite[s]",p,0,c))
p=B.e.P(A.w(r,0,10,25,35))
B.a.j(l,new A.b9(g,"claw[s]",p,0,c))
p=B.e.P(A.w(r,0,10,5,15))
l=j.CW
i=new A.aK(100,A.a8(e,l,g))
if(p>1)i=new A.bI(p,i)
p=j.dy
B.a.j(p,i)
k=B.e.P(A.w(r,0,10,2,5))
i=new A.aK(100,A.a8("magic",l,g))
if(k>1)i=new A.bI(k,i)
B.a.j(p,i)
k=B.e.P(A.w(r,0,10,2,5))
i=new A.aK(100,A.a8(d,l,g))
if(k>1)i=new A.bI(k,i)
B.a.j(p,i)
if(n!==c){p=B.e.P(A.w(r,0,10,70,150))
l=$.fT()
k=l.m(0,n)[0]
l=l.m(0,n)[1]
k=A.aR(k,B.y,B.W).a5(1)
B.a.j(j.dx,new A.dm(new A.b9(new A.aJ(k),l,p,10,n),8))}++r}},
Cg(){var s,r,q,p,o,n,m,l,k,j="mythical/beast/dragon",i=null,h="{2} [are|is] deflected by its scales.",g="treasure",f="equipment",e=$.aD(),d=[new A.X(["forest",e,B.n,B.B]),new A.X(["brown",$.dL(),B.I,B.k]),new A.X(["blue",$.de(),B.J,B.D]),new A.X(["white",$.ci(),B.p,B.u]),new A.X(["purple",$.bJ(),B.P,B.O]),new A.X(["green",$.dK(),B.A,B.af]),new A.X(["silver",$.dM(),B.K,B.J]),new A.X(["red",$.b8(),B.a5,B.m]),new A.X(["gold",$.dd(),B.E,B.h]),new A.X(["black",$.dc(),B.f,B.l]),new A.X(["ethereal",$.dN(),B.a0,B.F])],c=A.al("D",j,i,i,i,i,i)
c.at=12
c.ax=8
B.a.j(c.w,new A.aF(10,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[2]
c=B.e.P(A.w(s,0,10,65,85))
n=B.e.P(A.w(s,0,10,800,1500))
A.fG()
m=$.ak.b
if(m===$.ak)A.a_(A.dZ(""))
m=m.ay
if(0>=m.length)return A.b(m,0)
l=A.nN("elder "+q+" dragon",c,i,new A.Y(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.ce=l
c=B.e.P(A.w(s,0,10,40,80))
n=l.db
B.a.j(n,new A.b9(i,"bite[s]",c,0,e))
c=B.e.P(A.w(s,0,10,35,75))
B.a.j(n,new A.b9(i,"claw[s]",c,0,e))
c=B.e.P(A.w(s,0,10,6,16))
n=l.CW
k=new A.aK(100,A.a8(g,n,i))
if(c>1)k=new A.bI(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,3,6))
k=new A.aK(100,A.a8("magic",n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,3,6))
k=new A.aK(100,A.a8(f,n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.P(A.w(s,0,10,40,100))
n=$.fT()
m=n.m(0,p)[0]
n=n.m(0,p)[1]
m=A.aR(m,B.y,B.W).a5(1)
B.a.j(l.dx,new A.dm(new A.b9(new A.aJ(m),n,c,5,p),11))}++s}c=A.al("D",j,i,i,i,i,i)
c.at=16
c.ax=10
B.a.j(c.w,new A.aF(20,h))
c.d=B.aj
for(s=0,r=0;r<11;++r){c=d[r].a
q=c[0]
p=c[1]
o=c[3]
c=B.e.P(A.w(s,0,10,80,99))
n=B.e.P(A.w(s,0,10,1400,2000))
A.fG()
m=$.ak.b
if(m===$.ak)A.a_(A.dZ(""))
m=m.ay
if(0>=m.length)return A.b(m,0)
l=A.nN("ancient "+q+" dragon",c,i,new A.Y(m.charCodeAt(0),o,B.z),n)
l.e=0
l.r=null
$.ce=l
c=B.e.P(A.w(s,0,10,60,100))
n=l.db
B.a.j(n,new A.b9(i,"bite[s]",c,0,e))
c=B.e.P(A.w(s,0,10,50,80))
B.a.j(n,new A.b9(i,"claw[s]",c,0,e))
c=B.e.P(A.w(s,0,10,7,20))
n=l.CW
k=new A.aK(100,A.a8(g,n,i))
if(c>1)k=new A.bI(c,k)
c=l.dy
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,4,7))
k=new A.aK(100,A.a8("magic",n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
m=B.e.P(A.w(s,0,10,4,7))
k=new A.aK(100,A.a8(f,n,i))
if(m>1)k=new A.bI(m,k)
B.a.j(c,k)
if(p!==e){c=B.e.P(A.w(s,0,10,200,400))
n=$.fT()
m=n.m(0,p)[0]
n=n.m(0,p)[1]
m=A.aR(m,B.y,B.W).a5(1)
B.a.j(l.dx,new A.dm(new A.b9(new A.aJ(m),n,c,10,p),8))}++s}},
nM(a){var s,r=null
if(a>=64){a=B.c.A(a,8)*8
s=A.cI(B.c.A(a,8),2,r)
s=A.cI(B.c.A(a,4),3,s)
s=A.cI(a,6,A.cI(B.c.A(a,2),5,s))}else if(a>=32){a=B.c.A(a,4)*4
s=A.cI(B.c.A(a,4),2,r)
s=A.cI(a,5,A.cI(B.c.A(a,2),3,s))}else if(a>=16){a=B.c.A(a,2)*2
s=A.cI(a,3,A.cI(B.c.A(a,2),2,r))}else s=A.cI(a,3,r)
return A.zp(s)},
cI(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=t.y,b=new A.a0(new A.e(0,0),new A.e(a4,a4)),a=a4*a4,a0=A.am(a,!1,!1,c),a1=t.b,a2=new A.aa(a0,b,a1),a3=new A.aa(A.am(a,!1,!1,c),new A.a0(new A.e(0,0),new A.e(a4,a4)),a1)
if(a6!=null)for(c=A.ac(b.bR(-1)),b=a6.a,a=a6.b.b.a,a1=b.length;c.q();){s=c.b
r=c.c
q=B.c.A(s,2)
p=B.c.A(r,2)
a6.l(q,p)
q=p*a+q
if(!(q>=0&&q<a1))return A.b(b,q)
o=b[q]?0.3:0.7
q=$.n().aS(1)
a2.l(s,r)
B.a.h(a0,r*a4+s,q>o)}else{n=b.ghm()
m=Math.sqrt(new A.e(b.gbT(),b.gbY()).S(0,b.ghm()).gaH())
for(c=A.ac(b.bR(-1));c.q();){b=c.b
a=c.c
a1=new A.e(b,a).S(0,n)
s=a1.a
a1=a1.b
a1=Math.sqrt(s*s+a1*a1)
s=$.n().aS(1)
a2.l(b,a)
B.a.h(a0,a*a4+b,s>a1/m)}}for(l=0;l<a5;++l,k=a3,a3=a2,a2=k)for(c=a2.b,b=c.bR(-1),a=b.a,a=new A.cW(b,a.a-1,a.b),b=a3.$ti.c,a0=a3.a,a1=a3.b.b.a,s=a2.a,c=c.b.a,r=s.length;a.q();){q=a.b
p=a.c
a2.l(q,p)
j=p*c+q
if(!(j>=0&&j<r))return A.b(s,j)
i=s[j]?1:0
for(j=new A.e(q,p).gbD(),h=j.length,g=0;g<h;++g){f=j[g]
e=f.a
d=f.b
a2.l(e,d)
e=d*c+e
if(!(e>=0&&e<r))return A.b(s,e)
if(s[e])++i}j=b.a(i>=5)
a3.l(q,p)
B.a.h(a0,p*a1+q,j)}return a3},
zp(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=h.b,f=g.a,e=g.b
for(h=A.ac(h),g=a.a,s=g.length,r=f,q=-1,p=-1;h.q();){o=h.b
n=h.c
a.l(o,n)
m=n*f+o
if(!(m>=0&&m<s))return A.b(g,m)
if(g[m]){r=Math.min(r,o)
q=Math.max(q,o)
e=Math.min(e,n)
p=Math.max(p,n)}}h=q-r+1
o=p-e+1
n=new A.a0(new A.e(0,0),new A.e(h,o))
o=A.am(h*o,!1,!1,t.y)
l=new A.aa(o,n,t.b)
for(n=A.ac(n);n.q();){m=n.b
k=n.c
j=m+r
i=k+e
a.l(j,i)
j=i*f+j
if(!(j>=0&&j<s))return A.b(g,j)
j=A.dE(g[j])
l.l(m,k)
B.a.h(o,k*h+m,j)}return l},
ej(a){var s=A.B([$.aD(),B.p,$.er(),B.K,$.dL(),B.k,$.b8(),B.m,$.de(),B.F,$.dK(),B.A,$.ci(),B.J,$.dM(),B.P,$.bJ(),B.n,$.dc(),B.l,$.dd(),B.E,$.dN(),B.O],t.h,t.aZ).m(0,a)
s.toString
return s},
uq(b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null
A.bl(b1,b0,c0+2,b2.gkr().a,b4,c6,c1,c5)
s=b5?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz"
r=c1+c6
q=r-1
if(c4)for(p=b2.gL(b2),o=q;p.q();){n=b7.$1(p.gH())
if(n!=null)o=Math.min(o,r-A.R(n,!1,b0).length-3)}for(p=J.au(b2.gcz()),m=c1+1,l=s.length,k=c1-34,j=r+34,i=c6-34,h=c5+c0,g=h+3,f=0,e=0;p.q();){d=p.gH()
c=c1+(c3?3:1)
b=c5+f+1
if(f>=c0){r=b2.gI(b2)
p=b4?B.h:B.j
b1.k(c+1,h+1," "+(r-c0)+" more... ",p)
break}if(d==null){d=!1
if(f>0){a=b2.gel()
if(!(f<a.length))return A.b(a,f)
if(a[f]==="hand"){a=b2.gel()
a0=f-1
if(!(a0<a.length))return A.b(a,a0)
if(a[a0]==="hand"){d=J.uQ(b2.gcz(),a0)
d=d==null?b0:d.a.f
d=d===!0}}}if(d)b1.k(c,b,"\u2191 (two-handed)",B.j)
else{d=b2.gel()
if(!(f<d.length))return A.b(d,f)
b1.k(c+2,b,"("+d[f]+")",B.t)}++e;++f
continue}a1=!b4||b3.$1(d)
if(c3&&b4&&b3.$1(d)){b1.k(m,b," )",B.l)
if(!(e<l))return A.b(s,e)
b1.k(m,b,s[e],B.h)}++e
if(a1)b1.ap(c,b,d.a.b)
if(c4&&b7.$1(d)!=null){a=b7.$1(d)
a.toString
n=A.R(a,!1,b0)
a2=q-n.length-1
b1.k(a2,b,"$",a1?B.k:B.j)
a=a1?B.h:B.j
b1.k(a2+1,b,n,a)
a3=a2}else a3=q
a4=d.gan().a
a=c+2
a5=a3-a
if(a4.length>a5)a4=B.i.aM(a4,0,a5)
A:{a0=d===b8
if(a0){a6=B.h
break A}if(b4&&b3.$1(d)){a6=B.C
break A}if(b4){a6=B.j
break A}a6=B.d
break A}a7=d===b6
a8=a7?B.i.fd(a4,a5):a4
b1.cw(a,b,a8,a6,a7?B.t:b0)
if(a0){a9=new A.kx(d,A.wY(d,34))
a9.lI(c2,d,!1)
if(b9)if(j>b1.gaj()){b1.k(q,b,"\u25bc",B.h)
a9.hs(c1+B.c.A(i,2),g,b1)}else{b1.k(q,b,"\u25ba",B.h)
a9.hs(r,b,b1)}else{b1.k(c1,b,"\u25c4",B.h)
a9.hs(k,b,b1)}}++f}},
B5(a){return!1},
B6(a){return a.gbg()},
wS(){return A.a2(A.a2(v.G.document).createElement("canvas"))}},B={}
var w=[A,J,B]
var $={}
A.v0.prototype={}
J.ku.prototype={
X(a,b){return a===b},
ga0(a){return A.hJ(a)},
t(a){return"Instance of '"+A.le(a)+"'"},
gaJ(a){return A.ei(A.vt(this))}}
J.hk.prototype={
t(a){return String(a)},
ga0(a){return a?519018:218159},
gaJ(a){return A.ei(t.y)},
$iai:1,
$iz:1}
J.hm.prototype={
X(a,b){return null==b},
t(a){return"null"},
ga0(a){return 0},
$iai:1}
J.hp.prototype={$iaC:1}
J.dv.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.la.prototype={}
J.dB.prototype={}
J.dt.prototype={
t(a){var s=a[$.yA()]
if(s==null)s=a[$.uD()]
if(s==null)return this.lA(a)
return"JavaScript function for "+J.eu(s)},
$idW:1}
J.ho.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.hq.prototype={
ga0(a){return 0},
t(a){return String(a)}}
J.t.prototype={
j(a,b){A.N(a).c.a(b)
a.$flags&1&&A.bx(a,29)
a.push(b)},
dh(a,b){a.$flags&1&&A.bx(a,"removeAt",1)
if(b<0||b>=a.length)throw A.m(A.hL(b,null))
return a.splice(b,1)[0]},
kW(a){a.$flags&1&&A.bx(a,"removeLast",1)
if(a.length===0)throw A.m(A.nk(a,-1))
return a.pop()},
af(a,b){var s
a.$flags&1&&A.bx(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
hR(a,b){A.N(a).i("z(1)").a(b)
a.$flags&1&&A.bx(a,16)
this.nC(a,b,!0)},
nC(a,b,c){var s,r,q,p,o
A.N(a).i("z(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!b.$1(p))s.push(p)
if(a.length!==r)throw A.m(A.aW(a))}o=s.length
if(o===r)return
this.sI(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
ld(a,b){var s=A.N(a)
return new A.ao(a,s.i("z(1)").a(b),s.i("ao<1>"))},
T(a,b){var s
A.N(a).i("k<1>").a(b)
a.$flags&1&&A.bx(a,"addAll",2)
if(Array.isArray(b)){this.lP(a,b)
return}for(s=J.au(b);s.q();)a.push(s.gH())},
lP(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.m(A.aW(a))
for(r=0;r<s;++r)a.push(b[r])},
aP(a){a.$flags&1&&A.bx(a,"clear","clear")
a.length=0},
ae(a,b){var s,r
A.N(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.m(A.aW(a))}},
cK(a,b,c){var s=A.N(a)
return new A.as(a,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("as<1,2>"))},
aG(a,b){var s,r=A.am(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.h(r,s,A.J(a[s]))
return r.join(b)},
av(a,b,c,d){var s,r,q
d.a(b)
A.N(a).ac(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.m(A.aW(a))}return r},
hz(a,b,c){var s,r,q
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.m(A.aW(a))}throw A.m(A.ct())},
f0(a,b){return this.hz(a,b,null)},
aX(a,b){if(!(b>=0&&b<a.length))return A.b(a,b)
return a[b]},
fA(a,b,c){var s=a.length
if(b>s)throw A.m(A.cw(b,0,s,"start",null))
if(c==null)c=s
else if(c<b||c>s)throw A.m(A.cw(c,b,s,"end",null))
if(b===c)return A.a([],A.N(a))
return A.a(a.slice(b,c),A.N(a))},
ly(a,b){return this.fA(a,b,null)},
gaB(a){if(a.length>0)return a[0]
throw A.m(A.ct())},
gc7(a){var s=a.length
if(s>0)return a[s-1]
throw A.m(A.ct())},
glt(a){var s=a.length
if(s===1){if(0>=s)return A.b(a,0)
return a[0]}if(s===0)throw A.m(A.ct())
throw A.m(A.zN())},
ia(a,b,c,d,e){var s,r,q,p
A.N(a).i("k<1>").a(d)
a.$flags&2&&A.bx(a,5)
A.v8(b,c,a.length)
s=c-b
if(s===0)return
A.hM(e,"skipCount")
r=d
q=J.fI(r)
if(e+s>q.gI(r))throw A.m(A.zM())
if(e<b)for(p=s-1;p>=0;--p)a[b+p]=q.m(r,e+p)
else for(p=0;p<s;++p)a[b+p]=q.m(r,e+p)},
pb(a,b,c,d){var s
A.N(a).i("1?").a(d)
a.$flags&2&&A.bx(a,"fillRange")
A.v8(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
cG(a,b){var s,r
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.m(A.aW(a))}return!1},
p8(a,b){var s,r
A.N(a).i("z(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.m(A.aW(a))}return!0},
dn(a,b){var s,r,q,p,o,n=A.N(a)
n.i("d(1,1)?").a(b)
a.$flags&2&&A.bx(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Bm()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bi()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fF(b,2))
if(p>0)this.nI(a,p)},
ft(a){return this.dn(a,null)},
nI(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bM(a,b){var s,r,q,p
a.$flags&2&&A.bx(a,"shuffle")
s=a.length
while(s>1){r=b.a3(s);--s
q=a.length
if(!(s<q))return A.b(a,s)
p=a[s]
if(!(r>=0&&r<q))return A.b(a,r)
a[s]=a[r]
a[r]=p}},
c6(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.b(a,s)
if(J.a9(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gkq(a){return a.length!==0},
t(a){return A.pH(a,"[","]")},
cQ(a,b){var s=A.a(a.slice(0),A.N(a))
return s},
eb(a){return this.cQ(a,!0)},
gL(a){return new J.aV(a,a.length,A.N(a).i("aV<1>"))},
ga0(a){return A.hJ(a)},
gI(a){return a.length},
sI(a,b){a.$flags&1&&A.bx(a,"set length","change the length of")
if(b<0)throw A.m(A.cw(b,0,null,"newLength",null))
if(b>a.length)A.N(a).c.a(null)
a.length=b},
m(a,b){A.r(b)
if(!(b>=0&&b<a.length))throw A.m(A.nk(a,b))
return a[b]},
h(a,b,c){A.N(a).c.a(c)
a.$flags&2&&A.bx(a)
if(!(b>=0&&b<a.length))throw A.m(A.nk(a,b))
a[b]=c},
hC(a,b){var s
A.N(a).i("z(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$iM:1,
$ik:1,
$iC:1}
J.kz.prototype={
pQ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.le(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pJ.prototype={}
J.aV.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.o(q)
throw A.m(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia3:1}
J.dY.prototype={
al(a,b){var s
A.eg(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gf7(b)
if(this.gf7(a)===s)return 0
if(this.gf7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gf7(a){return a===0?1/a<0:a<0},
N(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.m(A.cz(""+a+".toInt()"))},
aV(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.m(A.cz(""+a+".ceil()"))},
bQ(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.m(A.cz(""+a+".floor()"))},
P(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.m(A.cz(""+a+".round()"))},
M(a,b,c){if(B.c.al(b,c)>0)throw A.m(A.iT(b))
if(this.al(a,b)<0)return b
if(this.al(a,c)>0)return c
return a},
i_(a,b){var s
if(b>20)throw A.m(A.cw(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gf7(a))return"-"+s
return s},
t(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0(a){var s,r,q,p,o=a|0
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
cd(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.jw(a,b)},
A(a,b){return(a|0)===a?a/b|0:this.jw(a,b)},
jw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.m(A.cz("Result of truncating division is "+A.J(s)+": "+A.J(a)+" ~/ "+b))},
eI(a,b){var s
if(a>0)s=this.nV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
nV(a,b){return b>31?0:a>>>b},
gaJ(a){return A.ei(t.cZ)},
$iaz:1,
$iE:1,
$iap:1}
J.hl.prototype={
gig(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
gaJ(a){return A.ei(t.S)},
$iai:1,
$id:1}
J.kA.prototype={
gaJ(a){return A.ei(t.i)},
$iai:1}
J.ds.prototype={
hj(a,b){return new A.n5(b,a,0)},
dV(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.cX(a,r-s)},
il(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aM(a,b,c){return a.substring(b,A.v8(b,c,a.length))},
cX(a,b){return this.aM(a,b,null)},
l6(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.b(p,0)
if(p.charCodeAt(0)===133){s=J.zR(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.b(p,r)
q=p.charCodeAt(r)===133?J.zS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
aL(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.m(B.cW)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
pv(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aL(c,s)+a},
df(a,b){return this.pv(a,b," ")},
fd(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aL(" ",s)},
c6(a,b){var s=a.indexOf(b,0)
return s},
G(a,b){return A.CD(a,b,0)},
al(a,b){var s
A.a4(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
t(a){return a},
ga0(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaJ(a){return A.ei(t.N)},
gI(a){return a.length},
$iai:1,
$iaz:1,
$iqA:1,
$iq:1}
A.du.prototype={
t(a){return"LateInitializationError: "+this.a}}
A.dl.prototype={
gI(a){return this.a.length},
m(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.b(s,b)
return s.charCodeAt(b)}}
A.r4.prototype={}
A.M.prototype={}
A.aH.prototype={
gL(a){var s=this
return new A.c9(s,s.gI(s),A.y(s).i("c9<aH.E>"))},
gaq(a){return this.gI(this)===0},
aG(a,b){var s,r,q,p=this,o=p.gI(p)
if(b.length!==0){if(o===0)return""
s=A.J(p.aX(0,0))
if(o!==p.gI(p))throw A.m(A.aW(p))
for(r=s,q=1;q<o;++q){r=r+b+A.J(p.aX(0,q))
if(o!==p.gI(p))throw A.m(A.aW(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.J(p.aX(0,q))
if(o!==p.gI(p))throw A.m(A.aW(p))}return r.charCodeAt(0)==0?r:r}},
cK(a,b,c){var s=A.y(this)
return new A.as(this,s.ac(c).i("1(aH.E)").a(b),s.i("@<aH.E>").ac(c).i("as<1,2>"))},
cQ(a,b){var s=A.a6(this,A.y(this).i("aH.E"))
return s},
eb(a){return this.cQ(0,!0)}}
A.i3.prototype={
gmy(){var s=J.dO(this.a),r=this.c
if(r==null||r>s)return s
return r},
gnX(){var s=J.dO(this.a),r=this.b
if(r>s)return s
return r},
gI(a){var s,r=J.dO(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
aX(a,b){var s=this,r=s.gnX()+b
if(b<0||r>=s.gmy())throw A.m(A.p3(b,s.gI(0),s,null,"index"))
return J.uQ(s.a,r)}}
A.c9.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fI(q),o=p.gI(q)
if(r.b!==o)throw A.m(A.aW(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.aX(q,s);++r.c
return!0},
$ia3:1}
A.cU.prototype={
gL(a){return new A.bs(J.au(this.a),this.b,A.y(this).i("bs<1,2>"))},
gI(a){return J.dO(this.a)}}
A.cM.prototype={$iM:1}
A.bs.prototype={
q(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gH())
return!0}s.a=null
return!1},
gH(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia3:1}
A.as.prototype={
gI(a){return J.dO(this.a)},
aX(a,b){return this.b.$1(J.uQ(this.a,b))}}
A.ao.prototype={
gL(a){return new A.d5(J.au(this.a),this.b,this.$ti.i("d5<1>"))},
cK(a,b,c){var s=this.$ti
return new A.cU(this,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("cU<1,2>"))}}
A.d5.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gH()))return!0
return!1},
gH(){return this.a.gH()},
$ia3:1}
A.e7.prototype={
gL(a){var s=this.a
return new A.i4(s.gL(s),this.b,A.y(this).i("i4<1>"))}}
A.h6.prototype={
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
$ia3:1}
A.i5.prototype={
gL(a){return new A.i6(J.au(this.a),this.b,this.$ti.i("i6<1>"))}}
A.i6.prototype={
q(){var s,r=this
if(r.c)return!1
s=r.a
if(!s.q()||!r.b.$1(s.gH())){r.c=!0
return!1}return!0},
gH(){if(this.c){this.$ti.c.a(null)
return null}return this.a.gH()},
$ia3:1}
A.ib.prototype={
gL(a){return new A.bu(J.au(this.a),this.$ti.i("bu<1>"))}}
A.bu.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gH()))return!0
return!1},
gH(){return this.$ti.c.a(this.a.gH())},
$ia3:1}
A.aG.prototype={
sI(a,b){throw A.m(A.cz("Cannot change the length of a fixed-length list"))},
j(a,b){A.cg(a).i("aG.E").a(b)
throw A.m(A.cz("Cannot add to a fixed-length list"))}}
A.dC.prototype={
h(a,b,c){A.y(this).i("dC.E").a(c)
throw A.m(A.cz("Cannot modify an unmodifiable list"))},
sI(a,b){throw A.m(A.cz("Cannot change the length of an unmodifiable list"))},
j(a,b){A.y(this).i("dC.E").a(b)
throw A.m(A.cz("Cannot add to an unmodifiable list"))}}
A.fo.prototype={}
A.cX.prototype={
gI(a){return J.dO(this.a)},
aX(a,b){var s=this.a,r=J.fI(s)
return r.aX(s,r.gI(s)-1-b)}}
A.O.prototype={$r:"+(1,2)",$s:1}
A.K.prototype={$r:"+(1,2,3)",$s:2}
A.X.prototype={$r:"+(1,2,3,4)",$s:3}
A.eD.prototype={
gaq(a){return this.gI(this)===0},
t(a){return A.v3(this)},
geZ(){return new A.S(this.p7(),A.y(this).i("S<aQ<1,2>>"))},
p7(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$geZ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gaT(),o=o.gL(o),n=A.y(s),m=n.y[1],n=n.i("aQ<1,2>")
case 2:if(!o.q()){r=3
break}l=o.gH()
k=s.m(0,l)
r=4
return a.b=new A.aQ(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$ibg:1}
A.bk.prototype={
gI(a){return this.b.length},
gj2(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ah(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
m(a,b){if(!this.ah(b))return null
return this.b[this.a[b]]},
ae(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gj2()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gaT(){return new A.iu(this.gj2(),this.$ti.i("iu<1>"))}}
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
$ia3:1}
A.dX.prototype={
dB(){var s=this,r=s.$map
if(r==null){r=new A.hr(s.$ti.i("hr<1,2>"))
A.ye(s.a,r)
s.$map=r}return r},
ah(a){return this.dB().ah(a)},
m(a,b){return this.dB().m(0,b)},
ae(a,b){this.$ti.i("~(1,2)").a(b)
this.dB().ae(0,b)},
gaT(){var s=this.dB()
return new A.b6(s,A.y(s).i("b6<1>"))},
gI(a){return this.dB().a}}
A.qD.prototype={
$0(){return B.e.bQ(1000*this.a.now())},
$S:2}
A.hU.prototype={}
A.rZ.prototype={
bV(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.lT.prototype={
t(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.qu.prototype={
t(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.iI.prototype={
t(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ifl:1}
A.dk.prototype={
t(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.yx(r==null?"unknown":r)+"'"},
$idW:1,
gpZ(){return this},
$C:"$1",
$R:1,
$D:null}
A.jF.prototype={$C:"$0",$R:0}
A.jG.prototype={$C:"$2",$R:2}
A.lK.prototype={}
A.lF.prototype={
t(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.yx(s)+"'"}}
A.ex.prototype={
X(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ex))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga0(a){return(A.nl(this.a)^A.hJ(this.$_target))>>>0},
t(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.le(this.a)+"'")}}
A.lu.prototype={
t(a){return"RuntimeError: "+this.a}}
A.c7.prototype={
gI(a){return this.a},
gaq(a){return this.a===0},
gaT(){return new A.b6(this,A.y(this).i("b6<1>"))},
geZ(){return new A.br(this,A.y(this).i("br<1,2>"))},
ah(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.pj(a)},
pj(a){var s=this.d
if(s==null)return!1
return this.e0(this.iX(s,a),a)>=0},
T(a,b){A.y(this).i("bg<1,2>").a(b).ae(0,new A.pK(this))},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.pk(b)},
pk(a){var s,r,q=this.d
if(q==null)return null
s=this.iX(q,a)
r=this.e0(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.ir(s==null?q.b=q.h1():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.ir(r==null?q.c=q.h1():r,b,c)}else q.pm(b,c)},
pm(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.h1()
r=o.f6(a)
q=s[r]
if(q==null)s[r]=[o.h2(a,b)]
else{p=o.e0(q,a)
if(p>=0)q[p].b=b
else q.push(o.h2(a,b))}},
b7(a,b){var s,r,q=this,p=A.y(q)
p.c.a(a)
p.i("2()").a(b)
if(q.ah(a)){s=q.m(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
af(a,b){var s=this.pl(b)
return s},
pl(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.f6(a)
r=n[s]
q=o.e0(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.oh(p)
if(r.length===0)delete n[s]
return p.b},
aP(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.h_()}},
ae(a,b){var s,r,q=this
A.y(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.m(A.aW(q))
s=s.c}},
ir(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.h2(b,c)
else s.b=c},
h_(){this.r=this.r+1&1073741823},
h2(a,b){var s=this,r=A.y(s),q=new A.pU(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.h_()
return q},
oh(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.h_()},
f6(a){return J.ck(a)&1073741823},
iX(a,b){return a[this.f6(b)]},
e0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
t(a){return A.v3(this)},
h1(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iv2:1}
A.pK.prototype={
$2(a,b){var s=this.a,r=A.y(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.y(this.a).i("~(1,2)")}}
A.pU.prototype={}
A.b6.prototype={
gI(a){return this.a.a},
gaq(a){return this.a.a===0},
gL(a){var s=this.a
return new A.c8(s,s.r,s.e,this.$ti.i("c8<1>"))},
G(a,b){return this.a.ah(b)}}
A.c8.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia3:1}
A.cS.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.cR(s,s.r,s.e,this.$ti.i("cR<1>"))}}
A.cR.prototype={
gH(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$ia3:1}
A.br.prototype={
gI(a){return this.a.a},
gL(a){var s=this.a
return new A.e_(s,s.r,s.e,this.$ti.i("e_<1,2>"))}}
A.e_.prototype={
gH(){var s=this.d
s.toString
return s},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.m(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aQ(s.a,s.b,r.$ti.i("aQ<1,2>"))
r.c=s.c
return!0}},
$ia3:1}
A.hr.prototype={
f6(a){return A.C3(a)&1073741823},
e0(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.u7.prototype={
$1(a){return this.a(a)},
$S:49}
A.u8.prototype={
$2(a,b){return this.a(a,b)},
$S:119}
A.u9.prototype={
$1(a){return this.a(A.a4(a))},
$S:155}
A.c1.prototype={
t(a){return this.jy(!1)},
jy(a){var s,r,q,p,o,n=this.mC(),m=this.ey(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.b(m,q)
o=m[q]
l=a?l+A.xe(o):l+A.J(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
mC(){var s,r=this.$s
while($.tB.length<=r)B.a.j($.tB,null)
s=$.tB[r]
if(s==null){s=this.ma()
B.a.h($.tB,r,s)}return s},
ma(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.wZ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.h(j,q,r[s])}}j=A.zZ(j,!1,k)
j.$flags=3
return j}}
A.fv.prototype={
ey(){return[this.a,this.b]},
X(a,b){if(b==null)return!1
return b instanceof A.fv&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
ga0(a){return A.qw(this.$s,this.a,this.b,B.an)}}
A.fw.prototype={
ey(){return[this.a,this.b,this.c]},
X(a,b){var s=this
if(b==null)return!1
return b instanceof A.fw&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
ga0(a){var s=this
return A.qw(s.$s,s.a,s.b,s.c)}}
A.fx.prototype={
ey(){return this.a},
X(a,b){if(b==null)return!1
return b instanceof A.fx&&this.$s===b.$s&&A.AN(this.a,b.a)},
ga0(a){return A.qw(this.$s,A.A6(this.a),B.an,B.an)}}
A.hn.prototype={
t(a){return"RegExp/"+this.a+"/"+this.b.flags},
gja(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.x2(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
kf(a){var s=this.b.exec(a)
if(s==null)return null
return new A.iw(s)},
hj(a,b){return new A.m3(this,b,0)},
mB(a,b){var s,r=this.gja()
if(r==null)r=A.dF(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.iw(s)},
$iqA:1,
$iAk:1}
A.iw.prototype={
gik(){return this.b.index},
ghx(){var s=this.b
return s.index+s[0].length},
m(a,b){var s
A.r(b)
s=this.b
if(!(b<s.length))return A.b(s,b)
return s[b]},
$icu:1,
$ihO:1}
A.m3.prototype={
gL(a){return new A.id(this.a,this.b,this.c)}}
A.id.prototype={
gH(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.mB(l,s)
if(p!=null){m.d=p
o=p.ghx()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.b(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.b(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$ia3:1}
A.lG.prototype={
ghx(){return this.a+this.c.length},
m(a,b){A.r(b)
if(b!==0)throw A.m(A.hL(b,null))
return this.c},
$icu:1,
gik(){return this.a}}
A.n5.prototype={
gL(a){return new A.n6(this.a,this.b,this.c)}}
A.n6.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.lG(s,o)
q.c=r===q.c?r+1:r
return!0},
gH(){var s=this.d
s.toString
return s},
$ia3:1}
A.tg.prototype={
h4(){var s=this.b
if(s===this)throw A.m(new A.du("Local '' has not been initialized."))
return s},
u(){var s=this.b
if(s===this)throw A.m(A.dZ(""))
return s}}
A.f0.prototype={
gaJ(a){return B.ki},
$iai:1,
$iuU:1}
A.hB.prototype={}
A.kV.prototype={
gaJ(a){return B.kj},
$iai:1,
$iuV:1}
A.f1.prototype={
gI(a){return a.length},
$ibP:1}
A.hz.prototype={
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
h(a,b,c){A.bw(c)
a.$flags&2&&A.bx(a)
A.db(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iC:1}
A.hA.prototype={
h(a,b,c){A.r(c)
a.$flags&2&&A.bx(a)
A.db(b,a,a.length)
a[b]=c},
$iM:1,
$ik:1,
$iC:1}
A.kW.prototype={
gaJ(a){return B.kk},
$iai:1,
$ioG:1}
A.kX.prototype={
gaJ(a){return B.kl},
$iai:1,
$ioH:1}
A.kY.prototype={
gaJ(a){return B.km},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$ip4:1}
A.kZ.prototype={
gaJ(a){return B.kn},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$ip5:1}
A.l_.prototype={
gaJ(a){return B.ko},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$ip6:1}
A.l0.prototype={
gaJ(a){return B.kq},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$it0:1}
A.l1.prototype={
gaJ(a){return B.kr},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$it1:1}
A.hC.prototype={
gaJ(a){return B.ks},
gI(a){return a.length},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$it2:1}
A.l2.prototype={
gaJ(a){return B.kt},
gI(a){return a.length},
m(a,b){A.r(b)
A.db(b,a,a.length)
return a[b]},
$iai:1,
$it3:1}
A.ix.prototype={}
A.iy.prototype={}
A.iz.prototype={}
A.iA.prototype={}
A.cb.prototype={
i(a){return A.iN(v.typeUniverse,this,a)},
ac(a){return A.xK(v.typeUniverse,this,a)}}
A.mx.prototype={}
A.na.prototype={
t(a){return A.bW(this.a,null)}}
A.mo.prototype={
t(a){return this.a}}
A.iJ.prototype={$id3:1}
A.ta.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:35}
A.t9.prototype={
$1(a){var s,r
this.a.a=t.O.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:154}
A.tb.prototype={
$0(){this.a.$0()},
$S:25}
A.tc.prototype={
$0(){this.a.$0()},
$S:25}
A.tH.prototype={
lO(a,b){if(self.setTimeout!=null)self.setTimeout(A.fF(new A.tI(this,b),0),a)
else throw A.m(A.cz("`setTimeout()` not found."))}}
A.tI.prototype={
$0(){this.b.$0()},
$S:0}
A.aj.prototype={
gH(){var s=this.b
return s==null?this.$ti.c.a(s):s},
nK(a,b){var s,r,q
a=A.r(a)
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
o.d=null}q=o.nK(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xE
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.xE
throw n
return!1}if(0>=p.length)return A.b(p,-1)
o.a=p.pop()
m=1
continue}throw A.m(A.cd("sync*"))}return!1},
aO(a){var s,r,q=this
if(a instanceof A.S){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.a.j(r,q.a)
q.a=s
return 2}else{q.d=J.au(a)
return 2}},
$ia3:1}
A.S.prototype={
gL(a){return new A.aj(this.a(),this.$ti.i("aj<1>"))}}
A.cp.prototype={
t(a){return A.J(this.a)},
$iaq:1,
gdr(){return this.b}}
A.mi.prototype={
jZ(a){var s=this.a
if((s.a&30)!==0)throw A.m(A.cd("Future already completed"))
s.iw(A.Bl(a,null))}}
A.ig.prototype={}
A.io.prototype={
pq(a){if((this.c&15)!==6)return!0
return this.b.b.hT(t.iW.a(this.d),a.a,t.y,t.K)},
pg(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pH(q,m,a.b,o,n,t.gl)
else p=l.hT(t.mq.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.do.b(A.dH(s))){if((r.c&1)!==0)throw A.m(A.aE("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.m(A.aE("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.bH.prototype={
pN(a,b,c){var s,r,q=this.$ti
q.ac(c).i("1/(2)").a(a)
s=$.aT
if(s===B.a8){if(!t.ng.b(b)&&!t.mq.b(b))throw A.m(A.uR(b,"onError",u.c))}else{c.i("@<0/>").ac(q.c).i("1(2)").a(a)
b=A.BL(b,s)}r=new A.bH(s,c.i("bH<0>"))
this.is(new A.io(r,3,a,b,q.i("@<1>").ac(c).i("io<1,2>")))
return r},
nS(a){this.a=this.a&1|16
this.c=a},
er(a){this.a=a.a&30|this.a&1
this.c=a.c},
is(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.is(a)
return}r.er(s)}A.ni(null,null,r.b,t.O.a(new A.tk(r,a)))}},
jh(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.jh(a)
return}m.er(n)}l.a=m.eG(a)
A.ni(null,null,m.b,t.O.a(new A.to(l,m)))}},
dF(){var s=t.F.a(this.c)
this.c=null
return this.eG(s)},
eG(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
m9(a){var s,r=this
r.$ti.c.a(a)
s=r.dF()
r.a=8
r.c=a
A.ec(r,s)},
m8(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.dF()
q.er(a)
A.ec(q,r)},
iI(a){var s=this.dF()
this.nS(a)
A.ec(this,s)},
lS(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("eQ<1>").b(a)){this.m2(a)
return}this.lT(a)},
lT(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ni(null,null,s.b,t.O.a(new A.tm(s,a)))},
m2(a){A.vh(this.$ti.i("eQ<1>").a(a),this,!1)
return},
iw(a){this.a^=2
A.ni(null,null,this.b,t.O.a(new A.tl(this,a)))},
$ieQ:1}
A.tk.prototype={
$0(){A.ec(this.a,this.b)},
$S:0}
A.to.prototype={
$0(){A.ec(this.b,this.a.a)},
$S:0}
A.tn.prototype={
$0(){A.vh(this.a.a,this.b,!0)},
$S:0}
A.tm.prototype={
$0(){this.a.m9(this.b)},
$S:0}
A.tl.prototype={
$0(){this.a.iI(this.b)},
$S:0}
A.tr.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.pG(t.df.a(q.d),t.z)}catch(p){s=A.dH(p)
r=A.el(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.uS(q)
n=k.a
n.c=new A.cp(q,o)
q=n}q.b=!0
return}if(j instanceof A.bH&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.bH){m=k.b.a
l=new A.bH(m.b,m.$ti)
j.pN(new A.ts(l,m),new A.tt(l),t.ef)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ts.prototype={
$1(a){this.a.m8(this.b)},
$S:35}
A.tt.prototype={
$2(a,b){A.dF(a)
t.gl.a(b)
this.a.iI(new A.cp(a,b))},
$S:153}
A.tq.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hT(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.dH(l)
r=A.el(l)
q=s
p=r
if(p==null)p=A.uS(q)
o=this.a
o.c=new A.cp(q,p)
o.b=!0}},
$S:0}
A.tp.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.pq(s)&&p.a.e!=null){p.c=p.a.pg(s)
p.b=!1}}catch(o){r=A.dH(o)
q=A.el(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.uS(p)
m=l.b
m.c=new A.cp(p,n)
p=m}p.b=!0}},
$S:0}
A.m6.prototype={}
A.i0.prototype={
gI(a){var s,r,q=this,p={},o=new A.bH($.aT,t.h0)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.rH(p,q))
t.c5.a(new A.rI(p,o))
A.fs(q.a,q.b,r,!1,s.c)
return o}}
A.rH.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.rI.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.dF()
r.c.a(q)
s.a=8
s.c=q
A.ec(s,p)},
$S:0}
A.iO.prototype={$ixw:1}
A.mY.prototype={
pI(a){var s,r,q
t.O.a(a)
try{if(B.a8===$.aT){a.$0()
return}A.y3(null,null,this,a,t.ef)}catch(q){s=A.dH(q)
r=A.el(q)
A.tW(A.dF(s),t.gl.a(r))}},
pJ(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a8===$.aT){a.$1(b)
return}A.y4(null,null,this,a,b,t.ef,c)}catch(q){s=A.dH(q)
r=A.el(q)
A.tW(A.dF(s),t.gl.a(r))}},
oB(a){return new A.tD(this,t.O.a(a))},
oC(a,b){return new A.tE(this,b.i("~(0)").a(a),b)},
pG(a,b){b.i("0()").a(a)
if($.aT===B.a8)return a.$0()
return A.y3(null,null,this,a,b)},
hT(a,b,c,d){c.i("@<0>").ac(d).i("1(2)").a(a)
d.a(b)
if($.aT===B.a8)return a.$1(b)
return A.y4(null,null,this,a,b,c,d)},
pH(a,b,c,d,e,f){d.i("@<0>").ac(e).ac(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aT===B.a8)return a.$2(b,c)
return A.BM(null,null,this,a,b,c,d,e,f)}}
A.tD.prototype={
$0(){return this.a.pI(this.b)},
$S:0}
A.tE.prototype={
$1(a){var s=this.c
return this.a.pJ(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.tX.prototype={
$0(){A.zE(this.a,this.b)},
$S:0}
A.iq.prototype={
gI(a){return this.a},
gaq(a){return this.a===0},
gaT(){return new A.ir(this,this.$ti.i("ir<1>"))},
ah(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.mc(a)},
mc(a){var s=this.d
if(s==null)return!1
return this.cD(this.iF(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xz(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xz(q,b)
return r}else return this.mQ(b)},
mQ(a){var s,r,q=this.d
if(q==null)return null
s=this.iF(q,a)
r=this.cD(s,a)
return r<0?null:s[r+1]},
h(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.iE(s==null?m.b=A.vi():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.iE(r==null?m.c=A.vi():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.vi()
p=A.nl(b)&1073741823
o=q[p]
if(o==null){A.vj(q,p,[b,c]);++m.a
m.e=null}else{n=m.cD(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ae(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.i("~(1,2)").a(b)
s=m.iJ()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.m(A.aW(m))}},
iJ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.am(i.a,null,!1,t.z)
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
iE(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.vj(a,b,c)},
iF(a,b){return a[A.nl(b)&1073741823]}}
A.ft.prototype={
cD(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ir.prototype={
gI(a){return this.a.a},
gaq(a){return this.a.a===0},
gL(a){var s=this.a
return new A.is(s,s.iJ(),this.$ti.i("is<1>"))},
G(a,b){return this.a.ah(b)}}
A.is.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.m(A.aW(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia3:1}
A.d7.prototype={
nr(){return new A.d7(A.y(this).i("d7<1>"))},
gL(a){var s=this,r=new A.d8(s,s.r,A.y(s).i("d8<1>"))
r.c=s.e
return r},
gI(a){return this.a},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.mb(b)},
mb(a){var s=this.d
if(s==null)return!1
return this.cD(s[this.fN(a)],a)>=0},
gaB(a){var s=this.e
if(s==null)throw A.m(A.cd("No elements"))
return A.y(this).c.a(s.a)},
j(a,b){var s,r,q=this
A.y(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.iD(s==null?q.b=A.vl():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.iD(r==null?q.c=A.vl():r,b)}else return q.bk(b)},
bk(a){var s,r,q,p=this
A.y(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.vl()
r=p.fN(a)
q=s[r]
if(q==null)s[r]=[p.fM(a)]
else{if(p.cD(q,a)>=0)return!1
q.push(p.fM(a))}return!0},
af(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.jm(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.jm(s.c,b)
else return s.nB(b)},
nB(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.fN(a)
r=n[s]
q=o.cD(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.iH(p)
return!0},
mE(a,b){var s,r,q,p,o,n=this,m=A.y(n)
m.i("z(1)").a(a)
s=n.e
for(m=m.c;s!=null;s=q){r=m.a(s.a)
q=s.b
p=n.r
o=a.$1(r)
if(p!==n.r)throw A.m(A.aW(n))
if(!0===o)n.af(0,r)}},
iD(a,b){A.y(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fM(b)
return!0},
jm(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.iH(s)
delete a[b]
return!0},
iG(){this.r=this.r+1&1073741823},
fM(a){var s,r=this,q=new A.mM(A.y(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iG()
return q},
iH(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iG()},
fN(a){return J.ck(a)&1073741823},
cD(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.mM.prototype={}
A.d8.prototype={
gH(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.m(A.aW(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$ia3:1}
A.Z.prototype={
gL(a){return new A.c9(a,this.gI(a),A.cg(a).i("c9<Z.E>"))},
aX(a,b){return this.m(a,b)},
gkq(a){return this.gI(a)!==0},
ld(a,b){var s=A.cg(a)
return new A.ao(a,s.i("z(Z.E)").a(b),s.i("ao<Z.E>"))},
cK(a,b,c){var s=A.cg(a)
return new A.as(a,s.ac(c).i("1(Z.E)").a(b),s.i("@<Z.E>").ac(c).i("as<1,2>"))},
cQ(a,b){var s,r,q,p,o=this
if(o.gI(a)===0){s=J.x0(0,A.cg(a).i("Z.E"))
return s}r=o.m(a,0)
q=A.am(o.gI(a),r,!0,A.cg(a).i("Z.E"))
for(p=1;p<o.gI(a);++p)B.a.h(q,p,o.m(a,p))
return q},
eb(a){return this.cQ(a,!0)},
j(a,b){var s
A.cg(a).i("Z.E").a(b)
s=this.gI(a)
this.sI(a,s+1)
this.h(a,s,b)},
t(a){return A.pH(a,"[","]")},
$iM:1,
$ik:1,
$iC:1}
A.an.prototype={
ae(a,b){var s,r,q,p=A.y(this)
p.i("~(an.K,an.V)").a(b)
for(s=this.gaT(),s=s.gL(s),p=p.i("an.V");s.q();){r=s.gH()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
geZ(){return this.gaT().cK(0,new A.q6(this),A.y(this).i("aQ<an.K,an.V>"))},
ah(a){return this.gaT().G(0,a)},
gI(a){var s=this.gaT()
return s.gI(s)},
gaq(a){var s=this.gaT()
return s.gaq(s)},
t(a){return A.v3(this)},
$ibg:1}
A.q6.prototype={
$1(a){var s=this.a,r=A.y(s)
r.i("an.K").a(a)
s=s.m(0,a)
if(s==null)s=r.i("an.V").a(s)
return new A.aQ(a,s,r.i("aQ<an.K,an.V>"))},
$S(){return A.y(this.a).i("aQ<an.K,an.V>(an.K)")}}
A.q7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.J(a)
r.a=(r.a+=s)+": "
s=A.J(b)
r.a+=s},
$S:37}
A.ht.prototype={
gL(a){var s=this
return new A.ee(s,s.c,s.d,s.b,s.$ti.i("ee<1>"))},
gaq(a){return this.b===this.c},
gI(a){return(this.c-this.b&this.a.length-1)>>>0},
aX(a,b){var s,r,q=this,p=q.gI(0)
if(0>b||b>=p)A.a_(A.p3(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.b(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
t(a){return A.pH(this,"{","}")},
cO(){var s,r,q=this,p=q.b
if(p===q.c)throw A.m(A.ct());++q.d
s=q.a
if(!(p<s.length))return A.b(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.h(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
bk(a){var s,r=this
r.$ti.c.a(a)
B.a.h(r.a,r.c,a)
s=(r.c+1&r.a.length-1)>>>0
r.c=s
if(r.b===s)r.iY();++r.d},
iY(){var s=this,r=A.am(s.a.length*2,null,!1,s.$ti.i("1?")),q=s.a,p=s.b,o=q.length-p
B.a.ia(r,0,o,q,p)
B.a.ia(r,o,o+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=r},
$ifa:1}
A.ee.prototype={
gH(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.a_(A.aW(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.b(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$ia3:1}
A.fj.prototype={
T(a,b){var s
for(s=J.au(A.y(this).i("k<1>").a(b));s.q();)this.j(0,s.gH())},
cK(a,b,c){var s=A.y(this)
return new A.cM(this,s.ac(c).i("1(2)").a(b),s.i("@<1>").ac(c).i("cM<1,2>"))},
t(a){return A.pH(this,"{","}")},
aG(a,b){var s,r,q,p,o=A.vk(this,this.r,A.y(this).c)
if(!o.q())return""
s=o.d
r=J.eu(s==null?o.$ti.c.a(s):s)
if(!o.q())return r
s=o.$ti.c
if(b.length===0){q=r
do{p=o.d
q+=A.J(p==null?s.a(p):p)}while(o.q())
s=q}else{q=r
do{p=o.d
q=q+b+A.J(p==null?s.a(p):p)}while(o.q())
s=q}return s.charCodeAt(0)==0?s:s},
$iM:1,
$ik:1,
$ihX:1}
A.iF.prototype={}
A.mH.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.md(b):s}},
gI(a){return this.b==null?this.c.a:this.es().length},
gaq(a){return this.gI(0)===0},
gaT(){if(this.b==null){var s=this.c
return new A.b6(s,A.y(s).i("b6<1>"))}return new A.mI(this)},
ah(a){if(this.b==null)return this.c.ah(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ae(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.ae(0,b)
s=o.es()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tP(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.m(A.aW(o))}},
es(){var s=t.lH.a(this.c)
if(s==null)s=this.c=A.a(Object.keys(this.a),t.s)
return s},
md(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tP(this.a[a])
return this.b[a]=s}}
A.mI.prototype={
gI(a){return this.a.gI(0)},
aX(a,b){var s=this.a
if(s.b==null)s=s.gaT().aX(0,b)
else{s=s.es()
if(!(b>=0&&b<s.length))return A.b(s,b)
s=s[b]}return s},
gL(a){var s=this.a
if(s.b==null){s=s.gaT()
s=s.gL(s)}else{s=s.es()
s=new J.aV(s,s.length,A.N(s).i("aV<1>"))}return s},
G(a,b){return this.a.ah(b)}}
A.jJ.prototype={}
A.jL.prototype={}
A.hs.prototype={
t(a){var s=A.jZ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.kD.prototype={
t(a){return"Cyclic error in JSON stringify"}}
A.kC.prototype={
oV(a){var s=A.BJ(a,this.goW().a)
return s},
ka(a){var s=A.AE(a,this.gp6().b,null)
return s},
gp6(){return B.hN},
goW(){return B.hM}}
A.pM.prototype={}
A.pL.prototype={}
A.tw.prototype={
lg(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aS(92)
s.a+=o
o=A.aS(117)
s.a+=o
o=A.aS(100)
s.a+=o
o=p>>>8&15
o=A.aS(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.aS(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aS(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aS(92)
s.a+=o
switch(p){case 8:o=A.aS(98)
s.a+=o
break
case 9:o=A.aS(116)
s.a+=o
break
case 10:o=A.aS(110)
s.a+=o
break
case 12:o=A.aS(102)
s.a+=o
break
case 13:o=A.aS(114)
s.a+=o
break
default:o=A.aS(117)
s.a+=o
o=A.aS(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.aS(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.aS(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.i.aM(a,r,q)
r=q+1
o=A.aS(92)
s.a+=o
o=A.aS(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.i.aM(a,r,m)},
fL(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.m(new A.kD(a,null))}B.a.j(s,a)},
fo(a){var s,r,q,p,o=this
if(o.lf(a))return
o.fL(a)
try{s=o.b.$1(a)
if(!o.lf(s)){q=A.x3(a,null,o.gjd())
throw A.m(q)}q=o.a
if(0>=q.length)return A.b(q,-1)
q.pop()}catch(p){r=A.dH(p)
q=A.x3(a,r,o.gjd())
throw A.m(q)}},
lf(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.e.t(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.lg(a)
s.a+='"'
return!0}else if(t.gs.b(a)){q.fL(a)
q.pW(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return!0}else if(t.av.b(a)){q.fL(a)
r=q.pX(a)
s=q.a
if(0>=s.length)return A.b(s,-1)
s.pop()
return r}else return!1},
pW(a){var s,r,q=this.c
q.a+="["
s=J.fI(a)
if(s.gkq(a)){this.fo(s.m(a,0))
for(r=1;r<s.gI(a);++r){q.a+=","
this.fo(s.m(a,r))}}q.a+="]"},
pX(a){var s,r,q,p,o,n,m=this,l={}
if(a.gaq(a)){m.c.a+="{}"
return!0}s=a.gI(a)*2
r=A.am(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ae(0,new A.tx(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.lg(A.a4(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.b(r,n)
m.fo(r[n])}p.a+="}"
return!0}}
A.tx.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.h(s,r.a++,a)
B.a.h(s,r.a++,b)},
$S:37}
A.tv.prototype={
gjd(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dS.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.dS&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0(a){return A.qw(this.a,this.b,B.an,B.an)},
al(a,b){var s
t.cs.a(b)
s=B.c.al(this.a,b.a)
if(s!==0)return s
return B.c.al(this.b,b.b)},
t(a){var s=this,r=A.zz(A.Ae(s)),q=A.jO(A.Ac(s)),p=A.jO(A.A8(s)),o=A.jO(A.A9(s)),n=A.jO(A.Ab(s)),m=A.jO(A.Ad(s)),l=A.wH(A.Aa(s)),k=s.b,j=k===0?"":A.wH(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaz:1}
A.th.prototype={
t(a){return this.aN()}}
A.aq.prototype={
gdr(){return A.A7(this)}}
A.jm.prototype={
t(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jZ(s)
return"Assertion failed"}}
A.d3.prototype={}
A.cn.prototype={
gfU(){return"Invalid argument"+(!this.a?"(s)":"")},
gfT(){return""},
t(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.J(p),n=s.gfU()+q+o
if(!s.a)return n
return n+s.gfT()+": "+A.jZ(s.ghD())},
ghD(){return this.b}}
A.fb.prototype={
ghD(){return A.xO(this.b)},
gfU(){return"RangeError"},
gfT(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.J(q):""
else if(q==null)s=": Not greater than or equal to "+A.J(r)
else if(q>r)s=": Not in inclusive range "+A.J(r)+".."+A.J(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.J(r)
return s}}
A.ks.prototype={
ghD(){return A.r(this.b)},
gfU(){return"RangeError"},
gfT(){if(A.r(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gI(a){return this.f}}
A.i7.prototype={
t(a){return"Unsupported operation: "+this.a}}
A.lS.prototype={
t(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.e6.prototype={
t(a){return"Bad state: "+this.a}}
A.jK.prototype={
t(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jZ(s)+"."}}
A.l6.prototype={
t(a){return"Out of Memory"},
gdr(){return null},
$iaq:1}
A.i_.prototype={
t(a){return"Stack Overflow"},
gdr(){return null},
$iaq:1}
A.tj.prototype={
t(a){return"Exception: "+this.a}}
A.oM.prototype={
t(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.i.aM(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.k.prototype={
cK(a,b,c){var s=A.y(this)
return A.q9(this,s.ac(c).i("1(k.E)").a(b),s.i("k.E"),c)},
av(a,b,c,d){var s,r
d.a(b)
A.y(this).ac(d).i("1(1,k.E)").a(c)
for(s=this.gL(this),r=b;s.q();)r=c.$2(r,s.gH())
return r},
cG(a,b){var s
A.y(this).i("z(k.E)").a(b)
for(s=this.gL(this);s.q();)if(b.$1(s.gH()))return!0
return!1},
cQ(a,b){var s=A.a6(this,A.y(this).i("k.E"))
return s},
eb(a){return this.cQ(0,!0)},
gI(a){var s,r=this.gL(this)
for(s=0;r.q();)++s
return s},
gaq(a){return!this.gL(this).q()},
gaB(a){var s=this.gL(this)
if(!s.q())throw A.m(A.ct())
return s.gH()},
hz(a,b,c){var s,r=A.y(this)
r.i("z(k.E)").a(b)
r.i("k.E()?").a(c)
for(r=this.gL(this);r.q();){s=r.gH()
if(b.$1(s))return s}r=c.$0()
return r},
aX(a,b){var s,r
A.hM(b,"index")
s=this.gL(this)
for(r=b;s.q();){if(r===0)return s.gH();--r}throw A.m(A.p3(b,b-r,this,null,"index"))},
t(a){return A.zO(this,"(",")")}}
A.aQ.prototype={
t(a){return"MapEntry("+A.J(this.a)+": "+A.J(this.b)+")"}}
A.aM.prototype={
ga0(a){return A.P.prototype.ga0.call(this,0)},
t(a){return"null"}}
A.P.prototype={$iP:1,
X(a,b){return this===b},
ga0(a){return A.hJ(this)},
t(a){return"Instance of '"+A.le(this)+"'"},
gaJ(a){return A.Ce(this)},
toString(){return this.t(this)}}
A.n7.prototype={
t(a){return""},
$ifl:1}
A.ru.prototype={
gp5(){var s,r=this.b
if(r==null)r=$.v6.$0()
s=r-this.a
if($.w_()===1000)return s
return B.c.A(s,1000)}}
A.cY.prototype={
gI(a){return this.a.length},
t(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iAr:1}
A.k0.prototype={
h(a,b,c){this.$ti.i("1?").a(c)
this.a.set(b,c)},
t(a){return"Expando:null"}}
A.qt.prototype={
t(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.uc.prototype={
$1(a){var s,r,q,p
if(A.y1(a))return a
s=this.a
if(s.ah(a))return s.m(0,a)
if(t.av.b(a)){r={}
s.h(0,a,r)
for(s=a.gaT(),s=s.gL(s);s.q();){q=s.gH()
r[q]=this.$1(a.m(0,q))}return r}else if(t.e7.b(a)){p=[]
s.h(0,a,p)
B.a.T(p,J.zk(a,this,t.z))
return p}else return a},
$S:42}
A.uo.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(this.b.i("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.a_(A.cd("Future already completed"))
s.lS(r.i("1/").a(a))
return null},
$S:51}
A.up.prototype={
$1(a){if(a==null)return this.a.jZ(new A.qt(a===undefined))
return this.a.jZ(a)},
$S:51}
A.u0.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.y0(a))return a
s=this.a
a.toString
if(s.ah(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.a_(A.cw(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.vy(!0,"isUtc",t.y)
return new A.dS(r,0,!0)}if(a instanceof RegExp)throw A.m(A.aE("structured clone of RegExp",null))
if(a instanceof Promise)return A.Cw(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.D(p,p)
s.h(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.fJ(n),p=s.gL(n);p.q();)m.push(A.u_(p.gH()))
for(l=0;l<s.gI(n);++l){k=s.m(n,l)
if(!(l<m.length))return A.b(m,l)
j=m[l]
if(k!=null)o.h(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.h(0,a,o)
h=A.r(a.length)
for(s=J.fI(i),l=0;l<h;++l)o.push(this.$1(s.m(i,l)))
return o}return a},
$S:42}
A.mG.prototype={
a3(a){if(a<=0||a>4294967296)throw A.m(A.xg(u.g+a))
return Math.random()*a>>>0},
hH(){return Math.random()},
$iv7:1}
A.mW.prototype={
lN(a){var s,r,q,p,o,n,m,l=this,k=4294967296,j=a<0?-1:0
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
l.cf()
l.cf()
l.cf()
l.cf()},
cf(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.c.A(o-n+(q-p)+(m-r),4294967296)>>>0},
a3(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.m(A.xg(u.g+a))
s=a-1
if((a&s)>>>0===0){p.cf()
return(p.a&s)>>>0}do{p.cf()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
hH(){var s,r=this
r.cf()
s=r.a
r.cf()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
$iv7:1}
A.kf.prototype={
oL(a,b,c,d){var s,r
t.jJ.a(d)
if(c===0)return new A.rY(b).dM(d)
s=b.f.b.b
r=s.a
s=s.b
return new A.nG(a,b,c,new A.aa(A.am(r*s,null,!1,t.aT),new A.a0(new A.e(0,0),new A.e(r,s)),t.gy)).dM(d)},
k_(a,b,c,d){var s,r,q,p,o,n,m,l=null
if(d==null)d=B.a.f0($.fM(),new A.oQ())
if(b==null)b=B.a.gaB($.eq())
s=A.D(t.c3,t.D)
r=t.M
q=t.S
p=t.P
o=t.q
n=new A.dq(a,d,b,c,A.bq(B.v,l),new A.eK(A.am(9,l,!1,t.c)),A.bq(B.cb,l),A.bq(B.ca,l),s,0,new A.hZ(A.D(r,q),A.D(r,q)),60,0,new A.kJ(A.a([],t.kU)),new A.hw(A.D(p,q),A.D(p,q),A.D(o,q),A.D(t.R,q),A.bb(o),A.D(o,q)),new A.i1(),new A.fV(),new A.ia(),new A.hh())
n.lH(a,d,b,c)
for(r=new A.cR($.hY,$.hY.r,$.hY.e,A.y($.hY).i("cR<2>"));r.q();){q=r.d
m=A.bq(new A.c6(q.b,26),l)
q.aK(m)
s.h(0,q,m)}return n},
oU(a){return this.k_(a,null,!1,null)},
lx(a){var s,r,q,p,o=null,n=t.N,m=t.S,l=A.B(["Mending Salve",3,"Scroll of Sidestepping",2,"Tallow Candle",4,"Loaf of Bread",5],n,m),k=A.a([],t.I)
for(n=A.x9(l,n,m),m=A.y(n),n=new A.bs(J.au(n.a),n.b,m.i("bs<1,2>")),m=m.y[1];n.q();){s=n.a
if(s==null)s=m.a(s)
r=s.a
q=s.b
p=$.bo().b.m(0,r)
if(p==null)A.a_(A.aE('Unknown resource "'+r+'".',o))
k.push(new A.L(p.a,o,o,o,q))}a.c.e.b2(a.ax,1,new A.oR(a,k))
return k},
pS(a,b){var s,r=a.f.B(b.gn(),b.gp()),q=r.x
if(q===0){if(!this.og(a,b,r))this.jt(a,b,r)}else{s=r.w
if(s===$.b8()){--q
r.x=q
if(q<=0){q=r.a
q=$.uH().m(0,q)
if((q==null?0:q)>0){q=$.n()
s=t.p.a(A.Av(r.a))
q=q.U(s.length)
if(!(q>=0&&q<s.length))return A.b(s,q)
r.a=s[q]}a.gaA().f=!0}else return new A.jz(b)}else if(s===$.bJ()){this.jt(a,b,r)
r=r.x
if(r>0)return new A.lb(b,B.e.P(A.w(r,0,255,3,8)))}}return null},
og(a,b,c){var s,r={},q=c.a,p=$.uH().m(0,q)
if(p==null)p=0
if(p===0)return!1
r.a=0
q=new A.oP(r,a,b)
q.$3(-1,0,3)
q.$3(1,0,3)
q.$3(0,-1,3)
q.$3(0,1,3)
q.$3(-1,-1,2)
q.$3(-1,1,2)
q.$3(1,-1,2)
q.$3(1,1,2)
r=r.a
q=$.n()
if(r<=q.U(50+p))return!1
r=c.a
s=$.w1().m(0,r)
if(s==null)s=0
c.x=q.bs(s/2|0,s)
c.w=$.b8()
return a.gaA().f=!0},
jt(a,b,c){var s={},r=$.V()
if((c.a.e.a&r.a)===0)return
s.a=s.b=0
r=new A.oO(s,a,b)
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
c.x=B.c.M(B.e.N(s.b/s.a)-4,0,255)},
$izy:1}
A.oQ.prototype={
$1(a){return t.ho.a(a).a==="Human"},
$S:41}
A.oR.prototype={
$1(a){var s=a.a
if(s.dx)this.a.ax.e.j(0,s)
B.a.j(this.b,a)},
$S:7}
A.oP.prototype={
$3(a,b,c){var s=this.c,r=this.b.f.B(s.gn()+a,s.gp()+b)
if(r.x===0)return
if(r.w===$.b8())this.a.a+=c},
$S:146}
A.oO.prototype={
$2(a,b){var s=this.c,r=this.b.f.B(s.gn()+a,s.gp()+b)
s=$.V()
if((r.a.e.a&s.a)!==0){s=this.a;++s.a
if(r.w===$.bJ())s.b=s.b+r.x}},
$S:144}
A.k2.prototype={
gO(){return"Fairy Dust"},
gW(){return"TODO"},
gbE(){return new A.hK($.uF())},
ao(a){var s,r,q=a.y.Q,p=q.CW.a
p.toString
s=B.e.P(A.w(p,0,50,1,20))
q=q.ay.a
q.toString
r=B.e.P(A.w(q,0,50,1,6))
return A.xi(A.bf(new A.aJ(A.aR("dust",B.y,B.aH).a5(1)),"affects",s,$.dd(),r))}}
A.mp.prototype={}
A.k6.prototype={
gO(){return"Flitter"},
gW(){return"TODO"},
gbE(){return new A.hK($.uF())},
ao(a){return new A.k9()}}
A.k9.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.y
q=s.e
if(q.a>0)q.b=q.a=0
else{r=s.Q.ay.a
r.toString
q.a=B.e.P(A.w(r,0,50,3,20))
q.b=1
this.pp("{1} unfold your wings and take flight.",this.a)}return B.o}}
A.ms.prototype={}
A.kO.prototype={
hk(a){var s,r,q,p,o,n,m,l=this,k=l.c
k===$&&A.c()
k=k.x
k===$&&A.c()
k=k.w.B(a.a,a.b)
if(k==null)return null
s=t.V
r=s.a(l.a).Q.f.gcT()
q=A.a6(r,r.$ti.i("k.E"))
p=s.a(l.a).eU(k)
for(s=l.e,o=0,n=0;n<q.length;++n){if(q[n].a.r!==l.gby())continue
if(!(n<p.length))return A.b(p,n)
m=p[n]
m.cV(s,"mastery")
o+=m.hN(l,l.a,k)
if(k.z<=0)break}return o},
ge2(){return 1}}
A.lZ.prototype={
gW(){var s=this.a
if(0>=s.length)return A.b(s,0)
return"You must have "+(B.i.G("aeiou",s[0])?"an":"a")+" "+s+" equipped."},
dO(a){if(a.y.Q.f.gcT().cG(0,new A.t5(this)))return null
return"No "+this.a+" equipped"}}
A.t5.prototype={
$1(a){return t.W.a(a).a.r===this.a.a},
$S:11}
A.jr.prototype={
gO(){return"Ball Lightning"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.m9.prototype={}
A.jA.prototype={
gO(){return"Chain Lightning"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mf.prototype={}
A.jM.prototype={
gO(){return"Crystallize"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mj.prototype={}
A.jW.prototype={
gO(){return"Earthwork"},
gW(){return"TODO"},
gau(){return 10},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.ml.prototype={}
A.k3.prototype={
gO(){return"Fire Barrier"},
gW(){return"Creates a wall of fire."},
gau(){return 4},
aw(a){return 45},
fb(a,b){var s,r,q,p=a.y,o=A.bf(new A.aJ(A.aR("fire",B.y,B.W).a5(1)),"burn",10+this.em(p.Q)*3,$.b8(),8)
p=p.y
s=A.bN(o)
r=p.S(0,b)
q=Math.sqrt(r.gaH())
return new A.js(b,-r.b/q,r.a/q,s,A.bb(t.u))},
ef(a,b){return 8},
gar(){return this.a}}
A.mq.prototype={}
A.k4.prototype={
gO(){return"Firelight"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 4},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mr.prototype={}
A.kc.prototype={
gO(){return"Freezing Hand"},
gW(){return"TODO"},
gau(){return 4},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mw.prototype={}
A.ki.prototype={
gO(){return"Gust"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 4},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mA.prototype={}
A.kj.prototype={
gO(){return"Hail Storm"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mB.prototype={}
A.kp.prototype={
gO(){return"Icicle"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 12},
fb(a,b){return A.uT(b,A.bN(A.bf(new A.aJ(A.aR("icicle",B.y,B.W).a5(1)),"pierce",8+this.em(a.y.Q)*4,$.ci(),8)),!1,null)},
ef(a,b){return 8},
gar(){return this.a}}
A.mC.prototype={}
A.kr.prototype={
gO(){return"Immolation"},
gW(){return"TODO"},
gau(){return 6},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mD.prototype={}
A.kG.prototype={
gO(){return"Lava Flow"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mJ.prototype={}
A.kI.prototype={
gO(){return"Lightning Bolt"},
gW(){return"TODO"},
gau(){return 4},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mK.prototype={}
A.kP.prototype={
gO(){return"Melt Stone"},
gW(){return"TODO"},
gau(){return 3},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mN.prototype={}
A.li.prototype={
gO(){return"Quicksand"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mV.prototype={}
A.lx.prototype={
gO(){return"Sandstorm"},
gW(){return"TODO"},
gau(){return 8},
aw(a){return 24},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.mZ.prototype={}
A.lz.prototype={
gO(){return"Sparks"},
gW(){return"TODO"},
gau(){return 1},
aw(a){return 10},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.n2.prototype={}
A.lE.prototype={
gbE(){return new A.jk(this.gar(),this.gau())},
em(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.gar(),r=s.length,q=a.z,p=q.a,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=p.m(0,m)
if(l==null)l=0
k=q.b.m(0,m)
j=B.c.M(l+(k==null?0:k),0,15)
if(j>=this.gau())o+=j}return o}}
A.jk.prototype={
gW(){return"You must be at level "+this.b+" or higher in "+this.iN()+"."},
dO(a){var s,r,q,p,o,n,m,l,k
for(s=this.a,r=s.length,q=this.b,p=a.y.Q.z,o=p.a,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o.m(0,m)
if(l==null)l=0
k=p.b.m(0,m)
if(B.c.M(l+(k==null?0:k),0,15)>=q)return null}return"Not enough "+this.iN()},
iN(){var s,r,q,p,o,n=this.a
A:{s=n.length
r=s<=0?A.a_(A.cd("Should have at least one arcanum.")):null
if(s===1){if(0>=s)return A.b(n,0)
q=n[0]
r=q.b
break A}if(s===2){if(0>=s)return A.b(n,0)
q=n[0]
if(1>=s)return A.b(n,1)
r=q.b+" or "+n[1].b
break A}if(s>=1){r=s-1
p=B.a.fA(n,0,r)
if(!(r<n.length))return A.b(n,r)
o=n[r]
r=A.N(p)
r=new A.as(p,r.i("q(1)").a(new A.nF()),r.i("as<1,q>")).aG(0,", ")+", or "+o.b
break A}}return r}}
A.nF.prototype={
$1(a){return t.dx.a(a).b},
$S:143}
A.lN.prototype={
gO(){return"Tidal Wave"},
gW(){return"Summons a giant tidal wave."},
gau(){return 5},
aw(a){return 70},
ao(a){var s=a.y,r=this.em(s.Q),q=A.bf(new A.aJ(A.aR("wave",B.y,B.W).a5(1)),"inundate",50+r*15,$.de(),15+r)
return A.oI(s.y,A.bN(q),new A.ag($.b3().a|$.bK().a|$.iX().a),2)},
gar(){return this.a}}
A.n9.prototype={}
A.m1.prototype={
gO(){return"Wind Ride"},
gW(){return"TODO"},
gau(){return 3},
aw(a){return 16},
ao(a){throw A.m(A.be(null))},
gar(){return this.a}}
A.nd.prototype={}
A.m2.prototype={
gO(){return"Windstorm"},
gW(){return"Summons a blast of air, spreading out from the sorceror."},
gau(){return 3},
aw(a){return 36},
ao(a){var s=a.y,r=this.em(s.Q),q=A.aR("wind",B.y,B.W).a5(1),p=B.c.A(r,3),o=A.bf(new A.aJ(q),"blast",10+r*2,$.er(),6+p)
return A.oI(s.y,A.bN(o),$.vT(),null)},
gar(){return this.a}}
A.ne.prototype={}
A.jp.prototype={
gO(){return"Axe Sweep"},
gW(){return"TODO"},
hJ(a,b){return new A.jq(b,$,A.w(a.y.Q.z.bU($.vQ()),1,10,1,3))},
gbE(){return this.a}}
A.jq.prototype={
gaY(){return!1},
gby(){return"axe"},
fa(){return new A.S(this.pt(),t.oc)},
pt(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$fa(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=[o.gb9(),o,o.gba()],m=0
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
if(!(i>=0&&i<g.length)){A.b(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d9("You can't see where you're swinging."),1
case 8:r=1
break
case 7:j=$.V()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d9("There isn't enough room to swing your weapon."),1
case 11:r=1
break
case 10:case 4:++m
r=3
break
case 5:o=[o.gb9(),o,o.gba()],m=0
case 12:if(!(m<3)){r=14
break}l=o[m]
s.jN(B.bY,l,s.a.y.F(0,l))
r=15
return a.aO(s.lc(2))
case 15:s.hk(s.a.y.F(0,l))
r=16
return a.aO(s.lc(3))
case 16:case 13:++m
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" slashes "+this.y.t(0)}}
A.m7.prototype={}
A.m8.prototype={}
A.jH.prototype={
gO(){return"Club Bash"},
gW(){return"TODO"},
hJ(a,b){return new A.jI(b,A.w(a.y.Q.z.bU($.vR()),1,15,1,2))},
gbE(){return this.a}}
A.jI.prototype={
gaY(){return!1},
gby(){return"club"},
V(){var s,r,q,p,o,n=this,m=n.z
if(m===0){m=n.Q=n.hk(n.a.y.F(0,n.y))
if(m==null)return n.d9("There's no one there!")
else if(m===0)return B.o}else if(m===1){m=n.c
m===$&&A.c()
s=m.x
s===$&&A.c()
r=n.y
q=n.a.y.F(0,r)
q=s.w.B(q.a,q.b)
if(q==null)return B.o
p=n.a.y.F(0,r).F(0,r)
s=n.Q
s.toString
o=B.c.M(B.c.cd(300*s,q.gbr()),5,100)
s=m.x
s===$&&A.c()
if(s.bn(p,q.gb5())&&s.w.B(p.a,p.b)==null&&$.n().U(100)<o){q.dk(m,p)
q.a.a=0
n.a_("{1} is knocked back!",q)
n.jN(B.bT,r,n.a.y.F(0,r))}}return++n.z>10?B.o:B.a4},
t(a){return A.J(this.a)+" bashes "+this.y.t(0)}}
A.mh.prototype={}
A.lC.prototype={
gO(){return"Spear Stab"},
gW(){return"TODO"},
hJ(a,b){return new A.lD(b,$,A.w(a.y.Q.z.bU($.vZ()),1,15,1,3))},
gbE(){return this.a}}
A.lD.prototype={
gaY(){return!1},
gby(){return"spear"},
fa(){return new A.S(this.pu(),t.oc)},
pu(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f
return function $async$fa(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.y,n=o.c,m=o.d,l=1
case 3:if(!(l<=2)){r=5
break}k=s.a.y.F(0,new A.e(n*l,m*l))
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
if(!(i>=0&&i<g.length)){A.b(g,i)
r=1
break}i=g[i]
r=!i.r?6:7
break
case 6:r=8
return a.b=s.d9("You can't see far enough to aim."),1
case 8:r=1
break
case 7:j=$.V()
r=(i.a.e.a&j.a)===0?9:10
break
case 9:r=11
return a.b=s.d9("There isn't enough room to use your weapon."),1
case 11:r=1
break
case 10:case 4:++l
r=3
break
case 5:j=t.V,l=1
case 12:if(!(l<=2)){r=14
break}i=s.a
k=i.y.F(0,new A.e(n*l,m*l))
f=j.a(i).Q.f.gcT().gL(0)
if(!f.q())A.a_(A.ct())
s.oy(B.bZ,o,f.gH(),k)
r=15
return a.b=B.a4,1
case 15:s.hk(k)
r=16
return a.b=B.a4,1
case 16:case 13:++l
r=12
break
case 14:case 1:return 0
case 2:return a.c=p.at(-1),3}}}},
t(a){return A.J(this.a)+" spears "+this.y.t(0)}}
A.n3.prototype={}
A.n4.prototype={}
A.m_.prototype={
gO(){return"Whip Crack"},
gW(){return"TODO"},
ef(a,b){return 3},
fb(a,b){var s,r,q,p,o,n,m,l,k=a.x
k===$&&A.c()
k=k.w.B(b.gn(),b.gp())
s=a.y
r=s.Q
q=r.f.gcT()
p=A.a6(q,q.$ti.i("k.E"))
o=s.eU(k)
n=A.eb()
for(k=p.length,m=0;m<k;++m){if(p[m].a.r!=="whip")continue
if(!(m<o.length))return A.b(o,m)
n.b=o[m]
break}l=r.z.bU($.wo())
n.h4().cV(A.w(l,1,15,1,3),"whip mastery")
return A.uT(b,n.h4(),!0,3)},
gbE(){return this.a}}
A.nc.prototype={}
A.js.prototype={
gaY(){return!1},
V(){var s,r,q=this
while(q.y<6){s={}
s.a=!1
r=new A.nK(s,q)
q.z=r.$2(q.z,1)
q.Q=r.$2(q.Q,-1)
if(s.a)return B.a4
q.y+=0.1}return B.o}}
A.nK.prototype={
$2(a,b){var s,r
if(!a)return!1
s=new A.nL(this.a,this.b,b)
r=!s.$2(0,0)||!1
if(s.$2(-0.1,0))r=!1
if(s.$2(0.1,0))r=!1
if(s.$2(0,-0.1))r=!1
return!(s.$2(0,0.1)?!1:r)},
$S:124}
A.nL.prototype={
$2(a,b){var s,r=this.b,q=r.y,p=r.e.F(0,new A.e(B.e.P(r.f*q+a),B.e.P(r.r*q+b)).aL(0,this.c))
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q=q.f.B(p.a,p.b)
s=$.V()
if((q.a.e.a&s.a)===0)return!1
if(r.x.j(0,p)){r.kn(r.w,p,r.y,$.n().bs(30,40))
this.a.a=!0}return!0},
$S:121}
A.ma.prototype={}
A.jw.prototype={
gaD(){var s=this.at
return s==null?this.Q.gaD():s},
kK(a,b){var s=this.Q.gb3()
this.ox(B.bL,b.S(0,a).gkA(),s,b)},
hL(a,b){var s=this
s.Q.e4(s,s.a,b,s.as)
return!0}}
A.h1.prototype={
gf5(){return 1},
V(){var s,r,q=this,p=q.gf5(),o=q.gd7()
if(q.gbe().a<=0){s=q.gbe()
s.a=o
s.b=p
q.dd()
return B.o}if(q.gbe().b>=p){o=B.c.A(B.c.cd(o*p,q.gbe().b),2)
if(o===0)return q.en()
q.gbe().a+=o
q.de()
return B.o}r=B.c.cd(q.gbe().a*q.gbe().b,p)
s=q.gbe()
s.a=r+B.c.A(o,2)
s.b=p
q.fc()
return B.o},
fc(){}}
A.eS.prototype={
gbe(){return this.a.f},
gf5(){return this.x},
gd7(){return this.y},
dd(){return this.a_("{1} start[s] moving faster.",this.a)},
de(){return this.a_("{1} [feel]s the haste lasting longer.",this.a)},
fc(){return this.a_("{1} move[s] even faster.",this.a)}}
A.eO.prototype={
gbe(){return this.a.c},
V(){this.k6($.ci())
return this.lz()},
gf5(){return 1+B.c.A(this.x,40)},
gd7(){var s=this.x
return 3+$.n().cR(s*2,B.c.A(s,2))},
dd(){return this.a_("{1} [are|is] frozen!",this.a)},
de(){return this.a_("{1} feel[s] the cold linger!",this.a)},
fc(){return this.a_("{1} feel[s] the cold intensify!",this.a)}}
A.f7.prototype={
gbe(){return this.a.w},
gf5(){return 1+B.c.A(this.x,20)},
gd7(){var s=this.x
return 1+$.n().cR(s,B.c.A(s,2))},
dd(){return this.a_("{1} [are|is] poisoned!",this.a)},
de(){return this.a_("{1} feel[s] the poison linger!",this.a)},
fc(){return this.a_("{1} feel[s] the poison intensify!",this.a)}}
A.ew.prototype={
gbe(){return this.a.b},
gd7(){var s=this.x
return 3+$.n().cR(s*2,B.c.A(s,2))},
dd(){this.a_("{1 his} vision dims!",this.a)
var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaA().w=!0},
de(){return this.a_("{1 his} vision dims!",this.a)}}
A.eF.prototype={
gbe(){return this.a.d},
gd7(){var s=this.x
return 3+$.n().cR(s*2,B.c.A(s,2))},
dd(){return this.a_("{1} [are|is] dazzled by the light!",this.a)},
de(){return this.a_("{1} [are|is] dazzled by the light!",this.a)}}
A.fd.prototype={
gbe(){return this.a.fh(this.y)},
gd7(){return this.x},
dd(){var s,r,q=this
q.a_("{1} [are|is] resistant to "+q.y.t(0)+".",q.a)
s=q.a
r=s.w
if(r.a>0){r.b=r.a=0
q.a_("{1} [are|is] no longer poisoned.",s)}},
de(){return this.a_("{1} feel[s] the resistance extend.",this.a)}}
A.mu.prototype={}
A.eH.prototype={
aN(){return"DetectType."+this.b}}
A.eG.prototype={
gmh(){var s,r=this,q=r.r
if(q===$){s=r.mg()
r.r!==$&&A.ep()
r.r=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q=this.gmh()
if(q.length===0)return B.o
for(q=J.au(B.a.kW(q));q.q();){s=q.gH()
r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.d8(s.gn(),s.gp(),!0)
this.hi(B.bN,s)}return B.a4},
mg(){var s,r,q,p,o,n,m,l,k=this,j={},i=A.D(t.S,t.A),h=new A.o4(k,i),g=k.e,f=0
if(g.G(0,B.at)){s=k.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=A.ac(r.f.b)
while(r.q()){q=r.b
p=r.c
o=s.x
o===$&&A.c()
o=o.f
o.l(q,p)
n=o.a
m=p*o.b.b.a+q
if(!(m>=0&&m<n.length))return A.b(n,m)
m=n[m]
if(m.r)continue
o.l(q,p)
if(m.a.b!==B.aY)continue;++f
h.$1(new A.e(q,p))}}j.a=0
if(g.G(0,B.ax)){g=k.c
g===$&&A.c()
g=g.x
g===$&&A.c()
g.f3(new A.o6(j,k,h))}if(f>0){g=j.a
s=k.a
if(g>0)k.a_("{1} sense[s] hidden secrets in the dark!",s)
else k.a_("{1} sense[s] places to escape!",s)}else if(j.a>0)k.a_("{1} sense[s] the treasures held in the dark!",k.a)
else k.ls("The darkness holds no secrets.")
g=i.$ti.i("b6<1>")
l=A.a6(new A.b6(i,g),g.i("k.E"))
B.a.dn(l,new A.o7())
g=A.N(l)
s=g.i("as<1,C<e>>")
g=A.a6(new A.as(l,g.i("C<e>(1)").a(new A.o8(i)),s),s.i("aH.E"))
return g}}
A.o4.prototype={
$1(a){var s=this.a,r=s.a.y.S(0,a).gaH()
s=s.f
if(s!=null)s=r>s*s
else s=!1
if(s)return
s=this.b
s.b7(r,new A.o5())
s=s.m(0,r)
s.toString
J.wu(s,a)},
$S:10}
A.o5.prototype={
$0(){return A.a([],t.l)},
$S:48}
A.o6.prototype={
$2(a,b){var s=this.b.c
s===$&&A.c()
s=s.x
s===$&&A.c()
if(s.f.B(b.gn(),b.gp()).r)return;++this.a.a
this.c.$1(b)},
$S:19}
A.o7.prototype={
$2(a,b){A.r(a)
return B.c.al(A.r(b),a)},
$S:24}
A.o8.prototype={
$1(a){var s=this.a.m(0,A.r(a))
s.toString
return s},
$S:120}
A.eJ.prototype={
V(){var s=this,r=t.V,q=r.a(s.a),p=q.ay
if(p===400)s.a_("{1} [are|is] already full!",q)
else if(p+s.e>400)s.a_("{1} [are|is] stuffed!",q)
else s.a_("{1} feel[s] satiated.",q)
r=r.a(s.a)
r.ay=B.c.M(r.ay+s.e,0,400)
return B.o}}
A.h7.prototype={
kn(a,b,c,d){var s,r,q=this
q.ot(B.bM,a.gb3(),b)
s=q.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s=s.w.B(b.gn(),b.gp())
if(s!=null&&s!==q.a)a.e4(q,q.a,s,!1)
r=a.gb3().r.$4(b,a,c,d)
if(r!=null)q.hg(r)},
km(a,b,c){return this.kn(a,b,c,0)}}
A.ez.prototype={
V(){var s,r
this.k6($.b8())
s=this.a
r=s.c
if(r.a>0){r.b=r.a=0
return this.cA("The fire warms {1} back up.",s)}return B.o}}
A.eA.prototype={
V(){var s,r,q=this,p=q.e,o=$.b8(),n=q.r+q.ho(p,o),m=q.c
m===$&&A.c()
s=m.x
s===$&&A.c()
p=s.f.B(p.gn(),p.gp())
s=p.a
r=$.uH().m(0,s)
if(r==null)r=0
if(n<=0)s=r>0&&q.f>$.n().U(r)
else s=!0
if(s){s=p.a
s=$.w1().m(0,s)
n+=s==null?0:s
s=$.n().bs(B.c.A(n,2),n)
p.x=s
s-=B.c.A(q.f,4)
p.x=s
if(s<=0)p.x=1
p.w=o
p=m.x
p===$&&A.c()
p.gaA().f=!0}return B.o}}
A.jz.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gn(),r.gp())
if(s!=null)A.bN(A.bf(new A.aJ(A.aR("fire",B.y,B.aH).a5(1)),"burns",10,$.b8(),null)).e4(q,null,s,!1)
p=p.x
p===$&&A.c()
p=p.f.B(r.gn(),r.gp())
p.x=p.x+q.ho(r,$.b8())
return B.o}}
A.eP.prototype={
V(){this.ho(this.e,$.ci())
return B.o}}
A.f8.prototype={
V(){var s,r=this.c
r===$&&A.c()
r=r.x
r===$&&A.c()
s=this.e
s=r.f.B(s.gn(),s.gp())
if(s.w===$.b8()&&s.x>0)return B.o
r=$.V()
if((s.a.e.a&r.a)!==0){s.w=$.bJ()
s.x=B.c.M(s.x+this.f*4,0,255)}return B.o}}
A.lb.prototype={
V(){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.e
s=q.w.B(s.gn(),s.gp())
if(s!=null){q=$.bJ()
if(s.c8(q)>0)r.a_("{1} [are|is] unaffected by the poison.",s)
else A.bN(A.bf(new A.aJ(A.aR("poison",B.y,B.aH).a5(1)),"chokes",r.f,q,null)).e4(r,null,s,!1)}return B.o}}
A.fp.prototype={
gaY(){return!1},
V(){var s,r,q=this,p=q.a,o=(p.gb5().a&$.V().a)!==0?6:3,n=p.gb5(),m=$.bK(),l=q.c
l===$&&A.c()
s=l.x
s===$&&A.c()
m=A.cv(s,p.y,new A.ag(n.a&~m.a),null,null,o).gcM()
n=m.$ti
p=n.i("ao<k.E>")
r=A.a6(new A.ao(m,n.i("z(k.E)").a(new A.t6(q)),p),p.i("k.E"))
if(r.length===0)return B.bE
q.a_("{1} [are|is] thrown by the wind!",q.a)
p=q.a
q.jM(B.c1,p,p.y)
p=q.a
p.toString
n=$.n()
t.A.a(r)
n=n.U(r.length)
if(!(n>=0&&n<r.length))return A.b(r,n)
p.dk(l,t.u.a(r[n]))
return B.o}}
A.t6.prototype={
$1(a){var s
t.u.a(a)
s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return s.w.B(a.gn(),a.gp())==null},
$S:1}
A.eY.prototype={
V(){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.e
s.f.B(r.gn(),r.gp()).or(this.f)
q=q.x
q===$&&A.c()
q.gaA().f=!0
return B.o}}
A.mc.prototype={}
A.md.prototype={}
A.me.prototype={}
A.mv.prototype={}
A.mQ.prototype={}
A.mR.prototype={}
A.k8.prototype={
gaY(){return!1},
V(){var s,r,q,p,o,n=this,m=(n.z+1)%n.y
n.z=m
if(m!==0)return B.a4
m=n.w
if(m==null){m=n.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m=A.cv(m,n.e,n.x,!1,null,null)
n.r!==$&&A.ax()
n.r=m
m=m.gcM()
s=m.$ti
r=s.i("i5<k.E>")
m=A.a6(new A.i5(m,s.i("z(k.E)").a(new A.oJ(n)),r),r.i("k.E"))
n.w=m}s=n.r
s===$&&A.c()
m=s.ck(B.a.gaB(m))
m.toString
for(q=0;r=n.w,q<r.length;++q)if(s.ck(r[q])!==m)break
s=n.w
s.toString
s=B.a.fA(s,0,q)
r=s.length
p=n.f
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o)n.km(p,s[o],m)
m=n.w
m.toString
m=B.a.ly(m,q)
n.w=m
if(m.length===0)return B.o
return B.a4}}
A.oJ.prototype={
$1(a){var s,r
t.u.a(a)
s=this.a
r=s.r
r===$&&A.c()
r=r.ck(a)
r.toString
return r<=s.f.gaD()},
$S:1}
A.eN.prototype={
V(){var s=this
return s.bd(A.oI(s.a.y,A.bN(s.e),s.f,null))}}
A.eM.prototype={
V(){var s=this
return s.bd(A.oI(s.f,A.bN(s.e),s.r,null))}}
A.mt.prototype={}
A.eT.prototype={
V(){var s=this,r=s.a,q=r.w,p=q.a>0&&s.f
if(p){q.b=q.a=0
s.a_("{1} [are|is] cleansed of poison.",r)}r=s.a
if(r.z!==r.gbr()&&s.e>0){r=s.a
q=s.e
r.z=B.c.M(r.z+q,0,r.gbr())
s.os(B.bQ,s.a,q)
s.a_("{1} feel[s] better.",s.a)
p=!0}if(p)return B.o
else return s.cA("{1} [don't|doesn't] feel any different.",s.a)}}
A.kn.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i=this
i.a_("{1} "+i.f+"!",i.a)
i.cF(B.bS,i.a)
s=i.c
s===$&&A.c()
r=s.x
r===$&&A.c()
r=r.b
q=r.length
p=t.B
o=i.e
n=0
for(;n<r.length;r.length===q||(0,A.o)(r),++n){m=r[n]
l=i.a
if(m!==l&&m instanceof A.ad&&m.y.S(0,p.a(l).y).eg(0,o)){k=s.x
k===$&&A.c()
l=l.y
j=m.y
j=k.geJ().pU(l,j)
j=m.ch+j*m.Q.x
m.ch=j
m.ch=B.e.M(j,0,1)}}return B.o}}
A.kq.prototype={
kQ(a){this.hP(a,0)},
hP(a,b){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
s=s.f.B(a.gn(),a.gp())
r=A.kH(3)
s.f=Math.max(s.f,r)
q=q.x
q===$&&A.c()
q.gaA().f=!0},
gaD(){return this.at}}
A.eU.prototype={
gaY(){return!1},
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.a.y
r=s.f.B(r.gn(),r.gp())
s=A.kH(3)
r.f=Math.max(r.f,s)
p=p.x
p===$&&A.c()
p.gaA().f=!0
p=q.a.y
s=new A.kq(q.e,p,p,A.bb(t.u),A.a([],t.gk))
s.ip(p,p,1)
return q.bd(s)}}
A.eZ.prototype={
go3(){var s,r=this,q=r.w
if(q===$){s=r.mK()
r.w!==$&&A.ep()
r.w=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(s=f.f,r=0;r<2;++r){q=f.r
p=f.go3()
o=p.length
if(q>=o)return B.o
q=f.r
if(!(q<o))return A.b(p,q)
q=p[q]
p=q.length
n=0
for(;n<q.length;q.length===p||(0,A.o)(q),++n){m=q[n]
o=f.c
o===$&&A.c()
l=o.x
l===$&&A.c()
l.d8(m.gn(),m.gp(),!0)
f.hi(B.bU,m)
if(s){l=o.x
l===$&&A.c()
l=l.f
k=m.gn()
j=m.gp()
l.l(k,j)
i=l.a
k=j*l.b.b.a+k
if(!(k>=0&&k<i.length))return A.b(i,k)
k=i[k]
k.f=B.c.M(k.f+255,0,192)
k=o.x
k===$&&A.c()
k.gaA().f=!0}for(l=m.gbD(),k=l.length,h=0;h<l.length;l.length===k||(0,A.o)(l),++h){g=l[h]
j=o.x
j===$&&A.c()
j.d8(g.a,g.b,!0)}}++f.r}return B.a4},
mK(){var s,r,q,p,o,n,m=this,l=t.l,k=A.a([A.a([],l)],t.g)
if(0>=k.length)return A.b(k,0)
B.a.j(k[0],m.a.y)
s=m.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=m.a.y
q=m.e
p=new A.kN(q,s,r,new A.cq(A.a([],t.k5),t.r),A.a([],l))
p.fF(s,r,q)
for(s=p.gcM(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c;s.q();){q=s.b
if(q==null)q=r.a(q)
o=p.ck(q)
o.toString
for(n=k.length;n<=o;++n)B.a.j(k,A.a([],l))
if(!(o>=0&&o<k.length))return A.b(k,o)
B.a.j(k[o],q)}for(l=t.A,n=0;n<k.length;++n){s=$.n()
B.a.bM(l.a(k[n]),s.a)}return k}}
A.kN.prototype={
hY(a,b,c,d){var s=$.yJ()
if((c.a.e.a&s.a)===0)return null
if(a>=this.r*2)return null
return d?3:2}}
A.e1.prototype={
aN(){return"Missive."+this.b}}
A.kQ.prototype={
ge2(){return 1},
V(){var s,r=this,q=$.n(),p=B.ie.m(0,r.f)
p.toString
t.m.a(p)
s=p.length
q=q.U(s)
if(!(q>=0&&q<s))return A.b(p,q)
return r.fB(p[q],r.a,r.e)}}
A.f5.prototype={
gaY(){return!1},
V(){var s,r,q,p,o,n,m=this,l=A.bb(t.f0),k=m.c
k===$&&A.c()
s=k.x
s===$&&A.c()
s=s.b
r=s.length
q=t.V
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.co(o))l.j(0,o)}s=q.a(m.a).r
s.a=m.e
s.b=m.f
s=k.x
s===$&&A.c()
s=s.b
r=s.length
n=!1
p=0
for(;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(o===q.a(m.a))continue
if(k.co(o)&&!l.G(0,o)){m.cF(B.bW,o)
n=!0}}k=m.a
if(n)return m.cA("{1} perceive[s] monsters beyond your sight!",k)
else return m.cA("{1} do[es]n't perceive anything.",k)}}
A.lc.prototype={
V(){var s=this,r=t.B.a(s.a),q=s.e
r.Q=q
r.z=B.c.M(B.c.M(r.z,0,q.f),0,r.gbr())
r.ax.aP(0)
r.h7()
s.cF(B.bX,s.a)
return B.o}}
A.jj.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.hg(new A.lc(g.e))
g.a_(g.r,g.a)
s=A.a([],t.l)
for(r=g.f,q=r.at,p=0;p<8;++p){o=B.a6[p]
n=g.a.y.F(0,o)
m=g.c
m===$&&A.c()
m=m.x
m===$&&A.c()
if(m.bn(n,q)){m=m.w
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m)B.a.j(s,n)}q=s.length
if(q!==0){m=$.n()
t.A.a(s)
q=m.U(q)
if(!(q>=0&&q<s.length))return A.b(s,q)
i=r.fv(s[q],t.B.a(g.a))
h=new A.cH()
i.at=h
h.a=i
q=g.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dJ(i)
g.cF(B.b6,i)}return B.o}}
A.lm.prototype={
gaY(){return!1},
ip(a,b,c){var s,r,q,p,o,n,m,l=this,k=B.e.aV(6.283185307179586*l.gaD()*c*2)
if(c<1){s=l.f
r=l.e
q=s.S(0,r)
p=!r.X(0,s)?Math.atan2(q.a,q.b):0
for(s=k-1,r=l.x,o=6.283185307179586*c,n=0;n<k;++n)B.a.j(r,p+(n/s-0.5)*o)}else{m=6.283185307179586/k
for(s=l.x,n=0;n<k;++n)B.a.j(s,n*m)}},
V(){var s,r=this
if(r.w===0){r.kQ(r.e);++r.w
return B.a4}s=r.x
B.a.hR(s,new A.qF(r))
if(++r.w>r.gaD()||s.length===0)return B.o
return B.a4},
kQ(a){}}
A.qF.prototype={
$1(a){var s,r,q,p,o,n
A.bw(a)
s=this.a
r=s.e
q=r.gn()+B.e.P(Math.sin(a)*s.w)
p=r.gp()+B.e.P(Math.cos(a)*s.w)
o=new A.e(q,p)
n=s.c
n===$&&A.c()
n=n.x
n===$&&A.c()
p=n.f.B(q,p)
q=$.V()
if((p.a.e.a&q.a)===0)return!0
if(!s.r.j(0,o))return!1
s.hP(o,Math.sqrt(o.S(0,r).gaH()))
return!1},
$S:117}
A.ll.prototype={
gaD(){return this.at.gaD()},
hP(a,b){this.km(this.at,a,b)}}
A.fg.prototype={
gaY(){return!1},
V(){var s=this.a.y
return this.bd(A.v9(A.bN(this.e),s,s,1))}}
A.ff.prototype={
gaY(){return!1},
V(){var s=this.f
return this.bd(A.v9(A.bN(this.e),s,s,1))}}
A.mX.prototype={}
A.lA.prototype={
V(){var s,r=this,q=t.B
if($.n().U(q.a(r.a).as)!==0)return B.o
q=q.a(r.a);++q.as
s=r.f.fv(r.e,q)
q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
q.dJ(s)
r.cF(B.b6,s)
return B.o}}
A.fm.prototype={
V(){var s,r,q,p,o,n,m,l=this,k=A.a([],t.l),j=l.a.y,i=l.e,h=j.gn()-i,g=j.gp()-i,f=j.gn(),e=j.gp(),d=l.c
d===$&&A.c()
s=d.x
s===$&&A.c()
for(h=A.ac(A.xh(new A.a0(new A.e(h,g),new A.e(f+i-h,e+i-g)),s.f.b));h.q();){g=h.b
f=h.c
r=new A.e(g,f)
e=d.x
e===$&&A.c()
s=l.a
q=s.cr()
if(e.bn(r,s.e.a>0?new A.ag(q.a|$.V().a):q)){s=e.w
s.l(g,f)
p=s.a
s=f*s.b.b.a+g
if(!(s>=0&&s<p.length))return A.b(p,s)
s=p[s]==null}else s=!1
if(s){e=e.f
e.l(g,f)
s=e.a
g=f*e.b.b.a+g
if(!(g>=0&&g<s.length))return A.b(s,g)
g=s[g].x===0}else g=!1
if(!g)continue
if(r.S(0,l.a.y).bi(0,i))continue
B.a.j(k,r)}i=k.length
if(i===0)return l.dW("{1} couldn't escape.",l.a)
h=$.n()
t.A.a(k)
i=h.U(i)
g=k.length
if(!(i>=0&&i<g))return A.b(k,i)
o=k[i]
for(i=g,n=0;n<10;++n,i=g){i=h.a.a3(i)
g=k.length
if(!(i>=0&&i<g))return A.b(k,i)
r=k[i]
i=l.a.y
if(r.S(0,i).bi(0,o.S(0,i)))o=r}i=l.a
m=i.y
i.dk(d,o)
l.jM(B.c_,l.a,m)
return l.cA("{1} teleport[s]!",l.a)}}
A.mP.prototype={
V(){var s,r,q,p=this,o=p.c
o===$&&A.c()
s=o.x
s===$&&A.c()
r=p.e
s.f.B(r.gn(),r.gp()).a=p.gjc()
p.hi(B.bV,r)
s=$.n()
q=B.e.P(A.w(o.w,1,100,p.gj7(),p.gj6()))
if(s.U(100)<q)p.a_("The "+p.gh0()+" is empty.",p.a)
else{s=o.x
s===$&&A.c()
s.e5(r,p.iK(),o.w)
p.a_("{1} open[s] the "+p.gh0()+".",p.a)}return B.o}}
A.f2.prototype={
gh0(){return"barrel"},
gjc(){return $.nq()},
gj7(){return 40},
gj6(){return 10},
iK(){var s=this.c
s===$&&A.c()
return A.a8("food",s.w,null)}}
A.f3.prototype={
gh0(){return"chest"},
gjc(){return $.nr()},
gj7(){return 20},
gj6(){return 2},
iK(){var s=this.c
s===$&&A.c()
return A.xA(A.B([A.a8("treasure",s.w,null),0.5,A.a8("magic",s.w,null),0.2,A.a8("equipment",s.w,null),0.3],t.iZ,t.i))}}
A.jV.prototype={
gO(){return"Dual Wield"},
gW(){return"Attack with a weapon in each hand as effectively as lesser weaklings do with only a single weapon in their puny arms."},
kx(a,b,c){var s=t.aa.a(b).length
if(s===0)return c
return c/s}}
A.kb.prototype={
gO(){return"Foolhardy"},
gW(){return"An aura of good luck makes you 10% harder to hit."},
eV(a){return B.ia}}
A.h3.prototype={}
A.kd.prototype={
oP(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a2.b,m=n.b.f,l=m.a,k=m.b,j=k.b.a,i=l.length,n=n.d,h=n.a,g=n.b.b.a,f=h.length,e=a2.c,d=0;d<q;++d)for(c=d*r,b=0;b<r;++b){a=a3.gn()+b
a0=a3.gp()+d
if(!k.G(0,new A.e(a,a0)))return!1
n.l(a,a0)
a1=a0*g+a
if(!(a1>=0&&a1<f))return A.b(h,a1)
if(h[a1]!=e)return!1
s.l(b,d)
a1=c+b
if(!(a1>=0&&a1<o))return A.b(p,a1)
a1=p[a1]
m.l(a,a0)
a=a0*j+a
if(!(a>=0&&a<i))return A.b(l,a)
if(!a1.ps(l[a].a))return!1}return!0},
pz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=a.b.b.f,m=n.a,l=n.b.b.a,k=m.length,j=0;j<q;++j)for(i=j*r,h=0;h<r;++h){s.l(h,j)
g=i+h
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g]
f=b.gn()+h
e=b.gp()+j
g=g.a
if(g!=null){n.l(f,e)
f=e*l+f
if(!(f>=0&&f<k))return A.b(m,f)
m[f].a=g;++a.d}}}}
A.h_.prototype={
ps(a){var s=this.b
if(s!=null)s=(a.e.a&s.a)===0
else s=!1
if(s)return!1
s=this.c
if(s.length!==0&&!B.a.G(s,a))return!1
return!0}}
A.dz.prototype={
aN(){return"Symmetry."+this.b}}
A.u4.prototype={
$1(a){return B.i.l6(A.a4(a))},
$S:4}
A.og.prototype={
$1(a){A.r(a)
return new A.fp()},
$S:115}
A.ok.prototype={
$1(a){A.r(a)
return new A.ez()},
$S:110}
A.ol.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.eg(c)
A.r(d)
return new A.eA(a,B.e.N(b.gd1()),d)},
$S:107}
A.oh.prototype={
$1(a){return new A.eO(A.r(a))},
$S:105}
A.oi.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.eg(c)
A.r(d)
return new A.eP(a)},
$S:104}
A.oo.prototype={
$1(a){return new A.f7(A.r(a))},
$S:103}
A.op.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.eg(c)
A.r(d)
return new A.f8(a,B.e.N(b.gd1()))},
$S:99}
A.oj.prototype={
$1(a){return new A.ew(A.r(a))},
$S:93}
A.om.prototype={
$1(a){return new A.eF(A.r(a))},
$S:92}
A.on.prototype={
$4(a,b,c,d){var s,r
t.u.a(a)
t._.a(b)
A.eg(c)
A.r(d)
s=B.c.M(1+B.e.N(b.gd1())*4,0,255)
r=B.e.M(128+b.gd1()*16,0,255)
return new A.eY(a,B.e.N(A.w(b.gaD()-c,0,b.gaD(),s,r)))},
$S:91}
A.td.prototype={
cv(a,b,c,d){var s=this
s.d=b
s.c=c
s.e=d
s.z=a},
bH(a,b,c){return this.cv(a,b,null,c)},
pO(a){return this.cv(a,null,null,null)},
ec(a,b,c){return this.cv(null,a,b,c)},
cu(a,b){return this.cv(a,null,null,b)},
aa(a){return this.cv(null,a,null,null)},
l4(a){return this.cv(null,null,null,a)},
fl(a,b){return this.cv(null,a,null,b)}}
A.nP.prototype={
a4(a){var s,r,q,p,o=this,n="item/"+a
$.bo().c5(n)
s=A.a(a.split("/"),t.s)
r=B.a.gc7(s)
o.ay!==$&&A.ax()
o.ay=r
if(B.a.G(s,"shield")||B.a.G(s,"light"))o.at="hand"
else if(B.a.G(s,"weapon")){o.at="hand"
r=B.a.c6(s,"weapon")+1
if(!(r>=0&&r<s.length))return A.b(s,r)
o.ax=s[r]}else for(q=0;q<8;++q){p=B.i9[q]
if(B.a.G(s,p)){o.at=p
break}}$.dI().c5(n)
$.dJ().c5(n)}}
A.pe.prototype={
E(a,b){var s,r=this
r.dy!==$&&A.ax()
r.dy=a
s=b==null?100:b
r.fr!==$&&A.ax()
r.fr=s},
v(a){return this.E(a,null)},
kp(a){var s
t.kc.a(a)
s=A.ww(this.Q+" intrinsic affix",null,0)
a.$1(s)
this.dx=s.ep()},
a7(a,b){var s=$.b_.u().as
s.toString
this.ay=A.bf(null,s,a,null,null)
this.cx=b},
f2(a){this.ax=new A.bO("Provides "+a+" turns of food.",t.Y.a(new A.pk(a)))},
eW(a,b){var s,r,q
t.jP.a(a)
s=a.length
if(s===1){if(0>=s)return A.b(a,0)
r=a[0]===B.at?"exits":"items"}else r="exits and items"
q="Detects "+r
if(b!=null)q+=" up to "+A.J(b)+" steps away"
this.ax=new A.bO(q+".",t.Y.a(new A.ph(a,b)))},
hp(a){return this.eW(a,null)},
kO(a,b){this.ax=new A.bO("Perceives the location of monsters, even those that are otherwise hidden.",t.Y.a(new A.pp(b,a)))},
hM(a){return this.kO(a,5)},
bF(a){this.ax=new A.bO("Grantes resistance to "+a.t(0)+" for 40 turns.",t.Y.a(new A.pq(a)))},
ks(a,b){var s="Imparts knowledge of the dungeon up to "+a+" steps from the hero."
if(b)s+=" Illuminates the dungeon."
this.ax=new A.bO(s,t.Y.a(new A.po(a,b)))},
hF(a){return this.ks(a,!1)},
hB(a,b){this.ax=new A.bO("Raises speed by "+a+" for "+b+" turns.",t.Y.a(new A.pl(a,b)))},
fk(a){this.ax=new A.bO("Attempts to teleport up to "+a+" steps away.",t.Y.a(new A.pr(a)))},
dZ(a,b){this.ax=new A.bO("Instantly heals "+a+" lost health.",t.Y.a(new A.pm(a,b)))},
ki(a){return this.dZ(a,!1)},
dL(a,b,c,d){var s=A.bf(new A.aJ(A.aR(b,B.y,B.W).a5(1)),c,d,a,3)
this.ax=new A.bO("Unleashes a ball of "+a.t(0)+" that inflicts "+d+" damage out to 3 steps from the hero.",t.Y.a(new A.pf(s)))
this.f=t.bj.a(new A.pg(s))},
dX(a,b,c,d,e){var s={},r=A.bf(new A.aJ(A.aR(b,B.y,B.W).a5(1)),c,d,a,5),q=$.b3()
s.a=q
if(e)s.a=new A.ag(q.a|$.V().a)
this.ax=new A.bO("Unleashes a flow of "+a.t(0)+" that inflicts "+d+" damage out to 5 steps from the hero.",t.Y.a(new A.pi(s,r)))
this.f=t.bj.a(new A.pj(s,r))},
kg(a,b,c,d){return this.dX(a,b,c,d,!1)},
dc(a,b){this.r=a
if(b!=null)this.ax=new A.bO("Illuminates out to a range of "+A.J(b)+".",t.Y.a(new A.pn(b)))},
po(a){return this.dc(a,null)},
ep(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=A.cO($.b_.u().Q,a3.as,null),a5=a3.d
if(a5==null)a5=$.b_.u().d
if(a5!=null){s=A.aR(a3.Q.toLowerCase(),B.y,B.W).a5(1)
r=$.b_.u().as
A:{if(r!=null){q=A.x8(r,B.y)
break A}q="hits"
break A}p=a3.e
if(p==null)p=$.b_.u().e
o=a3.c
if(o==null)o=$.b_.u().c
if(o==null)o=$.aD()
n=A.bf(new A.aJ(s),q,a5,o,p)
p=$.b_.u().z
s=p==null?a3.z:p
if(s==null)s=0
q=a3.f
m=new A.rW(s,n,q==null?$.b_.u().f:q)}else m=null
s=a3.db?B.cs:B.W
s=A.aR(a3.Q,B.y,s)
q=a3.dy
q===$&&A.c()
p=$.wW
$.wW=p+1
o=$.b_.u().at
l=$.b_.u().ax
k=a3.ax
j=a3.ay
i=a3.ch
h=a3.cy
if(h==null)h=0
g=a3.b
if(g==null)g=$.b_.u().b
if(g==null)g=1
f=a3.dx
e=a3.CW
if(e==null)e=0
d=a3.cx
if(d==null)d=0
c=a3.r
if(c==null)c=$.b_.u().r
b=a3.w
if(b==null)b=$.b_.u().w
a=$.b_.u().ch
a0=$.b_.u().y
if(a0==null)a0=a3.y
a1=a3.db
a2=A.D(t.h,t.S)
if(c==null)c=0
if(b==null)b=0
a2.T(0,$.b_.u().a)
a2.T(0,a3.a)
return new A.aP(s,a4,q,p,o,a0===!0,l,k,j,m,i,h,a3.at,e,d,c,a,g,a2,b,f,a1)}}
A.pk.prototype={
$0(){return new A.eJ(this.a)},
$S:90}
A.ph.prototype={
$0(){var s=this.a
return new A.eG(A.zX(s,A.N(s).c),this.b)},
$S:83}
A.pp.prototype={
$0(){return new A.f5(this.a,this.b)},
$S:80}
A.pq.prototype={
$0(){return new A.fd(40,this.a)},
$S:78}
A.po.prototype={
$0(){return new A.eZ(this.a,this.b)},
$S:77}
A.pl.prototype={
$0(){return A.wT(this.a,this.b)},
$S:76}
A.pr.prototype={
$0(){return A.xu(this.a)},
$S:75}
A.pm.prototype={
$0(){return A.wU(this.a,this.b)},
$S:74}
A.pf.prototype={
$0(){return A.xi(this.a)},
$S:72}
A.pg.prototype={
$1(a){return new A.ff(this.a,a)},
$S:68}
A.pi.prototype={
$0(){return new A.eN(this.b,this.a.a)},
$S:57}
A.pj.prototype={
$1(a){return new A.eM(this.b,a,this.a.a)},
$S:55}
A.pn.prototype={
$0(){return new A.eU(this.a)},
$S:53}
A.cm.prototype={
E(a,b){this.c=a
this.d=b==null?100:b},
v(a){return this.E(a,null)},
J(a,b){var s=t.Q.a(new A.nz(a)),r=t.oF.a(new A.nA(b))
this.at=s
this.ax=r},
Z(a,b,c){var s={}
s.a=c
if(c==null)s.a=a
this.f=new A.ny(s,a,b)},
b6(a,b){return this.Z(a,b,null)},
px(a){return this.Z(a,null,null)},
py(a,b){return this.Z(a,null,b)},
bC(a){this.r=new A.nx(a)},
bI(a){this.w=new A.nC(a)},
dQ(a,b){t.i6.a(b)
t.lg.a(a)
if(b!=null)this.y=b
if(a!=null)this.z=a},
aE(a){return this.dQ(null,a)},
dP(a){return this.dQ(a,null)},
cj(a,b){this.Q=a
this.ay.h(0,a,new A.nw(b))},
bB(a){return this.cj(a,null)},
bv(a,b){var s
t.lg.a(b)
s=this.ay
if(b!=null)s.h(0,a,b)
else s.h(0,a,new A.nB())},
R(a){return this.bv(a,null)},
ep(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=b.b
if(a0!=null){s=$.bh
r=A.bn(a,"_","["+A.J(s)+"]")
for(s=r+" (",q=r,p=1;a0.ca(q)!=null;){++p
q=s+p+")"}}else q=a
o=B.i.dV(a," _")
n=B.i.l6(A.bn(a,"_",""))
s=$.wx
$.wx=s+1
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
if(l==null)l=A.vx()
if(k==null)k=A.nj()
if(j==null)j=A.vx()
if(i==null)i=A.nj()
if(g==null)g=A.nj()
if(h==null)h=$.aD()
if(e==null)e=A.vx()
if(f==null)f=A.nj()
c=new A.ev(q,n,o,s,m,l,k,A.nj(),j,i,g,h,A.D(t.h,d),A.D(t.Z,d),f,e,b.CW)
b.ay.ae(0,c.gln())
b.ch.ae(0,c.glp())
return c}}
A.nz.prototype={
$1(a){return this.a},
$S:3}
A.nA.prototype={
$1(a){return this.a},
$S:20}
A.ny.prototype={
$0(){var s,r,q,p=$.n().aC(this.b,this.a.a),o=this.c
if(o!=null){s=0
for(;;){r=s+1
if(s<10){q=$.n()
q=q.a.a3(o)===0}else q=!1
if(!q)break;++p
s=r}}return p},
$S:2}
A.nx.prototype={
$1(a){A.r(a)
return this.a},
$S:20}
A.nC.prototype={
$1(a){A.r(a)
return this.a},
$S:3}
A.nw.prototype={
$1(a){var s
A.r(a)
s=this.a
return s==null?1:s},
$S:3}
A.nB.prototype={
$1(a){A.r(a)
return 1},
$S:3}
A.u3.prototype={
$1(a){A.r(a)
return this.a},
$S(){return this.b.i("0(d)")}}
A.uz.prototype={
$1(a){return this.a+A.r(a)*this.b},
$S:20}
A.hj.prototype={
aN(){return"ItemQuality."+this.b}}
A.tf.prototype={
j3(a,b,c){var s,r,q,p,o=null
if(c.dx&&a!=null)a.e.j(0,c)
s=c.db
if(s!=null)return new A.L(c,o,o,s.fu(),1)
if(c.e==null)return new A.L(c,o,o,o,1)
r=this.jq($.dI(),c,b)
q=this.jq($.dJ(),c,b)
if(r!=null&&q!=null&&$.n().U(4)!==0)if($.n().U(2)===0)r=o
else q=o
p=r==null?o:r.fu()
return new A.L(c,p,q==null?o:q.fu(),o,1)},
jq(a,b,c){var s,r
t.b_.a(a)
switch(this.b.a){case 0:s=B.iE
break
case 1:s=B.iQ
break
case 2:s=B.ix
break
default:s=null}r=A.w(c,0,100,s.a,s.b)
if($.n().aS(1)>r)return null
return a.pP(c,$.bo().ll(b.a.a5(1).a))}}
A.mF.prototype={
b2(a,b,c){var s
t.f.a(c)
s=this.c
if(s.dx&&a!=null&&a.e.G(0,s))return
c.$1(this.j3(a,b,s))},
$ibB:1}
A.n8.prototype={
b2(a,b,c){t.f.a(c).$1(this.j3(a,b,this.nL(a,b)))},
nL(a,b){var s,r,q,p,o
switch(this.b.a){case 0:s=0
break
case 1:s=3
break
case 2:s=15
break
default:s=null}for(r=this.c,q=this.a,p=s;;){s=$.bo()
s=s.dj(q==null?b:q,null,r)
s.toString
o=s.dx
if(o&&a!=null&&a.e.G(0,s))continue
if(!o&&p>0){--p
continue}return s}},
$ibB:1}
A.aK.prototype={
b2(a,b,c){t.f.a(c)
if($.n().U(100)>=this.a)return
this.b.b2(a,b,c)},
$ibB:1}
A.ie.prototype={
b2(a,b,c){var s,r,q
t.f.a(c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].b2(a,b,c)},
$ibB:1}
A.mO.prototype={
lM(a){a.ae(0,new A.tA(this))},
b2(a,b,c){var s
t.f.a(c)
s=this.a.i1(1)
if(s==null)return
s.b2(a,b,c)},
$ibB:1}
A.tA.prototype={
$2(a,b){var s,r=null
t.iZ.a(a)
A.bw(b)
s=this.a.a
s.cg(s.$ti.c.a(a),r,r,r,b,b,r)},
$S:54}
A.bI.prototype={
b2(a,b,c){var s,r,q,p,o
t.f.a(c)
s=this.a
r=s>3?4:5
if(s>6)r=3
q=$.n()
p=q.cR(s,B.c.A(s,2))+q.hV(0,r)
for(s=this.b,o=0;o<p;++o)s.b2(a,b,c)},
$ibB:1}
A.k7.prototype={}
A.ur.prototype={
$1(a){a.ch.h(0,B.a3,t.Q.a(A.fH(2,t.S)))
return a},
$S:40}
A.uA.prototype={
$2(a,b){A.a4(a)
A.bw(b)
this.a.h(0,A.a8(a,null,null),b)},
$S:56}
A.uB.prototype={
$1(a){a.Z(8,3,12)
a.dP(A.a1())
a.ch.h(0,B.ae,t.Q.a(A.fH(2,t.S)))
a.bB($.dc())
return a},
$S:40}
A.te.prototype={
aW(a,b){var s=this
if(b==null){s.y=1
s.z=a}else{s.y=a
s.z=b}},
aR(a){return this.aW(a,null)}}
A.oF.prototype={}
A.jx.prototype={
kt(a){this.ad(new A.mb(A.aN(a)),null,null)},
ad(a,b,c){if(c!=null){b.toString
a=new A.iC(b,c,a)}else if(b!=null)a=new A.iC(1,b,a)
B.a.j(this.fr,a)},
ak(a,b,c){B.a.j(this.db,A.bf(null,a,b,c,null))},
D(a,b){return this.ak(a,b,null)},
dT(a,b,c,d){var s=new A.aK(d,A.a8(a,this.CW+c,null))
if(b>1)s=A.vH(b,s)
B.a.j(this.dy,s)},
C(a,b){return this.dT(a,1,0,b)},
hu(a,b){return this.dT(a,b,0,100)},
eX(a,b,c){return this.dT(a,b,c,100)},
p_(a,b,c){return this.dT(a,b,0,c)},
hv(a,b,c){return this.dT(a,1,b,c)},
k9(a,b,c,d){var s=new A.aK(d,A.a8(a,this.CW+c,B.hI))
if(b>1)s=A.vH(b,s)
B.a.j(this.dy,s)},
p0(a,b,c){return this.k9(a,b,c,100)},
hw(a,b,c){return this.k9(a,1,b,c)},
cS(a){B.a.j(this.x,"unique")
this.fx=a
this.ch=!0},
i2(){return this.cS(null)},
le(a,b){return this.az(null,"whips",$.aD(),a,2,b)},
bm(a,b,c,d){var s=$.fT()
this.az(s.m(0,a)[0],s.m(0,a)[1],a,b,c,d)},
c4(a,b,c,d){var s=$.fT(),r=s.m(0,a)[0]
s=s.m(0,a)[1]
if(c==null)c=10
B.a.j(this.dx,new A.dm(A.bf(new A.aJ(A.aR(r,B.y,B.W).a5(1)),s,b,a,c),d))},
hA(a){B.a.j(this.dx,new A.kk(1,10,a))
return null},
pi(){return this.hA(5)},
az(a,b,c,d,e,f){B.a.j(this.dx,new A.fZ(A.bf(a!=null?new A.aJ(A.aR(a,B.y,B.W).a5(1)):null,b,d,c,e),f))}}
A.mb.prototype={
cW(a,b){var s
t.or.a(b)
s=this.a.b
s===$&&A.c()
b.$1(s)},
$ie5:1}
A.af.prototype={
cW(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=0;r<10;++r){q=$.cj().dj(a,!1,s)
if(q==null)continue
if(q.ax.f)continue
b.$1(q)
break}},
$ie5:1}
A.iC.prototype={
cW(a,b){var s,r,q,p,o
t.or.a(b)
s=this.b
r=s>3?4:5
if(s>6)r=3
q=$.n()
p=q.aC(this.a,s)+q.hV(0,r)
for(s=this.c,o=0;o<p;++o)s.cW(a,b)},
$ie5:1}
A.m4.prototype={
cW(a,b){var s,r,q
t.or.a(b)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].cW(a,b)},
$ie5:1}
A.bz.prototype={
gbp(){var s=this.b.b
s===$&&A.c()
return s.f*0.5},
bL(a,b){return!1},
ic(a,b){var s,r=a.Q,q=$.n()
if(q.aS(2)<=b/r.f)return!0
r=a.z
s=a.Q
if(q.aS(2)<=r/s.f)return!0
return!1},
bW(a,b){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return new A.jj(r,s,this.d)},
t(a){var s,r=this.b.b
r===$&&A.c()
s=this.c.b
s===$&&A.c()
return"Amputate "+r.a.a+" + "+s.a.a}}
A.fZ.prototype={
gbp(){var s=this.b
return s.c*s.e.e*(1+s.d/20)},
bL(a,b){var s,r,q,p
if((b.b.a>0||b.d.a>0)&&$.n().aS(1)<b.gdm()){s=B.e.N(A.w(b.gdm(),0,1,0,90))
if($.n().U(100)<s)return!1}r=a.y.y
q=r.S(0,b.y)
if(q.bi(0,this.b.d)){A.cr(b,"bolt move too far")
return!1}if(q.eh(0,1.5)){A.cr(b,"bolt move too close")
return!1}p=a.x
p===$&&A.c()
if(!p.oQ(b,r)){A.cr(b,"bolt move can't target")
return!1}A.cr(b,"bolt move OK")
return!0},
bW(a,b){return A.uT(a.y.y,A.bN(this.b),!1,null)},
t(a){return"Bolt "+this.b.t(0)+" rate: "+this.a}}
A.dm.prototype={
gaD(){return this.b.d},
gbp(){var s=this.b
return s.c*3*s.e.e*(1+s.d/10)},
bL(a,b){var s,r,q
if((b.b.a>0||b.d.a>0)&&$.n().aS(1)<b.gdm()){s=B.e.N(A.w(b.gdm(),0,1,0,70))
if($.n().U(100)<s)return!1}r=a.y.y
if(r.S(0,b.y).bi(0,this.b.d)){A.cr(b,"cone move too far")
return!1}q=a.x
q===$&&A.c()
if(!q.eS(b,r)){A.cr(b,"cone move can't target")
return!1}A.cr(b,"cone move OK")
return!0},
bW(a,b){var s=b.y,r=a.y.y
return A.v9(A.bN(this.b),s,r,0.125)},
t(a){return"Cone "+this.b.t(0)+" rate: "+this.a}}
A.kk.prototype={
gbp(){return this.c*this.b},
bL(a,b){return b.f.a<=0},
bW(a,b){return A.wT(this.b,this.c)},
t(a){return"Haste "+this.b+" for "+this.c+" turns rate: "+this.a}}
A.hf.prototype={
gbp(){return this.b},
bL(a,b){var s=b.z,r=b.Q.f
return s/r<0.25||r-s>=this.b},
bW(a,b){return A.wU(this.b,!1)},
t(a){return"Heal "+this.b+" rate: "+this.a}}
A.bY.prototype={
gbp(){return this.b*0.5},
bL(a,b){var s,r,q,p,o,n=a.x
n===$&&A.c()
s=b.y
s=n.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(n=n.b,s=n.length,r=b.y,q=this.b,p=0;p<s;++p){o=n[p]
if(o===b)continue
if(o instanceof A.ad&&o.at instanceof A.co&&o.y.S(0,r).eg(0,q))return!0}return!1},
bW(a,b){var s=this.c
if(s==null)s="howls"
return new A.kn(this.b,s)},
t(a){return"Howl "+this.b}}
A.b7.prototype={
gbp(){return 0},
bL(a,b){var s,r=a.y.y
if(r.S(0,b.y).gb4()<=1)return!1
s=a.x
s===$&&A.c()
return s.eS(b,r)},
bW(a,b){return new A.kQ(a.y,this.b)},
t(a){return this.b.t(0)+" rate: "+this.a}}
A.bS.prototype={
gbp(){return 6},
bL(a,b){var s,r,q,p,o,n,m,l,k,j,i=a.x
i===$&&A.c()
s=b.y
s=i.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
for(s=b.y.gbD(),r=s.length,q=b.e,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=b.cr()
if(i.bn(o,q.a>0?new A.ag(n.a|$.V().a):n)){m=i.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m){m=i.f
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l].x===0
m=l}else m=!1
if(m)return!0}return!1},
bW(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.T,h=A.a([],i)
if(this.b)for(s=b.e,r=0;r<8;++r){q=B.a6[r]
p=a.x
p===$&&A.c()
o=b.y.F(0,q)
n=b.cr()
if(p.bn(o,s.a>0?new A.ag(n.a|$.V().a):n)){m=p.w
l=o.a
k=o.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
l=j[l]==null
m=l}else m=!1
if(m){p=p.f
m=o.a
o=o.b
p.l(m,o)
l=p.a
m=o*p.b.b.a+m
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m].x===0
p=m}else p=!1
if(!p)continue
p=new A.re(a,b,q)
if(p.$1(q.gcP()))B.a.T(h,A.a([q,q,q,q,q],i))
if(p.$1(q.gcP().gb9()))B.a.j(h,q)
if(p.$1(q.gcP().gba()))B.a.j(h,q)}if(h.length===0)for(i=b.e,r=0;r<8;++r){q=B.a6[r]
s=a.x
s===$&&A.c()
p=b.y.F(0,q)
n=b.cr()
if(s.bn(p,i.a>0?new A.ag(n.a|$.V().a):n)){o=s.w
m=p.a
l=p.b
o.l(m,l)
k=o.a
m=l*o.b.b.a+m
if(!(m>=0&&m<k.length))return A.b(k,m)
m=k[m]==null
o=m}else o=!1
if(o){s=s.f
o=p.a
p=p.b
s.l(o,p)
m=s.a
o=p*s.b.b.a+o
if(!(o>=0&&o<m.length))return A.b(m,o)
o=m[o].x===0
s=o}else s=!1
if(!s)continue
B.a.j(h,q)}i=b.y
s=$.n()
t.ez.a(h)
s=s.U(h.length)
if(!(s>=0&&s<h.length))return A.b(h,s)
return new A.lA(i.F(0,h[s]),b.Q)},
t(a){return"Spawn rate: "+this.a}}
A.re.prototype={
$1(a){var s,r,q=this.a.x
q===$&&A.c()
s=this.b
r=s.y.F(0,this.c)
r=q.w.B(r.a,r.b)
return r!=null&&r instanceof A.ad&&r.Q===s.Q},
$S:9}
A.bF.prototype={
gbp(){return this.b*0.7},
bL(a,b){var s
if(b.at instanceof A.cG)return!0
s=a.y.y.S(0,b.y).gb4()
if(b.ay&&s<=1)return!1
return!0},
bW(a,b){return A.xu(this.b)},
t(a){return"Teleport "+this.b}}
A.k1.prototype={
gO(){return"Fairy Dust"},
gW(){return"A sprinkle of glimmering magic dazzles all nearby foes."}}
A.k5.prototype={
gO(){return"Flitter"},
gW(){return"Take flight and soar over the ground, at least until you get tired."}}
A.lh.prototype={
gO(){return"Quick Study"},
gW(){return"Gain 20% more experience when killing a monster."},
kv(a,b,c){return c*1.2}}
A.ly.prototype={
gO(){return"Single-minded"},
gW(){return"Reduce the focus lost when performing an ability by 30%."},
kw(a,b,c){if(c===0)return 0
c=B.e.bQ(c*0.7)
if(c===0)return 1
return c}}
A.di.prototype={
bq(a){return"Cast "+this.b+" spells better."},
gO(){return this.b},
gcI(){return this.c},
gW(){return this.d}}
A.jl.prototype={
gO(){return"Archery"},
gW(){return"Kill your foe without risking harm to yourself by unleashing a volley of arrows from far away."},
gcI(){return B.b3},
bq(a){return"Scales strike by "+A.qv(A.w(a,1,15,1,3),null)+"."}}
A.jt.prototype={
gO(){return"Battle Hardening"},
gW(){return"Years of taking hits have turned your skin as hard as cured leather."},
gcI(){return B.ay},
ku(a,b){return b+a.z.bU(this)*4},
bq(a){return"Increases armor by "+a*4+"."}}
A.ju.prototype={
gO(){return"Bloodlust"},
gW(){return"The more furious you are, the more deadly in combat you become."},
gcI(){return B.ay},
hG(a,b,c,d){d.cV(A.wB(a.Q.z.bU(this))*a.CW,"Bloodlust")},
bq(a){return"Increases damage by "+A.qv(A.wB(a),1)+" for each point of fury."}}
A.hx.prototype={
gcI(){return B.b4},
hG(a,b,c,d){if(c==null||c.a.r!==this.gby())return
d.cV(A.w(a.Q.z.bU(this),1,15,1.1,4),"mastery")},
bq(a){var s,r=A.qv(A.w(a,1,15,1.1,4)-1,null),q=this.gby()
if(0>=q.length)return A.b(q,0)
s=B.i.G("aeiou",q[0])?"an":"a"
return"Melee attacks inflict +"+r+" damage when using "+s+" "+this.gby()+"."}}
A.jo.prototype={
gO(){return"Axe Mastery"},
gW(){return"Axes are not just for woodcutting. In the hands of a skilled user, they can cut down a swath of nearby foes as well."},
gby(){return"axe"},
bq(a){return"TODO"}}
A.jv.prototype={
gO(){return"Bludgeoning"},
gW(){return"Bludgeons may not be the most sophisticated of weapons, but hitting someone really hard with a blunt object can often be an effective argument in your favor."},
gby(){return"club"},
bq(a){return this.im(a)+" Bashes the enemy away."}}
A.kF.prototype={
gO(){return"Knife Fighting"},
gW(){return"Small and easily concealed, knives are deadly in the hand of a skilled practitioner."},
gby(){return"knife"},
bq(a){return"TODO"}}
A.lB.prototype={
gO(){return"Spear Mastery"},
gW(){return"Your diligent study of spears and polearms lets you attack at a distance when wielding one."},
gby(){return"spear"},
bq(a){return"TODO"}}
A.lH.prototype={
gO(){return"Swordfighting"},
gW(){return"The most elegant tool for the most refined of martial arts."},
gby(){return"sword"},
bq(a){return this.im(a)+" Parrying increases dodge by "+B.e.P(A.w(a,1,15,5,30))+"."},
eV(a){return new A.S(this.oZ(a),t.cm)},
oZ(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l
return function $async$eV(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.Q
l=m.z.bU(s)
m=m.f.gcT(),n=J.au(m.a),m=new A.d5(n,m.b,m.$ti.i("d5<1>"))
case 2:if(!m.q()){q=3
break}q=n.gH().a.r==="sword"?4:5
break
case 4:q=6
return b.b=new A.aF(B.e.P(A.w(l,1,15,5,30)),"{1} parr[y|ies] {2}."),1
case 6:case 5:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}}}
A.m0.prototype={
gO(){return"Whip Mastery"},
gW(){return"Whips and flails are difficult to use well, but deadly even at a distance when mastered."},
gby(){return"whip"},
bq(a){return"TODO"}}
A.bR.prototype={
aN(){return"Region."+this.b}}
A.nG.prototype={
dM(a){return new A.S(this.oM(t.jJ.a(a)),t.e)},
oM(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$dM(a3,a4,a5){if(a4===1){o.push(a5)
q=p}for(;;)A:switch(q){case 0:for(n=s.b.f,m=n.b,l=A.ac(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.et()}f=A.zn(s.c)
d=f.length-1
for(;;){if(!(d>=0)){e=-1
break}if(f[d].w){e=d
break}--d}l=t.hY
c=A.a(B.hS.slice(0),l)
b=A.a([],l)
for(l=t.pj,d=0;d<f.length;++d)if(d===e||!f[d].w)B.a.j(b,B.cC)
else B.a.j(b,$.n().l1(0,c,l))
d=0
case 3:if(!(d<f.length)){q=5
break}l=f[d]
if(!(d<b.length)){A.b(b,d)
q=1
break}h=b[d]
a0=l.r.$0()
a0.a!==$&&A.ax()
a0.a=s
a0.b!==$&&A.ax()
a0.b=l
a0.c!==$&&A.ax()
a0.c=h
q=6
return a3.aO(a0.b0())
case 6:case 4:++d
q=3
break
case 5:for(m=J.au(m.l5());m.q();){l=m.gH()
h=l.gn()
l=l.gp()
n.l(h,l)
h=l*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.by()}a1=A.a([],t.l)
q=7
return a3.aO(s.iU(a1))
case 7:q=8
return a3.aO(s.it(a1))
case 8:q=9
return a3.aO(s.iC(a1))
case 9:q=10
return a3.b="Ready to decorate",1
case 10:a2=new A.nX(s,A.D(t.aT,t.A),A.bb(t.P))
q=11
return a3.aO(a2.k5())
case 11:n=a2.b
n===$&&A.c()
r.$1(n)
case 1:return 0
case 2:return a3.c=o.at(-1),3}}}},
dz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.b.f,f=g.B(b,c)
f.a=d==null?$.cE():d;++this.e
f=this.d
f.aZ(b,c,a)
for(s=f.b,r=g.a,q=g.b.b.a,p=r.length,o=f.$ti.c,n=f.a,m=s.b.a,l=0;l<8;++l){k=B.a6[l]
j=k.c+b
i=k.d+c
if(s.G(0,new A.e(j,i))){g.l(j,i)
h=i*q+j
if(!(h>=0&&h<p))return A.b(r,h)
h=r[h].a!==$.dg()}else h=!1
if(h){o.a(a)
f.l(j,i)
B.a.h(n,i*m+j,a)}}},
dv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b.f,c=d.b
if(!c.G(0,b))return!1
s=this.d
r=b.a
q=b.b
if(s.B(r,q)!=null)return!1
if(d.B(r,q).a===$.dg())return!1
for(r=b.gbD(),q=r.length,p=s.a,o=s.b.b.a,n=p.length,m=d.a,l=c.b.a,k=m.length,j=0;j<q;++j){i=r[j]
if(!c.G(0,i))continue
h=i.a
g=i.b
d.l(h,g)
f=g*l+h
if(!(f>=0&&f<k))return A.b(m,f)
if(m[f].a===$.dg())continue
s.l(h,g)
h=g*o+h
if(!(h>=0&&h<n))return A.b(p,h)
e=p[h]
if(e!=null&&e!==a)return!1}return!0},
iU(a){return new A.S(this.mD(t.A.a(a)),t.e)},
mD(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
return function $async$iU(b2,b3,b4){if(b3===1){o.push(b4)
q=p}for(;;)A:switch(q){case 0:b0=t.l
b1=A.a([],b0)
for(n=s.b,m=n.f,l=m.b,k=A.ac(l.bR(-1)),j=m.a,i=l.b,h=i.a,g=j.length,l=l.a,f=l.a,e=f+h,l=l.b,i=i.b,d=l+i,c=0,b=B.al,a0=99999;k.q();){a1=k.b
a2=k.c
a3=new A.e(a1,a2)
m.l(a1,a2)
a1=a2*h+a1
if(!(a1>=0&&a1<g)){A.b(j,a1)
q=1
break A}a4=j[a1].a
if(a4===$.cE()){++c
a1=a3.S(0,new A.e(B.c.A(Math.min(f,e)+Math.max(f,e),2),B.c.A(Math.min(l,d)+Math.max(l,d),2)))
a5=Math.abs(a1.a)+Math.abs(a1.b)
if(a5<a0){a0=a5
b=a3}}else if(!(a4!==$.et()&&a4!==$.dg()))B.a.j(b1,a3)}l=$.n()
B.a.bM(t.A.a(b1),l.a)
l=t.S
k=h*i
f=A.am(k,-2,!1,l)
e=t.C
d=new A.aa(f,new A.a0(new A.e(0,0),new A.e(h,i)),e)
a6=new A.qG(n,b,d,new A.lW(new A.aa(A.am(k,0,!1,l),new A.a0(new A.e(0,0),new A.e(h,i)),e),h,i),B.ci)
a6.ci(b,0)
a6.jk(A.a([b],b0))
b0=b1.length,a7=0,a8=0
case 3:if(!(a8<b1.length)){q=5
break}a3=b1[a8]
n=a3.gn()
l=a3.gp()
m.l(n,l)
n=l*h+n
if(!(n>=0&&n<g)){A.b(j,n)
q=1
break}n=j[n]
l=n.a
i=l===$.et()
if(!i&&l!==$.dg()){q=4
break}if(i)n.a=$.by()
else if(l===$.dg())n.a=$.df()
n=a3.gn()
l=a3.gp()
d.l(n,l)
n=l*h+n
if(!(n>=0&&n<k)){A.b(f,n)
q=1
break}n=f[n]
if(typeof n!=="number"){n.cU()
q=1
break}if(!(n>=0)){q=4
break}a6.pa(a3)
if(a6.e!==c){s.j4(r,a3)
a6.pR()}a9=a7+1
q=B.c.ab(a7,20)===0?6:7
break
case 6:q=8
return b2.b=a3.t(0),1
case 8:case 7:a7=a9
case 4:b1.length===b0||(0,A.o)(b1),++a8
q=3
break
case 5:case 1:return 0
case 2:return b2.c=o.at(-1),3}}}},
it(a){return new A.S(this.lR(t.A.a(a)),t.e)},
lR(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3
return function $async$it(a4,a5,a6){if(a5===1){o.push(a6)
q=p}for(;;)A:switch(q){case 0:a3=A.a([],t.hw)
for(n=s.b.f,m=n.b,l=A.ac(m.bR(-1)),k=n.a,m=m.b.a,j=k.length;l.q();){i=l.b
h=l.c
g=new A.e(i,h)
n.l(i,h)
i=h*m+i
if(!(i>=0&&i<j)){A.b(k,i)
q=1
break A}f=k[i].a
i=$.cE()
if(!(f===i||f===$.cF()||f===$.es()))continue
for(e=0;e<4;++e){d=B.au[e]
h=g.F(0,d.gbG())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cF()||f===$.es()))continue
h=g.F(0,d.gb9())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
h=$.by()
if(!(f===h||f===$.df()))continue
c=g.F(0,d)
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.b(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.df()))continue
c=g.F(0,d.gba())
b=c.a
c=c.b
n.l(b,c)
b=c*m+b
if(!(b>=0&&b<j)){A.b(k,b)
q=1
break A}f=k[b].a
if(!(f===h||f===$.df()))continue
h=g.F(0,d.gbX())
c=h.a
h=h.b
n.l(c,h)
c=h*m+c
if(!(c>=0&&c<j)){A.b(k,c)
q=1
break A}f=k[c].a
if(!(f===i||f===$.cF()||f===$.es()))continue
B.a.j(a3,new A.iB(g,d))}}n=$.n()
B.a.bM(t.pa.a(a3),n.a)
a0=n.bs(5,40)
n=a3.length,a1=0,e=0
case 3:if(!(e<a3.length)){q=5
break}a2=a3[e]
if(!s.of(r,a2.a,a2.b)){q=4
break}q=6
return a4.b="Shortcut",1
case 6:++a1
if(a1>=a0){q=5
break}case 4:a3.length===n||(0,A.o)(a3),++e
q=3
break
case 5:case 1:return 0
case 2:return a4.c=o.at(-1),3}}}},
of(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
t.A.a(a)
s=A.a([],t.l)
r=b.F(0,c)
for(q=this.b,p=q.f,o=p.a,n=p.b,m=n.b.a,l=o.length;;r=k){B.a.j(s,r)
k=r.F(0,c)
if(!n.G(0,k))return!1
j=k.a
i=k.b
p.l(j,i)
j=i*m+j
if(!(j>=0&&j<l))return A.b(o,j)
h=o[j].a
if(h===$.cE()||h===$.cF()||h===$.es()){p=s.length
o=$.n()
if(!new A.ty(p*2+(o.a.a3(8)+8),q,b,k).fq()){for(q=s.length,g=0;g<s.length;s.length===q||(0,A.o)(s),++g)this.j4(a,s[g])
return!0}return!1}j=k.F(0,c.gbG())
i=j.a
j=j.b
p.l(i,j)
i=j*m+i
if(!(i>=0&&i<l))return A.b(o,i)
h=o[i].a
j=$.by()
if(!(h===j||h===$.df()))return!1
i=k.F(0,c.gbX())
f=i.a
i=i.b
p.l(f,i)
f=i*m+f
if(!(f>=0&&f<l))return A.b(o,f)
h=o[f].a
if(!(h===j||h===$.df()))return!1
j=$.n()
i=s.length
if(j.a.a3(100)<i*10)return!1}},
j4(a,b){var s,r,q
t.A.a(a)
s=this.b.f.B(b.gn(),b.gp())
r=s.a
if(r===$.by())s.a=$.cF()
else if(r===$.df())s.a=$.es()
q=this.d.B(b.gn(),b.gp())
if(q==null)B.a.j(a,b)
else this.iB(b,q)},
iC(a){return new A.S(this.m5(t.A.a(a)),t.e)},
m5(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2,a3,a4,a5,a6
return function $async$iC(a7,a8,a9){if(a8===1){o.push(a9)
q=p}for(;;)A:switch(q){case 0:n=s.d,m=n.a,l=n.b.b.a,k=m.length,j=t.dr,i=n.$ti.c,h=t.hA,g=t.l
case 3:f=A.a([],g)
for(e=r.length,d=0;d<r.length;r.length===e||(0,A.o)(r),++d){c=r[d]
b=A.a([],j)
for(a0=c.gbD(),a1=a0.length,a2=0;a2<a0.length;a0.length===a1||(0,A.o)(a0),++a2){a3=a0[a2]
a4=a3.a
a5=a3.b
n.l(a4,a5)
a4=a5*l+a4
if(!(a4>=0&&a4<k)){A.b(m,a4)
q=1
break A}a6=m[a4]
if(a6!=null)B.a.j(b,a6)}a0=b.length
if(a0!==0){a1=$.n()
h.a(b)
a0=a1.a.a3(a0)
if(!(a0>=0&&a0<b.length)){A.b(b,a0)
q=1
break A}a6=b[a0]
i.a(a6)
a0=c.gn()
a1=c.gp()
n.l(a0,a1)
B.a.h(m,a1*l+a0,a6)
s.iB(c,a6)}else B.a.j(f,c)}if(f.length===0){q=5
break}q=6
return a7.b="Claim",1
case 6:case 4:r=f
q=3
break
case 5:case 1:return 0
case 2:return a7.c=o.at(-1),3}}}},
iB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.gbD(),r=s.length,q=this.d,p=q.a,o=q.b.b.a,n=p.length,m=q.$ti.c,l=0;l<s.length;s.length===r||(0,A.o)(s),++l){k=s[l]
j=k.a
i=k.b
q.l(j,i)
h=i*o+j
if(!(h>=0&&h<n))return A.b(p,h)
if(p[h]==null){m.a(b)
q.l(j,i)
B.a.h(p,h,b)}}}}
A.iB.prototype={}
A.bj.prototype={
gfe(){return $.vV()},
fw(a){return!1}}
A.ty.prototype={
hO(a){if(a.c>=this.d)return!1
return null},
hQ(a){return!0},
fz(a,b){var s=$.bL()
if((b.a.e.a&s.a)!==0)return 1
return null},
i3(){return!1}}
A.fX.prototype={}
A.u2.prototype={
$0(){return new A.eI(this.a)},
$S:58}
A.tY.prototype={
$0(){return new A.eB(0.3,8,32)},
$S:59}
A.tZ.prototype={
$0(){return new A.eC()},
$S:60}
A.uf.prototype={
$0(){return new A.eX()},
$S:61}
A.us.prototype={
$0(){return new A.fh()},
$S:62}
A.ue.prototype={
$0(){return A.zU(5)},
$S:63}
A.um.prototype={
$0(){var s=A.a([],t.l)
return new A.f6(this.a,12,24,s)},
$S:64}
A.eB.prototype={
b0(){return new A.S(this.oE(),t.e)},
oE(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
return function $async$b0(a6,a7,a8){if(a7===1){p.push(a8)
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
break}h=A.nM(B.e.N(Math.pow($.n().aF(l,m),2)))
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
break}a=$.n()
a=a.a
a4=a.a3(a3-a0)
r=s.m1(h,a4+a0,a.a3(a2-a1)+a1)?7:8
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
m1(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ac(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.b(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dv(k,new A.e(n+b,m+c)))return!1}}for(s=A.ac(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.b(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dz(k,r+b,n+c,null)}}return!0}}
A.eC.prototype={
b0(){return new A.S(this.oF(),t.e)},
oF(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$b0(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=s.a
a8===$&&A.c()
o=a8.b.f.b.b
n=o.a
o=o.b
m=t.fU
l=new A.a0(new A.e(0,0),new A.e(n,o))
k=n*o
j=A.am(k,null,!1,m)
i=t.eJ
h=new A.aa(j,l,i)
g=new A.aa(A.am(k,null,!1,m),new A.a0(new A.e(0,0),new A.e(n,o)),i)
for(o=A.ac(l);o.q();){m=o.b
l=o.c
f=new A.e(m,l)
if(!a8.dv(s,f))continue
k=$.n().aS(1)
i=s.c
i===$&&A.c()
i=s.me(i,f)
h.l(m,l)
B.a.h(j,l*n+m,k<i)}e=0
case 3:if(!(e<4)){r=5
break}for(o=h.b,n=o.a,n=new A.cW(o,n.a-1,n.b),m=g.$ti.c,l=g.a,k=g.b.b.a,j=h.a,i=o.b.a,c=j.length;n.q();){b=n.b
a=n.c
h.l(b,a)
a0=a*i+b
if(!(a0>=0&&a0<c)){A.b(j,a0)
r=1
break A}if(j[a0]==null)continue
for(a1=new A.e(b,a).gbD(),a2=a1.length,a3=0,a4=0;a4<a1.length;a1.length===a2||(0,A.o)(a1),++a4){a5=a1[a4]
if(o.G(0,a5)){a6=a5.a
a7=a5.b
h.l(a6,a7)
a6=a7*i+a6
if(!(a6>=0&&a6<c)){A.b(j,a6)
r=1
break A}a6=!J.a9(j[a6],!1)}else a6=!0
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
case 5:for(o=h.b,n=A.ac(o),m=h.a,o=o.b.a,l=m.length;n.q();){k=n.b
j=n.c
h.l(k,j)
i=j*o+k
if(!(i>=0&&i<l)){A.b(m,i)
r=1
break A}if(J.a9(m[i],!1))a8.dz(s,k,j,null)}case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
me(a,b){var s,r,q,p=this
switch(a.a){case 0:return 0.45
case 1:s=p.a
s===$&&A.c()
return A.w(b.b,0,s.b.f.b.b.b,0.3,0.7)
case 2:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
return A.w(Math.max(r-b.a-1,b.b),0,Math.min(r,s.b),0.3,0.7)
case 3:s=p.a
s===$&&A.c()
return A.w(b.a,0,s.b.f.b.b.a,0.3,0.7)
case 4:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.a
s=s.b
return A.w(Math.max(r-b.a-1,s-b.b-1),0,Math.min(r,s),0.3,0.7)
case 5:s=p.a
s===$&&A.c()
return A.w(b.b,0,s.b.f.b.b.b,0.7,0.3)
case 6:s=p.a
s===$&&A.c()
s=s.b.f.b.b
r=s.b
return A.w(Math.max(b.a,r-b.b-1),0,Math.min(s.a,r),0.3,0.7)
case 7:s=p.a
s===$&&A.c()
return A.w(b.a,0,s.b.f.b.b.a,0.7,0.3)
case 8:q=Math.max(b.a,b.b)
s=p.a
s===$&&A.c()
s=s.b.f.b.b
return A.w(q,0,Math.min(s.a,s.b),0.3,0.7)}}}
A.nX.prototype={
k5(){return new A.S(this.oX(),t.e)},
oX(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
return function $async$k5(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)A:switch(r){case 0:s.mG()
for(o=s.a,n=o.b,m=n.f,l=m.b,k=A.ac(l),o=o.d,j=o.a,i=o.b.b.a,h=j.length,g=s.c;k.q();){f=k.b
e=k.c
o.l(f,e)
d=e*i+f
if(!(d>=0&&d<h)){A.b(j,d)
r=1
break A}J.wu(g.b7(j[d],new A.o0()),new A.e(f,e))}s.nt()
r=3
return a0.aO(s.jg())
case 3:c=$.n().bs(2,4)
for(o=m.a,l=l.b.a,k=o.length,b=0;b<c;++b){a=n.ke()
j=a.a
i=a.b
m.l(j,i)
j=i*l+j
if(!(j>=0&&j<k)){A.b(o,j)
r=1
break A}o[j].a=$.uN()}o=n.ke()
s.b!==$&&A.ax()
s.b=o
r=4
return a0.aO(s.js())
case 4:r=5
return a0.aO(s.iS())
case 5:case 1:return 0
case 2:return a0.c=p.at(-1),3}}}},
mG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.a([],t.l)
for(s=this.a.b.f,r=s.b,q=A.ac(r.bR(-1)),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.e(n,m)
s.l(n,m)
k=m*r+n
if(!(k>=0&&k<o))return A.b(p,k)
if(p[k].a!==$.cF())continue
for(j=0;j<4;++j){i=B.au[j]
h=l.F(0,i)
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g].a
h=$.cE()
if(g!==h)continue
g=l.F(0,i.gcP())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.b(p,f)
e=p[f].a
if(e!==h&&e!==$.cF()&&e!==$.j2())continue
h=l.F(0,i.gbG())
g=h.a
h=h.b
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
g=p[g].a
h=$.by()
if(g!==h)continue
g=l.F(0,i.gbX())
f=g.a
g=g.b
s.l(f,g)
f=g*r+f
if(!(f>=0&&f<o))return A.b(p,f)
if(p[f].a!==h)continue
s.l(n,m)
p[k].a=$.j2()
B.a.j(a,l)
break}}q=$.n()
B.a.bM(t.A.a(a),q.a)
for(q=a.length,j=0;j<a.length;a.length===q||(0,A.o)(a),++j){d=a[j]
n=d.gn()
m=d.gp()
s.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.b(p,n)
n=p[n].a
m=$.j2()
if(n!==m)continue
for(n=d.gdN(),k=n.length,c=0;c<n.length;n.length===k||(0,A.o)(n),++c){b=n[c]
h=b.a
g=b.b
s.l(h,g)
h=g*r+h
if(!(h>=0&&h<o))return A.b(p,h)
if(p[h].a===m){h=$.n()
h=h.a.a3(2)===0?d:b
g=h.gn()
h=h.gp()
s.l(g,h)
g=h*r+g
if(!(g>=0&&g<o))return A.b(p,g)
p[g].a=$.cF()}}}},
nt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(s=this.c,s=new A.br(s,A.y(s).i("br<1,2>")).gL(0),r=this.a;s.q();){q=s.d
p=q.a
o=$.vV()
if(p!=null)o=p.gfe()
n=new A.hG(this,r,p)
for(m=J.au(q.b),l=r.b.f,k=l.a,j=l.b.b.a,i=k.length;m.q();){h=m.gH()
g=o.pw(n,h)
f=h.gn()
h=h.gp()
l.l(f,h)
f=h*j+f
if(!(f>=0&&f<i))return A.b(k,f)
k[f].a=g;++n.d}}},
jg(){return new A.S(this.nv(),t.e)},
nv(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
return function $async$jg(a5,a6,a7){if(a6===1){p.push(a7)
r=q}for(;;)switch(r){case 0:o=s.c,o=new A.br(o,A.y(o).i("br<1,2>")).gL(0),n=s.a,m=n.c,l=t.A
case 3:if(!o.q()){r=4
break}k=o.d
j=k.a
if(j==null){r=3
break}i=J.jg(k.b)
h=$.n()
B.a.bM(l.a(i),h.a)
g=new A.hG(s,n,j)
f=i.length
e=j.b
e===$&&A.c()
f*=e.c
d=B.e.bQ(f)
if(h.aS(1)<f-d)++d
c=B.e.aV(h.aF(d*0.8,d*1.2))
b=0
case 5:a=b+1
if(!(b<c&&g.d<c)){r=6
break}a0=A.zB(m,e.b)
if(a0==null){r=7
break}a1=0
case 8:if(!(a1<i.length)){r=10
break}a2=i[a1]
if(!a0.oP(g,a2)){r=9
break}a0.pz(g,a2)
h=$.n()
a3=i.length
a4=h.a.a3(a3-a1)+a1
h=i.length
if(!(a4>=0&&a4<h)){A.b(i,a4)
r=1
break}f=i[a4]
if(!(a1<h)){A.b(i,a1)
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
js(){return new A.S(this.nW(),t.e)},
nW(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$js(a9,b0,b1){if(b0===1){p.push(b1)
r=q}for(;;)A:switch(r){case 0:a8=A.bb(t.g_)
for(o=s.c,o=new A.c8(o,o.r,o.e,A.y(o).i("c8<1>")),n=s.a;o.q();){m=o.d
if(m==null)continue
if(m.fw(new A.hG(s,n,m)))a8.j(0,m)}o=n.b
m=o.f
l=m.b
k=l.b
j=k.a
k=k.b
i=new A.jR(new A.aa(A.am(j*k,0,!1,t.S),new A.a0(new A.e(0,0),new A.e(j,k)),t.C))
k=s.b
k===$&&A.c()
h=A.cv(o,k,$.vS(),!1,null,null)
for(o=A.ac(l.bR(-1)),l=n.d,k=l.a,g=l.b.b.a,f=k.length;o.q();){e=o.b
d=o.c
c=new A.e(e,d)
l.l(e,d)
e=d*g+e
if(!(e>=0&&e<f)){A.b(k,e)
r=1
break A}e=k[e]
if(e==null)continue
if(a8.G(0,e))continue
b=h.ck(c)
if(b==null)continue
if(b<10)continue
d=Math.sqrt(b-10)
e=e.b
e===$&&A.c()
i.h(0,c,B.e.N((4+d)*e.e))}o=i.c
e=$.n()
a=o*0.03*e.aF(1,1.4)
o=m.a,d=o.length,n=n.c,a0=t.m,a1=0
case 3:if(!(a1<a)){r=4
break}c=i.eT()
if(c==null){r=4
break}a2=c.a
a3=c.b
l.l(a2,a3)
a4=a3*g+a2
if(!(a4>=0&&a4<f)){A.b(k,a4)
r=1
break}a4=k[a4].b
a4===$&&A.c()
a4=a0.a(a4.d)
a5=a4.length
a6=e.a.a3(a5)
if(!(a6>=0&&a6<a4.length)){A.b(a4,a6)
r=1
break}a7=a4[a6]
a6=$.cj().l8(n,a7)
a6.toString
m.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<d)){A.b(o,a2)
r=1
break}if((o[a2].a.e.a&a6.at.a)===0){r=3
break}if(!s.fK(a6)){r=3
break}a8=s.hc(i,c,a6)
r=5
return a9.b="Spawned monster",1
case 5:a1+=a8
r=3
break
case 4:case 1:return 0
case 2:return a9.c=p.at(-1),3}}}},
jY(a,b,c){var s
for(;;){s=$.cj().dj(a,b,c)
s.toString
if(this.fK(s))return s}},
fK(a){if(!a.ax.f)return!0
if(this.a.a.ek(a)>0)return!1
if(this.d.G(0,a))return!1
return!0},
hc(a,b,c){var s,r,q,p,o,n,m,l=null,k={},j=!c.ax.f&&$.n().U(10)===0
k.a=0
s=new A.o_(k,this,j,a)
r=c.lv()
if(0>=r.length)return A.b(r,0)
s.$2(r[0],b)
for(q=A.As(r,1,l,A.N(r).c),p=q.$ti,q=new A.c9(q,q.gI(0),p.i("c9<aH.E>")),o=this.a.b,p=p.i("aH.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=A.cv(o,b,n.at,l,l,l).gcM().hz(0,new A.nY(),new A.nZ())
if(m.X(0,new A.e(-1,-1)))break
s.$2(n,m)}return k.a},
iS(){return new A.S(this.mw(),t.e)},
mw(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
return function $async$iS(a7,a8,a9){if(a8===1){p.push(a9)
r=q}for(;;)A:switch(r){case 0:a1=s.a
a2=a1.b
a3=a2.f
a4=a3.b
a5=a4.b
a6=a5.a
a5=a5.b
o=new A.jR(new A.aa(A.am(a6*a5,0,!1,t.S),new A.a0(new A.e(0,0),new A.e(a6,a5)),t.C))
a5=s.b
a5===$&&A.c()
n=A.cv(a2,a5,$.bL(),!1,null,null)
for(a4=A.ac(a4.bR(-1)),a5=a3.a,m=a5.length,l=a1.d,k=l.a,j=l.b.b.a,i=k.length;a4.q();){h=a4.b
g=a4.c
f=new A.e(h,g)
l.l(h,g)
e=g*j+h
if(!(e>=0&&e<i)){A.b(k,e)
r=1
break A}e=k[e]
if(e==null)continue
d=n.ck(f)
if(d==null)continue
a3.l(h,g)
h=g*a6+h
if(!(h>=0&&h<m)){A.b(a5,h)
r=1
break A}if((a5[h].a.e.a&$.b3().a)===0)continue
h=Math.sqrt(d+1)
e=e.b
e===$&&A.c()
o.h(0,f,B.e.N((10+h)*e.f))}a1=a1.c
c=o.c*(0.05+(a1-1)*0.05)
c+=$.n().aS(c*0.2)
b=0
case 3:if(!(b<c)){r=4
break}f=o.eT()
if(f==null){r=4
break}a=a2.e5(f,$.ws().i1(a1).b,a1)
for(a3=a.length,a0=0;a0<a.length;a.length===a3||(0,A.o)(a),++a0)b+=Math.max(a[a0].gbg(),1)
o.kT(a2,f,$.bL(),3)
r=5
return a7.b="Spawned item",1
case 5:r=3
break
case 4:case 1:return 0
case 2:return a7.c=p.at(-1),3}}}}}
A.o0.prototype={
$0(){return A.a([],t.l)},
$S:48}
A.o_.prototype={
$2(a,b){var s=this,r=s.b,q=r.a.b
if(q.w.B(b.gn(),b.gp())!=null)return
if(!r.fK(a))return
if(a.ax.f)r.d.j(0,a)
if(s.c)q.e5(b,a.Q,a.c)
else{q.dJ(a.ii(b));++s.a.a
r=s.d
if(r!=null)r.kT(q,b,$.vS(),5)}},
$S:65}
A.nY.prototype={
$1(a){t.u.a(a)
return!0},
$S:1}
A.nZ.prototype={
$0(){return new A.e(-1,-1)},
$S:66}
A.jR.prototype={
h(a,b,c){var s=this,r=s.a,q=r.B(b.gn(),b.gp())
s.b=s.b-q+c
r.$ti.c.a(c)
r.aZ(b.gn(),b.gp(),c)
if(q===0&&c>0)++s.c
if(q>0&&c===0)--s.c},
eT(){var s,r,q,p,o,n,m,l,k,j=this.b
if(j===0)return null
s=$.n().U(j)
for(j=this.a,r=j.b,q=A.ac(r),p=j.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
l=new A.e(n,m)
j.l(n,m)
n=m*r+n
if(!(n>=0&&n<o))return A.b(p,n)
k=p[n]
if(s<k)return l
s-=k}throw A.m(A.bM("Unreachable."))},
kT(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
this.h(0,b,0)
s=A.cv(a,b,c,null,null,d)
for(r=s.gcM(),q=r.$ti,r=new A.aj(r.a(),q.i("aj<1>")),p=this.a,o=p.a,n=p.b.b.a,m=o.length,q=q.c;r.q();){l=r.b
if(l==null)l=q.a(l)
k=s.ck(l)
k.toString
j=l.gn()
i=l.gp()
p.l(j,i)
j=i*n+j
if(!(j>=0&&j<m))return A.b(o,j)
this.h(0,l,B.e.N(o[j]*(k/d)))}}}
A.eI.prototype={
gfe(){return $.yQ()},
b0(){return new A.S(this.oG(),t.e)},
oG(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b0(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)switch(r){case 0:a0=s.w
a1=0
case 2:o=s.a
o===$&&A.c()
n=o.b.f.b.b
m=n.a
n=n.b
if(!(o.e/((m-2)*(n-2))<0.25&&a1<100)){r=3
break}l=A.vb(o.c,a0)
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
b=i}f=$.n()
f=f.a
a=f.a3(b-e)
r=s.mx(l,a+e,f.a3(c-d)+d)?6:7
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
mx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this
t.o.a(a)
if(!h.jV(a,b,c))return!1
for(s=a.b,r=A.ac(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.b(q,o)
k=q[o]
o=k.a
if(!(o==null&&k.b===B.r)&&o!==$.by()&&k.b===B.r){n=h.a
n===$&&A.c()
n.dz(h,m,l,o)}else{n=$.by()
if(o===n){o=h.a
o===$&&A.c()
o=o.b.f
o.l(m,l)
j=o.a
i=l*o.b.b.a+m
if(!(i>=0&&i<j.length))return A.b(j,i)
if(j[i].a===$.et()){o.l(m,l)
j[i].a=n}}}}return!0}}
A.eW.prototype={
gfe(){return $.yR()},
b0(){return new A.S(this.oH(),t.e)},
oH(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:m=s.c
m===$&&A.c()
o=m===B.cC&&s.x==null?20:1
n=0
case 2:if(!(n<o)){r=4
break}r=5
return a.aO(s.iZ())
case 5:case 3:++n
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
fw(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.c.m(0,a.c)
i.toString
i=J.zl(i,new A.pQ(a))
s=A.a6(i,i.$ti.i("k.E"))
i=$.n().a
B.a.bM(t.A.a(s),i)
for(r=s.length,q=a.b.c,p=t.m,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
if(i.a3(20)!==0)continue
m=this.b
m===$&&A.c()
m=p.a(m.d)
l=m.length
k=i.a3(l)
if(!(k>=0&&k<m.length))return A.b(m,k)
j.hc(null,n,j.jY(q,null,m[k]))}return!0},
iZ(){return new A.S(this.mT(),t.e)},
mT(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g
return function $async$iZ(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:if(!s.oe()){r=1
break}o=s.r,n=o.c,m=o.b,l=s.x,k=l!=null
case 3:if(!(n.length!==0)){r=4
break}j=o.pM()
i=j.a
h=i.F(0,j.b)
g=s.a
g===$&&A.c()
if(!g.dv(s,h)){r=3
break}r=s.oc(j)?5:7
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
oe(){var s,r,q,p=this.a
p===$&&A.c()
s=A.vb(p.c,B.bz)
for(r=0;r<100;++r){q=this.nY(s)
if(this.jB(s,q.a,q.b))return!0}return!1},
nY(a){var s,r,q,p,o,n,m,l,k
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
switch(m){case 8:case 1:case 2:n=Math.max(1,B.e.N(s*0.25)-q)
break
case 6:case 5:case 4:l=B.e.N(s*0.75)
break
case 0:case 3:case 7:break}k=1
switch(m){case 8:case 7:case 6:o=Math.max(1,B.e.N(r*0.25)-p)
break
case 2:case 3:case 4:k=B.e.N(r*0.75)
break
case 0:case 1:case 5:break}if(o<k)o=k
if(n<l)n=l
s=$.n()
return new A.e(s.bs(k,o),s.bs(l,n))},
nA(a){var s=this,r=new A.pO(s),q=s.c
q===$&&A.c()
switch(q.a){case 0:q=1
break
case 1:q=s.a
q===$&&A.c()
q=A.w(a.b,0,q.b.f.b.b.b,2,-3)
break
case 2:q=s.a
q===$&&A.c()
q=r.$2(q.b.f.b.b.a-a.a-1,a.b)
break
case 3:q=s.a
q===$&&A.c()
q=A.w(a.a,0,q.b.f.b.b.a,-3,2)
break
case 4:q=s.a
q===$&&A.c()
q=q.b.f.b.b
q=r.$2(q.a-a.a-1,q.b-a.b-1)
break
case 5:q=s.a
q===$&&A.c()
q=A.w(a.b,0,q.b.f.b.b.b,-3,2)
break
case 6:q=s.a
q===$&&A.c()
q=r.$2(a.a,q.b.f.b.b.b-a.b-1)
break
case 7:q=s.a
q===$&&A.c()
q=A.w(a.a,0,q.b.f.b.b.a,2,-3)
break
case 8:q=r.$2(a.a,a.b)
break
default:q=null}return $.n().aS(1)<q},
oc(a){var s,r,q,p,o,n,m=this.a
m===$&&A.c()
s=A.vb(m.c,B.bz)
m=s.b
r=A.y(m)
q=r.i("ao<k.E>")
p=A.a6(new A.ao(m,r.i("z(k.E)").a(new A.pP(s,a.b.gcP())),q),q.i("k.E"))
m=$.n()
B.a.bM(t.A.a(p),m.a)
for(m=p.length,r=a.a,o=0;o<p.length;p.length===m||(0,A.o)(p),++o){n=r.S(0,p[o])
if(this.jB(s,n.a,n.b))return!0}return!1},
jB(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.o.a(a0)
if(!a.jV(a0,a1,a2))return!1
s=A.a([],t.fv)
for(r=a0.b,q=A.ac(r),p=a0.a,r=r.b.a,o=p.length,n=a.r,m=n.b,n=n.c;q.q();){l=q.b
k=q.c
j=l+a1
i=k+a2
h=new A.e(j,i)
a0.l(l,k)
l=k*r+l
if(!(l>=0&&l<o))return A.b(p,l)
g=p[l]
l=g.b
if(l!==B.r){if(a.nA(h))B.a.j(s,new A.eV(h,l))}else{l=g.a
if(l!=null)k=l!==$.by()
else k=!1
if(k){k=a.a
k===$&&A.c()
k.dz(a,j,i,l)}else{k=$.by()
if(l===k){l=a.a
l===$&&A.c()
l=l.b.f
l.l(j,i)
f=l.a
e=i*l.b.b.a+j
if(!(e>=0&&e<f.length))return A.b(f,e)
if(f[e].a===$.et()){l.l(j,i)
f[e].a=k}d=m.af(0,h)
if(d!=null)B.a.af(n,d)}}}}r=$.n()
B.a.bM(t.eF.a(s),r.a)
for(r=s.length,c=0;c<s.length;s.length===r||(0,A.o)(s),++c){d=s[c]
q=d.a
b=m.af(0,q)
if(b!=null)B.a.af(n,b)
m.h(0,q,d)
B.a.j(n,d)}return!0}}
A.pQ.prototype={
$1(a){t.u.a(a)
return(this.a.b.b.f.B(a.gn(),a.gp()).a.e.a&$.b3().a)!==0},
$S:1}
A.pO.prototype={
$2(a,b){var s=this.a.a
s===$&&A.c()
s=s.b.f.b.b
return A.w(a+b,0,s.a+s.b,2,-3)},
$S:67}
A.pP.prototype={
$1(a){t.u.a(a)
return this.a.B(a.gn(),a.gp()).b===this.b},
$S:1}
A.eV.prototype={}
A.rP.prototype={
aN(){return"TakeFrom."+this.b}}
A.pN.prototype={
pM(){var s,r=this
switch(r.a.a){case 0:s=r.c
if(0>=s.length)return A.b(s,-1)
s=s.pop()
break
case 1:s=B.a.dh(r.c,0)
break
case 2:s=$.n().l1(0,r.c,t.d2)
break
default:s=null}r.b.af(0,s.a);++s.c
return s}}
A.eX.prototype={
b0(){return new A.S(this.oI(),t.e)},
oI(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$b0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:n=$.n()
m=n.aC(1,2)
o=0
case 2:if(!(o<m)){r=4
break}s.nw(A.nM(n.a.a3(16)+16))
r=5
return a.b="Placing lake",1
case 5:case 3:++o
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
nw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.b.a(a)
s=$.n()
r=this.a
r===$&&A.c()
q=r.b.f
p=q.b.b
o=p.a
n=a.b
m=n.b
l=m.a
k=s.bs(0,o-l)
j=s.bs(0,p.b-m.b)
for(s=A.ac(n),p=a.a,n=p.length,m=q.a,i=m.length,r=r.d,h=r.$ti.c,g=r.a,f=r.b.b.a;s.q();){e=s.b
d=s.c
a.l(e,d)
c=d*l+e
if(!(c>=0&&c<n))return A.b(p,c)
if(p[c]){e+=k
d+=j
q.l(e,d)
c=d*o+e
if(!(c>=0&&c<i))return A.b(m,c)
m[c].a=$.dg()
h.a(this)
r.l(e,d)
B.a.h(g,d*f+e,this)}}}}
A.hG.prototype={}
A.qx.prototype={
pw(a,b){var s,r,q,p=this,o=a.b.b.f.B(b.gn(),b.gp()).a
if(o===$.cE()||o===$.cF())return p.fV()
if(o===$.by()){s=p.b
if(s!=null){r=$.n()
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.b(s,r)
return s[r]}s=$.n()
r=t.p.a($.yP())
s=s.U(3)
if(!(s>=0&&s<3))return A.b(r,s)
return r[s]}if(o===$.j2()){s=p.c
r=s!=null
if(r&&p.d!=null){q=$.n().U(6)
A:{if(0===q){s=p.d
if(s==null)s=t.U.a(s)
break A}if(1===q){s=p.fV()
break A}break A}return s}else if(r)return s
else{s=p.d
if(s!=null)return s
else return p.fV()}}s=$.yO()
if(s.ah(o)){r=$.n()
s=s.m(0,o)
s.toString
t.p.a(s)
r=r.U(1)
if(!(r>=0&&r<1))return A.b(s,r)
return s[r]}return o},
fV(){var s,r=this.a
if(r!=null){s=$.n()
t.p.a(r)
s=s.U(1)
if(!(s>=0&&s<1))return A.b(r,s)
return r[s]}return $.j3()}}
A.f6.prototype={
gfe(){return $.yS()},
b0(){return new A.S(this.oJ(),t.e)},
oJ(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
return function $async$b0(a2,a3,a4){if(a3===1){p.push(a4)
r=q}for(;;)A:switch(r){case 0:o=s.e,n=s.f,m=0
case 3:if(!(m<20)){r=5
break}l=$.n()
k=A.nM(l.a.a3(n-o)+o)
l=s.a
l===$&&A.c()
j=s.jA(k,l.b.f.b)
r=j!=null?6:7
break
case 6:r=8
return a2.b="pit",1
case 8:for(l=k.b,i=l.a,i=new A.cW(l,i.a-1,i.b),h=k.a,l=l.b.a,g=h.length,f=s.r,e=j.a,d=e.a,c=j.b,b=d+c.a,e=e.b,c=e+c.b;i.q();){a=i.b
a0=i.c
k.l(a,a0)
a1=a0*l+a
if(!(a1>=0&&a1<g)){A.b(h,a1)
r=1
break A}if(h[a1])B.a.j(f,new A.e(a,a0).F(0,new A.e(Math.min(d,b),Math.min(e,c))))}r=9
return a2.aO(s.jf(j))
case 9:r=1
break
case 7:case 4:++m
r=3
break
case 5:case 1:return 0
case 2:return a2.c=p.at(-1),3}}}},
fw(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=a6.b,a5=B.e.aV(a4.c*$.n().aF(1,1.4))
for(s=this.r,r=s.length,q=this.d,p=a6.a,a4=a4.b,o=a4.w,n=o.a,m=o.b.b.a,l=n.length,a4=a4.f,k=a4.a,j=a4.b.b.a,i=k.length,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){g=s[h]
f=g.a
e=g.b
a4.l(f,e)
d=e*j+f
if(!(d>=0&&d<i))return A.b(k,d)
d=k[d].a
c=$.b3().a
if((d.e.a&c)===0)continue
d=g.gbD()
a=d.length
a0=0
for(;;){if(!(a0<a)){b=!0
break}a1=d[a0]
a2=a1.a
a3=a1.b
a4.l(a2,a3)
a2=a3*j+a2
if(!(a2>=0&&a2<i))return A.b(k,a2)
if((k[a2].a.e.a&c)===0){b=!1
break}++a0}if(!b)continue
o.l(f,e)
f=e*m+f
if(!(f>=0&&f<l))return A.b(n,f)
if(n[f]!=null)continue
p.hc(null,g,p.jY(a5,!1,q))}return!0},
jA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
t.b.a(a)
s=b.b
r=s.a
q=a.b.b
p=q.a
if(r<p)return null
s=s.b
q=q.b
if(s<q)return null
for(o=b.a,n=o.b,s=n+s,o=o.a,r=o+r,m=0;m<200;++m){l=$.n()
k=Math.min(o,r)
j=Math.max(o,r)
l=l.a
i=l.a3(j-p-k)+k
k=Math.min(n,s)
j=Math.max(n,s)
h=l.a3(j-q-k)+k
if(this.od(a,i,h))return new A.a0(new A.e(i,h),new A.e(p,q))}return null},
od(a,b,c){var s,r,q,p,o,n,m,l,k=this
t.b.a(a)
for(s=a.b,r=A.ac(s),q=a.a,p=s.b.a,o=q.length;r.q();){n=r.b
m=r.c
a.l(n,m)
l=m*p+n
if(!(l>=0&&l<o))return A.b(q,l)
if(q[l]){l=k.a
l===$&&A.c()
if(!l.dv(k,new A.e(n+b,m+c)))return!1}}for(s=A.ac(s);s.q();){r=s.b
n=s.c
a.l(r,n)
m=n*p+r
if(!(m>=0&&m<o))return A.b(q,m)
if(q[m]){m=k.a
m===$&&A.c()
m.dz(k,r+b,n+c,null)}}return!0},
jf(a){return new A.S(this.nu(a),t.e)},
nu(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$jf(a0,a1,a2){if(a1===1){o.push(a2)
q=p}for(;;)switch(q){case 0:n=r.a,m=n.a,l=r.b,k=m+l.a,n=n.b,l=n+l.b,j=0
case 2:if(!(j<8)){q=4
break}i=$.n()
h=A.nM(i.a.a3(4)+6)
i=h.b.b
g=i.a
f=Math.min(m,k)-g
i=i.b
e=Math.min(n,l)-i
d=Math.max(m,k)
c=Math.max(n,l)
b=s.a
b===$&&A.c()
q=s.jA(h,A.xh(new A.a0(new A.e(f,e),new A.e(d+g-f,c+i-e)),b.b.f.b.bR(-1)))!=null?5:6
break
case 5:q=7
return a0.b="antechamber",1
case 7:case 6:case 3:++j
q=2
break
case 4:return 0
case 1:return a0.c=o.at(-1),3}}}}}
A.qG.prototype={
pa(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.hu(t.u),a4=a2.d;++a4.b
s=a4.a
r=s.b.b
q=r.a
a4.c=q
a4.d=0
a4.e=r.b
a4.f=0
r=a3.$ti.c
a3.bk(r.a(a5))
a4.j(0,a5)
p=a2.c
a2.f=A.a([new A.im(a5,p.B(a5.gn(),a5.gp()))],t.lv)
for(o=s.a,n=o.length,m=p.a,l=p.b.b.a,k=m.length;!a3.gaq(0);){j=a3.cO()
i=j.gn()
h=j.gp()
p.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.b(m,i)
g=m[i]
for(i=j.gdN(),h=i.length,f=g+1,e=0;e<i.length;i.length===h||(0,A.o)(i),++e){d=i[e]
c=d.a
b=d.b
p.l(c,b)
a=b*l+c
if(!(a>=0&&a<k))return A.b(m,a)
a0=m[a]
if(a0===-1)continue
p.l(c,b)
if(a0!==f)continue
s.l(c,b)
c=b*q+c
if(!(c>=0&&c<n))return A.b(o,c)
if(J.a9(o[c],a4.b))continue
if(a2.mV(d))continue
a3.bk(r.a(d))
a4.j(0,d)
B.a.j(a2.f,new A.im(d,a0))}}a2.ci(a5,-1)
a1=a2.mF(a5)
if(a1.a===0)for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.ci(r==null?s.a(r):r,-1)}else{for(a4=a4.gL(0),s=a4.$ti.c;a4.q();){r=a4.d
a2.ci(r==null?s.a(r):r,-2)}a2.ci(a5,-1)
a2.jk(a1)}},
pR(){var s,r,q,p
for(s=this.f,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
this.ci(p.a,p.b)}this.f=B.ci},
mV(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this.c,a=b.B(a0.gn(),a0.gp())
for(s=a0.gdN(),r=s.length,q=this.d,p=q.a,o=p.a,n=p.b.b.a,m=o.length,l=this.a.f.b,k=b.a,j=b.b.b.a,i=k.length,h=a-1,g=0;g<s.length;s.length===r||(0,A.o)(s),++g){f=s[g]
if(!l.G(0,f))continue
e=f.a
d=f.b
p.l(e,d)
c=d*n+e
if(!(c>=0&&c<m))return A.b(o,c)
if(!J.a9(o[c],q.b)){b.l(e,d)
e=d*j+e
if(!(e>=0&&e<i))return A.b(k,e)
e=J.a9(k[e],h)}else e=!1
if(e)return!0}return!1},
mF(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.bb(t.u)
for(s=this.d,r=s.gL(0),q=this.c,p=q.a,o=q.b.b.a,n=p.length,m=s.a,l=m.a,k=m.b.b.a,j=l.length,i=r.$ti.c;r.q();){h=r.d
if(h==null)h=i.a(h)
if(h.X(0,a0))continue
for(h=h.gdN(),g=h.length,f=0;f<h.length;h.length===g||(0,A.o)(h),++f){e=h[f]
d=e.a
c=e.b
q.l(d,c)
b=c*o+d
if(!(b>=0&&b<n))return A.b(p,b)
b=p[b]
if(typeof b!=="number")return b.cU()
if(b>=0){m.l(d,c)
d=c*k+d
if(!(d>=0&&d<j))return A.b(l,d)
d=!J.a9(l[d],s.b)}else d=!1
if(d)a.j(0,e)}}return a},
jk(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
t.cX.a(a2)
s=new A.cq(A.a([],t.k5),t.r)
for(r=J.au(a2),q=a1.c,p=q.a,o=q.b,n=o.b.a,m=p.length;r.q();){l=r.gH()
k=l.gn()
j=l.gp()
q.l(k,j)
k=j*n+k
if(!(k>=0&&k<m))return A.b(p,k)
s.b_(0,l,p[k])}for(r=a1.a.f,l=r.a,k=r.b.b.a,j=l.length;;){i=s.fg()
if(i==null)break
h=i.gn()
g=i.gp()
q.l(h,g)
h=g*n+h
if(!(h>=0&&h<m))return A.b(p,h)
f=p[h]
for(h=i.gdN(),g=h.length,e=f+1,d=0;d<h.length;h.length===g||(0,A.o)(h),++d){c=h[d]
if(!o.G(0,c))continue
b=c.a
a=c.b
q.l(b,a)
a0=a*n+b
if(!(a0>=0&&a0<m))return A.b(p,a0)
if(!J.a9(p[a0],-2))continue
r.l(b,a)
b=a*k+b
if(!(b>=0&&b<j))return A.b(l,b)
if((l[b].a.e.a&$.b3().a)!==0){a1.ci(c,e)
s.b_(0,c,e)}else a1.ci(c,-1)}}},
ci(a,b){var s,r=this
if(r.a.f.B(a.gn(),a.gp()).a===$.cE()){s=r.c.B(a.gn(),a.gp())
if(typeof s!=="number")return s.cU()
if(s>=0)--r.e
if(b>=0)++r.e}s=r.c
s.$ti.c.a(b)
s.aZ(a.gn(),a.gp(),b)}}
A.im.prototype={}
A.fh.prototype={
b0(){return new A.S(this.oK(),t.e)},
oK(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$b0(a,a0,a1){if(a0===1){p.push(a1)
r=q}for(;;)switch(r){case 0:b=s.a
b===$&&A.c()
o=b.b.f.b.b
n=o.b+2
m=o.a+2
l=new A.qT(s)
k=new A.qU(s)
j=new A.qR(s)
i=new A.qV(s)
h=new A.qS(s)
g=new A.qQ(s)
o=$.n()
f=o.U(6)
A:{if(0===f){e=new A.O(A.bT(-2,h.$0(),null,null),A.bT(m,h.$0(),null,null))
break A}if(1===f){e=new A.O(A.bT(g.$0(),-2,null,null),A.bT(g.$0(),n,null,null))
break A}if(2===f){e=new A.O(A.bT(i.$0(),-2,null,null),A.bT(m,k.$0(),null,null))
break A}if(3===f){e=new A.O(A.bT(m,l.$0(),null,null),A.bT(i.$0(),n,null,null))
break A}if(4===f){e=new A.O(A.bT(j.$0(),n,null,null),A.bT(-2,l.$0(),null,null))
break A}if(5===f){e=new A.O(A.bT(-2,k.$0(),null,null),A.bT(j.$0(),-2,null,null))
break A}e=A.a_(A.cd("Unreachable"))}d=b.b.f.b.b.a
b=b.b.f.b.b.b
c=A.bT(o.aF(d*0.4,d*0.6),o.aF(b*0.4,b*0.6),null,null)
s.eu(e.a,c)
s.eu(c,e.b)
return 0
case 1:return a.c=p.at(-1),3}}}},
eu(b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=b2.a,a6=b3.a,a7=a5-a6,a8=b2.b,a9=b3.b,b0=a8-a9,b1=Math.sqrt(a7*a7+b0*b0)
if(b1>1){s=$.n()
r=b1/2
q=s.aS(r)
p=b1/4
r=s.aS(r)
o=Math.min(2,p)
n=A.bT((a5+a6)/2+q-p,(a8+a9)/2+r-p,B.e.M((b2.c+b3.c)/2+s.aF(-o,o),0,4),(b2.d+b3.d)/2)
a4.eu(b2,n)
a4.eu(n,b3)
return}a6=b2.d
a9=b2.c+a6
m=B.e.bQ(a5-a9)
l=B.e.bQ(a8-a9)
k=B.e.aV(a5+a9)
j=B.e.aV(a8+a9)
s=a4.a
s===$&&A.c()
r=s.b.f
q=r.b.b
p=q.a
i=p-2
m=B.c.M(m,1,i)
q=q.b-2
l=B.c.M(l,1,q)
k=B.c.M(k,1,i)
j=B.c.M(j,1,q)
h=a9*a9
g=a6*a6
for(a6=r.a,a9=a6.length,s=s.d,q=s.$ti.c,i=s.a,f=s.b.b.a,e=l;e<=j;++e)for(d=a8-e,c=d*d,b=e*p,a=e*f,a0=m;a0<=k;++a0){a1=a5-a0
a2=a1*a1+c
if(a2<=g){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.b(a6,a3)
a6[a3].a=$.dg()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}else if(a2<=h){r.l(a0,e)
a3=b+a0
if(!(a3>=0&&a3<a9))return A.b(a6,a3)
if(a6[a3].a===$.et()){r.l(a0,e)
a6[a3].a=$.cE()
q.a(a4)
s.l(a0,e)
B.a.h(i,a+a0,a4)}}}}}
A.qT.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.2,r*0.4)},
$S:8}
A.qU.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.6,r*0.8)},
$S:8}
A.qR.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.6,r*0.8)},
$S:8}
A.qV.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.2,r*0.4)},
$S:8}
A.qS.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.b
return s.aF(r*0.2,r*0.8)},
$S:8}
A.qQ.prototype={
$0(){var s=$.n(),r=this.a.a
r===$&&A.c()
r=r.b.f.b.b.a
return s.aF(r*0.2,r*0.8)},
$S:8}
A.tC.prototype={
t(a){return A.J(this.a)+","+A.J(this.b)+" ("+A.J(this.d)+")"}}
A.lt.prototype={
jV(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.o.a(a)
for(s=a.b,r=A.ac(s),q=a.a,s=s.b.a,p=q.length;r.q();){o=r.b
n=r.c
m=o+b
l=n+c
a.l(o,n)
o=n*s+o
if(!(o>=0&&o<p))return A.b(q,o)
k=q[o]
o=k.a
n=o==null
if(!(n&&k.b===B.r)){j=this.a
j===$&&A.c()
j=!j.b.f.b.G(0,new A.e(m,l))}else j=!1
if(j)return!1
if(!(n&&k.b===B.r)&&o!==$.by()&&k.b===B.r){o=this.a
o===$&&A.c()
l=!o.dv(this,new A.e(m,l))
o=l}else o=!1
if(o)return!1}return!0}}
A.hR.prototype={
aN(){return"RoomShapes."+this.b}}
A.qX.prototype={
$1(a){var s,r=this.a.F(0,t.j.a(a)),q=this.b
if(!q.b.G(0,r))return!1
q=q.B(r.a,r.b)
s=q.a
return!(s==null&&q.b===B.r)&&s!==$.by()&&q.b===B.r},
$S:9}
A.e4.prototype={}
A.hS.prototype={
aN(){return"RoomSize."+this.b}}
A.rY.prototype={
dM(a){return new A.S(this.oN(t.jJ.a(a)),t.e)},
oN(a){var s=this
return function(){var r=a
var q=0,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dM(a2,a3,a4){if(a3===1){o.push(a4)
q=p}for(;;)A:switch(q){case 0:for(n=s.a.f,m=n.b,l=A.ac(m),k=n.a,j=m.b.a,i=k.length;l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}k[h].a=$.j3()}for(l=J.au(m.l5());l.q();){h=l.gH()
g=h.gn()
h=h.gp()
n.l(g,h)
g=h*j+g
if(!(g>=0&&g<i)){A.b(k,g)
q=1
break A}k[g].a=$.fO()}f=[$.w7(),$.wb(),$.wf(),$.wg(),$.wh(),$.wi(),$.wj(),$.wk()]
for(e=0;e<8;++e){d=B.c.ab(e,4)*13+5
l=B.c.A(e,4)
c=l*14+6
for(h=new A.cW(new A.a0(new A.e(d,c),new A.e(11,8)),d-1,c);h.q();){g=h.b
b=h.c
n.l(g,b)
g=b*j+g
if(!(g>=0&&g<i)){A.b(k,g)
q=1
break A}k[g].a=$.fO()}h=d+11
g=c+8
if((l&1)===1){l=Math.min(d,h)
g=Math.min(c,g)
g=new A.e(l,g).F(0,new A.e(Math.max(d,h),g))
a0=new A.e(B.c.A(g.a,2),B.c.A(g.b,2))}else{l=Math.min(d,h)
g=Math.max(c,g)
g=new A.e(l,g).F(0,new A.e(Math.max(d,h),g))
a0=new A.e(B.c.A(g.a,2),B.c.A(g.b,2)+-1)}l=a0.a
h=a0.b
n.l(l,h)
g=h*j
b=g+l
if(!(b>=0&&b<i)){A.b(k,b)
q=1
break A}k[b].a=f[e]
b=l+-1
n.l(b,h)
b=g+b
if(!(b>=0&&b<i)){A.b(k,b)
q=1
break A}b=k[b]
a1=$.uP()
b.a=a1;++l
n.l(l,h)
l=g+l
if(!(l>=0&&l<i)){A.b(k,l)
q=1
break A}k[l].a=a1}for(l=A.ac(m);l.q();){h=l.b
g=l.c
n.l(h,g)
h=g*j+h
if(!(h>=0&&h<i)){A.b(k,h)
q=1
break A}h=k[h]
h.fn(!0)
g=$.V()
if((h.a.e.a&g.a)!==0)h.f=B.c.M(h.f+64,0,192)}r.$1(m.ghm())
case 1:return 0
case 2:return a2.c=o.at(-1),3}}}}}
A.rV.prototype={
$1(a){return new A.f3(a)},
$S:69}
A.rU.prototype={
$1(a){return new A.f2(a)},
$S:70}
A.rT.prototype={
$2(a,b){a.e=192-b*12
return a.cE($.V())},
$S:71}
A.fn.prototype={
hl(a,b,c){var s,r,q,p,o
for(s=this.b,r=0;r<s.length;++r){q=s[r]
p=q.b.bl(b,a)
o=q.c.bl(c,a)
B.a.h(s,r,new A.Y(q.a,p,o))}return this},
oz(a,b,c,d){var s,r,q,p,o,n,m=this.b,l=B.a.gaB(m)
for(s=l.b,r=l.c,q=l.a,p=1;p<a;++p){o=s.bl(c,A.w(p,0,a,0,b))
n=r.bl(d,A.w(p,0,a,0,b))
B.a.j(m,new A.Y(q,o,n))}return this},
eY(a){this.e=a
return this},
bw(a){this.d=a
return this},
cs(a){this.c=t.bj.a(a)
return this},
k7(){return this.cE($.bK())},
aI(){return this.cE($.V())},
a2(){return this.cE($.vT())},
bz(){return this.cE($.vU())},
cE(a){var s,r,q,p=this,o=p.b
if(o.length===1)o=B.a.gaB(o)
s=p.d
r=p.e
q=p.c
return new A.d2(p.a,s,r,o,a,q)}}
A.nR.prototype={
$0(){return A.vm(this.a)},
$S:26}
A.nT.prototype={
$0(){return A.vm(this.a)},
$S:26}
A.nU.prototype={
$0(){return A.hu(t.cZ)},
$S:73}
A.nS.prototype={
$0(){return A.vm(this.a)},
$S:26}
A.fu.prototype={
t(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=new A.cY(""),c=e.a,b=c.Q.a.a
d.a=b
c=c.at
if(c instanceof A.cG)s="afraid"
else s=c instanceof A.cH?"awake":"asleep"
d.a=b+(" ("+s+")\n")
c=e.c
b=A.y(c).i("b6<1>")
r=A.a6(new A.b6(c,b),b.i("k.E"))
B.a.ft(r)
q=B.a.av(r,0,new A.tz(),t.S)
for(b=r.length,p=e.d,o=0;o<r.length;r.length===b||(0,A.o)(r),++o){n=r[o]
m=B.i.fd(n,q)+" "
l=c.m(0,n)
for(k=A.y(l),j=new A.ee(l,l.c,l.d,l.b,k.i("ee<1>")),k=k.c,i=!1;j.q();){h=j.e
g=B.c.M(B.e.aV((h==null?k.a(h):h)*9),0,8)
if(!(g>=0&&g<9))return A.b(" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",g)
m+=" \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588"[g]
if(g>0)i=!0}if(!l.gaq(0)){j=l.b
h=l.c
if(j===h)A.a_(A.ct())
j=l.a
f=j.length
h=(h-1&f-1)>>>0
if(!(h>=0&&h<f))return A.b(j,h)
h=j[h]
k=B.e.i_(h==null?k.a(h):h,4)
m+=" "+B.i.df(k,6)}if(p.m(0,n)!=null){m+=" "+A.J(p.m(0,n))
i=!0}if(i)d.a+=(m.charCodeAt(0)==0?m:m)+"\n"}c=d.a=A.vd(d.a,e.b,"\n")
return c.charCodeAt(0)==0?c:c}}
A.tz.prototype={
$2(a,b){return Math.max(A.r(a),A.a4(b).length)},
$S:16}
A.H.prototype={
gaY(){return!0},
oA(a,b,c){var s,r=this
r.a=b
s=b.y
r.b!==$&&A.ax()
r.b=s
r.c!==$&&A.ax()
r.c=a
r.d!==$&&A.ax()
r.d=c!==!1},
hh(a,b){var s,r,q
if(b==null){s=this.a
s.toString}else s=b
r=this.b
r===$&&A.c()
q=this.c
q===$&&A.c()
a.a=s
a.b!==$&&A.ax()
a.b=r
a.c!==$&&A.ax()
a.c=q
a.d!==$&&A.ax()
a.d=!1
if(a.gaY())B.a.j(q.c,a)
else{s=q.b
s.bk(s.$ti.c.a(a))}},
hg(a){return this.hh(a,null)},
bA(a,b,c,d,e,f,g){var s,r,q,p,o=this.c
o===$&&A.c()
s=e==null?$.aD():e
if(g==null)r=b==null?null:b.y
else r=g
if(r==null)r=B.al
q=d==null?B.r:d
p=c==null?0:c
B.a.j(o.d,new A.k_(a,r,q,s,b,f,p))},
ov(a,b,c,d){return this.bA(a,b,c,null,d,null,null)},
cF(a,b){var s=null
return this.bA(a,b,s,s,s,s,s)},
ou(a,b,c){var s=null
return this.bA(a,s,s,s,s,b,c)},
ow(a,b,c,d){return this.bA(a,b,null,null,null,c,d)},
ot(a,b,c){var s=null
return this.bA(a,s,s,s,b,s,c)},
ox(a,b,c,d){return this.bA(a,null,null,b,c,null,d)},
oy(a,b,c,d){return this.bA(a,null,null,b,null,c,d)},
jN(a,b,c){var s=null
return this.bA(a,s,s,b,s,s,c)},
hi(a,b){var s=null
return this.bA(a,s,s,s,s,s,b)},
os(a,b,c){var s=null
return this.bA(a,b,c,s,s,s,s)},
jM(a,b,c){var s=null
return this.bA(a,b,s,s,s,s,c)},
ge2(){return 0.2},
hE(a,b,c){var s=this.c
s===$&&A.c()
s.y.Q.at.Y(B.x,a,b,c,null)},
pp(a,b){return this.hE(a,b,null)},
ei(a,b,c,d){var s,r,q=this.c
q===$&&A.c()
s=q.x
s===$&&A.c()
r=this.b
r===$&&A.c()
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c||this.a instanceof A.av)q.y.Q.at.Y(B.x,a,b,c,d)},
bZ(a,b,c){return this.ei(a,b,c,null)},
a_(a,b){return this.ei(a,b,null,null)},
ls(a){return this.ei(a,null,null,null)},
fB(a,b,c){if(a!=null)this.ei(a,b,c,null)
return B.o},
en(){return this.fB(null,null,null)},
cA(a,b){return this.fB(a,b,null)},
f_(a,b,c){var s,r=this,q=r.c
q===$&&A.c()
q=q.x
q===$&&A.c()
s=r.b
s===$&&A.c()
s=q.f.B(s.gn(),s.gp())
q=!s.b&&s.d+s.e>s.c||r.a instanceof A.av
if(q){q=r.c
q===$&&A.c()
q.y.Q.at.Y(B.a_,a,b,c,null)}return B.bE},
dW(a,b){return this.f_(a,b,null)},
d9(a){return this.f_(a,null,null)},
bd(a){var s,r,q=this.c
q===$&&A.c()
s=this.a
s.toString
r=this.d
r===$&&A.c()
a.oA(q,s,r)
return new A.dh(a,!1,!0)}}
A.dh.prototype={}
A.ka.prototype={
V(){var s=this,r=t.V.a(s.a),q=r.ch,p=s.e
if(q<p)return s.d9("You aren't focused enough.")
r.ch=q-p
return s.bd(s.f)}}
A.kh.prototype={
gn3(){var s,r,q=this,p=q.Q$
if(p===$){s=q.fa()
r=s.a()
q.Q$!==$&&A.ep()
p=q.Q$=new A.aj(r,s.$ti.i("aj<1>"))}return p},
V(){var s,r=this.gn3()
if(!r.q())return B.o
s=r.b
return s==null?r.$ti.c.a(s):s},
lc(a){var s,r=J.wZ(a,t.fw)
for(s=0;s<a;++s)r[s]=B.a4
return r}}
A.jn.prototype={
V(){var s,r,q,p,o=this
for(s=o.e,r=o.a.eU(s),q=r.length,p=0;p<r.length;r.length===q||(0,A.o)(r),++p){r[p].hN(o,o.a,s)
if(s.z<=0)break}return B.o},
ge2(){return 1},
t(a){return A.J(this.a)+" attacks "+this.e.t(0)}}
A.kv.prototype={
e7(){var s,r=this
switch(r.e){case B.G:s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e8(r.f,r.a.y)
break
case B.v:B.a.af(t.V.a(r.a).Q.e.b,r.f)
break
case B.Z:s=r.f
t.V.a(r.a).Q.f.af(0,s)
if(s.a.ay>0){s=r.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.gaA().r=!0}break
default:throw A.m(A.cd("Invalid location."))}},
bo(){switch(this.e){case B.G:break
case B.v:t.V.a(this.a).Q.e.bo()
break
case B.Z:t.V.a(this.a)
break
default:throw A.m(A.cd("Invalid location."))}}}
A.l9.prototype={
V(){var s,r=this,q="{1} [don't|doesn't] have room for {the 2}.",p=t.V,o=r.e,n=p.a(r.a).Q.e.c9(o),m=n.a
if(m===0)return r.f_(q,r.a,o)
r.bZ("{1} pick[s] up {the 2}.",r.a,o.b1(m))
m=n.b
s=r.a
if(m===0){m=r.c
m===$&&A.c()
m=m.x
m===$&&A.c()
m.e8(o,s.y)}else r.bZ(q,s,o.b1(m))
p=p.a(r.a)
r.c===$&&A.c()
p.Q.ax.da(o)
p.bt()
return B.o}}
A.jU.prototype={
V(){var s=this,r=s.z,q=s.f
if(r===q.f)s.e7()
else{q=q.dq(r)
s.bo()}r=s.a
if(s.e===B.Z){s.bZ("{1} take[s] off and drop[s] {the 2}.",r,q)
t.V.a(s.a).bt()}else s.bZ("{1} drop[s] {the 2}.",r,q)
r=s.c
r===$&&A.c()
r=r.x
r===$&&A.c()
r.d0(q,s.a.y)
return B.o}}
A.jX.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.e
if(d===B.Z)return e.bd(new A.lR(d,e.f))
d=t.V
s=e.f
if(!d.a(e.a).Q.f.oO(s))return e.f_("{1} cannot equip {the 2}.",e.a,s)
if(s.f===1){e.e7()
r=s}else{r=s.dq(1)
e.bo()}q=d.a(e.a).Q.f.kb(r)
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=n.f
l=d.a(e.a).Q.e.fm(n,!0)
k=e.a
if(l.b===0){j=e.c
j===$&&A.c()
i=j.x
i===$&&A.c()
h=e.b
h===$&&A.c()
i=i.f
g=h.gn()
h=h.gp()
i.l(g,h)
f=i.a
g=h*i.b.b.a+g
if(!(g>=0&&g<f.length))return A.b(f,g)
g=f[g]
if(!g.b&&g.d+g.e>g.c||e.a instanceof A.av)j.y.Q.at.Y(B.x,"{1} unequip[s] {the 2}.",k,new A.L(n.a,n.b,n.c,n.d,m),null)}else{m=e.c
m===$&&A.c()
j=m.x
j===$&&A.c()
j.d0(n,k.y)
k=e.a
j=m.x
j===$&&A.c()
i=e.b
i===$&&A.c()
j=j.f
h=i.gn()
i=i.gp()
j.l(h,i)
g=j.a
h=i*j.b.b.a+h
if(!(h>=0&&h<g.length))return A.b(g,h)
h=g[h]
if(!h.b&&h.d+h.e>h.c||e.a instanceof A.av)m.y.Q.at.Y(B.x,u.f,k,n,null)}}e.bZ("{1} equip[s] {the 2}.",e.a,r)
if(s.a.ay>0){p=e.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.gaA().r=!0}d.a(e.a).bt()
return B.o}}
A.lR.prototype={
V(){var s,r,q,p,o=this,n=o.f,m=n.d2()
o.e7()
s=t.V
r=s.a(o.a).Q.e.fm(n,!0)
q=o.a
if(r.b===0)o.bZ("{1} unequip[s] {the 2}.",q,m)
else{p=o.c
p===$&&A.c()
p=p.x
p===$&&A.c()
p.d0(n,q.y)
o.bZ(u.f,o.a,n)}s.a(o.a).bt()
return B.o}}
A.lU.prototype={
V(){var s,r=this,q=r.f,p=q.a.w
if(p==null)return r.dW("{the 1} can't be used.",q);--q.f
p=p.b.$0()
if(q.f===0)r.e7()
else r.bo()
if(r.e===B.G){s=t.V.a(r.a)
r.c===$&&A.c()
s.Q.ax.da(q)
s.bt()}t.V.a(r.a).Q.ax.pT(q)
return r.bd(p)}}
A.cJ.prototype={
fQ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
t.E.a(b)
t.f.a(a1)
s=A.a6(b,A.y(b).i("k.E"))
r=s.length
q="{the 1} "+a.c+"!"
p=0
o=0
for(;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m=n.a
l=m.cx.m(0,a)
if(l==null)l=0
if(a0)l=Math.min(30,B.c.A(l,2))
if(l===0)continue
for(k=0,j=0;i=n.f,j<i;++j){i=$.n()
if(i.a.a3(100)<l)++k}if(k===i){i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gn()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.b(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.av)i.y.Q.at.Y(B.x,q,n,c,c)
a1.$1(n)}else if(k>0){n.f=i-k
i=d.c
i===$&&A.c()
h=i.x
h===$&&A.c()
g=d.b
g===$&&A.c()
h=h.f
f=g.gn()
g=g.gp()
h.l(f,g)
e=h.a
f=g*h.b.b.a+f
if(!(f>=0&&f<e.length))return A.b(e,f)
f=e[f]
if(!f.b&&f.d+f.e>f.c||d.a instanceof A.av)i.y.Q.at.Y(B.x,q,new A.L(m,n.b,n.c,n.d,k),c,c)}p+=m.cy*k}return p},
ho(a,b){var s=this.c
s===$&&A.c()
s=s.x
s===$&&A.c()
return this.fQ(b,s.bS(a),!1,new A.o1(this,a))},
k6(a){var s,r,q=this,p={},o=q.a
if(!(o instanceof A.av))return 0
if(o.c8(a)>0)return 0
o=t.V
s=q.fQ(a,o.a(q.a).Q.e,!0,new A.o2(q))
p.a=!1
r=q.fQ(a,o.a(q.a).Q.f,!0,new A.o3(p,q))
if(p.a)o.a(q.a).bt()
return s+r}}
A.o1.prototype={
$1(a){var s=this.a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
s.e8(a,this.b)},
$S:7}
A.o2.prototype={
$1(a){B.a.af(t.V.a(this.a.a).Q.e.b,a)},
$S:7}
A.o3.prototype={
$1(a){t.V.a(this.b.a).Q.f.af(0,a)
this.a.a=!0},
$S:7}
A.kK.prototype={
gni(){var s,r=this,q=r.r
if(q===$){s=A.ed(r.a.y,r.e)
s.q()
r.f=r.a.y
r.r!==$&&A.ep()
r.r=s
q=s}return q},
gaY(){return!1},
V(){var s,r,q=this,p=q.gni(),o=p.a,n=q.c
n===$&&A.c()
s=n.x
s===$&&A.c()
s=s.f.B(o.gn(),o.gp())
r=$.V()
if((s.a.e.a&r.a)===0||o.S(0,q.a.y).bi(0,q.gaD())){p=q.f
p===$&&A.c()
q.kE(p)
return q.en()}s=q.f
s===$&&A.c()
q.kK(s,o)
n=n.x
n===$&&A.c()
n=n.w.B(o.gn(),o.gp())
if(n!=null&&n!==q.a)if(q.hL(o,n))return B.o
if(o.X(0,q.e))if(q.kM(o))return B.o
q.f=o
p.q()
return B.a4},
hL(a,b){return!0},
kE(a){},
kM(a){return!1}}
A.lO.prototype={
V(){var s=this,r=s.f
if(r.a.y==null)return s.dW("{the 1} can't be thrown.",r)
if(r.f===1)s.e7()
else{r=r.dq(1)
s.bo()}return s.bd(new A.lP(r,s.z,s.Q))}}
A.lP.prototype={
gaD(){return this.as.gaD()},
kK(a,b){this.ou(B.c0,this.Q,b)},
hL(a,b){var s=this
if(s.as.hN(s,s.a,b)===0){s.at=!0
return!1}s.fS(a)
return!0},
kE(a){this.fS(a)},
kM(a){if(this.at)return!1
this.fS(a)
return!0},
fS(a){var s,r=this,q=r.Q,p=q.a.y,o=p.c
if(o!=null){r.hg(o.$1(a))
return}o=$.n()
s=p.a
if(o.U(100)<s){r.a_("{1} breaks!",q)
return}o=r.c
o===$&&A.c()
o=o.x
o===$&&A.c()
o.d0(q,a)}}
A.lY.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.e
if(b===B.r)return c.bd(A.lq())
s=c.a.y.F(0,b)
b=c.c
b===$&&A.c()
r=b.x
r===$&&A.c()
q=s.a
p=s.b
r=r.w.B(q,p)
if(r!=null&&r!==c.a)return c.bd(new A.jn(r))
r=b.x
r===$&&A.c()
o=r.f.B(q,p).a
r=o.f
if(r!=null){n=o.e
m=$.bK()
if(n.X(0,m)&&(c.a.gb5().a&m.a)!==0||(n.a&c.a.gb5().a)===0)return c.bd(r.$1(s))}r=b.x
r===$&&A.c()
if(!r.bn(s,c.a.gb5())){if(c.a instanceof A.av){b=b.x
b===$&&A.c()
b.d8(q,p,!0)}return c.dW("{1} hit[s] the "+o.a+".",c.a)}c.a.dk(b,s)
if(c.a instanceof A.av){r=b.x
r===$&&A.c()
r=r.bS(s)
r=A.a6(r,A.y(r).i("k.E"))
q=r.length
p=t.V
n=b.y.Q.at
l=0
for(;l<r.length;r.length===q||(0,A.o)(r),++l){k=r[l]
m=p.a(c.a)
if(!(m.at instanceof A.aY))m.at=null
if(k.a.ch){j=B.e.aV(k.gbg()*0.5)
i=B.e.aV(k.gbg()*1.5)
m=$.n()
h=m.a.a3(i-j)+j
m=p.a(c.a)
m.Q.Q+=h
g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gn()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.av)n.Y(B.x,"{1} pick[s] up {2} worth "+h+" gold.",m,k,null)
m=b.x
m===$&&A.c()
m.e8(k,s)
m=c.a
c.ow(B.bP,m,k,m.y)}else{g=b.x
g===$&&A.c()
f=c.b
f===$&&A.c()
g=g.f
e=f.gn()
f=f.gp()
g.l(e,f)
d=g.a
e=f*g.b.b.a+e
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
if(!e.b&&e.d+e.e>e.c||c.a instanceof A.av)n.Y(B.x,"{1} [are|is] standing on {2}.",m,k,null)}}p.a(c.a).ff(1)}return c.en()},
t(a){return A.J(this.a)+" walks "+this.e.t(0)}}
A.l4.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s.f.B(r.gn(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.hZ()
p=q.a
if(p instanceof A.av)p.ff(1)
return q.cA("{1} open[s] the door.",q.a)}}
A.jE.prototype={
V(){var s,r,q=this,p=q.c
p===$&&A.c()
s=p.x
s===$&&A.c()
r=q.e
s=s.w.B(r.gn(),r.gp())
if(s!=null)return q.dW("{1} [are|is] in the way!",s)
s=p.x
s===$&&A.c()
s.f.B(r.gn(),r.gp()).a=q.f
p=p.x
p===$&&A.c()
p.hZ()
p=q.a
if(p instanceof A.av)p.ff(1)
return q.cA("{1} close[s] the door.",q.a)}}
A.lp.prototype={
V(){var s,r,q,p,o,n=this,m=null
A:{s=n.a
r=s instanceof A.av
q=r?s:m
if(r){r=q.ay
if(r>0){r=B.c.M(r-1,0,400)
q.ay=r
if(r===0){r=n.c
r===$&&A.c()
r.y.Q.at.Y(B.x,"You are getting hungry.",m,m,m)}if(q.w.a<=0)q.z=B.c.M(q.z+1,0,q.gbr())}q.ff(2)
break A}r=!1
if(s instanceof A.bp){r=n.c
r===$&&A.c()
r=r.x
r===$&&A.c()
p=s.y
p=r.f.B(p.gn(),p.gp())
r=!(!p.b&&p.d+p.e>p.c)&&s.w.a<=0
o=s}else o=m
if(r)o.z=B.c.M(o.z+1,0,o.gbr())}return n.en()},
ge2(){return 0.05}}
A.bp.prototype={
e1(a){return!1},
gb5(){var s=this.cr()
return this.e.a>0?new A.ag(s.a|$.V().a):s},
ghn(){return new A.S(this.oY(),t.cm)},
oY(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$ghn(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gjQ()
if(s.b.a>0||s.d.a>0)o=B.c.A(o,3)
r=o!==0?2:3
break
case 2:r=4
return a.b=new A.aF(o,"{1} dodge[s] {2}."),1
case 4:case 3:r=5
return a.aO(s.kG())
case 5:return 0
case 1:return a.c=p.at(-1),3}}}},
dk(a,b){var s,r,q,p,o=this
if(o.y.X(0,b))return
s=o.y
if(o.gdU()>0){r=a.x
r===$&&A.c()
r.gaA().r=!0}o.hI(a,s,b)
r=a.x
r===$&&A.c()
r=r.w
q=r.B(s.gn(),s.gp())
p=r.$ti.c
p.a(null)
r.aZ(s.gn(),s.gp(),null)
p.a(q)
r.aZ(b.gn(),b.gp(),q)
o.y=b},
hI(a,b,c){},
eU(a){var s,r,q=this.kC(a)
for(s=q.length,r=0;r<q.length;q.length===s||(0,A.o)(q),++r)this.kz(q[r],B.hE)
return q},
kz(a,b){var s
if(this.b.a>0||this.d.a>0){switch(b.a){case 0:s=0.5
break
case 1:s=0.3
break
case 2:s=0.2
break
default:s=null}a.lm(s,"blindness")}this.kJ(a,b)},
kJ(a,b){},
c8(a){var s=this.hK(a),r=this.fh(a)
return r.a>0?s+r.b:s},
fh(a){var s=this.x,r=s.m(0,a)
if(r==null){r=new A.hQ(a)
s.h(0,a,r)
s=r}else s=r
return s},
l2(a,b,c,d){var s=this
s.z=B.c.M(s.z-b,0,s.gbr())
s.kL(a,d,b)
if(s.z>0)return!1
a.cF(B.bO,s)
a.bZ("{1} kill[s] {2}.",c,s)
if(d!=null)d.kI(a,s)
s.kD(a,c)
return!0},
pL(a,b,c){return this.l2(a,b,c,null)},
kH(a,b,c){},
kL(a,b,c){},
kI(a,b){},
kF(a){},
pe(a){var s,r,q,p,o,n=this
n.a.a-=240
s=A.a([n.c,n.b,n.d,n.e,n.f,n.r,n.w],t.c8)
r=n.x
B.a.T(s,new A.cS(r,A.y(r).i("cS<2>")))
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
if(o>0){--o
p.a=o
if(o>0)p.kN(a)
else{p.cL(a)
p.b=0}}}if(n.z>0)n.kF(a)}}
A.b9.prototype={
t(a){var s=B.c.t(this.c),r=this.e
if(r!==$.aD())s=r.t(0)+" "+s
r=this.d
return r>0?s+("@"+r):s}}
A.km.prototype={
aN(){return"HitType."+this.b}}
A.dj.prototype={}
A.dx.prototype={}
A.ba.prototype={
gaD(){var s=this.a.d
if(s===0)return 0
return Math.max(1,B.e.P(s*this.r))},
go_(){return B.a.av(this.b,1,new A.p2(),t.i)},
gnZ(){return B.a.av(this.c,0,new A.p1(),t.i)},
giM(){return B.a.av(this.d,1,new A.p0(),t.i)},
giL(){return B.a.av(this.e,0,new A.p_(),t.i)},
gb3(){var s=this.f
if(s!==$.aD())return s
return this.a.e},
gd1(){return this.a.c*this.giM()+this.giL()},
jO(a,b){if(a===0)return
B.a.j(this.c,new A.dj(a))},
lm(a,b){if(a===1)return
B.a.j(this.b,new A.dx(a))},
oq(a,b){if(a===0)return
B.a.j(this.e,new A.dj(a))},
cV(a,b){if(a===1)return
B.a.j(this.d,new A.dx(a))},
e4(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.lY(a,b,a0),c=e.lZ(a,a0)
if(d){s=e.a.a
if(s==null)s=b
s.toString
r=s}else r=$.w0()
q=c?a0:$.w0()
if(a0 instanceof A.av)a0.pB(e)
if(a1!==!1){s=$.n()
p=s.aC(1,100)*e.go_()+e.gnZ()
o=a0.ghn()
n=A.a6(o,o.$ti.i("k.E"))
B.a.bM(t.hy.a(n),s.a)
for(s=n.length,m=0;m<s;++m){l=n[m]
p-=l.a
if(p<0){if(d||c){s=a.c
s===$&&A.c()
s.y.Q.at.Y(B.x,l.b,q,r,null)}return 0}}}k=a0.gdK()
j=a0.c8(e.gb3())
s=e.a
i=B.e.N((s.c*e.giM()+e.giL())*(1/(1+j))*100)
h=A.yh(k)
g=B.e.P($.n().cR(i,B.c.A(i,2))*h/100)
if(g===0){if(d||c)a.hE("{1} do[es] no damage to {2}.",r,q)
return 0}if(b!=null)b.kH(a,a0,g)
if(a0.l2(a,g,r,b))return g
if(j<=0){f=e.gb3().f.$1(g)
if(f!=null)a.hh(f,a0)}a.ov(B.bR,a0,g,e.gb3())
if(d||c)a.hE("{1} "+s.b+" {2}.",r,q)
return g},
hN(a,b,c){return this.e4(a,b,c,null)},
lY(a,b,c){var s,r
if(b instanceof A.av)return!0
if(b!=null){s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gn(),r.gp())
s=!r.b&&r.d+r.e>r.c}else s=!1
if(s)return!0
if(c instanceof A.av&&this.a.a!=null)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=c.y
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c&&this.a.a!=null)return!0
return!1},
lZ(a,b){var s,r
if(b instanceof A.av)return!0
s=a.c
s===$&&A.c()
s=s.x
s===$&&A.c()
r=b.y
r=s.f.B(r.gn(),r.gp())
if(!r.b&&r.d+r.e>r.c)return!0
return!1}}
A.p2.prototype={
$2(a,b){return A.bw(a)*t.jK.a(b).a},
$S:47}
A.p1.prototype={
$2(a,b){return A.bw(a)+t.fV.a(b).a},
$S:46}
A.p0.prototype={
$2(a,b){return A.bw(a)*t.jK.a(b).a},
$S:47}
A.p_.prototype={
$2(a,b){return A.bw(a)+t.fV.a(b).a},
$S:46}
A.aF.prototype={}
A.c4.prototype={
kN(a){}}
A.he.prototype={
cL(a){a.a_("{1} slow[s] back down.",a.a)}}
A.h0.prototype={
cL(a){a.a_("{1} warm[s] back up.",a.a)}}
A.hI.prototype={
kN(a){var s=a.a
s.toString
if(!s.pL(a,this.b,new A.aJ(A.aR("poison",B.y,B.aH).a5(1))))a.a_("{1} [are|is] hurt by poison!",a.a)},
cL(a){a.a_("{1} [are|is] no longer poisoned.",a.a)}}
A.dR.prototype={
cL(a){var s,r
a.a_("{1} can see clearly again.",a.a)
s=a.a
r=a.c
r===$&&A.c()
if(s===r.y){s=r.x
s===$&&A.c()
s.gaA().w=!0}}}
A.hc.prototype={
cL(a){a.a_("{1} flutter[s] down to the ground.",a.a)}}
A.hQ.prototype={
cL(a){a.a_("{1} feel[s] susceptible to "+this.c.t(0)+".",a.a)}}
A.hH.prototype={
cL(a){a.a_("{1} no longer perceive[s] monsters.",a.a)}}
A.dT.prototype={
t(a){return this.a}}
A.oe.prototype={
$1(a){A.r(a)
return null},
$S:45}
A.of.prototype={
$4(a,b,c,d){t.u.a(a)
t._.a(b)
A.eg(c)
A.r(d)
return null},
$S:156}
A.h9.prototype={}
A.k_.prototype={}
A.aL.prototype={
t(a){return this.a}}
A.ke.prototype={
ee(){return new A.S(this.lk(),t.e)},
lk(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ee(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=A.eb()
n=s.y
m=s.x
m===$&&A.c()
r=2
return a.aO(s.a.oL(n.Q.ax,m,s.w,new A.oY(o)))
case 2:r=3
return a.b="Calculating visibility",1
case 3:n.dk(s,t.u.a(o.h4()))
m.gaA().cN()
return 0
case 1:return a.c=p.at(-1),3}}}},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.b,r=b.y,q=b.e,p=b.c,o=s.$ti.c,n=b.d,m=!1;;){for(;!s.gaq(0);m=!0){l=s.b
if(l===s.c)A.a_(A.ct())
k=s.a
if(!(l<k.length))return A.b(k,l)
j=k[l]
if(j==null)j=o.a(j)
i=j.V()
for(;h=i.a,h!=null;j=h){s.cO()
o.a(h)
l=s.b
k=s.a
l=(l-1&k.length-1)>>>0
s.b=l
B.a.h(k,l,h)
if(s.b===s.c)s.iY();++s.d
i=h.V()}while(l=p.length,l!==0){if(0>=l)return A.b(p,-1)
g=p.pop().V()
while(l=g.a,l!=null)g=l.V()}l=b.x
l===$&&A.c()
l.gaA().cN()
k=i.c
if(k){s.cO()
if(i.b){f=j.d
f===$&&A.c()}else f=!1
if(f){j.a.pe(j)
l.e=B.c.ab(l.e+1,l.b.length)}}if(!k||j.a===r||n.length!==0){s=A.a(n.slice(0),A.N(n))
B.a.aP(n)
return new A.f9(s)}}if(b.r!=null)b.jC()
while(s.b===s.c){l=b.x
l===$&&A.c()
k=l.b
f=l.e
if(!(f>=0&&f<k.length))return A.b(k,f)
e=k[f]
f=e.a
if(f.a>=240&&e.e1(b))return b.j5(m)
if(f.a<240){d=e.gjR()+e.f.b-e.c.b
c=f.a
if(!(d>=0&&d<13))return A.b(B.aS,d)
c+=B.aS[d]
f.a=c
c=c>=240
f=c}else f=!0
if(f){if(e.e1(b))return b.j5(m)
j=e.ao(b)
j.a=e
l=e.y
j.b!==$&&A.ax()
j.b=l
j.c!==$&&A.ax()
j.c=b
j.d!==$&&A.ax()
j.d=!0
s.bk(o.a(j))}else l.e=B.c.ab(l.e+1,k.length)
if(e===r){l=q.a+=60
if(l>=240){q.a=l-240
b.r=0
b.jC()}}}}},
j5(a){if(a)return this.nj()
return B.cX},
nj(){var s=this.d,r=A.a(s.slice(0),A.N(s))
B.a.aP(s)
return new A.f9(r)},
co(a){var s,r=this.x
r===$&&A.c()
s=a.y
s=r.f.B(s.gn(),s.gp())
if(!s.b&&s.d+s.e>s.c)return!0
r=this.y
s=r.r
if(s.a>0&&r.y.S(0,a.y).eh(0,s.b))return!0
return!1},
jC(){var s,r,q,p=this,o=p.f,n=p.a
for(;;){s=p.r
s.toString
if(!(s<o.length))break
r=o[s]
s=p.x
s===$&&A.c()
q=n.pS(s,r)
s=p.r
s.toString
p.r=s+1
if(q!=null){q.b!==$&&A.ax()
q.b=r
q.c!==$&&A.ax()
q.c=p
q.d!==$&&A.ax()
q.d=!1
o=p.b
o.bk(o.$ti.c.a(q))
return}}p.r=null}}
A.oY.prototype={
$1(a){this.a.b=a},
$S:79}
A.i8.prototype={}
A.lX.prototype={}
A.f9.prototype={}
A.kJ.prototype={
i4(a){this.Y(B.ck,a,null,null,null)},
k0(a,b){this.Y(B.cl,a,b,null,null)},
dR(a){return this.k0(a,null)},
Y(a,b,c,d,e){var s,r
b=this.mN(b,c,d,e);++this.b
s=this.a
if(s.length!==0){r=B.a.gc7(s)
if(r.b===b){++r.c
return}}B.a.j(s,new A.hy(a,b,1))
if(s.length>100)B.a.dh(s,0)},
mN(a,b,c,d){var s,r,q,p,o,n,m=[b,c,d]
for(s=a,r=1;r<=3;++r){q=m[r-1]
if(q!=null){p=""+r
o="{"+p
n=q.gan()
s=A.bn(s,o+"}",n.b)
n=q.gan()
s=A.bn(s,"{the "+p+"}",n.c)
p=q.gan()
s=A.bn(s,o+" he}",p.d.c)
p=q.gan()
s=A.bn(s,o+" him}",p.d.d)
p=q.gan()
s=A.bn(s,o+" his}",p.d.e)}}if(b!=null)s=A.x8(s,b.gan().d)
if(0>=s.length)return A.b(s,0)
return s[0].toUpperCase()+B.i.cX(s,1)}}
A.pW.prototype={
$1(a){var s,r=a.m(0,1)
r.toString
s=a.m(0,3)
if(s!=null){if(!this.a)r=s
return r}else{if(this.a)r=""
return r}},
$S:43}
A.pY.prototype={
$1(a){var s,r=this.a,q=r.b
if(q===-1)return
s=r.a
if(s.length!==0)s=r.a=s+" "
r.a=s+B.i.aM(this.b,q,a)
r.b=-1},
$S:81}
A.pX.prototype={
$0(){var s=this.a
B.a.j(this.b,s.a)
s.a=""},
$S:0}
A.c_.prototype={
aN(){return"LogType."+this.b}}
A.hy.prototype={}
A.u6.prototype={
$1(a){a=((B.c.eI(a,16)^a)>>>0)*73244475>>>0
a=((a>>>16^a)>>>0)*73244475>>>0
return(a>>>16^a)>>>0},
$S:3}
A.fe.prototype={
gc2(){var s=this.b,r=A.y(s).i("cS<2>"),q=this.$ti.c
return A.q9(new A.cS(s,r),r.ac(q).i("1(k.E)").a(new A.qH(this)),r.i("k.E"),q)},
cg(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(a)
if(b==null)b=B.c.t(m.b.a)
if(c==null)c=1
if(d==null)d=c
if(e==null)e=1
if(f==null)f=e
s=m.b
if(s.ah(b))throw A.m(A.aE('Already have a resource named "'+b+'".',null))
r=A.bb(l.i("c2<1>"))
s.h(0,b,new A.bv(a,c,d,e,f,r,l.i("bv<1>")))
if(g!=null&&g!=="")for(l=g.split(" "),s=l.length,q=m.a,p=0;p<s;++p){o=l[p]
n=q.m(0,o)
if(n==null)throw A.m(A.aE('Unknown tag "'+o+'".',null))
r.j(0,n)}},
c5(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=a.split(" "),r=s.length,q=this.a,p=this.$ti.i("c2<1>"),o=0;o<s.length;s.length===r||(0,A.o)(s),++o)for(n=s[o].split("/"),m=n.length,l=null,k=0;k<m;++k,l=i){j=n[k]
i=q.m(0,j)
if(i==null){i=new A.c2(j,l,p)
q.h(0,j,i)}}},
pd(a){var s=this.b.m(0,a)
if(s==null)throw A.m(A.aE('Unknown resource "'+a+'".',null))
return s.a},
ca(a){var s=this.b.m(0,a)
if(s==null)return null
return s.a},
ll(a){var s,r,q=this.b.m(0,a)
if(q==null)throw A.m(A.aE('Unknown resource "'+a+'".',null))
s=q.f
r=A.y(s)
return new A.cM(s,r.i("q(1)").a(new A.qI(this)),r.i("cM<1,q>"))},
dj(a,b,c){var s,r,q,p=this,o={}
o.a=b
s=b==null?o.a=!0:b
if(c==null)return p.h9("",a,new A.qM(p))
r=p.a.m(0,c)
q=r.a
if(!s)q+=" (only)"
return p.h9(q,a,new A.qN(o,p,r))},
i1(a){return this.dj(a,null,null)},
l8(a,b){return this.dj(a,null,b)},
pP(a,b){var s,r,q,p,o,n=this
t.bq.a(b)
s=n.$ti.i("c2<1>")
r=b.$ti
q=r.i("k.E")
p=A.q9(b,r.ac(s).i("1(k.E)").a(new A.qK(n)),q,s)
o=A.a6(b,q)
B.a.ft(o)
return n.h9(B.a.aG(o,"|")+" (match)",a,new A.qL(n,p))},
h9(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.$ti
j.i("E(bv<1>)").a(c)
s=new A.mU(a,b)
r=this.c
q=r.m(0,s)
if(q==null){p=A.a([],j.i("t<bv<1>>"))
o=A.a([],t.gk)
for(n=this.b,n=new A.cR(n,n.r,n.e,A.y(n).i("cR<2>")),m=0;n.q();){l=n.d
k=c.$1(l)
if(k===0)continue
m+=Math.max(1e-7,k*(l.pf(b)*l.oS(b)))
B.a.j(p,l)
B.a.j(o,m)}q=new A.iE(p,o,m,j.i("iE<1>"))
r.h(0,s,q)}return q.eT()}}
A.qH.prototype={
$1(a){return this.a.$ti.i("bv<1>").a(a).a},
$S(){return this.a.$ti.i("1(bv<1>)")}}
A.qI.prototype={
$1(a){return this.a.$ti.i("c2<1>").a(a).a},
$S(){return this.a.$ti.i("q(c2<1>)")}}
A.qM.prototype={
$1(a){this.a.$ti.i("bv<1>").a(a)
return 1},
$S(){return this.a.$ti.i("E(bv<1>)")}}
A.qN.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=this.a,q=this.b.$ti.i("bv<1>").a(a).f,p=A.y(q),o=p.i("d8<1>"),p=p.c,n=1;s!=null;s=s.b){for(m=new A.d8(q,q.r,o),m.c=q.e;m.q();){l=m.d
if((l==null?p.a(l):l).G(0,s))return n}m=r.a
m.toString
if(!m)break
n/=10}return 0},
$S(){return this.b.$ti.i("E(bv<1>)")}}
A.qK.prototype={
$1(a){var s
A.a4(a)
s=this.a.a.m(0,a)
if(s==null)throw A.m(A.aE('Unknown tag "'+a+'".',null))
return s},
$S(){return this.a.$ti.i("c2<1>(q)")}}
A.qL.prototype={
$1(a){var s,r,q,p,o=this.a
for(s=o.$ti.i("bv<1>").a(a).f,s=A.vk(s,s.r,A.y(s).c),r=this.b,q=s.$ti.c;s.q();){p=s.d
if(r.cG(0,new A.qJ(o,p==null?q.a(p):p)))return 1}return 0},
$S(){return this.a.$ti.i("E(bv<1>)")}}
A.qJ.prototype={
$1(a){return this.a.$ti.i("c2<1>").a(a).G(0,this.b)},
$S(){return this.a.$ti.i("z(c2<1>)")}}
A.bv.prototype={
pf(a){var s=this,r=s.b,q=s.c
if(r===q)return s.d
return A.w(a,r,q,s.d,s.e)},
oS(a){var s,r,q=this.b
if(a<q){s=q-a
r=0.6+a*0.2
return Math.exp(-0.5*s*s/(r*r))}else{q=this.c
if(a>q){s=a-q
r=1+a*0.1
return Math.exp(-0.5*s*s/(r*r))}else return 1}}}
A.c2.prototype={
G(a,b){var s
this.$ti.a(b)
for(s=this;s!=null;s=s.b)if(b===s)return!0
return!1},
t(a){var s=this.b
if(s==null)return this.a
return s.t(0)+"/"+this.a}}
A.mU.prototype={
ga0(a){return B.i.ga0(this.a)^B.c.ga0(this.b)},
X(a,b){if(b==null)return!1
t.nP.a(b)
return this.a===b.a&&this.b===b.b},
t(a){return this.a+" ("+this.b+")"}}
A.iE.prototype={
eT(){var s,r,q,p,o,n,m,l,k=this.b
if(k.length===0)return null
s=$.n().aS(this.d)
r=k.length
q=r-1
for(p=this.c,o=p.length,n=0;;){m=B.c.A(n+q,2)
if(m>0){l=m-1
if(!(l<o))return A.b(p,l)
l=s<p[l]}else l=!1
if(l)q=m-1
else{if(!(m>=0&&m<o))return A.b(p,m)
if(s<p[m]){if(!(m<r))return A.b(k,m)
return k[m].a}else n=m+1}}}}
A.dA.prototype={
t(a){return this.gan().a}}
A.aJ.prototype={
gan(){return this.a}}
A.qp.prototype={
jT(a,b,c){var s,r,q=this,p=t.fm
p=new A.qs(q,a,p.a(b),p.a(c))
s=q.r
if(a===1)return new A.hD(p.$1(q.b),p.$1(q.c),p.$1(q.e),s)
else{r=q.d
return new A.hD(p.$1(r),p.$1(r),p.$1(q.f),s)}},
a5(a){return this.jT(a,null,null)},
t(a){return this.b}}
A.qs.prototype={
$1(a){var s,r,q=this,p=B.c.t(q.b),o=A.bn(a,"#",p)
p=q.c
if(p!=null&&p.length!==0){if(0>=p.length)return A.b(p,0)
s=p[0]
if(0>=s.length)return A.b(s,0)
r=B.i.G("aeiouAEIOU",s[0])?"an":"a"
o=A.bn(o,"<a>",r)
p=B.a.aG(p," ")
o=A.bn(o,"<p>",p+" ")}else{p=q.a.a?"an":"a"
o=A.bn(o,"<a>",p)
o=A.bn(o,"<p>","")}p=q.d
return p!=null&&p.length!==0?o+" "+B.a.aG(p," "):o},
$S:4}
A.qr.prototype={
$1(a){var s,r
this.a.a=!0
s=a.m(0,1)
s.toString
r=a.m(0,3)
if(r!=null){if(!this.b)s=r
return s}else{if(this.b)s=""
return s}},
$S:43}
A.hE.prototype={
aN(){return"NounCategory."+this.b}}
A.hD.prototype={
t(a){return this.a}}
A.e3.prototype={
aN(){return"Pronoun."+this.b},
t(a){return this.c+"/"+this.d}}
A.q8.prototype={
$1(a){this.a.i("@<0>").ac(this.b).i("aQ<1,2>").a(a)
return new A.O(a.a,a.b)},
$S(){return this.a.i("@<0>").ac(this.b).i("+(1,2)(aQ<1,2>)")}}
A.lW.prototype={
gL(a){var s,r,q,p,o,n,m,l,k=this,j=A.a([],t.l)
for(s=k.e,r=k.a,q=r.a,p=r.b.b.a,o=q.length;s<=k.f;++s)for(n=k.c,m=s*p;n<=k.d;++n){r.l(n,s)
l=m+n
if(!(l>=0&&l<o))return A.b(q,l)
if(J.a9(q[l],k.b))B.a.j(j,new A.e(n,s))}return new J.aV(j,j.length,t.aY)},
j(a,b){var s=this,r=s.a,q=r.$ti.c.a(s.b)
r.aZ(b.gn(),b.gp(),q)
s.c=Math.min(s.c,b.gn())
s.d=Math.max(s.d,b.gn())
s.e=Math.min(s.e,b.gp())
s.f=Math.max(s.f,b.gp())}}
A.a5.prototype={
f1(a){var s,r,q,p=this.aw(a)
for(s=a.gcH(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).kw(a,this,p)}return p},
aw(a){return 0},
dI(a,b){var s=this.f1(a)
if(s<=0)return b
return new A.ka(s,b)}}
A.W.prototype={}
A.d_.prototype={}
A.cK.prototype={}
A.dQ.prototype={}
A.aY.prototype={
eR(a,b){return!0},
bJ(a){a.at=null
return this.a}}
A.lr.prototype={
eR(a,b){var s=b.z,r=b.Q.CW.a
r.toString
if(s===B.e.N(Math.pow(r,1.458)+9))return!1
if(b.ay===0){a.y.Q.at.Y(B.x,"You must eat before you can rest.",null,null,null)
return!1}return!0},
bJ(a){return A.lq()}}
A.cc.prototype={
eR(a,b){var s,r,q,p,o,n,m,l=this
if(l.a)return!0
s=l.b
if(s==null){s=l.d
r=A.a([s.gb9(),s,s.gba()],t.T)
if(B.a.G(B.au,l.d)){B.a.j(r,l.d.gbG())
B.a.j(r,l.d.gbX())}q=new A.ao(r,t.ca.a(new A.r_(l,a,b)),t.e0)
if(!q.gL(0).q())return!1
if(q.gI(0)===1){l.c=l.b=!1
l.d=q.gaB(0)}else{s=a.x
s===$&&A.c()
p=l.d.gb9()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0){p=l.d.gbG()
p=b.y.F(0,p)
o=s.f
p=o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0}else p=!1
l.b=p
p=l.d.gba()
p=b.y.F(0,p)
o=s.f
if(o.b.G(0,p)&&(o.B(p.a,p.b).a.e.a&$.bL().a)!==0){p=l.d.gbX()
p=b.y.F(0,p)
s=s.f
s=s.b.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0}else s=!1
l.c=s}}else{if(!s){s=l.c
s.toString
s=!s}else s=!1
if(s){s=a.x
s===$&&A.c()
if(!l.nM(s,b))return!1}else{s=a.x
s===$&&A.c()
p=l.d.gb9()
p=b.y.F(0,p)
s=s.f
o=s.b
n=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0
p=l.d.gba()
p=b.y.F(0,p)
m=o.G(0,p)&&(s.B(p.a,p.b).a.e.a&$.bL().a)!==0
if(!(l.b===n&&l.c===m))return!1}}s=a.x
s===$&&A.c()
return l.nT(s,b)},
bJ(a){this.a=!1
return A.bt(this.d)},
nM(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=A.a([],t.T),d=A.bb(t.j),c=A.bb(t.u),b=f.d,a=[b.gbG(),b.gb9(),b,b.gba(),b.gbX()]
for(b=a0.f,s=b.b,r=b.a,q=s.b.a,p=r.length,o=0;o<5;++o){n=a[o]
m=a1.y.F(0,n)
if(s.G(0,m)){l=m.a
k=m.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.b(r,l)
l=(r[l].a.e.a&$.bL().a)!==0}else l=!1
if(!l)continue
B.a.j(e,n)
j=[n.gb9(),n,n.gba()]
for(i=0;i<3;++i){h=m.F(0,j[i])
if(s.G(0,h)){l=h.a
k=h.b
b.l(l,k)
l=k*q+l
if(!(l>=0&&l<p))return A.b(r,l)
l=(r[l].a.e.a&$.bL().a)!==0}else l=!1
if(!l)continue
d.j(0,n)
c.j(0,h)}}g=d.a
if(0===g&&e.length===1){f.d=B.a.gaB(e)
return!0}if(1===g){f.d=d.gaB(0)
return!0}if(2===g&&c.a===1)if(d.G(0,f.d))return!0
else if(d.G(0,f.d.gb9())&&d.G(0,f.d.gbG())){f.d=f.d.gb9()
return!0}else if(d.G(0,f.d.gba())&&d.G(0,f.d.gbX())){f.d=f.d.gba()
return!0}return!1},
nT(a,b){var s,r,q,p,o=this,n=b.y.F(0,o.d)
if(!(a.bn(n,b.gb5())&&a.w.B(n.a,n.b)==null))return!1
s=a.f
r=n.a
q=n.b
if(s.B(r,q).a.e.X(0,$.bK()))return!1
p=new A.qZ(a)
if(p.$1(n))return!1
if(p.$1(n.F(0,o.d.gbG())))return!1
if(p.$1(n.F(0,o.d.gb9())))return!1
if(p.$1(n.F(0,o.d)))return!1
if(p.$1(n.F(0,o.d.gba())))return!1
if(p.$1(n.F(0,o.d.gbX())))return!1
if(s.B(r,q).x>0)return!1
return!0}}
A.r_.prototype={
$1(a){var s,r
t.j.a(a)
s=this.b.x
s===$&&A.c()
r=this.c.y.F(0,a)
s=s.f
return s.b.G(0,r)&&(s.B(r.a,r.b).a.e.a&$.bL().a)!==0},
$S:9}
A.qZ.prototype={
$1(a){var s=this.a,r=a.a,q=a.b,p=s.f.B(r,q)
return!p.b&&p.d+p.e>p.c&&s.w.B(r,q)!=null},
$S:1}
A.dV.prototype={
eR(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="In view: {1}."
d.d=a
if(d.c!=null)return!0
s=a.x
s===$&&A.c()
r=$.ze()
A.wO(s)
q=r.a.get(s)
if(q==null){q=A.bb(t.u)
r.h(0,s,q)}r=$.zd()
A.wO(s)
p=r.a.get(s)
if(p==null){p=A.bb(t.W)
r.h(0,s,p)}q.j(0,a0.y)
r=d.e
o=r==null
n=!o
if(n){if(a0.y.X(0,r)&&!d.f)return!1
if(!d.f&&a.y.Q.at.b!==d.r)return!1}d.f=!1
r=A.a([],t.lE)
for(m=s.b,l=m.length,k=0;k<m.length;m.length===l||(0,A.o)(m),++k){j=m[k]
if(j instanceof A.ad&&a.co(j))r.push(j)}i=d.a
m=i==null
if(m){if(r.length!==0){a.y.Q.at.Y(B.x,b,B.a.gaB(r),c,c)
return!1}}else{l=d.w
if(l==null)l=d.w=r.length
if(r.length>l){a.y.Q.at.Y(B.x,b,B.a.gc7(r),c,c)
return!1}}if(m){r={}
r.a=null
s.f3(new A.oD(r,s,p,o))
r=r.a
if(r!=null){a.y.Q.at.Y(B.x,"You see {1}.",r,c,c)
return!1}}h=m?new A.oE(q,s):i
r=!m
if(r&&i.$1(a0.y)){if(!d.b)a.y.Q.at.Y(B.x,"You are on the stairs. Press again to take them.",c,c,c)
return!1}g=d.mM(a,a0,h)
if(g==null){if(r)s="You don't know where the stairs are."
else{r=a0.y
r=s.f.B(r.gn(),r.gp())
s=!(!r.b&&r.d+r.e>r.c)?"It is too dark to explore. Light a light source.":"Nothing left to explore. Try searching for secret doors."}a.y.Q.at.Y(B.x,s,c,c,c)
return!1}f=g.a
e=g.b
if(d.b&&e===1&&n){a.y.Q.at.Y(B.x,"Press again to enter.",c,c,c)
return!1}d.c=f
return!0},
bJ(a){var s,r,q=this,p=q.c
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
q.f=r.f.B(s.a,s.b).a.e.X(0,$.bK())
return A.bt(p)},
mM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.mN.a(c)
s=a.x
s===$&&A.c()
r=t.u
q=A.D(r,t.lF)
p=A.hu(r)
for(r=p.$ti.c,o=0;o<8;++o){n=B.a6[o]
m=b.y.F(0,n)
if(this.je(a,m,c)){q.h(0,m,new A.O(n,1))
p.bk(r.a(m))}}for(s=s.f,l=s.a,k=s.b.b.a,j=l.length;!p.gaq(0);){m=p.cO()
i=q.m(0,m)
n=i.a
h=i.b
if(c.$1(m))return new A.O(n,h)
g=m.gn()
f=m.gp()
s.l(g,f)
g=f*k+g
if(!(g>=0&&g<j))return A.b(l,g)
if(l[g].a.b!=null)continue
for(g=h+1,o=0;o<8;++o){e=m.F(0,B.a6[o])
if(e.X(0,b.y)||q.ah(e))continue
if(!this.je(a,e,c))continue
q.h(0,e,new A.O(n,g))
p.bk(r.a(e))}}return null},
je(a,b,c){var s,r,q,p
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
A.oD.prototype={
$2(a,b){var s=this,r=s.b.f.B(b.gn(),b.gp())
if(!r.b&&r.d+r.e>r.c&&s.c.j(0,a)&&!s.d){r=s.a
if(r.a==null)r.a=a}},
$S:19}
A.oE.prototype={
$1(a){var s,r=!1
if(!this.a.G(0,a)){s=this.b
if(s.f.B(a.gn(),a.gp()).a.b==null)r=!s.bS(a).gaq(0)||B.a.cG(a.gbD(),new A.oC(s))}return r},
$S:1}
A.oC.prototype={
$1(a){var s
t.u.a(a)
s=this.a.f
return s.b.G(0,a)&&!s.B(a.gn(),a.gp()).r},
$S:1}
A.av.prototype={
gan(){return $.yN()},
gbr(){var s=this.Q.CW.a
s.toString
return B.e.N(Math.pow(s,1.458)+9)},
gdU(){return this.Q.gdU()},
geO(){return"hero"},
e1(a){var s=this,r=s.at
if(r!=null&&!r.eR(a,s))s.at=null
return s.at==null},
gdK(){return this.Q.gdK()},
gjR(){return 6},
gjQ(){var s=this.Q.ch.a
s.toString
return 20+A.wz(s)},
cr(){return $.bL()},
kG(){var s,r,q,p,o,n=A.a([],t.x)
for(s=this.Q,r=B.a.gL(s.f.b),q=new A.bu(r,t.k),p=t.W;q.q();){o=p.a(r.gH()).a.z
if(o!=null)n.push(o)}for(s=s.gcH(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c;s.q();){q=s.b
B.a.T(n,(q==null?r.a(q):q).eV(this))}return n},
ao(a){return this.at.bJ(this)},
kC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=A.a([],t.d3)
for(s=e.Q,r=s.f.gcT(),q=J.au(r.a),r=new A.d5(q,r.b,r.$ti.i("d5<1>"));r.q();){p=q.gH()
o=p.a.x
if(o.d<=0)B.a.j(d,new A.O(p,o))}if(d.length===0)B.a.j(d,new A.O(null,A.bf(e,"punch[es]",3,null,null)))
n=A.a([],t.o0)
for(r=d.length,q=t.aL,p=t.iO,o=t.kt,m=s.ch,l=e.ax,k=0;k<d.length;d.length===r||(0,A.o)(d),++k){j=d[k]
i=j.a
h=new A.ba(j.b,A.a([],p),A.a([],o),A.a([],p),A.a([],o),$.aD())
B.a.j(n,h)
j=m.a
j.toString
h.jO(A.wA(j),"agility")
for(j=s.gcH(),g=j.$ti,j=new A.aj(j.a(),g.i("aj<1>")),g=g.c;j.q();){f=j.b
if(f==null)f=g.a(f)
f.hG(e,q.a(a),i,h)}if(i!=null){j=l.a
j.toString
h.cV(j,"heft")
i.ky(h)}}return n},
kJ(a,b){var s,r,q,p
switch(b.a){case 0:break
case 1:break
case 2:s=this.Q.ay.a
s.toString
a.r*=A.xs(s)
break}for(s=B.a.gL(this.Q.f.b),r=new A.bu(s,t.k),q=t.W;r.q();){p=q.a(s.gH())
if(p.a.r==null)p.ky(a)}},
hK(a){return this.Q.kc(a)},
kI(a,b){var s,r,q,p,o,n
t.B.a(b)
if(!this.as.G(0,b))return
s=this.Q
r=s.ax.lu(b.Q)
q=b.Q.gbp()*20/(r+19)
for(p=s.gcH(),o=p.$ti,p=new A.aj(p.a(),o.i("aj<1>")),o=o.c;p.q();){n=p.b
q=(n==null?o.a(n):n).kv(s,b,q)}this.i6(B.e.aV(q))},
kD(a,b){a.bZ("{1} [were|was] slain by {2}.",this,b)},
kF(a){var s,r,q,p=this
p.cy=a.ge2()
s=p.CW
if(s>0&&p.cx>1){r=B.c.A(p.cx-2,2)
q=p.Q.ay.a
q.toString
p.CW=B.c.M(s-r,0,A.i2(q))}++p.cx},
hI(a,b,c){var s=a.x
s===$&&A.c()
s.gaA().w=!0},
i6(a){this.Q.y+=a},
ij(a){this.Q.y-=a},
pB(a){var s,r,q,p=this
if(!(p.at instanceof A.aY))p.at=null
p.cx=0
if(p.z===0)return
s=B.e.aV(a.gd1()/p.z*10)
r=p.CW
q=p.Q.ay.a
q.toString
p.CW=B.c.M(r+s,0,A.i2(q))},
pE(){var s,r,q,p=this,o=null
if(p.w.a>0){p.Q.at.Y(B.a_,"You cannot rest while poison courses through your veins!",o,o,o)
return!1}s=p.z
r=p.Q
q=r.CW.a
q.toString
if(s===B.e.N(Math.pow(q,1.458)+9)){r.at.Y(B.x,"You are fully rested.",o,o,o)
return!1}if(p.ay===0){r.at.Y(B.a_,"You are too hungry to rest.",o,o,o)
return!1}p.at=new A.lr()
return!0},
fs(a){if(this.as.j(0,a))this.Q.ax.i7(a.Q)},
ff(a){var s=this.ch,r=this.Q.cx.a
r.toString
this.ch=B.c.M(s+a,0,A.kt(r))},
bt(){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=j.ay
i.dg(j)
j.ch.dg(j)
s=j.CW
s.dg(j)
r=j.cx
r.dg(j)
j.z.pC(j)
q=j.f.gcT()
p=A.a6(q,q.$ti.i("k.E"))
for(q=p.length,o=0,n=0;n<p.length;p.length===q||(0,A.o)(p),++n)o+=p[n].gf4()
for(j=j.gcH(),q=j.$ti,j=new A.aj(j.a(),q.i("aj<1>")),q=q.c;j.q();){m=j.b
o=(m==null?q.a(m):m).kx(k,p,o)}l=i.kj(B.e.P(o))
k.ax.la(l,new A.oZ(k,p,l))
j=k.z
s=s.a
s.toString
k.z=B.c.M(B.c.M(j,0,B.e.N(Math.pow(s,1.458)+9)),0,k.gbr())
s=k.ch
r=r.a
r.toString
k.ch=B.c.M(s,0,A.kt(r))
r=k.CW
i=i.a
i.toString
k.CW=B.c.M(r,0,A.i2(i))}}
A.oZ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
A:{s=g.length
r=s===2
q=r
p=h
o=!1
if(q){q=g.length
if(0>=q)return A.b(g,0)
n=g[0]
if(1>=q)return A.b(g,1)
p=g[1]
q=n.gan().a===p.gan().a
m=n
l=!0
k=!0}else{q=o
m=h
n=m
l=!1
k=!1}if(q){q=m.b1(2).gan().a
break A}if(r){if(l)m=n
else{if(0>=g.length)return A.b(g,0)
n=g[0]
m=n}if(k)j=p
else{if(1>=g.length)return A.b(g,1)
p=g[1]
j=p}q=m.gan().b+" and "+j.gan().b
break A}if(s===1){if(l)m=n
else{if(0>=g.length)return A.b(g,0)
n=g[0]
m=n}q=m.gan().b
break A}if(typeof s!=="number")return s.eg()
if(s<=0){q="your fists"
break A}q=A.a_(A.aE(h,h))}o=i.c
if(o<1&&a>=1)i.a.Q.at.Y(B.a_,"You are too weak to effectively wield "+q+".",h,h,h)
else if(o>=1&&a<1)i.a.Q.at.Y(B.x,"You feel comfortable wielding "+q+".",h,h,h)},
$S:82}
A.cP.prototype={
ih(a){var s=this.c.m(0,a.gcI())
return s==null?0:s}}
A.dq.prototype={
gdU(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).a.ay
return p},
gdK(){var s,r,q,p,o
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();){o=q.a(s.gH())
p+=o.a.Q+o.gc3()}for(s=this.gcH(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c;s.q();){q=s.b
p=(q==null?r.a(q):q).ku(this,p)}return p},
ged(){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).ged()
return p},
gcH(){return new A.S(this.oR(),t.kX)},
oR(){var s=this
return function(){var r=0,q=1,p=[],o
return function $async$gcH(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:r=2
return a.aO(s.b.d)
case 2:r=3
return a.aO(s.c.d)
case 3:o=s.z.a
r=4
return a.aO(new A.b6(o,A.y(o).i("b6<1>")))
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
lH(a,b,c,d){var s,r,q,p,o,n,m=this,l=null,k=t.Z,j=A.dw(k)
for(s=m.b.c,r=j.$ti.c,q=0;q<4;++q){p=B.aV[q]
o=s.m(0,p)
o.toString
o-=0.4
j.cg(r.a(p),l,l,l,o,o,l)}k=A.D(k,t.S)
for(q=0;q<4;++q)k.h(0,B.aV[q],0)
for(n=0;n<32;++n){s=j.dj(0,l,l)
s.toString
r=k.m(0,s)
r.toString
k.h(0,s,r+1)}for(s=[m.ay,m.ch,m.CW,m.cx],q=0;q<4;++q){p=s[q]
r=k.m(0,p.gbb())
r.toString
r=8+B.c.A(r+1,2)
p.b=r
p.a=B.c.M(r+p.hd(m)+m.ds(p.gbb()),1,50)}},
kc(a){var s,r,q,p
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)p+=q.a(s.gH()).c8(a)
return p},
ds(a){var s,r,q,p,o,n,m
for(s=B.a.gL(this.f.b),r=new A.bu(s,t.k),q=t.W,p=0;r.q();)for(o=q.a(s.gH()).gag(),n=o.length,m=0;m<o.length;o.length===n||(0,A.o)(o),++m)p+=o[m].ds(a)
return p},
spr(a){this.as=A.r(a)}}
A.hw.prototype={
gjP(){var s=this.b
return new A.cS(s,A.y(s).i("cS<2>")).av(0,0,new A.pZ(),t.S)},
i7(a){var s,r=this.a
r.b7(a,new A.q1())
s=r.m(0,a)
s.toString
r.h(0,a,s+1)},
lu(a){var s,r=this.b
r.b7(a,new A.q2())
s=r.m(0,a)
s.toString;++s
r.h(0,a,s)
return s},
da(a){var s,r,q,p,o=this.c,n=a.a
o.b7(n,new A.q_())
s=o.m(0,n)
s.toString
o.h(0,n,s+1)
for(o=a.gag(),n=o.length,s=this.d,r=0;r<o.length;o.length===n||(0,A.o)(o),++r){q=o[r].a
s.b7(q,new A.q0())
p=s.m(0,q)
p.toString
s.h(0,q,p+1)}},
pT(a){var s,r=this.f,q=a.a
r.b7(q,new A.q3())
s=r.m(0,q)
s.toString
r.h(0,q,s+1)},
i8(a){var s=this.a.m(0,a)
return s==null?0:s},
ek(a){var s=this.b.m(0,a)
return s==null?0:s},
kh(a){var s=this.c.m(0,a)
return s==null?0:s}}
A.pZ.prototype={
$2(a,b){return A.r(a)+A.r(b)},
$S:24}
A.q1.prototype={
$0(){return 0},
$S:2}
A.q2.prototype={
$0(){return 0},
$S:2}
A.q_.prototype={
$0(){return 0},
$S:2}
A.q0.prototype={
$0(){return 0},
$S:2}
A.q3.prototype={
$0(){return 0},
$S:2}
A.c0.prototype={}
A.aI.prototype={
hG(a,b,c,d){},
ku(a,b){return b},
eV(a){return B.i3},
kx(a,b,c){t.aa.a(b)
return c},
kv(a,b,c){return c},
kw(a,b,c){return c}}
A.mS.prototype={}
A.cV.prototype={}
A.fc.prototype={}
A.hK.prototype={
dO(a){var s=this.a
if(a.y.Q.b!==s)return"Not a "+s.a
return null},
gW(){return"You must be a "+this.a.a}}
A.ah.prototype={
al(a,b){return B.c.al(this.a,t.M.a(b).a)},
$iaz:1}
A.hZ.prototype={
eP(a){var s=this.a.m(0,a)
return s==null?0:s},
oD(a){var s=this.b.m(0,a)
return s==null?0:s},
bU(a){var s=this.eP(a),r=this.b.m(0,a)
return B.c.M(s+(r==null?0:r),0,15)},
pC(a){var s,r,q,p=this.b,o=A.cT(p,t.M,t.S)
p.aP(0)
for(s=B.a.gL(a.f.b),r=new A.bu(s,t.k),q=t.W;r.q();)q.a(s.gH()).gej().ae(0,new A.rb(this))
p.ae(0,new A.rc(this,o,a))}}
A.rb.prototype={
$2(a,b){var s,r
t.M.a(a)
A.r(b)
s=this.a.b
s.b7(a,new A.ra())
r=s.m(0,a)
r.toString
s.h(0,a,r+b)},
$S:21}
A.ra.prototype={
$0(){return 0},
$S:2}
A.rc.prototype={
$2(a,b){var s
t.M.a(a)
A.r(b)
s=this.b.m(0,a)
if((s==null?0:s)!==b)this.c.at.i4("You are at level "+this.a.bU(a)+" in "+a.gO()+".")},
$S:21}
A.dn.prototype={
ga0(a){return B.i.ga0(this.a)},
X(a,b){if(b==null)return!1
return b instanceof A.dn&&this.a===b.a}}
A.n0.prototype={}
A.bd.prototype={
la(a,b){var s=A.y(this)
s.i("bd.T").a(a)
s.i("@(bd.T)").a(b)
s=this.a
if(s===a)return
this.a=a
if(s!=null)b.$1(s)}}
A.cx.prototype={
aN(){return"Stat."+this.b}}
A.cy.prototype={
hd(a){return 0},
kU(a,b){var s,r=this
if(b!=null)r.b=b
s=r.du(a)
r.la(s,new A.rt(r,s,a))},
dg(a){return this.kU(a,null)},
hy(a){var s=a.ay.b,r=a.ch.b,q=a.CW.b,p=a.cx.b,o=a.b.c.m(0,this.gbb())
o.toString
return B.e.N(400*(1/o)*Math.pow(A.w(s+r+q+p,48,160,1,40),2))},
du(a){return B.c.M(this.b+this.hd(a)+a.ds(this.gbb()),1,50)},
t(a){return this.gbb().c}}
A.rt.prototype={
$1(a){var s=this.b-A.r(a),r=this.a,q=this.c.at
if(s>0)q.i4("You feel "+r.gex()+"! Your "+r.gbb().c+" increased by "+s+".")
else q.Y(B.a_,"You feel "+r.geB()+"! Your "+r.gbb().c+" decreased by "+-s+".",null,null,null)},
$S:45}
A.i1.prototype={
gbb(){return B.ak},
gex(){return"mighty"},
geB(){return"weak"},
hd(a){return-a.ged()},
kj(a){var s,r=this.a
r.toString
s=B.e.M(r-a,-10,50)
if(s<0)return A.w(s,-10,-1,0,0.6)
else return A.w(s,0,50,1,2)}}
A.fV.prototype={
gbb(){return B.ae},
gex(){return"dextrous"},
geB(){return"clumsy"}}
A.ia.prototype={
gbb(){return B.ar},
gex(){return"tough"},
geB(){return"sickly"}}
A.hh.prototype={
gbb(){return B.a3},
gex(){return"smart"},
geB(){return"stupid"}}
A.cl.prototype={
gcc(){return this.a.w.$1(this.b)},
gd5(){return this.a.x.$1(this.b)},
gd4(){return this.a.y.$1(this.b)},
c8(a){var s=this.a.as.m(0,a)
if(s==null)return 0
return s.$1(this.b)},
ds(a){var s=this.a.at.m(0,a)
if(s==null)return 0
return s.$1(this.b)},
gej(){var s,r,q,p=t.M,o=A.D(p,t.S)
for(p=A.x9(this.a.ch,p,t.Q),s=A.y(p),p=new A.bs(J.au(p.a),p.b,s.i("bs<1,2>")),r=this.b,s=s.y[1];p.q();){q=p.a
if(q==null)q=s.a(q)
o.h(0,q.a,q.b.$1(r))}return o},
t(a){return this.a.a+" "+this.b}}
A.ev.prototype={
fu(){var s=this.e
s=s==null?null:s.$0()
return new A.cl(this,s==null?0:s)},
lo(a,b){this.as.h(0,t.h.a(a),t.Q.a(b))},
lq(a,b){this.at.h(0,t.Z.a(a),t.Q.a(b))},
t(a){return this.a}}
A.eK.prototype={
gkr(){return B.Z},
gcT(){var s=t.bC
return new A.ao(new A.ib(this.b,s),s.i("z(k.E)").a(new A.ot()),s.i("ao<k.E>"))},
gI(a){return B.a.av(this.b,0,new A.os(),t.S)},
d2(){var s,r,q,p,o,n=A.am(9,null,!1,t.c)
for(s=this.b,r=0;r<9;++r){q=s[r]
if(q!=null){p=q.a
o=q.f
B.a.h(n,r,new A.L(p,q.b,q.c,q.d,o))}}return new A.eK(n)},
oO(a){return B.a.cG(B.aF,new A.or(a))},
bo(){},
kb(a){var s,r,q,p,o,n,m,l,k,j=a.a,i=j.e
if(i==="hand"){i=t.t
s=A.a([],i)
r=A.a([],i)
for(i=this.b,q=0;q<9;++q)if(B.aF[q]==="hand"){B.a.j(s,q)
if(i[q]!=null)B.a.j(r,q)}p=r.length
if(p===0){if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return B.bw}if(p===1){if(0>=p)return A.b(r,0)
o=r[0]
if(!(o<9))return A.b(i,o)
o=i[o].a.f}else o=!1
if(o){if(0>=p)return A.b(r,0)
j=r[0]
if(!(j<9))return A.b(i,j)
j=i[j]
j.toString
if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return A.a([j],t.I)}if(j.f){n=A.a([],t.I)
for(j=r.length,m=0;m<r.length;r.length===j||(0,A.o)(r),++m){l=r[m]
if(!(l<9))return A.b(i,l)
p=i[l]
p.toString
B.a.j(n,p)
B.a.h(i,l,null)}if(0>=s.length)return A.b(s,0)
B.a.h(i,s[0],a)
return n}if(p===2){if(0>=p)return A.b(r,0)
j=r[0]
if(!(j<9))return A.b(i,j)
p=i[j]
p.toString
B.a.h(i,j,a)
return A.a([p],t.I)}if(0>=p)return A.b(r,0)
j=r[0]
p=s.length
if(0>=p)return A.b(s,0)
o=s[0]
if(j===o){if(1>=p)return A.b(s,1)
B.a.h(i,s[1],a)}else B.a.h(i,o,a)
return B.bw}for(j=this.b,k=-1,q=0;q<9;++q)if(B.aF[q]===i){if(j[q]==null){B.a.h(j,q,a)
return B.bw}k=q}if(!(k>=0&&k<9))return A.b(j,k)
i=j[k]
i.toString
n=A.a([i],t.I)
B.a.h(j,k,a)
return n},
af(a,b){var s,r
for(s=this.b,r=0;r<9;++r)if(s[r]===b){B.a.h(s,r,null)
break}},
gL(a){return new A.bu(B.a.gL(this.b),t.k)},
gel(){return B.aF},
gcz(){return this.b}}
A.ot.prototype={
$1(a){return t.W.a(a).a.r!=null},
$S:11}
A.os.prototype={
$2(a,b){A.r(a)
return a+(t.c.a(b)==null?0:1)},
$S:86}
A.or.prototype={
$1(a){return this.a.a.e===A.a4(a)},
$S:87}
A.mn.prototype={}
A.c6.prototype={}
A.bD.prototype={
gel(){return B.i2},
gcz(){return this},
$ik:1}
A.bZ.prototype={
gI(a){return this.b.length},
d2(){var s=this.b,r=A.N(s)
return A.bq(this.a,new A.as(s,r.i("L(1)").a(new A.pd()),r.i("as<1,L>")))},
af(a,b){B.a.af(this.b,b)},
jU(a){var s,r,q,p,o=this.c
if(o===0||this.b.length<o)return!0
s=a.f
for(o=this.b,r=o.length,q=0;q<o.length;o.length===r||(0,A.o)(o),++q){p=o[q]
if(p.jW(a)){s-=p.a.CW-p.f
if(s<=0)return!0}}return!1},
fm(a,b){var s,r,q,p,o,n=a.f
for(s=this.b,r=s.length,q=n,p=0;o=s.length,p<o;s.length===r||(0,A.o)(s),++p){s[p].lw(a)
q=a.f
if(q===0)return new A.dP(n,0)}r=this.c
if(r!==0&&o>=r)return new A.dP(n-q,q)
B.a.j(s,a)
B.a.ft(s)
if(b)this.d=a
return new A.dP(n,0)},
c9(a){return this.fm(a,!1)},
bo(){var s,r=this.b,q=A.a(r.slice(0),A.N(r))
B.a.aP(r)
for(r=q.length,s=0;s<q.length;q.length===r||(0,A.o)(q),++s)this.c9(q[s])},
gL(a){var s=this.b
return new J.aV(s,s.length,A.N(s).i("aV<1>"))},
gkr(){return this.a}}
A.pd.prototype={
$1(a){return t.W.a(a).d2()},
$S:89}
A.dP.prototype={}
A.mE.prototype={}
A.L.prototype={
gag(){var s=A.a([],t.o_),r=this.b
if(r!=null)s.push(r)
r=this.c
if(r!=null)s.push(r)
r=this.d
if(r!=null)s.push(r)
return s},
gb3(){var s,r,q,p=$.aD(),o=this.a.x,n=o!=null?o.e:p
for(o=this.gag(),s=o.length,r=0;r<s;++r){q=o[r].a.Q
if(q!==p)n=q}return n},
gcc(){return B.a.av(this.gag(),0,new A.pF(),t.S)},
gd5(){return B.a.av(this.gag(),1,new A.pA(),t.i)},
gd4(){return B.a.av(this.gag(),0,new A.pz(),t.S)},
gc3(){return B.a.av(this.gag(),0,new A.py(),t.S)},
gan(){var s,r=this,q=r.e
if(q===$){s=r.n_()
r.e!==$&&A.ep()
r.e=s
q=s}return q},
gbg(){var s,r,q,p,o=this,n=o.a.as,m=1+o.gag().length
for(s=o.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n*=p.a.ay.$1(p.b)*m}for(s=o.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
n+=p.a.ax.$1(p.b)*m}return B.e.aV(n)},
ged(){return Math.max(0,B.a.av(this.gag(),this.a.at,new A.pG(),t.S))},
gf4(){return B.e.P(B.a.av(this.gag(),this.a.ax,new A.pB(),t.i))},
ky(a){var s,r,q,p,o,n,m
for(s=this.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.a
n=p.b
m=o.a+" "+n
a.jO(o.w.$1(n),m)
a.cV(o.x.$1(n),m)
a.oq(o.y.$1(n),m)}s=this.gb3()
if(s!==$.aD())a.f=s},
c8(a){return B.a.av(this.gag(),0,new A.pC(a),t.S)},
gej(){var s,r,q,p=A.D(t.M,t.S)
for(s=this.gag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)s[q].gej().ae(0,new A.pE(p))
return p},
al(a,b){var s,r,q,p,o=this
t.W.a(b)
s=o.a.d
r=b.a.d
if(s!==r)return B.c.al(s,r)
if(o.gag().length!==b.gag().length)return B.c.al(o.gag().length,b.gag().length)
for(q=0;q<o.gag().length;++q){s=o.gag()
if(!(q<s.length))return A.b(s,q)
p=s[q]
s=b.gag()
if(!(q<s.length))return A.b(s,q)
r=p.a.d
s=s[q].a.d
if(r!==s)return B.c.al(r,s)}s=o.f
r=b.f
if(s!==r)return B.c.al(r,s)
return 0},
b1(a){var s=this,r=a==null?s.f:a
return new A.L(s.a,s.b,s.c,s.d,r)},
d2(){return this.b1(null)},
jW(a){if(this.a!==a.a)return!1
if(this.gag().length!==0)return!1
if(a.gag().length!==0)return!1
return!0},
lw(a){var s,r,q=this
if(!q.jW(a))return
s=q.f+a.f
r=q.a.CW
if(s<=r){q.f=s
a.f=0}else{q.f=r
a.f=s-r}},
dq(a){this.f-=a
return this.b1(a)},
n_(){var s,r,q,p,o=t.s,n=A.a([],o),m=A.a([],o)
for(o=this.gag(),s=o.length,r=0;r<o.length;o.length===s||(0,A.o)(o),++r){q=o[r].a
p=q.b
if(q.c)B.a.j(n,p)
else B.a.j(m,p)}return this.a.a.jT(this.f,n,m)},
$iaz:1}
A.pF.prototype={
$2(a,b){return A.r(a)+t.L.a(b).gcc()},
$S:14}
A.pA.prototype={
$2(a,b){return A.bw(a)*t.L.a(b).gd5()},
$S:50}
A.pz.prototype={
$2(a,b){return A.r(a)+t.L.a(b).gd4()},
$S:14}
A.py.prototype={
$2(a,b){A.r(a)
t.L.a(b)
return a+b.a.z.$1(b.b)},
$S:14}
A.pG.prototype={
$2(a,b){A.r(a)
t.L.a(b)
return a+b.a.r.$1(b.b)},
$S:14}
A.pB.prototype={
$2(a,b){A.bw(a)
t.L.a(b)
return a*b.a.f.$1(b.b)},
$S:50}
A.pC.prototype={
$2(a,b){return A.r(a)+t.L.a(b).c8(this.a)},
$S:14}
A.pE.prototype={
$2(a,b){var s,r
t.M.a(a)
A.r(b)
s=this.a
s.b7(a,new A.pD())
r=s.m(0,a)
r.toString
s.h(0,a,r+b)},
$S:21}
A.pD.prototype={
$0(){return 0},
$S:2}
A.bO.prototype={}
A.rW.prototype={}
A.aP.prototype={
t(a){return this.a.a5(1).a}}
A.ln.prototype={
np(a){var s,r,q,p,o,n,m,l
t.E.a(a)
s=A.cT(this.a,t.q,t.S)
for(r=a.b,q=A.N(r),r=new J.aV(r,r.length,q.i("aV<1>")),q=q.c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=p.a
if(!s.ah(o))return null
n=s.m(0,o)
n.toString
s.h(0,o,n-p.f)}r=A.y(s).i("b6<1>")
r=A.a6(new A.b6(s,r),r.i("k.E"))
q=r.length
m=0
for(;m<r.length;r.length===q||(0,A.o)(r),++m){l=r[m]
p=s.m(0,l)
p.toString
if(p<=0)s.af(0,l)}return s}}
A.dy.prototype={
oT(){var s=A.bq(new A.c6(this.b,26),null)
this.aK(s)
return s},
aK(a){var s,r,q,p,o,n,m,l,k,j,i=$.n(),h=a.c,g=B.e.N(i.aF(h*0.2,h*0.4))
for(s=a.b,r=i.a;q=s.length,q>g;){q=r.a3(q)
if(!(q>=0&&q<s.length))return A.b(s,q)
p=s[q]
B.a.dh(s,q)
if(a.d===p)a.d=null}o=B.e.N(i.aF(h*0.3,h*0.7))
i=this.a
h=a.gl7()
n=0
for(;;){if(s.length<o){m=n+1
r=n<100
n=m}else r=!1
if(!r)break
i.b2(null,1,h)
for(l=1;l<s.length;++l){k=l-1
j=s[k]
p=s[l]
if(j.a===p.a&&j.gag().length===0&&p.gag().length===0){if(!(l<s.length))return A.b(s,l)
p=s[l]
B.a.dh(s,l)
if(a.d===p)a.d=null
l=k}}}}}
A.jy.prototype={}
A.ay.prototype={
gbp(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ay
for(s=g.CW,r=s.length,q=0;q<r;++q)f+=s[q].a
s=6+g.z
if(!(s>=0&&s<13))return A.b(B.aS,s)
s=B.aS[s]
for(r=g.d,p=r.length,o=0,q=0;q<p;++q){n=r[q]
o+=n.c*n.e.e}for(r=g.e,m=r.length,l=0,k=0,q=0;q<r.length;r.length===m||(0,A.o)(r),++q){j=r[q]
i=j.a
l+=j.gbp()/i
k+=1/i}r=g.ax
h=r.a?1.1:1
if(r.b)h*=0.9
if(r.c)h*=1.05
if(r.d)h*=0.7
if(r.e)h*=1.1
return B.e.aV(g.f*(1+f/100)*s*(o/p*(1-k)+l)*h*A.w(g.y,0,100,1,0.7)/100)},
fv(a,b){var s=b!=null?b.as+1:1,r=a.gn(),q=a.gp(),p=new A.ad(this,s,new A.co(),A.D(t.d0,t.cZ),$.n().bs(60,200),new A.h9(),new A.dR(),new A.h0(),new A.dR(),new A.hc(),new A.he(),new A.hH(),new A.hI(),A.D(t.h,t.mF),new A.e(r,q))
p.lJ(this,r,q,s)
return p},
ii(a){return this.fv(a,null)},
lv(){var s,r,q=this,p=A.a([],t.fO),o=$.n().aC(q.cx,q.cy)
for(s=0;s<o;++s)B.a.j(p,q)
r=q.db
if(r!=null)r.cW(B.e.bQ(q.c*0.9),t.or.a(B.a.gop(p)))
return p},
t(a){return this.a.a}}
A.fk.prototype={
aN(){return"SpawnLocation."+this.b}}
A.nO.prototype={
t(a){var s=this,r=A.a([],t.s)
if(s.a)r.push("berzerk")
if(s.b)r.push("cowardly")
if(s.c)r.push("fearless")
if(s.d)r.push("immobile")
if(s.e)r.push("protective")
if(s.f)r.push("unique")
return B.a.aG(r," ")}}
A.ad.prototype={
geO(){return this.Q.b},
gan(){return this.Q.a},
gbr(){return this.Q.f},
gdK(){return 0},
gdU(){return this.Q.ch},
gdm(){var s=this.Q,r=s.w,q=r+s.x
if(q===0)return 0
return r/q},
lJ(a,b,c,d){var s,r,q,p,o=this
o.z=B.c.M(o.Q.f,0,o.gbr())
s=o.at
s.a!==$&&A.ax()
s.a=o
s=o.Q
if(s.ax.b)o.cx*=0.7
for(s=s.e,r=s.length,q=o.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p)q.h(0,s[p],0)},
lb(a){var s,r=this.ax,q=r.m(0,a)
q.toString
s=a.a
r.h(0,a,q+$.n().aF(s,s*1.3))},
gjR(){return 6+this.Q.z},
gjQ(){return this.Q.ay},
cr(){return this.Q.at},
kG(){return this.Q.CW},
ao(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="{1} is afraid!"
for(s=i.Q.e,r=s.length,q=i.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
n=q.m(0,o)
n.toString
q.h(0,o,Math.max(0,n-1))}m=0+i.nQ(a)+i.mW(a)
s=i.ch*0.75+m*0.2
i.ch=s
i.ch=B.e.M(s,0,1)
s=i.y
l=5+s.S(0,a.y.y).gb4()
r=a.x
r===$&&A.c()
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))l=5+l*2
i.dD(-(2+l*i.z/i.Q.f))
i.CW=B.e.M(i.CW,0,i.cx)
k=Math.max(m,i.ch)
A.cs(i,"aware",m,h)
A.cs(i,"alert",i.ch,h)
A.cs(i,"notice",k,h)
A.cs(i,"fear",i.CW/i.cx,h)
j=i.at
s=j instanceof A.co
if(s&&i.CW>i.cx){i.h7()
return A.jC(g,new A.cG(),B.b5)}if(s){s=$.n()
r=i.lU(k)
r=s.U(100)<r
s=r}else s=!1
if(s){i.ch=1
i.h7()
return A.jC("{1} wakes up!",new A.cH(),B.bK)}s=j instanceof A.cH
if(s&&i.CW>i.cx)return A.jC(g,new A.cG(),B.b5)
if(s&&k<0.01){i.ch=0
return A.jC("{1} falls asleep.",new A.co(),h)}if(j instanceof A.cG&&i.CW<=0)return A.jC("{1} find[s] {1 his} courage.",new A.cH(),h)
return i.at.bJ(a)},
lU(a){var s
if(a<0.1)return 0
if(a>0.8)return 100
s=A.w(a,0.1,0.8,0,1)
return B.e.P(A.w(s*s*s,0,1,5,100))},
nQ(a){var s,r,q,p,o,n=this,m="see"
if(n.Q.w===0){A.cs(n,m,0,"sightless")
return 0}s=a.y.y
r=a.x
r===$&&A.c()
if(!r.eS(n,s)){A.cs(n,m,0,"out of sight")
return 0}r=r.f.B(s.gn(),s.gp())
q=r.d+r.e
if(q===0){A.cs(n,m,0,"hero in dark")
return 0}p=s.S(0,n.y).gb4()
r=n.Q.w
if(p>=r){A.cs(n,m,0,"too far")
return 0}o=(r-p)/r
A.cs(n,m,q*o,null)
return q/64*o},
mW(a){var s,r,q,p=this
if(p.Q.x===0){A.cs(p,"hear",0,"deaf")
return 0}s=a.x
s===$&&A.c()
r=p.y
s=s.geJ()
r=s.jF(s.j_(r))
s=a.y.cy
q=r*s*p.Q.x/10
A.cs(p,"hear",q,"noise "+A.J(s)+", volume "+A.J(q))
return q},
dD(a){var s,r=this
if(r.z<=0)return
s=r.Q.ax
if(s.c)return
if(s.d)return
r.CW=Math.max(0,r.CW+a)},
kC(a){var s=$.n(),r=t.aH.a(this.Q.d)
s=s.U(r.length)
if(!(s>=0&&s<r.length))return A.b(r,s)
return A.a([A.bN(r[s])],t.o0)},
hK(a){return 0},
kH(a,b,c){var s,r,q=a.c
q===$&&A.c()
s=q.y.Q.CW.a
s.toString
r=100*c/B.e.N(Math.pow(s,1.458)+9)
this.dD(-r)
s=q.y.Q.CW.a
s.toString
A.jQ(this,"fear","hit for "+c+"/"+B.e.N(Math.pow(s,1.458)+9)+" decrease by "+A.J(r))
this.jD(q,new A.qi(a,c))},
ol(a,b){var s,r=this
if(r.at instanceof A.co)return
s=50*b/r.Q.f
r.dD(-s)
A.jQ(r,"fear","witness "+b+"/"+r.Q.f+" decrease by "+A.J(s))},
kL(a,b,c){var s,r,q,p,o,n,m=this
m.ch=1
s=m.Q
r=100*c/s.f
if(s.ax.a)r*=-3
m.dD(r)
A.jQ(m,"fear","hit for "+c+"/"+m.Q.f+" increases by "+A.J(r))
s=a.c
s===$&&A.c()
m.jD(s,new A.qj(m,a,c))
q=m.Q.e
p=A.N(q)
o=p.i("ao<1>")
n=A.a6(new A.ao(q,p.i("z(1)").a(new A.qk(m,c)),o),o.i("k.E"))
q=n.length
if(q!==0){p=$.n()
t.kz.a(n)
q=p.U(q)
if(!(q>=0&&q<n.length))return A.b(n,q)
q=n[q]
m.lb(q)
a.hh(q.bW(s,m),m)}},
om(a,b,c){var s,r,q,p=this
if(p.at instanceof A.co)return
s=p.Q
r=50*c/s.f
q=s.ax
if(q.e&&b.Q===s)r*=-2
else if(q.a)r*=-1
p.dD(r)
A.jQ(p,"fear","witness "+c+"/"+p.Q.f+" increase by "+A.J(r))},
kD(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.c
j===$&&A.c()
s=j.x
s===$&&A.c()
r=k.y
q=k.Q
p=s.e5(r,q.Q,q.c)
for(s=p.length,o=0;o<p.length;p.length===s||(0,A.o)(p),++o){n=p[o]
r=j.x
r===$&&A.c()
q=a.b
q===$&&A.c()
r=r.f
m=q.gn()
q=q.gp()
r.l(m,q)
l=r.a
m=q*r.b.b.a+m
if(!(m>=0&&m<l.length))return A.b(l,m)
m=l[m]
if(!m.b&&m.d+m.e>m.c||a.a instanceof A.av)j.y.Q.at.Y(B.x,"{1} drop[s] {2}.",k,n,null)}j=j.x
j===$&&A.c()
j.kV(k)},
hI(a,b,c){var s,r=a.x
r===$&&A.c()
s=r.f.B(b.gn(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){s=r.f.B(c.gn(),c.gp())
s=!s.b&&s.d+s.e>s.c}else s=!0
if(s){s=a.y
if(!(s.at instanceof A.aY))s.at=null}s=r.f.B(b.gn(),b.gp())
if(!(!s.b&&s.d+s.e>s.c)){r=r.f.B(c.gn(),c.gp())
r=!r.b&&r.d+r.e>r.c}else r=!1
if(r)a.y.fs(this)},
jD(a,b){var s,r,q,p,o,n,m
t.lL.a(b)
s=a.x
s===$&&A.c()
r=s.b
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o===this)continue
if(!(o instanceof A.ad))continue
n=o.y
m=this.y
n=n.S(0,m)
if(Math.max(Math.abs(n.a),Math.abs(n.b))>20)continue
if(s.eS(o,m))b.$1(o)}},
h7(){var s,r,q,p,o
for(s=this.Q.e,r=s.length,q=this.ax,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
q.h(0,o,$.n().aS(o.a/2))}}}
A.qi.prototype={
$1(a){a.ol(this.a,this.b)},
$S:39}
A.qj.prototype={
$1(a){a.om(this.b,this.a,this.c)},
$S:39}
A.qk.prototype={
$1(a){return t.d0.a(a).ic(this.a,this.b)},
$S:38}
A.jB.prototype={
V(){var s,r,q,p=this
p.a_(p.e,p.a)
s=p.r
if(s!=null)p.cF(s,p.a)
r=t.B.a(p.a)
q=r.at=p.f
q.a!==$&&A.ax()
q.a=r
r=p.c
r===$&&A.c()
return p.bd(q.bJ(r))}}
A.qg.prototype={
hO(a){var s,r=this,q=r.e
if(q!=null){s=r.c
s=r.e_(a.b,s)<r.e_(q.b,s)}else s=!0
if(s)q=r.e=a
if(a.c>=r.d.Q.r)return q.a
return null},
e_(a,b){var s,r=b.S(0,a),q=Math.abs(r.a)
r=Math.abs(r.b)
s=Math.min(q,r)
return(Math.max(q,r)-s)*10+s*11},
fz(a,b){var s,r,q,p=this,o=null
if(b.x!==0)return o
s=a.S(0,p.b).gb4()===1
if(p.a.w.B(a.a,a.b)!=null){if(s)return o
return 60}r=b.a.e
q=$.bK()
if(r.X(0,q))if((p.d.gb5().a&q.a)!==0)return 20
else if(s)return o
else return 80
if((r.a&p.d.gb5().a)!==0)return 10
return o},
hQ(a){return a.a},
i3(){var s=this.e
if(s==null)return null
return s.a}}
A.f_.prototype={
fZ(a,b){var s,r,q,p,o=this.a
o===$&&A.c()
s=o.Q.y
if(o.b.a>0||o.d.a>0)s+=B.e.N(o.gdm()*50)
else if(o.y.F(0,b).X(0,a.y.y))s=s/4|0
s=Math.min(s,90)
if(!($.n().U(100)<s))return b
if(b===B.r)r=B.a6
else{r=A.a([],t.T)
for(q=0;q<3;++q){B.a.j(r,b.gb9())
B.a.j(r,b.gba())}for(q=0;q<2;++q){B.a.j(r,b.gbG())
B.a.j(r,b.gbX())}B.a.j(r,b.gbG().gb9())
B.a.j(r,b.gbX().gba())}o=A.N(r)
p=o.i("ao<1>")
r=A.a6(new A.ao(r,o.i("z(1)").a(new A.qh(this,a)),p),p.i("k.E"))
o=r.length
if(o===0)return b
p=$.n()
t.du.a(r)
o=p.U(o)
if(!(o>=0&&o<r.length))return A.b(r,o)
return r[o]}}
A.qh.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bn(r,s.gb5())&&p.f.B(r.a,r.b).x===0))return!1
s=p.w.B(r.a,r.b)
return s==null||s===q.y},
$S:9}
A.co.prototype={
bJ(a){return A.lq()}}
A.cH.prototype={
bJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.mA(a)
if(b!==B.r)return A.bt(b)
s=c.a
s===$&&A.c()
r=s.Q.e
q=A.N(r)
p=q.i("ao<1>")
o=A.a6(new A.ao(r,q.i("z(1)").a(new A.nJ(c,a)),p),p.i("k.E"))
r=o.length
if(r!==0){q=$.n()
t.kz.a(o)
r=q.U(r)
if(!(r>=0&&r<o.length))return A.b(o,r)
r=o[r]
s.lb(r)
return r.bW(a,s)}r=s.Q
if(r.ax.d){n=a.y.y.S(0,s.y)
if(n.gb4()!==1)return A.lq()
return A.bt(n.gkA())}s.ay=!0
for(q=r.e,p=q.length,m=0,l=0,k=0;k<p;++k){j=q[k]
if(!(j instanceof A.fZ))continue
m+=j.b.c/j.a;++l}if(l!==0){for(q=r.d,p=q.length,i=0,h=0,k=0;k<p;++k){i+=q[k].c;++h}if(h>0)i/=h
m/=l
g=100*m/(m+i)+s.CW+100*(1-s.z/r.f)
if(s.y.S(0,a.y.y).eg(0,1))s.ay=g<60
else s.ay=g<30}f=c.mI(a)
e=l>0?c.mJ(a):null
if(s.ay)d=f==null?e:f
else d=e==null?f:e
return A.bt(c.fZ(a,d==null?B.r:d))},
mA(a){var s,r,q=a.x
q===$&&A.c()
s=this.a
s===$&&A.c()
r=s.y
if(q.f.B(r.gn(),r.gp()).x===0)return B.r
return A.cv(q,s.y,s.gb5(),null,!0,null).hq(new A.nH(a))},
mJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={}
c.a=9999
s=this.a
s===$&&A.c()
r=s.Q.e
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.o)(r),++p){o=r[p]
if(o.gaD()>0&&o.gaD()<c.a)c.a=o.gaD()}n=new A.nI(c,this,a)
if(n.$1(s.y)){m=s.y.S(0,a.y.y).gb4()
l=B.r}else{l=null
m=0}for(r=a.y,p=0;p<8;++p){k=B.a6[p]
j=s.y.F(0,k)
q=a.x
q===$&&A.c()
i=s.cr()
if(q.bn(j,s.e.a>0?new A.ag(i.a|$.V().a):i)){h=q.w
g=j.a
f=j.b
h.l(g,f)
e=h.a
g=f*h.b.b.a+g
if(!(g>=0&&g<e.length))return A.b(e,g)
g=e[g]==null
h=g}else h=!1
if(h){q=q.f
h=j.a
g=j.b
q.l(h,g)
f=q.a
h=g*q.b.b.a+h
if(!(h>=0&&h<f.length))return A.b(f,h)
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
k=A.cv(r,s.y,s.gb5(),null,!0,c.a).hq(n)
if(k!==B.r){A.cr(s,"ranged position "+k.t(0))
return k}A.cr(s,"no good ranged position")
return null},
mI(a){var s,r,q=this.mH(a)
if(q!=null)return q
s=a.x
s===$&&A.c()
r=this.a
r===$&&A.c()
return new A.qg(r,s,r.y,s.a.y.y).fq()},
mH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a
f===$&&A.c()
s=a.y
r=A.ed(f.y,s.y)
q=g
p=1
while(r.q(),!0){o=r.a
if(q==null)q=o
n=a.x
n===$&&A.c()
m=n.f
l=o.gn()
k=o.gp()
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
if(j[l].x>0)return g
i=f.cr()
if(!n.bn(o,f.e.a>0?new A.ag(i.a|$.V().a):i))return g
n=n.w
m=o.gn()
l=o.gp()
n.l(m,l)
k=n.a
m=l*n.b.b.a+m
if(!(m>=0&&m<k.length))return A.b(k,m)
m=k[m]
if(m!=null&&!(m instanceof A.av))return g;++p
if(p>=f.Q.r)return g
if(o.X(0,s.y))break}h=q.S(0,f.y)
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
mU(a,b){var s,r,q,p,o,n,m,l
for(s=a.y,r=A.ed(b,s.y);r.q(),!0;){q=r.a
if(q.X(0,s.y))return!0
p=a.x
p===$&&A.c()
o=p.f
n=q.gn()
m=q.gp()
o.l(n,m)
l=o.a
n=m*o.b.b.a+n
if(!(n>=0&&n<l.length))return A.b(l,n)
n=l[n]
l=$.V()
if((n.a.e.a&l.a)===0)return!1
p=p.w
o=q.gn()
n=q.gp()
p.l(o,n)
m=p.a
o=n*p.b.b.a+o
if(!(o>=0&&o<m.length))return A.b(m,o)
o=m[o]
if(o!=null){p=this.a
p===$&&A.c()
p=o!==p}else p=!1
if(p)return!1}throw A.m(A.bM("Unreachable."))}}
A.nJ.prototype={
$1(a){var s
t.d0.a(a)
s=this.a.a
s===$&&A.c()
return s.ax.m(0,a)===0&&a.bL(this.b,s)},
$S:38}
A.nH.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).x===0},
$S:1}
A.nI.prototype={
$1(a){var s,r,q=this,p=q.c,o=a.S(0,p.y.y)
if(o.bi(0,q.a.a))return!1
if(o.gb4()<=2)return!1
s=p.x
s===$&&A.c()
s=s.w.B(a.gn(),a.gp())
if(s!=null){r=q.b.a
r===$&&A.c()
r=s!==r
s=r}else s=!1
if(s)return!1
return q.b.mU(p,a)},
$S:1}
A.cG.prototype={
bJ(a){var s,r,q,p,o,n=this,m=a.x
m===$&&A.c()
s=n.a
s===$&&A.c()
r=s.y
if(m.f.B(r.gn(),r.gp()).b)return A.lq()
q=A.cv(m,s.y,s.gb5(),null,!0,s.Q.r).hq(new A.nD(a))
if(q!==B.r){A.cr(s,"fleeing "+q.t(0)+" out of sight")
return A.bt(n.fZ(a,q))}m=t.e0
p=new A.ao(B.a6,t.ca.a(new A.nE(n,a,s.y.S(0,a.y.y).gb4())),m)
if(!p.gaq(0)){r=$.n()
m=A.a6(p,m.i("k.E"))
t.du.a(m)
r=r.U(m.length)
if(!(r>=0&&r<m.length))return A.b(m,r)
q=m[r]
A.cr(s,"fleeing "+q.t(0)+" away from hero")
return A.bt(n.fZ(a,q))}o=s.at=new A.cH()
o.a=s
return o.bJ(a)}}
A.nD.prototype={
$1(a){var s=this.a.x
s===$&&A.c()
return s.f.B(a.a,a.b).b},
$S:1}
A.nE.prototype={
$1(a){var s,r,q,p
t.j.a(a)
s=this.a.a
s===$&&A.c()
r=s.y.F(0,a)
q=this.b
p=q.x
p===$&&A.c()
if(!(p.bn(r,s.gb5())&&p.w.B(r.a,r.b)==null&&p.f.B(r.a,r.b).x===0))return!1
return r.S(0,q.y.y).gb4()>this.c},
$S:9}
A.bc.prototype={
gaD(){return 0},
bL(a,b){return!0},
ic(a,b){return!1}}
A.lk.prototype={
gaD(){return this.b.d}}
A.cq.prototype={
b_(a,b,c){var s,r,q,p=this,o=p.$ti.c
o.a(b)
p.b=Math.min(p.b,c)
s=p.a
r=c+1
if(s.length<=r)B.a.sI(s,r)
if(!(c>=0&&c<s.length))return A.b(s,c)
q=s[c]
if(q==null){q=A.hu(o)
B.a.h(s,c,q)}q.bk(q.$ti.c.a(b))},
fg(){var s,r,q,p=this.a
for(;;){s=this.b
r=p.length
if(s<r){if(!(s>=0))return A.b(p,s)
q=p[s]
q=q==null?null:q.b===q.c
q=q!==!1}else q=!1
if(!q)break
this.b=s+1}if(s>=r)return null
if(!(s>=0))return A.b(p,s)
return p[s].cO()}}
A.eL.prototype={
fF(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.a.f
if(c==null){k.d!==$&&A.ax()
k.d=new A.e(1,1)
j=j.b.b
s=j.a-2
r=j.b-2}else{q=k.b
p=Math.max(1,q.gn()-c)
o=Math.max(1,q.gp()-c)
j=j.b.b
n=Math.min(j.a-1,q.gn()+c+1)
m=Math.min(j.b-1,q.gp()+c+1)
k.d!==$&&A.ax()
k.d=new A.e(p,o)
s=n-p
r=m-o}j=t.C
j=j.a(new A.aa(A.am(s*r,-2,!1,t.S),new A.a0(new A.e(0,0),new A.e(s,r)),j))
k.c!==$&&A.ax()
k.c=j
q=k.d
q===$&&A.c()
l=k.b.S(0,q)
k.e.b_(0,l,0)
j.aZ(l.a,l.b,0)},
gcM(){return new A.S(this.pA(),t.e6)},
pA(){var s=this
return function(){var r=0,q=2,p=[],o,n,m,l
return function $async$gcM(a,b,c){if(b===1){p.push(c)
r=q}for(;;)A:switch(r){case 0:o=s.f,n=0
case 3:while(n>=o.length)if(!s.h3()){r=1
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
jS(a){var s,r=this.iV(t.mN.a(a)),q=r.length
if(q===0)return null
s=$.n()
t.A.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.b(r,q)
q=r[q]
s=this.d
s===$&&A.c()
return q.F(0,s)},
ck(a){var s,r,q,p,o,n=this.d
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
if(!(p>=0&&p<q.length))return A.b(q,p)
if(!(J.a9(q[p],-2)&&this.h3()))break}o=n.B(s,r)
if(o===-2||o===-1)return null
return o},
hq(a){var s,r=this.mi(this.iV(t.mN.a(a))),q=r.length
if(q===0)return B.r
s=$.n()
t.du.a(r)
q=s.U(q)
if(!(q>=0&&q<r.length))return A.b(r,q)
return r[q]},
iV(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.mN.a(a)
s=A.a([],t.l)
for(r=i.f,q=null,p=0;;++p){while(p>=r.length)if(!i.h3())return s
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
if(!(m>=0&&m<k.length))return A.b(k,m)
j=k[m]
if(q==null||j===q)B.a.j(s,o)
else break
q=j}return s},
mi(a){var s,r=A.bb(t.j)
B.a.ae(t.A.a(a),new A.oK(this,A.bb(t.u),r))
s=A.a6(r,r.$ti.c)
return s},
h3(){var s,r=this.e.fg()
if(r==null)return!1
s=this.c
s===$&&A.c()
s=new A.oL(this,r,s.B(r.gn(),r.gp()))
s.$2(B.M,!1)
s.$2(B.L,!1)
s.$2(B.Q,!1)
s.$2(B.T,!1)
s.$2(B.V,!0)
s.$2(B.S,!0)
s.$2(B.U,!0)
s.$2(B.R,!0)
return!0}}
A.oK.prototype={
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
if(n.X(0,r.S(0,k)))q.j(0,o.gcP())
else{k=n.a
j=n.b
m.l(k,j)
i=m.a
l=l.b.a
h=j*l+k
g=i.length
if(!(h>=0&&h<g))return A.b(i,h)
h=i[h]
if(typeof h!=="number")return h.cU()
if(h>=0){m.l(k,j)
k=a.gn()
j=a.gp()
m.l(k,j)
k=j*l+k
if(!(k>=0&&k<g))return A.b(i,k)
k=i[k]
if(typeof k!=="number")return A.Ch(k)
k=h<k
m=k}else m=!1
if(m)f.$1(n)}}},
$S:10}
A.oL.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.b.F(0,a),k=this.a,j=k.c
j===$&&A.c()
if(!j.b.G(0,l))return
s=l.a
r=l.b
if(!J.a9(j.B(s,r),-2))return
q=k.d
q===$&&A.c()
p=l.F(0,q)
p=k.a.f.B(p.a,p.b)
o=this.c
n=k.hY(o,l.F(0,q),p,b)
q=j.$ti
if(n==null)j.aZ(s,r,q.c.a(-1))
else{m=o+n
j.aZ(s,r,q.c.a(m))
B.a.j(k.f,l)
k.e.b_(0,l,m)}},
$S:94}
A.kT.prototype={
hY(a,b,c,d){var s,r=this,q=null
if((c.a.e.a&r.r.a)===0)return q
if(r.x&&c.x>0)return q
if(r.w&&r.a.w.B(b.a,b.b)!=null)return q
s=r.y
if(s!=null)s=a>=s
else s=!1
if(s)return q
return 1}}
A.oN.prototype={
dg(a){var s,r=this.a
if(r.a.y.b.a>0){this.mX()
return}for(s=0;s<8;++s)this.nz(a,s)
r.dl(a,!1,0)},
mX(){var s,r
for(s=this.a,r=A.ac(s.f.b);r.q();)s.dl(new A.e(r.b,r.c),!0,0)
s.dl(s.a.y.y,!1,0)},
nz(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
if(!(a6<8))return A.b($.wQ,a6)
s=$.wQ[a6]
r=s[0]
q=s[1]
a4.b=A.a([],t.mS)
s=a4.a
p=s.f
o=p.b
for(n=p.a,m=o.b.a,l=n.length,k=r.a,j=r.b,i=!1,h=1;;h=e){g=a5.F(0,new A.e(k*h,j*h))
if(!o.G(0,g))break
for(f=h+2,e=h+1,d=!1,c=0;c<=h;++c){if(i||d)s.dl(g,!0,255)
else{b=a5.S(0,g)
a=b.a
b=b.b
a0=Math.sqrt(a*a+b*b)
if(a0>24){d=!0
a1=255}else{a2=a0/24
a1=B.e.N(a2*a2*255)}a3=new A.n_(c/f,(c+1)/e)
s.dl(g,a4.n0(a3),a1)
b=g.a
a=g.b
p.l(b,a)
b=a*m+b
if(!(b>=0&&b<l))return A.b(n,b)
b=n[b]
a=$.V()
if((b.a.e.a&a.a)===0)i=a4.lQ(a3)}g=g.F(0,q)
if(!o.G(0,g))break}}},
n0(a){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=a.a,p=a.b,o=0;o<r;++o){n=s[o]
if(n.a<=q&&n.b>=p)return!0}return!1},
lQ(a){var s,r,q,p,o,n,m
for(s=this.b,r=s.length,q=a.a,p=0;o=p<r,o;++p)if(s[p].a>q)break
if(p>0){n=p-1
if(!(n<r))return A.b(s,n)
m=s[n].b>q}else m=!1
if(o&&s[p].a<a.b)if(m){q=p-1
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
o=q.b
if(!(p<r))return A.b(s,p)
q.b=Math.max(o,s[p].b)
B.a.dh(this.b,p)}else{if(!(p<r))return A.b(s,p)
s=s[p]
s.a=Math.min(s.a,q)}else if(m){q=p-1
if(!(q>=0&&q<r))return A.b(s,q)
q=s[q]
q.b=Math.max(q.b,a.b)}else{A.N(s).c.a(a)
s.$flags&1&&A.bx(s,"insert",2)
if(p>r)A.a_(A.hL(p,null))
s.splice(p,0,a)}s=this.b
r=s.length
if(r===1){if(0>=r)return A.b(s,0)
s=s[0]
s=s.a===0&&s.b===1}else s=!1
return s}}
A.n_.prototype={
t(a){return"("+A.J(this.a)+"-"+A.J(this.b)+")"}}
A.pR.prototype={
cN(){var s=this
if(s.f)s.nb()
if(s.r)s.na()
if(s.w)s.d.dg(s.a.a.y.y)
if(s.f||s.r||s.w){s.no()
s.nc()
s.oi()}s.w=s.r=s.f=!1},
nb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.e
B.a.aP(a3.a)
for(s=a2.a,r=s.f,q=r.b.b,p=q.b,q=q.a,o=a2.b,n=o.$ti.c,m=o.a,l=o.b.b.a,s=s.r,k=r.a,j=k.length,i=0;i<p;++i)for(h=i*l,g=i*q,f=0;f<q;++f){e=new A.e(f,i)
r.l(f,i)
d=g+f
if(!(d>=0&&d<j))return A.b(k,d)
d=k[d]
c=B.c.M(d.a.c+d.f,0,192)
b=s.m(0,e)
b=(b==null?A.bq(B.G,null):b).b
a=A.N(b)
b=new J.aV(b,b.length,a.i("aV<1>"))
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
a3.b_(0,e,255-c)}else{n.a(0)
o.l(f,i)
B.a.h(m,d,0)}}a2.jj(o,21)},
na(){var s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=i.$ti.c,g=i.a
B.a.pb(g,0,g.length,h.a(0))
s=j.e
B.a.aP(s.a)
for(r=j.a.b,q=r.length,p=i.b.b.a,o=0;o<r.length;r.length===q||(0,A.o)(r),++o){n=r[o]
m=A.kH(n.gdU())
if(m>0){l=n.y
h.a(m)
k=l.gn()
l=l.gp()
i.l(k,l)
B.a.h(g,l*p+k,m)
s.b_(0,n.y,255-m)}}j.jj(i,42)},
no(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=this.b,o=p.a,n=p.b.b.a,m=o.length,l=this.c,k=l.a,j=l.b.b.a,i=k.length,h=s.a,g=h.length,f=0;f<q;++f)for(e=f*n,d=f*j,c=f*r,b=0;b<r;++b){s.l(b,f)
a=c+b
if(!(a>=0&&a<g))return A.b(h,a)
a=h[a]
a0=$.V()
if((a.a.e.a&a0.a)===0)continue
p.l(b,f)
a0=e+b
if(!(a0>=0&&a0<m))return A.b(o,a0)
a.d=J.wv(o[a0],0,255)
l.l(b,f)
a0=d+b
if(!(a0>=0&&a0<i))return A.b(k,a0)
a.e=J.wv(k[a0],0,255)}},
nc(){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a.f,r=s.b.b,q=r.b,r=r.a,p=s.a,o=p.length,n=0;n<q;++n)for(m=n*r,l=0;l<r;++l){k={}
s.l(l,n)
j=m+l
if(!(j>=0&&j<o))return A.b(p,j)
j=p[j]
i=$.V()
if((j.a.e.a&i.a)!==0)continue
k.a=k.b=0
k.c=!1
h=new A.pS(k,this,l,n)
for(g=0;g<4;++g)h.$1(B.au[g])
if(!k.c)for(g=0;g<4;++g)h.$1(B.cg[g])
j.d=k.b
j.e=k.a}},
oi(){var s,r,q,p,o
for(s=this.a,r=s.f.b.b,q=r.b,r=r.a,p=0;p<q;++p)for(o=0;o<r;++o)s.p9(o,p)
r=s.a.y.y
s.d8(r.gn(),r.gp(),!0)},
jj(a,b){var s,r,q,p,o,n,m,l
t.C.a(a)
s=B.e.aV(b*1.5)
for(r=a.a,q=a.b.b.a,p=r.length,o=this.e;;){n=o.fg()
if(n==null)break
m=n.gn()
l=n.gp()
a.l(m,l)
m=l*q+m
if(!(m>=0&&m<p))return A.b(r,m)
m=new A.pT(this,n,r[m],a,b)
m.$2(B.M,b)
m.$2(B.L,b)
m.$2(B.Q,b)
m.$2(B.T,b)
m.$2(B.S,s)
m.$2(B.R,s)
m.$2(B.V,s)
m.$2(B.U,s)}}}
A.pS.prototype={
$1(a){var s,r,q,p=this,o=p.c+a.c,n=p.d+a.d
if(o<0)return
s=p.b.a.f
r=s.b.b
if(o>=r.a)return
if(n<0)return
if(n>=r.b)return
q=s.B(o,n)
if(q.b)return
s=$.V()
if((q.a.e.a&s.a)===0)return
s=p.a
s.c=!0
s.b=Math.max(s.b,q.d)
s.a=Math.max(s.a,q.e)},
$S:10}
A.pT.prototype={
$2(a,b){var s,r,q,p,o=this,n=o.b.F(0,a),m=o.a,l=m.a.f
if(!l.b.G(0,n))return
s=n.a
r=n.b
l=l.B(s,r)
q=$.V()
if((l.a.e.a&q.a)===0)return
p=o.c-b
l=o.d
q=l.B(s,r)
if(typeof q!=="number")return q.cU()
if(q>=p)return
l.aZ(s,r,l.$ti.c.a(p))
if(p<=o.e)return
m.e.b_(0,n,255-p)},
$S:95}
A.f4.prototype={
t(a){return this.a.t(0)+" pos:"+this.b.t(0)+" cost:"+this.d},
gI(a){return this.c}}
A.l8.prototype={
fq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=new A.cq(A.a([],t.nK),t.nA),a0=A.bb(t.u),a1=b.b,a2=b.c
a.b_(0,new A.f4(B.r,a1,0,0),b.e_(a1,a2))
for(a1=b.a.f,s=a1.a,r=a1.b,q=r.b.a,p=s.length;;){o=a.fg()
if(o==null)break
n=o.b
if(n.X(0,a2))return b.hQ(o)
if(!a0.j(0,n))continue
m=b.hO(o)
if(m!=null)return m
for(l=o.c+1,k=o.d,j=o.a,i=j===B.r,h=0;h<8;++h){g=B.a6[h]
f=n.F(0,g)
if(a0.G(0,f))continue
if(!r.G(0,f))continue
e=f.a
d=f.b
a1.l(e,d)
e=d*q+e
if(!(e>=0&&e<p))return A.b(s,e)
c=b.fz(f,s[e])
if(c==null)continue
e=i?g:j
d=k+c
a.b_(0,new A.f4(e,f,l,d),d+b.e_(f,a2))}}return b.i3()},
e_(a,b){return b.S(0,a).gb4()}}
A.rd.prototype={
pU(a,b){if(b.S(0,a).gb4()>16)return 0
return this.jF(new A.tG(this.a,a,b).fq())},
j_(a){var s
if(this.a.a.y.y.S(0,a).gb4()>16)return 16
this.ny()
s=this.b.ck(a)
return s==null?16:s},
jF(a){var s=(16-a)/16
return s*s},
ny(){var s,r,q=this,p=q.b
if(p!=null&&q.a.a.y.y.X(0,p.b))return
p=q.a
s=p.a.y.y
r=new A.n1(p,s,new A.cq(A.a([],t.k5),t.r),A.a([],t.l))
r.fF(p,s,null)
q.b=r}}
A.n1.prototype={
hY(a,b,c,d){var s,r,q=null
if(a>=16)return q
s=b.a
if(s<1)return q
r=this.a.f.b.b
if(s>=r.a-1)return q
s=b.b
if(s<1)return q
if(s>=r.b-1)return q
return A.y9(c)}}
A.tG.prototype={
hO(a){if(a.d>16)return 16
return null},
fz(a,b){return A.y9(b)},
hQ(a){return a.d},
i3(){return 16}}
A.rf.prototype={
gaA(){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===$){s=A.a([],t.k5)
r=l.f.b.b
q=r.a
r=r.b
p=t.S
o=q*r
n=A.am(o,0,!1,p)
m=t.C
p=A.am(o,0,!1,p)
l.c!==$&&A.ep()
k=l.c=new A.pR(l,new A.aa(n,new A.a0(new A.e(0,0),new A.e(q,r)),m),new A.aa(p,new A.a0(new A.e(0,0),new A.e(q,r)),m),new A.oN(l,B.i0),new A.cq(s,t.r))}return k},
geJ(){var s=this.d
return s===$?this.d=new A.rd(this):s},
eS(a,b){var s,r,q,p,o,n,m,l
for(s=A.ed(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length;s.q(),!0;){n=s.a
if(n.X(0,b))return!0
m=n.gn()
l=n.gp()
r.l(m,l)
m=l*p+m
if(!(m>=0&&m<o))return A.b(q,m)
m=q[m]
l=$.V()
if((m.a.e.a&l.a)===0)return!1}throw A.m(A.bM("Unreachable."))},
oQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=A.ed(a.y,b),r=this.f,q=r.a,p=r.b.b.a,o=q.length,n=this.w,m=n.a,l=n.b.b.a,k=m.length;s.q(),!0;){j=s.a
if(j.X(0,b))return!0
i=j.gn()
h=j.gp()
n.l(i,h)
i=h*l+i
if(!(i>=0&&i<k))return A.b(m,i)
if(m[i]!=null)return!1
i=j.gn()
h=j.gp()
r.l(i,h)
i=h*p+i
if(!(i>=0&&i<o))return A.b(q,i)
i=q[i]
h=$.V()
if((i.a.e.a&h.a)===0)return!1}throw A.m(A.bM("Unreachable."))},
bn(a,b){var s,r
if(a.gn()<0)return!1
s=this.f
r=s.b.b
if(a.gn()>=r.a)return!1
if(a.gp()<0)return!1
if(a.gp()>=r.b)return!1
return(s.B(a.gn(),a.gp()).a.e.a&b.a)!==0},
dJ(a){var s,r
B.a.j(this.b,a)
s=this.w
r=a.y
s.$ti.c.a(a)
s.aZ(r.gn(),r.gp(),a)},
kV(a){var s=this,r=s.b,q=B.a.c6(r,a),p=s.e
if(p>q)s.e=p-1
B.a.dh(r,q)
if(s.e>=r.length)s.e=0
r=s.w
p=a.y
r.$ti.c.a(null)
r.aZ(p.gn(),p.gp(),null)},
e5(a,b,c){var s=A.a([],t.I)
b.b2(this.a.y.Q.ax,c,new A.rs(this,s,A.cv(this,a,$.b3(),!1,null,null),a))
return s},
d0(a,b){this.r.b7(b,new A.ro()).c9(a)
if(a.a.ay>0)this.gaA().f=!0},
bS(a){var s=this.r.m(0,a)
return s==null?A.bq(B.G,null):s},
e8(a,b){var s=this.r,r=s.m(0,b)
B.a.af(r.b,a)
if(a.a.ay>0)this.gaA().f=!0
if(!r.gL(0).q())s.af(0,b)},
f3(a){this.r.ae(0,new A.rq(t.mH.a(a)))},
hZ(){var s=this.gaA()
s.w=s.r=s.f=!0
this.geJ().b=null},
d8(a,b,c){var s,r=this.f.B(a,b)
if(r.fn(c))if(!r.b&&r.d+r.e>r.c){s=this.w.B(a,b)
if(s!=null&&s instanceof A.ad)this.a.y.fs(s)}},
p9(a,b){return this.d8(a,b,null)},
dl(a,b,c){var s,r=this.f.B(a.gn(),a.gp())
r.b=b
r.c=c
if(!b&&r.d+r.e>c){s=this.w.B(a.gn(),a.gp())
if(s!=null&&s instanceof A.ad)this.a.y.fs(s)}},
ke(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(s=this.w,r=s.a,q=s.b.b.a,p=r.length,o=this.f,n=o.a,m=o.b,l=m.b,k=l.a,j=n.length,m=m.a,i=m.a,h=i+k,g=Math.min(i,h),h=Math.max(i,h);;){i=$.n()
i=i.a
f=i.a3(h-g)+g
e=m.b
d=e+l.b
c=Math.min(e,d)
d=Math.max(e,d)
i=i.a3(d-c)+c
b=new A.e(f,i)
o.l(f,i)
e=i*k+f
if(!(e>=0&&e<j))return A.b(n,e)
if((n[e].a.e.a&$.b3().a)===0)continue
s.l(f,i)
i=i*q+f
if(!(i>=0&&i<p))return A.b(r,i)
if(r[i]!=null)continue
return b}}}
A.rp.prototype={
$1(a){return new A.d1($.yU(),$.aD())},
$S:96}
A.rs.prototype={
$1(a){var s,r,q,p,o,n=this
B.a.j(n.b,a)
s=n.c
r=n.a
q=s.jS(new A.rr(r))
if(q==null){s=s.gcM()
s=A.At(s,10,s.$ti.i("k.E"))
p=A.a6(s,A.y(s).i("k.E"))
s=p.length
if(s!==0){o=$.n()
t.jX.a(p)
s=o.U(s)
if(!(s>=0&&s<p.length))return A.b(p,s)
q=p[s]}else q=n.d}q.toString
r.d0(a,q)},
$S:7}
A.rr.prototype={
$1(a){var s
if($.n().U(5)===0)return!0
s=this.a
return s.w.B(a.a,a.b)==null&&!s.r.ah(a)},
$S:1}
A.ro.prototype={
$0(){return A.bq(B.G,null)},
$S:97}
A.rq.prototype={
$2(a,b){var s,r,q,p
t.u.a(a)
for(s=t.D.a(b).b,r=A.N(s),s=new J.aV(s,s.length,r.i("aV<1>")),q=this.a,r=r.c;s.q();){p=s.d
q.$2(p==null?r.a(p):p,a)}},
$S:98}
A.ag.prototype={
ga0(a){return this.a},
X(a,b){if(b==null)return!1
if(b instanceof A.ag)return this.a===b.a
return!1},
cb(a,b){return new A.ag(this.a|b.a)},
t(a){var s=A.a([],t.s),r=this.a
if((r&$.bK().a)!==0)s.push("door")
if((r&$.V().a)!==0)s.push("fly")
if((r&$.iX().a)!==0)s.push("swim")
if((r&$.b3().a)!==0)s.push("walk")
return B.a.aG(s,"|")}}
A.bG.prototype={
t(a){return this.a}}
A.d2.prototype={}
A.d1.prototype={
or(a){this.f=B.c.M(this.f+a,0,192)},
fn(a){var s,r=this
if(a!==!0)s=!r.b&&r.d+r.e>r.c
else s=!0
if(s&&!r.r)return r.r=!0
return!1}}
A.jh.prototype={
a6(a){switch(a){case B.X:this.iz(-1)
break
case B.Y:this.iz(1)
break
case B.H:this.a.a8()
break
default:return!1}return!0},
ai(a){var s,r,q,p,o,n=this,m=null
a.cm(0,0,a.gaj(),a.gam())
s=a.e.a.b.b
r=s.b-1
n.nD(new A.aZ(new A.e(40,r),0,0,a))
s=s.a-40
r=new A.aZ(new A.e(s,r),40,0,a)
q=n.c
p=n.d
if(!(p>=0&&p<q.length))return A.b(q,p)
o=q[p]
A.bl(r,m,m,o.gO(),!0,m,m,m)
A.h5(r,o.gW(),m,s-1,1,2)
r.k(1,10,"Requirement:",B.f)
s=o.gbE().gW()
q=n.b
A.h5(r,s,o.gbE().dO(q)==null?B.n:B.m,m,1,12)
r.k(1,32,"Focus cost:",B.j)
r.k(13,32,A.R(o.f1(q.y.Q),!1,3),B.d)
s=t.N
A.bA(a,A.B(["\u2195","Select ability","`","Exit"],s,s),m)},
nD(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2500\u2500\u2500\u2500\u2500"
A.bl(a,i,i,"Abilities",!1,i,i,i)
a.k(34,1,"Focus",B.f)
a.k(2,2,h,B.l)
for(s=j.c,r=s.length,q=j.b,p=q.y.Q,o=0,n=0;n<s.length;s.length===r||(0,A.o)(s),++n){m=s[n]
l=o*2+3
a.k(2,l+1,h,B.t)
A:{k=j.d
if(o===k){k=B.iO
break A}k=m.gbE().dO(q)
if(k==null){k=B.iH
break A}k=B.iI
break A}a.k(2,l,m.gO(),k.a)
a.k(34,l,A.R(m.f1(p),!1,5),k.b);++o}a.ap(1,j.d*2+3,A.cO(9658,B.h,i))},
iz(a){var s=this,r=s.d,q=s.c.length
s.d=B.c.ab(r+q+a,q)
s.K()}}
A.fY.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a.y
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return++this.d<24*this.c},
bu(a,b){var s
t.a.a(b)
s=this.a.y
if((B.c.A(this.d,12)&1)===1)b.$3(s.gn(),s.gp(),this.b)},
$iaB:1}
A.jN.prototype={
aK(a){var s=this.c
return++this.d<s*B.e.P(A.w(s,1,10,16,8))},
bu(a,b){var s,r=this
t.a.a(b)
s=r.c
if(B.c.ab(r.d,B.e.P(A.w(s,1,10,16,8)))<B.c.A(B.e.P(A.w(s,1,10,16,8)),2)){s=r.a
b.$3(s.gn(),s.gp(),r.b)}},
$iaB:1}
A.h4.prototype={
aK(a){return--this.b>=0},
bu(a,b){var s,r,q,p
t.a.a(b)
s=B.c.A(this.b,4)
if(!(s>=0&&s<5))return A.b($.wI,s)
r=A.ar("*",$.wI[s],null)
q=A.xx(new A.jD(this.a,s),!0)
p=q.b
while(q.q())b.$3(p.b,p.c,r)},
$iaB:1}
A.h8.prototype={
aK(a){var s=this
if($.n().U(s.c+2)===0)++s.c
return s.c<s.b.length},
bu(a,b){var s,r,q,p,o
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
if(s.f.B(r.gn(),r.gn()).b)return
s=r.gn()
r=r.gp()
q=$.n()
p=this.b
o=this.c
if(!(o<p.length))return A.b(p,o)
o=t.af.a(p[o])
q=q.U(o.length)
if(!(q>=0&&q<o.length))return A.b(o,q)
b.$3(s,r,o[q])},
$iaB:1}
A.cN.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bu(a,b){var s=this.a
t.a.a(b).$3(s.gn(),s.gp(),this.b)},
$iaB:1}
A.kl.prototype={
aK(a){return this.c++<24},
bu(a,b){var s,r,q,p,o=null
t.a.a(b)
s=a.x
s===$&&A.c()
r=this.a
q=this.b
if(s.f.B(r,q).b)return
p=[B.t,B.a0,B.J,B.K][B.c.ab(B.c.A(this.c,4),4)]
b.$3(r-1,q,A.ar("-",p,o))
b.$3(r+1,q,A.ar("-",p,o))
b.$3(r,q-1,A.ar("|",p,o))
b.$3(r,q+1,A.ar("|",p,o))},
$iaB:1}
A.ko.prototype={
aK(a){return++this.b<24},
bu(a,b){var s,r,q,p,o
t.a.a(b)
s=this.a
if((B.c.A(this.b,6)&1)===0){b.$3(s.gn(),s.gp(),$.yC())
b.$3(s.gn()-1,s.gp(),$.yE())
b.$3(s.gn()+1,s.gp(),$.yF())}else{r=s.gn()
q=s.gp()
p=$.yB()
b.$3(r-1,q-1,p)
q=s.gn()
r=s.gp()
o=$.yG()
b.$3(q-1,r+1,o)
b.$3(s.gn()+1,s.gp()-1,o)
b.$3(s.gn()+1,s.gp()+1,p)
p=s.gn()
o=s.gp()
r=$.yD()
b.$3(p-1,o,r)
b.$3(s.gn()+1,s.gp(),r)}},
$iaB:1}
A.kw.prototype={
aK(a){var s,r=a.x
r===$&&A.c()
s=this.a
s=r.f.B(s.gn(),s.gp())
if(!(!s.b&&s.d+s.e>s.c))return!1
return--this.c>=0},
bu(a,b){var s=this.a
t.a.a(b).$3(s.gn(),s.gp(),this.b)},
$iaB:1}
A.kM.prototype={
aK(a){return--this.c>=0},
bu(a,b){var s,r,q,p=this
t.a.a(b)
s=a.x
s===$&&A.c()
r=p.b
q=t.v.a(s.f.B(r.gn(),r.gp()).a.d)
s=p.a
q=A.cO(q.a,q.b.bl(B.h,p.c/s),q.c.bl(B.k,p.c/s))
b.$3(r.gn(),r.gp(),q)},
$iaB:1}
A.l7.prototype={
aK(a){var s,r,q=this,p=q.a+q.c
q.a=p
s=q.b+q.d
q.b=s
p=B.e.N(p)
s=B.e.N(s)
r=a.x
r===$&&A.c()
r=r.f
if(!r.b.G(0,new A.e(p,s)))return!1
p=r.B(p,s)
s=$.V()
if((p.a.e.a&s.a)===0)return!1
return q.e-->0},
bu(a,b){t.a.a(b).$3(B.e.N(this.a),B.e.N(this.b),A.ar("\u2022",this.f,null))},
$iaB:1}
A.lL.prototype={
aK(a){var s,r,q,p=this,o=p.e,n=1-o*0.015,m=p.c*=n
p.d*=n
s=o*0.003
o=p.f
p.c=m+(o.gn()-p.a)*s
m=p.d
r=o.gp()
q=p.b
r=m+(r-q)*s
p.d=r
m=p.a+p.c
p.a=m
r=q+r
p.b=r;++p.e
return new A.e(B.e.N(m),B.e.N(r)).S(0,o).bi(0,1)},
bu(a,b){var s,r,q,p,o=this
t.a.a(b)
s=B.e.N(o.a)
r=B.e.N(o.b)
q=a.x
q===$&&A.c()
if(!q.f.b.G(0,new A.e(s,r)))return
p=o.mR(o.c,o.d)
q=$.n()
t.ev.a($.vf)
q=q.U(4)
if(!(q>=0&&q<4))return A.b($.vf,q)
b.$3(s,r,A.cO(p,$.vf[q],null))},
mR(a,b){var s,r="|\\\\--//||\\\\--//||"
if(new A.e(B.e.N(a*10),B.e.N(b*10)).eh(0,5))return 8226
s=B.e.bQ(Math.atan2(a,b)/6.283185307179586*16+8)
if(!(s>=0&&s<17))return A.b(r,s)
return r.charCodeAt(s)},
$iaB:1}
A.lQ.prototype={
aK(a){var s=this.d
if((s&1)===0)if(--this.b<0)return!1;--s
this.d=s
return s>=0},
bu(a,b){t.a.a(b).$3(this.a,this.b,this.c)},
$iaB:1}
A.hb.prototype={
gha(){var s,r=this,q=r.e
A:{if(0===q){s=r.b.Q.ay
break A}if(1===q){s=r.b.Q.ch
break A}if(2===q){s=r.b.Q.CW
break A}if(3===q){s=r.b.Q.cx
break A}s=null
break A}return s},
gjr(){var s,r=this.e
if(r<4)return null
s=this.c
r-=4
if(!(r<s.length))return A.b(s,r)
return s[r]},
giy(){var s,r,q,p,o=this,n=o.gha()
if(n!=null){if(n.b===40)return!1
s=o.b.Q
r=n.hy(s)
return s.y>=r}else{q=o.gjr()
if(q!=null){s=o.b.Q
p=s.z.eP(q)
if(p===s.c.ih(q))return!1
r=B.e.N(1000*Math.pow(1.8,p+1-1))
return s.y>=r}else return!1}},
lG(a,b){var s,r
for(s=$.uC(),r=0;r<26;++r)s[r].gbE()},
a6(a){switch(a){case B.X:this.iA(-1)
return!0
case B.Y:this.iA(1)
return!0
case B.H:this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this
if(c||b)return!1
switch(a){case 71:if(n.giy()){s=n.gha()
if(s!=null){r=n.b
q=r.Q
r.ij(s.hy(q))
s.kU(q,s.b+1)}else{p=n.gjr()
if(p!=null){r=n.b
q=r.Q.z
o=q.eP(p)+1
r.ij(B.e.N(1000*Math.pow(1.8,o-1)))
q.a.h(0,p,o)}}n.b.bt()
n.K()}return!0}return!1},
ai(a){var s,r,q,p,o,n,m=this,l=null
a.cm(0,0,a.gaj(),a.gam())
A.bl(a,l,3,l,!1,46,l,l)
a.k(2,1,"Available experience:",B.j)
s=m.b.Q
a.k(25,1,A.R(s.y,!1,9),B.d)
m.mq(new A.aZ(new A.e(46,11),0,3,a))
r=a.e.a.b.b
q=r.b
m.mo(new A.aZ(new A.e(46,q-14),0,14,a))
p=m.e
o=p<4?6:9
a.ap(1,p*2+o,A.cO(9658,B.h,l))
n=new A.aZ(new A.e(r.a-46,q),46,0,a)
r=m.e
switch(r){case 0:m.mr(n)
break
case 1:m.mj(n)
break
case 2:m.ms(n)
break
case 3:m.mm(n)
break
default:q=m.c
r-=4
if(!(r>=0&&r<q.length))return A.b(q,r)
m.mn(n,q[r])}r=t.N
r=A.D(r,r)
r.h(0,"\u2195","Change selection")
if(m.giy())r.h(0,"G","Gain "+(m.gha()!=null?"stat":"skill"))
r.h(0,"`","Exit")
A.bA(a,r,"You can spend "+A.R(s.y,!1,l)+" experience")},
mq(a){var s,r,q,p,o,n,m,l,k=null
A.bl(a,k,k,"Stats",!1,k,k,k)
a.k(21,1,"Base Equip Total    Cost",B.f)
s=this.b.Q
r=[s.ay,s.ch,s.CW,s.cx]
for(q=0,p=0;p<4;++p){o=r[p]
n=o.gbb()
m=o.b
l=o.a
l.toString
this.jI(a,q,n.c,m,l-m,o.hy(s),l,40,q===this.e);++q}},
mo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.bl(a,e,e,"Skills",!1,e,e,e)
a.k(21,1,"Base Equip Total    Cost",B.f)
for(s=f.c,r=s.length,q=f.b.Q,p=q.c.c,q=q.z,o=q.a,q=q.b,n=0,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=o.m(0,l)
if(k==null)k=0
j=l.gO()
i=q.m(0,l)
if(i==null)i=0
h=o.m(0,l)
if(h==null)h=0
g=q.m(0,l)
h=B.c.M(h+(g==null?0:g),0,15)
g=p.m(0,l.gcI())
if(g==null)g=0
f.jI(a,n,j,k,i,B.e.N(1000*Math.pow(1.8,k+1-1)),h,g,n===f.e-4);++n}},
jI(a,b,c,d,e,f,g,h,i){var s,r=b*2+3,q=b===0?B.l:B.t
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
a.k(20,r,A.R(d,!1,5),s)
C:{if(e>0){q=B.n
break C}if(e<0){q=B.m
break C}q=B.t
break C}a.k(26,r,A.R(e,!0,5),q)
a.k(32,r,A.R(g,!1,5),s)
if(d<h)a.k(38,r,A.R(f,!1,7),s)
else a.k(39,r,"At max",s)},
mr(a){this.ew(a,this.b.Q.ay,A.a(["Max Fury","Toss range scale"],t.s),new A.oA())},
mj(a){this.ew(a,this.b.Q.ch,A.a(["Dodge bonus","Strike bonus"],t.s),new A.ow())},
ms(a){this.ew(a,this.b.Q.CW,A.a(["Max health"],t.s),new A.oB())},
mm(a){this.ew(a,this.b.Q.cx,A.a(["Max focus"],t.s),new A.ox())},
ew(a,b,c,d){var s,r,q,p,o,n,m=null
t.m.a(c)
t.nB.a(d)
A.bl(a,m,m,b.gbb().c,!1,m,m,m)
s=b.a
s.toString
r=s-b.b
a.k(1,2,"Base value:",B.j)
a.k(15,2,A.R(b.b,!1,3),B.d)
q=this.b.Q
if(b===q.ay){p=-q.ged()
r=s-b.b-p
a.k(1,3,"Weight offset:",B.j)
a.k(15,3,A.R(p,!1,3),B.d)
o=4}else o=3
a.k(1,o,"Modifiers:",B.j)
a.k(15,o,A.R(r,!1,3),B.d);++o
a.k(1,o,"Current value:",B.j)
a.k(15,o,A.R(s,!1,3),B.d)
for(q=c.length,o=9,n=0;n<c.length;c.length===q||(0,A.o)(c),++n){a.k(1,o,c[n]+":",B.j);++o}a.k(24,7,"Current",B.f)
a.k(24,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(q=J.au(d.$1(s)),o=9;q.q();){a.k(24,o,B.i.df(q.gH(),7),B.d);++o}if(s<40){a.k(32,7,"   Next",B.f)
a.k(32,8,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500",B.l)
for(s=J.au(d.$1(s+1)),o=9;s.q();){a.k(32,o,B.i.df(s.gH(),7),B.d);++o}}},
mn(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
A.bl(a,f,f,b.gO(),!1,f,f,f)
s=this.b.Q
r=s.z
q=r.eP(b)
p=r.oD(b)
o=r.bU(b)
n=s.c.ih(b)
a.k(1,2,"Base level:",B.j)
a.k(13,2,A.R(q,!1,2),B.d)
a.k(16,2,"/",B.l)
a.k(18,2,A.R(n,!1,2),B.d)
for(m=0;m<n;++m){s=m<q?B.m:B.a1
a.ap(21+m*2,2,new A.Y(9608,s,B.z))}a.k(1,3,"Equipment:",B.j)
a.k(17,3,A.R(p,!0,3),B.d)
a.k(1,4,"Full level:",B.j)
a.k(13,4,A.R(o,!1,2),B.d)
a.k(16,4,"/",B.l)
a.k(18,4,A.R(15,!1,2),B.d)
A.h5(a,b.gW(),f,a.c.a-1,1,6)
l=this.d.m(0,b)
if(l!=null){a.k(1,12,"Abilities granted:",B.f)
k=l.geZ().eb(0)
B.a.dn(k,new A.oy())
for(s=k.length,j=14,i=0;i<k.length;k.length===s||(0,A.o)(k),++i){h=k[i]
a.ap(1,j,new A.Y(8226,B.l,B.z))
a.k(3,j,"Level "+h.a+": "+h.b.gO(),B.d);++j}}s=new A.oz(a,b)
s.$3("current",o,25)
g=B.c.M(q+1+p,0,n)
if(g<n)s.$3("next",g,35)},
iA(a){var s=this,r=4+s.c.length
s.e=B.c.ab(s.e+a+r,r)
s.K()}}
A.oA.prototype={
$1(a){return A.a([B.c.t(A.i2(a)),A.qv(A.xs(a),null)],t.s)},
$S:18}
A.ow.prototype={
$1(a){return A.a([B.c.t(A.wz(a)),B.c.t(A.wA(a))],t.s)},
$S:18}
A.oB.prototype={
$1(a){return A.a([B.c.t(B.e.N(Math.pow(a,1.458)+9))],t.s)},
$S:18}
A.ox.prototype={
$1(a){return A.a([B.c.t(A.kt(a))],t.s)},
$S:18}
A.oy.prototype={
$2(a,b){var s=t.cB
return B.c.al(s.a(a).a,s.a(b).a)},
$S:100}
A.oz.prototype={
$3(a,b,c){var s,r=this.a,q=r.c.a
A.jT(r,1,c,q-2,null)
r.k(2,c," At "+a+" level "+b+" ",B.f)
A:{if(b>0){s=new A.O(this.b.bq(b),null)
break A}s=B.iN
break A}A.h5(r,s.a,s.b,q-1,1,c+2)},
$S:101}
A.jS.prototype={
gbf(){return!0},
a6(a){var s=this
switch(a){case B.H:s.c1(B.r)
break
case B.aB:s.c1(B.V)
break
case B.X:s.c1(B.M)
break
case B.aA:s.c1(B.S)
break
case B.a9:s.c1(B.T)
break
case B.ad:s.c1(B.Q)
break
case B.aE:s.c1(B.U)
break
case B.Y:s.c1(B.L)
break
case B.aD:s.c1(B.R)
break}return!0},
bx(){var s=(this.c+1)%40
this.c=s
if(B.c.ab(s,5)===0)this.K()},
ai(a){var s=new A.o9(this,a)
s.$3(0,B.M,"|")
s.$3(1,B.S,"/")
s.$3(2,B.Q,"-")
s.$3(3,B.R,"\\")
s.$3(4,B.L,"|")
s.$3(5,B.U,"/")
s.$3(6,B.T,"-")
s.$3(7,B.V,"\\")
s=t.N
A.bA(a,A.B(["\u2195\u2194",this.gkk(),"`","Cancel"],s,s),this.gkP())},
c1(a){var s=this.l9(a),r=this.a
if(s)r.aQ(a)
else r.aQ(B.r)}}
A.o9.prototype={
$3(a,b,c){var s,r,q,p,o=this.a,n=o.b,m=n.b,l=m.y.y.F(0,b)
m=m.x
m===$&&A.c()
s=l.a
r=l.b
if(!o.jX(m.f.B(s,r)))return
if(B.c.A(o.c,5)===a)q=A.ar(c,B.h,B.w)
else{o=m.w.B(s,r)
if(o!=null)q=t.v.a(o.geO())
else{p=m.bS(l)
if(!p.gaq(0))q=p.gaB(0).a.b
else{o=m.f.B(s,r)
if(o.r)t.v.a(o.a.d)
else A.cO(32,null,null)
q=t.v.a(m.f.B(s,r).a.d)}}q=A.cO(q.a,B.h,B.w)}o=n.w
o===$&&A.c()
o.d6(this.b,s,r,q)},
$S:102}
A.fU.prototype={
gkP(){return"Which direction?"},
gkk(){return"Choose direction"},
jX(a){return!0},
l9(a){this.e.$1(a)
return!0}}
A.l5.prototype={
gkP(){return"Operate what?"},
gkk(){return"Choose direction"},
jX(a){return a.a.f!=null},
l9(a){var s=this.b.b,r=s.y,q=r.y.F(0,a)
s=s.x
s===$&&A.c()
s=s.f.B(q.a,q.b).a.f
if(s!=null){r.at=new A.aY(t.fD.a(s.$1(q)))
return!0}else{r.Q.at.Y(B.a_,"There is nothing to operate there.",null,null,null)
return!1}}}
A.eR.prototype={
hW(a){var s=this
if(s.Q!=a)s.K()
s.Q=a
s.as=null},
hX(a){var s=this
if(s.Q!=null||!J.a9(s.as,a))s.K()
s.Q=null
s.as=a},
gbP(){var s=this.gd3(),r=s==null?null:s.y
return r==null?this.as:r},
gd3(){var s,r,q=this,p=q.Q
if(p!=null)if(p.z<=0||!q.b.co(p))q.Q=null
s=q.Q
if(s!=null)return s
s=q.as
if(s!=null){r=q.b.x
r===$&&A.c()
return r.w.B(s.gn(),s.gp())}return null},
gkl(){var s=this.b.y,r=s.z,q=s.Q.CW,p=q.a
p.toString
if(r<B.e.N(Math.pow(p,1.458)+9)/4)return B.m
if(s.w.a>0)return B.n
if(s.c.a>0)return B.J
r=s.z
q=q.a
q.toString
if(r<B.e.N(Math.pow(q,1.458)+9)/2)return B.a5
return B.C},
ju(){var s=this.b.y
if(!(s.at instanceof A.dV))return!1
s.at=null
this.K()
return!0},
a9(a,b,c){if(a===16||a===18)return!1
return this.ju()},
a6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.ju())return!0
if(a===B.a2&&$.nm===13){s=f.a
s.toString
s.a1(A.xr("Commands",B.i8))
return!0}r=e
switch(a){case B.bh:f.a.a1(new A.hi(f,B.v))
break
case B.bk:s=f.b
q=s.x
q===$&&A.c()
p=s.y
o=p.y
if(q.f.B(o.gn(),o.gp()).a.b===B.aY){q=f.a
q.toString
q.a1(A.zF(f.c,s))}else{n=s.w===0
m=n?B.bB:B.aY
p.at=new A.dV(t.hD.a(new A.oX(f,m)),n)}break
case B.bf:f.a.a1(new A.hd(f.b.w===0))
break
case B.bt:s=f.a
s.toString
s.a1(A.Ax(f))
break
case B.b8:s=f.a
s.toString
q=A.a([],t.eI)
B.a.T(q,$.uC())
s.a1(new A.jh(f.b,q))
break
case B.bp:s=f.a
s.toString
q=f.b
s.a1(A.zH(q.a,q.y))
break
case B.aO:s=f.a
s.toString
q=B.aW.gaT()
q=A.a6(q,A.y(q).i("k.E"))
s.a1(new A.hg(q))
break
case B.bg:s=f.a
s.toString
q=f.b
p=q.a
q=q.y.Q
if($.bC.length===0){o=new A.jY(A.ve(B.cj,B.i4,B.i5,!1,t.c),B.cN,p,q)
o.dt()
l=A.A_(p,q)
q=new A.ky(p,q)
q.n2()
B.a.T($.bC,A.a([o,l,q],t.f_))}s.a1(B.a.gaB($.bC))
break
case B.b7:f.a.a1(new A.dp(f,B.v))
break
case B.bs:f.a.a1(new A.ea(f,B.v))
break
case B.br:f.a.a1(new A.e8(f,B.v))
break
case B.ba:f.b.y.at=new A.dV(e,!1)
break
case B.aC:if(!f.b.y.pE())f.K()
break
case B.bi:f.ns()
break
case B.bj:s=f.b
q=s.x
q===$&&A.c()
s=s.y
k=q.bS(s.y)
q=k.b.length
if(q>1)f.a.a1(new A.e2(f,B.G))
else if(q===1)s.at=new A.aY(A.xa(k.gaB(0)))
else{s.Q.at.Y(B.a_,"There is nothing here.",e,e,e)
f.K()}break
case B.b9:f.a.a1(new A.dU(f,B.v))
break
case B.aB:r=A.bt(B.V)
break
case B.X:r=A.bt(B.M)
break
case B.aA:r=A.bt(B.S)
break
case B.a9:r=A.bt(B.T)
break
case B.a2:r=A.bt(B.r)
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
case B.aQ:f.b.y.at=new A.cc(B.T)
break
case B.aP:f.b.y.at=new A.cc(B.Q)
break
case B.bo:f.b.y.at=new A.cc(B.U)
break
case B.aq:f.b.y.at=new A.cc(B.L)
break
case B.bn:f.b.y.at=new A.cc(B.R)
break
case B.c6:f.bN(B.V)
break
case B.bc:f.bN(B.M)
break
case B.c5:f.bN(B.S)
break
case B.be:f.bN(B.T)
break
case B.bb:f.bN(B.Q)
break
case B.c8:f.bN(B.U)
break
case B.bd:f.bN(B.L)
break
case B.c7:f.bN(B.R)
break
case B.aN:A:{j=f.at
s=t.bW.b(j)
if(s){q=f.gd3()!=null
i=j}else{i=e
q=!1}if(q){f.iW(i)
break A}i=s?j:e
if(s){f.jb(i)
break A}if(t.ln.b(j)){f.a.a1(new A.fU(f.gmL(),f))
break A}s=t.lz.b(j)
h=s?j:e
if(s){s=f.b
q=s.y
q.at=new A.aY(h.dI(q.Q,h.ao(s)))
break A}f.b.y.Q.at.Y(B.a_,"No ability selected.",e,e,e)
f.K()}break
case B.bq:s=f.b.y.Q
g=s.e.d
if(g==null){s.at.Y(B.a_,"You aren't holding an unequipped item to swap.",e,e,e)
f.K()}else r=A.wM(B.v,g)
break
case B.c9:s=f.a
s.toString
q=t.bx
p=A.a([],q)
o=new A.ic(p,f.b)
B.a.T(p,A.a([new A.X(["m",77,"Map Dungeon",o.gnm()]),new A.X(["i",73,"Illuminate Dungeon",o.gmY()]),new A.X(["d",68,"Drop Item",o.gmu()]),new A.X(["s",83,"Spawn Monster",o.gon()]),new A.X(["x",88,"Gain Experience",o.gmO()]),new A.X(["k",75,"Kill All Monsters",o.gn8()]),new A.X(["c",67,"Clear All Floor Items",o.gm6()]),new A.X(["l",76,"Make Stairs",o.gnk()]),new A.X(["o",79,"Toggle Show All Monsters",o.go6()]),new A.X(["a",65,"Toggle Show Monster Alertness",o.go4()]),new A.X(["v",86,"Toggle Show Hero Volume",o.go8()])],q))
s.a1(o)
break}if(r!=null)f.b.y.at=new A.aY(r)
return!0},
d_(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b,a=b.y
if(!a.e1(b))d.x=10
A:{s=a0 instanceof A.hT
r=c
if(s){q=a1 instanceof A.l
if(q)r=a1
p=a1}else{p=c
q=!1}if(q){$.nm=0
d.a6(r)
break A}if(a0 instanceof A.ha){a=a.Q
a.x.ae(0,new A.oV())
q=d.d
q.bj()
o=d.a
o.toString
o.bh(A.oT(q,b.a,a,!1))
break A}n=c
if(a0 instanceof A.hV){m=!0
if(s)q=p
else{q=a1
s=m
p=q}q=A.fB(q)
if(q){if(s)o=p
else{o=a1
s=m
p=o}A.r(o)
n=o}}else q=!1
if(q){d.d.bj()
q=d.a
q.toString
l=A.uZ(b.a,n,a.Q,c,c)
a=l.ee()
q.a1(new A.hv(l,new A.aj(a.a(),a.$ti.i("aj<1>"))))
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
b.bh(A.wR(d.d,j))
break A}i=a0 instanceof A.hd
h=c
if(i){if(s)q=p
else{q=a1
p=q
s=!0}h=!0===q
q=h
q=q&&b.w>0}else q=!1
if(q){a=d.a
a.toString
a.bh(A.oT(d.d,b.a,d.c,!1))
break A}if(i)q=h
else q=!1
if(q){d.d.bj()
d.a.a8()
break A}if(a0 instanceof A.e9){d.d.bj()
break A}if(a0 instanceof A.b5&&b.w===0){d.d.bj()
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
if(o){d.jb(g)
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
if(k){d.a.a1(new A.fU(new A.oW(o,d),d))
break A}g=c
if(q){if(s)q=p
else{q=a1
p=q
s=!0}o=t.lz
q=o.b(q)
if(q)g=o.a(s?p:a1)}else q=!1
if(q){d.at=g
a.at=new A.aY(g.dI(a.Q,g.ao(b)))
break A}if(a0 instanceof A.hb)d.d.bj()}},
bx(){var s,r,q,p,o=this
if(o.mz())return
s=o.x
if(s>0){o.x=s-1
return}if(o.z){s=o.b
s=s.y.e1(s)}else s=!1
if(s){o.z=!1
s=o.w
s===$&&A.c()
if(s.d.length===0){o.a.a1(new A.hi(o,B.v))
return}}s=o.b
r=s.bx()
s=s.y
if(s.z<=0){q=o.a
q.toString
p=o.d
s=s.Q
if(s.d)p.af(0,s)
else p.pD(o.c)
p.bj()
q.bh(new A.kg(s))
return}q=o.w
q===$&&A.c()
if(q.aK(r))o.K()
q=s.Q.at.b
if(q!==o.y){o.y=q
o.K()}if(s.at instanceof A.dV)o.x=2},
di(a){var s,r,q,p,o,n,m,l=this
$.CC=a
if(A.vI()){s=l.r
s===$&&A.c()
s.a=null
l.e.a=null
l.f.a=null
s=l.w
s===$&&A.c()
s.a=new A.a0(new A.e(0,0),new A.e(a.a,a.b))
return}s=a.a
r=s-100
q=B.c.M(21+B.c.A(r,30)*3,21,33)
if(s>=100){p=Math.min(50,24+B.c.A(r,3))
l.f.a=new A.a0(new A.e(s-p,0),new A.e(p,a.b))}else p=0
r=a.b
o=Math.min(10,3+B.c.A(r-30,3))
n=s-q-p
m=l.r
m===$&&A.c()
m.a=new A.a0(new A.e(0,0),new A.e(q,r))
m=l.f
if(p>0)m.a=new A.a0(new A.e(s-p,0),new A.e(p,r))
else m.a=null
l.e.a=new A.a0(new A.e(q,0),new A.e(n,o))
s=l.w
s===$&&A.c()
s.a=new A.a0(new A.e(q,o),new A.e(n,r-o))},
ai(a){var s,r=this
a.cm(0,0,a.gaj(),a.gam())
s=r.w
s===$&&A.c()
s.ai(a)
r.e.ai(a)
s=r.r
s===$&&A.c()
s.ai(a)
r.f.ai(a)
A.CA(r,s)},
mz(){var s,r,q=this,p=q.b,o=p.x
o===$&&A.c()
p=p.y
s=p.y
r=o.f.B(s.gn(),s.gp()).a.b
if(r==q.ax)return!1
q.ax=r
switch(r){case B.bB:o=q.a
o.toString
p=p.Q
s=new A.hV(p)
s.e=Math.min(100,p.as+1)
o.a1(s)
break
case B.cM:q.a.a1(new A.it(q))
break
case B.cI:q.c_(0)
break
case B.cH:q.c_(1)
break
case B.cG:q.c_(2)
break
case B.cF:q.c_(3)
break
case B.cE:q.c_(4)
break
case B.cD:q.c_(5)
break
case B.cL:q.c_(6)
break
case B.cK:q.c_(7)
break
case B.cJ:q.c_(8)
break}return!0},
ns(){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.a([],t.l)
for(s=i.b,r=s.y,q=r.y.gbD(),p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o){n=q[o]
m=s.x
m===$&&A.c()
m=m.f
l=n.a
k=n.b
m.l(l,k)
j=m.a
l=k*m.b.b.a+l
if(!(l>=0&&l<j.length))return A.b(j,l)
if(j[l].a.f!=null)B.a.j(h,n)}q=h.length
if(q===0){r.Q.at.Y(B.a_,"You are not next to anything to operate.",null,null,null)
i.K()}else if(q===1){n=B.a.gaB(h)
s=s.x
s===$&&A.c()
r.at=new A.aY(t.fD.a(s.f.B(n.gn(),n.gp()).a.f.$1(n)))}else i.a.a1(new A.l5(i))},
jb(a){var s=this,r=s.a
r.toString
r.a1(A.xt(s,a.ef(0,s.b),new A.oU(s,a)))},
iW(a){var s=this,r=s.b,q=r.y,p=J.a9(s.gbP(),q.y)
if(p){q.Q.at.Y(B.a_,"You can't target yourself.",null,null,null)
s.K()
return}s.at=a
p=s.gbP()
p.toString
q.at=new A.aY(a.dI(q.Q,a.fb(r,p)))},
bN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(a===B.r)return
A:{s=c.at
r=t.ln.b(s)
q=r?s:b
if(r){r=c.b
p=r.y
p.at=new A.aY(q.dI(p.Q,q.hJ(r,a)))
break A}r=t.bW.b(s)
o=r?s:b
if(r){r=c.b
p=r.y
n=p.y.F(0,a)
m=A.eb()
for(l=A.ed(p.y,n);l.q(),!0;){k=l.a
j=r.x
j===$&&A.c()
i=j.w
h=k.gn()
g=k.gp()
i.l(h,g)
f=i.a
h=g*i.b.b.a+h
if(!(h>=0&&h<f.length))return A.b(f,h)
h=f[h]
if(h!=null){if(c.Q!==h)c.K()
c.Q=h
c.as=null
break}j=j.f
i=k.gn()
h=k.gp()
j.l(i,h)
g=j.a
i=h*j.b.b.a+i
if(!(i>=0&&i<g.length))return A.b(g,i)
i=g[i]
g=$.V()
if((i.a.e.a&g.a)===0){l=m.b
if(l===m)A.a_(A.zV(""))
t.n7.a(l)
if(c.Q!=null||!J.a9(c.as,l))c.K()
c.Q=null
c.as=l
break}if(k.S(0,p.y).cU(0,o.ef(0,r))){if(c.Q!=null||!J.a9(c.as,k))c.K()
c.Q=null
c.as=k
break}m.b=k}e=c.gbP()
l=p.Q
if(e!=null)p.at=new A.aY(o.dI(l,o.fb(r,e)))
else{r=r.x
r===$&&A.c()
p=p.y.F(0,a)
l.at.Y(B.a_,"There is a "+r.f.B(p.a,p.b).a.a+" in the way.",b,b,b)
c.K()}break A}r=t.lz.b(s)
d=r?s:b
if(r){c.b.y.Q.at.Y(B.a_,d.gO()+" does not take a direction.",b,b,b)
c.K()
break A}c.b.y.Q.at.Y(B.a_,"No ability selected.",b,b,b)
c.K()}},
c_(a){var s=this.b.y.Q.x,r=A.y(s).i("b6<1>"),q=A.a6(new A.b6(s,r),r.i("k.E"))
if(a>=q.length)return
r=this.a
r.toString
s=s.m(0,q[a])
s.toString
r.a1(new A.iH(s,this))}}
A.oX.prototype={
$1(a){var s=this.a.b.x
s===$&&A.c()
return s.f.B(a.gn(),a.gp()).a.b===this.b},
$S:1}
A.oV.prototype={
$2(a,b){t.c3.a(a).aK(t.D.a(b))},
$S:130}
A.oW.prototype={
$1(a){var s=this.b
s.at=this.a.a
s.bN(a)},
$S:36}
A.oU.prototype={
$1(a){return this.a.iW(this.b)},
$S:10}
A.hv.prototype={
gbf(){return!0},
a6(a){if(a===B.H){this.a.aQ(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aQ(!1)
break
case 89:this.a.aQ(!0)
break}return!0},
bx(){var s,r,q,p=this,o=null,n=new A.ru()
$.w_()
s=$.v6.$0()
n.a=s
n.b=null
for(s=p.c;n.gp5()<16;)if(s.q())p.K()
else{s=p.a
s.toString
if(0>=$.aX.length)return A.b($.aX,-1)
$.aX.pop()
r=v.G
q=r.rvipMap
if(q!=null)A.a2(q).shown=!1
if("rvipDraw" in r)A.pI(r,"rvipDraw",o,o,o,o)
s.fE(p.b)
A.nh()
return}p.d=(p.d+1)%10},
ai(a){var s,r=a.e.a.b.b
a=new A.aZ(new A.e(30,7),B.c.A(r.a-30,2),B.c.A(r.b-7,2),a)
A.cL(a,0,0,30,7,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a.k(2,2,"Entering dungeon...",B.d)
s=B.c.A(this.d,2)
a.k(2,4,B.i.aM(B.i.aL("/    ",6),s,s+26),B.d)}}
A.lJ.prototype={
gbf(){return!0},
lL(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.b,k=l.y,j=l.x
j===$&&A.c()
j=j.b
s=j.length
r=n.e
q=n.c
p=0
for(;p<j.length;j.length===s||(0,A.o)(j),++p){o=j[p]
if(!(o instanceof A.ad))continue
if(!l.co(o))continue
if(o.y.S(0,k.y).bi(0,q))continue
B.a.j(r,o)}if(r.length===0){n.f=!0
m.hX(k.y)}else n.jv(k.y)},
jv(a){var s,r,q,p=this.e,o=p.length
if(o===0)return!1
for(s=null,r=0;r<o;++r){q=p[r]
if(s==null||a.S(0,q.y).eh(0,a.S(0,s.y)))s=q}this.b.hW(s)
return!0},
a6(a){var s,r=this
switch(a){case B.a2:s=r.b
if(s.gbP()!=null){r.a.a8()
s=s.gbP()
s.toString
r.d.$1(s)}break
case B.H:r.a.a8()
break
case B.aB:r.ce(B.V)
break
case B.X:r.ce(B.M)
break
case B.aA:r.ce(B.S)
break
case B.a9:r.ce(B.T)
break
case B.ad:r.ce(B.Q)
break
case B.aE:r.ce(B.U)
break
case B.Y:r.ce(B.L)
break
case B.aD:r.ce(B.R)
break}return!0},
a9(a,b,c){var s,r,q=this
if(a===9&&q.e.length!==0){s=q.f
q.f=!s
r=q.b
if(s){s=r.gbP()
q.jv(s==null?r.b.y.y:s)}else r.hX(r.gbP())
return!0}return!1},
bx(){var s=(this.r+1)%25
this.r=s
if(B.c.ab(s,5)===0)this.K()},
ai(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9="Choose tile",b0=a7.b,b1=b0.b,b2=b1.x
b2===$&&A.c()
s=b1.y
r=b0.w
r===$&&A.c()
q=A.ac(r.r)
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
d=new A.e(f,e)
o.l(f,e)
c=e*m+f
if(!(c>=0&&c<l))return A.b(n,c)
c=n[c]
k.l(f,e)
b=e*i+f
if(!(b>=0&&b<h))return A.b(j,b)
b=j[b]
if(c.r){if(c.b)continue
a=c.a.e.a
if((a&$.b3().a)===0&&(a&$.V().a)===0)continue
if(b!=null)continue
if(b2.ah(d))continue}else if(a7.n1(d))continue
else if(b!=null&&b1.co(b))continue
if(d.S(0,s.y).bi(0,p))continue
if(c.r){a0=c.a.d
if(a0 instanceof A.Y)a1=a0.a
else{g.a(a0)
if(0>=a0.length)return A.b(a0,0)
a1=a0[0].a}}else a1=183
c=r.a.a
b=r.r.a
a=r.w
b3.ap(f+c.a-b.a+a.a,e+c.b-b.b+a.b,new A.Y(a1,B.h,B.z))}a2=b0.gbP()
if(a2==null)return
b0=o.B(a2.gn(),a2.gp())
if(b0.r){b1=$.V()
b0=(b0.a.e.a&b1.a)!==0&&!b0.b}else b0=!0
a3=!1
if(b0){a4=B.c.A(a7.r,5)
for(b0=A.ed(s.y,a2);b0.q(),!0;){d=b0.a
if(d.X(0,a2)){a3=!0
break}b1=d.gn()
b2=d.gp()
o.l(b1,b2)
b1=b2*m+b1
if(!(b1>=0&&b1<l))return A.b(n,b1)
b1=n[b1]
if(b1.r){b2=d.gn()
q=d.gp()
k.l(b2,q)
b2=q*i+b2
if(!(b2>=0&&b2<h))return A.b(j,b2)
if(j[b2]!=null)break
b2=$.V()
if((b1.a.e.a&b2.a)===0)break}b1=d.gn()
b2=d.gp()
q=a4===0?B.h:B.j
p=r.a.a
g=r.r.a
f=r.w
b3.ap(b1+p.a-g.a+f.a,b2+p.b-g.b+f.b,new A.Y(8226,q,B.z))
a4=B.c.ab(a4+5-1,5)}}else a4=0
a5=a3?a4===0?B.h:B.j:B.j
r.d6(b3,a2.gn()-1,a2.gp(),A.ar("-",a5,a8))
r.d6(b3,a2.gn()+1,a2.gp(),A.ar("-",a5,a8))
r.d6(b3,a2.gn(),a2.gp()-1,A.ar("|",a5,a8))
r.d6(b3,a2.gn(),a2.gp()+1,A.ar("|",a5,a8))
if(!a3)r.d6(b3,a2.gn(),a2.gp(),A.ar("X",a5,a8))
b0=t.N
a6=A.D(b0,b0)
if(a7.e.length===0)a6.h(0,"\u2195\u2194",a9)
else if(a7.f){a6.h(0,"\u2195\u2194",a9)
a6.h(0,"Tab","Target monsters")}else{a6.h(0,"\u2195\u2194","Choose monster")
a6.h(0,"Tab","Target floor")}a6.h(0,"`","Cancel")
A.bA(b3,a6,"Choose a target.")},
ce(a){if(this.f)this.m3(a)
else this.m4(a)},
m3(a){var s=this.b,r=s.gbP().F(0,a)
if(r.S(0,s.b.y.y).bi(0,this.c))return
s.hX(r)},
m4(a){var s,r,q,p,o,n,m,l,k,j,i,h=t.lE,g=A.a([],h),f=A.a([],h)
h=this.b
s=h.gbP()
s.toString
r=a.gbG()
for(q=this.e,p=q.length,o=r.c,n=r.d,m=0;m<q.length;q.length===p||(0,A.o)(q),++m){l=q[m]
k=l.y.S(0,s)
if(o*k.b-n*k.a>0)B.a.j(g,l)
else B.a.j(f,l)}q=t.B
j=A.Ba(g,new A.rQ(s),q)
if(j!=null){h.hW(j)
return}i=A.B9(f,new A.rR(s),q)
if(i!=null)h.hW(i)},
n1(a){var s,r,q,p,o,n,m,l=this.b.b,k=l.x
k===$&&A.c()
for(l=A.ed(l.y.y,a),k=k.f,s=k.a,r=k.b,q=r.b.a,p=s.length;l.q(),!0;){o=l.a
if(o.X(0,a))return!1
if(!r.G(0,o))return!0
n=o.gn()
m=o.gp()
k.l(n,m)
n=m*q+n
if(!(n>=0&&n<p))return A.b(s,n)
n=s[n]
if(n.r){m=$.V()
m=(n.a.e.a&m.a)===0
n=m}else n=!1
if(n)return!0}throw A.m(A.bM("Unreachable."))}}
A.rQ.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaH()},
$S:34}
A.rR.prototype={
$1(a){return t.B.a(a).y.S(0,this.a).gaH()},
$S:34}
A.i9.prototype={
gbf(){return!0},
a6(a){if(a===B.H){this.a.a8()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
if(a>=65&&a<=90){this.oj(a-65)
return!0}return!1},
oj(a){var s,r=this.c,q=r.length
if(a>=q)return
s=this.a
s.toString
if(!(a>=0))return A.b(r,a)
s.aQ(r[a])},
ai(a){var s,r,q,p,o,n,m,l=null,k="abcdefghijklmnopqrstuvwxyz",j=t.N
A.bA(a,A.B(["A-Z","Select ability","`","Exit"],j,j),l)
j=this.c
s=Math.max(j.length+2,3)
a=new A.aZ(new A.e(40,s),a.e.a.b.b.a-40,0,a)
A.bl(a,l,s,"Use which ability?",!0,l,l,l)
a.k(31,0," Focus ",B.h)
a=a.b8(1,1,38,s-2)
if(j.length===0){a.k(0,0,"(You don't have any abilities)",B.j)
return}r=this.b.b.y
for(q=a.c.a-5,p=r.Q,o=0;o<j.length;++o){n=j[o]
m=n.f1(p)
if(r.ch<m){a.k(3,o,n.gO(),B.j)
a.k(q,o,A.R(m,!1,3),B.bI)}else{a.k(0,o," )   ",B.j)
if(!(o<26))return A.b(k,o)
a.k(0,o,k[o],B.h)
a.k(3,o,n.gO(),B.C)
a.k(q,o,A.R(m,!1,3),B.d)}}}}
A.hg.prototype={
gbf(){return!0},
a6(a){var s=this
switch(a){case B.X:s.eH(-1)
return!0
case B.Y:s.eH(1)
return!0
case B.ap:s.eH(-(s.d-3))
return!0
case B.aq:s.eH(s.d-3)
return!0
case B.H:s.a.a8()
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
ai(a){var s,r,q,p,o,n,m=this,l=null,k=a.e.a.b.b,j=k.b,i=new A.aZ(new A.e(80,j),B.c.A(k.a-80,2),0,a)
m.d=j-4
i.cm(0,0,i.gaj(),i.gam())
A.bl(i,l,j,"Help",!0,80,l,l)
for(k=m.e,s=0;j=k.length,s<j;++s){r=s===m.b?B.h:B.C
i.k(2,s*2+2,k[s],r)}q=m.b
if(!(q>=0&&q<j))return A.b(k,q)
p=B.aW.m(0,k[q])
for(k=p.length,s=0;j=m.d,s<j;++s){o=s+m.c
if(o<k){if(!(o>=0))return A.b(p,o)
n=p[o]
i.k(21,s+2,n.b,n.a)}}A.wK(i,j,m.c,k,j,78,2)
k=t.N
A.bA(a,A.B(["Tab","Next Chapter","\u2195","Scroll","Shift-\u2195","Page Up/Down","`","Exit"],k,k),l)},
eH(a){var s,r=this,q=r.e,p=r.b
if(!(p>=0&&p<q.length))return A.b(q,p)
s=B.aW.m(0,q[p])
r.c=B.c.M(r.c+a,0,s.length-r.d)
r.K()}}
A.f.prototype={}
A.jY.prototype={
gO(){return"Equipment"},
gcl(){var s=t.N,r=A.cT(this.e.gcl(),s,s)
switch(this.f.a){case 0:s=B.co
break
case 1:s=A.B(["R","Show resistances"],s,s)
break
case 2:s=A.B(["R","Show stats"],s,s)
break
case 3:s=B.co
break
default:s=null}r.T(0,s)
return r},
di(a){var s,r=this
if(a.a>110){r.f=B.cP
r.dt()
r.K()}else{s=r.f
if(B.cN===s||B.cP===s){r.f=B.bD
r.dt()
r.K()}}},
a9(a,b,c){var s,r=this
if(r.e.a9(a,b,c)){r.K()
return!0}if(!b){s=82===a
if(s&&!c&&r.f===B.bD){r.f=B.cO
r.dt()
r.K()
return!0}if(s&&!c&&r.f===B.cO){r.f=B.bD
r.dt()
r.K()
return!0}}return r.fD(a,b,c)},
a6(a){if(this.e.a6(a)){this.K()
return!0}return this.fC(a)},
ht(a){var s,r,q,p=this,o=p.e,n=a.c,m=n.a
n=n.b
o.hr(a.b8(0,1,m,n-3))
s=m-32
switch(p.f.a){case 0:break
case 1:p.jK(a,s)
p.jL(a,s,21)
break
case 2:p.jH(a,s)
p.jG(a,s,21)
break
case 3:s=m-65
p.jK(a,s)
r=s+33
p.jH(a,r)
p.jL(a,s,21)
p.jG(a,r,21)
break}a.k(s-7,21,"Totals",B.j)
r=o.c
o=o.y
if(!(o>=0&&o<r.length))return A.b(r,o)
q=r[o].b
o=n-15
if(q!=null)A.wX(p.c,t.W.a(q),!0).k8(a.b8(0,o,m,14))
else A.ob(a,0,o,m,14,null,null)},
dt(){var s,r=this,q=A.a([new A.aO("Item",B.a7,0,null)],t.G)
switch(r.f.a){case 0:s=B.cj
break
case 1:s=r.ix()
break
case 2:s=r.fI()
break
case 3:s=A.a6(r.ix(),t.jF)
B.a.T(s,r.fI())
break
default:s=null}B.a.T(q,s)
r.e.kS(new A.oq(r),q)},
ix(){var s=null
return A.a([new A.aO("El",B.a7,2,s),new A.aO("Damage",B.a7,11,s),new A.aO("Hit",B.a7,4,s),new A.aO("Dodge",B.a7,5,s),new A.aO("Armor",B.a7,6,s)],t.G)},
fI(){return new A.S(this.lW(),t.oP)},
lW(){return function(){var s=0,r=1,q=[],p,o,n
return function $async$fI(a,b,c){if(b===1){q.push(c)
s=r}for(;;)switch(s){case 0:p=$.fL(),o=0
case 2:if(!(o<12)){s=4
break}n=p[o]
if(n===$.aD()){s=3
break}s=5
return a.b=new A.aO(n.b,B.a7,2,A.ej(n)),1
case 5:case 3:++o
s=2
break
case 4:return 0
case 1:return a.c=q.at(-1),3}}}},
fJ(a){return new A.S(this.lX(a),t.mY)},
lX(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k
return function $async$fJ(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:m=r.a
l=m.x
k=t.H
q=l!=null?2:4
break
case 2:q=5
return b.b=new A.ab(A.a([new A.Q(r.gb3().b,A.ej(r.gb3()))],k),!0),1
case 5:n=A.a([new A.Q(A.R(l.c,!1,2),null)],k)
B.a.T(n,s.iT(r.gd5()))
B.a.T(n,s.cC(r.gd4()))
B.a.T(n,s.cC(r.gcc()))
q=6
return b.b=new A.ab(n,!0),1
case 6:q=7
return b.b=new A.ab(s.cC(r.gcc()),!0),1
case 7:q=3
break
case 4:q=8
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 8:q=9
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 9:q=10
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 10:case 3:q=11
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 11:m=m.Q
q=m!==0?12:14
break
case 12:m=A.a([new A.Q(A.R(m,!1,2),null)],k)
B.a.T(m,s.cC(r.gc3()))
q=15
return b.b=new A.ab(m,!0),1
case 15:q=13
break
case 14:q=16
return b.b=new A.ab(A.a([new A.Q("",null)],k),!0),1
case 16:case 13:return 0
case 1:return b.c=o.at(-1),3}}}},
fH(a){return new A.S(this.lV(a),t.mY)},
lV(a){return function(){var s=a
var r=0,q=1,p=[],o,n,m,l,k
return function $async$fH(b,c,d){if(c===1){p.push(d)
r=q}for(;;)switch(r){case 0:o=$.fL(),n=t.H,m=0
case 2:if(!(m<12)){r=4
break}l=o[m]
if(l===$.aD()){r=3
break}k=s.c8(l)
r=k>0?6:7
break
case 6:r=8
return b.b=new A.ab(A.a([new A.Q(A.R(k,!1,null),B.n)],n),!0),1
case 8:r=5
break
case 7:r=0===k?9:10
break
case 9:r=11
return b.b=new A.ab(A.a([new A.Q("",null)],n),!0),1
case 11:r=5
break
case 10:r=k<0?12:13
break
case 12:r=14
return b.b=new A.ab(A.a([new A.Q(A.R(k,!1,null),B.m)],n),!0),1
case 14:case 13:case 5:case 3:++m
r=2
break
case 4:return 0
case 1:return b.c=p.at(-1),3}}}},
jK(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550 Attack \u2550\u2550\u2550\u2550\u2550\u2550 \u2550\u2550 Defense \u2550",B.t)
a.k(b+6,0,"Attack",B.l)
a.k(b+23,0,"Defense",B.l)},
jH(a,b){a.k(b,0,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Resistances \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550",B.t)
a.k(b+10,0,"Resistances",B.l)},
jL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.aD()
for(s=h.c.f.b,r=3,q=1,p=0,o=0,n=0,m=0,l=0;l<9;++l){k=s[l]
if(k==null)continue
j=k.a
i=j.x
if(i!=null){g=k.gb3()
r=i.c}q*=k.gd5()
p+=k.gd4()
o+=k.gcc()
n+=j.Q
m+=k.gc3()}a.k(b,c,g.b,A.ej(g))
s=t.H
j=A.a([new A.Q(A.R(r,!1,2),null)],s)
B.a.T(j,h.iT(q))
B.a.T(j,h.cC(p))
B.a.T(j,h.cC(o))
A.vg(a,j,B.a7,B.C,11,b+3,c)
s=A.a([new A.Q(A.R(n,!1,2),null)],s)
B.a.T(s,h.cC(m))
A.vg(a,s,B.a7,B.C,6,b+26,c)},
jG(a,b,c){var s,r,q,p,o,n,m
for(s=$.fL(),r=this.c,q=0,p=0;p<12;++p){o=s[p]
if(o===$.aD())continue
n=r.kc(o)
if(n>0)m=B.n
else m=n<0?B.m:B.l
a.k(b+q*3,c,A.R(n,!1,2),m);++q}},
iT(a){var s,r=null,q=A.v4(a,1,r)
if(a>1)return A.a([new A.Q(B.i.aL(" ",4-q.length),r),new A.Q("x",B.B),new A.Q(q,B.n)],t.H)
else{s=t.H
if(a<1)return A.a([new A.Q(B.i.aL(" ",4-q.length),r),new A.Q("x",B.a1),new A.Q(q,B.m)],s)
else return A.a([new A.Q("   ",r)],s)}},
cC(a){var s,r=null,q=A.R(Math.abs(a),!1,r)
if(a>0)return A.a([new A.Q(B.i.aL(" ",3-q.length),r),new A.Q("+",B.B),new A.Q(q,B.n)],t.H)
else{s=t.H
if(a<0)return A.a([new A.Q(B.i.aL(" ",3-q.length),r),new A.Q("+",B.a1),new A.Q(q,B.m)],s)
else return A.a([new A.Q("   ",r)],s)}}}
A.oq.prototype={
$0(){return new A.S(this.lh(),t.d8)},
lh(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=t.H,n=t.bZ,m=t.ax,l=s.a,k=l.c.f.b,j=t.cI,i=0
case 2:if(!(i<9)){r=4
break}h=k[i]
r=h!=null?5:7
break
case 5:g=h.a
f=A.a([new A.ab(A.a([new A.Q(h.gan().a,null)],o),!0)],n)
switch(l.f.a){case 0:e=B.i6
break
case 1:e=l.fJ(h)
break
case 2:e=l.fH(h)
break
case 3:e=A.a6(l.fJ(h),j)
B.a.T(e,l.fH(h))
break
default:e=null}B.a.T(f,e)
r=8
return a.b=new A.aw(g.b,h,f,m),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aw(null,null,A.a([new A.ab(A.a([new A.Q("("+B.aF[i]+")",null)],o),!1)],n),m),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:106}
A.fq.prototype={
aN(){return"_Columns."+this.b}}
A.cQ.prototype={
gcl(){var s=t.N
return A.D(s,s)},
a9(a,b,c){var s,r
if(b)return!1
if(a===9){s=B.a.c6($.bC,this)
s=c?s+($.bC.length-1):s+1
r=$.bC[B.c.ab(s,$.bC.length)]
this.a.bh(r)
return!0}return!1},
a6(a){if(a===B.H){this.a.a8()
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k=this,j=a.e.a.b.b,i=j.a
A.jT(a,0,2,i,B.f)
for(s=$.bC.length,r=2,q=0;q<$.bC.length;$.bC.length===s||(0,A.o)($.bC),++q){p=$.bC[q]
o=p.gO().length
if(p===k){a.k(r,2,"\u2518"+B.i.aL(" ",o)+"\u2514",B.f)
n=B.f
m=B.f}else{n=B.l
m=B.l}a.k(r,0,"\u250c"+B.i.aL("\u2500",o)+"\u2510",n)
a.k(r,1,"\u2502",n)
a.k(r+o+1,1,"\u2502",n)
a.k(r+1,1,p.gO(),m)
r+=o+2}k.ht(new A.aZ(new A.e(i,j.b-3),0,3,a))
l=$.bC[B.c.ab(B.a.c6($.bC,k)+1,$.bC.length)]
j=t.N
j=A.cT(k.gcl(),j,j)
j.h(0,"Tab","View "+l.gO())
j.h(0,"`","Exit")
A.bA(a,j,null)}}
A.ky.prototype={
gdH(){var s,r,q,p,o=this,n=null,m=o.e
if(m===$){s=A.a([new A.aO("Name",B.a7,0,n),new A.aO("Depth",B.am,5,n),new A.aO("Price",B.am,7,n),new A.aO("Found",B.am,5,n),new A.aO("Used",B.am,5,n)],t.G)
r=t.m2
q=t.o5
q=A.a([new A.bE("type",A.a([A.Cp(),A.yl(),A.ub()],r),q),new A.bE("name",A.a([A.ub()],r),q),new A.bE("depth",A.a([A.yl(),A.ub()],r),q),new A.bE("price",A.a([A.Co(),A.ub()],r),q)],t.mQ)
r=t.i0
p=A.ve(s,A.a([new A.ca("all",new A.pv(),r),new A.ca("discovered",new A.pw(o),r)],t.aG),q,!0,t.q)
o.e!==$&&A.ep()
o.e=p
m=p}return m},
gO(){return"Item Lore"},
gcl(){return this.gdH().gcl()},
a9(a,b,c){if(this.gdH().a9(a,b,c)){this.K()
return!0}return this.fD(a,b,c)},
a6(a){if(this.gdH().a6(a)){this.K()
return!0}return this.fC(a)},
ht(a){var s,r,q=this.gdH(),p=a.c,o=p.a
p=p.b
q.hr(a.b8(0,1,o,p-16))
s=q.c
q=q.y
if(!(q>=0&&q<s.length))return A.b(s,q)
r=this.c
q=t.q.a(s[q].b)
if(r.ax.kh(q)>0)A.wX(r,new A.L(q,null,null,null,1),!0).k8(a.b8(0,p-15,o,14))},
n2(){var s=$.bo().gc2(),r=A.a6(s,A.y(s).i("k.E"))
this.gdH().kR(new A.pu(this,r))}}
A.pv.prototype={
$1(a){t.q.a(a)
return!0},
$S:33}
A.pw.prototype={
$1(a){return this.a.c.ax.kh(t.q.a(a))>0},
$S:33}
A.pu.prototype={
$0(){return new A.S(this.li(),t.jE)},
li(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.bB,k=s.a.c.ax,j=k.c,k=k.f,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.m(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.ab(A.a([new A.Q(h.a.a5(1).a,null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.c,!1,5),null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.as,!1,7),null)],n),!0)],m)
if(h.dx)f.push(new A.ab(A.a([new A.Q("Yes",null)],n),!0))
else f.push(new A.ab(A.a([new A.Q(A.R(g,!1,5),null)],n),!0))
if(h.w!=null){e=k.m(0,h)
f.push(new A.ab(A.a([new A.Q(A.R(e==null?0:e,!1,5),null)],n),!0))}else f.push(new A.ab(A.a([new A.Q("--",null)],n),!1))
r=8
return a.b=new A.aw(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aw(null,h,A.a([new A.ab(A.a([new A.Q("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:108}
A.kR.prototype={
gO(){return"Monster Lore"},
gcl(){return this.e.gcl()},
a9(a,b,c){if(this.e.a9(a,b,c)){this.K()
return!0}return this.fD(a,b,c)},
a6(a){if(this.e.a6(a)){this.K()
return!0}return this.fC(a)},
ht(a){var s=this.e,r=a.c
s.hr(a.b8(0,1,r.a,r.b-16))
r=s.c
s=s.y
if(!(s>=0&&s<r.length))return A.b(r,s)
this.nU(a,t.P.a(r[s].b))},
nU(a,b){var s,r,q,p,o,n,m=null
a=a.b8(0,a.c.b-15,80,14)
s=a.c
r=s.a
q=this.c.ax.i8(b)===0
p=q?A.ar("?",B.j,m):b.b
o=q?m:b.a.a
A.ob(a,0,0,r,s.b,p,o)
if(q){a.k(1,3,"You have not seen this breed yet.",B.j)
return}s=b.fr
n=s!==""?3+A.h5(a,s,m,r-2,1,3)+1:3
A.h5(a,this.mf(b),m,r-2,1,n)},
mf(a){var s,r,q=null,p=A.a([],t.s),o=a.a.d.c,n=this.c.ax,m=a.dy
if(m.length!==0){s=A.N(m)
r=new A.as(m,s.i("q(1)").a(new A.qc()),s.i("as<1,q>")).aG(0," ")}else r="monster"
if(a.ax.f)if(n.ek(a)>0)B.a.j(p,"You have slain this unique "+r+".")
else B.a.j(p,"You have seen but not slain this unique "+r+".")
else B.a.j(p,"You have seen "+A.R(n.i8(a),!1,q)+" and slain "+A.R(n.ek(a),!1,q)+" of this "+r+".")
B.a.j(p,o+" is worth "+A.R(a.gbp(),!1,q)+" experience.")
if(n.ek(a)>0)B.a.j(p,o+" has "+A.R(a.f,!1,q)+" health.")
return new A.as(p,t.gL.a(new A.qd()),t.gQ).aG(0," ")},
nq(){var s=$.cj().gc2(),r=A.a6(s,A.y(s).i("k.E"))
this.e.kR(new A.qa(this,r))}}
A.qb.prototype={
$1(a){return a>=65&&a<=90},
$S:109}
A.qe.prototype={
$1(a){t.P.a(a)
return!0},
$S:32}
A.qf.prototype={
$1(a){return t.P.a(a).ax.f},
$S:32}
A.qc.prototype={
$1(a){return A.a4(a)},
$S:4}
A.qd.prototype={
$1(a){A.a4(a)
return B.i.aM(a,0,1).toUpperCase()+B.i.cX(a,1)},
$S:4}
A.qa.prototype={
$0(){return new A.S(this.lj(),t.kF)},
lj(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d
return function $async$$0(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.b,n=t.H,m=t.bZ,l=t.cv,k=s.a.c.ax,j=k.a,k=k.b,i=0
case 2:if(!(i<o.length)){r=4
break}h=o[i]
g=j.m(0,h)
if(g==null)g=0
r=g>0?5:7
break
case 5:f=A.a([new A.ab(A.a([new A.Q(h.a.a,null)],n),!0),new A.ab(A.a([new A.Q(A.R(h.c,!1,null),null)],n),!0)],m)
if(h.ax.f){e=A.a([new A.Q("Yes",null)],n)
d=k.m(0,h)
B.a.T(f,A.a([new A.ab(e,!0),new A.ab(A.a([new A.Q((d==null?0:d)>0?"Yes":"No",null)],n),!0)],m))}else{e=A.a([new A.Q(A.R(g,!1,null),null)],n)
d=k.m(0,h)
B.a.T(f,A.a([new A.ab(e,!0),new A.ab(A.a([new A.Q(A.R(d==null?0:d,!1,null),null)],n),!0)],m))}r=8
return a.b=new A.aw(h.b,h,f,l),1
case 8:r=6
break
case 7:r=9
return a.b=new A.aw(null,h,A.a([new A.ab(A.a([new A.Q("(undiscovered "+(i+1)+")",null)],n),!1)],m),l),1
case 9:case 6:case 3:++i
r=2
break
case 4:return 0
case 1:return a.c=p.at(-1),3}}}},
$S:111}
A.l.prototype={
t(a){return"Input("+this.a+")"}}
A.dp.prototype={
gbO(){return B.bu},
gcq(){return!0},
gcn(){return"Drop"},
ct(a){var s
A:{if(B.v===a){s="Drop which item?"
break A}if(B.Z===a){s="Unequip and drop which item?"
break A}s=A.a_(A.bM("Unreachable."))}return s},
e6(a){return"Drop how many?"},
aU(a){return!0},
bK(a,b,c){this.b.b.y.at=new A.aY(new A.jU(b,c,a))
this.a.a8()}}
A.dU.prototype={
gcq(){return!1},
gcn(){return"Equip"},
ct(a){var s
A:{if(B.v===a){s="Equip which item?"
break A}if(B.Z===a){s="Unequip which item?"
break A}if(B.G===a){s="Pick up and equip which item?"
break A}s=A.a_(A.bM("Unreachable."))}return s},
aU(a){return a.a.e!=null},
bK(a,b,c){this.b.b.y.at=new A.aY(A.wM(c,a))
this.a.a8()}}
A.hi.prototype={
gcq(){return!1},
gcn(){return"Choose"},
gib(){return"Drop which item?"},
ct(a){var s
A:{if(B.Z===a){s="Equipment"
break A}if(B.G===a){s="On the ground"
break A}s="Inventory"
break A}return s},
aU(a){return!0},
bK(a,b,c){},
iq(a){var s,r=this,q=A.a([],t.aP),p=a.a
if(p.w!=null)q.push(new A.X(["u",85,"Use",new A.p7(r)]))
if(p.e!=null){s=r.c===B.Z?"Unequip":"Equip"
q.push(new A.X(["e",69,s,new A.p8(r)]))}if(p.y!=null)q.push(new A.X(["t",84,"Throw",new A.p9(r)]))
if(r.c!==B.G)q.push(new A.X(["d",68,"Drop",new A.pa(r)]))
if(r.c===B.G)q.push(new A.X(["g",71,"Pick up",new A.pb(r)]))
q.push(B.jC)
return q},
h8(a,b){var s,r,q=this
t.kf.a(a)
if(a==null)return q.fi(b)
s=a.$0()
r=q.c
q.b.z=!0
q.a.bh(s)
s.kZ(b,r)},
fj(a){var s=a.a
return this.h8(s.w!=null||s.e!=null?B.a.gaB(this.iq(a)).a[3]:null,a)},
l0(a){return this.hU(a)},
hU(a){if(this.c!==B.G)this.h8(new A.pc(this),a)},
l_(a){var s,r,q,p,o,n,m,l,k,j,i
this.y=a
s=this.a
s.toString
r=a.gan()
q=A.a([],t.oW)
for(p=this.iq(a),o=p.length,n=0;n<p.length;p.length===o||(0,A.o)(p),++n){m=p[n].a
l=m[0]
k=m[1]
j=m[2]
i=m[3]
q.push(new A.ae(l,j,i==null?"inspect":i,k,!1))}s.a1(A.xr(r.a,q))},
d_(a,b){var s
t.d.a(a)
s=this.y
this.y=null
if(s==null||b==null)return
this.h8(t.j5.b(b)?b:null,s)}}
A.p7.prototype={
$0(){return new A.ea(this.a.b,B.v)},
$S:112}
A.p8.prototype={
$0(){return new A.dU(this.a.b,B.v)},
$S:113}
A.p9.prototype={
$0(){return new A.e8(this.a.b,B.v)},
$S:114}
A.pa.prototype={
$0(){return new A.dp(this.a.b,B.v)},
$S:31}
A.pb.prototype={
$0(){return new A.e2(this.a.b,B.G)},
$S:116}
A.pc.prototype={
$0(){return new A.dp(this.a.b,B.v)},
$S:31}
A.b5.prototype={
gib(){return"Inspect which item?"},
gbf(){return!0},
gbO(){var s=A.a([B.Z,B.v],t.hm),r=this.b.b,q=r.x
q===$&&A.c()
if(!q.bS(r.y.y).gaq(0))s.push(B.G)
return s},
gie(){return!1},
gcp(){var s=this.b.b,r=s.y,q=this.c
A:{if(B.v===q){s=r.Q.e
break A}if(B.Z===q){s=r.Q.f
break A}if(B.G===q){s=s.x
s===$&&A.c()
s=s.bS(r.y)
break A}s=A.a_(A.cd("Unexpected location."))}return s},
e6(a){return A.a_(A.be(null))},
fp(a){return t.W.a(a).gbg()},
i0(a,b,c){var s=this
if(!c.jU(a)){s.b.b.y.Q.at.Y(B.a_,"Not enough room for "+a.b1(b).t(0)+".",null,null,null)
s.K()
return}if(b===a.f){c.c9(a)
s.gcp().af(0,a)}else{c.c9(a.dq(b))
s.gcp().bo()}s.eN(a,b)
s.a.a8()},
eN(a,b){},
a6(a){var s,r,q=this,p=q.d
if(p!=null){if(B.a2===a){q.bK(p,q.e,q.c)
return!0}if(B.H===a){q.d=null
q.K()
return!0}if(B.X===a&&q.e<p.f){++q.e
q.K()
return!0}if(B.Y===a&&q.e>1){--q.e
q.K()
return!0}}else if(a===B.H){q.a.a8()
return!0}else{s=$.nm
if(!(s>=65&&s<=90)){if(B.X===a){q.j9(-1)
return!0}if(B.Y===a){q.j9(1)
return!0}if((B.a9===a||B.ad===a)&&q.gbO().length>1){q.iu(a===B.a9?-1:1)
return!0}if(B.a2===a){r=q.gfO()
if(r!=null)q.l_(r)
return!0}}}return!1},
a9(a,b,c){var s,r,q=this
if(a===16){q.f=!0
q.K()
return!0}if(b)return!1
s=q.f
if(s&&a===27){q.r=null
q.K()
return!0}if(q.d!=null)return!1
if(a>=65&&a<=90){q.nR(a-65,c)
return!0}if(a===9&&!s&&q.gbO().length>1){q.iu(c?-1:1)
return!0}r=q.gfO()
if(96===a||110===a){q.a.a8()
return!0}if(107===a&&r!=null){q.fj(r)
return!0}if(109===a&&r!=null){q.hU(r)
return!0}if(106===a&&r!=null){q.fi(r)
return!0}return!1},
f8(a,b,c){if(a===16){this.f=!1
this.K()
return!0}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="Unexpected location.",c="Inspect item",b=e.c
A:{if(B.v===b){s=24
break A}if(B.Z===b){s=9
break A}if(B.G===b){s=e.gcp()
s=Math.min(s.gI(s),26)
break A}s=A.a_(A.cd(d))}r=e.b
q=r.f
p=q.a
if(p!=null){o=e.c
B:{n=0
if(B.v===o){q=11
break B}if(B.Z===o){q=n
break B}m=B.G===o
if(m&&p.b.b>50&&s>5){q=Math.max(0,q.ge3()-s+5)
break B}if(m&&p.b.b>50){q=q.ge3()
break B}if(m){q=n
break B}q=A.a_(A.cd(d))}l=Math.max(46,p.b.a+2)
k=a.e.a.b.b.a-l
n=q}else{q=r.w
q===$&&A.c()
q=q.a
k=q.gea()-46
n=q.a.b
l=46}q=e.gcp()
p=e.d==null&&e.f
j=e.gie()
i=e.r
h=e.d==null?e.gfO():null
A.uq(a,q,e.gm_(),!0,p,h,e.gi5(),i,!1,s,k,r.b.y.Q,!0,j,n,l)
if(e.d==null)g=e.f?e.gib():e.ct(e.c)
else g=e.e6(e.c)+" "+e.e
if(e.d==null){s=t.N
if(e.f){s=A.D(s,s)
s.h(0,"A-Z",c)
if(e.r!=null)s.h(0,"`","Hide inspector")
f=s}else{s=A.D(s,s)
s.h(0,"A-Z","Select item")
s.h(0,"Shift",c)
if(e.gbO().length>1)s.h(0,"Tab","Switch view")
f=s}}else{s=t.N
f=A.B(["OK",e.gcn(),"\u2195","Change quantity","`","Cancel"],s,s)}A.bA(a,f,g)},
m0(a){var s,r=this
if(r.f&&r.d==null)return!0
s=r.d
if(s!=null)return a===s
return r.aU(a)},
nR(a,b){var s,r=this,q=J.jg(r.gcp().gcz()),p=q.length
if(a>=p)return
if(!(a>=0))return A.b(q,a)
s=q[a]
if(s==null)return
r.w=a
if($.yt)r.fi(s)
else if(r.f||b)r.l0(s)
else r.fj(s)},
fj(a){return this.kZ(a,this.c)},
l_(a){return this.fj(a)},
l0(a){return this.fi(a)},
hU(a){},
fi(a){this.r=this.r===a?null:a
this.K()},
kZ(a,b){var s=this
s.c=b
if(!s.aU(a))return
if(a.f>1&&s.gcq()){s.d=a
s.r=null
s.e=a.f
s.K()}else s.bK(a,1,s.c)},
gfO(){var s=J.jg(this.gcp().gcz()),r=this.w,q=s.length
if(r<q){if(!(r>=0))return A.b(s,r)
r=s[r]}else r=null
return r},
j9(a){var s,r,q,p,o=this,n=J.jg(o.gcp().gcz())
for(s=n.length,r=o.w,q=1;q<=s;++q){p=B.c.ab(r+a*q,s)
if(n[p]!=null){o.w=p
break}}o.K()},
iu(a){var s=this,r=B.a.c6(s.gbO(),s.c),q=s.gbO().length,p=s.gbO(),o=B.c.ab(r+q+a,q)
if(!(o<p.length))return A.b(p,o)
s.c=p[o]
o=B.a.hC(J.jg(s.gcp().gcz()),new A.ps())
s.w=o
if(o<0)s.w=0
s.K()}}
A.ps.prototype={
$1(a){return t.c.a(a)!=null},
$S:118}
A.kx.prototype={
lI(a,b,c){var s=this,r=s.a,q=r.a
if(q.x!=null)s.b=new A.ih(a,r)
if(q.Q+r.gc3()!==0||q.z!=null)s.c=new A.ij(r)
if(q.e!=null)s.d=new A.iD(r)
r=q.w
if(r!=null){q=c?78:34
s.e=new A.fy(A.e0(q,r.a),"Use")}},
hs(a,b,c){var s,r,q,p,o,n=this,m=A.a([],t.n9),l=n.b
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
s=4+n.nP(m)
c=c.b8(a,B.c.M(b-1,0,c.gam()-4-s),34,s)
l=c.c
r=n.a
A.ob(c,0,0,l.a,l.b,r.a.b,r.gan().a)
for(l=m.length,q=3,p=0;p<m.length;m.length===l||(0,A.o)(m),++p){o=m[p]
c.k(1,q,o.gdY()+" ",B.f)
o.dA(c,q+1)
q=q+o.gam()+2}},
k8(a){var s,r,q,p,o,n,m,l,k,j=this,i=a.c,h=i.a
i=i.b
s=j.a
A.ob(a,0,0,h,i,s.a.b,s.gan().a)
r=j.b
q=r!=null?r.dS(a,3):3
p=j.c
if(p!=null)q=p.dS(a,q)
o=a.b8(40,0,h-40,i)
n=j.d
m=n!=null?n.dS(o,3):3
l=Math.max(q,m)
k=j.e
if(k!=null)l=k.dS(a,l)
i=j.f
i===$&&A.c()
i.dS(a,l)},
nP(a){var s,r,q,p
t.la.a(a)
for(s=a.length,r=0,q=0;p=a.length,q<p;a.length===s||(0,A.o)(a),++q)r+=a[q].gam()+1
return r+p-1}}
A.pt.prototype={
$2(a,b){t.M.a(a)
A.r(b)
if(b<0)B.a.j(this.a,"It lowers "+a.gO()+" by "+-b+".")
else if(b>0)B.a.j(this.a,"It raises "+a.gO()+" by "+b+".")},
$S:21}
A.d9.prototype={
dS(a,b){a.k(1,b,this.gdY()+" ",B.f)
this.dA(a,b+1)
return b+this.gam()+2},
eM(a,b,c,d){var s,r,q=B.c.t(Math.abs(d))
if(d>0){s=q.length
a.k(b+2-s,c,"+",B.B)
a.k(b+3-s,c,q,B.n)}else{s=q.length
r=b+2-s
s=b+3-s
if(d<0){a.k(r,c,"-",B.a1)
a.k(s,c,q,B.m)}else{a.k(r,c,"+",B.j)
a.k(s,c,q,B.j)}}},
hf(a,b,c,d){a.k(1,b,c+":",B.j)
a.k(12,b,B.c.t(d),B.d)},
jJ(a,b,c,d){var s,r
if(d>1){s=B.B
r=B.n}else if(d<1){s=B.a1
r=B.m}else{s=B.j
r=B.j}a.k(b,c,"x",s)
a.k(b+1,c,A.v4(d,1,null),r)}}
A.ih.prototype={
gdY(){return"Attack"},
gam(){var s=this.b,r=s.gcc()!==0?3:2
return s.a.x.d>0?r+1:r},
dA(a,b){var s,r,q,p,o=this
a.k(1,b,"Damage:",B.j)
s=o.b
if(s.gb3()!==$.aD())a.k(9,b,s.gb3().b,A.ej(s.gb3()))
r=s.a.x
q=r.c
a.k(12,b,B.c.t(q),B.d)
o.jJ(a,16,b,s.gd5())
o.eM(a,20,b,s.gd4())
a.k(25,b,"=",B.l)
a.k(27,b,A.v4(q*s.gd5()+s.gd4(),2,6),B.N);++b
if(s.gcc()!==0){a.k(1,b,"Strike:",B.j)
o.eM(a,12,b,s.gcc());++b}r=r.d
if(r>0){o.hf(a,b,"Range",r);++b}a.k(1,b,"Heft:",B.j)
r=o.a.ay
q=r.a
q.toString
p=q>=s.gf4()?B.d:B.m
a.k(12,b,B.c.t(s.gf4()),p)
o.jJ(a,16,b,r.kj(s.gf4()))}}
A.ij.prototype={
gdY(){return"Defense"},
gam(){var s=this.a,r=s.a,q=r.z!=null?2:1
return r.Q+s.gc3()!==0?q+1:q},
dA(a,b){var s=this,r=s.a,q=r.a,p=q.z
if(p!=null){s.hf(a,b,"Dodge",p.a);++b}q=q.Q
if(q+r.gc3()!==0){a.k(1,b,"Armor:",B.j)
a.k(12,b,B.c.t(q),B.d)
s.eM(a,16,b,r.gc3())
a.k(25,b,"=",B.l)
a.k(27,b,A.R(q+r.gc3(),!1,6),B.n);++b}s.hf(a,b,"Weight",r.ged())}}
A.iD.prototype={
gdY(){return"Resistances"},
gam(){return 2},
dA(a,b){var s,r,q,p,o,n,m,l
for(s=$.fL(),r=this.a,q=b+1,p=1,o=0;o<12;++o){n=s[o]
if(n===$.aD())continue
m=r.c8(n)
this.eM(a,p-1,b,m)
l=m===0?B.j:A.ej(n)
a.k(p,q,n.b,l)
p+=3}}}
A.fy.prototype={
gam(){return this.a.length},
dA(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){a.k(1,b,s[q],B.d);++b}},
gdY(){return this.b}}
A.e2.prototype={
gbO(){return B.i7},
gcq(){return!0},
gcn(){return"Pick up"},
ct(a){return"Pick up which item?"},
e6(a){return"Pick up how many?"},
aU(a){return!0},
bK(a,b,c){this.b.b.y.at=new A.aY(A.xa(a))
this.a.a8()}}
A.mT.prototype={
gbO(){return B.bu},
gcq(){return!0},
gcn(){return"Put"},
ct(a){return"Put which item?"},
e6(a){return"Put how many?"},
aU(a){return!0}}
A.lf.prototype={
bK(a,b,c){this.i0(a,b,this.b.b.y.Q.w)},
eN(a,b){this.b.b.y.Q.at.Y(B.x,"You place "+a.b1(b).t(0)+" into the crucible.",null,null,null)
this.CW.$0()}}
A.lg.prototype={
bK(a,b,c){this.i0(a,b,this.b.b.y.Q.r)},
eN(a,b){this.b.b.y.Q.at.Y(B.x,"You put "+a.b1(b).t(0)+" safely into your home.",null,null,null)}}
A.hW.prototype={
gbO(){return B.bu},
gcq(){return!0},
gie(){return!0},
gcn(){return"Sell"},
ct(a){return"Sell which item?"},
e6(a){return"Sell how many?"},
aU(a){return a.gbg()!==0},
fp(a){return B.e.bQ(t.W.a(a).gbg()*0.75)},
bK(a,b,c){this.i0(a,b,this.y)},
eN(a,b){var s=a.b1(b).gan(),r=B.e.bQ(a.gbg()*0.75)*b,q=this.b.b.y.Q
q.at.Y(B.x,"You sell "+s.a+" for "+r+" gold.",null,null,null)
q.Q+=r}}
A.e8.prototype={
gcq(){return!1},
gcn(){return"Toss"},
ct(a){var s
A:{if(B.v===a){s="Throw which item?"
break A}if(B.Z===a){s="Unequip and throw which item?"
break A}if(B.G===a){s="Pick up and throw which item?"
break A}s=A.a_(A.bM("Unreachable."))}return s},
aU(a){return a.a.y!=null},
bK(a,b,c){var s,r=A.bN(a.a.y.b),q=this.b
q.b.y.kz(r,B.hF)
s=this.a
s.toString
s.bh(A.xt(q,r.gaD(),new A.rX(this,c,a,r)))}}
A.rX.prototype={
$1(a){var s=this
s.a.b.b.y.at=new A.aY(new A.lO(s.d,a,s.b,s.c))},
$S:10}
A.e9.prototype={
gfP(){return null},
gbf(){return!0},
gdw(){return!1},
ghb(){return!1},
ob(a){if(this.c)return!0
return this.aU(a)},
aU(a){return!0},
a6(a){this.f=null
if(a===B.H){this.a.a8()
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
if(r>=o.gbc().gI(0))return!1
q=o.gbc().aX(0,r)
if(q==null)return!1
if(o.c){o.e=q
o.K()}else{if(!o.gdw()||!o.aU(q))return!1
if(q.f>1){o.d=!1
s=o.a
s.toString
t.ak.a(o)
p=new A.fr(o,q,o.j0(q),o.b)
p.e=q
s.a1(p)
return!0}if(o.jz(q,1)){o.a.a8()
return!0}}}return!1},
f8(a,b,c){if(a===16){this.c=!1
this.K()
return!0}return!1},
d_(a,b){var s=this
t.d.a(a)
s.d=!0
s.e=null
if(a instanceof A.fr&&b!=null)if(s.jz(a.x,A.r(b)))s.a.a8()},
ai(a){var s,r,q,p,o,n,m,l,k,j=this
if(j.d)if(j.c){s=t.N
s=A.D(s,s)
s.h(0,"A-Z","Inspect item")
if(j.e!=null)s.h(0,"`","Hide inspector")
A.bA(a,s,"Inspect which item?")}else A.bA(a,j.gcZ(),j.gcY())
s=j.gbc()
r=j.b
q=r.w
q===$&&A.c()
q=q.a
p=q.a
q=Math.min(46,q.b.a)
o=j.gbc().b.length
n=j.c
m=j.ghb()
l=j.d?j.e:null
k=j.c||j.gdw()
A.uq(a,s,j.goa(),k,n,null,j.geA(),l,!0,o,p.a,r.b.y.Q,!0,m,p.b,q)
s=j.f
if(s!=null)a.k(0,32,s,B.m)},
j0(a){return a.f},
fY(a){return a.f},
c0(a){t.W.a(a)
return null},
jz(a,b){var s=this,r=s.gfP()
if(!r.jU(a)){s.f="Not enough room for "+a.b1(b).t(0)+"."
s.K()
return!1}if(b===a.f){r.c9(a)
B.a.af(s.gbc().b,a)}else{r.c9(a.dq(b))
s.gbc().bo()}s.cB(a,b)
return!0},
cB(a,b){}}
A.d6.prototype={}
A.it.prototype={
gbc(){return this.b.b.y.Q.r},
gcY(){return"Welcome home!"},
gcZ(){var s=t.N
return A.B(["G","Get item","P","Put item","Shift","Inspect item","Tab","Use crucible","`","Leave"],s,s)},
a9(a,b,c){var s,r,q,p=this
if(p.eo(a,b,c))return!0
if(c||b)return!1
switch(a){case 71:s=new A.mz(p.b)
s.e=p.e
p.d=!1
p.a.a1(s)
return!0
case 80:p.d=!1
p.a.a1(new A.lg(p.b,B.v))
return!0
case 9:r=p.a
r.toString
q=new A.ii(p.b)
q.eE()
r.bh(q)
return!0}return!1}}
A.ip.prototype={
gcY(){return"Get which item?"},
geL(){return"Get"},
gcZ(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gfP(){return this.b.b.y.Q.e},
gdw(){return!0},
aU(a){return!0},
cB(a,b){var s=this.b.b.y
s.Q.ax.da(a)
s.bt()}}
A.mz.prototype={
gbc(){return this.b.b.y.Q.r},
cB(a,b){this.b.b.y.Q.at.Y(B.x,"You take "+a.b1(b).t(0)+" from your home.",null,null,null)
this.io(a,b)}}
A.my.prototype={
gbc(){return this.b.b.y.Q.w},
cB(a,b){this.b.b.y.Q.at.Y(B.x,"You remove "+a.b1(b).t(0)+" from the crucible.",null,null,null)
this.io(a,b)
this.cy.$0()}}
A.ii.prototype={
gbc(){return this.b.b.y.Q.w},
gcY(){return this.w!=null?"Ready to forge item!":"Place items to complete a recipe."},
gcZ(){var s=t.N
s=A.D(s,s)
s.h(0,"G","Get item")
s.h(0,"P","Put item")
s.h(0,"Shift","Inspect item")
if(this.w!=null)s.h(0,"Space","Forge item")
s.h(0,"Tab","Back to home")
s.h(0,"`","Leave")
return s},
ai(a){var s,r,q,p,o
this.lB(a)
s=this.b
r=s.w
r===$&&A.c()
r=r.a
q=Math.min(46,r.b.a)
r=r.a
s=s.b.y.Q.w
p=q-8
a=new A.aZ(new A.e(p,3),r.a+4,r.b+s.b.length+1,a)
A.cL(a,0,0,p,3,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
a.k(0,0,"\u252c",B.l)
a.k(p-1,0,"\u252c",B.l)
o=this.w
if(o!=null)a.k(1,1,"Forge a "+o.c,B.C)
else if(!s.gL(0).q())a.k(1,1,"Add ingredients to crucible",B.j)
else a.k(1,1,"Not a complete recipe",B.j)},
a9(a,b,c){var s,r,q,p=this
if(p.eo(a,b,c))return!0
if(c||b)return!1
if(71===a){s=new A.my(p.gjl(),p.b)
s.e=p.e
p.d=!1
p.a.a1(s)
return!0}if(80===a){p.d=!1
p.a.a1(new A.lf(p.gjl(),p.b,B.v))
return!0}if(32===a&&p.w!=null){r=p.b.b.y.Q
q=r.w
B.a.aP(q.b)
q.d=null
p.w.b.b2(r.ax,1,q.gl7())
p.eE()
p.K()
return!0}if(9===a){p.a.bh(new A.it(p.b))
return!0}return!1},
cB(a,b){this.eE()},
eE(){var s,r,q,p,o,n
this.w=null
for(s=$.hN.length,r=this.b.b.y.Q.w,q=t.E,p=0;p<$.hN.length;$.hN.length===s||(0,A.o)($.hN),++p){o=$.hN[p]
n=o.np(q.a(r))
if(n!=null&&n.a===0){this.w=o
return}}}}
A.iH.prototype={
gbc(){return this.w},
gcY(){return"What can I interest you in?"},
ghb(){return!0},
gcZ(){var s=t.N
return A.B(["B","Buy item","S","Sell item","Shift","Inspect item","`","Cancel"],s,s)},
a9(a,b,c){var s,r=this
if(r.eo(a,b,c))return!0
if(c||b)return!1
switch(a){case 66:s=new A.iG(r.w,r.b)
s.e=r.e
r.d=!1
r.a.a1(s)
break
case 83:r.d=!1
r.a.a1(new A.hW(r.w,r.b,B.v))
return!0}return!1},
c0(a){return t.W.a(a).gbg()}}
A.iG.prototype={
gcY(){return"Buy which item?"},
geL(){return"Buy"},
gcZ(){var s=t.N
return A.B(["A-Z","Select item","Shift","Inspect item","`","Cancel"],s,s)},
gbc(){return this.at},
gfP(){return this.b.b.y.Q.e},
gdw(){return!0},
ghb(){return!0},
aU(a){return a.gbg()<=this.b.b.y.Q.Q},
j0(a){return 1},
fY(a){return Math.min(a.f,B.c.cd(this.b.b.y.Q.Q,a.gbg()))},
c0(a){return t.W.a(a).gbg()},
cB(a,b){var s=a.gbg()*b,r=this.b.b.y,q=r.Q
q.at.Y(B.x,"You buy "+a.b1(b).t(0)+" for "+s+" gold.",null,null,null)
q.Q-=s
q.ax.da(a)
r.bt()}}
A.fr.prototype={
gbc(){return this.w.gbc()},
gcY(){var s,r=this,q=r.x,p=q.b1(r.y).gan().a,o=r.w,n=o.c0(q)
if(n!=null){s=A.R(n*r.y,!1,null)
return o.geL()+" "+p+" for "+s+" gold?"}else return o.geL()+" "+p+"?"},
gcZ(){var s=t.N
return A.B(["OK",this.w.geL(),"\u2195","Change quantity","`","Cancel"],s,s)},
gdw(){return!0},
aU(a){return a===this.x},
a9(a,b,c){if(a===16)return!1
return this.eo(a,b,c)},
f8(a,b,c){return!1},
a6(a){var s=this
A:{if(B.a2===a){s.a.aQ(s.y)
break A}if(B.H===a){s.a.a8()
break A}if(B.X===a&&s.y<s.w.fY(s.x)){++s.y
break A}if(B.Y===a&&s.y>1){--s.y
break A}if(B.ap===a){s.y=s.w.fY(s.x)
break A}if(B.aq===a){s.y=1
break A}return!1}s.K()
return!0},
c0(a){return this.w.c0(t.W.a(a))}}
A.ea.prototype={
gcq(){return!1},
gcn(){return"Use"},
ct(a){var s
A:{if(B.v===a||B.Z===a){s="Use which item?"
break A}if(B.G===a){s="Pick up and use which item?"
break A}s=A.a_(A.bM("Unreachable."))}return s},
aU(a){return a.a.w!=null},
bK(a,b,c){this.b.b.y.at=new A.aY(new A.lU(c,a))
this.a.a8()}}
A.kg.prototype={
a6(a){switch(a){case B.H:this.a.a8()
return!0}return!1},
ai(a){var s=this.b.d?"Create a new hero":"Try again",r=t.N
A.wJ(a,60,40,new A.oS(this),A.B(["`",s],r,r),"You have died")}}
A.oS.prototype={
$1(a){var s,r,q,p,o=a.c,n=o.b-1
for(s=this.a.b.at.a,r=s.length-1,o=o.a;r>=0;--r){if(!(r<s.length))return A.b(s,r)
q=A.e0(o,s[r].b)
for(p=q.length-1;p>=0;--p){if(!(p<q.length))return A.b(q,p)
a.pV(0,n,q[p]);--n
if(n<0)break}if(n<0)break}},
$S:28}
A.kL.prototype={
a6(a){var s,r,q,p,o,n=this
if(B.X===a&&n.d>0){--n.d
n.h5()
n.K()
return!0}if(B.Y===a&&n.d<n.c.b.length-1){++n.d
n.h5()
n.K()
return!0}if(B.a2===a){s=n.d
r=n.c
q=r.b
p=q.length
if(s<p){if(!(s>=0))return A.b(q,s)
o=q[s]
n.x=!1
s=n.a
s.toString
s.a1(A.oT(r,n.b,o,!1))}return!0}if(B.aO===a){s=n.a
s.toString
r=B.aW.gaT()
r=A.a6(r,A.y(r).i("k.E"))
s.a1(new A.hg(r))
return!0}return!1},
h5(){var s=this,r=s.y=B.c.M(s.y,0,Math.max(s.c.b.length-8,0)),q=s.d
if(q<r)s.y=q
else if(q>=r+8)s.y=q-8+1},
a9(a,b,c){var s,r,q,p=this
if(c||b)return!1
switch(a){case 68:s=p.d
r=p.c.b
q=r.length
if(s<q){if(!(s>=0))return A.b(r,s)
s=r[s]
p.x=!1
p.a.a1(new A.h2("Are you sure you want to delete "+s.a+"?","delete"))}return!0
case 78:p.x=!1
s=p.a
s.toString
s.a1(A.A3(p.b,p.c))
return!0}return!1},
d_(a,b){var s,r,q=this
q.x=!0
if(a instanceof A.h2&&J.a9(b,"delete")){s=q.c.b
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
B.a.af(s,s[r])
r=q.d
if(r>0&&r>=s.length)q.d=r-1
q.h5()
q.K()}},
di(a){this.f=this.e=null},
bx(){var s,r,q=this
if(!q.x)return
s=q.w
if(s>0){--s
q.w=s
if(s===0){q.e=null
q.K()}return}r=q.f
if(r!=null){if(!r.q()){q.f=null
q.w=300
return}s=r.b
if(J.a9(s==null?r.$ti.c.a(s):s,"Ready to decorate"))q.r=!0
if(q.r){s=q.e.x
s===$&&A.c()
s.hZ()
s=q.e.x
s===$&&A.c()
s.gaA().cN()}q.K()}},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.e
if(d!=null)f.jn(a,d)
else{s=f.b
r=s.oU("Temporary")
q=a.e.a.b.b
p=f.e=A.uZ(s,$.n().aC(1,100),r,q.b,q.a)
q=p.ee()
f.f=new A.aj(q.a(),q.$ti.i("aj<1>"))
f.r=!1
f.jn(a,p)}s=a.e.a.b.b
o=new A.aZ(new A.e(68,34),B.c.A(s.a-68,2),B.c.A(s.b-34,2),a)
o.cm(0,0,o.gaj(),o.gam())
A.cL(o,0,0,68,34,e,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
for(n=0;n<14;++n)for(s=n+2,m=0;m<B.cf[n].length;++m){q=B.hW[n]
if(!(m<q.length))return A.b(q,m)
l=B.ig.m(0,q[m])
q=B.cf[n]
if(!(m<q.length))return A.b(q,m)
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
if(!(j>=0))return A.b(s,j)
i=s[j]
if(j===f.d)o.ap(2,21+k,new A.Y(9658,B.h,B.z))
h=j===f.d?B.h:B.C
q=21+k
o.k(3,q,i.a,h)
g=j===f.d?B.h:B.d
o.k(34,q,i.b.a,g)
o.k(42,q,i.c.a,g)
if(i.d)o.k(55,q,"Permadeath",g)}}if(f.x){s=t.N
A.bA(a,A.B(["OK","Play","\u2195","Change selection","N","Create a new hero","D","Delete hero","H","Help"],s,s),e)}},
jn(a,b){var s,r,q,p=b.x
p===$&&A.c()
for(p=p.f.b.b,s=p.b,p=p.a,r=0;r<s;++r)for(q=0;q<p;++q)this.nH(a,b,new A.e(q,r))},
nH(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
d===$&&A.c()
s=c.a
r=c.b
q=d.f.B(s,r)
p=q.a.d
A:{if(p instanceof A.Y){o=p
break A}if(t.af.b(p)){o=p[B.c.ab(A.yj(s,r),p.length)]
break A}o=B.aM
break A}n=o.a
m=o.b
l=o.c
k=d.bS(c)
j=k.gaq(0)
if(!j){i=k.gaB(0).a.b
n=i.a
m=i.b}d=d.w.B(s,r)
h=d==null?null:d.geO()
if(h instanceof A.Y){n=h.a
m=h.b
j=!1}d=new A.q5()
g=d.$2(m,B.bJ)
f=d.$2(l,B.d0)
q=new A.q4(q)
if(j)m=q.$2(m,g)
e=q.$2(l,f)
a.e.i9(s,r,A.cO(n,m,e))}}
A.q5.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:17}
A.q4.prototype={
$2(a,b){var s=this.a,r=s.d
if(r<128)a=a.bl(b,A.w(r,0,127,1,0))
else if(r>128)a=a.b_(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.b_(0,B.bH,A.w(s,0,255,0.05,0.1)):a},
$S:17}
A.l3.prototype={
ai(a){var s,r,q=this,p=t.N
p=A.D(p,p)
p.h(0,"Tab","Next field")
s=q.x
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
p.T(0,s[r].gcJ())
if(q.e.f)p.h(0,"Enter","Create hero")
p.h(0,"`","Cancel")
A.wJ(a,80,40,new A.qo(q),p,"Create New Hero")},
nG(a){var s,r,q,p,o=$.fM(),n=this.f.e
if(!(n>=0&&n<5))return A.b(o,n)
s=o[n]
this.jp(a,s.d)
n=A.a([],t.dF)
for(o=s.c,r=0;r<4;++r){q=B.aV[r]
p=o.m(0,q)
p.toString
n.push(new A.O(q.c,B.e.N(p*100)))}this.jo(a,200,n)},
nE(a){var s,r,q=$.eq(),p=this.r.e
if(!(p>=0&&p<3))return A.b(q,p)
s=q[p]
this.jp(a,s.d)
p=A.a([],t.dF)
for(q=s.c,q=new A.br(q,A.y(q).i("br<1,2>")).gL(0);q.q();){r=q.d
p.push(new A.O(r.a.a,r.b))}this.jo(a,10,p)},
jp(a,b){var s,r,q,p,o,n,m,l,k
t.m1.a(b)
for(s=b.length,r=3,q=0;q<b.length;b.length===s||(0,A.o)(b),++q){p=b[q]
for(o=A.e0(53,p.gO()+": "+p.gW()),n=o.length,m=r,l=0;l<o.length;o.length===n||(0,A.o)(o),++l,m=k){k=m+1
a.k(25,m,o[l],B.d)}a.k(25,r,p.gO()+":",B.j)
r=m+1}},
jo(a,b,c){var s,r,q,p
t.ig.a(c)
for(s=c.length,r=3,q=0;q<c.length;c.length===s||(0,A.o)(c),++q){p=c[q]
a.k(0,r,p.a,B.j)
A.wL(a,13,r,10,p.b,b,null,null);++r}},
nF(a){var s,r,q,p,o,n=this,m=null,l=n.d
A:{if(0===l){s=B.iG
break A}if(1===l){s=$.fM()
r=n.f.e
if(!(r>=0&&r<5))return A.b(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(2===l){s=$.eq()
r=n.r.e
if(!(r>=0&&r<3))return A.b(s,r)
r=s[r]
r=new A.O(r.a,r.b)
s=r
break A}if(3===l){s=n.w.e
if(!(s>=0&&s<2))return A.b(B.bv,s)
s=new A.O(B.bv[s],B.ib[s])
break A}s=A.a_(A.cd("Unexpected focus."))}A.bl(a,m,m,s.a,!0,m,m,m)
for(s=A.e0(a.c.a-2,s.b),r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p,q=o){o=q+1
a.k(1,q,s[p],B.d)}},
a6(a){var s=this,r=s.x,q=s.d
if(!(q>=0&&q<r.length))return A.b(r,q)
if(r[q].a6(a)){s.K()
return!0}switch(a){case B.H:s.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n=this,m=n.x,l=n.d
if(!(l>=0&&l<m.length))return A.b(m,l)
if(m[l].a9(a,b,c)){n.K()
return!0}if(b)return!1
if(13===a&&n.e.f){m=n.b
l=n.e
s=l.d
l=s.length!==0?s:l.e
s=$.fM()
r=n.f.e
if(!(r>=0&&r<5))return A.b(s,r)
r=s[r]
s=$.eq()
q=n.r.e
if(!(q>=0&&q<3))return A.b(s,q)
p=m.k_(l,s[q],n.w.e===1,r)
r=n.c
B.a.j(r.b,p)
r.bj()
q=n.a
q.toString
q.bh(A.oT(r,m,p,!0))
return!0}if(9===a){o=c?m.length-1:1
n.d=B.c.ab(n.d+o,m.length)
n.K()
return!0}return!1}}
A.qm.prototype={
$1(a){return t.ho.a(a).a},
$S:122}
A.qn.prototype={
$1(a){return t.lJ.a(a).a},
$S:123}
A.qo.prototype={
$1(a){var s,r,q,p,o
for(s=a.c.a,r=0;r<3;++r){q=B.hO[r]
p=B.i.aL("\u2500",s)
a.k(0,q,p,B.t)}p=this.a
p.nG(a.b8(0,2,s,10))
p.nE(a.b8(0,12,s,10))
p.nF(a.b8(0,25,s,14))
for(s=p.x,o=0;o<s.length;++o)s[o].kY(a,o===p.d)},
$S:28}
A.eE.prototype={
a6(a){return!1},
a9(a,b,c){return!1}}
A.kU.prototype={
gcJ(){return B.ij},
a9(a,b,c){var s,r,q=this
if(b)return!1
switch(a){case 8:s=q.d
r=s.length
if(r!==0){s=B.i.aM(s,0,r-1)
q.d=s
if(s.length===0){s=$.n()
t.m.a(B.ai)
r=B.ai.length
s=s.U(r)
if(!(s>=0&&s<r))return A.b(B.ai,s)
q.e=B.ai[s]}}q.h6()
return!0
case 32:q.fG(" ")
return!0
default:if(a>=65&&a<=90){q.fG(A.aS(!c?32+a:a))
return!0}else if(a>=48&&a<=57){q.fG(A.aS(a))
return!0}}return!1},
fG(a){var s=this.d
if(s.length<20)this.d=s+a
this.h6()},
h6(){this.f=B.a.p8(this.c.b,new A.ql(this))},
kY(a,b){var s=this,r=s.f?B.h:B.m,q=s.a,p=s.b,o=p+1
a.k(q,o,"Name:",B.f)
if(b)A.cL(a,q+24,p,23,3,r,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")
p=s.d
if(p.length!==0){q+=25
a.k(q,o,p,B.C)
if(b)a.cw(q+s.d.length,o," ",B.z,r)}else{q+=25
p=s.e
if(b)a.cw(q,o,p,B.z,r)
else a.k(q,o,p,B.C)}if(!s.f)a.k(48,3,"Already a hero with that name",B.m)}}
A.ql.prototype={
$1(a){var s,r
t.er.a(a)
s=this.a
r=s.d
s=r.length!==0?r:s.e
return a.a!==s},
$S:23}
A.fi.prototype={
gcJ(){var s=t.N
return A.B(["\u25c4\u25ba","Select "+this.c.toLowerCase()],s,s)},
a6(a){var s,r,q=this
switch(a){case B.a9:s=q.e
r=q.d.length
q.e=B.c.ab(s+r-1,r)
return!0
case B.ad:q.e=B.c.ab(q.e+1,q.d.length)
return!0}return!1},
kY(a,b){var s,r,q,p,o,n=this,m=n.a,l=n.b,k=l+1
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
if(!(l>=0&&l<m.length))return A.b(m,l)
a.k(s,k,m[l],B.C)}}}
A.px.prototype={
ge3(){return 9+this.b.y.Q.e.c+4},
e9(a){var s,r,q=this,p=q.b,o=p.y,n=o.Q
q.fR(a,0,9,n.f)
n=n.e
q.fR(a,11,n.c,n)
if(q.a.b.b>50){p=p.x
p===$&&A.c()
s=p.bS(o.y)
q.fR(a,q.ge3(),5,s)}r=q.a.b.b>50?q.ge3()+7:q.ge3()
p=a.c
A.cL(a,0,r,p.a,p.b-r,null,"\u250c","\u2500","\u2510","\u2502","\u2514","\u2500","\u2518")},
fR(a,b,c,d){A.uq(a,d,A.ym(),!1,!1,null,A.yn(),null,!1,c,0,this.b.y.Q,!1,!1,b,a.c.a)}}
A.pV.prototype={
e9(a){var s,r,q,p,o,n,m,l,k,j,i
a.cm(0,0,a.gaj(),a.gam())
s=a.c
r=s.b
s=s.a
A.jT(a,0,r-1,s,null)
q=r-2
r=this.b.a
p=r.length-1
for(;;){if(!(p>=0&&q>=0))break
o=r.length
if(!(p>=0&&p<o))return A.b(r,p)
n=r[p]
m=n.b
l=n.c
if(l>1)m=m+" (x"+l+")"
switch(n.a.a){case 0:l=B.d
break
case 1:l=B.m
break
case 2:l=B.O
break
case 3:l=B.h
break
case 4:l=B.n
break
case 5:l=B.a0
break
default:l=null}k=p!==o-1?l.bl(B.z,0.5):l
j=A.e0(s,m)
i=j.length-1
for(;;){if(!(i>=0&&q>=0))break
if(!(i>=0&&i<j.length))return A.b(j,i)
a.k(0,q,j[i],k);--q;--i}--p}}}
A.qz.prototype={
ai(a){var s,r,q=this.a
if(q!=null){s=q.a
r=q.b
this.e9(new A.aZ(new A.e(r.a,r.b),s.a,s.b,a))}}}
A.r5.prototype={
e9(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b,f=g.b.y,e=f.Q,d=e.a
A.bl(a,h,h,d,!1,h,h,h)
a.k(1,2,e.b.a+" "+e.c.a,B.d)
i.mp(f,a,4)
s=f.z
r=e.CW.a
r.toString
i.ev(a,7,"Health",s,B.m,B.e.N(Math.pow(r,1.458)+9),B.a1)
r=f.ch
s=e.cx.a
s.toString
i.ev(a,8,"Focus",r,B.D,A.kt(s),B.F)
s=f.CW
r=e.ay.a
r.toString
i.ev(a,9,"Fury",s,B.N,A.i2(r),B.as)
a.k(1,10,"Food",B.j)
A.wL(a,10,10,a.gaj()-11,f.ay,400,B.k,B.w)
i.mk(f,a,12)
i.ml(f,a,13)
i.mt(f,a,14)
a.k(1,16,"Exp",B.j)
q=A.R(e.y,!1,h)
a.k(a.gaj()-q.length-1,16,q,B.K)
a.k(1,17,"Gold",B.j)
p=A.R(e.Q,!1,h)
a.k(a.gaj()-1-p.length,17,p,B.h)
a.k(1,19,"@",g.gkl())
a.k(3,19,d,B.C)
i.iO(a,20,f)
d=g.w
d===$&&A.c()
o=d.d
B.a.dn(o,new A.r9(f))
n=0
for(;;){if(!(n<10&&n<o.length))break
m=21+n*2
if(m>=a.gam()-2)break
if(!(n<o.length))return A.b(o,n)
l=o[n]
k=l.Q.b
if(g.gd3()===l)k=new A.Y(k.a,k.c,k.b)
j=l.Q.a.a
if(j.length>a.gaj()-4)j=B.i.aM(j,0,a.gaj()-4)
a.ap(1,m,k)
a.k(3,m,j,g.gd3()===l?B.h:B.C)
i.iO(a,m+1,l);++n}},
mp(a,b,c){var s,r={}
r.a=1
r=new A.r7(r,b,c)
s=a.Q
r.$1(s.ay)
r.$1(s.ch)
r.$1(s.CW)
r.$1(s.cx)},
mt(a,b,c){var s,r=a.eU(null),q=A.a(r.slice(0),A.N(r))
b.k(1,c,q.length>1?"Weapons":"Weapon",B.j)
r=A.N(q)
s=new A.as(q,r.i("q(1)").a(new A.r8()),r.i("as<1,q>")).aG(0,"+")
b.k(b.gaj()-s.length-1,c,s,B.N)},
ml(a,b,c){var s,r,q,p
for(s=a.ghn(),r=s.$ti,s=new A.aj(s.a(),r.i("aj<1>")),r=r.c,q=0;s.q();){p=s.b
q+=(p==null?r.a(p):p).a}this.iR(b,c,"Dodge",""+q+"%",B.a0)},
mk(a,b,c){var s,r,q,p,o,n,m
for(s=$.fL(),r=10,q=0;q<12;++q){p=s[q]
o=a.hK(p)
n=a.fh(p)
if((n.a>0?o+n.b:o)>0){m=$.vW().m(0,p)
m.toString
b.k(r,c,m,A.ej(p));++r}}this.iR(b,c,"Armor"," "+B.e.N(100-A.yh(a.Q.gdK())*100)+"%",B.n)},
ev(a,b,c,d,e,f,g){var s,r,q
a.k(1,b,c,B.j)
s=a.gaj()-1
if(f!=null){r=B.c.t(f)
s-=r.length
a.k(s,b,r,g)
s-=3
a.k(s,b," / ",g)}q=J.eu(d)
a.k(s-q.length,b,q,e)},
iR(a,b,c,d,e){return this.ev(a,b,c,d,e,null,null)},
iO(a,b,c){var s,r,q,p,o,n,m,l={}
l.a=3
s=new A.r6(l,a,b)
r=c.f
if(r.a>0){q=r.b
A:{if(1===q){r=B.k
break A}if(2===q){r=B.h
break A}r=B.E
break A}s.$2("S",r)}r=c.e.a
if(r>0){B:{if(1===r){r=B.d5
break B}if(2===r){r=B.a0
break B}r=B.K
break B}s.$2("F",r)}if(c.r.a>0)s.$2("V",B.u)
for(r=$.fL(),p=0;p<12;++p){o=r[p]
if(c.fh(o).a>0){n=$.vW().m(0,o)
n.toString
s.$3(n,B.z,A.ej(o))}}r=c instanceof A.ad
if(r&&c.at instanceof A.cG)s.$2("!",B.I)
if(r&&c.at instanceof A.co)s.$2("z",B.F)
n=c.w
if(n.a>0){m=n.b
C:{if(1===m){n=B.B
break C}if(2===m){n=B.n
break C}n=B.ag
break C}s.$2("P",n)}if(c.c.a>0)s.$2("C",B.D)
if(c.b.a>0)s.$2("B",B.l)
if(c.d.a>0)s.$2("D",B.P)
if($.nW&&r)a.k(2,b,A.R(B.e.N(c.ch*100),!1,3),B.u)
A.zC(a,10,b,a.gaj()-11,c.z,c.gbr(),B.m,B.a1)}}
A.r9.prototype={
$2(a,b){var s,r=t.B
r.a(a)
r.a(b)
r=a.y
s=this.a.y
return B.c.al(r.S(0,s).gaH(),b.y.S(0,s).gaH())},
$S:125}
A.r7.prototype={
$1(a){var s,r,q=this.b,p=this.a,o=this.c
q.k(p.a,o,B.i.aM(a.gbb().c,0,3),B.j)
s=p.a
r=a.a
r.toString
q.k(s,o+1,A.R(r,!1,2),B.d)
p.a=p.a+B.c.A(q.gaj()-6,3)},
$S:126}
A.r8.prototype={
$1(a){return B.e.t(B.e.N(t._.a(a).gd1()*100)/100)},
$S:127}
A.r6.prototype={
$3(a,b,c){var s=this.a,r=s.a
if(r>8)return
this.b.cw(r,this.c,a,b,c);++s.a},
$2(a,b){return this.$3(a,b,null)},
$S:128}
A.rg.prototype={
d6(a,b,c,d){var s=this.a.a
this.iQ(a,b+s.a,c+s.b,d)},
iQ(a,b,c,d){var s=this.r.a,r=this.w
a.ap(b-s.a+r.a,c-s.b+r.b,d)},
aK(a){var s,r,q,p,o,n=this;++n.f
s=a instanceof A.f9
if(s){r=a.a
for(q=r.length,p=n.c,o=0;o<r.length;r.length===q||(0,A.o)(r),++o)A.BY(p,r[o])}q=n.c
p=q.length
B.a.hR(q,new A.rn(n))
return s||n.e||p!==0||q.length!==0||n.b.b.y.d.a>0},
e9(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this
b6.nx(b7.c)
s=b6.d
B.a.aP(s)
b6.e=!1
r=b6.b
q=r.b
p=q.y
for(o=A.ac(b6.r),n=p.d,m=t.w,l=t.p0,k=t.dW,j=t.ev;o.q();){i=o.b
h=o.c
g=new A.e(i,h)
f=q.x
f===$&&A.c()
e=f.f
e.l(i,h)
d=e.a
e=h*e.b.b.a+i
if(!(e>=0&&e<d.length))return A.b(d,e)
e=d[e]
c=e.r
if(c){b=b6.o2(g,e)
a=b.a
a0=b.b
a1=b.c
a2=f.r.m(0,g)
if(a2==null)a2=A.bq(B.G,null)
a3=a2.gaq(0)
if(!a3){a4=a2.gL(0)
if(!a4.q())A.a_(A.ct())
a5=a4.gH().a.b
a=a5.a
a0=a5.b}}else{a=null
a0=B.z
a1=B.z
a3=!1}if(!e.b&&e.d+e.e>e.c&&e.x!==0){d=e.w
if(d===$.b8()){d=$.n()
k.a(B.aR)
a6=B.aR.length
d=d.a
a7=d.a3(a6)
if(!(a7>=0&&a7<a6))return A.b(B.aR,a7)
a=B.aR[a7]
l.a(B.aU)
a6=B.aU.length
d=d.a3(a6)
if(!(d>=0&&d<a6))return A.b(B.aU,d)
a8=B.aU[d]
a0=a8.a
a1=a8.b
b6.e=!0
a.toString
B.a.T($.iV,A.a([i,h,a,"rgb("+a0.a+", "+a0.b+", "+a0.c+")"],m))}else if(d===$.bJ())a1=a1.bl(B.A,0.1+e.x/255*0.9)}d=f.w
d.l(i,h)
a7=d.a
d=h*d.b.b.a+i
if(!(d>=0&&d<a7.length))return A.b(a7,d)
d=a7[d]
if(d!=null)a9=!e.b&&e.d+e.e>e.c||g.X(0,p.y)||$.nV||q.co(d)
else a9=!1
if(a9){b0=d.geO()
if(b0 instanceof A.Y){a=b0.a
a0=b0.b}else{a0=r.gkl()
a=64}if(r.gd3()===d){a1=a0
a0=B.t
c=!1}if(d instanceof A.ad)B.a.j(s,d)
a3=!1}a7=n.a
if(a7>0){b1=Math.min(90,a7*8)
a7=$.n()
a7=a7.a
if(a7.a3(100)<b1){a=a7.a3(100)<b1?a:42
j.a(B.aT)
a6=B.aT.length
a7=a7.a3(a6)
if(!(a7>=0&&a7<a6))return A.b(B.aT,a7)
a0=B.aT[a7]}a3=!1
c=!1}a7=new A.rm()
b2=a7.$2(a0,B.bJ)
b3=a7.$2(a1,B.d2)
if(!e.b&&e.d+e.e>e.c)a7=a3||c
else a7=!1
if(a7){e=new A.rj(e)
if(a3)a0=e.$2(a0,b2)
if(c)a1=e.$2(a1,b3)}else{if(a3)a0=b2
if(c)a1=b3}if($.uX){b4=(16-f.geJ().j_(g))/16
b4*=b4
if(b4>0)a1=a1.bl(B.n,b4)}if($.nW&&d instanceof A.ad)a1=B.cZ.bl(B.bI,d.ch)
if(a!=null){f=b6.r.a
e=b6.w
b7.ap(i-f.a+e.a,h-f.b+e.b,new A.Y(a,a0,a1))}}for(s=b6.c,o=s.length,b5=0;b5<s.length;s.length===o||(0,A.o)(s),++b5)s[b5].bu(q,new A.rk(b6,b7))
s=v.G.rvipTiles
if(J.a9(s==null?null:A.u_(s),!0)){s=$.aX.length!==0&&B.a.gc7($.aX)===r
o=b6.a
o.toString
A.CB(q,s,o,new A.rl(p,q),r.gd3())}else{B.a.aP($.iV)
A.ut()}},
o2(a,b){var s,r,q,p=b.a.d
if(p instanceof A.Y)return p
t.af.a(p)
s=p.length
r=A.yj(a.a,a.b)
q=B.c.ab(B.c.A(this.f,8)+r,s*2-2)
s=p.length
if(q>=s)q=s-(q-s)-1
this.e=!0
if(!(q>=0&&q<s))return A.b(p,q)
return p[q]},
nx(a){var s,r,q,p,o,n,m,l=this,k=l.b.b,j=l.r,i=j.gbT(),h=new A.rh(k,a),g=a.a,f=k.x
f===$&&A.c()
s=f.f.b.b.a
if(g>=s){r=B.e.A(Math.max(0,g-s),2)
i=0}else{j=j.b.a
if(j===0||j!==g)i=h.$0()
else{q=k.y.y.gn()-l.r.gbT()
if(q<8||q>g-8)i=h.$0()}r=0}j=l.r
p=j.gbY()
h=new A.ri(k,a)
s=a.b
o=f.f.b.b.b
if(s>=o){n=B.e.A(Math.max(0,s-o),2)
p=0}else{j=j.b.b
if(j===0||j!==s)p=h.$0()
else{m=k.y.y.gp()-l.r.gbY()
if(m<8||m>s-8)p=h.$0()}n=0}j=f.f.b.b
l.r=new A.a0(new A.e(i,p),new A.e(Math.min(g,j.a),Math.min(s,j.b)))
l.w=new A.e(r,n)}}
A.rn.prototype={
$1(a){return!t.ox.a(a).aK(this.a.b.b)},
$S:129}
A.rm.prototype={
$2(a,b){return new A.F(B.c.A(a.a*b.a,255),B.c.A(a.b*b.b,255),B.c.A(a.c*b.c,255))},
$S:17}
A.rj.prototype={
$2(a,b){var s=this.a,r=s.d-s.c
if(r<64)a=a.bl(b,A.w(r,0,64,0.5,0))
else if(r>128)a=a.b_(0,B.u,A.w(r,128,255,0,0.2))
s=s.e
return s>0?a.b_(0,B.bH,A.w(s,0,255,0.05,0.1)):a},
$S:17}
A.rk.prototype={
$3(a,b,c){var s
this.a.iQ(this.b,a,b,c)
s=c.b
B.a.T($.iV,A.a([a,b,c.a,"rgb("+s.a+", "+s.b+", "+s.c+")"],t.w))},
$S:44}
A.rl.prototype={
$2(a,b){return!b.b&&b.d+b.e>b.c||a.y.X(0,this.a.y)||$.nV||this.b.co(a)},
$S:131}
A.rh.prototype={
$0(){var s=this.a,r=s.y.y.gn(),q=this.b.a,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.M(r-p,0,s.f.b.b.a-q)},
$S:2}
A.ri.prototype={
$0(){var s=this.a,r=s.y.y.gp(),q=this.b.b,p=B.c.A(q,2)
s=s.x
s===$&&A.c()
return B.c.M(r-p,0,s.f.b.b.b-q)},
$S:2}
A.h2.prototype={
gf9(){return A.a([this.c],t.s)},
gcJ(){return B.cm},
a6(a){if(a===B.H){this.a.a8()
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.a8()
break
case 89:this.a.aQ(this.d)
break}return!0}}
A.ha.prototype={
gaj(){return 38},
gam(){return 19},
gcJ(){var s=t.N
return A.B(["OK","Return to town"],s,s)},
lF(a,b,c){var s,r,q,p,o,n,m=this.d
c.a=5
s=new A.ou(c,this)
r=m.y.Q
q=this.c
s.$3("Gold",B.h,r.Q-q.Q)
s.$3("Experience",B.n,r.y-q.y);++c.a
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
n=r.ax.gjP()-q.ax.gjP()
m=m.x
m===$&&A.c()
m=m.b
q=A.N(m)
s.$4$total("Monsters",B.m,n,n+new A.ao(m,q.i("z(1)").a(new A.ov()),q.i("ao<1>")).gI(0))},
gbf(){return!0},
a6(a){var s
if(a!==B.a2)return!1
s=this.d
s.y.Q.spr(Math.max(this.c.as,s.w))
this.a.a8()
return!0},
bx(){var s,r,q
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)if(s[q].bx())this.K()},
hS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
a.k(1,1,"You survived depth "+this.d.w+"!",B.d)
a.k(1,3,"You gained:",B.f)
a.k(1,13,"You slayed:",B.f)
for(s=this.e,r=s.length,q=a.c.a,p=q-1,q-=4,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
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
A.ou.prototype={
$4$total(a,b,c,d){B.a.j(this.b.e,new A.m5(this.a.a++,a,c,b,d))},
$3(a,b,c){return this.$4$total(a,b,c,null)},
$S:132}
A.ov.prototype={
$1(a){return!(t.f0.a(a) instanceof A.av)},
$S:133}
A.m5.prototype={
bx(){var s=this,r=s.f,q=s.c
if(r>=q)return!1
if(q>200){r+=$.n().pF(0,q/200)
s.f=r
if(r>q)s.f=q}else s.f=r+1
return!0}}
A.hd.prototype={
gf9(){if(this.c)return B.hP
return B.hV},
gcJ(){return B.cm},
a6(a){if(a===B.H){this.a.aQ(!1)
return!0}return!1},
a9(a,b,c){if(c||b)return!1
switch(a){case 78:this.a.aQ(!1)
break
case 89:this.a.aQ(!0)
break}return!0},
bx(){return!1}}
A.ld.prototype={
gbf(){return!0},
gaj(){return null},
gam(){return null},
gf9(){return null},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
A.bA(a,g.gcJ(),null)
s=g.gf9()
r=s!=null
if(r){q=B.a.av(s,0,new A.qB(),t.S)
p=s.length}else{q=0
p=0}o=g.gaj()
if(o==null)o=q+2
n=g.gam()
if(n==null)n=p+2
m=a.e.a.b.b
l=B.c.A(m.b-n,3)
k=B.c.A(m.a-o,2)
A.cL(a,k-1,l-1,o+2,n+2,B.h,"\u2554","\u2550","\u2557","\u2551","\u255a","\u2550","\u255d")
a=new A.aZ(new A.e(o,n),k,l,a)
a.cm(0,0,a.gaj(),a.gam())
if(r){j=B.c.A(o-B.a.av(s,0,new A.qC(),t.S),2)
for(r=s.length,i=1,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){a.k(j,i,s[h],B.d);++i}}g.hS(a)},
hS(a){}}
A.qB.prototype={
$2(a,b){return Math.max(A.r(a),A.a4(b).length)},
$S:16}
A.qC.prototype={
$2(a,b){return Math.max(A.r(a),A.a4(b).length)},
$S:16}
A.hV.prototype={
gaj(){return 42},
gam(){return 25},
gf9(){return B.hX},
gcJ(){return B.ik},
a6(a){var s=this
switch(a){case B.a9:s.eq(s.e-1)
return!0
case B.ad:s.eq(s.e+1)
return!0
case B.X:s.eq(s.e-10)
return!0
case B.Y:s.eq(s.e+10)
return!0
case B.a2:s.a.aQ(s.e)
return!0
case B.H:s.a.a8()
return!0}return!1},
hS(a){var s,r,q,p,o,n
for(s=1;s<=100;++s){r=s-1
q=B.c.ab(r,10)
p=B.c.A(r,10)*2
if(s===this.e){r=q*4
o=p+5
a.ap(r,o,new A.Y(9658,B.h,B.z))
a.ap(r+4,o,new A.Y(9668,B.h,B.z))
n=B.h}else n=B.C
a.k(q*4+1,p+5,A.R(s,!1,3),n)}},
eq(a){if(a<1)return
if(a>100)return
this.e=a
this.K()}}
A.ae.prototype={}
A.hT.prototype={
gbf(){return!0},
j8(a){var s=this,r=s.d,q=s.c,p=q.length
do r=B.c.ab(r+a+p,p)
while(q[r].c==null)
s.d=r
s.K()},
a6(a){var s,r,q=this,p=$.nm
if(p>=65&&p<=90)return!1
A:{if(B.X===a){q.j8(-1)
break A}if(B.Y===a){q.j8(1)
break A}if(B.a2===a||B.ad===a){p=q.a
p.toString
s=q.c
r=q.d
if(!(r>=0&&r<s.length))return A.b(s,r)
p.aQ(s[r].c)
break A}if(B.H===a||B.a9===a){q.a.a8()
break A}return!1}return!0},
a9(a,b,c){var s,r,q,p,o,n,m=this,l=null
if(b||a===16)return!1
if(96===a||110===a){m.a.a8()
return!0}if(107===a){s=m.a
s.toString
r=m.c
q=m.d
if(!(q>=0&&q<r.length))return A.b(r,q)
s.aQ(r[q].c)
return!0}for(s=m.c,r=s.length,p=0;p<r;++p){o=s[p]
q=o.c
if(q!=null&&o.d===a&&o.e===c){s=m.a
s.toString
if(0>=$.aX.length)return A.b($.aX,-1)
$.aX.pop()
r=v.G
n=r.rvipMap
if(n!=null)A.a2(n).shown=!1
if("rvipDraw" in r)A.pI(r,"rvipDraw",l,l,l,l)
s.fE(q)
A.nh()
return!0}}return!1},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c,d=t.S,c=B.a.av(e,0,new A.r2(),d),b=A.a([],t.s)
for(s=e.length,r=0;r<e.length;e.length===s||(0,A.o)(e),++r){q=e[r]
p=q.b
b.push(q.c==null?p:B.i.fd(q.a,c)+" "+p)}s=f.b
o=B.a.av(b,s.length+2,new A.r3(),d)
d=a.e.a.b.b
p=d.b
n=Math.min(b.length,p-2)
m=f.d
l=f.e
if(m<l){f.e=m
l=m}if(m>=l+n)f.e=m-n+1
k=Math.max(0,B.c.A(d.a-o-2,2))
j=Math.max(0,B.c.A(p-n-2,3))
A.bl(a,null,n+2,s,!0,o+2,k,j)
for(d=k+1,s=j+1,i=0;i<n;++i){h=i+f.e
if(!(h>=0&&h<e.length))return A.b(e,h)
if(e[h].c==null)g=B.f
else g=h===f.d?B.h:B.C
if(!(h<b.length))return A.b(b,h)
p=B.i.fd(b[h],o)
m=h===f.d?B.t:null
a.cw(d,s+i,p,g,m)}}}
A.r1.prototype={
$1(a){return t.m7.a(a).c!=null},
$S:134}
A.r2.prototype={
$2(a,b){return Math.max(A.r(a),t.m7.a(b).a.length)},
$S:135}
A.r3.prototype={
$2(a,b){return Math.max(A.r(a),A.a4(b).length)},
$S:16}
A.ux.prototype={
$2(a,b){var s=this.a.f
return s.b.G(0,new A.e(a,b))?A.y8(s.B(a,b).a).a:0},
$S:24}
A.uy.prototype={
$2(a,b){var s=this.a.f
return!s.b.G(0,new A.e(a,b))||A.y8(s.B(a,b).a).b!==0},
$S:136}
A.uw.prototype={
$1(a){return A.vE(A.dF(a))},
$S:137}
A.lv.prototype={
ap(a,b,c){var s=this
if(a<0||b<0||a>=s.c||b>=s.d)return
B.a.h(s.e,b*s.c+a,c)},
l3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=A.a([],t.s)
for(s=this.d,r=this.e,q=this.c,p=r.length,o=0;o<s;++o){n={}
m=o*q
l=q
for(;;){k=!1
if(l>0){j=m+l-1
if(!(j>=0&&j<p))return A.b(r,j)
j=r[j]
if(j.a===32){k=j.c
k=k.a===0&&k.b===0&&k.c===0}}if(!k)break;--l}i=new A.cY("")
n.a=null
h=new A.cY("")
g=new A.r0(n,h,i)
for(f=0;f<l;++f){k=m+f
if(!(k>=0&&k<p))return A.b(r,k)
e=r[k]
k=e.b
d="color:"+("rgb("+k.a+", "+k.b+", "+k.c+")")
k=e.c
if(!(k.a===0&&k.b===0&&k.c===0))d+=";background:"+("rgb("+k.a+", "+k.b+", "+k.c+")")
if(d!==n.a){g.$0()
n.a=d}c=A.aS(e.a)
A:{if("<"===c){k="&lt;"
break A}if(">"===c){k="&gt;"
break A}if("&"===c){k="&amp;"
break A}k=c
break A}h.a+=k}g.$0()
m=i.a
B.a.j(b,m.charCodeAt(0)==0?m:m)}for(;;){if(!(b.length!==0&&B.a.gc7(b).length===0))break
if(0>=b.length)return A.b(b,-1)
b.pop()}return B.a.aG(b,"\n")},
gaj(){return this.c},
gam(){return this.d}}
A.r0.prototype={
$0(){var s=this.b
if(s.a.length===0)return
this.c.a+='<span style="'+A.J(this.a.a)+'">'+s.t(0)+"</span>"
s.a=""},
$S:0}
A.uu.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k
t.bM.a(b)
s=B.a.av(b,0,new A.uv(),t.S)
r=A.xq(A.xP(a),s)
for(q=b.length,p=r.c,o=this.a.Q,n=0,m=0;m<b.length;b.length===q||(0,A.o)(b),++m){l=b[m]
k=l.b
A.uq(r,l.a,A.ym(),!1,!1,null,A.yn(),null,!1,k,0,o,!1,!1,n,p)
n+=k+2}A.dr(v.G,"rvipPane",a,r.l3(),t.X)},
$S:138}
A.uv.prototype={
$2(a,b){return A.r(a)+t.kL.a(b).b+2},
$S:139}
A.rv.prototype={
af(a,b){B.a.hR(this.b,new A.rF(b))
this.bj()},
pD(a){var s=this.b
B.a.h(s,B.a.hC(s,new A.rG(a)),a)
this.bj()},
nd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=v.G
if(A.a4(A.a2(A.a2(c4.window).location).search)==="?clear"){c3.bj()
return}c4=A.bV(c4.rvipStore)
if(c4==null)c4=null
else{c4=c4.heroes
c4=c4==null?null:A.u_(c4)}A.vp(c4)
if(c4==null)return
a9=t.ea
for(b0=t.gs,c4=J.au(b0.a(a9.a(B.b2.oV(c4)).m(0,"heroes"))),b1=c3.b,b2=t.dZ,b3=t.c3,b4=t.D,b5=t.c;c4.q();){s=c4.gH()
try{r=a9.a(s)
q=A.a4(J.b4(r,"name"))
p=A.a4(s.m(0,"race"))
o=B.a.f0($.fM(),new A.rC(p))
n=null
if(J.b4(r,"class")==null)n=$.eq()[0]
else{m=A.a4(J.b4(r,"class"))
n=B.a.f0($.eq(),new A.rD(m))}l=J.a9(J.b4(r,"death"),"permanent")
k=c3.dC(b0.a(J.b4(r,"inventory")))
j=A.bq(B.v,k)
i=new A.eK(A.am(9,null,!1,b5))
for(b6=c3.dC(b0.a(J.b4(r,"equipment"))),b7=b6.length,b8=0;b8<b6.length;b6.length===b7||(0,A.o)(b6),++b8){h=b6[b8]
i.kb(h)}g=c3.dC(b0.a(J.b4(r,"home")))
f=A.bq(B.cb,g)
e=c3.dC(b0.a(J.b4(r,"crucible")))
d=A.bq(B.ca,e)
c=A.D(b3,b4)
if(r.ah("shops")){b=a9.a(J.b4(r,"shops"))
$.hY.ae(0,new A.rE(c3,b,c))}j.bo()
f.bo()
d.bo()
a=A.r(J.b4(r,"experience"))
a0=c3.nh(b2.a(J.b4(r,"skills")))
a1=c3.nf(J.b4(r,"log"))
a2=c3.ng(a9.a(J.b4(r,"lore")))
a3=A.r(J.b4(r,"gold"))
b9=A.xN(J.b4(r,"maxDepth"))
a4=b9==null?0:b9
a5=a9.a(J.b4(r,"stats"))
b6=n
b7=A.r(J.b4(a5,"strength"))
c0=A.r(J.b4(a5,"agility"))
c1=A.r(J.b4(a5,"vitality"))
a6=A.wV(q,o,b6,l,j,i,f,d,c,a,a0,a1,a2,a3,a4,c0,A.r(J.b4(a5,"intellect")),b7,c1)
B.a.j(b1,a6)}catch(c2){a7=A.dH(c2)
a8=A.el(c2)
A.un("Could not load hero. Data:")
A.un(B.b2.ka(s))
A.un("Error:\n"+A.J(a7)+"\n"+A.J(a8))}}},
dC(a){var s,r,q,p=A.a([],t.I)
for(s=J.au(a),r=t.ea;s.q();){q=this.ne(r.a(s.gH()))
if(q!=null)B.a.j(p,q)}return p},
ne(a){var s,r,q
t.ea.a(a)
s=A.a4(a.m(0,"type"))
r=$.bo().ca(s)
if(r==null){A.vG("Couldn't find item type \""+A.J(a.m(0,"type"))+'", discarding item.')
return null}q=a.ah("count")?A.r(a.m(0,"count")):1
return new A.L(r,this.fX(a.m(0,"prefix")),this.fX(a.m(0,"suffix")),this.fX(a.m(0,"intrinsic")),q)},
fX(a){var s,r,q,p,o,n,m,l="parameter"
A:{s=null
r=!1
q=null
p=!1
if(t.av.b(a)){o=a.m(0,"id")
if(o==null)n=a.ah("id")
else n=!0
if(n){r=typeof o=="string"
if(r){s=a.m(0,l)
if(s==null)n=a.ah(l)
else n=!0
if(n)p=A.fB(s)
q=o}}}if(p){m=A.r(r?s:a.m(0,l))
p=new A.cl(A.wy(A.a4(q)),m)
break A}p=null
break A}return p},
nh(a){var s,r,q,p,o,n
t.dZ.a(a)
s=t.M
r=t.S
q=A.D(s,r)
if(a!=null)for(p=a.gaT(),p=p.gL(p);p.q();){o=p.gH()
n=$.vX().m(0,o)
if(n==null)A.a_(A.aE("Unknown skill '"+o+"'.",null))
q.h(0,n,A.r(a.m(0,o)))}return new A.hZ(q,A.D(s,r))},
nf(a){var s,r,q,p=A.a([],t.kU)
if(t.gs.b(a))for(s=J.au(a),r=t.ea;s.q();){q=r.a(s.gH())
B.a.j(p,new A.hy(B.a.f0(B.hU,new A.rw(q)),A.a4(q.m(0,"text")),A.r(q.m(0,"count"))))}return new A.kJ(p)},
ng(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.dZ
d.a(a)
s=t.P
r=t.S
q=A.D(s,r)
p=A.D(s,r)
s=t.q
o=A.D(s,r)
n=A.D(t.R,r)
m=A.bb(s)
l=A.D(s,r)
k=d.a(a.m(0,"seen"))
if(k!=null)k.ae(0,new A.rx(e,q))
j=d.a(a.m(0,"slain"))
if(j!=null)j.ae(0,new A.ry(e,p))
i=d.a(a.m(0,"foundItems"))
if(i!=null)i.ae(0,new A.rz(e,o))
h=d.a(a.m(0,"foundAffixes"))
if(h!=null)h.ae(0,new A.rA(e,n))
g=d.a(a.m(0,"usedItems"))
if(g!=null)g.ae(0,new A.rB(e,l))
f=t.lH.a(a.m(0,"createdArtifacts"))
if(f!=null)for(d=J.au(f);d.q();){s=A.a4(d.gH())
s=$.bo().ca(s)
s.toString
m.j(0,s)}return new A.hw(q,p,o,n,m,l)},
bj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.a([],t.ic)
for(s=a2.b,r=s.length,q=t.N,p=t.K,o=t.S,n=t.gs,m=0;m<s.length;s.length===r||(0,A.o)(s),++m){l=s[m]
k=A.B(["strength",l.ay.b,"agility",l.ch.b,"vitality",l.CW.b,"intellect",l.cx.b],q,o)
j=l.d?"permanent":"dungeon"
i=a2.dG(l.e)
h=a2.dG(l.f)
g=a2.dG(l.r)
f=a2.dG(l.w)
e=A.D(q,n)
for(d=l.x,d=new A.e_(d,d.r,d.e,A.y(d).i("e_<1,2>"));d.q();){c=d.d
e.h(0,c.a.b,a2.dG(c.b))}d=l.y
c=A.D(q,o)
for(b=l.z.a,a=new A.c8(b,b.r,b.e,A.y(b).i("c8<1>"));a.q();){a0=a.d
a1=a0.gO()
a0=b.m(0,a0)
c.h(0,a1,a0==null?0:a0)}a3.push(A.B(["name",l.a,"race",l.b.a,"stats",k,"class",l.c.a,"death",j,"inventory",i,"equipment",h,"home",g,"crucible",f,"shops",e,"experience",d,"skills",c,"log",a2.nN(l.at),"lore",a2.nO(l.ax),"gold",l.Q,"maxDepth",l.as],q,p))}A.dr(v.G,"rvipPut","heroes",B.b2.ka(A.B(["heroes",a3],q,t.ew)),t.X)
A.vG("Saved.")},
nN(a){var s,r,q,p,o,n,m=[]
for(s=a.a,r=s.length,q=t.N,p=t.z,o=0;o<s.length;s.length===r||(0,A.o)(s),++o){n=s[o]
m.push(A.B(["type",n.a.b,"text",n.b,"count",n.c],q,p))}return m},
nO(a){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=t.z,g=A.D(i,h),f=A.D(i,h),e=A.D(i,h),d=A.D(i,h),c=A.D(i,h),b=[]
for(s=$.cj().gc2(),r=A.y(s),s=new A.bs(J.au(s.a),s.b,r.i("bs<1,2>")),q=a.b,p=a.a,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
n=p.m(0,o)
if(n==null)n=0
if(n!==0)g.h(0,o.a.a,n)
n=q.m(0,o)
if(n==null)n=0
if(n!==0)f.h(0,o.a.a,n)}for(s=$.bo().gc2(),r=A.y(s),s=new A.bs(J.au(s.a),s.b,r.i("bs<1,2>")),q=a.f,p=a.c,r=r.y[1];s.q();){o=s.a
if(o==null)o=r.a(o)
m=p.m(0,o)
if(m==null)m=0
if(m!==0)e.h(0,o.a.a5(1).a,m)
l=q.m(0,o)
if(l==null)l=0
if(l!==0)c.h(0,o.a.a5(1).a,l)}s=A.a6($.dI().gc2(),t.R)
B.a.T(s,$.dJ().gc2())
r=s.length
q=a.d
k=0
for(;k<s.length;s.length===r||(0,A.o)(s),++k){j=s[k]
m=q.m(0,j)
if(m==null)m=0
if(m!==0)d.h(0,j.a,m)}for(s=$.bo().gc2(),r=A.y(s),s=new A.bs(J.au(s.a),s.b,r.i("bs<1,2>")),r=r.y[1],q=a.e;s.q();){p=s.a
if(p==null)p=r.a(p)
if(p.dx&&q.G(0,p))b.push(p.a.a5(1).a)}return A.B(["seen",g,"slain",f,"foundItems",e,"foundAffixes",d,"usedItems",c,"createdArtifacts",b],i,h)},
dG(a){var s,r,q,p,o,n,m,l,k,j
t.E.a(a)
s=[]
for(r=a.gL(a),q=t.N,p=t.K,o=t.z;r.q();){n=r.gH()
m=A.D(q,p)
m.h(0,"type",n.a.a.a5(1).a)
m.h(0,"count",n.f)
l=n.b
if(l!=null)m.h(0,"prefix",A.B(["id",l.a.a,"parameter",l.b],q,o))
k=n.c
if(k!=null)m.h(0,"suffix",A.B(["id",k.a.a,"parameter",k.b],q,o))
j=n.d
if(j!=null)m.h(0,"intrinsic",A.B(["id",j.a.a,"parameter",j.b],q,o))
s.push(m)}return s}}
A.rF.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:23}
A.rG.prototype={
$1(a){return t.er.a(a).a===this.a.a},
$S:23}
A.rC.prototype={
$1(a){return t.ho.a(a).a===this.a},
$S:41}
A.rD.prototype={
$1(a){return t.lJ.a(a).a===this.a},
$S:140}
A.rE.prototype={
$2(a,b){var s,r
A.a4(a)
t.c3.a(b)
s=t.lH.a(this.b.m(0,a))
r=this.c
if(s!=null)r.h(0,b,A.bq(new A.c6(b.b,26),t.E.a(this.a.dC(s))))
else{A.vG("No data for "+a+", so regenerating.")
r.h(0,b,b.oT())}},
$S:141}
A.rw.prototype={
$1(a){return t.aI.a(a).b===A.a4(this.a.m(0,"type"))},
$S:142}
A.rx.prototype={
$2(a,b){var s
A.a4(a)
s=$.cj().ca(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.ry.prototype={
$2(a,b){var s
A.a4(a)
s=$.cj().ca(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.rz.prototype={
$2(a,b){var s
A.a4(a)
s=$.bo().ca(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.rA.prototype={
$2(a,b){this.b.h(0,A.wy(A.a4(a)),A.r(b))},
$S:12}
A.rB.prototype={
$2(a,b){var s
A.a4(a)
s=$.bo().ca(a)
if(s!=null)this.b.h(0,s,A.r(b))},
$S:12}
A.oc.prototype={
$2(a,b){var s,r
A.a4(a)
A.a4(b)
s=this.a
r=s.a
if(r>0)r=s.a=r+2
s.a=r+(a.length+b.length+3)},
$S:30}
A.od.prototype={
$2(a,b){var s,r,q,p
A.a4(a)
A.a4(b)
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
$S:30}
A.lI.prototype={
gcl(){var s,r,q=this,p=t.N
p=A.D(p,p)
p.h(0,"\u2195","Select row")
s=q.e
r=s.length
if(r!==0)p.h(0,"S","Sort by "+s[B.c.ab(q.z+1,r)].a)
s=q.f
r=s.length
if(r!==0)p.h(0,"F","Show "+s[B.c.ab(q.Q+1,r)].a)
return p},
a6(a){var s=this
switch(a){case B.X:s.eK(-1)
return!0
case B.Y:s.eK(1)
return!0
case B.ap:s.eK(-(s.w-1))
return!0
case B.aq:s.eK(s.w-1)
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
s=83===a
if(s&&!c&&o.e.length!==0){o.z=B.c.ab(o.z+1,o.e.length)
o.dE()
return!0}if(s&&c&&o.e.length!==0){r=o.z
q=o.e.length
o.z=B.c.ab(r+q-1,q)
o.dE()
return!0}p=70===a
if(p&&!c&&o.f.length!==0){o.Q=B.c.ab(o.Q+1,o.f.length)
o.dE()
return!0}if(p&&c&&o.f.length!==0){r=o.Q
q=o.f.length
o.Q=B.c.ab(r+q-1,q)
o.dE()
return!0}return!1},
kS(a,b){this.$ti.i("k<aw<1>>()").a(a)
this.ji(new A.rO(this,t.b8.a(b),a))},
kR(a){return this.kS(a,null)},
hr(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a2.c
if(!a1.X(0,a0.r))a0.nJ(a1)
for(s=a0.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
o=p.e
n=p.a
m=p.b.kB(p.f,n.length)
l=p.d
if(l==null)l=B.f
a2.k(o+m,0,n,l)}r=A.a([],t.s)
o=a0.e
n=o.length
if(n!==0){m=a0.z
if(!(m>=0&&m<n))return A.b(o,m)
r.push("ordered by "+o[m].a)}o=a0.f
n=o.length
if(n!==0){m=a0.Q
if(!(m>=0&&m<n))return A.b(o,m)
r.push("show "+o[m].a)}if(r.length!==0){k="("+B.a.aG(r,", ")+")"
a2.k(B.a.gaB(s).e+B.a.gaB(s).f-k.length,0,k,B.l)}a0.iP(a2,1,B.l)
for(r=a0.d,o=!r,n=a0.c,j=0;m=a0.w,j<m;++j){i=j*2+2
h=a0.x+j
m=n.length
if(h>=m)continue
if(!(h>=0))return A.b(n,h)
g=n[h]
f=g.a
if(f!=null)a2.ap(0,i,f)
if(h===a0.y)a2.k(1,i,"\u25ba",B.h)
for(m=g.c,e=0;e<m.length;++e){d=m[e]
if(!(e<s.length))return A.b(s,e)
l=s[e]
A:{c=a0.y
if(h===c){c=B.h
break A}if(!d.b){c=B.j
break A}if(e===0){c=B.C
break A}c=B.d
break A}b=l.e
A.vg(a2,d.a,l.b,c,l.f,b,i)}a=o&&h===n.length-1?B.l:B.t
a0.iP(a2,i+1,a)}if(r){s=n.length
A.wK(a2,m*2-1,a0.x,s,m,a1.a-1,2)}},
nJ(a){var s,r,q,p,o,n,m,l,k,j=this
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
j.fW()},
dE(){this.ji(new A.rN(this))},
eK(a){var s=this
s.y=B.c.M(s.y+a,0,s.c.length-1)
s.fW()},
ji(a){var s,r,q,p,o,n=this
t.O.a(a)
s=n.y
r=n.c
q=r.length
if(s<q){if(!(s>=0))return A.b(r,s)
p=r[s].b}else p=null
a.$0()
n.y=0
s=r.length
if(0<s)for(o=0;o<s;++o)if(r[o].b==p){n.y=o
break}n.fW()},
fW(){var s,r=this,q=r.c,p=q.length
if(p!==0&&r.w>0){p=r.y=B.c.M(r.y,0,p-1)
p=B.c.M(r.x,p-r.w+1,p)
r.x=p
q=q.length
s=r.w
if(q>s)r.x=B.c.M(p,0,q-s)
else r.x=0}else r.x=r.y=0},
iP(a,b,c){var s,r,q,p,o
for(s=this.a,r=s.length,q=2,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
a.k(q,b,B.i.aL("\u2500",o.f),c)
q+=o.f+1}}}
A.rO.prototype={
$0(){var s,r,q=this,p=q.b
if(p!=null){s=q.a
r=s.a
B.a.aP(r)
B.a.T(r,p)
s.r=B.al}p=q.a
s=p.b
B.a.aP(s)
B.a.T(s,q.c.$0())
p.dE()},
$S:0}
A.rN.prototype={
$0(){var s,r,q,p=this.a
if(p.e.length!==0)B.a.dn(p.b,new A.rL(p))
s=p.c
B.a.aP(s)
r=p.b
if(p.f.length!==0){q=A.N(r)
B.a.T(s,new A.ao(r,q.i("z(1)").a(new A.rM(p)),q.i("ao<1>")))}else B.a.T(s,r)},
$S:0}
A.rL.prototype={
$2(a,b){var s,r,q,p=this.a,o=p.$ti,n=o.i("aw<1>")
n.a(a)
n.a(b)
n=p.e
p=p.z
if(!(p>=0&&p<n.length))return A.b(n,p)
p=o.i("C<d(1,1)>").a(n[p].b)
n=p.length
o=a.b
s=b.b
r=0
for(;r<p.length;p.length===n||(0,A.o)(p),++r){q=p[r].$2(o,s)
if(q!==0)return q}return 0},
$S(){return this.a.$ti.i("d(aw<1>,aw<1>)")}}
A.rM.prototype={
$1(a){var s,r=this.a,q=r.$ti
q.i("aw<1>").a(a)
s=r.f
r=r.Q
if(!(r>=0&&r<s.length))return A.b(s,r)
return q.i("z(1)").a(s[r].b).$1(a.b)},
$S(){return this.a.$ti.i("z(aw<1>)")}}
A.ji.prototype={
aN(){return"Align."+this.b},
kB(a,b){var s
switch(this.a){case 0:s=0
break
case 1:s=B.c.A(a-b,2)
break
case 2:s=a-b
break
default:s=null}return s}}
A.aO.prototype={}
A.aw.prototype={}
A.ab.prototype={}
A.Q.prototype={}
A.rS.prototype={
$2(a,b){return A.r(a)+t.fc.a(b).a.length},
$S:145}
A.bE.prototype={}
A.ca.prototype={}
A.ic.prototype={
gbf(){return!0},
a6(a){if(a===B.H){this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o,n
if(c||b)return!1
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q].a
o=p[1]
n=p[3]
if(o===a){n.$0()
this.K()
return!0}}return!1},
d_(a,b){t.d.a(a)
this.d=!0},
ai(a){var s,r,q,p,o,n,m,l,k=this,j=null
for(s=k.b,r=s.length,q=0,p=0;p<r;++p)q=Math.max(q,s[p].a[2].length)
A.bl(a,j,r+2,"Wizard Menu",k.d,40,j,j)
for(r=s.length,o=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){n=s[p].a
m=n[0]
l=n[2];++o
a.k(1,o,m,k.d?B.h:B.j)
a.k(2,o,")",k.d?B.l:B.j)
a.k(4,o,l,k.d?B.C:B.j)}if(k.d){s=t.N
A.bA(a,A.B(["`","Exit"],s,s),j)}},
nn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.c,b=c.x
b===$&&A.c()
for(s=b.f,r=s.b,q=A.ac(r),p=s.a,o=r.b.a,n=p.length;q.q();){m=q.b
l=q.c
s.l(m,l)
k=l*o+m
if(!(k>=0&&k<n))return A.b(p,k)
j=p[k]
i=$.V()
if((j.a.e.a&i.a)!==0){s.l(m,l)
j.fn(!0)
continue}for(j=new A.e(m,l).gbD(),i=j.length,h=0;h<i;++h){g=j[h]
if(r.G(0,g)){f=g.a
e=g.b
s.l(f,e)
f=e*o+f
if(!(f>=0&&f<n))return A.b(p,f)
f=p[f]
e=$.V()
e=(f.a.e.a&e.a)!==0
f=e}else f=!1
if(f){s.l(m,l)
p[k].fn(!0)
break}}}for(s=b.b,r=s.length,c=c.y,q=c.Q.ax,c=c.as,h=0;h<s.length;s.length===r||(0,A.o)(s),++h){d=s[h]
if(d instanceof A.ad)if(c.j(0,d))q.i7(d.Q)}b.f3(new A.t8(this))},
mZ(){var s,r,q,p,o,n,m,l,k,j=this.c.x
j===$&&A.c()
for(s=j.f,r=s.b,q=A.ac(r),p=s.a,r=r.b.a,o=p.length;q.q();){n=q.b
m=q.c
s.l(n,m)
l=m*r+n
if(!(l>=0&&l<o))return A.b(p,l)
l=p[l]
k=$.V()
if((l.a.e.a&k.a)!==0){s.l(n,m)
l.f=B.c.M(l.f+255,0,192)}}j=j.gaA()
j.f=!0
j.cN()},
mv(){this.d=!1
this.a.a1(new A.nf(this.c))},
oo(){this.d=!1
this.a.a1(new A.ng(this.c))},
mP(){var s=this.c.y,r=s.Q,q=1e4+B.c.A(r.y,4)
s.i6(q)
s.bt()
r.at.dR("Gave the hero "+A.R(q,!1,null)+" experience.")},
n9(){var s,r,q,p,o,n,m=this.c.x
m===$&&A.c()
s=m.b
s=A.a(s.slice(0),A.N(s))
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.o)(s),++q){p=s[q]
if(!(p instanceof A.ad))continue
o=p.y
n=p.Q
m.e5(o,n.Q,n.c)
m.kV(p)}},
m7(){var s,r,q,p=A.a([],t.b9),o=this.c.x
o===$&&A.c()
o.f3(new A.t7(p))
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.o)(p),++r){q=p[r]
o.e8(q.b,q.a)}},
nl(){var s,r=this.c,q=r.x
q===$&&A.c()
r=r.y
s=r.y
q.f.B(s.gn(),s.gp()).a=$.uN()
r.Q.at.dR("Placed stairs under hero.")},
o7(){var s=!$.nV
$.nV=s
this.c.y.Q.at.dR("Show all monsters = "+s)
this.a.a8()},
o5(){var s=!$.nW
$.nW=s
this.c.y.Q.at.dR("Show monster alertness = "+s)
this.a.a8()},
o9(){var s=!$.uX
$.uX=s
this.c.y.Q.at.dR("Show hero volume = "+s)
this.a.a8()}}
A.t8.prototype={
$2(a,b){this.a.c.y.Q.ax.da(a)},
$S:19}
A.t7.prototype={
$2(a,b){B.a.j(this.a,new A.O(b,a))},
$S:19}
A.cB.prototype={
gbf(){return!0},
a6(a){if(a===B.H){this.a.a8()
return!0}return!1},
a9(a,b,c){var s,r,q,p,o=this
if(b)return!1
switch(a){case 13:for(s=o.geC(),r=s.length,q=0;q<s.length;s.length===r||(0,A.o)(s),++q)o.he(s[q])
o.a.a8()
return!0
case 8:s=o.c
r=s.length
if(r!==0){o.c=B.i.aM(s,0,r-1)
o.K()}return!0
case 32:o.c+=" "
o.K()
return!0
default:if(a>=65&&a<=90){o.c=o.c+A.rJ(A.a([a],t.t)).toLowerCase()
o.K()
return!0}else if(a>=48&&a<=57){p=a-48
if(p<o.geC().length){s=o.geC()
if(!(p>=0&&p<s.length))return A.b(s,p)
o.he(s[p])
o.a.a8()
return!0}}}return!1},
ai(a){var s,r,q,p,o,n,m=this,l=null,k=new A.aZ(new A.e(43,38),40,0,a)
A.bl(k,l,l,m.geD(),!0,l,l,l)
k.k(m.geD().length+4,0,m.c,B.h)
k.cw(m.geD().length+4+m.c.length,0," ",B.h,B.h)
for(s=m.geC(),r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.o)(s),++p){o=s[p]
if(!B.i.G(m.ez(o).toLowerCase(),m.c.toLowerCase()))continue
if(q<10){n=q+1
k.k(1,n,B.c.t(q),B.h)
k.k(2,n,")",B.j)}++q
k.ap(3,q,m.j1(o))
k.k(5,q,m.ez(o),B.C)
if(q>=36)break}s=t.N
A.bA(a,A.B(["0-9","Select","Enter","Select all","`","Exit"],s,s),l)},
geC(){var s=this.giv(),r=A.y(s),q=r.i("ao<k.E>")
s=A.a6(new A.ao(s,r.i("z(k.E)").a(new A.tF(this)),q),q.i("k.E"))
return s}}
A.tF.prototype={
$1(a){var s=this.a
return B.i.G(s.ez(A.y(s).i("cB.T").a(a)).toLowerCase(),s.c.toLowerCase())},
$S(){return A.y(this.a).i("z(cB.T)")}}
A.nf.prototype={
geD(){return"Drop what?"},
giv(){return $.bo().gc2()},
ez(a){return t.q.a(a).a.a5(1).a},
j1(a){return t.q.a(a).b},
he(a){var s
t.q.a(a)
if(a.dx)this.b.y.Q.ax.e.j(0,a)
s=this.b
A.a8(a.a.a5(1).a,null,null).b2(s.y.Q.ax,s.w,new A.tL(this))}}
A.tL.prototype={
$1(a){var s=this.a.b,r=s.x
r===$&&A.c()
s=s.y
r.d0(a,s.y)
s.Q.at.k0("Dropped {1}.",a)},
$S:7}
A.ng.prototype={
geD(){return"Spawn what?"},
giv(){return $.cj().gc2()},
ez(a){return t.P.a(a).a.a},
j1(a){return t.P.a(a).b},
he(a){var s,r,q
t.P.a(a)
s=this.b
r=s.x
r===$&&A.c()
q=A.cv(r,s.y.y,$.b3(),null,null,null).jS(new A.tM(this))
if(q==null)return
r.dJ(a.ii(q))}}
A.tM.prototype={
$1(a){return a.S(0,this.a.b.y.y).bi(0,6)},
$S:1}
A.oa.prototype={
i9(a,b,c){var s,r
if(a<0)return
s=this.a
r=s.b.b
if(a>=r.a)return
if(b<0)return
if(b>=r.b)return
r=this.b
if(!s.B(a,b).X(0,c))r.aZ(a,b,c)
else r.aZ(a,b,null)},
ai(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.a.a(a)
for(s=this.a,r=s.b.b,q=r.b,r=r.a,p=s.$ti.c,o=s.a,n=this.b,m=n.$ti.c,l=n.a,k=n.b.b.a,j=l.length,i=0;i<q;++i)for(h=i*r,g=i*k,f=0;f<r;++f){n.l(f,i)
e=g+f
if(!(e>=0&&e<j))return A.b(l,e)
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
ga0(a){return B.c.ga0(this.a)^B.c.ga0(this.b)^B.c.ga0(this.c)},
X(a,b){if(b==null)return!1
return b instanceof A.F&&this.a===b.a&&this.b===b.b&&this.c===b.c},
b_(a,b,c){return new A.F(B.e.N(B.e.M(this.a+b.a*c,0,255)),B.e.N(B.e.M(this.b+b.b*c,0,255)),B.e.N(B.e.M(this.c+b.c*c,0,255)))},
bl(a,b){var s=1-b
return new A.F(B.e.N(this.a*s+a.a*b),B.e.N(this.b*s+a.b*b),B.e.N(this.c*s+a.c*b))}}
A.Y.prototype={
ga0(a){return B.c.ga0(this.a)^this.b.ga0(0)^this.c.ga0(0)},
X(a,b){if(b==null)return!1
if(b instanceof A.Y)return this.a===b.a&&this.b.X(0,b.b)&&this.c.X(0,b.c)
return!1}}
A.kE.prototype={}
A.A.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.A&&this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0(a){return(B.c.ga0(this.a)^B.cd.ga0(this.b)^B.cd.ga0(this.c))>>>0},
t(a){var s="key("+this.a
if(this.b)s+=" shift"
return(this.c?s+" alt":s)+")"}}
A.aZ.prototype={
gaj(){return this.c.a},
gam(){return this.c.b},
ap(a,b,c){var s,r=this
if(a<0)return
s=r.c
if(a>=s.a)return
if(b<0)return
if(b>=s.b)return
r.f.ap(r.d+a,r.e+b,c)},
b8(a,b,c,d){return new A.aZ(new A.e(c,d),this.d+a,this.e+b,this.f)}}
A.ls.prototype={
gaj(){return this.e.a.b.b.a},
gam(){return this.e.a.b.b.b},
lK(a,b,c,d,e,f){var s=t.gX
A.fs(this.r,"load",s.i("~(1)?").a(new A.qO(this)),!1,s.c)},
ap(a,b,c){this.e.i9(a,b,c)},
kX(){if(!this.y)return
this.e.ai(new A.qP(this))},
mS(a){var s,r,q,p=this.w,o=p.m(0,a)
if(o!=null)return o
s=A.wS()
r=this.r
s.width=A.r(r.width)
s.height=A.r(r.height)
q=A.bV(s.getContext("2d"))
if(q==null)q=A.a2(q)
q.drawImage(r,0,0)
q.globalCompositeOperation="source-atop"
q.fillStyle="rgb("+a.a+", "+a.b+", "+a.c+")"
q.fillRect(0,0,A.r(r.width),A.r(r.height))
p.h(0,a,s)
return s}}
A.qO.prototype={
$1(a){var s=this.a
s.y=!0
s.kX()},
$S:5}
A.qP.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=c.a,g=B.ih.m(0,h)
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
i=r.mS(c.b)
n.imageSmoothingEnabled=!1
n.drawImage.apply(n,[i,s*q,p*o,q,o,l,k,j,m])},
$S:44}
A.d0.prototype={
kd(a,b,c,d,e){var s,r,q,p,o=A.cO(32,B.aL,e==null?B.z:e)
for(s=b+d,r=a+c,q=b;q<s;++q)for(p=a;p<r;++p)this.ap(p,q,o)},
cm(a,b,c,d){return this.kd(a,b,c,d,null)},
cw(a,b,c,d,e){var s,r,q
if(d==null)d=B.aL
if(e==null)e=B.z
for(s=c.length,r=0;r<s;++r){q=a+r
if(q>=this.gaj())break
this.ap(q,b,new A.Y(c.charCodeAt(r),d,e))}},
k(a,b,c,d){return this.cw(a,b,c,d,null)},
pV(a,b,c){return this.cw(a,b,c,null,null)},
b8(a,b,c,d){return new A.aZ(new A.e(c,d),a,b,this)}}
A.hP.prototype={}
A.cA.prototype={
gjx(){var s,r=this,q=r.r
if(q===$){s=A.tQ(r.go0())
r.r!==$&&A.ep()
r.r=s
q=s}return q},
sph(a){var s,r,q,p,o=this
if(o.e!=null)return
s=v.G
r=A.bV(A.a2(s.document).body)
r.toString
q=t.gX
p=q.i("~(1)?")
q=q.c
o.e=A.fs(r,"keydown",p.a(o.gn4()),!1,q)
s=A.bV(A.a2(s.document).body)
s.toString
o.f=A.fs(s,"keyup",p.a(o.gn6()),!1,q)},
spK(a){var s=this
if(s.w)return
s.w=!0
s.y=null
A.r(A.a2(v.G.window).requestAnimationFrame(s.gjx()))},
lr(a){var s,r,q=this,p=q.c.e.a.b.b,o=a.e.a.b.b,n=p.a!==o.a||p.b!==o.b
q.c=a
q.d=!0
if(n)for(p=q.b,o=p.length,s=a.e.a.b.b,r=0;r<p.length;p.length===o||(0,A.o)(p),++r)p[r].di(s)},
a1(a){var s=this
A.y(s).i("u<cA.T>").a(a)
a.jE(s)
B.a.j(s.b,a)
s.eF()},
aQ(a){var s,r,q,p=this.b
if(0>=p.length)return A.b(p,-1)
s=p.pop()
s.a=null
r=p.length
q=r-1
if(!(q>=0))return A.b(p,q)
p[q].d_(s,a)
this.eF()},
bh(a){var s,r=this
A.y(r).i("u<cA.T>").a(a)
s=r.b
if(0>=s.length)return A.b(s,-1)
s.pop().a=null
a.jE(r)
B.a.j(s,a)
r.eF()},
cN(){var s,r
for(s=this.b,r=0;r<s.length;++r)s[r].bx()
if(this.d)this.eF()},
n5(a){var s,r,q,p=A.r(a.keyCode)
if(A.r(a.location)===3){A:{if(48===p){s=96
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
r=this.a.a.m(0,new A.A(p,A.dE(a.shiftKey),A.dE(a.altKey)))
q=B.a.gc7(this.b)
if(r!=null){a.preventDefault()
if(q.a6(r))return}s=A.dE(a.shiftKey)
if(q.a9(p,A.dE(a.altKey),s))a.preventDefault()},
n7(a){var s,r,q=A.r(a.keyCode)
if(q===59)q=186
s=B.a.gc7(this.b)
r=A.dE(a.shiftKey)
if(s.f8(q,A.dE(a.altKey),r))a.preventDefault()},
o1(a){var s,r=this
A.eg(a)
s=r.y
if(s!=null){if(a-s>16.666666666666668){r.cN()
r.y=a}}else{r.cN()
r.y=a}if(r.w)A.r(A.a2(v.G.window).requestAnimationFrame(r.gjx()))},
eF(){var s,r,q=this.c
q.cm(0,0,q.gaj(),q.gam())
for(s=this.b,r=s.length-1;r>=0;--r){if(!(r<s.length))return A.b(s,r)
if(!s[r].gbf())break}if(r<0)r=0
for(;r<s.length;++r)s[r].ai(q)
this.d=!1
q.kX()}}
A.u.prototype={
gbf(){return!1},
jE(a){A.y(this).i("cA<u.T>").a(a)
this.a=a
this.di(a.c.e.a.b.b)},
K(){var s=this.a
if(s==null)return
s.d=!0},
a6(a){A.y(this).i("u.T").a(a)
return!1},
a9(a,b,c){return!1},
f8(a,b,c){return!1},
d_(a,b){A.y(this).i("u<u.T>").a(a)},
bx(){},
ai(a){},
di(a){}}
A.aa.prototype={
lE(a,b,c,d){var s,r,q,p,o,n,m,l=this
for(s=l.$ti.c,r=l.a,q=l.b.b.a,p=0*q,o=1;o<a;++o){n=s.a(c.$1(new A.e(o,0)))
l.l(o,0)
B.a.h(r,p+o,n)}for(m=1;m<b;++m)for(p=m*q,o=0;o<a;++o){n=s.a(c.$1(new A.e(o,m)))
l.l(o,m)
B.a.h(r,p+o,n)}},
B(a,b){var s,r
this.l(a,b)
s=this.a
r=b*this.b.b.a+a
if(!(r>=0&&r<s.length))return A.b(s,r)
return s[r]},
aZ(a,b,c){var s=this
s.$ti.c.a(c)
s.l(a,b)
B.a.h(s.a,b*s.b.b.a+a,c)},
gL(a){var s=this.a
return new J.aV(s,s.length,A.N(s).i("aV<1>"))},
l(a,b){if(a<0||a>=this.b.b.a)throw A.m(A.hL(a,"x"))
if(b<0||b>=this.b.b.b)throw A.m(A.hL(b,"y"))}}
A.jD.prototype={
pn(a){var s=this.a,r=this.b
if(!A.vq(s,r,a))return!1
if(r>0&&A.vq(s,r-1,a))return!1
return!0},
gL(a){return A.xx(this,!1)}}
A.mg.prototype={
gH(){var s=this.b
return new A.e(s.b,s.c)},
q(){var s,r,q,p,o,n
for(s=this.b,r=this.a,q=r.a,p=r.b,o=this.c;s.q();){n=new A.e(s.b,s.c)
if(o){if(r.pn(n))return!0}else if(A.vq(q,p,n))return!0}return!1},
$ia3:1}
A.aA.prototype={
aN(){return"Direction."+this.b},
gb9(){switch(this.a){case 0:var s=B.r
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
gba(){switch(this.a){case 0:var s=B.r
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
gbG(){switch(this.a){case 0:var s=B.r
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
gbX(){switch(this.a){case 0:var s=B.r
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
gcP(){switch(this.a){case 0:var s=B.r
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
$ie:1,
gn(){return this.c},
gp(){return this.d}}
A.mk.prototype={}
A.mL.prototype={
gH(){return this.a},
q(){var s,r,q=this,p=q.a.F(0,q.e)
q.a=p
s=q.b=q.b+q.d
r=q.c
if(s*2>=r){q.a=p.F(0,q.f)
q.b=s-r}return!0},
$ia3:1}
A.a0.prototype={
gbT(){var s=this.a.a
return Math.min(s,s+this.b.a)},
gbY(){var s=this.a.b
return Math.min(s,s+this.b.b)},
gea(){var s=this.a.a
return Math.max(s,s+this.b.a)},
geQ(){var s=this.a.b
return Math.max(s,s+this.b.b)},
ghm(){var s=this
return new A.e(B.c.A(s.gbT()+s.gea(),2),B.c.A(s.gbY()+s.geQ(),2))},
t(a){return"("+this.a.t(0)+")-("+this.b.t(0)+")"},
bR(a){var s=this.a,r=this.b,q=a*2
return new A.a0(new A.e(s.a-a,s.b-a),new A.e(r.a+q,r.b+q))},
G(a,b){var s,r=this.a,q=r.a
if(b.gn()<q)return!1
s=this.b
if(b.gn()>=q+s.a)return!1
r=r.b
if(b.gp()<r)return!1
if(b.gp()>=r+s.b)return!1
return!0},
gL(a){var s=this.a
return new A.cW(this,s.a-1,s.b)},
l5(){var s,r,q,p,o,n=this,m=n.b,l=m.a,k=l>1
if(k&&m.b>1){s=A.a([],t.l)
for(r=n.gbT(),k=n.a,q=k.a,l=q+l,p=Math.max(q,l),k=k.b,m=k+m.b;r<p;++r){B.a.j(s,new A.e(r,Math.min(k,m)))
B.a.j(s,new A.e(r,Math.max(k,m)-1))}for(o=n.gbY()+1,m=Math.max(k,m);o<m-1;++o){B.a.j(s,new A.e(Math.min(q,l),o))
B.a.j(s,new A.e(p-1,o))}return s}else if(k&&m.b===1)return new A.a0(new A.e(n.gbT(),n.gbY()),new A.e(l,1))
else{m=m.b
if(m>=1&&l===1)return new A.a0(new A.e(n.gbT(),n.gbY()),new A.e(1,m))}return B.i1}}
A.cW.prototype={
gH(){return new A.e(this.b,this.c)},
q(){var s=this,r=s.a
if(++s.b>=r.gea()){s.b=r.a.a;++s.c}return s.c<r.geQ()},
$ia3:1}
A.qW.prototype={
bs(a,b){if(b==null){b=a
a=0}return this.a.a3(b-a)+a},
U(a){return this.bs(a,null)},
aC(a,b){if(b==null){b=a
a=0}return this.a.a3(b+1-a)+a},
ko(a){return this.aC(a,null)},
aF(a,b){var s=this.a
if(b==null)return s.hH()*a
else return s.hH()*(b-a)+a},
aS(a){return this.aF(a,null)},
pF(a,b){var s=B.e.bQ(b)
return this.aS(1)<b-s?s+1:s},
l1(a,b,c){var s,r
c.i("C<0>").a(b)
s=this.U(b.length)
if(!(s>=0&&s<b.length))return A.b(b,s)
r=b[s]
B.a.h(b,s,B.a.gc7(b))
B.a.kW(b)
return r},
cR(a,b){var s
if(b<0)throw A.m(A.aE('The argument "range" must be zero or greater.',null))
s=this.ko(b)
if(s<=this.ko(b))return a+s
else return a-b-1+s},
hV(a,b){var s=this.a
for(;;){if(!(s.a3(b)===0))break;++a}return a}}
A.lV.prototype={
gb4(){return Math.max(Math.abs(this.gn()),Math.abs(this.gp()))},
gaH(){var s=this
return s.gn()*s.gn()+s.gp()*s.gp()},
gI(a){return Math.sqrt(this.gaH())},
gkA(){var s,r,q,p=this,o=null,n=p.gn(),m=p.gp()
A:{s=n<0
r=s
if(r&&p.gp()/p.gn()>=2){r=B.M
break A}if(s&&p.gp()/p.gn()>=0.5){r=B.V
break A}if(s&&p.gp()/p.gn()>=-0.5){r=B.T
break A}if(s&&p.gp()/p.gn()>=-2){r=B.U
break A}if(s){r=B.L
break A}q=n>0
r=q
if(r&&p.gp()/p.gn()>=2){r=B.L
break A}if(q&&p.gp()/p.gn()>=0.5){r=B.R
break A}if(q&&p.gp()/p.gn()>=-0.5){r=B.Q
break A}if(q&&p.gp()/p.gn()>=-2){r=B.S
break A}if(q){r=B.M
break A}if(m<0){r=B.M
break A}if(m>0){r=B.L
break A}r=B.r
break A}return r},
gbD(){var s,r=A.a([],t.l)
for(s=0;s<8;++s)r.push(this.F(0,B.a6[s]))
return r},
gdN(){var s,r=A.a([],t.l)
for(s=0;s<4;++s)r.push(this.F(0,B.au[s]))
return r},
aL(a,b){A.r(b)
return new A.e(this.gn()*b,this.gp()*b)},
F(a,b){var s,r=this
A:{if(t.u.b(b)){s=new A.e(r.gn()+b.gn(),r.gp()+b.gp())
break A}if(A.fB(b)){s=new A.e(r.gn()+b,r.gp()+b)
break A}s=A.a_(A.aE("Operand must be an int or Vec.",null))}return s},
S(a,b){var s,r,q,p
A:{s=this.gn()
r=b.gn()
q=this.gp()
p=b.gp()
break A}return new A.e(s-r,q-p)},
bi(a,b){var s
A:{if(t.u.b(b)){s=this.gaH()>b.gaH()
break A}if(typeof b=="number"){s=this.gaH()>b*b
break A}s=A.a_(A.aE("Operand must be a number or Vec.",null))}return s},
cU(a,b){var s
A:{s=this.gaH()>=b*b
break A}return s},
eh(a,b){var s
A:{if(t.u.b(b)){s=this.gaH()<b.gaH()
break A}if(typeof b=="number"){s=this.gaH()<b*b
break A}s=A.a_(A.aE("Operand must be a number or Vec.",null))}return s},
eg(a,b){var s
A:{s=this.gaH()<=b*b
break A}return s},
t(a){return""+this.gn()+", "+this.gp()}}
A.e.prototype={
X(a,b){if(b==null)return!1
if(!t.u.b(b))return!1
return this.a===b.gn()&&this.b===b.gp()},
ga0(a){var s,r=this.a,q=r>=0?2*r:-2*r-1
r=this.b
s=r>=0?2*r:-2*r-1
r=q+s
return B.c.A(r*(r+1),2)+s},
gn(){return this.a},
gp(){return this.b}}
A.nb.prototype={}
A.uY.prototype={}
A.ik.prototype={}
A.mm.prototype={}
A.il.prototype={$iAq:1}
A.ti.prototype={
$1(a){return this.a.$1(A.a2(a))},
$S:5}
A.lM.prototype={}
A.ug.prototype={
$1(a){var s
a=A.r(A.bw(a))
$.bU.u().b.remove()
s=B.c.M(a,0,$.dG.length-1)
if(!(s>=0&&s<$.dG.length))return A.b($.dG,s)
$.bU.b=$.dG[s]
s=A.bV(A.a2(v.G.document).querySelector("#map"))
s.toString
s.append($.bU.u().b)
A.vv()
return null},
$S:148}
A.uh.prototype={
$0(){var s,r,q,p,o
A.vv()
for(s=$.aX.length,r=t.d,q=0;q<$.aX.length;$.aX.length===s||(0,A.o)($.aX),++q){p=r.a($.aX[q])
o=$.bU.b
if(o===$.bU)A.a_(A.dZ(""))
p.di(o.c.e.a.b.b)}$.x.u().d=!0},
$S:25}
A.ui.prototype={
$0(){$.x.u().d=!0
return null},
$S:0}
A.uj.prototype={
$1(a){A.a2(a)
$.nm=A.r(a.location)===3?0:A.r(a.keyCode)
$.yt=A.dE(a.ctrlKey)},
$S:149}
A.uk.prototype={
$1(a){A.y2()},
$S:5}
A.tN.prototype={
$1(a){A.Bb()},
$S:5}
A.tO.prototype={
$1(a){var s,r,q,p,o=$.nQ
if(o==null)return
s=B.e.N(A.bw(a.offsetX))
r=B.e.N(A.bw(a.offsetY))
q=this.a
s=B.c.cd(s,q.z)
q=B.c.cd(r,q.Q)
r=o.w
r===$&&A.c()
r=r.r
p=new A.e(s,q).F(0,new A.e(r.gbT(),r.gbY()))
if(!r.G(0,p))return
s=o.b.x
s===$&&A.c()
s=s.w.B(p.a,p.b)
if(s instanceof A.ad){if($.fA.G(0,s))$.fA.af(0,s)
else $.fA.j(0,s)
A.y2()}},
$S:5}
A.tU.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=v.G,f=A.a2(A.a2(g.document).querySelectorAll(".debug"))
for(s=0;s<A.r(f.length);++s){r=A.bV(A.a2(g.document).body)
r.toString
q=A.bV(f.item(s))
q.toString
A.a2(r.removeChild(q))}p=$.nQ
if(p==null)return
r=A.y($.fA)
$.fA.mE(r.i("z(1)").a(new A.tV()),!0)
for(r=A.vk($.fA,$.fA.r,r.c),q=r.$ti.c;r.q();){o=r.d
if(o==null)o=q.a(o)
n=p.w
n===$&&A.c()
n=n.r
m=o.y
if(n.G(0,m)){l=n.a
k=l.a
n=n.b
l=l.b
j=m.S(0,new A.e(Math.min(k,k+n.a),Math.min(l,l+n.b)))
i=A.zA(o)
if(i==null)continue
h=A.a2(A.a2(g.document).createElement("pre"))
h.className="debug"
A.a2(h.style).display="inline-block"
o=$.bU.b
if(o===$.bU)A.a_(A.dZ(""))
n=o.d
m=o.b
l=B.c.N(A.r(m.offsetLeft))
o=o.e
m=B.c.N(A.r(m.offsetTop))
A.a2(h.style).left=B.c.t((j.a+1)*n+l+4)
A.a2(h.style).top=B.c.t(j.b*o+m+2)
h.textContent=i
A.a2(A.bV(A.a2(g.document).body).children)}}},
$S:0}
A.tV.prototype={
$1(a){return t.B.a(a).z<=0},
$S:150}
A.lw.prototype={
a1(a){t.d.a(a)
B.a.j($.aX,a)
A.ut()
this.lD(a)
A.nh()},
aQ(a){if(0>=$.aX.length)return A.b($.aX,-1)
$.aX.pop()
A.ut()
this.fE(a)
A.nh()},
a8(){return this.aQ(null)},
bh(a){t.d.a(a)
if(0>=$.aX.length)return A.b($.aX,-1)
$.aX.pop()
B.a.j($.aX,a)
A.ut()
this.lC(a)
A.nh()}}
A.tR.prototype={
$1(a){return A.dF(a) instanceof A.eR},
$S:151};(function aliases(){var s=J.dv.prototype
s.lA=s.t
s=A.h1.prototype
s.lz=s.V
s=A.hx.prototype
s.im=s.bq
s=A.cQ.prototype
s.fD=s.a9
s.fC=s.a6
s=A.e9.prototype
s.eo=s.a9
s.lB=s.ai
s=A.ip.prototype
s.io=s.cB
s=A.cA.prototype
s.lD=s.a1
s.fE=s.aQ
s.lC=s.bh})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers._instance_0u
s(J,"Bm","zQ",152)
r(J.t.prototype,"gop","j",52)
q(A,"Bz","xd",2)
p(A,"BZ","AA",27)
p(A,"C_","AB",27)
p(A,"C0","AC",27)
q(A,"yb","BS",0)
p(A,"C5","B7",49)
p(A,"yf","BB",4)
p(A,"C9","xZ",4)
p(A,"Ca","y_",4)
p(A,"a1","Bj",3)
p(A,"CI","B3",6)
p(A,"CL","BH",6)
p(A,"CJ","B4",6)
p(A,"CM","BI",6)
p(A,"CH","B2",6)
p(A,"CK","BG",6)
o(A.fe.prototype,"gpc","pd","1(q)")
p(A,"vx","BF",20)
p(A,"nj","BE",3)
var k
n(k=A.ev.prototype,"gln","lo",84)
n(k,"glp","lq",85)
m(A.bZ.prototype,"gl7",0,1,null,["$2$wasUnequipped","$1"],["fm","c9"],88,0,0)
o(A.eR.prototype,"gmL","bN",36)
s(A,"Cp","zL",15)
s(A,"yl","zI",15)
s(A,"Co","zK",15)
s(A,"ub","zJ",15)
s(A,"Cu","A1",22)
s(A,"yo","A0",22)
s(A,"yp","A2",22)
o(k=A.b5.prototype,"gi5","fp",29)
o(k,"gm_","m0",11)
o(A.hW.prototype,"gi5","fp",29)
o(k=A.e9.prototype,"goa","ob",11)
o(k,"geA","c0",13)
l(A.ii.prototype,"gjl","eE",0)
o(A.iH.prototype,"geA","c0",13)
o(A.iG.prototype,"geA","c0",13)
o(A.fr.prototype,"geA","c0",13)
l(k=A.ic.prototype,"gnm","nn",0)
l(k,"gmY","mZ",0)
l(k,"gmu","mv",0)
l(k,"gon","oo",0)
l(k,"gmO","mP",0)
l(k,"gn8","n9",0)
l(k,"gm6","m7",0)
l(k,"gnk","nl",0)
l(k,"go6","o7",0)
l(k,"go4","o5",0)
l(k,"go8","o9",0)
o(k=A.cA.prototype,"gn4","n5",5)
o(k,"gn6","n7",5)
o(k,"go0","o1",147)
p(A,"ym","B5",11)
p(A,"yn","B6",13)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.P,null)
q(A.P,[A.v0,J.ku,A.hU,J.aV,A.aq,A.Z,A.r4,A.k,A.c9,A.bs,A.d5,A.i4,A.i6,A.bu,A.aG,A.dC,A.c1,A.eD,A.iv,A.dk,A.rZ,A.qu,A.iI,A.an,A.pU,A.c8,A.cR,A.e_,A.hn,A.iw,A.id,A.lG,A.n6,A.tg,A.cb,A.mx,A.na,A.tH,A.aj,A.cp,A.mi,A.io,A.bH,A.m6,A.i0,A.iO,A.is,A.fj,A.mM,A.d8,A.ee,A.jJ,A.jL,A.tw,A.dS,A.th,A.l6,A.i_,A.tj,A.oM,A.aQ,A.aM,A.n7,A.ru,A.cY,A.k0,A.qt,A.mG,A.mW,A.kf,A.a5,A.H,A.fc,A.h7,A.eL,A.mS,A.h3,A.h_,A.td,A.cm,A.tf,A.aK,A.ie,A.mO,A.bI,A.k7,A.te,A.mb,A.af,A.iC,A.m4,A.bc,A.n0,A.nG,A.iB,A.bj,A.l8,A.fX,A.nX,A.jR,A.eV,A.pN,A.hG,A.qx,A.qG,A.im,A.tC,A.e4,A.rY,A.fn,A.fu,A.dh,A.kh,A.cJ,A.dA,A.b9,A.dj,A.dx,A.ba,A.aF,A.c4,A.dT,A.h9,A.k_,A.aL,A.ke,A.i8,A.kJ,A.hy,A.fe,A.bv,A.c2,A.mU,A.iE,A.qp,A.hD,A.W,A.d_,A.cK,A.dQ,A.cP,A.dq,A.hw,A.aI,A.cV,A.hZ,A.dn,A.bd,A.cl,A.ev,A.c6,A.bD,A.dP,A.bO,A.rW,A.aP,A.ln,A.dy,A.jy,A.ay,A.nO,A.f_,A.cq,A.oN,A.n_,A.pR,A.f4,A.rd,A.rf,A.ag,A.bG,A.d2,A.d1,A.u,A.fY,A.jN,A.h4,A.h8,A.cN,A.kl,A.ko,A.kw,A.kM,A.l7,A.lL,A.lQ,A.f,A.l,A.kx,A.d9,A.eE,A.qz,A.m5,A.ae,A.d0,A.rv,A.lI,A.aO,A.aw,A.ab,A.Q,A.bE,A.ca,A.oa,A.F,A.Y,A.kE,A.A,A.cA,A.mg,A.mL,A.cW,A.qW,A.lV,A.nb,A.uY,A.il,A.lM])
q(J.ku,[J.hk,J.hm,J.hp,J.ho,J.hq,J.dY,J.ds])
q(J.hp,[J.dv,J.t,A.f0,A.hB])
q(J.dv,[J.la,J.dB,J.dt])
r(J.kz,A.hU)
r(J.pJ,J.t)
q(J.dY,[J.hl,J.kA])
q(A.aq,[A.du,A.d3,A.kB,A.lT,A.lu,A.mo,A.hs,A.jm,A.cn,A.i7,A.lS,A.e6,A.jK])
r(A.fo,A.Z)
r(A.dl,A.fo)
q(A.k,[A.M,A.cU,A.ao,A.e7,A.i5,A.ib,A.iu,A.m3,A.n5,A.S,A.lW,A.mn,A.mE,A.aa,A.jD,A.a0])
q(A.M,[A.aH,A.b6,A.cS,A.br,A.ir])
q(A.aH,[A.i3,A.as,A.cX,A.ht,A.mI])
r(A.cM,A.cU)
r(A.h6,A.e7)
q(A.c1,[A.fv,A.fw,A.fx])
r(A.O,A.fv)
r(A.K,A.fw)
r(A.X,A.fx)
q(A.eD,[A.bk,A.dX])
q(A.dk,[A.jF,A.jG,A.lK,A.u7,A.u9,A.ta,A.t9,A.ts,A.rH,A.tE,A.q6,A.uc,A.uo,A.up,A.u0,A.oQ,A.oR,A.oP,A.t5,A.nF,A.o4,A.o8,A.t6,A.oJ,A.qF,A.u4,A.og,A.ok,A.ol,A.oh,A.oi,A.oo,A.op,A.oj,A.om,A.on,A.pg,A.pj,A.nz,A.nA,A.nx,A.nC,A.nw,A.nB,A.u3,A.uz,A.ur,A.uB,A.re,A.nY,A.pQ,A.pP,A.qX,A.rV,A.rU,A.o1,A.o2,A.o3,A.oe,A.of,A.oY,A.pW,A.pY,A.u6,A.qH,A.qI,A.qM,A.qN,A.qK,A.qL,A.qJ,A.qs,A.qr,A.q8,A.r_,A.qZ,A.oE,A.oC,A.oZ,A.rt,A.ot,A.or,A.pd,A.qi,A.qj,A.qk,A.qh,A.nJ,A.nH,A.nI,A.nD,A.nE,A.oK,A.pS,A.rp,A.rs,A.rr,A.oA,A.ow,A.oB,A.ox,A.oz,A.o9,A.oX,A.oW,A.oU,A.rQ,A.rR,A.pv,A.pw,A.qb,A.qe,A.qf,A.qc,A.qd,A.ps,A.rX,A.oS,A.qm,A.qn,A.qo,A.ql,A.r7,A.r8,A.r6,A.rn,A.rk,A.ou,A.ov,A.r1,A.uw,A.rF,A.rG,A.rC,A.rD,A.rw,A.rM,A.tF,A.tL,A.tM,A.qO,A.qP,A.ti,A.ug,A.uj,A.uk,A.tN,A.tO,A.tV,A.tR])
q(A.jF,[A.qD,A.tb,A.tc,A.tI,A.tk,A.to,A.tn,A.tm,A.tl,A.tr,A.tq,A.tp,A.rI,A.tD,A.tX,A.o5,A.pk,A.ph,A.pp,A.pq,A.po,A.pl,A.pr,A.pm,A.pf,A.pi,A.pn,A.ny,A.u2,A.tY,A.tZ,A.uf,A.us,A.ue,A.um,A.o0,A.nZ,A.qT,A.qU,A.qR,A.qV,A.qS,A.qQ,A.nR,A.nT,A.nU,A.nS,A.pX,A.q1,A.q2,A.q_,A.q0,A.q3,A.ra,A.pD,A.ro,A.oq,A.pu,A.qa,A.p7,A.p8,A.p9,A.pa,A.pb,A.pc,A.rh,A.ri,A.r0,A.rO,A.rN,A.uh,A.ui,A.tU])
r(A.hF,A.d3)
q(A.lK,[A.lF,A.ex])
q(A.an,[A.c7,A.iq,A.mH])
q(A.jG,[A.pK,A.u8,A.tt,A.q7,A.tx,A.oO,A.nK,A.nL,A.o6,A.o7,A.tA,A.uA,A.o_,A.pO,A.rT,A.tz,A.p2,A.p1,A.p0,A.p_,A.oD,A.pZ,A.rb,A.rc,A.os,A.pF,A.pA,A.pz,A.py,A.pG,A.pB,A.pC,A.pE,A.oL,A.pT,A.rq,A.oy,A.oV,A.pt,A.q5,A.q4,A.r9,A.rm,A.rj,A.rl,A.qB,A.qC,A.r2,A.r3,A.ux,A.uy,A.uu,A.uv,A.rE,A.rx,A.ry,A.rz,A.rA,A.rB,A.oc,A.od,A.rL,A.rS,A.t8,A.t7])
r(A.hr,A.c7)
q(A.hB,[A.kV,A.f1])
q(A.f1,[A.ix,A.iz])
r(A.iy,A.ix)
r(A.hz,A.iy)
r(A.iA,A.iz)
r(A.hA,A.iA)
q(A.hz,[A.kW,A.kX])
q(A.hA,[A.kY,A.kZ,A.l_,A.l0,A.l1,A.hC,A.l2])
r(A.iJ,A.mo)
r(A.ig,A.mi)
r(A.mY,A.iO)
r(A.ft,A.iq)
r(A.iF,A.fj)
r(A.d7,A.iF)
r(A.kD,A.hs)
r(A.kC,A.jJ)
q(A.jL,[A.pM,A.pL])
r(A.tv,A.tw)
q(A.cn,[A.fb,A.ks])
q(A.a5,[A.mp,A.ms,A.lE,A.m7,A.mh,A.n3,A.nc])
r(A.k2,A.mp)
r(A.k6,A.ms)
q(A.H,[A.k9,A.kO,A.ma,A.kK,A.h1,A.eG,A.eJ,A.mc,A.md,A.me,A.mv,A.mQ,A.mR,A.fp,A.eY,A.mt,A.eN,A.eM,A.eT,A.kn,A.lm,A.eU,A.eZ,A.kQ,A.f5,A.lc,A.jj,A.fg,A.ff,A.lA,A.fm,A.mP,A.ka,A.jn,A.kv,A.l9,A.lY,A.l4,A.jE,A.lp,A.jB])
q(A.fc,[A.lZ,A.jk,A.hK])
q(A.lE,[A.m9,A.mf,A.mj,A.ml,A.mq,A.mr,A.mw,A.mA,A.mB,A.mC,A.mD,A.mJ,A.mK,A.mN,A.mV,A.mZ,A.n2,A.n9,A.nd,A.ne])
r(A.jr,A.m9)
r(A.jA,A.mf)
r(A.jM,A.mj)
r(A.jW,A.ml)
r(A.k3,A.mq)
r(A.k4,A.mr)
r(A.kc,A.mw)
r(A.ki,A.mA)
r(A.kj,A.mB)
r(A.kp,A.mC)
r(A.kr,A.mD)
r(A.kG,A.mJ)
r(A.kI,A.mK)
r(A.kP,A.mN)
r(A.li,A.mV)
r(A.lx,A.mZ)
r(A.lz,A.n2)
r(A.lN,A.n9)
r(A.m1,A.nd)
r(A.m2,A.ne)
r(A.jp,A.m7)
q(A.kO,[A.m8,A.jI,A.n4])
r(A.jq,A.m8)
r(A.jH,A.mh)
r(A.lC,A.n3)
r(A.lD,A.n4)
r(A.m_,A.nc)
r(A.js,A.ma)
q(A.kK,[A.jw,A.lP])
q(A.h1,[A.eS,A.mu,A.f7,A.ew,A.eF,A.fd])
r(A.eO,A.mu)
q(A.th,[A.eH,A.e1,A.dz,A.hj,A.bR,A.rP,A.hR,A.hS,A.km,A.c_,A.hE,A.e3,A.cx,A.fk,A.fq,A.ji,A.mk])
r(A.ez,A.mc)
r(A.eA,A.md)
r(A.jz,A.me)
r(A.eP,A.mv)
r(A.f8,A.mQ)
r(A.lb,A.mR)
r(A.k8,A.mt)
q(A.lm,[A.kq,A.mX])
q(A.eL,[A.kN,A.kT,A.n1])
r(A.ll,A.mX)
q(A.mP,[A.f2,A.f3])
r(A.c0,A.mS)
q(A.c0,[A.jV,A.kb,A.k1,A.k5,A.lh,A.ly])
r(A.kd,A.h3)
q(A.td,[A.nP,A.pe])
q(A.tf,[A.mF,A.n8])
q(A.te,[A.oF,A.jx])
q(A.bc,[A.bz,A.lk,A.dm,A.kk,A.hf,A.bY,A.b7,A.bS,A.bF])
r(A.fZ,A.lk)
r(A.ah,A.n0)
q(A.ah,[A.di,A.jl,A.jt,A.ju,A.hx])
q(A.hx,[A.jo,A.jv,A.kF,A.lB,A.lH,A.m0])
q(A.l8,[A.ty,A.qg,A.tG])
q(A.bj,[A.eB,A.eC,A.lt,A.eX,A.f6,A.fh])
q(A.lt,[A.eI,A.eW])
q(A.kv,[A.jU,A.jX,A.lR,A.lU,A.lO])
q(A.dA,[A.bp,A.aJ,A.L])
q(A.c4,[A.he,A.h0,A.hI,A.dR,A.hc,A.hQ,A.hH])
q(A.i8,[A.lX,A.f9])
q(A.dQ,[A.aY,A.lr,A.cc,A.dV])
q(A.bp,[A.av,A.ad])
r(A.cy,A.bd)
q(A.cy,[A.i1,A.fV,A.ia,A.hh])
r(A.eK,A.mn)
r(A.bZ,A.mE)
q(A.f_,[A.co,A.cH,A.cG])
q(A.u,[A.jh,A.hb,A.jS,A.eR,A.hv,A.lJ,A.i9,A.hg,A.cQ,A.b5,A.e9,A.kg,A.kL,A.l3,A.ld,A.hT,A.ic,A.cB])
q(A.jS,[A.fU,A.l5])
q(A.cQ,[A.jY,A.ky,A.kR])
q(A.b5,[A.dp,A.dU,A.hi,A.e2,A.mT,A.hW,A.e8,A.ea])
q(A.d9,[A.ih,A.ij,A.iD,A.fy])
q(A.mT,[A.lf,A.lg])
q(A.e9,[A.d6,A.it,A.ii,A.iH,A.fr])
q(A.d6,[A.ip,A.iG])
q(A.ip,[A.mz,A.my])
q(A.eE,[A.kU,A.fi])
q(A.qz,[A.px,A.pV,A.r5,A.rg])
q(A.ld,[A.h2,A.ha,A.hd,A.hV])
q(A.d0,[A.lv,A.aZ,A.hP])
q(A.cB,[A.nf,A.ng])
r(A.ls,A.hP)
r(A.aA,A.mk)
r(A.e,A.nb)
r(A.ik,A.i0)
r(A.mm,A.ik)
r(A.lw,A.cA)
s(A.fo,A.dC)
s(A.ix,A.Z)
s(A.iy,A.aG)
s(A.iz,A.Z)
s(A.iA,A.aG)
s(A.mp,A.W)
s(A.ms,A.W)
s(A.m9,A.W)
s(A.mf,A.W)
s(A.mj,A.W)
s(A.ml,A.W)
s(A.mq,A.d_)
s(A.mr,A.W)
s(A.mw,A.W)
s(A.mA,A.W)
s(A.mB,A.W)
s(A.mC,A.d_)
s(A.mD,A.W)
s(A.mJ,A.W)
s(A.mK,A.W)
s(A.mN,A.W)
s(A.mV,A.W)
s(A.mZ,A.W)
s(A.n2,A.W)
s(A.n9,A.W)
s(A.nd,A.W)
s(A.ne,A.W)
s(A.m7,A.cK)
s(A.m8,A.kh)
s(A.mh,A.cK)
s(A.n3,A.cK)
s(A.n4,A.kh)
s(A.nc,A.d_)
s(A.ma,A.h7)
s(A.mu,A.cJ)
s(A.mc,A.cJ)
s(A.md,A.cJ)
s(A.me,A.cJ)
s(A.mv,A.cJ)
s(A.mQ,A.cJ)
s(A.mR,A.cJ)
s(A.mt,A.h7)
s(A.mX,A.h7)
s(A.mS,A.aI)
s(A.n0,A.aI)
s(A.mn,A.bD)
s(A.mE,A.bD)
s(A.mk,A.lV)
s(A.nb,A.lV)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",E:"double",ap:"num",q:"String",z:"bool",aM:"Null",C:"List",P:"Object",bg:"Map",aC:"JSObject"},mangledNames:{},types:["~()","z(e)","d()","d(d)","q(q)","~(aC)","H(e)","~(L)","E()","z(aA)","~(e)","z(L)","~(q,@)","d?(L)","d(d,cl)","d(aP,aP)","d(d,q)","F(F,F)","C<q>(d)","~(L,e)","E(d)","~(ah,d)","d(ay,ay)","z(dq)","d(d,d)","aM()","fu()","~(~())","~(d0)","d(L)","~(q,q)","dp()","z(ay)","z(aP)","d(ad)","aM(@)","~(aA)","~(P?,P?)","z(bc)","~(ad)","~(cm)","z(cV)","P?(P?)","q(cu)","~(d,d,Y)","aM(d)","E(E,dj)","E(E,dx)","C<e>()","@(@)","E(E,cl)","~(@)","~(P?)","eU()","~(bB,E)","eM(e)","~(q,E)","eN()","eI()","eB()","eC()","eX()","fh()","eW()","f6()","~(ay,e)","e()","E(d,d)","ff(e)","f3(e)","f2(e)","d2(fn,d)","fg()","fa<ap>()","eT()","fm()","eS()","eZ()","fd()","aM(e)","f5()","~(d)","aM(E)","eG()","~(dT,d(d))","~(cx,d(d))","d(d,L?)","z(q)","dP(L{wasUnequipped:z})","L(L)","eJ()","eY(e,ba,ap,d)","eF(d)","ew(d)","~(aA,z)","~(e,d)","d1(e)","bZ()","~(e,bZ)","f8(e,ba,ap,d)","d(aQ<d,a5>,aQ<d,a5>)","~(q,d,d)","~(d,aA,q)","f7(d)","eP(e,ba,ap,d)","eO(d)","k<aw<L?>>()","eA(e,ba,ap,d)","k<aw<aP>>()","z(d)","ez(d)","k<aw<ay>>()","ea()","dU()","e8()","fp(d)","e2()","z(E)","z(L?)","@(@,q)","C<e>(d)","z(E,E)","q(cV)","q(cP)","z(z,d)","d(ad,ad)","~(cy)","q(ba)","~(q,F[F?])","z(aB)","~(dy,bZ)","z(bp,d1)","~(q,F,d{total:d?})","z(bp)","z(ae)","d(d,ae)","z(d,d)","P?(P)","~(q,C<+(bD,d)>)","d(d,+(bD,d))","z(cP)","~(q,dy)","z(c_)","q(di)","~(d,d)","d(d,Q)","~(d,d,d)","~(ap)","~(E)","aM(aC)","z(ad)","z(P)","d(@,@)","aM(P,fl)","aM(~())","@(q)","aM(e,ba,ap,d)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.O&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.K&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.X&&A.Cv(a,b.a)}}
A.AV(v.typeUniverse,JSON.parse('{"la":"dv","dB":"dv","dt":"dv","DC":"f0","hk":{"z":[],"ai":[]},"hm":{"ai":[]},"hp":{"aC":[]},"dv":{"aC":[]},"t":{"C":["1"],"M":["1"],"aC":[],"k":["1"]},"kz":{"hU":[]},"pJ":{"t":["1"],"C":["1"],"M":["1"],"aC":[],"k":["1"]},"aV":{"a3":["1"]},"dY":{"E":[],"ap":[],"az":["ap"]},"hl":{"E":[],"d":[],"ap":[],"az":["ap"],"ai":[]},"kA":{"E":[],"ap":[],"az":["ap"],"ai":[]},"ds":{"q":[],"az":["q"],"qA":[],"ai":[]},"du":{"aq":[]},"dl":{"Z":["d"],"dC":["d"],"C":["d"],"M":["d"],"k":["d"],"Z.E":"d","dC.E":"d"},"M":{"k":["1"]},"aH":{"M":["1"],"k":["1"]},"i3":{"aH":["1"],"M":["1"],"k":["1"],"aH.E":"1","k.E":"1"},"c9":{"a3":["1"]},"cU":{"k":["2"],"k.E":"2"},"cM":{"cU":["1","2"],"M":["2"],"k":["2"],"k.E":"2"},"bs":{"a3":["2"]},"as":{"aH":["2"],"M":["2"],"k":["2"],"aH.E":"2","k.E":"2"},"ao":{"k":["1"],"k.E":"1"},"d5":{"a3":["1"]},"e7":{"k":["1"],"k.E":"1"},"h6":{"e7":["1"],"M":["1"],"k":["1"],"k.E":"1"},"i4":{"a3":["1"]},"i5":{"k":["1"],"k.E":"1"},"i6":{"a3":["1"]},"ib":{"k":["1"],"k.E":"1"},"bu":{"a3":["1"]},"fo":{"Z":["1"],"dC":["1"],"C":["1"],"M":["1"],"k":["1"]},"cX":{"aH":["1"],"M":["1"],"k":["1"],"aH.E":"1","k.E":"1"},"O":{"fv":[],"c1":[]},"K":{"fw":[],"c1":[]},"X":{"fx":[],"c1":[]},"eD":{"bg":["1","2"]},"bk":{"eD":["1","2"],"bg":["1","2"]},"iu":{"k":["1"],"k.E":"1"},"iv":{"a3":["1"]},"dX":{"eD":["1","2"],"bg":["1","2"]},"hF":{"d3":[],"aq":[]},"kB":{"aq":[]},"lT":{"aq":[]},"iI":{"fl":[]},"dk":{"dW":[]},"jF":{"dW":[]},"jG":{"dW":[]},"lK":{"dW":[]},"lF":{"dW":[]},"ex":{"dW":[]},"lu":{"aq":[]},"c7":{"an":["1","2"],"v2":["1","2"],"bg":["1","2"],"an.K":"1","an.V":"2"},"b6":{"M":["1"],"k":["1"],"k.E":"1"},"c8":{"a3":["1"]},"cS":{"M":["1"],"k":["1"],"k.E":"1"},"cR":{"a3":["1"]},"br":{"M":["aQ<1,2>"],"k":["aQ<1,2>"],"k.E":"aQ<1,2>"},"e_":{"a3":["aQ<1,2>"]},"hr":{"c7":["1","2"],"an":["1","2"],"v2":["1","2"],"bg":["1","2"],"an.K":"1","an.V":"2"},"fv":{"c1":[]},"fw":{"c1":[]},"fx":{"c1":[]},"hn":{"Ak":[],"qA":[]},"iw":{"hO":[],"cu":[]},"m3":{"k":["hO"],"k.E":"hO"},"id":{"a3":["hO"]},"lG":{"cu":[]},"n5":{"k":["cu"],"k.E":"cu"},"n6":{"a3":["cu"]},"f0":{"aC":[],"uU":[],"ai":[]},"hB":{"aC":[]},"kV":{"uV":[],"aC":[],"ai":[]},"f1":{"bP":["1"],"aC":[]},"hz":{"Z":["E"],"C":["E"],"bP":["E"],"M":["E"],"aC":[],"k":["E"],"aG":["E"]},"hA":{"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"]},"kW":{"oG":[],"Z":["E"],"C":["E"],"bP":["E"],"M":["E"],"aC":[],"k":["E"],"aG":["E"],"ai":[],"Z.E":"E","aG.E":"E"},"kX":{"oH":[],"Z":["E"],"C":["E"],"bP":["E"],"M":["E"],"aC":[],"k":["E"],"aG":["E"],"ai":[],"Z.E":"E","aG.E":"E"},"kY":{"p4":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"kZ":{"p5":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"l_":{"p6":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"l0":{"t0":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"l1":{"t1":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"hC":{"t2":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"l2":{"t3":[],"Z":["d"],"C":["d"],"bP":["d"],"M":["d"],"aC":[],"k":["d"],"aG":["d"],"ai":[],"Z.E":"d","aG.E":"d"},"mo":{"aq":[]},"iJ":{"d3":[],"aq":[]},"aj":{"a3":["1"]},"S":{"k":["1"],"k.E":"1"},"cp":{"aq":[]},"ig":{"mi":["1"]},"bH":{"eQ":["1"]},"iO":{"xw":[]},"mY":{"iO":[],"xw":[]},"fa":{"M":["1"],"k":["1"]},"iq":{"an":["1","2"],"bg":["1","2"]},"ft":{"iq":["1","2"],"an":["1","2"],"bg":["1","2"],"an.K":"1","an.V":"2"},"ir":{"M":["1"],"k":["1"],"k.E":"1"},"is":{"a3":["1"]},"d7":{"fj":["1"],"hX":["1"],"M":["1"],"k":["1"]},"d8":{"a3":["1"]},"Z":{"C":["1"],"M":["1"],"k":["1"]},"an":{"bg":["1","2"]},"ht":{"fa":["1"],"aH":["1"],"M":["1"],"k":["1"],"aH.E":"1","k.E":"1"},"ee":{"a3":["1"]},"fj":{"hX":["1"],"M":["1"],"k":["1"]},"iF":{"fj":["1"],"hX":["1"],"M":["1"],"k":["1"]},"mH":{"an":["q","@"],"bg":["q","@"],"an.K":"q","an.V":"@"},"mI":{"aH":["q"],"M":["q"],"k":["q"],"aH.E":"q","k.E":"q"},"hs":{"aq":[]},"kD":{"aq":[]},"kC":{"jJ":["P?","q"]},"dS":{"az":["dS"]},"E":{"ap":[],"az":["ap"]},"d":{"ap":[],"az":["ap"]},"C":{"M":["1"],"k":["1"]},"ap":{"az":["ap"]},"hO":{"cu":[]},"hX":{"M":["1"],"k":["1"]},"q":{"az":["q"],"qA":[]},"jm":{"aq":[]},"d3":{"aq":[]},"cn":{"aq":[]},"fb":{"aq":[]},"ks":{"aq":[]},"i7":{"aq":[]},"lS":{"aq":[]},"e6":{"aq":[]},"jK":{"aq":[]},"l6":{"aq":[]},"i_":{"aq":[]},"n7":{"fl":[]},"cY":{"Ar":[]},"mG":{"v7":[]},"mW":{"v7":[]},"kf":{"zy":[]},"k2":{"W":[],"a5":[]},"k6":{"W":[],"a5":[]},"k9":{"H":[]},"kO":{"H":[]},"lZ":{"fc":[]},"jr":{"W":[],"a5":[]},"jA":{"W":[],"a5":[]},"jM":{"W":[],"a5":[]},"jW":{"W":[],"a5":[]},"k3":{"d_":[],"a5":[]},"k4":{"W":[],"a5":[]},"kc":{"W":[],"a5":[]},"ki":{"W":[],"a5":[]},"kj":{"W":[],"a5":[]},"kp":{"d_":[],"a5":[]},"kr":{"W":[],"a5":[]},"kG":{"W":[],"a5":[]},"kI":{"W":[],"a5":[]},"kP":{"W":[],"a5":[]},"li":{"W":[],"a5":[]},"lx":{"W":[],"a5":[]},"lz":{"W":[],"a5":[]},"lE":{"a5":[]},"jk":{"fc":[]},"lN":{"W":[],"a5":[]},"m1":{"W":[],"a5":[]},"m2":{"W":[],"a5":[]},"jp":{"cK":[],"a5":[]},"jq":{"H":[]},"jH":{"cK":[],"a5":[]},"jI":{"H":[]},"lC":{"cK":[],"a5":[]},"lD":{"H":[]},"m_":{"d_":[],"a5":[]},"js":{"H":[]},"jw":{"H":[]},"eS":{"H":[]},"eO":{"H":[]},"f7":{"H":[]},"ew":{"H":[]},"eF":{"H":[]},"fd":{"H":[]},"h1":{"H":[]},"eG":{"H":[]},"eJ":{"H":[]},"ez":{"H":[]},"eA":{"H":[]},"eP":{"H":[]},"f8":{"H":[]},"fp":{"H":[]},"eY":{"H":[]},"jz":{"H":[]},"lb":{"H":[]},"eN":{"H":[]},"eM":{"H":[]},"k8":{"H":[]},"eT":{"H":[]},"kn":{"H":[]},"eU":{"H":[]},"kq":{"H":[]},"eZ":{"H":[]},"kN":{"eL":[]},"kQ":{"H":[]},"f5":{"H":[]},"lc":{"H":[]},"jj":{"H":[]},"fg":{"H":[]},"ff":{"H":[]},"lm":{"H":[]},"ll":{"H":[]},"lA":{"H":[]},"fm":{"H":[]},"f2":{"H":[]},"f3":{"H":[]},"mP":{"H":[]},"jV":{"c0":[],"aI":[]},"kb":{"c0":[],"aI":[]},"kd":{"h3":[]},"mF":{"bB":[]},"n8":{"bB":[]},"aK":{"bB":[]},"ie":{"bB":[]},"mO":{"bB":[]},"bI":{"bB":[]},"mb":{"e5":[]},"af":{"e5":[]},"iC":{"e5":[]},"m4":{"e5":[]},"bz":{"bc":[]},"fZ":{"bc":[]},"dm":{"bc":[]},"kk":{"bc":[]},"hf":{"bc":[]},"bY":{"bc":[]},"b7":{"bc":[]},"bS":{"bc":[]},"bF":{"bc":[]},"k1":{"c0":[],"aI":[]},"k5":{"c0":[],"aI":[]},"lh":{"c0":[],"aI":[]},"ly":{"c0":[],"aI":[]},"di":{"ah":[],"aI":[],"az":["ah"]},"jl":{"ah":[],"aI":[],"az":["ah"]},"jt":{"ah":[],"aI":[],"az":["ah"]},"ju":{"ah":[],"aI":[],"az":["ah"]},"hx":{"ah":[],"aI":[],"az":["ah"]},"jo":{"ah":[],"aI":[],"az":["ah"]},"jv":{"ah":[],"aI":[],"az":["ah"]},"kF":{"ah":[],"aI":[],"az":["ah"]},"lB":{"ah":[],"aI":[],"az":["ah"]},"lH":{"ah":[],"aI":[],"az":["ah"]},"m0":{"ah":[],"aI":[],"az":["ah"]},"eB":{"bj":[]},"eC":{"bj":[]},"eI":{"bj":[]},"eW":{"bj":[]},"eX":{"bj":[]},"f6":{"bj":[]},"fh":{"bj":[]},"lt":{"bj":[]},"ka":{"H":[]},"jn":{"H":[]},"kv":{"H":[]},"l9":{"H":[]},"jU":{"H":[]},"jX":{"H":[]},"lR":{"H":[]},"lU":{"H":[]},"kK":{"H":[]},"lO":{"H":[]},"lP":{"H":[]},"lY":{"H":[]},"l4":{"H":[]},"jE":{"H":[]},"lp":{"H":[]},"bp":{"dA":[]},"hQ":{"c4":[]},"he":{"c4":[]},"h0":{"c4":[]},"hI":{"c4":[]},"dR":{"c4":[]},"hc":{"c4":[]},"hH":{"c4":[]},"lX":{"i8":[]},"f9":{"i8":[]},"aJ":{"dA":[]},"lW":{"k":["e"],"k.E":"e"},"aY":{"dQ":[]},"lr":{"dQ":[]},"cc":{"dQ":[]},"dV":{"dQ":[]},"av":{"bp":[],"dA":[]},"c0":{"aI":[]},"hK":{"fc":[]},"ah":{"aI":[],"az":["ah"]},"cy":{"bd":["d"]},"bd":{"bd.T":"1"},"i1":{"cy":[],"bd":["d"],"bd.T":"d"},"fV":{"cy":[],"bd":["d"],"bd.T":"d"},"ia":{"cy":[],"bd":["d"],"bd.T":"d"},"hh":{"cy":[],"bd":["d"],"bd.T":"d"},"eK":{"bD":[],"k":["L"],"k.E":"L"},"bD":{"k":["L"]},"bZ":{"bD":[],"k":["L"],"k.E":"L"},"L":{"dA":[],"az":["L"]},"ad":{"bp":[],"dA":[]},"jB":{"H":[]},"co":{"f_":[]},"cH":{"f_":[]},"cG":{"f_":[]},"lk":{"bc":[]},"kT":{"eL":[]},"n1":{"eL":[]},"jh":{"u":["l"],"u.T":"l"},"fY":{"aB":[]},"jN":{"aB":[]},"h4":{"aB":[]},"h8":{"aB":[]},"cN":{"aB":[]},"kl":{"aB":[]},"ko":{"aB":[]},"kw":{"aB":[]},"kM":{"aB":[]},"l7":{"aB":[]},"lL":{"aB":[]},"lQ":{"aB":[]},"hb":{"u":["l"],"u.T":"l"},"jS":{"u":["l"]},"fU":{"u":["l"],"u.T":"l"},"l5":{"u":["l"],"u.T":"l"},"eR":{"u":["l"],"u.T":"l"},"hv":{"u":["l"],"u.T":"l"},"lJ":{"u":["l"],"u.T":"l"},"i9":{"u":["l"],"u.T":"l"},"hg":{"u":["l"],"u.T":"l"},"jY":{"cQ":[],"u":["l"],"u.T":"l"},"cQ":{"u":["l"]},"ky":{"cQ":[],"u":["l"],"u.T":"l"},"kR":{"cQ":[],"u":["l"],"u.T":"l"},"dp":{"b5":[],"u":["l"],"u.T":"l"},"dU":{"b5":[],"u":["l"],"u.T":"l"},"hi":{"b5":[],"u":["l"],"u.T":"l"},"b5":{"u":["l"]},"ih":{"d9":[]},"ij":{"d9":[]},"iD":{"d9":[]},"fy":{"d9":[]},"e2":{"b5":[],"u":["l"],"u.T":"l"},"mT":{"b5":[],"u":["l"]},"lf":{"b5":[],"u":["l"],"u.T":"l"},"lg":{"b5":[],"u":["l"],"u.T":"l"},"hW":{"b5":[],"u":["l"],"u.T":"l"},"e8":{"b5":[],"u":["l"],"u.T":"l"},"e9":{"u":["l"]},"d6":{"u":["l"]},"it":{"u":["l"],"u.T":"l"},"ip":{"d6":[],"u":["l"]},"mz":{"d6":[],"u":["l"],"u.T":"l"},"my":{"d6":[],"u":["l"],"u.T":"l"},"ii":{"u":["l"],"u.T":"l"},"iH":{"u":["l"],"u.T":"l"},"iG":{"d6":[],"u":["l"],"u.T":"l"},"fr":{"u":["l"],"u.T":"l"},"ea":{"b5":[],"u":["l"],"u.T":"l"},"kg":{"u":["l"],"u.T":"l"},"kL":{"u":["l"],"u.T":"l"},"l3":{"u":["l"],"u.T":"l"},"kU":{"eE":[]},"fi":{"eE":[]},"h2":{"u":["l"],"u.T":"l"},"ha":{"u":["l"],"u.T":"l"},"hd":{"u":["l"],"u.T":"l"},"ld":{"u":["l"]},"hV":{"u":["l"],"u.T":"l"},"hT":{"u":["l"],"u.T":"l"},"lv":{"d0":[]},"ic":{"u":["l"],"u.T":"l"},"cB":{"u":["l"]},"nf":{"cB":["aP"],"u":["l"],"u.T":"l","cB.T":"aP"},"ng":{"cB":["ay"],"u":["l"],"u.T":"l","cB.T":"ay"},"aZ":{"d0":[]},"ls":{"hP":[],"d0":[]},"hP":{"d0":[]},"aa":{"k":["1"],"k.E":"1"},"jD":{"k":["e"],"k.E":"e"},"mg":{"a3":["e"]},"aA":{"e":[]},"mL":{"a3":["e"]},"a0":{"k":["e"],"k.E":"e"},"cW":{"a3":["e"]},"ik":{"i0":["1"]},"mm":{"ik":["1"],"i0":["1"]},"il":{"Aq":["1"]},"lw":{"cA":["l"],"cA.T":"l"},"p6":{"C":["d"],"M":["d"],"k":["d"]},"t3":{"C":["d"],"M":["d"],"k":["d"]},"t2":{"C":["d"],"M":["d"],"k":["d"]},"p4":{"C":["d"],"M":["d"],"k":["d"]},"t0":{"C":["d"],"M":["d"],"k":["d"]},"p5":{"C":["d"],"M":["d"],"k":["d"]},"t1":{"C":["d"],"M":["d"],"k":["d"]},"oG":{"C":["E"],"M":["E"],"k":["E"]},"oH":{"C":["E"],"M":["E"],"k":["E"]}}'))
A.AU(v.typeUniverse,JSON.parse('{"M":1,"fo":1,"f1":1,"iF":1,"jL":2,"l8":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",g:"max must be in range 0 < max \u2264 2^32, was ",f:"{1} [don't|doesn't] have room for {the 2} and {2 he} drops to the ground."}
var t=(function rtii(){var s=A.at
return{fD:s("H"),lz:s("W"),fw:s("dh"),Y:s("H()"),bj:s("H(e)"),f0:s("bp"),L:s("cl"),R:s("ev"),dx:s("di"),g_:s("bj"),eh:s("aa<h_>"),bG:s("aa<Y>"),o:s("aa<e4>"),lr:s("aa<d1>"),b:s("aa<z>"),C:s("aa<d>"),hE:s("aa<bp?>"),gy:s("aa<bj?>"),cY:s("aa<Y?>"),eJ:s("aa<z?>"),aY:s("aV<e>"),n:s("cp"),fV:s("dj"),P:s("ay"),nA:s("cq<f4>"),r:s("cq<e>"),lo:s("uU"),fW:s("uV"),cI:s("ab"),oC:s("h_"),gS:s("dl"),aZ:s("F"),jF:s("aO"),bP:s("az<@>"),p1:s("bk<q,q>"),cq:s("bk<q,d>"),cs:s("dS"),j:s("aA"),ln:s("cK"),iZ:s("bB"),ox:s("aB"),gt:s("M<@>"),h:s("dT"),fz:s("aq"),pk:s("oG"),kI:s("oH"),gY:s("dW"),hB:s("ke"),v:s("Y"),V:s("av"),lJ:s("cP"),er:s("dq"),_:s("ba"),fb:s("l"),m6:s("p4"),jL:s("p5"),jx:s("p6"),D:s("bZ"),W:s("L"),j5:s("b5()"),q:s("aP"),E:s("k<L>"),bq:s("k<q>"),cX:s("k<e>"),e7:s("k<@>"),eI:s("t<a5>"),iA:s("t<H>"),p5:s("t<bp>"),o_:s("t<cl>"),c4:s("t<fX>"),dr:s("t<bj>"),da:s("t<b9>"),kt:s("t<dj>"),fO:s("t<ay>"),bZ:s("t<ab>"),bk:s("t<F>"),G:s("t<aO>"),c8:s("t<c4>"),eR:s("t<eE>"),x:s("t<aF>"),oO:s("t<eH>"),T:s("t<aA>"),f8:s("t<bB>"),pl:s("t<aB>"),bI:s("t<k_>"),mO:s("t<Y>"),fJ:s("t<f>"),di:s("t<dq>"),o0:s("t<ba>"),f_:s("t<cQ>"),I:s("t<L>"),hm:s("t<c6>"),fv:s("t<eV>"),g:s("t<C<e>>"),ic:s("t<bg<q,P>>"),kU:s("t<hy>"),lE:s("t<ad>"),a_:s("t<bc>"),w:s("t<P>"),hL:s("t<c0>"),jA:s("t<+(bD,d)>"),dF:s("t<+(q,d)>"),b9:s("t<+(e,L)>"),d3:s("t<+(L?,b9)>"),aP:s("t<+(q,d,q,b5()?)>"),bx:s("t<+(q,d,q,~())>"),hY:s("t<bR>"),gp:s("t<ca<ay>>"),aG:s("t<ca<aP>>"),d4:s("t<bE<ay>>"),mQ:s("t<bE<aP>>"),oW:s("t<ae>"),iO:s("t<dx>"),jp:s("t<u<l>>"),hC:s("t<ah>"),aC:s("t<e5>"),s:s("t<q>"),H:s("t<Q>"),J:s("t<d2>"),l:s("t<e>"),cz:s("t<m5>"),lv:s("t<im>"),hw:s("t<iB>"),n9:s("t<d9>"),mS:s("t<n_>"),gk:s("t<E>"),dG:s("t<@>"),t:s("t<d>"),nK:s("t<fa<f4>?>"),k5:s("t<fa<e>?>"),it:s("t<d(ay,ay)>"),m2:s("t<d(aP,aP)>"),bE:s("hm"),bp:s("aC"),dY:s("dt"),dX:s("bP<@>"),d2:s("eV"),hl:s("kE<l>"),hA:s("C<bj>"),aH:s("C<b9>"),ev:s("C<F>"),hy:s("C<aF>"),jP:s("C<eH>"),du:s("C<aA>"),af:s("C<Y>"),aa:s("C<L>"),eF:s("C<eV>"),ew:s("C<bg<q,P>>"),kz:s("C<bc>"),ez:s("C<P>"),m1:s("C<c0>"),p0:s("C<+(F,F)>"),bM:s("C<+(bD,d)>"),ig:s("C<+(q,d)>"),m:s("C<q>"),nB:s("C<q>(d)"),p:s("C<d2>"),A:s("C<e>"),pa:s("C<iB>"),la:s("C<d9>"),gs:s("C<@>"),jX:s("C<e?>"),dW:s("C<d?>"),aI:s("c_"),cB:s("aQ<d,a5>"),ea:s("bg<q,@>"),av:s("bg<@,@>"),de:s("bg<d,a5>"),gQ:s("as<q,q>"),B:s("ad"),d0:s("bc"),iV:s("aM"),K:s("P"),mh:s("bd<E>"),jo:s("fa<ap>"),ho:s("cV"),lZ:s("DP"),aK:s("+()"),lF:s("+(aA,d)"),kL:s("+(bD,d)"),lu:s("hO"),pj:s("bR"),mF:s("hQ"),b_:s("fe<ev>"),gf:s("e4"),hb:s("ca<ay>"),i0:s("ca<aP>"),o9:s("bE<ay>"),o5:s("bE<aP>"),cv:s("aw<ay>"),bB:s("aw<aP>"),ax:s("aw<L?>"),m7:s("ae"),jK:s("dx"),d:s("u<l>"),c3:s("dy"),M:s("ah"),gl:s("fl"),Z:s("cx"),N:s("q"),po:s("q(cu)"),gL:s("q(q)"),bW:s("d_"),fc:s("Q"),jh:s("d1"),U:s("d2"),aJ:s("ai"),do:s("d3"),hM:s("t0"),mC:s("t1"),nn:s("t2"),ha:s("t3"),cx:s("dB"),u:s("e"),e0:s("ao<aA>"),bC:s("ib<L>"),k:s("bu<L>"),gX:s("mm<aC>"),j_:s("bH<@>"),h0:s("bH<d>"),mp:s("ft<P?,P?>"),ak:s("d6"),fC:s("A"),nP:s("mU"),oc:s("S<dh>"),kX:s("S<aI>"),mY:s("S<ab>"),oP:s("S<aO>"),cm:s("S<aF>"),kF:s("S<aw<ay>>"),jE:s("S<aw<aP>>"),d8:s("S<aw<L?>>"),e:s("S<q>"),e6:s("S<e>"),y:s("z"),ca:s("z(aA)"),iW:s("z(P)"),mN:s("z(e)"),i:s("E"),oF:s("E(d)"),z:s("@"),df:s("@()"),mq:s("@(P)"),ng:s("@(P,fl)"),jJ:s("@(e)"),S:s("d"),Q:s("d(d)"),e9:s("bp?"),aT:s("bj?"),gK:s("eQ<aM>?"),n3:s("Y?"),c:s("L?"),kf:s("b5()?"),mU:s("aC?"),b8:s("C<aO>?"),fm:s("C<q>?"),lH:s("C<@>?"),dZ:s("bg<q,@>?"),aL:s("ad?"),X:s("P?"),jv:s("q?"),jt:s("q(cu)?"),n7:s("e?"),F:s("io<@,@>?"),nF:s("mM?"),fU:s("z?"),hD:s("z(e)?"),dz:s("E?"),i6:s("E(d)?"),aV:s("d?"),lg:s("d(d)?"),ae:s("ap?"),c5:s("~()?"),lT:s("~(cm)?"),cZ:s("ap"),ef:s("~"),O:s("~()"),kc:s("~(cm)"),or:s("~(ay)"),f:s("~(L)"),mH:s("~(L,e)"),lL:s("~(ad)"),lc:s("~(q,@)"),a:s("~(d,d,Y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.hH=J.ku.prototype
B.a=J.t.prototype
B.cd=J.hk.prototype
B.c=J.hl.prototype
B.e=J.dY.prototype
B.i=J.ds.prototype
B.hK=J.dt.prototype
B.hL=J.hp.prototype
B.ct=J.la.prototype
B.bC=J.dB.prototype
B.bE=new A.dh(null,!1,!0)
B.a4=new A.dh(null,!0,!1)
B.o=new A.dh(null,!0,!0)
B.a7=new A.ji(0,"left")
B.am=new A.ji(2,"right")
B.bF=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cQ=function() {
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
B.cV=function(getTagFallback) {
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
B.cR=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cU=function(hooks) {
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
B.cT=function(hooks) {
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
B.cS=function(hooks) {
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

B.b2=new A.kC()
B.cW=new A.l6()
B.an=new A.r4()
B.cX=new A.lX()
B.cY=new A.mG()
B.a8=new A.mY()
B.aK=new A.n7()
B.z=new A.F(0,0,0)
B.cZ=new A.F(0,64,255)
B.B=new A.F(0,64,39)
B.as=new A.F(110,32,13)
B.d=new A.F(125,119,128)
B.p=new A.F(125,144,179)
B.ag=new A.F(129,217,117)
B.K=new A.F(129,231,235)
B.A=new A.F(131,158,13)
B.k=new A.F(142,82,55)
B.a0=new A.F(15,130,148)
B.P=new A.F(173,88,219)
B.N=new A.F(179,74,4)
B.I=new A.F(189,144,108)
B.C=new A.F(193,181,199)
B.bH=new A.F(200,130,0)
B.d_=new A.F(201,166,255)
B.m=new A.F(204,35,57)
B.u=new A.F(208,195,214)
B.t=new A.F(20,19,31)
B.d0=new A.F(20,20,35)
B.D=new A.F(21,87,194)
B.bI=new A.F(220,0,0)
B.h=new A.F(222,156,33)
B.n=new A.F(22,117,38)
B.a5=new A.F(255,122,105)
B.E=new A.F(255,238,168)
B.aL=new A.F(255,255,255)
B.F=new A.F(26,46,150)
B.aw=new A.F(36,10,5)
B.d2=new A.F(40,40,55)
B.l=new A.F(41,45,66)
B.d3=new A.F(42,36,43)
B.d4=new A.F(51,48,28)
B.ao=new A.F(56,16,125)
B.J=new A.F(64,163,229)
B.d5=new A.F(6,49,79)
B.j=new A.F(72,64,74)
B.f=new A.F(72,82,115)
B.w=new A.F(77,29,21)
B.bJ=new A.F(80,80,95)
B.a1=new A.F(84,0,39)
B.O=new A.F(86,30,138)
B.af=new A.F(99,87,7)
B.at=new A.eH(0,"exit")
B.ax=new A.eH(1,"item")
B.r=new A.aA(0,0,0,"none")
B.L=new A.aA(0,1,5,"s")
B.M=new A.aA(0,-1,1,"n")
B.Q=new A.aA(1,0,3,"e")
B.R=new A.aA(1,1,4,"se")
B.S=new A.aA(1,-1,2,"ne")
B.T=new A.aA(-1,0,7,"w")
B.U=new A.aA(-1,1,6,"sw")
B.V=new A.aA(-1,-1,8,"nw")
B.b3=new A.dn("Archery")
B.ay=new A.dn("Body")
B.ah=new A.dn("Matter")
B.b4=new A.dn("Weaponry")
B.bK=new A.aL("awaken")
B.bL=new A.aL("bolt")
B.bM=new A.aL("cone")
B.bN=new A.aL("detect")
B.bO=new A.aL("die")
B.b5=new A.aL("frighten")
B.bP=new A.aL("gold")
B.bQ=new A.aL("heal")
B.bR=new A.aL("hit")
B.bS=new A.aL("howl")
B.bT=new A.aL("knockBack")
B.bU=new A.aL("map")
B.bV=new A.aL("openBarrel")
B.bW=new A.aL("perceive")
B.bX=new A.aL("polymorph")
B.bY=new A.aL("slash")
B.b6=new A.aL("spawn")
B.bZ=new A.aL("stab")
B.c_=new A.aL("teleport")
B.c0=new A.aL("toss")
B.c1=new A.aL("wind")
B.aM=new A.Y(32,B.aL,B.z)
B.hE=new A.km(0,"melee")
B.hF=new A.km(2,"toss")
B.H=new A.l("cancel")
B.hG=new A.l("castSpell")
B.b7=new A.l("drop")
B.ad=new A.l("e")
B.b8=new A.l("editSpells")
B.b9=new A.l("equip")
B.ba=new A.l("explore")
B.aN=new A.l("fire")
B.bb=new A.l("fireE")
B.bc=new A.l("fireN")
B.c5=new A.l("fireNE")
B.c6=new A.l("fireNW")
B.bd=new A.l("fireS")
B.c7=new A.l("fireSE")
B.c8=new A.l("fireSW")
B.be=new A.l("fireW")
B.bf=new A.l("forfeit")
B.aO=new A.l("help")
B.bg=new A.l("heroInfo")
B.bh=new A.l("inventory")
B.X=new A.l("n")
B.aA=new A.l("ne")
B.aB=new A.l("nw")
B.a2=new A.l("ok")
B.bi=new A.l("operate")
B.bj=new A.l("pickUp")
B.bk=new A.l("quit")
B.aC=new A.l("rest")
B.aP=new A.l("runE")
B.ap=new A.l("runN")
B.bl=new A.l("runNE")
B.bm=new A.l("runNW")
B.aq=new A.l("runS")
B.bn=new A.l("runSE")
B.bo=new A.l("runSW")
B.aQ=new A.l("runW")
B.Y=new A.l("s")
B.aD=new A.l("se")
B.bp=new A.l("spendExperience")
B.aE=new A.l("sw")
B.bq=new A.l("swap")
B.br=new A.l("toss")
B.bs=new A.l("use")
B.bt=new A.l("useAbility")
B.a9=new A.l("w")
B.c9=new A.l("wizard")
B.G=new A.c6("On Ground",0)
B.ca=new A.c6("Crucible",8)
B.Z=new A.c6("Equipment",0)
B.cb=new A.c6("Home",26)
B.v=new A.c6("Inventory",24)
B.cc=new A.hj(0,"normal")
B.hI=new A.hj(1,"good")
B.hJ=new A.hj(2,"great")
B.hM=new A.pL(null)
B.hN=new A.pM(null)
B.hO=s([2,12,22],t.t)
B.aF=s(["hand","hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.hP=s(["Return to main menu?"],t.s)
B.aR=s([9650,94],t.t)
B.jE=new A.bR(1,"n")
B.jF=new A.bR(2,"ne")
B.jG=new A.bR(3,"e")
B.jH=new A.bR(4,"se")
B.jI=new A.bR(5,"s")
B.jJ=new A.bR(6,"sw")
B.jK=new A.bR(7,"w")
B.jL=new A.bR(8,"nw")
B.hS=s([B.jE,B.jF,B.jG,B.jH,B.jI,B.jJ,B.jK,B.jL],t.hY)
B.ai=s(["Merek","Carac","Ulric","Tybalt","Borin","Sadon","Terrowin","Rowan","Forthwind","Althalos","Fendrel","Brom","Hadrian","Crewe","Bolbec","Fenwick","Mowbray","Drake","Bryce","Leofrick","Letholdus","Lief","Barda","Rulf","Robin","Gavin","Terrin","Jarin","Cedric","Gavin","Josef","Janshai","Doran","Asher","Quinn","Xalvador","Favian","Destrian","Dain","Millicent","Alys","Ayleth","Anastas","Alianor","Cedany","Ellyn","Helewys","Malkyn","Peronell","Thea","Gloriana","Arabella","Hildegard","Brunhild","Adelaide","Beatrix","Emeline","Mirabelle","Helena","Guinevere","Isolde","Maerwynn","Catrain","Gussalen","Enndolynn","Krea","Dimia","Aleida"],t.s)
B.ce=s([0,2,5,10,18,26,38],t.t)
B.cf=s(["_____ _____                 ____                     ____","\\ . / \\  ./                 \\ .|                     \\  |"," | |   |.|                   | |                      |.|"," |.|___| |  ____  ____ ____  |.| __     ____  ___  __ | |  ___"," |::___::|  \\:::\\ \\::| \\::|  |:|/::\\   /::::\\ \\::|/::\\|:| /::/"," |x|   |x|  __ \\x| |x|  |x|  |x|  \\x\\ |x|__)x| |x| \\x||x|/x/"," |x|   |x| /xx\\|x| |x|  |x|  |x|   |x||x|\\xxx| |x|    |xxxx\\"," |X|   |X||X(__|X| |X\\__|X|  |X|__/XX||X|____  |X|    |X| \\X\\"," |X|   |X| \\XXX/\\X\\ \\XX/|XX\\/XX/\\XXX/  \\XXXX/ /XXX\\  /XXX\\ \\X\\"," |X|   |X|","_|X|   |X|_","\\XX|   |XX/"," \\X|   |X/","  \\|   |/"],t.s)
B.bu=s([B.v,B.Z],t.hm)
B.x=new A.c_(0,"message")
B.a_=new A.c_(1,"error")
B.ic=new A.c_(2,"quest")
B.ck=new A.c_(3,"gain")
B.id=new A.c_(4,"help")
B.cl=new A.c_(5,"debug")
B.hU=s([B.x,B.a_,B.ic,B.ck,B.id,B.cl],A.at("t<c_>"))
B.hV=s(["Are you sure you want to forfeit the level?","You will lose all items and experience gained in the dungeon."],t.s)
B.hW=s(["LLLLL LLLLL                 LLLL                     LLLL","ERRRE ERRRE                 ERRE                     ERRE"," ERE   ERE                   ERE                      ERE"," ERELLLERE  LLLL  LLLL LLLL  ERE LL     LLLL  LLL  LL ERE  LLL"," ERREEERRE  ERRRE ERRE ERRE  EREERRL   LRRRRL ERRLLRRLERE LRRE"," EOE   EOE  LL EOE EOE  EOE  EOE  EOL EOELLEOE EOE EOEEOELOE"," EGE   EGE LGGEEGE EGE  EGE  EGE   EGEEGEEGGGE EGE    EGGGGL"," EYE   EYEEYELLEYE EYLLLEYE  EYELLLYYEEYELLLL  EYE    EYE EYL"," EYE   EYE EYYYEEYL EYYEEYYLLYYEEYYYE  EYYYYE LYYYL  LYYYL EYL"," EYE   EYE","EEYE   EYEE","EYYE   EYYE"," EYE   EYE","  EE   EE"],t.s)
B.bv=s(["Stairs","Permanent"],t.s)
B.hX=s(["Stairs descend into darkness.","How far down shall you venture?"],t.s)
B.cg=s([B.S,B.R,B.U,B.V],t.T)
B.i6=s([],t.bZ)
B.cj=s([],t.G)
B.i3=s([],t.x)
B.bw=s([],t.I)
B.ch=s([],t.hL)
B.i4=s([],A.at("t<ca<0&>>"))
B.i5=s([],A.at("t<bE<0&>>"))
B.i2=s([],t.s)
B.i1=s([],t.l)
B.ci=s([],t.lv)
B.i0=s([],t.mS)
B.i7=s([B.G],t.hm)
B.au=s([B.M,B.Q,B.L,B.T],t.T)
B.jU=new A.ae("","Items",null,0,!1)
B.k1=new A.ae("b","Inventory",B.bh,66,!1)
B.k2=new A.ae("u","Use item",B.bs,85,!1)
B.jY=new A.ae("e","Equip / unequip",B.b9,69,!1)
B.jX=new A.ae("d","Drop item",B.b7,68,!1)
B.ka=new A.ae("t","Throw item",B.br,84,!1)
B.jT=new A.ae("g","Pick up",B.bj,71,!1)
B.kb=new A.ae("x","Swap to last unequipped",B.bq,88,!1)
B.k0=new A.ae("","Actions",null,0,!1)
B.jW=new A.ae("Shift-H","Explore",B.ba,72,!0)
B.k7=new A.ae("q","Stairs: walk to / take exit",B.bk,81,!1)
B.k4=new A.ae("c","Operate door, chest",B.bi,67,!1)
B.k8=new A.ae("l","Rest one turn",B.a2,76,!1)
B.jV=new A.ae("Shift-L","Rest until healed",B.aC,76,!0)
B.kc=new A.ae("a","Use ability",B.bt,65,!1)
B.k5=new A.ae("Alt-L","Fire last ability",B.aN,0,!1)
B.jS=new A.ae("","Hero",null,0,!1)
B.jZ=new A.ae("Shift-A","Hero info",B.bg,65,!0)
B.k_=new A.ae("Shift-S","Abilities",B.b8,83,!0)
B.k9=new A.ae("Shift-E","Spend experience",B.bp,69,!0)
B.k3=new A.ae("","Game",null,0,!1)
B.k6=new A.ae("h","Help",B.aO,72,!1)
B.jR=new A.ae("Shift-F","Forfeit level",B.bf,70,!0)
B.i8=s([B.jU,B.k1,B.k2,B.jY,B.jX,B.ka,B.jT,B.kb,B.k0,B.jW,B.k7,B.k4,B.k8,B.jV,B.kc,B.k5,B.jS,B.jZ,B.k_,B.k9,B.k3,B.k6,B.jR],t.oW)
B.i9=s(["hand","ring","necklace","body","cloak","helm","gloves","boots"],t.s)
B.aS=s([15,20,24,30,40,50,60,80,100,120,150,180,240],t.t)
B.aT=s([B.l,B.f,B.p,B.u,B.I,B.k,B.as,B.w,B.E,B.h,B.N,B.ag,B.af,B.A,B.n,B.B,B.a5,B.m,B.a1,B.P,B.O,B.ao,B.K,B.J,B.D,B.F],t.bk)
B.d6=new A.aF(10,"Your luck protects you!")
B.ia=s([B.d6],t.x)
B.ib=s(["When you die, you lose everything since the last time you went up or down a set of stairs (or left a shop).","When you die, that's it. Your hero is gone forever. This is the most challenging way to play, but often the most rewarding as well."],t.s)
B.iL=new A.O(B.h,B.as)
B.iD=new A.O(B.E,B.N)
B.iy=new A.O(B.k,B.m)
B.iC=new A.O(B.m,B.w)
B.aU=s([B.iL,B.iD,B.iy,B.iC],A.at("t<+(F,F)>"))
B.ak=new A.cx("Strength",0,"strength")
B.ae=new A.cx("Agility",1,"agility")
B.ar=new A.cx("Vitality",2,"vitality")
B.a3=new A.cx("Intellect",3,"intellect")
B.aV=s([B.ak,B.ae,B.ar,B.a3],A.at("t<cx>"))
B.a6=s([B.M,B.S,B.Q,B.R,B.L,B.U,B.T,B.V],t.T)
B.ir={"Quick Reference":0,"Getting Started":1}
B.hr=new A.f(B.f,"Quick Reference")
B.c2=new A.f(B.f,"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550")
B.b=new A.f(B.d,"")
B.fp=new A.f(B.f,"Movement")
B.az=new A.f(B.f,"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")
B.eU=new A.f(B.d,"There are two sets of direction keys:")
B.di=new A.f(B.d,"They can be combined with modifier keys like so:")
B.d9=new A.f(B.f,"Other commands")
B.hT=s([B.hr,B.c2,B.b,B.b,B.fp,B.az,B.eU,B.b,B.di,B.b,B.b,B.b,B.d9,B.az],t.fJ)
B.e6=new A.f(B.f,"Getting Started")
B.fz=new A.f(B.d,"TODO: This is all horrendously out of date.")
B.eI=new A.f(B.d,"Welcome! If you are here, you must have an adventurous")
B.fd=new A.f(B.d,"spirit. Not only because you wish to venture into")
B.dW=new A.f(B.d,"dungeons filled with beasts and untolds horrors, but")
B.hy=new A.f(B.d,"because you have the fortitude to try out a game while")
B.fb=new A.f(B.d,"it's still under development. A caution for the unwary:")
B.dT=new A.f(B.d,"The game is not done, or balanced, or complete, or")
B.hk=new A.f(B.d,"bug-free. It may destroy your savefiles or steal your")
B.f_=new A.f(B.d,"boyfriend!")
B.hC=new A.f(B.f,"Input")
B.eL=new A.f(B.d,"Hauberk is played using your keyboard, the fixie of")
B.hc=new A.f(B.d,"input devices. A lot of input is directional. Arrow keys")
B.dS=new A.f(B.d,"work for that, but don't support diagonal moves.")
B.e_=new A.f(B.d,"Instead, you're better off hitting num lock and using")
B.h6=new A.f(B.d,"the numpad on your keyboard if you have one:")
B.c3=new A.f(B.d,".---.---.---.          .---.---.---.")
B.f1=new A.f(B.d,"| 7 | 8 | 9 |          | \\ | ^ | / |")
B.c4=new A.f(B.d,"|---+---+---|          |---+---+---|")
B.h4=new A.f(B.d,"| 4 | 5 | 6 | maps to: |<- |   | ->|")
B.eA=new A.f(B.d,"| 1 | 2 | 3 |          | / | v | \\ |")
B.e3=new A.f(B.d,"'---'---'---'          '---'---'---'")
B.fm=new A.f(B.d,"If you don't have a numpad, but do have a US layout")
B.e9=new A.f(B.d,"keyboard, you can also use:")
B.dR=new A.f(B.d,"| I | O | P |          | \\ | ^ | / |")
B.dr=new A.f(B.d,"'---+---+---+          '---+---+---+")
B.eS=new A.f(B.d," | K | L | ; | maps to: |<- |   | ->|")
B.eQ=new A.f(B.d," '---+---+---+          '---+---+---+")
B.fN=new A.f(B.d,"  | , | . | / |          | / | v | \\ |")
B.fW=new A.f(B.d,"  '---'---'---'          '---'---'---'")
B.fO=new A.f(B.d,'The 5 and L buttons in the middle are "stand". They\'re')
B.f6=new A.f(B.d,'also used like an "OK" button to accept a selection on')
B.dd=new A.f(B.d,"menu screens. Escape is used to go back in menu screens")
B.fX=new A.f(B.d,"and exit dialogs.")
B.et=new A.f(B.d,"(Note that all keys are shown uppercase here but are")
B.h5=new A.f(B.d,'typed lower case. L means a lowercase "l". An')
B.dA=new A.f(B.d,"uppercase one will be Shift-L.)")
B.fD=new A.f(B.d,"At some point, I plan to add support for user-defined")
B.fl=new A.f(B.d,"keybindings, but they aren't there yet.")
B.eZ=new A.f(B.f,"A Hero Awakens")
B.de=new A.f(B.d,"To play, you need an avatar in the game world to live")
B.dH=new A.f(B.d,"(and die!) vicariously through. On the Main Menu Screen,")
B.fc=new A.f(B.d,"type N to create a new hero (or heroine, the game is")
B.fE=new A.f(B.d,"gender-blind). Enter a name, or use the default")
B.ff=new A.f(B.d,"suggested one and hit Enter.")
B.fi=new A.f(B.d,"There isn't much to specify at character creation time")
B.eK=new A.f(B.d,"right now, but eventually you'll pick a class, race, pet")
B.e8=new A.f(B.d,"peeves, favorite sandwich, etc. Currently, warrior is")
B.fY=new A.f(B.d,"the only class.")
B.fh=new A.f(B.d,"Your hero is saved in your browser's local storage. This")
B.hA=new A.f(B.d,"means you can return to the game later and your hero")
B.dq=new A.f(B.d,"will still be there. If you switch browsers, though,")
B.he=new A.f(B.d,"your heroes won't be in the new browser. Heroes are")
B.hs=new A.f(B.d,"saved every time you leave a level, or exit your home.")
B.fG=new A.f(B.d,"The game is not saved while you're in the middle of a")
B.fa=new A.f(B.d,"level! If you close your browser in the middle of")
B.dB=new A.f(B.d,"playing because your boss walked in, your progress in")
B.ex=new A.f(B.d,"the level will be lost. That's what you get for slacking")
B.ek=new A.f(B.d,"off at work.")
B.hg=new A.f(B.d,"Because the game is still in active development, new")
B.hw=new A.f(B.d,"releases may not be savefile compatible with previous")
B.h7=new A.f(B.d,"ones. Your heroes may get deleted if they don't work")
B.dU=new A.f(B.d,"with the latest code. Sorry.")
B.eG=new A.f(B.f,"The hero screen")
B.fC=new A.f(B.d,"Once you create or choose a hero, you're taken to the")
B.hm=new A.f(B.d,'hero screen. This is sort of like the "town" in other')
B.dJ=new A.f(B.d,"games. It's the safe place where you can tinker with")
B.eB=new A.f(B.d,"your gear and enter the game.")
B.e0=new A.f(B.f,"Your home")
B.hh=new A.f(B.d,"From the hero screen, press H to enter your home. This")
B.fQ=new A.f(B.d,"gives you a place where you can stash loot you don't")
B.dZ=new A.f(B.d,"want to carry around. You can also move items between")
B.dh=new A.f(B.d,"your inventory (stuff you carry in your backpack) and")
B.dj=new A.f(B.d,"your equipment (weapons and armor you are currently")
B.eX=new A.f(B.d,"wearing or holding).")
B.dQ=new A.f(B.f,"The crucible")
B.ev=new A.f(B.d,"The most interesting facet of your home is the crucible.")
B.eY=new A.f(B.d,"This is the place where you can craft\u2014make new items")
B.eO=new A.f(B.d,"from existing ones. You place items into the crucible")
B.dy=new A.f(B.d,"just like you can your home or inventory. However, it")
B.eP=new A.f(B.d,"only allows items that are part of a recipe.")
B.eh=new A.f(B.d,"A recipe is a set of items that can be turned into")
B.d7=new A.f(B.d,"something else. When you place all of the required items")
B.fk=new A.f(B.d,"for a recipe in the crucible, it will tell you. Press")
B.dM=new A.f(B.d,"Space and it will magically transmute them into")
B.hx=new A.f(B.d,"something new.")
B.h1=new A.f(B.d,"The set of recipes is still highly in flux, but try")
B.dc=new A.f(B.d,"dropping a few healing potions in there.")
B.ho=new A.f(B.f,"The Dungeon Awaits")
B.fR=new A.f(B.d,"Now that your hero is alive and ready, it's time to slay")
B.eH=new A.f(B.d,"some beasts.")
B.fg=new A.f(B.f,"Areas and levels")
B.ec=new A.f(B.d,"Unlike other roguelikes, Hauberk doesn't have a single")
B.hn=new A.f(B.d,"monolithic dungeon. Instead, there are a number of")
B.h0=new A.f(B.d,'areas. Each area has its own "flavor"\u2014it\'s own kinds')
B.fw=new A.f(B.d,"of monsters, difficulty, appearance, etc. An area is in")
B.eV=new A.f(B.d,"turn divided into a series of levels, each more")
B.dL=new A.f(B.d,"difficult than the last.")
B.du=new A.f(B.d,"From the hero screen, you can select which area and")
B.ez=new A.f(B.d,"level you want to play. You can only enter an area if")
B.fL=new A.f(B.d,"you've beaten at least one level from the previous area.")
B.dV=new A.f(B.d,"Likewise, you must beat a level to unlock the next one.")
B.ey=new A.f(B.d,"Since you just created a hero, you can only play the")
B.dC=new A.f(B.d,"first level of the Friendly Forest, so just type L to")
B.fn=new A.f(B.d,"enter it. Later, when you unlock stuff, use the")
B.hD=new A.f(B.d,"directional keys to select an area and level. You can")
B.hb=new A.f(B.d,"replay a level as many times as you want.")
B.ea=new A.f(B.f,"Quests, victory, and defeat")
B.f5=new A.f(B.d,"Every level is randomly generated (of course) and")
B.fr=new A.f(B.d,"populated with monsters and treasure. Each level also")
B.fT=new A.f(B.d,"has a quest. This is a goal you must fulfill before")
B.dE=new A.f(B.d,"you're allowed to leave the level. After completing the")
B.f8=new A.f(B.d,"quest, type Q to leave the level and return to the")
B.e7=new A.f(B.d,"safety of your home. All experience and items gained in")
B.dt=new A.f(B.d,"the level will be saved henceforth and forever more.")
B.eo=new A.f(B.d,"If you die in the level, you lose everything you gained")
B.eD=new A.f(B.d,"while in that level. It isn't quite permadeath, but it's")
B.ed=new A.f(B.d,"pretty damn annoying to lose that experience and")
B.dl=new A.f(B.d,"whatever hot loot you picked up.")
B.h8=new A.f(B.d,"If you want to give up and leave the level before")
B.dY=new A.f(B.d,"completing the quest, you can forfeit by typing Shift-F.")
B.fo=new A.f(B.d,"Like dying, doing this sacrifices anything you've gained")
B.ei=new A.f(B.d,"since entering the level.")
B.dK=new A.f(B.f,"Navigating the level")
B.es=new A.f(B.d,"Your avatar in the game is represented by a @. Floor")
B.da=new A.f(B.d,"tiles are usually ., and impassible barriers and walls")
B.hi=new A.f(B.d,"look like #, or other hopefully obvious solid looking")
B.f7=new A.f(B.d,"tiles.")
B.ht=new A.f(B.d,"You walk around using the directional keys. Pressing the")
B.er=new A.f(B.d,"stand key (5 or L) makes you stand still for a turn.")
B.d8=new A.f(B.d,"That's useful to let a monster take a step closer so you")
B.eE=new A.f(B.d,"can attack the next turn.")
B.ha=new A.f(B.d,"Hold down Shift and press a direction to run in that")
B.dN=new A.f(B.d,"direction. You will repeatedly walk in that direction")
B.ej=new A.f(B.d,"until disturbed by reaching an obstacle, a fork in the")
B.f4=new A.f(B.d,"path, or seeing a monster. When not in combat, running")
B.eC=new A.f(B.d,"is the most user-friendly way to get from point A to")
B.dO=new A.f(B.d,"point B.")
B.f2=new A.f(B.d,"Closed doors look like +. You can open them (which takes")
B.db=new A.f(B.d,"a turn) by simply walking into them. An open door looks")
B.dg=new A.f(B.d,"like -. You can close a door by pressing C while")
B.hz=new A.f(B.d,"standing next to one.")
B.h2=new A.f(B.f,"Combat!")
B.en=new A.f(B.d,"Monsters in the game are represented using letters. You")
B.ee=new A.f(B.d,"attack by trying to walk into the tile where a monster")
B.hj=new A.f(B.d,"is standing. On the right side of the screen you can see")
B.fx=new A.f(B.d,"your health along with some of the nearby monsters. Try")
B.fH=new A.f(B.d,"to get theirs to zero before yours does!")
B.fB=new A.f(B.d,"When you kill a monster, you are granted some experience")
B.fS=new A.f(B.d,"points. Earn enough of those, and your hero will")
B.dX=new A.f(B.d,"increase in experience level. That increases your")
B.h9=new A.f(B.d,"maximum health and does some other good stuff.")
B.ft=new A.f(B.d,"Meanwhile, monsters will be attacking you. You are")
B.eT=new A.f(B.d,"outnumbered, so try not to let them surround you.")
B.dP=new A.f(B.d,"Attacking from the safety of a narrow corridor helps.")
B.dm=new A.f(B.f,"Exploring")
B.em=new A.f(B.d,"Shift-H explores: the hero walks to the nearest unexplored")
B.hq=new A.f(B.d,"spot, one step per turn, opening doors on the way. It")
B.fM=new A.f(B.d,"stops when a monster or a new item comes into view, on")
B.dz=new A.f(B.d,"any new message, or when you press a key.")
B.hB=new A.f(B.d,"Q on the stairs leaves the level. Anywhere else, Q walks")
B.dx=new A.f(B.d,"to the nearest known stairs (in town: the dungeon")
B.e1=new A.f(B.d,"entrance) and stops there; press Q again to take them.")
B.eb=new A.f(B.f,"Resting")
B.hd=new A.f(B.d,"After a skirmish, your hero has likely lost some health.")
B.dF=new A.f(B.d,"That can be regained by imbibing magic potions, but")
B.fF=new A.f(B.d,"those are in short supply. Instead, they'll have to")
B.e5=new A.f(B.d,"rest.")
B.fP=new A.f(B.d,"Resting requires food, which you automatically discover")
B.fA=new A.f(B.d,"as you explore the level. Every turn that you stand")
B.fu=new A.f(B.d,"still consumes a bit of food and regains a point of")
B.fV=new A.f(B.d,"health. Instead of mashing down the stand key, if you")
B.eM=new A.f(B.d,"press Shift-Stand, you will repeatedly rest until you")
B.dn=new A.f(B.d,"run out of food, fully regain their health, or are")
B.fv=new A.f(B.d,"disturbed by a nearby monster.")
B.h3=new A.f(B.d,"If you don't have any food, resting accomplishes")
B.fe=new A.f(B.d,"nothing. To get food, you must explore new parts of the")
B.dG=new A.f(B.d,"level. No resting on your laurels or wandering through")
B.f0=new A.f(B.d,"familiar passages!")
B.fj=new A.f(B.f,"Loot!")
B.eg=new A.f(B.d,"While the ridding the world of an evil beast is its own")
B.dp=new A.f(B.d,"reward, it's not the only reward. Many monsters drop")
B.df=new A.f(B.d,"treasure, and you'll find some laying on the ground as")
B.el=new A.f(B.d,"well. Different levels and monsters tend to drop")
B.hp=new A.f(B.d,"different stuff, so explore (and murder) widely.")
B.eW=new A.f(B.d,"Items are represented using punctuation characters.")
B.hu=new A.f(B.d,"Potions are !, scrolls are ?, etc. You can pick up an")
B.fZ=new A.f(B.d,"item off the ground by standing on top of it and")
B.dw=new A.f(B.d,'pressing G, for "get".')
B.f9=new A.f(B.d,"If there are multiple items in the same tile, that picks")
B.eF=new A.f(B.d,"up the top one. Press G repeatedly to pick them all up.")
B.hv=new A.f(B.d,"Eventually, I'll add a menu to let you pick which one")
B.fJ=new A.f(B.d,"you want.")
B.dD=new A.f(B.d,"Many items can be used. Potions can be quaffed, scrolls")
B.e4=new A.f(B.d,"read, wands... uh... waved around? To use an item, press")
B.fq=new A.f(B.d,"U to bring up the item selection screen. In addition to")
B.fU=new A.f(B.d,"your inventory and equipment, you can also use items")
B.fI=new A.f(B.d,"that are laying on the ground under you. You don't have")
B.eu=new A.f(B.d,"to pick them up first. (And not picking them up first")
B.ef=new A.f(B.d,"saves you a turn. Useful in the heat of battle!)")
B.ds=new A.f(B.d,"Pressing Tab on the item screen cycles through these")
B.eJ=new A.f(B.d,"three views.")
B.eN=new A.f(B.d,"Type the letter next to an item to use it. If the item")
B.fK=new A.f(B.d,'has an active "use" like a potion, this will perform')
B.eR=new A.f(B.d,'it. "Using" a piece of equipment equips it. Using a')
B.h_=new A.f(B.d,"piece of equipment that you're already wearing unequips")
B.eq=new A.f(B.d,"it. Remember that equipment must be worn to get any")
B.hl=new A.f(B.d,"advantage! Carrying around a sword in your backpack")
B.dI=new A.f(B.d,"doesn't do you much good.")
B.fs=new A.f(B.d,"If you want to discard an item, press D, then select the")
B.dv=new A.f(B.d,"item. It will drop onto the ground. It may gaze back at")
B.ep=new A.f(B.d,"you forlornly, wondering why it wasn't good enough and")
B.hf=new A.f(B.d,"why you love the other items in your inventory more.")
B.e2=new A.f(B.d,"A more entertaining and often more useful way to rid")
B.f3=new A.f(B.d,"yourself of an item is to throw it, which is done by")
B.fy=new A.f(B.d,"pressing T. Throwing an item at a monster will often")
B.dk=new A.f(B.d,"harm it, and some items do fun and exciting things like")
B.ew=new A.f(B.d,"explode when lobbed at an unsuspecting beastie.")
B.hR=s([B.e6,B.c2,B.fz,B.b,B.b,B.b,B.eI,B.b,B.fd,B.b,B.dW,B.b,B.hy,B.b,B.fb,B.b,B.dT,B.b,B.hk,B.b,B.f_,B.b,B.b,B.b,B.hC,B.az,B.eL,B.b,B.hc,B.b,B.dS,B.b,B.e_,B.b,B.h6,B.b,B.b,B.b,B.c3,B.f1,B.c4,B.h4,B.c4,B.eA,B.e3,B.b,B.b,B.fm,B.b,B.e9,B.b,B.b,B.b,B.c3,B.dR,B.dr,B.eS,B.eQ,B.fN,B.fW,B.b,B.b,B.fO,B.b,B.f6,B.b,B.dd,B.b,B.fX,B.b,B.b,B.b,B.et,B.b,B.h5,B.b,B.dA,B.b,B.b,B.b,B.fD,B.b,B.fl,B.b,B.b,B.b,B.eZ,B.az,B.de,B.b,B.dH,B.b,B.fc,B.b,B.fE,B.b,B.ff,B.b,B.b,B.b,B.fi,B.b,B.eK,B.b,B.e8,B.b,B.fY,B.b,B.b,B.b,B.fh,B.b,B.hA,B.b,B.dq,B.b,B.he,B.b,B.hs,B.b,B.b,B.b,B.fG,B.b,B.fa,B.b,B.dB,B.b,B.ex,B.b,B.ek,B.b,B.b,B.b,B.hg,B.b,B.hw,B.b,B.h7,B.b,B.dU,B.b,B.b,B.b,B.eG,B.b,B.fC,B.b,B.hm,B.b,B.dJ,B.b,B.eB,B.b,B.b,B.b,B.e0,B.b,B.hh,B.b,B.fQ,B.b,B.dZ,B.b,B.dh,B.b,B.dj,B.b,B.eX,B.b,B.b,B.b,B.dQ,B.b,B.ev,B.b,B.eY,B.b,B.eO,B.b,B.dy,B.b,B.eP,B.b,B.b,B.b,B.eh,B.b,B.d7,B.b,B.fk,B.b,B.dM,B.b,B.hx,B.b,B.b,B.b,B.h1,B.b,B.dc,B.b,B.b,B.b,B.ho,B.az,B.fR,B.b,B.eH,B.b,B.b,B.b,B.fg,B.b,B.ec,B.b,B.hn,B.b,B.h0,B.b,B.fw,B.b,B.eV,B.b,B.dL,B.b,B.b,B.b,B.du,B.b,B.ez,B.b,B.fL,B.b,B.dV,B.b,B.b,B.b,B.ey,B.b,B.dC,B.b,B.fn,B.b,B.hD,B.b,B.hb,B.b,B.b,B.b,B.ea,B.b,B.f5,B.b,B.fr,B.b,B.fT,B.b,B.dE,B.b,B.f8,B.b,B.e7,B.b,B.dt,B.b,B.b,B.b,B.eo,B.b,B.eD,B.b,B.ed,B.b,B.dl,B.b,B.b,B.b,B.h8,B.b,B.dY,B.b,B.fo,B.b,B.ei,B.b,B.b,B.b,B.dK,B.b,B.es,B.b,B.da,B.b,B.hi,B.b,B.f7,B.b,B.b,B.b,B.ht,B.b,B.er,B.b,B.d8,B.b,B.eE,B.b,B.b,B.b,B.ha,B.b,B.dN,B.b,B.ej,B.b,B.f4,B.b,B.eC,B.b,B.dO,B.b,B.b,B.b,B.f2,B.b,B.db,B.b,B.dg,B.b,B.hz,B.b,B.b,B.b,B.h2,B.b,B.en,B.b,B.ee,B.b,B.hj,B.b,B.fx,B.b,B.fH,B.b,B.b,B.b,B.fB,B.b,B.fS,B.b,B.dX,B.b,B.h9,B.b,B.b,B.b,B.ft,B.b,B.eT,B.b,B.dP,B.b,B.b,B.b,B.dm,B.b,B.em,B.b,B.hq,B.b,B.fM,B.b,B.dz,B.b,B.hB,B.b,B.dx,B.b,B.e1,B.b,B.b,B.b,B.eb,B.b,B.hd,B.b,B.dF,B.b,B.fF,B.b,B.e5,B.b,B.b,B.b,B.fP,B.b,B.fA,B.b,B.fu,B.b,B.fV,B.b,B.eM,B.b,B.dn,B.b,B.fv,B.b,B.b,B.b,B.h3,B.b,B.fe,B.b,B.dG,B.b,B.f0,B.b,B.b,B.b,B.fj,B.b,B.eg,B.b,B.dp,B.b,B.df,B.b,B.el,B.b,B.hp,B.b,B.b,B.b,B.eW,B.b,B.hu,B.b,B.fZ,B.b,B.dw,B.b,B.b,B.b,B.f9,B.b,B.eF,B.b,B.hv,B.b,B.fJ,B.b,B.b,B.b,B.dD,B.b,B.e4,B.b,B.fq,B.b,B.fU,B.b,B.fI,B.b,B.eu,B.b,B.ef,B.b,B.ds,B.b,B.eJ,B.b,B.b,B.b,B.eN,B.b,B.fK,B.b,B.eR,B.b,B.h_,B.b,B.eq,B.b,B.hl,B.b,B.dI,B.b,B.b,B.b,B.fs,B.b,B.dv,B.b,B.ep,B.b,B.hf,B.b,B.b,B.b,B.e2,B.b,B.f3,B.b,B.fy,B.b,B.dk,B.b,B.ew,B.b],t.fJ)
B.aW=new A.bk(B.ir,[B.hT,B.hR],A.at("bk<q,C<f>>"))
B.il={Y:0,N:1,"`":2}
B.cm=new A.bk(B.il,["Yes","No","No"],t.p1)
B.aG=new A.e1(0,"clumsy")
B.aa=new A.e1(1,"insult")
B.cq=new A.e1(2,"screech")
B.cr=new A.e1(3,"hiss")
B.i_=s(["{1} forget[s] what {1 he} was doing.","{1} lurch[es] around.","{1} stumble[s] awkwardly.","{1} trip[s] over {1 his} own feet!"],t.s)
B.hZ=s(["{1} insult[s] {2 his} mother!","{1} jeer[s] at {2}!","{1} mock[s] {2} mercilessly!","{1} make[s] faces at {2}!","{1} laugh[s] at {2}!","{1} sneer[s] at {2}!"],t.s)
B.hQ=s(["{1} screech[es] at {2}!","{1} taunt[s] {2}!","{1} cackle[s] at {2}!"],t.s)
B.hY=s(["{1} hiss[es] at {2}!","{1} spit[s] at {2}!"],t.s)
B.ie=new A.dX([B.aG,B.i_,B.aa,B.hZ,B.cq,B.hQ,B.cr,B.hY],A.at("dX<e1,C<q>>"))
B.iu={"little brown spider":0,"gray spider":1,spiderling:2,"giant spider":3,"brown bat":4,"giant bat":5,"cave bat":6,"mangy cur":7,"wild dog":8,mongrel:9,wolf:10,varg:11,Skoll:12,Hati:13,Fenrir:14,"juvenile forest dragon":15,"juvenile brown dragon":16,"juvenile blue dragon":17,"juvenile white dragon":18,"juvenile purple dragon":19,"juvenile green dragon":20,"juvenile silver dragon":21,"juvenile red dragon":22,"juvenile gold dragon":23,"juvenile black dragon":24,"juvenile ethereal dragon":25,"forest dragon":26,"brown dragon":27,"blue dragon":28,"white dragon":29,"purple dragon":30,"green dragon":31,"silver dragon":32,"red dragon":33,"gold dragon":34,"black dragon":35,"ethereal dragon":36,"lazy eye":37,"mad eye":38,"floating eye":39,"baleful eye":40,"malevolent eye":41,"murderous eye":42,watcher:43,"stray cat":44,"goblin peon":45,"goblin archer":46,"goblin fighter":47,"goblin warrior":48,"goblin mage":49,"goblin ranger":50,"Erlkonig, the Goblin Prince":51,"giant cockroach":52,"giant centipede":53,firefly:54,"green jelly":55,"green slime":56,"frosty slime":57,"mud slime":58,"smoking slime":59,"sparkling slime":60,"caustic slime":61,"virulent slime":62,ectoplasm:63,"scurrilous imp":64,"vexing imp":65,kobold:66,"kobold shaman":67,"kobold trickster":68,"kobold priest":69,"imp incanter":70,"imp warlock":71,Feng:72,"lizard guard":73,"lizard protector":74,"armored lizard":75,"scaled guardian":76,saurian:77,orc:78,"orc brute":79,"orc soldier":80,"orc chieftain":81,"Harold the Misfortunate":82,"hapless adventurer":83,"simpering knave":84,"decrepit mage":85,"unlucky ranger":86,"drunken priest":87,mouse:88,"sewer rat":89,"sickly rat":90,"plague rat":91,"giant rat":92,"The Rat King":93,"giant slug":94,"suppurating slug":95,"acidic slug":96,choker:97,nightshade:98,creeper:99,strangler:100,"blood worm":101,"fire worm":102,"giant earthworm":103,"giant cave worm":104,"bony hand":105,"bony arm":106,"severed skull":107,"decapitated skeleton":108,"armless skeleton":109,"one-armed skeleton":110,skeleton:111,"skeleton warrior":112,"robed skeleton":113,crow:114,raven:115,"elder forest dragon":116,"elder brown dragon":117,"elder blue dragon":118,"elder white dragon":119,"elder purple dragon":120,"elder green dragon":121,"elder silver dragon":122,"elder red dragon":123,"elder gold dragon":124,"elder black dragon":125,"elder ethereal dragon":126,"ancient forest dragon":127,"ancient brown dragon":128,"ancient blue dragon":129,"ancient white dragon":130,"ancient purple dragon":131,"ancient green dragon":132,"ancient silver dragon":133,"ancient red dragon":134,"ancient gold dragon":135,"ancient black dragon":136,"ancient ethereal dragon":137,"forest sprite":138,"house sprite":139,"mischievous sprite":140,Tink:141,harpy:142,griffin:143,"Nameless Unmaker":144,frog:145,"juvenile salamander":146,salamander:147,"three-headed salamander":148,"water snake":149,"brown snake":150,"cave snake":151}
B.cn=new A.bk(B.iu,[161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,198,199,200,200,199,201,202,203,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,187,188,189,190,191,192,193,194,195,196,197,187,188,189,190,191,192,193,194,195,196,197,272,273,274,275,276,277,278,279,280,281,282,283,284,285],t.cq)
B.im={L:0,E:1,R:2,O:3,G:4,Y:5}
B.d1=new A.F(232,200,21)
B.ig=new A.bk(B.im,[B.d,B.j,B.m,B.N,B.h,B.d1],A.at("bk<q,F>"))
B.ih=new A.dX([9786,1,9787,2,9829,3,9830,4,9827,5,9824,6,8226,7,9688,8,9675,9,9689,10,9794,11,9792,12,9834,13,9835,14,9788,15,9658,16,9668,17,8597,18,8252,19,182,20,167,21,9644,22,8616,23,8593,24,8595,25,8594,26,8592,27,8735,28,8596,29,9650,30,9660,31,8962,127,199,128,252,129,233,130,226,131,228,132,224,133,229,134,231,135,234,136,235,137,232,138,239,139,238,140,236,141,196,142,197,143,201,144,230,145,198,146,244,147,246,148,242,149,251,150,249,151,255,152,214,153,220,154,162,155,163,156,165,157,8359,158,402,159,225,160,237,161,243,162,250,163,241,164,209,165,170,166,186,167,191,168,8976,169,172,170,189,171,188,172,161,173,171,174,187,175,9617,176,9618,177,9619,178,9474,179,9508,180,9569,181,9570,182,9558,183,9557,184,9571,185,9553,186,9559,187,9565,188,9564,189,9563,190,9488,191,9492,192,9524,193,9516,194,9500,195,9472,196,9532,197,9566,198,9567,199,9562,200,9556,201,9577,202,9574,203,9568,204,9552,205,9580,206,9575,207,9576,208,9572,209,9573,210,9561,211,9560,212,9554,213,9555,214,9579,215,9578,216,9496,217,9484,218,9608,219,9604,220,9612,221,9616,222,9600,223,945,224,223,225,915,226,960,227,931,228,963,229,181,230,964,231,934,232,920,233,937,234,948,235,8734,236,966,237,949,238,8745,239,8801,240,177,241,8805,242,8804,243,8992,244,8993,245,247,246,8776,247,176,248,8729,249,183,250,8730,251,8319,252,178,253,9632,254],A.at("dX<d,d>"))
B.io={}
B.co=new A.bk(B.io,[],t.p1)
B.iq={Fae:0,Dwarf:1,Elf:2,Gnome:3,Human:4}
B.ii=new A.bk(B.iq,[441,442,443,444,445],t.cq)
B.ip={Rock:0,Skull:1,"Copper Coin":2,"Bronze Coin":3,"Silver Coin":4,"Electrum Coin":5,"Gold Coin":6,"Platinum Coin":7,"Copper Bar":8,"Bronze Bar":9,"Silver Bar":10,"Electrum Bar":11,"Gold Bar":12,"Platinum Bar":13,"Amethyst Shard":14,"Uncut Amethyst":15,"Faceted Amethyst":16,"Sapphire Shard":17,"Uncut Sapphire":18,"Faceted Sapphire":19,"Emerald Shard":20,"Uncut Emerald":21,"Faceted Emerald":22,"Ruby Shard":23,"Uncut Ruby":24,"Faceted Ruby":25,"Diamond Shard":26,"Uncut Diamond":27,"Faceted Diamond":28,"Insect Wing":29,Feather:30,"Stale Biscuit":31,"Loaf of Bread":32,"Chunk of Meat":33,"Piece of Jerky":34,"Tallow Candle":35,"Wax Candle":36,"Oil Lamp":37,Torch:38,Lantern:39,"Soothing Balm":40,"Mending Salve":41,"Healing Poultice":42,"Potion of Amelioration":43,"Potion of Rejuvenation":44,Antidote:45,"Salve of Heat Resistance":46,"Salve of Cold Resistance":47,"Salve of Light Resistance":48,"Salve of Wind Resistance":49,"Salve of Lightning Resistance":50,"Salve of Darkness Resistance":51,"Salve of Earth Resistance":52,"Salve of Water Resistance":53,"Salve of Acid Resistance":54,"Salve of Poison Resistance":55,"Salve of Death Resistance":56,"Potion of Quickness":57,"Potion of Alacrity":58,"Potion of Speed":59,"Bottled Wind":60,"Bottled Ice":61,"Bottled Fire":62,"Bottled Ocean":63,"Bottled Poison":64,"Bottled Earth":65,"Bottled Lightning":66,"Bottled Acid":67,"Bottled Shadow":68,"Bottled Radiance":69,"Bottled Spirit":70,"Scroll of Sidestepping":71,"Scroll of Phasing":72,"Scroll of Teleportation":73,"Scroll of Disappearing":74,"Scroll of Find Nearby Escape":75,"Scroll of Locate Escape":76,"Scroll of Find Nearby Items":77,"Scroll of Item Detection":78,"Scroll of Detect Nearby":79,"Scroll of Detection":80,"Scroll of Sense Nearby Monsters":81,"Scroll of Sense Monsters":82,"Scroll of Perceive Monsters":83,"Scroll of Telepathy":84,"Adventurer's Map":85,"Explorer's Map":86,"Cartographer's Map":87,"Wizard's Map":88,"Ring of Wisdom":89,Stick:90,Cudgel:91,Club:92,"Walking Stick":93,Staff:94,Quarterstaff:95,Hammer:96,Mattock:97,"War Hammer":98,Morningstar:99,Mace:100,Whip:101,"Chain Whip":102,Flail:103,Knife:104,Dagger:105,Dirk:106,Stiletto:107,Rondel:108,Baselard:109,Mercygiver:110,Rapier:111,Shortsword:112,Scimitar:113,Cutlass:114,Falchion:115,"Pointed Stick":116,Spear:117,Angon:118,Lance:119,Partisan:120,Hatchet:121,Axe:122,Valaska:123,Battleaxe:124,"Short Bow":125,Longbow:126,Crossbow:127,"Leather Cap":128,"Chainmail Coif":129,"Steel Cap":130,"Visored Helm":131,"Great Helm":132,Robe:133,"Lined Robe":134,"Cloth Shirt":135,"Leather Shirt":136,Jerkin:137,"Leather Armor":138,"Padded Armor":139,"Studded Armor":140,"Mail Hauberk":141,"Scale Mail":142,"Plated Mail":143,Brigandine:144,Breastplate:145,"Plate Armor":146,Cloak:147,"Fur Cloak":148,"Spidersilk Cloak":149,Gloves:150,Bracers:151,Gauntlets:152,Buckler:153,"Leather Shield":154,Targe:155,Roundel:156,"Steel Shield":157,"Kite Shield":158,"Lantern Shield":159,Sandals:160,Shoes:161,Boots:162,"Plated Boots":163,Greaves:164}
B.cp=new A.bk(B.ip,[286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,300,301,302,302,303,304,304,305,306,306,307,308,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,372,373,373,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,399,400,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440],t.cq)
B.is={"A-Z Del":0}
B.ij=new A.bk(B.is,["Edit name"],t.p1)
B.it={OK:0,"\u2195\u2194":1,"`":2}
B.ik=new A.bk(B.it,["Enter dungeon","Change depth","Cancel"],t.p1)
B.W=new A.hE(0,"normal")
B.cs=new A.hE(1,"proper")
B.aH=new A.hE(3,"mass")
B.cu=new A.e3("you","you","your",0,"you")
B.aI=new A.e3("he","him","his",2,"he")
B.iv=new A.e3("they","them","their",4,"they")
B.cv=new A.e3("she","her","her",1,"she")
B.y=new A.e3("it","it","its",3,"it")
B.cw=new A.O(10,15)
B.cx=new A.O(16,21)
B.iw=new A.O("spear","Spear Mastery")
B.ix=new A.O(1,1)
B.iz=new A.O(5,8)
B.cy=new A.O(6,9)
B.iA=new A.O(7,10)
B.iB=new A.O(9,16)
B.iE=new A.O(0.002,0.8)
B.iF=new A.O("whip","Whip Mastery")
B.iG=new A.O("Name","Enter a name for your new hero.")
B.iH=new A.O(B.C,B.d)
B.iI=new A.O(B.j,B.j)
B.iJ=new A.O("dagger","Knife Fighting")
B.iK=new A.O("club","Bludgeoning")
B.iM=new A.O("axe","Axe Mastery")
B.iN=new A.O("You haven't learned this skill.",B.j)
B.iO=new A.O(B.h,B.C)
B.iP=new A.O("sword","Swordfighting")
B.iQ=new A.O(0.1,1)
B.cz=new A.K(0,0,0)
B.cA=new A.K(0,0,446)
B.cB=new A.K(0,0,447)
B.iR=new A.K(0,0,457)
B.iS=new A.K(0,0,458)
B.bx=new A.K(0,17,0)
B.iT=new A.K(0,33,0)
B.iU=new A.K(0,33,470)
B.iV=new A.K(0,49,0)
B.iW=new A.K(0,65,0)
B.iX=new A.K(113,0,0)
B.iY=new A.K(129,0,0)
B.iZ=new A.K(129,0,459)
B.j_=new A.K(129,0,481)
B.j0=new A.K(129,0,482)
B.j1=new A.K(129,0,483)
B.j2=new A.K(129,0,484)
B.j3=new A.K(129,0,485)
B.j4=new A.K(129,0,486)
B.j5=new A.K(129,0,487)
B.j6=new A.K(129,0,488)
B.by=new A.K(129,0,489)
B.j7=new A.K(145,0,0)
B.j8=new A.K(145,0,460)
B.j9=new A.K(145,0,461)
B.ja=new A.K(145,0,462)
B.jb=new A.K(145,0,463)
B.aJ=new A.K(1,0,0)
B.jc=new A.K(1,0,448)
B.jd=new A.K(1,0,449)
B.je=new A.K(1,0,450)
B.jf=new A.K(1,0,451)
B.jg=new A.K(1,0,452)
B.jh=new A.K(1,0,453)
B.ji=new A.K(1,0,455)
B.jj=new A.K(1,0,456)
B.jk=new A.K(1,0,464)
B.jl=new A.K(1,0,465)
B.jm=new A.K(1,0,466)
B.jn=new A.K(1,0,467)
B.ab=new A.K(1,0,468)
B.jo=new A.K(1,0,469)
B.jp=new A.K(1,0,471)
B.jq=new A.K(1,0,472)
B.jr=new A.K(1,0,473)
B.js=new A.K(1,0,474)
B.jt=new A.K(1,0,475)
B.ju=new A.K(1,0,476)
B.jv=new A.K(1,0,477)
B.jw=new A.K(1,0,478)
B.jx=new A.K(1,0,479)
B.jy=new A.K(1,0,480)
B.jz=new A.K(81,0,0)
B.jA=new A.K(97,0,0)
B.jB=new A.K(97,0,454)
B.jC=new A.X(["i",73,"Inspect",null])
B.al=new A.e(0,0)
B.jD=new A.a0(B.al,B.al)
B.cC=new A.bR(0,"everywhere")
B.bz=new A.hR(0,"rectangular")
B.jM=new A.hR(1,"octagonal")
B.jN=new A.hR(2,"any")
B.jO=new A.hS(0,"small")
B.jP=new A.hS(1,"medium")
B.jQ=new A.hS(2,"large")
B.kd=new A.fk(0,"anywhere")
B.aj=new A.fk(1,"open")
B.aX=new A.fk(2,"wall")
B.bA=new A.fk(3,"corner")
B.ke=new A.dz(0,"none")
B.ac=new A.dz(1,"mirrorHorizontal")
B.kf=new A.dz(2,"mirrorVertical")
B.av=new A.dz(3,"mirrorBoth")
B.q=new A.dz(4,"rotate90")
B.kg=new A.dz(5,"rotate180")
B.kh=new A.rP(1,"oldest")
B.cI=new A.bG("shop 1")
B.cH=new A.bG("shop 2")
B.cG=new A.bG("shop 3")
B.cF=new A.bG("shop 4")
B.cE=new A.bG("shop 5")
B.cD=new A.bG("shop 6")
B.cL=new A.bG("shop 7")
B.cK=new A.bG("shop 8")
B.cJ=new A.bG("shop 9")
B.bB=new A.bG("dungeon")
B.aY=new A.bG("exit")
B.cM=new A.bG("home")
B.ki=A.ch("uU")
B.kj=A.ch("uV")
B.kk=A.ch("oG")
B.kl=A.ch("oH")
B.km=A.ch("p4")
B.kn=A.ch("p5")
B.ko=A.ch("p6")
B.kp=A.ch("P")
B.kq=A.ch("t0")
B.kr=A.ch("t1")
B.ks=A.ch("t2")
B.kt=A.ch("t3")
B.aZ=new A.e(0,1)
B.b_=new A.e(0,-1)
B.b0=new A.e(1,0)
B.b1=new A.e(-1,0)
B.cN=new A.fq(0,"uninitialized")
B.bD=new A.fq(1,"stats")
B.cO=new A.fq(2,"resistances")
B.cP=new A.fq(3,"all")})();(function staticFields(){$.tu=null
$.bX=A.a([],t.w)
$.xc=null
$.qE=0
$.v6=A.Bz()
$.wE=null
$.wD=null
$.yi=null
$.ya=null
$.yr=null
$.u1=null
$.ua=null
$.vC=null
$.tB=A.a([],A.at("t<C<P>?>"))
$.fC=null
$.iQ=null
$.iR=null
$.vu=!1
$.aT=B.a8
$.cD=null
$.xS=null
$.cC=A.eb()
$.cf=null
$.BC=A.a(["\u250c\u2510","\u255b\u2558","\u255e\u2561"],t.s)
$.BD=A.a(["\u250c\u2558","\u2510\u255b","\u2500\u2550"],t.s)
$.BN=A.a(["\u250c\u2510\u255b\u2558","\u2500\u2502\u2550\u2502"],t.s)
$.b_=A.eb()
$.h=null
$.bh=null
$.iP=null
$.wW=0
$.wx=0
$.hN=A.a([],A.at("t<ln>"))
$.hY=A.D(t.N,t.c3)
$.ce=null
$.ak=A.eb()
$.nV=!1
$.nW=!1
$.uX=!1
$.jP=A.D(t.B,A.at("fu"))
$.nQ=null
$.bm=0
$.ey=A.a([],A.at("t<jy>"))
$.wQ=function(){var s=t.l
return A.a([A.a([B.b_,B.b0],s),A.a([B.b0,B.b_],s),A.a([B.b0,B.aZ],s),A.a([B.aZ,B.b0],s),A.a([B.aZ,B.b1],s),A.a([B.b1,B.aZ],s),A.a([B.b1,B.b_],s),A.a([B.b_,B.b1],s)],t.g)}()
$.wI=A.a([B.u,B.E,B.h,B.af,B.d4],t.bk)
$.vf=A.a([B.K,B.J,B.P,B.u],t.bk)
$.bC=A.a([],t.f_)
$.nm=0
$.yt=!1
$.aX=A.a([],t.w)
$.iV=A.a([],t.w)
$.xX=-1
$.xW=null
$.dG=A.a([],A.at("t<lM>"))
$.x=A.eb()
$.bU=A.eb()
$.fA=A.bb(t.B)
$.vs=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"D4","yA",()=>A.u5("_$dart_dartClosure"))
s($,"D3","uD",()=>A.u5("_$dart_dartClosure_dartJSInterop"))
s($,"Fw","zc",()=>A.a([new J.kz()],A.at("t<hU>")))
s($,"Fd","z0",()=>A.d4(A.t_({
toString:function(){return"$receiver$"}})))
s($,"Fe","z1",()=>A.d4(A.t_({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Ff","z2",()=>A.d4(A.t_(null)))
s($,"Fg","z3",()=>A.d4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fj","z6",()=>A.d4(A.t_(void 0)))
s($,"Fk","z7",()=>A.d4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fi","z5",()=>A.d4(A.xv(null)))
s($,"Fh","z4",()=>A.d4(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Fm","z9",()=>A.d4(A.xv(void 0)))
s($,"Fl","z8",()=>A.d4(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Fo","wp",()=>A.Az())
s($,"Fu","nv",()=>A.nl(B.kp))
s($,"DX","w_",()=>{A.Af()
return $.qE})
s($,"CP","uC",()=>{var q=A.t4("axe"),p=A.t4("club"),o=A.t4("spear"),n=A.t4("whip"),m=$.vJ(),l=A.at("t<di>"),k=A.a([m],l),j=A.a([m],l),i=$.vM(),h=A.a([i],l),g=$.vK(),f=A.a([g],l),e=$.vL(),d=A.a([e],l),c=A.a([e],l),b=A.a([i],l),a=$.vO()
return A.a([new A.k2(),new A.k6(),new A.jp(q),new A.jH(p),new A.lC(o),new A.m_(n),new A.jr(k),new A.jA(j),new A.jM(h),new A.jW(f),new A.k3(d),new A.k4(c),new A.kc(b),new A.ki(A.a([a],l)),new A.kj(A.a([i,a],l)),new A.kp(A.a([i],l)),new A.kr(A.a([e],l)),new A.kG(A.a([g,e],l)),new A.kI(A.a([m],l)),new A.kP(A.a([g],l)),new A.li(A.a([g],l)),new A.lx(A.a([g,a],l)),new A.lz(A.a([m],l)),new A.lN(A.a([$.vN()],l)),new A.m1(A.a([a],l)),new A.m2(A.a([a],l))],t.eI)})
s($,"D2","eq",()=>{var q=null,p=A.at("dn"),o=t.S,n=t.hL
return A.a([A.v_("Adventurer","No special birthright, training, or inclination is needed to become an adventurer, simply the courage (or foolhardiness) to brave the wilds and live on one's wits. Adventurers are flexible and resourceful. They are masters of nothing, but able to learn a little of everything.",A.B([B.b3,5,B.ay,5,B.b4,5,B.ah,2],p,o),A.a([new A.kb()],n),A.a8("item",q,q)),A.v_("Barbarian","It's not that barbarians are stupid. Many are, in fact, quite intelligent. It's just that they apply most of that intelligence towards deciding which weapon is best suited for splitting a monster's head open.\n\nBarbarians rely on the might of their bodies and the reassuring heft of their weapons. While they aren't above using a little magic here and there, they're most comfortable when those supernatural forces are safely ensconced in a piece of familiar gear.",A.B([B.b3,1,B.ay,10,B.b4,5],p,o),A.a([new A.jV()],n),A.a8("weapon",q,q)),A.v_("Sorceror","While most rightly fear the awesome power and unpredictability of magic, sorcerors see it as a source of personal power and glory. Tapping magic in its raw elemental form, untethered to other objects or beings is the most dangerous form of spellcasting and most sorcerors have the scars to show for it. A small price to pay for those with the courage to tangle with the raw forces of the universe itself.",A.B([B.ay,3,B.ah,10],p,o),A.a([],n),A.a8("item",q,q))],A.at("t<cP>"))})
s($,"D5","uE",()=>A.dw(A.at("h3")))
s($,"D1","yz",()=>{var q=null
return A.T(q,q,q,q)})
s($,"Fp","za",()=>{var q,p,o,n,m,l,k,j=null,i=$.uP(),h=A.T(i,j,j,A.a([$.fO(),$.np()],t.J)),g=$.b3()
i=A.T(i,g,j,j)
q=A.T($.wl(),g,j,j)
p=$.fS()
o=A.T(p,g,j,j)
n=A.T($.j_(),g,j,j)
m=A.T($.j0(),g,j,j)
l=A.T($.fR(),j,$.fP(),j)
k=$.fN()
return A.B(["I",h,"l",i,"P",q,"\u2248",o,"%",n,"&",m,"*",l,"=",A.T(k,j,p,j),"\u2261",A.T(k,g,j,j),"\u2022",A.T($.uO(),j,p,j)],t.N,t.oC)})
s($,"Fv","zb",()=>{var q=null,p=t.J
return A.B(["?",A.T(q,q,q,q),".",A.T(q,$.b3(),q,q),"#",A.T(q,q,q,A.a([$.fO(),$.np(),$.uK(),$.uL(),$.uM()],p)),"\u250c",A.T(q,q,$.je(),q),"\u2500",A.T(q,q,$.jd(),q),"\u2510",A.T(q,q,$.jf(),q),"-",A.T(q,q,$.fQ(),q),"\u2502",A.T(q,q,$.jc(),q),"\u2558",A.T(q,q,$.j7(),q),"\u2550",A.T(q,q,$.j6(),q),"\u255b",A.T(q,q,$.j8(),q),"\u255e",A.T(q,q,$.ja(),q),"\u2564",A.T(q,q,$.j9(),q),"\u2561",A.T(q,q,$.jb(),q),"\u03c0",A.T(q,q,$.iZ(),q),"\u2248",A.T(q,q,$.fS(),q),"'",A.T(q,q,q,A.a([$.fP(),$.fR()],p))],t.N,t.oC)})
s($,"D8","er",()=>A.c5("air","Ai",1.2,new A.og(),"",!1,null))
s($,"Dc","dL",()=>A.c5("earth","Ea",1.1,null,"",!1,null))
s($,"Dd","b8",()=>A.c5("fire","Fi",1.2,new A.ok(),"burns up",!0,new A.ol()))
s($,"Di","de",()=>A.c5("water","Wa",1.3,null,"",!1,null))
s($,"D7","dK",()=>A.c5("acid","Ac",1.4,null,"",!1,null))
s($,"Da","ci",()=>A.c5("cold","Co",1.2,new A.oh(),"shatters",!1,new A.oi()))
s($,"Df","dM",()=>A.c5("lightning","Ln",1.1,null,"",!1,null))
s($,"Dg","bJ",()=>A.c5("poison","Po",2,new A.oo(),"",!1,new A.op()))
s($,"Db","dc",()=>A.c5("dark","Dk",1.5,new A.oj(),"",!1,null))
s($,"De","dd",()=>A.c5("light","Li",1.5,new A.om(),"",!1,new A.on()))
s($,"Dh","dN",()=>A.c5("spirit","Sp",3,null,"",!1,null))
s($,"D9","fL",()=>A.a([$.aD(),$.er(),$.dL(),$.b8(),$.de(),$.dK(),$.ci(),$.dM(),$.bJ(),$.dc(),$.dd(),$.dN()],A.at("t<dT>")))
s($,"CQ","dI",()=>A.dw(t.R))
s($,"CR","dJ",()=>A.dw(t.R))
s($,"Ft","ws",()=>A.dw(A.at("k7")))
s($,"Dq","bo",()=>A.dw(t.q))
s($,"Fz","zf",()=>A.lo("\\n\\s*"))
s($,"Fs","fT",()=>{var q=t.s
return A.B([$.er(),A.a(["wind","buffets"],q),$.dL(),A.a(["soil","buries"],q),$.b8(),A.a(["flame","burns"],q),$.de(),A.a(["water","blasts"],q),$.dK(),A.a(["acid","melts"],q),$.ci(),A.a(["ice","freezes"],q),$.dM(),A.a(["lightning","shocks"],q),$.bJ(),A.a(["poison","chokes"],q),$.dc(),A.a(["darkness","crushes"],q),$.dd(),A.a(["light","sears"],q),$.dN(),A.a(["spirit","haunts"],q)],t.h,t.m)})
s($,"Ds","cj",()=>A.dw(t.P))
s($,"DO","uF",()=>A.lj("Fae","What can be said about the fae folk that is known to be true? Dimunitive and easily harmed, they survive by cloaking themselves in fables, tricks, and subterfuge. Quick to anger and quick to forgive, the fae live each moment as if it may be their last, bright-burning flames all too aware of how easily they may be snuffed out.",A.a([new A.k1(),new A.k5()],t.hL),A.B([B.ak,0.6,B.ae,1.6,B.ar,0.7,B.a3,1.1],t.Z,t.i)))
s($,"DN","fM",()=>{var q=t.Z,p=t.i,o=t.hL
return A.a([A.lj("Dwarf","It takes a certain kind of person to be willing to spend their life deep under the Earth, toiling away in darkness. Dwarves aren't just willing, but delight in it. Solid, impenetrable and somewhat dim, dwarves have much in common with the mines they love.",B.ch,A.B([B.ak,1.3,B.ae,0.6,B.ar,1.4,B.a3,0.7],q,p)),A.lj("Elf","There are few things elves are not good at, as any elf will be quick to inform you. Clever, quick on their feet, and surprisingly strong for how they look. Which is radiantly beautiful, naturally.",B.ch,A.B([B.ak,1.2,B.ae,1.3,B.ar,1,B.a3,1.2],q,p)),$.uF(),A.lj("Gnome","Gnomes are gentle, quiet folk, difficult to arouse to anger (unless you interrupt one while reading). Most live a life of the mind, seeking knowledge more than adventure. But this insatiable desire for the former, on many occasions, leads them into the jaws of the latter.",A.a([new A.ly()],o),A.B([B.ak,0.7,B.ae,0.8,B.ar,1,B.a3,1.5],q,p)),A.lj("Human","Humans excel at nothing, but nor are they particularly weak in any area. Most other races consider humans sort of like mice: pesky creatures who seem do little but breed, which they do with great devotion.",A.a([new A.lh()],o),A.B([B.ak,1,B.ae,1,B.ar,1,B.a3,1],q,p))],A.at("t<cV>"))})
s($,"CS","vJ",()=>A.fW("Arcing",B.ah,"Cast spells of lightning."))
s($,"CT","vK",()=>A.fW("Earthshaping",B.ah,"Cast spells of earth."))
s($,"CU","vL",()=>A.fW("Fireweaving",B.ah,"Cast spells of fire."))
s($,"CV","vM",()=>A.fW("Icewinding",B.ah,"Cast spells of cold."))
s($,"CW","vN",()=>A.fW("Watercoursing",B.ah,"Cast spells of water."))
s($,"CX","vO",()=>A.fW("Windchasing",B.ah,"Cast spells of air."))
s($,"CY","yy",()=>{var q=$.bm
$.bm=q+1
return new A.jl(q)})
s($,"D_","vQ",()=>{var q=$.bm
$.bm=q+1
return new A.jo(q)})
s($,"D0","vR",()=>{var q=$.bm
$.bm=q+1
return new A.jv(q)})
s($,"DW","vZ",()=>{var q=$.bm
$.bm=q+1
return new A.lB(q)})
s($,"Fn","wo",()=>{var q=$.bm
$.bm=q+1
return new A.m0(q)})
s($,"DV","vY",()=>{var q=$.yy(),p=$.bm,o=$.bm=p+1,n=$.bm=o+1,m=$.vQ(),l=$.vR(),k=$.bm=n+1,j=$.vZ()
$.bm=k+1
return A.a([q,new A.jt(p),new A.ju(o),m,l,new A.kF(n),j,new A.lH(k),$.wo(),$.vJ(),$.vK(),$.vL(),$.vM(),$.vN(),$.vO()],t.hC)})
s($,"DU","vX",()=>{var q,p,o,n=A.D(t.N,t.M)
for(q=$.vY(),p=0;p<15;++p){o=q[p]
n.h(0,o.gO(),o)}return n})
s($,"CZ","vP",()=>A.dw(A.at("fX")))
s($,"DL","vV",()=>{var q=null
return A.qy(q,q,q,q)})
s($,"DJ","yQ",()=>{var q=t.J,p=A.a([$.j3()],q)
q=A.a([$.fO()],q)
return A.qy($.j1(),p,$.j4(),q)})
s($,"DK","yR",()=>{var q=t.J,p=A.a([$.w8()],q)
q=A.a([$.np()],q)
return A.qy($.uJ(),p,null,q)})
s($,"DM","yS",()=>A.qy($.uI(),null,null,null))
s($,"DH","yO",()=>{var q=t.J
return A.B([$.df(),A.a([$.fS()],q),$.es(),A.a([$.fN()],q)],t.U,t.p)})
s($,"DI","yP",()=>A.a([$.uK(),$.uL(),$.uM()],t.J))
s($,"DR","nn",()=>A.Am(B.r))
s($,"DQ","uG",()=>A.xj($.cE()))
s($,"DS","yT",()=>A.xj($.by()))
s($,"F7","et",()=>A.G("unformed"," ",B.t,null).a2())
s($,"F8","dg",()=>A.G("unformed wet","\u2248",B.l,null).a2())
s($,"Ev","cE",()=>A.G("open","\xb7",B.j,null).a2())
s($,"EN","by",()=>A.G("solid","\u2593",B.j,null).bz())
s($,"EB","cF",()=>A.G("passage","\xb7",B.d3,null).a2())
s($,"Eg","j2",()=>A.G("doorway","\u25cb",B.w,null).a2())
s($,"EO","df",()=>A.G("solid wet","\u2248",B.D,null).bz())
s($,"EC","es",()=>A.G("wet passage","\u2261",B.w,null).a2())
s($,"Ej","fO",()=>A.G("flagstone wall","\u2592",B.d,B.j).bz())
s($,"Ep","np",()=>A.G("granite wall","\u2592",B.f,B.l).bz())
s($,"El","uK",()=>A.G("granite","\u2593",B.f,B.l).hl(0,B.l,B.t).bz())
s($,"Em","uL",()=>A.G("granite","\u2593",B.f,B.l).hl(0.2,B.l,B.t).bz())
s($,"En","uM",()=>A.G("granite","\u2593",B.f,B.l).hl(0.4,B.l,B.t).bz())
s($,"Ei","j3",()=>A.G("flagstone floor","\xb7",B.j,null).a2())
s($,"Eo","w8",()=>A.G("granite floor","\xb7",B.f,null).a2())
s($,"Ez","j4",()=>A.G("open door","\u25cb",B.k,B.aw).cs(A.CI()).a2())
s($,"Ec","j1",()=>A.G("closed door","\u25d9",B.k,B.aw).cs(A.CL()).k7())
s($,"EA","wd",()=>A.G("open square door","\u2642",B.k,B.aw).cs(A.CJ()).a2())
s($,"Ed","uJ",()=>A.G("closed square door","\u2640",B.k,B.aw).cs(A.CM()).k7())
s($,"Ew","wc",()=>A.G("open barred door","\u2642",B.d,B.f).cs(A.CH()).a2())
s($,"E9","uI",()=>A.G("closed barred door","\u266a",B.d,B.f).cs(A.CK()).cE($.V().cb(0,$.bK())))
s($,"E5","w3",()=>A.G("burnt floor","\u03c6",B.l,null).a2())
s($,"E6","w4",()=>A.G("burnt floor","\u03b5",B.l,null).a2())
s($,"Eu","yX",()=>A.G("low wall","%",B.d,null).aI())
s($,"EQ","uN",()=>A.G("stairs","\u2261",B.u,B.f).bw(B.aY).a2())
s($,"E3","fN",()=>A.G("bridge","\u2261",B.k,B.aw).a2())
s($,"Ek","no",()=>A.G("moss","\u2591",B.a0,null).eY(128).a2())
s($,"Fb","fS",()=>A.G("water","\u2248",B.D,B.F).oz(10,0.5,B.F,B.t).eY(32).cE($.V().cb(0,$.iX())))
s($,"ES","uO",()=>A.G("stepping stone","\u2022",B.p,B.F).a2())
s($,"Ee","w5",()=>A.G("dirt","\xb7",B.w,null).a2())
s($,"Ef","w6",()=>A.G("dirt2","\u03c6",B.w,null).a2())
s($,"Eq","fP",()=>A.G("grass","\u2591",B.n,null).a2())
s($,"F3","fR",()=>A.G("tall grass","\u221a",B.n,null).a2())
s($,"F4","ns",()=>A.G("tree","\u25b2",B.n,B.B).bz())
s($,"F5","nt",()=>A.G("tree","\u2660",B.n,B.B).bz())
s($,"F6","nu",()=>A.G("tree","\u2663",B.n,B.B).bz())
s($,"Ey","nr",()=>A.G("open chest","\u2320",B.k,null).aI())
s($,"Eb","j0",()=>A.G("closed chest","\u2321",B.k,null).cs(new A.rV()).aI())
s($,"Ea","j_",()=>A.G("closed barrel","\xb0",B.k,null).cs(new A.rU()).aI())
s($,"Ex","nq",()=>A.G("open barrel","\u2219",B.k,null).aI())
s($,"F1","je",()=>A.G("table","\u250c",B.k,null).aI())
s($,"F0","jd",()=>A.G("table","\u2500",B.k,null).aI())
s($,"F2","jf",()=>A.G("table","\u2510",B.k,null).aI())
s($,"F_","jc",()=>A.G("table","\u2502",B.k,null).aI())
s($,"EW","fQ",()=>A.G("table"," ",B.k,null).aI())
s($,"EU","j7",()=>A.G("table","\u2558",B.k,null).aI())
s($,"ET","j6",()=>A.G("table","\u2550",B.k,null).aI())
s($,"EV","j8",()=>A.G("table","\u255b",B.k,null).aI())
s($,"EY","ja",()=>A.G("table","\u255e",B.k,null).aI())
s($,"EX","j9",()=>A.G("table","\u2564",B.k,null).aI())
s($,"EZ","jb",()=>A.G("table","\u2561",B.k,null).aI())
s($,"E7","iY",()=>A.G("candle","\u2265",B.I,null).eY(128).aI())
s($,"Fa","uP",()=>A.G("wall torch","\u2264",B.h,B.f).eY(192).bz())
s($,"E2","yW",()=>A.Aw("brazier","\u2264",B.k,null,5,new A.rT()))
s($,"ER","wl",()=>A.G("statue","P",B.u,B.f).aI())
s($,"E8","iZ",()=>A.G("chair","\u03c0",B.k,null).a2())
s($,"E4","w2",()=>A.G("brown jelly stain","\xb7",B.k,null).a2())
s($,"Er","w9",()=>A.G("gray jelly stain","\xb7",B.l,null).a2())
s($,"Es","wa",()=>A.G("green jelly stain","\xb7",B.A,null).a2())
s($,"ED","we",()=>A.G("red jelly stain","\xb7",B.m,null).a2())
s($,"F9","wm",()=>A.G("violet jelly stain","\xb7",B.O,null).a2())
s($,"Fc","wn",()=>A.G("white jelly stain","\xb7",B.u,null).a2())
s($,"EP","j5",()=>A.G("spiderweb","\xf7",B.f,null).a2())
s($,"Eh","w7",()=>A.G("dungeon entrance","\u2261",B.d,B.l).bw(B.bB).a2())
s($,"Et","wb",()=>A.G("home entrance","\u25cb",B.I,null).bw(B.cM).a2())
s($,"EE","wf",()=>A.G("shop entrance","\u25cb",B.N,null).bw(B.cI).a2())
s($,"EF","wg",()=>A.G("shop entrance","\u25cb",B.h,null).bw(B.cH).a2())
s($,"EG","wh",()=>A.G("shop entrance","\u25cb",B.A,null).bw(B.cG).a2())
s($,"EH","wi",()=>A.G("shop entrance","\u25cb",B.n,null).bw(B.cF).a2())
s($,"EI","wj",()=>A.G("shop entrance","\u25cb",B.a0,null).bw(B.cE).a2())
s($,"EJ","wk",()=>A.G("shop entrance","\u25cb",B.K,null).bw(B.cD).a2())
s($,"EK","yY",()=>A.G("shop entrance","\u25cb",B.D,null).bw(B.cL).a2())
s($,"EL","yZ",()=>A.G("shop entrance","\u25cb",B.O,null).bw(B.cK).a2())
s($,"EM","z_",()=>A.G("shop entrance","\u25cb",B.m,null).bw(B.cJ).a2())
s($,"E1","uH",()=>A.B([$.j4(),30,$.j1(),30,$.fN(),50,$.no(),10,$.fP(),3,$.fR(),3,$.ns(),40,$.nt(),40,$.nu(),40,$.je(),20,$.jd(),20,$.jf(),20,$.jc(),20,$.fQ(),20,$.j7(),20,$.j6(),20,$.j8(),20,$.ja(),20,$.j9(),20,$.jb(),20,$.nr(),40,$.j0(),80,$.nq(),15,$.j_(),40,$.iY(),1,$.iZ(),10,$.j5(),1],t.U,t.S))
s($,"E0","w1",()=>A.B([$.j4(),70,$.j1(),70,$.fN(),50,$.no(),20,$.fP(),30,$.fR(),50,$.ns(),100,$.nt(),100,$.nu(),100,$.je(),60,$.jd(),60,$.jf(),60,$.jc(),60,$.fQ(),60,$.j7(),60,$.j6(),60,$.j8(),60,$.ja(),60,$.j9(),60,$.jb(),60,$.nr(),70,$.j0(),80,$.nq(),30,$.j_(),40,$.iY(),60,$.iZ(),40,$.j5(),20],t.U,t.S))
s($,"E_","yV",()=>{var q=$.fN(),p=t.J,o=A.a([$.fS()],p),n=$.fP(),m=$.w5(),l=$.w6()
return A.B([q,o,n,A.a([m,l],p),$.fR(),A.a([m,l],p),$.ns(),A.a([m,l],p),$.nt(),A.a([m,l],p),$.nu(),A.a([m,l],p),$.iY(),A.a([$.fQ()],p),$.j5(),A.a([$.j3()],p)],t.U,t.p)})
s($,"D6","aD",()=>A.c5("none","No",1,null,"",!1,null))
s($,"Dr","yI",()=>A.lo("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"DY","w0",()=>A.Ai($.yM().a5(1)))
s($,"DF","yM",()=>A.A5("something",B.aH,B.y))
s($,"DE","yL",()=>A.lo("\\[([^|\\]]+)(\\|([^\\]]+))?\\]"))
s($,"DD","yK",()=>A.lo("^\\(([^)]+)\\)(.*)"))
s($,"DG","yN",()=>A.A4("you","you","you",B.cu))
s($,"Dp","yH",()=>A.lo("^(\\d{1,3})((\\d{3})+)$"))
s($,"Fy","ze",()=>A.wN(A.at("hX<e>")))
s($,"Fx","zd",()=>A.wN(A.at("hX<L>")))
s($,"Dz","vU",()=>A.kS(0))
s($,"Du","bK",()=>A.kS(1))
s($,"Dx","V",()=>A.kS(2))
s($,"DA","iX",()=>A.kS(4))
s($,"DB","b3",()=>A.kS(8))
s($,"Dv","yJ",()=>$.bK().cb(0,$.V()))
s($,"Dw","bL",()=>$.bK().cb(0,$.b3()))
s($,"Dy","vT",()=>$.V().cb(0,$.b3()))
s($,"Dt","vS",()=>$.bK().cb(0,$.V()).cb(0,$.iX()).cb(0,$.b3()))
s($,"DZ","yU",()=>{var q=null
return A.Au("uninitialized",q,$.vU(),q,q,q)})
s($,"Fq","wq",()=>A.B([B.M,"|",B.S,"/",B.Q,"-",B.R,"\\",B.L,"|",B.U,"/",B.T,"-",B.V,"\\"],t.j,t.N))
s($,"Fr","wr",()=>{var q="\u2022",p="Oo",o=".",n=t.bk,m=A.at("t<C<Y>>")
return A.B([$.aD(),A.a([A.U(q,A.a([B.I],n)),A.U(q,A.a([B.I],n)),A.U(q,A.a([B.k],n))],m),$.er(),A.a([A.U(p,A.a([B.u,B.K],n)),A.U(o,A.a([B.K],n)),A.U(o,A.a([B.J],n))],m),$.dL(),A.a([A.U("*%",A.a([B.I,B.h],n)),A.U("*%",A.a([B.k,B.w],n)),A.U("\u2022*",A.a([B.k],n)),A.U(q,A.a([B.w],n))],m),$.b8(),A.a([A.U("\u25b2^",A.a([B.h,B.E],n)),A.U("*^",A.a([B.N],n)),A.U("^",A.a([B.m],n)),A.U("^",A.a([B.w,B.m],n)),A.U(o,A.a([B.w,B.m],n))],m),$.de(),A.a([A.U(p,A.a([B.K,B.J],n)),A.U("o\u2022^",A.a([B.J,B.D],n)),A.U("\u2022^",A.a([B.D,B.F],n)),A.U("^~",A.a([B.D,B.F],n)),A.U("~",A.a([B.F],n)),A.U(o,A.a([B.F,B.ao],n))],m),$.dK(),A.a([A.U(p,A.a([B.E,B.h],n)),A.U("o\u2022~",A.a([B.A,B.h],n)),A.U(":,",A.a([B.A,B.af],n)),A.U(o,A.a([B.A],n))],m),$.ci(),A.a([A.U("*",A.a([B.u],n)),A.U("+x",A.a([B.K,B.u],n)),A.U("+x",A.a([B.J,B.p],n)),A.U(o,A.a([B.f,B.F],n))],m),$.dM(),A.a([A.U("*",A.a([B.P],n)),A.U("-|\\/",A.a([B.O,B.u],n)),A.U(o,A.a([B.t,B.t,B.t,B.P],n))],m),$.bJ(),A.a([A.U(p,A.a([B.ag,B.A],n)),A.U("o\u2022",A.a([B.n,B.n,B.af],n)),A.U(q,A.a([B.B,B.af],n)),A.U(o,A.a([B.B],n))],m),$.dc(),A.a([A.U("*%",A.a([B.t,B.t,B.l],n)),A.U(q,A.a([B.t,B.t,B.p],n)),A.U(o,A.a([B.t],n)),A.U(o,A.a([B.t],n))],m),$.dd(),A.a([A.U("*",A.a([B.u],n)),A.U("x+",A.a([B.u,B.E],n)),A.U(":;\"'`,",A.a([B.E,B.h],n)),A.U(o,A.a([B.p,B.E],n))],m),$.dN(),A.a([A.U("Oo*+",A.a([B.P,B.p],n)),A.U("o+",A.a([B.O,B.n],n)),A.U("\u2022.",A.a([B.ao,B.B,B.B],n))],m)],t.h,A.at("C<C<Y>>"))})
s($,"Dk","yC",()=>A.ar("!",B.a0,null))
s($,"Do","yG",()=>A.ar("/",B.K,null))
s($,"Dj","yB",()=>A.ar("\\",B.K,null))
s($,"Dl","yD",()=>A.ar("-",B.a0,null))
s($,"Dn","yF",()=>A.ar("<",B.a0,null))
s($,"Dm","yE",()=>A.ar(">",B.a0,null))
s($,"DT","vW",()=>A.B([$.er(),"A",$.dL(),"E",$.b8(),"F",$.de(),"W",$.dK(),"A",$.ci(),"C",$.dM(),"L",$.bJ(),"P",$.dc(),"D",$.dd(),"L",$.dN(),"S"],t.h,t.N))
r($,"CC","zg",()=>A.Ay(1,1))
s($,"FB","wt",()=>{var q,p,o,n=A.D(t.U,A.at("+(d,d,d)"))
n.h(0,$.et(),B.aJ)
n.h(0,$.dg(),B.cA)
n.h(0,$.cE(),B.aJ)
n.h(0,$.by(),B.bx)
n.h(0,$.cF(),B.aJ)
n.h(0,$.j2(),B.aJ)
n.h(0,$.df(),B.cB)
n.h(0,$.es(),B.cA)
n.h(0,$.fO(),B.iT)
n.h(0,$.np(),B.bx)
n.h(0,$.uK(),B.bx)
n.h(0,$.uL(),B.iV)
n.h(0,$.uM(),B.iW)
n.h(0,$.j3(),B.jz)
n.h(0,$.w8(),B.aJ)
n.h(0,$.j4(),B.jc)
n.h(0,$.j1(),B.jd)
n.h(0,$.wd(),B.je)
n.h(0,$.uJ(),B.jf)
n.h(0,$.wc(),B.jg)
n.h(0,$.uI(),B.jh)
n.h(0,$.w3(),B.jA)
n.h(0,$.w4(),B.jB)
n.h(0,$.yX(),B.ji)
n.h(0,$.uN(),B.jj)
n.h(0,$.fN(),B.iR)
n.h(0,$.no(),B.iX)
n.h(0,$.fS(),B.cB)
n.h(0,$.uO(),B.iS)
n.h(0,$.w5(),B.iY)
n.h(0,$.w6(),B.iZ)
n.h(0,$.fP(),B.j7)
n.h(0,$.fR(),B.j8)
n.h(0,$.ns(),B.j9)
n.h(0,$.nt(),B.ja)
n.h(0,$.nu(),B.jb)
n.h(0,$.nr(),B.jk)
n.h(0,$.j0(),B.jl)
n.h(0,$.j_(),B.jm)
n.h(0,$.nq(),B.jn)
n.h(0,$.je(),B.ab)
n.h(0,$.jd(),B.ab)
n.h(0,$.jf(),B.ab)
n.h(0,$.jc(),B.ab)
n.h(0,$.fQ(),B.ab)
n.h(0,$.j7(),B.ab)
n.h(0,$.j6(),B.ab)
n.h(0,$.j8(),B.ab)
n.h(0,$.ja(),B.ab)
n.h(0,$.j9(),B.ab)
n.h(0,$.jb(),B.ab)
n.h(0,$.iY(),B.jo)
n.h(0,$.uP(),B.iU)
for(q=$.yW(),p=q.length,o=0;o<q.length;q.length===p||(0,A.o)(q),++o)n.h(0,q[o],B.jp)
n.h(0,$.wl(),B.jq)
n.h(0,$.iZ(),B.jr)
n.h(0,$.w2(),B.js)
n.h(0,$.w9(),B.jt)
n.h(0,$.wa(),B.ju)
n.h(0,$.we(),B.jv)
n.h(0,$.wm(),B.jw)
n.h(0,$.wn(),B.jx)
n.h(0,$.j5(),B.jy)
n.h(0,$.w7(),B.j_)
n.h(0,$.wb(),B.j0)
n.h(0,$.wf(),B.j1)
n.h(0,$.wg(),B.j2)
n.h(0,$.wh(),B.j3)
n.h(0,$.wi(),B.j4)
n.h(0,$.wj(),B.j5)
n.h(0,$.wk(),B.j6)
n.h(0,$.yY(),B.by)
n.h(0,$.yZ(),B.by)
n.h(0,$.z_(),B.by)
return n})
s($,"FA","n",()=>new A.qW(A.Aj(A.xd())))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.f0,SharedArrayBuffer:A.f0,ArrayBufferView:A.hB,DataView:A.kV,Float32Array:A.kW,Float64Array:A.kX,Int16Array:A.kY,Int32Array:A.kZ,Int8Array:A.l_,Uint16Array:A.l0,Uint32Array:A.l1,Uint8ClampedArray:A.hC,CanvasPixelArray:A.hC,Uint8Array:A.l2})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.f1.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.Cs
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=hauberk-core.js.map
