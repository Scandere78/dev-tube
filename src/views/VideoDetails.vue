<template>
    <div class="px-8 flex flex-col items-center">
        <div class="video-container sm:w-2/3 w-4/5">
            <iframe 
                :src="'https://youtube.com/embed/${$route.params.id}'" 
                class="video rounded-xl shadow-lg">
            </iframe>
        </div>
        <h3 class="mt-4 text-center texte-lg">{{videoInfo.title}}</h3>
    </div>
</template>

<script>
import { data } from 'autoprefixer';

export default {
    name: "VideoDetails",
    data(){
        return {
            videoInfo: [],
        };
    },
    mounted() {
        const url = 'https://youtube138.p.rapidapi.com/video/details/?id='+this.$route.params.id;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9059f2e5a8msh935571fe96e7db2p17683bjsn86b7d77b2cfd',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response  => response.json())
    .then(data => this.videoInfo = data)
    .catch(error => console.error("Error fetching video :", error));
},
};
</script>

<style>
.video-container {
    padding-top: 40%;
    position: relative;
    margin: 0 auto 10px auto;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 10;
    height: auto;

}
</style>