// Главные настройки vue
const app = new Vue({
	el: '#app',
	data: {
		team: [],
		meetTeamIsLoad: true,
	},
	created() {
		this.team = [
			{
				personId: 0,
				personName: 'Melissa Becker',
				personImageUrl: 'meet-team-1.jpg',
				personSubtitle: 'Co-founder',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 1,
				personName: 'John Crimson',
				personImageUrl: 'meet-team-2.jpg',
				personSubtitle: 'CEO',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 2,
				personName: 'Jack Billigan',
				personImageUrl: 'meet-team-3.jpg',
				personSubtitle: 'Co-founder',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 3,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-4.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 4,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-5.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 5,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-6.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 6,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-7.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 7,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-8.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
		]
	},
	computed: {},
	methods: {},
})
const as = new Vue({
	el: '#getquote',
	data: {
		label: 'ffffffff',
	},
})
