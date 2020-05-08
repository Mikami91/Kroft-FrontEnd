// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActions,
	CardActionArea,
	CardMedia,
	Container,
	CssBaseline,
	GridListTileBar,
	Tooltip
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

// import GridItem from '../../components/Grid/GridItem.js';
// import Card from '../../components/Card/Card.js';
// import CardHeader from '../../components/Card/CardHeader.js';
// import CardIcon from '../../components/Card/CardIcon.js';
// import CardFooter from '../../components/Card/CardFooter.js';
// import Store from '@material-ui/icons/Store';
// import DateRange from '@material-ui/icons/DateRange';
// Styles
import styles from '../../styles/components/gridStyle';
// Assets
import image from '../../assets/img/defaults/table.png';

const useStyles = makeStyles(styles);

const imagesStyle = {
	green: { backgroundColor: "green" },
	red: { backgroundColor: "red" },
	tellow: { backgroundColor: "yellow" },
}

export default function GridTables (props) {
	const classes = useStyles();
	const { filter, data, className } = props;
	return (
		// <Grid container spacing={0} direction="row" justify="center" alignItems="center">
		data.map((index, key) => {
			if (index.id_environment === filter) {

				const gridClasses = classNames({
					[classes.tables]: true,
				});
				const cardClasses = classNames({
					[classes[ index.state === 0 ? "green" : index.state === 1 ? "red" : "yellow" ]]: true
				});

				return (
					<Grid
						key={key}
						item
						xs={4}
						sm={3}
						md={2}
						lg={2}
						xl={1}
						elevation={0}
						className={gridClasses}
						// style={{ backgroundColor: 'red' }}
						// square="true"
					>
									
						<CardActionArea>
							<Card className={cardClasses}>
								<CardMedia
									component="img"
									// height="140"
									className={classes.image}
									image={image}
									title={index.name}
									//onClick={getKeyByValue(index.id)}
								/>
								{/* <GridListTileBar
									key={index.id}
									titlePosition="bottom"
									style={{ backgroundColor: index.state === 0 ? '#00af2d' : index.state === 1 ? '#d40000' : '#fb7f00', fontSize: 10, height: 'auto' }}
									title={index.id}
									actionIcon={
										<CardActions disableSpacing style={{ padding: 0 }}>
											<Tooltip
												placement="bottom"
												title={
													index.state === 0 ? (
														'Disponible'
													) : index.state === 1 ? (
														'Ocupado'
													) : (
														'Por cobrar'
													)
												}
											>
												<InfoIcon style={{ color: 'white' }} fontSize="small"/>
											</Tooltip>
										</CardActions>
									}
								/> */}
							</Card>
						</CardActionArea>

						{/* <CardIcon style={{ margin: 0 }} color="success">
								<Store />
							</CardIcon> */}
					</Grid>
				);
			}
			return null;
		})
		// </Grid>
	);
}

GridTables.defaultProps = {
	className: ''
};

GridTables.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};
