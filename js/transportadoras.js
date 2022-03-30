/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function transportadorasScopeWrapper($) {
  //$(function onDocReady() {
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
    redirecionarNaoAutorizados("transportadoras", entityRole);
  
    barraSuperior("#barraSuperior", entityRole);
    menuLateral("#accordionSidebar", "transportadoras");
    exibirMenus(entityRole);
  //});  
}(jQuery));