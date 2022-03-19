/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function veiculosScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "veiculos");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));