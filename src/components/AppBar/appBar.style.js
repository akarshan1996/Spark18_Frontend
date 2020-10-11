import { makeStyles } from '@material-ui/core/styles';

export const appBarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#03365E',
    },
    getInTouch: {
        border: '1px solid #E0E0E0',
        borderRadius: '5%'
    },
}));