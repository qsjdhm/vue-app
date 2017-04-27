<template>
    <div class="home-page">
        <div class="header">
            <div @click="openSettings" class="avatar">
                <img src="../assets/avatar.png"/>
            </div>
            <div class="title">
                <span>中弘股份</span>
            </div>
            <div class="tab">
                <img src="../assets/tab.png"/>
                <span>4</span>
            </div>
        </div>
        <div class="container">

        </div>

        <!-- 设置 -->
        <div v-transfer-dom>
            <popup v-model="settingsModel" position="left">
                <div style="width:230px;">
                </div>
            </popup>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import "../less/home.less";
    import { TransferDom, Popup } from 'vux'

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

    export default {
        directives: {
            TransferDom
        },
        components: {
            Popup
        },
        data: function () {
            return {
                settingsModel: false
            }
        },
        computed: {
            ...mapState({

            })
        },
        methods: {
            openSettings: function () {
                this.settingsModel = true;
            }
        },
        created: function () {
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
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
