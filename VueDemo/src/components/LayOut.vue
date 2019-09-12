<template>
    <div>
        <HeaderNav></HeaderNav>
        <LeftNav></LeftNav>
        <div>
            <Breadcrumb></Breadcrumb>
            <div class="my-body">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import LeftNav from "@/components/LeftNav";
import Breadcrumb from "@/components/Breadcrumb"
export default {
    name:'LayOut',
    components:{
        HeaderNav,
        LeftNav,
        Breadcrumb,
    }
}
</script>

<style scoped>
    .my-body{
        float: left;
        padding-left: 20px;
        margin-top: 15px;
    }
</style>