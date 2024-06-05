const { createApp } = Vue

createApp({
    data() {
        return {
            mail: [],
            response : ''
        }
    },
    methods:{

        getData() {
            for (let i = 0; i < 10; i++ ) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    this.mail.push(response.data.response);
                });
                
            }
        },
    },
    
    created(){
        this.getData();
    },
}).mount('#app')




