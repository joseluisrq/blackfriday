
<template>
  <div id="app">
   <div id="wrapper">
        <!-- Menu -->
        <Menu/>        
        
        <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            <!--Flyer-->
            <Flyer/>
        </div>
      
       
        <!--
        <div class="collapse navbar-collapse justify-content-end" id="mylist">
          <div id="nav" class="navbar-nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/users" class="nav-link">Users</router-link>
        
          </div>
        </div>
         <router-view/>
         -->
     </div>  
  </div>
</template>
<script>
import Menu from "./components/elements/HeaderPage.vue";
import Flyer from "./components/elements/Flyer.vue";

export default {
  components: {
    Menu,
    Flyer
  },
  name: 'Users',
  data: function(){
    return{
      mensaje:'holi'
    }
   
  },
}
</script>



