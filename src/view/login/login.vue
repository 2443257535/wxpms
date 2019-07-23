<template>
    <div class="login edgegap">
        <div class="forms">
            <p>登录</p>
            <van-cell-group class="edgegap">
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                    @input="changeInput"
                />
                <van-field 
                    v-model="password"
                    type="password"
                    required
                    label="密码"
                    placeholder="请输入密码"
                    @input="changeInput"
                />
            </van-cell-group>
            <div class="edgegap btns">
                <van-button type="warning" size="large" :disabled="disabled" @click="submitLogin">登录</van-button>
            </div>
            
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    components:{

    },
    data(){
        return{
           username: 'admin',
           password: '888888',
           disabled: true
        }
    },
    created(){
        this.changeInput();
    },
    methods:{
        changeInput(value){
            if(this.username != '' && this.password != ''){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
        },
        submitLogin(){
            if(this.username != 'admin'){
                this.$toast({
                    message:'用户名错误',
                    position: 'bottom'
                });
                return false;
            }
            if(this.password != '888888'){
                this.$toast({
                    message: '密码错误',
                    position: 'bottom'
                });
                return false;
            }
            sessionStorage.token = 'KLAJDLKFJOIWJELKADKLASD'
            this.$store.commit('updateToken',sessionStorage.token);
            this.$router.push({
                name: '/'
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.login{
    height: 100%;
    background: url('../../assets/loginbg.jpg') no-repeat 100% 100%;
    background-size: 100% 100%;
    position: fixed;
    width: 100%;
    .forms{
        background: $white;
        width: 100%;
        position: relative;
        top: 50%;
        height: 260px;
        margin-top: -130px;
        line-height: 40px;
        padding: 20px 0;
        border-radius: 15px;
        p{
            text-align: center;
        }
        .van-cell--required::before{
            left: -10px;
        }
    }
    .btns{
        margin-top: 30px;
    }
}
</style>
