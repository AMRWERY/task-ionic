<template>
  <i class="fa-solid fa-arrow-left-long fa-2x" @click="goBack"></i>
  <ion-content>
    <ion-grid>
      <ion-row class="ion-justify-content-around">
        <ion-col size="9">
          <ion-card v-for="item in market.items" :key="item.id">
            <ion-card-header>
              <ion-card-title>{{ item.title }}</ion-card-title>
              <ion-card-subtitle>${{ item.price }}</ion-card-subtitle>
              <ion-img :src="item.image" />
              <i
                class="fa-solid fa-plus fa-2x"
                type="click"
                @click="addToCart"
              ></i>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
            </ion-card-header>
          </ion-card>
        </ion-col>
        <ion-col size="3">
          <ion-card>
            <h4>Total Amount: $ {{ totalAmount }}</h4>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from "@ionic/vue";
import marketData from "../assets/db.json";

export default {
  components: {
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
  },

  data() {
    return {
      market: null,
      cart: JSON.parse(localStorage.getItem("cartData")) || [],
      qty: 0,
      total: 0,
      totalItems: 0,
    };
  },

  created() {
    const marketId = this.$route.params.marketId;
    this.market = marketData.markets.find((market) => market.id == marketId);
  },

  computed: {
    totalAmount() {
      return this.cart.reduce(function (sum, item) {
        return sum + item.price;
      }, 0);
    },
  },

  methods: {
    addToCart(item) {
      let indx = this.cart.indexOf(item);
      if (indx > -1) {
        this.cart[indx]["qty"]++;
        this.cart[indx]["itemTotal"] =
          this.cart[indx]["qty"] * this.cart[indx]["price"];
      } else {
        item["itemTotal"] = item.qty * item.price;
        this.cart.push(item);
      }

      localStorage.setItem("cartData", JSON.stringify(this.cart));
    },
    totalPrice(item) {
      return item.price * item.qty;
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
ion-img {
  width: 80px;
}
</style>
