new TypeIt("#type", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("UI/UX Designer", { delay: 400 })
    .pause(500)
    .delete(14)
    .type("Frontend Developer", { delay: 400 })
    .pause(500)
    .delete(18)
    .type("Graphic Designer", { delay: 400 })
    .pause(500)
    .delete(16)
    .go();