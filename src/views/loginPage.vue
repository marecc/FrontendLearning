<template style="height: 100%;">
  <div class="main" :style="colorVal">
    <h1 class="title">FrontEndLearning</h1>
    <div class="loginTable">
      <el-form
        ref="loginForm"
        :rules="rules"
        class="loginForm"
        :model="userForm"
      >
        <div class="formItem">
          <el-form-item label="账户" :label-width="labelWidth" prop="userName"
            ><el-input
              size="medium"
              v-model="userForm.userName"
              placeholder="请输入账户名"
            ></el-input
          ></el-form-item>
        </div>
        <div class="formItem">
          <el-form-item
            label="密码"
            :label-width="labelWidth"
            prop="userPassword"
          >
            <el-input
              type="password"
              size="medium"
              v-model="userForm.userPassword"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
        </div>
        <div class="formItem">
          <el-form-item :label-width="labelWidth">
            <el-button @click="loginConfirm" style="width: 100%" size="medium"
              >登录</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorVal: "",
      labelWidth: "55px",
      userForm: {
        userName: "",
        userPassword: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.blingblingBackground();
  },
  methods: {
    blingblingBackground() {
      var color1 = { r: 123, g: 237, b: 159 };
      var color2 = { r: 30, g: 144, b: 255 };

      var currentColor = { r: 123, g: 237, b: 159 };
      var targetColor = { r: 30, g: 144, b: 255 };
      setInterval(() => {
        if (
          //判断对象相等时需要具体到属性
          currentColor.r == targetColor.r &&
          currentColor.g == targetColor.g &&
          currentColor.b == targetColor.b
        ) {
          if (targetColor == color1) {
            targetColor = color2;
          } else {
            targetColor = color1;
          }
        } else {
          //红
          if (currentColor.r > targetColor.r) {
            currentColor.r--;
          } else if (currentColor.r < targetColor.r) {
            currentColor.r++;
          }
          //绿
          if (currentColor.g > targetColor.g) {
            currentColor.g--;
          } else if (currentColor.g < targetColor.g) {
            currentColor.g++;
          }
          //蓝
          if (currentColor.b > targetColor.b) {
            currentColor.b--;
          } else if (currentColor.b < targetColor.b) {
            currentColor.b++;
          }
        }
        this.colorVal =
          "background:rgb(" +
          currentColor.r +
          "," +
          currentColor.g +
          "," +
          currentColor.b +
          ");";
      }, 80);
    },
    //登录方法
    loginConfirm() {
      this.$refs.loginForm.validate((valid) => {
        if (
          valid &&
          this.userForm.userName == "marec" &&
          this.userForm.userPassword == "marec"
        ) {
          let loginLoading = this.$loading('loginTable')
          setTimeout(() => {
            loginLoading.close()
            this.$router.push("mainPage");
          }, 2000);
        } else {
          if (this.userForm.userName != "" && this.userForm.userPassword != "")
            this.$message.error("账户或密码错误");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-top: 5%;
    font-size: 50px;
  }
  .loginTable {
    margin-top: 5%;
    height: 450px;
    width: 450px;
    .loginForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .formItem {
        padding-bottom: 1%;
      }
    }
  }
}
</style>