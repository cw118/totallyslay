(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{7872:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/moohp/agents",function(){return __webpack_require__(1943)}])},2202:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),typewriter_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5459),typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);let pageTexts={avia:"Your Mission: AVIA 2023",aviaFr:"Votre mission: AVIA 2023",agents:"Agents",archives:"MOOHP Archives",archivesFr:"Archives MOOHP",robot:"Robot"},Typewrite=param=>{let{page}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default(),{onInit(typewriter){typewriter.pauseFor(10).changeDelay(95).typeString("".concat(pageTexts[page])).start()}})};__webpack_exports__.Z=Typewrite},7793:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Agents}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),flowbite_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6483),_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7831),_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6__),_variablesMembers_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6630),_Typewrite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2202),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7294),_AppContext__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2208);function Agents(param){let{fr}=param,[agentName,setAgentName]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_5__.Z),students=fr?_variablesMembers_js__WEBPACK_IMPORTED_MODULE_2__.Ci:_variablesMembers_js__WEBPACK_IMPORTED_MODULE_2__.Hd;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().bg,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().title,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typewrite__WEBPACK_IMPORTED_MODULE_3__.Z,{page:"agents"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().intro,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong",{children:["Agent",(agentName?" ":"")+agentName,","]}),fr?" une \xe9quipe de 18 agents de MOOHP ont \xe9t\xe9 soigneusement s\xe9lectionn\xe9s pour vous accompagner dans cette mission. Nous vous sugg\xe9rons de vous familiariser avec eux avant de nous rejoindre au si\xe8ge de MOOHP.":" a team of 18 MOOHP agents were carefully selected for this mission alongside you. We suggest that you familiarise yourself with them before joining us at MOOHP headquarters."]}),students.map((member,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FlipImg,{fr:fr,src:member.src,name:member.name,club:member.club,age:member.age,year:member.year,code:member.code,height:member.height,specialty:member.specialty,mbti:member.mbti,gadget:member.gadget,text:member.text},index))]})}function FlipImg(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardContainer,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipCard,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipCardInner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipCardFront,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:props.src,alt:props.name,className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().img}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().tapMe,children:props.fr?"Appuyez sur moi!":"Tap me!"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().flipCardBack,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:props.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:props.fr?"Agent ".concat(props.year," - MOOHP"):"".concat(props.year," Agent - MOOHP")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:props.fr?"Nom de code: ".concat(props.code):"Codename: ".concat(props.code)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:props.fr?"\xc2ge: ".concat(props.age):"Age: ".concat(props.age)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:props.fr?"Taille: ".concat(props.height):"Height: ".concat(props.height)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:props.fr?"Sp\xe9cialisation: ".concat(props.specialty):"Specialty: ".concat(props.specialty)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:props.fr?"D\xe9partement: ".concat(props.club):"Department: ".concat(props.club)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["MB type: ",props.mbti]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Gadget: ",props.gadget]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().card,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Zb,{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().text,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:_styles_Agent_module_css__WEBPACK_IMPORTED_MODULE_6___default().name,children:["Agent ",props.code]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["“",props.text,"”"]})]})})]})}},1943:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return agents}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_components_Meta__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3951),_components_agents_students_Agents__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7793);function agents(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Z,{title:"Agents | MOOHP",description:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_agents_students_Agents__WEBPACK_IMPORTED_MODULE_2__.Z,{})]})}},7831:function(module){module.exports={card:"Agent_card__e3YOO",flipCard:"Agent_flipCard__PdYPv",text:"Agent_text__NID8s",bg:"Agent_bg__2cv0e",name:"Agent_name__C0TCO",img:"Agent_img__MEYEH",title:"Agent_title__IBXsv",intro:"Agent_intro__MQM5g",flipCardInner:"Agent_flipCardInner__qIzu7",flipCardFront:"Agent_flipCardFront__laT4Y",flipCardBack:"Agent_flipCardBack__smHUK",cardContainer:"Agent_cardContainer__5RLr0",tapMe:"Agent_tapMe__TLiZ2"}}},function(__webpack_require__){__webpack_require__.O(0,[459,630,774,888,179],function(){return __webpack_require__(__webpack_require__.s=7872)}),_N_E=__webpack_require__.O()}]);