<template>
    <div class="personal">
        <header>
            <img src="../../assets/viewpager.png" alt="">
            <p>{{ hotelName }}</p>
        </header>
        <main class="edgegap">
            <van-row class="msg">
                <van-col span="12" class="title">工号：</van-col>
                <van-col span="12">001002</van-col>
                <van-col span="12" class="title">联系电话：</van-col>
                <van-col span="12">17788976542</van-col>
                <van-col span="12" class="title">岗位：</van-col>
                <van-col span="12">前端开发</van-col>
                <van-col span="12" class="title">所属组织：</van-col>
                <van-col span="12">{{ hotelName }}</van-col> 
                <van-col span="12" class="title">登录账号：</van-col>
                <van-col span="12">020001</van-col>  
            </van-row>
        </main>
        <div class="btns edgegap">
            <van-button type="warning" size="large" @click="quit">退出登录</van-button>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer.vue';
export default {
    components:{
        "Footer": Footer
    },
    data(){
        return{
            hotelName: '深圳北站店(测试酒店)'
        }
    },
    methods:{
        quit(){
            sessionStorage.token = '';
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>

<style scoped lang="scss">
    header{
        position: relative;
        p{
            position: absolute;
            bottom: 10px;
            right: 15px;
            color: #fff;
            z-index:9;
        }
    }
    main{
        padding-top: 10px;

    }
    .msg{
        background-color: #f2f2f2;
        text-align: left;
        padding: 10px 0;
        .van-col{
            margin: 10px 0;
        }
        .title{
            text-align: right;
        }
    }
    .btns{
        margin-top: 2rem;
    }
</style>
