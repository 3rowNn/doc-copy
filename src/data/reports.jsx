const reports = [
    {
      "userId": 1,
      "id": 1,
      "title": "ปุ่มมีตำแหน่งที่ไม่สอดคล้องกันในบางหน้า",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "การแสดงผลบนมือถือไม่รองรับหน้าจอขนาดเล็กบางรุ่น",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ฟีเจอร์ค้นหาไม่รองรับการค้นหาคำใกล้เคียงหรือคำที่สะกดผิด",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "ไม่สามารถกรองเอกสารตามวันที่อัปโหลดได้",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "การดาวน์โหลดเอกสารขนาดใหญ่บางครั้งล้มเหลวโดยไม่มีข้อความแจ้งเตือน",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "ไม่มีการแสดงไอคอนที่ชัดเจนสำหรับเอกสารประเภทต่าง ๆ (PDF, Word, Excel)",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "ผู้ใช้ไม่สามารถเพิ่มเอกสารใหม่ได้หากมีการเชื่อมต่อช้าหรือไม่เสถียร",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "ระบบล่มเมื่ออัปโหลดเอกสารที่มีขนาดใหญ่เกิน 500MB",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "การเลื่อนหน้าเว็บมีการกระตุกเมื่อเอกสารจำนวนมากปรากฏในหน้าเดียว",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "ขนาดตัวอักษรของหมวดหมู่ย่อยเล็กเกินไป ทำให้ยากต่อการอ่าน",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "การแชร์ลิงก์ของเอกสารไม่สามารถใช้งานได้เมื่อเข้าสู่ระบบด้วยอุปกรณ์อื่น",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "การแจ้งเตือนเมื่อเอกสารหมดอายุหรือถูกลบไม่มีการส่งให้ผู้ใช้งาน",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "ระบบจัดการแท็กเอกสารไม่รองรับการแก้ไขหรือเพิ่มภายหลังการอัปโหลด",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "สีของลิงก์และข้อความในบางส่วนขัดแย้งกับพื้นหลัง",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "เมนูนำทางด้านบนซับซ้อนเกินไป ทำให้หาหมวดหมู่เอกสารยาก",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "การแสดงผลของรูปภาพตัวอย่างเอกสารมีขนาดไม่เท่ากัน",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "หน้าแรกโหลดช้าหากมีเอกสารจำนวนมาก",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "การค้นหาเอกสารที่มีชื่อไฟล์คล้ายกันใช้เวลานาน",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "การแสดงผลของรูปภาพตัวอย่างเอกสารมีขนาดไม่เท่ากัน",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "การโหลดตัวอย่างเอกสาร (Preview) มีความล่าช้าสำหรับเอกสารขนาดใหญ่",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "การประมวลผลเอกสารที่มีภาพประกอบมากมายมีข้อผิดพลาด",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "การกรองเอกสารตามผู้เขียนล้มเหลวเมื่อมีผู้เขียนมากกว่า 100 คน",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "การเรียงลำดับเอกสารตามคะแนนหรือการดาวน์โหลดใช้เวลาเกิน 5 วินาที",
      "completed": false
    },
    {
      "userId": 2,
      "id": 24,
      "title": "การแสดงผลบนเบราว์เซอร์เก่า (เช่น Internet Explorer) ช้ามาก",
      "completed": false
    },
    {
      "userId": 2,
      "id": 25,
      "title": "การใช้งานระบบในช่วงเวลาที่มีผู้ใช้เยอะพร้อมกันทำให้การตอบสนองล่าช้า",
      "completed": true
    },
    {
      "userId": 2,
      "id": 26,
      "title": "การใช้งานระบบในช่วงเวลาที่มีผู้ใช้เยอะพร้อมกันทำให้การตอบสนองล่าช้า",
      "completed": true
    },
    {
      "userId": 2,
      "id": 27,
      "title": "การใช้งานระบบในช่วงเวลาที่มีผู้ใช้เยอะพร้อมกันทำให้การตอบสนองล่าช้า",
      "completed": true
    },
    {
      "userId": 2,
      "id": 28,
      "title": "ไม่มีการเข้ารหัสลิงก์สำหรับเอกสารที่แชร์",
      "completed": false
    },
    {
      "userId": 2,
      "id": 29,
      "title": "ระบบอนุญาตให้ผู้ใช้อัปโหลดไฟล์ที่อาจเป็นอันตราย (เช่น .exe)",
      "completed": false
    },
    {
      "userId": 2,
      "id": 30,
      "title": "การจัดการสิทธิ์การเข้าถึงเอกสารไม่ปลอดภัย ผู้ใช้งานทั่วไปสามารถเข้าถึงเอกสารสำคัญ",
      "completed": true
    },
    {
      "userId": 2,
      "id": 31,
      "title": "ไม่มีระบบล็อกเอาต์อัตโนมัติหากไม่มีการใช้งานเกินระยะเวลาที่กำหนด",
      "completed": false
    },
    {
      "userId": 2,
      "id": 32,
      "title": "ไม่มีการแจ้งเตือนเมื่อมีผู้เข้าถึงเอกสารที่สำคัญหรือเอกสารที่ถูกตั้งค่าความลับ",
      "completed": false
    },
    {
      "userId": 2,
      "id": 33,
      "title": "ข้อมูลผู้ใช้ที่เพิ่มความคิดเห็นในเอกสารไม่ถูกซ่อน (เช่น อีเมล)",
      "completed": false
    },
    {
      "userId": 2,
      "id": 34,
      "title": "ระบบจัดเก็บรหัสผ่านแบบ Plaintext แทนการแฮช",
      "completed": false
    },
    {
      "userId": 2,
      "id": 35,
      "title": "การตรวจสอบสิทธิ์ (Authentication) ไม่มีตัวเลือก 2FA",
      "completed": true
    },
    {
      "userId": 2,
      "id": 36,
      "title": "ไม่มีการจำกัดจำนวนครั้งของการเข้าสู่ระบบที่ล้มเหลว",
      "completed": true
    },
    {
      "userId": 2,
      "id": 37,
      "title": "ระบบแสดงข้อผิดพลาดโดยไม่มีข้อความแจ้งให้เข้าใจถึงปัญหา",
      "completed": false
    },
    {
      "userId": 2,
      "id": 38,
      "title": "การนำเอกสารออกจากคลังไม่มีข้อความยืนยันก่อนลบ",
      "completed": false
    },
    {
      "userId": 2,
      "id": 39,
      "title": "ระบบไม่รองรับการเพิ่มคำอธิบายในเอกสารที่อัปโหลด",
      "completed": false
    },
    {
      "userId": 2,
      "id": 40,
      "title": "ไม่มีการแสดงตัวอย่างเอกสารก่อนดาวน์โหลด",
      "completed": true
    },
    {
      "userId": 3,
      "id": 41,
      "title": "การแสดงรายการเอกสารไม่สามารถปรับแต่งรูปแบบการแสดงผลได้ (เช่น List หรือ Grid)",
      "completed": false
    },
    {
      "userId": 3,
      "id": 42,
      "title": "อมูลเมตาของเอกสาร (เช่น ผู้เขียน วันที่) ไม่สมบูรณ์หรือหายไปในบางกรณี",
      "completed": false
    },
    {
      "userId": 3,
      "id": 43,
      "title": "tempore ut sint quis recusandae",
      "completed": true
    },
    {
      "userId": 3,
      "id": 44,
      "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      "completed": true
    },
    {
      "userId": 3,
      "id": 45,
      "title": "velit soluta adipisci autem ipsa voluptas",
      "completed": true
    },

]


export function fetchReports(){
return reports.slice(0, 20)
}