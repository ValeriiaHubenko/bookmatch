import { useState } from "react";

const books = [
  {
    img: "/images/GatsbyCover.webp",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    match: "87%",
    tags: ["Classic Fiction", "Love", "Wealth", "Tragedy"],
    rating: 4,
    reviews: 1345,
    description:
      "The Great Gatsby is a novel set in the Roaring Twenties that tells the story of Jay Gatsby, a mysterious millionaire, and his unrequited love for Daisy Buchanan...",
    additionalDetails: {
      pages: "180",
      language: "English",
      author:
        "F. Scott Fitzgerald was an American novelist, best known for his novel The Great Gatsby. His works illustrate the Jazz Age and the American Dream...",
    },
  },
  {
    img: "/images/HarryPotter.jpeg",
    title: "Harry Potter",
    author: "J.K. Rowling",
    match: "92%",
    tags: ["Fantasy", "Magic", "Adventure"],
    rating: 5,
    reviews: 2568,
    description:
      "Harry Potter and the Sorcerer's Stone is the first book in the Harry Potter series. It follows the story of a young wizard named Harry Potter as he discovers his magical...",
    additionalDetails: {
      pages: "320",
      language: "English",
      author:
        "J.K. Rowling is a British author, best known for writing the Harry Potter series. Her books have become a global phenomenon and have been adapted into successful films...",
    },
  },
  {
    img: "/images/1984Cover.webp",
    title: "1984",
    author: "George Orwell",
    match: "78%",
    tags: ["Dystopian", "Politics", "Totalitarianism"],
    rating: 4,
    reviews: 987,
    description:
      "1984 is a dystopian novel set in a totalitarian society ruled by the Party and its leader, Big Brother. The story follows Winston Smith, a low-ranking member of the Party...",
    additionalDetails: {
      pages: "328",
      language: "English",
      author:
        "George Orwell was an English novelist, essayist, and critic, best known for his novels Animal Farm and 1984. His works are known for their social and political themes...",
    },
  },
  {
    img: "/images/ToKillaMockingbirdCover.jpeg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    match: "85%",
    tags: ["Classic Fiction", "Racism", "Coming-of-Age"],
    rating: 4,
    reviews: 1897,
    description:
      "To Kill a Mockingbird is a novel set in the 1930s in a small town in Alabama. It explores themes of racial injustice, innocence, and the loss of innocence...",
    additionalDetails: {
      pages: "336",
      language: "English",
      author:
        "Harper Lee was an American novelist, best known for her novel To Kill a Mockingbird. The book won the Pulitzer Prize and has become a classic of modern American literature...",
    },
  },
  {
    img: "/images/PrejudiceCover.png",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    match: "90%",
    tags: ["Classic Fiction", "Romance", "Social Commentary"],
    rating: 5,
    reviews: 2150,
    description:
      "Pride and Prejudice is a novel set in 19th-century England. It follows the story of Elizabeth Bennet, a young woman from a lower-class family, and her complicated...",
    additionalDetails: {
      pages: "432",
      language: "English",
      author:
        "Jane Austen was an English novelist known for her witty social commentary and romantic novels. Pride and Prejudice is one of her most famous works...",
    },
  },
  {
    img: "/images/TotheLighthouseCover.png",
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    match: "82%",
    tags: ["Modern", "Stream of Consciousness", "Family"],
    rating: 3,
    reviews: 987,
    description:
      "To the Lighthouse is a novel by Virginia Woolf. It is considered a pioneering work of modernist literature and is known for its stream-of-consciousness narrative...",
    additionalDetails: {
      pages: "209",
      language: "English",
      author:
        "Virginia Woolf was an English writer and one of the foremost modernists of the 20th century. Her works often explored themes of gender, sexuality, and identity...",
    },
  },
  {
    img: "/images/Catch22Cover.jpeg",
    title: "Catch-22",
    author: "Joseph Heller",
    match: "88%",
    tags: ["Satire", "War", "Absurdism"],
    rating: 3,
    reviews: 1345,
    description:
      "Catch-22 is a satirical novel set during World War II. It follows the story of Captain John Yossarian, a U.S. Army Air Forces bombardier, and his attempts to maintain his...",
    additionalDetails: {
      pages: "453",
      language: "English",
      author:
        "Joseph Heller was an American author known for his satirical novels. Catch-22 is considered his masterpiece and has become a classic of American literature...",
    },
  },
  {
    img: "/images/TheHobbitCover.jpeg",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    match: "95%",
    tags: ["Fantasy", "Adventure", "Quest"],
    rating: 4.9,
    reviews: 2568,
    description:
      "The Hobbit is a fantasy novel written by J.R.R. Tolkien. It follows the story of Bilbo Baggins, a hobbit who is reluctantly swept into an epic quest to reclaim the...",
    additionalDetails: {
      pages: "310",
      language: "English",
      author:
        "J.R.R. Tolkien was an English writer, poet, and philologist. He is best known for his high fantasy works, including The Hobbit and The Lord of the Rings...",
    },
  },
  {
    img: "/images/BraveNewWorldCover.jpeg",
    title: "Brave New World",
    author: "Aldous Huxley",
    match: "80%",
    tags: ["Dystopian", "Science Fiction", "Social Criticism"],
    rating: 4,
    reviews: 1123,
    description:
      "Brave New World is a dystopian novel set in a futuristic society where people are genetically engineered and conditioned to be content with their assigned roles...",
    additionalDetails: {
      pages: "288",
      language: "English",
      author:
        "Aldous Huxley was an English writer and philosopher. Brave New World is one of his most famous works and is considered a classic of dystopian literature...",
    },
  },
  {
    img: "/images/TheLordOftheRingsCover.jpeg",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    match: "97%",
    tags: ["Fantasy", "Adventure", "Epic"],
    rating: 5,
    reviews: 3987,
    description:
      "The Lord of the Rings is a high fantasy novel written by J.R.R. Tolkien. It is set in the fictional world of Middle-earth and follows the quest of a group of...",
    additionalDetails: {
      pages: "1178",
      language: "English",
      author:
        "J.R.R. Tolkien was an English writer, poet, and philologist. The Lord of the Rings is his most famous work and has had a significant impact on the fantasy genre...",
    },
  },
  {
    img: "/images/AnnaKareninaCover.jpeg",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    match: "89%",
    tags: ["Classic Fiction", "Romance", "Society"],
    rating: 4,
    reviews: 1765,
    description:
      "Anna Karenina is a novel by Leo Tolstoy. It explores themes of love, infidelity, and the consequences of societal norms. The story follows the life of Anna...",
    additionalDetails: {
      pages: "864",
      language: "English",
      author:
        "Leo Tolstoy was a Russian writer considered one of the greatest authors of all time. Anna Karenina is one of his most famous works and is regarded as a...",
    },
  },
  {
    img: "/images/TheCatcherInTheRyeCover.jpeg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    match: "86%",
    tags: ["Coming-of-Age", "Alienation", "Identity"],
    rating: 4,
    reviews: 1456,
    description:
      "The Catcher in the Rye is a novel by J.D. Salinger. It is narrated by Holden Caulfield, a teenager who is struggling with his identity and the hypocrisy...",
    additionalDetails: {
      pages: "277",
      language: "English",
      author:
        "J.D. Salinger was an American writer known for his reclusive lifestyle. The Catcher in the Rye is his most famous work and has become a classic of...",
    },
  },
  {
    img: "/images/MobyDickCover.jpeg",
    title: "Moby-Dick",
    author: "Herman Melville",
    match: "83%",
    tags: ["Adventure", "Whaling", "Obsession"],
    rating: 3,
    reviews: 987,
    description:
      "Moby-Dick is a novel by Herman Melville. It tells the story of Captain Ahab's obsessive quest for revenge against the white whale, Moby Dick. The novel...",
    additionalDetails: {
      pages: "635",
      language: "English",
      author:
        "Herman Melville was an American writer and sailor. Moby-Dick is his most famous work and is considered one of the greatest American novels...",
    },
  },
  {
    img: "/images/HuckleberryFinnCover.jpeg",
    title: "Huckleberry Finn",
    author: "Mark Twain",
    match: "88%",
    tags: ["Adventure", "Coming-of-Age", "Satire"],
    rating: 5,
    reviews: 1345,
    description:
      "The Adventures of Huckleberry Finn is a novel by Mark Twain. It follows the story of Huck Finn, a young boy who escapes his abusive father and embarks on...",
    additionalDetails: {
      pages: "366",
      language: "English",
      author:
        "Mark Twain was an American writer and humorist. The Adventures of Huckleberry Finn is considered one of his greatest works and is often called...",
    },
  },
  {
    img: "/images/ThePictureofDorian GrayCover.jpeg",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    match: "92%",
    tags: ["Gothic Fiction", "Morality", "Art"],
    rating: 5,
    reviews: 2568,
    description:
      "The Picture of Dorian Gray is a novel by Oscar Wilde. It tells the story of a young man named Dorian Gray who remains eternally youthful while a portrait...",
    additionalDetails: {
      pages: "254",
      language: "English",
      author:
        "Oscar Wilde was an Irish poet and playwright. The Picture of Dorian Gray is his only novel and is known for its exploration of aestheticism and...",
    },
  },
  {
    img: "/images/Don QuixoteCover.jpeg",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    match: "87%",
    tags: ["Adventure", "Satire", "Chivalry"],
    rating: 4,
    reviews: 1765,
    description:
      "Don Quixote is a novel by Miguel de Cervantes. It follows the adventures of a delusional knight-errant named Don Quixote and his loyal squire, Sancho Panza...",
    additionalDetails: {
      pages: "863",
      language: "English",
      author:
        "Miguel de Cervantes was a Spanish writer and one of the greatest novelists of all time. Don Quixote is his most famous work and is considered...",
    },
  },
  {
    img: "/images/TheGrapesofWrathCover.png",
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    match: "85%",
    tags: ["Great Depression", "Social Justice", "Family"],
    rating: 3,
    reviews: 1567,
    description:
      "The Grapes of Wrath is a novel by John Steinbeck. It tells the story of the Joad family, who are forced to leave their Oklahoma farm during the Great Depression...",
    additionalDetails: {
      pages: "464",
      language: "English",
      author:
        "John Steinbeck was an American writer and Nobel Prize winner. The Grapes of Wrath is one of his most famous works and is considered a classic of...",
    },
  },
  {
    img: "/images/WutheringHeightsCover.png",
    title: "Wuthering Heights",
    author: "Emily Bronte",
    match: "89%",
    tags: ["Gothic Fiction", "Romance", "Revenge"],
    rating: 4,
    reviews: 1765,
    description:
      "Wuthering Heights is a novel by Emily Bronte. It is a story of love, passion, and revenge set in the Yorkshire moors. The novel follows the intense...",
    additionalDetails: {
      pages: "416",
      language: "English",
      author:
        "Emily Bronte was an English novelist and poet. Wuthering Heights is her only novel and is considered a classic of English literature...",
    },
  },
  {
    img: "/images/SherlockHolmes.png",
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    match: "93%",
    tags: ["Mystery", "Detective", "Crime"],
    rating: 5,
    reviews: 2150,
    description:
      "The Adventures of Sherlock Holmes is a collection of short stories featuring the famous detective Sherlock Holmes and his loyal friend, Dr. John Watson...",
    additionalDetails: {
      pages: "307",
      language: "English",
      author:
        "Arthur Conan Doyle was a British writer and physician. He is best known for his Sherlock Holmes stories, which have had a lasting impact on the...",
    },
  },
  {
    img: "/images/FrankensteinCover.png",
    title: "Frankenstein",
    author: "Mary Shelley",
    match: "87%",
    tags: ["Gothic Fiction", "Science Fiction", "Morality"],
    rating: 3,
    reviews: 1897,
    description:
      "Frankenstein is a novel by Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox...",
    additionalDetails: {
      pages: "280",
      language: "English",
      author:
        "Mary Shelley was an English writer and novelist. Frankenstein is her most famous work and is considered a classic of Gothic and science fiction...",
    },
  },
  {
    img: "/images/DraculaCover.png",
    title: "Dracula",
    author: "Bram Stoker",
    match: "90%",
    tags: ["Gothic Fiction", "Vampires", "Horror"],
    rating: 4,
    reviews: 1987,
    description:
      "Dracula is a novel by Bram Stoker. It tells the story of Count Dracula, a vampire who moves from Transylvania to England in search of new blood...",
    additionalDetails: {
      pages: "418",
      language: "English",
      author:
        "Bram Stoker was an Irish author best known for his Gothic novel Dracula. The book has had a significant impact on the vampire genre and has...",
    },
  },
  {
    img: "/images/TheScarletLetterCover.jpeg",
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    match: "86%",
    tags: ["Historical Fiction", "Puritanism", "Sin"],
    rating: 4,
    reviews: 1567,
    description:
      "The Scarlet Letter is a novel by Nathaniel Hawthorne. It is set in 17th-century Puritan New England and follows the story of Hester Prynne, who...",
    additionalDetails: {
      pages: "279",
      language: "English",
      author:
        "Nathaniel Hawthorne was an American novelist and short story writer. The Scarlet Letter is his most famous work and is considered a...",
    },
  },
  {
    img: "/images/TheCountofMonteCristoCover.jpeg",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    match: "92%",
    tags: ["Adventure", "Revenge", "Betrayal"],
    rating: 3,
    reviews: 2150,
    description:
      "The Count of Monte Cristo is a novel by Alexandre Dumas. It tells the story of Edmond Dantes, a young sailor who is falsely accused of treason and...",
    additionalDetails: {
      pages: "1276",
      language: "English",
      author:
        "Alexandre Dumas was a French writer and one of the most widely read authors in the world. The Count of Monte Cristo is his most famous...",
    },
  },
  {
    img: "/images/HeartofDarknessCover.png",
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    match: "89%",
    tags: ["Modernist Literature", "Colonialism", "Psychological"],
    rating: 3,
    reviews: 1897,
    description:
      "Heart of Darkness is a novella by Joseph Conrad. It explores themes of imperialism, racism, and the darkness of the human soul. The story follows...",
    additionalDetails: {
      pages: "96",
      language: "English",
      author:
        "Joseph Conrad was a Polish-British writer regarded as one of the greatest novelists in the English language. Heart of Darkness is one of his...",
    },
  },
  {
    img: "/images/TheBrothersKaramazovCover.webp",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    match: "87%",
    tags: ["Philosophical", "Family", "Religion"],
    rating: 4,
    reviews: 1765,
    description:
      "The Brothers Karamazov is a novel by Fyodor Dostoevsky. It explores themes of morality, faith, and the nature of evil. The story follows the lives...",
    additionalDetails: {
      pages: "796",
      language: "English",
      author:
        "Fyodor Dostoevsky was a Russian novelist, philosopher, and essayist. The Brothers Karamazov is his final and most famous novel...",
    },
  },
  {
    img: "/images/GreatExpectations.png",
    title: "Great Expectations",
    author: "Charles Dickens",
    match: "90%",
    tags: ["Classic Fiction", "Coming-of-Age", "Social Class"],
    rating: 4,
    reviews: 1987,
    description:
      "Great Expectations is a novel by Charles Dickens. It follows the story of Pip, an orphan who rises from humble beginnings to become a gentleman...",
    additionalDetails: {
      pages: "544",
      language: "English",
    },
  },
  {
    img: "/images/TheShiningCover.png",
    title: "Alice's in Wonderland",
    author: "Lewis Carroll",
    match: "91%",
    tags: ["Fantasy", "Children's Literature", "Imagination"],
    rating: 5,
    reviews: 1765,
    description:
      "Alice's Adventures in Wonderland is a novel by Lewis Carroll. It follows the story of a young girl named Alice who falls down a rabbit hole into a...",
    additionalDetails: {
      pages: "200",
      language: "English",
      author:
        "Lewis Carroll was an English writer and mathematician. Alice's Adventures in Wonderland is his most famous work and is considered a...",
    },
  },
  {
    img: "/images/TheShiningCover.jpeg",
    title: "The Shining",
    author: "Stephen King",
    match: "93%",
    tags: ["Horror", "Psychological Thriller", "Haunted Hotel"],
    rating: 5,
    reviews: 2150,
    description:
      "The Shining is a horror novel by Stephen King. It tells the story of Jack Torrance, a writer and recovering alcoholic, who becomes the winter...",
    additionalDetails: {
      pages: "447",
      language: "English",
      author:
        "Stephen King is an American author known for his horror and supernatural fiction. The Shining is one of his most popular and...",
    },
  },
  {
    img: "/images/TheCatcherInTheRyeCover.jpeg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    match: "86%",
    tags: ["Coming-of-Age", "Alienation", "Identity"],
    rating: 3,
    reviews: 1456,
    description:
      "The Catcher in the Rye is a novel by J.D. Salinger. It is narrated by Holden Caulfield, a teenager who is struggling with his identity...",
    additionalDetails: {
      pages: "277",
      language: "English",
      author:
        "J.D. Salinger was an American writer known for his reclusive lifestyle. The Catcher in the Rye is his most famous work and has...",
    },
  },
  {
    img: "/images/TheGrapesofWrathCover.jpeg",
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    match: "85%",
    tags: ["Great Depression", "Social Justice", "Family"],
    rating: 3,
    reviews: 1567,
    description:
      "The Grapes of Wrath is a novel by John Steinbeck. It tells the story of the Joad family, who are forced to leave their Oklahoma farm during the Great Depression...",
    additionalDetails: {
      pages: "464",
      language: "English",
      author:
        "John Steinbeck was an American writer and Nobel Prize winner. The Grapes of Wrath is one of his most famous works...",
    },
  },
  {
    img: "/images/TheAlchemistCover.jpeg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    match: "95%",
    tags: ["Philosophical", "Adventure", "Self-discovery"],
    rating: 4,
    reviews: 3000,
    description:
      "The Alchemist is a novel by Paulo Coelho. It follows the journey of a young shepherd named Santiago as he sets out to discover his personal legend...",
    additionalDetails: {
      pages: "208",
      language: "English",
      author:
        "Paulo Coelho is a Brazilian author known for his spiritual and inspirational writings. The Alchemist is his most famous work...",
    },
  },
  {
    img: "/images/100YearsOfSolitudeCover.png",
    title: "100 Years of Solitude",
    author: "Gabriel Garcia Marquez",
    match: "94%",
    tags: ["Realism", "Family Saga", "American Literature"],
    rating: 5,
    reviews: 2500,
    description:
      "One Hundred Years of Solitude is a novel by Gabriel Garcia Marquez. It tells the story of the Buendia family and their experiences in the fictional town of Macondo...",
    additionalDetails: {
      pages: "417",
      language: "English",
      author:
        "Gabriel Garcia Marquez was a Colombian author and Nobel Prize winner. One Hundred Years of Solitude is considered his masterpiece...",
    },
  },
  {
    img: "/images/TheNameOftheWindCover.jpeg",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    match: "92%",
    tags: ["Fantasy", "Magic", "Adventure"],
    rating: 3,
    reviews: 2800,
    description:
      "The Name of the Wind is a fantasy novel by Patrick Rothfuss. It is the first book in the Kingkiller Chronicle series and follows the story of Kvothe, a legendary...",
    additionalDetails: {
      pages: "662",
      language: "English",
      author:
        "Patrick Rothfuss is an American writer and college lecturer. The Name of the Wind is his debut novel and has gained a large following...",
    },
  },
  {
    img: "/images/TheKiteRunnerCover.jpeg",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    match: "91%",
    tags: ["Historical Fiction", "Friendship", "Redemption"],
    rating: 4,
    reviews: 3200,
    description:
      "The Kite Runner is a novel by Khaled Hosseini. It tells the story of Amir, a young boy from Kabul, and his journey to seek redemption for past mistakes...",
    additionalDetails: {
      pages: "371",
      language: "English",
      author:
        "Khaled Hosseini is an Afghan-American novelist and physician. The Kite Runner is his debut novel and has been widely acclaimed...",
    },
  },
  {
    img: "/images/The OdysseyCover.jpeg",
    title: "The Odyssey",
    author: "Homer",
    match: "88%",
    tags: ["Epic", "Greek Mythology", "Adventure"],
    rating: 5,
    reviews: 3500,
    description:
      "The Odyssey is an epic poem attributed to Homer. It tells the story of Odysseus, a Greek hero, and his ten-year journey home from the Trojan War...",
    additionalDetails: {
      pages: "384",
      language: "English",
      author:
        "Homer is an ancient Greek poet and the author of the Iliad and the Odyssey. His works are considered foundational texts of Western literature...",
    },
  },
  {
    img: "/images/CrimeandPunishmentCover.jpeg",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    match: "87%",
    tags: ["Philosophical", "Crime", "Redemption"],
    rating: 4,
    reviews: 2800,
    description:
      "Crime and Punishment is a novel by Fyodor Dostoevsky. It tells the story of Rodion Raskolnikov, a young student who commits a crime...",
    additionalDetails: {
      pages: "671",
      language: "English",
      author:
        "Fyodor Dostoevsky was a Russian novelist and philosopher. Crime and Punishment is one of his most famous works...",
    },
  },
  {
    img: "/images/JaneEyreCover.jpeg",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    match: "90%",
    tags: ["Gothic Fiction", "Romance", "Feminism"],
    rating: 5,
    reviews: 3200,
    description:
      "Jane Eyre is a novel by Charlotte Brontë. It follows the story of Jane Eyre, an orphaned governess, and her journey to independence and love...",
    additionalDetails: {
      pages: "624",
      language: "English",
      author:
        "Charlotte Brontë was an English novelist and poet. Jane Eyre is her best-known work and is considered a classic of English literature...",
    },
  },
  {
    img: "/images/WarandPeaceCover.png",
    title: "War and Peace",
    author: "Leo Tolstoy",
    match: "92%",
    tags: ["Historical Fiction", "War", "Society"],
    rating: 5,
    reviews: 3200,
    description:
      "War and Peace is a novel by Leo Tolstoy. It tells the story of five Russian aristocratic families during the Napoleonic Wars...",
    additionalDetails: {
      pages: "1225",
      language: "English",
      author:
        "Leo Tolstoy was a Russian writer considered one of the greatest authors of all time. War and Peace is one of his most famous works...",
    },
  },
  {     img: "/images/TheChroniclesofNarniaCover.webp",
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        match: "94%",
        tags: ["Fantasy", "Adventure", "Children's Literature"],
        rating: 5,
        reviews: 3500,
        description:
          "The Chronicles of Narnia is a series of seven fantasy novels by C.S. Lewis. It follows the adventures of children who discover the magical land of Narnia...",
        additionalDetails: {
            pages: "767",
            language: "English",
            author:
                "C.S. Lewis was a British writer and theologian. The Chronicles of Narnia is his most famous work and has become a classic of children's literature...",
        },
  }
];

const BookSwipe = () => {
  const [expandedBooks, setExpandedBooks] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedBooks, setLikedBooks] = useState([]);
  const [dislikedBooks, setDislikedBooks] = useState([]);
  const [library, setLibrary] = useState([]);
  const [likeMessage, setLikeMessage] = useState("");
  const [dislikeMessage, setDislikeMessage] = useState("");

  console.log(likedBooks);
  console.log(dislikedBooks);
  console.log(currentIndex);

  const toggleExpand = (index) => {
    setExpandedBooks((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleButtonClick = (index) => {
    toggleExpand(index);
  };

  const handleLike = () => {
    const currentBook = books[currentIndex];
    setLikedBooks([...likedBooks, currentBook]);
    setLibrary([...library, currentBook]);
    setLikeMessage("Like!The book is saved in your library");
    setDislikeMessage("");
    setTimeout(() => setLikeMessage(""), 1800);
    moveToNextBook();
  };

  const handleDislike = () => {
    const currentBook = books[currentIndex];
    setDislikedBooks([...dislikedBooks, currentBook]);
    setDislikeMessage("Nope:( Next one, please");
    setLikeMessage("");
    setTimeout(() => setDislikeMessage(""), 1800);
    moveToNextBook();
  };

  const moveToNextBook = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const cardClasses =
    "w-[500px] relative flex flex-col items-center justify-center bg-white rounded-3xl shadow border border-stone";

  return (
    <>
      <div className="flex flex-col items-center justify-center -mt-1">
        <div className="text-center text-black text-4xl font-semibold font-['Poppins'] mb-5">
          Discover Books
        </div>

        <div className="h-screen">
          {books.map((book, index) => (
            <div
              key={index}
              className={`${cardClasses} ${
                expandedBooks[index] ? "h-[922px]" : "h-[777px]"
              } ${index === currentIndex ? "block" : "hidden"}`}
            >
              <div className="justify-center items-center inline-flex w-[430px] h-[390px] top-[45px] absolute">
                <img src={book.img} className="rounded-2xl" />
                <div className="top-[390px] absolute px-4 py-1 bg-white rounded-xl border-2 border-yellow justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-black text-lg font-medium font-['Poppins']">
                    Match {book.match}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-[460px] top-[442px] absolute">
                  <div className="flex flex-col gap-1">
                    <div className="text-center text-black text-3xl font-semibold font-['Poppins']">
                      &quot;{book.title}&quot;
                    </div>
                    <div className="text-center text-black text-lg font-medium font-['Lora']">
                      by {book.author}
                    </div>
                  </div>
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    {book.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="py-1 px-3 rounded-xl border border-beige justify-center items-center gap-2.5 flex"
                      >
                        <div className="text-center text-black text-sm font-regular font-['Poppins']">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex mt-1">
                    <div className="justify-center items-center gap-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5461 2.9842C11.7248 2.59678 12.2754 2.59677 12.4541 2.98417L15.1041 8.728L21.3856 9.47328C21.8093 9.52355 21.9795 10.0473 21.6662 10.3369L17.0221 14.631L18.2549 20.8359C18.338 21.2543 17.8926 21.578 17.5202 21.3696L12.0001 18.28L6.48001 21.3704C6.1077 21.5789 5.66219 21.2552 5.74534 20.8367L6.97809 14.632L2.33365 10.3359C2.02047 10.0462 2.19062 9.52259 2.61427 9.47233L8.89709 8.727L11.5461 2.9842Z"
                            stroke={i < book.rating ? "#FFC107" : "#DED2CE"}
                            fill={i < book.rating ? "#FFC107" : "#FFFFFF"}
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="text-black text-base font-regular font-['Poppins']">
                      ({book.reviews} reviews)
                    </div>
                  </div>
                  <div className="px-3 text-black text-base font-normal text-center font-['Lora'] leading-snug">
                    {book.description}
                  </div>

                  {expandedBooks[index] && (
                    <div className="flex flex-col items-center justify-center bg-white">
                      <div className="w-[430px] text-center">
                        <div className="flex flex-row gap-16 mb-2">
                          <div className="text-lg font-semibold text-black font-['Poppins'] text-left mt-1">
                            Page Count:
                            <span className=" text-black text-base font-medium font-['Lora'] leading-snug text-left mb-2 pl-1">
                              {" "}
                              {book.additionalDetails.pages}
                            </span>
                          </div>
                          <div className="text-lg font-semibold text-black font-['Poppins'] text-left mt-1">
                            Language:
                            <span className=" text-black text-base font-medium font-['Lora'] leading-snug text-left mb-2 pl-1">
                              {" "}
                              {book.additionalDetails.language}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start">
                          <div className="text-lg font-medium font-['Poppins'] text-left">
                            Author:{" "}
                          </div>
                          <div className=" text-black text-base font-normal font-['Lora'] leading-snug text-left">
                            {" "}
                            {book.additionalDetails.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    className="w-10 h-10 bg-beige rounded-full flex flex-col justify-center items-center hover:bg-yellow active:bg-yellow cursor-pointer mt-1"
                    onClick={() => handleButtonClick(index)}
                  >
                    {expandedBooks[index] ? (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 20L4 4M20 4L4 20"
                          stroke="#151515"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="relative cursor-pointer"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4284 5.67699C10.4284 6.48056 11.0712 7.12342 11.8748 7.12342C12.6882 7.12342 13.3212 6.48056 13.3114 5.67699C13.3114 4.86356 12.6882 4.2207 11.8748 4.2207C11.0712 4.2207 10.4284 4.86356 10.4284 5.67699ZM7.9375 18.9563C7.9375 19.4483 8.28893 19.7796 8.82121 19.7796H15.1795C15.7118 19.7796 16.0636 19.4483 16.0636 18.9558C16.0636 18.4741 15.7122 18.1424 15.1795 18.1424H13.1605V10.4783C13.1605 9.93613 12.8091 9.57399 12.2866 9.57399H9.10236C8.58036 9.57399 8.2285 9.89542 8.2285 10.378C8.2285 10.8803 8.57993 11.2116 9.10279 11.2116H11.3022V18.1424H8.82121C8.28893 18.1424 7.9375 18.4741 7.9375 18.9563Z"
                          fill="#151515"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-[260px] top-[280px]">
          {likeMessage && (
            <div className="text-red font-['Poppins'] font-bold text-4xl text-center w-[300px] ">
              {likeMessage}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 items-center justify-center absolute top-[465px] left-[315px]">
          <button
            className="w-44 h-44 bg-blue rounded-full flex justify-center items-center hover:bg-yellow active:bg-yellow"
            onClick={handleDislike}
          >
            <svg
              width="74"
              height="74"
              viewBox="0 0 24 24"
              fill="none"
              className="w-20 h-20 relative"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L4 4M20 4L4 20"
                stroke="#F7F4F3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <svg
            width="74"
            height="74"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1875 9H3.375M7.3125 4.5L2.8125 9L7.3125 13.5"
              stroke="#DED2CE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute left-[260px] top-[280px]">
          {dislikeMessage && (
            <div className="text-blue font-['Poppins'] font-bold text-4xl text-center w-[300px]">
              {dislikeMessage}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8 items-center justify-center absolute top-[465px] right-[315px]">
          <button
            className="w-44 h-44 bg-red rounded-full flex items-center justify-center hover:bg-yellow active:bg-yellow"
            onClick={handleLike}
          >
            <svg
              width="74"
              height="72"
              viewBox="0 0 22 20"
              fill="none"
              className="w-22 h-20 relative"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_42_3060)">
                <path
                  d="M16 0C13.9 0 12.074 0.999765 11 2.67519C9.926 0.999765 8.1 0 6 0C4.40927 0.00195584 2.88422 0.669947 1.75941 1.85744C0.634589 3.04493 0.00185261 4.65495 0 6.33431C0 9.41701 1.82 12.6253 5.41 15.8685C7.05506 17.3484 8.83202 18.6565 10.716 19.7747C10.8033 19.8242 10.9009 19.8501 11 19.8501C11.0991 19.8501 11.1967 19.8242 11.284 19.7747C13.168 18.6565 14.9449 17.3484 16.59 15.8685C20.18 12.6253 22 9.41701 22 6.33431C21.9981 4.65495 21.3654 3.04493 20.2406 1.85744C19.1158 0.669947 17.5907 0.00195584 16 0ZM11 18.4867C9.359 17.4869 1.2 12.2168 1.2 6.33431C1.20132 4.99077 1.70746 3.70266 2.60735 2.75263C3.50724 1.8026 4.72737 1.26826 6 1.26686C8.028 1.26686 9.731 2.4102 10.445 4.25138C10.4902 4.36756 10.5671 4.46692 10.6659 4.53686C10.7647 4.60679 10.881 4.64413 11 4.64413C11.119 4.64413 11.2353 4.60679 11.3341 4.53686C11.4329 4.46692 11.5098 4.36756 11.555 4.25138C12.269 2.4102 13.972 1.26686 16 1.26686C17.2726 1.26826 18.4928 1.8026 19.3927 2.75263C20.2925 3.70266 20.7987 4.99077 20.8 6.33431C20.8 12.2168 12.641 17.4869 11 18.4867Z"
                  fill="#F7F4F3"
                />
              </g>
              <defs>
                <clipPath id="clip0_42_3060">
                  <rect width="74" height="72" fill="#DED2CE" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <svg
            width="74"
            height="74"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_3302)">
              <path
                d="M2.8125 9H14.625M10.6875 13.5L15.1875 9L10.6875 4.5"
                stroke="#DED2CE"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_3302">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(0 1 -1 0 18 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default BookSwipe;
