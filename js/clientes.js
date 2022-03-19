/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function clientesScopeWrapper($) {
  var authToken = obterToken();
  if (authToken == null) {
    window.location.href = '/signin.html'
  }

  console.log("PocGslFrontend.cognito.entityId");
  console.log(PocGslFrontend.cognito.entityId);
  console.log("PocGslFrontend.cognito.entityRole");
  console.log(PocGslFrontend.cognito.entityRole);

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "clientes");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));