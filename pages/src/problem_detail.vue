<template>
	<view class="detail" style="width: 90%;margin: auto;padding-top: 30upx;">
		<text style="padding: 30upx;">{{problem}}</text>
	</view>
</template>

<script>
	import message from '../../service/message.js';
	import service from '../../utils/httpRequest.js';

	export default {
		data() {
			return {
				message: null,
				problem: null
			};
		},
		onShow() {
			this.get_message();
			// this.isread();
		},
		onLoad(option) {
			this.problem = option.problem_detail
		},
		methods: {
			async get_message() {
				this.message = await message.get_message();
				// console.log(this.message+"用户信息");
			},
		}
	};
</script>

<style>
	.Real_name {
		height: 46upx;
		border: #687c99 solid 3upx;
		margin-left: 250upx;
		border-radius: 25upx;
		line-height: 46upx;
		color: #687c99;
		padding: 0 15upx;
		font-size: 28upx;
	}

	.active {
		border: #7ce2f5 solid 3upx;
		color: #7ce2f5;
	}

	.titlenav {
		width: 94%;
		background: #fff;
		/* background: #4cd964; */
		border-radius: 30upx;
		margin: 0 auto;
		border: 2px solid rgba(183, 183, 183, 0.3);
		box-shadow: 0px 14px 18px 0px rgba(183, 183, 183, 0.2);
		border-radius: 30px;
		margin-top: 20upx;
	}

	.float {
		width: 40%;
		margin: 13upx;
		padding: 20upx;
		position: relative;
	}

	.textnav {
		color: #687c99;
		font-size: 30upx;
		padding-left: 20upx;
	}

	.textnav3 {
		color: #687c99;
		font-size: 28upx;
		margin-top: 80upx;
		text-align: center;
	}

	.username {
		width: 372upx;
		font-size: 38upx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(1, 10, 17, 1);
		/* padding-top: 30upx; */
	}

	.listnav {
		margin: auto;
		width: 88%;
		height: 40upx;
		border-top: rgba(223, 223, 223, 1) solid 0.5upx;
		line-height: 40upx;
		border-left: none;
		border-right: none;
		padding: 20upx;
	}

	.icon {
		width: 65upx;
		height: 60upx;
		position: absolute;
		left: 50%;
		margin-left: -32upx;
	}

	.login-btn {
		padding: 10upx 20upx;
		margin-top: 50upx;
	}

	.landing {
		width: 50%;
		height: 84upx;
		line-height: 84upx;
		border-radius: 10upx;
		font-size: 32upx;
		background: linear-gradient(left, #4286de, #5091e6);
	}

	.phone_wrap {
		display: flex;
		height: 50upx;
		line-height: 50upx;
		width: 400upx;
	}

	.phone_tag {
		width: 252upx;
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}

	.phone_wrap image {
		width: 34upx;
		height: 28upx;
		margin-left: 30upx;
		margin-top: 10upx;
	}
</style>
