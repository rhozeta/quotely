<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ jobName }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Hello my assholes`</ion-title>

        </ion-toolbar>
      </ion-header>

      <!-- Search Bar -->
      <ion-searchbar animated></ion-searchbar>
      
      <!-- <ion-grid>
        <ion-row>
          <ion-col class="ion-align-self-end">
            <ion-card v-for="(vendorName,index) in vendors" :key="vendorName">
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>{{ vendorName[index] }}</ion-label>
                <ion-button v-on:click="quotes(vendorName)" fill="outline" slot="end">View</ion-button>
              </ion-item>
              <ion-card-content>
                5 quotes, last updated yesterday.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid> -->

    <ul>
      <li  v-for="vendor in vendors" :value="vendor.value" :key="vendor">
        {{ vendorName.label }}
      </li>
    </ul>

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
      // IonCol,
      // IonGrid,
      // IonRow
    },
    methods: {
      quotes (vendor){
        this.$router.push({name: 'Quote'})
        console.log(vendor[0].values)
      }
    },

    data() {
      return {

        jobName: this.$route.params.jobName,
        vendors: this.$route.params.vendors,

    }
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