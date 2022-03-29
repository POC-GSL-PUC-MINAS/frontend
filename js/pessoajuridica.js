/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function pessoaJuridicaScopeWrapper($) {
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
        
    const entityRole = PocGslFrontend.cognito.entityRole;
    const pagina = obterPaginaPorPapel(entityRole);

    redirecionarNaoAutorizados(pagina, entityRole);
    
    barraSuperior("#barraSuperior", entityRole);
    menuLateral("#accordionSidebar", pagina);
    exibirMenus(entityRole);
    
    const dados = obterDadosPJ(PocGslFrontend.cognito.entityRole,
                              PocGslFrontend.cognito.entityId);    
    preencherForm(dados);   
  });

  function preencherForm(dados) {
    $('#cnpj').val(dados.cnpj);
    $('#razao-social').val(dados.razaoSocial);
    $('#nome-fantasia').val(dados.nomeFantasia);
    $('#email').val(dados.email);
    $('#telefone').val(dados.telefone);
    $('#endereco').val(dados.endereco);
    $('#situacao').val(dados.situacao);
  }

  function obterDadosPJ(papel, entidadeId) {
    let dados = {};
    const entidadeRota = obterPaginaPorPapel(papel);
               
    $.ajax({
      method: 'GET',
      url: _config.api.invokeUrl + `/api/v1/${entidadeRota}/${entidadeId}`,
      crossDomain: true,
      headers: {
          Authorization: PocGslFrontend.authToken
      },
      contentType: 'application/json',
      success: function (obj) {
        dados = obj;
      },
      error: function ajaxError(jqXHR, textStatus, errorThrown) {
        console.error('Response: ', jqXHR.responseText);   
      }
    });
    return dados;
  }
  function obterPaginaPorPapel(papel) {
    let pagina = '';
    switch (papel) {
      case 'cliente':
        pagina = 'clientes';
        break;
      case 'deposito':
        pagina = 'depositos';
        break;
      case 'fornecedor':
        pagina = 'fornecedores';
        break;
      case 'transportadora':
        pagina = 'transportadoras';
        break;   
    }
    return pagina;
  }
}(jQuery));
