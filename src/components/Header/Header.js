import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { ReactComponent as Logo } from './../../assets/images/logo.svg';
import { Tooltip, message } from 'antd';
import { slide as Menu } from 'react-burger-menu';

const demoMessage = () => {
  message.warning('For display only, not in requirement');
};

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.MobileContainer}>
        <Link to="/">
          <Logo className={classes.LogoMobileTopHeader} />
        </Link>
        <div id="outer-container">
          <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <main id="page-wrap">
            <Menu right width={'80%'} className={'MobileMenu'}>
              <div className={classes.MobileMenuLogoWrapper}>
                <Link to="/">
                  <Logo className={classes.LogoMobileSidePanel} />
                </Link>
                <div className={classes.MobileSubTitle}>YOUR TRUSTED TRAVEL ASSISTANT, DELIVERING FANTASTIC DEALS TO YOU</div>
              </div>

              <div className={classes.MobileMenuRegisterButton} onClick={demoMessage}>
                REGISTER
              </div>
              <div className={classes.MobileMenuLoginButton} onClick={demoMessage}>
                LOGIN
              </div>

              <div className={classes.MobileMenuSelectionList} onClick={demoMessage}>
                <div className={classes.MobileMenuSelectionListLabel}>LANGUAGE</div>
                <div className={classes.MobileMenuSelectionListValue}>ENGLISH</div>
              </div>
              <div className={classes.MobileMenuSelectionList} onClick={demoMessage}>
                <div className={classes.MobileMenuSelectionListLabel}>CURRENCY</div>
                <div className={classes.MobileMenuSelectionListValue}>MYR</div>
              </div>
            </Menu>
          </main>
        </div>
      </div>
      <div className={classes.DesktopContainer}>
        <div className={classes.LeftPanel}>
          <Link to="/">
            <Logo className={classes.Logo} />
          </Link>
        </div>
        <div className={classes.RightPanel}>
          <Tooltip title="For display only, not in requirement yet">
            <div className={classes.LanguageList}>ENGLISH</div>
          </Tooltip>
          <Tooltip title="For display only, not in requirement yet">
            <div className={classes.CurrencyList}>MYR</div>
          </Tooltip>
          <Tooltip title="For display only, not in requirement yet">
            <div className={classes.LogInButton}>LOG IN</div>
          </Tooltip>
          <Tooltip placement="bottomRight" title="For display only, not in requirement yet">
            <div className={classes.SignUpButton}>REGISTER</div>
          </Tooltip>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
