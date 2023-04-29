import { Inter } from 'next/font/google'

import { Page } from '@root/components/layout/Page'
import { VStack, Select, SimpleGrid, Heading, Text, Button, CardFooter, Card, CardHeader, CardBody } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Page>
        <VStack w="100%">
          <Select placeholder="Today" variant="unstyled">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            w="100%"
          >
            <Card variant="filled">
              <CardHeader>
                <Heading size="md"> Views</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  721K
                </Text>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </VStack>
      </Page>
    </>
  );
}
