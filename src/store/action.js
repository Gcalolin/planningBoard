//编写异步的逻辑，再去commit我们的事件
import * as types from './mutation-types'

export default {
	addTotalTime({ commit },time) {
		commit(types.ADD_TOTOAL_TIME,time)
	},
	decTotalTime({ commit },time) {
		commit(types.DEC_TOTOAL_TIME,time)
	},
	savePlan({ commit },time) {
		commit(types.SAVE_PLAN,time)
	},
	deletePlan({ commit },time) {
		commit(types.DELETE_PLAN,time)
	}
}
