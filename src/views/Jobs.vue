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

          <ion-title size="large">Hello my butthole`</ion-title>

        </ion-toolbar>
      </ion-header>

      <!-- Search Bar -->
      <ion-searchbar animated></ion-searchbar>
      
      <ion-grid>
        <ion-row>
          <ion-col class="ion-align-self-end">
            <div v-for="(vendor) in jobsList" :key="vendor">
            <ion-card>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>{{ vendor.vendors[0].vendorName  }}</ion-label>
                <ion-button v-on:click="quotes(vendor)" fill="outline" slot="end">View</ion-button>
              </ion-item>
              <ion-card-content>
                5 quotes, last updated yesterday.
              </ion-card-content>
            </ion-card>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>


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
    },
    methods: {
      quotes (vendor){
        this.$router.push({name: 'Quote'})
        console.log(vendor)
      }
    },

    data() {
      return {
        jobName: this.$route.params.jobName,
        jobsList: [{
            id: 1,
            name: "Job 1",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Sage Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Dog Electric",
                quotes: [1, 2, 3]
              }
            ]
          },
          {
            id: 2,
            name: "Job 2",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Tag Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Bag Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Rag Electric",
                quotes: [1, 2, 3, 4]
              }
            ]
          }

        ] 
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