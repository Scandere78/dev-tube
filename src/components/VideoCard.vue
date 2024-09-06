<template>
    <div>
        <img :src="videoInfo.video.thumbnails[0].url" alt="">
        <h2>{{ videoInfo.video.title }}</h2>
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