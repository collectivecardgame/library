# Collective Library

## Intro

### What's Collective?

Collective is **The Community Created Card Game.** It's a new kind of digital card game, where players can make their own cards, and which cards get into the game is determined by votes on [the Subreddit](https://reddit.com/r/collectivecg).

### What is this GitHub project?

This is the codebase for a section of the Collective website. The stuff here turns into everything on the website with a URL that starts with [/library](https://www.collective.gg/library/).

### Why is this open source?

Our idea is to make it so this section of the website is available for people to make suggestions and add their own content.

We have an awesome [Discord](https://discord.gg/C8fTNVt) that's really the heart of our community. They design most cards that get into the game as a community and have given us fantastic feedback that has dictated the direction of the game since early 2018.

Making this part of the site open source is part of how we want to expand that small Discord community to everyone.

### But I can't code!

That's OK. This project is designed to be easy to work on, even if you don't know how to code.

---

## What can we do here?

### Write news articles

The "Discord News Squad" (a group of Discord members who do a weekly roundup of what's happening in the community) can add new blog articles, which will show up at [collective.gg/library/blog/](https://www.collective.gg/library/blog/), as well as on the front page and the upcoming "community" page on our website, as news articles.

Other people can post news articles too! We want the news to feel like a town square, not a centralized television broadcast.

We hope that the ability to post articles directly to our site will make it clear, to both existing and new players, that this game is about the community.

### Update the rules

Rules for card submission, updates, commenting on the subreddit, Realms, and more can be found in the [Library](https://www.collective.gg/library/rules-subreddit/).

**These rules are a living document.** Just like a political system, the laws need to change as the possibilities expand and the community comes up with new ideas. There's almost no precedent for a game like this (the closest thing probably being open source games or [Eve Online](https://www.eveonline.com/), and we still encounter cards and behaviors which necessitate a new rule.

The rules are extensive, and sometimes we have a hard time keeping track of them all! The added benefit of a public rules system where we address _everything_ is that it will help us keep track of them.

### Ask and answer FAQ's, especially about the Card Creator

The Card Creator is a powerful and intimidating tool, and we were very happy to find that the community does a great job of teaching themselves about it. You can find Advanced Card Creator Topics [here](https://www.collective.gg/library/card-creator-advanced/), and if you have found something odd or you have a question (and nobody else knows the answer -- and you've asked), please feel free to suggest it as an additional item on the page. Right now it's pretty short, but we have a feeling it'll get a lot bigger soon.

---

## Seriously, I can't code... are you sure I can use this?

Yes! Here's how.

**Note: Click on images to see a larger version.**

Every file here that ends in ".md" is a **Markdown** file. Markdown is a way of writing documents that's similar to the formatting on Reddit.com.

![x](https://i.gyazo.com/b89cdf8c6d314a41ebffd264fd2871f3.png)

To edit a document, just click on the pencil icon in the upper right:

![x](https://i.gyazo.com/aee8f96bae44aa591717ee89e2997d7a.png)

It will show you the un-formatted version of the page:

![x](https://i.gyazo.com/f6e3282299aa0fef54fc0da1c5f148d2.png)

You can change it to something else, then click "preview changes" to see how it'll look. The Markdown shown by GitHub is very similar to what appears within /library/! (It's usually the same, but with our color scheme.)

![x](https://i.gyazo.com/79f53968d6c0a8c6a881c17dbc90d732.png)

If you want to add a new Markdown file, just click the "create new file" button in the upper right. Make sure it's similar to the other files in the same folder. Click the "upload files" button to upload image files -- make sure you're in the right folder!

To propose a change, edit or create a document, type it out, then click the green "propose file change" button below after writing a friendly description.

![x](https://i.gyazo.com/2663107dbc473e7dfe8be0444d1891ac.png)

If you want to spend some time writing out the new text, you can use an online Markdown editor like [Dillinger](https://dillinger.io/), which autosaves and shows a preview of your text side-by-side.

---

## Where can I make changes?

Here's an overview of the structure of this project.

```
Top level
 |
 +-- docs
 |    |
 |    +-- something.md                <-- .md files like this are for
 |    |                                   pages in the main /library/
 |    +-- assets
 |         |
 |         +-- something.png          <-- image files like this can
 |                                        be referenced in "docs" pages
 +-- website
      |
      +-- blog
           |
           +-- something.md           <-- .md files like this are for
           |                              pages in /library/blog/
           +-- assets
                |
                +-- something.png     <-- image files like this can
                                          be referenced in "blog" pages
```

To make a new blog post, just make a new ".md" file in the /website/blog/
folder. Make sure to start the filename with the year, month and date (with
zeroes for single digit months and days) -- this is how our site can tell what
day it was written. Then ping Nick on Discord and ask him to review the proposed
post. (You can't make a change directly to the site without our approval.)

To make a change to a file in the rules sections, just find the file and edit
it, and ping Nick in the same way.

Making a new page that shows up in the rules section is a little harder, but
it should probably be discussed with Alec and Nick anyway.

---

## Fooled you, I actually can code!

From early on in Collective we wanted to avoid it becoming "the card game for programmers." We are also pretty happy with how the /library/ pages are right now, and really just want people to fill it out.

If you want to contribute anyway, this project was made with [Docusaurus 1.14](https://docusaurus.io/). You can find a good tutorial on how to get it working [here](https://docusaurus.io/docs/en/tutorial-setup), and it's designed to be at least sort of usable by people who have never written code before.

