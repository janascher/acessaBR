import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { LocationContext } from "../contexts/LocationContext";
import { Fragment, useContext, useState } from "react";
import Header from "../components/Header";
import { FilterContext } from "../contexts/FilterContext";
import Places from "../components/Places";
import Curator from "../components/Curator"

const Routes = props => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [filteredPlace, setFilteredPlace] = useState("");

    return (
        <FilterContext.Provider value={{ filteredPlace, setFilteredPlace }}>
            <LocationContext.Provider value={{ city, setCity, state, setState}}>
                <Header />
                <Switch>
                    <Route path="/:state/:city" element={
                        <Fragment>
                            <Home />
                            <Places />
                            <Curator />
                        </Fragment>
                    }
                    />
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    )
}

export default Routes;