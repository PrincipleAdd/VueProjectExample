<template>
    <div>
        <HeaderNav></HeaderNav>
        <LeftNav></LeftNav>
        <div>
            <Breadcrumb></Breadcrumb>
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