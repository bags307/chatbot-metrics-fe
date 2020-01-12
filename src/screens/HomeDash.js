import React, {Component, useState} from "react";

import styled, {css} from "styled-components";
import SimpleStatWidget from "../components/SimpleStatWidget";
import SimpleStatGroupSet from "../components/SimpleStatGroupSet";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems, secondaryListItems } from './listItems';
//import Chart from './Chart';
import Stat from '../components/Stat';
//import Orders from './Orders';
import clsx from 'clsx'
import {mainListItems} from "../components/SiderMenuList/index";
import SidebarDatePicker from "../components/SidebarDatePicker"
import PopularEntities from '../components/PopularEntities'
const drawerWidth = 240
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    fixedHeightHalf: {
        height:200
    }
}));
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://getlogic.ai/">
                The Logical Group, LLC
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function HomeDash(props) {
//State setters and defaults

    const [date, setDate] = useState({start:'2019-12-01', end:'2019-12-31'})

    const [open, setOpen] = useState('true')

    const [entities, setEntities] = useState([])

    const handleUpdateEntities = (entities) => {
        setEntities(entities)
    }
    const updateDate = (dates) => {
        setDate({start:dates.start, end:dates.end})
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
    const fixedHeightPaperHalf = clsx(classes.paper, classes.fixedHeightHalf)
    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        LogicalStack Conversational Analytics
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                setDate={updateDate}
                startDate = {date.start}
                endDate = {date.end}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {mainListItems}
                </List>
                <Divider />
                <SidebarDatePicker setDate={updateDate}/>

                <List>dd</List>
            </Drawer>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={4}>
                            <Paper className={fixedHeightPaperHalf}>
                               <Stat dateStart={date.start} dateEnd={date.end} type='conversations' title='CONVERSATIONS'/>
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={fixedHeightPaperHalf}>
                                <Stat dateStart={date.start} dateEnd={date.end} type='participants' title='PARTICIPANTS'/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={fixedHeightPaperHalf}>
                                <Stat dateStart={date.start} dateEnd={date.end} type='messages' title='TOTAL MESSAGES'/>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12} md={6} lg={12}>
                            <Paper className={classes.paper}>
                                <PopularEntities entities={entities} type='popular' update={handleUpdateEntities} start={date.start} end={date.end} title='POPULAR ENTITIES' />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6} lg={12}>
                            <Paper className={classes.paper}>
                                <PopularEntities entities={entities} type='unpopular' start={date.start} end={date.end} title='UNUSED ENTITIES' />
                            </Paper>
                        </Grid>

                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>

    );
}

const BackgroundBase = styled.div`
  display: flex;
  height: 100vh;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
  width: 100vw;
`;

const MenuBar = styled.div`
  width: 218px;
  background-color: #113366;
  flex-direction: column;
  display: flex;
  height:100vh
`;

const MenuHeader = styled.div`
  width: 218px;
  height: 53px;
  background-color: #092547;
  display:flex;
  align-items:center;
  padding:10px
`;

const SimpleStatWidget2Row = styled.div`
  height: 120px;
  flex-direction: row;
  display: flex;
  margin-left: 2px;
  justify-content:space-between
`;

const LargeStatWidget = styled.div`
  width: 876px;
  height: 172px;
  background-color: rgba(255,255,255,1);
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 39px;
  box-shadow: 0px 0px 5px  5px rgba(0,0,0,0.03) ;
`;

const Group = styled.div`
  width: 781px;
  height: 91px;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 48px;
  display: flex;
`;

const SimpleStatWidget2RowColumn = styled.div`
  width: 877px;
  flex-direction: column;
  display: flex;
  margin-left: 23px;
  margin-top: 43px;
  margin-bottom: 525px;
`;

const MenuBarRow = styled.div`
  height: 900px;
  flex-direction: row;
  display: flex;
  margin-right: 282px;
`;

export default HomeDash;
/*
 <MenuBarRow>
                <MenuBar>
                    <MenuHeader>

                        <Avatar   size={32} icon="user" />

                    </MenuHeader>
                </MenuBar>
            <div className={classes.container} maxWidth="large">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper }>
                        </Paper>
                    </Grid>
                </Grid>

            </div>

                <SimpleStatWidget2RowColumn>
                    <Paper className={classes.paper} />
                    <SimpleStatWidget2Row>
                        <SimpleStatWidget
                            style={{
                                width: 257,
                                height: 121
                            }}
                            type='conversations'
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            title='CONVERSATIONS'
                            subTitle='Total Conversations'
                        />
                        <SimpleStatWidget
                            style={{
                                width: 257,
                                height: 121,

                            }}
                            type='participants'
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            title='PARTICIPANTS'
                            subTitle='Total Participants'
                        />
                        <SimpleStatWidget
                            style={{
                                width: 257,
                                height: 121,

                            }}
                            type='conversations'
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            title='CONVERSATIONS'
                            subTitle='Total Conversations'
                        />
                    </SimpleStatWidget2Row>
                    <SimpleStatWidget2Row>
                        <LargeStatWidget
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            title='MESSAGES'
                            type='messages'
                        >
                            <Group>
                                <SimpleStatGroupSet
                                    style={{
                                        width: 219,
                                        height: 91
                                    }}


                                    subTitle='RECEIVED MESSAGES'
                                />
                                <SimpleStatGroupSet
                                    style={{
                                        width: 219,
                                        height: 91
                                    }}
                                />
                                <SimpleStatGroupSet
                                    style={{
                                        width: 219,
                                        height: 91
                                    }}
                                />
                            </Group>
                        </LargeStatWidget>
                    </SimpleStatWidget2Row>
                </SimpleStatWidget2RowColumn>
            </MenuBarRow>
 */