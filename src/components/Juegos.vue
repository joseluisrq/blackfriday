<template>
    <section aria-label="section" class="no-bottom" id="juegos">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                  <h2 class="style-2">APRENDE Y GANA</h2>
                  <h3>Juega y llevate cupones de descuento</h3>
                </div>
                <!--Menu de Juegos-->
                <template v-for="j in juegos" >               
                    <div class="col-lg-2 col-sm-4 col-6 mb30" :key="j.id">
                        <router-link :to="'/juegaconcersa/'+j.id"  >
                            <a class="box-url style-2" >
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
            name:'Control Acuático',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/1_icon_agua.png'
        },
        {
            id:1,
            name:'Control  Tierra',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/2_icon_tierra.png'
        },
        {
            id:2,
            name:'Super Resistencia',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/3_icon_construccion.png'
        },
        {
            id:3,
            name:'Control de Energía',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/4_icon_energia.png'
        },
        {
            id:4,
            name:'Control de Software',
            imagen: 'https://cersa.org.pe/assets_blackfriday/img/5_icon_software.png'
        }
        ],
      }
    
    },
  props: {
    msg: String
  },
  methods:{
   scrollToTop() {
        window.scrollTo(0,0);
      },
  },
  mounted(){  
    this.scrollToTop()
   
  }

}
</script>