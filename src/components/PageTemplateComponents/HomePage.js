import * as React from "react";
import { Grid, IconButton } from "@mui/material";
import VacationCard from "./HomePageComponents/VacationCard";
import HoverShadowCard from "./HomePageComponents/HoverShadowCard";
import { useState } from "react";
import DefaultHomePage from "./HomePageComponents/DefaultHomePage";
import VacationMatchsPage from "./HomePageComponents/VacationMatchsPage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { getPlans } from "../../utils/api";

function HomePage({ user, setActivePage }) {
    const [planIndex, setPlanIndex] = useState(null);
    const [plans, setPlans] = useState(null);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const fetchPlans = async () => {
            const plansData = await getPlans(token);
            setPlans(plansData);
        };
        fetchPlans();
    }, [token]);

    return !plans ? (
        <div />
    ) : (planIndex == null) ? (
        <DefaultHomePage
            plans={plans}
            setActivePage={setActivePage}
            setPlanIndex={setPlanIndex}
        />
    ) : (
        <VacationMatchsPage plan={plans[planIndex]._id} images={[]} setPlanIndex={setPlanIndex} />
    );

    // return (vacationIndex == null) ? (
    //     // Show all the vacations of the user.
    //     <DefaultHomePage plans={plans} vacationCards={[]} setActivePage={setActivePage} />
    // ) : (
    //     // Show specific vacation.
    //     <VacationMatchsPage optionalMatch={user.vacationsArr[vacationIndex]} images={user.apartmentImgs} setVacationIndex={setVacationIndex} />
    // );
}

export default HomePage;
