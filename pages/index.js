import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ポートフォリオ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hisanari Maezawa
        </h1>
        <h2>自己紹介</h2>
        <p>
          1987年 栃木県生まれ<br />
          高校卒業後、2007年に人材育成企業に入社。<br />
          業務内でExcel VBAに触れたことをきっかけにプログラミングにハマる。< br />
          プログラマを目指し、2018年に退社。<br />
          2018年に都内のシステム開発会社に入社。<br />
          主にRubyを用いたwebアプリケーションの開発・運用に従事。
        </p>
        <h2>開発経験</h2>
        <ul>
          <li>大手企業のBtoBtoC向けの転職サービスの新規サービス開発、改修、運用、保守(約3年)</li>
          <li>メール一斉配信システムの開発(6ヶ月)</li>
          <li>日払い給与即時支払サービスの新規開発(3ヶ月)</li>
        </ul>
        <h2>経験言語・フレームワーク・ツール</h2>
        <ul className={styles.experienced_list}>
          <li>Ruby/Ruby on Rails</li>
          <li>MySQL</li>
          <li>AWS(EC2, EDS, ELB, Route53, S3など)</li>
          <li>Git/GitHub</li>
        </ul>
        <h2>好きなこと</h2>
        <h3>音楽を聴くこと/ギターを弾くこと</h3>
     </main>

      <footer className={styles.footer}>
          Created by Hisanari Maezawa
      </footer>
    </div>
  )
}
