<template>
  <div class="container">
    <div class="contentContainer">
      <!-- 標題 -->
      <div class="block">
        <div class="divider">
          <span class="lineX"> x </span>
          <span class="line"></span>
          <span class="lineX"> x </span>
        </div>

        <div class="title">
          <h1>{{ text.title }}</h1>
          <p>{{ text.subTitle }}</p>
        </div>

        <div class="divider">
          <span class="lineX"> x </span>
          <span class="line"></span>
          <span class="lineX"> x </span>
        </div>
      </div>

      <!-- 運算式 -->
      <div
        class="block"
        v-for="currentMultiplicand in count.multiplicand"
        :key="currentMultiplicand"
      >
        <div class="itemContainer">
          <div class="multiplicand">{{ currentMultiplicand + 1 }}</div>
          <div
            class="item"
            v-for="number in count.multiplierCount"
            :key="number"
          >
            {{ currentMultiplicand + 1 }} x {{ number }} =
            {{ (currentMultiplicand + 1) * number }}
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <span class="footerText">{{ text.footer }}</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MultiplicationTable",
  data() {
    return {
      text: {
        title: "九九乘法表",
        subTitle: "MULTIPLICATION CHART",
        footer: "Copyright © 2019 HexSchool. All rights reserved.",
      },
      count: {
        multiplicand: 8,
        multiplierCount: 9,
      },
    };
  },
};
</script>
<style scoped>
@import "../style.scss";
</style>