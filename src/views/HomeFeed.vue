<!-- HomeFeed.vue -->
<template>
    <div class="sm:px-32 flex flex-wrap justify-center">
        <videoCard v-for="video in videos"  :key="video.id" :videoInfo="video"/>
    </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue';

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
    mounted () {
        const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCoCqCzNVK5KVBV0Kw94mqYw&filter=videos_latest';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f9ed3b18c5mshb5f00e4a4065dccp146b42jsnec2f2a1321a0',
                'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

fetch(url, options)
.then((response) => response.json())
.then((data) => this.videos = data.contents)
.catch((error) => console.error("Probleme fetching the videos", error))
}
}
</script>
