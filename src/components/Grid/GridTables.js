// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// Core components
import CardNumber from '../../components/Card/CardNumber.js';
// Styles
import styles from '../../styles/components/gridStyle';
// Assets
import image from '../../assets/img/defaults/table.png';

const useStyles = makeStyles(styles);

export default function GridTables(props) {
	const classes = useStyles();
	const { filter, data, color } = props;
	return (
		data.map((index, key) => {
			if (index.id_environment === filter) {

				const gridClasses = classNames({
					[classes.tables]: true,
				});
				const cardClasses = classNames({
					[classes[index.state === 0 ? "green" : index.state === 1 ? "red" : "yellow"]]: true
				});

				return (
					<Grid
						key={key}
						item
						xs={4}
						sm={3}
						md={2}
						lg={2}
						xl={2}
						elevation={0}
						className={gridClasses}
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
								<CardNumber color={color} className={classes.cardNumber}>
									<Typography
										component="span"
										variant="subtitle1"
										className={classes.cardText}
										color="initial"
									>
										{index.id}
									</Typography>
								</CardNumber>
							</Card>
						</CardActionArea>
					</Grid>
				);
			}
			return null;
		})
	);
}
// Proptypes
GridTables.defaultProps = {
	filter: "",
	data: [],
	color: "primary"
};
GridTables.propTypes = {
	filter: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	data: PropTypes.array,
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"warning",
		"success",
		"danger",
		"info",
		"rose"
	]),
};
