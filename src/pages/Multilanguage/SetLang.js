import React, { useContext } from "react";
import { Context } from "./wrapper";
import AmFlag from "../../assets/lang/amFlag.png";
import EnFlag from "../../assets/lang/enFlag.png";
import RuFlag from "../../assets/lang/ruFlag.png";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Lang() {
  const context = useContext(Context);
  const sectionStyle = {
    width: "30px",
    height: "31px",
    backgroundImage: "url(" + { EnFlag } + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "0",
  };
  return (
    <>
      <div className="select">
        <Select value={context.locale} onChange={context.selectLanguage}>
          <MenuItem value={"en"}>
            <img src={EnFlag} width={20} alt="" />
          </MenuItem>
          <MenuItem
            value={"am"}
            id={"aaa"}
            style={{ zIndex: "999999999999999 !important" }}
          >
            <img src={AmFlag} width={20} alt="" />
          </MenuItem>
          <MenuItem value={"ru"}>
            <img src={RuFlag} width={20} alt="" />
          </MenuItem>
        </Select>
      </div>
    </>
  );
}
export default Lang;
