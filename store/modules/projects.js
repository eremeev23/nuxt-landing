import axios from 'axios'

export default {
    state: {  
        projects: [],
    },
    actions: {
        LoadProjectsFromApi: ({ commit }) => {
            return axios('https://my-json-server.typicode.com/maxon32/projects-json/projects', {
              method: 'GET'
            })
            .then(projects => {
                commit('SetProjects', projects.data);
                return projects;
            })
            .catch(error => {
                console.log(error);
                return error;
            })
          },
    },

    mutations: { 
        SetProjects: (state, projects) => {
            state.projects = projects;
          },
    },

    getters: {
        Projects: (state) => {
            return state.projects;
          },
    }
}