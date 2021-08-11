import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Gohar</title>
        <meta name="description" content="Personal website for Gohar Iqbal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{margin: 'auto', width: '66%'}}>
        <h1>
          Welcome to my personal website powered by Web3
        </h1>
        <pre style={{float: 'left'}}>
          {
            `
██     ██  █████   █████  ███████ ███████ ███████ ███████  █████   █████  
██     ██ ██   ██ ██   ██    ███     ███     ███     ███  ██   ██ ██   ██ 
██  █  ██ ███████ ███████   ███     ███     ███     ███   ███████ ███████ 
██ ███ ██ ██   ██ ██   ██  ███     ███     ███     ███    ██   ██ ██   ██ 
 ███ ███  ██   ██ ██   ██ ███████ ███████ ███████ ███████ ██   ██ ██   ██ 
            `
          }
        </pre>
      </main>
    </div>
  )
}
