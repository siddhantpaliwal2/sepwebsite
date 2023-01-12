<template>
  <header class="site-header">
    <div class="header-menu">
      <div class="container mr-0">
        <nav class="navbar navbar-expand-lg">
          <router-link to="/home" class="logo">
            <img src="../assets/img/logo.png" alt="">
            <span>SIGMA ETA PI</span>
          </router-link>
          <button type="button" data-toggle="collapse" data-target="#navbarmenuContent"
            aria-controls="navbarmenuContent" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler collapsed"><span class="navbar-toggler-icon"><img
                src="https://images.prismic.io/cmct-web/26783acb-d53b-4a36-ad70-d45f942fe546_Mobile+menu%402x.png?auto=compress,format"
                alt="Mobile menu icon"></span></button>
          <div id="navbarmenuContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <router-link to="/home" class="menu-maintitle nav-link">Home</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" data-toggle="dropdown" class="menu-maintitle nav-link ">Brothers</router-link>
                <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                  <ul>
                    <li>
                      <router-link to="/executives" class="menu-subtitle dropdown-item">Executive</router-link>
                    </li>
                    <li>
                      <router-link to="/actives" class="menu-subtitle dropdown-item">Actives</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/bruintank" class="menu-maintitle nav-link">Bruin Tank</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/recruitment" class="menu-maintitle nav-link">Recruitment</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>



<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
};


</script>


<style>
.header-menu {
  min-height: 100px;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.header-menu .logo img {
  margin-right: 25px;
}

.header-menu .logo span {
  font-size: 22px;
}

.header-menu ul.navbar-nav li.nav-item .nav-link {
  font-size: 14px;
  padding: 0 10px;
  color: #000;
  font-weight: 200;
  font-family: 'AvenirLT';
}

.header-menu ul.navbar-nav li.nav-item ul li a.menu-subtitle {
  font-size: 14px;
  padding: 3px 5px;
  color: #000;
  text-align: right;
  font-weight: 200;
  font-family: 'AvenirLT';
}

.header-menu ul.navbar-nav li.nav-item ul {
  padding: 0;
  list-style: none;
}

.header-menu ul.navbar-nav li.nav-item .dropdown-menu {
    padding: 0;
    border: none;
    border-radius: 0;
    min-width: 80px;
    margin-top: 10px;
    left: auto;
    right: 0;
}

.header-menu ul.navbar-nav li.nav-item ul {
  padding: 0;
  list-style: none;
}
.header-menu  button.navbar-toggler {
    padding: 0;
}
.header-menu .navbar-toggler-icon img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transform: scaleX(-1);
}

@media(max-width: 991px) {
  .header-menu .container {
    padding: 0;
  }

  .header-menu .navbar-collapse {
    position: absolute;
    top: 80px;
    width: 100%;
    left: 0;
    z-index: 10;
    background-color: #fff;
    overflow: hidden;
  }

  .header-menu ul.navbar-nav li.nav-item .nav-link {
    padding: 5px 10px;
  }
  .header-menu ul.navbar-nav li.nav-item .dropdown-menu{
    background-color: #efefef;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
  }
  .header-menu ul.navbar-nav li.nav-item ul li a.menu-subtitle{
    text-align: left;
    padding: 7px 10px;
  }
}

@media(max-width: 520px) {
  .header-menu .logo img {
    margin-right: 5px;
  }

  .header-menu .logo span {
    font-size: 20px;
  }
  .header-menu ul.navbar-nav li.nav-item .dropdown-menu{
    border-radius: 5px;
  }
}
</style>
