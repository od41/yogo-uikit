import React from 'react'

import { 
    Avatar, 
    Box, 
    Flex, 
    Heading, 
    Text, 
    VStack
} from '@chakra-ui/react'

export const ActivityList = ({list}: any) => {
  return (
    <VStack gap={0} justify='flex-start' pt={2}>
        {list.map((notification: any) => (
            <Flex alignItems="flex-start" justify="space-between" py={1}>
                <Avatar
                    // name="Item"
                    bgColor="brand.secondary.kappa"
                    color="black.100"
                    // color={useColorModeValue("black.100", "gray.l80")}
                    size="xs"
                    mr={2}
                    borderRadius="lg"
                    icon={<notification.icon fontSize='1rem' />}
                />
                <Box>
                    <Text textStyle="mid">{notification.title}</Text>
                    <Text textStyle="small">{notification.time}</Text>
                </Box>
            </Flex>
        ))}
    </VStack>
  )
}