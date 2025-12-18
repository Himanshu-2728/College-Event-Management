const events = [
  {
    id: 1,
    title: "The Quiz Arena",
    date: "2025-11-25T08:00",
    location: "Innovation Hub",
    description:
      "Where Knowledge Meets Survival \n Welcome to the most thrilling quiz challenge of the year . It's not just about knowing the answers — It's about strategy, decision-making, and staying in the game till the very end. \n🔹 Teams will face mind-twisting questions \n🔹 Helping Cards can save you when the pressure hits \n 🔹 But beware…\n If your team fails to answer —\n 🎯 The Elimination Wheel decides who leaves the arena. \n Every round gets tougher. \n Every second counts. \n Only the sharpest, fastest, and boldest team survives till the last question \n ⚡ Are You Ready to Conquer the Arena? \n Invite your smartest buddies or challenge the strongest rivals — \n Because here, only the BEST brains stand tall . \n Regards \n President – Sahil Bele \n Vice President – Ananya Pandit",
    department: "CS",
    category: "Technical",
    type: "Competition",
    image: "quizarena.jpeg",
    spots: 150,
  },
  {
    id: 2,
    title: "Mind Matters",
    date: "2025-12-09T14:00",
    location: "CCC Auditorium",
    description:
      " ISTE Student Chapter presents- MIND MATTERS: \n Well-Being for a Better Tomorrow! College life is fun… but it can also be a lot — deadlines, expectations, pressure to keep up, and that annoying habit of overthinking everything.\n✨This session is designed to help you understand what's going on inside your head and learn ways to stay calm, focused and emotionally steady\n.Session details: \n📅 9/12/2025\n🕒 2 PM \n📍 CCC Auditorium \n Looking forward to see you all there, your presence will make it even more meaningful!",
    department: "CS",
    category: "Technical",
    type: "Workshop",
    image: "mindmatters.jpeg",
    spots: 40,
  },

  {
    id: 3,
    title: "ISRO Robotics Challenge",
    date: "2025-12-15T11:30",
    location: "EE Seminar Hall",
    description:
      "Welcome to the official Team Titans Selection Challenge for ISRO Robotics Challenge 2026!\n In this challenge, you will be given a problem statement along with curated learning resources to guide your journey. The selection process is designed to test your skills, problem-solving ability, creativity, consistency, and passion for robotics. \n After completing this challenge, shortlisted candidates will be invited to join Team Titans. \n Fill the Registration Form: \n Click the provided Register button for Registration for the challenge. \n Choose Your Domain: Select your preferred domain: Mechanical, Electronics, Software or Media. \n Access the Problem Statement: Download the domain-specific problem statement using the provided button on the top. \n Access the Learning Resources: Use the curated learning resources to guide your progress throughout the challenge(provided in PS button). \n What We're Looking For : \n - Consistency and dedication \n - Strong problem-solving skills \n - Creativity and innovation \n - Ability to learn independently \n -Teamwork and communication",
    department: "EE",
    category: "Technical",
    type: "Talk",
    image: "robotics.jpg",
    spots: 100,
  },
  {
    id: 4,
    title: "Flyers Design Contest",
    date: "2026-02-05T09:00",
    location: "College Ground",
    description:
      "This contest is more than just creating a design — it is about storytelling through visuals, understanding balance, playing with ideas, and transforming imagination into something people stop to look at.\n Whether you’re a passionate designer, someone who enjoys experimenting with aesthetics, or even a beginner with a creative spark - this stage welcomes you. \n No prior experience is required — only originality and curiosity.\n ---\n💡 Ready to Join? \n Feel free to share this with your classmates or anyone who might enjoy participating — great ideas deserve great visibility.\n Regards \n President – Sahil Bele \n Vice President – Ananya Pandit",
    department: "ME",
    category: "Sports",
    type: "Competition",
    image: "flyers.jpeg",
    spots: 0,
  },
  {
    id: 5,
    title: "Hackathon v2.0",
    date: "2025-11-25T08:00",
    location: "Innovation Hub",
    description:
      "Get ready to put your coding skills to the ultimate test!\n We are thrilled to announce our upcoming Hackathon. \n This 24/48-hour event is your chance to collaborate with talented peers, build groundbreaking projects around the theme of [Theme of Hackathon, e.g., 'Sustainable Tech' or 'AI in Education'], and compete for exciting prizes.\n  Whether you're a seasoned developer, a curious designer, or a brilliant strategist, we welcome all skill levels to join in the fun, learning, and innovation. \n Food, resources, and mentorship will be provided throughout the duration. \n Don't miss this opportunity to network, learn something new, and turn your innovative ideas into reality!\n Register now to secure your spot and start forming your team !",
    department: "CS",
    category: "Technical",
    type: "Competition",
    image: "hack.jpg",
    spots: 150,
  },

  {
    id: 6,
    title: "AI/ML Workshop",
    date: "2025-12-10T14:00",
    location: "CS Lab 301",
    description:
      "We invite you to join the AI/ML Workshop on 10 December 2025 from 2:00 PM to 5:00 PM at CSE lab 301.\n  This focused session is designed for students looking to deepen their understanding and practical application of Artificial Intelligence and Machine Learning techniques. \n Over 3hrs, we will dive into core topics such as deep learning fundamentals, model deployment using MLOps, ann practical applications in computer vision complete with hands-on coding exercises.\n This is a unique opportunity to learn from industry experts, expand your data science toolkit, and network with like-minded enthusiasts.\n Don't miss out on advancing your career in this rapidly evolving field!\n  Reserve your place today by registering now !",
    department: "CS",
    category: "Technical",
    type: "Workshop",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1000&q=80",
    spots: 50,
  },
  {
    id: 7,
    title: "CULTURA 2026",
    date: "2026-01-20T10:00",
    location: "Grand Auditorium",
    description:
      "We warmly invite all aspiring artists to participate in the Cultural Canvas painting competition, a cornerstone event of this year's festival celebrating our heritage. We challenge you to visually interpret the theme, 'Echoes of Tradition by bringing the beauty of our region's history and folklore to life on your canvas.\n Artists aged 10 and up can compete across Junior and Senior categories using watercolour, acrylics, or oil pastels. Registration is ₹300, and winners will receive cash prizes and the honor of having their work displayed in the main Festival Gallery. \n Please secure your spot by the 5 January 2026 and remember to bring all your personal supplies.",
    department: "Arts",
    category: "Cultural",
    type: "Fair",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    spots: 500,
  },
  {
    id: 8,
    title: "The Brushstroke Battle",
    date: "2026-01-15T12:00",
    location: "SC-310",
    description:
      "Unleash your artistic talent at The Pigment Pursuit painting competition! \n This year, we challenge artists to interpret the theme 'AI AGE' in their unique style. \n The event takes place on Saturday,from 12:00 AM to 3:00 PM at SC-310. Registration is 200 Rs. and open to all artists.\n  Remember to bring all your own materials (canvas, paints, brushes).\n Don't miss this opportunity to showcase your skill and win exciting prizes!",
    department: "Arts",
    category: "Cultural",
    type: "competition",
    image: "paint.jpg",
    spots: 500,
  },
  {
    id: 9,
    title: "Vichitra E-sports",
    date: "2026-01-10T13:00",
    location: "CCC Auditorium",
    description:
      "🔥 The ultimate Free Fire Max showdown is here! 🔥\n 💎 Massive Prizepool: 3,00,000 Diamonds! 💎\n 🏫 College Event Prizepool: 10,000 Diamonds\n 🏆 1st Place – 5000 Diamonds\n 🥈 2nd Place – 3000 Diamonds\n 🥉 3rd Place – 2000 Diamonds\n 📍 Venue: Electrical Department Room no. 205 , Yeshwantrao Chavan College of Engineering , Nagpur\n 🗓️ Date: 10th December | \n ⏰ 11:00 am onwards\n 💥 Compete, conquer, and represent your campus in the biggest Free Fire battleground!\n ⚔️ Play Hard. Win Harder. \n FOR MORE DETAILS CONTACT\n ARYAN SHINDE- 9699606317\n ONKAR DESHPANDE -9307595175\n KALPAK GHARAT- 9766047518",
    department: "Technical",
    category: "Sports",
    type: "competition",
    image: "game.jpeg",
    spots: 500,
  },
];
