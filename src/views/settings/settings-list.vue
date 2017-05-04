<template>
    <div class="settings-list-page">
        <div class="header">
            <div @click.stop.prevent="goSettings" class="callback">
                <img src="../../assets/arrow.png"/><span>返回</span>
            </div>
            <div class="title">
                <span>设置</span>
            </div>
        </div>
        <div class="container">

        </div>
        <router-link to="/settings">返回设置首页</router-link>
        <router-link to="/settingsList/msg">设置消息</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    import "../../less/settings/settings-list.less";


    export default {
        directives: {

        },
        components: {

        },
        data: function () {
            return {

            }
        },
        computed: {

        },
        methods: {
            goSettings: function () {
                console.info(11111);
                window.location.href = "/#/settings/";
            },
        },
        created: function () {
        },
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>

</style>
