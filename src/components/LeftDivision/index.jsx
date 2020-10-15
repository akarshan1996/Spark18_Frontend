import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { leftDivisionStyles } from './leftDivision.style'
import { globalState } from '../../context'

const LeftDivision = () => {
    const classes = leftDivisionStyles();
    const { state: { data }, dispatch } = useContext(globalState)

    return (
        <Paper className={classes.paper} elevation={3}>
            {data.map(({ heading, subHeadings }, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <Typography variant="h6" className={classes.title}>
                            {heading}
                        </Typography>
                        {subHeadings.map((item, index) => {
                            return (
                                <List dense component="div" role="list" key={index}>
                                    <ListItem role="listitem" button className={classes.listItem}>
                                        <ListItemIcon>
                                            <Checkbox
                                                checked={item.checked}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': item.text }}
                                                onClick={() => dispatch({ type: 'TOGGLE_CHECKBOX', payload: { id: item.id } })}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            className={classes.listItemText}
                                            id={item.text}
                                            primary={item.text}
                                        />
                                    </ListItem>
                                </List>
                            )
                        })}
                    </React.Fragment>
                )
            })
            }
        </Paper>
    )
}

export default LeftDivision;