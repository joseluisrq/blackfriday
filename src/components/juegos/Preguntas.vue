<template>
    <div>
        <Menu/>
       <div class="spacer-double"></div>
       <section aria-label="section" style="background-size: cover;padding-bottom:0px !important"  class="">
           <div class="container" style="background-size: cover;">
                <div class="row" style="background-size: cover;">
                    <div class="col-md-12" style="background-size: cover;">
                        <div class="d_profile de-flex" style="background-size: cover;">
                           
                                <div class="profile_avatar" style="background-size: cover;">
                                    <img v-bind:src="imagen" alt="" class="img-fluid">
                                    <i class="fa fa-check"></i>
                                    <div class="profile_name" style="background-size: cover;">
                                        <h4>
                                           {{titutlojuego}}                                             
                                            <br>
                                            <br>
                                            <span style="font-size:20px" class=" bg bg-warning p-2">Gana un cupón hasta de S/30 </span><br><br>

                                                <div class="text-right">
<button v-on:click="MostrarPreguntas()" class="btn-main">Empezar</button>
                        </div>
                                        </h4>
                                      
                                    </div>
                                     
                                </div>
                          
                           

                        </div>
                    
                        
                    </div>
                </div>
               
			</div>
       </section>
       <section aria-label="section" style="background-size: cover;"  v-if="view==2">
				<div class="container" style="background-size: cover;">
				
				
                            <ul class="activity-list">
                                <template v-for=" p in preguntas_juego" >
                                   
                                        <li class="act_follow" :key="p.id">   
                                            
                                                <h3>{{p.pregunta}}</h3>

                                            <template v-for="a in p.alternativa" 
                                            >
                                                <div  :key="a.id">
                                                   
                                                   
                                                <input class="form-check-input" type="radio"  :id="a.text" :value="a" v-model="checked[p.id]"> 
                                                <label class="form-check-label text-white fs-5 " :for="a.text">&nbsp; {{a.text}}</label>

                                                    <br>
                                                </div>   
                                            </template> 
                                          
                                            
                                        
                                        </li> 
                                   
                                </template>     
                                <button class="btn btn-danger" v-on:click="Calificar(checked)">ENVIAR RESPUESTAS</button>                       
                            </ul>
                           
                     

				</div>
			</section>
            <section v-else-if="view==3" aria-label="section" style="background-size: cover;" >
                <div class="container" style="background-size: cover;">
					<div class="row" style="background-size: cover;">

                        <div class="col-md-12" style="background-size: cover;">
                            <span class="filter__l fs-2 text-white">Felicitaciones Ganaste un cupón de : </span>
                            <span class="fs-1 text-white">S/ {{cripto}}</span>
                            <br>
                            <h2>CUPÓN : {{cupon}}</h2>
                          
                            <div class="clearfix" style="background-size: cover;"></div>
                            <ul class="activity-filter">
                                <li class="filter_by_sales">{{correctas}} Correctas</li>
                                <li class="filter_by_likes">{{incorrectas}} Incorrectas</li>                               
                            </ul>

                        </div>
                    </div>
                    <hr>
                     <h2>Utiliza tu cupón en estos cursos 👇</h2>
                </div>
               
                <Top/>
            </section>
           
      
      <Footer/>
  </div>
</template>

<script>
import datos from "../../assets/json/preguntas.json";
import Menu from "../elements/HeaderPage.vue";
import Footer from "../elements/Footer.vue";
import Top from "../Top.vue";
export default {
  name: 'Preguntas',
  data: function(){
    return{
        checked:[],       
      view:1, 
      preguntas_juego:[]      ,  
      
      respuesta_0:'',
      respuesta_1:'',
      respuesta_2:'',
      respuesta_3:'',

      titutlojuego:'',
      tipopreguntas:800,

      correctas:0,
      incorrectas:0,
      cripto:0,
      cupon:'',
      imagen:'',
      idjuego:781
    }   
  },
  components: {
      Menu,
      Footer,
      Top
    },
  mounted(){   
     //this.mensaje = this.$route.params.id;
     //this.$route.params.id;
     this.idjuego=this.$route.params.id
     this.Lista_de_Preguntas(this.idjuego)
    
    
     
  },
  methods:{
      Cargar_Preguntas(){
            let pro=[]
            var contador=0
           
            datos.map((item) => {
                if(item.tipo==this.idjuego) {                     
                    pro[contador]=item    
                    contador++;
                }
               
                   
            })
           // console.log(pro)
            for (let index = 0; index <= 2; index++) {              
                this.preguntas_juego[index]=pro[Math.floor(Math.random()*((pro.length)+0))]
                
            }
       //  console.log(pro)
       // console.log(this.preguntas_juego)
      },
      MostrarPreguntas(){
          this.view=2
          this.checked=[]
      },
      Lista_de_Preguntas(idcurso){
          
          if( idcurso==0)
          {

            this.view=true
            this.titutlojuego='Control Acuático'
            this.imagen='https://cersa.org.pe/assets_blackfriday/img/1_icon_agua.png'
            this.tipopreguntas=0
            
          }
          else if(idcurso==1)
          {
            this.titutlojuego='Control Tierra'
            this.view=true
            this.imagen='https://cersa.org.pe/assets_blackfriday/img/2_icon_tierra.png'
             this.tipopreguntas=1
          }
          else if(idcurso==2)
          {
            this.titutlojuego='Super Resistencia'
            this.view=true
            this.imagen='https://cersa.org.pe/assets_blackfriday/img/3_icon_construccion.png'
             this.tipopreguntas=2
          }
          else if(idcurso==3)
          {
            this.titutlojuego='Control de Energía'
            this.view=true
            this.imagen='https://cersa.org.pe/assets_blackfriday/img/4_icon_energia.png'
             this.tipopreguntas=3
          }
          else if(idcurso==4)
          {
            this.titutlojuego='Control de Software'
            this.view=true
            this.imagen='https://cersa.org.pe/assets_blackfriday/img/5_icon_software.png'
             this.tipopreguntas=4
          }
          else{
               this.view=false
               this.tipopreguntas=700
               console.log("El jeugo no existe")
             
          }
          this.Cargar_Preguntas()

      },
      Calificar(respuestas){
           window.scrollTo(0,0);
          this.checked=[]
          let criptos=0
          let correctas=0
          let incorrectas=0
          let contador=0

         respuestas.map((item) => {
             console.log(item)
             if(item.id!=null)
             {this.checked[contador]=item 
              contador++}         
        })

         for (var i = 0; i < this.checked.length; i++) 
          {
            if(this.checked[i].estado==true){
                criptos=criptos+10;
                correctas=correctas+1;
            }
            else{
                incorrectas=incorrectas+1
            }
        }
        if(criptos==0){
            this.cupon='CERSA0'
        }else if(criptos==10){
             this.cupon='CERSA10'
        }else if(criptos==20){
            this.cupon='CERSA20'
        }
        else if(criptos==30){
             this.cupon='CERSA30'
        }else{
            console.log("Error")
        }

        this.correctas=correctas
        this.incorrectas=incorrectas
        this.cripto=criptos
        this.view=3

        console.log(criptos);
      }
  }
}
</script>

