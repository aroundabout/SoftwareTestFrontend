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
    <div>result:{{ result }}</div>

    <div class="result_container">
      <el-table :data="tableData" style="width: 100%; margin: 0 auto">
        <el-table-column prop="TestCaseID" label="TestCaseID" width="">
        </el-table-column>
        <el-table-column prop="MonthTalkTime" label="MonthTalkTime" width="">
        </el-table-column>
        <el-table-column prop="YearUnpaidNum" label="YearUnpaidNum" width="">
        </el-table-column>
        <el-table-column
          prop="UnpaidCostAcrossYear"
          label="UnpaidCostAcrossYear"
          width=""
        >
        </el-table-column>
        <el-table-column prop="PayMethod" label="PayMethod" width="">
        </el-table-column>
        <el-table-column prop="ExpectedOutput" label="ExpectedOutput" width="">
        </el-table-column>
        <el-table-column prop="ActualOutput" label="ActualOutput" width="">
        </el-table-column>
        <!-- <el-table-column prop="Correctness" label="Correctness" width=""> -->
        <!-- </el-table-column> -->
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
      result: "",

      tableData: [],

      options: [
        {
          value: "boundary",
          label: "boundary",
        },
        {
          value: "equivalence",
          label: "equivalence",
        },
        {
          value: "decision",
          label: "decision",
        },
        {
          value: "final",
          label: "boundary+equivalence",
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
        this.$axios.get("/question6/charge/" + this.value, {}).then((res) => {
          console.log(res.data);
          window.alert(
            "True:" +
              res.data.True +
              " False:" +
              res.data.False +
              " acc:" +
              res.data.accuracy
          );
          this.result =
            "True:" +
            res.data.True +
            " False:" +
            res.data.False +
            " acc:" +
            res.data.accuracy;
        });
        this.$axios.get("/show-csv/csv/charge/" + this.value).then((res) => {
          this.tableData = res.data;
          console.log(this.tableData);
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