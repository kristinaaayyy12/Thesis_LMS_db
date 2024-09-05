import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
  const user = await prisma.user.createMany({
    data: [{
      name: "Name",
      email: "student@email.com",
      emailVerified: null,
      image: null,
      password: "$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi",
      isTwoFactorEnabled: true,
      role: "STUDENT"
    },

    {
      name: "Name",
      email: "instructor@email.com",
      emailVerified: null,
      image: null,
      password: "$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi",
      isTwoFactorEnabled: true,
      role: "INSTRUCTOR"
    },

    {
      name: "Name",
      email: "admin@email.com",
      emailVerified: null,
      image: null,
      password: "$2b$12$Vng91.9rqf3BrDFzeddxPuvqJLD1rGPswAXmcWoFzbVAstDf9MWYi",
      isTwoFactorEnabled: true,
      role: "ADMIN"
    }
    ]
  })
  console.log("Created new user:", user);

  const updatedUser = await prisma.user.update({       //emailVerified & image
    where: { email: "email@email.com" },
    data: {
      emailVerified: new Date(),
      image: "https://example.com/image.jpg"
    },

  })
  console.log("Updated User:", updatedUser);

  const userWithAccounts = await prisma.user.findMany({      //Accounts  Account[]
    include: {
      Accounts: true,
      Posts: true,
      VerificationToken: true,
      PasswordResetToken: true,
      TwoFactorToken: true
    }
  })
  console.log(userWithAccounts);

  const userWithTwoFactorConfirmation = await prisma.user.findUnique({
    where: {
      id: "1287645",
    },
    include: {
      TwoFactorConfirmation: true,
      Profile: true,
    },
  });
  console.log(userWithTwoFactorConfirmation);

  const account = await prisma.account.create({
    data: {
      userId: "4210876",
      type: "ksdakhgb",
      provider: "provider ng ano?",
      providerAccountId: "23874371vbnvhv",
      refresh_token: "refresh token",
      access_token: "access token",
      expires_at: 1234567890,
      token_type: "some token type",
      scope: "some scope",
      id_token: "some id token",
      session_state: "some session state",
    },
  });
  console.log(account);

  const accountID = await prisma.account.findUnique({
    where: {
      id: "account id",
    },
  });
  console.log(accountID);

  const accountWithUser = await prisma.account.findUnique({
    where: {
      id: 'some-account-id',
    },
    include: {
      user: true,
    },
  });
  console.log(accountWithUser);

  const updatedAccount = await prisma.account.update({
    where: {
      id: "account id",
    },
    data: {
      refresh_token: "new refresh token",
    },
  });
  console.log(updatedAccount);

  const deletedAccount = await prisma.account.delete({
    where: {
      id: "account id",
    },
  });
  console.log(deletedAccount);

  const newVerificationToken = await prisma.verificationToken.create({
    data: {
      email: "user@email.com",
      token: "basta may unique token dito",
      expires: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newVerificationToken);

  const verificationToken = await prisma.verificationToken.findUnique({
    where: {
      id: "verification token id",
      email_token: {
        email: "user@email.com",
        token: "unique token",
      },
    },
    include: {
      user: true,
    },
  });
  console.log(verificationToken);

  const deletedVerificationToken = await prisma.verificationToken.delete({
    where: {
      id: "some verification token id",
    },
  });
  console.log(deletedVerificationToken);
  //
  const newPasswordResetToken = await prisma.passwordResetToken.create({
    data: {
      email: "user@email.com",
      token: "basta may unique token rin dito",
      expires: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newPasswordResetToken);

  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: {
      id: "password reset token id",
      email_token: {
        email: "user@email.com",
        token: "unique token",
      },
    },
    include: {
      user: true,
    },
  });
  console.log(passwordResetToken);

  const deletedPasswordResetToken = await prisma.passwordResetToken.delete({
    where: {
      id: "password reset token id",
    },
  });
  console.log(deletedPasswordResetToken);
  //

  const newTwoFactorToken = await prisma.twoFactorToken.create({
    data: {
      email: "user@email.com",
      token: "basta may unique token rin dito",
      expires: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newTwoFactorToken);

  const twoFactorToken = await prisma.twoFactorToken.findUnique({
    where: {
      id: "password reset token id",
      email_token: {
        email: "user@email.com",
        token: "unique token",
      },
    },
    include: {
      user: true,
    },
  });
  console.log(twoFactorToken);

  const deletedTwoFactorToken = await prisma.twoFactorToken.delete({
    where: {
      id: "password reset token id",
    },
  });
  console.log(deletedTwoFactorToken);

  const newTwoFactorConfirmation = await prisma.twoFactorConfirmation.create({
    data: {
      userId: "user id",
    },
  });
  console.log(newTwoFactorConfirmation);

  const twoFactorConfirmationWithUser = await prisma.twoFactorConfirmation.findUnique({
    where: {
      id: "two factor confirmation id",
    },
  });
  console.log(twoFactorConfirmationWithUser);

  const newCourse = await prisma.courseTable.create({
    data: {
      courseTitle: "Intermediate to Programming",
      courseDescription: "A comprehensive course on programming.",
      bio: "This course covers all aspects of programming.",
      videoCall: 'https://example.com/videocall',
      forum: 'https://example.com/forum',
      archive: false,
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newCourse);

  const course = await prisma.courseTable.findUnique({
    where: {
      code: "CC 103/.1",
    },
    include: {
      syllabus: true,
    },
  });
  console.log(course);

  const updatedCourse = await prisma.courseTable.update({
    where: {
      code: "CC 103/.1",
    },
    data: {
      courseTitle: "Intermediate to Programming",
    },
  });
  console.log(updatedCourse);

  const deletedCourse = await prisma.courseTable.delete({
    where: {
      code: "CC 103/.1",
    },
  });
  console.log(deletedCourse);

  const newSyllabus = await prisma.syllabus.create({
    data: {
      syllabusContent: "This is a syllabus content",
      courseCode: "CC 103/.1",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newSyllabus);

  const syllabus = await prisma.syllabus.findUnique({
    where: {
      id: "syllabus id",
    },
    include: {
      lessons: true,
      activities: true,
      quizzes: true,
    },
  });
  console.log(syllabus);

  const newLesson = await prisma.lessonTable.create({
    data: {
      lessonTitle: "Data Types and Variables",
      lessonDescription: "Basta may description dito",
      syllabusID: "Yung ID ng syllabus",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newLesson);

  const lesson = await prisma.lessonTable.findUnique({
    where: {
      id: "lesson id",
    },
    include: {
      contents: true,
    }
  })
  console.log(lesson);

  const newLessonContent = await prisma.lessonContent.create({
    data: {
      lessonID: "lesson101",
      lessonContent: "Basta may content dito",
      videoFileURL: "https://example.com/videofile",
      videoURL: "https://example.com/video",
      imageURL: "https://example.com/image",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newLessonContent);

  const newActivityTable = await prisma.activityTable.create({
    data: {
      activityTitle: "Calculator",
      activityDescription: "description ng activity",
      syllabusID: "id ng syllabus",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newActivityTable);

  const activity = await prisma.activityTable.findUnique({
    where: {
      id: "activity table id",
    },
    include: {
      contents: true
    },
  });
  console.log(activity);

  const newActivityContent = await prisma.activityContent.create({
    data: {
      activityID: "activity102",
      activityContent: "content ng activity",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newActivityContent);

  const newQuizTable = await prisma.quizTable.createMany({
    data: [{
      quizTitle: "quiz 103",
      quizDescription: "description ng quiz",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),

      syllabusID: "syllabus id",
      type: "multiple_choice",
    },
    {
      quizTitle: "quiz 103",
      quizDescription: "description ng quiz",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),

      syllabusID: "syllabus id",
      type: "enumeration"
    },
    {
      quizTitle: "quiz 103",
      quizDescription: "description ng quiz",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),

      syllabusID: "syllabus id",
      type: "identification"
    },
    ],
  });
  console.log(newQuizTable);

  const quiz = await prisma.quizTable.findUnique({
    where: {
      id: "quiz table id",
    },
    include: {
      items: true
    },
  });
  console.log(quiz);

  const newQuizItems = await prisma.quizItems.create({
    data: {
      question: "Thesis?",
      options: JSON.stringify(["A", "B", "C", "D"]),
      quiz: {
        connect: { id: "quiz id" },
      },
    },
  });
  console.log(newQuizItems);

  const quizItemswithAnswers = await prisma.quizItems.findMany({
    include: {
      answers: true,
    },
  });
  console.log(quizItemswithAnswers);

  const newQuizAnswers = await prisma.quizAnswers.create({
    data: {
      itemsID: "quiz item id",
      studentID: "some student id",
      answer: "Paris",
    },
  });
  console.log(newQuizAnswers);

  const newReports = await prisma.reportsTable.create({
    data: {
      year: 2024,
      semester: "First Semester",
      term: "Prelim",
      block: "4G",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),

      profileID: "profile id",
    },
  });
  console.log(newReports);

  const reports = await prisma.reportsTable.findMany({
    include: {
      termGrade: true
    },
  });
  console.log(reports);

  const newTermGrade = await prisma.termGrades.create({
    data: {
      prelim: 90.0,
      midterm: 91.65,
      final: 90.87,
      reportsID: "reports id",
    },
  });
  console.log(newTermGrade);

  const newAnalytics = await prisma.analytics.create({
    data: {
      userID: "user id",
      progressData: JSON.stringify(""),
    },
  });
  console.log(newAnalytics);

  const newMessages = await prisma.messages.createMany({
    data: [{
      senderID: "sender id",
      receiverID: "receiver id",
      groupID: "group id",
      message: "Hi! Good morning",
      type: "personal",
      sentAt: new Date("2023-12-31T23:59:59Z"),
    },

    {
      senderID: "sender id",
      receiverID: "receiver id",
      groupID: "group id",
      message: "Hi! Good morning",
      type: "group",
      sentAt: new Date("2023-12-31T23:59:59Z"),
    },
    ]
  });
  console.log(newMessages);

  const newGroupChat = await prisma.groupChat.create({
    data: {
      groupName: "THS101",
      createdAt: new Date("2023-12-31T23:59:59Z"),
      updatedAt: new Date("2023-12-31T23:59:59Z"),
    },
  });
  console.log(newGroupChat);

  const messages = await prisma.groupChat.findMany({
    include: {
      messages: true,
    },
  });
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })





