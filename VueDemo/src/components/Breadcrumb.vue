<template>
    <div class='breadcrumb' >
        <Breadcrumb>
            <BreadcrumbItem :to="path(index)" v-for="(item, index) in $route.meta.name" :key="index">
                {{item}}
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
        },
        computed:{
            path(){
                return function(index){
                    return this.$route.meta.path[index];
                }
            }
        },
        watch:{
        },
    }
</script>

<style scoped>
    .breadcrumb{
        padding-left:260px;
        /* margin-left: 260px; */
        margin-top: 15px;
        /* float: left; */
        text-align: left;
        /* width: 70%; */
    }

    .float-left{
        float: left;
    }
</style>