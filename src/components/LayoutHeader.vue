<template>
  <div class="py-2 border-t-2 border-ui-primary">
    <div class="container-full">
<!--      <div class="flex items-center justify-between -mx-2 sm:-mx-4">-->
<!--        <div class="flex flex-col items-center px-2 mr-auto sm:px-4 sm:flex-row">-->
<!--          <g-link-->
<!--            to="/introduction"-->
<!--            class="flex items-center text-ui-primary"-->
<!--            title="Home"-->
<!--          >-->
<!--            <Logo :width="40" class="text-ui-primary" />-->
<!--            <span class="hidden ml-2 text-xl font-black tracking-tighter uppercase sm:block">-->
<!--              {{ meta.siteName }}-->
<!--            </span>-->
<!--          </g-link>-->

<!--          <div v-if="settings.nav.links.length > 0" class="hidden ml-2 mr-5 sm:block sm:ml-8">-->
<!--            <g-link-->
<!--              v-for="link in settings.nav.links"-->
<!--              :key="link.path"-->
<!--              :to="link.path"-->
<!--              class="block p-1 font-medium nav-link text-ui-typo hover:text-ui-primary"-->
<!--            >-->
<!--              {{ link.title }}-->
<!--            </g-link>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="w-full px-2 sm:px-4 max-w-screen-xs">-->
<!--          <ClientOnly>-->
<!--&lt;!&ndash;            <Search />&ndash;&gt;-->
<!--          </ClientOnly>-->
<!--        </div>-->

<!--        <div class="flex items-center justify-end px-2 sm:px-4">-->

<!--          <a v-if="settings.web" :href="settings.web" class="hidden ml-3 sm:block" target="_blank" rel="noopener noreferrer" title="Website" name="Website">-->
<!--            <GlobeIcon size="1.5x" />-->
<!--          </a>-->

<!--          <ToggleDarkMode class="ml-2 sm:ml-8">-->
<!--            <template slot="default" slot-scope="{ dark }">-->
<!--              <MoonIcon v-if="dark" size="1.5x" />-->
<!--              <SunIcon v-else size="1.5x" />-->
<!--            </template>-->
<!--          </ToggleDarkMode>-->

<!--        </div>-->
<!--      </div>-->
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
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from '@/components/Logo';
import { SunIcon, MoonIcon, GlobeIcon, } from "vue-feather-icons";

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    GlobeIcon,
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    }
  }
};
</script>