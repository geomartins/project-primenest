
export const database ={

    data(){
        return {
            estates: [
                {name: 'Primenest Estate', code: 'primenest',  },
                {name: 'Lilycourt Estate', code: 'lilycourt',  }
            ], 

            estate_details: [

                //1
                { 
                    estate_code: 'primenest', 
                    name: 'Bricks Court Ifo',
                    price: '6000000',
                    featured_thumbnail: '/img/3 1.png',
                    featured_image: '/img/ifo1.png',
                    

                    keypoint: {
                        bedroom: '3',
                        bathroom: '3',
                        area: '300',
                        parking: '02 Outdoor',
                    },
                    base_floor: {
                        plan: '',
                        image: ''
                    },
                    amenities: [
                        '24hrs security personnel',
                        'Children layground',
                        'Well drainage system',
                        '24hrs uninteruppted power supply',
                        'Ample parking space',
                        ' CCTV camera',
                        'Adequate water supply'
                    ],
                    facts: { 
                        living_room: '20 x 16 sq feet', 
                        garage: '20 x 16 sq feet',
                        bedroom: '20 x 16 sq feet',
                        bathroom: '20 x 16 sq feet',
                    }
                    

                },




                 //2
                 { 
                    estate_code: 'primenest', 
                    name: 'Bricks Court Sagamu',
                    price: '6000000',
                    featured_thumbnail: '/img/3 1.png',
                    featured_image: '/img/ifo1.png',
                    

                    keypoint: {
                        bedroom: '03',
                        bathroom: '03',
                        area: '300',
                        parking: '02 Outdoor',
                    },
                    base_floor: {
                        plan: '<p>Set in two rapidly developing suburbs Ogun State, the Bricks Court Estate is a modern settlement equipped with top-of-the-class facilities, and which provides the level of comfort and serenity you experience in the high-end areas of the state.</p> <p> Bricks Court Estate houses 100 units of 3-bedroom bungalows. Each apartment has a dedicated parking area, treated water supply, and all amenities that guarantee convenience and a luxurious lifestyle. </p>',
                        image: ''
                    },
                    amenities: [
                        '24hrs security personnel',
                        'Children layground',
                        'Well drainage system',
                        '24hrs uninteruppted power supply',
                        'Ample parking space',
                        ' CCTV camera',
                        'Adequate water supply'
                    ],
                    facts: { 
                        living_room: '20 x 16 sq feet', 
                        garage: '20 x 16 sq feet',
                        bedroom: '20 x 16 sq feet',
                        bathroom: '20 x 16 sq feet',
                    }
                    

                },



                
                 //3
                 { 
                    estate_code: 'lilycourt', 
                    name: 'LilyCourt Akinde',
                    price: '12800000',
                    featured_thumbnail: '/img/lilo.png',
                    featured_image: '/img/biglil.png',
                    

                    keypoint: {
                        bedroom: '02',
                        bathroom: '02',
                        area: '300',
                        parking: '02 Outdoor',
                    },
                    base_floor: {
                        plan: '<p>Lily Court is positioned in a laid-back environment in Ifako-Ijaiye, a fast-developing Lagos suburb. An ultra-modern community which boasts elite amenities and optimum security, its location makes it ideal for young families and the business class. </p>  <p> \n\n Lily Court houses 36 units of 2-bedroom apartments with a base floor of 300 sqm. Both rooms are en-suite. The living room combines the lounge and dining area, and the amply-spaced kitchen allows you to define your style. The terraces are excellent for taking in refreshing air and overlooking the scenic landscape. </p>',
                        image: ''
                    },
                    amenities: [
                        '24hrs security personnel',
                        'Children layground',
                        'Well drainage system',
                        '24hrs uninteruppted power supply',
                        'Ample parking space',
                        'CCTV camera',
                        'Adequate water supply'
                    ],
                    facts: { 
                        living_room: '20 x 16 sq feet', 
                        garage: '20 x 16 sq feet',
                        bedroom: '20 x 16 sq feet',
                        bathroom: '20 x 16 sq feet',
                    }
                    
                },







                 //4
                 { 
                    estate_code: 'lilycourt', 
                    name: 'LilyCourt Ajegunle',
                    price: '14500000',
                    featured_thumbnail: '/img/lilo.png',
                    featured_image: '/img/biglil.png',
                    

                    keypoint: {
                        bedroom: '03',
                        bathroom: '03',
                        area: '300',
                        parking: '02 Outdoor',
                    },
                    base_floor: {
                        plan: '<p> Lily Court is positioned in a laid-back environment in Ifako-Ijaiye, a fast-developing Lagos suburb. An ultra-modern community which boasts elite amenities and optimum security, its location makes it ideal for young families and the business class. \n\n A total 126 units, Lily Court 3-bedroom apartments are based on a 300 sqm. The lounge and dining area covers 31 sqm. The master bedroom claims 18 sqm while the other rooms are 12 sqm large. All rooms are en-suite. </p> <p> The estate provides each apartment with a dedicated parking area, treated water, and 24 x 7 electricity supply. Sitting in the centre of the park is a recreational complex which allows easy access to daily essentials, personal or social, thereby improving your living experience. </p>',
                        image: ''
                    },
                    amenities: [
                        '24hrs security personnel',
                        'Children layground',
                        'Well drainage system',
                        '24hrs uninteruppted power supply',
                        'Ample parking space',
                        'CCTV camera',
                        'Adequate water supply'
                    ],
                    facts:{ 
                        living_room: '20 x 16 sq feet', 
                        garage: '20 x 16 sq feet',
                        bedroom: '20 x 16 sq feet',
                        bathroom: '20 x 16 sq feet',
                    }

                },





            ]
            
            


        }
    },


    methods:{

        estate_properties(){

            let x = this;
            let estates_database = x.estates;

            for (var key in estates_database) {
                if (estates_database.hasOwnProperty(key)) {

                    //estates_database[key] = '';
                    console.log(estates_database[key].code);
                    //console.log(key);
                }
            }

        },

        fetchEstateDetailsUsingCode(code){

            //filter array of object based

            let x = this;
            var result = x.estate_details.filter(function(number, index) {
                return number.estate_code == code;
            });

           return result;

        },

        fetchEstateDetailsUsingCodeAndName(code,name){

            //filter array of object based

            let x = this;
            var result = x.estate_details.filter(function(number, index) {
                return number.estate_code == code && number.name.toLowerCase() == name;
            });

           return result;

        },

       
        

    }

    

}