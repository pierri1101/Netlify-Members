<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>Plantão de Dúvidas</h1>
      <div class="top-right-button-container">
      </div>
      <piaf-breadcrumb />
      <b-tabs nav-class="separator-tabs ml-0 mb-5" content-class="tab-content" :no-fade="true">
        <b-tab :title="$t('Plantão de Dúvidas')">
          <b-row>
            <b-colxx lg="12" xl="12">
              <post v-for="(post,postIndex) in posts" :data="post" :key="`post_${postIndex}`" class="mb-4" />
            </b-colxx>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-colxx>
  </b-row>
</template>

<script>
import RecentPost from "../../../../components/Common/RecentPost";
import UserCardBasic from "../../../../components/Cards/UserCardBasic";
import UserFollow from "../../../../containers/pages/UserFollow";
import SingleLightbox from "../../../../containers/pages/SingleLightbox";
import GalleryDetail from "../../../../containers/pages/GalleryDetail";
import GalleryProfile from "../../../../containers/pages/GalleryProfile";
import Post from "../../../../containers/pages/Post";

import produtcs from "../../../../data/products";
import recentPosts from "../../../../data/recentPosts";
import followers from "../../../../data/follow";
import posts from "../../../../data/posts";
export default {
  components: {
    "single-lightbox": SingleLightbox,
    "gallery-detail": GalleryDetail,
    "gallery-profile": GalleryProfile,
    "user-follow": UserFollow,
    "recent-post": RecentPost,
    "user-card-basic": UserCardBasic,
    post: Post
  },
  data() {
    return {
      produtcs: produtcs.slice(0, 15),
      recentPosts,
      followers: followers.slice(0, 5),
      friends: followers.slice(0),
      posts
    };
  },
  methods: {},
  mounted() {}
};
</script>
