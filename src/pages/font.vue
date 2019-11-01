<template>
	<div id="fontBox" @scroll="handleScroll" ref='home'>
		<!--轮播图-->
		<div id='carousel'>
			<el-carousel :interval="6000" height="4rem" arrow="always">
				<el-carousel-item>
					<img src="../assets/ttl/1.png" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/6.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/8.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/12.jpg" alt="" />
				</el-carousel-item>
			</el-carousel>
		</div>

		<!--搜索框-->
		<div class="souSuoBox" ref='souSuoBox'>
			<div id='souSuo'>
				<el-button height="0.5rem" icon="el-icon-search">
					<input type="text" id="" value="" placeholder="星空物语" />
				</el-button>
			</div>
		</div>

		<!--商品列表-->
		<div id='list'>
			<div>
				<div style="color: #409EFF">
					<i class="el-icon-s-data"></i>
				</div>
				<p>排行榜</p>
			</div>
			<div>
				<div style="color: #67C23A">
					<i class="el-icon-s-check"></i>
				</div>
				<p>会员专区</p>
			</div>
			<div>
				<div style="color: #E6A23C">
					<i class="el-icon-share"></i>
				</div>
				<p>福利社</p>
			</div>
			<div>
				<div style="color: #F56C6C">
					<i class="el-icon-s-promotion"></i>
				</div>
				<p>小编推荐</p>
			</div>
		</div>

		<!--字体精选-->
		<div class="">
			<my-item-top>
				<span slot='ttl'>字体精选</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='fontOne' btn='btn' src='true'></my-zhuti>
		</div>

		<!--精选字体-->
		<div id='font'>
			<my-item-top>
				<span slot='ttl'>精选字体</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-font :obj='fontTwo' btn='btn1'></my-font>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/4.jpg" alt="" />
			</my-footerimg>
		</div>

		

		<!--八月最受欢迎的字体-->
		<div class="">
			<my-item-top>
				<span slot='ttl'>八月最受欢迎的字体</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='fontThree' btn='btn' inline='true' src='true'></my-zhuti>
		</div>

		<!--八月最受欢迎的字体-->
		<div class="">
			<my-item-top>
				<span slot='ttl'>清晰的小字体</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='fontFour' btn='btn' src='true'></my-zhuti>
		</div>

		

		<!--到底了-->
		<my-footer-box></my-footer-box>

		<my-footer></my-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				fontOne: {},
				fontTwo: {},
				fontThree:{},
				fontFour: {},
				size: 6,
				current: 1,
				allLoaded: false
			}
		},
		methods: {
			handleScroll() {
				let x = this.$refs.home.scrollTop
				this.$refs.souSuoBox.style.background = 'rgba(255,255,255,'+(x*0.02)+')';
			},
			loadTop(id) {
			  	setTimeout(()=>{
					this.$refs.loadmore.onTopLoaded()
			  	},3000)
			},
			loadBottom(id) {
			  
			  	this.$refs.loadmore.onBottomLoaded()
			}
			
		},
		async created() {
			
			
			
			let f_label1 = ["精选"]
			this.fontOne = await this.getFont(6,1,{label: f_label1})
			
			let f_label2 = ["新品"]
			this.fontTwo = await this.getFont(6,1,{label: f_label2})
			
			let f_label3 = ["清晰"]
			this.fontThree = await this.getFont(6,1,{label: f_label3})
			
			let f_label4 = ["清晰"]
			this.fontFour = await this.getFont(6,1,{label: f_label4})
			
			
			
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	#fontBox {
		/*轮播图*/
		height: 100%;
		overflow: scroll;
		#carousel {
			.el-carousel__item {
				img {
					width: 100%;
					height: 100%;
				}
			}
			button.el-carousel__arrow {
				height: 0.36rem;
				width: 0.36rem;
			}
			.el-carousel__indicator {
				button.el-carousel__button {
					width: 0.8rem;
				}
			}
		}
		/*搜索框*/
		.souSuoBox {
			position: fixed;
			top: 0;
			z-index: 5;
			width: 100%;
			background: rgba(255,255,255,0);
			padding: 0.2rem;
			#souSuo {
				/*top: 0.1rem;*/
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 80%;
				i {
					font-weight: bold;
				}
				.el-button {
					padding: 0.1rem 0.2rem;
					width: 100%;
					input {
						width: 80%;
						border: none;
						outline: none;
					}
				}
			}
		}
		/*商品列表*/
		#list {
			display: flex;
			justify-content: space-around;
			text-align: center;
			/*color: red;*/
			>div {
				cursor: pointer;
				margin-top: 0.3rem;
				margin-bottom: 0.4rem;
				i {
					font-size: 0.6rem;
				}
			}
		}
		/*主题精选*/
		#mlog {}
		/*精选字体*/
		#font {}
		/*星座的守护*/
		/*八月份最受欢迎的字体*/
		/*精选铃声*/
		/*梦中人*/
		/*到底了*/
	}
</style>