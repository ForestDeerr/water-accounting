(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const br=()=>{};var jn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw Te(e)},Te=function(n){return new Error("Firebase Database ("+Vs.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ir=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(u=64)),s.push(t[h],t[d],t[u],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($s(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ir(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw new Sr;const u=r<<2|a>>4;if(s.push(u),l!==64){const f=a<<4&240|l>>2;if(s.push(f),d!==64){const m=l<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zs=function(n){const e=$s(n);return pn.encodeByteArray(e,!0)},lt=function(n){return zs(n).replace(/\./g,"")},Xt=function(n){try{return pn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){return Gs(void 0,n)}function Gs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tr(t)||(n[t]=Gs(n[t],e[t]));return n}function Tr(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=()=>Rr().__FIREBASE_DEFAULTS__,xr=()=>{if(typeof process>"u"||typeof jn>"u")return;const n=jn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ar=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xt(n[1]);return e&&JSON.parse(e)},qs=()=>{try{return br()||kr()||xr()||Ar()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dr=n=>{var e,t;return(t=(e=qs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pr=n=>{const e=Dr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},js=()=>{var n;return(n=qs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lt(JSON.stringify(t)),lt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ys(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mr())}function Lr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fr(){return Vs.NODE_ADMIN===!0}function Br(){try{return typeof indexedDB=="object"}catch{return!1}}function Wr(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="FirebaseError";class Je extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Ur,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hr(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,s)}}function Hr(n,e){return n.replace(Vr,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Vr=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){return JSON.parse(n)}function k(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=He(Xt(r[0])||""),t=He(Xt(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},$r=function(n){const e=Qs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},zr=function(n){const e=Qs(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function be(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yn(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ct(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function dt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Kn(r)&&Kn(o)){if(!dt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Kn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):d<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const u=(i<<5|i>>>27)+l+c+h+s[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function mn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){return n&&n._delegate?n._delegate:n}class Ve{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Nt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qr(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kr(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kr(n){return n===ce?void 0:n}function Qr(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(I||(I={}));const Jr={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Zr=I.INFO,eo={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},to=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=eo[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=Zr,this._logHandler=to,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const no=(n,e)=>e.some(t=>n instanceof t);let Qn,Xn;function so(){return Qn||(Qn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function io(){return Xn||(Xn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Js=new WeakMap,Jt=new WeakMap,Zs=new WeakMap,Wt=new WeakMap,_n=new WeakMap;function ro(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ne(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Js.set(t,n)}).catch(()=>{}),_n.set(e,n),e}function oo(n){if(Jt.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Jt.set(n,e)}let Zt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ne(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ao(n){Zt=n(Zt)}function lo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ut(this),e,...t);return Zs.set(s,e.sort?e.sort():[e]),ne(s)}:io().includes(n)?function(...e){return n.apply(Ut(this),e),ne(Js.get(this))}:function(...e){return ne(n.apply(Ut(this),e))}}function co(n){return typeof n=="function"?lo(n):(n instanceof IDBTransaction&&oo(n),no(n,so())?new Proxy(n,Zt):n)}function ne(n){if(n instanceof IDBRequest)return ro(n);if(Wt.has(n))return Wt.get(n);const e=co(n);return e!==n&&(Wt.set(n,e),_n.set(e,n)),e}const Ut=n=>_n.get(n);function ho(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ne(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ne(o.result),c.oldVersion,c.newVersion,ne(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const uo=["get","getKey","getAll","getAllKeys","count"],fo=["put","add","delete","clear"],Ht=new Map;function Jn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ht.get(e))return Ht.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=fo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||uo.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ht.set(e,r),r}ao(n=>({...n,get:(e,t,s)=>Jn(e,t)||n.get(e,t,s),has:(e,t)=>!!Jn(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mo(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function mo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const en="@firebase/app",Zn="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Xs("@firebase/app"),_o="@firebase/app-compat",go="@firebase/analytics-compat",yo="@firebase/analytics",vo="@firebase/app-check-compat",Eo="@firebase/app-check",Co="@firebase/auth",wo="@firebase/auth-compat",bo="@firebase/database",Io="@firebase/data-connect",So="@firebase/database-compat",No="@firebase/functions",To="@firebase/functions-compat",Ro="@firebase/installations",ko="@firebase/installations-compat",xo="@firebase/messaging",Ao="@firebase/messaging-compat",Do="@firebase/performance",Po="@firebase/performance-compat",Oo="@firebase/remote-config",Mo="@firebase/remote-config-compat",Lo="@firebase/storage",Fo="@firebase/storage-compat",Bo="@firebase/firestore",Wo="@firebase/vertexai",Uo="@firebase/firestore-compat",Ho="firebase",Vo="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]",$o={[en]:"fire-core",[_o]:"fire-core-compat",[yo]:"fire-analytics",[go]:"fire-analytics-compat",[Eo]:"fire-app-check",[vo]:"fire-app-check-compat",[Co]:"fire-auth",[wo]:"fire-auth-compat",[bo]:"fire-rtdb",[Io]:"fire-data-connect",[So]:"fire-rtdb-compat",[No]:"fire-fn",[To]:"fire-fn-compat",[Ro]:"fire-iid",[ko]:"fire-iid-compat",[xo]:"fire-fcm",[Ao]:"fire-fcm-compat",[Do]:"fire-perf",[Po]:"fire-perf-compat",[Oo]:"fire-rc",[Mo]:"fire-rc-compat",[Lo]:"fire-gcs",[Fo]:"fire-gcs-compat",[Bo]:"fire-fst",[Uo]:"fire-fst-compat",[Wo]:"fire-vertex","fire-js":"fire-js",[Ho]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Map,zo=new Map,nn=new Map;function es(n,e){try{n.container.addComponent(e)}catch(t){J.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(nn.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;nn.set(e,n);for(const t of ht.values())es(t,n);for(const t of zo.values())es(t,n);return!0}function Go(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qo(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},se=new Ks("app","Firebase",jo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=Vo;function ei(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw se.create("bad-app-name",{appName:String(i)});if(t||(t=js()),!t)throw se.create("no-options");const r=ht.get(i);if(r){if(dt(t,r.options)&&dt(s,r.config))return r;throw se.create("duplicate-app",{appName:i})}const o=new Xr(i);for(const c of nn.values())o.addComponent(c);const a=new Yo(t,s,o);return ht.set(i,a),a}function Qo(n=tn){const e=ht.get(n);if(!e&&n===tn&&js())return ei();if(!e)throw se.create("no-app",{appName:n});return e}function Ee(n,e,t){var s;let i=(s=$o[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(a.join(" "));return}ut(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="firebase-heartbeat-database",Jo=1,$e="firebase-heartbeat-store";let Vt=null;function ti(){return Vt||(Vt=ho(Xo,Jo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($e)}catch(t){console.warn(t)}}}}).catch(n=>{throw se.create("idb-open",{originalErrorMessage:n.message})})),Vt}async function Zo(n){try{const t=(await ti()).transaction($e),s=await t.objectStore($e).get(ni(n));return await t.done,s}catch(e){if(e instanceof Je)J.warn(e.message);else{const t=se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});J.warn(t.message)}}}async function ts(n,e){try{const s=(await ti()).transaction($e,"readwrite");await s.objectStore($e).put(e,ni(n)),await s.done}catch(t){if(t instanceof Je)J.warn(t.message);else{const s=se.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});J.warn(s.message)}}}function ni(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=1024,ta=30;class na{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ia(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ns();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ta){const o=ra(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){J.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ns(),{heartbeatsToSend:s,unsentEntries:i}=sa(this._heartbeatsCache.heartbeats),r=lt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return J.warn(t),""}}}function ns(){return new Date().toISOString().substring(0,10)}function sa(n,e=ea){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ss(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ss(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ia{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Br()?Wr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zo(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ts(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ts(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ss(n){return lt(JSON.stringify({version:2,heartbeats:n})).length}function ra(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){ut(new Ve("platform-logger",e=>new po(e),"PRIVATE")),ut(new Ve("heartbeat",e=>new na(e),"PRIVATE")),Ee(en,Zn,n),Ee(en,Zn,"esm2017"),Ee("fire-js","")}oa("");var is={};const rs="@firebase/database",os="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="";function aa(n){si=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),k(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:He(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new la(e)}}catch{}return new ca},he=ii("localStorage"),da=ii("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Xs("@firebase/database"),ha=function(){let n=1;return function(){return n++}}(),ri=function(n){const e=jr(n),t=new qr;t.update(e);const s=t.digest();return pn.encodeByteArray(s)},Ze=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ze.apply(null,s):typeof s=="object"?e+=k(s):e+=s,e+=" "}return e};let Le=null,as=!0;const ua=function(n,e){p(!0,"Can't turn on custom loggers persistently."),Ce.logLevel=I.VERBOSE,Le=Ce.log.bind(Ce)},F=function(...n){if(as===!0&&(as=!1,Le===null&&da.get("logging_enabled")===!0&&ua()),Le){const e=Ze.apply(null,n);Le(e)}},et=function(n){return function(...e){F(n,...e)}},sn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ze(...n);Ce.error(e)},Z=function(...n){const e=`FIREBASE FATAL ERROR: ${Ze(...n)}`;throw Ce.error(e),new Error(e)},H=function(...n){const e="FIREBASE WARNING: "+Ze(...n);Ce.warn(e)},fa=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&H("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},pa=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ie="[MIN_NAME]",fe="[MAX_NAME]",ke=function(n,e){if(n===e)return 0;if(n===Ie||e===fe)return-1;if(e===Ie||n===fe)return 1;{const t=ls(n),s=ls(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ma=function(n,e){return n===e?0:n<e?-1:1},De=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+k(e))},gn=function(n){if(typeof n!="object"||n===null)return k(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=k(e[s]),t+=":",t+=gn(n[e[s]]);return t+="}",t},ai=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function V(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const li=function(n){p(!oi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(c=0;c<64;c+=8){let u=parseInt(h.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},_a=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ga=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ya(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const va=new RegExp("^-?(0*)\\d{1,10}$"),Ea=-2147483648,Ca=2147483647,ls=function(n){if(va.test(n)){const e=Number(n);if(e>=Ea&&e<=Ca)return e}return null},xe=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw H("Exception was thrown by user callback.",t),e},Math.floor(0))}},wa=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fe=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qo(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){H(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',H(e)}}class at{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}at.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="5",ci="v",di="s",hi="r",ui="f",fi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pi="ls",mi="p",rn="ac",_i="websocket",gi="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=he.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&he.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Sa(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vi(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===_i)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===gi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Sa(n)&&(t.ns=n.namespace);const i=[];return V(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.counters_={}}incrementCounter(e,t=1){ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Nr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={},zt={};function vn(n){const e=n.toString();return $t[e]||($t[e]=new Na),$t[e]}function Ta(n,e){const t=n.toString();return zt[t]||(zt[t]=e()),zt[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xe(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="start",ka="close",xa="pLPCommand",Aa="pRTLPCB",Ei="id",Ci="pw",wi="ser",Da="cb",Pa="seg",Oa="ts",Ma="d",La="dframe",bi=1870,Ii=30,Fa=bi-Ii,Ba=25e3,Wa=3e4;class ve{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=et(e),this.stats_=vn(t),this.urlFn=c=>(this.appCheckToken&&(c[rn]=this.appCheckToken),vi(t,gi,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ra(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wa)),pa(()=>{if(this.isClosed_)return;this.scriptTagHolder=new En((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cs)this.id=a,this.password=c;else if(o===ka)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[cs]="t",s[wi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Da]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ci]=yn,this.transportSessionId&&(s[di]=this.transportSessionId),this.lastSessionId&&(s[pi]=this.lastSessionId),this.applicationId&&(s[mi]=this.applicationId),this.appCheckToken&&(s[rn]=this.appCheckToken),typeof location<"u"&&location.hostname&&fi.test(location.hostname)&&(s[hi]=ui);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ve.forceAllow_=!0}static forceDisallow(){ve.forceDisallow_=!0}static isAvailable(){return ve.forceAllow_?!0:!ve.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_a()&&!ga()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=zs(t),i=ai(s,Fa);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[La]="t",s[Ei]=e,s[Ci]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=k(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class En{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ha(),window[xa+this.uniqueCallbackIdentifier]=e,window[Aa+this.uniqueCallbackIdentifier]=t,this.myIFrame=En.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){F("frame writing exception"),a.stack&&F(a.stack),F(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||F("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ei]=this.myID,e[Ci]=this.myPW,e[wi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ii+s.length<=bi;){const o=this.pendingSegs.shift();s=s+"&"+Pa+i+"="+o.seg+"&"+Oa+i+"="+o.ts+"&"+Ma+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Ba)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=16384,Ha=45e3;let ft=null;typeof MozWebSocket<"u"?ft=MozWebSocket:typeof WebSocket<"u"&&(ft=WebSocket);class ${constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=et(this.connId),this.stats_=vn(t),this.connURL=$.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[ci]=yn,typeof location<"u"&&location.hostname&&fi.test(location.hostname)&&(o[hi]=ui),t&&(o[di]=t),s&&(o[pi]=s),i&&(o[rn]=i),r&&(o[mi]=r),vi(e,_i,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,he.set("previous_websocket_failure",!0);try{let s;Fr(),this.mySock=new ft(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ft!==null&&!$.forceDisallow_}static previouslyFailed(){return he.isInMemoryStorage||he.get("previous_websocket_failure")===!0}markConnectionHealthy(){he.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=He(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ai(t,Ua);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ha))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$.responsesRequiredToBeHealthy=2;$.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{static get ALL_TRANSPORTS(){return[ve,$]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=$&&$.isAvailable();let s=t&&!$.previouslyFailed();if(e.webSocketOnly&&(t||H("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$];else{const i=this.transports_=[];for(const r of ze.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ze.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ze.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=6e4,$a=5e3,za=10*1024,Ga=100*1024,Gt="t",ds="d",qa="s",hs="r",ja="e",us="o",fs="a",ps="n",ms="p",Ya="h";class Ka{constructor(e,t,s,i,r,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=et("c:"+this.id+":"),this.transportManager_=new ze(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fe(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ga?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>za?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gt in e){const t=e[Gt];t===fs?this.upgradeIfSecondaryHealthy_():t===hs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===us&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=De("t",e),s=De("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ms,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ps,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=De("t",e),s=De("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=De(Gt,e);if(ds in e){const s=e[ds];if(t===Ya){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ps){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qa?this.onConnectionShutdown_(s):t===hs?this.onReset_(s):t===ja?sn("Server Error: "+s):t===us?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yn!==s&&H("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Fe(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Va))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fe(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($a))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ms,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(he.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Ni{static getInstance(){return new pt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ys()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=32,gs=768;class b{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new b("")}function E(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function oe(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new b(n.pieces_,e)}function Ti(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Qa(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ri(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ki(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new b(e,0)}function x(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof b)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new b(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function W(n,e){const t=E(n),s=E(e);if(t===null)return e;if(t===s)return W(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function xi(n,e){if(oe(n)!==oe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function z(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(oe(n)>oe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Xa{constructor(e,t){this.errorPrefix_=t,this.parts_=Ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Tt(this.parts_[s]);Ai(this)}}function Ja(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Tt(e),Ai(n)}function Za(n){const e=n.parts_.pop();n.byteLength_-=Tt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ai(n){if(n.byteLength_>gs)throw new Error(n.errorPrefix_+"has a key path longer than "+gs+" bytes ("+n.byteLength_+").");if(n.parts_.length>_s)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_s+") or object contains a cycle "+de(n))}function de(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ni{static getInstance(){return new Cn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1e3,el=60*5*1e3,ys=30*1e3,tl=1.3,nl=3e4,sl="server_kill",vs=3;class Q extends Si{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Q.nextPersistentConnectionId_++,this.log_=et("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pe,this.maxReconnectDelay_=el,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(k(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Nt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Q.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ee(e,"w")){const s=be(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();H(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ys)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$r(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+k(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):sn("Unrecognized action received from server: "+k(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nl&&(this.reconnectDelay_=Pe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Q.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new Ka(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{H(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(sl)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&H(d),c())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yn(this.interruptReasons_)&&(this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>gn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new b(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vs&&(this.reconnectDelay_=ys,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+si.replace(/\./g,"-")]=1,Ys()?e["framework.cordova"]=1:Lr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pt.getInstance().currentlyOnline();return Yn(this.interruptReasons_)&&e}}Q.nextPersistentConnectionId_=0;Q.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(Ie,e),i=new y(Ie,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt;class Di extends Rt{static get __EMPTY_NODE(){return rt}static set __EMPTY_NODE(e){rt=e}compare(e,t){return ke(e.name,t.name)}isDefinedOn(e){throw Te("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(fe,rt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,rt)}toString(){return".key"}}const we=new Di;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class P{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??P.RED,this.left=i??U.EMPTY_NODE,this.right=r??U.EMPTY_NODE}copy(e,t,s,i,r){return new P(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return U.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return U.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}P.RED=!0;P.BLACK=!1;class il{copy(e,t,s,i,r){return this}insert(e,t,s){return new P(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class U{constructor(e,t=U.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new U(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,P.BLACK,null,null))}remove(e){return new U(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,P.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ot(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ot(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ot(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ot(this.root_,null,this.comparator_,!0,e)}}U.EMPTY_NODE=new il;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e){return ke(n.name,e.name)}function wn(n,e){return ke(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;function ol(n){on=n}const Pi=function(n){return typeof n=="number"?"number:"+li(n):"string:"+n},Oi=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ee(e,".sv"),"Priority must be a string or number.")}else p(n===on||n.isEmpty(),"priority of unexpected type.");p(n===on||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class D{static set __childrenNodeConstructor(e){Es=e}static get __childrenNodeConstructor(){return Es}constructor(e,t=D.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oi(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new D(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:E(e)===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:D.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=E(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||oe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,D.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=li(this.value_):e+=this.value_,this.lazyHash_=ri(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===D.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof D.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=D.VALUE_TYPE_ORDER.indexOf(t),r=D.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}D.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi,Li;function al(n){Mi=n}function ll(n){Li=n}class cl extends Rt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ke(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(fe,new D("[PRIORITY-POST]",Li))}makePost(e,t){const s=Mi(e);return new y(t,new D("[PRIORITY-POST]",s))}toString(){return".priority"}}const T=new cl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=Math.log(2);class hl{constructor(e){const t=r=>parseInt(Math.log(r)/dl,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mt=function(n,e,t,s){n.sort(e);const i=function(c,l){const h=l-c;let d,u;if(h===0)return null;if(h===1)return d=n[c],u=t?t(d):d,new P(u,d.node,P.BLACK,null,null);{const f=parseInt(h/2,10)+c,m=i(c,f),g=i(f+1,l);return d=n[f],u=t?t(d):d,new P(u,d.node,P.BLACK,m,g)}},r=function(c){let l=null,h=null,d=n.length;const u=function(m,g){const w=d-m,A=d;d-=m;const L=i(w+1,A),Y=n[w],wr=t?t(Y):Y;f(new P(wr,Y.node,g,null,L))},f=function(m){l?(l.left=m,l=m):(h=m,l=m)};for(let m=0;m<c.count;++m){const g=c.nextBitIsOne(),w=Math.pow(2,c.count-(m+1));g?u(w,P.BLACK):(u(w,P.BLACK),u(w,P.RED))}return h},o=new hl(n.length),a=r(o);return new U(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;const ye={};class K{static get Default(){return p(ye&&T,"ChildrenNode.ts has not been loaded"),qt=qt||new K({".priority":ye},{".priority":T}),qt}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=be(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof U?t:null}hasIndex(e){return ee(this.indexSet_,e.toString())}addIndex(e,t){p(e!==we,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=mt(s,e.getCompare()):a=ye;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new K(h,l)}addToIndexes(e,t){const s=ct(this.indexes_,(i,r)=>{const o=be(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===ye)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(y.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mt(a,o.getCompare())}else return ye;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new y(e.name,a))),c.insert(e,e.node)}});return new K(s,this.indexSet_)}removeFromIndexes(e,t){const s=ct(this.indexes_,i=>{if(i===ye)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new K(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe;class _{static get EMPTY_NODE(){return Oe||(Oe=new _(new U(wn),null,K.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Oi(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oe}updatePriority(e){return this.children_.isEmpty()?this:new _(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Oe:t}}getChild(e){const t=E(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Oe:this.priorityNode_;return new _(i,o,r)}}updateChild(e,t){const s=E(e);if(s===null)return t;{p(E(e)!==".priority"||oe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(S(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(T,(o,a)=>{t[o]=a.val(e),s++,r&&_.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pi(this.getPriority().val())+":"),this.forEachChild(T,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ri(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tt?-1:0}withIndex(e){if(e===we||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===we||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(T),i=t.getIterator(T);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===we?null:this.indexMap_.get(e.toString())}}_.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ul extends _{constructor(){super(new U(wn),_.EMPTY_NODE,K.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _.EMPTY_NODE}isEmpty(){return!1}}const tt=new ul;Object.defineProperties(y,{MIN:{value:new y(Ie,_.EMPTY_NODE)},MAX:{value:new y(fe,tt)}});Di.__EMPTY_NODE=_.EMPTY_NODE;D.__childrenNodeConstructor=_;ol(tt);ll(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=!0;function O(n,e=null){if(n===null)return _.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new D(t,O(e))}if(!(n instanceof Array)&&fl){const t=[];let s=!1;if(V(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=O(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new y(o,c)))}}),t.length===0)return _.EMPTY_NODE;const r=mt(t,rl,o=>o.name,wn);if(s){const o=mt(t,T.getCompare());return new _(r,O(e),new K({".priority":o},{".priority":T}))}else return new _(r,O(e),K.Default)}else{let t=_.EMPTY_NODE;return V(n,(s,i)=>{if(ee(n,s)&&s.substring(0,1)!=="."){const r=O(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(O(e))}}al(O);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Rt{constructor(e){super(),this.indexPath_=e,p(!v(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ke(e.name,t.name):r}makePost(e,t){const s=O(e),i=_.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=_.EMPTY_NODE.updateChild(this.indexPath_,tt);return new y(fe,e)}toString(){return Ri(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Rt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ke(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=O(e);return new y(t,s)}toString(){return".value"}}const _l=new ml;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){return{type:"value",snapshotNode:n}}function Se(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ge(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function qe(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function gl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Ge(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Se(t,s)):o.trackChildChange(qe(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(T,(i,r)=>{t.hasChild(i)||s.trackChildChange(Ge(i,r))}),t.isLeafNode()||t.forEachChild(T,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(qe(i,r,o))}else s.trackChildChange(Se(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.indexedFilter_=new bn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=je.getStartPost_(e),this.endPost_=je.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new y(t,s))||(s=_.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=_.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_.EMPTY_NODE);const r=this;return t.forEachChild(T,(o,a)=>{r.matches(new y(o,a))||(i=i.updateImmediateChild(o,_.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new je(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new y(t,s))||(s=_.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=_.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=_.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(_.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,_.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new y(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,c);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(qe(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Ge(t,d));const g=a.updateImmediateChild(t,_.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(Se(u.name,u.node)),g.updateImmediateChild(u.name,u.node)):g}}else return s.isEmpty()?e:h&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Ge(l.name,l.node)),r.trackChildChange(Se(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,_.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=T}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ie}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===T}copy(){const e=new In;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vl(n){return n.loadsAllData()?new bn(n.getIndex()):n.hasLimit()?new yl(n):new je(n)}function Cs(n){const e={};if(n.isDefault())return e;let t;if(n.index_===T?t="$priority":n.index_===_l?t="$value":n.index_===we?t="$key":(p(n.index_ instanceof pl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=k(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=k(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+k(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=k(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+k(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ws(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==T&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Si{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=et("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_t.getListenId_(e,s),a={};this.listens_[o]=a;const c=Cs(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let d=h;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,s),be(this.listens_,o)===a){let u;l?l===401?u="permission_denied":u="rest_error:"+l:u="ok",i(u,null)}})}unlisten(e,t){const s=_t.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Cs(e._queryParams),s=e._path.toString(),i=new Nt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=He(a.responseText)}catch{H("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&H("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.rootNode_=_.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return{value:null,children:new Map}}function Bi(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=E(e);n.children.has(s)||n.children.set(s,gt());const i=n.children.get(s);e=S(e),Bi(i,e,t)}}function an(n,e,t){n.value!==null?t(e,n.value):Cl(n,(s,i)=>{const r=new b(e.toString()+"/"+s);an(i,r,t)})}function Cl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&V(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=10*1e3,bl=30*1e3,Il=5*60*1e3;class Sl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wl(e);const s=bs+(bl-bs)*Math.random();Fe(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;V(e,(i,r)=>{r>0&&ee(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Fe(this.reportStats_.bind(this),Math.floor(Math.random()*2*Il))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(G||(G={}));function Wi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=G.ACK_USER_WRITE,this.source=Wi()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new b(e));return new yt(C(),t,this.revert)}}else return p(E(this.path)===e,"operationForChild called for unrelated child."),new yt(S(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.source=e,this.path=t,this.type=G.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new Ye(this.source,C()):new Ye(this.source,S(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=G.OVERWRITE}operationForChild(e){return v(this.path)?new pe(this.source,C(),this.snap.getImmediateChild(e)):new pe(this.source,S(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=G.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new b(e));return t.isEmpty()?null:t.value?new pe(this.source,C(),t.value):new Ke(this.source,C(),t)}else return p(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ke(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=E(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Tl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gl(o.childName,o.snapshotNode))}),Me(n,i,"child_removed",e,s,t),Me(n,i,"child_added",e,s,t),Me(n,i,"child_moved",r,s,t),Me(n,i,"child_changed",e,s,t),Me(n,i,"value",e,s,t),i}function Me(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>kl(n,a,c)),o.forEach(a=>{const c=Rl(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Rl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function kl(n,e,t){if(e.childName==null||t.childName==null)throw Te("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,e){return{eventCache:n,serverCache:e}}function Be(n,e,t,s){return kt(new ae(e,t,s),n.serverCache)}function Ui(n,e,t,s){return kt(n.eventCache,new ae(e,t,s))}function vt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function me(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;const xl=()=>(jt||(jt=new U(ma)),jt);class N{static fromObject(e){let t=new N(null);return V(e,(s,i)=>{t=t.set(new b(s),i)}),t}constructor(e,t=xl()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=E(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(S(e),t);return r!=null?{path:x(new b(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=E(e),s=this.children.get(t);return s!==null?s.subtree(S(e)):new N(null)}}set(e,t){if(v(e))return new N(t,this.children);{const s=E(e),r=(this.children.get(s)||new N(null)).set(S(e),t),o=this.children.insert(s,r);return new N(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=E(e),s=this.children.get(t);if(s){const i=s.remove(S(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=E(e),s=this.children.get(t);return s?s.get(S(e)):null}}setTree(e,t){if(v(e))return t;{const s=E(e),r=(this.children.get(s)||new N(null)).setTree(S(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new N(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(x(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(S(e),x(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=E(e),r=this.children.get(i);return r?r.foreachOnPath_(S(e),x(t,i),s):new N(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(x(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.writeTree_=e}static empty(){return new q(new N(null))}}function We(n,e,t){if(v(e))return new q(new N(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=W(i,e);return r=r.updateChild(o,t),new q(n.writeTree_.set(i,r))}else{const i=new N(t),r=n.writeTree_.setTree(e,i);return new q(r)}}}function Is(n,e,t){let s=n;return V(t,(i,r)=>{s=We(s,x(e,i),r)}),s}function Ss(n,e){if(v(e))return q.empty();{const t=n.writeTree_.setTree(e,new N(null));return new q(t)}}function ln(n,e){return _e(n,e)!=null}function _e(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(W(t.path,e)):null}function Ns(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(T,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function ie(n,e){if(v(e))return n;{const t=_e(n,e);return t!=null?new q(new N(t)):new q(n.writeTree_.subtree(e))}}function cn(n){return n.writeTree_.isEmpty()}function Ne(n,e){return Hi(C(),n.writeTree_,e)}function Hi(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Hi(x(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(x(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){return Gi(e,n)}function Al(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=We(n.visibleWrites,e,t)),n.lastWriteId=s}function Dl(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Pl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ol(a,s.path)?i=!1:z(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Ml(n),!0;if(s.snap)n.visibleWrites=Ss(n.visibleWrites,s.path);else{const a=s.children;V(a,c=>{n.visibleWrites=Ss(n.visibleWrites,x(s.path,c))})}return!0}else return!1}function Ol(n,e){if(n.snap)return z(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&z(x(n.path,t),e))return!0;return!1}function Ml(n){n.visibleWrites=Vi(n.allWrites,Ll,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ll(n){return n.visible}function Vi(n,e,t){let s=q.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)z(t,o)?(a=W(t,o),s=We(s,a,r.snap)):z(o,t)&&(a=W(o,t),s=We(s,C(),r.snap.getChild(a)));else if(r.children){if(z(t,o))a=W(t,o),s=Is(s,a,r.children);else if(z(o,t))if(a=W(o,t),v(a))s=Is(s,C(),r.children);else{const c=be(r.children,E(a));if(c){const l=c.getChild(S(a));s=We(s,C(),l)}}}else throw Te("WriteRecord should have .snap or .children")}}return s}function $i(n,e,t,s,i){if(!s&&!i){const r=_e(n.visibleWrites,e);if(r!=null)return r;{const o=ie(n.visibleWrites,e);if(cn(o))return t;if(t==null&&!ln(o,C()))return null;{const a=t||_.EMPTY_NODE;return Ne(o,a)}}}else{const r=ie(n.visibleWrites,e);if(!i&&cn(r))return t;if(!i&&t==null&&!ln(r,C()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(z(l.path,e)||z(e,l.path))},a=Vi(n.allWrites,o,e),c=t||_.EMPTY_NODE;return Ne(a,c)}}}function Fl(n,e,t){let s=_.EMPTY_NODE;const i=_e(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(T,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ie(n.visibleWrites,e);return t.forEachChild(T,(o,a)=>{const c=Ne(ie(r,new b(o)),a);s=s.updateImmediateChild(o,c)}),Ns(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ie(n.visibleWrites,e);return Ns(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Bl(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=x(e,t);if(ln(n.visibleWrites,r))return null;{const o=ie(n.visibleWrites,r);return cn(o)?i.getChild(t):Ne(o,i.getChild(t))}}function Wl(n,e,t,s){const i=x(e,t),r=_e(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ie(n.visibleWrites,i);return Ne(o,s.getNode().getImmediateChild(t))}else return null}function Ul(n,e){return _e(n.visibleWrites,e)}function Hl(n,e,t,s,i,r,o){let a;const c=ie(n.visibleWrites,e),l=_e(c,C());if(l!=null)a=l;else if(t!=null)a=Ne(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=u.getNext();for(;f&&h.length<i;)d(f,s)!==0&&h.push(f),f=u.getNext();return h}else return[]}function Vl(){return{visibleWrites:q.empty(),allWrites:[],lastWriteId:-1}}function Et(n,e,t,s){return $i(n.writeTree,n.treePath,e,t,s)}function Tn(n,e){return Fl(n.writeTree,n.treePath,e)}function Ts(n,e,t,s){return Bl(n.writeTree,n.treePath,e,t,s)}function Ct(n,e){return Ul(n.writeTree,x(n.treePath,e))}function $l(n,e,t,s,i,r){return Hl(n.writeTree,n.treePath,e,t,s,i,r)}function Rn(n,e,t){return Wl(n.writeTree,n.treePath,e,t)}function zi(n,e){return Gi(x(n.treePath,e),n.writeTree)}function Gi(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,qe(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ge(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Se(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,qe(s,e.snapshotNode,i.oldSnap));else throw Te("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const qi=new Gl;class kn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ae(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:me(this.viewCache_),r=$l(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){return{filter:n}}function jl(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Yl(n,e,t,s,i){const r=new zl;let o,a;if(t.type===G.OVERWRITE){const l=t;l.source.fromUser?o=dn(n,e,l.path,l.snap,s,i,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!v(l.path),o=wt(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===G.MERGE){const l=t;l.source.fromUser?o=Ql(n,e,l.path,l.children,s,i,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=hn(n,e,l.path,l.children,s,i,a,r))}else if(t.type===G.ACK_USER_WRITE){const l=t;l.revert?o=Zl(n,e,l.path,s,i,r):o=Xl(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===G.LISTEN_COMPLETE)o=Jl(n,e,t.path,s,r);else throw Te("Unknown operation type: "+t.type);const c=r.getChanges();return Kl(e,o,c),{viewCache:o,changes:c}}function Kl(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=vt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Fi(vt(e)))}}function ji(n,e,t,s,i,r){const o=e.eventCache;if(Ct(s,t)!=null)return e;{let a,c;if(v(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=me(e),h=l instanceof _?l:_.EMPTY_NODE,d=Tn(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=Et(s,me(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=E(t);if(l===".priority"){p(oe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Ts(s,t,h,c);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=S(t);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const u=Ts(s,t,o.getNode(),c);u!=null?d=o.getNode().getImmediateChild(l).updateChild(h,u):d=o.getNode().getImmediateChild(l)}else d=Rn(s,l,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),l,d,h,i,r):a=o.getNode()}}return Be(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function wt(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(v(t))l=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=h.updateFullNode(c.getNode(),f,null)}else{const f=E(t);if(!c.isCompleteForPath(t)&&oe(t)>1)return e;const m=S(t),w=c.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?l=h.updatePriority(c.getNode(),w):l=h.updateChild(c.getNode(),f,w,m,qi,null)}const d=Ui(e,l,c.isFullyInitialized()||v(t),h.filtersNodes()),u=new kn(i,d,r);return ji(n,d,t,i,u,a)}function dn(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const h=new kn(i,e,r);if(v(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Be(e,l,!0,n.filter.filtersNodes());else{const d=E(t);if(d===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Be(e,l,a.isFullyInitialized(),a.isFiltered());else{const u=S(t),f=a.getNode().getImmediateChild(d);let m;if(v(u))m=s;else{const g=h.getCompleteChild(d);g!=null?Ti(u)===".priority"&&g.getChild(ki(u)).isEmpty()?m=g:m=g.updateChild(u,s):m=_.EMPTY_NODE}if(f.equals(m))c=e;else{const g=n.filter.updateChild(a.getNode(),d,m,u,h,o);c=Be(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Rs(n,e){return n.eventCache.isCompleteForChild(e)}function Ql(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const h=x(t,c);Rs(e,E(h))&&(a=dn(n,a,h,l,i,r,o))}),s.foreach((c,l)=>{const h=x(t,c);Rs(e,E(h))||(a=dn(n,a,h,l,i,r,o))}),a}function ks(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function hn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;v(t)?l=s:l=new N(null).setTree(t,s);const h=e.serverCache.getNode();return l.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=ks(n,f,u);c=wt(n,c,new b(d),m,i,r,o,a)}}),l.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),g=ks(n,m,u);c=wt(n,c,new b(d),g,i,r,o,a)}}),c}function Xl(n,e,t,s,i,r,o){if(Ct(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(v(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return wt(n,e,t,c.getNode().getChild(t),i,r,a,o);if(v(t)){let l=new N(null);return c.getNode().forEachChild(we,(h,d)=>{l=l.set(new b(h),d)}),hn(n,e,t,l,i,r,a,o)}else return e}else{let l=new N(null);return s.foreach((h,d)=>{const u=x(t,h);c.isCompleteForPath(u)&&(l=l.set(h,c.getNode().getChild(u)))}),hn(n,e,t,l,i,r,a,o)}}function Jl(n,e,t,s,i){const r=e.serverCache,o=Ui(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return ji(n,o,t,s,qi,i)}function Zl(n,e,t,s,i,r){let o;if(Ct(s,t)!=null)return e;{const a=new kn(s,e,i),c=e.eventCache.getNode();let l;if(v(t)||E(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Et(s,me(e));else{const d=e.serverCache.getNode();p(d instanceof _,"serverChildren would be complete if leaf node"),h=Tn(s,d)}h=h,l=n.filter.updateFullNode(c,h,r)}else{const h=E(t);let d=Rn(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?l=n.filter.updateChild(c,h,d,S(t),a,r):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(c,h,_.EMPTY_NODE,S(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Et(s,me(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ct(s,C())!=null,Be(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bn(s.getIndex()),r=vl(s);this.processor_=ql(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(_.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(_.EMPTY_NODE,a.getNode(),null),h=new ae(c,o.isFullyInitialized(),i.filtersNodes()),d=new ae(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=kt(d,h),this.eventGenerator_=new Nl(this.query_)}get query(){return this.query_}}function tc(n){return n.viewCache_.serverCache.getNode()}function nc(n){return vt(n.viewCache_)}function sc(n,e){const t=me(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(E(e)).isEmpty())?t.getChild(e):null}function xs(n){return n.eventRegistrations_.length===0}function ic(n,e){n.eventRegistrations_.push(e)}function As(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ds(n,e,t,s){e.type===G.MERGE&&e.source.queryId!==null&&(p(me(n.viewCache_),"We should always have a full cache before handling merges"),p(vt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Yl(n.processor_,i,e,t,s);return jl(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Yi(n,r.changes,r.viewCache.eventCache.getNode(),null)}function rc(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(T,(r,o)=>{s.push(Se(r,o))}),t.isFullyInitialized()&&s.push(Fi(t.getNode())),Yi(n,s,t.getNode(),e)}function Yi(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Tl(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt;class Ki{constructor(){this.views=new Map}}function oc(n){p(!bt,"__referenceConstructor has already been defined"),bt=n}function ac(){return p(bt,"Reference.ts has not been loaded"),bt}function lc(n){return n.views.size===0}function xn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),Ds(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ds(o,e,t,s));return r}}function Qi(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Et(t,i?s:null),c=!1;a?c=!0:s instanceof _?(a=Tn(t,s),c=!1):(a=_.EMPTY_NODE,c=!1);const l=kt(new ae(a,c,!1),new ae(s,i,!1));return new ec(e,l)}return o}function cc(n,e,t,s,i,r){const o=Qi(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ic(o,t),rc(o,t)}function dc(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=le(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(As(l,t,s)),xs(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(As(c,t,s)),xs(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!le(n)&&r.push(new(ac())(e._repo,e._path)),{removed:r,events:o}}function Xi(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function re(n,e){let t=null;for(const s of n.views.values())t=t||sc(s,e);return t}function Ji(n,e){if(e._queryParams.loadsAllData())return At(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Zi(n,e){return Ji(n,e)!=null}function le(n){return At(n)!=null}function At(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It;function hc(n){p(!It,"__referenceConstructor has already been defined"),It=n}function uc(){return p(It,"Reference.ts has not been loaded"),It}let fc=1;class Ps{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=Vl(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function er(n,e,t,s,i){return Al(n.pendingWriteTree_,e,t,s,i),i?st(n,new pe(Wi(),e,t)):[]}function ue(n,e,t=!1){const s=Dl(n.pendingWriteTree_,e);if(Pl(n.pendingWriteTree_,e)){let r=new N(null);return s.snap!=null?r=r.set(C(),!0):V(s.children,o=>{r=r.set(new b(o),!0)}),st(n,new yt(s.path,r,t))}else return[]}function nt(n,e,t){return st(n,new pe(Sn(),e,t))}function pc(n,e,t){const s=N.fromObject(t);return st(n,new Ke(Sn(),e,s))}function mc(n,e){return st(n,new Ye(Sn(),e))}function _c(n,e,t){const s=Dn(n,t);if(s){const i=Pn(s),r=i.path,o=i.queryId,a=W(r,e),c=new Ye(Nn(o),a);return On(n,r,c)}else return[]}function tr(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Zi(o,e))){const c=dc(o,e,t,s);lc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const h=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,f)=>le(f));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=Ec(u);for(let m=0;m<f.length;++m){const g=f[m],w=g.query,A=rr(n,g);n.listenProvider_.startListening(Ue(w),Qe(n,w),A.hashFn,A.onComplete)}}}!d&&l.length>0&&!s&&(h?n.listenProvider_.stopListening(Ue(e),null):l.forEach(u=>{const f=n.queryToTagMap.get(Dt(u));n.listenProvider_.stopListening(Ue(u),f)}))}Cc(n,l)}return a}function nr(n,e,t,s){const i=Dn(n,s);if(i!=null){const r=Pn(i),o=r.path,a=r.queryId,c=W(o,e),l=new pe(Nn(a),c,t);return On(n,o,l)}else return[]}function gc(n,e,t,s){const i=Dn(n,s);if(i){const r=Pn(i),o=r.path,a=r.queryId,c=W(o,e),l=N.fromObject(t),h=new Ke(Nn(a),c,l);return On(n,o,h)}else return[]}function yc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,f)=>{const m=W(u,i);r=r||re(f,m),o=o||le(f)});let a=n.syncPointTree_.get(i);a?(o=o||le(a),r=r||re(a,C())):(a=new Ki,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=_.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const g=re(m,C());g&&(r=r.updateImmediateChild(f,g))}));const l=Zi(a,e);if(!l&&!e._queryParams.loadsAllData()){const u=Dt(e);p(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=wc();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const h=xt(n.pendingWriteTree_,i);let d=cc(a,e,t,h,r,c);if(!l&&!o&&!s){const u=Ji(a,e);d=d.concat(bc(n,e,u))}return d}function An(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=W(o,e),l=re(a,c);if(l)return l});return $i(i,e,r,t,!0)}function vc(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,h)=>{const d=W(l,t);s=s||re(h,d)});let i=n.syncPointTree_.get(t);i?s=s||re(i,C()):(i=new Ki,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ae(s,!0,!1):null,a=xt(n.pendingWriteTree_,e._path),c=Qi(i,e,a,r?o.getNode():_.EMPTY_NODE,r);return nc(c)}function st(n,e){return sr(e,n.syncPointTree_,null,xt(n.pendingWriteTree_,C()))}function sr(n,e,t,s){if(v(n.path))return ir(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=re(i,C()));let r=[];const o=E(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=zi(s,o);r=r.concat(sr(a,c,l,h))}return i&&(r=r.concat(xn(i,n,s,t))),r}}function ir(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=re(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=zi(s,o),h=n.operationForChild(o);h&&(r=r.concat(ir(h,a,c,l)))}),i&&(r=r.concat(xn(i,n,s,t))),r}function rr(n,e){const t=e.query,s=Qe(n,t);return{hashFn:()=>(tc(e)||_.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?_c(n,t._path,s):mc(n,t._path);{const r=ya(i,t);return tr(n,t,null,r)}}}}function Qe(n,e){const t=Dt(e);return n.queryToTagMap.get(t)}function Dt(n){return n._path.toString()+"$"+n._queryIdentifier}function Dn(n,e){return n.tagToQueryMap.get(e)}function Pn(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new b(n.substr(0,e))}}function On(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=xt(n.pendingWriteTree_,e);return xn(s,t,i,null)}function Ec(n){return n.fold((e,t,s)=>{if(t&&le(t))return[At(t)];{let i=[];return t&&(i=Xi(t)),V(s,(r,o)=>{i=i.concat(o)}),i}})}function Ue(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(uc())(n._repo,n._path):n}function Cc(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Dt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function wc(){return fc++}function bc(n,e,t){const s=e._path,i=Qe(n,e),r=rr(n,t),o=n.listenProvider_.startListening(Ue(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)p(!le(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,d)=>{if(!v(l)&&h&&le(h))return[At(h).query];{let u=[];return h&&(u=u.concat(Xi(h).map(f=>f.query))),V(d,(f,m)=>{u=u.concat(m)}),u}});for(let l=0;l<c.length;++l){const h=c[l];n.listenProvider_.stopListening(Ue(h),Qe(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Mn(t)}node(){return this.node_}}class Ln{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=x(this.path_,e);return new Ln(this.syncTree_,t)}node(){return An(this.syncTree_,this.path_)}}const Ic=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Os=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Sc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Nc(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Sc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Nc=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Tc=function(n,e,t,s){return Fn(e,new Ln(t,n),s)},or=function(n,e,t){return Fn(n,new Mn(e),t)};function Fn(n,e,t){const s=n.getPriority().val(),i=Os(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Os(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new D(a,O(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new D(i))),o.forEachChild(T,(a,c)=>{const l=Fn(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wn(n,e){let t=e instanceof b?e:new b(e),s=n,i=E(t);for(;i!==null;){const r=be(s.node.children,i)||{children:{},childCount:0};s=new Bn(i,s,r),t=S(t),i=E(t)}return s}function Ae(n){return n.node.value}function ar(n,e){n.node.value=e,un(n)}function lr(n){return n.node.childCount>0}function Rc(n){return Ae(n)===void 0&&!lr(n)}function Pt(n,e){V(n.node.children,(t,s)=>{e(new Bn(t,n,s))})}function cr(n,e,t,s){t&&e(n),Pt(n,i=>{cr(i,e,!0)})}function kc(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function it(n){return new b(n.parent===null?n.name:it(n.parent)+"/"+n.name)}function un(n){n.parent!==null&&xc(n.parent,n.name,n)}function xc(n,e,t){const s=Rc(t),i=ee(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,un(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,un(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=/[\[\].#$\/\u0000-\u001F\u007F]/,Dc=/[\[\].#$\u0000-\u001F\u007F]/,Yt=10*1024*1024,dr=function(n){return typeof n=="string"&&n.length!==0&&!Ac.test(n)},hr=function(n){return typeof n=="string"&&n.length!==0&&!Dc.test(n)},Pc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hr(n)},Oc=function(n,e,t,s){Un(mn(n,"value"),e,t)},Un=function(n,e,t){const s=t instanceof b?new Xa(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+de(s));if(typeof e=="function")throw new Error(n+"contains a function "+de(s)+" with contents = "+e.toString());if(oi(e))throw new Error(n+"contains "+e.toString()+" "+de(s));if(typeof e=="string"&&e.length>Yt/3&&Tt(e)>Yt)throw new Error(n+"contains a string greater than "+Yt+" utf8 bytes "+de(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(V(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!dr(o)))throw new Error(n+" contains an invalid key ("+o+") "+de(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ja(s,o),Un(n,a,s),Za(s)}),i&&r)throw new Error(n+' contains ".value" child '+de(s)+" in addition to actual children.")}},ur=function(n,e,t,s){if(!hr(t))throw new Error(mn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Mc=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ur(n,e,t)},Lc=function(n,e){if(E(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Fc=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Pc(t))throw new Error(mn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!xi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function j(n,e,t){fr(n,t),Wc(n,s=>z(s,e)||z(e,s))}function Wc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Uc(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Uc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Le&&F("event: "+t.toString()),xe(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="repo_interrupt",Vc=25;class $c{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gt(),this.transactionQueueTree_=new Bn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zc(n,e,t){if(n.stats_=vn(n.repoInfo_),n.forceRestClient_||wa())n.server_=new _t(n.repoInfo_,(s,i,r,o)=>{Ms(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ls(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{k(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Q(n.repoInfo_,e,(s,i,r,o)=>{Ms(n,s,i,r,o)},s=>{Ls(n,s)},s=>{qc(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ta(n.repoInfo_,()=>new Sl(n.stats_,n.server_)),n.infoData_=new El,n.infoSyncTree_=new Ps({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=nt(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vn(n,"connected",!1),n.serverSyncTree_=new Ps({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);j(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Gc(n){const t=n.infoData_.getNode(new b(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Hn(n){return Ic({timestamp:Gc(n)})}function Ms(n,e,t,s,i){n.dataUpdateCount++;const r=new b(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=ct(t,l=>O(l));o=gc(n.serverSyncTree_,r,c,i)}else{const c=O(t);o=nr(n.serverSyncTree_,r,c,i)}else if(s){const c=ct(t,l=>O(l));o=pc(n.serverSyncTree_,r,c)}else{const c=O(t);o=nt(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Mt(n,r)),j(n.eventQueue_,a,o)}function Ls(n,e){Vn(n,"connected",e),e===!1&&Kc(n)}function qc(n,e){V(e,(t,s)=>{Vn(n,t,s)})}function Vn(n,e,t){const s=new b("/.info/"+e),i=O(t);n.infoData_.updateSnapshot(s,i);const r=nt(n.infoSyncTree_,s,i);j(n.eventQueue_,s,r)}function pr(n){return n.nextWriteId_++}function jc(n,e,t){const s=vc(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=O(i).withIndex(e._queryParams.getIndex());yc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=nt(n.serverSyncTree_,e._path,r);else{const a=Qe(n.serverSyncTree_,e);o=nr(n.serverSyncTree_,e._path,r,a)}return j(n.eventQueue_,e._path,o),tr(n.serverSyncTree_,e,t,null,!0),r},i=>(Ot(n,"get for query "+k(e)+" failed: "+i),Promise.reject(new Error(i))))}function Yc(n,e,t,s,i){Ot(n,"set",{path:e.toString(),value:t,priority:s});const r=Hn(n),o=O(t,s),a=An(n.serverSyncTree_,e),c=or(o,a,r),l=pr(n),h=er(n.serverSyncTree_,e,c,l,!0);fr(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,f)=>{const m=u==="ok";m||H("set at "+e+" failed: "+u);const g=ue(n.serverSyncTree_,l,!m);j(n.eventQueue_,e,g),Xc(n,i,u,f)});const d=vr(n,e);Mt(n,d),j(n.eventQueue_,d,[])}function Kc(n){Ot(n,"onDisconnectEvents");const e=Hn(n),t=gt();an(n.onDisconnect_,C(),(i,r)=>{const o=Tc(i,r,n.serverSyncTree_,e);Bi(t,i,o)});let s=[];an(t,C(),(i,r)=>{s=s.concat(nt(n.serverSyncTree_,i,r));const o=vr(n,i);Mt(n,o)}),n.onDisconnect_=gt(),j(n.eventQueue_,C(),s)}function Qc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Hc)}function Ot(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),F(t,...e)}function Xc(n,e,t,s){e&&xe(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function mr(n,e,t){return An(n.serverSyncTree_,e,t)||_.EMPTY_NODE}function $n(n,e=n.transactionQueueTree_){if(e||Lt(n,e),Ae(e)){const t=gr(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Jc(n,it(e),t)}else lr(e)&&Pt(e,t=>{$n(n,t)})}function Jc(n,e,t){const s=t.map(l=>l.currentWriteId),i=mr(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const h=t[l];p(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=W(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Ot(n,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(ue(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Lt(n,Wn(n.transactionQueueTree_,e)),$n(n,n.transactionQueueTree_),j(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)xe(d[u])}else{if(l==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{H("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=l}Mt(n,e)}},o)}function Mt(n,e){const t=_r(n,e),s=it(t),i=gr(n,t);return Zc(n,i,s),s}function Zc(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=W(t,c.path);let h=!1,d;if(p(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(ue(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Vc)h=!0,d="maxretry",i=i.concat(ue(n.serverSyncTree_,c.currentWriteId,!0));else{const u=mr(n,c.path,o);c.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Un("transaction failed: Data returned ",f,c.path);let m=O(f);typeof f=="object"&&f!=null&&ee(f,".priority")||(m=m.updatePriority(u.getPriority()));const w=c.currentWriteId,A=Hn(n),L=or(m,u,A);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=L,c.currentWriteId=pr(n),o.splice(o.indexOf(w),1),i=i.concat(er(n.serverSyncTree_,c.path,L,c.currentWriteId,c.applyLocally)),i=i.concat(ue(n.serverSyncTree_,w,!0))}else h=!0,d="nodata",i=i.concat(ue(n.serverSyncTree_,c.currentWriteId,!0))}j(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Lt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)xe(s[a]);$n(n,n.transactionQueueTree_)}function _r(n,e){let t,s=n.transactionQueueTree_;for(t=E(e);t!==null&&Ae(s)===void 0;)s=Wn(s,t),e=S(e),t=E(e);return s}function gr(n,e){const t=[];return yr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function yr(n,e,t){const s=Ae(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Pt(e,i=>{yr(n,i,t)})}function Lt(n,e){const t=Ae(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ar(e,t.length>0?t:void 0)}Pt(e,s=>{Lt(n,s)})}function vr(n,e){const t=it(_r(n,e)),s=Wn(n.transactionQueueTree_,e);return kc(s,i=>{Kt(n,i)}),Kt(n,s),cr(s,i=>{Kt(n,i)}),t}function Kt(n,e){const t=Ae(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ue(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ar(e,void 0):t.length=r+1,j(n.eventQueue_,it(e),i);for(let o=0;o<s.length;o++)xe(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function td(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):H(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fs=function(n,e){const t=nd(n),s=t.namespace;t.domain==="firebase.com"&&Z(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Z("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||fa();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new b(t.pathString)}},nd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(i=ed(n.substring(h,d)));const u=td(n.substring(Math.min(n.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+k(this.snapshot.exportVal())}}class id{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:Ti(this._path)}get ref(){return new te(this._repo,this._path)}get _queryIdentifier(){const e=ws(this._queryParams),t=gn(e);return t==="{}"?"default":t}get _queryObject(){return ws(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof zn))return!1;const t=this._repo===e._repo,s=xi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qa(this._path)}}class te extends zn{constructor(e,t){super(e,t,new In,!1)}get parent(){const e=ki(this._path);return e===null?null:new te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xe{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new b(e),s=St(this.ref,e);return new Xe(this._node.getChild(t),s,T)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xe(i,St(this.ref,s),T)))}hasChild(e){const t=new b(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ft(n,e){return n=Re(n),n._checkNotDeleted("ref"),e!==void 0?St(n._root,e):n._root}function St(n,e){return n=Re(n),E(n._path)===null?Mc("child","path",e):ur("child","path",e),new te(n._repo,x(n._path,e))}function Er(n,e){n=Re(n),Lc("set",n._path),Oc("set",e,n._path);const t=new Nt;return Yc(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Cr(n){n=Re(n);const e=new rd(()=>{}),t=new Gn(e);return jc(n._repo,n,t).then(s=>new Xe(s,new te(n._repo,n._path),n._queryParams.getIndex()))}class Gn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new sd("value",this,new Xe(e.snapshotNode,new te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new id(this,e,t):null}matches(e){return e instanceof Gn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}oc(te);hc(te);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="FIREBASE_DATABASE_EMULATOR_HOST",fn={};let ad=!1;function ld(n,e,t,s){n.repoInfo_=new yi(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function cd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Z("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fs(r,i),a=o.repoInfo,c;typeof process<"u"&&is&&(c=is[od]),c?(r=`http://${c}?ns=${a.namespace}`,o=Fs(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new Ia(n.name,n.options,e);Fc("Invalid Firebase Database URL",o),v(o.path)||Z("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hd(a,n,l,new ba(n,t));return new ud(h,n)}function dd(n,e){const t=fn[e];(!t||t[n.key]!==n)&&Z(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Qc(n),delete t[n.key]}function hd(n,e,t,s){let i=fn[e.name];i||(i={},fn[e.name]=i);let r=i[n.toURLString()];return r&&Z("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $c(n,ad,t,s),i[n.toURLString()]=r,r}class ud{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new te(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Z("Cannot call "+e+" on a deleted database.")}}function fd(n=Qo(),e){const t=Go(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Pr("database");s&&pd(t,...s)}return t}function pd(n,e,t,s={}){n=Re(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&dt(s,r.repoInfo_.emulatorOptions))return;Z("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Z('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new at(at.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Or(s.mockUserToken,n.app.options.projectId);o=new at(a)}ld(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){aa(Ko),ut(new Ve("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ee(rs,os,n),Ee(rs,os,"esm2017")}Q.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Q.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};md();var _d="firebase",gd="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(_d,gd,"app");const yd={apiKey:"AIzaSyCtDbxHlTC-9UqaQWrS-HMETfV5pakVf3o",authDomain:"water-tracker-6f8ca.firebaseapp.com",databaseURL:"https://water-tracker-6f8ca-default-rtdb.europe-west1.firebasedatabase.app",projectId:"water-tracker-6f8ca",storageBucket:"water-tracker-6f8ca.firebasestorage.app",messagingSenderId:"504549086275",appId:"1:504549086275:web:8e8de9603d52a80f9930f6",measurementId:"G-EQSDZGL49G"},vd=ei(yd),Bt=fd(vd);async function Ed(){return(await Cr(St(Ft(Bt),"cashEntries"))).val()}function Cd(){const n=document.createElement("div");return n.className="loading-message",n.textContent="Загрузка данных...",document.body.appendChild(n),n}const wd=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40mm" height="30mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 4000 3000"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_2163097661776">
   <polygon fill="#ffffff" points="145.5,2155.43 1887.05,221.28 2261.4,645.49 1370.11,1634.9 2137.33,1634.9 2640.94,1075.58 3020.7,1505.91 2435.85,2155.43 "/>
   <polygon fill="#ffffff" points="3138.57,1939.54 2435.85,2719.98 3841.3,2719.98 "/>
   <polygon fill="#ffffff" fill-rule="nonzero" points="503.85,2792.85 417.74,2792.85 417.74,2719.41 152.68,2719.41 152.68,2399.68 247.06,2399.68 247.06,2659.16 373.9,2659.16 373.9,2399.68 468.27,2399.68 468.27,2659.16 503.85,2659.16 "/>
   <polygon id="_1" fill="#ffffff" fill-rule="nonzero" points="869.62,2719.41 775.25,2719.41 775.25,2577.8 647.37,2577.8 647.37,2719.41 553,2719.41 553,2399.68 647.37,2399.68 647.37,2516.67 775.25,2516.67 775.25,2399.68 869.62,2399.68 "/>
   <polygon id="_2" fill="#ffffff" fill-rule="nonzero" points="1270.88,2719.41 1178.06,2719.41 1178.06,2508.75 1034.28,2719.41 947.04,2719.41 947.04,2399.68 1039.87,2399.68 1039.87,2590.11 1172.82,2399.68 1270.88,2399.68 "/>
   <polygon id="_3" fill="#ffffff" fill-rule="nonzero" points="1670.68,2719.41 1577.87,2719.41 1577.87,2508.75 1434.08,2719.41 1346.85,2719.41 1346.85,2399.68 1439.67,2399.68 1439.67,2590.11 1572.62,2399.68 1670.68,2399.68 "/>
   <polygon id="_4" fill="#ffffff" fill-rule="nonzero" points="1818.84,2719.41 1818.84,2460.81 1707.98,2460.81 1707.98,2399.68 2024.08,2399.68 2024.08,2460.81 1913.21,2460.81 1913.21,2719.41 "/>
   <path fill="#ffffff" fill-rule="nonzero" d="M2421.32 2399.68l-125.13 255.59c-7.4,14.88 -15.73,26.61 -24.84,35.19 -9.12,8.57 -18.74,15.1 -28.79,19.57 -10.14,4.4 -20.2,7.4 -30.25,8.87 -10.06,1.54 -20.64,2.27 -31.72,2.27 -11.6,0 -25.09,-0.22 -40.39,-0.66 -15.38,-0.44 -25.61,-0.81 -30.85,-1.25l0 -67.58 5.76 0c1.55,0.3 3.86,0.59 7.05,1.03 3.17,0.44 7.21,0.8 12.11,1.24 4.04,0.3 8.42,0.59 13.06,0.81 4.72,0.29 9.03,0.44 12.9,0.44 11.17,0 21.83,-1.17 31.79,-3.59 9.97,-2.35 16.68,-6.45 20.03,-12.24l-138.8 -239.69 101.76 0 80.44 150.12 68.06 -150.12 97.81 0z"/>
  </g>
 </g>
</svg>`;function qn(){const n=document.createElement("header");n.className="header-container";const e=document.createElement("img");e.src="/logo.svg";const t=document.createElement("div");t.className="text-container";const s=document.createElement("h1");s.textContent="Трекер воды";const i=document.createElement("b");return i.textContent="отдел 308",n.innerHTML=wd,t.append(s,i),n.append(t),n}function R({type:n,text:e,className:t,onClick:s,disabled:i=!1}){const r=document.createElement("button");return r.type=n,r.textContent=e,r.className=t,r.disabled=i,s&&r.addEventListener("click",s),r}function B(n){document.body.style.overflow="",document.body.removeChild(n)}function ge(n){const e=document.createElement("button");e.className="close-btn",e.setAttribute("aria-label","Закрыть");const t=document.createElement("div"),s=document.createElement("div");return t.className="close-line",s.className="close-line",e.appendChild(t),e.appendChild(s),e.addEventListener("click",n),e}function bd(n){const e=[];function t(r){const[o,a,c]=r.split("-");return`${c}.${a}.${o}`}n.forEach(r=>{const a=[t(r.date),0,0];r.type==="deposit"&&(a[1]=r.amount),r.type==="expense"&&(a[2]=r.amount),e.push(a)});const s={};for(const[r,o,a]of e)s[r]||(s[r]=[r,0,0]),s[r][1]+=o,s[r][2]+=a;return Object.values(s).sort((r,o)=>{const a=c=>{const[l,h,d]=c.split(".");return new Date(`${d}-${h}-${l}`)};return a(r[0]).getTime()-a(o[0]).getTime()})}function Id(n){const e=bd(n);let t=0;function s(){return t<0?"red":t>0&&t<5?"orang":""}const i=document.createElement("div");i.className="modal-content";const r=document.createElement("div");return r.className="modal-table",e.forEach(o=>{t=t+o[1]-o[2];const a=document.createElement("div");a.className="modal-cash-up",a.innerHTML=`+ ${o[1].toFixed(2)}`;const c=document.createElement("div");c.className="modal-cash-date";const l=document.createElement("p");l.className="modal-data",l.innerText=o[0];const h=document.createElement("p");h.className=s(),h.innerText=`${t.toFixed(2)} BYN`,c.append(l,h);const d=document.createElement("div");d.className="modal-cash-lou",d.innerHTML=`- ${o[2].toFixed(2)}`;const u=document.createElement("div");u.className="line-modal",u.append(a,c,d),r.prepend(u)}),i.append(r),i}function Sd(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML=n;const o=ge(()=>{B(t)});return i.append(r,o),s.appendChild(i),s.appendChild(Id(e)),t.appendChild(s),t.addEventListener("click",a=>{a.target===t&&B(t)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&B(t)}),document.body.style.overflow="hidden",document.body.appendChild(t),t}function Nd(n){const e=document.createElement("div");return e.className="users",n.forEach(t=>{if(!t.isDelete){let s=function(){return r<0?"user-btn red":r>0&&r<5?"user-btn orang":"user-btn"};const i=t.transactions;let r=0;i.forEach(h=>{h.type==="deposit"?r+=h.amount:r-=h.amount});const o=document.createElement("div");o.className="user";const a=document.createElement("div");a.className="user-name";const c=R({type:"button",text:t.employeeName,className:s(),onClick:()=>{Sd(t.employeeName,i)}});a.appendChild(c);const l=document.createElement("div");r<0?l.className="cash red":r>0&&r<5?l.className="cash orang":l.className="cash",l.textContent=String(Math.round(r*100)/100),o.append(a,l),e.append(o)}}),e}function Td(n){const e=Object.entries(n).map(([o,a])=>({id:o,...a})),t=document.createElement("div");t.className="user-list";const s=document.createElement("div");s.className="text-content";const i=document.createElement("div");i.className="text-user",i.textContent="Сотрудник";const r=document.createElement("div");return r.className="text-cash",r.textContent="Баланс",s.append(i,r),t.append(s,Nd(e)),t}function Bs(n){const e=Ft(Bt,"admin/password");Er(e,n)}function Rd(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Сменить пароль";const r=ge(()=>{B(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const c=document.createElement("p");c.className="pass-title",c.textContent="Старай пароль:";const l=document.createElement("input");l.className="pass-input",l.placeholder="Пароль",l.type="password",l.required=!0,l.addEventListener("input",()=>{l.classList.remove("input-error"),l.setCustomValidity("")});const h=document.createElement("p");h.className="pass-title",h.textContent="Новый пароль:";const d=document.createElement("input");d.className="pass-input",d.placeholder="Новый пароль",d.type="password",d.required=!0,d.addEventListener("input",()=>{d.classList.remove("input-error"),d.setCustomValidity("")});const u=document.createElement("p");u.className="pass-title",u.textContent="Повторите пароль:";const f=document.createElement("input");f.className="pass-input",f.placeholder="Повторить пароль",f.type="password",f.required=!0,f.addEventListener("input",()=>{f.classList.remove("input-error"),f.setCustomValidity("")});const m=R({type:"button",text:"Сменить",className:"btn-user-del",onClick:()=>{if(l.value!==n){l.setCustomValidity("Неверный пароль"),l.reportValidity(),l.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}Bs(d.value),w(),M()}});a.append(c,l,h,d,u,f,m),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const g=A=>{if(A.key==="Escape"&&w(),A.key==="Enter"){if(l.value!==n){l.setCustomValidity("Неверный пароль"),l.reportValidity(),l.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}Bs(d.value),w(),M()}};function w(){document.removeEventListener("keydown",g),B(e)}document.addEventListener("keydown",g),e.addEventListener("click",A=>{A.target===e&&w()}),l.focus()}function Qt(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Выполнить вход";const r=ge(()=>{B(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const c=document.createElement("p");c.className="pass-title",c.textContent="Пароль:";const l=document.createElement("input");l.className="pass-input",l.placeholder="Пароль",l.type="password",l.required=!0,l.addEventListener("input",()=>{l.classList.remove("input-error"),l.setCustomValidity("")});const h=R({type:"button",text:"Войти",className:"btn-user-del",onClick:()=>{l.value===n?(sessionStorage.setItem("authorization","true"),f(),window.history.pushState({},"","/"),M()):(l.setCustomValidity("Неверный пароль"),l.reportValidity(),l.classList.add("input-error"))}}),d=R({type:"button",text:"Сменить пароль.",className:"btn-cheng-pass",onClick:()=>{B(e),Rd()}});a.append(c,l,h,d),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const u=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&(l.value===n?(sessionStorage.setItem("authorization","true"),f(),window.history.pushState({},"","/"),M()):(l.setCustomValidity("Неверный пароль"),l.reportValidity(),l.classList.add("input-error")))};function f(){document.removeEventListener("keydown",u),B(e)}document.addEventListener("keydown",u),e.addEventListener("click",m=>{m.target===e&&f()}),l.focus()}function kd(){const n=document.createElement("div");n.className="navigation-panel";const e=R({type:"button",text:"Войти",className:"btn-edit",onClick:()=>{Qt()}}),t=R({type:"button",text:"Редактировать",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(window.history.pushState({},"","/edit"),M()):Qt()}}),s=R({type:"button",text:"Списать воду",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(window.history.pushState({},"","/water"),M()):Qt()}}),i=R({type:"button",text:"Выйти из системы",className:"btn-edit",onClick:()=>{sessionStorage.removeItem("authorization"),M()}});return sessionStorage.getItem("authorization")?n.append(t,s,i):n.append(e),n}function xd(n){const e=document.createElement("div");return e.className="main-content",e.append(Td(n),kd()),e}function Ad(n){const e=document.createElement("div");return e.className="main-container",e.append(qn(),xd(n)),e}function X(n){n.forEach(e=>{const t=Ft(Bt,"cashEntries/"+e.employeeId);Er(t,e)})}function Dd(){return"emp_"+Math.random().toString(36).substring(2,10)}const Pd=/^[A-Za-zА-Яа-яЁё\\.\\s]{3,}$/;function Od(){const n=document.createElement("div");n.className="modal-overlay";const e=document.createElement("div");e.className="modal";const t=document.createElement("div");t.className="top-windows";const s=document.createElement("div");s.className="modal-title",s.innerHTML="Новый сотрудник";const i=ge(()=>{B(n)}),r=document.createElement("div");r.className="modal-content";const o=document.createElement("div");o.className="content-for-edit-modal",o.textContent="Имя:";const a=document.createElement("input");a.disabled=!1,a.placeholder="Введите имя",a.type="text",a.className="input-user-edit",a.minLength=3,a.pattern="[A-Za-zА-Яа-яЁё\\.\\s]{3,}",a.required=!0,a.addEventListener("input",()=>{Pd.test(a.value.trim())&&(a.classList.remove("input-cash-edit-alarm"),a.setCustomValidity(""))});const c=document.createElement("div");c.className="content-for-edit-modal",c.textContent="Сумма";const l=document.createElement("input");l.disabled=!1,l.type="number",l.min="0",l.setAttribute("step","0.01"),l.className="input-cash-edit";function h(){const m=a.value.trim(),g=Number(l.value);if(!a.checkValidity()){a.setCustomValidity("Введите корректное имя, например: Иванов В.В."),a.reportValidity(),a.classList.add("input-cash-edit-alarm"),a.focus();return}f();const w={employeeId:Dd(),employeeName:m,isActive:!0,isDelete:!1,transactions:[]},A={date:new Date().toISOString().slice(0,10),type:"deposit",amount:parseFloat(g.toFixed(2))};w.transactions.push(A),X([w]),M()}const d=R({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{h()}});o.append(a,c,l,d),r.append(o),t.append(s,i),e.append(t,r),n.appendChild(e),document.body.style.overflow="hidden",document.body.appendChild(n);const u=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&h()};function f(){document.removeEventListener("keydown",u),B(n)}document.addEventListener("keydown",u),n.addEventListener("click",m=>{m.target===n&&f()}),a.focus()}function Md(){const n=document.createElement("div");n.className="navigation-panel";const e=R({type:"button",text:"Добаваить сотрудника",className:"btn-edit",onClick:()=>{Od()}}),t=R({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{window.history.pushState({},"","/"),M()}});return n.append(e,t),n}function Ld(n){const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML=n.employeeName;const r=ge(()=>{B(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-edit-modal",a.textContent=`Удалить ${n.employeeName} ?`;const c=R({type:"button",text:"Удалить",className:"btn-user-del",onClick:()=>{n.isDelete=!0,X([n]),h(),M()}});a.append(c),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const l=d=>{d.key==="Escape"&&h(),d.key==="Enter"&&(n.isDelete=!0,X([n]),h(),M())};function h(){document.removeEventListener("keydown",l),B(e)}document.addEventListener("keydown",l),e.addEventListener("click",d=>{d.target===e&&h()})}function Ws(n,e,t,s){const i=document.createElement("div");i.className="modal-overlay";const r=document.createElement("div");r.className="modal";const o=document.createElement("div");o.className="top-windows";const a=document.createElement("div");a.className="modal-title",a.innerHTML=`${n} : ${e.toFixed(2)} BYN`;const c=ge(()=>{B(i)}),l=document.createElement("div");l.className="modal-content";const h=document.createElement("div");h.className="content-for-edit-modal",h.textContent=`Введите сумму ${t}: `;const d=document.createElement("input");d.disabled=!1,d.type="number",d.min="0",d.setAttribute("step","0.01"),d.className="input-cash-edit";const u=R({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{s(Number(d.value)),m()}});h.append(d,u),l.append(h),o.append(a,c),r.append(o,l),i.appendChild(r),document.body.style.overflow="hidden",document.body.appendChild(i);const f=g=>{g.key==="Escape"&&m(),g.key==="Enter"&&(s(Number(d.value)),m())};function m(){document.removeEventListener("keydown",f),B(i)}return document.addEventListener("keydown",f),i.addEventListener("click",g=>{g.target===i&&m()}),d.focus(),i}const Fd=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="23" height="25" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 10400 13600">
  <path fill="currentColor" d="M1681.49 4022.23l7037.03 0 -370.37 4576.71c-4.39,175.41 -38.66,392.5 -51.17,557.3l-88.41 1154.97c-44.6,339.06 -136.02,2101.05 -224.44,2262.33 -73.62,134.27 -228.85,205.29 -429.63,205.29l-4708.99 0c-502.14,0 -485.3,-352.52 -503.14,-713.8l-142.95 -1708.9c-30.89,-208.55 -23.32,-376.41 -45.78,-589.13l-472.15 -5744.77zm8677.24 -1225.65l0 881.73c0,162.22 -181.7,343.92 -343.92,343.92l-476.19 0c0,218.17 -47.51,445.31 -52.91,661.37 -8.35,334.1 -96.71,976.22 -105.57,1323l-163.02 1979.84c-20.94,198.29 -27.49,440.03 -56.17,658.11 -61.47,467.39 -99.7,1493.08 -166.7,1949.7 -47.73,325.28 -67.72,973.22 -109.7,1292.41 -61.9,470.66 21.59,1167.98 -624.04,1518.82 -140.67,76.44 -318.25,167 -520.83,167l-5079.36 0c-198.8,0 -402.63,-97.41 -538.25,-176.04 -644.37,-373.6 -546.15,-1093.81 -610.5,-1532.35 -33.34,-227.23 -23.65,-430.06 -56.99,-657.29l-328.61 -3930.65c-16.44,-523.88 -145.89,-1442.65 -158.77,-1957.63 -7.6,-304.01 -105.82,-1044.63 -105.82,-1296.29l-476.19 0c-162.22,0 -343.91,-181.7 -343.91,-343.92l0 -899.47c0,-613.96 580.2,-1137.56 1111.11,-1137.56l2063.49 0 0 -476.19c0,-613.96 580.2,-1137.57 1111.11,-1137.57l1719.57 0c368.51,0 596.77,160.04 787.15,350.42 403.24,403.24 350.42,731.05 350.42,1263.34l2037.03 0c368.51,0 596.77,160.04 787.15,350.41 236.18,236.18 322.47,510.83 350.42,804.89zm-7142.85 2363.21l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm3174.6 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm-1587.3 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.66,-456.76 -793.65,0zm-3968.25 -2248.67c0,-311.78 164.41,-476.19 476.19,-476.19l7777.77 0c535.81,0 476.19,429.07 476.19,793.65l-8730.15 0 0 -317.46zm3174.6 -1613.76c0,-311.78 164.41,-476.19 476.19,-476.19l1428.57 0c541.93,0 476.19,439.86 476.19,820.11l-2380.95 0 0 -343.92z"/>
</svg>`;function Bd(n,e){const{employeeName:t}=n,s=document.createElement("div");s.className="user-for-users-list";const i=R({type:"button",text:"",className:"btn-user-del",onClick:()=>{Ld(n)}});i.insertAdjacentHTML("beforeend",Fd);const r=R({type:"button",text:"Изменить имя",className:"btn-user-edit",onClick:()=>{o.disabled=!o.disabled,o.disabled?(r.textContent="Изменить имя",n.employeeName=o.value.trim(),X([n])):(o.focus(),o.value=t,r.textContent="Сохранить")}}),o=document.createElement("input");o.disabled=!0,o.type="text",o.placeholder=t,o.className="input-user-edit";const a=document.createElement("input");a.disabled=!0,a.type="text",a.value=String((Math.round(e*100)/100).toFixed(2)),a.placeholder=String((Math.round(e*100)/100).toFixed(2)),a.className="input-cash-edit";const c=R({type:"button",text:"+",className:"btn-up-cash",onClick:()=>{Ws(t,e,"пополнения",h=>{const d=Number(a.value)+h;a.value=d.toString();const u={date:new Date().toISOString().slice(0,10),type:"deposit",amount:h};n.transactions.push(u),X([n])})}}),l=R({type:"button",text:"-",className:"btn-lou-cash",onClick:()=>{Ws(t,e,"списания",h=>{const d=Number(a.value)-h;a.value=d.toString();const u={date:new Date().toISOString().slice(0,10),type:"expense",amount:h};n.transactions.push(u),X([n])})}});return s.append(i,o,r,a,c,l),s}function Wd(n){const e=Object.entries(n).map(([s,i])=>({id:s,...i})),t=document.createElement("div");return t.className="users-list-for-edit-page",e.forEach(s=>{const i=s.transactions;let r=0;i.forEach(o=>{o.type==="deposit"?r+=o.amount:r-=o.amount}),s.isDelete||t.append(Bd(s,r))}),t}function Ud(n){const e=document.createElement("div");return e.className="edit-content",e.append(Wd(n),Md()),e}function Hd(n){const e=document.createElement("div");return e.className="main-container",e.append(qn(),Ud(n)),e}function Vd(){const n=document.createElement("div");n.className="navigation-panel";const e=R({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{window.history.pushState({},"","/"),M()}});return n.append(e),n}function Us(n,e){const s=Object.entries(n).map(([r,o])=>({id:r,...o})).filter(r=>r.isActive&&!r.isDelete),i=e/s.length;for(const r of s){const o={date:new Date().toISOString().slice(0,10),type:"expense",amount:parseFloat(i.toFixed(2))};r.transactions.push(o),X([r])}}function $d(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML="Списание средств";const o=ge(()=>{B(t)}),a=document.createElement("div");a.className="modal-content-for-write";const c=document.createElement("div");c.className="modal-content-user-list";const h=Object.entries(n).map(([L,Y])=>({id:L,...Y})).filter(L=>L.isActive&&!L.isDelete);for(const L of h){const Y=document.createElement("div");Y.className="modal-content-user",Y.textContent=L.employeeName,c.append(Y)}const d=document.createElement("div");d.className="content-for-water-modal";const u=document.createElement("div");u.className="line";const f=document.createElement("p");f.textContent=`Списать ${e} BYN?`;const m=document.createElement("p");m.className="line-2",m.textContent=`(с каждого сотрудника по ${(e/h.length).toFixed(2)} BYN)`,u.append(f,m);const g=R({type:"button",text:"Списать",className:"btn-user-del",onClick:()=>{Us(n,e),A(),window.history.pushState({},"","/"),M()}});d.append(u,g),a.append(c,d),i.append(r,o),s.append(i,a),t.appendChild(s),document.body.style.overflow="hidden",document.body.appendChild(t);const w=L=>{L.key==="Escape"&&A(),L.key==="Enter"&&(Us(n,e),A(),window.history.pushState({},"","/"),M())};function A(){document.removeEventListener("keydown",w),B(t)}document.addEventListener("keydown",w),t.addEventListener("click",L=>{L.target===t&&A()})}function zd(n){const e=document.createElement("div");e.className="control-content";const t=document.createElement("div");t.className="text-content";const s=document.createElement("div");s.className="label-for-user",s.textContent="Списать";const i=document.createElement("div");i.className="content-for-control";const r=document.createElement("input");r.className="input-cash-water",r.placeholder="Сумма списания",r.type="number",r.min="0",r.setAttribute("step","0.01");const o=R({type:"button",text:"Списать сумму",className:"btn-edit-disable",onClick:()=>{$d(n,Number(r.value))}});return r.addEventListener("input",()=>{Number(r.value)>0?(o.classList.remove("btn-edit-disable"),o.classList.add("btn-edit")):(o.classList.remove("btn-edit"),o.classList.add("btn-edit-disable"))}),i.append(r,o),t.append(s),e.append(t,i),e}function Gd(n){const e=document.createElement("div");e.className="user-for-water-page";const t=document.createElement("label");t.className="user-label";const s=document.createElement("input");s.type="checkbox",s.className="user-checkbox",n.isActive&&(s.checked=!0);const i=document.createElement("span");return i.textContent=n.employeeName,i.className="user-name-for-water",s.addEventListener("change",()=>{s.checked?(n.isActive=!0,X([n]),M()):(n.isActive=!1,X([n]),M())}),t.append(s,i),e.append(t),e}function qd(n){const e=Object.entries(n).map(([a,c])=>({id:a,...c})),t=document.createElement("div");t.className="users-list-for-water-page";const s=document.createElement("div");s.className="user-content";const i=document.createElement("div");i.className="text-content";const r=document.createElement("div");r.className="label-for-user",r.textContent="Выберите сотрудников",i.append(r),s.append(i);const o=document.createElement("div");return o.className="users-for-water",e.forEach(a=>{a.isDelete||o.append(Gd(a))}),s.append(o),t.append(s,zd(n)),t}function jd(n){const e=document.createElement("div");return e.className="edit-content",e.append(qd(n),Vd()),e}function Yd(n){const e=document.createElement("div");return e.className="main-container",e.append(qn(),jd(n)),e}function Hs(n){const e=window.location.pathname,t=sessionStorage.getItem("authorization");e==="/edit"&&t?document.body.replaceChildren(Hd(n)):e==="/water"&&t?document.body.replaceChildren(Yd(n)):(document.body.replaceChildren(Ad(n)),window.history.pushState({},"","/"))}async function Kd(){const n=Ft(Bt,"admin/password");return(await Cr(n)).val()}async function M(){document.body.replaceChildren(),Cd();const[n]=await Promise.all([Ed()]),e=await Kd();sessionStorage.setItem("pass",e),Hs(n),window.addEventListener("popstate",()=>{Hs(n)})}M();
