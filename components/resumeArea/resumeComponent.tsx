import { Text } from "@chakra-ui/react";
import { Line } from "../../components/line/line";
import { Tech } from "../../components/resumeArea/tech";
import { TimeLine } from "../../components/resumeArea/timeLine";

export function ResumeComponent(): JSX.Element {
  return (
    <>
      <Text fontWeight="bold" fontSize="4xl" color="#58595b">
        Skil Set & Time Line
      </Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">
        Technical Skills
      </Text>
      <Line />
      <Tech />
      <TimeLine />
    </>
  );
}
