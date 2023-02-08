import React, { useState } from 'react'
import Select from "react-select";
export default function CollectionSelect() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [clothOption, setClothOption] = useState(null);
    const [colorOption, setColorOptions] = useState(null);
    const [backgroundOption, setbackgroundOption] = useState(null);
    const [faceoption, setfaceoption] = useState(null);
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
          width: state.selectProps.width,
          color: "#acacac",
          textAlign: "left",
          backgroundColor: "#04161a",
          zIndex: 2,
        }),
        control: (provided) => ({
          ...provided,
        //   height: 16,
          width: "100%",
          maxWidth: "450px",
        //   marginTop: "-12px",
          border: "0px solid red",
          fontSize: 15,
          fontWeight: "500",
          backgroundColor: "transparent",
          outline: "none",
          boxShadow: "none",
        }),
        
        placeholder: (provided) => ({
          ...provided,
          color: "#acacac",
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#acacac",
          
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#BE05FF" : "",
          "&:hover": {                                           // overriding hover
            ...styles,  
            backgroundColor: "#BE05FF61"  ,
            color:"#fff"                                      // apply initial styles
          },
        }),
        
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#fff",
        }),
      };
      const clothOptions = [
        { value: "Clothing", label: "Clothing" },
        { value: "Green Yukata", label: "Green Yukata" },
        { value: "Blue Floral", label: "Blue Floral" },
        { value: "Black Kimono", label: "Black Kimono" },
        { value: "Light Pink", label: "Light Pink" },
      ]
      const colorOptions = [
        { value: "Red", label: "Red" },
        { value: "Blue", label: "Blue" },
        { value: "Green", label: "Green" },
        { value: "Black", label: "Black" },
        { value: "Pink", label: "Pink" },
      ]
    const eyesOption = [
        { value: "Striking", label: "Striking" },
        { value: "Closed", label: "Closed" },
        { value: "Dreaming", label: "Dreaming" },
        { value: "Chilling", label: "Chilling" },
      ];
    const backgroundOptions = [
        { value: "Background", label: "Background" },
        { value: "Multi Coloured", label: "Multi Coloured" },
        { value: "Stylish Red", label: "Stylish Red" },
        { value: "Macro Short", label: "Macro Short" },
        { value: "Geometric Black", label: "Geometric Black" },
      ];
    const faceoptions = [
        { value: "Face", label: "Face" },
        { value: "Round Blue", label: "Round Blue" },
        { value: "Red Stripes", label: "Red Stripes" },
        { value: "Maroon Dish", label: "Maroon Dish" },
        { value: "Eye Scar", label: "Eye Scar" },
      ];
  return (
    <div className="multiselect-area d-flex align-items-center justify-content-lg-between justify-content-center">
    <div className="single-select">
    <Select
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                backgroundColor:"red",
                colors: {
                ...theme.colors,
                primary: "#BE05FF",
                },
                zIndex: 1000
            })}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}
            width="200px"
            menuColor="#fff"
            defaultValue={clothOption}
            options={clothOptions}
            placeholder="Clothing"
            />
    </div>
    <div className="single-select">
    <Select
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                backgroundColor:"red",
                colors: {
                ...theme.colors,
                primary: "#BE05FF",
                },
                zIndex: 1000
            })}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}
            width="200px"
            menuColor="#fff"
            defaultValue={colorOption}
            options={colorOptions}
            placeholder="Color"
            />
    </div>
    <div className="single-select">
        <Select
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                backgroundColor:"red",
                colors: {
                ...theme.colors,
                primary: "#BE05FF",
                },
            })}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}
            width="200px"
            menuColor="#fff"
            defaultValue={selectedOption}
            options={eyesOption}
            placeholder="Eyes"
            />
    </div>
    <div className="single-select">
    <Select
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                backgroundColor:"red",
                colors: {
                ...theme.colors,
                primary: "#BE05FF",
                },
            })}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}
            width="200px"
            menuColor="#fff"
            defaultValue={backgroundOption}
            options={backgroundOptions}
            placeholder="Background"
            />
    </div>
    <div className="single-select">
    <Select
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                padding: 0,
                backgroundColor:"red",
                colors: {
                ...theme.colors,
                primary: "#BE05FF",
                },
            })}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null,
            }}
            width="200px"
            menuColor="#acacac"
            defaultValue={faceoption}
            options={faceoptions}
            placeholder="Face"
            />
    </div>
  </div>
  )
}
