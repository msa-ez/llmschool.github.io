<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 02_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_operate',
      props: {
          "분석/설계": {
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