/*
*   NOTE FOR REVIEWER: For your convenience, please scroll all the way to the bottom of this file
*   to see all the code! The first 1450 lines or so are just examples!
* 
* */
/* 
  ________   __          __  __ _____  _      ______  _____ 
 |  ____\ \ / /    /\   |  \/  |  __ \| |    |  ____|/ ____|
 | |__   \ V /    /  \  | \  / | |__) | |    | |__  | (___  
 |  __|   > <    / /\ \ | |\/| |  ___/| |    |  __|  \___ \ 
 | |____ / . \  / ____ \| |  | | |    | |____| |____ ____) |
 |______/_/ \_\/_/    \_\_|  |_|_|    |______|______|_____/ 

 */
/** Example input objects for testing. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/* More example input objects for unit tests regarding edge cases */
const emptyBook = []

const bookWithNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    }
]

const manyBooksWithNoContent = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": []
    }
]

const booksMissingFields = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "Content": []
    },
    {
        "ISBN": "9780000528531",
        "Content": []
    },
    {
        "Title": "Twenty Thousand Leagues Under the Sea"
    },
    {

    }
]

/* Dracula */
const dracula = [
    {
        "Title": "Dracula",
        "ISBN": "9781530681037",
        "Content": [
            {
                "Page": 4,
                "Line": 1,
                "Text": "and home-made trousers; but others were very picturesque."
            },
            {
                "Page": 4,
                "Line": 2,
                "Text": "The women looked pretty, except when you got near them,"
            },
            {
                "Page": 4,
                "Line": 3,
                "Text": "but they were very clumsy about the waist. They had all full"
            },
            {
                "Page": 4,
                "Line": 4,
                "Text": "white sleeves of some kind or other, and most of them had"
            },
            {
                "Page": 4,
                "Line": 5,
                "Text": "big belts with a lot of strips of something fluttering from"
            },
            {
                "Page": 4,
                "Line": 6,
                "Text": "them like the dresses in a ballet, but of course there were"
            },
            {
                "Page": 4,
                "Line": 7,
                "Text": "petticoats under them."
            },
            {
                "Page": 4,
                "Line": 8,
                "Text": "The strangest figures we saw were the Slovaks, who were"
            },
            {
                "Page": 4,
                "Line": 9,
                "Text": "more barbarian than the rest, with their big cow-boy hats,"
            },
            {
                "Page": 4,
                "Line": 10,
                "Text": "great baggy dirty-white trousers, white linen shirts, and"
            },
            {
                "Page": 4,
                "Line": 11,
                "Text": "enormous heavy leather belts, nearly a foot wide, all stud -"
            },
            {
                "Page": 4,
                "Line": 12,
                "Text": "ded over with brass nails. They wore high boots, with their"
            },
            {
                "Page": 4,
                "Line": 13,
                "Text": "trousers tucked into them, and had long black hair and"
            },
            {
                "Page": 4,
                "Line": 14,
                "Text": "heavy black moustaches. They are very picturesque, but"
            },
            {
                "Page": 4,
                "Line": 15,
                "Text": "do not look prepossessing. On the stage they would be set"
            },
            {
                "Page": 4,
                "Line": 16,
                "Text": "down at once as some old Oriental band of brigands. They"
            },
            {
                "Page": 4,
                "Line": 17,
                "Text": "are, however, I am told, very harmless and rather wanting"
            },
            {
                "Page": 4,
                "Line": 18,
                "Text": "in natural self-assertion."
            },
            {
                "Page": 4,
                "Line": 19,
                "Text": "It was on the dark side of twilight when we got to Bistritz,"
            },
            {
                "Page": 4,
                "Line": 20,
                "Text": "which is a very interesting old place. Being practically on the"
            },
            {
                "Page": 4,
                "Line": 21,
                "Text": "frontier—for the Borgo Pass leads from it into Bukovina—"
            },
            {
                "Page": 4,
                "Line": 22,
                "Text": "it has had a very stormy existence, and it certainly shows"
            },
            {
                "Page": 4,
                "Line": 23,
                "Text": "marks of it. Fifty years ago a series of great fires took place,"
            },
            {
                "Page": 4,
                "Line": 24,
                "Text": "which made terrible havoc on five separate occasions. At"
            },
            {
                "Page": 4,
                "Line": 25,
                "Text": "the very beginning of the seventeenth century it underwent"
            },
            {
                "Page": 4,
                "Line": 26,
                "Text": "a siege of three weeks and lost 13,000 people, the casualties"
            },
            {
                "Page": 4,
                "Line": 27,
                "Text": "of war proper being assisted by famine and disease."
            },
            {
                "Page": 4,
                "Line": 28,
                "Text": "Count Dracula had directed me to go to the Golden"
            },
            {
                "Page": 4,
                "Line": 29,
                "Text": "Krone Hotel, which I found, to my great delight, to be thor - "
            },
            {
                "Page": 4,
                "Line": 30,
                "Text": ""
            },
            {
                "Page": 5,
                "Line": 1,
                "Text": "oughly old-fashioned, for of course I wanted to see all I "
            },
            {
                "Page": 5,
                "Line": 2,
                "Text": "could of the ways of the country."
            },
            {
                "Page": 5,
                "Line": 3,
                "Text": "I was evidently expected, for when I got near the door"
            },
            {
                "Page": 5,
                "Line": 4,
                "Text": "I faced a cheery-looking elderly woman in the usual peas -"
            },
            {
                "Page": 5,
                "Line": 5,
                "Text": "ant dress—white undergarment with a long double apron,"
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "front, and back, of coloured stuff fitting almost too tight for"
            },
            {
                "Page": 5,
                "Line": 7,
                "Text": "modesty. When I came close she bowed and said, ‘The Herr"
            },
            {
                "Page": 5,
                "Line": 8,
                "Text": "Englishman?’"
            },
            {
                "Page": 5,
                "Line": 9,
                "Text": "‘Yes,’ I said, ‘Jonathan Harker.’"
            },
            {
                "Page": 5,
                "Line": 10,
                "Text": "She smiled, and gave some message to an elderly man in"
            },
            {
                "Page": 5,
                "Line": 11,
                "Text": "white shirtsleeves, who had followed her to the door."
            },
            {
                "Page": 5,
                "Line": 12,
                "Text": "He went, but immediately returned with a letter:"
            },
            {
                "Page": 5,
                "Line": 13,
                "Text": "‘My friend.—Welcome to the Carpathians. I am anxious -"
            },
            {
                "Page": 5,
                "Line": 14,
                "Text": "ly expecting you. Sleep well tonight. At three tomorrow the"
            },
            {
                "Page": 5,
                "Line": 15,
                "Text": "diligence will start for Bukovina; a place on it is kept for"
            },
            {
                "Page": 5,
                "Line": 16,
                "Text": "you. At the Borgo Pass my carriage will await you and will"
            },
            {
                "Page": 5,
                "Line": 17,
                "Text": "bring you to me. I trust that your journey from London has"
            },
            {
                "Page": 5,
                "Line": 18,
                "Text": "been a happy one, and that you will enjoy your stay in my"
            },
            {
                "Page": 5,
                "Line": 19,
                "Text": "beautiful land.—Your friend, Dracula.’"
            },
            {
                "Page": 5,
                "Line": 20,
                "Text": "4 May—I found that my landlord had got a letter from"
            },
            {
                "Page": 5,
                "Line": 21,
                "Text": "the Count, directing him to secure the best place on the"
            },
            {
                "Page": 5,
                "Line": 22,
                "Text": "coach for me; but on making inquiries as to details he"
            },
            {
                "Page": 5,
                "Line": 23,
                "Text": "seemed somewhat reticent, and pretended that he could not"
            },
            {
                "Page": 5,
                "Line": 24,
                "Text": "understand my German."
            },
            {
                "Page": 5,
                "Line": 25,
                "Text": "This could not be true, because up to then he had under -"
            },
            {
                "Page": 5,
                "Line": 26,
                "Text": "stood it perfectly; at least, he answered my questions exactly"
            },
            {
                "Page": 5,
                "Line": 27,
                "Text": "as if he did."
            },
            {
                "Page": 5,
                "Line": 28,
                "Text": "He and his wife, the old lady who had received me, looked"
            },
            {
                "Page": 5,
                "Line": 29,
                "Text": "at each other in a frightened sort of way. He mumbled outs"
            },
            {
                "Page": 5,
                "Line": 30,
                "Text": ""
            },
            {
                "Page": 6,
                "Line": 1,
                "Text": "that the money had been sent in a letter, and that was all he "
            },
            {
                "Page": 6,
                "Line": 2,
                "Text": "knew. When I asked him if he knew Count Dracula, and"
            },
            {
                "Page": 6,
                "Line": 3,
                "Text": "could tell me anything of his castle, both he and his wife"
            },
            {
                "Page": 6,
                "Line": 4,
                "Text": "crossed themselves, and, saying that they knew nothing at"
            },
            {
                "Page": 6,
                "Line": 5,
                "Text": "all, simply refused to speak further. It was so near the time"
            },
            {
                "Page": 6,
                "Line": 6,
                "Text": "of starting that I had no time to ask anyone else, for it was"
            },
            {
                "Page": 6,
                "Line": 7,
                "Text": "all very mysterious and not by any means comforting."
            },
            {
                "Page": 6,
                "Line": 8,
                "Text": "Just before I was leaving, the old lady came up to my"
            },
            {
                "Page": 6,
                "Line": 9,
                "Text": "room and said in a hysterical way: ‘Must you go? Oh! Young"
            },
            {
                "Page": 6,
                "Line": 10,
                "Text": "Herr, must you go?’ She was in such an excited state that"
            },
            {
                "Page": 6,
                "Line": 11,
                "Text": "she seemed to have lost her grip of what German she knew,"
            },
            {
                "Page": 6,
                "Line": 12,
                "Text": "and mixed it all up with some other language which I did"
            },
            {
                "Page": 6,
                "Line": 13,
                "Text": "not know at all. I was just able to follow her by asking many"
            },
            {
                "Page": 6,
                "Line": 14,
                "Text": "questions. When I told her that I must go at once, and that I"
            },
            {
                "Page": 6,
                "Line": 15,
                "Text": "was engaged on important business, she asked again:"
            },
            {
                "Page": 6,
                "Line": 16,
                "Text": "‘Do you know what day it is?’ I answered that it was the"
            },
            {
                "Page": 6,
                "Line": 17,
                "Text": "fourth of May. She shook her head as she said again:"
            },
            {
                "Page": 6,
                "Line": 18,
                "Text": "‘Oh, yes! I know that! I know that, but do you know what"
            },
            {
                "Page": 6,
                "Line": 19,
                "Text": "day it is?’ On my saying that I did not understand, she went on:"
            },
            {
                "Page": 6,
                "Line": 20,
                "Text": "‘It is the eve of St. George’s Day. Do you not know that"
            },
            {
                "Page": 6,
                "Line": 21,
                "Text": "tonight, when the clock strikes midnight, all the evil things"
            },
            {
                "Page": 6,
                "Line": 22,
                "Text": "in the world will have full sway? Do you know where you"
            },
            {
                "Page": 6,
                "Line": 23,
                "Text": "are going, and what you are going to?’ She was in such evi -"
            },
            {
                "Page": 6,
                "Line": 24,
                "Text": "dent distress that I tried to comfort her, but without effect."
            },
            {
                "Page": 6,
                "Line": 25,
                "Text": "Finally, she went down on her knees and implored me not"
            },
            {
                "Page": 6,
                "Line": 26,
                "Text": "to go; at least to wait a day or two before starting."
            },
            {
                "Page": 6,
                "Line": 27,
                "Text": "It was all very ridiculous but I did not feel comfortable."
            },
            {
                "Page": 6,
                "Line": 28,
                "Text": "However, there was business to be done, and I could allow"
            },
            {
                "Page": 6,
                "Line": 29,
                "Text": ""
            },
            {
                "Page": 7,
                "Line": 1,
                "Text": "nothing to interfere with it."
            },
            {
                "Page": 7,
                "Line": 2,
                "Text": "I tried to raise her up, and said, as gravely as I could, that"
            },
            {
                "Page": 7,
                "Line": 3,
                "Text": "I thanked her, but my duty was imperative, and that I must"
            },
            {
                "Page": 7,
                "Line": 4,
                "Text": "go.She then rose and dried her eyes, and taking a crucifix"
            },
            {
                "Page": 7,
                "Line": 5,
                "Text": "from her neck offered it to me."
            },
            {
                "Page": 7,
                "Line": 6,
                "Text": "I did not know what to do, for, as an English Churchman,"
            },
            {
                "Page": 7,
                "Line": 7,
                "Text": "I have been taught to regard such things as in some measure"
            },
            {
                "Page": 7,
                "Line": 8,
                "Text": "idolatrous, and yet it seemed so ungracious to refuse an old"
            },
            {
                "Page": 7,
                "Line": 9,
                "Text": "lady meaning so well and in such a state of mind."
            },
            {
                "Page": 7,
                "Line": 10,
                "Text": "She saw, I suppose, the doubt in my face, for she put the"
            },
            {
                "Page": 7,
                "Line": 11,
                "Text": "rosary round my neck and said, ‘For your mother’s sake,’"
            },
            {
                "Page": 7,
                "Line": 12,
                "Text": "and went out of the room."
            },
            {
                "Page": 7,
                "Line": 13,
                "Text": "I am writing up this part of the diary whilst I am wait -"
            },
            {
                "Page": 7,
                "Line": 14,
                "Text": "ing for the coach, which is, of course, late; and the crucifix"
            },
            {
                "Page": 7,
                "Line": 15,
                "Text": "is still round my neck."
            },
            {
                "Page": 7,
                "Line": 16,
                "Text": "Whether it is the old lady’s fear, or the many ghostly tra -"
            },
            {
                "Page": 7,
                "Line": 17,
                "Text": "ditions of this place, or the crucifix itself, I do not know, but"
            },
            {
                "Page": 7,
                "Line": 18,
                "Text": "I am not feeling nearly as easy in my mind as usual."
            },
            {
                "Page": 7,
                "Line": 19,
                "Text": "If this book should ever reach Mina before I do, let it"
            },
            {
                "Page": 7,
                "Line": 20,
                "Text": "bring my goodbye. Here comes the coach!"
            },
            {
                "Page": 7,
                "Line": 21,
                "Text": "5 May. The Castle.—The gray of the morning has passed,"
            },
            {
                "Page": 7,
                "Line": 22,
                "Text": "and the sun is high over the distant horizon, which seems"
            },
            {
                "Page": 7,
                "Line": 23,
                "Text": "jagged, whether with trees or hills I know not, for it is so far"
            },
            {
                "Page": 7,
                "Line": 24,
                "Text": "off that big things and little are mixed."
            },
            {
                "Page": 7,
                "Line": 25,
                "Text": "I am not sleepy, and, as I am not to be called till I awake,"
            },
            {
                "Page": 7,
                "Line": 26,
                "Text": "naturally I write till sleep comes."
            },
            {
                "Page": 7,
                "Line": 27,
                "Text": "There are many odd things to put down, and, lest who"
            },
            {
                "Page": 7,
                "Line": 28,
                "Text": "reads them may fancy that I dined too well before I left Bis -"
            }
        ]
    }
]

/* Multiple Books */
const multipleBooks = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian's"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    },
    {
        "Title": "Dracula",
        "ISBN": "9781530681037",
        "Content": [
            {
                "Page": 4,
                "Line": 1,
                "Text": "and home-made trousers; but others were very picturesque."
            },
            {
                "Page": 4,
                "Line": 2,
                "Text": "The women looked pretty, except when you got near them,"
            },
            {
                "Page": 4,
                "Line": 3,
                "Text": "but they were very clumsy about the waist. They had all full"
            },
            {
                "Page": 4,
                "Line": 4,
                "Text": "white sleeves of some kind or other, and most of them had"
            },
            {
                "Page": 4,
                "Line": 5,
                "Text": "big belts with a lot of strips of something fluttering from"
            },
            {
                "Page": 4,
                "Line": 6,
                "Text": "them like the dresses in a ballet, but of course there were"
            },
            {
                "Page": 4,
                "Line": 7,
                "Text": "petticoats under them."
            },
            {
                "Page": 4,
                "Line": 8,
                "Text": "The strangest figures we saw were the Slovaks, who were"
            },
            {
                "Page": 4,
                "Line": 9,
                "Text": "more barbarian than the rest, with their big cow-boy hats,"
            },
            {
                "Page": 4,
                "Line": 10,
                "Text": "great baggy dirty-white trousers, white linen shirts, and"
            },
            {
                "Page": 4,
                "Line": 11,
                "Text": "enormous heavy leather belts, nearly a foot wide, all stud -"
            },
            {
                "Page": 4,
                "Line": 12,
                "Text": "ded over with brass nails. They wore high boots, with their"
            },
            {
                "Page": 4,
                "Line": 13,
                "Text": "trousers tucked into them, and had long black hair and"
            },
            {
                "Page": 4,
                "Line": 14,
                "Text": "heavy black moustaches. They are very picturesque, but"
            },
            {
                "Page": 4,
                "Line": 15,
                "Text": "do not look prepossessing. On the stage they would be set"
            },
            {
                "Page": 4,
                "Line": 16,
                "Text": "down at once as some old Oriental band of brigands. They"
            },
            {
                "Page": 4,
                "Line": 17,
                "Text": "are, however, I am told, very harmless and rather wanting"
            },
            {
                "Page": 4,
                "Line": 18,
                "Text": "in natural self-assertion."
            },
            {
                "Page": 4,
                "Line": 19,
                "Text": "It was on the dark side of twilight when we got to Bistritz,"
            },
            {
                "Page": 4,
                "Line": 20,
                "Text": "which is a very interesting old place. Being practically on the"
            },
            {
                "Page": 4,
                "Line": 21,
                "Text": "frontier—for the Borgo Pass leads from it into Bukovina—"
            },
            {
                "Page": 4,
                "Line": 22,
                "Text": "it has had a very stormy existence, and it certainly shows"
            },
            {
                "Page": 4,
                "Line": 23,
                "Text": "marks of it. Fifty years ago a series of great fires took place,"
            },
            {
                "Page": 4,
                "Line": 24,
                "Text": "which made terrible havoc on five separate occasions. At"
            },
            {
                "Page": 4,
                "Line": 25,
                "Text": "the very beginning of the seventeenth century it underwent"
            },
            {
                "Page": 4,
                "Line": 26,
                "Text": "a siege of three weeks and lost 13,000 people, the casualties"
            },
            {
                "Page": 4,
                "Line": 27,
                "Text": "of war proper being assisted by famine and disease."
            },
            {
                "Page": 4,
                "Line": 28,
                "Text": "Count Dracula had directed me to go to the Golden"
            },
            {
                "Page": 4,
                "Line": 29,
                "Text": "Krone Hotel, which I found, to my great delight, to be thor - "
            },
            {
                "Page": 4,
                "Line": 30,
                "Text": ""
            },
            {
                "Page": 5,
                "Line": 1,
                "Text": "oughly old-fashioned, for of course I wanted to see all I "
            },
            {
                "Page": 5,
                "Line": 2,
                "Text": "could of the ways of the country."
            },
            {
                "Page": 5,
                "Line": 3,
                "Text": "I was evidently expected, for when I got near the door"
            },
            {
                "Page": 5,
                "Line": 4,
                "Text": "I faced a cheery-looking elderly woman in the usual peas -"
            },
            {
                "Page": 5,
                "Line": 5,
                "Text": "ant dress—white undergarment with a long double apron,"
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "front, and back, of coloured stuff fitting almost too tight for"
            },
            {
                "Page": 5,
                "Line": 7,
                "Text": "modesty. When I came close she bowed and said, ‘The Herr"
            },
            {
                "Page": 5,
                "Line": 8,
                "Text": "Englishman?’"
            },
            {
                "Page": 5,
                "Line": 9,
                "Text": "‘Yes,’ I said, ‘Jonathan Harker.’"
            },
            {
                "Page": 5,
                "Line": 10,
                "Text": "She smiled, and gave some message to an elderly man in"
            },
            {
                "Page": 5,
                "Line": 11,
                "Text": "white shirtsleeves, who had followed her to the door."
            },
            {
                "Page": 5,
                "Line": 12,
                "Text": "He went, but immediately returned with a letter:"
            },
            {
                "Page": 5,
                "Line": 13,
                "Text": "‘My friend.—Welcome to the Carpathians. I am anxious -"
            },
            {
                "Page": 5,
                "Line": 14,
                "Text": "ly expecting you. Sleep well tonight. At three tomorrow the"
            },
            {
                "Page": 5,
                "Line": 15,
                "Text": "diligence will start for Bukovina; a place on it is kept for"
            },
            {
                "Page": 5,
                "Line": 16,
                "Text": "you. At the Borgo Pass my carriage will await you and will"
            },
            {
                "Page": 5,
                "Line": 17,
                "Text": "bring you to me. I trust that your journey from London has"
            },
            {
                "Page": 5,
                "Line": 18,
                "Text": "been a happy one, and that you will enjoy your stay in my"
            },
            {
                "Page": 5,
                "Line": 19,
                "Text": "beautiful land.—Your friend, Dracula.’"
            },
            {
                "Page": 5,
                "Line": 20,
                "Text": "4 May—I found that my landlord had got a letter from"
            },
            {
                "Page": 5,
                "Line": 21,
                "Text": "the Count, directing him to secure the best place on the"
            },
            {
                "Page": 5,
                "Line": 22,
                "Text": "coach for me; but on making inquiries as to details he"
            },
            {
                "Page": 5,
                "Line": 23,
                "Text": "seemed somewhat reticent, and pretended that he could not"
            },
            {
                "Page": 5,
                "Line": 24,
                "Text": "understand my German."
            },
            {
                "Page": 5,
                "Line": 25,
                "Text": "This could not be true, because up to then he had under -"
            },
            {
                "Page": 5,
                "Line": 26,
                "Text": "stood it perfectly; at least, he answered my questions exactly"
            },
            {
                "Page": 5,
                "Line": 27,
                "Text": "as if he did."
            },
            {
                "Page": 5,
                "Line": 28,
                "Text": "He and his wife, the old lady who had received me, looked"
            },
            {
                "Page": 5,
                "Line": 29,
                "Text": "at each other in a frightened sort of way. He mumbled outs"
            },
            {
                "Page": 5,
                "Line": 30,
                "Text": ""
            },
            {
                "Page": 6,
                "Line": 1,
                "Text": "that the money had been sent in a letter, and that was all he "
            },
            {
                "Page": 6,
                "Line": 2,
                "Text": "knew. When I asked him if he knew Count Dracula, and"
            },
            {
                "Page": 6,
                "Line": 3,
                "Text": "could tell me anything of his castle, both he and his wife"
            },
            {
                "Page": 6,
                "Line": 4,
                "Text": "crossed themselves, and, saying that they knew nothing at"
            },
            {
                "Page": 6,
                "Line": 5,
                "Text": "all, simply refused to speak further. It was so near the time"
            },
            {
                "Page": 6,
                "Line": 6,
                "Text": "of starting that I had no time to ask anyone else, for it was"
            },
            {
                "Page": 6,
                "Line": 7,
                "Text": "all very mysterious and not by any means comforting."
            },
            {
                "Page": 6,
                "Line": 8,
                "Text": "Just before I was leaving, the old lady came up to my"
            },
            {
                "Page": 6,
                "Line": 9,
                "Text": "room and said in a hysterical way: ‘Must you go? Oh! Young"
            },
            {
                "Page": 6,
                "Line": 10,
                "Text": "Herr, must you go?’ She was in such an excited state that"
            },
            {
                "Page": 6,
                "Line": 11,
                "Text": "she seemed to have lost her grip of what German she knew,"
            },
            {
                "Page": 6,
                "Line": 12,
                "Text": "and mixed it all up with some other language which I did"
            },
            {
                "Page": 6,
                "Line": 13,
                "Text": "not know at all. I was just able to follow her by asking many"
            },
            {
                "Page": 6,
                "Line": 14,
                "Text": "questions. When I told her that I must go at once, and that I"
            },
            {
                "Page": 6,
                "Line": 15,
                "Text": "was engaged on important business, she asked again:"
            },
            {
                "Page": 6,
                "Line": 16,
                "Text": "‘Do you know what day it is?’ I answered that it was the"
            },
            {
                "Page": 6,
                "Line": 17,
                "Text": "fourth of May. She shook her head as she said again:"
            },
            {
                "Page": 6,
                "Line": 18,
                "Text": "‘Oh, yes! I know that! I know that, but do you know what"
            },
            {
                "Page": 6,
                "Line": 19,
                "Text": "day it is?’ On my saying that I did not understand, she went on:"
            },
            {
                "Page": 6,
                "Line": 20,
                "Text": "‘It is the eve of St. George’s Day. Do you not know that"
            },
            {
                "Page": 6,
                "Line": 21,
                "Text": "tonight, when the clock strikes midnight, all the evil things"
            },
            {
                "Page": 6,
                "Line": 22,
                "Text": "in the world will have full sway? Do you know where you"
            },
            {
                "Page": 6,
                "Line": 23,
                "Text": "are going, and what you are going to?’ She was in such evi -"
            },
            {
                "Page": 6,
                "Line": 24,
                "Text": "dent distress that I tried to comfort her, but without effect."
            },
            {
                "Page": 6,
                "Line": 25,
                "Text": "Finally, she went down on her knees and implored me not"
            },
            {
                "Page": 6,
                "Line": 26,
                "Text": "to go; at least to wait a day or two before starting."
            },
            {
                "Page": 6,
                "Line": 27,
                "Text": "It was all very ridiculous but I did not feel comfortable."
            },
            {
                "Page": 6,
                "Line": 28,
                "Text": "However, there was business to be done, and I could allow"
            },
            {
                "Page": 6,
                "Line": 29,
                "Text": ""
            },
            {
                "Page": 7,
                "Line": 1,
                "Text": "nothing to interfere with it."
            },
            {
                "Page": 7,
                "Line": 2,
                "Text": "I tried to raise her up, and said, as gravely as I could, that"
            },
            {
                "Page": 7,
                "Line": 3,
                "Text": "I thanked her, but my duty was imperative, and that I must"
            },
            {
                "Page": 7,
                "Line": 4,
                "Text": "go.She then rose and dried her eyes, and taking a crucifix"
            },
            {
                "Page": 7,
                "Line": 5,
                "Text": "from her neck offered it to me."
            },
            {
                "Page": 7,
                "Line": 6,
                "Text": "I did not know what to do, for, as an English Churchman,"
            },
            {
                "Page": 7,
                "Line": 7,
                "Text": "I have been taught to regard such things as in some measure"
            },
            {
                "Page": 7,
                "Line": 8,
                "Text": "idolatrous, and yet it seemed so ungracious to refuse an old"
            },
            {
                "Page": 7,
                "Line": 9,
                "Text": "lady meaning so well and in such a state of mind."
            },
            {
                "Page": 7,
                "Line": 10,
                "Text": "She saw, I suppose, the doubt in my face, for she put the"
            },
            {
                "Page": 7,
                "Line": 11,
                "Text": "rosary round my neck and said, ‘For your mother’s sake,’"
            },
            {
                "Page": 7,
                "Line": 12,
                "Text": "and went out of the room."
            },
            {
                "Page": 7,
                "Line": 13,
                "Text": "I am writing up this part of the diary whilst I am wait -"
            },
            {
                "Page": 7,
                "Line": 14,
                "Text": "ing for the coach, which is, of course, late; and the crucifix"
            },
            {
                "Page": 7,
                "Line": 15,
                "Text": "is still round my neck."
            },
            {
                "Page": 7,
                "Line": 16,
                "Text": "Whether it is the old lady’s fear, or the many ghostly tra -"
            },
            {
                "Page": 7,
                "Line": 17,
                "Text": "ditions of this place, or the crucifix itself, I do not know, but"
            },
            {
                "Page": 7,
                "Line": 18,
                "Text": "I am not feeling nearly as easy in my mind as usual."
            },
            {
                "Page": 7,
                "Line": 19,
                "Text": "If this book should ever reach Mina before I do, let it"
            },
            {
                "Page": 7,
                "Line": 20,
                "Text": "bring my goodbye. Here comes the coach!"
            },
            {
                "Page": 7,
                "Line": 21,
                "Text": "5 May. The Castle.—The gray of the morning has passed,"
            },
            {
                "Page": 7,
                "Line": 22,
                "Text": "and the sun is high over the distant horizon, which seems"
            },
            {
                "Page": 7,
                "Line": 23,
                "Text": "jagged, whether with trees or hills I know not, for it is so far"
            },
            {
                "Page": 7,
                "Line": 24,
                "Text": "off that big things and little are mixed."
            },
            {
                "Page": 7,
                "Line": 25,
                "Text": "I am not sleepy, and, as I am not to be called till I awake,"
            },
            {
                "Page": 7,
                "Line": 26,
                "Text": "naturally I write till sleep comes."
            },
            {
                "Page": 7,
                "Line": 27,
                "Text": "There are many odd things to put down, and, lest who"
            },
            {
                "Page": 7,
                "Line": 28,
                "Text": "reads them may fancy that I dined too well before I left Bis -"
            }
        ]
    }
]





/** Example output objects */
const twentyLeaguesOutTest1 = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOutTest2 = {
    "SearchTerm": "egg",
    "Results": []
}

/** Example output object */
const twentyLeaguesOutTest3 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/* 
Tests for Dracula by Bram Stoker
 */
const draculaOutTest1 = {
    SearchTerm: 'The',
    Results: [
        { ISBN: '9781530681037', Page: 4, Line: 2 },
        { ISBN: '9781530681037', Page: 4, Line: 8 },
        { ISBN: '9781530681037', Page: 5, Line: 7 },
        { ISBN: '9781530681037', Page: 7, Line: 21 }
    ]
}

const draculaOutTest2 = {
    SearchTerm: 'vampire', // Ironically, the word "vampire" does not actually show up in the json
    Results: []
}

const draculaOutTest3 = {
    SearchTerm: 'Dracula',
    Results: [
        { ISBN: '9781530681037', Page: 4, Line: 28 },
        { ISBN: '9781530681037', Page: 5, Line: 19 },
        { ISBN: '9781530681037', Page: 6, Line: 2 }
    ]
}

const draculaOutTest4 = {
    SearchTerm: 'dracula', // Case sensitive test, "dracula" as a word only ever has a capital "D"
    Results: []
}

const draculaOutTest5 = {
    SearchTerm: 'Mina', // Mina is one of the main characters, so one would expect their name to appear
    Results: [{ ISBN: '9781530681037', Page: 7, Line: 19 }]
}


/* Tests for multiple books */

// console.log(findSearchTermInBooks("The",multipleBooks));
const multipleBooksOutTest1 = {
    SearchTerm: 'The',
    Results: [
        { ISBN: '9780000528531', Page: 31, Line: 8 },
        { ISBN: '9781530681037', Page: 4, Line: 2 },
        { ISBN: '9781530681037', Page: 4, Line: 8 },
        { ISBN: '9781530681037', Page: 5, Line: 7 },
        { ISBN: '9781530681037', Page: 7, Line: 21 }
    ]
}

// Every instance of the word "the" in both books, which I checked manually after running the above console.log
const multipleBooksOutTest2 = {
    SearchTerm: 'the',
    Results: [
        { ISBN: '9780000528531', Page: 31, Line: 9 },
        { ISBN: '9781530681037', Page: 4, Line: 3 },
        { ISBN: '9781530681037', Page: 4, Line: 6 },
        { ISBN: '9781530681037', Page: 4, Line: 8 },
        { ISBN: '9781530681037', Page: 4, Line: 9 },
        { ISBN: '9781530681037', Page: 4, Line: 15 },
        { ISBN: '9781530681037', Page: 4, Line: 19 },
        { ISBN: '9781530681037', Page: 4, Line: 20 },
        { ISBN: '9781530681037', Page: 4, Line: 21 },
        { ISBN: '9781530681037', Page: 4, Line: 25 },
        { ISBN: '9781530681037', Page: 4, Line: 26 },
        { ISBN: '9781530681037', Page: 4, Line: 28 },
        { ISBN: '9781530681037', Page: 5, Line: 2 },
        { ISBN: '9781530681037', Page: 5, Line: 3 },
        { ISBN: '9781530681037', Page: 5, Line: 4 },
        { ISBN: '9781530681037', Page: 5, Line: 11 },
        { ISBN: '9781530681037', Page: 5, Line: 13 },
        { ISBN: '9781530681037', Page: 5, Line: 14 },
        { ISBN: '9781530681037', Page: 5, Line: 16 },
        { ISBN: '9781530681037', Page: 5, Line: 21 },
        { ISBN: '9781530681037', Page: 5, Line: 28 },
        { ISBN: '9781530681037', Page: 6, Line: 1 },
        { ISBN: '9781530681037', Page: 6, Line: 5 },
        { ISBN: '9781530681037', Page: 6, Line: 8 },
        { ISBN: '9781530681037', Page: 6, Line: 16 },
        { ISBN: '9781530681037', Page: 6, Line: 20 },
        { ISBN: '9781530681037', Page: 6, Line: 21 },
        { ISBN: '9781530681037', Page: 6, Line: 22 },
        { ISBN: '9781530681037', Page: 7, Line: 10 },
        { ISBN: '9781530681037', Page: 7, Line: 12 },
        { ISBN: '9781530681037', Page: 7, Line: 13 },
        { ISBN: '9781530681037', Page: 7, Line: 14 },
        { ISBN: '9781530681037', Page: 7, Line: 16 },
        { ISBN: '9781530681037', Page: 7, Line: 17 },
        { ISBN: '9781530681037', Page: 7, Line: 20 },
        { ISBN: '9781530681037', Page: 7, Line: 21 },
        { ISBN: '9781530681037', Page: 7, Line: 22 }
    ]
}

// Test for searchTerm "Dracula" in both books, which of course only appears in the book "Dracula"
const multipleBooksOutTest3 = {
    SearchTerm: 'Dracula',
    Results: [
        { ISBN: '9781530681037', Page: 4, Line: 28 },
        { ISBN: '9781530681037', Page: 5, Line: 19 },
        { ISBN: '9781530681037', Page: 6, Line: 2 }
    ]
}

// negative test with a random search term that should return an empty Results array
const multipleBooksOutTest4 = {
    SearchTerm: 'egg cheese apple bacon',
    Results: []
}

// test to make sure we detect searchTerm "Canadian" only in 20000 Leagues and not in Dracula
const multipleBooksOutTest5 = {
    SearchTerm: 'Canadian',
    Results: [{ ISBN: '9780000528531', Page: 31, Line: 9 }]
}

// Edge cases
const edgeCaseResult = {
    SearchTerm: 'The',
    Results: []
}

/* 
*  _______ _    _ ______   ______ _    _ _   _  _____ _______ _____ ____  _   _ 
* |__   __| |  | |  ____| |  ____| |  | | \ | |/ ____|__   __|_   _/ __ \| \ | |
*    | |  | |__| | |__    | |__  | |  | |  \| | |       | |    | || |  | |  \| |
*    | |  |  __  |  __|   |  __| | |  | | . ` | |       | |    | || |  | | . ` |
*    | |  | |  | | |____  | |    | |__| | |\  | |____   | |   _| || |__| | |\  |
*    |_|  |_|  |_|______| |_|     \____/|_| \_|\_____|  |_|  |_____\____/|_| \_|
* 
* */
/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */

function findSearchTermInBooks(searchTerm, scannedTextObj) {

    let result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // implement error catching
    try {
        for (let book of scannedTextObj) {
            // console.log(book.Content);
            for (let item of book.Content) {

                // \\b matches any word boundaries (double escaped because regex)
                // and ^ and $ match then start/end of a string, respectively
                const regex = new RegExp('(\\b|^)' + searchTerm + '(\\b|$)', "g");

                let lineWhereFound = {}; // result to add if found

                if (regex.test(item.Text)) { // if we find the search term in the content item, add to result 

                    lineWhereFound["ISBN"] = book.ISBN;
                    lineWhereFound["Page"] = item.Page;
                    lineWhereFound["Line"] = item.Line;

                    result.Results.push(lineWhereFound);
                }
            }
        }
    } catch (e) {
        // Realistically speaking, one may prefer to have a a more robust error catching system
        // Though such a thing may be beyond the scope of this challenge
        console.error(e);
    }

    return result;
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/
                                                      
 */

// Test helper function, refactored from original unit tests
function testFindSearchTermInBooksHelper(testNumber, searchTerm, bookInput, expectedLength, expectedResult) {

    const testResult = findSearchTermInBooks(searchTerm, bookInput);

    // Debug: Uncomment to see search term for each test
    // console.log("\nSearching for:", searchTerm);

    // length test
    if (testResult.Results.length !== expectedLength) {
        console.log("FAIL: Test", testNumber);
        console.log("Expected Length:", expectedLength);
        console.log("Received Length:", testResult.Results.length);
        return false;
    }

    // exact match test
    if (JSON.stringify(testResult) !== JSON.stringify(expectedResult)) {
        console.log("FAIL: Test", testNumber);
        console.log("Expected:", expectedResult);
        console.log("Received:", testResult);
        return false;
    }

    // This line is for debug/visualization purposes, un-comment it if you want to see the results from each test
    // console.log("Got result:", testResult);

    // if all tests passed, return true
    console.log("PASS: Test", testNumber);

    // Ugly solution to clarify purposeful error in 16
    if (testNumber === 16) {
        console.log("The error below is caught on purpose:");
    }

    return true;
}


function testFindSearchTermInBooks() {
    if (
        // Positive test - check that the results has a specific length and content 
        testFindSearchTermInBooksHelper(1, "the", twentyLeaguesIn, 1, twentyLeaguesOutTest1) &&

        // Negative test - check that results array is returned empty when searching for a term not in the book.
        testFindSearchTermInBooksHelper(2, "egg", twentyLeaguesIn, 0, twentyLeaguesOutTest2) &&

        // Case sensitive test: "The" vs "the"
        testFindSearchTermInBooksHelper(3, "The", twentyLeaguesIn, 1, twentyLeaguesOutTest3) &&

        // Tests for dracula
        testFindSearchTermInBooksHelper(4, "The", dracula, 4, draculaOutTest1) &&
        testFindSearchTermInBooksHelper(5, "vampire", dracula, 0, draculaOutTest2) &&
        testFindSearchTermInBooksHelper(6, "Dracula", dracula, 3, draculaOutTest3) &&
        testFindSearchTermInBooksHelper(7, "dracula", dracula, 0, draculaOutTest4) &&
        testFindSearchTermInBooksHelper(8, "Mina", dracula, 1, draculaOutTest5) &&

        // Tests for dracula + 20000 Leagues combined in one JSON
        testFindSearchTermInBooksHelper(9, "The", multipleBooks, 5, multipleBooksOutTest1) &&
        testFindSearchTermInBooksHelper(10, "the", multipleBooks, 37, multipleBooksOutTest2) &&
        testFindSearchTermInBooksHelper(11, "Dracula", multipleBooks, 3, multipleBooksOutTest3) &&
        testFindSearchTermInBooksHelper(12, "egg cheese apple bacon", multipleBooks, 0, multipleBooksOutTest4) &&
        testFindSearchTermInBooksHelper(13, "Canadian", multipleBooks, 1, multipleBooksOutTest5) &&

        // scannedTextObj = [], i.e. empty, so return empty results
        testFindSearchTermInBooksHelper(14, "The", emptyBook, 0, edgeCaseResult) &&

        // scannedTextObj has one book with an empty content field
        testFindSearchTermInBooksHelper(15, "The", bookWithNoContent, 0, edgeCaseResult) &&

        // scannedTextObj has many books all with missing fields content fields, so return empty results
        /* 
            ***** NOTE FOR REVIEWER: TEST 16 will console.log a caught typeError to demonstrate handling of bad book JSONs. *****
        */
        testFindSearchTermInBooksHelper(16, "The", manyBooksWithNoContent, 0, edgeCaseResult) &&

        // Should catch an ERROR since book object is improperly formatted
        // This test was good to do as it reminded me to catch any edge case errors like these
        testFindSearchTermInBooksHelper(17, "The", booksMissingFields, 0, edgeCaseResult)

    ) {
        console.log("\nALL TESTS PASSED");
    } else {
        console.log("\nTESTS FAILED: See above test for info");
    }
}


testFindSearchTermInBooks(); // This runs all of the tests