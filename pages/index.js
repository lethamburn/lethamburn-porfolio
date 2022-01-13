import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Lottie from 'react-lottie'
import animationData from '../public/lotties/falcon.json'
import Layout from '../components/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { LoveSection, LoveEmoji } from '../components/love'
const Page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={6} mb={6}>
          <Box flexGrow={1} mt={3} mb={3}>
            <Heading as="h2" variant="page-title">
              Antonio Rosales
            </Heading>
            <p>FSGFADGASD (Bla/Bla/Bla)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/logo.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I love science fiction, comics, video games, death metal and 3D
            printing. This is my{' '}
            <NextLink href="www.github.com/lethamburn">
              <Link>GitHub</Link>
            </NextLink>
            . Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
                My projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Box mb={6} textAlign="center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Málaga, (Spain)
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>
            Completed Image Technician Grade in Jesús Marín Polytechnic School{' '}
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Started Multi-Platform Development Degree in Cesur vocational
            training School
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Moved to Madrid
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Full-Stack Development Bootcamp in Upgrade Hub
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works as a freelance developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <LoveSection>
            <LoveEmoji>⚙️</LoveEmoji>
            <Link href="https://ko-fi.com/lethamburn">3D Printing</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>💭</LoveEmoji>
            Comicbooks
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎮</LoveEmoji>
            <Link href="http://www.stayawake.es/">Videogames</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎸</LoveEmoji>
            Death Metal
          </LoveSection>
          <LoveSection>
            <LoveEmoji>🎞️</LoveEmoji>
            <Link href="https://letterboxd.com/lethamburn/">Movies</Link>
          </LoveSection>
          <LoveSection>
            <LoveEmoji>👽</LoveEmoji>
            Science Fiction
          </LoveSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
