import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";

//https://stephane-monnot.github.io/react-vertical-timeline/#/ を使用

export function TimeLine(): JSX.Element {
  return (
    <VerticalTimeline lineColor="#58595B">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F9F8F7", color: "#58595b" }}
        contentArrowStyle={{ borderRight: "7px solid #F9F8F7" }}
        date="2020 - admission"
        iconStyle={{ background: "#319795", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3>I stepped into the world of the Internet</h3>
        <p>
          Entered the Faculty of Informatics at Kaishi professional university.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F9F8F7", color: "#58595b" }}
        contentArrowStyle={{ borderRight: "7px solid #F9F8F7" }}
        date="2022 - June - Intern"
        iconStyle={{ background: "#319795", color: "#fff" }}
        icon={<Gi3DStairs />}
      >
        <h3>Started an internship at a startup</h3>
        <p>
          Contributed to the creation of corporate pages while studying React
          and Next.js .
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F9F8F7", color: "#58595b" }}
        contentArrowStyle={{ borderRight: "7px solid #F9F8F7" }}
        date="2022 - August - Portfolio"
        iconStyle={{ background: "#319795", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3>Creating a Portfolio</h3>
        <p>
          Created my own portfolios to apply the knowledge I learned during my
          internship (this page).
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F9F8F7", color: "#58595b" }}
        contentArrowStyle={{ borderRight: "7px solid #F9F8F7" }}
        date="2023 - April - Intern"
        iconStyle={{ background: "#319795", color: "#fff" }}
        icon={<Gi3DStairs />}
      >
        <h3>Engaged in the development of a new service as a PM</h3>
        <p>
          Responsible for everything from requirement definition to development,
          cooperating with the team .
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
