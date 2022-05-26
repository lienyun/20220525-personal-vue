<template>
    <div class="text-center" style="margin-top: 100px;">
        <h3 class="eng-font my-1 text-decoration-underline">Log In</h3>
        <form action="" class="my-5">
            <label for="" class="eng-font">Email</label>
            <br>
            <input type="text" class="p-2 m-2" v-model="email" required/>
            <br>
            <label for="" class="eng-font">Password</label>
            <br>
            <input type="password" class="p-2 m-2" v-model="password" required>
            <br>
            <button class="submit-btn m-3" @click.prevent="doLogin">Log In</button>
        </form>
    </div>
</template>

<style scoped>
.title-underline {
    border-bottom: 1px solid #4C4948;
    width: 10%;
}

input{
    width: 60%;
    border: none;
    background-color: #fff;
    height: 50px;
}
</style>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.axios)
            const submitForm = {
                email: this.email,
                password: this.password
            }
            this.axios.post('/login', submitForm).then((response) => {
                console.log(response)
                const {msgCode,message} = response.data
                if(msgCode === 200) {
                    this.$router.push('/')
                }
            })
        }
    }
}

</script>