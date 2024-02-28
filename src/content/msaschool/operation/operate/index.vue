<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 04_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_operate',
      props: {
          "배포/운영": {
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