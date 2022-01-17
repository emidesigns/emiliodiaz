import Grid from "@mui/material/Grid";
import Nav from "./Nav";

const Header = () => {
  //   const Item = styled(Paper)(({ theme }) => ({
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  return (
    <>
      <Grid container>{/* <Nav /> */}</Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div>
            <h1>Emilio Diaz</h1>
            <h2>Front End Developer/Designer</h2>
            <p>
              Frontend developer with 5+ years of experience developing
              primarily in React. I leverage my previous UI design background to
              develop flawless high performing user experiences.
            </p>
            <p>
              Development: Working in the acquisitions space developing React
              components for the branded credit card application. Worked in the
              integration of Graffiti Alley (an internal UI library) combining
              legacy React Redux state management with the library’s Context and
              Hooks and eliminated ~10+ daily compliance issues related to
              consent to terms. As a contributor to Graffiti Alley, I increased
              the accessibility score of the credit card application to a 95%
              Lighthouse rating and supported the brand consistency of the
              credit card application experience. Developed Function and Class
              based components leveraging SCSS (Zurb’s Foundation flex and
              grid), JSX and Javascript ES6 syntax. Conducted A/B testing
              campaigns with an inhouse Javascript testing framework. The latest
              campaign led to the adoption of a decision page feature
              contributing to a 10% lift in funding for cards with deposits.
              Involved in the development and deployment of features through the
              entire software development life cycle including on-call support
              and monitoring via Splunk, DataDog and NewRelic. Wrote end to end
              acceptance tests using NightwatchJS and unit tests using Jest,
              Mocha/Chai and Enzyme. Team Influence and Growth: Working in an
              agile environment following a sprint delivery cadence using JIRA
              to handle ongoing sprints and backlog. Keen on clearly defining
              acceptance criteria, flagging blockers and communicating issues
              with product owners and scrum masters. Consistently focused on
              fostering a culture of transparency and candid debate where all
              team members have a voice irrespective of seniority.
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            cumque deserunt exercitationem ut? Placeat vitae non commodi ipsa?
            Voluptatem qui ullam quod cumque voluptate blanditiis perferendis
            minus earum reprehenderit eos.
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            blanditiis culpa aliquid quos eligendi obcaecati debitis cupiditate,
            nobis iusto a atque, corporis harum eius laborum doloribus ipsa
            perferendis commodi autem.
          </div>
        </Grid>
        <Grid item xs={8}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            illum sequi hic quod sint laudantium recusandae laborum odio quasi
            voluptate rerum deserunt deleniti, aut iste vel maiores incidunt
            distinctio quam.
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
