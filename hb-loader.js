// (function () {
//   var hbScript = document.createElement("script");
//   hbScript.async = true;
//   hbScript.src = "https://my.hellobar.com/4093d06fd4de0bf422a37110bed1ede31e999683.js";
//   document.head.appendChild(hbScript);
// })();

(function () {

  var script = document.createElement("script");
  script.async = true;

  var params = new URLSearchParams(window.location.search);
  var env = params.get("env");

  if (env === "staging") {
    script.src = "https://my.hellobar.com/7b66a980171a6371913aa19deeb3847f6992c96f.js";
    console.log("HelloBar: STAGING loaded");
  } else {
    script.src = "https://my.hellobar.com/4093d06fd4de0bf422a37110bed1ede31e999683.js";
    console.log("HelloBar: PRODUCTION loaded");
  }

  document.head.appendChild(script);

})();
