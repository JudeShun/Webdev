<template>
    <div id="log in">
        <h1>Login</h1>
        <input type="text" name="username" v-model="inpur.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password">
        <button type="button" v-on:click="login()">Login</button>
    <div class = "col-if -4 -auto" style = "margin -top:25px" v-show="text">
        <input type="text" class="form-control" v-model="message"/>
    </div>
    
    
</template>    
    <script>
        export default{
            name:'Login',
            data(){
                return{
                    input:{
                        username:"",
                        password:""
                }

                }
            },
            methods:{
                login(){
                    if(this.input.username !="" && this.input.password !=""){
                        if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password ){
                            this.$emit("authenticated",true);
                            this.$router.replace({name: "secure"});
                        }else{
                            console.log("The username and / or password is incorrect");

                        }else{
                            console.log("A username and password must be present");
                        }
                    }

                },
             beforeCreate(){
                console.log("beforeCreate")
            },
            created(){
                console.log("created")
            },
            beforeMount(){
                console.log("beforeMounted")
            },
            mounted(){
                console.log("mounted")
            },
            beforeUpdate(){
                console.log("beforeUpdated")
            },
            updated(){
                console.log("updated")
            },
            beforeDestroyed(){
                console.log("destroyed")
            },
            data(){

            }

        }
        </script>
        <style scoped>
            #login{
                width:400px;
                border:1px solid #CCCCCC;
                background-color:#FFFFFF;;
                margin:auto;
                margin-top:200px;
                padding:20px;
            }
        
        </style>>
        
        data(){
            return {
                input:{
                    username:"",
                    password:""

                }
            }
        }
        