import { makeStyles } from '@material-ui/core/styles';

export const rightDivisionStyles = makeStyles((theme) => ({
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'auto',
        width: '100%',
        color: 'grey',
    },
    root: {
        margin: 'auto',
    },
    paper: {
        width: 300,
        height: 700,
        overflow: 'auto',
        width: '80%',
        padding: '3%',
        borderRadius: '2%',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
}));