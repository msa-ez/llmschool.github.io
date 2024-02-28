<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 03_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_implement',
      props: {
          "구현": {
              type: String
          },
      },
      components: {
          MainPage
      }
  }
  </script>
  
  <style>
  </style>