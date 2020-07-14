/*

The site has a few different categories:
- challenges
- rosources
- about
- 

*/

const configs = {
    top_level: {
        home: {
          name: "Home",
          component: ""  
        },
        about: {
            name: "About",
            component: "<AboutPageComponent>",
            onClick: () => console.log("clicked about")
        },
        challenges: {
            name: "Challenges",
            component: "<ChallengesComponent>",
            onClick: () => console.log("clicked challenges")
        },
        blog: {
            name: "Blog"
        },
        resources: {
            name: "Resources",
            component: "<ResourcesComponent>",
            onClick: () => console.log("clicked resources")
        },
    }
}

export const challengeConfigs = [
    {
        name: "Fact Checkers R'us",
        number: 1,
        description: "Alice develops a new algorithm for fact checking press releases. Her algorithm is able to correctly \
        identify if a paragraph has a falsity in it with 70% certainty (so, given some false statement, the algorithm will \
        correctly identify it as false 70% of the time), and a sentence with 70% certainty. Alice's company FactCheckersRUS  \
        provides it's customers with fact checking services. Their team of human fact checkers want to use Alice's algorithm  \
        to improve their productivity.  \
        Design an interface for a desktop computer that can assist the fact checking team. This team are experienced fact checkers who use a variety of web sources to validate/invalidate assertions. \
        While designing this interface, take some creative liberties with what the algorithm can do. It can detect with 90% certainty, but make some room for Alice to make improvements, and even suggest some by showing her how new capabilities could be incorporated into your design.",
        imgSrc: require('./static/images/challenges/AlarmClock.jpg'),
        instructions: [
            {
                type: "upload",
                guidance: "upload the file here"
            }
        ]
    },
    {
        name: "Data entry assist",
        number: 1,
        description: "Alice develops an algorithm that can be used to detect anomalies in a data set. Develop an interface where users entering data into a table with 10,000 rows and 10 columns can enter data with a lower error rate than regular spreadsheets.",
        imgSrc: require('./static/images/challenges/AlarmClock.jpg'),
        instructions: [
            {
                type: "upload",
                guidance: "upload the file here"
            }
        ]
    },
    {
        name: "Ensemble methods",
        number: 1,
        description: "Alice has developed a suite of algorithms for predicting stock prices. Each method performs better under certain conditions and risk appetites. Develop an interface that allows an investor to make decisions on which stocks to buy using Alice's algorithms and their own understanding of the environment.",
        imgSrc: require('./static/images/challenges/AlarmClock.jpg'),
        instructions: [
            {
                type: "upload",
                guidance: "upload the file here"
            }
        ]
    },
]