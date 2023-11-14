import { MoonIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

const MiniStatistics = (props) => {
  const { name, value, growth, startCont, endCont } = props;
  return (
    <Card>
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {startCont}
          <Stat ml={startCont ? "18px" : "0px"}>
            <StatLabel color={"#A3AED0"}>{name}</StatLabel>
            <StatNumber fontSize={"24px"}>{value}</StatNumber>
            {growth ? (
              <StatHelpText>{growth}since last month</StatHelpText>
            ) : null}
          </Stat>
          {endCont}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
