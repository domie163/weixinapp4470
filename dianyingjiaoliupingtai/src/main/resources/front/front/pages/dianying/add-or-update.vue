<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">电影名称</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingName" type="text" v-model="ruleForm.dianyingName" placeholder="电影名称"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">电影类型</view>
                    <picker @change="dianyingTypesChange" :value="dianyingTypesIndex" :range="dianyingTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                                class="uni-input">{{ruleForm.dianyingTypes?ruleForm.dianyingValue:"请选择电影类型"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="dianyingPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">封    面</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.dianyingPhoto" :src="baseUrl+ruleForm.dianyingPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="dianyingVideoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">视    频</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.dianyingVideo" :src="baseUrl+ruleForm.dianyingVideo" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">更新时间</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingShijian" type="text" v-model="ruleForm.dianyingShijian" placeholder="更新时间"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">出品公司</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingFaxing" type="text" v-model="ruleForm.dianyingFaxing" placeholder="出品公司"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">地    区</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingAdd" type="text" v-model="ruleForm.dianyingAdd" placeholder="地    区"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">发行公司</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingGs" type="text" v-model="ruleForm.dianyingGs" placeholder="发行公司"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">发行日期</view>
                <input
                        :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                        v-model="ruleForm.chuchangTime" placeholder="发行日期" :readonly="ro.chuchangTime"
                        @tap="toggleTab('chuchangTime')"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">时    长</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingSc" type="text" v-model="ruleForm.dianyingSc" placeholder="时    长"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">导    演</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                         :disabled="ro.dianyingDaoyan" type="text" v-model="ruleForm.dianyingDaoyan" placeholder="导    演"></input>
            </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">价    格</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}'
                             :disabled="ro.dianyingNewMoney" type="number" v-model="ruleForm.dianyingNewMoney" placeholder="价    格"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">电影详情</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0px 0px 0px rgba(0, 0, 0, 0.16)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"0 180rpx 180rpx 0","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","height":"200rpx"}'
                          :disabled="ro.dianyingContent" v-model="ruleForm.dianyingContent" placeholder="电影详情"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="date" step="1" :current="false" :hasSecond="false" @confirm="chuchangTimeConfirm"
                              ref="chuchangTime" themeColor="#333333"></w-picker>
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
					dianyingName: false,
					dianyingTypes: false,
					dianyingPhoto: false,
					dianyingVideo: false,
					dianyingShijian: false,
					dianyingFaxing: false,
					dianyingAdd: false,
					dianyingGs: false,
					chuchangTime: false,
					dianyingSc: false,
					dianyingDaoyan: false,
					dianyingNewMoney: false,
					zanNumber: false,
					caiNumber: false,
					dianyingContent: false,
					dianyingDelete: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					dianyingName: '',
					dianyingTypes: '',//数字
					dianyingValue: '',//数字对应的值
					dianyingPhoto: '',
					dianyingVideo: '',
					dianyingShijian: '',
					dianyingFaxing: '',
					dianyingAdd: '',
					dianyingGs: '',
					chuchangTime: '',
					dianyingSc: '',
					dianyingDaoyan: '',
					dianyingNewMoney: '',
					zanNumber: '',
					caiNumber: '',
					dianyingContent: '',
					dianyingDelete: '',
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            dianyingTypesOptions: [],
            dianyingTypesIndex : 0,

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
			let dianyingTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'dianying_types',
            }
			let dianyingTypes = await this.$api.page(`dictionary`, dianyingTypesParams);
			this.dianyingTypesOptions = dianyingTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`dianying`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.dianyingId){
                this.ruleForm.dianyingId = options.dianyingId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            dianyingTypesChange(e) {
                this.dianyingTypesIndex = e.target.value
                this.ruleForm.dianyingValue = this.dianyingTypesOptions[this.dianyingTypesIndex].indexName
                this.ruleForm.dianyingTypes = this.dianyingTypesOptions[this.dianyingTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			dianyingPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.dianyingPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			dianyingVideoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.dianyingVideo = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			chuchangTimeConfirm(val) {
                this.ruleForm.chuchangTime = val.result;
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
				if ((!this.ruleForm.dianyingName)) {
                    this.$utils.msg(`电影名称不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingPhoto)) {
                    this.$utils.msg(`封    面不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingShijian)) {
                    this.$utils.msg(`更新时间不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingFaxing)) {
                    this.$utils.msg(`出品公司不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingAdd)) {
                    this.$utils.msg(`地    区不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingGs)) {
                    this.$utils.msg(`发行公司不能为空`);
                    return
                }
				if ((!this.ruleForm.chuchangTime)) {
                    this.$utils.msg(`发行日期不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingSc)) {
                    this.$utils.msg(`时    长不能为空`);
                    return
                }
				if ((!this.ruleForm.dianyingDaoyan)) {
                    this.$utils.msg(`导    演不能为空`);
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
                if (this.ruleForm.id) {
                    await this.$api.update(`dianying`, this.ruleForm);
                } else {
                    await this.$api.save(`dianying`, this.ruleForm);
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