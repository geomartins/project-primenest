import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async application_confirm({commit},value){
        console.log(value);

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/distributors_registration",value
                );
               console.log(response)
                return await response;
            }catch(error){
                console.log(error.response)
                return await error.response;
            } 
      
    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}






