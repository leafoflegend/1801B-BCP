## What is the DOM?

The DOM is the Document Object Model. That doesn't really mean anything all too special. What it is trying to say is that we have a shape that we can think of any document on the internet as. That shape is HTML (Hyper Text Markup Language). HTML is not a programming language, to get technical it is a Chomsky type 1 grammar meaning that it cant even perform an if-else.

The entire premise of the DOM is actually pretty straightforward. Its a tree.

Given <body>
We can think of everything that comes off of it as a child.
<div /> <div /> <div />

Lets say we had those three divs. We would say that the Body TAG has three children. Each div (child) has two siblings. We use this familial terminology when talking about any tags/elements on the DOM.
There is no restriction to how deeply nested this tree can get.
Importantly, all tags have parents except for <html>. We would call that the 'Root Node'. This concept of nodes, and trees is a very common one in programming because it offers some performance benefits.


         a
       -   -
      b    *c*
    -   - -   -
    d   e *f*   *g*

Okay, so what if I told you I wanted to change the size of 'c'? What needs to happen?
We need to consider the relationships that c has. The only relationships that should ever be affected by a change in a node of a tree, are the node itself and its children. Parents and siblings are never affected.

This is important because we want peoples computers doing as little 'rendering' as possible.
If every node of a tree had only two children - the big O for any given change to a parent is still O(n^2) - which is exponential which is terrible.
There is no such restriction in HTML. A parent can have 0 -> infinity children. Each child can have 0 -> infinity children, and so on and so forth.

## Okay, enough theory, how do we write syntax?

The DOM has only two things in it. It has elements which are always surrounded by carats i.e. **<** and **>**.
If we want to make, say a div we say

```html
<div>
  Hi Im bob.
  <span> Stuff </span>
</div>
```

Notice the slash at the beginning of the closing part of the element. That is us saying that we want to end that tag. Anything we put between the opening and closing tag, is considered a child.
In the above example there are two different kinds of children. One is a <span> element - and the raw text not part of the span is considered a **text node**. These are different from elements. They are different because they cannot have the second tool that the DOM provides, **Attributes**.

```html
<div 
  style="background-color: red;"
/>
```

Above you see me do something new, there is no closing tag - i used whats called a self-closing tag. This is when you put the slash at the end of the opening tag. This means I am not allowing children to be part of this node. But I can still apply any attributes to it I want. You see me use `style` up above. Style is normally something we do in a `.css` file. But for todays purposes to not overcomplicate things, we are going to write `css` inline like you see me do there. That is when we write style attributes attached to the html element itself.

Attributes are relatively easy syntax. It is `${attributeName}="${attributeValue}"` they must ALWAYS BE SURROUNDED BY DOUBLE QUOTES. This is part of the reason that single quotes are more popular in JS, it helps differentiate `JS` from `HTML`.

## Root Elements
There are three primary elements in HTML.

### <html>
The html tag refers to the entire page.

### <head>
The head tag refers to any metadata about the page. Things like its title, other files it needs to load, language, search related information (not entirely true, thanks to google), etc.

### <body>
The body tag refers to anything you can see on the page.

## Other elements

So many. We can't go over them all. But generally a page is made up of about 95% <div> a div is just an invisible box. EVERYTHING IN HTML IS A BOX, EVEN IF IT DOESNT LOOK LIKE A BOX.

## Where does Javascript come into the picture?

Javascript is a language that enables us to take these statically typed pages that are insanely boring to write and maintain and use, and make them interactive in any way. Without Javascript every single web page would be a microsoft word document.

## Okay, what about CSS?

CSS (Cascading Style Sheets) are the premier option for styling your boxes (HTML). They can make your boxes very pretty. CSS is generally something that gets a lot of trolling. But its something you will need to learn. You cannot be a developer who cannot style anything. There are lots of ways to write CSS. Some people use things called post-processors which allow some amount of variable naming and for loops during their styling, some people write CSS strictly inline (me) so that we dont have to maintain a different kind of file, and other people write lengthy seperate documents that define the styling of many different kinds of elements. The latter is the most traditional.