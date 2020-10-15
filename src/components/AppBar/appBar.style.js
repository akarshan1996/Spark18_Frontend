import { makeStyles } from '@material-ui/core/styles';

export const appBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#8C1CF1',
    },
    appBar: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuItemsText: {
        textTransform: 'none'
    },
    getInTouch: {
        border: '1px solid #E0E0E0',
        borderRadius: '5%',
        padding: '1%',
        marginLeft: '2%',
        textTransform: 'none'
    },
}));