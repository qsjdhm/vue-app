<template>
    <div class="department-details-page">
        <div class="header">
            <div @click.stop.prevent="goBack" class="callback">
                <img src="../../assets/arrow.png"/>
                <span>{{departmentName}}</span>
            </div>
        </div>


        <div class="department-path">
            <span>{{pDepartmentPath}}</span>
            <span class="department-id">{{routerId}}</span>
        </div>
        <div class="department-list">
            <div
                v-for="(item, key) in departmentList"
                :key="key"
                @click.stop.prevent="openDepartmentDetails(item.id)" class="item">
                <img  class="avater" src="../../assets/avatar.png"/>
                <span class="name">{{item.name}}</span>
                <span class="number">{{item.value}}</span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        directives: {

        },
        components: {

        },
        data: function () {
            return {
                bjData : [
                    {'id' : 11, 'name' : '营销中心', 'value' : 48},
                    {'id' : 12, 'name' : '总裁办', 'value' : 2},
                    {'id' : 13, 'name' : '管理中心', 'value' : 11},
                    {'id' : 14, 'name' : '产品中心', 'value' : 56}
                ],
                tjData : [
                    {'id' : 21, 'name' : '营销中心', 'value' : 16},
                    {'id' : 22, 'name' : '管理中心', 'value' : 2}
                ],
                bjyxData : [
                    {'id' : 111, 'name' : '市场部', 'value' : 9},
                    {'id' : 112, 'name' : '销售部', 'value' : 22},
                    {'id' : 113, 'name' : '解决方案部', 'value' : 17}
                ],
                departmentList: [],
                pDepartmentUrl : '',
                departmentName: '',
                pDepartmentPath : '全公司'
            }
        },
        computed: {
            routerId() {
                if (this.$route.params.detailsId == 1) {
                    this.pDepartmentUrl = '#/department';
                    this.departmentName = '北京';
                    this.pDepartmentPath = '全公司 -> 北京';
                    this.departmentList = this.bjData;
                } else if (this.$route.params.detailsId == 2) {
                    this.pDepartmentUrl = '#/department';
                    this.departmentName = '天津';
                    this.pDepartmentPath = '全公司 -> 天津';
                    this.departmentList = this.tjData;
                } else if (this.$route.params.detailsId == 11) {
                    this.pDepartmentUrl = '#/department/1';
                    this.departmentName = '营销中心';
                    this.pDepartmentPath = '全公司 -> 北京 -> 营销中心';
                    this.departmentList = this.bjyxData;
                }

                return this.$route.params.detailsId;
            }
        },
        methods: {
            goBack: function () {
                window.location.href = this.pDepartmentUrl;
            },
            openDepartmentDetails: function (index) {
                window.location.href = "#/department/"+index;
            }
        },
        created: function () {
            this.id = this.$route.params.detailsId;
        },
        mounted: function () {
            console.info(222);
        },
    }
</script>

<style lang="less" scoped>
    @import '../../less/department/department-details.less';
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
