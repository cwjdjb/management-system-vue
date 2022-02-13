export default {
  mounted() {
    window.addEventListener('resize', this.autoSize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.autoSize, false);
  },
  methods: {
    autoSize() {
      this.$nextTick(() => {
        let echartsInstance = echarts.getInstanceByDom(this.$refs.echarts);
        echartsInstance.resize();
      });
    },
  },
};
