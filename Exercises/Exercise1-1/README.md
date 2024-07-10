# Exercise 1: Starting with unit testing with Javascript through GitHub Copilot

This exercise should be the first one demonstrating how to leverage GitHub Copilot to speed up the development process of a Javascript testing frameworks like Jest, and also discover new ways to write tests.

In this directory `Exercise1-1`, you will find the following files:
- `sum.js`: A simple Javascript file that contains a function that adds two numbers.

Open the `sum.js` file through **Visual Studio Code** and follow the instructions to complete the exercise.

### Step 1: Ask GitHub Copilot Chat to ask how to write unit tests

We have a file `sum.js` that contains a simple function that adds two numbers. Let's say we want to start by asking GitHub Copilot to help us write a unit test for this function.

Open up **GitHub Copilot Chat** panel and ask a question like this:

`How to start creating unit tests for my sum.js?`

![Ask GitHub Copilot to write a unit test](../../images/Exercise1-1/1_AskCopilot4UnitTest.gif)

Of course, this is not the only way to ask GitHub Copilot to write a unit test, but this is really a quick way to start for sure. Now, GitHub Copilot is super generative, and your response can vary depending on the context of your project, when you ask, and how you ask. And there are different unit testing frameworks like Jest, Mocha, Jasmine, etc. that you can use to write unit tests. In the sample animating screenshot above, GitHub Copilot is suggesting one with Jest. That is maybe or maybe not what you want. You can always ask GitHub Copilot to write a unit test with a different testing framework. For example, you can ask like this:

`How to start creating unit tests for my sum.js with Mocha?`

![Unit Test in Mocha](../../images/Exercise1-1/2_AskToWriteUnitTestInMocha.gif)

Just because GitHub Copilot is suggesting something, it is neither a good idea that you can take for granted without a further human review nor it is the best answer. Always look through own judgement and evaluation steps to make sure that the code is correct and meets the requirements.

### Step 2: Creating unit tests without asking GitHub Copilot Chat

But let's say you want to write a unit test without asking GitHub Copilot Chat. You can always write a unit test by yourself. And one way to do is just to start with a test file. Create a new file called `sum.test.js` in the same directory where `sum.js` is located. And write a test like this:

```javascript
// // Test file for sum.js
```
And enter **Tab** key to trigger GitHub Copilot to generate a test for you. Of course, you don't have to stick to the comment like that. Just make sure you write enough context so GitHub Copilot can **guess** what you want to write.

![Write a test file](../../images/Exercise1-1/3_GenerateUnitTestsThroughTabs.gif)

If you keep entering **Tab** key, GitHub Copilot will likely generate different unit test cases based on the pattern. And you can always modify the generated tests to meet your requirements.

### Step 3: Generate unit tests through GitHub Copilot Suggestion panels

Another way to generate unit tests is to use the GitHub Copilot suggestion panels. You can always look at the suggestions that GitHub Copilot is providing and select the one that you think is the best. You can always select the suggestion and press **Enter** key to accept the suggestion.

To start, write a comment like this:

```javascript
// // Test file for sum.js
```

Then, hold the **Ctrl** key and press **Space** key to open up the suggestion panel. You can see the suggestions that GitHub Copilot is providing. You can select the one that you think is the best by clicking the **Accept** button.

![Generate unit tests through suggestion panels](../../images/Exercise1-1/4_GenerateTestsThroughCopilotPanel.gif)

### Step 4: Evaluation through in-file Copilot suggestion feature

Another way to generate unit tests is to use the in-file Copilot suggestion feature. You can always look at the suggestions that GitHub Copilot is providing and select the one that you think is the best. You can always select the suggestion and press **Enter** key to accept the suggestion.