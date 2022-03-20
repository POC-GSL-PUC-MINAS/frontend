/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function clientesScopeWrapper($) {
  $(function onDocReady() {
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

    var entityRole = PocGslFrontend.cognito.entityRole;
    redirecionarNaoAutorizados("clientes", entityRole);
  
    barraSuperior("#barraSuperior", entityRole);
    menuLateral("#accordionSidebar", "clientes");
    exibirMenus(entityRole);
  });
}(jQuery));