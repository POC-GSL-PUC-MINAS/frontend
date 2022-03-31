/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function atendimentoScopeWrapper($) {
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
      
  const entityRole = PocGslFrontend.cognito.entityRole; 
  redirecionarNaoAutorizados("atendimento", entityRole);  
  
  barraSuperior("#barraSuperior", entityRole);
  menuLateral("#accordionSidebar", "atendimento");
  exibirMenus(entityRole);  
}(jQuery));
