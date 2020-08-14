// learn 25 Алдааг боловсруулах буюу try catch ашиглах

// Javascript програмд гарч байгаа алдааг хэрхэн барьж авч боловсруулах вэ талаар үзэцгээе.
// try catch
// Сайн программ ямар нэгэн урьдчилан тооцоологоогүй алдаа гарч болзошгүй нөхцөлүүдийг тооцоолж тухайн нөхцөлд хэрэглэгчиддээ юу гэж мэдээлэх вэ гэдгээ маш сайн боловсруулж бичсэн байдгаас гадна болж өгвөл хэрэглэгчээс үл хамааран эдгээр хүндрэлтэй нөхцөл байдлуудыг автоматаар шийдхийг хичээдэг юм. Тэгэхээр үүнийг хэрхэн хийдэг вэ гэхээр TRY CATCH ашиглаж хийдэг.

try {
  //үндсэн кодоо энэд хийж өгнө
} catch (error) {
  //error гэсэн хувьсагчруу гарч ирсэн алдаа нь орж ирдэг байгаа
}

console.log("Програм эхэллээ. ");
var x = prompt("За та 1-100 хооронд тоо оруулна уу"); //гараас хэрэглэгч тоо оруулангуут х хадгалагдан.

console.log("Таны оруулсан тоо бол : " + x); //prompt бол вэб broser дотор байдаг функц  өөр газөр ажиллахгүй.

// try --> орлодоод үз
// Exception --> тооцоологдоогүй нөхцөл байдал
// Exception Handling тооцоологдоогүй нөхцөл байдлыг аргалж ажиллах
