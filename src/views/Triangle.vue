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
        <el-table-column prop="TestCaseID" label="TestCaseID" width="">
        </el-table-column>
        <el-table-column prop="Edge1" label="Edge1" width=""> </el-table-column>
        <el-table-column prop="Edge2" label="Edge2" width=""> </el-table-column>
        <el-table-column prop="Edge3" label="Edge3" width=""> </el-table-column>
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
// import qs from "qs"
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
          value: "equivalence",
          label: "equivalence",
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
        this.$axios.get("/question1/triangle/" + this.value, {}).then((res) => {
          console.log(res.data);
          
        });


        this.$axios.get("/show-csv/csv/triangle/"+this.value,)
          .then((res) => {
            this.tableData=res.data;
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