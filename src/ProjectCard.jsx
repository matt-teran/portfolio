import { Button, Card, Image } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import './App.css';
import Meta from 'antd/lib/card/Meta';
import { useState } from 'react';

export default function ProjectCard({ app }) {
  const [visible, setVisible] = useState(false);
  console.log(app);
  return (
    <Card
      style={{
        width: 300,
      }}
      hoverable
      cover={
        <>
          <Image
            preview={{ visible: false }}
            width={300}
            src={app.photos[0]}
            onClick={() => setVisible(true)}
          />
          <div style={{ display: 'none' }}>
            <Image.PreviewGroup
              preview={{
                visible,
                onVisibleChange: (vis) => setVisible(vis),
              }}
            >
              {app.photos.map((photo) => {
                return <Image src={photo} />;
              })}
            </Image.PreviewGroup>
          </div>
        </>
      }
      actions={[
        <Button
          href={app.github}
          target="_blank"
          shape="circle"
          icon={<GithubFilled />}
        />,
      ]}
    >
      <Meta title={app.name} description={app.description} />
    </Card>
  );
}
