// learn 43. Оноог өөрчилж, тоглогчийн ээлжийг солих
// class-ын жагсаалтыг document дотор classList гэж байдаг.  Хэдэг class хийж өгч болдог 1234 гэх мэт
// Жишээ нь document.querySelector(".player-0-panel").classList.remove("active");
/* classList.add класс нэмнэ.  */
/* classList.romove класс хасна.  */
/* classList.toggle  класс дотор байж байх юм бол устгана, байхгүй байвал нэмдэг */

// тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Тоглоомыг эхлүүлнэ.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1 -ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

    // энэ тоглогчийг ээлжиндээ цуглуулсан оноог 0 болгоно
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ.
    // Хэрвээ идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
    // Үгүй бол идэвхтэй тоглогчийг 0 болго.
    /*if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
            }
       Гурвалсан оператор ашиглаж энийг товчоор ашиглаж болно. */
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // улаан цэгийг
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //  Шоог харагдахгүй болгон.
    diceDom.style.display = "none";
  }
});
