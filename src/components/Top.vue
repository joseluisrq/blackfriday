<template>
<div>
 
  <template v-for="cu in cursos" ><div :key="cu.id" ></div></template>
  <section section id="section-collections" class="pt30 pb30">
  <div class="container">
   <div class="row">
                <div class="col-lg-12">
                  <h2 class="style-2">Explora nuestros cursos</h2>
                </div>

                <div class="row">
                   <select v-model="selectedType">
                    <option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
                     <option value="Ingeniería Civil">Ingeniería Civil</option>
                    <option value="">Todas</option>
                   
                  </select>                  
                 
                
                </div>
             
                <div class="row">    
                    <div class="search-wrapper  text-center">
                      <input class="form-control" type="text" v-model="search" placeholder="Buscar curso o Diplomado"/>
                  
                    </div>               
                  <template  v-for="t in filteredList">
                    <div :key="t.id+'-top'"
                      class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                      style="display: block; background-size: cover"
                    >
                      <div
                        class="nft__item style-2"
                        style="background-size: cover"
                      >
                        <div
                          class="nft__item_wrap"
                          style="background-size: cover"
                        >
                          <a href="03_grey-item-details.html">
                            <img
                              v-bind:src="'https://api.aulacersa.com:3006/images/cursos/'+t.imagen"
                              class="lazy nft__item_preview"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          class="nft__item_info"
                          style="background-size: cover"
                        >
                          <a href="03_grey-item-details.html">
                            <h4>{{t.nombre_corto}}</h4>
                          </a>
                          <div
                            class="nft__item_price"
                            style="background-size: cover"
                          >
                            <strike> S/ {{t.precio_carrito}} </strike
                            ><span class="fs-2">S/ {{t.precio_carrito}}</span>
                          </div>
                          <div
                            class="nft__item_action"
                            style="background-size: cover"
                          >
                            <a href="#">COMPRAR</a>
                          </div>
                          <div
                            class="nft__item_like"
                            style="background-size: cover"
                          >
                            <i class="fa fa-heart"></i><span>80</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <!--Inicio del filer-->
                  
                  <!--fin de -->
                 
                </div>
          </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Top",
    data: function(){
    return{
        vista:false,
        prueba:'text',
        cursos:[],
        cursos_top:[],
        cursos_descuento:[],
        cursosRestantes:[],
        search: '',
        selectedType: '',
        //selectedSize: '',
    }
    },
    
    methods:{
        
      async ListarCursos(){
        try{
          var result=await axios({
            method:"POST",
            url: "https://api.aulacersa.com:3006/api",
            data:{
              query: `
                {
                    cursosActivos{
                        id, 
                        nombre_corto,
                        imagen,
                        precio_carrito,
                        subcategoria{
                          nombre
                        },
                    }
                }
              `
            }
          });
          this.cursos=result.data.data.cursosActivos;
          this.CursosTop();
          this.CursosDescuento()
          this.Todos()
         }catch(error){
          console.log(error);
        }
           
    
      },
       CursosTop(){
         let  contador_uno=0
        for (let i = 0;  i<8; i++) {
            this.cursos_top[contador_uno]=this.cursos[i]
            contador_uno++;
          }
      },
      CursosDescuento(){
        let contador_dos=0
      for (let i = 8;  i<12; i++) {
          this.cursos_descuento[contador_dos]=this.cursos[i]
          contador_dos++;
        }
    },
     Todos(){
        let contador_tres=0
      for (let i = 12;  i<100; i++) {
          this.cursosRestantes[contador_tres]=this.cursos[i]
          contador_tres++;
        }
    }

    }
    ,
    mounted(){   
    this.ListarCursos()
  }, 
  computed: {
    filteredList() {
      let filterType= this.selectedType
      return this.cursos.filter(curso => {

       let filtered = true
        
       
        
        if(filterType && filterType.length > 0){
           filtered = curso.subcategoria.nombre == filterType
        }
        if(filtered){
            filtered =curso.nombre_corto.toLowerCase().includes(this.search.toLowerCase())
        }
          return filtered
      })
    },
   /* computed_items: function () {
      let filterType= this.selectedType
        //  filterSize = this.selectedSize
      return this.cursos.filter(function(item){
        let filtered = true
        if(filterType && filterType.length > 0){
         return  filtered = item.subcategoria.nombre == filterType
        }
         filtered
      })
    }*/

  }
}
</script>

<style>

</style>