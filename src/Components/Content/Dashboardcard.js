import React, { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { themePallete } from "../../data/data";

const Dashboardcard = () => {
  const { products, path, activeTheme, setActiveTheme, users } =
    useAppContext();

  useEffect(() => {
    let active = themePallete.find((themeItem) => themeItem.themePath == path);
    setActiveTheme(active);
  }, [path]);

  return (
    <div className="flex flex-col justify-content ">
      <div className={`over-view-card  pointer ${activeTheme.cardClass}  `}>
        <div className="inner-card  flex  justify-content">
          <div className="inner-card-div">
            {activeTheme.icon}
            <h4>Total {activeTheme.id}</h4>
          </div>
          <div className="inner-card-div">
            <h4>
              {" "}
              {activeTheme.themePath == "/admin/users"
                ? users.length
                : activeTheme.themePath == "/admin/products"
                ? products.length
                : null}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardcard;
