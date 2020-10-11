import { makeStyles } from '@material-ui/core/styles';

export const leftDivisionStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '4%'
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
        borderRadius: '2%'
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
})
);