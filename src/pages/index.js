import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Categorybar from "@/components/Categorybar";
import BigPost from "@/components/BigPost";
import { fetchHeadlines } from "@/utils/Requests";
import axios from "axios";
import { useDispatch } from "react-redux";
import { newsAdd } from "@/redux/actions/newsSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const dispatch = useDispatch();

  dispatch(newsAdd(props.results.articles));

  // console.log(props.results.articles[0]);
  return (
    <>
      <Head>
        <title>News-app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Categorybar />
        <BigPost item={props.results.articles} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;

  const data = await fetchHeadlines();
  // console.log(data)

  return {
    props: {
      results: data,
    },
  };
}
