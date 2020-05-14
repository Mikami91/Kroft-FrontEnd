// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
// Core components
import CardPrice from '../../components/Card/CardPrice.js';
import CardProduct from '../../components/Card/CardProduct.js';

// import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Tasks from "../../components/Tasks/Tasks.js";
import Danger from "../../components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";


// Styles
import styles from '../../styles/components/gridStyle';
// Assets
import image from '../../assets/img/defaults/product.png';

const useStyles = makeStyles(styles);

export default function GridProducts(props) {
	const classes = useStyles();
	const { filter, data, color } = props;
	return (
		data.map((index, key) => {
			if (index.id_environment === filter) {

				const gridClasses = classNames({
					[classes.products]: true,
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

						<CardProduct
							// color="success"
							color={color}
							prefix="Bs."
							price={index.id}
							name={index.name}
						/>
							

						{/* <CardActionArea>
							<Card className={cardClasses}>
								<CardMedia
									component="img"
									// height="140"
									className={classes.image}
									image={image}
									title={index.name}
									//onClick={getKeyByValue(index.id)}
								/>
								
								<CardPrice 
									color={color}
									prefix="Bs."
									text={index.id}
								/>
								<CardName 
									color={color}
									text={index.name}
								/>
								
							</Card>
						</CardActionArea> */}

					</Grid>
				);
			}
			return null;
		})
	);
}
// Proptypes
GridProducts.defaultProps = {
	filter: "",
	data: [],
	color: "primary"
};
GridProducts.propTypes = {
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
