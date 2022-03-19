/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function depositosScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "depositos");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));