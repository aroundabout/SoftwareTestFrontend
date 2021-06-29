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
        <el-table-column prop="annualsales" label="AnnualSales" width=""> </el-table-column>
        <el-table-column prop="leavedays" label="LeaveDays" width=""> </el-table-column>
        <el-table-column prop="cashtoaccountrate" label="CashtoAccountRate" width=""> </el-table-column>
        <el-table-column prop="expectedOutput" label="ExpectedOutput" width="">
        </el-table-column>
        <el-table-column prop="actualOutput" label="ActualOutput" width="">
        </el-table-column>
        <el-table-column prop="correctness" label="Correctness" width="">
        </el-table-column>
        <el-table-column prop="time" label="Time" width=""> </el-table-column>
        <el-table-column prop="testerName" label="TesterName" width="">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
      ],

      options: [
        {
          value: "statement",
          label: "statement",
        },
        {
          value: "judge",
          label: "judge",
        },
        {
          value: "condition",
          label: "condition",
        },
        {
          value: "judge-condition",
          label: "judge-condition",
        },
        {
          value: "condition-combination",
          label: "condition-combination",
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
        this.$axios.get("/question3/commission/"+this.value, {}).then((res) => {
          console.log(res.data);
          console.log(this.tableData);
          this.tableData=res.data;
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
.title{
  font-size: 30px;
}
</style>