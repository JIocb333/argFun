let a=5;
function kvadr(a) {
  console.log(a*a);
  return a*a;
}
kvadr(a);
/*------------------------*/
function kub(a,b,c) {
  console.log(a*b*c);
  return a*b*c;
}
kub(a,3,4);
/*------------------------*/
let x=document.querySelector('h1');
console.log('x=',x);
let z= '853+';
//console.log('=',z);

function text(z,x) {
  let res;
  if (x != null) {
  document.querySelector('h1').innerText=z;
  res=true;
  console.log('=',x,z);}
  else {
    res=false;
  }
  return res;
}
console.log(text(z,x));
/*---------------------------------------*/
let aa = 50,b = 1,c = 10,d = 17,e = ' !!!';
function bigAss(aa,b,c,d,e) {
  return aa - (b * c) - d + e
}
console.log(bigAss(aa,b,c,d,e));
