const delay = 1000;
const maxtiencuoc = 12; ////30 = 300k
const mintiencuoc = 1 ; /////1 = 10k
const rancachchoi = 2;
maxfor = 10; //       3 - 1 = 2 sẽ trừ đi 1 để trở thành số mình muốn
const forreset = 30; ///30 = 30s
function phonehistory1() {
for (let i = 0; i < forreset; i++) {
  setTimeout(function timer() {
  text = forreset-i;
  document.getElementById("timereset").innerHTML = text;
  },i*delay);
};
  
  
 for (let i = 1; i < maxfor; i++) {
const forphonehistorywin ="phonehistorywin"+i;
const formoneyhistorywin ="moneyhistorywin"+i;
const forgamewin="gamewin"+i;
const formoneytra="moneytra"+i;
const forndwin="ndwin"+i;
const fordayhistory = "dayhistory"+i;
const d = new Date();
const years = d.getFullYear();
const month = d.getMonth() + 1;
const day= d.getDate();
/////////THỜI GIAN NGÀY////////

document.getElementById(fordayhistory).innerHTML = day+"/"+month+"/"+years;



///////////SDT,TIỀN CƯỢC, TIỀN THƯỞNG , CÁCH CHƠI
  var randomdauphone = Math.floor(Math.random() * (3 - 1) + 1);
  //document.getElementById("lichsuwin").innerHTML = randomdauphone;
  if (randomdauphone == 1){
  var min = 300000,
  max = 399999;
  var rand = Math.floor(Math.random() * (max - min + 1) + min); 
  document.getElementById(forphonehistorywin).innerHTML = "0"+rand+"***";
  }else{
  var min = 900000,
  max = 999999;
  var rand = Math.floor(Math.random() * (max - min + 1) + min); 
  document.getElementById(forphonehistorywin).innerHTML = "0"+rand+"***";
  };
  
  var randommoney = Math.floor(Math.random() * (maxtiencuoc - 1) + mintiencuoc);
  document.getElementById(formoneyhistorywin).innerHTML = randommoney+"0,000";
  
  var cachchoi = Math.floor(Math.random() * (3 - 1) + 1);
  ///random cách chơi = 1 chẳn lẻ momo
  ///random cách chơi = 2 là cách chới khác
  if (cachchoi == 1){
  document.getElementById(forgamewin).innerHTML = "Chẳn Lẻ";
  document.getElementById(formoneytra).innerHTML = Math.round(randommoney*2.3)+"0,000";
 const cachchoi = ["C", "L"];
const random = Math.floor(Math.random() * cachchoi.length);
//if(cachchoi[random] == "C" || "L"){
  document.getElementById(forndwin).innerHTML =cachchoi[random];
 //};
  } else {
const cachchoi = ["X", "T", "L2", "C2", "X2", "T2", "G31","G32","G33","S1","S2","S3","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","N1","N2","N3","CX","CL","CT","LX"];
 //const cachchoi = ["X","T","L2","C2","X2","T2","CX","CX","CX"];
const random = Math.floor(Math.random() * cachchoi.length);
console.log(random, cachchoi[random]);

 if(cachchoi[random] === "X"||cachchoi[random] === "T"){
gamewin1="Tài Xỉu";
nhan=2.3;
 }else if(cachchoi[random]=== "L2"||cachchoi[random] === "C2"||cachchoi[random] === "X2"||cachchoi[random] === "T2"){
gamewin1="Chẳn Lẻ 2";
nhan=1.9;
 }else if(cachchoi[random] === "G31"){
  gamewin1= "Gấp 3";
  nhan=3;
 }else if(cachchoi[random] ==="G32"){
  gamewin1= "Gấp 3";
  nhan=4;
 }else if(cachchoi[random] ==="G33"){
  gamewin1= "Gấp 3";
  nhan=5;
 }else if(cachchoi[random] === "S1"){
  gamewin1= "Tổng 3 Số";
  nhan=2.5;
 }else if(cachchoi[random] === "S2"){
  gamewin1= "Tổng 3 Số";
  nhan=3;
 }else if(cachchoi[random] == "S3"){
  gamewin1= "Tổng 3 Số";
  nhan=3.5;
 }else if(cachchoi[random] == "N1"||cachchoi[random] =="N2"||cachchoi[random] =="N3"){
  gamewin1= "Một Phần Ba";
  nhan=3;
 }else if(cachchoi[random] == "D0"||cachchoi[random] =="D1"||cachchoi[random] =="D2"||cachchoi[random] =="D3"||cachchoi[random] =="D4"||cachchoi[random] =="D5"||cachchoi[random] =="D6"||cachchoi[random] =="D7"||cachchoi[random] =="D8"||cachchoi[random] =="D9"){
  gamewin1= "Đoán Số";
  nhan=7;
 } else if (cachchoi[random] === "CX"||cachchoi[random] =="LT"||cachchoi[random] =="CT"||cachchoi[random] =="LX"){
 gamewin1="Xiên";
 nhan=3.3;
 }; 
 
 document.getElementById(forgamewin).innerHTML =gamewin1;
 document.getElementById(formoneytra).innerHTML = Math.round(randommoney*nhan)+"0,000";
 document.getElementById(forndwin).innerHTML = cachchoi[random];
  }
  
  };
  setTimeout(phonehistory1,delay*forreset);

};

phonehistory1()