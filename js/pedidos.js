/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function pedidosScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "pedidos");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));