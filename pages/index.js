import Head from "next/head";
import HomeFeed from "../src/component/page/HomeFeed";
export default function Home() {
  return (
   <div>
    <Head>
      <title>최진석의 이력서입니다.</title>
      <meta name="description" content="최진석의 이력서"></meta>
    </Head>
    <HomeFeed/>
   </div>
  )
}
