<template>
    <view>
        <scroll-view  scroll-x class="bg-white nav">
            <view class='flex text-center'>
                <view class="cu-item flex-sub text-df " @click="navselect(0)"
                      :class="[currentIndex == 0 ? 'text-red cur' : '']">
                    全部
                </view>
                <view class="cu-item flex-sub text-df " @click="navselect(nav.codeIndex)" v-for="(nav,index) in navlist" :key="index"
                      :class="[currentIndex == nav.codeIndex ? 'text-red cur' : '']">
                    {{nav.indexName}}
                </view>
            </view>
        </scroll-view>
        <mescroll-uni :top="88" @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
            <view v-for="(item,index) in list" :key="index">
                <view class="bg-white margin-sm padding-sm solids-bottom radius text-content">
                    <view class="flex justify-between">
                        <view class="text-bold" style="flex-shrink: 0;">
                            <text class="text-green">{{ item.meishuguanOrderTypes == 101?item.meishuguanOrderValue:'' }}</text>
                            <text class="text-red">{{ item.meishuguanOrderTypes == 102?item.meishuguanOrderValue:'' }}</text>
                            <text class="text-grey">{{ item.meishuguanOrderTypes == 103?item.meishuguanOrderValue:'' }}</text>
                            <text class="text-blue">{{ item.meishuguanOrderTypes == 104?item.meishuguanOrderValue:'' }}</text>
                            <text class="text-brown">{{ item.meishuguanOrderTypes == 105?item.meishuguanOrderValue:'' }}</text>
                        </view>
                        <view><text class="icon-meishuguan padding-right-sm"></text><text class="text-bold solids-bottom">{{ item.meishuguanOrderUuidNumber }}</text></view>
                    </view>
                    <view class="bg-white margin-xs padding-xs  radius text-content">
                        <view class="flex padding-top-sm solids-top">
                            <image :src="baseUrl+item.meishuguanPhoto" style="flex-shrink: 0;" mode="aspectFill" class=" cover radius solids"></image>
                            <view class="text-content padding-left" style="flex-grow: 1;">
                                <view>{{ item.meishuguanName }}</view>
                                <view>{{ item.buyZuoweiTime }}</view>
                                <view >{{ item.buyNumber }} x ￥{{ item.meishuguanNewMoney }}</view>
                            </view>
                        </view>
                        <view class="flex justify-end">合计{{ item.meishuguanOrderTruePrice }}元</view>
                    </view>
                    <view class="flex justify-end"></view>
                    <view class="flex justify-end" style="font-size: 24upx;">
                        <view v-if="item.meishuguanOrderTypes==101">
                            <view @tap="refund(item)" class="round cu-btn lines-grey mid  margin-right-sm">退款</view>
                        </view>
                        <view v-if="item.meishuguanOrderTypes==102 && item.MeishuguanyonghuId == user.id">
                            <view
                                @tap="deliver(item.id)"
                                class="round cu-btn lines-grey mid  margin-right-sm">完成</view>
                        </view>
                    </view>
                </view>
            </view>




        </mescroll-uni>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                navlist: [
                ],
                currentIndex: 0,
                pages: 1,
                list: [],
                mescroll: null, //mescroll实例对象
                downOption: {
                    auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
                },
                upOption: {
                    page: {
                        // num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                        // size: 5 // 每页数据的数量
                    },
                    noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
                    textNoMore: '~ 没有更多了 ~',
                },
                hasNext: true,
                meishuguanLiuyanText: '',
                user: '',
                //评价
                meishuguanId:null,
                meishuguanCommentbackText: null,
				meishuguanCommentbackPingfenNumber:0,

            }
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onShow() {
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table)
            this.user = res.data
            this.hasNext = true

            let params = {
                page: 1,
                limit: 100,
                dicCode: 'meishuguan_order_types',
            }
            let meishuguanOrderTypesRes = await this.$api.page(`dictionary`, params);

            this.navlist = meishuguanOrderTypesRes.data.list

            // 重新加载数据
            if (this.mescroll) this.mescroll.resetUpScroll()
        },
        methods: {
            navselect(nav) {
                this.currentIndex = nav
                this.meishuguanOrderTypes = nav
                this.hasNext = true
                // 重新加载数据
                if (this.mescroll) this.mescroll.resetUpScroll()
            },
            // mescroll组件初始化的回调,可获取到mescroll对象
            mescrollInit(mescroll) {
                this.mescroll = mescroll;
            },
            /*下拉刷新的回调 */
            downCallback(mescroll) {
                this.hasNext = true
                // 重置分页参数页数为1
                mescroll.resetUpScroll()
            },
            /*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
            async upCallback(mescroll) {
                let params = {
                    page: mescroll.num,
                    limit: mescroll.size,
                }
                if (this.meishuguanOrderTypes) {
                    params['meishuguanOrderTypes'] = this.meishuguanOrderTypes
                }
                let res = await this.$api.page('meishuguanOrder', params);
                // 如果是第一页数据置空
                if (mescroll.num == 1) this.list = [];
                this.list = this.list.concat(res.data.list);
                if (res.data.list.length == 0) this.hasNext = false;
                mescroll.endSuccess(mescroll.size, this.hasNext);
            },
            //退款
            async refund(order) {
                let _this = this;
                uni.showModal({
                    title: '提示',
                    content: '是否确认退款',
                    success: async function(res) {
                        if(res.confirm){
                            var value = [{
                                    key:'id',
                                    val:order.id,
                                }]
                            var returnVal = await _this.$api.requestCondition("meishuguanOrder", "refund",value);
                            _this.$utils.msg('退款成功');
                            if (_this.mescroll) _this.mescroll.resetUpScroll()
                        }
                    }
                });
            },
            //完成
            async deliver(id) {
                let _this = this;
                uni.showModal({
                    title: '提示',
                    content: '是否确认完成',
                    success: async function(res) {
                        if(res.confirm){
                            var value = [
                                {
                                    key:'id',
                                    val:id,
                                }
                            ]
                            var returnVal = await _this.$api.requestCondition("meishuguanOrder", "deliver",value);
                            _this.$utils.msg('成功完成');
                            if (_this.mescroll) _this.mescroll.resetUpScroll()
                        }
                    }
                });
            },
        }
    }
</script>

<style>
    .cover {
        width: 150upx;
        height: 150upx;
    }
</style>
