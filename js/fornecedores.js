/*global WildRydes _config*/

var WildRydes = window.WildRydes || {};
WildRydes.map = WildRydes.map || {};

(function fornecedoresScopeWrapper($) {
    var authToken;
    WildRydes.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = '/signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/signin.html';
    });
    function listarFornecedores() {
      $.ajax({
        method: 'GET',
        url: _config.api.invokeUrl + '/api/v1/fornecedores',
        crossDomain: true,
        // headers: {
        //     Authorization: authToken
        // },
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when requesting:\n' + jqXHR.responseText);
        }
    });
    } 
    function completeRequest(result) {    
      console.log('Response received from API: ', result);        
    }

    // Register click handler for #request button
    $(function onDocReady() {
      console.log("ondocready");
      listarFornecedores();
    });
}(jQuery));
