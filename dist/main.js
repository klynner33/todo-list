(()=>{"use strict";const t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function e(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const n={date:e({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:e({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function a(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function o(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}var i;const s={code:"en-US",formatDistance:(e,n,r)=>{let a;const o=t[e];return a="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},formatLong:n,formatRelative:(t,e,n,a)=>r[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:a({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:a({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:a({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:a({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:a({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(i.matchPattern);if(!n)return null;const r=n[0],a=t.match(i.parsePattern);if(!a)return null;let o=i.valueCallback?i.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:o({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:o({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:o({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:o({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let c={};function u(){return c}Math.pow(10,8);const d=6048e5,l=864e5,m=6e4,h=36e5;function f(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function g(t){const e=f(t);return e.setHours(0,0,0,0),e}function p(t){const e=f(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function w(t){const e=f(t);return function(t,e){const n=g(t),r=g(e),a=+n-p(n),o=+r-p(r);return Math.round((a-o)/l)}(e,function(t){const e=f(t),n=y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function b(t,e){const n=u(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=f(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function S(t){return b(t,{weekStartsOn:1})}function v(t){const e=f(t),n=e.getFullYear(),r=y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=S(r),o=y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=S(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function k(t){const e=f(t),n=+S(e)-+function(t){const e=v(t),n=y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),S(n)}(e);return Math.round(n/d)+1}function M(t,e){const n=f(t),r=n.getFullYear(),a=u(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=y(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=b(i,e),c=y(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=b(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function D(t,e){const n=f(t),r=+b(n,e)-+function(t,e){const n=u(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=M(t,e),o=y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),b(o,e)}(n,e);return Math.round(r/d)+1}function x(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const N={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return x("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):x(n+1,2)},d:(t,e)=>x(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>x(t.getHours()%12||12,e.length),H:(t,e)=>x(t.getHours(),e.length),m:(t,e)=>x(t.getMinutes(),e.length),s:(t,e)=>x(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return x(Math.trunc(r*Math.pow(10,n-3)),e.length)}},C={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return N.y(t,e)},Y:function(t,e,n,r){const a=M(t,r),o=a>0?a:1-a;return"YY"===e?x(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):x(o,e.length)},R:function(t,e){return x(v(t),e.length)},u:function(t,e){return x(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return N.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=D(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):x(a,e.length)},I:function(t,e,n){const r=k(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):x(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):N.d(t,e)},D:function(t,e,n){const r=w(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):x(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return x(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return x(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return x(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return N.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):N.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):N.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):N.s(t,e)},S:function(t,e){return N.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return T(r);case"XXXX":case"XX":return L(r);default:return L(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return T(r);case"xxxx":case"xx":return L(r);default:return L(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+q(r,":");default:return"GMT"+L(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+q(r,":");default:return"GMT"+L(r,":")}},t:function(t,e,n){return x(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return x(t.getTime(),e.length)}};function q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+x(o,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+x(Math.abs(t)/60,2):L(t,e)}function L(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+x(Math.trunc(r/60),2)+e+x(r%60,2)}const E=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},P=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},W={p:P,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return E(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",E(r,e)).replace("{{time}}",P(a,e))}},O=/^D+$/,j=/^Y+$/,Y=["D","DD","YY","YYYY"];function H(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=f(t);return!isNaN(Number(n))}const F=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,J=/''/g,$=/[a-zA-Z]/;function A(t,e,n){const r=u(),a=n?.locale??r.locale??s,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=f(t);if(!H(c))throw new RangeError("Invalid time value");let d=e.match(z).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,W[e])(t,a.formatLong):t})).join("").match(F).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:Q(t)};if(C[e])return{isToken:!0,value:t};if(e.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const l={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return d.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return j.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return O.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),Y.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,C[o[0]])(c,o,a.localize,l)})).join("")}function Q(t){const e=t.match(I);return e?e[1].replace(J,"'"):t}function U(t,e){const n=e?.additionalDigits??2,r=function(t){const e={},n=t.split(B.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],B.timeZoneDelimiter.test(e.date)&&(e.date=t.split(B.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const t=B.timezone.exec(r);t?(e.time=r.replace(t[1],""),e.timezone=t[1]):e.time=r}return e}(t);let a;if(r.date){const t=function(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(r.date,n);a=function(t,e){if(null===e)return new Date(NaN);const n=t.match(G);if(!n)return new Date(NaN);const r=!!n[4],a=R(n[1]),o=R(n[2])-1,i=R(n[3]),s=R(n[4]),c=R(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,c)?function(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,c):new Date(NaN);{const t=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(K[e]||(_(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(_(t)?366:365)}(e,a)?(t.setUTCFullYear(e,o,Math.max(a,i)),t):new Date(NaN)}}(t.restDateString,t.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);const o=a.getTime();let i,s=0;if(r.time&&(s=function(t){const e=t.match(X);if(!e)return NaN;const n=V(e[1]),r=V(e[2]),a=V(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*h+r*m+1e3*a:NaN}(r.time),isNaN(s)))return new Date(NaN);if(!r.timezone){const t=new Date(o+s),e=new Date(0);return e.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),e.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),e}return i=function(t){if("Z"===t)return 0;const e=t.match(Z);if(!e)return 0;const n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*h+a*m):NaN}(r.timezone),isNaN(i)?new Date(NaN):new Date(o+s+i)}const B={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},G=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,X=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Z=/^([+-])(\d{2})(?::?(\d{2}))?$/;function R(t){return t?parseInt(t):1}function V(t){return t&&parseFloat(t.replace(",","."))||0}const K=[31,null,31,30,31,30,31,31,30,31,30,31];function _(t){return t%400==0||t%4==0&&t%100!=0}function tt(t){const e=document.querySelector(".todo-list");e.innerHTML="",t.forEach((n=>{const r=document.createElement("li"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("span"),c=document.createElement("p"),u=document.createElement("span"),d=document.createElement("span"),l=document.createElement("p"),m=document.createElement("span"),h=document.createElement("button"),f=document.createElement("button"),g=document.querySelector(".expand-task-modal"),p=document.querySelector(".overlay"),y=document.querySelector(".title-container"),w=document.querySelector(".description-container"),b=document.querySelector(".due-date-container"),S=document.querySelector(".priority-container"),v=document.querySelector(".notes-container"),k=document.querySelector(".project-container");s.textContent=`${n.title}`,c.textContent=`${n.description}`,h.innerHTML='<i class="fa-solid fa-chevron-down"></i>',f.innerHTML='<i class="fa-regular fa-trash-can"></i>',a.classList.add("title-desc-container"),i.classList.add("task-details-container"),o.classList.add("task-icons-container"),s.classList.add("task-title"),c.classList.add("task-description"),u.classList.add("task-due-date"),d.classList.add("task-priority"),l.classList.add("task-notes"),m.classList.add("task-project"),h.classList.add("expand-button"),f.classList.add("delete-button"),y.classList.add("expand-title"),w.classList.add("expand-description"),b.classList.add("expand-due-date"),S.classList.add("expand-priority"),v.classList.add("expand-notes"),k.classList.add("expand-project"),r.appendChild(a),r.appendChild(i),r.appendChild(o),a.appendChild(s),a.appendChild(c),i.appendChild(u),i.appendChild(d),i.appendChild(l),i.appendChild(m),o.appendChild(h),o.appendChild(f),f.addEventListener("click",(()=>{t=t.filter((t=>t!==n)),localStorage.setItem("tasks",JSON.stringify(t)),r.remove()})),h.addEventListener("click",(()=>{y.textContent=`${n.title}`,w.textContent=`${n.description}`,b.textContent=`Due Date: ${n.dueDate?A(U(n.dueDate),"MM/dd/yyyy"):""}`,S.textContent=`Priority: ${n.priority}`,v.textContent=`Notes: ${n.notes}`,g.showModal(),p.style.display="block"})),r.classList.add("task-item"),e.appendChild(r)}))}const et=document.querySelector(".close-container"),nt=document.querySelector(".expand-task-modal"),rt=document.querySelector(".overlay");function at(){tt(JSON.parse(localStorage.getItem("tasks"))||[])}function ot(){let t=JSON.parse(localStorage.getItem("tasks"))||[],e=this.textContent;tt(t.filter((t=>t.project===e)))}function it(){const t=document.querySelector("#title"),e=document.querySelector("#description"),n=document.querySelector("#dueDate"),r=document.querySelector("#priority"),a=document.querySelector("#notes");t.value="",e.value="",n.value="",r.selectedIndex=0,a.value=""}function st(){const t=document.querySelector("#project-title"),e=document.querySelector("#project-priority");t.value="",e.selectedIndex=0}et.addEventListener("click",(t=>{t.preventDefault(),nt.close(),rt.style.display="none"}));class ct{constructor(t,e,n,r,a,o){this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.notes=a,this.project=o}}class ut{constructor(t,e){this.title=t,this.priority=e}}function dt(){let t=JSON.parse(localStorage.getItem("projects"))||[],e=document.querySelector("#choose-project");e.innerHTML="";let n=document.createElement("option");n.text="All Tasks",n.value="all-tasks",e.appendChild(n);const r=document.querySelector(".all-projects-container");r.innerHTML="",t.forEach((n=>{let a=document.createElement("option");a.text=n.title,a.value=n.title,e.appendChild(a);const o=document.createElement("li"),i=document.createElement("span"),s=document.createElement("span");i.innerHTML='<i class="fa-solid fa-hashtag"></i>',"low"===n.priority?i.style.color="#63E6BE":"medium"===n.priority?i.style.color="#FFA500":i.style.color="#FF0000",s.textContent=n.title,s.addEventListener("click",ot),i.classList.add("project-priority"),s.classList.add("project-title"),o.appendChild(i),o.appendChild(s);const c=document.createElement("button");c.innerHTML='<i class="fa-regular fa-trash-can"></i>',c.classList.add("delete-button"),c.addEventListener("click",(()=>{let e=JSON.parse(localStorage.getItem("tasks"))||[];t=t.filter((t=>t!==n)),localStorage.setItem("projects",JSON.stringify(t)),o.remove(),a.remove(),console.log("Project title:",n.title),e=e.filter((t=>t.project!==n.title)),localStorage.setItem("tasks",JSON.stringify(e)),console.log("Tasks after filtering:",e),tt(e)})),o.appendChild(c),o.classList.add("project-item"),r.appendChild(o)}))}document.addEventListener("DOMContentLoaded",(function(){tt(JSON.parse(localStorage.getItem("tasks"))||[])})),document.addEventListener("DOMContentLoaded",dt),function(){const t=document.querySelector(".add-todo-modal"),e=document.querySelector(".add-task-button"),n=document.querySelector(".close-modal-button"),r=document.querySelector(".overlay"),a=document.querySelector(".add-task-modal-button");e.addEventListener("click",(()=>{t.showModal(),r.style.display="block",it()})),n.addEventListener("click",(e=>{e.preventDefault(),t.close(),r.style.display="none",it()})),a.addEventListener("click",(e=>{e.preventDefault(),function(){let t=JSON.parse(localStorage.getItem("tasks"))||[];const e=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#dueDate").value,a=document.querySelector("#priority").value,o=document.querySelector("#notes").value,i=document.querySelector("#choose-project").value,s=new ct(e,n,r,a,o,i);t.push(s),localStorage.setItem("tasks",JSON.stringify(t))}(),at(),t.close(),r.style.display="none"}))}(),function(){const t=document.querySelector(".add-project-modal"),e=document.querySelector(".fa-plus"),n=document.querySelector(".close-project-modal-button"),r=document.querySelector(".overlay"),a=document.querySelector(".add-project-modal-button");e.addEventListener("click",(()=>{t.showModal(),r.style.display="block",st()})),n.addEventListener("click",(e=>{e.preventDefault(),t.close(),r.style.display="none",st()})),a.addEventListener("click",(e=>{e.preventDefault(),function(){let t=JSON.parse(localStorage.getItem("projects"))||[];const e=document.querySelector("#project-title").value,n=document.querySelector("#project-priority").value,r=new ut(e,n);t.push(r),localStorage.setItem("projects",JSON.stringify(t))}(),dt(),t.close(),r.style.display="none"}))}(),document.querySelector("#all-tasks-button").addEventListener("click",at),document.querySelector("#today-button").addEventListener("click",(function(){let t=JSON.parse(localStorage.getItem("tasks"))||[],e=A(new Date,"MM/dd/yyyy");const n=document.querySelector(".todo-list");n.innerHTML="";let r=t.filter((t=>A(U(t.dueDate),"MM/dd/yyyy")===e));console.log(r),0===r.length?n.textContent="No tasks for today.":tt(r)})),document.querySelector("#upcoming-button").addEventListener("click",(function(){let t=JSON.parse(localStorage.getItem("tasks"))||[],e=new Date,n=function(t,e){const n=f(t);return isNaN(e)?y(t,NaN):e?(n.setDate(n.getDate()+e),n):n}(e,7);const r=document.querySelector(".todo-list");r.innerHTML="";let a=t.filter((t=>function(t,e){const n=+f(t),[r,a]=[+f(e.start),+f(e.end)].sort(((t,e)=>t-e));return n>=r&&n<=a}(U(t.dueDate),{start:e,end:n})));0===a.length?r.textContent="No upcoming tasks in the next 7 days.":tt(a)}))})();