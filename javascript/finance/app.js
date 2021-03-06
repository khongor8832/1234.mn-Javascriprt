// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  //pravite объект
  var DOMstring = {
    inputType: ".add__type",
    inputDescrition: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
    incomeList: ".income__list",
    expenseList: ".expenses__list",
    /********************************* */
    tusuvLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",

    /**************************** */
  };
  return {
    //public функц
    getInput: function () {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescrition).value,
        value: parseInt(document.querySelector(DOMstring.inputValue).value),
      };
    },
    //public функц
    getDOMsrting: function () {
      return DOMstring;
    },

    clearFields: function () {
      var fields = document.querySelectorAll(
        DOMstring.inputDescrition + ", " + DOMstring.inputValue
      );
      //convert List to Array
      var fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function (el, index, array) {
        el.value = "";
      });
      fieldsArr[0].focus();
    },
    /********************************** */

    tusviigUzuuleh: function (tusuv) {
      document.querySelector(DOMstring.tusuvLabel).textContent = tusuv.tusuv;
      document.querySelector(DOMstring.incomeLabel).textContent =
        tusuv.totalInc;
      document.querySelector(DOMstring.expenseLabel).textContent =
        tusuv.totalExp;
      if (tusuv.huvi !== 0) {
        document.querySelector(DOMstring.percentageLabel).textContent =
          tusuv.huvi + "%";
      } else {
        document.querySelector(DOMstring.percentageLabel).textContent =
          tusuv.huvi;
      }
    },
    /***************************************** */
    addListItem: function (item, type) {
      // 1.Орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ.
      var html, list;
      if (type === "inc") {
        list = DOMstring.incomeList;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        list = DOMstring.expenseList;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // 2.Тэр  html дотороо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчилж өгнө.
      html = html.replace("%id%", item.id);
      html = html.replace("$$DESCRIPTION$$", item.description);
      html = html.replace("$$VALUE$$", item.value);
      // 3.Бэлтгэсэн HTML ээ DOM руу хийж өгнө.
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    },
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {
  //pravite функц
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //pravite функц
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;

    data.items[type].forEach(function (el) {
      sum = sum + el;
    });
    data.totals[type] = sum;
  };

  //pravite объект
  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
    tusuv: 0,
    huvi: 0,
  };

  return {
    tusuvTootsooloh: function () {
      // Нийт орлогын нийлбэрийг тооцоолно.
      calculateTotal("inc");
      // Нийт зарлагын нийлбэрийг тооцоолно.
      calculateTotal("exp");
      // нийт төсөвийг шинээр тооцоолно.
      data.tusuv = data.totals.inc - data.totals.exp;
      // орлого зарлагын хувийг тооцоолно.
      data.huvi = Math.round((data.totals.exp / data.totals.inc) * 100);
    },

    tusviigAvah: function () {
      return {
        tusuv: data.tusuv,
        huvi: data.huvi,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
      };
    },

    addItem: function (type, desc, val) {
      var item, id;
      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);

      return item;
    },

    // seeData: function () {
    //   return data;
    // },
  };
})();

// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    var input = uiController.getInput();

    // орлого зарлага оруулдагын 2уулан дээр юм бичиж байж ордог боллоо
    if (input.description !== "" && input.value !== "") {
      // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
      var item = fnController.addItem(
        input.type,
        input.description,
        input.value
      );

      // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
      uiController.addListItem(item, input.type);
      uiController.clearFields();

      // 4. Төсөвийг тооцоолно.
      financeController.tusuvTootsooloh();
      // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
      var tusuv = financeController.tusviigAvah();

      // 6.  Төсөвийг тооцоог дэлгэцэнд гаргана.
      uiController.tusviigUzuuleh(tusuv);
    }
  };

  var setupEventListener = function () {
    var DOM = uiController.getDOMsrting();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function () {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("Application started ...");
      setupEventListener();
    },
  };
})(uiController, financeController);
appController.init();
