import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reading view</title>
      </Head>
      <main>
        <div className={styles.pageView}>
          <div className={styles.LeftSideBar}>
            <p>Chapter 11: </p>
            <h1>Progress</h1>
            <Link href='#' className={styles.nextPagelink}>Next : Ignore the details early on</Link>
          </div>
          <div className={styles.mainContent}>
            <h2 >Start At The Epicenter</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              ipsam rem debitis dolor officiis error? Quae, dicta nesciunt. Qui
              exercitationem fugiat ducimus quasi obcaecati molestias dolorum
              suscipit fugit in soluta. Expedita aperiam quaerat rerum quam
              dolorum! Id dolor repellendus maiores voluptas distinctio labore
              similique dolorum tempore cum repellat. Nostrum quasi vel iusto,
              eum incidunt unde recusandae corporis accusantium quae pariatur?
              Quibusdam blanditiis eaque explicabo quaerat laboriosam, minus
              exercitationem nemo accusamus quas earum maiores amet mollitia
              molestiae autem assumenda. Minima porro natus deserunt unde nam
              quod consequatur obcaecati quis delectus suscipit! Fuga, sapiente
              minus ut in aliquid fugiat aliquam dolor dolorem temporibus natus.
            </p>
            <p>
              Numquam sunt, minus quo corrupti repudiandae laboriosam dolorem
              natus labore fugit facilis. Et exercitationem expedita error
              perspiciatis molestiae? Non ratione possimus quasi. Nesciunt ad
              voluptate quo consequatur, at soluta cumque perferendis autem odit
              maiores, maxime inventore eaque molestiae. Et tempora sequi
              eligendi temporibus quis vitae natus ullam repellat! Id officia
              recusandae delectus harum nesciunt repellendus, modi consequuntur
              aliquam dicta nisi vitae non voluptas pariatur odit, commodi omnis
              veritatis unde explicabo nobis cum sit. Accusamus temporibus
              incidunt neque quisquam? Obcaecati voluptas numquam, veritatis
              nisi nulla adipisci iste. Ratione nihil optio libero repudiandae
              suscipit eligendi, asperiores illum magnam ducimus magni saepe!
              Quidem numquam quo eum suscipit earum eos repellendus modi! Nisi
              itaque in et voluptatum, ipsa ratione quas tempora esse ex quos
              pariatur voluptates soluta qui amet perferendis optio illum neque,
              culpa expedita sit quidem laudantium! Laudantium unde nostrum
              esse.{" "}
            </p>
            <p>
              Ut, similique facere! Distinctio aspernatur officiis deleniti unde
              nesciunt inventore ut voluptate modi! Saepe quaerat aliquam quasi
              adipisci esse quis nemo a. Illum doloremque beatae hic aperiam
              soluta eum asperiores. Repellat corrupti id excepturi saepe. Nobis
              magni quisquam doloremque ducimus corrupti commodi ipsa tempora
              quasi vitae blanditiis non, amet asperiores nostrum eveniet, quae
              labore accusantium? Voluptate aliquid expedita
            </p>
            <Link href='#' className={styles.nextPagelink}>Next : Ignore the details early on</Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
Head;
