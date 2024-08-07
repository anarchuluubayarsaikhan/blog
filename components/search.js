import Script from 'next/script'

export default async function Search({params}) {
    return (
      <main>
        <Script async src="https://cse.google.com/cse.js?cx=32b1cc46aa1524cf5" />
        <div class="gcse-searchbox"></div>
        <div class="gcse-searchresults"></div>
      </main>
    )
  }