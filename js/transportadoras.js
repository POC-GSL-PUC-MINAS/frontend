/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function transportadorasScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "transportadoras");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));