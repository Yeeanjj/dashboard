import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import MiniStatistics from "../components/home/MiniStatistics";
import { MoonIcon } from "@chakra-ui/icons";
import IconBox from "../components/icon/IconBox";
import LineChart from "../components/charts/LineChart";
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
} from "../components/charts/ChartData";
import ApexChart from "../components/charts/ColumnChart";
import MiniCalendar from "../components/calendar/MiniCalendar";

const boxBg = "secondary.500";

const Home = () => {
  return (
    <Layout title="DashBoard" pagename="DashBoard">
      <SimpleGrid columns={[1, 2, 3, null, 6]} spacing={"20px"}>
        <MiniStatistics
          name="Earnings"
          value="$350.4"
          startCont={
            <IconBox w="30px" h="30px" bg={boxBg} icon={<MoonIcon />} />
          }
        />
        <MiniStatistics name="Spend this month" value="$642.39" />
        <MiniStatistics name="Sales" value="$574.34" growth="+23%" />
        <MiniStatistics
          name="Your balance"
          value="$1,000"
          endCont={<IconBox bg="violet" icon={<MoonIcon />} />}
        />
        <MiniStatistics name="New Tasks" value="154" />
        <MiniStatistics name="Total Projects" value="2935" />
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} spacing={"20px"} mt={"20px"}>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            <LineChart
              chartData={lineChartDataOverallRevenue}
              chartOptions={lineChartOptionsOverallRevenue}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>
          <CardBody>
            <ApexChart />
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, null, 2]} spacing={"20px"} mt={"20px"}>
        <Box w="100%" h="300px" bg="white"></Box>
        <SimpleGrid columns={[1, 2]} spacing={"20px"}>
          <Box w="100%" h="300px" bg="white"></Box>
          <MiniCalendar />
        </SimpleGrid>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
