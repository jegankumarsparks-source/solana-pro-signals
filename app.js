(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var code = (window.SPS_CONFIG || {}).goatcounterCode;
  if (code) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
    document.head.appendChild(s);
  }

  var source = new URLSearchParams(location.search).get("utm_source") || "direct";
  source = source.replace(/[^a-z0-9_-]/gi, "").slice(0, 40) || "direct";

  // Records a button click only. Telegram does not report whether the visitor actually joined.
  document.querySelectorAll(".js-join").forEach(function (a) {
    a.addEventListener("click", function () {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: "join-click-" + source, title: "Join click", event: true });
      }
    });
  });
})();
