import * as React from "react";
import { useState } from "react";
import DefaultHomePage from "./HomePageComponents/DefaultHomePage";
import VacationMatchsPage from "./HomePageComponents/VacationMatchsPage";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { getPlans } from "../../utils/api";

function HomePage({ user, setActivePage, planIndex, setPlanIndex }) {
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
}

export default HomePage;
