<template>
    <div>
        <HeaderNav></HeaderNav>
        <LeftNav></LeftNav>
    </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import LeftNav from "@/components/LeftNav";
export default {
    name:'LayOut',
    components:{
        HeaderNav,
        LeftNav,
    }
}
</script>