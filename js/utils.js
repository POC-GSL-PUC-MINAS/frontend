/*global PocGslFrontend _config*/

var PocGslFrontend = window.PocGslFrontend || {};

function menuLateral(container, pagina) {
  const dom = `
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
  <div class="sidebar-brand-icon rotate-n-15">
      <i class="fas fa-location-arrow"></i>
  </div>
  <div class="sidebar-brand-text mx-3">GSL</div>
</a>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
  INFORMAÇÕES CADASTRAIS
</div>

<!-- Divider -->
<hr class="sidebar-divider mt-3">  

<li id="menu-clientes" class="menus nav-item ${ pagina == "clientes" ? "active" : "" }">
  <a class="nav-link" href="clientes.html">
      <i class="fas fa-fw fa-users"></i>
      <span>Clientes</span></a>
</li>

<li id="menu-pedidos" class="menus nav-item ${ pagina == "pedidos" ? "active" : "" }">
  <a class="nav-link" href="pedidos.html">
      <i class="fas fa-fw fa-shopping-cart"></i>
      <span>Pedidos</span></a>
</li>

<li id="menu-depositos" class="menus nav-item ${ pagina == "depositos" ? "active" : "" }">              
<a class="nav-link" href="depositos.html">
  <i class="fas fa-fw fa-building"></i>
  <span>Depósitos</span></a>          
</li>
          
<li id="menu-fornecedores" class="menus nav-item ${ pagina == "fornecedores" ? "active" : "" }">
  <a class="nav-link" href="fornecedores.html">
      <i class="fas fa-fw fa-industry"></i>
      <span>Fornecedores</span></a>
</li>

<li id="menu-mercadorias" class="menus nav-item ${ pagina == "mercadorias" ? "active" : "" }">
  <a class="nav-link" href="mercadorias.html">
      <i class="fas fa-fw fa-barcode"></i>
      <span>Mercadorias</span></a>
</li>

<li id="menu-transportadoras" class="menus nav-item ${ pagina == "transportadoras" ? "active" : "" }">
  <a class="nav-link" href="transportadoras.html">
      <i class="fas fa-fw fa-building"></i>
      <span>Transportadoras</span></a>
</li>

<li id="menu-veiculos" class="menus nav-item ${ pagina == "veiculos" ? "active" : "" }">
  <a class="nav-link" href="veiculos.html">
      <i class="fas fa-fw fa-truck"></i>
      <span>Veículos</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
  <button class="rounded-circle border-0" id="sidebarToggle" onclick="toggleSidebar()"></button>
</div>
  `;
  $(container).html(dom);  
}

function barraSuperior(container, perfil) {
  const dom = `
  <!-- Sidebar Toggle (Topbar) -->
  <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
  </button>

  <!-- Topbar Search -->
  <form
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div class="input-group">
          <input type="text" class="form-control bg-light border-0 small" placeholder="Procurar..."
              aria-label="Search" aria-describedby="basic-addon2">
          <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </div>
      </div>
  </form>

  <!-- Topbar Navbar -->
  <ul class="navbar-nav ml-auto">

      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
          <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-search fa-fw"></i>
          </a>
          <!-- Dropdown - Messages -->
          <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown">
              <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                      <input type="text" class="form-control bg-light border-0 small"
                          placeholder="Search for..." aria-label="Search"
                          aria-describedby="basic-addon2">
                      <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                              <i class="fas fa-search fa-sm"></i>
                          </button>
                      </div>
                  </div>
              </form>
          </div>
      </li>

      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bell fa-fw"></i>                                
          </a>
          <!-- Dropdown - Alerts -->
          <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown">
              <h6 class="dropdown-header">
                  Notificações
              </h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                      <div class="icon-circle bg-primary">
                          <i class="fas fa-file-alt text-white"></i>
                      </div>
                  </div>
                  <div>
                      <div class="small text-gray-500">17/03/2022</div>
                      <span class="font-weight-bold">Novo produto adicionado!</span>
                  </div>
              </a>                                
              <a class="dropdown-item text-center small text-gray-500" href="#">Mostrar todas</a>
          </div>
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-envelope fa-fw"></i>                               
          </a>
          <!-- Dropdown - Messages -->
          <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown">
              <h6 class="dropdown-header">
                  MENSAGENS
              </h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="img/undraw_profile_1.svg"
                          alt="...">
                      <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                      <div class="text-truncate">Teste</div>
                      <div class="small text-gray-500">Contato 01 · 58m</div>
                  </div>
              </a>                               
              <a class="dropdown-item text-center small text-gray-500" href="#">Leia mais</a>
          </div>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                ${ perfil.toString().toUpperCase() }
              </span>
              <img class="img-profile rounded-circle"
                  src="img/undraw_profile.svg">
          </a>
          <!-- Dropdown - User Information -->
          <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Perfil
              </a>
              <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configurações
              </a>
              <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Atividades
              </a>
              <div class="dropdown-divider"></div>
              <a id="logout-btn" class="dropdown-item" href="#">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  SAIR
              </a>
          </div>
      </li>
  </ul>`
  $(container).html(dom);
  $("#logout-btn").on("click", function() {
    PocGslFrontend.signOut();
    window.location.href = '/login.html'
  })
}

function exibirMenus(perfil) {
  if (perfil != "colaborador") {
    $(".menus").hide();
    if (perfil == "cliente") {     
      $("#menu-clientes").show();
      $("#menu-pedidos").show();
    } else if (perfil == "fornecedor") {   
      $("#menu-fornecedores").show();
      $("#menu-mercadorias").show();
    } else if (perfil == "transportadora") {
      $("#menu-transportadoras").show();
      $("#menu-veiculos").show();
    } else if (perfil == "deposito") {
      $("#menu-depositos").show();
      $("#menu-mercadorias").show();
    }
  }
}

function redirecionarNaoAutorizados(pagina, perfil) { 
  if (
      ( (["clientes","pedidos"].includes(pagina)) && !(["colaborador","cliente"].includes(perfil)) ) ||
      ( (["fornecedores","mercadorias"].includes(pagina)) && !(["colaborador","fornecedor"].includes(perfil)) ) ||
      ( (["transportadoras","veiculos"].includes(pagina)) && !(["colaborador","transportadora"].includes(perfil)) ) ||
      ( (["depositos","mercadorias"].includes(pagina)) && !(["colaborador","deposito"].includes(perfil)) )
    ) {
      window.location.href = '/index.html'
    }
}

function toggleSidebar() {   
  $("body").toggleClass("sidebar-toggled");
  $(".sidebar").toggleClass("toggled");
  if ($(".sidebar").hasClass("toggled")) {
    $('.sidebar .collapse').collapse('hide');
  };
}