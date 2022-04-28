import React from 'react';
import { Container, Menu} from 'semantic-ui-react';

export default ({ selectedUser }) => {
  const pageName = selectedUser ? selectedUser.name : '';

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          User Search
        </Menu.Item>
        <Menu.Item style={{ flex: 1 }}>{pageName}</Menu.Item>
      </Container>
    </Menu>
  );
};