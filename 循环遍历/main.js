const app = new Vue({
    el: '#app',
    data: {
        books: [{
            id: 1,
            name: "计算机程序构造与解释",
            time: "2018-12-12",
            price: 12.54,
            num: 1
        }, {
            id: 2,
            name: "唐诗",
            time: "2002-01-12",
            price: 112.55,
            num: 1
        }, {
            id: 3,
            name: "Java",
            time: "2000-12-12",
            price: 55.56,
            num: 1
        }]
    },
    methods: {
        dec(index) {
            if (this.books[index].num > 1) {
                this.books[index].num--;
            }
        },
        inc(index) {
            this.books[index].num++
        },
        format(price) {
            return "￥" + price.toFixed(2)
        }
    },
    filters: {
        formatPrice(price) {
            return "￥" + price.toFixed(2)
        }
    }
})