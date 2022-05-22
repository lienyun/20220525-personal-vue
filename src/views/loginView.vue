<template>
    <div class="text-center" style="margin-top: 100px;">
        <div class="title-underline mx-auto">
            <h3 class="eng-font my-1">Log In</h3>
        </div>
        <form action="" class="my-5">
            <label for="" class="eng-font">Email</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="email" />
            <br>
            <label for="" class="eng-font">Password</label>
            <br>
            <input type="text" class="p-2 m-2"  v-model="password">
            <br>
            <button class="contact-btn m-3" @click.prevent="doLogin">Log In</button>
        </form>
    </div>
</template>

<style>
.title-underline {
    border-bottom: 1px solid #4C4948;
    width: 10%;
}
</style>

<script>
export default{
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        doLogin(){
            console.log(this.axios)
            const submitForm = {
                email:this.email,
                password:this.password
            } 
            this.axios.post('/login',submitForm).then((response) => {
                console.log(response)
            })
        }
    }
}

</script>