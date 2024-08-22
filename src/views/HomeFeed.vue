<template>
    <div>
        <VideoCard v-for="video in videos" :key="video.id" 
        :videoInfo="video"/>
    </div>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";

export default {
    name: "HomeFeed",
    components: {
        VideoCard,
    },
    data() {
        return {
            videos: [],
        };
    },
    mounted() {
        const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCS2e0hEJMhwd6bNscS60xTg&filter=videos_latest&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9059f2e5a8msh935571fe96e7db2p17683bjsn86b7d77b2cfd',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};


fetch(url, options)
.then(response => response.json())
.then(data => this.videos = data.contents)
.catch(error => console.error("Probleme fetching the videos", error))
}
};
</script>