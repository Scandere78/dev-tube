import HomeFeed from "../views/HomeFeed.vue";
import VideoDetails from "../views/VideoDetails.vue";
import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: "Home",
        component:HomeFeed
    },
    {
        path:'/video/:id',
        name: "Video",
        component:VideoDetails
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router