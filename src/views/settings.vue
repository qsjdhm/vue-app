<template>
    <div class="settings-page">
        <div class="header">
            <span>云适配移动办公平台</span>
        </div>
        <div class="container">
            <div class="user-info">
                <div>
                    <img src="../assets/avatar.png"/>
                </div>
                <div>
                    <span>李静</span>
                    <span>IOS工程师</span>
                </div>
            </div>
            <div @click.stop.prevent="goSettingsList" class="item">
                <img src="../assets/u196.png"/>
                <span>设置</span>
                <img src="../assets/arrow.png" class="arrow" />
            </div>
            <div class="item">
                <img src="../assets/u196.png"/>
                <span>关于Enterplorer</span>
                <span class="tip">内测版3.4.4</span>
                <img src="../assets/arrow.png" class="arrow" />
            </div>
            <div class="item logout">
                <span>安全退出</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import "../less/settings.less";

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

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
            ...mapState({

            })
        },
        methods: {
            goSettingsList: function () {
                window.location.href = "/#/settingsList/";
            },

        },
        created: function () {
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>
    @import '~vux/src/styles/close.less';

    .popup0 {
        padding-bottom:15px;
        height:200px;
    }
    .popup1 {
        width:100%;
        height:100%;
    }
    .popup2 {
        padding-bottom:15px;
        height:400px;
    }
    .position-vertical-demo {
        background-color: #ffe26d;
        color: #000;
        text-align: center;
        padding: 15px;
    }
    .position-horizontal-demo {
        position: relative;
        height: 100%;
    .vux-close {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(4);
        color: #000;
    }
    }
</style>
