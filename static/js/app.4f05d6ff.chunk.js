(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return Q}));var n=a(0),r=a.n(n),l=a(125),o=a(194),s=a(2),i=a(7),c=a(3);function m(){return n.createElement(s.a,null,n.createElement(i.a,{style:p.header},"Welcome to the Employee Directory"),n.createElement(i.a,{style:p.bodyText},"This app was created using react native and some pre-generated data, cycle through the pages and click on the headers to view/sort the data."))}var p=c.a.create({header:{fontWeight:"bold",fontSize:"24pt",textAlign:"center"},bodyText:{fontSize:"18pt",textAlign:"center"}}),u=a(4),d=a.n(u),f=a(26),h=a(28),y=a(30);function g(e){var t=450,a=450;return r.a.createElement(s.a,{style:b.cardContainer},y.a.getSize("https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg",(function(e,n){t=n,a=e}),(function(e){console.log(e)})),r.a.createElement(s.a,{style:b.cardDataContainer},r.a.createElement(y.a,{style:{height:t,width:a,maxHeight:100,maxWidth:100},source:{uri:"https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"}})),r.a.createElement(s.a,{style:b.cardDataContainer},r.a.createElement(i.a,null,e.firstName+" "+e.lastName)),r.a.createElement(s.a,{style:b.cardDataContainer},r.a.createElement(i.a,null,"Department: ",e.department),r.a.createElement(i.a,null,"Role: ",e.role),r.a.createElement(i.a,null,"Manager: ",e.manager)))}var b=c.a.create({cardContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:"3rem",backgroundColor:"#eeeeee"},cardDataContainer:{flex:.3333333,flexDirection:"column",justifyContent:"center"}}),E='"id";"name";"head_id";"budget";"expenses"\n    1;"Wild Cats";19;450000.0;380000.0\n    2;"Canines";41;455000.0;450000.0\n    3;"Avians";9;250000.0;310000.0\n    4;"Reptiles";31;0.0;300000.0\n    5;"Equines";42;0.0;550000.0\n    6;"Aquatic";13;0.0;390000.0\n    7;"Corporate";1;0.0;474000.0\n    8;"Gift Shop";15;0.0;192000.0\n    ',v='"id";"first_name";"last_name";"department_id";"role_id";"manager_id"\n    1;"Alec";"Greene";2;8;1\n    2;"Desare";"Farris";3;9;1\n    3;"Kanye";"Wet";5;9;42\n    4;"Fin";"Kardashian";6;7;1\n    5;"Jimmy";"Kibble";7;5;1\n    6;"Bear";"Grylls";5;4;42\n    7;"Dick";"Wolf";2;7;1\n    8;"Scrooge";"McDuck";7;1;1\n    9;"Jack";"Sparrow";3;4;1\n    10;"Robin";"Carlson";6;7;1\n    11;"Dick";"Johnson";5;8;42\n    12;"Sam";"Wilson";3;9;1\n    13;"Wade";"Wilson";6;4;1\n    14;"John";"Jameson";7;5;1\n    15;"Doc";"Brown";8;3;15\n    16;"Laura";"Terra";2;9;1\n    17;"Marty";"McFly";8;11;15\n    18;"John";"Dolittle";4;8;31\n    19;"Aslan";"Lewis";1;4;19\n    20;"Jim";"Halpert";7;12;1\n    21;"Dwight";"Schrute";8;11;15\n    22;"Stanley";"Hudson";8;11;15\n    23;"Angela";"Martin";1;9;19\n    24;"Kevin";"Malone";7;6;1\n    25;"Oscar";"Martinez";7;6;1\n    26;"Shaggy";"Rogers";2;9;1\n    27;"Velma";"Dinkley";4;8;31\n    28;"Fred";"Jones";1;9;19\n    29;"Daphne";"Blake";6;8;1\n    30;"Scoobert";"Doo";2;9;1\n    31;"Steve";"Irwin";4;4;31\n    32;"Bindi";"Irwin";4;9;31\n    33;"Carol";"Baskin";1;8;19\n    34;"Joe";"Exotic";1;7;19\n    35;"Robert";"Brown";3;7;1\n    36;"Jebediah";"Lyson";5;7;42\n    37;"Chanice";"Tyson";6;8;1\n    38;"Omar";"Al-Saud";5;9;42\n    39;"North";"West";7;11;1\n    40;"Terry";"Haymond";5;7;42\n    41;"Cruella";"Devil";2;4;1\n    42;"Chiron";"Kaustus";5;4;42\n    ',x='"id";"title";"salary"\n    1;"Director";110000.0\n    2;"Finance Manager";70000.0\n    3;"Gift Shop Manager";60000.0\n    4;"Curator";90000.0\n    5;"PR Representative";60000.0\n    6;"Accountant";70000.0\n    7;"Veternarian";80000.0\n    8;"Zoologist";70000.0\n    9;"Caretaker";70000.0\n    10;"Gift Shop Clerk";45000.0\n    11;"Ticket Attendant";44000.0\n    12;"Volunteer Coordinator";60000.0\n    ';function C(e){var t,a=[];e.match(/employee_table/g)&&(t=v),e.match(/department_table/g)&&(t=E),e.match(/role_table/g)&&(t=x);for(var n=t.match(/[\w;\_\-\. "]+(?=[\r\n])/gm),r=1;r<n.length;r++)a.push(n[r].match(/[\w\_\-\. "]+(?=;|$)/gm));return a}function D(e){return e.replace(/"/g,"")}var k="../data/department_table.csv",w="../data/employee_table.csv",S="../data/role_table.csv",j={employees:void 0,roles:void 0,departments:void 0};var _=c.a.create({pressableContainer:{flexDirection:"row",justifyContent:"space-evenly"},pressableButton:{flex:.25,justifyContent:"center",borderWidth:"2px",borderColor:"#444444"},pressableText:{textAlign:"center"}}),B=function(e){var t=Object(n.useState)({name:0,department:0,manager:0,roles:0}),a=d()(t,2),l=a[0],o=a[1];j.employees||(j.employees=C(w)),j.departments||(j.departments=C(k)),j.roles||(j.roles=C(S));var c=function(e){for(var t=0,a=Object.keys(l);t<a.length;t++){var n=a[t];if(0!=l[n]){for(var r=[],o="name"===n?1:"department"===n?3:"roles"===n?4:"manager"===n?5:void 0,s=0;s<e.length;s++)if(0!==r.length)for(var i=0;i<r.length;i++){if(r[i][o]<e[s][o]&&1===l[n]){r.splice(i,0,e[s]);break}if(r[i][o]>e[s][o]&&-1===l[n]){r.splice(i,0,e[s]);break}if(i===r.length-1){r.push(e[s]);break}}else r.push(e[s]);return r}}return e}(j.employees);return r.a.createElement(s.a,{style:{flex:1}},r.a.createElement(s.a,{style:_.pressableContainer},r.a.createElement(f.a,{style:[_.pressableButton,{flex:1}],onPress:function(){o({name:(l.name+2)%3-1,department:0,manager:0,roles:0})}},r.a.createElement(i.a,{style:_.pressableText},"Name")),r.a.createElement(f.a,{style:_.pressableButton,onPress:function(){o({name:0,department:(l.department+2)%3-1,manager:0,roles:0})}},r.a.createElement(i.a,{style:_.pressableText},"Department")),r.a.createElement(f.a,{style:_.pressableButton,onPress:function(){o({name:0,department:0,manager:0,roles:(l.roles+2)%3-1})}},r.a.createElement(i.a,{style:_.pressableText},"Role")),r.a.createElement(f.a,{style:_.pressableButton,onPress:function(){o({name:0,department:0,manager:(l.manager+2)%3-1,roles:0})}},r.a.createElement(i.a,{style:_.pressableText},"Manager"))),r.a.createElement(h.a,null,c.map((function(e){return r.a.createElement(g,{firstName:D(e[1]),lastName:D(e[2]),department:D(j.departments.filter((function(t){return t[0].trim()===e[3].toString()}))[0][1]),role:D(j.roles.filter((function(t){return t[0].trim()===e[4].toString()}))[0][1]),manager:D(j.employees.filter((function(t){return t[0].trim()===e[5].toString()}))[0][1]),key:e[0]})}))))};function T(){return n.createElement(B,null)}function N(e){var t=450,a=450;return r.a.createElement(s.a,{style:W.cardContainer},y.a.getSize("https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg",(function(e,n){t=n,a=e}),(function(e){console.log(e)})),r.a.createElement(s.a,{style:W.cardDataContainer},r.a.createElement(y.a,{style:{height:t,width:a,maxHeight:100,maxWidth:100},source:{uri:"https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"}})),r.a.createElement(s.a,{style:W.cardDataContainer},r.a.createElement(i.a,null,e.name)),r.a.createElement(s.a,{style:W.cardDataContainer},r.a.createElement(i.a,null,"Department Head: ",e.headName)),r.a.createElement(s.a,{style:W.cardDataContainer},r.a.createElement(i.a,null,"Budget: ",e.budget),r.a.createElement(i.a,null,"Expenses: ",e.expenses)))}var W=c.a.create({cardContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:"3rem",backgroundColor:"#eeeeee"},cardDataContainer:{flex:.3333333,flexDirection:"column",justifyContent:"center"}}),A="../data/department_table.csv",J="../data/employee_table.csv",R="../data/role_table.csv",P={employees:void 0,roles:void 0,departments:void 0};var M=c.a.create({pressableContainer:{flexDirection:"row",justifyContent:"space-evenly"},pressableButton:{flex:.25,justifyContent:"center",borderWidth:"2px",borderColor:"#444444"},pressableText:{textAlign:"center"}}),H=function(e){var t=Object(n.useState)({name:0,headName:0,budget:0,expenses:0}),a=d()(t,2),l=a[0],o=a[1];P.employees||(P.employees=C(J)),P.departments||(P.departments=C(A)),P.roles||(P.roles=C(R));var c=function(e){for(var t=0,a=Object.keys(l);t<a.length;t++){var n=a[t];if(0!=l[n]){for(var r=[],o="name"===n?1:"headName"===n?2:"budget"===n?3:"expenses"===n?4:void 0,s=0;s<e.length;s++)if(0!==r.length)for(var i=0;i<r.length;i++){if(r[i][o]<e[s][o]&&1===l[n]){r.splice(i,0,e[s]);break}if(r[i][o]>e[s][o]&&-1===l[n]){r.splice(i,0,e[s]);break}if(i===r.length-1){r.push(e[s]);break}}else r.push(e[s]);return r}}return e}(P.departments);return r.a.createElement(s.a,{style:{flex:1}},r.a.createElement(s.a,{style:M.pressableContainer},r.a.createElement(f.a,{style:[M.pressableButton,{flex:1}],onPress:function(){o({name:(l.name+2)%3-1,headName:0,budget:0,expenses:0})}},r.a.createElement(i.a,{style:M.pressableText},"Name")),r.a.createElement(f.a,{style:M.pressableButton,onPress:function(){o({name:0,headName:(l.headName+2)%3-1,budget:0,expenses:0})}},r.a.createElement(i.a,{style:M.pressableText},"Department Head")),r.a.createElement(f.a,{style:M.pressableButton,onPress:function(){o({name:0,headName:0,budget:0,expenses:(l.expenses+2)%3-1})}},r.a.createElement(i.a,{style:M.pressableText},"Budget")),r.a.createElement(f.a,{style:M.pressableButton,onPress:function(){o({name:0,headName:0,budget:(l.budget+2)%3-1,expenses:0})}},r.a.createElement(i.a,{style:M.pressableText},"Expenses"))),r.a.createElement(h.a,null,c.map((function(e){return r.a.createElement(N,{name:D(e[1]),headName:D(P.employees.filter((function(t){return t[0].trim()===e[2].toString()}))[0].reduce((function(e,t,a){return 1===a?e+t+" ":2===a?e+t:e}),"")),budget:D(e[3]),expenses:D(e[4]),key:e[0]})}))))};function O(){return n.createElement(H,null)}function z(e){var t=450,a=450;return r.a.createElement(s.a,{style:F.cardContainer},y.a.getSize("https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg",(function(e,n){t=n,a=e}),(function(e){console.log(e)})),r.a.createElement(s.a,{style:F.cardDataContainer},r.a.createElement(y.a,{style:{height:t,width:a,maxHeight:100,maxWidth:100},source:{uri:"https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"}})),r.a.createElement(s.a,{style:F.cardDataContainer},r.a.createElement(i.a,null,e.title)),r.a.createElement(s.a,{style:F.cardDataContainer},r.a.createElement(i.a,null,e.salary)))}var F=c.a.create({cardContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:"3rem",backgroundColor:"#eeeeee"},cardDataContainer:{flex:.3333333,flexDirection:"column",justifyContent:"center"}}),G="../data/department_table.csv",I="../data/employee_table.csv",K="../data/role_table.csv",L={employees:void 0,roles:void 0,departments:void 0};var V=c.a.create({pressableContainer:{flexDirection:"row",justifyContent:"space-evenly"},pressableButton:{flex:.5,justifyContent:"center",borderWidth:"2px",borderColor:"#444444"},pressableText:{textAlign:"center"}}),q=function(e){var t=Object(n.useState)({title:0,salary:0}),a=d()(t,2),l=a[0],o=a[1];L.employees||(L.employees=C(I)),L.departments||(L.departments=C(G)),L.roles||(L.roles=C(K));var c=function(e){for(var t=0,a=Object.keys(l);t<a.length;t++){var n=a[t];if(0!=l[n]){for(var r=[],o="title"===n?1:"salary"===n?2:void 0,s=0;s<e.length;s++)if(0!==r.length)for(var i=0;i<r.length;i++){if(r[i][o]<e[s][o]&&1===l[n]){r.splice(i,0,e[s]);break}if(r[i][o]>e[s][o]&&-1===l[n]){r.splice(i,0,e[s]);break}if(i===r.length-1){r.push(e[s]);break}}else r.push(e[s]);return r}}return e}(L.roles);return r.a.createElement(s.a,{style:{flex:1}},r.a.createElement(s.a,{style:V.pressableContainer},r.a.createElement(f.a,{style:[V.pressableButton,{flex:.5}],onPress:function(){o({title:(l.title+2)%3-1,salary:0})}},r.a.createElement(i.a,{style:V.pressableText},"Title")),r.a.createElement(f.a,{style:V.pressableButton,onPress:function(){o({title:0,salary:(l.salary+2)%3-1})}},r.a.createElement(i.a,{style:V.pressableText},"Salary"))),r.a.createElement(h.a,null,c.map((function(e){return r.a.createElement(z,{title:D(e[1]),salary:D(e[2]),key:e[0]})}))))};function Z(){return n.createElement(q,null)}var $=Object(o.a)();function Q(){return n.createElement(l.a,null,n.createElement($.Navigator,null,n.createElement($.Screen,{name:"Home",component:m}),n.createElement($.Screen,{name:"Employees",component:T}),n.createElement($.Screen,{name:"Departments",component:O}),n.createElement($.Screen,{name:"Roles",component:Z})))}},153:function(e,t,a){a(154),e.exports=a(191)},154:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/Assignment-17-Employee-Directory/expo-service-worker.js",{scope:"/Assignment-17-Employee-Directory/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[153,1,2]]]);
//# sourceMappingURL=app.4f05d6ff.chunk.js.map