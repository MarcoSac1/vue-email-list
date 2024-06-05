const { createApp } = Vue

createApp({
    data() {
        return {
            response : ''
        }
    },
    methods:{
        getData(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response);
                this.response = response.data.response;
            });
        }
    },

    created(){
        this.getData();
    },
}).mount('#app')