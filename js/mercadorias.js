/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function mercadoriasScopeWrapper($) {
  var authToken;
  PocGslFrontend.authToken.then(function setAuthToken(token) {
    if (token) {
      authToken = token;
    } else {
      window.location.href = '/signin.html';
    }
  }).catch(function handleTokenError(error) {
    window.location.href = '/signin.html';
  });

  function listarMercadorias(fornecedorId) {
    let url;
    if (fornecedorId !== null) {
      url = "/api/v1/mercadorias";
    } else {
      url = `/api/v1/fornecedores/${fornecedorId}/mercadorias`;
    }
    $.ajax({
      method: 'GET',
      url: _config.api.invokeUrl + url,
      crossDomain: true,
      headers: {
          Authorization: authToken
      },
      contentType: 'application/json',
      success: function (obj) {
        renderizarTabela(obj.Items)
      },
      error: function ajaxError(jqXHR, textStatus, errorThrown) {       
        console.error('Response: ', jqXHR.responseText);
      }
    });
  }

  function renderizarTabela(itens) {
    let tbody = ""
    itens.forEach(function(item){
      tbody += `<tr>
        <td>${item.fornecedorId}</td>
        <td>${item.descricao}</td>
        <td>${item.codigoNCM}</td>
        <td>${item.codigoBarrasTipo}</td>
        <td>${item.codigoBarrasValor}</td>
        <td>${item.precoVenda}</td>
        <td>${item.impostos}</td>
        <td>
          <a class="btn btn-datatable btn-icon btn-transparent-dark me-2" href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a>
          <a class="btn btn-datatable btn-icon btn-transparent-dark" href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></a>
        </td>
      </tr>`;       
    });
    $("#tblMercadorias tbody").html(tbody);
  }

  $(function onDocReady() {
    let fornecedorId = null;
    if (PocGslFrontend.perfil != "admin") {
      $(".menus").hide();
      if (PocGslFrontend.perfil == "cliente") {
        $("#nomeUsuario").html("Cliente");
        $("#menu-clientes").show();
        $("#menu-pedidos").show();
      } else if (PocGslFrontend.perfil == "fornecedor") {
        fornecedorId = PocGslFrontend.customId;
        $("#nomeUsuario").html("Fornecedor");
        $("#menu-fornecedores").show();
        $("#menu-mercadorias").show();
      } else if (PocGslFrontend.perfil == "transportadora") {
        $("#nomeUsuario").html("Transportadora");
        $("#menu-transportadoras").show();
        $("#menu-veiculos").show();
      } else if (PocGslFrontend.perfil == "deposito") {
        $("#nomeUsuario").html("Depósito");
        $("#menu-depositos").show();
        $("#menu-mercadorias").show();
      }
    } else {
      $("#nomeUsuario").html("Admin");
    }

    listarMercadorias(fornecedorId);
    $("#btnLogout").on("click", function() {
      PocGslFrontend.signOut();
    })
    $("#tblMercadorias").DataTable();
  });
}(jQuery));