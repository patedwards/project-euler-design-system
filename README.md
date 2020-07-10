## What is Project Norman

I feel similarly about UX desig now as I did when I first started coding. When trying
to come up with a fun, somewhat contrived example of a product that needed a design system, I thought about project 
Euler. I learned to code by doing these exercises. They taught me a lot about the basics, and and about mathematics. They gave me the 
simple problems I needed to get started.

I want to try and make a set of problems that people can use to practice their designing skills.

If the idea is to provide enough to get started, should we require coding? My thinking is yes. The purpose of PN is two-fold - learn to design AND
learn to code, just like PE is about learning mathematics AND learning to code.

I'm doing this to become a better designer and to build a product that I think is cool, even if it's a little niche.

First steps:
* create 10 problems and solve them myself
* if I do that, then I get to make a website (projectnorman.co) where I post problems and request solutions
* * solutions are submitted by pasting in the github URL of the code to be deplyed. Gets deployed by github to a temporary URL

Problem list:

https://uxdesign.cc/100-example-ux-problems-f90e7f61dd9f
* Create a time tracker.
* Create an alarm clock (100x200 pixels)
* * the AI will try and set an alarm for 3 minutes after the time it starts using it. It will say success if it can successfully set the alarm and be notified that it's going off after 3 minutes.
* what are some examples from DOET
* * design a door that a naive user won't know how to open. Rules:
* * * no random numbers!
* * * user needs to get it eventually (can't be impossible), but you get more points for if they can't get it in 3 goes
* * * can use any signifier you want
* Mockup a warning page
* A smart mirror for Alice:
* * Alice likes to take her time getting ready in the morning. She doesn't like to listen to things 


Inspiration:
https://ux.stackexchange.com/questions/12714/where-can-i-find-problems-to-challenge-my-ui-design-skills

"review some really bad websites and devise cost effective solutions to fix these problems. This will give you coal-face, front-line experience of some of the work of a UX gimp."

Algo-UX

The alarm clock could have a fun twist.
When else do we use algorithms:
- when drawing curved lines - click on the points and use scroll to change the roundedness
- searching a library/database (v1 is simple, v2 is harder - the list is 10,000 and we need to display the top 10)
- journey planning: planning a day out and which places to go first
- dating matches, getting to see who you are matching with and why, allows you to self tune
- netflix show recommendation, seeing why you're being recommended something
- spotify: retuning your discovery weekly

All of these require the parallel design of an algorithm and the UX. Project Euler required the parallel
consideration of an algorithm and mathematics.

Project Norman solutions provide the algorithm alongside the design

E.g search

The search is the search TERM + context.

filter = type_value in TERM && recent

---------------

We can imagine some UX for AI problems:

### Fact Checkers R'us case study

Alice develops a new algorithm for fact checking press releases. Her algorithm is able to correctly identify if a paragraph has a falsity in it with 70% certainty (so, given some false statement, the algorithm will correctly identify it as false 70% of the time), and a sentence with 70% certainty. Alice's company FactCheckersRUS provides it's customers with fact checking services. Their team of human fact checkers want to use Alice's algorithm to improve their productivity. 

Design an interface for a desktop computer that can assist the fact checking team. This team are experienced fact checkers who use a variety of web sources to validate/invalidate assertions.

While designing this interface, take some creative liberties with what the algorithm can do. It can detect with 90% certainty, but make some room for Alice to make improvements, and even suggest some by showing her how new capabilities could be incorporated into your design.

### Data entry assist

Alice develops an algorithm that can be used to detect anomalies in a data set. Develop an interface where users entering data into a table with 10,000 rows and 10 columns can enter data with a lower error rate than regular spreadsheets.


### Ensemble methods

Alice has developed a suite of algorithms for predicting stock prices. Each method performs better under certain conditions and risk appetites. Develop an interface that allows an investor to make decisions on which stocks to buy using Alice's algorithms and their own understanding of the environment.