import { Inter } from 'next/font/google'

import { Page } from '@root/components/layout/Page'
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

import { ProjectCard, ProjectCardProps } from '@root/components/cards/ProjectCard';

export default function Home() {
  const projectsList: ProjectCardProps[] = [
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },
    {
      title: "Coffee detail page - Main Page",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://bit.ly/kent-c-dodds",
      collaborators: ["https://bit.ly/kent-c-dodds"],
    },

  ];

  return (
    <>
      <Page>
        <VStack w="100%" spacing={6} alignItems="flex-start">
          <Text textStyle="h5" _dark={{ color: "black.100" }}>
            My Projects
          </Text>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            w="100%"
          >

            <Card variant="highlights2">
              <CardHeader>
                <Text textStyle="h5" _dark={{ color: "black.100" }}>
                  Current Projects
                </Text>
              </CardHeader>
              <CardBody>
                <Flex
                  w="full"
                  alignItems="center"
                  justify="space-between"
                  mt={2}
                >
                  <Text textStyle="h2" _dark={{ color: "black.100" }}>
                    237
                  </Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="highlights1">
              <CardHeader>
                <Text textStyle="h5" _dark={{ color: "black.100" }}>
                  Project Finance
                </Text>
              </CardHeader>
              <CardBody>
                <Flex
                  w="full"
                  alignItems="center"
                  justify="space-between"
                  mt={2}
                >
                  <Text textStyle="h2" _dark={{ color: "black.100" }}>
                    $3,145
                  </Text>
                </Flex>
              </CardBody>
            </Card>

            <Card variant="highlights2">
              <CardHeader>
                <Text textStyle="h5" _dark={{ color: "black.100" }}>
                  Our Clients
                </Text>
              </CardHeader>
              <CardBody>
                <Flex
                  w="full"
                  alignItems="center"
                  justify="space-between"
                  mt={2}
                >
                  <Text textStyle="h2" _dark={{ color: "black.100" }}>
                    49
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            w="100%"
          >
            {projectsList.map((project, key: number) => (
              <ProjectCard 
                key={`project-${key}`}
                title={project.title}
                date={project.date}
                totalTasks={project.totalTasks}
                completedTasks={project.completedTasks}
                status={project.status}
                avatar={project.avatar}
                collaborators={project.collaborators}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Page>
    </>
  );
}
