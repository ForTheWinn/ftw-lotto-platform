(this["webpackJsonpftw-lotto-platform"]=this["webpackJsonpftw-lotto-platform"]||[]).push([[4,11],{106:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),n=a(34),l=a(160),c=a(27),d=c.c().shape({password:c.d().required("Required")}),o=Object(n.b)({mapPropsToValues:function(e){return{encryptedKey:e.savedWallets&&e.savedWallets.length>0?e.savedWallets[0].encryptedKey:"",password:""}},validationSchema:d,handleSubmit:function(e,t){var a=t.props,s=t.setSubmitting,n=t.setStatus;r.a.create.account(e.encryptedKey).decrypt(e.password).then((function(e){s(!1),a.onConnected({provider:"LOCAL",address:e.address,privateKey:e.privateKey,encryptedKey:e.encrypted})})).catch((function(e){s(!1),n({error:e.message})}))}})(l.default);t.default=o},160:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(34),l=a(55),c=a(54);t.default=function(e){var t=e.savedWallets,a=e.isSubmitting,s=e.values,d=e.setFieldValue,o=e.submitForm,i=e.status,u=e.setStatus;return r.a.createElement(n.a,null,r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"label"},"Saved wallets"),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{onBlur:function(e){return d("encryptedKey",e.target.value)}},t.map((function(e){return!(!e||!e.address)&&r.a.createElement("option",{key:e.address,value:e.encryptedKey},e.address)})))))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"label"},"Password"),r.a.createElement(l.default,{onKeyDown:o,value:s.password,onChange:function(e){return d("password",e)}})),i&&i.error&&r.a.createElement(c.default,{message:i.error,onClose:function(){return u(void 0)}}),r.a.createElement("button",{disabled:!s.password,type:"submit",className:"button is-primary ".concat(a?"is-loading":"")},"Open"))}}}]);
//# sourceMappingURL=4.22e4c5ab.chunk.js.map