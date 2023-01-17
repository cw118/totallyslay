(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{2202:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),typewriter_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5459),typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);let pageTexts={avia:"Your Mission: AVIA 2023",aviaFr:"Votre mission: AVIA 2023",agents:"Agents",archives:"MOOHP Archives",archivesFr:"Archives MOOHP",robot:"Robot"},Typewrite=param=>{let{page}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default(),{onInit(typewriter){typewriter.pauseFor(10).changeDelay(95).typeString("".concat(pageTexts[page])).start()}})};__webpack_exports__.Z=Typewrite},7924:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return avia_robot_Avia}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),AppContext=__webpack_require__(2208),script=__webpack_require__(4298),script_default=__webpack_require__.n(script);let GameField=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/avia-23-playing-field.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1",children:(0,jsx_runtime.jsx)("div",{className:"progress-bar hide",slot:"progress-bar",children:(0,jsx_runtime.jsx)("div",{className:"update-bar"})})})]});var Avia_module=__webpack_require__(1254),Avia_module_default=__webpack_require__.n(Avia_module);let GamePiece=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/game-piece.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1",children:(0,jsx_runtime.jsx)("div",{className:"progress-bar hide",slot:"progress-bar",children:(0,jsx_runtime.jsx)("div",{className:"update-bar"})})})]}),RedGamePiece=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/red-game-piece.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1",children:(0,jsx_runtime.jsx)("div",{className:"progress-bar hide",slot:"progress-bar",children:(0,jsx_runtime.jsx)("div",{className:"update-bar"})})})]}),Towers=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/towers.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1",children:(0,jsx_runtime.jsx)("div",{className:"progress-bar hide",slot:"progress-bar",children:(0,jsx_runtime.jsx)("div",{className:"update-bar"})})})]});var Typewrite=__webpack_require__(2202),classnames=__webpack_require__(4184),classnames_default=__webpack_require__.n(classnames);let Countdown=param=>{let{fr}=param,[diff,setDiff]=(0,react.useState)({}),[started,setStarted]=(0,react.useState)(!1),[ended,setEnded]=(0,react.useState)(!1),endDate=new Date("February 16, 2023 08:00:00"),aviaEnd=new Date("February 18, 2023 19:00:00"),findDistance=()=>{let startDate=new Date,distance=endDate-startDate;distance>0?setDiff({days:Math.floor(distance/864e5),hours:Math.floor(distance%864e5/36e5),minutes:Math.floor(distance%36e5/6e4),seconds:Math.floor(distance%6e4/1e3)}):aviaEnd-startDate<0?setEnded(!0):setStarted(!0)};return(0,react.useEffect)(()=>{let i=setInterval(findDistance,1e3);return()=>clearInterval(i)},[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:classnames_default()("".concat(Avia_module_default().countdown),{hide:started||ended}),children:[(0,jsx_runtime.jsxs)("span",{className:Avia_module_default().timeContainer,children:[(0,jsx_runtime.jsx)("span",{className:Avia_module_default().time,children:diff.days})," ",(0,jsx_runtime.jsx)("span",{className:Avia_module_default().unit,children:fr?"j ":"d "})]}),(0,jsx_runtime.jsxs)("span",{className:Avia_module_default().timeContainer,children:[(0,jsx_runtime.jsx)("span",{className:Avia_module_default().time,children:diff.hours})," ",(0,jsx_runtime.jsx)("span",{className:Avia_module_default().unit,children:"h"})]}),(0,jsx_runtime.jsxs)("span",{className:Avia_module_default().timeContainer,children:[(0,jsx_runtime.jsx)("span",{className:Avia_module_default().time,children:diff.minutes})," ",(0,jsx_runtime.jsx)("span",{className:Avia_module_default().unit,children:"min"})]}),(0,jsx_runtime.jsxs)("span",{className:"".concat(Avia_module_default().timeContainer," ").concat(Avia_module_default().noBorder),children:[(0,jsx_runtime.jsx)("span",{className:Avia_module_default().time,children:diff.seconds})," ",(0,jsx_runtime.jsx)("span",{className:Avia_module_default().unit,children:"s"})]})]}),started&&!ended?(0,jsx_runtime.jsx)("h3",{className:Avia_module_default().startMsg,children:fr?"AVIA a commenc\xe9!":"AVIA has begun!"}):null,ended?(0,jsx_runtime.jsx)("h3",{className:Avia_module_default().endMsg,children:fr?"AVIA est termin\xe9!":"AVIA has ended!"}):null]})},Avia=param=>{let{fr}=param,[agentName,setAgentName]=(0,react.useContext)(AppContext.Z),name=(agentName?" ":"")+agentName;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().header,children:(0,jsx_runtime.jsx)("strong",{children:(0,jsx_runtime.jsx)(Typewrite.Z,{page:fr?"aviaFr":"avia"})})}),(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().intro,children:[(0,jsx_runtime.jsx)("img",{src:"/logo/avia-logo.svg",alt:"AVIA Logo",className:Avia_module_default().aviaLogo}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:fr?"Nous sommes contents que vous soyez l\xe0, agent".concat(name,"! "):"We're glad you made it, Agent".concat(name,"! ")}),fr?"La CRC, une association \xe0 but non lucratif qui organise des comp\xe9titions de robotique annuelles, a demand\xe9 de l'aide \xe0 MOOHP (Organisation Marianopolis de la protection humaine).":"The Canadian Robotics Competition (CRC), a non-profit organisation that runs annual robotics competitions, has reached out to MOOHP for help."]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("p",{children:fr?"Cette comp\xe9tition multidisciplinaire exige l'implication de tous les agents chez MOOHP, incluant vous-m\xeame. Int\xe9grant l'informatique, la technologie et l'ing\xe9nierie avec les arts et lettres, les d\xe9partement de machinerie, de r\xe9seau virtuel, de piratage informatique, de production et de marketing sont tous indispensables pour accomplir cette mission!":"This multidisciplinary competition requires the involvement of all agents at MOOHP, including you. Integrating computer science, technology, and engineering with visual arts and humanities; the Machinery, Manufacturing, Hacking, Virtual Network, Marketing and divisions are integral to this mission!"}),(0,jsx_runtime.jsx)("img",{src:"/logo/crc-logo.svg",alt:"CRC Logo",className:Avia_module_default().crcLogo})]}),(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().header,children:(0,jsx_runtime.jsx)("strong",{children:fr?"AVIA proc\xe9dera comme suit:":"AVIA will proceed as follows:"})}),(0,jsx_runtime.jsx)("p",{className:Avia_module_default().textOnly,children:fr?"\xc0 chaque joute, vous serez regroup\xe9s en \xe9quipes de deux avec des espions d'une agence diff\xe9rente afin de compl\xe9ter cette mission. Plac\xe9s dans soit l'\xe9quipe bleue ou jaune, vous jouerez contre l'\xe9quipe adverse pendant 5 minutes.":"You are to be teamed up with agents from a different agency to complete this mission in every heat. Placed in either the yellow or blue team, you will compete against the other over several heats."}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().container,children:[(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().infoContainer,children:[(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().info,children:[(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().sectionTitle,children:fr?"Le terrain de jeu":"The Field"}),(0,jsx_runtime.jsxs)("p",{children:[fr?"Au d\xe9but de chaque joute, les gadgets de chaque \xe9quipe seront plac\xe9s dans leurs zones de d\xe9part. Ces zones, marqu\xe9es par des carr\xe9s bleus et jaunes, se retrouvent \xe0 chaque extr\xe9mit\xe9 du terrain octogonal \xe0 niveau unique.":"At the beginning of each heat, teams' gadgets will be stationed at either end of a single level octagon-shaped playing field, marked by blue and yellow tiled zones; these are the starting zones."," "]})]}),(0,jsx_runtime.jsxs)("p",{className:Avia_module_default().info,children:[fr?"Trois tours se situent le long du milieu du terrain de jeu. Notez que la tour centrale est la plus grande. De plus, une zone multiplicatrice se situe entre les zones de d\xe9part de chaque \xe9quipe.":"There are three towers located along the middle of the playing field, the center one being the tallest. Also note the multiplier zone between each team's starting zone."," "]})]}),(0,jsx_runtime.jsx)(GameField,{})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().container,children:[(0,jsx_runtime.jsx)(GamePiece,{}),(0,jsx_runtime.jsx)("div",{className:Avia_module_default().infoContainer,children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().info,children:[(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().sectionTitle,children:fr?"La pi\xe8ce de jeu":"The Game Piece"}),(0,jsx_runtime.jsx)("p",{children:fr?"Le robot de chaque \xe9quipe doit transporter des pi\xe8ces hexagonales de bois. Ces pi\xe8ces de jeu sont plac\xe9es soit face vers le haut, face vers le bas ou sur le c\xf4t\xe9 et elles sont dispers\xe9es \xe0 travers le terrain de jeu. Aussi, le robot peut seulement transporter deux pi\xe8ces \xe0 la fois.":"Agents' gadgets must transport hexagonal wooden game pieces, as shown, that will be scattered either face-up or on its side across the game field. Only two game pieces can be carried by a gadget at the same time."})]})})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().container,children:[(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().infoContainer,children:[(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().info,children:[(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().sectionTitle,children:fr?"Gagner des points":"Earn Points"}),(0,jsx_runtime.jsx)("p",{children:fr?"Les pi\xe8ces de jeu doivent \xeatre plac\xe9es sur chaque niveau des tours. La tour centrale a 7 niveaux alors que les deux tours adjacentes ont chacune 6 niveaux. Pour compl\xe9ter cette mission avec succ\xe8s, les agents doivent obtenir des points en manipulant les pi\xe8ces de jeu.":"Game pieces are to be placed flat on each level of the following towers; the centre tower has 7 levels whilst its adjacent towers have 6 levels. To garner points and complete this mission successfully, agents must accumulate as many points as possible using the game pieces. "})]}),(0,jsx_runtime.jsx)("p",{className:Avia_module_default().info,children:fr?"Chaque \xe9quipe recevra 35 points pour chaque pi\xe8ce de jeu dont la face vers le haut repr\xe9sente la couleur de son \xe9quipe. Plus les pi\xe8ces de jeu sont plac\xe9es haut sur les tours, plus ces pi\xe8ces de jeu rapportent des points.":"Game pieces laid face-side up on the ground will award 35 points to the team corresponding with the colour facing upwards. Game pieces placed on tower levels collect points increasing along the height of towers."})]}),(0,jsx_runtime.jsx)(Towers,{})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().container,children:[(0,jsx_runtime.jsx)(RedGamePiece,{}),(0,jsx_runtime.jsx)("div",{className:Avia_module_default().infoContainer,children:(0,jsx_runtime.jsxs)("div",{className:Avia_module_default().info,children:[(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().sectionTitle,children:fr?"La pi\xe8ce de jeu rouge":"The Red Game Piece"}),(0,jsx_runtime.jsx)("p",{children:fr?"Mise en garde! Il y a une pi\xe8ce de jeu unique avec un centre rouge. Placez cette pi\xe8ce de jeu dans une tour et tous les points gagn\xe9s par les pi\xe8ces de jeu plac\xe9es dans les sous-niveaux seront annul\xe9s.":"Caution! A single game piece is red. Placing the red game piece in a tower invalidates the points earned by game pieces placed in lower levels of a tower."})]})})]})}),(0,jsx_runtime.jsx)("p",{className:Avia_module_default().textOnly,children:fr?"Je vous rappelle que vous avez 5 minutes pour compl\xe9ter chaque joute!":"Remember that you have 5 minutes to complete each heat!"}),(0,jsx_runtime.jsxs)("p",{className:Avia_module_default().textOnly,children:[fr?"Nous avons besoin de tous nos agents MOOHP pendant trois jours, du 16 au 18 f\xe9vrier, \xe0 l'\xc9cole Cur\xe9-Antoine-Labelle. ":"We need all MOOHP agents to convene over three days, from February 16th to 18th, at \xc9cole Cur\xe9-Antoine-Labelle. ",(0,jsx_runtime.jsx)("strong",{children:fr?"Nous comptons sur vous, agent".concat(name,"!"):"We're counting on you, Agent".concat(name,"!")})]}),(0,jsx_runtime.jsx)(Countdown,{fr:fr}),(0,jsx_runtime.jsx)("h1",{className:Avia_module_default().vidHeader,children:fr?"Pour plus d'informations — Vid\xe9o":"For Further Information — Video"}),(0,jsx_runtime.jsx)("iframe",{className:Avia_module_default().video,src:"https://www.youtube.com/embed/XZcGbwce7fU",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})};var avia_robot_Avia=Avia},1254:function(module){module.exports={header:"Avia_header__gkAvz",intro:"Avia_intro__HO5cA",countdown:"Avia_countdown__YoZFz",startMsg:"Avia_startMsg__mc4LG",endMsg:"Avia_endMsg__MktyM",colorPulse:"Avia_colorPulse__wc_tJ",timeContainer:"Avia_timeContainer__vFl8c",noBorder:"Avia_noBorder__uhLcB",time:"Avia_time__YkvUY",unit:"Avia_unit__rD10E",aviaLogo:"Avia_aviaLogo__egLrh",crcLogo:"Avia_crcLogo__i0PEu",container:"Avia_container__tcb4s",infoContainer:"Avia_infoContainer__viXrk",textOnly:"Avia_textOnly__ujZ73",sectionTitle:"Avia_sectionTitle__QR4mT",info:"Avia_info__JLa_v",video:"Avia_video__OKASv",vidHeader:"Avia_vidHeader__1TDdH"}},4298:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3573)}}]);