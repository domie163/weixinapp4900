<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">美术馆编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                         :disabled="ro.meishuguanUuidNumber" type="text" v-model="ruleForm.meishuguanUuidNumber" placeholder="美术馆编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">美术馆名称</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                         :disabled="ro.meishuguanName" type="text" v-model="ruleForm.meishuguanName" placeholder="美术馆名称"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="meishuguanPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">美术馆照片</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.meishuguanPhoto" :src="baseUrl+ruleForm.meishuguanPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">美术馆地点</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                         :disabled="ro.meishuguanAddress" type="text" v-model="ruleForm.meishuguanAddress" placeholder="美术馆地点"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">美术馆类型</view>
                    <picker @change="meishuguanTypesChange" :value="meishuguanTypesIndex" :range="meishuguanTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                                class="uni-input">{{ruleForm.meishuguanTypes?ruleForm.meishuguanValue:"请选择美术馆类型"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">门票数量</view>
                    <input   disabled
                             :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                             :disabled="ro.meishuguanKucunNumber" type="number" v-model="ruleForm.meishuguanKucunNumber" placeholder="门票数量"></input>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">门票价格</view>
                    <input   disabled
                             :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                             :disabled="ro.meishuguanNewMoney" type="number" v-model="ruleForm.meishuguanNewMoney" placeholder="门票价格"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">结束时间</view>
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}'
                        v-model="ruleForm.jieshuTime" placeholder="结束时间" :readonly="ro.jieshuTime"
                        @tap="toggleTab('jieshuTime')"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">美术馆介绍</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 8rpx 0px 4rpx var(--publicMainColor)","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","fontSize":"28rpx","borderStyle":"solid","height":"60rpx","height":"200rpx"}'
                          :disabled="ro.meishuguanContent" v-model="ruleForm.meishuguanContent" placeholder="美术馆介绍"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="jieshuTimeConfirm"
                              ref="jieshuTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					meishuguanUuidNumber: true,
					meishuguanName: false,
					meishuguanPhoto: false,
					meishuguanAddress: false,
					zanNumber: false,
					caiNumber: false,
					meishuguanTypes: false,
					meishuguanKucunNumber: false,
					meishuguanNewMoney: false,
					meishuguanClicknum: false,
					jieshuTime: false,
					meishuguanContent: false,
					meishuguanDelete: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					meishuguanUuidNumber: this.getUUID(),//数字
					meishuguanName: '',
					meishuguanPhoto: '',
					meishuguanAddress: '',
					zanNumber: '',
					caiNumber: '',
					meishuguanTypes: '',//数字
					meishuguanValue: '',//数字对应的值
					meishuguanKucunNumber: '',
					meishuguanNewMoney: '',
					meishuguanClicknum: '',
					jieshuTime: '',
					meishuguanContent: '',
					meishuguanDelete: '',
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            meishuguanTypesOptions: [],
            meishuguanTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {
		/*下拉框*/
			let meishuguanTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'meishuguan_types',
            }
			let meishuguanTypes = await this.$api.page(`dictionary`, meishuguanTypesParams);
			this.meishuguanTypesOptions = meishuguanTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`meishuguan`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.meishuguanId){
                this.ruleForm.meishuguanId = options.meishuguanId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            meishuguanTypesChange(e) {
                this.meishuguanTypesIndex = e.target.value
                this.ruleForm.meishuguanValue = this.meishuguanTypesOptions[this.meishuguanTypesIndex].indexName
                this.ruleForm.meishuguanTypes = this.meishuguanTypesOptions[this.meishuguanTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			meishuguanPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.meishuguanPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			jieshuTimeConfirm(val) {
                this.ruleForm.jieshuTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },

            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.meishuguanUuidNumber)) {
                    this.$utils.msg(`美术馆编号不能为空`);
                    return
                }
				if ((!this.ruleForm.meishuguanName)) {
                    this.$utils.msg(`美术馆名称不能为空`);
                    return
                }
				if ((!this.ruleForm.meishuguanPhoto)) {
                    this.$utils.msg(`美术馆照片不能为空`);
                    return
                }
				if ((!this.ruleForm.meishuguanAddress)) {
                    this.$utils.msg(`美术馆地点不能为空`);
                    return
                }
				if ((!this.ruleForm.zanNumber) && (!this.$validate.isIntNumer(this.ruleForm.zanNumber)) && this.ruleForm.zanNumber >0) {
                    this.$utils.msg(`赞不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.caiNumber) && (!this.$validate.isIntNumer(this.ruleForm.caiNumber)) && this.ruleForm.caiNumber >0) {
                    this.$utils.msg(`踩不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.meishuguanKucunNumber) && (!this.$validate.isIntNumer(this.ruleForm.meishuguanKucunNumber)) && this.ruleForm.meishuguanKucunNumber >0) {
                    this.$utils.msg(`门票数量不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.meishuguanClicknum) && (!this.$validate.isIntNumer(this.ruleForm.meishuguanClicknum)) && this.ruleForm.meishuguanClicknum >0) {
                    this.$utils.msg(`美术馆热度不能为空，不能小于0 格式为数字`);
                    return
                }
				if ((!this.ruleForm.jieshuTime)) {
                    this.$utils.msg(`结束时间不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`meishuguan`, this.ruleForm);
                } else {
                    await this.$api.save(`meishuguan`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>