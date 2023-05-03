import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hisanari Maezawa</title>
      </Head>

      <main className="grid place-items-center">
        <div className='my-6'>
          <h1 className="text-2xl font-bold">Hisanari Maezawa</h1>
        </div>
        <div className="w-1/2 my-3">
          <h2 className="text-xl font-bold">自己紹介</h2>
          <div className='mx-2'>
            <p>
              1987年 栃木県生まれ 東京都在住<br />
              高校卒業後、2007年に人材育成企業に入社。<br />
              業務内でExcel VBAに触れたことをきっかけにプログラミングにハマる。< br />
              プログラマを目指し、2018年に退社。<br />
              2018年10月に都内のシステム開発会社に入社。<br />
              主にRubyを用いたwebアプリケーションの開発・運用に従事。
            </p>
          </div>
       </div>
        <div className='w-1/2 my-3'>
          <h2 className="text-xl font-bold">開発経験</h2>
          <div className='mx-2'>
            <ul className='list-disc list-inside'>
              <li>ECサイト向け商品情報・レビュー配信APIの開発</li>
              <li>クリニック向け予約・勤怠・請求システムの新規開発、保守</li>
              <li>大手企業のBtoBtoC向けの転職サービスの新規サービス開発、改修、運用、保守</li>
              <li>メール一斉配信システムの開発</li>
              <li>日払い給与即時支払サービスの新規開発</li>
            </ul> 
          </div>
       </div>
        <div className='w-1/2 my-3'>
          <h2 className="text-xl font-bold">経験言語・フレームワーク・ツール</h2>
          <div className='mx-2'>
             <ul className='list-disc list-inside'>
              <li>Ruby/Ruby on Rails</li>
              <li>Go言語</li>
              <li>MySQL</li>
              <li>AWS(EC2, EDS, ELB, Route53, S3など)</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
       </div>
        <div className='w-1/2 my-3'>
          <h2 className="text-xl font-bold">好きなこと</h2>
          <div className='mx-2'>
            <p>お酒/音楽を聴くこと(90年代)/ギターを弾くこと</p>
          </div>
        </div>
     </main>

      <footer className="grid place-items-center">
          Created by Hisanari Maezawa
      </footer>
    </div>
  )
}
