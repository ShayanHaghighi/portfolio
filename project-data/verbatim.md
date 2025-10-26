---
position: 4
id: verbatim
title: Verbatim
description: A social game like Kahoot where players guess which friend said a quote.
tags:
- React
- Flask
- WebSockets
- Game
- Real-time
repo: "https://github.com/ShayanHaghighi/Verbatim"
---
# Project Overview

## Summary

Verbatim is a real-time multiplayer game where users compete to guess which of their
friends said a given quote. The frontend is built with React and the backend with Flask,
connected via WebSockets for instant, bidirectional communication. This setup ensures
live updates and fast-paced gameplay similar to popular quiz apps.

```javascript
const extensions = {
    extensions: [{
        name: 'code', renderer(token) {
            return `<pre><code>${token.text + "haha"}</code>${copySvg}</pre>`
        }
    }]
}
```

## Walkthrough

Walkthrough how the app works with screenshots

# System Design

Add system design here