import React from 'react';
import { render } from 'react-dom';
import {
  Deck,
  Slide,
  Notes,
  Heading,
  Magic,
  Anim,
  Link,
  Text,
  BlockQuote,
  Quote,
  Cite,
  Appear,
  Code,
  Image,
  List,
  ListItem
} from 'spectacle';
import REPL from './repl/repl';
import createTheme from 'spectacle/lib/themes/default';
const fs = require('fs');

const theme = createTheme(
  {
    primary: '#FFF',
    secondary: '#333',
    tertiary: '#645394'
  },
  {
    primary: 'sans-serif'
  }
);

const defaultSlideProps = {
  align: 'center center',
  className: 'default-slide'
};

const AppearingBlock = props => (
  <Appear {...props}>
    <div>{props.children}</div>
  </Appear>
);

function Presentation() {
  return (
    <Deck theme={theme} transition={['slide']} progress="none" controls={false}>
      <Slide {...defaultSlideProps}>
        <Heading caps fit size={1}>
          Concate-what?
        </Heading>
        <Text fit>
          Adventures in weird programming for the discerning programmer
        </Text>
        <Text>Stian Veum Møllersen / @mollerse</Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Heading size={2}>&hellip;it begins</Heading>
        <Notes>
          <p>
            Its late year back in Norway. Its cold, its dark (like seriously, we
            have like 4 hours of daylight this time of year). Its the perfect
            time to dive into that Pocket-queue thats been neglegted for a year
            or so.
          </p>
          <p>
            Right about now is where I would have loved to start this talk with
            me walking along the dusty ailes of a library in the dodgey part of
            my home town, but the times have moved ahead to twitter, blogposts
            and neverending pocket-queues.
          </p>
          <p>
            But you notice a familiar name among the links. That author that
            wrote that book you once read and liked alot.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <Text>&#8220;Perlis Languages&#8221; by Michael Fogus 📝</Text>
        </Appear>
        <Notes>
          <p>
            He wrote the book "Functional JavaScript", which meant alot to me as
            a starting webdeveloper. Showing me that there was a world beyond
            "The Good Parts" and changing how I viewed central parts of my
            language of choice.
          </p>
          <p>
            The premise of this blogpost was simple: Here are a collection of
            languages that changed my view on programming. Maybe it can do the
            same for you. It starts out with a quote:
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <BlockQuote>
            <Quote>
              A language that doesn’t affect the way you think about programming
              is not worth knowing.
            </Quote>
            <Cite>Alan Perlis</Cite>
          </BlockQuote>
        </Appear>
        <Notes>
          <p>
            I just love the promise of this quote. It alludes to the idea that
            languages can change your perspective on programming. And that is
            just a bit magical to me. And it promises that there actually are
            languages that are different enough in and of themselves that they
            become worth knowing.
          </p>
          <p>
            Those who don't believe in magic will never find it. - Roald Dahl
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>The first language on this list was Joy 🤗</Text>
        <Appear>
          <Text>&hellip;a so-called Concatenative Language 🚟</Text>
        </Appear>
        <Notes>
          <p>
            Up first was a language called Joy. That was quite the name. It
            being all dark and bleak and cold, a little bit of Joy wouldn't
            hurt.
          </p>
          <p>
            It was a so-called Concatenative Language. A term I had never heard
            of before. I knew Functional, Object Oriented, Imperative,
            Declarative, and all these other terms. But not Concateantive.
          </p>

          <p>
            Another word was also being used. Stack-based. Programming with
            stacks? It gave me some associations to assembly programming and
            other low-level things.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>The program state lives on a stack 📚</Text>
        <Appear>
          <Text>Push things on the stack to change the state</Text>
        </Appear>
        <Appear>
          <Text>&hellip;and pop things off when you need to do things 👷‍♂️</Text>
        </Appear>
        <Notes>
          <p>
            The stack-based term is not undeserved. The whole state of the world
            lives in a global stack, which you interact with to do your
            programming business.
          </p>
          <p>
            Pushing, popping and throwing things around on there. The functions
            in a concatenative language either puts things on the stack, takes
            things off the stack og a combination of the two.
          </p>
          <p>
            And that is pretty much the semantics of the language summed up in
            two sentences.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL mode="stack" code={'# The stack is your friend'} />
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>OK. So this is a postfix calculator thing? 🧐</Text>
        <Appear>
          <Text>Or is there more to it? 🕵️‍♂️</Text>
        </Appear>
        <Notes>
          <p>
            At first glance the essence of Joy seemed to be that of a
            stack-based, postfix calculator. Similar to the ones we heard of in
            university as this thing no one used anymore.
          </p>
          <p>
            But surely there has to be more to it. Just postfix and a stack
            doesn't seem all that interesting. And why call it concatenative?
            There must be a deeper idea here.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <Text>
            You construct programs by concatenating smaller programs 🚟🚟🚟
          </Text>
        </Appear>
        <Appear>
          <Text>
            Constructing arbitrarily large programs by placing smaller programs
            after one another 🧙‍♂️
          </Text>
        </Appear>
        <Notes>
          <p>
            Going back to the description of Joy, theres this sentence that
            stands out: You construct programs by concatenating smaller
            programs. It sounds simple enough, programs are written left to
            right with the operation you want to do after its operands.
          </p>
          <p>
            But this also means that any two valid programs can form a new
            larger program by just placing them after one another - or
            composition by concatenation. That is some magic stuff.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Composition through concatention 🧙‍♂️</Text>
        <Appear>
          <Text className="small-text">This is where it gets its name 😎</Text>
        </Appear>
        <Notes>
          <p>
            This is the magic sauce of concatenative languages. Composition
            through concatenation. This is a bit heady, so let's look at an
            example:
          </p>
        </Notes>
      </Slide>

      <Magic>
        <Slide {...defaultSlideProps}>
          <Text>
            <Code>succ 5 mod 0 equal</Code>
          </Text>
          <Notes>
            This is a program which figures out if the successor to a number is
            divisible by five. It is composed of five smaller programs and
            concatenated, or juxtaposed. Which is where we get the name of the
            programming language family.
          </Notes>
        </Slide>

        <Slide {...defaultSlideProps}>
          <Text>
            <Code>succ >> 5 >> mod >> 0 >> equal</Code>
          </Text>
          <Notes>
            If we insert explicit composition operators here. We Start noticing
            strange things. 5 and 0 arent functions, they can't be composed like
            that. Normally we would have to apply functions that accepted those
            as values.
          </Notes>
        </Slide>

        <Slide {...defaultSlideProps}>
          <Text>
            <Code>f x = equal(0(mod(5(succ(x)))</Code>
          </Text>
          <Notes>
            If we write the same thing as function calls it becomes really
            visible.
          </Notes>
        </Slide>
      </Magic>

      <Slide {...defaultSlideProps}>
        <Text>Are values functions? 🙀</Text>
        <Appear>
          <Text>
            Yes. And this makes Joy is a purely functional language 👨‍🏫
          </Text>
        </Appear>
        <Notes>
          <p>
            Are values functions? Yes. And that is why Joy can be called a
            purely functional language, in the literal sense of the word.
            Everything is a function, even the values.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>This is also why composition is implicit 🤯</Text>
        <Appear>
          <Text>
            <Code>5: [S] -> [S:5]</Code>
          </Text>
        </Appear>
        <Notes>
          When everything is a function of the same shape and type, you dont
          really need to have explicit composition, just concatenating them is
          enough.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Manfred von Thun</Text>
        <Image src="assets/mvt.jpg" width="25%" />
        <Heading size={2}>Joy (2001)</Heading>
        <Notes>
          <p>
            This is Manfred von Thun. The person who thought of all this stuff
            and constructed his language, Joy, based on these ideas.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Wanted to simplify lambda calculus by removing the need for variable
          bindings 🤓
        </Text>
        <Appear>
          <Text>
            Found solutions in Backus' FP and SKI calculus from combinatory
            logic 💡
          </Text>
        </Appear>
        <Notes>
          <p>
            He wanted to simplify lambda calculus, by getting rid of the need
            for variables and variable bindings. In other words, replace
            application with composition. Quite the lofty goal.
          </p>
          <p>
            He got his inspiration from Backus' FP language and combinatory
            logic, especially SKI-calculus. There exist some papers on this
            stuff, written by von Thun and others. Sadly von Thun passed away in
            2011 and with him most active research into this as far as I am
            aware.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Why stacks? 👨‍💻</Text>
        <Appear>
          <Text>Just the simplest possible structure 🏗</Text>
        </Appear>
        <Notes>
          Why stacks tho? Turned out it was just the simplest structure. And it
          meant that the inevetable manipulation of the global state would be as
          simple as possible since stack operators are simple.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL mode="stack" code={'# Stack manipulators'} />
      </Slide>

      <Slide {...defaultSlideProps}>
        <iframe
          src="https://open.spotify.com/embed/track/34zbPJOhBLVd4sYbHSV7nr"
          width="300"
          height="100"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <Notes>Remind you of something?</Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Is this expressive enough? 🤔</Text>
        <Notes>This is all well and good, but is this expressive enough?</Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Combinators evaluating quoted programs 👨‍🔬</Text>
        <Appear>
          <Text>
            Same higher order characteristics as a functional language 🎉
          </Text>
        </Appear>
        <Notes>
          <p>
            Joy has your back, there are special combinators that can evaluate
            quoted programs. This gives Joy many of the same characteristics as
            functional programming languages, with their higher order functions.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="stack"
          code={'# Quoted programs\n# and higher order words'}
        />
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="stack"
          code={`quicksort:
  [small]
  []
  [uncons [>] split]
  [enconcat]
  binrec ;`}
        />
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>This also gives Joy code-as-data characteristics 💻</Text>
        <Appear>
          <Text>With a different structure: sequence 🚋🚋🚋</Text>
        </Appear>
        <Notes>
          <p>
            With the ability to keep code in lists, much in the same way as
            Lisp, we get the same code-as-data-as-code charachteristic as Lisp
            has. This is why Joy often gets called the Lisp of concatenative
            languages.
          </p>
          <p>
            There is one crucial difference between Lisp and Joy though. The
            structure of the data is a sequence, not a tree. Because evaluation
            happens postfix everything just flattens out to a single sequence.
            Applying a quotation can almost be thought of as prepending/consing
            code to the code you are already evaluating. And this enables code
            in concatenative style to be streamed - I wonder if this is the
            reason for PostScripts design.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>This was a lot of theory 👨‍🏫</Text>
        <Appear>
          <Text>Does this have practical use? 🤔</Text>
        </Appear>
        <Notes>
          <p>
            OK, so von Thun has presented us with a radically different view on
            what programming can be. And that in and of itself lives up to the
            promise of a Perlis language (atleast in my opinion).
          </p>
          <p>
            But are there any practical use for this programming style? Is there
            something concatenative languages are especially good at, given the
            nature of composition?
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>This brings us to Forth 🕵️‍♂️</Text>
        <Appear>
          <Text className="small-text">The progenitor 🦕</Text>
        </Appear>
        <Notes>
          Forth is the most widely used variant of concatenative languages. And
          also the first concatenative language, allthough it was not known as
          such at the time.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text className="text">Charles &#8220;Chuck&#8221; H. Moore</Text>
        <Image src="assets/ChuckMoore.jpg" width="25%" />
        <Heading size={2}>Forth (1968)</Heading>
        <Notes>Forth was created in 1968 by Chuck Moore.</Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Forth is not based on the same ideas as Joy 👨‍🎨</Text>
        <Appear>
          <Text>Still has largely the same semantics and syntax 🙃</Text>
        </Appear>
        <Notes>
          Joy was created in 2001, Forth in 1968. Thats over 30 years apart. If
          von Thun was the first to think of the "everything is a
          function"-paradigm, how did Chuck Moore land on almost the exact same
          syntax and semantics?
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Why?</Text>
        <Appear>
          <Text>Simplicity.</Text>
        </Appear>
        <Notes>
          von Thun was motivated by finding a simpler representation of
          computing. Chuck Moore was also motivated by the wish for a simpler
          solution, but his approach was very different.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Displeased with the &#8220;Tower of Babel&#8221; keeping him from his
          machine 😾
        </Text>
        <Appear>
          <Text>Wanted something simple and portable 💼</Text>
        </Appear>
        <Notes>
          <p>
            Not overly pleased with the state of affairs in 1968, which he
            described as a Tower of Babel, Chuck Moore wanted to regain his
            computer from the myriad of assemblers, compilers, linkers.
          </p>
          <p>
            Chuck wanted something simple and portable. Which lived close to the
            machine, but still expressive enough to get things done. Forth was
            the answer to this.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>The specs of registers varied too much 🙅‍♂️</Text>
        <Appear>
          <Text>But all CPUs had a stack 💁‍♂️</Text>
        </Appear>
        <Notes>
          <p>
            Back in the days every computer had their own design and CPUs varied
            greatly in what kind of capabilities they shipped with. You would
            have to tweak your programs to fit a great variety of CPU
            archiectures and Chuck did not want to do that.
          </p>
          <p>
            The answer became to base the entire language on the stack, because
            that was the one commonality between CPUs.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>The language had to be easy to compile 👨‍💻</Text>
        <Appear>
          <Text>
            Postfix, space separated, and with as few special operators as
            possible.
          </Text>
        </Appear>
        <Notes>
          <p>
            Back in the days, computers didnt have a lot of working memory so if
            Chuck were to skip the whole issue of assemblers and tooling it
            meant working directly with the CPU. That meant that the language he
            was making had to be simple to compile and translate to machine
            code.
          </p>
          <p>
            That meant taking away the things that made compiling hard. Like
            arity checking on operators, solved with postfix. Using space for
            token separation instead of other delimiters like braces and
            brackets, and only as few special operators as possible.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Moore arrived at Forth by way of practial limitations 🚧</Text>
        <Notes>
          Chuck Moore arrived at Forth, and the same syntax and semantics as
          Joy, by way of practial limitations imposed by the computers of the
          day.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          Turns out simplicity is a powerful motivator and we dont really have
          that many ways of expressing simplicity in written programs 🤹‍♂️
        </Text>
        <Notes>
          Simplicity was the motivator for both languages. von Thun wanted to
          simplify lambda calculus and ended up taking out variables and any
          kind of explicit composition. Moore, as we shall see, had a different
          way to approach it, but the goal was still simplicity.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>One more crucial thing about how Forth was designed 🕵️‍♂️</Text>
        <Appear>
          <Text>It had to be simple to use 👨‍💻</Text>
        </Appear>
        <Notes>
          <p>
            There was one more crucial thing about the design decisions that
            went into Forth. It had to be simple to use, the language needed to
            scale from the very low level machine interfaces all the way up to
            the higher level.
          </p>
          <p>
            And that takes us to the next key piece of insight that can be
            gleaned from this forgotten world of concatenative languages.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="canvas"
          code={fs.readFileSync('code/triangle.ait', 'utf8')}
        />
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="canvas"
          code={fs.readFileSync('code/triangle-done.ait', 'utf8')}
        />
      </Slide>

      <Magic>
        <Slide {...defaultSlideProps}>
          <Text>Thinking Concatenative</Text>
          <Notes>
            <p>
              You could almost call this thinking concatenatively. This way of
              working falls so naturally out of the way concatenative languages
              work, with the easy substitution and extraction of sub-programs
              for reuse or repitition.
            </p>
            <p>
              Whenever you see something which you feel should have a name or
              something which can be made clearer by naming it you can do so
              almost effortlessly.
            </p>
          </Notes>
        </Slide>

        <Slide {...defaultSlideProps}>
          <Text>Thinking Forth</Text>
          <Notes>
            In fact, someone already thought about this very hard. The people
            writing Forth back in the 70s and 80s noticed this pattern aswell,
            and named it Forth Thinking - or Thinking Forth.
          </Notes>
        </Slide>

        <Slide {...defaultSlideProps}>
          <Text>Thinking Forth (1984)</Text>
          <Image width="35%" src="assets/thinking_forth.JPG" />
          <Notes>
            <p>
              They even wrote a book about it. This book has become one of my
              most favorite books about programming. Not only because it
              describes how it was working in an extremely facinating language,
              but because it describes the philosophy of working in Forth.
            </p>

            <p>
              Not only describing the philosophy, which in itself is quite
              interesting given how similar it is to the way we work today,
              incrementally and exploratory.
            </p>
          </Notes>
        </Slide>
      </Magic>

      <Slide {...defaultSlideProps}>
        <Text>Factoring</Text>
        <List>
          <Appear>
            <ListItem>Factor</ListItem>
          </Appear>
          <Appear>
            <ListItem>...to clarify meaning</ListItem>
          </Appear>
          <Appear>
            <ListItem>...to give something a name</ListItem>
          </Appear>
          <Appear>
            <ListItem>...to avoid repitition</ListItem>
          </Appear>
          <Appear>
            <ListItem>...to hide details likely to change</ListItem>
          </Appear>
          <Appear>
            <ListItem>...to simplify APIs</ListItem>
          </Appear>
        </List>
        <Notes>
          <p>
            In fact, they named their philosophy of working Factoring, after the
            act of decomposing your program into parts. And outlined some
            guidelines for when you would want to decompse your program:
          </p>
          <p>
            Remind you of something? This is basically refactoring as defined by
            Martin Fowler in 1999, only this was in 1984.
          </p>
          <p>
            The Forth programmers would repeat this process and build a new
            layer of vocaulary which you then could further build upon.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Allthough, this isn't always easy 😅</Text>
        <Notes>
          Without the ability to name variables and arguments, you get into some
          funny situations with stack-shuffling.
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps} className="repl-slide">
        <REPL
          mode="canvas"
          code={fs.readFileSync('code/triangle-api.ait', 'utf8')}
        />
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>It kinda makes you wonder if it's worth it 🤔</Text>
        <Appear>
          <Text>JVM and CPython says it is 😎</Text>
        </Appear>
        <Notes>
          <p>
            Being this cumbersome, you sometimes wonder if the stack-stuff is
            actually worth it. But some of the most widely used VMs today are
            based on stack-machines. This is because code for a stack-machine is
            easy to optimize, for many of the same reasons it is easy to create
            abstractions. A sequence of program can be swapped out for a more
            performant sequence yielding the same result without having to
            rewire the program.
          </p>
          <p>
            So theres that, but theres also the part which I find most
            interesting:
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>
          The Goal of this process is to land at something which explains the
          problem in its most precise form 👨‍🏫
        </Text>
        <Notes>
          <p>
            The end goal of this process was to build up to something which
            would explain the problem in its most precise form and using the
            language of the problem itself.
          </p>
          <p>
            And new language to describe a problem will lead to better
            communication and lead to better solutions. This was even apparent
            in how Chuck Moore used specific language to describe the different
            parts of his language. Procedures, or functions, he called Words and
            modules was called Lexicons. This was to give the associations to
            natuaral language and how you would go about writing a description.
            For those who attended Felienne's keynote yesterday, this will sound
            familiar.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <Text>
            This process followed naturally from the design of the language 🙌
          </Text>
        </Appear>
        <Notes>
          <p>
            The most interesting thing learned from reading Thinking Forth and
            studying concatenative languages was how this way of working
            following naturally from how the language was designed.
          </p>
          <p>
            The lack of syntactic control structures like blocks and variables
            with scopes, meant that extracting functionality was as simple as
            replacing sequences of words with a name for that sequence. Almost
            like we would do in writing and spoken communication.
          </p>
          <p>
            Working in a pure compose-mode like this is quite powerful. Just
            imagine what React unlocked for webprogrammers, or how Unix-pipes
            have inspired countless people over the years.
          </p>
          <p>
            And that I think is the most important lesson to be learned from
            this strange looking family of languages. Design matters and it will
            affect how you work, how you play, how you learn, how you
            communicate.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Appear>
          <Text>Little did I know where this one blogpost would take me 🗺</Text>
        </Appear>
        <Notes>
          <p>
            Like, its weird how the little random things that happen at various
            times can have souch a profound effect on your life and career. This
            was about 2.5 year ago, since then so many cool things have happened
            because I decided to read that blogpost at that particular time.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>One thing I hope you take from this:</Text>
        <Appear>
          <Text>Be curious 🕵️‍♂️</Text>
        </Appear>
        <Notes>
          <p>
            If theres only one thing you take away from this it should be that
            it can be lifechanging to be curious. If I hadn't stopped to ask why
            a bunch of times, I probably wouldnt be here today talking to you
            about this shiny cool thing I stumbled upon.
          </p>
          <p>
            Most things in the world, and especially an artificial world like
            programming, is there because someone wanted it to be there. If you
            understand the reasoning behind that decision you too can learn from
            it. Don't stop at your predjudices, don't let your love for onething
            disqualify another thing. Be open to new experiences and points of
            view.
          </p>
        </Notes>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Text>Further reading</Text>
        <List>
          <Appear>
            <ListItem>
              <Link href="http://www.kevinalbrecht.com/code/joy-mirror/joy.html">
                Joy Homepage (mirror)
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://factorcode.org/">Factor Language</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://unusual.place/">Ait Language</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://thinking-forth.sourceforge.net/">
                Thinking Forth
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://leanpub.com/readevalprintlove003/read">
                Read Eval Print λove #3 - Michael Fogus
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://archive.vector.org.uk/art10000350">
                A Conversation with Manfred von Thun
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="https://www.forth.com/resources/forth-programming-language/">
                The Evolution of Forth
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://www.codecommit.com/blog/cat/the-joy-of-concatenative-languages-part-1">
                The Joy of Concatenative Languages
              </Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Link href="http://evincarofautumn.blogspot.co.uk/2012/02/why-concatenative-programming-matters.html">
                Why Concatenative Programming Matters
              </Link>
            </ListItem>
          </Appear>
        </List>
      </Slide>

      <Slide {...defaultSlideProps}>
        <Heading caps size={1}>
          Thank you for listening
        </Heading>
        <Text>Stian Veum Møllersen / @mollerse</Text>
      </Slide>
    </Deck>
  );
}
const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Presentation />, mount);
