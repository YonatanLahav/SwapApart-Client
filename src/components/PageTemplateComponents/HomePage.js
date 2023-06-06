import React, { useContext } from "react";
import DefaultHomePage from "./HomePageComponents/DefaultHomePage";
import VacationMatchsPage from "./HomePageComponents/VacationMatchsPage";
import UserContext from "../../context/UserContext";

/**
 * HomePage component displays the home page with different views based on the selected plan.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setActivePage - Function to set the active page.
 * @param {number|null} props.planIndex - The index of the selected plan.
 * @param {function} props.setPlanIndex - Function to set the index of the selected plan.
 * @returns {JSX.Element} The rendered HomePage component.
 */
function HomePage({ setActivePage, planIndex, setPlanIndex, setActiveChat }) {
    const { plans } = useContext(UserContext);

    if (!plans) {
        // If plans are not available, return null.
        return null;
    } else if (planIndex == null) {
        // If no plan index is selected, render the DefaultHomePage component.
        return (
            <DefaultHomePage
                plans={plans}
                setActivePage={setActivePage}
                setPlanIndex={setPlanIndex}
                setActiveChat={setActiveChat}
            />
        );
    } else {
        // If a plan index is selected, render the VacationMatchsPage component.
        return (
            <VacationMatchsPage
                plan={plans[planIndex]._id}
                setPlanIndex={setPlanIndex}
            />
        );
    }
}

export default HomePage;
