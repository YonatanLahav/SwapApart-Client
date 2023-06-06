import React, { useContext } from "react";
import { Container, Paper, Grid } from "@mui/material";
import HeaderCard from "./HeaderCard";
import VacationCard from "./VacationCard";
import HoverShadowCard from "./HoverShadowCard";
import UserContext from "../../../context/UserContext";

/**
 * DefaultHomePage component displays the default home page with header and vacation cards.
 *
 * @param {Object} props - The component props.
 * @param {function} props.setActivePage - Function to set the active page.
 * @param {function} props.setPlanIndex - Function to set the index of the selected plan.
 * @returns {JSX.Element} The rendered DefaultHomePage component.
 */
function DefaultHomePage({ setActivePage, setPlanIndex, setActiveChat }) {
    const { plans } = useContext(UserContext);

    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                        <HeaderCard setActivePage={setActivePage} />
                    </Paper>
                </Grid>
                {plans.map((plan, index) => (
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <HoverShadowCard
                            element={
                                <VacationCard
                                    plan={plan}
                                    setPlanIndex={setPlanIndex}
                                    index={index}
                                    setActivePage={setActivePage}
                                    setActiveChat={setActiveChat}
                                    // onClick={() => setPlanIndex(index)}
                                />
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default DefaultHomePage;
