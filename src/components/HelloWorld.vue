<template>
  <div>
   <Menu/>
   <div class="no-bottom no-top" id="content">
             
              <!--Flyer-->
              <Flyer/>
              <!--Juegos-->
              <Juegos/>
              <!--Super Pack-->
              <Pack/>
              <Top/>

    </div>
    <Footer/>
  
  </div>
</template>

<script>
  import Menu from "./elements/HeaderPage.vue";
  import Flyer from "./elements/Flyer.vue";
  import Juegos from "./Juegos.vue";
  import Footer from "./elements/Footer.vue";
  import Pack from "./Pack.vue";
  import Top from "./Top.vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
      Menu,
      Flyer,
      Juegos,
      Top,
      Pack,
      Footer
    },
  methods:{
    sendMenssage(){
      this.$root.$emit("msj-text","Hola te escribo desde Home")
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
