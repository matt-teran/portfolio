import {
  Avatar,
  Button,
  Card,
  Carousel,
  Divider,
  Image,
  Layout,
  Menu,
  Space,
  Typography,
} from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  LinkOutlined,
} from '@ant-design/icons';
import './App.css';
import Meta from 'antd/lib/card/Meta';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import hrImg from '../assets/hr.png';
import nestjsPostgresImg from '../assets/nestjs-postgres.webp';
import pomodoroOneImg from '../assets/pb-1.png';
import pomodoroTwoImg from '../assets/pb-2.png';
import pomodoroThreeImg from '../assets/pb-3.png';
import loveLetterLogo from '../assets/love-letter-logo.webp';
import bestestBuyOneImg from '../assets/bestestbuy-1.webp';
import bestestBuyTwoImg from '../assets/bestestbuy-2.webp';
import bestestBuyThreeImg from '../assets/bestestbuy-3.webp';
import bestestBuyFourImg from '../assets/bestestbuy-4.webp';
import loveLetterOneImg from '../assets/love-letter-1.webp';
import loveLetterTwoImg from '../assets/love-letter-2.webp';

function App() {
  const [visible, setVisible] = useState(false);

  const { Title, Paragraph } = Typography;
  return (
    <div className="App">
      <Layout
        style={{
          // height: '450vh',
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='46.19' height='40' viewBox='0 0 34.64101615137755 30' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(240, 242, 245,1)'/%3E%3Cpath d='M-20-20h200v200h-200M33.77 25.5L25.98 21L18.19 25.5L18.19 34.5L25.98 39L33.77 34.5zM16.45 25.5L8.66 21L0.87 25.5L0.87 34.5L8.66 39L16.45 34.5zM7.79 10.5L0 6L-7.79 10.5L-7.79 19.5L0 24L7.79 19.5zM16.45-4.5L8.66-9L0.87-4.5L0.87 4.5L8.66 9L16.45 4.5zM33.77-4.5L25.98-9L18.19-4.5L18.19 4.5L25.98 9L33.77 4.5zM42.43 10.5L34.64 6L26.85 10.5L26.85 19.5L34.64 24L42.43 19.5zM25.11 10.5L17.32 6L9.53 10.5L9.53 19.5L17.32 24L25.11 19.5z' fill='rgba(240, 242, 245,1)'/%3E%3Cpath d='M-20-20h200v200h-200M24.21 25.25L15.98 20.5L7.75 25.25L7.75 34.75L15.98 39.5L24.21 34.75zM6.89 25.25L-1.34 20.5L-9.57 25.25L-9.57 34.75L-1.34 39.5L6.89 34.75zM-1.77 10.25L-10 5.5L-18.23 10.25L-18.23 19.75L-10 24.5L-1.77 19.75zM6.89-4.75L-1.34-9.5L-9.57-4.75L-9.57 4.75L-1.34 9.5L6.89 4.75zM24.21-4.75L15.98-9.5L7.75-4.75L7.75 4.75L15.98 9.5L24.21 4.75zM32.87 10.25L24.64 5.5L16.41 10.25L16.41 19.75L24.64 24.5L32.87 19.75zM41.53 25.25L33.3 20.5L25.07 25.25L25.07 34.75L33.3 39.5L41.53 34.75zM15.55 40.25L7.32 35.5L-0.91 40.25L-0.91 49.75L7.32 54.5L15.55 49.75zM-10.43 25.25L-18.66 20.5L-26.89 25.25L-26.89 34.75L-18.66 39.5L-10.43 34.75zM-10.43-4.75L-18.66-9.5L-26.89-4.75L-26.89 4.75L-18.66 9.5L-10.43 4.75zM15.55-19.75L7.32-24.5L-0.91-19.75L-0.91-10.25L7.32-5.5L15.55-10.25zM41.53-4.75L33.3-9.5L25.07-4.75L25.07 4.75L33.3 9.5L41.53 4.75zM32.87 40.25L24.64 35.5L16.41 40.25L16.41 49.75L24.64 54.5L32.87 49.75zM-1.77 40.25L-10 35.5L-18.23 40.25L-18.23 49.75L-10 54.5L-1.77 49.75zM-19.09 10.25L-27.32 5.5L-35.55 10.25L-35.55 19.75L-27.32 24.5L-19.09 19.75zM-1.77-19.75L-10-24.5L-18.23-19.75L-18.23-10.25L-10-5.5L-1.77-10.25zM32.87-19.75L24.64-24.5L16.41-19.75L16.41-10.25L24.64-5.5L32.87-10.25zM50.19 10.25L41.96 5.5L33.73 10.25L33.73 19.75L41.96 24.5L50.19 19.75zM15.55 10.25L7.32 5.5L-0.91 10.25L-0.91 19.75L7.32 24.5L15.55 19.75z' fill='rgba(235, 240, 244,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        }}
      >
        <Header
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'fixed',
            width: '100%',
            padding: '0',
            zIndex: '1',
          }}
        >
          <Menu
            style={{
              width: '100%',
              maxWidth: '100vw',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            mode="horizontal"
            defaultSelectedKeys={['mail']}
          >
            <Menu.Item key="about" href="#about">
              <Button type="text" href="#about">
                About
              </Button>
            </Menu.Item>
            <Menu.Item key="projects">
              <Button type="text" href="#featured">
                Featured Projects
              </Button>
            </Menu.Item>
            <Menu.Item key="education">
              <Button href="#education" type="text">
                Education
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            height: '75vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Title level={5}>Hi! My name is</Title>
          <Title style={{ marginTop: '-0.1em' }}>Matthew Teran.</Title>
          <Title style={{ marginTop: '-0.1em' }}>
            I'm a Full Stack Software Engineer.
          </Title>
          <Space style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              href="https://github.com/matt-teran/"
              target="_blank"
              shape="circle"
              icon={<GithubFilled />}
            />
            <Button
              href="https://www.linkedin.com/in/matt-teran/"
              target="_blank"
              shape="circle"
              icon={<LinkedinFilled />}
            />
            <Button
              href="https://twitter.com/GESVNDRIAN"
              target="_blank"
              shape="circle"
              icon={<TwitterCircleFilled />}
            />
            <Button
              href="https://www.instagram.com/matt.teran/"
              target="_blank"
              shape="circle"
              icon={<InstagramFilled />}
              id="about"
            />
          </Space>
        </Content>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Divider>
            <Title level={3}>About Me</Title>
          </Divider>
          <Title
            level={5}
            style={{ width: '50%', minWidth: '350px', textAlign: 'center' }}
            id="featured"
          >
            <Paragraph>
              My name is Matt, and I believe that life is a constant learning
              journey. Whether it’s with software, people, or my hobbies like
              running or art – there are always more things to learn and improve
              on.
            </Paragraph>
            <Paragraph>
              I found myself in software development while taking a Udemy course
              on Python. Immediately, I was hooked. With so much open source
              learning materials available, I continued my journey with
              JavaScript across the full stack. I studied on my own for about
              two years, and then enrolled in a coding bootcamp to further
              improve my skills. I attended Hack Reactor in February of this
              year. Over the course of 3 months, I spent over one thousand hours
              studying everything JavaScript, and now I’m about to graduate with
              a deep understanding of web development, but also experience with
              pair programming, as well as working in Agile teams.
            </Paragraph>
            <Paragraph>
              Ultimately, I’m just a person who is deeply passionate about
              coding. There is a limitless fountain of things to learn in
              software development, and when you combine my hunger for more
              knowledge with my problem-solving capability, you get an extremely
              effective Software Engineer.
            </Paragraph>
          </Title>
        </Content>
        {/* <Content>
          <Divider>
            <Title level={3}>Technologies</Title>
          </Divider>
        </Content> */}
        <Content>
          <Divider>
            <Title level={3}>Featured Projects</Title>
          </Divider>
          <Layout
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <ProjectCard
              app={{
                name: 'BestestBuy',
                description:
                  'A retail application frontend that consists of four sections: Product Overview, Related Products, Q & A, and Reviews.',
                github: 'https://github.com/RFCTeamSaturn/BestestBuy',
                photos: [
                  bestestBuyOneImg,
                  bestestBuyTwoImg,
                  bestestBuyThreeImg,
                  bestestBuyFourImg,
                ],
              }}
            />
            <ProjectCard
              app={{
                name: 'Reviews API',
                description:
                  'A microservice that can handle thousands of requests per second.',
                github: 'https://github.com/SDC-Team-Miami/Reviews-API',
                photos: [nestjsPostgresImg],
              }}
            />
            <ProjectCard
              app={{
                name: 'Pomodoro Buddy',
                description:
                  'A time management solution that can be paired with any activity or workflow.',
                github: 'https://github.com/Matt-Teran/Pomodoro-Buddy',
                photos: [pomodoroOneImg, pomodoroTwoImg, pomodoroThreeImg],
              }}
            />

            <ProjectCard
              app={{
                name: 'Love Letter',
                description:
                  'Love Letter is a card game of risk, deduction, and luck for 2–4 players.',
                github: 'https://github.com/BlueOceanPacific/BlueOceanPacific',
                photos: [loveLetterOneImg, loveLetterTwoImg, loveLetterLogo],
              }}
            />
          </Layout>
        </Content>
        <Content id="education">
          <Divider>
            <Title level={3}>Education</Title>
          </Divider>
        </Content>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Card
            style={{ width: 500 }}
            cover={<img alt="example" src={hrImg} />}
            actions={[
              <Button
                href="https://www.hackreactor.com/"
                target="_blank"
                icon={<LinkOutlined />}
              />,
            ]}
            hoverable
          >
            <Meta
              title="Hack Reactor @ Galvanize"
              description={
                <>
                  <Paragraph>
                    Advanced Software Engineering Immersive Program
                  </Paragraph>
                  <Paragraph>February 2022 - May 2022</Paragraph>
                  <Paragraph>
                    13-week software engineering immersive program with over
                    1000+ hours of coding. Full-Stack development with
                    TypeScript, React, Express, PostgreSQL, MongoDB, and MySQL
                    in an AGILE environment.
                  </Paragraph>
                  <Paragraph>
                    Relevant Coursework: JavaScript ES6, TypeScript, React,
                    Node, Express, Fastify, jQuery, HTML, CSS, Sass, Heroku,
                    Docker, MySQL, MongoDB, AWS, Jest, Mocha, and Chai.
                  </Paragraph>
                </>
              }
            />
          </Card>
        </Content>
        <Footer>
          <Button
            href="https://github.com/matt-teran/"
            target="_blank"
            shape="circle"
            icon={<GithubFilled />}
          />
          <Button
            href="https://www.linkedin.com/in/matt-teran/"
            target="_blank"
            shape="circle"
            icon={<LinkedinFilled />}
          />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
