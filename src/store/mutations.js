//注册各种数据变化的方法
import * as types from './mutation-types'

export default {
	//增加总时间
	[types.ADD_TOTAL_TIME] (state,time) {
		state.totalTime = state.totalTime + time
	},
	//减少总时间
	[types.DEC_TOTAL_TIME] (state,time) {
		state.totalTime = state.totalTime -time
	},
	//新增计划
	[types.SAVE_PLAN] (state,plan) {
		const avatar = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307347035,3381807498&fm=21&gp=0.jpg"
		state.list.push(
			Object.assign({name: '锅锅',avatar: avatar},plan)
		)
	},
	//删除某计划
	[types.DELETE_PLAN] (state,idx) {
		state.list.splice(idx,1)
	}
}