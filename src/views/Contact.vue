<template>
  <div>
    
   <app-master>

       
     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Contact</h1>
            <ul class="page-list">
                <li><a href="/">Home</a></li>
                <li>Contact</li>
            </ul>
        </div>
     </app-breadcrumb>


    <!-- contact area start -->
    <div class="contact-area pd-top-100 pd-bottom-65">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-page-map">
                        <iframe class="w-100" src="https://maps.google.com/maps?q=18%2C%20Udi%20Street%2C%20Osborne%20Foreshore%2C%20Ikoyi%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"  style="border:0;" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="col-lg-4">
                    <form class="contact-form-wrap contact-form-bg">
                        <h4>Contact Now</h4>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Name"  @keyup="formData.name = $event.target.value" ref="name">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Phone"  @keyup="formData.phone = $event.target.value" ref="phone">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Email" @keyup="formData.email = $event.target.value" ref="email">
                        </div>
                        <div class="rld-single-input">
                            <textarea rows="10" placeholder="Message" @keyup="formData.message = $event.target.value" ref="message"></textarea>
                        </div>
                        <div class="btn-wrap text-center">
                            <button class="btn btn-yellow" @click.prevent="submit('SUBMIT_CONTACT_US_FORM')">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row pd-top-92">
                <div class="col-xl-4 col-sm-6">
                    <div class="single-contact-info">
                        <p><i class="fa fa-phone"></i>Call Us:</p>
                        <h5>(+234) 708 082 9417</h5>
                        <h5>(+234) 701 737 0898</h5>
                    </div>
                </div>
                <!-- <div class="col-xl-4 col-sm-6">
                    <div class="single-contact-info">
                        <p><i class="fa fa-phone"></i>Call Us:</p>
                        <h5>(+234) 111 222 333</h5>
                    </div>
                </div> -->
                <div class="col-xl-4 col-sm-6">
                    <div class="single-contact-info">
                        <p><i class="fa fa-envelope"></i>Have any Question?</p>
                        <h5>info@primenest.ng</h5>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="single-contact-info">
                        <p><i class="fa fa-map-marker"></i>Address</p>
                        <h5>18, Udi Street, Osborne Foreshore, Ikoyi Lagos</h5>
                        <!-- <h5>CA 95046, United States</h5> -->
                    </div>
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
  name: "Contact",
  mixins: [seo,pick,vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
  },
  data(){
      return{
        //   name_place: 'fffffffffff',
          formData: {
           name: ' ',
           phone: ' ',
           email: ' ',
           message: ' '
           
          }
      }
  },
  computed: {
    name: {
        get(){
            return this.formData.name;
        },
        set(value){
            this.formData.name = value;
        }    
    },

    phone: {
        get(){
            return this.formData.phone;
        },
        set(value){
            this.formData.phone = value;
        }    
    },
    email: {
        get(){
            return this.formData.email;
        },
        set(value){
            this.formData.email = value;
        }    
    },
    message: {
        get(){
            return this.formData.message;
        },
        set(value){
            this.formData.message = value;
        }    
    },

  },

  methods:{
      clearForm(){
          //console.log(this.$refs)
          this.$refs.name.value = '';
          this.$refs.phone.value = ' ';
          this.$refs.email.value = ' ';
          this.$refs.message.value = ' '

      },
      api_params(value) {
        if(value == "SUBMIT_CONTACT_US_FORM"){
            return { ...this.formData, key: this.API_KEY }
        }
    },

    async api_calls(value){

        let response;
        let x = this;




        if(value == "SUBMIT_CONTACT_US_FORM"){

            console.log('hello');
            /** Start loader gif */
          this.showLoading();

          response = await this.$store.dispatch("contact_us_confirm", this.api_params(value));

            /** If response contain status */
            if( response && 'status' in response){
              
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'success', message: response.data.message });

                    /** Clears all input field */
                    x.clearForm( );
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
      
        if(value == "SUBMIT_CONTACT_US_FORM"){
           this.api_calls(value);
            
        }

    }
  },
  created(){
       this.seoMetaData('Contact Us' , '');
  }
};
</script>


<style>



</style>
