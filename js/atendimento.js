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

  
  function enviarSolicitacao() {
    const clienteId = PocGslFrontend.cognito.entityId;
    $.ajax({
      method: 'POST',
      url: _config.api.invokeUrl + `/api/v1/clientes/${clienteId}/solicitacoes`,
      crossDomain: true,
      headers: {
          Authorization: PocGslFrontend.authToken
      },
      contentType: 'application/json',
      data: {
        descricao: $("#descricao").val(),
        prioridade: $("#prioridade option : selected").val()
      },
      success: function (obj) {      
        alert("Solicitação enviada com sucesso!")
      },
      error: function ajaxError(jqXHR, textStatus, errorThrown) {
        console.error('Erro ao enviar solicitação: ', jqXHR.responseText);   
      }
    });
  }
}(jQuery));
