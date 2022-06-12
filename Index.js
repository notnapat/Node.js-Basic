//Modules fs Asynchronous(Non-Blocking) อ่าน และ เขียนไฟล์  Index.txt + input.js + output.txt
const fs = require('fs')

//Modu fs Asyn อ่านไฟล์จาก input.txt
fs.readFile("myFile/input.txt", 'utf-8', (err, data) => {
      if (err) return console.log("เกิดข้อผิดผลาด", err)

      // Modu fs Asyn เขียนไฟล์ เพิ่มข้อมูลไปยัง output.txt
      const outputText = `1สร้างไฟล์ output.txt พร้อมกับเขียนข้อมูลลงไป\n${data}\n3ไฟล์ถูกเขียนเมื่อ${new Date()}`
      fs.writeFile("myFile/output.txt", outputText, err => {
            if (err) return console.log("เกิดข้อผิดผลาด", err)
            console.log(data)
            setTimeout(() => {
                 console.log("หน่วง") 
            },3000);
            console.log(outputText)
            console.log("เขียนไฟล์เรียบร้อย")
      })
})

//__________________________________________________________________________________________________________________


// // Modules fs  Synchronous(Blocking) อ่าน และ เขียนไฟล์  Index.txt + input.js + output.txt
// const fs = require('fs')

// //Modu fs Syn อ่านไฟล์จาก input.txt

// const data = fs.readFileSync('myFile/input.txt','utf-8')
// console.log(data)

// //Modu fs Syn เขียนไฟล์ เพิ่มข้อมูลไปยัง output.txt
// const outputText = `1สร้างไฟล์ output.txt พร้อมกับเขียนข้อมูลลงไป\n${data}\n3ไฟล์ถูกเขียนเมื่อ${new Date()}`
// fs.writeFileSync("myFile/output.txt",outputText)
// console.log(outputText)
//             setTimeout(() => {
//                  console.log("หน่วง11") 
//             },3000);
// console.log("เขียนไฟล์เสร็จเรียบร้อย")

//___________________________________________________________________________________________________________________

// // Modules Basic  Index.js + mymodules.js = ดึงฟังชั่นจากอีกไฟล์มาใช้
// const mymodules = require ('./modules/mymodules')

// const number = 300000

// console.log(mymodules.getCurrenttime())
// console.log(mymodules.add(40,20))
// console.log(mymodules.formatNumber(number))