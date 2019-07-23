<template>
    <div class="header">
        <van-nav-bar
            :title="title"
            left-arrow
            fixed
            :z-index="9999"
            @click-left="onClickLeft"
        ></van-nav-bar>
        <div style="height: 46px;"></div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data(){
        return{
            
        }
    },
    created(){
        
    },
    methods:{
        onClickLeft(){
            history.go(-1);
        }
    }
}
</script>

<style>

</style>
