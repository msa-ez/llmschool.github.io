
<template>
    <div class="font-sans antialiased text-ui-typo bg-ui-background">
        <div class="flex flex-col justify-start min-h-screen">
            <header
                    ref="header"
                    class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
                    @resize="setHeaderHeight"
            >
                <LayoutHeader/>
            </header>

            <main class="container-full relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">

                <aside
                        v-if="hasSidebar"
                        class="sidebar"
                        :class="{ 'open': sidebarOpen }"
                        :style="sidebarStyle"
                >
                    <div class="w-full pb-16 bg-ui-background">
                        <Sidebar @navigate="sidebarOpen = false"/>
                    </div>
                </aside>

                <div
                        class="w-full pb-24"
                        :class="{'pl-0 lg:pl-12 lg:w-3/4': hasSidebar}"
                >
                    <slot/>
                </div>

            </main>

        </div>

        <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
            <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
                    @click="sidebarOpen = ! sidebarOpen">
                <XIcon v-if="sidebarOpen"/>
                <MenuIcon v-else/>
            </button>
        </div>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>

<script>
    import Sidebar from "@/components/Sidebar";
    import LayoutHeader from "@/components/LayoutHeader";
    import {MenuIcon, XIcon} from 'vue-feather-icons';

    export default {
        components: {
            Sidebar,
            LayoutHeader,
            MenuIcon,
            XIcon,
        },
        data() {
            return {
                headerHeight: 0,
                sidebarOpen: false,
            }
        },
        watch: {
            sidebarOpen: function (isOpen) {
                document.body.classList.toggle('overflow-hidden', isOpen);
            }
        },
        methods: {
            setHeaderHeight() {
                this.$nextTick(() => {
                    this.headerHeight = this.$refs.header.offsetHeight;
                });
            }
        },
        computed: {
            sidebarStyle() {
                return {
                    top: this.headerHeight + 'px',
                    height: `calc(100vh - ${this.headerHeight}px)`
                }
            },
            hasSidebar() {
                return this.$page && this.headerHeight > 0;
            }
        },
        mounted() {
            this.setHeaderHeight();
        },
        metaInfo() {
            return {
                meta: [
                    {
                        key: 'og:type',
                        name: 'og:type',
                        content: 'website',
                    },
                    {
                        key: 'twitter:card',
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                    {
                        key: 'og:image',
                        name: 'og:image',
                        content: process.env.SITE_URL + '/logo.jpg',
                    },
                    {
                        key: 'twitter:image',
                        name: 'twitter:image',
                        content: process.env.SITE_URL + '/logo.jpg',
                    },
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>
