<template>
  <ion-content>
    <ion-list
      :inset="true"
      class="ion-padding"
      v-for="market in markets"
      :key="market.id"
    >
      <ion-item
        :router-link="{ name: 'MarketMenu', params: { marketId: market.id } }"
      >
        <ion-label>{{ market.name }} </ion-label>
        <ion-img :src="market.logo" />
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { IonItem, IonLabel, IonList, IonImg, IonContent } from "@ionic/vue";
import marketData from "../assets/db.json";

export default {
  components: { IonItem, IonLabel, IonList, IonImg, IonContent },

  data() {
    return {
      markets: marketData.markets,
    };
  },

  methods: {
    goToMarket() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style scoped>
ion-img {
  width: 80px;
}
</style>
