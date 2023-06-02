import { Box, useRadio, Card, CardHeader, Icon, Flex, Text, CardBody } from "@chakra-ui/react"

import { FiCheckCircle, FiCircle } from 'react-icons/fi'

export const RadioCard = (props: any) => {
    const {key, heading, content} = props.content
    const {state, getInputProps, getCheckboxProps } = useRadio(key) //it's supposed to be getRadioProps, but it's throwing a not defined error
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <>
        <Card as="label" w="100%" variant="filled">
          <CardHeader
            {...checkbox}
            pb={5}
            cursor="pointer"
            borderWidth="1px"
            borderRadius="md"
            _checked={{
              borderWidth: "2px",
              borderColor: "brand.secondary.f",
            }}
            _focus={{
              boxShadow: "outline",
            }}
          >
            <input {...input} />

            <Box>
              <Flex align="center" justify="space-between">
                <Text textStyle="h4" mb={1}>{heading}</Text>
                <Icon 
                  as={state.isChecked ? FiCheckCircle : FiCircle}
                  color= {state.isChecked ? "brand.secondary.f" : "gray.20"}
                  _dark={{
                    color: state.isChecked ? "brand.secondary.f" : "gray.l20"
                  }}
                  />
              </Flex>
              <Text textStyle="mid">{content}</Text>
            </Box>
          </CardHeader>
        </Card>
      </>
    );
  }