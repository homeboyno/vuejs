const app = new Vue ({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                data: '2006-2',
                price: 85.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                data: '2008-10',
                price: 85.00,
                count: 1
            },
            {
                id: 4,
                name: '《c++从入门到入土》',
                data: '2010-10',
                price: 100.00,
                count: 1
            }
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '¥' + price.toFixed(2)
        // }
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--

        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            //1.普通的for循环
            let totalPrice = 0
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice

            //2.for (let i in this.books)
            // let totalPrice = 0
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            //3. for(let i of this.book)
            // let totalPrice
            // for (let i of this.books) {
            //     totalPrice =+ item.price * item.count
            // }
            // return totalPrice

            //4.reduce

            // return this.books.reduce(function (preValue, book) {
            //     return preValue + book.price * book.count
            // }, 0)
            return this.books.reduce((pre,book) => pre + book.price * book.count)

        }
    }
})

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
const nums = [10, 20 ,30, 50, 111, 40, 56]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);

/*

//高阶代码的应用
let total = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n * 2
}).reduce(function (prevValue, n) {
    return prevValue + n    
}, 0)

//filter中的回调函数有一个要求：必须返回一个boolean
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，当函数内部会过滤掉这次的n
let newNums = nums.filter(function (n) {
    return n < 100
})


//1.需求：去除所有小于100的数字
let newNums = []
for (let n of nums) {
    if (n < 100) {
        newNums.push(n)
    }
}

//2,将所有小于100的数字进行转化：全部*2
let new2Nums = []
for (let n of newNums) {
    new2Nums.push(n * 2)
}

//map函数的使用
//20，40，80，100
let new2Nums =  newNums.map(function (n) {
    return n * 2
})

// 3.需求：将所有new2Num数字相加


//3,reduce函数的使用
//reduce作用对数组中所有内容进行汇总 preValue:上一次返回的值
let total = new2Nums.reduce(function(preValue, n){
    return preValue + n
}, 0)
//第一次： preValue 0 n 20
//第二次： preValue 20 n 40
//第三次： preValue 60 n 80
//第四次： preValue 140 n 100
//240
// 函数式编程

*/