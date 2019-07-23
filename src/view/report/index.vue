<template>
    <div class="report">
        <Header title="报表统计"></Header>
        <van-tabs v-model="active">
            <van-tab v-for="(item,index) in tabs" :key="index" :title="item">哈哈</van-tab>
        </van-tabs>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
export default {
    components:{
        "Header": Header,
        "Footer": Footer
    },
    data(){
        return{
            active: '1',
            tabs:[]
        }
    },
    created(){
        this.initAxios();
    },
    methods:{
        initAxios: async function(){
            // this.axios.get('https://www.easy-mock.com/mock/5d3515c953d30c72a5dab6af/wxpms/report')
            // .then((res) => {
            //     console.log(res)
            //     this.tabs = res.data.list;
            // }).catch((error) => {
            //     console.log(error)
            // })
            let params = {};
            const res = await this.http.get('/report',params)
            console.log(res)
            this.tabs = res.data.list;
        }
    }
}
</script>

<style>

</style>
