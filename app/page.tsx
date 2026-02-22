import Image from "next/image"

export default function Home() {
  const profile = {
    fullname: "กันติชา ไชยชนะ",
    nickname: "ซีแกรม",
    his: ["เป็นคนเชียงราย","นักศึกษามหาวิทยาลัยเชียงใหม่","คณะวิศวะ สาขาคอมพิวเตอร์"],
    gender: "หญิง",
    birthday: "30-06-2006",
    age: 19,
    favoritefoods: ["ทะเลเผา","ชาบูลำฮิม","ต้มยำ"],
    hobbys: ["อ่านนิยาย","วาดรูป","เล่นเกม"],
    favoriteartists: "ไม่มี",
    image: "/profile.jpg",
  }
  return (
    <main style={{ padding: 20 }}>
      <h1>Profile</h1>
      <p><strong>ชื่อจริง : </strong>{profile.fullname}</p>
      <p><strong>ชื่อเล่น : </strong>{profile.nickname}</p>
      <p><strong>ประวัติย่อ</strong></p>
      {profile.his.map((line,index) => (<p key = {index}>{line}</p>))}
      <p><strong>เพศ : </strong>{profile.gender}</p>
      <p><strong>วันเกิด : </strong>{profile.birthday}</p>
      <p><strong>อายุ : </strong>{profile.age}</p>
      <p><strong>อาหารที่ชอบ</strong></p>
      <ul>
      {profile.favoritefoods.map((food,index) => (<p key = {index}>{food}</p>))}
      </ul>
      <p><strong>งานอดิเรก</strong></p>
      <ul>
      {profile.hobbys.map((hobbys,index) => (<p key = {index}>{hobbys}</p>))}
      </ul>
      <p><strong>ศิลปินที่ชอบ : </strong>{profile.favoriteartists}</p>
      <img
      src ={profile.image}
      alt = {"รูปโปรไฟล์"}
      width = {200}
      style = {{
        borderRadius: "50%",
        marginBottom: 20
      }}
      />
    </main>
  )
}