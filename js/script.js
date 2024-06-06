const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            
        }
    },
    methods:{

        getData() {
            for (let i = 0; i < 10; i++ ) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    this.mailList.push(response.data.response);
                });
                
            }
        },
    },
    
    created(){
        this.getData();
    },
}).mount('#app')




