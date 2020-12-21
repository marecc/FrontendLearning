<template style="height: 100%;">
  <div class="main" :style="colorVal">
    <div class="loginTable">
      <el-form class="loginForm" :model="userForm">
        <div class="formItem">
          <el-form-item label="账户" label-width="40px"
            ><el-input
              size="medium"
              v-model="userForm.userName"
              placeholder="请输入账户名"
            ></el-input
          ></el-form-item>
        </div>
        <div class="formItem">
          <el-form-item label="密码" label-width="40px">
            <el-input
              size="medium"
              v-model="userForm.userPassword"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
        </div>
        <div class="formItem">
          <el-form-item label-width="40px">
            <el-button style="width: 100%" size="medium">登录</el-button>
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
      userForm: {
        userName: "",
        userPassword: "",
      },
      colorVal: "",
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
          currentColor.r == targetColor.r &&
          currentColor.g == targetColor.g &&
          currentColor.b == targetColor.b
        ) {
          //判断对象相等时需要具体到属性
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
  .loginTable {
    margin-top: 25%;
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