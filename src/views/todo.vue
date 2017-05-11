<template>
    <div class="todo-page">
        <div class="header">
            <div @click.stop.prevent="openSettings" class="avatar">
                <img src="../assets/avatar.png"/>
            </div>
            <div class="title">
                <span>待办列表</span>
            </div>
            <div class="tab">
                <img src="../assets/tab.png"/>
                <span>4</span>
            </div>
        </div>

        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">


    import "../less/todo.less";
    import { TransferDom, Popup } from 'vux';

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
                console.info(44444444444);
                this.settingsModel = true;
            },
            openSettings1111: function () {
                console.info(2222);
                //this.settingsModel = true;
            },
        },
        created: function () {
            console.info('todo-----------');
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

    .spinner {
        width: 60px;
        height: 60px;

        position: relative;
        margin: 100px auto;
    }

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #67CF22;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: bounce 2.0s infinite ease-in-out;
        animation: bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes bounce {
        0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 50% {
              transform: scale(1.0);
              -webkit-transform: scale(1.0);
          }
    }
</style>
