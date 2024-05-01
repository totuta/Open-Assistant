"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[4813],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>u});var a=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)l=o[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)l=o[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},y="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),y=s(l),c=n,u=y["".concat(p,".").concat(c)]||y[c]||k[c]||o;return l?a.createElement(u,i(i({ref:e},d),{},{components:l})):a.createElement(u,i({ref:e},d))}));function u(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=l.length,i=new Array(o);i[0]=c;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r[y]="string"==typeof t?t:n,i[1]=r;for(var s=2;s<o;s++)i[s]=l[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},60289:(t,e,l)=>{l.r(e),l.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=l(87462),n=(l(67294),l(3905));const o={},i="Get Leaderboard",r={type:"api",id:"get-leaderboard",unversionedId:"get-leaderboard",title:"Get Leaderboard",description:"",slug:"/get-leaderboard",frontMatter:{},api:{tags:["leaderboards"],operationId:"get_leaderboard_api_v1_leaderboards__time_frame__get",parameters:[{required:!0,schema:{title:"UserStatsTimeFrame",enum:["day","week","month","total"],type:"string",description:"An enumeration."},name:"time_frame",in:"path"},{required:!1,schema:{title:"Max Count",maximum:1e4,exclusiveMinimum:0,type:"integer",default:100},name:"max_count",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"LeaderboardStats",required:["time_frame","last_updated","leaderboard"],type:"object",properties:{time_frame:{title:"Time Frame",type:"string"},last_updated:{title:"Last Updated",type:"string",format:"date-time"},leaderboard:{title:"Leaderboard",type:"array",items:{title:"UserScore",required:["user_id","username","auth_method","display_name"],type:"object",properties:{rank:{title:"Rank",type:"integer"},user_id:{title:"User Id",type:"string",format:"uuid"},highlighted:{title:"Highlighted",type:"boolean",default:!1},username:{title:"Username",type:"string"},auth_method:{title:"Auth Method",type:"string"},display_name:{title:"Display Name",type:"string"},leader_score:{title:"Leader Score",type:"integer",default:0},level:{title:"Level",type:"integer",default:0},base_date:{title:"Base Date",type:"string",format:"date-time"},modified_date:{title:"Modified Date",type:"string",format:"date-time"},prompts:{title:"Prompts",type:"integer",default:0},replies_assistant:{title:"Replies Assistant",type:"integer",default:0},replies_prompter:{title:"Replies Prompter",type:"integer",default:0},labels_simple:{title:"Labels Simple",type:"integer",default:0},labels_full:{title:"Labels Full",type:"integer",default:0},rankings_total:{title:"Rankings Total",type:"integer",default:0},rankings_good:{title:"Rankings Good",type:"integer",default:0},accepted_prompts:{title:"Accepted Prompts",type:"integer",default:0},accepted_replies_assistant:{title:"Accepted Replies Assistant",type:"integer",default:0},accepted_replies_prompter:{title:"Accepted Replies Prompter",type:"integer",default:0},reply_ranked_1:{title:"Reply Ranked 1",type:"integer",default:0},reply_ranked_2:{title:"Reply Ranked 2",type:"integer",default:0},reply_ranked_3:{title:"Reply Ranked 3",type:"integer",default:0},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},streak_days:{title:"Streak Days",type:"integer"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"}}}}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"oasst-user":[]},{"oasst-user":[]},{"api-key":[]},{"api-key":[]}],description:"Get Leaderboard",method:"get",path:"/api/v1/leaderboards/{time_frame}",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Leaderboard",description:{type:"text/plain"},url:{path:["api","v1","leaderboards",":time_frame"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"max_count",value:"100"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"time_frame"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/backend-openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-leaderboard",previous:{title:"Update Cached Stats",permalink:"/Open-Assistant/api/update-cached-stats"},next:{title:"Update Leaderboard Time Frame",permalink:"/Open-Assistant/api/update-leaderboard-time-frame"}},p=[],s={toc:p},d="wrapper";function y(t){let{components:e,...l}=t;return(0,n.kt)(d,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-leaderboard"},"Get Leaderboard"),(0,n.kt)("p",null,"Get Leaderboard"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"time_frame"),(0,n.kt)("span",{style:{opacity:"0.6"}}," UserStatsTimeFrame"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,n.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"week"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"total"),"]")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"An enumeration.")))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"max_count"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 10000")))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"200")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response"))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"time_frame"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Time Frame"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"last_updated"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"leaderboard"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"rank"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Rank"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"user_id"),(0,n.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"highlighted"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Highlighted"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"username"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Username"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"auth_method"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Auth Method"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"display_name"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Display Name"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"leader_score"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Leader Score"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"level"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Level"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"base_date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"modified_date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"prompts"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Prompts"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"replies_assistant"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Replies Assistant"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"replies_prompter"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Replies Prompter"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"labels_simple"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Labels Simple"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"labels_full"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Labels Full"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"rankings_total"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Rankings Total"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"rankings_good"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Rankings Good"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"accepted_prompts"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Accepted Prompts"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"accepted_replies_assistant"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Accepted Replies Assistant"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"accepted_replies_prompter"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Accepted Replies Prompter"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"reply_ranked_1"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Reply Ranked 1"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"reply_ranked_2"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Reply Ranked 2"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"reply_ranked_3"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Reply Ranked 3"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"streak_last_day_date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"streak_days"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Streak Days"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"last_activity_date"),(0,n.kt)("span",{style:{opacity:"0.6"}}," date-time"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{style:{display:"flex"}},(0,n.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,n.kt)("code",null,"422")),(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error"))),(0,n.kt)("div",null,(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("div",null)))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"detail"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,n.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"loc"),(0,n.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"msg"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Message"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"type"),(0,n.kt)("span",{style:{opacity:"0.6"}}," Error Type")))))))))))))))}y.isMDXComponent=!0}}]);