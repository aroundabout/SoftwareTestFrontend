<template>
  <div>
    <div>
      <p class="title">测试数据</p>
    </div>
    <div class="user_container">
      <el-row :gutter="20">
        <div class="Echarts">
          <el-select
            v-model="version"
            placeholder="请选择"
            @change="currentVersionSel"
          >
            <el-option
              v-for="item in versionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
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
        <el-table-column prop="Host" label="Host" width=""> </el-table-column>
        <el-table-column prop="Display" label="Display" width="">
        </el-table-column>
        <el-table-column prop="Peripheral" label="Peripheral" width="">
        </el-table-column>
        <el-table-column
          prop="ExpectedOutput1"
          label="ExpectedOutput1"
          width=""
        >
        </el-table-column>
        <el-table-column prop="ActualOutput1" label="ActualOutput1" width="">
        </el-table-column>
        <el-table-column
          prop="ExpectedOutput2"
          label="ExpectedOutput2"
          width=""
        >
        </el-table-column>
        <el-table-column prop="ActualOutput2" label="ActualOutput2" width="">
        </el-table-column>
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
          value: "boundary-input",
          label: "boundary-input",
        },
        {
          value: "boundary-output",
          label: "boundary-output",
        },
      ],
      versionOptions: [
        {
          value: "v1",
          label: "v1",
        },
        {
          value: "v2",
          label: "v2",
        },
      ],
      value: "",
      version: "",
    };
  },
  created() {},
  methods: {
    myEcharts() {},
    currentSel(selVal) {
      this.selVal = selVal;
      this.dialogVisible = true;
    },
    currentVersionSel(versionValue) {
      this.version = versionValue;
    },
    submit() {
      if (this.value == "") {
        alert("请选择测试类型");
      } else {
        console.log(this.value);
        var url = "/question3/commission/" + this.value;
        if (this.version != "") {
          url += "/" + this.version;
        }
        this.$axios.get(url, {}).then((res) => {
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
        this.$axios
          .get("/show-csv/csv/commission/" + this.value)
          .then((res) => {
            console.log(res.data);
            this.tableData = res.data;
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