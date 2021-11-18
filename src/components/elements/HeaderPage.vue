<template>
   <header class="transparent scroll-dark">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex sm-pt10">
                  <div class="de-flex-col">
                    <div class="de-flex-col">
                      <!-- logo begin -->
                      <div id="logo">
                        <a href="03_grey-index.html">
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

                    <!-- mainmenu close -->
                    <div class="menu_side_area mt-4">
                      <a href="03_grey-wallet.html" class="btn-main btn-wallet"
                        ><i class="icon_wallet_alt"></i
                        ><span>Escríbenos</span></a
                      >
                      <span id="menu-btn"></span>
                    </div>
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