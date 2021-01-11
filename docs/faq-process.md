---
id: faq-process
title: Democratic Process Frequently Asked Questions
sidebar_label: Democratic Process FAQ
---

Here you can find other information related to the Democratic Process which doesn't fit in any categories, including a more explicit explanation of what aspects of the game are controlled by the developers, and other answers to infrequently asked questions.

---

We initially assumed that a list of aspects which are not controlled by players did not need to be clarified due to there being clear process around controlling the set of submitted cards via [Subreddit](https://old.reddit.com/r/collectivecg/) posts, and no process around changing various other things about the game. However, we've been asked to be as clear as possible about this.

The players control the processes which we have defined in the other pages, including adding cards to the games, updating them, and everything in the section on [Realms](realms-1.md). The final say on other aspects of the game come down to the developers. This includes balancing Heroes, decisions about which features to develop next, what color the logo is, etc.

## Can we have voting to control the balance of Heroes or game modes or...

You shouldn't generally expect regular changes to aspects of the game which are not controlled by players, even after consistent feedback. We (the developers) want to avoid "knee-jerk" balance changes based on early feedback on new content. Reactionary responses to meta changes are an inevitable part of all online multiplayer games, and when developers immediately implement balance changes based on early reactions to new content, it can create volatile metas in which the focus is not on gameplay and player-controllable changes, but the arbitrary and error-prone decisions of the developers.

### Hero Balancing

Balancing Heroes is delicate, and heavily influenced by the available pool of cards in the game (which is controlled by the players). We would prefer to err on the side of a given hero being deemed "underpowered" for an extended period over excessive week-by-week changes to developer-controlled gameplay elements in an attempt to find perfect meta balance.

When you provide feedback on balance, we listen; but your main method of resolving meta balance should be through card creation and updates, not through communication with the developers.

### Core Gameplay Changes

Collective is a young game, and we (the developers) are willing to make changes to the core rules of the game if we think they will promote better gameplay. A recent example of this was changing the maximum hand size from 13. The hard limit is still 13, but at the end of turn, players discard extra cards in hand until they have ten. Among the reasons we made this change:

- At times, the meta involved both players regularly having full hands of 13 cards. We generally found this to be an undesirable game state, as did most players and playtesters.
- We already had concerns about ease of use when we make a phone version of Collective, and players were already finding it difficult to simply click on their intended card in hand on desktop.

We want to avoid making too many additional changes to the core gameplay, but reserve the right to do so. The entire game is a bit of an experiment, and when early decisions (such as setting many numbers in the game to 13) seem like clear mistakes, we will change them.

## Why can't we make the text smaller on cards? Why is the text smaller on Legendary rarity cards only?

In general, we believe that having too much text on a single card is a bad thing.

Despite Legendary cards having extra space in their text box, many fit more of their text on additional cards. (Example [1](https://files.collective.gg/p/cards/a058c440-dbe0-11e9-9ec5-a9c62aadfebc-m.png), [2](https://files.collective.gg/p/cards/d92238f0-fd15-11e9-98e6-6974af935f12-m.png), [3](https://files.collective.gg/p/cards/8c87d520-2341-11ea-903a-b9e6e4893b36-m.png)). This is great! There's [lots of other cards](https://files.collective.gg/p/cards/cefea9b0-4f43-11e9-a7c5-0b5d22f64b44-m.png) which use the extra space on referenced cards to convey more information. We think that these are much easier to read and think about than one card with several dozens of words on it, and because we're a digital card game, we can use this to our advantage.

### Please?

The tool we use to generate cards in the Card Creator uses a headless browser to render your card as it looks in the browser, then turns that into a PNG file with a transparent background.

Unlike the Card Creator tool, the technology we use in the actual game squeezes card text into the box, no matter how much there is. Try it for yourself and you will see that eventually it gets so small that it becomes unreadable. This means you can add abilities to other cards without a cost.

Our current limitations actually work very well for now. We were worried early on about how complex players' cards would be. Luckily this seems to be a problem that fixed itself; people tend not to vote on cards if the text goes beyond the text box. This has also worked great for limiting the length of card and realm names, as well as the number of tribal types on a card.

Legendary cards have more space on them because they need an entire age of a Realm to be complete each time, so legendary cards can never be more than about 10% of the card pool. But people still fit more text on them by making additional referenced cards. And that's perfect! The space is there for players who want it.

### But a little more space would allow for much more design space!

The current system is working fantastically well in our minds. It's working so well that Nick has suggested, multiple times, that each rarity could have its own font size; large for commons, the current font size for uncommon, current legendary font size for rares, and an even smaller font size for legendaries. This was an intentionally generous proposal in which all rarities get the same or more space for their text except commons, but it still got exclusively negative feedback from the community.

Additionally, we have changed the card frame multiple times, each time making sure to provide more space for the text box. This wasn't enough either. And when we introduced flavor text, certain players were angry that it took up space on the card's text box, requesting that it appear to the side like the keyword reminder text in game, and also show up in Reddit voting to the side.

The fact is that some people want an unlimited amount of space for text on their cards. They ask for a little more space, but they are not happy with a little more space -- they want zero limits, and also don't want to split their text across multiple cards. We are of the opinion that there's already quite a lot of reading in Collective, and complexity creep is a pretty clear example of the [tragedy of the commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons). Splitting text across multiple cards simplifies comprehension like bullet points simplify larger essays -- it is, in our mind, a good thing.
