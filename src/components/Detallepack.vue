<template>

  <div class="no-bottom no-top" id="content" style="background-size: cover;">
         <Menu/>
            <div id="top" style="background-size: cover;"></div>
            

            <section aria-label="section" class="mt90 sm-mt-0" style="background-size: cover;">
                <div class="container" style="background-size: cover;">
                    <div class="row" style="background-size: cover;">
                      <div class="col-md-6">
                          <h2>{{curso.name}}</h2>
                          <p>Incluye : </p>
                          <ul class="text-white">
                            <li>{{curso.curso_uno}}</li>
                            <li>{{curso.curso_dos}}</li>
                            <li v-if="curso.id==1">{{curso.curso_tres}}</li>
                          </ul>
                          <p class="text-white">💻 Modalidad :  Asincrónica</p>
                          <hr>
                          <div class="row">
                            <div class="col-md-6">
                              <h5 style="color:#dc3545">Antes S/ {{curso.precio_antes}}<span class="text-warning"> -50%</span> </h5>
                              <h2>Ahora S/ {{curso.precio_ahora}}</h2>
                            </div>
                            <div class="col-md-6">
                             <div class="p-2 mt-2 text-center" style="#474747; background-size: cover;">
                                    <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" target="_bank">
                                        <input name="merchantId"  type="hidden"	    :value="merchantId" >
                                        <input name="accountId"  type="hidden"  	:value="accountId"  >
                                        <input name="description"  type="hidden" 	:value="curso.name" >
                                        <input name="referenceCode" type="hidden"	:value="referenceCode" >
                                        <input name="amount"    type="hidden"       :value="precio_payu" >
                                        <input name="tax"     type="hidden"      	:value="tax" >
                                        <input name="taxReturnBase" type="hidden"	:value="taxReturnBase" >
                                        <input name="currency"    type="hidden"  	:value="currency" >
                                        <input name="signature"  type="hidden"   	:value="firmaMd5" >
                                        <input name="test"    type="hidden"      	:value="test" > 
                                        <input class="btn btn-lg text-white" style="background-color:#dc3545" name="Submit" type="submit"  value="Comprar Ahora" >
                                        <br>
                                        <br>
                                    </form>		
                                 
                              
                                </div>
                            </div>
                          </div>
                      </div>  
                      <div class="col-md-6">
                         <img v-bind:src="curso.img" class="img-fluid" alt="">

                        
                      </div>
                    </div>
                </div>
            </section>
            
           <Footer/> 
        </div>
</template>

<script>
import packdatos from "../assets/json/pack.json";
import md5 from "md5"
import axios from "axios";
import Menu from "./elements/HeaderPage.vue";
import Footer from "./elements/Footer.vue";
export default {

  name: 'Detallepack',
   data: function(){
    return{
        idcurso: 0,
        curso:"",
        precio_descuento:0,
        msj_cupon:"",
        vista_cupon:true,
        semaforo_cupon:false,
        cantidad_cupon:0,

        //VARIABLES
        merchantId:"672878",
        accountId:"675550",
        referenceCode:"",
        precio_payu:"0",
        tax:"0",
        taxReturnBase:"0",
        currency:"PEN",
        firmaMd5:0,
        test:"",
        cupon:"",
        datospack:[],
        curso_del_pack:[]


        //pack
      

    }}
    , 
 methods:{ 
      scrollToTop() {
        window.scrollTo(0,0);
      },

      async ListarCursos(id, idcurso){
        try{
          var result=await axios({
            method:"POST",
            url: "https://api.aulacersa.com:3006/api",
            data:{
              query: `
                {
                     curso(id:`+idcurso+`){
                        id, 
                        nombre_corto,
                        imagen,
                        precio_carrito,
                        presentacion,
                        sesiones,
                        duracion,
                        subcategoria{
                          nombre
                        },
                    }
                }
              `
            }
          });
          this.curso_del_pack[id]=result.data.data.curso;
        console.log("esto esta jalando"+this.curso_del_pack[id]);
       // this.Descuento(this.curso.precio_carrito)
        
         }catch(error){
          console.log(error);
        }
           
    
      },
       Firma(){
         this.precio_payu=this.curso.precio_ahora
         console.log(this.precio_payu)
        let ApiKey='8F2c2g6pbSbzxou368MuxAP1Up';
        let merchantId = '672878';
        var randon =Math.floor(Math.random() * (999999999 - 1)) + 1;
        this.referenceCode = 'Cersa-'+randon
        //var $amount= this.precio_payu       
        var  firma= ApiKey+'~'+merchantId+'~'+this.referenceCode+'~'+this.precio_payu+'~PEN'
        this.firmaMd5 = md5(firma);
        console.log("quiere generar la firma: "+this.firmaMd5)
       
      },
      CargarDatos(){
         packdatos.map((item) => {
              if(item.id==this.idcurso) {                     
                 this.curso=item
                   /* item.cursos.map((i) => {
                     this.ListarCursos(i.id, i.idcurso)
                      console.log("esto es de dats-"+i.id, i.idcurso)           
            
                   })*/
                }   
            })
            this.Firma();
      }
      

 }, 
 components: {
      Menu,
      Footer
    },
  
   mounted(){   
     this.idcurso = this.$route.params.id;
     this.CargarDatos()
    this.scrollToTop()
   
  },

}
</script>

<style>

</style>