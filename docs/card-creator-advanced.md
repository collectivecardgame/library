---
id: card-creator-advanced
title: Card Creator Advanced Topics
sidebar_label: Card Creator Advanced Topics
---

## "This card's..." is a Lie

The "This card's..." block is common way to quickly use properties of the card you're editing, but what it actual does is a bit more complex. "This card's..." searches through a heirarchy of different objects, looking for the property you've picked.
![Property Search Hierarchy](assets/scope-hierarchy-diagram.png)

### Object Types
* Trigger - If you're inside of a triggered ability or a When Trigger Happens... block, you'll have some extra properties e.g. Triggering Object. You can think of these properties as existing on their own object in the hierarchy - the instance of the trigger.
* Ability - The ability you're currently editing. E.g. you might want to access the Mana Cost property of an Active.
* Card - The card you're editing, self explanatory.
* Player - The card's controller.
* Game - Stores global values, e.g. the Turn Number property.

### When this causes confusion
* Since "This card's..." checks all of the above objects, and "Get Property of something..." checks only one object, the list of properties available when using these blocks are different.
    * The Target property is actually a property of abilities, meaning it won't be accessible from "Get Property of something..." looking at a card.
* With triggers, the trigger-specific properties are only accessible from "This card's..." blocks.
    * Example: The global Card Changes Zones trigger includes four trigger properties
        * Moving Object - The card that moved
        * From Zone - The zone the card moved from.
        * To Zone - The zone the card moved to.
        * Triggered On - same as Moving Object (redundant)

        A common misconception is: to get the To or From zone property of the moving object, it should be retrieved using a "Get Property of something..." block on the Moving Object. Instead, From Zone and To Zone are properties of the trigger, so "This card's..." is the only way to retrieve the property.

## Character means Hero

Information about a player's hero is accessible from that player's Character property. Characters have the same properties as cards, but most of them don't do anything.
