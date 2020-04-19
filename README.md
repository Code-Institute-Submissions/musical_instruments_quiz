# Musical Instruments

This website was created as an educational utility which provides users with the facts about different musical instruments and instrument families/groups in order to expand their knowledge on the subject.
The main idea is that the content delivery should be similar to the experience that a person gets by visiting a museum or a gallery but with more interactive content – all the facts should be concise and only relevant information should be offered to the user.

# UX

This website targets all age and gender groups with the purpose of educating and motivating people to get more interested in music and learn how to play a certain instrument.
It is intended to be a single page website with the different functionalities and interactive content.

Landing page would contain links to different sections of the website. Second section is the history part where user can learn about the origins of a particular group of instruments as well as the moment in history when instruments that are still in use  took today’s shape.

Third section is the representation of different instrument families/groups where user can toggle the additional content by clicking on instrument images.

Main star of the website would be the quiz and that is the fourth section which is the last one on the site.

When all the future features (like playable sounds or a virtual instrument) are introduced this website could be a useful learning utility or tool for the elementary school teachers as well as the pupils.

# Wireframe

Initial sketch for the project design:

[Sketch created with InVision](https://projects.invisionapp.com/prototype/jswebsite-ck969mz2j0022c101kqvcs0cn)

# Features

## Existing Features

-	Scrollable timeline - allows users to learn about significant dates in history of musical instruments
-	Carousel – allows users to browse through the photos of historic musical instruments
-	Clickable examples - modal plugin was used to add dialog (new content) which is triggered by clicking on images in the Examples section

- Quiz – fully functional quiz with several sub-features:
    1	Start button executes the quiz beginning
    2	Start button is replaced with submit button
    3	User can chose from 4 different offered answers
    4	Quiz won’t continue if no answer is selected
    5	Message Correct or Wrong is shown depending on the answer value
    6	After the answer is submitted Submit button is replaced with Next button
    7	On the final question next button is replaced with See Results button
    8	Number of correct answers is shown
    9	A message depending on the score is shown: 
        -	If the result > 67% - Excellent score! Your knowledge about musical instruments is astounding!
        -	If the result is > 34% but < 67% - Not bad! Just a little bit more focus and you'll get there!
        -	If the result < 34%- Not your finest result. Maybe browse through the site again?
        -	Reset button is shown which starts the quiz from beginning.

## Features Left to Implement

•	List of all the instruments that are used and recorded over the last couple of centuries with the sound examples which will give user the idea of how different instruments sound.
•	Random fun facts about the instruments
•	Detailed description of the functionalities of a certain instrument and how to play it
•	Virtual piano or guitar operable with a midi controller

# Technologies Used

•	HTML
o	The project uses HTML as the core structure of the website
•	CSS
o	The project uses CSS for better UX
•	Bootstrap
o	The project uses Bootstrap to simplify page layout creation
•	JavaScript
o	The project uses JavaScript to provide different functionalities 

# Testing

This website was built around the desktop view sketch (link available in the Wireframes section of this readme file) that was made before writing a single line of code but with the mobile view in mind so after introducing any new feature I would always launch mobile device view using the Chrome’s inspect utility. If appearance of any particular page on the site wasn’t optimized for the mobile devices browsing, I would use media queries outside of what was already built in the Bootstrap’s library. 
For example media queries were used for Navbar, Bootstrap’s Carousel and the Quiz section.
I have used 2 different quiz codes taken from CodePen (https://codepen.io/evgesha0411/pen/wqEBPG and https://codepen.io/aysarsalem/pen/KqPwQQ)  for the testing purposes built around jQuery library and wasn’t satisfied with the responsiveness and the features that the codes have had so I have made a new code for quiz from scratch using pure JavaScript without libraries.  

## TESTING the Features

1.	Examples section:

i.	Go to the "Examples" page

ii.	Try to click on each of the images and verify that a new content appears

iii.	Try to click anywhere outside of the dialog box and verify that it closes

2.	Quiz section:

i.	Go to the Quiz page

ii.	Try to click on Start button and verify that quiz starts and questions with offered answers appear along with the submit button and the Start button is now hidden

iii.	Try to click on submit button without selecting an answer and verify that a message “Please select an Answer” appears

iv.	Try to click on submit button after selecting one of the answers and verify that a message “Correct” or “Wrong” appears, answers are hidden and Next button appears

v.	Try to click on Next button and verify that new question appears along with the offered answers and the Next button is replaced with the Submit button

vi.	Upon the last question try to click on Submit button and verify that Submit button is replaced with See Results button, “Correct/Wrong” message is shown and offered answers are hidden

vii.	Try to click on See Results button and verify that message “You have X correct answers out of X” and a message depending on the score is shown and the See Results button is replaced with Reset button

viii.	Try to click on Reset button and verify that the Quiz restarts

# Deployment

All the code has been written on GitPod Workspace and was saved (committed) on my GitHub repository https://github.com/Lingvistik/musical_instruments_quiz

Live version of the website is available on GitHub pages at https://lingvistik.github.io/musical_instruments_quiz/   
In the Settings section of my GitHub page there is a GitHub pages section that allowed me to publish my website.

# Credits

## Content
•	All the text for Examples section was copied from the Wikipedia articles:
-	https://en.wikipedia.org/wiki/String_instrument
-	https://en.wikipedia.org/wiki/Keyboard_instrument
-	https://en.wikipedia.org/wiki/Brass_instrument
-	https://en.wikipedia.org/wiki/Percussion_instrument
-	https://en.wikipedia.org/wiki/Woodwind_instrument
-	https://en.wikipedia.org/wiki/Electronic_musical_instrument
	
    Responsive Timeline  https://codepen.io/web_designer_sanchit/pen/eLjvyw

•	Modal plugin - https://getbootstrap.com/docs/4.0/components/modal/

•	Carousel plugin - https://getbootstrap.com/docs/4.0/components/carousel/

•	Text for Timeline:
-	https://www.ancient.eu/timeline/Musical_Instrument/
-	https://www.smashinglists.com/10-earliest-known-musical-instruments/
-	https://en.wikipedia.org/

## Media

• Homepage image is an original art by myself

• Quiz section background image: https://upload.wikimedia.org/wikipedia/commons/7/7d/Studio_A_Live_Room.jpg

• All Examples section images are taken from https://www.hiclipart.com

## Acknowledgements
•	I received inspiration for this project from the Course lessons provided by Code Institute • 

•	I would like to thank my friend Ivan Jandric who gave me crucial insights in how my quiz code should work and how to make it more dynamic and help me address the issues with my code.
