document.write('\
<div id="modalBackground" style="display: none;">\
<div id="orderModal">\
  <div>\
    <h2>Залишити замовлення</h2>\
    <i class="fa-solid fa-xmark" onclick="changeModalStatus()"></i>\
  </div>\
  \
  <span>\
    Ваше ім\'я\
    <input type="text">\
  </span>\
\
  <span>\
      Ваш номер телефону\
    <input type="tel">\
  </span>\
  \
  <span>\
    Залиште коментар\
      <input type="text">\
  </span>\
  \
  <span>\
    <a class="buy-button" id="fakeOrderButton" onclick="changeModalStatus()">Замовити сайт</a>\
  </span>\
</div>\
</div>\
');