import { makeStyles } from '@material-ui/core/styles';

export const leftDivisionStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '4%',
        margin: '15px 0px 0px 0px',
        fontSize: '28px',
        fontWeight: 400,
    },
    root: {
        margin: 'auto',
    },
    paper: {
        height: 650,
        width: '90%',
        overflow: 'auto',
        padding: '3%',
        borderRadius: '2%',
        overflowY: 'none',
    },
    listItem: {
        marginBottom: '-18px',
        color: 'grey',
    },
    listItemText: {
        '& span': {
            fontSize: '18px',
        }
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
})
);