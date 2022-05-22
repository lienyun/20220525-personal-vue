<template>
    <div class="text-center" style="margin-top: 100px;">
        <div class="title-underline mx-auto">
            <h3 class="eng-font my-1">Sign Up</h3>
        </div>
        <form action="" class="my-5">
            <label for="" class="eng-font">Name</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="displayName">
            <br>
            <label for="" class="eng-font">Email</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="email">
            <br>
            <label for="" class="eng-font" >Password</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="password">
            <br>
            <button class="contact-btn m-3" @click.prevent="doSignUp">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default{
    data() {
        return {
            displayName: '',
            email: '',
            password: ''
        }
    },
    methods:{
        doSignUp(){
            console.log(this.axios)
            const submitForm = {
                displayName:this.displayName,
                email:this.email,
                password:this.password
            } 
            this.axios.post('/signup',submitForm).then((response) => {
                console.log(response)
            })
        }
    }
}

</script>

<style>

</style>