<template>
    <div class="text-center container-fluid" style="margin-top: 100px;">
        <h3 class="eng-font my-1 text-decoration-underline">Sign Up</h3>
        <form action="" class="my-5">
            <label for="" class="eng-font">Name</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="displayName" required>
            <br>
            <label for="" class="eng-font">Email</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="email" required>
            <br>
            <label for="" class="eng-font">Password</label>
            <br>
            <input type="password" class="p-2 m-2" v-model="password" required>
            <br>
            <button class="submit-btn m-3" @click.prevent="doSignUp">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        doSignUp() {
            console.log(this.axios)
            const submitForm = {
                displayName: this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/login')
                //TODO:導頁
            })
        }
    }
}

</script>

<style scoped>
input{
    width: 60%;
    border: none;
    background-color: #fff;
    height: 50px;
}

</style>