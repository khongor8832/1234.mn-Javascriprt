// learn 23 Утган хандалт болон заагч хандалтын тухай - value VS reference

// Утга олголт:  1. энгийн утга олголт буюу value 
//               2. заалтаар утга олголт буюу reference 

// --------------------- 1. энгийн утга олголт буюу value-
// primivite өгөгдлийн төрлүүд дандаа ийм байдлаар утгууд нь copy байдлаар утгууд нь дамжигддаг. 
var a = 12; //а-гын утгыг b өгөхөд санах ойд байгаа хаягнаас а-гын хуулбар буюу copy дамжигддаг 
var b = a; // а-гын утганы хуулбар ирэээд санах ойд а-гын хаягнаас өөр хаяг дээр b  болон хадгалагддаг. 
a = 13; // ийм учираас а-гын утгыг 13 болоход b-гын утга өөрчлөхдөхгүй. Ягаад гэвэл санах ойд 2 өөр хаяган дээр байгаа болохоор 

console.log(a)
console.log(b)

// ------ 2. заалтаар утга олголт буюу reference 
// reference утга нь өөрөө дамждаг байгаа. 
// Объектод заагч утга ашиглах: Object Reference
var p1 = {
    name: 'notebook',   //p1 утгыг p2 өгөхөд p1 өөрөө дамжигдаж байна. 
    price: '300$'
};
var p2 = p1;
p2.price =
    console.log("p1 = " + p1.name + p1.price);
console.log("p2 = " + p2.name + p2.price);
