const mongoose = require("mongoose");
require("../db/index");
const Show = require("../models/Show.model");

Show.insertMany([
  {
    name: "Tokyo Ghoul",
    mainPic: "https://cdn.myanimelist.net/images/anime/5/64449l.webp",
    synopsis: `Tokyo has become a cruel and merciless city—a place where vicious creatures called "ghouls" exist alongside humans. The citizens of this once great metropolis live in constant fear of these bloodthirsty savages and their thirst for human flesh. However, the greatest threat these ghouls pose is their dangerous ability to masquerade as humans and blend in with society. Based on the best-selling supernatural horror manga by Sui Ishida, Tokyo Ghoul follows Ken Kaneki, a shy, bookish college student, who is instantly drawn to Rize Kamishiro, an avid reader like himself. However, Rize is not exactly who she seems, and this unfortunate meeting pushes Kaneki into the dark depths of the ghouls' inhuman world. In a twist of fate, Kaneki is saved by the enigmatic waitress Touka Kirishima, and thus begins his new, secret life as a half-ghoul/half-human who must find a way to integrate into both societies.`,
    score: 7.8,
    id: 22319,
    genre: [
      "Action",
      "Mystery",
      "Horror",
      "Psychological",
      "Supernatural",
      "Drama",
      "Seinen",
    ],
  },

  {
    name: "Sword Art Online",
    mainPic: "https://cdn.myanimelist.net/images/anime/11/39717l.webp",
    synopsis: `In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of "NerveGear" technology, players can control their avatars within the game using nothing but their own thoughts. Kazuto Kirigaya, nicknamed "Kirito," is among the lucky few enthusiasts who get their hands on the first shipment of the game. He logs in to find himself, with ten-thousand others, in the scenic and elaborate world of Aincrad, one full of fantastic medieval weapons and gruesome monsters. However, in a cruel turn of events, the players soon realize they cannot log out; the game's creator has trapped them in his new world until they complete all one hundred levels of the game. In order to escape Aincrad, Kirito will now have to interact and cooperate with his fellow players. Some are allies, while others are foes, like Asuna Yuuki, who commands the leading group attempting to escape from the ruthless game. To make matters worse, Sword Art Online is not all fun and games: if they die in Aincrad, they die in real life. Kirito must adapt to his new reality, fight for his survival, and hopefully break free from his virtual hell.`,
    score: 7.2,
    id: 11757,
    genre: ["Action", "Game", "Adventure", "Romance", "Fantasy"],
  },

  {
    name: "Shingeki no Kyojin",
    mainPic: "https://cdn.myanimelist.net/images/anime/10/47347l.webp",
    synopsis:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.",
    score: 8.5,
    id: 16498,
    genre: [
      "Action",
      "Military",
      "Mystery",
      "Super Power",
      "Drama",
      "Fantasy",
      "Shounen",
    ],
  },

  {
    name: "Boku no Hero Academia",
    mainPic: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    synopsis: `The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual. Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor! Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.`,
    score: 8.1,
    id: 31964,
    genre: [
      "Dentsu",
      "Mainichi Broadcasting System",
      "Movic",
      "TOHO animation",
      "Shueisha",
    ],
  },

  {
    name: "Fullmetal Alchemist: Brotherhood",
    mainPic: "https://cdn.myanimelist.net/images/anime/7/74317.webp",
    synopsis: `"In order for something to be obtained, something of equal value must be lost." Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist. Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.`,
    score: 9.2,
    id: 5114,
    genre: [
      "Action",
      "Military",
      "Adventure",
      "Comedy",
      "Drama",
      "Magic",
      "Fantasy",
      "Shounen",
    ],
  },
])

  /*mongoose
  .connect("mongodb://localhost/showrec", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })*/

  .then(() => {
    console.log("Successfully connected");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log("Error occured", error);
  });

//module.exports = fakeShows;
