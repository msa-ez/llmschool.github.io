<template>
    <!--    <div class="py-2 border-t-2 border-ui-primary" style="background-color: #1e88e5;">-->
    <div class="py-2 border-t-2 border-ui-primary" style="box-shadow: 0 7x 7px -7px #ccc; border-color: #147c7f;">
        <!--        <div class="container">-->
        <div class="is-not-mobile-main-top">

            <div class="flex item-center justify-center">

                <!-- 사이드바 버튼 -->
                <!--                <div style="max-width: 3%; z-index: 999;" >-->
                <!--                    <button class="p-3 text-black rounded-full "-->
                <!--                            @click="sidebarClicked()">-->
                <!--                        <MenuIcon size="20" />-->
                <!--                    </button>-->
                <!--                </div>-->


                <div class="flex flex-col items-center  sm:flex-row" style="margin-left:40px; place-self:center; ">
                    <!--                <div class="flex flex-col items-center px-3  mr-auto  sm:flex-row" style="margin-left:5%;">-->
                    <g-link
                            to="/operation/introduction/"
                            title="Home"
                    >
                        <img src="../img/llmschool_logo.svg" style="width:200px; height:50px;">
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>

                </div>

                <div class="flex flex-col items-center px-3   mr-auto  sm:flex-row"
                     style="justify-content:flex-end;margin-right:1.5%;">
                    <!-- <div class="modal-container">
                        <input id="modal-toggle" type="checkbox">
                        <label class="modal-btn"
                            for="modal-toggle" 
                            style="display: block;
                                width:120px;
                                height:36px;
                                line-height: 36px;
                                margin: 0 auto;
                                font-weight: 500;
                                font-size:24px;
                                color: #fff;
                                background: #147c7f;
                                font-size: 14px;
                                border: 0;
                                border-radius: 4px;
                                cursor: pointer;
                                text-align: center;
                                box-shadow: 0 5px 5px -5px #333;
                                transition: background 0.3s ease-in;" 
                            >커리큘럼 보기</label> 
                        <label class="modal-backdrop" for="modal-toggle"></label>
                        <div class="modal-content">
                            <label class="modal-close" for="modal-toggle">&#x2715;</label>
                            <h2>Cloud Native Modeling & Application 구현과정 교안</h2><hr />
                            <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image7.png"></g-image>
                            <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image8.png"></g-image>
                            <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image9.png"></g-image>
                            <g-image class="g-images" src="~/img/05_Community/04_교육상담_및_신청/image10.png"></g-image>
                        </div>
                    </div>  -->
                    <a href="https://forms.gle/bY7d4PDK7Ym2wU1f6" target="_blank">
                        <v-btn style="background-color:#147c7f !important;
                            border-radius: 4px;
                            margin-right:15px;
                            height: 36px;
                            width: 120px;
                            text-align: center;
                            line-height: 36px;
                            font-size: 14px;
                            font-weight: 700;"
                        ><span style="color:white;">컨설팅 문의</span>
                        </v-btn>
                    </a>
                    <a href="https://www.msaschool.io/operation/introduction/schedule/" target="_blank">
                        <v-btn style="background-color:#147c7f !important;
                            border-radius: 4px;
                            margin-right:40px;
                            height: 36px;
                            width: 120px;
                            text-align: center;
                            line-height: 36px;
                            font-size: 14px;
                            font-weight: 700;"
                        ><span style="color:white;">교과정 안내</span>
                        </v-btn>
                    </a>    
                </div>

            </div>
        </div>
        <div class="is-mobile-main-top is-mobile-main-top-640">

            <div class="flex item-center justify-center">

                <!-- 사이드바 버튼 -->
                <!--                <div style="max-width: 3%; z-index: 999;" >-->
                <!--                    <button class="p-3 text-black rounded-full "-->
                <!--                            @click="sidebarClicked()">-->
                <!--                        <MenuIcon size="20" />-->
                <!--                    </button>-->
                <!--                </div>-->


                <div class="flex flex-col items-center sm:flex-row is-mobile-main-top-img" style="margin-left: 40px; place-self:center; ">
                    <!--                <div class="flex flex-col items-center px-3  mr-auto  sm:flex-row" style="margin-left:5%;">-->
                    <g-link
                            to="/operation/introduction/"
                            title="Home"
                    >
                        <img src="../img/llmschool_logo.png" style="width:208px; height:auto;">
                    </g-link>
                    <ClientOnly>
                        <VueSearch v-if="!isSmall"></VueSearch>
                    </ClientOnly>

                </div>

                <div class="flex flex-col items-center px-3   mr-auto  sm:flex-row"
                     style="justify-content:flex-end;margin-right:1.5%;">
                    <v-btn class="is-mobile-main-top-btn-box" 
                        :href="'https://forms.gle/bY7d4PDK7Ym2wU1f6'"
                    ><span style="color:white;">컨설팅 문의</span>
                    </v-btn>
                    <v-btn class="is-mobile-main-top-btn-box" 
                        :href="'https://www.msaschool.io/operation/introduction/schedule/'"
                    ><span style="color:white;">교과정 안내</span>
                    </v-btn>
                </div>

            </div>
        </div>
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    settings {
    web
    }
    }
    }
</static-query>

<script>
    import Logo from "@/components/Logo";
    import {XIcon, MenuIcon} from 'vue-feather-icons'

    export default {
        components: {
            Logo,
            XIcon, MenuIcon
        },
        data: () => ({
            sidebarOpen: false,
            small: false,
        }),
        created() {
            var me = this
            me.innerWidth()
        },
        mounted() {
            var me = this
            if (typeof window != 'undefined') {
                $(window).resize(function () {
                    me.innerWidth()
                })
            }
        },
        methods: {
            innerWidth() {
                var me = this
                if (typeof window != 'undefined') {
                    if (window.innerWidth <= 1025) {
                        me.small = true
                    } else {
                        me.small = false
                    }
                    me.$emit('small', me.small)
                }
            },
        },
        computed: {
            isSmall() {
                return this.small
            },
            meta() {
                return this.$static.metadata;
            },
            settings() {
                return this.meta.settings;
            }
        }
    };
</script>


<style scoped>
    .g-images {
        margin:20px 0 20px 0;
    }

    .modal-container #modal-toggle.active ~ .modal-content, .modal-container #modal-toggle:checked ~ .modal-content {
        margin-top:80px;
    }
</style>
<style lang="scss">
    header {
        svg:not(.feather-search) {
            &:hover {
                @apply text-ui-primary;
            }
        }
    }

    .nav-link {
        &.active {
            @apply text-ui-primary font-bold border-ui-primary;
        }
    }
    @media only screen and (max-width:1410px){
        .is-not-mobile-main-top {
            display:none;
        }
        .is-mobile-main-top {
            display:block;
        }
        .is-mobile-main-top-btn-box {
            background-color:#147c7f !important;
            border-radius: 4px;
            margin-right: 15px;
            height: 33px;
            width: 120px;
            text-align: center;
            line-height: 36px;
            font-size: 14px;
            font-weight: 700;
        }
    }

    @media only screen and (max-width:640px){
        .is-mobile-main-top-640 .is-mobile-main-top-img {
            display:block;
            margin-left: 10px !important;
        }
        .is-mobile-main-top-btn-box {
            margin-bottom: 4px;
            margin-right: 0px !important;
        }
    }
    
</style>
