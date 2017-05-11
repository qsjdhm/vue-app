<template>
    <div class="address-page">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">indexed list（索引列表）</h1>
        </header>
        <div class="mui-content">
            <div id='list' class="mui-indexed-list">
                <div class="mui-indexed-list-search mui-input-row mui-search">
                    <input type="search" class="mui-input-clear mui-indexed-list-search-input" placeholder="搜索机场">
                </div>
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
    </div>
</template>

<script type="text/ecmascript-6">
    import "../less/address.less";
//    import "../../static/mui/mui.min.css";
//    import "../../static/mui/mui.indexedlist.css";

    import { mapGetters, mapState, mapActions } from 'vuex';

    import {
        SET_ACTIVETABBAR
    } from '../vuex/modules/fremework';

    export default {
        data: function () {
            return {
                list : []
            }
        },
        computed: {
            ...mapState({
            })
        },
        created: function () {
            console.info('address-----------');
            let id = this.$route.meta.id;
            this.$store.commit(SET_ACTIVETABBAR, id);
        },
        beforeCreate: function(){

        },
        beforeMount: function (){
            console.info('beforeMount-----');
        },
        mounted: function () {

            console.info('mounted-----');

//            let indexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//            for (let i= 0,len=indexList.length; i<len; i++) {
//                let html = '<li data-group="'+indexList[i]+'" class="mui-table-view-divider mui-indexed-list-group">'+indexList[i]+'</li>';
//                for(let j=1; j<=100; j++) {
//                    html += '<li data-value="AKU" data-tags="AKeSu" class="mui-table-view-cell mui-indexed-list-item"><div>'+indexList[i]+'       阿克苏机场'+j+'</div></li>';
//                }
//                //console.info(html);
//                document.getElementById("address_list").innerHTML += html;
//            }

            let indexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

            for (let i= 0,len=indexList.length; i<len; i++) {
                this.list.push({'isIndex':true, 'value':indexList[i]});
                for(let j=1; j<=50; j++) {
                    this.list.push({'isIndex':false, 'value':indexList[i]+'   阿克苏机场'+j});
                }
            }

            mui.init();
            mui.ready(function() {
                var header = document.querySelector('header.mui-bar');
                var list = document.getElementById('list');
                //calc hieght

                list.style.height = (document.querySelector('.address-page').offsetHeight - 10 - header.offsetHeight) + 'px';
                //list.style.height = '1000px';
                //create
                window.indexedList = new mui.IndexedList(list);
            });


        },
        updated: function(){
            console.info('updated-----');
        },
        activated: function () {
            console.log(33)
            console.info(this.$route.meta.id);
        },
        deactivated: function () {
            console.log(4)
        },
        destoryed: function () {
            console.info('destoryed-----');
        }
    }
</script>

<style lang="less" scoped>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }
    .mui-bar {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>
