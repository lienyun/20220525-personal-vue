<template>
  <nav class="container-fluid fixed-top m-0">
    <div class="row justify-content-evenly p-3">
      <a href="/" class="col-md-4">
        <h4 class=" my-auto eng-font px-5">Wendy Chang</h4>
      </a>
      <ul class="col-md-8 my-auto">
        <div class="row justify-content-evenly text-center eng-font px-5">
          <li class="col p-0">
            <router-link to="/login">LOG IN</router-link>
          </li>
          <li class="col p-0">|</li>
          <li class="col p-0">
            <router-link to="/signup">SIGN UP</router-link>
          </li>
          <li class="col p-0">|</li>
          <li class="col p-0">
            <router-link to="/cart"><i class="fa-solid fa-cart-shopping"></i> CART</router-link>
          </li>
          <li class="col p-0">|</li>
          <li class="col p-0">
            <a href="https://www.instagram.com/drama.note/"><i class="fa-brands fa-instagram"></i></a>
          </li>


        </div>
      </ul>
    </div>
  </nav>
  <router-view v-if="isRouterAlive">
  </router-view>


  <footer class="py-5 container-fluid">
    <div class="container-fluid">
      <div class="row px-5 justify-content-center">
        <div class="col-md-3">
          <img src="/image/main.JPG" alt="" width="200" height="200">
          <p class="my-3 fs-4 fw-bold eng-font text-light">Wendy Chang</p>
          <p class="eng-font text-light">Email: didramanote@gmail.com</p>
          <a href="/login" type="button" class="footer-btn">Log In</a>
        </div>
        <div class="col-md-3 align-items-center">
          <div class="m-3"><a class="text-light text-decoration-none eng-font" href="">Instagram</a></div>
          <div class="m-3"><a class="text-light text-decoration-none eng-font" href="">Facebook</a></div>
          <div class="m-3"><a class="text-light text-decoration-none eng-font" href="">LinkedIn</a></div>
          <div class="m-3"><a class="text-light text-decoration-none eng-font" href="">Blog</a></div>

        </div>
        <div class="col-md-5">
          <p class="text-light">※公關品請寄7-ELEVEN 塔優門市※</p>
          <iframe class=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2406866444603!2d121.56395338475706!3d25.05983015504729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab8e0f4b38dd%3A0x16726fa7e0403a47!2zNy1FTEVWRU4g5aGU5YSq6ZaA5biC!5e0!3m2!1szh-TW!2stw!4v1653051398351!5m2!1szh-TW!2stw"
            width="auto" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <p class="text-center eng-font text-light my-3">Copyright © Wendy Chang All Rights Reserved.</p>
  </footer>

</template>

<style scoped>
input {
  border: none;
  background-color: #fff;
  height: 50px;
}
</style>


<script>

export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}




</script>


