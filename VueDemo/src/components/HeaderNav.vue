<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <div class="layout-logo">
            
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
            <Submenu>
                <template slot="title">
                    {{ userName }}
                </template>
                    <MenuItem name="">{{ email }}</MenuItem>
                    <MenuItem name="">注销</MenuItem>
            </Submenu>
        </div>
    </Menu>
    
    <!-- <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup> -->
</template>
<script>
    export default {
        name:"HeaderNav",
        data () {
            return {
                theme1: 'dark',
                userName : 'PrincipleAdd',
                email: "1111111",
            }
        }
    }
</script>

<style scoped>
    .layout-nav{
        /* width: 70%; */
        margin: 0 auto;
        margin-right: 20px;
        float: right;
    }

    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 100px;
    }

</style>
