// 1) создать интерфейс на основе этого объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }===рішення папка intrfaces/rocket.interface.ts=====================================================================

//2/
//2) протипизировать функции:

//====================================================================================================================
function sum(a:number,b:number):number{
    return a+b
}
 console.log(sum(1, 2));

//=====================================================================================================================
function showSum(a:number,b:number):void{
    console.log(a + b);
}
showSum(2,3);
///===================================================================================================================

//===Можна через інтерфейс=============================

import {IUser} from './interfaces/user.interface';

const user:IUser = {
    name:"Max",
    age:18,
    gender:'male'
}
//===І ще такий варіант==================================

// const user:{name:string, age:number, gender:string} = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
function incAge(someUser, inc:number):IUser{/*як тут правильно має бути, тип даних return IUser чи object?*/
    someUser.age += inc
    return someUser
}
console.log(incAge(user, 2));