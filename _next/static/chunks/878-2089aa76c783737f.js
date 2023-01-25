(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{2202:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),typewriter_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5459),typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_1__);let pageTexts={avia:"Your Mission: AVIA 2023",aviaFr:"Votre mission: AVIA 2023",agents:"Agents",archives:"MOOHP Archives",archivesFr:"Archives MOOHP",robot:"Robot"},Typewrite=param=>{let{page}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(typewriter_effect__WEBPACK_IMPORTED_MODULE_1___default(),{onInit(typewriter){typewriter.pauseFor(10).changeDelay(95).typeString("".concat(pageTexts[page])).start()}})};__webpack_exports__.Z=Typewrite},641:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_script__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4298),next_script__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);let Model=param=>{let{model}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_script__WEBPACK_IMPORTED_MODULE_1___default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("model-viewer",{src:"/3d-models/".concat(model,".glb"),ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1"})]})};__webpack_exports__.Z=Model},2878:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return avia_robot_Robot}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),AppContext=__webpack_require__(2208),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),Model=__webpack_require__(641),script=__webpack_require__(4298),script_default=__webpack_require__.n(script),Robot_module=__webpack_require__(1986),Robot_module_default=__webpack_require__.n(Robot_module);let RobotArm=param=>{let{fr}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/arm-1.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1"}),(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().label,children:fr?"Bras 1":"Arm 1"})]})},RobotArmTwo=param=>{let{fr}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(script_default(),{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"}),(0,jsx_runtime.jsx)("model-viewer",{src:"/3d-models/arm-2.glb",ar:!0,"ar-modes":"webxr scene-viewer quick-look","camera-controls":!0,poster:"poster.webp","shadow-intensity":"1"}),(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().label,children:fr?"Bras 2":"Arm 2"})]})};var Typewrite=__webpack_require__(2202),BottomNav=__webpack_require__(5758);let Robot=param=>{let{fr}=param,[agentName,setAgentName]=(0,react.useContext)(AppContext.Z),name=(agentName?" ":"")+agentName;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().pageWrapper,children:[(0,jsx_runtime.jsx)("div",{className:Robot_module_default().title,children:(0,jsx_runtime.jsx)(Typewrite.Z,{page:"robot"})}),(0,jsx_runtime.jsxs)("p",{className:Robot_module_default().intro,children:[(0,jsx_runtime.jsxs)("strong",{children:["Agent",name,","]}),fr?" voici toutes les informations dont vous aurez besoin sur le robot \xe0 construire, qui sera crucial pour l'accomplissement de la mission AVIA.":" here is all the information you will need on the robot to build — it will be crucial towards the completion of mission AVIA."]}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().rowOne,children:[(0,jsx_runtime.jsx)(Model.Z,{model:"base"}),(0,jsx_runtime.jsx)(Model.Z,{model:"robot"}),(0,jsx_runtime.jsx)(Model.Z,{model:"lift"})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().rowTwo,children:[(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().container,children:[(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().rowTwoModels,children:[(0,jsx_runtime.jsx)(RobotArm,{fr:fr}),(0,jsx_runtime.jsx)(RobotArmTwo,{fr:fr})]}),(0,jsx_runtime.jsx)("p",{children:fr?"Apr\xe8s le lancement de la comp\xe9tition, la d\xe9partement de machinerie a\n                  commenc\xe9 \xe0 penser \xe0 des id\xe9es pour construire le bras du robot. H\xe9sitant entre deux mod\xe8les,\n                  l'\xe9quipe a d\xe9cid\xe9 de construire les deux prototypes suivants. Le premier bras comporte deux extrusions en aluminium, dont un seul subit un mouvement lin\xe9aire\n                  afin de ramasser des pi\xe8ces de jeu. Le deuxi\xe8me bras, cependant, se comporte comme une serre. Ce prototype n\xe9cessite \n                  un axe de rotation qui fixe les deux extrusions d'aluminium \xe0 la pi\xe8ce de jeu.":"Following the kickoff, the machinist division began brainstorming ideas\n                  for the arm of the robot. Conflicted between two models, they build the two\n                  following prototypes. The first arm has two aluminium extrusions, only one of which undergoes linear motion\n                  in order to pick up game pieces. The second arm, however, behaves like a claw. This prototype requires an axis of\n                  rotation that will clamp both aluminium extrusions to the game piece."})]}),(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().container,children:[(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().subheading,children:fr?"Le bras robotique choisi (bras 1)":"The Chosen Arm (Arm 1)"}),(0,jsx_runtime.jsx)("p",{children:fr?"Le bras du robot est compos\xe9 de 3 moteurs transmettant deux types de mouvement: un\n                    mouvement de translation et un mouvement de rotation. Le robot utilise le syst\xe8me de mouvement\n                    de translation pour resserrer les pi\xe8ces de jeu entre ses pinces. Le syst\xe8me de rotation, quant\n                    \xe0 lui, existe pour retourner les pi\xe8ces de jeu de bord pour que leur face soit de la bonne couleur.":"The arm of the robot is composed of 3 motors that ensure two motion\n                      systems: linear motion and rotation. The horizontal linear motion is necessary for\n                      picking up and dropping game pieces, whilst the rotation of the arm allows the coloured\n                      face corresponding to agents' team to face upwards."}),(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().subheading,children:fr?"La base":"The Base"}),(0,jsx_runtime.jsx)("p",{children:fr?"La base du robot mesure 72,6 cm par 44 cm et comprend 4 roues omnidirectionnelles, chacune d'elles \n                      motoris\xe9e par un moteur de 12 volts. La structure rectangulaire est construite \xe0 partir d'extrusions \n                      d'aluminium renforc\xe9es par des rainures en T et des \xe9querres noires. Une extrusion 30-30 argent\xe9e \n                      accroch\xe9e au centre de la base emp\xeache la structure de s'incliner vers l'int\xe9rieur.":"The 72.6 cm x 44 cm base of the robot consists of 4 omni wheels, motorized individually by four 12 volt \n              DC motors. The rectangular structure is built from multiple aluminium extrusions fortified with t-slots and \n              black brackets. A 30-30 silver extrusion is attached at the center of the base to avoid slanting inwards."})]})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().rowThree,children:[(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().imageContainer,children:[(0,jsx_runtime.jsx)("img",{src:"/robot/electric.png",alt:fr?"Le syst\xe8me CrcDuino":"The CrcDuino"}),(0,jsx_runtime.jsx)("img",{src:"/robot/solder.png",alt:fr?"Soudage des fils":"Soldering wires"})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().container,children:[(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().subheading,children:fr?"Le syst\xe8me d'\xe9l\xe9vation":"The Lift"}),(0,jsx_runtime.jsx)("p",{children:fr?"Apr\xe8s de longues heures de recherche, les agents du d\xe9partement de machinerie ont d\xe9cid\xe9 de construire un m\xe9canisme d'\xe9l\xe9vation \n                      t\xe9lescopique. Ce syst\xe8me d'\xe9l\xe9vation est fait de pi\xe8ces d'aluminium (choisies pour leur faible masse et leur bonne durabilit\xe9) et \n                      d'adaptateurs imprim\xe9s \xe0 l'aide dune imprimante 3D. Ces adaptateurs de plastique permettent \xe0 l'axe du moteur de rentrer dans le \n                      pignon puisque l'int\xe9rieur du pignon \xe9tait trop gros. Les adaptateurs sont donc n\xe9cessaires pour assurer que l'axe et le pignon \n                      pivotent ensemble. De plus, des patins \xe0 4 galets sont install\xe9s pour relier les \xe9tages du syst\xe8me. Pour ne pas que ces pi\xe8ces se \n                      bloquent l'un et l'autre, elles sont plac\xe9es chacune au deuxi\xe8me \xe9tage du syst\xe8me d'\xe9l\xe9vation. Ceci optimise ainsi la hauteur maximale \n                      que le syst\xe8me d'\xe9l\xe9vation peut atteindre.":"After careful research, the Machinery agents determined that a three stage cascading lift would be the \n                  best option to build a mechanism capable of both reaching great heights as well as retracting itself, creating a cascading motion.\n                  The lift is constructed using aluminum extrusions, chosen for their lightweight and durable nature, and 3D-printed adapters to allow\n                  the extrusions to lift. These 3D-printed parts allow the motor axle to fit into the sprocket, as the sprocket's interior was too large\n                  to accommodate the axle. The adapters are therefore necessary to ensure that the two rotate together. The rollers, however, must be\n                  strategically placed so as three of the four faces of an extrusion are free of any obstacles. In order to achieve a maximum height,\n                  after multiple designs, agents deem it optimal to attach the rollers to the second stage, and allow them to roll freely on the first and third stage."})]})}),(0,jsx_runtime.jsx)("div",{className:"grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().imageContainer,children:[(0,jsx_runtime.jsx)("img",{src:"/robot/base.png",alt:fr?"La base du robot":"The robot's base"}),(0,jsx_runtime.jsx)("img",{src:"/robot/sofia-drill.png",alt:fr?"Un membre de l'\xe9quipe perce une pi\xe8ce de m\xe9tal":"A team member drilling a piece of metal"})]})})]})}),(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().container,children:[(0,jsx_runtime.jsx)("h3",{className:Robot_module_default().subheading,children:fr?"Difficult\xe9s":"Struggles"}),(0,jsx_runtime.jsx)("p",{children:fr?"Le d\xe9partement de machinerie a rencontr\xe9 plusieurs probl\xe8mes lors de leur pr\xe9paration pour \n                    leur mission. N'ayant pas anticip\xe9 chaque petit ajustement n\xe9cessaire \xe0 ajouter \xe0 leur id\xe9e \n                    originale, ils ont rapidement constat\xe9 l'importance de se prendre \xe0 l'avance. En effet, les \n                    agents s'occupant du syst\xe8me d'\xe9l\xe9vation ont rencontr\xe9 plusieurs probl\xe8mes lors de son assemblage. \n                    Ils se sont rendu compte assez t\xf4t qu'il fallait assembler ce syst\xe8me dans un ordre sp\xe9cifique, \n                    sinon il faudrait tout d\xe9faire et recommencer \xe0 z\xe9ro.":"The Machinery Division encountered many challenges as they prepared for the mission. Having\n                  not anticipated how many small adjustments would be necessary to their original design, they\n                  quickly learnt of the importance of leaving time for testing. Agents working on the lift faced\n                  many issues during its assembly due to its tedious nature; building it in a specific order was\n                  vital, otherwise the lift would have to be disassembled altogether."}),(0,jsx_runtime.jsx)("p",{children:fr?"Pour le bras robotique, trouver un moteur sp\xe9cifique \xe9tait difficile. Les moteurs dans les ateliers \n                    de MOOHP \xe9tait soit trop fort, soit trop faible. Pour r\xe9gler ce probl\xe8me, les agents ont d\xe9cid\xe9 de combiner 2 \n                    moteurs faibles pour atteindre une force juste parfaite.":"For the arm, finding an appropriate motor strength became difficult, with the given motors being either too\n                weak or too strong. To resolve this issue, the agents decide to combine 2 weak motors in order to\n                provide the strength necessary."}),(0,jsx_runtime.jsx)("p",{children:fr?"Les agents qui travaillent sur la base, quant \xe0 eux, voulaient initialement construire une base \n                    rectangulaire. Cependant, pour faire de la place pour le syst\xe8me d'\xe9l\xe9vation, ils ont modifi\xe9 leur \n                    base pour lui donner une forme de U. Ce changement a caus\xe9 d'autres probl\xe8mes comme le fait que la \n                    base s'incline vers l'int\xe9rieur \xe0 cause du poids des moteurs au milieu. Ainsi, les agents ont attach\xe9 \n                    une extrusion 30-30 argent\xe9e au centre de la base pour l'emp\xeacher de s'incliner vers l'int\xe9rieur.":"Agents working on the base originally designed a rectangular base for the robot. However, after \n                   struggling to arrange space for the lift, they modified the design to a U-shaped base. This change\n                   resulted in further problems; due to the weight of the 4 motor, the base would incline itself towards\n                   the robot's center. Therefore, they added a thick 30-30 aluminium extrusion to the base to support its\n                   center."})]}),(0,jsx_runtime.jsx)("div",{className:"lg:grid",children:(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().vidRow,children:[(0,jsx_runtime.jsx)("video",{width:420,height:340,controls:!0,children:(0,jsx_runtime.jsx)("source",{src:"/robot/arm-rotation.mp4"})}),(0,jsx_runtime.jsx)("video",{width:420,height:340,controls:!0,children:(0,jsx_runtime.jsx)("source",{src:"/robot/lift.mp4"})}),(0,jsx_runtime.jsx)("video",{width:420,height:340,controls:!0,children:(0,jsx_runtime.jsx)("source",{src:"/robot/assembling-robot.mp4"})})]})}),(0,jsx_runtime.jsxs)("div",{className:Robot_module_default().vidContainer,children:[(0,jsx_runtime.jsx)("h1",{className:Robot_module_default().vidHeader,children:fr?"Tutoriel: Comment construire le bras robotique":"Tutorial: How to Build the Robotic Arm"}),(0,jsx_runtime.jsx)("iframe",{className:Robot_module_default().video,src:"https://www.youtube.com/embed/OcvOn_SFodk",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})]}),(0,jsx_runtime.jsxs)(BottomNav.Z,{fr:fr,name:name,children:[(0,jsx_runtime.jsx)(link_default(),{href:fr?"/fr/moohp":"/moohp",children:fr?"Si\xe8ge de MOOHP":"MOOHP headquarters"}),(0,jsx_runtime.jsx)(link_default(),{href:fr?"/fr/moohp/avia":"/moohp/avia",children:fr?"En apprendre plus sur votre mission":"Learn more about your mission"}),(0,jsx_runtime.jsx)(link_default(),{href:fr?"/fr/moohp/agents":"/moohp/agents",children:fr?"Rencontrer l'\xe9quipe de MOOHP":"Meet the MOOHP team"}),(0,jsx_runtime.jsx)(link_default(),{href:fr?"/fr/moohp/archives":"/moohp/archives",children:fr?"Consulter nos archives":"Check out our archives"})]})]})};var avia_robot_Robot=Robot},5758:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);let BottomNav=param=>{let{fr,name,children}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"bottomNav",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{className:"whereNext",children:[fr?"O\xf9 irez-vous ensuite":"Where to next",", ",fr?"agent":"Agent",name?" ".concat(name):"","?"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"md:grid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bottomNavButtons",children:children})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{target:"_blank",className:"ghBtn",href:"https://github.com/cw118/totallyslay",rel:"noopener noreferrer",children:fr?"Code source sur GitHub":"Source code on GitHub"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{className:"mariBtn",href:fr?"/fr":"/",children:fr?"Retourner \xe0 M.A.R.I.":"Return to M.A.R.I."})]})};__webpack_exports__.Z=BottomNav},1986:function(module){module.exports={pageWrapper:"Robot_pageWrapper__wlbSD",title:"Robot_title__v_gWJ",intro:"Robot_intro__7yXj0",container:"Robot_container__hSl5V",imageContainer:"Robot_imageContainer__n3sse",rowOne:"Robot_rowOne__BsepB",vidRow:"Robot_vidRow__p13hw",label:"Robot_label__7QmaM",rowTwo:"Robot_rowTwo__NsD08",rowThree:"Robot_rowThree__emD05",rowTwoModels:"Robot_rowTwoModels__HlilQ",subheading:"Robot_subheading__Zm3k_",vidContainer:"Robot_vidContainer__qyWPa",video:"Robot_video____4oN",vidHeader:"Robot_vidHeader__xThX2"}},4298:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3573)}}]);