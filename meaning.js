let con1 = document.getElementById("condition1")

con1.addEventListener("click",function(event){
  con1.innerHTML = "You should avoid seeking a quick response."
});
let con2 = document.getElementById("condition2")

con2.addEventListener("click",function(event){
  con2.innerHTML = "The Du`a should not involve sin or severing of the ties of kinship"
});
let con3 = document.getElementById("condition3")

con3.addEventListener("click",function(event){
  con3.innerHTML = "You should avoid aggression in Du`a"
});
let washroom = document.getElementById("washroom")
washroom.addEventListener("click",function(event){
  washroom.src = "washroomscares.jpg"
});
let duatoilet = document.querySelector(".arabtoilet")
duatoilet.addEventListener("click",function(event){
  duatoilet.innerHTML = "“Allahuma In-nee aoothu bika minal khubuthee wal kabaith.” (O Allah! I seek your protection from the male and female devils) before entering the toilet. (Sahih Bukhari)"
});
let leavinghome = document.getElementById("leaving")
leavinghome.addEventListener("click",function(event){
  leavinghome.src = "protection.png"
});

let leavingarabic = document.getElementById("dualeaving")
leavingarabic.addEventListener("click",function(event){
  leavingarabic.innerHTML = "Bismillaahi, tawakkaltu 'alallaahi, wa laa hawla wa laa quwwata ' illaa billaah. In the Name of Allah, I have placed my trust in Allah, there is no might and no power except by Allah."
});

let palestinearabic = document.getElementById("Palestine")
palestinearabic.addEventListener("click",function(event){
  palestinearabic.innerHTML = "Allahumma aslih ahwaalal-muslimeena fi filisteen, Allahumma aslih ahwaalal-muslimeena fi filisteena wa fi kulli makaanin ya dhul-jalali wal-ikraam. O Allah! Rectify the affairs of the Muslims in Palestine. O Allah! Rectify the affairs of the Muslims in Palestine and in every place, O Lord of Majesty and Bounty."
});

let palestineflag = document.getElementById("flag")
palestineflag.addEventListener("click",function(event){
  palestineflag.src = "palestine.jpg"
});
let deceaseddua = document.querySelector(".fulldua")
deceaseddua.addEventListener("click",function(event){
  deceaseddua.innerHTML = "Inna Lillahi Wa Inna Ilayhi Raji'un, It means “Surely to Allah we belong and to Him we will all return."
});

document.getElementById("Highlight").addEventListener("click",function(event){
  let paragraphs = document.querySelectorAll("p");

  for(let i = 0;i<paragraphs.length;i++){
    paragraphs[i].style.backgroundColor = "yellow";
  }
});

document.getElementById("HighlightOff").addEventListener("click",function(event){

  let paragraphs = document.querySelectorAll("p");


  for(let i = 0; i <paragraphs.length;i++){
   if(i%2 !==0){
     paragraphs[i].style.backgroundColor = ""
   }
  }
});

