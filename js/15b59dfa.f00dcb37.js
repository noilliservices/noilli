(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["15b59dfa"],{2500:function(e){e.exports=JSON.parse('[{"id":1,"label":"Text","type":"text","icon":"text_fields","question":"","required":false,"answers":[],"default":"","fieldType":"VInput"},{"id":2,"label":"Phone","type":"phone","icon":"phone","question":"","required":false,"answers":[],"default":"","fieldType":"VInput"},{"id":3,"label":"Numeric","type":"number","icon":"filter_1","question":"","required":false,"answers":[],"default":"","fieldType":"VInput"},{"id":4,"label":"Date/Time","type":"datetime","icon":"timelapse","question":"","required":false,"answers":[],"default":"","fieldType":"VDateTime"},{"id":5,"label":"Date","type":"date","icon":"date_range","question":"","required":false,"answers":[],"default":"","fieldType":"VDate"},{"id":6,"label":"Time","type":"time","icon":"access_time","question":"","required":false,"answers":[],"default":"","fieldType":"VTime"},{"id":7,"label":"Drop Down","type":"drop_down","icon":"arrow_drop_down_circle","question":"","required":false,"answers":[],"default":"","fieldType":"VSelect"},{"id":8,"label":"Radio Button","type":"radio_button","icon":"radio_button_checked","question":"","required":false,"answers":[],"default":"","fieldType":"VRadio"},{"id":9,"label":"Check Box","type":"check_box","icon":"check_box","question":"","required":false,"answers":[],"default":"","fieldType":"VCheck"},{"id":10,"label":"Toggle","type":"toggle","icon":"toggle_on","question":"","required":false,"answers":[],"default":""},{"id":11,"label":"Marker","type":"marker","icon":"drag_handle","question":"","required":false,"answers":[],"default":""},{"id":12,"label":"Location","type":"location","icon":"my_location","question":"","required":false,"answers":[],"default":"","fieldType":"VLocation"},{"id":13,"label":"Photo","type":"photo","icon":"photo_camera","question":"","required":false,"answers":[],"default":"","fieldType":"VCamera"}]')},"5f83":function(e,t,a){"use strict";var s=a("da72"),n=a.n(s);n.a},da72:function(e,t,a){},fefc:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md doc-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"max-width":"300px"}},[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2",staticStyle:{"max-width":"350px"}},[a("q-toolbar-title",[e._v("Available Components")])],1),a("div",{staticClass:"panel__body"},[a("q-scroll-area",{staticClass:"bg-grey-1",staticStyle:{height:"575px",width:"300px"},attrs:{vertical:"vertical"}},[a("vddl-list",{staticClass:"panel__body--list",attrs:{"disable-if":e.availableComponents.length>=9,list:e.availableComponents,inserted:e.handleInserted,dragover:e.handleDragover,drop:e.handleDrop,horizontal:!1}},[e._l(e.availableComponents,(function(t,s){return a("vddl-draggable",{key:t.id,staticClass:"panel__body--item",class:{selected:e.selected===t},attrs:{draggable:t,index:s,wrapper:e.availableComponents,"effect-allowed":"copy",selected:e.selectedEvent,dragstart:e.handleDragstart,dragend:e.handleDragend,canceled:e.handleCanceled,moved:e.handleMoved}},[a("q-list",{attrs:{bordered:"bordered",separator:"separator"}},[a("q-item",{staticStyle:{cursor:"all-scroll"}},[a("q-item-section",[a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1)],1)],1)],1)})),a("vddl-placeholder",{staticClass:"red"},[e._v("Drop Here")])],2)],1)],1)],1),a("div",{staticClass:"col",staticStyle:{"max-width":"50px"}}),a("div",{staticClass:"col",staticStyle:{"max-width":"350px"}},[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2",staticStyle:{"max-width":"350px"}},[a("q-toolbar-title",[e._v("Selected Components")]),a("q-btn",{attrs:{outline:"outline",color:"secondary",label:"Save"},on:{click:function(t){return e.save()}}})],1),a("div",{staticClass:"panel__body"},[a("q-scroll-area",{staticClass:"bg-grey-1",staticStyle:{height:"575px",width:"350px"},attrs:{vertical:"vertical"}},[a("vddl-list",{staticClass:"panel__body--list",attrs:{list:e.selectedComponents,inserted:e.handleInserted,dragover:e.handleDragover,drop:e.handleDrop,horizontal:!1}},[e._l(e.selectedComponents,(function(t,s){return a("vddl-draggable",{key:t.id,staticClass:"panel__body--item",class:{selected:e.selected===t},attrs:{draggable:t,index:s,wrapper:e.selectedComponents,"effect-allowed":"move",selected:e.selectedEvent,dragstart:e.handleDragstart,dragend:e.handleDragend,canceled:e.handleCanceled,moved:e.handleMoved}},[a("q-list",{attrs:{bordered:"bordered",separator:"separator"}},[t?a("q-item",{staticStyle:{cursor:"all-scroll"}},[t.label?a("q-item-section",[a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:t.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1),a("q-item-section",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"item.label"}],attrs:{side:"side"}},[t?a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:"edit"},nativeOn:{click:function(a){return e.updateProperties(s,t)}}}):e._e()],1),a("q-item-section",{directives:[{name:"show",rawName:"v-show",value:t.label,expression:"item.label"}],attrs:{side:"side"}},[t?a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:"delete"},nativeOn:{click:function(t){return e.deleteItems(s)}}}):e._e()],1),!t.question&&t.label?a("q-item-section",{attrs:{side:"side"}},[a("q-btn",{attrs:{round:"round",color:"red",size:"10px",glossy:"glossy","text-color":"black",icon:"warning"}})],1):e._e(),t.question&&t.label?a("q-item-section",{attrs:{side:"side"}},[a("q-btn",{attrs:{round:"round",color:"green",size:"10px",glossy:"glossy","text-color":"black",icon:"check"}})],1):e._e()],1):e._e()],1)],1)})),a("vddl-placeholder",{staticClass:"red"},[e._v("Drop Here")])],2)],1)],1)],1),a("div",{staticClass:"col",staticStyle:{"max-width":"50px"}}),a("div",{staticClass:"col",staticStyle:{"max-width":"550px"}},[a("q-card",{ref:"itemCard",staticClass:"my-card"},[a("q-toolbar",{staticClass:"bg-primary",staticStyle:{"max-width":"550px"}},[a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:e.itemField.icon}}),a("q-toolbar-title",{staticClass:"text-white"},[e._v(e._s(e.itemField.label))]),a("q-btn",{staticClass:"gt-xs",attrs:{size:"15px",flat:"flat",dense:"dense",round:"round",icon:"check"},nativeOn:{click:function(t){return e.validate()}}})],1),a("q-tabs",{staticClass:"text-teal",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{label:"Properties",name:"one"}}),a("q-tab",{attrs:{label:"Advanced",name:"two",disable:e.advancedState}})],1),a("q-separator"),e._l(e.selectedComponents,(function(t,s){return a("q-tab-panels",{key:s,attrs:{animated:"animated"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.itemField.id===t.id?a("q-tab-panel",{attrs:{name:"one"}},[a("q-item-label",[e._v("Question")]),a("q-input",{ref:"input",refInFor:!0,attrs:{label:"Please type your question here",value:"value","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Question is required"}]},model:{value:t.question,callback:function(a){e.$set(t,"question",a)},expression:"field.question"}}),a("q-checkbox",{attrs:{label:"Answer is required?",color:"teal"},model:{value:t.required,callback:function(a){e.$set(t,"required",a)},expression:"field.required"}}),"VCheck"===t.fieldType||"VRadio"===t.fieldType||"VSelect"===t.fieldType?a("q-tabs",{staticClass:"text-grey",attrs:{dense:"dense","active-color":"primary","indicator-color":"primary","narrow-indicator":"narrow-indicator"},model:{value:e.multiTab,callback:function(t){e.multiTab=t},expression:"multiTab"}},[a("q-tab",{attrs:{name:"answers",label:"Possible Answers",align:"left"}})],1):e._e(),a("q-separator"),"VCheck"===t.fieldType||"VRadio"===t.fieldType||"VSelect"===t.fieldType?a("q-tab-panels",{attrs:{animated:"animated"},model:{value:e.multiTab,callback:function(t){e.multiTab=t},expression:"multiTab"}},[a("q-tab-panel",{attrs:{name:"answers"}},[a("q-input",{ref:"input",refInFor:!0,attrs:{label:"Please type your answers and click + to add"},scopedSlots:e._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{round:"round",color:"black",icon:"add_circle"},on:{click:function(a){return e.addAnswers(t)}}})]},proxy:!0}],null,!0),model:{value:e.tempAnswers,callback:function(t){e.tempAnswers=t},expression:"tempAnswers"}}),a("div",[e._v(" ")]),e._l(t.answers,(function(s,n){return a("q-list",{key:n,attrs:{bordered:"bordered"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"clickable"}},[a("q-item-section",[e._v(e._s(s))]),a("q-item-section",{attrs:{avatar:"avatar"}},[a("q-btn",{attrs:{round:"round",color:"red",icon:"delete"},on:{click:function(a){return e.deleteAnswers(s,n,t)}}})],1)],1)],1)}))],2)],1):e._e()],1):e._e(),e.itemField.id===t.id?a("q-tab-panel",{attrs:{name:"two"}},[a("q-item-label",[e._v("Default Value")]),a("q-input",{ref:"input",refInFor:!0,attrs:{label:"Please type your initial answer"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"field.value"}})],1):e._e()],1)}))],2)],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"save",color:"secondary","text-color":"white"}}),a("span",{staticClass:"q-ml-sm"},[e._v("Save Form Generator and navigate to My Projects.")])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),a("q-btn",{attrs:{flat:"",label:"Save and Route",color:"primary"},on:{click:e.Route}})],1)],1)],1)],1)},n=[],i=(a("8e6e"),a("8a81"),a("7f7f"),a("6b54"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),l=a.n(i),r=a("2500"),o=a("a639"),c=a("2f62");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={props:["id"],data:function(){return{confirm:!1,selected:null,projectId:"",tab:"",multiTab:"answers",tempAnswers:"",itemField:{index:"",type:""},baseUrl:Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}).VUE_APP_BASE_URL,availableComponents:r,selectedComponents:[{}],project:{},advancedState:!1}},created:function(){var e=this;this.aPageTitle("Form Generator");var t=o["a"].getItem("Projects");this.project=t.filter((function(t){return t.id===e.id})),this.project[0].selectedComponents&&(this.selectedComponents=this.project[0].selectedComponents)},methods:u({},Object(c["b"])("VuexStore",["aPageTitle"]),{save:function(){var e=this,t=!1;if(this.selectedComponents.forEach((function(e,a){e.id&&(e.question||(t=!0))})),t)return this.$q.notify({position:"center",color:"negative",message:"Questions for all form components are required.",actions:[{label:"Dismiss",color:"white",handler:function(){}}]});this.organizeData();var a=o["a"].getItem("Projects"),s=a.filter((function(t){return t.id===e.id}));s[0].selectedComponents=this.selectedComponents.filter((function(e){return 0!==Object.keys(e).length})),o["a"].set("Projects",a),this.confirm=!0},organizeData:function(){var e=this,t=0;this.selectedComponents=this.selectedComponents.filter((function(e){return 0!==Object.keys(e).length})),console.log("Organize Data",this.selectedComponents.length),this.selectedComponents.forEach((function(a){a.id&&(t++,a.order=t,e.selectedComponents.length===t?(a.nextStep="",console.log("Last Item set next tab to null")):a.nextStep=t+1,a.tabName=t.toString(),a.rules=[{}],console.log("Field Value",a.value),a.name="formName"+t,a.options=e.processOptions(a.answers))})),console.log("Select Length vs Order",this.selectedComponents.length,t)},eliminateEmpty:function(){this.selectedComponents},processOptions:function(e){var t=[];return e.forEach((function(e,a){t[a]={},t[a].label=e,t[a].value=e})),t},updateAnswers:function(e,t){e.answers.push(t)},addAnswers:function(e){var t=this.selectedComponents.filter((function(t){return t.id===e.id}));t&&(t[0].answers.push(this.tempAnswers),this.tempAnswers="")},deleteAnswers:function(e,t,a){console.log(t,e,a);var s=this.selectedComponents.filter((function(e){return e.id===a.id}));s[0].answers.splice(t,1),console.log(JSON.stringify(this.selectedComponents))},selectedEvent:function(e){this.selected=e},handleDragstart:function(){},handleDragend:function(){},handleCanceled:function(){},handleInserted:function(){},handleDrop:function(e){console.log(":v-list: drop"),console.log(e);var t=e.index,a=e.list,s=e.item;s.id=(new Date).getTime(),a.splice(t,0,s)},handleMoved:function(e){var t=e.index,a=e.list;a.splice(t,1)},handleDragover:function(){},updateProperties:function(e,t){return this.itemField=t,console.log("updateProperties-",JSON.stringify(t)),t&&"VInput"===t.fieldType?this.advancedState=!1:this.advancedState=!0,this.tab="one"},deleteItems:function(e){return this.selectedComponents.splice(e,1),this.tab=""},validate:function(){console.log("selectedComponents-",JSON.stringify(this.selectedComponents))},Route:function(){this.$router.push("/MyProject")},defineQuestions:function(e,t){}})},f=p,m=(a("5f83"),a("2877")),b=Object(m["a"])(f,s,n,!1,null,null,null);t["default"]=b.exports}}]);