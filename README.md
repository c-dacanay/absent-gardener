<!-- Every README should start with an H1 -->

### The Absent Gardener v .04

The Absent Gardener is a small interactive browser experience about tending a digital garden, and seeing how it grows.

#### Process

<img src="https://github.com/c-dacanay/absent-gardener/blob/master/images/wireframe.JPG" width="400" text-align="top">

After lots of brainstorming and amorphous pondering I really began with a paper prototype to structure the experience. I later fleshed this out in [Figma](https://www.figma.com/proto/bJeLfedG8qUAIls40RwDMa/Absent-Gardener-Playtest?node-id=2%3A3&viewport=438%2C-12%2C0.5&scaling=min-zoom) for a more hi-res experience. After receiving some feedback on the prototypes I began coding from what I thought was the most important thing: the flowers.

![Flower Img](https://github.com/c-dacanay/absent-gardener/blob/master/images/0polar.png)

I pulled the colors from [nice-color-palettes](https://www.npmjs.com/package/nice-color-palettes) so the flowers would be a bit more cohesive. After developing the variety in populations of roses I moved to a grid-based system where each cell had a random rose from a random population of flowers. There are currently 3 populations max.

![Pop](https://github.com/c-dacanay/absent-gardener/blob/master/images/1populations.png)
![Grid](https://github.com/c-dacanay/absent-gardener/blob/master/images/1grid.png)
![Popgrid](https://github.com/c-dacanay/absent-gardener/blob/master/images/1popgrids.png)

<!-- <img src=“https://github.com/c-dacanay/absent-gardener/blob/master/images/1populations.png”>
<img src=“https://github.com/c-dacanay/absent-gardener/blob/master/images/1grid.png”>
<img src=“”> -->

It's getting a little late so I might have to edit this in the morning, but this is very much version .0s5 of the absent gardener. I fully intend on continuing to work on this project, and it has been immensely satisfying to see parts of it come together!

<!-- ![Wireframe](https://github.com/c-dacanay/dwd-beautiful-day/blob/master/process/figma.png) -->

<!-- It is essential to describe how to set up your project -->

#### To-Dos

##### GA

- I have to draw a flowchart!
- The DNA of the garden has to change through user interaction
  - prunePlant() works visually right now, but it is not persistent and will not evolve with the garden.
- Each plot (bed.js) must have access to its place in the array of the population
- Make mutations of flowers (petal number, color, center size) more natural. My full obsessive version of this might have cherry picked color arrays.
- Create slow animation of garden mutating over x years

##### Other

- Dynamic scaling for p5.js canvas
- For harvestSeed(), is it possible to draw createGraphics() on the lefthand side without a p5 canvas? If not, think of other UI solutions
- Non-placeholder copy, hah!
- Fill out the rest of the wireframe, basically

#### Inspiration

This project came out of exploring genetic algorithms, Animal Crossing, Ursula K LeGuin, and COVID-19. Genetic algorithms explore computational simulation of natural phenomenon. Animal Crossing celebrates the mundane, and creates a system that makes one eager to water and breed flower beds every day. Ursula K LeGuin (namely her short story Birthday of The World) reminds us that worlds end over and over again. COVID-19 necessitated isolation as care, time stretched long and short, and we all had to relinquish the idea of control.

The tone of this piece is heavily influenced by [The Quiet Year](https://buriedwithoutceremony.com/the-quiet-year), [the Yawhg](http://www.theyawhg.com/), and [Kentucky Route Zero](http://kentuckyroutezero.com/).

#### Glitch

This project [is hosted on Glitch.](https://c-dacanay-absent-gardener.glitch.me/)

#### Built with

- [p5.js](https://p5js.org/)
- [VS Code](https://code.visualstudio.com/)
- [Figma](https://www.figma.com/)
- [Github](https://github.com)

#### Author

- [Christina Dacanay](http://cdacanay.com/) -- for Nature of Code at [NYU ITP](https://itp.nyu.edu)

### Acknowledgements

#### Code

- [Nature of Code](http://natureofcode.com) of course, especially regarding genetic algorithims and polar roses
- [TJ Rogers](https://codepen.io/tjrogers82/pen/feLhp) for button CSS

#### Not Code

- Daniel Shiffman
- Cassie Tarakajian
- Allison Parrish
- [The Good README Project](https://github.com/itp-dwd/2020-spring/blob/master/templates/readme-template.md)
