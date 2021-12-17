import {
  CardActionArea,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import Head from "next/head";
import data from "../utils/data";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>$ {product.price}</Typography>
                  <Button size="small" color="primary">
                    {" "}
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
