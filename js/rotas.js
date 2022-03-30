




/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

(function rotasScopeWrapper($) {
  // $(function onDocReady() {  
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
    redirecionarNaoAutorizados("rotas", entityRole);
  
    barraSuperior("#barraSuperior", entityRole);
    menuLateral("#accordionSidebar", "rotas");
    exibirMenus(entityRole);   
    
 
function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: -23.66693, lng: -46.46510 },
  });

  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };

  document.getElementById("end").addEventListener("change", onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {

  const destino = document.getElementById("end").value;
  let coords = {};
  switch (destino) {
    case 'sandre':
      coords = { lat: -23.65163, lng: -46.53528 };
      break;
    case 'sbc':
      coords = { lat: -23.69588, lng: -46.55173 };
      break;
    case 'scs':
      coords = { lat: -23.63297, lng: -46.57505 };
      break;
    case 'diadema':
      coords = { lat: -23.68231, lng: -46.61189 };
      break;
    case 'ribpires':
      coords = { lat: -23.69545, lng: -46.41294 };
      break;
    case 'rgs':
      coords = { lat: -23.74420, lng: -46.39305 };
      break;
  } 
  
  directionsService
    .route({
      origin: { lat: -23.66693, lng: -46.46510 },    
      destination: coords,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + JSON.stringify(e)));
}

 // });
}(jQuery));
