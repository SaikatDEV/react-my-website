import { AppBar, Divider, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const MaterialHeader = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Toolbar>Express our Emotions through words</Toolbar>
      </AppBar>
      <div className="flex align-center flex-col mt-8 gap-4">
        <HomeIcon className="text-red-400 cursor-pointer scale-150" />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
      </div>
      <button className="py-2 px-4 bg-slate-400 rounded-xl mt-8 flex cursor-pointer">
        <SendRoundedIcon className="mr-2 scale-75" />
        Submit
      </button>
    </>
  );
};

export default MaterialHeader;
