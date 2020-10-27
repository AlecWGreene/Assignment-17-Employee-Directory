
const fileData = {
    departments: `"id";"name";"head_id";"budget";"expenses"
    1;"Wild Cats";19;450000.0;380000.0
    2;"Canines";41;455000.0;450000.0
    3;"Avians";9;250000.0;310000.0
    4;"Reptiles";31;0.0;300000.0
    5;"Equines";42;0.0;550000.0
    6;"Aquatic";13;0.0;390000.0
    7;"Corporate";1;0.0;474000.0
    8;"Gift Shop";15;0.0;192000.0
    `,
    employees: `"id";"first_name";"last_name";"department_id";"role_id";"manager_id"
    1;"Alec";"Greene";2;8;1
    2;"Desare";"Farris";3;9;1
    3;"Kanye";"Wet";5;9;42
    4;"Fin";"Kardashian";6;7;1
    5;"Jimmy";"Kibble";7;5;1
    6;"Bear";"Grylls";5;4;42
    7;"Dick";"Wolf";2;7;1
    8;"Scrooge";"McDuck";7;1;1
    9;"Jack";"Sparrow";3;4;1
    10;"Robin";"Carlson";6;7;1
    11;"Dick";"Johnson";5;8;42
    12;"Sam";"Wilson";3;9;1
    13;"Wade";"Wilson";6;4;1
    14;"John";"Jameson";7;5;1
    15;"Doc";"Brown";8;3;15
    16;"Laura";"Terra";2;9;1
    17;"Marty";"McFly";8;11;15
    18;"John";"Dolittle";4;8;31
    19;"Aslan";"Lewis";1;4;19
    20;"Jim";"Halpert";7;12;1
    21;"Dwight";"Schrute";8;11;15
    22;"Stanley";"Hudson";8;11;15
    23;"Angela";"Martin";1;9;19
    24;"Kevin";"Malone";7;6;1
    25;"Oscar";"Martinez";7;6;1
    26;"Shaggy";"Rogers";2;9;1
    27;"Velma";"Dinkley";4;8;31
    28;"Fred";"Jones";1;9;19
    29;"Daphne";"Blake";6;8;1
    30;"Scoobert";"Doo";2;9;1
    31;"Steve";"Irwin";4;4;31
    32;"Bindi";"Irwin";4;9;31
    33;"Carol";"Baskin";1;8;19
    34;"Joe";"Exotic";1;7;19
    35;"Robert";"Brown";3;7;1
    36;"Jebediah";"Lyson";5;7;42
    37;"Chanice";"Tyson";6;8;1
    38;"Omar";"Al-Saud";5;9;42
    39;"North";"West";7;11;1
    40;"Terry";"Haymond";5;7;42
    41;"Cruella";"Devil";2;4;1
    42;"Chiron";"Kaustus";5;4;42
    `,
    roles: `"id";"title";"salary"
    1;"Director";110000.0
    2;"Finance Manager";70000.0
    3;"Gift Shop Manager";60000.0
    4;"Curator";90000.0
    5;"PR Representative";60000.0
    6;"Accountant";70000.0
    7;"Veternarian";80000.0
    8;"Zoologist";70000.0
    9;"Caretaker";70000.0
    10;"Gift Shop Clerk";45000.0
    11;"Ticket Attendant";44000.0
    12;"Volunteer Coordinator";60000.0
    `
}


export default function getData(file){
    const returnData = [];
    let data;
    if (file.match(/employee_table/g)) {
        data = fileData.employees;
    }
    if (file.match(/department_table/g)) {
        data = fileData.departments;
    }
    if (file.match(/role_table/g)) {
        data = fileData.roles;
    }
    const rows = data.match(/[\w;\_\-\. "]+(?=[\r\n])/gm);
    for (let i = 1; i < rows.length; i++) {
        returnData.push(rows[i].match(/[\w\_\-\. "]+(?=;|$)/gm));
    }
    return returnData;
}

