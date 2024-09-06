<template>
    <div>
        <img :src="videoInfo.video.thumbnails[0].url" alt="">
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
};
</script>