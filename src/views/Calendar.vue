<template>
  <div>
    <div>
      <p class="title">测试数据</p>
    </div>
    <div class="user_container">
      <el-row :gutter="20">
        <div class="Echarts">
          <el-select v-model="value" placeholder="请选择" @change="currentSel">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button type="primary" @click="submit">提交测试</el-button>
        </div>
      </el-row>
    </div>
    <div class="result_container">
      <el-table :data="tableData" style="width: 100%; margin: 0 auto">
        <el-table-column prop="testCaseId" label="TestCaseId" width="">
        </el-table-column>
        <el-table-column prop="year" label="Year" width=""> </el-table-column>
        <el-table-column prop="Month" label="Month" width=""> </el-table-column>
        <el-table-column prop="Day" label="Day" width=""> </el-table-column>
        <el-table-column prop="ExpectedOutput" label="ExpectedOutput" width="">
        </el-table-column>
        <el-table-column prop="ActualOutput" label="ActualOutput" width="">
        </el-table-column>
        <!-- <el-table-column prop="Correctness" label="Correctness" width="">
        </el-table-column> -->
        <el-table-column prop="Time" label="Time" width=""> </el-table-column>
        <el-table-column prop="TesterName" label="TesterName" width="">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],

      options: [
        {
          value: "boundary",
          label: "boundary",
        },
        {
          value: "equivalence-weak-general",
          label: "equivalence-weak-general",
        },
        {
          value: "equivalence-strong-general",
          label: "equivalence-strong-general",
        },
        {
          value: "equivalence-weak-robust",
          label: "equivalence-weak-robust",
        },
        {
          value: "equivalence-strong-robust",
          label: "equivalence-strong-robust",
        },
      ],
      value: "",
    };
  },
  created() {},
  methods: {
    myEcharts() {},
    currentSel(selVal) {
      this.selVal = selVal;
      this.dialogVisible = true;
    },
    submit() {
      if (this.value == "") {
        alert("请选择测试类型");
      } else {
        console.log(this.value);
        this.$axios.get("/question8/calendar/" + this.value, {}).then((res) => {
          console.log(res.data);
          console.log(this.tableData);
          this.tableData = res.data;
        });
        this.$axios.get("/show-csv/csv/calendar/" + this.value).then((res) => {
          this.tableData = res.data;
          console.log(this.tableData[0].Correctness);
        });
      }
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style scoped>
.Echarts {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.user_container {
}
.title {
  font-size: 30px;
}
</style>