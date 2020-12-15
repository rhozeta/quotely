<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Hello my assholes`</ion-title>

        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col class="ion-align-self-end">
            Job 1
          </ion-col>
          <ion-col class="ion-align-self-end">
            Job 2
          </ion-col>
          <ion-col class="ion-align-self-center">
            Job 3
          </ion-col>
          <ion-col class="ion-align-self-center">
            Job 4
          </ion-col>
        </ion-row>
      </ion-grid>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with these tacos<a target="_blank" rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow
  } from '@ionic/vue';
  import {
    defineComponent
  } from 'vue';

  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonCol,
      IonGrid,
      IonRow
    }
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>