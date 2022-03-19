/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function pedidosScopeWrapper($) {
  var authToken;
  PocGslFrontend.authToken.then(function setAuthToken(token) {   
    if (token) {
      authToken = token;
    } else {
      window.location.href = '/login.html'
    }
  }).catch(function handleTokenError(error) {
    window.location.href = '/login.html'
  });

  $(function onDocReady() {
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "pedidos");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));