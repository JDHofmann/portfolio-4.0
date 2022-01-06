import projects from "~/static/projects.json";
import author from "~/static/data.json";

export const state = () => ({
	projects: [],
	author: [],
	theme: "mightnight-theme",
});

export const mutations = {
	SET_PROJECTS: (state, payload) => {
		// console.log(payload);
		state.projects = payload;
	},
	SET_AUTHOR: (state, payload) => {
		// console.log(payload);
		state.author = payload;
	},
	SET_THEME: (state, payload) => {
		// console.log(payload);
		console.log("set_theme");
		state.theme = payload;
	},
};

export const getters = {
	get_project: (state, id) => {
		// console.log("get_project", id);
		return state.projects[0];
	},
	// get_project: (state) => (id) => {
	// 	// console.log("get_project", id);
	// 	return state.projects[id];
	// },
};

export const actions = {
	async nuxtServerInit({ commit }) {
		commit("SET_PROJECTS", projects);
		commit("SET_AUTHOR", author);
	},
	changeTheme({ commit }, payload) {
		console.log("changeTheme");
		commit("SET_THEME", payload);
	},
};
