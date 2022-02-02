import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PositionedMenu({
  handleDelete,
  id,
  IsEditTodoOpen,
  toggleEditTodoComp,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    setAnchorEl(null);
    handleDelete.mutate({
      idDeletedTodo: id,
    });
  };
  const onEdit = () => {
    setAnchorEl(null);
    toggleEditTodoComp(!IsEditTodoOpen, id);
  };

  return (
    <div className="position-menu-wraper">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={onDelete}>
          <p>Delete</p>
          <DeleteIcon style={{ fill: '#BE0909' }} />
        </MenuItem>
        <MenuItem onClick={onEdit}>
          <p>Edit</p>
          <EditIcon style={{ fill: '#1695BD' }} />
        </MenuItem>
      </Menu>
    </div>
  );
}
