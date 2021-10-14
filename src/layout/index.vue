<template>
  <app-header></app-header>
  <app-body><slot></slot></app-body>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

export default {
  name: 'AppLayout',
  components: { AppHeader, AppBody, AppFooter },
};
</script>
