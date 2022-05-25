<template>

    <div class="container" style="margin-top: 100px;">
        <div class="m-5">
            <h3 class="text-center text-decoration-underline">CART</h3>
        </div>
        <div class="container">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cart in resultCartList">
                        <td>{{ cart.title}}</td>
                        <td>{{ cart.cartItem.quantity }}</td>
                        <td>{{ cart.price }}</td>
                        <td><button class="submit-btn" @click="removeResult(cart.id)">Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</template>

<style scoped>
table {
    background-color: #fff;

}
</style>

<script>
export default {
    inject:['reload'],//注入App裡的reload方法

    mounted() {
        this.axios.get('/cart').then((res)=> {
            console.log(res)
            const {products:resultCartList} = res.data
            this.resultCartList = resultCartList
        })
    },
    data() {
        return {
            resultCartList: [],
            description: '',
            quantity: '',
            price: ''
        }
    },
    methods: {
        removeResult(id) {
            this.axios.post('/cart-delete-item',{productId:id}).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log(response)
                this.reload()
            })
        },
        
    }
}



</script>