<template>

  <div class="no-bottom no-top" id="content" style="background-size: cover;">
         <Menu/>
            <div id="top" style="background-size: cover;"></div>
            

            <section aria-label="section" class="mt90 sm-mt-0" style="background-size: cover;">
                <div class="container" style="background-size: cover;">
                    <div class="row" style="background-size: cover;">
                      <div class="col-md-12">
                          <h2>{{curso.nombre_corto}}</h2>
                          <br>
                          <hr>
                      </div>
                        <div class="col-md-6 " style="background-size: cover;">
                           
                            <img v-bind:src="'https://api.aulacersa.com:3006/images/cursos/'+curso.imagen" class="img-fluid img-rounded mb-sm-30" alt="">
                                     <div class="row gx-2 mt-4" style="background-size: cover;">
                                            <div class="col-lg-4 col-md-6 col-sm-6" style="background-size: cover;">
                                                <a href="#" class="nft_attr">
                                                    <h5>Duración</h5>
                                                    <h4>{{curso.duracion}}</h4>
                                                 
                                                </a>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6" style="background-size: cover;">
                                                <a href="#" class="nft_attr">
                                                    <h5>Sesiones</h5>
                                                    <h4>{{curso.sesiones}}</h4>
                                                </a>
                                            </div>
                                          
                                                                           
                                        </div>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <h1>S/ {{precio_descuento}}</h1>
                                    <h3>Antes S/ {{curso.precio_carrito}}<br>
                                    Ahorras S/ {{curso.precio_carrito-precio_descuento}} <br>
                                    <span  class="text-success"  style="font-size:15px" v-if="semaforo_cupon">(Incluye
                                       Cupón de S/ {{cantidad_cupon}})</span></h3>
                                 <!--   <h1>{{Descuento(curso.precio_carrito)}}</h1>-->
                                </div>
                                
                            </div>
                            <div class="row mt-4">                                
                                
                                <div class="input-group mb-3 col-md-10" v-if="vista_cupon">
                                  <input type="text" class="form-control btn-sm" placeholder="Introduzca un código promocional" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                   v-model="cupon">
                                  <div class="input-group-append">
                                    <button class="btn btn-outline-danger " type="button"
                                     v-on:click="ValidarCupon(cupon)">Validar Cupón</button>
                                  </div>
                                
                                </div>

                                <p class="text-success"  :class="semaforo_cupon? 'text-success' : 'text-warning'">{{msj_cupon}}</p>
                               
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                    <img src="https://cersa.org.pe/premium/assets/images/cont/seguro.svg" width="20px" alt="">
                                    <span> Compra segura, protegemos tus datos</span>
                                </div>
                                <div class="col-md-12">
                                    <img src="https://cersa.org.pe/premium/assets/images/cont/tarjeta.png" width="100px" alt="">
                                    <span> Múltiples medios de pago</span>
                                </div>
                            </div>
                                <div class="p-2 mt-2 text-center" style="#474747; background-size: cover;">
                                    <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" target="_bank">
                                        <input name="merchantId"  type="hidden"	    :value="merchantId" >
                                        <input name="accountId"  type="hidden"  	:value="accountId"  >
                                        <input name="description"  type="hidden" 	:value="curso.nombre_corto" >
                                        <input name="referenceCode" type="hidden"	:value="referenceCode" >
                                        <input name="amount"    type="hidden"       :value="precio_payu" >
                                        <input name="tax"     type="hidden"      	:value="tax" >
                                        <input name="taxReturnBase" type="hidden"	:value="taxReturnBase" >
                                        <input name="currency"    type="hidden"  	:value="currency" >
                                        <input name="signature"  type="hidden"   	:value="firmaMd5" >
                                        <input name="test"    type="hidden"      	:value="test" > 
                                        <input class="btn-main btn-lg" name="Submit" type="submit"  value="Comprar Ahora" >
                                        <br>
                                        <br>
                                    </form>		
                                 
                              
                                </div>
                              
                   
                        </div>
                        <div class="col-md-6" style="background-size: cover;">
                            <div class="item_info" style="background-size: cover;">
                             
                             
                             
                            
                                <p class="text-white" v-html="curso.presentacion"></p>

                             
                                <div class="de_tab tab_simple row" style="background-size: cover;">
    
                             

                                <div class="spacer-10" style="background-size: cover;"></div>

                                <!-- Button trigger modal -->

                                  <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" target="_bank" class="text-center">
                                        <input name="merchantId"  type="hidden"	    :value="merchantId" >
                                        <input name="accountId"  type="hidden"  	:value="accountId"  >
                                        <input name="description"  type="hidden" 	:value="curso.nombre_corto" >
                                        <input name="referenceCode" type="hidden"	:value="referenceCode" >
                                        <input name="amount"    type="hidden"       :value="precio_payu" >
                                        <input name="tax"     type="hidden"      	:value="tax" >
                                        <input name="taxReturnBase" type="hidden"	:value="taxReturnBase" >
                                        <input name="currency"    type="hidden"  	:value="currency" >
                                        <input name="signature"  type="hidden"   	:value="firmaMd5" >
                                        <input name="test"    type="hidden"      	:value="test" > 
                                        <input class="btn-main btn-lg" name="Submit" type="submit"  value="Comprar Ahora" >
                                    </form>		
                                &nbsp;
                                <a href="#" class="btn-main btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#place_a_bid">
                                 Escríbenos
                                </a>
                                
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
           <Footer/> 
        </div>
</template>

<script>

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
        cupon:""

    }}
    , 
 methods:{ 
      scrollToTop() {
        window.scrollTo(0,0);
      },
      async ListarCursos(id){
        try{
          var result=await axios({
            method:"POST",
            url: "https://api.aulacersa.com:3006/api",
            data:{
              query: `
                {
                     curso(id:`+id+`){
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
          this.curso=result.data.data.curso;
        console.log(this.curso.precio_carrito);
        this.Descuento(this.curso.precio_carrito)
        
         }catch(error){
          console.log(error);
        }
           
    
      },
       Firma(){
        let ApiKey='8F2c2g6pbSbzxou368MuxAP1Up';
        let merchantId = '672878';
        var randon =Math.floor(Math.random() * (999999999 - 1)) + 1;
        this.referenceCode = 'Cersa-'+randon
        //var $amount= this.precio_payu       
        var  firma= ApiKey+'~'+merchantId+'~'+this.referenceCode+'~'+this.precio_payu+'~PEN'
        this.firmaMd5 = md5(firma);
        console.log("quiere generar la firma: "+this.firmaMd5)
       
      },
      Descuento(precio){
            if(precio>=0 && precio<=299){           
                this.precio_payu=Math.round(precio*0.80)                

             }
            else if(precio>=300 && precio<=399){
               this.precio_payu=Math.round(precio*0.70)
            }
             else if(precio>=400 && precio<=499){
               this.precio_payu=Math.round(precio*0.60)
            }
            else if(precio>=500){
              this.precio_payu=Math.round(precio*0.50)
            }
            else{
              this.precio_payu=0
              .console.log("ERROR NO GENERO PRECIO CON DESCUENTO")
            }
          this.precio_descuento=this.precio_payu
          console.log("paso por descuento"+this.precio_payu);
          this.Firma()
      },
      ValidarCupon(cupon){
          let estado_cupon=true
          let cantidad=0
          let c= (cupon.trim()).toUpperCase() 
          console.log(c)
          if(c=="CERSA10"){
              this.precio_payu=parseFloat(this.precio_payu)-parseFloat(10)
              cantidad=10
          }
          else if(c=="CERSA20"){
              this.precio_payu=parseFloat(this.precio_payu)-parseFloat(20)
              cantidad=20
          }
          else if(c=="CERSA30"){
             this.precio_payu=parseFloat(this.precio_payu)-parseFloat(30)
              cantidad=30
          }
          else{
            estado_cupon=false
             this.msj_cupon="😿 Código Incorrecto, verifica tu cupón"
          }
          //validando el cupon
          if(estado_cupon==true){
            this.msj_cupon="💊 Cupón Correcto, descuento aprobado"
            this.vista_cupon=false
            this.semaforo_cupon=true
            this.cantidad_cupon=cantidad

          }
          this.Firma()
          this.precio_descuento=this.precio_payu
          console.log(this.precio_descuento)
      }
      

 }, 
 components: {
      Menu,
      Footer
    },
  
   mounted(){   
     this.idcurso = this.$route.params.id;
    this.ListarCursos(this.idcurso)
    this.scrollToTop()
   
  },

}
</script>

<style>

</style>