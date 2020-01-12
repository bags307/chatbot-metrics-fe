import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import axios from 'axios'
function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    statContext: {
        flex: 1,
    },
});

export default function Stat(props) {
    const [count, setCount] = useState(0);
    const [dif, setDif] = useState(0)
    const [isNeg, setIsNeg] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/summaries/${props.type}?dateStart=${props.dateStart}&dateEnd=${props.dateEnd}`);
            if (props.type != 'messages') {
                setCount(result.data.results.current)
                setDif(result.data.results.current - result.data.results.previous)
                console.log(result)
                let negCheck = result.data.results.current - result.data.results.previous
                if (negCheck < 0) {
                    setIsNeg(true)

                } else {
                    setIsNeg(false)
                }
            } else {
                setCount(result.data.results.total.current)
                setDif(result.data.results.total.current - result.data.results.total.previous)
                console.log(result)
                let negCheck = result.data.results.total.current - result.data.results.total.previous
                if (negCheck < 0) {
                    setIsNeg(true)

                } else {
                    setIsNeg(false)
                }
            }
            setIsLoading(false)


        };
        fetchData()


    }, [props]);
    const classes = useStyles();
    return   (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h4">
                { isLoading ? 'Loading...' : count}
            </Typography>
            <Typography color="textSecondary" className={classes.statContext}>
                {isNeg ? 'a': 'an'} {isNeg ? 'decrease': 'increase'} of {dif}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View {(props.title.toLowerCase() != 'total messages') ? props.title.toLowerCase() : 'messages'}
                </Link>
            </div>
        </React.Fragment>
    ) ;
}
