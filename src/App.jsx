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

function App() {
  const [visible, setVisible] = useState(false);

  const { Title, Paragraph } = Typography;
  return (
    <div className="App">
      <Layout
        style={{
          height: '300vh',
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
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            mode="horizontal"
            defaultSelectedKeys={['mail']}
          >
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="projects">Featured Projects</Menu.Item>
            <Menu.Item key="experience">Professional Experience</Menu.Item>
            <Menu.Item key="education">Education</Menu.Item>
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
          <Title level={5}>Hi, my name is</Title>
          <Title style={{ marginTop: '-0.1em' }}>Matt Teran</Title>
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
          <Title level={5} style={{ width: '60%' }}>
            I believe that my life is a never-ending journey of learning, and
            this is why I’m deeply passionate about coding. There is a limitless
            fountain of things to learn in software development. I’m a patient,
            communicative, and organized person who is technically proficient in
            JavaScript. I’ve been able to use these traits about myself to
            thrive as a Software Engineer. Throughout my life, I’ve taken pride
            in my problem solving capability and tenacity. With that, I’m
            certain I can be an industrious member of any team I'm a part of.
          </Title>
        </Content>
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
            }}
          >
            <ProjectCard
              app={{
                name: 'BestestBuy',
                description:
                  'A retail application frontend that consists of four sections: Product Overview, Related Products, Q & A, and Reviews.',
                github: 'https://github.com/RFCTeamSaturn/BestestBuy',
                photos: [
                  'https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/overview.png',
                  'https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/relatedProduct.png',
                  'https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/QandA.png',
                  'https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/RatingReview.png',
                ],
              }}
            />
            <ProjectCard
              app={{
                name: 'Reviews API',
                description:
                  'A microservice that can handle thousands of requests per second.',
                github: 'https://github.com/SDC-Team-Miami/Reviews-API',
                photos: ['/assets/nestjs-postgres.png'],
              }}
            />
            <ProjectCard
              app={{
                name: 'Pomodoro Buddy',
                description:
                  'A time management solution that can be paired with any activity or workflow.',
                github: 'https://github.com/Matt-Teran/Pomodoro-Buddy',
                photos: [
                  '/assets/pb-1.png',
                  '/assets/pb-2.png',
                  '/assets/pb-3.png',
                ],
              }}
            />
          </Layout>
        </Content>
        {/* <Content>
          <Divider>
            <Title level={3}>Professional Experience</Title>
          </Divider>
        </Content> */}
        <Content>
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
            cover={<img alt="example" src="/assets/hr.png" />}
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
          <Button shape="circle" icon={<GithubFilled />} />
          <Button shape="circle" icon={<LinkedinFilled />} />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
