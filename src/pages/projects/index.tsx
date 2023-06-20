import { Inter } from 'next/font/google'

import { AppPage } from '@/components/layout/AppPage'
import {
  VStack,
  Flex,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

import { ProjectCard, ProjectCardProps } from '@/components/cards/ProjectCard';

export default function Home() {
  const projectsList: ProjectCardProps[] = [
    {
      title: "BCA Board",
      date: "Jan 12, 2022",
      totalTasks: 12,
      completedTasks: 8,
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1591727884968-cc11135a19b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1312&q=80",
      collaborators: ["https://images.unsplash.com/photo-1591727884968-cc11135a19b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1312&q=80"],
    },
    {
      title: "Project charter",
      date: "Nov 10, 2022",
      totalTasks: 25,
      completedTasks: 11,
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1611250169608-729774dee4ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      collaborators: ["https://images.unsplash.com/photo-1611250169608-729774dee4ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"],
    },
    {
      title: "Appoint project team",
      date: "Nov 10, 2022",
      totalTasks: 4,
      completedTasks: 4,
      status: "Completed",
      avatar: "https://plus.unsplash.com/premium_photo-1663054688278-ebf09d654d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      collaborators: ["https://plus.unsplash.com/premium_photo-1663054688278-ebf09d654d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"],
    },
    {
      title: "Stakeholder analysis",
      date: "Nov 10, 2022",
      totalTasks: 13,
      completedTasks: 4,
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2496&q=80",
      collaborators: ["https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2496&q=80"],
    },
    {
      title: "Poster illustation design",
      date: "Nov 10, 2022",
      totalTasks: 14,
      completedTasks: 10,
      status: "In Progress",
      avatar: "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2496&q=80",
      collaborators: ["https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2496&q=80"],
    },
    {
      title: "Pre kickoff meeting",
      date: "Nov 10, 2022",
      totalTasks: 14,
      completedTasks: 9,
      status: "In Progress",
      avatar: "https://plus.unsplash.com/premium_photo-1663054688278-ebf09d654d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      collaborators: ["https://plus.unsplash.com/premium_photo-1663054688278-ebf09d654d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"],
    },

  ];

  return (
    <>
      <AppPage>
        <VStack w="100%" spacing={6} alignItems="flex-start">
          <Text textStyle="h5">
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
            columns={{ base: 1, md: 2, lg: 3 }}
            // templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
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
      </AppPage>
    </>
  );
}
