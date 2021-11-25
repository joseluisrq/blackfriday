<template>
   <header class="transparent scroll-dark mt-4 ">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex sm-pt10">
                  <div class="de-flex-col">
                    <div class="de-flex-col">
                      <!-- logo begin -->
                      <div id="logo">
                        <a href="/">
                          <img
                            alt=""
                            src="https://cersa.org.pe/assets_2/media/logos/logo.png"
                            width="150px"
                          />
                        </a>
                      </div>
                      <!-- logo close -->
                    </div>
                  </div>
                  <div class="de-flex-col header-col-mid">
                    <!-- mainmenu begin -->

                      <a href="https://api.whatsapp.com/send?phone=51992256742&text=Estoy%20interesado%20en%20la%20promoci%C3%B3n%20del%20Black%20Friday" 
                      target="_bank"
                      class="btn  btn-wallet text-center text-white"
                      style="font-size:18px; background-color:#dc3545"
                        ><img src="https://cersa.org.pe/assets_blackfriday/img/wtsp.png" width="18px" alt=""><span> Escríbenos</span></a
                      >
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
</template>

<script>
export default {
 name: 'HeaderPage',
  props: {
    msg: String
  },
}
</script>

<style>

</style>