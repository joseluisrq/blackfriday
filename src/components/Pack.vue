<template>
   <section id="section-collections" class="pt30 pb30">
            <div class="container">
              <div class="row wow fadeIn">
                <hr />
                <div class="col-lg-12">
                  <h2 class="style-2">SUPER PACKs</h2>
                  <h3>Incluye de 2 a más cursos que se complementan </h3>
                </div>

                <div id="items-carousel" class="owl-carousel wow fadeIn">
                  <!-- Lista de Pack-->
                  <template v-for="p in pack">
                    <div class="d-item" :key="p.id">
                       <router-link :to="'/detalle/'+p.id"  >
                      <div class="nft__item style-2">
                      
                        <div class="nft__item_wrap">
                        
                            <img
                              v-bind:src="p.img"
                              class="lazy nft__item_preview"
                              alt=""
                            />
                        
                        </div>
                        <div class="nft__item_info">                         
                            <h3 class="mt-4" v-text="p.name"></h3>
                            <ul class="text-white" style="font-size:14px">
                              <li>{{p.curso_uno}}</li>
                             <li>{{p.curso_dos}}</li>
                             <li v-if="p.id==1">{{p.curso_tres}}</li>
                            </ul>
                          
                          <div class="nft__item_price text-center">
                          Antes {{p.precio_antes}} (-50% dto) <br>
                            <span class="fs-1">{{p.precio_ahora}}</span>
                          </div>
                          <div class="nft__item_action mt-4 text-center">
                            <button class="btn-main wow fadeInUp lead" href="#">
                              Adquirir Paquete
                            </button>
                          </div>
                          <!--
                          <div class="nft__item_like text-white">
                            <p>
                              <img
                               v-bind:src="p.icon"
                                alt="" 
                              />50
                            </p>
                          </div>
                          -->
                          <br />
                        </div>
                      </div>
                         </router-link>
                    </div>
                  </template>
                </div>
              </div>

           

              <div class="spacer-double"></div>

            </div>
          </section>
</template>

<script>
export default {
    name:'Pack',
     data: function()
   {
       return{
                pack:[
            {
                id:1,
                name:'PACK : Control Acuático',
                curso_uno:"ESTUDIO DE CUENCAS CON ARCGIS v10.8 USANDO DEMs",
                curso_dos:"MODELAMIENTO HIDRÁULICO CON HEC-RAS v.6.0",
                curso_tres:"MODELAMIENTO HIDROLÓGICO CON HEC-HMS v4.8",               
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_1_agua.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/1_icon_agua.png',
                precio_antes: 'S/ 370',
                precio_ahora: 'S/ 185'
            },
            {
                id:2,
                name:'PACK : Control Acuático',
                curso_uno:"DIPLOMADO EN DISEÑO, RESIDENCIA Y SUPERVISIÓN DE OBRAS HIDRÁULICAS",
                curso_dos:"DIPLOMADO EN DISEÑO DE PRESAS DE TIERRA Y CONCRETO 2021",
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_2_agua.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/1_icon_agua.png',
                precio_antes: 'S/ 800',
                precio_ahora: 'S/ 400'
            },
            {
                id:3,
                name:'PACK : Control Tierra',
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_3_tierra.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                curso_uno:"DIPLOMADO DE ESPECIALIZACIÓN EN MECÁNICA DE ROCAS APLICADA A LA ESTABILIDAD DE TALUDES 2021",
                curso_dos:"GESTIÓN DE RIESGOS DE DESASTRES CON ARCGIS y QGIS",               
                precio_antes: 'S/ 650',
                precio_ahora: 'S/ 325'
            },
            {
                id:4,
                name:'PACK : Super Resistencia',
                curso_uno:"DIPLOMADO EN DISEÑO DE CIMENTACIONES",
                curso_dos:"CÁLCULO Y DISEÑO CON GEOSINTÉTICOS 2021",
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_4_resistencia.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 700',
                precio_ahora: 'S/ 350'
            },
            {
                id:5,
                name:'PACK  : Control de Energía',
                curso_uno:"PANELES FOTOVOLTAICOS PARA BAJA TENSIÓN ",
                curso_dos:"DIPLOMADO EN CENTRALES HIDROELÉCTRICAS 2021",
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_5_energia.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 650',
                precio_ahora: 'S/ 325'
            },
            {
                id:6,
                name:'PACK : Control de Software',
                curso_uno:"METRADOS CON BIM REVIT - NAVISWORKS ",
                curso_dos:"ANÁLISIS, DISEÑO Y MODELAMIENTO CON ROBOT STRUCTURAL ANALYSIS PROFESSIONAL NIVEL BÁSICO - INTERMEDIO - AVANZADO",
                img:'https://cersa.org.pe/assets_blackfriday/img/pack_6_software.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 600',
                precio_ahora: 'S/ 300'
            }
           
           
        ]
       }
   }
}
</script>

<style>

</style>