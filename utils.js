MoralisRun()

async function MoralisRun(){
    await Moralis.start({
        apiKey:
          process.env.MORALIS_API_KEY,
      })
}