<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Quote</ion-title>
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
      
      <ion-grid>
        <ion-row>
          <ion-col class="ion-align-self-end">
            <ion-card v-for="quote in selectedJob.quotes" :key="quote">
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label>{{quote}}</ion-label>
                <ion-button v-on:click="quotes" fill="outline" slot="end">View</ion-button>
              </ion-item>
              <ion-card-content>
                Last updated time.
              </ion-card-content>
            </ion-card>
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
      quotes (){
        this.$router.push({name: 'Quotes'})
      }
    },
    data() {
      return {
        quoteList: ['Quote 1', 'Quote 2', 'Quote 3', 'Quote 4'],
        jobsList: [{
            id: 0,
            name: "Job 1",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Sage Electric",
                quotes: [1, 2, 3, 4, 5]
              },
              {
                vendorName: "Dog Electric",
                quotes: [1, 2, 3]
              }
            ]
          },
          {
            id: 1,
            name: "Job 2",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Tag Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Bag Electric",
                quotes: [1, 2]
              },
              {
                vendorName: "Rag Electric",
                quotes: [1, 2, 3, 4]
              }
            ]
          }

        ]
    }
  },
    computed: {
    selectedJob: function () {
      const vendor = this.$route.params.vendor
      const name = this.$route.params.jobName
      const job = this.jobsList.filter( job => job.vendors.vendorName === vendor)
      console.log(job)
      return job
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