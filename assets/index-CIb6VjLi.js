(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const $r=()=>{};var ls={};/**
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
 */const ri={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(n,e){if(!n)throw De(e)},De=function(n){return new Error("Firebase Database ("+ri.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const oi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Nn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(t[u],t[d],t[h],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Gr;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ai=function(n){const e=oi(n);return Nn.encodeByteArray(e,!0)},vt=function(n){return ai(n).replace(/\./g,"")},cn=function(n){try{return Nn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qr(n){return li(void 0,n)}function li(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!jr(t)||(n[t]=li(n[t],e[t]));return n}function jr(n){return n!=="__proto__"}/**
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
 */function Kr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yr=()=>Kr().__FIREBASE_DEFAULTS__,Qr=()=>{if(typeof process>"u"||typeof ls>"u")return;const n=ls.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cn(n[1]);return e&&JSON.parse(e)},ci=()=>{try{return $r()||Yr()||Qr()||Xr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jr=n=>{var e,t;return(t=(e=ci())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zr=n=>{const e=Jr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},di=()=>{var n;return(n=ci())===null||n===void 0?void 0:n.config};/**
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
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function eo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vt(JSON.stringify(t)),vt(JSON.stringify(o)),""].join(".")}/**
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
 */function to(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ui(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(to())}function no(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function so(){return ri.NODE_ADMIN===!0}function io(){try{return typeof indexedDB=="object"}catch{return!1}}function ro(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const oo="FirebaseError";class lt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=oo,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ao(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,s)}}function ao(n,e){return n.replace(lo,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lo=/\{\$([^}]+)}/g;/**
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
 */function Xe(n){return JSON.parse(n)}function P(n){return JSON.stringify(n)}/**
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
 */const fi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Xe(cn(r[0])||""),t=Xe(cn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},co=function(n){const e=fi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},uo=function(n){const e=fi(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function xe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function cs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Et(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ct(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ds(r)&&ds(o)){if(!Ct(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ds(n){return n!==null&&typeof n=="object"}/**
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
 */function ho(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class fo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Sn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const po=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,p(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pe="[DEFAULT]";/**
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
 */class mo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ft;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(go(e))try{this.getOrInitializeService({instanceIdentifier:pe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pe){return this.instances.has(e)}getOptions(e=pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_o(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pe){return this.component?this.component.multipleInstances?e:pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _o(n){return n===pe?void 0:n}function go(n){return n.instantiationMode==="EAGER"}/**
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
 */class yo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const vo={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Eo=N.INFO,Co={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},wo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Co[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=Eo,this._logHandler=wo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const bo=(n,e)=>e.some(t=>n instanceof t);let us,hs;function Io(){return us||(us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function No(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mi=new WeakMap,dn=new WeakMap,_i=new WeakMap,Yt=new WeakMap,Tn=new WeakMap;function So(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(oe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mi.set(t,n)}).catch(()=>{}),Tn.set(e,n),e}function To(n){if(dn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});dn.set(n,e)}let un={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_i.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xo(n){un=n(un)}function Ro(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Qt(this),e,...t);return _i.set(s,e.sort?e.sort():[e]),oe(s)}:No().includes(n)?function(...e){return n.apply(Qt(this),e),oe(mi.get(this))}:function(...e){return oe(n.apply(Qt(this),e))}}function ko(n){return typeof n=="function"?Ro(n):(n instanceof IDBTransaction&&To(n),bo(n,Io())?new Proxy(n,un):n)}function oe(n){if(n instanceof IDBRequest)return So(n);if(Yt.has(n))return Yt.get(n);const e=ko(n);return e!==n&&(Yt.set(n,e),Tn.set(e,n)),e}const Qt=n=>Tn.get(n);function Ao(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=oe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(oe(o.result),l.oldVersion,l.newVersion,oe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Do=["get","getKey","getAll","getAllKeys","count"],Po=["put","add","delete","clear"],Xt=new Map;function fs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xt.get(e))return Xt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Po.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Do.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Xt.set(e,r),r}xo(n=>({...n,get:(e,t,s)=>fs(e,t)||n.get(e,t,s),has:(e,t)=>!!fs(e,t)||n.has(e,t)}));/**
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
 */class Oo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mo(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hn="@firebase/app",ps="0.11.5";/**
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
 */const ee=new pi("@firebase/app"),Lo="@firebase/app-compat",Fo="@firebase/analytics-compat",Bo="@firebase/analytics",Wo="@firebase/app-check-compat",Uo="@firebase/app-check",Ho="@firebase/auth",Vo="@firebase/auth-compat",$o="@firebase/database",zo="@firebase/data-connect",Go="@firebase/database-compat",qo="@firebase/functions",jo="@firebase/functions-compat",Ko="@firebase/installations",Yo="@firebase/installations-compat",Qo="@firebase/messaging",Xo="@firebase/messaging-compat",Jo="@firebase/performance",Zo="@firebase/performance-compat",ea="@firebase/remote-config",ta="@firebase/remote-config-compat",na="@firebase/storage",sa="@firebase/storage-compat",ia="@firebase/firestore",ra="@firebase/vertexai",oa="@firebase/firestore-compat",aa="firebase",la="11.6.1";/**
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
 */const fn="[DEFAULT]",ca={[hn]:"fire-core",[Lo]:"fire-core-compat",[Bo]:"fire-analytics",[Fo]:"fire-analytics-compat",[Uo]:"fire-app-check",[Wo]:"fire-app-check-compat",[Ho]:"fire-auth",[Vo]:"fire-auth-compat",[$o]:"fire-rtdb",[zo]:"fire-data-connect",[Go]:"fire-rtdb-compat",[qo]:"fire-fn",[jo]:"fire-fn-compat",[Ko]:"fire-iid",[Yo]:"fire-iid-compat",[Qo]:"fire-fcm",[Xo]:"fire-fcm-compat",[Jo]:"fire-perf",[Zo]:"fire-perf-compat",[ea]:"fire-rc",[ta]:"fire-rc-compat",[na]:"fire-gcs",[sa]:"fire-gcs-compat",[ia]:"fire-fst",[oa]:"fire-fst-compat",[ra]:"fire-vertex","fire-js":"fire-js",[aa]:"fire-js-all"};/**
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
 */const wt=new Map,da=new Map,pn=new Map;function ms(n,e){try{n.container.addComponent(e)}catch(t){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(pn.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;pn.set(e,n);for(const t of wt.values())ms(t,n);for(const t of da.values())ms(t,n);return!0}function ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ha(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new hi("app","Firebase",fa);/**
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
 */class pa{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const ma=la;function gi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(t||(t=di()),!t)throw ae.create("no-options");const r=wt.get(i);if(r){if(Ct(t,r.options)&&Ct(s,r.config))return r;throw ae.create("duplicate-app",{appName:i})}const o=new yo(i);for(const l of pn.values())o.addComponent(l);const a=new pa(t,s,o);return wt.set(i,a),a}function _a(n=fn){const e=wt.get(n);if(!e&&n===fn&&di())return gi();if(!e)throw ae.create("no-app",{appName:n});return e}function Ne(n,e,t){var s;let i=(s=ca[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}bt(new Je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ga="firebase-heartbeat-database",ya=1,Ze="firebase-heartbeat-store";let Jt=null;function yi(){return Jt||(Jt=Ao(ga,ya,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ze)}catch(t){console.warn(t)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),Jt}async function va(n){try{const t=(await yi()).transaction(Ze),s=await t.objectStore(Ze).get(vi(n));return await t.done,s}catch(e){if(e instanceof lt)ee.warn(e.message);else{const t=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ee.warn(t.message)}}}async function _s(n,e){try{const s=(await yi()).transaction(Ze,"readwrite");await s.objectStore(Ze).put(e,vi(n)),await s.done}catch(t){if(t instanceof lt)ee.warn(t.message);else{const s=ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ee.warn(s.message)}}}function vi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ea=1024,Ca=30;class wa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ia(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gs();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ca){const o=Na(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ee.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gs(),{heartbeatsToSend:s,unsentEntries:i}=ba(this._heartbeatsCache.heartbeats),r=vt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ee.warn(t),""}}}function gs(){return new Date().toISOString().substring(0,10)}function ba(n,e=Ea){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ys(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ys(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ia{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return io()?ro().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await va(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _s(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _s(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ys(n){return vt(JSON.stringify({version:2,heartbeats:n})).length}function Na(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Sa(n){bt(new Je("platform-logger",e=>new Oo(e),"PRIVATE")),bt(new Je("heartbeat",e=>new wa(e),"PRIVATE")),Ne(hn,ps,n),Ne(hn,ps,"esm2017"),Ne("fire-js","")}Sa("");var vs={};const Es="@firebase/database",Cs="1.0.14";/**
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
 */let Ei="";function Ta(n){Ei=n}/**
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
 */class xa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ra{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ci=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xa(e)}}catch{}return new Ra},_e=Ci("localStorage"),ka=Ci("sessionStorage");/**
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
 */const Se=new pi("@firebase/database"),Aa=function(){let n=1;return function(){return n++}}(),wi=function(n){const e=po(n),t=new fo;t.update(e);const s=t.digest();return Nn.encodeByteArray(s)},ct=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ct.apply(null,s):typeof s=="object"?e+=P(s):e+=s,e+=" "}return e};let Ge=null,ws=!0;const Da=function(n,e){p(!0,"Can't turn on custom loggers persistently."),Se.logLevel=N.VERBOSE,Ge=Se.log.bind(Se)},U=function(...n){if(ws===!0&&(ws=!1,Ge===null&&ka.get("logging_enabled")===!0&&Da()),Ge){const e=ct.apply(null,n);Ge(e)}},dt=function(n){return function(...e){U(n,...e)}},mn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ct(...n);Se.error(e)},te=function(...n){const e=`FIREBASE FATAL ERROR: ${ct(...n)}`;throw Se.error(e),new Error(e)},$=function(...n){const e="FIREBASE WARNING: "+ct(...n);Se.warn(e)},Pa=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Oa=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Re="[MIN_NAME]",ye="[MAX_NAME]",Oe=function(n,e){if(n===e)return 0;if(n===Re||e===ye)return-1;if(e===Re||n===ye)return 1;{const t=bs(n),s=bs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ma=function(n,e){return n===e?0:n<e?-1:1},Ue=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+P(e))},xn=function(n){if(typeof n!="object"||n===null)return P(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=P(e[s]),t+=":",t+=xn(n[e[s]]);return t+="}",t},Ii=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ni=function(n){p(!bi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},La=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fa=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ba(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Wa=new RegExp("^-?(0*)\\d{1,10}$"),Ua=-2147483648,Ha=2147483647,bs=function(n){if(Wa.test(n)){const e=Number(n);if(e>=Ua&&e<=Ha)return e}return null},Me=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw $("Exception was thrown by user callback.",t),e},Math.floor(0))}},Va=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qe=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $a{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ha(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class za{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(U("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$(e)}}class gt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gt.OWNER="owner";/**
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
 */const Rn="5",Si="v",Ti="s",xi="r",Ri="f",ki=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ai="ls",Di="p",_n="ac",Pi="websocket",Oi="long_polling";/**
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
 */class Mi{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ga(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Li(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let s;if(e===Pi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Oi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ga(n)&&(t.ns=n.namespace);const i=[];return z(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class qa{constructor(){this.counters_={}}incrementCounter(e,t=1){se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qr(this.counters_)}}/**
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
 */const Zt={},en={};function kn(n){const e=n.toString();return Zt[e]||(Zt[e]=new qa),Zt[e]}function ja(n,e){const t=n.toString();return en[t]||(en[t]=e()),en[t]}/**
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
 */class Ka{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Me(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Is="start",Ya="close",Qa="pLPCommand",Xa="pRTLPCB",Fi="id",Bi="pw",Wi="ser",Ja="cb",Za="seg",el="ts",tl="d",nl="dframe",Ui=1870,Hi=30,sl=Ui-Hi,il=25e3,rl=3e4;class Ie{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dt(e),this.stats_=kn(t),this.urlFn=l=>(this.appCheckToken&&(l[_n]=this.appCheckToken),Li(t,Oi,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ka(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rl)),Oa(()=>{if(this.isClosed_)return;this.scriptTagHolder=new An((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Is)this.id=a,this.password=l;else if(o===Ya)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Is]="t",s[Wi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ja]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Si]=Rn,this.transportSessionId&&(s[Ti]=this.transportSessionId),this.lastSessionId&&(s[Ai]=this.lastSessionId),this.applicationId&&(s[Di]=this.applicationId),this.appCheckToken&&(s[_n]=this.appCheckToken),typeof location<"u"&&location.hostname&&ki.test(location.hostname)&&(s[xi]=Ri);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ie.forceAllow_=!0}static forceDisallow(){Ie.forceDisallow_=!0}static isAvailable(){return Ie.forceAllow_?!0:!Ie.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!La()&&!Fa()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ai(t),i=Ii(s,sl);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[nl]="t",s[Fi]=e,s[Bi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class An{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Aa(),window[Qa+this.uniqueCallbackIdentifier]=e,window[Xa+this.uniqueCallbackIdentifier]=t,this.myIFrame=An.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){U("frame writing exception"),a.stack&&U(a.stack),U(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||U("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fi]=this.myID,e[Bi]=this.myPW,e[Wi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hi+s.length<=Ui;){const o=this.pendingSegs.shift();s=s+"&"+Za+i+"="+o.seg+"&"+el+i+"="+o.ts+"&"+tl+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(il)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{U("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ol=16384,al=45e3;let It=null;typeof MozWebSocket<"u"?It=MozWebSocket:typeof WebSocket<"u"&&(It=WebSocket);class q{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dt(this.connId),this.stats_=kn(t),this.connURL=q.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Si]=Rn,typeof location<"u"&&location.hostname&&ki.test(location.hostname)&&(o[xi]=Ri),t&&(o[Ti]=t),s&&(o[Ai]=s),i&&(o[_n]=i),r&&(o[Di]=r),Li(e,Pi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_e.set("previous_websocket_failure",!0);try{let s;so(),this.mySock=new It(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){q.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&It!==null&&!q.forceDisallow_}static previouslyFailed(){return _e.isInMemoryStorage||_e.get("previous_websocket_failure")===!0}markConnectionHealthy(){_e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Xe(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ii(t,ol);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(al))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}q.responsesRequiredToBeHealthy=2;q.healthyTimeout=3e4;/**
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
 */class et{static get ALL_TRANSPORTS(){return[Ie,q]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=q&&q.isAvailable();let s=t&&!q.previouslyFailed();if(e.webSocketOnly&&(t||$("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[q];else{const i=this.transports_=[];for(const r of et.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);et.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}et.globalTransportInitialized_=!1;/**
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
 */const ll=6e4,cl=5e3,dl=10*1024,ul=100*1024,tn="t",Ns="d",hl="s",Ss="r",fl="e",Ts="o",xs="a",Rs="n",ks="p",pl="h";class ml{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dt("c:"+this.id+":"),this.transportManager_=new et(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qe(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ul?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tn in e){const t=e[tn];t===xs?this.upgradeIfSecondaryHealthy_():t===Ss?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ts&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ue("t",e),s=Ue("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ks,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ue("t",e),s=Ue("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ue(tn,e);if(Ns in e){const s=e[Ns];if(t===pl){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Rs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hl?this.onConnectionShutdown_(s):t===Ss?this.onReset_(s):t===fl?mn("Server Error: "+s):t===Ts?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Rn!==s&&$("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),qe(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ll))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qe(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ks,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vi{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class $i{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Nt extends $i{static getInstance(){return new Nt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ui()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const As=32,Ds=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new I("")}function E(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function de(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function zi(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function _l(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function qi(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function O(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof I)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new I(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function H(n,e){const t=E(n),s=E(e);if(t===null)return e;if(t===s)return H(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ji(n,e){if(de(n)!==de(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function j(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(de(n)>de(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class gl{constructor(e,t){this.errorPrefix_=t,this.parts_=Gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bt(this.parts_[s]);Ki(this)}}function yl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Bt(e),Ki(n)}function vl(n){const e=n.parts_.pop();n.byteLength_-=Bt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ki(n){if(n.byteLength_>Ds)throw new Error(n.errorPrefix_+"has a key path longer than "+Ds+" bytes ("+n.byteLength_+").");if(n.parts_.length>As)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+As+") or object contains a cycle "+me(n))}function me(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Dn extends $i{static getInstance(){return new Dn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const He=1e3,El=60*5*1e3,Ps=30*1e3,Cl=1.3,wl=3e4,bl="server_kill",Os=3;class J extends Vi{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=J.nextPersistentConnectionId_++,this.log_=dt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=He,this.maxReconnectDelay_=El,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(P(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Ft,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;J.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&se(e,"w")){const s=xe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();$(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ps)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=co(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+P(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):mn("Unrecognized action received from server: "+P(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wl&&(this.reconnectDelay_=He),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Cl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+J.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?U("getToken() completed but was canceled"):(U("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new ml(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{$(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(bl)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$(d),l())}}}interrupt(e){U("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){U("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cs(this.interruptReasons_)&&(this.reconnectDelay_=He,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>xn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new I(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){U("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Os&&(this.reconnectDelay_=Ps,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){U("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Os&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ei.replace(/\./g,"-")]=1,ui()?e["framework.cordova"]=1:no()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nt.getInstance().currentlyOnline();return cs(this.interruptReasons_)&&e}}J.nextPersistentConnectionId_=0;J.nextConnectionId_=0;/**
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
 */class Wt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(Re,e),i=new y(Re,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
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
 */let mt;class Yi extends Wt{static get __EMPTY_NODE(){return mt}static set __EMPTY_NODE(e){mt=e}compare(e,t){return Oe(e.name,t.name)}isDefinedOn(e){throw De("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(ye,mt)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,mt)}toString(){return".key"}}const Te=new Yi;/**
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
 */class _t{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class L{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??L.RED,this.left=i??V.EMPTY_NODE,this.right=r??V.EMPTY_NODE}copy(e,t,s,i,r){return new L(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return V.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return V.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}L.RED=!0;L.BLACK=!1;class Il{copy(e,t,s,i,r){return this}insert(e,t,s){return new L(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class V{constructor(e,t=V.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new V(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,L.BLACK,null,null))}remove(e){return new V(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,L.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _t(this.root_,null,this.comparator_,!0,e)}}V.EMPTY_NODE=new Il;/**
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
 */function Nl(n,e){return Oe(n.name,e.name)}function Pn(n,e){return Oe(n,e)}/**
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
 */let gn;function Sl(n){gn=n}const Qi=function(n){return typeof n=="number"?"number:"+Ni(n):"string:"+n},Xi=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&se(e,".sv"),"Priority must be a string or number.")}else p(n===gn||n.isEmpty(),"priority of unexpected type.");p(n===gn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ms;class M{static set __childrenNodeConstructor(e){Ms=e}static get __childrenNodeConstructor(){return Ms}constructor(e,t=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xi(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:E(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=E(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(p(s!==".priority"||de(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ni(this.value_):e+=this.value_,this.lazyHash_=wi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=M.VALUE_TYPE_ORDER.indexOf(t),r=M.VALUE_TYPE_ORDER.indexOf(s);return p(i>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ji,Zi;function Tl(n){Ji=n}function xl(n){Zi=n}class Rl extends Wt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Oe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(ye,new M("[PRIORITY-POST]",Zi))}makePost(e,t){const s=Ji(e);return new y(t,new M("[PRIORITY-POST]",s))}toString(){return".priority"}}const k=new Rl;/**
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
 */const kl=Math.log(2);class Al{constructor(e){const t=r=>parseInt(Math.log(r)/kl,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const St=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new L(h,d.node,L.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),g=i(f+1,c);return d=n[f],h=t?t(d):d,new L(h,d.node,L.BLACK,m,g)}},r=function(l){let c=null,u=null,d=n.length;const h=function(m,g){const b=d-m,A=d;d-=m;const D=i(b+1,A),G=n[b],We=t?t(G):G;f(new L(We,G.node,g,null,D))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));g?h(b,L.BLACK):(h(b,L.BLACK),h(b,L.RED))}return u},o=new Al(n.length),a=r(o);return new V(s||e,a)};/**
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
 */let nn;const we={};class X{static get Default(){return p(we&&k,"ChildrenNode.ts has not been loaded"),nn=nn||new X({".priority":we},{".priority":k}),nn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=xe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof V?t:null}hasIndex(e){return se(this.indexSet_,e.toString())}addIndex(e,t){p(e!==Te,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=St(s,e.getCompare()):a=we;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new X(u,c)}addToIndexes(e,t){const s=Et(this.indexes_,(i,r)=>{const o=xe(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),i===we)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),St(a,o.getCompare())}else return we;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new X(s,this.indexSet_)}removeFromIndexes(e,t){const s=Et(this.indexes_,i=>{if(i===we)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new X(s,this.indexSet_)}}/**
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
 */let Ve;class _{static get EMPTY_NODE(){return Ve||(Ve=new _(new V(Pn),null,X.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xi(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ve}updatePriority(e){return this.children_.isEmpty()?this:new _(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ve:t}}getChild(e){const t=E(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ve:this.priorityNode_;return new _(i,o,r)}}updateChild(e,t){const s=E(e);if(s===null)return t;{p(E(e)!==".priority"||de(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(S(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(k,(o,a)=>{t[o]=a.val(e),s++,r&&_.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qi(this.getPriority().val())+":"),this.forEachChild(k,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":wi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ut?-1:0}withIndex(e){if(e===Te||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Te||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(k),i=t.getIterator(k);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Te?null:this.indexMap_.get(e.toString())}}_.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dl extends _{constructor(){super(new V(Pn),_.EMPTY_NODE,X.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _.EMPTY_NODE}isEmpty(){return!1}}const ut=new Dl;Object.defineProperties(y,{MIN:{value:new y(Re,_.EMPTY_NODE)},MAX:{value:new y(ye,ut)}});Yi.__EMPTY_NODE=_.EMPTY_NODE;M.__childrenNodeConstructor=_;Sl(ut);xl(ut);/**
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
 */const Pl=!0;function F(n,e=null){if(n===null)return _.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new M(t,F(e))}if(!(n instanceof Array)&&Pl){const t=[];let s=!1;if(z(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=F(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return _.EMPTY_NODE;const r=St(t,Nl,o=>o.name,Pn);if(s){const o=St(t,k.getCompare());return new _(r,F(e),new X({".priority":o},{".priority":k}))}else return new _(r,F(e),X.Default)}else{let t=_.EMPTY_NODE;return z(n,(s,i)=>{if(se(n,s)&&s.substring(0,1)!=="."){const r=F(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(F(e))}}Tl(F);/**
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
 */class Ol extends Wt{constructor(e){super(),this.indexPath_=e,p(!v(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Oe(e.name,t.name):r}makePost(e,t){const s=F(e),i=_.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=_.EMPTY_NODE.updateChild(this.indexPath_,ut);return new y(ye,e)}toString(){return Gi(this.indexPath_,0).join("/")}}/**
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
 */class Ml extends Wt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Oe(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=F(e);return new y(t,s)}toString(){return".value"}}const Ll=new Ml;/**
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
 */function er(n){return{type:"value",snapshotNode:n}}function ke(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function nt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Fl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class On{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(tt(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ke(t,s)):o.trackChildChange(nt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(k,(i,r)=>{t.hasChild(i)||s.trackChildChange(tt(i,r))}),t.isLeafNode()||t.forEachChild(k,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(nt(i,r,o))}else s.trackChildChange(ke(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class st{constructor(e){this.indexedFilter_=new On(e.getIndex()),this.index_=e.getIndex(),this.startPost_=st.getStartPost_(e),this.endPost_=st.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new y(t,s))||(s=_.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=_.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_.EMPTY_NODE);const r=this;return t.forEachChild(k,(o,a)=>{r.matches(new y(o,a))||(i=i.updateImmediateChild(o,_.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Bl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new st(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new y(t,s))||(s=_.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=_.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=_.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(_.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,_.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new y(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(nt(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(tt(t,d));const g=a.updateImmediateChild(t,_.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ke(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(tt(c.name,c.node)),r.trackChildChange(ke(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,_.EMPTY_NODE)):e}}/**
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
 */class Mn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=k}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Re}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===k}copy(){const e=new Mn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wl(n){return n.loadsAllData()?new On(n.getIndex()):n.hasLimit()?new Bl(n):new st(n)}function Ls(n){const e={};if(n.isDefault())return e;let t;if(n.index_===k?t="$priority":n.index_===Ll?t="$value":n.index_===Te?t="$key":(p(n.index_ instanceof Ol,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=P(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=P(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+P(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=P(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+P(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Fs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==k&&(e.i=n.index_.toString()),e}/**
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
 */class Tt extends Vi{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=dt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Tt.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ls(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),xe(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,t){const s=Tt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ls(e._queryParams),s=e._path.toString(),i=new Ft;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ho(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xe(a.responseText)}catch{$("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&$("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ul{constructor(){this.rootNode_=_.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function xt(){return{value:null,children:new Map}}function tr(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=E(e);n.children.has(s)||n.children.set(s,xt());const i=n.children.get(s);e=S(e),tr(i,e,t)}}function yn(n,e,t){n.value!==null?t(e,n.value):Hl(n,(s,i)=>{const r=new I(e.toString()+"/"+s);yn(i,r,t)})}function Hl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Vl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&z(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Bs=10*1e3,$l=30*1e3,zl=5*60*1e3;class Gl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vl(e);const s=Bs+($l-Bs)*Math.random();qe(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;z(e,(i,r)=>{r>0&&se(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),qe(this.reportStats_.bind(this),Math.floor(Math.random()*2*zl))}}/**
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
 */var K;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(K||(K={}));function nr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ln(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Rt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=K.ACK_USER_WRITE,this.source=nr()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new Rt(C(),t,this.revert)}}else return p(E(this.path)===e,"operationForChild called for unrelated child."),new Rt(S(this.path),this.affectedTree,this.revert)}}/**
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
 */class it{constructor(e,t){this.source=e,this.path=t,this.type=K.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new it(this.source,C()):new it(this.source,S(this.path))}}/**
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
 */class ve{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=K.OVERWRITE}operationForChild(e){return v(this.path)?new ve(this.source,C(),this.snap.getImmediateChild(e)):new ve(this.source,S(this.path),this.snap)}}/**
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
 */class rt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=K.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new ve(this.source,C(),t.value):new rt(this.source,C(),t)}else return p(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rt(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ue{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=E(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ql{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jl(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Fl(o.childName,o.snapshotNode))}),$e(n,i,"child_removed",e,s,t),$e(n,i,"child_added",e,s,t),$e(n,i,"child_moved",r,s,t),$e(n,i,"child_changed",e,s,t),$e(n,i,"value",e,s,t),i}function $e(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Yl(n,a,l)),o.forEach(a=>{const l=Kl(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Kl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Yl(n,e,t){if(e.childName==null||t.childName==null)throw De("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ut(n,e){return{eventCache:n,serverCache:e}}function je(n,e,t,s){return Ut(new ue(e,t,s),n.serverCache)}function sr(n,e,t,s){return Ut(n.eventCache,new ue(e,t,s))}function kt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ee(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let sn;const Ql=()=>(sn||(sn=new V(Ma)),sn);class T{static fromObject(e){let t=new T(null);return z(e,(s,i)=>{t=t.set(new I(s),i)}),t}constructor(e,t=Ql()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const s=E(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(S(e),t);return r!=null?{path:O(new I(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=E(e),s=this.children.get(t);return s!==null?s.subtree(S(e)):new T(null)}}set(e,t){if(v(e))return new T(t,this.children);{const s=E(e),r=(this.children.get(s)||new T(null)).set(S(e),t),o=this.children.insert(s,r);return new T(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const t=E(e),s=this.children.get(t);if(s){const i=s.remove(S(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=E(e),s=this.children.get(t);return s?s.get(S(e)):null}}setTree(e,t){if(v(e))return t;{const s=E(e),r=(this.children.get(s)||new T(null)).setTree(S(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new T(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(O(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(S(e),O(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=E(e),r=this.children.get(i);return r?r.foreachOnPath_(S(e),O(t,i),s):new T(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(O(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Y{constructor(e){this.writeTree_=e}static empty(){return new Y(new T(null))}}function Ke(n,e,t){if(v(e))return new Y(new T(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=H(i,e);return r=r.updateChild(o,t),new Y(n.writeTree_.set(i,r))}else{const i=new T(t),r=n.writeTree_.setTree(e,i);return new Y(r)}}}function Ws(n,e,t){let s=n;return z(t,(i,r)=>{s=Ke(s,O(e,i),r)}),s}function Us(n,e){if(v(e))return Y.empty();{const t=n.writeTree_.setTree(e,new T(null));return new Y(t)}}function vn(n,e){return Ce(n,e)!=null}function Ce(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(H(t.path,e)):null}function Hs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(k,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function le(n,e){if(v(e))return n;{const t=Ce(n,e);return t!=null?new Y(new T(t)):new Y(n.writeTree_.subtree(e))}}function En(n){return n.writeTree_.isEmpty()}function Ae(n,e){return ir(C(),n.writeTree_,e)}function ir(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ir(O(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(O(n,".priority"),s)),t}}/**
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
 */function Ht(n,e){return lr(e,n)}function Xl(n,e,t,s,i){p(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ke(n.visibleWrites,e,t)),n.lastWriteId=s}function Jl(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Zl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ec(a,s.path)?i=!1:j(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return tc(n),!0;if(s.snap)n.visibleWrites=Us(n.visibleWrites,s.path);else{const a=s.children;z(a,l=>{n.visibleWrites=Us(n.visibleWrites,O(s.path,l))})}return!0}else return!1}function ec(n,e){if(n.snap)return j(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&j(O(n.path,t),e))return!0;return!1}function tc(n){n.visibleWrites=rr(n.allWrites,nc,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function nc(n){return n.visible}function rr(n,e,t){let s=Y.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)j(t,o)?(a=H(t,o),s=Ke(s,a,r.snap)):j(o,t)&&(a=H(o,t),s=Ke(s,C(),r.snap.getChild(a)));else if(r.children){if(j(t,o))a=H(t,o),s=Ws(s,a,r.children);else if(j(o,t))if(a=H(o,t),v(a))s=Ws(s,C(),r.children);else{const l=xe(r.children,E(a));if(l){const c=l.getChild(S(a));s=Ke(s,C(),c)}}}else throw De("WriteRecord should have .snap or .children")}}return s}function or(n,e,t,s,i){if(!s&&!i){const r=Ce(n.visibleWrites,e);if(r!=null)return r;{const o=le(n.visibleWrites,e);if(En(o))return t;if(t==null&&!vn(o,C()))return null;{const a=t||_.EMPTY_NODE;return Ae(o,a)}}}else{const r=le(n.visibleWrites,e);if(!i&&En(r))return t;if(!i&&t==null&&!vn(r,C()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(j(c.path,e)||j(e,c.path))},a=rr(n.allWrites,o,e),l=t||_.EMPTY_NODE;return Ae(a,l)}}}function sc(n,e,t){let s=_.EMPTY_NODE;const i=Ce(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(k,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=le(n.visibleWrites,e);return t.forEachChild(k,(o,a)=>{const l=Ae(le(r,new I(o)),a);s=s.updateImmediateChild(o,l)}),Hs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=le(n.visibleWrites,e);return Hs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ic(n,e,t,s,i){p(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=O(e,t);if(vn(n.visibleWrites,r))return null;{const o=le(n.visibleWrites,r);return En(o)?i.getChild(t):Ae(o,i.getChild(t))}}function rc(n,e,t,s){const i=O(e,t),r=Ce(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=le(n.visibleWrites,i);return Ae(o,s.getNode().getImmediateChild(t))}else return null}function oc(n,e){return Ce(n.visibleWrites,e)}function ac(n,e,t,s,i,r,o){let a;const l=le(n.visibleWrites,e),c=Ce(l,C());if(c!=null)a=c;else if(t!=null)a=Ae(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&u.length<i;)d(f,s)!==0&&u.push(f),f=h.getNext();return u}else return[]}function lc(){return{visibleWrites:Y.empty(),allWrites:[],lastWriteId:-1}}function At(n,e,t,s){return or(n.writeTree,n.treePath,e,t,s)}function Bn(n,e){return sc(n.writeTree,n.treePath,e)}function Vs(n,e,t,s){return ic(n.writeTree,n.treePath,e,t,s)}function Dt(n,e){return oc(n.writeTree,O(n.treePath,e))}function cc(n,e,t,s,i,r){return ac(n.writeTree,n.treePath,e,t,s,i,r)}function Wn(n,e,t){return rc(n.writeTree,n.treePath,e,t)}function ar(n,e){return lr(O(n.treePath,e),n.writeTree)}function lr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class dc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,nt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,tt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ke(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,nt(s,e.snapshotNode,i.oldSnap));else throw De("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class uc{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const cr=new uc;class Un{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ee(this.viewCache_),r=cc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function hc(n){return{filter:n}}function fc(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function pc(n,e,t,s,i){const r=new dc;let o,a;if(t.type===K.OVERWRITE){const c=t;c.source.fromUser?o=Cn(n,e,c.path,c.snap,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Pt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===K.MERGE){const c=t;c.source.fromUser?o=_c(n,e,c.path,c.children,s,i,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===K.ACK_USER_WRITE){const c=t;c.revert?o=vc(n,e,c.path,s,i,r):o=gc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===K.LISTEN_COMPLETE)o=yc(n,e,t.path,s,r);else throw De("Unknown operation type: "+t.type);const l=r.getChanges();return mc(e,o,l),{viewCache:o,changes:l}}function mc(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=kt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(er(kt(e)))}}function dr(n,e,t,s,i,r){const o=e.eventCache;if(Dt(s,t)!=null)return e;{let a,l;if(v(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ee(e),u=c instanceof _?c:_.EMPTY_NODE,d=Bn(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=At(s,Ee(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=E(t);if(c===".priority"){p(de(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Vs(s,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=S(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Vs(s,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Wn(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return je(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Pt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=E(t);if(!l.isCompleteForPath(t)&&de(t)>1)return e;const m=S(t),b=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),f,b,m,cr,null)}const d=sr(e,c,l.isFullyInitialized()||v(t),u.filtersNodes()),h=new Un(i,d,r);return dr(n,d,t,i,h,a)}function Cn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Un(i,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=je(e,c,!0,n.filter.filtersNodes());else{const d=E(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=je(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=S(t),f=a.getNode().getImmediateChild(d);let m;if(v(h))m=s;else{const g=u.getCompleteChild(d);g!=null?zi(h)===".priority"&&g.getChild(qi(h)).isEmpty()?m=g:m=g.updateChild(h,s):m=_.EMPTY_NODE}if(f.equals(m))l=e;else{const g=n.filter.updateChild(a.getNode(),d,m,h,u,o);l=je(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function $s(n,e){return n.eventCache.isCompleteForChild(e)}function _c(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=O(t,l);$s(e,E(u))&&(a=Cn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=O(t,l);$s(e,E(u))||(a=Cn(n,a,u,c,i,r,o))}),a}function zs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function wn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=s:c=new T(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=zs(n,f,h);l=Pt(n,l,new I(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),g=zs(n,m,h);l=Pt(n,l,new I(d),g,i,r,o,a)}}),l}function gc(n,e,t,s,i,r,o){if(Dt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Pt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(v(t)){let c=new T(null);return l.getNode().forEachChild(Te,(u,d)=>{c=c.set(new I(u),d)}),wn(n,e,t,c,i,r,a,o)}else return e}else{let c=new T(null);return s.foreach((u,d)=>{const h=O(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),wn(n,e,t,c,i,r,a,o)}}function yc(n,e,t,s,i){const r=e.serverCache,o=sr(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return dr(n,o,t,s,cr,i)}function vc(n,e,t,s,i,r){let o;if(Dt(s,t)!=null)return e;{const a=new Un(s,e,i),l=e.eventCache.getNode();let c;if(v(t)||E(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=At(s,Ee(e));else{const d=e.serverCache.getNode();p(d instanceof _,"serverChildren would be complete if leaf node"),u=Bn(s,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=E(t);let d=Wn(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,S(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,_.EMPTY_NODE,S(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=At(s,Ee(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dt(s,C())!=null,je(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ec{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new On(s.getIndex()),r=Wl(s);this.processor_=hc(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(_.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(_.EMPTY_NODE,a.getNode(),null),u=new ue(l,o.isFullyInitialized(),i.filtersNodes()),d=new ue(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ut(d,u),this.eventGenerator_=new ql(this.query_)}get query(){return this.query_}}function Cc(n){return n.viewCache_.serverCache.getNode()}function wc(n){return kt(n.viewCache_)}function bc(n,e){const t=Ee(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(E(e)).isEmpty())?t.getChild(e):null}function Gs(n){return n.eventRegistrations_.length===0}function Ic(n,e){n.eventRegistrations_.push(e)}function qs(n,e,t){const s=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function js(n,e,t,s){e.type===K.MERGE&&e.source.queryId!==null&&(p(Ee(n.viewCache_),"We should always have a full cache before handling merges"),p(kt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=pc(n.processor_,i,e,t,s);return fc(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ur(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Nc(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(k,(r,o)=>{s.push(ke(r,o))}),t.isFullyInitialized()&&s.push(er(t.getNode())),ur(n,s,t.getNode(),e)}function ur(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return jl(n.eventGenerator_,e,t,i)}/**
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
 */let Ot;class hr{constructor(){this.views=new Map}}function Sc(n){p(!Ot,"__referenceConstructor has already been defined"),Ot=n}function Tc(){return p(Ot,"Reference.ts has not been loaded"),Ot}function xc(n){return n.views.size===0}function Hn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return p(r!=null,"SyncTree gave us an op for an invalid query."),js(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(js(o,e,t,s));return r}}function fr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=At(t,i?s:null),l=!1;a?l=!0:s instanceof _?(a=Bn(t,s),l=!1):(a=_.EMPTY_NODE,l=!1);const c=Ut(new ue(a,l,!1),new ue(s,i,!1));return new Ec(e,c)}return o}function Rc(n,e,t,s,i,r){const o=fr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ic(o,t),Nc(o,t)}function kc(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=he(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(qs(c,t,s)),Gs(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(qs(l,t,s)),Gs(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!he(n)&&r.push(new(Tc())(e._repo,e._path)),{removed:r,events:o}}function pr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ce(n,e){let t=null;for(const s of n.views.values())t=t||bc(s,e);return t}function mr(n,e){if(e._queryParams.loadsAllData())return Vt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function _r(n,e){return mr(n,e)!=null}function he(n){return Vt(n)!=null}function Vt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mt;function Ac(n){p(!Mt,"__referenceConstructor has already been defined"),Mt=n}function Dc(){return p(Mt,"Reference.ts has not been loaded"),Mt}let Pc=1;class Ks{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=lc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gr(n,e,t,s,i){return Xl(n.pendingWriteTree_,e,t,s,i),i?ft(n,new ve(nr(),e,t)):[]}function ge(n,e,t=!1){const s=Jl(n.pendingWriteTree_,e);if(Zl(n.pendingWriteTree_,e)){let r=new T(null);return s.snap!=null?r=r.set(C(),!0):z(s.children,o=>{r=r.set(new I(o),!0)}),ft(n,new Rt(s.path,r,t))}else return[]}function ht(n,e,t){return ft(n,new ve(Ln(),e,t))}function Oc(n,e,t){const s=T.fromObject(t);return ft(n,new rt(Ln(),e,s))}function Mc(n,e){return ft(n,new it(Ln(),e))}function Lc(n,e,t){const s=$n(n,t);if(s){const i=zn(s),r=i.path,o=i.queryId,a=H(r,e),l=new it(Fn(o),a);return Gn(n,r,l)}else return[]}function yr(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||_r(o,e))){const l=kc(o,e,t,s);xc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>he(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Uc(h);for(let m=0;m<f.length;++m){const g=f[m],b=g.query,A=wr(n,g);n.listenProvider_.startListening(Ye(b),ot(n,b),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Ye(e),null):c.forEach(h=>{const f=n.queryToTagMap.get($t(h));n.listenProvider_.stopListening(Ye(h),f)}))}Hc(n,c)}return a}function vr(n,e,t,s){const i=$n(n,s);if(i!=null){const r=zn(i),o=r.path,a=r.queryId,l=H(o,e),c=new ve(Fn(a),l,t);return Gn(n,o,c)}else return[]}function Fc(n,e,t,s){const i=$n(n,s);if(i){const r=zn(i),o=r.path,a=r.queryId,l=H(o,e),c=T.fromObject(t),u=new rt(Fn(a),l,c);return Gn(n,o,u)}else return[]}function Bc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,f)=>{const m=H(h,i);r=r||ce(f,m),o=o||he(f)});let a=n.syncPointTree_.get(i);a?(o=o||he(a),r=r||ce(a,C())):(a=new hr,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=_.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const g=ce(m,C());g&&(r=r.updateImmediateChild(f,g))}));const c=_r(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=$t(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Vc();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=Ht(n.pendingWriteTree_,i);let d=Rc(a,e,t,u,r,l);if(!c&&!o&&!s){const h=mr(a,e);d=d.concat($c(n,e,h))}return d}function Vn(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=H(o,e),c=ce(a,l);if(c)return c});return or(i,e,r,t,!0)}function Wc(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=H(c,t);s=s||ce(u,d)});let i=n.syncPointTree_.get(t);i?s=s||ce(i,C()):(i=new hr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ue(s,!0,!1):null,a=Ht(n.pendingWriteTree_,e._path),l=fr(i,e,a,r?o.getNode():_.EMPTY_NODE,r);return wc(l)}function ft(n,e){return Er(e,n.syncPointTree_,null,Ht(n.pendingWriteTree_,C()))}function Er(n,e,t,s){if(v(n.path))return Cr(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=ce(i,C()));let r=[];const o=E(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=ar(s,o);r=r.concat(Er(a,l,c,u))}return i&&(r=r.concat(Hn(i,n,s,t))),r}}function Cr(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=ce(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ar(s,o),u=n.operationForChild(o);u&&(r=r.concat(Cr(u,a,l,c)))}),i&&(r=r.concat(Hn(i,n,s,t))),r}function wr(n,e){const t=e.query,s=ot(n,t);return{hashFn:()=>(Cc(e)||_.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Lc(n,t._path,s):Mc(n,t._path);{const r=Ba(i,t);return yr(n,t,null,r)}}}}function ot(n,e){const t=$t(e);return n.queryToTagMap.get(t)}function $t(n){return n._path.toString()+"$"+n._queryIdentifier}function $n(n,e){return n.tagToQueryMap.get(e)}function zn(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function Gn(n,e,t){const s=n.syncPointTree_.get(e);p(s,"Missing sync point for query tag that we're tracking");const i=Ht(n.pendingWriteTree_,e);return Hn(s,t,i,null)}function Uc(n){return n.fold((e,t,s)=>{if(t&&he(t))return[Vt(t)];{let i=[];return t&&(i=pr(t)),z(s,(r,o)=>{i=i.concat(o)}),i}})}function Ye(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Dc())(n._repo,n._path):n}function Hc(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=$t(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Vc(){return Pc++}function $c(n,e,t){const s=e._path,i=ot(n,e),r=wr(n,t),o=n.listenProvider_.startListening(Ye(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)p(!he(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!v(c)&&u&&he(u))return[Vt(u).query];{let h=[];return u&&(h=h.concat(pr(u).map(f=>f.query))),z(d,(f,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ye(u),ot(n,u))}}return o}/**
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
 */class qn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qn(t)}node(){return this.node_}}class jn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=O(this.path_,e);return new jn(this.syncTree_,t)}node(){return Vn(this.syncTree_,this.path_)}}const zc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ys=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Gc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return qc(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Gc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},qc=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&p(!1,"Unexpected increment value: "+s);const i=e.node();if(p(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},jc=function(n,e,t,s){return Kn(e,new jn(t,n),s)},br=function(n,e,t){return Kn(n,new qn(e),t)};function Kn(n,e,t){const s=n.getPriority().val(),i=Ys(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ys(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new M(a,F(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new M(i))),o.forEachChild(k,(a,l)=>{const c=Kn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Yn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Qn(n,e){let t=e instanceof I?e:new I(e),s=n,i=E(t);for(;i!==null;){const r=xe(s.node.children,i)||{children:{},childCount:0};s=new Yn(i,s,r),t=S(t),i=E(t)}return s}function Le(n){return n.node.value}function Ir(n,e){n.node.value=e,bn(n)}function Nr(n){return n.node.childCount>0}function Kc(n){return Le(n)===void 0&&!Nr(n)}function zt(n,e){z(n.node.children,(t,s)=>{e(new Yn(t,n,s))})}function Sr(n,e,t,s){t&&e(n),zt(n,i=>{Sr(i,e,!0)})}function Yc(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pt(n){return new I(n.parent===null?n.name:pt(n.parent)+"/"+n.name)}function bn(n){n.parent!==null&&Qc(n.parent,n.name,n)}function Qc(n,e,t){const s=Kc(t),i=se(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,bn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,bn(n))}/**
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
 */const Xc=/[\[\].#$\/\u0000-\u001F\u007F]/,Jc=/[\[\].#$\u0000-\u001F\u007F]/,rn=10*1024*1024,Tr=function(n){return typeof n=="string"&&n.length!==0&&!Xc.test(n)},xr=function(n){return typeof n=="string"&&n.length!==0&&!Jc.test(n)},Zc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xr(n)},ed=function(n,e,t,s){Xn(Sn(n,"value"),e,t)},Xn=function(n,e,t){const s=t instanceof I?new gl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+me(s));if(typeof e=="function")throw new Error(n+"contains a function "+me(s)+" with contents = "+e.toString());if(bi(e))throw new Error(n+"contains "+e.toString()+" "+me(s));if(typeof e=="string"&&e.length>rn/3&&Bt(e)>rn)throw new Error(n+"contains a string greater than "+rn+" utf8 bytes "+me(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(z(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tr(o)))throw new Error(n+" contains an invalid key ("+o+") "+me(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yl(s,o),Xn(n,a,s),vl(s)}),i&&r)throw new Error(n+' contains ".value" child '+me(s)+" in addition to actual children.")}},Rr=function(n,e,t,s){if(!xr(t))throw new Error(Sn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},td=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rr(n,e,t)},nd=function(n,e){if(E(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},sd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zc(t))throw new Error(Sn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class id{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ji(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Q(n,e,t){kr(n,t),rd(n,s=>j(s,e)||j(e,s))}function rd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(od(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function od(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ge&&U("event: "+t.toString()),Me(s)}}}/**
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
 */const ad="repo_interrupt",ld=25;class cd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new id,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xt(),this.transactionQueueTree_=new Yn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dd(n,e,t){if(n.stats_=kn(n.repoInfo_),n.forceRestClient_||Va())n.server_=new Tt(n.repoInfo_,(s,i,r,o)=>{Qs(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Xs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new J(n.repoInfo_,e,(s,i,r,o)=>{Qs(n,s,i,r,o)},s=>{Xs(n,s)},s=>{hd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ja(n.repoInfo_,()=>new Gl(n.stats_,n.server_)),n.infoData_=new Ul,n.infoSyncTree_=new Ks({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=ht(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zn(n,"connected",!1),n.serverSyncTree_=new Ks({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Q(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ud(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Jn(n){return zc({timestamp:ud(n)})}function Qs(n,e,t,s,i){n.dataUpdateCount++;const r=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Et(t,c=>F(c));o=Fc(n.serverSyncTree_,r,l,i)}else{const l=F(t);o=vr(n.serverSyncTree_,r,l,i)}else if(s){const l=Et(t,c=>F(c));o=Oc(n.serverSyncTree_,r,l)}else{const l=F(t);o=ht(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=qt(n,r)),Q(n.eventQueue_,a,o)}function Xs(n,e){Zn(n,"connected",e),e===!1&&md(n)}function hd(n,e){z(e,(t,s)=>{Zn(n,t,s)})}function Zn(n,e,t){const s=new I("/.info/"+e),i=F(t);n.infoData_.updateSnapshot(s,i);const r=ht(n.infoSyncTree_,s,i);Q(n.eventQueue_,s,r)}function Ar(n){return n.nextWriteId_++}function fd(n,e,t){const s=Wc(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=F(i).withIndex(e._queryParams.getIndex());Bc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ht(n.serverSyncTree_,e._path,r);else{const a=ot(n.serverSyncTree_,e);o=vr(n.serverSyncTree_,e._path,r,a)}return Q(n.eventQueue_,e._path,o),yr(n.serverSyncTree_,e,t,null,!0),r},i=>(Gt(n,"get for query "+P(e)+" failed: "+i),Promise.reject(new Error(i))))}function pd(n,e,t,s,i){Gt(n,"set",{path:e.toString(),value:t,priority:s});const r=Jn(n),o=F(t,s),a=Vn(n.serverSyncTree_,e),l=br(o,a,r),c=Ar(n),u=gr(n.serverSyncTree_,e,l,c,!0);kr(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||$("set at "+e+" failed: "+h);const g=ge(n.serverSyncTree_,c,!m);Q(n.eventQueue_,e,g),gd(n,i,h,f)});const d=Lr(n,e);qt(n,d),Q(n.eventQueue_,d,[])}function md(n){Gt(n,"onDisconnectEvents");const e=Jn(n),t=xt();yn(n.onDisconnect_,C(),(i,r)=>{const o=jc(i,r,n.serverSyncTree_,e);tr(t,i,o)});let s=[];yn(t,C(),(i,r)=>{s=s.concat(ht(n.serverSyncTree_,i,r));const o=Lr(n,i);qt(n,o)}),n.onDisconnect_=xt(),Q(n.eventQueue_,C(),s)}function _d(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ad)}function Gt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),U(t,...e)}function gd(n,e,t,s){e&&Me(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Dr(n,e,t){return Vn(n.serverSyncTree_,e,t)||_.EMPTY_NODE}function es(n,e=n.transactionQueueTree_){if(e||jt(n,e),Le(e)){const t=Or(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&yd(n,pt(e),t)}else Nr(e)&&zt(e,t=>{es(n,t)})}function yd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Dr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=H(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Gt(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(ge(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();jt(n,Qn(n.transactionQueueTree_,e)),es(n,n.transactionQueueTree_),Q(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Me(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{$("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}qt(n,e)}},o)}function qt(n,e){const t=Pr(n,e),s=pt(t),i=Or(n,t);return vd(n,i,s),s}function vd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=H(t,l.path);let u=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(ge(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ld)u=!0,d="maxretry",i=i.concat(ge(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Dr(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Xn("transaction failed: Data returned ",f,l.path);let m=F(f);typeof f=="object"&&f!=null&&se(f,".priority")||(m=m.updatePriority(h.getPriority()));const b=l.currentWriteId,A=Jn(n),D=br(m,h,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=D,l.currentWriteId=Ar(n),o.splice(o.indexOf(b),1),i=i.concat(gr(n.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),i=i.concat(ge(n.serverSyncTree_,b,!0))}else u=!0,d="nodata",i=i.concat(ge(n.serverSyncTree_,l.currentWriteId,!0))}Q(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}jt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Me(s[a]);es(n,n.transactionQueueTree_)}function Pr(n,e){let t,s=n.transactionQueueTree_;for(t=E(e);t!==null&&Le(s)===void 0;)s=Qn(s,t),e=S(e),t=E(e);return s}function Or(n,e){const t=[];return Mr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Mr(n,e,t){const s=Le(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);zt(e,i=>{Mr(n,i,t)})}function jt(n,e){const t=Le(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ir(e,t.length>0?t:void 0)}zt(e,s=>{jt(n,s)})}function Lr(n,e){const t=pt(Pr(n,e)),s=Qn(n.transactionQueueTree_,e);return Yc(s,i=>{on(n,i)}),on(n,s),Sr(s,i=>{on(n,i)}),t}function on(n,e){const t=Le(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ge(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ir(e,void 0):t.length=r+1,Q(n.eventQueue_,pt(e),i);for(let o=0;o<s.length;o++)Me(s[o])}}/**
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
 */function Ed(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Cd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$(`Invalid query segment '${t}' in query '${n}'`)}return e}const Js=function(n,e){const t=wd(n),s=t.namespace;t.domain==="firebase.com"&&te(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&te("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Pa();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Mi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new I(t.pathString)}},wd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=Ed(n.substring(u,d)));const h=Cd(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class bd{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())}}class Id{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Nd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ts{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:zi(this._path)}get ref(){return new ie(this._repo,this._path)}get _queryIdentifier(){const e=Fs(this._queryParams),t=xn(e);return t==="{}"?"default":t}get _queryObject(){return Fs(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof ts))return!1;const t=this._repo===e._repo,s=ji(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_l(this._path)}}class ie extends ts{constructor(e,t){super(e,t,new Mn,!1)}get parent(){const e=qi(this._path);return e===null?null:new ie(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class at{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new I(e),s=Lt(this.ref,e);return new at(this._node.getChild(t),s,k)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new at(i,Lt(this.ref,s),k)))}hasChild(e){const t=new I(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fe(n,e){return n=Pe(n),n._checkNotDeleted("ref"),e!==void 0?Lt(n._root,e):n._root}function Lt(n,e){return n=Pe(n),E(n._path)===null?td("child","path",e):Rr("child","path",e),new ie(n._repo,O(n._path,e))}function ns(n,e){n=Pe(n),nd("set",n._path),ed("set",e,n._path);const t=new Ft;return pd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ss(n){n=Pe(n);const e=new Nd(()=>{}),t=new is(e);return fd(n._repo,n,t).then(s=>new at(s,new ie(n._repo,n._path),n._queryParams.getIndex()))}class is{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new bd("value",this,new at(e.snapshotNode,new ie(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Id(this,e,t):null}matches(e){return e instanceof is?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Sc(ie);Ac(ie);/**
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
 */const Sd="FIREBASE_DATABASE_EMULATOR_HOST",In={};let Td=!1;function xd(n,e,t,s){n.repoInfo_=new Mi(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Rd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||te("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),U("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Js(r,i),a=o.repoInfo,l;typeof process<"u"&&vs&&(l=vs[Sd]),l?(r=`http://${l}?ns=${a.namespace}`,o=Js(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new za(n.name,n.options,e);sd("Invalid Firebase Database URL",o),v(o.path)||te("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ad(a,n,c,new $a(n,t));return new Dd(u,n)}function kd(n,e){const t=In[e];(!t||t[n.key]!==n)&&te(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_d(n),delete t[n.key]}function Ad(n,e,t,s){let i=In[e.name];i||(i={},In[e.name]=i);let r=i[n.toURLString()];return r&&te("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new cd(n,Td,t,s),i[n.toURLString()]=r,r}class Dd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ie(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&te("Cannot call "+e+" on a deleted database.")}}function Pd(n=_a(),e){const t=ua(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Zr("database");s&&Od(t,...s)}return t}function Od(n,e,t,s={}){n=Pe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ct(s,r.repoInfo_.emulatorOptions))return;te("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&te('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new gt(gt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:eo(s.mockUserToken,n.app.options.projectId);o=new gt(a)}xd(r,i,s,o)}/**
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
 */function Md(n){Ta(ma),bt(new Je("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Rd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ne(Es,Cs,n),Ne(Es,Cs,"esm2017")}J.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};J.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Md();var Ld="firebase",Fd="11.6.1";/**
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
 */Ne(Ld,Fd,"app");const Bd={apiKey:"AIzaSyCtDbxHlTC-9UqaQWrS-HMETfV5pakVf3o",authDomain:"water-tracker-6f8ca.firebaseapp.com",databaseURL:"https://water-tracker-6f8ca-default-rtdb.europe-west1.firebasedatabase.app",projectId:"water-tracker-6f8ca",storageBucket:"water-tracker-6f8ca.firebasestorage.app",messagingSenderId:"504549086275",appId:"1:504549086275:web:8e8de9603d52a80f9930f6",measurementId:"G-EQSDZGL49G"},Wd=gi(Bd),Be=Pd(Wd);async function Ud(){return(await ss(Lt(Fe(Be),"cashEntries"))).val()}function Hd(){const n=document.createElement("div");return n.className="loading-message",n.textContent="Загрузка данных...",document.body.appendChild(n),n}const Vd="v1.0.2",$d=`
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
</svg>`;function rs(){const n=document.createElement("header");n.className="header-container";const e=document.createElement("img");e.src="/logo.svg";const t=document.createElement("div");t.className="text-container";const s=document.createElement("h1");s.textContent="Трекер воды";const i=document.createElement("b");i.textContent="отдел 308";const r=document.createElement("b");return r.className="version-label",r.textContent=Vd,n.innerHTML=$d,t.append(s,i),n.append(t,r),n}function R({type:n,text:e,className:t,onClick:s,disabled:i=!1,iconSvg:r,iconClass:o}){const a=document.createElement("button");if(a.type=n,e&&(a.textContent=e),a.className=t,a.disabled=i,s&&a.addEventListener("click",s),r){const l=document.createElement("span");l.innerHTML=r.trim(),o&&(l.className=o),a.appendChild(l)}return a}function W(n){document.body.style.overflow="",document.body.removeChild(n)}function fe(n){const e=document.createElement("button");e.className="close-btn",e.setAttribute("aria-label","Закрыть");const t=document.createElement("div"),s=document.createElement("div");return t.className="close-line",s.className="close-line",e.appendChild(t),e.appendChild(s),e.addEventListener("click",n),e}function zd(n){const e=[];function t(r){const[o,a,l]=r.split("-");return`${l}.${a}.${o}`}n.forEach(r=>{const a=[t(r.date),0,0];r.type==="deposit"&&(a[1]=r.amount),r.type==="expense"&&(a[2]=r.amount),e.push(a)});const s={};for(const[r,o,a]of e)s[r]||(s[r]=[r,0,0]),s[r][1]+=o,s[r][2]+=a;return Object.values(s).sort((r,o)=>{const a=l=>{const[c,u,d]=l.split(".");return new Date(`${d}-${u}-${c}`)};return a(r[0]).getTime()-a(o[0]).getTime()})}function Gd(n){const e=zd(n);let t=0;function s(){return t<0?"red":t>0&&t<5?"orang":""}const i=document.createElement("div");i.className="modal-content";const r=document.createElement("div");return r.className="modal-table",e.forEach(o=>{t=t+o[1]-o[2];const a=document.createElement("div");a.className="modal-cash-up",a.innerHTML=`+ ${o[1].toFixed(2)}`;const l=document.createElement("div");l.className="modal-cash-date";const c=document.createElement("p");c.className="modal-data",c.innerText=o[0];const u=document.createElement("p");u.className=s(),u.innerText=`${t.toFixed(2)} BYN`,l.append(c,u);const d=document.createElement("div");d.className="modal-cash-lou",d.innerHTML=`- ${o[2].toFixed(2)}`;const h=document.createElement("div");h.className="line-modal",h.append(a,l,d),r.prepend(h)}),i.append(r),i}function qd(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML=n;const o=fe(()=>{W(t)});return i.append(r,o),s.appendChild(i),s.appendChild(Gd(e)),t.appendChild(s),t.addEventListener("click",a=>{a.target===t&&W(t)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&W(t)}),document.body.style.overflow="hidden",document.body.appendChild(t),t}function jd(n){const e=document.createElement("div");e.className="users";let t=n;return Xd()?t=[...n].sort((s,i)=>s.employeeName.localeCompare(i.employeeName)):t=[...n].sort((s,i)=>i.employeeName.localeCompare(s.employeeName)),t.forEach(s=>{if(!s.isDelete){let i=function(){return o<0?"user-btn red":o>0&&o<5?"user-btn orang":"user-btn"};const r=s.transactions;let o=0;r.forEach(d=>{d.type==="deposit"?o+=d.amount:o-=d.amount});const a=document.createElement("div");a.className="user";const l=document.createElement("div");l.className="user-name";const c=R({type:"button",text:s.employeeName,className:i(),onClick:()=>{qd(s.employeeName,r)}});l.appendChild(c);const u=document.createElement("div");o<0?u.className="cash red":o>0&&o<5?u.className="cash orang":u.className="cash",u.textContent=String(Math.round(o*100)/100),a.append(l,u),e.append(a)}}),e}function Kd(n){let e=0;return n.forEach(t=>{t.isDelete||t.transactions.forEach(s=>{s.type==="deposit"?e+=s.amount:s.type==="expense"&&(e-=s.amount)})}),e}const Yd=`<svg xmlns="http://www.w3.org/2000/svg" width="8px" height="19px" viewBox="0 0 600 1200">
  <path fill="#FEFEFE" d="M291.88 81.5c28.62 0 52.02 23.4 52.02 52.02v811.81l125.8-125.8c20.24-20.24 53.33-20.24 73.57 0 20.23 20.24 20.23 53.33 0 73.57l-205.62 205.61c-2.23 3.91-5.02 7.6-8.35 10.93-17.71 17.71-45.26 19.92-65.42 6.64l-0.4-0.26c-4.06-2.66-7.73-5.88-10.91-9.54L41.21 895.13c-20.23-20.24-20.23-53.33 0-73.57 20.24-20.24 53.33-20.24 73.57 0l125.16 125.16V133.52c0-28.62 23.4-52.02 52.02-52.02z"/>
</svg>`;let Qe=!0;function Qd(){return Qe=!Qe,Qe}function Xd(){return Qe}function Jd(n){const e=Object.entries(n).map(([l,c])=>({id:l,...c})),t=Kd(e),s=document.createElement("div");s.className="user-list";const i=document.createElement("div");i.className="text-content";const r=R({type:"button",className:"btn-arrow",onClick:()=>{Qd(),B()},iconSvg:Yd,iconClass:Qe?"":"rotate-up"}),o=document.createElement("div");o.className="text-user",o.textContent="Сотрудник";const a=document.createElement("div");return a.className="text-cash",a.style.whiteSpace="pre-line",a.textContent=`Баланс 
${t.toFixed(2)} BYN`,o.append(r),i.append(o,a),s.append(i,jd(e)),s}function Zs(n){const e=Fe(Be,"admin/password");ns(e,n)}function Zd(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Сменить пароль";const r=fe(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const l=document.createElement("p");l.className="pass-title",l.textContent="Старай пароль:";const c=document.createElement("input");c.className="pass-input",c.placeholder="Пароль",c.type="password",c.required=!0,c.addEventListener("input",()=>{c.classList.remove("input-error"),c.setCustomValidity("")});const u=document.createElement("p");u.className="pass-title",u.textContent="Новый пароль:";const d=document.createElement("input");d.className="pass-input",d.placeholder="Новый пароль",d.type="password",d.required=!0,d.addEventListener("input",()=>{d.classList.remove("input-error"),d.setCustomValidity("")});const h=document.createElement("p");h.className="pass-title",h.textContent="Повторите пароль:";const f=document.createElement("input");f.className="pass-input",f.placeholder="Повторить пароль",f.type="password",f.required=!0,f.addEventListener("input",()=>{f.classList.remove("input-error"),f.setCustomValidity("")});const m=R({type:"button",text:"Сменить",className:"btn-user-del",onClick:()=>{if(c.value!==n){c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}Zs(d.value),b(),B()}});a.append(l,c,u,d,h,f,m),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const g=A=>{if(A.key==="Escape"&&b(),A.key==="Enter"){if(c.value!==n){c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error");return}if(d.value.length<4){d.setCustomValidity("4 символа и больше "),d.reportValidity(),d.classList.add("input-error");return}if(d.value!==f.value){f.setCustomValidity("Пароль не совпадает"),f.reportValidity(),f.classList.add("input-error");return}Zs(d.value),b(),B()}};function b(){document.removeEventListener("keydown",g),W(e)}document.addEventListener("keydown",g),e.addEventListener("click",A=>{A.target===e&&b()}),c.focus()}function an(){const n=sessionStorage.getItem("pass"),e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Выполнить вход";const r=fe(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-authorization-modal";const l=document.createElement("p");l.className="pass-title",l.textContent="Пароль:";const c=document.createElement("input");c.className="pass-input",c.placeholder="Пароль",c.type="password",c.required=!0,c.addEventListener("input",()=>{c.classList.remove("input-error"),c.setCustomValidity("")});const u=R({type:"button",text:"Войти",className:"btn-user-del",onClick:()=>{c.value===n?(sessionStorage.setItem("authorization","true"),f(),ne("/"),B()):(c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error"))}}),d=R({type:"button",text:"Сменить пароль.",className:"btn-cheng-pass",onClick:()=>{W(e),Zd()}});a.append(l,c,u,d),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const h=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&(c.value===n?(sessionStorage.setItem("authorization","true"),f(),ne("/"),B()):(c.setCustomValidity("Неверный пароль"),c.reportValidity(),c.classList.add("input-error")))};function f(){document.removeEventListener("keydown",h),W(e)}document.addEventListener("keydown",h),e.addEventListener("click",m=>{m.target===e&&f()}),c.focus()}function eu(n){const e=Fe(Be,"gameScores");ns(e,n)}let Fr;function tu(){const n=document.createElement("div");n.className="game-start-menu-content";const e=document.createElement("label");e.className="label-start",e.textContent="Введите имя Сотрудника";const t=document.createElement("input");t.className="input-cash-water";const s=R({type:"button",text:"Поднять KPI",className:"btn-start-game-disable",onClick:()=>{ru()}});return t.addEventListener("input",()=>{t.value.trim().length>2?(s.classList.remove("btn-start-game-disable"),s.classList.add("btn-start-game"),Fr=t.value):(s.classList.remove("btn-start-game"),s.classList.add("btn-start-game-disable"))}),n.append(e,t,s),t.focus(),n}function Br(){return Fr}let ze=0;function nu(){return ze}function su(n){const e=n.getContext("2d"),t={x:50,y:150,vy:0,width:35,height:35,grounded:!0,gravity:1.5,jumpForce:-16,canJump:!0},s=[],i=["ОП","ТС","СБКТС","ОTТС","ОТШ","ЭПСМ","ЭПТС"];let r=!0,o=null,a=null,l=4;const c=50,u=.001;function d(){e.fillStyle="#000",e.font="20px Arial",e.fillText("KPI",t.x,t.y+t.height-10)}function h(){e.fillStyle="red",e.font="18px Arial";for(const w of s)e.fillText(w.text,w.x,w.y+w.height-15)}function f(){e.fillStyle="black",e.font="14px Courier New, monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`У сотрудника ${Br()} yровень KPI: ${ze}`,15,15)}function m(){e.fillStyle="black",e.font="14px Courier New, monospace";const w=n.width/2-90,x=n.height/2;e.fillText("Для старта жми SPACE",w,x)}m();function g(){e.textAlign="center",e.textBaseline="middle",e.fillStyle="black";const w=n.width/2,x=n.height/2;e.font="14px Courier New, monospace",e.fillText("Вы не справились с документом.",w,x-15),e.font="14px Courier New, monospace",e.fillText("Нажмите",w-110,x),e.font="bold 14px Courier New, monospace",e.fillText("ENTER",w-50,x),e.font="14px Courier New, monospace",e.fillText("чтобы начать заново.",w+65,x),e.font="14px Courier New, monospace",e.fillText("Нажмите",w-70,x+15),e.font="bold 14px Courier New, monospace",e.fillText("ESC",w+-20,x+15),e.font="14px Courier New, monospace",e.fillText("чтобы выйти.",w+50,x+15)}function b(){for(const x of s){const Kt=t.y>=150;if(t.x+t.width>x.x+5&&t.x<x.x+x.width-5&&Kt){r=!0,g(),document.removeEventListener("keydown",We),document.addEventListener("keydown",os),o&&cancelAnimationFrame(o),a&&clearInterval(a);break}}}function A(){e.clearRect(0,0,n.width,n.height),f(),l<c&&(l+=u),t.grounded||(t.vy+=t.gravity,t.y+=t.vy,t.y>=150&&(t.y=150,t.vy=0,t.grounded||(t.grounded=!0,setTimeout(()=>{t.canJump=!0},50))));for(const w of s)w.x-=l;for(let w=s.length-1;w>=0;w--){const x=s[w];!x.passed&&x.x+x.width<t.x&&(x.passed=!0,ze=+(ze+.01).toFixed(2)),x.x+x.width<0&&s.splice(w,1)}d(),h(),b(),r||(o=requestAnimationFrame(A))}function D(){if(r)return;const w=i[Math.floor(Math.random()*i.length)],x=e.measureText(w).width;s.push({x:n.width,y:150,text:w,width:x,height:40,passed:!1});const Kt=2e3,as=300;function Wr(Hr){const Vr=Kt-(Hr-4)*450;return Math.max(Vr,as)+Math.random()*600}const Ur=Wr(l);a=window.setTimeout(D,Ur)}function G(){ze=0,t.x=50,t.y=150,t.vy=0,t.grounded=!0,t.canJump=!0,s.length=0,l=4,r=!1,A(),D(),document.removeEventListener("keydown",os)}r||G();const We=w=>{w.code==="Space"&&(r?G():t.grounded&&t.canJump&&(t.vy=t.jumpForce,t.grounded=!1,t.canJump=!1))},os=w=>{w.code==="Enter"&&(r?(document.addEventListener("keydown",We),G()):t.grounded&&t.canJump&&(t.vy=t.jumpForce,t.grounded=!1,t.canJump=!1))};document.addEventListener("keydown",We)}function ei(n){const e=document.createElement("div");e.className="game-score-content";const t=document.createElement("div");t.className="text-content";const s=document.createElement("div");s.className="text-user",s.textContent="Сотрудник ";const i=document.createElement("div");i.className="text-cash",i.style.whiteSpace="pre-line",i.textContent="KPI",t.append(s,i);const r=document.createElement("div");return r.className="users",n.forEach(o=>{const a=document.createElement("div");a.className="user";const l=document.createElement("div");l.className="game-text-name",l.textContent=o.name;const c=document.createElement("div");c.className="game-text-score",c.style.whiteSpace="pre-line",c.textContent=o.score.toString(),a.append(l,c),r.append(a)}),e.append(t,r),e}let yt=!1,be,re,ln,ti;function iu(n){if(document.querySelector(".modal-overlay"))return;const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal-game";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML="Поднятие KPI в одиночку";const r=fe(()=>{l()}),o=document.createElement("div");o.className="modal-content",be=document.createElement("div"),be.className="content-for-game-modal",re=document.createElement("canvas"),re.id="game",re.width=800,re.height=200,ln=tu(),ti=ei(n),be.append(ti,ln),o.append(be),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const a=u=>{u.key==="Escape"&&(yt?(yt=!1,c()):l())};document.addEventListener("keydown",a),e.addEventListener("click",u=>{u.target===e&&l()});function l(){document.removeEventListener("keydown",a),document.body.style.overflow="",W(e),yt=!1}function c(){const u=[...n],d={name:Br(),score:nu()},h=u.findIndex(f=>f.name===d.name);if(h!==-1)d.score>u[h].score&&(u[h]=d);else{const f=Math.min(...u.map(g=>g.score)),m=u.findIndex(g=>g.score===f);d.score>f&&(u.splice(m,1),u.push(d))}u.sort((f,m)=>m.score-f.score),eu(u),re.width=re.clientWidth,be.replaceChildren(ei(u),ln)}}function ru(){yt=!0,be.replaceChildren(re),su(re)}function ou(n){const e=document.createElement("div");e.className="navigation-panel";const t=R({type:"button",text:"Войти",className:"btn-edit",onClick:()=>{an()}}),s=R({type:"button",text:"Поднять KPI",className:"btn-edit",onClick:()=>{iu(n)}}),i=R({type:"button",text:"Редактировать",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(ne("/edit"),B()):an()}}),r=R({type:"button",text:"Списать воду",className:"btn-edit",onClick:()=>{sessionStorage.getItem("authorization")?(ne("/water"),B()):an()}}),o=R({type:"button",text:"Выйти из системы",className:"btn-edit",onClick:()=>{sessionStorage.removeItem("authorization"),B()}});return sessionStorage.getItem("authorization")?e.append(i,r,o):e.append(t,s),e}function au(n,e){const t=document.createElement("div");return t.className="main-content",t.append(Jd(n),ou(e)),t}function lu(n,e){const t=document.createElement("div");return t.className="main-container",t.append(rs(),au(n,e)),t}function Z(n){n.forEach(e=>{const t=Fe(Be,"cashEntries/"+e.employeeId);ns(t,e)})}function cu(){return"emp_"+Math.random().toString(36).substring(2,10)}const du=/^[A-Za-zА-Яа-яЁё\\.\\s]{3,}$/;function uu(){const n=document.createElement("div");n.className="modal-overlay";const e=document.createElement("div");e.className="modal";const t=document.createElement("div");t.className="top-windows";const s=document.createElement("div");s.className="modal-title",s.innerHTML="Новый сотрудник";const i=fe(()=>{W(n)}),r=document.createElement("div");r.className="modal-content";const o=document.createElement("div");o.className="content-for-edit-modal",o.textContent="Имя:";const a=document.createElement("input");a.disabled=!1,a.placeholder="Введите имя",a.type="text",a.className="input-user-edit",a.minLength=3,a.pattern="[A-Za-zА-Яа-яЁё\\.\\s]{3,}",a.required=!0,a.addEventListener("input",()=>{du.test(a.value.trim())&&(a.classList.remove("input-cash-edit-alarm"),a.setCustomValidity(""))});const l=document.createElement("div");l.className="content-for-edit-modal",l.textContent="Сумма";const c=document.createElement("input");c.disabled=!1,c.type="number",c.min="0",c.setAttribute("step","0.01"),c.className="input-cash-edit";function u(){const m=a.value.trim(),g=Number(c.value);if(!a.checkValidity()){a.setCustomValidity("Введите корректное имя, например: Иванов В.В."),a.reportValidity(),a.classList.add("input-cash-edit-alarm"),a.focus();return}f();const b={employeeId:cu(),employeeName:m,isActive:!0,isDelete:!1,transactions:[]},A={date:new Date().toISOString().slice(0,10),type:"deposit",amount:parseFloat(g.toFixed(2))};b.transactions.push(A),Z([b]),B()}const d=R({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{u()}});o.append(a,l,c,d),r.append(o),t.append(s,i),e.append(t,r),n.appendChild(e),document.body.style.overflow="hidden",document.body.appendChild(n);const h=m=>{m.key==="Escape"&&f(),m.key==="Enter"&&u()};function f(){document.removeEventListener("keydown",h),W(n)}document.addEventListener("keydown",h),n.addEventListener("click",m=>{m.target===n&&f()}),a.focus()}function hu(){const n=document.createElement("div");n.className="navigation-panel";const e=R({type:"button",text:"Добавить сотрудника",className:"btn-edit",onClick:()=>{uu()}}),t=R({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{ne("/"),B()}});return n.append(e,t),n}function fu(n){const e=document.createElement("div");e.className="modal-overlay";const t=document.createElement("div");t.className="modal";const s=document.createElement("div");s.className="top-windows";const i=document.createElement("div");i.className="modal-title",i.innerHTML=n.employeeName;const r=fe(()=>{W(e)}),o=document.createElement("div");o.className="modal-content";const a=document.createElement("div");a.className="content-for-edit-modal",a.textContent=`Удалить ${n.employeeName} ?`;const l=R({type:"button",text:"Удалить",className:"btn-user-del",onClick:()=>{n.isDelete=!0,Z([n]),u(),B()}});a.append(l),o.append(a),s.append(i,r),t.append(s,o),e.appendChild(t),document.body.style.overflow="hidden",document.body.appendChild(e);const c=d=>{d.key==="Escape"&&u(),d.key==="Enter"&&(n.isDelete=!0,Z([n]),u(),B())};function u(){document.removeEventListener("keydown",c),W(e)}document.addEventListener("keydown",c),e.addEventListener("click",d=>{d.target===e&&u()})}function ni(n,e,t,s){const i=document.createElement("div");i.className="modal-overlay";const r=document.createElement("div");r.className="modal";const o=document.createElement("div");o.className="top-windows";const a=document.createElement("div");a.className="modal-title",a.innerHTML=`${n} : ${e.toFixed(2)} BYN`;const l=fe(()=>{W(i)}),c=document.createElement("div");c.className="modal-content";const u=document.createElement("div");u.className="content-for-edit-modal",u.textContent=`Введите сумму ${t}: `;const d=document.createElement("input");d.disabled=!1,d.type="number",d.min="0",d.setAttribute("step","0.01"),d.className="input-cash-edit";const h=R({type:"button",text:"Ok",className:"btn-up-cash",onClick:()=>{s(Number(d.value)),m()}});u.append(d,h),c.append(u),o.append(a,l),r.append(o,c),i.appendChild(r),document.body.style.overflow="hidden",document.body.appendChild(i);const f=g=>{g.key==="Escape"&&m(),g.key==="Enter"&&(s(Number(d.value)),m())};function m(){document.removeEventListener("keydown",f),W(i)}return document.addEventListener("keydown",f),i.addEventListener("click",g=>{g.target===i&&m()}),d.focus(),i}const pu=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="23" height="25" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 10400 13600">
  <path fill="currentColor" d="M1681.49 4022.23l7037.03 0 -370.37 4576.71c-4.39,175.41 -38.66,392.5 -51.17,557.3l-88.41 1154.97c-44.6,339.06 -136.02,2101.05 -224.44,2262.33 -73.62,134.27 -228.85,205.29 -429.63,205.29l-4708.99 0c-502.14,0 -485.3,-352.52 -503.14,-713.8l-142.95 -1708.9c-30.89,-208.55 -23.32,-376.41 -45.78,-589.13l-472.15 -5744.77zm8677.24 -1225.65l0 881.73c0,162.22 -181.7,343.92 -343.92,343.92l-476.19 0c0,218.17 -47.51,445.31 -52.91,661.37 -8.35,334.1 -96.71,976.22 -105.57,1323l-163.02 1979.84c-20.94,198.29 -27.49,440.03 -56.17,658.11 -61.47,467.39 -99.7,1493.08 -166.7,1949.7 -47.73,325.28 -67.72,973.22 -109.7,1292.41 -61.9,470.66 21.59,1167.98 -624.04,1518.82 -140.67,76.44 -318.25,167 -520.83,167l-5079.36 0c-198.8,0 -402.63,-97.41 -538.25,-176.04 -644.37,-373.6 -546.15,-1093.81 -610.5,-1532.35 -33.34,-227.23 -23.65,-430.06 -56.99,-657.29l-328.61 -3930.65c-16.44,-523.88 -145.89,-1442.65 -158.77,-1957.63 -7.6,-304.01 -105.82,-1044.63 -105.82,-1296.29l-476.19 0c-162.22,0 -343.91,-181.7 -343.91,-343.92l0 -899.47c0,-613.96 580.2,-1137.56 1111.11,-1137.56l2063.49 0 0 -476.19c0,-613.96 580.2,-1137.57 1111.11,-1137.57l1719.57 0c368.51,0 596.77,160.04 787.15,350.42 403.24,403.24 350.42,731.05 350.42,1263.34l2037.03 0c368.51,0 596.77,160.04 787.15,350.41 236.18,236.18 322.47,510.83 350.42,804.89zm-7142.85 2363.21l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm3174.6 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.65,-456.76 -793.65,0zm-1587.3 0l0 6481.48c0,456.75 793.65,456.75 793.65,0l0 -6481.48c0,-456.76 -793.66,-456.76 -793.65,0zm-3968.25 -2248.67c0,-311.78 164.41,-476.19 476.19,-476.19l7777.77 0c535.81,0 476.19,429.07 476.19,793.65l-8730.15 0 0 -317.46zm3174.6 -1613.76c0,-311.78 164.41,-476.19 476.19,-476.19l1428.57 0c541.93,0 476.19,439.86 476.19,820.11l-2380.95 0 0 -343.92z"/>
</svg>`;function mu(n,e){const{employeeName:t}=n,s=document.createElement("div");s.className="user-for-users-list";const i=R({type:"button",text:"",className:"btn-user-del",onClick:()=>{fu(n)}});i.insertAdjacentHTML("beforeend",pu);const r=R({type:"button",text:"Изменить имя",className:"btn-user-edit",onClick:()=>{o.disabled=!o.disabled,o.disabled?(r.textContent="Изменить имя",n.employeeName=o.value.trim(),Z([n])):(o.focus(),o.value=t,r.textContent="Сохранить")}}),o=document.createElement("input");o.disabled=!0,o.type="text",o.placeholder=t,o.className="input-user-edit";const a=document.createElement("input");a.disabled=!0,a.type="text",a.value=String((Math.round(e*100)/100).toFixed(2)),a.placeholder=String((Math.round(e*100)/100).toFixed(2)),a.className="input-cash-edit";const l=R({type:"button",text:"+",className:"btn-up-cash",onClick:()=>{ni(t,e,"пополнения",u=>{const d=Number(a.value)+u;a.value=d.toString();const h={date:new Date().toISOString().slice(0,10),type:"deposit",amount:u};n.transactions.push(h),Z([n])})}}),c=R({type:"button",text:"-",className:"btn-lou-cash",onClick:()=>{ni(t,e,"списания",u=>{const d=Number(a.value)-u;a.value=d.toString();const h={date:new Date().toISOString().slice(0,10),type:"expense",amount:u};n.transactions.push(h),Z([n])})}});return s.append(i,o,r,a,l,c),s}function _u(n){const e=Object.entries(n).map(([s,i])=>({id:s,...i})),t=document.createElement("div");return t.className="users-list-for-edit-page",[...e].sort((s,i)=>s.employeeName.localeCompare(i.employeeName)).forEach(s=>{const i=s.transactions;let r=0;i.forEach(o=>{o.type==="deposit"?r+=o.amount:r-=o.amount}),s.isDelete||t.append(mu(s,r))}),t}function gu(n){const e=document.createElement("div");return e.className="edit-content",e.append(_u(n),hu()),e}function yu(n){const e=document.createElement("div");return e.className="main-container",e.append(rs(),gu(n)),e}function vu(){const n=document.createElement("div");n.className="navigation-panel";const e=R({type:"button",text:"Выход",className:"btn-edit",onClick:()=>{ne("/"),B()}});return n.append(e),n}function si(n,e){const s=Object.entries(n).map(([r,o])=>({id:r,...o})).filter(r=>r.isActive&&!r.isDelete),i=e/s.length;for(const r of s){const o={date:new Date().toISOString().slice(0,10),type:"expense",amount:parseFloat(i.toFixed(2))};r.transactions.push(o),Z([r])}}function Eu(n,e){const t=document.createElement("div");t.className="modal-overlay";const s=document.createElement("div");s.className="modal";const i=document.createElement("div");i.className="top-windows";const r=document.createElement("div");r.className="modal-title",r.innerHTML="Списание средств";const o=fe(()=>{W(t)}),a=document.createElement("div");a.className="modal-content-for-write";const l=document.createElement("div");l.className="modal-content-user-list";const u=Object.entries(n).map(([D,G])=>({id:D,...G})).filter(D=>D.isActive&&!D.isDelete);for(const D of u){const G=document.createElement("div");G.className="modal-content-user",G.textContent=D.employeeName,l.append(G)}const d=document.createElement("div");d.className="content-for-water-modal";const h=document.createElement("div");h.className="line";const f=document.createElement("p");f.textContent=`Списать ${e} BYN?`;const m=document.createElement("p");m.className="line-2",m.textContent=`(с каждого сотрудника по ${(e/u.length).toFixed(2)} BYN)`,h.append(f,m);const g=R({type:"button",text:"Списать",className:"btn-user-del",onClick:()=>{si(n,e),A(),ne("/"),B()}});d.append(h,g),a.append(l,d),i.append(r,o),s.append(i,a),t.appendChild(s),document.body.style.overflow="hidden",document.body.appendChild(t);const b=D=>{D.key==="Escape"&&A(),D.key==="Enter"&&(si(n,e),A(),ne("/"),B())};function A(){document.removeEventListener("keydown",b),W(t)}document.addEventListener("keydown",b),t.addEventListener("click",D=>{D.target===t&&A()})}function Cu(n){const e=document.createElement("div");e.className="control-content";const t=document.createElement("div");t.className="text-content";const s=document.createElement("div");s.className="label-for-user",s.textContent="Списать";const i=document.createElement("div");i.className="content-for-control";const r=document.createElement("input");r.className="input-cash-water",r.placeholder="Сумма списания",r.type="number",r.min="0",r.setAttribute("step","0.01");const o=R({type:"button",text:"Списать сумму",className:"btn-edit-disable",onClick:()=>{Eu(n,Number(r.value))}});return r.addEventListener("input",()=>{Number(r.value)>0?(o.classList.remove("btn-edit-disable"),o.classList.add("btn-edit")):(o.classList.remove("btn-edit"),o.classList.add("btn-edit-disable"))}),i.append(r,o),t.append(s),e.append(t,i),e}function wu(n){const e=document.createElement("div");e.className="user-for-water-page";const t=document.createElement("label");t.className="user-label";const s=document.createElement("input");s.type="checkbox",s.className="user-checkbox",n.isActive&&(s.checked=!0);const i=document.createElement("span");return i.textContent=n.employeeName,i.className="user-name-for-water",s.addEventListener("change",()=>{s.checked?(n.isActive=!0,Z([n]),B()):(n.isActive=!1,Z([n]),B())}),t.append(s,i),e.append(t),e}function bu(n){const e=Object.entries(n).map(([a,l])=>({id:a,...l})),t=document.createElement("div");t.className="users-list-for-water-page";const s=document.createElement("div");s.className="user-content";const i=document.createElement("div");i.className="text-content";const r=document.createElement("div");r.className="label-for-user",r.textContent="Выберите сотрудников",i.append(r),s.append(i);const o=document.createElement("div");return o.className="users-for-water",[...e].sort((a,l)=>a.employeeName.localeCompare(l.employeeName)).forEach(a=>{a.isDelete||o.append(wu(a))}),s.append(o),t.append(s,Cu(n)),t}function Iu(n){const e=document.createElement("div");return e.className="edit-content",e.append(bu(n),vu()),e}function Nu(n){const e=document.createElement("div");return e.className="main-container",e.append(rs(),Iu(n)),e}const Su="/water-accounting";function ii(n,e){const t=window.location.pathname,s=sessionStorage.getItem("authorization");t==="/water-accounting/edit"&&s?document.body.replaceChildren(yu(n)):t==="/water-accounting/water"&&s?document.body.replaceChildren(Nu(n)):(document.body.replaceChildren(lu(n,e)),ne("/"))}function ne(n){window.history.pushState({},"",Su+n)}async function Tu(){const n=Fe(Be,"admin/password");return(await ss(n)).val()}async function xu(){const n=Fe(Be,"gameScores"),e=await ss(n);return e.exists()?e.val():null}async function B(){document.body.replaceChildren(),Hd();const[n]=await Promise.all([Ud()]),e=await Tu(),t=await xu()??[];sessionStorage.setItem("pass",e),ii(n,t),window.addEventListener("popstate",()=>{ii(n,t)})}B();
