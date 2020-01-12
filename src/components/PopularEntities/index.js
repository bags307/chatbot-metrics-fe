import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import axios from 'axios'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
function preventDefault(event) {
    event.preventDefault();
}



export default function PopularEntities(props) {
    const [popEntities, setPopEntities] = useState(props.entities)
    const [count, setCount] = useState(0);
    const [dif, setDif] = useState(0)
    const [isNeg, setIsNeg] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
/*
let popular = []
            let unpopular = []
            const results = result.data.results

            results.forEach((result) => {
                if (result.occurrences.en > 0) {
                    console.log(result)
                    let obj = {
                        name: result.entity.name,
                        color: result.entity.color,
                        id: result.entity.id,
                        count: result.occurrences.en

                    }
                    popular.push(obj)
                }

                else {

                    let obj = {
                        name: result.entity.name,
                        color: result.entity.color,
                        id: result.entity.id,
                        count: result.occurrences.en
                    }
                    unpopular.push(obj)
                }

            })
            //console.log(entities)
            (props.type === 'popular') ? setPopEntities(popular) : setPopEntities(unpopular)
 */

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/distributions/entities?dateStart=${props.start}&dateEnd=${props.end}`);

            let popular = []
            let unpopular = []
            const results = result.data.results

            results.forEach((result) => {

                if (result.occurrences.en > 0){
                    console.log(result)
                   let obj = {
                       name:result.entity.name,
                       color:result.entity.color,
                       id:result.entity.id,
                       count:result.occurrences.en

                    }
                    popular.push(obj)
                } else {
                    let obj = {
                        name: result.entity.name,
                        color: result.entity.color,
                        id: result.entity.id,
                        count: result.occurrences.en
                    }
                    unpopular.push(obj)

                }
            })
            //console.log(entities)
            console.log(props.start)
            console.log(props.end)
            if (props.type != 'popular') {
                 setPopEntities(unpopular)
            } else {
                setPopEntities(popular)
            }

        }
        setIsLoading(false)

        fetchData()



    }, [props]);

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            padding: theme.spacing(0.5),
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    }));
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.title}</Title>

            <div className={classes.root}>
            {isLoading ? 'Loading...' : popEntities.map(entity => {
                return (
                    <Chip
                    label={entity.name}
                    className={classes.chip}

                    />)
            })}
            </div>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View {(props.title.toLowerCase() != 'total messages') ? props.title.toLowerCase() : 'messages'}
                </Link>
            </div>
        </React.Fragment>
    );
}
