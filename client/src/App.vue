<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-3">
        <nav>
          <ul class="list-group nav-list text-right w-75">
            <li v-on:click="changePage('Welcome')" v-bind:class="{ 'nav-list-item__active': showPage == 'Welcome' }" class="nav-list-item  pb-2"><h3>Welcome</h3></li>
            <li v-on:click="changePage('Compare')" v-bind:class="{ 'nav-list-item__active': showPage == 'Compare' }" class="nav-list-item pb-2 pt-3"><h3>Compare Home Values</h3></li>
            <ul v-show="showPage == 'Compare'" class="list-group text-right">
              <select v-on:change="setCompareFilter($event)" class="form-control" name="basic_filter" id="basic_filter">
                <option>Select Filter</option>
                <option value="TOP_20">Top 20 Most Expensive</option>
                <option value="BOTTOM_20">Top 20 Least Expensive</option>                                
              </select>
            </ul>
            <li v-on:click="changePage('About')" v-bind:class="{ 'nav-list-item__active': showPage == 'About' }" class="nav-list-item pb-2 pt-3"><h3>About Data</h3></li>
            <li v-on:click="changePage('Reach')" v-bind:class="{ 'nav-list-item__active': showPage == 'Reach' }" class="nav-list-item pb-2 pt-3"><h3>Reach Us</h3></li>
          </ul>
        </nav>
      </div>
      <div class="col-9">
        <welcome v-show="showPage == 'Welcome'"></welcome>
        <compare ref="compare_component" v-show="showPage == 'Compare'"></compare>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome';
import Compare from './components/Compare';

export default {
  name: 'App',
  data(){
    return{
      showPage: "Welcome"
    }    
  },
  components: {
    Welcome,
    Compare
  },
  methods: {
    changePage(pageName){
      this.showPage = pageName;
    },
    setCompareFilter(){
      this.$refs.compare_component.getHouseValues(event);
    }
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
</style>
