import React from "react";
import { Link } from "react-router-dom";
import ModalBlock from "./ModalBlock";
import { useHomeStyles } from "../pages/theme";
import { Button, Hidden, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import AddTweetForm from "./AddTweetForm";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);
  const handleClickOpenTweet = (): void => {
    setVisibleAddTweet(true);
  };
  const onCloseAddTweet = (): void => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton color="primary" aria-label="">
            <TwitterIcon className={classes.sideMenuListItemIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Search
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Notification
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Messages
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Bookmarks
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              MyList
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Profile
            </Typography>
          </Hidden>
        </div>
      </li>
      <li>
        <Button
          onClick={handleClickOpenTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          fullWidth
          color="primary"
        >
          Tweet
        </Button>
        <ModalBlock
          title=""
          onClose={onCloseAddTweet}
          visible={visibleAddTweet}
        >
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};

export default SideMenu;
