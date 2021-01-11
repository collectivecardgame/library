---
id: card-creator-faq
title: "Card Creator Facts"
---

Based on a list compiled and curated by our players. Thanks!

---

1. **To check if a card belongs to a Tribe, you should use "Contains..." instead of "Compare Things...".**

   The Tribal Types property is a list of things and can contain more than one Tribe.

2. **To update the ability text of a particular ability, remove the ability from the card and then add it back again.**

   This is often used for abilities that serve as counters and tell the player what stage they are on.

3. **To set up cards with complicated targeting or choosing, create the card options in the Removed From Game zone and then choose from those cards later.**

   After creating each option, you'll need to append them to a custom property that's a list of cards. Cards such as [Psychic Split](https://files.collective.gg/p/cards/bdda0e10-e329-11ea-93a1-c9a316c39482-m.png) are good examples for this.

4. **To show a line break in ability text, break the text into two parts, put them into two abilities, and then add an empty ability between them to separate these two abilities.**

   We don't like this, but sometimes people do it anyway. 

5. **There is no "About to Duel Something Trigger", "About to Get Dueled trigger", "About to Deal Damage trigger", or "About to Take Damage Trigger" currently.**

   This wouldn't make sense to have, because the trigger will resolve after the duel/damage has already happened. Likewise, "before" triggers do not exist for other events like changing zones.

6. **Manually moving a card to the Resolving zone does not make it get played; that card would instead just get stuck there forever.**

   Since this could never happen naturally, we feel safe assuming card authors will account for this. To manually play a card as part of an effect, use the "Force play card..." option instead.

7. **Always set the rarity of token cards as "Token," or else that card will also become playable and can be added to decks by itself.**

   This is usually bugfixed very shortly after the week's cards are announced.

## Other Quirks of the Rules Engine

1. **Once a unit attacks another unit, there is no way to force it to stop attacking other units blocking it (such as when it is blocked by multiple units).**

2. **As soon as the HP of a player or unit lowers below zero, they die immediately, even if another ability step would cause them to gain HP later. (One could temporarily define their Can’t Lose property as true, to circumvent this)**

   State-based effects like dying are checked before triggers start resolving. At some point we might set up an advanced games rules page here to better explain subtle interactions like this.

3. **Once you have 13 cards in your hand, cards that are drawn and then instantly milled do not trigger the "When you draw a card" trigger.**

4. **You can Exhaust units with Agile and/or Ambush to nullify their effects for that turn.**

5. **When a unit is buffed by a passive effect and then gets their stats defined, that unit would no longer benefit from the former passive effect (and when that passive buffing effect disappears, that unit would also not get affected).**

   Passive abilities will be overwritten if something changes after they come into effect.

6. **A triggered ability of a card can only trigger at most 13 times in a single phase (even if there are different targets).**

   This is called the "Rule of 13".

7. **By changing the "Has Acted" property of a card in a player's hand to true, that player is prevented from playing that card (it becomes unselectable).**

   Playing a card is internally a kind of Active ability, so it checks the Has Acted property.
