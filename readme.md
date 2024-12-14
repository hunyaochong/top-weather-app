### Lessons learnt from this project

1. Always think of functionality, and design the flow of data first - before implementing anything. It will require signficant effort to reverse design choices later down the line.

#### e.g.

In this project, I faced a challenge where the loadWeather API is invoked by three different modules (search, index, and unitController), each of them providing different arguments. loadWeather API's nature of receiving at least 2 arguments at once just doesn't work well with this design. This is partly also I am rendering everything within the weather module, which is really bad seperation of concerns implementation.

A better design would have had a domController module which receives the unit and location input separately, and feeding them into the loadWeather API which resides in the weather module. Subsequently, all rendering component should sit within a domRenderer module.

2. Overall, quite happy with the UI of this project. A lack of animation is recognized, but I intended for this to be a dashboard that mimics Apple weather app, and has little animation.

3. Learnt quite a number of things about loading, and tweaking images and icons. Before this, I never knew that I can just tweak the width, height and fill attributes directly from the svg files.
