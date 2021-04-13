import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function CustomMenu(props) {
  const {
    disabled,
    id,
    label,
    margin,
    color,
    hoverColor,
    name,
    categoryList,
    itemList,
    onChange,
    placeholder,
    required,
    value,
    variant,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return categoryList.data.map((index) => {
    return [
      <Button
        aria-controls={"simple-menu-" + index[categoryList.key]}
        aria-haspopup="true"
        key={index[categoryList.key] + "ListItem"}
        onClick={handleClick}
      >
        {index[categoryList.value]}
      </Button>,

      itemList.data.map((index2) => {
        if (index2[itemList.filter] === index[categoryList.key]) {
          return (
            <Menu
            id={"simple-menu-" + index[categoryList.key]}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {index2[itemList.value]}
              </MenuItem>
            </Menu>
          );
        }
      }),
    ];
  });
}

export default CustomMenu;
