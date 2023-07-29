document.getElementById("btnCallMe").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "button",
    event_label: "btnCallMe",
  });
});

document
  .getElementById("btnInVideoBlock")
  .addEventListener("click", function () {
    gtag("event", "click", {
      event_category: "button",
      event_label: "btnInVideoBlock",
    });
  });

document
  .getElementById("clickBtnFormBlock")
  .addEventListener("click", function () {
    gtag("event", "click", {
      event_category: "button",
      event_label: "clickBtnFormBlock",
    });
  });

document.getElementById("sendbtnShow").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "button",
    event_label: "clickBtnLastForm",
  });
});
