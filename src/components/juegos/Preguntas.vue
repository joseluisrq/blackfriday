<template>
    <div>
        <Menu/>
       <div class="spacer-double"></div>
       <section aria-label="section" style="background-size: cover;" class="mt-4">
           <div class="container" style="background-size: cover;">
                <div class="row" style="background-size: cover;">
                    <div class="col-md-12" style="background-size: cover;">
                        <div class="d_profile de-flex" style="background-size: cover;">
                            <div class="de-flex-col" style="background-size: cover;">
                                <div class="profile_avatar" style="background-size: cover;">
                                    <img src="https://cersa.org.pe/assets_blackfriday/img/juego.png" alt="">
                                    <i class="fa fa-check"></i>
                                    <div class="profile_name" style="background-size: cover;">
                                        <h4>
                                           {{titutlojuego}}                                                
                                            <span class="profile_username">@jose Lucho</span>
                                       
                                            <button id="btn_copy" title="Copy Text">Gana un cupón hasta de S/20 </button>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="profile_follow de-flex" style="background-size: cover;">  
                                <div class="de-flex-col" style="background-size: cover;">
                                    <button v-on:click="MostrarPreguntas()" class="btn-main">Empezar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
               
			</div>
       </section>
       <section aria-label="section" style="background-size: cover;"  v-if="view==2">
				<div class="container" style="background-size: cover;">
					<div class="row" style="background-size: cover;">

						<div class="col-md-12" style="background-size: cover;">
                            <ul class="activity-list">
                                <template v-for=" p in preguntas_01" >
                                    <template v-if="p.tipo==tipopreguntas">
                                        <li class="act_follow" :key="p.id">                                          
                                         
                                            <div class="act_list_text" style="background-size: cover;">
                                                <h4>{{p.pregunta}}</h4>

                                            <template v-for="a in p.alternativa" 
                                            >
                                                <div  :key="a.id">
                                                   
                                                   
                                                <input type="radio" :id="a.text" :value="a" v-model="checked[p.id]"> 
                                                <label :for="a.text">{{a.text}}</label>

                                                    <br>
                                                </div>   
                                            </template> 
                                          
                                            
                                            </div>
                                        
                                        </li> 
                                    </template> 
                                </template>     
                                <button class="btn btn-danger" v-on:click="Calificar(checked)">ENVIAR RESPUESTAS</button>                       
                            </ul>
                           
                        </div>


					</div>

				</div>
			</section>
            <section v-else-if="view==3" aria-label="section" style="background-size: cover;" >
                <div class="container" style="background-size: cover;">
					<div class="row" style="background-size: cover;">

                        <div class="col-md-12" style="background-size: cover;">
                            <span class="filter__l">Felicitaciones Ganaste un cupón de </span>
                            <span class="filter__r fs-1 text-white">S/ {{cripto}}</span>
                            <br>
                            <h2>CUPÓN : {{cupon}}</h2>
                            <div class="spacer-half" style="background-size: cover;"></div>
                            <div class="clearfix" style="background-size: cover;"></div>
                            <ul class="activity-filter">
                                <li class="filter_by_sales">{{correctas}} Correctas</li>
                                <li class="filter_by_likes">{{incorrectas}} Incorrectas</li>                               
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
           
      
      <Footer/>
  </div>
</template>

<script>
import Menu from "../elements/HeaderPage.vue";
import Footer from "../elements/Footer.vue";
export default {
  name: 'Preguntas',
  data: function(){
    return{
        checked:[],       
      view:1,
      cupones_5:[
         {
           id:0,
           codigo: 'CUPO05'
         },
         {
           id:1,
           codigo: 'CUPO05'
         }
      ],
      cupones_10:[
          {
           id:0,
           codigo: 'CUPO05'
         },
         {
           id:1,
           codigo: 'CUPO05'
         }
      ],
      cupones_15:[
          {
           id:0,
           codigo: 'CUPO05'
         },
         {
           id:1,
           codigo: 'CUPO05'
         }
      ],
      cupones_20:[
          {
           id:0,
           codigo: 'CUPO05'
         },
         {
           id:1,
           codigo: 'CUPO05'
         }
      ],
      preguntas_01:[
          {
              id :0,
              pregunta:'Que color es el agua?',
              tipo:0,
              alternativa:[
                {
                    id:0,
                    text:'Azul',
                    estado:false
                },
                {
                    id:1,
                    text:'Verde',
                    estado:false
                },
                 {
                    id:2,
                    text:'Es Incoloro',
                    estado:true
                }
               
              ]
          },
          {
              id: 1,
              pregunta:'De que Color es el caballo rojo de San martin',
              tipo:0,
              alternativa:[
                {
                    id:0,
                    text:'Azul',
                    estado:false
                },
                {
                    id:1,
                    text:'Verde',
                    estado:false
                },
                {
                    id:2,
                    text:'Rojo',
                    estado:true
                },
                 {
                    id:3,
                    text:'Amrillo',
                    estado:true
                }
              ]  
          },
               {
              id: 2,
              pregunta:'De que Color es el caballo rojo de San martin',
              tipo:0,
              alternativa:[
                {
                    id:0,
                    text:'Azul',
                    estado:false
                },
                {
                    id:1,
                    text:'Verde',
                    estado:false
                },
                {
                    id:2,
                    text:'Rojo',
                    estado:true
                }
              ]  
          },
            {
              id: 3,
              pregunta:'Esta es una segunda pregunta?',
              tipo:1,
              alternativa:[
                {
                    id:0,
                    text:'Esta es la alternativa tres'
                },
                {
                    id:1,
                    text:'Esta es la alternativa cuatro'
                }
              ]  
          },
          
            {
              id: 4,
              pregunta:'Esta es una segunda pregunta?',
              tipo:2,
              alternativa:[
                {
                    id:0,
                    text:'Esta es la alternativa tres'
                },
                {
                    id:1,
                    text:'Esta es la alternativa cuatro'
                }
              ]  
          },
          
      ],
      respuesta_0:'',
      respuesta_1:'',
      respuesta_2:'',
      respuesta_3:'',

      titutlojuego:'',
      tipopreguntas:0,

      correctas:0,
      incorrectas:0,
      cripto:0,
      cupon:''
    }   
  },
  components: {
      Menu,
      Footer
    },
  mounted(){   
     this.mensaje = this.$route.params.id;
     this.Lista_de_Preguntas()
  },
  methods:{
      MostrarPreguntas(){
          this.view=2
          this.checked=[]
      },
      Lista_de_Preguntas(){
          if( this.$route.params.id==0)
          {
            this.view=true
            this.titutlojuego='Este es el Juego 01'
            this.tipopreguntas=0
          }
          else if(this.$route.params.id==1)
          {
            this.titutlojuego='Este es el Juego 02'
            this.view=true
             this.tipopreguntas=1
          }
          else if(this.$route.params.id==2)
          {
            this.titutlojuego='Este es el Juego 03'
            this.view=true
             this.tipopreguntas=2
          }
          else if(this.$route.params.id==3)
          {
            this.titutlojuego='Este es el Juego 04'
            this.view=true
             this.tipopreguntas=3
          }
          else if(this.$route.params.id==4)
          {
            this.titutlojuego='Este es el Juego 05'
            this.view=true
             this.tipopreguntas=4
          }
          else{
               this.view=true
          }
      },
      Calificar(respuestas){
          let criptos=0
          let correctas=0
          let incorrectas=0
          for (var i = 0; i < respuestas.length; i++) 
          {
            if(respuestas[i].estado==true){
                criptos=criptos+5;
                correctas=correctas+1;
            }
            else{
                incorrectas=incorrectas+1
            }
        }
        if(criptos==0){
            this.cupon='CERSA0'
        }else if(criptos==5){
             this.cupon='CERSA0'
        }else if(criptos==10){
            this.cupon='CERSA10'
        }
        else if(criptos==15){
             this.cupon='CERSA15'
        }
        else if(criptos==20){
            this.cupon='CERSA20'
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

