<template>
    <div>
        <div class="star-calendar">
            <!-- 顶部年月日，切换月份按钮 -->
            <div class="star-calendar__top star-flex-center">
                <div
                    class="star-block-click"
                    @click="toggleDate('star-fade-left', 'removeYear', 'change-year')"
                >
                    <star-icon name="angle-double-left" size="22" color="#999"></star-icon>
                </div>
                <div
                    class="star-block-click"
                    @click="toggleDate('star-fade-left', 'removeMouth', 'change-mouth')"
                >
                    <star-icon name="angle-left" size="22" color="#999"></star-icon>
                </div>
                <div class="star-calendar__top__label">{{ formatDate(dateTime, 'yyyy年MM月') }}</div>
                <div
                    class="star-block-click"
                    @click="toggleDate('star-fade-right', 'addMouth', 'change-mouth')"
                >
                    <star-icon name="angle-right" size="22" color="#999"></star-icon>
                </div>
                <div
                    class="star-block-click"
                    @click="toggleDate('star-fade-right', 'addYear', 'change-year')"
                >
                    <star-icon name="angle-double-right" size="22" color="#999"></star-icon>
                </div>
            </div>
            <!-- 周一至周日 -->
            <div class="star-calendar__week star-flex-center">
                <div
                    class="star-calendar__day star-flex-center"
                    v-for="(item,index) of week"
                    :key="index"
                >{{ item }}</div>
            </div>
            <!-- 日期 -->
            <star-transition :name="transitionName">
                <div class="star-calendar__date star-flex-center" v-if="dateList.length > 0">
                    <div class="star-calendar__month">{{ formatDate(dateTime,'MM') }}</div>
                    <div
                        ref="checkDay"
                        :class="['star-calendar__day','star-flex-center',isChecked(item.date) && 'star-primary']"
                        v-for="(item,index) of dateList"
                        :key="index"
                        @click="handlerDate(item.date)"
                    >
                        <span>{{ item.day }}</span>
                    </div>
                </div>
            </star-transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "starCalendar",
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        rememberBefore: {
            type: Boolean,
            default: false,
        },
        starYear: {
            type: Date,
            default: () => {
                return new Date("2000-01-01");
            },
        },
        endYear: {
            type: Date,
            default: () => {
                return new Date("2100-01-01");
            },
        },
    },
    data() {
        return {
            dateTime: new Date(),
            showSelectTime: true,
            week: ["日", "一", "二", "三", "四", "五", "六"], // 周
            dateList: [], // 当月总天数
            checkData: null, // 选中的天数
            transitionName: "",
            currentLabel: "",
            currentData: [],
        };
    },
    mounted() {
        this.$nextTick(() => {
            if (!this.multiple) {
                this.checkData = this.formatDate(this.dateTime, "yyyy-MM-dd");
            } else {
                this.checkData = [];
                this.checkData.push(
                    this.formatDate(this.dateTime, "yyyy-MM-dd")
                );
            }
            this.getData(this.dateTime);
        });
    },
    updated() {
        let days = this.$refs.checkDay;
        let checkedDay = [];
        days.forEach((ele) => {
            ele.classList.remove("star-first-day");
            ele.classList.remove("star-nth-day");
            ele.classList.remove("star-last-day");
            let classList = ele.className.split(" ");
            if (classList.indexOf("star-primary") != -1) {
                checkedDay.push(ele);
            }
        });
        if (checkedDay.length > 1) {
            checkedDay[0].classList.add("star-first-day");
            for (let i = 1; i < checkedDay.length - 1; i++) {
                checkedDay[i].classList.add("star-nth-day");
            }
            checkedDay[checkedDay.length - 1].classList.add("star-last-day");
        }
    },
    methods: {
        // 切换年月公用函数
        toggleDate(transition, type, emit) {
            // transition：过度名称，type：addYear(下一年)、addMouth(下一月)、removeYear(上一年)、removeMouth(上一月)
            this.transitionName = transition;
            let year = this.formatDate(this.dateTime, "yyyy");
            let month = this.formatDate(this.dateTime, "MM");
            let dateTime = "";
            if(!this.rememberBefore) {
                this.checkData = null
            }
            switch (type) {
                case "addYear":
                    month = 1;
                    dateTime = new Date(`${parseInt(year) + 1}-${month}`);
                    break;
                case "addMouth":
                    if (parseInt(month) == 12) {
                        year = year + 1;
                        month = 1;
                    } else {
                        month = parseInt(month) + 1;
                    }
                    dateTime = new Date(`${year}-${month}`);
                    break;
                case "removeYear":
                    month = 1;
                    dateTime = new Date(`${parseInt(year) - 1}-${month}`);
                    break;
                case "removeMouth":
                    if (parseInt(month) == 1) {
                        year = year - 1;
                        month = 12;
                    } else {
                        month = parseInt(month) - 1;
                    }
                    dateTime = new Date(`${year}-${month}`);
                    break;
            }
            this.dateTime = dateTime;
            this.dateList = [];
            this.$nextTick(() => {
                this.getData(this.dateTime);
            });
            this.$emit(emit, this.dateTime);
        },
        // 点击切换日期
        handlerDate(date) {
            if (!this.multiple) {
                this.checkData = date;
            } else {
                if(this.checkData == null) this.checkData = []
                if (this.checkData.findIndex((ele) => ele == date) == -1) {
                    this.checkData.push(date);
                } else {
                    this.checkData.splice(
                        this.checkData.findIndex((ele) => ele == date),
                        1
                    );
                }
            }
            this.$emit("change-date", this.checkData);
        },
        // 判断是否为选中状态
        isChecked(val) {
            if(this.checkData == null) return
            if (!this.multiple) {
                return val == this.checkData;
            } else {
                return this.checkData.findIndex((ele) => ele == val) != -1
                    ? true
                    : false;
            }
        },
        // 获取某一个月份的所有日期
        getData(date) {
            if (!date) return;
            // 获取当月总天数并处理成数组形式的数据
            let days = new Date(
                this.formatDate(date, "yyyy"),
                this.formatDate(date, "MM"),
                0
            ).getDate();
            for (let i = 0; i < days; i++) {
                let obj = {
                    day: i + 1,
                    date: `${this.formatDate(date, "yyyy-MM")}-${
                        i + 1 < 10 ? "0" + (i + 1) : i + 1
                    }`,
                };
                this.dateList.push(obj);
            }
            this.$forceUpdate();
        },
        // 处理时间对象
        formatDate(date, type) {
            // date：时间，type：返回的时间类型，可选值为：yyyy、MM、dd、yyyy-MM-dd、yyyy-MM-dd hh:mm:ss
            let y = date.getFullYear(); // 年
            let M =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1; // 月
            let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); // 日
            let h =
                date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); // 时
            let m =
                date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes(); // 分
            let s =
                date.getSeconds() < 10
                    ? "0" + date.getSeconds()
                    : date.getSeconds(); // 秒
            switch (type) {
                case "yyyy":
                    return y;
                case "MM":
                    return M;
                case "dd":
                    return d;
                case "yyyy-MM":
                    return `${y}-${M}`;
                case "yyyy-MM-dd":
                    return `${y}-${M}-${d}`;
                case "yyyy-MM-dd hh:mm:ss":
                    return `${y}-${M}-${d} ${h}:${m}:${s}`;
                case "yyyy年MM月":
                    return `${y}年${M}月`;
            }
        },
    },
};
</script>
<style lang="less" scoped>
.star-calendar {
    width: 100%;
    min-height: 130px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
    .star-flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__top {
        height: 45px;
        width: 100%;
        justify-content: space-between !important;
        padding: 0 6px;
        box-sizing: border-box;
        &__label {
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: bold;
            color: #464646;
        }
        .star-block-click {
            width: 40px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    &__week {
        width: 100%;
        justify-content: flex-start !important;
        .star-calendar__day {
            height: 40px;
        }
    }
    &__date {
        justify-content: flex-start !important;
        flex-wrap: wrap;
        position: relative;
        .star-calendar__day {
            height: 60px;
        }
        .star-calendar__month {
            position: absolute;
            font-size: 160px;
            z-index: 0;
            top: 50%;
            left: 50%;
            color: rgba(242, 243, 245, 0.8);
            transform: translate(-50%, -50%);
        }
    }
    &__day {
        width: calc(100% / 7);
        border-radius: 10px;
        font-weight: bold;
        color: #464646;
        font-size: 16px;
        position: relative;
    }
}
.star-first-day {
    border-radius: 10px 0 0 10px !important;
}
.star-nth-day {
    border-radius: 0 !important;
}
.star-last-day {
    border-radius: 0 10px 10px 0 !important;
}
</style>