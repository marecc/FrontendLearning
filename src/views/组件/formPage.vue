<template>
  <div>
    <el-form>
      <el-form-item label="上传文件">
        <el-upload
          class="upload-demo"
          :action="'./'"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          name="file"
          multiple
          ref="upload"
          :limit="fileLimit"
          :auto-upload="false"
          :show-file-list="true"
          :on-success="handleSuccess"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :before-upload="beforeUpload"
        >
          <el-button size="small" type="primary">{{ "上传" }}</el-button>
        </el-upload></el-form-item
      >
    </el-form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      fileList: [],
      fileLimit: 3,
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handlePreview(file) {
      console.log("handelPreview:", file);
    },
    handleRemove(file, fileList) {
      console.log("handleRemove:", file, fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log("handleSuccess:", response, file, fileList);
    },
    handleExceed(err, file, fileList) {
      console.log("handleExceed:", err, file, fileList);
      this.$message.error('超出文件个数限制')
    },
    beforeUpload(file) {
      console.log("beforeUpload:", file);
    },
  },
};
</script>

<style>
</style>