<template>
    <div class="container px-5 main-container" style="margin-top: 100px;">
        <div class="row justify-content-center align-items-center ">
            <div class="col-md-6 main-img p-0 m-1">
                <img src="/image/main.JPG" alt="">
            </div>
            <p class="col-md-4 m-0 text-center">
                <span class="p-2 main-span mx-2 fs-5">這裡提供貼文業配服務。</span>
                <span class="p-2 main-span mx-2 fs-5">Wendyです。</span>
            </p>
        </div>
        <div class="row justify-content-evenly align-items-center my-5">
            <div class="col-md-6">
                <p>Drama Note 成立於2020年1月，累績至今已有<span class="highlight-span py-1 fw-bold">1.4萬粉絲</span>。
                </p>
                <p>粉專題材主要是日本文化、日本娛樂、日文學習相關，影劇方面則多方涉獵，舉凡美劇、韓劇、台劇、電影都有觀賞。</p>
                <p>
                    個人興趣廣泛，歡迎來信提案合作機會。
                </p>
            </div>
            <div class="col-md-6 main-img2 p-0">
                <img src="/image/TKLPAR59463-Edit_TP_V4.jpg" alt="">
            </div>

        </div>
    </div>
    <!-- section -->
    <div class="container menu-section py-5 my-5">
        <h2 class="text-center p-3 text-decoration-underline">MENU</h2>
        <div class="menu-img mx-3"></div>
        <h3 id="service" class="text-center py-5 text-decoration-underline">SERVICE</h3>


        <div class="row mx-3">
            <div v-for="shopItem in resultShopList" class="col-md-3 text-center p-2">
                <img class="rounded-circle my-5" :src="shopItem.imageUrl" alt="" width="150" height="150">
                <h4 class="eng-font text-decoration-underline">{{ shopItem.title }}</h4>
                <p>{{ shopItem.description }}</p>
                <div class="price-card p-3 my-5">
                    <h5 class="my-2 eng-font text-light border-bottom">PRICE</h5>
                    <p class="my-2">{{ shopItem.price }}元/則</p>
                </div>
                <button class="add-cart-btn" @click="addCart(shopItem.id)">加入購物車</button>
            </div>

            <p class="text-center py-3">※價錢是亂打的...</p>
        </div>
        <!-- flow -->
        <div class="cart-container">
            <div class="container">
                <div class="row text-center">
                    <div class="flow-card col">
                        <h4 class="my-5 num-stroke-font fw-bold fs-2">01</h4>
                        <img class="text-center" src="/image/11213_color.svg" alt="" width="150" height="150">
                        <h5 class="my-4 kanji-font fw-bold">提案</h5>
                        <p>來信告知需求與方向</p>
                    </div>
                    <div class="flow-card col">
                        <h4 class="my-5 num-stroke-font fw-bold fs-2">02</h4>
                        <img src="/image/10264_color.svg" alt="" width="150" height="150">
                        <h5 class="my-4 kanji-font fw-bold">討論</h5>
                        <p>雙方討論確認共識</p>
                    </div>
                    <div class="flow-card col">
                        <h4 class="my-5 num-stroke-font fw-bold fs-2">03</h4>
                        <img src="/image/8194_color.svg" alt="" width="150" height="150">
                        <h5 class="my-4 kanji-font fw-bold">簽約</h5>
                        <p>定案後簽約，甲方支付50%訂金</p>
                    </div>
                    <div class="flow-card col">
                        <h4 class="my-5 num-stroke-font fw-bold fs-2">04</h4>
                        <img src="/image/10342_color.svg" alt="" width="150" height="150">
                        <h5 class="my-4 kanji-font fw-bold">開始製作</h5>
                        <p>修改限三次內，乙方於期限內完成製作</p>
                    </div>
                    <div class="flow-card col">
                        <h4 class="my-5 num-stroke-font fw-bold fs-2">05</h4>
                        <img src="/image/2782_color.svg" alt="" width="150" height="150">
                        <h5 class="my-4 kanji-font fw-bold">結案</h5>
                        <p>乙方提交後台數據，甲方支付尾款，完成合作</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="text-center m-5">
            <h2 class="p-3 text-decoration-underline">CONTACT ME</h2>
            <p class="text-center py-3">※對、就是要註冊登入才能聯繫我</p>
            <a href="/signup" type="button" class="contact-btn m-3">Sign Up</a>
            <a href="/login" type="button" class="contact-btn m-3">Log In</a>
        </div>
 </div>       
</template>

<script>
// import { resourceLimits } from 'worker_threads'

export default {

    mounted() {
        this.axios.get('/shopList').then((response) => {
            console.log(response)
            this.resultShopList = response.data.data
        })
        this.axios.get('/cart').then((res) => {
            console.log(res)
        })
    },
    
    data() {
        return {
            resultShopList: []
        }
    },
    methods: {
        addCart(id) {
            console.log(this.axios)
            this.axios.post('/cart-add-item', { productId: id }).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log(response)
                this.$router.push('/cart')
            })
        }
    }


}

</script>

<style scoped>
.contact-btn {
    border: none;
    background-color: #4C4948;
    padding: 1rem 5rem;
    color: #fff;
    transition: .5s;
    font-family: 'Josefin Sans', sans-serif;
}

.contact-btn:hover {
    border-radius: 10px;
    transition: .5s;
}

.main-span {
    background-color: #fff;
    text-orientation: upright;
    writing-mode: vertical-lr;

}

.highlight-span {
    background-color: #FFF3AF;
}

.main-img {
    background-color: #efc591;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    width: 300px;
    height: 300px;
}

.main-img>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.main-img2 {
    overflow: hidden;
    object-fit: cover;
    background-color: #efc591;
    border-radius: 50%;
    width: 200px;
    height: 200px;
}

.main-img2>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}


.menu-section {
    background-color: #fff;
    border-radius: 20px;
}

.menu-img {
    background: url("~@/assets/image/ogasuta458A7738_TP_V4.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 500px;
    border-radius: 20px;
}

.price-card {
    background-color: #AFAFAF;
}

.price-card>* {
    color: #fff
}


.add-cart-btn {
    border: none;
    background-color: #4C4948;
    padding: 1rem 5rem;
    color: #fff;
    transition: .5s;
    font-family: 'Zen Maru Gothic', sans-serif;
}

.add-cart-btn:hover {
    border-radius: 10px;
    transition: .5s;
}

.cart-container {
    background-color: #FFFCF0;
}
</style>