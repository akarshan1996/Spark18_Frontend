import { makeStyles } from '@material-ui/core/styles';

export const rightDivisionStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '4%',
        margin: '15px 0px 0px 0px',
        fontSize: '28px',
        fontWeight: 400,
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '300px',
        flex: 'auto',
        width: '100%',
        color: 'grey',
        fontSize: '20px',
        fontWeight: '300'
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
    button: {
        margin: theme.spacing(0.5, 0),
    },
    listItemText: {
        color: 'grey',
        width: '100%',
        height: '50px',
        borderRadius: '5px',
        backroundColor: '#E7E8E7',
        fontWeight: 300,
        justifyContent: 'space-between',
        paddingLeft: '5px',
        paddingRight: '5px',
        '& span': {
            fontSize: '18px',
        }
    },
    listItemEmpty: {
        paddingTop: '0px',
        paddingBottom: '0px',
    }
}));