<template>
    <div class="home">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/viewpager.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/viewpager.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="main">
            <div class="lump">
                <p><span>客房管理</span></p>
                <van-row class="edgegap">
                    <van-col :span="6"><van-button type="warning" size="large">脏房</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">服务</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">查退</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">便利店</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">借物</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">失物</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">查房</van-button></van-col>
                    <van-col :span="6"><van-button type="warning" size="large">维修</van-button></van-col>
                </van-row>
            </div>
            <div class="lump">
                <p><span>审核中心</span></p>
                <van-row class="edgegap">
                    <van-col span="6"><van-button type="warning" size="large">房价申请</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large" disabled>活动申请</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large" disabled>用电审批</van-button></van-col>
                </van-row>
            </div>
            <div class="lump">
                <p><span>平台管理</span></p>
                <van-row class="edgegap">
                    <van-col span="6"><van-button type="warning" size="large" disabled>微信开关</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large" disabled>其它开关</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large">酒店点评</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large">活动留言</van-button></van-col>
                </van-row>
            </div>
            <div class="lump">
                <p><span>综合服务</span></p>
                <van-row class="edgegap">
                    <van-col span="6"><van-button type="warning" size="large">通讯录</van-button></van-col>
                    <van-col span="6"><van-button type="warning" size="large">系统商</van-button></van-col>
                </van-row>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer.vue';
export default {
    components:{
        "Footer": Footer
    }
}
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";
.home{
    .main{
        margin-top: 10px;
        .lump{
            padding-top: 20px;
            p{
                height: 20px;
                border-top: 1px solid $orange;
                position: relative;
                span{
                    position: absolute;
                    top: -10px;
                    background-color: $orange;
                    color: $white;
                    padding: 4px 15px;
                }
            }
            .van-col{
                padding: 5px;
            }
        }
    }
}
</style>
