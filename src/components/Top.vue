<template>
<div>
 

  <section section id="cursos" class="pt30 pb30">
  <div class="container">
   <div class="row">
                <div class="col-lg-12">
                  <h2 class="style-2">Explora nuestros cursos</h2>
                </div>
             
                <div class="row">    
                  <div class="col-md-12 p-2">
                    <div class="row">
                      <div class="col-md-7">
                          <div class="search-wrapper  text-center">
                          <input class="form-control" type="text" v-model="search" placeholder="Buscar curso o Diplomado"/>
                           </div>  
                      </div>
                     <div class="col-md-2">
                        <h4>Categorías</h4>
                     </div>
                      <div class="col-md-3">
                      
                         <select v-model="selectedType" class="form-control">
                            
                            <option value="Ingeniería Civil">Ingeniería Civil</option>
                             <option value="Arquitectura">Arquitectura</option>
                            <option value="Estructuras y Bim">Estructuras y Bim</option>
                            <option value="Geología y Minería">Geología y Minería</option>
                            <option value="Carreteras">Carreteras</option>
                            <option value="Hidráulica, Hidrología y Riegos">Hidráulica, Hidrología y Riegos</option>
                            <option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
                            <option value="Ambiental y Seguridad Ocupacional
">Ambiental y Seguridad Ocupacional
</option>
                            <option value="Administración y Contabilidad">Administración y Contabilidad</option>
                            <option value="Derecho">Derecho</option>
                            <option value="Público en General">Público en General</option>
                            <option value="Idiomas">Idiomas</option>
                            <option value="Estudios Gubernamentales">Estudios Gubernamentales</option>                           
                            <option value="
Cursos Talleres Presenciales">
Cursos Talleres Presencialesa</option>
                            <option value="">Todas</option> 
                          </select> 
                      </div>
                    </div>
                    <hr>

                  </div>
                    
                 
                    <template  v-for="t in filteredList">
                    
                      <div :key="t.id+'-top'"
                        class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                        style="display: block; background-size: cover"
                      >
                      <div class="author_list_pp" 
                      style="background-size: cover; ">
                      <p 
                       :class="t.precio_carrito >= 300? 'colorDescuento_oscuro' : 'colorDescuento_claro'"
                     >
                        {{Descuento(t.precio_carrito,"textodescuento")}}% DTO
                      </p>
                      </div>
                       <router-link :to="'/curso/'+t.id"  >
                        <div
                          class="nft__item style-2"
                          style="background-size: cover"
                        >
                          <div
                            class="nft__item_wrap"
                            style="background-size: cover"
                          >
                           
                              <img
                                v-bind:src="'https://api.aulacersa.com:3006/images/cursos/'+t.imagen"
                                class="lazy nft__item_preview"
                                alt=""
                              />
                             
                          </div>
                          <div
                            class="nft__item_info"
                            style="background-size: cover"
                          >
                            
                              <h4>{{t.nombre_corto}}</h4>
                         
                            <div
                              class="nft__item_price"
                              style="background-size: cover"
                            > <span class="fs-2">S/ {{Descuento(t.precio_carrito,"descuento")}}</span>
                            
                                <br>
                                <span class="text-white">
                                Antes S/ {{t.precio_carrito}}
                                </span>
                               
                            </div>
                            <div
                              class="nft__item_action"
                              style="background-size: cover"
                            >
                            COMPRAR
                            </div>
                          </div>
                        </div>
                          </router-link>
                      </div>
                     
                    </template>
               
               
                 
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
        ColorDescuento:'color:black'
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
        
         }catch(error){
          console.log(error);
        }
           
    
      },
      Descuento(precio,valor){        
          if(precio>=0 && precio<=299){
            if(valor=="descuento"){
               return Math.round(precio*0.80)
            }
            else if(valor=="textodescuento"){
              return "20"
            }
            else if(valor=="color"){
               return "color:'red'"
            }else{
              console.log("Error de la variable");
            }           
          }
         else if(precio>=300 && precio<=399){
             if(valor=="descuento"){
               return Math.round(precio*0.70)
            }
            else if(valor=="textodescuento"){
              return '30'
            }
            else if(valor=="color"){
              return "color:'red'"
            }else{
              console.log("Error de la variable");
            }           
         }
          else if(precio>=400 && precio<=499){
            if(valor=="descuento"){
               return Math.round(precio*0.60)
            }
            else if(valor=="textodescuento"){
              return '40'
            }
            else if(valor=="color"){
              return "color:'red'"
            }else{
              console.log("Error de la variable");
            }           
         }
         if(precio>=500){
             if(valor=="descuento"){
               return Math.round(precio*0.50)
            }
            else if(valor=="textodescuento"){
              return '50'
            }
            else if(valor=="color"){
              return "#FFFF"
            }else{
              console.log("Error de la variable");
            }           
         }
      },
          
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
 

  }
}
</script>

<style>

</style>