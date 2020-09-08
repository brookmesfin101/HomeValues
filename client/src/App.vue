<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-3">
        <nav>
          <ul class="list-group nav-list text-right w-75">
            <li v-on:click="showPage = 'Welcome'" class="nav-list-item nav-list-item__active pb-2"><h3>Welcome</h3></li>
            <li v-on:click="showPage = 'Compare'" class="nav-list-item pb-2 pt-3"><h3>Compare Home Values</h3></li>
            <li v-on:click="showPage = 'About'" class="nav-list-item pb-2 pt-3"><h3>About Data</h3></li>
            <li v-on:click="showPage = 'Reach'" class="nav-list-item pb-2 pt-3"><h3>Reach Us</h3></li>
          </ul>
        </nav>
      </div>
      <div class="col-9">
        <welcome></welcome>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome';

export default {
  name: 'App',
  data(){
    showPage: "Welcome"
  },
  components: {
    Welcome
  }
}
</script>

<style>
nav {
  background-color: #312450;
  background-image: url('~@/assets/intro.svg');
  color: rgb(255, 255, 255);  
}
.nav-list {
  height: 100vh;
  justify-content: center;
  margin-left: 12.5%;
  list-style: none;
}
.nav-list-item {
  border-bottom: 1px solid #f7a6f7;
  color: #f7a6f7;
} 
  .nav-list-item__active {
    border-bottom: 1px solid white;
    color: white;
  } 
  .nav-list-item:hover {
    color: white;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
main {
  background-color: #5e42a6;  
  height: 100vh;
}
header {
  color: white;
  position: relative;
  top: 15%;
  left: 10%;
}
  header h1 {
    font-size: 4rem;
  }
  header p {
    font-weight: 300;
    font-size: 2rem;
  }
  
.welcome {
  background-image: url("../public/breno-assis-r3WAWU5Fi5Q-unsplash.jpg");
  background-size: 100vw; 
  height: 100vh;
}
  .welcome::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,.70);
  }
.welcome-img {
  width: 100%;
}
</style>
