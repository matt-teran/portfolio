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
} from '@ant-design/icons';
import './App.css';
import Meta from 'antd/lib/card/Meta';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  const { Title, Paragraph } = Typography;
  return (
    <div className="App">
      <Layout
        style={{
          height: '375vh',
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
            <Menu.Item key="about">About Me</Menu.Item>
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
            <Button shape="circle" icon={<GithubFilled />} />
            <Button shape="circle" icon={<LinkedinFilled />} />
            <Button shape="circle" icon={<TwitterCircleFilled />} />
            <Button shape="circle" icon={<InstagramFilled />} />
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
            <Card
              style={{
                width: 300,
              }}
              cover={
                <>
                  <Image
                    preview={{ visible: false }}
                    width={300}
                    src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/overview.png"
                    onClick={() => setVisible(true)}
                  />
                  <div style={{ display: 'none' }}>
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/overview.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/relatedProduct.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/QandA.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/RatingReview.png" />
                    </Image.PreviewGroup>
                  </div>
                </>
              }
              actions={[
                <Button
                  href="https://github.com/RFCTeamSaturn/BestestBuy"
                  target="_blank"
                  shape="circle"
                  icon={<GithubFilled />}
                />,
              ]}
            >
              <Meta
                title="BestestBuy"
                description="A retail application frontend that consists of four sections: Product Overview, Related Products, Q & A, and Reviews.                "
              />
            </Card>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <>
                  <Image
                    preview={{ visible: false }}
                    width={300}
                    src="/assets/nestjs-postgres.png"
                    onClick={() => setVisible(true)}
                  />
                  <div style={{ display: 'none' }}>
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/overview.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/relatedProduct.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/QandA.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/RatingReview.png" />
                    </Image.PreviewGroup>
                  </div>
                </>
              }
              actions={[
                <Button
                  href="https://github.com/SDC-Team-Miami/Reviews-API"
                  target="_blank"
                  shape="circle"
                  icon={<GithubFilled />}
                />,
              ]}
            >
              <Meta
                title="Reviews API"
                description="A microservice that can handle thousands of requests per second."
              />
            </Card>
            <Card
              style={{
                width: 300,
              }}
              cover={
                <>
                  <Image
                    preview={{ visible: false }}
                    width={300}
                    src="/assets/mern-stack.png"
                    onClick={() => setVisible(true)}
                  />
                  <div style={{ display: 'none' }}>
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/overview.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/relatedProduct.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/QandA.png" />
                      <Image src="https://github.com/RFCTeamSaturn/BestestBuy/raw/main/image/RatingReview.png" />
                    </Image.PreviewGroup>
                  </div>
                </>
              }
              actions={[
                <Button
                  href="https://github.com/Matt-Teran/Pomodoro-Buddy"
                  target="_blank"
                  shape="circle"
                  icon={<GithubFilled />}
                />,
              ]}
            >
              <Meta
                title="Pomodoro Buddy"
                description="A time management solution that can be paired with any activity or workflow."
              />
            </Card>
          </Layout>
        </Content>
        <Content>
          <Divider>
            <Title level={3}>Professional Experience</Title>
          </Divider>
        </Content>
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
        ></Content>
        <Footer>
          <Button shape="circle" icon={<GithubFilled />} />
          <Button shape="circle" icon={<LinkedinFilled />} />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
