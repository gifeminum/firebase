<template>
    <div class="row">
        <h2>Sign Up</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">

            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success btn-block full-width" @click="signUp">Sign up</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data(){
        return{
            formData:{
                email: '',
                password: ''
            }

        }
    },
    methods: {
        signUp(){
            firebase.auth()
            .createUserWithEmailAndPassword(this.formData.email,this.formData.password)
            .then(user=>{
                this.$router.replace('/movie')
            })
            .catch(e =>{
                alert(e.message)
            })
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>