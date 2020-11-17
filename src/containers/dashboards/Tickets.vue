<template>
  <b-card>
    <vue-perfect-scrollbar>
      <list-with-user-item v-for="(ticket, index) in tickets" :data="ticket" detail-path="" :key="index" />
    </vue-perfect-scrollbar>
  </b-card>
</template>
<script>
import ListWithUserItem from "../../components/Listing/ListWithUserItem";
import tickets from "../../data/tickets";

export default {
  components: {
    "list-with-user-item": ListWithUserItem
  },
  data() {
    return {
      tickets
    };
  }
};
</script>
