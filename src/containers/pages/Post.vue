<template>
  <b-card :class="className" no-body>
    <b-card-body>
      <div class="d-flex flex-row mb-3">
        <router-link to="#">
          <img
            :src="data.profilePic"
            alt="thumbnail"
            class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
          />
        </router-link>
        <div class="pl-3">
          <router-link to="#">
            <p class="font-weight-medium mb-0">{{data.name}}</p>
            <p class="text-muted mb-0 text-medium">{{data.date}}</p>
          </router-link>
        </div>
      </div>
      <p>{{data.detail}}</p>
      <single-lightbox
        v-if="data.type === 'image'"
        :thumb="data.image"
        :large="data.image"
        class-name="img-fluid border-0 border-radius mb-3"
      />
      <video-player
        v-else-if="data.type === 'video'"
        :autoplay="false"
        :controls="true"
        class-name="video-js card-img video-content mb-3"
        :poster="data.image"
        :sources="[{src: data.video, type: 'video/mp4'}]"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import SingleLightbox from "./SingleLightbox";
import VideoPlayer from "../../components/Common/VideoPlayer";

export default {
  props: ["class-name", "data"],
  components: {
    "single-lightbox": SingleLightbox,
    "video-player": VideoPlayer
  }
};
</script>
