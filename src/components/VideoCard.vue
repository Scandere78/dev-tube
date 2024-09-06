<template>
    <div class="w-40 h-44 m-2 p-2 rounded-xl bg-white shadow-lg "
    @mouseover=" isHovering = true"
    @mouseleave="isHovering = false">
        <img :src="
        isHovering 
            ? videoInfo.video.movingThumbnails[0].url 
            :videoInfo.video.thumbnails[0].url
        "
         alt="Thumbnail"
    />
        <h3>{{ videoInfo.video.title }}</h3>
        <h4>DEVTUBE</h4>
        <p>
            {{videoInfo.video.stats.views}} views -
            {{ videoInfo.video.publishedTimeText }}</p>
    </div>
</template>

<script>
export default {
    name: "VideoCard",
    props: {
        videoInfo: Object,
    },
    data() {
        return {
            isHovering: false
        }
        
    }
};
</script>