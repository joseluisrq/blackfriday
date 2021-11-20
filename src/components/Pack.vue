<template>
   <section id="section-collections" class="pt30 pb30">
            <div class="container">
              <div class="row wow fadeIn">
                <hr />
                <div class="col-lg-12">
                  <h2 class="style-2">SUPER PACK</h2>
                  <h3>Obten bla bla</h3>
                </div>

                <div id="items-carousel" class="owl-carousel wow fadeIn">
                  <!-- Lista de Pack-->
                  <template v-for="p in pack">
                    <div class="d-item" :key="p.id">
                      <div class="nft__item style-2">
                        <div
                          class="de_countdown"
                          data-year="2021"
                          data-month="11"
                          data-day="20"
                          data-hour="18"
                        ></div>
                        <div class="author_list_pp">
                          <img
                            class="lazy"
                            v-bind:src="p.icon"
                            alt=""
                          />
                          <i class="fa fa-check"></i>
                        </div>
                        <div class="nft__item_wrap">
                          <a href="03_grey-item-details.html">
                            <img
                              v-bind:src="p.img"
                              class="lazy nft__item_preview"
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="nft__item_info">
                          <a href="03_grey-item-details.html">
                            <h4 v-text="p.name"></h4>
                          </a>

                          <div class="nft__item_price">
                            <strike>Antes {{p.precio_antes}}</strike>
                            <span class="fs-1">{{p.precio_ahora}}</span>
                          </div>
                          <div class="nft__item_action mt-4">
                            <button class="btn-main wow fadeInUp lead" href="#">
                              Adquirir Paquete
                            </button>
                          </div>
                          <div class="nft__item_like text-white">
                            <p>
                              <img
                                src="https://cersa.org.pe/assets_blackfriday/img/juego.png"
                                alt=""
                              />50
                            </p>
                          </div>
                          <br />
                        </div>
                      </div>
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
                name:'Pack 01',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'
            },
            {
                id:2,
                name:'Pack 02',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'
            },
            {
                id:3,
                name:'Pack 03',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'
            },
            {
                id:4,
                name:'Pack 04',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'
            },
            {
                id:5,
                name:'Pack 5',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'
            },
            {
                id:6,
                name:'Pack 6',
                img:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                icon:'https://cersa.org.pe/assets_blackfriday/img/juego.png',
                precio_antes: 'S/ 400',
                precio_ahora: 'S/ 89'

            }
           
           
        ]
       }
   }
}
</script>

<style>

</style>