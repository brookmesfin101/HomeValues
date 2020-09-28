<template>
  <div id="app">
    <div class="row no-gutters">
      <div class="col-3">
        <nav>
          <ul class="list-group nav-list text-right w-75">
            <li v-on:click="changePage('Welcome')" v-bind:class="{ 'nav-list-item__active': showPage == 'Welcome' }" class="nav-list-item  pb-2"><h3>Welcome</h3></li>
            <li v-on:click="changePage('Compare')" v-bind:class="{ 'nav-list-item__active': showPage == 'Compare' }" class="nav-list-item pb-2 pt-3"><h3>Compare Home Values</h3></li>
            <ul v-show="showPage == 'Compare'" v-on: class="list-group text-right">
              <select v-on:change="setCompareFilter($event)" class="form-control custom-select select-right" name="basic_filter" id="basic_filter">                
                <option value="TOP_20">Top 20 Most Expensive</option>
                <option value="BOTTOM_20">Top 20 Least Expensive</option>    
                <option value="BY_STATE">Compare Within State</option>
                <option value="BY_YEAR">View House Value Over the Years</option>
              </select>
              <select v-show="filterSettings.showState" v-on:change="setStateFilter($event)" class="form-control custom-select select-right" name="state_filter" id="state_filter">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PN">Pennsylvania</option>
                <option value="RH">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
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
        showPage: "Welcome",
        filterSettings : {
          showState: false          
        }
      }    
    },
    components: {
      Welcome,
      Compare
    },
    methods: {
      changePage(pageName){
        this.showPage = pageName;  

        if(pageName == 'Compare'){
          this.$refs.compare_component.getHouseValues(null, 'basic_filter');
        } else {
          this.resetFilters();
        }
      },
      resetFilters(){    
        document.querySelectorAll("#basic_filter")[0].selectedIndex = 0;
        document.querySelectorAll("#state_filter")[0].selectedIndex = 0;

        document.querySelectorAll("#basic_filter")[0].options[0].selected = true;
        document.querySelectorAll("#state_filter")[0].options[0].selected = true;
        if(this.filterSettings.showState){
          this.filterSettings.showState = false;
        }
      },
      setCompareFilter(){        
        if(document.getElementById(event.currentTarget.id).value == "BY_STATE"){
          this.filterSettings.showState = true;
          this.$refs.compare_component.getHouseValueByState(null, 'state_filter');
        } else if (document.getElementById(event.currentTarget.id).value == "BY_YEAR"){
          this.filterSettings.showState = true;
          this.$refs.compare_component.getHouseValueOverYears(null, 'state_filter');
        } else {
          this.$refs.compare_component.getHouseValues(event);
          this.filterSettings.showState = false;
        }              
      },
      setStateFilter(){
        this.$refs.compare_component.getHouseValueByState(event);
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
  cursor: pointer;
} 
  .nav-list-item__active {
    border-bottom: 1px solid white;
    color: white;
  } 
  .nav-list-item:hover {
    color: white;
    
    border-bottom: 1px solid white;
  }
</style>
