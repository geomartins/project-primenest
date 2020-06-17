<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Application</h1>
            <ul class="page-list">
                <li><a href="/">Home</a></li>
                <li>Application Form</li>
            </ul>
        </div>
     </app-breadcrumb>



    
    <!-- contact area start -->
    <div class="register-page-area pd-bottom-100">
        <div class="container">
            <div class="row justify-content-center">
               
                <div class="col-xl-10 col-lg-10 col-md-10">
                    <form class="contact-form-wrap contact-form-bg">
                        <h4>Application Form</h4>
                        <div class="rld-single-input">
                            <label>Surname *</label>
                            <input type="text" placeholder=" " v-model="userData.surname">
                        </div>
                        <div class="rld-single-input">
                            <label>Other Names *</label>
                            <input type="text" placeholder=" " v-model="userData.other_names">
                        </div>
                        <div class="rld-single-input">
                            <label>Phone Number *</label>
                            <input type="text" placeholder=" " v-model="userData.phone_number">
                        </div>
                        <div class="rld-single-select">
                            <label>Property Type *</label>
                            <select class="select single-select" v-model="userData.property_type">
                                <option value="2 bedroom">2 Bedroom</option>
                                <option value="3 bedroom">3 Bedroom</option>
                            </select>
                        </div>
                        <div class="rld-single-select">
                             <label>Payment Option *</label>
                            <select class="select single-select" v-model="userData.payment_option">
                                <option value="outright">Outright</option>
                                <option value="mortgage">Mortgage</option>
                                <option value="instalment">Instalment</option>
                            </select>
                        </div>
                        <div class="btn-wrap">
                            <button class="btn btn-yellow" type="submit" @click.prevent="submit('SUBMIT_APPLICATION_FORM')">APPLY</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area End -->




    

       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue"
import { pick } from "../Repositories/pick"
import { seo } from "../Repositories/seo"
import { vuesax } from "../Repositories/vuesax"

export default {
  name: "Application",
  mixins: [seo, pick,vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb  
  },
  data(){
      return{
        userData:{
            surname: ' ',
            other_names: ' ',
            phone_number: ' ',
            property_type: ' ',
            payment_option: ' '
        }
      }
  },
  methods: {
      api_params(value) {
        if(value == "SUBMIT_APPLICATION_FORM"){
            return { ...this.userData, key: this.API_KEY }
        }
    },

    async api_calls(value){

        let response;
        let x = this;




        if(value == "SUBMIT_APPLICATION_FORM"){

            /** Start loader gif */
          this.showLoading();

          response = await this.$store.dispatch("application_confirm", this.api_params(value));

            /** If response contain status */
            if( response && 'status' in response){
              
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'success', message: response.data.message });

                    /** Clears all input field */
                    x.clearInputField(x.userData);
                }


                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }
                
              } 

              /** End loader gif */
              this.hideLoading();
        }

    },

    async submit(value){
        let x = this;
      
        if(value == "SUBMIT_APPLICATION_FORM"){
           this.api_calls(value);
            
        }

    }
  },
  created(){
       this.seoMetaData('Application Form' , '');
  }
};
</script>


<style scoped>

select{
    background-color: #f9fafa;
}

</style>
