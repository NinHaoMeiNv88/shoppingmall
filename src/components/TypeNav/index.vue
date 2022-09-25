<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseleaveIndex" @mousemove="mousemoveshow">
        <h2 class="all">全部商品分类</h2>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>

        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div>
                <div
                  class="item"
                  v-for="(iv, index) in categoryList"
                  :key="iv.categoryId"
                  :class="{ bgs: indexs == index }"
                >
                  <h3 @mousemove="moveIndex(index)">
                    <a
                      :data-categoryname="iv.categoryName"
                      :data-category1Id="iv.categoryId"
                      >{{ iv.categoryName }}</a
                    >
                  </h3>

                  <!-- 二三级分类 -->
                  <div
                    class="item-list clearfix"
                    :style="{ display: indexs == index ? 'block' : 'none' }"
                  >
                    <div
                      class="subitem"
                      v-for="ivv in iv.categoryChild"
                      :key="ivv.categoryId"
                    >
                      <dl>
                        <dt>
                          <a
                            :data-categoryname="ivv.categoryName"
                            :data-category2Id="ivv.categoryId"
                            >{{ ivv.categoryName }}</a
                          >
                        </dt>
                        <dd>
                          <em
                            class="fore"
                            v-for="ivvv in ivv.categoryChild"
                            :key="ivvv.categoryId"
                          >
                            <a
                              :data-categoryname="ivvv.categoryName"
                              :data-category3Id="ivvv.categoryId"
                              >{{ ivvv.categoryName }}</a
                            >
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      indexs: -1,
      show: true,
    };
  },
  mounted() {
    this.$store.dispatch("categoryList");
    if (this.$route.path != "/home") {
      this.show = false;
    }
    // console.log(this)
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    // 鼠标移入
    // moveIndex(index){
    //   // console.log(index)
    //   this.indexs = index
    // },
    // 给三级联动添加节流 es5写法
    moveIndex: throttle(function (index) {
      this.indexs = index;
      // console.log("zhang")
    }, 50),
    //
    mousemoveshow() {
      // console.log("zhang")
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    // 鼠标移除
    mouseleaveIndex() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
      this.indexs = -1;
    },
    // 跳转
    goSearch(e) {
      let targetNode = e.target;
      let { categoryname, category1id, category2id, category3id } =
        targetNode.dataset;
      if (categoryname) {
        // console.log('a')
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
      // this.$router.push({
      //   name: "search"
      // })
      // console.log("tiaozhuan")
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .bgs {
          background-color: aquamarine;
        }
        /*过渡动画:商品分类 进入阶段*/
        .sort-enter {
          height: 0px;
        }

        .sort-enter-active {
          transition: all 0.3s;
        }
        .sort-enter-to {
          height: 461px;
        }
      }
    }
  }
}
</style>
