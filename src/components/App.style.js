import Image from '../images/background.jpg'
import { makeStyles } from '@material-ui/core/styles';

export const appStyle = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#875FD8',
        backgroundImage: `url(${Image})`,
        height: '100vh'
    },
    parentGrid: {
        // margin: 'auto',
    },
    parentDiv: {
        paddingTop: '5%'
    }
}));