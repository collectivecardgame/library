---
id: card-creator-faq
title: "Strange Card Creator Facts"
---

1. **To check if a card belongs to a Tribe : one should use {Contains...} instead of {Equal to...}**

    The Tribe property contains more than one Tribe

2. **To update the ability text of a card, and make it show in game : one should remove that ability, then add it back again**

    https://files.collective.gg/p/cards/e93bffb0-0264-11ea-b5e4-ebb06e00cbc2-s.png

3. **To Choose cards with complicated targets : one could create those cards in the Removed From Game zone, then choose from those cards later**

4. **To show a line break in the ability text : break the text into two parts, and put them into two abilities; then add an empty ability between them to separate these two abilities**

    We don't like this, but sometimes people do it anyway.

5. **There is no {About to duel Something trigger} / {About to get dueled trigger} / {About to deal damage trigger} / {About to take damage trigger} currently**

    This wouldn't make sense to have, because the trigger will resolve after the duel/damage has already happened.

6. **Manually moving a card to the Resolving zone does not make it get played, that card would instead just get stuck there forever**

    Since this could never happen naturally, we feel safe assuming card authors will account for this.

7. **One should always set the rarity of token cards as Undraftable, or else that card might also show up as one of the options for the drafting phase in game**


## Quirks of the rules engine

1. **Once a unit attacked another unit, there is no way to force it to stop attacking other blocking units (such as when it is blocked by multiple units)**

2. **As soon as the HP of a Player/Unit got below zero, they lose immediately, even when they were supposed to gain HP back by other effects later ( one could temporarily define their Can’t Lose property as true, to circumvent this )**
    
    State-based effects like dying are checked before triggers start resolving. At some point we might set up an advanced games rules page here to better explain subtle interactions like this.

3. **When one has 13 cards in their hand, cards that are drawn and then instantly milled would not trigger the {When you draw a card trigger} currently**

4. **Readying a unit does not override Summoning Sickness currently( one could give it Agile and Ambush to circumvent this )**

5. **When a unit is buffed by a passive effect, and then gets their stats set, that unit would no longer benefit from the former passive effect  (and when that passive buffing effect disappears, that unit would also not get affected)**

6. **A trigger ability of a card can only trigger at most 13 times in a single phase  (even for different targets)**

    This is called the "Rule of 13".

7. **By changing the Has Acted property to true for a card in hand, it would prevent the player from playing that card (shown as un-selectable)**

    Playing a card is internally a kind of Active ability, so it checks the Has Acted property.
