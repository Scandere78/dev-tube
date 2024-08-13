<template>
    <div>
        <VideoCard :videoInfo="video"/>
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
            video: "Video Formation",
        };
    },
};
</script>