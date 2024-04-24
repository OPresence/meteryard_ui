import React, { useState } from 'react';
import { Modal, IconButton, Slide, Typography, useMediaQuery, useTheme, Box, Divider, Icon } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import StateComponent from '@/component/StateComponent';
import PriceRangeComponent from '@/component/PriceRangeComponent';
import AccordionComponent from "../CityChat/AccordionComponent";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';


const StickyModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const CheckBoxName = [
    {
      name: "Residential",
      valueName: [
        { name: "HOUSE" },
        { name: "VILLA" },
        { name: "APARTMENTS" },
        { name: "PLOTS" },
      ],
    },
  ];
  const CheckBoxName1 = [
    {
      name: "Commercial",
      valueName: [
        { name: "Office Space" },
      { name: "Retail Store" },
      { name: "Warehouse" },
      { name: "Industrial Property" },
      ],
    },
  ];
  const CheckBoxName2 = [
    {
      name: "Agriculture",
      valueName: [
        { name: "Office Space" },
      { name: "Retail Store" },
      { name: "Warehouse" },
      { name: "Industrial Property" },
      ],
    },
  ];
  const State_name = [
    {
      name: "Uttar Pradesh",
    },
    {
      name: "Delhi",
    },
    {
      name: "Gujarat",
    },
  ];
  const City_name = [
    { name: "Agra" },
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bangalore" },
  ];
  const City_name_LocalArea = [
    { name: "Pashchim Puri" },
    { name: "Sikandra" },
    { name: "Bodla" },
    { name: "Fatehabad Road" },
    { name: "Kamla Nagar" },
  ];

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleToggleModal = () => {
    setOpen(!open);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {isMobile && (
        <>
          {!open && (
            <Box sx={{
              backgroundColor: 'white',
              color: 'gray',
              width: '100%',
              height: '60px',
              position: 'fixed',
              bottom: '0px',
              left: '0px',
              borderRadius: '0',
             
            }}>
              
              
              <IconButton
                onClick={handleToggleModal}
                sx={{ gap: '8rem', left: '25px', borderRadius: '15px' }}
              >
               <FilterAltIcon />
                <ForumOutlinedIcon/>
               <ArrowUpwardOutlinedIcon />
              </IconButton>
             
            </Box>
          )}
        <Modal open={open} onClose={handleCloseModal}>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div style={{ position: 'sticky', top: '100%', background: '#f0f0f0', padding: '20px', borderRadius:'50px' }}>
          <IconButton onClick={expanded ? handleCollapse : handleExpand} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            
          </IconButton>
        
           <Box >
            <Typography sx={{fontSize:'20px', textAlign:'center', fontWeight:'500', mb:'15px'}}>Property Category</Typography>
           {CheckBoxName.map((data, index) => (
              <AccordionComponent
                key={index}
                data={data}
                index={index}
                icon={<BusinessOutlinedIcon />}
                onClick={() => handleOptionClick(data.name)}
              />
            ))}

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            {CheckBoxName1.map((data, index) => (
              <AccordionComponent
                key={index}
                data={data}
                index={index}
                icon={<StorefrontOutlinedIcon />}
                onClick={() => handleOptionClick(data.name)}
              />
            ))}

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            {CheckBoxName2.map((data, index) => (
              <AccordionComponent
                key={index}
                data={data}
                index={index}
                icon={<AgricultureOutlinedIcon />}
                onClick={() => handleOptionClick(data.name)}
                
              />
            ))}

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            <PriceRangeComponent  />
            
            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            <StateComponent
              StattName={State_name}
              type="Select State"
              name="State"
            />

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            <StateComponent
              StattName={City_name}
              type="Select City"
              name="City"   
            />

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>

            <StateComponent
              StattName={City_name_LocalArea}
              type="Select Local Area"
              name="Local Area"
            />

            <Box m={"10px 0 0 0"}>
              <Divider className="devider" />
            </Box>
           </Box>
        </div>
      </Slide>
    </Modal>
        </>
      )}
    </>
  );
};

export default StickyModal;