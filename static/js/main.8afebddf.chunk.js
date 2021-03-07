(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.a56cd5e0.svg"},26:function(e,t,a){e.exports=a.p+"static/media/success-icon.7fc4c149.svg"},27:function(e,t,a){e.exports=a.p+"static/media/fail-icon.c32299fa.svg"},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(23),r=a.n(c),i=(a(34),a(28)),l=a(1),s=a(14),u=a(15),p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:".popup__input-error",errorActiveClass:"popup__input-error_active",controlSelector:".popup__label"},m="https://react-mesto-api-heroku.herokuapp.com/",_=new(function(){function e(t){var a=t.baseUrl;Object(s.a)(this,e),this.baseUrl=a}return Object(u.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Error: ".concat(e.status)))}},{key:"getItems",value:function(e){var t=this;return fetch(this.baseUrl.concat(e),{headers:{Accept:"application/json",authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"createItem",value:function(e,t){var a=this;return fetch(this.baseUrl.concat(t),{method:"POST",headers:{Accept:"application/json",authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return a._getResponseData(e)}))}},{key:"changeItem",value:function(e,t){var a=this;return fetch(this.baseUrl.concat(t),{method:"PATCH",headers:{Accept:"application/json",authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return a._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.replaceItem("/cards/".concat(e,"/likes"),""):this.deleteItem("/cards/".concat(e,"/likes"),"")}},{key:"replaceItem",value:function(e,t){var a=this;return fetch(this.baseUrl.concat(e).concat("/".concat(t)),{method:"PUT",headers:{Accept:"application/json",authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then((function(e){return a._getResponseData(e)}))}},{key:"deleteItem",value:function(e,t){var a=this;return fetch(this.baseUrl.concat(e).concat("/".concat(t)),{method:"DELETE",headers:{Accept:"application/json",authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then((function(e){return a._getResponseData(e)}))}}]),e}())({baseUrl:m}),d=a(24),f=a.n(d),h=a(2),v=a(7);var b=function(e){var t=e.onSignOut,a=e.userEmail.email;return o.a.createElement("header",{className:"header page__header section"},o.a.createElement("a",{href:"/",className:"logo header__logo"},o.a.createElement("img",{className:"logo__image",src:f.a,alt:"Logo of project Mesto"})),o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/sign-up"},o.a.createElement(v.b,{to:"./sign-in",className:"link header__link"},"Sign in")),o.a.createElement(h.b,{path:"/sign-in"},o.a.createElement(v.b,{to:"./sign-up",className:"link header__link"},"Sign up")),o.a.createElement(h.b,{path:"/"},o.a.createElement("div",{className:"header__user-info"},o.a.createElement("p",{className:"header__email"},a),o.a.createElement("button",{onClick:t,className:"header__button"},"Quit")))))},g=a(16),E=o.a.createContext();function k(e){var t=e.onCardClick,a=e.card,n=e.onCardLike,c=e.onCardDelete,r=e.owner,i=e.likes,l=e.name,s=e.link;var u=o.a.useContext(E),p=r===u._id,m=i.some((function(e){return e===u._id}))?"place__like-button place__like-button_active":"place__like-button";return o.a.createElement("li",{className:"places__item"},o.a.createElement("figure",{className:"place"},o.a.createElement("button",{className:p?"link place__delete-button":"link place__delete-button place__delete-button_disabled",onClick:function(e){var t=e.target.closest(".places__item");c(a,t)}}),o.a.createElement("img",{src:s,alt:l,className:"place__image",onClick:function(){t(a)}}),o.a.createElement("div",{className:"place__wrapper"},o.a.createElement("h2",{className:"place__name"},l," "),o.a.createElement("button",{className:"place__like-button-container"},o.a.createElement("div",{className:m,onClick:function(){n(a)}}),o.a.createElement("div",{className:"place__like-counter"},i.length)))))}var y=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,c=e.handleCardClick,r=e.cards,i=e.onCardLike,l=e.onCardDelete,s=(Object(g.a)(e,["onEditProfile","onAddPlace","onEditAvatar","handleCardClick","cards","onCardLike","onCardDelete"]),o.a.useContext(E));return o.a.createElement("main",{className:"content page__content section"},o.a.createElement("section",{className:"profile section"},o.a.createElement("div",{className:"profile__image",onClick:n,style:{backgroundImage:"url(".concat(s.avatar,")")}}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__name-wrap"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{className:"link profile__edit-button",onClick:t})),o.a.createElement("p",{className:"profile__job"},s.about)),o.a.createElement("button",{className:"link profile__add-button",onClick:a})),o.a.createElement("section",{className:"places section"},o.a.createElement("ul",{className:"places__list"},o.a.createElement("li",{className:"places__empty-list"},"No places added"),r.map((function(e){return o.a.createElement(k,Object.assign({key:e._id,onCardClick:c,card:e,onCardLike:i,onCardDelete:l},e))})))))};var j=function(){return o.a.createElement("footer",{className:"footer section page__footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var O=function(){function e(t,a){Object(s.a)(this,e),this._formSelectorsObj=t,this._formElement=a,this._inputList=Array.from(a.querySelectorAll(t.inputSelector)),this._buttonElement=a.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorActiveClass=t.errorActiveClass,this._controlSelector=t.controlSelector}return Object(u.a)(e,[{key:"_findInputError",value:function(e){return e.closest(this._controlSelector).querySelector(this._inputErrorClass)}},{key:"_showInputError",value:function(e,t){var a=this._findInputError(e);a.textContent=t,a.classList.add(this._errorActiveClass)}},{key:"_hideInputError",value:function(e){var t=this._findInputError(e);t.classList.remove(this._errorActiveClass),t.textContent=""}},{key:"_isInputWithoutSpacingInvalid",value:function(e){var t=e.value.trim();return 0===t.length?1:t.length<2?2:0}},{key:"_checkInputValidity",value:function(e){var t=this._findInputError(e);switch(this._isInputWithoutSpacingInvalid(e)){case 1:t.textContent="Fill in this field.",t.classList.add(this._errorActiveClass);break;case 2:t.textContent="The text must be at least 2 symbols.",t.classList.add(this._errorActiveClass);break;case 0:e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage);break;default:alert("error")}}},{key:"hasInvalidInput",value:function(){var e=this;return this._inputList.some((function(t){return!t.validity.valid||e._isInputWithoutSpacingInvalid(t)}))}},{key:"_toggleButtonState",value:function(){this.hasInvalidInput()?this._buttonElement.classList.add(this._inactiveButtonClass):this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}]),e}();var C=function(e){var t=e.title,a=e.name,n=e.buttonText,c=e.isOpen,r=e.onClose,i=e.onSubmit,l=e.children;function s(){if(c){var e=document.querySelector(".popup__form_type_".concat(a)),t=new O(p,e);return t.enableValidation(),!t.hasInvalidInput()}}function u(){document.querySelector(".popup__form_type_".concat(a)).reset(),r(),window.removeEventListener("keydown",m)}function m(e){"Escape"===e.key&&u()}return s(),c&&window.addEventListener("keydown",(function(e){return m(e)})),o.a.createElement("section",{className:"popup popup_type_form popup_type_".concat(a," ").concat(c&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&u()}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"link popup__close-button",onClick:u}),o.a.createElement("form",{className:"popup__form popup__form_type_".concat(a),noValidate:!0,name:a,onSubmit:function(e){e.preventDefault(),s()&&(i(e),document.querySelector(".popup__form_type_".concat(a)).reset())}},o.a.createElement("h2",{className:"popup__title"},t),o.a.createElement("fieldset",{className:"popup__fieldset"},l,o.a.createElement("button",{className:"link popup__save-button popup__save-button_type_".concat(a),autoFocus:!0,type:"submit"},n)))))};var N=function(e){var t=e.title,a=e.name,n=e.card,c=e.cardDOM,r=e.buttonText,i=e.isOpen,l=e.onClose,s=e.onCardDeleteSubmit;return o.a.createElement(C,{title:t,name:a,buttonText:r,isOpen:i,onClose:l,onSubmit:function(e){e.preventDefault(),s(n,c)}})};var S=function(e){var t=e.card,a=e.onClose,n=e.isOpen,c=e.name;function r(){a(),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&r()}return n&&window.addEventListener("keydown",i),o.a.createElement("section",{className:"popup popup_type_".concat(c," ").concat(n&&"popup_opened","\n                "),onClick:function(e){e.target===e.currentTarget&&r()}},o.a.createElement("div",{className:"popup__container-pic-zoom"},o.a.createElement("button",{className:"link popup__close-button",onClick:r}),o.a.createElement("figure",{className:"picture-zoom"},o.a.createElement("img",{src:t?t.link:"",alt:t?t.name:"",className:"picture-zoom__img"}),o.a.createElement("p",{className:"picture-zoom__title"},t?t.name:""))))};var w=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateUser,r=o.a.useContext(E),i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],p=s[1],m=Object(n.useState)(""),_=Object(l.a)(m,2),d=_[0],f=_[1];return Object(n.useEffect)((function(){p(r.name),f(r.about)}),[r]),o.a.createElement(C,{title:"Update profile info",name:"edit-profile",buttonText:"Save",isOpen:t,onClose:function(){p(r.name),f(r.about),a()},onSubmit:function(e){e.preventDefault(),c({name:u,about:d})}},o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",value:u,onChange:function(e){p(e.target.value)},name:"profile-name",placeholder:"Name",id:"profile-name",className:"input popup__input popup__input_type_name",required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"popup__input-error js-popup__input-error_type_profile"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",value:d,onChange:function(e){f(e.target.value)},name:"profile-job",id:"profile-job",placeholder:"Job",className:"input popup__input popup__input_type_job",required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"popup__input-error js-popup__input-error_type_profile"})))};var I=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateAvatar,r=Object(n.useRef)({});return o.a.createElement(C,{title:"Update avatar",name:"edit-avatar",buttonText:"Save",isOpen:t,onClose:a,onSubmit:function(e){c({avatar:r.current.value})}},o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{ref:r,type:"url",name:"avatar",id:"avatar",placeholder:"Link",className:"input popup__input popup__input_type_avatar",required:!0}),o.a.createElement("span",{className:"popup__input-error"})))};var L=function(e){var t=e.isOpen,a=e.onClose,c=e.onAddPlace,r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],u=i[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),_=m[0],d=m[1];return o.a.createElement(C,{title:"New place",name:"add-place",buttonText:"Create",isOpen:t,onClose:function(){u(""),d(""),a()},onSubmit:function(e){e.preventDefault(),c({name:s,link:_}),u(""),d("")}},o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"text",value:s,onChange:function(e){u(e.target.value)},name:"place-name",placeholder:"Name",id:"place-name",className:"input popup__input popup__input_type_place-name",required:!0,minLength:"2",maxLength:"30"}),o.a.createElement("span",{className:"popup__input-error"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"url",value:_,onChange:function(e){d(e.target.value)},name:"place-pic",id:"place-pic",placeholder:"Link",className:"input popup__input popup__input_type_place-pic",required:!0}),o.a.createElement("span",{className:"popup__input-error"})))};var A=function(e){var t=e.title,a=e.children,n=e.onSubmit;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup__register-login"},o.a.createElement("section",{className:"popup__container-register-login"},o.a.createElement("form",{className:"popup__form",noValidate:!0,onSubmit:n},o.a.createElement("h2",{className:"popup__title popup__title_type_login"},t),o.a.createElement("fieldset",{className:"popup__fieldset"},a)))))},x=a(10),T=a(8);function q(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({}),r=Object(l.a)(c,2),i=r[0],s=r[1],u=Object(n.useState)(!1),p=Object(l.a)(u,2),m=p[0],_=p[1],d=Object(n.useCallback)((function(){o({}),s({}),_(!1)}),[]);return{values:a,setValues:o,handleChange:function(e){var t=e.target,n=t.name;if("password"==n){var c=t.value.trim().replace(/\s/g,"");o(Object(T.a)(Object(T.a)({},a),{},Object(x.a)({},n,c))),s(Object(T.a)(Object(T.a)({},i),{},Object(x.a)({},n,t.validationMessage)))}else{var r=t.value.trim();o(Object(T.a)(Object(T.a)({},a),{},Object(x.a)({},n,r))),s(Object(T.a)(Object(T.a)({},i),{},Object(x.a)({},n,t.validationMessage)))}_(e.target.closest("form").checkValidity())},errors:i,resetForm:d,isValid:m}}var D=function(e){var t=e.onLogin,a=q(),c=a.values,r=a.handleChange,i=a.errors,l=a.resetForm,s=a.isValid,u=function(e){r(e)};Object(n.useEffect)((function(){l()}),[l]);return o.a.createElement("div",{className:"login"},o.a.createElement(A,{title:"Sign in",onSubmit:function(e){e.preventDefault();var a=c.email,n=c.password;t(a,n,l)}},o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"email",value:c.email,onChange:u,name:"email",placeholder:"Email",id:"email",className:"input popup__input popup__input_type_dark",required:!0,minLength:"2",maxLength:"80"}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active"},i.email)),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"password",value:c.password,onChange:u,name:"password",id:"password",placeholder:"Password",className:"input popup__input popup__input_type_dark",required:!0,minLength:"6",maxLength:"15"}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active"},i.password)),o.a.createElement("button",{className:"link popup__save-button popup__save-button_type_dark",autoFocus:!0,type:"submit",disabled:!s},"Enter")))},P=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return o.a.createElement(h.b,null,(function(){return!0===a.loggedIn?o.a.createElement(t,a):o.a.createElement(h.a,{to:"/sign-up"})}))},B=function(e){var t=e.onRegister,a=q(),c=a.values,r=a.handleChange,i=a.errors,l=a.resetForm,s=a.isValid,u=function(e){r(e)};Object(n.useEffect)((function(){l()}),[l]);return o.a.createElement("div",{className:"register"},o.a.createElement(A,{title:"Sign up",onSubmit:function(e){e.preventDefault();var a=c.email,n=c.password;t(a,n,l)}},o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"email",value:c.email,onChange:u,name:"email",placeholder:"Email",id:"email",className:"input popup__input popup__input_type_dark",required:!0,minLength:"2",maxLength:"80"}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active"},i.email)),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{type:"password",value:c.password,onChange:u,name:"password",id:"password",placeholder:"Password",className:"input popup__input popup__input_type_dark",required:!0,minLength:"6",maxLength:"15"}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active"},i.password)),o.a.createElement("button",{className:"link popup__save-button popup__save-button_type_dark",autoFocus:!0,type:"submit",disabled:!s},"Sign up"),o.a.createElement(v.b,{to:"/sign-in",className:"link popup__login-link"},"Already signed up? Then enter.")))},U=a(26),z=a.n(U),R=a(27),F=a.n(R);var V=function(e){var t=e.isOpen,a=e.onClose,n=e.isSuccess,c=e.errorMessage;function r(){a(),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.key&&r()}return t&&window.addEventListener("keydown",(function(e){return i(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"popup popup_type_form ".concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&r()}},o.a.createElement("div",{className:"popup__container"},n?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:z.a,alt:"Success",className:"popup__infotool-img"}),o.a.createElement("p",{className:"popup__infotool-text"},"Success!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:F.a,alt:"Red cross",className:"popup__infotool-img"}),o.a.createElement("p",{className:"popup__infotool-text"},c||"Something went wrong, please, try again!")),o.a.createElement("button",{className:"popup__close-button",onClick:a}))))},M=function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(t)}))};var J=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),u=s[0],p=s[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),v=f[0],g=f[1],k=Object(n.useState)(!1),O=Object(l.a)(k,2),C=O[0],A=O[1],x=Object(n.useState)(!1),T=Object(l.a)(x,2),q=T[0],U=T[1],z=Object(n.useState)(!1),R=Object(l.a)(z,2),F=R[0],J=R[1],W=Object(n.useState)([]),Y=Object(l.a)(W,2),G=Y[0],H=Y[1],Q=Object(n.useState)({name:"Jacques-Yves Cousteau",about:"Navigator",avatar:"https://kaskad.tv/images/2020/foto_zhak_iv_kusto__-_interesnie_fakti_20190810_2078596433.jpg"}),$=Object(l.a)(Q,2),K=$[0],X=$[1],Z=Object(n.useState)(),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(),oe=Object(l.a)(ne,2),ce=oe[0],re=oe[1],ie=Object(n.useState)({email:""}),le=Object(l.a)(ie,2),se=le[0],ue=le[1],pe=Object(n.useState)(!1),me=Object(l.a)(pe,2),_e=me[0],de=me[1],fe=Object(h.g)(),he=Object(n.useState)(""),ve=Object(l.a)(he,2),be=ve[0],ge=ve[1],Ee=Object(n.useState)(!1),ke=Object(l.a)(Ee,2),ye=ke[0],je=ke[1];function Oe(){!function(){var e=document.querySelectorAll(".popup__input-error");e&&e.forEach((function(e){return e.classList.remove("popup__input-error_active")}))}(),g(!1),c(!1),p(!1),A(!1),U(!1),J(!1)}function Ce(e,t,a){t.textContent=e?"Saving...":a}function Ne(){J(!0)}function Se(){je(!1)}Object(n.useEffect)((function(){Promise.all([_.getItems("/users/me"),_.getItems("/cards")]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];X(a);var o=n.map((function(e){return{name:e.name,link:e.link,_id:e._id,likes:e.likes,owner:e.owner}}));H(o)})).catch((function(e){console.log("When loading user and cards data: ".concat(e))}))}),[_e]);var we=function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(m,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return M(e)}))).then((function(e){if(e){var t={email:e.email};de(!0),ue(t),fe.push("/")}})).catch((function(e){console.log("getContent: ".concat(e))}))};return Object(n.useEffect)((function(){we()}),[_e,fe]),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__container"},o.a.createElement(E.Provider,{value:K},o.a.createElement(b,{onSignOut:function(){localStorage.removeItem("jwt"),de(!1),fe.push("/sign-in")},userEmail:se}),o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/sign-up"},o.a.createElement(B,{onRegister:function(e,t,a){(function(e,t){return fetch("".concat(m,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return M(e)}))})(e,t).then((function(e){e&&(ge(""),a(),je(!0),Ne(),fe.push("/sign-in"))})).catch((function(e){ge("Error: ".concat(e.message)),Se(),Ne(),console.log("App onRegister: ".concat(e.message))}))}})),o.a.createElement(h.b,{path:"/sign-in"},o.a.createElement(D,{onLogin:function(e,t,a){(function(e,t){return fetch("".concat(m,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return M(e)}))})(e,t).then((function(t){return t?t.token?(n=t.token,localStorage.setItem("jwt",n),ge(""),a(),ue({email:e}),de(!0),fe.push("/"),_e):void 0:(ge("Something went wrong on authorization"),!1);var n})).catch((function(e){return ge("Error: ".concat(e.message)),Se(),Ne(),401===e.status?console.log("User with this email is not found : ".concat(e)):400===e.status?console.log("One of the inputs is not filled in : ".concat(e)):void console.log("App authorize Error: ".concat(e.message))}))}})),o.a.createElement(P,{path:"/",loggedIn:_e,onEditProfile:function(){c(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){g(!0)},handleCardClick:function(e){ae(e),U(!0)},cards:G,onCardLike:function(e){var t=e.likes.some((function(e){return e===K._id}));_.changeLikeCardStatus(e._id,!t).then((function(t){var a=G.map((function(a){return a._id===e._id?t:a}));H(a)})).catch((function(e){console.log("On card like: ".concat(e))}))},onCardDelete:function(e,t){A(!0),ae(e),re(t)},component:y})),_e&&o.a.createElement(j,null),o.a.createElement(V,{isOpen:F,onClose:Oe,isSuccess:ye,errorMessage:be}),o.a.createElement(w,{isOpen:a,onClose:Oe,onUpdateUser:function(e){var t=document.querySelector(".popup__save-button_type_edit-profile");Ce(!0,t,"Save"),_.changeItem({name:e.name.trim(),about:e.about.trim()},"/users/me").then((function(e){X(e)})).then((function(){Oe()})).catch((function(e){console.log("On user data update: ".concat(e))})).finally((function(){Ce(!1,t,"Save")}))}}),o.a.createElement(L,{isOpen:u,onClose:Oe,onAddPlace:function(e){var t=document.querySelector(".popup__save-button_type_add-place");Ce(!0,t,"Create"),_.createItem(e,"/cards").then((function(e){H([e].concat(Object(i.a)(G)))})).then((function(){Oe()})).catch((function(e){console.log("On card add: ".concat(e))})).finally((function(){Ce(!1,t,"Create")}))}}),o.a.createElement(I,{isOpen:v,onClose:Oe,onUpdateAvatar:function(e){var t=document.querySelector(".popup__save-button_type_edit-avatar");Ce(!0,t,"Save"),_.changeItem({avatar:e.avatar},"/users/me/avatar").then((function(e){X(e),document.querySelector(".profile__image").style.backgroundImage="url('".concat(e.avatar,"')")})).then((function(){Oe()})).catch((function(e){console.log("On avatar change: ".concat(e))})).finally((function(){Ce(!1,t,"Save")}))}}),o.a.createElement(N,{title:"Are you sure?",name:"card-delete",card:te,cardDOM:ce,buttonText:"Yes",isOpen:C,onClose:Oe,onCardDeleteSubmit:function(e,t){var a=document.querySelector(".popup__save-button_type_card-delete");Ce(!0,a,"Yes"),_.deleteItem("/cards",e._id).then((function(){t.remove()})).then((function(){Oe()})).catch((function(e){console.log("On card delete: ".concat(e))})).finally((function(){return Ce(!1,a,"Yes")}))}}),o.a.createElement(S,{name:"picture-zoom",isOpen:q,card:te,onClose:Oe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.a,{basename:"/react-mesto-front-heroku"},o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8afebddf.chunk.js.map