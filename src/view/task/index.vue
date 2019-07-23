<template>
    <div class="task">
        <Header title="任务看板"></Header>
        <div class="main">
            <div class="task-list">
                <van-row class="edgegap" v-for="(item,index) in list" :key="index">
                    <van-col class="border-bottom" span="12"><span class="task-type">{{ item.type }}</span></van-col>
                    <van-col v-if="item.name != ''" span="12" class="right"><span class="room-type">{{ item.name }}</span></van-col>
                    <van-col v-else span="12" class="right"><span class="room-type">默认价</span></van-col>
                    <van-col span="12"><span class="time">{{ item.date }}</span></van-col>
                    <van-col span="12" class="right"><span class="hotel-name">银川火车站店</span></van-col>    
                </van-row>
                
            </div>
        </div>
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
            list:[]
        }
    },
    created(){
        this.initAxios();
    },
    methods:{
        initAxios: async function(){
            let parmary = {};
            const res = await this.http.get('/task',parmary);
            this.list = res.data.ret.list;
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/index.scss';
.task{
    background-color: #f2f2f2;
    .task-list{
        .van-row{
            background-color: $white;
            margin-top: 10px;
        }
        .van-col{
            padding: 5px 0;
        }
        .border-bottom{
            border-bottom: 1px solid #ddd;
        }
        .task-type{
            display: block;
            color: $primary;
            font-size: 1.2rem;
        }
        .room-type{
            color: $black;
            font-size: 1.4rem;
        }
        span{
            color: $menuText;
        }
    }
}

</style>
