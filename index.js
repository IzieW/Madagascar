const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())

app.use(cors())

app.use(express.static("build"))

let db = {
    "scores": [
      {
        "name": "jod",
        "score": 14,
        "id": 1
      },
      {
        "name": "jod",
        "score": 64,
        "id": 2
      },
      {
        "name": "divija",
        "score": 3,
        "id": 3
      },
      {
        "name": "izie",
        "score": 34,
        "id": 4
      },
      {
        "name": "jod",
        "score": 34,
        "id": 5
      },
      {
        "name": "jod",
        "score": 40,
        "id": 6
      },
      {
        "name": "Spliz",
        "score": 81,
        "id": 7
      }
    ],
    "script": {"Madagascar": [
      {
        "name": "Alex",
        "line": " Surprise!"
      },
      {
        "name": "Marty",
        "line": " (screaming, falls from treadmill and crashes into a fence) Alex! Do not interrupt me when I’m daydreaming! When a zebra’s in the zone, leave him alone."
      },
      {
        "name": "Alex",
        "line": " Come on, Marty. I just wanted to wish you a happy birthday!"
      },
      {
        "name": "Marty",
        "line": " (Chuckles) Hey, man. Thanks!"
      },
      {
        "name": "Alex",
        "line": " Oh, ah! Oh! Hey um... I got s—I got something stuck in my teeth. It's driving me crazy! Can you help me out here? Please?"
      },
      {
        "name": "Marty",
        "line": " Ah! You came to the right place, my friend. Doctor Marty D.D.S. is in the house! Please hop on top of my sterilized examination table, if you may."
      },
      {
        "name": "Marty",
        "line": " I don't see anything."
      },
      {
        "name": "Alex",
        "line": " (Muffled) It's on the left."
      },
      {
        "name": "Marty",
        "line": " Ow!"
      },
      {
        "name": "Alex",
        "line": " (Muffled) Oh, sorry."
      },
      {
        "name": "Marty",
        "line": " OK, just don't talk with your mouth full. (Alex nods) Aha! Right here. What the heck is this doing in there?"
      },
      {
        "name": "Alex",
        "line": " Happy birthday!"
      },
      {
        "name": "Marty",
        "line": " Aww. Hey, thanks, man. You put it in behind the tooth. You all right."
      },
      {
        "name": "Alex",
        "line": " These aren't even on the shelf yet. Here! Check it out. Check it out! Look at that. Ooh! Look at that! Ooh!"
      },
      {
        "name": "Marty",
        "line": " Look at that. It's snowing."
      },
      {
        "name": "Alex",
        "line": " 10 years old, huh? A decade. Double digits. The big 1-O! You don't like it?"
      },
      {
        "name": "Marty",
        "line": " No, no, it's great!"
      },
      {
        "name": "Alex",
        "line": " You hate it. Ugh! I should've gotten you the Alex alarm clock. That's the one. That’s the big seller."
      },
      {
        "name": "Marty",
        "line": " No, no, no. The present's great, really. It's just that another year's come and gone and I'm still doing the same old thing. (imitating) \"Stand over here, trot over there. Eat some grass. Walk back over here.\""
      },
      {
        "name": "Alex",
        "line": " I see your problem."
      },
      {
        "name": "Marty",
        "line": " Maybe I should go to law school."
      },
      {
        "name": "Alex",
        "line": " You just need to break out of that boring routine."
      },
      {
        "name": "Marty",
        "line": " How?"
      },
      {
        "name": "Alex",
        "line": " Throw out the old act. Get out there! Who knows what you're gonna do. Make it up as you go along. Ad lib. Improvise. On the fly. Boom, boom, boom."
      },
      {
        "name": "Marty",
        "line": " Really?"
      },
      {
        "name": "Alex",
        "line": " You know, make it fresh."
      },
      {
        "name": "Marty",
        "line": " Fresh, huh? OK. I could do fresh."
      },
      {
        "name": "Alex",
        "line": " Works for me."
      },
      {
        "name": "Alex",
        "line": " Here come the people, Marty! Oh, I love the people! It's fun people fun time! Whoo!"
      },
      {
        "name": "Alex",
        "line": " Let's go, Gloria! Up and at 'em! We're open!"
      },
      {
        "name": "Gloria",
        "line": " (yawning) What day is it?"
      },
      {
        "name": "Alex",
        "line": " It's Friday! Field trip day! Dadadadada! Boom! Let’s go! Come on!"
      },
      {
        "name": "Gloria",
        "line": " Yes, it's field trip day. Let's get up and go... (falls asleep again) in 10 more minutes."
      },
      {
        "name": "Alex",
        "line": " Come on! (sings in Conga style) Melman, Melman, Melman! Melman, Melman, Melman! Wake up! Rise and shine! It's another fabulous morning in the Big Apple. Let's go!"
      },
      {
        "name": "Melman",
        "line": " (scoffs) Not for me. I'm calling in sick."
      },
      {
        "name": "Alex",
        "line": " What?"
      },
      {
        "name": "Melman",
        "line": " I found a brow-- another brown spot on my shoulder. Right here. See? Right t- Right there. You see?"
      },
      {
        "name": "Alex",
        "line": " Melman, you know it's all in your head. Hmm?"
      },
      {
        "name": "Kid",
        "line": " Let's go! Come on!"
      },
      {
        "name": "Mason",
        "line": " Phil! Wake up, you filthy monkey. (Mason gives Phil his coffee while he reads the newspaper and eats his bagel. Meanwhile, Marty prepares to give his audience something special for his birthday.)"
      },
      {
        "name": "Marty",
        "line": " Oh, I'm going to be fresh. Straight out the ground. Tasty fresh! Freshalicious. (sips some water and spits it out) Ziploc fresh."
      },
      {
        "name": "Announcer",
        "line": " Ladies and gentlemen, children of all ages, the Central Park Zoo proudly presents"
      },
      {
        "name": "Kids",
        "line": " (chanting) Alex! Alex! Alex! Alex!"
      },
      {
        "name": "Alex",
        "line": " Oh! Show them the cat! Who's the cat? Whoo!"
      },
      {
        "name": "Announcer",
        "line": " The king of New York City."
      },
      {
        "name": "Both",
        "line": " Alex the Lion!"
      },
      {
        "name": "Alex",
        "line": " (roars) Ahhhh!"
      },
      {
        "name": "Marty",
        "line": " It's showtime! (simultaneously as Alex emerges and turns on the fan blowing his mane)"
      },
      {
        "name": "Alex",
        "line": " Roar!!!"
      },
      {
        "name": "Marty",
        "line": " Gather around, people. Big show about to start. Check out the zebra taking care of biz. That's right."
      },
      {
        "name": "Skipper",
        "line": " Just smile and wave, boys. Smile and wave. Kowalski, progress report!"
      },
      {
        "name": "Kowalski",
        "line": " We're only 500 feet from the main sewer line."
      },
      {
        "name": "Skipper",
        "line": " And the bad news?"
      },
      {
        "name": "Kowalski",
        "line": " We've broken our last shovel. (shows a broken spoon)"
      },
      {
        "name": "Skipper",
        "line": " Right... (turns to his weapon specialist Rico) Rico, you're on litter patrol. We need shovels. And find more Popsicle sticks. We don't want to risk another cave-in. (Rico jumps in the pool)"
      },
      {
        "name": "Private",
        "line": " And me, Skipper?"
      },
      {
        "name": "Skipper",
        "line": " I want you to look cute and cuddly, Private. Today we're gonna blow this dump."
      },
      {
        "name": "Marty",
        "line": " Yeah! You don't see that on Animal Planet! Ha-ha. (mesmerized kids are hauled away by disgusted and confused parents) Well, show's over, folks. Thanks for coming. I hope you thought it was fresh. I'll be here all week. In fact, I'll be here for my whole life. 365 days a year, including Christmas, Hanukkah, Halloween, Kwanzaa. Please don't forget to never spay or neuter your pets. (sips on his beverage) And tip your cabbie, because he's broke."
      },
      {
        "name": "Skipper",
        "line": " You, quadruped. (In German) Sprechen sie Englisch?"
      },
      {
        "name": "Marty",
        "line": " I sprechen."
      },
      {
        "name": "Skipper",
        "line": " What continent is this?"
      },
      {
        "name": "Marty",
        "line": " Manhattan."
      },
      {
        "name": "Skipper",
        "line": " Hoover Dam! We're still in New York. Abort. Dive! Dive! Dive!"
      },
      {
        "name": "Marty",
        "line": " Hey, hey! You in the tux! Wait a minute! What are you guys doing?"
      },
      {
        "name": "Private",
        "line": " We're digging to Antarctica. (receives a slap from Skipper to silence him)"
      },
      {
        "name": "Marty",
        "line": " Ant-who-tica?"
      },
      {
        "name": "Skipper",
        "line": " Can you keep a secret, my monochromatic friend? (Marty nods and leans down to listen a little secret without the others noticing) Do you ever see any penguins running free around New York City? (he shakes his head for no) Of course not. We don't belong here. It's just not natural. This is all some kind of whacked-out conspiracy. We're going to the wide-open spaces of Antarctica. To the wild! (the four high five each other as Skipper slaps Private again.)"
      },
      {
        "name": "Marty",
        "line": " The wild? You could actually go there? That sounds great. (before he can thank them, the four have already gone down the hole) Hey, hold up! Where is this place? (Muffled) Tell me where it is! (Skipper alone emerges from the hole pushing his face)"
      },
      {
        "name": "Skipper",
        "line": " You didn't see anything... Right?"
      },
      {
        "name": "Marty",
        "line": " Yes, sir! Oh! Uh, I'm sorry. No, sir. (Skipper dives back into the hole and seals the hole entrance with Marty's cup)"
      },
      {
        "name": "Announcer",
        "line": " For his final appearance of the day, the king of New York City. Alex the Lion!"
      },
      {
        "name": "Alex",
        "line": " Roar!!!"
      },
      {
        "name": "Alex",
        "line": " Thank you. Thank you very much. You guys are great. You're a great crowd. Give yourselves a hand, huh. Thank you. (underpants flies in his face) Oh. Thank you. Oh! Well. Thank you. Oh, that's too kind. Too kind. (sling shoots the I Heart NY undies which land on Melman's nose)"
      },
      {
        "name": "Melman",
        "line": " Aah! Underpants!!"
      },
      {
        "name": "Alex",
        "line": " (humans leave the zoo) Everybody get home safe. Hey! Check out my Website. Twenty-four hour Alex Cam. Watch me sleep."
      },
      {
        "name": "Scene 2",
        "line": " Marty's 10th birthday begins"
      },
      {
        "name": "Gloria",
        "line": " This is the life. (Gloria receives a wide variety of fruit for her meal while drying in a big towel and polish nails for a massage.)"
      },
      {
        "name": "Melman",
        "line": " (Melman is still getting medical treatment) That's the spot. (a chef reveals a tray full of medications and vitamins to make him feel better) Oh! I'm in heaven."
      },
      {
        "name": "Gloria",
        "line": " Ooh, it's Marty's birthday!"
      },
      {
        "name": "Alex",
        "line": " Just rip it open. Come on!"
      },
      {
        "name": "Marty",
        "line": " What is it? What is it?"
      },
      {
        "name": "Gloria",
        "line": " Come on. Open it up. What you get? What you get? What you get?"
      },
      {
        "name": "Marty",
        "line": " Yeah! A thermometer. Thanks. I love it, Melman. I love it. (puts it in his mouth with style)"
      },
      {
        "name": "Melman",
        "line": " Yeah, I wanted to give you something personal. You know, that was my first rectal thermometer."
      },
      {
        "name": "Marty",
        "line": " Mother-! (Marty proceeds to gag at the thought and spits out the thermometer while licking his tongue)"
      },
      {
        "name": "Melman",
        "line": " I'll miss that bad boy."
      },
      {
        "name": "Alex",
        "line": " Okay. Get the cake. Melman, come on."
      },
      {
        "name": "Everyone but Marty",
        "line": " ♪ Hmmmm… ♪"
      },
      {
        "name": "Alex",
        "line": " Happy"
      },
      {
        "name": "Gloria",
        "line": " birth-"
      },
      {
        "name": "Melman",
        "line": " day"
      },
      {
        "name": "Alex",
        "line": " to"
      },
      {
        "name": "Gloria",
        "line": " you."
      },
      {
        "name": "Alex",
        "line": " You"
      },
      {
        "name": "Melman",
        "line": " live"
      },
      {
        "name": "Gloria",
        "line": " in"
      },
      {
        "name": "Alex",
        "line": " a zoo."
      },
      {
        "name": "Gloria",
        "line": " You"
      },
      {
        "name": "Melman",
        "line": " look"
      },
      {
        "name": "Alex",
        "line": " like a"
      },
      {
        "name": "Melman",
        "line": " mon-"
      },
      {
        "name": "Alex",
        "line": " key."
      },
      {
        "name": "Melman",
        "line": " (holds long note) Aaaaand"
      },
      {
        "name": "Alex",
        "line": " you smell"
      },
      {
        "name": "Gloria",
        "line": " like  "
      },
      {
        "name": "Melman",
        "line": " one"
      },
      {
        "name": "Everyone",
        "line": " too!"
      },
      {
        "name": "Mason",
        "line": " (spits) I say!"
      },
      {
        "name": "Phil",
        "line": " (Smells his armpits and faints)"
      },
      {
        "name": "Marty",
        "line": " Aw, well, now, you guys are just embarrassing me. And yourselves."
      },
      {
        "name": "Alex",
        "line": " What are you talking about? We worked on that all week."
      },
      {
        "name": "Gloria",
        "line": " Let's go. Let's make a wish, babycakes."
      },
      {
        "name": "Alex",
        "line": " Come on. What'd you wish for?"
      },
      {
        "name": "Marty",
        "line": " Nope. Can't tell you that."
      },
      {
        "name": "Alex",
        "line": " Come on. Tell."
      },
      {
        "name": "Marty",
        "line": " No, siree. I'm telling you, it's bad luck. You want some bad luck, I'll blab it out. But if you want to be safe, I'll keep my mouth shut."
      },
      {
        "name": "Gloria",
        "line": " Oh, for crying out loud, Marty. Would you just tell us? I mean, really. What could happen?"
      },
      {
        "name": "Marty",
        "line": " OK. I wished I could go to the wild!"
      },
      {
        "name": "Alex",
        "line": " The wild?! Whoa! (Alex falls over)"
      },
      {
        "name": "Marty",
        "line": " I told you it was bad luck."
      },
      {
        "name": "Alex",
        "line": " The wild? Are you nuts? That is the worst idea I've ever heard."
      },
      {
        "name": "Melman",
        "line": " (coughs) It's unsanitary."
      },
      {
        "name": "Marty",
        "line": " The penguins are going. So why can't I?"
      },
      {
        "name": "Alex",
        "line": " The penguins are psychotic."
      },
      {
        "name": "Marty",
        "line": " Come on. Just imagine going back to nature. Back to your roots. Clean air, wide-open spaces!"
      },
      {
        "name": "Gloria",
        "line": " Well, I hear they have wide-open spaces in Connecticut."
      },
      {
        "name": "Marty",
        "line": " Connecticut?"
      },
      {
        "name": "Melman",
        "line": " Yeah. What you got to do is you got to go over to Grand Central. Then you got to take the Metro-North train... north?"
      },
      {
        "name": "Marty",
        "line": " So one could take the train? Just hypothetically."
      },
      {
        "name": "Alex",
        "line": " Marty, come on. What would Connecticut have to offer us?"
      },
      {
        "name": "Melman",
        "line": " Lyme disease."
      },
      {
        "name": "Alex",
        "line": " Thank you, Melman."
      },
      {
        "name": "Marty",
        "line": " No, no, really, really, I just want..."
      },
      {
        "name": "Alex",
        "line": " There's certainly none of this in the wild. Plus, this is a highly refined type of food thing that you do not find in the wild."
      },
      {
        "name": "Marty",
        "line": " You ever thought there might be more to life than steak, Alex?"
      },
      {
        "name": "Alex",
        "line": " He didn't mean that, baby. No, no, no."
      },
      {
        "name": "Marty",
        "line": " Doesn't it bother you guys that you don't know anything about life outside this zoo?"
      },
      {
        "name": "Melman",
        "line": " Nuh-uh."
      },
      {
        "name": "Gloria",
        "line": " Mmm-mm."
      },
      {
        "name": "Melman",
        "line": " Nope."
      },
      {
        "name": "Alex",
        "line": " Well. I mean, come on. That's just one subject. You got a little, uh, you got a little schmutz right there on your... (eats his steak)"
      },
      {
        "name": "Marty",
        "line": " (Sighs and uses a napkin to clean his mouth) Thanks, guys. Thanks for the party. It was great. Really. (Alex spits a bone and drops it as Marty uses the treadmill)"
      },
      {
        "name": "Melman",
        "line": " What's eating him?"
      },
      {
        "name": "Gloria",
        "line": " (whispered) Maybe you should talk to him, Alex. You know, go over there and give him a little pep talk."
      },
      {
        "name": "Alex",
        "line": " Hey, I already gave him a snow globe. I can't top that."
      },
      {
        "name": "Gloria",
        "line": " (Sighs) Alex…"
      },
      {
        "name": "Melman",
        "line": " I can see where this is going. (Yawns) It is getting late. I guess I'm gonna... (snores)"
      },
      {
        "name": "Gloria",
        "line": " (whispered) Come on. He's your best friend."
      },
      {
        "name": "Alex",
        "line": " All right, all right. OK."
      },
      {
        "name": "Gloria",
        "line": " Night, Marty. (backflips into her pool)"
      },
      {
        "name": "Marty",
        "line": " Night, Glo."
      },
      {
        "name": "Alex",
        "line": " Ahhh… What a day. I mean, just really, really I mean I tell you, it just doesn't get any better than this, you know? Ooh! It just did. Even the star's out. Not going to find a star like that in the wild."
      },
      {
        "name": "Marty",
        "line": " Helicopter. (it flies away)"
      },
      {
        "name": "Alex",
        "line": " Marty. Buddy. Listen. Everybody has days when they think the grass might be greener somewhere else."
      },
      {
        "name": "Marty",
        "line": " Alex. Look at me. I'm 10 years old. My life is half over. And I don't even know if I'm black with white stripes... or white with black stripes."
      },
      {
        "name": "Alex",
        "line": " Marty. I'm thinking of a song."
      },
      {
        "name": "Marty",
        "line": " Alex. Please. Not now."
      },
      {
        "name": "Alex",
        "line": " Oh, yes. It's a wonderful song. I think you're familiar with it. ♪ Da da da da da! Da da da da da! Da da da da da! Da! ♪"
      },
      {
        "name": "Marty",
        "line": " Oh, no. Oh, no, you don't. No, no, no. I'm not listening! Lalalalalalalalalalala!"
      },
      {
        "name": "Alex",
        "line": " ♪ Start spreadin' the news ♪"
      },
      {
        "name": "Marty",
        "line": " I don't know you!"
      },
      {
        "name": "Alex",
        "line": " ♪ I'm leaving today! We are a great big part of it ♪"
      },
      {
        "name": "Marty",
        "line": " (Laughs) He's funny. Who is that?"
      },
      {
        "name": "Alex",
        "line": " Come on. You know you know the words. Two little words."
      },
      {
        "name": "Marty",
        "line": " New York."
      },
      {
        "name": "Both",
        "line": " ♪ New York! ♪"
      },
      {
        "name": "Bird",
        "line": " Shut up, shut up, shut up!! Hey, I'm sleeping here! We're not all nocturnal, you know!!"
      },
      {
        "name": "Marty",
        "line": " Hey, I'll knock your \"turnal\" right off, pal."
      },
      {
        "name": "Snake",
        "line": " Yeah, you and what army, stripes?"
      },
      {
        "name": "Alex",
        "line": " You mess with him, you mess with me, Howard!"
      },
      {
        "name": "Marty",
        "line": " Ah ha ha ha!"
      },
      {
        "name": "Unknown Animal",
        "line": " You're a bigmouth lion!"
      },
      {
        "name": "Alex",
        "line": " See? Mr. Grumpy Stripes! We make a great team, the two of us."
      },
      {
        "name": "Marty",
        "line": " We sure do. No doubt about it."
      },
      {
        "name": "Alex",
        "line": " So, what are you going to do? Just go running off to the wild by yourself?"
      },
      {
        "name": "Marty",
        "line": " No."
      },
      {
        "name": "Alex",
        "line": " Good."
      },
      {
        "name": "Marty",
        "line": " You and me. Let's go."
      },
      {
        "name": "Alex",
        "line": " What?"
      },
      {
        "name": "Marty",
        "line": " The wild. Come on. You and me together. It's a straight shot down Fifth Avenue to Grand Central. We'll grab a train, we'll head north. We can be back by morning. No one will ever know."
      },
      {
        "name": "Alex",
        "line": " (Chuckles) You're joking. Right?"
      },
      {
        "name": "Marty",
        "line": " (Chuckles) Yeah. I'm joking. Of course I'm joking. Give me a break. Like we're going to get a train."
      },
      {
        "name": "Alex",
        "line": " (Chuckles) Oh. (Sighs) Don't do that. You really had me worried there."
      },
      {
        "name": "Marty",
        "line": " (Yawning) Oh, well. I guess I'll hit the sack."
      },
      {
        "name": "Alex",
        "line": " Yeah, me too. I'll need to rest my voice for tomorrow. It's Seniors' Day, you know. Have to roar extra loud. Give them a little jolt! You know what I’m talking about?"
      },
      {
        "name": "Marty",
        "line": " Good night, Ally Al."
      },
      {
        "name": "Alex",
        "line": " (Sighs and claps twice to turn on the red light and hears a bird) Oh. They forgot to turn off the ambiance again!"
      },
      {
        "name": "Marty",
        "line": " Don't worry. It's cool. You know, I got it. (kicks the speaker, shooing the bird away as it now turns to the sounds of the Police)"
      },
      {
        "name": "Alex",
        "line": " Ah. Much better. (2 hours later) Come on, now, baby. My little filet. My little filet mignon with a little fat around the edges. I like that. I like a little fat on my steak. My sweet, juicy steak. You are a rare delicacy."
      },
      {
        "name": "Melman",
        "line": " Alex. Alex. Alex. Alex. Alex!"
      },
      {
        "name": "Alex",
        "line": " What? What?"
      },
      {
        "name": "Melman",
        "line": " You suck your thumb?"
      },
      {
        "name": "Alex",
        "line": " (sighs) What is it, Melman?"
      },
      {
        "name": "Melman",
        "line": " Okay, okay. (Sighs) You know how I have that bladder infection and I have to get up every two hours? Well, I got up to pee, um, and looked over at Marty's pen, which, you know, I usually don't do. I don't know why, but I did. And this time I looked over and..."
      },
      {
        "name": "Alex",
        "line": " What, Melman? What's going on?"
      },
      {
        "name": "Melman",
        "line": " It's Marty. He's gone."
      },
      {
        "name": "Alex",
        "line": " Gone?! (Hits in his head) Agh! What do you mean, \"gone\"?"
      },
      {
        "name": "Melman",
        "line": " How long has he been working on this?? Marty! Marty!!"
      },
      {
        "name": "Gloria",
        "line": " He wouldn't fit down there."
      },
      {
        "name": "Alex",
        "line": " (tries to look for Marty in the haystacks, noticing that he isn't there) Marty? Marty?! Marty! Marty!!"
      },
      {
        "name": "Gloria",
        "line": " This doesn't make any sense. Where would he go?"
      },
      {
        "name": "Alex",
        "line": " (in terror) Connecticut!!"
      },
      {
        "name": "Gloria",
        "line": " He wouldn't."
      },
      {
        "name": "Melman",
        "line": " Oh, no! What are we going to do? We gotta-- we gotta-- I mean, we gotta-- we gotta-- we gotta call somebody!"
      },
      {
        "name": "Alex",
        "line": " (Gasps as he calls 911 on the phone) Hello?! Get me Missing Animals!! And hurry! We've got a lost zebra probably on the way to Connecticut by now, and we're gonna need...!!"
      },
      {
        "name": "Police",
        "line": " (only hears Alex roaring) Hello? Hello?"
      },
      {
        "name": "Alex",
        "line": " Wait a second. We can't call the people."
      },
      {
        "name": "Police",
        "line": " What the...?!"
      },
      {
        "name": "Alex",
        "line": " (takes the phone and throws it out) They'll be really mad! It'll get Marty transferred for good. You don't bite the hand that feeds you."
      },
      {
        "name": "Gloria",
        "line": " Mm-hmm. I know that's right."
      },
      {
        "name": "Alex",
        "line": " We got to go after him."
      },
      {
        "name": "Melman",
        "line": " Go after him?"
      },
      {
        "name": "Alex",
        "line": " He's not thinking straight. We gotta stop him from making the biggest mistake of his life. He's probably out there lost and cold, confused. (sadly sighs) Poor little guy."
      },
      {
        "name": "[The Bee Gees",
        "line": " Stayin’ Alive]"
      },
      {
        "name": "Gloria",
        "line": " (bursts through the zoo wall) Melman, come on!"
      },
      {
        "name": "Melman",
        "line": " You know, maybe one of us should wait here in case he comes back."
      },
      {
        "name": "Gloria",
        "line": " Oh, no. Not now. This is an intervention, Melman. We all got to go."
      },
      {
        "name": "Alex",
        "line": " What's the fastest way to Grand Central?!"
      },
      {
        "name": "Melman",
        "line": " Ooh! You should take Lexington."
      },
      {
        "name": "Gloria",
        "line": " Melman!!"
      },
      {
        "name": "Melman",
        "line": " OK. \"We.\" We should take Lexington."
      },
      {
        "name": "Alex",
        "line": " What about Park?"
      },
      {
        "name": "Melman",
        "line": " No, Park goes 2 ways. You can't time the lights."
      },
      {
        "name": "Mason",
        "line": " I heard Tom Wolfe is speaking at Lincoln Center. (Phil does sign language) Well, of course we're going to throw poo at him."
      },
      {
        "name": "Alex",
        "line": " I knew we should've taken Park. Are you sure this is the fastest way to Grand Central Station?"
      },
      {
        "name": "Gloria",
        "line": " I don't know! That's what Melman said."
      },
      {
        "name": "Melman",
        "line": " Hey. Hey, you, guys. That room has some nifty little sinks you can wash up in and look! (sticks out tongue with a blue peppermint) Free mints!"
      },
      {
        "name": "Alex",
        "line": " This isn't a field trip, Melman! This is an urgent mission to save Marty from throwing his life away! Now, where's the train?"
      },
      {
        "name": "Melman",
        "line": " Ah, Here it comes. (Screaming as the train hits his head as the warning horn blares)"
      },
      {
        "name": "Gloria",
        "line": " What did Marty say to you? I asked you to talk to him."
      },
      {
        "name": "Alex",
        "line": " I did! I did! I don't understand! He said, \"Let's go.\" And I said, \"What are you, crazy?\" And he says, \"I'm ten years old.\" And he is black with white stripes, and so then we sang and... (people screaming and running away thinking they're getting attacked)"
      },
      {
        "name": "Police Horse",
        "line": " What you got to do is go straight back down West 42nd."
      },
      {
        "name": "Marty",
        "line": " Uh-huh."
      },
      {
        "name": "Police Horse",
        "line": " It's on your left after Vanderbilt."
      },
      {
        "name": "Marty",
        "line": " Okay."
      },
      {
        "name": "Police Horse",
        "line": " If you hit the Chrysler Building, you've gone too far."
      },
      {
        "name": "Marty",
        "line": " Uh-huh. Thanks a lot, officer."
      },
      {
        "name": "Police Horse",
        "line": " Hey! Wait for the light! Freak."
      },
      {
        "name": "Police radio",
        "line": " Did you say \"zebra\"?"
      },
      {
        "name": "Police Officer",
        "line": " Yeah, yeah, that's right. A zebra. Right in front of me. Can I shoot it?"
      },
      {
        "name": "Police radio",
        "line": " Negative."
      },
      {
        "name": "Police Officer",
        "line": " Then I'm going to need some backup."
      },
      {
        "name": "Alex",
        "line": " (reads a frightened man's sports paper then roars) Aw! Knicks lost again."
      },
      {
        "name": "Melman",
        "line": " What are you going to do?"
      },
      {
        "name": "Conductor",
        "line": " Grand Central Station."
      },
      {
        "name": "Alex",
        "line": " Did that just say \"Grand Central Station\" or \"my aunt's constipation\"?"
      },
      {
        "name": "Gloria",
        "line": " This is it."
      },
      {
        "name": "Marty",
        "line": " Grand Central Station. It's grand and it's central."
      },
      {
        "name": "Melman",
        "line": " Ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow! (squeezes his head out of the train doors, hits the ceiling sign and destroys a man's drum set)"
      },
      {
        "name": "Alex",
        "line": " (more people screaming and running away) Move aside. We have an emergency here. This is an emergency situation. No need. Hey, hey. Just chill out. It's not that big of an emergency. Hey! Hey! Would you-? Hey! Aah! Ooh!"
      },
      {
        "name": "Nana",
        "line": " (Hitting Alex with her handbag, kicks his crotch, and sprays in his eyes) Upstairs, downstairs! How do you like that?! Yah!"
      },
      {
        "name": "Alex",
        "line": " Ooh! Lady, what is wrong with you?! (gets hit by her bag twice) Ow! Get a grip on yourselves, people!"
      },
      {
        "name": "Nana",
        "line": " (notices that lion can talk) You're a bad kitty!"
      },
      {
        "name": "Announcer",
        "line": " The next train to Connecticut has been…"
      },
      {
        "name": "Marty",
        "line": " (angrily) Dagnabbit! I missed the express! (calms himself down) Looks like I’m gonna have to take the Stamford local. Aah!"
      },
      {
        "name": "Alex",
        "line": " I got him! I've got him!"
      },
      {
        "name": "Gloria",
        "line": " He's got him!"
      },
      {
        "name": "Melman",
        "line": " He's got him! He's got him! He's got..."
      },
      {
        "name": "Nana",
        "line": " I got something for you! (hits Melman with her bag)"
      },
      {
        "name": "Melman",
        "line": " Whoa, whoa, whoa, whoa! (crashes into a clock that reads 12"
      },
      {
        "name": "Marty",
        "line": " Whoa! What are you guys doing here?"
      },
      {
        "name": "Alex",
        "line": " Oh! I am so glad we found you."
      },
      {
        "name": "Gloria",
        "line": " We were so... worried about you."
      },
      {
        "name": "Marty",
        "line": " Don't worry, I'm fine, I'm fine. Look at me. I'm fine."
      },
      {
        "name": "Alex",
        "line": " You're fine? Oh, he's fine. Oh, great. Hey, you hear that? Marty's fine. Ah. That's good to know. 'Cause I was just wondering, uh... (now becomes desperate, disappointed and frustrated) HOW COULD YOU DO THIS TO US, MARTY?!?! I THOUGHT WE WERE YOUR FRIENDS!!!"
      },
      {
        "name": "Marty",
        "line": " What's the big deal?! I was coming back in the morning!!!"
      },
      {
        "name": "Alex",
        "line": " Don't you ever do this again!! Do you hear me?!"
      },
      {
        "name": "Gloria",
        "line": " Do you hear him?!"
      },
      {
        "name": "Melman",
        "line": " Guys? We're running out of time."
      },
      {
        "name": "Gloria",
        "line": " Oh, Melman, you broke their clock?!"
      },
      {
        "name": "Alex",
        "line": " Do you even realize what you've put us through?! Don't you ever do this again! Don't you ever, ever do this again!!"
      },
      {
        "name": "Gloria",
        "line": " Don't--Come here! (grunting and panting as she tries to remove the broken clock off Melman's head until the police came to stop them while Skipper and his agents are reading a newspaper)"
      },
      {
        "name": "Skipper",
        "line": " We've been ratted out, boys. (they raise their arms)"
      },
      {
        "name": "Police",
        "line": " Hold your fire! (points guns at the animals as firefighters use their hoses and Nana also came with a drummer)"
      },
      {
        "name": "Skipper",
        "line": " Cute and cuddly, boys. Cute and cuddly."
      },
      {
        "name": "Mason",
        "line": " (gets caught by the police with Phil) If you have any poo, fling it now."
      },
      {
        "name": "Marty",
        "line": " (Whispering) It's the Man. (Loudly) Good evening, officers!"
      },
      {
        "name": "Alex",
        "line": " No. No. Nope. You don't talk now. OK? You're not so good with the \"putting the words together and they’re coming out good\" thing. You keep it \"shh\"! (turns to the people) Hey! How you doing? Yeah. You know what? Everything's cool. We just, uh, had a little situation here. (The Police push an Animal Control, but he's frightened of Alex, so the Police use their shields to block the sacredly man's path) Little internal situation. Actually, my friend just went a little crazy. It happens to everybody. The city gets to us all. Just went a little cuckoo in the head."
      },
      {
        "name": "Marty",
        "line": " Hey! Don't be calling me cuckoo in the head."
      },
      {
        "name": "Alex",
        "line": " Just shush! I will handle this. Ooh!"
      },
      {
        "name": "Nana",
        "line": " (kicks Alex in between the legs) Oh, I got him!"
      },
      {
        "name": "Police",
        "line": " Go, go, go! (pulls Nana away) Right here, please."
      },
      {
        "name": "Alex",
        "line": " Oh! Would you give a guy a break? Aw! We’re just gonna take my little friend here home and... uh, forget this ever happened. All right? No harm, no foul, right? (policemen and animal control feel shocked) Oh, no, no, no. Hey, it's cool. It's me, Alex the lion. From the zoo. Rrrr! (roars, scaring the people) Rrrr! What's the matter with them? (gets shot in the butt by a purple tranquilizer dart) Ow! Ow… (Starts to faint) Wow! Whoo! I feel really, really weird. Hey! Aw. I love you guys. (in slow motion) I love you so much..."
      },
      {
        "name": "[Sammy Davis Jr.",
        "line": " The Candy Man plays in Alex's dream]"
      },
      {
        "name": "News Reporter",
        "line": " Last night's dramatic incident in Grand Central is an example of what animal rights wackos have been shouting for years"
      },
      {
        "name": "Alex",
        "line": " (sticks out his hand weakly) Hey. Little help?"
      },
      {
        "name": "Guard",
        "line": " (audience runs away) He's awake! He's awake, aah! (shoots more tranquilizer darts with different colors, the blue one lands in the middle of his palm revealing it to the viewers)"
      },
      {
        "name": "Woman",
        "line": " Do something!"
      },
      {
        "name": "Alex",
        "line": " Oh, man..."
      },
      {
        "name": "Alex",
        "line": " (his eyes glow in the dark) Ugh… Oh, my head. (Bumps his head) Oh! Ah! What the...? Wait. Where...? What...? I'm in a box! Oh, no. No, no! Not the box. Oh, no, they can't transfer me. Not me! (Whimpering) Oh, I can't breathe. I can't breathe. Darkness creeping in. I can't breathe. I can't breathe. Walls closing in around me. So alone. So alone."
      },
      {
        "name": "Marty",
        "line": " (his eyes open) Alex! Alex, are you there?"
      },
      {
        "name": "Alex",
        "line": " Marty?"
      },
      {
        "name": "Marty",
        "line": " Yeah! Talk to me, buddy."
      },
      {
        "name": "Alex",
        "line": " Oh, Marty! You're here!"
      },
      {
        "name": "Marty",
        "line": " What's going on? Are you OK?"
      },
      {
        "name": "Alex",
        "line": " This doesn't look good, Marty."
      },
      {
        "name": "Gloria",
        "line": " (her eyes open) Alex? Marty, is that you?"
      },
      {
        "name": "Marty",
        "line": " Gloria!"
      },
      {
        "name": "Alex",
        "line": " You're here too!"
      },
      {
        "name": "Marty",
        "line": " I am loving the sound of your voice!"
      },
      {
        "name": "Gloria",
        "line": " What is going on?"
      },
      {
        "name": "Alex",
        "line": " We're all in crates."
      },
      {
        "name": "Gloria",
        "line": " Oh, no! Wha...?"
      },
      {
        "name": "Melman",
        "line": " (opens his eyes) Oh… Sleeping just knocks me out."
      },
      {
        "name": "Gloria",
        "line": " Melman!"
      },
      {
        "name": "Alex",
        "line": " Melman!"
      },
      {
        "name": "Marty",
        "line": " Is that Melman?"
      },
      {
        "name": "Gloria",
        "line": " Are you OK?"
      },
      {
        "name": "Melman",
        "line": " Yeah. No, I'm fine. (Yawning) I often doze off while I'm getting an MRI."
      },
      {
        "name": "Alex",
        "line": " Melman, you're not getting an MRI."
      },
      {
        "name": "Melman",
        "line": " CAT scan?"
      },
      {
        "name": "Alex",
        "line": " No! No CAT scan. It's a transfer. It's a zoo transfer!"
      },
      {
        "name": "Melman",
        "line": " Zoo transfer?! Oh, no. No, no, I can't be transferred. I have an appointment with Dr. Goldberg at 5"
      },
      {
        "name": "Gloria",
        "line": " Melman. Melman! Calm down, Melman. Relax."
      },
      {
        "name": "Marty",
        "line": " Melman. Calm down, Melman."
      },
      {
        "name": "Melman",
        "line": " There are prescriptions that have to be filled. No other zoo could afford my medicine care! And I am not going HMO!"
      },
      {
        "name": "Marty",
        "line": " Take it easy, Melman. It's gonna be OK. We are going to be okizay."
      },
      {
        "name": "Alex",
        "line": " No, Marty. We're not going to be okizay. Now because of you, we're ruined!"
      },
      {
        "name": "Marty",
        "line": " Because of me? I fail to see how this is my fault."
      },
      {
        "name": "Gloria",
        "line": " You're kidding, right, Marty?"
      },
      {
        "name": "Alex",
        "line": " You! You ticked off the people. You bit the hand, Marty. You bit the hand. (mimicking) \"I don't know who I am. I don't know who I am. I got to go find myself in the wild!\" Oh, please."
      },
      {
        "name": "Marty",
        "line": " Hey, hey. I did not ask you to come after me, did I?"
      },
      {
        "name": "Melman",
        "line": " He does have a point."
      },
      {
        "name": "Alex",
        "line": " What?"
      },
      {
        "name": "Melman",
        "line": " I did say we should stay at the zoo, but you guys--"
      },
      {
        "name": "Alex",
        "line": " (cuts him off, as the view changes to outside of the boxes) Melman, just shut it! You’re the one who suggested this whole idea to him in the first place."
      },
      {
        "name": "Gloria",
        "line": " Alex, leave Melman out of this, please."
      },
      {
        "name": "Melman",
        "line": " Thank you, Gloria. Besides, Alex, it's not my fault that we were transferred."
      },
      {
        "name": "Gloria",
        "line": " Melman, shut it. Does anybody feel nauseous?"
      },
      {
        "name": "Melman",
        "line": " I feel nauseous."
      },
      {
        "name": "Alex",
        "line": " Melman, you always feel nauseous."
      },
      {
        "name": "Skipper",
        "line": " Progress report."
      },
      {
        "name": "Kowalski",
        "line": " It's an older code, Skipper. I can't make it out."
      },
      {
        "name": "Skipper",
        "line": " Hmm... You, higher mammal."
      },
      {
        "name": "Mason",
        "line": " Hmm?"
      },
      {
        "name": "Skipper",
        "line": " Can you read?"
      },
      {
        "name": "Mason",
        "line": " No. Phil can read, though. Phil! (Phil gets up from a pile of cans as Kowalski taps to the yellow paper quickly as Phil is making a sign language of what does it mean) Hmm... Ship to Kenya Wildlife Preserve, Africa!"
      },
      {
        "name": "Skipper",
        "line": " Africa? That ain't going to fly. Rico!"
      },
      {
        "name": "Gloria",
        "line": " Guys!"
      },
      {
        "name": "Alex",
        "line": " I was the star in the greatest city on Earth!"
      },
      {
        "name": "Gloria",
        "line": " Guys, listen."
      },
      {
        "name": "Alex",
        "line": " A king! Loved by my people!"
      },
      {
        "name": "Gloria",
        "line": " Okay look! Let's just be civil."
      },
      {
        "name": "Alex",
        "line": " And you've ruined everything!"
      },
      {
        "name": "Gloria",
        "line": " Guys, guys! Quit it up there!"
      },
      {
        "name": "Marty",
        "line": " \"Loved\"? If the people loved you, it's only because they didn't know the real you!"
      },
      {
        "name": "Gloria",
        "line": " Don’t make me come up there. I'd get the whooping on both of y'all!"
      },
      {
        "name": "Alex",
        "line": " I thought I knew the real you! Oh wait, Marty. Your black-and-white stripes, they cancel each other out. You're nothing!"
      },
      {
        "name": "Gloria",
        "line": " Let's – let's just talk about it like adults. You’re so scary!"
      },
      {
        "name": "Melman",
        "line": " Stop it, stop it, stop it!"
      },
      {
        "name": "Gloria",
        "line": " Hey! Listen. You're not helping the situation!"
      },
      {
        "name": "Skipper",
        "line": " Status."
      },
      {
        "name": "Private",
        "line": " [nervously] It's no good, Skipper. I don't know the codes."
      },
      {
        "name": "Skipper",
        "line": " [angrily] Don't give me excuses! Give me results!! Navigation. (Kowalski tries to investigate, but there's nothing) All right. Let me think. And shut him up! (Rico slaps the Captain)"
      },
      {
        "name": "Private",
        "line": " (Completes the Override code) I did it!"
      },
      {
        "name": "Skipper",
        "line": " (Alarm blaring) Let's get this tin can turned around!"
      },
      {
        "name": "Gloria",
        "line": " Oh!"
      },
      {
        "name": "Alex",
        "line": " Guys? Oh, no. Gloria! Melman! Marty!"
      },
      {
        "name": "Marty",
        "line": " Alex!"
      },
      {
        "name": "Alex",
        "line": " Marty?!"
      },
      {
        "name": "Marty",
        "line": " Alex!"
      },
      {
        "name": "Alex",
        "line": " Marty! No, wait. Come back, Marty! Don't go. (Night falls, and a wave bumps Alex's Crate as he falls into the mysterious Island that has a jungle and Alex feels scared and lonely and tries to call his friends) Marty? Melman? Gloria? Marty?! Melman?! Gloria?! Marty! Ah! Ooh! Ooh! Melman! Gloria! Ooh! Ooh! Ah! Ah! Hey, anyone! Hello!"
      },
      {
        "name": "Alex",
        "line": " Marty, Melman, Gloria. Gloria, Melman, Marty. Marty, Gelman, Gloria. Marty, Melman. Morty, Morty, Gelman. Regis. Kelly. Matt, Katie, Al."
      },
      {
        "name": "Melman",
        "line": " Hey! Whoa! Hey! Help! Whoa! Get me out of this thing. Somebody. Hello? Get me out of this thing right now! Hello? Somebody?"
      },
      {
        "name": "Alex",
        "line": " Melman!"
      },
      {
        "name": "Melman",
        "line": " Alex? Is that you?"
      },
      {
        "name": "Alex",
        "line": " Melman, I got you. Hang on! Hang on. I got you. Melman!"
      },
      {
        "name": "Melman",
        "line": " Ow…"
      },
      {
        "name": "Alex",
        "line": " I got you, buddy."
      },
      {
        "name": "Melman",
        "line": " Ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow, ow!"
      },
      {
        "name": "Alex",
        "line": " Wait a sec, Melman."
      },
      {
        "name": "Melman",
        "line": " Ow."
      },
      {
        "name": "Alex",
        "line": " Wait right there. (Picks up the branch) Aha!"
      },
      {
        "name": "Melman",
        "line": " Alex, what are you doing?"
      },
      {
        "name": "Alex",
        "line": " Getting you out of the box. Relax."
      },
      {
        "name": "Melman",
        "line": " Alex? (Gasps)"
      },
      {
        "name": "Alex",
        "line": " Giraffe, corner pocket! Here goes nothing!"
      },
      {
        "name": "Melman",
        "line": " Wait, wait, wait! No, come on! Wait, wait, wait, wait, wait, wait, wait, wait, wait!"
      },
      {
        "name": "Alex",
        "line": " Hold still!"
      },
      {
        "name": "Melman",
        "line": " Wait, Alex!"
      },
      {
        "name": "Alex",
        "line": " Hold still. Hold still. Hold still."
      },
      {
        "name": "Melman",
        "line": " No, no, come on. Come on!"
      },
      {
        "name": "Alex",
        "line": " Here I come! (yelling)"
      },
      {
        "name": "Melman",
        "line": " Look! Look! Look! Look! It's Gloria. It's Gloria! Oh, hey, it is Gloria. Oh, my..."
      },
      {
        "name": "Alex",
        "line": " Gloria! (Knocking the crate door, but Gloria kicks the door and Alex flies!) Whaaa!!"
      },
      {
        "name": "Melman",
        "line": " (Screaming and crash, because his long crate broke into pieces)"
      },
      {
        "name": "Alex",
        "line": " Gloria! Ooh!"
      },
      {
        "name": "Gloria",
        "line": " Alrighty, boys, fun's over."
      },
      {
        "name": "Alex",
        "line": " Gloria!"
      },
      {
        "name": "Gloria",
        "line": " Alex!"
      },
      {
        "name": "Marty",
        "line": " Whoa! (Hawaiian Five-O playing)"
      },
      {
        "name": "Gloria",
        "line": " Marty?!"
      },
      {
        "name": "Alex",
        "line": " Marty!"
      },
      {
        "name": "Marty",
        "line": " Yeah! All right! That's right! Whoo! Left! Left! Left. No, no, no, no, no, your left! Your left! Your left! Woohoo! Right here's good. I don't have anything on me. I'll have to get you later. (Dolphins chattering of saying goodbye) Ah-eheheh--to you too."
      },
      {
        "name": "Alex",
        "line": " Marty! Marty!"
      },
      {
        "name": "Marty",
        "line": " Alex!"
      },
      {
        "name": "Alex",
        "line": " (Slow motion) Marty!"
      },
      {
        "name": "Marty",
        "line": " (Slow motion) Alex!"
      },
      {
        "name": "Alex",
        "line": " Marty!"
      },
      {
        "name": "Marty",
        "line": " Al!"
      },
      {
        "name": "Alex",
        "line": " Marty!"
      },
      {
        "name": "Marty",
        "line": " Alex?"
      },
      {
        "name": "Alex",
        "line": " (Angrily) MARTY!!!!"
      },
      {
        "name": "Marty",
        "line": " Oh, sugar, honey, iced tea!"
      },
      {
        "name": "Alex",
        "line": " Marty!!"
      },
      {
        "name": "Marty",
        "line": " Hey! Hold up! Hold up! Whoa! Whoa! Whoa! Whoa!"
      },
      {
        "name": "Alex",
        "line": " I'm going to kill you! You come here! Don't run away from me!"
      },
      {
        "name": "Marty",
        "line": " Whoa, wait! Wait, wait! Calm down! Calm down!"
      },
      {
        "name": "Gloria",
        "line": " Marty!"
      },
      {
        "name": "Alex",
        "line": " If you keep running, I'm going to just kill you more!"
      },
      {
        "name": "Melman",
        "line": " Marty!"
      },
      {
        "name": "Gloria",
        "line": " Oh, look at us. We're all here together. Safe and sound."
      },
      {
        "name": "Melman",
        "line": " Yeah, here we are. Where exactly is \"here\"? (Everyone is surprised as they turn while they see many trees of Madagascar, but Melman knows it's...) San Diego."
      },
      {
        "name": "Gloria",
        "line": " San Diego?"
      },
      {
        "name": "Melman",
        "line": " White sandy beaches, cleverly simulated natural environment, wide-open enclosures. I'm telling you, this could be the San Diego Zoo. Complete with fake rocks. (tapping a rock) Wow, that looks real."
      },
      {
        "name": "Alex",
        "line": " San Diego? What could be worse than San Diego?"
      },
      {
        "name": "Marty",
        "line": " I don't know. This place is crackalacking! Oh, I could hang here. I could hang here."
      },
      {
        "name": "Alex",
        "line": " I’m gonna kill you, Marty!"
      },
      {
        "name": "Marty",
        "line": " Take it easy! Take it easy!"
      },
      {
        "name": "Alex",
        "line": " I’m gonna strangle you!"
      },
      {
        "name": "Marty",
        "line": " Calm down. Calm down."
      },
      {
        "name": "Alex",
        "line": " Then bury you, then dig you up and clone you and kill your clones!!"
      },
      {
        "name": "Marty",
        "line": " 20-second timeout. 20-second timeout."
      },
      {
        "name": "Alex",
        "line": " And then I'm never talking to you again!!"
      },
      {
        "name": "Gloria",
        "line": " (picks up Alex to stop him from arguing with Marty) STOP IT!! Look. We're just going to find the people, get checked in, and have this mess straightened out."
      },
      {
        "name": "Alex",
        "line": " Oh, great. This is just great. San Diego! Now I'll have to compete with Shamu and his smug little grin. I can't top that. Can't top it. I'm ruined! I'm done! I'm out of the business! It's your fault, Marty! You've ruined me!"
      },
      {
        "name": "Marty",
        "line": " Come on, Alex. Do you honestly think I intended all of this to happen? You want me to say that I'm sorry? Is that what you want? OK, I'm..."
      },
      {
        "name": "Alex",
        "line": " Shh!"
      },
      {
        "name": "Marty",
        "line": " He just shushed me."
      },
      {
        "name": "Gloria",
        "line": " Marty, you've got to be just a little bit more und--"
      },
      {
        "name": "Alex",
        "line": " (cuts her off) Shush!"
      },
      {
        "name": "Gloria",
        "line": " Don't you shush me!"
      },
      {
        "name": "Alex",
        "line": " Do you hear that? Don't you hear that? (the others realize he's trying to listen to the music as they run into the jungle, while they're hearing the music that has a similar beat to Stayin Alive by Bee Gees)"
      },
      {
        "name": "Marty",
        "line": " I hear it now."
      },
      {
        "name": "Gloria",
        "line": " Where there's music, there's people."
      },
      {
        "name": "Alex",
        "line": " We’ll go to the head honcho."
      },
      {
        "name": "Melman",
        "line": " A sidewalk would be nice."
      },
      {
        "name": "Gloria",
        "line": " Yeah, what a dump."
      },
      {
        "name": "Alex",
        "line": " They should call it the San Di-lame-o Zoo. First they tell you, \"Hey, we got this great open plan thing. Let animals run wild.\" Next thing you know, it’s flowers in your hair, everybody's hugging everybody!"
      },
      {
        "name": "Marty",
        "line": " This place kind of grows on you. This way, guys! Come on!"
      },
      {
        "name": "Alex",
        "line": " (gets hit by a branch) Ow! Ooh! (screams then cries in his hands) Aah! (his foot hits a rock) Oh, oh! Aah! (his foot pricks a thorn) Aah! What the...? (jumps through spider webs) Oh! Aah! Ew! Ew! (sputters as he tries to get the webs off himself then knocks down a tree on himself) Oh, no! Aah!!"
      },
      {
        "name": "Gloria",
        "line": " OK, let's make a good impression on the people. Smiles, everyone. Let's get it together. Is that the best you can do, Melman?"
      },
      {
        "name": "Melman",
        "line": " Oh, I'm not smiling. It's gas."
      },
      {
        "name": "Gloria",
        "line": " Okay. Well, great. Let's make gas look good."
      },
      {
        "name": "Marty",
        "line": " Wow!"
      },
      {
        "name": "Gloria",
        "line": " It's not people. It's animals."
      },
      {
        "name": "Melman",
        "line": " California animals. Dude."
      },
      {
        "name": "Marty",
        "line": " This is like a Puffy party!"
      },
      {
        "name": "King Julien",
        "line": " (singing) I like to move it, move it I like to move it, move it Ya like to"
      },
      {
        "name": "Lemurs",
        "line": " Move it!"
      },
      {
        "name": "King Julien",
        "line": " I like to move it, move it I like to move it, move it I like to move it, move it Ya like to"
      },
      {
        "name": "Lemurs",
        "line": " Move it!"
      },
      {
        "name": "King Julien",
        "line": " I like to move it, move it You like to move it, move it She like to move it, move it He like to"
      },
      {
        "name": "Lemurs",
        "line": " Move it!"
      },
      {
        "name": "King Julien",
        "line": " All girls all over the world Original King Julien 'pon yer case, man I love how all the girls that love to move their body When ya move your body, ya do Move it nice and sweet and sassy, all right"
      },
      {
        "name": "Gloria",
        "line": " What kind of zoo is this?"
      },
      {
        "name": "Melman",
        "line": " I just saw 26 blatant health code violations."
      },
      {
        "name": "Marty",
        "line": " I'm loving San Diego. This place is off the chizain."
      },
      {
        "name": "Melman",
        "line": " 27!"
      },
      {
        "name": "King Julien",
        "line": " Woman, physically fit, physically fit, physically, physically, physically fit Woman Physically fit, Physically fit..."
      },
      {
        "name": "Marty",
        "line": " We should've brought chips and dip!"
      },
      {
        "name": "Gloria",
        "line": " (looking around) Wait. Where's Alex? [pulls Marty away] What happened to him? He was right behind us. Wasn't he right behind us?"
      },
      {
        "name": "Marty",
        "line": " I don't know where he's at, but he's missing one heck of a party."
      },
      {
        "name": "Lemur",
        "line": " The foosa! The foosa! The foosa are attacking! Run for your lives! (Screaming)"
      },
      {
        "name": "Fossa",
        "line": " Foosa hungry. Fossa eat."
      },
      {
        "name": "Alex",
        "line": " Ech! I hate spiderwebs. Yeah, thanks a lot, guys. Thanks for waiting up. Really appreciate it."
      },
      {
        "name": "Alex",
        "line": " Hey. Hi. We just got in from New York, and we're looking for a supervisor. Because we've been sitting on that beach there for hours, and nobody's even bothered to show up. I don't know if things are… Yeah, I don't know how things are normally run around here...."
      },
      {
        "name": "Alex",
        "line": "...but there's been some sort of major screw-up, which is cool. If you could point us towards the administrative offices, we'll just uh...(before he can finish, he notices the spider crawling on his back)"
      },
      {
        "name": "Spider",
        "line": " Well, howdy-do."
      },
      {
        "name": "Alex",
        "line": " [screaming, then roaring in slow motion by scaring the Fossa away] Spider! Spider! Spider on my back!"
      },
      {
        "name": "King Julien",
        "line": " Maurice, did you see that?"
      },
      {
        "name": "Maurice",
        "line": " He scared the fossa away."
      },
      {
        "name": "Melman",
        "line": " Come on, Gloria. Get him."
      },
      {
        "name": "Spider",
        "line": " Get it! Get it! Get it! Get it!"
      },
      {
        "name": "Melman",
        "line": " That's it! Catch it, Gloria! Smack it! Get it, get it! Whip it! Whip it good! Where'd it go?"
      },
      {
        "name": "Mort",
        "line": " King Julien, what are they? WHAT ARE THEY?!?!"
      },
      {
        "name": "King Julien",
        "line": " They are aliens. Savage aliens from the savage future."
      },
      {
        "name": "Maurice",
        "line": " They've come to kill us. And take our women. And our precious metals."
      },
      {
        "name": "King Julien",
        "line": " Get up, Mort. Do not be near the king's feet, OK? Shh! We're hiding. Be quiet, everyone. Including me. Shh! Who's making that noise? Oh, it's me again."
      },
      {
        "name": "Melman",
        "line": " There it is! Get it! Come on, Gloria!"
      },
      {
        "name": "Alex",
        "line": " Stop it! Stop it! That's enough! Enough with the stick."
      },
      {
        "name": "Melman",
        "line": " You got it. I think you got it. I think she got it."
      },
      {
        "name": "Alex",
        "line": " Is it still on me? I hate spiders."
      },
      {
        "name": "Gloria",
        "line": " It's OK. It's gone."
      },
      {
        "name": "Mort",
        "line": " They are savages. Tonight we die. (grabs Julien's foot)"
      },
      {
        "name": "King Julien",
        "line": " The feet. I told you... I told you to... I told every... Didn't I tell him about the feet?"
      },
      {
        "name": "Maurice",
        "line": " He did tell you about the feet."
      },
      {
        "name": "Mort",
        "line": " E-he."
      },
      {
        "name": "King Julien",
        "line": " Wait. I have a plan."
      },
      {
        "name": "Maurice",
        "line": " Really?"
      },
      {
        "name": "King Julien",
        "line": " I have devised a cunning test to see whether these are savage killers."
      },
      {
        "name": "Marty",
        "line": " Hi there."
      },
      {
        "name": "Alex",
        "line": " Ahem! You let me handle it. (Whispering) Alex handles it. Marty does nothing."
      },
      {
        "name": "Alex",
        "line": " [kindly] Hi there! (Mort starts crying and bursting into tears) Oh, jeez. Oh. Oh, sorry."
      },
      {
        "name": "Melman",
        "line": " Oh, Alex, what'd you do?"
      },
      {
        "name": "Alex",
        "line": " Oh Shh! Shh! Shh! No, no, no. Stop. Stop. Shh! It's OK. It's OK. I'm just a silly... Just a silly lion. (Mort starts screaming while crying louder) Oh, jeez!"
      },
      {
        "name": "Marty",
        "line": " Aw, Alex!"
      },
      {
        "name": "Gloria",
        "line": " Oh, you poor little baby. Did that big mean lion scare you?"
      },
      {
        "name": "Mort",
        "line": " Mm-hmm…[muttering]"
      },
      {
        "name": "Gloria",
        "line": " He did? He's a big, bad old puddy tat, isn't he? Come on. Mama'll hold you. Aww, look at you."
      },
      {
        "name": "Melman",
        "line": " They are cute from a reasonable distance."
      },
      {
        "name": "Gloria",
        "line": " Aren't you the sweetest little thing. I just want to dunk him in my coffee."
      },
      {
        "name": "King Julien",
        "line": " They are just a bunch of pansies."
      },
      {
        "name": "Maurice",
        "line": " I don't know. There's still something about that one with the crazy hairdo that I find suspicious."
      },
      {
        "name": "King Julien",
        "line": " Nonsense, Maurice. Come on, everybody! Let's go and meet the pansies!"
      },
      {
        "name": "Maurice",
        "line": " Presenting your royal highness, our illustrious King Julien XIII, self-proclaimed lord of the lemurs, et cetera, et cetera. Hooray, everybody."
      },
      {
        "name": "Marty",
        "line": " He's got style."
      },
      {
        "name": "Alex",
        "line": " What is he, like, king of the guinea pigs?"
      },
      {
        "name": "Melman",
        "line": " I think it's a squirrel."
      },
      {
        "name": "King Julien",
        "line": " Welcome, giant pansies! Please feel free to bask in my glow!"
      },
      {
        "name": "Alex",
        "line": " Definitely a squirrel."
      },
      {
        "name": "Melman",
        "line": " Yep. Squirrel"
      },
      {
        "name": "King Julien",
        "line": " We thank you with enormous gratitude for chasing away the foosa."
      },
      {
        "name": "Gloria",
        "line": " The \"whossa\"?"
      },
      {
        "name": "King Julien",
        "line": " The foosa. They're always annoying us by trespassing, interrupting our parties and ripping our limbs off."
      },
      {
        "name": "Alex",
        "line": " Yeah, sounds good. Look. We're just uh, we’re just trying to find out where the people are, so if you could uh..."
      },
      {
        "name": "Maurice",
        "line": " Oh, my. What big teeth you have. Man!"
      },
      {
        "name": "King Julian",
        "line": " Shame on you, Maurice! Can you not see that you have insulted the freak?! Ha-ha. You must tell me, who the heck are you?"
      },
      {
        "name": "Alex",
        "line": " I'm Alex. The Alex. And this is Gloria, Marty and Melman."
      },
      {
        "name": "Maurice",
        "line": " And just where are you giants from, hmm?"
      },
      {
        "name": "Alex",
        "line": " We're from New York and uh we..."
      },
      {
        "name": "King Julien",
        "line": " All hail the New York giants!"
      },
      {
        "name": "Lemurs",
        "line": " New York giants! (Cheering)"
      },
      {
        "name": "Alex",
        "line": " Is there some sort of inbreeding program? Well, I say we just got to ask these bozos where the people are."
      },
      {
        "name": "King Julien",
        "line": " Excuse me. We bozos have the people, of course."
      },
      {
        "name": "Alex",
        "line": " Whoa!"
      },
      {
        "name": "Melman",
        "line": " Hey, the bozos have the people!"
      },
      {
        "name": "Alex",
        "line": " Oh, well, great. Good. Phew. Heh."
      },
      {
        "name": "King Julien",
        "line": " They're up there."
      },
      {
        "name": "King Julien",
        "line": " Don't you love the people? Not a very lively bunch, though."
      },
      {
        "name": "Alex",
        "line": " Oh. Wow. So do you have any live people?"
      },
      {
        "name": "King Julien",
        "line": " Uh… No. Uh, only dead ones."
      },
      {
        "name": "Maurice",
        "line": " I mean, if we had a lot of live people here, it wouldn't be called the wild, would it?"
      },
      {
        "name": "Marty",
        "line": " The wild?"
      },
      {
        "name": "Alex",
        "line": " Whoa. Hold up there a second, fuzzbucket. You mean, like uh, like, the \"live in a mud hut, wipe yourself with a leaf\" type wild?"
      },
      {
        "name": "King Julien",
        "line": " Who wipes? [Laughing]"
      },
      {
        "name": "Gloria",
        "line": " Oy vey."
      },
      {
        "name": "King Julien",
        "line": " Oy vey!"
      },
      {
        "name": "Maurice",
        "line": " Oy vey, everybody!"
      },
      {
        "name": "Lemurs",
        "line": " Oy vey!"
      },
      {
        "name": "Alex",
        "line": " Could you excuse me for a moment? (runs back to the shore, crying) Get me out of here! We got to get out of here!! Help!!!"
      },
      {
        "name": "Gloria",
        "line": " (catches Alex as he's about to dive in the ocean) Alex! What are you doing?!"
      },
      {
        "name": "Alex",
        "line": " I'm swimming back to New York!!"
      },
      {
        "name": "Marty",
        "line": " Yeah, baby! We are in the wild!"
      },
      {
        "name": "Alex",
        "line": " I know my chances are slim, but I have to try!"
      },
      {
        "name": "Gloria",
        "line": " You can't swim!"
      },
      {
        "name": "Alex",
        "line": " I said my chances are slim!!"
      },
      {
        "name": "Melman",
        "line": " Aah!! Nature!!! It's all over me! Get it off! I can't see! I can't see! I can see! Aah! [dunks his head in the sand]"
      },
      {
        "name": "Gloria",
        "line": " Ok, look. There's obviously just been a little mistake. I’m sure the people didn't dump us here on purpose. As soon as they realize what happened, they'll come looking for us, right?"
      },
      {
        "name": "Melman",
        "line": " [Muffled] Yeah, right."
      },
      {
        "name": "Marty",
        "line": " ♪Born free! [Babbling] I don’t know the words But we’re born free!♪♪"
      },
      {
        "name": "Gloria",
        "line": " You know something? I bet they're already on their way. (puts down Alex as he inhales)"
      }],
      "Madagascar2": [{
        "name": "Skipper",
        "line": " Well, boys, it's gonna be ice-cold sushi for breakfast. (All give a high-5!) Rico. (Rico uses the wine with foam as a toast of their victory! Meanwhile in Madagascar island...)"
      },
      {
        "name": "Melman",
        "line": " Well, since I'm doomed to die on this forsaken island, I, Melman Mankiewicz, being of sound mind and unsound body, have divided my estate equally among the three of you. Oh… Sorry, Alex."
      },
      {
        "name": "Marty",
        "line": " Hey! A latrine. Nice work, Melman. Outdoor plumbing."
      },
      {
        "name": "Alex",
        "line": " No, it's not a latrine. It's a grave! You sent Melman to his grave! Are you happy?"
      },
      {
        "name": "Marty",
        "line": " Aw, come on. This isn't the end. This is a whole new beginning. This could be the best that's ever happened to us."
      },
      {
        "name": "Alex",
        "line": " No. No. No. No. No. No. No. No. No. No. This is not the best thing that's ever happened to us!"
      },
      {
        "name": "Melman",
        "line": " Yeah! You abused the power of the birthday wish and brought this bad luck on all of us. So why'd you tell your wish? You're not supposed to do that."
      },
      {
        "name": "Marty",
        "line": " Wait a minute. I didn't wanna tell you. Remember? You guys made me tell you."
      },
      {
        "name": "Melman",
        "line": " Oh, OK."
      },
      {
        "name": "Marty",
        "line": " Besides, this isn't bad luck. This is good luck. Look around. There's no fences, no schedule. This place is beautiful. Baby, we were born…"
      },
      {
        "name": "Alex",
        "line": " OK. OK. I've had enough of this. This is your side of the island, and this is our side of the island. That is the bad side, where you can prance and skip like a magical pixie horse and do whatever the heck you wanna do all day long. And this, this is the good side for those who love New York and care about going home."
      },
      {
        "name": "Marty",
        "line": " Come on."
      },
      {
        "name": "Alex",
        "line": " No, no. Back! Back! Back! Back!"
      },
      {
        "name": "Gloria",
        "line": " You know what? This isn't good."
      },
      {
        "name": "Marty",
        "line": " OK! You all have your side, and I'll have mine. And if you need me, I'll be over here, on the fun side of the island, having a good old time! A gay old time! A yay old time! A Yabba-dabba-doo old time!"
      },
      {
        "name": "Alex",
        "line": " That’s not the fun side, this is the fun side! This is the fun side, where we'll have a great time surviving until we go home. Whoo! I love this side. This side's the best. That side stinks! You're on the Jersey side of this cesspool!!"
      },
      {
        "name": "Marty",
        "line": " Wilma!!!"
      },
      {
        "name": "Melman",
        "line": " Well, now what do we do?"
      },
      {
        "name": "Alex",
        "line": " Don't worry, Melman. I have a plan to get us rescued."
      },
      {
        "name": "Alex",
        "line": " Can't wait to see the look on Marty's face when he sees this. Ooh. Just look at him. He's helpless without us. Shut up, Spalding!"
      },
      {
        "name": "Gloria",
        "line": " I've been standing here for hours, man. How long do I have to pose like this?"
      },
      {
        "name": "Alex",
        "line": " She is finito. I defy any rescue boat within a million miles to miss this baby. When the moment is right, we will ignite the beacon of liberty and be rescued from this awful nightmare! What do you think? Pretty cool, huh? How's the liberty fire going, Melman?"
      },
      {
        "name": "Melman",
        "line": " Great. Idiot."
      },
      {
        "name": "Alex",
        "line": " I heard that!"
      },
      {
        "name": "Melman",
        "line": " Ugh. Why can't we just borrow some of Marty's fire?"
      },
      {
        "name": "Alex",
        "line": " That's wildfire! We're not using wildfire on the Lady Liberty. Now, rub, Melman."
      },
      {
        "name": "Melman",
        "line": " I've been doing... I can't. I can't. I can't do it. I ju... I can't do it! Fire. Fire. Fire! Fire! Ha-ha-ha-ha-ha-ha-ha-ha!! Ah. Oh, my... Ah! Oh! Fire!!"
      },
      {
        "name": "Alex",
        "line": " Not yet! No, no! No!"
      },
      {
        "name": "Melman",
        "line": " Fire!"
      },
      {
        "name": "Alex",
        "line": " No, no! No! Not yet!"
      },
      {
        "name": "Gloria",
        "line": " Melman, hold still! Jump! Alex, jump! Don't worry, cats always land on their... Face? Man, what kind of cat are you?"
      },
      {
        "name": "Alex",
        "line": " You maniac!! You burned it up! Darn you! Darn you all to heck!"
      },
      {
        "name": "Melman",
        "line": " Can we go to the fun side now?"
      },
      {
        "name": "Maurice",
        "line": " Everybody, calm down. Come on. Into your chairs. Yes. Everybody please, calm down. Let go of his tail. Separate those two, would you, please? You over here, and you over there. Everybody, Shhh... Calm down, people, OK? Ugh. Now, presenting your royal highness, the illustrious blah, blah, blah. You know, et cetera, et cetera. Hooray. Let's go."
      },
      {
        "name": "King Julien",
        "line": " Now, everybody, we all have great curiosity about our guests, the New York giants. Yes, Willie?"
      },
      {
        "name": "Willie",
        "line": " I like them."
      },
      {
        "name": "Mort",
        "line": " I like them. I like them. I liked them first. Before I even met them I liked them."
      },
      {
        "name": "King Julien",
        "line": " Yes, yes."
      },
      {
        "name": "Mort",
        "line": " When I saw them, I liked them right away. You hate them compared to how much I like them."
      },
      {
        "name": "King Julien",
        "line": " Oh, shut up. You're so annoying!"
      },
      {
        "name": "Mort",
        "line": " Hee-hee-hee."
      },
      {
        "name": "King Julien",
        "line": " Now, for as long as we can remember, we have been attacked and eaten by the dreaded fossa."
      },
      {
        "name": "Lemur",
        "line": " The fossa! The fossa are attacking! AAAHHH!!! AAHHH!!"
      },
      {
        "name": "Lemur",
        "line": " (Holds a book that says \"To Serve Lemur\") It's a cookbook! IT'S A COOKBOOK!!!!!"
      },
      {
        "name": "King Julien",
        "line": " Alright! Please. Please. Maurice."
      },
      {
        "name": "Maurice",
        "line": " Shh! Quiet!! Come on, y'all. They're not attacking us this very instant."
      },
      {
        "name": "King Julien",
        "line": " So my genius plan is this"
      },
      {
        "name": "King Julien",
        "line": " I thought of that! I thought of that! Yes! Me! I did."
      },
      {
        "name": "Maurice",
        "line": " Hold on, hold on, everybody. Hold on. I'm just thinking now. I mean, does anyone wonder why the fossa were so scared of Mr. Alex? I mean, maybe we should be scared too. What if Mr. Alex is even worse than the fossa?! (Lemurs gasp in shock) I'm telling you, that dude just gives me the heebiedabajeebies!"
      },
      {
        "name": "King Julien",
        "line": " Maurice, you did not raise your hand. Therefore, your heinous comment will be stricken from the record. (Chameleon uses the typewriter) Does anyone else have the heebie-jeebies? No? Good. So shut up. When the New York giants wake up, we will make sure that they wake up in paradise. Ha-ha-ha-ha! Now, who would like a cookie?"
      },
      {
        "name": "Marty",
        "line": " Yo, Al. Melman and Gloria are over there having a good time. There's room on the fun side for one more."
      },
      {
        "name": "Alex",
        "line": " No, thanks."
      },
      {
        "name": "Marty",
        "line": " Look, I've been thinking. Maybe if you gave this place a chance, I don't know, you might even enjoy yourself."
      },
      {
        "name": "Alex",
        "line": " Marty, I'm tired. I'm hungry. I just want to go home."
      },
      {
        "name": "Marty",
        "line": " Could you just give it a chance? Think about it. It really isn't the fun side without you."
      },
      {
        "name": "Melman",
        "line": " Shh. Shh. It's him."
      },
      {
        "name": "Marty",
        "line": " Who is it?"
      },
      {
        "name": "Alex",
        "line": " It's the pizza man. Who the heck do you think it is?"
      },
      {
        "name": "Marty",
        "line": " Yes? Can I help you?"
      },
      {
        "name": "Alex",
        "line": " Can I come to the fun side?"
      },
      {
        "name": "Marty",
        "line": " Beg your pardon?"
      },
      {
        "name": "Alex",
        "line": " You know, I've been kind of a jerk, Marty. But I've been thinking about what you said, and I'm sorry."
      },
      {
        "name": "Marty",
        "line": " Welcome to Casa del Wild! Take a load off. Hey, hey, wipe your feet."
      },
      {
        "name": "Gloria",
        "line": " Alex!"
      },
      {
        "name": "Marty",
        "line": " Mi casa is su casa."
      },
      {
        "name": "Alex",
        "line": " Very impressive."
      },
      {
        "name": "Marty",
        "line": " Hey, have a drink. It's on the house."
      },
      {
        "name": "Alex",
        "line": " (Drinks the water, but it's salad and he spits it!) This is seawater."
      },
      {
        "name": "Marty",
        "line": " Oh, you don't swallow it. It's just temporary till the plumbing's done. Hey, y'all look hungry. How would you like some of nature's goodness?"
      },
      {
        "name": "Gloria",
        "line": " You have food?"
      },
      {
        "name": "Marty",
        "line": " The Fun Side Special, coming up. Seaweed on a stick."
      },
      {
        "name": "Alex",
        "line": " Seaweed?"
      },
      {
        "name": "Marty",
        "line": " On a stick. Don't love it till you try it."
      },
      {
        "name": "Melman",
        "line": " That's unbelievable!"
      },
      {
        "name": "Gloria",
        "line": " Mmm… So good."
      },
      {
        "name": "Marty",
        "line": " Well, thanks. It does kind of hit the spot, doesn't it? (Alex coughs of eating seaweed, because he wants steak.) Well, maybe it could use a little lemon."
      },
      {
        "name": "Alex",
        "line": " No, it's great. It's really great. Doesn't get any better than this?"
      },
      {
        "name": "Marty",
        "line": " Oh, but it does. Check this out."
      },
      {
        "name": "Gloria",
        "line": " Wow! Would you look at that."
      },
      {
        "name": "Alex",
        "line": " It's like billions and billions of helicopters."
      },
      {
        "name": "Marty",
        "line": " It's a shooting star. Make a wish. Quick!"
      },
      {
        "name": "Alex",
        "line": " Ooh! How about a thick, juicy steak?"
      },
      {
        "name": "Marty",
        "line": " You know what, Alex? I promise you I'm going to find you a steak tomorrow if it kills me."
      },
      {
        "name": "Alex",
        "line": " Thanks, Marty."
      },
      {
        "name": "Melman",
        "line": " (Yawns) It is getting late. I guess I'm gonna... (Snores)"
      },
      {
        "name": "Gloria",
        "line": " I think I'm gonna hit the sack too. Sweet dreams, everyone."
      },
      {
        "name": "Marty",
        "line": " Alex. (Alex accidentally licks Marty as the others are shocked) What are you doing?"
      },
      {
        "name": "Alex",
        "line": " 27, 28, 29, 30. Hmm. 30. 30 black and only 29 white. Looks like you're black with white stripes after all. Dilemma solved. Good night. (Pretends to sleep with his eyes open)"
      },
      {
        "name": "King Julien",
        "line": " You see, Maurice, Mr. Alex was grooming his friend. He is clearly a tender, loving thing. How can you have the heebie-jeebies for Mr. Alex? Look at him. He's so cute and plushy."
      },
      {
        "name": "Maurice",
        "line": " I don't think he was grooming him, Julien. Look more like he was tasting him to me."
      },
      {
        "name": "King Julien",
        "line": " Suit yourself, no matter. I don't care. Soon we will put my excellent plan to action. All we have to do is wait until they are deep in their sleep... [a long pause] How long is this going to take?! (Alex and his gang thought there are lemurs, but they see nothing. So they have to go to sleep again.)"
      },
      {
        "name": "Private",
        "line": " Well, this sucks."
      },
      {
        "name": "King Julien",
        "line": " Wake up, Mr. Alex. Wake up, Mr. Alex. Rise and shining. Wakey-waking, Mr. Alex! (Loudly) WAKE UP!! ALEX!!! (Alex muffled gasp) You suck your thumb?"
      },
      {
        "name": "Alex",
        "line": " AAH!"
      },
      {
        "name": "Everyone but Alex",
        "line": " AAH!"
      },
      {
        "name": "Everyone",
        "line": " AAAAHH!!"
      },
      {
        "name": "Alex",
        "line": " Where are we? What the heck is going on?"
      },
      {
        "name": "King Julien",
        "line": " Take it easy."
      },
      {
        "name": "Alex",
        "line": " What is this?"
      },
      {
        "name": "Melman",
        "line": " Who built a forest?"
      },
      {
        "name": "King Julien",
        "line": " Whoa, whoa, whoa! Don't be alarmed, giant freaks! While you were asleep, we simply took you to our little corner of heaven. Welcome to Madagascar."
      },
      {
        "name": "Marty",
        "line": " Mada-who-ah?"
      },
      {
        "name": "Gloria",
        "line": " What?"
      },
      {
        "name": "King Julien",
        "line": " No, not who-hah. Ascar."
      },
      {
        "name": "Alex",
        "line": " Marty. It's..."
      },
      {
        "name": "Marty",
        "line": " It's just like my mural back at the zoo."
      },
      {
        "name": "Gloria",
        "line": " Oh, no, fella, that is the real deal right there."
      },
      {
        "name": "King Julien",
        "line": " Look at that, that's not a bad view."
      },
      {
        "name": "Alex",
        "line": " I mean, that's the thing that you were always looking at, but it's actually there. I mean, that's like the real version of your..."
      },
      {
        "name": "Marty",
        "line": " Hey, how about once around the park? Let's get our blood pumping, get those lungs breathing all this fresh air! Who's with me?!"
      },
      {
        "name": "Alex",
        "line": " Ah, naw. I really, I don't think I could... You're it!"
      },
      {
        "name": "Marty",
        "line": " Hey! Want to play around? Ho! Hey!"
      },
      {
        "name": "Alex",
        "line": " Ha-ha! Oof!"
      },
      {
        "name": "Marty",
        "line": " Got you there! Ha-ha!"
      },
      {
        "name": "Alex",
        "line": " Come here! Ha-ha-ha!"
      },
      {
        "name": "Marty",
        "line": " You’re it!"
      },
      {
        "name": "Alex",
        "line": " (Chuckles) Hey, hey, hey!"
      },
      {
        "name": "Marty",
        "line": " Hey, stop that! Hey, you’re crazy!"
      },
      {
        "name": "Alex",
        "line": " OK, Marty, I'm it. I'm it. I'm it. You win. (Groans in exhaustion)"
      },
      {
        "name": "Marty",
        "line": " Come on, Alex, get in the groove."
      },
      {
        "name": "Alex",
        "line": " I haven't eaten in two days. My blood sugar's real low. I just don't have the energy."
      },
      {
        "name": "Marty",
        "line": " I don't think that's your problem. First of all, that's not how you run in the wild. Let's go, man. Put the rubber to the road! You just have to let out that inner lion. Now, who's the cat?"
      },
      {
        "name": "Alex",
        "line": " Marty, I really don't..."
      },
      {
        "name": "Marty",
        "line": " You are, that's who. Come on! Here we go! That's it. Now let's build up some steam! You the cat. You the cat. You the cat. You the cat. You the cat. Whoo! Whoo!"
      },
      {
        "name": "Alex",
        "line": " Alright. Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? Who's the cat? (His eyes changed of being crazy) I'M THE CAT!! (Zooms against Marty) Surprise!"
      },
      {
        "name": "Marty",
        "line": " Yahhh!! (Crashes with Alex)"
      },
      {
        "name": "Alex",
        "line": " Hoo! You're it! You're it! Can't juke the cat. Cat's too quick! Whoo! I feel like a mile-high pastrami on rye on the fly from the deli in the sky! Roar! Let's go wild!"
      },
      {
        "name": "Marty",
        "line": " Now you're talking!"
      },
      {
        "name": "Alex",
        "line": " Whoo! Man! I feel, ha-ha-ha-ha, different! Noogie, noogie, noogie. Noogie, noogie, noogie! Whoo! Kind of charged up or something. Hoo!"
      },
      {
        "name": "Gloria",
        "line": " Ah, Marty, Marty, Marty! Like you said, baby."
      },
      {
        "name": "Alex",
        "line": " It's Crackalacking. Ain't that right, Melman? Whoo!"
      },
      {
        "name": "Melman",
        "line": " Oh, yeah. Oh, yeah. I'm in heaven."
      },
      {
        "name": "King Julien",
        "line": " You see, Maurice, Alex is now our friend and the fossas are nowhere to be seen. It could be said that my plan is working in a very good working kind of way."
      },
      {
        "name": "Alex",
        "line": " Yeah!"
      },
      {
        "name": "Marty",
        "line": " Alex. You got to try some of this."
      },
      {
        "name": "Alex",
        "line": " I feel good. Feel like a king again!"
      },
      {
        "name": "King Julien",
        "line": " (Throws the pineapple to Maurice) King?"
      },
      {
        "name": "Marty",
        "line": " Yeah! You should see his act. Come on, Alex, why don't you show him some of your act?"
      },
      {
        "name": "Alex",
        "line": " (Chuckles) Oh. No, I really don't think I could... OK."
      },
      {
        "name": "Marty",
        "line": " Ladies and gentlemen, primates of all ages. The wild proudly presents"
      },
      {
        "name": "Marty & Alex",
        "line": " Alex the lion!"
      },
      {
        "name": "Alex",
        "line": " (roars) Ahhhh!"
      },
      {
        "name": "Marty",
        "line": " E flat, fellas."
      },
      {
        "name": "Marty",
        "line": " Yeah! The king is in the house!"
      },
      {
        "name": "King Julien",
        "line": " See, if he is the king, then where is his crown? I've got a crown. Got a very nice one! And it's here on my head! Look at it! Have I got it on?"
      },
      {
        "name": "Marty",
        "line": " Do the roar, man. Do the roar! [Alex no longer use his normal roar, so instead, he uses the real roar]"
      },
      {
        "name": "Marty",
        "line": " Wow. I've never heard that one before. Yeah! Go wild, man! Come on! Break out the wave!"
      },
      {
        "name": "Marty",
        "line": " Excuse me. You're biting my butt!"
      },
      {
        "name": "Alex",
        "line": " No, I'm not."
      },
      {
        "name": "Marty",
        "line": " Yes, you are."
      },
      {
        "name": "Alex",
        "line": " (Spits)"
      },
      {
        "name": "Gloria",
        "line": " Alex, what did you do?"
      },
      {
        "name": "Marty",
        "line": " You just bit me in the butt!"
      },
      {
        "name": "Alex",
        "line": " No. I didn't. Did I?"
      },
      {
        "name": "Melman",
        "line": " You kind of did."
      },
      {
        "name": "Marty",
        "line": " He just bit me on the butt. What the heck is wrong with you?"
      },
      {
        "name": "Alex",
        "line": " I... Oh! Uh..."
      },
      {
        "name": "Marty",
        "line": " Why'd you bite me?"
      },
      {
        "name": "Maurice",
        "line": " [coming out of the crowd] Man, it's because you are his dinner."
      },
      {
        "name": "Marty",
        "line": " What!?"
      },
      {
        "name": "Gloria",
        "line": " Excuse me?"
      },
      {
        "name": "Melman",
        "line": " That's dumb."
      },
      {
        "name": "King Julien",
        "line": " Come, come, Maurice. What is a simple bite on the buttocks among friends? Here, give me a nibble."
      },
      {
        "name": "Maurice",
        "line": " [pushing Julien away] The party is over, Julien. Your brilliant plan has failed."
      },
      {
        "name": "Marty",
        "line": " What are you talking about?"
      },
      {
        "name": "Maurice",
        "line": " Your friend here is what we call a deluxe-model hunting and eating machine. And he eats steak... which is you."
      },
      {
        "name": "Gloria",
        "line": " Get out of here."
      },
      {
        "name": "King Julien",
        "line": " Okey-dokey, Maurice, I admit it. The plan failed. All is lost! We're all doomed! The fossas will come back and gobble us with their mouths! Because... we are all steak."
      },
      {
        "name": "Mort",
        "line": " I'm steak! Me, me, me, me, me, me, me!"
      },
      {
        "name": "Maurice",
        "line": " Mr. Alex cannot stay here. He belongs with his own kind [Alex's eyes dilate and sees everyone becoming steak once again for his hunger] on the fossa side of the island."
      },
      {
        "name": "King Julien",
        "line": " By the power vested in me, by the law of the jungle, blah, blah, blah, blah, blah... Be gone!!"
      },
      {
        "name": "Marty",
        "line": " What? Come on, do I look like a steak to you?"
      },
      {
        "name": "Alex",
        "line": " Yeah!"
      },
      {
        "name": "Marty",
        "line": " See, I told you I don't look like a... Wait, wait, ...What did you say?"
      },
      {
        "name": "Alex",
        "line": " Oh, yeah!"
      },
      {
        "name": "Mort",
        "line": " He's going savage...."
      },
      {
        "name": "King Julien",
        "line": " Run for your lives!!"
      },
      {
        "name": "Gloria",
        "line": " Marty, run!"
      },
      {
        "name": "Marty",
        "line": " Aah!!"
      },
      {
        "name": "King Julien",
        "line": " A bullseye. Excellent shot, Maurice."
      },
      {
        "name": "Maurice",
        "line": " Thank you."
      },
      {
        "name": "Alex",
        "line": " Marty? I'm so sorry, Marty. What is wrong with me?! Ow. Oh, no. What have I done? It's true. I'm a monster. I got to get out of here."
      },
      {
        "name": "Marty",
        "line": " What have I done? This is a nightmare! And it's all my fault. Now, because of me, we've lost Alex."
      },
      {
        "name": "Melman",
        "line": " Well, what are we going to do?"
      },
      {
        "name": "Gloria",
        "line": " We'll find a way to help him. That's what we'll do."
      },
      {
        "name": "Melman",
        "line": " Oh! OK."
      },
      {
        "name": "Gloria",
        "line": " Come on, we are New Yorkers, right?"
      },
      {
        "name": "Marty",
        "line": " Yeah."
      },
      {
        "name": "Gloria",
        "line": " We're tough. We're gritty."
      },
      {
        "name": "Marty",
        "line": " Yeah!"
      },
      {
        "name": "Gloria",
        "line": " We're adaptable!"
      },
      {
        "name": "Marty",
        "line": " Yeah!!"
      },
      {
        "name": "Gloria",
        "line": " And we are not going to lay down like a bunch of Melmans!"
      },
      {
        "name": "Melman",
        "line": " No, we're not. Oh. Gloria."
      },
      {
        "name": "Gloria",
        "line": " That was not me, OK? That was the boat. The boat!"
      },
      {
        "name": "Marty",
        "line": " The boat? The boat's come back for us! Come on, guys, we got to flag it down."
      },
      {
        "name": "Marty",
        "line": ""
      },
      {
        "name": "Melman",
        "line": " Hey, over here!"
      },
      {
        "name": "Gloria",
        "line": " Over here!"
      },
      {
        "name": "Marty",
        "line": " Over here! Over here! Yo! Yo! Yo!"
      },
      {
        "name": "Gloria",
        "line": " Melman, give me a lift. Hurry up! Lift me up!"
      },
      {
        "name": "Marty",
        "line": " Help! Help! Help!"
      },
      {
        "name": "Melman",
        "line": " Oh, my neck. My neck. My neck. You guys. Over here!"
      },
      {
        "name": "Gloria",
        "line": " Over here! Melman! Steady. This way!"
      },
      {
        "name": "Marty",
        "line": " Over here!"
      },
      {
        "name": "Melman",
        "line": " You have no idea how much this hurts."
      },
      {
        "name": "Marty",
        "line": " Hey, boat! We're over here!"
      },
      {
        "name": "Gloria",
        "line": " Look! It's turning! It's coming back! It's coming back! It's coming back!"
      },
      {
        "name": "Melman",
        "line": " Yes! This way! Come on! Come on, baby! WHOO!! Yes, you guys!"
      },
      {
        "name": "Marty",
        "line": " You guys flag down that boat. I’ll go get Alex."
      },
      {
        "name": "Gloria",
        "line": " [stopping Marty] Whoa! Hold on there. You cannot go back there by yourself."
      },
      {
        "name": "Marty",
        "line": " Aw, come on. I know Alex. He hears we're rescued, he'll snap right out of it."
      },
      {
        "name": "Melman",
        "line": " The people are coming. They can help us."
      },
      {
        "name": "Gloria",
        "line": " Melman's right. The people will know what to do. Now, come on. We got to flag down that boat."
      },
      {
        "name": "Skipper",
        "line": " Now, this is more like it."
      },
      {
        "name": "Gloria",
        "line": " You?! Oh, ma... Where are the people?"
      },
      {
        "name": "Skipper",
        "line": " We killed them and ate their livers. [Gloria looks shocked] Got you, didn't I? Just kidding, doll, the people are fine. They're on a slow lifeboat to China. Hey, I know you two. Where's that psychotic lion and our monochromatic friend?"
      },
      {
        "name": "Melman",
        "line": " Marty? He's right...[they realized Marty was gone] Where did he go? He was right behind us."
      },
      {
        "name": "Gloria",
        "line": " (groans) He went back for Alex. He's going to get himself killed!"
      },
      {
        "name": "Skipper",
        "line": " Well, boys, our monochromatic friend's in danger. Looks like we have a job to do. Captain's log"
      },
      {
        "name": "Marty",
        "line": " Alex! Come out, Alex! The boat's here! We can go home!"
      },
      {
        "name": "Zoo Patrons",
        "line": " Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex! Alex!"
      },
      {
        "name": "Marty",
        "line": " Alex! Alex."
      },
      {
        "name": "Alex",
        "line": " Marty?"
      },
      {
        "name": "Marty",
        "line": " Snap out of it, Alex. The boat came back. We can get out of here. We can go back to civilization, and everything will be just like it used to be."
      },
      {
        "name": "Alex",
        "line": " Stay back. Please. I'm a monster."
      },
      {
        "name": "Marty",
        "line": " Alex, you're no monster. You're my friend. We're a team. You and me, remember?"
      },
      {
        "name": "Alex",
        "line": " I don't want to hurt you."
      },
      {
        "name": "Marty",
        "line": " Alex. I ain't leaving without you. Alex? I'm thinking of a song. It's a wonderful song. I'm sure you're familiar with it. ♪ Start spreadin' the news I'm leaving today We are a great big part of it ♪ Come on, you know the words. Two little words. Please don't make me sing this by myself. You really don't want to hear me sing this by myself."
      },
      {
        "name": "Marty",
        "line": " Uh, Alex? Could you come out here for a minute? Hey, Alex, a l-l-little help. AAH!!! HELP ME!!! ALEX!! HEEEELLLPPP!!!!!!! Help me!! Anybody, help me!! Somebody!! (The Foosas are using salt on Marty's Butt) Ah! HEEEELLLPPP!!!!!!!"
      },
      {
        "name": "Marty",
        "line": " Melman?"
      },
      {
        "name": "Melman",
        "line": " That's right, baby. (Both crash into the rock)"
      },
      {
        "name": "Gloria",
        "line": " Run!"
      },
      {
        "name": "Marty",
        "line": " What's the plan?"
      },
      {
        "name": "Gloria",
        "line": " This is the plan!"
      },
      {
        "name": "Fossa",
        "line": " Fossa hungry. Fossa eat."
      },
      {
        "name": "Marty",
        "line": " This is the plan?!"
      },
      {
        "name": "Skipper",
        "line": " Fossa halt!"
      },
      {
        "name": "Fossa",
        "line": " Huh? (Skipper fires the gun of the red light) Ooh. Fossa aaahh. Fossa ooh. Fossa aaahh."
      },
      {
        "name": "Private",
        "line": " Come and get it!"
      },
      {
        "name": "Fossa",
        "line": " Fossa-Huh?"
      },
      {
        "name": "Gloria",
        "line": " Take that!"
      },
      {
        "name": "Fossa",
        "line": " Fossa ow!"
      },
      {
        "name": "Private",
        "line": " There's too many of them, Skipper."
      },
      {
        "name": "Skipper",
        "line": " It's been a real pleasure serving with you boys."
      },
      {
        "name": "Marty",
        "line": " Alex?"
      },
      {
        "name": "Alex",
        "line": " That's my kill! Mine. Alex hungry. Alex eat. (Unleashes his claws) Psst! It's showtime. Thanks for not giving up on me, Marty."
      },
      {
        "name": "Marty",
        "line": " Man, you almost gave me a heart attack. You can't just come sneak up on me. Just because you're a lion... (Muffled) Let go of me. Let go of me."
      },
      {
        "name": "Alex",
        "line": " Shh! We're getting out of here. Guys, just go with me on this. Like I said, it's showtime. Rrr! Mine! My kill! Rrahh! They're all mine! (Roars as his gang start to scream)"
      },
      {
        "name": "Gloria",
        "line": " Aah! It's the king of the beasts! Oh, no! Aah!"
      },
      {
        "name": "Marty",
        "line": " Don't eat me, Mr. Lion!"
      },
      {
        "name": "Melman",
        "line": " He's scary!"
      },
      {
        "name": "Alex",
        "line": " Fear me! Savagery beyond comprehension!"
      },
      {
        "name": "Marty",
        "line": " I am far too young to die!"
      },
      {
        "name": "Melman",
        "line": " You're a monster! A monster, I say!"
      },
      {
        "name": "Alex",
        "line": " And, you!"
      },
      {
        "name": "Fossa",
        "line": " Me?!"
      },
      {
        "name": "Gloria",
        "line": " Oh, you want some of this? (Grunts) You better run for your lives!"
      },
      {
        "name": "Marty",
        "line": " Somebody call a cop!"
      },
      {
        "name": "Melman",
        "line": " He's psychotic!"
      },
      {
        "name": "Alex",
        "line": " This is my territory!! Understand?! I never, ever want to see you on my turf again! [Roaring to scare all Fossas] Boo."
      },
      {
        "name": "Marty",
        "line": " Yeah! You the cat!"
      },
      {
        "name": "Gloria",
        "line": " Got my boy back!"
      },
      {
        "name": "King Julien",
        "line": " Ha-ha-ha-ha-ha! I did it! Give me some love! The plan worked! The plan worked! I'm very clever! I'm the one, baby! Come on. Time to robot! I am very clever king. I am super genius. I am robot king of the monkey things. Compute, compute."
      },
      {
        "name": "Alex",
        "line": " So, what's for lunch?"
      },
      {
        "name": "Skipper",
        "line": " Close those eyes."
      },
      {
        "name": "Alex",
        "line": " Why do I have to close my eyes?"
      },
      {
        "name": "Skipper",
        "line": " Do it."
      },
      {
        "name": "Alex",
        "line": " Yeah. They're closed."
      },
      {
        "name": "Skipper",
        "line": " Tighter."
      },
      {
        "name": "Alex",
        "line": " Yes, sir."
      },
      {
        "name": "Skipper",
        "line": " No peeking."
      },
      {
        "name": "Alex",
        "line": " Alright. They're closed."
      },
      {
        "name": "Skipper",
        "line": " Rico."
      },
      {
        "name": "Rico",
        "line": " Hai."
      },
      {
        "name": "Skipper",
        "line": " Open that hatch."
      },
      {
        "name": "Alex",
        "line": " Aah…"
      },
      {
        "name": "Skipper",
        "line": " Fire in the hole. Now chew. Chew like you mean it. Savor it."
      },
      {
        "name": "Alex",
        "line": " Mmm… Mmm."
      },
      {
        "name": "Marty",
        "line": " And?"
      },
      {
        "name": "Gloria",
        "line": " Well?"
      },
      {
        "name": "Melman",
        "line": " Pretty good, right?"
      },
      {
        "name": "King Julien",
        "line": " There's always Plan B."
      },
      {
        "name": "Mort",
        "line": " Ha-ha-ha."
      },
      {
        "name": "Alex",
        "line": " Mmm. Mmm! This is better than steak! I love it. I love it!"
      },
      {
        "name": "Skipper",
        "line": " The kitty loves the fishy."
      },
      {
        "name": "Marty",
        "line": " Well, I propose a toast. Now, he may be a pain in the butt at times... And trust me, I know. But this cat proved to me without a doubt that his heart is bigger than his stomach. To Alex."
      },
      {
        "name": "Everyone",
        "line": " To Alex!"
      },
      {
        "name": "King Julien",
        "line": " Enough! Stop it!"
      },
      {
        "name": "Marty",
        "line": " Well, what do you guys think? Should we head back to New York?"
      },
      {
        "name": "Alex",
        "line": " I don't know, Marty. I mean, this is your dream. You sure you want to leave?"
      },
      {
        "name": "Marty",
        "line": " I don't care where we are. As long as we're together, it doesn't matter to me."
      },
      {
        "name": "Alex",
        "line": " Well, in that case... Yo. Rico. I'll take 300 orders to go."
      },
      {
        "name": "Rico",
        "line": " Hai."
      },
      {
        "name": "King Julien",
        "line": " Yes, yes. But before you leave, I have an announcement to make. So shut up, everyone, please. Thank you. After much deep and profound brain things inside my head, I have decided to thank you for bringing peace to our home. And to make you feel good, I'm gonna give you this lovely parting gift."
      },
      {
        "name": "Alex",
        "line": " No, I couldn't. Really, I can't take your crown."
      },
      {
        "name": "King Julien",
        "line": " That's OK, I've got a bigger crown. It's got a gecko on it. Look at him shake. Go, Stevie, go!"
      },
      {
        "name": "Alex",
        "line": " Bye, little fuzzbuckets!"
      },
      {
        "name": "Gloria",
        "line": " Thanks for everything!"
      },
      {
        "name": "Marty",
        "line": " Bye!"
      },
      {
        "name": "Alex",
        "line": " So long!"
      },
      {
        "name": "King Julien",
        "line": " Okay, bye-bye, now."
      },
      {
        "name": "Marty",
        "line": " Arrivederci."
      },
      {
        "name": "King Julien",
        "line": " Bye-bye."
      },
      {
        "name": "Maurice",
        "line": " Toodle-oo!"
      },
      {
        "name": "Mort",
        "line": " Bye! Goodbye!"
      },
      {
        "name": "King Julien",
        "line": " See you later, crocodile. Maurice, my arm is tired. Wave it for me. Faster, you naughty little monkey!"
      },
      {
        "name": "Alex",
        "line": " You know, by the time we get to New York, it’s gonna be the middle of winter. So I was just thinking, why rush? Maybe we could make a few side stops along the way?"
      },
      {
        "name": "Marty",
        "line": " Maybe Paris."
      },
      {
        "name": "Gloria",
        "line": " Ooh! You just read my mind."
      },
      {
        "name": "Alex",
        "line": " I was thinking Spain."
      },
      {
        "name": "Marty",
        "line": " Yeah. Run with the bulls."
      },
      {
        "name": "Gloria",
        "line": " What about Fiji?"
      },
      {
        "name": "Melman",
        "line": " Ooh! Canada. Can we? Cheap meds. Eh?"
      },
      {
        "name": "Alex",
        "line": " You know, I wouldn't even mind coming back here sometime."
      },
      {
        "name": "Melman",
        "line": " Yeah, I could do that."
      },
      {
        "name": "Gloria",
        "line": " You could say that again."
      },
      {
        "name": "Private",
        "line": " Skipper, don't you think we should tell them that the boat's out of gas?"
      },
      {
        "name": "Skipper",
        "line": " Nah. Just smile and wave, boys. Smile and wave."
      }],
    "Madagascar2": [{
        "name":"Scene 1",
        "line":" Opening"
     },
     {
        "name":"Skipper",
        "line":" Well done, boys. Looks like ice-cold sushi for breakfast. (All give a high-5!)"
     },
     {
        "name":"Zuba",
        "line":" No, no, son. Over here. See the lion? Look at the lion and get the lion. (Sighs and grunts) Now, son, if you're gonna grow up and be like your daddy someday, you gotta learn how to fight."
     },
     {
        "name":"Alakay",
        "line":" Da-da."
     },
     {
        "name":"Zuba",
        "line":" [chuckles] Now, Alakay, let me show you something, OK? You see this mark? You and me are the same. When you're bigger, you'll wanna be an Alpha Lion, just like your daddy. Now let me see you fight. (Alakay growls) Ready? (But Alakay dances again) No, Alakay. No dancing! You just amuse yourself, don't you? You're a strange kid. You're a strange one. I'm... [Laughing as Alakay uses his hand move up and down of his faces] Now, come on, let's try it again. No, Alakay. Stop that-- Stop that right now. Doggone it!"
     },
     {
        "name":"Makunga",
        "line":" It's so disappointing when they don't grow up the way you want to."
     },
     {
        "name":"Zuba",
        "line":" Makunga. You're not challenging me again, are you?"
     },
     {
        "name":"Makunga",
        "line":" Look on the bright side, Zuba. After I defeat you and take over as the alpha lion, you'll have so much more time to spend with your pathetic excuse of a son."
     },
     {
        "name":"Zuba",
        "line":" Before I kick your butt, let me ask you"
     },
     {
        "name":"Makunga",
        "line":" I'm better looking, I have better hair, I'm deceivingly smart... and I want everyone else to do what I say."
     },
     {
        "name":"Zuba",
        "line":" (Groans)"
     },
     {
        "name":"Makunga",
        "line":" We'll fight on three. One..."
     },
     {
        "name":"Zuba",
        "line":" Pay attention, Alakay. Daddy gonna show you how it's done."
     },
     {
        "name":"Makunga",
        "line":" Two, three!"
     },
     {
        "name":"Zuba",
        "line":" Who's the alpha lion?"
     },
     {
        "name":"Makunga",
        "line":" You are."
     },
     {
        "name":"Zuba",
        "line":" Don't you forget it. And that, Alakay, is how you attack... Alakay?"
     },
     {
        "name":"Hunter #1",
        "line":" That's it. Here, kitty, kitty."
     },
     {
        "name":"Hunter #2",
        "line":" (Using his gun cock) Ah! This one's a beauty. He'll be worth a few bucks."
     },
     {
        "name":"Hunter #1",
        "line":" It just gets easier and easier. [Chuckles evilly]"
     },
     {
        "name":"Alakay",
        "line":" Daddy!!"
     },
     {
        "name":"Zuba",
        "line":" Alakay! Alakay! ALAKAY!!!!"
     },
     {
        "name":"Alakay",
        "line":" Da-da!"
     },
     {
        "name":"Zuba",
        "line":" No! No! No!!! Alakay!"
     },
     {
        "name":"Alakay",
        "line":" Daddy!"
     },
     {
        "name":"Zuba",
        "line":" Alakay! Daddy's got you! Hold on!"
     },
     {
        "name":"Alakay",
        "line":" Da-da! (Whimpers)"
     },
     {
        "name":"Zuba",
        "line":" ALAKAY!!!!"
     },
     {
        "name":"Alakay",
        "line":" Daddy!"
     },
     {
        "name":"Scene 2",
        "line":" Entering New York"
     },
     {
        "name":"Baby Marty",
        "line":" I don't like the looks of this guy."
     },
     {
        "name":"Baby Gloria",
        "line":" Well, I think he's kind of cute."
     },
     {
        "name":"Baby Marty",
        "line":" I think he's kind of a showoff."
     },
     {
        "name":"Baby Melman",
        "line":" Y-You think he's cute? (Coughs)"
     },
     {
        "name":"All",
        "line":" Whoa!"
     },
     {
        "name":"Adult Alex",
        "line":" Roar!!!"
     },
     {
        "name":"Announcer",
        "line":" The King of New York City... Alex the Lion!"
     },
     {
        "name":"Marty",
        "line":" Woo-hoo! I still think he's kind of a showoff."
     },
     {
        "name":"Melman",
        "line":" You gotta give it to him. The guy's an animal."
     },
     {
        "name":"Marty",
        "line":" Maybe he should take a break. You know, we could all use a vacation."
     },
     {
        "name":"Gloria",
        "line":" Come on, where on Earth would we go on vacation?"
     },
     {
        "name":"Marty",
        "line":" I don't know about you, but I want to go to Connecticut!"
     },
     {
        "name":"News Anchor Woman #1",
        "line":" On the loose, several animals, including the world famous Alex the Lion, the king of New York, escaped from the Central Park Zoo tonight to look for the Zebra. The escapes were finally cornered in Grand Central Station."
     },
     {
        "name":"Nana",
        "line":" He was a very bad kitty."
     },
     {
        "name":"News Anchor Woman #2",
        "line":" Animal rights activists who convinced zoo officials to have the escaped animals sent to Africa, were stunned to learn that the shipping freighter carrying the animals was reported missing today."
     },
     {
        "name":"News Anchor Man",
        "line":" Tonight, hundreds of New Yorkers have gathered at the Central Park Zoo to mourn the loss of their beloved zoo animals, the question on everyone's mind-- where are they now?"
     },
     {
        "name":"Scene 3",
        "line":" Going to New York"
     },
     {
        "name":"Alex",
        "line":" I like to move it, move it"
     },
     {
        "name":"Gloria",
        "line":" He likes to move it, move it"
     },
     {
        "name":"Marty",
        "line":" She likes to move it, move it"
     },
     {
        "name":"Melman",
        "line":" We like to"
     },
     {
        "name":"Lemur Crowd",
        "line":" Move it!"
     },
     {
        "name":"Marty",
        "line":" Come on! Y'all know this one! It never gets stale!"
     },
     {
        "name":"Alex",
        "line":" We'll miss you little fuzz buckets! You've been a great crowd!"
     },
     {
        "name":"Melman",
        "line":" Glad we could introduce you to the toilet."
     },
     {
        "name":"Alex",
        "line":" If you ever come look us up in Manhattan, feel free to call first. Seriously though, call. OK?"
     },
     {
        "name":"Maurice",
        "line":" Settle down, everybody. Shh! Be quiet! You can't leave without this!"
     },
     {
        "name":"Julian",
        "line":" Hey! Surprise, freaks! Shake it! Shake it. (Laughing) Look, I'm a lady! I'm a lady, everyone! I'm a lady! Not really! It's me, King Julien! Which of you is attracted to me? Hands up! (Laughing) Yes! Hey, freaks! You will be very glad to hear that I am coming with you."
     },
     {
        "name":"Alex",
        "line":" (Chuckles) Oh, no, thank you."
     },
     {
        "name":"Julien",
        "line":" Yes, thank you. It's my plane! Until I return with the spoils from the new country... Stevie will be in charge!"
     },
     {
        "name":"Maurice",
        "line":" I don't think they like that idea so much, Julien."
     },
     {
        "name":"Julien",
        "line":" What is that you saying, Stevie? No. (Gasps) Could we? No, you didn't say that! How is that even possible? Naughty little thing! Stevie says... [gibberish language of what is Stevie saying] Let them eat cake!"
     },
     {
        "name":"Mort",
        "line":" King Julien, wait for me! I'm all packed! I have a whole itinerary planned!"
     },
     {
        "name":"Julian",
        "line":" Oh, no! It's Mort! He's so annoying! Don't let him on. Stop that thing! He's uh... carrying scissors and hand cream! Everybody in! Quickly, get in, get in! Get in quick!!"
     },
     {
        "name":"Skipper",
        "line":" Struts."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Skipper",
        "line":" Flaps."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Skipper",
        "line":" Engine."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Skipper",
        "line":" Coffee maker."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Mort",
        "line":" You guys! (Laughing)"
     },
     {
        "name":"Julien",
        "line":" Oopsie-daisy!"
     },
     {
        "name":"Skipper",
        "line":" That's got to be the second biggest slingshot I've ever seen. But it's gonna have to do. Attention. This is your captain speaking."
     },
     {
        "name":"Private",
        "line":" In the event of an water emergency, place the vest over your head, then kiss your... (inflates a lifejacket, but explodes) good-bye."
     },
     {
        "name":"Gloria",
        "line":" New York City, here we come!"
     },
     {
        "name":"Skipper",
        "line":" We'd like you to sit back, relax and pray to your personal God this hunk of junk flies."
     },
     {
        "name":"Alex",
        "line":" Personal God, hunk? What?"
     },
     {
        "name":"Kowalski",
        "line":" We are go, sir."
     },
     {
        "name":"Mort",
        "line":" Open the door! I'm outside! (Screams)"
     },
     {
        "name":"Private",
        "line":" If case of loss in cabin pressure, place the mask over your face to hide your terrified expression from the other passengers."
     },
     {
        "name":"Marty",
        "line":" Excuse me miss, but aren't these supposed to be attached to my seat?"
     },
     {
        "name":"Private",
        "line":" No, sir."
     },
     {
        "name":"Skipper",
        "line":" OK, boys, launch!"
     },
     {
        "name":"Rico",
        "line":" Hai."
     },
     {
        "name":"Lemur #1",
        "line":" Launch!"
     },
     {
        "name":"Lemur #2",
        "line":" Launch!"
     },
     {
        "name":"Lemur #3",
        "line":" Launch!"
     },
     {
        "name":"Alex",
        "line":" AAHH!! Gremlin!"
     },
     {
        "name":"Alex",
        "line":" (Sighs) Hey, Mort."
     },
     {
        "name":"Mort",
        "line":" Hi! (Screams)"
     },
     {
        "name":"Alex",
        "line":" (Whispering) That was weird."
     },
     {
        "name":"Marty",
        "line":" Hey, somebody's dreaming, huh."
     },
     {
        "name":"Alex",
        "line":" I think I just saw Mort on the wing of the plane."
     },
     {
        "name":"Melman",
        "line":" You got Madagascar on the brain."
     },
     {
        "name":"Gloria",
        "line":" I know I'm gonna miss it."
     },
     {
        "name":"Alex",
        "line":" It was incredible. Yeah, I think it'll seem more fun the further we are from it."
     },
     {
        "name":"Marty",
        "line":" Like when you bit me on the butt?"
     },
     {
        "name":"Alex",
        "line":" I'm gonna take that thing you're holding onto and use it onstage. It's all part of my little actor's salad bar of emotional tidbits."
     },
     {
        "name":"Marty",
        "line":" Are the butts next to the croutons at the salad bar?"
     },
     {
        "name":"Alex",
        "line":" You don't need to be sarcastic, Marty."
     },
     {
        "name":"Gloria",
        "line":" Hey guys, you know. I was thinking. When we get back, I might sign up for the breeding program."
     },
     {
        "name":"Melman",
        "line":" Breeding program?"
     },
     {
        "name":"Gloria",
        "line":" I think we rack each a point in our lives when we want to meet somebody. You know? Settle down, have a relationship."
     },
     {
        "name":"Marty",
        "line":" I can see that."
     },
     {
        "name":"Melman",
        "line":" What? (clears throat) Like dating?"
     },
     {
        "name":"Gloria",
        "line":" Yeah, dating."
     },
     {
        "name":"Melman",
        "line":" Oth-Other... oth-other guys?"
     },
     {
        "name":"Gloria",
        "line":" What do you mean, other guys?"
     },
     {
        "name":"Melman",
        "line":" Darn it! I'm gonna...What is holding up that beverage service?! I'm gonna go check."
     },
     {
        "name":"Gloria",
        "line":" (yawns as she is going to sleep) You all keep talking. I'm gonna catch a few winks."
     },
     {
        "name":"Julien",
        "line":" You see that? It's so funny! Oh, I like laughing! It's such a nice experience! To laugh!"
     },
     {
        "name":"Melman",
        "line":" Wow!"
     },
     {
        "name":"Julien",
        "line":" Whoa! Sorry. Do you mind going back? This is first class. It's nothing personal. We're just better than you. Hey Maurice, I'm open! Hit me!"
     },
     {
        "name":"Maurice",
        "line":" He shoots, he scores!"
     },
     {
        "name":"Melman",
        "line":" Is that Vivaldi?"
     },
     {
        "name":"Julien",
        "line":" Hey, in-flight slave."
     },
     {
        "name":"Private",
        "line":" Can I help you, Mr. Mankiewicz?"
     },
     {
        "name":"Julien",
        "line":" Bring me my nuts on a silver platter."
     },
     {
        "name":"Melman",
        "line":" We just wanted to checking on the drinks we ordered."
     },
     {
        "name":"Private",
        "line":" Oh, sorry. Been a little backed up."
     },
     {
        "name":"Melman",
        "line":" I guess I'll go back.."
     },
     {
        "name":"Julien",
        "line":" Hey, what happened to your body? You're freaking me out! Can you please go over there, please? Thank you very much. What ever happened to the separation of the classes?"
     },
     {
        "name":"Maurice",
        "line":" Ah, I'm sure this democracy thing is just a fad."
     },
     {
        "name":"Skipper",
        "line":" We'll go out for pineapple, my bobbly-headed boobily-boo."
     },
     {
        "name":"Kowalski",
        "line":" Skipper, look!"
     },
     {
        "name":"Skipper",
        "line":" Analysis."
     },
     {
        "name":"Kowalski",
        "line":" It looks like a small incandescent bulb; designed to indicate something out of the ordinary, like a malfunction."
     },
     {
        "name":"Skipper",
        "line":" I find it pretty and somewhat hypnotic."
     },
     {
        "name":"Kowalski",
        "line":" That too, sir."
     },
     {
        "name":"Skipper",
        "line":" Right! Rico? Manual! Mmm-hmm. [Uses the manual to break the red light] Problemo solved."
     },
     {
        "name":"Kowalski",
        "line":" Sir, we may be out of fuel."
     },
     {
        "name":"Skipper",
        "line":" What makes you think that?"
     },
     {
        "name":"Kowalski",
        "line":" We've lost engine one... and engine two is no longer on fire."
     },
     {
        "name":"Skipper",
        "line":" Buckle up, boys."
     },
     {
        "name":"Skipper",
        "line":" Don't look, doll. This might get hairy. Attention! This is your captain speaking. I've got good and bad news. The good news is, we'll be landing immediately. The bad news is, we're crash-landing."
     },
     {
        "name":"Skipper",
        "line":" When it comes to air travel, we know you have no choice whatsoever. But thanks again for choosing Air Penguin."
     },
     {
        "name":"Julien",
        "line":" [Laughing as Maurice buckles his seatbelt] Raise your arms, Maurice! It's more fun when you raise your arms like this! [Laughing as he and Maurice come out of the plane and they have a parachute] I can fly!"
     },
     {
        "name":"Alex",
        "line":" This could be it, Marty! I just want you to know that you're truly a one-in-a-million friend!"
     },
     {
        "name":"Marty",
        "line":" Thanks, buddy! You're the best ever!"
     },
     {
        "name":"Alex",
        "line":" I know you won't mind when I tell you..."
     },
     {
        "name":"Marty",
        "line":" Go on. Tell me anything. Tell me what."
     },
     {
        "name":"Alex",
        "line":" I broke your iPod!"
     },
     {
        "name":"Marty",
        "line":" WHAT?!?"
     },
     {
        "name":"Alex",
        "line":" The buttons were so small! It made me mad!"
     },
     {
        "name":"Marty",
        "line":" Oh, no! The horror!!!"
     },
     {
        "name":"Alex",
        "line":" I'm sorry!"
     },
     {
        "name":"Marty",
        "line":" I'm gonna kill you, butt-biter!!"
     },
     {
        "name":"Alex",
        "line":" It was an accident! An accident!"
     },
     {
        "name":"Marty",
        "line":" Butt-biter!"
     },
     {
        "name":"Melman",
        "line":" I love you, Gloria! I always have! [Gloria snores as everything is going to calm down] Like... (sighs) Like you love the beach. [stammering] Or a good book. Or the beach."
     },
     {
        "name":"Skipper",
        "line":" My goodness, doll, you're shaking like a leaf. Rico! You've had your fun, pull up."
     },
     {
        "name":"Skipper",
        "line":" Gear down. Gently now. You just want to kiss the ground. Just a peck, a smooch, like you'd kiss your sister."
     },
     {
        "name":"Skipper",
        "line":" I said, kiss it!"
     },
     {
        "name":"Skipper",
        "line":" Now just a little brake. Just a touch. A little whisper."
     },
     {
        "name":"Mason",
        "line":" I believe that's checkmate."
     },
     {
        "name":"Skipper",
        "line":" Commence emergency landing procedure. Flaps up! Deploy!"
     },
     {
        "name":"Gloria",
        "line":" Oh, we're here. [confused] What in the world? What happened to the plane? What did y'all do to the plane?"
     },
     {
        "name":"Melman",
        "line":" [muffled] Is this thing ever working?"
     },
     {
        "name":"Marty",
        "line":" I'm OK. I'm alive."
     },
     {
        "name":"Melman",
        "line":" [muffled] Hey guys?"
     },
     {
        "name":"Gloria",
        "line":" I can't even sleep for a minute. You know what? This is not JFK. I don't think."
     },
     {
        "name":"Alex",
        "line":" Wow."
     },
     {
        "name":"Skipper",
        "line":" Kowalski, casualty report."
     },
     {
        "name":"Kowalski",
        "line":" Two passengers unaccounted for Skipper"
     },
     {
        "name":"Skipper",
        "line":" That's a number I can live with. Good landing, boys! Who says a penguin can't fly? (All give a High-5!)"
     },
     {
        "name":"Alex",
        "line":" Hey, happy slappers! Is there some reason to celebrate? Look at the plane!"
     },
     {
        "name":"Skipper",
        "line":" We'll fix it."
     },
     {
        "name":"Alex",
        "line":" Fix it? How are you gonna fix this?"
     },
     {
        "name":"Skipper",
        "line":" Grit, spit and a whole lot of duct tape. We should be up and running in, say, six to nine months."
     },
     {
        "name":"Alex",
        "line":" Sixty-nine months?!"
     },
     {
        "name":"Skipper",
        "line":" No, six to nine months. Kowalski, I say we use this setback to our advantage."
     },
     {
        "name":"Alex",
        "line":" Where'd you get that number?"
     },
     {
        "name":"Skipper",
        "line":" I want you to reconfigure the design."
     },
     {
        "name":"Alex",
        "line":" How do you estimate that?"
     },
     {
        "name":"Skipper",
        "line":" Pretty boy! Why don't you and your friends dig a latrine? Maybe find water."
     },
     {
        "name":"Alex",
        "line":" Hold on a second. Who made you king of the plane wreck?"
     },
     {
        "name":"Skipper",
        "line":" Excuse me? Fine. You can be in charge. You fix the plane."
     },
     {
        "name":"Alex",
        "line":" Who gives you the authority to put me in charge?"
     },
     {
        "name":"Skipper",
        "line":" OK, then I'll remain in charge."
     },
     {
        "name":"Alex",
        "line":" Yeah. That's right. You will remain in charge."
     },
     {
        "name":"Skipper",
        "line":" You and your hippie friends stay out of our hair."
     },
     {
        "name":"Alex",
        "line":" Correcto-mundo. Because I decided to."
     },
     {
        "name":"Skipper",
        "line":" Good for you."
     },
     {
        "name":"Alex",
        "line":" Well, guess what? This discussion isn't over."
     },
     {
        "name":"Skipper",
        "line":" Higher mammals! You stay with us. We could use your front cortexes and opposable thumbs."
     },
     {
        "name":"Mason",
        "line":" Phil! I should wash your hands out with soap."
     },
     {
        "name":"Gloria",
        "line":" How in the hello are they gonna fix this plane?!"
     },
     {
        "name":"Alex",
        "line":" You know, grit and spit and spit. A lot of spit and grit and stick-to-it-iveness."
     },
     {
        "name":"Marty",
        "line":" That don't sound too promising."
     },
     {
        "name":"Alex",
        "line":" You're right. We're stuck here."
     },
     {
        "name":"Marty",
        "line":" Hey guys, as long as we're together, we'll be OK."
     },
     {
        "name":"Alex",
        "line":" Yeah. Yeah. But love ain't gonna get us home, guys."
     },
     {
        "name":"Man",
        "line":" Behold! The lion!"
     },
     {
        "name":"Alex",
        "line":" Hey, it's People!"
     },
     {
        "name":"Man",
        "line":" There is much to see. Moving on."
     },
     {
        "name":"Alex",
        "line":" Hey, wait! If you stop, I'll autograph those!"
     },
     {
        "name":"Nana",
        "line":" I know you!"
     },
     {
        "name":"Alex",
        "line":" You."
     },
     {
        "name":"Nana",
        "line":" It's the bad kitty!"
     },
     {
        "name":"Alex",
        "line":" Give me that!"
     },
     {
        "name":"Alex",
        "line":" How do you like some of that?!"
     },
     {
        "name":"Nana",
        "line":" Ho, ho! Uno, dos, tres!!"
     },
     {
        "name":"Alex",
        "line":" Ah-ha ha!"
     },
     {
        "name":"Nana",
        "line":" Come in, Tokyo!"
     },
     {
        "name":"Alex",
        "line":" Yeow! Owww!!"
     },
     {
        "name":"Marty",
        "line":" Right in the batteries!"
     },
     {
        "name":"Nana",
        "line":" You think an old lady can't take care of herself? (Puts her chattering teeth in her mouth) Next time, I won't go so easy on you! Thank you, dear."
     },
     {
        "name":"Man",
        "line":" Moving on!"
     },
     {
        "name":"Gloria",
        "line":" Are you out of your mind? We need our help and you harass old ladies?!"
     },
     {
        "name":"Melman",
        "line":" Oh my... Whoa!"
     },
     {
        "name":"Gloria",
        "line":" Am I trippin'?"
     },
     {
        "name":"Marty",
        "line":" All those zebras... like me. Wait a minute, where are we?"
     },
     {
        "name":"Melman",
        "line":" San Diego. This time I'm 40 percent sure."
     },
     {
        "name":"Alex",
        "line":" I know this place."
     },
     {
        "name":"Marty",
        "line":" I think it's Africa."
     },
     {
        "name":"Melman",
        "line":" Africa?"
     },
     {
        "name":"Marty",
        "line":" It's got to be. Our ancestral crib. It's in our blood. I can feel it!"
     },
     {
        "name":"Alex",
        "line":" No, it's more than that. It's like... ..d\u00e9j\u00e0 vu, like I've been here before."
     },
     {
        "name":"Marty",
        "line":" It's like Roots!"
     },
     {
        "name":"Alex",
        "line":" No, it's like... .d\u00e9j\u00e0 vu, like I've been here before."
     },
     {
        "name":"Alex",
        "line":" How! How! Me Alex! Me and me friends fly, fly in great metal bird. Then plummet! Smash ground! Go boom! Then here we emerge. We offer only happiness and good greetings."
     },
     {
        "name":"Hippo",
        "line":" Is he dancing about a plane crash?"
     },
     {
        "name":"Alex",
        "line":" Yeah. We just... yeah. I thought... Sorry."
     },
     {
        "name":"Giraffe",
        "line":" You mean you came from off the reserve?"
     },
     {
        "name":"Alex",
        "line":" Yeah, way off. From the Central Park Zoo, actually."
     },
     {
        "name":"Florrie",
        "line":" Don't strain yourself."
     },
     {
        "name":"Zuba",
        "line":" What's going on here? What's all this hubbub?"
     },
     {
        "name":"Elephant",
        "line":" They say they're from off the reserve."
     },
     {
        "name":"Zuba",
        "line":" That's impossible. Only people come from off the reserve."
     },
     {
        "name":"Alex",
        "line":" You look familiar. Do I know you?"
     },
     {
        "name":"Zuba",
        "line":" How could you possibly survive the hunters?"
     },
     {
        "name":"Gloria",
        "line":" Hunters? We didn't see any hunters."
     },
     {
        "name":"Zuba",
        "line":" What are you looking at?!"
     },
     {
        "name":"Alex",
        "line":" Me? Nothing."
     },
     {
        "name":"Zuba",
        "line":" This watering hole doesn't need any more mouths to feed. So skedaddle back to wherever you came from."
     },
     {
        "name":"Alex",
        "line":" Okay. Well, Is there a manager we could talk to?"
     },
     {
        "name":"Zuba",
        "line":" Oh, I see. You're here to challenge me!"
     },
     {
        "name":"Alex",
        "line":" What? No! No."
     },
     {
        "name":"Zuba",
        "line":" Well, that's what it looks like to me!"
     },
     {
        "name":"Florrie",
        "line":" Zuba! Wait."
     },
     {
        "name":"Zuba",
        "line":" I'm trying to take care of business..."
     },
     {
        "name":"Florrie",
        "line":" Yeah, yeah, Zuba. Hold on. Alakay? Is that you?"
     },
     {
        "name":"Alex",
        "line":" No, it's Alex. lx. Like New York Knicks."
     },
     {
        "name":"Florrie",
        "line":" Zuba, look!"
     },
     {
        "name":"Alex",
        "line":" Oh. I've always had that. The vet checked it out. It's kind of a beauty spot, really."
     },
     {
        "name":"Zuba",
        "line":" A mark."
     },
     {
        "name":"Alex",
        "line":" All right, this is a little weird."
     },
     {
        "name":"Zuba",
        "line":" Honey, he's come home."
     },
     {
        "name":"Alex",
        "line":" What?"
     },
     {
        "name":"Zuba",
        "line":" You've come home."
     },
     {
        "name":"Alex",
        "line":" Whoa!"
     },
     {
        "name":"Zuba",
        "line":" Son."
     },
     {
        "name":"Alex",
        "line":" Dad. Mom and Dad? Mom and Dad! Mom and Dad! It's my mom and dad! I got a mom and dad!"
     },
     {
        "name":"Florrie",
        "line":" Our baby's alive!"
     },
     {
        "name":"Marty",
        "line":" Dad!"
     },
     {
        "name":"Zuba",
        "line":" My son! My son is home!"
     },
     {
        "name":"Florrie",
        "line":" Alakay! Alakay has come home!"
     },
     {
        "name":"Makunga",
        "line":" Whoo!! Whoo! Alakay! Yeah! The prodigal son returns. This is perfect!"
     },
     {
        "name":"Teetsi",
        "line":" (Yawns) I thought you hated Zuba."
     },
     {
        "name":"Makunga",
        "line":" No, I do. I do. I do. I hate him. Oh, I do. And I'm going to use Alakay, yes. I'm going to use him to get rid of Zuba once and for all!"
     },
     {
        "name":"Julien",
        "line":" Giddy-up, feathered horse! Make way!"
     },
     {
        "name":"Maurice",
        "line":" Make way! Move out of the way! Stand aside!"
     },
     {
        "name":"Julien",
        "line":" New York! Hmm... It's a bit of a dump. Are you sure we're not in New Jersey? Hello, New Yorkers! Your new king is here!"
     },
     {
        "name":"Zuba",
        "line":" This calls for a celebration!"
     },
     {
        "name":"Julien",
        "line":" Maurice, I think they like me."
     },
     {
        "name":"Maurice",
        "line":" You've got to love a non-hostile takeover!"
     },
     {
        "name":"Marty",
        "line":"Excuse me. I'm Marty. I'm kind of new around here."
     },
     {
        "name":"Zebras",
        "line":"Hey, Marty!"
     },
     {
        "name":"Marty",
        "line":"You're a good-looking group! You like to run?"
     },
     {
        "name":"Zebras",
        "line":"Yeah. Running is crack-a-lackin'."
     },
     {
        "name":"Marty",
        "line":"That's right! Crack-a-lackin'. You guys speak my crack-a-lackin' language."
     },
     {
        "name":"Melman",
        "line":"What? You don't have doctors here?"
     },
     {
        "name":"Giraffe",
        "line":"Not anymore."
     },
     {
        "name":"Melman",
        "line":"Well, what if you catch a cold?"
     },
     {
        "name":"Giraffe",
        "line":"We go over to the dying holes and we die."
     },
     {
        "name":"Melman",
        "line":"Okay. You guys really need a doctor."
     },
     {
        "name":"Giraffe",
        "line":"Hey. We have an opening."
     },
     {
        "name":"Giraffe 2",
        "line":"Would you be interested?"
     },
     {
        "name":"Melman",
        "line":"Me? A doctor?"
     },
     {
        "name":"Gloria",
        "line":"It's raining men. Hallelujah! You all got it going on."
     },
     {
        "name":"Hippo",
        "line":"Why don't you have a man? You got worms?"
     },
     {
        "name":"Gloria",
        "line":"Oh, I got rid of those. Listen, girls. Manhattan is short on two things, parking and hippos."
     },
     {
        "name":"Zuba",
        "line":" Hey, everybody! I just found out that my son here is a doggone king! The King of New York Show me some of your moves, son. Come on. Don't be bashful."
     },
     {
        "name":"Alex",
        "line":" All right. This one always knocks 'em dead. Roar!"
     },
     {
        "name":"Zuba",
        "line":" Look out. The King is mad. The King is mad! Now let's welcome him back into the pride with open arms!"
     },
     {
        "name":"Zebras",
        "line":" Welcome to the herd, Marty!"
     },
     {
        "name":"Marty",
        "line":" Me? I've always wanted to be part of a herd!- It's one for all..."
     },
     {
        "name":"Zebras",
        "line":" And all for all, y'all!"
     },
     {
        "name":"Melman",
        "line":" How do I look?"
     },
     {
        "name":"Giraffe",
        "line":" Technically, a traditional witch doctor has a bone through his nose."
     },
     {
        "name":"Melman",
        "line":" Huh?"
     },
     {
        "name":"Giraffe 2",
        "line":" Don't worry... it's just a clip-on. Voil\u00e0! He's a witch doctor!"
     },
     {
        "name":"Melman",
        "line":" My mother will be so happy."
     },
     {
        "name":"Girl Hippo",
        "line":" Look out! I think Moto Moto likes you."
     },
     {
        "name":"Girl Hippo 2",
        "line":" Here he comes."
     },
     {
        "name":"Moto Moto",
        "line":" Goodness, girl... you huge."
     },
     {
        "name":"Gloria",
        "line":" Who's your friend? Or is that your butt?"
     },
     {
        "name":"Moto Moto",
        "line":" Girl you as quick as you are hefty."
     },
     {
        "name":"Gloria",
        "line":" So you're Moto Moto?"
     },
     {
        "name":"Moto Moto",
        "line":" The name's so nice, you say it twice."
     },
     {
        "name":"Gloria",
        "line":" I kind of like it, fatso."
     },
     {
        "name":"Moto Moto",
        "line":" I'll see you around, girl. It won't be hard, because you so... plumpy."
     },
     {
        "name":"Alex",
        "line":" Oof!"
     },
     {
        "name":"Makunga",
        "line":" Oops! (Chuckles) Um... I hate to be a party pooper, Zuba, but some of the other lions were wondering when you plan to banish your son."
     },
     {
        "name":"Zuba",
        "line":" What are you talking about Makunga?"
     },
     {
        "name":"Makunga",
        "line":" It's nothing, really. They're griping that Alakay never went through the rite of passage, blah, blah, blah, so technically speaking, he can't be a member of the pride. It's nonsense."
     },
     {
        "name":"Zuba",
        "line":" I had forgot about the rite of passage."
     },
     {
        "name":"Alex",
        "line":"What is it? What's this rite of passage?"
     },
     {
        "name":"Zuba",
        "line":" It's a traditional coming-of-age ceremony where young lions earn their manes by demonstrating their skills."
     },
     {
        "name":"Alex",
        "line":" Sort of a show-of-skill talent show deal?"
     },
     {
        "name":"Zuba",
        "line":" Yeah. Strutting their stuff."
     },
     {
        "name":"Alex",
        "line":" Great! A performance! I think that's up my alley, guys. If it's tradition, I want to do it. Strut my stuff. Earn my mane. I want to be Alaki."
     },
     {
        "name":"Florrie",
        "line":" Alakay."
     },
     {
        "name":"Alex",
        "line":" Alakay! Even better."
     },
     {
        "name":"Zuba",
        "line":" We will hold the rite of passage in the morning!"
     },
     {
        "name":"Makunga",
        "line":" That's wonderful! Good luck, Alakay."
     },
     {
        "name":"Alex",
        "line":" Where I'm from, we say, \"Break a leg.\""
     },
     {
        "name":"Zuba",
        "line":" That's my boy!"
     },
     {
        "name":"Julien",
        "line":" [singing] Cause I'm a private dancer A dancer for money Any old music will do--"
     },
     {
        "name":"Gloria",
        "line":" Beautiful, isn't it?"
     },
     {
        "name":"Melman",
        "line":" Yeah."
     },
     {
        "name":"Marty",
        "line":" It's amazing."
     },
     {
        "name":"Alex",
        "line":" Guys....this is where we belong."
     },
     {
        "name":"Skipper",
        "line":" Operation Tourist Trap is a go."
     },
     {
        "name":"Private",
        "line":" Oh, I like that one. That's a good one."
     },
     {
        "name":"Kowalski",
        "line":" It works on many levels sir."
     },
     {
        "name":"Skipper",
        "line":" You guys are a bunch of suck-ups."
     },
     {
        "name":"Kowalski",
        "line":" That, too."
     },
     {
        "name":"Private",
        "line":" Absolutely."
     },
     {
        "name":"Skipper",
        "line":" Stations. Stage one. Go!"
     },
     {
        "name":"Cameraman",
        "line":" Oh, no! What have I done?"
     },
     {
        "name":"Skipper",
        "line":" Come on, take the bait."
     },
     {
        "name":"Woman",
        "line":" What happened?"
     },
     {
        "name":"Man",
        "line":" What's going on?"
     },
     {
        "name":"Woman 2",
        "line":" Oh, look at the poor little guy."
     },
     {
        "name":"Man",
        "line":" Is it dead?"
     },
     {
        "name":"Skipper",
        "line":" Stage two! Go, go, go!"
     },
     {
        "name":"Cameraman",
        "line":" I will give him the kiss of life."
     },
     {
        "name":"Skipper",
        "line":" Rico! Rico! Reverse! Gas! Music!"
     },
     {
        "name":"Cameraman",
        "line":" No! Stop! Stop! Stop! Come back!"
     },
     {
        "name":"Nana",
        "line":" What is all this rock'n'roll racket?!"
     },
     {
        "name":"Private",
        "line":" Is she dead?"
     },
     {
        "name":"Skipper",
        "line":" No!"
     },
     {
        "name":"Nana",
        "line":" You hoodlums!"
     },
     {
        "name":"Man",
        "line":" Good heavens! Are you OK?"
     },
     {
        "name":"Man 2",
        "line":" Lady, I found your pocketbook."
     },
     {
        "name":"Nana",
        "line":" My handbag. Such a good boy. Nana can't survive without it."
     },
     {
        "name":"Man",
        "line":" Wow. You are one tough cookie."
     },
     {
        "name":"Nana",
        "line":" Brownies Troop 416, Yonkers."
     },
     {
        "name":"Cameraman",
        "line":" OK, nobody panic! The best thing we can do is stay together. We'll wait for another tourjeep. It may take hours, it's getting dark but..."
     },
     {
        "name":"Man",
        "line":" Where are you going?"
     },
     {
        "name":"Nana",
        "line":" I'm not staying here to be attacked by more animals. I'm too old to die."
     },
     {
        "name":"Man",
        "line":" I don't know about you guys but I'm going with her. Old lady, wait up!"
     },
     {
        "name":"Cameraman",
        "line":" Please! We need to stay.....together. Fine! We'll go that way!"
     },
     {
        "name":"Nana",
        "line":" Does anyone want a hard candy?"
     },
     {
        "name":"Florrie",
        "line":" Easy now."
     },
     {
        "name":"Zuba",
        "line":" Watch your step. And right here... OK, are you ready? This is where you always slept."
     },
     {
        "name":"Alex",
        "line":" Oh, man! Wow. Was this mine?"
     },
     {
        "name":"Zuba",
        "line":" Look at you. Look at him."
     },
     {
        "name":"Alex",
        "line":" Oh, this thing. Look, look! I remember this!"
     },
     {
        "name":"Zuba",
        "line":" He remembers."
     },
     {
        "name":"Alex",
        "line":" A little harder than..."
     },
     {
        "name":"Zuba",
        "line":" You never slept on the right end. You always slept on the bottom end."
     },
     {
        "name":"Alex",
        "line":" Is that? Is that my? Is that me?"
     },
     {
        "name":"Florrie",
        "line":" You had the cutest little paws."
     },
     {
        "name":"Zuba",
        "line":" Little, little bitty ol' paws."
     },
     {
        "name":"Florrie",
        "line":" You did that the day we lost you."
     },
     {
        "name":"Alex",
        "line":" Wow. I was so young. What happened to me?"
     },
     {
        "name":"Zuba",
        "line":" It was all my fault. I turned my back a minute and..."
     },
     {
        "name":"Florrie",
        "line":" It was not your fault. Your father did everything he could. He tracked those hunters for weeks. Far off the reserve."
     },
     {
        "name":"Zuba",
        "line":" Finally, I had to assume the hunters....well..."
     },
     {
        "name":"Florrie",
        "line":" We thought they'd killed you."
     },
     {
        "name":"Zuba",
        "line":" But my son fought them off! Don't mess with the King of New York!"
     },
     {
        "name":"Alex",
        "line":" That's right!"
     },
     {
        "name":"Zuba",
        "line":" Keep your chin in."
     },
     {
        "name":"Florrie",
        "line":" Alright. You boys be careful! Now watch out before you break something. You used to call this \"foofie.\""
     },
     {
        "name":"Alex",
        "line":" \"Foofie\"? Foofie."
     },
     {
        "name":"Zuba",
        "line":" He doesn't want that."
     },
     {
        "name":"Alex",
        "line":" This is my foofie!"
     },
     {
        "name":"Florrie",
        "line":" Zuba, you better give him his foofie."
     },
     {
        "name":"Alex",
        "line":" I mean, no, thank you, thank you. It's perfect."
     },
     {
        "name":"Zuba",
        "line":" Son, you get your rest. You have a big day tomorrow. You'll gonna need all your strength."
     },
     {
        "name":"Alex",
        "line":" I will bring the house down for you."
     },
     {
        "name":"Florrie",
        "line":" I hope so. Otherwise, your father will have to banish you."
     },
     {
        "name":"Alex",
        "line":" Jeez, Mom, really?"
     },
     {
        "name":"Zuba",
        "line":" I know you'll do us proud. You know why? You were born with it. Good night, Alakay. My boy. My own boy. My son's a king. My son's a king."
     },
     {
        "name":"Alex",
        "line":" Good night, Mom."
     },
     {
        "name":"Florrie",
        "line":" Good night, Alakay."
     },
     {
        "name":"Alex",
        "line":" Foofie. Look at foofie! My foofie! Foofie, foofie, foofie. My foofie!"
     },
     {
        "name":"Cameraman",
        "line":" No sign of civilization. Everybody appears very tired. I think we're lost. Hey Nana, do you know where you're going?"
     },
     {
        "name":"Nana",
        "line":" No, but I'm going with a skip in my step and a smile on my face."
     },
     {
        "name":"Cameraman",
        "line":" Sure, right, OK. Yeah, all right."
     },
     {
        "name":"Man",
        "line":" Oh, It's people."
     },
     {
        "name":"Man",
        "line":" Where did you come from?"
     },
     {
        "name":"Woman",
        "line":" How did you get out here?"
     },
     {
        "name":"Man 2",
        "line":" How did you get here?"
     },
     {
        "name":"Cameraman",
        "line":" Can you help us? We're lost."
     },
     {
        "name":"Man",
        "line":" We're lost too."
     },
     {
        "name":"Woman",
        "line":" It was awful. A flash of black and white and they were gone. They took the jeep!"
     },
     {
        "name":"Man",
        "line":" That happened to our jeep too!"
     },
     {
        "name":"Man 3",
        "line":" What do we do?"
     },
     {
        "name":"Man 4",
        "line":" How will we all survive?"
     },
     {
        "name":"Cameraman",
        "line":" We got nothing. No food, no water, no shelter. What are we gonna do?!"
     },
     {
        "name":"Nana",
        "line":" You can let nature get the best of you, or you can get the best of nature. Gather 'round, children. We're New Yorkers, right?"
     },
     {
        "name":"All",
        "line":" Yeah."
     },
     {
        "name":"Nana",
        "line":" We survive the concrete jungle! When we need food, we hunt for a decent hot dog stand. Am I right?"
     },
     {
        "name":"Man",
        "line":" She's right."
     },
     {
        "name":"Nana",
        "line":" When we need shelter, we build skyscrapers."
     },
     {
        "name":"Man",
        "line":" Exactly!"
     },
     {
        "name":"Nana",
        "line":" When we need water, we build a dam."
     },
     {
        "name":"Man",
        "line":" Come on, We're New Yorkers, for crying out loud!"
     },
     {
        "name":"Nana",
        "line":" If we can make it there, we can make it anywhere!"
     },
     {
        "name":"Mort",
        "line":" I'm coming, King Julien! [he starts to sing before he gets attack by a shark and runs off] Bad fishy! Bad fishy! No, shark, no! Sit! Why am I laughing?"
     },
     {
        "name":"Kowalski",
        "line":" Skipper, we have all the parts we need, but we're slightly behind schedule."
     },
     {
        "name":"Skipper",
        "line":" How slightly?"
     },
     {
        "name":"Kowalski",
        "line":" Six to nine years."
     },
     {
        "name":"Skipper",
        "line":" Sixty-nine years?"
     },
     {
        "name":"Kowalski",
        "line":" No, six to nine years."
     },
     {
        "name":"Skipper",
        "line":" Private! What happened to our thumbs?"
     },
     {
        "name":"Private",
        "line":" Haven't seen them since yesterday, sir. Darn you, Darwin!"
     },
     {
        "name":"Skipper",
        "line":" Nobody goes AWOL on my watch. Private! You're coming with me. Rico! You're coming with me! We'll track them down and bring them in for court martial."
     },
     {
        "name":"Mason",
        "line":" That won't be necessary! We've recruited a few extra thumbs for you, Skipper."
     },
     {
        "name":"Skipper",
        "line":" Well, I'll be a monkey's uncle."
     },
     {
        "name":"Mason",
        "line":" Oh, I doubt that."
     },
     {
        "name":"Skipper",
        "line":" Enough lollygagging. Let's get to work. Well divide three groups. Group Alpha, you'r in charge for sheet metal fabrication. Group Bronson you handle the assembly. Group George Peppard, you'll handle craft services. Any questions? Good! Let's get to work. I'd like to kiss you, monkey man."
     },
     {
        "name":"Mason",
        "line":" All right, but you're so darn ugly."
     },
     {
        "name":"Alex",
        "line":" Alright so, little cub scouts, just remember great dance performance comes from the heart. Comes straight from the heart, you'll never go wrong."
     },
     {
        "name":"Cub",
        "line":" Sure, mister."
     },
     {
        "name":"Makunga",
        "line":" Hey, Alakay, I just happened to walk by, I thought I'd wish you luck you're not nervous, are you? -"
     },
     {
        "name":"Alex",
        "line":" Nah, it's my thing. You know It's kinda what I do."
     },
     {
        "name":"Makunga",
        "line":" In my opinion, the key to this whole thing is choosing the right competitor."
     },
     {
        "name":"Alex",
        "line":" Oh. You mean, this is like a dance battle sort of thing? Like a dance-off?"
     },
     {
        "name":"Makunga",
        "line":" Uh... Sure."
     },
     {
        "name":"Alex",
        "line":" Great. I love that. Freestyle. Put your moves off. Who'd be a good match for me? You know just to keep things interesting."
     },
     {
        "name":"Makunga",
        "line":" Well, I wish I could help, but that's strictly against our ancient tradition and all that we all we hold sacred. But if it was me out there... I'd choose Teetsi."
     },
     {
        "name":"Alex",
        "line":" Teetsi. OK. Sounds interesting. Makunga, right? Thank you."
     },
     {
        "name":"Makunga",
        "line":" Anything for Zuba's boy. Go get 'em, tiger."
     },
     {
        "name":"Alex",
        "line":" Shake it out. A five, six, seven, eight. Let's go, let's do this."
     },
     {
        "name":"Zuba",
        "line":" Let us begin the rite of passage ceremony."
     },
     {
        "name":"Florrie",
        "line":" Come on, baby! Make Mama proud!"
     },
     {
        "name":"Zuba",
        "line":" Woman, I'm trying to take..."
     },
     {
        "name":"Alex",
        "line":" On it, Mom!"
     },
     {
        "name":"Zuba",
        "line":" Who will be the first participant?"
     },
     {
        "name":"Alex",
        "line":" Me! Oh! Me, me, me! Me! Me! Me! Me, me! Please, me?"
     },
     {
        "name":"Zuba",
        "line":" How about you? The tall, handsome one. Yeah. Choose your opponent."
     },
     {
        "name":"Alex",
        "line":" Let me see. I guess I'll pick"
     },
     {
        "name":"Alex",
        "line":" Teetsi?"
     },
     {
        "name":"Florrie",
        "line":" [shocked] Teetsi? Why did he pick Teetsi?"
     },
     {
        "name":"Zuba",
        "line":" That's my boy! He's got some gumption there! Somebody, wake him up! Wake him up."
     },
     {
        "name":"Alex",
        "line":" All right, so, Teetsi, come on. Let's do this, huh? Come on, little tsetse fly. Let's see your stuff. Bring it."
     },
     {
        "name":"Teetsi",
        "line":" Let's dance!"
     },
     {
        "name":"Alex",
        "line":" OK. But let me warn you that I am a prot\u00e9g\u00e9 of....Fosse and Robbins!"
     },
     {
        "name":"Teetsi",
        "line":" Not \"dance\" dance! Fight!"
     },
     {
        "name":"Alex",
        "line":" Dance fight! You got it."
     },
     {
        "name":"Florrie",
        "line":" Is he dancing?"
     },
     {
        "name":"Zuba",
        "line":" What's he doing?"
     },
     {
        "name":"Florrie",
        "line":" I know that boy is not dancing."
     },
     {
        "name":"Makunga",
        "line":" [trying to hold his laugh] This is even better than I thought."
     },
     {
        "name":"Zuba",
        "line":" Alakay, turn around!"
     },
     {
        "name":"Alex",
        "line":" No, Pop, it's hop, shuffle, ball change, hip swish, turn around."
     },
     {
        "name":"Zuba",
        "line":" Oh, no."
     },
     {
        "name":"Florrie",
        "line":" Alakay! Are you hurt?"
     },
     {
        "name":"Alex",
        "line":" Oh. Yeah, I am. Did I, uh... did I win?"
     },
     {
        "name":"Zuba",
        "line":" Oh no, son. How could, I mean... How could this happen? You told us you were a king. A king does not get beat."
     },
     {
        "name":"Alex",
        "line":" Well, I am a king. I'm a... I'm the King of New York. It's... It's my stage name. I'm like, uh... you know, it's for when I perform."
     },
     {
        "name":"Zuba",
        "line":" Perform?"
     },
     {
        "name":"Makunga",
        "line":" Oh, no, this is horrible! I should have not given him this idea! Who would have ever imagined that today Zuba would have to banish.... (winces) his own son?"
     },
     {
        "name":"Florrie",
        "line":" Zuba, no."
     },
     {
        "name":"Makunga",
        "line":" Zuba, yes. Sadly, the alpha lion must cast out all failures."
     },
     {
        "name":"Zuba",
        "line":" (tries to banish the son, but decides to quit the pride) Then I'm no longer the alpha lion. (He throws the staff)"
     },
     {
        "name":"Alex",
        "line":" Dad, what are you doing? Dad, no! You can't do this."
     },
     {
        "name":"Makunga",
        "line":" Who could possibly take Zuba's place? Anyone? Someone? No one? (Hits a lion by accident) You, sir! I guess not. Well, I... this is all very awkward, but I suppose I could carry this tremendous burden."
     },
     {
        "name":"Zuba",
        "line":" Hmph."
     },
     {
        "name":"Makunga",
        "line":" Teetsi! Get the hat. As your new leader, I hereby banish Alakay! He shall wear this Hat of Shame and leave the watering hole for a thousand years, or life! Whichever comes last."
     },
     {
        "name":"Zuba",
        "line":" Come on! Shoo, shoo! Get out of here! You should have told us, son. You should have told us that you weren't a real king!"
     },
     {
        "name":"Alex",
        "line":" You never told me I'd have to fight anybody!"
     },
     {
        "name":"Zuba",
        "line":" What did you expect, son?!"
     },
     {
        "name":"Alex",
        "line":" I don't know! Maybe a little fatherly advice like, \"Hey, son, it's a fight!\""
     },
     {
        "name":"Zuba",
        "line":" You're a lion aren't you?"
     },
     {
        "name":"Alex",
        "line":" But I never fought another lion!"
     },
     {
        "name":"Zuba",
        "line":" No, I guess not. You dance!"
     },
     {
        "name":"Alex",
        "line":" And other stuff! The point is your pal, Makunga, set me up back there! I mean, none of this would have happened..."
     },
     {
        "name":"Zuba",
        "line":" If he gave you that idea."
     },
     {
        "name":"Florrie",
        "line":" Zuba!"
     },
     {
        "name":"Zuba",
        "line":" Yeah, I said it!"
     },
     {
        "name":"Alex",
        "line":" A real lion. Thanks. Thanks a lot."
     },
     {
        "name":"Melman",
        "line":" Saw. Suture. Swab. You're in my light, Stephen."
     },
     {
        "name":"Stephen",
        "line":" Ooh! Say, you've got a brown spot there on your shoulder."
     },
     {
        "name":"Melman",
        "line":" Yes, that's very observant, Stephen. As you can see, I'm covered in brown spots. OK! That bone will be good as new in a few weeks."
     },
     {
        "name":"Timo",
        "line":" So I don't have to pick out a dying hole?"
     },
     {
        "name":"Melman",
        "line":" No, Timo, you got your whole life ahead of you."
     },
     {
        "name":"Timo",
        "line":" Really?"
     },
     {
        "name":"Melman",
        "line":" Go out there and grab it by the horns!"
     },
     {
        "name":"Timo",
        "line":" Thank you, Dr. Mankiewicz!"
     },
     {
        "name":"Melman",
        "line":" Break a leg! Sweet kid."
     },
     {
        "name":"Stephen",
        "line":" Um... (Clears throat) This spot looks like Witch Doctor's Disease."
     },
     {
        "name":"Melman",
        "line":" (Scoffs) Witch Doctor's Disease? That's the most ridiculous disease I've ever heard of Stephen. Whoa!"
     },
     {
        "name":"Elephant",
        "line":" Don't ask."
     },
     {
        "name":"Melman",
        "line":" Someone's been knotty. (Chuckles) Okay. This won't hurt a bit."
     },
     {
        "name":"Giraffe",
        "line":" Joe, our last witch doctor. He had a spot just like that."
     },
     {
        "name":"Melman",
        "line":" Mmm-hmm. And?"
     },
     {
        "name":"Giraffe",
        "line":" Monday, Joe. Wednesday, no Joe."
     },
     {
        "name":"Melman",
        "line":" Wednesday, no Joe?"
     },
     {
        "name":"Elephant",
        "line":" Oh, I can breathe! Thanks, doc!"
     },
     {
        "name":"Melman",
        "line":" So, this Witch Doctor's Disease is a real thing?"
     },
     {
        "name":"Giraffe",
        "line":" You'll find a cure. Hey! You've got at least 48 hours!"
     },
     {
        "name":"Melman",
        "line":" But I've never even heard of it. I mean... I don't have any penicillin. I'm gonna need a CAT scan just to get started!"
     },
     {
        "name":"Giraffe",
        "line":" We'll have a lion look you over. They'd be happy to."
     },
     {
        "name":"Marty",
        "line":" Ta-da!!"
     },
     {
        "name":"Zebras",
        "line":" He has talent. Stupendous and tremendous. Hollah!"
     },
     {
        "name":"Marty",
        "line":" Bet you've never seen that one! Knocked 'em dead in New York!"
     },
     {
        "name":"Zebra",
        "line":" Hey! Let's all give it a try!"
     },
     {
        "name":"Zebras",
        "line":" Let's do it!"
     },
     {
        "name":"Marty",
        "line":" Well, you can try all you want to, but it's gonna takes years of practice. And you'll never gonna quite get a tight stream until you build up your lip muscles to the point where you can purse your lips like this. You got it?"
     },
     {
        "name":"Zebras",
        "line":" Ta-da!"
     },
     {
        "name":"Marty",
        "line":" How did you? You guys got it right out of the box!"
     },
     {
        "name":"Zebra",
        "line":" If you can do it... ...we can do it."
     },
     {
        "name":"Zebra 2",
        "line":" It's in our blood!"
     },
     {
        "name":"Marty",
        "line":" I always thought I was a bit unique."
     },
     {
        "name":"Zebras",
        "line":" We are unique!"
     },
     {
        "name":"Zebra",
        "line":" Hey! We are like a force of nature!"
     },
     {
        "name":"Zebra 2",
        "line":" A million points of light!"
     },
     {
        "name":"Zebra 3",
        "line":" And dark stripes!"
     },
     {
        "name":"Zebras",
        "line":" Exactly the same!"
     },
     {
        "name":"Marty",
        "line":" Exactly the same."
     },
     {
        "name":"Skipper",
        "line":" Looks impressive, Kowalski, but will it fly?"
     },
     {
        "name":"Kowalski",
        "line":" Yes. If we fold it here, here and here."
     },
     {
        "name":"Skipper",
        "line":" Nice."
     },
     {
        "name":"Alex",
        "line":" Oh, man. My dad thinks I'm a total loser. I can't believe I used Makunga's idea."
     },
     {
        "name":"Zebra",
        "line":" That is definitely not crack-a-lackin'."
     },
     {
        "name":"Alex",
        "line":" It is lackin' in the crackin', my friend. I've gotta fix this."
     },
     {
        "name":"Melman",
        "line":" So....there's... There's something I gotta tell you."
     },
     {
        "name":"Gloria",
        "line":" Hey, guys. Is this place great or what?!"
     },
     {
        "name":"Alex",
        "line":" I'd go with \"or what.\""
     },
     {
        "name":"Gloria",
        "line":" Well, I'll tell you what. You're not gonna believe it, but....I got a date with Moto Moto."
     },
     {
        "name":"Melman",
        "line":" Who's Moto Moto?"
     },
     {
        "name":"Gloria",
        "line":" Oh, he's so big and handsome and big! You know what \"Moto Moto\" means?"
     },
     {
        "name":"Melman",
        "line":" Twins?"
     },
     {
        "name":"Zebra",
        "line":" It means, \"Hot Hot.\""
     },
     {
        "name":"Melman",
        "line":" \"Hot Hot\"?"
     },
     {
        "name":"Gloria",
        "line":" When did you start parlez-ing African?"
     },
     {
        "name":"Zebra",
        "line":" It's in my blood."
     },
     {
        "name":"Melman",
        "line":" Don't worry, you can flirt around with Mr. Hot Pants after I'm gone."
     },
     {
        "name":"Gloria",
        "line":" What's the deal Melman, why am I the parade and you're the rain?"
     },
     {
        "name":"Melman",
        "line":" Why are you driving your parade under my rain?"
     },
     {
        "name":"Gloria",
        "line":" Maybe I'll just parade myself"
     },
     {
        "name":"Alex",
        "line":" Whoa, guys."
     },
     {
        "name":"Melman",
        "line":" Fine by me by the way. Main Street's mine!"
     },
     {
        "name":"Gloria",
        "line":" Well, you can have your old stinking main street!"
     },
     {
        "name":"Melman",
        "line":" And you can take your hotee-tot float and Mr. Hotee Moto Moto..."
     },
     {
        "name":"Zebra",
        "line":" What are we talking about?"
     },
     {
        "name":"Alex",
        "line":" Melman, why don't you just tell her?"
     },
     {
        "name":"Melman",
        "line":" What? Tell her? What are you... I don't know what you're talking about."
     },
     {
        "name":"Gloria",
        "line":" So I guess I'll go, then."
     },
     {
        "name":"Melman",
        "line":" You know what? Don't bother."
     },
     {
        "name":"Gloria",
        "line":" Don't get up on my account."
     },
     {
        "name":"Alex",
        "line":" Melman! Gloria!"
     },
     {
        "name":"Zebra",
        "line":" I thought you guys were friends!"
     },
     {
        "name":"Alex",
        "line":" Come on guys. Marty's absolutely right."
     },
     {
        "name":"Zebra",
        "line":" Marty?"
     },
     {
        "name":"Marty",
        "line":" Marty?"
     },
     {
        "name":"Alex",
        "line":" Marty?"
     },
     {
        "name":"Marty",
        "line":"What the heck is going on?"
     },
     {
        "name":"Alex",
        "line":" You're not? Oh! He was... I thought he... You're not him. He's... Oh."
     },
     {
        "name":"Marty",
        "line":"You thought that guy...was me?"
     },
     {
        "name":"Alex",
        "line":" No. I mean, yes, you... Guys, come on."
     },
     {
        "name":"Zebra",
        "line":" You thought I was him?"
     },
     {
        "name":"Alex",
        "line":" You guys kind of do look a little... You look a lot alike. Marty, you look a lot alike. You laugh alike. Talk alike. He has the same speech pattern. It's a little weird, really. I mean, come on. Marty."
     },
     {
        "name":"Marty",
        "line":" So you're saying there's nothing unique about me. I'm just like any other zebra."
     },
     {
        "name":"Alex",
        "line":" No. Of course you're different!"
     },
     {
        "name":"Both",
        "line":" How?"
     },
     {
        "name":"Alex",
        "line":" Okay, OK, I can't tell you apart. Maybe you could wear a bell or something. I don't know."
     },
     {
        "name":"Marty",
        "line":" A bell?"
     },
     {
        "name":"Alex",
        "line":" OK, not a bell. Bell's a bad idea."
     },
     {
        "name":"Marty",
        "line":" How about a T-shirt that says, \"I'm with stupid\"?"
     },
     {
        "name":"Zebra",
        "line":" I'm not stupid!"
     },
     {
        "name":"Marty",
        "line":" Not you, stupid! Him, stupid!"
     },
     {
        "name":"Alex",
        "line":" You know what, while you've been off doing the prancing pony with your new posse, I've been having the worst day of my life. Okay?"
     },
     {
        "name":"Marty",
        "line":" It's always about you, isn't it?"
     },
     {
        "name":"Alex",
        "line":" My problems are just a little bit bigger than yours Marty. Alright, I couldn't tell you apart. So what?! Yeah, fine. Run away, Marty! Run away! That's what you do best! Just like back in New York!"
     },
     {
        "name":"Marty",
        "line":" I'm right here. But you can't tell that, right? Your one-of-a-million friend hopes you enjoy your bigger-than-anyone-else's problems alone!"
     },
     {
        "name":"Alex",
        "line":" Good, leave! I don't need you to help me solve my problems! You know what? You're a dime a dozen! I can't tell which one's Marty! Which one's Marty? Wait a minute. Oh, yeah, I don't care!"
     },
     {
        "name":"Zebra",
        "line":" Nice hat, you showoff!"
     },
     {
        "name":"Alex",
        "line":" Marty.....don't go."
     },
     {
        "name":"Julien",
        "line":" Giddy-up, giddy-up! Look, Maurice! Here's the perfect spot for my summer palace! So please fill in all these holes and relocate the riff-raff. Oh. Who'd leave a perfectly good head?"
     },
     {
        "name":"Maurice",
        "line":" What a waste."
     },
     {
        "name":"Melman",
        "line":" Tell me about it. I'm in my prime here. I'm terminal, you know? I probably only have another two days left to live."
     },
     {
        "name":"Maurice",
        "line":" That's a bummer, man."
     },
     {
        "name":"Julien",
        "line":" If I, King Julien... that's my name....only had two days left to live, I would do all the things I've ever dreamed of doing."
     },
     {
        "name":"Melman",
        "line":" Like what?"
     },
     {
        "name":"Julien",
        "line":" I'd love to become a professional whistler. I'm pretty amazing at it now, but I want to get even better, make my living out of it. [raspberries] You know what else I would do? I would invade a neighboring country and impose my own ideology, even if they didn't want it!"
     },
     {
        "name":"Melman",
        "line":" Easy for you to say. You're a king."
     },
     {
        "name":"Julien",
        "line":" Yes. And you are only just a sad little head. There must be something you want to do before you die!"
     },
     {
        "name":"Melman",
        "line":" Well, there is this one thing."
     },
     {
        "name":"Julien",
        "line":" What? Tell me."
     },
     {
        "name":"Melman",
        "line":" No, I couldn't."
     },
     {
        "name":"Julien",
        "line":" What is it?"
     },
     {
        "name":"Melman",
        "line":" You know, I never told Gloria how I feel about her."
     },
     {
        "name":"Julien",
        "line":" What is it? Please tell me!"
     },
     {
        "name":"Melman",
        "line":" I never had the guts to tell Gloria how I feel about her. How I've always felt about her."
     },
     {
        "name":"Julien",
        "line":" Fine. Don't tell me! Oh...Is it a woman? You didn't tell me it's a woman."
     },
     {
        "name":"Maurice",
        "line":" What are you afraid of? You're a dead man anyway."
     },
     {
        "name":"Melman",
        "line":" Yeah. Yeah. You're right."
     },
     {
        "name":"Julien",
        "line":" Well, you've got to march right up to this woman. Look her right in the eye. Lean forward. Just a little, or almost all the way. Then you let her lean forward a little until you're....just lips' distance away from each other. Then you tell her how much you hate her."
     },
     {
        "name":"Melman",
        "line":" Actually, it's more like love her."
     },
     {
        "name":"Julien",
        "line":" Oh, you sly dog! Woof, woof! You're a real player. Now listen to me. You got to rise up. You hearing me?"
     },
     {
        "name":"Maurice",
        "line":" He didn't hear you."
     },
     {
        "name":"Julien",
        "line":" I can't hear you!"
     },
     {
        "name":"Melman",
        "line":" Yeah."
     },
     {
        "name":"Julien",
        "line":" Good. You got to rise up!"
     },
     {
        "name":"Maurice",
        "line":" Rising up!"
     },
     {
        "name":"Julien",
        "line":" You're gonna get out of the hole!"
     },
     {
        "name":"Melman",
        "line":" I'm rising out of the ground!"
     },
     {
        "name":"Julien",
        "line":" He's rising, Maurice."
     },
     {
        "name":"Maurice",
        "line":" I'm rising, Maurice!"
     },
     {
        "name":"Maurice",
        "line":" Rising!"
     },
     {
        "name":"Julien",
        "line":" You go right up to this woman!"
     },
     {
        "name":"Maurice",
        "line":" Do you feel it?"
     },
     {
        "name":"Julien",
        "line":" Go up to her face!"
     },
     {
        "name":"Maurice",
        "line":" Tell the truth!"
     },
     {
        "name":"Melman",
        "line":" I'm going to tell her!"
     },
     {
        "name":"Julien",
        "line":" And then you say, \"Baby, I dig you!\""
     },
     {
        "name":"Melman",
        "line":" Yeah! I'm going to do it! I'm going to do it!"
     },
     {
        "name":"Julian",
        "line":" I love that happy little head."
     },
     {
        "name":"Moto Moto",
        "line":" [singing] She loves me She loves my eyes, She loves me She loves my thighs, She loves my roundness, She love that I'm chunky She love that I'm plumpy, She love my heftiness She love my zestines She love me restlessly She love me forever She love me... ..'cause she love me"
     },
     {
        "name":"Gloria",
        "line":" Moto Moto...before things get too serious, well, I was wondering, if I were to, for example, stay here... l'd like to ask you..."
     },
     {
        "name":"Moto Moto",
        "line":" Let your candied lips be the messengers to my... ear canal."
     },
     {
        "name":"Gloria",
        "line":" Well I don't know. I have so many questions."
     },
     {
        "name":"Moto Moto",
        "line":" Well I promise the answer will always be yes. Unless no is required."
     },
     {
        "name":"Gloria",
        "line":" Okay. So what is it about me that you find so interesting?"
     },
     {
        "name":"Moto Moto",
        "line":" You're the most plumpenest girl I've ever met."
     },
     {
        "name":"Gloria",
        "line":" OK. Other than that."
     },
     {
        "name":"Moto Moto",
        "line":" Let's see. Yeah, well, you know... you chunky."
     },
     {
        "name":"Gloria",
        "line":" Right."
     },
     {
        "name":"Moto Moto",
        "line":" My gosh, girl, you huge."
     },
     {
        "name":"Gloria",
        "line":" You said that."
     },
     {
        "name":"Moto Moto",
        "line":" Yeah, that's right. We don't have to talk no more."
     },
     {
        "name":"Melman",
        "line":" Gloria! Gloria."
     },
     {
        "name":"Gloria",
        "line":" Melman. Melman, I want you to meet Moto Moto."
     },
     {
        "name":"Melman",
        "line":" Moto Moto. Yeah, nice to meet you. Well I guess I..."
     },
     {
        "name":"Gloria",
        "line":" It's OK, Melman. Apology accepted."
     },
     {
        "name":"Melman",
        "line":" Oh. Yeah, right, that. That's why I... Good. OK. Well, that's it, then."
     },
     {
        "name":"Moto Moto",
        "line":" You're Good. We're kind of busy here, man."
     },
     {
        "name":"Melman",
        "line":" No. No, that's not it. Listen, Mototo, you better treat this lady like a queen. Because you, my friend, you found yourself the perfect woman. If I was ever so lucky to find the perfect woman, I'd would give her flowers every day. And not just any flowers. OK? Her favorites are orchids. White. And breakfast in bed. Six loaves of wheat toast, butter on both sides. No crust, the way she likes it. I'd be her shoulder to cry on and her best friend. I'd spend every day thinking of how to make her laugh. She has the most amazing laugh. That's what I would do if I were you. But I'm not, so you do it."
     },
     {
        "name":"Moto Moto",
        "line":" OK. What?"
     },
     {
        "name":"Hippo",
        "line":" That was beautiful."
     },
     {
        "name":"Moto Moto",
        "line":" Anyways, where were we?"
     },
     {
        "name":"Gloria",
        "line":" I'm \"huge\"?"
     },
     {
        "name":"Alex",
        "line":" Surprised to see me, Makunga? Well, I'm here to set things straight, like a real lion! Is this real enough for you? How about this? This is for setting me up! This is for stealing my dad's job! This is for humiliating my family! And making me look like a fool! YAAAHH!!! Had enough? Sure, fly away. Coward!"
     },
     {
        "name":"Giraffe",
        "line":" The water. It's gone."
     },
     {
        "name":"Giraffe 2",
        "line":" Oh no."
     },
     {
        "name":"Hippo",
        "line":" The watering hole is never gone dry before."
     },
     {
        "name":"Giraffe",
        "line":" We'll need a lot more dying holes."
     },
     {
        "name":"Bobby",
        "line":" How could this happen?"
     },
     {
        "name":"Makunga",
        "line":" Out of my way! What is going on here!?!"
     },
     {
        "name":"Bobby",
        "line":" The watering hole's dried up! There's barely water for one of us!"
     },
     {
        "name":"Makunga",
        "line":" Yes. Good observation, Shirley."
     },
     {
        "name":"Bobby",
        "line":" I'm Bobby."
     },
     {
        "name":"Giraffe",
        "line":" Makunga, what do we do?"
     },
     {
        "name":"Makunga",
        "line":" Quiet! Listen up! I'm afraid there is only one solution to this horrible crisis"
     },
     {
        "name":"Hippo",
        "line":" Fight for it? We can't fight for it."
     },
     {
        "name":"Cape Buffalo",
        "line":" That's crazy."
     },
     {
        "name":"Bobby",
        "line":" That's not fair. You'd win!"
     },
     {
        "name":"Makunga",
        "line":" Exactly, Shirley."
     },
     {
        "name":"Bobby",
        "line":" I'm Bob..."
     },
     {
        "name":"Makunga",
        "line":" Sorry, folks, but life isn't fair. I'm in charge now, thanks to Alakay, the dancing lion."
     },
     {
        "name":"Timo",
        "line":" Please, Makunga, this is the only water on the reserve."
     },
     {
        "name":"Makunga",
        "line":" If you're thirsty, you'll have to look for water off the reserve."
     },
     {
        "name":"Animals",
        "line":" Off the reserve? It's too dangerous! Hunters would shoot us! No one leaves the reserve and survives!"
     },
     {
        "name":"Alex",
        "line":" I left the reserve! And survived. I can do something about this. Looks like a clogged pipe, like we get in New York. I'll travel upriver..."
     },
     {
        "name":"Animals",
        "line":" Upriver? Off the reserve?"
     },
     {
        "name":"Makunga",
        "line":" You? [laughing] HA!"
     },
     {
        "name":"Alex",
        "line":" Yeah. I'll unclog the pipe and bring back your water."
     },
     {
        "name":"Makunga",
        "line":" Great! I'd help you pack, but by the looks of that hat, I see you're all set! [laughing]"
     },
     {
        "name":"Alex",
        "line":" Yeah. Fine. Go ahead, laugh. Laugh your mane off. I'm gonna prove you wrong."
     },
     {
        "name":"Makunga",
        "line":" Maybe you should try a little rain dance."
     },
     {
        "name":"Giraffe",
        "line":" Zuba would know what to do."
     },
     {
        "name":"Animal",
        "line":" Where's Zuba!?"
     },
     {
        "name":"Elephant",
        "line":" You don't care about us!"
     },
     {
        "name":"Hippo",
        "line":" Zuba should be in charge, not you."
     },
     {
        "name":"Makunga",
        "line":" (growls) ALL RIGHT!!! Fine. As an added measure, I will consult with Zuba!"
     },
     {
        "name":"Alex",
        "line":" Marty? Hey! Marty! Marty? Marty."
     },
     {
        "name":"Zebra",
        "line":" Where'd you get the fruity hat?"
     },
     {
        "name":"Alex",
        "line":" Excuse me! Excuse me! Hi. Is Marty in there?"
     },
     {
        "name":"Zebras",
        "line":" Marty? Anyone seen Marty? Which one of us is Marty?"
     },
     {
        "name":"Alex",
        "line":" All right. Well, if you see him, tell him his friend Alex came to say goodbye."
     },
     {
        "name":"Zebra",
        "line":" Goodbye? Don't go. Where are you going Can we come?"
     },
     {
        "name":"Alex",
        "line":" No. This is something I have to do this alone."
     },
     {
        "name":"Zebras",
        "line":" You can't leave the reserve! What are you doing? They'll get your hat. Hunters are everywhere! Could you leave the hat?"
     },
     {
        "name":"Alex",
        "line":" Marty, Look! I know you're in there. Before I go, I got something I want to say. You've been a great friend. You've helped me so often to see the bright side of my problems that I never think of you is having any. I wasn't there for you when you needed me. Just like back at the zoo. What kind of friend does that make me? A pretty lousy friend, I guess. Well I just want you to know that I... You're one in a million."
     },
     {
        "name":"Zebra",
        "line":" This is touching. It is touching."
     },
     {
        "name":"Alex",
        "line":" So could you turn around so I can tell you to your face? That's right. Gotcha! I see you in there! Yeah, you. You, right there. Twelfth row, two hundred and third from the left. That's you, Marty. I know it's you. Know what makes you special? These guys are white with black stripes. You're black with white stripes. You're a dreamer, Marty. Always have been. You have great taste in music and horrible taste in friends. Well, not Melman and Gloria, but me."
     },
     {
        "name":"Marty",
        "line":" OK, I'm in."
     },
     {
        "name":"Alex",
        "line":" Marty, you can't come with me."
     },
     {
        "name":"Marty",
        "line":" I don't believe you don't have a choice."
     },
     {
        "name":"Zebras",
        "line":" People are out there! You're crazy! Come back! The people will get you! Don't lose the hat! Bye, hat!"
     },
     {
        "name":"Gloria",
        "line":" Any water?!"
     },
     {
        "name":"Moto Moto",
        "line":" No, just more diamonds and gold."
     },
     {
        "name":"Gloria",
        "line":" Okay. Don't give up hope."
     },
     {
        "name":"Julien",
        "line":" Listen up! I will help you! There's only one way to get your precious water. I, your beloved King Julien must simply make a small sacrifice to my good friends, the water gods, in the volcano!"
     },
     {
        "name":"Rhino",
        "line":" What does that do?"
     },
     {
        "name":"Julien",
        "line":" What does that do? Excellent question. My sacrifice goes in the volcano. The friendly gods eat up my sacrifice. \" Very nice. Thank you for the sacrifice.\" \"Here, have another sacrifice.\" \"No, I've had enough.\" \" Listen I'm gonna insulted unless you have another.\" \"I don't want another sacrifice okay?!\" \"Look at you! You look skinny!\" \"No! I've had enough! Is that clear?!\" The gods eat the sacrifice. They are grateful. They give me some water, and then I give it to you."
     },
     {
        "name":"Gloria",
        "line":" What?"
     },
     {
        "name":"Female Okapi",
        "line":" Does it work?"
     },
     {
        "name":"Julien",
        "line":" No! I mean, yes. Well, Maurice?"
     },
     {
        "name":"Maurice",
        "line":" Ah, it's fifty-fifty."
     },
     {
        "name":"All",
        "line":" We'll do it!"
     },
     {
        "name":"Julien",
        "line":" Excellent! Now all I need is someone who would like to go into the volcano and get eaten by gods. Any hands! Hands, anybody! I need someone, perhaps who has never found love, who could look death straight in the eyeball. A real, genuine hero."
     },
     {
        "name":"Melman",
        "line":" I'll do it."
     },
     {
        "name":"Gloria",
        "line":" Melman?"
     },
     {
        "name":"Julien",
        "line":" Hurry up! Before we all come to our senses!"
     },
     {
        "name":"Gloria",
        "line":" Melman, what is wrong with you?"
     },
     {
        "name":"Melman",
        "line":" I'm dying anyway. If there's a chance it'll get you water, it'll be worth it."
     },
     {
        "name":"Gloria",
        "line":"Are you nuts?"
     },
     {
        "name":"Melman",
        "line":" Gloria I want you to know, back at the zoo, it was never the doctors or prescriptions that kept me going. It was always you. Seeing you every day, that's what kept me going."
     },
     {
        "name":"Gloria",
        "line":" Melman! Wait!"
     },
     {
        "name":"Florrie",
        "line":" You going to mope like this all day?"
     },
     {
        "name":"Zuba",
        "line":" Hmm."
     },
     {
        "name":"Florrie",
        "line":" Don't \"hmm\" me. Listen, Zuba. A miracle happened. Our son has came back to us. How come that is not good enough for you?"
     },
     {
        "name":"Zuba",
        "line":" What are you saying, woman?"
     },
     {
        "name":"Florrie",
        "line":" We lost him once, Zuba. Let's not lose him again."
     },
     {
        "name":"Makunga",
        "line":" Zuba! Zuba!"
     },
     {
        "name":"Zuba",
        "line":" Get out of here!"
     },
     {
        "name":"Florrie",
        "line":" What do you want Makunga?"
     },
     {
        "name":"Makunga",
        "line":" It's awful. The watering hole is dried up."
     },
     {
        "name":"Zuba",
        "line":" DRIED UP!? That's impossible!!"
     },
     {
        "name":"Makunga",
        "line":" There's nothing left!"
     },
     {
        "name":"Zuba",
        "line":" You're alpha lion, Makunga. What are you gonna do about it?"
     },
     {
        "name":"Makunga",
        "line":" Your son, Alakay, he said he could fix it. He's gone upriver."
     },
     {
        "name":"Zuba",
        "line":" Off The Reserve?!"
     },
     {
        "name":"Florrie",
        "line":" No!"
     },
     {
        "name":"Makunga",
        "line":" I tried to stop him. I told him it was suicide. But he was determined to prove himself to you."
     },
     {
        "name":"Zuba",
        "line":" You stay here, in case he comes back!"
     },
     {
        "name":"Makunga",
        "line":" Hurry, Zuba! I'm so parched."
     },
     {
        "name":"Marty",
        "line":" Is this place starting to freak you out?"
     },
     {
        "name":"Alex",
        "line":" We'll slip in, find the problem. Hunters will never know we were here."
     },
     {
        "name":"Marty",
        "line":" Why are we doing this?"
     },
     {
        "name":"Alext",
        "line":" Look Marty, maybe my dad will think I'm... I want to show him I'm a real lion."
     },
     {
        "name":"Marty",
        "line":" As opposed to a chocolate lion."
     },
     {
        "name":"Alex",
        "line":" Shh. I know this may sound hard to believe, but apparently, lions don't dance."
     },
     {
        "name":"Marty",
        "line":" [shocked] WHAT?!?"
     },
     {
        "name":"Alex",
        "line":" As far as my dad is concerned."
     },
     {
        "name":"Marty",
        "line":" As far as people are concerned, you're a huge hit."
     },
     {
        "name":"Alex",
        "line":" That was New York. This is Africa... much tougher crowd. Marty, this is it! This is the clog! Come on."
     },
     {
        "name":"Marty",
        "line":" Well, there's the water."
     },
     {
        "name":"Alex",
        "line":" Marty, stay down. Look at that."
     },
     {
        "name":"Nana",
        "line":" Knit one, purl two."
     },
     {
        "name":"Alex",
        "line":" It's her."
     },
     {
        "name":"Man",
        "line":" Is this right?"
     },
     {
        "name":"Nana",
        "line":" Very good."
     },
     {
        "name":"Man",
        "line":" Nana, slow down."
     },
     {
        "name":"Nana",
        "line":" You're a little tangled, aren't you? No, don't pull. I'll do it."
     },
     {
        "name":"Alex",
        "line":" We need dynamite. Got any dynamite?"
     },
     {
        "name":"Marty",
        "line":" Oh, snap! I just used my last stick this morning!"
     },
     {
        "name":"Marty",
        "line":" Savages!"
     },
     {
        "name":"Alex",
        "line":" Evasive maneuvers!"
     },
     {
        "name":"Marty",
        "line":" Serpentine, serpentine!"
     },
     {
        "name":"Alex",
        "line":" Squiggly squid maneuver!"
     },
     {
        "name":"Marty",
        "line":" Zag, zig-zag, zig ziggy zag!"
     },
     {
        "name":"Alex",
        "line":" No, no! Squiggly squid!"
     },
     {
        "name":"Marty",
        "line":" Etch A Sketch!"
     },
     {
        "name":"Alex",
        "line":" That's too complex! Octopus, octopus!"
     },
     {
        "name":"Marty",
        "line":" Alex!"
     },
     {
        "name":"Alex",
        "line":" Run, Marty!"
     },
     {
        "name":"Marty",
        "line":" I can't leave you here!"
     },
     {
        "name":"Alex",
        "line":" Go get help! Squiggly squid maneuver! Go! Go! Squiggly squid!"
     },
     {
        "name":"Marty",
        "line":" ETCH A SKETCH!!! ETCH A SKETCH!!!"
     },
     {
        "name":"Melman",
        "line":" OK. OK, OK, OK. OK, here we go. OK, OK. Here we go! Here we go!"
     },
     {
        "name":"Joe",
        "line":" What's all the hoopla about?"
     },
     {
        "name":"Giraffe",
        "line":" Joe?"
     },
     {
        "name":"Giraffe 2",
        "line":" Joe the Witch Doctor? We thought you were dead!"
     },
     {
        "name":"Joe",
        "line":" So did I. Then I realized I'm covered in brown spots."
     },
     {
        "name":"Giraffe",
        "line":" So Melman's not dying! [suddenly realizing] Melman's not dying!"
     },
     {
        "name":"Giraffe 1",
        "line":" Oh, no!"
     },
     {
        "name":"Gloria",
        "line":" Excuse me! Melman! Move! Don't do this! Julien, stop this! This is crazy!"
     },
     {
        "name":"Julian",
        "line":" Oh, suddenly throwing a giraffe into a volcano to make water is crazy!"
     },
     {
        "name":"Gloria",
        "line":" Yes! Please, Melman! STOOOP!"
     },
     {
        "name":"Melman",
        "line":" Gloria?"
     },
     {
        "name":"Gloria",
        "line":" You can't do this!"
     },
     {
        "name":"Melman",
        "line":" Why not?"
     },
     {
        "name":"Gloria",
        "line":" Because...Oh!"
     },
     {
        "name":"Gloria",
        "line":"You can't do this, Melman."
     },
     {
        "name":"Melman",
        "line":" First, that hurts. Second, I've only got 18 hours to live, anyway."
     },
     {
        "name":"Gloria",
        "line":" Melman, I gotta know...did you mean those things you said about me?"
     },
     {
        "name":"Melman",
        "line":" Of course I did."
     },
     {
        "name":"Gloria",
        "line":" That's crazy."
     },
     {
        "name":"Melman",
        "line":" It is?"
     },
     {
        "name":"Gloria",
        "line":" It's crazy to think I had to go halfway around the world....to find out the perfect guy for me lived right next door."
     },
     {
        "name":"Melman",
        "line":" Then it's you and me, neighbor. You and me for the next 18 hours."
     },
     {
        "name":"Gloria",
        "line":" I'll take whatever you got."
     },
     {
        "name":"Julien",
        "line":" Maurice, what happened?"
     },
     {
        "name":"Maurice",
        "line":" I believe the fat lady has sung."
     },
     {
        "name":"Marty",
        "line":" Hey! What's going on here?"
     },
     {
        "name":"Gloria",
        "line":" Marty!"
     },
     {
        "name":"Marty",
        "line":" Hey. Listen up. Alex is in big trouble! We got to get upriver fast!"
     },
     {
        "name":"Melman",
        "line":" What about the plane?"
     },
     {
        "name":"Marty",
        "line":" Perfect! Come on!"
     },
     {
        "name":"Mason",
        "line":" The plane won't be fixed until the suits meet our demands. Now, maternity leave."
     },
     {
        "name":"Skipper",
        "line":" Maternity leave? You're all males."
     },
     {
        "name":"Marty",
        "line":" Look! We need that plane for a rescue mission."
     },
     {
        "name":"Skipper",
        "line":" Well. there's nothing I can do until we bust up this union."
     },
     {
        "name":"Gloria",
        "line":" I'm gonna get the bust up all of you if you don't get this plane going."
     },
     {
        "name":"Skipper",
        "line":" Can't you see these commies have my hands tied here? No maternity leave."
     },
     {
        "name":"Mason",
        "line":" Maybe a certain someone wouldn't want these blowing around on the savanna?"
     },
     {
        "name":"Skipper",
        "line":" All right. You get your maternity leave."
     },
     {
        "name":"Marty",
        "line":" Finally."
     },
     {
        "name":"Alex",
        "line":" Where we headed? What's going on? Where are we going? Oh, no! Please! Don't put me there! No! This is wrong."
     },
     {
        "name":"Nana",
        "line":" You see? You are survivors. Now, how about a nice lion casserole?"
     },
     {
        "name":"Cameraman",
        "line":" You can't eat a lion."
     },
     {
        "name":"Nana",
        "line":" Don't worry, it tastes like chicken."
     },
     {
        "name":"Alex",
        "line":" No, no, no. Don't listen to her. She's out of her mind, people! I'm from New York City too! It's me, Alex the lion! From Central Park! Dad!"
     },
     {
        "name":"Alex",
        "line":" Dad!"
     },
     {
        "name":"Zuba",
        "line":" What were you thinking, son? You got no business being out here! This is it I want you to stay behind me."
     },
     {
        "name":"Alex",
        "line":" No Dad. They're New Yorkers. They're just rude and frightened people."
     },
     {
        "name":"Cameraman",
        "line":" Stay back!"
     },
     {
        "name":"Nana",
        "line":" You'd let your dinner get away?"
     },
     {
        "name":"Zuba",
        "line":" What are you doing?"
     },
     {
        "name":"Alex",
        "line":" The only thing I know how to do."
     },
     {
        "name":"Man",
        "line":" Huh?"
     },
     {
        "name":"Man",
        "line":" What the heck?"
     },
     {
        "name":"Cameraman",
        "line":" Hey, I know those moves. Alex?"
     },
     {
        "name":"Woman",
        "line":" It's Alex the lion!"
     },
     {
        "name":"Man",
        "line":" From Central Park!"
     },
     {
        "name":"Man 2",
        "line":" It is Alex!"
     },
     {
        "name":"Man 3",
        "line":" Only one lion can move like that!"
     },
     {
        "name":"Cameraman",
        "line":" He's beautiful."
     },
     {
        "name":"Zuba",
        "line":" I can't believe it."
     },
     {
        "name":"Man",
        "line":" How does he do that?"
     },
     {
        "name":"Alex",
        "line":" Dad, what are you doing?"
     },
     {
        "name":"Zuba",
        "line":" I'm dancing with my son! I think."
     },
     {
        "name":"Alex",
        "line":" Don't think, Dad. Feel! Butterfly!"
     },
     {
        "name":"Zuba",
        "line":" I'm feeling it! I'm feeling it!"
     },
     {
        "name":"Both",
        "line":" Roar!!!"
     },
     {
        "name":"Nana",
        "line":" That was beautiful. Now let's eat!"
     },
     {
        "name":"Alex",
        "line":" Dad, look out!"
     },
     {
        "name":"Zuba",
        "line":" What the...?"
     },
     {
        "name":"Marty",
        "line":" Alex! Get in!"
     },
     {
        "name":"Alex",
        "line":" She's got a gun! Let's get out while we can!"
     },
     {
        "name":"Marty",
        "line":" What?!"
     },
     {
        "name":"Alex",
        "line":" ''She's got a gun! Let's get out while we can!'' Pass it on!"
     },
     {
        "name":"Mason",
        "line":" He said let's have some fun and take out the dam. Basset hound."
     },
     {
        "name":"Marty",
        "line":" Skipper! Alex wants to take out the dam!"
     },
     {
        "name":"Skipper",
        "line":" All right! But it's his funeral."
     },
     {
        "name":"Marty",
        "line":" What?!"
     },
     {
        "name":"Skipper",
        "line":" Hard to port!"
     },
     {
        "name":"Gloria",
        "line":" Aye-aye, Skippy!"
     },
     {
        "name":"Melman",
        "line":" Bring it on! Bring it on! Whoo!"
     },
     {
        "name":"Alex and Zuba",
        "line":" Whoa! Whoa! Whoa!"
     },
     {
        "name":"Nana",
        "line":" Come back! That's my dinner!"
     },
     {
        "name":"Skipper",
        "line":" Kowalski, full throttle. Music!"
     },
     {
        "name":"Private",
        "line":" (Puts the music of Copacabana) Ooh! I like this song."
     },
     {
        "name":"Kowalski",
        "line":" It never gets old."
     },
     {
        "name":"Skipper",
        "line":" It does have a catchy hook. Come about! Bring her in low! Hold onto your skirts! It's dam-busting time!"
     },
     {
        "name":"Gloria",
        "line":" Hold on tight, baby! Here we go!"
     },
     {
        "name":"Alex",
        "line":" Tell them no! Pull up! They'll kill us! There's got to be another way! Pass it on!"
     },
     {
        "name":"Mason",
        "line":" He said no pull up. Kill us. There is no other way. Basset hound."
     },
     {
        "name":"Marty",
        "line":" Are you sure?"
     },
     {
        "name":"Skipper",
        "line":" Men, there is no sacrifice greater than someone else's. (Nana shoots Skipper's doll) No! MEDIC!! Ramming speed!!"
     },
     {
        "name":"Nana",
        "line":" Bring it on!"
     },
     {
        "name":"Nana",
        "line":" Bad kitties."
     },
     {
        "name":"Julien",
        "line":" I don't know why the sacrifice didn't work. The science seemed so solid. I'd jump right in that volcano if I wasn't so good at whistling."
     },
     {
        "name":"Mort",
        "line":" Oh! It's you! I found you!"
     },
     {
        "name":"Julien",
        "line":" Mort?"
     },
     {
        "name":"Mort",
        "line":" [laughing then screams after he sees the shark] Bad fishy!"
     },
     {
        "name":"Julien and Maurice",
        "line":" AHHHH!!!"
     },
     {
        "name":"Maurice",
        "line":" Whoa. I wonder if the gods like seafood."
     },
     {
        "name":"Julien",
        "line":" Let's find out. Look, Maurice."
     },
     {
        "name":"Maurice",
        "line":" That was quick."
     },
     {
        "name":"Julien",
        "line":" I did it! I did it! I did it! OK, you did it!"
     },
     {
        "name":"Mort",
        "line":" Oh, yes!!!!"
     },
     {
        "name":"Hippo",
        "line":" Look!"
     },
     {
        "name":"Animals",
        "line":" It's Alakay! It's Zuba! You did it! Alakay, Zuba, you did it!"
     },
     {
        "name":"Florrie",
        "line":" Zuba! Alakay! You're back! I'm so glad you're safe!"
     },
     {
        "name":"Makunga",
        "line":" Out of my way. Well, well, well, well, well. You know, Zuba, if I remember correctly, you quit the pride. And you were kicked out. So don't think for an instant that this changes anything."
     },
     {
        "name":"Alex",
        "line":" You're right. In fact, we humbly present you with this token of appreciation. It's a man bag. Very popular where I come from."
     },
     {
        "name":"Makunga",
        "line":" I don't know what to say."
     },
     {
        "name":"Alex",
        "line":" You can still be tough and carry your stuff."
     },
     {
        "name":"Makunga",
        "line":" My! Does the strap adjust? Yes. I think this will go very nicely for me when I go out hiking. But I'm afraid you're still banished."
     },
     {
        "name":"Alex",
        "line":" We figured you'd say that."
     },
     {
        "name":"Nana",
        "line":" My handbag! You bad kitty! (She kicks Makunga's nuts, steps on her foot, use her ruler to hit his hand and gives him wet willy!)"
     },
     {
        "name":"Makunga",
        "line":" No, no, no, no, no, no, no! (And Nana slaps Makunga's butt)"
     },
     {
        "name":"Alex",
        "line":" Ow! (And Nana takes Makunga back to her camp so that she and her hunters can cook him alive.)"
     },
     {
        "name":"Zuba",
        "line":" You deserve this, son. Welcome to the pride."
     },
     {
        "name":"Alex",
        "line":" Thanks, Dad. But this belongs to you."
     },
     {
        "name":"Zuba",
        "line":" No! No, son. To us! My son! The King of New York!"
     },
     {
        "name":"Florrie",
        "line":" That's my baby!"
     },
     {
        "name":"Zuba",
        "line":" Love transcends all differences. We are gathered here today to celebrate such a love. Do you take each other, for better or for worse?"
     },
     {
        "name":"Skipper",
        "line":" For better, please."
     },
     {
        "name":"Alex",
        "line":" What a beautiful, weird couple!"
     },
     {
        "name":"Melman",
        "line":" That's not going to last."
     },
     {
        "name":"Private",
        "line":" Can I kiss the bride?"
     },
     {
        "name":"Skipper",
        "line":" No! Music! (More than a Feeling by Boston plays) Struts."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Skipper",
        "line":" Flaps!"
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Skipper",
        "line":" Diamonds and gold."
     },
     {
        "name":"Kowalski",
        "line":" Check."
     },
     {
        "name":"Florrie",
        "line":" Bye-bye!"
     },
     {
        "name":"Zuba",
        "line":" We'll miss you!"
     },
     {
        "name":"Florrie",
        "line":" See you later!"
     },
     {
        "name":"Skipper",
        "line":" We'll be back after the honeymoon in Monte Carlo, or whenever the gold runs out."
     },
     {
        "name":"Zuba",
        "line":" Take care yourself!"
     },
     {
        "name":"Florrie",
        "line":" Come back soon!"
     },
     {
        "name":"Alex",
        "line":" You know Mom, let them take their time. New York isn't going anywhere, right, guys?"
     },
     {
        "name":"Marty",
        "line":" Yeah! You're right about that!"
     },
     {
        "name":"Melman",
        "line":" As long as I'm with her.. ..and you two, I don't care where we are. She has the most amazing laugh."
     },
     {
        "name":"Marty",
        "line":" Love has no boundaries!"
     },
     {
        "name":"Alex",
        "line":" Well, looks like you're stuck with us for a while. Dad? What's wrong? I just thought we could hang out a bit and..."
     },
     {
        "name":"Marty",
        "line":" Hey!"
     },
     {
        "name":"Alex",
        "line":" You got me!"
     },
     {
        "name":"Zuba",
        "line":" I got you, son! (Scatting)"
     },
     {
        "name":"Alex",
        "line":" You got me with..You did my thing. You brought it back around on me. I love it."
     },
     {
        "name":"Zuba",
        "line":" (Scatting) I got you, son!"
     },
     {
        "name":"Alex",
        "line":" The old man's not too bad, eh, Marty?"
     },
     {
        "name":"Marty",
        "line":" Marty? Who's Marty?"
     },
     {
        "name":"Alex",
        "line":" Come on!"
     },
     {
        "name":"Marty",
        "line":" I don't know no Marty. No call me Marty."
     },
     {
        "name":"Alex",
        "line":" You can't fool me."
     },
     {
        "name":"Marty",
        "line":" I don't see no Marty. Ain't no Marty here."
     },
     {
        "name":"Alex",
        "line":" Marty! I can look into your eyes, and I know it's you."
     },
     {
        "name":"Julien",
        "line":" Hey! Shake the hot things! Shake the hot things! Shake 'em! Shake 'em! Shake 'em!"
     }
  ]
  }}

app.get('/scores', (request, response) => {
    response.json(db.scores)
})

app.get('/script', (request, response) => {
    response.json(db.script)
})

const maxId = () => {
    const maxId = db.scores.length > 0
    ? Math.max(...db.scores.map(score => score.id))
    : 0

    return maxId + 1
}
/*
app.post("/scores", (request, response) => {
    const newScore = request.body
    newScore.id = maxId()

    db.scores = db.scores.concat(newScore)
    response.json(db.scores)
})*/


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})