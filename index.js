const user = {
    firstname:      "Aleksey",
    lastname:       "Kornilov",
    university:     "Omsu",
    init(){
        console.log(`Hello, my name is ${this.firstname} ${this.lastname} I study in ${this.university}`)
    }
}

const userWithAgeAndCourse = Object.create(user,{
    age:{
        value: '20'
    },
    course:{
        value: '3'
    }
})

console.log(userWithAgeAndCourse.__proto__ === user)

userWithAgeAndCourse.init()