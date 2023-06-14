import {React, useState, useContext, useEffect} from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
    Dialog, DialogTitle, DialogContent, styled 
} from '@mui/material';
import UserContext from "../../../context/UserContext";
import { Conversation } from "@chatscope/chat-ui-kit-react";
import { flexbox } from "@mui/system";

const listItemTextStyle = {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'center',
};

/**
 * VacationCard component displays a card with vacation details.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.plan - The vacation plan object.
 * @param {Function} props.onClick - The function to handle the click event.
 * @returns {JSX.Element} The rendered VacationCard component.
 */
function VacationCard({ plan, onClick, setPlanIndex, index, setActivePage, setActiveChat }) {
    /**
     * Retrieves the formatted start date of the vacation.
     *
     * @returns {string} The formatted start date.
     */
    const getStartDate = () => {
        const startDate = new Date(plan.startDate);
        return startDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    /**
     * Retrieves the formatted end date of the vacation.
     *
     * @returns {string} The formatted end date.
     */
    const getEndDate = () => {
        const endDate = new Date(plan.endDate);
        return endDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const { conversations } = useContext(UserContext);

  const[matchedUsers, setmatchedUsers] = useState([])

  const findmatchedUsers = () => {
    const arr =[]
    conversations.map((conv)=>{if (conv.plan._id.includes(plan._id)) {
    arr.push(conv)
    }})
    return arr
  }

  const handleClickUser = (conv) => {
    setActiveChat(conv._id);
    setActivePage(2);
  };
  useEffect(()=>{setmatchedUsers(findmatchedUsers)}, [conversations])

  const StyledDialog = styled(Dialog)({
    "& .MuiPaper-root": {
      minWidth: 300,
      borderRadius: "8px",
    },
  });
  const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textAlign: "center",
    padding: theme.spacing(2),
  }));
  
  const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://source.unsplash.com/featured/?${encodeURIComponent(plan.country)}`);
        setImageUrl(response.url);
      } catch (error) {
        setImageUrl('a')
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [plan.country]);

    return  (
        <div>
        {imageUrl && (
        <Card sx={{ maxWidth: 345, p: 0 }} onClick={onClick}>
            {imageUrl && <CardMedia component="img" height="140" src={imageUrl} alt={plan.country} />}
            <CardContent sx={{ pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    Vacation Details
                </Typography>
                <List dense sx={{ p: 0 }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Start Date:" secondary={getStartDate()} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="End Date:" secondary={getEndDate()} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Country" secondary={plan.country} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Region" secondary={plan.region} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="City" secondary={plan.city} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Rooms" secondary={plan.minRoomsNum} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemText primary="Bathrooms" secondary={plan.minBathroomsNum} style={listItemTextStyle} />
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button size="small" sx={{'&:hover': {backgroundColor: 'blue', color: 'white', }}} onClick={handleClick}> {matchedUsers.length} Matchs </Button>
                <Button size="small" sx={{'&:hover': {backgroundColor: 'blue', color: 'white', }}} onClick={() => setPlanIndex(index)} >Find A Match</Button>
            </CardActions>
            <StyledDialog open={open} onClose={handleClose} >
      <StyledDialogTitle id="match-dialog-title" sx={{marginBottom: '8px'}}>{matchedUsers.length != 0 ? 'Matches with:': 'No Matchs for this plan'}</StyledDialogTitle>
      <StyledDialogContent>
        {matchedUsers.map((MatchedPlan) => (
          <Typography
            key={MatchedPlan}
            onClick={() => handleClickUser(MatchedPlan)}
            style={{ cursor: 'pointer', marginBottom: '6px' }}
            sx={{padding: '6px 6px',
            borderRadius: '50px',
            '&:hover': {backgroundColor: 'dodgerblue ', color: 'white'}}}
          >
            {MatchedPlan.matchedUser.firstName} {MatchedPlan.matchedUser.lastName}
          </Typography>
        ))}
      </StyledDialogContent>
    </StyledDialog>
        </Card>
        )}
        </div>
    );
}

export default VacationCard;
