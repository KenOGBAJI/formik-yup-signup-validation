import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Login from "../Login";
import Signup from "../Signup";


const SignInOutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  const paperStyle ={width: 440, margin: "20px auto"}
  const headerStyle = { margin: 0, };

  function TabPanel (props) {
      const { children, value, index, ...other} = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          { value === index && (
            <Box>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );   
   }

    return (
       <Paper elevation={10} style={paperStyle}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs"
          >
            <Tab  label="Sign In" style={headerStyle}/>
            <Tab  label="Sign Up" style={headerStyle}/>
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
       </Paper>
    )
}

export default SignInOutContainer;