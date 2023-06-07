import { Inter } from 'next/font/google'

import { AppPage } from '@rootcomponents/layout/AppPage'
import {
  useColorModeValue,
  VStack,
  Select,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Button,
  CardFooter,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const inter = Inter({ subsets: ['latin'] })

export default function Campaigns() {
  const data = [
    {
      "name": "Mon",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Tue",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Wed",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Thu",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Fri",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Sat",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Sun",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ];

  const trafficData = [
    { name: 'YouTube', traffic: Math.floor(Math.random() * 1000) },
    { name: 'Vimeo', traffic: Math.floor(Math.random() * 1000) },
    { name: 'FB', traffic: Math.floor(Math.random() * 1000) },
    { name: 'Twitter', traffic: Math.floor(Math.random() * 1000) },
    { name: 'IG', traffic: Math.floor(Math.random() * 1000) },
    { name: 'LinkedIn', traffic: Math.floor(Math.random() * 1000) },
  ];

  const locationData = [
    { name: 'South Africa', traffic: Math.floor(Math.random() * 1000) },
    { name: 'Japan', traffic: Math.floor(Math.random() * 1000) },
    { name: 'Singapore', traffic: Math.floor(Math.random() * 1000) },
    { name: 'Sweden', traffic: Math.floor(Math.random() * 1000) },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <AppPage>
        <VStack w="100%" spacing={6}>
          <Select placeholder="Today" variant="unstyled">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            w="100%"
          >
            <Card variant="filled" bg="#E5ECF6">
              <CardHeader>
                <Heading size="md">Views</Heading>
              </CardHeader>
              <CardBody>
                <Flex w="full" alignItems="center" justify="space-between">
                  <Heading>721K</Heading>
                  <Text>+9.15%</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="filled" bg="#E3F5FF">
              <CardHeader>
                <Heading size="md">Visits</Heading>
              </CardHeader>
              <CardBody>
                <Flex w="full" alignItems="center" justify="space-between">
                  <Heading>1,156</Heading>
                  <Text>-0.56%</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="filled" bg="#E5ECF6">
              <CardHeader>
                <Heading size="md">New Users</Heading>
              </CardHeader>
              <CardBody>
                <Flex w="full" alignItems="center" justify="space-between">
                  <Heading>145K</Heading>
                  <Text>+3.21%</Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="filled" bg="#E3F5FF">
              <CardHeader>
                <Heading size="md">Active Users</Heading>
              </CardHeader>
              <CardBody>
                <Flex w="full" alignItems="center" justify="space-between">
                  <Heading>1,156</Heading>
                  <Text>-0.56%</Text>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid spacing={6} templateColumns="1fr 320px" w="100%">
            <Card variant="filled" bg={useColorModeValue('brand.light', 'white.5')}>
              <CardHeader>
                <Select variant="unstyled">
                  <option value="option1">Total Users</option>
                  <option value="option1">Total Projects</option>
                  <option value="option1">Operating Status</option>
                </Select>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart
                    width={800}
                    height={490}
                    data={data}
                    margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" height={46} />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      name="Previous Week"
                      strokeWidth={3}
                      stroke="#A8C5DA"
                    />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      name="Current Week"
                      strokeWidth={3}
                      stroke="#1c1c1c"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>

            <Card variant="filled" bg="#E3F5FF">
              <CardHeader>
                <Heading size="md">Traffic by Website</Heading>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart
                    width={600}
                    height={300}
                    data={trafficData}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar
                      dataKey="traffic"
                      fill="#1c1c1c"
                      barSize={10}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
            w="100%"
          >
            <Card variant="filled" bg="#F7F9FB">
              <CardHeader>
                <Heading size="md">Traffic by Device</Heading>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart
                    width={800}
                    height={490}
                    data={trafficData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" height={46} />
                    <Bar
                      type="monotone"
                      dataKey="traffic"
                      name="Devices"
                      barSize={10}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>

            <Card variant="filled" bg="#F7F9FB">
              <CardHeader>
                <Heading size="md">Traffic by Location</Heading>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={locationData}
                      dataKey="traffic"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                      paddingAngle={4}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend verticalAlign="middle" align="right" height={0} layout="vertical" />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid spacing={6} templateColumns="auto-fill" w="100%">
            <Card variant="filled" bg="#F7F9FB">
              <CardHeader>
                <Heading size="md">Marketing & SEO</Heading>
              </CardHeader>
              <CardBody>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart
                    width={800}
                    height={490}
                    data={data}
                    margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="right" height={46} />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      name="Previous Week"
                      strokeWidth={3}
                      stroke="#A8C5DA"
                    />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      name="Current Week"
                      strokeWidth={3}
                      stroke="#1c1c1c"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </AppPage>
    </>
  );
}
