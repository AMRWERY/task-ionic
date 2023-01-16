<template>
  <form class="ion-padding">
    <ion-item>
      <ion-label position="floating">E-mail</ion-label>
      <ion-input
        type="email"
        placeholder="Enter Your E-mail"
        v-model.trim="email"
      ></ion-input>
    </ion-item>

    <ion-item fill="solid">
      <ion-label position="floating">Password</ion-label>
      <ion-input
        type="password"
        placeholder="Enter Your Password"
        v-model.trim="password"
      ></ion-input>
    </ion-item>
    <ion-button expand="block">Login</ion-button>
  </form>
</template>

<script>
import { IonInput, IonItem, IonLabel, IonButton } from "@ionic/vue";

export default {
  components: { IonInput, IonItem, IonLabel, IonButton },

  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style scoped>
form {
  margin: 10rem auto;
}
</style>
