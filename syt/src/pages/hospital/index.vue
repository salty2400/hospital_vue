<template>
  <div class="hospital">
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon>
            <document />
          </el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon>
            <setting />
          </el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon>
            <InfoFilled />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon>
            <Search />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容展示区域:路由组件展示位置 -->
    <div class="content">
      <!-- 子组件展示结构地方 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//左侧菜单需要用到的图标
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetail";
//获取仓库对象
let detailStore = useDetailStore();
let $router = useRouter();
let $route = useRoute();
const changeActive = (path: string) => {
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
};

onMounted(() => {
  detailStore.getHospital($route.query.hoscode as string);
  detailStore.getDeparment($route.query.hoscode as string);
});
</script>

<style scoped lang="scss">
.hospital {
  display: flex;

  .menu {
    margin-top: 20px;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      color: #7f7f7f;
      margin-bottom: 5px;
      margin-left: 5px;
    }
  }

  // .el-icon {
  //   margin-top: 5px;
  // }

  .content {
    flex: 8;
  }
}
</style>
