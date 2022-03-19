/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function indexScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "index");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));