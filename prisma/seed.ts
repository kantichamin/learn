import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      fullname: "กันติชา ไชยชนะ",
      nickname: "ซีแกรม",
      history: [
        "เป็นคนเชียงราย",
        "นักศึกษามหาวิทยาลัยเชียงใหม่",
        "คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์",
      ],
      gender: "หญิง",
      birthday: "30 มิถุนายน 2549",
      age: 19,
      favoriteFoods: ["ทะเลเผา", "ชาบูลำฮิม", "ต้มยำ"],
      hobbies: ["อ่านนิยาย", "วาดรูป", "เล่นเกม"],
      favoriteArtists: "ไม่มี",
      image: "/profile.jpg",
    },
  });

  console.log("Seed complete");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
