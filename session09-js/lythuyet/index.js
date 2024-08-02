// 1 câu điều kiên if

let a = 6;
if(a>5){
    //nếu điều kiện thỏa mãn thì thân chạy
    console.log("đúng")
}
console.log("1");

// viết chương trình cho người dùng nhập vào số tuổi, nếu lớn hơn 18 tuổi thì báo bạn đủ tuổi xem phim
// else thì báo là bạn không đủ tuổi

// let age = Number(prompt("Mời bạn nhập tuổi"));

// if(age>=18){
//     console.log("Bạn đủ tuổi xem phim");
// }else{
//     console.log("Bạn không đủ tuổi xem phim");
// }

// if(){

// }else if(){

// }else if(){

// }else{

// }

// viết chương trình cho người dùng nhập vào 1 ngày bất kỳ trong tuần in ra thứ

// let day = + prompt("Mời nhập số")
// if(day==2){
//     console.log("Đây là thứ 2");
// }else if(day == 3){
//     console.log("Đây là thứ 3");
// }else if(day == 4){
//     console.log("Đây là thứ 4");
// }
// else if(day == 5){
//     console.log("Đây là thứ 5");
    
// }else if(day == 6){
//     console.log("Đây là thứ 6");
// }else if(day == 7){
//     console.log("Đây là thứ 7");
// }else if(day == 8){
//     console.log("Đây là thứ cn");
// }else{
//     console.log("Số bạn chọn không thỏa mãn");
// }

/* viết chương trình cho người dùng nhập 1 số bất kỳ
    +nếu là số chẵn thì kiểm tra có lớn hơn 5 hay không
    +nếu lớn hơn 15 thì in ra
nếu là số lẻ thì kiểm tra xem có lớn hơn 6 hay không?
 */

let number = Number(prompt("Mời bạn nhập số bất kỳ"));
if(number%2==0){
    if(number>15){
        // console.log("số " , number, "lớn hơn số 15");
    //nhập số 20 lớn hơn 15 
    console.log(`số ${number} lớn hơn số 15`)
    }else{
        console.log(`số ${number} nhỏ hơn số 15`)
    }
}else{
    if(number>6){
        console.log(`số ${number} lớn hơn 6`);
    }else{
        console.log(`số ${number} nhỏ hơn 6`);
    }
}
