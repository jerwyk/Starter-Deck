(this.webpackJsonpstarter_deck=this.webpackJsonpstarter_deck||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n.n(r),c=n(13),o=n.n(c),s=(n(132),n(133),n(134),n(35)),d=n(36),l=n(40),u=n(39),j=n(200),m=n(203),p=n(204),b=n(65),h=n(101),f=n.n(h),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{position:"fixed",children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(p.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(b.a,{variant:"h6",children:"Unnamed App"})]})}),Object(a.jsx)(m.a,{})]})}}]),n}(r.Component),g=n(22),x=n.n(g),v=n(77),k=n(47),y=n(28),C=n(102),S=n(232),N=n(206),_=n(229),w=n(207),D=n(209),I=n(210),L=n(82),T=n.n(L),M=n(228);n(87);function U(e){var t=e.open,n=e.onClose,i=e.onImport,c=Object(r.useState)(""),o=Object(y.a)(c,2),s=o[0],d=o[1];return Object(a.jsxs)(S.a,{className:"import-dialog",open:t,onClose:function(){n()},maxWidth:"sm",fullWidth:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(_.a,{flexGrow:1,children:"Bulk Import"}),Object(a.jsx)(_.a,{children:Object(a.jsx)(p.a,{onClick:n,children:Object(a.jsx)(T.a,{})})})]})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(M.a,{className:"import-text-field",multiline:!0,variant:"outlined",rows:"18",fullWidth:!0,label:"Card Names",onChange:function(e){return d(e.target.value)}})}),Object(a.jsx)(D.a,{children:Object(a.jsx)(I.a,{autoFocus:!0,onClick:function(){i(function(){var e=[];return s.split("\n").forEach((function(t){var n=t.split(" "),a=Object(C.a)(n),r=a[0],i=a.slice(1);if(i)for(var c=0;c<Number(r);++c)e.push({name:i.join(" ")});else e.push({name:r})})),e}()),n()},color:"primary",children:"import"})})]})}function A(e){var t=e.name,n=e.open,i=e.onClose,c=e.onConfirm,o=Object(r.useState)(t||""),s=Object(y.a)(o,2),d=s[0],l=s[1];return Object(a.jsxs)(S.a,{className:"import-dialog",open:n,onClose:function(){i()},maxWidth:"sm",fullWidth:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(_.a,{flexGrow:1,children:"Change Name"}),Object(a.jsx)(_.a,{children:Object(a.jsx)(p.a,{onClick:i,children:Object(a.jsx)(T.a,{})})})]})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(M.a,{fullWidth:!0,onChange:function(e){return l(e.target.value)},children:t||""})}),Object(a.jsx)(D.a,{children:Object(a.jsx)(I.a,{autoFocus:!0,onClick:function(){c(d),i()},color:"primary",children:"Confirm"})})]})}var G=n(233),X=n(208),B=n(211),F=n(212),W=n(173),E=n(213),R=n(214),Y=n(103),Z=n.n(Y),H=n(104),P=n.n(H),q=(n(139),n(140),n(5)),J=q.d.model("Image",{small:q.d.string,normal:q.d.string,large:q.d.string,png:q.d.string,art_crop:q.d.string,border_crop:q.d.string}),z=q.d.array(q.d.model({object:q.d.string,name:q.d.string,mana_cost:q.d.string,type_line:q.d.string,oracle_text:q.d.string,colors:q.d.array(q.d.string),flavor_text:q.d.string,artist:q.d.string,artist_id:q.d.string,illustration_id:q.d.string,image_uris:J})),V=q.d.model("Card",{id:q.d.string,name:q.d.string,quantity:q.d.optional(q.d.number,1),isCommander:q.d.optional(q.d.boolean,!1),lang:q.d.string,released_at:q.d.string,uri:q.d.string,scryfall_uri:q.d.string,highres_image:q.d.boolean,image_uris:q.d.maybe(J),mana_cost:q.d.maybe(q.d.string),cmc:q.d.number,type_line:q.d.string,oracle_text:q.d.maybe(q.d.string),power:q.d.optional(q.d.string,"0"),toughness:q.d.optional(q.d.string,"0"),colors:q.d.array(q.d.string),color_identity:q.d.array(q.d.string),keywords:q.d.array(q.d.string),all_parts:q.d.array(q.d.model({object:q.d.string,id:q.d.string,component:q.d.string,name:q.d.string,type_line:q.d.string,uri:q.d.string})),card_faces:z,legalities:q.d.model({standard:q.d.string,future:q.d.string,historic:q.d.string,gladiator:q.d.string,pioneer:q.d.string,modern:q.d.string,legacy:q.d.string,pauper:q.d.string,vintage:q.d.string,penny:q.d.string,commander:q.d.string,brawl:q.d.string,duel:q.d.string,oldschool:q.d.string,premodern:q.d.string}),set:q.d.string,set_name:q.d.string,set_type:q.d.string,set_uri:q.d.string,set_search_uri:q.d.string,scryfall_set_uri:q.d.string,rulings_uri:q.d.string,prints_search_uri:q.d.string,collector_number:q.d.string,digital:q.d.boolean,rarity:q.d.string}),K=q.d.model({focusedCard:q.d.optional(q.d.string,""),bulkImportDialog:q.d.boolean,deckName:q.d.string,deck:q.d.optional(q.d.array(V),[])}).actions((function(e){return{addCard:function(t){if(e.deck.find((function(e){return e.name===t.name})))e.deck.replace(e.deck.map((function(e){return e.name===t.name?(e.quantity++,e):e})));else{e.deck.push(t);var n=e.deck;n.sort((function(e,t){return e.name>t.name?1:-1})),e.deck=n}}}})).actions((function(e){return{setDeck:function(t){e.deck=Object(q.a)(t)},setDeckName:function(t){e.deckName=t},addCards:function(t){t.forEach((function(t){return e.addCard(t)}))},removeCard:function(t){if(e.deck.find((function(e){return e.id===t}))){e.deck.replace(e.deck.map((function(e){return e.id===t?(e.quantity--,e):e})));var n=e.deck,a=n.map((function(e){return e.quantity<=0?e.id:""})).lastIndexOf(t);a>-1&&(n.splice(a,1),e.deck=n)}},focusCard:function(t){e.focusedCard=t},setCommander:function(t){e.deck.replace(e.deck.map((function(e){return e.id===t?(e.isCommander=!0,e):(e.isCommander=!1,e)})))},changeEdition:function(t){e.deck.replace(e.deck.map((function(e){return e.name===t.name?(t.quantity=e.quantity,t):e}))),e.focusedCard=t.id}}})).views((function(e){return{}})),Q=q.d.model("Root",{editor:K}),$=Q.create({editor:{deckName:"",bulkImportDialog:!1}});localStorage.getItem("rootState")&&($=Q.create(JSON.parse(localStorage.getItem("rootState")||"{}")));var ee=$;Object(q.c)(ee,(function(e){localStorage.setItem("rootState",JSON.stringify(e))}));var te=Object(r.createContext)(null),ne=te.Provider;function ae(){var e=Object(r.useContext)(te);if(null===e)throw new Error("Store cannot be null, please add a context provider");return e}function re(e){var t=e.card,n=ae().editor,r=function(){var e,n=null===(e=t.mana_cost)||void 0===e?void 0:e.match(/{([^{}]*)}/g);return Object(a.jsx)(F.a,{className:"card-mana",children:null===n||void 0===n?void 0:n.map((function(e){var t=e.substring(1,e.length-1).toLowerCase().replace("/","");return Object(a.jsx)("div",{className:"mana small s".concat(t)})}))})};return Object(a.jsxs)(W.a,{button:!0,divider:!0,onClick:function(){return n.focusCard(t.id)},className:"deck-list-entry-container",children:[Object(a.jsx)(E.a,{className:"card-quantity",classes:{primary:"card-text"},primary:t.quantity}),Object(a.jsx)(E.a,{classes:{primary:"card-name card-text"},primary:t.name}),Object(a.jsx)(r,{}),Object(a.jsxs)(R.a,{className:"deck-list-entry-actions",children:[Object(a.jsx)(p.a,{size:"small",onClick:function(){return n.addCard(t)},children:Object(a.jsx)(Z.a,{color:"primary"})}),Object(a.jsx)(p.a,{size:"small",onClick:function(){return n.removeCard(t.id)},children:Object(a.jsx)(P.a,{color:"secondary"})})]})]})}var ie=Object(G.a)()((function(e){e.name;var t=e.cards,n=e.width,i={commander:"Commanders",planeswalker:"Planeswalkers",creature:"Creatures",sorcery:"Sorceries",instant:"Instants",artifact:"Artifacts",enchantment:"Enchantments",land:"Lands"},c=Object(r.useMemo)((function(){var e={};return t.forEach((function(t){t.isCommander?e.commander?e.commander.push(t):e.commander=[t]:["land","creature","planeswalker","artifact","enchantment","sorcery","instant"].some((function(n){return!!t.type_line.toLowerCase().includes(n)&&(e[n]?e[n].push(t):e[n]=[t],!0)}))})),e}),[t]);return Object(a.jsx)("div",{style:{columnCount:Object(G.b)("xl",n)?4:Object(G.b)("lg",n)?3:Object(G.b)("md",n)?2:Object(G.b)("sm",n)?1:2},children:Object.keys(i).map((function(e){var t;return c[e]&&Object(a.jsx)(X.a,{dense:!0,className:"deck-list",subheader:Object(a.jsx)(B.a,{className:"deck-list-subheader",component:"div",id:"nested-list-subheader",children:Object(a.jsx)("div",{children:"".concat(i[e]," (").concat(c[e].length,")")})}),children:null===(t=c[e])||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(re,{card:e})}))})}))})})),ce=n(55),oe=n.n(ce),se=n(110),de=n(221),le=n(48);function ue(e,t,n,a){return{data:{Name:"Card",Transform:{posX:0,posY:0,posZ:0,rotX:0,rotY:180,rotZ:180,scaleX:1,scaleY:1,scaleZ:1},Nickname:t,Description:"",GMNotes:"",Locked:!1,Grid:!0,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,CardID:100*e,LuaScript:"",LuaScriptState:"",XmlUI:""},model:{FaceURL:n,BackURL:a,NumWidth:1,NumHeight:1,BackIsHidden:!0,UniqueBack:!1,Type:0}}}function je(e,t,n,a,r,i){return{data:{Name:"Card",Transform:{posX:0,posY:0,posZ:0,rotX:0,rotY:180,rotZ:180,scaleX:1,scaleY:1,scaleZ:1},Nickname:t,Description:n,GMNotes:"",Locked:!1,Grid:!0,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,CardID:100*e,LuaScript:"",LuaScriptState:"",XmlUI:"",States:{2:{GUID:"81082a",Name:"Card",Transform:{posX:0,posY:0,posZ:0,rotX:0,rotY:180,rotZ:180,scaleX:1,scaleY:1,scaleZ:1},Nickname:t,Description:n,Memo:"ea9c459a-6047-43aa-968f-a582be4000e8",Value:0,Locked:!1,Grid:!0,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,HideWhenFaceDown:!0,Hands:!0,CardID:100*e,SidewaysCard:!1,CustomDeck:Object(le.a)({},e,{FaceURL:r,BackURL:i,NumWidth:1,NumHeight:1,BackIsHidden:!0,UniqueBack:!1,Type:0})}}},model:{FaceURL:a,BackURL:i,NumWidth:1,NumHeight:1,BackIsHidden:!0,UniqueBack:!1,Type:0}}}var me="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013";function pe(e){return e.image_uris?[e.image_uris.normal]:e.card_faces?e.card_faces.map((function(e){return e.image_uris.normal})):[]}function be(e,t){var n,a,r,i,c={};return t.length>1?((c={Name:"DeckCustom",Transform:{posX:36.25,posY:5.11282444,posZ:6.645,rotX:.0130744949,rotY:.03566377,rotZ:180.000275,scaleX:1,scaleY:1,scaleZ:1},Nickname:"",Description:"",GMNotes:"",ColorDiffuse:{r:.713235259,g:.713235259,b:.713235259},Locked:!1,Grid:!0,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,HideWhenFaceDown:!0,Hands:!1,SidewaysCard:!1,DeckIDs:[0],CustomDeck:{},LuaScript:"",LuaScriptState:"",XmlUI:"",ContainedObjects:[{}]}).DeckIDs=e,c.CustomDeck=Object.assign.apply(Object,[{}].concat(Object(v.a)(t.map((function(e){return Object(le.a)({},e.data.CardID/100,e.model)}))))),c.ContainedObjects=t.map((function(e){return e.data}))):(n=e[0],a=t[0].data.Nickname,r=t[0].model.FaceURL,i=t[0].model.BackURL,c={Name:"Card",Transform:{posX:-33.75,posY:4.633549,posZ:-9.805,rotX:359.840668,rotY:-.0008630832,rotZ:359.920532,scaleX:1,scaleY:1,scaleZ:1},Nickname:a,Description:"",GMNotes:"",ColorDiffuse:{r:.713235259,g:.713235259,b:.713235259},Locked:!1,Grid:!0,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,HideWhenFaceDown:!0,Hands:!0,CardID:100*n,SidewaysCard:!1,CustomDeck:Object(le.a)({},n,{FaceURL:r,BackURL:i,NumWidth:1,NumHeight:1,BackIsHidden:!0,UniqueBack:!1,Type:0}),LuaScript:"",LuaScriptState:"",XmlUI:""}),c}function he(e,t){return fe.apply(this,arguments)}function fe(){return(fe=Object(k.a)(x.a.mark((function e(t,n){var a,r,i,c,o,s,d,l,u,j,m,p,b,h=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=h.length>2&&void 0!==h[2]?h[2]:me,r=[],i=[],c=[],o=[],s=[],d=1,l=n.flatMap((function(e){e.all_parts&&e.all_parts.forEach((function(e){"token"!==e.component||o.includes(e.id)||o.push(e.id)}));var t=pe(e);return e.isCommander?(i.push(d),s.push(ue(d,e.name,t[0],a)),[]):(r.push(100*d),t.length>1?je(d++,e.name,e.oracle_text,t[0],t[1],a):ue(d++,e.name,t[0],a))})),(u={SaveName:"",GameMode:"",Date:"",Gravity:.5,PlayArea:.5,GameType:"",GameComplexity:"",Tags:[],Table:"",Sky:"",Note:"",Rules:"",TabStates:{},ObjectStates:[{Name:"Custom_Model_Bag",Transform:{posX:35.4643936,posY:2.8808763,posZ:5.782154,rotX:-201687612e-14,rotY:-.00141442078,rotZ:8.571432e-7,scaleX:1,scaleY:1,scaleZ:1},Nickname:"Card Deck",Description:"",GMNotes:"",ColorDiffuse:{r:.9999998,g:.992163241,b:.9999998},Locked:!1,Grid:!1,Snap:!0,IgnoreFoW:!1,MeasureMovement:!1,DragSelectable:!0,Autoraise:!0,Sticky:!0,Tooltip:!0,GridProjection:!1,HideWhenFaceDown:!1,Hands:!1,MaterialIndex:-1,MeshIndex:-1,CustomMesh:{MeshURL:"https://www.dropbox.com/s/fbpp2c2mzvdi2lg/DeckBox.obj?dl=1",DiffuseURL:"https://www.dropbox.com/s/o53xastt2846bmt/DeckBox.jpg?dl=1",NormalURL:"",ColliderURL:"",Convex:!0,MaterialIndex:2,TypeIndex:6,CastShadows:!0},LuaScript:"",LuaScriptState:"",XmlUI:"",ContainedObjects:[{}]}],LuaScript:"",LuaScriptState:"",XmlUI:"",VersionNumber:""}).ObjectStates[0].Nickname=t,j=be(r,l),u.ObjectStates[0].ContainedObjects=[j],s.length>0&&(m=be(i,s),u.ObjectStates[0].ContainedObjects.push(m)),!(o.length>0)){e.next=20;break}return e.next=16,oe.a.post("https://api.scryfall.com/cards/collection",{identifiers:o.map((function(e){return{id:e}}))},{headers:{"Content-Type":"application/json"}});case 16:p=e.sent,o=p.data.data.map((function(e){return c.push(100*d),ue(d++,e.name,e.image_uris.normal,a)})),b=be(c,o),u.ObjectStates[0].ContainedObjects.push(b);case 20:return e.abrupt("return",u);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=n(105),ge=n.n(Oe),xe=n(29),ve=n(219),ke=n(220),ye=n(215),Ce=n(174),Se=n(205),Ne=n(216),_e=n(170),we=n(217),De=n(218),Ie=n(78),Le=n.n(Ie);function Te(e){var t=e.deck,n={};return t&&(n=function(e){var t={};return e.forEach((function(e){var n=e.type_line.split(" \u2014 ")[0].match(/(Legendary)?(Basic)?([^/]*).*/),a=Object(y.a)(n,4),r=(a[0],a[1],a[2],a[3]);r=r.trim(),t[r]?t[r]++:t[r]=1})),Object.entries(t).sort((function(e,t){var n=Object(y.a)(e,2),a=n[0],r=(n[1],Object(y.a)(t,2)),i=r[0];return r[1],a<i?-1:a>i?1:0}))}(t)),Object(a.jsx)(Le.a,{variant:"popper",popupId:"demoPopover",children:function(e){return Object(a.jsxs)("div",{className:"deck-counter",children:[Object(a.jsx)(ye.a,Object(xe.a)(Object(xe.a)({color:"primary","aria-label":"add"},Object(Ie.bindToggle)(e)),{},{children:(null===t||void 0===t?void 0:t.length)||0})),Object(a.jsx)(Ce.a,Object(xe.a)(Object(xe.a)({},Object(Ie.bindPopper)(e)),{},{placement:"top-end",transition:!0,disablePortal:!0,modifiers:{offset:{enabled:!0,offset:"0, 10"}},children:function(e){var t=e.TransitionProps;return Object(a.jsx)(Se.a,Object(xe.a)(Object(xe.a)({},t),{},{timeout:350,children:Object(a.jsx)(Ne.a,{component:_e.a,style:{minWidth:"240px"},children:Object(a.jsx)(we.a,{children:Object(a.jsx)(De.a,{children:n.map((function(e){var t=Object(y.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(ve.a,{children:[Object(a.jsx)(ke.a,{component:"th",scope:"row",children:n}),Object(a.jsx)(ke.a,{align:"right",children:r})]},n)}))})})})}))}}))]})}})}var Me,Ue=n(49),Ae=Object(Ue.b)("rootStore")(Me=Object(Ue.c)(Me=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={importerOpen:!1,changeNameOpen:!1,actionAnchorEl:null,deckTitle:""},e.bulkImportCards=function(){var t=Object(k.a)(x.a.mark((function t(n){var a,r,i,c,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],i=n.length;case 2:if(!(i>0)){t.next=11;break}return c=n.length-i,t.next=6,oe.a.post("https://api.scryfall.com/cards/collection",{identifiers:n.slice(c,c+75<n.length?c+75:n.length)},{headers:{"Content-Type":"application/json"}});case 6:o=t.sent,r.push.apply(r,Object(v.a)(o.data.data)),i-=75,t.next=2;break;case 11:null===(a=e.props.rootStore)||void 0===a||a.editor.addCards(r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.importAction=function(){e.setState({importerOpen:!0,actionAnchorEl:null})},e.exportAction=Object(k.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Blob,t.t1=JSON,t.next=4,he(e.props.rootStore.editor.deckName,e.props.rootStore.editor.deck);case 4:return t.t2=t.sent,t.t3=t.t1.stringify.call(t.t1,t.t2),t.t4=[t.t3],t.t5={type:"application/json;charset=utf-8"},n=new t.t0(t.t4,t.t5),t.t6=console,t.t7=JSON,t.next=13,he(e.props.rootStore.editor.deckName,e.props.rootStore.editor.deck);case 13:t.t8=t.sent,t.t9=t.t7.stringify.call(t.t7,t.t8),t.t6.log.call(t.t6,t.t9),ge.a.saveAs(n,"".concat(e.props.rootStore.editor.deckName,".json"));case 17:case"end":return t.stop()}}),t)}))),e.changeNameAction=function(){e.setState({changeNameOpen:!0})},e.handleCardDelete=function(t){e.props.rootStore.editor.removeCard(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.rootStore?Object(q.b)(this.props.rootStore.editor.deck):[],r=function(){return Object(a.jsxs)(se.a,{id:"simple-menu",anchorEl:t.state.actionAnchorEl,keepMounted:!0,open:Boolean(t.state.actionAnchorEl),onClose:function(){return t.setState({actionAnchorEl:null})},children:[Object(a.jsx)(de.a,{onClick:t.changeNameAction,children:"Change Name"}),Object(a.jsx)(de.a,{onClick:t.importAction,children:"Bulk Import"}),Object(a.jsx)(de.a,{onClick:t.exportAction,children:"Export to tts"})]})};return Object(a.jsxs)("div",{className:"deck-view-container",children:[Object(a.jsx)(U,{open:this.state.importerOpen,onClose:function(){t.setState({importerOpen:!1})},onImport:this.bulkImportCards}),Object(a.jsx)(A,{name:this.state.deckTitle,open:this.state.changeNameOpen,onClose:function(){t.setState({changeNameOpen:!1})},onConfirm:function(e){t.setState({deckTitle:e})}}),Object(a.jsx)("div",{className:"deck-view-title"}),Object(a.jsxs)("div",{className:"deck-menu",children:[Object(a.jsx)(I.a,{variant:"contained",color:"primary",onClick:function(e){return t.setState({actionAnchorEl:e.currentTarget})},children:"Actions"}),Object(a.jsx)(r,{})]}),Object(a.jsx)(b.a,{variant:"h2",align:"left",paragraph:!0,className:"deck-title",style:{color:"white"},children:this.state.deckTitle||""}),Object(a.jsx)(ie,{cards:n}),Object(a.jsx)(Te,{deck:null===(e=this.props.rootStore)||void 0===e?void 0:e.editor.deck})]})}}]),n}(r.Component))||Me)||Me,Ge=n(230),Xe=n(226),Be=n(108),Fe=n.n(Be),We=n(109),Ee=n.n(We),Re=n(222),Ye=n(223),Ze=n(224),He=n(225),Pe=n(111);function qe(e){var t=e.children,n=e.value,r=e.index,i=Object(Pe.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(xe.a)(Object(xe.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:n===r&&Object(a.jsx)(_.a,{children:t})}))}var Je=n(107),ze=n.n(Je),Ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:0,editions:[],selected:""},e.handleChange=function(t,n){e.setState({value:n})},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(k.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===this.props||!this.props.card){e.next=5;break}return e.next=3,oe.a.get("https://api.scryfall.com/cards/search",{params:{q:'!"'.concat(null===(n=this.props.card)||void 0===n?void 0:n.name,'"'),unique:"prints",order:"released"}});case 3:r=e.sent,this.setState({editions:r.data.data,selected:null===(a=this.props.card)||void 0===a?void 0:a.id});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.card,n=function(){var n;return Object(a.jsxs)("div",{className:"card-detail-info-container",children:[Object(a.jsx)(b.a,{variant:"h5",children:null===t||void 0===t?void 0:t.name}),Object(a.jsx)(Re.a,{}),Object(a.jsx)("img",{style:{width:"100%"},src:null===t||void 0===t||null===(n=t.image_uris)||void 0===n?void 0:n.normal,alt:null===t||void 0===t?void 0:t.name,className:"card-detail-image"}),Object(a.jsx)(Re.a,{}),Object(a.jsx)(b.a,{children:null===t||void 0===t?void 0:t.type_line}),((null===t||void 0===t?void 0:t.type_line.includes("Legendary "))&&(null===t||void 0===t?void 0:t.type_line.includes("Creature"))||(null===t||void 0===t?void 0:t.type_line.includes("Planeswalker")))&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Re.a,{}),Object(a.jsx)(I.a,{className:"card-detail-set-commander",onClick:function(){return e.props.onSetCommander(t.id)},children:"Set as Commander"})]})]})},r=function(){var t;return e.state.editions&&Object(a.jsx)("div",{className:"card-detail-edition-container",children:Object(a.jsx)(Ye.a,{cellHeight:"auto",spacing:8,cols:2,children:null===(t=e.state.editions)||void 0===t?void 0:t.map((function(t,n){var r,i,c;return Object(a.jsx)(Ze.a,{children:Object(a.jsx)(He.a,{title:t.set_name,children:Object(a.jsxs)("div",{onClick:function(){return e.props.onEditionChange(t)},children:[t.card_faces&&t.card_faces.length>0?Object(a.jsx)("img",{style:{height:"100%",width:"100%",borderRadius:"11px"},src:null===(r=t.card_faces[0].image_uris)||void 0===r?void 0:r.normal,alt:t.name}):Object(a.jsx)("img",{style:{height:"100%",width:"100%",borderRadius:"11px"},src:null===(i=t.image_uris)||void 0===i?void 0:i.normal,alt:t.name}),t.id===(null===(c=e.props.card)||void 0===c?void 0:c.id)&&Object(a.jsx)("div",{className:"card-detail-edition-selected",children:Object(a.jsx)(ze.a,{color:"primary",fontSize:"large"})})]})})},n)}))})})};return Object(a.jsxs)("div",{className:"card-detail-container",children:[Object(a.jsxs)(Ge.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",className:"card-detail-tabs",children:[Object(a.jsx)(Xe.a,{label:"Details","aria-label":"selected card"}),Object(a.jsx)(Xe.a,{label:"Edition","aria-label":"search"})]}),Object(a.jsx)(qe,{value:this.state.value,index:0,children:Object(a.jsx)(n,{})}),Object(a.jsx)(qe,{value:this.state.value,index:1,children:Object(a.jsx)(r,{})})]})}}]),n}(r.Component),Ke="400px";var Qe=Object(Ue.c)((function(){var e=i.a.useState(0),t=Object(y.a)(e,2),n=t[0],r=t[1],c=ae(),o=c.editor.focusedCard,s=c.editor.deck.find((function(e){return e.id===o}));return Object(a.jsx)("div",{style:{position:"relative",minWidth:Ke},children:Object(a.jsxs)("div",{className:"editor-sidebar-container",style:{width:Ke},children:[Object(a.jsxs)(Ge.a,{value:n,orientation:"vertical",onChange:function(e,t){r(t)},indicatorColor:"secondary",className:"editor-sidebar-tabs",children:[Object(a.jsx)(Xe.a,{icon:Object(a.jsx)(Fe.a,{style:{fill:"white"}}),"aria-label":"selected card"}),Object(a.jsx)(Xe.a,{icon:Object(a.jsx)(Ee.a,{style:{fill:"white"}}),"aria-label":"search"})]}),Object(a.jsx)(qe,{value:n,index:0,children:Object(a.jsx)(Ve,{card:s,onSetCommander:function(e){return c.editor.setCommander(e)},onEditionChange:function(e){return c.editor.changeEdition(e)}})}),Object(a.jsx)(qe,{value:n,index:1,children:"Search"})]})})})),$e=(n(167),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"editor-container",children:[Object(a.jsx)(Qe,{}),Object(a.jsx)(Ae,{})]})}}]),n}(r.Component));var et=function(){return Object(a.jsx)(Ue.a,{rootStore:ee,children:Object(a.jsx)(ne,{value:ee,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)($e,{})]})})})},tt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(et,{})}),document.getElementById("root")),tt()},87:function(e,t,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.3384ff7d.chunk.js.map