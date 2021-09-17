"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[501],{7501:(T,l,i)=>{i.r(l),i.d(l,{AuthModule:()=>M});var f=i(8583),d=i(3423),o=i(3679),t=i(7716),g=i(7990),a=i(3738),u=i(8295),p=i(9983),Z=i(1095);const v=[{path:"login",component:(()=>{class n{constructor(e,r,s){this.formBuilder=e,this.authService=r,this.router=s,this.buildForm()}ngOnInit(){}login(e){if(e.preventDefault(),this.form.valid){const r=this.form.value;this.authService.login(r.email,r.password).then(()=>{this.router.navigate(["/admin"])}).catch(()=>{alert("it data is invalid")})}console.log(this.form.value)}buildForm(){this.form=this.formBuilder.group({email:["",[o.kI.required]],password:["",[o.kI.required]]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(g.e),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:29,vars:2,consts:[[3,"formGroup"],["color","warn",1,"row","center-xs"],[1,"col-xs","center"],[1,"row"],[1,"col-xs"],["placeholder","Email","formControlName","email","matInput","","type","email"],["placeholder","Password","formControlName","password","matInput","","type","password"],[1,"row","middle-xs"],[1,"div--row"],["routerLink",""],[1,"row","center-xs","middle-xs"],["type","checkbox","name","","id",""],[1,"col-xs","center-xs"],["mat-raised-button","","color","primary","type","submit",1,"button--login",3,"disabled","click"],["routerLink","/register"]],template:function(e,r){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-header"),t.TgZ(3,"div",2),t.TgZ(4,"mat-card-title"),t._uU(5,"Login"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"mat-card-content"),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"mat-form-field"),t._UZ(10,"input",5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"div",4),t.TgZ(13,"mat-form-field"),t._UZ(14,"input",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"mat-card-actions",7),t.TgZ(16,"div",8),t.TgZ(17,"a",9),t._uU(18,"Forgot password?"),t.qZA(),t.TgZ(19,"div",10),t._UZ(20,"input",11),t.TgZ(21,"p"),t._uU(22,"Remember me"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",12),t.TgZ(24,"button",13),t.NdJ("click",function(m){return r.login(m)}),t._uU(25,"Login"),t.qZA(),t.qZA(),t.TgZ(26,"div",2),t.TgZ(27,"a",14),t._uU(28,"Sign up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",r.form),t.xp6(24),t.Q6J("disabled",r.form.invalid))},directives:[o._Y,o.JL,o.sg,a.a8,a.dk,a.n5,a.dn,u.KE,o.Fj,p.Nt,o.JJ,o.u,a.hq,d.yS,Z.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}mat-card[_ngcontent-%COMP%]{width:400px}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4221b9}mat-card-header[_ngcontent-%COMP%]{flex-direction:column}mat-form-field[_ngcontent-%COMP%]{width:250px}mat-card-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:5px}mat-card-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]{display:flex;justify-content:row;align-items:center;justify-content:center}mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 6px}mat-card-actions[_ngcontent-%COMP%]   .button--login[_ngcontent-%COMP%]{width:230px}"]}),n})()},{path:"register",component:(()=>{class n{constructor(e,r,s){this.formBuilder=e,this.router=r,this.authService=s,this.buildForm()}ngOnInit(){}register(e){if(e.preventDefault(),this.form.valid){const r=this.form.value;this.authService.createUser(r.email,r.password).then(()=>{this.router.navigate(["/login"])})}console.log(this.form.value)}buildForm(){this.form=this.formBuilder.group({name:["",[o.kI.required]],email:["",[o.kI.required]],password:["",[o.kI.required,o.kI.minLength(6)]]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(d.F0),t.Y36(g.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:28,vars:2,consts:[[3,"formGroup"],["color","warn",1,"row","center-xs"],[1,"col-xs","center"],[1,"row"],[1,"col-xs"],["placeholder","Name","formControlName","name","matInput","","type","text"],["placeholder","Email","formControlName","email","matInput","","type","email"],["placeholder","Password","formControlName","password","matInput","","type","password"],[1,"row","middle-xs"],[1,"div--row"],[1,"row","center-xs","middle-xs"],["type","checkbox","name","","id",""],[1,"col-xs","center-xs"],["mat-raised-button","","color","warn","type","submit",1,"button--login",3,"disabled","click"]],template:function(e,r){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-header"),t.TgZ(3,"div",2),t.TgZ(4,"mat-card-title"),t._uU(5,"Register"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"mat-card-content"),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t.TgZ(9,"mat-form-field"),t._UZ(10,"input",5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"div",4),t.TgZ(13,"mat-form-field"),t._UZ(14,"input",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",3),t.TgZ(16,"div",4),t.TgZ(17,"mat-form-field"),t._UZ(18,"input",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"mat-card-actions",8),t.TgZ(20,"div",9),t.TgZ(21,"div",10),t._UZ(22,"input",11),t.TgZ(23,"p"),t._uU(24,"I have read and agree to the terms and conditions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",12),t.TgZ(26,"button",13),t.NdJ("click",function(m){return r.register(m)}),t._uU(27,"Sign up"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",r.form),t.xp6(26),t.Q6J("disabled",r.form.invalid))},directives:[o._Y,o.JL,o.sg,a.a8,a.dk,a.n5,a.dn,u.KE,o.Fj,p.Nt,o.JJ,o.u,a.hq,Z.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}mat-card[_ngcontent-%COMP%]{width:400px}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4221b9}mat-card-header[_ngcontent-%COMP%]{flex-direction:column}mat-form-field[_ngcontent-%COMP%]{width:250px}mat-card-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:5px}mat-card-actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]{display:flex;justify-content:row;align-items:center;justify-content:center}mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%]   .div--row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 6px}mat-card-actions[_ngcontent-%COMP%]   .button--login[_ngcontent-%COMP%]{width:230px}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(v)],d.Bz]}),n})();var C=i(898),A=i(4466);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h,f.ez,C.q,A.m,o.UX]]}),n})()}}]);