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
            <swiper-item>
                <div class="tab-swiper vux-center">
                    <div id='list' class="mui-indexed-list">
                        <div class="mui-indexed-list-bar">
                            <a>A</a>
                            <a>B</a>
                            <a>C</a>
                            <a>D</a>
                            <a>E</a>
                            <a>F</a>
                            <a>G</a>
                            <a>H</a>
                            <a>I</a>
                            <a>J</a>
                            <a>K</a>
                            <a>L</a>
                            <a>M</a>
                            <a>N</a>
                            <a>O</a>
                            <a>P</a>
                            <a>Q</a>
                            <a>R</a>
                            <a>S</a>
                            <a>T</a>
                            <a>U</a>
                            <a>V</a>
                            <a>W</a>
                            <a>X</a>
                            <a>Y</a>
                            <a>Z</a>
                        </div>
                        <div class="mui-indexed-list-alert"></div>
                        <div class="mui-indexed-list-inner">
                            <div class="mui-indexed-list-empty-alert">没有数据</div>
                            <ul id="address_list" class="mui-table-view">
                                <li v-for="(item, key) in list"
                                    :key="key"
                                    :data-group="item.value"
                                    class="mui-table-view-divider mui-indexed-list-group">{{item.value}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </swiper-item>
            <swiper-item >
                <div class="tab-swiper vux-center">
                    <div class="department-list">
                        <div @click.stop.prevent="openDepartmentDetails(1)" class="item">
                            <img  class="avater" src="../assets/avatar.png"/>
                            <span class="name">北京</span>
                            <span class="number">117</span>
                        </div>
                        <div @click.stop.prevent="openDepartmentDetails(2)" class="item">
                            <img  class="avater" src="../assets/avatar.png"/>
                            <span class="name">天津</span>
                            <span class="number">18</span>
                        </div>
                        <div @click.stop.prevent="openDepartmentDetails(3)" class="item">
                            <img  class="avater" src="../assets/avatar.png"/>
                            <span class="name">西安</span>
                            <span class="number">18</span>
                        </div>
                    </div>
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
                list : [],
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
                console.info('on item click:' + index)
            },
            openDepartmentDetails: function (index) {
                window.location.href = "#/department/"+index;
            }
        },
        created: function () {
            console.info('department-----------');
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
        mounted: function () {
            let barHeight = document.querySelector('.weui-tabbar').offsetHeight;
            let pageHeight = document.querySelector('.framework-page').offsetHeight - barHeight;
            let searchHeight = document.querySelector('.search').offsetHeight;
            let tabHeight = document.querySelector('.vux-tab').offsetHeight;

            this.swiperHeight = (pageHeight - searchHeight - tabHeight)   + 'px';


            let indexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            for (let i= 0,len=indexList.length; i<len; i++) {
                this.list.push({'isIndex':true, 'value':indexList[i]});
                for(let j=1; j<=5; j++) {
                    this.list.push({'isIndex':false, 'value':indexList[i]+'   阿克苏机场'+j});
                }
            }

            mui.init();
            mui.ready(function() {
                console.info(pageHeight - searchHeight - tabHeight);
                var list = document.getElementById('list');
                list.style.height = (pageHeight - searchHeight - tabHeight) + 'px';
                window.indexedList = new mui.IndexedList(list);
            });
        },
    }
</script>

<style lang="less" scoped>
    @import '../less/department.less';
</style>
