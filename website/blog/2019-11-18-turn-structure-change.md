---
title: THE BIG TURN STRUCTURE CHANGE
author: Nick & Alec
---

We're trying a new rules system which we think may make the game better. Here is the new idea:

- Players no longer queue cards. When they play a card or an active, it immediately happens.
- The person with Initiative starts with Priority.
- When you have Priority, you can play a card (or Active), or pass. Then the other player gets Priority.
- When both players pass one after the other, the turn goes to Combat.
- Combat works the same as the old rules.
- The undo button has no function right now.
- If you don't have mana (or actives) you auto-pass

Originally we were thinking about doing it as a festival but it's such a big and experimental change that making it so the client supported both the old and new rules sets would have made it a much larger feature than it is (it took about a day, would have taken more like a week). So it's just going live. Once it happens please try it out and tell us what you think.

To help discussion we suggest that you call the old system the Queue system and the new system the Play/pass system. Also, much like the ticks change we theorize that this could simply make the game as a whole much better, so we would appreciate it highly if you avoided having conversations which spiral out into other directions such as what the transition process would look like for existing cards (for example, what happens to cards like Counterspell.) If this system is more fun, we should use it instead.
Note: unlike MTG you can't do things "in reaction" to something else. This is not the stack.
Lots of cards are just not going to work in this system, again that's not really what this is about so don't worry too much about it

------------

## Why are we making this change?

- In general, the queueing system is something we thought could lead to combinations of cards being played with a feeling of a "combo." this basically hasn't happened
- One downside of queueing is that players have to remember the order they played things on their turn and often have to hit undo several times to play them again in the right order
- The second downside is that there's this huge delay between enqueuing an action or card and when it resolves, without going too far into it, delays between announcing something and it resolving are inherently unsatisfying in computers. You can read more here: https://lawsofux.com/doherty-threshold.
- The third downside is that almost invariably, new players I see playing the game are visibly unsatisfied when enqueuing cards. We believe it's just an unsatisfying thing and it really takes players out of the game when it happens. Our original idea with enqueuing cards was that players could plan their turns out at the same time and it would feel faster than other games, where you have to wait for your opponent to move, but we believe that the extra time involved in enqueuing cards in the right order and undoing/redoing your turn order has caused the need for very long turns. When a fast player plays against a slow one it actually makes the waiting time worse.

## Known Issues

- Any cards dealing with the Resolving zone won't work.
- The Undo button does nothing. There'll be a delay getting this fixed because it depends on getting updated board art.
- Story mode is disabled. Now isn't a good time to invite friends because our tutorial is disabled.
- The turn timer hasn't been updated to track across priority passes. This will be a high priority fix once we decide to keep the new turn structure.
