import { createStore } from 'vuex'
// state.data = 'something' //<--- this is wrong
export default createStore({
  //variables
  state: {
    // data -> propertyName, null -> value
    experince: null,
    education: null,
    aboutMe: null,
    workExp: null,
    project: null,
    testimonial: null,
    skills: null,
  },
  mutations: {
    // use this to change or update the state
    updateExperince(state, payload) {
      state.experince = payload // <---- this is right
    },
    updateEducation(state, payload) {
      state.education = payload // <---- this is right
    },
    updateAboutMe(state, payload) {
      state.aboutMe = payload // <---- this is right
    },
    updateWorkExp(state, payload) {
      state.workExp = payload // <---- this is right
    },
    updateProject(state, payload) {
      state.project = payload // <---- this is right
    },
    updateTestimonial(state, payload) {
      state.testimonial = payload // <---- this is right
    },
    updateSkills(state, payload) {
      state.skills = payload // <---- this is right
    }
    //commiting a mutation
  },
  actions: {
    // run all async code
    // dispatching
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://kiara-adams.github.io/First_api/data/data.json')
      let {data} = await fetchedInfo.json()
      // commit('setAboutMe', aboutMe);
      //dependant on json file
      let {aboutMe,projects,education,skills,workExp,testimonials}= data
      console.log(projects);
      commit('setAboutMe', aboutMe);
      commit('setEducation', education);
      commit('setWorkExp', workExp);
      commit('setProjects', projects);
      commit('setTestimonials', testimonials);
      commit('setSkills', skills);
    },
  },
  modules: {
  },
  getters: {
    filterData(){
      return Array.filter()
    }
  }
})












