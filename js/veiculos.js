/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function veiculosScopeWrapper($) {
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
    redirecionarNaoAutorizados("veiculos", entityRole);
  
    barraSuperior("#barraSuperior", PocGslFrontend.cognito.entityRole);
    menuLateral("#accordionSidebar", "veiculos");
    exibirMenus(PocGslFrontend.cognito.entityRole);
  });
}(jQuery));