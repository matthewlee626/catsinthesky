# Submission Notes These notes will be read by WDB team members

## Given more time, what would you have done differently?

Styling in this project was pretty janky and adhoc. Given more time, I'd definitely utilize something like Theme UI to enforce more consistency in sizes, colors, etc. across the project. Furthermore, the usage of Material UI to create the expandable card for the reviews page didn't quite make sense given that that everything else was made with styled-components. More time would be used to make that component more consistent with the rest. In addition, the header could use more work; I considered it not too critical and didn't work too much on sizing and spacing. I do think that many of the containers could have refactored to reduce repetition. Also, more comments would be good although I find most components here to be quite self-explanatory.

## How did you deviate from the directions, if at all, and why?

Instead of creating a custom hook for the extra credit photo album, I used Next.js 's *getServerSideProps* method instead to fetch data on each request (as opposed to build time, as this API endpoint might have changing data if it was real).

## Is there anything else you'd like to let us know?

Can't sign up on Calendly!
