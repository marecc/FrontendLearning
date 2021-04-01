<template>
  <div class="mainContainer">
    <div class="formContainer">
      <el-form
        ref="elForm"
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="90px"
        label-position="left"
      >
        <el-form-item label="单行文本" prop="singleLineText">
          <el-input
            v-model="formData.singleLineText"
            placeholder="请输入单行文本"
            clearable
            :style="{ width: '100%' }"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="多行文本" prop="multipleLineText">
          <el-input
            v-model="formData.multipleLineText"
            type="textarea"
            placeholder="请输入多行文本"
            :autosize="{ minRows: 4, maxRows: 4 }"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="计数器" prop="counter">
          <el-input-number
            v-model="formData.counter"
            placeholder="计数器"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="下拉选择" prop="selection">
          <el-select
            v-model="formData.selection"
            placeholder="请选择下拉选择"
            clearable
            :style="{ width: '100%' }"
          >
            <el-option
              v-for="(item, index) in selectionOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="级联选择" prop="multipleSelection">
          <el-cascader
            v-model="formData.multipleSelection"
            :options="multipleSelectionOptions"
            :props="multipleSelectionProps"
            :style="{ width: '100%' }"
            placeholder="请选择级联选择"
            clearable
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="单选框组" prop="check">
          <el-radio-group v-model="formData.check" size="medium">
            <el-radio
              v-for="(item, index) in checkOptions"
              :key="index"
              :label="item.value"
              :disabled="item.disabled"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="多选框组" prop="multipleCheck">
          <el-checkbox-group v-model="formData.multipleCheck" size="medium">
            <el-checkbox
              v-for="(item, index) in multipleCheckOptions"
              :key="index"
              :label="item.value"
              :disabled="item.disabled"
              >{{ item.label }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="开关" prop="switch" required>
          <el-switch v-model="formData.switch"></el-switch>
        </el-form-item>
        <el-form-item label="滑块" prop="slider" required>
          <el-slider :max="100" :step="1" v-model="formData.slider"></el-slider>
        </el-form-item>
        <el-form-item label="时间选择" prop="timeSelector">
          <el-time-picker
            v-model="formData.timeSelector"
            format="HH:mm:ss"
            value-format="HH:mm:ss"
            :picker-options="{ selectableRange: '00:00:00-23:59:59' }"
            :style="{ width: '100%' }"
            placeholder="请选择时间选择"
            clearable
          ></el-time-picker>
        </el-form-item>
        <el-form-item label="时间范围" prop="timeRange">
          <el-time-picker
            v-model="formData.timeRange"
            is-range
            format="HH:mm:ss"
            value-format="HH:mm:ss"
            :style="{ width: '100%' }"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            range-separator="至"
            clearable
          ></el-time-picker>
        </el-form-item>
        <el-form-item label="日期选择" prop="dateSelector">
          <el-date-picker
            v-model="formData.dateSelector"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{ width: '100%' }"
            placeholder="请选择日期选择"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="日期范围" prop="dateRange">
          <el-date-picker
            type="daterange"
            v-model="formData.dateRange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            :style="{ width: '100%' }"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            range-separator="至"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="评分" prop="score">
          <el-rate v-model="formData.score"></el-rate>
        </el-form-item>
        <el-form-item label="颜色选择" prop="colorSelector" required>
          <el-color-picker
            v-model="formData.colorSelector"
            size="medium"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="上传" prop="upload" required>
          <el-upload
            ref="upload"
            :file-list="uploadfileList"
            :action="uploadAction"
            :before-upload="uploadBeforeUpload"
          >
            <el-button size="small" type="primary" icon="el-icon-upload"
              >点击上传</el-button
            >
          </el-upload>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            placeholder="请输入密码"
            clearable
            show-password
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="buttonContainer">
      <el-button type="primary" @click="">提交</el-button>
      <el-button type="info" @click="reset">清空</el-button>
    </div>
  </div>
</template>
<script>
import resetForm from "../../utils/resetForm";

export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        singleLineText: undefined,
        multipleLineText: undefined,
        counter: undefined,
        selection: undefined,
        multipleSelection: [],
        check: undefined,
        multipleCheck: [],
        switch: false,
        slider: 0,
        timeSelector: null,
        timeRange: null,
        dateSelector: null,
        dateRange: null,
        score: 0,
        colorSelector: null,
        upload: null,
        password: undefined,
      },
      rules: {
        singleLineText: [
          {
            required: true,
            message: "请输入单行文本",
            trigger: "blur",
          },
        ],
        multipleLineText: [
          {
            required: true,
            message: "请输入多行文本",
            trigger: "blur",
          },
        ],
        counter: [
          {
            required: true,
            message: "计数器",
            trigger: "blur",
          },
        ],
        selection: [
          {
            required: true,
            message: "请选择下拉选择",
            trigger: "change",
          },
        ],
        multipleSelection: [
          {
            required: true,
            type: "array",
            message: "请至少选择一个multipleSelection",
            trigger: "change",
          },
        ],
        check: [
          {
            required: true,
            message: "单选框组不能为空",
            trigger: "change",
          },
        ],
        multipleCheck: [
          {
            required: true,
            type: "array",
            message: "请至少选择一个multipleCheck",
            trigger: "change",
          },
        ],
        timeSelector: [
          {
            required: true,
            message: "请选择时间选择",
            trigger: "change",
          },
        ],
        timeRange: [
          {
            required: true,
            message: "时间范围不能为空",
            trigger: "change",
          },
        ],
        dateSelector: [
          {
            required: true,
            message: "请选择日期选择",
            trigger: "change",
          },
        ],
        dateRange: [
          {
            required: true,
            message: "日期范围不能为空",
            trigger: "change",
          },
        ],
        score: [
          {
            required: true,
            message: "评分不能为空",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
      uploadAction: "https://jsonplaceholder.typicode.com/posts/",
      uploadfileList: [],
      selectionOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      multipleSelectionOptions: [],
      checkOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      multipleCheckOptions: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
      ],
      multipleSelectionProps: {
        multiple: false,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getMultipleSelectionOptions() {
      // TODO 发起请求获取数据
      this.multipleSelectionOptions;
    },
    reset(){
      resetForm(this.$refs.elForm)
    },
    uploadBeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 2;
      if (!isRightSize) {
        this.$message.error("文件大小超过 2MB");
      }
      return isRightSize;
    },
  },
};
</script>
<style scoped>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}

.el-upload__tip {
  line-height: 1.2;
}
.mainContainer {
  display: flex;
  flex-direction: column;
}
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
