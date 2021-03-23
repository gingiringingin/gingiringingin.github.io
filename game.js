// chapterIndex[chapterIndex][sectionIndex][lineIndex][sentenceIndex][charIndex]
// character '|' means line break, must be placed at the start of the line 
// character '>' automatically proceeds to the next line/word, must be placed at the end of the line
// ending section with "..." may cause errors
//@@ is dad tag
//## is nicolai tag
//$$ is sunny tag (mc to, nagreference lang ako sa game hehe)
//&& is monster tag

let chapter = [
    [//Chapter 0
        [//Section 0
            ['Chapter 1'],
            ["  |There was a dark figure."],
            ['"When will you come over?" "I feel lonely here... "'],
            ['...'],
            ['...'],
            ['You tried to move but a sudden feeling of grief rushed and froze you in place.'],
            ['"I see..."'],
            ['...'],
            ['|You wake up. '],
            ['It was a nightmare.'],
            ['Your bed was beside you next to a window. Behind was the door to the hallway.', ' There was also a hatch to the attic.'],
            ['You were in your room sleeping on the floor.', " You must've fallen over while sleeping."],
            ['|What will you do?'],   
        ],
        [//Section 1 Check bed
            ['Check Bed   '],
            ["|It's pretty soft and comfy. It has this Lightning McKing bed cover that you've had for nearly 5 years now."],
            ['You remember insistently asking your mom to buy it.', ' She gave in very quickly.'],
            ['What can I say, you were a very cute and adoring child.'],
            ["You forgot to thank her for buying it, but I guess it's too late now."]
        ],
        [//Section 2 Check study table
            ['Check Study Table'],
            ['  |On the side was the calendar.', ' A day is aggressively circled with a red marker and the number 16th written inside.'],
            ["It's the date of your 16th birthday which is a few days from today."]
        ],
        [//Section 3 Check window
            ['Check Window'],
            ['  |The sun is still rising past the horizon and you see dark clouds hovering nearby.', ' Better check the time.'],
            ['6:00 AM'],
            ["You usually wake up past 10:00 AM when there isn't school."]
        ],
        [//Section 4 Leave room
            ['Leave Room'],
            ["  |You haven't seen your phone yet. Will you search for it?"]
        ],
        [//Section 5 Leave room > Search for it
            ['Search for it'],
            ['  |You should search for it to check up on everybody.'],
            ['5 minutes passed.'],
            ["You can't find it."]
        ],
        [//Section 6 Leave room > Search for it > Continue Searching
            ['Continue Searching'],
            ['  |You found it!'],
            ['You should head downstairs now.']
        ],
        [//Section 7 Leave room > Search for it > Leave room
            ['Leave Room'],
            ['  You give up and proceed downstairs.']
        ],
        [//Section 8 Leave room > Don't Search for it
            ["Don't search for it"],
            ["  |You'll search for it later."]
        ] 
    ],
    [//Chapter 1
        [//Section 0
            ['Chapter 2'],
            ["  |You're downstairs. You can check the kitchen or go outside."]
        ],
        [//Section 1 Go Outside
            ["Go Outside"],
            ['  |You walk up to the door and twist the knob.'],
            ['*Click Clank* '],
            ["It won't open."],
            ["The door seems to be jammed"]
        ],
        [//Section 2 Go Outside > Kick the Door
            ["Kick the Door"],
            ['  |You dented the door...']
        ],
        [//Section 3 Go Outside > Kick the Door > Blame the Door
            ["Blame the Door"],
            ["  |It's the doors fault for being too frail."]
        ],
        [//Section 4 Go Outside > Kick the Door > Don't Blame the Door
            ["Don't Blame the Door  "],
            ["  |Your dad's gonna be furious when he sees this. You should patch it up."]
        ],
        [//Section 5 Go Outside > Shake the Knob
            ["Shake the Knob  "],
            ["  |You try to shake it in the hopes of loosening something up."],
            ['Nothing seems to be working.']
        ],
        [//Section 6 Go Outside > Leave the Door Alone
            ["Leave the Door Alone  "],
            ['  |You leave the door alone.']
        ],
        [//Section 7 Check the Kitchen
            ["Check the Kitchen"],
            ['  |There was a post it note on the counter. You straightened it out and it read:  '],
            ['    @Sorry Dear,'],
            ['  |I know we were supposed to visit your friend Nicolai today.>'],
            ['But it seems dad has some urgent business to take care of.>'],
            ["I woke up early and made some food, it's in the fridge.>"],
            ['PS I made it with lots of love!@   '],
            [' |Cashew Soup.'],
            ["It's his favorite."],
            ["He should've let you make it for him."],
            ["Anyway, it's cold."],
            ["You should heat it up before you eat it."]
        ],
        [//Section 8 Check the Kitchen > Heat it Up
            ["Heat it  Up"],
            ["  |That's right, hot food is better."]
        ],
        [//Section 9 Check the Kitchen > Eat it cold
            ["Eat it cold"],
            ['  |You eat it cold. Disgusting.']
        ]
    ],
    [//Chapter 2
        [//Section 0
            ['Chapter 3'],
            ["  |You're full. You notice a white prescription paper fall out from the front of the fridge."],
            ['It was medication for your narcolepsy and there was a note written within it.'],
            ['@People with narcolepsy sometimes fall asleep without warning.@ '],
            ['You stick the paper with a magnet back on the fridge.'],
            ["What'll you do next?"]
        ],
        [//Section 1 Go to bedroom > havePhone:True
            ["Go to bedroom"],
            ["  |You're not sleepy right now. You should head upstairs and get some books to do some studying down here."],
            ['  |You went upstairs and stared at the shelf.'],
            ['  |What book will you pick?']
        ],
        [//Section 2 Go to bedroom > havePhone:True > Intro to Linguistics: Omsiretsubilif Le
            ["Intro to Linguistics: Omsiretsubilif Le"],
            ['  |Omsiretsubilif Le? What a weird name. What could it mean?'],
            ['You took the book.'],
            ['  |You went back downstairs and tried to study with the book.'],
            ['*A few minutes later*'],
            ['It soon got boring.'],
            ["You're too tired to return it back upstairs."],
            ['You place it inside your backpack since its nearer.'],
            ['  |You approached your bag and slid the book inside.'],
            ['  |Now, you should do something else.']
        ],
        [//Section 3 Go to bedroom > havePhone:True > Functions and Euclidean Space
            ["Functions and Euclidean Space"],
            ["  |Math? You were never bright when it came to numbers. You don't even understand Logarithmic Functions."],
            ['You took the book.'],
            ['  |You went back downstairs and tried to study with the book.'],
            ['*A few minutes later*'],
            ['It soon got boring.'],
            ["You're too tired to return it back upstairs."],
            ['You place it inside your backpack since its nearer.'],
            ['  |You approached your bag and slid the book inside.'],
            ['  |Now, you should do something else.']
        ],
        [//Section 4 Go to bedroom > havePhone:True > Instrumental Analysis: Practical Experience
            ["Instrumental Analysis: Practical Experience"],
            ["  |Instrumental Analysis? That's nice. You always had an interest in it."],
            ['You took the book.'],
            ['  |You went back downstairs and tried to study with the book.'],
            ['*A few minutes later*'],
            ['It soon got boring.'],
            ["You're too tired to return it back upstairs."],
            ['You place it inside your backpack since its nearer.'],
            ['  |You approached your bag and slid the book inside.'],
            [' |Now, you should do something else.']
        ],
        [//Section 5 Go to bedroom > havePhone:True > Data Science for Dummies
            ["Data Science for Dummies"],
            ['  |Data Science? It seems pretty useful. You can ask your dad for some useful tips. It was his forte back in school.'],
            ['You took the book.'],
            ['|You went back downstairs and tried to study with the book.'],
            ['*A few minutes later*'],
            ['It soon got boring.'],
            ["You're too tired to return it back upstairs."],
            ['You place it inside your backpack since its nearer.'],
            ['  |You approached your bag and slid the book inside.'],
            ['  |Now, you should do something else.']
        ],
        [//Section 6 Go to bedroom > havePhone:False
            ["Go to bedroom"],
            ["  |You're not sleepy right now. You should head upstairs and try searching for your phone again."],
            ['  |You went upstairs and searched for your phone.'],
            ['...'],
            ['...'],
            ['...'],
            ['You found it! It was right in the corner of your bed.'],
            ['  |Now that you have it, you should go back downstairs.'],
            ['  |You should do something else.']
        ],
        [//Section 7 Watch TV
            ["Watch TV"],
            ['  |You opened the TV. They were airing the lightning McKing reboot.'],
            ["You've watched it before."],
            ['You liked the older one better compared to it, but the newer ones animation quality was much better.'],
            ["On a side note, You noticed while sitting on the couch, it's actually quite soft just like your bed."],
            ['A local news alert flashed.'],
            ['"Multiple counts of trespassing and abduction have been reported around East Porter Ave-"'],
            ['%BANG% '],
            ['A wild thunder seem to have hit nearby.'],
            ['You turned the T.V. off.'],
            ['...'],
            ['...'],
            ["You're getting bored."],
            ['  |Maybe you should do something else.']
        ],
        [//Section 8 Call Someone
            ["Call Someone"],
            ['  |Who will you call?']
        ],
        [//Section 9 Call Someone > Call Dad
            ["Call Dad"],
            ['  |You call Dad.'],
            ['...'],
            ['%Ring Ring% '],
            ['...'],
            ['%Ring Ring% '],
            ['...'],
            ['%Ring Ring% '],
            ['#Hello?# '],
            ['$Hey Dad when\'ll you arrive back home. Maybe we could still make it to Nicolai\'s house today?$ '],
            ['#Let me just check okay?# '],
            ['$ok$ '],
            ['You can hear him caling someone else over the phone. He seems to be asking about work.'],
            ['|He is taking a bit long.'],
            ["|You've been wanting to go for the past 5 months already."],
            ["#I'm sorry bud, they want me to work until I finish this# "],
            ['$When do you think you\'ll be done then?$ '],
            ["#I was getting to that. I think I'll have to work until 9 PM# "],
            ['$...'],
            ['Dad$ '],
            ['#Yes?# '],
            ['$Are they overworking you again?$ '],
            ['#No no no, ofcourse not. I just need to do more work to earn more for us, okay?# '],
            ['$Ok$ '],
            ["#I'll drop off now okay? take care of the house for me, oh and be sure to lock the door."],
            ['They said that there have been cases of abduction around our neighborhood.# '],
            ['$Ok, Goodbye Dad$ '],
            ['|He dropped the call. He must be doing a lot of work.'],
            ['  |You leave your phone next to the TV.'],
            ['  |You should keep yourself busy for the time being.'],
            ['...'],
            ['Before finding anything elese worthwile to do, you fell asleep.']
        ],
        [//Section 10 Call Someone > Call Nicolai
            ["Call Nicolai"],
            ['|You call Nicolai.'],
            ['%Ring Ring% '],
            ['$Nic, Dad seems to be busy today. He had some urgent business to attend to. I think we can\'t make it today.$ '],
            ["#Slow down - slow down I didn't catch that, I just woke up. So what was happening again?# "],
            ['$I just had breakfast. Dad said he\'s busy today so we can\'t come over$ '],
            ['#Too bad... I was looking forward to it all night# '],
            ['$I know.'],
            ['I don\'t have anything else planned today so I have nothing to do for the time being$ '],
            ['...'],
            ['#Hello?# '],
            ['$I\'m here$ '],
            ['#Uhhhhm how about...# '],
            ['$Yes?$ '],
            ['#How about I come over? Aunt Faith has business in the telecom today. I could come with to visit# '],
            ['$That\'d be great!'],
            ['But...'],
            ['You\'re taking care of your mother, right?$ '],
            ['#...# '],
            ['$She\'s bedridden. What if something happens?$ '],
            ["#Hey don't say it like that"],
            ['...'],
            ["Besides, the doctor said her state isn't worsening# "],
            ['$But it isn\'t improving either.$ '],
            ['#... but.# '],
            ['$I\'ll be fine.$ '],
            ['#Okay# '],
            ['$...$ '],
            ["#I've just been sad about how rarely we see each other nowadays# "],
            ['$Me too.$ '],
            ["# * Inaudible Noises* "],
            ['Could you hang on a moment, I think I hear something'],
            ['...'],
            ['...'],
            ['*Inaudible Noises*'],
            ['...'],
            ["Mom is calling me, I'll catch up soon# "],
            ['$Say hello to your mother for me.$ '],
            ["#Sure! She'd be glad to hear from you"],
            ["I'll go now! Be sure to be careful, I heard there were trespassing cases around your neighborhood.# "],
            ['$I will, Goodby-$ '],
            ['|He cut off. '],
            ['|Your talk was a bit short. You wished the talk was longer.'],
            ['...'],
            ['You spent the next few hours pondering and reminscing about the past.'],
            ["|Your mom and his were great friends. They chattered a lot with each other and it's how you and Nicolai got acquainted."],
            ["You'd often see him and visit them almost every other day. Nicolai usually played together with you at their old home."],
            ['You even went to the same school for a while.'],
            ['|You let out a deep sigh.'],
            ['|You placed yor phone next to the TV.'],
            ['|You start to doze off slowly.']
        ]
    ],
    [//Chapter 3
        [//Section 0
            ['Chapter 4'],
            ['|   %RING RING% '],
            ['You hear the telephone ringing.'],
            ["It's accross the dining area, too far to reach. You have to stand up."],
            ['...'],
            ['You walk up to the phone and pick it up.'],
            ['A woman spoke.'],
            ['#N-new M-mortem Police Department... wha-what\'s your emergency?#   ']
        ],
        [//Section 1 End the call
            ['End the call'],
            ['|  %DOOT% '],
            ['The call seem to have ended before you put the phone down.'],
            ["|You should stop playing around next time. You should've said that you didn't call."],
            ['...'],
            ["You hear tapping noises from the basement. It must be rats, they must've went through the egress window."],
            ['You hear thunder cracks from outside.'],
            ['%BOOM% ', 'A low rumble resonated.'],
            ['It might be raining outside. The inside is sealed of pretty well so barely anything can be heard.'],
            ['%BANG!% '],
            ['You were startled by the thunder.'],
            ["You're fully awake now. You should consider getting some fresh air and touching some grass."]
        ],
        [//Section 2 Ask for help
            ['Ask for help'],
            ['|"Send hel-"'],
            ['%DOOT% '],
            ['The call ended.'],
            ['Maybe they figured something went wrong.'],
            ["|You should stop playing around next time. You should've said that you didn't call."],
            ['...'],
            ["You hear tapping noises from the basement. It must be rats, they must've went through the egress window."],
            ['You hear thunder cracks from outside.'],
            ['%BOOM% ', 'A low rumble resonated.'],
            ['It might be raining outside. The inside is sealed of pretty well so barely anything can be heard.'],
            ['%BANG!% '],
            ['You were startled by the thunder.'],
            ["You're fully awake now. You should consider getting some fresh air and touching some grass."]
        ],
        [//Section 3 I feel lonely
            ['I feel lonely'],
            ['|"I\'m alon-"'],
            ['%DOOT% '],
            ['The call ended.'],
            ['Maybe they figured something went wrong.'],
            ["|You should stop playing around next time. You should've said that you didn't call."],
            ['...'],
            ["You hear tapping noises from the basement. It must be rats, they must've went through the egress window."],
            ['You hear thunder cracks from outside.'],
            ['%BOOM% ', 'A low rumble resonated.'],
            ['It might be raining outside. The inside is sealed of pretty well so barely anything can be heard.'],
            ['%BANG!% '],
            ['You were startled by the thunder.'],
            ["You're fully awake now. You should consider getting some fresh air and touching some grass."]
        ],
        [//Section 4 Give address
            ['Give address'],
            ['|You start stating your address "East Porte-"'],
            ['%DOOT% '],
            ['The call ended.'],
            ['Maybe they figured something went wrong.'],
            ["|You should stop playing around next time. You should've said that you didn't call."],
            ['...'],
            ["You hear tapping noises from the basement. It must be rats, they must've went through the egress window."],
            ['You hear thunder cracks from outside.'],
            ['%BOOM% ', 'A low rumble resonated.'],
            ['It might be raining outside. The inside is sealed of pretty well so barely anything can be heard.'],
            ['%BANG!% '],
            ['You were startled by the thunder.'],
            ["You're fully awake now. You should consider getting some fresh air and touching some grass."]
        ],
        [//Section 5 Go to Bedroom
            ['Go to Bedroom'],
            ['|You go to your bedroom. The curtains are closed. What will you do?']
        ],
        [//Section 6 Go to Bedroom > Check Closet
            ['Check Closet'],
            ["|There are hangered clothes and folded pants. Just along the corner is your dad's baseball bat signed by his favorite pinch hitter."],
            ['Maybe baseball today is a good idea.']
        ],
        [//Section 7 Go to Bedroom > Check Closet > Change Clothes
            ['Change Clothes'],
            ['|You change clothes.'],
            ['|You look over the baseball bat again.'],
            ['You take the BASEBALL BAT.'],
            ['You wanted to play baseball so you went downstairs immediately despite the thunders you hear outside.'],
            ['You remember that the there was a ball in the basement.']
        ],
        [//Section 8 Go to Bedroom > Check Closet > Take Baseball Bat
            ['Take Baseball Bat'],
            ['|You take the BASEBALL BAT.'],
            ['You wanted to play baseball so you went downstairs immediately despite the thunders you hear outside.'],
            ['You remember that the there was a ball in the basement.']
        ],
        [//Section 9 Go to Bedroom > Check Attic
            ['Check Attic'],
            ['|You pull down the hatch down. A convenient ladder folds down to hep you climb.'],
            ['It is quite weak and old so you climb the ladder carefully.'],
            ['There was a wide space above but you could barely see anything.'],
            ['You switch on the light.'],
            ['It kept flickering and the light was dim.'],
            ['Nonetheless, you make out the surrounding.'],
            ['The space was caved in by rotting wood.'],
            ['...'],
            ['There was a another hatch, it was locked.'],
            ['You remember your father mentioning the key for the attic hatch being in the basement.'],
            ['You look around a little more and saw nails and hammer.'],
            ['There was nothing else interesting.']
        ],
        [//Section 10 Go to Bedroom > Go to sleep
            ['Go to sleep'],
            ["|You're not sleepy."]
        ],
        [//Section 11 Go to Kitchen
            ['Go to Kitchen'],
            ["|You go to the kitchen. You see a dirty wooden ladle and a paring knife. Your dad must've forgotten to wash these."],
            ["The knife was covered with a thick layer of burnt sugars. It was stuck to the knife. This is why your dad shouldn't cook in the house."],
            ['For comparison the ladle looked as clean as it can be. Only traces of the cashew soup which has dried off are left.'],
            ['Cleaning the knife might need some strong soap like Maxiclear or acid like Vinegar, but the ladle just needs mild washing.'],
            ['|You decided to...']
        ],
        [//Section 12 Go to Kitchen > Wash Knife
            ['Wash Knife'],
            ['|You take the knife and bring over the other near the sink too.'],
            ['While turning on the faucet you noticed that there was neither the Maxiclear bottle you usually use nor any vinegar over the next cabinet.'],
            ['You remember there was big jug of it in the basement.'],
            ['Walking away from the kitchen you accidentally take the knife with you.']
        ],
        [//Section 13 Go to Kitchen > Wash Ladle
            ['Wash Ladle'],
            ['|You take the ladle and rinsed it off with some water first.'],
            ['You take the sponge and press the dish soap bottle.'],
            ['*cLaCK cLaCK CLaCK* '],
            ['The bottle was empty. You rember seeing some reserves in the basement.'],
            ['Walking away from the kitchen you accidentally take the ladle with you.']
        ],
        [//Section 14 Go to Living Room
            ['Go to Living Room'],
            ['|You go to the living room. You only notice your phone and bag. You grab it, hoping you could study.'],
            ["You then remember that one of your lessons needed you to go the local library since you couldn't find any sources online."],
            ['You decided to take care of that first. You walked up to the door.'],
            ['*Click Clank* '],
            ["It won't open."],
            ['The door seems to be jammed.'],
            ["There are tools in the basement that might help. It's better if you fix it before anyone gets home."],
            ['There is also a door to the garden you could go through.'],
            ['|Where will you go?']
        ],
        [//Section 15 Go to Living Room > Go to Back Door
            ['Go to Back Door'],
            ['|You go to the back door, bringing your bag, ready to go outside.'],
            ['Upon seeing it, water seemed to be leeking from below the door ever so slightly. You also noticed a few mold spots growing near the hinges.'],
            ['You walk up to the metal door.'],
            ['*Click Clank* '],
            ['The same sounds.'],
            ['But the door was locked this time, not broken.'],
            ['You had no way out. The windows were barred and safely secured.'],
            ['You should head to the basement.']
        ],
        [//Section 16 Go to Living Room > Go to Basement
            ['Go to Basement'],
            ['|You walked away from the window and went on to find a toolbox.']
        ]
    ],
    [//Chapter 4
        [//Section 0
            ['Chapter 4.5'],
            ['|The rain poured outside.'],
            ['|You headed to the basement. You twist the knob then opened the door.'],
            ['You felt an eerily moist and cold breeze blowing through.'],
            ['|Drips of water coming from the ceiling.'],
            ['Mold on the rotting supports.'],
            ['...'],
            ['*pitter* '],
            ['...'],
            ['*patter* '],
            ['...'],
            ['You heard a shuffling noise from the basement.'],
            ['What was it? Rats?'],
            ["You're cold but sweating."],
            ['You feel uneasy.'],
            ['Your legs starting to freeze.'],
            ['Frozen...'],
            ['Stuck...'],
            ['Will you go on?']
        ],
        [//Section 1 Turn Back
            ['Turn Back'],
            ['|You turn around.'],
            ['You averted your gaze.'],
            ['You went back.'],
            ['...'],
            ['Back..'],
            ['...'],
            ['You went back safely.'],
            ['Yes, safely...'],
            ['Walking out.'],
            ['Passing through the basement door.'],
            ['...'],
            ['From the back, something touched you.'],
            ['...'],
            ['Yes, safely...'],
            ['...'],
            ['&You didn\'t come over.& '],
            ['An amalgamation of different voices said from behind.'],
            ['&You didn\'t come over.& '],
            ['...'],
            ['Fear.'],
            ['...'],
            ['Every nerve feeling like gushing out for help.'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Denied Visitor']
        ],
        [//Section 2 Go Ahead
            ['Go Ahead'],
            ['|You went forward.'],
            ['You steadied your gaze.'],
            ['You went forward.'],
            ['...'],
            ['Forward.'],
            ['...'],
            ['You went forward safely.'],
            ['Yes, safely...'],
            ['Walking in.'],
            ['A dark figure looks toward you as soon as you saw it.'],
            ['A monster.'],
            ["|It's walking."],
            ['...'],
            ["It's running."],
            ['What will you do?']
        ],
        [//Section 3 Go Ahead > Attack > With Bag
            ['Attack'],
            ['|You threw your bag at the dark figure.'],
            ['It became disoriented. ']
        ],
        [//Section 4 Go Ahead > Attack > With Bag > No Book
            ["|But it wasn't enough. the bag was too light. Maybe if it had a few books inside."],
            ['It immediately recovered.'],
            ['...'],
            ['You were too late.'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|ENDING 1']
        ],
        [//Section 5 Go Ahead > Attack > With Bag > With Book: Intro to Linguistics: Omsiretsubilif Le
            ['|Intro to Linguistics: Omsiretsubilif Le fell out as soon as you threw it.'],
            ['You pick it up and throw it towards the dark figure.'],
            ['It missed.'],
            ['...'],
            ['...'],
            ['%THUD% '],
            ['The book hit the floor.'],
            ['It was enraged.'],
            ['The dark figure rushed towards the point of impact.'],
            ['It made disturbing sounds like that of insects flocking together.'],
            ['&*BZZZTTTZTTT*& '],
            ['You ran back up immediately and closed the basement door.'],
            ['You locked it and grabbed a small cabinet block it.'],
            ['You still have your phone.'],
            ['You need to ensure your safety.'],
            ['What will you do...']
        ],
        [//Section 6 Go Ahead > Attack > With Bag > With Book: Functions and Euclidean Space
            ['|Functions and Euclidean Space fell out as soon as you threw it.'],
            ['You pick it up and throw it towards the dark figure.'],
            ['It missed.'],
            ['...'],
            ['...'],
            ['%THUD% '],
            ['The book hit the floor.'],
            ['It was enraged.'],
            ['The dark figure rushed towards the point of impact.'],
            ['It made disturbing sounds like that of insects flocking together.'],
            ['&*BZZZTTTZTTT*& '],
            ['You ran back up immediately and closed the basement door.'],
            ['You locked it and grabbed a small cabinet block it.'],
            ['You still have your phone.'],
            ['You need to ensure your safety.'],
            ['What will you do...']
        ],
        [//Section 7 Go Ahead > Attack > With Bag > With Book: Instrumental Analysis: Practical Experience
            ['|Instrumental Analysis: Practical Experience fell out as soon as you threw it.'],
            ['You pick it up and throw it towards the dark figure.'],
            ['It missed.'],
            ['...'],
            ['...'],
            ['%THUD% '],
            ['The book hit the floor.'],
            ['It was enraged.'],
            ['The dark figure rushed towards the point of impact.'],
            ['It made disturbing sounds like that of insects flocking together.'],
            ['&*BZZZTTTZTTT*& '],
            ['You ran back up immediately and closed the basement door.'],
            ['You locked it and grabbed a small cabinet block it.'],
            ['You still have your phone.'],
            ['You need to ensure your safety.'],
            ['What will you do...']
        ],
        [//Section 8 Go Ahead > Attack > With Bag > With Book: Data Science for Dummies
            ['|Data Science for Dummies fell out as soon as you threw it.'],
            ['You pick it up and throw it towards the dark figure.'],
            ['It missed.'],
            ['...'],
            ['...'],
            ['%THUD% '],
            ['The book hit the floor.'],
            ['It was enraged.'],
            ['The dark figure rushed towards the point of impact.'],
            ['It made disturbing sounds like that of insects flocking together.'],
            ['&*BZZZTTTZTTT*& '],
            ['You ran back up immediately and closed the basement door.'],
            ['You locked it and grabbed a small cabinet block it.'],
            ['You still have your phone.'],
            ['You need to ensure your safety.'],
            ['What will you do...']
        ],
        [//Section 9 Go Ahead > Attack > With Bag > With Book > Go to Bedroom
            ['Go to Bedroom'],
            ['|You go upstairs quietly as you suspect the monster to be sensitive to sound.'],
            ['Suddenly, something slipped out of your pocket.'],
            ['Your phone fell down.'],
            ['%THUD% '],
            ['It fell a long way down.'],
            ['The sound echoed through the silence.'],
            ['You need the phone to call for help.'],
            ["But you couldn't gather the courage to go back even if it was just a short distance."],
            ['You proceed.'],
            ['You open the door and slip into your bedroom.'],
            ['You hid behind the covers of your bed.'],
            ['Hiding..'],
            ['Hiding..'],
            ['|...'],
            ['You suddenly feel drowsy.'],
            ['You fell asleep.'],
            ['...'],
            ['...'],
            ['...'],
            ['The dark figure says &I\'m home..&'],
            ['...'],
            ['|You wake up.'],
            ["It's that nightmare again."],
            ['You check the clock 6:00am.'],
            ['You hear in a muffled sound your dad calling you from downstairs'],
            ['It was all a dream.'],
            ['...'],
            ['???'],
            ['|FINALE 1: ALL A DREAM?']
        ],
        [//Section 10 Go Ahead > Attack > With Bag > With Book > Go to Kitchen
            ['Go to Kitchen'],
            ['|You hide behind the counter.'],
            ['You...']
        ],
        [//Section 11 Go Ahead > Attack > With Bag > With Book > Go to Kitchen > Wait
            ['Wait'],
            ['|...'],
            ['You were feeling drowsy.'],
            ['Hours later...'],
            ['*ding* '],
            ['You were woken up by the Doorbell'],
            ['It must be your Dad.'],
            ['You stood up.'],
            ['...'],
            ['"Dad."'],
            ['%BANG BANG% '],
            ['A sound from the basement door.'],
            ['The monster.'],
            ['It burst the basement door open and rushed to the front.'],
            ['It opened the door forcefully.'],
            ['...'],
            ['You were too late.'],
            ['He was caught.'],
            ['+GAME OVER+ '],
            ['|Doorbell']
        ],
        [//Section 12 Go Ahead > Attack > With Bag > With Book > Go to Kitchen > Call Nicolai
            ['Call Nicolai'],
            ['|%RING  RING% '],
            ['"Nic, there\'s something in the basement. Help."'],
            ['%DOOT% '],
            ['Nicolai dropped the call immediately.'],
            ['You feel lonely.'],
            ['...'],
            ['...'],
            ['...'],
            ["You didn't move."],
            ['Not a step.'],
            ['Not a feet.'],
            ['Not an inch.'],
            ['...'],
            ["Thirty minutes passed and you're still there."],
            ['*ding* '],
            ['The door bell rang.'],
            ['"HEY! It\'s Nicolai. What\'s happening?!? Are you alright!?"'],
            ['You watched in fear as he shouted and shouted.'],
            ['You feared what would happen.'],
            ['%BANG  BANG% '],
            ['It burst the basement door open and rushed to the front.'],
            ['It opened the door forcefully.'],
            ['...'],
            ['You were too late.'],
            ['Nicolai was caught.'],
            ['+GAME OVER+ '],
            ['|Slippery Slope']
        ],
        [//Section 13 Go Ahead > Attack > With Bag > With Book > Go to Living Room
            ['Go to Living Room'],
            ['|You hide behind the couch.'],
            ['You...']
        ],
        [//Section 14 Go Ahead > Attack > With Bag > With Book > Go to Living Room > Wait
            ['Wait'],
            ['|...'],
            ['You were feeling drowsy.'],
            ['...'],
            ['You tried your best to stay awake despite your condition.'],
            ['...'],
            ["You can't resist."],
            ['You slept behind the couch.'],
            ['Hours later...'],
            ['You were woken up by the Doorbell'],
            ['It must be your Dad.'],
            ['You stood up.'],
            ['...'],
            ['"Dad."'],
            ['%BANG BANG% '],
            ['A sound from the basement door.'],
            ['The monster.'],
            ['It burst the basement door open and rushed to the front.'],
            ['It opened the door forcefully.'],
            ['...'],
            ['You were too late.'],
            ['He was caught.'],
            ['+GAME OVER+ '],
            ['|Doorbell']
        ],
        [//Section 15 Go Ahead > Attack > With Bag > With Book > Go to Living Room > Call Nicolai
            ['Call Nicolai'],
            ['|%RING RING% '],
            ['"Nic, there\'s something in the basement. Help."'],
            ['%DOOT% '],
            ['Nicolai dropped the call immediately.'],
            ['You feel lonely.'],
            ['...'],
            ['...'],
            ['...'],
            ["You didn't move."],
            ['Not a step.'],
            ['Not a feet.'],
            ['Not an inch.'],
            ['...'],
            ["Thirty minutes passed and you're still there."],
            ['*ding* '],
            ['The door bell rang.'],
            ['"HEY! It\'s Nicolai. What\'s happening?!? Are you alright!?"'],
            ['You watched in fear as he shouted and shouted.'],
            ['You feared what would happen.'],
            ['%BANG BANG% '],
            ['It burst the basement door open and rushed to the front.'],
            ['It opened the door forcefully.'],
            ['...'],
            ['You were too late.'],
            ['Nicolai was caught.'],
            ['+GAME OVER+ '],
            ['|Friends are forev--']
        ],
        [//Section 16 Go Ahead > Attack > With Bag > With Book > Go back to the Basement
            ['Go back to the Basement'],
            ['|You removed the small cabinet, unlocked the door and went inside.'],
            ['You saw it.'],
            ['...'],
            ['It was staring at the wall.'],
            ['The molded stairs and the moist air was slippery.'],
            ['%Swip  THUD% '],
            ['You fell down.'],
            ['You hit your back.'],
            ['...'],
            ["It's hard to move."],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+  '],
            ['|Slippery Slope']
        ],
        [//Section 17 Go Ahead > Attack > Baseball Bat
            ['Attack'],
            ['|You swing the bat the baseball bat.'],
            ['It was a direct hit!'],
            ['Homerun!'],
            ['Now the dark figure is rendered unconscious.'],
            ['But for how long?'],
            ['...'],
            ['What will you do?']
        ],
        [//Section 18 Go Ahead > Attack > Baseball Bat > Check MONSTER
            ['Check Monster'],
            ['|You look at the dark creature.'],
            ["It doesn't seem to have a definite form."],
            ['It smells earthly and reminiscent of burnt sugar all at once.'],
            ['You poke it with the baseball bat to see how it will react.'],
            ['It latched on to the baseball bat.'],
            ['It pulled you in.'],
            ['...'],
            ['It engulfed you whole with its dark miasma.'],
            ['...'],
            ["It's getting cold."],
            ['...'],
            ["Maybe lingering around and bothering it wasn't the brightest idea."],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Stand By Me']
        ],
        [//Section 19 Go Ahead > Attack > Baseball Bat > Find Ball
            ['Find Ball'],
            ['|You walk past by the dark figure.'],
            ['Against all expected outcomes you turn on the lights and start searching.'],
            ['You rummage through the boxes.'],
            ['You see reserve chemicals.'],
            ['A few keys scattered around.'],
            ['Dish soap.'],
            ['You also see a lot of mold forming around the egress window.'],
            ["It must've leaked."],
            ['Then you finally found it, you see 4 balls.'],
            ['...'],
            ['&*SCHHIiik*& '],
            ['The monster started moving around.'],
            ["You shouldn't be lingering any longer. It might wake up."],
            ['What will you do?']
        ],
        [//Section 20 Go Ahead > Attack > Baseball Bat > Find Ball > stop moving
            ['Stop Moving'],
            ['|You stopped moving.'],
            ["|It's awake."],
            ["It's moving."],
            ["It's slowly snapping it's body into place."],
            ["You're scared."],
            ['What were you thinking going forward to get a ball?'],
            ['...'],
            ["It's there standing."],
            ['You breath heavily.'],
            ['You take the box containing the balls.'],
            ['In panic you threw one.'],
            ['|Ball'],
            ['.'],
            ['Two more.'],
            ['.'],
            ['Ball and another ball.'],
            ['...'],
            ['You threw the last 1'],
            ['....'],
            ['Ball'],
            ['....'],
            ['Out'],
            ['....x'],
            ["It didn't go to you, instead it went further from you."],
            ['It circled around a few times.'],
            ['You realized that it always investigated where the ball hit.'],
            ['It  might have reacted to the loud sounds of the ball hitting the walls.'],
            ['It must be sensitive to sound.'],
            ['Maybe you can use that info to distract the monster and get out.'],
            ['...'],
            ['You back away from it first so you could formulate a plan.'],
            ['%THUNK!% '],
            ['You accidentally bumped the steel racks behind you.'],
            ["It's falling."],
            ["It's falling over."],
            ['...'],
            ['You pulled and held it in place.'],
            ["It didn't fall."],
            ['...'],
            ['You feel a disturbing gaze'],
            ["You feel that the monster heard you but it's not moving over."],
            ['%THUD% '],
            ['A small box crashed over. It slid over when the rack was tilted.'],
            ['You look on, back to the monster.'],
            ["It's approaching you."],
            ['...'],
            ["It's slowly walked towards you."],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Base on Balls']
        ],
        [//Section 21 Go Ahead > Attack > Baseball Bat > Find Ball > Walk Slowly
            ['Walk Slowly'],
            ['|You walk slowly away from it.'],
            ["|It's awake."],
            ["It's moving."],
            ["It's slowly snapping it's body into place."],
            ["You're scared."],
            ['What were you thinking going forward to get a ball?'],
            ['...'],
            ["It's there standing."],
            ['You breath heavily.'],
            ['You take the box containing the balls.'],
            ['In panic you threw one.'],
            ['|Ball'],
            ['.'],
            ['Two more.'],
            ['.'],
            ['Ball and another ball.'],
            ['...'],
            ['You threw the last 1'],
            ['....'],
            ['Ball'],
            ['....'],
            ['Out'],
            ['....x'],
            ["It didn't go to you, instead it went further from you."],
            ['It circled around a few times.'],
            ['You realized that it always investigated where the ball hit.'],
            ['It  might have reacted to the loud sounds of the ball hitting the walls.'],
            ['It must be sensitive to sound.'],
            ['Maybe you can use that info to distract the monster and get out.'],
            ['...'],
            ['You back away from it first so you could formulate a plan.'],
            ['%THUNK!% '],
            ['You accidentally bumped the steel racks behind you.'],
            ["It's falling."],
            ["It's falling over."],
            ['...'],
            ['You pulled and held it in place.'],
            ["It didn't fall."],
            ['...'],
            ['You feel a disturbing gaze'],
            ["You feel that the monster heard you but it's not moving over."],
            ['%THUD% '],
            ['A small box crashed over. It slid over when the rack was tilted.'],
            ['You look on, back to the monster.'],
            ["It's approaching you."],
            ['...'],
            ["It's slowly walked towards you."],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Base on Balls']
        ],
        [//Section 22 Go Ahead > Attack > Baseball Bat > Leave Basement
            ['Leave Basement'],
            ['|You run ahead to leave the basement but you suddenly trip over the baseball bat you held on to.'],
            ['You fall face flat.'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+  '],
            ['|Anticlimactic']
        ],
        [//Section 23 Go Ahead > Attack > Paring Knife
            ['Attack'],
            ['|You slash the monster with the knife.'],
            ['...'],
            ['It barely cut the dark figure.'],
            ['The blade was to blunt.'],
            ['It was also too short and small to do anything.'],
            ['...'],
            ['The small injury you dealt on it had a thick black substance flowing out.'],
            ['It was disgusting.'],
            ['...'],
            ['The thick substance dripped on the floor and coagulated.'],
            ['...'],
            ['The monster was there.'],
            ["Ever so slightly injured but it doesn't seem like it will affect it."],
            ["You were powerless but the monster wasn't moving yet you were still frozen in place."],
            ['Silently screaming for help.'],
            ['...'],
            ["It's cold."],
            ["It's dark."],
            ["It's scary."],
            ["You're scared."],
            ['Afraid.'],
            ['No. Terrified.'],
            ['You smell a whiff of what seemed like burnt sugar.'],
            ['...'],
            ['...'],
            ["You're feeling drowsy."],
            ['...'],
            ["You can't resist."],
            ['...'],
            ['Your body fell along the stairs.'],
            ['...'],
            ['It heard you rolling and tumbling down.'],
            ['...'],
            ["You aren't conscious."],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Ikejime']
        ],
        [//Section 24 Go Ahead > Attack > Ladle
            ['Attack'],
            ['|You swing accross the ladle.'],
            ['...'],
            ['You kept swinging it around.'],
            ['%CLANG% '],
            ['Hitting one of the support beams'],
            ['Suddenly, the monster held on the ladle.'],
            ["It latched on to it with it's formless body."],
            ['It acted as a hook but instead of pulling it you were pulled towards it.'],
            ['It seems the monster went fishing.'],
            ['And it seems that...'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Fishing']
        ],
        [//Section 25 Do Nothing
            ['Do Nothing'],
            ['| ...'],
            ['You were breathing heavily.'],
            ['...'],
            ['You were too late.'],
            ['You were caught.'],
            ['+GAME OVER+ '],
            ['|Scared']
        ],
        [//Section 26 Go Ahead > Attack > Nothing
            ['Attack'],
            ['|You scrambled accross your pockets.'],
            ['You have nothing...'],        
            ['In panic, you scurried your way outside the basement.'],
            ['The loud steps echoed throughout the house.'],
            ['...'],
            ['You heard loud noises coming towards you.'],
            ['It\'s chasing you. Where will you go?']
        ],
        [//Section 27 Go Ahead > Attack > Go to Living Room
            ['Go to Living Room'],
            ['|You go to the living room and hide behind the couch.'],
            ['You take a peek.'],
            ['%CRASH!%  it lunged out of the basement and crashed into the wall.'],
            ['...'],
            ['It seemed disoriented.'],
            ['It might approach you soon'],
            ['Maybe you should leave the living room.']
        ],
        [//Section 28 Go Ahead > Attack > Go to Living Room > Go to Kitchen
            ['Go to Kitchen'],
            ['|You can\'t go to the ktichen. The monster is blocking the path']
        ],
        [//Section 29 Go Ahead > Attack > Go to Living Room > Go to Basement
            ['Go to Basement'],
            ['|You run back to the basement.'],
            ['The monster tried to make out where you were.'],
            ['You kept running towards the basement.'],
            ['You planned to get out through the egress window.'],
            ['...'],
            ['Suddenly, the monster was already runnning behind you.'],
            ['As if it was about to tackle you head on, you make a sharp turn.'],
            ['Luckily, you dodged it, but the window was broken and now block by the monster.'],
            ['It seems the monster was unable to move again.'],
            ['Shard of glass still stuck to the window acted as a hook to glue it in place.'],
            ['...'],
            ['You desperately think of a way to get out of the house.'],
            ['Aside from the window that was just broken, you remember that there was a kay to the locked hatched in the attic.'],
            ['You knew it would lead outside although it\'s quite a high drop.'],
            ['...'],
            ['After thinking it through for a moment you finally decided to search for the keys.'],
            ['You rummage through the boxes and easily found it.'],
            ['The monster was still stuck.'],
            ['You swiftly run to your bedroom.'],
            ['As soon as you arrive at your bedroom you hear the loud rumbles from downstairs.'],
            ['It must be the monster.'],
            ['...'],
            ['It might be chasing after you.'],
            ['You immediately go to the attic.'],
            ['There, you see once again the locked hatch.'],
            ['%CLIK ClAK% '],
            ['You insert the key and it wasn\'t turning.'],
            ['...'],
            ['It might be the wrong key.'],
            ['You think  of what to do as you nearly lost all hope.'],
            ['...'],
            ['...'],
            ['...'],
            ['You tried turning it once more but with much more force.'],
            ['!!!'],
            ['It opened!'],
            ['You discard the lock and open the hatch.'],
            ['It really was a steep fall.'],
            ['...'],
            ['You have no choice.'],
            ['You jump.'],
            ['...'],
            ['You try as much to land on your feet.'],
            ['%CRASH!% '],
            ['"OWW!!"'],
            ['You sprained your ankle.'],
            ['...'],
            ['...'],
            ['You persevered and endured the pain.'],
            ['Step by step...'],
            ['You limp trying to go around the house and into the streets.'],
            ['You don\'t see any sign of the monster anywhere.'],
            ['It seems it won\'t be chasing after you anymore.'],
            ['...'],
            ['You have to go to the hospital.'],
            ['...'],
            ['You have escaped.'],

            ['FINALE 2 Ankle Breaker']
        ],
        [//Section 30 Go Ahead > Attack > Go to Living Room > Go to Bedroom
            ['You run to the bedroom.'],
            ['The monster tried to make out where you were.'],
            ['You kept running.'],
            ['...'],
            ['Suddenly, the monster was already behind you.'],
            ['Ready to ram into you.'],
            ['Luckily, you dodged it and the monster broke through one of the barred windows.'],
            ['It seems the monster was unable to move again.'],
            ['Shard of glass still stuck to the window acted as a hook to glue it in place.'],
            ['...'],
            ['Before knowing it your body already moved inside your room.'],
            ['You realize you were now trapped inside.'],
            ['What will you do?']
        ],
        [//Section 31 Go Ahead > Attack > Go to Living Room > Go to Bedroom > Try to Lock the Door
            ['Try to Lock the Door'],
            ['You try to lock the door.'],
            ['As you approach the door you see in the corner of your eye, the monster.'],
            ['It was there.'],
            ['Waiting.'],
            ['Not moving.'],
            ['You backed away and grabbed the handle of your closet.'],
            ['You see a baseball bat and immediately grabbed it to defend yourself.'],
            ['You wanted to try and knock it out.'],
            ['Suddenly, out of the misplaced bravery you had, you approached the monster.'],
            ['With all your strength you hit it.'],
            ['You hit again just to make sure.'],
            ['...'],
            ['and you hit it again...'],
            ['over..'],
            ['...'],
            ['and over'],
            ['...'],
            ['and over'],
            ['...'],
            ['and over'],
            ['...'],
            ['and &OVER.& '],
            ['...'],
            ['What did you just do?'],
            [' & *SCREEEEECH!* & '],
            ['It cried out loud.'],
            ['...'],
            ['What did you do?'],
            ['...'],
            ['You slowly head downstairs.'],
            ['To the basement.'],
            ['You see the egress window and then you climb out.'],
            ['You\'re outside now.'],
            ['You &defeated& it.'],
            ['What will you do now.'],
            ['...'],
            ['You have escaped.'],
        
            ['|FINALE 3 What have you done']
        ],
        [//Section 32 Go Ahead > Attack > Go to Living Room > Go to Bedroom > Hide in Closet
            ['Hide in Closet'],
            ['You open your closet. There was a baseball bat and clothes.'],
            ['You can\'t fit.'],
            ['Even if you threw out all the clothes you knew you wouldn\'t be able to fit'],
            ['...'],
            ['You see the monster slowly approaching behind you.'],
            ['You immediately grab the baseball bat to defend yourself.'],
            ['It\'s not moving.'],
            ['You wanted to try and knock it out.'],
            ['Suddenly, out of the misplaced bravery you had, you approached the monster.'],
            ['With all your strength you hit it.'],
            ['You hit again just to make sure.'],
            ['...'],
            ['and you hit it again...'],
            ['over..'],
            ['...'],
            ['and over'],
            ['...'],
            ['and over'],
            ['...'],
            ['and over'],
            ['...'],
            ['and &OVER.& '],
            ['...'],
            ['What did you just do?'],
            [' & *SCREEEEECH!* & '],
            ['It cried out loud.'],
            ['...'],
            ['What did you do?'],
            ['...'],
            ['You slowly head downstairs.'],
            ['To the basement.'],
            ['You see the egress window and then you climb out.'],
            ['You\'re outside now.'],
            ['You &defeated& it.'],
            ['What will you do now.'],
            ['...'],
            ['You have escaped.'],
        
            ['|FINALE 3 What have you done.']
        ],
        [//Section 33 Go Ahead > Attack > Go to Kitchen
            ['Go to Kitchen'],
            ['|It followed you.'],
            ['It\'s a dead end.'],
            ['...'],
            ['You hide behind the counter.'],
            ['Moments passed.'],
            ['...'],
            ['Nothing as happening.'],
            ['But as soon as you calmed down a dark figure loomed over you.'],
            ['You breath heavily.'],
            ['...'],
            ['It\'s nearing.'],
            ['...'],
            ['You were caught.'],
            ['...'],
            ['+GAME OVER+ '],

            ['Dark Clouds']
        ],
        [//Section 34 Go Ahead > Attack > Go to Bedroom
            ['Go to Bedroom'],
            ['|As soon as you heard it you hurried to your bedroom.'],
            ['Loud steps sounded from the wooden stairs as you run up.'],
            ['It was loud. It echoed once again throughout the house.'],
            ['...'],
            ['You hear it still chasing you. It seemed much angrier this time.'],
            ['You ran faster fearing for your life.'],
            ['You reach the front of your room.'],
            ['You quickly opened the door, went inside, and shut the door.'],
            ['...'],
            ['A loud bang came after you shut the door.'],
            ['It kept banging and banging.'],
            ['You grew terrified, frightened, afraid, scared...'],
            ['...'],
            ['Suddenly, you remember the attic, the hammer, nails, and rotting wood.'],
            ['You\'ve conjured a daring idea.'],
            ['...'],
            ['You opened the hatch and climb up knowing that it would soon break through your door.'],
            ['You tore off pieces of rotting wood and started to nail shut the hatch leading down.'],
            ['*Thug! Thug! Thug!* '],
            ['As your hammer hit the nails, the banging of the door became louder.'],
            ['%ThUG! ThUG! ThUG!% '],
            ['The door was about to break.'],
            ['%CRASHHH!!% '],
            ['After breaking the door it started pounding on the hatch you just sealed.'],
            ['...'],
            ['It kept relentlessly pounding.'],
            ['...'],
            ['You see the pieces of wood absorbing the impact.'],
            ['...'],
            ['It kept pounding.'],
            ['...'],
            ['Pieces of wood started shifting around.'],
            ['It might break if it doesn\'t stop.'],
            ['You have no other way out. '],
            ['The other hatch was still locked.'],
            ['The keys were still in the basement.'],
            ['%BANG! BANG!% '],
            ['Each and every time pieces of wood were loosening up and were being slowly removed.'],
            ['...'],
            ['There\'s nothing else you can do.'],
            ['...'],
            ['%CRASHHH!% '],
            ['It bust through the hatch.'],
            ['...'],
            ['Your breaths became much havier as soon as you saw it.'],
            ['It slowly approached towards you.'],
            ['It was formless..'],
            ['It was abhorrent.'],
            ['...'],
            ['Maybe it would\'ve turned out different if you had the key.'],
            ['Just maybe.'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],

            ['|Too soon']
        ],
        [//Section 35 Go Ahead > Attack > Stay
            ['Stay'],
            ['|You stay in place. You see the monster lunging towards you.'],
            ['Maybe it was a mistake to stay.'],
            ['It was in front of you in a fraction of a second.'],
            ['You couldn\'t react, it was too fast.'],
            ['...'],
            ['It was over.'],
            ['...'],
            ['You were caught.'],
            ['+GAME OVER+ '],

            ['|It Goes a Little Something Like'],
        ]
    ]
];

let pauseNextFunction = false;
let chapterIndex = 0;
let sectionIndex = 0;
let lineIndex = 0 ;
let sentenceIndex = 0;
let characterIndex = 0;
let totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
function getTotalIndex(){
    totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
    console.log("(totalIndex == " + totalIndex + ")");
}
document.getElementById('ChoiceBox').style.opacity = '0';

//Timing and Sound
    let delayTime = 30;
    let delaytMultiplier = 0.5;

    document.addEventListener('keydown', function(keypress) {    
        if(keypress.keyCode == 32) {
            console.log('spacebar was pressed');
            next();
        }
    });

    let lastMusic = new Audio('Music/Daniel Birch - The Restless Textures Of Shapes.mp3');
    lastMusic.pause(); 
    let normalMusic = new Audio("Music/Xylo-Ziko - Savanna.mp3");
    normalMusic.pause(); 
    let basementMusic = new Audio("Music/Horror.mp3");
    normalMusic.pause(); 
    lastMusic.volume = 1;
    normalMusic.volume = 0.15;
    basementMusic.volume = 0.15  ;
    let beepNeutral;  
    beepNeutral = [new Audio("Music/beepNeutralNormal.mp3"), new Audio("beepNeutralFast.mp3")];
    let SFX = [new Audio("Music/Phone Ring.wav")];
//Highlight Booleans and text function
let noteHighilight = false;          //@@ is note tag
let callHighilight = false;      //## is call tag
let sunnyHighilight = false;        //$$ is sunny tag
let monsterHighilight = false;      //&& is monster tag
let soundsHighilight = false;       //%% is sound effects tag
let subtleHighilight = false;       //** is subtle sfx tag
let gameOverHighilight = false;       //++ is gameOver tag
function characterWrite(){
    if (noteHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="note">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else if (callHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="call">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    } 
    else if (sunnyHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="sunny">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else if (monsterHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="monster">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else if (soundsHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="sfx">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else if (subtleHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="subtle-sfx">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else if (gameOverHighilight == true){
        document.getElementById("Text").innerHTML += '<span id="game-over">' + chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] + '</span>';
    }
    else{
        document.getElementById("Text").innerHTML += chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex];
    }
}

//Items and Choice Booleans
let havePhone = false;
let haveGoneToBedroom = false;
let haveWatchedTV = false;
let haveBag = false;
let haveLinguistics = false;
let haveFunctions = false;
let haveInstrumental = false;
let haveData = false;
let haveBaseball = false;
let haveKnife = false;
let haveLadle = false;

function next(){
        
    if ((characterIndex == 0)&&(pauseNextFunction == false)){
        delaytMultiplier = 1;  
        nextCharacterLoop();
    }
    else {
        delaytMultiplier = 0.2;
    }
    function nextCharacterLoop() {
        if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "|"){
            document.getElementById("Text").innerHTML += '<br>';
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "@"){
            if (noteHighilight==true){
                noteHighilight = false;
            }
            else{
                noteHighilight = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "#"){
            if (callHighilight==true){
                callHighilight = false;
            }
            else{
                callHighilight = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "$"){
            if (sunnyHighilight==true){
                sunnyHighilight = false;
            }
            else{
                sunnyHighilight = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "&"){
            if (monsterHighilight==true){
                monsterHighilight = false;
            }
            else{
                monsterHighilight  = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "%"){
            if (soundsHighilight==true){
                soundsHighilight = false;
            }
            else{
                soundsHighilight  = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "*"){
            if (subtleHighilight==true){
                subtleHighilight = false;
            }
            else{
                subtleHighilight  = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == "+"){
            if (gameOverHighilight==true){
                gameOverHighilight = false;
            }
            else{
                gameOverHighilight  = true; 
            }
            characterIndex++;
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == ">"){
            characterIndex++;
            beepNeutral[0].play();  
        }
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex-1] == "."){
            delayTime = 200*delaytMultiplier;
            
        }  
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == ","){
            delayTime = 200*delaytMultiplier;
            beepNeutral[0].play();  
        }    
        else if (chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex][characterIndex] == " "){
            delayTime = 50*delaytMultiplier;
            beepNeutral[0].play();  
        } 
        else {
            delayTime = (25*delaytMultiplier);
            beepNeutral[0].play();  
               
        }
        setTimeout(function() {  
            characterWrite();
            characterIndex++;
            if (characterIndex < chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex].length) {       
                nextCharacterLoop();           
            }   
            if (characterIndex == chapter[chapterIndex][sectionIndex][lineIndex][sentenceIndex].length){
                characterIndex=0;
                sentenceIndex++;
            }
            if (sentenceIndex == chapter[chapterIndex][sectionIndex][lineIndex].length){
                sentenceIndex=0;
                document.getElementById("Text").innerHTML += '<br>';
                lineIndex++;  
            }
            if (lineIndex == chapter[chapterIndex][sectionIndex].length){
                lineIndex=0;
                document.getElementById("Text").innerHTML += '<br>';
                document.getElementById('ChoiceBox').style.opacity = '100%';
                continueIndex = true;
                pauseNextFunction = true;
            }
            if (checkUpdateIndex(0,0,10,0,10 )){
                console.log('true');
                normalMusic.play();
            } 
            else if (checkUpdateIndex(3,0,2 ,0,0)){
                SFX[0].play();
                normalMusic.pause();  
            }
            else if (checkUpdateIndex(3,0,5,0,20)){
                SFX[0].pause(); 
            }
            else if (checkUpdateIndex(0,6,1,0,5)){
                console.log('have phone');
                havePhone = true;
            }
            else if (checkUpdateIndex(2,2,0,0,5)){
                console.log('have linguistics');
                haveLinguistics = true;
            }
            else if (checkUpdateIndex(2,3,0,0,5)){
                console.log('have functions');
                haveFunctions = true;
            }
            else if (checkUpdateIndex(2,4,0,0,5)){
                console.log('have instrumental');
                haveInstrumental = true;
            }
            else if (checkUpdateIndex(2,5,0,0,5)){
                console.log('have data');
                haveData = true;
            }
            else if (checkUpdateIndex(3,14,1,0,5)){
                console.log('have bag');
                haveBag = true;
            }
            else if (checkUpdateIndex(3,6,1,0,5)){
                console.log('have bat');
                haveBaseball = true;
            }
            else if (checkUpdateIndex(3,12,1,0,5)){
                console.log('have bag');
                haveKnife = true;
            }
            else if (checkUpdateIndex(3,13,1,0,5)){
                console.log('have bag');
                haveLadle = true;
            }
            else if (checkUpdateIndex(2,6,1,0,5)){
                console.log('have gone to bedroom and have phone');
                havePhone = true;
                haveGoneToBedroom = true;
            }
            else if (checkUpdateIndex(4,0,1,0,2 )){
                basementMusic.play();
            }
            else if (checkUpdateIndex(4,2,15,0,1)){
                basementMusic.pause();
                lastMusic.play(); 
            }
            else if (checkUpdateIndex(2,1,1,0,5)){
                console.log('have gone to bedroom');
                haveGoneToBedroom = true;
            }
            else if (checkUpdateIndex(2,7,1,0,5)){
                console.log('have watched tv');
                haveWatchedTV = true;
            }
        }, delayTime);
    }
}
function checkUpdateIndex(targetChapter, targetSection, targetLine, targetSentence, targetCharacter){
    if (
        (targetChapter == chapterIndex)&&(targetSection == sectionIndex)&&(targetLine == lineIndex)&&(targetSentence == sentenceIndex)&&(targetCharacter == characterIndex)
    ){return true;} 
    else {return false;}
} 
function updateIndex(targetChapter, targetSection, targetLine, targetSentence, targetCharacter, toChapterNumber, toSectionNumber, toLineNumber, toSentenceNumber, toCharacterNumber, changeChoice1, changeChoice2, changeChoice3, changeChoice4){
    //console.log(targetChapter, targetSection, targetLine, targetSentence, targetCharacter);
    //console.log(chapterIndex, sectionIndex,lineIndex,sentenceIndex,characterIndex);
    if (
        (targetChapter == chapterIndex)&&(targetSection == sectionIndex)&&(targetLine == lineIndex)&&(targetSentence == sentenceIndex)&&(targetCharacter == characterIndex)&&(continueIndex == true)
    )
        {
        
        chapterIndex = toChapterNumber;
        sectionIndex = toSectionNumber;
        lineIndex = toLineNumber;
        sentenceIndex = toSentenceNumber;
        characterIndex = toCharacterNumber;
        pauseNextFunction = false;
        continueIndex = false;
        //console.log(changeChoice1 != undefined);
        // console.log(chapterIndex, sectionIndex,lineIndex,sentenceIndex,characterIndex);
        setTimeout(function(){
            if (changeChoice1 !== undefined){
                document.getElementById('Choice1').innerHTML = changeChoice1;
                document.getElementById('Choice1').style.display = 'block';
            }
            else {
                document.getElementById('Choice1').style.display = 'none';
                console.log(document.getElementById('Choice1').style.display);
            }
            if (changeChoice2 !== undefined){
                document.getElementById('Choice2').innerHTML = changeChoice2;
                document.getElementById('Choice2').style.display = 'block';
            }
            else {
                document.getElementById('Choice2').style.display = 'none';
                console.log(document.getElementById('Choice2').style.display);
            }
            if (changeChoice3 !== undefined){
                document.getElementById('Choice3').innerHTML = changeChoice3;
                document.getElementById('Choice3').style.display = 'block';
            }
            else {
                document.getElementById('Choice3').style.display = 'none';
                console.log(document.getElementById('Choice3').style.display);
            }
            if (changeChoice4 !== undefined){
                document.getElementById('Choice4').innerHTML = changeChoice4;
                document.getElementById('Choice4').style.display = 'block';
            }
            else {
                
                document.getElementById('Choice4').style.display = 'none';
                console.log(document.getElementById('Choice4').style.display);
            }
        },250);
        document.getElementById('ChoiceBox').style.opacity = '0';  
    }
}


function firstChoice(){
    totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
    console.log("First choice chosen. " + document.getElementById('Choice1').innerHTML + "Total index is: " + totalIndex);
    updateIndex(0,0,0,0,0,0,1,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Bed
    updateIndex(0,1,0,0,0,0,1,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Bed
    updateIndex(0,2,0,0,0,0,1,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Bed
    updateIndex(0,3,0,0,0,0,1,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Bed

    updateIndex(0,4,0,0,0,0,5,0,0,0,"Continue Searching", "Leave Room");     //Search for it

    updateIndex(0,5,0,0,0,0,6,0,0,0,"Continue to Chapter 2");     //Continue Searching

    updateIndex(0,6,0,0,0,1,0,0,0,0,"Go Outside", "Check Kitchen");     //Continue to Chapter 2
    updateIndex(0,7,0,0,0,1,0,0,0,0,"Go Outside", "Check Kitchen");     //Continue to Chapter 2
    updateIndex(0,8,0,0,0,1,0,0,0,0,"Go Outside", "Check Kitchen");     //Continue to Chapter 2

    updateIndex(1,0,0,0,0,1,1,0,0,0,"Kick The Door","Shake the Knob","Leave the Door Alone");   //Go Outside
    updateIndex(1,1,0,0,0,1,2,0,0,0,"Blame the Door","Don't Blame the Door");   //Kick the Door
    updateIndex(1,2,0,0,0,1,3,0,0,0,"Check the Kitchen");    //Blame the Door

    updateIndex(1,7,0,0,0,1,8,0,0,0, "Continue to Chapter 3");  //Heat it up

    updateIndex(1,3,0,0,0,1,7,0,0,0, "Heat it Up","Eat it Cold");  //Check the Kitchen
    updateIndex(1,4,0,0,0,1,7,0,0,0, "Heat it Up","Eat it Cold");  //Check the Kitchen
    updateIndex(1,5,0,0,0,1,7,0,0,0, "Heat it Up","Eat it Cold");  //Check the Kitchen
    updateIndex(1,6,0,0,0,1,7,0,0,0, "Heat it Up","Eat it Cold");  //Check the Kitchen

    if (havePhone==true){
        updateIndex(1,8,0,0,0,2,0,0,0,0,"Go to Bedroom", "Watch TV", "Call Someone");   //Continue to Chapter 3
        updateIndex(1,9,0,0,0,2,0,0,0,0,"Go to Bedroom", "Watch TV", "Call Someone");   //Continue to Chapter 3
        updateIndex(2,0,0,0,0,2,1,0,0,0, "Intro to Linguistics: Omsiretsubilif Le", "Functions and Euclidean Space", "Instrumental Analysis: Practical Experience", "Data Science for Dummies"); //Go to Bedroom havePhone: true
    }
    else{
        updateIndex(1,8,0,0,0,2,0,0,0,0,"Go to Bedroom", "Watch TV");   //Continue to Chapter 3
        updateIndex(1,9,0,0,0,2,0,0,0,0,"Go to Bedroom", "Watch TV");   //Continue to Chapter 3
        updateIndex(2,0,0,0,0,2,6,0,0,0, "Watch TV", "Call Someone");   //Go to bedroom havePhone:false
        updateIndex(2,7,0,0,0,2,6,0,0,0, "Call Someone");
    }
    if(haveWatchedTV==true){
        updateIndex(2,6,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
        if(haveGoneToBedroom){
            updateIndex(2,7,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
        }
    }
    else{
        updateIndex(2,6,0,0,0,2,7,0,0,0, "Call Someone");
    }
    if(haveWatchedTV==true){
        updateIndex(2,1,0,0,0,2,2,0,0,0,"Call Someone");
    }
    else{
        updateIndex(2,1,0,0,0,2,2,0,0,0,"Watch TV","Call Someone");
    }
    updateIndex(2,8,0,0,0,2,9,0,0,0,"Continue to Chapter 4");
    updateIndex(2,2,0,0,0,2,7,0,0,0,"Call Someone");
    updateIndex(2,3,0,0,0,2,7,0,0,0,"Call Someone");
    updateIndex(2,4,0,0,0,2,7,0,0,0,"Call Someone");
    updateIndex(2,5,0,0,0,2,7,0,0,0,"Call Someone");

    updateIndex(2,10,0,0,0,3,0,0,0,0,"End Call", "Ask for Help", "I Feel Lonely", "Give Address");  //Continue to Chapter 4
    updateIndex(2,9,0,0,0,3,0,0,0,0,"End Call", "Ask for Help", "I Feel Lonely", "Give Address");   //Continue to Chapter 4

    updateIndex(3,0,0,0,0,3,1,0,0,0,"Go to Bedroom", "Go to Kitchen", "Go to Living Room"); //End Call

    updateIndex(3,1,0,0,0,3,5,0,0,0,"Check Closet", "Check Attic", "Go to Sleep");   //Go to Bedroom
    updateIndex(3,2,0,0,0,3,5,0,0,0,"Check Closet", "Check Attic", "Go to Sleep");   //Go to Bedroom
    updateIndex(3,3,0,0,0,3,5,0,0,0,"Check Closet", "Check Attic", "Go to Sleep");   //Go to Bedroom
    updateIndex(3,4,0,0,0,3,5,0,0,0,"Check Closet", "Check Attic", "Go to Sleep");   //Go to Bedroom

    updateIndex(3,5,0,0,0,3,6,0,0,0,"Change Clothes", "Take Baseball Bat");   //Check Closet
    updateIndex(3,10,0,0,0,3,6,0,0,0,"Change Clothes", "Take Baseball Bat");  //Check Closet
    updateIndex(3,6,0,0,0,3,7,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");   //Change Clothes

    updateIndex(3,11,0,0,0,3,12,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");  //Wash Knife

    updateIndex(3,14,0,0,0,3,15,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");

    updateIndex(3,7,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");   //Continue to Chapter 4.5
    updateIndex(3,8,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");   //Continue to Chapter 4.5
    updateIndex(3,9,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");   //Continue to Chapter 4.5
    updateIndex(3,12,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");  //Continue to Chapter 4.5
    updateIndex(3,13,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");  //Continue to Chapter 4.5
    updateIndex(3,15,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");  //Continue to Chapter 4.5
    updateIndex(3,16,0,0,0,4,0,0,0,0,"Turn Back", "Go Ahead");  //Continue to Chapter 4.5
    
    updateIndex(4,0,0,0,0,4,1,0,0,0);   //Turn Back

    updateIndex(4,3,0,0,0,4,4,0,0,0);

    updateIndex(4,5,0,0,0,4,9,0,0,0);
    updateIndex(4,6,0,0,0,4,9,0,0,0);
    updateIndex(4,7,0,0,0,4,9,0,0,0);
    updateIndex(4,8,0,0,0,4,9,0,0,0);

    updateIndex(4,10,0,0,0,4,11,0,0,0);
    updateIndex(4,13,0,0,0,4,14,0,0,0);

    updateIndex(4,17,0,0,0,4,18,0,0,0);

    updateIndex(4,19,0,0,0,4,20,0,0,0);

    if (haveBag==true){
        if(haveLinguistics==true){
            updateIndex(4,2,0,0,0,4,5,0,0,0,"Go to Bedroom","Go to Kitchen","Go to Living Room");
        }
        else if (haveFunctions==true){
            updateIndex(4,2,0,0,0,4,6,0,0,0,"Go to Bedroom","Go to Kitchen","Go to Living Room");
        }
        else if (haveInstrumental==true){
            updateIndex(4,2,0,0,0,4,7,0,0,0,"Go to Bedroom","Go to Kitchen","Go to Living Room");
        }
        else if (haveData==true){
            updateIndex(4,2,0,0,0,4,8,0,0,0,"Go to Bedroom","Go to Kitchen","Go to Living Room");
        }
        else {  
            updateIndex(4,2,0,0,0,4,3,0,0,0,"Continue");
        }
    }
    else if(haveBaseball==true){
        updateIndex(4,2,0,0,0,4,17,0,0,0,"<span id='monster'>CHECK MONSTER</span>","Find Ball","Leave Basement");
    }
    else if(haveKnife==true){
        updateIndex(4,2,0,0,0,4,23,0,0,0);
    }
    else if(haveLadle==true){
        updateIndex(4,2,0,0,0,4,24,0,0,0);
    }
    else{
        updateIndex(4,2,0,0,0,4,26,0,0,0,"Go to Living Room","Go to Kitchen","Go to Bedroom","Stay");
    }
    
    updateIndex(4,26,0,0,0,4,27,0,0,0,"Go to Kitchen","Go to Basement","Go to Bedroom");

    updateIndex(4,27,0,0,0,4,28,0,0,0, "Go to Basement","Go to Bedroom");

    updateIndex(4,28,0,0,0,4,29,0,0,0);

    updateIndex(4,27,0,0,0,4,29,0,0,0);
}
function secondChoice(){
    totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
    console.log("Second choice chosen. " + document.getElementById('Choice2').innerHTML + "Total index is: " + totalIndex);
    updateIndex(0,0,0,0,0,0,2,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Study Table
    updateIndex(0,1,0,0,0,0,2,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Study Table
    updateIndex(0,2,0,0,0,0,2,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Study Table
    updateIndex(0,3,0,0,0,0,2,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Study Table

    updateIndex(0,4,0,0,0,0,8,0,0,0,"Continue to Chapter 2");     //Don't Search for it
    updateIndex(0,5,0,0,0,0,7,0,0,0,"Continue to Chapter 2");     //Leave Room

    updateIndex(1,0,0,0,0,1,7,0,0,0,"Heat it Up","Eat it Cold");   //Check the Kitchen

    updateIndex(1,2,0,0,0,1,4,0,0,0,"Check the Kitchen");    //Don't Blame the Door

    updateIndex(1,1,0,0,0,1,5,0,0,0,"Check the Kitchen");    //Shake the Knob

    updateIndex(1,7,0,0,0,1,9,0,0,0, "Continue to Chapter 3");  //Eat it Cold

    updateIndex(2,2,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
    updateIndex(2,3,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
    updateIndex(2,4,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
    updateIndex(2,5,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");

    updateIndex(2,8,0,0,0,2,10,0,0,0,"Continue to Chapter 4");

    if(haveWatchedTV==true){
        updateIndex(2,1,0,0,0,2,3,0,0,0,"Call Someone");
    }
    else{
        updateIndex(2,1,0,0,0,2,3,0,0,0,"WatchTV","Call Someone");
    }

    if (haveWatchedTV==true){
        updateIndex(2,6,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
    }
    if (havePhone==true){
        if (haveGoneToBedroom==true){
            updateIndex(2,0,0,0,0,2,7,0,0,0, "Call Someone");
            updateIndex(2,6,0,0,0,2,8,0,0,0, "Call Dad", "Call Nicolai");
        }
        else{
            updateIndex(2,0,0,0,0,2,7,0,0,0,"Go to Bedroom", "Call Someone");
            updateIndex(2,6,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
        }
    }
    else{
            updateIndex(2,0,0,0,0,2,7,0,0,0,"Go to Bedroom");
            updateIndex(2,0,0,0,0,2,7,0,0,0,"Go to Bedroom");
    }

    updateIndex(3,0,0,0,0,3,2,0,0,0,"Go to Bedroom", "Go to Kitchen", "Go to Living Room"); //Ask for Help

    updateIndex(3,6,0,0,0,3,8,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");    //Take Baseball Bat

    updateIndex(3,5,0,0,0,3,9,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");    //Check Attic
    updateIndex(3,10,0,0,0,3,9,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");   //Check Attic

    updateIndex(3,1,0,0,0,3,11,0,0,0,"Wash Knife", "Wash Ladle");   //Go to Kitchen
    updateIndex(3,2,0,0,0,3,11,0,0,0,"Wash Knife", "Wash Ladle");   //Go to Kitchen
    updateIndex(3,3,0,0,0,3,11,0,0,0,"Wash Knife", "Wash Ladle");   //Go to Kitchen
    updateIndex(3,4,0,0,0,3,11,0,0,0,"Wash Knife", "Wash Ladle");   //Go to Kitchen

    updateIndex(3,11,0,0,0,3,13,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");  //Wash Ladle

    updateIndex(3,14,0,0,0,3,15,0,0,0,"<span id='monster'>Continue to Chapter 4.5<span>");

    updateIndex(4,0,0,0,0,4,2,0,0,0,"Attack","Do Nothing");

    updateIndex(4,5,0,0,0,4,10,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,6,0,0,0,4,10,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,7,0,0,0,4,10,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,8,0,0,0,4,10,0,0,0,"Wait","Call Nicolai");

    updateIndex(4,10,0,0,0,4,12,0,0,0);
    updateIndex(4,13,0,0,0,4,15,0,0,0);

    updateIndex(4,19,0,0,0,4,21,0,0,0);

    updateIndex(4,17,0,0,0,4,19,0,0,0,"Stop Moving", "Walk Slowly");

    updateIndex(4,2,0,0,0,4,25,0,0,0);

    updateIndex(4,26,0,0,0,4,33,0,0,0);

    updateIndex(4,27,0,0,0,4,29,0,0,0);

    updateIndex(4,30,0,0,0,4,32,0,0,0);

    updateIndex(4,28,0,0,0,4,30,0,0,0,"Try to Lock the Door","Hide in Closet");
}
function thirdChoice(){
    totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
    console.log("Third choice chosen. " + document.getElementById('Choice3').innerHTML + "Total index is: " + totalIndex);
    updateIndex(0,0,0,0,0,0,3,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Window
    updateIndex(0,1,0,0,0,0,3,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Window
    updateIndex(0,2,0,0,0,0,3,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Window
    updateIndex(0,3,0,0,0,0,3,0,0,0,"Check Bed", "Check Study Table", "Check Window", "Leave Room");    //Check Window

    updateIndex(1,1,0,0,0,1,6,0,0,0,"Check the Kitchen");    //Leave the Door Alone
    if (havePhone==true){
        updateIndex(2,0,0,0,0,2,8,0,0,0,"Call Dad", "Call Nicolai");
    }
    if(haveWatchedTV==true){
        updateIndex(2,1,0,0,0,2,4,0,0,0,"Call Someone");
    }
    else{
        updateIndex(2,1,0,0,0,2,4,0,0,0,"WatchTV","Call Someone");
    }

    updateIndex(3,0,0,0,0,3,3,0,0,0,"Go to Bedroom", "Go to Kitchen", "Go to Living Room"); //I Feel Lonely

    updateIndex(3,5,0,0,0,3,10,0,0,0,"Check Closet", "Check Attic", "Go to Sleep"); //Go to Sleep
    updateIndex(3,10,0,0,0,3,10,0,0,0,"Check Closet", "Check Attic", "Go to Sleep"); //Go to Sleep

    updateIndex(3,1,0,0,0,3,14,0,0,0,"Go to Back Door", "Go to Basement");   //Go to Living Room
    updateIndex(3,2,0,0,0,3,14,0,0,0,"Go to Back Door", "Go to Basement");   //Go to Living Room
    updateIndex(3,3,0,0,0,3,14,0,0,0,"Go to Back Door", "Go to Basement");   //Go to Living Room
    updateIndex(3,4,0,0,0,3,14,0,0,0,"Go to Back Door", "Go to Basement");   //Go to Living Room

    updateIndex(4,5,0,0,0,4,13,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,6,0,0,0,4,13,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,7,0,0,0,4,13,0,0,0,"Wait","Call Nicolai");
    updateIndex(4,8,0,0,0,4,13,0,0,0,"Wait","Call Nicolai");

    updateIndex(4,17,0,0,0,4,22,0,0,0);

    updateIndex(4,26,0,0,0,4,34,0,0,0);

    updateIndex(4,27,0,0,0,4,30,0,0,0,"Try to Lock the Door","Hide in Closet");
}
function fourthChoice(){
    totalIndex = [chapterIndex, sectionIndex, lineIndex, sectionIndex, characterIndex];
    console.log("Fourth choice chosen. " + document.getElementById('Choice4').innerHTML + "Total index is: " + totalIndex);
    updateIndex(0,0,0,0,0,0,4,0,0,0,"Search for it", "Don't Search for it");    //Leave Room
    updateIndex(0,1,0,0,0,0,4,0,0,0,"Search for it", "Don't Search for it");    //Leave Room
    updateIndex(0,2,0,0,0,0,4,0,0,0,"Search for it", "Don't Search for it");    //Leave Room
    updateIndex(0,3,0,0,0,0,4,0,0,0,"Search for it", "Don't Search for it");    //Leave Room

    if(haveWatchedTV==true){
        updateIndex(2,1,0,0,0,2,5,0,0,0,"Call Someone");
    }
    else{
        updateIndex(2,1,0,0,0,2,5,0,0,0,"WatchTV","Call Someone");
    }
    updateIndex(3,0,0,0,0,3,4,0,0,0,"Go to Bedroom", "Go to Kitchen", "Go to Living Room"); //Give Address

    updateIndex(4,26,0,0,0,4,35,0,0,0);
}
