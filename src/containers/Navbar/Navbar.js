import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { findIndex } from 'lodash';
import { Link } from 'react-router';
import '../../styles/core.scss';
import { connect } from 'react-redux';
import { LogoHeaderText } from 'components';
import styles from './Navbar.module.scss';

const { Header } = Layout;

export function NavbarComponent(props) {
  const { currentPath, isPrelogin, orgReady } = props;

  const paths = ['todos', 'other'];
  const selectedKey = findIndex(paths, (path) => currentPath.match(path));

  let title;
  title = <span className={styles.productName}>Todo App</span>;

  if (isPrelogin) {
    title = <span className={styles.preloginProductName}>Todo App</span>;

    return (
      <div className={styles.navBarContainer}>
        <Header>
          <Menu theme="light" mode="horizontal" className={styles.preloginNavbar}>
            <Menu.Item className={styles.prelogin} disabled>
              <div className={styles.imgblock}>
                <LogoHeaderText
                  id="menu_navbarLogo"
                  title={title}
                  logoClassName={styles.logo}
                  textClassName={styles.logoTexts}
                  noDivider
                />
              </div>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }

  let menuItems;
  if (orgReady || orgReady === undefined) {
    menuItems = [
      <Menu.Item key="1">
        <Link to="/todos" id="link_navbarTodos">Todos</Link>
      </Menu.Item>,
      <Menu.Item key="2">
        <Link to="/other" id="link_navbarOther">Other</Link>
      </Menu.Item>,
    ];
  }

  return (
    <div className={styles.navBarContainer}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[(selectedKey + 1).toString()]}
          selectedKeys={[(selectedKey + 1).toString()]}
          className={styles.navBar}
        >
          <Menu.Item className={styles.firstItem}>
            <Link to="/todos">
              <div className={styles.imgblock}>
                <LogoHeaderText
                  id="menu_navbarLogo"
                  title={title}
                  logoClassName={styles.logo}
                  textClassName={styles.logoTexts}
                  light
                  noDivider
                />
              </div>
            </Link>
          </Menu.Item>
          {menuItems}
        </Menu>
      </Header>
    </div>
  );
}

NavbarComponent.propTypes = {
  currentPath: PropTypes.string,
  isPrelogin: PropTypes.bool,
  orgReady: PropTypes.bool,
};

// normally you'll need a navbar to be connected
const mapStateToProps = () => ({});

export const Navbar = connect(mapStateToProps, {})(NavbarComponent);
