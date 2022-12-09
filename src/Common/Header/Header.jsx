import { Button, Icon, Menu } from "semantic-ui-react";
import { itemsHeader } from "../../Backend/Data";
import logo from "../../assets/logo-login.png";

import logoWhite from "../../assets/logo_white.png";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";

const Header = () => {
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [headerShow]);

  const handleScroll = () => {
    window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);
  };

  return (
    <div className={styles.headerDiv}>
      {!headerShow && <TopHeader />}
      <Menu
        secondary
        className={styles.headerMenu}
        style={{
          background: headerShow ? "#fff" : "transparent",
          boxShadow: headerShow ? "0 0 15px rgb(0 0 0 / 17%)" : "none",
          animation: headerShow ? "slide-down 0.7s" : "none",
        }}
      >
        <Menu.Item name="logout" className={styles.headerIcon}>
          <Link to={"/"}>
            <img alt="logo" src={headerShow ? logo : logoWhite} />
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          {itemsHeader.map((item) => (
            <Link to={item.path}>
              <Menu.Item
                className={
                  headerShow ? styles.headerItems : styles.headerItemsWhite
                }
                name={item.item}
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
              />
            </Link>
          ))}
          <Button type="submit">
            Book now
            <Icon name="arrow right" className={styles.headerIcon} />
          </Button>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
