<template>
    <section aria-label="section" class="no-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  <h2 class="style-2">CUPONES</h2>
                  <h3>Aprende y gana cupones de descuento</h3>
                </div>
                <!--Menu de Juegos-->
                <template v-for="j in juegos" >               
                    <div class="col-lg-2 col-sm-4 col-6 mb30" :key="j.id">
                        <router-link :to="'/juegaconcersa/'+j.id"  >
                            <a class="box-url style-2" v-on:click="sendJuego(j.id)" >
                            <img
                                v-bind:src="j.imagen"
                                alt=""
                                class="mb20"
                                width="100px"
                            />
                            <h4 v-text="j.name"></h4>
                            </a>
                        </router-link>
                    </div> 
                </template>
                <router-view/>
                <!--Fin de Menu de Juegos-->
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Juegos',  
  data: function(){
      return{
       juegos :
       [
        {
            id:0,
            name:'Juego 01',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/icon_agua.png'
        },
        {
            id:1,
            name:'Juego 02',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/juego.png'
        },
        {
            id:2,
            name:'Juego 03',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/juego.png'
        },
        {
            id:3,
            name:'Juego 04',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/juego.png'
        },
        {
            id:4,
            name:'Juego 05',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/juego.png'
        }
        ],
      }
    
    },
  props: {
    msg: String
  },
  methods:{
    sendJuego(iidjuego){
      this.$root.$emit("idjuego",iidjuego)

    }
  }

}
</script>