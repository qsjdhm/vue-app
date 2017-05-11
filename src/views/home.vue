<template>
    <div class="home-page">
        <div class="header">
            <div @click.stop.prevent="openSettings" class="avatar">
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
            <popup v-model="settingsModel" position="left" class="settings-model">
                <div style="width:230px;" >
                    <div class="user-info" >
                        <img @click.stop.prevent="openAvatar" src="../assets/avatar.png" class="avatar" />
                        <span class="name">李静</span>
                        <span class="edit">修改</span>
                    </div>
                    <div class="collect">
                        <div @click.stop.prevent="changeCollectList" class="title">
                            <span>收藏</span>
                            <img src="../assets/arrow.png" class="arrow" />
                        </div>
                        <div v-show="collectShow" class="list">
                            <span>云适配OA</span>
                            <span>云适配BPM</span>
                        </div>
                    </div>
                    <div class="about">
                        <span>关于Enterplorer</span>
                    </div>
                </div>
            </popup>
        </div>
        <!-- 拍照 -->
        <actionsheet v-model="photographSheet" :menus="photographMenus" @on-click-menu="photographClick" show-cancel></actionsheet>
    </div>
</template>

<script type="text/ecmascript-6">
    import "../less/home.less";
    import { TransferDom, Popup, Actionsheet } from 'vux';

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

    export default {
        directives: {
            TransferDom
        },
        components: {
            Popup,
            Actionsheet
        },
        data: function () {
            return {
                settingsModel: false,
                photographSheet: false,
                photographMenus: {
                    menu1: '拍照',
                    menu2: '从相册选择'
                },
                collectShow: false
            }
        },
        computed: {
            ...mapState({

            })
        },
        methods: {
            openSettings: function () {
                this.settingsModel = true;
            },
            openAvatar: function () {
                this.photographSheet = true;
            },
            photographClick: function (key) {
                console.log(key)
            },
            changeCollectList: function () {
                if (this.collectShow) {
                    this.collectShow = false;
                } else {
                    this.collectShow = true;
                }
            },
        },
        created: function () {
            console.info('home-----------');
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
