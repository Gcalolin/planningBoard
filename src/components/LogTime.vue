<template>
	<div class="form-horizontal">
		<div class="form-group">
			<div class="col-sm-6">
				<label>日期</label>
				<input type="date" class="form-control" v-model="date" placeholder="Date">
			</div>
			<div class="col-sm-6">
				<label>时间</label>
				<input type="number" class="form-control"v-model="totalTime" placeholder="Hours">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label>备注</label>
				<input type="text" class="form-control" v-model="comment" placeholder="Comment">
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
	</div>
</template>
<script>
	export default {
		name: 'LogTime',
		data () {
			return {
				date: '',
				totalTime: '',
				comment: ''
			}
		},
		methods: {
			save () {
				const plan = {
					name: '锅锅',
					image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2307347035,3381807498&fm=21&gp=0.jpg',
					date: this.date,
					totalTime: this.totalTime,
					comment: this.comment
				};
				this.$store.dispatch('savePlan',plan)
				this.$store.dispatch('addTotalTime',this.totalTime)
				this.$store.go(-1)
			}
		}
	}
</script>