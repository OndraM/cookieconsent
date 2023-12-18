/*!
* CookieConsent 3.0.0-rc.17
* https://github.com/orestbida/cookieconsent/tree/v3
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',s='show--preferences',a='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,D:!1,k:!1,A:!1,N:!1,H:[],V:!1,j:!0,I:[],L:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={se:{},ae:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!y(e),w=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,T=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),V=(e,t)=>e.appendChild(t),j=(e,t)=>e.classList.add(t),I=(e,t)=>j(e,'cm__'+t),L=(e,t)=>j(e,'pm__'+t),F=(e,t)=>e.classList.remove(t),P=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=P(n)}return t},O=()=>{const e={},{O:t,X:o,Y:n}=g.o;for(const s of t)e[s]=J(n[s],S(o[s]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),B=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({pe:e,me:t,ge:o})},G=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.F):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},U=e=>{g.o.R=x(e),g.o.F=(()=>{let e='custom';const{R:t,O:o,B:n}=g.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>D(d,`[data-cc="${e}"]`),u=(e,t)=>{T(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(s+'all'),v=_(s+'necessary'),y=_(s+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),B(e,f,(e=>{T(e),c()})),h&&(B(e,'mouseenter',(e=>{T(e),g.o.N||o(t,n)}),!0),B(e,'focus',(()=>{g.o.N||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),B(e,f,(e=>{T(e),a(!0)}),!0);for(let e of b)B(e,f,(e=>{u(e,'all')}),!0);for(let e of y)B(e,f,(e=>{u(e)}),!0);for(let e of v)B(e,f,(e=>{u(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?g.ne.be:g.ne.ve)(t))};B(e,'transitionend',o)};let K;const Q=e=>{clearTimeout(K),e?j(g.ne.ye,a):K=setTimeout((()=>{F(g.ne.ye,a)}),500)},W=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],X=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${W[e]}"/></svg>`,Y=e=>{const t=g.ne,o=g.o;(e=>{const n=e===t.he,s=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;B(s,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const s=M(),a=n?o.q:o.K;0!==a.length&&(t.shiftKey?s!==a[0]&&e.contains(s)||(T(t),z(a[1])):s!==a[1]&&e.contains(s)||(T(t),z(a[0])))}),!0)})(e)},Z=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ee=e=>{const{o:t,ne:o}=g,n=(e,t)=>{const o=D(e,Z);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.he,t.q),2===e&&t.N&&n(o.we,t.K)},te=(e,t,o)=>{const{de:n,le:s,ie:a,_e:c,ue:r,fe:i}=g.ce,l=g.re;if(t){const n={modalName:t};return e===l.fe?w(i)&&i(n):e===l._e?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),R(e,n)}const d={cookie:g.o.p};e===l.ie?w(a)&&a(P(d)):e===l.le?w(s)&&s(P(d)):(d.changedCategories=g.o.I,d.changedServices=g.o.ee,w(n)&&n(P(d))),R(e,P(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ne=e=>{const{Y:t,ee:o,O:n,X:s,oe:a,p:r,I:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&v(t[e],o)&&w(a)?(n.Se=!0,a()):n.Se&&!v(t[e],o)&&w(c)&&(n.Se=!1,c())}}if(!g.t.manageScriptTags)return;const l=a,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=a[n];if(s.xe)return f(e,n+1);const r=s.Me,l=s.Te,_=s.De,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!s.ke&&u||!_&&s.ke&&!u&&v(i,l)||_&&!s.ke&&p||_&&s.ke&&!p&&v(o[l]||[],_)){s.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const a=A('script');a.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(a,e,r[e]||H(r,e));t&&(a.type=t),o?a.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{f(e,++n)}),r.replaceWith(a),i)return}f(e,++n)};f(l,0)},se='bottom',ae='left',ce='center',re='right',ie='inline',le='wide',de='pm--',fe=['middle','top',se],_e=[ae,ce,re],ue={box:{Ae:[le,ie],Ee:fe,Ne:_e,He:se,Ve:re},cloud:{Ae:[ie],Ee:fe,Ne:_e,He:se,Ve:ce},bar:{Ae:[ie],Ee:fe.slice(1),Ne:[],He:se,Ve:''}},pe={box:{Ae:[],Ee:[],Ne:[],He:'',Ve:''},bar:{Ae:[le],Ee:[],Ne:[ae,re],He:'',Ve:ae}},me=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal;0===e&&ge(g.ne.he,ue,o,'cm--','box','cm'),1===e&&ge(g.ne.we,pe,n,de,'box','pm')},ge=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:s,p=t[u],m=v(p.Ae,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===de?b[0]:b[1],C=v(p.Ee,y)?y:p.He,w=v(p.Ne,h)?h:p.Ve,S=t=>{t&&j(e,n+t)};S(u),S(m),S(C),S(w),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{je:e,Ie:t}=g.ne;e&&(l?F(e,x):j(e,x)),t&&(l?F(t,x):j(t,x))}else{const{Le:e}=g.ne;e&&(l?F(e,x):j(e,x))}},be=(e,t)=>{const o=g.o,n=g.ne,{hide:s,hidePreferences:a,acceptCategory:c}=e,u=e=>{c(e),a(),s()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,y=m.acceptAllBtn,w=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=y||w||x;if(n.Fe)n.Pe=A(r),L(n.Pe,'body');else{n.Fe=A(r),j(n.Fe,'pm-wrapper');const e=A('div');j(e,'pm-overlay'),V(n.Fe,e),B(e,f,a),n.we=A(r),j(n.we,'pm'),E(n.we,'role','dialog'),E(n.we,l,!0),E(n.we,'aria-modal',!0),E(n.we,'aria-labelledby','pm__title'),B(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Oe=A(r),L(n.Oe,'header'),n.Re=A('h2'),L(n.Re,'title'),n.Re.id='pm__title',n.Be=A(i),L(n.Be,'close-btn'),E(n.Be,'aria-label',m.closeIconLabel||''),B(n.Be,f,a),n.Ge=A('span'),n.Ge.innerHTML=X(),V(n.Be,n.Ge),n.Je=A(r),L(n.Je,'body'),n.Ue=A(r),L(n.Ue,'footer');var D=A(r);j(D,'btns');var k=A(r),N=A(r);L(k,d),L(N,d),V(n.Ue,k),V(n.Ue,N),V(n.Oe,n.Re),V(n.Oe,n.Be),n.ve=A(r),E(n.ve,'tabIndex',-1),V(n.we,n.ve),V(n.we,n.Oe),V(n.we,n.Je),T&&V(n.we,n.Ue),V(n.Fe,n.we)}let H;b&&(n.Re.innerHTML=b,v&&E(n.Be,'aria-label',v)),M.forEach(((e,t)=>{const s=e.title,a=e.description,c=e.linkedCategory,d=c&&o.P[c],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,g=u&&u.length>0,b=!!d,v=b&&o.X[c],y=C(v)&&S(v)||[],w=b&&(!!a||!!g||S(v).length>0);var x=A(r);if(L(x,'section'),w||a){var M=A(r);L(M,'section-desc-wrapper')}let T=y.length;if(w&&T>0){const e=A(r);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=A(r),a=A(r),i=A(r),l=A(r);L(s,'service'),L(l,'service-title'),L(a,'service-header'),L(i,'service-icon');const f=ve(n,t,d,!0,c);l.innerHTML=n,V(a,i),V(a,l),V(s,a),V(s,f),V(e,s)}V(M,e)}if(s){var D=A(r),k=A(b?i:r);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=s,V(D,k),b){const e=A('span');e.innerHTML=X(2,3.5),L(e,'section-arrow'),V(D,e),x.className+='--toggle';const t=ve(s,c,d);let o=m.serviceCounterLabel;if(T>0&&h(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),V(k,e)}if(w){L(x,'section--expandable');var N=c+'-desc';E(k,'aria-expanded',!1),E(k,'aria-controls',N)}V(D,t)}else E(k,'role','heading'),E(k,'aria-level','3');V(x,D)}if(a){var I=A('p');L(I,'section-desc'),I.innerHTML=a,V(M,I)}if(w&&(E(M,l,'true'),M.id=N,((e,t,o)=>{B(k,f,(()=>{t.classList.contains('is-expanded')?(F(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,l,'true')):(j(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,l,'false'))}))})(M,x,k),g)){const e=A('table'),o=A('thead'),s=A('tbody');if(p){const t=A('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(s,'table-body');const a=_.headers,c=S(a),i=n.$e.createDocumentFragment(),l=A('tr');for(const e of c){const o=a[e],n=A('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,V(i,n)}V(l,i),V(o,l);const d=n.$e.createDocumentFragment();for(const e of u){const o=A('tr');L(o,'table-tr');for(const n of c){const s=a[n],c=e[n],i=A('td'),l=A(r);L(i,'table-td'),E(i,'data-column',s),E(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),V(i,l),V(o,i)}V(d,o)}V(s,d),V(e,o),V(e,s),V(M,e)}(w||a)&&V(x,M);const P=n.Pe||n.Je;b?(H||(H=A(r),L(H,'section-toggles')),H.appendChild(x)):H=null,V(P,H||x)})),y&&(n.ze||(n.ze=A(i),L(n.ze,'btn'),E(n.ze,_,'all'),V(k,n.ze),B(n.ze,f,(()=>u('all')))),n.ze.innerHTML=y),w&&(n.Le||(n.Le=A(i),L(n.Le,'btn'),E(n.Le,_,'necessary'),V(k,n.Le),B(n.Le,f,(()=>u([])))),n.Le.innerHTML=w),x&&(n.qe||(n.qe=A(i),L(n.qe,'btn'),L(n.qe,'btn--secondary'),E(n.qe,_,'save'),V(N,n.qe),B(n.qe,f,(()=>u()))),n.qe.innerHTML=x),n.Pe&&(n.we.replaceChild(n.Pe,n.Je),n.Je=n.Pe),me(1),o.N||(o.N=!0,te(g.re.ue,p,n.we),t(e),V(n.Ce,n.Fe),Y(n.we),setTimeout((()=>j(n.Fe,'cc--anim')),100)),ee(2)};function ve(e,t,o,n,s){const a=g.o,r=g.ne,i=A('label'),d=A('input'),_=A('span'),u=A('span'),p=A('span'),m=A('span'),b=A('span');if(m.innerHTML=X(1,3),b.innerHTML=X(0,3),d.type='checkbox',j(i,'section__toggle-wrapper'),j(d,'section__toggle'),j(m,'toggle__icon-on'),j(b,'toggle__icon-off'),j(_,'toggle__icon'),j(u,'toggle__icon-circle'),j(p,'toggle__label'),E(_,l,'true'),n?(j(i,'toggle-service'),E(d,c,s),r.ae[s][t]=d):r.se[t]=d,n?(e=>{B(d,'change',(()=>{const t=r.ae[e],o=r.se[e];a.Z[e]=[];for(let o in t){const n=t[o];n.checked&&a.Z[e].push(n.value)}o.checked=a.Z[e].length>0}))})(s):(e=>{B(d,f,(()=>{const t=r.ae[e],o=d.checked;a.Z[e]=[];for(let n in t)t[n].checked=o,o&&a.Z[e].push(n)}))})(t),d.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),V(u,b),V(u,m),V(_,u),a.T)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=a.Y[s];d.checked=o.readOnly||v(e,t)}else v(a.R,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),V(i,d),V(i,_),V(i,p),i}const ye=()=>{const e=A('span');return g.ne.Ke||(g.ne.Ke=e),e},he=(e,t)=>{const o=g.o,n=g.ne,{hide:s,showPreferences:a,acceptCategory:c}=e,p=o.u&&o.u.consentModal;if(!p)return;const m=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.closeIconLabel,h=p.footer,C=p.label,w=p.title,S=e=>{s(),c(e)};if(!n.Qe){n.Qe=A(r),n.he=A(r),n.We=A(r),n.Xe=A(r),n.Ye=A(r),j(n.Qe,'cm-wrapper'),j(n.he,'cm'),I(n.We,'body'),I(n.Xe,'texts'),I(n.Ye,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,l,'false'),E(n.he,'aria-describedby','cm__desc'),C?E(n.he,'aria-label',C):w&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;w&&y&&a&&(n.Ie||(n.Ie=A(i),n.Ie.innerHTML=X(),I(n.Ie,'btn'),I(n.Ie,'btn--close'),B(n.Ie,f,(()=>{S([])})),V(n.We,n.Ie)),E(n.Ie,'aria-label',y)),V(n.We,n.Xe),(m||b||v)&&V(n.We,n.Ye),n.be=A(r),E(n.be,'tabIndex',-1),V(n.he,n.be),V(n.he,n.We),V(n.Qe,n.he)}w&&(n.Ze||(n.Ze=A('h2'),n.Ze.className=n.Ze.id='cm__title',V(n.Xe,n.Ze)),n.Ze.innerHTML=w);let x=p.description;if(x&&(o.V&&(x=x.replace('{{revisionMessage}}',o.j?'':p.revisionMessage||'')),n.et||(n.et=A('p'),n.et.className=n.et.id='cm__desc',V(n.Xe,n.et)),n.et.innerHTML=x),m&&(n.tt||(n.tt=A(i),V(n.tt,ye()),I(n.tt,'btn'),E(n.tt,_,'all'),B(n.tt,f,(()=>{S('all')}))),n.tt.firstElementChild.innerHTML=m),b&&(n.je||(n.je=A(i),V(n.je,ye()),I(n.je,'btn'),E(n.je,_,'necessary'),B(n.je,f,(()=>{S([])}))),n.je.firstElementChild.innerHTML=b),v&&(n.ot||(n.ot=A(i),V(n.ot,ye()),I(n.ot,'btn'),I(n.ot,'btn--secondary'),E(n.ot,_,'show'),B(n.ot,'mouseenter',(()=>{o.N||be(e,t)})),B(n.ot,f,a)),n.ot.firstElementChild.innerHTML=v),n.nt||(n.nt=A(r),I(n.nt,d),m&&V(n.nt,n.tt),b&&V(n.nt,n.je),(m||b)&&V(n.We,n.nt),V(n.Ye,n.nt)),n.ot&&!n.st&&(n.st=A(r),n.je&&n.tt?(I(n.st,d),V(n.st,n.ot),V(n.Ye,n.st)):(V(n.nt,n.ot),I(n.nt,d+'--uneven'))),h){if(!n.ct){let e=A(r),t=A(r);n.ct=A(r),I(e,'footer'),I(t,'links'),I(n.ct,'link-group'),V(t,n.ct),V(e,t),V(n.he,e)}n.ct.innerHTML=h}me(0),o.D||(o.D=!0,te(g.re.ue,u,n.he),t(e),V(n.Ce,n.Qe),Y(n.he),setTimeout((()=>j(n.Qe,'cc--anim')),100)),ee(1),$(n.We,e,be,t)},Ce=e=>{if(!h(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},we=()=>g.o.l||g.o.i.language.default,Se=e=>{e&&(g.o.l=e)},xe=async e=>{const t=g.o;let o=Ce(e)?e:we(),n=t._[o];if(!n)return!1;if(h(n)){const e=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n);if(!e)return!1;n=e}return t.u=n,Se(o),!0},Me=()=>{let e=g.o.i.language.rtl,t=g.ne.Ce;e&&t&&(y(e)||(e=[e]),v(e,g.o.l)?j(t,'cc--rtl'):F(t,'cc--rtl'))},Te=()=>{const e=g.ne;if(e.Ce)return;e.Ce=A(r),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),Me();let t=g.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.Ce)},De=e=>oe((()=>localStorage.removeItem(e))),ke=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},Ae=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),g.o.p.expirationTime=l.getTime();const d=JSON.stringify(g.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+a),'https:'===o&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,g.o.p},Ee=(e,t,o)=>{if(0===e.length)return;const n=o||g.t.cookie.domain,s=t||g.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},Ne=e=>{const t=e||g.t.cookie.name,o=g.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,oe((()=>localStorage.getItem(n)))||''):He(t,!0),o);var n},He=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Ve=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?oe((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},je=(e,n=[])=>{((e,t)=>{const{O:o,R:n,B:s,N:a,Z:c,X:r}=g.o;let i=[];if(e){y(e)?i.push(...e):h(e)&&(i='all'===e?o:[e]);for(const e of o)c[e]=v(i,e)?S(r[e]):[]}else i=n,a&&(i=(()=>{const e=g.ne.se;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());i=i.filter((e=>!v(o,e)||!v(t,e))),i.push(...s),U(i)})(e,n),(e=>{const t=g.o,{Z:o,B:n,Y:s,X:a,O:c}=t,r=c;t.te=P(s);for(const e of r){const t=a[e],c=S(t),r=o[e]&&o[e].length>0,i=v(n,e);if(0!==c.length){if(s[e]=[],i)s[e].push(...c);else if(r){const t=o[e];s[e].push(...t)}else s[e]=[];s[e]=x(s[e])}}})(),(()=>{const e=g.o;e.I=g.t.mode===o&&e.T?J(e.G,e.R):J(e.R,e.p.categories);let n=e.I.length>0,s=!1;for(const t of e.O)e.ee[t]=J(e.Y[t],e.te[t]),e.ee[t].length>0&&(s=!0);const a=g.ne.se;for(const t in a)a[t].checked=v(e.R,t);for(const t of e.O){const o=g.ne.ae[t],n=e.Y[t];for(const e in o)o[e].checked=v(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:P(e.R),revision:g.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:P(e.Y)};let c=!1;const r=n||s;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Ae(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,o=Ve(),n=(e=>{const t=g.o;return(e?t.O:t.I).filter((e=>{const o=t.P[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const s=t.X[e][n].cookies;if(!v(t.Y[e],n)&&s)for(const e of s){const t=ke(o,e.name);Ee(t,e.path,e.domain)}}for(const s of n){const n=t.P[s].autoClear,a=n&&n.cookies||[],c=v(t.I,s),r=!v(t.R,s),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.L=!0);for(const e of a){const t=ke(o,e.name);Ee(t,e.path,e.domain)}}}})(c),ne()),c&&(te(g.re.ie),te(g.re.le),g.t.mode===t)||(r&&te(g.re.de),e.L&&(e.L=!1,location.reload()))})()},Ie=e=>{const t=g.o.T?[]:g.o.R;return v(t,e)},Le=(e,t)=>{const o=g.o.T?[]:g.o.Y[t];return v(o,e)},Fe=(e,t,o)=>{let n=[];const s=e=>{if(h(e)){let t=He(e);''!==t&&n.push(t)}else n.push(...Ve(e))};if(y(e))for(let t of e)s(t);else s(e);Ee(n,t,o)},Pe=e=>{const{ne:t,o:o}=g;if(!o.k){if(!o.D){if(!e)return;he(Ge,Te)}o.k=!0,o.U=M(),o.v&&Q(!0),q(t.he,1),j(t.ye,n),E(t.he,l,'false'),setTimeout((()=>{z(g.ne.be)}),100),te(g.re.fe,u)}},Oe=()=>{const{ne:e,o:t,re:o}=g;t.k&&(t.k=!1,t.v&&Q(),z(e.Ke,!0),F(e.ye,n),E(e.he,l,'true'),z(t.U),t.U=null,te(o._e,u))},Re=()=>{const e=g.o;e.A||(e.N||be(Ge,Te),e.A=!0,e.k?e.$=M():e.U=M(),q(g.ne.we,2),j(g.ne.ye,s),E(g.ne.we,l,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},Be=()=>{const e=g.o;e.A&&(e.A=!1,(()=>{const e=Ue(),t=g.o.P,o=g.ne.se,n=g.ne.ae,s=e=>v(g.o.G,e);for(const a in o){const c=!!t[a].readOnly;o[a].checked=c||(e?Ie(a):s(a));for(const t in n[a])n[a][t].checked=c||(e?Le(t,a):s(a))}})(),z(g.ne.Ge,!0),F(g.ne.ye,s),E(g.ne.we,l,'true'),e.k?(z(e.$),e.$=null):(z(e.U),e.U=null),te(g.re._e,p))};var Ge={show:Pe,hide:Oe,showPreferences:Re,hidePreferences:Be,acceptCategory:je};const Je=(e,t)=>{const o=Ne(t);return e?o[e]:o},Ue=()=>!g.o.T;e.acceptCategory=je,e.acceptService=(e,t)=>{const{O:o,X:n}=g.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=g.o,{X:n,Z:s,N:a}=o,c=g.ne.ae[t]||{},r=g.ne.se[t]||{},i=S(n[t]);if(s[t]=[],h(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,k(c[e])}else if(v(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,k(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&s[t].push(o),a&&(c[o].checked=n,k(c[o]))}const l=0===s[t].length;o.R=l?o.R.filter((e=>e!==t)):x([...o.R,t]),a&&(r.checked=!l,k(r))})(e,t),je()},e.acceptedCategory=Ie,e.acceptedService=Le,e.eraseCookies=Fe,e.getConfig=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Je,e.getUserPreferences=()=>{const{F:e,Y:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,R:t,O:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return P({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},e.hide=Oe,e.hidePreferences=Be,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),C(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,V(document.head,o)}))},e.reset=e=>{const{Ce:t,ye:o}=g.ne,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?De(c):Fe(c,r,i));for(const{pe:e,me:t,ge:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(a,s,n);const d=new m;for(const e in g)g[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,re:s}=g,a=window;if(!a._ccRun){if(a._ccRun=!0,(e=>{const{ne:t,t:n,o:s}=g,a=n,r=s,{cookie:i}=a,l=g.ce,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.$e=p,t.ye=p.documentElement,i.domain=location.hostname,r.i=e,r.P=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:w,manageScriptTags:x,hideFromBots:M}=e;m===o&&(a.mode=m),'boolean'==typeof h&&(a.autoClearCookies=h),'boolean'==typeof x&&(a.manageScriptTags=x),'number'==typeof w&&w>=0&&(a.revision=w,r.V=!0),'boolean'==typeof b&&(a.autoShow=b),'boolean'==typeof y&&(a.lazyHtmlGeneration=y),!1===M&&(a.hideFromBots=!1),!0===a.hideFromBots&&u&&(r.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(a.cookie={...i,...d}),a.autoClearCookies,r.V,a.manageScriptTags,(e=>{const{P:t,X:o,Y:n,Z:s,B:a}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&S(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),g.ne.ae[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=D(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),v(e.O,t)&&(e.oe.push({Me:o,xe:!1,ke:s,Te:t,De:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Se((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Ce(t[e]);if(o)return o}return we()})())})(e),t.J)return;(()=>{const e=g.o,t=g.t,n=Ne(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(s);e.p=n,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.V&&_&&d!==t.revision&&(e.j=!1),e.T=!(_&&e.j&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&De(t.cookie.name)),e.T,(()=>{const e=g.o;for(const t of e.O){const n=e.P[t];if(n.readOnly||n.enabled&&e.i.mode===o){e.G.push(t);const o=e.X[t]||{};for(let n in o)e.Y[t].push(n)}}})(),e.T?t.mode===o&&(e.R=[...e.G]):(e.Y={...e.Y,...a},U([...e.B,...s])),e.Z={...e.Y}})();const i=Ue();if(!await xe())return!1;if($(null,r=Ge,be,Te),g.o.T&&he(r,Te),g.t.lazyHtmlGeneration||be(r,Te),n.autoShow&&!i&&Pe(!0),i)return ne(),te(s.le);n.mode===o&&ne(t.G)}var r},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const a=g.o;if('update'===n){a.h=t=Je('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.h=t,a.p.data=t,Ae(!0)),s},e.setLanguage=async(e,t)=>{if(!Ce(e))return!1;const o=g.o;return!(e===we()&&!0!==t||!await xe(e)||(Se(e),o.D&&he(Ge,Te),o.N&&be(Ge,Te),Me(),0))},e.show=Pe,e.showPreferences=Re,e.validConsent=Ue,e.validCookie=e=>''!==He(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
