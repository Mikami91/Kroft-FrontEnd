import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
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
// Assets
import image from '../../assets/img/defaults/table.png';

const styles = {
	grid: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingRight: '15px',
		paddingLeft: '15px',
		flexBasis: 'auto'
	}
};

const useStyles = makeStyles(styles);

export default function GridTables (props) {
	const classes = useStyles();
	const { filter, data, className } = props;
	return (
		// <Grid container spacing={0} direction="row" justify="center" alignItems="center">
		data.map((index, key) => {
			if (index.id_environment === filter) {
				return (
					<Grid
						key={key}
						item
						xs={4}
						sm={3}
						md={2}
						lg={2}
						xl={1}
                        elevation={5}
						// style={{ backgroundColor: 'red' }}
						// square="true"
						// className={classes.container}
					>
						<CardActionArea>
							<Card>
								<CardMedia
									component="img"
									// height="140"
                                    // className={style.cardMedia}
                                    style={{ width: 100, height: 100, objectPosition: 'center', margin: "auto" }}
									image={image}
									// title={index.name}
									//onClick={getKeyByValue(index.id)}
								/>
								<GridListTileBar
									key={index.id}
									titlePosition="bottom"
									// style={{ backgroundColor: index.state === 0 ? '#00af2d' : index.state === 1 ? '#d40000' : '#fb7f00', fontSize: 10, height: 'auto' }}
									title={index.name}
									actionIcon={
										<CardActions disableSpacing style={{ padding: 0 }}>
											{/* <Tooltip
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
											</Tooltip> */}
										</CardActions>
									}
								/>
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
