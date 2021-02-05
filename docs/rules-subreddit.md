---
id: rules-subreddit
title: Submitting to the Subreddit
---

Each week, cards made by the community are added to the game. You can submit cards, too — but might want to read more about the specifics first.

---

## Card Lifecycle

<span class="big-img">
![Card Lifecycle](assets/lifecycle.png)
</span>

At **Wednesday Midnight PST (UTC-7)** every week, a new week of card submissions begins. Until exactly one week later, all cards The top 10 voted cards of each week are accepted into the game. A query utilizing Reddit's API ensures that the ordering reflects actual upvote amounts and takes vote fluctuation into account as well as possible.

1. When you first create them in the Card Creator, cards have the "Prototype" frame.
   - These cards are available to test out in the Card Creator (and in Card Creator Multiplayer).
1. If your card is in the top 10, it will be added to the game and get the orange "Fresh" frame.
   - These cards are available in singleplayer for additional testing and balance.
1. On the first day of the month, all "Fresh" cards except for the most recent week change to the navy "Standard" frame, and can be played in multiplayer.
1. At the beginning of the year, the oldest 52 weeks of cards rotate out, and cannot be played in multiplayer any longer.
   - Another annual event is the Wandervision Awards, which happens in late May, in which we celebrate the best cards of the last year. Nominees and winners are, of course, voted on by the players.
     - This festival is a longstanding tradtion on Wanderstar and any similarity to other events is entirely coincidental. Its timing coincides with the anniversary of the initial launch of the Alpha.
   - Eventually, we will create a format where Standard and Rotated cards are both playable. We don't have an estimated date for this.

## Categories of Submissions

Posts made to the [Subreddit](https://old.reddit.com/r/collectivecg/) which add or change cards in Collective must begin with a tag, such as [Card], or they will be disqualified. We want it to be extremely clear when someone is voting on a post to be added to the game, and the reason to keep it in the title is so that we can be sure it wasn't changed midway through the week.

Feel free to post whatever else you want on the [Subreddit](https://old.reddit.com/r/collectivecg/) as long as it’s related to Collective or tropical fruits.

Here are the tags and when to use them:

### [Card]

- New cards should be submitted with the [Card] tag and follow all the rules of any post in the [Subreddit](https://old.reddit.com/r/collectivecg/). The top 10 voted card submissions each week are accepted into the game.

- If there are less than 20 posts, we roll the current week's cards into the next week. (This has never happened.)

### [Update]

- Updates must be submitted with the [Update] tag, and should have a change in the card's effect visible in the card's stats, numbers and/or effect. The top 3 voted update submissions with more votes than the 10th normal submission each week are accepted. (The max 3 updates have been nicknamed "update slots" by the community.)

- A fix to how a card works without changing the card's text itself, in order to match its function with its description, can be handled with a [Cosmetic Update] or a Dev Update instead.

### [Cosmetic Update]

- Cosmetic updates must be submitted with the [Cosmetic Update] tag, and should only change something that doesn't affect the card's gameplay significantly. For example, the art, the name of the card, its rarity, or its tribal type (even if there is a theoretical, minor change in gameplay significance). Minor bugfixes can also be Cosmetic Updates until (if) we start seeing bad actors who submit Cosmetic Updates to "sneak in" changes to cards.
   - Rarity updates that change the rarity of a Token card to be collectible should be marked as [Update]s instead of [Cosmetic Update]s.

- Affinity changes are not [Cosmetic Update]s. During discussions about Affinity Identities that prompted [this article](/blog/2019/02/21/affinity-grammar), we considered making them Cosmetic; if this becomes an issue again we might reconsider, but only if players had the intention of making changes that would not be sneaky balance tweaks. Even then, it's unlikely.

- Cosmetic updates with more votes than the 10th normal submission each week are accepted, with no slot limits.

### [Reprint]

You can resubmit a card as a [Reprint] if it has rotated out of the format. If it gets enough votes, it will replace one of the top 10 cards from that week. You can learn more about rotation [here](/blog/2019/12/08/rotation-2020).

### [DC]

Sometimes we hold weekly Design Competitions, in which a theme or restriction is provided (like the Flying DC, where cards had to have Flying). Design Competitions can have anywhere from 1 to 5 winners, and the number is picked ahead of time. Just like [Update]s, the top N (some number from 1-5) [DC] submissions with more votes than the 10th normal submission each week are accepted.

## Votes

- Votes on cards are combined from two sources:
  - Reddit vote totals, collected by an automated script run Friday morning.
    - The script is run a few times, 15 minutes apart, and the Reddit vote totals are calculated by taking the average from every time the script is run.
  - In game vote totals
    - After playing a match, you will be given the option to vote on a card for a small gold bonus. You can view the card and its commentary and vote on it.
      - Another way to vote in-game is through voting tickets, which are earned through the season pass and allow you to vote on a random card, or change your vote on a card you have already voted on. Voting tickets cannot be used to vote on a specific card you haven't voted on yet.
      - We (the developers) have taken a page from Reddit and made a decision to keep the algorithms behind which cards are shown private.
    - In game votes are counted up Friday morning.

### Side note: On in game voting

We have a policy not to go into details about the process by which we show your card (or don't) during in-game voting. We took a page from Reddit itself here, which is famously secretive about their algorithm and regularly makes changes to it.

We make a post every Tuesday with a preview of the week's progress titled "Week X so far." We do not show the performance of [Reprint]s in this post for technical reasons.

### Side note: Community Commentary

You can provide a message (up to 200 characters long) explaining why you made a card, and why it should go into the game. If it's accepted, your message will show up in game as "Community Commentary". See [here](https://www.collective.gg/library/blog/2019/12/22/commentary/) for more information.

### Side note: Flair in the Subreddit

Posts are assigned flair on the subreddit, but this is done manually by tweaking reddit automoderator settings and it is **not** how the script finds which cards are eligible for in-game voting and the final vote tally. The flairing process can have some issues but flair is entirely cosmetic, and we haven't seen any evidence that cards with improper flairing receive fewer votes. We try to get it right, but we don't have a responsibility to go back and re-flair posts which were labelled incorrectly. (Sometimes we do this anyway)

## Deadlines

On **Wednesday at midnight Pacific Standard Time**, a new week of submissions begins. Cards posted in the seven days before that are given a couple days to collect more votes on Reddit and in game, and the votes are tallied up on Friday morning PST.

At **Friday 10:00 am PST**, new cards are added to the game via an automated script.

## Submission Rewards

When your [Card] is accepted, all contributors to the card get:

- A reward of 1000 gold (an in-game currency) split evenly among all contributors of the card.
- The Blueprint of the card, which lets you include as many copies of the card as you want in any number of decks for any format where the card is valid.
- A special golden front for the card, and a unique animation which occurs when the card is played (and another unique animation when the card is played against the creator).

Each week, you can also earn 200 gold for having a submitted card in the top 75% of all submissions.

Updates, cosmetic updates, and reprints do not provide rewards.

## Exceptional processes

### Bugfixes

If a card has bugs, the process right now is to report it, either with the in-game bug report functionality, reddit message, or discord direct message.

If you report a card as bugged and supply a fixed version, it makes things a lot easier for us, and we can (and often will) try your fixed version out and, if it's correct, update the bugged card with your fixed version.

If you don't know how to fix an issue yourself, don't worry. Reporting a card as bugged in the discord bug-reports channel often will be enough to get someone to fix it for you. Our community is very helpful :)

### QoL Updates

The developers reserve the right to modify cards should they cause technical or QoL ("Quality of Life") issues. We really don't want to affect balance with this at all, but sometimes we might. If you're curious what this looks like, [here](https://discordapp.com/channels/408505426787958784/408505426787958786/684860040070299822) was a casual conversation on discord where we did the first one of these.

### Sending to Limbo

If your card is accepted but cannot be added to the game yet, it may be put into "Limbo." Here are the reasons a card may be put in limbo:

- The card accidentally surfaces a bug or missing feature in the game. (One of the rules for new cards is that they cannot be intentionally designed around surfacing a bug or feature that you'd like us to make.) When the bug or missing feature is added, we will remove the card from Limbo.
- The card has a subtle, accidental bug in it which we don't have time to immediately fix. As soon as we fix the card, we will remove the card from Limbo.
- The card has a bug. When the original creator fixes the card, we will remove the card from Limbo.
  - We also may fix it ourselves if the original creator never fixes the card. We will wait four weeks before doing this, and even then, probably only do it when reminded to by the players.

When a card is in Limbo, it will be visible at https://www.collective.gg/cards but hidden in a section labelled "Limbo." While in Limbo, the card cannot be used in game.

### Deletion

If your card is found to be breaking one of the rules after it's gotten in, we may fully remove the card from the game. We've only had to do this once so far.
