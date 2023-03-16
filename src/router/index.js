import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: () =>
            import("@/components/HelloWorld.vue"),
    },
    {
        path: "/home",
        name: "Pagination",
        component: () =>
            import(
                "@/components/Page.vue"
            ),
    },
    {
        path: "/home/:id",
        name: "PageDetails",
        component: () =>
            import(
                "@/components/PageDetails.vue"
            )
    },
    {
       path:"/:pathMatch(.*)*",
       name: "PageNotFound",
       component: () =>
           import(
            "@/components/PageNotFound.vue"
           )
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes, 
});

export default router;