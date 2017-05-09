<template>
    <div class="department-page">
        <div class="search">
            <span>云适配移动办公平台</span>
            <img src="../assets/avatar.png"/>
        </div>
        <tab v-model="tabIndex" :line-width="2" bar-active-color="#fff" active-color="#fff" defaultColor="#d0d0d0">
            <tab-item selected @on-item-click="onItemClick">常用</tab-item>
            <tab-item @on-item-click="onItemClick">同事</tab-item>
        </tab>
        <swiper :height="swiperHeight" v-model="tabIndex" :show-dots="false">
            <swiper-item >
                <div class="tab-swiper vux-center">
                    常用 Container
                </div>
            </swiper-item>
            <swiper-item >
                <div class="tab-swiper vux-center">
                    同事 Container
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">

    import { Tab, TabItem, Swiper, SwiperItem  } from 'vux';

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';


    export default {
        directives: {

        },
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        data: function () {
            return {
                tabIndex: 0,  // 通过它吧tab和swiper当前选中的链接起来
                swiperHeight: '',
                settingsModel: false
            }
        },
        computed: {
            ...mapState({

            })
        },
        methods: {
            onItemClick: function (index) {
                console.log('on item click:', index)
            },
        },
        created: function () {
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
        mounted: function () {

            let pageHeight = document.querySelector('.framework-page').offsetHeight-53;
            let searchHeight = document.querySelector('.search').offsetHeight;
            let tabHeight = document.querySelector('.vux-tab').offsetHeight;

            this.swiperHeight = (pageHeight - searchHeight - tabHeight)/37.5+'rem';


        }
    }
</script>

<style lang="less" scoped>
    @import '../less/department.less';
</style>
