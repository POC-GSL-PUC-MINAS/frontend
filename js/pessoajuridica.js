/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function pessoaJuridicaScopeWrapper($) {
  $(function onDocReady() {
    /*var authToken;
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
    redirecionarNaoAutorizados("fornecedores", entityRole);
    
    barraSuperior("#barraSuperior", entityRole);
    menuLateral("#accordionSidebar", "fornecedores");
    exibirMenus(entityRole);*/
    
    //const dados = obterDadosPJ(PocGslFrontend.cognito.entityRole,
    //                           PocGslFrontend.cognito.entityId);    
    const dados = obterDadosPJ('fornecedores','6d8e002a-6f6c-487f-8f61-0b675ed37c13')
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
    let entidadeRota;
    switch (papel) {
      case 'cliente':
        entidadeRota = 'clientes';
        break;
      case 'deposito':
        entidadeRota = 'depositos';
        break;
      case 'fornecedor':
        entidadeRota = 'fornecedores';
        break;
      case 'transportadora':
        entidadeRota = 'transportadoras';
        break;   
    }
           
    $.ajax({
      method: 'GET',
      url: _config.api.invokeUrl + `/api/v1/${entidadeRota}/${entidadeId}`,
      // crossDomain: true,
      // headers: {
      //     Authorization: authToken
      // },
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
}(jQuery));
