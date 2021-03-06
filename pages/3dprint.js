import { Container, Heading, SimpleGrid, Button, Box } from '@chakra-ui/react'
import Section from '../components/section'
import { PhotoItem } from '../components/grid-item'
import Layout from '../components/article'
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons'
import first from "../public/images/3D/1.jpg";
import second from "../public/images/3D/2.jpg";
import third from "../public/images/3D/3.png";
import four from "../public/images/3D/4.jpg";
import five from "../public/images/3D/5.jpg";
import six from "../public/images/3D/6.jpg";
import seven from "../public/images/3D/7.jpg"
const printing = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={4}>
       3D Printing
      </Heading>
      <Box align="center" my={4}>
      <NextLink href="https://ko-fi.com/lethamburn" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              Ko-Fi
            </Button>
          </NextLink>
          </Box>
      <SimpleGrid  gap={2}>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={first}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={second}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={five}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={six}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={seven}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={third}/>
        </Section>
        <Section>
         <PhotoItem id="First" title="First" thumbnail={four}/>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)
}


export default printing
